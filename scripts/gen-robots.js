#!/usr/bin/env node
/**
 * Generate robots.txt for bizdavar.com
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'robots.txt');
const BASE = 'https://bizdavar.com';

const content = `# Bizdavar Group — ${BASE}
# Multilingual site (fa / tr / en) — canonical URLs are extensionless

User-agent: *
Allow: /

# Static assets — not standalone pages
Disallow: /assets/scripts/
Disallow: /assets/styles/

Sitemap: ${BASE}/sitemap.xml

# Yandex host preference
Host: ${BASE}
`;

fs.writeFileSync(OUT, content, 'utf8');
console.log('Wrote robots.txt');
