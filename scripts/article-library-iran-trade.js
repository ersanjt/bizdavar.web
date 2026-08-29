/**
 * High-intent Iran trade articles — VEGA, Prosense, Teltonika, B2B supply.
 * Merged into ARTICLES by article-library.js
 */
function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function fig(src, alt, cap) {
  return `<figure class="article__figure"><img src="${src}" alt="${esc(alt)}" width="960" height="540" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
}

function loc(fa, tr, en, ru, ar) {
  return { fa, tr, en, ru, ar };
}

module.exports = [
  {
    file: 'buy-vegapuls-iran.html',
    slug: 'buy-vegapuls-iran',
    seoKey: 'articleBuyVegapulsIran',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
    extraImg: 'assets/images/vega/blog-industrial-sensors.jpg',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'خرید VEGAPULS 6X در ایران — قیمت، کد سفارش و استعلام',
      'İran’da VEGAPULS 6X satın al — fiyat, sipariş kodu, teklif',
      'Buy VEGAPULS 6X in Iran — price, order code and quote',
      'Купить VEGAPULS 6X в Иране — цена, код заказа, запрос',
      'شراء VEGAPULS 6X في إيران — السعر ورمز الطلب والاستعلام'
    ),
    description: loc(
      'چطور VEGAPULS 6X اصل برای مخزن و فرآیند ایران بخرید: کد سفارش دقیق، پیش‌فاکتور فارسی و لجستیک تا محل نصب — بدون بازار خاکستری.',
      'Orijinal VEGAPULS 6X İran tank ve prosesi için: sipariş kodu, Farsça proforma ve sahaya lojistik.',
      'How to buy genuine VEGAPULS 6X for Iran tanks and process: exact order code, Persian proforma and logistics to site.',
      'Как купить оригинальный VEGAPULS 6X для Ирана: код заказа, проформа и логистика на объект.',
      'كيف تشتري VEGAPULS 6X أصلي لمشاريع إيران: رمز الطلب وفاتورة مبدئية ولوجستيات حتى الموقع.'
    ),
    keywords: loc(
      'خرید VEGAPULS 6X, قیمت سنسور سطح راداری, سنسور سطح VEGA ایران, بیزدوار',
      'VEGAPULS 6X satın al, radar seviye sensörü, VEGA İran, Bizdavar',
      'buy VEGAPULS 6X, radar level sensor Iran, VEGA Iran, Bizdavar',
      'купить VEGAPULS 6X, радарный уровнемер Иран, Bizdavar',
      'شراء VEGAPULS 6X, حساس مستوى راداري إيران, بيزدوار'
    ),
    tags: loc(
      ['VEGAPULS 6X', 'سنسور سطح', 'خرید VEGA', 'ایران'],
      ['VEGAPULS 6X', 'Seviye sensörü', 'VEGA', 'İran'],
      ['VEGAPULS 6X', 'Level sensor', 'Buy VEGA', 'Iran'],
      ['VEGAPULS 6X', 'Датчик уровня', 'VEGA', 'Иран'],
      ['VEGAPULS 6X', 'حساس مستوى', 'VEGA', 'إيران']
    ),
    toc: {
      fa: [['ch-who', 'برای چه پروژه‌ای'], ['ch-why', 'چرا ۶X'], ['ch-buy', 'مسیر خرید در ایران'], ['ch-data', 'چه بفرستید'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Hangi proje'], ['ch-why', 'Neden 6X'], ['ch-buy', 'İran’da satın alma'], ['ch-data', 'Ne gönderilmeli'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Which projects'], ['ch-why', 'Why 6X'], ['ch-buy', 'Buying in Iran'], ['ch-data', 'What to send'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Какие проекты'], ['ch-why', 'Почему 6X'], ['ch-buy', 'Покупка в Иране'], ['ch-data', 'Что прислать'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'لأي مشروع'], ['ch-why', 'لماذا 6X'], ['ch-buy', 'الشراء في إيران'], ['ch-data', 'ماذا ترسلون'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'قیمت VEGAPULS 6X روی سایت هست؟', a: 'خیر. قیمت به کد سفارش، آنتن، اتصال فرآیند و گواهی بستگی دارد. پیش‌فاکتور شفاف از <a href="/pages/contact?product=VEGA">واتساپ یا فرم</a> صادر می‌شود.' },
        { q: '۶X با مدل‌های قدیمی‌تر فرق دارد؟', a: '۶X خط رادار ۸۰ گیگاهرتز نسل جدید است؛ برای مخزن و شرایط سخت معمولاً همین سری پیشنهاد می‌شود. جزئیات در <a href="/pages/vega">کاتالوگ VEGA</a>.' },
        { q: 'اصل بودن را چطور تضمین می‌کنید؟', a: 'کد سفارش رسمی، پیش‌فاکتور و مسیر تامین — نه خرید مبهم بازار خاکستری. مبدأ دقیق در استعلام خصوصی مشخص می‌شود.' }
      ],
      tr: [
        { q: 'VEGAPULS 6X fiyatı sitede var mı?', a: 'Hayır. Fiyat sipariş koduna bağlı. Şeffaf proforma <a href="/pages/contact?product=VEGA">WhatsApp/form</a> ile.' },
        { q: '6X eski modellerden farklı mı?', a: 'Yeni nesil 80 GHz radar. Katalog: <a href="/pages/vega">VEGA</a>.' },
        { q: 'Orijinallik?', a: 'Resmi sipariş kodu ve proforma — gri pazar yok.' }
      ],
      en: [
        { q: 'Is the VEGAPULS 6X price on the site?', a: 'No. Price depends on order code, antenna, connection and certificates. Clear proforma via <a href="/pages/contact?product=VEGA">WhatsApp or the form</a>.' },
        { q: 'How is 6X different from older models?', a: '6X is the current 80 GHz radar line for tanks and harsh process. See the <a href="/pages/vega">VEGA catalogue</a>.' },
        { q: 'How do you prove it is genuine?', a: 'Official order code, proforma and supply path — not grey-market stock. Origin stays in the private quote.' }
      ],
      ru: [
        { q: 'Цена 6X на сайте?', a: 'Нет. Цена от order code. Проформа через <a href="/pages/contact?product=VEGA">WhatsApp</a>.' },
        { q: 'Чем 6X отличается?', a: 'Радар 80 ГГц. Каталог: <a href="/pages/vega">VEGA</a>.' },
        { q: 'Оригинал?', a: 'Официальный код и проформа, не серый рынок.' }
      ],
      ar: [
        { q: 'هل سعر 6X على الموقع؟', a: 'لا. السعر حسب رمز الطلب. الفاتورة عبر <a href="/pages/contact?product=VEGA">واتساب</a>.' },
        { q: 'ما فرق 6X؟', a: 'رادار 80 غيغاهرتز. الكتالوج: <a href="/pages/vega">VEGA</a>.' },
        { q: 'الأصالة؟', a: 'رمز طلب رسمي وفاتورة — لا السوق الرمادي.' }
      ]
    },
    related: [
      { title: loc('استعلام قیمت VEGA', 'VEGA teklifi', 'VEGA quote', 'Запрос VEGA', 'استعلام VEGA'), url: 'vega-quote-iran', desc: loc('چک‌لیست خرید', 'Kontrol listesi', 'Buyer checklist', 'Чек-лист', 'قائمة الشراء') },
      { title: loc('کاتالوگ VEGA', 'VEGA kataloğu', 'VEGA catalogue', 'Каталог VEGA', 'كتالوج VEGA'), url: '../vega', desc: loc('سنسور سطح و فشار', 'Seviye ve basınç', 'Level and pressure', 'Уровень и давление', 'مستوى وضغط') },
      { title: loc('بازرگانی صنعتی', 'Endüstriyel ticaret', 'Industrial trade', 'Промторговля', 'تجارة صناعية'), url: 'industrial-trade-iran', desc: loc('VEGA و Prosense', 'VEGA ve Prosense', 'VEGA and Prosense', 'VEGA и Prosense', 'VEGA وProsense') }
    ],
    sources: [
      { href: 'https://www.vega.com/en-ae', label: loc('وبسایت رسمی VEGA', 'Resmi VEGA sitesi', 'Official VEGA website', 'Официальный сайт VEGA', 'موقع VEGA الرسمي') },
      { href: 'https://bizdavar.com/pages/vega', label: loc('کاتالوگ VEGA بیزدوار', 'Bizdavar VEGA kataloğu', 'Bizdavar VEGA catalogue', 'Каталог VEGA Bizdavar', 'كتالوج VEGA بيزدوار') }
    ],
    body: {
      fa: `
<p>خریدار صنعتی در ایران معمولاً همین را جستجو می‌کند: <strong>خرید VEGAPULS</strong>، قیمت سنسور سطح راداری، و اینکه اصل به پروژه برسد نه کالای مبهم. بیزدوار <a href="/pages/vega">سنسورهای VEGA</a> را با مشاوره فارسی، کد سفارش دقیق و پیش‌فاکتور شفاف تامین می‌کند.</p>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'سنسور سطح راداری VEGAPULS 6X — بدنه زرد VEGA', 'برای استعلام، مدل را همراه شرایط مخزن بفرستید — نه فقط نام سری.')}
<h2 id="ch-who">برای چه پروژه‌ای مناسب است؟</h2>
<p>VEGAPULS 6X سنسور سطح راداری بدون تماس است؛ برای مخزن مایع یا جامد در نفت، پتروشیمی، آب، غذا و سیمان. اگر سوئیچ نقطه سطح می‌خواهید <a href="/pages/articles/industrial-sensors">VEGAPOINT</a>، اگر فشار فرآیند <a href="/pages/articles/vega-quote-iran">VEGABAR</a>.</p>
<h2 id="ch-why">چرا ۶X و نه مدل متفرقه؟</h2>
<ul>
<li>رادار ۸۰ گیگاهرتز — دقت و نصب ساده‌تر روی بیشتر مخازن</li>
<li>کد سفارش رسمی — جایگزین حدس کاتالوگ فروشنده ناشناس</li>
<li>گواهی Ex/SIL وقتی در استعلام اول نوشته شود</li>
</ul>
${fig('/assets/images/vega/blog-industrial-sensors.jpg', 'نصب سنسور سطح VEGA روی مخزن صنعتی', 'عکس پلاک و اتصال فرآیند، کد سفارش را دقیق می‌کند.')}
<h2 id="ch-buy">مسیر خرید در ایران</h2>
<ol>
<li>شرح مخزن: ارتفاع، رسانه، دما، فشار، Ex/SIL</li>
<li>پیشنهاد مدل و کد سفارش از صفحه <a href="/pages/vega">VEGA</a></li>
<li>پیش‌فاکتور فارسی با بازه تحویل</li>
<li>سفارش، حمل و پشتیبانی نصب</li>
</ol>
<p>جزئیات لجستیک در مقاله <a href="/pages/articles/vega-supply-iran">تامین VEGA برای ایران</a>. شروع: <a href="/pages/contact?product=VEGA">استعلام VEGAPULS</a>.</p>
<h2 id="ch-data">چه اطلاعاتی بفرستید؟</h2>
<p>حتی اطلاعات ناقص کافی است — چک‌لیست کامل در <a href="/pages/articles/vega-quote-iran">راهنمای استعلام قیمت VEGA</a>. واتساپ فارسی سریع‌ترین راه است.</p>`,
      tr: `
<p>İran’daki alıcı <strong>VEGAPULS 6X</strong> ve radar seviye fiyatı arar. Bizdavar orijinal <a href="/pages/vega">VEGA</a> tedarik eder — gri pazar değil.</p>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'VEGAPULS 6X radar seviye sensörü', 'Modeli tank şartlarıyla birlikte gönderin.')}
<h2 id="ch-who">Hangi proje</h2>
<p>Temassız radar seviye — sıvı/katı tank. Nokta seviye için VEGAPOINT, basınç için VEGABAR.</p>
<h2 id="ch-why">Neden 6X</h2>
<ul><li>80 GHz radar</li><li>Resmi sipariş kodu</li><li>Ex/SIL ilk mesajda</li></ul>
<h2 id="ch-buy">İran’da satın alma</h2>
<ol><li>Tank ve proses</li><li>Sipariş kodu</li><li>Proforma</li><li>Sevkiyat</li></ol>
<p><a href="/pages/articles/vega-supply-iran">İran tedarik rehberi</a> · <a href="/pages/contact?product=VEGA">Teklif</a>.</p>
<h2 id="ch-data">Ne gönderilmeli</h2>
<p><a href="/pages/articles/vega-quote-iran">Teklif kontrol listesi</a>.</p>`,
      en: `
<p>Industrial buyers in Iran search for <strong>VEGAPULS 6X</strong>, radar level price and a genuine path to site. Bizdavar supplies <a href="/pages/vega">VEGA sensors</a> with Persian consulting, an exact order code and a clear proforma.</p>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'VEGAPULS 6X radar level sensor yellow VEGA housing', 'Send the model with tank conditions — not the series name alone.')}
<h2 id="ch-who">Which projects</h2>
<p>VEGAPULS 6X is non-contact radar level for liquid or solid tanks in oil, petrochemical, water, food and cement. Point level is VEGAPOINT; process pressure is VEGABAR — see the <a href="/pages/articles/industrial-sensors">sensor guide</a>.</p>
<h2 id="ch-why">Why 6X</h2>
<ul><li>80 GHz radar for most tanks</li><li>Official order code instead of grey-market guesswork</li><li>Ex/SIL when stated in the first message</li></ul>
${fig('/assets/images/vega/blog-industrial-sensors.jpg', 'VEGA level sensor installed on an industrial tank', 'A nameplate photo locks the order code.')}
<h2 id="ch-buy">Buying in Iran</h2>
<ol><li>Tank height, media, temperature, pressure, Ex/SIL</li><li>Model and order code from the <a href="/pages/vega">VEGA page</a></li><li>Persian proforma and lead time</li><li>Order, freight, install support</li></ol>
<p>Logistics: <a href="/pages/articles/vega-supply-iran">VEGA supply to Iran</a>. Start: <a href="/pages/contact?product=VEGA">VEGAPULS quote</a>.</p>
<h2 id="ch-data">What to send</h2>
<p>Partial data is enough — full checklist: <a href="/pages/articles/vega-quote-iran">VEGA quote guide</a>.</p>`,
      ru: `
