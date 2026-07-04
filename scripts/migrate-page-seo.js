/**
 * Replace injectSeo({ title, description, ... }) with injectPageSeo(key, { overrides })
 * Run: node scripts/migrate-page-seo.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const PAGE_MAP = {
  'index.html': { key: 'home', canonical: 'https://bizdavar.com/' },
  'pages/about.html': { key: 'about', canonical: 'https://bizdavar.com/pages/about.html', ogImage: 'assets/images/content/about-hero.svg' },
  'pages/services.html': { key: 'services', canonical: 'https://bizdavar.com/pages/services.html', ogImage: 'assets/images/content/hero-home.svg' },
  'pages/portfolio.html': { key: 'portfolio', canonical: 'https://bizdavar.com/pages/portfolio.html', ogImage: 'assets/images/content/about-hero.svg' },
  'pages/blog.html': { key: 'blog', canonical: 'https://bizdavar.com/pages/blog.html', type: 'website' },
  'pages/fast.html': { key: 'fast', canonical: 'https://bizdavar.com/pages/fast', ogImage: 'assets/images/content/hero-home.svg' },
  'pages/privacy.html': { key: 'privacy', canonical: 'https://bizdavar.com/pages/privacy.html', robots: 'index, follow' },
  'pages/vega.html': { key: 'vega', canonical: 'https://bizdavar.com/pages/vega.html', ogImage: 'assets/images/vega/slides/value-process-safety.jpg' },
  'pages/prosense.html': { key: 'prosense', canonical: 'https://bizdavar.com/pages/prosense.html', ogImage: 'assets/images/prosense/slides/pq-sil.jpg' },
  'pages/gamak.html': { key: 'gamak', canonical: 'https://bizdavar.com/pages/gamak.html' },
  'pages/bz-diamond.html': { key: 'bzDiamond', canonical: 'https://bizdavar.com/pages/bz-diamond.html' },
  'pages/biztejarat.html': { key: 'biztejarat', canonical: 'https://bizdavar.com/pages/biztejarat.html' },
  'pages/articles/digital-marketing.html': { key: 'articleDigitalMarketing', canonical: 'https://bizdavar.com/pages/articles/digital-marketing.html', type: 'article', ogImage: 'assets/images/content/network-map.svg' },
  'pages/articles/what-is-digital-marketing.html': { key: 'articleWhatIsDm', canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing.html', type: 'article' },
  'pages/articles/social-media-management.html': { key: 'articleSmm', canonical: 'https://bizdavar.com/pages/articles/social-media-management.html', type: 'article' },
  'pages/articles/fast-studio.html': { key: 'articleFastStudio', canonical: 'https://bizdavar.com/pages/articles/fast-studio.html', type: 'article' },
  'pages/articles/industrial-sensors.html': { key: 'articleIndustrialSensors', canonical: 'https://bizdavar.com/pages/articles/industrial-sensors.html', type: 'article' },
  'pages/articles/about-bizdavar-group.html': { key: 'articleAboutBizdavar', canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group.html', ogImage: 'assets/images/content/about-hero.svg' }
};

function overridesStr(o) {
  const parts = [`canonical: '${o.canonical}'`];
  if (o.ogImage) parts.push(`ogImage: '${o.ogImage}'`);
  if (o.type) parts.push(`type: '${o.type}'`);
  if (o.robots) parts.push(`robots: '${o.robots}'`);
  return parts.join(',\n      ');
}

let n = 0;
for (const [rel, cfg] of Object.entries(PAGE_MAP)) {
  const file = path.join(ROOT, rel.replace(/\//g, path.sep));
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');

  if (rel === 'index.html') {
    const rep = `injectPageSeo('home', {\n        ${overridesStr(cfg)}\n      })`;
    const next = html.replace(
      /injectSeo\(\{\s*title: window\.BIZDAVAR_CONFIG\.seo\.defaultTitle,[\s\S]*?canonical: 'https:\/\/bizdavar\.com\/'\s*\}\)/,
      rep
    );
    if (next !== html) {
      fs.writeFileSync(file, next, 'utf8');
      console.log('OK', rel);
      n++;
    }
    continue;
  }

  const rep = `injectPageSeo('${cfg.key}', {\n      ${overridesStr(cfg)}\n    })`;
  const next = html.replace(/injectSeo\(\{[\s\S]*?\}\);(\s*\n\s*(?:render|inject))/m, `${rep};$1`);
  if (next !== html) {
    fs.writeFileSync(file, next, 'utf8');
    console.log('OK', rel);
    n++;
  } else {
    console.warn('No match:', rel);
  }
}
console.log(`Migrated ${n} file(s).`);
