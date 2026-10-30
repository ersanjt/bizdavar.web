/**
 * Rewrite Persian motorcycle titles into natural order and attach
 * a short image gallery to each catalog row.
 */
const fs = require('fs');
const path = require('path');
const { structureFaTitle, descFaForItem } = require('./lib/structure-moto-fa');

const ROOT = path.join(__dirname, '..');
const CATALOG = path.join(ROOT, 'assets/data/auto-moto/catalog.json');
const JSONL = 'C:/Users/ersan/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an-2/work/bizdavar_automoto_import/catalog/products.jsonl';

function localImage(src) {
  const raw = String(src || '').trim();
  if (!raw.startsWith('/media/catalog/automoto/')) return '';
  const mediaRoot = path.join(ROOT, 'media/catalog/automoto');
  if (fs.existsSync(mediaRoot) && !fs.existsSync(path.join(ROOT, raw.replace(/^\//, '')))) return '';
  return raw;
}

function loadGalleries() {
  const map = new Map();
  if (!fs.existsSync(JSONL)) return map;
  fs.readFileSync(JSONL, 'utf8').split(/\r?\n/).filter(Boolean).forEach((line) => {
    let row;
    try { row = JSON.parse(line); } catch (err) { return; }
    const sku = String(row.sku || '').toUpperCase();
    if (!sku) return;
    const seen = new Set();
    const images = [];
    const list = Array.isArray(row.gallery_images) ? row.gallery_images : [];
    if (row.primary_image) list.unshift(row.primary_image);
    list.forEach((src) => {
      const full = localImage(src);
      if (!full || seen.has(full)) return;
      seen.add(full);
      if (images.length < 6) images.push(full);
    });
    if (images.length) map.set(sku, images);
  });
  return map;
}

function featuresOf(item) {
  if (Array.isArray(item.featuresFa) && item.featuresFa.length) return item.featuresFa.slice(0, 4);
  const title = item.titleFa || '';
  const out = [];
  [
    [/محافظ/, 'محافظ‌دار'],
    [/ضدآب|گورتکس/, 'ضدآب'],
    [/گورتکس/, 'گورتکس'],
    [/تابستانه/, 'تابستانه'],
    [/زمستانه|حرارتی/, 'مناسب سرما'],
    [/سه‌فصل|فصلی/, 'چندفصل'],
    [/چرمی/, 'چرمی'],
    [/تمام‌صورت/, 'تمام‌صورت'],
    [/فک‌متحرک/, 'فک‌متحرک'],
    [/زنانه/, 'زنانه'],
    [/کودک/, 'کودک'],
    [/نوجوان/, 'نوجوان'],
    [/کربن/, 'پوسته کربن'],
    [/کوتاه/, 'مدل کوتاه'],
    [/بلند/, 'مدل بلند']
  ].forEach(([re, label]) => {
    if (out.length >= 4 || !re.test(title) || out.indexOf(label) !== -1) return;
    out.push(label);
  });
  if (item.leafFa && out.length < 4 && out.indexOf(item.leafFa) === -1) out.push(item.leafFa);
  return out;
}

const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf8'));
const galleries = loadGalleries();
let titles = 0;
let withGallery = 0;
for (const cat of catalog.categories || []) {
  for (const item of cat.series || []) {
    const next = structureFaTitle(item);
    if (next && next !== item.titleFa) {
      item.titleFa = next;
      titles += 1;
    }
    item.descFa = descFaForItem(item);
    item.featuresFa = featuresOf(item);
    const images = galleries.get(String(item.sku || '').toUpperCase()) || [];
    if (images.length) {
      item.gallery = images;
      if (!item.image) item.image = images[0];
      withGallery += 1;
    }
  }
}

const byId = new Map();
for (const cat of catalog.categories || []) {
  for (const item of cat.series || []) byId.set(item.id, item);
}
for (const highlight of catalog.highlights || []) {
  const item = byId.get(highlight.id);
  if (!item) continue;
  highlight.title = item.titleFa;
  highlight.descFa = item.descFa;
  if (item.image) highlight.image = item.image;
}

catalog.generatedOn = '2026-10-30';
fs.writeFileSync(CATALOG, JSON.stringify(catalog));
console.log('titles rewritten', titles);
console.log('galleries', withGallery, 'of', galleries.size);
