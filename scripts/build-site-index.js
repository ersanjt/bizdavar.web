/**
 * Build api/data/site-index.json from HTML files.
 * Compact catalog for the BizHub dashboard. Does not include admin or api.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const skip = new Set(['admin', 'api', 'storage', 'scripts', 'docs', 'node_modules', '.git']);
const locales = new Set(['tr', 'en', 'ru', 'ar']);
const pages = [];

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (dir === root && skip.has(ent.name)) continue;
      walk(abs);
      continue;
    }
    if (!ent.name.endsWith('.html')) continue;
    const rel = path.relative(root, abs).replace(/\\/g, '/');
    const item = describe(rel, abs);
    if (item) pages.push(item);
  }
}

function describe(rel, abs) {
  const parts = rel.split('/');
  const locale = locales.has(parts[0]) ? parts[0] : 'fa';
  const rest = locale === 'fa' ? parts : parts.slice(1);
  let section = 'other';
  if (rest.length === 1 && (rest[0] === 'index.html' || rest[0] === '')) section = 'home';
  else if (rest[0] === 'pages' && rest[1] === 'articles') section = 'articles';
  else if (rest[0] === 'pages' && rest[1] === 'motorcycle') section = 'motorcycle';
  else if (rest[0] === 'pages' && rest[1]) section = rest[1].replace(/\.html$/, '');
  else if (rest[0]) section = rest[0].replace(/\.html$/, '');

  let url = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  url = url.replace(/\/+$/, '') || '/';

  let title = url;
  let summary = '';
  const fd = fs.openSync(abs, 'r');
  try {
    const buf = Buffer.alloc(12288);
    const n = fs.readSync(fd, buf, 0, 12288, 0);
    const head = buf.slice(0, n).toString('utf8');
    const m = head.match(/<title>([^<]{1,220})<\/title>/i);
    if (m) title = m[1].replace(/\s+/g, ' ').trim();
    const d = head.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']{1,500})["']/i)
      || head.match(/<meta\s+[^>]*content=["']([^"']{1,500})["'][^>]*name=["']description["']/i);
    if (d) summary = d[1].replace(/\s+/g, ' ').trim();
  } finally {
    fs.closeSync(fd);
  }

  return {
    path: url,
    locale,
    section,
    title: title.slice(0, 180),
    summary: summary.slice(0, 240)
  };
}

walk(root);
pages.sort((a, b) => a.path.localeCompare(b.path));

const outDir = path.join(root, 'api', 'data');
fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, 'site-index.json');
fs.writeFileSync(out, JSON.stringify(pages));
const bySection = {};
for (const p of pages) bySection[p.section] = (bySection[p.section] || 0) + 1;
console.log('pages', pages.length, 'bytes', fs.statSync(out).size);
console.log(Object.entries(bySection).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, v]) => k + '=' + v).join(' '));

function textOf(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function metaContent(html, name) {
  const re = new RegExp('<meta\\s[^>]*(?:name|property)=["\']' + name + '["\'][^>]*content=["\']([^"\']*)["\']|<meta\\s[^>]*content=["\']([^"\']*)["\'][^>]*(?:name|property)=["\']' + name + '["\']', 'i');
  const m = html.match(re);
  return ((m && (m[1] || m[2])) || '').replace(/\s+/g, ' ').trim();
}

function readArticle(locale, slug) {
  const rel = locale === 'fa'
    ? path.join(root, 'pages', 'articles', slug + '.html')
    : path.join(root, locale, 'pages', 'articles', slug + '.html');
  if (!fs.existsSync(rel)) return null;
  const html = fs.readFileSync(rel, 'utf8');
  const h1 = textOf((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]);
  const title = h1 || textOf((html.match(/<title>([^<]*)<\/title>/i) || [])[1]);
  const cat = textOf((html.match(/class="blog-item__cat"[^>]*>([^<]*)</i) || [])[1]);
  const body = (html.match(/<div class="container prose article">([\s\S]*?)<\/div>\s*<\/article>/i) || [])[1] || '';
  return {
    title: title.slice(0, 240),
    category: cat.slice(0, 80),
    excerpt: metaContent(html, 'description').slice(0, 500),
    content: body.trim(),
    thumb: metaContent(html, 'og:image').slice(0, 500),
    published: metaContent(html, 'article:published_time').slice(0, 10)
  };
}

const articleDir = path.join(root, 'pages', 'articles');
const articles = fs.readdirSync(articleDir).filter(name => name.endsWith('.html')).sort().map(name => {
  const slug = name.replace(/\.html$/, '');
  const fa = readArticle('fa', slug);
  return {
    slug,
    category: (fa && fa.category) || 'general',
    published: (fa && fa.published) || '',
    thumb: (fa && fa.thumb) || '',
    fa,
    tr: readArticle('tr', slug),
    en: readArticle('en', slug)
  };
});
const articlesFile = path.join(outDir, 'articles.json');
fs.writeFileSync(articlesFile, JSON.stringify(articles));

function collectFaqs(dir, out, seen) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (dir === root && (skip.has(ent.name) || locales.has(ent.name))) continue;
      collectFaqs(abs, out, seen);
      continue;
    }
    if (!ent.name.endsWith('.html')) continue;
    const html = fs.readFileSync(abs, 'utf8');
    if (!html.includes('FAQPage')) continue;
    const blocks = html.match(/<script type="application\/ld\+json"[\s\S]*?<\/script>/gi) || [];
    for (const block of blocks) {
      let data;
      try { data = JSON.parse(block.replace(/<\/?script[^>]*>/gi, '')); } catch { continue; }
      const nodes = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      for (const node of nodes) {
        if (!node || node['@type'] !== 'FAQPage' || !Array.isArray(node.mainEntity)) continue;
        for (const item of node.mainEntity) {
          const question = textOf(item && item.name).slice(0, 480);
          const answer = textOf(item && item.acceptedAnswer && item.acceptedAnswer.text).slice(0, 4000);
          if (!question || !answer || seen.has(question)) continue;
          seen.add(question);
          out.push({ question, answer });
        }
      }
    }
  }
}

const faqs = [];
collectFaqs(root, faqs, new Set());
const faqsFile = path.join(outDir, 'faqs.json');
fs.writeFileSync(faqsFile, JSON.stringify(faqs));
console.log('articles', articles.length, 'bytes', fs.statSync(articlesFile).size);
console.log('faqs', faqs.length, 'bytes', fs.statSync(faqsFile).size);
