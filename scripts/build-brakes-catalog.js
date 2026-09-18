/**
 * Build the Bizdavar brake catalog from public category paths and public
 * product offers. Stores fitment title, maker, code and USD price only.
 * USD = (TRY / 48) * 1.20
 *
 *   node scripts/build-brakes-catalog.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'assets/data/brakes/catalog.json');
const VIDEO_SRC = 'C:/Users/ersan/Desktop/Available-now-Porsche-997-1-GT3RS-2008-Porsche-911-997-1-GT3RS--Carrera-White-ov-01M07XXWSQYR8VT1EYAEEGTSYT.mp4';
const VIDEO_DEST = path.join(ROOT, 'assets/video/porsche-997-gt3rs.mp4');
const ORIGIN = process.env.CATALOG_ORIGIN || '';
const FORCED = ORIGIN + '/urun/bmw-f20-f21-f22-f23-f30-f31-f34-f35-4f32-f33-f36-x3-f25-x4-f26-bm-10-18-magneti-marelli-on-fren-balatasi-323700039100';

const BRANDS = [
  ['bmw', 'BMW', 'bmw-yedek-parca', ['bmw'], 20],
  ['mercedes', 'Mercedes-Benz', 'mercedes-yedek-parca', ['mercedes-benz', 'mercedes'], 12],
  ['opel', 'Opel', 'opel-yedek-parca', ['opel'], 8],
  ['volkswagen', 'Volkswagen', 'volkswagen-yedek-parca', ['volkswagen', 'passat', 'golf', 'polo', 'tiguan', 'touareg', 'scirocco', 'jetta', 'caddy', 'transporter', 'amarok', 'arteon', 'bora'], 10],
  ['audi', 'Audi', 'audi-yedek-parca', ['audi'], 8],
  ['peugeot', 'Peugeot', 'peugeot-yedek-parca', ['peugeot'], 6],
  ['renault', 'Renault', 'renault-yedek-parca', ['renault'], 6],
  ['ford', 'Ford', 'ford-yedek-parca', ['ford'], 6],
  ['citroen', 'Citroën', 'citroen-yedek-parca', ['citroen'], 6],
  ['toyota', 'Toyota', 'toyota-oto-yedek-parca-urunleri', ['toyota'], 6],
  ['land-rover', 'Land Rover', 'land-rover-yedek-parca', ['land-rover', 'range-rover'], 6],
  ['hyundai', 'Hyundai', 'hyundai-oto-yedek-parca-urunleri', ['hyundai'], 6],
  ['kia', 'Kia', 'kia', ['kia'], 6],
  ['honda', 'Honda', 'honda-yedek-parca', ['honda'], 6],
  ['chevrolet', 'Chevrolet', 'chevrolet-yedek-parca', ['chevrolet'], 6],
  ['fiat', 'Fiat', 'fiat-marka-oto-yedek-parca', ['fiat'], 6],
  ['skoda', 'Škoda', 'skoda-yedek-parca', ['skoda', 'octavia', 'superb', 'fabia'], 6],
  ['seat', 'Seat', 'seat-yedek-parca', ['seat', 'leon', 'ibiza'], 6],
  ['nissan', 'Nissan', 'nissan-oto-yedek-parca-urunleri', ['nissan'], 6],
  ['porsche', 'Porsche', 'porsche-yedek-parca', ['porsche'], 8],
  ['mazda', 'Mazda', 'mazda', ['mazda'], 4],
  ['mini', 'Mini', 'mini-cooper-yedek-parca', ['mini-cooper', 'mini'], 6],
  ['dacia', 'Dacia', 'dacia-yedek-parca', ['dacia'], 4],
  ['jeep', 'Jeep', 'jeep', ['jeep'], 4],
  ['mitsubishi', 'Mitsubishi', 'mitsubishi', ['mitsubishi'], 4],
  ['subaru', 'Subaru', 'subaru', ['subaru'], 4],
  ['suzuki', 'Suzuki', 'suzuki', ['suzuki'], 4],
  ['alfa-romeo', 'Alfa Romeo', 'alfa-romeo', ['alfa-romeo'], 4],
  ['jaguar', 'Jaguar', 'jaguar-yedek-parca', ['jaguar'], 4],
  ['lexus', 'Lexus', 'lexus', ['lexus'], 4],
  ['infiniti', 'Infiniti', 'infiniti', ['infiniti'], 4],
  ['cupra', 'Cupra', 'cupra-marka-oto-yedek-parca-urunleri', ['cupra'], 4],
  ['ds', 'DS', 'ds-automobiles', ['ds'], 4],
  ['smart', 'Smart', 'smart-marka-otomobil-yedek-parcalari', ['smart'], 4],
  ['tesla', 'Tesla', 'tesla-yedek-parca', ['tesla'], 4],
  ['volvo', 'Volvo', 'volvo-yedek-parca', ['volvo'], 6],
  ['byd', 'BYD', 'byd', ['byd'], 4],
  ['aston-martin', 'Aston Martin', 'aston-martin', ['aston-martin'], 2],
  ['maserati', 'Maserati', 'maserati', ['maserati'], 2],
  ['ssangyong', 'SsangYong', 'ssangyong', ['ssangyong'], 4],
  ['isuzu', 'Isuzu', 'isuzu-yedek-parca', ['isuzu'], 4],
  ['ferrari', 'Ferrari', 'ferrari', ['ferrari'], 2]
];

const KEYS = [];
for (const b of BRANDS) {
  for (const key of b[3]) KEYS.push({ id: b[0], key: key });
}
KEYS.sort((a, b) => b.key.length - a.key.length);

const STOP = new Set(['yedek', 'parca', 'parcalari', 'fren', 'balata', 'balatasi', 'disk', 'diski', 'diski', 've', 'oto', 'marka', 'urunleri', 'serisi', 'seri', 'yeni', 'model', 'kasa', 'icin', 'and', 'the']);

function detectBrand(slug) {
  const s = String(slug || '').toLowerCase();
  for (const k of KEYS) {
    if (s === k.key || s.startsWith(k.key + '-')) return k.id;
  }
  return '';
}

function partOf(slug, title) {
  const s = (slug + ' ' + title).toLowerCase();
  if (/fren-siv|fren siv|brake-fluid|dot-?4|sivi/.test(s)) return 'fluids';
  if (/(performans|stoptech|slotted|big-brake|fren-kiti|brake-kit)/.test(s)) return 'performance';
  if (/balata|brake-pad|\bpad\b/.test(s)) return 'pads';
  if (/disk|rotor/.test(s)) return 'discs';
  if (/fren|brake/.test(s)) return 'pads';
  return '';
}

function toUsd(tryPrice) {
  const n = Number(tryPrice);
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.round((n / 48) * 1.2 * 100) / 100;
}

function pretty(seg) {
  return String(seg || '')
    .replace(/-yedek-parca.*$/i, '')
    .replace(/-oto-yedek.*$/i, '')
    .replace(/-fren-balata.*$/i, '')
    .replace(/-fren-disk.*$/i, '')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b[a-z0-9]/g, (c) => c.toUpperCase());
}

function tokensOf(slug, name) {
  const raw = (slug + ' ' + name).toLowerCase();
  const parts = raw.split(/[^a-z0-9]+/).filter((t) => {
    if (STOP.has(t)) return false;
    if (t.length >= 3) return true;
    if (/^[a-z]\d$/.test(t) || /^\d[a-z]$/.test(t)) return true;
    if (/^[a-z]\d{2}$/.test(t) || /^\d{2,3}$/.test(t)) return true;
    return false;
  });
  return [...new Set(parts)].slice(0, 8);
}

async function getText(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 90000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'Mozilla/5.0', accept: 'text/html,application/xml' }
    });
    if (!res.ok) throw new Error(res.status + ' ' + url);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

async function loadXml(cacheName, url) {
  const cached = path.join(process.env.TEMP || process.env.TMP || '.', cacheName);
  if (fs.existsSync(cached) && fs.statSync(cached).size > 500) {
    console.log('cache', cacheName);
    return fs.readFileSync(cached, 'utf8');
  }
  const text = await getText(url);
  try { fs.writeFileSync(cached, text); } catch (_) {}
  return text;
}

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const i = cursor++;
      try {
        out[i] = await fn(items[i], i);
      } catch (err) {
        out[i] = null;
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return out;
}

function parseOffer(html, slug) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const raw of blocks) {
    let data;
    try { data = JSON.parse(raw); } catch (_) { continue; }
    const list = Array.isArray(data) ? data : [data];
    for (const node of list) {
      if (!node || node['@type'] !== 'Product' || !node.offers) continue;
      const offer = Array.isArray(node.offers) ? node.offers[0] : node.offers;
      const priceTry = Number(offer && offer.price);
      const priceUsd = toUsd(priceTry);
      if (priceUsd == null) continue;
      const title = String(node.name || '').replace(/\s+/g, ' ').trim().slice(0, 180);
      const part = partOf(slug, title);
      if (!part) continue;
      const brand = detectBrand(slug);
      if (!brand) continue;
      return {
        id: slug,
        title: title,
        brand: brand,
        maker: String((node.brand && node.brand.name) || '').slice(0, 80),
        mpn: String(node.mpn || '').slice(0, 40),
        sku: String(node.sku || '').slice(0, 40),
        part: part,
        priceTry: Math.round(priceTry * 100) / 100,
        priceUsd: priceUsd,
        stock: String(offer.availability || '').includes('InStock')
      };
    }
  }
  return null;
}

async function main() {
  if (fs.existsSync(VIDEO_SRC)) {
    fs.mkdirSync(path.dirname(VIDEO_DEST), { recursive: true });
    if (!fs.existsSync(VIDEO_DEST)) fs.copyFileSync(VIDEO_SRC, VIDEO_DEST);
    console.log('video', VIDEO_DEST);
  }

  console.log('categories');
  if (!ORIGIN) throw new Error('Set CATALOG_ORIGIN');
  const catXml = await loadXml('fren-cats.xml', ORIGIN + '/sitemaps/categories.xml');
  const catLocs = locs(catXml);
  const brands = BRANDS.map(([id, name, slug, , cap]) => {
    const prefix = ORIGIN + '/kategori/' + slug + '/';
    const seen = new Set();
    const models = [];
    for (const loc of catLocs) {
      if (!loc.startsWith(prefix)) continue;
      const seg = loc.slice(prefix.length).split('/')[0];
      if (!seg || seen.has(seg)) continue;
      if (/fren-balata|fren-disk|fren-sistem/.test(seg)) continue;
      seen.add(seg);
      const label = pretty(seg);
      if (label.length < 2) continue;
      models.push({ id: seg, name: label, tokens: tokensOf(seg, label) });
      if (models.length >= 36) break;
    }
    return { id, name, slug, cap, models };
  });

  console.log('sitemaps');
  const productUrls = [];
  for (const file of ['products-tr-1.xml', 'products-tr-2.xml', 'products-tr-3.xml']) {
    const xml = await loadXml('fren-' + file, ORIGIN + '/sitemaps/' + file);
    productUrls.push(...locs(xml).filter((u) => u.includes('/urun/')));
    console.log(file, productUrls.length);
  }

  const capOf = Object.fromEntries(brands.map((b) => [b.id, b.cap]));
  const picked = new Map();
  function consider(url) {
    const slug = decodeURIComponent(url.split('/urun/')[1] || '').split('?')[0];
    if (!slug || picked.has(slug)) return;
    const brand = detectBrand(slug);
    if (!brand) return;
    const part = partOf(slug, slug);
    if (!part) return;
    const have = [...picked.values()].filter((p) => p.brand === brand).length;
    if (have >= (capOf[brand] || 4)) return;
    picked.set(slug, { slug, brand, url });
  }
  consider(FORCED);
  for (const url of productUrls) consider(url);
  const queue = [...picked.values()];
  console.log('fetch', queue.length);

  let done = 0;
  const products = (await mapPool(queue, 5, async (row) => {
    const html = await getText(row.url);
    const item = parseOffer(html, row.slug);
    done += 1;
    if (done % 25 === 0) console.log('priced', done, '/', queue.length);
    return item;
  })).filter(Boolean);

  products.sort((a, b) => Number(b.stock) - Number(a.stock) || a.title.localeCompare(b.title));
  const catalog = {
    fx: { tryPerUsd: 48, markup: 1.2 },
    video: '/assets/video/porsche-997-gt3rs.mp4',
    brands: brands.map(({ cap, ...rest }) => rest),
    products
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(catalog));
  console.log('wrote', products.length, 'products', Math.round(fs.statSync(OUT).size / 1024) + 'KB');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
