/**
 * Gamak — Industrial electric motors catalog
 * Source: gamak.com + Bizdavar supply experience
 */
(function () {
  const base = 'assets/images/gamak';
  const hero = `${base}/hero/gamak-motor.webp`;
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
      logoAlt: 'Gamak — Turkish industrial electric motors',
      heroImage: hero,
      heroImageAlt: 'Gamak three-phase industrial electric motor IE2/IE3',
      heroEyebrow: 'تامین رسمی الکتروموتور Gamak از ترکیه',
      heroHeadline: 'الکتروموتور صنعتی Gamak',
      heroHeadlineSub: 'سه‌فاز و تک‌فاز · IE2/IE3 · فلنج B3/B5/B35 — مشاوره انتخاب توان و لجستیک',
      tagline: 'Industrial Electric Motors',
      taglineFa: 'موتور الکتریکی صنعتی — ساخت ترکیه',
      since: 'از سال ۱۹۷۸ · Izmir',
      descriptionFa: 'بیزدوار گروپ تامین‌کننده الکتروموتور Gamak برای پروژه‌های صنعتی، پمپ، HVAC و خطوط تولید در ایران و منطقه است. انتخاب توان، دور، فلنج و کلاس بهره‌وری — با پیش‌فاکتور شفاف و حمل از استانبول.',
      heroStats: [
        { value: '0.09–315 kW', label: 'محدوده توان' },
        { value: 'IE2/IE3', label: 'کلاس بهره‌وری' },
        { value: 'B3/B5/B35', label: 'نوع فلنج' }
      ]
    },

    trustSignals: [
      { icon: 'target', label: 'محصول اصل Gamak', desc: 'تامین از تولیدکننده ترکیه — پلاک فنی و سریال معتبر' },
      { icon: 'globe', label: 'مشاوره فارسی', desc: 'انتخاب kW، rpm، فلنج و IE — بر اساس دیتاشیت و کاربرد واقعی' },
      { icon: 'factory', label: 'مناسب صنعت ایران', desc: 'پمپ، کمپرسور، نوار نقاله، HVAC و خط تولید' },
      { icon: 'mail', label: 'لجستیک شفاف', desc: 'پیش‌فاکتور، lead time و حمل از ترکیه تا تحویل پروژه' }
    ],

    whyBuyFromUs: [
      { icon: 'target', title: 'انتخاب درست توان و دور', desc: 'اگر مشخصات موتور قدیمی را ندارید — نوع بار (پمپ/فن/نوار) و ولتاژ را بگویید. GM/GMB مناسب را پیشنهاد می‌دهیم.' },
      { icon: 'factory', title: 'جایگزینی موتور فرسوده', desc: 'برای تعمیرات اساسی کارخانه‌های ایران — تطبیق فلنج، شفت و توان با موتور موجود.' },
      { icon: 'document', title: 'پیش‌فاکتور قبل از پرداخت', desc: 'قیمت، کد سفارش، زمان تحویل و شرایط حمل در پیش‌فاکتور رسمی.' },
      { icon: 'handshake', title: 'یک نقطه تماس', desc: 'موتور + کوپلینگ + مشاوره نصب — از یک تیم. نیازی به مکاتبه مستقیم با کارخانه نیست.' }
    ],

    purchaseSteps: [
      { num: '۱', title: 'استعلام', desc: 'توان kW، دور rpm، فلنج B3/B5، ولتاژ 380V یا 220V، تعداد' },
      { num: '۲', title: 'مشاوره فنی', desc: 'پیشنهاد سری GM/GMB، IE2 یا IE3، و گزینه ترمزدار در صورت نیاز' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت Gamak، lead time انبار ترکیه، شرایط پرداخت' },
      { num: '۴', title: 'تامین و حمل', desc: 'سفارش از Gamak، بسته‌بندی صنعتی — لجستیک بین‌المللی' },
      { num: '۵', title: 'تحویل و پشتیبانی', desc: 'تحویل در ایران — راهنمای نصب و alignment اولیه' }
    ],

    highlights: [
      {
        title: 'GM/GMB — موتور سه‌فاز استاندارد',
        titleTr: 'GM/GMB Three-Phase Motors',
        desc: 'پرکاربردترین سری — B3 پایه، IE2/IE3، 2 تا 4 pole',
        useCaseFa: 'پمپ، فن، نوار نقاله، میکسر',
        badge: 'Standard',
        inquiryName: 'Gamak GM/GMB',
        image: hero,
        imageAlt: 'Gamak GM GMB three-phase motor'
      },
      {
        title: 'موتور فلنج‌دار B5/B35',
        titleTr: 'Flange Mount Motors',
        desc: 'نصب عمودی یا پمپ‌های inline — فلنج آلومینیومی یا چدنی',
        useCaseFa: 'پمپ سانتریفیوژ، gearbox',
        badge: 'Flange',
        inquiryName: 'Gamak B5 motor',
        image: hero,
        imageAlt: 'Gamak flange mount B5 electric motor'
      },
      {
        title: 'موتور ترمزدار',
        titleTr: 'Brake Motors',
        desc: 'DC brake — توقف ایمن در بالابر، جرثقیل و نوار نقاله',
        useCaseFa: 'بالابر، جرثقیل سبک، خط بسته‌بندی',
        badge: 'Brake',
        inquiryName: 'Gamak brake motor',
        image: hero,
        imageAlt: 'Gamak brake motor with DC brake'
      },
      {
        title: 'تک‌فاز 220V',
        titleTr: 'Single-Phase Motors',
        desc: 'کارگاه، HVAC سبک، ماشین‌آلات کوچک',
        useCaseFa: 'کارگاه، تهویه، دستگاه کوچک',
        badge: '1-Phase',
        inquiryName: 'Gamak single-phase',
        image: hero,
        imageAlt: 'Gamak single-phase 220V motor'
      }
    ],

    categories: [
      {
        id: 'three-phase',
        title: 'سه‌فاز — GM / GMB / GMC',
        titleTr: 'Three-Phase Motors',
        icon: 'gear',
        image: hero,
        imageAlt: 'Gamak three-phase industrial motors',
        desc: 'موتور asynchronous سه‌فاز 380V — پایه B3، توان 0.09 تا 315 kW',
        series: series(
          ['GM 63–132', 'GM 160–200', 'GMB 225–315', 'GMC high efficiency', '2-pole 3000 rpm', '4-pole 1500 rpm', '6-pole 1000 rpm'],
          'Three-phase / IE2 IE3',
          ['GM 160–200', 'GMB 225–315', '4-pole 1500 rpm']
        )
      },
      {
        id: 'single-phase',
        title: 'تک‌فاز — 220V',
        titleTr: 'Single-Phase Motors',
        icon: 'bolt',
        image: hero,
        imageAlt: 'Gamak single-phase motors',
        desc: 'موتور تک‌فاز با خازن — کارگاه و HVAC سبک',
        series: series(['GM 56–100 1-phase', 'GM 112–132 1-phase', 'Capacitor start/run'], 'Single-phase 220V', ['GM 56–100 1-phase'])
      },
      {
        id: 'flange',
        title: 'فلنج‌دار — B5 / B14 / B35',
        titleTr: 'Flange Mount',
        icon: 'wrench',
        image: hero,
        imageAlt: 'Gamak B5 B35 flange motors',
        desc: 'نصب عمودی روی پمپ یا gearbox — فلنج استاندارد IEC',
        series: series(['B5 flange (IM3001)', 'B14 face mount (IM3601)', 'B35 foot+flange (IM2001)', 'Pump motor assembly'], 'Flange / IEC', ['B5 flange (IM3001)', 'B35 foot+flange (IM2001)'])
      },
      {
        id: 'brake',
        title: 'ترمزدار — Brake Motor',
        titleTr: 'Brake Motors',
        icon: 'shield',
        image: hero,
        imageAlt: 'Gamak brake motors',
        desc: 'ترمز DC spring-applied — ایمنی در بالابر و conveyor',
        series: series(['GMB brake motor', 'Dual-speed + brake', 'Hoist duty brake'], 'Brake / DC', ['GMB brake motor'])
      },
      {
        id: 'special',
        title: 'ویژه — Inverter / Explosion-proof',
        titleTr: 'Special Duty',
        icon: 'factory',
        image: hero,
        imageAlt: 'Gamak special duty motors',
        desc: 'سازگار با inverter، محیط سخت، دمای بالا — بر اساس دیتاشیت',
        series: series(['Inverter-duty insulation', 'High ambient temp', 'Stainless housing (project)', 'Custom shaft / dual speed'], 'Special / Project', ['Inverter-duty insulation'])
      }
    ],

    iranIndustries: [
      { name: 'پتروشیمی و پالایش', desc: 'پمپ، فن و کمپرسور — موتور IE3 با سرویس سنگین', image: hero, imageAlt: 'Gamak motor for petrochemical pumps Iran', icon: 'factory' },
      { name: 'آب و فاضلاب', desc: 'پمپ‌های لجن و تأمین آب — B5/B3', image: hero, imageAlt: 'Gamak motor water treatment Iran', icon: 'droplet' },
      { name: 'غذا و لبنیات', desc: 'نوار نقاله، میکسر، HVAC بهداشتی', image: hero, imageAlt: 'Gamak motor food industry', icon: 'globe' },
      { name: 'معدن و سیمان', desc: 'نوار نقاله، فن سنگ‌شکن — IP55', image: hero, imageAlt: 'Gamak motor mining conveyor', icon: 'pickaxe' },
      { name: 'کشاورزی و آبیاری', desc: 'پمپ شناور و تأسیسات گلخانه', image: hero, imageAlt: 'Gamak motor agriculture pump', icon: 'factory' },
      { name: 'HVAC ساختمان و صنعت', desc: 'فن کویل، چیلر، برج خنک‌کن', image: hero, imageAlt: 'Gamak motor HVAC fan', icon: 'bolt' }
    ],

    industries: [
      { name: 'Water & Wastewater', nameTr: 'Water & Wastewater', desc: 'Pump and blower duty motors', image: hero, imageAlt: 'Gamak water pump motor', icon: 'droplet' },
      { name: 'Food & Beverage', nameTr: 'Food & Beverage', desc: 'Washdown and conveyor applications', image: hero, imageAlt: 'Gamak food industry motor', icon: 'globe' },
      { name: 'Mining & Cement', nameTr: 'Mining & Cement', desc: 'Heavy-duty conveyor and fan motors', image: hero, imageAlt: 'Gamak mining motor', icon: 'pickaxe' },
      { name: 'HVAC', nameTr: 'HVAC', desc: 'Fans, chillers and air handling', image: hero, imageAlt: 'Gamak HVAC motor', icon: 'bolt' }
    ],

    academy: {
      title: 'Gamak — بیش از ۴۵ سال تولید موتور در ازمیر',
      descFa: 'Gamak یکی از بزرگ‌ترین تولیدکنندگان الکتروموتور در ترکیه است — صادرات به ۸۰+ کشور. بیزدوار گروپ پل بین پروژه شما و Gamak برای انتخاب فنی، تامین و لجستیک است.',
      image: hero,
      imageAlt: 'Gamak electric motor factory supply',
      imageSecondary: logo,
      imageSecondaryAlt: 'Gamak logo',
      topics: [
        'انتخاب kW و Service Factor — پمپ در مقابل فن',
        'IE2 vs IE3 — الزامات بهره‌وری انرژی',
        'B3 vs B5 vs B35 — نصب صحیح روی پمپ',
        'موتور ترمزدار — زمان توقف و duty cycle',
        'سازگاری با inverter — کلاس عایق F/H'
      ]
    },

    services: [
      { title: 'مشاوره انتخاب موتور', desc: 'توان، دور، فلنج، IE class — بر اساس دیتاشیت Gamak' },
      { title: 'جایگزینی موتور قدیمی', desc: 'تطبیق ابعاد نصب و شفت با موتور موجود در سایت' },
      { title: 'پیش‌فاکتور رسمی', desc: 'قیمت، lead time و شرایط حمل در یک سند' },
      { title: 'لجستیک ترکیه → ایران', desc: 'از انبار Gamak/استانبول تا تحویل پروژه' },
      { title: 'پشتیبانی فارسی', desc: 'info@bizdavar.com و واتساپ — یک نقطه تماس' }
    ],

    faq: [
      { q: 'موتور Gamak اصل است؟', a: 'بله — فقط موتور اصل Gamak با پلاک فنی و سریال تامین می‌شود. مشخصات در پیش‌فاکتور درج می‌شود.' },
      { q: 'چطور توان موتور را انتخاب کنم؟', a: 'نوع بار (پمپ، فن، نوار)، دور مورد نیاز و ولتاژ را بفرستید. تیم فنی Gamak مناسب را پیشنهاد می‌دهد.' },
      { q: 'IE2 یا IE3؟', a: 'IE3 بهره‌وری بالاتر و مصرف کمتر — برای پروژه‌های جدید و الزامات انرژی. IE2 برای جایگزینی اقتصادی‌تر.' },
      { q: 'زمان تحویل به ایران؟', a: 'معمولاً ۲ تا ۶ هفته بسته به توان و موجودی. زمان دقیق در پیش‌فاکتور.' },
      { q: 'موتور ترمزدار دارید؟', a: 'بله — سری brake motor Gamak برای بالابر، جرثقیل سبک و conveyor با توقف ایمن.' }
    ],

    inquiryTemplate: 'سلام، درخواست استعلام {product} از Gamak دارم.\n\nتوان kW / دور rpm:\nفلنج B3/B5:\nولتاژ:\nتعداد:\n',

    officialUrl: 'https://www.gamak.com/en'
  };
})();