<p>Закупщики в Иране ищут <strong>VEGAPULS 6X</strong>. Bizdavar поставляет оригинальный <a href="/pages/vega">VEGA</a> с проформой — не серый рынок.</p>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'Радарный уровнемер VEGAPULS 6X', 'Пришлите модель и условия резервуара.')}
<h2 id="ch-who">Какие проекты</h2>
<p>Бесконтактный радар уровня. Точка — VEGAPOINT, давление — VEGABAR.</p>
<h2 id="ch-why">Почему 6X</h2>
<ul><li>Радар 80 ГГц</li><li>Официальный order code</li><li>Ex/SIL в первом сообщении</li></ul>
<h2 id="ch-buy">Покупка в Иране</h2>
<ol><li>Резервуар и процесс</li><li>Код заказа</li><li>Проформа</li><li>Поставка</li></ol>
<p><a href="/pages/articles/vega-supply-iran">Поставка в Иран</a> · <a href="/pages/contact?product=VEGA">Запрос</a>.</p>
<h2 id="ch-data">Что прислать</h2>
<p><a href="/pages/articles/vega-quote-iran">Чек-лист запроса</a>.</p>`,
      ar: `
<p>المشترون في إيران يبحثون عن <strong>VEGAPULS 6X</strong>. بيزدوار يورّد <a href="/pages/vega">VEGA</a> الأصلي بفاتورة واضحة.</p>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'حساس مستوى راداري VEGAPULS 6X', 'أرسلوا الموديل مع شروط الخزان.')}
<h2 id="ch-who">لأي مشروع</h2>
<p>رادار مستوى بلا تلامس. نقطة المستوى VEGAPOINT والضغط VEGABAR.</p>
<h2 id="ch-why">لماذا 6X</h2>
<ul><li>رادار 80 غيغاهرتز</li><li>رمز طلب رسمي</li><li>Ex/SIL في الرسالة الأولى</li></ul>
<h2 id="ch-buy">الشراء في إيران</h2>
<ol><li>الخزان والعملية</li><li>رمز الطلب</li><li>فاتورة مبدئية</li><li>الشحن</li></ol>
<p><a href="/pages/articles/vega-supply-iran">توريد إيران</a> · <a href="/pages/contact?product=VEGA">استعلام</a>.</p>
<h2 id="ch-data">ماذا ترسلون</h2>
<p><a href="/pages/articles/vega-quote-iran">قائمة الاستعلام</a>.</p>`
    }
  },
  {
    file: 'vega-quote-iran.html',
    slug: 'vega-quote-iran',
    seoKey: 'articleVegaQuoteIran',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/vega/product-vegabar-39.png',
    extraImg: 'assets/images/vega/product-vegapuls-6x-photo.webp',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'استعلام قیمت سنسور VEGA در ایران — چه اطلاعاتی بفرستید',
      'İran’da VEGA fiyat teklifi — ne göndermelisiniz',
      'VEGA sensor quote in Iran — what to send',
      'Запрос цены VEGA в Иране — что прислать',
      'استعلام سعر حساس VEGA في إيران — ماذا ترسلون'
    ),
    description: loc(
      'چک‌لیست استعلام VEGA برای خریدار ایران: مخزن، رسانه، دما، Ex/SIL، اتصال فرآیند و عکس پلاک — پیش‌فاکتور سریع‌تر و دقیق‌تر.',
      'VEGA teklif kontrol listesi: tank, ortam, Ex/SIL ve etiket fotoğrafı — daha hızlı proforma.',
      'VEGA quote checklist for Iran buyers: tank, media, Ex/SIL, process connection and nameplate photo.',
      'Чек-лист запроса VEGA: резервуар, среда, Ex/SIL и фото шильдика.',
      'قائمة استعلام VEGA: الخزان والوسط وEx/SIL وصورة اللوحة.'
    ),
    keywords: loc(
      'استعلام قیمت VEGA, پیش‌فاکتور سنسور سطح, خرید VEGABAR ایران, بیزدوار',
      'VEGA teklif, VEGABAR, seviye sensörü proforma, Bizdavar',
      'VEGA quote Iran, VEGABAR, level sensor proforma, Bizdavar',
      'запрос VEGA, VEGABAR, проформа, Bizdavar',
      'استعلام VEGA, VEGABAR, فاتورة مبدئية, بيزدوار'
    ),
    tags: loc(
      ['استعلام قیمت', 'VEGABAR', 'پیش‌فاکتور', 'ایران'],
      ['Teklif', 'VEGABAR', 'Proforma', 'İran'],
      ['Quote', 'VEGABAR', 'Proforma', 'Iran'],
      ['Запрос', 'VEGABAR', 'Проформа', 'Иран'],
      ['استعلام', 'VEGABAR', 'فاتورة', 'إيران']
    ),
    toc: {
      fa: [['ch-why', 'چرا چک‌لیست'], ['ch-list', 'حداقل اطلاعات'], ['ch-models', 'سطح، فشار یا سوئیچ'], ['ch-next', 'بعد از استعلام'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-why', 'Neden liste'], ['ch-list', 'Minimum veri'], ['ch-models', 'Seviye / basınç / şalter'], ['ch-next', 'Teklif sonrası'], ['ch-faq', 'SSS']],
      en: [['ch-why', 'Why a checklist'], ['ch-list', 'Minimum data'], ['ch-models', 'Level, pressure or switch'], ['ch-next', 'After the quote'], ['ch-faq', 'FAQ']],
      ru: [['ch-why', 'Зачем список'], ['ch-list', 'Минимум данных'], ['ch-models', 'Уровень / давление'], ['ch-next', 'После запроса'], ['ch-faq', 'FAQ']],
      ar: [['ch-why', 'لماذا القائمة'], ['ch-list', 'الحد الأدنى'], ['ch-models', 'مستوى أو ضغط'], ['ch-next', 'بعد الاستعلام'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'اگر فقط عکس پلاک داشته باشم کافی است؟', a: 'بله — همین برای تکرار سفارش قبلی کافی است. برای مدل جدید، شرایط مخزن را هم بنویسید.' },
        { q: 'VEGABAR را چطور استعلام کنم؟', a: 'فشار فرآیند، دما، اتصال و خروجی سیگنال. کاتالوگ: <a href="/pages/vega">صفحه VEGA</a>.' },
        { q: 'پاسخ چقدر طول می‌کشد؟', a: 'در ساعات کاری، واتساپ فارسی معمولاً همان روز. فرم: <a href="/pages/contact?product=VEGA">تماس VEGA</a>.' }
      ],
      tr: [
        { q: 'Sadece etiket fotoğrafı yeter mi?', a: 'Eski siparişi tekrarlamak için evet. Yeni modelde tank şartları da gerekir.' },
        { q: 'VEGABAR teklifi?', a: 'Basınç, sıcaklık, bağlantı, sinyal. <a href="/pages/vega">VEGA</a>.' },
        { q: 'Süre?', a: 'Mesai saatlerinde Farsça WhatsApp genelde aynı gün.' }
      ],
      en: [
        { q: 'Is a nameplate photo enough?', a: 'Yes for a repeat order. For a new model, add tank or process conditions.' },
        { q: 'How do I quote VEGABAR?', a: 'Process pressure, temperature, connection and signal. Catalogue: <a href="/pages/vega">VEGA</a>.' },
        { q: 'How fast is the reply?', a: 'On working hours, Persian WhatsApp is usually same day. Form: <a href="/pages/contact?product=VEGA">VEGA contact</a>.' }
      ],
      ru: [
        { q: 'Хватит фото шильдика?', a: 'Для повтора заказа — да. Для новой модели добавьте условия резервуара.' },
        { q: 'VEGABAR?', a: 'Давление, температура, присоединение. <a href="/pages/vega">VEGA</a>.' },
        { q: 'Срок ответа?', a: 'В рабочие часы WhatsApp обычно в тот же день.' }
      ],
      ar: [
        { q: 'هل تكفي صورة اللوحة؟', a: 'نعم لتكرار طلب سابق. للموديل الجديد أضيفوا شروط الخزان.' },
        { q: 'استعلام VEGABAR؟', a: 'الضغط والحرارة والوصلة. <a href="/pages/vega">VEGA</a>.' },
        { q: 'سرعة الرد؟', a: 'في ساعات العمل واتساب الفارسية غالباً في اليوم نفسه.' }
      ]
    },
    related: [
      { title: loc('خرید VEGAPULS', 'VEGAPULS satın al', 'Buy VEGAPULS', 'Купить VEGAPULS', 'شراء VEGAPULS'), url: 'buy-vegapuls-iran', desc: loc('سنسور سطح راداری', 'Radar seviye', 'Radar level', 'Радар уровня', 'رادار مستوى') },
      { title: loc('کاتالوگ VEGA', 'VEGA kataloğu', 'VEGA catalogue', 'Каталог VEGA', 'كتالوج VEGA'), url: '../vega', desc: loc('مدل‌ها و استعلام', 'Modeller', 'Models', 'Модели', 'موديلات') },
      { title: loc('تماس', 'İletişim', 'Contact', 'Контакты', 'اتصال'), url: '../contact?product=VEGA', desc: loc('پیش‌فاکتور', 'Proforma', 'Proforma', 'Проформа', 'فاتورة') }
    ],
    sources: [
      { href: 'https://www.vega.com/en-ae', label: loc('داده فنی رسمی VEGA', 'Resmi VEGA teknik veri', 'Official VEGA technical data', 'Официальные данные VEGA', 'بيانات VEGA الرسمية') }
    ],
    body: {
      fa: `
<p>استعلام ناقص یعنی کد سفارش غلط و تأخیر. این چک‌لیست برای خریدار ایران است تا <a href="/pages/vega">پیش‌فاکتور VEGA</a> در یک رفت‌وبرگشت بسته شود — سطح، فشار یا سوئیچ.</p>
${fig('/assets/images/vega/product-vegabar-39.png', 'سنسور فشار VEGABAR 39 برای استعلام فنی', 'فشار فرآیند را جدا از سطح مخزن بنویسید — مدل عوض می‌شود.')}
<h2 id="ch-why">چرا چک‌لیست لازم است؟</h2>
<p>یک «VEGA بدهید» کافی نیست. آنتن، رزوه، خروجی و گواهی قیمت و تحویل را عوض می‌کند. مقاله خوشه‌ای: <a href="/pages/articles/buy-vegapuls-iran">خرید VEGAPULS 6X</a>.</p>
<h2 id="ch-list">حداقل اطلاعاتی که بفرستید</h2>
<ul>
<li>نوع اندازه‌گیری: سطح رادار، فشار، یا نقطه سطح</li>
<li>رسانه، دما، فشار فرآیند</li>
<li>ارتفاع/قطر مخزن یا رنج فشار</li>
<li>اتصال فرآیند و خروجی (۴–۲۰ میلی‌آمپر، هارت…)</li>
<li>Ex، SIL، بهداشت غذا — اگر لازم است</li>
<li>عکس پلاک اگر تکرار سفارش است</li>
</ul>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'VEGAPULS 6X برای استعلام سطح مخزن', 'عکس پلاک + سه خط شرایط فرآیند معمولاً کافی است.')}
<h2 id="ch-models">سطح، فشار یا سوئیچ؟</h2>
<p>راهنمای انتخاب در <a href="/pages/articles/industrial-sensors">سنسور صنعتی VEGA</a>. گاز و شعله جداست: <a href="/pages/articles/buy-prosense-iran">خرید Prosense</a>.</p>
<h2 id="ch-next">بعد از استعلام</h2>
<p>کد سفارش → پیش‌فاکتور → تأیید → حمل. مسیر کامل: <a href="/pages/articles/vega-supply-iran">تامین VEGA ایران</a>. همین امروز: <a href="/pages/contact?product=VEGA">فرم یا واتساپ</a>.</p>`,
      tr: `
<p>Eksik teklif yanlış sipariş kodu demektir. Bu liste İran alıcısı için <a href="/pages/vega">VEGA proformasını</a> tek turda kapatır.</p>
${fig('/assets/images/vega/product-vegabar-39.png', 'VEGABAR 39 basınç sensörü', 'Proses basıncını tank seviyesinden ayrı yazın.')}
<h2 id="ch-why">Neden liste</h2>
<p>Sadece «VEGA verin» yetmez. <a href="/pages/articles/buy-vegapuls-iran">VEGAPULS 6X</a>.</p>
<h2 id="ch-list">Minimum veri</h2>
<ul><li>Ölçüm tipi</li><li>Ortam, sıcaklık, basınç</li><li>Tank veya basınç aralığı</li><li>Bağlantı ve çıkış</li><li>Ex/SIL</li><li>Etiket fotoğrafı</li></ul>
<h2 id="ch-models">Seviye / basınç / şalter</h2>
<p><a href="/pages/articles/industrial-sensors">Seçim rehberi</a> · gaz için <a href="/pages/articles/buy-prosense-iran">Prosense</a>.</p>
<h2 id="ch-next">Teklif sonrası</h2>
<p><a href="/pages/contact?product=VEGA">İletişim</a>.</p>`,
      en: `
<p>A vague inquiry yields the wrong order code. This checklist helps Iran buyers close a <a href="/pages/vega">VEGA proforma</a> in one round — level, pressure or switch.</p>
${fig('/assets/images/vega/product-vegabar-39.png', 'VEGABAR 39 pressure sensor for a technical quote', 'Write process pressure separately from tank level — the model changes.')}
<h2 id="ch-why">Why a checklist</h2>
<p>“Send me a VEGA” is not enough. Antenna, thread, output and certificates change price and lead time. Cluster: <a href="/pages/articles/buy-vegapuls-iran">buy VEGAPULS 6X</a>.</p>
<h2 id="ch-list">Minimum data</h2>
<ul><li>Measurement type: radar level, pressure or point level</li><li>Media, temperature, process pressure</li><li>Tank height/diameter or pressure range</li><li>Process connection and output</li><li>Ex, SIL, food hygiene if required</li><li>Nameplate photo for repeat orders</li></ul>
${fig('/assets/images/vega/product-vegapuls-6x-photo.webp', 'VEGAPULS 6X for a tank-level quote', 'Nameplate plus three process lines is usually enough.')}
<h2 id="ch-models">Level, pressure or switch</h2>
<p>Selection: <a href="/pages/articles/industrial-sensors">industrial sensors</a>. Gas/flame is separate: <a href="/pages/articles/buy-prosense-iran">buy Prosense</a>.</p>
<h2 id="ch-next">After the quote</h2>
<p>Order code → proforma → confirm → freight. Full path: <a href="/pages/articles/vega-supply-iran">VEGA supply Iran</a>. Start: <a href="/pages/contact?product=VEGA">form or WhatsApp</a>.</p>`,
      ru: `
