#!/usr/bin/env node
/**
 * Bake static Open Graph / Twitter / hreflang into HTML so WhatsApp/Telegram/Facebook
 * and search crawlers (no JS) get the correct language for each locale URL.
 *
 * - Root HTML (fa): title + meta for Persian
 * - Locale trees: tr/ en/ ru/ ar/ — copies of each page with that locale's SEO
 *
 * Run after: node scripts/gen-seo-head.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

global.window = global;
require(path.join(ROOT, 'assets/scripts/config/site-config.js'));
require(path.join(ROOT, 'assets/scripts/i18n/seo-head.js'));

const HEAD = global.BIZDAVAR_SEO_HEAD || {};
const SITE = global.BIZDAVAR_SEO_SITE || {};
const BASE = SITE.base || 'https://bizdavar.com';
const DEFAULT_OG = SITE.defaultOgImage || `${BASE}/assets/images/content/about-hero.svg`;

/** Prefer raster OG images — WhatsApp often skips SVG. */
const RASTER_OG = `${BASE}/assets/images/brand/bizdavar-logo-square.png`;
const HAS_RASTER = fs.existsSync(path.join(ROOT, 'assets/images/brand/bizdavar-logo-square.png'));

const SCHEMA_LANG = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' };

const ARTICLE_DATES = {
  '/pages/articles/vega-supply-iran': '2026-07-29',
  '/pages/articles/multilingual-web-iran-turkey': '2026-07-29',
  '/pages/articles/what-is-digital-marketing': '2025-02-10',
  '/pages/articles/digital-marketing': '2025-04-01',
  '/pages/articles/social-media-management': '2025-03-05',
  '/pages/articles/fast-studio': '2026-08-13',
  '/pages/articles/industrial-sensors': '2025-03-20',
  '/pages/articles/about-bizdavar-group': '2025-06-01',
  '/pages/articles/website-speed-5-days': '2026-08-13',
  '/pages/articles/custom-web-app-development': '2026-08-13'
};

const LOCALES = [
  { code: 'fa', prefix: '', ogLocale: 'fa_IR', htmlLang: 'fa', dir: 'rtl' },
  { code: 'tr', prefix: '/tr', ogLocale: 'tr_TR', htmlLang: 'tr', dir: 'ltr' },
  { code: 'en', prefix: '/en', ogLocale: 'en_US', htmlLang: 'en', dir: 'ltr' },
  { code: 'ru', prefix: '/ru', ogLocale: 'ru_RU', htmlLang: 'ru', dir: 'ltr' },
  { code: 'ar', prefix: '/ar', ogLocale: 'ar_AE', htmlLang: 'ar', dir: 'rtl' }
];

