/**
 * Offline SEO scan of every public HTML file and both sitemaps.
 * Mirrors the URL → file mapping in .htaccess so sitemap 404s are caught before Google sees them.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const BASE = 'https://bizdavar.com';
const LOCALES = ['tr', 'en', 'ru', 'ar', 'de'];
const PUBLIC_DIRS = ['pages', ...LOCALES];
const SKIP_DIRS = new Set(['node_modules', '.git', 'scripts', 'docs', 'promo-video', 'storage', 'database', 'admin', 'api', 'media']);
const NON_PAGES = new Set(['404.html', 'go.html']);

function walkHtml(dir, list) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, list);
    else if (entry.name.endsWith('.html')) list.push(full);
  }
  return list;
}

function publicHtmlFiles() {
  const files = [path.join(ROOT, 'index.html')];
  for (const loc of LOCALES) {
    const idx = path.join(ROOT, loc, 'index.html');
    if (fs.existsSync(idx)) files.push(idx);
  }
  for (const dir of PUBLIC_DIRS) {
    const pagesDir = dir === 'pages' ? path.join(ROOT, 'pages') : path.join(ROOT, dir, 'pages');
    if (fs.existsSync(pagesDir)) walkHtml(pagesDir, files);
  }
  return files;
}

function relPosix(file) {
  return path.relative(ROOT, file).split(path.sep).join('/');
}

/** Public URL a file is served at (extensionless, as linked and canonicalised). */
function urlForFile(file) {
  const rel = relPosix(file);
  if (rel === 'index.html') return `${BASE}/`;
  const locHome = rel.match(/^(tr|en|ru|ar)\/index\.html$/);
  if (locHome) return `${BASE}/${locHome[1]}/`;
  return `${BASE}/${rel.replace(/\.html$/, '')}`;
}

/** File Apache serves for a public URL, following the locale fallback in .htaccess. */
function fileForUrl(url) {
  let p;
  try { p = new URL(url).pathname; } catch { return null; }
  p = decodeURIComponent(p);
  if (p === '/' ) return path.join(ROOT, 'index.html');
  const locHome = p.match(/^\/(tr|en|ru|ar)\/?$/);
  if (locHome) return path.join(ROOT, locHome[1], 'index.html');
  const clean = p.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
  const direct = path.join(ROOT, `${clean}.html`);
  if (fs.existsSync(direct)) return direct;
  const locPage = clean.match(/^(tr|en|ru|ar)\/pages\/(.+)$/);
  if (locPage) {
    const shared = path.join(ROOT, 'pages', `${locPage[2]}.html`);
    if (fs.existsSync(shared)) return shared;
  }
  const asDir = path.join(ROOT, clean, 'index.html');
  if (fs.existsSync(asDir)) return asDir;
  return null;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return m ? decodeEntities(m[2] !== undefined ? m[2] : m[3]) : null;
}

function metaContent(html, key, value) {
  const re = /<meta\b[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    if ((attr(m[0], key) || '').toLowerCase() === value) return attr(m[0], 'content');
  }
  return null;
}

function linkHref(html, rel) {
  const re = /<link\b[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    if ((attr(m[0], 'rel') || '').toLowerCase() === rel) return attr(m[0], 'href');
  }
  return null;
}

