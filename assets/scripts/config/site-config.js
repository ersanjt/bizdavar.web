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
    articles: {
      digitalMarketing: 'pages/articles/digital-marketing.html',
      fastStudio: 'pages/articles/fast-studio.html',
      industrialSensors: 'pages/articles/industrial-sensors.html'
    }
  },

  assets: {
    favicon: 'assets/images/brand/favicon.png',
    logo: 'assets/images/brand/bizdavar-logo.png',
    ogImage: 'assets/images/content/about-us-1320x682.jpg'
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
    defaultDescription: 'بیزدوار گروپ — آژانس دیجیتال مارکتینگ، طراحی وب حرفه‌ای، مدیریت شبکه‌های اجتماعی و تامین تجهیزات صنعتی. مشاوره رایگان و راهکارهای توسعه کسب‌وکار.',
    keywords: 'بیزدوار, Bizdavar, بازاریابی دیجیتال, طراحی سایت, SMM, تامین تجهیزات صنعتی, Fast Web Studio',
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
      slug: 'pages/articles/digital-marketing.html',
      title: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟',
      excerpt: 'راهکارهای عملی برای تبدیل بازدیدکننده به مشتری.',
      category: 'بازاریابی دیجیتال',
      date: '2025-04-01',
      relatedService: 'pages/services.html#digital-marketing'
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
    }
  ],

  trustMetrics: [
    { value: '+۱۶', label: 'دامنه مدیریت‌شده' },
    { value: '۵ روز', label: 'تحویل Fast Studio' },
    { value: '۴', label: 'حوزه تخصصی' },
    { value: '۱۰۰٪', label: 'تمرکز بر نتیجه' }
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
    { name: 'BZ Diamond', domain: 'bzdiamond.com', category: 'الماس و جواهر', internal: false },
    { name: 'Zed Diamond', domain: 'zeddiamond.com', category: 'جواهرات', internal: false },
    { name: 'BZ Broker', domain: 'bzbroker.com', category: 'بروکر', internal: false },
    { name: 'BZ Payment', domain: 'bz-payment.com', category: 'پرداخت', internal: false },
    { name: 'BlueNil Air', domain: 'bluenil-air.com', category: 'هواپیمایی', internal: false },
    { name: 'Bridged3', domain: 'bridged3.com', category: 'وب۳', internal: false },
    { name: 'iBan2iBan', domain: 'iban2iban.com', category: 'انتقال مالی', internal: false },
    { name: 'Zed Developer', domain: 'zeddeveloper.com', category: 'توسعه نرم‌افزار', internal: false },
    { name: 'Bear Event', domain: 'bearevent.co', category: 'رویداد و بلیت', internal: false },
    { name: 'NetinoHost', domain: 'netinohost.com', category: 'هاستینگ', internal: false },
    { name: 'Fast Web Studio', domain: 'fast.bizdavar.com', category: 'طراحی سایت', internal: true, slug: 'pages/fast.html' }
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
