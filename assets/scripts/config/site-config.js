/**
 * Bizdavar — Central site configuration
 * تماس، مسیرها، سئو، محتوا
 */
window.BIZDAVAR_CONFIG = {
  siteName: 'بیزدوار گروپ',
  siteNameEn: 'Bizdavar Group',
  baseUrl: 'https://bizdavar.com',
  locale: 'fa_IR',
  language: 'fa',

  routes: {
    home: 'index.html',
    about: 'pages/about.html',
    gallery: 'pages/gallery.html',
    services: 'pages/services.html',
    portfolio: 'pages/portfolio.html',
    fast: 'pages/fast.html',
    customWebApp: 'pages/custom-web-app.html',
    blog: 'pages/blog.html',
    contact: 'pages/contact.html',
    privacy: 'pages/privacy.html',
    vega: 'pages/vega.html',
    prosense: 'pages/prosense.html',
    teltonika: 'pages/teltonika.html',
    bzDiamond: 'pages/bz-diamond.html',
    supplifyTrade: 'pages/supplify-trade.html',
    kayaOne: 'pages/kaya-one.html',
    smmTurk: 'pages/smm-turk.html',
    marvispace: 'pages/marvispace.html',
    marviSociety: 'pages/marvi-society.html',
    fxguardExchange: 'pages/fxguard-exchange.html',
    biztejarat: 'pages/biztejarat.html',
    biztab: 'pages/biztab.html',
    bizpad: 'pages/bizpad.html',
    bizsanitizerV5: 'pages/bizsanitizer-v5.html',
    uwt: 'pages/uwt.html',
    fxguard: 'pages/fxguard.html',
    fxguardAccounting: 'pages/fxguard-accounting.html',
    bizswap: 'pages/bizswap.html',
    products: 'pages/products.html',
    gamak: 'pages/gamak.html',
    uwt: 'pages/uwt.html',
    digiSystem: 'pages/digi-system.html',
    teraoka: 'pages/teraoka.html',
    liquiMoly: 'pages/liqui-moly.html',
    fieldTech: 'pages/field-tech.html',
    articles: {
      digitalMarketing: 'pages/articles/digital-marketing.html',
      whatIsDigitalMarketing: 'pages/articles/what-is-digital-marketing.html',
      socialMediaManagement: 'pages/articles/social-media-management.html',
      fastStudio: 'pages/articles/fast-studio.html',
      websiteSpeed5Days: 'pages/articles/website-speed-5-days.html',
      customWebAppDev: 'pages/articles/custom-web-app-development.html',
      industrialSensors: 'pages/articles/industrial-sensors.html',
      aboutBizdavar: 'pages/articles/about-bizdavar-group.html'
    }
  },

  /**
   * Products mega-menu — tabs mirror site IA:
   * Owned (software/hardware) · Catalog lines · Industrial brand supply
   */
  productNav: {
    overviewRoute: 'products',
    defaultTab: 'owned',
    featured: {
      route: 'fxguard',
      page: 'fxguard',
      labelKey: 'nav.productFxguard',
      descKey: 'nav.productFxguardDesc',
      image: 'assets/images/content/home-owned-fxguard.webp'
    },
    tabs: [
      {
        id: 'owned',
        labelKey: 'nav.tabOwned',
        groups: [
          {
            id: 'software',
            labelKey: 'nav.productsSoftware',
            items: [
              { route: 'fxguard', page: 'fxguard', labelKey: 'nav.productFxguard', label: 'WhatsApp CRM', descKey: 'nav.productFxguardDesc', badgeKey: 'nav.productFxguardBadge' },
              { route: 'fxguardAccounting', page: 'fxguard-accounting', labelKey: 'nav.productFxguardAccounting', label: 'Accounting', descKey: 'nav.productFxguardAccountingDesc', badgeKey: 'nav.productFxguardAccountingBadge' },
              { route: 'bizswap', page: 'bizswap', labelKey: 'nav.productBizswap', label: 'BizSwap', descKey: 'nav.productBizswapDesc' }
            ]
          },
          {
            id: 'hardware',
            labelKey: 'nav.productsHardware',
            items: [
              { route: 'biztab', page: 'biztab', labelKey: 'nav.productBiztab', label: 'BizTab', descKey: 'nav.productBiztabDesc' },
              { route: 'bizpad', page: 'bizpad', labelKey: 'nav.productBizpad', label: 'BizPad', descKey: 'nav.productBizpadDesc' },
              { route: 'bizsanitizerV5', page: 'bizsanitizer-v5', labelKey: 'nav.productBizclean', label: 'BizClean', descKey: 'nav.productBizcleanDesc' }
            ]
          }
        ]
      },
      {
        id: 'lines',
        labelKey: 'nav.tabLines',
        groups: [
          {
            id: 'catalog',
            labelKey: 'nav.productsLines',
            items: [
              { route: 'products', page: 'products', hash: 'catalog', cat: 'packaging', labelKey: 'nav.productPackaging', descKey: 'nav.productPackagingDesc' },
              { route: 'products', page: 'products', hash: 'catalog', cat: 'medical', labelKey: 'nav.productMedical', descKey: 'nav.productMedicalDesc' }
            ]
          }
        ]
      },
      {
        id: 'brands',
        labelKey: 'nav.tabBrands',
        cta: {
          route: 'products',
          hash: 'supply',
          labelKey: 'nav.productsSupplyLink',
          descKey: 'nav.productsSupplyDesc'
        },
        groups: [
          {
            id: 'sensing',
            labelKey: 'nav.brandGroupSensing',
            items: [
              { route: 'vega', page: 'vega', label: 'VEGA', descKey: 'nav.brandVegaDesc' },
              { route: 'uwt', page: 'uwt', label: 'UWT', descKey: 'nav.brandUwtDesc' },
              { route: 'prosense', page: 'prosense', label: 'Prosense', descKey: 'nav.brandProsenseDesc' }
            ]
          },
          {
            id: 'telematics',
            labelKey: 'nav.brandGroupTelematics',
            items: [
              { route: 'teltonika', page: 'teltonika', label: 'Teltonika', descKey: 'nav.brandTeltonikaDesc', badgeKey: 'nav.brandTeltonikaBadge' }
            ]
          },
          {
            id: 'power',
            labelKey: 'nav.brandGroupPower',
            items: [
              { route: 'gamak', page: 'gamak', label: 'Gamak', descKey: 'nav.brandGamakDesc' },
              { route: 'liquiMoly', page: 'liqui-moly', label: 'Liqui Moly', descKey: 'nav.brandLiquiDesc' }
            ]
          },
          {
            id: 'retail',
            labelKey: 'nav.brandGroupRetail',
            items: [
              { route: 'digiSystem', page: 'digi-system', label: 'Digi System', descKey: 'nav.brandDigiDesc' },
              { route: 'teraoka', page: 'teraoka', label: 'Teraoka', descKey: 'nav.brandTeraokaDesc' }
            ]
          }
        ]
      }
    ],
    footer: [
      { route: 'products', page: 'products', labelKey: 'nav.productsCatalog' },
      { route: 'products', hash: 'supply', labelKey: 'nav.productsSupplyLink' },
      { route: 'contact', page: 'contact', labelKey: 'nav.productsQuote' }
    ]
  },

  /**
   * Services mega-menu — Digital/software pillars · Field technical services
   */
  serviceNav: {
    overviewRoute: 'services',
    defaultTab: 'digital',
    featured: {
      route: 'fieldTech',
      page: 'field-tech',
      labelKey: 'nav.serviceField',
      descKey: 'nav.serviceFieldFeaturedDesc',
      kickerKey: 'nav.servicesMegaHint'
    },
    tabs: [
      {
        id: 'digital',
        labelKey: 'nav.tabServicesDigital',
        groups: [
          {
            id: 'growth',
            labelKey: 'nav.servicesGroupGrowth',
            items: [
              { route: 'services', hash: 'digital-marketing', page: 'services', labelKey: 'nav.serviceDigital', descKey: 'nav.serviceDigitalDesc' },
              { route: 'services', hash: 'smm', page: 'services', labelKey: 'nav.serviceSmm', descKey: 'nav.serviceSmmDesc' }
            ]
          },
          {
            id: 'build',
            labelKey: 'nav.servicesGroupBuild',
            items: [
              { route: 'services', hash: 'web-design', page: 'services', labelKey: 'nav.serviceWeb', descKey: 'nav.serviceWebDesc' },
              { route: 'fast', page: 'fast', labelKey: 'nav.webDesign', descKey: 'nav.fastDesc' },
              { route: 'customWebApp', page: 'custom-web-app', labelKey: 'nav.customWebApp', descKey: 'nav.customWebAppDesc' },
              { route: 'services', hash: 'software-apps', page: 'services', labelKey: 'nav.serviceApps', descKey: 'nav.serviceAppsDesc' },
              { route: 'services', hash: 'server-ops', page: 'services', labelKey: 'nav.serviceServer', descKey: 'nav.serviceServerDesc' }
            ]
          }
        ]
      },
      {
        id: 'field',
        labelKey: 'nav.tabServicesField',
        cta: {
          route: 'contact',
          page: 'contact',
          labelKey: 'nav.servicesConsult',
          descKey: 'nav.servicesConsultDesc'
        },
        groups: [
          {
            id: 'field',
            labelKey: 'nav.servicesGroupField',
            items: [
              { route: 'fieldTech', page: 'field-tech', labelKey: 'nav.serviceField', descKey: 'nav.serviceFieldDesc', badgeKey: 'nav.serviceFieldBadge' }
            ]
          }
        ]
      }
    ],
    footer: [
      { route: 'services', page: 'services', labelKey: 'nav.servicesAll' },
      { route: 'fast', page: 'fast', labelKey: 'nav.webDesign' },
      { route: 'customWebApp', page: 'custom-web-app', labelKey: 'nav.customWebApp' },
      { route: 'contact', page: 'contact', labelKey: 'nav.servicesConsult' }
    ]
  },

  assets: {
    favicon: 'assets/images/brand/favicon.png',
    faviconSvg: 'assets/images/brand/favicon.svg',
    appleTouchIcon: 'assets/images/brand/apple-touch-icon.png',
    /** Official wordmark — transparent; dark «Bizda» + red «var» (header, drawer, schema) */
    logo: 'assets/images/brand/bizdavar-logo.png',
    /** Same wordmark inverted for dark backgrounds (footer) */
    logoOnDark: 'assets/images/brand/bizdavar-logo-light.png',
    logoAlt: 'Bizdavar — official logo',
    ogImage: 'assets/images/content/about-hero.jpg',
    heroImage: 'assets/images/content/hero-home.svg',
    aboutImage: 'assets/images/content/about-hero.jpg'
  },

  /** Formspree — پولی/محدود؛ خاموش. لید رایگان = واتساپ + ایمیل */
  formspree: {
    formId: '',
    enabled: false
  },

  /** BizHub — internal CRM + CMS (PHP API on /api) */
  bizhub: {
    enabled: false,
    apiBase: '/api'
  },

  /** Lead capture — WhatsApp FAB + GTM events (no backend required) */
  leadCapture: {
    fabEnabled: true,
    trackGtm: true
  },

  contact: {
    email: 'info@bizdavar.com',
    /** Primary line = Persian WhatsApp (worldwide Farsi-speaking leads) */
    phone: '+989305880135',
    phoneDisplay: '+98 930 588 0135 · +90 501 067 6486 · +98 936 411 5151',
    whatsapp: '989305880135',
    whatsappMessage: 'سلام، از وبسایت bizdavar.com پیام می‌دهم.',
    channels: [
      { id: 'ir', label: 'واتساپ فارسی', display: '+98 930 588 0135', tel: '+989305880135', whatsapp: '989305880135', primary: true },
      { id: 'tr', label: 'واتساپ فروش', display: '+90 501 067 6486', tel: '+905010676486', whatsapp: '905010676486' },
      {
        id: 'field',
        label: 'خدمات فنی',
        display: '+98 936 411 5151',
        tel: '+989364115151',
        whatsapp: '989364115151',
        scope: 'field-tech',
        whatsappMessage: 'سلام، برای خدمات فنی (دوربین مدار بسته / سیم‌کشی / نورمخفی) از وبسایت bizdavar.com پیام می‌دهم.'
      }
    ],
    address: 'دفاتر: ایران · ترکیه · ارمنستان · دبی',
    workingHours: '۷/۲۴ — همیشه در دسترس',
    linkedin: 'https://www.linkedin.com/in/ersanjt',
    instagram: 'https://www.instagram.com/bizdavar'
  },

  /** خدمات فنی میدانی — دوربین، سیم‌کشی، نورمخفی */
  fieldTech: {
    id: 'field-tech',
    lead: {
      nameFa: 'تیم فنی بیزدوار',
      nameEn: 'Bizdavar technical team',
      roleFa: 'نصب دوربین مدار بسته، سیم‌کشی ساختمان و نورمخفی',
      roleEn: 'CCTV, building wiring & cove lighting'
    },
    whatsapp: '989364115151',
    phoneDisplay: '+98 936 411 5151',
    tel: '+989364115151',
    cities: ['تبریز'],
    citiesEn: ['Tabriz'],
    whatsappMessage: 'سلام، برای خدمات فنی (دوربین مدار بسته / سیم‌کشی / نورمخفی) از وبسایت bizdavar.com پیام می‌دهم.'
  },

  /** شخصیت حقوقی ثبت‌شده در ایران — منبع: پروفایل جویشگر */
  iranEntity: {
    legalNameFa: 'تکنولوژی پردازان توسعه خاورمیانه',
    legalNameEn: 'Middle East Development Technology Processors',
    brandFa: 'آژانس دیجیتال مارکتینگ بیزدوار',
    brandEn: 'Bizdavar Digital Marketing Agency',
    contactName: 'ارسان جاهد تبریزی',
    city: 'تبریز',
    province: 'آذربایجان شرقی',
    country: 'ایران',
    countryCode: 'IR',
    /** Public display — city only (no street-level address) */
    address: 'تبریز',
    streetAddress: '',
    activities: ['تولیدکننده', 'بازرگانی', 'توزیع و عمده‌فروشی', 'خدمات', 'فروشگاه'],
    employeeRange: '۱–۱۰ نفر',
    category: 'کامپیوتر و ابزار دیجیتال · وب',
    jooyeshgar: 'https://www.jooyeshgar.com/company/det-29884'
  },

  /** ثبت شرکت در ارمنستان — منبع: پروفایل Spyur.am */
  armeniaEntity: {
    legalName: 'Bizdavar Group',
    legalNameShort: 'Bizdavar',
    companyType: 'Limited Liability Company (LLC)',
    brandFa: 'بیزدوار گروپ',
    brandEn: 'Bizdavar Group',
    contactName: 'Ersan Jahed Tabrizi',
    contactNameFa: 'ارسان جاهد تبریزی',
    city: 'Yerevan',
    cityFa: 'ایروان',
    country: 'Armenia',
    countryFa: 'ارمنستان',
    countryCode: 'AM',
    address: 'Yerevan, Armenia',
    addressFa: 'ایروان، ارمنستان',
    category: 'SEO · website promotion · digital marketing',
    categoryFa: 'سئو · تبلیغات وب · دیجیتال مارکتینگ',
    founded: 2015,
    spyur: 'https://www.spyur.am/en/companies/bizdavar/57783/'
  },

  domains: {
    main: 'bizdavar.com'
  },

  geo: {
    headquarters: { city: 'چنددفتری', country: 'ایران · ترکیه · ارمنستان · دبی', countryCode: 'INTL' },
    summaryFa: 'خدمات در ایران، ترکیه و ۱۱ کشور — دفاتر در ایران، ترکیه، ارمنستان و دبی · مشاوره فارسی، واتساپ و تحویل بین‌المللی.',
    hubs: [
      { city: 'تبریز', country: 'ایران', code: 'IR', role: 'دفتر ایران · پروژه‌های صنعتی و دیجیتال' },
      { city: 'استانبول', country: 'ترکیه', code: 'TR', role: 'دفتر ترکیه · فین‌تک و عملیات بین‌المللی' },
      { city: 'ایروان', country: 'ارمنستان', code: 'AM', role: 'دفتر ارمنستان · Bizdavar Group LLC' },
      { city: 'دبی', country: 'امارات', code: 'AE', role: 'دفتر دبی · عملیات منطقه‌ای' },
    ],
    markets: ['ایران', 'ترکیه', 'امارات', 'آلمان', 'ارمنستان', 'عراق', 'گرجستان', 'لبنان', 'ایتالیا', 'انگلستان', 'آمریکا']
  },

  seo: {
    defaultTitle: 'بیزدوار گروپ | خدمات دیجیتال، طراحی سایت و تامین تجهیزات صنعتی',
    defaultDescription: 'بیزدوار گروپ — آژانس دیجیتال با ۱۲+ سال تجربه و ۱۰۰+ پروژه در ۱۱ کشور. بازاریابی دیجیتال، طراحی وب، فین‌تک، SMM و تامین تجهیزات صنعتی VEGA و Prosense.',
    keywords: 'بیزدوار, Bizdavar Group, BizTab, BizClean, ضدعفونی دست, بازاریابی دیجیتال, طراحی سایت, VEGA, Prosense, Fast Web Studio, آژانس دیجیتال بیزدوار',
    twitterCard: 'summary_large_image',
    author: 'Bizdavar Group',
    themeColor: '#1d1d1b'
  },

  fast: {
    baseUrl: 'https://bizdavar.com/pages/fast',
    planMessages: {
      basic: 'سلام، می‌خوام پلن پایه Fast Web Studio سفارش بدم',
      store: 'سلام، می‌خوام پلن فروشگاهی Fast Web Studio سفارش بدم',
      pro: 'سلام، می‌خوام پلن حرفه‌ای Fast Web Studio سفارش بدم'
    }
  },

  partners: {
    netinode: {
      name: 'Netinode',
      url: 'https://netinode.net/',
      shopUrl: 'https://shop.netinode.net/',
      taglineFa: 'دامنه، هاست، WordPress و SSL — اکوسیستم بیزدوار',
      taglineEn: 'Domains, hosting, WordPress & SSL — Bizdavar ecosystem'
    }
  },

  services: [
    { id: 'digital-marketing', title: 'بازاریابی دیجیتال', slug: 'pages/services.html#digital-marketing' },
    { id: 'web-design', title: 'طراحی وب و وب‌اپلیکیشن', slug: 'pages/services.html#web-design' },
    { id: 'software-apps', title: 'اپلیکیشن و سامانه', slug: 'pages/services.html#software-apps' },
    { id: 'server-ops', title: 'مدیریت سرور', slug: 'pages/services.html#server-ops' },
    { id: 'smm', title: 'مدیریت SMM', slug: 'pages/services.html#smm' },
    { id: 'field-tech', title: 'خدمات فنی و ساختمانی', slug: 'pages/field-tech.html' }
  ],

  blogPosts: [
    {
      slug: 'pages/articles/website-design-us-eu.html',
      title: 'طراحی سایت انگلیسی برای اروپا و آمریکا — فاکتور دلار یا یورو',
      excerpt: 'پلن ۵روزه از ۹۹ دلار، پروژه سفارشی، Stripe و فاکتور USD/EUR برای مشتری آمریکا و اروپا.',
      category: 'طراحی وب',
      catId: 'web',
      date: '2026-08-29',
      image: 'assets/images/content/services-web-mockup.svg',
      relatedService: 'pages/services.html#web-design'
    },
    {
      slug: 'pages/articles/digital-marketing-us-eu.html',
      title: 'بازاریابی دیجیتال برای بازار آمریکا و اروپا — بودجه دلار و یورو',
      excerpt: 'Google Ads، Meta و LinkedIn برای مخاطب US/EU با فاکتور دلار یا یورو و گزارش GA4.',
      category: 'بازاریابی دیجیتال',
      catId: 'digital',
      date: '2026-08-29',
      image: 'assets/images/content/services-dm-visual.svg',
      relatedService: 'pages/services.html#digital-marketing'
    },
    {
      slug: 'pages/articles/buy-vegapuls-iran.html',
      title: 'خرید VEGAPULS 6X در ایران — قیمت، کد سفارش و استعلام',
      excerpt: 'چطور سنسور سطح راداری اصل برای مخزن ایران بخرید — پیش‌فاکتور فارسی و واتساپ.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-29',
      image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
      relatedService: 'pages/vega.html'
    },
    {
      slug: 'pages/articles/vega-quote-iran.html',
      title: 'استعلام قیمت سنسور VEGA در ایران — چه اطلاعاتی بفرستید',
      excerpt: 'چک‌لیست خریدار: مخزن، رسانه، Ex/SIL و عکس پلاک برای پیش‌فاکتور دقیق.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-29',
      image: 'assets/images/vega/product-vegabar-39.png',
      relatedService: 'pages/vega.html'
    },
    {
      slug: 'pages/articles/buy-prosense-iran.html',
      title: 'خرید دتکتور گاز Prosense در ایران — PQ، SafeVader و SIL',
      excerpt: 'دتکتور گاز صنعتی اصل برای نفت، پتروشیمی و HVAC — استعلام واتساپ فارسی.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-28',
      image: 'assets/images/prosense/series-pq.webp',
      relatedService: 'pages/prosense.html'
    },
    {
      slug: 'pages/articles/industrial-trade-iran.html',
      title: 'بازرگانی تجهیزات صنعتی در ایران — VEGA، Prosense و برندهای اصل',
      excerpt: 'یک نقطه تماس فارسی برای ابزار دقیق، ایمنی گاز، ردیاب و روغن صنعتی.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-27',
      image: 'assets/images/content/supply-hero.jpg',
      relatedService: 'pages/products.html#supply'
    },
    {
      slug: 'pages/articles/buy-teltonika-iran.html',
      title: 'خرید ردیاب Teltonika FMB920 در ایران — از ۲۹ دلار',
      excerpt: 'ردیاب GPS اصل برای ناوگان ایران — FMB920، FMC650 و DualCam.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-26',
      image: 'assets/images/partners/teltonika.png',
      relatedService: 'pages/teltonika.html'
    },
    {
      slug: 'pages/articles/buy-gamak-iran.html',
      title: 'خرید الکتروموتور Gamak در ایران — توان، فلنج و استعلام',
      excerpt: 'موتور اصل برای پمپ، فن و خط تولید — kW، دور، B3/B5 و پیش‌فاکتور فارسی.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-29',
      image: 'assets/images/gamak/category-three-phase.webp',
      relatedService: 'pages/gamak.html'
    },
    {
      slug: 'pages/articles/buy-digi-system-iran.html',
      title: 'خرید ترازو و POS Digi System در ایران — فروشگاه و صندوق',
      excerpt: 'ترازو و صندوق اصل برای سوپرمارکت ایران — نوع فروشگاه، تعداد صندوق و پیش‌فاکتور فارسی.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-29',
      image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
      relatedService: 'pages/digi-system.html'
    },
    {
      slug: 'pages/articles/buy-teraoka-iran.html',
      title: 'خرید ترازو Teraoka در ایران — deli، POS و برچسب‌زن',
      excerpt: 'ترازو و برچسب‌زن اصل Teraoka Seiko برای فروشگاه و آشپزخانه — پیش‌فاکتور فارسی.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-08-29',
      image: 'assets/images/teraoka/hero/teraoka-retail-hero.webp',
      relatedService: 'pages/teraoka.html'
    },
    {
      slug: 'pages/articles/vega-supply-iran.html',
      title: 'تامین سنسور VEGA برای پروژه‌های ایران — از مشاوره تا تحویل',
      excerpt: 'مشاوره فارسی، پیش‌فاکتور شفاف و لجستیک بین‌المللی VEGA اصل برای پروژه‌های صنعتی.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-07-29',
      image: 'assets/images/vega/slides/value-process-safety.jpg',
      relatedService: 'pages/vega.html'
    },
    {
      slug: 'pages/articles/multilingual-web-iran-turkey.html',
      title: 'وبسایت چندزبانه برای بازار ایران و ترکیه',
      excerpt: 'hreflang، اعتماد محلی و تحویل سریع برای کسب‌وکارهای دو بازاری.',
      category: 'طراحی وب',
      catId: 'web',
      date: '2026-07-29',
      image: 'assets/images/content/services-web-mockup.svg',
      relatedService: 'pages/fast.html'
    },
    {
      slug: 'pages/articles/what-is-digital-marketing.html',
      title: 'دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها',
      excerpt: 'تعریف بازاریابی دیجیتال، کانال‌ها و نقش آن در رشد فروش آنلاین.',
      category: 'بازاریابی دیجیتال',
      catId: 'digital',
      date: '2025-02-10',
      image: 'assets/images/content/network-map.svg',
      relatedService: 'pages/services.html#digital-marketing'
    },
    {
      slug: 'pages/articles/digital-marketing.html',
      title: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟',
      excerpt: 'راهکارهای عملی برای تبدیل بازدیدکننده به مشتری.',
      category: 'بازاریابی دیجیتال',
      catId: 'digital',
      date: '2025-04-01',
      image: 'assets/images/content/services-dm-visual.svg',
      relatedService: 'pages/services.html#digital-marketing'
    },
    {
      slug: 'pages/articles/social-media-management.html',
      title: 'مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها',
      excerpt: 'تولید محتوا، تقویم انتشار و تبلیغات هدفمند در اینستاگرام و لینکدین.',
      category: 'مدیریت SMM',
      catId: 'digital',
      date: '2025-03-05',
      image: 'assets/images/content/services-smm-mockup.svg',
      relatedService: 'pages/services.html#smm'
    },
    {
      slug: 'pages/articles/fast-studio.html',
      title: 'راه‌اندازی سایت در ۵ روز — راهنمای کامل Fast Studio',
      excerpt: 'پلن‌ها، مسیر ۵ روزه و تفاوت با پروژه اختصاصی.',
      category: 'طراحی وب',
      date: '2026-08-13',
      relatedService: 'pages/fast.html'
    },
    {
      slug: 'pages/articles/website-speed-5-days.html',
      title: 'چک‌لیست راه‌اندازی سایت در ۵ روز',
      excerpt: 'لوگو، متن، دامنه و تصمیم‌های روزبه‌روز برای تحویل واقعی ۵ روزه.',
      category: 'طراحی وب',
      date: '2026-08-13',
      relatedService: 'pages/fast.html'
    },
    {
      slug: 'pages/articles/custom-web-app-development.html',
      title: 'طراحی وب و اپلیکیشن اختصاصی — راهنمای انتخاب',
      excerpt: 'چه زمانی Fast کافی است و چه زمانی به وب‌اپ یا اپ نیاز دارید.',
      category: 'طراحی وب',
      date: '2026-08-13',
      relatedService: 'pages/custom-web-app.html'
    },
    {
      slug: 'pages/articles/industrial-sensors.html',
      title: 'انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق',
      excerpt: 'نکات مهم در تامین تجهیزات VEGA و ابزار دقیق.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2025-03-20',
      image: 'assets/images/vega/blog-industrial-sensors.jpg',
      relatedService: 'pages/products.html#supply'
    },
    {
      slug: 'pages/articles/about-bizdavar-group.html',
      title: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت',
      excerpt: 'شناسنامه کامل بیزدوار: بنیان‌گذار، ۱۱ کشور، ۱۰۰+ پروژه و اکوسیستم برندها.',
      category: 'درباره شرکت',
      catId: 'company',
      date: '2025-06-01',
      image: 'assets/images/content/about-hero.jpg',
      relatedService: 'pages/about.html'
    },
    {
      slug: 'pages/biztab.html',
      title: 'BizTab — اولین دماسنج دیواری غیرتماسی تبریز',
      excerpt: 'محصول اختصاصی تیم بیزدوار — دقت کمتر از ۰.۳ درجه، تأیید دانشگاه تبریز.',
      category: 'محصول اختصاصی',
      catId: 'products',
      date: '2020-03-16',
      image: 'assets/images/gallery/expo-tabrizu-incubator.jpg',
      relatedService: 'pages/biztab.html'
    },
    {
      slug: 'pages/bizsanitizer-v5.html',
      title: 'دستگاه ضدعفونی دست بیزدوار V5',
      excerpt: 'سنسور التراسونیک و پاشش خودکار — مهندسی‌شده توسط تیم بیزدوار.',
      category: 'محصول اختصاصی',
      catId: 'products',
      date: '2021-06-01',
      image: 'assets/images/gallery/expo-imen-booth.jpg',
      relatedService: 'pages/bizsanitizer-v5.html'
    },
    {
      slug: 'pages/bizpad.html',
      title: 'BizPad — پد حرارتی بیز پد',
      excerpt: 'طراحی و تولید در مرکز رشد فناوری دانشگاه تبریز با همکاری ایمن سهند پدیده.',
      category: 'محصول اختصاصی',
      catId: 'products',
      date: '2020-09-01',
      image: 'assets/images/products/bizpet/bizpet-grey.jpg',
      relatedService: 'pages/bizpad.html'
    },
    {
      slug: 'pages/articles/marvi-society-ios-app.html',
      title: 'توسعه اپ iOS — نمونه‌کار Marvi Society و انتشار App Store',
      excerpt: 'از UI/UX تا Swift و App Store — کلاب creator دعوت‌محور در استانبول.',
      category: 'طراحی اپ',
      catId: 'web',
      date: '2026-08-01',
      image: 'assets/images/content/marvi-society/screen-discover.jpg',
      relatedService: 'pages/marvi-society.html'
    },
    {
      slug: 'pages/articles/prosense-gas-detection.html',
      title: 'تامین دتکتور گاز Prosense — از انتخاب مدل تا نصب',
      excerpt: 'راهنمای دتکتور گاز و شعله برای نفت، پتروشیمی و HVAC — استعلام B2B.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-06-15',
      image: 'assets/images/prosense/slides/pq-sil.jpg',
      relatedService: 'pages/prosense.html'
    },
    {
      slug: 'pages/articles/liqui-moly-supply-iran.html',
      title: 'تامین Liqui Moly آلمان — روغن و افزودنی اصل',
      excerpt: 'مسیر استعلام روغن موتور و افزودنی برای ناوگان و کارگاه — B2B بیزدوار.',
      category: 'تجهیزات صنعتی',
      catId: 'industrial',
      date: '2026-06-01',
      image: 'assets/images/liqui-moly/octane-plus.jpg',
      relatedService: 'pages/liqui-moly.html'
    },
    {
      slug: 'pages/articles/field-tech-services.html',
      title: 'خدمات فنی میدانی بیزدوار — تبریز',
      excerpt: 'دوربین، سیم‌کشی و نورمخفی — هماهنگی واتساپ و اجرای میدانی.',
      category: 'خدمات فنی',
      catId: 'company',
      date: '2026-05-10',
      image: 'assets/images/content/field-tech-hero.svg',
      relatedService: 'pages/field-tech.html'
    },
    {
      slug: 'pages/articles/local-seo-iran.html',
      title: 'سئو محلی برای کسب‌وکار ایران — Google Maps',
      excerpt: 'Google Business Profile، NAP یکسان و صفحات محلی — مسیر عملی رشد.',
      category: 'بازاریابی دیجیتال',
      catId: 'digital',
      date: '2026-04-20',
      image: 'assets/images/content/network-map.svg',
      relatedService: 'pages/services.html#digital-marketing'
    },
    {
      slug: 'pages/fxguard-exchange.html',
      title: 'FXGuard Exchange — پلتفرم صرافی و OTC',
      excerpt: 'نمونه‌کار فین‌تک: KYC، کیف پول، OTC و پنل ادمین — توسعه بیزدوار.',
      category: 'فین‌تک',
      catId: 'web',
      date: '2024-11-01',
      image: 'assets/images/products/fxguard/fxguard-hero.svg',
      relatedService: 'pages/fxguard-exchange.html'
    }
  ],

  trustMetrics: [
    { value: '+100', label: 'پروژه دیجیتال' },
    { value: '11', label: 'کشور فعال' },
    { value: '12+', label: 'سال تجربه' },
    { value: '35', label: 'پروژه و برند' }
  ],

  featuredPartners: [
    { name: 'ZedPay', url: 'https://zed-pay.com', logo: 'assets/images/partners/zedpay.png', role: 'ecosystem' },
    { name: 'Netinode', url: 'https://netinode.net/', logo: 'assets/images/partners/netinode.svg?v=2', role: 'ecosystem' },
    { name: 'BZ Diamond', url: 'pages/bz-diamond.html', logo: 'assets/images/partners/zeddiamond.png', role: 'case-study' },
    { name: 'Marvispace', url: 'pages/marvispace.html', logo: 'assets/images/partners/marvispace.svg', role: 'case-study' },
    { name: 'Supplify Trade', url: 'pages/supplify-trade.html', logo: 'assets/images/partners/supplify-trade.svg', role: 'case-study' },
    { name: 'Kaya One AG', url: 'pages/kaya-one.html', logo: 'assets/images/partners/kaya-one.svg', role: 'case-study' },
    { name: 'SMM Turk', url: 'pages/smm-turk.html', logo: 'assets/images/partners/smm-turk.svg', role: 'case-study' },
    { name: 'Marvi Society', url: 'pages/marvi-society.html', logo: 'assets/images/partners/marvi-society.png', role: 'case-study' },
    { name: 'FXGuard Exchange', url: 'pages/fxguard-exchange.html', logo: 'assets/images/partners/fxguard-exchange.svg', role: 'case-study' },
    { name: 'Biztejarat', url: 'pages/biztejarat.html', logo: 'assets/images/partners/biztejarat.svg', role: 'case-study' },
    { name: 'Marvelous Holding', url: 'https://marvelousholding.com', logo: 'assets/images/partners/marvelous-holding.png', role: 'client' },
    { name: 'Grafik Travel', url: 'https://grafiktravel.com/', logo: 'assets/images/partners/grafik-travel.png', role: 'client' },
    { name: 'پتروشیمی تبریز', url: 'https://tpco.ir', logo: 'assets/images/partners/petrotabriz.png', role: 'client' },
    { name: 'Karen Leather', url: 'https://karenleather.com', logo: 'assets/images/partners/karen-leather.png', role: 'client' },
    { name: 'NIK Aesthetic', url: 'https://nikaesthetic.com', logo: 'assets/images/partners/nikaesthetic.png', role: 'client' },
    { name: 'Paparosi', url: 'https://paparosi.co', logo: 'assets/images/partners/paparosi.png', role: 'client' }
  ],

  industrialProducts: [
    {
      name: 'VEGA',
      title: 'سنسور و ابزار دقیق',
      desc: 'اندازه‌گیری سطح، فشار، جریان و سوئیچ — استاندارد صنایع نفت، پتروشیمی و آب',
      logo: 'assets/images/partners/vega.svg',
      photo: 'assets/images/vega/product-vegapuls-6x-photo.webp',
      url: 'pages/vega',
      internal: true,
      badge: 'آلمان',
      accent: 'vega',
      tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'],
      cta: 'مشاهده کاتالوگ'
    },
    {
      name: 'UWT',
      title: 'سنسور سطح سیلو',
      desc: 'Rotonivo، Vibranivo، NivoRadar و NivoGuide — سوئیچ و رادار سطح برای جامدات فله و مایعات',
      logo: 'assets/images/partners/uwt.svg',
      photo: 'assets/images/uwt/product-rn3001-studio.png',
      url: 'pages/uwt',
      internal: true,
      badge: 'آلمان',
      accent: 'navy',
      tags: ['Rotonivo', 'NivoRadar', 'Vibranivo'],
      cta: 'کاتالوگ UWT'
    },
    {
      name: 'Prosense',
      title: 'دتکتور گاز و شعله',
      desc: 'سیستم‌های ثابت و پرتابل با گواهی SIL2/3 — مناسب معدن، پتروشیمی و پارکینگ',
      logo: 'assets/images/partners/prosense.svg',
      photo: 'assets/images/prosense/industry-mining.webp',
      url: 'pages/prosense',
      internal: true,
      badge: 'ترکیه',
      accent: 'teal',
      tags: ['PQ+', 'SafeVader', 'PPS'],
      cta: 'سری‌های محصول'
    },
    {
      name: 'Teltonika',
      title: 'GPS و Fleet Telematics',
      desc: 'ردیاب ناوگان، CAN/OBD، BLE، ویدئو — FMB920، FMC650، FTC305 و راهکارهای IoT',
      logo: 'assets/images/partners/teltonika.png',
      photo: 'assets/images/teltonika/hero/fleet-telematics.webp',
      url: 'pages/teltonika',
      internal: true,
      badge: 'لیتوانی',
      accent: 'blue',
      tags: ['FMB920', 'FTC305', 'DualCam'],
      cta: 'کاتالوگ Teltonika'
    },
    {
      name: 'Gamak',
      title: 'الکتروموتور صنعتی',
      desc: 'موتورهای الکتریکی سه‌فاز و تک‌فاز — تامین، مشاوره انتخاب و پشتیبانی فنی',
      logo: 'assets/images/partners/gamak.svg',
      photo: 'assets/images/gamak/category-three-phase.webp',
      url: 'pages/gamak',
      internal: true,
      badge: 'ترکیه',
      accent: 'navy',
      tags: ['IE2/IE3', 'فلنج‌دار', 'پروژه‌ای'],
      cta: 'اطلاعات Gamak'
    },
    {
      name: 'Teraoka',
      title: 'ترازو و تجهیزات فروشگاهی',
      desc: 'تامین کامل محصولات Teraoka Seiko — ترازو، برچسب‌زن، POS و تجهیزات فروشگاهی و صنعتی',
      logo: 'assets/images/partners/teraoka.svg',
      photo: 'assets/images/content/home-brand-teraoka.webp',
      url: 'pages/teraoka',
      internal: true,
      badge: 'ژاپن',
      accent: 'blue',
      tags: ['Scales', 'Labeling', 'POS'],
      cta: 'مشاهده برند'
    },
    {
      name: 'Liqui Moly',
      title: 'روغن و افزودنی خودرو',
      desc: 'روغن موتور، Octane Plus، افزودنی دیزل و مراقبت خودرو — قیمت دلاری شفاف',
      logo: 'assets/images/partners/liqui-moly.svg',
      photo: 'assets/images/content/home-brand-liqui-moly.webp',
      url: 'pages/liqui-moly',
      internal: true,
      badge: 'آلمان',
      accent: 'navy',
      tags: ['Octane Plus', 'Top Tec', '5W-30'],
      cta: 'کاتالوگ و قیمت'
    }
  ],

  processSteps: [
    { num: '۰۱', title: 'تحلیل و مشاوره', desc: 'بررسی اهداف کسب‌وکار، مخاطب هدف و اولویت‌های دیجیتال — مشاوره اولیه رایگان.' },
    { num: '۰۲', title: 'طراحی راهکار', desc: 'تدوین استراتژی، انتخاب پلتفرم و برنامه اجرایی متناسب با بودجه و زمان‌بندی.' },
    { num: '۰۳', title: 'اجرا و تحویل', desc: 'پیاده‌سازی حرفه‌ای — از کمپین دیجیتال تا سایت و تامین تجهیزات صنعتی.' },
    { num: '۰۴', title: 'پشتیبانی و رشد', desc: 'بهینه‌سازی مستمر، گزارش‌دهی شفاف و همراهی بلندمدت برای رشد پایدار.' }
  ],

  portfolio: [
    { name: 'ZedPay', domain: 'zed-pay.com', category: 'فین‌تک / توسعه وب‌اپ', role: 'case-study', internal: false, logo: 'assets/images/partners/zedpay.png', note: 'نمونه‌کار — مدیریت تیم برنامه‌نویسی و توسعه، طراحی وب‌اپلیکیشن، مدیریت شبکه و امنیت، مدیریت ایمیل و ایجاد زیرساخت‌های اولیه' },
    { name: 'ZedGate IO', domain: 'zedgate.io', category: 'زیرساخت فین‌تک', role: 'ecosystem', internal: false, archived: true, logo: 'assets/images/partners/zedgate-io.png', note: 'پروژه غیرفعال' },
    { name: 'ZedGP', domain: 'zedgp.com', category: 'خدمات مالی', role: 'ecosystem', internal: false, archived: true, logo: 'assets/images/partners/zedgp.png', note: 'پروژه غیرفعال' },
    { name: 'ZedX DMCC', domain: 'zedxdmcc.com', category: 'طراحی وب / زیرساخت', role: 'case-study', internal: false, logo: 'assets/images/partners/zedxdmcc.png', note: 'نمونه‌کار — طراحی وبسایت و زیرساخت' },
    { name: 'BZ Diamond', domain: 'bzdiamond.com', category: 'طراحی وب / فروشگاه', role: 'case-study', internal: true, slug: 'pages/bz-diamond.html', logo: 'assets/images/partners/zeddiamond.png', note: 'نمونه‌کار — WooCommerce و مدیریت ایمیل' },
    { name: 'Supplify Trade', domain: 'supplifytrade.com', url: 'https://supplifytrade.com/', category: 'طراحی وب / تجارت بین‌المللی B2B', role: 'case-study', internal: true, slug: 'pages/supplify-trade.html', logo: 'assets/images/partners/supplify-trade.svg', note: 'نمونه‌کار — وبسایت شرکتی تجارت و sourcing با لایسنس RAKEZ امارات' },
    { name: 'Kaya One AG', domain: 'kayaone.ch', url: 'https://kayaone.ch/', category: 'طراحی وب / تجارت سوئیسی B2B', role: 'case-study', internal: true, slug: 'pages/kaya-one.html', logo: 'assets/images/partners/kaya-one.svg', note: 'نمونه‌کار — وبسایت شرکتی تجارت و راهکارهای صنعتی سوئیس (Brunnen)' },
    { name: 'Zed Diamond', domain: 'zeddiamond.com', category: 'طراحی وب / فروشگاه جواهرات', role: 'case-study', internal: false, logo: 'assets/images/partners/zeddiamond.png', note: 'نمونه‌کار — طراحی وبسایت فروشگاهی و تولید محتوا' },
    { name: 'BZ Broker', domain: 'bzbroker.com', category: 'طراحی وب / بروکر', role: 'case-study', internal: false, logo: 'assets/images/partners/bz-broker.png', note: 'نمونه‌کار — طراحی وبسایت و تولید محتوا' },
    { name: 'BZ Payment', domain: 'bz-payment.com', category: 'پرداخت', role: 'ecosystem', internal: false, logo: 'assets/images/partners/bz-payment.png' },
    { name: 'BlueNil Air', domain: 'bluenil-air.com', category: 'هواپیمایی', role: 'client', internal: false, archived: true, logo: 'assets/images/partners/bluenil-air.png', note: 'پروژه گذشته — وبسایت به‌دلیل عدم تمدید سرور در دسترس نیست' },
    { name: 'Bridged3', domain: 'bridged3.com', category: 'مارکت‌پلیس B2B / فروشگاه', role: 'case-study', internal: false, archived: true, logo: 'assets/images/partners/bridged3.png', note: 'نمونه‌کار ناتمام — هدف پروژه ایجاد فروشگاه B2B و مارکت‌پلیس عمده‌فروشی (مدل علی‌بابا) بود' },
    { name: 'iBan2iBan', domain: 'iban2iban.com', category: 'زیرساخت ایمیل / SMTP', role: 'case-study', internal: false, logo: 'assets/images/partners/iban2iban.png', note: 'نمونه‌کار — راه‌اندازی سیستم مدیریت SMTP' },
    { name: 'Bear Event', domain: 'bearevent.co', category: 'رویداد و بلیت', role: 'ecosystem', internal: false, logo: 'assets/images/partners/bear-event.png' },
    { name: 'Netinode', domain: 'netinode.net', url: 'https://shop.netinode.net/', category: 'دامنه، هاست و سرور', role: 'case-study', internal: false, logo: 'assets/images/partners/netinode.svg?v=2', note: 'زیرساخت خود بیزدوار — فروش دامنه و هاست در shop.netinode.net · معرفی سرویس‌ها در netinode.net' },
    { name: 'Fast Web Studio', domain: 'bizdavar.com', category: 'طراحی سایت', role: 'case-study', internal: true, slug: 'pages/fast.html', logo: 'assets/images/partners/fast-studio.png', note: 'محصول اختصاصی بیزدوار — طراحی سایت ۵ روزه' },
    { name: 'BizTab', domain: 'nasrnews.ir', url: 'https://nasrnews.ir/print/16727/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%88-%D8%B3%D8%A7%D8%AE%D8%AA-%D8%A7%D9%88%D9%84%DB%8C%D9%86-%D8%AF%D9%85%D8%A7%D8%B3%D9%86%D8%AC-%D8%AF%DB%8C%D9%88%D8%A7%D8%B1%DB%8C-%D8%BA%DB%8C%D8%B1%D8%AA%D9%85%D8%A7%D8%B3%DB%8C-%D8%AF%D8%B1-%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2', category: 'محصول اختصاصی / IoT و سلامت', role: 'case-study', internal: true, slug: 'pages/biztab.html', logo: 'assets/images/products/biztab/biztab-logo.svg', note: 'محصول اختصاصی — اولین دماسنج دیواری غیرتماسی تبریز، توسعه تیم بیزدوار' },
    { name: 'BizClean V5', domain: 'digikala.com', url: 'https://www.digikala.com/product/dkp-3730222/', category: 'محصول اختصاصی / بهداشت', role: 'case-study', internal: true, slug: 'pages/bizsanitizer-v5.html', logo: 'assets/images/products/bizsanitizer/bizsanitizer-logo.svg', note: 'محصول اختصاصی — دستگاه ضدعفونی دست V5، توسعه در دوران کرونا' },
    { name: 'BizPad', domain: 'digikala.com', url: 'https://www.digikala.com/product/dkp-7694589/', category: 'محصول اختصاصی / پد حرارتی', role: 'case-study', internal: true, slug: 'pages/bizpad.html', logo: 'assets/images/products/bizpet/bizpet-grey.jpg', note: 'محصول اصلی ۱۳۹۹ — پد حرارتی پدیده؛ همان کالا به‌صورت پشتی خودرو در دیجی‌کالا' },
    { name: 'FXGuard', domain: 'fxguard.io', url: 'https://fxguard.io/', category: 'WhatsApp CRM', role: 'case-study', internal: true, slug: 'pages/fxguard.html', logo: 'assets/images/products/fxguard/fxguard-logo.svg', note: 'FXGuard WhatsApp CRM — اینباکس تیمی، تیکت، شعب و ۲FA؛ Cloud از $49/ماه، لایسنس یا Managed — فروش در fxguard.io' },
    { name: 'BizSwap', domain: 'Web3 · DeFi Module', category: 'Web3 / پیش‌فروش و سواپ توکن', role: 'case-study', internal: true, slug: 'pages/bizswap.html', logo: 'assets/images/products/bizswap/bizswap-logo.svg', note: 'نمونه‌کار — ماژول پیش‌فروش و سواپ on-chain (BEP-20)، اتصال کیف پول و UI DeFi؛ توسعه تیم بیزدوار' },
    { name: 'FXGuard Exchange', domain: 'exchange.fxguard.io', url: 'https://exchange.fxguard.io/', category: 'طراحی وب / صرافی و فین‌تک', role: 'case-study', internal: true, slug: 'pages/fxguard-exchange.html', logo: 'assets/images/partners/fxguard-exchange.svg', note: 'نمونه‌کار — پلتفرم تبادل تومان و لیر با نرخ زنده، KYC و پیگیری سفارش' },
    { name: 'FXGuard Accounting', domain: 'accounting.fxguard.io', url: 'https://accounting.fxguard.io/', category: 'نرم‌افزار حسابداری / فینانس', role: 'case-study', internal: true, slug: 'pages/fxguard-accounting.html', logo: 'assets/images/partners/fxguard-accounting.svg', note: 'محصول FXGuard — سامانه حسابداری برای تیم‌های مالی، صرافی و SME؛ بخشی از سوئیت fxguard.io' },
    { name: 'Marvispace', domain: 'marvispace.com', url: 'https://marvispace.com/', category: 'طراحی وب / فروشگاه محصولات چرمی', role: 'case-study', internal: true, slug: 'pages/marvispace.html', logo: 'assets/images/partners/marvispace.svg', note: 'نمونه‌کار برنامه‌نویسی و توسعه فروشگاه آنلاین اختصاصی برای محصولات چرمی — کاتالوگ، سبد خرید و پنل مدیریت' },
    { name: 'Marvi Society', domain: 'marvisociety.com', url: 'https://marvisociety.com', appStoreUrl: 'https://apps.apple.com/us/app/marvi-society/id6783450762', category: 'توسعه اپ موبایل / lifestyle و creator', role: 'case-study', internal: true, slug: 'pages/marvi-society.html', logo: 'assets/images/partners/marvi-society.png', note: 'نمونه‌کار — طراحی، برنامه‌نویسی و راه‌اندازی صفر تا صد اپ iOS؛ کلاب دعوت‌محور همکاری creator و مکان تأییدشده در استانبول — کشف مکان، check-in، ارسال مدرک بازدید، پروفایل TR/EN؛ منتشر در App Store' },
    { name: 'GooPay AI', domain: 'goopay.ai', category: 'هوش مصنوعی / نرم‌افزار اختصاصی', role: 'case-study', internal: false, logo: 'assets/images/partners/goopay-ai.svg', note: 'نمونه‌کار — طراحی و برنامه‌نویسی اختصاصی سیستم‌های هوش مصنوعی' },
    { name: 'Grafik Travel', domain: 'grafiktravel.com', url: 'https://grafiktravel.com/', category: 'طراحی وب / گردشگری و MICE', role: 'case-study', internal: false, logo: 'assets/images/partners/grafik-travel.png', note: 'نمونه‌کار — طراحی وبسایت تخصصی برای مجموعه گردشگری و خدمات سازمانی' },
    { name: 'Biztejarat', domain: 'instagram.com/biztejarat', category: 'مدیریت SMM / اینستاگرام', role: 'case-study', internal: true, slug: 'pages/biztejarat.html', archived: true, logo: 'assets/images/partners/biztejarat.svg', note: 'پروژه گذشته — این کسب‌وکار فعلاً غیرفعال شده است' },
    { name: 'Arian Pumps', domain: 'arianpumps.com', category: 'طراحی وب / B2B', role: 'case-study', internal: false, logo: 'assets/images/partners/arian-pumps.png', note: 'نمونه‌کار — طراحی وب و خدمات دیجیتال' },
    { name: 'Marvelous Holding', domain: 'marvelousholding.com', url: 'https://marvelousholding.com', category: 'طراحی وب / هلدینگ و سرمایه‌گذاری', role: 'case-study', internal: false, logo: 'assets/images/partners/marvelous-holding.png', note: 'نمونه‌کار — وبسایت هلدینگ، سرمایه‌گذاری و معرفی زیرمجموعه‌ها' },
    { name: 'SMM Turk', domain: 'smm-turk.com', url: 'https://smm-turk.com/', category: 'طراحی وب / پنل SMM', role: 'case-study', internal: true, slug: 'pages/smm-turk.html', logo: 'assets/images/partners/smm-turk.svg', note: 'نمونه‌کار — طراحی وبسایت و پنل SMM با برنامه نمایندگی و پرداخت کریپتو' },
    { name: 'JMS Elettropompe', domain: 'jmselettropompe.it', category: 'طراحی وب / پمپ صنعتی', role: 'case-study', internal: false, logo: 'assets/images/partners/jms-elettropompe.svg', note: 'نمونه‌کار — وب B2B الکتروموتور و پمپ ایتالیا' },
    { name: 'Karen Leather', domain: 'karenleather.com', url: 'https://karenleather.com', category: 'طراحی وب / چرم و مد', role: 'case-study', internal: false, logo: 'assets/images/partners/karen-leather.png', note: 'نمونه‌کار — برند چرم و پوشاک؛ وب، بازاریابی محصول، تولید محتوا و عکاسی صنعتی' },
    { name: 'Paparosi', domain: 'paparosi.co', url: 'https://paparosi.co', category: 'طراحی وب / برند تجاری', role: 'case-study', internal: false, logo: 'assets/images/partners/paparosi.png', note: 'نمونه‌کار — وبسایت و هویت برند تجاری' },
    { name: 'NIK Aesthetic', domain: 'nikaesthetic.com', url: 'https://nikaesthetic.com', category: 'طراحی وب / کلینیک زیبایی', role: 'case-study', internal: false, logo: 'assets/images/partners/nikaesthetic.png', note: 'نمونه‌کار — کلینیک بین‌المللی زیبایی و پزشکی' },
    { name: 'Adak Sepehr', domain: 'adaksepehr.com', category: 'تامین و فروش / تجهیزات صنعتی', role: 'case-study', internal: false, logo: 'assets/images/partners/adak-sepehr.png', note: 'نمونه‌کار — همکاری در تامین و فروش' },
    { name: 'Alimila', domain: 'alimila.com', category: 'برندینگ و بازاریابی ۳۶۰°', role: 'case-study', internal: false, logo: 'assets/images/partners/alimila.png', note: 'نمونه‌کار — طراحی لوگو، مدیریت شبکه‌های اجتماعی، تولید محتوا، طراحی وبسایت، بازاریابی و استراتژی فروش و طراحی بسته‌بندی محصولات' },
    { name: 'Bamauk Visa', domain: 'bamaukvisa.com', url: 'https://bamaukvisa.com', category: 'طراحی وب / مهاجرت و ویزا', role: 'case-study', internal: false, logo: 'assets/images/partners/bamauk-visa.png', note: 'نمونه‌کار — مشاوره مهاجرت به انگلستان، هلند و اتریش؛ ویزای تحصیلی، کاری، سرمایه‌گذاری و خانوادگی' },
    { name: 'Honar Shop', domain: 'honarshop.com', category: 'طراحی وب / تولید محتوا', role: 'case-study', internal: false, logo: 'assets/images/partners/honar-shop.png', note: 'نمونه‌کار — عکاسی صنعتی از محصولات، تولید محتوا و طراحی وبسایت' },
    { name: 'Smith Tradeland', domain: 'smithtradeland.com', category: 'طراحی وب / تولید محتوا / امنیت', role: 'case-study', internal: false, logo: 'assets/images/partners/smith-tradeland.webp', note: 'نمونه‌کار — طراحی وبسایت، تولید محتوا و امنیت' },
    { name: 'Imensa', domain: 'imensa.com', category: 'سرمایه‌گذاری / نوآوری', role: 'case-study', internal: false, logo: 'assets/images/partners/imensa.png', note: 'نمونه‌کار — سرمایه‌گذاری، تولید محصولات نوآورانه و خلاق، ایده‌پردازی و توسعه کسب‌وکار' },
    { name: 'HangerStyle', domain: 'hangerstyle.com', category: 'سفارش بین‌المللی / مد و پوشاک', role: 'case-study', internal: false, logo: 'assets/images/partners/hanger-style.png', note: 'نمونه‌کار — ثبت سفارش از وبسایت‌های بین‌المللی' },
    { name: 'Havana', domain: 'havana.com', category: 'مشاوره تبلیغات / پشتیبانی وب', role: 'case-study', internal: false, logo: 'assets/images/partners/havana.png', note: 'نمونه‌کار — مشاوره تبلیغاتی، پشتیبانی وب، امنیت شبکه و تولید محتوا' },
    { name: 'Sanat Moharek', domain: 'sanatm.com', category: 'طراحی وب / بازاریابی صنعتی', role: 'case-study', internal: false, logo: 'assets/images/partners/sanat-moharek.png', note: 'نمونه‌کار — طراحی وب، بازاریابی، مدیریت شبکه‌های اجتماعی و مشاوره تبلیغاتی' },
    { name: 'هتل شایان تبریز', domain: 'hotel-shayan.com', url: 'https://hotel-shayan.com', category: 'طراحی وب / هتلداری و گردشگری', role: 'case-study', internal: false, logo: 'assets/images/partners/hotel-shayan.png', note: 'نمونه‌کار — وبسایت هتل ۴ ستاره تبریز؛ رزرو، معرفی اتاق‌ها و خدمات اقامتی' },
    { name: 'Ajansin', domain: 'ajansin.com', url: 'https://ajansin.com', category: 'طراحی وب / آژانس دیجیتال', role: 'case-study', internal: false, logo: 'assets/images/partners/ajansin.svg', note: 'نمونه‌کار — وبسایت آژانس دیجیتال بیزدوار با Next.js و React؛ طراحی وب، UI/UX، فروشگاه آنلاین و سئو' },
    { name: 'Bizdavar Group', domain: 'bizdavar.com', url: 'https://bizdavar.com', category: 'طراحی وب / آژانس دیجیتال', role: 'case-study', internal: false, logo: 'assets/images/brand/bizdavar-logo.png', note: 'وبسایت شرکتی چندزبانه (fa/tr/en) — خدمات دیجیتال، تامین صنعتی، محصولات، نمونه‌کارها و Fast Studio' },
    { name: 'Ersan Jahed Tabrizi', domain: 'ersanjahedtabrizi.ir', url: 'https://ersanjahedtabrizi.ir', category: 'طراحی وب / رزومه و معرفی شخصی', role: 'case-study', internal: false, logo: 'assets/images/partners/ersan-jahed-tabrizi.svg', note: 'نمونه‌کار — رزومه و معرفی شخصی بنیان‌گذار؛ timeline حرفه‌ای، مهارت‌ها، نمونه لوگو و دانلود CV' },
    { name: 'Europe Gayrimenkul', domain: 'europegayrimenkul.com', url: 'https://europegayrimenkul.com', category: 'طراحی وب / املاک و سرمایه‌گذاری', role: 'case-study', internal: false, logo: 'assets/images/partners/europe-gayrimenkul.svg', note: 'نمونه‌کار — املاک استانبول؛ فروش، اجاره روزانه/ماهانه، اقامت (oturum)، سند tapu و مشاوره چندزبانه (TR/EN/AR/FA)' },
    { name: 'Erst Investment', domain: 'erstinvestment.com', url: 'https://erstinvestment.com', category: 'طراحی وب / سرمایه‌گذاری', role: 'case-study', internal: false, logo: 'assets/images/partners/erst-investment.svg', note: 'نمونه‌کار — وبسایت شرکت سرمایه‌گذاری (راه‌اندازی و پیکربندی hosting/DNS)' },
    { name: 'Mandella Chocolate', domain: 'mandellachocolate.com', url: 'https://mandellachocolate.com', category: 'طراحی وب / کافه و رستوران', role: 'case-study', internal: false, logo: 'assets/images/partners/mandella-chocolate.svg', note: 'نمونه‌کار — کافه قهوه و شکلات در ارزروم؛ منوی QR، گالری و معرفی مکان' },
    { name: 'Netino Host', domain: 'netinohost.com', url: 'https://netinohost.com', category: 'طراحی وب / هاستینگ', role: 'case-study', internal: false, logo: 'assets/images/partners/netinohost.png', note: 'نمونه‌کار — پلتفرم فروش هاست، VPS، ایمیل و دامنه فارسی؛ WHMCS و بازار ایران' },
    { name: 'پتروشیمی تبریز', domain: 'tpco.ir', category: 'تامین تجهیزات صنعتی / پتروشیمی', role: 'case-study', internal: false, logo: 'assets/images/partners/petrotabriz.png', note: 'نمونه‌کار — تامین تجهیزات صنعتی' }
  ]
};

window.getWhatsappUrl = function (message) {
  const C = window.BIZDAVAR_CONFIG;
  const num = window.BD_CTX?.getPrimaryWhatsapp?.() || C?.contact?.whatsapp;
  if (!C || !num) return window.resolvePath(C.routes.contact);
  if (window.BD_CTX?.buildWaUrl) {
    const url = window.BD_CTX.buildWaUrl(num);
    if (message) {
      return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
    }
    return url;
  }
  const text = message || C.contact.whatsappMessage;
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
};

window.getProjectUrl = function (project) {
  if (project.internal && project.slug) return window.resolvePath(project.slug);
  if (project.url) return project.url;
  return `https://${project.domain}`;
};
