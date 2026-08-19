#!/usr/bin/env node
/**
 * Generate robots.txt — allow CSS/JS so Google can render pages.
 * Block only private app surfaces.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'robots.txt');
const BASE = 'https://bizdavar.com';

const content = `# Bizdavar Group — ${BASE}
# Public locale URLs: fa (root), tr/en/ru/ar — see sitemap.xml

User-agent: *
Allow: /

# Private surfaces
Disallow: /admin/
Disallow: /api/

Sitemap: ${BASE}/sitemap.xml

# Yandex host preference
Host: ${BASE}
`;

fs.writeFileSync(OUT, content, 'utf8');
console.log('Wrote robots.txt');
