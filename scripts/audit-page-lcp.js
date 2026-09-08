#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function listHtml() {
  const out = ['index.html'];
  for (const name of fs.readdirSync('pages')) {
    if (name.endsWith('.html')) out.push(path.join('pages', name));
  }
  const art = path.join('pages', 'articles');
  if (fs.existsSync(art)) {
    for (const name of fs.readdirSync(art)) {
      if (name.endsWith('.html')) out.push(path.join('pages', 'articles', name));
    }
  }
  return out;
}

function imgTags(html) {
  const out = [];
  const re = /<img\b[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[0];
    const src = (tag.match(/\bsrc=["']([^"']+)/) || [])[1] || '';
    out.push({
      src,
      lazy: /loading=["']lazy/.test(tag),
      fp: /fetchpriority=["']high/.test(tag),
      srcset: /\bsrcset=/.test(tag)
    });
  }
  return out;
}

function sizeOf(src) {
  if (!src || /^(https?:|data:)/i.test(src)) return null;
  const p = src.split('?')[0].replace(/^\//, '');
  try {
    return Math.round(fs.statSync(p).size / 1024);
  } catch {
    return null;
  }
}

const rows = [];
for (const page of listHtml()) {
  const html = fs.readFileSync(page, 'utf8');
  const list = imgTags(html).filter((i) => i.src && !/favicon|logo-200|partners\//.test(i.src));
  const first = list.find((i) => !i.lazy) || list[0];
  rows.push({
    page,
    src: first ? first.src : '',
    kb: first ? sizeOf(first.src) : null,
    lazy: first ? first.lazy : null,
    srcset: first ? first.srcset : null,
    fp: first ? first.fp : null
  });
}

rows.sort((a, b) => (b.kb || 0) - (a.kb || 0));
console.log('page\tkb\tlazy\tsrcset\tfp\tsrc');
for (const r of rows) {
  console.log([
    r.page,
    r.kb == null ? '-' : r.kb,
    r.lazy ? 'lazy' : (r.src ? 'eager' : '-'),
    r.srcset ? 'srcset' : '-',
    r.fp ? 'high' : '-',
    r.src.replace('/assets/images/', '')
  ].join('\t'));
}

const heavy = rows.filter((r) => (r.kb || 0) >= 120);
console.log('\nHeavy LCP (>=120KB):', heavy.length);
