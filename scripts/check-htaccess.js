#!/usr/bin/env node
/**
 * Verify .htaccess exists (source of truth is repo root .htaccess).
 * Run after editing .htaccess to confirm file is present before deploy.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', '.htaccess');
if (!fs.existsSync(file)) {
  console.error('Missing .htaccess');
  process.exit(1);
}
const text = fs.readFileSync(file, 'utf8');
const checks = [
  ['RewriteEngine On', 'clean URLs'],
  ['AddDefaultCharset UTF-8', 'UTF-8 charset'],
  ['HTTPS', 'HTTPS redirect'],
  ['X-Content-Type-Options', 'security headers'],
  ['Sitemap', false] // not in htaccess
];
let ok = true;
for (const [needle, label] of checks) {
  if (label === false) continue;
  if (!text.includes(needle)) {
    console.warn(`WARN: missing ${label} (${needle})`);
    ok = false;
  }
}
console.log(ok ? '.htaccess OK' : '.htaccess has warnings');
console.log(`${text.split('\n').length} lines, ${text.length} bytes`);
