/**
 * UI copy for the AED shop. Product names live on each catalog item.
 */
(function () {
  var L = window.BIZDAVAR_LOCALES;
  if (!L) return;

  function put(code, pack) {
    if (!L[code]) L[code] = {};
    L[code].shopPage = pack;
  }

  put('fa', {
    hero: {
      tag: 'فروشگاه درهم',
      title: 'فروشگاه درهم امارات',
      desc: 'کالاهای صنعتی، ابزار دقیق، الکترونیکی و سایر اقلام. قیمت هر کالا به درهم امارات (AED) است و سفارش از واتساپ ثبت می‌شود.'
    },
    filters: { all: 'همه', industrial: 'صنعتی', instrument: 'ابزار دقیق', electronic: 'الکترونیکی', other: 'سایر' },
    count: '{n} کالا',
    emptyTitle: 'این فهرست هنوز خالی است',
    emptyBody: 'کالاها یکی‌یکی به فروشگاه اضافه می‌شوند. هر قلم می‌تواند صنعتی، ابزار دقیق، الکترونیکی یا از دستهٔ دیگری باشد و قیمتش به درهم نوشته می‌شود.',
    emptyFilter: 'در این دسته هنوز کالایی نیست.',
    priceOnRequest: 'استعلام قیمت',
    order: 'سفارش در واتساپ',
    orderMessage: 'سلام، از فروشگاه درهم بیزدوار می‌خواهم «{name}» را سفارش بدهم. قیمت: {price}',
    sku: 'کد',
    geoText: 'فروشگاه بیزدوار با قیمت درهم امارات — کالاهای صنعتی، ابزار دقیق و الکترونیکی.'
  });

  put('tr', {
    hero: {
      tag: 'Dirhem mağaza',
      title: 'BAE dirhemi mağazası',
      desc: 'Endüstriyel ürünler, ölçüm cihazları, elektronik ve diğer kalemler. Fiyatlar BAE dirhemi (AED) cinsindendir; sipariş WhatsApp ile alınır.'
    },
    filters: { all: 'Tümü', industrial: 'Endüstriyel', instrument: 'Ölçüm cihazı', electronic: 'Elektronik', other: 'Diğer' },
    count: '{n} ürün',
    emptyTitle: 'Bu liste henüz boş',
    emptyBody: 'Ürünler tek tek eklenir. Her kalem endüstriyel, ölçüm cihazı, elektronik veya başka bir kategoride olabilir ve fiyatı dirhem olarak yazılır.',
    emptyFilter: 'Bu kategoride henüz ürün yok.',
    priceOnRequest: 'Fiyat sorun',
    order: 'WhatsApp ile sipariş',
    orderMessage: 'Merhaba, Bizdavar dirhem mağazasından «{name}» sipariş etmek istiyorum. Fiyat: {price}',
    sku: 'Kod',
    geoText: 'Bizdavar mağazası, fiyatlar BAE dirhemi — endüstriyel, ölçüm ve elektronik ürünler.'
  });

  put('en', {
    hero: {
      tag: 'Dirham shop',
      title: 'UAE dirham shop',
      desc: 'Industrial goods, precision instruments, electronics and other items. Every price is in UAE dirhams (AED). Orders go through WhatsApp.'
    },
    filters: { all: 'All', industrial: 'Industrial', instrument: 'Instruments', electronic: 'Electronics', other: 'Other' },
    count: '{n} items',
    emptyTitle: 'This catalog is still empty',
    emptyBody: 'Items are added one at a time. Each one can be industrial, a precision instrument, electronic, or another kind, with its price in dirhams.',
    emptyFilter: 'Nothing in this category yet.',
    priceOnRequest: 'Price on request',
    order: 'Order on WhatsApp',
    orderMessage: 'Hello, I would like to order “{name}” from the Bizdavar dirham shop. Price: {price}',
    sku: 'SKU',
    geoText: 'Bizdavar shop priced in UAE dirhams — industrial goods, instruments and electronics.'
  });

  put('ru', {
    hero: {
      tag: 'Магазин в дирхамах',
      title: 'Магазин в дирхамах ОАЭ',
      desc: 'Промышленные товары, точные приборы, электроника и другие позиции. Цены в дирхамах ОАЭ (AED). Заказ через WhatsApp.'
    },
    filters: { all: 'Все', industrial: 'Промышленные', instrument: 'Приборы', electronic: 'Электроника', other: 'Другое' },
    count: '{n} позиций',
    emptyTitle: 'Каталог пока пуст',
    emptyBody: 'Товары добавляются по одному. Позиция может быть промышленной, измерительным прибором, электроникой или другой категорией, с ценой в дирхамах.',
    emptyFilter: 'В этой категории пока нет товаров.',
    priceOnRequest: 'Цена по запросу',
    order: 'Заказать в WhatsApp',
    orderMessage: 'Здравствуйте, хочу заказать «{name}» в магазине Bizdavar (дирхамы). Цена: {price}',
    sku: 'Код',
    geoText: 'Магазин Bizdavar с ценами в дирхамах ОАЭ — промышленные товары, приборы и электроника.'
  });

  put('ar', {
    hero: {
      tag: 'متجر بالدرهم',
      title: 'متجر درهم الإمارات',
      desc: 'سلع صناعية وأجهزة قياس وإلكترونيات وأصناف أخرى. كل سعر بالدرهم الإماراتي (AED) والطلب عبر واتساب.'
    },
    filters: { all: 'الكل', industrial: 'صناعي', instrument: 'أدوات دقيقة', electronic: 'إلكترونيات', other: 'أخرى' },
    count: '{n} صنف',
    emptyTitle: 'هذه القائمة ما زالت فارغة',
    emptyBody: 'تُضاف السلع واحدة تلو الأخرى. كل صنف قد يكون صناعياً أو أداة قياس أو إلكترونياً أو من فئة أخرى، وسعره بالدرهم.',
    emptyFilter: 'لا توجد سلع في هذه الفئة بعد.',
    priceOnRequest: 'السعر عند الطلب',
    order: 'اطلب عبر واتساب',
    orderMessage: 'مرحباً، أريد طلب «{name}» من متجر بيزدوار بالدرهم. السعر: {price}',
    sku: 'الرمز',
    geoText: 'متجر بيزدوار بأسعار درهم الإمارات — سلع صناعية وأدوات قياس وإلكترونيات.'
  });
})();
