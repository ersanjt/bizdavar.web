#!/usr/bin/env node
/**
 * Discover CSS before blocking head scripts, version the stylesheet,
 * defer page-shell.js, and delay GTM until after load.
 *
 * Run: node scripts/hoist-critical-css.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CSS_VER = '20260831d';
const JS_VER = '20260831d';
const GTM_ID = 'GTM-NXWQQWF8';
const VIEWPORT = '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">';
const CSS_HREF = `/assets/styles/site.css?v=${CSS_VER}`;

const GTM_HEAD = `  <!-- Google Tag Manager -->
  <script src="/assets/scripts/gtm-boot.js?v=${JS_VER}" defer></script>
  <!-- End Google Tag Manager -->`;

function walkHtml(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const name of fs.readdirSync(dir)) {
    if (name === 'admin' || name === 'node_modules' || name === 'tmp' || name.startsWith('.')) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function htmlDir(html) {
  const m = html.match(/<html[^>]*\sdir=["'](ltr|rtl)["']/i);
  return m ? m[1].toLowerCase() : 'rtl';
}

function fontPreloads(dir) {
  if (dir === 'ltr') {
    return [
      '  <link rel="preload" href="/assets/fonts/inter/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>',
      '  <link rel="preload" href="/assets/fonts/inter/Inter-ExtraBold.woff2" as="font" type="font/woff2" crossorigin>'
    ].join('\n');
  }
  return [
    '  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>',
    '  <link rel="preload" href="/assets/fonts/estedad/Estedad-Bold.woff2" as="font" type="font/woff2" crossorigin>'
  ].join('\n');
}

function transform(html) {
  let out = html;

  out = out.replace(
    /\s*<link rel="preload" href="\/assets\/fonts\/[^"]+" as="font"[^>]*>\s*/g,
    '\n'
  );

  const vpMatch = out.match(/<meta name="viewport"[^>]*>/i);
  const viewport = vpMatch ? vpMatch[0] : VIEWPORT;
  out = out.replace(/\s*<meta name="viewport"[^>]*>\s*/gi, '\n');

  out = out.replace(
    /\s*<link rel="stylesheet" href="\/assets\/styles\/site\.css(\?v=[^"]*)?">\s*/g,
    '\n'
  );

  out = out.replace(
    /\s*<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->\s*/g,
    '\n'
  );
  out = out.replace(
    /\s*<script src="\/assets\/scripts\/gtm-boot\.js[^"]*"(?:\s+defer)?><\/script>\s*/g,
    '\n'
  );
  out = out.replace(
    /\s*<script>\(function\(w,d,s,l,i\)\{[\s\S]*?GTM-NXWQQWF8[\s\S]*?<\/script>\s*/g,
    '\n'
  );
  out = out.replace(
    /\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[\];[\s\S]*?GTM-NXWQQWF8[\s\S]*?<\/script>\s*/g,
    '\n'
  );

  const critical = [
    '  ' + viewport,
    `  <link rel="stylesheet" href="${CSS_HREF}">`,
    fontPreloads(htmlDir(out)),
    GTM_HEAD
  ].join('\n');

  if (!/<meta charset="UTF-8">/i.test(out)) return html;
  out = out.replace(
    /(<meta charset="UTF-8">)/i,
    `$1\n${critical}`
  );

  out = out.replace(
    /<script src="(\/assets\/scripts\/i18n\/(?:locale-url|seo-head|locale-preload)\.js)(?:\?v=[^"]*)?"(?:\s+defer)?><\/script>/g,
    `<script src="$1?v=${JS_VER}" defer></script>`
  );

  out = out.replace(
    /<script src="(\/assets\/scripts\/components\/page-shell\.js)(?:\?v=[^"]*)?"(?:\s+defer)?><\/script>/g,
    `<script src="$1?v=${JS_VER}" defer></script>`
  );

  out = out.replace(
    /<script src="(\/assets\/scripts\/site-loader\.js)(?:\?v=[^"]*)?"/g,
    `<script src="$1?v=${JS_VER}"`
  );

  const headerSkel = '<header class="header" id="siteHeader"><div class="header-skel"><img src="/assets/images/brand/bizdavar-logo-200.webp" alt="Bizdavar" width="100" height="42" fetchpriority="high" decoding="async"></div></header>';
  out = out.replace(
    /<header class="header" id="siteHeader">[\s\S]*?<\/header>/,
    headerSkel
  );

  out = out.replace(/\n{3,}/g, '\n\n');
  return out;
}

const files = [
  ...walkHtml(ROOT)
];

let updated = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  if (!before.includes('assets/styles/site.css') && !before.includes('page-shell.js')) continue;
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    updated++;
  }
}

console.log(`Hoisted critical CSS in ${updated} HTML file(s).`);
