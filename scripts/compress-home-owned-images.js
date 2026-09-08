#!/usr/bin/env node
/**
 * Recompress oversized homepage owned-product WebPs and emit 800w variants.
 * Run: node scripts/compress-home-owned-images.js
 */
const fs = require('fs');
const path = require('path');

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('sharp is not installed. Run: npm install --no-save sharp');
    process.exit(1);
  }

  const dir = path.join(__dirname, '..', 'assets', 'images', 'content');
  const files = [
    'home-owned-fxguard.webp',
    'home-owned-bizswap.webp',
    'home-owned-biztab.webp',
    'home-owned-bizpet.webp'
  ];

  for (const name of files) {
    const abs = path.join(dir, name);
    const before = fs.statSync(abs).size;
    const meta = await sharp(abs).metadata();
    const fullBuf = await sharp(abs)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toBuffer();
    fs.writeFileSync(abs, fullBuf);

    const eightName = name.replace(/\.webp$/, '-800.webp');
    const eightBuf = await sharp(abs)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toBuffer();
    fs.writeFileSync(path.join(dir, eightName), eightBuf);

    console.log(
      `${name}: ${(before / 1024).toFixed(0)}KB ${meta.width}w → ${(fullBuf.length / 1024).toFixed(0)}KB 1200w, ${eightName} ${(eightBuf.length / 1024).toFixed(0)}KB`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
