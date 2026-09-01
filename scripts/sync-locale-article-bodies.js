#!/usr/bin/env node
/**
 * Bake localized article bodies + headers + CTAs into tr/en/ru/ar HTML.
 * FA source stays in pages/articles/*.html.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

global.window = global;
require(path.join(ROOT, 'assets/scripts/i18n/locales.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locales-pages.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locale-seo.js'));
require(path.join(ROOT, 'assets/scripts/i18n/locales-ru-ar.js'));
require(path.join(ROOT, 'assets/scripts/i18n/articles-body-i18n.js'));
require(path.join(ROOT, 'assets/scripts/i18n/articles-body-ru-ar.js'));

const BODIES = global.BIZDAVAR_ARTICLE_BODIES || {};
const LOCALES = global.BIZDAVAR_LOCALES || {};

const LOCALE_DIRS = [
  { code: 'tr', prefix: '/tr' },
  { code: 'en', prefix: '/en' },
  { code: 'ru', prefix: '/ru' },
  { code: 'ar', prefix: '/ar' }
];

const SLUGS = Object.keys(BODIES.en || {});

const CTA_BY_SLUG = {
  'fast-studio': {
    paths: ['fast', 'contact?service=fast-studio'],
    labels: {
      fa: { p: 'پلن مناسب را در صفحه Fast ببینید یا همین حالا در واتساپ بپرسید.', primary: 'مشاهده Fast Web Studio', secondary: 'فرم سفارش' },
      tr: { p: 'Uygun planı Fast sayfasında görün veya WhatsApp\'tan sorun.', primary: 'Fast Web Studio', secondary: 'Sipariş formu' },
      en: { p: 'See plans on the Fast page or ask on WhatsApp now.', primary: 'View Fast Web Studio', secondary: 'Order form' },
      ru: { p: 'Смотрите тарифы на странице Fast или спросите в WhatsApp.', primary: 'Fast Web Studio', secondary: 'Форма заказа' },
      ar: { p: 'اطلع على الباقات في صفحة Fast أو اسأل عبر واتساب الآن.', primary: 'Fast Web Studio', secondary: 'نموذج الطلب' }
    }
  },
  default: {
    paths: ['contact', 'services'],
    labels: {
      fa: { p: 'برای مشاوره تخصصی با بیزدوار تماس بگیرید.', primary: 'مشاوره رایگان', secondary: 'مشاهده خدمات' },
      tr: { p: 'Uzman danışmanlık için Bizdavar ile iletişime geçin.', primary: 'Ücretsiz danışmanlık', secondary: 'Hizmetleri gör' },
      en: { p: 'Contact Bizdavar for expert consulting.', primary: 'Free consultation', secondary: 'View services' },
      ru: { p: 'Свяжитесь с Bizdavar для экспертной консультации.', primary: 'Бесплатная консультация', secondary: 'Услуги' },
      ar: { p: 'تواصل مع Bizdavar للاستشارة المتخصصة.', primary: 'استشارة مجانية', secondary: 'عرض الخدمات' }
    }
  }
};

function articlePath(prefix, slug) {
  const rel = prefix
    ? path.join(prefix.slice(1), 'pages', 'articles', slug + '.html')
    : path.join('pages', 'articles', slug + '.html');
  return path.join(ROOT, rel);
}

function upsertHeader(html, art) {
  if (!art) return html;
  let out = html;
  if (art.category) {
    out = out.replace(
      /(<span class="blog-item__cat">)[^<]*(<\/span>)/,
      `$1${art.category}$2`
    );
  }
  if (art.title) {
    out = out.replace(
      /(<header class="article__header">[\s\S]*?<h1>)[^<]*(<\/h1>)/,
      `$1${art.title}$2`
    );
  }
  if (art.dateDisplay) {
    out = out.replace(
      /(<p class="detail-meta article__meta">)[\s\S]*?(<\/p>)/,
      `$1${art.dateDisplay}$2`
    );
  }
  return out;
}

function upsertBody(html, bodyHtml) {
  const headerEnd = html.search(/<\/header>/i);
  const ctaStart = html.search(/<div class="article__cta">/i);
  if (headerEnd < 0 || ctaStart < 0) return null;
  const before = html.slice(0, headerEnd + '</header>'.length);
  const after = html.slice(ctaStart);
  return before + '\n\n      ' + bodyHtml + '\n\n      ' + after;
}

function upsertCta(html, lang, slug, prefix) {
  const cfg = CTA_BY_SLUG[slug] || CTA_BY_SLUG.default;
  const labels = cfg.labels[lang] || cfg.labels.en;
  const [p1, p2] = cfg.paths;
  const base = prefix || '';
  let out = html;
  out = out.replace(
    /(<div class="article__cta">\s*<p>)[^<]*(<\/p>)/,
    `$1${labels.p}$2`
  );
  out = out.replace(
    /(<div class="article__cta">[\s\S]*?<a href=")[^"]*(" class="btn btn--primary">)[^<]*(<\/a>)/,
    `$1${base}/pages/${p1}$2${labels.primary}$3`
  );
  out = out.replace(
    /(<div class="article__cta">[\s\S]*?<a href=")[^"]*(" class="btn btn--yellow">)[^<]*(<\/a>)/,
    `$1${base}/pages/${p2}$2${labels.secondary}$3`
  );
  return out;
}

let updated = 0;

for (const loc of LOCALE_DIRS) {
  const bodies = BODIES[loc.code];
  const pageLocale = LOCALES[loc.code];
  const articles = pageLocale?.articles || {};
  if (!bodies) continue;

  for (const slug of SLUGS) {
    const body = bodies[slug];
    if (!body) continue;
    const file = articlePath(loc.prefix, slug);
    if (!fs.existsSync(file)) continue;

    let html = fs.readFileSync(file, 'utf8');
    html = upsertHeader(html, articles[slug]);
    const withBody = upsertBody(html, body);
    if (!withBody) continue;
    html = upsertCta(withBody, loc.code, slug, loc.prefix);

    fs.writeFileSync(file, html, 'utf8');
    updated++;
    console.log('synced', loc.code, slug);
  }
}

console.log(`Done. updated=${updated}`);
