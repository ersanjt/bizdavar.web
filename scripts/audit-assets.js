/**
 * List image paths referenced in JS/HTML vs files on disk.
 * Run: node scripts/audit-assets.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SCAN_ROOTS = [
  path.join(ROOT, 'assets', 'scripts'),
  path.join(ROOT, 'index.html'),
  path.join(ROOT, 'pages')
];

const IMG_RE = /assets\/images\/[a-zA-Z0-9_./-]+\.(?:png|jpe?g|webp|svg|gif)/gi;

function collectFiles(target, acc = []) {
  if (!fs.existsSync(target)) return acc;
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    if (/\.(js|html)$/i.test(target)) acc.push(target);
    return acc;
  }
  for (const name of fs.readdirSync(target)) {
    collectFiles(path.join(target, name), acc);
  }
  return acc;
}

function normalize(p) {
  return p.replace(/\\/g, '/').replace(/^\//, '');
}

function extractImages(text) {
  IMG_RE.lastIndex = 0;
  const found = [];
  let m;
  while ((m = IMG_RE.exec(text)) !== null) found.push(normalize(m[0]));
  return found;
}

const referenced = new Set();
for (const root of SCAN_ROOTS) {
  for (const file of collectFiles(root)) {
    extractImages(fs.readFileSync(file, 'utf8')).forEach(p => referenced.add(p));
  }
}

const imagesRoot = path.join(ROOT, 'assets', 'images');
const onDisk = new Set();
function collectImages(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) collectImages(full);
    else if (/\.(png|jpe?g|webp|svg|gif)$/i.test(name)) {
      onDisk.add(normalize(path.relative(ROOT, full)));
    }
  }
}
collectImages(imagesRoot);

const missing = [...referenced].filter(p => !onDisk.has(p)).sort();
const partnerRefs = [...referenced].filter(p => p.includes('/partners/'));
const partnerDisk = [...onDisk].filter(p => p.includes('/partners/'));
const missingPartners = partnerRefs.filter(p => !onDisk.has(p)).sort();
const unreferencedPartners = partnerDisk.filter(p => !partnerRefs.includes(p)).sort();

function groupByFolder(items) {
  const groups = {};
  for (const p of items) {
    const parts = p.split('/');
    const key = parts.slice(0, 3).join('/');
    (groups[key] ||= []).push(p);
  }
  return groups;
}

const lines = [
  '# Missing assets audit',
  '',
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  '',
  'Refresh: `node scripts/audit-assets.js`',
  '',
  '## Summary',
  '',
  `| Metric | Count |`,
  `|--------|------:|`,
  `| Image paths referenced in code | ${referenced.size} |`,
  `| Image files on disk | ${onDisk.size} |`,
  `| **Missing (all)** | **${missing.length}** |`,
  `| Missing partner logos | ${missingPartners.length} |`,
  `| Partner files on disk, unused in code | ${unreferencedPartners.length} |`,
  ''
];

function appendSection(title, items) {
  lines.push(`## ${title}`, '');
  if (!items.length) {
    lines.push('_None._', '');
    return;
  }
  for (const [dir, list] of Object.entries(groupByFolder(items)).sort()) {
    lines.push(`### ${dir}/`, '');
    for (const p of list) lines.push(`- \`${p}\``);
    lines.push('');
  }
}

appendSection('Missing — referenced in code but not on disk', missing);
appendSection('Missing partner logos only', missingPartners);
appendSection('Partner logos on disk but not referenced', unreferencedPartners);

const outPath = path.join(ROOT, 'docs', 'MISSING-ASSETS.md');
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log('Wrote', path.relative(ROOT, outPath));
console.log('Referenced:', referenced.size, '| Missing:', missing.length, '| Missing partners:', missingPartners.length);
