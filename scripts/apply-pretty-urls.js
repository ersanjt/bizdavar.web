#!/usr/bin/env node
/**
 * Strip .html from internal page URLs in HTML, sitemap, and JS string literals.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function prettyHref(href) {
  if (!href || /^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) return href;
  if (href.includes('/assets/') || href.startsWith('assets/')) return href;
  if (/\.(css|js|png|jpe?g|webp|svg|gif|woff2?|ico)(\?|#|$)/i.test(href)) return href;
  if (href === 'index.html' || href.endsWith('/index.html')) {
    return href.replace(/\/?index\.html$/, '') || './';
  }
  return href.replace(/\.html(?=[#?]|$)/, '');
}

function prettyCanonical(url) {
  if (!url || !url.includes('bizdavar.com')) return url;
  return url
    .replace(/https:\/\/bizdavar\.com\/index\.html(?=[#"'\s]|$)/g, 'https://bizdavar.com/')
    .replace(/https:\/\/bizdavar\.com\/(.+?)\.html(?=[#"'\s]|$)/g, 'https://bizdavar.com/$1');
}

function processHtml(content) {
  let out = content.replace(
    /(<(?:a|link)[^>]+(?:href|canonical)=["'])([^"']+)(["'])/gi,
    (m, pre, href, post) => {
      if (pre.includes('canonical') || pre.includes('href')) {
        const fixed = href.startsWith('http') ? prettyCanonical(href) : prettyHref(href);
        return pre + fixed + post;
      }
      return m;
    }
  );
  out = out.replace(
    /(canonical:\s*['"])(https:\/\/bizdavar\.com[^'"]+)(['"])/g,
    (_, a, url, c) => a + prettyCanonical(url) + c
  );
  return out;
}

function processSitemap(content) {
  return content.replace(
    /<loc>https:\/\/bizdavar\.com\/(.+?)<\/loc>/g,
    (m, p) => {
      if (p === '' || p === '/') return '<loc>https://bizdavar.com/</loc>';
      const clean = p.replace(/\.html$/, '');
      return `<loc>https://bizdavar.com/${clean}</loc>`;
    }
  );
}

function processJsI18n(content) {
  return content.replace(/href="([^"]+\.html(?:#[^"]*)?)"/g, (m, href) => {
    if (href.includes('assets/')) return m;
    return `href="${prettyHref(href)}"`;
  });
}

function walk(dir, ext, fn) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (name === 'node_modules' || name === '.git') continue;
      walk(full, ext, fn);
    } else if (full.endsWith(ext)) {
      fn(full);
    }
  }
}

let changed = 0;

const sitemapPath = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const next = processSitemap(fs.readFileSync(sitemapPath, 'utf8'));
  if (next !== fs.readFileSync(sitemapPath, 'utf8')) {
    fs.writeFileSync(sitemapPath, next);
    changed++;
    console.log('Updated sitemap.xml');
  }
}

for (const file of ['index.html']) {
  const full = path.join(ROOT, file);
  const raw = fs.readFileSync(full, 'utf8');
  const next = processHtml(raw);
  if (next !== raw) {
    fs.writeFileSync(full, next);
    changed++;
    console.log('Updated', file);
  }
}

walk(path.join(ROOT, 'pages'), '.html', (file) => {
  const raw = fs.readFileSync(file, 'utf8');
  const next = processHtml(raw);
  if (next !== raw) {
    fs.writeFileSync(file, next);
    changed++;
    console.log('Updated', path.relative(ROOT, file));
  }
});

for (const rel of [
  'assets/scripts/i18n/locales-pages.js',
  'assets/scripts/i18n/i18n.js'
]) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) continue;
  const raw = fs.readFileSync(full, 'utf8');
  const next = processJsI18n(raw);
  if (next !== raw) {
    fs.writeFileSync(full, next);
    changed++;
    console.log('Updated', rel);
  }
}

console.log(`Done. ${changed} file(s) updated.`);
