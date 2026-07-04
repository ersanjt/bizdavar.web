#!/usr/bin/env node
/**
 * Normalize all public HTML pages:
 * - Inject page-shell.js (single chrome DOM source)
 * - Replace duplicated script blocks with site-loader.js
 * - Remove duplicate renderSiteChrome / __bizdavarChrome calls
 * - Consolidate CSS to site.css (+ keep page-specific CSS)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const PAGE_LOADER = {
  'index.html': {
    afterConfig: 'config/owned-products.js',
    afterLocales: 'i18n/owned-products-i18n.js',
    afterPageI18n: 'config/company-intel.js'
  },
  'pages/about.html': {
    afterPageI18n: 'config/company-intel.js,i18n/intel-i18n.js',
    beforeMain: 'about-page.js'
  },
  'pages/services.html': { beforeMain: 'services-page.js' },
  'pages/portfolio.html': {
    afterSeo: 'i18n/portfolio-meta.js',
    beforeMain: 'portfolio-page.js'
  },
  'pages/fast.html': {
    afterSeo: 'i18n/fast-catalog-i18n.js',
    afterPageI18n: 'config/fast-catalog.js',
    beforeMain: 'fast-page.js'
  },
  'pages/products.html': {
    afterConfig: 'config/owned-products.js',
    afterLocales: 'i18n/owned-products-i18n.js',
    afterPageI18n: 'config/company-intel.js'
  },
  'pages/vega.html': {
    afterSeo: 'i18n/supply-catalog-i18n.js',
    afterPageI18n: 'config/vega-products.js',
    beforeMain: 'vega-page.js'
  },
  'pages/prosense.html': {
    afterSeo: 'i18n/supply-catalog-i18n.js',
    afterPageI18n: 'lib/supply-brand-page.js,config/prosense-products.js',
    beforeMain: 'prosense-page.js'
  },
  'pages/gamak.html': {
    afterSeo: 'i18n/supply-catalog-i18n.js',
    afterPageI18n: 'lib/supply-brand-page.js,config/gamak-products.js',
    beforeMain: 'gamak-page.js'
  },
  'pages/digi-system.html': {
    afterSeo: 'i18n/supply-catalog-i18n.js',
    afterPageI18n: 'lib/supply-brand-page.js,config/digi-system-products.js',
    beforeMain: 'digi-system-page.js'
  },
  'pages/teraoka.html': {
    afterSeo: 'i18n/supply-catalog-i18n.js',
    afterPageI18n: 'lib/supply-brand-page.js,config/teraoka-products.js',
    beforeMain: 'teraoka-page.js'
  },
  'pages/teltonika.html': {
    afterSeo: 'i18n/supply-catalog-i18n.js',
    afterPageI18n: 'lib/supply-brand-page.js,config/teltonika-products.js',
    beforeMain: 'teltonika-page.js'
  },
  'pages/fxguard.html': { beforeMain: 'fxguard-page.js' },
  'pages/bizswap.html': { beforeMain: 'bizswap-page.js' }
};

const STANDARD_CSS = [
  'fonts.css', 'typography.css', 'icons.css', 'tokens.css', 'style.css',
  'layout.css', 'i18n.css', 'footer.css', 'responsive.css', 'premium.css'
];

function collectHtmlFiles(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, e.name).replace(/\\/g, '/');
    if (e.isDirectory()) {
      if (e.name === 'admin') continue;
      out.push(...collectHtmlFiles(path.join(dir, e.name), rel));
    } else if (e.name.endsWith('.html') && !e.name.startsWith('tmp')) {
      out.push(rel);
    }
  }
  return out;
}

function loaderAttrs(rel) {
  const cfg = PAGE_LOADER[rel] || {};
  const parts = [];
  if (cfg.afterConfig) parts.push(`data-after-config="${cfg.afterConfig}"`);
  if (cfg.afterLocales) parts.push(`data-after-locales="${cfg.afterLocales}"`);
  if (cfg.afterSeo) parts.push(`data-after-seo="${cfg.afterSeo}"`);
  if (cfg.afterPageI18n) parts.push(`data-after-page-i18n="${cfg.afterPageI18n}"`);
  if (cfg.beforeMain) parts.push(`data-before-main="${cfg.beforeMain}"`);
  return parts.join(' ');
}

function consolidateCss(html) {
  const links = [...html.matchAll(/<link rel="stylesheet" href="\/assets\/styles\/([^"]+)">/g)].map(m => m[1]);
  const pageCss = links.filter(l => !STANDARD_CSS.includes(l) && l !== 'site.css');
  let out = html;
  STANDARD_CSS.forEach(file => {
    out = out.replace(new RegExp(`\\s*<link rel="stylesheet" href="/assets/styles/${file.replace('.', '\\.')}">\\s*`, 'g'), '\n');
  });
  if (!out.includes('href="/assets/styles/site.css"')) {
    out = out.replace(
      /(<link rel="apple-touch-icon"[^>]+>)/,
      `$1\n  <link rel="stylesheet" href="/assets/styles/site.css">`
    );
  }
  pageCss.forEach(file => {
    if (!out.includes(`href="/assets/styles/${file}"`)) {
      out = out.replace(
        /(<link rel="stylesheet" href="\/assets\/styles\/site.css">)/,
        `$1\n  <link rel="stylesheet" href="/assets/styles/${file}">`
      );
    }
  });
  return out;
}

function stripChromeMarkup(html) {
  let out = html;
  out = out.replace(/\s*<a href="#main-content" class="skip-link"[^>]*>[\s\S]*?<\/a>\s*/g, '\n');
  out = out.replace(/\s*<div class="top-bar" id="topBar"><\/div>\s*/g, '\n');
  out = out.replace(/\s*<header class="header" id="siteHeader"><\/header>\s*/g, '\n');
  out = out.replace(/\s*<nav class="breadcrumbs-wrap" id="breadcrumbs"[^>]*><\/nav>\s*/g, '\n');
  out = out.replace(/\s*<div class="overlay" id="overlay"><\/div>\s*/g, '\n');
  out = out.replace(/\s*<footer class="footer" id="siteFooter"><\/footer>\s*/g, '\n');
  out = out.replace(/\s*<button class="back-to-top" id="backToTop"[^>]*><\/button>\s*/g, '\n');
  return out;
}

