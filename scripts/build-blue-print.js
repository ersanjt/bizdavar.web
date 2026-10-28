#!/usr/bin/env node
/**
 * Build Blue Print catalog, nav, i18n, hub pages and one HTML file per part.
 * Run: node scripts/build-blue-print.js
 */
const fs = require('fs');
const path = require('path');
const { groups } = require('./blue-print-source');

const ROOT = path.join(__dirname, '..');
const LANGS = ['fa', 'ru', 'en', 'tr', 'ar'];
const LOCALES = [
  { code: 'fa', dir: 'rtl', og: 'fa_IR', prefix: '' },
  { code: 'tr', dir: 'ltr', og: 'tr_TR', prefix: '/tr' },
  { code: 'en', dir: 'ltr', og: 'en_US', prefix: '/en' },
  { code: 'ru', dir: 'ltr', og: 'ru_RU', prefix: '/ru' },
  { code: 'ar', dir: 'rtl', og: 'ar_AE', prefix: '/ar' }
];
const BASE = 'https://bizdavar.com';
const WA = '989305880135';

const ui = {
  fa: {
    order: 'برای استعلام، شماره قطعه اصلی (OE)، مدل خودرو، سال ساخت، تعداد و شهر تحویل در ایران یا مقصد در روسیه را به بیزدوار بفرستید. قیمت با موجودی روز در پیش‌فاکتور می‌آید؛ روی این صفحه قیمت ساختگی نمی‌گذاریم.',
    sendTitle: 'برای پیش‌فاکتور این‌ها را بفرستید',
    send: ['شماره OE یا شماره Blue Print، اگر دارید', 'برند، مدل، سال و حجم موتور', 'تعداد و اینکه برای تعمیرگاه است یا ناوگان', 'شهر تحویل در ایران یا شهر مقصد در روسیه'],
    related: 'قطعات همین خانواده',
    hub: 'کاتالوگ Blue Print',
    inquiry: 'فرم استعلام',
    wa: 'واتساپ',
    official: 'شرح این خانواده در سایت Blue Print',
    faqQ: 'این قطعه را چطور تطبیق می‌دهید؟',
    faqA: 'شماره OE یا شاسی را با کاتالوگ Blue Print تطبیق می‌کنیم و فقط همان کاربرد را پیش‌فاکتور می‌کنیم.',
    faqQ2: 'به ایران و روسیه می‌رسد؟',
    faqA2: 'بله. مسیر تامین برای تعمیرگاه و ناوگان در ایران و برای خریدار در روسیه هماهنگ می‌شود. زمان حمل در پیش‌فاکتور نوشته می‌شود.',
    crumbHome: 'خانه',
    crumbProducts: 'محصولات',
    indexTitle: 'فهرست همه قطعات',
    indexLead: 'هر نام به صفحه خودش می‌رود. شماره OE را آنجا یا در واتساپ بفرستید.'
  },
  ru: {
    order: 'Для запроса пришлите в Bizdavar номер оригинала (OE), модель, год, количество и город в России или в Иране. Цену ставим в проформе по наличию на день запроса — на странице нет выдуманной цены.',
    sendTitle: 'Что прислать для проформы',
    send: ['Номер OE или номер Blue Print, если он есть', 'Марка, модель, год и объём двигателя', 'Количество и для кого: сервис или парк', 'Город в России или город поставки в Иране'],
    related: 'Детали этой группы',
    hub: 'Каталог Blue Print',
    inquiry: 'Форма запроса',
    wa: 'WhatsApp',
    official: 'Описание группы на сайте Blue Print',
    faqQ: 'Как вы подбираете деталь?',
    faqA: 'Сверяем номер OE или VIN с каталогом Blue Print и выставляем проформу только на это применение.',
    faqQ2: 'Поставляете в Россию и в Иран?',
    faqA2: 'Да. Поставка идёт и сервисам в Иране, и покупателям в России. Срок пишем в проформе.',
    crumbHome: 'Главная',
    crumbProducts: 'Продукты',
    indexTitle: 'Все детали',
    indexLead: 'Каждое имя ведёт на свою страницу. Номер OE можно отправить там или в WhatsApp.'
  },
  en: {
    order: 'For a quote, send Bizdavar the OE number, vehicle model, year, quantity and the delivery city in Iran or Russia. The price is confirmed on the proforma from that day’s supply. This page does not invent a price.',
    sendTitle: 'Send this for a proforma',
    send: ['OE number or Blue Print number, if you have it', 'Make, model, year and engine size', 'Quantity, and whether it is a workshop or a fleet', 'Delivery city in Iran or destination city in Russia'],
    related: 'Parts in this family',
    hub: 'Blue Print catalogue',
    inquiry: 'Quote form',
    wa: 'WhatsApp',
    official: 'This family on the Blue Print site',
    faqQ: 'How do you match the part?',
    faqA: 'We match the OE number or VIN to the Blue Print catalogue and quote only that application.',
    faqQ2: 'Do you supply Iran and Russia?',
    faqA2: 'Yes. Workshops and fleets in Iran and buyers in Russia are both in scope. Lead time is written on the proforma.',
    crumbHome: 'Home',
    crumbProducts: 'Products',
    indexTitle: 'All parts',
    indexLead: 'Each name opens its own page. Send the OE number there or on WhatsApp.'
  },
  tr: {
    order: 'Teklif için OE numarasını, araç modelini, yılını, adedi ve İran veya Rusya teslim şehrini Bizdavar’a gönderin. Fiyat, günün tedarikine göre proformada netleşir. Bu sayfada uydurma fiyat yoktur.',
    sendTitle: 'Proforma için bunları gönderin',
    send: ['OE veya Blue Print numarası, varsa', 'Marka, model, yıl ve motor hacmi', 'Adet ve atölye mi filo mu', 'İran teslim şehri veya Rusya varış şehri'],
    related: 'Aynı ailedeki parçalar',
    hub: 'Blue Print kataloğu',
    inquiry: 'Teklif formu',
    wa: 'WhatsApp',
    official: 'Bu ailenin Blue Print sayfası',
    faqQ: 'Parçayı nasıl eşleştiriyorsunuz?',
    faqA: 'OE numarasını veya şasiyi Blue Print kataloğuyla eşleştirir, yalnızca o uygulamaya proforma çıkarırız.',
    faqQ2: 'İran ve Rusya’ya gider mi?',
    faqA2: 'Evet. İran’daki atölye ve filolar ile Rusya’daki alıcılar için tedarik kurulur. Süre proformada yazar.',
    crumbHome: 'Ana sayfa',
    crumbProducts: 'Ürünler',
    indexTitle: 'Tüm parçalar',
    indexLead: 'Her ad kendi sayfasına gider. OE numarasını oradan veya WhatsApp’tan gönderin.'
  },
  ar: {
    order: 'لطلب السعر أرسلوا إلى Bizdavar رقم القطعة الأصلية OE وموديل السيارة والسنة والكمية ومدينة التسليم في إيران أو الوجهة في روسيا. السعر يُثبت في الفاتورة الأولية حسب التوفر. لا نضع سعراً مختلقاً في هذه الصفحة.',
    sendTitle: 'أرسلوا هذا للفاتورة الأولية',
    send: ['رقم OE أو رقم Blue Print إن وُجد', 'العلامة والموديل والسنة وسعة المحرك', 'الكمية وهل الطلب لورشة أم لأسطول', 'مدينة التسليم في إيران أو مدينة الوجهة في روسيا'],
    related: 'قطع هذه العائلة',
    hub: 'كتالوج Blue Print',
    inquiry: 'نموذج الاستعلام',
    wa: 'واتساب',
    official: 'وصف هذه العائلة في موقع Blue Print',
    faqQ: 'كيف تطابقون القطعة؟',
    faqA: 'نطابق رقم OE أو رقم الهيكل مع كتالوج Blue Print ونصدر فاتورة أولية لهذا التطبيق فقط.',
    faqQ2: 'هل يصل إلى إيران وروسيا؟',
    faqA2: 'نعم. التوريد لورش وأساطيل إيران وللمشتري في روسيا. مدة الشحن تُكتب في الفاتورة الأولية.',
    crumbHome: 'الرئيسية',
    crumbProducts: 'المنتجات',
    indexTitle: 'كل القطع',
    indexLead: 'كل اسم يفتح صفحته. أرسلوا رقم OE من هناك أو عبر واتساب.'
  }
};

const seoHub = {
  fa: {
    title: 'خرید قطعات Blue Print | فیلتر، ترمز و کلاچ | بیزدوار',
    description: 'تامین قطعات Blue Print برای ایران و روسیه: فیلتر روغن و هوا، لنت و دیسک، کیت کلاچ، جلوبندی، تایم، واترپمپ، استارت و دینام. استعلام با شماره OE و پیش‌فاکتور.',
    keywords: 'خرید Blue Print, فیلتر روغن, لنت ترمز, کیت کلاچ, دیسک ترمز, قطعات خودرو آسیایی, بیزدوار, تامین قطعه ایران, قطعات یدکی روسیه'
  },
  ru: {
    title: 'Купить запчасти Blue Print | фильтры, тормоза, сцепление | Bizdavar',
    description: 'Поставка Blue Print в Россию и Иран: масляные и воздушные фильтры, колодки и диски, комплекты сцепления, подвеска, ГРМ, помпа, стартер и генератор. Запрос по номеру OE и проформа.',
    keywords: 'Blue Print купить, масляный фильтр, тормозные колодки, комплект сцепления, запчасти азиатских авто, Bizdavar, поставка в Россию, запчасти Иран'
  },
  en: {
    title: 'Blue Print parts | filters, brakes and clutch | Bizdavar',
    description: 'Blue Print parts for Iran and Russia: oil and air filters, pads and discs, clutch kits, suspension, timing, water pumps, starters and alternators. Quote by OE number.',
    keywords: 'Blue Print parts, oil filter, brake pads, clutch kit, Asian car parts, Bizdavar, Iran supply, Russia parts'
  },
  tr: {
    title: 'Blue Print yedek parça | filtre, fren ve debriyaj | Bizdavar',
    description: 'İran ve Rusya için Blue Print: yağ ve hava filtresi, balata ve disk, debriyaj seti, süspansiyon, triger, devirdaim, marş ve alternatör. OE numarasıyla teklif.',
    keywords: 'Blue Print, yağ filtresi, fren balatası, debriyaj seti, Asya araç yedek parça, Bizdavar'
  },
  ar: {
    title: 'قطع Blue Print | فلاتر وفرامل ودبرياج | Bizdavar',
    description: 'توريد Blue Print لإيران وروسيا: فلاتر الزيت والهواء، تيل وأقراص، أطقم الدبرياج، التعليق، التوقيت، مضخة الماء، المارش والدينامو. استعلام برقم OE.',
    keywords: 'Blue Print, فلتر زيت, تيل فرامل, طقم دبرياج, قطع سيارات آسيوية, Bizdavar, إيران, روسيا'
  }
};

