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
  about: 'assets/images/content/about-hero.jpg',
  contact: 'assets/images/brand/bizdavar-logo-square.png',
  fast: 'assets/images/brand/bizdavar-logo-square.png',
  vega: 'assets/images/vega/hero-vegapuls-6x.png',
  uwt: 'assets/images/uwt/og-uwt-logo.jpg',
  prosense: 'assets/images/prosense/hero-pq-sil2.webp',
  liquiMoly: 'assets/images/liqui-moly/octane-plus.jpg',
  fxguard: 'assets/images/products/fxguard/fxguard-hero.svg',
  bizswap: 'assets/images/products/bizswap/bizswap-hero.svg',
  biztab: 'assets/images/gallery/expo-tabrizu-incubator.jpg',
  bizsanitizerV5: 'assets/images/gallery/expo-imen-booth.jpg',
  bizseat: 'assets/images/products/bizseat/bizseat-hero.svg',
  bizpet: 'assets/images/products/bizpet/bizpet-grey.jpg',
  gallery: 'assets/images/gallery/expo-imen-booth.jpg',
  digiSystem: 'assets/images/digi-system/hero/digi-retail-hero.webp',
  fxguardAccounting: 'assets/images/products/fxguard/fxguard-hero.svg',
  articleWhatIsDm: 'assets/images/content/network-map.svg',
  articleDigitalMarketing: 'assets/images/content/services-dm-visual.svg',
  articleSmm: 'assets/images/content/services-smm-mockup.svg',
  articleFastStudio: 'assets/images/content/related-thumb-fast.svg',
  articleIndustrialSensors: 'assets/images/vega/blog-industrial-sensors.jpg',
  articleAboutBizdavar: 'assets/images/content/about-hero.jpg',
  articleVegaSupplyIran: 'assets/images/vega/slides/value-process-safety.jpg',
  articleMultilingualWeb: 'assets/images/content/services-web-mockup.svg',
  articleMarviSociety: 'assets/images/content/marvi-society/screen-discover.jpg',
  articleProsenseGas: 'assets/images/prosense/slides/pq-sil.jpg',
  articleFieldTech: 'assets/images/content/field-tech-hero.svg',
  articleLocalSeo: 'assets/images/content/network-map.svg',
  articleLiquiMolySupply: 'assets/images/liqui-moly/octane-plus.jpg',
  articleBuyVegapulsIran: 'assets/images/vega/product-vegapuls-6x-photo.webp',
  articleVegaQuoteIran: 'assets/images/vega/product-vegabar-39.png',
  articleBuyProsenseIran: 'assets/images/prosense/series-pq.webp',
  articleIndustrialTradeIran: 'assets/images/content/supply-hero.jpg',
  articleBuyTeltonikaIran: 'assets/images/partners/teltonika.png',
  articleBuyGamakIran: 'assets/images/gamak/category-three-phase.webp',
  articleBuyDigiIran: 'assets/images/digi-system/hero/digi-retail-hero.webp',
  articleBuyTeraokaIran: 'assets/images/teraoka/hero/teraoka-retail-hero.webp',
  articleWebsiteDesignUsEu: 'assets/images/content/services-web-mockup.svg',
  articleDigitalMarketingUsEu: 'assets/images/content/services-dm-visual.svg',
  bzDiamond: 'assets/images/partners/bzdiamond.webp',
  marvispace: 'assets/images/content/marvispace/shop-grid.jpg',
  kayaOne: 'assets/images/partners/kaya-one.svg',
  smmTurk: 'assets/images/partners/smm-turk.svg',
  marviSociety: 'assets/images/partners/marvi-society.png'
};

const PAGE_ROUTES = {
  home: '/',
  about: '/pages/about',
  services: '/pages/services',
  products: '/pages/products',
  portfolio: '/pages/portfolio',
  blog: '/pages/blog',
  fast: '/pages/fast',
  fieldTech: '/pages/field-tech',
  privacy: '/pages/privacy',
  contact: '/pages/contact',
  vega: '/pages/vega',
  prosense: '/pages/prosense',
  liquiMoly: '/pages/liqui-moly',
  teltonika: '/pages/teltonika',
  gamak: '/pages/gamak',
  uwt: '/pages/uwt',
  digiSystem: '/pages/digi-system',
  teraoka: '/pages/teraoka',
  bzDiamond: '/pages/bz-diamond',
  marvispace: '/pages/marvispace',
  supplifyTrade: '/pages/supplify-trade',
  kayaOne: '/pages/kaya-one',
  smmTurk: '/pages/smm-turk',
  marviSociety: '/pages/marvi-society',
  fxguardExchange: '/pages/fxguard-exchange',
  biztejarat: '/pages/biztejarat',
  biztab: '/pages/biztab',
  bizsanitizerV5: '/pages/bizsanitizer-v5',
  bizseat: '/pages/bizseat',
  bizpet: '/pages/bizpet',
  gallery: '/pages/gallery',
  fxguard: '/pages/fxguard',
  fxguardAccounting: '/pages/fxguard-accounting',
  bizswap: '/pages/bizswap',
  articleDigitalMarketing: '/pages/articles/digital-marketing',
  articleWhatIsDm: '/pages/articles/what-is-digital-marketing',
  articleSmm: '/pages/articles/social-media-management',
  articleFastStudio: '/pages/articles/fast-studio',
  articleIndustrialSensors: '/pages/articles/industrial-sensors',
  articleAboutBizdavar: '/pages/articles/about-bizdavar-group',
  articleVegaSupplyIran: '/pages/articles/vega-supply-iran',
  articleMultilingualWeb: '/pages/articles/multilingual-web-iran-turkey',
  articleMarviSociety: '/pages/articles/marvi-society-ios-app',
  articleProsenseGas: '/pages/articles/prosense-gas-detection',
  articleFieldTech: '/pages/articles/field-tech-services',
  articleLocalSeo: '/pages/articles/local-seo-iran',
  articleLiquiMolySupply: '/pages/articles/liqui-moly-supply-iran',
  articleBuyVegapulsIran: '/pages/articles/buy-vegapuls-iran',
  articleVegaQuoteIran: '/pages/articles/vega-quote-iran',
  articleBuyProsenseIran: '/pages/articles/buy-prosense-iran',
  articleIndustrialTradeIran: '/pages/articles/industrial-trade-iran',
  articleBuyTeltonikaIran: '/pages/articles/buy-teltonika-iran',
  articleBuyGamakIran: '/pages/articles/buy-gamak-iran',
  articleBuyDigiIran: '/pages/articles/buy-digi-system-iran',
  articleBuyTeraokaIran: '/pages/articles/buy-teraoka-iran',
  articleWebsiteDesignUsEu: '/pages/articles/website-design-us-eu',
  articleDigitalMarketingUsEu: '/pages/articles/digital-marketing-us-eu'
};

const manifest = {};

for (const [key, route] of Object.entries(PAGE_ROUTES)) {
  manifest[route] = {};
  for (const lang of LANGS) {
    const page = global.BIZDAVAR_LOCALES[lang]?.pages?.[key];
    if (!page) continue;
    let ogRel = PAGE_OG[key] || DEFAULT_OG;
    if (/\.svg$/i.test(ogRel)) ogRel = DEFAULT_OG;
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
