#!/usr/bin/env node
/**
 * Content & locale audit — wrong-language HTML, missing i18n keys, EN clones in ru/ar.
 * Run: node scripts/content-locale-audit.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCALES = ['fa', 'tr', 'en', 'ru', 'ar'];
const LOCALE_DIRS = { fa: '', tr: 'tr', en: 'en', ru: 'ru', ar: 'ar' };

const PERSIAN_RE = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
const CYRILLIC_RE = /[\u0400-\u04FF]/;
const ARABIC_SCRIPT_RE = /[\u0600-\u06FF]/;

function walkHtml(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkHtml(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function localeFromPath(rel) {
  const parts = rel.replace(/\\/g, '/').split('/');
  if (parts[0] === 'tr' || parts[0] === 'en' || parts[0] === 'ru' || parts[0] === 'ar') return parts[0];
  return 'fa';
}

function extractBodyText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i);
  const block = main ? main[0] : html;
  return block
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 2000);
}

function countScript(text, re) {
  let n = 0;
  for (const ch of text) if (re.test(ch)) n++;
  return n;
}

function flattenKeys(obj, prefix = '') {
  const keys = [];
  if (!obj || typeof obj !== 'object') return keys;
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) keys.push(...flattenKeys(v, p));
    else keys.push(p);
  }
  return keys;
}

function loadLocales() {
  global.window = global;
  require(path.join(ROOT, 'assets/scripts/i18n/locales.js'));
  require(path.join(ROOT, 'assets/scripts/i18n/locales-pages.js'));
  require(path.join(ROOT, 'assets/scripts/i18n/locale-seo.js'));
  require(path.join(ROOT, 'assets/scripts/i18n/locales-ru-ar.js'));
  return global.BIZDAVAR_LOCALES;
}

const issues = [];

// ── HTML body language mismatch (articles especially) ──
const htmlFiles = walkHtml(ROOT).filter(p => {
  const rel = path.relative(ROOT, p).replace(/\\/g, '/');
  return rel.includes('articles/') || rel === 'index.html' || rel.endsWith('/index.html');
});

for (const file of htmlFiles) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const loc = localeFromPath(rel);
  if (loc === 'fa' || loc === 'ar') continue; // ar shares Arabic script block with Persian — skip false positives
  const html = fs.readFileSync(file, 'utf8');
  const text = extractBodyText(html);
  if (text.length < 80) continue;
  const faChars = countScript(text, PERSIAN_RE);
  const ratio = faChars / text.length;
  if (ratio > 0.15) {
    issues.push({
      type: 'wrong-language-html',
      severity: 'high',
      locale: loc,
      file: rel,
      detail: `~${Math.round(ratio * 100)}% Persian script in ${loc} HTML body (JS may override at runtime)`
    });
  }
}

// ── ru/ar keys identical to en (likely untranslated) ──
const L = loadLocales();
const enKeys = flattenKeys(L.en);
const compareLocales = ['ru', 'ar'];

for (const lang of compareLocales) {
  const identical = [];
  for (const key of enKeys) {
    const parts = key.split('.');
    let ev = L.en;
    let lv = L[lang];
    for (const p of parts) {
      ev = ev?.[p];
      lv = lv?.[p];
    }
    if (typeof ev === 'string' && ev === lv && ev.length > 24 && !/https?:\/\//.test(ev)) {
      identical.push(key);
    }
  }
  const critical = identical.filter(k =>
    /^(home|contactPage|conversions|aboutPage|servicesPage|privacyPage)\./.test(k) ||
    k.startsWith('nav.') ||
    k.startsWith('footer.')
  );
  if (critical.length > 0) {
    issues.push({
      type: 'untranslated-clone',
      severity: 'medium',
      locale: lang,
      detail: `${critical.length} critical strings still identical to English`,
      sample: critical.slice(0, 8)
    });
  }
}

// ── Article bodies ru/ar still English? ──
try {
  require(path.join(ROOT, 'assets/scripts/i18n/articles-body-i18n.js'));
  try {
    require(path.join(ROOT, 'assets/scripts/i18n/articles-body-ru-ar.js'));
  } catch (_) { /* optional until created */ }
  const bodies = global.BIZDAVAR_ARTICLE_BODIES || {};
  for (const lang of ['ru', 'ar']) {
    const sample = bodies[lang]?.['fast-studio'] || '';
    const enSample = bodies.en?.['fast-studio'] || '';
    if (sample && sample === enSample.replace(/\/en\//g, `/${lang}/`)) {
      issues.push({
        type: 'article-en-clone',
        severity: 'high',
        locale: lang,
        detail: 'Article bodies appear to be English with URL swap only'
      });
    } else if (sample) {
      const cyr = countScript(sample.replace(/<[^>]+>/g, ''), CYRILLIC_RE);
      const ars = countScript(sample.replace(/<[^>]+>/g, ''), ARABIC_SCRIPT_RE);
      if (lang === 'ru' && cyr < 20) {
        issues.push({ type: 'article-low-cyrillic', severity: 'high', locale: 'ru', detail: 'fast-studio body has little Cyrillic text' });
      }
      if (lang === 'ar' && ars < 20) {
        issues.push({ type: 'article-low-arabic', severity: 'high', locale: 'ar', detail: 'fast-studio body has little Arabic text' });
      }
    }
  }
} catch (e) {
  issues.push({ type: 'error', severity: 'low', detail: 'Could not load article bodies: ' + e.message });
}

// ── Report ──
const high = issues.filter(i => i.severity === 'high');
const med = issues.filter(i => i.severity === 'medium');

console.log('Bizdavar content locale audit\n');
console.log(`Issues: ${issues.length} (${high.length} high, ${med.length} medium)\n`);

if (!issues.length) {
  console.log('✓ No content locale issues detected.');
  process.exit(0);
}

for (const i of issues.slice(0, 40)) {
  console.log(`[${i.severity}] ${i.type}${i.locale ? ' (' + i.locale + ')' : ''}`);
  if (i.file) console.log('  file:', i.file);
  console.log('  ', i.detail);
  if (i.sample) console.log('  sample keys:', i.sample.join(', '));
  console.log('');
}

if (issues.length > 40) console.log(`… and ${issues.length - 40} more`);

process.exit(high.length ? 1 : 0);
