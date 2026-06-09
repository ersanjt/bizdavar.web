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

mkdir -p "$WEB_ROOT/assets" "$WEB_ROOT/pages"
cp -f index.html robots.txt sitemap.xml "$WEB_ROOT/"
cp -a assets/. "$WEB_ROOT/assets/"
cp -a pages/. "$WEB_ROOT/pages/"

echo "[$(date -Iseconds)] Deployed $BRANCH to $WEB_ROOT"
