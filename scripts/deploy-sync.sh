#!/bin/bash
# WHM/root: git pull + rsync repo → cPanel public_html (with backup)
# Usage: bash scripts/deploy-sync.sh
# Or on server: bash /home/bizdavar/repositories/bizdavar.web/scripts/deploy-sync.sh
set -euo pipefail

REPO="${REPO:-/home/bizdavar/repositories/bizdavar.web}"
WEB="${WEB:-/home/bizdavar/public_html}"
CPANEL_USER="${CPANEL_USER:-bizdavar}"
BRANCH="${BRANCH:-main}"
BACKUP_DIR="${BACKUP_DIR:-/root}"
TS=$(date +%F-%H%M)

if [[ ! -d "$REPO/.git" ]]; then
  echo "Repository not found: $REPO"
  exit 1
fi

echo "===== GIT PULL ====="
git config --global --add safe.directory "$REPO" 2>/dev/null || true
cd "$REPO"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"
echo "HEAD: $(git rev-parse --short HEAD) — $(git log -1 --format=%s)"

echo "===== BACKUP CURRENT PUBLIC_HTML ====="
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/bizdavar-public_html-before-sync-$TS.tar.gz" \
  -C "/home/$CPANEL_USER" public_html
echo "Backup: $BACKUP_DIR/bizdavar-public_html-before-sync-$TS.tar.gz"

echo "===== REMOVE STALE LOCALE DIRS (shadow virtual /tr /en routes) ====="
rm -rf "$WEB/tr" "$WEB/en" "$WEB/fa" 2>/dev/null || true

echo "===== RSYNC REPO → PUBLIC_HTML ====="
rsync -av --delete \
  --exclude .git/ \
  --exclude .cpanel.yml \
  --exclude .gitignore \
  --exclude .well-known/ \
  --exclude docs/ \
  --exclude scripts/ \
  --exclude README.md \
  --exclude '*.zip' \
  --exclude .cursor/ \
  --exclude api/config.php \
  "$REPO/" "$WEB/"

echo "===== FORCE SYNC assets/scripts (JS bundles) ====="
rsync -av "$REPO/assets/scripts/" "$WEB/assets/scripts/"

echo "===== TOUCH HTML + JS (cache bust on origin) ====="
find "$WEB/assets/scripts" -type f -name '*.js' -exec touch {} + 2>/dev/null || true
find "$WEB/assets/images/products" -type f \( -name '*.jpg' -o -name '*.svg' -o -name '*.webp' -o -name '*.png' \) -exec touch {} + 2>/dev/null || true
find "$WEB/pages" -type f -name '*.html' -exec touch {} + 2>/dev/null || true
touch "$WEB/index.html" 2>/dev/null || true

mkdir -p "$WEB/.well-known/acme-challenge" "$WEB/.well-known/pki-validation"

chown -R "$CPANEL_USER:$CPANEL_USER" "$WEB"
find "$WEB" -type d -exec chmod 755 {} \;
find "$WEB" -type f -exec chmod 644 {} \;

# Fix git metadata if pull was run as root
chown "$CPANEL_USER:$CPANEL_USER" "$REPO/.git/index" "$REPO/.git/ORIG_HEAD" 2>/dev/null || true

echo "===== TEST (public) ====="
curl -sI -L --max-time 20 https://bizdavar.com/ | head -10
echo "---"
curl -sI -L --max-time 20 https://www.bizdavar.com/ | head -10
echo "---"
curl -sI --max-time 20 https://bizdavar.com/tr | grep -E 'HTTP|Location' || true
echo "---"
curl -sI --max-time 20 https://bizdavar.com/en | grep -E 'HTTP|Location' || true

echo "===== RESTART APACHE / HTTPD ====="
/scripts/restartsrv_httpd 2>/dev/null || systemctl restart httpd 2>/dev/null || service httpd restart 2>/dev/null || true
sleep 3

