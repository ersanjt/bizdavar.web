/**
 * VEGA — Product catalog data (source: vega.com)
 * محتوای محصولات بر اساس وبسایت رسمی VEGA
 */
window.VEGA_CATALOG = {
  brand: {
    name: 'VEGA',
    nameFa: 'وگا',
    tagline: 'Level and pressure instrumentation for the process industry',
    taglineFa: 'ابزار دقیق سطح و فشار برای صنایع فرآیندی',
    founded: 'بیش از ۶۵ سال تجربه',
    presence: 'حضور در بیش از ۸۰ کشور',
    origin: 'شیلتاخ، جنگل سیاه — آلمان',
    officialUrl: 'https://www.vega.com/en-ae',
    descriptionFa: 'VEGA تولیدکننده جهانی سنسورهای اندازه‌گیری سطح، نقطه‌سطح (سوئیچ)، فشار و نرم‌افزار یکپارچه‌سازی با سیستم‌های کنترل فرآیند است. فناوری راداری VEGA استاندارد صنعت را تعیین می‌کند.'
  },

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
      image: 'assets/images/vega/vegapuls-6x.svg',
      badge: 'پرچمدار',
      summaryFa: 'سنسور راداری سطح نسل ششم — دقت مطلق در جلوگیری از سرریز و خشک‌شدن مخزن.',
      features: [
        'فناوری رادار ۸۰ گیگاهرتز — THE 6X®',
        'اندازه‌گیری سطح بدون تماس با محیط',
        'ایمنی حداکثری فرآیند (Process Safety)',
        'مناسب مخازن بالا، دما و فشار بالا',
        'نمایشگر وضعیت ۳۶۰ درجه'
      ],
      applications: ['پتروشیمی', 'غذایی', 'دارویی', 'آب و فاضلاب'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/level/radar/vegapuls-6x'
    },
    {
      id: 'vegapuls',
      name: 'VEGAPULS',
      series: 'Basic — Compact Radar',
      category: 'level',
      image: 'assets/images/vega/vegapuls.svg',
      badge: 'فشرده',
      summaryFa: 'سنسور راداری فشرده — رادار جایگزین بهتر اولتراسونیک برای اندازه‌گیری سطح.',
      features: [
        'طراحی فشرده برای نصب آسان',
        'رادار — دقت بالاتر از اولتراسونیک',
        'مقاوم در برابر بخار، فوم و آشفتگی',
        'تنظیم پارامتر ساده',
        'هزینه مالکیت پایین'
      ],
      applications: ['آب', 'مواد شیمیایی', 'مواد غذایی', 'پالایشگاه'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/level/radar'
    },
    {
      id: 'vegabar',
      name: 'VEGABAR',
      series: 'Basic — Pressure Switch',
      category: 'pressure',
      image: 'assets/images/vega/vegabar.svg',
      badge: 'فشار',
      summaryFa: 'سوئیچ فشار فشرده با نمایشگر وضعیت ۳۶۰ درجه برای کنترل دقیق فرآیند.',
      features: [
        'اندازه‌گیری فشار مطلق و نسبی',
        'نمایشگر وضعیت ۳۶۰°',
        'خروجی سوئیچینگ قابل اعتماد',
        'ساخت فشرده صنعتی',
        'تنظیم آسان در محل'
      ],
      applications: ['خطوط لوله', 'مخازن تحت فشار', 'پتروشیمی', 'انرژی'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/pressure'
    },
    {
      id: 'vegapoint',
      name: 'VEGAPOINT',
      series: 'Basic — Level Switch',
      category: 'point',
      image: 'assets/images/vega/vegapoint.svg',
      badge: 'سوئیچ',
      summaryFa: 'سوئیچ سطح فشرده با نمایشگر ۳۶۰ درجه — سیگنال قطعی برای ایمنی فرآیند.',
      features: [
        'تشخیص نقطه‌سطح (Point Level)',
        'جلوگیری از پر شدن یا خشک شدن مخزن',
        'نمایشگر وضعیت ۳۶۰°',
        'سیگنال سوئیچینگ پایدار',
        'نصب سریع و نگهداری کم'
      ],
      applications: ['مخازن ذخیره', 'سیلو', 'جداکننده', 'فرآیندهای پیوسته'],
      officialRef: 'https://www.vega.com/en-ae/products/product-catalog/level/switching'
    }
  ],

  valueProps: [
    {
      title: 'ایمنی فرآیند',
      desc: 'جلوگیری از سرریز یا خشک‌شدن مخزن با دقت مطلق — سیگنال سوئیچینگ قابل اعتماد در هر شرایط.'
    },
    {
      title: 'فناوری پیشرفته',
      desc: 'سنسورهای سطح و فشار VEGA نه تنها پیشرفته‌اند — استاندارد صنعت را تعیین می‌کنند.'
    },
    {
      title: 'صنعت ۴.۰',
      desc: 'راهکارهای هوشمند برای تحلیل داده سنسور و یکپارچه‌سازی با سیستم‌های کنترل فرآیند.'
    },
    {
      title: 'اقتصاد هیدروژن',
      desc: 'سنسورهای VEGA مقدار و فشار صحیح را در تمام فرآیندهای هیدروژن تضمین می‌کنند.'
    }
  ],

  industries: [
    { name: 'صنایع شیمیایی', nameEn: 'Chemical industry', icon: 'flask' },
    { name: 'صنایع غذایی', nameEn: 'Food industry', icon: 'utensils' },
    { name: 'داروسازی', nameEn: 'Pharmaceutical', icon: 'pill' },
    { name: 'آب و فاضلاب', nameEn: 'Water & wastewater', icon: 'droplet' },
    { name: 'آبزی‌پروری', nameEn: 'Aquaculture', icon: 'fish' },
    { name: 'مصالح ساختمانی', nameEn: 'Building materials', icon: 'crane' },
    { name: 'جذب کربن', nameEn: 'Carbon Capture', icon: 'leaf' },
    { name: 'انرژی', nameEn: 'Energy', icon: 'bolt' },
    { name: 'معدن و فلزات', nameEn: 'Mining & metals', icon: 'pickaxe' },
    { name: 'نفت و گاز دریایی', nameEn: 'Oil & gas offshore', icon: 'barrel' },
    { name: 'صنایع کاغذ', nameEn: 'Paper industry', icon: 'document' },
    { name: 'پالایش و پتروشیمی', nameEn: 'Refining & petrochemicals', icon: 'factory' },
    { name: 'کشتی‌سازی', nameEn: 'Ship & yacht building', icon: 'ship' },
    { name: 'محیط‌زیست و بازیافت', nameEn: 'Environment & recycling', icon: 'recycle' },
    { name: 'سیمان', nameEn: 'Cement', icon: 'block' }
  ],

  digitalServices: {
    title: 'myVEGA',
    descFa: 'پلتفرم اطلاعات شخصی VEGA — پیکربندی، قیمت، سفارش آنلاین و دانلود نقشه ۲D/3D ابزار پیکربندی‌شده.',
    features: [
      'پیکربندنده برای کل محصولات VEGA',
      'اطلاعات قیمت و زمان تحویل',
      'سفارش مستقیم آنلاین',
      'ذخیره پیکربندی‌ها',
      'نقشه ۲D/3D ابزار پیکربندی‌شده',
      'پیگیری سفارشات'
    ],
    url: 'https://www.vega.com/en-ae/myvega'
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
    'مشاوره فنی انتخاب سنسور مناسب',
    'تامین اصل از نمایندگی‌های معتبر VEGA',
    'پشتیبانی در انتخاب کد سفارش (Order Code)',
    'لجستیک بین‌المللی و گمرکی',
    'هماهنگی با پروژه‌های صنعتی ایران و ترکیه'
  ]
};
