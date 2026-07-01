#!/usr/bin/env node
/** Fix internal url: values in HTML scripts — extensionless + correct depth for articles */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function fixUrl(url, isArticle) {
  if (!url || url.startsWith('http') || url.startsWith('#')) return url;
  let u = url.replace(/\.html(?=[#?]|$)/, '');
  if (isArticle) {
    if (u === 'index.html' || u === 'index') u = '../../index';
    else if (['blog', 'about', 'services', 'contact', 'portfolio', 'fast', 'privacy'].includes(u.split('#')[0])) {
      u = `../${u}`;
    } else if (u.startsWith('pages/')) u = u.replace(/^pages\//, '../');
  }
  return u;
}

for (const file of walkHtml(path.join(ROOT, 'pages'))) {
  const isArticle = file.includes(`${path.sep}articles${path.sep}`);
  let c = fs.readFileSync(file, 'utf8');
  let changed = false;
  c = c.replace(/url:\s*'([^']+)'/g, (m, url) => {
    const nu = fixUrl(url, isArticle);
    if (nu !== url) { changed = true; return `url: '${nu}'`; }
    return m;
  });
  c = c.replace(/slug:\s*'pages\/([^']+)\.html'/g, (m, p) => {
    changed = true;
    return `slug: 'pages/${p}'`;
  });
  c = c.replace(/canonical:\s*'https:\/\/bizdavar\.com\/([^']+)\.html'/g, (m, p) => {
    changed = true;
    return `canonical: 'https://bizdavar.com/${p}'`;
  });
  if (changed) {
    fs.writeFileSync(file, c, 'utf8');
    console.log('Fixed URLs', path.relative(ROOT, file));
  }
}

console.log('Done fix-js-urls');
