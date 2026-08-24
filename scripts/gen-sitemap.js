#!/usr/bin/env node
/**
 * Generate sitemap.xml — separate crawlable URLs per locale (fa/tr/en/ru/ar) + hreflang
 * Primary: fa at root · others under /tr/ /en/ /ru/ /ar/
 */
const fs = require('fs');
const path = require('path');

const BASE = 'https://bizdavar.com';
const OUT = path.join(__dirname, '..', 'sitemap.xml');
const SITE_UPDATE = '2026-08-24';

const LOCALES = [
  { code: 'fa', prefix: '' },
  { code: 'tr', prefix: '/tr' },
  { code: 'en', prefix: '/en' },
  { code: 'ru', prefix: '/ru' },
  { code: 'ar', prefix: '/ar' }
];

const HREFLANG = [
  ['fa', 'fa'],
  ['tr', 'tr'],
  ['en', 'en'],
  ['ru', 'ru'],
  ['ar', 'ar'],
  ['x-default', 'fa']
];

/** @type {{ path: string, changefreq: string, priority: number, lastmod?: string }[]} */
const PAGES = [
  { path: '/', changefreq: 'weekly', priority: 1.0, lastmod: '2026-08-19' },
  { path: '/pages/services', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/contact', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/about', changefreq: 'monthly', priority: 0.85, lastmod: SITE_UPDATE },
  { path: '/pages/gallery', changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-21' },
  { path: '/pages/products', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/portfolio', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/blog', changefreq: 'weekly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/fast', changefreq: 'monthly', priority: 0.85, lastmod: SITE_UPDATE },
  { path: '/pages/field-tech', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/vega', changefreq: 'monthly', priority: 0.9, lastmod: '2026-08-19' },
  { path: '/pages/prosense', changefreq: 'monthly', priority: 0.9, lastmod: '2026-08-19' },
  { path: '/pages/liqui-moly', changefreq: 'weekly', priority: 0.9, lastmod: '2026-08-12' },
  { path: '/pages/teltonika', changefreq: 'monthly', priority: 0.9, lastmod: SITE_UPDATE },
  { path: '/pages/gamak', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/digi-system', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/teraoka', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/bz-diamond', changefreq: 'monthly', priority: 0.75, lastmod: SITE_UPDATE },
  { path: '/pages/supplify-trade', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/kaya-one', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/smm-turk', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/marvi-society', changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-24' },
  { path: '/pages/fxguard-exchange', changefreq: 'monthly', priority: 0.85, lastmod: SITE_UPDATE },
  { path: '/pages/biztejarat', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/biztab', changefreq: 'monthly', priority: 0.85, lastmod: '2020-03-16' },
  { path: '/pages/bizsanitizer-v5', changefreq: 'monthly', priority: 0.85, lastmod: '2021-06-01' },
  { path: '/pages/bizseat', changefreq: 'monthly', priority: 0.85, lastmod: '2020-09-01' },
  { path: '/pages/bizpet', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-21' },
  { path: '/pages/fxguard', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/fxguard-accounting', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/bizswap', changefreq: 'monthly', priority: 0.8, lastmod: SITE_UPDATE },
  { path: '/pages/articles/about-bizdavar-group', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-24' },
  { path: '/pages/articles/vega-supply-iran', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-24' },
  { path: '/pages/articles/multilingual-web-iran-turkey', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-24' },
  { path: '/pages/articles/what-is-digital-marketing', changefreq: 'monthly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/articles/digital-marketing', changefreq: 'monthly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/articles/social-media-management', changefreq: 'monthly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/articles/fast-studio', changefreq: 'monthly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/articles/industrial-sensors', changefreq: 'monthly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/articles/marvi-society-ios-app', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-24' },
  { path: '/pages/articles/prosense-gas-detection', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-24' },
  { path: '/pages/articles/field-tech-services', changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-24' },
  { path: '/pages/articles/local-seo-iran', changefreq: 'monthly', priority: 0.75, lastmod: '2026-08-24' },
  { path: '/pages/articles/liqui-moly-supply-iran', changefreq: 'monthly', priority: 0.85, lastmod: '2026-08-24' },
  { path: '/pages/privacy', changefreq: 'yearly', priority: 0.3, lastmod: SITE_UPDATE }
];

function localePath(entry, locale) {
  if (entry.path === '/') {
    return locale.prefix ? `${locale.prefix}/` : '/';
  }
  return `${locale.prefix}${entry.path}`;
}

function absoluteUrl(entry, locale) {
  const p = localePath(entry, locale);
  if (p === '/') return `${BASE}/`;
  return `${BASE}${p}`;
}

function hreflangBlock(entry) {
  return HREFLANG.map(([hl, locCode]) => {
    const loc = LOCALES.find(l => l.code === locCode) || LOCALES[0];
    const href = absoluteUrl(entry, loc);
    return `    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}"/>`;
  }).join('\n');
}

function urlNodes(entry) {
  return LOCALES.map(locale => {
    const loc = absoluteUrl(entry, locale);
    const lines = [
      '  <url>',
      `    <loc>${loc}</loc>`,
      ...(entry.lastmod ? [`    <lastmod>${entry.lastmod}</lastmod>`] : []),
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority.toFixed(2)}</priority>`,
      hreflangBlock(entry),
      '  </url>'
    ];
    return lines.join('\n');
  }).join('\n');
}

const allNodes = PAGES.map(urlNodes).join('\n');
const totalUrls = PAGES.length * LOCALES.length;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allNodes}
</urlset>
`;

fs.writeFileSync(OUT, xml, 'utf8');
console.log(`Wrote ${totalUrls} URLs (${PAGES.length} pages × ${LOCALES.length} locales) to sitemap.xml`);
