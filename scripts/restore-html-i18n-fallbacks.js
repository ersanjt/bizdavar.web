#!/usr/bin/env node
/**
 * Restore Persian (fa) fallbacks in HTML from BIZDAVAR_LOCALES.
 * Fixes ? corruption from accidental non-UTF-8 saves.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

global.window = global;
require(path.join(ROOT, 'assets/scripts/i18n/locales.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locales-pages.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locale-seo.js'));

const fa = global.BIZDAVAR_LOCALES.fa;

function getByPath(obj, key) {
  if (!obj || !key) return undefined;
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function resolveFa(key) {
  const v = getByPath(fa, key);
  return typeof v === 'string' ? v : null;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pageKeyFromFile(rel) {
  const norm = rel.replace(/\\/g, '/');
  if (norm === 'index.html') return 'home';
  const m = norm.match(/^pages\/articles\/(.+)\.html$/);
  if (m) return `articles.${m[1].replace(/-/g, '_')}`;
  const m2 = norm.match(/^pages\/(.+)\.html$/);
  if (m2) return m2[1].replace(/-/g, '_');
  return null;
}

function seoForPage(pageKey) {
  if (!pageKey) return null;
  const p = getByPath(fa, `pages.${pageKey}`);
  if (!p) return null;
  return {
    title: p.seoTitle || p.title,
    description: p.seoDescription || p.description
  };
}

function patchHtml(content, rel) {
  let out = content;

  out = out.replace(/data-i18n="([^"]+)"([^>]*)>([^<]*)</g, (full, key, attrs, _text) => {
    const val = resolveFa(key);
    if (!val) return full;
    return `data-i18n="${key}"${attrs}>${val}<`;
  });

  out = out.replace(/data-i18n-html="([^"]+)"([^>]*)>([\s\S]*?)<\//g, (full, key, attrs, _inner) => {
    const val = resolveFa(key);
    if (!val) return full;
    const tagEnd = full.match(/<\/(\w+)>/);
    const tag = tagEnd ? tagEnd[1] : 'p';
    return `data-i18n-html="${key}"${attrs}>${val}</${tag}`;
  });

  out = out.replace(/data-i18n-placeholder="([^"]+)"([^>]*)/g, (full, key, attrs) => {
    const val = resolveFa(key);
    if (!val) return full;
    return `data-i18n-placeholder="${key}"${attrs.replace(/\splaceholder="[^"]*"/, '')} placeholder="${escapeHtml(val)}"`;
  });

  out = out.replace(/data-i18n-aria="([^"]+)"([^>]*)/g, (full, key, rest) => {
    const val = resolveFa(key);
    if (!val) return full;
    const cleaned = rest.replace(/\saria-label="[^"]*"/, '');
    return `data-i18n-aria="${key}"${cleaned} aria-label="${escapeHtml(val)}"`;
  });

  out = out.replace(/data-i18n-alt="([^"]+)"([^>]*)/g, (full, key, rest) => {
    const val = resolveFa(key);
    if (!val) return full;
    const cleaned = rest.replace(/\salt="[^"]*"/, '');
    return `data-i18n-alt="${key}"${cleaned} alt="${escapeHtml(val)}"`;
  });

  const pageKey = pageKeyFromFile(rel);
  const seo = pageKey === 'home'
    ? { title: fa.seo?.defaultTitle, description: fa.seo?.defaultDescription }
    : seoForPage(pageKey);

  if (seo?.title) {
    out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);
  }
  if (seo?.description) {
    out = out.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${escapeHtml(seo.description)}">`
    );
  }

  if (rel.replace(/\\/g, '/') === 'index.html') {
    out = out.replace(/<div class="stat__number">[^<]*<\/div>\s*<div class="stat__label" data-i18n="home.statProjects">/,
      '<div class="stat__number">+100</div><div class="stat__label" data-i18n="home.statProjects">');
    out = out.replace(/<div class="stat__number">[^<]*<\/div>\s*<div class="stat__label" data-i18n="home.statCountries">/,
      '<div class="stat__number">۱۱</div><div class="stat__label" data-i18n="home.statCountries">');
    out = out.replace(/<div class="stat__number">[^<]*<\/div>\s*<div class="stat__label" data-i18n="home.statYears">/,
      '<div class="stat__number">۱۲+</div><div class="stat__label" data-i18n="home.statYears">');
  }

  return out;
}

function collectHtmlFiles(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const rel = path.join(base, e.name);
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'admin' || e.name.startsWith('tmp')) continue;
      files.push(...collectHtmlFiles(abs, rel));
    } else if (e.name.endsWith('.html') && !e.name.startsWith('tmp')) {
      files.push(rel);
    }
  }
  return files;
}

const files = [
  ...collectHtmlFiles(path.join(ROOT, 'pages'), 'pages'),
  'index.html'
].map(f => f.replace(/\\/g, '/'));

let updated = 0;
for (const rel of files) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  const raw = fs.readFileSync(abs, 'utf8');
  const next = patchHtml(raw, rel);
  if (next !== raw) {
    fs.writeFileSync(abs, next, 'utf8');
    updated++;
    console.log('restored:', rel);
  }
}

console.log(`Done. ${updated} file(s) updated.`);
