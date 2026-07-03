#!/usr/bin/env node
/**
 * Ensure synchronous script loading: no defer, main.js before bootstrap.js,
 * chrome snapshot before bootstrap for immediate header/footer on old deploys.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SNAPSHOT = `  <script>
    window.__bizdavarChrome = window.renderSiteChrome;
    if (typeof window.__bizdavarChrome === 'function') window.__bizdavarChrome();
  </script>
`;
const SNAPSHOT_RE = /\s*<script>[\s\S]*?window\.__bizdavarChrome\s*=\s*window\.renderSiteChrome;[\s\S]*?<\/script>\n?/g;
const FAST_SNAPSHOT = `  <script>
    window.__bizdavarChrome = window.renderSiteChrome;
    window.__initFastPage = window.initFastPage;
    if (typeof window.__bizdavarChrome === 'function') window.__bizdavarChrome();
    if (typeof window.__initFastPage === 'function') window.__initFastPage();
  </script>
`;

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function fixFile(file) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  html = html.replace(/\sdefer(?=\s|>)/gi, '');

  const swapRe = /(<script src="[^"]*\/bootstrap\.js"><\/script>\s*)(<script src="[^"]*\/main\.js"><\/script>)/g;
  html = html.replace(swapRe, '$2$1');

  html = html.replace(SNAPSHOT_RE, '\n');

  const bootRe = /(<script src="[^"]*\/main\.js"><\/script>\s*)(<script src="[^"]*\/bootstrap\.js"><\/script>)/;
  const hasSnapshot = /window\.__bizdavarChrome\s*=\s*window\.renderSiteChrome/.test(html);
  if (bootRe.test(html) && !hasSnapshot) {
    const snap = path.basename(file) === 'fast.html' ? FAST_SNAPSHOT : SNAPSHOT;
    html = html.replace(bootRe, `$1${snap}$2`);
  }

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed', path.relative(ROOT, file));
  }
}

const files = [path.join(ROOT, 'index.html'), ...walkHtml(path.join(ROOT, 'pages'))];
files.forEach(fixFile);
console.log('Done —', files.length, 'HTML files checked');