<p>Неполный запрос = неверный код. Чек-лист для закупки VEGA в Иране.</p>
${fig('/assets/images/vega/product-vegabar-39.png', 'Датчик давления VEGABAR 39', 'Давление процесса пишите отдельно от уровня.')}
<h2 id="ch-why">Зачем список</h2>
<p>«Пришлите VEGA» недостаточно. <a href="/pages/articles/buy-vegapuls-iran">VEGAPULS 6X</a>.</p>
<h2 id="ch-list">Минимум данных</h2>
<ul><li>Тип измерения</li><li>Среда, температура, давление</li><li>Резервуар или диапазон</li><li>Присоединение и выход</li><li>Ex/SIL</li><li>Фото шильдика</li></ul>
<h2 id="ch-models">Уровень / давление</h2>
<p><a href="/pages/articles/industrial-sensors">Гайд</a> · газ: <a href="/pages/articles/buy-prosense-iran">Prosense</a>.</p>
<h2 id="ch-next">После запроса</h2>
<p><a href="/pages/contact?product=VEGA">Контакт</a>.</p>`,
      ar: `
<p>استعلام ناقص يعني رمز طلب خاطئ. هذه القائمة لمشتري إيران.</p>
${fig('/assets/images/vega/product-vegabar-39.png', 'حساس ضغط VEGABAR 39', 'اكتبوا ضغط العملية منفصلاً عن مستوى الخزان.')}
<h2 id="ch-why">لماذا القائمة</h2>
<p>«أرسلوا VEGA» لا يكفي. <a href="/pages/articles/buy-vegapuls-iran">VEGAPULS 6X</a>.</p>
<h2 id="ch-list">الحد الأدنى</h2>
<ul><li>نوع القياس</li><li>الوسط والحرارة والضغط</li><li>الخزان أو مدى الضغط</li><li>الوصلة والخرج</li><li>Ex/SIL</li><li>صورة اللوحة</li></ul>
<h2 id="ch-models">مستوى أو ضغط</h2>
<p><a href="/pages/articles/industrial-sensors">دليل الاختيار</a> · الغاز: <a href="/pages/articles/buy-prosense-iran">Prosense</a>.</p>
<h2 id="ch-next">بعد الاستعلام</h2>
<p><a href="/pages/contact?product=VEGA">تواصل</a>.</p>`
    }
  },
  {
    file: 'buy-prosense-iran.html',
    slug: 'buy-prosense-iran',
    seoKey: 'articleBuyProsenseIran',
    date: '2026-08-28',
    modified: '2026-08-29',
    image: 'assets/images/prosense/series-pq.webp',
    extraImg: 'assets/images/prosense/hero-pq-sil2.webp',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'خرید دتکتور گاز Prosense در ایران — PQ، SafeVader و SIL',
      'İran’da Prosense gaz dedektörü — PQ, SafeVader ve SIL',
      'Buy Prosense gas detectors in Iran — PQ, SafeVader and SIL',
      'Купить Prosense в Иране — PQ, SafeVader и SIL',
      'شراء كاشف غاز Prosense في إيران — PQ وSafeVader وSIL'
    ),
    description: loc(
      'خرید دتکتور گاز صنعتی اصل Prosense برای نفت، پتروشیمی، معدن و HVAC در ایران — سری PQ، SafeVader، گواهی SIL و پیش‌فاکتور واتساپ.',
      'Orijinal Prosense gaz dedektörü İran projeleri için: PQ, SafeVader, SIL ve WhatsApp teklifi.',
      'Genuine Prosense industrial gas detectors for oil, petrochemical, mining and HVAC in Iran — PQ, SafeVader, SIL and WhatsApp quote.',
      'Оригинальные газовые детекторы Prosense для Ирана — PQ, SafeVader, SIL и запрос в WhatsApp.',
      'كواشف غاز Prosense الأصلية للنفط والبتروكيما في إيران — PQ وSafeVader وSIL.'
    ),
    keywords: loc(
      'خرید دتکتور گاز صنعتی, قیمت Prosense ایران, PQ Series, SafeVader, بیزدوار',
      'Prosense satın al, gaz dedektörü, PQ Series, Bizdavar',
      'buy Prosense Iran, industrial gas detector, PQ Series, Bizdavar',
      'купить Prosense, газовый детектор, PQ, Bizdavar',
      'شراء Prosense, كاشف غاز صناعي, PQ, بيزدوار'
    ),
    tags: loc(
      ['Prosense', 'دتکتور گاز', 'SIL', 'ایران'],
      ['Prosense', 'Gaz dedektörü', 'SIL', 'İran'],
      ['Prosense', 'Gas detector', 'SIL', 'Iran'],
      ['Prosense', 'Газовый датчик', 'SIL', 'Иран'],
      ['Prosense', 'كاشف غاز', 'SIL', 'إيران']
    ),
    toc: {
      fa: [['ch-who', 'کجا لازم است'], ['ch-series', 'PQ و SafeVader'], ['ch-buy', 'خرید در ایران'], ['ch-data', 'استعلام'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Nerede gerekir'], ['ch-series', 'PQ ve SafeVader'], ['ch-buy', 'İran’da alım'], ['ch-data', 'Teklif'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Where it is needed'], ['ch-series', 'PQ and SafeVader'], ['ch-buy', 'Buying in Iran'], ['ch-data', 'Quote'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Где нужно'], ['ch-series', 'PQ и SafeVader'], ['ch-buy', 'Покупка в Иране'], ['ch-data', 'Запрос'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'أين يلزم'], ['ch-series', 'PQ وSafeVader'], ['ch-buy', 'الشراء في إيران'], ['ch-data', 'الاستعلام'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'Prosense ترکیه است؛ به ایران می‌رسد؟', a: 'بله. بیزدوار مسیر تامین و پیش‌فاکتور را برای پروژه ایران انجام می‌دهد. کاتالوگ: <a href="/pages/prosense">صفحه Prosense</a>.' },
        { q: 'با VEGA در یک پروژه قابل ترکیب است؟', a: 'بله. VEGA سطح/فشار، Prosense گاز/شعله — یک نقطه تماس در <a href="/pages/articles/industrial-trade-iran">بازرگانی صنعتی</a>.' },
        { q: 'برای استعلام چه بنویسم؟', a: 'نوع گاز، تعداد نقطه، Ex/SIL و محیط نصب. راهنمای فنی: <a href="/pages/articles/prosense-gas-detection">دتکتور گاز Prosense</a>.' }
      ],
      tr: [
        { q: 'İran’a gelir mi?', a: 'Evet. Bizdavar İran projesi için tedarik ve proforma yapar. <a href="/pages/prosense">Prosense</a>.' },
        { q: 'VEGA ile birlikte?', a: 'Evet — seviye VEGA, gaz Prosense. <a href="/pages/articles/industrial-trade-iran">Ticaret yazısı</a>.' },
        { q: 'Teklif için ne?', a: 'Gaz tipi, nokta sayısı, Ex/SIL.' }
      ],
      en: [
        { q: 'Can Prosense reach Iran projects?', a: 'Yes. Bizdavar handles supply and proforma for Iran sites. Catalogue: <a href="/pages/prosense">Prosense</a>.' },
        { q: 'Can it sit next to VEGA on one job?', a: 'Yes. VEGA is level/pressure; Prosense is gas/flame — one contact in <a href="/pages/articles/industrial-trade-iran">industrial trade</a>.' },
        { q: 'What should I write for a quote?', a: 'Target gas, point count, Ex/SIL and install environment. Guide: <a href="/pages/articles/prosense-gas-detection">Prosense gas detection</a>.' }
      ],
      ru: [
        { q: 'Доставка в Иран?', a: 'Да. Проформа для объекта в Иране. <a href="/pages/prosense">Prosense</a>.' },
        { q: 'Вместе с VEGA?', a: 'Да. Уровень — VEGA, газ — Prosense.' },
        { q: 'Что для запроса?', a: 'Газ, число точек, Ex/SIL.' }
      ],
      ar: [
        { q: 'هل يصل إلى إيران؟', a: 'نعم. بيزدوار يتولى التوريد والفاتورة. <a href="/pages/prosense">Prosense</a>.' },
        { q: 'مع VEGA؟', a: 'نعم. المستوى VEGA والغاز Prosense.' },
        { q: 'ماذا نكتب؟', a: 'نوع الغاز وعدد النقاط وEx/SIL.' }
      ]
    },
    related: [
      { title: loc('کاتالوگ Prosense', 'Prosense kataloğu', 'Prosense catalogue', 'Каталог Prosense', 'كتالوج Prosense'), url: '../prosense', desc: loc('PQ و SafeVader', 'PQ ve SafeVader', 'PQ and SafeVader', 'PQ и SafeVader', 'PQ وSafeVader') },
      { title: loc('خرید VEGA', 'VEGA satın al', 'Buy VEGA', 'Купить VEGA', 'شراء VEGA'), url: 'buy-vegapuls-iran', desc: loc('سنسور سطح', 'Seviye sensörü', 'Level sensor', 'Уровень', 'حساس مستوى') },
      { title: loc('استعلام', 'Teklif', 'Quote', 'Запрос', 'استعلام'), url: '../contact?product=Prosense', desc: loc('پیش‌فاکتور', 'Proforma', 'Proforma', 'Проформа', 'فاتورة') }
    ],
    sources: [
      { href: 'https://www.prosense.com.tr/?lang=en', label: loc('وبسایت رسمی Prosense', 'Resmi Prosense', 'Official Prosense', 'Официальный Prosense', 'Prosense الرسمي') }
    ],
    body: {
      fa: `
<p>ایمنی فرآیند بدون دتکتور گاز قابل دفاع نیست. خریدار ایران معمولاً «دتکتور گاز صنعتی» و <strong>Prosense PQ</strong> را جستجو می‌کند. بیزدوار <a href="/pages/prosense">دتکتور گاز و شعله اصل</a> را با پیش‌فاکتور فارسی کنار <a href="/pages/vega">VEGA</a> تامین می‌کند.</p>
${fig('/assets/images/prosense/series-pq.webp', 'دتکتور گاز ثابت سری PQ Prosense', 'نوع گاز و کلاس Ex را در پیام اول بنویسید.')}
<h2 id="ch-who">کجا لازم است؟</h2>
<p>نفت و گاز، پتروشیمی، معدن، پارکینگ و HVAC. شعله جدا از گاز است — سری مناسب در کاتالوگ <a href="/pages/prosense">Prosense</a>.</p>
<h2 id="ch-series">PQ، SafeVader و SIL</h2>
<ul>
<li><strong>PQ:</strong> دتکتور ثابت پرکاربرد پروژه‌ای</li>
<li><strong>SafeVader:</strong> خطوط ایمنی و پرتابل</li>
<li><strong>SIL / Ex:</strong> اگر در استعلام ننویسید کد سفارش کامل نمی‌شود</li>
</ul>
${fig('/assets/images/prosense/hero-pq-sil2.webp', 'دتکتور گاز Prosense با گواهی SIL', 'گواهی را از روی کاتالوگ سازنده چک کنید — منبع رسمی Prosense.')}
<h2 id="ch-buy">خرید در ایران</h2>
<ol>
<li>لیست نقاط و نوع گاز</li>
<li>پیشنهاد سری از صفحه محصول</li>
<li>پیش‌فاکتور و بازه تحویل</li>
<li>حمل تا پروژه</li>
</ol>
<p>راهنمای فنی‌تر: <a href="/pages/articles/prosense-gas-detection">از انتخاب مدل تا نصب</a>. شروع: <a href="/pages/contact?product=Prosense">استعلام Prosense</a>.</p>
<h2 id="ch-data">استعلام</h2>
<p>حتی یک عکس محیط نصب کافی است. مسیر کلی بازرگانی: <a href="/pages/articles/industrial-trade-iran">بازرگانی تجهیزات صنعتی در ایران</a>.</p>`,
      tr: `
<p>İran alıcısı «endüstriyel gaz dedektörü» ve <strong>Prosense PQ</strong> arar. Bizdavar orijinal <a href="/pages/prosense">Prosense</a> tedarik eder.</p>
${fig('/assets/images/prosense/series-pq.webp', 'Prosense PQ sabit gaz dedektörü', 'Gaz tipi ve Ex sınıfını ilk mesajda yazın.')}
<h2 id="ch-who">Nerede gerekir</h2>
<p>Petrol, petrokimya, maden, otopark, HVAC.</p>
<h2 id="ch-series">PQ ve SafeVader</h2>
<ul><li>PQ — sabit hat</li><li>SafeVader — güvenlik / taşınabilir</li><li>SIL/Ex zorunluysa yazın</li></ul>
<h2 id="ch-buy">İran’da alım</h2>
<ol><li>Nokta listesi</li><li>Seri önerisi</li><li>Proforma</li><li>Sevkiyat</li></ol>
<p><a href="/pages/contact?product=Prosense">Teklif</a>.</p>
<h2 id="ch-data">Teklif</h2>
<p><a href="/pages/articles/industrial-trade-iran">Endüstriyel ticaret</a>.</p>`,
      en: `
<p>Process safety needs gas detection. Iran buyers search “industrial gas detector” and <strong>Prosense PQ</strong>. Bizdavar supplies genuine <a href="/pages/prosense">Prosense gas and flame detectors</a> next to <a href="/pages/vega">VEGA</a>.</p>
${fig('/assets/images/prosense/series-pq.webp', 'Prosense PQ fixed gas detector', 'State target gas and Ex class in the first message.')}
<h2 id="ch-who">Where it is needed</h2>
<p>Oil and gas, petrochemical, mining, parking and HVAC. Flame is a different line — pick the series on the <a href="/pages/prosense">Prosense page</a>.</p>
<h2 id="ch-series">PQ, SafeVader and SIL</h2>
<ul><li><strong>PQ:</strong> common fixed project detector</li><li><strong>SafeVader:</strong> safety and portable lines</li><li><strong>SIL / Ex:</strong> without this the order code is incomplete</li></ul>
${fig('/assets/images/prosense/hero-pq-sil2.webp', 'Prosense gas detector with SIL certification', 'Verify certificates against the official Prosense catalogue.')}
<h2 id="ch-buy">Buying in Iran</h2>
<ol><li>Point list and gas type</li><li>Series proposal</li><li>Proforma and lead time</li><li>Freight to site</li></ol>
<p>Deeper guide: <a href="/pages/articles/prosense-gas-detection">from model to install</a>. Start: <a href="/pages/contact?product=Prosense">Prosense quote</a>.</p>
<h2 id="ch-data">Quote</h2>
<p>Even an install-area photo helps. Trade overview: <a href="/pages/articles/industrial-trade-iran">industrial trade in Iran</a>.</p>`,
      ru: `