echo "===== PURGE LITESPEED / LOCAL CACHE ====="
touch "$WEB/index.html" 2>/dev/null || true
rm -rf "/home/$CPANEL_USER/lscache"/* 2>/dev/null || true
find "/home/$CPANEL_USER" -maxdepth 4 -type d -name 'lscache' 2>/dev/null | while read -r d; do
  rm -rf "$d"/* 2>/dev/null || true
done
for ls_cache in \
  /usr/local/lsws/cachedata \
  /tmp/lshttpd/swap \
  /tmp/lshttpd/cache; do
  rm -rf "$ls_cache"/* 2>/dev/null || true
done
/scripts/restartsrv_lsws 2>/dev/null || true
if [[ -x /usr/local/lsws/bin/lswsctrl ]]; then
  /usr/local/lsws/bin/lswsctrl restart 2>/dev/null || true
fi
sleep 2

echo "===== ORIGIN VERIFY (bypass Cloudflare) ====="
# Never follow redirects on localhost — http→https would reach Cloudflare and lie about origin
origin_http_code() {
  local path="$1"
  local code=""
  code=$(curl -sk -o /dev/null -w '%{http_code}' --max-redirs 0 \
    -H "Host: bizdavar.com" -H "Cache-Control: no-cache" \
    "https://127.0.0.1${path}" 2>/dev/null) || code=""
  if [[ "$code" == "200" ]]; then
    echo "$code"
    return
  fi
  code=$(curl -sf -o /dev/null -w '%{http_code}' --max-redirs 0 \
    -H "Host: bizdavar.com" -H "X-Forwarded-Proto: https" -H "Cache-Control: no-cache" \
    "http://127.0.0.1${path}" 2>/dev/null) || code="0"
  echo "$code"
}

ORIGIN_CURL=(curl -sfL -H "Host: bizdavar.com" -H "Cache-Control: no-cache" -H "Pragma: no-cache")
ORIGIN_OK=0
for attempt in 1 2 3 4 5; do
  if curl -sfL -H "Host: bizdavar.com" http://127.0.0.1/ 2>/dev/null | grep -q 'GTM-NXWQQWF8'; then
    echo "OK: GTM-NXWQQWF8 visible on origin (attempt $attempt)"
    ORIGIN_OK=1
    break
  fi
  sleep 2
done
if [[ "$ORIGIN_OK" -eq 0 ]]; then
  echo "WARN: GTM not on origin after 5 attempts — run: curl -sL -H 'Host: bizdavar.com' http://127.0.0.1/ | head -15"
fi

for locale_path in /tr /en; do
  code=$(origin_http_code "$locale_path")
  if [[ "$code" == "200" ]]; then
    echo "OK: origin ${locale_path} → HTTP 200 (no redirect follow)"
  else
    echo "WARN: origin ${locale_path} → HTTP ${code} (check .htaccess; rm -rf public_html/tr public_html/en)"
  fi
done

echo "===== CLOUDFLARE vs ORIGIN (/tr) ====="
ORIGIN_TR=$(origin_http_code /tr)
PUB_TR=$(curl -sI -o /dev/null -w '%{http_code}' --max-redirs 0 --max-time 20 https://bizdavar.com/tr 2>/dev/null || echo 0)
PUB_TR_LOC=$(curl -sI --max-redirs 0 --max-time 20 https://bizdavar.com/tr 2>/dev/null | awk 'tolower($1)=="location:"{print $2}' | tr -d '\r')
if [[ "$ORIGIN_TR" == "200" && "$PUB_TR" != "200" ]]; then
  echo "ACTION REQUIRED: Apache serves /tr (HTTP 200) but Cloudflare returns HTTP ${PUB_TR}"
  [[ -n "$PUB_TR_LOC" ]] && echo "  Cloudflare Location: ${PUB_TR_LOC}"
  echo "  Fix: Cloudflare Dashboard → Rules → Redirect Rules (or legacy Page Rules)"
  echo "       Remove any rule that redirects /tr to / — then Purge Everything"
elif [[ "$ORIGIN_TR" == "200" && "$PUB_TR" == "200" ]]; then
  echo "OK: /tr live on origin and public (Cloudflare)"
else
  echo "WARN: origin /tr=${ORIGIN_TR} public /tr=${PUB_TR}"
fi

DISK_INTEL="$WEB/assets/scripts/config/company-intel.js"
ORIGIN_INTEL_BYTES=$("${ORIGIN_CURL[@]}" "http://127.0.0.1/assets/scripts/config/company-intel.js?v=$TS" 2>/dev/null | wc -c | tr -d ' ')
DISK_INTEL_BYTES=$(wc -c < "$DISK_INTEL" 2>/dev/null | tr -d ' ')
echo "company-intel.js bytes — disk: ${DISK_INTEL_BYTES:-?} origin: ${ORIGIN_INTEL_BYTES:-0}"

if [[ -n "${DISK_INTEL_BYTES:-}" && "${ORIGIN_INTEL_BYTES:-0}" != "$DISK_INTEL_BYTES" ]]; then
  echo "WARN: origin serving stale company-intel.js (purge LiteSpeed + Cloudflare)"
fi

if "${ORIGIN_CURL[@]}" "http://127.0.0.1/assets/scripts/config/company-intel.js?v=$TS" 2>/dev/null | grep -q 'exhibitions:'; then
  echo "OK: company-intel.js includes exhibitions block"
else
  echo "WARN: company-intel.js on origin missing exhibitions — purge LiteSpeed/Cloudflare cache"
fi

if "${ORIGIN_CURL[@]}" "http://127.0.0.1/assets/scripts/components/grids.js?v=$TS" 2>/dev/null | grep -q 'intelVerifiedSources'; then
  echo "OK: grids.js includes verified sources renderer"
else
  echo "WARN: grids.js on origin missing intelVerifiedSources — purge LiteSpeed/Cloudflare cache"
fi

if curl -sfL -H "Host: bizdavar.com" "http://127.0.0.1/assets/scripts/components/grids.js" 2>/dev/null | grep -q 'initOwnedProductsPage'; then
  echo "OK: grids.js includes products catalog renderer"
else
  echo "WARN: grids.js on origin missing initOwnedProductsPage — check assets/scripts sync"
fi

if curl -sfL -H "Host: bizdavar.com" "http://127.0.0.1/assets/scripts/config/owned-products.js" 2>/dev/null | grep -q 'biztab'; then
  echo "OK: owned-products.js includes product catalog"
else
  echo "WARN: owned-products.js missing on origin — check assets/scripts sync"
fi

echo "[$(date -Iseconds)] Deploy sync complete → $WEB"
