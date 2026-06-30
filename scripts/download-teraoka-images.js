/**
 * Download Teraoka Seiko product images from teraokaseiko.com
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const root = path.join(__dirname, '..');
const base = 'https://www.teraokaseiko.com';

const dirs = [
  'assets/images/teraoka/hero',
  'assets/images/teraoka/products',
  'assets/images/teraoka/categories',
  'assets/images/teraoka/industries'
];
dirs.forEach(d => fs.mkdirSync(path.join(root, d), { recursive: true }));

const assets = [
  { file: 'assets/images/teraoka/hero/teraoka-retail-hero.webp', url: `${base}/common/images/header_retail.webp` },
  { file: 'assets/images/teraoka/products/luxeed-l-retail-scale.png', url: `${base}/jp/products/PRD00127/product_file/file/luxeed-l_WP02_01.png` },
  { file: 'assets/images/teraoka/products/ds-782-service-scale.jpg', url: `${base}/jp/products/search/product_file/file/ds-782_WP01.jpg` },
  { file: 'assets/images/teraoka/products/w5600srx-pos.png', url: `${base}/jp/products/PRD00404/product_file/file/w5600srx_WP02_01.png` },
  { file: 'assets/images/teraoka/products/lx5600-label-printer.jpg', url: `${base}/jp/products/search/product_file/file/lx5600_WP01_01.jpg` },
  { file: 'assets/images/teraoka/products/aw5600-checkout-scale.png', url: `${base}/jp/products/PRD00348/product_file/file/aw5600-2_WP02_01_TRK.png` },
  { file: 'assets/images/teraoka/products/ds-502hd-portable-scale.jpg', url: `${base}/jp/products/search/product_file/file/ds-502_WP01.jpg` },
  { file: 'assets/images/teraoka/products/tcs-205-industrial-scale.png', url: `${base}/jp/products/PRD00177/product_file/file/tcs205wp_WP02_01.png` },
  { file: 'assets/images/teraoka/industries/supermarket-retail.webp', url: `${base}/common/images/header_retail.webp` },
  { file: 'assets/images/teraoka/industries/food-service.webp', url: `${base}/common/images/header_food.webp` },
  { file: 'assets/images/teraoka/industries/logistics-warehouse.webp', url: `${base}/common/images/header_logistics.webp` },
  { file: 'assets/images/teraoka/industries/hospitality.webp', url: `${base}/common/images/header_hospitality.webp` }
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 BizdavarAssetBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        fetchBuffer(next).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

(async () => {
  let ok = 0;
  for (const a of assets) {
    const dest = path.join(root, a.file);
    try {
      const buf = await fetchBuffer(a.url);
      if (buf.length < 800) throw new Error(`too small (${buf.length} B)`);
      fs.writeFileSync(dest, buf);
      console.log('OK', a.file, `(${Math.round(buf.length / 1024)} KB)`);
      ok++;
    } catch (e) {
      console.log('FAIL', a.file, e.message);
    }
  }
  console.log(`Done: ${ok}/${assets.length}`);
})();