<p>Закупщики в Иране ищут <strong>Prosense PQ</strong>. Bizdavar поставляет оригинальный <a href="/pages/prosense">Prosense</a>.</p>
${fig('/assets/images/prosense/series-pq.webp', 'Стационарный детектор PQ', 'Укажите газ и класс Ex.')}
<h2 id="ch-who">Где нужно</h2>
<p>Нефть, нефтехимия, шахты, паркинг, HVAC.</p>
<h2 id="ch-series">PQ и SafeVader</h2>
<ul><li>PQ — стационар</li><li>SafeVader — безопасность</li><li>SIL/Ex в запросе</li></ul>
<h2 id="ch-buy">Покупка в Иране</h2>
<p><a href="/pages/contact?product=Prosense">Запрос</a>.</p>
<h2 id="ch-data">Запрос</h2>
<p><a href="/pages/articles/industrial-trade-iran">Промторговля</a>.</p>`,
      ar: `
<p>المشترون في إيران يبحثون عن <strong>Prosense PQ</strong>. بيزدوار يورّد <a href="/pages/prosense">Prosense</a> الأصلي.</p>
${fig('/assets/images/prosense/series-pq.webp', 'كاشف غاز ثابت PQ', 'اكتبوا نوع الغاز وفئة Ex.')}
<h2 id="ch-who">أين يلزم</h2>
<p>النفط والبتروكيما والتعدين ومواقف السيارات وHVAC.</p>
<h2 id="ch-series">PQ وSafeVader</h2>
<ul><li>PQ ثابت</li><li>SafeVader للأمان</li><li>SIL/Ex في الاستعلام</li></ul>
<h2 id="ch-buy">الشراء في إيران</h2>
<p><a href="/pages/contact?product=Prosense">استعلام</a>.</p>
<h2 id="ch-data">الاستعلام</h2>
<p><a href="/pages/articles/industrial-trade-iran">التجارة الصناعية</a>.</p>`
    }
  },
  {
    file: 'industrial-trade-iran.html',
    slug: 'industrial-trade-iran',
    seoKey: 'articleIndustrialTradeIran',
    date: '2026-08-27',
    modified: '2026-08-29',
    image: 'assets/images/content/supply-hero.jpg',
    extraImg: 'assets/images/vega/blog-industrial-sensors.jpg',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'بازرگانی تجهیزات صنعتی در ایران — VEGA، Prosense و برندهای اصل',
      'İran’da endüstriyel ticaret — VEGA, Prosense ve orijinal markalar',
      'Industrial trade in Iran — VEGA, Prosense and genuine brands',
      'Промышленная торговля в Иране — VEGA, Prosense и оригинал',
      'التجارة الصناعية في إيران — VEGA وProsense وعلامات أصلية'
    ),
    description: loc(
      'مسیر بازرگانی اصل برای ابزار دقیق، ایمنی گاز، ردیاب ناوگان و روغن صنعتی در ایران — یک نقطه تماس فارسی با پیش‌فاکتور شفاف.',
      'Orijinal B2B tedarik: ölçüm, gaz güvenliği, filo GPS ve yağ — İran projeleri için tek iletişim.',
      'Genuine B2B supply of instrumentation, gas safety, fleet GPS and industrial oils for Iran — one Persian contact.',
      'Оригинальные поставки КИП, газовой безопасности, GPS и масел для Ирана — один контакт.',
      'توريد أصلي لأجهزة القياس وسلامة الغاز وGPS والزيوت لمشاريع إيران — نقطة اتصال واحدة.'
    ),
    keywords: loc(
      'بازرگانی صنعتی ایران, تامین تجهیزات ابزار دقیق, واردات تجهیزات صنعتی, بیزدوار',
      'endüstriyel ticaret İran, VEGA Prosense, Bizdavar',
      'industrial trade Iran, instrumentation supply, VEGA Prosense, Bizdavar',
      'промторговля Иран, VEGA Prosense, Bizdavar',
      'تجارة صناعية إيران, VEGA Prosense, بيزدوار'
    ),
    tags: loc(
      ['بازرگانی', 'ابزار دقیق', 'ایران', 'B2B'],
      ['Ticaret', 'Enstrümantasyon', 'İran', 'B2B'],
      ['Trade', 'Instrumentation', 'Iran', 'B2B'],
      ['Торговля', 'КИП', 'Иран', 'B2B'],
      ['تجارة', 'قياس', 'إيران', 'B2B']
    ),
    toc: {
      fa: [['ch-who', 'خریدار ایران'], ['ch-brands', 'برندها'], ['ch-path', 'از استعلام تا تحویل'], ['ch-why', 'چرا بیزدوار'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'İran alıcısı'], ['ch-brands', 'Markalar'], ['ch-path', 'Tekliften teslimata'], ['ch-why', 'Neden Bizdavar'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'The Iran buyer'], ['ch-brands', 'Brands'], ['ch-path', 'Quote to delivery'], ['ch-why', 'Why Bizdavar'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Покупатель в Иране'], ['ch-brands', 'Бренды'], ['ch-path', 'От запроса до поставки'], ['ch-why', 'Почему Bizdavar'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'المشتري في إيران'], ['ch-brands', 'العلامات'], ['ch-path', 'من الاستعلام إلى التسليم'], ['ch-why', 'لماذا بيزدوار'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'فقط VEGA کار می‌کنید؟', a: 'خیر. <a href="/pages/prosense">Prosense</a>، <a href="/pages/teltonika">Teltonika</a>، <a href="/pages/liqui-moly">Liqui Moly</a>، <a href="/pages/gamak">Gamak</a>، Digi و Teraoka هم در <a href="/pages/products#supply">کاتالوگ تامین</a> است.' },
        { q: 'خدمات دیجیتال جدا است؟', a: 'بله. سایت و بازاریابی در <a href="/pages/services">خدمات</a>؛ خرید تجهیزات در بازرگانی. بیشتر مشتری ایران از مسیر بازرگانی می‌آید.' },
        { q: 'از کجا شروع کنم؟', a: 'واتساپ فارسی یا <a href="/pages/contact">فرم تماس</a>. اگر مدل را می‌دانید همان را بنویسید.' }
      ],
      tr: [
        { q: 'Sadece VEGA mı?', a: 'Hayır. Prosense, Teltonika, Liqui Moly, Gamak — <a href="/pages/products#supply">katalog</a>.' },
        { q: 'Dijital hizmet ayrı mı?', a: 'Evet. Site <a href="/pages/services">hizmetlerde</a>; ekipman alımı tedarikte.' },
        { q: 'Nereden başlamalı?', a: '<a href="/pages/contact">İletişim</a> veya WhatsApp.' }
      ],
      en: [
        { q: 'Do you only sell VEGA?', a: 'No. <a href="/pages/prosense">Prosense</a>, <a href="/pages/teltonika">Teltonika</a>, <a href="/pages/liqui-moly">Liqui Moly</a>, <a href="/pages/gamak">Gamak</a>, Digi and Teraoka are on the <a href="/pages/products#supply">supply catalogue</a>.' },
        { q: 'Are digital services separate?', a: 'Yes. Web and marketing live under <a href="/pages/services">services</a>; equipment buying is trade. Most Iran customers come through trade.' },
        { q: 'Where do I start?', a: 'Persian WhatsApp or the <a href="/pages/contact">contact form</a>. If you know the model, write it.' }
      ],
      ru: [
        { q: 'Только VEGA?', a: 'Нет. Prosense, Teltonika, Liqui Moly, Gamak — <a href="/pages/products#supply">каталог</a>.' },
        { q: 'Цифровые услуги отдельно?', a: 'Да. Сайт в <a href="/pages/services">услугах</a>.' },
        { q: 'С чего начать?', a: '<a href="/pages/contact">Контакт</a> или WhatsApp.' }
      ],
      ar: [
        { q: 'VEGA فقط؟', a: 'لا. Prosense وTeltonika وLiqui Moly وGamak في <a href="/pages/products#supply">الكتالوج</a>.' },
        { q: 'الخدمات الرقمية منفصلة؟', a: 'نعم. الموقع في <a href="/pages/services">الخدمات</a>.' },
        { q: 'من أين نبدأ؟', a: '<a href="/pages/contact">التواصل</a> أو واتساب.' }
      ]
    },
    related: [
      { title: loc('خرید VEGA', 'VEGA', 'Buy VEGA', 'VEGA', 'VEGA'), url: 'buy-vegapuls-iran', desc: loc('VEGAPULS 6X', 'VEGAPULS 6X', 'VEGAPULS 6X', 'VEGAPULS 6X', 'VEGAPULS 6X') },
      { title: loc('خرید Prosense', 'Prosense', 'Buy Prosense', 'Prosense', 'Prosense'), url: 'buy-prosense-iran', desc: loc('دتکتور گاز', 'Gaz dedektörü', 'Gas detector', 'Газ', 'كاشف غاز') },
      { title: loc('کاتالوگ تامین', 'Tedarik kataloğu', 'Supply catalogue', 'Каталог поставок', 'كتالوج التوريد'), url: '../products#supply', desc: loc('همه برندها', 'Tüm markalar', 'All brands', 'Все бренды', 'كل العلامات') }
    ],
    sources: [
      { href: 'https://bizdavar.com/pages/products', label: loc('کاتالوگ محصولات بیزدوار', 'Bizdavar ürün kataloğu', 'Bizdavar products catalogue', 'Каталог продуктов Bizdavar', 'كتالوج منتجات بيزدوار') }
    ],
    body: {
      fa: `
<p>بیشتر مشتری بیزدوار در ایران <strong>خریدار بازرگانی</strong> است: ابزار دقیق، ایمنی گاز، ردیاب و روغن صنعتی. این صفحه مسیر را یک‌جا جمع می‌کند تا گوگل و خریدار هر دو برند و واتساپ را پیدا کنند.</p>
${fig('/assets/images/content/supply-hero.jpg', 'تامین صنعتی بیزدوار — سنسور، دتکتور و جعبه صادراتی', 'یک استعلام می‌تواند چند برند را در یک پیش‌فاکتور بپوشاند.')}
<h2 id="ch-who">خریدار ایران چه می‌خواهد؟</h2>
<p>کالای اصل، قیمت قابل دفاع برای واحد خرید، و پاسخ فارسی. بازار خاکستری ریسک پروژه است. بیزدوار کد سفارش و پیش‌فاکتور می‌دهد — مبدأ جزئی در استعلام خصوصی.</p>
<h2 id="ch-brands">برندهایی که از اینجا می‌خرید</h2>
<ul>
<li><a href="/pages/vega">VEGA</a> — سطح و فشار · <a href="/pages/articles/buy-vegapuls-iran">خرید VEGAPULS</a></li>
<li><a href="/pages/prosense">Prosense</a> — گاز و شعله · <a href="/pages/articles/buy-prosense-iran">خرید دتکتور</a></li>
<li><a href="/pages/teltonika">Teltonika</a> — ردیاب ناوگان · <a href="/pages/articles/buy-teltonika-iran">FMB920</a></li>
<li><a href="/pages/liqui-moly">Liqui Moly</a> — روغن و افزودنی · <a href="/pages/articles/liqui-moly-supply-iran">تامین اصل</a></li>
<li><a href="/pages/gamak">Gamak</a> — الکتروموتور · <a href="/pages/articles/buy-gamak-iran">راهنمای خرید</a></li>
<li><a href="/pages/digi-system">Digi System</a> — ترازو و POS · <a href="/pages/articles/buy-digi-system-iran">خرید Digi</a></li>
<li><a href="/pages/teraoka">Teraoka</a> — ترازو ژاپن · <a href="/pages/articles/buy-teraoka-iran">خرید Teraoka</a></li>
</ul>
${fig('/assets/images/vega/blog-industrial-sensors.jpg', 'ابزار دقیق VEGA در پروژه صنعتی', 'عکس پلاک و تعداد، استعلام را یک مرحله کوتاه می‌کند.')}
<h2 id="ch-path">از استعلام تا تحویل</h2>
<ol>
<li>واتساپ یا <a href="/pages/contact">فرم</a> — مدل یا شرایط فرآیند</li>
<li>پیشنهاد فنی و پیش‌فاکتور</li>
<li>تأیید، سفارش، حمل تا ایران</li>
</ol>
<h2 id="ch-why">چرا بیزدوار</h2>
<p>تیم فارسی، کاتالوگ روی سایت، و مقالات خوشه‌ای برای جستجوی «خرید VEGA ایران». کاتالوگ کامل: <a href="/pages/products#supply">برندهای تامین</a>.</p>`,
      tr: `
<p>İran’daki çoğu müşteri <strong>tedarik alıcısıdır</strong>. Bu yazı markaları ve WhatsApp yolunu bir araya getirir.</p>
${fig('/assets/images/content/supply-hero.jpg', 'Bizdavar endüstriyel tedarik', 'Tek teklifte birden fazla marka olabilir.')}
<h2 id="ch-who">İran alıcısı</h2>
<p>Orijinal mal, savunulabilir fiyat, Farsça yanıt.</p>
<h2 id="ch-brands">Markalar</h2>
<ul>
<li><a href="/pages/vega">VEGA</a></li>
<li><a href="/pages/prosense">Prosense</a></li>
<li><a href="/pages/teltonika">Teltonika</a></li>
<li><a href="/pages/liqui-moly">Liqui Moly</a></li>
<li>Gamak, Digi, Teraoka</li>
</ul>
<h2 id="ch-path">Tekliften teslimata</h2>
<ol><li>WhatsApp / form</li><li>Proforma</li><li>Sevkiyat</li></ol>
<h2 id="ch-why">Neden Bizdavar</h2>
<p><a href="/pages/products#supply">Tedarik kataloğu</a>.</p>`,
      en: `
