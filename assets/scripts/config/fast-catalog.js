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
    domain: 'fast.bizdavar.com'
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
      featured: false,
      features: [
        'سایت تک‌صفحه‌ای شرکتی',
        'طراحی ریسپانسیو موبایل',
        'فرم تماس حرفه‌ای',
        'دکمه واتساپ مستقیم',
        'اتصال اینستاگرام / لینکدین',
        'SSL و هاست اولیه — <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">خرید دامنه و هاست (Netinode)</a>',
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

  whyChoose: [
    { icon: 'bolt', title: 'سرعت واقعی', desc: 'نه وعده مبهم — هر روز گزارش پیشرفت در واتساپ.' },
    { icon: 'palette', title: 'طراحی مدرن RTL', desc: 'فونت Vazirmatn، موبایل‌فرست و استاندارد دسترسی.' },
    { icon: 'handshake', title: 'پشتوانه بیزدوار', desc: '۱۲+ سال تجربه و ۱۰۰+ پروژه دیجیتال در ۱۱ کشور.' },
    { icon: 'toolbox', title: 'آموزش و پشتیبانی', desc: 'ویدیوی مدیریت سایت و پاسخگویی پس از تحویل.' }
  ],

  showcases: [
    { name: 'BZ Diamond', category: 'فروشگاه جواهرات', slug: 'pages/bz-diamond.html', internal: true },
    { name: 'Karen Leather', category: 'چرم و مد', domain: 'karenleather.com', internal: false },
    { name: 'Marvelous Holding', category: 'هلدینگ', domain: 'marvelousholding.com', internal: false },
    { name: 'NIK Aesthetic', category: 'کلینیک زیبایی', domain: 'nikaesthetic.com', internal: false },
    { name: 'Paparosi', category: 'برند تجاری', domain: 'paparosi.co', internal: false },
    { name: 'Arian Pumps', category: 'B2B صنعتی', domain: 'arianpumps.com', internal: false }
  ],

  faq: [
    { q: 'واقعاً در ۵ روز تحویل می‌دهید؟', a: 'بله — برای پلن پایه و فروشگاهی با محتوای آماده مشتری. پلن حرفه‌ای با صفحات بیشتر ممکن است ۵ تا ۷ روز طول بکشد. قبل از شروع، زمان دقیق را در واتساپ تأیید می‌کنیم.' },
    { q: 'هاست و دامنه شامل قیمت است؟', a: 'هزینه طراحی و راه‌اندازی جداست. دامنه و هاست سالانه را می‌توانید از <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a> (ثبت دامنه، هاست، WordPress و SSL) تهیه کنید یا با راهنمایی ما انجام دهید.' },
    { q: 'آیا می‌توانم بعداً سایت را گسترش دهم؟', a: 'بله. می‌توانید از پلن پایه شروع کنید و بعد به فروشگاهی یا حرفه‌ای ارتقا دهید. بیزدوار همان پروژه را ادامه می‌دهد.' },
    { q: 'پرداخت چگونه است؟', a: 'معمولاً ۵۰٪ پیش‌پرداخت و ۵۰٪ قبل از تحویل نهایی — از طریق حواله، کارت یا روش‌های بین‌المللی. جزئیات در واتساپ هماهنگ می‌شود.' },
    { q: 'برای کسب‌وکار خارج از ایران هم کار می‌کنید؟', a: 'بله — Fast Web Studio برای ایران، ترکیه، امارات و اروپا اجرا شده. مشاوره فارسی، انگلیسی و ترکی داریم.' },
    { q: 'تفاوت Fast با سفارش اختصاصی چیست؟', a: 'Fast برای راه‌اندازی سریع با قیمت ثابت است. پروژه‌های بزرگ‌تر (اپلیکیشن، پورتال B2B، چندزبانه پیچیده) از مسیر <a href="services.html#web-design">خدمات طراحی وب</a> پیش می‌روند.' }
  ]
};
