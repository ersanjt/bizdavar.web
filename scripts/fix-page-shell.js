/**
 * Standardize page shell: mobile-chrome.css, favicon links, bizdavarPageInit wrapper.
 * Run: node scripts/fix-page-shell.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function assetPrefix(relFile) {
  const depth = relFile.split(/[/\\]/).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
}

function fixFile(file) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const prefix = assetPrefix(rel);
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (!html.includes('mobile-chrome.css')) {
    html = html.replace(
      /(<link rel="stylesheet" href="[^"]*responsive\.css">)/,
      `$1\n  <link rel="stylesheet" href="${prefix}assets/styles/mobile-chrome.css">`
    );
    changed = true;
  }

  if (!html.includes('favicon.svg')) {
    html = html.replace(
      /<link rel="icon" href="([^"]*favicon\.png"[^>]*>)/,
      `<link rel="icon" href="${prefix}assets/images/brand/favicon.svg" type="image/svg+xml">\n  <link rel="icon" href="$1`
    );
    if (!html.includes('favicon-16.png')) {
      html = html.replace(
        /(<link rel="icon" href="[^"]*favicon\.png"[^>]*>)/,
        `$1\n  <link rel="icon" href="${prefix}assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">`
      );
    }
    changed = true;
  }

  const bootMatch = html.match(/<script>\s*([\s\S]*?)<\/script>\s*<\/body>/);
  if (bootMatch && bootMatch[1].includes('renderSiteChrome') && !bootMatch[1].includes('bizdavarPageInit')) {
    let body = bootMatch[1].trim();
    if (!body.includes('setupWhatsappLinks')) {
      body += '\n      setupWhatsappLinks();';
    }
    const wrapped = `<script>\n    bizdavarPageInit(function () {\n      ${body.replace(/\n/g, '\n      ')}\n    });\n  </script>\n</body>`;
    html = html.replace(/<script>\s*[\s\S]*?<\/script>\s*<\/body>/, wrapped);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed', rel);
  }
}

walkHtml(path.join(ROOT, 'pages')).forEach(fixFile);
fixFile(path.join(ROOT, 'index.html'));
console.log('Done.');
