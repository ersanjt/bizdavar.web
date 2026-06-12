const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith('.html')) files.push(p);
  }
  return files;
}

for (const f of walk(root)) {
  let c = fs.readFileSync(f, 'utf8');
  const bootRe = /  <script src="([^"]*i18n\/bootstrap\.js)"><\/script>\r?\n/;
  const m = c.match(bootRe);
  if (!m) {
    console.log('no bootstrap:', path.relative(root, f));
    continue;
  }

  const bootLine = m[0];
  c = c.replace(bootRe, '');

  const marker = /  <script>\r?\n/;
  const idx = c.search(marker);
  if (idx === -1) {
    console.log('skip (no inline):', path.relative(root, f));
    continue;
  }

  const head = c.slice(0, idx);
  const tail = c.slice(idx);
  const lastScript = head.lastIndexOf('</script>\n');
  const lastScriptCr = head.lastIndexOf('</script>\r\n');
  const lastScriptEnd = Math.max(lastScript, lastScriptCr);
  if (lastScriptEnd === -1) continue;

  const endLen = lastScriptCr === lastScriptEnd && lastScriptCr !== -1 ? '</script>\r\n'.length : '</script>\n'.length;
  const insertAt = lastScriptEnd + endLen;
  c = head.slice(0, insertAt) + bootLine + head.slice(insertAt) + tail;
  fs.writeFileSync(f, c);
  console.log('fixed', path.relative(root, f));
}