<p>Most Bizdavar customers in Iran are <strong>trade buyers</strong>: instrumentation, gas safety, trackers and industrial oils. This page puts brands and WhatsApp in one crawlable path.</p>
${fig('/assets/images/content/supply-hero.jpg', 'Bizdavar industrial supply — sensors, detectors and export crates', 'One inquiry can cover several brands on a single proforma.')}
<h2 id="ch-who">What the Iran buyer wants</h2>
<p>Genuine goods, a defensible price for procurement, and a Persian reply. Grey market is project risk. Bizdavar issues order codes and proformas — origin details stay private.</p>
<h2 id="ch-brands">Brands you buy here</h2>
<ul>
<li><a href="/pages/vega">VEGA</a> — level and pressure · <a href="/pages/articles/buy-vegapuls-iran">buy VEGAPULS</a></li>
<li><a href="/pages/prosense">Prosense</a> — gas and flame · <a href="/pages/articles/buy-prosense-iran">buy detectors</a></li>
<li><a href="/pages/teltonika">Teltonika</a> — fleet GPS · <a href="/pages/articles/buy-teltonika-iran">FMB920</a></li>
<li><a href="/pages/liqui-moly">Liqui Moly</a> — oils · <a href="/pages/articles/liqui-moly-supply-iran">genuine supply</a></li>
<li><a href="/pages/gamak">Gamak</a>, <a href="/pages/digi-system">Digi</a>, <a href="/pages/teraoka">Teraoka</a></li>
</ul>
${fig('/assets/images/vega/blog-industrial-sensors.jpg', 'VEGA instrumentation on an industrial project', 'A nameplate photo plus quantity shortens the quote.')}
<h2 id="ch-path">Quote to delivery</h2>
<ol><li>WhatsApp or the <a href="/pages/contact">form</a></li><li>Technical proposal and proforma</li><li>Confirm, order, freight to Iran</li></ol>
<h2 id="ch-why">Why Bizdavar</h2>
<p>Persian team, on-site catalogues, cluster articles for “buy VEGA Iran”. Full list: <a href="/pages/products#supply">supply brands</a>.</p>`,
      ru: `
<p>Большинство клиентов в Иране — <strong>закупщики</strong>. Эта страница собирает бренды и WhatsApp.</p>
${fig('/assets/images/content/supply-hero.jpg', 'Промышленные поставки Bizdavar', 'Один запрос — несколько брендов.')}
<h2 id="ch-who">Покупатель в Иране</h2>
<p>Оригинал, понятная цена, ответ на фарси.</p>
<h2 id="ch-brands">Бренды</h2>
<ul><li>VEGA</li><li>Prosense</li><li>Teltonika</li><li>Liqui Moly</li><li>Gamak, Digi, Teraoka</li></ul>
<h2 id="ch-path">От запроса до поставки</h2>
<p><a href="/pages/contact">Контакт</a>.</p>
<h2 id="ch-why">Почему Bizdavar</h2>
<p><a href="/pages/products#supply">Каталог поставок</a>.</p>`,
      ar: `
<p>معظم عملاء إيران <strong>مشترو تجارة</strong>. هذه الصفحة تجمع العلامات وواتساب.</p>
${fig('/assets/images/content/supply-hero.jpg', 'التوريد الصناعي من بيزدوار', 'استعلام واحد يمكن أن يشمل عدة علامات.')}
<h2 id="ch-who">المشتري في إيران</h2>
<p>بضاعة أصلية وسعر واضح ورد بالفارسية.</p>
<h2 id="ch-brands">العلامات</h2>
<ul><li>VEGA</li><li>Prosense</li><li>Teltonika</li><li>Liqui Moly</li><li>Gamak وDigi وTeraoka</li></ul>
<h2 id="ch-path">من الاستعلام إلى التسليم</h2>
<p><a href="/pages/contact">تواصل</a>.</p>
<h2 id="ch-why">لماذا بيزدوار</h2>
<p><a href="/pages/products#supply">كتالوج التوريد</a>.</p>`
    }
  },
  {
    file: 'buy-teltonika-iran.html',
    slug: 'buy-teltonika-iran',
    seoKey: 'articleBuyTeltonikaIran',
    date: '2026-08-26',
    modified: '2026-08-29',
    image: 'assets/images/partners/teltonika.png',
    extraImg: 'assets/images/content/supply-hero.jpg',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'خرید ردیاب Teltonika FMB920 در ایران — از ۲۹ دلار',
      'İran’da Teltonika FMB920 — 29$’dan',
      'Buy Teltonika FMB920 in Iran — from $29',
      'Купить Teltonika FMB920 в Иране — от $29',
      'شراء Teltonika FMB920 في إيران — من ٢٩ دولاراً'
    ),
    description: loc(
      'خرید ردیاب GPS اصل Teltonika برای ناوگان ایران: FMB920 از ۲۹ دلار، FMC650 و DualCam — پیش‌فاکتور فارسی و استعلام واتساپ.',
      'Orijinal Teltonika GPS İran filoları için: FMB920 29$’dan, FMC650 ve DualCam — Farsça teklif.',
      'Genuine Teltonika GPS for Iran fleets: FMB920 from $29, FMC650 and DualCam — Persian proforma.',
      'Оригинальный Teltonika GPS для автопарков Ирана: FMB920 от $29, FMC650 и DualCam.',
      'GPS أصلي من Teltonika لأساطيل إيران: FMB920 من ٢٩$ وFMC650 وDualCam.'
    ),
    keywords: loc(
      'خرید Teltonika ایران, قیمت FMB920, ردیاب GPS ناوگان, بیزدوار',
      'Teltonika İran, FMB920 fiyat, filo GPS, Bizdavar',
      'buy Teltonika Iran, FMB920 price, fleet GPS, Bizdavar',
      'купить Teltonika Иран, FMB920, GPS парк, Bizdavar',
      'شراء Teltonika إيران, FMB920, GPS أسطول, بيزدوار'
    ),
    tags: loc(
      ['Teltonika', 'FMB920', 'ردیاب GPS', 'ایران'],
      ['Teltonika', 'FMB920', 'GPS', 'İran'],
      ['Teltonika', 'FMB920', 'GPS tracker', 'Iran'],
      ['Teltonika', 'FMB920', 'GPS', 'Иран'],
      ['Teltonika', 'FMB920', 'GPS', 'إيران']
    ),
    toc: {
      fa: [['ch-who', 'برای چه ناوگانی'], ['ch-models', 'FMB920 و مدل‌های بالاتر'], ['ch-buy', 'خرید در ایران'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Hangi filo'], ['ch-models', 'FMB920 ve üstü'], ['ch-buy', 'İran’da alım'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Which fleets'], ['ch-models', 'FMB920 and above'], ['ch-buy', 'Buying in Iran'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Какой парк'], ['ch-models', 'FMB920 и выше'], ['ch-buy', 'Покупка в Иране'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'أي أسطول'], ['ch-models', 'FMB920 وما فوق'], ['ch-buy', 'الشراء في إيران'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'قیمت ۲۹ دلار نهایی است؟', a: 'قیمت پایه FMB920 از ۲۹ دلار است؛ تعداد، لوازم و مدل بالاتر در پیش‌فاکتور می‌آید. کاتالوگ: <a href="/pages/teltonika">Teltonika</a>.' },
        { q: 'برای کامیون CAN کدام مدل؟', a: 'معمولاً سری Advanced مثل FMC650. نوع خودرو را در واتساپ بنویسید.' },
        { q: 'با VEGA در یک سفارش؟', a: 'بله — ناوگان و ابزار دقیق یک نقطه تماس: <a href="/pages/articles/industrial-trade-iran">بازرگانی صنعتی</a>.' }
      ],
      tr: [
        { q: '29$ kesin mi?', a: 'FMB920 taban fiyatı. Adet ve üst model proformada. <a href="/pages/teltonika">Teltonika</a>.' },
        { q: 'Kamyon CAN?', a: 'Genelde FMC650. Araç tipini yazın.' },
        { q: 'VEGA ile aynı sipariş?', a: 'Evet. <a href="/pages/articles/industrial-trade-iran">Ticaret</a>.' }
      ],
      en: [
        { q: 'Is $29 the final price?', a: 'FMB920 starts at $29; quantity, accessories and higher models land on the proforma. Catalogue: <a href="/pages/teltonika">Teltonika</a>.' },
        { q: 'Which model for truck CAN?', a: 'Usually Advanced such as FMC650. Send vehicle type on WhatsApp.' },
        { q: 'Same order as VEGA?', a: 'Yes — fleet and instrumentation in one contact: <a href="/pages/articles/industrial-trade-iran">industrial trade</a>.' }
      ],
      ru: [
        { q: '29$ финал?', a: 'База FMB920. Количество — в проформе. <a href="/pages/teltonika">Teltonika</a>.' },
        { q: 'CAN для грузовика?', a: 'Обычно FMC650.' },
        { q: 'В одном заказе с VEGA?', a: 'Да. <a href="/pages/articles/industrial-trade-iran">Промторговля</a>.' }
      ],
      ar: [
        { q: 'هل ٢٩$ نهائي؟', a: 'سعر أساس FMB920. العدد في الفاتورة. <a href="/pages/teltonika">Teltonika</a>.' },
        { q: 'CAN للشاحنة؟', a: 'غالباً FMC650.' },
        { q: 'مع VEGA في طلب واحد؟', a: 'نعم. <a href="/pages/articles/industrial-trade-iran">التجارة الصناعية</a>.' }
      ]
    },
    related: [
      { title: loc('کاتالوگ Teltonika', 'Teltonika kataloğu', 'Teltonika catalogue', 'Каталог Teltonika', 'كتالوج Teltonika'), url: '../teltonika', desc: loc('FMB920 و FMC650', 'FMB920 ve FMC650', 'FMB920 and FMC650', 'FMB920 и FMC650', 'FMB920 وFMC650') },
      { title: loc('بازرگانی صنعتی', 'Endüstriyel ticaret', 'Industrial trade', 'Промторговля', 'تجارة صناعية'), url: 'industrial-trade-iran', desc: loc('همه برندها', 'Tüm markalar', 'All brands', 'Все бренды', 'كل العلامات') },
      { title: loc('استعلام', 'Teklif', 'Quote', 'Запрос', 'استعلام'), url: '../contact?product=Teltonika', desc: loc('پیش‌فاکتور', 'Proforma', 'Proforma', 'Проформа', 'فاتورة') }
    ],
    sources: [
      { href: 'https://www.teltonika-gps.com/', label: loc('وبسایت رسمی Teltonika', 'Resmi Teltonika', 'Official Teltonika', 'Официальный Teltonika', 'Teltonika الرسمي') }
    ],
    body: {
      fa: `
<p>ناوگان ایران به ردیاب قابل‌اعتماد نیاز دارد. پرجستجوترین مدل <strong>FMB920</strong> است — قیمت پایه از ۲۹ دلار. بیزدوار <a href="/pages/teltonika">Teltonika اصل</a> را با پیش‌فاکتور فارسی تامین می‌کند.</p>
${fig('/assets/images/partners/teltonika.png', 'لوگوی Teltonika Telematics — ردیاب ناوگان', 'نوع خودرو و داده مورد نیاز را بنویسید تا بین FMB920 و FMC650 انتخاب شود.')}
<h2 id="ch-who">برای چه ناوگانی؟</h2>
<p>وانت، سواری سازمانی، کامیون و ماشین‌آلات. اگر CAN، تاخوگراف یا دوربین می‌خواهید مدل بالاتر لازم است — نه فقط FMB920.</p>
<h2 id="ch-models">FMB920 و مدل‌های بالاتر</h2>
<ul>
<li><strong>FMB920:</strong> ردیابی پایه، پرفروش</li>
<li><strong>FMC650 / Advanced:</strong> CAN و ناوگان سنگین</li>
<li><strong>DualCam:</strong> ویدئو و رویداد راننده</li>
</ul>
${fig('/assets/images/content/supply-hero.jpg', 'تامین تجهیزات صنعتی و ردیاب برای پروژه ایران', 'تعداد دستگاه را در استعلام اول بنویسید.')}
<h2 id="ch-buy">خرید در ایران</h2>
<ol>
<li>نوع خودرو و تعداد</li>
<li>پیشنهاد مدل از <a href="/pages/teltonika">کاتالوگ</a></li>
<li>پیش‌فاکتور دلاری شفاف</li>
<li>حمل تا ایران</li>
</ol>
<p>همین برندها در <a href="/pages/articles/industrial-trade-iran">بازرگانی صنعتی</a> کنار VEGA و Prosense. استعلام: <a href="/pages/contact?product=Teltonika">واتساپ Teltonika</a>.</p>`,
      tr: `
<p>İran filoları <strong>FMB920</strong> arar — taban 29$. Bizdavar orijinal <a href="/pages/teltonika">Teltonika</a> tedarik eder.</p>
${fig('/assets/images/partners/teltonika.png', 'Teltonika Telematics', 'Araç tipi ve veri ihtiyacını yazın.')}
<h2 id="ch-who">Hangi filo</h2>
<p>Binek, kamyonet, kamyon. CAN veya kamera için üst model.</p>
<h2 id="ch-models">FMB920 ve üstü</h2>
<ul><li>FMB920 — temel</li><li>FMC650 — CAN</li><li>DualCam — video</li></ul>
<h2 id="ch-buy">İran’da alım</h2>
<p><a href="/pages/contact?product=Teltonika">Teklif</a> · <a href="/pages/articles/industrial-trade-iran">Ticaret</a>.</p>`,
      en: `
<p>Iran fleets need a reliable tracker. The most-searched model is <strong>FMB920</strong> — from $29. Bizdavar supplies genuine <a href="/pages/teltonika">Teltonika</a> with a Persian proforma.</p>
${fig('/assets/images/partners/teltonika.png', 'Teltonika Telematics logo — fleet GPS', 'Send vehicle type and required data so we pick FMB920 vs FMC650.')}
<h2 id="ch-who">Which fleets</h2>
<p>Cars, vans, trucks and plant. CAN, tachograph or cameras need a higher series — not FMB920 alone.</p>
<h2 id="ch-models">FMB920 and above</h2>
<ul><li><strong>FMB920:</strong> basic tracking, best seller</li><li><strong>FMC650 / Advanced:</strong> CAN and heavy fleet</li><li><strong>DualCam:</strong> video and driver events</li></ul>
${fig('/assets/images/content/supply-hero.jpg', 'Industrial supply and GPS trackers for Iran projects', 'Put device quantity in the first inquiry.')}
<h2 id="ch-buy">Buying in Iran</h2>
<ol><li>Vehicle type and quantity</li><li>Model from the <a href="/pages/teltonika">catalogue</a></li><li>Clear USD proforma</li><li>Freight to Iran</li></ol>
<p>Same desk as VEGA and Prosense: <a href="/pages/articles/industrial-trade-iran">industrial trade</a>. Quote: <a href="/pages/contact?product=Teltonika">Teltonika WhatsApp</a>.</p>`,
      ru: `
