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
    bzDiamond: 'pages/bz-diamond.html',
    biztejarat: 'pages/biztejarat.html',
    gamak: 'pages/gamak.html',
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
    favicon: 'assets/images/brand/favicon.svg',
    logo: 'assets/images/brand/bizdavar-logo.svg',
    ogImage: 'assets/images/content/hero-home.jpg',
    heroImage: 'assets/images/content/hero-home.jpg',
    aboutImage: 'assets/images/content/about-hero.jpg'
  },

  contact: {
    email: 'info@bizdavar.com',
    emailAlt: 'webmaster@bizdavar.ir',
    phone: '',
    phoneDisplay: 'تماس از طریق واتساپ',
    whatsapp: '',
    whatsappMessage: 'سلام، از وبسایت بیزدوار گروپ پیام می‌دهم.',
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
      date: '2026-06-01',
      relatedService: 'pages/about.html'
    }
  ],

  trustMetrics: [
    { value: '+۱۰۰', label: 'پروژه دیجیتال' },
    { value: '۱۱', label: 'کشور فعال' },
    { value: '۱۲+', label: 'سال تجربه' },
    { value: '+۲۵', label: 'دامنه و برند' }
  ],

  featuredPartners: [
    { name: 'ZedPay', url: 'https://zed-pay.com', logo: null },
    { name: 'BZ Diamond', url: 'https://bzdiamond.com', logo: 'assets/images/partners/bzdiamond.webp' },
    { name: 'ZedGate', url: 'https://zedgate.ai', logo: null },
    { name: 'Bear Event', url: 'https://bearevent.co', logo: null },
    { name: 'NetinoHost', url: 'https://netinohost.com', logo: null },
    { name: 'Arian Pumps', url: 'https://arianpumps.com', logo: 'assets/images/partners/arian-pumps.png' },
    { name: 'Gamak', url: 'pages/gamak.html', logo: 'assets/images/partners/gamak.svg', internal: true },
    { name: 'Adak Sepehr', url: 'pages/portfolio.html', logo: 'assets/images/partners/adak-sepehr.png', internal: true },
    { name: 'Alimila', url: 'pages/portfolio.html', logo: 'assets/images/partners/alimila.png', internal: true },
    { name: 'Honar Shop', url: 'pages/portfolio.html', logo: 'assets/images/partners/honar-shop.png', internal: true },
    { name: 'Smith Tradeland', url: 'pages/portfolio.html', logo: 'assets/images/partners/smith-tradeland.webp', internal: true },
    { name: 'Imensa', url: 'pages/portfolio.html', logo: 'assets/images/partners/imensa.png', internal: true },
    { name: 'HangerStyle', url: 'pages/portfolio.html', logo: 'assets/images/partners/hanger-style.png', internal: true },
    { name: 'Bamauk Visa', url: 'pages/portfolio.html', logo: 'assets/images/partners/bamauk-visa.png', internal: true },
    { name: 'BlueNil Air', url: 'https://bluenil-air.com', logo: null },
    { name: 'Fast Studio', url: 'pages/fast.html', logo: null, internal: true }
  ],

  processSteps: [
    { num: '۰۱', title: 'تحلیل و مشاوره', desc: 'بررسی اهداف کسب‌وکار، مخاطب هدف و اولویت‌های دیجیتال — مشاوره اولیه رایگان.' },
    { num: '۰۲', title: 'طراحی راهکار', desc: 'تدوین استراتژی، انتخاب پلتفرم و برنامه اجرایی متناسب با بودجه و زمان‌بندی.' },
    { num: '۰۳', title: 'اجرا و تحویل', desc: 'پیاده‌سازی حرفه‌ای — از کمپین دیجیتال تا سایت و تامین تجهیزات صنعتی.' },
    { num: '۰۴', title: 'پشتیبانی و رشد', desc: 'بهینه‌سازی مستمر، گزارش‌دهی شفاف و همراهی بلندمدت برای رشد پایدار.' }
  ],

  portfolio: [
    { name: 'ZedPay', domain: 'zed-pay.com', category: 'فین‌تک / پرداخت', internal: false },
    { name: 'ZedGate', domain: 'zedgate.ai', category: 'درگاه دیجیتال', internal: false },
    { name: 'ZedGate IO', domain: 'zedgate.io', category: 'زیرساخت فین‌تک', internal: false },
    { name: 'ZedGP', domain: 'zedgp.com', category: 'خدمات مالی', internal: false },
    { name: 'ZedX DMCC', domain: 'zedxdmcc.com', category: 'هلدینگ', internal: false },
    { name: 'BZ Diamond', domain: 'bzdiamond.com', category: 'الماس و جواهر', internal: true, slug: 'pages/bz-diamond.html', logo: 'assets/images/partners/bzdiamond.webp' },
    { name: 'Zed Diamond', domain: 'zeddiamond.com', category: 'جواهرات', internal: false },
    { name: 'BZ Broker', domain: 'bzbroker.com', category: 'بروکر', internal: false },
    { name: 'BZ Payment', domain: 'bz-payment.com', category: 'پرداخت', internal: false, logo: 'assets/images/partners/bz-payment.png' },
    { name: 'BlueNil Air', domain: 'bluenil-air.com', category: 'هواپیمایی', internal: false },
    { name: 'Bridged3', domain: 'bridged3.com', category: 'وب۳', internal: false },
    { name: 'iBan2iBan', domain: 'iban2iban.com', category: 'انتقال مالی', internal: false },
    { name: 'Zed Developer', domain: 'zeddeveloper.com', category: 'توسعه نرم‌افزار', internal: false },
    { name: 'Bear Event', domain: 'bearevent.co', category: 'رویداد و بلیت', internal: false },
    { name: 'NetinoHost', domain: 'netinohost.com', category: 'هاستینگ', internal: false },
    { name: 'Fast Web Studio', domain: 'fast.bizdavar.com', category: 'طراحی سایت', internal: true, slug: 'pages/fast.html' },
    { name: 'Biztejarat', domain: 'biztejarat.com', category: 'تجارت ابزار دقیق', internal: true, slug: 'pages/biztejarat.html' },
    { name: 'Gamak', domain: 'gamak.com.tr', category: 'الکتروموتور صنعتی', internal: true, slug: 'pages/gamak.html', logo: 'assets/images/partners/gamak.svg' },
    { name: 'Arian Pumps', domain: 'arianpumps.com', category: 'پمپ صنعتی', internal: false, logo: 'assets/images/partners/arian-pumps.png' },
    { name: 'Adak Sepehr', domain: 'adaksepehr.com', category: 'صنعت و تجهیزات', internal: false, logo: 'assets/images/partners/adak-sepehr.png' },
    { name: 'Alimila', domain: 'alimila.com', category: 'تجارت بین‌الملل', internal: false, logo: 'assets/images/partners/alimila.png' },
    { name: 'Bamauk Visa', domain: 'bamaukvisa.com', category: 'خدمات ویزا', internal: false, logo: 'assets/images/partners/bamauk-visa.png' },
    { name: 'Honar Shop', domain: 'honarshop.com', category: 'فروشگاه هنری', internal: false, logo: 'assets/images/partners/honar-shop.png' },
    { name: 'Smith Tradeland', domain: 'smithtradeland.com', category: 'تجارت', internal: false, logo: 'assets/images/partners/smith-tradeland.webp' },
    { name: 'Imensa', domain: 'imensa.com', category: 'صنعت', internal: false, logo: 'assets/images/partners/imensa.png' },
    { name: 'HangerStyle', domain: 'hangerstyle.com', category: 'مد و پوشاک', internal: false, logo: 'assets/images/partners/hanger-style.png' },
    { name: 'Havana', domain: 'havana.com', category: 'برند تجاری', internal: false, logo: 'assets/images/partners/havana.png' },
    { name: 'Sanat Moharek', domain: 'sanatmoharek.com', category: 'صنعت', internal: false, logo: 'assets/images/partners/sanat-moharek.png' },
    { name: 'هتل شایان تبریز', domain: 'hotelshayan.ir', category: 'گردشگری و هتلداری', internal: false },
    { name: 'پتروشیمی تبریز', domain: 'petrotabriz.com', category: 'پتروشیمی', internal: false }
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
  return `https://${project.domain}`;
};
