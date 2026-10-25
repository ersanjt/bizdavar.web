# Growth changelog

- 2026-10-25 P1-02: 15 existing articles × 5 locales added to sitemap and llms.txt; duplicate `/pages/uwt` removed — those pages can be discovered.
- 2026-10-21 P0-01: growth tooling (`scripts/growth/`) — daily SEO scan, live HTTP probe, Search Console report, publish gate.
- 2026-10-25 P1-01: motorcycle shop canonical, og:url, hreflang, breadcrumb schema and sitemap moved to `/pages/motorcycle/` (the URL the server answers with 200) in all 5 locales; `locale-url.js` appends the slash for folder-named pages; generator scripts updated — removes the canonical→301→canonical loop so Google can index the shop.
- 2026-10-21 P0-02: verified and published the CSP hardening (no inline scripts left; 0 SEO errors) — security grade without breaking GTM/GA4.
