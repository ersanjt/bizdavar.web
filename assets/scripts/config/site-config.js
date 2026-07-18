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
    services: 'pages/services.html',
    portfolio: 'pages/portfolio.html',
    fast: 'pages/fast.html',
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
    fxguardExchange: 'pages/fxguard-exchange.html',
    biztejarat: 'pages/biztejarat.html',
    biztab: 'pages/biztab.html',
    bizsanitizerV5: 'pages/bizsanitizer-v5.html',
    fxguard: 'pages/fxguard.html',
    bizswap: 'pages/bizswap.html',
    products: 'pages/products.html',
    gamak: 'pages/gamak.html',
    digiSystem: 'pages/digi-system.html',
    teraoka: 'pages/teraoka.html',
    articles: {
      digitalMarketing: 'pages/articles/digital-marketing.html',
      whatIsDigitalMarketing: 'pages/articles/what-is-digital-marketing.html',
      socialMediaManagement: 'pages/articles/social-media-management.html',
      fastStudio: 'pages/articles/fast-studio.html',
      industrialSensors: 'pages/articles/industrial-sensors.html',
      aboutBizdavar: 'pages/articles/about-bizdavar-group.html'
    }
  },

  /** Owned products — nav dropdown under «محصولات ما» */
  productNav: {
    overviewRoute: 'products',
    groups: [
      {
        id: 'software',
        labelKey: 'nav.productsSoftware',
        items: [
          { route: 'fxguard', page: 'fxguard', label: 'CRM واتساپ', descKey: 'nav.productFxguardDesc', badgeKey: 'nav.productFxguardBadge' },
          { route: 'bizswap', page: 'bizswap', label: 'BizSwap', descKey: 'nav.productBizswapDesc' }
        ]
      },
      {
        id: 'hardware',
        labelKey: 'nav.productsHardware',
        items: [
          { route: 'biztab', page: 'biztab', label: 'BizTab', descKey: 'nav.productBiztabDesc' },
          { route: 'bizsanitizerV5', page: 'bizsanitizer-v5', label: 'BizClean', descKey: 'nav.productBizcleanDesc' }
        ]
      }
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
    ogImage: 'assets/images/content/about-hero.svg',
    heroImage: 'assets/images/content/hero-home.svg',
    aboutImage: 'assets/images/content/about-hero.svg'
  },

  /** Formspree — set formId from formspree.io and enabled: true to use server submit */
  formspree: {
    formId: '',
    enabled: false
  },

  /** BizHub — internal CRM + CMS (PHP API on /api) */
  bizhub: {
    enabled: false,
    apiBase: '/api'
  },

  contact: {
    email: 'info@bizdavar.com',
    phone: '+905010676486',
    phoneDisplay: '+90 501 067 6486 · +98 930 588 0135',
    whatsapp: '905010676486',
    whatsappMessage: 'سلام، از وبسایت bizdavar.com پیام می‌دهم.',
    channels: [
      { id: 'tr', label: 'ترکیه', display: '+90 501 067 6486', tel: '+905010676486', whatsapp: '905010676486' },
      { id: 'ir', label: 'ایران', display: '+98 930 588 0135', tel: '+989305880135', whatsapp: '989305880135' }
    ],
    address: 'استانبول، ترکیه',
    workingHours: '۷/۲۴ — همیشه در دسترس',
    linkedin: 'https://www.linkedin.com/in/ersanjt',
    instagram: 'https://www.instagram.com/bizdavar'
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
    address: 'تبریز، خیابان رودکی، کوی جانفشان، ۱۲ متری اول، پلاک ۶',
    streetAddress: 'خیابان رودکی، کوی جانفشان، ۱۲ متری اول، پلاک ۶',
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
    headquarters: { city: 'استانبول', country: 'ترکیه', countryCode: 'TR' },
    summaryFa: 'خدمات از استانبول به ایران، ترکیه و ۱۱ کشور — مشاوره فارسی، واتساپ و تحویل بین‌المللی.',
    hubs: [
      { city: 'استانبول', country: 'ترکیه', code: 'TR', role: 'دفتر اصلی · فین‌تک و عملیات بین‌المللی' },
      { city: 'تبریز', country: 'ایران', code: 'IR', role: 'بازار ایران · پروژه‌های صنعتی و دیجیتال' },
      { city: 'ایروان', country: 'ارمنستان', code: 'AM', role: 'ثبت شرکت · Bizdavar Group LLC' },
    ],
    markets: ['ایران', 'ترکیه', 'امارات', 'آلمان', 'ارمنستان', 'عراق', 'گرجستان', 'لبنان', 'ایتالیا', 'انگلستان', 'آمریکا']
  },

  seo: {
    defaultTitle: 'بیزدوار گروپ | خدمات دیجیتال، طراحی سایت و تامین تجهیزات صنعتی',
    defaultDescription: 'بیزدوار گروپ — آژانس دیجیتال با ۱۲+ سال تجربه و ۱۰۰+ پروژه در ۱۱ کشور. بازاریابی دیجیتال، طراحی وب، فین‌تک، SMM و تامین تجهیزات صنعتی VEGA و Prosense.',
    keywords: 'بیزدوار, Bizdavar Group, BizTab, BizClean, ضدعفونی دست, بازاریابی دیجیتال, طراحی سایت, VEGA, Prosense, Fast Web Studio, آژانس دیجیتال استانبول',
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
      taglineFa: 'دامنه، هاست، WordPress و SSL',
      taglineEn: 'Domains, hosting, WordPress & SSL'
    }
  },

  services: [
    { id: 'digital-marketing', title: 'بازاریابی دیجیتال', slug: 'pages/services.html#digital-marketing' },
    { id: 'web-design', title: 'طراحی و توسعه وب', slug: 'pages/fast.html' },
    { id: 'smm', title: 'مدیریت SMM', slug: 'pages/services.html#smm' },
    { id: 'industrial', title: 'تامین تجهیزات صنعتی', slug: 'pages/services.html#industrial' }
  ],

  blogPosts: [
    {
      slug: 'pages/articles/what-is-digital-marketing.html',
      title: 'دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها',
      excerpt: 'تعریف بازاریابی دیجیتال، کانال‌ها و نقش آن در رشد فروش آنلاین.',
      category: 'بازاریابی دیجیتال',
      date: '2025-02-10',
      relatedService: 'pages/services.html#digital-marketing'
    },
    {
      slug: 'pages/articles/digital-marketing.html',
      title: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟',
      excerpt: 'راهکارهای عملی برای تبدیل بازدیدکننده به مشتری.',
      category: 'بازاریابی دیجیتال',
      date: '2025-04-01',
      relatedService: 'pages/services.html#digital-marketing'
    },
    {
      slug: 'pages/articles/social-media-management.html',
      title: 'مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها',
      excerpt: 'تولید محتوا، تقویم انتشار و تبلیغات هدفمند در اینستاگرام و لینکدین.',
      category: 'مدیریت SMM',
      date: '2025-03-05',
      relatedService: 'pages/services.html#smm'
    },
    {
      slug: 'pages/articles/fast-studio.html',
      title: 'راه‌اندازی سایت در ۵ روز — راهنمای کامل Fast Studio',
      excerpt: 'معرفی پلن‌های Fast Web Studio برای استارتاپ‌ها.',
      category: 'طراحی وب',
      date: '2025-05-15',
      relatedService: 'pages/fast.html'
    },
    {
      slug: 'pages/articles/industrial-sensors.html',
      title: 'انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق',
      excerpt: 'نکات مهم در تامین تجهیزات VEGA و ابزار دقیق.',
      category: 'تجهیزات صنعتی',
      date: '2025-03-20',
      relatedService: 'pages/services.html#industrial'
    },
    {
      slug: 'pages/articles/about-bizdavar-group.html',
      title: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت',
      excerpt: 'شناسنامه کامل بیزدوار: بنیان‌گذار، ۱۱ کشور، ۱۰۰+ پروژه و اکوسیستم برندها.',
      category: 'درباره شرکت',
      date: '2025-06-01',
      relatedService: 'pages/about.html'
    },
    {
      slug: 'pages/biztab.html',
      title: 'BizTab — اولین دماسنج دیواری غیرتماسی تبریز',
      excerpt: 'محصول اختصاصی تیم بیزدوار — دقت کمتر از ۰.۳ درجه، تأیید دانشگاه تبریز.',
      category: 'محصول اختصاصی',
      date: '2020-03-16',
      relatedService: 'pages/biztab.html'
    },
    {
      slug: 'pages/bizsanitizer-v5.html',
      title: 'دستگاه ضدعفونی دست بیزدوار V5',
      excerpt: 'سنسور التراسونیک و پاشش خودکار — مهندسی‌شده توسط تیم بیزدوار.',
      category: 'محصول اختصاصی',
      date: '2021-06-01',
      relatedService: 'pages/bizsanitizer-v5.html'
    }
  ],

  trustMetrics: [
    { value: '+۱۰۰', label: 'پروژه دیجیتال' },
    { value: '۱۱', label: 'کشور فعال' },
    { value: '۱۲+', label: 'سال تجربه' },
    { value: '۳۵', label: 'پروژه و برند' }
  ],

  featuredPartners: [
    { name: 'ZedPay', url: 'https://zed-pay.com', logo: 'assets/images/partners/zedpay.png', role: 'ecosystem' },
    { name: 'Netinode', url: 'https://netinode.net/', logo: 'assets/images/partners/netinohost.png', role: 'ecosystem' },
    { name: 'BZ Diamond', url: 'pages/bz-diamond.html', logo: 'assets/images/partners/zeddiamond.png', role: 'case-study' },
    { name: 'Supplify Trade', url: 'pages/supplify-trade.html', logo: 'assets/images/partners/supplify-trade.svg', role: 'case-study' },
    { name: 'Kaya One AG', url: 'pages/kaya-one.html', logo: 'assets/images/partners/kaya-one.svg', role: 'case-study' },
    { name: 'SMM Turk', url: 'pages/smm-turk.html', logo: 'assets/images/partners/smm-turk.svg', role: 'case-study' },
    { name: 'FXGuard Exchange', url: 'pages/fxguard-exchange.html', logo: 'assets/images/products/fxguard/fxguard-logo.svg', role: 'case-study' },
    { name: 'Biztejarat', url: 'pages/biztejarat.html', logo: 'assets/images/partners/biztejarat.svg', role: 'case-study' },
    { name: 'Marvelous Holding', url: 'https://marvelousholding.com', logo: 'assets/images/partners/marvelous-holding.png', role: 'client' },
    { name: 'Grafik Travel', url: 'http://grafiktravel.com/', logo: 'assets/images/partners/grafik-travel.png', role: 'client' },
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
      url: 'pages/vega',
      internal: true,
      badge: 'آلمان',
      accent: 'vega',
      tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'],
      cta: 'مشاهده کاتالوگ'
    },
    {
      name: 'Prosense',
      title: 'دتکتور گاز و شعله',
      desc: 'سیستم‌های ثابت و پرتابل با گواهی SIL2/3 — مناسب معدن، پتروشیمی و پارکینگ',
      logo: 'assets/images/partners/prosense.svg',
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
      url: 'pages/gamak',
      internal: true,
      badge: 'ترکیه',
      accent: 'navy',
      tags: ['IE2/IE3', 'فلنج‌دار', 'پروژه‌ای'],
      cta: 'اطلاعات Gamak'
    },
    {
      name: 'Digi System',
      title: 'تجهیزات خرده‌فروشی و POS',
      desc: 'تامین محصولات Digi — ترازو، صندوق فروشگاهی، سیستم‌های POS و تجهیزات خرده‌فروشی',
      logo: 'assets/images/partners/digi-system.svg',
      url: 'pages/digi-system',
      internal: true,
      badge: 'ترکیه',
      accent: 'red',
      tags: ['POS', 'Retail', 'Scales'],
      cta: 'مشاهده محصولات'
    },
    {
      name: 'Teraoka',
      title: 'ترازو و تجهیزات فروشگاهی',
      desc: 'تامین کامل محصولات Teraoka Seiko — ترازو، برچسب‌زن، POS و تجهیزات فروشگاهی و صنعتی',
      logo: 'assets/images/partners/teraoka.svg',
      url: 'pages/teraoka',
      internal: true,
      badge: 'ژاپن',
      accent: 'blue',
      tags: ['Scales', 'Labeling', 'POS'],
      cta: 'مشاهده برند'
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
    { name: 'ZedGate IO', domain: 'zedgate.io', category: 'زیرساخت فین‌تک', role: 'ecosystem', internal: false, archived: true, note: 'پروژه غیرفعال' },
    { name: 'ZedGP', domain: 'zedgp.com', category: 'خدمات مالی', role: 'ecosystem', internal: false, archived: true, note: 'پروژه غیرفعال' },
    { name: 'ZedX DMCC', domain: 'zedxdmcc.com', category: 'طراحی وب / زیرساخت', role: 'case-study', internal: false, logo: 'assets/images/partners/zedxdmcc.png', note: 'نمونه‌کار — طراحی وبسایت و زیرساخت' },
    { name: 'BZ Diamond', domain: 'bzdiamond.com', category: 'طراحی وب / فروشگاه', role: 'case-study', internal: true, slug: 'pages/bz-diamond.html', logo: 'assets/images/partners/zeddiamond.png', note: 'نمونه‌کار — WooCommerce و مدیریت ایمیل' },
    { name: 'Supplify Trade', domain: 'supplifytrade.com', url: 'https://supplifytrade.com/', category: 'طراحی وب / تجارت بین‌المللی B2B', role: 'case-study', internal: true, slug: 'pages/supplify-trade.html', logo: 'assets/images/partners/supplify-trade.svg', note: 'نمونه‌کار — وبسایت شرکتی تجارت و sourcing با لایسنس RAKEZ امارات' },
    { name: 'Kaya One AG', domain: 'kayaone.ch', url: 'https://kayaone.ch/', category: 'طراحی وب / تجارت سوئیسی B2B', role: 'case-study', internal: true, slug: 'pages/kaya-one.html', logo: 'assets/images/partners/kaya-one.svg', note: 'نمونه‌کار — وبسایت شرکتی تجارت و راهکارهای صنعتی سوئیس (Brunnen)' },
    { name: 'Zed Diamond', domain: 'zeddiamond.com', category: 'طراحی وب / فروشگاه جواهرات', role: 'case-study', internal: false, logo: 'assets/images/partners/zeddiamond.png', note: 'نمونه‌کار — طراحی وبسایت فروشگاهی و تولید محتوا' },
    { name: 'BZ Broker', domain: 'bzbroker.com', category: 'طراحی وب / بروکر', role: 'case-study', internal: false, logo: 'assets/images/partners/bz-broker.png', note: 'نمونه‌کار — طراحی وبسایت و تولید محتوا' },
    { name: 'BZ Payment', domain: 'bz-payment.com', category: 'پرداخت', role: 'ecosystem', internal: false, logo: 'assets/images/partners/bz-payment.png' },
    { name: 'BlueNil Air', domain: 'bluenil-air.com', category: 'هواپیمایی', role: 'client', internal: false, archived: true, note: 'پروژه گذشته — وبسایت به‌دلیل عدم تمدید سرور در دسترس نیست' },
    { name: 'Bridged3', domain: 'bridged3.com', category: 'مارکت‌پلیس B2B / فروشگاه', role: 'case-study', internal: false, archived: true, note: 'نمونه‌کار ناتمام — هدف پروژه ایجاد فروشگاه B2B و مارکت‌پلیس عمده‌فروشی (مدل علی‌بابا) بود' },
    { name: 'iBan2iBan', domain: 'iban2iban.com', category: 'زیرساخت ایمیل / SMTP', role: 'case-study', internal: false, note: 'نمونه‌کار — راه‌اندازی سیستم مدیریت SMTP' },
    { name: 'Bear Event', domain: 'bearevent.co', category: 'رویداد و بلیت', role: 'ecosystem', internal: false },
    { name: 'Netinode', domain: 'netinode.net', url: 'https://netinode.net/', category: 'دامنه، هاست و سرور', role: 'case-study', internal: false, logo: 'assets/images/partners/netinohost.png', note: 'نمونه‌کار و سرویس زیرساخت بیزدوار — فروش دامنه، هاست، WordPress Hosting، ایمیل تجاری، DNS و سرور' },
    { name: 'Fast Web Studio', domain: 'bizdavar.com', category: 'طراحی سایت', role: 'case-study', internal: true, slug: 'pages/fast.html', logo: 'assets/images/content/hero-home.svg', note: 'محصول اختصاصی بیزدوار — طراحی سایت ۵ روزه' },
    { name: 'BizTab', domain: 'nasrnews.ir', url: 'https://nasrnews.ir/print/16727/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%88-%D8%B3%D8%A7%D8%AE%D8%AA-%D8%A7%D9%88%D9%84%DB%8C%D9%86-%D8%AF%D9%85%D8%A7%D8%B3%D9%86%D8%AC-%D8%AF%DB%8C%D9%88%D8%A7%D8%B1%DB%8C-%D8%BA%DB%8C%D8%B1%D8%AA%D9%85%D8%A7%D8%B3%DB%8C-%D8%AF%D8%B1-%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2', category: 'محصول اختصاصی / IoT و سلامت', role: 'case-study', internal: true, slug: 'pages/biztab.html', logo: 'assets/images/products/biztab/biztab-hero.jpg', note: 'محصول اختصاصی — اولین دماسنج دیواری غیرتماسی تبریز، توسعه تیم بیزدوار' },
    { name: 'BizClean V5', domain: 'digikala.com', url: 'https://www.digikala.com/product/dkp-3730222/', category: 'محصول اختصاصی / بهداشت', role: 'case-study', internal: true, slug: 'pages/bizsanitizer-v5.html', logo: 'assets/images/products/bizsanitizer/bizclean-v5.png', note: 'محصول اختصاصی — دستگاه ضدعفونی دست V5، توسعه در دوران کرونا' },
    { name: 'FXGuard', domain: 'bizdavar.com', category: 'اسکریپت CRM واتساپ', role: 'case-study', internal: true, slug: 'pages/fxguard.html', logo: 'assets/images/products/fxguard/fxguard-logo.svg', note: 'اسکریپت اختصاصی CRM واتساپ — پنل تیمی، پیام انبوه و پاسخ خودکار ۲۴/۷؛ پلن $500، $800 و $1,200' },
    { name: 'BizSwap', domain: 'Web3 · DeFi Module', category: 'Web3 / پیش‌فروش و سواپ توکن', role: 'case-study', internal: true, slug: 'pages/bizswap.html', logo: 'assets/images/products/bizswap/bizswap-logo.svg', note: 'نمونه‌کار — ماژول پیش‌فروش و سواپ on-chain (BEP-20)، اتصال کیف پول و UI DeFi؛ توسعه تیم بیزدوار' },
    { name: 'FXGuard Exchange', domain: 'exchange.fxguard.io', url: 'https://exchange.fxguard.io/', category: 'طراحی وب / صرافی و فین‌تک', role: 'case-study', internal: true, slug: 'pages/fxguard-exchange.html', logo: 'assets/images/products/fxguard/fxguard-logo.svg', note: 'نمونه‌کار — پلتفرم تبادل تومان و لیر با نرخ زنده، KYC و پیگیری سفارش' },
    { name: 'FXGuard Accounting', domain: 'accounting.fxguard.io', category: 'نرم‌افزار حسابداری / فینانس', role: 'case-study', internal: false, note: 'نمونه‌کار — سیستم حسابداری حرفه‌ای با برنامه‌نویسی اختصاصی، مناسب کسب‌وکارهای فینانس و صرافی' },
    { name: 'Marvispace', domain: 'marvispace.com', url: 'https://marvispace.com', category: 'طراحی وب / فروشگاه اختصاصی', role: 'case-study', internal: false, note: 'نمونه‌کار — فروشگاه آنلاین اختصاصی با داشبورد ادمین، مدیریت محصول و محتوا' },
    { name: 'Marvi Society', domain: 'marvisociety.com', url: 'https://marvisociety.com', appStoreUrl: 'https://apps.apple.com/us/app/marvi-society/id6783450762', category: 'توسعه اپ موبایل / lifestyle و creator', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی، برنامه‌نویسی و راه‌اندازی صفر تا صد اپ iOS؛ کلاب دعوت‌محور همکاری creator و مکان تأییدشده در استانبول — کشف مکان، check-in، ارسال مدرک بازدید، پروفایل TR/EN؛ منتشر در App Store' },
    { name: 'GooPay AI', domain: 'goopay.ai', category: 'هوش مصنوعی / نرم‌افزار اختصاصی', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی و برنامه‌نویسی اختصاصی سیستم‌های هوش مصنوعی' },
    { name: 'Grafik Travel', domain: 'grafiktravel.com', url: 'http://grafiktravel.com/', category: 'طراحی وب / گردشگری و MICE', role: 'case-study', internal: false, logo: 'assets/images/partners/grafik-travel.png', note: 'نمونه‌کار — طراحی وبسایت تخصصی برای مجموعه گردشگری و خدمات سازمانی' },
    { name: 'Biztejarat', domain: 'instagram.com/biztejarat', category: 'مدیریت SMM / اینستاگرام', role: 'case-study', internal: true, slug: 'pages/biztejarat.html', archived: true, note: 'پروژه گذشته — این کسب‌وکار فعلاً غیرفعال شده است' },
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
    { name: 'Ajansin', domain: 'ajansin.com', url: 'https://ajansin.com', category: 'طراحی وب / آژانس دیجیتال', role: 'case-study', internal: false, note: 'نمونه‌کار — وبسایت آژانس دیجیتال استانبول با Next.js و React؛ طراحی وب، UI/UX، فروشگاه آنلاین و سئو' },
    { name: 'Bizdavar Group', domain: 'bizdavar.com', url: 'https://bizdavar.com', category: 'طراحی وب / آژانس دیجیتال', role: 'case-study', internal: false, logo: 'assets/images/brand/bizdavar-logo.png', note: 'وبسایت شرکتی چندزبانه (fa/tr/en) — خدمات دیجیتال، تامین صنعتی، محصولات، نمونه‌کارها و Fast Studio' },
    { name: 'Ersan Jahed Tabrizi', domain: 'ersanjahedtabrizi.ir', url: 'https://ersanjahedtabrizi.ir', category: 'طراحی وب / رزومه و معرفی شخصی', role: 'case-study', internal: false, note: 'نمونه‌کار — رزومه و معرفی شخصی بنیان‌گذار؛ timeline حرفه‌ای، مهارت‌ها، نمونه لوگو و دانلود CV' },
    { name: 'Europe Gayrimenkul', domain: 'europegayrimenkul.com', url: 'https://europegayrimenkul.com', category: 'طراحی وب / املاک و سرمایه‌گذاری', role: 'case-study', internal: false, note: 'نمونه‌کار — املاک استانبول؛ فروش، اجاره روزانه/ماهانه، اقامت (oturum)، سند tapu و مشاوره چندزبانه (TR/EN/AR/FA)' },
    { name: 'Erst Investment', domain: 'erstinvestment.com', url: 'https://erstinvestment.com', category: 'طراحی وب / سرمایه‌گذاری', role: 'case-study', internal: false, note: 'نمونه‌کار — وبسایت شرکت سرمایه‌گذاری (راه‌اندازی و پیکربندی hosting/DNS)' },
    { name: 'Mandella Chocolate', domain: 'mandellachocolate.com', url: 'https://mandellachocolate.com', category: 'طراحی وب / کافه و رستوران', role: 'case-study', internal: false, note: 'نمونه‌کار — کافه قهوه و شکلات در ارزروم؛ منوی QR، گالری و معرفی مکان' },
    { name: 'Netino Host', domain: 'netinohost.com', url: 'https://netinohost.com', category: 'طراحی وب / هاستینگ', role: 'case-study', internal: false, logo: 'assets/images/partners/netinohost.png', note: 'نمونه‌کار — پلتفرم فروش هاست، VPS، ایمیل و دامنه فارسی؛ WHMCS و بازار ایران' },
    { name: 'پتروشیمی تبریز', domain: 'tpco.ir', category: 'تامین تجهیزات صنعتی / پتروشیمی', role: 'case-study', internal: false, logo: 'assets/images/partners/petrotabriz.png', note: 'نمونه‌کار — تامین تجهیزات صنعتی' }
  ]
};

window.getWhatsappUrl = function (message) {
  const C = window.BIZDAVAR_CONFIG;
  if (!C || !C.contact.whatsapp) return window.resolvePath(C.routes.contact);
  const text = message || C.contact.whatsappMessage;
  return `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(text)}`;
};

window.getProjectUrl = function (project) {
  if (project.internal && project.slug) return window.resolvePath(project.slug);
  if (project.url) return project.url;
  return `https://${project.domain}`;
};
