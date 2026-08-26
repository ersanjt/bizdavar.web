/**
 * Prosense — Product catalog (source: prosense.com.tr)
 * Images: assets/images/prosense/ — fetched via scripts/fetch-prosense-assets.py
 */
const PROSENSE_IMG = 'assets/images/prosense/';
const pn = (fa, tr, en) => ({ note: fa, noteFa: fa, noteTr: tr, noteEn: en });
const pnm = (fa, tr, en) => ({ name: fa, nameFa: fa, nameTr: tr, nameEn: en });

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
    tagline: 'دتکتور گاز و شعله — ساخت ترکیه',
    taglineFa: 'دتکتور گاز و شعله — ساخت ترکیه',
    taglineTr: 'Gaz ve Alev Dedektörleri',
    taglineEn: 'Gas and flame detectors — made in Turkey',
    since: 'از سال ۲۰۰۶',
    origin: 'کارتال، استانبول — ترکیه',
    officialUrl: 'https://www.prosense.com.tr/?lang=en',
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
    { icon: 'globe', label: 'لجستیک بین‌المللی', desc: 'خرید، حمل و گمرک تا مقصد پروژه شما' },
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
    { id: 'pq', name: 'PQ Series', tag: 'SIL2/3', hint: 'ایمنی فرآیند · H2S / LEL / O2' },
    { id: 'safevader', name: 'SafeVader', tag: 'Safe Area', hint: 'آزمایشگاه، HVAC، هیدروژن' },
    { id: 'soma', name: 'SOMA M1', tag: 'معدن', hint: 'تونل و معادن زیرزمینی' },
    { id: 'pps-plus', name: 'PPS+', tag: 'EN-50545-1', hint: 'پارکینگ سرپوشیده CO / NO2' }
  ],

  iranIndustries: [
    { name: 'پتروشیمی و پالایش', desc: 'دتکتور SIL2/3 برای H2S، LEL، O2 و هیدروکربن', image: PROSENSE_IMG + 'industry-petrochemical.webp', icon: 'flask', models: 'PQ · MPS' },
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
      q: 'SafeVader همان دتکتور SIL یا ضد انفجار است؟',
      a: 'خیر. SafeVader برای محیط امن داخلی است (آزمایشگاه، بیمارستان، HVAC، مبرد و اتاق هیدروژن) با LCD، خروجی ۴–۲۰mA، Modbus و رله روی دستگاه. برای Zone 1/2 و پروژه‌های SIS از سری PQ استفاده کنید.'
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
      title: 'سری PQ — SIL2 / SIL3',
      titleEn: 'PQ Series — SIL2 / SIL3',
      titleTr: 'PQ Serisi — SIL2 / SIL3',
      desc: 'پرفروش‌ترین دتکتور ثابت — گواهی SIL برای ایمنی فرآیند پتروشیمی و پالایشگاه',
      useCaseFa: 'H2S، LEL، O2 — محیط Ex و پروژه‌های SIS',
      badge: 'SIL',
      inquiryName: 'PQ Series',
      image: PROSENSE_IMG + 'hero-pq-sil2.webp',
      imageAlt: 'Prosense PQ series SIL2 SIL3 fixed gas detector for process safety'
    },
    {
      id: 'safevader',
      title: 'سری SafeVader',
      titleEn: 'SafeVader Series',
      titleTr: 'SafeVader Serisi',
      desc: 'دتکتور گاز برای محیط امن داخلی — LCD، خروجی ۴–۲۰mA و Modbus روی دستگاه. مناسب آزمایشگاه، بیمارستان، مدرسه، مبرد و اتاق هیدروژن؛ جایگزین دتکتور Ex/SIL نیست.',
      useCaseFa: 'محیط غیر انفجاری · آزمایشگاه، HVAC، بیمارستان، شارژ باتری',
      badge: 'محیط امن',
      inquiryName: 'SafeVader Series',
      image: PROSENSE_IMG + 'category-safevader.webp',
      imageAlt: 'Prosense SafeVader indoor safe-area gas detector with LCD'
    },
    {
      title: 'دریایی و فراساحلی',
      titleEn: 'Marine & Offshore',
      titleTr: 'Denizcilik ve Offshore',
      desc: 'گواهی دریانوردی — سیستم‌های H2S و CH4 برای کشتی و سکوهای فراساحلی',
      useCaseFa: 'کشتی‌سازی، پلتفرم دریایی، بنادر',
      badge: 'دریایی',
      inquiryName: 'Marine gas detector',
      image: PROSENSE_IMG + 'hero-marine.webp',
      imageAlt: 'Prosense marine certified H2S and CH4 gas detection system'
    },
    {
      title: 'MPS™ هیدروکربن',
      titleEn: 'MPS™ Hydrocarbon',
      titleTr: 'MPS™ Hidrokarbon',
      desc: 'سنسور MPS — دقت بالا در تشخیص هیدروکربن',
      useCaseFa: 'پالایشگاه، خط لوله، مخازن ذخیره',
      badge: 'MPS',
      inquiryName: 'MPS hydrocarbon detector',
      image: PROSENSE_IMG + 'hero-mps-hydrocarbon.webp',
      imageAlt: 'Prosense MPS hydrocarbon gas detector sensor'
    },
    {
      title: 'PQD VOC',
      titleEn: 'PQD VOC',
      titleTr: 'PQD VOC',
      desc: 'دتکتور VOC — کاهش ریسک ترکیبات آلی فرار',
      useCaseFa: 'صنایع شیمیایی، رنگ، پتروشیمی',
      badge: 'VOC',
      inquiryName: 'PQD VOC detector',
      image: PROSENSE_IMG + 'hero-voc-pqd.webp',
      imageAlt: 'Prosense PQD VOC volatile organic compound detector'
    },
    {
      title: 'کالیبراسیون TÜRKAK',
      titleEn: 'TÜRKAK — Calibration',
      titleTr: 'TÜRKAK — Kalibrasyon',
      desc: 'کالیبراسیون مطابق TS EN ISO/IEC 17025 — آزمایشگاه معتبر AB-2060-K',
      useCaseFa: 'نگهداری دوره‌ای دتکتورها — هماهنگی از طریق بیزدوار',
      badge: 'کالیبراسیون',
      inquiryName: 'Calibration service',
      image: PROSENSE_IMG + 'hero-calibration.webp',
      imageAlt: 'Prosense TÜRKAK accredited gas detector calibration service'
    },
    {
      id: 'soma',
      title: 'سری SOMA — M1',
      titleEn: 'SOMA Series — M1',
      titleTr: 'SOMA Serisi — M1',
      desc: 'دتکتور معدن — گواهی M1 برای معادن و تونل‌ها',
      useCaseFa: 'معادن زغال، تونل مترو، کارگاه‌های زیرزمینی',
      badge: 'معدن',
      inquiryName: 'SOMA Series',
      image: PROSENSE_IMG + 'hero-soma-mining.webp',
      imageAlt: 'Prosense SOMA M1 mining gas detector for tunnels and coal mines'
    },
    {
      id: 'pps-plus',
      title: 'PPS+ پارکینگ — EN 50545-1',
      titleEn: 'PPS+ Parking — EN 50545-1',
      titleTr: 'PPS+ Otopark — EN 50545-1',
      desc: 'سیستم پارکینگ مطابق EN-50545-1 — CO و NO2',
      useCaseFa: 'پارکینگ‌های سرپوشیده، مراکز تجاری و بیمارستان',
      badge: 'پارکینگ',
      inquiryName: 'PPS+ parking system',
      image: PROSENSE_IMG + 'hero-parking-pps-plus.webp',
      imageAlt: 'Prosense PPS+ EN-50545-1 parking gas detection system for CO and NO2'
    }
  ],

  categories: [
    {
      id: 'fixed',
      title: 'دتکتورهای گاز ثابت',
      titleTr: 'Sabit Gaz Dedektörleri',
      titleEn: 'Fixed gas detectors',
      icon: 'sensor',
      image: PROSENSE_IMG + 'category-fixed-gas.webp',
      imageAlt: 'Prosense fixed gas detectors for industrial, marine and commercial sites',
      imageAltFa: 'دتکتورهای گاز ثابت Prosense برای صنعت، دریایی و محیط تجاری',
      imageAltTr: 'Prosense sabit gaz dedektörleri — sanayi, denizcilik ve ticari tesisler',
      desc: 'دتکتورهای ثابت گازهای قابل اشتعال، سمی، خفه‌کننده و VOC — از صنعت سنگین SIL2 تا محیط امن داخلی، مطابق کاتالوگ رسمی Prosense',
      series: [
        {
          id: 'pq',
          officialPath: 'pq-series',
          featured: true,
          inquiryName: 'PQ Series',
          specs: 'SIL2 · ATEX/IECEx',
          ...pnm('سری PQ', 'PQ Serisi', 'PQ Series'),
          ...pn(
            'دتکتور ثابت صنعت سنگین — اندازه‌گیری پیوسته گازهای قابل اشتعال، سمی، خفه‌کننده و VOC با گواهی ATEX/IECEx و SIL2',
            'Ağır sanayi sabit dedektör — ATEX/IECEx ve SIL2; yanıcı, toksik, asfiksi ve VOC gazları',
            'Heavy-industry fixed detector — ATEX/IECEx and SIL2 for combustible, toxic, asphyxiant and VOC gases'
          ),
          image: PROSENSE_IMG + 'series-pq.webp',
          imageAlt: 'Prosense PQ Series SIL2 ATEX fixed gas detector with OLED display showing methane LEL',
          imageAltFa: 'دتکتور گاز ثابت سری PQ Prosense با نمایشگر OLED و گواهی SIL2',
          imageAltTr: 'Prosense PQ Serisi SIL2 ATEX sabit gaz dedektörü, OLED ekranlı',
          featuresFa: ['گواهی ATEX / IECEx و SIL2 · تایید عملکرد EN 60079-29-1', 'مدل PQD با نمایشگر OLED ۱۲۸×۶۴ و PQN بدون نمایشگر', 'حسگر PID، پلستور، الکتروشیمیایی، مادون قرمز و MPS™', 'خروجی ۴–۲۰mA، Modbus RS485 و کالیبراسیون مغناطیسی در Zone خطرناک'],
          featuresTr: ['ATEX / IECEx ve SIL2 · EN 60079-29-1 performans onayı', 'PQD OLED 128×64 ekranlı · PQN ekransız', 'PID, pellistor, elektrokimyasal, kızılötesi ve MPS™ sensör', '4–20 mA, Modbus RS485 ve manyetik kalibrasyon'],
          featuresEn: ['ATEX / IECEx and SIL2 · EN 60079-29-1 performance approval', 'PQD with 128×64 OLED display · PQN without display', 'PID, pellistor, electrochemical, infrared and MPS™ sensors', '4–20 mA, Modbus RS485 RTU and non-intrusive magnetic calibration']
        },
        {
          id: 'pq-marine',
          officialPath: 'pq-series-marine-gasdetector',
          featured: true,
          inquiryName: 'PQ Series Marine',
          specs: 'SIL2 · MED · Marine',
          ...pnm('سری PQ دریایی', 'PQ Serisi — Marine', 'PQ Series — Marine'),
          ...pn(
            'نسخه دریایی سری PQ — گواهی MED و Marine برای کشتی و سکوهای فراساحلی، همان بستر SIL2/ATEX',
            'PQ’nun denizcilik versiyonu — MED ve Marine sertifikası; gemi ve offshore platformlar',
            'Marine PQ — MED and marine certification for vessels and offshore platforms on the SIL2/ATEX platform'
          ),
          image: PROSENSE_IMG + 'series-pq-marine.webp',
          imageAlt: 'Prosense PQ Series marine SIL2 MED certified fixed gas detector for ships and offshore',
          imageAltFa: 'دتکتور گاز ثابت سری PQ دریایی Prosense با گواهی MED',
          imageAltTr: 'Prosense PQ Serisi denizcilik gaz dedektörü, MED sertifikalı',
          featuresFa: ['گواهی ATEX / IECEx، SIL2، MED و Marine', 'مناسب محیط خشن دریایی با درجه حفاظت بالا', 'حسگر PID، پلستور، الکتروشیمیایی، مادون قرمز و MPS™', 'مدل PQD با نمایشگر و PQN بدون نمایشگر'],
          featuresTr: ['ATEX / IECEx, SIL2, MED ve Marine sertifikaları', 'Zorlu deniz ortamı — yüksek IP', 'PID, pellistor, elektrokimyasal, IR ve MPS™', 'PQD ekranlı · PQN ekransız'],
          featuresEn: ['ATEX / IECEx, SIL2, MED and marine certificates', 'High ingress protection for harsh marine environments', 'PID, pellistor, electrochemical, infrared and MPS™ sensors', 'PQD with display · PQN without display']
        },
        {
          id: 'p',
          officialPath: 'p-series',
          inquiryName: 'P Series',
          specs: 'ATEX/IECEx · IP65',
          ...pnm('سری P', 'P Serisi', 'P Series'),
          ...pn(
            'دتکتور ثابت صنعتی — ATEX/IECEx، بدنه آلومینیوم ریخته‌گری و هد سنسور SS316، گازهای سمی، انفجاری و اکسیژن',
            'Endüstriyel sabit dedektör — ATEX/IECEx, alüminyum gövde ve SS316 sensör başlığı',
            'Industrial fixed detector — ATEX/IECEx, die-cast aluminium body and SS316 sensor head for toxic, explosive and oxygen gases'
          ),
          image: PROSENSE_IMG + 'series-p.webp',
          imageAlt: 'Prosense P Series ATEX IECEx industrial fixed gas detector with stainless sensor head',
          imageAltFa: 'دتکتور گاز ثابت صنعتی سری P Prosense با گواهی ATEX',
          imageAltTr: 'Prosense P Serisi ATEX/IECEx endüstriyel sabit gaz dedektörü',
          featuresFa: ['گواهی ATEX / IECEx · حفاظت IP65', 'حسگر پلستور، الکتروشیمیایی و مادون قرمز — LEL، ppm، VOL', 'خروجی ۴–۲۰mA، Modbus RS485 و رله P-3R+', 'تعویض هد سنسور ازپیش‌کالیبره‌شده · نصب دیواری یا سقفی'],
          featuresTr: ['ATEX / IECEx · IP65', 'Pellistor, elektrokimyasal ve IR — LEL, ppm, VOL', '4–20 mA, Modbus RS485 ve P-3R+ röle', 'Ön kalibrasyonlu sensör başlığı · duvar veya tavan montajı'],
          featuresEn: ['ATEX / IECEx · IP65 aluminium body', 'Pellistor, electrochemical and infrared sensors — LEL, ppm, VOL', '4–20 mA, Modbus RS485 and P-3R+ relay module', 'Pre-calibrated sensor-head swap · wall or ceiling mount']
        },
        {
          id: 'pe',
          officialPath: 'pe-series',
          inquiryName: 'PE Series',
          specs: 'ATEX/IECEx · 0–100% LEL',
          ...pnm('سری PE', 'PE Serisi', 'PE Series'),
          ...pn(
            'دتکتور ضد انفجار اقتصادی برای ترکیبات انفجاری — حسگر کاتالیستی ۰ تا ۱۰۰٪ LEL (LPG، متان، بخار بنزین، هیدروژن)',
            'Patlamaya dayanıklı ekonomik dedektör — katalitik sensör 0–100% LEL (LPG, metan, benzin buharı, hidrojen)',
            'Cost-effective Ex-proof detector — catalytic sensor 0–100% LEL for LPG, methane, petrol vapour and hydrogen'
          ),
          image: PROSENSE_IMG + 'series-pe.webp',
          imageAlt: 'Prosense PE Series ATEX explosion-proof green gas detector with stainless sensor head — do not open while energized',
          imageAltFa: 'دتکتور گاز ضد انفجار سری PE Prosense بدنه سبز و هد سنسور استیل — حسگر کاتالیستی LEL',
          imageAltTr: 'Prosense PE Serisi ATEX yeşil patlamaya dayanıklı gaz dedektörü, paslanmaz sensör başlıklı',
          gallery: [
            { image: PROSENSE_IMG + 'series-pe.webp', imageAlt: 'Prosense PE Series front view — green Ex-d housing, stainless sensor, cable gland' },
            { image: PROSENSE_IMG + 'series-pe-01.webp', imageAlt: 'Prosense PE Series three-quarter view — green housing, black sensor module and wall bracket' },
            { image: PROSENSE_IMG + 'series-pe-02.webp', imageAlt: 'Prosense PE Series studio render — green explosion-proof body and stainless steel sensor head' }
          ],
          featuresFa: ['حسگر کاتالیستی ۰–۱۰۰٪ LEL برای LPG، CH4، بخار بنزین، بوتان، پروپان و H2', 'گواهی ATEX / IECEx برای اتمسفر انفجاری', 'خروجی آنالوگ ۴–۲۰mA · ورودی کابل ½″ NPT (گلند PR-NYY12 جداگانه)', 'بدنه آلومینیوم ریخته‌گری IP65 · ماژول رله PE-2R+'],
          featuresTr: ['Katalitik 0–100% LEL — LPG, CH4, benzin buharı, bütan, propan, H2', 'ATEX / IECEx patlama ortamı', '4–20 mA analog · ½″ NPT kablo girişi (PR-NYY12 Ex d gland ayrı satılır)', 'IP65 alüminyum gövde · PE-2R+ röle'],
          featuresEn: ['Catalytic 0–100% LEL — LPG, CH4, petrol vapour, butane, propane, hydrogen', 'ATEX / IECEx for explosive atmospheres', '4–20 mA analogue · ½″ NPT cable entry (PR-NYY12 Ex d gland sold separately)', 'IP65 die-cast aluminium · PE-2R+ relay module']
        },
        {
          id: 'pe-kayo',
          officialPath: 'pe-kayo-series',
          inquiryName: 'PE-Kayo Series',
          specs: 'ATEX · Fuel stations',
          ...pnm('سری PE-Kayo', 'PE-Kayo Serisi', 'PE-Kayo Series'),
          ...pn(
            'مخصوص جایگاه سوخت — علاوه بر اندازه‌گیری LEL، شتاب‌سنج ضربه را تشخیص می‌دهد و می‌تواند جریان سوخت را قطع کند',
            'Akaryakıt istasyonları için — LEL ölçümü artı darbe (ivmeölçer) alarmı ile yakıt kesme',
            'Built for fuel stations — LEL gas detection plus an accelerometer that can cut fuel flow if the unit is hit'
          ),
          image: PROSENSE_IMG + 'series-pe-01.webp',
          imageAlt: 'Prosense PE-Kayo Series fuel-station gas detector — PE explosion-proof green housing with catalytic LEL head',
          imageAltFa: 'دتکتور گاز جایگاه سوخت سری PE-Kayo Prosense با حسگر ضربه',
          imageAltTr: 'Prosense PE-Kayo akaryakıt istasyonu gaz dedektörü, darbe sensörlü',
          featuresFa: ['طراحی ویژه جایگاه بنزین و گاز', 'تراشه شتاب‌سنج — هشدار ضربه خودرو به ستون نصب', 'حسگر کاتالیستی ۰–۱۰۰٪ LEL (LPG، متان، بخار بنزین، هیدروژن)', 'خروجی ۴–۲۰mA و گواهی ATEX / IECEx'],
          featuresTr: ['Akaryakıt istasyonlarına özel tasarım', 'İvmeölçer — araç çarpmasında gaz/yakıt kesme alarmı', 'Katalitik 0–100% LEL', '4–20 mA · ATEX / IECEx'],
          featuresEn: ['Designed for oil and fuel stations', 'On-board accelerometer — alarm if a vehicle hits the post', 'Catalytic 0–100% LEL (LPG, methane, petrol vapour, hydrogen)', '4–20 mA output · ATEX / IECEx · ½″ NPT with PR-NYY12 gland']
        },
        {
          id: 'pc3',
          officialPath: 'pc3-series',
          inquiryName: 'PC3 Series',
          specs: 'Zone 2 · Cat. 3',
          ...pnm('سری PC3', 'PC3 Serisi', 'PC3 Series'),
          ...pn(
            'دتکتور فشرده برای صنعت سبک — Zone 2 رده ۳؛ گازهای قابل اشتعال، سمی و اکسیژن',
            'Hafif sanayi için kompakt dedektör — Zone 2 Kategori 3; yanıcı, toksik ve oksijen',
            'Compact detector for light industry — Zone 2 Category 3 for flammable, toxic and oxygen gases'
          ),
          image: PROSENSE_IMG + 'series-pc3.webp',
          imageAlt: 'Prosense PC3 Series Zone 2 Category 3 compact fixed gas detector with green housing',
          imageAltFa: 'دتکتور گاز فشرده سری PC3 Prosense برای Zone 2',
          imageAltTr: 'Prosense PC3 Serisi Zone 2 Kategori 3 kompakt gaz dedektörü',
          featuresFa: ['رده Zone 2 / Category 3', 'تشخیص گازهای قابل اشتعال، سمی و اکسیژن', 'مناسب تاسیسات سبک صنعتی', 'تامین اصل از ترکیه با پیش‌فاکتور بیزدوار'],
          featuresTr: ['Zone 2 / Kategori 3', 'Yanıcı, toksik ve oksijen gazları', 'Hafif endüstriyel tesisler', 'Türkiye’den orijinal tedarik — Bizdavar proforma'],
          featuresEn: ['Zone 2 Category 3 classification', 'Flammable, toxic and oxygen detection', 'Light industrial plants', 'Genuine Turkey supply with Bizdavar proforma']
        },
        {
          id: 'btn',
          officialPath: 'btn-series',
          inquiryName: 'BTN Series',
          specs: 'Commercial · non-Ex',
          ...pnm('سری BTN', 'BTN Serisi', 'BTN Series'),
          ...pn(
            'راه‌حل اقتصادی برای فضاهای تجاری و غیر طبقه‌بندی‌شده — گازهای قابل اشتعال، سمی و اکسیژن',
            'Ticari ve sınıflandırılmamış alanlar için ekonomik çözüm — yanıcı, toksik ve oksijen',
            'Cost-effective detector for commercial and non-classified areas — combustible, toxic and oxygen gases'
          ),
          image: PROSENSE_IMG + 'series-btn.webp',
          imageAlt: 'Prosense BTN Series commercial fixed gas detector black housing for non-classified areas',
          imageAltFa: 'دتکتور گاز تجاری سری BTN Prosense برای محیط غیر طبقه‌بندی‌شده',
          imageAltTr: 'Prosense BTN Serisi ticari gaz dedektörü, sınıflandırılmamış alanlar',
          featuresFa: ['مناسب محیط تجاری و غیر Ex', 'گازهای قابل اشتعال، سمی و اکسیژن', 'گزینه اقتصادی نسبت به سری PQ و P', 'استعلام مدل دقیق با نوع گاز و محل نصب'],
          featuresTr: ['Ticari ve Ex-dışı alanlar', 'Yanıcı, toksik ve oksijen', 'PQ/P serisine göre ekonomik alternatif', 'Gaz tipi ve montaj yeri ile model seçimi'],
          featuresEn: ['Commercial and non-classified indoor areas', 'Combustible, toxic and oxygen gases', 'Cost-effective alternative to PQ and P series', 'Model selection from gas type and install location']
        },
        {
          id: 'safevader',
          officialPath: 'safevader-series',
          featured: true,
          inquiryName: 'SafeVader Series',
          specs: 'Safe area · LCD',
          ...pnm('سری SafeVader', 'SafeVader Serisi', 'SafeVader Series'),
          ...pn(
            'دتکتور محیط امن داخلی — LCD، خروجی ۴–۲۰mA و Modbus روی دستگاه؛ آزمایشگاه، بیمارستان، HVAC و هیدروژن — جایگزین Ex/SIL نیست',
            'İç mekân emniyetli alan — LCD, 4–20 mA ve Modbus; laboratuvar, hastane, HVAC — Ex/SIL yerine geçmez',
            'Indoor safe-area detector — LCD, 4–20 mA and Modbus onboard; labs, hospitals, HVAC — not an Ex/SIL substitute'
          ),
          image: PROSENSE_IMG + 'category-safevader.webp',
          imageAlt: 'Prosense SafeVader indoor safe-area gas detector with LCD showing VOC reading',
          imageAltFa: 'دتکتور گاز محیط امن داخلی SafeVader Prosense با نمایشگر LCD',
          imageAltTr: 'Prosense SafeVader emniyetli alan gaz dedektörü, LCD ekranlı',
          featuresFa: ['فقط محیط امن / داخلی — نه Zone 1/2', 'نمایشگر LCD و وضعیت لحظه‌ای غلظت گاز', 'خروجی ۴–۲۰mA، RS485 Modbus و رله روی دستگاه', 'مناسب آزمایشگاه، بیمارستان، مبرد و اتاق هیدروژن'],
          featuresTr: ['Yalnızca emniyetli alan / iç mekân — Zone 1/2 değil', 'LCD ile anlık gaz konsantrasyonu', '4–20 mA, RS485 Modbus ve röle', 'Laboratuvar, hastane, soğutucu gaz, hidrojen odası'],
          featuresEn: ['Safe-area / indoor only — not Zone 1/2', 'LCD for live gas concentration and status', '4–20 mA, RS485 Modbus and onboard relays', 'Labs, hospitals, refrigerant and hydrogen rooms']
        }
      ]
    },
    {
      id: 'portable',
      title: 'دتکتورهای گاز پرتابل',
      titleTr: 'Portatif Gaz Dedektörleri',
      titleEn: 'Portable gas detectors',
      icon: 'bag',
      image: PROSENSE_IMG + 'category-portable-gas.webp',
      imageAlt: 'Prosense portable gas detectors for personnel and field inspection',
      desc: 'ابزار اندازه‌گیری قابل حمل برای کارکنان و بازرسی میدانی',
      series: [
        { name: 'Gas-Pro', ...pn('دتکتور پرتابل حرفه‌ای', 'Profesyonel portatif', 'Professional portable') },
        { name: 'Tank-Pro', ...pn('مخازن و تانک', 'Tank ve kaplar', 'Tanks and vessels') },
        { name: 'T4', ...pn('چهار گاز', 'Dört gaz', 'Four-gas') },
        { name: 'Tetra 3', ...pn('Tetra 3', 'Tetra 3', 'Tetra 3') },
        { name: 'Gasman', ...pn('تک‌گاز شخصی', 'Kişisel tek gaz', 'Personal single-gas') },
        { name: 'Triple Plus+', ...pn('چندگاز+', 'Çoklu gaz+', 'Multi-gas+') },
        { name: 'Detective+', ...pn('Detective+', 'Detective+', 'Detective+') },
        { name: 'Detective Wireless', ...pn('بی‌سیم', 'Kablosuz', 'Wireless') },
        { name: 'Ventis Pro', ...pn('Ventis Pro', 'Ventis Pro', 'Ventis Pro') },
        { name: 'MX6 iBrid', ...pn('iBrid', 'iBrid', 'iBrid') },
        { name: 'Ventis MX4', ...pn('MX4', 'MX4', 'MX4') },
        { name: 'Tango TX1', ...pn('Tango TX1', 'Tango TX1', 'Tango TX1') },
        { name: 'GasBadge Pro', ...pn('GasBadge Pro', 'GasBadge Pro', 'GasBadge Pro') }
      ]
    },
    {
      id: 'flame',
      title: 'دتکتورهای شعله',
      titleTr: 'Alev Dedektörleri',
      titleEn: 'Flame detectors',
      icon: 'flame',
      image: PROSENSE_IMG + 'category-flame-detector.webp',
      imageAlt: 'Prosense flame detectors for industrial fire and flame detection',
      desc: 'شناسایی شعله و آتش در محیط‌های صنعتی و خطرناک',
      series: [
        { name: 'Takex', ...pn('دتکتور شعله Takex', 'Takex alev dedektörü', 'Takex flame detector') },
        { name: 'Rezontech', ...pn('دتکتور شعله Rezontech', 'Rezontech alev dedektörü', 'Rezontech flame detector') },
        { name: 'Viking', ...pn('دتکتور شعله Viking', 'Viking alev dedektörü', 'Viking flame detector') },
        { name: 'Spectrex', ...pn('دتکتور شعله Spectrex', 'Spectrex alev dedektörü', 'Spectrex flame detector') },
        { name: 'Det-Tronics', ...pn('دتکتور شعله Det-Tronics', 'Det-Tronics alev dedektörü', 'Det-Tronics flame detector') },
        { name: 'Siemens', ...pn('دتکتور شعله Siemens', 'Siemens alev dedektörü', 'Siemens flame detector') }
      ]
    },
    {
      id: 'panels',
      title: 'پنل‌های کنترل',
      titleTr: 'Kontrol Panelleri',
      titleEn: 'Control panels',
      icon: 'desktop',
      image: PROSENSE_IMG + 'category-control-panel.webp',
      imageAlt: 'Prosense analog and digital gas detection control panels',
      desc: 'پنل‌های آنالوگ و دیجیتال برای مدیریت چندین دتکتور',
      series: [
        { name: 'S-DP4 Analog', ...pn('۴ کانال آنالوگ', '4 kanal analog', '4-channel analog') },
        { name: 'S-DP8 Analog', ...pn('۸ کانال آنالوگ', '8 kanal analog', '8-channel analog') },
        { name: 'S-DP32 Dijital', ...pn('۳۲ کانال دیجیتال', '32 kanal dijital', '32-channel digital') },
        { name: 'S-DPX004 Analog', ...pn('DPX ۴ آنالوگ', 'DPX 4 analog', 'DPX 4 analog') },
        { name: 'S-DPX008 Analog', ...pn('DPX ۸ آنالوگ', 'DPX 8 analog', 'DPX 8 analog') },
        { name: 'S-DPX032 Dijital & Analog', ...pn('۳۲ ترکیبی', '32 karma', '32 hybrid') },
        { name: 'S-DPX064 Dijital & Analog', ...pn('۶۴ ترکیبی', '64 karma', '64 hybrid') },
        { name: 'S-DPX128 Dijital & Analog', ...pn('۱۲۸ ترکیبی', '128 karma', '128 hybrid') },
        { name: 'MULTISCAN++', ...pn('MULTISCAN++', 'MULTISCAN++', 'MULTISCAN++') },
        { name: 'PL4+', ...pn('PL4+', 'PL4+', 'PL4+') },
        { name: 'PPS-Manager', ...pn('نرم‌افزار مدیریت PPS', 'PPS yönetim yazılımı', 'PPS manager software') },
        { name: 'PPS+-Manager', ...pn('نرم‌افزار مدیریت PPS+', 'PPS+ yönetim yazılımı', 'PPS+ manager software') }
      ]
    },
    {
      id: 'parking',
      title: 'سیستم گاز پارکینگ',
      titleTr: 'Otopark Gaz Algılama',
      titleEn: 'Parking gas systems',
      icon: 'parking',
      image: PROSENSE_IMG + 'category-parking.webp',
      imageAlt: 'Prosense PPS parking CO and NO2 gas detection system',
      desc: 'سیستم‌های تشخیص CO و NO2 در پارکینگ‌های بسته',
      series: [
        { ...pnm('سیستم گاز پارکینگ PPS', 'PPS Otopark Gaz Algılama', 'PPS parking gas detection'), ...pn('سری PPS', 'PPS serisi', 'PPS series') },
        { ...pnm('سیستم گاز پارکینگ PPS+', 'PPS+ Otopark Gaz Algılama', 'PPS+ parking gas detection'), ...pn('گواهی EN-50545-1', 'EN-50545-1', 'EN-50545-1'), featured: true },
        { ...pnm('سیستم گاز پارکینگ PPSR', 'PPSR Otopark Gaz Algılama', 'PPSR parking gas detection'), ...pn('سری PPSR', 'PPSR serisi', 'PPSR series') }
      ]
    },
    {
      id: 'software',
      title: 'نرم‌افزارها',
      titleTr: 'Yazılımlar',
      titleEn: 'Software',
      icon: 'monitor',
      image: PROSENSE_IMG + 'category-software.webp',
      imageAlt: 'Prosense gas detection configuration and monitoring software',
      desc: 'نرم‌افزار پیکربندی، مانیتورینگ و مدیریت سیستم',
      series: [
        { name: 'S-PVSX', ...pn('ثبت داده و مانیتورینگ', 'Veri kaydı ve izleme', 'Data logging & monitoring') },
        { name: 'S-MCX004', ...pn('MCX ۴ کانال', 'MCX 4 kanal', 'MCX 4-channel') },
        { name: 'S-MCX008', ...pn('MCX ۸ کانال', 'MCX 8 kanal', 'MCX 8-channel') },
        { name: 'S-MCX032', ...pn('MCX ۳۲ کانال', 'MCX 32 kanal', 'MCX 32-channel') },
        { name: 'S-MCX064', ...pn('MCX ۶۴ کانال', 'MCX 64 kanal', 'MCX 64-channel') },
        { name: 'S-MCX128', ...pn('MCX ۱۲۸ کانال', 'MCX 128 kanal', 'MCX 128-channel') },
        { name: 'S-MCX', ...pn('نرم‌افزار S-MCX', 'S-MCX yazılımı', 'S-MCX software') },
        { name: 'S-SETX', ...pn('برنامه‌ریزی پنل', 'Panel programlama', 'Panel programming') }
      ]
    },
    {
      id: 'calibration',
      title: 'سیلندر کالیبراسیون',
      titleTr: 'Kalibrasyon Test Tüpü',
      titleEn: 'Calibration cylinders',
      icon: 'lab',
      image: PROSENSE_IMG + 'category-calibration.webp',
      imageAlt: 'Prosense span test and calibration gas cylinders',
      desc: 'گازهای تست و کالیبراسیون Span',
      series: [
        { ...pnm('سیلندر گاز Span / Test', 'Span / Test Gaz Tüpleri', 'Span / test gas cylinders'), ...pn('گاز Span و تست', 'Span ve test gazı', 'Span and test gas') },
        { ...pnm('سیلندر گاز مخلوط', 'Karışım Gaz Tüpleri', 'Mixed gas cylinders'), ...pn('مخلوط کالیبراسیون', 'Kalibrasyon karışımı', 'Calibration mixture') },
        { ...pnm('سیلندر صفر (Zero)', 'Sıfırlama Tüpleri', 'Zero gas cylinders'), ...pn('گاز صفر', 'Sıfır gaz', 'Zero gas') },
        { ...pnm('رگولاتور گاز کالیبراسیون', 'Kalibrasyon Gaz Regülatörü', 'Calibration gas regulator'), ...pn('رگولاتور', 'Regülatör', 'Regulator') }
      ]
    },
    {
      id: 'other',
      title: 'سایر تجهیزات',
      titleTr: 'Diğer Ekipmanlar',
      titleEn: 'Other equipment',
      icon: 'wrench',
      image: PROSENSE_IMG + 'category-other-equipment.webp',
      imageAlt: 'Prosense gas detector accessories, beacons and Ex-rated equipment',
      desc: 'لوازم جانبی، آژیر، منبع تغذیه و تجهیزات Ex',
      series: [
        {
          id: 'pr-nyy12',
          sku: 'PR-NYY12',
          featured: true,
          inquiryName: 'PR-NYY12 cable gland',
          specs: '½″ NPT · Ex d · ATEX',
          officialUrl: 'https://www.pfsfueltec.com/Catalogue/MonitoringControl/Gas-Vapour-Sensors/PE-Series/1PROSENSE-2NPT-Ex-d-ATEX-CERTIFIED-CABLE-GLAND-PR-NYY12',
          ...pnm('گلند کابل PR-NYY12', 'PR-NYY12 Kablo Rakoru', 'PR-NYY12 cable gland'),
          nameRu: 'Кабельный ввод PR-NYY12',
          nameAr: 'غدة كابل PR-NYY12',
          ...pn(
            'گلند ضد انفجار ½ اینچ NPT با گواهی ATEX Ex d — ورودی کابل دتکتورهای PE، P و PQ؛ جدا از خود دتکتور تامین می‌شود',
            'ATEX Ex d patlamaya dayanıklı ½″ NPT kablo rakoru — PE, P ve PQ serisi girişleri; dedektörden ayrı satılır',
            'ATEX Ex d explosion-proof ½″ NPT cable gland — PE, P and PQ detector entries; sold separately from the detector'
          ),
          image: PROSENSE_IMG + 'accessory-pr-nyy12.webp',
          imageAlt: 'Prosense PR-NYY12 1/2 inch NPT Ex d ATEX certified cable gland with CE marking',
          imageAltFa: 'گلند کابل ضد انفجار PR-NYY12 پروسense رزوه ½ اینچ NPT با گواهی ATEX',
          imageAltTr: 'Prosense PR-NYY12 ½″ NPT Ex d ATEX kablo rakoru, CE işaretli',
          featuresFa: ['کد سفارش PR-NYY12 · رزوه ½ اینچ NPT', 'گواهی ATEX Ex d (II 2GD / Ex db IIC) و نشان CE', 'حفظ یکپارچگی ضد انفجار بدنه دتکتور در Zone 1/2', 'سازگار با سری PE، PE-Kayo، P و PQ — همراه دتکتور استعلام کنید'],
          featuresTr: ['Sipariş kodu PR-NYY12 · ½″ NPT diş', 'ATEX Ex d (II 2GD / Ex db IIC) ve CE işareti', 'Zone 1/2’de muhafaza bütünlüğünü korur', 'PE, PE-Kayo, P ve PQ ile uyumlu — dedektörle birlikte teklif alın'],
          featuresEn: ['Order code PR-NYY12 · ½″ NPT thread', 'ATEX Ex d (II 2GD / Ex db IIC) with CE marking', 'Keeps the detector enclosure flameproof in Zone 1/2', 'Fits PE, PE-Kayo, P and PQ series — quote with the detector']
        },
        {
          id: 'p-gta',
          sku: 'P-GTA',
          ...pnm('مخروط جمع‌آوری گاز P-GTA', 'Gaz Toplama Aparatı (P-GTA)', 'P-GTA Gas Collection Cone'),
          nameRu: 'Газосборный конус P-GTA',
          nameAr: 'مخروط تجميع الغاز P-GTA',
          ...pn('قیف فولادی ۵۰cm برای گازهای سبک — سازگار با PQ و P', '50 cm çelik koni, hafif gazlar — PQ ve P serisi', '50 cm steel cone for light gases — fits PQ & P series'),
          image: PROSENSE_IMG + 'category-other-equipment.webp',
          imageAlt: 'Prosense P-GTA gas collection cone with PQ detector'
        },
        {
          id: 'ex-fire',
          ...pnm('تجهیزات اعلام حریق Ex', 'Ex Yangın Ekipmanları', 'Ex-proof fire equipment'),
          nameRu: 'Взрывозащищённое пожарное оборудование',
          nameAr: 'معدات إنذار حريق ضد الانفجار',
          ...pn('دتکتور دود و اعلام حریق ضد انفجار', 'Ex-proof duman ve yangın dedektörleri', 'Ex-proof smoke and fire detectors'),
          image: PROSENSE_IMG + 'accessory-ex-smoke.png',
          imageAlt: 'Orbis intrinsically safe Ex optical smoke detector'
        },
        {
          id: 'siren-beacon',
          ...pnm('آژیر و فلاشر', 'Siren ve Flaşörler', 'Sounders and beacons'),
          nameRu: 'Сирены и проблесковые маяки',
          nameAr: 'صفارات وأضواء تحذير',
          ...pn('آژیر و چراغ اعلام Ex-proof و معمولی', 'Ex-proof ve standart sesli/ışıklı ikaz', 'Ex-proof and standard sounder/beacon alarms'),
          image: PROSENSE_IMG + 'accessory-ex-beacon.jpg',
          imageAlt: 'Ex-proof red beacon sounder for gas alarm'
        },
        {
          id: 'pg-ps120',
          sku: 'PG-PS120',
          ...pnm('منبع تغذیه PG-PS120 24V', 'PG-PS120 24V Güç Kaynağı', 'PG-PS120 24V Power Supply'),
          nameRu: 'Блок питания PG-PS120 24V',
          nameAr: 'مزود طاقة PG-PS120 24V',
          ...pn('منبع تغذیه ۲۴V مطابق EN 54-4 برای پنل و آژیر', 'EN 54-4 uyumlu 24V güç kaynağı', 'EN 54-4 24V PSU for panels and alarms'),
          image: PROSENSE_IMG + 'accessory-ps120.jpg',
          imageAlt: 'Prosense PG-PS120 EN 54-4 24V power supply unit'
        }
      ]
    }
  ],

  industries: [
    { name: 'نفت و گاز', nameTr: 'Petrol ve Gaz', nameEn: 'Oil & gas', desc: 'سیستم‌های تشخیص گاز با گواهی SIL2', icon: 'barrel', image: PROSENSE_IMG + 'industry-oil-gas.webp' },
    { name: 'ایستگاه گاز', nameTr: 'Gaz Dağıtım İstasyonları', nameEn: 'Gas distribution', desc: 'گازهای قابل اشتعال و سمی', icon: 'gas-station', image: PROSENSE_IMG + 'industry-gas-distribution.webp' },
    { name: 'پارکینگ سرپوشیده', nameTr: 'Kapalı Otoparklar', nameEn: 'Enclosed parking', desc: 'EN 50545-1 — سیستم گاز پارکینگ', icon: 'parking', image: PROSENSE_IMG + 'industry-parking.webp' },
    { name: 'کشتیرانی', nameTr: 'Denizcilik', nameEn: 'Marine', desc: 'H2S و CH4 — با گواهی دریانوردی', icon: 'ship', image: PROSENSE_IMG + 'industry-marine.webp' },
    { name: 'HVAC و Freon', nameTr: 'HVAC - Freon', desc: 'CO2, O2, NH3, Freon', icon: 'snowflake', image: PROSENSE_IMG + 'industry-hvac.webp' },
    { name: 'تصفیه آب', nameTr: 'Su Arıtma Tesisleri', desc: 'H2S, CH4, NH3, SO2, O2, CO', icon: 'droplet', image: PROSENSE_IMG + 'industry-water.webp' },
    { name: 'پتروشیمی', nameTr: 'Petrokimya', desc: 'ایمنی فرآیند', icon: 'flask', image: PROSENSE_IMG + 'industry-petrochemical.webp' },
    { name: 'معدن و تونل', nameTr: 'Maden ve Tüneller', desc: 'SOMA — گواهی M1 معدن', icon: 'pickaxe', image: PROSENSE_IMG + 'industry-mining.webp' },
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
    url: 'https://www.prosense.com.tr/?lang=en',
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