const pageCopy = {
  fa: {
    crumb: 'Blue Print',
    sections: {
      trust: { eyebrow: 'چرا بیزدوار', title: 'قطعه Blue Print با تطبیق OE، نه حدس', desc: 'شماره قطعه یا شاسی را می‌گیریم، با کاتالوگ Blue Print تطبیق می‌کنیم و پیش‌فاکتور را برای ایران یا روسیه می‌نویسیم.' },
      buy: { eyebrow: 'مسیر خرید', title: 'از شماره OE تا تحویل', desc: 'قیمت وقتی قطعی است که موجودی روز در پیش‌فاکتور آمده باشد.' },
      quote: { eyebrow: 'استعلام', title: 'هرچه شماره دقیق‌تر، جواب سریع‌تر', desc: 'مدل خودرو به‌تنهایی هم شروع خوبی است؛ شماره OE مسیر را کوتاه می‌کند.' },
      highlights: { eyebrow: 'پرتقاضا', title: 'فیلتر، ترمز و کلاچ', desc: 'همین خانواده‌ها هسته کاتالوگ Blue Print برای سواری و وانت آسیایی هستند.' },
      catalog: { eyebrow: 'کاتالوگ', title: 'همه خانواده‌های قطعه Blue Print', desc: 'فیلتر، ترمز، کلاچ، فرمان، مدیریت موتور، انتقال قدرت، تایم، خنک‌کاری، برق، بدنه و ابزار تخصصی.' },
      iran: { eyebrow: 'بازار هدف', title: 'تعمیرگاه ایران و خریدار روسیه', desc: 'مشاوره فارسی برای ایران و مسیر روسی برای خریدار روسیه. هر دو از همین کاتالوگ تامین می‌شوند.' },
      supply: { eyebrow: 'خدمات', title: 'فقط لیست قطعه نیست', desc: 'تطبیق، پیش‌فاکتور و هماهنگی حمل.' },
      faq: { eyebrow: 'پرسش‌ها', title: 'قبل از سفارش', desc: 'اگر جواب این‌جا نیست، شماره OE را در واتساپ بفرستید.' }
    },
    officialNote: 'شرح فنی خانواده‌ها بر اساس <a href="https://www.blue-print.com/" target="_blank" rel="noopener noreferrer">کاتالوگ عمومی Blue Print</a> است. سفارش از بیزدوار است، نه از کارخانه. <a href="contact">تماس</a> · <a href="liqui-moly">Liqui Moly</a> · <a href="car-parts">فروشگاه ترمز</a>',
    cta: { title: 'شماره OE را بفرستید', desc: 'فیلتر، لنت، کیت کلاچ، جلوبندی، تایم یا برق — مدل خودرو را هم بنویسید.', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' },
    sticky: { label: 'استعلام Blue Print', hint: 'ایران و روسیه' },
    geoText: 'تامین قطعات Blue Print برای تعمیرگاه و ناوگان در ایران و برای خریدار در روسیه.',
    related: [
      { title: 'Liqui Moly', desc: 'روغن و افزودنی' },
      { title: 'فروشگاه ترمز', desc: 'لنت و دیسک با برند و مدل' },
      { title: 'اتوموتو', desc: 'تجهیزات موتورسیکلت' },
      { title: 'تماس', desc: 'پیش‌فاکتور قطعه' }
    ],
    intent: 'قطعات Blue Print'
  },
  ru: {
    crumb: 'Blue Print',
    sections: {
      trust: { eyebrow: 'Почему Bizdavar', title: 'Деталь Blue Print по номеру OE, без угадывания', desc: 'Берём номер или VIN, сверяем с каталогом Blue Print и пишем проформу для России или Ирана.' },
      buy: { eyebrow: 'Как заказать', title: 'От номера OE до поставки', desc: 'Цена окончательна, когда наличие дня стоит в проформе.' },
      quote: { eyebrow: 'Запрос', title: 'Точнее номер — быстрее ответ', desc: 'Модель авто уже помогает. Номер OE сокращает путь.' },
      highlights: { eyebrow: 'Частый спрос', title: 'Фильтры, тормоза и сцепление', desc: 'Эти группы — ядро каталога Blue Print для азиатских легковых и LCV.' },
      catalog: { eyebrow: 'Каталог', title: 'Все семейства деталей Blue Print', desc: 'Фильтры, тормоза, сцепление, подвеска, управление двигателем, трансмиссия, ГРМ, охлаждение, электрика, кузов и инструмент.' },
      iran: { eyebrow: 'Рынки', title: 'Сервис в Иране и покупатель в России', desc: 'Персидская консультация для Ирана и русский контур для России. Обе поставки идут из этого каталога.' },
      supply: { eyebrow: 'Услуги', title: 'Не только список деталей', desc: 'Подбор, проформа и организация перевозки.' },
      faq: { eyebrow: 'Вопросы', title: 'До заказа', desc: 'Если ответа нет, пришлите номер OE в WhatsApp.' }
    },
    officialNote: 'Техническое описание семейств основано на <a href="https://www.blue-print.com/" target="_blank" rel="noopener noreferrer">публичном каталоге Blue Print</a>. Заказ идёт через Bizdavar. <a href="contact">Контакты</a> · <a href="liqui-moly">Liqui Moly</a> · <a href="car-parts">тормоза</a>',
    cta: { title: 'Пришлите номер OE', desc: 'Фильтр, колодки, комплект сцепления, подвеска, ГРМ или электрика — добавьте модель авто.', btnForm: 'Форма запроса', btnServices: 'Каталог' },
    sticky: { label: 'Запрос Blue Print', hint: 'Россия и Иран' },
    geoText: 'Поставка Blue Print сервисам и паркам в Иране и покупателям в России.',
    related: [
      { title: 'Liqui Moly', desc: 'Масла и присадки' },
      { title: 'Магазин тормозов', desc: 'Колодки и диски' },
      { title: 'Auto-Moto', desc: 'Мотоэкипировка' },
      { title: 'Контакты', desc: 'Проформа на деталь' }
    ],
    intent: 'Запчасти Blue Print'
  },
  en: {
    crumb: 'Blue Print',
    sections: {
      trust: { eyebrow: 'Why Bizdavar', title: 'Blue Print parts matched by OE number', desc: 'We take the part number or VIN, match it to the Blue Print catalogue and write a proforma for Iran or Russia.' },
      buy: { eyebrow: 'How to buy', title: 'From OE number to delivery', desc: 'The price is final when that day’s supply is on the proforma.' },
      quote: { eyebrow: 'Quote', title: 'A precise number gets a faster answer', desc: 'The vehicle model is a good start. The OE number shortens the path.' },
      highlights: { eyebrow: 'In demand', title: 'Filters, brakes and clutch', desc: 'These families are the core of the Blue Print range for Asian cars and vans.' },
      catalog: { eyebrow: 'Catalogue', title: 'Every Blue Print part family', desc: 'Filtration, braking, clutch, steering, engine management, drivetrain, timing, cooling, electrics, body and specialist tools.' },
      iran: { eyebrow: 'Markets', title: 'Workshops in Iran and buyers in Russia', desc: 'Farsi consulting for Iran and a Russian path for Russia. Both are supplied from this catalogue.' },
      supply: { eyebrow: 'Services', title: 'More than a parts list', desc: 'Matching, proforma and freight coordination.' },
      faq: { eyebrow: 'Questions', title: 'Before you order', desc: 'If the answer is not here, send the OE number on WhatsApp.' }
    },
    officialNote: 'Family descriptions follow the <a href="https://www.blue-print.com/" target="_blank" rel="noopener noreferrer">public Blue Print catalogue</a>. Orders are placed with Bizdavar. <a href="contact">Contact</a> · <a href="liqui-moly">Liqui Moly</a> · <a href="car-parts">brake shop</a>',
    cta: { title: 'Send the OE number', desc: 'Filter, pads, clutch kit, suspension, timing or electrics — add the vehicle.', btnForm: 'Quote form', btnServices: 'Product catalogue' },
    sticky: { label: 'Blue Print quote', hint: 'Iran and Russia' },
    geoText: 'Blue Print parts for workshops and fleets in Iran and for buyers in Russia.',
    related: [
      { title: 'Liqui Moly', desc: 'Oils and additives' },
      { title: 'Brake shop', desc: 'Pads and discs' },
      { title: 'Auto-Moto', desc: 'Motorcycle gear' },
      { title: 'Contact', desc: 'Parts proforma' }
    ],
    intent: 'Blue Print parts'
  },
  tr: {
    crumb: 'Blue Print',
    sections: {
      trust: { eyebrow: 'Neden Bizdavar', title: 'Blue Print parça, OE numarasıyla', desc: 'Parça numarasını veya şasiyi alır, Blue Print kataloğuyla eşleştirir ve İran ya da Rusya için proforma yazarız.' },
      buy: { eyebrow: 'Satın alma', title: 'OE numarasından teslimata', desc: 'Fiyat, günün tedariki proformaya yazılınca kesindir.' },
      quote: { eyebrow: 'Teklif', title: 'Numara netleştikçe cevap hızlanır', desc: 'Araç modeli iyi bir başlangıçtır. OE numarası yolu kısaltır.' },
      highlights: { eyebrow: 'Sık talep', title: 'Filtre, fren ve debriyaj', desc: 'Bu aileler, Asya binek ve hafif ticari araçlar için Blue Print çekirdeğidir.' },
      catalog: { eyebrow: 'Katalog', title: 'Tüm Blue Print parça aileleri', desc: 'Filtre, fren, debriyaj, direksiyon, motor yönetimi, aktarma, triger, soğutma, elektrik, gövde ve özel alet.' },
      iran: { eyebrow: 'Pazar', title: 'İran atölyesi ve Rusya alıcısı', desc: 'İran için Farsça danışmanlık, Rusya için Rusça hat. İkisi de bu katalogdan tedarik edilir.' },
      supply: { eyebrow: 'Hizmet', title: 'Yalnızca parça listesi değil', desc: 'Eşleştirme, proforma ve taşıma koordinasyonu.' },
      faq: { eyebrow: 'Sorular', title: 'Siparişten önce', desc: 'Yanıt yoksa OE numarasını WhatsApp’tan gönderin.' }
    },
    officialNote: 'Aile açıklamaları <a href="https://www.blue-print.com/" target="_blank" rel="noopener noreferrer">Blue Print açık kataloğuna</a> dayanır. Sipariş Bizdavar üzerinden gelir. <a href="contact">İletişim</a> · <a href="liqui-moly">Liqui Moly</a> · <a href="car-parts">fren</a>',
    cta: { title: 'OE numarasını gönderin', desc: 'Filtre, balata, debriyaj seti, süspansiyon, triger veya elektrik — araç modelini de yazın.', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' },
    sticky: { label: 'Blue Print teklifi', hint: 'İran ve Rusya' },
    geoText: 'İran’daki atölye ve filolar ile Rusya’daki alıcılar için Blue Print tedariki.',
    related: [
      { title: 'Liqui Moly', desc: 'Yağ ve katkı' },
      { title: 'Fren mağazası', desc: 'Balata ve disk' },
      { title: 'Auto-Moto', desc: 'Motosiklet ekipmanı' },
      { title: 'İletişim', desc: 'Parça proforması' }
    ],
    intent: 'Blue Print parça'
  },
  ar: {
    crumb: 'Blue Print',
    sections: {
      trust: { eyebrow: 'لماذا Bizdavar', title: 'قطعة Blue Print بمطابقة رقم OE', desc: 'نأخذ رقم القطعة أو الهيكل ونطابقه مع كتالوج Blue Print ونكتب فاتورة أولية لإيران أو روسيا.' },
      buy: { eyebrow: 'مسار الشراء', title: 'من رقم OE إلى التسليم', desc: 'السعر نهائي عندما يُكتب توفر اليوم في الفاتورة الأولية.' },
      quote: { eyebrow: 'استعلام', title: 'كلما دقّ الرقم سرع الرد', desc: 'موديل السيارة بداية جيدة. رقم OE يختصر الطريق.' },
      highlights: { eyebrow: 'الأكثر طلباً', title: 'الفلاتر والفرامل والدبرياج', desc: 'هذه العائلات نواة كتالوج Blue Print لسيارات الركوب والفان الآسيوية.' },
      catalog: { eyebrow: 'الكتالوج', title: 'كل عائلات قطع Blue Print', desc: 'فلاتر، فرامل، دبرياج، توجيه، إدارة محرك، نقل حركة، توقيت، تبريد، كهرباء، هيكل وأدوات.' },
      iran: { eyebrow: 'الأسواق', title: 'ورشة إيران والمشتري في روسيا', desc: 'استشارة فارسية لإيران ومسار روسي لروسيا. التوريد من هذا الكتالوج.' },
      supply: { eyebrow: 'الخدمات', title: 'ليست قائمة قطع فقط', desc: 'مطابقة وفاتورة أولية وتنسيق شحن.' },
      faq: { eyebrow: 'أسئلة', title: 'قبل الطلب', desc: 'إذا لم تجدوا الجواب أرسلوا رقم OE على واتساب.' }
    },
    officialNote: 'وصف العائلات مبني على <a href="https://www.blue-print.com/" target="_blank" rel="noopener noreferrer">الكتالوج العام لـ Blue Print</a>. الطلب عبر Bizdavar. <a href="contact">اتصال</a> · <a href="liqui-moly">Liqui Moly</a> · <a href="car-parts">الفرامل</a>',
    cta: { title: 'أرسلوا رقم OE', desc: 'فلتر أو تيل أو طقم دبرياج أو تعليق أو توقيت أو كهرباء — أضيفوا موديل السيارة.', btnForm: 'نموذج الاستعلام', btnServices: 'كتالوج المنتجات' },
    sticky: { label: 'استعلام Blue Print', hint: 'إيران وروسيا' },
    geoText: 'توريد قطع Blue Print لورش وأساطيل إيران وللمشتري في روسيا.',
    related: [
      { title: 'Liqui Moly', desc: 'زيوت وإضافات' },
      { title: 'متجر الفرامل', desc: 'تيل وأقراص' },
      { title: 'أوتو-موتو', desc: 'معدات دراجات' },
      { title: 'اتصال', desc: 'فاتورة القطعة' }
    ],
    intent: 'قطع Blue Print'
  }
};

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function camel(id) {
  const c = id.replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
  return 'bp' + c.charAt(0).toUpperCase() + c.slice(1);
}

function parts() {
  const list = [];
  groups.forEach(g => {
    g.parts.forEach(row => {
      const [id, fa, ru, en, tr, ar, faF, ruF, enF, trF, arF] = row;
      list.push({
        id, group: g, names: { fa, ru, en, tr, ar }, facts: { fa: faF, ru: ruF, en: enF, tr: trF, ar: arF }
      });
    });
  });
  return list;
}

function jsString(s) {
  return JSON.stringify(s);
}

function write(rel, body) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body, 'utf8');
}

