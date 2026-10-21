#!/usr/bin/env node
/**
 * Daily growth run for bizdavar.com — the entry point the scheduled agent uses.
 *
 *   node scripts/growth/daily.js                 scan + live HTTP check + Search Console → report + next task
 *   node scripts/growth/daily.js --no-live       skip the live HTTP probe
 *   node scripts/growth/daily.js --check         publish gate: fail if any error class grew vs the baseline
 *   node scripts/growth/daily.js --update-baseline  accept current error counts as the new baseline
 *
 * Writes docs/growth/reports/<date>.md, docs/growth/latest.json and appends docs/growth/kpi.csv.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { scanSite, ROOT } = require('./lib/site-scan');
const { liveCheck } = require('./lib/live-check');
const { fetchGsc } = require('./lib/gsc');

const GROWTH_DIR = path.join(ROOT, 'docs', 'growth');
const PLAN = path.join(ROOT, 'docs', 'GROWTH-PLAN.md');
const BASELINE = path.join(GROWTH_DIR, 'baseline.json');
const args = new Set(process.argv.slice(2));
const today = new Date().toISOString().slice(0, 10);

function errorCounts(scan) {
  const out = {};
  for (const i of scan.issues) if (i.level === 'error') out[i.code] = (out[i.code] || 0) + 1;
  return out;
}

function runLegacyAudit() {
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'site-audit.js')], { cwd: ROOT, encoding: 'utf8' });
  const m = (r.stdout || '').match(/Audit: (\d+) errors, (\d+) warnings/);
  return { errors: m ? +m[1] : null, warnings: m ? +m[2] : null };
}

function check() {
  const scan = scanSite();
  const legacy = runLegacyAudit();
  const now = { ...errorCounts(scan), 'legacy-audit': legacy.errors || 0 };
  if (!fs.existsSync(BASELINE)) {
    console.error('No baseline yet — run with --update-baseline once on a known-good tree.');
    process.exit(1);
  }
  const base = JSON.parse(fs.readFileSync(BASELINE, 'utf8')).errors;
  const regressions = Object.entries(now).filter(([code, n]) => n > (base[code] || 0));
  console.log(`Growth check: ${scan.errors} SEO errors, legacy audit ${legacy.errors} errors, ${scan.pages} pages`);
  for (const [code, n] of Object.entries(now)) console.log(`  ${code}: ${n} (baseline ${base[code] || 0})`);
  if (regressions.length) {
    console.error(`\nFAIL — regressions: ${regressions.map(([c, n]) => `${c} ${base[c] || 0}→${n}`).join(', ')}`);
    const sample = scan.issues.filter(i => i.level === 'error' && regressions.some(([c]) => c === i.code)).slice(0, 20);
    for (const i of sample) console.error(`  [${i.code}] ${i.rel}: ${i.msg}`);
    process.exit(1);
  }
  const improved = Object.entries(base).filter(([code, n]) => (now[code] || 0) < n);
  if (improved.length) console.log(`\nImproved: ${improved.map(([c, n]) => `${c} ${n}→${now[c] || 0}`).join(', ')} — run --update-baseline to lock it in.`);
  console.log('\nPASS — safe to publish.');
}

function updateBaseline() {
  const scan = scanSite();
  const legacy = runLegacyAudit();
  fs.mkdirSync(GROWTH_DIR, { recursive: true });
  const data = { updated: today, errors: { ...errorCounts(scan), 'legacy-audit': legacy.errors || 0 }, warnings: scan.warnings };
  fs.writeFileSync(BASELINE, JSON.stringify(data, null, 2) + '\n');
  console.log(`Baseline written: ${JSON.stringify(data.errors)}`);
}

/** Open backlog items in plan order: `- [ ] **P1-03** title`. */
function openTasks() {
  if (!fs.existsSync(PLAN)) return [];
  return fs.readFileSync(PLAN, 'utf8').split(/\r?\n/)
    .map(l => l.match(/^\s*- \[ \] \*\*(P\d-\d+)\*\*\s*(.+)$/))
    .filter(Boolean)
    .map(m => ({ id: m[1], title: m[2].trim() }));
}