<p>Автопарки Ирана ищут <strong>FMB920</strong> — от $29. Bizdavar поставляет оригинальный <a href="/pages/teltonika">Teltonika</a>.</p>
${fig('/assets/images/partners/teltonika.png', 'Teltonika Telematics', 'Укажите тип ТС и нужные данные.')}
<h2 id="ch-who">Какой парк</h2>
<p>Легковые, фургоны, грузовики. CAN и камера — старшая серия.</p>
<h2 id="ch-models">FMB920 и выше</h2>
<ul><li>FMB920 — база</li><li>FMC650 — CAN</li><li>DualCam — видео</li></ul>
<h2 id="ch-buy">Покупка в Иране</h2>
<p><a href="/pages/contact?product=Teltonika">Запрос</a>.</p>`,
      ar: `
<p>أساطيل إيران تبحث عن <strong>FMB920</strong> — من ٢٩$. بيزدوار يورّد <a href="/pages/teltonika">Teltonika</a> الأصلي.</p>
${fig('/assets/images/partners/teltonika.png', 'Teltonika Telematics', 'اكتبوا نوع المركبة والبيانات المطلوبة.')}
<h2 id="ch-who">أي أسطول</h2>
<p>سيارات وشاحنات. CAN أو كاميرا تحتاج سلسلة أعلى.</p>
<h2 id="ch-models">FMB920 وما فوق</h2>
<ul><li>FMB920 أساسي</li><li>FMC650 لـ CAN</li><li>DualCam للفيديو</li></ul>
<h2 id="ch-buy">الشراء في إيران</h2>
<p><a href="/pages/contact?product=Teltonika">استعلام</a>.</p>`
    }
  },
  {
    file: 'buy-gamak-iran.html',
    slug: 'buy-gamak-iran',
    seoKey: 'articleBuyGamakIran',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/gamak/category-three-phase.webp',
    extraImg: 'assets/images/partners/gamak.svg',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'خرید الکتروموتور Gamak در ایران — توان، فلنج و استعلام',
      'İran’da Gamak motor satın al — kW, flanş, teklif',
      'Buy Gamak motors in Iran — kW, flange and quote',
      'Купить двигатель Gamak в Иране — кВт, фланец, запрос',
      'شراء محرك Gamak في إيران — القدرة والشفة والاستعلام'
    ),
    description: loc(
      'چطور الکتروموتور اصل Gamak برای پمپ، فن و خط تولید ایران بخرید: توان kW، دور، فلنج B3/B5 و کلاس IE — پیش‌فاکتور فارسی.',
      'Orijinal Gamak motor: kW, rpm, B3/B5 flanş ve IE sınıfı — Farsça proforma.',
      'How to buy a genuine Gamak motor for Iran pumps, fans and lines: kW, rpm, B3/B5 flange and IE class — Persian proforma.',
      'Как купить оригинальный Gamak для насосов и линий в Иране: кВт, об/мин, фланец B3/B5.',
      'كيف تشتري محرك Gamak أصلي لمضخات وخطوط إيران: كيلوواط وشفعة B3/B5 وفئة IE.'
    ),
    keywords: loc(
      'خرید الکتروموتور Gamak ایران, موتور گاماک, IE3, فلنج B5, بیزدوار',
      'Gamak motor satın al, İran, IE3, B5 flanş, Bizdavar',
      'buy Gamak motor Iran, IE3, B5 flange, Bizdavar',
      'купить Gamak Иран, IE3, фланец B5, Bizdavar',
      'شراء محرك Gamak إيران, IE3, شفة B5, بيزدوار'
    ),
    tags: loc(
      ['Gamak', 'الکتروموتور', 'IE3', 'ایران'],
      ['Gamak', 'Elektromotor', 'IE3', 'İran'],
      ['Gamak', 'Electric motor', 'IE3', 'Iran'],
      ['Gamak', 'Электродвигатель', 'IE3', 'Иран'],
      ['Gamak', 'محرك كهربائي', 'IE3', 'إيران']
    ),
    toc: {
      fa: [['ch-who', 'برای چه کاربردی'], ['ch-spec', 'چه مشخصاتی بفرستید'], ['ch-buy', 'خرید در ایران'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Hangi uygulama'], ['ch-spec', 'Ne göndermelisiniz'], ['ch-buy', 'İran’da alım'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Which duty'], ['ch-spec', 'What to send'], ['ch-buy', 'Buying in Iran'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Какая нагрузка'], ['ch-spec', 'Что прислать'], ['ch-buy', 'Покупка в Иране'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'أي تطبيق'], ['ch-spec', 'ماذا ترسلون'], ['ch-buy', 'الشراء في إيران'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'قیمت موتور روی سایت هست؟', a: 'خیر. قیمت به توان، دور، فلنج، کلاس IE و موجودی بستگی دارد. پیش‌فاکتور از <a href="/pages/contact?product=Gamak">واتساپ یا فرم</a>.' },
        { q: 'موتور فرسوده را چطور جایگزین کنم؟', a: 'عکس پلاک، فلنج B3/B5/B35 و نوع بار (پمپ/فن/نوار) را بفرستید. کاتالوگ: <a href="/pages/gamak">Gamak</a>.' },
        { q: 'با VEGA در یک سفارش؟', a: 'بله. موتور و ابزار دقیق یک نقطه تماس: <a href="/pages/articles/industrial-trade-iran">بازرگانی صنعتی</a>.' }
      ],
      tr: [
        { q: 'Fiyat sitede var mı?', a: 'Hayır. kW, rpm ve flanşa bağlı. <a href="/pages/contact?product=Gamak">Teklif</a>.' },
        { q: 'Eski motor değişimi?', a: 'Etiket fotoğrafı ve flanş. <a href="/pages/gamak">Gamak</a>.' },
        { q: 'VEGA ile aynı sipariş?', a: 'Evet. <a href="/pages/articles/industrial-trade-iran">Ticaret</a>.' }
      ],
      en: [
        { q: 'Is the motor price on the site?', a: 'No. Price depends on kW, rpm, flange, IE class and stock. Proforma via <a href="/pages/contact?product=Gamak">WhatsApp or the form</a>.' },
        { q: 'How do I replace a worn motor?', a: 'Send a nameplate photo, B3/B5/B35 flange and duty (pump/fan/conveyor). Catalogue: <a href="/pages/gamak">Gamak</a>.' },
        { q: 'Same order as VEGA?', a: 'Yes — motors and instrumentation in one contact: <a href="/pages/articles/industrial-trade-iran">industrial trade</a>.' }
      ],
      ru: [
        { q: 'Цена на сайте?', a: 'Нет. Зависит от кВт и фланца. <a href="/pages/contact?product=Gamak">Запрос</a>.' },
        { q: 'Замена старого мотора?', a: 'Фото шильдика и фланец. <a href="/pages/gamak">Gamak</a>.' },
        { q: 'В одном заказе с VEGA?', a: 'Да. <a href="/pages/articles/industrial-trade-iran">Промторговля</a>.' }
      ],
      ar: [
        { q: 'هل السعر على الموقع؟', a: 'لا. يعتمد على القدرة والشفة. <a href="/pages/contact?product=Gamak">استعلام</a>.' },
        { q: 'استبدال محرك قديم؟', a: 'صورة اللوحة والشفة. <a href="/pages/gamak">Gamak</a>.' },
        { q: 'مع VEGA في طلب واحد؟', a: 'نعم. <a href="/pages/articles/industrial-trade-iran">التجارة الصناعية</a>.' }
      ]
    },
    related: [
      { title: loc('کاتالوگ Gamak', 'Gamak kataloğu', 'Gamak catalogue', 'Каталог Gamak', 'كتالوج Gamak'), url: '../gamak', desc: loc('سه‌فاز و IE3', 'Üç faz ve IE3', 'Three-phase and IE3', 'Три фазы и IE3', 'ثلاثي الطور وIE3') },
      { title: loc('بازرگانی صنعتی', 'Endüstriyel ticaret', 'Industrial trade', 'Промторговля', 'تجارة صناعية'), url: 'industrial-trade-iran', desc: loc('همه برندها', 'Tüm markalar', 'All brands', 'Все бренды', 'كل العلامات') },
      { title: loc('استعلام', 'Teklif', 'Quote', 'Запрос', 'استعلام'), url: '../contact?product=Gamak', desc: loc('پیش‌فاکتور', 'Proforma', 'Proforma', 'Проформа', 'فاتورة') }
    ],
    sources: [
      { href: 'https://www.gamak.com/en', label: loc('وبسایت رسمی Gamak', 'Resmi Gamak', 'Official Gamak', 'Официальный Gamak', 'Gamak الرسمي') }
    ],
    body: {
      fa: `
<p>کارخانه و تأسیسات ایران به موتور قابل‌اعتماد نیاز دارند. <strong>Gamak</strong> الکتروموتور صنعتی از ترکیه است — سه‌فاز، تک‌فاز، IE2/IE3/IE4. بیزدوار <a href="/pages/gamak">کاتالوگ اصل</a> را با پیش‌فاکتور فارسی تامین می‌کند.</p>
${fig('/assets/images/gamak/category-three-phase.webp', 'الکتروموتور سه‌فاز Gamak — کلاس IE2/IE3', 'توان kW، دور rpm و نوع فلنج را در استعلام اول بنویسید.')}
<h2 id="ch-who">برای چه کاربردی؟</h2>
<p>پمپ، فن، نوار نقاله، کمپرسور و جایگزینی موتور فرسوده روی خط موجود. اگر پلاک خوانا نیست نوع بار و ولتاژ کافی است.</p>
<h2 id="ch-spec">چه مشخصاتی بفرستید</h2>
<ul>
<li><strong>توان</strong> بر حسب kW و <strong>دور</strong> (۲/۴/۶ قطب)</li>
<li>فلنج <strong>B3 / B5 / B35</strong> و ولتاژ ۳۸۰ یا ۲۲۰ ولت</li>
<li>کلاس بهره‌وری IE2، IE3 یا IE4 — و در صورت نیاز Ex-proof</li>
<li>تعداد و عکس پلاک موتور فعلی</li>
</ul>
${fig('/assets/images/partners/gamak.svg', 'لوگوی Gamak — الکتروموتور صنعتی ترکیه', 'مشخصات ناقص هم قابل بررسی است — واحد فنی سری مناسب را پیشنهاد می‌دهد.')}
<h2 id="ch-buy">خرید در ایران</h2>
<ol>
<li>واتساپ یا <a href="/pages/contact?product=Gamak">فرم استعلام</a></li>
<li>پیشنهاد سری از <a href="/pages/gamak">کاتالوگ Gamak</a></li>
<li>پیش‌فاکتور شفاف — بدون قیمت مبهم</li>
<li>حمل تا پروژه ایران</li>
</ol>
<p>همین میز بازرگانی <a href="/pages/articles/industrial-trade-iran">VEGA و Prosense</a> را هم تامین می‌کند. استعلام: <a href="/pages/contact?product=Gamak">واتساپ Gamak</a>.</p>`,
      tr: `
<p>İran tesisleri güvenilir motor ister. <strong>Gamak</strong> — üç faz, IE2/IE3/IE4. Bizdavar orijinal <a href="/pages/gamak">katalog</a> tedarik eder.</p>
${fig('/assets/images/gamak/category-three-phase.webp', 'Gamak üç faz motor', 'kW, rpm ve flanşı yazın.')}
<h2 id="ch-who">Hangi uygulama</h2>
<p>Pompa, fan, konveyör, kompresör, eski motor değişimi.</p>
<h2 id="ch-spec">Ne göndermelisiniz</h2>
<ul><li>kW ve rpm</li><li>B3/B5/B35, 380/220V</li><li>IE2/IE3/IE4, gerekirse Ex</li></ul>
<h2 id="ch-buy">İran’da alım</h2>
<p><a href="/pages/contact?product=Gamak">Teklif</a> · <a href="/pages/articles/industrial-trade-iran">Ticaret</a>.</p>`,
      en: `
<p>Iran plants need a reliable motor. <strong>Gamak</strong> is an industrial electric-motor line — three-phase, single-phase, IE2/IE3/IE4. Bizdavar supplies the genuine <a href="/pages/gamak">catalogue</a> with a Persian proforma.</p>
${fig('/assets/images/gamak/category-three-phase.webp', 'Gamak three-phase asynchronous motor — IE2/IE3', 'Put kW, rpm and flange type in the first inquiry.')}
<h2 id="ch-who">Which duty</h2>
<p>Pumps, fans, conveyors, compressors and drop-in replacement of a worn motor. If the nameplate is unreadable, load type and voltage are enough to start.</p>
<h2 id="ch-spec">What to send</h2>
<ul>
<li><strong>kW</strong> and <strong>rpm</strong> (2/4/6 pole)</li>
<li>Flange <strong>B3 / B5 / B35</strong> and 380 V or 220 V</li>
<li>IE2, IE3 or IE4 — Ex-proof if required</li>
<li>Quantity and a photo of the current nameplate</li>
</ul>
${fig('/assets/images/partners/gamak.svg', 'Gamak logo — industrial electric motors', 'Partial specs still work — engineering will propose a series.')}
<h2 id="ch-buy">Buying in Iran</h2>
<ol><li>WhatsApp or the <a href="/pages/contact?product=Gamak">form</a></li><li>Series from the <a href="/pages/gamak">Gamak catalogue</a></li><li>Clear proforma</li><li>Freight to the Iran site</li></ol>
<p>Same desk as <a href="/pages/articles/industrial-trade-iran">VEGA and Prosense</a>. Quote: <a href="/pages/contact?product=Gamak">Gamak WhatsApp</a>.</p>`,
      ru: `
<p>Заводам в Иране нужен надёжный мотор. <strong>Gamak</strong> — три фазы, IE2/IE3/IE4. Bizdavar поставляет оригинальный <a href="/pages/gamak">каталог</a>.</p>
${fig('/assets/images/gamak/category-three-phase.webp', 'Трёхфазный двигатель Gamak', 'Укажите кВт, об/мин и фланец.')}
<h2 id="ch-who">Какая нагрузка</h2>
<p>Насос, вентилятор, конвейер, замена старого мотора.</p>
<h2 id="ch-spec">Что прислать</h2>
<ul><li>кВт и об/мин</li><li>B3/B5/B35, 380/220 В</li><li>IE2/IE3/IE4</li></ul>
<h2 id="ch-buy">Покупка в Иране</h2>
<p><a href="/pages/contact?product=Gamak">Запрос</a>.</p>`,
      ar: `