function buildCatalog() {
  const all = parts();
  const langFields = (obj, key) => LANGS.map(l => `${key}${l === 'fa' ? '' : l.charAt(0).toUpperCase() + l.slice(1)}: ${jsString(obj[l])}`).join(',\n          ');
  // names use name / nameRu. descriptions use desc / descRu via suffix map Fa empty for base.
  const seriesOf = (g) => g.parts.map(row => {
    const [id, fa, ru, en, tr, ar, faF, ruF, enF, trF, arF] = row;
    return `        {
          id: ${jsString(id)},
          name: ${jsString(fa)},
          nameRu: ${jsString(ru)},
          nameEn: ${jsString(en)},
          nameTr: ${jsString(tr)},
          nameAr: ${jsString(ar)},
          title: ${jsString(fa)},
          titleRu: ${jsString(ru)},
          titleEn: ${jsString(en)},
          titleTr: ${jsString(tr)},
          titleAr: ${jsString(ar)},
          desc: ${jsString(faF)},
          descFa: ${jsString(faF)},
          descRu: ${jsString(ruF)},
          descEn: ${jsString(enF)},
          descTr: ${jsString(trF)},
          descAr: ${jsString(arF)},
          note: ${jsString(en)},
          noteRu: ${jsString(ru)},
          noteEn: ${jsString(en)},
          noteTr: ${jsString(tr)},
          noteAr: ${jsString(ar)},
          categoryFa: ${jsString(g.names.fa)},
          categoryRu: ${jsString(g.names.ru)},
          categoryEn: ${jsString(g.names.en)},
          categoryTr: ${jsString(g.names.tr)},
          categoryAr: ${jsString(g.names.ar)},
          inquiryName: ${jsString('Blue Print ' + en)},
          quoteOnly: true,
          specs: ${jsString(en)},
          image: ${jsString('assets/images/blue-print/' + id + '.jpg?v=20261028b')},
          imageAlt: ${jsString(fa + ' Blue Print')}
        }`;
  }).join(',\n');

  const logo = "'assets/images/partners/blue-print.svg?v=20261028'";
  const categories = groups.map(g => `      {
        id: ${jsString(g.id)},
        icon: ${jsString(g.icon)},
        title: ${jsString(g.names.fa)},
        titleRu: ${jsString(g.names.ru)},
        titleEn: ${jsString(g.names.en)},
        titleTr: ${jsString(g.names.tr)},
        titleAr: ${jsString(g.names.ar)},
        desc: ${jsString(g.intro.fa)},
        descFa: ${jsString(g.intro.fa)},
        descRu: ${jsString(g.intro.ru)},
        descEn: ${jsString(g.intro.en)},
        descTr: ${jsString(g.intro.tr)},
        descAr: ${jsString(g.intro.ar)},
        officialUrl: ${jsString(g.official)},
        image: ${jsString('assets/images/blue-print/' + g.id + '.jpg?v=20261028b')},
        imageAlt: ${jsString(g.names.fa + ' Blue Print')},
        series: [
${seriesOf(g)}
        ]
      }`).join(',\n');

  const multi = (base, bag) => {
    const lines = [`${base}: ${jsString(bag.fa)}`];
    ['ru', 'en', 'tr', 'ar'].forEach(l => {
      const k = base + l.charAt(0).toUpperCase() + l.slice(1);
      lines.push(`${k}: ${jsString(bag[l])}`);
    });
    return lines.join(',\n      ');
  };

  const trust = [
    { icon: 'shield', fa: ['قطعه نو', 'قطعه بازسازی‌شده عرضه نمی‌کنیم. تطبیق با شماره OE انجام می‌شود.'], ru: ['Новая деталь', 'Восстановленные детали не предлагаем. Подбор по номеру OE.'], en: ['New parts', 'We do not offer reconditioned parts. Matching is by OE number.'], tr: ['Yeni parça', 'Rektifiye parça sunmayız. Eşleştirme OE numarasıyla yapılır.'], ar: ['قطعة جديدة', 'لا نعرض قطعاً مجددة. المطابقة برقم OE.'] },
    { icon: 'target', fa: ['تطبیق کاتالوگ', 'شماره شاسی یا OE با کاربرد Blue Print سنجیده می‌شود.'], ru: ['Сверка каталога', 'VIN или OE сверяется с применением Blue Print.'], en: ['Catalogue match', 'The VIN or OE number is checked against the Blue Print application.'], tr: ['Katalog eşleştirme', 'Şasi veya OE, Blue Print uygulamasıyla kontrol edilir.'], ar: ['مطابقة الكتالوج', 'يُفحص الهيكل أو رقم OE مقابل تطبيق Blue Print.'] },
    { icon: 'phone', fa: ['فارسی و روسی', 'مشاوره برای تعمیرگاه ایران و خریدار روسیه.'], ru: ['Фарси и русский', 'Консультация для сервиса в Иране и покупателя в России.'], en: ['Farsi and Russian', 'Consulting for workshops in Iran and buyers in Russia.'], tr: ['Farsça ve Rusça', 'İran atölyesi ve Rusya alıcısı için danışmanlık.'], ar: ['فارسية وروسية', 'استشارة لورشة إيران والمشتري في روسيا.'] },
    { icon: 'ship', fa: ['پیش‌فاکتور', 'قیمت و زمان حمل بعد از موجودی روز نوشته می‌شود.'], ru: ['Проформа', 'Цена и срок пишутся после проверки наличия.'], en: ['Proforma', 'Price and lead time are written after that day’s supply check.'], tr: ['Proforma', 'Fiyat ve süre, günün stoğu görüldükten sonra yazılır.'], ar: ['فاتورة أولية', 'السعر والمدة يُكتبان بعد التحقق من التوفر.'] }
  ].map(item => `      { icon: ${jsString(item.icon)}, label: ${jsString(item.fa[0])}, labelRu: ${jsString(item.ru[0])}, labelEn: ${jsString(item.en[0])}, labelTr: ${jsString(item.tr[0])}, labelAr: ${jsString(item.ar[0])}, desc: ${jsString(item.fa[1])}, descRu: ${jsString(item.ru[1])}, descEn: ${jsString(item.en[1])}, descTr: ${jsString(item.tr[1])}, descAr: ${jsString(item.ar[1])} }`).join(',\n');

  const why = [
    ['target', 'تطبیق قبل از خرید', 'Подбор до покупки', 'Match before you buy', 'Satın almadan eşleştirme', 'مطابقة قبل الشراء',
      'اگر فقط مدل خودرو را دارید، سال و حجم موتور را هم بگویید تا کاربرد اشتباه نرود.',
      'Если есть только модель, добавьте год и объём, чтобы не уехать в чужое применение.',
      'If you only have the model, add the year and engine size so the application is not the wrong one.',
      'Elinizde yalnız model varsa yıl ve motor hacmini de yazın; yanlış uygulamaya gitmesin.',
      'إذا كان لديكم الموديل فقط أضيفوا السنة وسعة المحرك حتى لا يذهب الطلب إلى تطبيق خاطئ.'],
    ['document', 'پیش‌فاکتور شفاف', 'Прозрачная проформа', 'A clear proforma', 'Şeffaf proforma', 'فاتورة أولية واضحة',
      'مبلغ، تعداد، مبدأ و زمان تقریبی حمل در یک سند می‌آید.',
      'Сумма, количество, происхождение и ориентир по сроку — в одном документе.',
      'Amount, quantity, origin and a freight window come in one document.',
      'Tutar, adet, menşe ve yaklaşık süre tek belgede gelir.',
      'المبلغ والكمية والمنشأ ونافذة الشحن في مستند واحد.']
  ];

  const whyJs = why.map(w => `      { icon: ${jsString(w[0])}, title: ${jsString(w[1])}, titleRu: ${jsString(w[2])}, titleEn: ${jsString(w[3])}, titleTr: ${jsString(w[4])}, titleAr: ${jsString(w[5])}, desc: ${jsString(w[6])}, descRu: ${jsString(w[7])}, descEn: ${jsString(w[8])}, descTr: ${jsString(w[9])}, descAr: ${jsString(w[10])} }`).join(',\n');

  const steps = [
    ['۱', '1', 'انتخاب خانواده', 'Выбор группы', 'Pick the family', 'Aileyi seçin', 'اختيار العائلة', 'فیلتر، ترمز، کلاچ یا هر خانواده دیگر.', 'Фильтр, тормоз, сцепление или другая группа.', 'Filter, brake, clutch or another family.', 'Filtre, fren, debriyaj veya başka aile.', 'فلتر أو فرامل أو دبرياج أو عائلة أخرى.'],
    ['۲', '2', 'ارسال شماره', 'Номер', 'Send the number', 'Numarayı gönderin', 'إرسال الرقم', 'OE، شماره Blue Print یا شاسی.', 'OE, номер Blue Print или VIN.', 'OE, Blue Print number or VIN.', 'OE, Blue Print numarası veya şasi.', 'OE أو رقم Blue Print أو الهيكل.'],
    ['۳', '3', 'پیش‌فاکتور', 'Проформа', 'Proforma', 'Proforma', 'فاتورة أولية', 'قیمت و زمان بعد از موجودی.', 'Цена и срок после проверки наличия.', 'Price and time after the supply check.', 'Stok sonrası fiyat ve süre.', 'السعر والمدة بعد التوفر.'],
    ['۴', '4', 'تامین', 'Поставка', 'Supply', 'Tedarik', 'التوريد', 'قطعه نو هماهنگ می‌شود.', 'Согласуем новую деталь.', 'The new part is arranged.', 'Yeni parça ayarlanır.', 'تُرتَّب القطعة الجديدة.'],
    ['۵', '5', 'تحویل', 'Доставка', 'Delivery', 'Teslim', 'التسليم', 'ایران یا روسیه، طبق پیش‌فاکتور.', 'Иран или Россия, как в проформе.', 'Iran or Russia, as written on the proforma.', 'Proformadaki gibi İran veya Rusya.', 'إيران أو روسيا كما في الفاتورة.']
  ].map(s => `      { num: ${jsString(s[0])}, numRu: ${jsString(s[1])}, numEn: ${jsString(s[1])}, numTr: ${jsString(s[1])}, numAr: ${jsString(s[0])}, title: ${jsString(s[2])}, titleRu: ${jsString(s[3])}, titleEn: ${jsString(s[4])}, titleTr: ${jsString(s[5])}, titleAr: ${jsString(s[6])}, desc: ${jsString(s[7])}, descRu: ${jsString(s[8])}, descEn: ${jsString(s[9])}, descTr: ${jsString(s[10])}, descAr: ${jsString(s[11])} }`).join(',\n');

  const services = [
    ['شناسایی با OE و شاسی', 'Подбор по OE и VIN', 'Match by OE and VIN', 'OE ve şasi ile eşleştirme', 'مطابقة بـ OE والهيكل', 'کاربرد را از کاتالوگ Blue Print درمی‌آوریم.', 'Применение берём из каталога Blue Print.', 'The application comes from the Blue Print catalogue.', 'Uygulamayı Blue Print kataloğundan çıkarırız.', 'نستخرج التطبيق من كتالوج Blue Print.'],
    ['Fast to Market', 'Fast to Market', 'Fast to Market', 'Fast to Market', 'Fast to Market', 'برای خودروهای تازه‌وارد، قطعه هم‌خانواده را در کاتالوگ جدید بررسی می‌کنیم.', 'Для новых моделей проверяем соседнюю позицию в свежем каталоге.', 'For newly launched vehicles we check the current catalogue for a matching family.', 'Yeni çıkan araçlarda güncel katalogda uygun aileyi bakarız.', 'للسيارات حديثة الإطلاق نراجع الكتالوج الحالي عن العائلة المناسبة.'],
    ['مشاوره تعمیرگاه', 'Консультация сервиса', 'Workshop advice', 'Atölye danışmanlığı', 'استشارة الورشة', 'اگر لنت با دیسک، یا صفحه با فلایویل باید با هم عوض شود، می‌گوییم.', 'Если колодки надо менять с диском, а диск сцепления с маховиком — скажем.', 'If pads should be changed with the disc, or the clutch disc with the flywheel, we say so.', 'Balata diskle, debriyaj diski volanla değişmeliyse söyleriz.', 'إذا وجب تبديل التيل مع القرص أو قرص الدبرياج مع الحدافة نقول ذلك.'],
    ['حمل به ایران و روسیه', 'Перевозка в Иран и Россию', 'Freight to Iran and Russia', 'İran ve Rusya taşıması', 'شحن إلى إيران وروسيا', 'مقصد را در پیش‌فاکتور جدا می‌نویسیم.', 'Назначение отдельно пишем в проформе.', 'The destination is written separately on the proforma.', 'Varış yerini proformada ayrı yazarız.', 'نكتب الوجهة منفصلة في الفاتورة الأولية.']
  ].map(s => `      { title: ${jsString(s[0])}, titleRu: ${jsString(s[1])}, titleEn: ${jsString(s[2])}, titleTr: ${jsString(s[3])}, titleAr: ${jsString(s[4])}, desc: ${jsString(s[5])}, descRu: ${jsString(s[6])}, descEn: ${jsString(s[7])}, descTr: ${jsString(s[8])}, descAr: ${jsString(s[9])} }`).join(',\n');

  const faqs = [
    ['Blue Print چیست؟', 'Что такое Blue Print?', 'What is Blue Print?', 'Blue Print nedir?', 'ما هو Blue Print؟',
      'برند قطعات یدکی گروه bilstein است که سه دهه روی خودروهای آسیایی کار کرده و برای فیلتر، ترمز و کلاچ پوشش خودروهای اروپایی را هم در کاتالوگ عمومی دارد.',
      'Это бренд запчастей группы bilstein. Около тридцати лет он специализируется на азиатских авто и в публичном каталоге закрывает европейские машины по фильтрам, тормозам и сцеплению.',
      'It is a bilstein group parts brand. For about thirty years it has specialised in Asian vehicles, and its public catalogue also covers European cars in filtration, braking and clutch.',
      'bilstein group’un yedek parça markasıdır. Yaklaşık otuz yıldır Asya araçlarına odaklanır; açık katalogda Avrupa araçlarını filtre, fren ve debriyajda da kapsar.',
      'علامة قطع لمجموعة bilstein. منذ نحو ثلاثين عاماً تتخصص في السيارات الآسيوية، وكتالوجها العام يغطي الأوروبية أيضاً في الفلاتر والفرامل والدبرياج.'],
    ['نماینده رسمی هستید؟', 'Вы официальный дилер?', 'Are you the official agent?', 'Resmi temsilci misiniz?', 'هل أنتم الوكيل الرسمي؟',
      'خیر. بیزدوار این قطعات را تامین می‌کند. سفارش و پیش‌فاکتور با بیزدوار است، نه با کارخانه Blue Print.',
      'Нет. Bizdavar поставляет эти детали. Заказ и проформа — у Bizdavar, не у завода Blue Print.',
      'No. Bizdavar supplies these parts. The order and the proforma sit with Bizdavar, not with the Blue Print factory.',
      'Hayır. Bizdavar bu parçaları tedarik eder. Sipariş ve proforma Bizdavar’dadır, Blue Print fabrikasıyla değil.',
      'لا. Bizdavar يورّد هذه القطع. الطلب والفاتورة الأولية عند Bizdavar لا عند مصنع Blue Print.'],
    ['چرا قیمت روی کارت نیست؟', 'Почему на карточке нет цены?', 'Why is there no price on the card?', 'Kartta neden fiyat yok?', 'لماذا لا يوجد سعر على البطاقة؟',
      'موجودی و نرخ حمل روزبه‌روز عوض می‌شود. قیمت ساختگی نمی‌نویسیم. عدد داخل پیش‌فاکتور معتبر است.',
      'Наличие и ставка перевозки меняются. Выдуманную цену не ставим. Действительна цифра в проформе.',
      'Supply and freight change from day to day. We do not print an invented price. The figure on the proforma is the one that counts.',
      'Stok ve navlun her gün değişir. Uydurma fiyat yazmayız. Geçerli olan proformadaki rakamdır.',
      'التوفر وأجرة الشحن يتغيران. لا نكتب سعراً مختلقاً. الرقم المعتمد هو ما في الفاتورة الأولية.'],
    ['کدام خودروها؟', 'Какие автомобили?', 'Which vehicles?', 'Hangi araçlar?', 'أي سيارات؟',
      'تمرکز برند خودروهای آسیایی است. فیلتر، ترمز و کلاچ برای سواری و وانت اروپایی هم در کاتالوگ عمومی آمده است. تطبیق نهایی با شماره OE است.',
      'Фокус бренда — азиатские авто. Фильтры, тормоза и сцепление в публичном каталоге есть и для европейских легковых и LCV. Финальная сверка — по OE.',
      'The brand focuses on Asian vehicles. Filtration, braking and clutch in the public catalogue also cover European cars and LCVs. The final check is the OE number.',
      'Markanın odağı Asya araçlarıdır. Filtre, fren ve debriyaj açık katalogda Avrupa binek ve hafif ticari için de vardır. Son eşleştirme OE numarasıyladır.',
      'تركيز العلامة على السيارات الآسيوية. الفلاتر والفرامل والدبرياج في الكتالوج العام تشمل الأوروبية أيضاً. المطابقة النهائية برقم OE.']
  ].map(f => `      { q: ${jsString(f[0])}, qRu: ${jsString(f[1])}, qEn: ${jsString(f[2])}, qTr: ${jsString(f[3])}, qAr: ${jsString(f[4])}, a: ${jsString(f[5])}, aRu: ${jsString(f[6])}, aEn: ${jsString(f[7])}, aTr: ${jsString(f[8])}, aAr: ${jsString(f[9])} }`).join(',\n');

  const quoteItems = ui.fa.send.map((_, i) => `        { text: ${jsString(ui.fa.send[i])}, textRu: ${jsString(ui.ru.send[i])}, textEn: ${jsString(ui.en.send[i])}, textTr: ${jsString(ui.tr.send[i])}, textAr: ${jsString(ui.ar.send[i])} }`).join(',\n');

  const highlights = ['oil-filters', 'brake-pads', 'clutch-kits', 'cabin-filters', 'wheel-bearings', 'timing-chain-kits', 'water-pumps', 'starter-motors']
    .map(id => all.find(p => p.id === id))
    .filter(Boolean)
    .map(p => `      {
        id: ${jsString(p.id)},
        title: ${jsString(p.names.fa)},
        titleRu: ${jsString(p.names.ru)},
        titleEn: ${jsString(p.names.en)},
        titleTr: ${jsString(p.names.tr)},
        titleAr: ${jsString(p.names.ar)},
        desc: ${jsString(p.facts.fa)},
        descFa: ${jsString(p.facts.fa)},
        descRu: ${jsString(p.facts.ru)},
        descEn: ${jsString(p.facts.en)},
        descTr: ${jsString(p.facts.tr)},
        descAr: ${jsString(p.facts.ar)},
        inquiryName: ${jsString('Blue Print ' + p.names.en)},
        quoteOnly: true,
        image: ${jsString('assets/images/blue-print/' + p.id + '.jpg?v=20261028b')},
        imageAlt: ${jsString(p.names.fa + ' Blue Print')}
      }`).join(',\n');

  const quick = groups.slice(0, 8).map(g => `      { id: ${jsString(g.id)}, name: ${jsString(g.names.fa)}, nameRu: ${jsString(g.names.ru)}, nameEn: ${jsString(g.names.en)}, nameTr: ${jsString(g.names.tr)}, nameAr: ${jsString(g.names.ar)}, tag: 'BP', hint: ${jsString(g.names.en)}, hintRu: ${jsString(g.names.ru)}, hintEn: ${jsString(g.names.en)}, hintTr: ${jsString(g.names.tr)}, hintAr: ${jsString(g.names.ar)}, anchor: 'cat' }`).join(',\n');

  const markets = [
    ['تعمیرگاه ایران', 'Сервис в Иране', 'Workshops in Iran', 'İran atölyesi', 'ورش إيران', 'لنت، فیلتر و کلاچ برای سرویس روزانه. مشاوره فارسی.', 'Колодки, фильтры и сцепление для ежедневного сервиса. Консультация на фарси.', 'Pads, filters and clutch for daily service. Consulting in Farsi.', 'Günlük servis için balata, filtre ve debriyaj. Farsça danışmanlık.', 'تيل وفلاتر ودبرياج للخدمة اليومية. استشارة بالفارسية.'],
    ['خریدار روسیه', 'Покупатель в России', 'Buyers in Russia', 'Rusya alıcısı', 'المشتري في روسيا', 'همان کاتالوگ، با هماهنگی حمل به روسیه.', 'Тот же каталог, с организацией перевозки в Россию.', 'The same catalogue, with freight arranged to Russia.', 'Aynı katalog, Rusya’ya taşıma koordinasyonuyla.', 'الكتالوج نفسه مع ترتيب الشحن إلى روسيا.'],
    ['ناوگان وانت', 'Парк LCV', 'LCV fleets', 'Hafif ticari filo', 'أساطيل التجاري الخفيف', 'تا ۷٫۵ تن، فیلتر و ترمز و کلاچ پرتکرارترین درخواست است.', 'До 7,5 т чаще всего спрашивают фильтр, тормоз и сцепление.', 'Up to 7.5 tonnes, filters, brakes and clutch are the repeat request.', '7,5 tona kadar en sık filtre, fren ve debriyaj istenir.', 'حتى 7.5 طن، الفلاتر والفرامل والدبرياج هي الطلب المتكرر.'],
    ['هیبرید و برقی', 'Гибрид и электро', 'Hybrid and EV', 'Hibrit ve elektrikli', 'الهجين والكهرباء', 'فیلتر محفظه باتری کششی برای باتری ولتاژبالا.', 'Фильтр отсека тяговой батареи для высоковольтной батареи.', 'Traction-battery compartment filters for the high-voltage battery.', 'Yüksek voltajlı batarya için çekiş bataryası filtreleri.', 'فلاتر حجرة بطارية الجر للبطارية عالية الجهد.']
  ].map(m => `      { icon: 'factory', name: ${jsString(m[0])}, nameRu: ${jsString(m[1])}, nameEn: ${jsString(m[2])}, nameTr: ${jsString(m[3])}, nameAr: ${jsString(m[4])}, desc: ${jsString(m[5])}, descRu: ${jsString(m[6])}, descEn: ${jsString(m[7])}, descTr: ${jsString(m[8])}, descAr: ${jsString(m[9])}, image: ${logo}, imageAlt: ${jsString(m[2])} }`).join(',\n');

  const src = `/**
 * Blue Print parts catalog — generated by scripts/build-blue-print.js
 * Families follow the public Blue Print catalogue. Prices are quote-only.
 */
(function () {
  const logo = 'assets/images/partners/blue-print.svg?v=20261028';
  window.BLUE_PRINT_CATALOG = {
    quoteEmptyPrices: true,
    productBase: 'pages/blue-print',
    brand: {
      name: 'Blue Print',
      nameFa: 'بلو پرینت',
      logo: logo,
      logoAlt: 'Blue Print',
      heroImage: logo,
      heroImageAlt: 'Blue Print',
      heroEyebrow: 'قطعات یدکی Blue Print برای ایران و روسیه',
      heroEyebrowRu: 'Запчасти Blue Print для России и Ирана',
      heroEyebrowEn: 'Blue Print parts for Iran and Russia',
      heroEyebrowTr: 'İran ve Rusya için Blue Print yedek parça',
      heroEyebrowAr: 'قطع Blue Print لإيران وروسيا',
      heroHeadline: 'فیلتر، ترمز، کلاچ و قطعات خودرو',
      heroHeadlineRu: 'Фильтры, тормоза, сцепление и детали авто',
      heroHeadlineEn: 'Filters, brakes, clutch and vehicle parts',
      heroHeadlineTr: 'Filtre, fren, debriyaj ve araç parçaları',
      heroHeadlineAr: 'فلاتر وفرامل ودبرياج وقطع المركبة',
      heroHeadlineSub: 'خودروهای آسیایی و پوشش اروپایی در فیلتر، ترمز و کلاچ — تطبیق با شماره OE',
      heroHeadlineSubRu: 'Азиатские авто и европейское покрытие по фильтрам, тормозам и сцеплению — сверка по номеру OE',
      heroHeadlineSubEn: 'Asian vehicles, plus European coverage in filters, brakes and clutch — matched by OE number',
      heroHeadlineSubTr: 'Asya araçları ve filtre, fren, debriyajda Avrupa kapsaması — OE numarasıyla eşleştirme',
      heroHeadlineSubAr: 'سيارات آسيوية وتغطية أوروبية في الفلاتر والفرامل والدبرياج — مطابقة برقم OE',
      tagline: 'bilstein group',
      taglineRu: 'bilstein group',
      taglineEn: 'bilstein group',
      taglineTr: 'bilstein group',
      taglineAr: 'bilstein group',
      since: 'قطعه نو',
      sinceRu: 'Новые детали',
      sinceEn: 'New parts',
      sinceTr: 'Yeni parça',
      sinceAr: 'قطع جديدة',
      origin: 'برند گروه bilstein',
      officialUrl: 'https://www.blue-print.com/',
      description: 'بیزدوار قطعات Blue Print را برای تعمیرگاه و ناوگان در ایران و برای خریدار در روسیه تامین می‌کند. هر خانواده صفحه خودش را دارد. قیمت بعد از تطبیق شماره OE در پیش‌فاکتور می‌آید.',
      descriptionRu: 'Bizdavar поставляет детали Blue Print сервисам и паркам в Иране и покупателям в России. У каждой семьи своя страница. Цена появляется в проформе после сверки номера OE.',
      descriptionEn: 'Bizdavar supplies Blue Print parts to workshops and fleets in Iran and to buyers in Russia. Each family has its own page. The price is on the proforma after the OE number is matched.',
      descriptionTr: 'Bizdavar, Blue Print parçalarını İran’daki atölye ve filolara ve Rusya’daki alıcılara tedarik eder. Her ailenin kendi sayfası vardır. Fiyat, OE eşleşmesinden sonra proformadadır.',
      descriptionAr: 'يورّد Bizdavar قطع Blue Print لورش وأساطيل إيران وللمشتري في روسيا. لكل عائلة صفحتها. السعر في الفاتورة الأولية بعد مطابقة رقم OE.',
      heroStats: [
        { value: '${all.length}', label: 'خانواده قطعه', labelRu: 'семейств деталей', labelEn: 'part families', labelTr: 'parça ailesi', labelAr: 'عائلة قطعة' },
        { value: 'OE', label: 'تطبیق با شماره', labelRu: 'сверка по номеру', labelEn: 'matched by number', labelTr: 'numarayla eşleştirme', labelAr: 'مطابقة بالرقم' },
        { value: 'IR · RU', label: 'ایران و روسیه', labelRu: 'Иран и Россия', labelEn: 'Iran and Russia', labelTr: 'İran ve Rusya', labelAr: 'إيران وروسيا' }
      ]
    },
    trustSignals: [
${trust}
    ],
    whyBuyFromUs: [
${whyJs},
      { icon: 'handshake', title: 'تعمیرگاه و ناوگان', titleRu: 'Сервис и парк', titleEn: 'Workshop and fleet', titleTr: 'Atölye ve filo', titleAr: 'ورشة وأسطول', desc: 'سفارش تکی تعمیرگاه و سفارش تکراری ناوگان، هر دو با یک پیش‌فاکتور.', descRu: 'И разовый заказ сервиса, и повтор парка — одной проформой.', descEn: 'A one-off workshop order and a repeat fleet order both get one proforma.', descTr: 'Atölyenin tek siparişi de filonun tekrarı da tek proformayla gider.', descAr: 'طلب الورشة المفرد وطلب الأسطول المتكرر كلاهما بفاتورة أولية واحدة.' },
      { icon: 'factory', title: 'مرکز کلاچ در آلمان', titleRu: 'Центр сцепления в Германии', titleEn: 'Clutch centre in Germany', titleTr: 'Almanya debriyaj merkezi', titleAr: 'مركز الدبرياج في ألمانيا', desc: 'کیت کلاچ در مرکز صلاحیت bilstein group در دورمرسهایم آزمون می‌شود. قطعات نو هستند.', descRu: 'Комплекты сцепления испытывают в центре компетенции bilstein group в Дурмерсхайме. Детали новые.', descEn: 'Clutch kits are tested at the bilstein group competence centre in Durmersheim. The parts are new.', descTr: 'Debriyaj setleri bilstein group yeterlilik merkezinde, Durmersheim’de test edilir. Parçalar yenidir.', descAr: 'تُختبر أطقم الدبرياج في مركز كفاءة bilstein group في دورمرسهايم. القطع جديدة.' }
    ],
    purchaseSteps: [
${steps}
    ],
    quoteChecklist: {
      title: ${jsString(ui.fa.sendTitle)},
      titleRu: ${jsString(ui.ru.sendTitle)},
      titleEn: ${jsString(ui.en.sendTitle)},
      titleTr: ${jsString(ui.tr.sendTitle)},
      titleAr: ${jsString(ui.ar.sendTitle)},
      desc: ${jsString(ui.fa.order)},
      descRu: ${jsString(ui.ru.order)},
      descEn: ${jsString(ui.en.order)},
      descTr: ${jsString(ui.tr.order)},
      descAr: ${jsString(ui.ar.order)},
      items: [
${quoteItems}
      ]
    },
    quickSeries: [
${quick}
    ],
    highlights: [
${highlights}
    ],
    categories: [
${categories}
    ],
    iranIndustries: [
${markets}
    ],
    services: [
${services}
    ],
    faq: [
${faqs}
    ],
    inquiryTemplate: 'سلام، درخواست استعلام {product} از Blue Print دارم.\\nOE یا شماره قطعه:\\nخودرو (برند، مدل، سال):\\nتعداد:\\nمقصد (ایران / روسیه):\\n',
    inquiryTemplateRu: 'Здравствуйте, нужен {product} Blue Print.\\nOE или номер детали:\\nАвто (марка, модель, год):\\nКоличество:\\nКуда (Россия / Иран):\\n',
    inquiryTemplateEn: 'Hello, I need a quote for {product} by Blue Print.\\nOE or part number:\\nVehicle (make, model, year):\\nQuantity:\\nDestination (Iran / Russia):\\n',
    inquiryTemplateTr: 'Merhaba, Blue Print {product} için teklif istiyorum.\\nOE veya parça no:\\nAraç (marka, model, yıl):\\nAdet:\\nVarış (İran / Rusya):\\n',
    inquiryTemplateAr: 'مرحباً، أريد عرض سعر لـ {product} من Blue Print.\\nرقم OE أو رقم القطعة:\\nالسيارة (العلامة، الموديل، السنة):\\nالكمية:\\nالوجهة (إيران / روسيا):\\n',
    officialUrl: 'https://www.blue-print.com/'
  };
})();
`;
  write('assets/scripts/config/blue-print-products.js', src);
  void langFields;
}

