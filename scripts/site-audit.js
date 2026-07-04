#!/usr/bin/env node
/**
 * Site audit — internal links, script order, assets, structure
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const issues = [];

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function fileExists(fromFile, href) {
  if (!href || /^(https?:|mailto:|tel:|#|javascript:)/.test(href)) return true;
  const clean = href.replace(/[#?].*$/, '');
  if (!clean || clean === '.') return true;

  /* Root-absolute paths (/assets/...) — canonical on live site */
  if (clean.startsWith('/')) {
    const rootPath = path.join(ROOT, clean.replace(/^\//, '').replace(/\//g, path.sep));
    if (fs.existsSync(rootPath)) return true;
    if (fs.existsSync(rootPath + '.html')) return true;
    return false;
  }

  const dir = path.dirname(fromFile);
  let resolved = path.normalize(path.join(dir, clean));
  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    resolved = path.join(resolved, 'index.html');
  }
  if (fs.existsSync(resolved)) return true;
  if (fs.existsSync(resolved + '.html')) return true;
  if (clean.startsWith('assets/')) {
    return fs.existsSync(path.join(ROOT, clean.replace(/^\.\//, '')));
  }
  return false;
}

const htmlFiles = [path.join(ROOT, 'index.html'), ...walkHtml(path.join(ROOT, 'pages'))];

for (const file of htmlFiles) {
  const rel = path.relative(ROOT, file);
  const html = fs.readFileSync(file, 'utf8');

  if (!html.includes('locale-preload.js')) {
    issues.push({ level: 'warn', file: rel, msg: 'Missing locale-preload.js in head' });
  }

  const bodyIdx = html.indexOf('<body');
  const body = bodyIdx >= 0 ? html.slice(bodyIdx) : html;
  const bootIdx = body.indexOf('bootstrap.js');
  const mainIdx = body.indexOf('main.js');
  if (bootIdx >= 0 && mainIdx >= 0 && bootIdx < mainIdx) {
    issues.push({ level: 'error', file: rel, msg: 'bootstrap.js loads before main.js' });
  }
  if (/\sdefer(?=\s|>)/.test(body)) {
    issues.push({ level: 'warn', file: rel, msg: 'Body scripts still use defer' });
  }

  if (html.includes('mobile-chrome.css') && html.includes('responsive.css')) {
    issues.push({ level: 'warn', file: rel, msg: 'Duplicate mobile-chrome.css (already imported by responsive.css)' });
  }

  const hrefRe = /href="([^"]+)"/g;
  let m;
  while ((m = hrefRe.exec(html)) !== null) {
    const href = m[1];
    if (/\.html/.test(href) && !href.includes('assets/')) {
      issues.push({ level: 'warn', file: rel, msg: `Static href still has .html: ${href}` });
    }
    if (!fileExists(file, href)) {
      issues.push({ level: 'error', file: rel, msg: `Broken href: ${href}` });
    }
  }

  const srcRe = /src="([^"]+)"/g;
  while ((m = srcRe.exec(html)) !== null) {
    const src = m[1];
    if (src.startsWith('http')) continue;
    if (!fileExists(file, src)) {
      issues.push({ level: 'error', file: rel, msg: `Broken src: ${src}` });
    }
  }

  const related = html.match(/renderRelatedLinks\(\[[^\]]+\]\)/);
  if (related) {
    const wrongPairs = [
      ['gamak.html', '"url":"teraoka"'],
      ['gamak.html', '"url":"digi-system"[^}]*"titleKey":"gamakPage.related.1'],
      ['teraoka.html', '"url":"teraoka"[^}]*"titleKey":"teraokaPage.related.0'],
    ];
    for (const [page, pattern] of wrongPairs) {
      if (rel.replace(/\\/g, '/').endsWith(page) && new RegExp(pattern).test(related[0])) {
        issues.push({ level: 'error', file: rel, msg: 'Scrambled renderRelatedLinks URLs' });
      }
    }
    if (/url:\s*'[^']*\.html'/.test(related[0])) {
      issues.push({ level: 'warn', file: rel, msg: 'renderRelatedLinks uses .html URLs' });
    }
  }
}

const errors = issues.filter(i => i.level === 'error');
const warns = issues.filter(i => i.level === 'warn');

console.log(`Audit: ${errors.length} errors, ${warns.length} warnings`);
for (const i of issues.slice(0, 80)) {
  console.log(`[${i.level.toUpperCase()}] ${i.file}: ${i.msg}`);
}
if (issues.length > 80) console.log(`... and ${issues.length - 80} more`);

const out = ['# Site Audit', '', `Generated: ${new Date().toISOString()}`, '', `- Errors: ${errors.length}`, `- Warnings: ${warns.length}`, ''];
for (const i of issues) out.push(`- **${i.level}** \`${i.file}\`: ${i.msg}`);
fs.mkdirSync(path.join(ROOT, 'docs'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'docs', 'SITE-AUDIT.md'), out.join('\n'), 'utf8');
console.log('Wrote docs/SITE-AUDIT.md');
process.exit(errors.length ? 1 : 0);