function pct(a, b) {
  if (!b) return a ? '+∞' : '0%';
  const d = (100 * (a - b)) / b;
  return `${d >= 0 ? '+' : ''}${d.toFixed(0)}%`;
}

function table(rows, cols) {
  if (!rows.length) return '_none_\n';
  const head = `| ${cols.map(c => c[0]).join(' | ')} |\n| ${cols.map(() => '---').join(' | ')} |\n`;
  return head + rows.map(r => `| ${cols.map(c => String(c[1](r)).replace(/\|/g, '\\|')).join(' | ')} |`).join('\n') + '\n';
}

function shortUrl(u) {
  return u.replace('https://bizdavar.com', '') || '/';
}

function report(scan, live, gsc, tasks) {
  const L = [];
  L.push(`# Growth report — ${today}`, '');
  L.push('## Search Console (last 28 days vs previous 28)', '');
  if (gsc.available) {
    const c = gsc.current, p = gsc.previous;
    L.push(`Property \`${gsc.site}\`, ${gsc.windows.current[0]} → ${gsc.windows.current[1]}`, '');
    L.push(table([
      ['Clicks', c.clicks, p.clicks, pct(c.clicks, p.clicks)],
      ['Impressions', c.impressions, p.impressions, pct(c.impressions, p.impressions)],
      ['CTR %', c.ctr, p.ctr, (c.ctr - p.ctr).toFixed(2)],
      ['Avg position', c.position, p.position, p.position && c.position ? (p.position - c.position).toFixed(1) + ' better' : ''],
    ], [['Metric', r => r[0]], ['Now', r => r[1]], ['Before', r => r[2]], ['Change', r => r[3]]]));
    L.push('### Striking-distance queries (position 4–20) — improve these pages first', '');
    L.push(table(gsc.striking, [['Query', r => r.query], ['Page', r => shortUrl(r.page)], ['Impr.', r => r.impressions], ['Clicks', r => r.clicks], ['Pos.', r => r.position]]));
    L.push('### Low-CTR pages — rewrite title and description', '');
    L.push(table(gsc.lowCtr, [['Page', r => shortUrl(r.page)], ['Impr.', r => r.impressions], ['CTR %', r => r.ctr], ['Pos.', r => r.position]]));
    L.push('### Top pages', '');
    L.push(table(gsc.topPages.slice(0, 15), [['Page', r => shortUrl(r.page)], ['Clicks', r => r.clicks], ['Impr.', r => r.impressions], ['CTR %', r => r.ctr], ['Pos.', r => r.position]]));
    L.push('### Countries', '');
    L.push(table(gsc.countries, [['Country', r => r.country], ['Clicks', r => r.clicks], ['Impr.', r => r.impressions]]));
  } else {
    L.push(`Not available: ${gsc.reason}`, '');
  }

  L.push('## Live HTTP check', '');
  if (live) {
    L.push(`${live.checked} URLs probed — ${live.ok} OK. By status: ${Object.entries(live.byStatus).map(([s, n]) => `${s}: ${n}`).join(', ')}`, '');
    L.push(table(live.bad.slice(0, 40), [['URL', r => shortUrl(r.url)], ['Status', r => r.status], ['Location / error', r => r.location ? shortUrl(r.location) : (r.error || '')]]));
    if (live.slow.length) L.push('Slow (>3 s):', '', table(live.slow, [['URL', r => shortUrl(r.url)], ['ms', r => r.ms]]));
  } else {
    L.push('_skipped_', '');
  }

  L.push('## On-site SEO scan', '');
  L.push(`${scan.pages} pages (${Object.entries(scan.byKind).map(([k, n]) => `${k}: ${n}`).join(', ')}), sitemaps: ${Object.entries(scan.sitemapUrls).map(([k, n]) => `${k} ${n}`).join(', ')}`, '');
  L.push(`**${scan.errors} errors, ${scan.warnings} warnings**`, '');
  L.push(table(Object.entries(scan.counts).sort((a, b) => b[1] - a[1]).map(([code, n]) => ({ code, n })), [['Issue', r => r.code], ['Count', r => r.n]]));
  const nonProduct = scan.issues.filter(i => !/\/motorcycle\/bdv-am-/.test(i.rel));
  L.push('### Errors (first 40)', '');
  L.push(table(scan.issues.filter(i => i.level === 'error').slice(0, 40), [['Code', r => r.code], ['File', r => r.rel], ['Detail', r => r.msg.slice(0, 140)]]));
  L.push('### Warnings on non-product pages (first 60)', '');
  L.push(table(nonProduct.filter(i => i.level === 'warn').slice(0, 60), [['Code', r => r.code], ['File', r => r.rel], ['Detail', r => r.msg.slice(0, 140)]]));

  L.push('## Next tasks from the locked plan', '');
  L.push(tasks.length ? tasks.slice(0, 5).map((t, i) => `${i + 1}. **${t.id}** ${t.title}`).join('\n') : '_backlog empty — extend from data above, in the same phase order_');
  L.push('');
  return L.join('\n');
}

