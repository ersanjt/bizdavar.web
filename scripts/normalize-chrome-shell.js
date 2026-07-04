const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const shell = `
  <a href="#main-content" class="skip-link" data-i18n="common.skipLink">رفتن به محتوای اصلی</a>
  <div class="top-bar" id="topBar"></div>
  <header class="header" id="siteHeader"></header>
  <nav class="breadcrumbs-wrap" id="breadcrumbs" aria-label="مسیر صفحه"></nav>
  <div class="overlay" id="overlay"></div>

  <main id="main-content" class="site-main">`;

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== 'admin' && ent.name !== 'node_modules') {
      walk(p, files);
    } else if (ent.isFile() && ent.name.endsWith('.html') && !p.includes(`${path.sep}admin${path.sep}`)) {
      files.push(p);
    }
  }
  return files;
}

const re = /(<body[^>]*>)[\s\S]*?(<main id="main-content" class="site-main">)/;
let count = 0;

for (const file of walk(root)) {
  let html = fs.readFileSync(file, 'utf8');
  if (!re.test(html)) {
    console.log('skip', path.relative(root, file));
    continue;
  }
  html = html.replace(re, `$1${shell}`);
  fs.writeFileSync(file, html);
  count += 1;
  console.log('ok', path.relative(root, file));
}

console.log('normalized', count, 'files');
