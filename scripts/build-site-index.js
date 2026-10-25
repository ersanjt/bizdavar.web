/**
 * Build api/data/site-index.json from HTML files.
 * Compact catalog for the BizHub dashboard. Does not include admin or api.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const skip = new Set(['admin', 'api', 'storage', 'scripts', 'docs', 'node_modules', '.git']);
const locales = new Set(['tr', 'en', 'ru', 'ar']);
const pages = [];

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (dir === root && skip.has(ent.name)) continue;
      walk(abs);
      continue;
    }
    if (!ent.name.endsWith('.html')) continue;
    const rel = path.relative(root, abs).replace(/\\/g, '/');
    const item = describe(rel, abs);
    if (item) pages.push(item);
  }
}

function describe(rel, abs) {
  const parts = rel.split('/');
  const locale = locales.has(parts[0]) ? parts[0] : 'fa';
  const rest = locale === 'fa' ? parts : parts.slice(1);
  let section = 'other';
  if (rest.length === 1 && (rest[0] === 'index.html' || rest[0] === '')) section = 'home';
  else if (rest[0] === 'pages' && rest[1] === 'articles') section = 'articles';
  else if (rest[0] === 'pages' && rest[1] === 'motorcycle') section = 'motorcycle';
  else if (rest[0] === 'pages' && rest[1]) section = rest[1].replace(/\.html$/, '');
  else if (rest[0]) section = rest[0].replace(/\.html$/, '');

  let url = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  url = url.replace(/\/+$/, '') || '/';

  let title = url;
  let summary = '';
  const fd = fs.openSync(abs, 'r');
  try {
    const buf = Buffer.alloc(12288);
    const n = fs.readSync(fd, buf, 0, 12288, 0);
    const head = buf.slice(0, n).toString('utf8');
    const m = head.match(/<title>([^<]{1,220})<\/title>/i);
    if (m) title = m[1].replace(/\s+/g, ' ').trim();
    const d = head.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']{1,500})["']/i)
      || head.match(/<meta\s+[^>]*content=["']([^"']{1,500})["'][^>]*name=["']description["']/i);
    if (d) summary = d[1].replace(/\s+/g, ' ').trim();
  } finally {
    fs.closeSync(fd);
  }

  return {
    path: url,
    locale,
    section,
    title: title.slice(0, 180),
    summary: summary.slice(0, 240)
  };
}

walk(root);
pages.sort((a, b) => a.path.localeCompare(b.path));

const outDir = path.join(root, 'api', 'data');
fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, 'site-index.json');
fs.writeFileSync(out, JSON.stringify(pages));
const bySection = {};
for (const p of pages) bySection[p.section] = (bySection[p.section] || 0) + 1;
console.log('pages', pages.length, 'bytes', fs.statSync(out).size);
console.log(Object.entries(bySection).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, v]) => k + '=' + v).join(' '));
