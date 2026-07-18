#!/usr/bin/env node
/**
 * Generate robots.txt for bizdavar.com — allow indexing all public locale URLs
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'robots.txt');
const BASE = 'https://bizdavar.com';

const content = `# Bizdavar Group — ${BASE}
# Multilingual site — fa (root), tr (/tr/), en (/en/) — 81 URLs in sitemap.xml

User-agent: *
Allow: /

# SEO/i18n boot scripts (needed for Google to see per-locale title, canonical, hreflang)
Allow: /assets/scripts/i18n/

# Other JS/CSS bundles — not indexable pages
Disallow: /assets/scripts/
Disallow: /assets/styles/

# Non-public areas
Disallow: /admin/
Disallow: /api/

Sitemap: ${BASE}/sitemap.xml

# Yandex host preference
Host: ${BASE}
`;

fs.writeFileSync(OUT, content, 'utf8');
console.log('Wrote robots.txt');
