#!/usr/bin/env node
/**
 * Read public Motomax product facts for SKUs we already sell.
 * Stores feature lines only. No prices, discounts, reviews, or page URLs.
 */
const fs = require('fs');
const path = require('path');

const JSONL = 'C:/Users/ersan/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an-2/work/bizdavar_automoto_import/catalog/products.jsonl';
const OUT = path.join(__dirname, '..', 'work', 'automoto-facts.json');
const CONCURRENCY = 4;
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg === -1 ? 0 : Number(process.argv[limitArg + 1] || 0);

function strip(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function okLine(line) {
  if (!line || line.length < 3 || line.length > 180) return false;
  if (/https?:|www\.|motomax|\bTL\b|₺|indirim|havale|sepete|youtube|yorum|benzer ürün|son incelenen/i.test(line)) return false;
  return true;
}

function unique(list) {
  const seen = new Set();
  return list.filter((line) => {
    const key = line.toLocaleLowerCase('tr');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extract(html) {
  const start = html.search(/class="product-fullbody"/);
  if (start < 0) return { features: [], badges: [] };
  const chunk = html.slice(start, start + 24000);
  const stop = chunk.search(/class="[^"]*(?:related-product|product-comment|comment-module)/i);
  const body = stop > 400 ? chunk.slice(0, stop) : chunk;
  const features = unique([...body.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => strip(m[1])).filter(okLine)).slice(0, 20);
  const badges = unique([...body.matchAll(/<strong>([\s\S]*?)<\/strong>/gi)].map((m) => strip(m[1])).filter((line) => okLine(line) && line.length <= 60)).slice(0, 6);
  return { features, badges };
}

function loadRows() {
  const byUrl = new Map();
  fs.readFileSync(JSONL, 'utf8').split(/\r?\n/).filter(Boolean).forEach((line) => {
    const row = JSON.parse(line);
    const url = String(row.price_source_url || '').trim();
    if (!url || !row.sku) return;
    if (!byUrl.has(url)) byUrl.set(url, []);
    byUrl.get(url).push(String(row.sku).toUpperCase());
  });
  return byUrl;
}

function readOut() {
  if (!fs.existsSync(OUT)) return { bySku: {} };
  return JSON.parse(fs.readFileSync(OUT, 'utf8'));
}

function writeOut(data) {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data));
}

async function fetchOne(url) {
  const res = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 BizdavarCatalog', 'accept-language': 'tr' },
    signal: AbortSignal.timeout(20000)
  });
  if (!res.ok) throw new Error(String(res.status));
  return extract(await res.text());
}

async function main() {
  const byUrl = loadRows();
  const data = readOut();
  const done = new Set(Object.keys(data.bySku || {}));
  let jobs = [...byUrl.entries()].filter(([, skus]) => skus.some((sku) => !done.has(sku)));
  if (LIMIT) jobs = jobs.slice(0, LIMIT);
  console.log('jobs', jobs.length, 'already', done.size);
  let cursor = 0;
  let ok = 0;
  let fail = 0;

  async function worker() {
    while (cursor < jobs.length) {
      const index = cursor;
      cursor += 1;
      const [url, skus] = jobs[index];
      try {
        const facts = await fetchOne(url);
        skus.forEach((sku) => {
          data.bySku[sku] = facts;
        });
        ok += 1;
      } catch (err) {
        fail += 1;
        if (fail < 8) console.log('fail', err.message);
      }
      if ((ok + fail) % 25 === 0) {
        writeOut(data);
        console.log('saved', ok, 'fail', fail, 'of', jobs.length);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  writeOut(data);
  const withFeatures = Object.values(data.bySku).filter((row) => row.features && row.features.length).length;
  console.log('done ok', ok, 'fail', fail, 'skus', Object.keys(data.bySku).length, 'withFeatures', withFeatures);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