/** Inline code the enforced CSP (script-src without 'unsafe-inline') will refuse to run. */
function cspViolations(html) {
  const out = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    if (/\ssrc\s*=/.test(attrs)) continue;
    if (/type\s*=\s*["']?(application\/(ld\+)?json|text\/template|importmap)/i.test(attrs)) continue;
    if (!m[2].trim()) continue;
    out.push(`inline <script>: ${m[2].trim().slice(0, 60).replace(/\s+/g, ' ')}`);
  }
  const handler = html.match(/<[a-z][^>]*\son[a-z]+\s*=\s*["'][^"']+["']/i);
  if (handler) out.push(`inline event handler: ${handler[0].slice(0, 80)}`);
  if (/href\s*=\s*["']javascript:/i.test(html)) out.push('javascript: URL');
  return out;
}

function pageKind(rel) {
  if (/\/motorcycle\/bdv-am-/.test(rel)) return 'product';
  if (/\/articles\//.test(rel)) return 'article';
  return 'page';
}

function localeOf(rel) {
  const m = rel.match(/^(tr|en|ru|ar)\//);
  return m ? m[1] : 'fa';
}

function scanPage(file) {
  const rel = relPosix(file);
  const html = fs.readFileSync(file, 'utf8');
  const head = html.slice(0, Math.max(html.indexOf('</head>'), 0) || html.length);
  const titleMatch = head.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(titleMatch[1].trim()) : '';
  const description = metaContent(head, 'name', 'description') || '';
  const robots = (metaContent(head, 'name', 'robots') || '').toLowerCase();
  const canonical = linkHref(head, 'canonical');
  const ogImage = metaContent(head, 'property', 'og:image');
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const hasJsonLd = /application\/ld\+json/i.test(html);
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const imgsNoAlt = imgs.filter(t => attr(t, 'alt') === null).length;
  return {
    rel,
    url: urlForFile(file),
    kind: pageKind(rel),
    locale: localeOf(rel),
    title,
    description,
    canonical,
    noindex: robots.includes('noindex'),
    ogImage: !!ogImage,
    h1Count,
    hasJsonLd,
    imgsNoAlt,
    csp: cspViolations(html),
  };
}

function sitemapUrls(name) {
  const file = path.join(ROOT, name);
  if (!fs.existsSync(file)) return [];
  const xml = fs.readFileSync(file, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
}

/** Visible length; Google truncates titles near 600px (~60 Latin chars) and descriptions near 155–160 chars. */
function len(s) {
  return [...s].length;
}

function scanSite() {
  const files = publicHtmlFiles().filter(f => !NON_PAGES.has(path.basename(f)));
  const pages = files.map(scanPage);
  const issues = [];
  const add = (level, code, rel, msg) => issues.push({ level, code, rel, msg });

  const titleIndex = new Map();
  for (const p of pages) {
    if (p.noindex) continue;
    const isProduct = p.kind === 'product';
    if (p.csp.length) add('error', 'csp-inline', p.rel, p.csp.join(' | '));
    if (!p.canonical) add('error', 'canonical-missing', p.rel, 'no rel=canonical');
    else if (p.canonical.replace(/\/$/, '') !== p.url.replace(/\/$/, '')) {
      add('warn', 'canonical-mismatch', p.rel, `canonical ${p.canonical} ≠ served ${p.url}`);
    }
    if (!p.title) add('error', 'title-missing', p.rel, 'no <title>');
    else if (!isProduct && len(p.title) > 65) add('warn', 'title-long', p.rel, `title ${len(p.title)} chars: ${p.title}`);
    else if (!isProduct && len(p.title) < 25) add('warn', 'title-short', p.rel, `title ${len(p.title)} chars: ${p.title}`);
    if (!p.description) add(isProduct ? 'warn' : 'error', 'desc-missing', p.rel, 'no meta description');
    else if (!isProduct && len(p.description) > 165) add('warn', 'desc-long', p.rel, `description ${len(p.description)} chars`);
    else if (!isProduct && len(p.description) < 70) add('warn', 'desc-short', p.rel, `description ${len(p.description)} chars`);
    if (!isProduct && p.h1Count !== 1) add('warn', 'h1-count', p.rel, `${p.h1Count} <h1> tags`);
    if (!isProduct && !p.ogImage) add('warn', 'og-image-missing', p.rel, 'no og:image');
    if (p.imgsNoAlt) add('warn', 'img-alt', p.rel, `${p.imgsNoAlt} <img> without alt`);
    if (p.title) {
      const key = `${p.locale}|${p.title}`;
      if (!titleIndex.has(key)) titleIndex.set(key, []);
      titleIndex.get(key).push(p.rel);
    }
  }
  for (const [key, rels] of titleIndex) {
    if (rels.length > 1) add('warn', 'title-duplicate', rels[0], `same title on ${rels.length} pages (${key.split('|')[0]}): ${rels.slice(1, 4).join(', ')}`);
  }

  const sitemaps = { 'sitemap.xml': sitemapUrls('sitemap.xml'), 'sitemap-motorcycle.xml': sitemapUrls('sitemap-motorcycle.xml') };
  const byRel = new Map(pages.map(p => [p.rel, p]));
  const inSitemap = new Set();
  for (const [name, urls] of Object.entries(sitemaps)) {
    const seen = new Set();
    for (const u of urls) {
      if (seen.has(u)) add('warn', 'sitemap-duplicate', name, `listed twice: ${u}`);
      seen.add(u);
      inSitemap.add(u.replace(/\/$/, ''));
      const f = fileForUrl(u);
      if (!f) { add('error', 'sitemap-404', name, `no file serves ${u}`); continue; }
      const page = byRel.get(relPosix(f));
      if (page && page.noindex) add('error', 'sitemap-noindex', name, `noindex page in sitemap: ${u}`);
      if (page && page.canonical && page.canonical.replace(/\/$/, '') !== u.replace(/\/$/, '')) {
        add('warn', 'sitemap-noncanonical', name, `${u} canonicalises to ${page.canonical}`);
      }
    }
  }
  for (const p of pages) {
    if (p.noindex || p.kind === 'product') continue;
    if (!inSitemap.has(p.url.replace(/\/$/, ''))) add('warn', 'not-in-sitemap', p.rel, `indexable page missing from sitemap: ${p.url}`);
  }

  const counts = {};
  for (const i of issues) counts[i.code] = (counts[i.code] || 0) + 1;
  return {
    pages: pages.length,
    byKind: pages.reduce((a, p) => ((a[p.kind] = (a[p.kind] || 0) + 1), a), {}),
    sitemapUrls: Object.fromEntries(Object.entries(sitemaps).map(([k, v]) => [k, v.length])),
    errors: issues.filter(i => i.level === 'error').length,
    warnings: issues.filter(i => i.level === 'warn').length,
    counts,
    issues,
    pageIndex: pages,
  };
}

module.exports = { scanSite, sitemapUrls, fileForUrl, urlForFile, ROOT, BASE };
