#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const missing = [];
const re = /['"](assets\/images\/[^'"]+\.(?:svg|png|jpe?g|webp|gif))['"]/gi;

function scan(file) {
  const text = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = re.exec(text))) {
    const p = m[1];
    if (!fs.existsSync(path.join(ROOT, p))) {
      missing.push({ p, file: path.relative(ROOT, file) });
    }
  }
}

for (const dir of ['assets/scripts/config', 'assets/scripts/i18n', 'assets/scripts']) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) continue;
  for (const name of fs.readdirSync(full)) {
    if (name.endsWith('.js')) scan(path.join(full, name));
  }
}

console.log('Config/JS image refs missing:', missing.length);
missing.forEach((x) => console.log(' ', x.p, '<=', x.file));
process.exit(missing.length ? 1 : 0);
