#!/usr/bin/env node
/**
 * Bake static Open Graph / Twitter / hreflang into HTML so WhatsApp/Telegram/Facebook
 * and search crawlers (no JS) get the correct language for each locale URL.
 *
 * - Root HTML (fa): title + meta for Persian
 * - Locale trees: tr/ en/ ru/ ar/ — copies of each page with that locale's SEO
 *   AND visible data-i18n body text (hero, FAQs, CTAs) so /tr/ is not Persian HTML
 *
 * Run after: node scripts/gen-seo-head.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

global.window = global;
require(path.join(ROOT, 'assets/scripts/i18n/seo-head.js'));

const { ARTICLES, innerHtml, jsonLd, CTA, ctaLinks, relatedItems, AUTHOR_LINE, secondaryLabel } = require('./article-library');
const ARTICLE_BY_REL = Object.fromEntries(
  ARTICLES.map((a) => [`pages/articles/${a.file}`, a])
);

const HEAD = global.BIZDAVAR_SEO_HEAD || {};
const SITE = global.BIZDAVAR_SEO_SITE || {};
const BASE = SITE.base || 'https://bizdavar.com';
const DEFAULT_OG = SITE.defaultOgImage || `${BASE}/assets/images/content/about-hero.jpg`;

function loadLocales() {
  const ctx = vm.createContext({ window: {}, console });
  const files = [
    'assets/scripts/i18n/locales.js',
    'assets/scripts/i18n/owned-products-i18n.js',
    'assets/scripts/i18n/locales-pages.js',
    'assets/scripts/i18n/locale-seo.js',
    'assets/scripts/i18n/locales-ru-ar.js',
    'assets/scripts/i18n/fxguard-i18n.js',
    'assets/scripts/i18n/field-tech-i18n.js'
  ];
  for (const rel of files) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx);
  }
  return ctx.window.BIZDAVAR_LOCALES || {};
}

function getNested(obj, keyPath) {
  return keyPath.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function attrEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function bakeI18nBody(html, dict) {
  if (!dict) return html;

  html = html.replace(
    /<(\w+)([^>]*)\sdata-i18n-html="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, pre, key, post) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      return `<${tag}${pre} data-i18n-html="${key}"${post}>${val}</${tag}>`;
    }
  );

  html = html.replace(
    /<(\w+)([^>]*)\sdata-i18n="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, pre, key, post) => {
      if (pre.includes('data-i18n-html') || post.includes('data-i18n-html')) return m;
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      return `<${tag}${pre} data-i18n="${key}"${post}>${val}</${tag}>`;
    }
  );

  html = html.replace(
    /<(\w+)([^>]*?)\sdata-i18n-aria="([^"]+)"([^>]*)>/g,
    (m, tag, pre, key, post) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      const cleanedPre = pre.replace(/\saria-label="[^"]*"/g, '');
      const cleanedPost = post.replace(/\saria-label="[^"]*"/g, '');
      return `<${tag}${cleanedPre} data-i18n-aria="${key}"${cleanedPost} aria-label="${attrEscape(val)}">`;
    }
  );

  html = html.replace(
    /data-i18n-alt="([^"]+)"([^>]*)\salt="([^"]*)"/g,
    (m, key, mid) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      return `data-i18n-alt="${key}"${mid}alt="${attrEscape(val)}"`;
    }
  );

  html = html.replace(
    /alt="([^"]*)"([^>]*)\sdata-i18n-alt="([^"]+)"/g,
    (m, alt, mid, key) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      return `alt="${attrEscape(val)}"${mid} data-i18n-alt="${key}"`;
    }
  );

  html = html.replace(
    /data-i18n-placeholder="([^"]+)"([^>]*)/g,
    (m, key, rest) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      const cleaned = rest.replace(/\splaceholder="[^"]*"/, '');
      return `data-i18n-placeholder="${key}"${cleaned} placeholder="${attrEscape(val)}"`;
    }
  );

  const faqs = getNested(dict, 'home.faqs');
  if (Array.isArray(faqs) && faqs.length && html.includes('id="homeFaqGrid"')) {
    const inner = faqs.map((item) => {
      const q = item.q || item.q || '';
      const a = item.a || item.a || '';
      return `        <details class="faq-item">
          <summary>${q}</summary>
          <p>${a}</p>
        </details>`;
    }).join('\n');
    html = html.replace(
      /<div class="faq-grid" id="homeFaqGrid">[\s\S]*?<\/div>(?=\s*<\/div>\s*<\/section>)/,
      `<div class="faq-grid" id="homeFaqGrid">\n${inner}\n      </div>`
    );
  }

  return html;
}

const FT_ATTR_MAP = {
  'hero-eyebrow': 'hero.eyebrow',
  'hero-title': 'hero.title',
  'hero-lead': 'hero.lead',
  'wa-cta': 'hero.waCta',
  'call-cta': 'hero.callCta',
  'services-eyebrow': 'services.eyebrow',
  'services-title': 'services.title',
  'services-desc': 'services.desc',
  'cities-eyebrow': 'cities.eyebrow',
  'cities-title': 'cities.title',
  'cities-desc': 'cities.desc',
  'process-eyebrow': 'process.eyebrow',
  'process-title': 'process.title',
  'process-desc': 'process.desc',
  'contact-title': 'contact.title',
  'contact-desc': 'contact.desc',
  'faq-eyebrow': 'faq.eyebrow',
  'faq-title': 'faq.title'
};

function bakeFtBody(html, dict) {
  const page = getNested(dict, 'fieldTechPage');
  if (!page) return html;

  html = html.replace(
    /<(\w+)([^>]*?)\sdata-ft="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, pre, key, post) => {
      const pathKey = FT_ATTR_MAP[key];
      const val = pathKey ? getNested(page, pathKey) : undefined;
      if (typeof val !== 'string' || !val) return m;
      return `<${tag}${pre} data-ft="${key}"${post}>${val}</${tag}>`;
    }
  );

  const chips = page.hero && page.hero.chips;
  if (Array.isArray(chips) && chips.length) {
    const inner = chips.map((c) => `          <li>${c}</li>`).join('\n');
    html = html.replace(
      /<ul class="ft-hero__chips" id="ftChips">[\s\S]*?<\/ul>/,
      `<ul class="ft-hero__chips" id="ftChips">\n${inner}\n        </ul>`
    );
  }

  return html;
}

const STATIC_HERO = {
  'pages/vega.html': {
    fa: 'خرید سنسور VEGA اصل — پیش‌فاکتور و مشاوره فارسی',
    tr: 'Orijinal VEGA sensör satın alın — proforma ve danışmanlık',
    en: 'Buy genuine VEGA sensors — proforma and consulting',
    ru: 'Купить оригинальные датчики VEGA — проформа и консультация',
    ar: 'اشترِ حساسات VEGA الأصلية — فاتورة مبدئية واستشارة'
  },
  'pages/fast.html': {
    fa: 'طراحی سایت در ۵ روز از ۹۹ دلار',
    tr: '5 günde web sitesi — 99 dolardan',
    en: 'A website in 5 days from $99',
    ru: 'Сайт за 5 дней от $99',
    ar: 'موقع خلال ٥ أيام من ٩٩ دولاراً'
  }
};

function bakeStaticHero(html, rel, lang) {
  const map = STATIC_HERO[rel.replace(/\\/g, '/')];
  if (!map) return html;
  const text = map[lang] || map.en;
  if (!text) return html;
  return html.replace(
    /(<h1[^>]*class="[^"]*static-hero-h1[^"]*"[^>]*>)[\s\S]*?(<\/h1>)/,
    `$1${text}$2`
  );
}

function bakeJsonLd(html, locale) {
  if (!/id="jsonld-graph-static"/.test(html)) return html;
  const pageUrl = locale.prefix ? `${BASE}${locale.prefix}/` : `${BASE}/`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${BASE}/#organization`,
        name: 'Bizdavar Group',
        alternateName: ['بیزدوار گروپ', 'Bizdavar'],
        url: `${BASE}/`,
        logo: `${BASE}/assets/images/brand/bizdavar-logo-square.png`,
        email: 'info@bizdavar.com',
        telephone: ['+989305880135', '+905010676486'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tabriz',
          addressCountry: 'IR'
        },
        sameAs: [
          'https://www.linkedin.com/in/ersanjt',
          'https://www.instagram.com/bizdavar'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: `${BASE}/`,
        name: 'Bizdavar Group',
        inLanguage: locale.htmlLang,
        publisher: { '@id': `${BASE}/#organization` }
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        inLanguage: locale.htmlLang,
        isPartOf: { '@id': `${BASE}/#website` },
        about: { '@id': `${BASE}/#organization` }
      }
    ]
  };
  return html.replace(
    /<script type="application\/ld\+json" id="jsonld-graph-static">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="jsonld-graph-static">${JSON.stringify(graph)}</script>`
  );
}

function bakeFxguard(html, dict) {
  const cs = getNested(dict, 'caseStudy.fxguard');
  if (!cs) return html;

  const esc = (s) => String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (Array.isArray(cs.faq?.items) && html.includes('id="fxguardFaq"')) {
    const inner = cs.faq.items.map((item) => `          <details>
            <summary>${esc(item.q)}</summary>
            <p>${esc(item.a)}</p>
          </details>`).join('\n');
    html = html.replace(
      /<div class="fxguard-faq" id="fxguardFaq">[\s\S]*?<\/div>/,
      `<div class="fxguard-faq" id="fxguardFaq">\n${inner}\n        </div>`
    );
  }
  return html;
}

function decorateCopy(html, rel, locale) {
  const dict = LOCALES_DICT[locale.code] || {};
  html = bakeI18nBody(html, dict);
  html = bakeFtBody(html, dict);
  html = bakeStaticHero(html, rel, locale.code);
  html = bakeJsonLd(html, locale);
  html = bakeArticleLocale(html, rel, locale.code);
  if (String(rel).replace(/\\/g, '/') === 'pages/fxguard.html') {
    html = bakeFxguard(html, dict);
  }
  return html;
}

const LOCALES_DICT = loadLocales();

/** Prefer raster OG images — WhatsApp often skips SVG. */
const RASTER_OG = `${BASE}/assets/images/brand/bizdavar-logo-square.png`;
const HAS_RASTER = fs.existsSync(path.join(ROOT, 'assets/images/brand/bizdavar-logo-square.png'));

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
  'pages/gallery.html': '/pages/gallery',
  'pages/services.html': '/pages/services',
  'pages/products.html': '/pages/products',
  'pages/portfolio.html': '/pages/portfolio',
  'pages/blog.html': '/pages/blog',
  'pages/fast.html': '/pages/fast',
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
  'pages/marvispace.html': '/pages/marvispace',
  'pages/supplify-trade.html': '/pages/supplify-trade',
  'pages/kaya-one.html': '/pages/kaya-one',
  'pages/smm-turk.html': '/pages/smm-turk',
  'pages/marvi-society.html': '/pages/marvi-society',
  'pages/fxguard-exchange.html': '/pages/fxguard-exchange',
  'pages/biztejarat.html': '/pages/biztejarat',
  'pages/biztab.html': '/pages/biztab',
  'pages/bizsanitizer-v5.html': '/pages/bizsanitizer-v5',
  'pages/bizseat.html': '/pages/bizseat',
  'pages/bizpet.html': '/pages/bizpet',
  'pages/fxguard.html': '/pages/fxguard',
  'pages/fxguard-accounting.html': '/pages/fxguard-accounting',
  'pages/bizswap.html': '/pages/bizswap',
  'pages/articles/digital-marketing.html': '/pages/articles/digital-marketing',
  'pages/articles/what-is-digital-marketing.html': '/pages/articles/what-is-digital-marketing',
  'pages/articles/social-media-management.html': '/pages/articles/social-media-management',
  'pages/articles/fast-studio.html': '/pages/articles/fast-studio',
  'pages/articles/industrial-sensors.html': '/pages/articles/industrial-sensors',
  'pages/articles/about-bizdavar-group.html': '/pages/articles/about-bizdavar-group',
  'pages/articles/vega-supply-iran.html': '/pages/articles/vega-supply-iran',
  'pages/articles/multilingual-web-iran-turkey.html': '/pages/articles/multilingual-web-iran-turkey',
  'pages/articles/marvi-society-ios-app.html': '/pages/articles/marvi-society-ios-app',
  'pages/articles/prosense-gas-detection.html': '/pages/articles/prosense-gas-detection',
  'pages/articles/field-tech-services.html': '/pages/articles/field-tech-services',
  'pages/articles/local-seo-iran.html': '/pages/articles/local-seo-iran',
  'pages/articles/liqui-moly-supply-iran.html': '/pages/articles/liqui-moly-supply-iran'
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
    ['fa', LOCALES[0]],
    ['tr', LOCALES[1]],
    ['en', LOCALES[2]],
    ['ru', LOCALES[3]],
    ['ar', LOCALES[4]],
    ['x-default', LOCALES[0]]
  ];
  return tags
    .map(([hl, loc]) => `  <link rel="alternate" hreflang="${hl}" href="${escAttr(absoluteUrl(loc, route))}">`)
    .join('\n');
}

