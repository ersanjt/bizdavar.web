#!/usr/bin/env node
/**
 * Generate seo-head.js — compact fa/tr/en title+description per page path for locale-preload.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'assets/scripts/i18n/seo-head.js');

global.window = global;
require(path.join(ROOT, 'assets/scripts/i18n/locales.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locale-seo.js'));

const BASE = 'https://bizdavar.com';
const DEFAULT_OG = 'assets/images/brand/bizdavar-logo-square.png';

/** Per-page Open Graph images (relative to site root) */
const PAGE_OG = {
  home: 'assets/images/brand/bizdavar-logo-square.png',
  about: 'assets/images/brand/bizdavar-logo-square.png',
  contact: 'assets/images/brand/bizdavar-logo-square.png',
  fast: 'assets/images/brand/bizdavar-logo-square.png',
  articleDigitalMarketing: 'assets/images/brand/bizdavar-logo-square.png',
  articleWhatIsDm: 'assets/images/brand/bizdavar-logo-square.png',
  articleSmm: 'assets/images/brand/bizdavar-logo-square.png',
  articleFastStudio: 'assets/images/brand/bizdavar-logo-square.png',
  articleIndustrialSensors: 'assets/images/brand/bizdavar-logo-square.png',
  articleAboutBizdavar: 'assets/images/brand/bizdavar-logo-square.png'
};

const PAGE_ROUTES = {
  home: '/',
  about: '/pages/about',
  services: '/pages/services',
  products: '/pages/products',
  portfolio: '/pages/portfolio',
  blog: '/pages/blog',
  fast: '/pages/fast',
  privacy: '/pages/privacy',
  contact: '/pages/contact',
  vega: '/pages/vega',
  prosense: '/pages/prosense',
  teltonika: '/pages/teltonika',
  gamak: '/pages/gamak',
  digiSystem: '/pages/digi-system',
  teraoka: '/pages/teraoka',
  bzDiamond: '/pages/bz-diamond',
  supplifyTrade: '/pages/supplify-trade',
  kayaOne: '/pages/kaya-one',
  smmTurk: '/pages/smm-turk',
  fxguardExchange: '/pages/fxguard-exchange',
  biztejarat: '/pages/biztejarat',
  biztab: '/pages/biztab',
  bizsanitizerV5: '/pages/bizsanitizer-v5',
  fxguard: '/pages/fxguard',
  bizswap: '/pages/bizswap',
  articleDigitalMarketing: '/pages/articles/digital-marketing',
  articleWhatIsDm: '/pages/articles/what-is-digital-marketing',
  articleSmm: '/pages/articles/social-media-management',
  articleFastStudio: '/pages/articles/fast-studio',
  articleIndustrialSensors: '/pages/articles/industrial-sensors',
  articleAboutBizdavar: '/pages/articles/about-bizdavar-group'
};

const manifest = {};

for (const [key, route] of Object.entries(PAGE_ROUTES)) {
  manifest[route] = {};
  for (const lang of ['fa', 'tr', 'en']) {
    const page = global.BIZDAVAR_LOCALES[lang]?.pages?.[key];
    if (!page) continue;
    const ogRel = PAGE_OG[key] || DEFAULT_OG;
    manifest[route][lang] = {
      title: page.seoTitle || '',
      description: page.seoDescription || '',
      keywords: page.seoKeywords || '',
      ogImage: BASE + '/' + ogRel.replace(/^\//, ''),
      type: route.indexOf('/articles/') >= 0 ? 'article' : 'website'
    };
  }
}

const siteMeta = {
  base: BASE,
  siteName: 'Bizdavar Group',
  defaultOgImage: BASE + '/' + DEFAULT_OG.replace(/^\//, ''),
  twitterCard: 'summary_large_image',
  robots: 'index, follow, max-image-preview:large'
};

const body = '/** Auto-generated — run: node scripts/gen-seo-head.js */\n'
  + 'window.BIZDAVAR_SEO_SITE=' + JSON.stringify(siteMeta, null, 0) + ';\n'
  + 'window.BIZDAVAR_SEO_HEAD=' + JSON.stringify(manifest, null, 0) + ';\n';

fs.writeFileSync(OUT, body, 'utf8');
console.log('Wrote seo-head.js with', Object.keys(manifest).length, 'routes');