function appendKpi(gsc, scan, live) {
  const file = path.join(GROWTH_DIR, 'kpi.csv');
  const header = 'date,clicks_28d,impressions_28d,ctr_28d,position_28d,seo_errors,seo_warnings,live_bad\n';
  if (!fs.existsSync(file)) fs.writeFileSync(file, header);
  const lines = fs.readFileSync(file, 'utf8').split('\n').filter(l => l && !l.startsWith(`${today},`));
  const c = gsc.available ? gsc.current : {};
  lines.push([today, c.clicks ?? '', c.impressions ?? '', c.ctr ?? '', c.position ?? '', scan.errors, scan.warnings, live ? live.bad.length : ''].join(','));
  fs.writeFileSync(file, lines.join('\n') + '\n');
}

async function main() {
  if (args.has('--check')) return check();
  if (args.has('--update-baseline')) return updateBaseline();

  console.log('Scanning site…');
  const scan = scanSite();
  console.log(`  ${scan.pages} pages, ${scan.errors} errors, ${scan.warnings} warnings`);

  console.log('Search Console…');
  let gsc;
  try { gsc = await fetchGsc(); } catch (e) { gsc = { available: false, reason: e.message }; }
  console.log(gsc.available ? `  ${gsc.current.clicks} clicks / ${gsc.current.impressions} impressions (28d)` : `  skipped: ${gsc.reason}`);

  let live = null;
  if (!args.has('--no-live')) {
    console.log('Probing live URLs…');
    live = await liveCheck({ extra: gsc.available ? gsc.knownUrls : [] });
    console.log(`  ${live.checked} checked, ${live.bad.length} not 200`);
  }

  const tasks = openTasks();
  fs.mkdirSync(path.join(GROWTH_DIR, 'reports'), { recursive: true });
  const md = report(scan, live, gsc, tasks);
  const reportFile = path.join(GROWTH_DIR, 'reports', `${today}.md`);
  fs.writeFileSync(reportFile, md);
  const { pageIndex, ...scanSummary } = scan;
  fs.writeFileSync(path.join(GROWTH_DIR, 'latest.json'), JSON.stringify({
    date: today,
    gsc,
    live,
    scan: { ...scanSummary, issues: scanSummary.issues.slice(0, 500) },
    nextTasks: tasks.slice(0, 5),
  }, null, 2) + '\n');
  appendKpi(gsc, scan, live);

  console.log(`\nReport: ${path.relative(ROOT, reportFile)}`);
  console.log(tasks.length ? `Next task: ${tasks[0].id} ${tasks[0].title}` : 'Backlog empty.');
}

main().catch(e => { console.error(e); process.exit(1); });
