const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith('.html')) files.push(p);
  }
  return files;
}

for (const f of walk(root)) {
  let c = fs.readFileSync(f, 'utf8');
  const isArticle = f.includes(`${path.sep}articles${path.sep}`);
  const isPage = f.includes(`${path.sep}pages${path.sep}`);
  const isRoot = !isPage && !isArticle;
  const prefix = isRoot ? 'assets/' : isArticle ? '../../assets/' : '../assets/';
  let changed = false;

  if (!c.includes('i18n/locales.js')) {
    const cfg = `${prefix}scripts/config/site-config.js`;
    const ins = `\n  <script src="${prefix}scripts/i18n/locales.js"></script>\n  <script src="${prefix}scripts/i18n/i18n.js"></script>`;
    c = c.replace(`<script src="${cfg}"></script>`, `<script src="${cfg}"></script>${ins}`);
    changed = true;
  }

  c = c.replace(/\n  <script src="[^"]*i18n\/bootstrap\.js"><\/script>/g, '');
  const comp = `${prefix}scripts/components/site-components.js`;
  if (!c.includes('i18n/bootstrap.js')) {
    const boot = `\n  <script src="${prefix}scripts/i18n/bootstrap.js"></script>`;
    c = c.replace(`<script src="${comp}"></script>`, `<script src="${comp}"></script>${boot}`);
    changed = true;
  }

  if (!c.includes('i18n.css')) {
    c = c.replace('layout.css">', `layout.css">\n  <link rel="stylesheet" href="${prefix}styles/i18n.css">`);
    changed = true;
  }

  if (!c.includes('footer.css')) {
    const after = c.includes('i18n.css')
      ? `href="${prefix}styles/i18n.css">`
      : 'layout.css">';
    const ins = c.includes('i18n.css')
      ? `href="${prefix}styles/i18n.css">\n  <link rel="stylesheet" href="${prefix}styles/footer.css">`
      : `layout.css">\n  <link rel="stylesheet" href="${prefix}styles/footer.css">`;
    c = c.replace(after, ins);
    changed = true;
  }

  if (changed) fs.writeFileSync(f, c);
  console.log(path.relative(root, f), changed ? 'updated' : 'ok');
}
