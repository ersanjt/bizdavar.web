/**
 * Google Search Console Search Analytics via a service account — no npm dependencies.
 *
 * Credentials (first match wins):
 *   GSC_SERVICE_ACCOUNT_JSON  raw JSON or base64 of the key file (cloud agent secret)
 *   GSC_KEY_FILE              path to the key file (local runs; keep it out of git)
 *   .secrets/gsc-service-account.json
 * Property: GSC_SITE (default sc-domain:bizdavar.com, then https://bizdavar.com/).
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { ROOT } = require('./site-scan');

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

function loadKey() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (raw) {
    const text = raw.trim().startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8');
    return JSON.parse(text);
  }
  const file = process.env.GSC_KEY_FILE || path.join(ROOT, '.secrets', 'gsc-service-account.json');
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  return null;
}

function b64url(input) {
  return Buffer.from(input).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function accessToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: key.client_email, scope: SCOPE, aud: key.token_uri || 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const jwt = `${header}.${claim}.${b64url(signer.sign(key.private_key))}`;
  const res = await fetch(key.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`GSC token: ${json.error_description || json.error || res.status}`);
  return json.access_token;
}

async function query(token, site, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) {
    const err = new Error(`GSC query ${site}: ${json.error?.message || res.status}`);
    err.status = res.status;
    throw err;
  }
  return json.rows || [];
}

function isoDay(d) {
  return d.toISOString().slice(0, 10);
}

/** GSC data lags ~2–3 days; windows end 3 days ago so totals are not undercounted. */
function windows() {
  const end = new Date(Date.now() - 3 * 86400000);
  const start = new Date(end.getTime() - 27 * 86400000);
  const prevEnd = new Date(start.getTime() - 86400000);
  const prevStart = new Date(prevEnd.getTime() - 27 * 86400000);
  return { current: [isoDay(start), isoDay(end)], previous: [isoDay(prevStart), isoDay(prevEnd)] };
}

function totals(rows) {
  const t = rows.reduce((a, r) => ({ clicks: a.clicks + r.clicks, impressions: a.impressions + r.impressions, posSum: a.posSum + r.position * r.impressions }), { clicks: 0, impressions: 0, posSum: 0 });
  return {
    clicks: t.clicks,
    impressions: t.impressions,
    ctr: t.impressions ? +(100 * t.clicks / t.impressions).toFixed(2) : 0,
    position: t.impressions ? +(t.posSum / t.impressions).toFixed(1) : null,
  };
}

function round(r, keys) {
  const o = {};
  keys.forEach((k, i) => { o[k] = r.keys[i]; });
  return { ...o, clicks: r.clicks, impressions: r.impressions, ctr: +(100 * r.ctr).toFixed(2), position: +r.position.toFixed(1) };
}

async function fetchGsc() {
  const key = loadKey();
  if (!key) return { available: false, reason: 'no service-account credentials (see docs/growth/GSC-SETUP.md)' };
  const token = await accessToken(key);
  const candidates = process.env.GSC_SITE ? [process.env.GSC_SITE] : ['sc-domain:bizdavar.com', 'https://bizdavar.com/'];
  const w = windows();
  let site = null;
  let lastErr = null;
  let daily = [];
  for (const s of candidates) {
    try {
      daily = await query(token, s, { startDate: w.current[0], endDate: w.current[1], dimensions: ['date'], rowLimit: 100 });
      site = s;
      break;
    } catch (e) { lastErr = e; }
  }
  if (!site) return { available: false, reason: `${lastErr?.message} — add ${key.client_email} as a user on the property` };

  const run = (range, dimensions, rowLimit = 1000) =>
    query(token, site, { startDate: range[0], endDate: range[1], dimensions, rowLimit, dataState: 'final' });
  const [prevDaily, pages, queries, pageQueries, countries] = await Promise.all([
    run(w.previous, ['date'], 100),
    run(w.current, ['page']),
    run(w.current, ['query']),
    run(w.current, ['page', 'query'], 5000),
    run(w.current, ['country'], 50),
  ]);

  const pageRows = pages.map(r => round(r, ['page']));
  const queryRows = queries.map(r => round(r, ['query']));
  const pqRows = pageQueries.map(r => round(r, ['page', 'query']));

  /* Striking distance: Google already ranks the page on page 1–2; better title/content can move it into clicks. */
  const striking = pqRows
    .filter(r => r.position >= 4 && r.position <= 20 && r.impressions >= 15)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);
  /* Snippet problems: seen often, rarely clicked, for its position. */
  const lowCtr = pageRows
    .filter(r => r.impressions >= 40 && r.ctr < (r.position <= 10 ? 3 : 1))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20);

  return {
    available: true,
    site,
    windows: w,
    current: totals(daily),
    previous: totals(prevDaily),
    topPages: pageRows.sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions).slice(0, 25),
    topQueries: queryRows.sort((a, b) => b.impressions - a.impressions).slice(0, 40),
    countries: countries.map(r => round(r, ['country'])).sort((a, b) => b.clicks - a.clicks).slice(0, 10),
    knownUrls: pageRows.sort((a, b) => b.impressions - a.impressions).slice(0, 300).map(r => r.page),
    striking,
    lowCtr,
  };
}

module.exports = { fetchGsc };
