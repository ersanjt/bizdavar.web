/**
 * Shared names for motorcycle gallery shots.
 * Size-chart files were confirmed by looking at the picture: they are
 * measurement diagrams reused across many different products.
 */
const SIZE_CHARTS = new Set([
  '/media/catalog/automoto/assets/d3/bdv-am-d34289eebaea6a785dee.jpg',
  '/media/catalog/automoto/assets/0e/bdv-am-0e38aa6d1801a63125dc.jpg',
  '/media/catalog/automoto/assets/39/bdv-am-39fde47ebb9e4ef73e4f.jpg',
  '/media/catalog/automoto/assets/05/bdv-am-05bd63f99e056c0bf9b6.jpg',
  '/media/catalog/automoto/assets/99/bdv-am-99836f6099c2055200e1.jpg',
  '/media/catalog/automoto/assets/0e/bdv-am-0e9e8e40de1221161913.jpg',
  '/media/catalog/automoto/assets/64/bdv-am-64f4f8e9cc6659117f8f.jpg',
  '/media/catalog/automoto/assets/fb/bdv-am-fb246416b563114eb5a2.jpg',
  '/media/catalog/automoto/assets/e3/bdv-am-e3789d538dc0c87a1363.jpg',
  '/media/catalog/automoto/assets/e5/bdv-am-e549c6fa781e858d0196.jpg',
  '/media/catalog/automoto/assets/c5/bdv-am-c56843f5294d6024550c.jpg'
]);

const IMAGE_GEO = 'Tabriz, Iran';

function withoutSizeCharts(images) {
  const list = (images || []).filter((src) => src && !SIZE_CHARTS.has(src));
  return list.length ? list : (images || []).filter(Boolean).slice(0, 1);
}

function shotName(code, title, index) {
  const name = String(title || '').replace(/\s+/g, ' ').trim();
  if (!name || !index) return name;
  const word = { fa: 'تصویر', tr: 'görsel', en: 'image', ru: 'изображение', ar: 'الصورة' }[code] || 'image';
  return `${name} — ${word} ${index + 1}`;
}

module.exports = { SIZE_CHARTS, IMAGE_GEO, withoutSizeCharts, shotName };
