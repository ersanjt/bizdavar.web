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
  ctaLinks
} = require('./article-library');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'pages', 'articles');
const BODIES_JS = path.join(ROOT, 'assets', 'scripts', 'i18n', 'articles-bodies.js');

function relatedUrl(u) {
  return String(u || '')
    .replace(/^\.\.\//, '')
    .replace(/^\/pages\//, '');
}

function relatedJs(a) {
  return a.related
    .map((r) => {
      const url = relatedUrl(r.url);
      return `{ title: '${r.title.replace(/'/g, "\\'")}', url: '${url}', desc: '${(r.desc || '').replace(/'/g, "\\'")}' }`;
    })
    .join(',\n            ');
}

function secondaryLabel(a, lang) {
  const loc = lang || 'fa';
  if (a.slug === 'vega-supply-iran' || a.slug === 'industrial-sensors') {
    return { fa: 'کاتالوگ VEGA', tr: 'VEGA kataloğu', en: 'VEGA catalogue', ru: 'Каталог VEGA', ar: 'كتالوج VEGA' }[loc];
  }
  if (a.slug === 'prosense-gas-detection') {
    return { fa: 'کاتالوگ Prosense', tr: 'Prosense kataloğu', en: 'Prosense catalogue', ru: 'Каталог Prosense', ar: 'كتالوج Prosense' }[loc];
  }
  if (a.slug === 'liqui-moly-supply-iran') {
    return { fa: 'Liqui Moly', tr: 'Liqui Moly', en: 'Liqui Moly', ru: 'Liqui Moly', ar: 'Liqui Moly' }[loc];
  }
  if (a.slug === 'marvi-society-ios-app') {
    return { fa: 'نمونه‌کار Marvi', tr: 'Marvi vaka', en: 'Marvi case', ru: 'Кейс Marvi', ar: 'دراسة Marvi' }[loc];
  }
  if (a.slug === 'field-tech-services') {
    return { fa: 'خدمات فنی', tr: 'Saha hizmetleri', en: 'Field services', ru: 'Выездные услуги', ar: 'خدمات ميدانية' }[loc];
  }
  if (a.slug === 'fast-studio' || a.slug === 'multilingual-web-iran-turkey') {
    return 'Fast Web Studio';
  }
  return CTA[loc]?.secondary || CTA.fa.secondary;
}

function jsStr(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
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
  const related = relatedJs(a);

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <script src="/assets/scripts/i18n/locale-url.js"></script>
  <script src="/assets/scripts/i18n/seo-head.js"></script>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NXWQQWF8');</script>
  <!-- End Google Tag Manager -->
<script src="/assets/scripts/i18n/locale-preload.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="view-transition" content="same-origin">
  <title>${esc(title)} | بیزدوار</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/styles/site.css">
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
  <script src="/assets/scripts/components/page-shell.js"></script>
<main id="main-content" class="site-main">
  <article class="section">
    <div class="container prose article">
      <header class="article__header">
        <span class="blog-item__cat">${esc(cat)}</span>
        <h1>${esc(title)}</h1>
        <p class="detail-meta article__meta">بیزدوار گروپ · <time datetime="${a.date}">${a.date}</time></p>
      </header>
      <div class="article__inner" id="articleInner">
      <!-- bd-article-inner -->
${inner}
      <!-- /bd-article-inner -->
      </div>
      <div class="article__cta">
        <p>${esc(cta.text)}</p>
        <a href="${links.primary}" class="btn btn--primary">${esc(cta.primary)}</a>
        <a href="${links.secondary}" class="btn btn--yellow">${esc(secondaryLabel(a))}</a>
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