<p>مصانع إيران تحتاج محركاً موثوقاً. <strong>Gamak</strong> — ثلاثي الطور وIE2/IE3/IE4. بيزدوار يورّد <a href="/pages/gamak">الكتالوج</a> الأصلي.</p>
${fig('/assets/images/gamak/category-three-phase.webp', 'محرك Gamak ثلاثي الطور', 'اكتبوا القدرة والسرعة والشفة.')}
<h2 id="ch-who">أي تطبيق</h2>
<p>مضخة ومروحة وسير واستبدال محرك قديم.</p>
<h2 id="ch-spec">ماذا ترسلون</h2>
<ul><li>كيلوواط ولفة</li><li>B3/B5/B35 و٣٨٠ أو ٢٢٠ فولت</li><li>IE2/IE3/IE4</li></ul>
<h2 id="ch-buy">الشراء في إيران</h2>
<p><a href="/pages/contact?product=Gamak">استعلام</a>.</p>`
    }
  },
  {
    file: 'buy-digi-system-iran.html',
    slug: 'buy-digi-system-iran',
    seoKey: 'articleBuyDigiIran',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
    extraImg: 'assets/images/partners/digi-system.svg',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'خرید ترازو و POS Digi System در ایران — فروشگاه و صندوق',
      'İran’da Digi System terazi ve POS — mağaza ve kasa',
      'Buy Digi System scales and POS in Iran — store and checkout',
      'Купить весы и POS Digi System в Иране — магазин и касса',
      'شراء موازين وPOS من Digi System في إيران — المتجر والصندوق'
    ),
    description: loc(
      'چطور ترازو و صندوق Digi System اصل برای سوپرمارکت و فروشگاه ایران بخرید: نوع فروشگاه، تعداد صندوق و نیاز ترازوی قانونی — پیش‌فاکتور فارسی.',
      'Orijinal Digi System terazi ve POS: mağaza türü, kasa sayısı, onaylı terazi — Farsça proforma.',
      'How to buy genuine Digi System scales and POS for Iran stores: store type, checkout count and legal-for-trade needs — Persian proforma.',
      'Как купить оригинальные весы и POS Digi для магазинов Ирана: тип магазина и число касс.',
      'كيف تشتري موازين وPOS أصلية من Digi لمتاجر إيران: نوع المتجر وعدد الصناديق.'
    ),
    keywords: loc(
      'خرید ترازو Digi ایران, POS دیجی سیستم, ترازوی فروشگاهی, بیزدوار',
      'Digi System terazi İran, POS, mağaza terazisi, Bizdavar',
      'buy Digi System Iran, retail scale POS, Bizdavar',
      'купить Digi System Иран, весы POS, Bizdavar',
      'شراء Digi System إيران, ميزان POS, بيزدوار'
    ),
    tags: loc(
      ['Digi System', 'ترازو', 'POS', 'ایران'],
      ['Digi System', 'Terazi', 'POS', 'İran'],
      ['Digi System', 'Scale', 'POS', 'Iran'],
      ['Digi System', 'Весы', 'POS', 'Иран'],
      ['Digi System', 'ميزان', 'POS', 'إيران']
    ),
    toc: {
      fa: [['ch-who', 'برای چه فروشگاهی'], ['ch-spec', 'چه اطلاعاتی بفرستید'], ['ch-buy', 'خرید در ایران'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Hangi mağaza'], ['ch-spec', 'Ne göndermelisiniz'], ['ch-buy', 'İran’da alım'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Which store'], ['ch-spec', 'What to send'], ['ch-buy', 'Buying in Iran'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Какой магазин'], ['ch-spec', 'Что прислать'], ['ch-buy', 'Покупка в Иране'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'أي متجر'], ['ch-spec', 'ماذا ترسلون'], ['ch-buy', 'الشراء في إيران'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'قیمت ترازو روی سایت هست؟', a: 'خیر. قیمت به مدل، ظرفیت، تعداد صندوق و peripheral بستگی دارد. پیش‌فاکتور از <a href="/pages/contact?product=Digi%20System">واتساپ یا فرم</a>.' },
        { q: 'ترازوی قانونی (legal-for-trade) لازم است؟', a: 'اگر فروش به مشتری نهایی وزن‌محور است معمولاً بله. در استعلام بنویسید تا سری مناسب از <a href="/pages/digi-system">کاتالوگ Digi</a> پیشنهاد شود.' },
        { q: 'با Teraoka در یک سفارش؟', a: 'بله. ترازوی ترکیه و ژاپن یک نقطه تماس: <a href="/pages/articles/buy-teraoka-iran">خرید Teraoka</a>.' }
      ],
      tr: [
        { q: 'Fiyat sitede var mı?', a: 'Hayır. Modele bağlı. <a href="/pages/contact?product=Digi%20System">Teklif</a>.' },
        { q: 'Onaylı terazi?', a: 'Perakende tartım için genelde evet. <a href="/pages/digi-system">Digi</a>.' },
        { q: 'Teraoka ile aynı sipariş?', a: 'Evet. <a href="/pages/articles/buy-teraoka-iran">Teraoka</a>.' }
      ],
      en: [
        { q: 'Is the scale price on the site?', a: 'No. Price depends on model, capacity, checkout count and peripherals. Proforma via <a href="/pages/contact?product=Digi%20System">WhatsApp or the form</a>.' },
        { q: 'Do I need legal-for-trade?', a: 'Usually yes for customer-facing weigh-and-sell. Say so in the inquiry — we pick from the <a href="/pages/digi-system">Digi catalogue</a>.' },
        { q: 'Same order as Teraoka?', a: 'Yes. One desk: <a href="/pages/articles/buy-teraoka-iran">buy Teraoka</a>.' }
      ],
      ru: [
        { q: 'Цена на сайте?', a: 'Нет. Зависит от модели. <a href="/pages/contact?product=Digi%20System">Запрос</a>.' },
        { q: 'Нужны торговые весы?', a: 'Для продажи на вес — обычно да. <a href="/pages/digi-system">Digi</a>.' },
        { q: 'В одном заказе с Teraoka?', a: 'Да. <a href="/pages/articles/buy-teraoka-iran">Teraoka</a>.' }
      ],
      ar: [
        { q: 'هل السعر على الموقع؟', a: 'لا. يعتمد على الموديل. <a href="/pages/contact?product=Digi%20System">استعلام</a>.' },
        { q: 'ميزان قانوني للبيع؟', a: 'غالباً نعم للبيع بالوزن. <a href="/pages/digi-system">Digi</a>.' },
        { q: 'مع Teraoka في طلب واحد؟', a: 'نعم. <a href="/pages/articles/buy-teraoka-iran">Teraoka</a>.' }
      ]
    },
    related: [
      { title: loc('کاتالوگ Digi', 'Digi kataloğu', 'Digi catalogue', 'Каталог Digi', 'كتالوج Digi'), url: '../digi-system', desc: loc('ترازو و POS', 'Terazi ve POS', 'Scales and POS', 'Весы и POS', 'موازين وPOS') },
      { title: loc('خرید Teraoka', 'Teraoka satın al', 'Buy Teraoka', 'Купить Teraoka', 'شراء Teraoka'), url: 'buy-teraoka-iran', desc: loc('ترازو ژاپن', 'Japon terazi', 'Japanese scales', 'Японские весы', 'موازين يابانية') },
      { title: loc('استعلام', 'Teklif', 'Quote', 'Запрос', 'استعلام'), url: '../contact?product=Digi%20System', desc: loc('پیش‌فاکتور', 'Proforma', 'Proforma', 'Проформа', 'فاتورة') }
    ],
    sources: [
      { href: 'https://www.digisystem.com.tr/', label: loc('وبسایت رسمی Digi System', 'Resmi Digi System', 'Official Digi System', 'Официальный Digi System', 'Digi System الرسمي') }
    ],
    body: {
      fa: `
<p>سوپرمارکت، قصابی و هایپر ایران به ترازو و صندوق قابل‌اعتماد نیاز دارند. <strong>Digi System</strong> ترازوی فروشگاهی، POS و برچسب‌زن از ترکیه است. بیزدوار <a href="/pages/digi-system">کاتالوگ اصل</a> را با پیش‌فاکتور فارسی تامین می‌کند.</p>
${fig('/assets/images/digi-system/hero/digi-retail-hero.webp', 'ترازو و صندوق Digi System برای خرده‌فروشی', 'نوع فروشگاه و تعداد صندوق را در استعلام اول بنویسید.')}
<h2 id="ch-who">برای چه فروشگاهی؟</h2>
<p>سوپرمارکت، میوه‌فروشی، قصابی، لبنیات و رستوران/هتل. سری‌های پرتقاضا در کاتالوگ: SM-6000، SM-5300، W5600SRX و LX5600. مدل دقیق را واحد فنی بعد از استعلام پیشنهاد می‌دهد.</p>
<h2 id="ch-spec">چه اطلاعاتی بفرستید</h2>
<ul>
<li>نوع فروشگاه و <strong>تعداد صندوق</strong></li>
<li>نیاز به ترازوی <strong>قانونی (legal-for-trade)</strong> — بله یا خیر</li>
<li>ظرفیت وزن و اگر هست عکس ترازوی فعلی</li>
<li>POS، پرینتر برچسب یا فقط ترازو</li>
</ul>
${fig('/assets/images/partners/digi-system.svg', 'لوگوی Digi System — ترازو و POS ترکیه', 'مشخصات ناقص هم قابل بررسی است.')}
<h2 id="ch-buy">خرید در ایران</h2>
<ol>
<li>واتساپ یا <a href="/pages/contact?product=Digi%20System">فرم استعلام</a></li>
<li>پیشنهاد سری از <a href="/pages/digi-system">کاتالوگ Digi</a></li>
<li>پیش‌فاکتور شفاف — بدون قیمت مبهم روی سایت</li>
<li>حمل تا فروشگاه یا انبار ایران</li>
</ol>
<p>ترازوی ژاپن هم از همین میز: <a href="/pages/articles/buy-teraoka-iran">خرید Teraoka</a>. استعلام: <a href="/pages/contact?product=Digi%20System">واتساپ Digi</a>.</p>`,
      tr: `
<p>İran marketleri güvenilir terazi ve kasa ister. <strong>Digi System</strong> — Türkiye perakende. Bizdavar orijinal <a href="/pages/digi-system">katalog</a> tedarik eder.</p>
${fig('/assets/images/digi-system/hero/digi-retail-hero.webp', 'Digi System perakende terazi', 'Mağaza türü ve kasa sayısını yazın.')}
<h2 id="ch-who">Hangi mağaza</h2>
<p>Market, kasap, manav, HORECA. SM-6000, SM-5300, W5600SRX.</p>
<h2 id="ch-spec">Ne göndermelisiniz</h2>
<ul><li>Mağaza türü ve kasa sayısı</li><li>Onaylı terazi evet/hayır</li><li>Kapasite ve mevcut etiket fotoğrafı</li></ul>
<h2 id="ch-buy">İran’da alım</h2>
<p><a href="/pages/contact?product=Digi%20System">Teklif</a> · <a href="/pages/articles/buy-teraoka-iran">Teraoka</a>.</p>`,
      en: `
<p>Iran stores need a reliable scale and checkout. <strong>Digi System</strong> is a Turkey retail line — PC scales, POS and label printers. Bizdavar supplies the genuine <a href="/pages/digi-system">catalogue</a> with a Persian proforma.</p>
${fig('/assets/images/digi-system/hero/digi-retail-hero.webp', 'Digi System retail scale and checkout', 'Put store type and checkout count in the first inquiry.')}
<h2 id="ch-who">Which store</h2>
<p>Supermarket, butcher, greengrocer, dairy and HORECA. High-demand series on the catalogue include SM-6000, SM-5300, W5600SRX and LX5600. Engineering picks the exact model after the inquiry.</p>
<h2 id="ch-spec">What to send</h2>
<ul>
<li>Store type and <strong>checkout count</strong></li>
<li>Need for a <strong>legal-for-trade</strong> scale — yes or no</li>
<li>Weighing capacity and a photo of the current scale if you have one</li>
<li>POS, label printer, or scale only</li>
</ul>
${fig('/assets/images/partners/digi-system.svg', 'Digi System logo — retail scales and POS', 'Partial specs still work.')}
<h2 id="ch-buy">Buying in Iran</h2>
<ol><li>WhatsApp or the <a href="/pages/contact?product=Digi%20System">form</a></li><li>Series from the <a href="/pages/digi-system">Digi catalogue</a></li><li>Clear proforma</li><li>Freight to the Iran store or warehouse</li></ol>
<p>Japanese scales from the same desk: <a href="/pages/articles/buy-teraoka-iran">buy Teraoka</a>. Quote: <a href="/pages/contact?product=Digi%20System">Digi WhatsApp</a>.</p>`,
      ru: `
<p>Магазинам в Иране нужны надёжные весы и касса. <strong>Digi System</strong> — розница из Турции. Bizdavar поставляет оригинальный <a href="/pages/digi-system">каталог</a>.</p>
${fig('/assets/images/digi-system/hero/digi-retail-hero.webp', 'Весы Digi System', 'Укажите тип магазина и число касс.')}
<h2 id="ch-who">Какой магазин</h2>
<p>Супермаркет, мясо, овощи, HORECA. SM-6000, SM-5300, W5600SRX.</p>
<h2 id="ch-spec">Что прислать</h2>
<ul><li>Тип магазина и число касс</li><li>Торговые весы да/нет</li><li>Грузоподъёмность</li></ul>
<h2 id="ch-buy">Покупка в Иране</h2>
<p><a href="/pages/contact?product=Digi%20System">Запрос</a>.</p>`,
      ar: `
