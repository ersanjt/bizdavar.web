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
    biztejarat: 'pages/biztejarat.html',
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

  assets: {
    favicon: 'assets/images/brand/favicon.png',
    faviconSvg: 'assets/images/brand/favicon.svg',
    appleTouchIcon: 'assets/images/brand/apple-touch-icon.png',
    /** Light backgrounds — header, drawer (Bizda black + var red) */
    logo: 'assets/images/brand/bizdavar-logo.png',
    /** Dark backgrounds — footer (white Bizda + red var) */
    logoOnDark: 'assets/images/brand/bizdavar-logo-footer.svg',
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

  contact: {
    email: 'info@bizdavar.com',
    emailAlt: 'webmaster@bizdavar.ir',
    phone: '+905010676486',
    phoneDisplay: '+90 501 067 6486 · +98 930 588 0135',
    whatsapp: '905010676486',
    whatsappMessage: 'سلام، از وبسایت بیزدوار گروپ پیام می‌دهم.',
    channels: [
      { id: 'tr', label: 'ترکیه', display: '+90 501 067 6486', tel: '+905010676486', whatsapp: '905010676486' },
      { id: 'ir', label: 'ایران', display: '+98 930 588 0135', tel: '+989305880135', whatsapp: '989305880135' }
    ],
    address: 'استانبول، ترکیه',
    workingHours: 'شنبه تا پنج‌شنبه — ۹:۰۰ تا ۱۸:۰۰',
    linkedin: 'https://www.linkedin.com/in/ersanjt',
    instagram: 'https://www.instagram.com/bizdavar'
  },

  domains: {
    main: 'bizdavar.com',
    alt: 'bizdavar.ir',
    fast: 'fast.bizdavar.com'
  },

  geo: {
    headquarters: { city: 'استانبول', country: 'ترکیه', countryCode: 'TR' },
    summaryFa: 'خدمات از استانبول به ایران، ترکیه و ۱۱ کشور — مشاوره فارسی، واتساپ و تحویل بین‌المللی.',
    hubs: [
      { city: 'استانبول', country: 'ترکیه', code: 'TR', role: 'دفتر اصلی · فین‌تک و عملیات بین‌المللی' },
      { city: 'تبریز', country: 'ایران', code: 'IR', role: 'بازار ایران · پروژه‌های صنعتی و دیجیتال' },
      { city: 'ایروان', country: 'ارمنستان', code: 'AM', role: 'عملیات منطقه‌ای' }
    ],
    markets: ['ایران', 'ترکیه', 'امارات', 'آلمان', 'ارمنستان', 'عراق', 'گرجستان', 'لبنان', 'ایتالیا', 'انگلستان', 'آمریکا']
  },

  seo: {
    defaultTitle: 'بیزدوار گروپ | خدمات دیجیتال، طراحی سایت و تامین تجهیزات صنعتی',
    defaultDescription: 'بیزدوار گروپ — آژانس دیجیتال با ۱۲+ سال تجربه و ۱۰۰+ پروژه در ۱۱ کشور. بازاریابی دیجیتال، طراحی وب، فین‌تک، SMM و تامین تجهیزات صنعتی VEGA و Prosense.',
    keywords: 'بیزدوار, Bizdavar Group, ارسان جاهد تبریزی, بازاریابی دیجیتال, طراحی سایت, SMM, فین‌تک, VEGA, Prosense, Fast Web Studio, آژانس دیجیتال استانبول',
    twitterCard: 'summary_large_image',
    author: 'Bizdavar Group',
    themeColor: '#16163f'
  },

  fast: {
    baseUrl: 'https://fast.bizdavar.com',
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
    { name: 'Zed Diamond', domain: 'zeddiamond.com', category: 'طراحی وب / فروشگاه جواهرات', role: 'case-study', internal: false, logo: 'assets/images/partners/zeddiamond.png', note: 'نمونه‌کار — طراحی وبسایت فروشگاهی و تولید محتوا' },
    { name: 'BZ Broker', domain: 'bzbroker.com', category: 'طراحی وب / بروکر', role: 'case-study', internal: false, logo: 'assets/images/partners/bz-broker.png', note: 'نمونه‌کار — طراحی وبسایت و تولید محتوا' },
    { name: 'BZ Payment', domain: 'bz-payment.com', category: 'پرداخت', role: 'ecosystem', internal: false, logo: 'assets/images/partners/bz-payment.png' },
    { name: 'BlueNil Air', domain: 'bluenil-air.com', category: 'هواپیمایی', role: 'client', internal: false, archived: true, note: 'پروژه گذشته — وبسایت به‌دلیل عدم تمدید سرور در دسترس نیست' },
    { name: 'Bridged3', domain: 'bridged3.com', category: 'مارکت‌پلیس B2B / فروشگاه', role: 'case-study', internal: false, archived: true, note: 'نمونه‌کار ناتمام — هدف پروژه ایجاد فروشگاه B2B و مارکت‌پلیس عمده‌فروشی (مدل علی‌بابا) بود' },
    { name: 'iBan2iBan', domain: 'iban2iban.com', category: 'زیرساخت ایمیل / SMTP', role: 'case-study', internal: false, note: 'نمونه‌کار — راه‌اندازی سیستم مدیریت SMTP' },
    { name: 'Bear Event', domain: 'bearevent.co', category: 'رویداد و بلیت', role: 'ecosystem', internal: false },
    { name: 'Netinode', domain: 'netinode.net', url: 'https://netinode.net/', category: 'دامنه، هاست و سرور', role: 'case-study', internal: false, logo: 'assets/images/partners/netinohost.png', note: 'نمونه‌کار و سرویس زیرساخت بیزدوار — فروش دامنه، هاست، WordPress Hosting، ایمیل تجاری، DNS و سرور' },
    { name: 'Fast Web Studio', domain: 'fast.bizdavar.com', category: 'طراحی سایت', role: 'case-study', internal: true, slug: 'pages/fast.html', logo: 'assets/images/content/hero-home.svg', note: 'محصول اختصاصی بیزدوار — طراحی سایت ۵ روزه' },
    { name: 'FXGuard', domain: 'fxguard.io', category: 'طراحی وب / CRM و وب‌اپ', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی وبسایت، وب‌اپلیکیشن و CRM اختصاصی با کدنویسی اختصاصی' },
    { name: 'FXGuard Exchange', domain: 'exchange.fxguard.io', category: 'طراحی وب / صرافی و فین‌تک', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی وبسایت صرافی با قابلیت عضویت و ترید ارز' },
    { name: 'FXGuard Accounting', domain: 'accounting.fxguard.io', category: 'نرم‌افزار حسابداری / فینانس', role: 'case-study', internal: false, note: 'نمونه‌کار — سیستم حسابداری حرفه‌ای با برنامه‌نویسی اختصاصی، مناسب کسب‌وکارهای فینانس و صرافی' },
    { name: 'Marvispace', domain: 'marvispace.com', category: 'طراحی وب / فروشگاه اختصاصی', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی وبسایت فروشگاهی اختصاصی با داشبورد ادمین و مدیریت محتوا و محصول' },
    { name: 'Marvi Society', domain: 'marvisociety.com', category: 'طراحی و توسعه اپلیکیشن موبایل', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی و برنامه‌نویسی اختصاصی اپلیکیشن iOS و Android' },
    { name: 'GooPay AI', domain: 'goopay.ai', category: 'هوش مصنوعی / نرم‌افزار اختصاصی', role: 'case-study', internal: false, note: 'نمونه‌کار — طراحی و برنامه‌نویسی اختصاصی سیستم‌های هوش مصنوعی' },
    { name: 'Grafik Travel', domain: 'grafiktravel.com', url: 'http://grafiktravel.com/', category: 'طراحی وب / گردشگری و MICE', role: 'case-study', internal: false, logo: 'assets/images/partners/grafik-travel.png', note: 'نمونه‌کار — طراحی وبسایت تخصصی برای مجموعه گردشگری و خدمات سازمانی' },
    { name: 'Biztejarat', domain: 'instagram.com/biztejarat', category: 'مدیریت SMM / اینستاگرام', role: 'case-study', internal: true, slug: 'pages/biztejarat.html', archived: true, note: 'پروژه گذشته — این کسب‌وکار فعلاً غیرفعال شده است' },
    { name: 'Arian Pumps', domain: 'arianpumps.com', category: 'طراحی وب / B2B', role: 'case-study', internal: false, logo: 'assets/images/partners/arian-pumps.png', note: 'نمونه‌کار — طراحی وب و خدمات دیجیتال' },
    { name: 'Marvelous Holding', domain: 'marvelousholding.com', category: 'طراحی وب / هلدینگ', role: 'case-study', internal: false, logo: 'assets/images/partners/marvelous-holding.png', note: 'نمونه‌کار — وبسایت هلدینگ و سرمایه‌گذاری' },
    { name: 'SMM Turk', domain: 'smm-turk.com', category: 'مدیریت SMM / دیجیتال', role: 'case-study', internal: false, logo: 'assets/images/partners/smm-turk.svg', note: 'نمونه‌کار — بازاریابی دیجیتال و SMM ترکیه' },
    { name: 'JMS Elettropompe', domain: 'jmselettropompe.it', category: 'طراحی وب / پمپ صنعتی', role: 'case-study', internal: false, logo: 'assets/images/partners/jms-elettropompe.svg', note: 'نمونه‌کار — وب B2B الکتروموتور و پمپ ایتالیا' },
    { name: 'Karen Leather', domain: 'karenleather.com', category: 'بازاریابی محصول / چرم و مد', role: 'case-study', internal: false, logo: 'assets/images/partners/karen-leather.png', note: 'نمونه‌کار — بازاریابی محصولات، تولید محتوا و عکاسی صنعتی' },
    { name: 'Paparosi', domain: 'paparosi.co', category: 'طراحی وب / برند تجاری', role: 'case-study', internal: false, logo: 'assets/images/partners/paparosi.png', note: 'نمونه‌کار — طراحی وب و هویت برند' },
    { name: 'NIK Aesthetic', domain: 'nikaesthetic.com', category: 'طراحی وب / کلینیک زیبایی', role: 'case-study', internal: false, logo: 'assets/images/partners/nikaesthetic.png', note: 'نمونه‌کار — کلینیک بین‌المللی زیبایی و پزشکی' },
    { name: 'Adak Sepehr', domain: 'adaksepehr.com', category: 'تامین و فروش / تجهیزات صنعتی', role: 'case-study', internal: false, logo: 'assets/images/partners/adak-sepehr.png', note: 'نمونه‌کار — همکاری در تامین و فروش' },
    { name: 'Alimila', domain: 'alimila.com', category: 'برندینگ و بازاریابی ۳۶۰°', role: 'case-study', internal: false, logo: 'assets/images/partners/alimila.png', note: 'نمونه‌کار — طراحی لوگو، مدیریت شبکه‌های اجتماعی، تولید محتوا، طراحی وبسایت، بازاریابی و استراتژی فروش و طراحی بسته‌بندی محصولات' },
    { name: 'Bamauk Visa', domain: 'bamaukvisa.com', category: 'طراحی وب / خدمات ویزا', role: 'case-study', internal: false, logo: 'assets/images/partners/bamauk-visa.png', note: 'نمونه‌کار — طراحی وبسایت و تولید محتوا' },
    { name: 'Honar Shop', domain: 'honarshop.com', category: 'طراحی وب / تولید محتوا', role: 'case-study', internal: false, logo: 'assets/images/partners/honar-shop.png', note: 'نمونه‌کار — عکاسی صنعتی از محصولات، تولید محتوا و طراحی وبسایت' },
    { name: 'Smith Tradeland', domain: 'smithtradeland.com', category: 'طراحی وب / تولید محتوا / امنیت', role: 'case-study', internal: false, logo: 'assets/images/partners/smith-tradeland.webp', note: 'نمونه‌کار — طراحی وبسایت، تولید محتوا و امنیت' },
    { name: 'Imensa', domain: 'imensa.com', category: 'سرمایه‌گذاری / نوآوری', role: 'case-study', internal: false, logo: 'assets/images/partners/imensa.png', note: 'نمونه‌کار — سرمایه‌گذاری، تولید محصولات نوآورانه و خلاق، ایده‌پردازی و توسعه کسب‌وکار' },
    { name: 'HangerStyle', domain: 'hangerstyle.com', category: 'سفارش بین‌المللی / مد و پوشاک', role: 'case-study', internal: false, logo: 'assets/images/partners/hanger-style.png', note: 'نمونه‌کار — ثبت سفارش از وبسایت‌های بین‌المللی' },
    { name: 'Havana', domain: 'havana.com', category: 'مشاوره تبلیغات / پشتیبانی وب', role: 'case-study', internal: false, logo: 'assets/images/partners/havana.png', note: 'نمونه‌کار — مشاوره تبلیغاتی، پشتیبانی وب، امنیت شبکه و تولید محتوا' },
    { name: 'Sanat Moharek', domain: 'sanatm.com', category: 'طراحی وب / بازاریابی صنعتی', role: 'case-study', internal: false, logo: 'assets/images/partners/sanat-moharek.png', note: 'نمونه‌کار — طراحی وب، بازاریابی، مدیریت شبکه‌های اجتماعی و مشاوره تبلیغاتی' },
    { name: 'هتل شایان تبریز', domain: 'hotel-shayan.com', category: 'طراحی وب / گردشگری و هتلداری', role: 'case-study', internal: false, logo: 'assets/images/partners/hotel-shayan.png', note: 'نمونه‌کار — طراحی وبسایت اختصاصی وردپرسی' },
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
