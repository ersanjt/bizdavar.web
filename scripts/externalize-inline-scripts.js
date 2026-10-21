/**
 * Move executable inline scripts to /assets/scripts/page-boot/ and
 * replace inline onerror handlers with data-fallback attributes.
 * Re-run after generators that still emit inline <script> blocks.
 */
const fs = require('fs');
const path = require('path');
const { bootTag } = require('./lib/page-boot-tag');

const root = path.join(__dirname, '..');
const LOADER_VER = '20261020g';

const HANDLERS = [
  [
    / onerror="this\.onerror=null;this\.src='\/assets\/icons\/categories\/motorcycle-helmet\.svg'"/g,
    ' data-fallback="/assets/icons/categories/motorcycle-helmet.svg"',
  ],
  [/ onerror="this\.remove\(\)"/g, ' data-remove-broken'],
  [/ onerror="this\.style\.display='none'"/g, ' data-hide-broken'],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.git') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function scriptType(attrs) {
  const match = attrs.match(/\btype\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
  return (match && (match[1] || match[2] || match[3])) || '';
}

function isExecutable(attrs) {
  if (/\bsrc\s*=/i.test(attrs)) return false;
  const type = scriptType(attrs);
  if (!type) return true;
  return /^(?:text|application)\/(?:javascript|ecmascript)|module$/i.test(type);
}

function keptAttrs(attrs) {
  const keep = [];
  if (/\bdefer\b/i.test(attrs)) keep.push('defer');
  if (/\basync\b/i.test(attrs)) keep.push('async');
  if (/\bnomodule\b/i.test(attrs)) keep.push('nomodule');
  const extra = attrs.match(/\b(?:id|class|nonce|data-[\w:-]+)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi);
  if (extra) keep.push(...extra);
  return keep.join(' ');
}

function externalizeScripts(html, stats) {
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  return html.replace(re, (full, attrs, body) => {
    if (!isExecutable(attrs)) return full;
    const trimmed = body.replace(/\r\n/g, '\n').trim();
    if (!trimmed) {
      stats.empty++;
      return full;
    }
    stats.scripts++;
    return bootTag(trimmed, keptAttrs(attrs));
  });
}

function bumpLoader(html) {
  return html.replace(
    /(<script\b[^>]*\bsrc=["'])([^"']*site-loader\.js)(?:\?v=[^"']*)?(["'])/gi,
    (_, open, src, close) => `${open}${src}?v=${LOADER_VER}${close}`
  );
}

const files = walk(root);
const stats = { files: 0, changed: 0, scripts: 0, empty: 0, handlers: 0, fallbackTags: 0, jsUrls: 0 };
const attrSeen = new Map();

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const original = html;
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(original))) {
    if (!isExecutable(match[1])) continue;
    const key = match[1].replace(/\s+/g, ' ').trim() || '(none)';
    attrSeen.set(key, (attrSeen.get(key) || 0) + 1);
  }
  for (const [pattern, replacement] of HANDLERS) {
    const next = html.replace(pattern, replacement);
    if (next !== html) stats.handlers++;
    html = next;
  }
  if (/javascript:/i.test(html)) stats.jsUrls++;
  html = externalizeScripts(html, stats);
  const needsFallback = /data-fallback|data-hide-broken|data-remove-broken|data-fallback-label/.test(html);
  const hasLoader = /site-loader\.js/.test(html);
  const hasFallbackScript = /img-fallback\.js/.test(html);
  if (needsFallback && !hasLoader && !hasFallbackScript) {
    html = html.replace(/<\/body>/i, '  <script src="/assets/scripts/img-fallback.js?v=20261020g"></script>\n</body>');
    stats.fallbackTags++;
  }
  html = bumpLoader(html);
  if (html !== original) {
    fs.writeFileSync(file, html);
    stats.changed++;
  }
  stats.files++;
}

console.log(JSON.stringify({ stats, attrs: [...attrSeen.entries()] }, null, 2));
