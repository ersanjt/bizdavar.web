/**
 * One-time splitter: site-components.js → context + chrome + schema + grids
 */
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../assets/scripts/components/site-components.js');
const outDir = path.join(__dirname, '../assets/scripts/components');
const lines = fs.readFileSync(srcPath, 'utf8').split(/\r?\n/);

function slice(start, end) {
  return lines.slice(start - 1, end).join('\n');
}

const contextBody = [
  slice(3, 21),
  slice(90, 154)
].join('\n\n');

const chromeBody = [
  slice(20, 86),
  slice(156, 193),
  slice(243, 297),
  slice(423, 702)
].join('\n\n');

const schemaBody = [
  slice(197, 239),
  slice(706, 1125),
  slice(1161, 1257),
  slice(1261, 1279),
  slice(1503, 1523)
].join('\n\n');

let gridsBody = [
  slice(301, 419),
  slice(1129, 1159),
  slice(1283, 1501),
  slice(1525, 1670)
].join('\n\n');

gridsBody = gridsBody.replace(/\bgetProjectUrl\(/g, 'window.getProjectUrl(');

const moduleHeader = (name) => `/**
 * Bizdavar — ${name}
 * @requires BD_CTX (context.js)
 */
(function () {
  const ctx = window.BD_CTX;
  if (!ctx) return;
  const {
    C, R, A, path, t, ic, linkArrow, wa, currentPage,
    absUrl, breadcrumbHref, localizeCrumbs, buildContactPoints, orgAddress
  } = ctx;

`;

const contextFile = `/**
 * Bizdavar — shared component context (paths, i18n helpers, schema utils)
 * @requires BIZDAVAR_CONFIG, resolvePath, BD_ICON
 */
(function () {
${contextBody}

  window.BD_CTX = {
    C,
    R,
    A,
    path,
    currentPage,
    get wa() {
      return C.contact.whatsapp
        ? \`https://wa.me/\${C.contact.whatsapp}?text=\${encodeURIComponent(C.contact.whatsappMessage)}\`
        : path(R.contact);
    },
    ic,
    linkArrow,
    t,
    absUrl,
    buildContactPoints,
    orgAddress,
    breadcrumbHref,
    localizeCrumbs
  };
})();
`;

function wrap(name, body) {
  return moduleHeader(name) + body + '\n})();\n';
}

fs.writeFileSync(path.join(outDir, 'context.js'), contextFile);
fs.writeFileSync(path.join(outDir, 'chrome.js'), wrap('Site chrome (header, footer, nav, breadcrumbs)', chromeBody));
fs.writeFileSync(path.join(outDir, 'schema.js'), wrap('SEO meta + JSON-LD schema injectors', schemaBody));
fs.writeFileSync(path.join(outDir, 'grids.js'), wrap('Content grids and landing sections', gridsBody));

console.log('Wrote context.js, chrome.js, schema.js, grids.js');
