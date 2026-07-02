#!/usr/bin/env node
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

function fixFile(file) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  html = html.replace(/\sdefer(?=\s|>)/g, '');

  const swapRe = /(<script src="[^"]*\/bootstrap\.js"><\/script>\s*)(<script src="[^"]*\/main\.js"><\/script>)/g;
  html = html.replace(swapRe, '$2$1');

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed', path.relative(ROOT, file));
  }
}

walkHtml(path.join(ROOT, 'pages')).forEach(fixFile);
fixFile(path.join(ROOT, 'index.html'));
console.log('Done');
