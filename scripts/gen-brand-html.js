const fs = require('fs');
const path = require('path');

function brandHtml(b) {
  const P = b.prefix;
  const PK = b.pageKey;
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <script src="../assets/scripts/i18n/locale-preload.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${b.title}</title>
  <link rel="icon" href="../assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="../assets/images/brand/apple-touch-icon.png">
  <link rel="stylesheet" href="../assets/styles/fonts.css">
  <link rel="stylesheet" href="../assets/styles/typography.css">
  <link rel="stylesheet" href="../assets/styles/icons.css">
  <link rel="stylesheet" href="../assets/styles/tokens.css">
  <link rel="stylesheet" href="../assets/styles/style.css">
  <link rel="stylesheet" href="../assets/styles/layout.css">
  <link rel="stylesheet" href="../assets/styles/i18n.css">
  <link rel="stylesheet" href="../assets/styles/footer.css">
  <link rel="stylesheet" href="../assets/styles/responsive.css">
  <link rel="stylesheet" href="../assets/styles/${b.css}">
</head>
<body data-page="${b.page}" data-depth="1">

  <a href="#main-content" class="skip-link">رفتن به محتوای اصلی</a>
  <div class="top-bar" id="topBar"></div>
  <header class="header" id="siteHeader"></header>
  <nav class="breadcrumbs-wrap" id="breadcrumbs" aria-label="مسیر صفحه"></nav>
  <div class="overlay" id="overlay"></div>

  <main id="main-content" class="site-main">

  <section class="${P}-hero">
    <div class="container" id="${P}HeroContent"></div>
  </section>

  <div class="${P}-trust-bar" id="${P}TrustBar"></div>

  <nav class="${P}-cat-nav" id="${P}CatNav" aria-label="${b.navLabel}"></nav>

  <section class="section section--gray" id="${P}-trust">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.trust.eyebrow">${b.trustEyebrow}</span>
        <h2 class="section__title" data-i18n="${PK}.sections.trust.title">${b.trustTitle}</h2>
        <p class="section__desc" data-i18n="${PK}.sections.trust.desc">${b.trustDesc}</p>
      </div>
      <div class="${P}-why-grid" id="${P}WhyGrid"></div>
    </div>
  </section>

  <section class="section" id="${P}-buy">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.buy.eyebrow">مسیر خرید</span>
        <h2 class="section__title" data-i18n="${PK}.sections.buy.title">از استعلام تا تحویل — ۵ مرحله شفاف</h2>
        <p class="section__desc" data-i18n="${PK}.sections.buy.desc">بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.</p>
      </div>
      <div class="${P}-steps" id="${P}PurchaseSteps"></div>
    </div>
  </section>

  <section class="section section--gray" id="${P}-highlights">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.highlights.eyebrow">محصولات پرتقاضا</span>
        <h2 class="section__title" data-i18n="${PK}.sections.highlights.title">${b.highlightsTitle}</h2>
        <p class="section__desc" data-i18n="${PK}.sections.highlights.desc">${b.highlightsDesc}</p>
      </div>
      <div class="${P}-highlights" id="${P}Highlights"></div>
    </div>
  </section>

  <section class="section" id="${P}-catalog">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.catalog.eyebrow">کاتالوگ کامل</span>
        <h2 class="section__title" data-i18n="${PK}.sections.catalog.title">${b.catalogTitle}</h2>
        <p class="section__desc" data-i18n="${PK}.sections.catalog.desc">${b.catalogDesc}</p>
      </div>
      <div id="${P}Categories"></div>
    </div>
  </section>

  <section class="section section--gray" id="${P}-iran">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.iran.eyebrow">کاربرد در ایران</span>
        <h2 class="section__title" data-i18n="${PK}.sections.iran.title">${b.iranTitle}</h2>
        <p class="section__desc" data-i18n="${PK}.sections.iran.desc">${b.iranDesc}</p>
      </div>
      <div class="${P}-iran-grid" id="${P}IranGrid"></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.industries.eyebrow">صنایع جهانی</span>
        <h2 class="section__title" data-i18n="${PK}.sections.industries.title">کاربرد در صنایع مختلف</h2>
        <p class="section__desc" data-i18n="${PK}.sections.industries.desc">${b.industriesDesc}</p>
      </div>
      <div class="${P}-industries-grid" id="${P}Industries"></div>
    </div>
  </section>

  <section class="section section--gray">
    <div class="container">
      <div class="${P}-academy-block" id="${P}Academy"></div>
    </div>
  </section>

  <section class="section" id="${P}-supply">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.supply.eyebrow">تامین از بیزدوار</span>
        <h2 class="section__title" data-i18n="${PK}.sections.supply.title">${b.supplyTitle}</h2>
        <p class="section__desc" data-i18n="${PK}.sections.supply.desc">شریک تامین شما — نه فقط فروشنده</p>
      </div>
      <div class="${P}-supply-grid" id="${P}SupplyList"></div>
      <div class="${P}-official-note" data-i18n-html="${PK}.officialNote">${b.officialNote}</div>
    </div>
  </section>

  <section class="section section--gray" id="${P}-faq">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="${PK}.sections.faq.eyebrow">سوالات متداول</span>
        <h2 class="section__title" data-i18n="${PK}.sections.faq.title">پرسش‌های رایج خریداران ایرانی</h2>
        <p class="section__desc" data-i18n="${PK}.sections.faq.desc">پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.</p>
      </div>
      <div class="${P}-faq" id="${P}Faq"></div>
    </div>
  </section>

  <section class="section section--yellow">
    <div class="container cta-banner cta-banner--pro">
      <h2 data-i18n="${PK}.cta.title">${b.ctaTitle}</h2>
      <p data-i18n="${PK}.cta.desc">${b.ctaDesc}</p>
      <div class="hero__actions hero__actions--center">
        <a href="contact.html?service=industrial" class="btn btn--primary" id="${P}CtaForm" data-i18n="${PK}.cta.btnForm">فرم استعلام</a>
        <a href="#" class="btn btn--green" id="${P}CtaWhatsapp" data-i18n="common.whatsapp">واتساپ</a>
        <a href="services.html#industrial" class="btn btn--yellow" data-i18n="${PK}.cta.btnServices">خدمات صنعتی</a>
      </div>
    </div>
  </section>

  <div class="${P}-sticky-cta" id="${P}StickyCta" hidden>
    <span data-i18n="${PK}.sticky.label">${b.stickyLabel}</span>
    <a href="contact.html?service=industrial" class="btn btn--yellow ${P}-btn-inquiry" data-i18n="common.contact">تماس</a>
  </div>

  <div id="geoStrip"></div>
  <div id="relatedLinks"></div>

  </main>

  <footer class="footer" id="siteFooter"></footer>
  <button class="back-to-top" id="backToTop" aria-label="بازگشت به بالا">↑</button>

  <script src="../assets/scripts/config/paths.js"></script>
  <script src="../assets/scripts/config/site-config.js"></script>
  <script src="../assets/scripts/i18n/locales.js"></script>
  <script src="../assets/scripts/i18n/locales-pages.js"></script>
  <script src="../assets/scripts/i18n/locale-seo.js"></script>
  <script src="../assets/scripts/i18n/i18n.js"></script>
  <script src="../assets/scripts/i18n/page-i18n.js"></script>
  <script src="../assets/scripts/components/biz-icons.js"></script>
  <script src="../assets/scripts/lib/supply-brand-page.js"></script>
  <script src="../assets/scripts/config/${b.products}"></script>
  <script src="../assets/scripts/components/context.js"></script>
  <script src="../assets/scripts/components/chrome.js"></script>
  <script src="../assets/scripts/components/schema.js"></script>
  <script src="../assets/scripts/components/grids.js"></script>
  <script src="../assets/scripts/${b.pageJs}"></script>
  <script src="../assets/scripts/i18n/bootstrap.js"></script>
  <script src="../assets/scripts/main.js"></script>

  <script>
    injectPageSeo('${b.seo}', {
      canonical: '${b.canonical}',
      ogImage: '${b.og}'
    });
    renderSiteChrome();
    renderBreadcrumbs([
      { page: 'home', url: 'index.html' },
      { page: 'services', url: 'services.html#industrial' },
      { page: '${b.brandCrumb}', url: '${b.file}' }
    ]);
    injectBreadcrumbSchema([
      { page: 'home', url: 'index.html' },
      { page: 'services', url: 'pages/services.html#industrial' },
      { page: '${b.brandCrumb}', url: 'pages/${b.file}' }
    ]);
    ${b.init}();
    ${b.schema}();
    renderGeoStrip('geoStrip', {
      textKey: '${PK}.geoText',
      text: '${b.geoText}'
    });
    renderRelatedLinks(${JSON.stringify(b.relatedLinks)});
  </script>
</body>
</html>`;
}

const brands = [
  {
    file: 'gamak.html',
    page: 'gamak',
    prefix: 'gamak',
    css: 'gamak.css',
    products: 'gamak-products.js',
    pageJs: 'gamak-page.js',
    init: 'initGamakPage',
    schema: 'injectGamakSchema',
    seo: 'gamak',
    pageKey: 'gamakPage',
    brandCrumb: 'gamak',
    canonical: 'https://bizdavar.com/pages/gamak.html',
    og: 'assets/images/gamak/hero/gamak-motor.webp',
    title: 'خرید الکتروموتور Gamak در ایران | IE2/IE3 — بیزدوار گروپ',
    navLabel: 'دسته‌بندی محصولات Gamak',
    trustEyebrow: 'چرا از بیزدوار بخرید؟',
    trustTitle: 'تامین مطمئن Gamak برای واحد فنی و خرید شما',
    trustDesc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب توان موتور تا تحویل در ایران هستیم.',
    highlightsTitle: 'سری‌های شاخص Gamak برای پروژه‌های ایرانی',
    highlightsDesc: 'GM/GMB · فلنج B5/B35 · IE2/IE3 · ترمزدار — برای استعلام هر سری دکمه «درخواست استعلام» را بزنید.',
    catalogTitle: 'کاتالوگ کامل الکتروموتور Gamak',
    catalogDesc: 'موتور سه‌فاز و تک‌فاز — IE2/IE3 — فلنج، پایه، ترمزدار و پروژه‌ای',
    iranTitle: 'Gamak در صنایع رایج ایران',
    iranDesc: 'اگر صنعت شما در لیست نیست — نوع بار و توان مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.',
    industriesDesc: 'الکتروموتور Gamak برای هر بخش صنعتی',
    supplyTitle: 'خدمات تامین Gamak',
    officialNote: 'اطلاعات فنی بر اساس <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Gamak</a> است. برای استعلام — <a href="contact.html">با بیزدوار تماس بگیرید</a> · <a href="vega.html">VEGA</a> · <a href="prosense.html">Prosense</a>',
    ctaTitle: 'آماده استعلام قیمت Gamak هستید؟',
    ctaDesc: 'توان kW، دور rpm و نوع فلنج را بفرستید — GM/GMB · IE2/IE3 · B3/B5',
    stickyLabel: 'استعلام Gamak',
    geoText: 'تامین Gamak از ترکیه به ایران — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.',
    relatedLinks: [
      { titleKey: 'gamakPage.related.0.title', title: 'محصولات VEGA', url: 'vega.html', descKey: 'gamakPage.related.0.desc', desc: 'سنسور سطح و فشار' },
      { titleKey: 'gamakPage.related.1.title', title: 'محصولات Prosense', url: 'prosense.html', descKey: 'gamakPage.related.1.desc', desc: 'دتکتور گاز و شعله' },
      { titleKey: 'gamakPage.related.2.title', title: 'خدمات صنعتی', url: 'services.html#industrial', descKey: 'gamakPage.related.2.desc', desc: 'مشاوره تامین B2B' },
      { titleKey: 'gamakPage.related.3.title', title: 'تماس و استعلام', url: 'contact.html', descKey: 'gamakPage.related.3.desc', desc: 'مشاوره رایگان' }
    ]
  },
  {
    file: 'digi-system.html',
    page: 'digiSystem',
    prefix: 'digi',
    css: 'digi.css',
    products: 'digi-system-products.js',
    pageJs: 'digi-system-page.js',
    init: 'initDigiSystemPage',
    schema: 'injectDigiSystemSchema',
    seo: 'digiSystem',
    pageKey: 'digiSystemPage',
    brandCrumb: 'digiSystem',
    canonical: 'https://bizdavar.com/pages/digi-system.html',
    og: 'assets/images/partners/digi-system.svg',
    title: 'خرید Digi System | ترازو و POS — بیزدوار گروپ',
    navLabel: 'دسته‌بندی محصولات Digi System',
    trustEyebrow: 'چرا از بیزدوار بخرید؟',
    trustTitle: 'تامین مطمئن Digi System برای فروشگاه و واحد خرید شما',
    trustDesc: 'ترازو، POS و peripheral — از انتخاب مدل تا تحویل در ایران.',
    highlightsTitle: 'محصولات پرتقاضا Digi System',
    highlightsDesc: 'ترازوی PC · POS یکپارچه · اسکنر و پرینتر — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.',
    catalogTitle: 'کاتالوگ کامل Digi System',
    catalogDesc: 'ترازو، POS، peripheral و نرم‌افزار retail — تامین از ترکیه',
    iranTitle: 'Digi System در بازار retail ایران',
    iranDesc: 'نوع فروشگاه و تعداد صندوق را بفرستید — پکیج مناسب پیشنهاد می‌دهیم.',
    industriesDesc: 'تجهیزات retail Digi برای انواع فروشگاه و HORECA',
    supplyTitle: 'خدمات تامین Digi System',
    officialNote: 'اطلاعات فنی بر اساس <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Digi System</a> است. برای استعلام — <a href="contact.html">با بیزدوار تماس بگیرید</a> · <a href="teraoka.html">Teraoka</a>',
    ctaTitle: 'آماده استعلام قیمت Digi System هستید؟',
    ctaDesc: 'نوع فروشگاه، تعداد صندوق و نیاز ترازو legal-for-trade را بفرستید',
    stickyLabel: 'استعلام Digi System',
    geoText: 'تامین Digi System از ترکیه به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.',
    relatedLinks: [
      { titleKey: 'digiSystemPage.related.0.title', title: 'Teraoka Seiko', url: 'teraoka.html', descKey: 'digiSystemPage.related.0.desc', desc: 'ترازو و POS ژاپن' },
      { titleKey: 'digiSystemPage.related.1.title', title: 'خدمات صنعتی', url: 'services.html#industrial', descKey: 'digiSystemPage.related.1.desc', desc: 'تامین retail B2B' },
      { titleKey: 'digiSystemPage.related.2.title', title: 'تماس', url: 'contact.html', descKey: 'digiSystemPage.related.2.desc', desc: 'استعلام قیمت' }
    ]
  },
  {
    file: 'teraoka.html',
    page: 'teraoka',
    prefix: 'teraoka',
    css: 'teraoka.css',
    products: 'teraoka-products.js',
    pageJs: 'teraoka-page.js',
    init: 'initTeraokaPage',
    schema: 'injectTeraokaSchema',
    seo: 'teraoka',
    pageKey: 'teraokaPage',
    brandCrumb: 'teraoka',
    canonical: 'https://bizdavar.com/pages/teraoka.html',
    og: 'assets/images/partners/teraoka.svg',
    title: 'خرید Teraoka Seiko | ترازو و POS — بیزدوار گروپ',
    navLabel: 'دسته‌بندی محصولات Teraoka',
    trustEyebrow: 'چرا از بیزدوار بخرید؟',
    trustTitle: 'تامین مطمئن Teraoka Seiko برای فروشگاه و انبار شما',
    trustDesc: 'ترازو، برچسب‌زن و POS ژاپن — مشاوره مدل و لجستیک بین‌المللی.',
    highlightsTitle: 'سری‌های شاخص Teraoka برای پروژه‌های ایرانی',
    highlightsDesc: 'ترازوی فروشگاهی · deli scale · POS · برچسب‌زن — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.',
    catalogTitle: 'کاتالوگ کامل Teraoka Seiko',
    catalogDesc: 'ترازو، labeling، POS و تجهیزات food service — تامین از ژاپن',
    iranTitle: 'Teraoka در بازار retail و food service ایران',
    iranDesc: 'نوع فروشگاه یا آشپزخانه صنعتی را بفرستید — سری مناسب را پیشنهاد می‌دهیم.',
    industriesDesc: 'تجهیزات Teraoka برای retail، HORECA و لجستیک',
    supplyTitle: 'خدمات تامین Teraoka Seiko',
    officialNote: 'اطلاعات فنی بر اساس <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teraoka Seiko</a> است. برای استعلام — <a href="contact.html">با بیزدوار تماس بگیرید</a> · <a href="digi-system.html">Digi System</a>',
    ctaTitle: 'آماده استعلام قیمت Teraoka هستید؟',
    ctaDesc: 'نوع ترازو، ظرفیت و تعداد صندوق را بفرستید — deli · POS · labeling',
    stickyLabel: 'استعلام Teraoka',
    geoText: 'تامین Teraoka Seiko به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی توسط بیزدوار گروپ.',
    relatedLinks: [
      { titleKey: 'teraokaPage.related.0.title', title: 'Digi System', url: 'digi-system.html', descKey: 'teraokaPage.related.0.desc', desc: 'ترازو و POS ترکیه' },
      { titleKey: 'teraokaPage.related.1.title', title: 'خدمات صنعتی', url: 'services.html#industrial', descKey: 'teraokaPage.related.1.desc', desc: 'تامین retail B2B' },
      { titleKey: 'teraokaPage.related.2.title', title: 'تماس', url: 'contact.html', descKey: 'teraokaPage.related.2.desc', desc: 'استعلام قیمت' }
    ]
  }
];

for (const b of brands) {
  fs.writeFileSync(path.join(__dirname, '../pages', b.file), brandHtml(b));
  console.log('Wrote', b.file);
}
