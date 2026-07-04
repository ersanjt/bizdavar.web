/**
 * Gamak — Industrial electric motors catalog
 * Source: gamak.com — images via scripts/fetch-gamak-assets.py
 */
(function () {
  const G = 'assets/images/gamak/';
  const logo = 'assets/images/partners/gamak.svg';

  const series = (names, note, featuredNames) =>
    names.map(name => ({
      name,
      note: note || 'Gamak electric motor',
      featured: featuredNames ? featuredNames.includes(name) : false
    }));

  window.GAMAK_CATALOG = {
    brand: {
      name: 'Gamak',
      nameFa: 'گاماک',
      logo,
      logoAlt: 'Gamak — Turkish industrial electric motors since 1961',
      heroImage: G + 'category-three-phase.webp',
      heroImageAlt: 'Gamak three-phase asynchronous electric motor — low voltage IE2/IE3',
      heroEyebrow: 'تامین رسمی الکتروموتور Gamak از ترکیه',
      heroHeadline: 'الکتروموتور صنعتی Gamak',
      heroHeadlineSub: 'سه‌فاز و تک‌فاز · IE2/IE3/IE4 · 0.06 تا 4000 kW — مشاوره انتخاب توان و لجستیک',
      tagline: 'Power to Energize Life',
      taglineFa: 'موتور الکتریکی صنعتی — ساخت ازمیر، ترکیه',
      since: 'از سال ۱۹۶۱ · Izmir',
      origin: 'ازمیر — ترکیه',
      officialUrl: 'https://www.gamak.com/en',
      descriptionFa: 'بیزدوار گروپ تامین‌کننده الکتروموتور Gamak برای پروژه‌های صنعتی، پمپ، HVAC و خطوط تولید در ایران است. محصول اصل با پلاک فنی معتبر — انتخاب توان، دور، فلنج و کلاس IE — با پیش‌فاکتور شفاف و حمل از ترکیه.',
      heroStats: [
        { value: '0.06–4000 kW', label: 'محدوده توان' },
        { value: 'IE2/IE3/IE4', label: 'کلاس بهره‌وری' },
        { value: '80+', label: 'کشور صادرات' }
      ]
    },

    trustSignals: [
      { icon: 'target', label: 'محصول اصل Gamak', desc: 'تامین از تولیدکننده ترکیه — پلاک فنی، سریال و دیتاشیت معتبر' },
      { icon: 'globe', label: 'مشاوره فارسی', desc: 'انتخاب kW، rpm، فلنج B3/B5 و IE — بر اساس کاربرد واقعی پروژه' },
      { icon: 'factory', label: 'تولید یکپارچه', desc: 'یکی از معدود کارخانه‌های جهان با تولید کامل موتور تحت یک سقف' },
      { icon: 'mail', label: 'لجستیک شفاف', desc: 'پیش‌فاکتور، lead time و حمل از Gamak/استانبول تا تحویل پروژه' }
    ],

    whyBuyFromUs: [
      { icon: 'target', title: 'انتخاب درست توان و دور', desc: 'اگر مشخصات موتور قدیمی را ندارید — نوع بار (پمپ/فن/نوار)، ولتاژ و فلنج را بگویید. سری مناسب Gamak را پیشنهاد می‌دهیم.' },
      { icon: 'factory', title: 'جایگزینی موتور فرسوده', desc: 'برای تعمیرات اساسی کارخانه‌های ایران — تطبیق فلنج B3/B5/B35، شفت و توان با موتور موجود.' },
      { icon: 'document', title: 'پیش‌فاکتور قبل از پرداخت', desc: 'قیمت، کد سفارش، زمان تحویل و شرایط حمل در پیش‌فاکتور رسمی — بدون هزینه پنهان.' },
      { icon: 'handshake', title: 'یک نقطه تماس', desc: 'موتور + مشاوره نصب و alignment — از یک تیم فارسی‌زبان. نیازی به مکاتبه مستقیم با کارخانه نیست.' }
    ],

    purchaseSteps: [
      { num: '۱', title: 'استعلام', desc: 'توان kW، دور rpm، فلنج B3/B5/B35، ولتاژ 380V یا 220V، تعداد' },
      { num: '۲', title: 'مشاوره فنی', desc: 'پیشنهاد سری سه‌فاز/تک‌فاز، IE2/IE3/IE4، Ex-proof یا ترمزدار در صورت نیاز' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت Gamak، lead time انبار ترکیه، شرایط پرداخت' },
      { num: '۴', title: 'تامین و حمل', desc: 'سفارش از Gamak، بسته‌بندی صنعتی — لجستیک بین‌المللی' },
      { num: '۵', title: 'تحویل و پشتیبانی', desc: 'تحویل در ایران — دیتاشیت، راهنمای نصب و پاسخ فنی' }
    ],

    highlights: [
      {
        title: 'سه‌فاز — Three Phase',
        titleTr: 'Three Phase Asynchronous Motors',
        desc: 'پرکاربردترین سری Gamak — آلومینیوم و چدن، IE2/IE3، 2/4/6 pole',
        useCaseFa: 'پمپ، فن، نوار نقاله، کمپرسور، میکسر',
        badge: '3-Phase',
        inquiryName: 'Gamak three-phase motor',
        image: G + 'category-three-phase.webp',
        imageAlt: 'Gamak three-phase asynchronous electric motor'
      },
      {
        title: 'تک‌فاز — 220V',
        titleTr: 'Single Phase Asynchronous Motors',
        desc: 'موتور تک‌فاز با خازن — کارگاه، HVAC سبک و ماشین‌آلات کوچک',
        useCaseFa: 'کارگاه، تهویه، دستگاه کوچک',
        badge: '1-Phase',
        inquiryName: 'Gamak single-phase motor',
        image: G + 'category-single-phase.webp',
        imageAlt: 'Gamak single-phase 220V electric motor'
      },
      {
        title: 'Ex-Proof — ATEX',
        titleTr: 'Ex-Proof Motors',
        desc: 'موتور ضد انفجار برای Zone 1/2 — پتروشیمی و محیط‌های خطرناک',
        useCaseFa: 'پتروشیمی، پالایش، solvent و محیط Ex',
        badge: 'Ex-Proof',
        inquiryName: 'Gamak Ex-proof motor',
        image: G + 'category-ex-proof.webp',
        imageAlt: 'Gamak Ex-proof ATEX electric motor'
      },
      {
        title: 'IE4 — بهره‌وری بالا',
        titleTr: 'IE4 High Efficiency Motors',
        desc: 'موتور IE4 Gamak — مصرف انرژی کمتر با عملکرد یکسان',
        useCaseFa: 'پروژه‌های جدید، الزامات بهره‌وری انرژی',
        badge: 'IE4',
        inquiryName: 'Gamak IE4 motor',
        image: G + 'category-ie4.webp',
        imageAlt: 'Gamak IE4 high efficiency electric motor'
      },
      {
        title: 'اوره‌ولتاژ متوسط',
        titleTr: 'Medium Voltage Motors',
        desc: '315–630 frame · 150–4000 kW — بار سنگین صنعتی',
        useCaseFa: 'فن بزرگ، پمپ HV، کمپرسور صنعتی',
        badge: 'MV',
        inquiryName: 'Gamak medium voltage motor',
        image: G + 'category-medium-voltage.webp',
        imageAlt: 'Gamak medium voltage electric motor'
      },
      {
        title: 'دودکش — Smoke Extraction',
        titleTr: 'Smoke Extraction Motors',
        desc: 'موتور تخلیه دود Gamak — HVAC ایمنی ساختمان',
        useCaseFa: 'سیستم دودکش، پارکینگ، تونل',
        badge: 'Smoke',
        inquiryName: 'Gamak smoke extraction motor',
        image: G + 'category-smoke-extraction.webp',
        imageAlt: 'Gamak smoke extraction motor for HVAC'
      }
    ],

    categories: [
      {
        id: 'three-phase',
        title: 'سه‌فاز — Three Phase',
        titleTr: 'Three Phase Asynchronous Motors',
        icon: 'gear',
        image: G + 'category-three-phase.webp',
        imageAlt: 'Gamak three-phase low voltage motors',
        desc: 'موتور asynchronous سه‌فاز 380V — frame 56 تا 630، 0.06 تا 3000 kW',
        series: series(
          ['Three Phase Async — Aluminum', 'Three Phase Async — Cast Iron', '2-pole 3000 rpm', '4-pole 1500 rpm', '6-pole 1000 rpm', 'IE2 / IE3 / IE4'],
          'Low voltage / 380V',
          ['Three Phase Async — Cast Iron', '4-pole 1500 rpm', 'IE2 / IE3 / IE4']
        )
      },
      {
        id: 'single-phase',
        title: 'تک‌فاز — Single Phase',
        titleTr: 'Single Phase Asynchronous Motors',
        icon: 'bolt',
        image: G + 'category-single-phase.webp',
        imageAlt: 'Gamak single-phase motors',
        desc: 'موتور تک‌فاز با خازن — 220V برای کارگاه و HVAC سبک',
        series: series(['Single Phase Async — frame 56–132', 'Capacitor start / run', 'Dual voltage option'], 'Single-phase 220V', ['Single Phase Async — frame 56–132'])
      },
      {
        id: 'special-duty',
        title: 'ویژه — Ex / Smoke / Crusher',
        titleTr: 'Special Duty Motors',
        icon: 'shield',
        image: G + 'category-ex-proof.webp',
        imageAlt: 'Gamak Ex-proof and special duty motors',
        desc: 'Ex-proof، smoke extraction، crusher و milking — بر اساس دیتاشیت Gamak',
        series: series(
          ['Ex-Proof Motors (ATEX)', 'Smoke Extraction Motors', 'Crusher Motors', 'Milking Machine Motors', 'Double Speed Motors'],
          'Special application',
          ['Ex-Proof Motors (ATEX)', 'Smoke Extraction Motors', 'Crusher Motors']
        )
      },
      {
        id: 'medium-voltage',
        title: 'فشار متوسط — MV',
        titleTr: 'Medium Voltage Electric Motors',
        icon: 'factory',
        image: G + 'category-medium-voltage.webp',
        imageAlt: 'Gamak medium voltage motors',
        desc: '315–630 frame · 150–4000 kW — برای بار سنگین و فرآیندهای پیچیده',
        series: series(['Medium Voltage — general industry', 'Medium Voltage — fan & pump', 'Custom MV project'], 'Medium voltage', ['Medium Voltage — general industry'])
      },
      {
        id: 'efficiency',
        title: 'بهره‌وری — IE4 / Inverter',
        titleTr: 'Energy Efficiency & VFD',
        icon: 'bolt',
        image: G + 'category-ie4.webp',
        imageAlt: 'Gamak IE4 and inverter-duty motors',
        desc: 'IE4 و موتور سازگار با inverter — صرفه‌جویی انرژی و کنترل سرعت',
        series: series(['IE4 efficiency class', 'Inverter-duty insulation', 'Speed control compatible'], 'IE4 / VFD', ['IE4 efficiency class', 'Inverter-duty insulation'])
      }
    ],

    iranIndustries: [
      { name: 'پتروشیمی و پالایش', desc: 'Ex-proof و سه‌فاز IE3 — پمپ، فن و کمپرسور', image: G + 'industry-oil-gas.webp', imageAlt: 'Gamak Ex-proof motor for petrochemical Iran', icon: 'factory' },
      { name: 'آب و فاضلاب', desc: 'پمپ‌های لجن و تأمین آب — B3/B5، IP55', image: G + 'industry-water.webp', imageAlt: 'Gamak motor for water treatment Iran', icon: 'droplet' },
      { name: 'غذا و لبنیات', desc: 'سری جدید Gamak — نوار نقاله، میکسر، HVAC بهداشتی', image: G + 'industry-food.webp', imageAlt: 'Gamak motor food and beverage industry', icon: 'globe' },
      { name: 'معدن و سیمان', desc: 'Crusher motor — نوار نقاله و سنگ‌شکن، IP55', image: G + 'industry-mining.webp', imageAlt: 'Gamak crusher motor mining cement', icon: 'pickaxe' },
      { name: 'کشاورزی', desc: 'Milking machine motor و پمپ آبیاری', image: G + 'industry-agriculture.webp', imageAlt: 'Gamak motor agriculture milking pump', icon: 'factory' },
      { name: 'HVAC و ساختمان', desc: 'Smoke extraction و فن — ایمنی ساختمان', image: G + 'industry-hvac.webp', imageAlt: 'Gamak smoke extraction HVAC motor', icon: 'bolt' }
    ],

    industries: [
      { name: 'صنایع تولیدی', nameTr: 'Manufacturing', desc: 'Conveyor, mixer and production line motors', image: G + 'industry-manufacturing.webp', imageAlt: 'Gamak motor manufacturing industry', icon: 'factory' },
      { name: 'آب و فاضلاب', nameTr: 'Water & Wastewater', desc: 'Pump and blower duty motors', image: G + 'industry-water.webp', imageAlt: 'Gamak water pump motor', icon: 'droplet' },
      { name: 'غذا و نوشیدنی', nameTr: 'Food & Beverage', desc: 'Washdown and conveyor applications', image: G + 'industry-food.webp', imageAlt: 'Gamak food industry motor', icon: 'globe' },
      { name: 'معدن و سیمان', nameTr: 'Mining & Cement', desc: 'Crusher and heavy-duty conveyor motors', image: G + 'industry-mining.webp', imageAlt: 'Gamak crusher mining motor', icon: 'pickaxe' },
      { name: 'نفت و گاز', nameTr: 'Oil & Gas', desc: 'Ex-proof motors for hazardous areas', image: G + 'industry-oil-gas.webp', imageAlt: 'Gamak Ex-proof oil gas motor', icon: 'barrel' },
      { name: 'انرژی', nameTr: 'Energy', desc: 'Medium voltage for fans and heavy loads', image: G + 'industry-energy.webp', imageAlt: 'Gamak medium voltage energy motor', icon: 'bolt' },
      { name: 'کشاورزی', nameTr: 'Agriculture', desc: 'Milking and irrigation pump motors', image: G + 'industry-agriculture.webp', imageAlt: 'Gamak agriculture motor', icon: 'factory' },
      { name: 'HVAC', nameTr: 'HVAC & Building', desc: 'Smoke extraction and fan motors', image: G + 'industry-hvac.webp', imageAlt: 'Gamak HVAC smoke extraction motor', icon: 'bolt' }
    ],

    academy: {
      title: 'Gamak — از ۱۹۶۱، قلب صنعت ترکیه',
      descFa: 'Gamak اولین موتور الکتریکی بومی ترکیه را تولید کرد و امروز یکی از بزرگ‌ترین تولیدکنندگان موتور در اروپا است — با آزمایشگاه تست، مسیریابی سیم و قالب‌سازی اختصاصی. بیزدوار گروپ پل بین پروژه شما و Gamak برای انتخاب فنی، تامین و لجستیک است.',
      image: G + 'factory-main.webp',
      imageAlt: 'Gamak electric motor production facility Izmir',
      imageSecondary: G + 'factory-assembly.webp',
      imageSecondaryAlt: 'Gamak motor assembly production line',
      url: 'https://www.gamak.com/en/production-facility',
      urlLabel: 'تاسیسات تولید Gamak',
      topics: [
        'انتخاب kW و Service Factor — پمپ در مقابل فن',
        'IE2 vs IE3 vs IE4 — بهره‌وری انرژی',
        'B3 vs B5 vs B35 — نصب صحیح روی پمپ',
        'Ex-proof و smoke extraction — کاربردهای ویژه',
        'سازگاری با inverter — کلاس عایق و VFD',
        'فشار متوسط — frame 315–630'
      ]
    },

    services: [
      { title: 'مشاوره انتخاب موتور', desc: 'توان، دور، فلنج، IE class — بر اساس دیتاشیت Gamak' },
      { title: 'جایگزینی موتور قدیمی', desc: 'تطبیق ابعاد نصب و شفت با موتور موجود در سایت' },
      { title: 'پیش‌فاکتور رسمی', desc: 'قیمت، lead time و شرایط حمل در یک سند' },
      { title: 'لجستیک ترکیه → ایران', desc: 'از کارخانه Gamak تا تحویل پروژه' },
      { title: 'پشتیبانی فارسی', desc: 'info@bizdavar.com و واتساپ — یک نقطه تماس' }
    ],

    faq: [
      { q: 'موتور Gamak اصل است؟', a: 'بله — فقط موتور اصل Gamak با پلاک فنی و سریال تامین می‌شود. مشخصات در پیش‌فاکتور درج می‌شود.' },
      { q: 'چطور توان موتور را انتخاب کنم؟', a: 'نوع بار (پمپ، فن، نوار)، دور مورد نیاز، ولتاژ و نوع فلنج را بفرستید. تیم فنی مدل مناسب را پیشنهاد می‌دهد.' },
      { q: 'IE2، IE3 یا IE4؟', a: 'IE4 بالاترین بهره‌وری — برای پروژه‌های جدید. IE3 استاندارد رایج صنعتی. IE2 برای جایگزینی اقتصادی‌تر.' },
      { q: 'زمان تحویل به ایران؟', a: 'معمولاً ۲ تا ۶ هفته بسته به توان و موجودی. زمان دقیق در پیش‌فاکتور.' },
      { q: 'موتور Ex-proof و smoke extraction دارید؟', a: 'بله — سری‌های Ex-proof، smoke extraction و crusher از کاتالوگ رسمی Gamak قابل تامین است.' },
      { q: 'فشار متوسط (MV) هم تامین می‌شود؟', a: 'بله — موتورهای medium voltage Gamak از 150 kW تا 4000 kW — برای پروژه‌های سنگین صنعتی.' }
    ],

    inquiryTemplate: 'سلام، درخواست استعلام {product} از Gamak دارم.\n\nتوان kW / دور rpm:\nفلنج B3/B5:\nولتاژ:\nتعداد:\n',

    officialUrl: 'https://www.gamak.com/en'
  };
})();