<p>متاجر إيران تحتاج ميزاناً وصندوقاً موثوقين. <strong>Digi System</strong> — تجزئة من تركيا. بيزدوار يورّد <a href="/pages/digi-system">الكتالوج</a> الأصلي.</p>
${fig('/assets/images/digi-system/hero/digi-retail-hero.webp', 'ميزان Digi System للتجزئة', 'اكتبوا نوع المتجر وعدد الصناديق.')}
<h2 id="ch-who">أي متجر</h2>
<p>سوبرماركت وجزارة وخضار وHORECA. SM-6000 وSM-5300 وW5600SRX.</p>
<h2 id="ch-spec">ماذا ترسلون</h2>
<ul><li>نوع المتجر وعدد الصناديق</li><li>ميزان قانوني نعم/لا</li><li>السعة</li></ul>
<h2 id="ch-buy">الشراء في إيران</h2>
<p><a href="/pages/contact?product=Digi%20System">استعلام</a>.</p>`
    }
  },
  {
    file: 'buy-teraoka-iran.html',
    slug: 'buy-teraoka-iran',
    seoKey: 'articleBuyTeraokaIran',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/teraoka/hero/teraoka-retail-hero.webp',
    extraImg: 'assets/images/partners/teraoka.svg',
    category: loc('تجهیزات صنعتی', 'Endüstriyel ekipman', 'Industrial equipment', 'Промоборудование', 'معدات صناعية'),
    title: loc(
      'خرید ترازو Teraoka در ایران — deli، POS و برچسب‌زن',
      'İran’da Teraoka terazi — deli, POS, etiketleme',
      'Buy Teraoka scales in Iran — deli, POS and labeling',
      'Купить весы Teraoka в Иране — deli, POS, этикетка',
      'شراء موازين Teraoka في إيران — دلّي وPOS وملصقات'
    ),
    description: loc(
      'چطور ترازو و برچسب‌زن اصل Teraoka Seiko برای فروشگاه و آشپزخانه ایران بخرید: نوع ترازو، ظرفیت و تعداد صندوق — پیش‌فاکتور فارسی.',
      'Orijinal Teraoka Seiko: terazi türü, kapasite, kasa sayısı — Farsça proforma.',
      'How to buy genuine Teraoka Seiko scales and labelers for Iran stores and kitchens: scale type, capacity and checkout count — Persian proforma.',
      'Как купить оригинальные весы Teraoka для магазинов Ирана: тип, грузоподъёмность, число касс.',
      'كيف تشتري موازين Teraoka أصلية لمتاجر إيران: النوع والسعة وعدد الصناديق.'
    ),
    keywords: loc(
      'خرید ترازو Teraoka ایران, تراوکا سیکو, ترازوی دلی, بیزدوار',
      'Teraoka terazi İran, Teraoka Seiko, deli terazi, Bizdavar',
      'buy Teraoka Iran, Teraoka Seiko scale, deli scale, Bizdavar',
      'купить Teraoka Иран, весы Seiko, Bizdavar',
      'شراء Teraoka إيران, ميزان Seiko, بيزدوار'
    ),
    tags: loc(
      ['Teraoka', 'ترازو', 'POS', 'ایران'],
      ['Teraoka', 'Terazi', 'POS', 'İran'],
      ['Teraoka', 'Scale', 'POS', 'Iran'],
      ['Teraoka', 'Весы', 'POS', 'Иран'],
      ['Teraoka', 'ميزان', 'POS', 'إيران']
    ),
    toc: {
      fa: [['ch-who', 'برای چه کاربردی'], ['ch-spec', 'چه اطلاعاتی بفرستید'], ['ch-buy', 'خرید در ایران'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Hangi kullanım'], ['ch-spec', 'Ne göndermelisiniz'], ['ch-buy', 'İran’da alım'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Which duty'], ['ch-spec', 'What to send'], ['ch-buy', 'Buying in Iran'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Какая задача'], ['ch-spec', 'Что прислать'], ['ch-buy', 'Покупка в Иране'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'أي استخدام'], ['ch-spec', 'ماذا ترسلون'], ['ch-buy', 'الشراء في إيران'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'قیمت Teraoka روی سایت هست؟', a: 'خیر. قیمت به سری، ظرفیت و peripheral بستگی دارد. پیش‌فاکتور از <a href="/pages/contact?product=Teraoka">واتساپ یا فرم</a>.' },
        { q: 'با Digi فرق دارد؟', a: 'Digi خط ترکیه است؛ Teraoka خط ژاپن. هر دو از یک میز استعلام می‌شوند. مقایسه: <a href="/pages/articles/buy-digi-system-iran">خرید Digi</a> و <a href="/pages/teraoka">کاتالوگ Teraoka</a>.' },
        { q: 'برای delicatessen کدام سری؟', a: 'نوع پیشخوان و ظرفیت را بفرستید — سری مناسب بعد از استعلام مشخص می‌شود. کاتالوگ: <a href="/pages/teraoka">Teraoka</a>.' }
      ],
      tr: [
        { q: 'Fiyat sitede var mı?', a: 'Hayır. <a href="/pages/contact?product=Teraoka">Teklif</a>.' },
        { q: 'Digi’den farkı?', a: 'Digi Türkiye, Teraoka Japonya. <a href="/pages/articles/buy-digi-system-iran">Digi</a>.' },
        { q: 'Deli tezgâhı?', a: 'Kapasiteyi yazın. <a href="/pages/teraoka">Teraoka</a>.' }
      ],
      en: [
        { q: 'Is the Teraoka price on the site?', a: 'No. Price depends on series, capacity and peripherals. Proforma via <a href="/pages/contact?product=Teraoka">WhatsApp or the form</a>.' },
        { q: 'How is it different from Digi?', a: 'Digi is the Turkey line; Teraoka is the Japan line. Same quote desk. Compare: <a href="/pages/articles/buy-digi-system-iran">buy Digi</a> and the <a href="/pages/teraoka">Teraoka catalogue</a>.' },
        { q: 'Which series for a deli counter?', a: 'Send counter type and capacity — engineering picks after the inquiry. Catalogue: <a href="/pages/teraoka">Teraoka</a>.' }
      ],
      ru: [
        { q: 'Цена на сайте?', a: 'Нет. <a href="/pages/contact?product=Teraoka">Запрос</a>.' },
        { q: 'Чем отличается от Digi?', a: 'Digi — Турция, Teraoka — Япония. <a href="/pages/articles/buy-digi-system-iran">Digi</a>.' },
        { q: 'Для deli?', a: 'Напишите грузоподъёмность. <a href="/pages/teraoka">Teraoka</a>.' }
      ],
      ar: [
        { q: 'هل السعر على الموقع؟', a: 'لا. <a href="/pages/contact?product=Teraoka">استعلام</a>.' },
        { q: 'الفرق عن Digi؟', a: 'Digi من تركيا وTeraoka من اليابان. <a href="/pages/articles/buy-digi-system-iran">Digi</a>.' },
        { q: 'لكاونتر الدلّي؟', a: 'اكتبوا السعة. <a href="/pages/teraoka">Teraoka</a>.' }
      ]
    },
    related: [
      { title: loc('کاتالوگ Teraoka', 'Teraoka kataloğu', 'Teraoka catalogue', 'Каталог Teraoka', 'كتالوج Teraoka'), url: '../teraoka', desc: loc('ترازو و برچسب', 'Terazi ve etiket', 'Scales and labels', 'Весы и этикетка', 'موازين وملصقات') },
      { title: loc('خرید Digi', 'Digi satın al', 'Buy Digi', 'Купить Digi', 'شراء Digi'), url: 'buy-digi-system-iran', desc: loc('ترازو ترکیه', 'Türkiye terazi', 'Turkey scales', 'Весы из Турции', 'موازين تركيا') },
      { title: loc('استعلام', 'Teklif', 'Quote', 'Запрос', 'استعلام'), url: '../contact?product=Teraoka', desc: loc('پیش‌فاکتور', 'Proforma', 'Proforma', 'Проформа', 'فاتورة') }
    ],
    sources: [
      { href: 'https://www.teraokaseiko.com/', label: loc('وبسایت رسمی Teraoka Seiko', 'Resmi Teraoka Seiko', 'Official Teraoka Seiko', 'Официальный Teraoka Seiko', 'Teraoka Seiko الرسمي') }
    ],
    body: {
      fa: `
<p>فروشگاه مواد غذایی و آشپزخانه صنعتی ایران گاهی ترازو و برچسب‌زن با استاندارد خرده‌فروشی می‌خواهد. <strong>Teraoka Seiko</strong> خط ژاپن است — ترازوی فروشگاهی، deli، POS و لیبل. بیزدوار <a href="/pages/teraoka">کاتالوگ اصل</a> را با پیش‌فاکتور فارسی تامین می‌کند.</p>
${fig('/assets/images/teraoka/hero/teraoka-retail-hero.webp', 'ترازو و تجهیزات خرده‌فروشی Teraoka Seiko', 'نوع ترازو، ظرفیت و تعداد صندوق را در استعلام اول بنویسید.')}
<h2 id="ch-who">برای چه کاربردی؟</h2>
<p>پیشخوان delicatessen، صندوق فروشگاه، برچسب قیمت و ترازوی سرویس. سری‌های پرتقاضا در کاتالوگ: Luxeed L، DS-782، W5600SRX و LX5600. مدل دقیق بعد از استعلام مشخص می‌شود.</p>
<h2 id="ch-spec">چه اطلاعاتی بفرستید</h2>
<ul>
<li>نوع ترازو: فروشگاهی، deli، صنعتی یا پرتابل</li>
<li><strong>ظرفیت</strong> و تعداد صندوق / پیشخوان</li>
<li>نیاز به برچسب‌زن یا POS یکپارچه</li>
<li>عکس پلاک یا مدل فعلی اگر تعویض است</li>
</ul>
${fig('/assets/images/partners/teraoka.svg', 'لوگوی Teraoka Seiko — ترازو و POS ژاپن', 'مشخصات ناقص هم قابل بررسی است.')}
<h2 id="ch-buy">خرید در ایران</h2>
<ol>
<li>واتساپ یا <a href="/pages/contact?product=Teraoka">فرم استعلام</a></li>
<li>پیشنهاد سری از <a href="/pages/teraoka">کاتالوگ Teraoka</a></li>
<li>پیش‌فاکتور شفاف — بدون قیمت مبهم روی سایت</li>
<li>حمل بین‌المللی تا ایران</li>
</ol>
<p>خط ترکیه از همین میز: <a href="/pages/articles/buy-digi-system-iran">خرید Digi System</a>. استعلام: <a href="/pages/contact?product=Teraoka">واتساپ Teraoka</a>.</p>`,
      tr: `
<p>İran gıda mağazaları Japon terazi ve etiketleme ister. <strong>Teraoka Seiko</strong> — deli, POS, etiket. Bizdavar orijinal <a href="/pages/teraoka">katalog</a> tedarik eder.</p>
${fig('/assets/images/teraoka/hero/teraoka-retail-hero.webp', 'Teraoka perakende terazi', 'Terazi türü ve kapasiteyi yazın.')}
<h2 id="ch-who">Hangi kullanım</h2>
<p>Deli tezgâhı, kasa, etiket, servis terazisi. Luxeed L, DS-782, W5600SRX.</p>
<h2 id="ch-spec">Ne göndermelisiniz</h2>
<ul><li>Terazi türü</li><li>Kapasite ve kasa sayısı</li><li>Etiket / POS ihtiyacı</li></ul>
<h2 id="ch-buy">İran’da alım</h2>
<p><a href="/pages/contact?product=Teraoka">Teklif</a> · <a href="/pages/articles/buy-digi-system-iran">Digi</a>.</p>`,
      en: `
<p>Iran food stores and commercial kitchens often need a retail-grade scale and labeler. <strong>Teraoka Seiko</strong> is the Japan line — shop scales, deli, POS and labeling. Bizdavar supplies the genuine <a href="/pages/teraoka">catalogue</a> with a Persian proforma.</p>
${fig('/assets/images/teraoka/hero/teraoka-retail-hero.webp', 'Teraoka Seiko retail scales and labeling', 'Put scale type, capacity and checkout count in the first inquiry.')}
<h2 id="ch-who">Which duty</h2>
<p>Deli counter, store checkout, price labeling and service scales. High-demand series on the catalogue include Luxeed L, DS-782, W5600SRX and LX5600. Engineering picks the exact model after the inquiry.</p>
<h2 id="ch-spec">What to send</h2>
<ul>
<li>Scale type: retail, deli, industrial or portable</li>
<li><strong>Capacity</strong> and checkout / counter count</li>
<li>Need for a labeler or integrated POS</li>
<li>Nameplate photo or current model if this is a replacement</li>
</ul>
${fig('/assets/images/partners/teraoka.svg', 'Teraoka Seiko logo — Japanese scales and POS', 'Partial specs still work.')}
<h2 id="ch-buy">Buying in Iran</h2>
<ol><li>WhatsApp or the <a href="/pages/contact?product=Teraoka">form</a></li><li>Series from the <a href="/pages/teraoka">Teraoka catalogue</a></li><li>Clear proforma</li><li>International freight to Iran</li></ol>
<p>Turkey line from the same desk: <a href="/pages/articles/buy-digi-system-iran">buy Digi System</a>. Quote: <a href="/pages/contact?product=Teraoka">Teraoka WhatsApp</a>.</p>`,
      ru: `
<p>Продовольственным магазинам в Иране нужны японские весы и этикетка. <strong>Teraoka Seiko</strong> — deli, POS, этикетка. Bizdavar поставляет оригинальный <a href="/pages/teraoka">каталог</a>.</p>
${fig('/assets/images/teraoka/hero/teraoka-retail-hero.webp', 'Весы Teraoka', 'Укажите тип и грузоподъёмность.')}
<h2 id="ch-who">Какая задача</h2>
<p>Deli, касса, этикетка. Luxeed L, DS-782, W5600SRX.</p>
<h2 id="ch-spec">Что прислать</h2>
<ul><li>Тип весов</li><li>Грузоподъёмность и число касс</li><li>Этикетка / POS</li></ul>
<h2 id="ch-buy">Покупка в Иране</h2>
<p><a href="/pages/contact?product=Teraoka">Запрос</a>.</p>`,
      ar: `
<p>متاجر الغذاء في إيران تحتاج موازين وملصقات يابانية. <strong>Teraoka Seiko</strong> — دلّي وPOS وملصقات. بيزدوار يورّد <a href="/pages/teraoka">الكتالوج</a> الأصلي.</p>
${fig('/assets/images/teraoka/hero/teraoka-retail-hero.webp', 'موازين Teraoka للتجزئة', 'اكتبوا نوع الميزان والسعة.')}
<h2 id="ch-who">أي استخدام</h2>
<p>كاونتر دلّي وصندوق وملصقات. Luxeed L وDS-782 وW5600SRX.</p>
<h2 id="ch-spec">ماذا ترسلون</h2>
<ul><li>نوع الميزان</li><li>السعة وعدد الصناديق</li><li>ملصق أو POS</li></ul>
<h2 id="ch-buy">الشراء في إيران</h2>
<p><a href="/pages/contact?product=Teraoka">استعلام</a>.</p>`
    }
  }
];