function buildBlock(route, meta, locale) {
  const title = meta.title || '';
  const desc = meta.description || '';
  let ogImage = meta.ogImage || DEFAULT_OG;
  if (HAS_RASTER && /\.svg(\?|$)/i.test(ogImage)) {
    ogImage = RASTER_OG;
  }
  const url = absoluteUrl(locale, route);
  const type = meta.type || 'website';
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
  <meta name="twitter:card" content="${escAttr(SITE.twitterCard || 'summary_large_image')}">
  <meta name="twitter:title" content="${escAttr(title)}">
  <meta name="twitter:description" content="${escAttr(desc)}">
  <meta name="twitter:image" content="${escAttr(ogImage)}">
  <link rel="canonical" href="${escAttr(url)}">
${hreflangLinks(route)}
  <!-- /bd-static-seo -->
`;
}

function jsStr(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function relatedUrl(u) {
  return String(u || '')
    .replace(/^\.\.\//, '')
    .replace(/^\/pages\//, '');
}

function relatedJs(a, lang) {
  return relatedItems(a, lang)
    .map((r) => `{ title: '${jsStr(r.title)}', url: '${relatedUrl(r.url)}', desc: '${jsStr(r.desc)}' }`)
    .join(',\n            ');
}

function bakeArticleLocale(html, rel, lang) {
  const a = ARTICLE_BY_REL[rel.replace(/\\/g, '/')];
  if (!a) return html;
  const loc = ['fa', 'tr', 'en', 'ru', 'ar'].includes(lang) ? lang : 'en';
  const inner = innerHtml(a, loc);
  html = html.replace(
    /<!-- bd-article-inner -->[\s\S]*?<!-- \/bd-article-inner -->/,
    `<!-- bd-article-inner -->\n${inner}\n      <!-- /bd-article-inner -->`
  );
  const title = a.title[loc] || a.title.en;
  const desc = a.description[loc] || a.description.en;
  const keywords = a.keywords[loc] || a.keywords.en;
  const cat = a.category[loc] || a.category.en;
  const cta = CTA[loc] || CTA.en;
  const links = ctaLinks(a);
  const author = AUTHOR_LINE[loc] || AUTHOR_LINE.en;
  html = html.replace(/(<span class="blog-item__cat">)[\s\S]*?(<\/span>)/, `$1${cat}$2`);
  html = html.replace(/(<h1>)[\s\S]*?(<\/h1>)/, `$1${title}$2`);
  html = html.replace(
    /(<p class="detail-meta article__meta">)[\s\S]*?(<time)/,
    `$1${author} · $2`
  );
  html = html.replace(
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${escAttr(keywords)}">`
  );
  html = html.replace(
    /(<div class="article__cta">\s*<p>)[\s\S]*?(<\/p>)/,
    `$1${cta.text}$2`
  );
  html = html.replace(
    new RegExp(`href="${links.primary.replace(/[?]/g, '\\?')}" class="btn btn--primary">[\\s\\S]*?<\\/a>`),
    `href="${links.primary}" class="btn btn--primary">${cta.primary}</a>`
  );
  html = html.replace(
    /(<a href="[^"]+" class="btn btn--yellow">)[\s\S]*?(<\/a>)/,
    `$1${secondaryLabel(a, loc)}$2`
  );
  html = html.replace(
    new RegExp(`\\{ name: '[^']*', url: '${a.slug}' \\}`),
    `{ name: '${jsStr(title)}', url: '${a.slug}' }`
  );
  html = html.replace(
    /injectArticleSchema\(\{[\s\S]*?\}\);/,
    `injectArticleSchema({
        title: '${jsStr(title)}',
        description: '${jsStr(desc)}',
        date: '${a.date}',
        dateModified: '${a.modified || a.date}',
        slug: 'pages/articles/${a.slug}',
        image: '${a.image}',
        keywords: '${jsStr(keywords)}'
      });`
  );
  html = html.replace(
    /renderRelatedLinks\(\[[\s\S]*?\]\);/,
    `renderRelatedLinks([
            ${relatedJs(a, loc)}
          ]);`
  );
  const ld = JSON.stringify(jsonLd(a, loc));
  html = html.replace(
    /<script type="application\/ld\+json" id="jsonld-article-static">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="jsonld-article-static">${ld}</script>`
  );
  return html;
}

function applySeo(html, route, meta, locale) {
  let out = stripSeoBlock(html);
  out = stripCanonicalLinks(out);
  out = stripHreflangLinks(out);
  out = setHtmlLangDir(out, locale.htmlLang, locale.dir);
  out = upsertTitle(out, meta.title);
  out = upsertDescription(out, meta.description);
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
  const faSource = decorateCopy(sourceHtml, rel, faLocale);
  const faHtml = applySeo(faSource, route, faMeta, faLocale);
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
    const withCopy = decorateCopy(sourceHtml, rel, locale);
    const localeHtml = applySeo(withCopy, route, meta, locale);
    fs.writeFileSync(outFile, localeHtml, 'utf8');
    localeFiles++;
  }
}

console.log(`Done. faUpdated=${updated} localeFiles=${localeFiles} skipped=${skipped} rasterOg=${HAS_RASTER}`);