function buildNav() {
  const groupsJs = groups.map(g => {
    const items = g.parts.map(row => {
      const id = row[0];
      return `        { route: 'pages/blue-print/${id}.html', page: '${camel(id)}', labelKey: 'nav.${camel(id)}' }`;
    }).join(',\n');
    return `      {
        id: 'bp-${g.id}',
        labelKey: 'nav.bpGroup_${g.id.replace(/-/g, '_')}',
        items: [
${items}
        ]
      }`;
  }).join(',\n');
  const src = `/** Generated by scripts/build-blue-print.js — header tab for every Blue Print part */
window.BLUE_PRINT_NAV = {
  tab: {
    id: 'blueprint',
    labelKey: 'nav.tabBluePrint',
    cta: {
      route: 'bluePrint',
      page: 'blue-print',
      labelKey: 'nav.bpCatalog',
      descKey: 'nav.bpCatalogDesc'
    },
    groups: [
${groupsJs}
    ]
  }
};
`;
  write('assets/scripts/config/blue-print-nav.js', src);
}

function buildI18n() {
  const nav = {};
  LANGS.forEach(l => {
    nav[l] = {
      tabBluePrint: 'Blue Print',
      bpCatalog: seoHub[l].title.split('|')[0].trim(),
      bpCatalogDesc: l === 'fa' ? 'همه خانواده‌های قطعه' : l === 'ru' ? 'Все семейства деталей' : l === 'tr' ? 'Tüm parça aileleri' : l === 'ar' ? 'كل عائلات القطع' : 'All part families',
      brandBluePrintDesc: l === 'fa' ? 'فیلتر، ترمز و کلاچ' : l === 'ru' ? 'Фильтры, тормоза, сцепление' : l === 'tr' ? 'Filtre, fren, debriyaj' : l === 'ar' ? 'فلاتر وفرامل ودبرياج' : 'Filters, brakes, clutch'
    };
    groups.forEach(g => {
      nav[l]['bpGroup_' + g.id.replace(/-/g, '_')] = g.names[l];
    });
    parts().forEach(p => {
      nav[l][camel(p.id)] = p.names[l];
    });
  });

  const body = `/** Generated by scripts/build-blue-print.js */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;
  var nav = ${JSON.stringify(nav)};
  var pages = ${JSON.stringify(pageCopy)};
  var seo = ${JSON.stringify(seoHub)};
  ['fa', 'tr', 'en', 'ru', 'ar'].forEach(function (lang) {
    var L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.nav = Object.assign(L.nav || {}, nav[lang] || {});
    L.home = L.home || {};
    L.home.intentBluePrint = (pages[lang] && pages[lang].intent) || 'Blue Print';
    L.footer = L.footer || {};
    L.footer.bluePrintParts = lang === 'fa' ? 'قطعات Blue Print' : lang === 'ru' ? 'Детали Blue Print' : lang === 'tr' ? 'Blue Print parçaları' : lang === 'ar' ? 'قطع Blue Print' : 'Blue Print parts';
    L.pages = L.pages || {};
    L.pages.bluePrint = Object.assign({ crumb: 'Blue Print' }, seo[lang] || {}, {
      seoTitle: seo[lang].title,
      seoDescription: seo[lang].description,
      seoKeywords: seo[lang].keywords,
      crumb: 'Blue Print'
    });
    L.bluePrintPage = pages[lang];
    var templates = {
      fa: 'سلام، درخواست استعلام {product} از Blue Print دارم.\\nOE یا شماره قطعه:\\nخودرو:\\nتعداد:\\nمقصد (ایران / روسیه):\\n',
      ru: 'Здравствуйте, нужен {product} Blue Print.\\nOE или номер детали:\\nАвто:\\nКоличество:\\nКуда (Россия / Иран):\\n',
      en: 'Hello, I need a quote for {product} by Blue Print.\\nOE or part number:\\nVehicle:\\nQuantity:\\nDestination (Iran / Russia):\\n',
      tr: 'Merhaba, Blue Print {product} için teklif istiyorum.\\nOE veya parça no:\\nAraç:\\nAdet:\\nVarış (İran / Rusya):\\n',
      ar: 'مرحباً، أريد عرض سعر لـ {product} من Blue Print.\\nرقم OE:\\nالسيارة:\\nالكمية:\\nالوجهة (إيران / روسيا):\\n'
    };
    L.bluePrintCatalog = { inquiryTemplate: templates[lang] };
    if (L.pages.home && L.pages.home.seoKeywords && L.pages.home.seoKeywords.indexOf('Blue Print') === -1) {
      L.pages.home.seoKeywords += ', Blue Print';
    }
  });
})();
`;
  write('assets/scripts/i18n/blue-print-i18n.js', body);
}

