/**
 * Inject locale-preload.js into all HTML pages (after charset meta).
 * Run: node scripts/inject-locale-preload.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function depthFor(file) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  if (rel === 'index.html') return 0;
  const parts = rel.split('/').length - 1;
  return parts;
}

function assetPrefix(depth) {
  return depth ? '../'.repeat(depth) + 'assets' : 'assets';
}

function inject(file) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('locale-preload.js')) return false;

  const prefix = assetPrefix(depthFor(file));
  const tag = `  <script src="${prefix}/scripts/i18n/locale-preload.js"></script>`;

  const next = html.replace(
    /(<meta charset="UTF-8">)/i,
    `$1\n${tag}`
  );

  if (next === html) {
    console.warn('Skip (no charset):', file);
    return false;
  }

  fs.writeFileSync(file, next, 'utf8');
  return true;
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
for (const f of files) {
  if (inject(f)) {
    console.log('OK', path.relative(ROOT, f));
    n++;
  }
}
console.log(`Done — ${n} file(s) updated.`);
