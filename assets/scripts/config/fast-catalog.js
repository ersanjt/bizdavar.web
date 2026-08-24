/**
 * Fast Web Studio — plans, timeline, FAQ
 */
window.FAST_CATALOG = {
  brand: {
    name: 'Fast Web Studio',
    eyebrow: 'محصول اختصاصی بیزدوار گروپ',
    headline: 'طراحی سایت حرفه‌ای در ۵ روز',
    subtitle: 'همین هفته آنلاین شو — از استارتاپ تا فروشگاه WooCommerce',
    description: 'Fast Web Studio راه‌اندازی سریع وبسایت RTL با فونت Vazirmatn، فرم تماس، واتساپ و پشتیبانی فارسی است. مناسب کسب‌وکارهای ایران، ترکیه و بازار بین‌المللی.',
    domain: 'bizdavar.com'
  },

  trustSignals: [
    { icon: 'bolt', label: 'تحویل ۵ روزه', desc: 'قرارداد شفاف با زمان‌بندی روزانه' },
    { icon: 'coin', label: 'از $99', desc: 'پلن پایه با تخفیف راه‌اندازی' },
    { icon: 'globe', label: 'RTL + چندزبانه', desc: 'فارسی، انگلیسی و ترکی' },
    { icon: 'whatsapp', label: 'واتساپ فارسی', desc: 'مشاوره و پیگیری مستقیم' }
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
        'SSL و هاست اولیه — <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">خرید دامنه و هاست (Netinode)</a>',
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
    { num: '۱', title: 'روز اول — جمع‌آوری', desc: 'تماس واتساپ، دریافت لوگو، رنگ برند، متن‌ها و نمونه‌های مورد علاقه.' },
    { num: '۲', title: 'روز دوم — طراحی', desc: 'طراحی صفحه اصلی و ساختار سایت. تأیید شما قبل از توسعه.' },
    { num: '۳', title: 'روز سوم — توسعه', desc: 'کدنویسی، فرم تماس، واتساپ و اتصال شبکه‌های اجتماعی.' },
    { num: '۴', title: 'روز چهارم — فروشگاه', desc: 'در پلن‌های فروشگاهی: محصولات، درگاه و تست خرید.' },
    { num: '۵', title: 'روز پنجم — تحویل', desc: 'آموزش مدیریت، انتقال دامنه و راه‌اندازی نهایی آنلاین.' }
  ],

  audiences: [
    { icon: 'rocket', title: 'استارتاپ و کسب‌وکار تازه‌کار', desc: 'یک صفحه معرفی، فرم تماس و واتساپ — همین هفته آنلاین شوید.' },
    { icon: 'bag', title: 'فروشگاه و برند محصول', desc: 'WooCommerce، چند محصول اولیه و مسیر خرید آماده تحویل.' },
    { icon: 'building', title: 'کلینیک، دفتر و خدمات محلی', desc: 'سایت اعتمادساز با موبایل‌فرست، نقشه و دکمه تماس مستقیم.' },
    { icon: 'globe', title: 'صادرات و برند چندزبانه', desc: 'RTL فارسی + انگلیسی/ترکی برای بازار ایران، ترکیه و بین‌الملل.' }
  ],

  whyChoose: [
    { icon: 'bolt', title: 'سرعت واقعی', desc: 'نه وعده مبهم — هر روز گزارش پیشرفت در واتساپ.' },
    { icon: 'palette', title: 'طراحی مدرن RTL', desc: 'فونت Vazirmatn، موبایل‌فرست و استاندارد دسترسی.' },
    { icon: 'handshake', title: 'پشتوانه بیزدوار', desc: '۱۲+ سال تجربه و ۱۰۰+ پروژه دیجیتال در ۱۱ کشور.' },
    { icon: 'toolbox', title: 'آموزش و پشتیبانی', desc: 'ویدیوی مدیریت سایت و پاسخگویی پس از تحویل.' }
  ],

  showcases: [
    { name: 'BZ Diamond', category: 'فروشگاه جواهرات', slug: 'pages/bz-diamond', internal: true, logo: 'assets/images/partners/zeddiamond.png' },
    { name: 'Supplify Trade', category: 'تجارت بین‌المللی B2B', slug: 'pages/supplify-trade', internal: true, logo: 'assets/images/partners/supplify-trade.svg' },
    { name: 'Kaya One AG', category: 'تجارت سوئیسی B2B', slug: 'pages/kaya-one', internal: true, logo: 'assets/images/partners/kaya-one.svg' },
    { name: 'SMM Turk', category: 'پنل SMM', slug: 'pages/smm-turk', internal: true, logo: 'assets/images/partners/smm-turk.svg' },
    { name: 'FXGuard Exchange', category: 'فین‌تک / تبادل ارز', slug: 'pages/fxguard-exchange', internal: true, logo: 'assets/images/partners/fxguard-exchange.svg' },
    { name: 'Karen Leather', category: 'چرم و مد', domain: 'karenleather.com', internal: false, logo: 'assets/images/partners/karen-leather.png' },
    { name: 'Marvelous Holding', category: 'هلدینگ', domain: 'marvelousholding.com', internal: false, logo: 'assets/images/partners/marvelous-holding.png' },
    { name: 'NIK Aesthetic', category: 'کلینیک زیبایی', domain: 'nikaesthetic.com', internal: false, logo: 'assets/images/partners/nikaesthetic.png' },
    { name: 'Paparosi', category: 'برند تجاری', domain: 'paparosi.co', internal: false, logo: 'assets/images/partners/paparosi.png' },
    { name: 'Arian Pumps', category: 'B2B صنعتی', domain: 'arianpumps.com', internal: false, logo: 'assets/images/partners/arian-pumps.png' }
  ],

  faq: [
    { q: 'واقعاً در ۵ روز تحویل می‌دهید؟', a: 'بله — برای پلن پایه و فروشگاهی با محتوای آماده مشتری. پلن حرفه‌ای با صفحات بیشتر ممکن است ۵ تا ۷ روز طول بکشد. قبل از شروع، زمان دقیق را در واتساپ تأیید می‌کنیم.' },
    { q: 'هاست و دامنه شامل قیمت است؟', a: 'هزینه طراحی و راه‌اندازی جداست. دامنه، هاست و سرور را از <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">فروشگاه Netinode</a> بخرید؛ معرفی خدمات در <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">netinode.net</a>. در صورت نیاز راهنمایی می‌کنیم.' },
    { q: 'آیا می‌توانم بعداً سایت را گسترش دهم؟', a: 'بله. می‌توانید از پلن پایه شروع کنید و بعد به فروشگاهی یا حرفه‌ای ارتقا دهید. بیزدوار همان پروژه را ادامه می‌دهد.' },
    { q: 'پرداخت چگونه است؟', a: 'معمولاً ۵۰٪ پیش‌پرداخت و ۵۰٪ قبل از تحویل نهایی — از طریق حواله، کارت یا روش‌های بین‌المللی. جزئیات در واتساپ هماهنگ می‌شود.' },
    { q: 'برای کسب‌وکار خارج از ایران هم کار می‌کنید؟', a: 'بله — Fast Web Studio برای ایران، ترکیه، امارات و اروپا اجرا شده. مشاوره فارسی، انگلیسی و ترکی داریم.' },
    { q: 'تفاوت Fast با سفارش اختصاصی چیست؟', a: 'Fast برای راه‌اندازی سریع با قیمت ثابت است. پروژه‌های بزرگ‌تر (اپلیکیشن، پورتال B2B، چندزبانه پیچیده) از مسیر <a href="services#web-design">خدمات طراحی وب</a> پیش می‌روند.' }
  ]
};