function hreflang(slug) {
  return LOCALES.map(loc => {
    const href = `${BASE}${loc.prefix}/pages/blue-print${slug}`;
    const code = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' }[loc.code];
    return `  <link rel="alternate" hreflang="${code}" href="${href}">`;
  }).join('\n') + `\n  <link rel="alternate" hreflang="x-default" href="${BASE}/pages/blue-print${slug}">`;
}

function head({ lang, title, description, keywords, slug, depthNote }) {
  const loc = LOCALES.find(l => l.code === lang);
  const url = `${BASE}${loc.prefix}/pages/blue-print${slug}`;
  const others = LOCALES.filter(l => l.code !== lang).map(l => `  <meta property="og:locale:alternate" content="${l.og}">`).join('\n');
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${loc.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20261028a">
  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/estedad/Estedad-Black.woff2" as="font" type="font/woff2" crossorigin>
  <script src="/assets/scripts/gtm-boot.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/locale-url.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/seo-head.js?v=20261028a" defer></script>
  <script src="/assets/scripts/i18n/locale-preload.js?v=20260910c" defer></script>
  <meta name="view-transition" content="same-origin">
  <title>${esc(title)}</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/styles/blue-print.css?v=20261028a">
  <meta name="description" content="${esc(description)}">
  <meta name="keywords" content="${esc(keywords)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">
${hreflang(slug)}
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${BASE}/assets/images/brand/bizdavar-logo-square.png">
  <meta property="og:locale" content="${loc.og}">
${others}
  <meta property="og:site_name" content="Bizdavar Group">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${BASE}/assets/images/brand/bizdavar-logo-square.png">
  ${depthNote || ''}
</head>`;
}

function waLink(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

function buildProductPages() {
  const all = parts();
  all.forEach(part => {
    const siblings = part.group.parts.filter(row => row[0] !== part.id).slice(0, 6);
    LOCALES.forEach(loc => {
      const t = ui[loc.code];
      const name = part.names[loc.code];
      const fact = part.facts[loc.code];
      const groupName = part.group.names[loc.code];
      const intro = part.group.intro[loc.code];
      const title = loc.code === 'fa'
        ? `خرید ${name} Blue Print | تامین برای ایران | بیزدوار`
        : loc.code === 'ru'
          ? `Купить ${name} Blue Print | поставка в Россию | Bizdavar`
          : loc.code === 'ar'
            ? `شراء ${name} Blue Print | توريد | Bizdavar`
            : loc.code === 'tr'
              ? `${name} Blue Print | yedek parça | Bizdavar`
              : `${name} by Blue Print | parts supply | Bizdavar`;
      const closer = {
        fa: 'استعلام با شماره OE از بیزدوار برای ایران و روسیه.',
        ru: 'Запрос по номеру OE в Bizdavar — Россия и Иран.',
        en: 'Quote by OE number from Bizdavar for Iran and Russia.',
        tr: 'OE numarasıyla Bizdavar teklifi — İran ve Rusya.',
        ar: 'استعلام برقم OE من Bizdavar لإيران وروسيا.'
      }[loc.code];
      const description = `${fact} ${closer}`;
      const keywords = `Blue Print, ${name}, ${groupName}, ${loc.code === 'fa' ? 'بیزدوار, قطعه یدکی' : loc.code === 'ru' ? 'запчасти, Bizdavar' : 'Bizdavar'}`;
      const prefix = loc.prefix;
      const hubHref = `${prefix}/pages/blue-print`;
      const contact = `${prefix}/pages/contact?service=industrial`;
      const siblingHtml = siblings.map(row => {
        const label = { fa: row[1], ru: row[2], en: row[3], tr: row[4], ar: row[5] }[loc.code];
        return `<li><a href="${prefix}/pages/blue-print/${row[0]}">${esc(label)}</a></li>`;
      }).join('');
      const msg = loc.code === 'ru'
        ? `Здравствуйте, нужен ${name} Blue Print.\nOE:\nАвто:\nКуда:`
        : loc.code === 'fa'
          ? `سلام، استعلام ${name} Blue Print.\nOE:\nخودرو:\nمقصد:`
          : `Hello, quote for Blue Print ${name}.\nOE:\nVehicle:\nDestination:`;
      const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            name: title,
            description,
            url: `${BASE}${prefix}/pages/blue-print/${part.id}`,
            inLanguage: loc.code,
            isPartOf: { '@type': 'WebSite', name: 'Bizdavar Group', url: BASE + '/' }
          },
          {
            '@type': 'Product',
            name: `Blue Print ${name}`,
            description: fact,
            brand: { '@type': 'Brand', name: 'Blue Print' },
            category: groupName,
            url: `${BASE}${prefix}/pages/blue-print/${part.id}`
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: t.faqQ, acceptedAnswer: { '@type': 'Answer', text: t.faqA } },
              { '@type': 'Question', name: t.faqQ2, acceptedAnswer: { '@type': 'Answer', text: t.faqA2 } }
            ]
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t.crumbHome, item: `${BASE}${prefix || '/'}` },
              { '@type': 'ListItem', position: 2, name: 'Blue Print', item: `${BASE}${hubHref}` },
              { '@type': 'ListItem', position: 3, name: name, item: `${BASE}${prefix}/pages/blue-print/${part.id}` }
            ]
          }
        ]
      };
      const html = `${head({ lang: loc.code, title, description, keywords, slug: '/' + part.id })}
<body data-page="${camel(part.id)}" data-bp-name="${esc(name)}" data-depth="2" class="bp-page">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWQQWF8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
  <main id="main-content" class="site-main">
    <article class="section bp-doc">
      <div class="container bp-doc__grid">
        <div>
          <p class="bp-doc__eyebrow">Blue Print · ${esc(groupName)}</p>
          <h1>${esc(name)} Blue Print</h1>
          <p class="bp-doc__lead">${esc(fact)}</p>
          <p>${esc(intro)}</p>
          <p>${esc(t.order)}</p>
          <h2>${esc(t.sendTitle)}</h2>
          <ul>${t.send.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${contact}">${esc(t.inquiry)}</a>
            <a class="btn btn--green" href="${waLink(msg)}" target="_blank" rel="noopener noreferrer">${esc(t.wa)}</a>
            <a class="btn btn--yellow" href="${hubHref}">${esc(t.hub)}</a>
          </div>
          <p class="bp-doc__note"><a href="${esc(part.group.official)}" target="_blank" rel="noopener noreferrer">${esc(t.official)}</a></p>
          <h2>${esc(t.faqQ)}</h2>
          <p>${esc(t.faqA)}</p>
          <h2>${esc(t.faqQ2)}</h2>
          <p>${esc(t.faqA2)}</p>
        </div>
        <aside class="bp-doc__aside">
          <h2>${esc(t.related)}</h2>
          <ul>${siblingHtml}</ul>
        </aside>
      </div>
    </article>
    <div id="geoStrip"></div>
    <div id="relatedLinks"></div>
  </main>
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <script src="/assets/scripts/site-loader.js?v=20261028a"></script>
  <script src="/assets/scripts/page-boot/blue-print-product.js?v=20261028a"></script>
</body>
</html>
`;
      const rel = `${loc.prefix.replace(/^\//, '') ? loc.code + '/' : ''}pages/blue-print/${part.id}.html`;
      write(rel, html);
    });
  });
}

