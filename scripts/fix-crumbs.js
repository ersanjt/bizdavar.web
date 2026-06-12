const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const CRUMB_MAP = {
  'خانه': 'home',
  'درباره ما': 'about',
  'خدمات': 'services',
  'نمونه\u200cکارها': 'portfolio',
  'وبلاگ': 'blog',
  'تماس با ما': 'contact',
  'تماس': 'contact',
  'Fast Web Studio': 'fast',
  'حریم خصوصی': 'privacy',
  'محصولات VEGA': 'vega',
  'محصولات Prosense': 'prosense',
  'Gamak': 'gamak'
};

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
  let changed = false;
  c = c.replace(/\{\s*name:\s*'([^']+)',\s*url:\s*'([^']+)'\s*\}/g, (m, name, url) => {
    const page = CRUMB_MAP[name];
    if (!page) return m;
    changed = true;
    return `{ page: '${page}', url: '${url}' }`;
  });
  if (changed) {
    fs.writeFileSync(f, c);
    console.log('updated', path.relative(root, f));
  }
}
