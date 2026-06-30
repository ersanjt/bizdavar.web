/**
 * Download Digi System & Teraoka product images from official sites
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const root = path.join(__dirname, '..');
const dirs = [
  'assets/images/digi-system/hero',
  'assets/images/digi-system/products',
  'assets/images/teraoka/hero',
  'assets/images/teraoka/products'
];
dirs.forEach(d => fs.mkdirSync(path.join(root, d), { recursive: true }));

const assets = [
  {
    file: 'assets/images/digi-system/hero/digi-retail-hero.webp',
    urls: ['https://www.digisystem.com/common/images/header_retail.webp']
  },
  {
    file: 'assets/images/digi-system/products/sm-6000-retail-scale.png',
    urls: ['https://www.digisystem.com/products/PRD00338/product_file/file/sm6000_WP02_02.png']
  },
  {
    file: 'assets/images/digi-system/products/sm-5300-retail-scale.png',
    urls: ['https://www.digisystem.com/products/PRD00310/product_file/file/sm5300_WP02_03.png']
  },
  {
    file: 'assets/images/digi-system/products/w5600srx-pos.png',
    urls: ['https://www.digisystem.com/products/PRD00404/product_file/file/w5600srx_WP02_01.png']
  },
  {
    file: 'assets/images/digi-system/products/lx5600-label-printer.jpg',
    urls: ['https://www.digisystem.com/products/PRD00348/product_file/file/lx5600_WP01_01.jpg']
  },
  {
    file: 'assets/images/digi-system/products/aw5600-checkout-scale.png',
    urls: ['https://www.digisystem.com/products/PRD00348/product_file/file/aw5600-2_WP02_01.png']
  },
  {
    file: 'assets/images/digi-system/products/ds-782-service-scale.jpg',
    urls: ['https://www.teraokaseiko.com/jp/products/search/product_file/file/ds-782_WP01.jpg']
  },
  {
    file: 'assets/images/digi-system/products/webspeezasl-pos.png',
    urls: ['https://www.digisystem.com/products/PRD00327/product_file/file/webspeezasl-t-k_WP02_01.png']
  },
  {
    file: 'assets/images/digi-system/products/delious-wiz-pos.png',
    urls: ['https://www.digisystem.com/products/PRD00333/product_file/file/DeliousWIZ_WP02_01_IMAGEonly.png']
  },
  {
    file: 'assets/images/digi-system/products/happyself-g3.png',
    urls: ['https://www.digisystem.com/products/PRD00405/product_file/file/happyselfg3_WP02_01.png']
  },
  {
    file: 'assets/images/teraoka/hero/teraoka-retail-hero.webp',
    urls: ['https://www.teraokaseiko.com/common/images/header_retail.webp']
  },
  {
    file: 'assets/images/teraoka/products/luxeed-l-retail-scale.png',
    urls: ['https://www.teraokaseiko.com/jp/products/PRD00127/product_file/file/luxeed-l_WP02_01.png']
  },
  {
    file: 'assets/images/teraoka/products/ds-782-service-scale.jpg',
    urls: ['https://www.teraokaseiko.com/jp/products/search/product_file/file/ds-782_WP01.jpg']
  },
  {
    file: 'assets/images/teraoka/products/w5600srx-pos.png',
    urls: ['https://www.teraokaseiko.com/jp/products/PRD00404/product_file/file/w5600srx_WP02_01.png']
  },
  {
    file: 'assets/images/teraoka/products/lx5600-label-printer.jpg',
    urls: ['https://www.teraokaseiko.com/jp/products/search/product_file/file/lx5600_WP01_01.jpg']
  },
  {
    file: 'assets/images/teraoka/products/aw5600-checkout-scale.png',
    urls: ['https://www.teraokaseiko.com/jp/products/PRD00348/product_file/file/aw5600-2_WP02_01_TRK.png']
  },
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 BizdavarAssetBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchBuffer(res.headers.location).then(resolve).catch(reject);
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
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log('SKIP exists', a.file);
      ok++;
      continue;
    }
    for (const url of a.urls) {
      try {
        const buf = await fetchBuffer(url);
        if (buf.length < 1000) continue;
        fs.writeFileSync(dest, buf);
        console.log('OK', a.file, `(${Math.round(buf.length / 1024)} KB)`);
        ok++;
        break;
      } catch (e) {
        console.log('FAIL', url, e.message);
      }
    }
  }
  console.log(`Done: ${ok}/${assets.length}`);
})();
