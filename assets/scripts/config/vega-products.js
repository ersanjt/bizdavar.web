/**
 * VEGA — Product catalog data (source: vega.com)
 * Images: assets/images/vega/ — fetched via scripts/fetch-vega-assets.py
 */
const VEGA_IMG = 'assets/images/vega/';

window.VEGA_CATALOG = {
  brand: {
    name: 'VEGA',
    nameFa: 'وگا',
    logo: 'assets/images/vega/vega-logo.svg',
    heroImage: VEGA_IMG + 'hero-vegapuls-6x.png',
    heroImageAlt: 'سنسور راداری سطح VEGAPULS 6X — ابزار دقیق فرآیند VEGA',
    heroClaim: 'HOME OF VALUES',
    heroEyebrow: 'تامین اصل VEGA برای مهندسان و خریداران فارسی‌زبان',
    heroHeadline: 'سنسور سطح و فشار VEGA — مشاوره فنی فارسی، کد سفارش دقیق',
    heroHeadlineSub: 'از ایران تا ترکیه و پروژه‌های بین‌المللی — انتخاب مدل درست، پیش‌فاکتور شفاف و تحویل مطمئن برای واحد فنی و خرید.',
    tagline: 'Level and pressure instrumentation for the process industry',
    taglineFa: 'ابزار دقیق سطح و فشار — ساخت آلمان',
    founded: 'بیش از ۶۵ سال تجربه',
    presence: 'حضور در بیش از ۸۰ کشور',
    origin: 'شیلتاخ، جنگل سیاه — آلمان',
    officialUrl: 'https://www.vega.com/en-ae',
    descriptionFa: 'بیزدوار گروپ تامین‌کننده سنسورهای سطح و فشار VEGA برای پروژه‌های صنعتی فارسی‌زبان در ایران و خارج است. محصول اصل از کانال رسمی، مشاوره فنی به فارسی، پیش‌فاکتور شفاف و هماهنگی لجستیک تا تحویل.',
    heroStats: [
      { valueKey: 'founded', label: 'تجربه برند' },
      { valueKey: 'origin', label: 'تولید آلمان' },
      { value: '۱۲+', label: 'سال همراهی بیزدوار' }
    ]
  },

  trustSignals: [
    { icon: 'target', label: 'محصول اصل', desc: 'تامین از کانال‌های رسمی VEGA — نه کپی و نه بازاری' },
    { icon: 'mail', label: 'مشاوره فارسی', desc: 'پاسخ واحد فنی به فارسی — انتخاب مدل بر اساس شرایط واقعی شما' },
    { icon: 'globe', label: 'لجستیک بین‌المللی', desc: 'هماهنگی خرید و حمل از اروپا/ترکیه تا پروژه شما' },
    { icon: 'wrench', label: 'پشتیبانی پروژه', desc: 'کمک در کد سفارش، دیتاشیت و هماهنگی با واحد اتوماسیون' }
  ],

  quoteChecklist: {
    title: 'برای استعلام سریع چه بفرستید؟',
    desc: 'هرچه مشخص‌تر بنویسید، مدل و قیمت دقیق‌تر پیشنهاد می‌شود — حتی اگر فقط بخشی را بدانید کافی است.',
    items: [
      'نوع اندازه‌گیری: سطح / نقطه‌سطح / فشار',
      'محیط فرآیند: مایع، گاز، پودر یا مواد فله',
      'دما و فشار تقریبی کار',
      'ارتفاع یا حجم مخزن / قطر لوله',
      'نوع اتصال: فلنج یا رزوه (سایز تقریبی)',
      'خروجی مورد نیاز: ۴–۲۰mA، رله، HART و…',
      'تعداد مورد نیاز و زمان تحویل مطلوب'
    ],
    tip: 'اگر مدل یا Order Code را دارید، همان را بفرستید — سریع‌تر پیش‌فاکتور می‌گیرید.'
  },

  quickSeries: [
    { id: 'vegapuls-6x', name: 'VEGAPULS 6X', tag: 'رادار پرچمدار', hint: 'مخازن بلند و فرآیند حساس' },
    { id: 'vegapuls', name: 'VEGAPULS', tag: 'رادار فشرده', hint: 'جایگزین اولتراسونیک' },
    { id: 'vegabar-39', name: 'VEGABAR 39', tag: 'فشار · €510', hint: 'ترانسمیتر با نمایشگر ۳۶۰°' },
    { id: 'vegavib-s61', name: 'VEGAVIB S61', tag: 'فله · €540', hint: 'سوئیچ لرزشی سیلو' }
  ],

  whyBuyFromUs: [
    {
      icon: 'target',
      title: 'می‌دانید دقیقاً چه می‌خرید',
      desc: 'هر سنسور VEGA کد سفارش (Order Code) مخصوص دارد. ما بر اساس نوع مایع، دما، فشار، اتصال و خروجی سیگنال، مدل و کد درست را پیشنهاد می‌دهیم — نه فقط نام سری.'
    },
    {
      icon: 'factory',
      title: 'مناسب صنایع ایران',
      desc: 'تجربه تامین برای پتروشیمی، پالایشگاه، آب و فاضلاب، سیمان، غذایی و نیروگاه. محصولاتی که در شرایط سخت فرآیندی ایران تست شده‌اند.'
    },
    {
      icon: 'document',
      title: 'پیش‌فاکتور و زمان‌بندی شفاف',
      desc: 'قبل از پرداخت، قیمت، زمان تحویل تقریبی و شرایط تامین را می‌دانید. بدون هزینه پنهان و بدون قول‌های مبهم.'
    },
    {
      icon: 'handshake',
      title: 'یک نقطه تماس برای کل پروژه',
      desc: 'از استعلام اولیه تا پیگیری سفارش — یک تیم فارسی‌زبان در بیزدوار همراه شماست. نیازی به مکاتبه مستقیم با خارج از کشور نیست.'
    }
  ],

  purchaseSteps: [
    { num: '۱', title: 'استعلام', desc: 'فرم تماس یا واتساپ — نام محصول یا شرایط فرآیند (مایع، دما، سایز مخزن، تعداد)' },
    { num: '۲', title: 'مشاوره فنی', desc: 'پیشنهاد مدل و کد سفارش — در صورت نیاز، مقایسه با جایگزین‌های موجود در بازار' },
    { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت، زمان تحویل تقریبی و شرایط پرداخت — شفاف و قابل بررسی توسط واحد خرید' },
    { num: '۴', title: 'تامین و حمل', desc: 'سفارش از کانال رسمی، بسته‌بندی صنعتی و هماهنگی لجستیک بین‌المللی' },
    { num: '۵', title: 'تحویل و پشتیبانی', desc: 'تحویل به نماینده شما در ایران — ارسال دیتاشیت، راهنمای نصب و پاسخ به سوالات فنی' }
  ],

  iranIndustries: [
    { name: 'پالایش و پتروشیمی', desc: 'سطح و فشار مخازن، برج‌ها و خطوط — معمولاً VEGAPULS 6X و VEGABAR', image: VEGA_IMG + 'iran-refining.jpg', icon: 'factory', models: 'VEGAPULS 6X · VEGABAR' },
    { name: 'آب و فاضلاب', desc: 'تصفیه و ایستگاه پمپاژ — رادار فشرده و سوئیچ نقطه‌سطح', image: VEGA_IMG + 'iran-water.jpg', icon: 'droplet', models: 'VEGAPULS · VEGAPOINT' },
    { name: 'صنایع غذایی و دارویی', desc: 'سطح‌سنجی بهداشتی بدون تماس — مناسب CIP/SIP', image: VEGA_IMG + 'iran-food-pharma.jpg', icon: 'utensils', models: 'VEGAPULS · VEGAPOINT' },
    { name: 'سیمان و معدن', desc: 'سیلو و مواد فله — رادار و سوئیچ لرزشی مقاوم در گردوغبار', image: VEGA_IMG + 'iran-cement-mining.jpg', icon: 'block', models: 'VEGAPULS 6X · VEGAVIB S61' },
    { name: 'نفت و گاز', desc: 'مخازن، جداکننده و خطوط — دقت و ایمنی فرآیند', image: VEGA_IMG + 'iran-oil-gas.jpg', icon: 'barrel', models: 'VEGAPULS 6X · VEGABAR' },
    { name: 'نیروگاه و انرژی', desc: 'بویلر، سوخت و HRSG — کنترل سطح و فشار بحرانی', image: VEGA_IMG + 'iran-energy.jpg', icon: 'bolt', models: 'VEGABAR · VEGAPULS' }
  ],

  faq: [
    {
      q: 'محصول اصل VEGA است یا جایگزین چینی؟',
      a: 'فقط محصول اصل VEGA از کانال‌های رسمی تامین می‌شود. هر سفارش با کد سفارش (Order Code) مشخص است و دیتاشیت و مشخصات فنی اصلی ارائه می‌شود.'
    },
    {
      q: 'زمان تحویل چقدر است؟',
      a: 'بسته به مدل و موجودی انبار اروپا، معمولاً ۴ تا ۸ هفته. زمان دقیق در پیش‌فاکتور اعلام می‌شود. برای پروژه‌های فوری، موجودی جایگزین یا مدل نزدیک پیشنهاد می‌شود.'
    },
    {
      q: 'اگر مدل دقیق را نمی‌دانم چه کنم؟',
      a: 'شرایط فرآیند را بگویید: نوع مایع یا مواد، دما، فشار، سایز مخزن، نوع اتصال (فلنج/رزوه) و خروجی مورد نیاز (۴-۲۰mA، رله و…). واحد فنی ما مدل مناسب را پیشنهاد می‌دهد — حتی از واتساپ فارسی.'
    },
    {
      q: 'برای پروژه‌های خارج از ایران هم تامین می‌کنید؟',
      a: 'بله — مخاطبان فارسی‌زبان در ترکیه، امارات و سایر کشورها هم می‌توانند استعلام بگیرند. لجستیک و پیش‌فاکتور بر اساس مقصد پروژه تنظیم می‌شود.'
    },
    {
      q: 'گارانتی و خدمات پس از فروش چگونه است؟',
      a: 'گارانتی سازنده VEGA روی محصول اصل اعمال می‌شود. در صورت نقص فنی، هماهنگی تعویض یا ارسال به مرکز خدمات از طریق بیزدوار انجام می‌شود.'
    },
    {
      q: 'آیا امکان تامین قطعه یدکی و لوازم جانبی هست؟',
      a: 'بله — فلنج، مهره تنظیم، نمایشگر، کابل و قطعات یدکی VEGA نیز قابل تامین است. کد قطعه را ارسال کنید یا از روی سریال دستگاه استعلام بگیرید.'
    },
    {
      q: 'پرداخت چگونه انجام می‌شود؟',
      a: 'پیش‌پرداخت برای ثبت سفارش و تسویه قبل از ارسال — جزئیات در پیش‌فاکتور. روش‌های پرداخت بین‌المللی با هماهنگی واحد مالی بیزدوار.'
    },
    {
      q: 'تفاوت VEGAPULS و VEGAPULS 6X چیست؟',
      a: 'سری 6X پرچمدار راداری ۸۰ گیگاهرتز برای مخازن بلند و فرآیندهای سخت است. VEGAPULS فشرده گزینه اقتصادی‌تر برای مخازن متوسط و ارتقای سیستم‌های اولتراسونیک است. بر اساس ارتفاع، دما و حساسیت فرآیند، یکی را پیشنهاد می‌دهیم.'
    }
  ],

  categories: [
    { id: 'level', title: 'اندازه‌گیری سطح', titleEn: 'Level Measurement', icon: 'level-sensor' },
    { id: 'point', title: 'تشخیص نقطه‌سطح', titleEn: 'Point Level / Switching', icon: 'level-point' },
    { id: 'pressure', title: 'اندازه‌گیری فشار', titleEn: 'Pressure', icon: 'gauge' },
    { id: 'software', title: 'نرم‌افزار و سرویس', titleEn: 'Software & Digital', icon: 'monitor' },
    { id: 'accessories', title: 'لوازم جانبی', titleEn: 'Accessories & Spare Parts', icon: 'wrench' }
  ],

  featuredProducts: [
    {
      id: 'vegapuls-6x',
      name: 'VEGAPULS 6X',
      series: 'Pro — THE 6X®',
      category: 'level',
      image: VEGA_IMG + 'product-vegapuls-6x-photo.webp',
      imageAlt: 'VEGAPULS 6X all-round radar level sensor for liquids and bulk solids',
      badge: 'پرچمدار',
      summaryFa: 'رادار همه‌کاره سطح — اندازه‌گیری پیوسته مایع و مواد فله در تمام شرایط فرآیند؛ جانشین سری VEGAPULS 60.',
      useCaseFa: 'مخازن ذخیره، برج تقطیر، سیلو مواد فله، فرآیند شیمیایی و غذایی — یک سنسور برای تقریباً هر کاربرد سطح.',
      features: [
        'برد اندازه‌گیری تا ۱۲۰ متر',
        'دمای فرآیند −۱۹۶ تا ۴۵۰ درجه سانتی‌گراد',
        'فشار فرآیند −۱ تا ۱۶۰ بار · دقت ±۱ mm',
        'فرکانس ۶ / ۲۶ / ۸۰ گیگاهرتز — زاویه پرتو ≥ ۳°',
        'خروجی ۴…۲۰ mA/HART · SIL2 · Bluetooth'
      ],
      applications: ['پتروشیمی', 'غذایی و دارویی', 'مواد فله', 'آب و فاضلاب'],
      officialRef: 'https://www.vega.com/tr-tr/urunler/urun-kataloglari/seviye/radar/vegapuls-6x'
    },
    {
      id: 'vegapuls',
      name: 'VEGAPULS',
      series: 'Basic — Compact Radar',
      category: 'level',
      image: VEGA_IMG + 'product-vegapuls.png',
      imageAlt: 'VEGAPULS compact radar level sensor',
      badge: 'فشرده',
      summaryFa: 'رادار فشرده و اقتصادی — جایگزین مطمئن اولتراسونیک؛ مناسب ارتقای سیستم‌های قدیمی.',
      useCaseFa: 'مخازن کوچک و متوسط، آب، مواد شیمیایی — نصب ساده و نگهداری کم.',
      features: [
        'طراحی فشرده برای نصب آسان',
        'رادار — دقت بالاتر از اولتراسونیک',
        'مقاوم در برابر بخار، فوم و آشفتگی',
        'تنظیم پارامتر ساده',
        'هزینه مالکیت پایین'
      ],
      applications: ['آب', 'مواد شیمیایی', 'مواد غذایی', 'پالایشگاه'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/level/radar/vegapuls'
    },
    {
      id: 'vegabar',
      name: 'VEGABAR',
      series: 'Basic — Pressure Switch',
      category: 'pressure',
      image: VEGA_IMG + 'product-vegabar.png',
      imageAlt: 'VEGABAR compact pressure switch with 360 degree display',
      badge: 'فشار',
      summaryFa: 'سوئیچ و ترانسمیتر فشار فشرده — کنترل فشار خطوط لوله و مخازن تحت فشار.',
      useCaseFa: 'خط لوله، مخزن تحت فشار، پمپ — جایی که فشار بحرانی باید کنترل شود.',
      features: [
        'اندازه‌گیری فشار مطلق و نسبی',
        'نمایشگر وضعیت ۳۶۰°',
        'خروجی سوئیچینگ قابل اعتماد',
        'ساخت فشرده صنعتی',
        'تنظیم آسان در محل'
      ],
      applications: ['خطوط لوله', 'مخازن تحت فشار', 'پتروشیمی', 'انرژی'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/pressure/process-pressure/vegabar'
    },
    {
      id: 'vegabar-39',
      name: 'VEGABAR 39',
      series: 'Process Pressure — Metal Cell',
      category: 'pressure',
      image: VEGA_IMG + 'product-vegabar-39.png',
      imageAlt: 'VEGABAR 39 pressure sensor with switching function and 360 degree status display',
      badge: 'موجود',
      priceEur: 510,
      summaryFa: 'ترانسمیتر فشار با سلول اندازه‌گیری فلزی و تابع سوئیچینگ — برای گاز، بخار و مایع تا ۱۳۰ درجه سانتی‌گراد.',
      useCaseFa: 'خطوط فرآیند، مخازن تحت فشار، کاربردهای بهداشتی با آداپتور — کنترل فشار و سوئیچ در یک دستگاه.',
      features: [
        'محدوده اندازه‌گیری −۱ تا ۱۰۰۰ بار',
        'دمای فرآیند −۴۰ تا ۱۳۰ درجه سانتی‌گراد',
        'دقت ۰٫۳٪ — سلول فلزی کاملاً جوش‌خورده',
        'خروجی ۴…۲۰ mA · PNP/NPN · IO-Link',
        'نمایشگر متنی و وضعیت رنگی ۳۶۰ درجه'
      ],
      applications: ['غذایی و دارویی', 'پتروشیمی', 'خطوط لوله', 'آب و فاضلاب'],
      officialRef: 'https://www.vega.com/tr-tr/urunler/urun-kataloglari/basinc/proses-basinci-olcumu/vegabar-39'
    },
    {
      id: 'vegapoint',
      name: 'VEGAPOINT',
      series: 'Basic — Level Switch',
      category: 'point',
      image: VEGA_IMG + 'product-vegapoint.png',
      imageAlt: 'VEGAPOINT compact level switch with 360 degree display',
      badge: 'سوئیچ',
      summaryFa: 'سوئیچ نقطه‌سطح — جلوگیری از سرریز یا خشک‌شدن پمپ؛ ایمنی فرآیند با سیگنال قطعی.',
      useCaseFa: 'مخازن ذخیره، سیلو، جداکننده — هشدار پر شدن یا خالی شدن مخزن.',
      features: [
        'تشخیص نقطه‌سطح (Point Level)',
        'جلوگیری از پر شدن یا خشک شدن مخزن',
        'نمایشگر وضعیت ۳۶۰°',
        'سیگنال سوئیچینگ پایدار',
        'نصب سریع و نگهداری کم'
      ],
      applications: ['مخازن ذخیره', 'سیلو', 'جداکننده', 'فرآیندهای پیوسته'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/switching/capacitive/vegapoint'
    },
    {
      id: 'vegavib-s61',
      name: 'VEGAVIB S61',
      series: 'Vibrating — Bulk Solids',
      category: 'point',
      image: VEGA_IMG + 'product-vegavib-s61.webp',
      imageAlt: 'VEGAVIB S61 vibrating level switch for granulated bulk solids',
      badge: 'موجود',
      priceEur: 540,
      summaryFa: 'سوئیچ سطح لرزشی برای مواد فله دانه‌ای و گرانول — تشخیص مطمئن حداقل یا حداکثر سطح در سیلو و مخزن.',
      useCaseFa: 'پودر آزاد، گرانول و مواد درشت‌دانه با چگالی حداقل ۱۰۰ g/l — جایگزین مناسب پروب چنگالی در مواد گیرکننده.',
      features: [
        'دمای فرآیند −۵۰ تا ۱۵۰ درجه سانتی‌گراد',
        'فشار فرآیند −۱ تا ۱۶ بار',
        'میله لرزشی بدون لبه — جلوگیری از گیر کردن مواد',
        'خروجی رله DPDT یا ترانزیستور NPN/PNP',
        'طول‌های پیش‌ساخته ۱۵۰، ۵۰۰، ۱۰۰۰ و ۱۵۰۰ میلی‌متر'
      ],
      applications: ['سیمان و معدن', 'غذایی', 'سیلو مواد فله', 'مواد شیمیایی'],
      officialRef: 'https://www.vega.com/tr-tr/urunler/urun-kataloglari/seviye-salteri/titresim/vegavib-s61'
    }
  ],

  valueProps: [
    {
      title: 'ایمنی فرآیند',
      titleEn: 'Point level detection. Process control.',
      desc: 'جلوگیری از سرریز یا خشک‌شدن مخزن با دقت مطلق — سوئیچ‌های سطح VEGA در هر شرایط سیگنال قابل اعتماد می‌دهند.',
      image: VEGA_IMG + 'value-point-level.jpg',
      imageAlt: 'VEGA point level detection and process control'
    },
    {
      title: 'فناوری پیشرفته',
      titleEn: 'Our answer: Yes!',
      desc: 'وقتی اندازه‌گیری شما حیاتی است، VEGA انتخاب درست است. فناوری سطح و فشار VEGA نه تنها پیشرفته است — استاندارد صنعت را تعیین می‌کند.',
      image: VEGA_IMG + 'value-innovation.jpg',
      imageAlt: 'VEGA innovative level and pressure measurement technology'
    },
    {
      title: 'صنعت ۴.۰',
      titleEn: 'The way to a smart age',
      desc: 'صنعت ۴.۰ به راهکارهای هوشمند برای تحلیل بهینه داده سنسور نیاز دارد — و VEGA آن‌ها را ارائه می‌دهد.',
      image: VEGA_IMG + 'value-industry40.jpg',
      imageAlt: 'VEGA Industry 4.0 smart sensor data integration'
    },
    {
      title: 'اقتصاد هیدروژن',
      titleEn: 'Sensors for the hydrogen economy',
      desc: 'سنسورهای VEGA مقدار و فشار صحیح را در تمام فرآیندهای هیدروژن تضمین می‌کنند.',
      image: VEGA_IMG + 'value-hydrogen.jpg',
      imageAlt: 'VEGA sensors for hydrogen production and storage'
    }
  ],

  industries: [
    { name: 'صنایع شیمیایی', nameEn: 'Chemical industry', icon: 'flask', image: VEGA_IMG + 'industry-chemical.jpg' },
    { name: 'صنایع غذایی', nameEn: 'Food industry', icon: 'utensils', image: VEGA_IMG + 'industry-food.jpg' },
    { name: 'داروسازی', nameEn: 'Pharmaceutical', icon: 'pill', image: VEGA_IMG + 'industry-pharma.png' },
    { name: 'آب و فاضلاب', nameEn: 'Water & wastewater', icon: 'droplet', image: VEGA_IMG + 'industry-water.jpg' },
    { name: 'آبزی‌پروری', nameEn: 'Aquaculture', icon: 'fish', image: VEGA_IMG + 'industry-aquaculture.jpg' },
    { name: 'مصالح ساختمانی', nameEn: 'Building materials', icon: 'crane', image: VEGA_IMG + 'industry-building.jpg' },
    { name: 'جذب کربن', nameEn: 'Carbon Capture', icon: 'leaf', image: VEGA_IMG + 'industry-carbon-capture.png' },
    { name: 'انرژی', nameEn: 'Energy', icon: 'bolt', image: VEGA_IMG + 'industry-energy.jpg' },
    { name: 'معدن و فلزات', nameEn: 'Mining & metals', icon: 'pickaxe', image: VEGA_IMG + 'industry-mining.jpg' },
    { name: 'نفت و گاز دریایی', nameEn: 'Oil & gas offshore', icon: 'barrel', image: VEGA_IMG + 'industry-oil-gas.jpg' },
    { name: 'صنایع کاغذ', nameEn: 'Paper industry', icon: 'document', image: VEGA_IMG + 'industry-paper.jpg' },
    { name: 'پالایش و پتروشیمی', nameEn: 'Refining & petrochemicals', icon: 'factory', image: VEGA_IMG + 'industry-refining.jpg' },
    { name: 'کشتی‌سازی', nameEn: 'Ship & yacht building', icon: 'ship', image: VEGA_IMG + 'industry-ship.jpg' },
    { name: 'محیط‌زیست و بازیافت', nameEn: 'Environment & recycling', icon: 'recycle', image: VEGA_IMG + 'industry-environment.jpg' },
    { name: 'سیمان', nameEn: 'Cement', icon: 'block', image: VEGA_IMG + 'industry-cement.jpg' }
  ],

  digitalServices: {
    title: 'کد سفارش دقیق — بدون حدس و گمان',
    descFa: 'هر سنسور VEGA صدها پیکربندی دارد. ما بر اساس شرایط فرآیند شما، کد سفارش (Order Code) دقیق را استخراج و قیمت رسمی را استعلام می‌کنیم — شما فقط مدل نهایی و پیش‌فاکتور را می‌بینید.',
    image: VEGA_IMG + 'digital-myvega.png',
    imageAlt: 'myVEGA online configurator for VEGA sensors',
    features: [
      'انتخاب مدل بر اساس شرایط واقعی فرآیند شما',
      'استخراج Order Code از کاتالوگ رسمی VEGA',
      'ارائه دیتاشیت و نقشه ابعاد فارسی/انگلیسی',
      'مقایسه گزینه‌ها قبل از خرید نهایی',
      'پیگیری سفارش تا تحویل'
    ],
    url: 'https://www.vega.com/en-ae/myvega',
    urlLabel: 'کاتالوگ رسمی VEGA'
  },

  measuringPrinciples: [
    { name: 'رادار (Radar)', desc: 'اندازه‌گیری سطح بدون تماس — دقت بالا در شرایط سخت' },
    { name: 'اولتراسونیک', desc: 'سطح‌سنجی اقتصادی برای کاربردهای استاندارد' },
    { name: 'هدایت‌موجی (Guided Wave)', desc: 'رادار هدایت‌شده برای مخازن کوچک و جداکننده' },
    { name: 'خازنی (Capacitive)', desc: 'سوئیچ و سطح‌سنجی نقطه‌ای' },
    { name: 'لرزشی (Vibrating)', desc: 'تشخیص نقطه‌سطح برای پودر و ذرات' },
    { name: 'فشار (Pressure)', desc: 'ترانسمیتر و سوئیچ فشار برای خطوط لوله و مخازن' }
  ],

  bizdavarServices: [
    { title: 'مشاوره فنی رایگان', desc: 'انتخاب مدل بر اساس شرایط فرآیند — به فارسی و بدون تعهد خرید' },
    { title: 'تامین محصول اصل', desc: 'سفارش از کانال رسمی VEGA با کد سفارش مشخص و قابل ردیابی' },
    { title: 'پیش‌فاکتور شفاف', desc: 'قیمت، زمان تحویل و شرایط پرداخت قبل از ثبت سفارش' },
    { title: 'لجستیک تا ایران', desc: 'هماهنگی حمل بین‌المللی، بیمه و تحویل به نماینده شما' },
    { title: 'پشتیبانی پروژه', desc: 'دیتاشیت، راهنمای نصب و پاسخگویی پس از تحویل' },
    { title: 'قطعات یدکی', desc: 'تامین لوازم جانبی، فلنج، نمایشگر و قطعات مصرفی VEGA' }
  ],

  inquiryTemplate: 'سلام، درخواست استعلام قیمت و تامین {product} از VEGA دارم.\n\nنوع اندازه‌گیری:\nمحیط فرآیند:\nدما/فشار تقریبی:\nسایز مخزن یا لوله:\nاتصال (فلنج/رزوه):\nخروجی سیگنال:\nتعداد:\nمقصد تحویل:\n'
};
