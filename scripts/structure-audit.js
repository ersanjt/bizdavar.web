#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CHROME_IDS = ['topBar', 'siteHeader', 'breadcrumbs', 'overlay', 'siteFooter'];

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'admin' || name === 'node_modules') continue;
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

const files = walkHtml(ROOT).sort();
const pages = [];
const issues = [];

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  const page = html.match(/data-page="([^"]+)"/)?.[1];
  const depth = html.match(/data-depth="([^"]+)"/)?.[1];
  const css = [...html.matchAll(/href="(\/assets\/styles\/[^"]+)"/g)].map(m => m[1]);
  const scripts = [...html.matchAll(/src="([^"]*scripts[^"]+)"/g)].map(m => m[1]);

  const row = {
    file: rel,
    page,
    depth,
    hasSkip: html.includes('skip-link'),
    hasMain: html.includes('id="main-content"'),
    chrome: Object.fromEntries(CHROME_IDS.map(id => [id, html.includes(`id="${id}"`)])),
    css,
    scripts,
    hasPremiumCss: html.includes('premium.css'),
    hasPremiumJs: html.includes('premium.js'),
    mobileChromeDup: html.includes('mobile-chrome.css') && html.includes('responsive.css'),
    renderChrome: html.includes('renderSiteChrome'),
    renderBreadcrumbs: html.includes('renderBreadcrumbs'),
    pageBoot: scripts.find(s => /-page\.js$/.test(s) || s.includes('fast-page'))
  };

  const bootIdx = scripts.findIndex(s => s.includes('bootstrap.js'));
  const mainIdx = scripts.findIndex(s => s.includes('main.js'));
  if (bootIdx >= 0 && mainIdx >= 0 && bootIdx < mainIdx) {
    issues.push({ level: 'error', file: rel, msg: 'bootstrap.js before main.js' });
  }

  for (const id of CHROME_IDS) {
    if (!row.chrome[id]) issues.push({ level: 'error', file: rel, msg: `Missing #${id}` });
  }
  if (!row.hasSkip) issues.push({ level: 'warn', file: rel, msg: 'Missing skip-link' });
  if (!row.hasMain) issues.push({ level: 'error', file: rel, msg: 'Missing #main-content' });
  if (!row.renderChrome) issues.push({ level: 'error', file: rel, msg: 'No renderSiteChrome() call' });
  if (row.mobileChromeDup) issues.push({ level: 'warn', file: rel, msg: 'Duplicate mobile-chrome.css link' });
  if (!row.hasPremiumCss) issues.push({ level: 'info', file: rel, msg: 'premium.css not linked' });
  if (!row.hasPremiumJs) issues.push({ level: 'info', file: rel, msg: 'premium.js not linked' });

  pages.push(row);
}

const cssKey = pages.map(p => p.css.join('|'));
const scriptKey = pages.map(p => p.scripts.map(s => path.basename(s)).join('|'));
const uniqueCss = [...new Set(cssKey)];
const uniqueScripts = [...new Set(scriptKey)];

console.log('=== BIZDAVAR STRUCTURE AUDIT ===\n');
console.log('Public pages:', pages.length);
console.log('By depth:', pages.reduce((a, p) => { a[p.depth] = (a[p.depth] || 0) + 1; return a; }, {}));
console.log('Unique CSS stacks:', uniqueCss.length);
console.log('Unique script stacks:', uniqueScripts.length);
console.log('');

console.log('--- Page inventory ---');
for (const p of pages) {
  const boot = p.pageBoot ? path.basename(p.pageBoot) : 'inline/none';
  console.log(`${p.file.padEnd(45)} page=${String(p.page).padEnd(12)} depth=${p.depth} boot=${boot}`);
}

if (uniqueCss.length > 1) {
  console.log('\n--- CSS stack variants ---');
  uniqueCss.forEach((stack, i) => {
    const sample = pages.find(p => p.css.join('|') === stack)?.file;
    console.log(`Variant ${i + 1} (${sample}):`, stack.split('|').map(s => path.basename(s)).join(' → '));
  });
}

if (uniqueScripts.length > 1) {
  console.log('\n--- Script stack variants ---');
  uniqueScripts.forEach((stack, i) => {
    const sample = pages.find(p => p.scripts.map(s => path.basename(s)).join('|') === stack)?.file;
    const names = stack.split('|');
    console.log(`Variant ${i + 1} (${sample}, ${names.length} scripts):`);
    console.log('  ', names.join(' → '));
  });
}

const errors = issues.filter(i => i.level === 'error');
const warns = issues.filter(i => i.level === 'warn');
const infos = issues.filter(i => i.level === 'info');

console.log('\n--- Issues summary ---');
console.log(`Errors: ${errors.length}, Warnings: ${warns.length}, Info: ${infos.length}`);
for (const i of [...errors, ...warns].slice(0, 40)) {
  console.log(`[${i.level.toUpperCase()}] ${i.file}: ${i.msg}`);
}
if (errors.length + warns.length > 40) console.log('...');

console.log('\n--- Premium layer coverage ---');
console.log(`premium.css: ${pages.filter(p => p.hasPremiumCss).length}/${pages.length}`);
console.log(`premium.js: ${pages.filter(p => p.hasPremiumJs).length}/${pages.length}`);
