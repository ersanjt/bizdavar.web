#!/bin/bash
# Manual deploy script for cPanel (run as cPanel user, not root)
set -euo pipefail

REPO_DIR="${REPO_DIR:-$HOME/repositories/bizdavar.web}"
WEB_ROOT="${WEB_ROOT:-$HOME/public_html}"
BRANCH="${BRANCH:-main}"

if [[ ! -d "$REPO_DIR/.git" ]]; then
  echo "Repository not found: $REPO_DIR"
  echo "Clone first: git clone git@github.com:ersanjt/bizdavar.web.git $REPO_DIR"
  exit 1
fi

cd "$REPO_DIR"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

mkdir -p "$WEB_ROOT/assets" "$WEB_ROOT/pages" "$WEB_ROOT/.well-known/acme-challenge"

if command -v rsync >/dev/null 2>&1; then
  rsync -av --delete \
    --exclude .git/ \
    --exclude .cpanel.yml \
    --exclude .gitignore \
    --exclude .well-known/ \
    --exclude docs/ \
    --exclude scripts/ \
    --exclude README.md \
    --exclude '*.zip' \
    "$REPO_DIR/" "$WEB_ROOT/"
  mkdir -p "$WEB_ROOT/.well-known/acme-challenge" "$WEB_ROOT/.well-known/pki-validation"
else
  /bin/cp -f index.html robots.txt sitemap.xml .htaccess "$WEB_ROOT/"
  /bin/cp -a assets/. "$WEB_ROOT/assets/"
  /bin/cp -a pages/. "$WEB_ROOT/pages/"
fi

echo "[$(date -Iseconds)] Deployed $BRANCH ($(git rev-parse --short HEAD)) to $WEB_ROOT"
