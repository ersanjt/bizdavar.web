/**
 * HTTP status check of live URLs. Rotates through the sitemaps so every URL is probed
 * every few weeks without hammering the origin (5xx in Search Console = crawl budget loss).
 */
const { sitemapUrls } = require('./site-scan');

/* Contains "bot" so the geo-language 302 in .htaccess is skipped, like for Googlebot. */
const UA = 'Mozilla/5.0 (compatible; BizdavarGrowthBot/1.0; +https://bizdavar.com/)';

async function probe(url) {
  const started = Date.now();
  try {
    const res = await fetch(url, { method: 'GET', redirect: 'manual', headers: { 'user-agent': UA }, signal: AbortSignal.timeout(20000) });
    return { url, status: res.status, location: res.headers.get('location') || undefined, ms: Date.now() - started };
  } catch (e) {
    return { url, status: 0, error: e.name === 'TimeoutError' ? 'timeout' : e.message, ms: Date.now() - started };
  }
}

async function pool(items, size, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx]);
    }
  }));
  return out;
}

async function liveCheck({ sample = 400, extra = [] } = {}) {
  const core = sitemapUrls('sitemap.xml');
  const moto = sitemapUrls('sitemap-motorcycle.xml');
  const day = Math.floor(Date.now() / 86400000);
  const motoSlice = [];
  if (moto.length) {
    const size = Math.max(0, sample - core.length);
    const start = (day * size) % moto.length;
    for (let k = 0; k < size && k < moto.length; k++) motoSlice.push(moto[(start + k) % moto.length]);
  }
  const urls = [...new Set([...core, ...motoSlice, ...extra])];
  const results = await pool(urls, 6, probe);
  const bad = results.filter(r => r.status !== 200);
  const slow = results.filter(r => r.status === 200 && r.ms > 3000).sort((a, b) => b.ms - a.ms).slice(0, 15);
  return {
    checked: results.length,
    ok: results.length - bad.length,
    byStatus: results.reduce((a, r) => ((a[r.status] = (a[r.status] || 0) + 1), a), {}),
    bad,
    slow,
  };
}

module.exports = { liveCheck, probe };
