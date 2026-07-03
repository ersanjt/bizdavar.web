#!/usr/bin/env node
/**
 * Full image/asset audit — local file existence + optional live HTTP check.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const LIVE = process.argv.includes('--live');
const refs = new Set();

function add(ref) {
  const norm = normalize(ref);
  if (norm) refs.add(norm);
}

function normalize(ref) {
  if (!ref || typeof ref !== 'string') return null;
  let r = ref.trim().split('?')[0].split('#')[0];
  if (/^(https?:|data:|mailto:|#)/i.test(r)) return null;
  r = r.replace(/^\.\//, '');
  while (r.startsWith('../')) r = r.slice(3);
  if (r.startsWith('/')) r = r.slice(1);
  if (!r.startsWith('assets/')) return null;
  if (r.includes('${')) return null;
  if (!/\.(svg|png|jpe?g|webp|gif|ico|woff2?|css|js)$/i.test(r)) return null;
  return r;
}

function scanText(text) {
  const patterns = [
    /(?:src|href|content|thumb|logo|image|heroImage|mapImage|ogImage|aboutHeroImage|imageSecondary)\s*[:=]\s*['"]([^'"]+)['"]/gi,
    /(?:src|href|content)=["']([^"']+)["']/gi,
    /url\(\s*["']?([^"')]+)["']?\s*\)/gi,
    /['"](assets\/(?:images|fonts)[^'"]+)['"]/g
  ];
  for (const re of patterns) {
    let m;
    const r = new RegExp(re.source, re.flags);
    while ((m = r.exec(text))) add(m[1]);
  }
}

function walk(dir, exts) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git') continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, exts);
    else if (exts.has(path.extname(name))) scanText(fs.readFileSync(full, 'utf8'));
  }
}

walk(ROOT, new Set(['.html', '.css', '.js']));

const missing = [];
const badSvg = [];
for (const norm of [...refs].sort()) {
  const disk = path.join(ROOT, norm);
  if (!fs.existsSync(disk)) {
    missing.push(norm);
    continue;
  }
  if (norm.endsWith('.svg')) {
    const buf = fs.readFileSync(disk);
    const bad = [...buf].filter((c) => c < 32 && c !== 9 && c !== 10 && c !== 13);
    if (bad.length) badSvg.push({ norm, count: bad.length });
  }
}

console.log('Unique asset refs:', refs.size);
console.log('Missing local files:', missing.length);
missing.forEach((n) => console.log('  MISSING', n));
console.log('Invalid SVG files:', badSvg.length);
badSvg.forEach((s) => console.log('  BAD_SVG', s.norm, s.count));

if (!LIVE) process.exit(missing.length || badSvg.length ? 1 : 0);

const urls = [...refs].filter((n) => fs.existsSync(path.join(ROOT, n))).map((n) => `https://bizdavar.com/${n}`);
let pending = urls.length;
let liveMissing = 0;

function head(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(0));
    req.setTimeout(8000, () => { req.destroy(); resolve(0); });
    req.end();
  });
}

(async () => {
  for (const url of urls) {
    const code = await head(url);
    if (code !== 200) {
      liveMissing++;
      console.log('  LIVE_FAIL', code, url);
    }
  }
  console.log('Live checked:', urls.length, 'failures:', liveMissing);
  process.exit(missing.length || badSvg.length || liveMissing ? 1 : 0);
})();
