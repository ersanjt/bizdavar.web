#!/usr/bin/env node
/**
 * Regenerate article HTML with proper UTF-8 Persian content + i18n shell.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'pages', 'articles');

const articles = [
  {
    file: 'what-is-digital-marketing.html',
    slug: 'what-is-digital-marketing',
    seoKey: 'articleWhatIsDm',
    canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing',
    schemaDate: '2025-02-10',
    og: 'assets/images/content/network-map.svg',
    imgAlt: 'نقشه کانال‌های دیجیتال مارکتینگ',
    category: 'بازاریابی دیجیتال',
    title: 'دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها',
    meta: 'بیزدوار گروپ · <time datetime="2025-02-10">۱۴۰۳/۱۱/۲۱</time>',
    body: `
      <p>دیجیتال مارکتینگ یعنی استفاده از کانال‌های آنلاین — وبسایت، شبکه‌های اجتماعی، تبلیغات، سئو و ایمیل — برای جذب مخاطب، ساخت اعتماد و افزایش فروش. در <a href="../about">بیزدوار گروپ</a> این محور را هم‌راستا با <a href="../services#digital-marketing">خدمات بازاریابی دیجیتال</a> اجرا می‌کنیم.</p>
      <h2>۱. کانال‌های اصلی</h2>
      <p>سئو، تبلیغات کلیکی (Google Ads)، شبکه‌های اجتماعی، ایمیل مارکتینگ و محتوای تخصصی (وبلاگ) مهم‌ترین کانال‌ها هستند.</p>
      <h2>۲. تفاوت با بازاریابی سنتی</h2>
      <p>در دیجیتال، همه چیز قابل اندازه‌گیری است: CTR، CPA، نرخ تبدیل و ROI — و می‌توان سریع‌تر بهینه کرد.</p>
      <h2>۳. از کجا شروع کنیم؟</h2>
      <p>با تعریف مخاطب هدف، تحلیل رقبا و یک لندینگ یا سایت حرفه‌ای — مثلاً با <a href="../fast">Fast Web Studio</a> در ۵ روز.</p>`,
    related: [
      { title: 'افزایش فروش با دیجیتال مارکتینگ', url: 'digital-marketing', desc: 'راهکارهای عملی CRO' },
      { title: 'خدمات بازاریابی', url: '../services#digital-marketing', desc: 'استرategی و اجرا' },
      { title: 'وبلاگ', url: '../blog', desc: 'مقالات تخصصی' }
    ]
  },
  {
    file: 'digital-marketing.html',
    slug: 'digital-marketing',
    seoKey: 'articleDigitalMarketing',
    canonical: 'https://bizdavar.com/pages/articles/digital-marketing',
    schemaDate: '2025-04-01',
    og: 'assets/images/content/network-map.svg',
    imgAlt: 'شبکه بازاریابی دیجیتال',
    category: 'بازاریابی دیجیتال',
    title: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟',
    meta: 'بیزدوار گروپ · <time datetime="2025-04-01">۱۴۰۴/۰۱/۱۲</time>',
    body: `
      <p>بازاریابی دیجیتال فقط «بازدید» نمی‌سازد — هدف تبدیل بازدیدکننده به مشتری است. در <a href="../about">بیزدوار گروپ</a> این مسیر را با داده و تست A/B پیش می‌بریم:</p>
      <h2>۱. قیف فروش شفاف</h2>
      <p>از آگاهی تا خرید — هر مرحله باید محتوا، پیشنهاد و CTA مخصوص خود را داشته باشد.</p>
      <h2>۲. بهینه‌سازی نرخ تبدیل (CRO)</h2>
      <p>سرعت سایت، فرم تماس، اعتماد (نمونه‌کار، نظرات) و <a href="../fast">طراحی لندینگ</a> مستقیم روی فروش اثر می‌گذارند.</p>
      <h2>۳. تبلیغات هدفمند</h2>
      <p>Google Ads و Paid Social با بودجه کنترل‌شده و گزارش ROI — جزئیات در <a href="../services#digital-marketing">خدمات دیجیتال مارکتینگ</a>.</p>
      <h2>۴. اتوماسیون و پیگیری</h2>
      <p>ایمیل، CRM و ریتارگتینگ باعث می‌شود لید گرم از دست نرود.</p>`,
    related: [
      { title: 'خدمات دیجیتال مارکتینگ', url: '../services#digital-marketing', desc: 'کمپین و CRO' },
      { title: 'Fast Web Studio', url: '../fast', desc: 'لندینگ و فروشگاه' },
      { title: 'وبلاگ', url: '../blog', desc: 'راهنماهای بیشتر' }
    ]
  },
  {
    file: 'social-media-management.html',
    slug: 'social-media-management',
    seoKey: 'articleSmm',
    canonical: 'https://bizdavar.com/pages/articles/social-media-management',
    schemaDate: '2025-03-05',
    og: 'assets/images/content/network-map.svg',
    imgAlt: 'مدیریت شبکه‌های اجتماعی',
    category: 'مدیریت SMM',
    title: 'مدیریت شبکه‌های اجتماعی — استرategی SMM برای برندها',
    meta: 'بیزدوار گروپ · <time datetime="2025-03-05">۱۴۰۳/۱۲/۱۵</time>',
    body: `
      <p>SMM یعنی برنامه‌ریزی محتوا، طراحی بصری، انتشار منظم و تحلیل عملکرد در اینستاگرام، لینکدین و سایر شبکه‌ها. نمونه اجرا: <a href="../biztejarat">پروژه بیزتجارت</a>.</p>
      <h2>۱. استراتژی محتوا</h2>
      <p>تقویم انتشار، لحن برند و نوع محتوا (آموزشی، محصول، social proof) باید از قبل تعریف شود.</p>
      <h2>۲. طراحی و ویدئو</h2>
      <p>پست، استوری و ریلز با هویت بصری یکپارچ — برای B2B صنعتی اهمیت بیشتری دارد.</p>
      <h2>۳. تبلیغات Paid Social</h2>
      <p>هدف‌گیری دقیق مخاطب و لینک به لندینگ یا <a href="../contact">فرم تماس</a>.</p>`,
    related: [
      { title: 'خدمات SMM', url: '../services#smm', desc: 'تولید محتوا و تبلیغات' },
      { title: 'نمونه‌کار بیزتجارت', url: '../biztejarat', desc: 'اینستاگرام B2B' },
      { title: 'وبلاگ', url: '../blog', desc: 'مقالات مرتبط' }
    ]
  },
  {
    file: 'fast-studio.html',
    slug: 'fast-studio',
    seoKey: 'articleFastStudio',
    canonical: 'https://bizdavar.com/pages/articles/fast-studio',
    schemaDate: '2025-05-15',
    og: 'assets/images/content/hero-home.svg',
    imgAlt: 'Fast Web Studio — طراحی سایت',
    category: 'طراحی وب',
    title: 'راه‌اندازی سایت در ۵ روز — راهنمای Fast Studio',
    meta: 'بیزدوار گروپ · <time datetime="2025-05-15">۱۴۰۴/۰۲/۲۵</time>',
    body: `
      <p><a href="../fast">Fast Web Studio</a> محصول اختصاصی بیزدوار برای تحویل سایت شرکتی یا فروشگاهی در ۵ روز کاری است — از $99 تا $299.</p>
      <h2>۱. پلن پایه ($99)</h2>
      <p>سایت معرفی شرکت، RTL، فرم تماس و واتساپ — مناسب شروع سریع.</p>
      <h2>۲. پلن فروشگاهی ($199)</h2>
      <p>WooCommerce، درگاه پرداخت و ساختار محصول — برای فروش آنلاین.</p>
      <h2>۳. پلن حرفه‌ای ($299)</h2>
      <p>صفحات بیشتر، سئو پایه و یکپارچگی ابزارهای مارکتینگ.</p>
      <h2>۴. بعد از تحویل</h2>
      <p>آموزش مدیریت، پشتیبانی و امکان گسترش با <a href="../services#web-design">خدمات طراحی وب</a>.</p>`,
    related: [
      { title: 'Fast Web Studio', url: '../fast', desc: 'پلن‌ها و قیمت' },
      { title: 'خدمات طراحی وب', url: '../services#web-design', desc: 'پروژه‌های سفارشی' },
      { title: 'تماس', url: '../contact', desc: 'شروع پروژه' }
    ]
  },
  {
    file: 'industrial-sensors.html',
    slug: 'industrial-sensors',
    seoKey: 'articleIndustrialSensors',
    canonical: 'https://bizdavar.com/pages/articles/industrial-sensors',
    schemaDate: '2025-03-20',
    og: 'assets/images/content/industrial-placeholder.svg',
    imgAlt: 'سنسور صنعتی VEGA',
    category: 'تجهیزات صنعتی',
    title: 'انتخاب سنسور صنعتی مناسب — راهنمای VEGA',
    meta: 'بیزدوار گروپ · <time datetime="2025-03-20">۱۴۰۳/۱۲/۳۰</time>',
    body: `
      <p>انتخاب سنسور سطح، فشار یا جریان برای پروژه‌های نفت، پتروشیمی، آب و غذا نیازمند مشاوره فنی است. بیزدوار <a href="../vega">تامین VEGA</a> و <a href="../prosense">Prosense</a> را با پیش‌فاکتور شفاف ارائه می‌دهد.</p>
      <h2>۱. نوع اندازه‌گیری</h2>
      <p>رادار (VEGAPULS)، فشار (VEGABAR)، سوئیچ (VEGAPOINT) — بسته به مخزن، دما و رسانه.</p>
      <h2>۲. گواهی و ایمنی</h2>
      <p>برای محیط‌های Ex و SIL باید مدل و مستندات فنی دقیق درخواست شود.</p>
      <h2>۳. مسیر تامین</h2>
      <p>استعلام → پیش‌فاکتور → سفارش → لجستیک — جزئیات در <a href="../services#industrial">خدمات صنعتی</a>.</p>`,
    related: [
      { title: 'کاتالوگ VEGA', url: '../vega', desc: 'سنسور و ابزار دقیق' },
      { title: 'خدمات صنعتی', url: '../services#industrial', desc: 'مشاوره B2B' },
      { title: 'تماس', url: '../contact', desc: 'استعلام قیمت' }
    ]
  },
  {
    file: 'about-bizdavar-group.html',
    slug: 'about-bizdavar-group',
    seoKey: 'articleAboutBizdavar',
    canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group',
    schemaDate: '2025-06-01',
    og: 'assets/images/content/about-hero.svg',
    imgAlt: 'بیزدوار گروپ — حضور جهانی',
    category: 'درباره شرکت',
    title: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت',
    meta: 'بیزدوار گروپ · <time datetime="2025-06-01">۱۴۰۴/۰۳/۱۱</time>',
    body: `
      <p>بیزدوار گروپ (Bizdavar Group) از ۲۰۱۳ توسط <strong>ارسان جاهد تبریزی</strong> فعالیت می‌کند — بیش از ۱۰۰ پروژه در ۱۱ کشور.</p>
      <h2>حوزه‌های فعالیت</h2>
      <ul>
        <li>بازاریابی دیجیتال و SMM</li>
        <li>طراحی وب و Fast Web Studio</li>
        <li>فین‌تک و اکوسیستم (ZedPay، Netinode و ...)</li>
        <li>تامین VEGA، Prosense، Teltonika، Gamak و retail</li>
      </ul>
      <h2>چرا بیزدوار؟</h2>
      <p>ترکیب تخصص دیجیتال و تامین صنعتی B2B — یک نقطه تماس برای پروژه‌های ایران، ترکیه و بین‌الملل. <a href="../portfolio">نمونه‌کارها</a> · <a href="../contact">تماس</a></p>`,
    related: [
      { title: 'درباره ما', url: '../about', desc: 'تیم و تاریخچه' },
      { title: 'خدمات', url: '../services', desc: '۴ محور اصلی' },
      { title: 'تماس', url: '../contact', desc: 'مشاوره رایگان' }
    ]
  }
];

function shell(a) {
  const crumbs = [
    `{ page: 'home', url: '../../index' }`,
    `{ page: 'blog', url: '../blog' }`,
    `{ name: '${a.title.replace(/'/g, "\\'")}', url: '${a.slug}' }`
  ];
  const related = a.related.map(r =>
    `{ title: '${r.title.replace(/'/g, "\\'")}', url: '${r.url}', desc: '${r.desc.replace(/'/g, "\\'")}' }`
  ).join(',\n            ');
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <script src="../../assets/scripts/i18n/locale-preload.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${a.title} | بیزدوار</title>
  <link rel="icon" href="../../assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="../../assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="../../assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="../../assets/images/brand/apple-touch-icon.png">
  <link rel="stylesheet" href="../../assets/styles/fonts.css">
  <link rel="stylesheet" href="../../assets/styles/typography.css">
  <link rel="stylesheet" href="../../assets/styles/icons.css">
  <link rel="stylesheet" href="../../assets/styles/tokens.css">
  <link rel="stylesheet" href="../../assets/styles/style.css">
  <link rel="stylesheet" href="../../assets/styles/layout.css">
  <link rel="stylesheet" href="../../assets/styles/i18n.css">
  <link rel="stylesheet" href="../../assets/styles/footer.css">
  <link rel="stylesheet" href="../../assets/styles/responsive.css">
  <link rel="stylesheet" href="../../assets/styles/mobile-chrome.css">
</head>
<body data-page="article" data-depth="2" data-article="${a.slug}">

  <a href="#main-content" class="skip-link" data-i18n="common.skipLink">رفتن به محتوای اصلی</a>
  <div class="top-bar" id="topBar"></div>
  <header class="header" id="siteHeader"></header>
  <nav class="breadcrumbs-wrap" id="breadcrumbs" aria-label="مسیر صفحه"></nav>
  <div class="overlay" id="overlay"></div>

  <main id="main-content" class="site-main">
  <article class="section">
    <div class="container prose article">
      <header class="article__header">
        <span class="blog-item__cat">${a.category}</span>
        <h1>${a.title}</h1>
        <p class="detail-meta article__meta">${a.meta}</p>
      </header>
      <img src="../../${a.og}" alt="${a.imgAlt}" class="article__img" loading="lazy" width="768" height="400">
      ${a.body}
      <div class="article__cta">
        <p>برای مشاوره تخصصی با بیزدوار تماس بگیرید.</p>
        <a href="../contact" class="btn btn--primary">مشاوره رایگان</a>
        <a href="../services" class="btn btn--yellow">مشاهده خدمات</a>
      </div>
    </div>
  </article>
  <div id="geoStrip"></div>
  <div id="relatedLinks"></div>
  </main>

  <footer class="footer" id="siteFooter"></footer>
  <button class="back-to-top" id="backToTop" aria-label="بازگشت به بالا" data-i18n-aria="common.backToTop">↑</button>

  <script src="../../assets/scripts/config/paths.js"></script>
  <script src="../../assets/scripts/config/site-config.js"></script>
  <script src="../../assets/scripts/i18n/locales.js"></script>
  <script src="../../assets/scripts/i18n/locales-pages.js"></script>
  <script src="../../assets/scripts/i18n/locale-seo.js"></script>
  <script src="../../assets/scripts/i18n/i18n.js"></script>
  <script src="../../assets/scripts/i18n/page-i18n.js"></script>
  <script src="../../assets/scripts/components/biz-icons.js"></script>
  <script src="../../assets/scripts/components/context.js"></script>
  <script src="../../assets/scripts/components/chrome.js"></script>
  <script src="../../assets/scripts/components/schema.js"></script>
  <script src="../../assets/scripts/components/grids.js"></script>
  <script src="../../assets/scripts/i18n/bootstrap.js"></script>
  <script src="../../assets/scripts/main.js"></script>
  <script>
    bizdavarPageInit(function () {
      const crumbs = [
            ${crumbs.join(',\n            ')}
          ];
      injectPageSeo('${a.seoKey}', {
        canonical: '${a.canonical}',
        ogImage: '${a.og}',
        type: 'article'
      });
      injectArticleSchema({
        title: '${a.title.replace(/'/g, "\\'")}',
        description: '${a.title.replace(/'/g, "\\'")}',
        date: '${a.schemaDate}',
        slug: 'pages/articles/${a.slug}',
        image: '${a.og}'
      });
      renderSiteChrome();
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

for (const a of articles) {
  fs.writeFileSync(path.join(OUT, a.file), shell(a), 'utf8');
  console.log('Wrote', a.file);
}
