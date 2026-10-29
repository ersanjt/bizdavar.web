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
      desc: 'الان هیچ قلمی در این فهرست نیست. قیمت درهم فقط برای قلمی نوشته می‌شود که همین‌جا ثبت شده باشد.'
    },
    filters: { all: 'همه', industrial: 'صنعتی', instrument: 'ابزار دقیق', electronic: 'الکترونیکی', other: 'سایر' },
    count: '{n} کالا',
    emptyTitle: 'این فهرست هنوز خالی است',
    emptyBody: 'تا وقتی قلمی با قیمت درهم در فهرست نباشد، سفارشی از این صفحه ثبت نمی‌شود.',
    emptyFilter: 'در این دسته هنوز کالایی نیست.',
    priceOnRequest: 'استعلام قیمت',
    order: 'سفارش در واتساپ',
    orderMessage: 'سلام، از فروشگاه درهم بیزدوار می‌خواهم «{name}» را سفارش بدهم. قیمت: {price}',
    sku: 'کد',
    geoText: 'فروشگاه درهم بیزدوار — فعلاً بدون کالا. قیمت فقط برای قلم ثبت‌شده نوشته می‌شود.'
  });

  put('tr', {
    hero: {
      tag: 'Dirhem mağaza',
      title: 'BAE dirhemi mağazası',
      desc: 'Bu listede şu an hiç ürün yok. Dirhem fiyatı yalnızca buraya kaydedilmiş bir kalem için yazılır.'
    },
    filters: { all: 'Tümü', industrial: 'Endüstriyel', instrument: 'Ölçüm cihazı', electronic: 'Elektronik', other: 'Diğer' },
    count: '{n} ürün',
    emptyTitle: 'Bu liste henüz boş',
    emptyBody: 'Listede dirhem fiyatlı bir kalem olmadan bu sayfadan sipariş alınmaz.',
    emptyFilter: 'Bu kategoride henüz ürün yok.',
    priceOnRequest: 'Fiyat sorun',
    order: 'WhatsApp ile sipariş',
    orderMessage: 'Merhaba, Bizdavar dirhem mağazasından «{name}» sipariş etmek istiyorum. Fiyat: {price}',
    sku: 'Kod',
    geoText: 'Bizdavar dirhem mağazası — şu an ürün yok. Fiyat yalnızca kayıtlı kalem için yazılır.'
  });

  put('en', {
    hero: {
      tag: 'Dirham shop',
      title: 'UAE dirham shop',
      desc: 'Nothing is listed here yet. A dirham price appears only for an item that is actually on this list.'
    },
    filters: { all: 'All', industrial: 'Industrial', instrument: 'Instruments', electronic: 'Electronics', other: 'Other' },
    count: '{n} items',
    emptyTitle: 'This catalog is still empty',
    emptyBody: 'This page does not take an order until an item with a dirham price is listed.',
    emptyFilter: 'Nothing in this category yet.',
    priceOnRequest: 'Price on request',
    order: 'Order on WhatsApp',
    orderMessage: 'Hello, I would like to order “{name}” from the Bizdavar dirham shop. Price: {price}',
    sku: 'SKU',
    geoText: 'Bizdavar dirham shop — no items listed. A price is shown only for a listed item.'
  });

  put('ru', {
    hero: {
      tag: 'Магазин в дирхамах',
      title: 'Магазин в дирхамах ОАЭ',
      desc: 'Сейчас в списке нет ни одной позиции. Цена в дирхамах пишется только для позиции, которая внесена сюда.'
    },
    filters: { all: 'Все', industrial: 'Промышленные', instrument: 'Приборы', electronic: 'Электроника', other: 'Другое' },
    count: '{n} позиций',
    emptyTitle: 'Каталог пока пуст',
    emptyBody: 'Пока в списке нет позиции с ценой в дирхамах, заказ с этой страницы не принимается.',
    emptyFilter: 'В этой категории пока нет товаров.',
    priceOnRequest: 'Цена по запросу',
    order: 'Заказать в WhatsApp',
    orderMessage: 'Здравствуйте, хочу заказать «{name}» в магазине Bizdavar (дирхамы). Цена: {price}',
    sku: 'Код',
    geoText: 'Магазин Bizdavar в дирхамах — товаров пока нет. Цена только у внесённой позиции.'
  });

  put('ar', {
    hero: {
      tag: 'متجر بالدرهم',
      title: 'متجر درهم الإمارات',
      desc: 'لا يوجد أي صنف في هذه القائمة الآن. يُكتب سعر الدرهم فقط للصنف المسجّل هنا.'
    },
    filters: { all: 'الكل', industrial: 'صناعي', instrument: 'أدوات دقيقة', electronic: 'إلكترونيات', other: 'أخرى' },
    count: '{n} صنف',
    emptyTitle: 'هذه القائمة ما زالت فارغة',
    emptyBody: 'لا يُقبل طلب من هذه الصفحة قبل أن يُسجَّل صنف بسعر بالدرهم.',
    emptyFilter: 'لا توجد سلع في هذه الفئة بعد.',
    priceOnRequest: 'السعر عند الطلب',
    order: 'اطلب عبر واتساب',
    orderMessage: 'مرحباً، أريد طلب «{name}» من متجر بيزدوار بالدرهم. السعر: {price}',
    sku: 'الرمز',
    geoText: 'متجر درهم بيزدوار — لا أصناف حالياً. السعر يُكتب فقط للصنف المسجّل.'
  });
})();
