const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const BASE = 'https://bizdavar.com';
const VER = '20260919m';

const LOCALES = [
  { code: 'fa', folder: 'pages', prefix: '', lang: 'fa', dir: 'rtl', title: 'خرید لنت و دیسک ترمز | انتخاب برند و مدل | بیزدوار', desc: 'فروشگاه ترمز بیزدوار: لنت، دیسک، ترمز عملکردی و روغن ترمز با انتخاب برند و مدل. قیمت دلاری تحویل ایران.', loading: 'در حال چیدن کاتالوگ ترمز…', related: [{ title: 'Auto-Moto', url: 'auto-moto', desc: 'موتورسیکلت و قطعات' }, { title: 'Liqui Moly', url: 'liqui-moly', desc: 'روغن و افزودنی' }, { title: 'تماس', url: 'contact', desc: 'استعلام قطعه' }] },
  { code: 'tr', folder: 'tr/pages', prefix: '/tr', lang: 'tr', dir: 'ltr', title: 'Fren balatası ve diski | marka ve model seç | Bizdavar', desc: 'Bizdavar fren mağazası: balata, disk, performans freni ve fren sıvısı. Kart fiyatı teslim USD.', loading: 'Fren kataloğu hazırlanıyor…', related: [{ title: 'Auto-Moto', url: 'auto-moto', desc: 'Motosiklet ve oto parçası' }, { title: 'Liqui Moly', url: 'liqui-moly', desc: 'Yağ ve katkı' }, { title: 'İletişim', url: 'contact', desc: 'Parça sorun' }] },
  { code: 'en', folder: 'en/pages', prefix: '/en', lang: 'en', dir: 'ltr', title: 'Brake pads and discs | choose brand and model | Bizdavar', desc: 'Bizdavar brake parts: pads, discs, performance brakes and fluid by brand and model. Card price is delivery USD.', loading: 'Loading the brake catalog…', related: [{ title: 'Auto-Moto', url: 'auto-moto', desc: 'Motorcycle gear and parts' }, { title: 'Liqui Moly', url: 'liqui-moly', desc: 'Oils and additives' }, { title: 'Contact', url: 'contact', desc: 'Ask for a part' }] },
  { code: 'ru', folder: 'ru/pages', prefix: '/ru', lang: 'ru', dir: 'ltr', title: 'Тормозные колодки и диски | марка и модель | Bizdavar', desc: 'Магазин тормозов Bizdavar: колодки, диски, спорт и жидкость. Цена на карточке — USD с доставкой в Иран.', loading: 'Каталог тормозов загружается…', related: [{ title: 'Auto-Moto', url: 'auto-moto', desc: 'Мотоэкипировка и запчасти' }, { title: 'Liqui Moly', url: 'liqui-moly', desc: 'Масла и присадки' }, { title: 'Контакты', url: 'contact', desc: 'Запрос детали' }] },
  { code: 'ar', folder: 'ar/pages', prefix: '/ar', lang: 'ar', dir: 'rtl', title: 'فحمات وأقراص الفرامل | اختر الماركة | Bizdavar', desc: 'متجر فرامل بيزدوار: فحمات وأقراص وسوائل مع اختيار الماركة والموديل. السعر بالدولار لتسليم إيران.', loading: 'جاري تجهيز كتالوج الفرامل…', related: [{ title: 'Auto-Moto', url: 'auto-moto', desc: 'عتاد الدراجة وقطع الغيار' }, { title: 'Liqui Moly', url: 'liqui-moly', desc: 'زيوت وإضافات' }, { title: 'اتصل', url: 'contact', desc: 'استعلام قطعة' }] }
];

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function page(loc) {
  const canonical = BASE + loc.prefix + '/pages/car-parts';
  const alts = LOCALES.map((l) => {
    const hl = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' }[l.code];
    return `  <link rel="alternate" hreflang="${hl}" href="${BASE}${l.prefix}/pages/car-parts">`;
  }).join('\n');
  return `<!DOCTYPE html>
<html lang="${loc.lang}" dir="${loc.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20260910c">
  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <script src="/assets/scripts/gtm-boot.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/locale-url.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/seo-head.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/locale-preload.js?v=20260910c" defer></script>
  <title>${esc(loc.title)}</title>
  <meta name="description" content="${esc(loc.desc)}">
  <link rel="canonical" href="${canonical}">
${alts}
  <link rel="alternate" hreflang="x-default" href="${BASE}/pages/car-parts">
  <meta property="og:title" content="${esc(loc.title)}">
  <meta property="og:description" content="${esc(loc.desc)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${BASE}/assets/images/brand/bizdavar-logo-square.png">
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/styles/car-parts.css?v=${VER}">
</head>
<body data-page="car-parts" data-depth="1" class="auto-page car-page">
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
  <main id="main-content" class="site-main">
    <h1 class="visually-hidden">${esc(loc.title)}</h1>
    <div id="frenDesk" class="fren-desk">
      <p class="brake-loading">${esc(loc.loading)}</p>
    </div>
    <div id="geoStrip"></div>
    <div id="relatedLinks"></div>
  </main>
  <script src="/assets/scripts/site-loader.js?v=${VER}" data-before-main="brakes-page.js"></script>
  <script>
    bizdavarPageInit(function () {
      injectPageSeo('carParts', {
        canonical: '${canonical}',
        ogImage: 'assets/images/brand/bizdavar-logo-square.png'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'carParts', url: 'car-parts' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'carParts', url: 'pages/car-parts' }
      ]);
      initCarPartsPage();
      injectCarPartsSchema();
      renderRelatedLinks(${JSON.stringify(loc.related)});
    });
  </script>
</body>
</html>
`;
}

for (const loc of LOCALES) {
  const file = path.join(ROOT, loc.folder, 'car-parts.html');
  fs.writeFileSync(file, page(loc));
  console.log(file);
}
