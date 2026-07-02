#!/usr/bin/env node
/**
 * Add defer to body scripts (keeps locale-preload.js in head synchronous).
 * Inline boot blocks get defer so they run after external deferred scripts.
 */
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

function deferFile(file) {
  let html = fs.readFileSync(file, 'utf8');
  const bodyStart = html.indexOf('<body');
  if (bodyStart < 0) return false;
  let changed = false;

  html = html.replace(/<script([^>]*?)src="([^"]+)"([^>]*)><\/script>/gi, (m, pre, src, post) => {
    if (m.includes(' defer') || m.includes(' type="module"')) return m;
    if (src.includes('locale-preload.js') && html.indexOf(m) < bodyStart) return m;
    changed = true;
    return `<script${pre}src="${src}" defer${post}></script>`;
  });

  html = html.replace(/<script>\s*\n?\s*bizdavarPageInit/g, () => {
    changed = true;
    return '<script defer>\n    bizdavarPageInit';
  });

  html = html.replace(/<script>\s*\n?\s*bizdavarPageInit/g, () => {
    changed = true;
    return '<script defer>\n    bizdavarPageInit';
  });

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Deferred', path.relative(ROOT, file));
  }
  return changed;
}

walkHtml(path.join(ROOT, 'pages')).forEach(deferFile);
deferFile(path.join(ROOT, 'index.html'));
console.log('Done defer-page-scripts');
