/**
 * Writes a page boot script to /assets/scripts/page-boot/<id>.js
 * so HTML can load it from script-src 'self' without 'unsafe-inline'.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BOOT_DIR = path.join(__dirname, '..', '..', 'assets', 'scripts', 'page-boot');

function normalize(body) {
  return String(body).replace(/\r\n/g, '\n').trim();
}

function bootId(body) {
  return crypto.createHash('sha256').update(normalize(body)).digest('hex').slice(0, 16);
}

function writeBoot(body) {
  const norm = normalize(body);
  const id = bootId(norm);
  fs.mkdirSync(BOOT_DIR, { recursive: true });
  const file = path.join(BOOT_DIR, id + '.js');
  const next = norm + '\n';
  if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== next) {
    fs.writeFileSync(file, next);
  }
  return id;
}

function bootTag(body, attrs) {
  const id = writeBoot(body);
  const extra = attrs ? ' ' + String(attrs).trim() : '';
  return `<script${extra} src="/assets/scripts/page-boot/${id}.js"></script>`;
}

module.exports = { bootTag, bootId, normalize, writeBoot };