function buildHub() {
  const all = parts();
  LOCALES.forEach(loc => {
    const t = ui[loc.code];
    const copy = pageCopy[loc.code];
    const seo = seoHub[loc.code];
    const index = groups.map(g => {
      const items = g.parts.map(row => {
        const label = { fa: row[1], ru: row[2], en: row[3], tr: row[4], ar: row[5] }[loc.code];
        return `<li><a href="${loc.prefix}/pages/blue-print/${row[0]}">${esc(label)}</a></li>`;
      }).join('');
      return `<section class="bp-index__group" id="bp-index-${g.id}"><h3>${esc(g.names[loc.code])}</h3><ul>${items}</ul></section>`;
    }).join('');
    const prefix = loc.prefix;
    const html = `${head({ lang: loc.code, title: seo.title, description: seo.description, keywords: seo.keywords, slug: '' })}
<body data-page="blue-print" data-depth="1" class="bp-page">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWQQWF8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
  <main id="main-content" class="site-main">
    <section class="bp-hero"><div class="container" id="bpHeroContent"></div></section>
    <div class="bp-trust-bar" id="bpTrustBar"></div>
    <div class="bp-quick-series-wrap" id="bpQuickSeries"></div>
    <nav class="bp-cat-nav" id="bpCatNav" aria-label="Blue Print"></nav>
    <section class="section section--gray" id="bp-trust"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.trust.eyebrow">${esc(copy.sections.trust.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.trust.title">${esc(copy.sections.trust.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.trust.desc">${esc(copy.sections.trust.desc)}</p>
      </div>
      <div class="bp-why-grid" id="bpWhyGrid"></div>
    </div></section>
    <section class="section" id="bp-buy"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.buy.eyebrow">${esc(copy.sections.buy.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.buy.title">${esc(copy.sections.buy.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.buy.desc">${esc(copy.sections.buy.desc)}</p>
      </div>
      <div class="bp-steps" id="bpPurchaseSteps"></div>
    </div></section>
    <section class="section section--gray" id="bp-quote"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.quote.eyebrow">${esc(copy.sections.quote.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.quote.title">${esc(copy.sections.quote.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.quote.desc">${esc(copy.sections.quote.desc)}</p>
      </div>
      <div id="bpQuoteChecklist"></div>
    </div></section>
    <section class="section" id="bp-highlights"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.highlights.eyebrow">${esc(copy.sections.highlights.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.highlights.title">${esc(copy.sections.highlights.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.highlights.desc">${esc(copy.sections.highlights.desc)}</p>
      </div>
      <div class="bp-highlights" id="bpHighlights"></div>
    </div></section>
    <section class="section section--gray" id="bp-catalog"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.catalog.eyebrow">${esc(copy.sections.catalog.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.catalog.title">${esc(copy.sections.catalog.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.catalog.desc">${esc(copy.sections.catalog.desc)}</p>
      </div>
      <div class="bp-catalog-toolbar">
        <label class="bp-catalog-search" for="bpCatalogSearch">
          <span class="visually-hidden">${esc(t.indexTitle)}</span>
          <input type="search" id="bpCatalogSearch" name="q" autocomplete="off" placeholder="${esc(t.indexTitle)}">
        </label>
      </div>
      <p class="bp-catalog-empty" id="bpCatalogEmpty" hidden></p>
      <div id="bpCategories"></div>
    </div></section>
    <section class="section bp-index" id="bp-all-parts">
      <div class="container">
        <div class="section__header section__header--pro">
          <h2 class="section__title">${esc(t.indexTitle)}</h2>
          <p class="section__desc">${esc(t.indexLead)}</p>
        </div>
        <div class="bp-index__grid">${index}</div>
      </div>
    </section>
    <section class="section" id="bp-iran"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.iran.eyebrow">${esc(copy.sections.iran.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.iran.title">${esc(copy.sections.iran.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.iran.desc">${esc(copy.sections.iran.desc)}</p>
      </div>
      <div class="bp-iran-grid" id="bpIranGrid"></div>
    </div></section>
    <section class="section section--gray" id="bp-supply"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.supply.eyebrow">${esc(copy.sections.supply.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.supply.title">${esc(copy.sections.supply.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.supply.desc">${esc(copy.sections.supply.desc)}</p>
      </div>
      <div class="bp-supply-grid" id="bpSupplyList"></div>
      <div class="bp-official-note" data-i18n-html="bluePrintPage.officialNote">${copy.officialNote}</div>
    </div></section>
    <section class="section" id="bp-faq"><div class="container">
      <div class="section__header section__header--pro">
        <span class="section__eyebrow" data-i18n="bluePrintPage.sections.faq.eyebrow">${esc(copy.sections.faq.eyebrow)}</span>
        <h2 class="section__title" data-i18n="bluePrintPage.sections.faq.title">${esc(copy.sections.faq.title)}</h2>
        <p class="section__desc" data-i18n="bluePrintPage.sections.faq.desc">${esc(copy.sections.faq.desc)}</p>
      </div>
      <div class="bp-faq" id="bpFaq"></div>
    </div></section>
    <section class="section section--yellow"><div class="container cta-banner cta-banner--pro">
      <h2 data-i18n="bluePrintPage.cta.title">${esc(copy.cta.title)}</h2>
      <p data-i18n="bluePrintPage.cta.desc">${esc(copy.cta.desc)}</p>
      <div class="hero__actions hero__actions--center">
        <a href="${prefix}/pages/contact?service=industrial" class="btn btn--primary" id="bpCtaForm" data-i18n="bluePrintPage.cta.btnForm">${esc(copy.cta.btnForm)}</a>
        <a href="${waLink(loc.code === 'ru' ? 'Здравствуйте, нужен подбор Blue Print.' : loc.code === 'fa' ? 'سلام، استعلام قطعه Blue Print.' : 'Hello, Blue Print parts quote.')}" class="btn btn--green" id="bpCtaWhatsapp">${esc(t.wa)}</a>
        <a href="${prefix}/pages/products#supply" class="btn btn--yellow" data-i18n="bluePrintPage.cta.btnServices">${esc(copy.cta.btnServices)}</a>
      </div>
    </div></section>
    <div class="bp-sticky-cta" id="bpStickyCta" hidden>
      <div class="bp-sticky-cta__text">
        <strong data-i18n="bluePrintPage.sticky.label">${esc(copy.sticky.label)}</strong>
        <span data-i18n="bluePrintPage.sticky.hint">${esc(copy.sticky.hint)}</span>
      </div>
      <div class="bp-sticky-cta__actions">
        <a href="${waLink('Blue Print')}" class="btn btn--green" id="bpStickyWa">${esc(t.wa)}</a>
        <a href="${prefix}/pages/contact?service=industrial" class="btn btn--yellow">${esc(t.inquiry)}</a>
      </div>
    </div>
    <div id="geoStrip"></div>
    <div id="relatedLinks"></div>
  </main>
  <script src="/assets/scripts/site-loader.js?v=20261028a" data-after-seo="i18n/supply-catalog-i18n.js" data-after-page-i18n="lib/supply-brand-page.js,config/blue-print-products.js" data-before-main="blue-print-page.js"></script>
  <script src="/assets/scripts/page-boot/blue-print.js?v=20261028a"></script>
</body>
</html>
`;
    const rel = `${loc.prefix.replace(/^\//, '') ? loc.code + '/' : ''}pages/blue-print.html`;
    write(rel, html);
  });
  const paths = ['/pages/blue-print'].concat(all.map(p => '/pages/blue-print/' + p.id));
  write('assets/data/blue-print/sitemap-paths.json', JSON.stringify(paths, null, 2));
}

