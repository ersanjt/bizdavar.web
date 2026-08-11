/**
 * Prosense — Product catalog (source: prosense.com.tr)
 * Images: assets/images/prosense/ — fetched via scripts/fetch-prosense-assets.py
 */
const PROSENSE_IMG = 'assets/images/prosense/';

window.PROSENSE_CATALOG = {
  brand: {
    name: 'Prosense',
    nameFa: 'پروسنس',
    logo: 'assets/images/partners/prosense.svg',
    logoAlt: 'Prosense — gas and flame detectors supplied from Turkey',
    heroImage: PROSENSE_IMG + 'hero-pq-sil2.webp',
    heroImageAlt: 'Prosense PQ series SIL2 gas detector with hydrocarbon LEL display',
    heroEyebrow: 'تامین اصل برای مهندسان فارسی‌زبان در سراسر جهان',
    heroHeadline: 'دتکتورهای Prosense',
    heroHeadlineSub: 'گاز، شعله و ایمنی فرآیند — مشاوره فنی فارسی، پیش‌فاکتور شفاف و لجستیک بین‌المللی',
    tagline: 'Gaz ve Alev Dedektörleri',
    taglineFa: 'دتکتور گاز و شعله — ساخت ترکیه',
    since: 'از سال ۲۰۰۶',
    origin: 'کارتال، استانبول — ترکیه',
    officialUrl: 'https://www.prosense.com.tr/?lang=tr',
    email: 'info@prosense.com.tr',
    phone: '+90 216 306 77 88',
    descriptionFa: 'بیزدوار گروپ تامین‌کننده دتکتورهای گاز و شعله Prosense است. محصول اصل با گواهی SIL/M1/EN، مشاوره انتخاب گاز و مدل به فارسی (واتساپ)، پیش‌فاکتور شفاف و هماهنگی حمل برای پروژه‌های ایران و مشتریان فارسی‌زبان در خارج.',
    heroStats: [
      { value: '1000+', label: 'گاز قابل تشخیص' },
      { value: 'SIL2/3', label: 'گواهی ایمنی' },
      { value: '۱۲+', label: 'سال تجربه تامین' }
    ]
  },

  trustSignals: [
    { icon: 'target', label: 'محصول اصل', desc: 'تامین مستقیم از Prosense ترکیه — با گواهینامه و سریال معتبر' },
    { icon: 'mail', label: 'مشاوره فارسی', desc: 'انتخاب نوع گاز، رنج و مدل — در واتساپ فارسی، از هر کجای دنیا' },
    { icon: 'globe', label: 'لجستیک بین‌المللی', desc: 'خرید، حمل و گمرک از استانبول تا مقصد پروژه شما' },
    { icon: 'lab', label: 'گواهینامه و کالیبراسیون', desc: 'SIL2/3 · M1 Maden · EN-50545-1 · TÜRKAK' }
  ],

  whyBuyFromUs: [
    {
      icon: 'target',
      title: 'انتخاب درست گاز و مدل',
      desc: 'بیش از ۱۰۰۰ گاز قابل تشخیص — اگر نوع گاز یا رنج را نمی‌دانید، شرایط محیط را بگویید. ما مدل PQ، SafeVader، SOMA یا PPS+ مناسب را پیشنهاد می‌دهیم.'
    },
    {
      icon: 'factory',
      title: 'مناسب پروژه‌های صنعتی واقعی',
      desc: 'تجربه تامین برای پتروشیمی، پالایشگاه، معادن، پارکینگ سرپوشیده، تصفیه آب و نیروگاه. گواهی SIL و M1 برای ایمنی فرآیند.'
    },
    {
      icon: 'document',
      title: 'پیش‌فاکتور و زمان‌بندی شفاف',
      desc: 'قبل از پرداخت، قیمت، زمان تحویل تقریبی و مشخصات فنی کامل را دریافت می‌کنید — مناسب واحد خرید و مهندسی.'
    },
    {
      icon: 'handshake',
      title: 'یک نقطه تماس فارسی',
      desc: 'دتکتور + پنل + آژیر + نرم‌افزار — همه از یک تیم فارسی‌زبان. نیازی به مکاتبه مستقیم با کارخانه نیست.'
    }
  ],

  purchaseSteps: [
    { num: '۱', title: 'استعلام', desc: 'واتساپ فارسی یا فرم تماس — نوع گاز، محیط (Ex/معمولی)، تعداد و سری مدل' },
    { num: '۲', title: 'مشاوره فنی', desc: 'پیشنهاد سری و مدل — PQ / SafeVader / SOMA / PPS+ و پنل S-DPX در صورت نیاز' },
    { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت، زمان تحویل، گواهینامه‌ها و شرایط پرداخت — شفاف و قابل بررسی' },
    { num: '۴', title: 'تامین و حمل', desc: 'سفارش از Prosense، بسته‌بندی صنعتی و هماهنگی لجستیک بین‌المللی' },
    { num: '۵', title: 'تحویل و پشتیبانی', desc: 'تحویل در مقصد — دیتاشیت، راهنمای نصب، کالیبراسیون و پاسخ فنی فارسی' }
  ],

  quoteChecklist: {
    title: 'برای استعلام دقیق این موارد را بفرستید',
    desc: 'حتی اگر فقط بخشی را می‌دانید — همان را در واتساپ بفرستید تا مدل مناسب پیشنهاد شود.',
    items: [
      'نوع گاز خطرناک (H2S، CH4، CO، LEL، O2، NH3 و...)',
      'محیط نصب: Ex Zone 1/2 یا معمولی · دمای محیط',
      'خروجی سیگنال مورد نیاز: ۴–۲۰mA · رله · HART · Modbus',
      'تعداد نقطه اندازه‌گیری و نیاز به پنل کنترل',
      'گواهی لازم: SIL2/3 · M1 معدن · EN-50545-1 پارکینگ',
      'شهر / کشور تحویل و زمان تقریبی پروژه'
    ],
    tip: 'اگر مدل دقیق را نمی‌دانید، فقط گاز + محیط را بگویید — واحد فنی پیشنهاد می‌دهد.'
  },

  quickSeries: [
    { id: 'pq', name: 'PQ Serisi', tag: 'SIL2/3', hint: 'ایمنی فرآیند · H2S / LEL / O2' },
    { id: 'safevader', name: 'SafeVader', tag: 'Process Safety', hint: 'گاز سمی و قابل اشتعال' },
    { id: 'soma', name: 'SOMA M1', tag: 'معدن', hint: 'تونل و معادن زیرزمینی' },
    { id: 'pps-plus', name: 'PPS+', tag: 'EN-50545-1', hint: 'پارکینگ سرپوشیده CO / NO2' }
  ],

  iranIndustries: [
    { name: 'پتروشیمی و پالایش', desc: 'دتکتور SIL2/3 برای H2S، LEL، O2 و هیدروکاربن', image: PROSENSE_IMG + 'industry-petrochemical.webp', icon: 'flask', models: 'PQ · SafeVader · MPS' },
    { name: 'نفت و گاز', desc: 'سیستم‌های ثابت و Open Path برای محیط‌های خطرناک', image: PROSENSE_IMG + 'industry-oil-gas.webp', icon: 'barrel', models: 'PQ · Open Path · Marine' },
    { name: 'معدن و تونل', desc: 'سری SOMA با گواهی M1 — CH4، CO و O2', image: PROSENSE_IMG + 'industry-mining.webp', icon: 'pickaxe', models: 'SOMA M1' },
    { name: 'پارکینگ سرپوشیده', desc: 'PPS+ مطابق EN-50545-1 — CO و NO2', image: PROSENSE_IMG + 'industry-parking.webp', icon: 'parking', models: 'PPS+ · S-DPX' },
    { name: 'تصفیه آب و فاضلاب', desc: 'H2S، CH4، NH3، SO2 — محیط‌های مرطوب', image: PROSENSE_IMG + 'industry-water.webp', icon: 'droplet', models: 'PQ · SafeVader' },
    { name: 'فولاد و صنعت سنگین', desc: 'دتکتور مقاوم برای محیط‌های سخت صنعتی', image: PROSENSE_IMG + 'industry-steel.webp', icon: 'factory', models: 'PQ · Flame' }
  ],

  faq: [
    {
      q: 'محصول اصل Prosense است؟',
      a: 'بله — فقط محصول اصل از Prosense ترکیه تامین می‌شود. هر سفارش با مشخصات فنی، سریال و گواهینامه‌های مربوطه (SIL، M1، EN و...) ارائه می‌شود.'
    },
    {
      q: 'چطور نوع گاز و مدل را انتخاب کنم؟',
      a: 'نوع گاز خطرناک (H2S، CH4، CO، LEL و...)، محیط نصب (Ex Zone 1/2)، رنج اندازه‌گیری و خروجی سیگنال (۴-۲۰mA، رله، HART) را در واتساپ فارسی بفرستید. واحد فنی ما مدل مناسب را پیشنهاد می‌دهد.'
    },
    {
      q: 'از خارج ایران هم می‌توانم استعلام بگیرم؟',
      a: 'بله — مشاوره و واتساپ به فارسی برای مهندسان و خریداران فارسی‌زبان در سراسر جهان فعال است. مقصد تحویل و شرایط حمل در پیش‌فاکتور مشخص می‌شود.'
    },
    {
      q: 'زمان تحویل چقدر است؟',
      a: 'معمولاً ۳ تا ۶ هفته بسته به مدل، موجودی و مقصد. زمان دقیق در پیش‌فاکتور اعلام می‌شود. برای پروژه‌های فوری، جایگزین موجود پیشنهاد می‌شود.'
    },
    {
      q: 'گواهی SIL برای پروژه ما لازم است؟',
      a: 'برای پروژه‌های ایمنی فرآیند (SIS) سری PQ با گواهی SIL2/3 مناسب است. نوع پروژه را بگویید تا مدل و سطح گواهی درست پیشنهاد شود.'
    },
    {
      q: 'کالیبراسیون و سیلندر تست هم تامین می‌شود؟',
      a: 'بله — سیلندر Span/Test، گاز مخلوط و رگولاتور کالیبراسیون Prosense قابل تامین است. خدمات کالیبراسیون TÜRKAK در ترکیه نیز هماهنگ می‌شود.'
    },
    {
      q: 'پنل کنترل و نرم‌افزار هم دارید؟',
      a: 'بله — پنل‌های S-DP4 تا S-DPX128، نرم‌افزار S-MCX و سیستم کامل پارکینگ PPS+ به‌صورت یکپارچه قابل تامین است.'
    }
  ],

  inquiryTemplate: 'سلام، درخواست استعلام قیمت و تامین {product} از Prosense دارم.\n\nنوع گاز / محیط نصب:\nخروجی سیگنال:\nتعداد مورد نیاز:\nشهر / کشور تحویل:\n',

  highlights: [
    {
      id: 'pq',
      title: 'PQ Serisi — SIL2 / SIL3',
      titleTr: 'PQ Serisi Gaz Dedektörleri',
      desc: 'پرفروش‌ترین دتکتور ثابت — گواهی SIL برای ایمنی فرآیند پتروشیمی و پالایشگاه',
      useCaseFa: 'H2S، LEL، O2 — محیط Ex و پروژه‌های SIS',
      badge: 'SIL',
      inquiryName: 'PQ Serisi',
      image: PROSENSE_IMG + 'hero-pq-sil2.webp',
      imageAlt: 'Prosense PQ series SIL2 SIL3 fixed gas detector for process safety'
    },
    {
      id: 'safevader',
      title: 'SafeVader Serisi',
      titleTr: 'SafeVader Gaz Dedektörleri',
      desc: 'دتکتور ایمنی فرآیند — انتخاب رایج برای واحدهای HSE و اتوماسیون',
      useCaseFa: 'گازهای سمی و قابل اشتعال در تاسیسات صنعتی',
      badge: 'Process Safety',
      inquiryName: 'SafeVader Serisi',
      image: PROSENSE_IMG + 'category-safevader.webp',
      imageAlt: 'Prosense SafeVader process safety gas detector'
    },
    {
      title: 'Marine & Offshore',
      titleTr: 'Denizlerde Güvenle Yol Alın',
      desc: 'گواهی دریانوردی — سیستم‌های H2S و CH4 برای کشتی و offshore',
      useCaseFa: 'کشتی‌سازی، پلتفرم دریایی، بنادر',
      badge: 'Denizcilik',
      inquiryName: 'Marine Gaz Dedektörü',
      image: PROSENSE_IMG + 'hero-marine.webp',
      imageAlt: 'Prosense marine certified H2S and CH4 gas detection system'
    },
    {
      title: 'MPS™ Hidrokarbon',
      titleTr: 'Prosense Hidrokarbon Gaz Dedektörü',
      desc: 'سنسور MPS — دقت بالا در تشخیص هیدروکاربن',
      useCaseFa: 'پالایشگاه، خط لوله، مخازن ذخیره',
      badge: 'MPS',
      inquiryName: 'MPS Hidrokarbon Dedektörü',
      image: PROSENSE_IMG + 'hero-mps-hydrocarbon.webp',
      imageAlt: 'Prosense MPS hydrocarbon gas detector sensor'
    },
    {
      title: 'PQD VOC',
      titleTr: 'Prosense ile Hassas Ölçüm',
      desc: 'دتکتور VOC — کاهش ریسک ترکیبات آلی فرار',
      useCaseFa: 'صنایع شیمیایی، رنگ، پتروشیمی',
      badge: 'VOC',
      inquiryName: 'PQD VOC Dedektörü',
      image: PROSENSE_IMG + 'hero-voc-pqd.webp',
      imageAlt: 'Prosense PQD VOC volatile organic compound detector'
    },
    {
      title: 'TÜRKAK — کالیبراسیون',
      titleTr: 'Kalibrasyon Bakım Hizmeti',
      desc: 'کالیبراسیون مطابق TS EN ISO/IEC 17025 — AB-0260-K',
      useCaseFa: 'نگهداری دوره‌ای دتکتورها — هماهنگی از طریق بیزدوار',
      badge: 'Kalibrasyon',
      inquiryName: 'Kalibrasyon Hizmeti',
      image: PROSENSE_IMG + 'hero-calibration.webp',
      imageAlt: 'Prosense TÜRKAK accredited gas detector calibration service'
    },
    {
      id: 'soma',
      title: 'SOMA Serisi — M1',
      titleTr: 'Soma Maden Gaz Dedektörü',
      desc: 'دتکتور معدن — گواهی M1 برای معادن و تونل‌ها',
      useCaseFa: 'معادن زغال، تونل مترو، کارگاه‌های زیرزمینی',
      badge: 'Maden',
      inquiryName: 'SOMA Serisi',
      image: PROSENSE_IMG + 'hero-soma-mining.webp',
      imageAlt: 'Prosense SOMA M1 mining gas detector for tunnels and coal mines'
    },
    {
      id: 'pps-plus',
      title: 'PPS+ Otopark — EN 50545-1',
      titleTr: 'Kapalı Otoparklarda Gaz Algılama',
      desc: 'سیستم پارکینگ مطابق EN-50545-1 — CO و NO2',
      useCaseFa: 'پارکینگ‌های سرپوشیده، مراکز تجاری و بیمارستان',
      badge: 'Otopark',
      inquiryName: 'PPS+ Otopark Sistemi',
      image: PROSENSE_IMG + 'hero-parking-pps-plus.webp',
      imageAlt: 'Prosense PPS+ EN-50545-1 parking gas detection system for CO and NO2'
    }
  ],

  categories: [
    {
      id: 'fixed',
      title: 'دتکتورهای گاز ثابت',
      titleTr: 'Sabit Gaz Dedektörleri',
      icon: 'sensor',
      image: PROSENSE_IMG + 'category-fixed-gas.webp',
      desc: 'سنسورهای گاز ثابت برای نصب دائم در تاسیسات صنعتی',
      series: [
        { name: 'PQ Serisi', note: 'SIL2, SIL3 sertifikalı', featured: true },
        { name: 'PX Serisi', note: 'عملکرد پیشرفته' },
        { name: 'P Serisi', note: 'سری استاندارد' },
        { name: 'PE Serisi', note: 'نسخه PE' },
        { name: 'SOMA Serisi', note: 'M1 Sertifikalı — Maden', featured: true },
        { name: 'SafeVader Serisi', note: 'ایمنی فرآیند', featured: true },
        { name: 'PE-Kayo Serisi', note: 'سری Kayo' },
        { name: 'PC3 Serisi', note: 'فشرده' },
        { name: 'BTN Serisi', note: 'BTN' },
        { name: 'PPS Serisi', note: 'Otopark gaz algılama' },
        { name: 'PPS+ Serisi', note: 'EN-50545-1 Sertifikalı', featured: true },
        { name: 'PPSR Serisi', note: 'Otopark — PPSR' },
        { name: 'Open Path', note: 'مسیر باز — شناسایی از راه دور' },
        { name: 'Smart 3G', note: 'ارتباط هوشمند 3G' },
        { name: 'Xgard', note: 'Xgard' },
        { name: 'IRmax', note: 'فناوری IR' }
      ]
    },
    {
      id: 'portable',
      title: 'دتکتورهای گاز پرتابل',
      titleTr: 'Portatif Gaz Dedektörleri',
      icon: 'bag',
      image: PROSENSE_IMG + 'category-portable-gas.webp',
      desc: 'ابزار اندازه‌گیری قابل حمل برای کارکنان و بازرسی میدانی',
      series: [
        { name: 'Gas-Pro', note: 'حرفه‌ای' },
        { name: 'Tank-Pro', note: 'مخازن و تانک' },
        { name: 'T4', note: 'چهار گاز' },
        { name: 'Tetra 3', note: 'Tetra 3' },
        { name: 'Gasman', note: 'Gasman' },
        { name: 'Triple Plus+', note: 'سه‌گانه+' },
        { name: 'Detective+', note: 'Detective+' },
        { name: 'Detective Wireless', note: 'بی‌سیم' },
        { name: 'Ventis Pro', note: 'Ventis Pro' },
        { name: 'MX6 iBrid', note: 'iBrid' },
        { name: 'Ventis MX4', note: 'MX4' },
        { name: 'Tango TX1', note: 'Tango TX1' },
        { name: 'GasBadge Pro', note: 'GasBadge Pro' }
      ]
    },
    {
      id: 'flame',
      title: 'دتکتورهای شعله',
      titleTr: 'Alev Dedektörleri',
      icon: 'flame',
      image: PROSENSE_IMG + 'category-flame-detector.webp',
      desc: 'شناسایی شعله و آتش در محیط‌های صنعتی و خطرناک',
      series: [
        { name: 'Takex', note: 'Takex' },
        { name: 'Rezontech', note: 'Rezontech' },
        { name: 'Viking', note: 'Viking' },
        { name: 'Spectrex', note: 'Spectrex' },
        { name: 'Det-Tronics', note: 'Det-Tronics' },
        { name: 'Siemens', note: 'Siemens' }
      ]
    },
    {
      id: 'panels',
      title: 'پنل‌های کنترل',
      titleTr: 'Kontrol Panelleri',
      icon: 'desktop',
      image: PROSENSE_IMG + 'category-control-panel.webp',
      desc: 'پنل‌های آنالوگ و دیجیتال برای مدیریت چندین دتکتور',
      series: [
        { name: 'S-DP4 Analog', note: '۴ کانال آنالوگ' },
        { name: 'S-DP8 Analog', note: '۸ کانال آنالوگ' },
        { name: 'S-DP32 Dijital', note: '۳۲ کانال دیجیتال' },
        { name: 'S-DPX004 Analog', note: 'DPX ۴ آنالوگ' },
        { name: 'S-DPX008 Analog', note: 'DPX ۸ آنالوگ' },
        { name: 'S-DPX032 Dijital & Analog', note: '۳۲ ترکیبی' },
        { name: 'S-DPX064 Dijital & Analog', note: '۶۴ ترکیبی' },
        { name: 'S-DPX128 Dijital & Analog', note: '۱۲۸ ترکیبی' },
        { name: 'MULTISCAN++', note: 'MULTISCAN++' },
        { name: 'PL4+', note: 'PL4+' },
        { name: 'PPS-Manager', note: 'مدیریت PPS' },
        { name: 'PPS+-Manager', note: 'مدیریت PPS+' }
      ]
    },
    {
      id: 'parking',
      title: 'سیستم گاز پارکینگ',
      titleTr: 'Otopark Gaz Algılama',
      icon: 'parking',
      image: PROSENSE_IMG + 'category-parking.webp',
      desc: 'سیستم‌های تشخیص CO و NO2 در پارکینگ‌های بسته',
      series: [
        { name: 'PPS Otopark Gaz Algılama', note: 'PPS' },
        { name: 'PPS+ Otopark Gaz Algılama', note: 'EN-50545-1', featured: true },
        { name: 'PPSR Otopark Gaz Algılama', note: 'PPSR' }
      ]
    },
    {
      id: 'software',
      title: 'نرم‌افزارها',
      titleTr: 'Yazılımlar',
      icon: 'monitor',
      image: PROSENSE_IMG + 'category-software.webp',
      desc: 'نرم‌افزار پیکربندی، مانیتورینگ و مدیریت سیستم',
      series: [
        { name: 'S-PVSX', note: 'S-PVSX' },
        { name: 'S-MCX004', note: 'MCX ۴' },
        { name: 'S-MCX008', note: 'MCX ۸' },
        { name: 'S-MCX032', note: 'MCX ۳۲' },
        { name: 'S-MCX064', note: 'MCX ۶۴' },
        { name: 'S-MCX128', note: 'MCX ۱۲۸' },
        { name: 'S-MCX', note: 'S-MCX' },
        { name: 'S-SETX', note: 'S-SETX' }
      ]
    },
    {
      id: 'calibration',
      title: 'سیلندر کالیبراسیون',
      titleTr: 'Kalibrasyon Test Tüpü',
      icon: 'lab',
      image: PROSENSE_IMG + 'category-calibration.webp',
      desc: 'گازهای تست و کالیبراسیون Span',
      series: [
        { name: 'Span / Test Gaz Tüpleri', note: 'Span' },
        { name: 'Karışım Gaz Tüpleri', note: 'Karışım' },
        { name: 'Sıfırlama Tüpleri', note: 'Sıfır' },
        { name: 'Kalibrasyon Gaz Regülatörü', note: 'Regülatör' }
      ]
    },
    {
      id: 'other',
      title: 'سایر تجهیزات',
      titleTr: 'Diğer Ekipmanlar',
      icon: 'wrench',
      image: PROSENSE_IMG + 'category-other-equipment.webp',
      desc: 'لوازم جانبی، آژیر، منبع تغذیه و تجهیزات Ex',
      series: [
        { name: 'Gaz Toplama Aparatı', note: 'نمونه‌برداری' },
        { name: 'Ex Yangın Ekipmanları', note: 'Ex' },
        { name: 'Siren ve Flaşörler', note: 'هشدار' },
        { name: 'PG-PS120 24V Güç Kaynağı', note: '24V' },
        { name: 'EOL (End of Life)', note: 'EOL' }
      ]
    }
  ],

  industries: [
    { name: 'نفت و گاز', nameTr: 'Petrol ve Gaz', desc: 'SIL2 sertifikalı سیستم‌های درجه یک', icon: 'barrel', image: PROSENSE_IMG + 'industry-oil-gas.webp' },
    { name: 'ایستگاه گاز', nameTr: 'Gaz Dağıtım İstasyonları', desc: 'گازهای قابل اشتعال و سمی', icon: 'gas-station', image: PROSENSE_IMG + 'industry-gas-distribution.webp' },
    { name: 'پارکینگ سرپوشیده', nameTr: 'Kapalı Otoparklar', desc: 'EN 50545-1 — اولین سیستم جهانی', icon: 'parking', image: PROSENSE_IMG + 'industry-parking.webp' },
    { name: 'کشتیرانی', nameTr: 'Denizcilik', desc: 'H2S و CH4 — Marine sertifikalı', icon: 'ship', image: PROSENSE_IMG + 'industry-marine.webp' },
    { name: 'HVAC و Freon', nameTr: 'HVAC - Freon', desc: 'CO2, O2, NH3, Freon', icon: 'snowflake', image: PROSENSE_IMG + 'industry-hvac.webp' },
    { name: 'تصفیه آب', nameTr: 'Su Arıtma Tesisleri', desc: 'H2S, CH4, NH3, SO2, O2, CO', icon: 'droplet', image: PROSENSE_IMG + 'industry-water.webp' },
    { name: 'پتروشیمی', nameTr: 'Petrokimya', desc: 'ایمنی فرآیند', icon: 'flask', image: PROSENSE_IMG + 'industry-petrochemical.webp' },
    { name: 'معدن و تونل', nameTr: 'Maden ve Tüneller', desc: 'SOMA — M1 sertifikalı', icon: 'pickaxe', image: PROSENSE_IMG + 'industry-mining.webp' },
    { name: 'فولاد', nameTr: 'Demir Çelik', desc: 'محیط‌های سنگین صنعتی', icon: 'factory', image: PROSENSE_IMG + 'industry-steel.webp' },
    { name: 'داروسازی', nameTr: 'İlaç Sanayi', desc: 'کنترل گازهای فرآیندی', icon: 'pill', image: PROSENSE_IMG + 'industry-pharma.webp' },
    { name: 'غذا و نوشیدنی', nameTr: 'Yemek ve İçecek', desc: 'ایمنی تولید', icon: 'utensils', image: PROSENSE_IMG + 'industry-food.webp' },
    { name: 'اتاق شارژ باتری', nameTr: 'Akü Dolum Odaları', desc: 'محافظت در برابر هیدروژن', icon: 'battery', image: PROSENSE_IMG + 'industry-battery.webp' }
  ],

  academy: {
    title: 'مشاوره فنی — نه فقط فروش',
    descFa: 'تیم فنی بیزدوار بر اساس استانداردهای Prosense و تجربه پروژه‌های صنعتی، سیستم تشخیص گاز شما را طراحی می‌کند — از انتخاب گاز تا پنل، آژیر و نرم‌افزار.',
    image: PROSENSE_IMG + 'academy-factory.webp',
    imageSecondary: PROSENSE_IMG + 'academy-production.webp',
    url: 'https://www.prosense.com.tr/?lang=tr',
    urlLabel: 'مستندات Prosense',
    topics: ['انتخاب نوع گاز و رنج', 'طراحی سیستم ثابت و پنل', 'گواهینامه SIL/M1/EN', 'کالیبراسیون TÜRKAK', 'سیستم پارکینگ PPS+', 'پشتیبانی پس از نصب']
  },

  services: [
    { title: 'مشاوره فنی رایگان', desc: 'انتخاب سری و گاز — PQ، SafeVader، SOMA، PPS+ — به فارسی در واتساپ' },
    { title: 'تامین محصول اصل', desc: 'سفارش از Prosense ترکیه با گواهینامه و مشخصات فنی کامل' },
    { title: 'پیش‌فاکتور شفاف', desc: 'قیمت، زمان تحویل و شرایط پرداخت قبل از ثبت سفارش' },
    { title: 'طراحی سیستم کامل', desc: 'دتکتور + پنل S-DPX + آژیر + نرم‌افزار S-MCX' },
    { title: 'کالیبراسیون و گاز تست', desc: 'سیلندر Span/Test و هماهنگی کالیبراسیون TÜRKAK' },
    { title: 'لجستیک تا مقصد', desc: 'هماهنگی حمل بین‌المللی و تحویل به نماینده شما' }
  ],

  bizdavarNote: 'بیزدوار گروپ — تامین Prosense، VEGA و سایر برندهای ابزار دقیق صنعتی'
};
