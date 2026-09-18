/**
 * Car parts shop — quote only. No invented prices.
 * Separate from the motorcycle catalog so the two stores do not mix.
 */
(function () {
  const IMG = 'assets/images/auto-moto/';
  const P = IMG + 'products/';

  function item(id, titleFa, titleTr, titleEn, image, descFa, descTr, descEn) {
    return {
      id: id,
      sku: id.toUpperCase(),
      title: titleFa,
      titleFa: titleFa,
      titleTr: titleTr,
      titleEn: titleEn,
      name: titleFa,
      image: image,
      imageAlt: titleFa,
      desc: descFa,
      descFa: descFa,
      descTr: descTr,
      descEn: descEn,
      quoteOnly: true,
      specList: [
        { label: 'SKU', value: id.toUpperCase() },
        { label: 'قیمت', value: 'استعلام' }
      ]
    };
  }

  window.CAR_PARTS_CATALOG = {
    navMode: 'categories',
    productDetail: true,
    quoteEmptyPrices: true,
    brand: {
      name: 'Bizdavar Car Parts',
      nameFa: 'قطعات خودرو بیزدوار',
      logo: IMG + 'logo-brake-shop.svg',
      logoAlt: 'لوگوی بیزدوار — فروشگاه ترمز',
      heroImage: IMG + 'categories/car-brake-pad.svg',
      heroImageAlt: 'لنت، فیلتر، آرم و رینگ خودرو خارجی',
      heroEyebrow: 'فروشگاه قطعات خودرو',
      heroHeadline: 'لنت، فیلتر، آرم و رینگ',
      heroHeadlineSub: 'قطعات خودرو خارجی جدا از فروشگاه موتورسیکلت — قیمت فقط با استعلام',
      tagline: 'قطعات خودرو خارجی',
      taglineFa: 'قطعات خودرو خارجی',
      taglineTr: 'İthal oto parçası',
      taglineEn: 'Import car parts',
      since: 'فقط استعلام · بدون قیمت ساختگی',
      description: 'لنت، فیلتر هوا و کابین، فیلتر روغن، آرم و رینگ. روی کارت قیمت نیست. مدل، سال و در صورت امکان VIN را بفرستید.',
      descriptionFa: 'لنت، فیلتر هوا و کابین، فیلتر روغن، آرم و رینگ. روی کارت قیمت نیست. مدل، سال و در صورت امکان VIN را بفرستید.',
      heroStats: [
        { value: 'استعلام', label: 'قیمت روی کارت نیست' },
        { value: 'VIN', label: 'مدل و شاسی' },
        { value: '۶', label: 'دسته قطعه' }
      ]
    },
    trustSignals: [
      { icon: 'document', label: 'بدون قیمت ساختگی', desc: 'مبلغ فقط بعد از موجودی در پیش‌فاکتور' },
      { icon: 'truck', label: 'ارسال بعد از سفارش', desc: 'پست جدا از قیمت کالا حساب می‌شود' },
      { icon: 'phone', label: 'مشاوره فارسی', desc: 'برند، مدل، سال و VIN را در واتساپ بفرستید' }
    ],
    whyBuyFromUs: [
      { icon: 'document', title: 'جدا از موتورسیکلت', desc: 'این فروشگاه فقط قطعه خودرو است تا با کلاه و کاپشن قاطی نشود.' },
      { icon: 'handshake', title: 'استعلام با مدل', desc: 'لنت و فیلتر بدون VIN یا مدل دقیق پیشنهاد نمی‌شود.' }
    ],
    purchaseSteps: [
      { num: '۱', title: 'انتخاب قطعه', desc: 'دسته را باز کنید یا نام را جستجو کنید' },
      { num: '۲', title: 'مدل خودرو', desc: 'برند، مدل، سال و در صورت امکان VIN' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'موجودی و مبلغ بعد از استعلام' }
    ],
    quoteChecklist: {
      title: 'برای استعلام دقیق',
      items: ['نام قطعه یا کد', 'برند، مدل و سال', 'VIN یا شماره شاسی اگر دارید', 'تعداد و شهر تحویل']
    },
    faq: [
      { q: 'چرا قیمت روی کارت نیست؟', a: 'قطعه خودرو بدون تطبیق مدل قیمت‌گذاری نمی‌شود. مبلغ در پیش‌فاکتور است.' },
      { q: 'این صفحه با موتورسیکلت یکی است؟', a: 'نه. تجهیزات موتور در فروشگاه موتورسیکلت است.' }
    ],
    inquiryTemplate: 'سلام، استعلام قطعات خودرو بیزدوار — {product}\n\nبرند / مدل / سال:\nVIN:\nتعداد:\nشهر تحویل:\n',
    quickSeries: [
      { id: 'brake-pads', name: 'لنت ترمز', nameTr: 'Fren balatası', nameEn: 'Brake pads', tag: 'OEM', hint: 'بنز · آئودی · لکسوس', hintTr: 'Mercedes · Audi · Lexus', hintEn: 'Mercedes · Audi · Lexus', anchor: 'cat' },
      { id: 'air-filters', name: 'فیلتر هوا و کابین', nameTr: 'Hava ve polen filtresi', nameEn: 'Air and cabin filters', tag: 'فیلتر', hint: 'موتور و کابین', hintTr: 'Motor ve kabin', hintEn: 'Engine and cabin', anchor: 'cat' },
      { id: 'emblems', name: 'آرم خودرو', nameTr: 'Oto arması', nameEn: 'Emblems', tag: 'آرم', hint: 'جلو · عقب · کاپوت', hintTr: 'Ön · arka · kaput', hintEn: 'Front · rear · hood', anchor: 'cat' },
      { id: 'rims', name: 'رینگ', nameTr: 'Jant', nameEn: 'Wheels', tag: 'رینگ', hint: '۱۷ و ۱۸ اینچ', hintTr: '17 ve 18 inç', hintEn: '17 and 18 inch', anchor: 'cat' }
    ],
    categories: [
      {
        id: 'brake-pads',
        family: 'car',
        title: 'لنت ترمز',
        titleTr: 'Fren balatası',
        titleEn: 'Brake pads',
        icon: 'wrench',
        image: IMG + 'categories/car-brake-pad.svg',
        imageAlt: 'لنت ترمز خودرو خارجی',
        desc: 'برای استعلام، برند و مدل و در صورت امکان VIN لازم است. قیمت روی کارت نیست.',
        descTr: 'Teklif için marka, model ve mümkünse VIN gerekir. Kartta fiyat yok.',
        descEn: 'Brand, model and VIN if possible. No price on the card.',
        series: [
          item('bd-bp-mb-e', 'لنت ترمز جلو بنز کلاس E', 'Mercedes E-Class ön balata', 'Mercedes E-Class front pads', P + 'bd-bp-mb-e.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-mb-er', 'لنت ترمز عقب بنز کلاس E', 'Mercedes E-Class arka balata', 'Mercedes E-Class rear pads', P + 'bd-bp-mb-er.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-mb-c', 'لنت ترمز بنز کلاس C', 'Mercedes C-Class balata', 'Mercedes C-Class pads', P + 'bd-bp-mb-c.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-au-a6', 'لنت ترمز آئودی A6', 'Audi A6 balata', 'Audi A6 pads', P + 'bd-bp-au-a6.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-au-a6r', 'لنت ترمز عقب آئودی A6', 'Audi A6 arka balata', 'Audi A6 rear pads', P + 'bd-bp-au-a6r.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-lx-es', 'لنت ترمز لکسوس ES', 'Lexus ES balata', 'Lexus ES pads', P + 'bd-bp-lx-es.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-bm-3', 'لنت ترمز بی‌ام‌و سری ۳', 'BMW 3 serisi balata', 'BMW 3 Series pads', P + 'bd-bp-bm-3.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.'),
          item('bd-bp-vw-g', 'لنت ترمز فولکس گلف', 'VW Golf balata', 'VW Golf pads', P + 'bd-bp-vw-g.svg', 'استعلام با مدل و VIN.', 'Model ve VIN ile teklif.', 'Quote with model and VIN.')
        ]
      },
      {
        id: 'air-filters',
        family: 'car',
        title: 'فیلتر هوا و کابین',
        titleTr: 'Hava ve polen filtresi',
        titleEn: 'Air and cabin filters',
        icon: 'box',
        image: IMG + 'categories/car-air-filter.svg',
        imageAlt: 'فیلتر هوا و کابین',
        desc: 'فیلتر موتور و کابین. قیمت فقط با استعلام.',
        descTr: 'Motor ve kabin filtresi. Fiyat yalnızca teklifle.',
        descEn: 'Engine and cabin filters. Price by inquiry only.',
        series: [
          item('bd-af-mb', 'فیلتر هوای بنز', 'Mercedes hava filtresi', 'Mercedes air filter', P + 'bd-af-mb.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.'),
          item('bd-af-au', 'فیلتر هوای آئودی', 'Audi hava filtresi', 'Audi air filter', P + 'bd-af-au.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.'),
          item('bd-af-lx', 'فیلتر هوای لکسوس', 'Lexus hava filtresi', 'Lexus air filter', P + 'bd-af-lx.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.'),
          item('bd-af-cabin', 'فیلتر کابین', 'Polen filtresi', 'Cabin filter', P + 'bd-af-cabin.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.')
        ]
      },
      {
        id: 'oil-filters',
        family: 'car',
        title: 'فیلتر روغن',
        titleTr: 'Yağ filtresi',
        titleEn: 'Oil filters',
        icon: 'box',
        image: IMG + 'categories/car-oil-filter.svg',
        imageAlt: 'فیلتر روغن',
        desc: 'فیلتر روغن خودرو خارجی. قیمت فقط با استعلام.',
        descTr: 'İthal araç yağ filtresi. Fiyat yalnızca teklifle.',
        descEn: 'Import-car oil filters. Price by inquiry only.',
        series: [
          item('bd-of-mb', 'فیلتر روغن بنز', 'Mercedes yağ filtresi', 'Mercedes oil filter', P + 'bd-of-mb.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.'),
          item('bd-of-au', 'فیلتر روغن آئودی', 'Audi yağ filtresi', 'Audi oil filter', P + 'bd-of-au.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.'),
          item('bd-of-jp', 'فیلتر روغن ژاپنی', 'Japon araç yağ filtresi', 'Japanese-car oil filter', P + 'bd-of-jp.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.')
        ]
      },
      {
        id: 'emblems',
        family: 'car',
        title: 'آرم خودرو',
        titleTr: 'Oto arması',
        titleEn: 'Emblems',
        icon: 'star',
        image: IMG + 'categories/car-emblem.svg',
        imageAlt: 'آرم خودرو',
        desc: 'آرم جلو و عقب. قیمت فقط با استعلام.',
        descTr: 'Ön ve arka arma. Fiyat yalnızca teklifle.',
        descEn: 'Front and rear emblems. Price by inquiry only.',
        series: [
          item('bd-em-mb', 'آرم بنز', 'Mercedes arması', 'Mercedes emblem', P + 'bd-em-mb.svg', 'استعلام.', 'Teklif.', 'Quote.'),
          item('bd-em-au', 'آرم آئودی', 'Audi arması', 'Audi emblem', P + 'bd-em-au.svg', 'استعلام.', 'Teklif.', 'Quote.'),
          item('bd-em-lx', 'آرم لکسوس', 'Lexus arması', 'Lexus emblem', P + 'bd-em-lx.svg', 'استعلام.', 'Teklif.', 'Quote.'),
          item('bd-em-bm', 'آرم بی‌ام‌و', 'BMW arması', 'BMW emblem', P + 'bd-em-bm.svg', 'استعلام.', 'Teklif.', 'Quote.')
        ]
      },
      {
        id: 'hood-emblems',
        family: 'car',
        title: 'آرم کاپوت',
        titleTr: 'Kaput arması',
        titleEn: 'Hood ornaments',
        icon: 'star',
        image: IMG + 'categories/car-hood-emblem.svg',
        imageAlt: 'آرم کاپوت',
        desc: 'آرم ایستاده کاپوت. قیمت فقط با استعلام.',
        descTr: 'Kaput yıldızı. Fiyat yalnızca teklifle.',
        descEn: 'Hood ornament. Price by inquiry only.',
        series: [
          item('bd-hd-mb', 'آرم ایستاده کاپوت بنز', 'Mercedes kaput yıldızı', 'Mercedes hood ornament', P + 'bd-hd-mb.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.'),
          item('bd-hd-base', 'پایه آرم کاپوت', 'Kaput arma ayağı', 'Hood emblem base', P + 'bd-hd-base.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.')
        ]
      },
      {
        id: 'rims',
        family: 'car',
        title: 'رینگ',
        titleTr: 'Jant',
        titleEn: 'Wheels',
        icon: 'circle',
        image: IMG + 'categories/car-rim.svg',
        imageAlt: 'رینگ خودرو',
        desc: 'رینگ و قالپاق. PCD و ET را برای فیت بفرستید. قیمت فقط با استعلام.',
        descTr: 'Jant ve kapak. PCD ve ET yazın. Fiyat yalnızca teklifle.',
        descEn: 'Rims and caps. Send PCD and ET. Price by inquiry only.',
        series: [
          item('bd-rm-17', 'رینگ ۱۷ اینچ', '17 inç jant', '17-inch rim', P + 'bd-rm-17.svg', 'PCD و ET لازم است.', 'PCD ve ET gerekir.', 'PCD and ET required.'),
          item('bd-rm-18', 'رینگ ۱۸ اینچ', '18 inç jant', '18-inch rim', P + 'bd-rm-18.svg', 'PCD و ET لازم است.', 'PCD ve ET gerekir.', 'PCD and ET required.'),
          item('bd-rm-cap', 'قالپاق رینگ', 'Jant kapağı', 'Wheel cap', P + 'bd-rm-cap.svg', 'استعلام با مدل.', 'Model ile teklif.', 'Quote with model.')
        ]
      }
    ],
    highlights: [],
    iranIndustries: [],
    services: [
      { title: 'تطبیق مدل', desc: 'VIN یا شماره شاسی' },
      { title: 'پیش‌فاکتور', desc: 'بعد از موجودی' }
    ]
  };
})();