function buildCss() {
  const srcPath = path.join(ROOT, 'assets/styles/liqui-moly.css');
  let css = fs.readFileSync(srcPath, 'utf8');
  css = css.replace(/liqui-moly/g, 'blue-print').replace(/liqui/g, 'bp');
  css = css.replace(/#003399/g, '#003399').replace(/#e30613/g, '#00A0E4');
  css += `
.bp-index__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
.bp-index__group { background: #fff; border: 1px solid rgba(0,51,153,.12); border-radius: 14px; padding: 16px 16px 8px; }
.bp-index__group h3 { margin: 0 0 8px; color: #003399; font-size: 1.05rem; }
.bp-index__group ul { list-style: none; margin: 0; padding: 0 0 8px; }
.bp-index__group a { display: inline-block; padding: 4px 0; color: #1a1a2e; text-decoration: none; }
.bp-index__group a:hover { color: #003399; }
.bp-doc { padding-top: 28px; }
.bp-doc__grid { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(220px, .7fr); gap: 28px; align-items: start; }
.bp-doc__eyebrow { color: #003399; font-weight: 700; margin-bottom: 8px; }
.bp-doc h1 { margin: 0 0 12px; }
.bp-doc__lead { font-size: 1.05rem; }
.bp-doc__aside { background: #f5f7fb; border-radius: 14px; padding: 16px 18px; }
.bp-doc__aside ul { margin: 0; padding-inline-start: 1.1rem; }
.bp-doc__note { margin-top: 16px; }
.nav__product-panels:has([data-product-panel="blueprint"].is-active) { max-height: min(62vh, 480px); overflow: auto; }
.bp-series-card--product { padding: 0; overflow: hidden; }
.bp-series-card__media { aspect-ratio: 4 / 3; background: #eef2f6; border: 0; border-radius: 0; }
.bp-series-card__img { object-fit: cover; padding: 0; }
.bp-series-card__body { padding: 12px 14px 14px; }
.bp-series-card__desc { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.bp-series-card__foot { margin-top: auto; display: flex; flex-direction: column; gap: 8px; }
.bp-series-card__actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.bp-series-card__cta.btn, .bp-series-card__detail.btn { width: 100%; min-width: 0; padding: 8px 6px; font-size: 13px; }
.footer__bp { padding: 4px 0 28px; }
.footer__bp-title { margin: 0 0 10px; font-size: .95rem; }
.footer__bp-list { display: flex; flex-wrap: wrap; gap: 6px 14px; list-style: none; margin: 0; padding: 0; }
.footer__bp-list a { color: rgba(255,255,255,.82); font-size: .82rem; text-decoration: none; }
.footer__bp-list a:hover { color: #fff; }
@media (max-width: 800px) {
  .bp-doc__grid { grid-template-columns: 1fr; }
}
`;
  write('assets/styles/blue-print.css', css);
}

function patchIndexes() {
  ['', 'tr', 'en', 'ru', 'ar'].forEach(code => {
    const rel = code ? `${code}/index.html` : 'index.html';
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    const prefix = code ? `/${code}` : '';
    if (!html.includes('/pages/blue-print')) {
      html = html.replace(
        /(<a href="[^"]*\/pages\/liqui-moly" class="intent-nav__chip"[^>]*>)/,
        `<a href="${prefix}/pages/blue-print" class="intent-nav__chip" data-i18n="home.intentBluePrint">${pageCopy[code || 'fa'].intent}</a>\n          $1`
      );
      html = html.replace(
        /(<li><a href="[^"]*\/pages\/liqui-moly">)/,
        `<li><a href="${prefix}/pages/blue-print">${pageCopy[code || 'fa'].intent}</a></li>\n            $1`
      );
    }
    if (!html.includes('partners/blue-print.svg')) {
      html = html.replace(
        /(<img src="\/assets\/images\/partners\/liqui-moly\.svg" alt="Liqui Moly")/g,
        `<img src="/assets/images/partners/blue-print.svg?v=20261028" alt="Blue Print" width="36" height="32">\n            $1`
      );
    }
    fs.writeFileSync(file, html, 'utf8');
  });
}

buildCatalog();
buildNav();
buildI18n();
buildHub();
buildProductPages();
buildCss();
patchIndexes();
console.log('Blue Print pages:', parts().length, 'parts ×', LOCALES.length, 'locales');
