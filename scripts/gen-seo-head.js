#!/usr/bin/env node
/**
 * Generate seo-head.js — compact fa/tr/en/ru/ar title+description per page path for locale-preload.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'assets/scripts/i18n/seo-head.js');

global.window = global;
require(path.join(ROOT, 'assets/scripts/i18n/locales.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locales-pages.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locale-seo.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locales-ru-ar.js'));

const BASE = 'https://bizdavar.com';
const DEFAULT_OG = 'assets/images/brand/bizdavar-logo-square.png';
const LANGS = ['fa', 'tr', 'en', 'ru', 'ar'];

/** Per-page Open Graph images (relative to site root) */
const PAGE_OG = {
  home: 'assets/images/brand/bizdavar-logo-square.png',
  about: 'assets/images/brand/bizdavar-logo-square.png',
  services: 'assets/images/brand/bizdavar-logo-square.png',
  products: 'assets/images/brand/bizdavar-logo-square.png',
  portfolio: 'assets/images/brand/bizdavar-logo-square.png',
  blog: 'assets/images/brand/bizdavar-logo-square.png',
  contact: 'assets/images/brand/bizdavar-logo-square.png',
  fast: 'assets/images/digi-system/hero/digi-retail-hero.webp',
  customWebApp: 'assets/images/digi-system/hero/digi-retail-hero.webp',
  fieldTech: 'assets/images/brand/bizdavar-logo-square.png',
  vega: 'assets/images/vega/hero-vegapuls-6x.png',
  prosense: 'assets/images/prosense/slides/pq-sil.jpg',
  liquiMoly: 'assets/images/liqui-moly/octane-plus.jpg',
  teltonika: 'assets/images/teltonika/hero/fleet-telematics.webp',
  gamak: 'assets/images/gamak/hero/gamak-motor.webp',
  digiSystem: 'assets/images/digi-system/hero/digi-retail-hero.webp',
  teraoka: 'assets/images/teraoka/hero/teraoka-retail-hero.webp',
  fxguard: 'assets/images/brand/bizdavar-logo-square.png',
  bizswap: 'assets/images/brand/bizdavar-logo-square.png',
  biztab: 'assets/images/products/biztab/biztab-hero.jpg',
  bizpet: 'assets/images/products/bizpet/bizpet-grey.jpg',
  uwt: 'assets/images/uwt/og-uwt-logo.jpg',
  bizsanitizerV5: 'assets/images/products/bizsanitizer/bizclean-v5.png',
  fxguardAccounting: 'assets/images/brand/bizdavar-logo-square.png',
  articleDigitalMarketing: 'assets/images/brand/bizdavar-logo-square.png',
  articleWhatIsDm: 'assets/images/brand/bizdavar-logo-square.png',
  articleSmm: 'assets/images/brand/bizdavar-logo-square.png',
  articleFastStudio: 'assets/images/products/biztab/biztab-hero.jpg',
  articleWebsiteSpeed5Days: 'assets/images/products/biztab/biztab-hero.jpg',
  articleCustomWebApp: 'assets/images/digi-system/hero/digi-retail-hero.webp',
  articleIndustrialSensors: 'assets/images/vega/slides/value-process-safety.jpg',
  articleAboutBizdavar: 'assets/images/brand/bizdavar-logo-square.png',
  articleVegaSupplyIran: 'assets/images/vega/slides/value-process-safety.jpg',
  articleMultilingualWeb: 'assets/images/brand/bizdavar-logo-square.png',
  bzDiamond: 'assets/images/partners/bzdiamond.webp',
  kayaOne: 'assets/images/partners/kaya-one.svg',
  smmTurk: 'assets/images/partners/smm-turk.svg'
};

const PAGE_ROUTES = {
  home: '/',
  about: '/pages/about',
  services: '/pages/services',
  products: '/pages/products',
  portfolio: '/pages/portfolio',
  blog: '/pages/blog',
  fast: '/pages/fast',
  customWebApp: '/pages/custom-web-app',
  fieldTech: '/pages/field-tech',
  privacy: '/pages/privacy',
  contact: '/pages/contact',
  vega: '/pages/vega',
  prosense: '/pages/prosense',
  liquiMoly: '/pages/liqui-moly',
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
  bizpet: '/pages/bizpet',
  uwt: '/pages/uwt',
  bizsanitizerV5: '/pages/bizsanitizer-v5',
  fxguard: '/pages/fxguard',
  fxguardAccounting: '/pages/fxguard-accounting',
  bizswap: '/pages/bizswap',
  articleDigitalMarketing: '/pages/articles/digital-marketing',
  articleWhatIsDm: '/pages/articles/what-is-digital-marketing',
  articleSmm: '/pages/articles/social-media-management',
  articleFastStudio: '/pages/articles/fast-studio',
  articleWebsiteSpeed5Days: '/pages/articles/website-speed-5-days',
  articleCustomWebApp: '/pages/articles/custom-web-app-development',
  articleIndustrialSensors: '/pages/articles/industrial-sensors',
  articleAboutBizdavar: '/pages/articles/about-bizdavar-group',
  articleVegaSupplyIran: '/pages/articles/vega-supply-iran',
  articleMultilingualWeb: '/pages/articles/multilingual-web-iran-turkey'
};

const manifest = {};

for (const [key, route] of Object.entries(PAGE_ROUTES)) {
  manifest[route] = {};
  for (const lang of LANGS) {
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
