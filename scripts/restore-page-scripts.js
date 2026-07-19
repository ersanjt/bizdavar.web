#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

const CLEAN = 'e2081e4';
const FILES = [
  'pages/contact.html', 'pages/services.html', 'pages/products.html', 'pages/privacy.html',
  'pages/fast.html', 'pages/blog.html', 'pages/portfolio.html', 'pages/vega.html', 'pages/prosense.html',
  'pages/teltonika.html', 'pages/gamak.html', 'pages/teraoka.html', 'pages/digi-system.html',
  'pages/bz-diamond.html', 'pages/biztejarat.html', 'pages/biztab.html', 'pages/bizsanitizer-v5.html',
  'pages/fxguard.html', 'pages/bizswap.html'
];

function gitShow(ref, file) {
  return execSync(`git show ${ref}:${file}`, { encoding: 'utf8', maxBuffer: 8e6 });
}

function lastInline(html) {
  const all = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
  return all.length ? all[all.length - 1] : null;
}

for (const f of FILES) {
  let cur = fs.readFileSync(f, 'utf8');
  let old;
  try {
    old = gitShow(CLEAN, f);
  } catch {
    continue;
  }
  const om = lastInline(old);
  const cm = lastInline(cur);
  if (!om || !cm) {
    console.log('skip scripts', f);
    continue;
  }
  let restored = om[0]
    .replace(/\s*renderSiteChrome\(\);?\s*/g, '\n')
    .replace(/\s*renderMobileChrome\(\);?\s*/g, '\n');

  const curSeo = cm[0].match(/injectPageSeo\([\s\S]*?\);/);
  const oldSeo = restored.match(/injectPageSeo\([\s\S]*?\);/);
  if (curSeo && oldSeo) restored = restored.replace(oldSeo[0], curSeo[0]);

  cur = cur.replace(cm[0], restored);
  cur = cur.replace(/aria-label="[^"]*\?{2,}[^"]*"/g, 'aria-label="بازگشت به بالا"');
  fs.writeFileSync(f, cur);
  console.log('scripts', f, '????=', (cur.match(/\?\?\?\?/g) || []).length);
}
