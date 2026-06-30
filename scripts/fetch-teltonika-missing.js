/**
 * Re-download Teltonika images that failed or got generic placeholder.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE = path.join(__dirname, '../assets/images/teltonika');

const DIRECT = {
  'products/dualcam.jpg': 'https://static.wixstatic.com/media/814ec4_85b6529be9374abcb71ad801f707939b~mv2.jpg',
  'products/fota-web.png': 'https://static.wixstatic.com/media/83e479_15595d5daa0740f281d4e255dc407814~mv2.png',
  'products/tct.png': 'https://static.wixstatic.com/media/83e479_778b530f25654e37b482c6d431dfb0b0~mv2.png',
  'products/data-cables.webp': 'https://static.wixstatic.com/media/c10862_01a196abec744920952d68d275322d8d~mv2.webp',
  'categories/basic.png': 'https://static.wixstatic.com/media/83e479_8c9c609189fd4c0f98b46d9127fd8e36~mv2.png',
  'categories/fast-easy.png': 'https://static.wixstatic.com/media/c10862_63107342c1e64a74bc971c80dd260406~mv2.webp',
  'categories/accessories.webp': 'https://static.wixstatic.com/media/c10862_01a196abec744920952d68d275322d8d~mv2.webp'
};

const PAGE_FETCH = [
  { file: 'products/eye-beacon.png', url: 'https://www.teltonika-gps.com/use-cases/assets-workforce/indoor-asset-tracking-with-eye-beacon' },
  { file: 'products/eye-beacon-mesh.png', url: 'https://www.teltonika-gps.com/use-cases/indoor-tracking/eye-beacon-mesh-solution' },
  { file: 'academy/teltonika-factory.jpg', url: 'https://www.teltonika-gps.com/about-us' },
  { file: 'industries/fleet-telematics.jpg', url: 'https://www.teltonika-gps.com/use-cases/fleet-telematics' },
  { file: 'industries/driver-safety.jpg', url: 'https://www.teltonika-gps.com/use-cases/driver-safety/dualcam-solution' }
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 BizdavarBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location).then(resolve, reject);
      }
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 BizdavarBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        try { fs.unlinkSync(dest); } catch (_) {}
        return downloadFile(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        try { fs.unlinkSync(dest); } catch (_) {}
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', reject);
  });
}

const GENERIC = '43439a_41237ec28c944a9a95bbb6f0afce9c7f';

function pickImage(html) {
  const og = html.match(/property="og:image"\s+content="([^"]+)"/);
  if (og && !og[1].includes(GENERIC)) return og[1].split('/v1/')[0];

  const re = /https:\/\/static\.wixstatic\.com\/media\/[^"\\]+~mv2\.[^"\\]+/g;
  const urls = [...new Set((html.match(re) || []).map(u => u.split('/v1/')[0]))];
  const filtered = urls.filter(u =>
    !u.includes(GENERIC) &&
    !u.includes('43439a_3ffd') &&
    !u.includes('ufonts') &&
    !u.includes('blur_') &&
    (u.includes('.jpg') || u.includes('.png') || u.includes('.webp'))
  );
  filtered.sort((a, b) => b.length - a.length);
  return filtered[0] || null;
}

async function main() {
  for (const [file, url] of Object.entries(DIRECT)) {
    const dest = path.join(BASE, file);
    process.stdout.write(`Direct ${file} ... `);
    try {
      await downloadFile(url, dest);
      console.log(`OK (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
    } catch (e) {
      console.log(`FAIL ${e.message}`);
    }
  }

  for (const job of PAGE_FETCH) {
    const dest = path.join(BASE, job.file);
    process.stdout.write(`Page ${job.file} ... `);
    try {
      const html = await fetchText(job.url);
      const img = pickImage(html);
      if (!img) {
        console.log('SKIP no image');
        continue;
      }
      await downloadFile(img, dest);
      console.log(`OK (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
    } catch (e) {
      console.log(`FAIL ${e.message}`);
    }
  }
}

main();
