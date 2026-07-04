/**
 * Inject locale-url.js, seo-head.js, locale-preload.js into all HTML pages (after charset meta).
 * Run: node scripts/inject-locale-preload.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

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

function inject(file) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (!html.includes('locale-url.js')) {
    html = html.replace(
      /(<meta charset="UTF-8">)/i,
      '$1\n  <script src="/assets/scripts/i18n/locale-url.js"></script>'
    );
    changed = true;
  }

  if (!html.includes('seo-head.js')) {
    html = html.replace(
      /(<script src="\/assets\/scripts\/i18n\/locale-url\.js"><\/script>)/,
      '$1\n  <script src="/assets/scripts/i18n/seo-head.js"></script>'
    );
    changed = true;
  }

  if (!html.includes('locale-preload.js')) {
    html = html.replace(
      /(<script src="\/assets\/scripts\/i18n\/seo-head\.js"><\/script>)/,
      '$1\n  <script src="/assets/scripts/i18n/locale-preload.js"></script>'
    );
    changed = true;
  } else if (html.includes('locale-preload.js') && !html.includes('locale-url.js')) {
    html = html.replace(
      /  <script src="\/assets\/scripts\/i18n\/locale-preload\.js"><\/script>/,
      '  <script src="/assets/scripts/i18n/locale-url.js"></script>\n  <script src="/assets/scripts/i18n/seo-head.js"></script>\n  <script src="/assets/scripts/i18n/locale-preload.js"></script>'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
  }
  return changed;
}

const files = [
  path.join(ROOT, 'index.html'),
  ...collectHtmlFiles(path.join(ROOT, 'pages'), 'pages')
];

let updated = 0;
for (const rel of files) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  if (inject(abs)) {
    updated++;
    console.log('updated:', path.relative(ROOT, abs).replace(/\\/g, '/'));
  }
}

console.log(`Done. ${updated} file(s) updated.`);
