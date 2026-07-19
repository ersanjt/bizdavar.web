#!/usr/bin/env node
/**
 * Restore Persian HTML main content from last clean commit (e2081e4),
 * keep current head/chrome (locale SEO, page-shell, GTM).
 * Also strip leftover </pa> / </pstrong> / </pp> garbage if any remain.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CLEAN = 'e2081e4';

const FILES = [
  'pages/contact.html',
  'pages/services.html',
  'pages/products.html',
  'pages/privacy.html',
  'pages/fast.html',
  'pages/blog.html',
  'pages/portfolio.html',
  'pages/vega.html',
  'pages/prosense.html',
  'pages/teltonika.html',
  'pages/gamak.html',
  'pages/teraoka.html',
  'pages/digi-system.html',
  'pages/bz-diamond.html',
  'pages/biztejarat.html',
  'pages/biztab.html',
  'pages/bizsanitizer-v5.html',
  'pages/fxguard.html',
  'pages/bizswap.html'
];

function gitShow(ref, file) {
  return execSync(`git show ${ref}:${file}`, { encoding: 'utf8', maxBuffer: 8e6, cwd: ROOT });
}

function extractMain(html) {
  const m = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i);
  return m ? m[0] : null;
}

function extractTitle(html) {
  const t = html.match(/<title>([^<]*)<\/title>/i);
  return t ? t[1] : null;
}

function extractMetaDesc(html) {
  const m = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
    || html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  return m ? m[1] : null;
}

function stripBogusClosers(html) {
  let out = html;
  // Collapse triplicated broken closers into a single proper </p>
  out = out.replace(/<\/pstrong>(?:[\s\S]*?<\/pstrong>)*(?:[\s\S]*?<\/p>)?/gi, '</p>');
  out = out.replace(/<\/pp>/gi, '</p>');
  out = out.replace(/<\/pa>(?:[\s\S]*?<\/pa>)*(?:\.?<\/p>)?/gi, '</p>');
  // If we accidentally left orphan text after </p> inside a section, leave for now
  return out;
}

function restoreFile(rel) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) {
    console.warn('skip missing', rel);
    return;
  }
  let cur = fs.readFileSync(full, 'utf8');
  let old;
  try {
    old = gitShow(CLEAN, rel);
  } catch (e) {
    console.warn('no history', rel);
    return;
  }

  const oldMain = extractMain(old);
  const curMain = extractMain(cur);
  if (!oldMain || !curMain) {
    console.warn('no main', rel);
    return;
  }

  // Prefer clean main; keep newer portfolio tags section if present in current
  let nextMain = oldMain;
  if (rel === 'pages/portfolio.html') {
    const curTags = curMain.match(/<div class="tags-cloud portfolio-tags">[\s\S]*?<\/div>/);
    if (curTags) {
      nextMain = nextMain.replace(/<div class="tags-cloud portfolio-tags">[\s\S]*?<\/div>/, curTags[0]);
    }
  }

  nextMain = stripBogusClosers(nextMain);
  cur = cur.replace(curMain, nextMain);

  const oldTitle = extractTitle(old);
  const curTitle = extractTitle(cur);
  if (oldTitle && curTitle && (/\?{3,}/.test(curTitle) || curTitle.includes('\uFFFD'))) {
    cur = cur.replace(/<title>[^<]*<\/title>/i, `<title>${oldTitle}</title>`);
  }

  const oldDesc = extractMetaDesc(old);
  const curDesc = extractMetaDesc(cur);
  if (oldDesc && curDesc && (/\?{3,}/.test(curDesc) || curDesc.includes('\uFFFD'))) {
    cur = cur.replace(
      /(<meta\s+name=["']description["']\s+content=["'])([^"']*)(["'])/i,
      `$1${oldDesc}$3`
    );
  }

  cur = stripBogusClosers(cur);
  fs.writeFileSync(full, cur, 'utf8');
  const left = (cur.match(/\?\?\?\?/g) || []).length;
  const pa = (cur.match(/<\/pa>|<\/pstrong>|<\/pp>/gi) || []).length;
  console.log('OK', rel, '???? left=', left, 'bogus closers=', pa);
}

for (const f of FILES) restoreFile(f);
console.log('Done restore from', CLEAN);