function injectPageShell(html) {
  if (html.includes('page-shell.js')) return html;
  const shell = '  <script src="/assets/scripts/components/page-shell.js"></script>\n';
  const noscriptEnd = html.indexOf('<!-- End Google Tag Manager (noscript) -->');
  if (noscriptEnd !== -1) {
    const insertAt = html.indexOf('\n', noscriptEnd) + 1;
    return html.slice(0, insertAt) + shell + html.slice(insertAt);
  }
  return html.replace(/(<body[^>]*>\s*)/, `$1${shell}`);
}

function ensureMainShell(html) {
  if (!html.includes('id="main-content"')) {
    html = html.replace(/<main(\s|>)/, '<main id="main-content" class="site-main"$1');
  } else if (!html.includes('class="site-main"')) {
    html = html.replace(/id="main-content"/, 'id="main-content" class="site-main"');
  }
  return html;
}

function replaceScriptBlock(html, rel) {
  const start = html.search(/<script src="\/assets\/scripts\/config\/paths\.js"><\/script>/);
  if (start === -1) return html;
  const bootStart = html.indexOf('<script src="/assets/scripts/i18n/bootstrap.js">', start);
  if (bootStart === -1) return html;
  const bootEnd = html.indexOf('</script>', bootStart) + '</script>'.length;

  let tail = html.slice(bootEnd);
  tail = tail.replace(/\s*<script>\s*window\.__bizdavarChrome[\s\S]*?<\/script>\s*/g, '\n');
  tail = tail.replace(/\s*renderSiteChrome\(\);\s*/g, '\n');

  const attrs = loaderAttrs(rel);
  const loader = `\n  <script src="/assets/scripts/site-loader.js"${attrs ? ' ' + attrs : ''}></script>`;
  return html.slice(0, start) + loader + tail;
}

function patchFile(rel) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return false;
  let html = fs.readFileSync(abs, 'utf8');
  const before = html;

  html = consolidateCss(html);
  html = stripChromeMarkup(html);
  html = injectPageShell(html);
  html = ensureMainShell(html);
  html = replaceScriptBlock(html, rel);

  if (html !== before) {
    fs.writeFileSync(abs, html, 'utf8');
    return true;
  }
  return false;
}

const files = ['index.html', ...collectHtmlFiles(path.join(ROOT, 'pages'), 'pages')];
let n = 0;
files.forEach(rel => {
  if (patchFile(rel)) {
    console.log('normalized:', rel);
    n++;
  }
});
console.log(`Done. ${n} file(s) updated.`);
