/**
 * Download Digi System product images from digisystem.com (official DIGI retail catalog)
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const root = path.join(__dirname, '..');
const base = 'https://www.digisystem.com';

const dirs = [
  'assets/images/digi-system/hero',
  'assets/images/digi-system/products',
  'assets/images/digi-system/industries'
];
dirs.forEach(d => fs.mkdirSync(path.join(root, d), { recursive: true }));

const assets = [
  { file: 'assets/images/digi-system/hero/digi-retail-hero.webp', url: `${base}/common/images/header_retail.webp` },
  { file: 'assets/images/digi-system/products/sm-6000-retail-scale.png', url: `${base}/products/PRD00338/product_file/file/sm6000_WP02_02.png` },
  { file: 'assets/images/digi-system/products/sm-5300-retail-scale.png', url: `${base}/products/PRD00310/product_file/file/sm5300_WP02_03.png` },
  { file: 'assets/images/digi-system/products/w5600srx-pos.png', url: `${base}/products/PRD00404/product_file/file/w5600srx_WP02_01.png` },
  { file: 'assets/images/digi-system/products/lx5600-label-printer.jpg', url: `${base}/products/PRD00348/product_file/file/lx5600_WP01_01.jpg` },
  { file: 'assets/images/digi-system/products/aw5600-checkout-scale.png', url: `${base}/products/PRD00348/product_file/file/aw5600-2_WP02_01.png` },
  { file: 'assets/images/digi-system/products/ds-782-service-scale.jpg', url: 'https://www.teraokaseiko.com/jp/products/search/product_file/file/ds-782_WP01.jpg' },
  { file: 'assets/images/digi-system/products/webspeezasl-pos.png', url: `${base}/products/PRD00327/product_file/file/webspeezasl-t-k_WP02_01.png` },
  { file: 'assets/images/digi-system/products/delious-wiz-pos.png', url: `${base}/products/PRD00333/product_file/file/DeliousWIZ_WP02_01_IMAGEonly.png` },
  { file: 'assets/images/digi-system/products/happyself-g3.png', url: `${base}/products/PRD00405/product_file/file/happyselfg3_WP02_01.png` },
  { file: 'assets/images/digi-system/industries/supermarket-retail.webp', url: `${base}/common/images/header_retail.webp` },
  { file: 'assets/images/digi-system/industries/food-service.webp', url: `${base}/common/images/header_food.webp` },
  { file: 'assets/images/digi-system/industries/logistics-warehouse.webp', url: `${base}/common/images/header_logistics.webp` },
  { file: 'assets/images/digi-system/industries/hospitality.webp', url: `${base}/common/images/header_hospitality.webp` }
];

function fetchBuffer(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 BizdavarAssetBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 6) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        fetchBuffer(next, redirects + 1).then(resolve).catch(reject);
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
