#!/usr/bin/env node
/**
 * Generate sitemap.xml — clean URLs, lastmod, hreflang (fa/tr/en)
 */
const fs = require('fs');
const path = require('path');

const BASE = 'https://bizdavar.com';
const OUT = path.join(__dirname, '..', 'sitemap.xml');
const SITE_UPDATE = '2026-07-01';

const LANGS = [
  ['fa', 'fa'],
  ['tr', 'tr'],
  ['en', 'en'],
  ['x-default', 'en']
];

/** @type {{ path: string, changefreq: string, priority: number, lastmod?: string, hreflang?: boolean }[]} */
const PAGES = [
  { path: '/', changefreq: 'weekly', priority: 1.0, lastmod: SITE_UPDATE },
  { path: '/pages/services', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/contact', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/about', changefreq: 'monthly', priority: 0.85, lastmod: SITE_UPDATE },
  { path: '/pages/products', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/portfolio', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/blog', changefreq: 'weekly', priority: 0.75, lastmod: SITE_UPDATE },
  { path: '/pages/fast', changefreq: 'monthly', priority: 0.85, lastmod: SITE_UPDATE },
  { path: '/pages/vega', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/prosense', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/teltonika', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/gamak', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/digi-system', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/teraoka', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/bz-diamond', changefreq: 'monthly', priority: 0.75, lastmod: SITE_UPDATE },
  { path: '/pages/biztejarat', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/biztab', changefreq: 'monthly', priority: 0.85, lastmod: '2020-03-16' },
  { path: '/pages/bizsanitizer-v5', changefreq: 'monthly', priority: 0.85, lastmod: '2021-06-01' },
  { path: '/pages/articles/about-bizdavar-group', changefreq: 'monthly', priority: 0.85, lastmod: '2025-06-01' },
  { path: '/pages/articles/what-is-digital-marketing', changefreq: 'yearly', priority: 0.7, lastmod: '2025-02-10' },
  { path: '/pages/articles/digital-marketing', changefreq: 'yearly', priority: 0.7, lastmod: '2025-04-01' },
  { path: '/pages/articles/social-media-management', changefreq: 'yearly', priority: 0.7, lastmod: '2025-03-05' },
  { path: '/pages/articles/fast-studio', changefreq: 'yearly', priority: 0.7, lastmod: '2025-05-15' },
  { path: '/pages/articles/industrial-sensors', changefreq: 'yearly', priority: 0.7, lastmod: '2025-03-20' },
  { path: '/pages/privacy', changefreq: 'yearly', priority: 0.3, lastmod: SITE_UPDATE },
  { path: 'https://fast.bizdavar.com/', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE, hreflang: false }
];

function locUrl(entry) {
  return entry.path.startsWith('http') ? entry.path : `${BASE}${entry.path}`;
}

function hreflangBlock(entry) {
  if (entry.hreflang === false) return '';
  const loc = locUrl(entry);
  return LANGS.map(([hl, param]) => {
    const sep = loc.includes('?') ? '&' : '?';
    return `    <xhtml:link rel="alternate" hreflang="${hl}" href="${loc}${sep}lang=${param}"/>`;
  }).join('\n');
}

function urlNode(entry) {
  const loc = locUrl(entry);
  const alt = hreflangBlock(entry);
  const lines = [
    '  <url>',
    `    <loc>${loc}</loc>`,
    ...(entry.lastmod ? [`    <lastmod>${entry.lastmod}</lastmod>`] : []),
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority.toFixed(2)}</priority>`,
    ...(alt ? [alt] : []),
    '  </url>'
  ];
  return lines.join('\n');
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${PAGES.map(urlNode).join('\n')}
</urlset>
`;

fs.writeFileSync(OUT, xml, 'utf8');
console.log(`Wrote ${PAGES.length} URLs to sitemap.xml`);
