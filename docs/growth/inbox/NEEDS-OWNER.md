# Needs owner

Items the daily agent cannot finish alone. Newest first.

- 2026-10-21 DEPLOY: pushes to `main` do not reach bizdavar.com automatically (live still serves `site-loader.js?v=20261003a` after pushing 3442ca0e2). Fix: as root in WHM Terminal, install the 15-minute cron for `scripts/auto-deploy.sh` (deploys only when `origin/main` moved, keeps the 5 newest public_html backups). Until then run `bash scripts/deploy-sync.sh` on the server after the daily run.

- 2026-10-21 P0-03: connect Search Console API — follow `docs/growth/GSC-SETUP.md`, then add the `GSC_SERVICE_ACCOUNT_JSON` secret for cloud agents.
- 2026-10-21 P1-05: optional — export the "Not found (404)" and "Server error (5xx)" lists from Search Console → Pages and drop the CSV files in this folder.
