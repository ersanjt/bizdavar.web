/**
 * Write locale motorcycle listing pages with native copy and prefixed links.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const VER = '20260919mc';
const BASE = 'https://bizdavar.com';

const LOCALES = [
  { code: 'fa', lang: 'fa', dir: 'rtl', locale: 'fa_IR', prefix: '', folder: 'pages' },
  { code: 'tr', lang: 'tr', dir: 'ltr', locale: 'tr_TR', prefix: '/tr', folder: 'tr/pages' },
  { code: 'en', lang: 'en', dir: 'ltr', locale: 'en_US', prefix: '/en', folder: 'en/pages' },
  { code: 'ru', lang: 'ru', dir: 'ltr', locale: 'ru_RU', prefix: '/ru', folder: 'ru/pages' },
  { code: 'ar', lang: 'ar', dir: 'rtl', locale: 'ar_AE', prefix: '/ar', folder: 'ar/pages' }
];

const OG_ALTS = {
  fa: ['tr_TR', 'en_US', 'ru_RU', 'ar_AE'],
  tr: ['fa_IR', 'en_US', 'ru_RU', 'ar_AE'],
  en: ['fa_IR', 'tr_TR', 'ru_RU', 'ar_AE'],
  ru: ['fa_IR', 'tr_TR', 'en_US', 'ar_AE'],
  ar: ['fa_IR', 'tr_TR', 'en_US', 'ru_RU']
};

const COPY = {
  fa: {
    title: 'خرید تجهیزات موتورسیکلت | کلاه، کاپشن و بوت | بیزدوار',
    description: 'خرید تجهیزات موتورسیکلت از بیزدوار: کلاه ایمنی، کاپشن، دستکش، شلوار، بوت، اینترکام و محافظ. قیمت روی کارت به دلار است و برای تحویل در ایران. اگر قیمت نباشد، فقط استعلام می‌کنیم.',
    keywords: 'تجهیزات موتورسیکلت, کلاه ایمنی موتور, کاپشن موتور, دستکش موتور, بوت موتور, اینترکام, بیزدوار',
    twitter: 'خرید تجهیزات موتورسیکلت از بیزدوار: کلاه ایمنی، کاپشن، دستکش، بوت و اینترکام. قیمت روی کارت به دلار، تحویل ایران.',
    h1: 'خرید تجهیزات موتورسیکلت',
    lead: 'کلاه ایمنی، کاپشن، دستکش، شلوار، بوت و اینترکام. قیمت روی کارت به دلار است و برای تحویل در ایران.',
    helmet: 'کلاه',
    jacket: 'کاپشن',
    boots: 'بوت',
    hub: 'اتوموتو',
    brakes: 'فروشگاه ترمز',
    searchPh: 'جستجو: کلاه ایمنی، کاپشن، بوت…',
    searchLabel: 'جستجو در کاتالوگ…',
    navAria: 'دسته‌بندی محصولات تامین',
    linksAria: 'لینک فروشگاه موتور و ترمز',
    catalogEyebrow: 'کاتالوگ کامل',
    catalogTitle: 'تجهیزات موتورسیکلت',
    catalogDesc: '۳۸۷۶ محصول موتورسیکلت با عکس واقعی: کلاه، کاپشن، دستکش، شلوار، بوت و اینترکام.',
    empty: 'محصولی با این عبارت پیدا نشد.',
    hlEyebrow: 'محصولات پرتقاضا',
    hlTitle: 'از کلاه ایمنی تا بوت تورینگ',
    hlDesc: 'قیمت روی کارت به دلار و برای تحویل در ایران است. اگر قیمت نباشد استعلام کنید.',
    quoteEyebrow: 'راهنمای استعلام',
    quoteTitle: 'سایز لباس یا کد کالا را بفرستید',
    quoteDesc: 'برای لباس، سایز و قد و وزن کافی است — پیش‌فاکتور زودتر آماده می‌شود.',
    trustEyebrow: 'چرا از بیزدوار بخرید؟',
    trustTitle: 'کاتالوگ کامل تجهیزات موتورسیکلت',
    trustDesc: 'قیمت روی کارت به دلار است و برای تحویل در ایران. اگر قیمت نباشد، فقط استعلام می‌کنیم.',
    buyEyebrow: 'مسیر خرید',
    buyTitle: 'از انتخاب محصول تا ارسال — پنج مرحله',
    buyDesc: 'مبلغ کالا جدا، هزینه پست جدا — هر دو قبل از پرداخت در پیش‌فاکتور می‌آید.',
    iranEyebrow: 'کاربرد',
    iranTitle: 'برای چه کسانی است؟',
    iranDesc: 'فروشگاه موتور، موتورسوار شهری، آفرود و سفارش شخصی.',
    iranNote: 'سایز ندارید؟ قد و وزن را در واتساپ بفرستید.',
    supplyEyebrow: 'تامین از بیزدوار',
    supplyTitle: 'خدمات تامین فروشگاه موتور',
    supplyDesc: 'یک نقطه تماس فارسی برای کلاه، کاپشن، بوت و بقیه تجهیزات موتور.',
    official: 'قیمت روی کارت به دلار است و برای تحویل در ایران. اگر قیمت نباشد فقط استعلام است. روغن موتور آلمان را در <a href="liqui-moly">Liqui Moly</a> ببینید · <a href="auto-moto">اتوموتو</a> · <a href="car-parts">فروشگاه ترمز</a> · <a href="contact">تماس</a>',
    guidesEyebrow: 'راهنمای خرید',
    guidesTitle: 'قبل از استعلام بخوانید',
    guidesDesc: 'مقالات فارسی برای خریدار ایران — کد سفارش، چک‌لیست و مسیر واتساپ.',
    guideCatalog: 'کاتالوگ تامین بیزدوار',
    guideCatalogDesc: 'تجهیزات موتور و برندهای صنعتی',
    guideLiqui: 'روغن و افزودنی Liqui Moly',
    guideLiquiDesc: 'مکمل سرویس موتور و روغن چهارزمانه',
    guideQuote: 'استعلام تجهیزات موتور',
    guideQuoteDesc: 'سایز لباس و مقصد ارسال',
    faqEyebrow: 'سوالات متداول',
    faqTitle: 'قیمت، پست و سایز',
    faqDesc: 'پاسخ را پیدا نکردید؟ در واتساپ پیام بدهید.',
    ctaTitle: 'برای کلاه، کاپشن یا بوت استعلام می‌خواهید؟',
    ctaDesc: 'سایز لباس یا کد کالا را بفرستید. پیش‌فاکتور می‌آید؛ هزینه ارسال بعد از سفارش اعلام می‌شود.',
    btnForm: 'فرم استعلام',
    btnCatalog: 'کاتالوگ محصولات',
    wa: 'واتساپ',
    contact: 'تماس',
    stickyLabel: 'استعلام تجهیزات موتور',
    stickyHint: 'قیمت دلاری، تحویل ایران',
    geo: 'تامین تجهیزات موتورسیکلت — قیمت روی کارت به دلار و برای تحویل در ایران.',
    related: [
      ['اتوموتو', 'auto-moto', 'دو فروشگاه جدا: موتور و ترمز'],
      ['فروشگاه ترمز', 'car-parts', 'لنت و دیسک با برند و مدل'],
      ['Liqui Moly', 'liqui-moly', 'روغن و افزودنی خودرو'],
      ['تماس و استعلام', 'contact', 'سایز لباس یا کد کالا']
    ],
    crumbSupply: 'تامین و توزیع',
    crumbHub: 'خودرو و موتور'
  },
  tr: {
    title: 'Motosiklet ekipmanı | kask, mont ve bot | Bizdavar',
    description: 'Bizdavar motosiklet ekipmanı: kask, mont, eldiven, pantolon, bot, interkom ve koruma. Karttaki fiyat ABD dolarıdır ve İran teslimi içindir. Fiyat yoksa yalnızca teklif alınır.',
    keywords: 'motosiklet ekipmanı, motosiklet kask, motosiklet mont, motosiklet bot, interkom, Bizdavar',
    twitter: 'Motosiklet ekipmanı: kask, mont, bot ve interkom. Karttaki fiyat ABD doları, İran teslimi.',
    h1: 'Motosiklet ekipmanı',
    lead: 'Kask, mont, eldiven, pantolon, bot ve interkom. Karttaki fiyat ABD dolarıdır ve İran teslimi içindir.',
    helmet: 'Kask',
    jacket: 'Mont',
    boots: 'Bot',
    hub: 'Auto-Moto',
    brakes: 'Fren mağazası',
    searchPh: 'Ara: kask, mont, bot…',
    searchLabel: 'Katalogda ara…',
    navAria: 'Tedarik ürün kategorileri',
    linksAria: 'Motosiklet ve fren mağazası bağlantıları',
    catalogEyebrow: 'Tam katalog',
    catalogTitle: 'Motosiklet ekipmanı',
    catalogDesc: '3876 motosiklet ürünü, gerçek fotoğrafla: kask, mont, eldiven, pantolon, bot ve interkom.',
    empty: 'Bu aramayla ürün bulunamadı.',
    hlEyebrow: 'Çok sorulanlar',
    hlTitle: 'Kasktan touring bota',
    hlDesc: 'Karttaki fiyat ABD doları, İran teslimi. Fiyat yoksa teklif alın.',
    quoteEyebrow: 'Teklif rehberi',
    quoteTitle: 'Bedeninizi veya ürün kodunu gönderin',
    quoteDesc: 'Giyimde beden, boy ve kilo yeter — proforma daha çabuk çıkar.',
    trustEyebrow: 'Neden Bizdavar?',
    trustTitle: 'Tam motosiklet ekipmanı kataloğu',
    trustDesc: 'Karttaki fiyat ABD dolarıdır ve İran teslimi içindir. Fiyat yoksa yalnızca teklif alınır.',
    buyEyebrow: 'Satın alma yolu',
    buyTitle: 'Üründen sevkiyata — beş adım',
    buyDesc: 'Ürün tutarı ayrı, kargo ayrı. İkisi de ödemeden önce proformada yazar.',
    iranEyebrow: 'Kullanım',
    iranTitle: 'Kimler için?',
    iranDesc: 'Motosiklet dükkânı, şehir sürücüsü, off-road ve bireysel sipariş.',
    iranNote: 'Bedeniniz yoksa boy ve kiloyu yazın.',
    supplyEyebrow: 'Bizdavar tedariki',
    supplyTitle: 'Motosiklet tedarik hizmeti',
    supplyDesc: 'Kask, mont, bot ve diğer ekipman için tek iletişim hattı.',
    official: 'Karttaki fiyat ABD dolarıdır ve İran teslimi içindir. Fiyat yoksa yalnızca teklif. Alman motor yağı için <a href="liqui-moly">Liqui Moly</a> · <a href="auto-moto">Auto-Moto</a> · <a href="car-parts">fren mağazası</a> · <a href="contact">iletişim</a>',
    guidesEyebrow: 'Satın alma rehberi',
    guidesTitle: 'Tekliften önce okuyun',
    guidesDesc: 'Sipariş kodu, kontrol listesi ve WhatsApp yolu.',
    guideCatalog: 'Bizdavar tedarik kataloğu',
    guideCatalogDesc: 'Motosiklet ekipmanı ve endüstriyel markalar',
    guideLiqui: 'Liqui Moly yağ ve katkılar',
    guideLiquiDesc: 'Motor yağı ve dört zamanlı bakım',
    guideQuote: 'Motosiklet teklifi',
    guideQuoteDesc: 'Giyim bedeni ve teslimat noktası',
    faqEyebrow: 'SSS',
    faqTitle: 'Fiyat, kargo ve beden',
    faqDesc: 'Cevabı bulamadınız mı? WhatsApp’tan yazın.',
    ctaTitle: 'Kask, mont veya bot için teklif ister misiniz?',
    ctaDesc: 'Beden veya SKU gönderin. Proforma gelir; kargo siparişten sonra netleşir.',
    btnForm: 'Teklif formu',
    btnCatalog: 'Ürün kataloğu',
    wa: 'WhatsApp',
    contact: 'İletişim',
    stickyLabel: 'Motosiklet teklifi',
    stickyHint: 'ABD doları, İran teslimi',
    geo: 'Motosiklet ekipmanı tedariki — karttaki fiyat ABD doları, İran teslimi.',
    related: [
      ['Auto-Moto', 'auto-moto', 'İki ayrı mağaza: motosiklet ve fren'],
      ['Fren mağazası', 'car-parts', 'Balata ve disk, marka ve modele göre'],
      ['Liqui Moly', 'liqui-moly', 'Motor yağı ve katkı'],
      ['İletişim', 'contact', 'Beden veya ürün kodu']
    ],
    crumbSupply: 'Tedarik',
    crumbHub: 'Auto-Moto'
  },
  en: {
    title: 'Motorcycle gear | helmets, jackets and boots | Bizdavar',
    description: 'Motorcycle gear from Bizdavar: helmets, jackets, gloves, pants, boots, intercoms and armour. Card prices are in US dollars, for delivery in Iran. If there is no price, we quote on request.',
    keywords: 'motorcycle gear, motorcycle helmet, motorcycle jacket, motorcycle boots, intercom, Bizdavar',
    twitter: 'Motorcycle gear: helmets, jackets, boots and intercoms. Card prices are in US dollars, for delivery in Iran.',
    h1: 'Motorcycle gear',
    lead: 'Helmets, jackets, gloves, pants, boots and intercoms. The price on the card is in US dollars, for delivery in Iran.',
    helmet: 'Helmets',
    jacket: 'Jackets',
    boots: 'Boots',
    hub: 'Auto-Moto',
    brakes: 'Brake shop',
    searchPh: 'Search: helmet, jacket, boots…',
    searchLabel: 'Search catalog…',
    navAria: 'Supply product categories',
    linksAria: 'Motorcycle and brake shop links',
    catalogEyebrow: 'Full catalog',
    catalogTitle: 'Motorcycle gear',
    catalogDesc: '3,876 motorcycle products with real photos: helmets, jackets, gloves, pants, boots and intercoms.',
    empty: 'No products match this search.',
    hlEyebrow: 'High demand',
    hlTitle: 'From full-face helmets to touring boots',
    hlDesc: 'Card prices are in US dollars, for delivery in Iran. No price means quote only.',
    quoteEyebrow: 'Quote guide',
    quoteTitle: 'Send a clothing size or SKU',
    quoteDesc: 'For apparel, size, height and weight speed up the proforma.',
    trustEyebrow: 'Why Bizdavar?',
    trustTitle: 'A full motorcycle gear catalog',
    trustDesc: 'The price on the card is in US dollars, for delivery in Iran. If there is no price, we quote on request.',
    buyEyebrow: 'Purchase path',
    buyTitle: 'From pick to dispatch — five steps',
    buyDesc: 'Goods and postage are quoted separately. Both appear on the proforma before you pay.',
    iranEyebrow: 'Use cases',
    iranTitle: 'Who is it for?',
    iranDesc: 'Motorcycle shops, city riders, off-road and personal orders.',
    iranNote: 'Missing a size? Send height and weight on WhatsApp.',
    supplyEyebrow: 'Supply by Bizdavar',
    supplyTitle: 'Motorcycle supply services',
    supplyDesc: 'One contact for helmets, jackets, boots and the rest of the riding gear.',
    official: 'Card prices are in US dollars for delivery in Iran. No price means quote only. For German engine oil see <a href="liqui-moly">Liqui Moly</a> · <a href="auto-moto">Auto-Moto</a> · <a href="car-parts">brake shop</a> · <a href="contact">contact</a>',
    guidesEyebrow: 'Buying guides',
    guidesTitle: 'Read before you inquire',
    guidesDesc: 'Order codes, quote checklist and the WhatsApp path.',
    guideCatalog: 'Bizdavar supply catalog',
    guideCatalogDesc: 'Motorcycle gear and industrial brands',
    guideLiqui: 'Liqui Moly oils and additives',
    guideLiquiDesc: 'Engine oil and four-stroke service',
    guideQuote: 'Motorcycle gear quote',
    guideQuoteDesc: 'Clothing size and delivery destination',
    faqEyebrow: 'FAQ',
    faqTitle: 'Price, postage and sizing',
    faqDesc: 'No answer? Message us on WhatsApp.',
    ctaTitle: 'Need a quote for a helmet, jacket or boots?',
    ctaDesc: 'Send a size or SKU. You get a proforma; postage is confirmed after the order.',
    btnForm: 'Quote form',
    btnCatalog: 'Product catalog',
    wa: 'WhatsApp',
    contact: 'Contact',
    stickyLabel: 'Motorcycle gear quote',
    stickyHint: 'US dollars, Iran delivery',
    geo: 'Motorcycle gear supply — prices on the card are in US dollars, for delivery in Iran.',
    related: [
      ['Auto-Moto', 'auto-moto', 'Two separate shops: gear and brakes'],
      ['Brake shop', 'car-parts', 'Pads and discs by brand and model'],
      ['Liqui Moly', 'liqui-moly', 'Oils and additives'],
      ['Contact', 'contact', 'Clothing size or SKU']
    ],
    crumbSupply: 'Supply',
    crumbHub: 'Auto-Moto'
  },
  ru: {
    title: 'Мотоэкипировка | шлем, куртка, мотоботы | Bizdavar',
    description: 'Каталог мотоэкипировки Bizdavar: шлемы, куртки, перчатки, мотоботы, интерком и защита. Цена на карточке — в долларах США, с доставкой в Иран. Если цены нет — только запрос.',
    keywords: 'мотоэкипировка, мотошлем, мотокуртка, мотоботы, интерком, Bizdavar',
    twitter: 'Мотоэкипировка: шлемы, куртки, мотоботы и интерком. Цена в долларах США, доставка в Иран.',
    h1: 'Мотоэкипировка',
    lead: 'Шлемы, куртки, перчатки, брюки, мотоботы и интерком. Цена на карточке — в долларах США, с доставкой в Иран.',
    helmet: 'Шлемы',
    jacket: 'Куртки',
    boots: 'Мотоботы',
    hub: 'Auto-Moto',
    brakes: 'Магазин тормозов',
    searchPh: 'Поиск: шлем, куртка, мотоботы…',
    searchLabel: 'Поиск по каталогу…',
    navAria: 'Категории поставки',
    linksAria: 'Ссылки мотомагазина и тормозов',
    catalogEyebrow: 'Каталог',
    catalogTitle: 'Мотоэкипировка',
    catalogDesc: '3876 мототоваров с живыми фото: шлемы, куртки, перчатки, брюки, мотоботы и интерком.',
    empty: 'По этому запросу товаров нет.',
    hlEyebrow: 'Хиты',
    hlTitle: 'От шлема до туристических мотобот',
    hlDesc: 'Цена в долларах США, доставка в Иран. Нет цены — только запрос.',
    quoteEyebrow: 'Как запросить',
    quoteTitle: 'Пришлите размер или артикул',
    quoteDesc: 'Для одежды достаточно размера, роста и веса — проформа выходит быстрее.',
    trustEyebrow: 'Почему Bizdavar',
    trustTitle: 'Полный каталог мотоэкипировки',
    trustDesc: 'Цена на карточке — в долларах США, с доставкой в Иран. Если цены нет, товар только по запросу.',
    buyEyebrow: 'Путь покупки',
    buyTitle: 'От выбора до отправки — пять шагов',
    buyDesc: 'Стоимость товара отдельно, почта отдельно. Обе суммы — в проформе до оплаты.',
    iranEyebrow: 'Для кого',
    iranTitle: 'Кому подходит',
    iranDesc: 'Мотомагазин, городской райдер, оффроуд и частный заказ.',
    iranNote: 'Нет размера? Пришлите рост и вес в WhatsApp.',
    supplyEyebrow: 'Поставка Bizdavar',
    supplyTitle: 'Сервис мотомагазина',
    supplyDesc: 'Один контакт для шлемов, курток, мотобот и остальной экипировки.',
    official: 'Цена на карточке — в долларах США, с доставкой в Иран. Нет цены — только запрос. Немецкие масла — <a href="liqui-moly">Liqui Moly</a> · <a href="auto-moto">Auto-Moto</a> · <a href="car-parts">магазин тормозов</a> · <a href="contact">контакты</a>',
    guidesEyebrow: 'Гайды покупателя',
    guidesTitle: 'Прочитайте перед запросом',
    guidesDesc: 'Код заказа, чек-лист и путь в WhatsApp.',
    guideCatalog: 'Каталог поставок Bizdavar',
    guideCatalogDesc: 'Мотоэкипировка и промышленные бренды',
    guideLiqui: 'Масла и присадки Liqui Moly',
    guideLiquiDesc: 'Моторное масло и сервис четырёхтактных',
    guideQuote: 'Запрос мотоэкипировки',
    guideQuoteDesc: 'Размер одежды и пункт доставки',
    faqEyebrow: 'Вопросы',
    faqTitle: 'Цена, почта и размер',
    faqDesc: 'Нет ответа? Напишите в WhatsApp.',
    ctaTitle: 'Нужна цена на шлем, куртку или мотоботы?',
    ctaDesc: 'Пришлите размер или артикул. Придёт проформа; почта подтверждается после заказа.',
    btnForm: 'Форма запроса',
    btnCatalog: 'Каталог',
    wa: 'WhatsApp',
    contact: 'Контакты',
    stickyLabel: 'Запрос мотоэкипировки',
    stickyHint: 'Доллары США, доставка в Иран',
    geo: 'Поставка мотоэкипировки — цена на карточке в долларах США, с доставкой в Иран.',
    related: [
      ['Auto-Moto', 'auto-moto', 'Два магазина: экипировка и тормоза'],
      ['Магазин тормозов', 'car-parts', 'Колодки и диски по марке и модели'],
      ['Liqui Moly', 'liqui-moly', 'Масла и присадки'],
      ['Контакты', 'contact', 'Размер одежды или артикул']
    ],
    crumbSupply: 'Поставки',
    crumbHub: 'Auto-Moto'
  },
  ar: {
    title: 'معدات الدراجات النارية | خوذة وسترة وبوت | Bizdavar',
    description: 'كتالوج معدات الدراجات النارية من بيزدوار: خوذات وسترات وقفازات وبوت وإنتركم وحماية. السعر على البطاقة بالدولار الأمريكي لتسليم إيران. إن لم يوجد سعر فالاستعلام فقط.',
    keywords: 'معدات دراجات نارية, خوذة دراجة نارية, سترة دراجة نارية, بوت دراجة نارية, إنتركم, بيزدوار',
    twitter: 'معدات الدراجات النارية: خوذات وسترات وبوت وإنتركم. السعر بالدولار الأمريكي لتسليم إيران.',
    h1: 'معدات الدراجات النارية',
    lead: 'خوذات وسترات وقفازات وبناطيل وبوت وإنتركم. السعر على البطاقة بالدولار الأمريكي لتسليم إيران.',
    helmet: 'خوذات',
    jacket: 'سترات',
    boots: 'بوت',
    hub: 'أوتو-موتو',
    brakes: 'متجر الفرامل',
    searchPh: 'بحث: خوذة، سترة، بوت…',
    searchLabel: 'البحث في الكتالوج…',
    navAria: 'فئات منتجات التوريد',
    linksAria: 'روابط متجر الدراجة النارية والفرامل',
    catalogEyebrow: 'الكتالوج الكامل',
    catalogTitle: 'معدات الدراجات النارية',
    catalogDesc: '٣٨٧٦ منتج للدراجات النارية بصور حقيقية: خوذات وسترات وقفازات وبناطيل وبوت وإنتركم.',
    empty: 'لا يوجد منتج بهذه العبارة.',
    hlEyebrow: 'الأكثر طلباً',
    hlTitle: 'من الخوذة إلى بوت التورينغ',
    hlDesc: 'السعر بالدولار الأمريكي لتسليم إيران. بلا سعر يعني استعلام فقط.',
    quoteEyebrow: 'دليل الاستعلام',
    quoteTitle: 'أرسلوا المقاس أو رمز المنتج',
    quoteDesc: 'للملابس يكفي المقاس والطول والوزن — الفاتورة المبدئية أسرع.',
    trustEyebrow: 'لماذا بيزدوار',
    trustTitle: 'كتالوج كامل لمعدات الدراجات النارية',
    trustDesc: 'السعر على البطاقة بالدولار الأمريكي لتسليم إيران. إن لم يوجد سعر فالاستعلام فقط.',
    buyEyebrow: 'مسار الشراء',
    buyTitle: 'من الاختيار إلى الإرسال — خمس خطوات',
    buyDesc: 'مبلغ السلعة منفصل والشحن منفصل. كلاهما في الفاتورة المبدئية قبل الدفع.',
    iranEyebrow: 'الاستخدام',
    iranTitle: 'لمن؟',
    iranDesc: 'متجر دراجات نارية وراكب مدينة وأوف رود وطلب شخصي.',
    iranNote: 'لا يوجد مقاس؟ أرسلوا الطول والوزن عبر واتساب.',
    supplyEyebrow: 'توريد بيزدوار',
    supplyTitle: 'خدمات متجر الدراجات النارية',
    supplyDesc: 'جهة اتصال واحدة للخوذات والسترات والبوت وبقية المعدات.',
    official: 'السعر على البطاقة بالدولار الأمريكي لتسليم إيران. بلا سعر يعني استعلام فقط. لزيوت ألمانيا راجعوا <a href="liqui-moly">Liqui Moly</a> · <a href="auto-moto">أوتو-موتو</a> · <a href="car-parts">متجر الفرامل</a> · <a href="contact">اتصلوا بنا</a>',
    guidesEyebrow: 'أدلة الشراء',
    guidesTitle: 'اقرأوا قبل الاستعلام',
    guidesDesc: 'رمز الطلب وقائمة التحقق ومسار واتساب.',
    guideCatalog: 'كتالوج توريد بيزدوار',
    guideCatalogDesc: 'معدات الدراجات النارية والعلامات الصناعية',
    guideLiqui: 'زيوت وإضافات Liqui Moly',
    guideLiquiDesc: 'زيت المحرك وخدمة رباعية الأشواط',
    guideQuote: 'استعلام معدات الدراجة النارية',
    guideQuoteDesc: 'مقاس الملابس ووجهة التسليم',
    faqEyebrow: 'أسئلة',
    faqTitle: 'السعر والشحن والمقاس',
    faqDesc: 'لا جواب؟ راسلوا واتساب.',
    ctaTitle: 'هل تريدون استعلاماً عن خوذة أو سترة أو بوت؟',
    ctaDesc: 'أرسلوا المقاس أو رمز SKU. تصلكم فاتورة مبدئية؛ الشحن يُؤكد بعد الطلب.',
    btnForm: 'نموذج استعلام',
    btnCatalog: 'الكتالوج',
    wa: 'واتساب',
    contact: 'اتصلوا بنا',
    stickyLabel: 'استعلام معدات الدراجة النارية',
    stickyHint: 'دولار أمريكي، تسليم إيران',
    geo: 'توريد معدات الدراجات النارية — السعر على البطاقة بالدولار الأمريكي لتسليم إيران.',
    related: [
      ['أوتو-موتو', 'auto-moto', 'متجران منفصلان: المعدات والفرامل'],
      ['متجر الفرامل', 'car-parts', 'فحمات وأقراص حسب الماركة والموديل'],
      ['Liqui Moly', 'liqui-moly', 'زيوت وإضافات'],
      ['اتصلوا بنا', 'contact', 'مقاس الملابس أو رمز المنتج']
    ],
    crumbSupply: 'التوريد',
    crumbHub: 'أوتو-موتو'
  }
};

function esc(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function page(loc) {
  const t = COPY[loc.code];
  const p = loc.prefix;
  const url = `${BASE}${p}/pages/motorcycle`;
  const alts = OG_ALTS[loc.code].map((tag) => `  <meta property="og:locale:alternate" content="${tag}">`).join('\n');
  const relatedJs = t.related.map((row, i) =>
    `        { title: ${JSON.stringify(row[0])}, url: ${JSON.stringify(row[1])}, desc: ${JSON.stringify(row[2])}, titleKey: 'autoMotoPage.related.${i}.title', descKey: 'autoMotoPage.related.${i}.desc' }`
  ).join(',\n');
  return `<!DOCTYPE html>
<html lang="${loc.lang}" dir="${loc.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20260910c">
  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/estedad/Estedad-Black.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" as="image" type="image/webp" href="/assets/images/auto-moto/hero/auto-moto-hero-800.webp" fetchpriority="high">
  <script src="/assets/scripts/gtm-boot.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/locale-url.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/seo-head.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/locale-preload.js?v=20260910c" defer></script>
  <meta name="view-transition" content="same-origin">
  <title>${esc(t.title)}</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/styles/auto-moto.css?v=${VER}">
  <meta name="description" content="${esc(t.description)}">
  <meta name="keywords" content="${esc(t.keywords)}">

  <!-- bd-static-seo -->
  <meta property="og:title" content="${esc(t.title)}">
  <meta property="og:description" content="${esc(t.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="https://bizdavar.com/assets/images/brand/bizdavar-logo-square.png">
  <meta property="og:image:alt" content="${esc(t.title)}">
  <meta property="og:locale" content="${loc.locale}">
${alts}
  <meta property="og:site_name" content="Bizdavar Group">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(t.title)}">
  <meta name="twitter:description" content="${esc(t.twitter)}">
  <meta name="twitter:image" content="https://bizdavar.com/assets/images/brand/bizdavar-logo-square.png">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="fa-IR" href="${BASE}/pages/motorcycle">
  <link rel="alternate" hreflang="tr-TR" href="${BASE}/tr/pages/motorcycle">
  <link rel="alternate" hreflang="en-US" href="${BASE}/en/pages/motorcycle">
  <link rel="alternate" hreflang="ru-RU" href="${BASE}/ru/pages/motorcycle">
  <link rel="alternate" hreflang="ar-AE" href="${BASE}/ar/pages/motorcycle">
  <link rel="alternate" hreflang="x-default" href="${BASE}/pages/motorcycle">
  <!-- /bd-static-seo -->
</head>
<body data-page="motorcycle" data-depth="1" class="auto-page">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWQQWF8"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
<main id="main-content" class="site-main">

  <section class="auto-hero">
    <div class="container" id="autoHeroContent">
      <div class="auto-hero__copy">
        <img class="auto-hero__logo" src="/assets/images/auto-moto/logo-moto-shop.svg" width="440" height="150" alt="${esc(t.h1)}" data-i18n-alt="pages.motorcycle.logoAlt">
        <h1 data-i18n="pages.motorcycle.h1">${esc(t.h1)}</h1>
        <p data-i18n="pages.motorcycle.lead">${esc(t.lead)}</p>
      </div>
    </div>
  </section>

  <nav class="moto-shop-links" data-i18n-aria="pages.motorcycle.linksAria" aria-label="${esc(t.linksAria)}">
    <div class="container am-hub__chips">
      <a href="${p}/pages/motorcycle#auto-cat-helmets" data-i18n="pages.motorcycle.helmet">${esc(t.helmet)}</a>
      <a href="${p}/pages/motorcycle#auto-cat-jackets" data-i18n="pages.motorcycle.jacket">${esc(t.jacket)}</a>
      <a href="${p}/pages/motorcycle#auto-cat-boots" data-i18n="pages.motorcycle.boots">${esc(t.boots)}</a>
      <a href="${p}/pages/car-parts" data-i18n="pages.motorcycle.brakes">${esc(t.brakes)}</a>
      <a href="${p}/pages/auto-moto" data-i18n="pages.motorcycle.hub">${esc(t.hub)}</a>
    </div>
  </nav>

  <div class="auto-trust-bar" id="autoTrustBar"></div>
  <div class="auto-quick-series-wrap" id="autoQuickSeries"></div>
  <nav class="auto-cat-nav" id="autoCatNav" data-i18n-aria="supplyBrand.navAria" aria-label="${esc(t.navAria)}"></nav>

  <section class="section section--gray" id="auto-catalog">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.catalog.eyebrow">${esc(t.catalogEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.catalog.title">${esc(t.catalogTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.catalog.desc">${esc(t.catalogDesc)}</p>
      </div>
      <div class="auto-catalog-toolbar">
        <label class="auto-catalog-search" for="autoCatalogSearch">
          <span class="visually-hidden" data-i18n="supplyBrand.catalogSearch">${esc(t.searchLabel)}</span>
          <input type="search" id="autoCatalogSearch" name="q" autocomplete="off" data-i18n-placeholder="pages.motorcycle.searchPh" placeholder="${esc(t.searchPh)}">
        </label>
      </div>
      <p class="auto-catalog-empty" id="autoCatalogEmpty" hidden data-i18n="supplyBrand.catalogSearchEmpty">${esc(t.empty)}</p>
      <div id="autoCategories"></div>
    </div>
  </section>

  <section class="section" id="auto-highlights">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.highlights.eyebrow">${esc(t.hlEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.highlights.title">${esc(t.hlTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.highlights.desc">${esc(t.hlDesc)}</p>
      </div>
      <div class="auto-highlights" id="autoHighlights"></div>
    </div>
  </section>

  <section class="section section--gray" id="auto-quote">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.quote.eyebrow">${esc(t.quoteEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.quote.title">${esc(t.quoteTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.quote.desc">${esc(t.quoteDesc)}</p>
      </div>
      <div id="autoQuoteChecklist"></div>
    </div>
  </section>

  <section class="section" id="auto-trust">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.trust.eyebrow">${esc(t.trustEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.trust.title">${esc(t.trustTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.trust.desc">${esc(t.trustDesc)}</p>
      </div>
      <div class="auto-why-grid" id="autoWhyGrid"></div>
    </div>
  </section>

  <section class="section section--gray" id="auto-buy">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.buy.eyebrow">${esc(t.buyEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.buy.title">${esc(t.buyTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.buy.desc">${esc(t.buyDesc)}</p>
      </div>
      <div class="auto-steps" id="autoPurchaseSteps"></div>
    </div>
  </section>

  <section class="section auto-iran" id="auto-iran">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.iran.eyebrow">${esc(t.iranEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.iran.title">${esc(t.iranTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.iran.desc">${esc(t.iranDesc)}</p>
      </div>
      <div class="auto-iran-grid" id="autoIranGrid"></div>
      <p class="auto-iran__note" data-i18n="autoMotoPage.sections.iran.note">${esc(t.iranNote)}</p>
    </div>
  </section>

  <section class="section section--gray" id="auto-supply">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.supply.eyebrow">${esc(t.supplyEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.supply.title">${esc(t.supplyTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.supply.desc">${esc(t.supplyDesc)}</p>
      </div>
      <div class="auto-supply-grid" id="autoSupplyList"></div>
      <div class="auto-official-note" data-i18n-html="autoMotoPage.officialNote">${t.official}</div>
    </div>
  </section>

  <section class="section buyer-guides" id="auto-guides" aria-labelledby="autoGuidesTitle">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="common.guidesEyebrow">${esc(t.guidesEyebrow)}</span>
        <h2 class="section__title" id="autoGuidesTitle" data-i18n="common.guidesTitle">${esc(t.guidesTitle)}</h2>
        <p class="section__desc" data-i18n="common.guidesDesc">${esc(t.guidesDesc)}</p>
      </div>
      <ul class="buyer-guides__list">
        <li>
          <a href="${p}/pages/products#supply">
            <strong data-i18n="pages.motorcycle.guideCatalog">${esc(t.guideCatalog)}</strong>
            <span data-i18n="pages.motorcycle.guideCatalogDesc">${esc(t.guideCatalogDesc)}</span>
          </a>
        </li>
        <li>
          <a href="${p}/pages/liqui-moly">
            <strong data-i18n="pages.motorcycle.guideLiqui">${esc(t.guideLiqui)}</strong>
            <span data-i18n="pages.motorcycle.guideLiquiDesc">${esc(t.guideLiquiDesc)}</span>
          </a>
        </li>
        <li>
          <a href="${p}/pages/contact?service=industrial&product=Auto-Moto">
            <strong data-i18n="pages.motorcycle.guideQuote">${esc(t.guideQuote)}</strong>
            <span data-i18n="pages.motorcycle.guideQuoteDesc">${esc(t.guideQuoteDesc)}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section class="section" id="auto-faq">
    <div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="autoMotoPage.sections.faq.eyebrow">${esc(t.faqEyebrow)}</span>
        <h2 class="section__title" data-i18n="autoMotoPage.sections.faq.title">${esc(t.faqTitle)}</h2>
        <p class="section__desc" data-i18n="autoMotoPage.sections.faq.desc">${esc(t.faqDesc)}</p>
      </div>
      <div class="auto-faq" id="autoFaq"></div>
    </div>
  </section>

  <section class="section section--yellow">
    <div class="container cta-banner cta-banner--pro">
      <h2 data-i18n="autoMotoPage.cta.title">${esc(t.ctaTitle)}</h2>
      <p data-i18n="autoMotoPage.cta.desc">${esc(t.ctaDesc)}</p>
      <div class="hero__actions hero__actions--center">
        <a href="${p}/pages/contact?service=industrial&product=Auto-Moto" class="btn btn--primary" id="autoCtaForm" data-i18n="autoMotoPage.cta.btnForm">${esc(t.btnForm)}</a>
        <a href="https://wa.me/989305880135" class="btn btn--green" id="autoCtaWhatsapp" data-i18n="common.whatsapp">${esc(t.wa)}</a>
        <a href="${p}/pages/products#supply" class="btn btn--yellow" data-i18n="autoMotoPage.cta.btnServices">${esc(t.btnCatalog)}</a>
      </div>
    </div>
  </section>

  <div class="auto-sticky-cta" id="autoStickyCta" hidden>
    <div class="auto-sticky-cta__text">
      <strong data-i18n="autoMotoPage.sticky.label">${esc(t.stickyLabel)}</strong>
      <span data-i18n="autoMotoPage.sticky.hint">${esc(t.stickyHint)}</span>
    </div>
    <div class="auto-sticky-cta__actions">
      <a href="https://wa.me/989305880135" class="btn btn--green" id="autoStickyWa" data-i18n="common.whatsapp">${esc(t.wa)}</a>
      <a href="${p}/pages/contact?service=industrial&product=Auto-Moto" class="btn btn--yellow auto-btn-inquiry" data-i18n="common.contact">${esc(t.contact)}</a>
    </div>
  </div>

  <div id="geoStrip"></div>
  <div id="relatedLinks"></div>

  </main>

  <script src="/assets/scripts/site-loader.js?v=${VER}" data-after-seo="i18n/supply-catalog-i18n.js,i18n/auto-moto-catalog-i18n.js" data-after-page-i18n="lib/supply-brand-page.js,config/auto-moto-products.js" data-before-main="auto-moto-page.js"></script>

  <script>
    bizdavarPageInit(function () {
      injectPageSeo('motorcycle', {
        canonical: 'https://bizdavar.com/pages/motorcycle',
        ogImage: 'assets/images/auto-moto/hero/auto-moto-hero.webp'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply', name: ${JSON.stringify(t.crumbSupply)} },
        { page: 'autoMoto', url: 'auto-moto', name: ${JSON.stringify(t.crumbHub)} },
        { page: 'motorcycle', url: 'motorcycle' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply', name: ${JSON.stringify(t.crumbSupply)} },
        { page: 'autoMoto', url: 'pages/auto-moto', name: ${JSON.stringify(t.crumbHub)} },
        { page: 'motorcycle', url: 'pages/motorcycle' }
      ]);
      initAutoMotoPage();
      injectAutoMotoSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'autoMotoPage.geoText',
        text: ${JSON.stringify(t.geo)}
      });
      renderRelatedLinks([
${relatedJs}
      ]);
      setupWhatsappLinks();
    });
  </script>
</body>
</html>
`;
}

for (const loc of LOCALES) {
  const file = path.join(ROOT, loc.folder, 'motorcycle.html');
  fs.writeFileSync(file, page(loc));
  console.log('wrote', loc.folder + '/motorcycle.html');
}
