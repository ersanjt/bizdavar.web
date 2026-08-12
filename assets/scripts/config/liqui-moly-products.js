/**
 * Liqui Moly — catalog with USD prices
 * Source: liquimolyturkey.com / shop.egemot.com.tr | 2026-08-11T09:58:10Z
 * Products: 351
 */
(function () {
  const LM = "assets/images/liqui-moly/";
  const logo = 'assets/images/partners/liqui-moly.svg';
  const rate = { tryPerUsd: 47, label: '' };

  window.LIQUI_MOLY_CATALOG = {
    rate,
    brand: {
      name: 'Liqui Moly',
      nameFa: 'لیکی‌مالی',
      logo,
      logoAlt: 'Liqui Moly — German automotive oils and additives',
      heroImage: LM + 'octane-plus.jpg',
      heroImageAlt: 'Liqui Moly Octane Plus — Made in Germany',
      heroEyebrow: 'تامین اصل Liqui Moly از ترکیه برای فارسی‌زبانان',
      heroHeadline: 'روغن و افزودنی Liqui Moly',
      heroHeadlineSub: 'روغن موتور، افزودنی سوخت، ضدیخ و مراقبت خودرو — قیمت دلاری شفاف + مشاوره فارسی',
      tagline: 'Made in Germany',
      taglineFa: 'روغن و افزودنی خودرو — ساخت آلمان',
      since: 'برند آلمانی · توزیع ترکیه',
      origin: 'آلمان — تامین از ترکیه',
      officialUrl: 'https://www.liquimolyturkey.com/',
      descriptionFa: 'بیزدوار گروپ تامین‌کننده محصولات اصل Liqui Moly است: روغن موتور، افزودنی بنزین و دیزل، ضدیخ، گیربکس و محصولات مراقبت خودرو. قیمت‌ها به دلار نمایش داده می‌شوند — استعلام و سفارش از واتساپ فارسی.',
      heroStats: [
        { value: '351+', label: 'محصول در کاتالوگ' },
        { value: 'USD', label: 'قیمت دلاری' },
        { value: 'DE', label: 'ساخت آلمان' }
      ]
    },
    trustSignals: [
      { icon: 'shield', label: 'محصول اصل', desc: 'تامین از کانال توزیع Liqui Moly ترکیه — کد محصول و مشخصات فنی' },
      { icon: 'coin', label: 'قیمت دلاری شفاف', desc: 'قیمت نمایشی دلاری — پیش‌فاکتور قبل از پرداخت' },
      { icon: 'phone', label: 'مشاوره فارسی', desc: 'انتخاب روغن، ویسکوزیته و افزودنی مناسب خودرو — واتساپ فارسی' },
      { icon: 'ship', label: 'لجستیک بین‌المللی', desc: 'هماهنگی خرید و حمل از ترکیه تا مقصد پروژه شما' }
    ],
    whyBuyFromUs: [
      { icon: 'droplet', title: 'انتخاب درست روغن و افزودنی', desc: 'اگر نمی‌دانید 5W-30 یا 5W-40، یا Octane Plus مناسب است — مدل خودرو و نوع سوخت را بگویید.' },
      { icon: 'document', title: 'قیمت قابل مقایسه', desc: 'قیمت تقریبی دلاری روی هر محصول نمایش داده می‌شود. مبلغ نهایی در پیش‌فاکتور با موجودی روز تایید می‌شود.' },
      { icon: 'handshake', title: 'سفارش تکی یا عمده', desc: 'برای مصرف شخصی، تعمیرگاه یا خرید سازمانی — یک نقطه تماس فارسی.' },
      { icon: 'factory', title: 'برند جهانی آلمان', desc: 'Liqui Moly در روغن موتور، افزودنی سوخت و مراقبت خودرو شناخته‌شده است — ساخت آلمان.' }
    ],
    purchaseSteps: [
      { num: '۱', title: 'انتخاب محصول', desc: 'از کاتالوگ زیر یا نام/کد محصول را در واتساپ بفرستید' },
      { num: '۲', title: 'تایید قیمت', desc: 'قیمت دلاری نمایشی را با موجودی روز چک می‌کنیم و پیش‌فاکتور می‌دهیم' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'مبلغ، تعداد، زمان ارسال و شرایط پرداخت — شفاف' },
      { num: '۴', title: 'تامین و حمل', desc: 'سفارش از ترکیه و هماهنگی لجستیک بین‌المللی' },
      { num: '۵', title: 'تحویل', desc: 'تحویل در مقصد — پشتیبانی فارسی پس از خرید' }
    ],
    quoteChecklist: {
      title: 'برای استعلام دقیق این موارد را بفرستید',
      desc: 'حتی نام محصول یا کد SKU کافی است — یا مدل خودرو را بگویید تا پیشنهاد دهیم.',
      items: [
        'نام محصول یا کد Liqui Moly (مثلاً Octane Plus / 5W-30 Top Tec)',
        'تعداد مورد نیاز (تکی / کارتن / عمده)',
        'نوع خودرو و سوخت (بنزین / دیزل / موتورسیکلت)',
        'شهر یا کشور تحویل'
      ]
    },
    quickSeries: [
      { id: 'engine-oil', name: 'روغن موتور', tag: '5W / 0W', hint: 'Top Tec · Molygen · Special Tec', anchor: 'cat' },
      { id: 'fuel-petrol', name: 'افزودنی بنزین', tag: 'Octane', hint: 'اکتان پلاس · Speed Tec', anchor: 'cat' },
      { id: 'fuel-diesel', name: 'افزودنی دیزل', tag: 'DPF', hint: 'سیستم دیزل · DPF', anchor: 'cat' },
      { id: 'car-care', name: 'مراقبت خودرو', tag: 'Care', hint: 'تمیزکننده · براق‌کننده', anchor: 'cat' }
    ],
    highlights: [
      {
        id: 'octane-plus',
        title: 'Octane Plus — اکتان پلاس',
        titleTr: 'Octane Plus',
        titleEn: 'Octane Plus fuel additive',
        desc: 'افزودنی بنزین ساخت آلمان — افزایش عدد اکتان و احتراق نرم‌تر',
        useCaseFa: 'خودروهای بنزینی · افزودن به باک',
        badge: 'پرفروش',
        inquiryName: 'Liqui Moly Octane Plus',
        image: 'assets/images/liqui-moly/octane-plus.jpg',
        imageAlt: 'Liqui Moly Octane Plus',
        priceUsd: 11.71
      },
      {
        id: 'top-tec-4410',
        title: 'Top Tec 4410 — 5W-30 · ۱ لیتر',
        titleTr: 'Top Tec 4410 5W-30 1L',
        titleEn: 'Top Tec 4410 5W-30 1L',
        desc: 'روغن موتور تمام‌سنتتیک — مناسب خودروهای مدرن اروپایی',
        useCaseFa: 'روغن موتور بنزینی / دیزل سبک',
        badge: 'روغن',
        inquiryName: 'Liqui Moly Top Tec 4410 5W-30 1L',
        image: 'assets/images/liqui-moly/product-4410.jpg',
        imageAlt: 'Liqui Moly Top Tec 4410 5W-30',
        priceUsd: 20.11
      },
      {
        id: 'top-tec-4200',
        title: 'Top Tec 4200 — 5W-30 · ۱ لیتر',
        titleTr: 'Top Tec 4200 5W-30 1L',
        titleEn: 'Top Tec 4200 5W-30 1L',
        desc: 'روغن موتور تمام‌سنتتیک — Longlife و استانداردهای VW/MB',
        useCaseFa: 'روغن موتور · سرویس دوره‌ای',
        badge: 'روغن',
        inquiryName: 'Liqui Moly Top Tec 4200 5W-30 1L',
        image: 'assets/images/liqui-moly/product-4200.jpg',
        imageAlt: 'Liqui Moly Top Tec 4200 5W-30',
        priceUsd: 20.78
      },
      {
        id: 'top-tec-4400',
        title: 'Top Tec 4400 — 5W-30 · ۱ لیتر',
        titleTr: 'Top Tec 4400 5W-30 1L',
        titleEn: 'Top Tec 4400 5W-30 1L',
        desc: 'روغن موتور تمام‌سنتتیک — برای موتورهای با فیلتر ذرات',
        useCaseFa: 'روغن موتور · Low SAPS',
        badge: 'روغن',
        inquiryName: 'Liqui Moly Top Tec 4400 5W-30 1L',
        image: 'assets/images/liqui-moly/product-4400.jpg',
        imageAlt: 'Liqui Moly Top Tec 4400 5W-30',
        priceUsd: 20.96
      },
      {
        id: 'molygen-protect',
        title: 'Molygen Motor Protect',
        titleTr: 'Molygen Motor Protect',
        titleEn: 'Molygen Motor Protect additive',
        desc: 'افزودنی محافظ موتور — کاهش اصطکاک و سایش',
        useCaseFa: 'افزودنی روغن موتور',
        badge: 'افزودنی',
        inquiryName: 'Liqui Moly Molygen Motor Protect',
        image: 'assets/images/liqui-moly/product-500.jpg',
        imageAlt: 'Liqui Moly Molygen Motor Protect',
        priceUsd: 45.43
      },
      {
        id: 'viscosity-stabilizer',
        title: 'پایدارکننده ویسکوزیته روغن',
        titleTr: 'Motor Yağ Viskozite Koruyucu',
        titleEn: 'Oil viscosity stabilizer',
        desc: 'افزودنی حفظ ویسکوزیته — مناسب موتورهای کارکرده',
        useCaseFa: 'افزودنی روغن · ۱ لیتر',
        badge: 'افزودنی',
        inquiryName: 'Liqui Moly Viscosity Stabilizer 1L',
        image: 'assets/images/liqui-moly/product-5196.jpg',
        imageAlt: 'Liqui Moly oil viscosity stabilizer',
        priceUsd: 30.12
      },
      {
        id: 'molygen-15w50',
        title: 'Molygen New Generation — 15W-50',
        titleTr: 'Molygen New Generation 15W-50',
        titleEn: 'Molygen New Generation 15W-50',
        desc: 'روغن موتور با فناوری مولیب‌دن — محافظت بالا در دمای زیاد',
        useCaseFa: 'روغن موتور · شرایط سخت',
        badge: 'روغن',
        inquiryName: 'Liqui Moly Molygen 15W-50',
        image: 'assets/images/liqui-moly/product-2539.jpg',
        imageAlt: 'Liqui Moly Molygen 15W-50',
        priceUsd: 51.12
      },
      {
        id: '4t-street',
        title: '10W-40 4T Street — موتورسیکلت',
        titleTr: '10W-40 4T Street Motosiklet',
        titleEn: '10W-40 4T Street motorcycle oil',
        desc: 'روغن موتورسیکلت چهارزمانه — کلاچ خیس و گیربکس یکپارچه',
        useCaseFa: 'موتورسیکلت · ۴ لیتر',
        badge: 'موتورسیکلت',
        inquiryName: 'Liqui Moly 10W-40 4T Street 4L',
        image: 'assets/images/liqui-moly/product-1243.png',
        imageAlt: 'Liqui Moly 10W-40 4T Street',
        priceUsd: 53.56
      }
    ],
    categories: [
      {
            "id": "engine-oil",
            "title": "روغن موتور",
            "titleTr": "Motor Yağları",
            "icon": "droplet",
            "image": "assets/images/liqui-moly/product-1505.jpg",
            "desc": "160 محصول",
            "series": [
                  {
                        "name": "2T Street Race تمام‌سنتتیک روغن موتور 1 لیتر (1505)",
                        "note": "$25.27 · SKU 1505",
                        "priceUsd": 25.27,
                        "priceTry": 1187.5,
                        "sku": "1505",
                        "image": "assets/images/liqui-moly/product-1505.jpg",
                        "featured": false
                  },
                  {
                        "name": "JASO MA2 onaylı scooter 10w40 روغن موتور",
                        "note": "$10.68 · SKU 20826",
                        "priceUsd": 10.68,
                        "priceTry": 501.84,
                        "sku": "20826",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-scooter-race-motosiklet-motor-yagi-20826-3929.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 0W16 روغن موتور Special Tec AA 4 لیتر (21327)",
                        "note": "$62.66 · SKU 21327",
                        "priceUsd": 62.66,
                        "priceTry": 2944.84,
                        "sku": "21327",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w16-motor-yagi-special-tec-aa-4-litre-21327-1131.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W16 روغن موتور Special Tec AA 5 لیتر (21328)",
                        "note": "$77.26 · SKU 21328",
                        "priceUsd": 77.26,
                        "priceTry": 3631.01,
                        "sku": "21328",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w16-motor-yagi-special-tec-aa-5-litre-21328-6638.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 1 لیتر (6738)",
                        "note": "$17.35 · SKU 6738",
                        "priceUsd": 17.35,
                        "priceTry": 815.59,
                        "sku": "6738",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-aa-1-litre-6738-4511.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 4 لیتر (9705)",
                        "note": "$62.28 · SKU 9705",
                        "priceUsd": 62.28,
                        "priceTry": 2927.36,
                        "sku": "9705",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-aa-4-litre-9705-7694.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 5 لیتر (6739)",
                        "note": "$77.65 · SKU 6739",
                        "priceUsd": 77.65,
                        "priceTry": 3649.69,
                        "sku": "6739",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-aa-5-litre-6739-6893.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 5 لیتر (6739)",
                        "note": "$89.66 · SKU 6310",
                        "priceUsd": 89.66,
                        "priceTry": 4214.02,
                        "sku": "6310",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-6310-0w20-motor-yagi-5-litre-21882-1232.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Special Tec V 1 لیتر (20631)",
                        "note": "$19.79 · SKU 20631",
                        "priceUsd": 19.79,
                        "priceTry": 930.32,
                        "sku": "20631",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-v-1-litre-20631-volvo-5128.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Special Tec V 5 لیتر (20632)",
                        "note": "$88.23 · SKU 20632",
                        "priceUsd": 88.23,
                        "priceTry": 4146.84,
                        "sku": "20632",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-v-5-litre-20632-2188.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6200 1 لیتر (20787)",
                        "note": "$20.62 · SKU 6200",
                        "priceUsd": 20.62,
                        "priceTry": 969.01,
                        "sku": "6200",
                        "image": "assets/images/liqui-moly/product-6200.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6200 4 لیتر (20788)",
                        "note": "$74.05 · SKU 6200",
                        "priceUsd": 74.05,
                        "priceTry": 3480.31,
                        "sku": "6200",
                        "image": "assets/images/liqui-moly/product-6200.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6200 5 لیتر (20789)",
                        "note": "$91.18 · SKU 6200",
                        "priceUsd": 91.18,
                        "priceTry": 4285.43,
                        "sku": "6200",
                        "image": "assets/images/liqui-moly/product-6200.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6400 5 لیتر (21585)",
                        "note": "$94.12 · SKU 6400",
                        "priceUsd": 94.12,
                        "priceTry": 4423.48,
                        "sku": "6400",
                        "image": "assets/images/liqui-moly/product-6400.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6600 5 لیتر (21411)",
                        "note": "$90.96 · SKU 6600",
                        "priceUsd": 90.96,
                        "priceTry": 4275.1,
                        "sku": "6600",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-top-tec-6600-5-litre-21411-1313.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6610 1 لیتر (21660)",
                        "note": "$20.96 · SKU 6610",
                        "priceUsd": 20.96,
                        "priceTry": 985.02,
                        "sku": "6610",
                        "image": "assets/images/liqui-moly/product-6610.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 0W20 روغن موتور Top Tec 6610 5 لیتر (21662)",
                        "note": "$93.21 · SKU 6610",
                        "priceUsd": 93.21,
                        "priceTry": 4380.67,
                        "sku": "6610",
                        "image": "assets/images/liqui-moly/product-6610.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W30 VW روغن موتور تمام‌سنتتیک TOP TEC 4210 5 لیتر (21605)",
                        "note": "$97.49 · SKU 4210",
                        "priceUsd": 97.49,
                        "priceTry": 4582.22,
                        "sku": "4210",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-tam-sentetik-top-tec-4210-5-litre-21605-8629.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W30 روغن موتور Special Tec F 5 لیتر (8903)",
                        "note": "$94.06 · SKU 8903",
                        "priceUsd": 94.06,
                        "priceTry": 4421.03,
                        "sku": "8903",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-special-tec-f-5-litre-8903-4097.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W30 روغن موتور Special Tec Volvo 5 لیتر (2853)",
                        "note": "$86.88 · SKU 2853",
                        "priceUsd": 86.88,
                        "priceTry": 4083.26,
                        "sku": "2853",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-special-tec-v-5-litre-2853-9289.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W30 روغن موتور Synthoil Longtime 5 لیتر (8977)",
                        "note": "$80.32 · SKU 8977",
                        "priceUsd": 80.32,
                        "priceTry": 3774.81,
                        "sku": "8977",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-synthoil-longtime-5-litre-8977-3459.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W30 روغن موتور Top Tec 6100 5 لیتر (20779)",
                        "note": "$96.88 · SKU 6100",
                        "priceUsd": 96.88,
                        "priceTry": 4553.31,
                        "sku": "6100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-top-tec-6100-5-litre-20779-2820.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W30 روغن موتور تمام‌سنتتیک TOP TEC 4310 5 لیتر (2362)",
                        "note": "$101.65 · SKU 4310",
                        "priceUsd": 101.65,
                        "priceTry": 4777.51,
                        "sku": "4310",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-tam-sentetik-top-tec-4310-5-litre-2362-4495.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W40 Synthoil Energy تمام‌سنتتیک روغن موتور 5 لیتر (9515)",
                        "note": "$83.24 · SKU 9515",
                        "priceUsd": 83.24,
                        "priceTry": 3912.18,
                        "sku": "9515",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w40-synthoil-energy-tam-sentetik-motor-yagi-5-litre-9515-6467.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 0W8 روغن موتور Special Tec AA 4 لیتر (21768)",
                        "note": "$65.58 · SKU 21768",
                        "priceUsd": 65.58,
                        "priceTry": 3082.42,
                        "sku": "21768",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w8-motor-yagi-special-tec-aa-4-litre-21768-6019.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W Medium Fork Oil - 10W سنتتیک Amortisör Yağı (orta) 500ml (1506)",
                        "note": "$12.03 · SKU 1506",
                        "priceUsd": 12.03,
                        "priceTry": 565.25,
                        "sku": "1506",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-medium-fork-oil-10w-sentetik-orta-amortisor-yagi-500ml-1506-9639.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W30 4T Marine روغن موتور 1 لیتر (25022)",
                        "note": "$16.72 · SKU 25022",
                        "priceUsd": 16.72,
                        "priceTry": 785.75,
                        "sku": "25022",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w30-4t-marine-motor-yagi-1-litre-25022-1904.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W30 4T Marine روغن موتور 5 لیتر (25023)",
                        "note": "$72.66 · SKU 25023",
                        "priceUsd": 72.66,
                        "priceTry": 3415.1,
                        "sku": "25023",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w30-4t-marine-motor-yagi-5-litre-25023-5121.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W30 4T Street موتورسیکلت روغن موتور 1 لیتر (2526)",
                        "note": "$13.74 · SKU 2526",
                        "priceUsd": 13.74,
                        "priceTry": 646.0,
                        "sku": "2526",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w30-4t-street-motosiklet-motor-yagi-1-litre-2526-4011.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W30 4T Street موتورسیکلت روغن موتور 4 لیتر (1688)",
                        "note": "$50.0 · SKU 1688",
                        "priceUsd": 50.0,
                        "priceTry": 2350.0,
                        "sku": "1688",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000586_liqui-moly-10w30-4t-street-motosiklet-motor-yagi-4-litre-1688_550.jpeg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T ATV روغن موتور 1 لیتر (3013)",
                        "note": "$16.78 · SKU 3013",
                        "priceUsd": 16.78,
                        "priceTry": 788.5,
                        "sku": "3013",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-atv-motor-yagi-1-litre-3013-8213.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T Basic Scooter موتورسیکلت روغن موتور 1 لیتر (1618)",
                        "note": "$12.23 · SKU 1618",
                        "priceUsd": 12.23,
                        "priceTry": 574.75,
                        "sku": "1618",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-basic-scooter-motosiklet-motor-yagi-1-litre-1618-2382.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T Basic Street موتورسیکلت روغن موتور 1 لیتر (3044)",
                        "note": "$11.7 · SKU 3044",
                        "priceUsd": 11.7,
                        "priceTry": 550.0,
                        "sku": "3044",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-basic-street-motosiklet-motor-yagi-1-litre-3044-1013.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T Off Road موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (3055)",
                        "note": "$15.16 · SKU 3055",
                        "priceUsd": 15.16,
                        "priceTry": 712.5,
                        "sku": "3055",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-off-road-motosiklet-tam-sentetik-motor-yagi-1litre-3055-2428.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (20753)",
                        "note": "$24.26 · SKU 20753",
                        "priceUsd": 24.26,
                        "priceTry": 1140.0,
                        "sku": "20753",
                        "image": "assets/images/liqui-moly/product-20753.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 4 لیتر (20754)",
                        "note": "$93.99 · SKU 20754",
                        "priceUsd": 93.99,
                        "priceTry": 4417.5,
                        "sku": "20754",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-race-motosiklet-motor-yagi-4-litre-20754-8892.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T Scooter Race موتورسیکلت روغن موتور 1 لیتر (20826)",
                        "note": "$10.68 · SKU 20826",
                        "priceUsd": 10.68,
                        "priceTry": 501.84,
                        "sku": "20826",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000885_liqui-moly-10w40-4t-scooter-race-motosiklet-motor-yagi-1-litre-20826_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T Street موتورسیکلت روغن موتور 1 لیتر (1521)",
                        "note": "$13.74 · SKU 1521",
                        "priceUsd": 13.74,
                        "priceTry": 646.0,
                        "sku": "1521",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-street-motosiklet-motor-yagi-1-litre-1521-2085.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 4T Street موتورسیکلت روغن موتور 4 لیتر (1243)",
                        "note": "$53.56 · SKU 1243",
                        "priceUsd": 53.56,
                        "priceTry": 2517.5,
                        "sku": "1243",
                        "image": "assets/images/liqui-moly/product-1243.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 Top Tec Truck 4050 روغن موتور 20 لیتر (3794)",
                        "note": "$284.84 · SKU 4050",
                        "priceUsd": 284.84,
                        "priceTry": 13387.52,
                        "sku": "4050",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-truck-4050-motor-yagi-20-litre-3794-4689.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Kısmi سنتتیک MoS2'li LEICHTLAUF 4 لیتر (6948)",
                        "note": "$55.11 · SKU 6948",
                        "priceUsd": 55.11,
                        "priceTry": 2590.02,
                        "sku": "6948",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-motor-yagi-kismi-sentetik-mos2li-leichtlauf-4-litre-6948-1474.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Kısmi سنتتیک MoS2'li LEICHTLAUF 5 لیتر (2184)",
                        "note": "$67.95 · SKU 2184",
                        "priceUsd": 67.95,
                        "priceTry": 3193.68,
                        "sku": "2184",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/10w40-motor-yagi-mos2li-leichtlauf-5-litre-2184-2330.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Leichtlauf Perform 4 لیتر (8998)",
                        "note": "$47.02 · SKU 8998",
                        "priceUsd": 47.02,
                        "priceTry": 2210.07,
                        "sku": "8998",
                        "image": "assets/images/liqui-moly/product-8998.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور MoS2'li Kısmi سنتتیک LEICHTLAUF 1 لیتر (2626)",
                        "note": "$15.72 · SKU 2626",
                        "priceUsd": 15.72,
                        "priceTry": 738.72,
                        "sku": "2626",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/10w40-motor-yagi-mos2li-kismi-sentetik-leichtlauf-1-litre-2626-2025.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Molygen New Generation 1 لیتر (9955)",
                        "note": "$14.98 · SKU 9955",
                        "priceUsd": 14.98,
                        "priceTry": 704.2,
                        "sku": "9955",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-40-motor-yagi-molygen-new-generation-1-litre-9955-8189.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Molygen New Generation 4 لیتر (8538)",
                        "note": "$53.57 · SKU 8538",
                        "priceUsd": 53.57,
                        "priceTry": 2517.94,
                        "sku": "8538",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-40-motor-yagi-molygen-new-generation-4-litre-8538-8206.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Molygen New Generation 5 لیتر (9951)",
                        "note": "$64.72 · SKU 9951",
                        "priceUsd": 64.72,
                        "priceTry": 3041.67,
                        "sku": "9951",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-40-motor-yagi-molygen-new-generation-5-litre-9951-7529.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 1 لیتر (9503)",
                        "note": "$14.11 · SKU 9503",
                        "priceUsd": 14.11,
                        "priceTry": 663.01,
                        "sku": "9503",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/10w40-motor-yagi-super-sentetik-super-leichtlauf-1-litre-9503-7444.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 20 لیتر (1304)",
                        "note": "$235.66 · SKU 1304",
                        "priceUsd": 235.66,
                        "priceTry": 11076.2,
                        "sku": "1304",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-motor-yagi-super-sentetik-super-leichtlauf-20-litre-1304-9885.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 4 لیتر (9504)",
                        "note": "$48.47 · SKU 9504",
                        "priceUsd": 48.47,
                        "priceTry": 2278.27,
                        "sku": "9504",
                        "image": "assets/images/liqui-moly/product-9504.webp",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 5 لیتر (9505)",
                        "note": "$60.16 · SKU 9505",
                        "priceUsd": 60.16,
                        "priceTry": 2827.7,
                        "sku": "9505",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-motor-yagi-super-sentetik-super-leichtlauf-5-litre-9505-7628.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W50 4T Off Road موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (3051)",
                        "note": "$22.77 · SKU 3051",
                        "priceUsd": 22.77,
                        "priceTry": 1070.0,
                        "sku": "3051",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000847_liqui-moly-10w50-4t-off-road-motosiklet-tam-sentetik-motor-yagi-1-litre-3051_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W50 4T Off Road موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (3051)",
                        "note": "$24.26 · SKU 30511",
                        "priceUsd": 24.26,
                        "priceTry": 1140.0,
                        "sku": "30511",
                        "image": "assets/images/liqui-moly/product-30511.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W50 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (1502)",
                        "note": "$24.26 · SKU 1502",
                        "priceUsd": 24.26,
                        "priceTry": 1140.0,
                        "sku": "1502",
                        "image": "assets/images/liqui-moly/product-1502.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W50 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 4 لیتر (1686)",
                        "note": "$93.99 · SKU 1686",
                        "priceUsd": 93.99,
                        "priceTry": 4417.5,
                        "sku": "1686",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w50-4t-race-motosiklet-tam-sentetik-motor-yagi-4-litre-1686-9791.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W60 روغن موتور Synthoil Race Tech GT1 1 لیتر (8908)",
                        "note": "$19.23 · SKU 8908",
                        "priceUsd": 19.23,
                        "priceTry": 903.98,
                        "sku": "8908",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-1-litre-8908-2243.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 10W60 روغن موتور Synthoil Race Tech GT1 4 لیتر (7535)",
                        "note": "$69.59 · SKU 7535",
                        "priceUsd": 69.59,
                        "priceTry": 3270.9,
                        "sku": "7535",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-4-litre-7535-2-6052.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 10W60 روغن موتور Synthoil Race Tech GT1 5 لیتر (8909)",
                        "note": "$82.08 · SKU 8909",
                        "priceUsd": 82.08,
                        "priceTry": 3857.96,
                        "sku": "8909",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-5-litre-8909-9096.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 15W40 4T Marine روغن موتور 1 لیتر (25015)",
                        "note": "$10.44 · SKU 25015",
                        "priceUsd": 10.44,
                        "priceTry": 490.82,
                        "sku": "25015",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000884_liqui-moly-15w40-4t-marine-motor-yagi-1-litre-25015_550.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 15W40 4T Marine روغن موتور 5 لیتر (25016)",
                        "note": "$41.99 · SKU 25016",
                        "priceUsd": 41.99,
                        "priceTry": 1973.45,
                        "sku": "25016",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000883_liqui-moly-15w40-4t-marine-motor-yagi-5-litre-25016_550.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 15W50 4T Street موتورسیکلت روغن موتور 1 لیتر (2555)",
                        "note": "$13.74 · SKU 2555",
                        "priceUsd": 13.74,
                        "priceTry": 646.0,
                        "sku": "2555",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-15w50-4t-street-motosiklet-motor-yagi-1-litre-2555-3992.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 15W50 4T Street موتورسیکلت روغن موتور 4 لیتر (1689)",
                        "note": "$53.56 · SKU 1689",
                        "priceUsd": 53.56,
                        "priceTry": 2517.5,
                        "sku": "1689",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-15w50-4t-street-motosiklet-motor-yagi-4-litre-1689-4463.jpeg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 15W50 روغن موتور Molygen New Generation 4 لیتر (2539)",
                        "note": "$51.12 · SKU 2539",
                        "priceUsd": 51.12,
                        "priceTry": 2402.59,
                        "sku": "2539",
                        "image": "assets/images/liqui-moly/product-2539.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 20W50 4T Basic Street موتورسیکلت روغن موتور 1 لیتر (1500)",
                        "note": "$12.13 · SKU 1500",
                        "priceUsd": 12.13,
                        "priceTry": 570.0,
                        "sku": "1500",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-20w50-4t-basic-street-motosiklet-motor-yagi-1-litre-1500-7373.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 20W50 مینرال روغن موتور MoS2'li LEICHTLAUF 4 لیتر (21358)",
                        "note": "$55.52 · SKU 21358",
                        "priceUsd": 55.52,
                        "priceTry": 2609.34,
                        "sku": "21358",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-20w50-motor-yagi-kismi-sentetik-mos2li-leichtlauf-4-litre-21358-7337.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 25W40 4T Marine روغن موتور 1 لیتر (25026)",
                        "note": "$16.41 · SKU 25026",
                        "priceUsd": 16.41,
                        "priceTry": 771.24,
                        "sku": "25026",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-25w40-4t-marine-motor-yagi-1-litre-25026-7280.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 25W40 4T Marine روغن موتور 5 لیتر (25027)",
                        "note": "$71.6 · SKU 25027",
                        "priceUsd": 71.6,
                        "priceTry": 3365.24,
                        "sku": "25027",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-25w40-4t-marine-motor-yagi-25027-8358.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 2T Off Road موتورسیکلت Yarı سنتتیک روغن موتور 1 لیتر (3065)",
                        "note": "$19.61 · SKU 3065",
                        "priceUsd": 19.61,
                        "priceTry": 921.5,
                        "sku": "3065",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-2t-off-road-motosiklet-yari-sentetik-motor-yagi-1-litre-3065-2673.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W20 روغن موتور Special Tec Ford Eco 5 لیتر (3841)",
                        "note": "$86.1 · SKU 3841",
                        "priceUsd": 86.1,
                        "priceTry": 4046.9,
                        "sku": "3841",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w20-motor-yagi-special-tec-ford-eco-5-litre-3841-8876.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 DPF روغن موتور Molygen New Generation Advance Full سنتتیک 1 لیتر (21224)",
                        "note": "$17.84 · SKU 21224",
                        "priceUsd": 17.84,
                        "priceTry": 838.61,
                        "sku": "21224",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-dpf-motor-yagi-molygen-new-generation-1-litre-21224-4526.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 DPF روغن موتور Molygen New Generation Advance Full سنتتیک 4 لیتر (21225)",
                        "note": "$68.08 · SKU 21225",
                        "priceUsd": 68.08,
                        "priceTry": 3199.66,
                        "sku": "21225",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-dpf-motor-yagi-molygen-new-generation-4-litre-21225-4979.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 Synthoil High Tech تمام‌سنتتیک روغن موتور",
                        "note": "$83.21 · SKU —",
                        "priceUsd": 83.21,
                        "priceTry": 3910.88,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-synthoil-high-tech-tam-sentetik-motor-yagi-7090.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور DPF'li سنتتیک LONGTIME HIGH TECH 4 لیتر (1144)",
                        "note": "$62.99 · SKU 1144",
                        "priceUsd": 62.99,
                        "priceTry": 2960.34,
                        "sku": "1144",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-dpfli-sentetik-longtime-high-tech-4-litre-1144-9605.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور DPF'li سنتتیک LONGTIME HIGH TECH 5 لیتر (9507)",
                        "note": "$72.44 · SKU 9507",
                        "priceUsd": 72.44,
                        "priceTry": 3404.82,
                        "sku": "9507",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/5w30-motor-yagi-dpfli-sentetik-5-litre-9507-7272.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور DPF'li سنتتیک LONGTIME HIGH TECH1 لیتر (9506)",
                        "note": "$17.78 · SKU 9506",
                        "priceUsd": 17.78,
                        "priceTry": 835.74,
                        "sku": "9506",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-longtime-high-tech-1litre-9506-9661.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Leichtlauf HC7 1 لیتر (8541)",
                        "note": "$17.3 · SKU 8541",
                        "priceUsd": 17.3,
                        "priceTry": 813.09,
                        "sku": "8541",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-1-litre-8541-5778.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Leichtlauf HC7 4 لیتر (8461)",
                        "note": "$61.16 · SKU 8641",
                        "priceUsd": 61.16,
                        "priceTry": 2874.49,
                        "sku": "8641",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-4-litre-8641-9944.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Leichtlauf HC7 5 لیتر (8542)",
                        "note": "$76.04 · SKU 8542",
                        "priceUsd": 76.04,
                        "priceTry": 3573.95,
                        "sku": "8542",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-5litre-8542-5648.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Molygen New Generation Advance Full سنتتیک 1 لیتر (9047)",
                        "note": "$16.65 · SKU 9047",
                        "priceUsd": 16.65,
                        "priceTry": 782.4,
                        "sku": "9047",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-molygen-new-generation-1-litre-9047-6999.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Molygen New Generation Advance Full سنتتیک 4 لیتر (9089)",
                        "note": "$63.29 · SKU 9089",
                        "priceUsd": 63.29,
                        "priceTry": 2974.86,
                        "sku": "9089",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-molygen-new-generation-5-litre-9089-7788.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Molygen New Generation Advance Full سنتتیک 5 لیتر (9952)",
                        "note": "$78.69 · SKU 9952",
                        "priceUsd": 78.69,
                        "priceTry": 3698.56,
                        "sku": "9952",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-molygen-new-generation-5-litre-9952-7961.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Special Tec F 1 لیتر (2325)",
                        "note": "$18.21 · SKU 2325",
                        "priceUsd": 18.21,
                        "priceTry": 855.95,
                        "sku": "2325",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-special-tec-f-1-litre-2325-8970.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Special Tec F 5 لیتر (2326)",
                        "note": "$81.11 · SKU 2326",
                        "priceUsd": 81.11,
                        "priceTry": 3812.17,
                        "sku": "2326",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-special-tec-f-5-litre-2326-3558.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Top Tec 4400 1 لیتر (2319)",
                        "note": "$20.96 · SKU 4400",
                        "priceUsd": 20.96,
                        "priceTry": 985.19,
                        "sku": "4400",
                        "image": "assets/images/liqui-moly/product-4400.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Top Tec 4400 5 لیتر (2322)",
                        "note": "$93.31 · SKU 4400",
                        "priceUsd": 93.31,
                        "priceTry": 4385.4,
                        "sku": "4400",
                        "image": "assets/images/liqui-moly/product-4400.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Top Tec 4410 1 لیتر (21402)",
                        "note": "$20.11 · SKU 4410",
                        "priceUsd": 20.11,
                        "priceTry": 945.17,
                        "sku": "4410",
                        "image": "assets/images/liqui-moly/product-4410.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Top Tec 4410 5 لیتر (21404)",
                        "note": "$91.3 · SKU 4410",
                        "priceUsd": 91.3,
                        "priceTry": 4290.91,
                        "sku": "4410",
                        "image": "assets/images/liqui-moly/product-4410.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور Top Tec 6400 1 لیتر (21584)",
                        "note": "$20.79 · SKU 6400",
                        "priceUsd": 20.79,
                        "priceTry": 977.02,
                        "sku": "6400",
                        "image": "assets/images/liqui-moly/product-6400.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4200 1 لیتر (8972)",
                        "note": "$20.78 · SKU 4200",
                        "priceUsd": 20.78,
                        "priceTry": 976.54,
                        "sku": "4200",
                        "image": "assets/images/liqui-moly/product-4200.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4200 4لیتر (3715)",
                        "note": "$74.58 · SKU 4200",
                        "priceUsd": 74.58,
                        "priceTry": 3505.03,
                        "sku": "4200",
                        "image": "assets/images/liqui-moly/product-4200.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4200 5 لیتر (8973)",
                        "note": "$91.78 · SKU 4200",
                        "priceUsd": 91.78,
                        "priceTry": 4313.74,
                        "sku": "4200",
                        "image": "assets/images/liqui-moly/product-4200.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4300 5 لیتر (2324)",
                        "note": "$79.99 · SKU 4300",
                        "priceUsd": 79.99,
                        "priceTry": 3759.65,
                        "sku": "4300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4300-5-litre-2324-2819.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4500 1 لیتر (2317)",
                        "note": "$20.62 · SKU 4500",
                        "priceUsd": 20.62,
                        "priceTry": 969.18,
                        "sku": "4500",
                        "image": "assets/images/liqui-moly/product-4500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4500 5 لیتر (2318)",
                        "note": "$91.06 · SKU 4500",
                        "priceUsd": 91.06,
                        "priceTry": 4279.77,
                        "sku": "4500",
                        "image": "assets/images/liqui-moly/product-4500.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4600 1 لیتر (2315)",
                        "note": "$18.07 · SKU 4600",
                        "priceUsd": 18.07,
                        "priceTry": 849.11,
                        "sku": "4600",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-1-litre-2315-4550.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4600 4 لیتر (3763)",
                        "note": "$64.03 · SKU 4600",
                        "priceUsd": 64.03,
                        "priceTry": 3009.59,
                        "sku": "4600",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-4-litre-3763-3016.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4600 5 لیتر (2316)",
                        "note": "$79.08 · SKU 4600",
                        "priceUsd": 79.08,
                        "priceTry": 3716.84,
                        "sku": "4600",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-5-litre-2316-7013.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (2592)",
                        "note": "$24.26 · SKU 2592",
                        "priceUsd": 24.26,
                        "priceTry": 1140.0,
                        "sku": "2592",
                        "image": "assets/images/liqui-moly/product-2592.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 4 لیتر (1685)",
                        "note": "$93.99 · SKU 1685",
                        "priceUsd": 93.99,
                        "priceTry": 4417.5,
                        "sku": "1685",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-4t-motosiklet-tam-sentetik-motor-yagi-bmw-gs-4-litre-1685-5564.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 1 لیتر (1855)",
                        "note": "$18.52 · SKU 1855",
                        "priceUsd": 18.52,
                        "priceTry": 870.46,
                        "sku": "1855",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-1-litre-1855-4759.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 1 لیتر (1855)",
                        "note": "$80.62 · SKU 1856",
                        "priceUsd": 80.62,
                        "priceTry": 3789.28,
                        "sku": "1856",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-5-litre-1856-8057.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 4 لیتر (2194)",
                        "note": "$51.15 · SKU 2194",
                        "priceUsd": 51.15,
                        "priceTry": 2403.94,
                        "sku": "2194",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000811_liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-4-litre-2194_550.jpeg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 5 لیتر (1856)",
                        "note": "$60.46 · SKU 1856",
                        "priceUsd": 60.46,
                        "priceTry": 2841.75,
                        "sku": "1856",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000913_liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-5-litre-1856_550.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور Molygen New Generation 1 لیتر (8576)",
                        "note": "$18.09 · SKU 8576",
                        "priceUsd": 18.09,
                        "priceTry": 850.44,
                        "sku": "8576",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-molygen-new-generation-1-litre-8576-6915.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور Molygen New Generation 5 لیتر (8536)",
                        "note": "$81.02 · SKU 8536",
                        "priceUsd": 81.02,
                        "priceTry": 3807.96,
                        "sku": "8536",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-molygen-new-generation-5-litre-8536-2383.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4100 تمام‌سنتتیک 1 لیتر (9510)",
                        "note": "$19.21 · SKU 4100",
                        "priceUsd": 19.21,
                        "priceTry": 902.64,
                        "sku": "4100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-top-tec-4100-tam-sentetik-1-litre-9510-1674.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4100 تمام‌سنتتیک 4 لیتر (2195)",
                        "note": "$69.12 · SKU 4100",
                        "priceUsd": 69.12,
                        "priceTry": 3248.64,
                        "sku": "4100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-top-tec-4100-tam-sentetik-4-litre-2195-4358.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4100 تمام‌سنتتیک 5 لیتر (9511)",
                        "note": "$84.43 · SKU 4100",
                        "priceUsd": 84.43,
                        "priceTry": 3968.37,
                        "sku": "4100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/5w40-motor-yagi-top-tec-4100-tam-sentetik-5-litre-9511-4984.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4110 تمام‌سنتتیک 5 لیتر (21479)",
                        "note": "$88.92 · SKU 4110",
                        "priceUsd": 88.92,
                        "priceTry": 4179.08,
                        "sku": "4110",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-top-tec-4110-tam-sentetik-5-litre-21479-8108.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور سنتتیک LEICHTLAUF HC7 1 لیتر (1346)",
                        "note": "$17.13 · SKU 1346",
                        "priceUsd": 17.13,
                        "priceTry": 805.25,
                        "sku": "1346",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-sentetik-leichtlauf-hc7-1-litre-1346-2-5785.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W40 روغن موتور سنتتیک LEICHTLAUF HC7 4 لیتر (1382)",
                        "note": "$62.65 · SKU 1382",
                        "priceUsd": 62.65,
                        "priceTry": 2944.55,
                        "sku": "1382",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/5w40-motor-yagi-sentetik-leichtlauf-hc7-4-litre-1382-4194.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 5W50 تمام‌سنتتیک روغن موتور Molygen New Generation 1 لیتر (2542)",
                        "note": "$19.03 · SKU 2542",
                        "priceUsd": 19.03,
                        "priceTry": 894.47,
                        "sku": "2542",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w50-motor-yagi-molygen-new-generation-1-litre-2542-1257.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY 5W50 تمام‌سنتتیک روغن موتور Molygen New Generation 4 لیتر (2543)",
                        "note": "$69.51 · SKU 2543",
                        "priceUsd": 69.51,
                        "priceTry": 3267.03,
                        "sku": "2543",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w50-motor-yagi-molygen-new-generation-4-litre-2543-3754.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY 80W90 موتورسیکلت روغن گیربکس 1 لیتر (3821)",
                        "note": "$19.0 · SKU 3821",
                        "priceUsd": 19.0,
                        "priceTry": 893.0,
                        "sku": "3821",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-80w90-motosiklet-sanziman-yagi-1-litre-3821-3059.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Cera Tec 300 ml (7181)",
                        "note": "$39.87 · SKU 300",
                        "priceUsd": 39.87,
                        "priceTry": 1874.05,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/cera-tec-300-ml-7181-1896.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Engine Flush Plus- Motor İçi پاک‌کننده 300 ml (2657)",
                        "note": "$11.95 · SKU 300",
                        "priceUsd": 11.95,
                        "priceTry": 561.76,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/engine-flush-motor-ici-temizleyici-300-ml-2657-1371.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY GL4+ Dişli Yağı SAE 75W90 (4434)",
                        "note": "$28.01 · SKU 4434",
                        "priceUsd": 28.01,
                        "priceTry": 1316.59,
                        "sku": "4434",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/gl4-disli-yagi-sae-75w90-4434-7711428122-dc4-7390.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Hypoid Dişli Yağı (GL5) SAE 85W90 LS (1410)",
                        "note": "$18.87 · SKU 1410",
                        "priceUsd": 18.87,
                        "priceTry": 886.82,
                        "sku": "1410",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hypoid-disli-yagi-gl5-sae-85w-90-ls-1410-7720.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Leichtlauf Performance 5W30 5 لیتر (21364)",
                        "note": "$71.23 · SKU 21364",
                        "priceUsd": 71.23,
                        "priceTry": 3347.93,
                        "sku": "21364",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-leichtlauf-performance-5w30-5-litre-21364-8053.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Lifter- Supap İteceği افزودنیsı 300 ml (1009)",
                        "note": "$11.94 · SKU 1009",
                        "priceUsd": 11.94,
                        "priceTry": 561.03,
                        "sku": "1009",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/lifter-supap-itecegikatkisi-1009-1455.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine 2T روغن موتور 1l (25019)",
                        "note": "$20.21 · SKU 25019",
                        "priceUsd": 20.21,
                        "priceTry": 949.84,
                        "sku": "25019",
                        "image": "assets/images/liqui-moly/product-25019.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine 2T روغن موتور 5l (25020)",
                        "note": "$90.18 · SKU 25020",
                        "priceUsd": 90.18,
                        "priceTry": 4238.25,
                        "sku": "25020",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-2t-motor-yagi-5-l-25020-2586.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Marine 4T Motor Oil 10W-40 1l (25012)",
                        "note": "$15.98 · SKU 25012",
                        "priceUsd": 15.98,
                        "priceTry": 750.89,
                        "sku": "25012",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-yagi-10w-40-1-l-25012-6123.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine 4T Motor Oil 10W-40 5l (25013)",
                        "note": "$69.12 · SKU 25013",
                        "priceUsd": 69.12,
                        "priceTry": 3248.82,
                        "sku": "25013",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-yagi-10w-40-5-l-25013-7642.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Marine 4T Motor Oil 15W-40 1l (25015)",
                        "note": "$14.39 · SKU 25015",
                        "priceUsd": 14.39,
                        "priceTry": 676.52,
                        "sku": "25015",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-yagi-15w-40-1-l-25015-3432.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine 4T Motor Oil 15W-40 5l (25016)",
                        "note": "$61.27 · SKU 25016",
                        "priceUsd": 61.27,
                        "priceTry": 2879.62,
                        "sku": "25016",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-oil-15w-40-5-l-25016-7239.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 75W-90 1l (25071)",
                        "note": "$37.91 · SKU 25071",
                        "priceUsd": 37.91,
                        "priceTry": 1781.81,
                        "sku": "25071",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-tam-sentetik-disli-yagi-gl4gl5-75w-90-1l-25071-5739.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 75W90 250ml (25036)",
                        "note": "$17.77 · SKU 25036",
                        "priceUsd": 17.77,
                        "priceTry": 835.14,
                        "sku": "25036",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-tam-sentetik-disli-yagi-gl4gl5-75w90-25036-9886.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 80W-90 1L (25069)",
                        "note": "$19.21 · SKU 25069",
                        "priceUsd": 19.21,
                        "priceTry": 902.82,
                        "sku": "25069",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-disli-yagi-gl4gl5-80w90-25069-6725.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 80W-90 250ml (25030)",
                        "note": "$12.44 · SKU 25031",
                        "priceUsd": 12.44,
                        "priceTry": 584.46,
                        "sku": "25031",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-disli-yagi-gl4gl5-80w-90-250ml-25031-5068.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Molygen Motor Protect سنتتیک Yağ افزودنیsı 500 ml (1015)",
                        "note": "$45.43 · SKU 500",
                        "priceUsd": 45.43,
                        "priceTry": 2135.18,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Protect سنتتیک Yağ افزودنیsı 500 ml (1018)",
                        "note": "$36.68 · SKU 500",
                        "priceUsd": 36.68,
                        "priceTry": 1724.14,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Yağ Bakımı افزودنیsı 300 ml (2180)",
                        "note": "$14.59 · SKU 300",
                        "priceUsd": 14.59,
                        "priceTry": 685.52,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/motor-yag-bakimi-katkisi-300-ml-2180-6102.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Yağ Viskozite Koruyucu افزودنی 1 لیتر (5196)",
                        "note": "$30.12 · SKU 5196",
                        "priceUsd": 30.12,
                        "priceTry": 1415.59,
                        "sku": "5196",
                        "image": "assets/images/liqui-moly/product-5196.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Oil Additiv MoS2'li Yağ افزودنیsı 200 ml (1012)",
                        "note": "$14.51 · SKU 200",
                        "priceUsd": 14.51,
                        "priceTry": 681.76,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/oil-additiv-mos2li-yag-katkisi-200-ml-1012-3489.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1200 (3681)",
                        "note": "$20.96 · SKU 1200",
                        "priceUsd": 20.96,
                        "priceTry": 985.19,
                        "sku": "1200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/otomatik-sanziman-yagi-top-tec-atf-1200-3681-8089.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1200 G (9703)",
                        "note": "$21.05 · SKU 1200",
                        "priceUsd": 21.05,
                        "priceTry": 989.19,
                        "sku": "1200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1200-g-9703-8794.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1400 (3662)",
                        "note": "$22.67 · SKU 1400",
                        "priceUsd": 22.67,
                        "priceTry": 1065.64,
                        "sku": "1400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/top-tec-atf-1400-3662-7298.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1600 (3659)",
                        "note": "$27.86 · SKU 1600",
                        "priceUsd": 27.86,
                        "priceTry": 1309.46,
                        "sku": "1600",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1600-3659-5745.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1800 (3687)",
                        "note": "$19.61 · SKU 1800",
                        "priceUsd": 19.61,
                        "priceTry": 921.45,
                        "sku": "1800",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/otomatik-sanziman-yagi-top-tec-atf-1800-3687-3164.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1800 R (20625)",
                        "note": "$19.12 · SKU 20625",
                        "priceUsd": 19.12,
                        "priceTry": 898.83,
                        "sku": "20625",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1800r-20625-9983.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1850 (21738)",
                        "note": "$20.06 · SKU 1850",
                        "priceUsd": 20.06,
                        "priceTry": 942.96,
                        "sku": "1850",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1850-21738-2562.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Special Tec AA 5W-30 لیتر (7530)",
                        "note": "$78.13 · SKU 7530",
                        "priceUsd": 78.13,
                        "priceTry": 3671.88,
                        "sku": "7530",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-special-tec-aa-5w-30-5-litre-7530-6909.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Special Tec DX1 5W30 روغن موتور 4 لیتر (20968)",
                        "note": "$63.49 · SKU 20968",
                        "priceUsd": 63.49,
                        "priceTry": 2984.2,
                        "sku": "20968",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/special-tec-dx1-5w30-motor-yagi-4-litre-20968-6238.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Special Tec DX1 5W30 روغن موتور 5لیتر (20969)",
                        "note": "$78.35 · SKU 20969",
                        "priceUsd": 78.35,
                        "priceTry": 3682.55,
                        "sku": "20969",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-special-tec-dx1-5w30-motor-yagi-5-litre-20969-5360.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY TOP TEC MTF 5100 75W (20842) روغن گیربکس",
                        "note": "$23.81 · SKU 5100",
                        "priceUsd": 23.81,
                        "priceTry": 1118.92,
                        "sku": "5100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-5100-75w-20842-sanziman-yagi-20842-6431.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY TOP TEC MTF 5200 75W-80 (20845) روغن گیربکس",
                        "note": "$19.7 · SKU 5200",
                        "priceUsd": 19.7,
                        "priceTry": 925.69,
                        "sku": "5200",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000695_liqui-moly-top-tec-mtf-5200-75w-80-21688-sanziman-yagi_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY TOP TEC MTF 5300 70W-75 (21359) روغن گیربکس",
                        "note": "$26.23 · SKU 5300",
                        "priceUsd": 26.23,
                        "priceTry": 1232.61,
                        "sku": "5300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-mtf-5300-70w-75-21359-sanziman-yagi-7252.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Top Tec 6320 5W-30 4 لیتر 21366",
                        "note": "$69.45 · SKU 21366",
                        "priceUsd": 69.45,
                        "priceTry": 3264.19,
                        "sku": "21366",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-6320-5w30-motor-yagi-4-litre-23166-6722.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Top Tec 6320 5W30 روغن موتور 5 لیتر (23167)",
                        "note": "$86.54 · SKU 6320",
                        "priceUsd": 86.54,
                        "priceTry": 4067.58,
                        "sku": "6320",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-6320-5w30-motor-yagi-5-litre-23167-1561.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Top Tec ATF 1100 1 لیتر (3651)",
                        "note": "$19.48 · SKU 1100",
                        "priceUsd": 19.48,
                        "priceTry": 915.65,
                        "sku": "1100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-atf-1100-3651-1305.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Top Tec ATF 1900 1 لیتر (3648)",
                        "note": "$20.48 · SKU 1900",
                        "priceUsd": 20.48,
                        "priceTry": 962.34,
                        "sku": "1900",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-atf-1900-1-litre-3648-8258.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Yağ Dumanı پیشگیرانه 300 ml (2122)",
                        "note": "$13.52 · SKU 300",
                        "priceUsd": 13.52,
                        "priceTry": 635.48,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/yag-siyah-duman-onleyici-300-ml-2122-8238.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY تمام‌سنتتیک Hypoid Dişli Yağı (GL5) LS SAE 75W140 (4421)",
                        "note": "$50.82 · SKU 4421",
                        "priceUsd": 50.82,
                        "priceTry": 2388.64,
                        "sku": "4421",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-tam-sentetik-hypoid-disli-yagi-gl5-ls-sae-75w140-4421-8483.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY روغن موتور Sızıntı پیشگیرانه 300 Ml. (1005)",
                        "note": "$15.16 · SKU 300",
                        "priceUsd": 15.16,
                        "priceTry": 712.57,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/motor-yagi-sizinti-onleyici-300-ml-1005-4909.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY روغن گیربکس (GL5) 75W80 (3658)",
                        "note": "$19.95 · SKU 3658",
                        "priceUsd": 19.95,
                        "priceTry": 937.84,
                        "sku": "3658",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sanziman-yagi-gl5-75w80-3658-3756.jpg",
                        "featured": false
                  },
                  {
                        "name": "Liqui Moly 4t 10w 40 Mb Scooter سنتتیک روغن موتور 1l 20832",
                        "note": "$12.23 · SKU 20832",
                        "priceUsd": 12.23,
                        "priceTry": 574.75,
                        "sku": "20832",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-4t-10w-40-mb-scooter-sentetik-motor-yagi-1l-20832--7799.png",
                        "featured": false
                  },
                  {
                        "name": "Liqui Moly 4t 10w 40 Motorbike Optimal مینرال روغن موتور 1 لیتر 21862",
                        "note": "$12.23 · SKU 21862",
                        "priceUsd": 12.23,
                        "priceTry": 574.75,
                        "sku": "21862",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-4t-10w-40-motorbike-optimal-mineral-motor-yagi-1-lt-21862--6618.png",
                        "featured": false
                  },
                  {
                        "name": "Liqui Moly 4t 10w 40 Motorbike Optimal مینرال روغن موتور 4 لیتر 21863",
                        "note": "$44.16 · SKU 21863",
                        "priceUsd": 44.16,
                        "priceTry": 2075.75,
                        "sku": "21863",
                        "image": "assets/images/liqui-moly/product-21863.webp",
                        "featured": false
                  },
                  {
                        "name": "Liqui Moly Leichtlauf High Tech 5w 40 5 لیتر 2328",
                        "note": "$79.7 · SKU 2328",
                        "priceUsd": 79.7,
                        "priceTry": 3746.1,
                        "sku": "2328",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-leichtlauf-high-tech-5w-40-5-lt-2328-4934.png",
                        "featured": true
                  }
            ]
      },
      {
            "id": "fuel-petrol",
            "title": "افزودنی سوخت بنزین",
            "titleTr": "Benzin Katkıları",
            "icon": "gas-station",
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hibrit-yakit-katkisi-hybrit-additive-250-ml-1001-7586.jpg",
            "desc": "19 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY Hibrit افزودنی سوخت (Hybrit Additive) 250 ml (1001)",
                        "note": "$13.62 · SKU 250",
                        "priceUsd": 13.62,
                        "priceTry": 640.26,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hibrit-yakit-katkisi-hybrit-additive-250-ml-1001-7586.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kurşun Arttırıcı افزودنی 250 ml (1010)",
                        "note": "$13.9 · SKU 250",
                        "priceUsd": 13.9,
                        "priceTry": 653.12,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oktan-yukselticii-250-ml-1010-2416.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Oktan Arttırıcı - اکتان پلاس (8351)",
                        "note": "$11.71 · SKU 8351",
                        "priceUsd": 11.71,
                        "priceTry": 550.47,
                        "sku": "8351",
                        "image": "assets/images/liqui-moly/product-8351.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Pro-Line دیزل انژکتور ve Yanma Odası پاک‌کننده افزودنی سوخت 1لیتر (5176)",
                        "note": "$35.61 · SKU —",
                        "priceUsd": 35.61,
                        "priceTry": 1673.6,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-dizel-enjektor-ve-yanma-odasi-temizleyici-yakit-katkisi-1litre-2902.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro-Line/ LSPI پیشگیرانه افزودنی (بنزین) انژکتور پاک‌کننده / آلایندگی بهبوددهنده- 120 ml (21281)",
                        "note": "$26.33 · SKU 120",
                        "priceUsd": 26.33,
                        "priceTry": 1237.36,
                        "sku": "120",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-enjektor-temizleyici-benzin-120-ml-21281-2991.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro-line بنزین سیستمi پاک‌کنندهsi 500 ml (5153)",
                        "note": "$18.36 · SKU 5153",
                        "priceUsd": 18.36,
                        "priceTry": 862.93,
                        "sku": "5153",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-benzin-sistemi-temizleyicisi-5153-1777.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Speed Tec بنزین افزودنیsı 250 ml (3720)",
                        "note": "$13.8 · SKU 250",
                        "priceUsd": 13.8,
                        "priceTry": 648.7,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/speed-tec-benzin-katkisi-250-ml-3720-1186.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Speed Tec دیزل افزودنی سوخت 250 ml (3722)",
                        "note": "$14.47 · SKU 250",
                        "priceUsd": 14.47,
                        "priceTry": 680.16,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/speed-tec-dizel-yakit-katkisi-250-ml-3722-1644.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Supap Koruyucu LPG'li Araçlar 1 l. (4012)",
                        "note": "$32.61 · SKU 4012",
                        "priceUsd": 32.61,
                        "priceTry": 1532.44,
                        "sku": "4012",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/subap-koruyucu-lpgli-araclar-1-l-4012-2791.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY VALVE CLEAN 150 ml (1014)",
                        "note": "$9.61 · SKU 150",
                        "priceUsd": 9.61,
                        "priceTry": 451.52,
                        "sku": "150",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-valve-clean-150-ml-1014-2252.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Yeni بنزین سیستم پاک‌کننده افزودنی سوخت 300 ml (21492)",
                        "note": "$16.29 · SKU 300",
                        "priceUsd": 16.29,
                        "priceTry": 765.61,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-yeni-benzin-sistem-temizleyici-yakit-katkisi-300-ml-21492-2075.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Özel Oktan Arttırıcı + / Octane Booster (21280)",
                        "note": "$15.05 · SKU 21280",
                        "priceUsd": 15.05,
                        "priceTry": 707.25,
                        "sku": "21280",
                        "image": "assets/images/liqui-moly/product-21280.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY آلایندگی Ayarlayıcı (Katalitik سیستم پاک‌کننده) 300 ml (7110)",
                        "note": "$11.79 · SKU 300",
                        "priceUsd": 11.79,
                        "priceTry": 553.99,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-emisyon-ayarlayici-katalitik-sistem-temizleyici-300-ml-7110-2468.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY آلایندگی Ayarlayıcı (Katalitik سیستم پاک‌کننده) 300 ml (8931)",
                        "note": "$11.24 · SKU 300",
                        "priceUsd": 11.24,
                        "priceTry": 528.34,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/emisyon-ayarlayici-katalitik-sistem-temizleyici-300-ml-8931-3498.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY انژکتور - Buji گریس 20 g (3381)",
                        "note": "$6.15 · SKU 3381",
                        "priceUsd": 6.15,
                        "priceTry": 288.92,
                        "sku": "3381",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/enjektor-buji-gresi-20-g-3381-2658.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY انژکتور پاک‌کننده (بنزین) 300 ml (5110)",
                        "note": "$12.6 · SKU 300",
                        "priceUsd": 12.6,
                        "priceTry": 592.17,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/enjektor-temizleyici-benzin-300-ml-5110-2070.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY انژکتور- Buji Sökme اسپری 400 ml (3379)",
                        "note": "$14.41 · SKU 400",
                        "priceUsd": 14.41,
                        "priceTry": 677.04,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/enjektor-kizdirma-buji-sokucu-spreyi-400-ml-3379-5660.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل انژکتور ve Yanma Odası پاک‌کننده 500 ml (5170)",
                        "note": "$16.41 · SKU 500",
                        "priceUsd": 16.41,
                        "priceTry": 771.35,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل انژکتور ve Yanma Odası پاک‌کننده افزودنی سوخت 250 ml (5120)",
                        "note": "$12.74 · SKU 250",
                        "priceUsd": 12.74,
                        "priceTry": 598.77,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dizel-enjektor-ve-yanma-odasi-temizleyici-250-ml-5120-3521.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "fuel-diesel",
            "title": "افزودنی سوخت دیزل",
            "titleTr": "Dizel Katkıları",
            "icon": "gas-station",
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000905_dpfgpf-temizleyici-400ml-21942_550.jpeg",
            "desc": "24 محصول",
            "series": [
                  {
                        "name": "DPF/GPF پاک‌کننده 400ml (21942)",
                        "note": "$17.55 · SKU 21942",
                        "priceUsd": 17.55,
                        "priceTry": 824.77,
                        "sku": "21942",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000905_dpfgpf-temizleyici-400ml-21942_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Adblue بلورشدگی پیشگیرانه کنسانتره افزودنی 100 ml (21801)",
                        "note": "$10.61 · SKU 100",
                        "priceUsd": 10.61,
                        "priceTry": 498.6,
                        "sku": "100",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000887_liqui-moly-adblue-kristallesme-onleyici-konsantre-katki-100-ml-21801_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Adblue بلورشدگی پیشگیرانه کنسانتره افزودنی 250 ml (21799)",
                        "note": "$20.3 · SKU 250",
                        "priceUsd": 20.3,
                        "priceTry": 954.01,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000886_liqui-moly-adblue-kristallesme-onleyici-konsantre-katki-250-ml-21799_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Antibakteriyel دیزل افزودنی سوخت (2368)",
                        "note": "$52.25 · SKU 2368",
                        "priceUsd": 52.25,
                        "priceTry": 2455.76,
                        "sku": "2368",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-antibakteriyel-dizel-yakit-katkisi-2368-3518.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY DPF پاک‌کننده 400 ml (21942)",
                        "note": "$26.25 · SKU 21942",
                        "priceUsd": 26.25,
                        "priceTry": 1233.56,
                        "sku": "21942",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dpf-temizleyici-400ml-21942-9187.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kamyon/Kamyonet Serisi دیزل سیستم ve Performans Koruyucu 500 ml (20997)",
                        "note": "$20.82 · SKU 500",
                        "priceUsd": 20.82,
                        "priceTry": 978.59,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine Diesel Protect 500 ML (25000)",
                        "note": "$39.03 · SKU 500",
                        "priceUsd": 39.03,
                        "priceTry": 1834.63,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine Super Diesel Additive - دیزل افزودنی سوخت 1L (25007)",
                        "note": "$38.24 · SKU 25007",
                        "priceUsd": 38.24,
                        "priceTry": 1797.07,
                        "sku": "25007",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-super-diesel-additive-dizel-yakit-katkisi-1l-25007-4670.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marine Super Diesel Additive - دیزل افزودنی سوخت 500 ML (25005)",
                        "note": "$24.59 · SKU 500",
                        "priceUsd": 24.59,
                        "priceTry": 1155.66,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro-Line دیزل Partikül Filtre (DPF) Koruması 1 لیتر (5123)",
                        "note": "$19.64 · SKU 5123",
                        "priceUsd": 19.64,
                        "priceTry": 923.25,
                        "sku": "5123",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000486_liqui-moly-pro-line-dizel-partikul-filtre-dpf-korumasi-1-litre-5123_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro-Line دیزل Partikül Filtre Koruması 1 لیتر (5123)",
                        "note": "$26.42 · SKU 5123",
                        "priceUsd": 26.42,
                        "priceTry": 1241.79,
                        "sku": "5123",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-dizel-partikul-filtre-korumasi-1L-5123-4205.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Yeni دیزل سیستم پاک‌کننده افزودنی سوخت 300 ml (21491)",
                        "note": "$18.44 · SKU 300",
                        "priceUsd": 18.44,
                        "priceTry": 866.51,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-yeni-dizel-sistem-temizleyici-yakit-katkisi-300-ml-21491-9110.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل Duman پیشگیرانه 150 ml (5180)",
                        "note": "$9.67 · SKU 150",
                        "priceUsd": 9.67,
                        "priceTry": 454.63,
                        "sku": "150",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-duman-onleyici-yakit-katkisi-150-ml-5180-9678.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل Emme Manifold پاک‌کننده 400 ml (5168)",
                        "note": "$16.92 · SKU 400",
                        "priceUsd": 16.92,
                        "priceTry": 795.18,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-emme-manifold-temizleyici-400-ml-5168-4000.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل Partikül Filtre (DPF) Durulayıcı 500 ml (5171)",
                        "note": "$32.67 · SKU 500",
                        "priceUsd": 32.67,
                        "priceTry": 1535.71,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل Partikül Filtre (DPF) پاک‌کننده 1 لیتر (5169)",
                        "note": "$57.67 · SKU 5169",
                        "priceUsd": 57.67,
                        "priceTry": 2710.35,
                        "sku": "5169",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-partikul-filtre-dpf-temizleyici-1-lt-5169-8095.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY دیزل Partikül Filtre DPF Koruyucu 250 ml (5148)",
                        "note": "$11.5 · SKU 250",
                        "priceUsd": 11.5,
                        "priceTry": 540.39,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-partikul-filtre-dpf-koruyucu-250-ml-5148-4054.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل Yakıt Donma پیشگیرانه 1 لیتر (5131)",
                        "note": "$39.07 · SKU 5131",
                        "priceUsd": 39.07,
                        "priceTry": 1836.31,
                        "sku": "5131",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dizel-yakit-donma-onleyici-1-litre-5131-3483.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل سیستم پاک‌کننده Pro-Line Seri 500 ml (5156)",
                        "note": "$24.79 · SKU 500",
                        "priceUsd": 24.79,
                        "priceTry": 1165.17,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY دیزل سیستم پاک‌کننده افزودنی سوخت 250 ml (5139)",
                        "note": "$12.5 · SKU 250",
                        "priceUsd": 12.5,
                        "priceTry": 587.29,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-sistem-temizleyici-yakit-katkisi-250-ml-5139-4964.jpg",
                        "featured": false
                  },
                  {
                        "name": "adblue بلورشدگی پیشگیرانه کنسانتره افزودنی -100 ml",
                        "note": "$15.44 · SKU 21801",
                        "priceUsd": 15.44,
                        "priceTry": 725.63,
                        "sku": "21801",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-adblue-kristallesme-onleyici-katki-21801-7424.jpg",
                        "featured": false
                  },
                  {
                        "name": "adblue بلورشدگی پیشگیرانه کنسانتره افزودنی -250 ml",
                        "note": "$29.49 · SKU 21799",
                        "priceUsd": 29.49,
                        "priceTry": 1386.23,
                        "sku": "21799",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-adblue-kristallesme-onleyici-katki-21799-6571.jpg",
                        "featured": false
                  },
                  {
                        "name": "marine دیزل koruyucu",
                        "note": "$39.03 · SKU 25001",
                        "priceUsd": 39.03,
                        "priceTry": 1834.63,
                        "sku": "25001",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-dizel-koruyucu-500ml-25001-2633.png",
                        "featured": false
                  },
                  {
                        "name": "marine دیزل koruyucu",
                        "note": "$41.27 · SKU 25002",
                        "priceUsd": 41.27,
                        "priceTry": 1939.59,
                        "sku": "25002",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-dizel-koruyucu-1l-25002-4593.jpeg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "oil-additive",
            "title": "افزودنی روغن موتور",
            "titleTr": "Yağ Katkıları",
            "icon": "flask",
            "image": "https://www.liquimolyturkey.com/admin/resimler/atf-otomatik-sanziman-katkisi-250-ml-5135-1002.jpg",
            "desc": "8 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY ATF Otomatik Şanzıman افزودنیsı 250 ml (5135)",
                        "note": "$25.17 · SKU 250",
                        "priceUsd": 25.17,
                        "priceTry": 1182.84,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/atf-otomatik-sanziman-katkisi-250-ml-5135-1002.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Hidrolik سیستم افزودنیsı 1 لیتر (5116)",
                        "note": "$22.4 · SKU 5116",
                        "priceUsd": 22.4,
                        "priceTry": 1052.68,
                        "sku": "5116",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000457_liqui-moly-hidrolik-sistem-katkisi-1-litre-5116_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY MoS2 &#39;li Şanzıman-Dişli Yağı افزودنیsı 50 gr (2510)",
                        "note": "$18.84 · SKU 2510",
                        "priceUsd": 18.84,
                        "priceTry": 885.37,
                        "sku": "2510",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-mos2-li-sanziman-disli-yagi-katkisi-50-gr-2510-4639.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY MoS2 'li Şanzıman ve Dişli Yağı افزودنیsı 50 gr (2510)",
                        "note": "$14.1 · SKU 2510",
                        "priceUsd": 14.1,
                        "priceTry": 662.69,
                        "sku": "2510",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000461_liqui-moly-mos2-li-sanziman-ve-disli-yagi-katkisi-50-gr-2510_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY MoS2'li Motor Aşınma پیشگیرانه Yağ افزودنیsı 1 لیتر (5197)",
                        "note": "$53.19 · SKU 5197",
                        "priceUsd": 53.19,
                        "priceTry": 2499.88,
                        "sku": "5197",
                        "image": "assets/images/liqui-moly/product-5197.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Motor Clean 500 ml (1019)",
                        "note": "$19.85 · SKU 500",
                        "priceUsd": 19.85,
                        "priceTry": 932.78,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro-line Turbo Şarj افزودنیsı 20 gr (20766)",
                        "note": "$13.26 · SKU 20766",
                        "priceUsd": 13.26,
                        "priceTry": 623.23,
                        "sku": "20766",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-turbo-sarj-katkisi-20-gr-20766-8474.jpg",
                        "featured": false
                  },
                  {
                        "name": "Liqui Moly Mos2li روان‌کننده Ve ضدزنگ 300 Ml 1614",
                        "note": "$7.38 · SKU 1614",
                        "priceUsd": 7.38,
                        "priceTry": 346.63,
                        "sku": "1614",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-mos2li-kaydirici-ve-pas-sokucu-300-ml-1614-3547.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "gear-hydraulic",
            "title": "گیربکس و هیدرولیک",
            "titleTr": "Şanzıman / Hidrolik",
            "icon": "cog",
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-atf-iii-direksiyon-hidroligi-1043-8782.jpg",
            "desc": "22 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY ATF III Direksiyon Hidroliği / Otomatik روغن گیربکس(1043)",
                        "note": "$19.48 · SKU 1043",
                        "priceUsd": 19.48,
                        "priceTry": 915.65,
                        "sku": "1043",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-atf-iii-direksiyon-hidroligi-1043-8782.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY DOT 4 هیدرولیک ترمز 5 لیتر (21158)",
                        "note": "$84.28 · SKU 21158",
                        "priceUsd": 84.28,
                        "priceTry": 3961.02,
                        "sku": "21158",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dot-4-fren-hidroligi-5-litre-21158-3545.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY DSG روغن گیربکس Dual Clutch Transmission Oil 8100 (3640)",
                        "note": "$21.34 · SKU 8100",
                        "priceUsd": 21.34,
                        "priceTry": 1002.9,
                        "sku": "8100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/dual-clutch-transmission-oil-8100-3640-6697.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Direksiyon Hidrolik سیستمi Sızıntı پیشگیرانه 35 ml (1099)",
                        "note": "$7.44 · SKU 1099",
                        "priceUsd": 7.44,
                        "priceTry": 349.61,
                        "sku": "1099",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-direksiyon-hidrolik-sistemi-sizinti-onleyici-50-ml-1099-9636.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Direksiyon ve Merkezi سیستم Hidrolik Yağı (20468)",
                        "note": "$21.27 · SKU —",
                        "priceUsd": 21.27,
                        "priceTry": 999.58,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/direksiyon-ve-merkezi-sistem-hidrolik-yagi-9723.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Direksiyon ve Merkezi سیستم Hidrolik Yağı 2500 (3667)",
                        "note": "$21.51 · SKU —",
                        "priceUsd": 21.51,
                        "priceTry": 1011.03,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-direksiyon-ve-merkezi-sistem-hidrolik-yagi--5370.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren /Teker Bakım Seti",
                        "note": "$5.02 · SKU —",
                        "priceUsd": 5.02,
                        "priceTry": 235.9,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000838_liqui-moly-fren-teker-bakim-seti_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren /Teker Bakım Seti",
                        "note": "$5.64 · SKU 21126",
                        "priceUsd": 5.64,
                        "priceTry": 265.0,
                        "sku": "21126",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-bakim-seti-21126-6804.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren Balatası ve Hızlı Temizlik اسپری 500 ml (3368)",
                        "note": "$5.91 · SKU 500",
                        "priceUsd": 5.91,
                        "priceTry": 277.89,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren Gıcırtı Sesi پیشگیرانه 10 g (21121)",
                        "note": "$2.26 · SKU 21121",
                        "priceUsd": 2.26,
                        "priceTry": 106.45,
                        "sku": "21121",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-gicirti-sesi-onleyici-10-g-21121-7253.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren Gıcırtı Sesi پیشگیرانه اسپری (3079)",
                        "note": "$13.81 · SKU 3079",
                        "priceUsd": 13.81,
                        "priceTry": 649.19,
                        "sku": "3079",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-gicirti-sesi-onleyici-sprey-3079-2868.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren Pimleri için سنتتیک روان‌کننده 5 g (21119)",
                        "note": "$2.34 · SKU 21119",
                        "priceUsd": 2.34,
                        "priceTry": 110.0,
                        "sku": "21119",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-pimleri-yaglayici-5-g-21119-2295.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Fren Ses پیشگیرانه - Fırçalı 200 ml (3074)",
                        "note": "$31.8 · SKU 3074",
                        "priceUsd": 31.8,
                        "priceTry": 1494.53,
                        "sku": "3074",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/fren-sesi-onleyici-3074-4106.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Gear Protect Şanzıman Koruyucu 80 Ml (1007)",
                        "note": "$48.22 · SKU 1007",
                        "priceUsd": 48.22,
                        "priceTry": 2266.23,
                        "sku": "1007",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/motor-protect-sanziman-koruyucu-80-ml-1007-6497.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Haldex Yağı (21419)",
                        "note": "$29.65 · SKU 21419",
                        "priceUsd": 29.65,
                        "priceTry": 1393.6,
                        "sku": "21419",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-haldex-yagi-21419-2-2-6627.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Jant Göbeği Sabitleme Macunu 10 g (21120)",
                        "note": "$2.34 · SKU 21120",
                        "priceUsd": 2.34,
                        "priceTry": 110.0,
                        "sku": "21120",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-jant-gobegi-sabitleme-macunu-10-g-21120-6375.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Otomatik Şanzıman پاک‌کننده 300 ml (2512)",
                        "note": "$15.53 · SKU 300",
                        "priceUsd": 15.53,
                        "priceTry": 730.05,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/otomatik-sanziman-temizleyici-300-ml-2512-5541.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Yarış Tipi هیدرولیک ترمز 500 ml (21172)",
                        "note": "$29.51 · SKU 500",
                        "priceUsd": 29.51,
                        "priceTry": 1386.76,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Şanzıman Yağ Sızıntı پیشگیرانه 50 ml (1042)",
                        "note": "$10.52 · SKU 1042",
                        "priceUsd": 10.52,
                        "priceTry": 494.35,
                        "sku": "1042",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/sanziman-yag-sizinti-onleyici-50-ml-1042-6614.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY هیدرولیک ترمز DOT 4 500 ml (3093)",
                        "note": "$11.13 · SKU 500",
                        "priceUsd": 11.13,
                        "priceTry": 523.14,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY هیدرولیک ترمز DOT 5.1 250 ml (3092)",
                        "note": "$8.93 · SKU 3092",
                        "priceUsd": 8.93,
                        "priceTry": 419.89,
                        "sku": "3092",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-hidroligi-dot-51-3092-9286.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY هیدرولیک ترمز SL6 DOT 4 500 ml (21167)",
                        "note": "$12.07 · SKU 500",
                        "priceUsd": 12.07,
                        "priceTry": 567.44,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "coolant",
            "title": "ضدیخ و رادیاتور",
            "titleTr": "Antifriz",
            "icon": "snowflake",
            "image": "assets/images/liqui-moly/product-500.jpg",
            "desc": "14 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY Cam Buz ve Buğu Çözücü اسپری 500 ml (6902)",
                        "note": "$8.16 · SKU 500",
                        "priceUsd": 8.16,
                        "priceTry": 383.49,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro Line Radyatör پاک‌کننده 1 لیتر (5189)",
                        "note": "$16.95 · SKU 5189",
                        "priceUsd": 16.95,
                        "priceTry": 796.63,
                        "sku": "5189",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-temizleyici-1-litre-5189-5770.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Pro-Line Radyatör Sızıntı پیشگیرانه 250 Ml. (5178)",
                        "note": "$11.28 · SKU 250",
                        "priceUsd": 11.28,
                        "priceTry": 529.93,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-radyator-sizinti-onleyici-250-ml-5178-1650.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Radyatör Sızıntı پیشگیرانه 150 Ml. (3330)",
                        "note": "$6.61 · SKU 150",
                        "priceUsd": 6.61,
                        "priceTry": 310.9,
                        "sku": "150",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/radyator-sizinti-onleyici-150-ml-3330-3435.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Radyatör ve Soğutma سیستمi پاک‌کننده 300 Ml. (3320)",
                        "note": "$8.9 · SKU 300",
                        "priceUsd": 8.9,
                        "priceTry": 418.07,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/radyator-temizleyici-300-ml-3320-6638.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور G12+ کنسانتره (KFS12+) Kırmızı 1 l (21145)",
                        "note": "$10.93 · SKU 21145",
                        "priceUsd": 10.93,
                        "priceTry": 513.71,
                        "sku": "21145",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-g12-kfs12-kirmizi-5-l-21145-6573.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور KFS 11 Mavi 1 l (21149)",
                        "note": "$10.71 · SKU 21149",
                        "priceUsd": 10.71,
                        "priceTry": 503.43,
                        "sku": "21149",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs-11-mavi-1-l-21149-5178.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور KFS 13 1 لیتر (21139)",
                        "note": "$10.97 · SKU 21139",
                        "priceUsd": 10.97,
                        "priceTry": 515.47,
                        "sku": "21139",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs-13-g13-tl774j-kirmizi-1-l-21139-3538.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور KFS12 Evo 1 l (21740)",
                        "note": "$10.65 · SKU 21740",
                        "priceUsd": 10.65,
                        "priceTry": 500.58,
                        "sku": "21740",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs12-evo-1-l-21740-1210.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور KFS12++ Kırmızı 1 l (21134)",
                        "note": "$10.7 · SKU 21134",
                        "priceUsd": 10.7,
                        "priceTry": 502.98,
                        "sku": "21134",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs12-1-l-21134-8321.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور RAF 11 (G11) Mavi 5 l (8809)",
                        "note": "$22.34 · SKU 8809",
                        "priceUsd": 22.34,
                        "priceTry": 1049.79,
                        "sku": "8809",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-g11-kfs11-mavi-5-l-8809-5653.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخ رادیاتور RAF 12+ (G12+) Kırmızı 5 l (8810)",
                        "note": "$22.43 · SKU 8810",
                        "priceUsd": 22.43,
                        "priceTry": 1054.11,
                        "sku": "8810",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-g12-kfs12-kirmizi-5-l-8810-9763.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخli کنسانتره Cam Suyu -50°C 1 l (21678)",
                        "note": "$8.96 · SKU 21678",
                        "priceUsd": 8.96,
                        "priceTry": 421.15,
                        "sku": "21678",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-antifrizli-konsantre-cam-suyu-52c-1-l-21678-1535.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY ضدیخli کنسانتره Cam Suyu -60°C 1 l (6923)",
                        "note": "$8.61 · SKU 6923",
                        "priceUsd": 8.61,
                        "priceTry": 404.45,
                        "sku": "6923",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-cam-suyu-antifirizi-1-l-6923-7350.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "car-care",
            "title": "مراقبت و نظافت خودرو",
            "titleTr": "Car Care",
            "icon": "sparkles",
            "image": "assets/images/liqui-moly/product-500.jpg",
            "desc": "60 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY Araç İçi پاک‌کنندهsi 500 ml (1547)",
                        "note": "$8.47 · SKU 500",
                        "priceUsd": 8.47,
                        "priceTry": 398.09,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Boya Parlatma Kremi 300 g (1532)",
                        "note": "$19.07 · SKU 300",
                        "priceUsd": 19.07,
                        "priceTry": 896.19,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-boya-parlatma-kremi-300-g-1532-8990.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Boğaz Kelebeği پاک‌کننده اسپری 400 ml (5111)",
                        "note": "$16.71 · SKU 400",
                        "priceUsd": 16.71,
                        "priceTry": 785.41,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/bogaz-kelebegi-temizleyici-spreyi-400-ml-5111-8164.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Cam Yağmur Suyu روان‌کننده 125 Ml. (1590)",
                        "note": "$8.48 · SKU 125",
                        "priceUsd": 8.48,
                        "priceTry": 398.33,
                        "sku": "125",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/cam-yagmur-suyu-kaydirici-125-ml-1590-3540.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Conta Sökücü, Çıkarıcısı 300 ml (3623)",
                        "note": "$13.33 · SKU 3623",
                        "priceUsd": 13.33,
                        "priceTry": 626.33,
                        "sku": "3623",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-conta-sokucu-cikaricisi-3623-8545.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Döşeme تمیزکننده Köpüğü 300 ml (1539)",
                        "note": "$10.75 · SKU 300",
                        "priceUsd": 10.75,
                        "priceTry": 505.39,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000490_liqui-moly-doseme-temizleme-kopugu-300-ml-1539_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Döşeme تمیزکننده Köpüğü 300 ml (23046)",
                        "note": "$13.23 · SKU 300",
                        "priceUsd": 13.23,
                        "priceTry": 621.95,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-doseme-temizleme-kopugu-300-ml-23046-9155.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Ekran پاک‌کننده 100 ml (21634)",
                        "note": "$11.15 · SKU 100",
                        "priceUsd": 11.15,
                        "priceTry": 524.1,
                        "sku": "100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-ekran-temizleyici-100-ml-21634-4293.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY El تمیزکننده Kremi (Sıvı) 3 لیتر (3365)",
                        "note": "$35.62 · SKU 3365",
                        "priceUsd": 35.62,
                        "priceTry": 1673.92,
                        "sku": "3365",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/el-temizleme-kremi-3-litre-3365-endustriyel-1787.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY El تمیزکننده Kremi 12,5 لیتر (2187)",
                        "note": "$51.0 · SKU 2187",
                        "priceUsd": 51.0,
                        "priceTry": 2396.83,
                        "sku": "2187",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000291_liqui-moly-el-temizleme-kremi-125-litre-2187_550.jpeg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Far پاک‌کننده Pasta 200 Ml. (2320)",
                        "note": "$10.95 · SKU 200",
                        "priceUsd": 10.95,
                        "priceTry": 514.78,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000733_liqui-moly-far-temizleyici-pasta-200-ml-2320_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Far پاک‌کننده Pasta 200 Ml. (2320)",
                        "note": "$13.39 · SKU 100",
                        "priceUsd": 13.39,
                        "priceTry": 629.38,
                        "sku": "100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-cizik-giderici-100-ml.-23068-7718.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Hava Akışmetre پاک‌کننده 200 ml (4066)",
                        "note": "$10.32 · SKU 200",
                        "priceUsd": 10.32,
                        "priceTry": 485.24,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/hava-akismetre-temizleyici-200-ml-4066-5629.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Hızlı Parlaklık Cilası 500 ml (21611)",
                        "note": "$13.91 · SKU 500",
                        "priceUsd": 13.91,
                        "priceTry": 653.55,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Hızlı ضدزنگ 300 ml (1612)",
                        "note": "$7.54 · SKU 300",
                        "priceUsd": 7.54,
                        "priceTry": 354.22,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/hizli-pas-sokucu-300-ml-1612-1554.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Jant تمیزکننده اسپری 1 l ( 1597 )",
                        "note": "$22.53 · SKU 1597",
                        "priceUsd": 22.53,
                        "priceTry": 1058.72,
                        "sku": "1597",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-jant-temizleme-spreyi-1-l-1597-8972.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kapı Fitil - Kauçuk Lastik اسپری 500 ml (1538)",
                        "note": "$12.57 · SKU 500",
                        "priceUsd": 12.57,
                        "priceTry": 590.58,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Karbüratör پاک‌کننده 400ml (3325)",
                        "note": "$10.66 · SKU 400",
                        "priceUsd": 10.66,
                        "priceTry": 500.84,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000568_liqui-moly-karburator-temizleyici-400ml-3325_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kask ve Vizör Su روان‌کننده & پاک‌کننده (1571)",
                        "note": "$7.88 · SKU 1571",
                        "priceUsd": 7.88,
                        "priceTry": 370.5,
                        "sku": "1571",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kask-ve-vizor-su-kaydirici-temizleyici-1571-4214.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kask İçi پاک‌کننده (1603)",
                        "note": "$8.69 · SKU 1603",
                        "priceUsd": 8.69,
                        "priceTry": 408.5,
                        "sku": "1603",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kaskici-temizleyici-1603-1086.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kemirgenlerden Koruma اسپری 200 Ml. (1515)",
                        "note": "$9.26 · SKU 200",
                        "priceUsd": 9.26,
                        "priceTry": 435.39,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/kemirgen-koruyucu-sprey-200-ml-1515-8125.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Klima Fresh Plus 75 ml (21465)",
                        "note": "$10.17 · SKU 21465",
                        "priceUsd": 10.17,
                        "priceTry": 477.82,
                        "sku": "21465",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-fresh-plus-75-ml-21465-8835.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Klima سیستم پاک‌کننده اسپری 250 ml (4087)",
                        "note": "$13.84 · SKU 250",
                        "priceUsd": 13.84,
                        "priceTry": 650.35,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/klima-sistem-temizleyici-sprey-250-ml-4087-2778.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Klima سیستمi Temizlik Tabancası 1 Adet (4090)",
                        "note": "$185.81 · SKU 4090",
                        "priceUsd": 185.81,
                        "priceTry": 8732.87,
                        "sku": "4090",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-sistemi-temizlik-tabancasi-1-adet-4090-1894.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Klima سیستمi تمیزکننده Sıvısı 1 لیتر (21921)",
                        "note": "$11.06 · SKU 4091",
                        "priceUsd": 11.06,
                        "priceTry": 519.61,
                        "sku": "4091",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000937_liqui-moly-klima-sistemi-temizleme-sivisi-1-litre-21921_550.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Klima سیستمi تمیزکننده Sıvısı 1 لیتر (4091)",
                        "note": "$13.55 · SKU 21921",
                        "priceUsd": 13.55,
                        "priceTry": 636.96,
                        "sku": "21921",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-sistemi-temizleme-sivisi-1-litre-21921-6024.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kokpit براق‌کننده 600 ml (1610)",
                        "note": "$10.58 · SKU 600",
                        "priceUsd": 10.58,
                        "priceTry": 497.15,
                        "sku": "600",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kokpit-parlaticisi-600-ml-1610-6409.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Korozyon پیشگیرانه Mum اسپری - Kahverengi 500 ml (6103)",
                        "note": "$18.91 · SKU 500",
                        "priceUsd": 18.91,
                        "priceTry": 888.79,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Krom Parlatma Kremi 250 ml (1529)",
                        "note": "$13.29 · SKU 500",
                        "priceUsd": 13.29,
                        "priceTry": 624.7,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kumaş Bakım / Su itici اسپری 400 ml (1594)",
                        "note": "$9.64 · SKU 400",
                        "priceUsd": 9.64,
                        "priceTry": 452.91,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000492_liqui-moly-kumas-bakim-su-itici-spreyi-400-ml-1594_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY LM 40 Çok Amaçlı اسپری 200 ml (3390)",
                        "note": "$7.54 · SKU 200",
                        "priceUsd": 7.54,
                        "priceTry": 354.61,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/lm-40-cok-amacli-sprey-200-ml-3390-1581.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY LM 40 Çok Amaçlı اسپری 400 ml (3391)",
                        "note": "$9.48 · SKU 400",
                        "priceUsd": 9.48,
                        "priceTry": 445.55,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/lm-40-cok-amacli-sprey-400-ml-3391-8474.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Lastik Tamir اسپری 500 ml (3343)",
                        "note": "$19.81 · SKU 500",
                        "priceUsd": 19.81,
                        "priceTry": 930.94,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Lastik براق‌کننده 400 ml (23061)",
                        "note": "$18.08 · SKU 400",
                        "priceUsd": 18.08,
                        "priceTry": 849.76,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-lastik-parlatici-400-ml-23061-1717.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Metalik Cila 500 ml (1424)",
                        "note": "$13.63 · SKU 500",
                        "priceUsd": 13.63,
                        "priceTry": 640.63,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Bölmesi پاک‌کننده 400 ml (3326)",
                        "note": "$12.5 · SKU 400",
                        "priceUsd": 12.5,
                        "priceTry": 587.31,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-ust-temizleyici-400-ml-3326-2771.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Üst پاک‌کننده / براق‌کننده 400 ml (3327)",
                        "note": "$13.39 · SKU 400",
                        "priceUsd": 13.39,
                        "priceTry": 629.29,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-ust-temizleyici-parlatici-400-ml-3327-8854.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY One For All محصول نگهداری 250 ml (1650)",
                        "note": "$7.16 · SKU 250",
                        "priceUsd": 7.16,
                        "priceTry": 336.47,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-one-for-all-bakim-urunu-250-ml-1650-4555.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Oto Cam تمیزکننده Tableti 1 Adet (6925)",
                        "note": "$3.04 · SKU 6925",
                        "priceUsd": 3.04,
                        "priceTry": 142.95,
                        "sku": "6925",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-cam-temizleme-tableti-1-adet-6925-3948.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Oto Cam تمیزکننده کنسانتره Sıvısı Mini (22033)",
                        "note": "$2.02 · SKU 22033",
                        "priceUsd": 2.02,
                        "priceTry": 95.11,
                        "sku": "22033",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-cam-temizleme-konsantre-sivisi-22033-3214.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Plastik Yüzey Bakım ve پاک‌کننده اسپری 500 ml (1536)",
                        "note": "$16.05 · SKU 500",
                        "priceUsd": 16.05,
                        "priceTry": 754.34,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Seramikli ضدزنگ 300 ml (1641)",
                        "note": "$10.26 · SKU 300",
                        "priceUsd": 10.26,
                        "priceTry": 482.36,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/seramikli-pas-sokucu-300-ml-1641-2375.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Susturucu پاک‌کننده (24395)",
                        "note": "$18.73 · SKU 24395",
                        "priceUsd": 18.73,
                        "priceTry": 880.51,
                        "sku": "24395",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-susturucu-temizleyici-24395-3040.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Süper K İç-Dış پاک‌کننده 250 ml (1682)",
                        "note": "$4.54 · SKU 250",
                        "priceUsd": 4.54,
                        "priceTry": 213.28,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-super-k-icdis-temizleyici-250-ml-1682-1784.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Sıvı El پاک‌کننده Dispanseri 1 Adet (3335)",
                        "note": "$63.14 · SKU 3335",
                        "priceUsd": 63.14,
                        "priceTry": 2967.57,
                        "sku": "3335",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sivi-el-temizleyici-dispanseri-1-adet-3335-3328.jpg",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Sıvı El پاک‌کننده Duvar Braketi 1 Adet (3332)",
                        "note": "$33.4 · SKU 3332",
                        "priceUsd": 33.4,
                        "priceTry": 1569.96,
                        "sku": "3332",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-el-temizleyici-braketi-1-adet-3332-6254.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Yağ Çamuru Temizliği 300 ml (5200)",
                        "note": "$21.08 · SKU 300",
                        "priceUsd": 21.08,
                        "priceTry": 990.55,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-yag-camuru-temizligi-300-ml-5200-7983.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Zinc Alüminyum اسپری 400 ml (1640)",
                        "note": "$18.33 · SKU 400",
                        "priceUsd": 18.33,
                        "priceTry": 861.53,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-zinc-aluminyum-sprey-400-ml-1640-1666.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Zincir اسپری 400 ml (3579)",
                        "note": "$12.37 · SKU 400",
                        "priceUsd": 12.37,
                        "priceTry": 581.22,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-zincir-spreyi-400-ml-3579-7423.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Üniversal Tekne پاک‌کننده 1Lt. (25050)",
                        "note": "$15.78 · SKU 25050",
                        "priceUsd": 15.78,
                        "priceTry": 741.49,
                        "sku": "25050",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000154_liqui-moly-universal-tekne-temizleyici-1lt-25050_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Üniversal Tekne پاک‌کننده 1Lt. (25050)",
                        "note": "$16.51 · SKU 25049",
                        "priceUsd": 16.51,
                        "priceTry": 775.75,
                        "sku": "25049",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/tekne-universal-temizleyici-1lt-25049-4226.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY خوشبوکننده خودرو Cherry (21832)",
                        "note": "$9.43 · SKU 21832",
                        "priceUsd": 9.43,
                        "priceTry": 443.14,
                        "sku": "21832",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-cherry-21832-5975.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY خوشبوکننده خودرو Limon 5 g (1661)",
                        "note": "$3.51 · SKU 1661",
                        "priceUsd": 3.51,
                        "priceTry": 165.1,
                        "sku": "1661",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-limon-1661-5241.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY خوشبوکننده خودرو New Car (21831)",
                        "note": "$9.43 · SKU 21831",
                        "priceUsd": 9.43,
                        "priceTry": 443.14,
                        "sku": "21831",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-new-car-21831-7836.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY خوشبوکننده خودرو Ocean (21833)",
                        "note": "$9.43 · SKU 21833",
                        "priceUsd": 9.43,
                        "priceTry": 443.14,
                        "sku": "21833",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-ocean-21833-6549.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY خوشبوکننده خودرو Sport Fresh 5 g (1664)",
                        "note": "$2.9 · SKU 1664",
                        "priceUsd": 2.9,
                        "priceTry": 136.16,
                        "sku": "1664",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-sport-fresh-5-g-1664-1111.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY خوشبوکننده خودرو Vanilya (21830)",
                        "note": "$9.43 · SKU 21830",
                        "priceUsd": 9.43,
                        "priceTry": 443.14,
                        "sku": "21830",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-vanilya-21830-9911.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY کنسانتره Cam پاک‌کننده 50 Ml. (1517)",
                        "note": "$2.98 · SKU 1517",
                        "priceUsd": 2.98,
                        "priceTry": 140.15,
                        "sku": "1517",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/konsantre-cam-temizleyici-50-ml-1517-4718.jpg",
                        "featured": false
                  },
                  {
                        "name": "Liqui Moly Zincir Ve Balata تمیزکننده اسپری 500ml",
                        "note": "$8.99 · SKU —",
                        "priceUsd": 8.99,
                        "priceTry": 422.75,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-zincir-ve-balata-temizleme-spreyi-500ml-8961.png",
                        "featured": false
                  },
                  {
                        "name": "MULTİ اسپری 7 -Çok Amaçlı اسپری 500 ml (3305)",
                        "note": "$10.96 · SKU 500",
                        "priceUsd": 10.96,
                        "priceTry": 515.18,
                        "sku": "500",
                        "image": "assets/images/liqui-moly/product-500.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "motorcycle",
            "title": "موتور سیکلت",
            "titleTr": "Motosiklet",
            "icon": "bike",
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-benzin-katkisi-yakit-sistemi-temizleyici-80-ml-7824-6220.jpg",
            "desc": "9 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY 4 Zamanlı موتورسیکلت بنزین افزودنیsı -Yakıt سیستمi پاک‌کننده 80 ml (7824)",
                        "note": "$5.05 · SKU 7824",
                        "priceUsd": 5.05,
                        "priceTry": 237.5,
                        "sku": "7824",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-benzin-katkisi-yakit-sistemi-temizleyici-80-ml-7824-6220.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Deri Bakım Kremi 250 ml (1554)",
                        "note": "$13.41 · SKU 250",
                        "priceUsd": 13.41,
                        "priceTry": 630.32,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-deri-bakim-kremi-250-ml-1554-4823.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY تمام‌سنتتیک Zincir Yağlama اسپری (1508)",
                        "note": "$8.39 · SKU 1508",
                        "priceUsd": 8.39,
                        "priceTry": 394.25,
                        "sku": "1508",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sentetik-zincir-yaglama-spreyi-1508-9612.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY سنتتیک Zincir Yağlama اسپری Beyaz (1591)",
                        "note": "$14.15 · SKU —",
                        "priceUsd": 14.15,
                        "priceTry": 665.0,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sentetik-zincir-yaglama-spreyi-beyaz-3865.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY موتورسیکلت Engine Flush Plus - Motor İçi پاک‌کننده 250ml (1657)",
                        "note": "$10.61 · SKU —",
                        "priceUsd": 10.61,
                        "priceTry": 498.75,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-engine-flush-motor-ici-temizleyici-2022.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY موتورسیکلت Engine Flush- Motor İçi پاک‌کننده 250ml (1657)",
                        "note": "$10.0 · SKU 2657",
                        "priceUsd": 10.0,
                        "priceTry": 470.0,
                        "sku": "2657",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000881_liqui-moly-motosiklet-engine-flush-motor-ci-temizleyici-250ml-1657_550.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY موتورسیکلت Hava Filtresi Yağlama اسپری (1604)",
                        "note": "$13.14 · SKU 1604",
                        "priceUsd": 13.14,
                        "priceTry": 617.5,
                        "sku": "1604",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-hava-filtresi-yaglama-spreyi-1604-2215.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY موتورسیکلت Lastik Tamir اسپری 300 ml (1579)",
                        "note": "$9.6 · SKU 300",
                        "priceUsd": 9.6,
                        "priceTry": 451.25,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-lastik-tamir-spreyi-300-ml-1579-5363.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY موتورسیکلت بنزین افزودنیsı (Motor Performans Arttırıcı) 80 ml (7823)",
                        "note": "$5.19 · SKU 7823",
                        "priceUsd": 5.19,
                        "priceTry": 244.15,
                        "sku": "7823",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motorbike-speed-shooter-80-ml-7823-4096.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "marine",
            "title": "مارین",
            "titleTr": "Marine",
            "icon": "ship",
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marin-gresi-250-g-25042-2945.jpg",
            "desc": "3 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY Marin گریس 250 g (25042)",
                        "note": "$16.56 · SKU 250",
                        "priceUsd": 16.56,
                        "priceTry": 778.25,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marin-gresi-250-g-25042-2945.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Marin گریس 400 g (25043)",
                        "note": "$14.4 · SKU 400",
                        "priceUsd": 14.4,
                        "priceTry": 676.82,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marin-gresi-400-g-25043-5219.jpg",
                        "featured": false
                  },
                  {
                        "name": "marine motor koruyucu, foggin oil spray",
                        "note": "$10.36 · SKU 300",
                        "priceUsd": 10.36,
                        "priceTry": 487.01,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-motor-koruyucu-sprey-marine-storage-fogging-oil-300-ml-25033-4313.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "service",
            "title": "سرویس و مواد مصرفی",
            "titleTr": "Servis",
            "icon": "wrench",
            "image": "https://www.liquimolyturkey.com/admin/resimler/cam-kesme-teli-50-mt-6218-4978.jpg",
            "desc": "11 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY Cam Kesme Teli 50 mt. (6218)",
                        "note": "$32.01 · SKU 6218",
                        "priceUsd": 32.01,
                        "priceTry": 1504.47,
                        "sku": "6218",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/cam-kesme-teli-50-mt-6218-4978.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Civata Sabitleyici Orta Sert 10 gr (3801)",
                        "note": "$6.33 · SKU 3801",
                        "priceUsd": 6.33,
                        "priceTry": 297.57,
                        "sku": "3801",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/civata-sabitleyici-orta-sert-10-gr-3801-4208.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Civata Sabitleyici Orta Sert 50 gr (3802)",
                        "note": "$18.39 · SKU 3802",
                        "priceUsd": 18.39,
                        "priceTry": 864.37,
                        "sku": "3802",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/civata-sabitleyici-orta-sert-50-gr-3802-1217.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Civata Sabitleyici Sert 10 gr (3803)",
                        "note": "$6.33 · SKU 3803",
                        "priceUsd": 6.33,
                        "priceTry": 297.57,
                        "sku": "3803",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/civata-sabitleyici-sert-10-gr-3803-3347.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Civata Sabitleyici Sert 50 gr (3804)",
                        "note": "$18.39 · SKU 3804",
                        "priceUsd": 18.39,
                        "priceTry": 864.37,
                        "sku": "3804",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-civata-sabitleyici-sert-50-gr-3804-3670.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Civata sökme Maddesi 20 g (3811)",
                        "note": "$8.67 · SKU —",
                        "priceUsd": 8.67,
                        "priceTry": 407.3,
                        "sku": null,
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-civata-sokme-maddesi-hasarli-civata-sokme-7045.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Egzoz Montaj Pastası 150 g (3342)",
                        "note": "$6.86 · SKU 3342",
                        "priceUsd": 6.86,
                        "priceTry": 322.51,
                        "sku": "3342",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/egzoz-montaj-pastasi-3342-1246.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Elektronik Kontak اسپری 200 ml (21700)",
                        "note": "$9.27 · SKU 200",
                        "priceUsd": 9.27,
                        "priceTry": 435.6,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/elektronik-kontak-spreyi-200-ml-21700-9665.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Galvaniz Koruyucu Zinc Spray 400 ml (1540)",
                        "note": "$13.54 · SKU 400",
                        "priceUsd": 13.54,
                        "priceTry": 636.33,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/galvaniz-koruyucu-zinc-spray-400-ml-1540-5014.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kaçak Tespit اسپری 400 ml (3350)",
                        "note": "$8.33 · SKU 400",
                        "priceUsd": 8.33,
                        "priceTry": 391.67,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kacak-tespit-spreyi-400-ml-3350-2132.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Silikon اسپری 300 ml (3310)",
                        "note": "$8.01 · SKU 300",
                        "priceUsd": 8.01,
                        "priceTry": 376.5,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/silikon-sprey-300-ml-3310-8097.jpg",
                        "featured": false
                  }
            ]
      },
      {
            "id": "other",
            "title": "سایر محصولات",
            "titleTr": "Diğer",
            "icon": "box",
            "image": "https://www.liquimolyturkey.com/admin/resimler/aku-gresi-300-ml-3141-1004.jpg",
            "desc": "21 محصول",
            "series": [
                  {
                        "name": "LIQUI MOLY Akü Gres اسپری 300 ml (3141)",
                        "note": "$11.05 · SKU 300",
                        "priceUsd": 11.05,
                        "priceTry": 519.28,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/aku-gresi-300-ml-3141-1004.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Bakır Macunu 1 kg (4061)",
                        "note": "$64.4 · SKU 4061",
                        "priceUsd": 64.4,
                        "priceTry": 3026.8,
                        "sku": "4061",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-bakir-macunu-1-kg-4061-3551.png",
                        "featured": true
                  },
                  {
                        "name": "LIQUI MOLY Hızlı Yapıştırıcı 10 g (3805)",
                        "note": "$4.58 · SKU 3805",
                        "priceUsd": 4.58,
                        "priceTry": 215.33,
                        "sku": "3805",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hizli-yapistirici-10-g-3805-3645.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kaporta Yapıştırma اسپری 400 ml (6192)",
                        "note": "$21.64 · SKU 400",
                        "priceUsd": 21.64,
                        "priceTry": 1017.2,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kaporta-yapistirma-spreyi-400-ml-6192-7242.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kapı Kilit روان‌کنندهsı 50 ml (1528)",
                        "note": "$6.16 · SKU 1528",
                        "priceUsd": 6.16,
                        "priceTry": 289.6,
                        "sku": "1528",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kapi-kilit-yaglayicisi-50-ml-1528-1823.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kilit Bakım اسپری 250 ml (3075)",
                        "note": "$10.88 · SKU 250",
                        "priceUsd": 10.88,
                        "priceTry": 511.56,
                        "sku": "250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kapi-kilit-spreyi-250-ml-3075-6824.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Klima سیستمi Yağı PAG 46 250 ml (4083)",
                        "note": "$21.97 · SKU 4083",
                        "priceUsd": 21.97,
                        "priceTry": 1032.74,
                        "sku": "4083",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-sistemi-yagi-pag-46-4083-7031.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kumaş Bakım اسپری 400 ml (1594)",
                        "note": "$12.68 · SKU 400",
                        "priceUsd": 12.68,
                        "priceTry": 595.85,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kumas-bakim-spreyi-400-ml-23056-4422.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Kırmızı Silikon Sıvı Conta 80 ml (8948)",
                        "note": "$9.11 · SKU 8948",
                        "priceUsd": 9.11,
                        "priceTry": 428.13,
                        "sku": "8948",
                        "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000789_liqui-moly-kirmizi-silikon-sivi-conta-80-ml-8948_550.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY LM48 Montaj Macunu 50g (3010)",
                        "note": "$7.25 · SKU 3010",
                        "priceUsd": 7.25,
                        "priceTry": 340.66,
                        "sku": "3010",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-lm48-montaj-macunu-3010-5295.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Kaçak Tespit اسپری 200 ml (3351)",
                        "note": "$7.29 · SKU 200",
                        "priceUsd": 7.29,
                        "priceTry": 342.41,
                        "sku": "200",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-kacak-tespit-spreyi-200-ml-3351-6239.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Motor Koruyucu اسپری (Engine Preserver) 300 ml (1420)",
                        "note": "$10.92 · SKU 300",
                        "priceUsd": 10.92,
                        "priceTry": 513.31,
                        "sku": "300",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-koruyucu-sprey-300-ml-1420-6062.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Rulman Menteşe Macunu 50 gr (1080)",
                        "note": "$5.74 · SKU 1080",
                        "priceUsd": 5.74,
                        "priceTry": 269.98,
                        "sku": "1080",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-rulman-mentese-macunu-50-gr-1080-8358.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Silah Bakım Yağı -گریس (24391)",
                        "note": "$11.8 · SKU 24391",
                        "priceUsd": 11.8,
                        "priceTry": 554.6,
                        "sku": "24391",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-silah-bakim-yagi-gresi-24391-3745.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Silah Bakım اسپری (4390)",
                        "note": "$12.23 · SKU 4390",
                        "priceUsd": 12.23,
                        "priceTry": 574.7,
                        "sku": "4390",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-silah-bakim-spreyi-4390-6884.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Silikon Sıvı Conta 200 ml (6185)",
                        "note": "$26.83 · SKU 6185",
                        "priceUsd": 26.83,
                        "priceTry": 1260.92,
                        "sku": "6185",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/silikon-sivi-conta-6185-2790.png",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Silikon روان‌کننده 100 ml (3312)",
                        "note": "$12.4 · SKU 100",
                        "priceUsd": 12.4,
                        "priceTry": 583.03,
                        "sku": "100",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-silikon-yaglayici-100-ml-3312-5574.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Sıvı Geniş Alanlı Metal Yapıştırıcı 25 ml (6193)",
                        "note": "$16.18 · SKU 6193",
                        "priceUsd": 16.18,
                        "priceTry": 760.61,
                        "sku": "6193",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sivi-metal-yapistirici-25-ml-6193-2354.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Sıvı Gres Tutunma اسپری 400 ml (4084)",
                        "note": "$9.83 · SKU 400",
                        "priceUsd": 9.83,
                        "priceTry": 462.21,
                        "sku": "400",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/sivi-gres-tutunma-spreyi-400-ml-4084-5113.jpg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Sızdırmaz Yüzey Sıvı Conta 50 g (3810)",
                        "note": "$18.39 · SKU 3810",
                        "priceUsd": 18.39,
                        "priceTry": 864.37,
                        "sku": "3810",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/sizdirmaz-yuzey-sivi-conta-50-g-3810-3727.jpeg",
                        "featured": false
                  },
                  {
                        "name": "LIQUI MOLY Yağ Toplayıcı Granül 25 لیتر (7250)",
                        "note": "$31.19 · SKU 7250",
                        "priceUsd": 31.19,
                        "priceTry": 1465.9,
                        "sku": "7250",
                        "image": "https://www.liquimolyturkey.com/admin/resimler/yag-toplayici-granul-25-litre-7250-3935.jpg",
                        "featured": false
                  }
            ]
      }
],
    products: [
      {
            "id": "250",
            "name": "LIQUI MOLY ATF Otomatik Şanzıman Katkısı 250 ml (5135)",
            "nameFa": "LIQUI MOLY ATF Otomatik Şanzıman افزودنیsı 250 ml (5135)",
            "nameTr": "LIQUI MOLY ATF Otomatik Şanzıman Katkısı 250 ml (5135)",
            "sku": "250",
            "priceTry": 1182.84,
            "priceUsd": 25.17,
            "image": "https://www.liquimolyturkey.com/admin/resimler/atf-otomatik-sanziman-katkisi-250-ml-5135-1002.jpg",
            "url": "https://shop.egemot.com.tr/atf-otomatik-sanziman-katkisi-250-ml-5135",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "5116",
            "name": "LIQUI MOLY Hidrolik Sistem Katkısı 1 Litre (5116)",
            "nameFa": "LIQUI MOLY Hidrolik سیستم افزودنیsı 1 لیتر (5116)",
            "nameTr": "LIQUI MOLY Hidrolik Sistem Katkısı 1 Litre (5116)",
            "sku": "5116",
            "priceTry": 1052.68,
            "priceUsd": 22.4,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000457_liqui-moly-hidrolik-sistem-katkisi-1-litre-5116_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-hidrolik-sistem-katkisi-1-litre-5116-2",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "2510",
            "name": "LIQUI MOLY MoS2 &#39;li Şanzıman-Dişli Yağı Katkısı 50 gr (2510)",
            "nameFa": "LIQUI MOLY MoS2 &#39;li Şanzıman-Dişli Yağı افزودنیsı 50 gr (2510)",
            "nameTr": "LIQUI MOLY MoS2 &#39;li Şanzıman-Dişli Yağı Katkısı 50 gr (2510)",
            "sku": "2510",
            "priceTry": 885.37,
            "priceUsd": 18.84,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-mos2-li-sanziman-disli-yagi-katkisi-50-gr-2510-4639.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-mos2-li-sanziman-disli-yagi-katkisi-50-gr-2510",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "2510",
            "name": "LIQUI MOLY MoS2 'li Şanzıman ve Dişli Yağı Katkısı 50 gr (2510)",
            "nameFa": "LIQUI MOLY MoS2 'li Şanzıman ve Dişli Yağı افزودنیsı 50 gr (2510)",
            "nameTr": "LIQUI MOLY MoS2 'li Şanzıman ve Dişli Yağı Katkısı 50 gr (2510)",
            "sku": "2510",
            "priceTry": 662.69,
            "priceUsd": 14.1,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000461_liqui-moly-mos2-li-sanziman-ve-disli-yagi-katkisi-50-gr-2510_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-sanziman-transfer-kutu-katkisi-50-gr-2510",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "5197",
            "name": "LIQUI MOLY MoS2'li Motor Aşınma Önleyici Yağ Katkısı 1 Litre (5197)",
            "nameFa": "LIQUI MOLY MoS2'li Motor Aşınma پیشگیرانه Yağ افزودنیsı 1 لیتر (5197)",
            "nameTr": "LIQUI MOLY MoS2'li Motor Aşınma Önleyici Yağ Katkısı 1 Litre (5197)",
            "sku": "5197",
            "priceTry": 2499.88,
            "priceUsd": 53.19,
            "image": "assets/images/liqui-moly/product-5197.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-asinma-koruyucu-katki-1-litre-5197",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Motor Clean 500 ml (1019)",
            "nameFa": "LIQUI MOLY Motor Clean 500 ml (1019)",
            "nameTr": "LIQUI MOLY Motor Clean 500 ml (1019)",
            "sku": "500",
            "priceTry": 932.78,
            "priceUsd": 19.85,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-clean-500-ml-1019",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "20766",
            "name": "LIQUI MOLY Pro-line Turbo Şarj Katkısı 20 gr (20766)",
            "nameFa": "LIQUI MOLY Pro-line Turbo Şarj افزودنیsı 20 gr (20766)",
            "nameTr": "LIQUI MOLY Pro-line Turbo Şarj Katkısı 20 gr (20766)",
            "sku": "20766",
            "priceTry": 623.23,
            "priceUsd": 13.26,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-turbo-sarj-katkisi-20-gr-20766-8474.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-pro-line-turbo-sarj-katkisi-20-gr-20766",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "1614",
            "name": "Liqui Moly Mos2li Kaydirici Ve Pas Sokucu 300 Ml 1614",
            "nameFa": "Liqui Moly Mos2li روان‌کننده Ve ضدزنگ 300 Ml 1614",
            "nameTr": "Liqui Moly Mos2li Kaydirici Ve Pas Sokucu 300 Ml 1614",
            "sku": "1614",
            "priceTry": 346.63,
            "priceUsd": 7.38,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-mos2li-kaydirici-ve-pas-sokucu-300-ml-1614-3547.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-mos2li-kaydirici-ve-pas-sokucu-300-ml-1614",
            "category": "افزودنی روغن موتور"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Hibrit Yakıt Katkısı (Hybrit Additive) 250 ml (1001)",
            "nameFa": "LIQUI MOLY Hibrit افزودنی سوخت (Hybrit Additive) 250 ml (1001)",
            "nameTr": "LIQUI MOLY Hibrit Yakıt Katkısı (Hybrit Additive) 250 ml (1001)",
            "sku": "250",
            "priceTry": 640.26,
            "priceUsd": 13.62,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hibrit-yakit-katkisi-hybrit-additive-250-ml-1001-7586.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-hibrit-yakit-katkisi-hybrit-additive-250-ml-1001",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Kurşun Arttırıcı Katkı 250 ml (1010)",
            "nameFa": "LIQUI MOLY Kurşun Arttırıcı افزودنی 250 ml (1010)",
            "nameTr": "LIQUI MOLY Kurşun Arttırıcı Katkı 250 ml (1010)",
            "sku": "250",
            "priceTry": 653.12,
            "priceUsd": 13.9,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oktan-yukselticii-250-ml-1010-2416.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oktan-yukselticii-250-ml-1010",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "8351",
            "name": "LIQUI MOLY Oktan Arttırıcı - Octane Plus (8351)",
            "nameFa": "LIQUI MOLY Oktan Arttırıcı - اکتان پلاس (8351)",
            "nameTr": "LIQUI MOLY Oktan Arttırıcı - Octane Plus (8351)",
            "sku": "8351",
            "priceTry": 550.47,
            "priceUsd": 11.71,
            "image": "assets/images/liqui-moly/product-8351.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oktan-arttirici-octane-plus-8351",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "liqui-moly-pro-line-dizel-enjekt-r-ve-yanma-odas",
            "name": "LIQUI MOLY Pro-Line Dizel Enjektör ve Yanma Odası Temizleyici Yakıt Katkısı 1Litre (5176)",
            "nameFa": "LIQUI MOLY Pro-Line دیزل انژکتور ve Yanma Odası پاک‌کننده افزودنی سوخت 1لیتر (5176)",
            "nameTr": "LIQUI MOLY Pro-Line Dizel Enjektör ve Yanma Odası Temizleyici Yakıt Katkısı 1Litre (5176)",
            "sku": null,
            "priceTry": 1673.6,
            "priceUsd": 35.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-dizel-enjektor-ve-yanma-odasi-temizleyici-yakit-katkisi-1litre-2902.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-pro-line-dizel-enjektor-ve-yanma-odasi-temizleyici-yakit-katkisi-1litre",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "120",
            "name": "LIQUI MOLY Pro-Line/ LSPI önleyici katkı (Benzin) Enjektör Temizleyici / Emisyon İyileştirici- 120 ml (21281)",
            "nameFa": "LIQUI MOLY Pro-Line/ LSPI پیشگیرانه افزودنی (بنزین) انژکتور پاک‌کننده / آلایندگی بهبوددهنده- 120 ml (21281)",
            "nameTr": "LIQUI MOLY Pro-Line/ LSPI önleyici katkı (Benzin) Enjektör Temizleyici / Emisyon İyileştirici- 120 ml (21281)",
            "sku": "120",
            "priceTry": 1237.36,
            "priceUsd": 26.33,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-enjektor-temizleyici-benzin-120-ml-21281-2991.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-pro-line-enjektor-temizleyici-benzin-120-ml-21281",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "5153",
            "name": "LIQUI MOLY Pro-line Benzin Sistemi Temizleyicisi 500 ml (5153)",
            "nameFa": "LIQUI MOLY Pro-line بنزین سیستمi پاک‌کنندهsi 500 ml (5153)",
            "nameTr": "LIQUI MOLY Pro-line Benzin Sistemi Temizleyicisi 500 ml (5153)",
            "sku": "5153",
            "priceTry": 862.93,
            "priceUsd": 18.36,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-benzin-sistemi-temizleyicisi-5153-1777.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-benzin-sistemi-temizleyicisi-5153",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Speed Tec Benzin Katkısı 250 ml (3720)",
            "nameFa": "LIQUI MOLY Speed Tec بنزین افزودنیsı 250 ml (3720)",
            "nameTr": "LIQUI MOLY Speed Tec Benzin Katkısı 250 ml (3720)",
            "sku": "250",
            "priceTry": 648.7,
            "priceUsd": 13.8,
            "image": "https://www.liquimolyturkey.com/admin/resimler/speed-tec-benzin-katkisi-250-ml-3720-1186.jpg",
            "url": "https://shop.egemot.com.tr/speed-tec-benzin-katkisi-250-ml-3720",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Speed Tec Dizel Yakıt Katkısı 250 ml (3722)",
            "nameFa": "LIQUI MOLY Speed Tec دیزل افزودنی سوخت 250 ml (3722)",
            "nameTr": "LIQUI MOLY Speed Tec Dizel Yakıt Katkısı 250 ml (3722)",
            "sku": "250",
            "priceTry": 680.16,
            "priceUsd": 14.47,
            "image": "https://www.liquimolyturkey.com/admin/resimler/speed-tec-dizel-yakit-katkisi-250-ml-3722-1644.jpg",
            "url": "https://shop.egemot.com.tr/speed-tec-dizel-yakit-katkisi-250-ml-3722",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "4012",
            "name": "LIQUI MOLY Supap Koruyucu LPG'li Araçlar 1 l. (4012)",
            "nameFa": "LIQUI MOLY Supap Koruyucu LPG'li Araçlar 1 l. (4012)",
            "nameTr": "LIQUI MOLY Supap Koruyucu LPG'li Araçlar 1 l. (4012)",
            "sku": "4012",
            "priceTry": 1532.44,
            "priceUsd": 32.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/subap-koruyucu-lpgli-araclar-1-l-4012-2791.jpg",
            "url": "https://shop.egemot.com.tr/subap-koruyucu-lpgli-araclar-1-l-4012",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "150",
            "name": "LIQUI MOLY VALVE CLEAN 150 ml (1014)",
            "nameFa": "LIQUI MOLY VALVE CLEAN 150 ml (1014)",
            "nameTr": "LIQUI MOLY VALVE CLEAN 150 ml (1014)",
            "sku": "150",
            "priceTry": 451.52,
            "priceUsd": 9.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-valve-clean-150-ml-1014-2252.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-valve-clean-150-ml-1014",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Yeni Benzin Sistem Temizleyici Yakıt Katkısı 300 ml (21492)",
            "nameFa": "LIQUI MOLY Yeni بنزین سیستم پاک‌کننده افزودنی سوخت 300 ml (21492)",
            "nameTr": "LIQUI MOLY Yeni Benzin Sistem Temizleyici Yakıt Katkısı 300 ml (21492)",
            "sku": "300",
            "priceTry": 765.61,
            "priceUsd": 16.29,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-yeni-benzin-sistem-temizleyici-yakit-katkisi-300-ml-21492-2075.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-yeni-benzin-sistem-temizleyici-yakit-katkisi-300-ml-21492",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "21280",
            "name": "LIQUI MOLY Özel Oktan Arttırıcı + / Octane Booster (21280)",
            "nameFa": "LIQUI MOLY Özel Oktan Arttırıcı + / Octane Booster (21280)",
            "nameTr": "LIQUI MOLY Özel Oktan Arttırıcı + / Octane Booster (21280)",
            "sku": "21280",
            "priceTry": 707.25,
            "priceUsd": 15.05,
            "image": "assets/images/liqui-moly/product-21280.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oktan-arttirici-octane-booster-21280",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Emisyon Ayarlayıcı (Katalitik Sistem Temizleyici) 300 ml (7110)",
            "nameFa": "LIQUI MOLY آلایندگی Ayarlayıcı (Katalitik سیستم پاک‌کننده) 300 ml (7110)",
            "nameTr": "LIQUI MOLY Emisyon Ayarlayıcı (Katalitik Sistem Temizleyici) 300 ml (7110)",
            "sku": "300",
            "priceTry": 553.99,
            "priceUsd": 11.79,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-emisyon-ayarlayici-katalitik-sistem-temizleyici-300-ml-7110-2468.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-emisyon-ayarlayici-katalitik-sistem-temizleyici-300-ml-7110",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Emisyon Ayarlayıcı (Katalitik Sistem Temizleyici) 300 ml (8931)",
            "nameFa": "LIQUI MOLY آلایندگی Ayarlayıcı (Katalitik سیستم پاک‌کننده) 300 ml (8931)",
            "nameTr": "LIQUI MOLY Emisyon Ayarlayıcı (Katalitik Sistem Temizleyici) 300 ml (8931)",
            "sku": "300",
            "priceTry": 528.34,
            "priceUsd": 11.24,
            "image": "https://www.liquimolyturkey.com/admin/resimler/emisyon-ayarlayici-katalitik-sistem-temizleyici-300-ml-8931-3498.jpg",
            "url": "https://shop.egemot.com.tr/emisyon-ayarlayici-katalitik-sistem-temizleyici-300-ml-8931",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "3381",
            "name": "LIQUI MOLY Enjektör - Buji Gresi 20 g (3381)",
            "nameFa": "LIQUI MOLY انژکتور - Buji گریس 20 g (3381)",
            "nameTr": "LIQUI MOLY Enjektör - Buji Gresi 20 g (3381)",
            "sku": "3381",
            "priceTry": 288.92,
            "priceUsd": 6.15,
            "image": "https://www.liquimolyturkey.com/admin/resimler/enjektor-buji-gresi-20-g-3381-2658.jpg",
            "url": "https://shop.egemot.com.tr/enjektor-buji-gresi-20-g-3381",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Enjektör Temizleyici (Benzin) 300 ml (5110)",
            "nameFa": "LIQUI MOLY انژکتور پاک‌کننده (بنزین) 300 ml (5110)",
            "nameTr": "LIQUI MOLY Enjektör Temizleyici (Benzin) 300 ml (5110)",
            "sku": "300",
            "priceTry": 592.17,
            "priceUsd": 12.6,
            "image": "https://www.liquimolyturkey.com/admin/resimler/enjektor-temizleyici-benzin-300-ml-5110-2070.jpg",
            "url": "https://shop.egemot.com.tr/enjektor-temizleyici-benzin-300-ml-5110",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Enjektör- Buji Sökme Spreyi 400 ml (3379)",
            "nameFa": "LIQUI MOLY انژکتور- Buji Sökme اسپری 400 ml (3379)",
            "nameTr": "LIQUI MOLY Enjektör- Buji Sökme Spreyi 400 ml (3379)",
            "sku": "400",
            "priceTry": 677.04,
            "priceUsd": 14.41,
            "image": "https://www.liquimolyturkey.com/admin/resimler/enjektor-kizdirma-buji-sokucu-spreyi-400-ml-3379-5660.jpg",
            "url": "https://shop.egemot.com.tr/enjektor-kizdirma-buji-sokucu-spreyi-400-ml-3379",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Dizel Enjektör ve Yanma Odası Temizleyici 500 ml (5170)",
            "nameFa": "LIQUI MOLY دیزل انژکتور ve Yanma Odası پاک‌کننده 500 ml (5170)",
            "nameTr": "LIQUI MOLY Dizel Enjektör ve Yanma Odası Temizleyici 500 ml (5170)",
            "sku": "500",
            "priceTry": 771.35,
            "priceUsd": 16.41,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/dizel-enjektor-ve-yanma-odasi-temizleyici-500-ml-5170",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Dizel Enjektör ve Yanma Odası Temizleyici Yakıt Katkısı 250 ml (5120)",
            "nameFa": "LIQUI MOLY دیزل انژکتور ve Yanma Odası پاک‌کننده افزودنی سوخت 250 ml (5120)",
            "nameTr": "LIQUI MOLY Dizel Enjektör ve Yanma Odası Temizleyici Yakıt Katkısı 250 ml (5120)",
            "sku": "250",
            "priceTry": 598.77,
            "priceUsd": 12.74,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dizel-enjektor-ve-yanma-odasi-temizleyici-250-ml-5120-3521.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-dizel-enjektor-ve-yanma-odasi-temizleyici-250-ml-5120",
            "category": "افزودنی سوخت بنزین"
      },
      {
            "id": "21942",
            "name": "DPF/GPF Temizleyici 400ml (21942)",
            "nameFa": "DPF/GPF پاک‌کننده 400ml (21942)",
            "nameTr": "DPF/GPF Temizleyici 400ml (21942)",
            "sku": "21942",
            "priceTry": 824.77,
            "priceUsd": 17.55,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000905_dpfgpf-temizleyici-400ml-21942_550.jpeg",
            "url": "https://shop.egemot.com.tr/dpfgpf-temizleyici-400ml-21942",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "100",
            "name": "LIQUI MOLY Adblue kristalleşme Önleyici Konsantre Katkı 100 ml (21801)",
            "nameFa": "LIQUI MOLY Adblue بلورشدگی پیشگیرانه کنسانتره افزودنی 100 ml (21801)",
            "nameTr": "LIQUI MOLY Adblue kristalleşme Önleyici Konsantre Katkı 100 ml (21801)",
            "sku": "100",
            "priceTry": 498.6,
            "priceUsd": 10.61,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000887_liqui-moly-adblue-kristallesme-onleyici-konsantre-katki-100-ml-21801_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-adblue-kristallesme-onleyici-konsantre-katki-100-ml-21801",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Adblue kristalleşme Önleyici Konsantre Katkı 250 ml (21799)",
            "nameFa": "LIQUI MOLY Adblue بلورشدگی پیشگیرانه کنسانتره افزودنی 250 ml (21799)",
            "nameTr": "LIQUI MOLY Adblue kristalleşme Önleyici Konsantre Katkı 250 ml (21799)",
            "sku": "250",
            "priceTry": 954.01,
            "priceUsd": 20.3,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000886_liqui-moly-adblue-kristallesme-onleyici-konsantre-katki-250-ml-21799_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-adblue-anti-kristal-konsantre-katkisi-250-ml-21799",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "2368",
            "name": "LIQUI MOLY Antibakteriyel Dizel Yakıt Katkısı (2368)",
            "nameFa": "LIQUI MOLY Antibakteriyel دیزل افزودنی سوخت (2368)",
            "nameTr": "LIQUI MOLY Antibakteriyel Dizel Yakıt Katkısı (2368)",
            "sku": "2368",
            "priceTry": 2455.76,
            "priceUsd": 52.25,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-antibakteriyel-dizel-yakit-katkisi-2368-3518.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-antibakteriyel-dizel-yakit-katkisi-2368",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "21942",
            "name": "LIQUI MOLY DPF Temizleyici 400 ml (21942)",
            "nameFa": "LIQUI MOLY DPF پاک‌کننده 400 ml (21942)",
            "nameTr": "LIQUI MOLY DPF Temizleyici 400 ml (21942)",
            "sku": "21942",
            "priceTry": 1233.56,
            "priceUsd": 26.25,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dpf-temizleyici-400ml-21942-9187.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-dpf-temizleyici-400ml-21942",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Kamyon/Kamyonet Serisi Dizel Sistem ve Performans Koruyucu 500 ml (20997)",
            "nameFa": "LIQUI MOLY Kamyon/Kamyonet Serisi دیزل سیستم ve Performans Koruyucu 500 ml (20997)",
            "nameTr": "LIQUI MOLY Kamyon/Kamyonet Serisi Dizel Sistem ve Performans Koruyucu 500 ml (20997)",
            "sku": "500",
            "priceTry": 978.59,
            "priceUsd": 20.82,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kamyon-serisi-dizel-sistem-ve-performans-koruyucu-500-ml-20997",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Marine Diesel Protect 500 ML (25000)",
            "nameFa": "LIQUI MOLY Marine Diesel Protect 500 ML (25000)",
            "nameTr": "LIQUI MOLY Marine Diesel Protect 500 ML (25000)",
            "sku": "500",
            "priceTry": 1834.63,
            "priceUsd": 39.03,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-diesel-protect-500-ml-250001",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "25007",
            "name": "LIQUI MOLY Marine Super Diesel Additive - Dizel Yakıt Katkısı 1L (25007)",
            "nameFa": "LIQUI MOLY Marine Super Diesel Additive - دیزل افزودنی سوخت 1L (25007)",
            "nameTr": "LIQUI MOLY Marine Super Diesel Additive - Dizel Yakıt Katkısı 1L (25007)",
            "sku": "25007",
            "priceTry": 1797.07,
            "priceUsd": 38.24,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-super-diesel-additive-dizel-yakit-katkisi-1l-25007-4670.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-super-diesel-additive-dizel-yakit-katkisi-1l-25007",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Marine Super Diesel Additive - Dizel Yakıt Katkısı 500 ML (25005)",
            "nameFa": "LIQUI MOLY Marine Super Diesel Additive - دیزل افزودنی سوخت 500 ML (25005)",
            "nameTr": "LIQUI MOLY Marine Super Diesel Additive - Dizel Yakıt Katkısı 500 ML (25005)",
            "sku": "500",
            "priceTry": 1155.66,
            "priceUsd": 24.59,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-super-diesel-additive-dizel-yakit-katkisi-500-ml-25005",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "5123",
            "name": "LIQUI MOLY Pro-Line Dizel Partikül Filtre (DPF) Koruması 1 litre (5123)",
            "nameFa": "LIQUI MOLY Pro-Line دیزل Partikül Filtre (DPF) Koruması 1 لیتر (5123)",
            "nameTr": "LIQUI MOLY Pro-Line Dizel Partikül Filtre (DPF) Koruması 1 litre (5123)",
            "sku": "5123",
            "priceTry": 923.25,
            "priceUsd": 19.64,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000486_liqui-moly-pro-line-dizel-partikul-filtre-dpf-korumasi-1-litre-5123_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-pro-line-dizel-partikul-filtre-korumasi-1-kg-5123",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "5123",
            "name": "LIQUI MOLY Pro-Line Dizel Partikül Filtre Koruması 1 litre (5123)",
            "nameFa": "LIQUI MOLY Pro-Line دیزل Partikül Filtre Koruması 1 لیتر (5123)",
            "nameTr": "LIQUI MOLY Pro-Line Dizel Partikül Filtre Koruması 1 litre (5123)",
            "sku": "5123",
            "priceTry": 1241.79,
            "priceUsd": 26.42,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-dizel-partikul-filtre-korumasi-1L-5123-4205.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-pro-line-dizel-partikul-filtre-korumasi-1L-5123",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Yeni Dizel Sistem Temizleyici Yakıt Katkısı 300 ml (21491)",
            "nameFa": "LIQUI MOLY Yeni دیزل سیستم پاک‌کننده افزودنی سوخت 300 ml (21491)",
            "nameTr": "LIQUI MOLY Yeni Dizel Sistem Temizleyici Yakıt Katkısı 300 ml (21491)",
            "sku": "300",
            "priceTry": 866.51,
            "priceUsd": 18.44,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-yeni-dizel-sistem-temizleyici-yakit-katkisi-300-ml-21491-9110.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-yeni-dizel-sistem-temizleyici-yakit-katkisi-300-ml-21491",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "150",
            "name": "LIQUI MOLY Dizel Duman Önleyici 150 ml (5180)",
            "nameFa": "LIQUI MOLY دیزل Duman پیشگیرانه 150 ml (5180)",
            "nameTr": "LIQUI MOLY Dizel Duman Önleyici 150 ml (5180)",
            "sku": "150",
            "priceTry": 454.63,
            "priceUsd": 9.67,
            "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-duman-onleyici-yakit-katkisi-150-ml-5180-9678.jpg",
            "url": "https://shop.egemot.com.tr/dizel-duman-onleyici-yakit-katkisi-150-ml-5180",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Dizel Emme Manifold Temizleyici 400 ml (5168)",
            "nameFa": "LIQUI MOLY دیزل Emme Manifold پاک‌کننده 400 ml (5168)",
            "nameTr": "LIQUI MOLY Dizel Emme Manifold Temizleyici 400 ml (5168)",
            "sku": "400",
            "priceTry": 795.18,
            "priceUsd": 16.92,
            "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-emme-manifold-temizleyici-400-ml-5168-4000.jpg",
            "url": "https://shop.egemot.com.tr/dizel-emme-manifold-temizleyici-400-ml-5168",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Dizel Partikül Filtre (DPF) Durulayıcı 500 ml (5171)",
            "nameFa": "LIQUI MOLY دیزل Partikül Filtre (DPF) Durulayıcı 500 ml (5171)",
            "nameTr": "LIQUI MOLY Dizel Partikül Filtre (DPF) Durulayıcı 500 ml (5171)",
            "sku": "500",
            "priceTry": 1535.71,
            "priceUsd": 32.67,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/dizel-partikul-filtre-dpf-durulayici-500-ml-5171",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "5169",
            "name": "LIQUI MOLY Dizel Partikül Filtre (DPF) Temizleyici 1 lt (5169)",
            "nameFa": "LIQUI MOLY دیزل Partikül Filtre (DPF) پاک‌کننده 1 لیتر (5169)",
            "nameTr": "LIQUI MOLY Dizel Partikül Filtre (DPF) Temizleyici 1 lt (5169)",
            "sku": "5169",
            "priceTry": 2710.35,
            "priceUsd": 57.67,
            "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-partikul-filtre-dpf-temizleyici-1-lt-5169-8095.jpg",
            "url": "https://shop.egemot.com.tr/dizel-partikul-filtre-dpf-temizleyici-1-lt-5169",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Dizel Partikül Filtre DPF Koruyucu 250 ml (5148)",
            "nameFa": "LIQUI MOLY دیزل Partikül Filtre DPF Koruyucu 250 ml (5148)",
            "nameTr": "LIQUI MOLY Dizel Partikül Filtre DPF Koruyucu 250 ml (5148)",
            "sku": "250",
            "priceTry": 540.39,
            "priceUsd": 11.5,
            "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-partikul-filtre-dpf-koruyucu-250-ml-5148-4054.jpg",
            "url": "https://shop.egemot.com.tr/dizel-partikul-filtre-dpf-koruyucu-250-ml-5148",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "5131",
            "name": "LIQUI MOLY Dizel Yakıt Donma Önleyici 1 Litre (5131)",
            "nameFa": "LIQUI MOLY دیزل Yakıt Donma پیشگیرانه 1 لیتر (5131)",
            "nameTr": "LIQUI MOLY Dizel Yakıt Donma Önleyici 1 Litre (5131)",
            "sku": "5131",
            "priceTry": 1836.31,
            "priceUsd": 39.07,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dizel-yakit-donma-onleyici-1-litre-5131-3483.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-dizel-yakit-donma-onleyici-1-litre-5131",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Dizel Sistem Temizleyici Pro-Line Seri 500 ml (5156)",
            "nameFa": "LIQUI MOLY دیزل سیستم پاک‌کننده Pro-Line Seri 500 ml (5156)",
            "nameTr": "LIQUI MOLY Dizel Sistem Temizleyici Pro-Line Seri 500 ml (5156)",
            "sku": "500",
            "priceTry": 1165.17,
            "priceUsd": 24.79,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-dizel-sistem-temizleyici-pro-line-seri-500-ml-5156",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Dizel Sistem Temizleyici Yakıt Katkısı 250 ml (5139)",
            "nameFa": "LIQUI MOLY دیزل سیستم پاک‌کننده افزودنی سوخت 250 ml (5139)",
            "nameTr": "LIQUI MOLY Dizel Sistem Temizleyici Yakıt Katkısı 250 ml (5139)",
            "sku": "250",
            "priceTry": 587.29,
            "priceUsd": 12.5,
            "image": "https://www.liquimolyturkey.com/admin/resimler/dizel-sistem-temizleyici-yakit-katkisi-250-ml-5139-4964.jpg",
            "url": "https://shop.egemot.com.tr/dizel-sistem-temizleyici-yakit-katkisi-250-ml-5139",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "21801",
            "name": "adblue kristalleşme önleyici konsantre katkı -100 ml",
            "nameFa": "adblue بلورشدگی پیشگیرانه کنسانتره افزودنی -100 ml",
            "nameTr": "adblue kristalleşme önleyici konsantre katkı -100 ml",
            "sku": "21801",
            "priceTry": 725.63,
            "priceUsd": 15.44,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-adblue-kristallesme-onleyici-katki-21801-7424.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-adblue-kristallesme-onleyici-katki-21801",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "21799",
            "name": "adblue kristalleşme önleyici konsantre katkı -250 ml",
            "nameFa": "adblue بلورشدگی پیشگیرانه کنسانتره افزودنی -250 ml",
            "nameTr": "adblue kristalleşme önleyici konsantre katkı -250 ml",
            "sku": "21799",
            "priceTry": 1386.23,
            "priceUsd": 29.49,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-adblue-kristallesme-onleyici-katki-21799-6571.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-adblue-kristallesme-onleyici-katki-21799",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "25001",
            "name": "marine dizel koruyucu",
            "nameFa": "marine دیزل koruyucu",
            "nameTr": "marine dizel koruyucu",
            "sku": "25001",
            "priceTry": 1834.63,
            "priceUsd": 39.03,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-dizel-koruyucu-500ml-25001-2633.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-dizel-koruyucu-500ml-25001",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "25002",
            "name": "marine dizel koruyucu",
            "nameFa": "marine دیزل koruyucu",
            "nameTr": "marine dizel koruyucu",
            "sku": "25002",
            "priceTry": 1939.59,
            "priceUsd": 41.27,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-dizel-koruyucu-1l-25002-4593.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-dizel-koruyucu-1l-25002",
            "category": "افزودنی سوخت دیزل"
      },
      {
            "id": "1505",
            "name": "2T Street Race Tam Sentetik Motor Yağı 1 Litre (1505)",
            "nameFa": "2T Street Race تمام‌سنتتیک روغن موتور 1 لیتر (1505)",
            "nameTr": "2T Street Race Tam Sentetik Motor Yağı 1 Litre (1505)",
            "sku": "1505",
            "priceTry": 1187.5,
            "priceUsd": 25.27,
            "image": "assets/images/liqui-moly/product-1505.jpg",
            "url": "https://shop.egemot.com.tr/2t-street-race-tam-sentetik-motor-yagi-1-litre-1505-227",
            "category": "روغن موتور"
      },
      {
            "id": "20826",
            "name": "JASO MA2 onaylı scooter 10w40 motor yağı",
            "nameFa": "JASO MA2 onaylı scooter 10w40 روغن موتور",
            "nameTr": "JASO MA2 onaylı scooter 10w40 motor yağı",
            "sku": "20826",
            "priceTry": 501.84,
            "priceUsd": 10.68,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-scooter-race-motosiklet-motor-yagi-20826-3929.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-scooter-race-motosiklet-motor-yagi-20826",
            "category": "روغن موتور"
      },
      {
            "id": "21327",
            "name": "LIQUI MOLY 0W16 Motor Yağı Special Tec AA 4 Litre (21327)",
            "nameFa": "LIQUI MOLY 0W16 روغن موتور Special Tec AA 4 لیتر (21327)",
            "nameTr": "LIQUI MOLY 0W16 Motor Yağı Special Tec AA 4 Litre (21327)",
            "sku": "21327",
            "priceTry": 2944.84,
            "priceUsd": 62.66,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w16-motor-yagi-special-tec-aa-4-litre-21327-1131.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w16-motor-yagi-special-tec-aa-4-litre-21327",
            "category": "روغن موتور"
      },
      {
            "id": "21328",
            "name": "LIQUI MOLY 0W16 Motor Yağı Special Tec AA 5 Litre (21328)",
            "nameFa": "LIQUI MOLY 0W16 روغن موتور Special Tec AA 5 لیتر (21328)",
            "nameTr": "LIQUI MOLY 0W16 Motor Yağı Special Tec AA 5 Litre (21328)",
            "sku": "21328",
            "priceTry": 3631.01,
            "priceUsd": 77.26,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w16-motor-yagi-special-tec-aa-5-litre-21328-6638.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w16-motor-yagi-special-tec-aa-5-litre-21328",
            "category": "روغن موتور"
      },
      {
            "id": "6738",
            "name": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 1 Litre (6738)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 1 لیتر (6738)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 1 Litre (6738)",
            "sku": "6738",
            "priceTry": 815.59,
            "priceUsd": 17.35,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-aa-1-litre-6738-4511.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-special-tec-aa-1-litre-6738",
            "category": "روغن موتور"
      },
      {
            "id": "9705",
            "name": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 4 Litre (9705)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 4 لیتر (9705)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 4 Litre (9705)",
            "sku": "9705",
            "priceTry": 2927.36,
            "priceUsd": 62.28,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-aa-4-litre-9705-7694.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-special-tec-aa-4-litre-9705",
            "category": "روغن موتور"
      },
      {
            "id": "6739",
            "name": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 5 Litre (6739)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 5 لیتر (6739)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 5 Litre (6739)",
            "sku": "6739",
            "priceTry": 3649.69,
            "priceUsd": 77.65,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-aa-5-litre-6739-6893.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-special-tec-aa-5-litre-6739",
            "category": "روغن موتور"
      },
      {
            "id": "6310",
            "name": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 5 Litre (6739)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Special Tec AA 5 لیتر (6739)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Special Tec AA 5 Litre (6739)",
            "sku": "6310",
            "priceTry": 4214.02,
            "priceUsd": 89.66,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-6310-0w20-motor-yagi-5-litre-21882-1232.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-6310-0w20-motor-yagi-5-litre-21882",
            "category": "روغن موتور"
      },
      {
            "id": "20631",
            "name": "LIQUI MOLY 0W20 Motor Yağı Special Tec V 1 Litre (20631)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Special Tec V 1 لیتر (20631)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Special Tec V 1 Litre (20631)",
            "sku": "20631",
            "priceTry": 930.32,
            "priceUsd": 19.79,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-v-1-litre-20631-volvo-5128.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-special-tec-v-1-litre-20631-volvo",
            "category": "روغن موتور"
      },
      {
            "id": "20632",
            "name": "LIQUI MOLY 0W20 Motor Yağı Special Tec V 5 Litre (20632)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Special Tec V 5 لیتر (20632)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Special Tec V 5 Litre (20632)",
            "sku": "20632",
            "priceTry": 4146.84,
            "priceUsd": 88.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-special-tec-v-5-litre-20632-2188.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-special-tec-v-5-litre-20632",
            "category": "روغن موتور"
      },
      {
            "id": "6200",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6200 1 Litre (20787)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6200 1 لیتر (20787)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6200 1 Litre (20787)",
            "sku": "6200",
            "priceTry": 969.01,
            "priceUsd": 20.62,
            "image": "assets/images/liqui-moly/product-6200.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6200-1-litre-20787",
            "category": "روغن موتور"
      },
      {
            "id": "6200",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6200 4 Litre (20788)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6200 4 لیتر (20788)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6200 4 Litre (20788)",
            "sku": "6200",
            "priceTry": 3480.31,
            "priceUsd": 74.05,
            "image": "assets/images/liqui-moly/product-6200.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6200-4-litre-20788",
            "category": "روغن موتور"
      },
      {
            "id": "6200",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6200 5 Litre (20789)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6200 5 لیتر (20789)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6200 5 Litre (20789)",
            "sku": "6200",
            "priceTry": 4285.43,
            "priceUsd": 91.18,
            "image": "assets/images/liqui-moly/product-6200.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6200-5-litre-20789",
            "category": "روغن موتور"
      },
      {
            "id": "6400",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6400 5 Litre (21585)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6400 5 لیتر (21585)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6400 5 Litre (21585)",
            "sku": "6400",
            "priceTry": 4423.48,
            "priceUsd": 94.12,
            "image": "assets/images/liqui-moly/product-6400.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6400-5-litre-21585",
            "category": "روغن موتور"
      },
      {
            "id": "6600",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6600 5 Litre (21411)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6600 5 لیتر (21411)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6600 5 Litre (21411)",
            "sku": "6600",
            "priceTry": 4275.1,
            "priceUsd": 90.96,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w20-motor-yagi-top-tec-6600-5-litre-21411-1313.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6600-5-litre-21411",
            "category": "روغن موتور"
      },
      {
            "id": "6610",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6610 1 Litre (21660)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6610 1 لیتر (21660)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6610 1 Litre (21660)",
            "sku": "6610",
            "priceTry": 985.02,
            "priceUsd": 20.96,
            "image": "assets/images/liqui-moly/product-6610.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6610-1-litre-21660",
            "category": "روغن موتور"
      },
      {
            "id": "6610",
            "name": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6610 5 Litre (21662)",
            "nameFa": "LIQUI MOLY 0W20 روغن موتور Top Tec 6610 5 لیتر (21662)",
            "nameTr": "LIQUI MOLY 0W20 Motor Yağı Top Tec 6610 5 Litre (21662)",
            "sku": "6610",
            "priceTry": 4380.67,
            "priceUsd": 93.21,
            "image": "assets/images/liqui-moly/product-6610.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6610-5-litre-21662",
            "category": "روغن موتور"
      },
      {
            "id": "4210",
            "name": "LIQUI MOLY 0W30 VW Motor Yağı Tam Sentetik TOP TEC 4210 5 Litre (21605)",
            "nameFa": "LIQUI MOLY 0W30 VW روغن موتور تمام‌سنتتیک TOP TEC 4210 5 لیتر (21605)",
            "nameTr": "LIQUI MOLY 0W30 VW Motor Yağı Tam Sentetik TOP TEC 4210 5 Litre (21605)",
            "sku": "4210",
            "priceTry": 4582.22,
            "priceUsd": 97.49,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-tam-sentetik-top-tec-4210-5-litre-21605-8629.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w30-motor-yagi-tam-sentetik-top-tec-4210-5-litre-21605",
            "category": "روغن موتور"
      },
      {
            "id": "8903",
            "name": "LIQUI MOLY 0W30 Motor Yağı Special Tec F 5 Litre (8903)",
            "nameFa": "LIQUI MOLY 0W30 روغن موتور Special Tec F 5 لیتر (8903)",
            "nameTr": "LIQUI MOLY 0W30 Motor Yağı Special Tec F 5 Litre (8903)",
            "sku": "8903",
            "priceTry": 4421.03,
            "priceUsd": 94.06,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-special-tec-f-5-litre-8903-4097.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w30-motor-yagi-special-tec-f-5-litre-8903",
            "category": "روغن موتور"
      },
      {
            "id": "2853",
            "name": "LIQUI MOLY 0W30 Motor Yağı Special Tec Volvo 5 Litre (2853)",
            "nameFa": "LIQUI MOLY 0W30 روغن موتور Special Tec Volvo 5 لیتر (2853)",
            "nameTr": "LIQUI MOLY 0W30 Motor Yağı Special Tec Volvo 5 Litre (2853)",
            "sku": "2853",
            "priceTry": 4083.26,
            "priceUsd": 86.88,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-special-tec-v-5-litre-2853-9289.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w30-motor-yagi-special-tec-v-5-litre-2853",
            "category": "روغن موتور"
      },
      {
            "id": "8977",
            "name": "LIQUI MOLY 0W30 Motor Yağı Synthoil Longtime 5 Litre (8977)",
            "nameFa": "LIQUI MOLY 0W30 روغن موتور Synthoil Longtime 5 لیتر (8977)",
            "nameTr": "LIQUI MOLY 0W30 Motor Yağı Synthoil Longtime 5 Litre (8977)",
            "sku": "8977",
            "priceTry": 3774.81,
            "priceUsd": 80.32,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-synthoil-longtime-5-litre-8977-3459.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w30-motor-yagi-synthoil-longtime-5-litre-8977",
            "category": "روغن موتور"
      },
      {
            "id": "6100",
            "name": "LIQUI MOLY 0W30 Motor Yağı Top Tec 6100 5 Litre (20779)",
            "nameFa": "LIQUI MOLY 0W30 روغن موتور Top Tec 6100 5 لیتر (20779)",
            "nameTr": "LIQUI MOLY 0W30 Motor Yağı Top Tec 6100 5 Litre (20779)",
            "sku": "6100",
            "priceTry": 4553.31,
            "priceUsd": 96.88,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-top-tec-6100-5-litre-20779-2820.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w30-motor-yagi-top-tec-6100-5-litre-20779",
            "category": "روغن موتور"
      },
      {
            "id": "4310",
            "name": "LIQUI MOLY 0W30 Motor Yağı Tam Sentetik TOP TEC 4310 5 Litre (2362)",
            "nameFa": "LIQUI MOLY 0W30 روغن موتور تمام‌سنتتیک TOP TEC 4310 5 لیتر (2362)",
            "nameTr": "LIQUI MOLY 0W30 Motor Yağı Tam Sentetik TOP TEC 4310 5 Litre (2362)",
            "sku": "4310",
            "priceTry": 4777.51,
            "priceUsd": 101.65,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w30-motor-yagi-tam-sentetik-top-tec-4310-5-litre-2362-4495.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w30-motor-yagi-tam-sentetik-top-tec-4310-5-litre-2362",
            "category": "روغن موتور"
      },
      {
            "id": "9515",
            "name": "LIQUI MOLY 0W40 Synthoil Energy Tam Sentetik Motor Yağı 5 Litre (9515)",
            "nameFa": "LIQUI MOLY 0W40 Synthoil Energy تمام‌سنتتیک روغن موتور 5 لیتر (9515)",
            "nameTr": "LIQUI MOLY 0W40 Synthoil Energy Tam Sentetik Motor Yağı 5 Litre (9515)",
            "sku": "9515",
            "priceTry": 3912.18,
            "priceUsd": 83.24,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w40-synthoil-energy-tam-sentetik-motor-yagi-5-litre-9515-6467.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w40-synthoil-energy-tam-sentetik-motor-yagi-5-litre-9515",
            "category": "روغن موتور"
      },
      {
            "id": "21768",
            "name": "LIQUI MOLY 0W8 Motor Yağı Special Tec AA 4 Litre (21768)",
            "nameFa": "LIQUI MOLY 0W8 روغن موتور Special Tec AA 4 لیتر (21768)",
            "nameTr": "LIQUI MOLY 0W8 Motor Yağı Special Tec AA 4 Litre (21768)",
            "sku": "21768",
            "priceTry": 3082.42,
            "priceUsd": 65.58,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-0w8-motor-yagi-special-tec-aa-4-litre-21768-6019.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w8-motor-yagi-special-tec-aa-4-litre-21768",
            "category": "روغن موتور"
      },
      {
            "id": "1506",
            "name": "LIQUI MOLY 10W Medium Fork Oil - 10W Sentetik Amortisör Yağı (orta) 500ml (1506)",
            "nameFa": "LIQUI MOLY 10W Medium Fork Oil - 10W سنتتیک Amortisör Yağı (orta) 500ml (1506)",
            "nameTr": "LIQUI MOLY 10W Medium Fork Oil - 10W Sentetik Amortisör Yağı (orta) 500ml (1506)",
            "sku": "1506",
            "priceTry": 565.25,
            "priceUsd": 12.03,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-medium-fork-oil-10w-sentetik-orta-amortisor-yagi-500ml-1506-9639.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w-medium-fork-oil-10w-sentetik-orta-amortisor-yagi-500ml-1506",
            "category": "روغن موتور"
      },
      {
            "id": "25022",
            "name": "LIQUI MOLY 10W30 4T Marine Motor Yağı 1 Litre (25022)",
            "nameFa": "LIQUI MOLY 10W30 4T Marine روغن موتور 1 لیتر (25022)",
            "nameTr": "LIQUI MOLY 10W30 4T Marine Motor Yağı 1 Litre (25022)",
            "sku": "25022",
            "priceTry": 785.75,
            "priceUsd": 16.72,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w30-4t-marine-motor-yagi-1-litre-25022-1904.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w30-4t-marine-motor-yagi-1-litre-25022",
            "category": "روغن موتور"
      },
      {
            "id": "25023",
            "name": "LIQUI MOLY 10W30 4T Marine Motor Yağı 5 Litre (25023)",
            "nameFa": "LIQUI MOLY 10W30 4T Marine روغن موتور 5 لیتر (25023)",
            "nameTr": "LIQUI MOLY 10W30 4T Marine Motor Yağı 5 Litre (25023)",
            "sku": "25023",
            "priceTry": 3415.1,
            "priceUsd": 72.66,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w30-4t-marine-motor-yagi-5-litre-25023-5121.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w30-4t-marine-motor-yagi-5-litre-25023",
            "category": "روغن موتور"
      },
      {
            "id": "2526",
            "name": "LIQUI MOLY 10W30 4T Street Motosiklet Motor Yağı 1 Litre (2526)",
            "nameFa": "LIQUI MOLY 10W30 4T Street موتورسیکلت روغن موتور 1 لیتر (2526)",
            "nameTr": "LIQUI MOLY 10W30 4T Street Motosiklet Motor Yağı 1 Litre (2526)",
            "sku": "2526",
            "priceTry": 646.0,
            "priceUsd": 13.74,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w30-4t-street-motosiklet-motor-yagi-1-litre-2526-4011.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w30-4t-street-motosiklet-motor-yagi-1-litre-2526",
            "category": "روغن موتور"
      },
      {
            "id": "1688",
            "name": "LIQUI MOLY 10W30 4T Street Motosiklet Motor Yağı 4 Litre (1688)",
            "nameFa": "LIQUI MOLY 10W30 4T Street موتورسیکلت روغن موتور 4 لیتر (1688)",
            "nameTr": "LIQUI MOLY 10W30 4T Street Motosiklet Motor Yağı 4 Litre (1688)",
            "sku": "1688",
            "priceTry": 2350.0,
            "priceUsd": 50.0,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000586_liqui-moly-10w30-4t-street-motosiklet-motor-yagi-4-litre-1688_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w30-4t-street-motosiklet-motor-yagi-4-litre-1688",
            "category": "روغن موتور"
      },
      {
            "id": "3013",
            "name": "LIQUI MOLY 10W40 4T ATV Motor Yağı 1 Litre (3013)",
            "nameFa": "LIQUI MOLY 10W40 4T ATV روغن موتور 1 لیتر (3013)",
            "nameTr": "LIQUI MOLY 10W40 4T ATV Motor Yağı 1 Litre (3013)",
            "sku": "3013",
            "priceTry": 788.5,
            "priceUsd": 16.78,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-atv-motor-yagi-1-litre-3013-8213.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-atv-motor-yagi-1-litre-3013",
            "category": "روغن موتور"
      },
      {
            "id": "1618",
            "name": "LIQUI MOLY 10W40 4T Basic Scooter Motosiklet Motor Yağı 1 Litre (1618)",
            "nameFa": "LIQUI MOLY 10W40 4T Basic Scooter موتورسیکلت روغن موتور 1 لیتر (1618)",
            "nameTr": "LIQUI MOLY 10W40 4T Basic Scooter Motosiklet Motor Yağı 1 Litre (1618)",
            "sku": "1618",
            "priceTry": 574.75,
            "priceUsd": 12.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-basic-scooter-motosiklet-motor-yagi-1-litre-1618-2382.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-basic-scooter-motosiklet-motor-yagi-1-litre-1618",
            "category": "روغن موتور"
      },
      {
            "id": "3044",
            "name": "LIQUI MOLY 10W40 4T Basic Street Motosiklet Motor Yağı 1 Litre (3044)",
            "nameFa": "LIQUI MOLY 10W40 4T Basic Street موتورسیکلت روغن موتور 1 لیتر (3044)",
            "nameTr": "LIQUI MOLY 10W40 4T Basic Street Motosiklet Motor Yağı 1 Litre (3044)",
            "sku": "3044",
            "priceTry": 550.0,
            "priceUsd": 11.7,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-basic-street-motosiklet-motor-yagi-1-litre-3044-1013.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-basic-street-motosiklet-motor-yagi-1-litre-3044",
            "category": "روغن موتور"
      },
      {
            "id": "3055",
            "name": "LIQUI MOLY 10W40 4T Off Road Motosiklet Tam Sentetik Motor Yağı 1 Litre (3055)",
            "nameFa": "LIQUI MOLY 10W40 4T Off Road موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (3055)",
            "nameTr": "LIQUI MOLY 10W40 4T Off Road Motosiklet Tam Sentetik Motor Yağı 1 Litre (3055)",
            "sku": "3055",
            "priceTry": 712.5,
            "priceUsd": 15.16,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-off-road-motosiklet-tam-sentetik-motor-yagi-1litre-3055-2428.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-off-road-motosiklet-tam-sentetik-motor-yagi-1litre-3055",
            "category": "روغن موتور"
      },
      {
            "id": "20753",
            "name": "LIQUI MOLY 10W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 1 Litre (20753)",
            "nameFa": "LIQUI MOLY 10W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (20753)",
            "nameTr": "LIQUI MOLY 10W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 1 Litre (20753)",
            "sku": "20753",
            "priceTry": 1140.0,
            "priceUsd": 24.26,
            "image": "assets/images/liqui-moly/product-20753.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-race-motosiklet-tam-sentetik-motor-yagi-1-litre-20753",
            "category": "روغن موتور"
      },
      {
            "id": "20754",
            "name": "LIQUI MOLY 10W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 4 Litre (20754)",
            "nameFa": "LIQUI MOLY 10W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 4 لیتر (20754)",
            "nameTr": "LIQUI MOLY 10W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 4 Litre (20754)",
            "sku": "20754",
            "priceTry": 4417.5,
            "priceUsd": 93.99,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-race-motosiklet-motor-yagi-4-litre-20754-8892.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-race-motosiklet-motor-yagi-4-litre-20754",
            "category": "روغن موتور"
      },
      {
            "id": "20826",
            "name": "LIQUI MOLY 10W40 4T Scooter Race Motosiklet Motor Yağı 1 Litre (20826)",
            "nameFa": "LIQUI MOLY 10W40 4T Scooter Race موتورسیکلت روغن موتور 1 لیتر (20826)",
            "nameTr": "LIQUI MOLY 10W40 4T Scooter Race Motosiklet Motor Yağı 1 Litre (20826)",
            "sku": "20826",
            "priceTry": 501.84,
            "priceUsd": 10.68,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000885_liqui-moly-10w40-4t-scooter-race-motosiklet-motor-yagi-1-litre-20826_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-scooter-race-motosiklet-motor-yagi-1-litre-20826",
            "category": "روغن موتور"
      },
      {
            "id": "1521",
            "name": "LIQUI MOLY 10W40 4T Street Motosiklet Motor Yağı 1 Litre (1521)",
            "nameFa": "LIQUI MOLY 10W40 4T Street موتورسیکلت روغن موتور 1 لیتر (1521)",
            "nameTr": "LIQUI MOLY 10W40 4T Street Motosiklet Motor Yağı 1 Litre (1521)",
            "sku": "1521",
            "priceTry": 646.0,
            "priceUsd": 13.74,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-4t-street-motosiklet-motor-yagi-1-litre-1521-2085.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-street-motosiklet-motor-yagi-1-litre-1521",
            "category": "روغن موتور"
      },
      {
            "id": "1243",
            "name": "LIQUI MOLY 10W40 4T Street Motosiklet Motor Yağı 4 Litre (1243)",
            "nameFa": "LIQUI MOLY 10W40 4T Street موتورسیکلت روغن موتور 4 لیتر (1243)",
            "nameTr": "LIQUI MOLY 10W40 4T Street Motosiklet Motor Yağı 4 Litre (1243)",
            "sku": "1243",
            "priceTry": 2517.5,
            "priceUsd": 53.56,
            "image": "assets/images/liqui-moly/product-1243.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-4t-street-motosiklet-motor-yagi-4-litre-1243",
            "category": "روغن موتور"
      },
      {
            "id": "4050",
            "name": "LIQUI MOLY 10W40 Top Tec Truck 4050 Motor Yağı 20 Litre (3794)",
            "nameFa": "LIQUI MOLY 10W40 Top Tec Truck 4050 روغن موتور 20 لیتر (3794)",
            "nameTr": "LIQUI MOLY 10W40 Top Tec Truck 4050 Motor Yağı 20 Litre (3794)",
            "sku": "4050",
            "priceTry": 13387.52,
            "priceUsd": 284.84,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-truck-4050-motor-yagi-20-litre-3794-4689.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-truck-4050-motor-yagi-20-litre-3794",
            "category": "روغن موتور"
      },
      {
            "id": "6948",
            "name": "LIQUI MOLY 10W40 Motor Yağı Kısmi Sentetik MoS2'li LEICHTLAUF 4 Litre (6948)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Kısmi سنتتیک MoS2'li LEICHTLAUF 4 لیتر (6948)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Kısmi Sentetik MoS2'li LEICHTLAUF 4 Litre (6948)",
            "sku": "6948",
            "priceTry": 2590.02,
            "priceUsd": 55.11,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-motor-yagi-kismi-sentetik-mos2li-leichtlauf-4-litre-6948-1474.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-motor-yagi-kismi-sentetik-mos2li-leichtlauf-4-litre-6948",
            "category": "روغن موتور"
      },
      {
            "id": "2184",
            "name": "LIQUI MOLY 10W40 Motor Yağı Kısmi Sentetik MoS2'li LEICHTLAUF 5 Litre (2184)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Kısmi سنتتیک MoS2'li LEICHTLAUF 5 لیتر (2184)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Kısmi Sentetik MoS2'li LEICHTLAUF 5 Litre (2184)",
            "sku": "2184",
            "priceTry": 3193.68,
            "priceUsd": 67.95,
            "image": "https://www.liquimolyturkey.com/admin/resimler/10w40-motor-yagi-mos2li-leichtlauf-5-litre-2184-2330.jpg",
            "url": "https://shop.egemot.com.tr/10w40-motor-yagi-mos2li-leichtlauf-5-litre-2184",
            "category": "روغن موتور"
      },
      {
            "id": "8998",
            "name": "LIQUI MOLY 10W40 Motor Yağı Leichtlauf Perform 4 Litre (8998)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Leichtlauf Perform 4 لیتر (8998)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Leichtlauf Perform 4 Litre (8998)",
            "sku": "8998",
            "priceTry": 2210.07,
            "priceUsd": 47.02,
            "image": "assets/images/liqui-moly/product-8998.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-motor-yagi-leichtlauf-perform-4-litre-8998",
            "category": "روغن موتور"
      },
      {
            "id": "2626",
            "name": "LIQUI MOLY 10W40 Motor Yağı MoS2'li Kısmi Sentetik LEICHTLAUF 1 Litre (2626)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور MoS2'li Kısmi سنتتیک LEICHTLAUF 1 لیتر (2626)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı MoS2'li Kısmi Sentetik LEICHTLAUF 1 Litre (2626)",
            "sku": "2626",
            "priceTry": 738.72,
            "priceUsd": 15.72,
            "image": "https://www.liquimolyturkey.com/admin/resimler/10w40-motor-yagi-mos2li-kismi-sentetik-leichtlauf-1-litre-2626-2025.jpg",
            "url": "https://shop.egemot.com.tr/10w40-motor-yagi-mos2li-kismi-sentetik-leichtlauf-1-litre-2626",
            "category": "روغن موتور"
      },
      {
            "id": "9955",
            "name": "LIQUI MOLY 10W40 Motor Yağı Molygen New Generation 1 Litre (9955)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Molygen New Generation 1 لیتر (9955)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Molygen New Generation 1 Litre (9955)",
            "sku": "9955",
            "priceTry": 704.2,
            "priceUsd": 14.98,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-40-motor-yagi-molygen-new-generation-1-litre-9955-8189.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w-40-motor-yagi-molygen-new-generation-1-litre-9955",
            "category": "روغن موتور"
      },
      {
            "id": "8538",
            "name": "LIQUI MOLY 10W40 Motor Yağı Molygen New Generation 4 Litre (8538)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Molygen New Generation 4 لیتر (8538)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Molygen New Generation 4 Litre (8538)",
            "sku": "8538",
            "priceTry": 2517.94,
            "priceUsd": 53.57,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-40-motor-yagi-molygen-new-generation-4-litre-8538-8206.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w-40-motor-yagi-molygen-new-generation-4-litre-8538",
            "category": "روغن موتور"
      },
      {
            "id": "9951",
            "name": "LIQUI MOLY 10W40 Motor Yağı Molygen New Generation 5 Litre (9951)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Molygen New Generation 5 لیتر (9951)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Molygen New Generation 5 Litre (9951)",
            "sku": "9951",
            "priceTry": 3041.67,
            "priceUsd": 64.72,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w-40-motor-yagi-molygen-new-generation-5-litre-9951-7529.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w-40-motor-yagi-molygen-new-generation-5-litre-9951",
            "category": "روغن موتور"
      },
      {
            "id": "9503",
            "name": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 1 Litre (9503)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 1 لیتر (9503)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 1 Litre (9503)",
            "sku": "9503",
            "priceTry": 663.01,
            "priceUsd": 14.11,
            "image": "https://www.liquimolyturkey.com/admin/resimler/10w40-motor-yagi-super-sentetik-super-leichtlauf-1-litre-9503-7444.png",
            "url": "https://shop.egemot.com.tr/10w40-motor-yagi-super-sentetik-super-leichtlauf-1-litre-9503",
            "category": "روغن موتور"
      },
      {
            "id": "1304",
            "name": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 20 Litre (1304)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 20 لیتر (1304)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 20 Litre (1304)",
            "sku": "1304",
            "priceTry": 11076.2,
            "priceUsd": 235.66,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-motor-yagi-super-sentetik-super-leichtlauf-20-litre-1304-9885.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-motor-yagi-super-sentetik-super-leichtlauf-20-litre-1304",
            "category": "روغن موتور"
      },
      {
            "id": "9504",
            "name": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 4 Litre (9504)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 4 لیتر (9504)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 4 Litre (9504)",
            "sku": "9504",
            "priceTry": 2278.27,
            "priceUsd": 48.47,
            "image": "assets/images/liqui-moly/product-9504.webp",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-motor-yagi-tam-sentetik-4l-9504",
            "category": "روغن موتور"
      },
      {
            "id": "9505",
            "name": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 5 Litre (9505)",
            "nameFa": "LIQUI MOLY 10W40 روغن موتور Süper سنتتیک SUPER LEICHTLAUF 5 لیتر (9505)",
            "nameTr": "LIQUI MOLY 10W40 Motor Yağı Süper Sentetik SUPER LEICHTLAUF 5 Litre (9505)",
            "sku": "9505",
            "priceTry": 2827.7,
            "priceUsd": 60.16,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w40-motor-yagi-super-sentetik-super-leichtlauf-5-litre-9505-7628.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w40-motor-yagi-super-sentetik-super-leichtlauf-5-litre-9505",
            "category": "روغن موتور"
      },
      {
            "id": "3051",
            "name": "LIQUI MOLY 10W50 4T Off Road Motosiklet Tam Sentetik Motor Yağı 1 Litre (3051)",
            "nameFa": "LIQUI MOLY 10W50 4T Off Road موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (3051)",
            "nameTr": "LIQUI MOLY 10W50 4T Off Road Motosiklet Tam Sentetik Motor Yağı 1 Litre (3051)",
            "sku": "3051",
            "priceTry": 1070.0,
            "priceUsd": 22.77,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000847_liqui-moly-10w50-4t-off-road-motosiklet-tam-sentetik-motor-yagi-1-litre-3051_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w50-4t-offroad-motosiklet-tam-sentetik-motor-yagi-1-litre-3051",
            "category": "روغن موتور"
      },
      {
            "id": "30511",
            "name": "LIQUI MOLY 10W50 4T Off Road Motosiklet Tam Sentetik Motor Yağı 1 Litre (3051)",
            "nameFa": "LIQUI MOLY 10W50 4T Off Road موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (3051)",
            "nameTr": "LIQUI MOLY 10W50 4T Off Road Motosiklet Tam Sentetik Motor Yağı 1 Litre (3051)",
            "sku": "30511",
            "priceTry": 1140.0,
            "priceUsd": 24.26,
            "image": "assets/images/liqui-moly/product-30511.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w50-4t-off-road-motosiklet-tam-sentetik-motor-yagi-1-litre-30511",
            "category": "روغن موتور"
      },
      {
            "id": "1502",
            "name": "LIQUI MOLY 10W50 4T RACE Motosiklet Tam Sentetik Motor Yağı 1 Litre (1502)",
            "nameFa": "LIQUI MOLY 10W50 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (1502)",
            "nameTr": "LIQUI MOLY 10W50 4T RACE Motosiklet Tam Sentetik Motor Yağı 1 Litre (1502)",
            "sku": "1502",
            "priceTry": 1140.0,
            "priceUsd": 24.26,
            "image": "assets/images/liqui-moly/product-1502.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w50-4t-race-motosiklet-tam-sentetik-motor-yagi-1-litre-1502",
            "category": "روغن موتور"
      },
      {
            "id": "1686",
            "name": "LIQUI MOLY 10W50 4T RACE Motosiklet Tam Sentetik Motor Yağı 4 Litre (1686)",
            "nameFa": "LIQUI MOLY 10W50 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 4 لیتر (1686)",
            "nameTr": "LIQUI MOLY 10W50 4T RACE Motosiklet Tam Sentetik Motor Yağı 4 Litre (1686)",
            "sku": "1686",
            "priceTry": 4417.5,
            "priceUsd": 93.99,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w50-4t-race-motosiklet-tam-sentetik-motor-yagi-4-litre-1686-9791.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w50-4t-race-motosiklet-tam-sentetik-motor-yagi-4-litre-1686",
            "category": "روغن موتور"
      },
      {
            "id": "8908",
            "name": "LIQUI MOLY 10W60 Motor Yağı Synthoil Race Tech GT1 1 Litre (8908)",
            "nameFa": "LIQUI MOLY 10W60 روغن موتور Synthoil Race Tech GT1 1 لیتر (8908)",
            "nameTr": "LIQUI MOLY 10W60 Motor Yağı Synthoil Race Tech GT1 1 Litre (8908)",
            "sku": "8908",
            "priceTry": 903.98,
            "priceUsd": 19.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-1-litre-8908-2243.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-1-litre-8908",
            "category": "روغن موتور"
      },
      {
            "id": "7535",
            "name": "LIQUI MOLY 10W60 Motor Yağı Synthoil Race Tech GT1 4 Litre (7535)",
            "nameFa": "LIQUI MOLY 10W60 روغن موتور Synthoil Race Tech GT1 4 لیتر (7535)",
            "nameTr": "LIQUI MOLY 10W60 Motor Yağı Synthoil Race Tech GT1 4 Litre (7535)",
            "sku": "7535",
            "priceTry": 3270.9,
            "priceUsd": 69.59,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-4-litre-7535-2-6052.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-4-litre-7535-2",
            "category": "روغن موتور"
      },
      {
            "id": "8909",
            "name": "LIQUI MOLY 10W60 Motor Yağı Synthoil Race Tech GT1 5 Litre (8909)",
            "nameFa": "LIQUI MOLY 10W60 روغن موتور Synthoil Race Tech GT1 5 لیتر (8909)",
            "nameTr": "LIQUI MOLY 10W60 Motor Yağı Synthoil Race Tech GT1 5 Litre (8909)",
            "sku": "8909",
            "priceTry": 3857.96,
            "priceUsd": 82.08,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-5-litre-8909-9096.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-10w60-motor-yagi-synthoil-race-tech-gt1-5-litre-8909",
            "category": "روغن موتور"
      },
      {
            "id": "25015",
            "name": "LIQUI MOLY 15W40 4T Marine Motor Yağı 1 Litre (25015)",
            "nameFa": "LIQUI MOLY 15W40 4T Marine روغن موتور 1 لیتر (25015)",
            "nameTr": "LIQUI MOLY 15W40 4T Marine Motor Yağı 1 Litre (25015)",
            "sku": "25015",
            "priceTry": 490.82,
            "priceUsd": 10.44,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000884_liqui-moly-15w40-4t-marine-motor-yagi-1-litre-25015_550.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-15w40-4t-marine-motor-yagi-1-litre-25015",
            "category": "روغن موتور"
      },
      {
            "id": "25016",
            "name": "LIQUI MOLY 15W40 4T Marine Motor Yağı 5 Litre (25016)",
            "nameFa": "LIQUI MOLY 15W40 4T Marine روغن موتور 5 لیتر (25016)",
            "nameTr": "LIQUI MOLY 15W40 4T Marine Motor Yağı 5 Litre (25016)",
            "sku": "25016",
            "priceTry": 1973.45,
            "priceUsd": 41.99,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000883_liqui-moly-15w40-4t-marine-motor-yagi-5-litre-25016_550.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-15w40-4t-marine-motor-yagi-5-litre-25016",
            "category": "روغن موتور"
      },
      {
            "id": "2555",
            "name": "LIQUI MOLY 15W50 4T Street Motosiklet Motor Yağı 1 Litre (2555)",
            "nameFa": "LIQUI MOLY 15W50 4T Street موتورسیکلت روغن موتور 1 لیتر (2555)",
            "nameTr": "LIQUI MOLY 15W50 4T Street Motosiklet Motor Yağı 1 Litre (2555)",
            "sku": "2555",
            "priceTry": 646.0,
            "priceUsd": 13.74,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-15w50-4t-street-motosiklet-motor-yagi-1-litre-2555-3992.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-15w50-4t-street-motosiklet-motor-yagi-1-litre-2555",
            "category": "روغن موتور"
      },
      {
            "id": "1689",
            "name": "LIQUI MOLY 15W50 4T Street Motosiklet Motor Yağı 4 Litre (1689)",
            "nameFa": "LIQUI MOLY 15W50 4T Street موتورسیکلت روغن موتور 4 لیتر (1689)",
            "nameTr": "LIQUI MOLY 15W50 4T Street Motosiklet Motor Yağı 4 Litre (1689)",
            "sku": "1689",
            "priceTry": 2517.5,
            "priceUsd": 53.56,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-15w50-4t-street-motosiklet-motor-yagi-4-litre-1689-4463.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-15w50-4t-street-motosiklet-motor-yagi-4-litre-1689",
            "category": "روغن موتور"
      },
      {
            "id": "2539",
            "name": "LIQUI MOLY 15W50 Motor Yağı Molygen New Generation 4 Litre (2539)",
            "nameFa": "LIQUI MOLY 15W50 روغن موتور Molygen New Generation 4 لیتر (2539)",
            "nameTr": "LIQUI MOLY 15W50 Motor Yağı Molygen New Generation 4 Litre (2539)",
            "sku": "2539",
            "priceTry": 2402.59,
            "priceUsd": 51.12,
            "image": "assets/images/liqui-moly/product-2539.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-15w50-motor-yagi-molygen-new-generation-4-litre-2539",
            "category": "روغن موتور"
      },
      {
            "id": "1500",
            "name": "LIQUI MOLY 20W50 4T Basic Street Motosiklet Motor Yağı 1 Litre (1500)",
            "nameFa": "LIQUI MOLY 20W50 4T Basic Street موتورسیکلت روغن موتور 1 لیتر (1500)",
            "nameTr": "LIQUI MOLY 20W50 4T Basic Street Motosiklet Motor Yağı 1 Litre (1500)",
            "sku": "1500",
            "priceTry": 570.0,
            "priceUsd": 12.13,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-20w50-4t-basic-street-motosiklet-motor-yagi-1-litre-1500-7373.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-20w50-4t-basic-street-motosiklet-motor-yagi-1-litre-1500",
            "category": "روغن موتور"
      },
      {
            "id": "21358",
            "name": "LIQUI MOLY 20W50 Mineral Motor Yağı MoS2'li LEICHTLAUF 4 Litre (21358)",
            "nameFa": "LIQUI MOLY 20W50 مینرال روغن موتور MoS2'li LEICHTLAUF 4 لیتر (21358)",
            "nameTr": "LIQUI MOLY 20W50 Mineral Motor Yağı MoS2'li LEICHTLAUF 4 Litre (21358)",
            "sku": "21358",
            "priceTry": 2609.34,
            "priceUsd": 55.52,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-20w50-motor-yagi-kismi-sentetik-mos2li-leichtlauf-4-litre-21358-7337.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-20w50-motor-yagi-kismi-sentetik-mos2li-leichtlauf-4-litre-21358",
            "category": "روغن موتور"
      },
      {
            "id": "25026",
            "name": "LIQUI MOLY 25W40 4T Marine Motor Yağı 1 Litre (25026)",
            "nameFa": "LIQUI MOLY 25W40 4T Marine روغن موتور 1 لیتر (25026)",
            "nameTr": "LIQUI MOLY 25W40 4T Marine Motor Yağı 1 Litre (25026)",
            "sku": "25026",
            "priceTry": 771.24,
            "priceUsd": 16.41,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-25w40-4t-marine-motor-yagi-1-litre-25026-7280.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-25w40-4t-marine-motor-yagi-1-litre-25026",
            "category": "روغن موتور"
      },
      {
            "id": "25027",
            "name": "LIQUI MOLY 25W40 4T Marine Motor Yağı 5 Litre (25027)",
            "nameFa": "LIQUI MOLY 25W40 4T Marine روغن موتور 5 لیتر (25027)",
            "nameTr": "LIQUI MOLY 25W40 4T Marine Motor Yağı 5 Litre (25027)",
            "sku": "25027",
            "priceTry": 3365.24,
            "priceUsd": 71.6,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-25w40-4t-marine-motor-yagi-25027-8358.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-25w40-4t-marine-motor-yagi-25027",
            "category": "روغن موتور"
      },
      {
            "id": "3065",
            "name": "LIQUI MOLY 2T Off Road Motosiklet Yarı Sentetik Motor Yağı 1 Litre (3065)",
            "nameFa": "LIQUI MOLY 2T Off Road موتورسیکلت Yarı سنتتیک روغن موتور 1 لیتر (3065)",
            "nameTr": "LIQUI MOLY 2T Off Road Motosiklet Yarı Sentetik Motor Yağı 1 Litre (3065)",
            "sku": "3065",
            "priceTry": 921.5,
            "priceUsd": 19.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-2t-off-road-motosiklet-yari-sentetik-motor-yagi-1-litre-3065-2673.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-2t-off-road-motosiklet-yari-sentetik-motor-yagi-1-litre-3065",
            "category": "روغن موتور"
      },
      {
            "id": "3841",
            "name": "LIQUI MOLY 5W20 Motor Yağı Special Tec Ford Eco 5 Litre (3841)",
            "nameFa": "LIQUI MOLY 5W20 روغن موتور Special Tec Ford Eco 5 لیتر (3841)",
            "nameTr": "LIQUI MOLY 5W20 Motor Yağı Special Tec Ford Eco 5 Litre (3841)",
            "sku": "3841",
            "priceTry": 4046.9,
            "priceUsd": 86.1,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w20-motor-yagi-special-tec-ford-eco-5-litre-3841-8876.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w20-motor-yagi-special-tec-ford-eco-5-litre-3841",
            "category": "روغن موتور"
      },
      {
            "id": "21224",
            "name": "LIQUI MOLY 5W30 DPF Motor Yağı Molygen New Generation Advance Full Sentetik 1 Litre (21224)",
            "nameFa": "LIQUI MOLY 5W30 DPF روغن موتور Molygen New Generation Advance Full سنتتیک 1 لیتر (21224)",
            "nameTr": "LIQUI MOLY 5W30 DPF Motor Yağı Molygen New Generation Advance Full Sentetik 1 Litre (21224)",
            "sku": "21224",
            "priceTry": 838.61,
            "priceUsd": 17.84,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-dpf-motor-yagi-molygen-new-generation-1-litre-21224-4526.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-dpf-motor-yagi-molygen-new-generation-1-litre-21224",
            "category": "روغن موتور"
      },
      {
            "id": "21225",
            "name": "LIQUI MOLY 5W30 DPF Motor Yağı Molygen New Generation Advance Full Sentetik 4 Litre (21225)",
            "nameFa": "LIQUI MOLY 5W30 DPF روغن موتور Molygen New Generation Advance Full سنتتیک 4 لیتر (21225)",
            "nameTr": "LIQUI MOLY 5W30 DPF Motor Yağı Molygen New Generation Advance Full Sentetik 4 Litre (21225)",
            "sku": "21225",
            "priceTry": 3199.66,
            "priceUsd": 68.08,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-dpf-motor-yagi-molygen-new-generation-4-litre-21225-4979.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-dpf-motor-yagi-molygen-new-generation-4-litre-21225",
            "category": "روغن موتور"
      },
      {
            "id": "liqui-moly-5w30-synthoil-high-tech-tam-sentetik-",
            "name": "LIQUI MOLY 5W30 Synthoil High Tech Tam Sentetik Motor Yağı",
            "nameFa": "LIQUI MOLY 5W30 Synthoil High Tech تمام‌سنتتیک روغن موتور",
            "nameTr": "LIQUI MOLY 5W30 Synthoil High Tech Tam Sentetik Motor Yağı",
            "sku": null,
            "priceTry": 3910.88,
            "priceUsd": 83.21,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-synthoil-high-tech-tam-sentetik-motor-yagi-7090.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-synthoil-high-tech-tam-sentetik-motor-yagi",
            "category": "روغن موتور"
      },
      {
            "id": "1144",
            "name": "LIQUI MOLY 5W30 Motor Yağı DPF'li Sentetik LONGTIME HIGH TECH 4 Litre (1144)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور DPF'li سنتتیک LONGTIME HIGH TECH 4 لیتر (1144)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı DPF'li Sentetik LONGTIME HIGH TECH 4 Litre (1144)",
            "sku": "1144",
            "priceTry": 2960.34,
            "priceUsd": 62.99,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-dpfli-sentetik-longtime-high-tech-4-litre-1144-9605.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-dpfli-sentetik-longtime-high-tech-4-litre-1144",
            "category": "روغن موتور"
      },
      {
            "id": "9507",
            "name": "LIQUI MOLY 5W30 Motor Yağı DPF'li Sentetik LONGTIME HIGH TECH 5 Litre (9507)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور DPF'li سنتتیک LONGTIME HIGH TECH 5 لیتر (9507)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı DPF'li Sentetik LONGTIME HIGH TECH 5 Litre (9507)",
            "sku": "9507",
            "priceTry": 3404.82,
            "priceUsd": 72.44,
            "image": "https://www.liquimolyturkey.com/admin/resimler/5w30-motor-yagi-dpfli-sentetik-5-litre-9507-7272.jpg",
            "url": "https://shop.egemot.com.tr/5w30-motor-yagi-dpfli-sentetik-5-litre-9507",
            "category": "روغن موتور"
      },
      {
            "id": "9506",
            "name": "LIQUI MOLY 5W30 Motor Yağı DPF'li Sentetik LONGTIME HIGH TECH1 Litre (9506)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور DPF'li سنتتیک LONGTIME HIGH TECH1 لیتر (9506)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı DPF'li Sentetik LONGTIME HIGH TECH1 Litre (9506)",
            "sku": "9506",
            "priceTry": 835.74,
            "priceUsd": 17.78,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-longtime-high-tech-1litre-9506-9661.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-longtime-high-tech-1litre-9506",
            "category": "روغن موتور"
      },
      {
            "id": "8541",
            "name": "LIQUI MOLY 5W30 Motor Yağı Leichtlauf HC7 1 Litre (8541)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Leichtlauf HC7 1 لیتر (8541)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Leichtlauf HC7 1 Litre (8541)",
            "sku": "8541",
            "priceTry": 813.09,
            "priceUsd": 17.3,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-1-litre-8541-5778.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-1-litre-8541",
            "category": "روغن موتور"
      },
      {
            "id": "8641",
            "name": "LIQUI MOLY 5W30 Motor Yağı Leichtlauf HC7 4 Litre (8461)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Leichtlauf HC7 4 لیتر (8461)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Leichtlauf HC7 4 Litre (8461)",
            "sku": "8641",
            "priceTry": 2874.49,
            "priceUsd": 61.16,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-4-litre-8641-9944.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-4-litre-8641",
            "category": "روغن موتور"
      },
      {
            "id": "8542",
            "name": "LIQUI MOLY 5W30 Motor Yağı Leichtlauf HC7 5 Litre (8542)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Leichtlauf HC7 5 لیتر (8542)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Leichtlauf HC7 5 Litre (8542)",
            "sku": "8542",
            "priceTry": 3573.95,
            "priceUsd": 76.04,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-5litre-8542-5648.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-leichtlauf-hc7-5litre-8542",
            "category": "روغن موتور"
      },
      {
            "id": "9047",
            "name": "LIQUI MOLY 5W30 Motor Yağı Molygen New Generation Advance Full Sentetik 1 Litre (9047)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Molygen New Generation Advance Full سنتتیک 1 لیتر (9047)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Molygen New Generation Advance Full Sentetik 1 Litre (9047)",
            "sku": "9047",
            "priceTry": 782.4,
            "priceUsd": 16.65,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-molygen-new-generation-1-litre-9047-6999.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-molygen-new-generation-1-litre-9047",
            "category": "روغن موتور"
      },
      {
            "id": "9089",
            "name": "LIQUI MOLY 5W30 Motor Yağı Molygen New Generation Advance Full Sentetik 4 Litre (9089)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Molygen New Generation Advance Full سنتتیک 4 لیتر (9089)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Molygen New Generation Advance Full Sentetik 4 Litre (9089)",
            "sku": "9089",
            "priceTry": 2974.86,
            "priceUsd": 63.29,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-molygen-new-generation-5-litre-9089-7788.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-molygen-new-generation-5-litre-9089",
            "category": "روغن موتور"
      },
      {
            "id": "9952",
            "name": "LIQUI MOLY 5W30 Motor Yağı Molygen New Generation Advance Full Sentetik 5 Litre (9952)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Molygen New Generation Advance Full سنتتیک 5 لیتر (9952)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Molygen New Generation Advance Full Sentetik 5 Litre (9952)",
            "sku": "9952",
            "priceTry": 3698.56,
            "priceUsd": 78.69,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-molygen-new-generation-5-litre-9952-7961.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-molygen-new-generation-5-litre-9952",
            "category": "روغن موتور"
      },
      {
            "id": "2325",
            "name": "LIQUI MOLY 5W30 Motor Yağı Special Tec F 1 Litre (2325)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Special Tec F 1 لیتر (2325)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Special Tec F 1 Litre (2325)",
            "sku": "2325",
            "priceTry": 855.95,
            "priceUsd": 18.21,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-special-tec-f-1-litre-2325-8970.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-special-tec-f-1-litre-2325",
            "category": "روغن موتور"
      },
      {
            "id": "2326",
            "name": "LIQUI MOLY 5W30 Motor Yağı Special Tec F 5 Litre (2326)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Special Tec F 5 لیتر (2326)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Special Tec F 5 Litre (2326)",
            "sku": "2326",
            "priceTry": 3812.17,
            "priceUsd": 81.11,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-special-tec-f-5-litre-2326-3558.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-special-tec-f-5-litre-2326",
            "category": "روغن موتور"
      },
      {
            "id": "4400",
            "name": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4400 1 Litre (2319)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Top Tec 4400 1 لیتر (2319)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4400 1 Litre (2319)",
            "sku": "4400",
            "priceTry": 985.19,
            "priceUsd": 20.96,
            "image": "assets/images/liqui-moly/product-4400.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-top-tec-4400-1-litre-2319",
            "category": "روغن موتور"
      },
      {
            "id": "4400",
            "name": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4400 5 Litre (2322)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Top Tec 4400 5 لیتر (2322)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4400 5 Litre (2322)",
            "sku": "4400",
            "priceTry": 4385.4,
            "priceUsd": 93.31,
            "image": "assets/images/liqui-moly/product-4400.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-top-tec-4400-5-litre-2322",
            "category": "روغن موتور"
      },
      {
            "id": "4410",
            "name": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4410 1 Litre (21402)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Top Tec 4410 1 لیتر (21402)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4410 1 Litre (21402)",
            "sku": "4410",
            "priceTry": 945.17,
            "priceUsd": 20.11,
            "image": "assets/images/liqui-moly/product-4410.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-top-tec-4410-1-litre-21402",
            "category": "روغن موتور"
      },
      {
            "id": "4410",
            "name": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4410 5 Litre (21404)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Top Tec 4410 5 لیتر (21404)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Top Tec 4410 5 Litre (21404)",
            "sku": "4410",
            "priceTry": 4290.91,
            "priceUsd": 91.3,
            "image": "assets/images/liqui-moly/product-4410.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-top-tec-4410-5-litre-21404",
            "category": "روغن موتور"
      },
      {
            "id": "6400",
            "name": "LIQUI MOLY 5W30 Motor Yağı Top Tec 6400 1 Litre (21584)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور Top Tec 6400 1 لیتر (21584)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Top Tec 6400 1 Litre (21584)",
            "sku": "6400",
            "priceTry": 977.02,
            "priceUsd": 20.79,
            "image": "assets/images/liqui-moly/product-6400.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-0w20-motor-yagi-top-tec-6400-1-litre-21584",
            "category": "روغن موتور"
      },
      {
            "id": "4200",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4200 1 Litre (8972)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4200 1 لیتر (8972)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4200 1 Litre (8972)",
            "sku": "4200",
            "priceTry": 976.54,
            "priceUsd": 20.78,
            "image": "assets/images/liqui-moly/product-4200.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4200-1-litre-8972",
            "category": "روغن موتور"
      },
      {
            "id": "4200",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4200 4Litre (3715)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4200 4لیتر (3715)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4200 4Litre (3715)",
            "sku": "4200",
            "priceTry": 3505.03,
            "priceUsd": 74.58,
            "image": "assets/images/liqui-moly/product-4200.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4200-4litre-3715",
            "category": "روغن موتور"
      },
      {
            "id": "4200",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4200 5 Litre (8973)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4200 5 لیتر (8973)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4200 5 Litre (8973)",
            "sku": "4200",
            "priceTry": 4313.74,
            "priceUsd": 91.78,
            "image": "assets/images/liqui-moly/product-4200.jpg",
            "url": "https://shop.egemot.com.tr/5w30-motor-yagi-tam-sentetik-top-tec-4200-5-litre-8973",
            "category": "روغن موتور"
      },
      {
            "id": "4300",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4300 5 Litre (2324)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4300 5 لیتر (2324)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4300 5 Litre (2324)",
            "sku": "4300",
            "priceTry": 3759.65,
            "priceUsd": 79.99,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4300-5-litre-2324-2819.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4300-5-litre-2324",
            "category": "روغن موتور"
      },
      {
            "id": "4500",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4500 1 Litre (2317)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4500 1 لیتر (2317)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4500 1 Litre (2317)",
            "sku": "4500",
            "priceTry": 969.18,
            "priceUsd": 20.62,
            "image": "assets/images/liqui-moly/product-4500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4500-1-litre-2317",
            "category": "روغن موتور"
      },
      {
            "id": "4500",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4500 5 Litre (2318)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4500 5 لیتر (2318)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4500 5 Litre (2318)",
            "sku": "4500",
            "priceTry": 4279.77,
            "priceUsd": 91.06,
            "image": "assets/images/liqui-moly/product-4500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4500-5-litre-2318",
            "category": "روغن موتور"
      },
      {
            "id": "4600",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4600 1 Litre (2315)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4600 1 لیتر (2315)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4600 1 Litre (2315)",
            "sku": "4600",
            "priceTry": 849.11,
            "priceUsd": 18.07,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-1-litre-2315-4550.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-1-litre-2315",
            "category": "روغن موتور"
      },
      {
            "id": "4600",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4600 4 Litre (3763)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4600 4 لیتر (3763)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4600 4 Litre (3763)",
            "sku": "4600",
            "priceTry": 3009.59,
            "priceUsd": 64.03,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-4-litre-3763-3016.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-4-litre-3763",
            "category": "روغن موتور"
      },
      {
            "id": "4600",
            "name": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4600 5 Litre (2316)",
            "nameFa": "LIQUI MOLY 5W30 روغن موتور تمام‌سنتتیک TOP TEC 4600 5 لیتر (2316)",
            "nameTr": "LIQUI MOLY 5W30 Motor Yağı Tam Sentetik TOP TEC 4600 5 Litre (2316)",
            "sku": "4600",
            "priceTry": 3716.84,
            "priceUsd": 79.08,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-5-litre-2316-7013.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w30-motor-yagi-tam-sentetik-top-tec-4600-5-litre-2316",
            "category": "روغن موتور"
      },
      {
            "id": "2592",
            "name": "LIQUI MOLY 5W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 1 Litre (2592)",
            "nameFa": "LIQUI MOLY 5W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 1 لیتر (2592)",
            "nameTr": "LIQUI MOLY 5W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 1 Litre (2592)",
            "sku": "2592",
            "priceTry": 1140.0,
            "priceUsd": 24.26,
            "image": "assets/images/liqui-moly/product-2592.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-4t-race-motosiklet-tam-sentetik-motor-yagi-1-litre-2592",
            "category": "روغن موتور"
      },
      {
            "id": "1685",
            "name": "LIQUI MOLY 5W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 4 Litre (1685)",
            "nameFa": "LIQUI MOLY 5W40 4T RACE موتورسیکلت تمام‌سنتتیک روغن موتور 4 لیتر (1685)",
            "nameTr": "LIQUI MOLY 5W40 4T RACE Motosiklet Tam Sentetik Motor Yağı 4 Litre (1685)",
            "sku": "1685",
            "priceTry": 4417.5,
            "priceUsd": 93.99,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-4t-motosiklet-tam-sentetik-motor-yagi-bmw-gs-4-litre-1685-5564.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-4t-motosiklet-tam-sentetik-motor-yagi-bmw-gs-4-litre-1685",
            "category": "روغن موتور"
      },
      {
            "id": "1855",
            "name": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 1 Litre (1855)",
            "nameFa": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 1 لیتر (1855)",
            "nameTr": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 1 Litre (1855)",
            "sku": "1855",
            "priceTry": 870.46,
            "priceUsd": 18.52,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-1-litre-1855-4759.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-1-litre-1855",
            "category": "روغن موتور"
      },
      {
            "id": "1856",
            "name": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 1 Litre (1855)",
            "nameFa": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 1 لیتر (1855)",
            "nameTr": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 1 Litre (1855)",
            "sku": "1856",
            "priceTry": 3789.28,
            "priceUsd": 80.62,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-5-litre-1856-8057.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-5-litre-1856",
            "category": "روغن موتور"
      },
      {
            "id": "2194",
            "name": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 4 Litre (2194)",
            "nameFa": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 4 لیتر (2194)",
            "nameTr": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 4 Litre (2194)",
            "sku": "2194",
            "priceTry": 2403.94,
            "priceUsd": 51.15,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000811_liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-4-litre-2194_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-4-litre-2194",
            "category": "روغن موتور"
      },
      {
            "id": "1856",
            "name": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 5 Litre (1856)",
            "nameFa": "LIQUI MOLY 5W40 Synthoil High Tech تمام‌سنتتیک روغن موتور 5 لیتر (1856)",
            "nameTr": "LIQUI MOLY 5W40 Synthoil High Tech Tam Sentetik Motor Yağı 5 Litre (1856)",
            "sku": "1856",
            "priceTry": 2841.75,
            "priceUsd": 60.46,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000913_liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-5-litre-1856_550.png",
            "url": "https://shop.egemot.com.tr/copy-of-liqui-moly-5w40-synthoil-high-tech-tam-sentetik-motor-yagi-5-litre-1856",
            "category": "روغن موتور"
      },
      {
            "id": "8576",
            "name": "LIQUI MOLY 5W40 Motor Yağı Molygen New Generation 1 Litre (8576)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور Molygen New Generation 1 لیتر (8576)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı Molygen New Generation 1 Litre (8576)",
            "sku": "8576",
            "priceTry": 850.44,
            "priceUsd": 18.09,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-molygen-new-generation-1-litre-8576-6915.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-motor-yagi-molygen-new-generation-1-litre-8576",
            "category": "روغن موتور"
      },
      {
            "id": "8536",
            "name": "LIQUI MOLY 5W40 Motor Yağı Molygen New Generation 5 Litre (8536)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور Molygen New Generation 5 لیتر (8536)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı Molygen New Generation 5 Litre (8536)",
            "sku": "8536",
            "priceTry": 3807.96,
            "priceUsd": 81.02,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-molygen-new-generation-5-litre-8536-2383.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-motor-yagi-molygen-new-generation-5-litre-8536",
            "category": "روغن موتور"
      },
      {
            "id": "4100",
            "name": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4100 Tam Sentetik 1 Litre (9510)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4100 تمام‌سنتتیک 1 لیتر (9510)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4100 Tam Sentetik 1 Litre (9510)",
            "sku": "4100",
            "priceTry": 902.64,
            "priceUsd": 19.21,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-top-tec-4100-tam-sentetik-1-litre-9510-1674.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-motor-yagi-top-tec-4100-tam-sentetik-1-litre-9510",
            "category": "روغن موتور"
      },
      {
            "id": "4100",
            "name": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4100 Tam Sentetik 4 Litre (2195)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4100 تمام‌سنتتیک 4 لیتر (2195)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4100 Tam Sentetik 4 Litre (2195)",
            "sku": "4100",
            "priceTry": 3248.64,
            "priceUsd": 69.12,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-top-tec-4100-tam-sentetik-4-litre-2195-4358.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-motor-yagi-top-tec-4100-tam-sentetik-4-litre-2195",
            "category": "روغن موتور"
      },
      {
            "id": "4100",
            "name": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4100 Tam Sentetik 5 Litre (9511)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4100 تمام‌سنتتیک 5 لیتر (9511)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4100 Tam Sentetik 5 Litre (9511)",
            "sku": "4100",
            "priceTry": 3968.37,
            "priceUsd": 84.43,
            "image": "https://www.liquimolyturkey.com/admin/resimler/5w40-motor-yagi-top-tec-4100-tam-sentetik-5-litre-9511-4984.jpg",
            "url": "https://shop.egemot.com.tr/5w40-motor-yagi-top-tec-4100-tam-sentetik-5-litre-9511",
            "category": "روغن موتور"
      },
      {
            "id": "4110",
            "name": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4110 Tam Sentetik 5 Litre (21479)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور TOP TEC 4110 تمام‌سنتتیک 5 لیتر (21479)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı TOP TEC 4110 Tam Sentetik 5 Litre (21479)",
            "sku": "4110",
            "priceTry": 4179.08,
            "priceUsd": 88.92,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-top-tec-4110-tam-sentetik-5-litre-21479-8108.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-motor-yagi-top-tec-4110-tam-sentetik-5-litre-21479",
            "category": "روغن موتور"
      },
      {
            "id": "1346",
            "name": "LIQUI MOLY 5W40 Motor Yağı Sentetik LEICHTLAUF HC7 1 Litre (1346)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور سنتتیک LEICHTLAUF HC7 1 لیتر (1346)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı Sentetik LEICHTLAUF HC7 1 Litre (1346)",
            "sku": "1346",
            "priceTry": 805.25,
            "priceUsd": 17.13,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w40-motor-yagi-sentetik-leichtlauf-hc7-1-litre-1346-2-5785.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w40-motor-yagi-sentetik-leichtlauf-hc7-1-litre-1346-2",
            "category": "روغن موتور"
      },
      {
            "id": "1382",
            "name": "LIQUI MOLY 5W40 Motor Yağı Sentetik LEICHTLAUF HC7 4 Litre (1382)",
            "nameFa": "LIQUI MOLY 5W40 روغن موتور سنتتیک LEICHTLAUF HC7 4 لیتر (1382)",
            "nameTr": "LIQUI MOLY 5W40 Motor Yağı Sentetik LEICHTLAUF HC7 4 Litre (1382)",
            "sku": "1382",
            "priceTry": 2944.55,
            "priceUsd": 62.65,
            "image": "https://www.liquimolyturkey.com/admin/resimler/5w40-motor-yagi-sentetik-leichtlauf-hc7-4-litre-1382-4194.jpg",
            "url": "https://shop.egemot.com.tr/5w40-motor-yagi-sentetik-leichtlauf-hc7-4-litre-1382",
            "category": "روغن موتور"
      },
      {
            "id": "2542",
            "name": "LIQUI MOLY 5W50 Tam Sentetik Motor Yağı Molygen New Generation 1 Litre (2542)",
            "nameFa": "LIQUI MOLY 5W50 تمام‌سنتتیک روغن موتور Molygen New Generation 1 لیتر (2542)",
            "nameTr": "LIQUI MOLY 5W50 Tam Sentetik Motor Yağı Molygen New Generation 1 Litre (2542)",
            "sku": "2542",
            "priceTry": 894.47,
            "priceUsd": 19.03,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w50-motor-yagi-molygen-new-generation-1-litre-2542-1257.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w50-motor-yagi-molygen-new-generation-1-litre-2542",
            "category": "روغن موتور"
      },
      {
            "id": "2543",
            "name": "LIQUI MOLY 5W50 Tam Sentetik Motor Yağı Molygen New Generation 4 Litre (2543)",
            "nameFa": "LIQUI MOLY 5W50 تمام‌سنتتیک روغن موتور Molygen New Generation 4 لیتر (2543)",
            "nameTr": "LIQUI MOLY 5W50 Tam Sentetik Motor Yağı Molygen New Generation 4 Litre (2543)",
            "sku": "2543",
            "priceTry": 3267.03,
            "priceUsd": 69.51,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-5w50-motor-yagi-molygen-new-generation-4-litre-2543-3754.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-5w50-motor-yagi-molygen-new-generation-4-litre-2543",
            "category": "روغن موتور"
      },
      {
            "id": "3821",
            "name": "LIQUI MOLY 80W90 Motosiklet Şanzıman Yağı 1 Litre (3821)",
            "nameFa": "LIQUI MOLY 80W90 موتورسیکلت روغن گیربکس 1 لیتر (3821)",
            "nameTr": "LIQUI MOLY 80W90 Motosiklet Şanzıman Yağı 1 Litre (3821)",
            "sku": "3821",
            "priceTry": 893.0,
            "priceUsd": 19.0,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-80w90-motosiklet-sanziman-yagi-1-litre-3821-3059.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-80w90-motosiklet-sanziman-yagi-1-litre-3821",
            "category": "روغن موتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Cera Tec 300 ml (7181)",
            "nameFa": "LIQUI MOLY Cera Tec 300 ml (7181)",
            "nameTr": "LIQUI MOLY Cera Tec 300 ml (7181)",
            "sku": "300",
            "priceTry": 1874.05,
            "priceUsd": 39.87,
            "image": "https://www.liquimolyturkey.com/admin/resimler/cera-tec-300-ml-7181-1896.jpg",
            "url": "https://shop.egemot.com.tr/cera-tec-300-ml-7181",
            "category": "روغن موتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Engine Flush Plus- Motor İçi Temizleyici 300 ml (2657)",
            "nameFa": "LIQUI MOLY Engine Flush Plus- Motor İçi پاک‌کننده 300 ml (2657)",
            "nameTr": "LIQUI MOLY Engine Flush Plus- Motor İçi Temizleyici 300 ml (2657)",
            "sku": "300",
            "priceTry": 561.76,
            "priceUsd": 11.95,
            "image": "https://www.liquimolyturkey.com/admin/resimler/engine-flush-motor-ici-temizleyici-300-ml-2657-1371.jpg",
            "url": "https://shop.egemot.com.tr/engine-flush-motor-ici-temizleyici-300-ml-2657",
            "category": "روغن موتور"
      },
      {
            "id": "4434",
            "name": "LIQUI MOLY GL4+ Dişli Yağı SAE 75W90 (4434)",
            "nameFa": "LIQUI MOLY GL4+ Dişli Yağı SAE 75W90 (4434)",
            "nameTr": "LIQUI MOLY GL4+ Dişli Yağı SAE 75W90 (4434)",
            "sku": "4434",
            "priceTry": 1316.59,
            "priceUsd": 28.01,
            "image": "https://www.liquimolyturkey.com/admin/resimler/gl4-disli-yagi-sae-75w90-4434-7711428122-dc4-7390.jpg",
            "url": "https://shop.egemot.com.tr/gl4-disli-yagi-sae-75w90-4434-7711428122-dc4",
            "category": "روغن موتور"
      },
      {
            "id": "1410",
            "name": "LIQUI MOLY Hypoid Dişli Yağı (GL5) SAE 85W90 LS (1410)",
            "nameFa": "LIQUI MOLY Hypoid Dişli Yağı (GL5) SAE 85W90 LS (1410)",
            "nameTr": "LIQUI MOLY Hypoid Dişli Yağı (GL5) SAE 85W90 LS (1410)",
            "sku": "1410",
            "priceTry": 886.82,
            "priceUsd": 18.87,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hypoid-disli-yagi-gl5-sae-85w-90-ls-1410-7720.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-hypoid-disli-yagi-gl5-sae-85w-90-ls-1410",
            "category": "روغن موتور"
      },
      {
            "id": "21364",
            "name": "LIQUI MOLY Leichtlauf Performance 5W30 5 Litre (21364)",
            "nameFa": "LIQUI MOLY Leichtlauf Performance 5W30 5 لیتر (21364)",
            "nameTr": "LIQUI MOLY Leichtlauf Performance 5W30 5 Litre (21364)",
            "sku": "21364",
            "priceTry": 3347.93,
            "priceUsd": 71.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-leichtlauf-performance-5w30-5-litre-21364-8053.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-leichtlauf-performance-5w30-5-litre-21364",
            "category": "روغن موتور"
      },
      {
            "id": "1009",
            "name": "LIQUI MOLY Lifter- Supap İteceği Katkısı 300 ml (1009)",
            "nameFa": "LIQUI MOLY Lifter- Supap İteceği افزودنیsı 300 ml (1009)",
            "nameTr": "LIQUI MOLY Lifter- Supap İteceği Katkısı 300 ml (1009)",
            "sku": "1009",
            "priceTry": 561.03,
            "priceUsd": 11.94,
            "image": "https://www.liquimolyturkey.com/admin/resimler/lifter-supap-itecegikatkisi-1009-1455.jpg",
            "url": "https://shop.egemot.com.tr/lifter-supap-itecegikatkisi-1009",
            "category": "روغن موتور"
      },
      {
            "id": "25019",
            "name": "LIQUI MOLY Marine 2T Motor Yağı 1l (25019)",
            "nameFa": "LIQUI MOLY Marine 2T روغن موتور 1l (25019)",
            "nameTr": "LIQUI MOLY Marine 2T Motor Yağı 1l (25019)",
            "sku": "25019",
            "priceTry": 949.84,
            "priceUsd": 20.21,
            "image": "assets/images/liqui-moly/product-25019.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-2t-motor-yagi-1-l-25019",
            "category": "روغن موتور"
      },
      {
            "id": "25020",
            "name": "LIQUI MOLY Marine 2T Motor Yağı 5l (25020)",
            "nameFa": "LIQUI MOLY Marine 2T روغن موتور 5l (25020)",
            "nameTr": "LIQUI MOLY Marine 2T Motor Yağı 5l (25020)",
            "sku": "25020",
            "priceTry": 4238.25,
            "priceUsd": 90.18,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-2t-motor-yagi-5-l-25020-2586.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-2t-motor-yagi-5-l-25020",
            "category": "روغن موتور"
      },
      {
            "id": "25012",
            "name": "LIQUI MOLY Marine 4T Motor Oil 10W-40 1l (25012)",
            "nameFa": "LIQUI MOLY Marine 4T Motor Oil 10W-40 1l (25012)",
            "nameTr": "LIQUI MOLY Marine 4T Motor Oil 10W-40 1l (25012)",
            "sku": "25012",
            "priceTry": 750.89,
            "priceUsd": 15.98,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-yagi-10w-40-1-l-25012-6123.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-4t-motor-yagi-10w-40-1-l-25012",
            "category": "روغن موتور"
      },
      {
            "id": "25013",
            "name": "LIQUI MOLY Marine 4T Motor Oil 10W-40 5l (25013)",
            "nameFa": "LIQUI MOLY Marine 4T Motor Oil 10W-40 5l (25013)",
            "nameTr": "LIQUI MOLY Marine 4T Motor Oil 10W-40 5l (25013)",
            "sku": "25013",
            "priceTry": 3248.82,
            "priceUsd": 69.12,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-yagi-10w-40-5-l-25013-7642.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-4t-motor-yagi-10w-40-5-l-25013",
            "category": "روغن موتور"
      },
      {
            "id": "25015",
            "name": "LIQUI MOLY Marine 4T Motor Oil 15W-40 1l (25015)",
            "nameFa": "LIQUI MOLY Marine 4T Motor Oil 15W-40 1l (25015)",
            "nameTr": "LIQUI MOLY Marine 4T Motor Oil 15W-40 1l (25015)",
            "sku": "25015",
            "priceTry": 676.52,
            "priceUsd": 14.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-yagi-15w-40-1-l-25015-3432.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-4t-motor-yagi-15w-40-1-l-25015",
            "category": "روغن موتور"
      },
      {
            "id": "25016",
            "name": "LIQUI MOLY Marine 4T Motor Oil 15W-40 5l (25016)",
            "nameFa": "LIQUI MOLY Marine 4T Motor Oil 15W-40 5l (25016)",
            "nameTr": "LIQUI MOLY Marine 4T Motor Oil 15W-40 5l (25016)",
            "sku": "25016",
            "priceTry": 2879.62,
            "priceUsd": 61.27,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-4t-motor-oil-15w-40-5-l-25016-7239.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-4t-motor-oil-15w-40-5-l-25016",
            "category": "روغن موتور"
      },
      {
            "id": "25071",
            "name": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 75W-90 1l (25071)",
            "nameFa": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 75W-90 1l (25071)",
            "nameTr": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 75W-90 1l (25071)",
            "sku": "25071",
            "priceTry": 1781.81,
            "priceUsd": 37.91,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-tam-sentetik-disli-yagi-gl4gl5-75w-90-1l-25071-5739.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-tam-sentetik-disli-yagi-gl4gl5-75w-90-1l-25071",
            "category": "روغن موتور"
      },
      {
            "id": "25036",
            "name": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 75W90 250ml (25036)",
            "nameFa": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 75W90 250ml (25036)",
            "nameTr": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 75W90 250ml (25036)",
            "sku": "25036",
            "priceTry": 835.14,
            "priceUsd": 17.77,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-tam-sentetik-disli-yagi-gl4gl5-75w90-25036-9886.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-tam-sentetik-disli-yagi-gl4gl5-75w90-25036",
            "category": "روغن موتور"
      },
      {
            "id": "25069",
            "name": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 80W-90 1L (25069)",
            "nameFa": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 80W-90 1L (25069)",
            "nameTr": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 80W-90 1L (25069)",
            "sku": "25069",
            "priceTry": 902.82,
            "priceUsd": 19.21,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-disli-yagi-gl4gl5-80w90-25069-6725.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-disli-yagi-gl4gl5-80w90-25069",
            "category": "روغن موتور"
      },
      {
            "id": "25031",
            "name": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 80W-90 250ml (25030)",
            "nameFa": "LIQUI MOLY Marine تمام‌سنتتیک Dişli Yağı GL4/GL5 80W-90 250ml (25030)",
            "nameTr": "LIQUI MOLY Marine Tam Sentetik Dişli Yağı GL4/GL5 80W-90 250ml (25030)",
            "sku": "25031",
            "priceTry": 584.46,
            "priceUsd": 12.44,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-disli-yagi-gl4gl5-80w-90-250ml-25031-5068.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-disli-yagi-gl4gl5-80w-90-250ml-25031",
            "category": "روغن موتور"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Molygen Motor Protect Sentetik Yağ Katkısı 500 ml (1015)",
            "nameFa": "LIQUI MOLY Molygen Motor Protect سنتتیک Yağ افزودنیsı 500 ml (1015)",
            "nameTr": "LIQUI MOLY Molygen Motor Protect Sentetik Yağ Katkısı 500 ml (1015)",
            "sku": "500",
            "priceTry": 2135.18,
            "priceUsd": 45.43,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-protect-sentetik-yag-katkisi-500-ml-1015",
            "category": "روغن موتور"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Motor Protect Sentetik Yağ Katkısı 500 ml (1018)",
            "nameFa": "LIQUI MOLY Motor Protect سنتتیک Yağ افزودنیsı 500 ml (1018)",
            "nameTr": "LIQUI MOLY Motor Protect Sentetik Yağ Katkısı 500 ml (1018)",
            "sku": "500",
            "priceTry": 1724.14,
            "priceUsd": 36.68,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/motor-protect-sentetik-yag-katkisi-500-ml-1018",
            "category": "روغن موتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Motor Yağ Bakımı Katkısı 300 ml (2180)",
            "nameFa": "LIQUI MOLY Motor Yağ Bakımı افزودنیsı 300 ml (2180)",
            "nameTr": "LIQUI MOLY Motor Yağ Bakımı Katkısı 300 ml (2180)",
            "sku": "300",
            "priceTry": 685.52,
            "priceUsd": 14.59,
            "image": "https://www.liquimolyturkey.com/admin/resimler/motor-yag-bakimi-katkisi-300-ml-2180-6102.jpg",
            "url": "https://shop.egemot.com.tr/motor-yag-bakimi-katkisi-300-ml-2180",
            "category": "روغن موتور"
      },
      {
            "id": "5196",
            "name": "LIQUI MOLY Motor Yağ Viskozite Koruyucu Katkı 1 Litre (5196)",
            "nameFa": "LIQUI MOLY Motor Yağ Viskozite Koruyucu افزودنی 1 لیتر (5196)",
            "nameTr": "LIQUI MOLY Motor Yağ Viskozite Koruyucu Katkı 1 Litre (5196)",
            "sku": "5196",
            "priceTry": 1415.59,
            "priceUsd": 30.12,
            "image": "assets/images/liqui-moly/product-5196.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-yag-viskozite-koruyucu-1-litre-5196",
            "category": "روغن موتور"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY Oil Additiv MoS2'li Yağ Katkısı 200 ml (1012)",
            "nameFa": "LIQUI MOLY Oil Additiv MoS2'li Yağ افزودنیsı 200 ml (1012)",
            "nameTr": "LIQUI MOLY Oil Additiv MoS2'li Yağ Katkısı 200 ml (1012)",
            "sku": "200",
            "priceTry": 681.76,
            "priceUsd": 14.51,
            "image": "https://www.liquimolyturkey.com/admin/resimler/oil-additiv-mos2li-yag-katkisi-200-ml-1012-3489.jpg",
            "url": "https://shop.egemot.com.tr/oil-additiv-mos2li-yag-katkisi-200-ml-1012",
            "category": "روغن موتور"
      },
      {
            "id": "1200",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1200 (3681)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1200 (3681)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1200 (3681)",
            "sku": "1200",
            "priceTry": 985.19,
            "priceUsd": 20.96,
            "image": "https://www.liquimolyturkey.com/admin/resimler/otomatik-sanziman-yagi-top-tec-atf-1200-3681-8089.jpg",
            "url": "https://shop.egemot.com.tr/otomatik-sanziman-yagi-top-tec-atf-1200-3681",
            "category": "روغن موتور"
      },
      {
            "id": "1200",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1200 G (9703)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1200 G (9703)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1200 G (9703)",
            "sku": "1200",
            "priceTry": 989.19,
            "priceUsd": 21.05,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1200-g-9703-8794.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1200-g-9703",
            "category": "روغن موتور"
      },
      {
            "id": "1400",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1400 (3662)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1400 (3662)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1400 (3662)",
            "sku": "1400",
            "priceTry": 1065.64,
            "priceUsd": 22.67,
            "image": "https://www.liquimolyturkey.com/admin/resimler/top-tec-atf-1400-3662-7298.jpg",
            "url": "https://shop.egemot.com.tr/top-tec-atf-1400-3662",
            "category": "روغن موتور"
      },
      {
            "id": "1600",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1600 (3659)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1600 (3659)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1600 (3659)",
            "sku": "1600",
            "priceTry": 1309.46,
            "priceUsd": 27.86,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1600-3659-5745.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1600-3659",
            "category": "روغن موتور"
      },
      {
            "id": "1800",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1800 (3687)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1800 (3687)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1800 (3687)",
            "sku": "1800",
            "priceTry": 921.45,
            "priceUsd": 19.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/otomatik-sanziman-yagi-top-tec-atf-1800-3687-3164.jpg",
            "url": "https://shop.egemot.com.tr/otomatik-sanziman-yagi-top-tec-atf-1800-3687",
            "category": "روغن موتور"
      },
      {
            "id": "20625",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1800 R (20625)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1800 R (20625)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1800 R (20625)",
            "sku": "20625",
            "priceTry": 898.83,
            "priceUsd": 19.12,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1800r-20625-9983.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1800r-20625",
            "category": "روغن موتور"
      },
      {
            "id": "1850",
            "name": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1850 (21738)",
            "nameFa": "LIQUI MOLY Otomatik روغن گیربکس Top Tec ATF 1850 (21738)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Yağı Top Tec ATF 1850 (21738)",
            "sku": "1850",
            "priceTry": 942.96,
            "priceUsd": 20.06,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1850-21738-2562.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-otomatik-sanziman-yagi-top-tec-atf-1850-21738",
            "category": "روغن موتور"
      },
      {
            "id": "7530",
            "name": "LIQUI MOLY Special Tec AA 5W-30 Litre (7530)",
            "nameFa": "LIQUI MOLY Special Tec AA 5W-30 لیتر (7530)",
            "nameTr": "LIQUI MOLY Special Tec AA 5W-30 Litre (7530)",
            "sku": "7530",
            "priceTry": 3671.88,
            "priceUsd": 78.13,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-special-tec-aa-5w-30-5-litre-7530-6909.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-special-tec-aa-5w-30-5-litre-7530",
            "category": "روغن موتور"
      },
      {
            "id": "20968",
            "name": "LIQUI MOLY Special Tec DX1 5W30 Motor Yağı 4 Litre (20968)",
            "nameFa": "LIQUI MOLY Special Tec DX1 5W30 روغن موتور 4 لیتر (20968)",
            "nameTr": "LIQUI MOLY Special Tec DX1 5W30 Motor Yağı 4 Litre (20968)",
            "sku": "20968",
            "priceTry": 2984.2,
            "priceUsd": 63.49,
            "image": "https://www.liquimolyturkey.com/admin/resimler/special-tec-dx1-5w30-motor-yagi-4-litre-20968-6238.png",
            "url": "https://shop.egemot.com.tr/special-tec-dx1-5w30-motor-yagi-4-litre-20968",
            "category": "روغن موتور"
      },
      {
            "id": "20969",
            "name": "LIQUI MOLY Special Tec DX1 5W30 Motor Yağı 5Litre (20969)",
            "nameFa": "LIQUI MOLY Special Tec DX1 5W30 روغن موتور 5لیتر (20969)",
            "nameTr": "LIQUI MOLY Special Tec DX1 5W30 Motor Yağı 5Litre (20969)",
            "sku": "20969",
            "priceTry": 3682.55,
            "priceUsd": 78.35,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-special-tec-dx1-5w30-motor-yagi-5-litre-20969-5360.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-special-tec-dx1-5w30-motor-yagi-5-litre-20969",
            "category": "روغن موتور"
      },
      {
            "id": "5100",
            "name": "LIQUI MOLY TOP TEC MTF 5100 75W (20842) ŞANZIMAN YAĞI",
            "nameFa": "LIQUI MOLY TOP TEC MTF 5100 75W (20842) روغن گیربکس",
            "nameTr": "LIQUI MOLY TOP TEC MTF 5100 75W (20842) ŞANZIMAN YAĞI",
            "sku": "5100",
            "priceTry": 1118.92,
            "priceUsd": 23.81,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-5100-75w-20842-sanziman-yagi-20842-6431.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-5100-75w-20842-sanziman-yagi-20842",
            "category": "روغن موتور"
      },
      {
            "id": "5200",
            "name": "LIQUI MOLY TOP TEC MTF 5200 75W-80 (20845) ŞANZIMAN YAĞI",
            "nameFa": "LIQUI MOLY TOP TEC MTF 5200 75W-80 (20845) روغن گیربکس",
            "nameTr": "LIQUI MOLY TOP TEC MTF 5200 75W-80 (20845) ŞANZIMAN YAĞI",
            "sku": "5200",
            "priceTry": 925.69,
            "priceUsd": 19.7,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000695_liqui-moly-top-tec-mtf-5200-75w-80-21688-sanziman-yagi_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-5200-75w-80-20845-sanziman-yagi",
            "category": "روغن موتور"
      },
      {
            "id": "5300",
            "name": "LIQUI MOLY TOP TEC MTF 5300 70W-75 (21359) ŞANZIMAN YAĞI",
            "nameFa": "LIQUI MOLY TOP TEC MTF 5300 70W-75 (21359) روغن گیربکس",
            "nameTr": "LIQUI MOLY TOP TEC MTF 5300 70W-75 (21359) ŞANZIMAN YAĞI",
            "sku": "5300",
            "priceTry": 1232.61,
            "priceUsd": 26.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-mtf-5300-70w-75-21359-sanziman-yagi-7252.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-mtf-5300-70w-75-21359-sanziman-yagi",
            "category": "روغن موتور"
      },
      {
            "id": "21366",
            "name": "LIQUI MOLY Top Tec 6320 5W-30 4 lt 21366",
            "nameFa": "LIQUI MOLY Top Tec 6320 5W-30 4 لیتر 21366",
            "nameTr": "LIQUI MOLY Top Tec 6320 5W-30 4 lt 21366",
            "sku": "21366",
            "priceTry": 3264.19,
            "priceUsd": 69.45,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-6320-5w30-motor-yagi-4-litre-23166-6722.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-6320-5w30-motor-yagi-4-litre-23166",
            "category": "روغن موتور"
      },
      {
            "id": "6320",
            "name": "LIQUI MOLY Top Tec 6320 5W30 Motor Yağı 5 Litre (23167)",
            "nameFa": "LIQUI MOLY Top Tec 6320 5W30 روغن موتور 5 لیتر (23167)",
            "nameTr": "LIQUI MOLY Top Tec 6320 5W30 Motor Yağı 5 Litre (23167)",
            "sku": "6320",
            "priceTry": 4067.58,
            "priceUsd": 86.54,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-6320-5w30-motor-yagi-5-litre-23167-1561.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-6320-5w30-motor-yagi-5-litre-23167",
            "category": "روغن موتور"
      },
      {
            "id": "1100",
            "name": "LIQUI MOLY Top Tec ATF 1100 1 Litre (3651)",
            "nameFa": "LIQUI MOLY Top Tec ATF 1100 1 لیتر (3651)",
            "nameTr": "LIQUI MOLY Top Tec ATF 1100 1 Litre (3651)",
            "sku": "1100",
            "priceTry": 915.65,
            "priceUsd": 19.48,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-atf-1100-3651-1305.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-atf-1100-3651",
            "category": "روغن موتور"
      },
      {
            "id": "1900",
            "name": "LIQUI MOLY Top Tec ATF 1900 1 Litre (3648)",
            "nameFa": "LIQUI MOLY Top Tec ATF 1900 1 لیتر (3648)",
            "nameTr": "LIQUI MOLY Top Tec ATF 1900 1 Litre (3648)",
            "sku": "1900",
            "priceTry": 962.34,
            "priceUsd": 20.48,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-top-tec-atf-1900-1-litre-3648-8258.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-top-tec-atf-1900-1-litre-3648",
            "category": "روغن موتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Yağ Dumanı Önleyici 300 ml (2122)",
            "nameFa": "LIQUI MOLY Yağ Dumanı پیشگیرانه 300 ml (2122)",
            "nameTr": "LIQUI MOLY Yağ Dumanı Önleyici 300 ml (2122)",
            "sku": "300",
            "priceTry": 635.48,
            "priceUsd": 13.52,
            "image": "https://www.liquimolyturkey.com/admin/resimler/yag-siyah-duman-onleyici-300-ml-2122-8238.jpg",
            "url": "https://shop.egemot.com.tr/yag-siyah-duman-onleyici-300-ml-2122",
            "category": "روغن موتور"
      },
      {
            "id": "4421",
            "name": "LIQUI MOLY Tam Sentetik Hypoid Dişli Yağı (GL5) LS SAE 75W140 (4421)",
            "nameFa": "LIQUI MOLY تمام‌سنتتیک Hypoid Dişli Yağı (GL5) LS SAE 75W140 (4421)",
            "nameTr": "LIQUI MOLY Tam Sentetik Hypoid Dişli Yağı (GL5) LS SAE 75W140 (4421)",
            "sku": "4421",
            "priceTry": 2388.64,
            "priceUsd": 50.82,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-tam-sentetik-hypoid-disli-yagi-gl5-ls-sae-75w140-4421-8483.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-tam-sentetik-hypoid-disli-yagi-gl5-ls-sae-75w140-4421",
            "category": "روغن موتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Motor Yağı Sızıntı Önleyici 300 Ml. (1005)",
            "nameFa": "LIQUI MOLY روغن موتور Sızıntı پیشگیرانه 300 Ml. (1005)",
            "nameTr": "LIQUI MOLY Motor Yağı Sızıntı Önleyici 300 Ml. (1005)",
            "sku": "300",
            "priceTry": 712.57,
            "priceUsd": 15.16,
            "image": "https://www.liquimolyturkey.com/admin/resimler/motor-yagi-sizinti-onleyici-300-ml-1005-4909.jpg",
            "url": "https://shop.egemot.com.tr/motor-yagi-sizinti-onleyici-300-ml-1005",
            "category": "روغن موتور"
      },
      {
            "id": "3658",
            "name": "LIQUI MOLY Şanzıman Yağı (GL5) 75W80 (3658)",
            "nameFa": "LIQUI MOLY روغن گیربکس (GL5) 75W80 (3658)",
            "nameTr": "LIQUI MOLY Şanzıman Yağı (GL5) 75W80 (3658)",
            "sku": "3658",
            "priceTry": 937.84,
            "priceUsd": 19.95,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sanziman-yagi-gl5-75w80-3658-3756.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-sanziman-yagi-gl5-75w80-3658",
            "category": "روغن موتور"
      },
      {
            "id": "20832",
            "name": "Liqui Moly 4t 10w 40 Mb Scooter Sentetik Motor Yagi 1l 20832",
            "nameFa": "Liqui Moly 4t 10w 40 Mb Scooter سنتتیک روغن موتور 1l 20832",
            "nameTr": "Liqui Moly 4t 10w 40 Mb Scooter Sentetik Motor Yagi 1l 20832",
            "sku": "20832",
            "priceTry": 574.75,
            "priceUsd": 12.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-4t-10w-40-mb-scooter-sentetik-motor-yagi-1l-20832--7799.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-4t-10w-40-mb-scooter-sentetik-motor-yagi-1l-20832-",
            "category": "روغن موتور"
      },
      {
            "id": "21862",
            "name": "Liqui Moly 4t 10w 40 Motorbike Optimal Mineral Motor Yagi 1 Lt 21862",
            "nameFa": "Liqui Moly 4t 10w 40 Motorbike Optimal مینرال روغن موتور 1 لیتر 21862",
            "nameTr": "Liqui Moly 4t 10w 40 Motorbike Optimal Mineral Motor Yagi 1 Lt 21862",
            "sku": "21862",
            "priceTry": 574.75,
            "priceUsd": 12.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-4t-10w-40-motorbike-optimal-mineral-motor-yagi-1-lt-21862--6618.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-4t-10w-40-motorbike-optimal-mineral-motor-yagi-1-lt-21862-",
            "category": "روغن موتور"
      },
      {
            "id": "21863",
            "name": "Liqui Moly 4t 10w 40 Motorbike Optimal Mineral Motor Yagi 4 Lt 21863",
            "nameFa": "Liqui Moly 4t 10w 40 Motorbike Optimal مینرال روغن موتور 4 لیتر 21863",
            "nameTr": "Liqui Moly 4t 10w 40 Motorbike Optimal Mineral Motor Yagi 4 Lt 21863",
            "sku": "21863",
            "priceTry": 2075.75,
            "priceUsd": 44.16,
            "image": "assets/images/liqui-moly/product-21863.webp",
            "url": "https://shop.egemot.com.tr/liqui-moly-4t-10w-40-motorbike-optimal-mineral-motor-yagi-4-lt-21863-",
            "category": "روغن موتور"
      },
      {
            "id": "2328",
            "name": "Liqui Moly Leichtlauf High Tech 5w 40 5 Lt 2328",
            "nameFa": "Liqui Moly Leichtlauf High Tech 5w 40 5 لیتر 2328",
            "nameTr": "Liqui Moly Leichtlauf High Tech 5w 40 5 Lt 2328",
            "sku": "2328",
            "priceTry": 3746.1,
            "priceUsd": 79.7,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-leichtlauf-high-tech-5w-40-5-lt-2328-4934.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-leichtlauf-high-tech-5w-40-5-lt-2328",
            "category": "روغن موتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Akü Gres Spreyi 300 ml (3141)",
            "nameFa": "LIQUI MOLY Akü Gres اسپری 300 ml (3141)",
            "nameTr": "LIQUI MOLY Akü Gres Spreyi 300 ml (3141)",
            "sku": "300",
            "priceTry": 519.28,
            "priceUsd": 11.05,
            "image": "https://www.liquimolyturkey.com/admin/resimler/aku-gresi-300-ml-3141-1004.jpg",
            "url": "https://shop.egemot.com.tr/aku-gresi-300-ml-3141",
            "category": "سایر محصولات"
      },
      {
            "id": "4061",
            "name": "LIQUI MOLY Bakır Macunu 1 kg (4061)",
            "nameFa": "LIQUI MOLY Bakır Macunu 1 kg (4061)",
            "nameTr": "LIQUI MOLY Bakır Macunu 1 kg (4061)",
            "sku": "4061",
            "priceTry": 3026.8,
            "priceUsd": 64.4,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-bakir-macunu-1-kg-4061-3551.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-bakir-macunu-1-kg-4061",
            "category": "سایر محصولات"
      },
      {
            "id": "3805",
            "name": "LIQUI MOLY Hızlı Yapıştırıcı 10 g (3805)",
            "nameFa": "LIQUI MOLY Hızlı Yapıştırıcı 10 g (3805)",
            "nameTr": "LIQUI MOLY Hızlı Yapıştırıcı 10 g (3805)",
            "sku": "3805",
            "priceTry": 215.33,
            "priceUsd": 4.58,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-hizli-yapistirici-10-g-3805-3645.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-hizli-yapistirici-10-g-3805",
            "category": "سایر محصولات"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Kaporta Yapıştırma Spreyi 400 ml (6192)",
            "nameFa": "LIQUI MOLY Kaporta Yapıştırma اسپری 400 ml (6192)",
            "nameTr": "LIQUI MOLY Kaporta Yapıştırma Spreyi 400 ml (6192)",
            "sku": "400",
            "priceTry": 1017.2,
            "priceUsd": 21.64,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kaporta-yapistirma-spreyi-400-ml-6192-7242.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kaporta-yapistirma-spreyi-400-ml-6192",
            "category": "سایر محصولات"
      },
      {
            "id": "1528",
            "name": "LIQUI MOLY Kapı Kilit Yağlayıcısı 50 ml (1528)",
            "nameFa": "LIQUI MOLY Kapı Kilit روان‌کنندهsı 50 ml (1528)",
            "nameTr": "LIQUI MOLY Kapı Kilit Yağlayıcısı 50 ml (1528)",
            "sku": "1528",
            "priceTry": 289.6,
            "priceUsd": 6.16,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kapi-kilit-yaglayicisi-50-ml-1528-1823.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kapi-kilit-yaglayicisi-50-ml-1528",
            "category": "سایر محصولات"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Kilit Bakım Spreyi 250 ml (3075)",
            "nameFa": "LIQUI MOLY Kilit Bakım اسپری 250 ml (3075)",
            "nameTr": "LIQUI MOLY Kilit Bakım Spreyi 250 ml (3075)",
            "sku": "250",
            "priceTry": 511.56,
            "priceUsd": 10.88,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kapi-kilit-spreyi-250-ml-3075-6824.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kapi-kilit-spreyi-250-ml-3075",
            "category": "سایر محصولات"
      },
      {
            "id": "4083",
            "name": "LIQUI MOLY Klima Sistemi Yağı PAG 46 250 ml (4083)",
            "nameFa": "LIQUI MOLY Klima سیستمi Yağı PAG 46 250 ml (4083)",
            "nameTr": "LIQUI MOLY Klima Sistemi Yağı PAG 46 250 ml (4083)",
            "sku": "4083",
            "priceTry": 1032.74,
            "priceUsd": 21.97,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-sistemi-yagi-pag-46-4083-7031.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-klima-sistemi-yagi-pag-46-4083",
            "category": "سایر محصولات"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Kumaş Bakım Spreyi 400 ml (1594)",
            "nameFa": "LIQUI MOLY Kumaş Bakım اسپری 400 ml (1594)",
            "nameTr": "LIQUI MOLY Kumaş Bakım Spreyi 400 ml (1594)",
            "sku": "400",
            "priceTry": 595.85,
            "priceUsd": 12.68,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kumas-bakim-spreyi-400-ml-23056-4422.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-kumas-bakim-spreyi-400-ml-23056",
            "category": "سایر محصولات"
      },
      {
            "id": "8948",
            "name": "LIQUI MOLY Kırmızı Silikon Sıvı Conta 80 ml (8948)",
            "nameFa": "LIQUI MOLY Kırmızı Silikon Sıvı Conta 80 ml (8948)",
            "nameTr": "LIQUI MOLY Kırmızı Silikon Sıvı Conta 80 ml (8948)",
            "sku": "8948",
            "priceTry": 428.13,
            "priceUsd": 9.11,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000789_liqui-moly-kirmizi-silikon-sivi-conta-80-ml-8948_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kirmizi-silikon-sivi-conta-80-ml-8948",
            "category": "سایر محصولات"
      },
      {
            "id": "3010",
            "name": "LIQUI MOLY LM48 Montaj Macunu 50g (3010)",
            "nameFa": "LIQUI MOLY LM48 Montaj Macunu 50g (3010)",
            "nameTr": "LIQUI MOLY LM48 Montaj Macunu 50g (3010)",
            "sku": "3010",
            "priceTry": 340.66,
            "priceUsd": 7.25,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-lm48-montaj-macunu-3010-5295.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-lm48-montaj-macunu-3010",
            "category": "سایر محصولات"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY Motor Kaçak Tespit Spreyi 200 ml (3351)",
            "nameFa": "LIQUI MOLY Motor Kaçak Tespit اسپری 200 ml (3351)",
            "nameTr": "LIQUI MOLY Motor Kaçak Tespit Spreyi 200 ml (3351)",
            "sku": "200",
            "priceTry": 342.41,
            "priceUsd": 7.29,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-kacak-tespit-spreyi-200-ml-3351-6239.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-kacak-tespit-spreyi-200-ml-3351",
            "category": "سایر محصولات"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Motor Koruyucu Sprey (Engine Preserver) 300 ml (1420)",
            "nameFa": "LIQUI MOLY Motor Koruyucu اسپری (Engine Preserver) 300 ml (1420)",
            "nameTr": "LIQUI MOLY Motor Koruyucu Sprey (Engine Preserver) 300 ml (1420)",
            "sku": "300",
            "priceTry": 513.31,
            "priceUsd": 10.92,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-koruyucu-sprey-300-ml-1420-6062.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-koruyucu-sprey-300-ml-1420",
            "category": "سایر محصولات"
      },
      {
            "id": "1080",
            "name": "LIQUI MOLY Rulman Menteşe Macunu 50 gr (1080)",
            "nameFa": "LIQUI MOLY Rulman Menteşe Macunu 50 gr (1080)",
            "nameTr": "LIQUI MOLY Rulman Menteşe Macunu 50 gr (1080)",
            "sku": "1080",
            "priceTry": 269.98,
            "priceUsd": 5.74,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-rulman-mentese-macunu-50-gr-1080-8358.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-rulman-mentese-macunu-50-gr-1080",
            "category": "سایر محصولات"
      },
      {
            "id": "24391",
            "name": "LIQUI MOLY Silah Bakım Yağı -Gresi (24391)",
            "nameFa": "LIQUI MOLY Silah Bakım Yağı -گریس (24391)",
            "nameTr": "LIQUI MOLY Silah Bakım Yağı -Gresi (24391)",
            "sku": "24391",
            "priceTry": 554.6,
            "priceUsd": 11.8,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-silah-bakim-yagi-gresi-24391-3745.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-silah-bakim-yagi-gresi-24391",
            "category": "سایر محصولات"
      },
      {
            "id": "4390",
            "name": "LIQUI MOLY Silah Bakım Spreyi (4390)",
            "nameFa": "LIQUI MOLY Silah Bakım اسپری (4390)",
            "nameTr": "LIQUI MOLY Silah Bakım Spreyi (4390)",
            "sku": "4390",
            "priceTry": 574.7,
            "priceUsd": 12.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-silah-bakim-spreyi-4390-6884.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-silah-bakim-spreyi-4390",
            "category": "سایر محصولات"
      },
      {
            "id": "6185",
            "name": "LIQUI MOLY Silikon Sıvı Conta 200 ml (6185)",
            "nameFa": "LIQUI MOLY Silikon Sıvı Conta 200 ml (6185)",
            "nameTr": "LIQUI MOLY Silikon Sıvı Conta 200 ml (6185)",
            "sku": "6185",
            "priceTry": 1260.92,
            "priceUsd": 26.83,
            "image": "https://www.liquimolyturkey.com/admin/resimler/silikon-sivi-conta-6185-2790.png",
            "url": "https://shop.egemot.com.tr/silikon-sivi-conta-6185",
            "category": "سایر محصولات"
      },
      {
            "id": "100",
            "name": "LIQUI MOLY Silikon Yağlayıcı 100 ml (3312)",
            "nameFa": "LIQUI MOLY Silikon روان‌کننده 100 ml (3312)",
            "nameTr": "LIQUI MOLY Silikon Yağlayıcı 100 ml (3312)",
            "sku": "100",
            "priceTry": 583.03,
            "priceUsd": 12.4,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-silikon-yaglayici-100-ml-3312-5574.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-silikon-yaglayici-100-ml-3312",
            "category": "سایر محصولات"
      },
      {
            "id": "6193",
            "name": "LIQUI MOLY Sıvı Geniş Alanlı Metal Yapıştırıcı 25 ml (6193)",
            "nameFa": "LIQUI MOLY Sıvı Geniş Alanlı Metal Yapıştırıcı 25 ml (6193)",
            "nameTr": "LIQUI MOLY Sıvı Geniş Alanlı Metal Yapıştırıcı 25 ml (6193)",
            "sku": "6193",
            "priceTry": 760.61,
            "priceUsd": 16.18,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sivi-metal-yapistirici-25-ml-6193-2354.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-sivi-metal-yapistirici-25-ml-6193",
            "category": "سایر محصولات"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Sıvı Gres Tutunma Spreyi 400 ml (4084)",
            "nameFa": "LIQUI MOLY Sıvı Gres Tutunma اسپری 400 ml (4084)",
            "nameTr": "LIQUI MOLY Sıvı Gres Tutunma Spreyi 400 ml (4084)",
            "sku": "400",
            "priceTry": 462.21,
            "priceUsd": 9.83,
            "image": "https://www.liquimolyturkey.com/admin/resimler/sivi-gres-tutunma-spreyi-400-ml-4084-5113.jpg",
            "url": "https://shop.egemot.com.tr/sivi-gres-tutunma-spreyi-400-ml-4084",
            "category": "سایر محصولات"
      },
      {
            "id": "3810",
            "name": "LIQUI MOLY Sızdırmaz Yüzey Sıvı Conta 50 g (3810)",
            "nameFa": "LIQUI MOLY Sızdırmaz Yüzey Sıvı Conta 50 g (3810)",
            "nameTr": "LIQUI MOLY Sızdırmaz Yüzey Sıvı Conta 50 g (3810)",
            "sku": "3810",
            "priceTry": 864.37,
            "priceUsd": 18.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/sizdirmaz-yuzey-sivi-conta-50-g-3810-3727.jpeg",
            "url": "https://shop.egemot.com.tr/sizdirmaz-yuzey-sivi-conta-50-g-3810",
            "category": "سایر محصولات"
      },
      {
            "id": "7250",
            "name": "LIQUI MOLY Yağ Toplayıcı Granül 25 Litre (7250)",
            "nameFa": "LIQUI MOLY Yağ Toplayıcı Granül 25 لیتر (7250)",
            "nameTr": "LIQUI MOLY Yağ Toplayıcı Granül 25 Litre (7250)",
            "sku": "7250",
            "priceTry": 1465.9,
            "priceUsd": 31.19,
            "image": "https://www.liquimolyturkey.com/admin/resimler/yag-toplayici-granul-25-litre-7250-3935.jpg",
            "url": "https://shop.egemot.com.tr/yag-toplayici-granul-25-litre-7250",
            "category": "سایر محصولات"
      },
      {
            "id": "6218",
            "name": "LIQUI MOLY Cam Kesme Teli 50 mt. (6218)",
            "nameFa": "LIQUI MOLY Cam Kesme Teli 50 mt. (6218)",
            "nameTr": "LIQUI MOLY Cam Kesme Teli 50 mt. (6218)",
            "sku": "6218",
            "priceTry": 1504.47,
            "priceUsd": 32.01,
            "image": "https://www.liquimolyturkey.com/admin/resimler/cam-kesme-teli-50-mt-6218-4978.jpg",
            "url": "https://shop.egemot.com.tr/cam-kesme-teli-50-mt-6218",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "3801",
            "name": "LIQUI MOLY Civata Sabitleyici Orta Sert 10 gr (3801)",
            "nameFa": "LIQUI MOLY Civata Sabitleyici Orta Sert 10 gr (3801)",
            "nameTr": "LIQUI MOLY Civata Sabitleyici Orta Sert 10 gr (3801)",
            "sku": "3801",
            "priceTry": 297.57,
            "priceUsd": 6.33,
            "image": "https://www.liquimolyturkey.com/admin/resimler/civata-sabitleyici-orta-sert-10-gr-3801-4208.jpg",
            "url": "https://shop.egemot.com.tr/civata-sabitleyici-orta-sert-10-gr-3801",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "3802",
            "name": "LIQUI MOLY Civata Sabitleyici Orta Sert 50 gr (3802)",
            "nameFa": "LIQUI MOLY Civata Sabitleyici Orta Sert 50 gr (3802)",
            "nameTr": "LIQUI MOLY Civata Sabitleyici Orta Sert 50 gr (3802)",
            "sku": "3802",
            "priceTry": 864.37,
            "priceUsd": 18.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/civata-sabitleyici-orta-sert-50-gr-3802-1217.jpg",
            "url": "https://shop.egemot.com.tr/civata-sabitleyici-orta-sert-50-gr-3802",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "3803",
            "name": "LIQUI MOLY Civata Sabitleyici Sert 10 gr (3803)",
            "nameFa": "LIQUI MOLY Civata Sabitleyici Sert 10 gr (3803)",
            "nameTr": "LIQUI MOLY Civata Sabitleyici Sert 10 gr (3803)",
            "sku": "3803",
            "priceTry": 297.57,
            "priceUsd": 6.33,
            "image": "https://www.liquimolyturkey.com/admin/resimler/civata-sabitleyici-sert-10-gr-3803-3347.jpg",
            "url": "https://shop.egemot.com.tr/civata-sabitleyici-sert-10-gr-3803",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "3804",
            "name": "LIQUI MOLY Civata Sabitleyici Sert 50 gr (3804)",
            "nameFa": "LIQUI MOLY Civata Sabitleyici Sert 50 gr (3804)",
            "nameTr": "LIQUI MOLY Civata Sabitleyici Sert 50 gr (3804)",
            "sku": "3804",
            "priceTry": 864.37,
            "priceUsd": 18.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-civata-sabitleyici-sert-50-gr-3804-3670.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-civata-sabitleyici-sert-50-gr-3804",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "liqui-moly-civata-s-kme-maddesi-20-g-3811-",
            "name": "LIQUI MOLY Civata sökme Maddesi 20 g (3811)",
            "nameFa": "LIQUI MOLY Civata sökme Maddesi 20 g (3811)",
            "nameTr": "LIQUI MOLY Civata sökme Maddesi 20 g (3811)",
            "sku": null,
            "priceTry": 407.3,
            "priceUsd": 8.67,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-civata-sokme-maddesi-hasarli-civata-sokme-7045.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-civata-sokme-maddesi-hasarli-civata-sokme",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "3342",
            "name": "LIQUI MOLY Egzoz Montaj Pastası 150 g (3342)",
            "nameFa": "LIQUI MOLY Egzoz Montaj Pastası 150 g (3342)",
            "nameTr": "LIQUI MOLY Egzoz Montaj Pastası 150 g (3342)",
            "sku": "3342",
            "priceTry": 322.51,
            "priceUsd": 6.86,
            "image": "https://www.liquimolyturkey.com/admin/resimler/egzoz-montaj-pastasi-3342-1246.jpg",
            "url": "https://shop.egemot.com.tr/egzoz-montaj-pastasi-3342",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY Elektronik Kontak Spreyi 200 ml (21700)",
            "nameFa": "LIQUI MOLY Elektronik Kontak اسپری 200 ml (21700)",
            "nameTr": "LIQUI MOLY Elektronik Kontak Spreyi 200 ml (21700)",
            "sku": "200",
            "priceTry": 435.6,
            "priceUsd": 9.27,
            "image": "https://www.liquimolyturkey.com/admin/resimler/elektronik-kontak-spreyi-200-ml-21700-9665.jpg",
            "url": "https://shop.egemot.com.tr/elektronik-kontak-spreyi-200-ml-21700",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Galvaniz Koruyucu Zinc Spray 400 ml (1540)",
            "nameFa": "LIQUI MOLY Galvaniz Koruyucu Zinc Spray 400 ml (1540)",
            "nameTr": "LIQUI MOLY Galvaniz Koruyucu Zinc Spray 400 ml (1540)",
            "sku": "400",
            "priceTry": 636.33,
            "priceUsd": 13.54,
            "image": "https://www.liquimolyturkey.com/admin/resimler/galvaniz-koruyucu-zinc-spray-400-ml-1540-5014.jpg",
            "url": "https://shop.egemot.com.tr/galvaniz-koruyucu-zinc-spray-400-ml-1540",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Kaçak Tespit Spreyi 400 ml (3350)",
            "nameFa": "LIQUI MOLY Kaçak Tespit اسپری 400 ml (3350)",
            "nameTr": "LIQUI MOLY Kaçak Tespit Spreyi 400 ml (3350)",
            "sku": "400",
            "priceTry": 391.67,
            "priceUsd": 8.33,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kacak-tespit-spreyi-400-ml-3350-2132.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kacak-tespit-spreyi-400-ml-3350",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Silikon Sprey 300 ml (3310)",
            "nameFa": "LIQUI MOLY Silikon اسپری 300 ml (3310)",
            "nameTr": "LIQUI MOLY Silikon Sprey 300 ml (3310)",
            "sku": "300",
            "priceTry": 376.5,
            "priceUsd": 8.01,
            "image": "https://www.liquimolyturkey.com/admin/resimler/silikon-sprey-300-ml-3310-8097.jpg",
            "url": "https://shop.egemot.com.tr/silikon-sprey-300-ml-3310",
            "category": "سرویس و مواد مصرفی"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Cam Buz ve Buğu Çözücü Spreyi 500 ml (6902)",
            "nameFa": "LIQUI MOLY Cam Buz ve Buğu Çözücü اسپری 500 ml (6902)",
            "nameTr": "LIQUI MOLY Cam Buz ve Buğu Çözücü Spreyi 500 ml (6902)",
            "sku": "500",
            "priceTry": 383.49,
            "priceUsd": 8.16,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-cam-buz-ve-bugu-cozucu-spreyi-500-ml-6902",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "5189",
            "name": "LIQUI MOLY Pro Line Radyatör Temizleyici 1 Litre (5189)",
            "nameFa": "LIQUI MOLY Pro Line Radyatör پاک‌کننده 1 لیتر (5189)",
            "nameTr": "LIQUI MOLY Pro Line Radyatör Temizleyici 1 Litre (5189)",
            "sku": "5189",
            "priceTry": 796.63,
            "priceUsd": 16.95,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-temizleyici-1-litre-5189-5770.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-temizleyici-1-litre-5189",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Pro-Line Radyatör Sızıntı Önleyici 250 Ml. (5178)",
            "nameFa": "LIQUI MOLY Pro-Line Radyatör Sızıntı پیشگیرانه 250 Ml. (5178)",
            "nameTr": "LIQUI MOLY Pro-Line Radyatör Sızıntı Önleyici 250 Ml. (5178)",
            "sku": "250",
            "priceTry": 529.93,
            "priceUsd": 11.28,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-pro-line-radyator-sizinti-onleyici-250-ml-5178-1650.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-pro-line-radyator-sizinti-onleyici-250-ml-5178",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "150",
            "name": "LIQUI MOLY Radyatör Sızıntı Önleyici 150 Ml. (3330)",
            "nameFa": "LIQUI MOLY Radyatör Sızıntı پیشگیرانه 150 Ml. (3330)",
            "nameTr": "LIQUI MOLY Radyatör Sızıntı Önleyici 150 Ml. (3330)",
            "sku": "150",
            "priceTry": 310.9,
            "priceUsd": 6.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/radyator-sizinti-onleyici-150-ml-3330-3435.jpg",
            "url": "https://shop.egemot.com.tr/radyator-sizinti-onleyici-150-ml-3330",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Radyatör ve Soğutma Sistemi Temizleyici 300 Ml. (3320)",
            "nameFa": "LIQUI MOLY Radyatör ve Soğutma سیستمi پاک‌کننده 300 Ml. (3320)",
            "nameTr": "LIQUI MOLY Radyatör ve Soğutma Sistemi Temizleyici 300 Ml. (3320)",
            "sku": "300",
            "priceTry": 418.07,
            "priceUsd": 8.9,
            "image": "https://www.liquimolyturkey.com/admin/resimler/radyator-temizleyici-300-ml-3320-6638.jpg",
            "url": "https://shop.egemot.com.tr/radyator-temizleyici-300-ml-3320",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "21145",
            "name": "LIQUI MOLY Radyatör Antifrizi G12+ Konsantre (KFS12+) Kırmızı 1 l (21145)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور G12+ کنسانتره (KFS12+) Kırmızı 1 l (21145)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi G12+ Konsantre (KFS12+) Kırmızı 1 l (21145)",
            "sku": "21145",
            "priceTry": 513.71,
            "priceUsd": 10.93,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-g12-kfs12-kirmizi-5-l-21145-6573.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-g12-kfs12-kirmizi-5-l-21145",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "21149",
            "name": "LIQUI MOLY Radyatör Antifrizi KFS 11 Mavi 1 l (21149)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور KFS 11 Mavi 1 l (21149)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi KFS 11 Mavi 1 l (21149)",
            "sku": "21149",
            "priceTry": 503.43,
            "priceUsd": 10.71,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs-11-mavi-1-l-21149-5178.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-kfs-11-mavi-1-l-21149",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "21139",
            "name": "LIQUI MOLY Radyatör Antifrizi KFS 13 1 Litre (21139)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور KFS 13 1 لیتر (21139)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi KFS 13 1 Litre (21139)",
            "sku": "21139",
            "priceTry": 515.47,
            "priceUsd": 10.97,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs-13-g13-tl774j-kirmizi-1-l-21139-3538.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-kfs-13-g13-tl774j-kirmizi-1-l-21139",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "21740",
            "name": "LIQUI MOLY Radyatör Antifrizi KFS12 Evo 1 l (21740)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور KFS12 Evo 1 l (21740)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi KFS12 Evo 1 l (21740)",
            "sku": "21740",
            "priceTry": 500.58,
            "priceUsd": 10.65,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs12-evo-1-l-21740-1210.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-kfs12-evo-1-l-21740",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "21134",
            "name": "LIQUI MOLY Radyatör Antifrizi KFS12++ Kırmızı 1 l (21134)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور KFS12++ Kırmızı 1 l (21134)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi KFS12++ Kırmızı 1 l (21134)",
            "sku": "21134",
            "priceTry": 502.98,
            "priceUsd": 10.7,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-kfs12-1-l-21134-8321.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-kfs12-1-l-21134",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "8809",
            "name": "LIQUI MOLY Radyatör Antifrizi RAF 11 (G11) Mavi 5 l (8809)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور RAF 11 (G11) Mavi 5 l (8809)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi RAF 11 (G11) Mavi 5 l (8809)",
            "sku": "8809",
            "priceTry": 1049.79,
            "priceUsd": 22.34,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-g11-kfs11-mavi-5-l-8809-5653.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-g11-kfs11-mavi-5-l-8809",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "8810",
            "name": "LIQUI MOLY Radyatör Antifrizi RAF 12+ (G12+) Kırmızı 5 l (8810)",
            "nameFa": "LIQUI MOLY ضدیخ رادیاتور RAF 12+ (G12+) Kırmızı 5 l (8810)",
            "nameTr": "LIQUI MOLY Radyatör Antifrizi RAF 12+ (G12+) Kırmızı 5 l (8810)",
            "sku": "8810",
            "priceTry": 1054.11,
            "priceUsd": 22.43,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-radyator-antifrizi-g12-kfs12-kirmizi-5-l-8810-9763.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-radyator-antifrizi-g12-kfs12-kirmizi-5-l-8810",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "21678",
            "name": "LIQUI MOLY Antifrizli Konsantre Cam Suyu -50°C 1 l (21678)",
            "nameFa": "LIQUI MOLY ضدیخli کنسانتره Cam Suyu -50°C 1 l (21678)",
            "nameTr": "LIQUI MOLY Antifrizli Konsantre Cam Suyu -50°C 1 l (21678)",
            "sku": "21678",
            "priceTry": 421.15,
            "priceUsd": 8.96,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-antifrizli-konsantre-cam-suyu-52c-1-l-21678-1535.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-antifrizli-konsantre-cam-suyu-52c-1-l-21678",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "6923",
            "name": "LIQUI MOLY Antifrizli Konsantre Cam Suyu -60°C 1 l (6923)",
            "nameFa": "LIQUI MOLY ضدیخli کنسانتره Cam Suyu -60°C 1 l (6923)",
            "nameTr": "LIQUI MOLY Antifrizli Konsantre Cam Suyu -60°C 1 l (6923)",
            "sku": "6923",
            "priceTry": 404.45,
            "priceUsd": 8.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-cam-suyu-antifirizi-1-l-6923-7350.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-cam-suyu-antifirizi-1-l-6923",
            "category": "ضدیخ و رادیاتور"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Marin Gresi 250 g (25042)",
            "nameFa": "LIQUI MOLY Marin گریس 250 g (25042)",
            "nameTr": "LIQUI MOLY Marin Gresi 250 g (25042)",
            "sku": "250",
            "priceTry": 778.25,
            "priceUsd": 16.56,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marin-gresi-250-g-25042-2945.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marin-gresi-250-g-25042",
            "category": "مارین"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Marin Gresi 400 g (25043)",
            "nameFa": "LIQUI MOLY Marin گریس 400 g (25043)",
            "nameTr": "LIQUI MOLY Marin Gresi 400 g (25043)",
            "sku": "400",
            "priceTry": 676.82,
            "priceUsd": 14.4,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marin-gresi-400-g-25043-5219.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marin-gresi-400-g-25043",
            "category": "مارین"
      },
      {
            "id": "300",
            "name": "marine motor koruyucu, foggin oil spray",
            "nameFa": "marine motor koruyucu, foggin oil spray",
            "nameTr": "marine motor koruyucu, foggin oil spray",
            "sku": "300",
            "priceTry": 487.01,
            "priceUsd": 10.36,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-marine-motor-koruyucu-sprey-marine-storage-fogging-oil-300-ml-25033-4313.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-marine-motor-koruyucu-sprey-marine-storage-fogging-oil-300-ml-25033",
            "category": "مارین"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Araç İçi Temizleyicisi 500 ml (1547)",
            "nameFa": "LIQUI MOLY Araç İçi پاک‌کنندهsi 500 ml (1547)",
            "nameTr": "LIQUI MOLY Araç İçi Temizleyicisi 500 ml (1547)",
            "sku": "500",
            "priceTry": 398.09,
            "priceUsd": 8.47,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-aracici-temizleyicisi-500-ml-1547",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Boya Parlatma Kremi 300 g (1532)",
            "nameFa": "LIQUI MOLY Boya Parlatma Kremi 300 g (1532)",
            "nameTr": "LIQUI MOLY Boya Parlatma Kremi 300 g (1532)",
            "sku": "300",
            "priceTry": 896.19,
            "priceUsd": 19.07,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-boya-parlatma-kremi-300-g-1532-8990.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-boya-parlatma-kremi-300-g-1532",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Boğaz Kelebeği Temizleyici Spreyi 400 ml (5111)",
            "nameFa": "LIQUI MOLY Boğaz Kelebeği پاک‌کننده اسپری 400 ml (5111)",
            "nameTr": "LIQUI MOLY Boğaz Kelebeği Temizleyici Spreyi 400 ml (5111)",
            "sku": "400",
            "priceTry": 785.41,
            "priceUsd": 16.71,
            "image": "https://www.liquimolyturkey.com/admin/resimler/bogaz-kelebegi-temizleyici-spreyi-400-ml-5111-8164.jpg",
            "url": "https://shop.egemot.com.tr/bogaz-kelebegi-temizleyici-spreyi-400-ml-5111",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "125",
            "name": "LIQUI MOLY Cam Yağmur Suyu Kaydırıcı 125 Ml. (1590)",
            "nameFa": "LIQUI MOLY Cam Yağmur Suyu روان‌کننده 125 Ml. (1590)",
            "nameTr": "LIQUI MOLY Cam Yağmur Suyu Kaydırıcı 125 Ml. (1590)",
            "sku": "125",
            "priceTry": 398.33,
            "priceUsd": 8.48,
            "image": "https://www.liquimolyturkey.com/admin/resimler/cam-yagmur-suyu-kaydirici-125-ml-1590-3540.jpg",
            "url": "https://shop.egemot.com.tr/cam-yagmur-suyu-kaydirici-125-ml-1590",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "3623",
            "name": "LIQUI MOLY Conta Sökücü, Çıkarıcısı 300 ml (3623)",
            "nameFa": "LIQUI MOLY Conta Sökücü, Çıkarıcısı 300 ml (3623)",
            "nameTr": "LIQUI MOLY Conta Sökücü, Çıkarıcısı 300 ml (3623)",
            "sku": "3623",
            "priceTry": 626.33,
            "priceUsd": 13.33,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-conta-sokucu-cikaricisi-3623-8545.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-conta-sokucu-cikaricisi-3623",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Döşeme Temizleme Köpüğü 300 ml (1539)",
            "nameFa": "LIQUI MOLY Döşeme تمیزکننده Köpüğü 300 ml (1539)",
            "nameTr": "LIQUI MOLY Döşeme Temizleme Köpüğü 300 ml (1539)",
            "sku": "300",
            "priceTry": 505.39,
            "priceUsd": 10.75,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000490_liqui-moly-doseme-temizleme-kopugu-300-ml-1539_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-doseme-temizleme-kopugu-300-ml-1539",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Döşeme Temizleme Köpüğü 300 ml (23046)",
            "nameFa": "LIQUI MOLY Döşeme تمیزکننده Köpüğü 300 ml (23046)",
            "nameTr": "LIQUI MOLY Döşeme Temizleme Köpüğü 300 ml (23046)",
            "sku": "300",
            "priceTry": 621.95,
            "priceUsd": 13.23,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-doseme-temizleme-kopugu-300-ml-23046-9155.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-doseme-temizleme-kopugu-300-ml-23046",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "100",
            "name": "LIQUI MOLY Ekran Temizleyici 100 ml (21634)",
            "nameFa": "LIQUI MOLY Ekran پاک‌کننده 100 ml (21634)",
            "nameTr": "LIQUI MOLY Ekran Temizleyici 100 ml (21634)",
            "sku": "100",
            "priceTry": 524.1,
            "priceUsd": 11.15,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-ekran-temizleyici-100-ml-21634-4293.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-ekran-temizleyici-100-ml-21634",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "3365",
            "name": "LIQUI MOLY El Temizleme Kremi (Sıvı) 3 Litre (3365)",
            "nameFa": "LIQUI MOLY El تمیزکننده Kremi (Sıvı) 3 لیتر (3365)",
            "nameTr": "LIQUI MOLY El Temizleme Kremi (Sıvı) 3 Litre (3365)",
            "sku": "3365",
            "priceTry": 1673.92,
            "priceUsd": 35.62,
            "image": "https://www.liquimolyturkey.com/admin/resimler/el-temizleme-kremi-3-litre-3365-endustriyel-1787.jpg",
            "url": "https://shop.egemot.com.tr/el-temizleme-kremi-3-litre-3365-endustriyel",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "2187",
            "name": "LIQUI MOLY El Temizleme Kremi 12,5 Litre (2187)",
            "nameFa": "LIQUI MOLY El تمیزکننده Kremi 12,5 لیتر (2187)",
            "nameTr": "LIQUI MOLY El Temizleme Kremi 12,5 Litre (2187)",
            "sku": "2187",
            "priceTry": 2396.83,
            "priceUsd": 51.0,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000291_liqui-moly-el-temizleme-kremi-125-litre-2187_550.jpeg",
            "url": "https://shop.egemot.com.tr/el-temizleme-kremi-2187",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY Far Temizleyici Pasta 200 Ml. (2320)",
            "nameFa": "LIQUI MOLY Far پاک‌کننده Pasta 200 Ml. (2320)",
            "nameTr": "LIQUI MOLY Far Temizleyici Pasta 200 Ml. (2320)",
            "sku": "200",
            "priceTry": 514.78,
            "priceUsd": 10.95,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000733_liqui-moly-far-temizleyici-pasta-200-ml-2320_550.jpeg",
            "url": "https://shop.egemot.com.tr/far-temizleyici-polikarbonat-far-camlari-200-ml-2320",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "100",
            "name": "LIQUI MOLY Far Temizleyici Pasta 200 Ml. (2320)",
            "nameFa": "LIQUI MOLY Far پاک‌کننده Pasta 200 Ml. (2320)",
            "nameTr": "LIQUI MOLY Far Temizleyici Pasta 200 Ml. (2320)",
            "sku": "100",
            "priceTry": 629.38,
            "priceUsd": 13.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-cizik-giderici-100-ml.-23068-7718.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-cizik-giderici-100-ml.-23068",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY Hava Akışmetre Temizleyici 200 ml (4066)",
            "nameFa": "LIQUI MOLY Hava Akışmetre پاک‌کننده 200 ml (4066)",
            "nameTr": "LIQUI MOLY Hava Akışmetre Temizleyici 200 ml (4066)",
            "sku": "200",
            "priceTry": 485.24,
            "priceUsd": 10.32,
            "image": "https://www.liquimolyturkey.com/admin/resimler/hava-akismetre-temizleyici-200-ml-4066-5629.jpg",
            "url": "https://shop.egemot.com.tr/hava-akismetre-temizleyici-200-ml-4066",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Hızlı Parlaklık Cilası 500 ml (21611)",
            "nameFa": "LIQUI MOLY Hızlı Parlaklık Cilası 500 ml (21611)",
            "nameTr": "LIQUI MOLY Hızlı Parlaklık Cilası 500 ml (21611)",
            "sku": "500",
            "priceTry": 653.55,
            "priceUsd": 13.91,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-hizli-parlaklik-cilasi-500-ml-21611",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Hızlı Pas Sökücü 300 ml (1612)",
            "nameFa": "LIQUI MOLY Hızlı ضدزنگ 300 ml (1612)",
            "nameTr": "LIQUI MOLY Hızlı Pas Sökücü 300 ml (1612)",
            "sku": "300",
            "priceTry": 354.22,
            "priceUsd": 7.54,
            "image": "https://www.liquimolyturkey.com/admin/resimler/hizli-pas-sokucu-300-ml-1612-1554.jpg",
            "url": "https://shop.egemot.com.tr/hizli-pas-sokucu-300-ml-1612",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "1597",
            "name": "LIQUI MOLY Jant Temizleme Spreyi 1 l ( 1597 )",
            "nameFa": "LIQUI MOLY Jant تمیزکننده اسپری 1 l ( 1597 )",
            "nameTr": "LIQUI MOLY Jant Temizleme Spreyi 1 l ( 1597 )",
            "sku": "1597",
            "priceTry": 1058.72,
            "priceUsd": 22.53,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-jant-temizleme-spreyi-1-l-1597-8972.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-jant-temizleme-spreyi-1-l-1597",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Kapı Fitil - Kauçuk Lastik Spreyi 500 ml (1538)",
            "nameFa": "LIQUI MOLY Kapı Fitil - Kauçuk Lastik اسپری 500 ml (1538)",
            "nameTr": "LIQUI MOLY Kapı Fitil - Kauçuk Lastik Spreyi 500 ml (1538)",
            "sku": "500",
            "priceTry": 590.58,
            "priceUsd": 12.57,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kapi-fitil-kaucuk-lastik-spreyi-500-ml-1538",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Karbüratör Temizleyici 400ml (3325)",
            "nameFa": "LIQUI MOLY Karbüratör پاک‌کننده 400ml (3325)",
            "nameTr": "LIQUI MOLY Karbüratör Temizleyici 400ml (3325)",
            "sku": "400",
            "priceTry": 500.84,
            "priceUsd": 10.66,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000568_liqui-moly-karburator-temizleyici-400ml-3325_550.jpeg",
            "url": "https://shop.egemot.com.tr/iqui-moly-karburator-temizleyici-400-ml-3325",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "1571",
            "name": "LIQUI MOLY Kask ve Vizör Su Kaydırıcı & Temizleyici (1571)",
            "nameFa": "LIQUI MOLY Kask ve Vizör Su روان‌کننده & پاک‌کننده (1571)",
            "nameTr": "LIQUI MOLY Kask ve Vizör Su Kaydırıcı & Temizleyici (1571)",
            "sku": "1571",
            "priceTry": 370.5,
            "priceUsd": 7.88,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kask-ve-vizor-su-kaydirici-temizleyici-1571-4214.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kask-ve-vizor-su-kaydirici-temizleyici-1571",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "1603",
            "name": "LIQUI MOLY Kask İçi Temizleyici (1603)",
            "nameFa": "LIQUI MOLY Kask İçi پاک‌کننده (1603)",
            "nameTr": "LIQUI MOLY Kask İçi Temizleyici (1603)",
            "sku": "1603",
            "priceTry": 408.5,
            "priceUsd": 8.69,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kaskici-temizleyici-1603-1086.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kaskici-temizleyici-1603",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY Kemirgenlerden Koruma Spreyi 200 Ml. (1515)",
            "nameFa": "LIQUI MOLY Kemirgenlerden Koruma اسپری 200 Ml. (1515)",
            "nameTr": "LIQUI MOLY Kemirgenlerden Koruma Spreyi 200 Ml. (1515)",
            "sku": "200",
            "priceTry": 435.39,
            "priceUsd": 9.26,
            "image": "https://www.liquimolyturkey.com/admin/resimler/kemirgen-koruyucu-sprey-200-ml-1515-8125.jpg",
            "url": "https://shop.egemot.com.tr/kemirgen-koruyucu-sprey-200-ml-1515",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "21465",
            "name": "LIQUI MOLY Klima Fresh Plus 75 ml (21465)",
            "nameFa": "LIQUI MOLY Klima Fresh Plus 75 ml (21465)",
            "nameTr": "LIQUI MOLY Klima Fresh Plus 75 ml (21465)",
            "sku": "21465",
            "priceTry": 477.82,
            "priceUsd": 10.17,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-fresh-plus-75-ml-21465-8835.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-klima-fresh-plus-75-ml-21465",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Klima Sistem Temizleyici Sprey 250 ml (4087)",
            "nameFa": "LIQUI MOLY Klima سیستم پاک‌کننده اسپری 250 ml (4087)",
            "nameTr": "LIQUI MOLY Klima Sistem Temizleyici Sprey 250 ml (4087)",
            "sku": "250",
            "priceTry": 650.35,
            "priceUsd": 13.84,
            "image": "https://www.liquimolyturkey.com/admin/resimler/klima-sistem-temizleyici-sprey-250-ml-4087-2778.jpg",
            "url": "https://shop.egemot.com.tr/klima-sistem-temizleyici-sprey-250-ml-4087",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "4090",
            "name": "LIQUI MOLY Klima Sistemi Temizlik Tabancası 1 Adet (4090)",
            "nameFa": "LIQUI MOLY Klima سیستمi Temizlik Tabancası 1 Adet (4090)",
            "nameTr": "LIQUI MOLY Klima Sistemi Temizlik Tabancası 1 Adet (4090)",
            "sku": "4090",
            "priceTry": 8732.87,
            "priceUsd": 185.81,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-sistemi-temizlik-tabancasi-1-adet-4090-1894.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-klima-sistemi-temizlik-tabancasi-1-adet-4090",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "4091",
            "name": "LIQUI MOLY Klima Sistemi Temizleme Sıvısı 1 litre (21921)",
            "nameFa": "LIQUI MOLY Klima سیستمi تمیزکننده Sıvısı 1 لیتر (21921)",
            "nameTr": "LIQUI MOLY Klima Sistemi Temizleme Sıvısı 1 litre (21921)",
            "sku": "4091",
            "priceTry": 519.61,
            "priceUsd": 11.06,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000937_liqui-moly-klima-sistemi-temizleme-sivisi-1-litre-21921_550.png",
            "url": "https://shop.egemot.com.tr/klima-sistemi-temizleme-sivisi-1-litre-4091",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "21921",
            "name": "LIQUI MOLY Klima Sistemi Temizleme Sıvısı 1 litre (4091)",
            "nameFa": "LIQUI MOLY Klima سیستمi تمیزکننده Sıvısı 1 لیتر (4091)",
            "nameTr": "LIQUI MOLY Klima Sistemi Temizleme Sıvısı 1 litre (4091)",
            "sku": "21921",
            "priceTry": 636.96,
            "priceUsd": 13.55,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-klima-sistemi-temizleme-sivisi-1-litre-21921-6024.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-klima-sistemi-temizleme-sivisi-1-litre-21921",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "600",
            "name": "LIQUI MOLY Kokpit Parlatıcı 600 ml (1610)",
            "nameFa": "LIQUI MOLY Kokpit براق‌کننده 600 ml (1610)",
            "nameTr": "LIQUI MOLY Kokpit Parlatıcı 600 ml (1610)",
            "sku": "600",
            "priceTry": 497.15,
            "priceUsd": 10.58,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-kokpit-parlaticisi-600-ml-1610-6409.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-kokpit-parlaticisi-600-ml-1610",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Korozyon Önleyici Mum Sprey - Kahverengi 500 ml (6103)",
            "nameFa": "LIQUI MOLY Korozyon پیشگیرانه Mum اسپری - Kahverengi 500 ml (6103)",
            "nameTr": "LIQUI MOLY Korozyon Önleyici Mum Sprey - Kahverengi 500 ml (6103)",
            "sku": "500",
            "priceTry": 888.79,
            "priceUsd": 18.91,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-korozyon-onleyici-mum-sprey-500-ml-6103",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Krom Parlatma Kremi 250 ml (1529)",
            "nameFa": "LIQUI MOLY Krom Parlatma Kremi 250 ml (1529)",
            "nameTr": "LIQUI MOLY Krom Parlatma Kremi 250 ml (1529)",
            "sku": "500",
            "priceTry": 624.7,
            "priceUsd": 13.29,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-krom-parlatici-krem-500-ml-1529",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Kumaş Bakım / Su itici Spreyi 400 ml (1594)",
            "nameFa": "LIQUI MOLY Kumaş Bakım / Su itici اسپری 400 ml (1594)",
            "nameTr": "LIQUI MOLY Kumaş Bakım / Su itici Spreyi 400 ml (1594)",
            "sku": "400",
            "priceTry": 452.91,
            "priceUsd": 9.64,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000492_liqui-moly-kumas-bakim-su-itici-spreyi-400-ml-1594_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-kumas-bakim-spreyi-400-ml-1594",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "200",
            "name": "LIQUI MOLY LM 40 Çok Amaçlı Sprey 200 ml (3390)",
            "nameFa": "LIQUI MOLY LM 40 Çok Amaçlı اسپری 200 ml (3390)",
            "nameTr": "LIQUI MOLY LM 40 Çok Amaçlı Sprey 200 ml (3390)",
            "sku": "200",
            "priceTry": 354.61,
            "priceUsd": 7.54,
            "image": "https://www.liquimolyturkey.com/admin/resimler/lm-40-cok-amacli-sprey-200-ml-3390-1581.jpg",
            "url": "https://shop.egemot.com.tr/lm-40-cok-amacli-sprey-200-ml-3390",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY LM 40 Çok Amaçlı Sprey 400 ml (3391)",
            "nameFa": "LIQUI MOLY LM 40 Çok Amaçlı اسپری 400 ml (3391)",
            "nameTr": "LIQUI MOLY LM 40 Çok Amaçlı Sprey 400 ml (3391)",
            "sku": "400",
            "priceTry": 445.55,
            "priceUsd": 9.48,
            "image": "https://www.liquimolyturkey.com/admin/resimler/lm-40-cok-amacli-sprey-400-ml-3391-8474.jpg",
            "url": "https://shop.egemot.com.tr/lm-40-cok-amacli-sprey-400-ml-3391",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Lastik Tamir Spreyi 500 ml (3343)",
            "nameFa": "LIQUI MOLY Lastik Tamir اسپری 500 ml (3343)",
            "nameTr": "LIQUI MOLY Lastik Tamir Spreyi 500 ml (3343)",
            "sku": "500",
            "priceTry": 930.94,
            "priceUsd": 19.81,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-lastik-tamir-spreyi-500-ml-3343",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Lastik Parlatıcı 400 ml (23061)",
            "nameFa": "LIQUI MOLY Lastik براق‌کننده 400 ml (23061)",
            "nameTr": "LIQUI MOLY Lastik Parlatıcı 400 ml (23061)",
            "sku": "400",
            "priceTry": 849.76,
            "priceUsd": 18.08,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-lastik-parlatici-400-ml-23061-1717.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-lastik-parlatici-400-ml-23061",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Metalik Cila 500 ml (1424)",
            "nameFa": "LIQUI MOLY Metalik Cila 500 ml (1424)",
            "nameTr": "LIQUI MOLY Metalik Cila 500 ml (1424)",
            "sku": "500",
            "priceTry": 640.63,
            "priceUsd": 13.63,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-metalik-cila-500-ml-1424",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Motor Bölmesi Temizleyici 400 ml (3326)",
            "nameFa": "LIQUI MOLY Motor Bölmesi پاک‌کننده 400 ml (3326)",
            "nameTr": "LIQUI MOLY Motor Bölmesi Temizleyici 400 ml (3326)",
            "sku": "400",
            "priceTry": 587.31,
            "priceUsd": 12.5,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-ust-temizleyici-400-ml-3326-2771.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-ust-temizleyici-400-ml-3326",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Motor Üst Temizleyici / Parlatıcı 400 ml (3327)",
            "nameFa": "LIQUI MOLY Motor Üst پاک‌کننده / براق‌کننده 400 ml (3327)",
            "nameTr": "LIQUI MOLY Motor Üst Temizleyici / Parlatıcı 400 ml (3327)",
            "sku": "400",
            "priceTry": 629.29,
            "priceUsd": 13.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motor-ust-temizleyici-parlatici-400-ml-3327-8854.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motor-ust-temizleyici-parlatici-400-ml-3327",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY One For All Bakım Ürünü 250 ml (1650)",
            "nameFa": "LIQUI MOLY One For All محصول نگهداری 250 ml (1650)",
            "nameTr": "LIQUI MOLY One For All Bakım Ürünü 250 ml (1650)",
            "sku": "250",
            "priceTry": 336.47,
            "priceUsd": 7.16,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-one-for-all-bakim-urunu-250-ml-1650-4555.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-one-for-all-bakim-urunu-250-ml-1650",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "6925",
            "name": "LIQUI MOLY Oto Cam Temizleme Tableti 1 Adet (6925)",
            "nameFa": "LIQUI MOLY Oto Cam تمیزکننده Tableti 1 Adet (6925)",
            "nameTr": "LIQUI MOLY Oto Cam Temizleme Tableti 1 Adet (6925)",
            "sku": "6925",
            "priceTry": 142.95,
            "priceUsd": 3.04,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-cam-temizleme-tableti-1-adet-6925-3948.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-cam-temizleme-tableti-1-adet-6925",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "22033",
            "name": "LIQUI MOLY Oto Cam Temizleme Konsantre Sıvısı Mini (22033)",
            "nameFa": "LIQUI MOLY Oto Cam تمیزکننده کنسانتره Sıvısı Mini (22033)",
            "nameTr": "LIQUI MOLY Oto Cam Temizleme Konsantre Sıvısı Mini (22033)",
            "sku": "22033",
            "priceTry": 95.11,
            "priceUsd": 2.02,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-cam-temizleme-konsantre-sivisi-22033-3214.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-cam-temizleme-konsantre-sivisi-22033",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Plastik Yüzey Bakım ve Temizleyici Sprey 500 ml (1536)",
            "nameFa": "LIQUI MOLY Plastik Yüzey Bakım ve پاک‌کننده اسپری 500 ml (1536)",
            "nameTr": "LIQUI MOLY Plastik Yüzey Bakım ve Temizleyici Sprey 500 ml (1536)",
            "sku": "500",
            "priceTry": 754.34,
            "priceUsd": 16.05,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-plastik-yuzey-temizleyici-sprey-500-ml-1536",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Seramikli Pas Sökücü 300 ml (1641)",
            "nameFa": "LIQUI MOLY Seramikli ضدزنگ 300 ml (1641)",
            "nameTr": "LIQUI MOLY Seramikli Pas Sökücü 300 ml (1641)",
            "sku": "300",
            "priceTry": 482.36,
            "priceUsd": 10.26,
            "image": "https://www.liquimolyturkey.com/admin/resimler/seramikli-pas-sokucu-300-ml-1641-2375.jpg",
            "url": "https://shop.egemot.com.tr/seramikli-pas-sokucu-300-ml-1641",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "24395",
            "name": "LIQUI MOLY Susturucu Temizleyici (24395)",
            "nameFa": "LIQUI MOLY Susturucu پاک‌کننده (24395)",
            "nameTr": "LIQUI MOLY Susturucu Temizleyici (24395)",
            "sku": "24395",
            "priceTry": 880.51,
            "priceUsd": 18.73,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-susturucu-temizleyici-24395-3040.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-susturucu-temizleyici-24395",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Süper K İç-Dış Temizleyici 250 ml (1682)",
            "nameFa": "LIQUI MOLY Süper K İç-Dış پاک‌کننده 250 ml (1682)",
            "nameTr": "LIQUI MOLY Süper K İç-Dış Temizleyici 250 ml (1682)",
            "sku": "250",
            "priceTry": 213.28,
            "priceUsd": 4.54,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-super-k-icdis-temizleyici-250-ml-1682-1784.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-super-k-icdis-temizleyici-250-ml-1682",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "3335",
            "name": "LIQUI MOLY Sıvı El Temizleyici Dispanseri 1 Adet (3335)",
            "nameFa": "LIQUI MOLY Sıvı El پاک‌کننده Dispanseri 1 Adet (3335)",
            "nameTr": "LIQUI MOLY Sıvı El Temizleyici Dispanseri 1 Adet (3335)",
            "sku": "3335",
            "priceTry": 2967.57,
            "priceUsd": 63.14,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sivi-el-temizleyici-dispanseri-1-adet-3335-3328.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-sivi-el-temizleyici-dispanseri-1-adet-3335",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "3332",
            "name": "LIQUI MOLY Sıvı El Temizleyici Duvar Braketi 1 Adet (3332)",
            "nameFa": "LIQUI MOLY Sıvı El پاک‌کننده Duvar Braketi 1 Adet (3332)",
            "nameTr": "LIQUI MOLY Sıvı El Temizleyici Duvar Braketi 1 Adet (3332)",
            "sku": "3332",
            "priceTry": 1569.96,
            "priceUsd": 33.4,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-el-temizleyici-braketi-1-adet-3332-6254.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-el-temizleyici-braketi-1-adet-3332",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Yağ Çamuru Temizliği 300 ml (5200)",
            "nameFa": "LIQUI MOLY Yağ Çamuru Temizliği 300 ml (5200)",
            "nameTr": "LIQUI MOLY Yağ Çamuru Temizliği 300 ml (5200)",
            "sku": "300",
            "priceTry": 990.55,
            "priceUsd": 21.08,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-yag-camuru-temizligi-300-ml-5200-7983.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-yag-camuru-temizligi-300-ml-5200",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Zinc Alüminyum Sprey 400 ml (1640)",
            "nameFa": "LIQUI MOLY Zinc Alüminyum اسپری 400 ml (1640)",
            "nameTr": "LIQUI MOLY Zinc Alüminyum Sprey 400 ml (1640)",
            "sku": "400",
            "priceTry": 861.53,
            "priceUsd": 18.33,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-zinc-aluminyum-sprey-400-ml-1640-1666.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-zinc-aluminyum-sprey-400-ml-1640",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "400",
            "name": "LIQUI MOLY Zincir Spreyi 400 ml (3579)",
            "nameFa": "LIQUI MOLY Zincir اسپری 400 ml (3579)",
            "nameTr": "LIQUI MOLY Zincir Spreyi 400 ml (3579)",
            "sku": "400",
            "priceTry": 581.22,
            "priceUsd": 12.37,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-zincir-spreyi-400-ml-3579-7423.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-zincir-spreyi-400-ml-3579",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "25050",
            "name": "LIQUI MOLY Üniversal Tekne Temizleyici 1Lt. (25050)",
            "nameFa": "LIQUI MOLY Üniversal Tekne پاک‌کننده 1Lt. (25050)",
            "nameTr": "LIQUI MOLY Üniversal Tekne Temizleyici 1Lt. (25050)",
            "sku": "25050",
            "priceTry": 741.49,
            "priceUsd": 15.78,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000154_liqui-moly-universal-tekne-temizleyici-1lt-25050_550.jpeg",
            "url": "https://shop.egemot.com.tr/tekne-universal-temizleyici-1lt-25050",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "25049",
            "name": "LIQUI MOLY Üniversal Tekne Temizleyici 1Lt. (25050)",
            "nameFa": "LIQUI MOLY Üniversal Tekne پاک‌کننده 1Lt. (25050)",
            "nameTr": "LIQUI MOLY Üniversal Tekne Temizleyici 1Lt. (25050)",
            "sku": "25049",
            "priceTry": 775.75,
            "priceUsd": 16.51,
            "image": "https://www.liquimolyturkey.com/admin/resimler/tekne-universal-temizleyici-1lt-25049-4226.jpg",
            "url": "https://shop.egemot.com.tr/tekne-universal-temizleyici-1lt-25049",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "21832",
            "name": "LIQUI MOLY Oto Kokusu Cherry (21832)",
            "nameFa": "LIQUI MOLY خوشبوکننده خودرو Cherry (21832)",
            "nameTr": "LIQUI MOLY Oto Kokusu Cherry (21832)",
            "sku": "21832",
            "priceTry": 443.14,
            "priceUsd": 9.43,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-cherry-21832-5975.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-kokusu-cherry-21832",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "1661",
            "name": "LIQUI MOLY Oto Kokusu Limon 5 g (1661)",
            "nameFa": "LIQUI MOLY خوشبوکننده خودرو Limon 5 g (1661)",
            "nameTr": "LIQUI MOLY Oto Kokusu Limon 5 g (1661)",
            "sku": "1661",
            "priceTry": 165.1,
            "priceUsd": 3.51,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-limon-1661-5241.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-kokusu-limon-1661",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "21831",
            "name": "LIQUI MOLY Oto Kokusu New Car (21831)",
            "nameFa": "LIQUI MOLY خوشبوکننده خودرو New Car (21831)",
            "nameTr": "LIQUI MOLY Oto Kokusu New Car (21831)",
            "sku": "21831",
            "priceTry": 443.14,
            "priceUsd": 9.43,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-new-car-21831-7836.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-kokusu-new-car-21831",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "21833",
            "name": "LIQUI MOLY Oto Kokusu Ocean (21833)",
            "nameFa": "LIQUI MOLY خوشبوکننده خودرو Ocean (21833)",
            "nameTr": "LIQUI MOLY Oto Kokusu Ocean (21833)",
            "sku": "21833",
            "priceTry": 443.14,
            "priceUsd": 9.43,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-ocean-21833-6549.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-kokusu-ocean-21833",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "1664",
            "name": "LIQUI MOLY Oto Kokusu Sport Fresh 5 g (1664)",
            "nameFa": "LIQUI MOLY خوشبوکننده خودرو Sport Fresh 5 g (1664)",
            "nameTr": "LIQUI MOLY Oto Kokusu Sport Fresh 5 g (1664)",
            "sku": "1664",
            "priceTry": 136.16,
            "priceUsd": 2.9,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-sport-fresh-5-g-1664-1111.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-kokusu-sport-fresh-5-g-1664",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "21830",
            "name": "LIQUI MOLY Oto Kokusu Vanilya (21830)",
            "nameFa": "LIQUI MOLY خوشبوکننده خودرو Vanilya (21830)",
            "nameTr": "LIQUI MOLY Oto Kokusu Vanilya (21830)",
            "sku": "21830",
            "priceTry": 443.14,
            "priceUsd": 9.43,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-oto-kokusu-vanilya-21830-9911.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-oto-kokusu-vanilya-21830",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "1517",
            "name": "LIQUI MOLY Konsantre Cam Temizleyici 50 Ml. (1517)",
            "nameFa": "LIQUI MOLY کنسانتره Cam پاک‌کننده 50 Ml. (1517)",
            "nameTr": "LIQUI MOLY Konsantre Cam Temizleyici 50 Ml. (1517)",
            "sku": "1517",
            "priceTry": 140.15,
            "priceUsd": 2.98,
            "image": "https://www.liquimolyturkey.com/admin/resimler/konsantre-cam-temizleyici-50-ml-1517-4718.jpg",
            "url": "https://shop.egemot.com.tr/konsantre-cam-temizleyici-50-ml-1517",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "liqui-moly-zincir-ve-balata-temizleme-spreyi-500",
            "name": "Liqui Moly Zincir Ve Balata Temizleme Spreyi 500ml",
            "nameFa": "Liqui Moly Zincir Ve Balata تمیزکننده اسپری 500ml",
            "nameTr": "Liqui Moly Zincir Ve Balata Temizleme Spreyi 500ml",
            "sku": null,
            "priceTry": 422.75,
            "priceUsd": 8.99,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-zincir-ve-balata-temizleme-spreyi-500ml-8961.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-zincir-ve-balata-temizleme-spreyi-500ml",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "500",
            "name": "MULTİ SPREY 7 -Çok Amaçlı Sprey 500 ml (3305)",
            "nameFa": "MULTİ اسپری 7 -Çok Amaçlı اسپری 500 ml (3305)",
            "nameTr": "MULTİ SPREY 7 -Çok Amaçlı Sprey 500 ml (3305)",
            "sku": "500",
            "priceTry": 515.18,
            "priceUsd": 10.96,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/multisprey-7-cok-amacli-sprey-500-ml-3305",
            "category": "مراقبت و نظافت خودرو"
      },
      {
            "id": "7824",
            "name": "LIQUI MOLY 4 Zamanlı Motosiklet Benzin Katkısı -Yakıt sistemi Temizleyici 80 ml (7824)",
            "nameFa": "LIQUI MOLY 4 Zamanlı موتورسیکلت بنزین افزودنیsı -Yakıt سیستمi پاک‌کننده 80 ml (7824)",
            "nameTr": "LIQUI MOLY 4 Zamanlı Motosiklet Benzin Katkısı -Yakıt sistemi Temizleyici 80 ml (7824)",
            "sku": "7824",
            "priceTry": 237.5,
            "priceUsd": 5.05,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-benzin-katkisi-yakit-sistemi-temizleyici-80-ml-7824-6220.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motosiklet-benzin-katkisi-yakit-sistemi-temizleyici-80-ml-7824",
            "category": "موتور سیکلت"
      },
      {
            "id": "250",
            "name": "LIQUI MOLY Deri Bakım Kremi 250 ml (1554)",
            "nameFa": "LIQUI MOLY Deri Bakım Kremi 250 ml (1554)",
            "nameTr": "LIQUI MOLY Deri Bakım Kremi 250 ml (1554)",
            "sku": "250",
            "priceTry": 630.32,
            "priceUsd": 13.41,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-deri-bakim-kremi-250-ml-1554-4823.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-deri-bakim-kremi-250-ml-1554",
            "category": "موتور سیکلت"
      },
      {
            "id": "1508",
            "name": "LIQUI MOLY Tam Sentetik Zincir Yağlama Spreyi (1508)",
            "nameFa": "LIQUI MOLY تمام‌سنتتیک Zincir Yağlama اسپری (1508)",
            "nameTr": "LIQUI MOLY Tam Sentetik Zincir Yağlama Spreyi (1508)",
            "sku": "1508",
            "priceTry": 394.25,
            "priceUsd": 8.39,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sentetik-zincir-yaglama-spreyi-1508-9612.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-sentetik-zincir-yaglama-spreyi-1508",
            "category": "موتور سیکلت"
      },
      {
            "id": "liqui-moly-sentetik-zincir-ya-lama-spreyi-beyaz-",
            "name": "LIQUI MOLY Sentetik Zincir Yağlama Spreyi Beyaz (1591)",
            "nameFa": "LIQUI MOLY سنتتیک Zincir Yağlama اسپری Beyaz (1591)",
            "nameTr": "LIQUI MOLY Sentetik Zincir Yağlama Spreyi Beyaz (1591)",
            "sku": null,
            "priceTry": 665.0,
            "priceUsd": 14.15,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-sentetik-zincir-yaglama-spreyi-beyaz-3865.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-sentetik-zincir-yaglama-spreyi-beyaz",
            "category": "موتور سیکلت"
      },
      {
            "id": "liqui-moly-motosiklet-engine-flush-plus-motor-i-",
            "name": "LIQUI MOLY Motosiklet Engine Flush Plus - Motor İçi Temizleyici 250ml (1657)",
            "nameFa": "LIQUI MOLY موتورسیکلت Engine Flush Plus - Motor İçi پاک‌کننده 250ml (1657)",
            "nameTr": "LIQUI MOLY Motosiklet Engine Flush Plus - Motor İçi Temizleyici 250ml (1657)",
            "sku": null,
            "priceTry": 498.75,
            "priceUsd": 10.61,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-engine-flush-motor-ici-temizleyici-2022.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motosiklet-engine-flush-motor-ici-temizleyici",
            "category": "موتور سیکلت"
      },
      {
            "id": "2657",
            "name": "LIQUI MOLY Motosiklet Engine Flush- Motor İçi Temizleyici 250ml (1657)",
            "nameFa": "LIQUI MOLY موتورسیکلت Engine Flush- Motor İçi پاک‌کننده 250ml (1657)",
            "nameTr": "LIQUI MOLY Motosiklet Engine Flush- Motor İçi Temizleyici 250ml (1657)",
            "sku": "2657",
            "priceTry": 470.0,
            "priceUsd": 10.0,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000881_liqui-moly-motosiklet-engine-flush-motor-ci-temizleyici-250ml-1657_550.png",
            "url": "https://shop.egemot.com.tr/liqui-moly-motosiklet-engine-flush-motor-Ici-temizleyici-250ml-2657",
            "category": "موتور سیکلت"
      },
      {
            "id": "1604",
            "name": "LIQUI MOLY Motosiklet Hava Filtresi Yağlama Spreyi (1604)",
            "nameFa": "LIQUI MOLY موتورسیکلت Hava Filtresi Yağlama اسپری (1604)",
            "nameTr": "LIQUI MOLY Motosiklet Hava Filtresi Yağlama Spreyi (1604)",
            "sku": "1604",
            "priceTry": 617.5,
            "priceUsd": 13.14,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-hava-filtresi-yaglama-spreyi-1604-2215.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motosiklet-hava-filtresi-yaglama-spreyi-1604",
            "category": "موتور سیکلت"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Motosiklet Lastik Tamir Spreyi 300 ml (1579)",
            "nameFa": "LIQUI MOLY موتورسیکلت Lastik Tamir اسپری 300 ml (1579)",
            "nameTr": "LIQUI MOLY Motosiklet Lastik Tamir Spreyi 300 ml (1579)",
            "sku": "300",
            "priceTry": 451.25,
            "priceUsd": 9.6,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motosiklet-lastik-tamir-spreyi-300-ml-1579-5363.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motosiklet-lastik-tamir-spreyi-300-ml-1579",
            "category": "موتور سیکلت"
      },
      {
            "id": "7823",
            "name": "LIQUI MOLY Motosiklet Benzin Katkısı (Motor Performans Arttırıcı) 80 ml (7823)",
            "nameFa": "LIQUI MOLY موتورسیکلت بنزین افزودنیsı (Motor Performans Arttırıcı) 80 ml (7823)",
            "nameTr": "LIQUI MOLY Motosiklet Benzin Katkısı (Motor Performans Arttırıcı) 80 ml (7823)",
            "sku": "7823",
            "priceTry": 244.15,
            "priceUsd": 5.19,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-motorbike-speed-shooter-80-ml-7823-4096.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-motorbike-speed-shooter-80-ml-7823",
            "category": "موتور سیکلت"
      },
      {
            "id": "1043",
            "name": "LIQUI MOLY ATF III Direksiyon Hidroliği / Otomatik Şanzıman Yağı(1043)",
            "nameFa": "LIQUI MOLY ATF III Direksiyon Hidroliği / Otomatik روغن گیربکس(1043)",
            "nameTr": "LIQUI MOLY ATF III Direksiyon Hidroliği / Otomatik Şanzıman Yağı(1043)",
            "sku": "1043",
            "priceTry": 915.65,
            "priceUsd": 19.48,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-atf-iii-direksiyon-hidroligi-1043-8782.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-atf-iii-direksiyon-hidroligi-1043",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "21158",
            "name": "LIQUI MOLY DOT 4 Fren Hidroliği 5 litre (21158)",
            "nameFa": "LIQUI MOLY DOT 4 هیدرولیک ترمز 5 لیتر (21158)",
            "nameTr": "LIQUI MOLY DOT 4 Fren Hidroliği 5 litre (21158)",
            "sku": "21158",
            "priceTry": 3961.02,
            "priceUsd": 84.28,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-dot-4-fren-hidroligi-5-litre-21158-3545.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-dot-4-fren-hidroligi-5-litre-21158",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "8100",
            "name": "LIQUI MOLY DSG Şanzıman Yağı Dual Clutch Transmission Oil 8100 (3640)",
            "nameFa": "LIQUI MOLY DSG روغن گیربکس Dual Clutch Transmission Oil 8100 (3640)",
            "nameTr": "LIQUI MOLY DSG Şanzıman Yağı Dual Clutch Transmission Oil 8100 (3640)",
            "sku": "8100",
            "priceTry": 1002.9,
            "priceUsd": 21.34,
            "image": "https://www.liquimolyturkey.com/admin/resimler/dual-clutch-transmission-oil-8100-3640-6697.jpg",
            "url": "https://shop.egemot.com.tr/dual-clutch-transmission-oil-8100-3640",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "1099",
            "name": "LIQUI MOLY Direksiyon Hidrolik Sistemi Sızıntı Önleyici 35 ml (1099)",
            "nameFa": "LIQUI MOLY Direksiyon Hidrolik سیستمi Sızıntı پیشگیرانه 35 ml (1099)",
            "nameTr": "LIQUI MOLY Direksiyon Hidrolik Sistemi Sızıntı Önleyici 35 ml (1099)",
            "sku": "1099",
            "priceTry": 349.61,
            "priceUsd": 7.44,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-direksiyon-hidrolik-sistemi-sizinti-onleyici-50-ml-1099-9636.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-direksiyon-hidrolik-sistemi-sizinti-onleyici-50-ml-1099",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "liqui-moly-direksiyon-ve-merkezi-sistem-hidrolik",
            "name": "LIQUI MOLY Direksiyon ve Merkezi Sistem Hidrolik Yağı (20468)",
            "nameFa": "LIQUI MOLY Direksiyon ve Merkezi سیستم Hidrolik Yağı (20468)",
            "nameTr": "LIQUI MOLY Direksiyon ve Merkezi Sistem Hidrolik Yağı (20468)",
            "sku": null,
            "priceTry": 999.58,
            "priceUsd": 21.27,
            "image": "https://www.liquimolyturkey.com/admin/resimler/direksiyon-ve-merkezi-sistem-hidrolik-yagi-9723.jpg",
            "url": "https://shop.egemot.com.tr/direksiyon-ve-merkezi-sistem-hidrolik-yagi",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "liqui-moly-direksiyon-ve-merkezi-sistem-hidrolik",
            "name": "LIQUI MOLY Direksiyon ve Merkezi Sistem Hidrolik Yağı 2500 (3667)",
            "nameFa": "LIQUI MOLY Direksiyon ve Merkezi سیستم Hidrolik Yağı 2500 (3667)",
            "nameTr": "LIQUI MOLY Direksiyon ve Merkezi Sistem Hidrolik Yağı 2500 (3667)",
            "sku": null,
            "priceTry": 1011.03,
            "priceUsd": 21.51,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-direksiyon-ve-merkezi-sistem-hidrolik-yagi--5370.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-direksiyon-ve-merkezi-sistem-hidrolik-yagi-",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "liqui-moly-fren-teker-bak-m-seti",
            "name": "LIQUI MOLY Fren /Teker Bakım Seti",
            "nameFa": "LIQUI MOLY Fren /Teker Bakım Seti",
            "nameTr": "LIQUI MOLY Fren /Teker Bakım Seti",
            "sku": null,
            "priceTry": 235.9,
            "priceUsd": 5.02,
            "image": "https://www.liquimolyturkey.com/content/images/thumbs/0000838_liqui-moly-fren-teker-bakim-seti_550.jpeg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-bakim-seti-",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "21126",
            "name": "LIQUI MOLY Fren /Teker Bakım Seti",
            "nameFa": "LIQUI MOLY Fren /Teker Bakım Seti",
            "nameTr": "LIQUI MOLY Fren /Teker Bakım Seti",
            "sku": "21126",
            "priceTry": 265.0,
            "priceUsd": 5.64,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-bakim-seti-21126-6804.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-bakim-seti-21126",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Fren Balatası ve Hızlı Temizlik Spreyi 500 ml (3368)",
            "nameFa": "LIQUI MOLY Fren Balatası ve Hızlı Temizlik اسپری 500 ml (3368)",
            "nameTr": "LIQUI MOLY Fren Balatası ve Hızlı Temizlik Spreyi 500 ml (3368)",
            "sku": "500",
            "priceTry": 277.89,
            "priceUsd": 5.91,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/fren-balata-spreyi-500-ml-3368",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "21121",
            "name": "LIQUI MOLY Fren Gıcırtı Sesi Önleyici 10 g (21121)",
            "nameFa": "LIQUI MOLY Fren Gıcırtı Sesi پیشگیرانه 10 g (21121)",
            "nameTr": "LIQUI MOLY Fren Gıcırtı Sesi Önleyici 10 g (21121)",
            "sku": "21121",
            "priceTry": 106.45,
            "priceUsd": 2.26,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-gicirti-sesi-onleyici-10-g-21121-7253.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-gicirti-sesi-onleyici-10-g-21121",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "3079",
            "name": "LIQUI MOLY Fren Gıcırtı Sesi Önleyici Sprey (3079)",
            "nameFa": "LIQUI MOLY Fren Gıcırtı Sesi پیشگیرانه اسپری (3079)",
            "nameTr": "LIQUI MOLY Fren Gıcırtı Sesi Önleyici Sprey (3079)",
            "sku": "3079",
            "priceTry": 649.19,
            "priceUsd": 13.81,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-gicirti-sesi-onleyici-sprey-3079-2868.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-gicirti-sesi-onleyici-sprey-3079",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "21119",
            "name": "LIQUI MOLY Fren Pimleri için Sentetik Yağlayıcı 5 g (21119)",
            "nameFa": "LIQUI MOLY Fren Pimleri için سنتتیک روان‌کننده 5 g (21119)",
            "nameTr": "LIQUI MOLY Fren Pimleri için Sentetik Yağlayıcı 5 g (21119)",
            "sku": "21119",
            "priceTry": 110.0,
            "priceUsd": 2.34,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-pimleri-yaglayici-5-g-21119-2295.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-pimleri-yaglayici-5-g-21119",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "3074",
            "name": "LIQUI MOLY Fren Ses Önleyici - Fırçalı 200 ml (3074)",
            "nameFa": "LIQUI MOLY Fren Ses پیشگیرانه - Fırçalı 200 ml (3074)",
            "nameTr": "LIQUI MOLY Fren Ses Önleyici - Fırçalı 200 ml (3074)",
            "sku": "3074",
            "priceTry": 1494.53,
            "priceUsd": 31.8,
            "image": "https://www.liquimolyturkey.com/admin/resimler/fren-sesi-onleyici-3074-4106.jpg",
            "url": "https://shop.egemot.com.tr/fren-sesi-onleyici-3074",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "1007",
            "name": "LIQUI MOLY Gear Protect Şanzıman Koruyucu 80 Ml (1007)",
            "nameFa": "LIQUI MOLY Gear Protect Şanzıman Koruyucu 80 Ml (1007)",
            "nameTr": "LIQUI MOLY Gear Protect Şanzıman Koruyucu 80 Ml (1007)",
            "sku": "1007",
            "priceTry": 2266.23,
            "priceUsd": 48.22,
            "image": "https://www.liquimolyturkey.com/admin/resimler/motor-protect-sanziman-koruyucu-80-ml-1007-6497.jpg",
            "url": "https://shop.egemot.com.tr/motor-protect-sanziman-koruyucu-80-ml-1007",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "21419",
            "name": "LIQUI MOLY Haldex Yağı (21419)",
            "nameFa": "LIQUI MOLY Haldex Yağı (21419)",
            "nameTr": "LIQUI MOLY Haldex Yağı (21419)",
            "sku": "21419",
            "priceTry": 1393.6,
            "priceUsd": 29.65,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-haldex-yagi-21419-2-2-6627.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-haldex-yagi-21419-2-2",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "21120",
            "name": "LIQUI MOLY Jant Göbeği Sabitleme Macunu 10 g (21120)",
            "nameFa": "LIQUI MOLY Jant Göbeği Sabitleme Macunu 10 g (21120)",
            "nameTr": "LIQUI MOLY Jant Göbeği Sabitleme Macunu 10 g (21120)",
            "sku": "21120",
            "priceTry": 110.0,
            "priceUsd": 2.34,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-jant-gobegi-sabitleme-macunu-10-g-21120-6375.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-jant-gobegi-sabitleme-macunu-10-g-21120",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "300",
            "name": "LIQUI MOLY Otomatik Şanzıman Temizleyici 300 ml (2512)",
            "nameFa": "LIQUI MOLY Otomatik Şanzıman پاک‌کننده 300 ml (2512)",
            "nameTr": "LIQUI MOLY Otomatik Şanzıman Temizleyici 300 ml (2512)",
            "sku": "300",
            "priceTry": 730.05,
            "priceUsd": 15.53,
            "image": "https://www.liquimolyturkey.com/admin/resimler/otomatik-sanziman-temizleyici-300-ml-2512-5541.jpg",
            "url": "https://shop.egemot.com.tr/otomatik-sanziman-temizleyici-300-ml-2512",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Yarış Tipi Fren Hidroliği 500 ml (21172)",
            "nameFa": "LIQUI MOLY Yarış Tipi هیدرولیک ترمز 500 ml (21172)",
            "nameTr": "LIQUI MOLY Yarış Tipi Fren Hidroliği 500 ml (21172)",
            "sku": "500",
            "priceTry": 1386.76,
            "priceUsd": 29.51,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-yaris-tipi-fren-hidroligi-500-ml-21172",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "1042",
            "name": "LIQUI MOLY Şanzıman Yağ Sızıntı Önleyici 50 ml (1042)",
            "nameFa": "LIQUI MOLY Şanzıman Yağ Sızıntı پیشگیرانه 50 ml (1042)",
            "nameTr": "LIQUI MOLY Şanzıman Yağ Sızıntı Önleyici 50 ml (1042)",
            "sku": "1042",
            "priceTry": 494.35,
            "priceUsd": 10.52,
            "image": "https://www.liquimolyturkey.com/admin/resimler/sanziman-yag-sizinti-onleyici-50-ml-1042-6614.jpg",
            "url": "https://shop.egemot.com.tr/sanziman-yag-sizinti-onleyici-50-ml-1042",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Fren Hidroliği DOT 4 500 ml (3093)",
            "nameFa": "LIQUI MOLY هیدرولیک ترمز DOT 4 500 ml (3093)",
            "nameTr": "LIQUI MOLY Fren Hidroliği DOT 4 500 ml (3093)",
            "sku": "500",
            "priceTry": 523.14,
            "priceUsd": 11.13,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-hidroligi-dot-4-500-ml-3093",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "3092",
            "name": "LIQUI MOLY Fren Hidroliği DOT 5.1 250 ml (3092)",
            "nameFa": "LIQUI MOLY هیدرولیک ترمز DOT 5.1 250 ml (3092)",
            "nameTr": "LIQUI MOLY Fren Hidroliği DOT 5.1 250 ml (3092)",
            "sku": "3092",
            "priceTry": 419.89,
            "priceUsd": 8.93,
            "image": "https://www.liquimolyturkey.com/admin/resimler/liqui-moly-fren-hidroligi-dot-51-3092-9286.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-hidroligi-dot-51-3092",
            "category": "گیربکس و هیدرولیک"
      },
      {
            "id": "500",
            "name": "LIQUI MOLY Fren Hidroliği SL6 DOT 4 500 ml (21167)",
            "nameFa": "LIQUI MOLY هیدرولیک ترمز SL6 DOT 4 500 ml (21167)",
            "nameTr": "LIQUI MOLY Fren Hidroliği SL6 DOT 4 500 ml (21167)",
            "sku": "500",
            "priceTry": 567.44,
            "priceUsd": 12.07,
            "image": "assets/images/liqui-moly/product-500.jpg",
            "url": "https://shop.egemot.com.tr/liqui-moly-fren-hidroligi-sl6-dot-4-500-ml-21167",
            "category": "گیربکس و هیدرولیک"
      }
],
    iranIndustries: [
      {
        name: 'تعمیرگاه و سرویس خودرو',
        desc: 'تامین روغن موتور، افزودنی سوخت و محصولات مراقبت برای سرویس دوره‌ای — سفارش کارتنی یا عمده با پیش‌فاکتور دلاری.',
        image: LM + 'audiences/workshop.svg',
        imageAlt: 'تعمیرگاه خودرو — تامین Liqui Moly',
        icon: 'wrench',
        models: 'Top Tec · Octane Plus · Cera Tec'
      },
      {
        name: 'ناوگان و تاکسی',
        desc: 'روغن و افزودنی بنزین/دیزل برای ناوگان تاکسی، پخش و سازمانی — مصرف مداوم، استعلام عمده و زمان‌بندی تامین.',
        image: LM + 'audiences/fleet.svg',
        imageAlt: 'ناوگان و تاکسی — تامین Liqui Moly',
        icon: 'ship',
        models: '5W-30 · Diesel Additive · Top Tec'
      },
      {
        name: 'موتورسیکلت',
        desc: 'روغن 4T، محصولات مراقبت و نگهداری موتورسیکلت شهری و آفرود — مناسب کلاچ خیس و گیربکس مشترک.',
        image: LM + 'audiences/motorcycle.svg',
        imageAlt: 'موتورسیکلت — Liqui Moly Motorbike',
        icon: 'bolt',
        models: '4T Street · Motorbike · 10W-40'
      },
      {
        name: 'مصرف‌کننده شخصی',
        desc: 'اکتان پلاس، ضدیخ، تمیزکننده‌ها و car care برای استفاده شخصی — مشاوره انتخاب محصول از واتساپ فارسی.',
        image: LM + 'audiences/personal.svg',
        imageAlt: 'مصرف شخصی — Octane Plus و مراقبت خودرو',
        icon: 'users',
        models: 'Octane Plus · Antifreeze · Car Care'
      }
    ],
    faq: [
      { q: 'قیمت‌ها چگونه اعلام می‌شود؟', a: 'قیمت نمایشی دلاری است. مبلغ نهایی سفارش در پیش‌فاکتور تایید می‌شود.' },
      { q: 'محصول اصل Liqui Moly است؟', a: 'بله — تامین از کانال توزیع ترکیه. کد محصول (SKU) روی هر آیتم مشخص است.' },
      { q: 'Octane Plus چیست؟', a: 'افزودنی بنزین ساخت آلمان برای افزایش عدد اکتان و بهبود قدرت موتور. طبق دستورالعمل روی قوطی به باک اضافه می‌شود.' },
      { q: 'آیا برای خارج از ایران هم ارسال می‌کنید؟', a: 'بله — مشاوره واتساپ فارسی برای فارسی‌زبانان در سراسر جهان فعال است. مقصد تحویل در پیش‌فاکتور مشخص می‌شود.' },
      { q: 'حداقل سفارش چقدر است؟', a: 'از سفارش تکی تا عمده امکان‌پذیر است. برای تعمیرگاه و ناوگان، تعداد را بگویید تا قیمت بهتر پیشنهاد شود.' },
      { q: 'زمان تحویل چقدر است؟', a: 'بسته به موجودی ترکیه و مقصد، معمولاً چند روز تا چند هفته. زمان دقیق در پیش‌فاکتور اعلام می‌شود.' }
    ],
    inquiryTemplate: 'سلام، درخواست استعلام Liqui Moly — {product}\n\nتعداد:\nمدل خودرو / سوخت:\nشهر / کشور تحویل:\n',
    services: [
      { title: 'مشاوره انتخاب روغن', desc: 'ویسکوزیته و استاندارد مناسب خودرو شما' },
      { title: 'تامین اصل', desc: 'سفارش از توزیع Liqui Moly ترکیه' },
      { title: 'پیش‌فاکتور دلاری', desc: 'قیمت شفاف قبل از پرداخت' },
      { title: 'سفارش عمده', desc: 'تعمیرگاه، ناوگان و فروشگاهی' },
      { title: 'لجستیک', desc: 'حمل بین‌المللی تا مقصد' },
      { title: 'پشتیبانی فارسی', desc: 'واتساپ و فرم تماس' }
    ],
    officialUrl: 'https://www.liquimolyturkey.com/'
  };


  (function scrubFxCopy(C) {
    if (!C) return;
    if (C.rate) C.rate.label = '';
    const fxRe = /۴۷|47|لیر\s*÷|TRY\s*÷|نرخ\s*۱|USD\s*=\s*47/i;
    if (C.quoteChecklist && C.quoteChecklist.tip && fxRe.test(String(C.quoteChecklist.tip))) {
      delete C.quoteChecklist.tip;
    }
    (C.categories || []).forEach((cat) => {
      if (!cat || !cat.desc) return;
      cat.desc = String(cat.desc)
        .replace(/\s*[—-]\s*قیمت به دلار(?:\s*\([^)]*\))?/g, '')
        .replace(/\s*\([^)]*(?:نرخ|USD\s*=)[^)]*\)/gi, '')
        .trim();
    });
    (C.faq || []).forEach((item) => {
      if (!item) return;
      if (item.q && /لیر|TRY|۴۷|47/.test(item.q)) {
        item.q = 'قیمت‌ها چگونه اعلام می‌شود؟';
      }
      if (item.a && fxRe.test(String(item.a))) {
        item.a = 'قیمت نمایشی دلاری است. مبلغ نهایی سفارش در پیش‌فاکتور تایید می‌شود.';
      }
    });
  })(window.LIQUI_MOLY_CATALOG);

  /* Prefer local product images; never hotlink remote CDN (often broken). */
  (function fixLiquiImages(C) {
    const PLACEHOLDER = 'assets/images/liqui-moly/octane-plus.jpg';
    const LOCAL = {
      '500': 'assets/images/liqui-moly/product-500.jpg',
      '1243': 'assets/images/liqui-moly/product-1243.png',
      '1502': 'assets/images/liqui-moly/product-1502.jpg',
      '1505': 'assets/images/liqui-moly/product-1505.jpg',
      '2539': 'assets/images/liqui-moly/product-2539.jpg',
      '2592': 'assets/images/liqui-moly/product-2592.jpg',
      '4200': 'assets/images/liqui-moly/product-4200.jpg',
      '4400': 'assets/images/liqui-moly/product-4400.jpg',
      '4410': 'assets/images/liqui-moly/product-4410.jpg',
      '4500': 'assets/images/liqui-moly/product-4500.jpg',
      '5196': 'assets/images/liqui-moly/product-5196.jpg',
      '5197': 'assets/images/liqui-moly/product-5197.jpg',
      '6200': 'assets/images/liqui-moly/product-6200.jpg',
      '6400': 'assets/images/liqui-moly/product-6400.jpg',
      '6610': 'assets/images/liqui-moly/product-6610.jpg',
      '8351': 'assets/images/liqui-moly/product-8351.jpg',
      '8998': 'assets/images/liqui-moly/product-8998.jpg',
      '9504': 'assets/images/liqui-moly/product-9504.webp',
      '20753': 'assets/images/liqui-moly/product-20753.png',
      '21280': 'assets/images/liqui-moly/product-21280.jpg',
      '21863': 'assets/images/liqui-moly/product-21863.webp',
      '25019': 'assets/images/liqui-moly/product-25019.jpg',
      '30511': 'assets/images/liqui-moly/product-30511.jpg'
    };
    const CAT_LOCAL = {
      'engine-oil': 'assets/images/liqui-moly/product-1505.jpg',
      'fuel-petrol': 'assets/images/liqui-moly/octane-plus.jpg',
      'fuel-diesel': 'assets/images/liqui-moly/product-21280.jpg',
      'oil-additive': 'assets/images/liqui-moly/product-5196.jpg',
      'gear-hydraulic': 'assets/images/liqui-moly/product-4500.jpg',
      'coolant': 'assets/images/liqui-moly/product-6200.jpg',
      'car-care': 'assets/images/liqui-moly/product-500.jpg',
      'motorcycle': 'assets/images/liqui-moly/product-1243.png',
      'marine': 'assets/images/liqui-moly/product-1502.jpg',
      'service': 'assets/images/liqui-moly/product-8351.jpg',
      'other': 'assets/images/liqui-moly/octane-plus.jpg'
    };
    function localOrPlaceholder(src, sku, catId) {
      if (sku && LOCAL[sku]) return LOCAL[sku];
      if (src && !/^https?:/i.test(src)) return src;
      if (catId && CAT_LOCAL[catId]) return CAT_LOCAL[catId];
      return PLACEHOLDER;
    }
    (C.highlights || []).forEach(function (h) {
      if (!h) return;
      if (!h.image || /^https?:/i.test(h.image)) h.image = PLACEHOLDER;
    });
    (C.categories || []).forEach(function (cat) {
      const catId = cat.id || '';
      cat.image = localOrPlaceholder(cat.image, null, catId);
      (cat.series || []).forEach(function (s) {
        s.image = localOrPlaceholder(s.image, String(s.sku || ''), catId);
      });
    });
    (C.products || []).forEach(function (p) {
      if (!p) return;
      p.image = localOrPlaceholder(p.image, String(p.sku || p.id || ''), null);
    });
  })(window.LIQUI_MOLY_CATALOG);
})();
