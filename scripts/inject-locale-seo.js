/** Add locale-seo.js after locales-pages.js in all HTML files. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TAG = 'locale-seo.js';

function depthFor(file) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  if (rel === 'index.html') return 0;
  return rel.split('/').length - 1;
}

function assetPrefix(depth) {
  return depth ? '../'.repeat(depth) + 'assets' : 'assets';
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = [path.join(ROOT, 'index.html'), ...walk(path.join(ROOT, 'pages'))];
let n = 0;
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(TAG)) continue;
  const prefix = assetPrefix(depthFor(file));
  const line = `  <script src="${prefix}/scripts/i18n/locale-seo.js"></script>\n`;
  const next = html.replace(
    /(<script src="[^"]*locales-pages\.js"><\/script>\s*\n)/,
    `$1${line}`
  );
  if (next === html) {
    console.warn('Skip (no locales-pages):', path.relative(ROOT, file));
    continue;
  }
  fs.writeFileSync(file, next, 'utf8');
  console.log('OK', path.relative(ROOT, file));
  n++;
}
console.log(`locale-seo.js added to ${n} file(s).`);
