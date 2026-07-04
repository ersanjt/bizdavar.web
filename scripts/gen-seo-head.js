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
    manifest[route][lang] = {
      title: page.seoTitle || '',
      description: page.seoDescription || ''
    };
  }
}

const body = '/** Auto-generated — run: node scripts/gen-seo-head.js */\n'
  + 'window.BIZDAVAR_SEO_HEAD=' + JSON.stringify(manifest, null, 0) + ';\n';

fs.writeFileSync(OUT, body, 'utf8');
console.log('Wrote seo-head.js with', Object.keys(manifest).length, 'routes');
