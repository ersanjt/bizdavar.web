#!/usr/bin/env node
/**
 * Rebuild article HTML (FA crawlable source) + locale body pack.
 */
const fs = require('fs');
const path = require('path');
const {
  ARTICLES,
  esc,
  innerHtml,
  jsonLd,
  CTA,
  ctaLinks,
  relatedItems,
  AUTHOR_LINE,
  secondaryLabel
} = require('./article-library');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'pages', 'articles');
const BODIES_JS = path.join(ROOT, 'assets', 'scripts', 'i18n', 'articles-bodies.js');

function relatedUrl(u) {
  return String(u || '')
    .replace(/^\.\.\//, '')
    .replace(/^\/pages\//, '');
}

function jsStr(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function relatedJs(a, lang) {
  return relatedItems(a, lang || 'fa')
    .map((r) => {
      const url = relatedUrl(r.url);
      return `{ title: '${jsStr(r.title)}', url: '${url}', desc: '${jsStr(r.desc)}' }`;
    })
    .join(',\n            ');
}

function shell(a) {
  const title = a.title.fa;
  const desc = a.description.fa;
  const keywords = a.keywords.fa;
  const cat = a.category.fa;
  const cta = CTA.fa;
  const links = ctaLinks(a);
  const inner = innerHtml(a, 'fa');
  const ld = JSON.stringify(jsonLd(a, 'fa'));
  const related = relatedJs(a, 'fa');

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20260829h">
  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/estedad/Estedad-Bold.woff2" as="font" type="font/woff2" crossorigin>
  <!-- Google Tag Manager -->
  <script src="/assets/scripts/gtm-boot.js" defer></script>
  <!-- End Google Tag Manager -->
  <script src="/assets/scripts/i18n/locale-url.js"></script>
  <script src="/assets/scripts/i18n/seo-head.js"></script>
  <script src="/assets/scripts/i18n/locale-preload.js"></script>
  <meta name="view-transition" content="same-origin">
  <title>${esc(title)} | بیزدوار</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
  <meta name="description" content="${esc(desc)}">
  <meta name="keywords" content="${esc(keywords)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="Bizdavar Group">
  <meta property="article:published_time" content="${a.date}">
  <meta property="article:modified_time" content="${a.modified || a.date}">
  <script type="application/ld+json" id="jsonld-article-static">${ld}</script>
</head>
<body data-page="article" data-depth="2" data-article="${a.slug}">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWQQWF8"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <script src="/assets/scripts/components/page-shell.js" defer></script>
<main id="main-content" class="site-main">
  <article class="section">
    <div class="container prose article">
      <header class="article__header">
        <span class="blog-item__cat">${esc(cat)}</span>
        <h1>${esc(title)}</h1>
        <p class="detail-meta article__meta">${esc(AUTHOR_LINE.fa)} · <time datetime="${a.date}">${a.date}</time></p>
      </header>
      <div class="article__inner" id="articleInner">
      <!-- bd-article-inner -->
${inner}
      <!-- /bd-article-inner -->
      </div>
      <div class="article__cta">
        <p>${esc(cta.text)}</p>
        <a href="${links.primary}" class="btn btn--primary">${esc(cta.primary)}</a>
        <a href="${links.secondary}" class="btn btn--yellow">${esc(secondaryLabel(a, 'fa'))}</a>
      </div>
    </div>
  </article>
  <div id="geoStrip"></div>
  <div id="relatedLinks"></div>
  </main>

  <script src="/assets/scripts/site-loader.js"></script>
  <script>
    bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: '${jsStr(title)}', url: '${a.slug}' }
          ];
      injectPageSeo('${a.seoKey}', {
        canonical: 'https://bizdavar.com/pages/articles/${a.slug}',
        ogImage: '${a.image}',
        type: 'article'
      });
      injectArticleSchema({
        title: '${jsStr(title)}',
        description: '${jsStr(desc)}',
        date: '${a.date}',
        dateModified: '${a.modified || a.date}',
        slug: 'pages/articles/${a.slug}',
        image: '${a.image}',
        keywords: '${jsStr(keywords)}'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            ${related}
          ]);
      setupWhatsappLinks();
    });
  </script>
</body>
</html>`;
}

function emitBodiesPack() {
  const pack = {};
  for (const a of ARTICLES) {
    pack[a.slug] = {};
    for (const lang of ['fa', 'tr', 'en', 'ru', 'ar']) {
      pack[a.slug][lang] = innerHtml(a, lang);
    }
  }
  const js = `/** Auto-generated by scripts/regenerate-articles.js — do not edit. */\nwindow.BIZDAVAR_ARTICLE_BODIES = ${JSON.stringify(pack)};\n`;
  fs.mkdirSync(path.dirname(BODIES_JS), { recursive: true });
  fs.writeFileSync(BODIES_JS, js, 'utf8');
  console.log('Wrote', path.relative(ROOT, BODIES_JS));
}

fs.mkdirSync(OUT, { recursive: true });
for (const a of ARTICLES) {
  if (!a.body || !a.body.fa) {
    console.error('Missing FA body for', a.slug);
    process.exit(1);
  }
  fs.writeFileSync(path.join(OUT, a.file), shell(a), 'utf8');
  console.log('Wrote', a.file);
}
emitBodiesPack();
