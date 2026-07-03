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

mkdir -p "$WEB/.well-known/acme-challenge" "$WEB/.well-known/pki-validation"

chown -R "$CPANEL_USER:$CPANEL_USER" "$WEB"
find "$WEB" -type d -exec chmod 755 {} \;
find "$WEB" -type f -exec chmod 644 {} \;

# Fix git metadata if pull was run as root
chown "$CPANEL_USER:$CPANEL_USER" "$REPO/.git/index" "$REPO/.git/ORIG_HEAD" 2>/dev/null || true

echo "===== TEST ====="
curl -sI -L --max-time 20 https://bizdavar.com/ | head -10
echo "---"
curl -sI -L --max-time 20 https://www.bizdavar.com/ | head -10

echo "===== PURGE LITESPEED CACHE ====="
rm -rf "/home/$CPANEL_USER/lscache"/* 2>/dev/null || true
if [[ -x /usr/local/lsws/bin/lswsctrl ]]; then
  /usr/local/lsws/bin/lswsctrl restart 2>/dev/null || true
fi

echo "[$(date -Iseconds)] Deploy sync complete → $WEB"
