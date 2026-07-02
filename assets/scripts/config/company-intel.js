/**
 * Bizdavar — Company Intelligence (منابع: LinkedIn، پروفایل عمومی، نمونه‌کارها)
 * دسته‌بندی محتوای سازمانی برای سئو و E-E-A-T
 */
window.BIZDAVAR_INTEL = {
  /** شناسنامه سازمانی */
  identity: {
    legalName: 'Bizdavar Group',
    legalNameFa: 'بیزدوار گروپ',
    founded: 2013,
    foundedDisplay: '۱۳۹۲ / ۲۰۱۳',
    registeredSince: 2015,
    tagline: 'Digital agency + industrial supply + growth systems',
    taglineFa: 'آژانس دیجیتال، تامین صنعتی و سیستم‌های رشد کسب‌وکار',
    headquarters: [
      {
        city: 'استانبول',
        country: 'ترکیه',
        role: 'دفتر اصلی · مرکز عملیات بین‌المللی',
        badge: 'HQ'
      },
      { city: 'ایروان', country: 'ارمنستان', role: 'ثبت شرکت و پروژه‌های منطقه‌ای' },
      { city: 'تبریز', country: 'ایران', role: 'پروژه‌های صنعتی و دیجیتال' }
    ],
    domains: ['bizdavar.com', 'bizdavar.ir', 'fast.bizdavar.com'],
    languages: ['فارسی', 'انگلیسی', 'ترکی']
  },

  /** رهبری و تیم */
  leadership: {
    founder: {
      name: 'Ersan Jahed Tabrizi',
      nameFa: 'ارسان جاهد تبریزی',
      title: 'Founder & Lead Strategist',
      titleFa: 'بنیان‌گذار و مدیر استراتژی',
      linkedin: 'https://www.linkedin.com/in/ersanjt',
      experienceYears: '12+',
      projectsCount: '100+',
      countriesCount: 11,
      followers: '2,600+',
      education: [
        'کارشناسی مهندسی برق — دانشگاه آزاد اسلامی (اتوماسیون صنعتی)',
        'کارشناسی مهندسی کامپیوتر — دانشگاه آزاد تهران',
        'MBA مدیریت کسب‌وکار — دانشگاه تهران (تحول دیجیتال)',
        'کارشناسی ارشد مهندسی کامپیوتر — دانشگاه اسنیورت استانبول'
      ],
      expertise: [
        'پلتفرم‌های فین‌تک و پرداخت',
        'وردپرس پیشرفته و توسعه سفارشی',
        'بازاریابی عملکردی و سئو',
        'اتوماسیون هوش مصنوعی',
        'تامین تجهیزات صنعتی B2B',
        'رهبری تیم‌های گرافیک، محتوا و فروش'
      ],
      bioFa: 'بیش از ۱۲ سال تجربه در طراحی و توسعه ۱۰۰+ وبسایت و پلتفرم سفارشی. بنیان‌گذار بیزدوار گروپ و رهبر پروژه‌های دیجیتال در ۱۱ کشور — از فین‌تک و پرداخت تا صنعت و هاستینگ ابری.'
    },
    teamModel: 'تیم چندتخصصی — طراحی، توسعه، محتوا، بازاریابی و پشتیبانی فنی',
    affiliates: 'شبکه همکاران و نمایندگان در ایران، ترکیه و ارمنستان'
  },

  /** حوزه‌های فعالیت (دسته‌بندی خدمات) */
  activityAreas: [
    {
      id: 'digital-growth',
      title: 'رشد دیجیتال',
      items: ['بازاریابی دیجیتال', 'سئو و Google Ads', 'مدیریت SMM', 'قیف تبدیل', 'تحلیل GA4']
    },
    {
      id: 'web-platforms',
      title: 'پلتفرم‌های وب',
      items: ['طراحی سایت شرکتی', 'فروشگاه WooCommerce', 'Fast Web Studio', 'وردپرس پیشرفته', 'توسعه سفارشی']
    },
    {
      id: 'fintech',
      title: 'فین‌تک و پرداخت',
      items: ['پلتفرم‌های پرداخت', 'داشبورد مالی', 'امنیت Cloudflare', 'ربات تلگرام', 'برندینگ مالی']
    },
    {
      id: 'industrial',
      title: 'صنعت و B2B',
      items: ['تامین VEGA و Prosense', 'پمپ و موتور صنعتی', 'ابزار دقیق', 'اتوماسیون', 'تدارکات بین‌المللی']
    },
    {
      id: 'infrastructure',
      title: 'زیرساخت',
      items: ['Netinode برای دامنه، هاست و سرور', 'مدیریت دامنه و DNS', 'SSL و امنیت', 'پشتیبانی فنی']
    }
  ],

  /** اکوسیستم برندها (نمونه‌کارهای مرتبط) */
  ecosystem: [
    { name: 'ZedPay', type: 'فین‌تک / پرداخت', note: 'مدیریت IT و توسعه پلتفرم' },
    { name: 'Netinode', type: 'دامنه، هاست و سرور', note: 'ثبت دامنه، هاست، WordPress Hosting، ایمیل تجاری، DNS و سرور' },
    { name: 'BZ Diamond', type: 'نمونه‌کار طراحی وب', note: 'فروشگاه WooCommerce، ایمیل و سئو — پروژه مشتری' },
    { name: 'Biztejarat', type: 'نمونه‌کار SMM', note: 'صفحه اینستاگرام محصولات صنعتی — مدیریت محتوا' },
    { name: 'BZBroker', type: 'صرافی P2P', note: 'پلتفرم کریپتو' },
    { name: 'FXGuard', type: 'CRM واتساپ', note: 'اتوماسیون فروش' },
    { name: 'Bear Event', type: 'رویداد', note: 'بلیت و رویداد آنلاین' },
    { name: 'Gamak', type: 'الکتروموتور', note: 'تامین موتور صنعتی ترکیه' },
    { name: 'Arian Pumps', type: 'نمونه‌کار طراحی وب', note: 'طراحی وب شرکتی B2B — مشتری خدمات دیجیتال' },
    { name: 'Karen Leather', type: 'صادرات', note: 'بازاریابی B2B چرم' }
  ],

  /** حضور جغرافیایی */
  presence: {
    countries: ['ترکیه', 'امارات', 'آلمان', 'آمریکا', 'انگلستان', 'ارمنستان', 'لبنان', 'ایران', 'عراق', 'گرجستان', 'ایتالیا'],
    summaryFa: 'پروژه‌های اجراشده در ۱۱ کشور — دفتر اصلی در استانبول؛ هماهنگی پروژه‌های ایران، ترکیه و خاورمیانه از همین مرکز.',
    mapImage: 'assets/images/content/presence-map.svg',
    stats: [
      { value: '۱۱', label: 'کشور فعال' },
      { value: '۳', label: 'دفتر عملیاتی' },
      { value: '+۱۰۰', label: 'پروژه بین‌المللی' }
    ],
    istanbulHub: {
      title: 'مرکز عملیات استانبول',
      subtitle: 'Bizdavar Group — International HQ',
      city: 'استانبول',
      country: 'ترکیه',
      address: 'استانبول، ترکیه',
      timezone: 'UTC+3 (TRT)',
      workingHours: 'شنبه تا پنج‌شنبه — ۹:۰۰ تا ۱۸:۰۰',
      phone: '+90 501 067 6486',
      phoneTel: '+905010676486',
      whatsapp: '905010676486',
      email: 'info@bizdavar.com',
      languages: ['فارسی', 'ترکی', 'English'],
      intro: 'دفتر اصلی بیزدوار گروپ در استانبول مرکز هماهنگی پروژه‌های دیجیتال، فین‌تک و تامین صنعتی B2B است. مشاوره فارسی، پیش‌فاکتور، لجستیک بین‌المللی و پشتیبانی فنی از این هاب مدیریت می‌شود.',
      services: [
        'فین‌تک و پلتفرم‌های پرداخت (ZedPay و اکوسیستم)',
        'طراحی وب و Fast Web Studio',
        'بازاریابی دیجیتال، سئو و SMM',
        'تامین VEGA، Prosense، Gamak و تجهیزات ترکیه',
        'دامنه، هاست، SSL و زیرساخت (Netinode)',
        'هماهنگی پروژه‌های ایران و خاورمیانه'
      ],
      note: 'برای استعلام صنعتی یا دیجیتال — واتساپ یا تماس مستقیم با خط ترکیه.'
    },
    regions: [
      {
        id: 'mena',
        title: 'خاورمیانه و ترکیه',
        countries: [
          {
            name: 'ترکیه',
            hub: true,
            city: 'استانبول',
            focus: 'دفتر اصلی · فین‌تک · وب · تامین صنعتی',
            detail: 'مرکز عملیات بین‌المللی — مشاوره فارسی/ترکی/انگلیسی'
          },
          { name: 'ایران', hub: true, city: 'تبریز', focus: 'صنعت · دیجیتال' },
          { name: 'امارات', focus: 'تجارت و فین‌تک' },
          { name: 'عراق', focus: 'B2B صنعتی' },
          { name: 'لبنان', focus: 'پروژه‌های منطقه‌ای' }
        ]
      },
      {
        id: 'europe',
        title: 'اروپا و قفقاز',
        countries: [
          { name: 'ارمنستان', hub: true, city: 'ایروان', focus: 'ثبت شرکت · پروژه منطقه‌ای' },
          { name: 'گرجستان', focus: 'تجارت بین‌الملل' },
          { name: 'آلمان', focus: 'تامین تجهیزات' },
          { name: 'انگلستان', focus: 'فین‌تک و مشاوره' },
          { name: 'ایتالیا', focus: 'پروژه‌های صنعتی' }
        ]
      },
      {
        id: 'americas',
        title: 'آمریکا',
        countries: [
          { name: 'آمریکا', focus: 'پلتفرم و استارتاپ' }
        ]
      }
    ]
  },

  /** گواهینامه‌ها و مهارت‌های تأییدشده */
  credentials: [
    { name: 'Google Analytics Certification', issuer: 'Google Skillshop', year: '2026' },
    { name: 'Dive Deeper into GA4 Data and Reports', issuer: 'Google Skillshop', year: '2026' },
    { name: 'Get started using Google Analytics', issuer: 'Google Skillshop', year: '2026' },
    { name: 'Get to Know Advertising with Google', issuer: 'Google Skillshop', year: '2026' }
  ],

  /** بازخورد و اعتبار حرفه‌ای (منابع عمومی — بدون جعل نظر مشتری) */
  socialProof: {
    sources: [
      { type: 'linkedin', label: 'پروفایل حرفه‌ای بنیان‌گذار', url: 'https://www.linkedin.com/in/ersanjt' },
      { type: 'portfolio', label: 'نمونه‌کارهای منتشرشده', url: 'pages/portfolio.html' }
    ],
    highlights: [
      {
        category: 'بازاریابی دیجیتال',
        text: 'با اجرای استراتژی‌های نوین بازاریابی دیجیتال، نرخ تبدیل مشتریان به‌طور محسوسی افزایش یافته است.',
        source: 'پست حرفه‌ای بنیان‌گذار در LinkedIn',
        year: '2024'
      },
      {
        category: 'تجربه اجرایی',
        text: 'بیش از ۱۰۰ پروژه وب و پلتفرم سفارشی در ۱۱ کشور — از استارتاپ تا برندهای فین‌تک و صنعتی.',
        source: 'پروفایل LinkedIn — Ersan J. Tabrizi',
        year: '2025'
      },
      {
        category: 'فین‌تک',
        text: 'توسعه و راه‌اندازی پلتفرم‌های پرداخت، داشبورد مدیریتی و یکپارچه‌سازی امنیت Cloudflare برای اکوسیستم ZedPay.',
        source: 'سوابق حرفه‌ای تأییدشده',
        year: '2023–2025'
      },
      {
        category: 'صنعت',
        text: 'مدیریت تامین تجهیزات صنعتی — از پمپ آتش‌نشانی معادن گل‌گهر تا تجهیزات ابزار دقیق بین‌المللی.',
        source: 'سوابق Sanatm و Europe Gayrimenkul',
        year: '2015–2024'
      }
    ],
    trustSignals: [
      'شفافیت تماس: info@bizdavar.com و webmaster@bizdavar.ir',
      'پروفایل بنیان‌گذار قابل راستی‌آزمایی در LinkedIn',
      'نمونه‌کارهای زنده با دامنه‌های مستقل',
      'گواهینامه‌های Google Analytics و تبلیغات',
      'حضور فعال در اینستاگرام و لینکدین'
    ]
  },

  /** سوالات متداول E-E-A-T */
  faqIntel: [
    { q: 'بیزدوار گروپ از چه سالی فعالیت می‌کند؟', a: 'بیزدوار از سال ۲۰۱۳ (۱۳۹۲) توسط ارسان جاهد تبریزی راه‌اندازی شده و خدمات دیجیتال، وب و صنعتی را تحت یک برند یکپارچه ارائه می‌دهد.' },
    { q: 'بیزدوار در چه کشورهایی پروژه اجرا کرده؟', a: 'پروژه‌ها در ۱۱ کشور شامل ترکیه، امارات، آلمان، آمریکا، انگلستان، ارمنستان، لبنان، ایران، عراق، گرجستان و ایتالیا انجام شده است.' },
    { q: 'تفاوت بیزدوار با آژانس‌های دیجیتال چیست؟', a: 'ترکیب آژانس دیجیتال کامل (سئو، تبلیغات، SMM) با توسعه فنی (وردپرس، فین‌تک، AI) و تامین تجهیزات صنعتی B2B — یک تیم برای رشد و زیرساخت.' },
    { q: 'آیا بیزدوار فقط طراحی سایت انجام می‌دهد؟', a: 'خیر. علاوه بر Fast Web Studio و طراحی حرفه‌ای، بازاریابی دیجیتال، مدیریت زیرساخت از طریق Netinode، فین‌تک و تامین VEGA/Prosense نیز در حوزه فعالیت است.' },
    { q: 'چگونه اعتبار بیزدوار را بررسی کنم؟', a: 'پروفایل LinkedIn بنیان‌گذار، نمونه‌کارهای زنده در portfolio، گواهینامه‌های Google و ارتباط مستقیم از طریق info@bizdavar.com.' }
  ]
};
