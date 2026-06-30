/**
 * Download Teltonika product images from official site (og:image).
 * Run: node scripts/download-teltonika-images.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const BASE = path.join(ROOT, 'assets/images/teltonika');

const JOBS = [
  { file: 'hero/fleet-telematics.jpg', url: 'https://www.teltonika-gps.com/' },
  { file: 'products/fmb920.png', url: 'https://www.teltonika-gps.com/products/trackers/basic/fmb920' },
  { file: 'products/ftc305.png', url: 'https://www.teltonika-gps.com/products/trackers/e-mobility/ftc305' },
  { file: 'products/fmc650.png', url: 'https://www.teltonika-gps.com/products/trackers/professional/fmc650' },
  { file: 'products/fmb001.png', url: 'https://www.teltonika-gps.com/products/trackers/obd-data/fmb001' },
  { file: 'products/fmc230.png', url: 'https://www.teltonika-gps.com/products/trackers/advanced/fmc230' },
  { file: 'products/fmb010.png', url: 'https://www.teltonika-gps.com/products/trackers/fast-easy/fmb010' },
  { file: 'products/fmc150.png', url: 'https://www.teltonika-gps.com/products/trackers/can-data/fmc150' },
  { file: 'products/tat100.png', url: 'https://www.teltonika-gps.com/products/trackers/assets-workforce/tat100' },
  { file: 'products/eye-beacon.png', url: 'https://www.teltonika-gps.com/products/sensors-beacons/eye-beacon' },
  { file: 'products/dualcam.png', url: 'https://www.teltonika-gps.com/products/video-telematics/dualcam' },
  { file: 'products/tct.png', url: 'https://www.teltonika-gps.com/products/solutions/telematics-configuration-tool' },
  { file: 'products/fmc920.png', url: 'https://www.teltonika-gps.com/products/trackers/basic/fmc920' },
  { file: 'products/fmb225.png', url: 'https://www.teltonika-gps.com/products/trackers/professional/fmb225' },
  { file: 'products/fmc250.png', url: 'https://www.teltonika-gps.com/products/trackers/can-data/fmc250' },
  { file: 'products/fota-web.png', url: 'https://www.teltonika-gps.com/products/solutions/fota-web' },
  { file: 'products/data-cables.png', url: 'https://www.teltonika-gps.com/products/accessories/data-cables' },
  { file: 'products/eye-beacon-mesh.png', url: 'https://www.teltonika-gps.com/products/sensors-beacons/eye-beacon-mesh' },
  { file: 'academy/teltonika-factory.jpg', url: 'https://www.teltonika-gps.com/about-us' }
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

function extractOgImage(html) {
  const m = html.match(/property="og:image"\s+content="([^"]+)"/);
  return m ? m[1] : null;
}

function toHighRes(url) {
  if (!url) return url;
  const base = url.split('/v1/')[0];
  if (base.includes('~mv2.')) return base;
  return url.replace(/\/v1\/fill\/[^/]+\/[^"]*/, '');
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 BizdavarBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', err => {
      file.close();
      try { fs.unlinkSync(dest); } catch (_) {}
      reject(err);
    });
  });
}

async function main() {
  const results = {};
  for (const job of JOBS) {
    const dest = path.join(BASE, job.file);
    try {
      process.stdout.write(`Fetching ${job.file} ... `);
      const html = await fetchText(job.url);
      const og = extractOgImage(html);
      if (!og) {
        console.log('SKIP (no og:image)');
        results[job.file] = { ok: false, error: 'no og:image' };
        continue;
      }
      const imgUrl = toHighRes(og);
      await downloadFile(imgUrl, dest);
      const stat = fs.statSync(dest);
      console.log(`OK (${Math.round(stat.size / 1024)} KB)`);
      results[job.file] = { ok: true, url: imgUrl, bytes: stat.size };
    } catch (e) {
      console.log(`FAIL: ${e.message}`);
      results[job.file] = { ok: false, error: e.message };
    }
  }
  fs.writeFileSync(path.join(BASE, 'download-manifest.json'), JSON.stringify(results, null, 2));
  const ok = Object.values(results).filter(r => r.ok).length;
  console.log(`\nDone: ${ok}/${JOBS.length} images downloaded.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
