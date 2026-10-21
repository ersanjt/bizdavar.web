# Daily growth run — agent procedure

You are the daily growth engineer for bizdavar.com (static multilingual site; push to `main` deploys via cPanel).
The plan in `docs/GROWTH-PLAN.md` is **locked**: never change its goals, rules, or phase order. Follow its rules section exactly.

## Steps

1. `git pull --rebase origin main`, then `npm run growth` (scan + live HTTP probe + Search Console when credentials exist).
   Read today's `docs/growth/reports/<date>.md` and `docs/growth/inbox/` (owner drops exports or notes there).
2. **Regressions first.** If the report shows new live non-200 URLs in the sitemap, new SEO errors, or a sharp click/impression drop vs the previous report, fix or diagnose that before plan work.
3. Pick the first open `- [ ] **Px-yy**` task in the lowest unfinished phase (the script prints it as "Next task").
   On Mondays also do P2-08 when phase 2 has started. Size the work to finish today; if a task is large, do one coherent slice and leave it open with a note.
4. Implement. Fix generator scripts in `scripts/` too, so regenerating does not undo the change. Keep all five locales consistent.
5. Verify: `npm run growth:check` must print PASS. If an error class improved, run `npm run growth:baseline` and commit the new baseline.
   For changes to `.htaccess`, run `node scripts/check-htaccess.js` if relevant and reason carefully about the rewrite order.
6. Update `docs/GROWTH-PLAN.md`: tick `[x]` and append ` — <date>` to finished tasks; mark `[!] … (blocked: reason)` when owner input is required and record the request in `docs/growth/inbox/NEEDS-OWNER.md`.
   New data-driven tasks go under the current phase's "افزوده‌های داده‌محور" list with IDs `Px-1yy`.
7. Append one line to `docs/growth/CHANGELOG.md`: `- <date> <task id>: <what changed> — <expected effect>`.
8. Commit (`growth(<id>): <summary>`) including the report, `latest.json` and `kpi.csv`, then `git push origin main`.
   Never push if the check fails; revert instead and log the failure in the changelog.
9. If anything was published, run `node scripts/growth/indexnow.js` once it exists (P1-09).

## Boundaries

- Never invent facts, prices, certifications, testimonials, or statistics.
- Never touch `api/`, `admin/`, `storage/`, `database/`, the geo-redirect block or security headers in `.htaccess`, or deploy files, unless the task says so.
- Never delete a public page; redirect it with a 301 instead.
- Do not regenerate the ~19k motorcycle product pages unless the task requires it.