const FILE_TO_ROUTE = {
  'index.html': '/',
  'pages/about.html': '/pages/about',
  'pages/services.html': '/pages/services',
  'pages/products.html': '/pages/products',
  'pages/portfolio.html': '/pages/portfolio',
  'pages/blog.html': '/pages/blog',
  'pages/fast.html': '/pages/fast',
  'pages/custom-web-app.html': '/pages/custom-web-app',
  'pages/field-tech.html': '/pages/field-tech',
  'pages/privacy.html': '/pages/privacy',
  'pages/contact.html': '/pages/contact',
  'pages/vega.html': '/pages/vega',
  'pages/prosense.html': '/pages/prosense',
  'pages/liqui-moly.html': '/pages/liqui-moly',
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
  'pages/bizpet.html': '/pages/bizpet',
  'pages/uwt.html': '/pages/uwt',
  'pages/bizsanitizer-v5.html': '/pages/bizsanitizer-v5',
  'pages/fxguard.html': '/pages/fxguard',
  'pages/fxguard-accounting.html': '/pages/fxguard-accounting',
  'pages/bizswap.html': '/pages/bizswap',
  'pages/articles/digital-marketing.html': '/pages/articles/digital-marketing',
  'pages/articles/what-is-digital-marketing.html': '/pages/articles/what-is-digital-marketing',
  'pages/articles/social-media-management.html': '/pages/articles/social-media-management',
  'pages/articles/fast-studio.html': '/pages/articles/fast-studio',
  'pages/articles/website-speed-5-days.html': '/pages/articles/website-speed-5-days',
  'pages/articles/custom-web-app-development.html': '/pages/articles/custom-web-app-development',
  'pages/articles/industrial-sensors.html': '/pages/articles/industrial-sensors',
  'pages/articles/about-bizdavar-group.html': '/pages/articles/about-bizdavar-group',
  'pages/articles/vega-supply-iran.html': '/pages/articles/vega-supply-iran',
  'pages/articles/multilingual-web-iran-turkey.html': '/pages/articles/multilingual-web-iran-turkey'
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

/** Keep a single canonical — remove any leftover before baking the block. */
function stripCanonicalLinks(html) {
  return html.replace(/\n?\s*<link\s+rel=["']canonical["'][^>]*>\s*/gi, '\n');
}

function stripHreflangLinks(html) {
  return html.replace(/\n?\s*<link\s+rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>\s*/gi, '\n');
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

function setHtmlLangDir(html, lang, dir) {
  return html.replace(
    /<html\b([^>]*)>/i,
    (match, attrs) => {
      let next = attrs
        .replace(/\slang=(["'])[^"']*\1/i, '')
        .replace(/\sdir=(["'])[^"']*\1/i, '');
      return `<html lang="${lang}" dir="${dir}"${next}>`;
    }
  );
}

function absoluteUrl(locale, route) {
  if (route === '/') {
    return locale.prefix ? `${BASE}${locale.prefix}/` : `${BASE}/`;
  }
  return `${BASE}${locale.prefix}${route}`;
}

function hreflangLinks(route) {
  const tags = [
    ['fa-IR', LOCALES[0]],
    ['tr-TR', LOCALES[1]],
    ['en-US', LOCALES[2]],
    ['ru-RU', LOCALES[3]],
    ['ar-AE', LOCALES[4]],
    ['x-default', LOCALES[0]]
  ];
  return tags
    .map(([hl, loc]) => `  <link rel="alternate" hreflang="${hl}" href="${escAttr(absoluteUrl(loc, route))}">`)
    .join('\n');
}

function resolveOgImage(ogImage) {
  let image = ogImage || DEFAULT_OG;
  if (HAS_RASTER && /\.svg(\?|$)/i.test(image)) {
    image = RASTER_OG;
  }
  return image;
}

function buildHomeSiteGraph() {
  const C = global.BIZDAVAR_CONFIG || {};
  const contact = C.contact || {};
  const orgId = `${BASE}/#organization`;
  const webId = `${BASE}/#website`;
  const logo = RASTER_OG;
  const sameAs = [contact.linkedin, contact.instagram].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: C.siteNameEn || 'Bizdavar Group',
        alternateName: [C.siteName || 'بیزدوار گروپ', 'Bizdavar'],
        url: `${BASE}/`,
        logo: { '@type': 'ImageObject', url: logo },
        image: logo,
        email: contact.email,
        telephone: contact.phone,
        foundingDate: '2013',
        areaServed: ['TR', 'AM', 'IR', 'AE', 'DE', 'US', 'GB'],
        sameAs
      },
      {
        '@type': 'WebSite',
        '@id': webId,
        url: `${BASE}/`,
        name: C.siteNameEn || 'Bizdavar Group',
        inLanguage: ['fa-IR', 'tr-TR', 'en-US', 'ru-RU', 'ar-AE'],
        publisher: { '@id': orgId }
      }
    ]
  };
}

function buildArticleJsonLd(route, meta, locale) {
  const url = absoluteUrl(locale, route);
  const ogImage = resolveOgImage(meta.ogImage);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    url,
    headline: meta.title,
    description: meta.description,
    datePublished: ARTICLE_DATES[route],
    inLanguage: SCHEMA_LANG[locale.code] || 'fa-IR',
    author: { '@type': 'Organization', name: 'Bizdavar Group' },
    publisher: {
      '@type': 'Organization',
      name: 'Bizdavar Group',
      logo: { '@type': 'ImageObject', url: RASTER_OG }
    },
    mainEntityOfPage: url,
    image: ogImage,
    isPartOf: { '@id': `${BASE}/#website` }
  };
}

function upsertJsonLdScript(html, id, data) {
  const json = JSON.stringify(data);
  const re = new RegExp(`<script[^>]+id=["']${id}["'][^>]*>[\\s\\S]*?<\\/script>`, 'i');
  const tag = `<script type="application/ld+json" id="${id}">${json}</script>`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace(/<\/head>/i, `  ${tag}\n</head>`);
}

function buildBlock(route, meta, locale) {
  const title = meta.title || '';
  const desc = meta.description || '';
  const ogImage = resolveOgImage(meta.ogImage);
  const url = absoluteUrl(locale, route);
  const type = meta.type || 'website';
  const articleDate = ARTICLE_DATES[route];
  const articleMeta = (type === 'article' && articleDate)
    ? `  <meta property="article:published_time" content="${articleDate}">\n  <meta property="article:author" content="Bizdavar Group">\n`
    : '';
  const alternates = LOCALES
    .filter((l) => l.code !== locale.code)
    .map((l) => `  <meta property="og:locale:alternate" content="${l.ogLocale}">`)
    .join('\n');

  return `  <!-- bd-static-seo -->
  <meta property="og:title" content="${escAttr(title)}">
  <meta property="og:description" content="${escAttr(desc)}">
  <meta property="og:type" content="${escAttr(type)}">
  <meta property="og:url" content="${escAttr(url)}">
  <meta property="og:image" content="${escAttr(ogImage)}">
  <meta property="og:image:alt" content="${escAttr(title)}">
  <meta property="og:locale" content="${locale.ogLocale}">
${alternates}
  <meta property="og:site_name" content="${escAttr(SITE.siteName || 'Bizdavar Group')}">
${articleMeta}  <meta name="twitter:card" content="${escAttr(SITE.twitterCard || 'summary_large_image')}">
  <meta name="twitter:title" content="${escAttr(title)}">
  <meta name="twitter:description" content="${escAttr(desc)}">
  <meta name="twitter:image" content="${escAttr(ogImage)}">
  <link rel="canonical" href="${escAttr(url)}">
${hreflangLinks(route)}
  <!-- /bd-static-seo -->
`;
}

function applySeo(html, route, meta, locale) {
  let out = stripSeoBlock(html);
  out = stripCanonicalLinks(out);
  out = stripHreflangLinks(out);
  out = setHtmlLangDir(out, locale.htmlLang, locale.dir);
  out = upsertTitle(out, meta.title);
  out = upsertDescription(out, meta.description);
  if (route === '/') {
    out = upsertJsonLdScript(out, 'jsonld-graph-static', buildHomeSiteGraph());
  }
  if (route.indexOf('/articles/') >= 0) {
    out = upsertJsonLdScript(out, 'jsonld-article-static', buildArticleJsonLd(route, meta, locale));
  }
  const block = buildBlock(route, meta, locale);
  if (/<\/head>/i.test(out)) {
    out = out.replace(/<\/head>/i, `${block}</head>`);
  } else {
    out += block;
  }
  return out;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function localeOutRel(localeCode, sourceRel) {
  if (sourceRel === 'index.html') return path.join(localeCode, 'index.html');
  return path.join(localeCode, sourceRel);
}

let updated = 0;
let localeFiles = 0;
let skipped = 0;

const faLocale = LOCALES[0];

for (const [rel, route] of Object.entries(FILE_TO_ROUTE)) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) {
    console.warn('missing', rel);
    skipped++;
    continue;
  }

  const sourceHtml = fs.readFileSync(file, 'utf8');
  if (/\?\?\?\?/.test(sourceHtml)) {
    console.warn('WARNING still has ???? in', rel);
  }

  const faMeta = HEAD[route]?.fa;
  if (!faMeta || !faMeta.title) {
    console.warn('no fa seo for', route);
    skipped++;
    continue;
  }

  // Bake Persian into the canonical source files
  const faHtml = applySeo(sourceHtml, route, faMeta, faLocale);
  fs.writeFileSync(file, faHtml, 'utf8');
  updated++;
  console.log('baked fa', rel);

  // Emit locale-specific HTML trees for crawlers / OG previews
  for (const locale of LOCALES) {
    if (locale.code === 'fa') continue;
    const meta = HEAD[route]?.[locale.code] || HEAD[route]?.en || faMeta;
    if (!meta || !meta.title) {
      console.warn('no seo for', route, locale.code);
      continue;
    }
    const outRel = localeOutRel(locale.code, rel);
    const outFile = path.join(ROOT, outRel);
    ensureDir(outFile);
    const localeHtml = applySeo(sourceHtml, route, meta, locale);
    fs.writeFileSync(outFile, localeHtml, 'utf8');
    localeFiles++;
  }
}

console.log(`Done. faUpdated=${updated} localeFiles=${localeFiles} skipped=${skipped} rasterOg=${HAS_RASTER}`);
