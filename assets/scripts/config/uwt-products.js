/**
 * UWT — Level measurement catalog
 * Source: uwtgroup.com — images via scripts/fetch-uwt-assets.py
 */
(function () {
  const U = 'assets/images/uwt/';
  const logo = 'assets/images/partners/uwt.svg';

  const series = (names, note, featuredNames) =>
    names.map(name => ({
      name,
      note: note || 'UWT level sensor',
      featured: featuredNames ? featuredNames.includes(name) : false
    }));

  window.UWT_CATALOG = {
    brand: {
      name: 'UWT',
      nameFa: 'یو‌دبلیو‌تی',
      logo,
      logoAlt: 'UWT — Level. Up to the Max.',
      heroImage: U + 'hero-solids.webp',
      heroImageAlt: 'UWT level measurement for bulk solids — silo and process vessels',
      heroEyebrow: 'تامین سنسور سطح UWT از آلمان',
      heroHeadline: 'اندازه‌گیری سطح UWT',
      heroHeadlineSub: 'سوئیچ سطح و اندازه‌گیری پیوسته برای جامدات فله و مایعات — Rotonivo · Vibranivo · NivoRadar',
      tagline: 'Level. Up to the Max.',
      taglineFa: 'سنسور سطح صنعتی — Betzigau، آلمان',
      since: 'از سال ۱۹۷۷ · آلمان',
      origin: 'بتسیگاو — آلمان',
      officialUrl: 'https://www.uwtgroup.com/en/',
      descriptionFa: 'بیزدوار گروپ تامین‌کننده سنسور سطح اصل UWT برای سیلو، مخزن و خطوط فرآیند در ایران است. سوئیچ سطح (Rotonivo، Vibranivo، Capanivo) و اندازه‌گیری پیوسته (NivoRadar، NivoGuide) — با پیش‌فاکتور شفاف و مشاوره فارسی.',
      heroStats: [
        { value: '۱۹۷۷', label: 'تأسیس در آلمان' },
        { value: 'SIL 2', label: 'گواهی ایمنی' },
        { value: 'ATEX / IECEx', label: 'محیط انفجاری' }
      ]
    },

    trustSignals: [
      { icon: 'target', label: 'محصول اصل UWT', desc: 'تامین از سازنده آلمان — دیتاشیت، سریال و گواهی معتبر' },
      { icon: 'globe', label: 'مشاوره فارسی', desc: 'انتخاب سوئیچ یا رادار — بر اساس نوع ماده، سیلو و شرایط فرآیند' },
      { icon: 'factory', label: 'جامدات و مایعات', desc: 'سیمان، غلات، پلاستیک، پودر، آب، روغن و مواد شیمیایی' },
      { icon: 'mail', label: 'لجستیک شفاف', desc: 'پیش‌فاکتور، lead time و حمل تا تحویل پروژه' }
    ],

    whyBuyFromUs: [
      { icon: 'target', title: 'انتخاب اصل اندازه‌گیری درست', desc: 'پدل دوار، لرزشی، خازنی یا رادار ۸۰ گیگاهرتز — بر اساس نوع ماده، غبار، کف و ارتفاع سیلو پیشنهاد می‌دهیم.' },
      { icon: 'factory', title: 'جایگزینی سنسور فرسوده', desc: 'مدل فعلی، اتصال فرآیند و طول پروب را بفرستید — سری معادل UWT را تطبیق می‌دهیم.' },
      { icon: 'document', title: 'پیش‌فاکتور قبل از پرداخت', desc: 'قیمت، کد سفارش، زمان تحویل و شرایط حمل در پیش‌فاکتور رسمی.' },
      { icon: 'handshake', title: 'یک نقطه تماس', desc: 'سنسور سطح + مشاوره نصب — از یک تیم فارسی‌زبان. کنار VEGA در کاتالوگ ابزار دقیق.' }
    ],

    purchaseSteps: [
      { num: '۱', title: 'استعلام', desc: 'نوع ماده (جامد/مایع)، ارتفاع سیلو، نقطه پر/خالی، Ex/SIL، تعداد' },
      { num: '۲', title: 'مشاوره فنی', desc: 'پیشنهاد Rotonivo / Vibranivo / NivoRadar / NivoGuide بر اساس کاربرد' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت UWT، lead time و شرایط حمل' },
      { num: '۴', title: 'تامین و حمل', desc: 'سفارش اصل، بسته‌بندی صنعتی — لجستیک بین‌المللی' },
      { num: '۵', title: 'تحویل و پشتیبانی', desc: 'تحویل در ایران — دیتاشیت، راهنمای نصب و پاسخ فنی' }
    ],

    highlights: [
      {
        id: 'solido500',
        title: 'Solido® 500-LAA 24V',
        titleTr: 'Solido® 500-LAA 24V',
        titleEn: 'Solido® 500-LAA 24V',
        desc: 'سوئیچ سطح پدل دوار فشرده برای جامدات فله — ۲۴ ولت DC، ATEX، قیمت فروش ۲۸۵ یورو',
        useCaseFa: 'سیلو غلات، آرد، گرانول پلاستیک، مصالح و خوراک دام — پر / خالی',
        badge: 'موجود',
        priceEur: 285,
        inquiryName: 'UWT Solido 500-LAA 24V',
        image: U + 'product-solido500.png',
        imageAlt: 'UWT Solido 500-LAA 24V rotary paddle level switch'
      },
      {
        id: 'els-r1',
        title: 'ELS-R1 230 VAC',
        titleTr: 'ELS-R1 230 VAC',
        titleEn: 'ELS-R1 230 VAC',
        desc: 'سوئیچ سطح پدل دوار اقتصادی برای جامدات فله — ۲۳۰ ولت AC، رله SPDT، قیمت فروش ۱۸۰ یورو',
        useCaseFa: 'سیلو سیمان، شن، گرانول پلاستیک و پودر غذایی — پر / خالی',
        badge: 'موجود',
        priceEur: 180,
        inquiryName: 'UWT ELS-R1 230 VAC',
        image: U + 'product-els-r1.jpg',
        imageAlt: 'UWT ELS-R1 230 VAC rotary paddle level switch'
      },
      {
        title: 'Rotonivo® — پدل دوار',
        titleTr: 'Rotonivo® rotary paddle',
        titleEn: 'Rotonivo® rotary paddle',
        desc: 'سوئیچ سطح مکانیکی برای جامدات فله — RN 3000 / 4000 / 6000، SIL 2، تا ۱۱۰۰°C',
        useCaseFa: 'سیلو سیمان، غلات، پلاستیک و خوراک دام — پر، خالی و demand',
        badge: 'Point',
        inquiryName: 'UWT Rotonivo RN',
        image: U + 'category-rotonivo.webp',
        imageAlt: 'UWT Rotonivo rotary paddle level switch'
      },
      {
        title: 'Vibranivo® — چنگال لرزشی',
        titleTr: 'Vibranivo® vibrating fork',
        titleEn: 'Vibranivo® vibrating fork',
        desc: 'سوئیچ سطح لرزشی برای پودر و گرانول — VN 1000 تا VN 7000 از جمله VN 7 مایع',
        useCaseFa: 'غذا، پودر، پلاستیک و مواد سبک با دانسیته پایین',
        badge: 'Vibration',
        inquiryName: 'UWT Vibranivo VN',
        image: U + 'product-vn1020.jpg',
        imageAlt: 'UWT Vibranivo VN vibrating fork level switch'
      },
      {
        title: 'NivoRadar® — رادار بدون تماس',
        titleTr: 'NivoRadar® non-contact radar',
        titleEn: 'NivoRadar® non-contact radar',
        desc: 'رادار FMCW حدود ۸۰ گیگاهرتز — NR 3/4 جامدات، NR 7/8 مایعات',
        useCaseFa: 'سیلو بلند، مخزن مایع، غبار و بخار',
        badge: 'Radar',
        inquiryName: 'UWT NivoRadar NR',
        image: U + 'category-nivoradar.webp',
        imageAlt: 'UWT NivoRadar 80 GHz radar level sensor'
      },
      {
        title: 'NivoGuide® — رادار هدایت‌شده',
        titleTr: 'NivoGuide® guided radar TDR',
        titleEn: 'NivoGuide® guided radar TDR',
        desc: 'TDR برای مایعات، خمیر، کف و اینترفیس — NG 8100 / 8200 تا ۴۰۰ bar',
        useCaseFa: 'مخزن فرآیند، اینترفیس روغن/آب، شرایط سخت فشار و دما',
        badge: 'TDR',
        inquiryName: 'UWT NivoGuide NG',
        image: U + 'product-ng8200.jpg',
        imageAlt: 'UWT NivoGuide guided wave radar sensor'
      },
      {
        title: 'Capanivo® — خازنی',
        titleTr: 'Capanivo® capacitive',
        titleEn: 'Capanivo® capacitive',
        desc: 'سوئیچ خازنی فشرده برای جامدات و مایعات — CN 4000 / 7000',
        useCaseFa: 'مخزن کوچک، نصب افقی، مواد چسبنده',
        badge: 'Capacitive',
        inquiryName: 'UWT Capanivo CN',
        image: U + 'product-cn4020.jpg',
        imageAlt: 'UWT Capanivo capacitive level switch'
      },
      {
        title: 'NivoLED® — چراغ سیگنال',
        titleTr: 'NivoLED® signal lamp',
        titleEn: 'NivoLED® signal lamp',
        desc: 'چراغ وضعیت محلی برای سوئیچ سطح در Zone خطرناک — سری NL 9',
        useCaseFa: 'نمایش پر/خالی روی سیلو و تابلو فیلد',
        badge: 'Signal',
        inquiryName: 'UWT NivoLED NL 9',
        image: U + 'product-nivoled.jpg',
        imageAlt: 'UWT NivoLED 9000 signal lamp'
      }
    ],

    categories: [
      {
        id: 'point',
        title: 'سوئیچ سطح — Point Level',
        titleTr: 'Point Level Measurement',
        titleEn: 'Point Level Measurement',
        icon: 'sensor',
        image: U + 'point-level.jpg',
        imageAlt: 'UWT point level switches for bulk solids',
        desc: 'تشخیص پر، خالی و demand در سیلو و مخزن — پدل دوار، لرزشی و خازنی',
        series: [
          {
            id: 'solido500-laa-24v',
            name: 'Solido® 500-LAA 24V',
            sku: 'UWTSolido500LAA24',
            note: 'سوئیچ سطح پدل دوار — ۲۴ ولت DC',
            noteEn: 'Rotary paddle point level — 24V DC',
            noteTr: 'Döner paletli seviye şalteri — 24V DC',
            noteRu: 'Ротационный сигнализатор — 24 В DC',
            noteAr: 'مفتاح مستوى بمجداف دوار — 24V DC',
            specs: '۲۴V DC · ATEX',
            featured: true,
            priceEur: 285,
            inquiryName: 'UWT Solido 500-LAA 24V',
            image: U + 'product-solido500.png',
            imageAlt: 'UWT Solido 500-LAA 24V rotary paddle level switch',
            features: [
              'تغذیه ۲۴ ولت DC — خروجی رله SPDT',
              'اتصال فرآیند R 1½ اینچ · طول پروب ۱۵۰ میلی‌متر',
              'دانسیته از ۱۰۰ گرم/لیتر · دانه تا ۵۰ میلی‌متر',
              'IP66 · −۲۵ تا ۸۰°C · ATEX II 1/2D',
              'قیمت فروش ۲۸۵ یورو'
            ],
            featuresEn: [
              '24V DC supply — SPDT relay output',
              'Process connection R 1½″ · 150 mm probe',
              'Density from 100 g/l · grain size up to 50 mm',
              'IP66 · −25 to 80°C · ATEX II 1/2D',
              'Selling price €285'
            ],
            featuresTr: [
              '24V DC besleme — SPDT röle çıkışı',
              'Proses bağlantısı R 1½″ · 150 mm sonda',
              'Yoğunluk ≥ 100 g/l · tane boyutu < 50 mm',
              'IP66 · −25…80°C · ATEX II 1/2D',
              'Satış fiyatı €285'
            ],
            featuresRu: [
              'Питание 24 В DC — реле SPDT',
              'Присоединение R 1½″ · зонд 150 мм',
              'Плотность от 100 г/л · фракция до 50 мм',
              'IP66 · −25…80°C · ATEX II 1/2D',
              'Цена продажи €285'
            ],
            featuresAr: [
              'تغذية 24V DC — خرج مرحل SPDT',
              'وصلة عملية R 1½″ · مسبار 150 مم',
              'كثافة من 100 غ/ل · حبيبات حتى 50 مم',
              'IP66 · −25 إلى 80°م · ATEX II 1/2D',
              'سعر البيع €285'
            ]
          },
          {
            id: 'els-r1-230vac',
            name: 'ELS-R1 230 VAC',
            sku: 'ELS-R1',
            note: 'سوئیچ سطح پدل دوار — ۲۳۰ ولت AC',
            noteEn: 'Rotary paddle point level — 230 VAC',
            noteTr: 'Döner paletli seviye şalteri — 230 VAC',
            noteRu: 'Ротационный сигнализатор — 230 В AC',
            noteAr: 'مفتاح مستوى بمجداف دوار — 230 VAC',
            specs: '۲۳۰ VAC · SPDT',
            featured: true,
            priceEur: 180,
            inquiryName: 'UWT ELS-R1 230 VAC',
            image: U + 'product-els-r1.jpg',
            imageAlt: 'UWT ELS-R1 230 VAC rotary paddle level switch',
            features: [
              'تغذیه ۲۳۰ ولت AC — خروجی رله SPDT تا ۲۵۰ VAC / ۲A',
              'اتصال فرآیند G ½ · طول غوطه‌وری ۱۳۰ میلی‌متر',
              'دانسیته از ۱۰۰ گرم/لیتر · حدود ۱ دور در دقیقه',
              'IP66 / IP67 · −۲۵ تا ۸۰°C · گلند M20×1.5',
              'قیمت فروش ۱۸۰ یورو'
            ],
            featuresEn: [
              '230 VAC supply — SPDT relay up to 250 VAC / 2A',
              'Process connection G ½ · 130 mm immersion',
              'Density from 100 g/l · about 1 rpm',
              'IP66 / IP67 · −25 to 80°C · M20×1.5 gland',
              'Selling price €180'
            ],
            featuresTr: [
              '230 VAC besleme — SPDT röle 250 VAC / 2A',
              'Proses bağlantısı G ½ · dalma boyu 130 mm',
              'Yoğunluk ≥ 100 g/l · yakl. 1 rpm',
              'IP66 / IP67 · −25…80°C · M20×1.5 rakor',
              'Satış fiyatı €180'
            ],
            featuresRu: [
              'Питание 230 В AC — реле SPDT до 250 В AC / 2 А',
              'Присоединение G ½ · погружение 130 мм',
              'Плотность от 100 г/л · около 1 об/мин',
              'IP66 / IP67 · −25…80°C · сальник M20×1.5',
              'Цена продажи €180'
            ],
            featuresAr: [
              'تغذية 230 VAC — مرحل SPDT حتى 250 VAC / 2A',
              'وصلة عملية G ½ · غمر 130 مم',
              'كثافة من 100 غ/ل · نحو 1 دورة/دقيقة',
              'IP66 / IP67 · −25 إلى 80°م · غدة M20×1.5',
              'سعر البيع €180'
            ]
          },
          ...series(
          ['Rotonivo RN 3000', 'Rotonivo RN 4000', 'Rotonivo RN 6000 (SIL 2)', 'Vibranivo VN 1000/2000', 'Vibranivo VN 7 liquid fork', 'Capanivo CN 4000/7000'],
          'Point level / solids & liquids',
          ['Rotonivo RN 3000', 'Rotonivo RN 6000 (SIL 2)', 'Vibranivo VN 7 liquid fork']
        )
        ]
      },
      {
        id: 'radar',
        title: 'رادار پیوسته — NivoRadar',
        titleTr: 'NivoRadar continuous radar',
        titleEn: 'NivoRadar continuous radar',
        icon: 'sensor',
        image: U + 'continuous-level.jpg',
        imageAlt: 'UWT NivoRadar continuous level measurement',
        desc: 'رادار بدون تماس FMCW برای جامدات و مایعات — سری NR 3 / 4 / 7 / 8',
        series: series(
          ['NivoRadar NR 3100 / 3200 / 3300', 'NivoRadar NR 4100 solids', 'NivoRadar NR 7100 / 7200 liquids', 'NivoRadar NR 8100–8500 liquids', 'NivoRadar NR 3 / NR 4 new solids', 'NivoRadar NR 7 / NR 8 new liquids'],
          '80 GHz FMCW radar',
          ['NivoRadar NR 4100 solids', 'NivoRadar NR 7100 / 7200 liquids', 'NivoRadar NR 8100–8500 liquids']
        )
      },
      {
        id: 'guided',
        title: 'رادار هدایت‌شده — NivoGuide',
        titleTr: 'NivoGuide guided wave radar',
        titleEn: 'NivoGuide guided wave radar',
        icon: 'droplet',
        image: U + 'product-ng8100.jpg',
        imageAlt: 'UWT NivoGuide TDR guided radar',
        desc: 'TDR برای مایعات، خمیر، کف و اندازه‌گیری اینترفیس — فشار و دمای بالا',
        series: series(
          ['NivoGuide NG 8100 solids', 'NivoGuide NG 8200 liquids', 'Interface measurement'],
          'Guided radar / TDR',
          ['NivoGuide NG 8200 liquids', 'NivoGuide NG 8100 solids']
        )
      },
      {
        id: 'visual',
        title: 'نمایش و مانیتورینگ',
        titleTr: 'Visualisation & monitoring',
        titleEn: 'Visualisation & monitoring',
        icon: 'list',
        image: U + 'visualisation.jpg',
        imageAlt: 'UWT NivoTec visualisation and NivoLED signal lamp',
        desc: 'NivoTec نمایش محلی سطح و NivoLED چراغ سیگنال فیلد',
        series: series(
          ['NivoTec NT 9000 visualisation', 'NivoLED NL 9000 signal lamp', 'NivoLED NL 9 local status'],
          'Monitoring',
          ['NivoTec NT 9000 visualisation', 'NivoLED NL 9000 signal lamp']
        )
      }
    ],

    iranIndustries: [
      { name: 'سیمان و مصالح', desc: 'Rotonivo و NivoRadar برای سیلو کلینکر، سیمان و سنگ‌دانه', image: U + 'industry-solids.jpg', imageAlt: 'UWT level sensors for cement silos Iran', icon: 'factory' },
      { name: 'غذا و غلات', desc: 'Vibranivo و Rotonivo — سیلو آرد، شکر، خوراک دام', image: U + 'industry-solids.jpg', imageAlt: 'UWT Vibranivo food grain silo', icon: 'globe' },
      { name: 'پتروشیمی و شیمیایی', desc: 'NivoGuide و NivoRadar — مخزن مایع، Ex و SIL', image: U + 'industry-liquids.jpg', imageAlt: 'UWT radar for chemical tanks Iran', icon: 'barrel' },
      { name: 'پلاستیک و پلیمر', desc: 'سوئیچ پدل و رادار برای گرانول و پودر پلیمر', image: U + 'point-level.jpg', imageAlt: 'UWT point level plastics silo', icon: 'factory' },
      { name: 'آب و فاضلاب', desc: 'رادار بدون تماس برای مخزن آب و حوضچه', image: U + 'industry-liquids.jpg', imageAlt: 'UWT NivoRadar water wastewater', icon: 'droplet' },
      { name: 'انرژی و نیروگاه', desc: 'سطح زغال، خاکستر و سوخت — شرایط سخت غبار', image: U + 'industry-safety.jpg', imageAlt: 'UWT level sensors power plant', icon: 'bolt' }
    ],

    industries: [
      { name: 'سیمان و مصالح', nameTr: 'Building materials', desc: 'Silo high/low and continuous radar', image: U + 'industry-solids.jpg', imageAlt: 'UWT cement bulk solids', icon: 'factory' },
      { name: 'غذا و نوشیدنی', nameTr: 'Food & Beverage', desc: 'Hygienic vibration and radar options', image: U + 'industry-solids.jpg', imageAlt: 'UWT food industry sensors', icon: 'globe' },
      { name: 'شیمیایی', nameTr: 'Chemical', desc: 'Ex-rated switches and guided radar', image: U + 'industry-liquids.jpg', imageAlt: 'UWT chemical process sensors', icon: 'barrel' },
      { name: 'پلاستیک', nameTr: 'Plastics', desc: 'Granule and powder point level', image: U + 'point-level.jpg', imageAlt: 'UWT plastics silo sensors', icon: 'factory' },
      { name: 'چوب و بازیافت', nameTr: 'Wood & recycling', desc: 'Dusty bulk solids detection', image: U + 'industry-technology.webp', imageAlt: 'UWT wood chip silo sensors', icon: 'pickaxe' },
      { name: 'انرژی', nameTr: 'Power', desc: 'Fuel, ash and additive silos', image: U + 'industry-safety.jpg', imageAlt: 'UWT power plant level', icon: 'bolt' },
      { name: 'آب', nameTr: 'Water', desc: 'Non-contact radar on tanks', image: U + 'industry-liquids.jpg', imageAlt: 'UWT water tank radar', icon: 'droplet' },
      { name: 'خوراک دام', nameTr: 'Animal feed', desc: 'Paddle and vibration in feed mills', image: U + 'industry-solids.jpg', imageAlt: 'UWT animal feed mill sensors', icon: 'factory' }
    ],

    academy: {
      title: 'UWT — Level. Up to the Max.',
      descFa: 'UWT از ۱۹۷۷ در بتسیگاو آلمان متخصص اندازه‌گیری سطح جامدات فله و مایعات است. اصل «نصب کن و فراموش کن» — سنسورهای بادوام با گواهی ATEX، IECEx و SIL 2. بیزدوار گروپ پل بین پروژه شما و کاتالوگ UWT برای انتخاب فنی، تامین و لجستیک است.',
      image: U + 'company-betzigau.webp',
      imageAlt: 'UWT GmbH headquarters Betzigau Germany',
      url: 'https://www.uwtgroup.com/en/',
      urlLabel: 'وبسایت رسمی UWT',
      topics: [
        'سوئیچ سطح در مقابل رادار پیوسته — کی کدام را انتخاب کنیم؟',
        'Rotonivo RN 3000 / 4000 / 6000 — کاربرد و SIL 2',
        'NivoRadar ۸۰ گیگاهرتز برای جامدات غبارآلود',
        'NivoGuide TDR برای کف، اینترفیس و فشار بالا',
        'ATEX / IECEx برای سیلو غبار و Zone گاز',
        'چک‌لیست استعلام: نوع ماده، DK، ارتفاع، اتصال فرآیند'
      ]
    },

    services: [
      { title: 'مشاوره انتخاب سنسور', desc: 'پدل، لرزشی، خازنی یا رادار — بر اساس دیتاشیت UWT' },
      { title: 'جایگزینی مدل موجود', desc: 'تطبیق اتصال فرآیند، طول پروب و خروجی سیگنال' },
      { title: 'پیش‌فاکتور رسمی', desc: 'قیمت، lead time و شرایط حمل در یک سند' },
      { title: 'لجستیک تا ایران', desc: 'از کارخانه UWT تا تحویل پروژه' },
      { title: 'پشتیبانی فارسی', desc: 'info@bizdavar.com و واتساپ — یک نقطه تماس' }
    ],

    faq: [
      { q: 'UWT اصل است؟', a: 'بله — فقط سنسور اصل UWT آلمان با دیتاشیت و مشخصات در پیش‌فاکتور تامین می‌شود.' },
      { q: 'Rotonivo یا Vibranivo؟', a: 'Rotonivo پدل دوار برای جامدات فله و شرایط سخت دما است. Vibranivo چنگال/میله لرزشی برای پودر سبک و مواد غذایی مناسب‌تر است. نوع ماده را بفرستید تا مدل پیشنهاد شود.' },
      { q: 'NivoRadar با VEGAPULS چه فرقی دارد؟', a: 'هر دو رادار سطح بدون تماس هستند. UWT روی جامدات فله و سیلو تمرکز دارد؛ VEGA روی فرآیند مایع و فشار هم قوی است. بیزدوار هر دو برند را تامین می‌کند — شرایط مخزن را بفرستید.' },
      { q: 'گواهی Ex و SIL دارید؟', a: 'سری‌های UWT با ATEX، IECEx و بخشی با SIL 2 عرضه می‌شوند. نیاز Zone و SIL را در استعلام بنویسید.' },
      { q: 'زمان تحویل به ایران؟', a: 'معمولاً ۳ تا ۸ هفته بسته به مدل و موجودی. زمان دقیق در پیش‌فاکتور.' },
      { q: 'برای مایعات هم سنسور دارید؟', a: 'بله — NivoRadar سری مایع، NivoGuide TDR، Vibranivo VN 7 (چنگال مایع) و سوئیچ‌های خازنی.' },
      { q: 'قیمت Solido 500-LAA 24V چقدر است؟', a: 'قیمت فروش Solido® 500-LAA 24V برابر ۲۸۵ یورو است. پیش‌فاکتور رسمی شامل lead time و شرایط حمل جداگانه صادر می‌شود.' },
      { q: 'قیمت ELS-R1 230 VAC چقدر است؟', a: 'قیمت فروش UWT ELS-R1 230 VAC برابر ۱۸۰ یورو است. پیش‌فاکتور رسمی شامل lead time و شرایط حمل جداگانه صادر می‌شود.' }
    ],

    inquiryTemplate: 'سلام، درخواست استعلام {product} از UWT دارم.\n\nنوع ماده (جامد/مایع):\nارتفاع سیلو / مخزن:\nنقطه اندازه‌گیری (پر / خالی / پیوسته):\nEx / SIL:\nتعداد:\n',

    officialUrl: 'https://www.uwtgroup.com/en/'
  };
})();
