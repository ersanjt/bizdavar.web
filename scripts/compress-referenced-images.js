#!/usr/bin/env node
/**
 * Compress images actually referenced by HTML/JS if they are oversized.
 * Dedupes identical files so placeholder copies compress once.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const MIN_KB = 100;
const MAX_W = 1400;

function walk(dir, exts, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    if (name.name === 'node_modules' || name.name === '.git' || name.name === 'admin') continue;
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full, exts, acc);
    else if (exts.has(path.extname(name.name).toLowerCase())) acc.push(full);
  }
  return acc;
}

function collectRefs() {
  const refs = new Set();
  const files = walk(ROOT, new Set(['.html', '.js', '.css', '.json']));
  const re = /(?:assets\/images\/[A-Za-z0-9_./-]+\.(?:webp|png|jpe?g|gif|jpeg))/gi;
  for (const file of files) {
    if (file.includes(`${path.sep}node_modules${path.sep}`)) continue;
    const text = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = re.exec(text))) refs.add(m[0].replace(/\\/g, '/'));
  }
  return [...refs];
}

async function main() {
  const sharp = require('sharp');
  const refs = collectRefs();
  const targets = [];
  for (const rel of refs) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const kb = fs.statSync(abs).size / 1024;
    if (kb >= MIN_KB) targets.push({ rel, abs, kb });
  }
  targets.sort((a, b) => b.kb - a.kb);
  console.log(`Referenced images >=${MIN_KB}KB: ${targets.length}`);

  const byHash = new Map();
  for (const t of targets) {
    const hash = crypto.createHash('sha1').update(fs.readFileSync(t.abs)).digest('hex');
    if (!byHash.has(hash)) byHash.set(hash, []);
    byHash.get(hash).push(t);
  }
  console.log(`Unique blobs: ${byHash.size}`);

  let saved = 0;
  for (const group of byHash.values()) {
    const first = group[0];
    const ext = path.extname(first.abs).toLowerCase();
    const meta = await sharp(first.abs).metadata();
    const width = Math.min(MAX_W, meta.width || MAX_W);
    let pipeline = sharp(first.abs).resize({ width, withoutEnlargement: true });
    if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9 });
    else if (ext === '.webp') pipeline = pipeline.webp({ quality: 72, effort: 6 });
    else pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true });
    const buf = await pipeline.toBuffer();
    const before = fs.statSync(first.abs).size;
    if (buf.length >= before * 0.92) {
      console.log(`skip ${first.rel} (${Math.round(before / 1024)}KB, no win)`);
      continue;
    }
    for (const t of group) {
      try {
        fs.writeFileSync(t.abs, buf);
      } catch (err) {
        console.warn(`write fail ${t.rel}: ${err.code || err.message}`);
      }
    }
    const after = buf.length;
    saved += (before - after) * group.length;
    console.log(
      `${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB  x${group.length}  ${first.rel}`
    );
  }
  console.log(`Saved ~${Math.round(saved / 1024)}KB`);

  const lcp800 = [
    'assets/images/content/home-brand-teraoka.webp',
    'assets/images/content/home-brand-liqui-moly.webp',
    'assets/images/teltonika/hero/fleet-telematics.webp',
    'assets/images/prosense/hero-pq-sil2.webp',
    'assets/images/gamak/category-three-phase.webp',
    'assets/images/teraoka/hero/teraoka-retail-hero.webp',
    'assets/images/digi-system/hero/digi-retail-hero.webp',
    'assets/images/liqui-moly/octane-plus.jpg',
    'assets/images/uwt/product-vn1020.jpg',
    'assets/images/vega/slides/value-process-safety.jpg',
    'assets/images/vega/product-vegapuls-6x-photo.webp'
  ];
  for (const rel of lcp800) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const out = abs.replace(/\.(webp|jpe?g|png)$/i, '-800.webp');
    const buf = await sharp(abs)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toBuffer();
    fs.writeFileSync(out, buf);
    console.log(`800w ${path.relative(ROOT, out)} ${(buf.length / 1024).toFixed(0)}KB`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
