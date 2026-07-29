#!/usr/bin/env node
/**
 * Remove standalone gtag.js (GA4) snippets — GTM already loads analytics.
 * Prevents double page_view counting when both fire.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GTAG_RE = /\n?\s*(?:<!-- Google tag \(gtag\.js\) -->\s*)?<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+"><\/script>\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*function gtag\(\)\{dataLayer\.push\(arguments\);\}\s*gtag\('js', new Date\(\)\);\s*gtag\('config', 'G-[A-Z0-9]+'\);\s*<\/script>\s*/g;

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      if (name === 'admin' || name === 'node_modules') continue;
      walk(p, out);
    } else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = [path.join(ROOT, 'index.html'), ...walk(path.join(ROOT, 'pages'))];
let n = 0;
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  if (!GTAG_RE.test(html)) continue;
  GTAG_RE.lastIndex = 0;
  html = html.replace(GTAG_RE, '\n');
  fs.writeFileSync(file, html, 'utf8');
  n++;
  console.log('stripped gtag', path.relative(ROOT, file));
}
console.log(`Done. updated=${n}`);
