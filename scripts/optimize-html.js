#!/usr/bin/env node
/**
 * Site-wide HTML optimizations — idempotent
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GTM_ID = 'GTM-NXWQQWF8';
const GA4_ID = 'G-4GFEY12SLH';

const GTM_HEAD = `  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${GTM_ID}');</script>
  <!-- End Google Tag Manager -->`;

const GA4_HEAD = `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_ID}');
  </script>`;

const GTM_BODY = `  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->`;

const KNOWN_PAGES = new Set([
  'about', 'services', 'portfolio', 'blog', 'contact', 'privacy', 'fast', 'vega',
  'prosense', 'teltonika', 'gamak', 'digi-system', 'teraoka', 'bz-diamond', 'biztejarat', 'index'
]);

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'admin' || name === 'node_modules') continue;
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function toRootAbsolute(href) {
  if (!href || /^(https?:|mailto:|tel:|#|\/|javascript:)/.test(href)) return href;
  const hashIdx = href.indexOf('#');
  const hash = hashIdx >= 0 ? href.slice(hashIdx) : '';
  let pathPart = (hashIdx >= 0 ? href.slice(0, hashIdx) : href).replace(/^\.\//, '');

  pathPart = pathPart.replace(/^(\.\.\/)+/, '');
  if (pathPart.startsWith('pages/')) {
    return '/' + pathPart.replace(/\.html$/i, '') + hash;
  }
  if (pathPart.startsWith('articles/')) {
    return '/pages/' + pathPart.replace(/\.html$/i, '') + hash;
  }
  const stem = pathPart.replace(/\.html$/i, '').split('/').pop();
  if (pathPart === 'index' || pathPart === 'index.html' || pathPart === '' || stem === 'index') {
    return hash ? '/' + hash : '/';
  }
  if (KNOWN_PAGES.has(stem) && !pathPart.includes('/')) {
    return `/pages/${pathPart.replace(/\.html$/i, '')}${hash}`;
  }
  return href;
}

function optimizeHtml(html) {
  let out = html;

  out = out.replace(/\s*<link rel="stylesheet" href="\/assets\/styles\/mobile-chrome\.css">\r?\n/g, '\n');

  if (!out.includes('premium.css')) {
    out = out.replace(
      /(<link rel="stylesheet" href="\/assets\/styles\/responsive\.css">)/,
      '$1\n  <link rel="stylesheet" href="/assets/styles/premium.css">'
    );
  }

  if (!out.includes('premium.js')) {
    out = out.replace(
      /(<script src="\/assets\/scripts\/main\.js"><\/script>)/,
      '$1\n  <script src="/assets/scripts/premium.js"></script>'
    );
  }

  if (!out.includes('nav-flow.js')) {
    out = out.replace(
      /(<script src="\/assets\/scripts\/premium\.js"><\/script>)/,
      '$1\n  <script src="/assets/scripts/nav-flow.js"></script>'
    );
  }

  if (!out.includes('name="view-transition"')) {
    out = out.replace(
      /(<meta name="viewport"[^>]*>)/,
      '$1\n  <meta name="view-transition" content="same-origin">'
    );
  }

  if (!out.includes(GTM_ID)) {
    out = out.replace(/(<meta charset="UTF-8">)/, `$1\n${GTM_HEAD}`);
    out = out.replace(/(<body[^>]*>)/, `$1\n${GTM_BODY}`);
  }

  if (!out.includes(GA4_ID)) {
    if (out.includes('<!-- End Google Tag Manager -->')) {
      out = out.replace(
        /<!-- End Google Tag Manager -->/,
        `<!-- End Google Tag Manager -->\n${GA4_HEAD}`
      );
    } else {
      out = out.replace(/(<meta charset="UTF-8">)/, `$1\n${GA4_HEAD}`);
    }
  }

  out = out.replace(
    /<button class="back-to-top" id="backToTop" aria-label="([^"]*)">\?<\/button>/g,
    '<button class="back-to-top" id="backToTop" aria-label="$1" data-i18n-aria="common.backToTop">↑</button>'
  );

  out = out.replace(/(<button class="back-to-top" id="backToTop" aria-label="[^"]*")>↑<\/button>/g, (m, open) => {
    if (m.includes('data-i18n-aria')) return m;
    return `${open} data-i18n-aria="common.backToTop">↑</button>`;
  });

  out = out.replace(/href="([^"]+)"/g, (full, href) => {
    const fixed = toRootAbsolute(href);
    return fixed === href ? full : `href="${fixed}"`;
  });

  return out;
}

let count = 0;
for (const file of walkHtml(ROOT)) {
  const before = fs.readFileSync(file, 'utf8');
  const after = optimizeHtml(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    count += 1;
    console.log('optimized', path.relative(ROOT, file).replace(/\\/g, '/'));
  }
}
console.log('done —', count, 'files updated');
