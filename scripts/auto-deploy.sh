#!/bin/bash
# Root cron on the WHM server: deploy bizdavar.com only when origin/main has moved.
#   */15 * * * * bash /home/bizdavar/repositories/bizdavar.web/scripts/auto-deploy.sh >> /var/log/bizdavar-auto-deploy.log 2>&1
# Wrapped in main() so bash parses everything before git rewrites this file mid-run.
set -euo pipefail

main() {
  local REPO="${REPO:-/home/bizdavar/repositories/bizdavar.web}"
  local BRANCH="${BRANCH:-main}"
  local KEEP_BACKUPS="${KEEP_BACKUPS:-5}"

  exec 9>/tmp/bizdavar-auto-deploy.lock
  flock -n 9 || exit 0

  if [[ ! -d "$REPO/.git" ]]; then
    mkdir -p "$(dirname "$REPO")"
    git clone -q https://github.com/ersanjt/bizdavar.web.git "$REPO"
  fi
  git config --global --add safe.directory "$REPO" 2>/dev/null || true
  cd "$REPO"

  git fetch -q origin "$BRANCH"
  local remote last stamp="$REPO/.git/last-deployed"
  remote="$(git rev-parse "origin/$BRANCH")"
  last="$(cat "$stamp" 2>/dev/null || true)"
  [[ "$remote" == "$last" ]] && exit 0

  echo "[$(date -Iseconds)] deploying $(git log -1 --format='%h %s' "$remote") (previous: ${last:0:9})"
  git reset -q --hard "origin/$BRANCH"
  bash "$REPO/scripts/deploy-sync.sh"
  echo "$remote" > "$stamp"

  # deploy-sync.sh tars public_html into /root on every run; keep only the newest few.
  ls -1t /root/bizdavar-public_html-before-sync-*.tar.gz 2>/dev/null | tail -n +"$((KEEP_BACKUPS + 1))" | xargs -r rm -f
  echo "[$(date -Iseconds)] deployed $remote"
}

main "$@"
exit 0
