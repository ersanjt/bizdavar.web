#!/usr/bin/env node
/**
 * Bake static Open Graph / Twitter meta into HTML so WhatsApp/Telegram/Facebook
 * crawlers (no JS) get correct UTF-8 titles instead of ???? or empty OG tags.
 *
 * Run after: node scripts/gen-seo-head.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

global.window = global;
require(path.join(ROOT, 'assets/scripts/i18n/seo-head.js'));

const HEAD = global.BIZDAVAR_SEO_HEAD || {};
const SITE = global.BIZDAVAR_SEO_SITE || {};
const BASE = SITE.base || 'https://bizdavar.com';
const DEFAULT_OG = SITE.defaultOgImage || `${BASE}/assets/images/content/about-hero.svg`;

/** Prefer raster OG images — WhatsApp often skips SVG. */
const RASTER_OG = `${BASE}/assets/images/brand/bizdavar-logo-square.png`;
const HAS_RASTER = fs.existsSync(path.join(ROOT, 'assets/images/brand/bizdavar-logo-square.png'));

const FILE_TO_ROUTE = {
  'index.html': '/',
  'pages/about.html': '/pages/about',
  'pages/services.html': '/pages/services',
  'pages/products.html': '/pages/products',
  'pages/portfolio.html': '/pages/portfolio',
  'pages/blog.html': '/pages/blog',
  'pages/fast.html': '/pages/fast',
  'pages/privacy.html': '/pages/privacy',
  'pages/contact.html': '/pages/contact',
  'pages/vega.html': '/pages/vega',
  'pages/prosense.html': '/pages/prosense',
  'pages/teltonika.html': '/pages/teltonika',
  'pages/gamak.html': '/pages/gamak',
  'pages/digi-system.html': '/pages/digi-system',
  'pages/teraoka.html': '/pages/teraoka',
  'pages/bz-diamond.html': '/pages/bz-diamond',
  'pages/supplify-trade.html': '/pages/supplify-trade',
  'pages/kaya-one.html': '/pages/kaya-one',
  'pages/smm-turk.html': '/pages/smm-turk',
  'pages/fxguard-exchange.html': '/pages/fxguard-exchange',
  'pages/biztejarat.html': '/pages/biztejarat',
  'pages/biztab.html': '/pages/biztab',
  'pages/bizsanitizer-v5.html': '/pages/bizsanitizer-v5',
  'pages/fxguard.html': '/pages/fxguard',
  'pages/bizswap.html': '/pages/bizswap',
  'pages/articles/digital-marketing.html': '/pages/articles/digital-marketing',
  'pages/articles/what-is-digital-marketing.html': '/pages/articles/what-is-digital-marketing',
  'pages/articles/social-media-management.html': '/pages/articles/social-media-management',
  'pages/articles/fast-studio.html': '/pages/articles/fast-studio',
  'pages/articles/industrial-sensors.html': '/pages/articles/industrial-sensors',
  'pages/articles/about-bizdavar-group.html': '/pages/articles/about-bizdavar-group'
};

function escAttr(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function stripSeoBlock(html) {
  return html.replace(/\n?\s*<!-- bd-static-seo -->[\s\S]*?<!-- \/bd-static-seo -->\n?/g, '\n');
}

function upsertTitle(html, title) {
  if (!title) return html;
  if (/<title>[^<]*<\/title>/i.test(html)) {
    return html.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  }
  return html.replace(/<\/head>/i, `  <title>${title}</title>\n</head>`);
}

function upsertDescription(html, desc) {
  if (!desc) return html;
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    return html.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${escAttr(desc)}">`
    );
  }
  return html.replace(/<\/head>/i, `  <meta name="description" content="${escAttr(desc)}">\n</head>`);
}

function buildBlock(route, meta) {
  const title = meta.title || '';
  const desc = meta.description || '';
  let ogImage = meta.ogImage || DEFAULT_OG;
  if (HAS_RASTER && /\.svg(\?|$)/i.test(ogImage)) {
    ogImage = RASTER_OG;
  }
  const url = `${BASE}${route === '/' ? '/' : route}`;
  const type = meta.type || 'website';

  return `  <!-- bd-static-seo -->
  <meta property="og:title" content="${escAttr(title)}">
  <meta property="og:description" content="${escAttr(desc)}">
  <meta property="og:type" content="${escAttr(type)}">
  <meta property="og:url" content="${escAttr(url)}">
  <meta property="og:image" content="${escAttr(ogImage)}">
  <meta property="og:image:alt" content="${escAttr(title)}">
  <meta property="og:locale" content="fa_IR">
  <meta property="og:site_name" content="${escAttr(SITE.siteName || 'Bizdavar Group')}">
  <meta name="twitter:card" content="${escAttr(SITE.twitterCard || 'summary_large_image')}">
  <meta name="twitter:title" content="${escAttr(title)}">
  <meta name="twitter:description" content="${escAttr(desc)}">
  <meta name="twitter:image" content="${escAttr(ogImage)}">
  <link rel="canonical" href="${escAttr(url)}">
  <!-- /bd-static-seo -->
`;
}

let updated = 0;
let skipped = 0;

for (const [rel, route] of Object.entries(FILE_TO_ROUTE)) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) {
    console.warn('missing', rel);
    skipped++;
    continue;
  }
  const meta = HEAD[route]?.fa;
  if (!meta || !meta.title) {
    console.warn('no fa seo for', route);
    skipped++;
    continue;
  }

  let html = fs.readFileSync(file, 'utf8');
  if (/\?\?\?\?/.test(html)) {
    console.warn('WARNING still has ???? in', rel);
  }

  html = stripSeoBlock(html);
  html = upsertTitle(html, meta.title);
  html = upsertDescription(html, meta.description);

  const block = buildBlock(route, meta);
  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${block}</head>`);
  } else {
    html += block;
  }

  fs.writeFileSync(file, html, 'utf8');
  updated++;
  console.log('baked', rel);
}

console.log(`Done. updated=${updated} skipped=${skipped} rasterOg=${HAS_RASTER}`);
