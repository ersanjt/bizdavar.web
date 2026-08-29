/**
 * Fast Web Studio — plans, timeline, FAQ
 */
window.FAST_CATALOG = {
  brand: {
    name: 'Fast Web Studio',
    eyebrow: 'محصول اختصاصی بیزدوار گروپ',
    headline: 'طراحی سایت حرفه‌ای در ۵ روز — بازار اروپا و آمریکا',
    subtitle: 'همین هفته آنلاین شو — فاکتور دلار یا یورو، از ۹۹ دلار / حدود ۹۰ یورو',
    description: 'Fast Web Studio سایت انگلیسی LTR با Stripe/PayPal، فرم تماس و هاست بین‌المللی (Netinode) برای استارتاپ و SMB اروپا و آمریکا می‌سازد. نسخه فارسی/RTL هم به‌عنوان زبان دوم در دسترس است.',
    domain: 'bizdavar.com'
  },

  trustSignals: [
    { icon: 'bolt', label: 'تحویل ۵ روزه', desc: 'جلسه Zoom / Meet یا واتساپ با زمان‌بندی روزانه' },
    { icon: 'coin', label: 'از $99 / ~€90', desc: 'پلن پایه — فاکتور دلار یا یورو' },
    { icon: 'globe', label: 'آمریکا و اروپا', desc: 'سایت انگلیسی، Stripe و همپوشانی CET/EST' },
    { icon: 'whatsapp', label: 'هاست GDPR', desc: 'زیرساخت بین‌المللی از Netinode' }
  ],

  plans: [
    {
      id: 'basic',
      name: 'پلن پایه',
      subtitle: 'استارتاپ‌ها و کسب‌وکارهای تازه‌کار',
      oldPrice: 199,
      price: 99,
      accent: 'green',
      visual: 'landing',
      featured: false,
      features: [
        'سایت تک‌صفحه‌ای شرکتی',
        'طراحی ریسپانسیو موبایل',
        'فرم تماس حرفه‌ای',
        'دکمه واتساپ مستقیم',
        'اتصال اینستاگرام / لینکدین',
        'SSL و هاست اولیه — <a href="https://netinohost.com/" target="_blank" rel="noopener noreferrer">Netino Host</a> (ایران) یا <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a> (بین‌الملل)',
        'آموزش ویدیویی مدیریت'
      ]
    },
    {
      id: 'store',
      name: 'پلن فروشگاهی',
      subtitle: 'فروش آنلاین با چند محصول',
      oldPrice: 399,
      price: 199,
      accent: 'orange',
      visual: 'store',
      featured: false,
      features: [
        'همه امکانات پلن پایه',
        'فروشگاه WooCommerce',
        'ثبت ۵ محصول اولیه',
        'دسته‌بندی و برچسب',
        'سبد خرید و تسویه پایه',
        'آموزش مدیریت فروشگاه',
        'سئو پایه صفحات محصول'
      ]
    },
    {
      id: 'pro',
      name: 'پلن حرفه‌ای',
      subtitle: 'برندهایی که می‌خواهند رشد کنند',
      oldPrice: 599,
      price: 299,
      accent: 'blue',
      visual: 'pro',
      featured: true,
      ribbon: 'محبوب‌ترین',
      features: [
        'همه امکانات پلن فروشگاهی',
        'طراحی اختصاصی UI',
        'تا ۱۵ صفحه + بلاگ',
        'درگاه پرداخت بین‌المللی',
        'چت آنلاین / واتساپ ویجت',
        'سئو پایه + Google Analytics',
        '۱ ماه پشتیبانی رایگان'
      ]
    }
  ],

  compareRows: [
    { feature: 'تعداد صفحات', basic: '۱ صفحه', store: 'تا ۵', pro: 'تا ۱۵ + بلاگ' },
    { feature: 'فروشگاه WooCommerce', basic: '—', store: '۵ محصول', pro: 'کامل + درگاه' },
    { feature: 'فرم تماس + واتساپ', basic: true, store: true, pro: true },
    { feature: 'طراحی اختصاصی', basic: 'قالب', store: 'نیمه‌سفارشی', pro: 'اختصاصی' },
    { feature: 'سئو پایه', basic: '—', store: 'محصولات', pro: 'کامل' },
    { feature: 'پشتیبانی پس از تحویل', basic: '۱ هفته', store: '۲ هفته', pro: '۱ ماه' },
    { feature: 'زمان تحویل', basic: '۵ روز', store: '۵ روز', pro: '۵–۷ روز' }
  ],

  timeline: [
    { num: '۱', title: 'روز اول — جمع‌آوری', desc: 'جلسه Zoom / Meet یا واتساپ، دریافت لوگو، رنگ برند، متن انگلیسی و نمونه‌های مورد علاقه.' },
    { num: '۲', title: 'روز دوم — طراحی', desc: 'طراحی صفحه اصلی و ساختار سایت. تأیید شما قبل از توسعه.' },
    { num: '۳', title: 'روز سوم — توسعه', desc: 'کدنویسی، فرم تماس، واتساپ و اتصال شبکه‌های اجتماعی.' },
    { num: '۴', title: 'روز چهارم — فروشگاه', desc: 'در پلن‌های فروشگاهی: محصولات، درگاه و تست خرید.' },
    { num: '۵', title: 'روز پنجم — تحویل', desc: 'آموزش مدیریت، انتقال دامنه و راه‌اندازی نهایی آنلاین.' }
  ],

  audiences: [
    { icon: 'rocket', title: 'استارتاپ آمریکا و SaaS', desc: 'یک صفحه انگلیسی، فرم تماس و Stripe — همین هفته آنلاین، فاکتور USD.' },
    { icon: 'bag', title: 'SMB اروپا', desc: 'سایت شرکتی انگلیسی (و زبان محلی در صورت نیاز)، فاکتور EUR، هاست Netinode.' },
    { icon: 'building', title: 'فروشگاه دلاری / یورویی', desc: 'WooCommerce، چند محصول اولیه و تسویه Stripe/PayPal.' },
    { icon: 'globe', title: 'سرریز آژانس US/EU', desc: 'تحویل ۵روزه با برند شما یا بیزدوار وقتی استودیو پر است.' },
    { icon: 'monitor', title: 'هاستینگ، SaaS و پلتفرم', desc: 'فروش هاست، VPS یا پنل — مثل netinohost.com؛ با Fast یا طراحی اختصاصی بیزدوار.' }
  ],

  whyChoose: [
    { icon: 'bolt', title: 'سرعت واقعی', desc: 'نه وعده مبهم — هر روز گزارش در Zoom، Meet یا واتساپ.' },
    { icon: 'palette', title: 'انگلیسی‌اول برای US/EU', desc: 'رابط LTR، موبایل‌فرست و Core Web Vitals — RTL به‌عنوان زبان دوم.' },
    { icon: 'handshake', title: 'پشتوانه بیزدوار', desc: '۱۲+ سال تجربه و ۱۰۰+ پروژه دیجیتال در ۱۱ کشور.' },
    { icon: 'toolbox', title: 'فاکتور دلار یا یورو', desc: 'کارت، PayPal یا حواله — ارز قبل از شروع مکتوب می‌شود.' }
  ],

  showcases: [
    { name: 'BZ Diamond', category: 'فروشگاه جواهرات', slug: 'pages/bz-diamond', internal: true, logo: 'assets/images/partners/zeddiamond.png' },
    { name: 'Marvispace', category: 'فروشگاه محصولات چرمی', slug: 'pages/marvispace', internal: true, logo: 'assets/images/partners/marvispace.svg' },
    { name: 'Supplify Trade', category: 'تجارت بین‌المللی B2B', slug: 'pages/supplify-trade', internal: true, logo: 'assets/images/partners/supplify-trade.svg' },
    { name: 'Kaya One AG', category: 'تجارت سوئیسی B2B', slug: 'pages/kaya-one', internal: true, logo: 'assets/images/partners/kaya-one.svg' },
    { name: 'SMM Turk', category: 'پنل SMM', slug: 'pages/smm-turk', internal: true, logo: 'assets/images/partners/smm-turk.svg' },
    { name: 'FXGuard Exchange', category: 'فین‌تک / تبادل ارز', slug: 'pages/fxguard-exchange', internal: true, logo: 'assets/images/partners/fxguard-exchange.svg' },
    { name: 'Netino Host', category: 'هاستینگ و میزبانی ابری', domain: 'netinohost.com', internal: false, logo: 'assets/images/partners/netinohost.png' },
    { name: 'Karen Leather', category: 'چرم و مد', domain: 'karenleather.com', internal: false, logo: 'assets/images/partners/karen-leather.png' },
    { name: 'Marvelous Holding', category: 'هلدینگ', domain: 'marvelousholding.com', internal: false, logo: 'assets/images/partners/marvelous-holding.png' },
    { name: 'NIK Aesthetic', category: 'کلینیک زیبایی', domain: 'nikaesthetic.com', internal: false, logo: 'assets/images/partners/nikaesthetic.png' },
    { name: 'Paparosi', category: 'برند تجاری', domain: 'paparosi.co', internal: false, logo: 'assets/images/partners/paparosi.png' },
    { name: 'Arian Pumps', category: 'B2B صنعتی', domain: 'arianpumps.com', internal: false, logo: 'assets/images/partners/arian-pumps.png' }
  ],

  faq: [
    { q: 'واقعاً در ۵ روز تحویل می‌دهید؟', a: 'بله — برای پلن پایه و فروشگاهی اگر متن و لوگو آماده باشد. پلن حرفه‌ای ممکن است ۵ تا ۷ روز طول بکشد. زمان را قبل از شروع در Zoom/Meet یا واتساپ تأیید می‌کنیم.' },
    { q: 'هاست و دامنه شامل قیمت است؟', a: 'هزینه طراحی و راه‌اندازی جداست. برای بازار ایران از <a href="https://netinohost.com/" target="_blank" rel="noopener noreferrer">Netino Host</a> و برای بین‌الملل از <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">فروشگاه Netinode</a> (معرفی: <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">netinode.net</a>) خرید کنید. در صورت نیاز راهنمایی می‌کنیم.' },
    { q: 'آیا می‌توانم بعداً سایت را گسترش دهم؟', a: 'بله. می‌توانید از پلن پایه شروع کنید و بعد به فروشگاهی یا حرفه‌ای ارتقا دهید. بیزدوار همان پروژه را ادامه می‌دهد.' },
    { q: 'پرداخت چگونه است؟', a: 'معمولاً ۵۰٪ شروع و ۵۰٪ قبل از لانچ — کارت، PayPal یا حواله به دلار یا یورو. ارز فاکتور را قبل از شروع مکتوب می‌کنیم.' },
    { q: 'برای مشتری اروپا و آمریکا هم کار می‌کنید؟', a: 'بله — این بازار اصلی Fast Studio است. سایت انگلیسی، فاکتور USD/EUR، همپوشانی CET/EST و هاست Netinode. نسخه فارسی/RTL به‌عنوان زبان دوم ممکن است.' },
    { q: 'تفاوت Fast با سفارش اختصاصی چیست؟', a: 'Fast برای راه‌اندازی سریع با قیمت ثابت است. پروژه‌های بزرگ‌تر (اپلیکیشن، پورتال B2B، چندزبانه پیچیده) از مسیر <a href="services#web-design">خدمات طراحی وب</a> پیش می‌روند.' }
  ]
};
