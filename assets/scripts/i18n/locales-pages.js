/**
 * Page-level translations for subpages and JS-rendered content.
 */
(function () {
  const serviceBlocks = {
    fa: [
      { title: 'بازاریابی دیجیتال', subtitle: 'Digital Marketing · استراتژی و اجرای کمپین', body: 'در بیزدوار گروپ، با اجرای استراتژی‌های نوین بازاریابی دیجیتال، نرخ تبدیل مشتریان را به‌طور قابل‌توجهی افزایش می‌دهیم. مطلب مرتبط: <a href="articles/digital-marketing">چگونه دیجیتال مارکتینگ فروش را افزایش می‌دهد؟</a>', tags: ['Google Ads', 'سئو', 'CRO', 'اتوماسیون'], checks: ['تحلیل رقبا و بازار هدف', 'کمپین‌های تبلیغاتی Google و شبکه‌های اجتماعی', 'بهینه‌سازی نرخ تبدیل (CRO)', 'اتوماسیون بازاریابی و ایمیل مارکتینگ', 'گزارش‌دهی و تحلیل عملکرد'], cta: 'درخواست مشاوره' },
      { title: 'طراحی و توسعه وب', subtitle: 'Web Design · Fast Web Studio', body: 'طراحی سایت شرکتی، فروشگاه اینترنتی، لندینگ پیج و پنل‌های اختصاصی با تحویل سریع از طریق <a href="fast">Fast Web Studio</a>.', tags: ['ریسپانسیو', 'WooCommerce', 'سئو پایه', '۵ روز تحویل'], checks: ['طراحی ریسپانسیو با فونت فارسی Vazirmatn', 'فروشگاه WooCommerce و درگاه پرداخت', 'سئو پایه و بهینه‌سازی سرعت', 'اتصال واتساپ و <a href="contact">فرم تماس</a>', 'آموزش مدیریت و پشتیبانی', '<a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a> — نمونه‌کار طراحی وب B2B'], cta: 'مشاهده پلن‌های Fast Studio' },
      { title: 'مدیریت شبکه‌های اجتماعی (SMM)', subtitle: 'Social Media · محتوا و تبلیغات', body: 'تولید محتوا، مدیریت صفحات، تبلیغات هدفمند در <a href="https://www.instagram.com/bizdavar" target="_blank" rel="noopener noreferrer me">اینستاگرام</a>، <a href="https://www.linkedin.com/in/ersanjt" target="_blank" rel="noopener noreferrer me">لینکدین</a> و سایر پلتفرم‌ها.', tags: ['تقویم محتوا', 'Paid Social', 'طراحی گرافیک'], checks: ['تقویم محتوایی ماهانه', 'طراحی گرافیک و ویدیو', 'مدیریت تبلیغات Paid Social', 'گزارش رشد و تعامل'], cta: 'شروع همکاری SMM' }
    ],
    tr: [
      { title: 'Dijital pazarlama', subtitle: 'Digital Marketing · Strateji ve kampanya yönetimi', body: 'Bizdavar Group modern dijital pazarlama stratejileriyle dönüşüm oranını ve online satışı artırır. İlgili yazı: <a href="articles/digital-marketing">Dijital pazarlama satışları nasıl artırır?</a>', tags: ['Google Ads', 'SEO', 'CRO', 'Otomasyon'], checks: ['Rakip ve hedef kitle analizi', 'Google ve sosyal medya kampanyaları', 'Dönüşüm oranı optimizasyonu (CRO)', 'Pazarlama otomasyonu ve e-posta', 'Performans raporlama ve analiz'], cta: 'Danışmanlık iste' },
      { title: 'Web tasarım ve geliştirme', subtitle: 'Web Design · Kurumsal site, e-ticaret ve landing', body: 'Kurumsal web sitelerinden WooCommerce mağazalara ve kampanya landing sayfalarına kadar hız, UX, SEO ve dönüşüm odaklı geliştirme. Hızlı teslim için <a href="fast">Fast Web Studio</a>’yu inceleyin.', tags: ['WordPress', 'WooCommerce', 'Landing', 'SEO'], checks: ['Responsive UI/UX tasarımı', 'Kurumsal veya e-ticaret site kurulumu', 'İletişim formu, WhatsApp ve sosyal ağ bağlantıları', 'Hız, güvenlik ve SSL optimizasyonu', 'Site yönetimi eğitimi'], cta: 'Web tasarım planlarını gör' },
      { title: 'SMM yönetimi', subtitle: 'Social Media Management · İçerik, reklam ve büyüme', body: 'Sosyal medyada profesyonel görünmek isteyen markalar için içerik takvimi, tasarım, metin, kampanya ve büyüme raporu.', tags: ['Instagram', 'LinkedIn', 'Content', 'Ads'], checks: ['İçerik stratejisi ve yayın takvimi', 'Post ve story tasarımı', 'Türkçe, Farsça ve İngilizce metin yazımı', 'Hedefli reklam ve kampanya', 'Aylık rapor ve iyileştirme önerisi'], cta: 'SMM iş birliğine başla' }
    ],
    en: [
      { title: 'Digital marketing', subtitle: 'Digital Marketing · Strategy and campaign delivery', body: 'Bizdavar Group runs English-first campaigns for US and EU buyers — billed in USD or EUR. Related: <a href="articles/digital-marketing-us-eu">digital marketing for US and EU</a>.', tags: ['Google Ads', 'SEO', 'CRO', 'Automation'], checks: ['Competitor and audience analysis', 'Google and social media campaigns', 'Conversion rate optimization (CRO)', 'Marketing automation and email', 'Performance reporting and analysis'], cta: 'Request consulting' },
      { title: 'Web design and development', subtitle: 'Web Design · Corporate, e-commerce and landing pages', body: 'English sites for US and EU from $99 / ~€90, invoiced in USD or EUR. See <a href="articles/website-design-us-eu">US/EU website design</a> and <a href="fast">Fast Web Studio</a>.', tags: ['WordPress', 'WooCommerce', 'Landing', 'SEO'], checks: ['Responsive UI/UX design', 'Corporate or e-commerce implementation', 'Contact form, WhatsApp and social links', 'Speed, security and SSL optimization', 'Website management training'], cta: 'View web design plans' },
      { title: 'SMM management', subtitle: 'Social Media Management · Content, ads and growth', body: 'Content calendar, post design, captions, campaigns and growth reporting for brands that want a professional social media presence.', tags: ['Instagram', 'LinkedIn', 'Content', 'Ads'], checks: ['Content strategy and publishing calendar', 'Post and story design', 'Persian, Turkish and English copywriting', 'Targeted ads and campaigns', 'Monthly reporting and improvement ideas'], cta: 'Start SMM cooperation' }
    ]
  };

  const servicesPanels = {
    fa: {
      webSub: 'طراحی سایت حرفه‌ای در ۵ روز',
      webPrice: 'از $99',
      smmSub: 'مدیریت حرفه‌ای شبکه‌های اجتماعی',
      dmImgAlt: 'بازاریابی دیجیتال و شبکه جهانی — بیزدوار',
      webImgAlt: 'موکاپ طراحی وب — Fast Web Studio',
      smmImgAlt: 'موکاپ مدیریت شبکه‌های اجتماعی — SMM',
      vegaSub: 'سنسور سطح و فشار',
      prosenseSub: 'دتکتور گاز و شعله',
      teltonikaSub: 'GPS و Fleet Telematics',
      gamakSub: 'الکتروموتور صنعتی',
      liquiMolySub: 'روغن و افزودنی خودرو',
      digiSystemSub: 'POS و خرده‌فروشی',
      teraokaSub: 'ترازو و فروشگاه'
    },
    tr: {
      webSub: '5 günde profesyonel web sitesi',
      webPrice: '$99\'dan itibaren',
      smmSub: 'Profesyonel sosyal medya yönetimi',
      dmImgAlt: 'Dijital pazarlama ve küresel ağ — Bizdavar',
      webImgAlt: 'Web tasarım mockup — Fast Web Studio',
      smmImgAlt: 'Sosyal medya yönetimi mockup — SMM',
      vegaSub: 'Seviye ve basınç sensörleri',
      prosenseSub: 'Gaz ve alev dedektörleri',
      teltonikaSub: 'GPS ve Fleet Telematics',
      gamakSub: 'Endüstriyel elektrik motorları',
      liquiMolySub: 'Motor yağı ve katkı',
      digiSystemSub: 'POS ve perakende',
      teraokaSub: 'Terazi ve mağaza'
    },
    en: {
      webSub: 'Professional website design in 5 days',
      webPrice: 'From $99',
      smmSub: 'Professional social media management',
      dmImgAlt: 'Digital marketing and global network — Bizdavar',
      webImgAlt: 'Web design mockup — Fast Web Studio',
      smmImgAlt: 'Social media management mockup — SMM',
      vegaSub: 'Level and pressure sensors',
      prosenseSub: 'Gas and flame detectors',
      teltonikaSub: 'GPS and Fleet Telematics',
      gamakSub: 'Industrial electric motors',
      liquiMolySub: 'Oils & fuel additives',
      digiSystemSub: 'Retail & POS',
      teraokaSub: 'Scales & retail'
    }
  };

  const servicesRelatedLinks = {
    fa: [
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'محصولات بیزدوار', url: 'products', desc: 'SaaS، سخت‌افزار و برندهای تامین', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: '۳۵ پروژه و برند', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'وبلاگ تخصصی', url: 'blog', desc: 'راهنما و مقالات', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ],
    tr: [
      { title: 'Fast Web Studio', url: 'fast', desc: '$99\'dan web tasarım', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'Bizdavar ürünleri', url: 'products', desc: 'SaaS, donanım ve tedarik markaları', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'Portfolyo', url: 'portfolio', desc: '35 proje ve marka', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'Blog', url: 'blog', desc: 'Rehberler ve makaleler', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ],
    en: [
      { title: 'Fast Web Studio', url: 'fast', desc: 'Website design from $99', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'Bizdavar products', url: 'products', desc: 'SaaS, hardware and supply brands', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'Portfolio', url: 'portfolio', desc: '35 projects and brands', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'Blog', url: 'blog', desc: 'Guides and articles', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ]
  };

  const fastRelatedLinks = {
    fa: [
      { title: 'طراحی سایت اروپا و آمریکا', url: 'articles/website-design-us-eu', desc: 'از ۹۹ دلار / فاکتور یورو' },
      { title: 'مقاله Fast Studio', url: 'articles/fast-studio', desc: 'راهنمای سفارش' },
      { title: 'چک‌لیست ۵ روزه', url: 'articles/website-speed-5-days', desc: 'آماده‌سازی محتوا' },
      { title: 'وب و اپ اختصاصی', url: 'custom-web-app', desc: 'پروژه سفارشی' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
    ],
    tr: [
      { title: 'ABD/AB web tasarım', url: 'articles/website-design-us-eu', desc: '$99’dan / EUR fatura' },
      { title: 'Fast Studio makalesi', url: 'articles/fast-studio', desc: 'Sipariş rehberi' },
      { title: '5 günlük checklist', url: 'articles/website-speed-5-days', desc: 'İçerik hazırlığı' },
      { title: 'Özel web & uygulama', url: 'custom-web-app', desc: 'Özel proje' },
      { title: 'Portfolyo', url: 'portfolio', desc: 'Bizdavar projeleri' }
    ],
    en: [
      { title: 'US & EU website design', url: 'articles/website-design-us-eu', desc: 'From $99 / EUR invoice' },
      { title: 'Fast Studio article', url: 'articles/fast-studio', desc: 'Ordering guide' },
      { title: '5-day checklist', url: 'articles/website-speed-5-days', desc: 'Content prep' },
      { title: 'Custom web & app', url: 'custom-web-app', desc: 'Custom project' },
      { title: 'Portfolio', url: 'portfolio', desc: 'Bizdavar projects' }
    ]
  };

  const fastSchema = {
    fa: {
      description: 'سایت انگلیسی LTR برای آمریکا و اروپا در ۵ روز — فاکتور USD یا EUR، Stripe، Zoom/Meet؛ فارسی/RTL زبان دوم.',
      offers: [
        { name: 'پلن پایه', price: '99' },
        { name: 'پلن فروشگاهی', price: '199' },
        { name: 'پلن حرفه‌ای', price: '299' }
      ]
    },
    tr: {
      description: 'ABD ve AB için 5 günde İngilizce LTR site — fatura USD veya EUR, Stripe, Zoom/Meet. Farsça/RTL ikinci dil.',
      offers: [
        { name: 'Temel plan', price: '99' },
        { name: 'Mağaza planı', price: '199' },
        { name: 'Pro plan', price: '299' }
      ]
    },
    en: {
      description: 'English LTR websites for the US and EU in 5 days — billed in USD or EUR, Stripe, Zoom/Meet. Persian/RTL is a second locale.',
      offers: [
        { name: 'Basic plan', price: '99' },
        { name: 'Store plan', price: '199' },
        { name: 'Pro plan', price: '299' }
      ]
    }
  };

  const portfolioRelatedLinks = {
    fa: [
      { title: 'خدمات ما', url: 'services', desc: 'دیجیتال، وب و SMM' },
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت ۵ روزه' },
      { title: 'تماس', url: 'contact', desc: 'شروع پروژه جدید' }
    ],
    tr: [
      { title: 'Hizmetlerimiz', url: 'services', desc: 'Dijital, web ve SMM' },
      { title: 'Fast Web Studio', url: 'fast', desc: '5 günde web tasarım' },
      { title: 'İletişim', url: 'contact', desc: 'Yeni proje başlat' }
    ],
    en: [
      { title: 'Our services', url: 'services', desc: 'Digital, web and SMM' },
      { title: 'Fast Web Studio', url: 'fast', desc: '5-day website design' },
      { title: 'Contact', url: 'contact', desc: 'Start a new project' }
    ]
  };

  const fastHostingNote = {
    fa: {
      title: 'خرید دامنه، هاست و SSL — Netinode',
      text: '<strong>Netinode</strong> زیرساخت دامنه و هاست خود بیزدوار است. دامنه را از فروشگاه بخرید؛ برای معرفی سرویس‌ها به سایت اصلی بروید.',
      ctaShop: 'خرید دامنه و هاست',
      ctaSite: 'netinode.net'
    },
    tr: {
      title: 'Domain, hosting ve SSL — Netinode',
      text: '<strong>Netinode</strong> Bizdavar’ın domain ve hosting altyapısıdır. Domaini mağazadan alın; servis tanıtımı için ana siteye gidin.',
      ctaShop: 'Domain ve hosting satın al',
      ctaSite: 'netinode.net'
    },
    en: {
      title: 'Buy domain, hosting & SSL — Netinode',
      text: '<strong>Netinode</strong> is Bizdavar’s own domain and hosting stack. Buy a domain in the shop; visit the main site for services overview.',
      ctaShop: 'Buy domain & hosting',
      ctaSite: 'netinode.net'
    }
  };

  const fastPageUi = {
    fa: {
      statDays: '۵ روز', statDaysLabel: 'تحویل استاندارد',
      statPrice: '$99', statPriceLabel: 'شروع قیمت',
      statProjects: '۱۰۰+', statProjectsLabel: 'پروژه بیزدوار',
      viewPlans: 'مشاهده پلن‌ها', consultWa: 'مشاوره در واتساپ',
      btnDevConsult: 'برنامه‌نویسی تخصصی و مشاوره — تماس بگیرید',
      navPlans: 'پلن‌ها', navCompare: 'مقایسه', navTimeline: 'مسیر ۵ روزه', navShowcase: 'نمونه‌کارها', navFaq: 'سوالات',
      navSpeed: 'سرعت', navScope: 'خدمات', navWhy: 'چرا Fast', navGuides: 'راهنما', btnCustomApp: 'وب و اپ اختصاصی', readGuide: 'ادامه مطلب',
      oneTime: 'پرداخت یک‌باره', orderWa: 'سفارش در واتساپ', orContact: 'یا فرم تماس',
      compareFeature: 'امکانات', compareBasic: 'پایه', compareStore: 'فروشگاهی', comparePro: 'حرفه‌ای',
      viewCase: 'مشاهده', navAria: 'بخش‌های Fast Web Studio'
    },
    tr: {
      statDays: '5 gün', statDaysLabel: 'Standart teslimat',
      statPrice: '$99', statPriceLabel: 'Başlangıç fiyatı',
      statProjects: '100+', statProjectsLabel: 'Bizdavar projesi',
      viewPlans: 'Planları gör', consultWa: 'WhatsApp veya Zoom',
      btnDevConsult: 'Özel yazılım ve danışmanlık — iletişime geçin',
      navPlans: 'Planlar', navCompare: 'Karşılaştır', navTimeline: '5 günlük yol', navShowcase: 'Örnek işler', navFaq: 'SSS',
      navSpeed: 'Hız', navScope: 'Hizmetler', navWhy: 'Neden Fast', navGuides: 'Rehber', btnCustomApp: 'Özel web & uygulama', readGuide: 'Devamını oku',
      oneTime: 'Tek seferlik ödeme', orderWa: 'WhatsApp sipariş', orContact: 'veya iletişim formu',
      compareFeature: 'Özellikler', compareBasic: 'Temel', compareStore: 'Mağaza', comparePro: 'Pro',
      viewCase: 'Görüntüle', navAria: 'Fast Web Studio bölümleri'
    },
    en: {
      statDays: '5 days', statDaysLabel: 'Standard delivery',
      statPrice: '$99', statPriceLabel: 'Starting price',
      statProjects: '100+', statProjectsLabel: 'Bizdavar projects',
      viewPlans: 'View plans', consultWa: 'WhatsApp or Zoom',
      btnDevConsult: 'Custom development & consulting — contact us',
      navPlans: 'Plans', navCompare: 'Compare', navTimeline: '5-day path', navShowcase: 'Showcase', navFaq: 'FAQ',
      navSpeed: 'Speed', navScope: 'Services', navWhy: 'Why Fast', navGuides: 'Guides', btnCustomApp: 'Custom web & app', readGuide: 'Read more',
      oneTime: 'One-time payment', orderWa: 'Order on WhatsApp', orContact: 'or contact form',
      compareFeature: 'Features', compareBasic: 'Basic', compareStore: 'Store', comparePro: 'Pro',
      viewCase: 'View', navAria: 'Fast Web Studio sections'
    }
  };

  const page = {
    fa: {
      aboutPage: { hero: { tag: 'درباره بیزدوار', title: 'شریک رشد کسب‌وکار در دیجیتال و صنعت', desc: 'از سال ۱۳۹۲ — ۱۰۰+ پروژه در ۱۱ کشور · بازاریابی، وب، فین‌تک و تامین صنعتی' }, whatIs: { title: 'بیزدوار گروپ چیست؟', p1: 'بیزدوار گروپ (Bizdavar Group) آژانس دیجیتال و تامین‌کننده B2B است که از سال ۲۰۱۳ توسط <strong>ارسان جاهد تبریزی</strong> راه‌اندازی شده. خدمات دیجیتال ما شامل <a href="services#digital-marketing">بازاریابی دیجیتال</a>، <a href="fast">طراحی وب</a>، پلتفرم‌های فین‌تک و مدیریت SMM است. محصولات مالکیتی و <a href="products#supply">برندهای صنعتی</a> در صفحه محصولات هستند.', p2: 'بیش از ۱۰۰ پروژه وب و پلتفرم سفارشی در ۱۱ کشور — از طراحی وب و پلتفرم‌های سفارشی تا تامین VEGA و محصولات دیجیتال. زیرساخت دیجیتال، دامنه، هاست، SSL و پشتیبانی فنی نیز تحت مدیریت ما است. <a href="portfolio">مشاهده نمونه‌کارها</a>' }, features: ['بازاریابی دیجیتال', 'طراحی وب حرفه‌ای', 'تامین تجهیزات', 'مدیریت زیرساخت'], stats: [{ value: '۱۲+', label: 'سال تجربه' }, { value: '۱۰۰+', label: 'پروژه' }, { value: '۱۱', label: 'کشور' }, { value: '۴', label: 'محور کسب‌وکار' }], navAria: 'فهرست بخش‌های صفحه', nav: [{ href: '#profile', label: 'شناسنامه' }, { href: '#activities', label: 'تخصص‌ها' }, { href: '#ecosystem', label: 'اکوسیستم' }, { href: '#presence', label: 'حضور جهانی' }, { href: '#highlights', label: 'دستاوردها' }, { href: '#sources', label: 'منابع' }, { href: '#trust', label: 'اعتبار' }, { href: '#faq', label: 'سوالات' }], sections: { identityEyebrow: 'شناسنامه سازمانی', identityTitle: 'بیزدوار گروپ در یک نگاه', leadershipEyebrow: 'رهبری', leadershipTitle: 'بنیان‌گذار و تیم', activitiesEyebrow: 'دسته‌بندی فعالیت', activitiesTitle: 'حوزه‌های تخصصی', ecosystemEyebrow: 'اکوسیستم', ecosystemTitle: 'برندها و پروژه‌های مرتبط', ecosystemDesc: 'نمونه‌ای از اکوسیستم دیجیتال و صنعتی که بیزدوار در توسعه یا مدیریت آن نقش داشته', presenceEyebrow: 'حضور جهانی', presenceTitle: 'کشورهای فعال', presenceDesc: 'شبکه بین‌المللی پروژه‌ها — دفاتر ایران، ترکیه، ارمنستان و دبی', exhibitionsEyebrow: 'نمایشگاه و رویداد', exhibitionsTitle: 'حضور در نمایشگاه‌های فناوری', exhibitionsDesc: 'رویدادهای نوآوری و تجاری‌سازی فناوری — از RINOTEX تبریز تا نمایشگاه‌های دانشگاهی', achievementsEyebrow: 'دستاوردها', achievementsTitle: 'محصولات و نوآوری‌های بیزدوار', achievementsDesc: 'علاوه بر خدمات دیجیتال و تامین صنعتی، تیم بیزدوار محصولات اختصاصی نیز طراحی و توسعه داده است', sourcesEyebrow: 'منابع معتبر', sourcesTitle: 'رسانه، نمایشگاه و منابع قابل راستی‌آزمایی', sourcesDesc: 'لینک‌های رسمی که درباره محصولات، نمایشگاه‌ها و سوابق بیزدوار منتشر شده‌اند — مستقل از ادعاهای داخلی سایت.', credentialsEyebrow: 'گواهینامه‌ها', credentialsTitle: 'مهارت‌های تأییدشده', proofEyebrow: 'اعتبار حرفه‌ای', proofTitle: 'بازخورد و شاخص‌های اعتماد', proofDesc: 'بر اساس منابع عمومی قابل راستی‌آزمایی — بدون نظر ساختگی', faqEyebrow: 'سوالات متداول', faqTitle: 'پرسش‌های رایج درباره بیزدوار' }, relatedLinks: [{ title: 'خدمات ما', url: 'services', desc: 'بازاریابی دیجیتال، وب، SMM و صنعت' }, { title: 'نمونه‌کارها', url: 'portfolio', desc: 'ZedPay، BZ Diamond و...' }, { title: 'تماس با ما', url: 'contact', desc: 'مشاوره رایگان' }], values: { title: 'ارزش‌های ما', items: [{ title: 'تمرکز بر نتیجه', desc: 'افزایش فروش، تبدیل و رشد برند — نه فقط اجرا.' }, { title: 'همکاری شفاف', desc: 'گزارش‌دهی منظم و ارتباط مستقیم با تیم.' }, { title: 'بازار جهانی', desc: 'پروژه در ایران، ترکیه و بازارهای بین‌المللی.' }, { title: 'سرعت اجرا', desc: 'Fast Web Studio — تحویل سایت در ۵ روز.' }] }, cta: { title: 'آماده همکاری با بیزدوار هستید؟', desc: 'مشاوره اولیه رایگان — از طریق <a href="contact" class="link-yellow">فرم تماس</a> یا واتساپ.', btn: 'تماس با ما' } },
      servicesPage: { hero: { tag: 'خدمات ما', title: 'خدمات دیجیتال و فنی بیزدوار', desc: 'بازاریابی، وب‌اپ، اپلیکیشن، سامانه، سرور و SMM — به‌همراه خدمات فنی دوربین، سیم‌کشی و نورمخفی. محصولات در <a href="products">صفحه محصولات</a> هستند.' }, overview: { eyebrow: 'نمای کلی', title: 'شش محور خدمات بیزدوار', desc: 'دیجیتال و نرم‌افزار در بالا — خدمات فنی ساختمانی با هماهنگی واتساپ تخصصی در پایین.' }, navAria: 'فهرست خدمات', viewDetails: 'مشاهده جزئیات', stats: [{ value: '۶', label: 'محور خدمات' }, { value: '۱۰۰+', label: 'پروژه' }, { value: '۲', label: 'شهر فنی' }, { value: '۱۲+', label: 'سال تجربه' }], cards: serviceBlocks.fa.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.fa, panels: servicesPanels.fa, relatedLinks: servicesRelatedLinks.fa, process: { eyebrow: 'فرآیند همکاری', title: 'چگونه با ما کار می‌کنید؟', desc: 'مسیر همکاری ساده، شفاف و قابل پیگیری است.', steps: [{ title: 'مشاوره', desc: 'شناخت نیاز و اهداف کسب‌وکار' }, { title: 'طراحی راهکار', desc: 'پیشنهاد فنی و برآورد زمان‌بندی' }, { title: 'اجرا', desc: 'پیاده‌سازی یا راه‌اندازی کمپین' }, { title: 'پشتیبانی', desc: 'گزارش‌دهی، بهینه‌سازی و همراهی مستمر' }] }, cta: { title: 'نیاز به راهکار اختصاصی دارید؟', desc: 'مشاوره رایگان — نمونه پروژه‌ها در <a href="portfolio">نمونه‌کارهای بیزدوار</a>', btn: 'مشاوره رایگان', btnSecondary: 'مشاهده نمونه‌کارها' } },
      portfolioPage: { hero: { tag: 'نمونه‌کارها', title: 'خدمات، محصولات و پروژه‌های اجراشده بیزدوار', desc: 'طراحی وب، بازاریابی دیجیتال، SMM، محصولات FXGuard و Fast Web Studio، و تامین صنعتی VEGA / Prosense / Liqui Moly — <a href="about">درباره بیزدوار</a>.' }, areas: { eyebrow: 'حوزه‌ها', title: 'دامنه فعالیت پروژه‌ها' }, archived: { eyebrow: 'پروژه‌های گذشته', title: 'همکاری‌های قبلی و ناتمام', desc: 'پروژه‌هایی که دیگر لینک زنده ندارند یا به‌صورت ناتمام متوقف شده‌اند — از جمله سایت‌هایی که سرورشان تمدید نشده یا مارکت‌پلیس‌هایی که تکمیل نشده‌اند. فقط به‌صورت خلاصه ذکر می‌شوند.' }, tags: ['فین‌تک و پرداخت', 'حسابداری و فینانس', 'هوش مصنوعی', 'اپ موبایل iOS', 'رویداد و بلیت', 'هلدینگ و سرمایه‌گذاری', 'هاستینگ و زیرساخت', 'طراحی وب و فروشگاه', 'تجارت بین‌المللی', 'تجارت سوئیسی', 'پنل SMM', 'مدیریت SMM', 'تامین صنعتی', 'سنسور VEGA', 'دتکتور Prosense', 'هواپیمایی', 'بروکر و مالی'], cta: { title: 'پروژه بعدی می‌تواند برند شما باشد', desc: 'از <a href="fast" class="link-yellow">طراحی وب</a> تا مدیریت DNS و SSL — بیزدوار همراه شماست.', btnPrimary: 'شروع پروژه جدید', btnSecondary: 'مشاهده خدمات' }, filters: [{ id: 'all', label: 'همه' }, { id: 'case-study', label: 'نمونه‌کارها' }, { id: 'client', label: 'مشتریان' }, { id: 'ecosystem', label: 'اکوسیستم' }, { id: 'fintech', label: 'فین‌تک' }, { id: 'digital', label: 'دیجیتال' }, { id: 'industrial', label: 'صنعتی' }, { id: 'other', label: 'سایر' }], roleLabels: { ecosystem: 'اکوسیستم', 'case-study': 'نمونه‌کار', client: 'مشتری', website: 'وبسایت', page: 'صفحه بیزدوار' }, statsLabels: ['پروژه و برند', 'نمونه‌کار', 'مشتری', 'اکوسیستم'], filterAria: 'فیلتر نمونه‌کارها', countText: '{count} مورد نمایش داده می‌شود', relatedLinks: portfolioRelatedLinks.fa },
      blogPage: {
        hero: {
          tag: 'وبلاگ تخصصی',
          title: 'راهنمای خرید VEGA، Prosense و بازرگانی صنعتی',
          desc: 'مقالات فارسی برای خریدار ایران: سنسور سطح، دتکتور گاز، ردیاب Teltonika و مسیر استعلام واتساپ — به‌همراه سئو و طراحی سایت.',
          ctaArticles: 'مشاهده مقالات',
          ctaTopics: 'موضوعات',
          ctaConsult: 'مشاوره رایگان'
        },
        intro: {
          title: 'دانش عملی از پروژه‌های واقعی',
          body: 'اولویت وبلاگ بیزدوار <a href="/pages/products#supply">بازرگانی صنعتی ایران</a> است: <a href="/pages/vega">VEGA</a>، <a href="/pages/prosense">Prosense</a>، <a href="/pages/teltonika">Teltonika</a> و <a href="/pages/liqui-moly">Liqui Moly</a>. کنار آن <a href="/pages/services">خدمات دیجیتال</a> و <a href="/pages/fast">Fast Studio</a> هم هست. هر مقاله به کاتالوگ یا واتساپ لینک می‌شود.',
          statPosts: '۱۸',
          statPostsLabel: 'مقاله و راهنما',
          statLangs: '۵',
          statLangsLabel: 'زبان انتشار',
          statTopics: '۵',
          statTopicsLabel: 'خوشه موضوعی'
        },
        topics: {
          eyebrow: 'خوشه‌های موضوعی',
          title: 'از سئو تا سنسور VEGA',
          desc: 'مقالات را بر اساس نیاز انتخاب کنید — هر موضوع به صفحهٔ خدمت یا محصول مرتبط لینک می‌شود.',
          digital: { label: 'بازاریابی دیجیتال', desc: 'سئو، CRO و مدیریت SMM' },
          web: { label: 'طراحی وب', desc: 'سایت چندزبانه و Fast Studio' },
          industrial: { label: 'بازرگانی صنعتی', desc: 'خرید VEGA، Prosense و Teltonika' },
          products: { label: 'محصولات بیزدوار', desc: 'BizPet، BizTab و BizClean' },
          company: { label: 'درباره شرکت', desc: 'تاریخچه و حوزه‌های فعالیت' }
        },
        catalog: {
          eyebrow: 'کاتالوگ مقالات',
          title: 'همه راهنماها در یک نگاه',
          desc: 'فیلتر موضوعی بزنید یا مستقیم مقاله را باز کنید — لینک‌ها برای موتورهای جستجو در HTML صفحه هستند.',
          filterAll: 'همه',
          empty: 'مقاله‌ای در این دسته نیست.',
          filterAria: 'فیلتر موضوع مقالات',
          countText: '{count} مطلب',
          relatedService: 'خدمت مرتبط'
        },
        featured: {
          eyebrow: 'پیشنهاد ویراستار',
          title: 'جدیدترین راهنماها',
          desc: 'آخرین مقالات با لینک مستقیم به خدمت یا استعلام.'
        },
        linkHub: {
          eyebrow: 'مسیرهای سریع',
          title: 'از وبلاگ به صفحات کلیدی',
          desc: 'لینک‌های داخلی برای پیدا کردن کاتالوگ بازرگانی، راهنمای خرید یا تماس — بدون جستجو در منو.',
          items: [
            { title: 'خرید VEGAPULS', url: '/pages/articles/buy-vegapuls-iran', desc: 'سنسور سطح ایران' },
            { title: 'کاتالوگ VEGA', url: '/pages/vega', desc: 'سنسور سطح و فشار' },
            { title: 'خرید Prosense', url: '/pages/articles/buy-prosense-iran', desc: 'دتکتور گاز' },
            { title: 'Prosense', url: '/pages/prosense', desc: 'PQ و SafeVader' },
            { title: 'Teltonika', url: '/pages/teltonika', desc: 'FMB920 از ۲۹ دلار' },
            { title: 'Gamak', url: '/pages/articles/buy-gamak-iran', desc: 'الکتروموتور صنعتی' },
            { title: 'Digi', url: '/pages/articles/buy-digi-system-iran', desc: 'ترازو و POS' },
            { title: 'Teraoka', url: '/pages/articles/buy-teraoka-iran', desc: 'ترازو ژاپن' },
            { title: 'Liqui Moly', url: '/pages/liqui-moly', desc: 'روغن و افزودنی' },
            { title: 'بازرگانی صنعتی', url: '/pages/articles/industrial-trade-iran', desc: 'همه برندها' },
            { title: 'خدمات دیجیتال', url: '/pages/services', desc: 'سئو، SMM و کمپین' },
            { title: 'محصولات', url: '/pages/products#supply', desc: 'کاتالوگ تامین' },
            { title: 'تماس', url: '/pages/contact', desc: 'استعلام واتساپ' }
          ]
        },
        clusters: {
          eyebrow: 'ادامه مسیر',
          title: 'از مقاله به خدمت یا استعلام',
          desc: 'اگر راهنما کافی نبود، همان موضوع را به‌صورت پروژه با تیم بیزدوار جلو ببرید.',
          digitalTitle: 'بازاریابی و سئو',
          digitalDesc: 'کمپین، سئو و SMM برای بازار ایران و ترکیه.',
          webTitle: 'طراحی سایت',
          webDesc: 'سایت شرکتی و فروشگاهی در ۵ روز — RTL و سئو پایه.',
          industrialTitle: 'خرید VEGA',
          industrialDesc: 'کد سفارش، پیش‌فاکتور و لجستیک تا محل پروژه.',
          prosenseTitle: 'دتکتور Prosense',
          prosenseDesc: 'گاز، شعله و SIL — پیش‌فاکتور B2B.',
          portfolioTitle: 'نمونه‌کارها',
          portfolioDesc: 'Marvi Society، FXGuard و پروژه‌های دیجیتال.',
          appsTitle: 'اپ iOS',
          appsDesc: 'طراحی، Swift و انتشار App Store.'
        },
        faq: {
          eyebrow: 'سوالات متداول',
          title: 'قبل از خواندن مقاله',
          desc: 'پاسخ کوتاه برای جستجوهای رایج درباره وبلاگ بیزدوار.',
          items: [
            { q: 'وبلاگ بیزدوار درباره چیست؟', a: 'اولویت با راهنمای خرید VEGA، Prosense، Teltonika و بازرگانی صنعتی ایران است؛ کنار آن سئو، طراحی سایت و محصولات BizPet و BizTab هم هست.' },
            { q: 'مقالات به چند زبان منتشر می‌شوند؟', a: 'صفحه وبلاگ و مقالات اصلی به فارسی، ترکی، انگلیسی، روسی و عربی با hreflang جداگانه ایندکس می‌شوند.' },
            { q: 'چطور مقاله مرتبط با خدمت پیدا کنم؟', a: 'از فیلتر موضوعی بالا استفاده کنید یا از خوشه‌های بازاریابی، طراحی وب و تامین صنعتی به صفحات خدمت بروید.' },
            { q: 'برای استعلام VEGA بعد از مقاله چه کار کنم؟', a: 'مدل یا مشخصات مخزن را در واتساپ یا فرم تماس بفرستید — پیش‌فاکتور و کد سفارش صادر می‌شود.' },
            { q: 'آیا محصولات بیزدوار هم در وبلاگ هستند؟', a: 'بله. BizTab، BizClean V5 و پد حرارتی BizPet صفحه اختصاصی دارند و از همین فهرست قابل دسترسی‌اند.' }
          ]
        },
        cta: {
          title: 'نیاز به مشاوره تخصصی دارید؟',
          desc: 'موضوع مطلب را در <a href="/pages/contact">فرم تماس</a> بنویسید — یا مستقیم در واتساپ پیام دهید.',
          btn: 'درخواست مشاوره',
          btnWa: 'واتساپ فارسی'
        },
        geoText: 'مقالات تخصصی برای کسب‌وکارهای ایران و ترکیه — بازاریابی دیجیتال، سئو، طراحی وب چندزبانه و تامین تجهیزات صنعتی VEGA.',
        related: [
          { title: 'طراحی سایت US/EU', desc: 'از ۹۹ دلار / فاکتور یورو', titleKey: 'blogPage.related.0.title', descKey: 'blogPage.related.0.desc' },
          { title: 'Ads آمریکا و اروپا', desc: 'Google، Meta، LinkedIn', titleKey: 'blogPage.related.1.title', descKey: 'blogPage.related.1.desc' },
          { title: 'کاتالوگ VEGA', desc: 'سنسور سطح و فشار', titleKey: 'blogPage.related.2.title', descKey: 'blogPage.related.2.desc' },
          { title: 'تماس و استعلام', desc: 'مشاوره رایگان', titleKey: 'blogPage.related.3.title', descKey: 'blogPage.related.3.desc' }
        ]
      },
      privacyPage: { hero: { title: 'سیاست حفظ حریم خصوصی', desc: 'نحوه جمع‌آوری و استفاده از اطلاعات شما در وبسایت بیزدوار گروپ' }, sections: [{ title: '۱. اطلاعاتی که جمع‌آوری می‌شود', body: 'هنگام ارسال <a href="contact">فرم تماس</a>، نام، ایمیل، شماره تماس (اختیاری)، نوع خدمات و متن پیام شما دریافت می‌شود. این اطلاعات فقط برای پاسخ به درخواست شما استفاده می‌شود.' }, { title: '۲. نحوه استفاده', items: ['پاسخ به درخواست مشاوره و پیشنهاد خدمات', 'پیگیری پروژه‌های در حال مذاکره', 'بهبود کیفیت خدمات (بدون انتشار عمومی)'] }, { title: '۳. اشتراک‌گذاری با اشخاص ثالث', body: 'اطلاعات شما بدون رضایت صریح شما به اشخاص ثالث فروخته یا منتقل نمی‌شود، مگر الزامات قانونی.' }, { title: '۴. کوکی‌ها و تحلیل', body: 'این وبسایت از <strong>Google Tag Manager</strong> (GTM-NXWQQWF8) و <strong>Google Analytics 4</strong> (G-4GFEY12SLH) برای اندازه‌گیری بازدید و بهبود تجربه استفاده می‌کند. این ابزارها ممکن است کوکی یا شناسه‌های مشابه تنظیم کنند. جزئیات تشخیص زبان در بخش ۵ آمده است.' }, { title: '۵. زبان و تشخیص منطقه', body: 'برای نمایش زبان مناسب (فارسی، ترکی، انگلیسی)، ممکن است آدرس IP شما به‌صورت ناشناس به <strong>ipapi.co</strong> یا <strong>ipwho.is</strong> ارسال شود تا کشور تقریبی تشخیص داده شود. ترجیح زبان در حافظه مرورگر (<code>localStorage</code> — کلید <code>bizdavar_locale</code>) ذخیره می‌شود. می‌توانید هر زمان از منوی زبان یا با پارامتر <code>?lang=fa</code>، <code>?lang=tr</code> یا <code>?lang=en</code> زبان را خودتان انتخاب کنید.' }, { title: '۶. ارتباط با ما', body: 'برای سوالات حریم خصوصی: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> یا <a href="contact">فرم تماس</a>.' }], updated: 'آخرین به‌روزرسانی: فروردین ۱۴۰۴' },
      gamakPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Gamak برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب توان موتور تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Gamak برای پروژه‌های ایرانی', desc: 'سه‌فاز · تک‌فاز · Ex-proof · IE4 · MV — برای استعلام هر سری دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل الکتروموتور Gamak', desc: 'سه‌فاز و تک‌فاز — IE2/IE3/IE4 — Ex-proof، smoke extraction، MV و inverter' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Gamak در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع بار و توان مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'الکتروموتور Gamak برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Gamak', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Gamak</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت Gamak هستید؟', desc: 'توان kW، دور rpm و نوع کاربرد را بفرستید — IE2/IE3/IE4 · Ex-proof · MV', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام Gamak' }, geoText: 'تامین اصل Gamak برای پروژه‌های صنعتی — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'محصولات Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین B2B' }, { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Digi System برای فروشگاه و واحد خرید شما', desc: 'ترازو، POS و peripheral — از انتخاب مدل تا تحویل در ایران.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'محصولات پرتقاضا Digi System', desc: 'ترازوی PC · POS یکپارچه · اسکنر و پرینتر — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل Digi System', desc: 'ترازو، POS، تجهیزات جانبی و نرم‌افزار خرده‌فروشی — تامین بین‌المللی' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Digi System در بازار خرده‌فروشی ایران', desc: 'نوع فروشگاه و تعداد صندوق را بفرستید — پکیج مناسب پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'تجهیزات Digi برای انواع فروشگاه و رستوران/هتل (HORECA)' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Digi System', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Digi System</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'آماده استعلام قیمت Digi System هستید؟', desc: 'نوع فروشگاه، تعداد صندوق و نیاز ترازوی قانونی (legal-for-trade) را بفرستید', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام Digi System' }, geoText: 'تامین Digi System برای پروژه‌های صنعتی — مشاوره فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'Teraoka Seiko', desc: 'ترازو و POS ژاپن' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Teraoka Seiko برای فروشگاه و انبار شما', desc: 'ترازو، برچسب‌زن و POS ژاپن — مشاوره مدل و لجستیک بین‌المللی.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Teraoka برای پروژه‌های ایرانی', desc: 'ترازوی فروشگاهی · deli scale · POS · برچسب‌زن — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل Teraoka Seiko', desc: 'ترازو، برچسب‌زن، POS و تجهیزات رستوران/فروشگاه — تامین از ژاپن' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Teraoka در بازار خرده‌فروشی و رستوران/فروشگاه ایران', desc: 'نوع فروشگاه یا آشپزخانه صنعتی را بفرستید — سری مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'تجهیزات Teraoka برای خرده‌فروشی، HORECA و لجستیک' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Teraoka Seiko', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teraoka Seiko</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="digi-system">Digi System</a>', cta: { title: 'آماده استعلام قیمت Teraoka هستید؟', desc: 'نوع ترازو، ظرفیت و تعداد صندوق را بفرستید — delicatessen · POS · برچسب‌زن', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام Teraoka' }, geoText: 'تامین Teraoka Seiko به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی توسط بیزدوار گروپ.', related: [{ title: 'Digi System', desc: 'ترازو و POS ترکیه' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      customWebAppPage: {
        hero: { eyebrow: 'فراتر از پلن ثابت', title: 'طراحی وب و اپلیکیشن اختصاصی', subtitle: 'وب‌اپ، پنل، PWA و اپ — سریع، حرفه‌ای و تخصصی', desc: 'وقتی <a href="fast">Fast Web Studio</a> برای لندینگ و فروشگاه کافی است، عالی. وقتی به منطق اختصاصی نیاز دارید — همین تیم بیزدوار اجرا می‌کند.', ctaForm: 'درخواست مشاوره', ctaWa: 'واتساپ تخصصی', ctaFast: 'پلن‌های Fast' },
        when: { eyebrow: 'چه زمانی؟', title: 'چه زمانی پروژه اختصاصی لازم است؟', desc: 'اگر یکی از این موارد را دارید، Fast کافی نیست.', items: [ { icon: 'users', title: 'نقش و دسترسی پیچیده', desc: 'چند نقش کاربری، شعبه یا سطح دسترسی.' }, { icon: 'gear', title: 'منطق کسب‌وکار', desc: 'سفارش، کیف پول، گزارش یا workflow اختصاصی.' }, { icon: 'mobile', title: 'اپ یا PWA', desc: 'تجربه موبایل فراتر از سایت ریسپانسیو.' }, { icon: 'link', title: 'یکپارچگی API', desc: 'اتصال به CRM، پرداخت یا سرویس‌های خارجی.' } ] },
        services: { eyebrow: 'خدمات', title: 'چه چیزی می‌سازیم؟', items: [ { icon: 'monitor', title: 'وب‌اپ و پنل', desc: 'داشبورد، ادمین و سامانه‌های وب.' }, { icon: 'mobile', title: 'اپلیکیشن', desc: 'PWA و مسیر اپ با UX حرفه‌ای.' }, { icon: 'globe', title: 'سایت چندزبانه پیچیده', desc: 'fa / tr / en با hreflang و محتوای محلی.' }, { icon: 'bag', title: 'فروشگاه پیشرفته', desc: 'فراتر از WooCommerce پایه.' }, { icon: 'shield', title: 'امنیت و نقش', desc: '۲FA، نقش‌ها و کنترل دسترسی.' }, { icon: 'rocket', title: 'تحویل تکراری', desc: 'نسخه‌های قابل تست با گزارش پیشرفت.' } ] },
        process: { eyebrow: 'فرآیند', title: 'از کشف تا تحویل', items: [ { num: '01', title: 'کشف', desc: 'هدف، کاربر و محدودیت‌ها.' }, { num: '02', title: 'معماری', desc: 'ماژول‌ها، داده و نقشه تحویل.' }, { num: '03', title: 'طراحی UI', desc: 'موبایل‌فرست و RTL حرفه‌ای.' }, { num: '04', title: 'توسعه', desc: 'نسخه‌های تکراری قابل تست.' }, { num: '05', title: 'تحویل', desc: 'آموزش، مانیتورینگ و پشتیبانی.' } ] },
        links: { eyebrow: 'مسیرهای مرتبط', title: 'از کجا شروع کنید؟', fastTitle: 'Fast Web Studio', fastDesc: 'سایت و فروشگاه در ۵ روز با قیمت ثابت.', fastCta: 'مشاهده پلن‌ها', webTitle: 'خدمات طراحی وب', webDesc: 'نمای کلی خدمات وب و وب‌اپ.', webCta: 'خدمات وب', appsTitle: 'اپلیکیشن و سامانه', appsDesc: 'محور نرم‌افزار بیزدوار.', appsCta: 'خدمات اپ', articleTitle: 'مقاله توسعه اختصاصی', articleDesc: 'راهنمای انتخاب Fast در برابر Custom.', articleCta: 'خواندن مقاله' },
        cta: { title: 'پروژه اختصاصی را شروع کنیم؟', desc: 'نیاز را بگویید — معماری و برآورد شفاف می‌دهیم.', form: 'فرم تماس', wa: 'واتساپ', portfolio: 'نمونه‌کارها' },
        geoText: 'طراحی وب‌اپ و اپلیکیشن اختصاصی برای کسب‌وکارهای ایران، ترکیه و بازار بین‌المللی — تیم بیزدوار گروپ.'
      },
      fastPage: { sections: { speed: { eyebrow: 'سرعت حرفه‌ای', title: 'چطور سریع و تخصصی کار می‌کنیم؟', desc: 'وعده مبهم نیست — زمان‌بندی روزانه، طراحی مدرن و ادامه مسیر تا وب‌اپ.' }, scope: { eyebrow: 'دامنه خدمات', title: 'سایت، فروشگاه، وب‌اپ و اپلیکیشن', desc: 'از پلن ثابت Fast شروع کنید؛ برای پروژه سفارشی به <a href="custom-web-app">صفحه وب و اپ</a> بروید.' }, deliverables: { eyebrow: 'خروجی تحویل', title: 'چه چیزی واقعاً تحویل می‌گیرید؟', desc: 'سایت آماده فروش/لید — نه فقط یک قالب خام.' }, guides: { eyebrow: 'راهنما و بلاگ', title: 'مطالب تخصصی طراحی وب و اپ', desc: 'قبل از سفارش بخوانید — یا از <a href="blog">وبلاگ بیزدوار</a> شروع کنید.' },  plans: { eyebrow: 'پلن‌های قیمت', title: 'پلن مناسب کسب‌وکار خود را انتخاب کنید', desc: 'قیمت ثابت، بدون هزینه پنهان — سفارش از واتساپ یا <a href="contact">فرم تماس</a>.' }, compare: { eyebrow: 'مقایسه پلن‌ها', title: 'چه چیزی در هر پلن می‌گیرید؟', desc: 'برای انتخاب بین پلن‌ها — این جدول را ببینید یا در واتساپ بپرسید.' }, timeline: { eyebrow: 'مسیر اجرا', title: '۵ روز تا آنلاین شدن — مرحله به مرحله', desc: 'هر روز هدف مشخص دارد و در واتساپ گزارش پیشرفت می‌دهیم.' }, why: { eyebrow: 'چرا Fast؟', title: 'چرا Fast Web Studio؟', desc: 'محصولی از <a href="about">بیزدوار گروپ</a> — نه آژانس عمومی با وعده‌های مبهم.' }, showcase: { eyebrow: 'نمونه‌کارها', title: 'سایت‌هایی که با بیزدوار ساخته شده‌اند', desc: 'نمونه پروژه‌های طراحی وب — <a href="portfolio">مشاهده همه نمونه‌کارها</a>' }, faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج قبل از سفارش', desc: '' } }, cta: { title: 'آماده راه‌اندازی سایت هستید؟', desc: 'مشاوره رایگان در واتساپ — پلن مناسب را در ۲ دقیقه پیشنهاد می‌دهیم.', btnWa: 'شروع در واتساپ', btnForm: 'فرم تماس', btnCustom: 'پروژه اختصاصی', btnDevConsult: 'برنامه‌نویسی تخصصی و مشاوره — تماس بگیرید' }, devCta: { title: 'نیاز به برنامه‌نویسی تخصصی دارید؟', desc: 'فراتر از پلن‌های Fast — پروژه سفارشی، CRM، فروشگاه پیشرفته و مشاوره فنی.', btn: 'برنامه‌نویسی تخصصی و مشاوره — تماس بگیرید' }, sticky: { label: 'سفارش Fast — از $99' }, geoText: 'طراحی سایت برای کسب‌وکارهای ایران، ترکیه و بازارهای بین‌المللی — تحویل ۵ روزه، واتساپ فارسی و پشتیبانی پس از راه‌اندازی.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن VEGA برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب مدل تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        quote: { eyebrow: 'راهنمای استعلام', title: 'استعلام دقیق‌تر = پیشنهاد سریع‌تر', desc: 'چک‌لیست زیر را در واتساپ یا فرم تماس بفرستید — حتی اگر فقط بخشی را بدانید.' },
        products: { eyebrow: 'کاتالوگ محصولات', title: 'محصولات پرتقاضا برای پروژه‌های ایرانی', desc: 'برای استعلام قیمت هر محصول — دکمه «درخواست استعلام» را بزنید. مشاوره فنی رایگان است.' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'VEGA در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — شرایط فرآیند را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        value: { eyebrow: 'مزیت‌های برند', title: 'چرا VEGA انتخاب مهندسان است؟', desc: 'بیش از ۶۵ سال نوآوری آلمان — هر سال بیش از ۵۰۰ هزار سنسور VEGA در جهان نصب می‌شود.' },
        principles: { eyebrow: 'اصول اندازه‌گیری', title: 'روش‌های اندازه‌گیری VEGA', desc: 'انتخاب اصل اندازه‌گیری مناسب — ما بر اساس شرایط شما بهترین را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'راهکار VEGA برای صنایع مختلف', desc: '۱۵+ صنعت — از شیمیایی تا انرژی و محیط‌زیست' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین VEGA توسط بیزدوار گروپ', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">وبسایت رسمی VEGA</a> است. برای استعلام قیمت، کد سفارش و تامین — <a href="contact">با بیزدوار تماس بگیرید</a>.', cta: { title: 'آماده استعلام قیمت VEGA هستید؟', desc: 'نام محصول یا شرایط فرآیند را بفرستید — مشاوره فنی رایگان و پیش‌فاکتور شفاف', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام VEGA', hint: 'مشاوره فنی فارسی · پاسخ سریع'       }, geoText: 'تامین اصل سنسور VEGA به ایران — مشاوره فنی چندزبانه، پیش‌فاکتور شفاف و لجستیک تا پروژه‌های صنعتی ایران.', related: [{ title: 'محصولات Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین' }, { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }] },
      uwtPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن UWT برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب سوئیچ یا رادار تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص UWT برای پروژه‌های ایرانی', desc: 'Rotonivo · Vibranivo · NivoRadar · NivoGuide — برای استعلام هر سری دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ اندازه‌گیری سطح UWT', desc: 'سوئیچ سطح، رادار بدون تماس، رادار هدایت‌شده و نمایش محلی' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'UWT در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع ماده و ارتفاع سیلو را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'سنسور سطح UWT برای جامدات فله و مایعات' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین UWT', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.uwtgroup.com/en/" target="_blank" rel="noopener noreferrer">وبسایت رسمی UWT</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت UWT هستید؟', desc: 'نوع ماده، ارتفاع سیلو و نقطه پر/خالی را بفرستید — Rotonivo · Vibranivo · NivoRadar', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام UWT' }, geoText: 'تامین سنسور سطح UWT از آلمان به ایران — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'کاتالوگ VEGA', desc: 'سنسور سطح و فشار' }, { title: 'Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین B2B' }, { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }] },
      prosensePage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Prosense برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب گاز و مدل تا تحویل هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        quote: { eyebrow: 'راهنمای استعلام', title: 'استعلام دقیق‌تر = پیشنهاد سریع‌تر', desc: 'چک‌لیست زیر را در واتساپ فارسی یا فرم تماس بفرستید — حتی اگر فقط بخشی را بدانید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Prosense', desc: 'SIL · M1 · EN-50545-1 · MPS — واتساپ یا فرم استعلام برای هر محصول.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'تمام سری‌های محصول Prosense', desc: '۸ دسته — بیش از ۶۰ سری — دتکتور ثابت، پرتابل، شعله، پنل، پارکینگ، نرم‌افزار و کالیبراسیون' },
        iran: { eyebrow: 'کاربرد در صنایع', title: 'Prosense در صنایع رایج', desc: 'اگر صنعت شما در لیست نیست — نوع گاز و محیط نصب را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'راهکار تشخیص گاز سفارشی برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Prosense', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران', desc: 'پاسخ سوال خود را پیدا نکردید؟ در واتساپ فارسی پیام بدهید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.prosense.com.tr/?lang=en" target="_blank" rel="noopener noreferrer">وبسایت رسمی Prosense</a> است. برای استعلام قیمت و تامین — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="articles/buy-prosense-iran">راهنمای خرید Prosense</a> · <a href="vega">محصولات VEGA</a>', cta: { title: 'آماده استعلام قیمت Prosense هستید؟', desc: 'نوع گاز یا سری مدل را بفرستید — PQ · SafeVader · SOMA · PPS+ · پنل S-DPX', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام Prosense', hint: 'مشاوره فنی فارسی · پاسخ سریع' }, geoText: 'تامین اصل دتکتور Prosense — گواهی SIL/M1/EN، مشاوره فارسی در واتساپ و لجستیک برای پروژه‌های نفت، گاز و صنعت.', related: [{ title: 'خرید Prosense در ایران', desc: 'PQ و SafeVader' }, { title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Teltonika برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب مدل ردیاب تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص برای پروژه‌های ایرانی', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'تمام محصولات Teltonika Telematics', desc: '۱۲ دسته — ۱۰۰+ مدل — ردیاب، CAN/OBD، asset، BLE، ویدئو، نرم‌افزار و لوازم جانبی' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Teltonika در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع ناوگان و داده مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'راهکار Fleet Telematics برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Teltonika', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teltonika Telematics</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="articles/buy-teltonika-iran">راهنمای خرید FMB920</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت Teltonika هستید؟', desc: 'مدل ردیاب یا نوع ناوگان را بفرستید — FMB920 · FMC650 · FTC305 · DualCam', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام Teltonika' }, geoText: 'تامین اصل ردیاب Teltonika به ایران — Fleet Telematics، مشاوره فارسی و تحویل برای ناوگان و IoT.', related: [{ title: 'خرید FMB920 در ایران', desc: 'ردیاب از ۲۹ دلار' }, { title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      liquiMolyPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Liqui Moly با قیمت دلاری شفاف', desc: 'از انتخاب روغن و افزودنی تا پیش‌فاکتور و تحویل — یک تیم فارسی‌زبان همراه شماست.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از انتخاب محصول تا تحویل — ۵ مرحله', desc: 'قیمت نمایشی دلاری است؛ مبلغ نهایی در پیش‌فاکتور تایید می‌شود.' },
        quote: { eyebrow: 'راهنمای استعلام', title: 'استعلام دقیق‌تر = پیشنهاد سریع‌تر', desc: 'نام محصول، کد SKU یا مدل خودرو را در واتساپ فارسی بفرستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'از Octane Plus تا روغن موتور', desc: 'قیمت تقریبی دلاری روی هر کارت — برای سفارش واتساپ یا فرم استعلام.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'محصولات Liqui Moly با قیمت دلاری', desc: 'کاتالوگ اصل Liqui Moly — روغن موتور، افزودنی سوخت، ضدیخ و مراقبت خودرو' },
        iran: { eyebrow: 'کاربرد', title: 'Liqui Moly برای چه کسانی؟', desc: 'از تعمیرگاه و ناوگان تا موتورسیکلت و مصرف شخصی — برای هر کاربرد، مسیر استعلام فارسی و تامین اصل آماده است.', note: 'کاربردتان در لیست نیست؟ مدل خودرو، نوع سوخت و تعداد را بفرستید تا پیشنهاد دقیق بگیریم.' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Liqui Moly', desc: 'شریک تامین شما — نه فقط لیست قیمت' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران', desc: 'پاسخ را پیدا نکردید؟ در واتساپ فارسی پیام بدهید.' }
      }, rateNote: { strong: '', body: '' }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.liqui-moly.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Liqui Moly</a> است. برای سفارش — <a href="contact">تماس با بیزدوار</a> · <a href="articles/liqui-moly-supply-iran">راهنمای تامین Liqui Moly</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده سفارش Liqui Moly هستید؟', desc: 'نام محصول یا کد SKU را بفرستید — Octane Plus · Top Tec · Molygen · افزودنی دیزل', btnForm: 'فرم استعلام', btnServices: 'کاتالوگ محصولات' }, sticky: { label: 'استعلام Liqui Moly', hint: 'قیمت دلاری · مشاوره فارسی' }, geoText: 'تامین اصل Liqui Moly — قیمت دلاری شفاف، مشاوره فارسی و لجستیک برای روغن، افزودنی و مراقبت خودرو.', related: [{ title: 'تامین Liqui Moly در ایران', desc: 'روغن و افزودنی اصل' }, { title: 'محصولات VEGA', desc: 'سنسور سطح و فشار صنعتی' }, { title: 'کاتالوگ محصولات', desc: 'برندهای تامین B2B' }, { title: 'تماس و استعلام', desc: 'استعلام قیمت Liqui Moly' }] }
    },
    tr: {
      aboutPage: { hero: { tag: 'Bizdavar Hakkında', title: 'Dijital ve endüstride büyüme ortağınız', desc: '2013’ten beri — 11 ülkede 100+ proje · pazarlama, web, fintech ve endüstriyel tedarik' }, whatIs: { title: 'Bizdavar Group nedir?', p1: 'Bizdavar Group, 2013 yılında <strong>Ersan Jahed Tabrizi</strong> tarafından kurulan bir dijital ajans ve B2B tedarik grubudur. Dijital hizmetlerimiz <a href="services#digital-marketing">dijital pazarlama</a>, <a href="fast">web tasarım</a>, fintech platformları ve SMM yönetimini kapsar. Sahip olunan ürünler ve <a href="products#supply">endüstriyel markalar</a> ürünler sayfasındadır.', p2: '11 ülkede 100+ web ve özel platform projesi — web tasarım, özel platformlar, VEGA tedariki ve dijital ürünler dahil. Dijital altyapı, domain, hosting, SSL ve teknik destek de ekibimiz tarafından yönetilir. <a href="portfolio">Portfolyoyu görüntüle</a>' }, features: ['Dijital pazarlama', 'Profesyonel web tasarım', 'Ekipman tedariki', 'Altyapı yönetimi'], stats: [{ value: '12+', label: 'Yıl deneyim' }, { value: '100+', label: 'Proje' }, { value: '11', label: 'Ülke' }, { value: '4', label: 'İş alanı' }], navAria: 'Sayfa bölümleri', nav: [{ href: '#profile', label: 'Kimlik' }, { href: '#activities', label: 'Uzmanlık' }, { href: '#ecosystem', label: 'Ekosistem' }, { href: '#presence', label: 'Küresel varlık' }, { href: '#highlights', label: 'Başarılar' }, { href: '#sources', label: 'Kaynaklar' }, { href: '#trust', label: 'Güven' }, { href: '#faq', label: 'SSS' }], sections: { identityEyebrow: 'Kurumsal kimlik', identityTitle: 'Bizdavar Group’a kısa bakış', leadershipEyebrow: 'Liderlik', leadershipTitle: 'Kurucu ve ekip', activitiesEyebrow: 'Faaliyet alanları', activitiesTitle: 'Uzmanlık alanları', ecosystemEyebrow: 'Ekosistem', ecosystemTitle: 'İlgili marka ve projeler', ecosystemDesc: 'Bizdavar’ın geliştirdiği veya yönettiği dijital ve endüstriyel ekosistemden örnekler', presenceEyebrow: 'Küresel varlık', presenceTitle: 'Aktif ülkeler', presenceDesc: 'Uluslararası proje ağı — ofisler: İran, Türkiye, Ermenistan ve Dubai', exhibitionsEyebrow: 'Fuar ve etkinlik', exhibitionsTitle: 'Teknoloji fuarlarındaki varlık', exhibitionsDesc: 'RINOTEX Tabriz’ten üniversite fuarlarına — inovasyon ve ticarileştirme etkinlikleri', achievementsEyebrow: 'Başarılar', achievementsTitle: 'Bizdavar ürün ve inovasyonları', achievementsDesc: 'Dijital hizmetler ve endüstriyel tedarikin yanı sıra Bizdavar ekibi özel ürünler de tasarladı', sourcesEyebrow: 'Doğrulanmış kaynaklar', sourcesTitle: 'Medya, fuarlar ve doğrulanabilir referanslar', sourcesDesc: 'Ürünler, fuarlar ve Bizdavar geçmişi hakkında yayımlanan resmi bağlantılar — site içi iddialardan bağımsız.', credentialsEyebrow: 'Sertifikalar', credentialsTitle: 'Doğrulanmış yetkinlikler', proofEyebrow: 'Profesyonel güven', proofTitle: 'Güven göstergeleri', proofDesc: 'Doğrulanabilir kamu kaynaklarına dayalıdır — sahte yorum yoktur', faqEyebrow: 'SSS', faqTitle: 'Bizdavar hakkında sık sorulanlar' }, relatedLinks: [{ title: 'Hizmetlerimiz', url: 'services', desc: 'Dijital pazarlama, web, SMM ve endüstri' }, { title: 'Portfolyo', url: 'portfolio', desc: 'ZedPay, BZ Diamond ve daha fazlası' }, { title: 'İletişim', url: 'contact', desc: 'Ücretsiz danışmanlık' }], values: { title: 'Değerlerimiz', items: [{ title: 'Sonuç odaklılık', desc: 'Sadece uygulama değil, satış, dönüşüm ve marka büyümesi.' }, { title: 'Şeffaf iş birliği', desc: 'Düzenli raporlama ve ekiple doğrudan iletişim.' }, { title: 'Küresel pazar', desc: 'İran, Türkiye ve uluslararası pazarlarda projeler.' }, { title: 'Hızlı uygulama', desc: 'Fast Web Studio — 5 günde web sitesi teslimi.' }] }, cta: { title: 'Bizdavar ile çalışmaya hazır mısınız?', desc: 'İlk danışmanlık ücretsiz — <a href="contact" class="link-yellow">iletişim formu</a> veya WhatsApp üzerinden.', btn: 'Bize ulaşın' } },
      servicesPage: { hero: { tag: 'Hizmetlerimiz', title: 'Bizdavar dijital ve teknik hizmetleri', desc: 'Pazarlama, web app, mobil, sistem, sunucu ve SMM — ayrıca CCTV, tesisat ve gizli aydınlatma. Ürünler <a href="products">ürünler sayfasında</a>.' }, overview: { eyebrow: 'Genel bakış', title: 'Altı Bizdavar hizmet alanı', desc: 'Dijital ve yazılım üstte — saha teknik hizmetleri aşağıda, özel teknik WhatsApp ile.' }, navAria: 'Hizmet listesi', viewDetails: 'Detayları gör', stats: [{ value: '6', label: 'Hizmet alanı' }, { value: '100+', label: 'Proje' }, { value: '2', label: 'Teknik şehir' }, { value: '12+', label: 'Yıl deneyim' }], cards: serviceBlocks.tr.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.tr, panels: servicesPanels.tr, relatedLinks: servicesRelatedLinks.tr, process: { eyebrow: 'İş birliği süreci', title: 'Nasıl çalışıyoruz?', desc: 'Sade, şeffaf ve takip edilebilir bir süreç.', steps: [{ title: 'Danışmanlık', desc: 'İhtiyaçları ve iş hedeflerini anlama' }, { title: 'Çözüm tasarımı', desc: 'Teknik öneri ve zaman planı' }, { title: 'Uygulama', desc: 'Kampanya, kurulum veya tedarik teslimi' }, { title: 'Destek', desc: 'Raporlama, optimizasyon ve sürekli destek' }] }, cta: { title: 'Özel bir çözüme mi ihtiyacınız var?', desc: 'Ücretsiz danışmanlık — proje örnekleri için <a href="portfolio">Bizdavar portfolyosu</a>', btn: 'Ücretsiz danışmanlık', btnSecondary: 'Portfolyoyu gör' } },
      portfolioPage: { hero: { tag: 'Portfolyo', title: 'Bizdavar hizmetleri, ürünleri ve tamamlanan işler', desc: 'Web tasarım, dijital pazarlama, SMM, FXGuard ve Fast Web Studio ürünleri, VEGA / Prosense / Liqui Moly tedariki — <a href="about">Bizdavar hakkında</a>.' }, areas: { eyebrow: 'Alanlar', title: 'Proje faaliyet alanları' }, archived: { eyebrow: 'Geçmiş projeler', title: 'Önceki ve tamamlanmamış işler', desc: 'Canlı bağlantısı olmayan veya yarım kalan projeler — sunucusu yenilenmeyen siteler veya tamamlanmamış marketplace projeleri dahil. Yalnızca kısaca anılır.' }, tags: ['Fintech ve ödeme', 'Muhasebe ve finans', 'Yapay zeka', 'iOS mobil uygulama', 'Etkinlik ve bilet', 'Holding ve yatırım', 'Hosting ve altyapı', 'Web tasarım ve mağaza', 'Uluslararası ticaret', 'İsviçre ticareti', 'SMM paneli', 'SMM yönetimi', 'Endüstriyel tedarik', 'VEGA sensör', 'Prosense dedektör', 'Havacılık', 'Broker ve finans'], cta: { title: 'Sıradaki proje markanız olabilir', desc: '<a href="fast" class="link-yellow">Web tasarımdan</a> DNS ve SSL yönetimine kadar Bizdavar yanınızda.', btnPrimary: 'Yeni proje başlat', btnSecondary: 'Hizmetleri gör' }, filters: [{ id: 'all', label: 'Tümü' }, { id: 'case-study', label: 'Örnek işler' }, { id: 'client', label: 'Müşteriler' }, { id: 'ecosystem', label: 'Ekosistem' }, { id: 'fintech', label: 'Fintech' }, { id: 'digital', label: 'Dijital' }, { id: 'industrial', label: 'Endüstriyel' }, { id: 'other', label: 'Diğer' }], roleLabels: { ecosystem: 'Ekosistem', 'case-study': 'Örnek iş', client: 'Müşteri', website: 'Web sitesi', page: 'Bizdavar sayfası' }, statsLabels: ['Proje ve marka', 'Örnek iş', 'Müşteri', 'Ekosistem'], filterAria: 'Portfolyo filtreleri', countText: '{count} öğe gösteriliyor', relatedLinks: portfolioRelatedLinks.tr },
      blogPage: {
        hero: {
          tag: 'Uzman blog',
          title: 'ABD/AB web tasarım, reklam ve endüstriyel rehberler',
          desc: 'İngilizce siteler USD veya EUR fatura, Google/Meta/LinkedIn kampanyaları — artı İran için orijinal VEGA tedariki.',
          ctaArticles: 'Yazıları gör',
          ctaTopics: 'Konular',
          ctaConsult: 'Ücretsiz danışmanlık'
        },
        intro: {
          title: 'Gerçek projelerden pratik bilgi',
          body: 'Bizdavar blog, <a href="/pages/services">dijital hizmetler</a>, <a href="/pages/fast">Fast Studio web tasarım</a> ve <a href="/pages/products#supply">endüstriyel tedarik</a> deneyimini özetler. Dijital pazarlama, SEO, SMM, çok dilli site ve VEGA satın alma yolunu slogan değil — uygulama ile okuyun.',
          statPosts: '13',
          statPostsLabel: 'Makale ve rehber',
          statLangs: '5',
          statLangsLabel: 'Yayın dili',
          statTopics: '5',
          statTopicsLabel: 'Konu kümesi'
        },
        topics: {
          eyebrow: 'Konu kümeleri',
          title: 'SEO’dan VEGA sensörüne',
          desc: 'İhtiyaca göre seçin — her konu ilgili hizmet veya ürün sayfasına bağlanır.',
          digital: { label: 'Dijital pazarlama', desc: 'SEO, CRO ve SMM' },
          web: { label: 'Web tasarım', desc: 'Çok dilli site ve Fast Studio' },
          industrial: { label: 'Endüstriyel tedarik', desc: 'VEGA ve ölçüm' },
          products: { label: 'Bizdavar ürünleri', desc: 'BizPet, BizTab ve BizClean' },
          company: { label: 'Şirket', desc: 'Tarihçe ve faaliyet alanları' }
        },
        catalog: {
          eyebrow: 'Yazı kataloğu',
          title: 'Tüm rehberler tek bakışta',
          desc: 'Konuya göre filtreleyin veya yazıyı açın — bağlantılar HTML’de crawler’lara açıktır.',
          filterAll: 'Tümü',
          empty: 'Bu kategoride yazı yok.',
          filterAria: 'Yazı konusu filtresi',
          countText: '{count} yazı',
          relatedService: 'İlgili hizmet'
        },
        featured: {
          eyebrow: 'Editör seçimi',
          title: 'En yeni rehberler',
          desc: 'Hizmet veya teklif sayfasına doğrudan bağlantılı son yazılar.'
        },
        linkHub: {
          eyebrow: 'Hızlı yollar',
          title: 'Blogdan ana sayfalara',
          desc: 'Hizmet, katalog veya iletişim — menüde aramadan.',
          items: [
            { title: 'ABD/AB web tasarım', url: '/pages/articles/website-design-us-eu', desc: '$99’dan / EUR fatura' },
            { title: 'ABD/AB reklam', url: '/pages/articles/digital-marketing-us-eu', desc: 'Google, Meta, LinkedIn' },
            { title: 'Fast Studio', url: '/pages/fast', desc: '5 günde İngilizce site' },
            { title: 'Hizmetler', url: '/pages/services', desc: 'Web, Ads ve uygulama' },
            { title: 'İletişim / teklif', url: '/pages/contact?service=web-design', desc: 'USD veya EUR fatura' },
            { title: 'VEGAPULS satın al', url: '/pages/articles/buy-vegapuls-iran', desc: 'İran seviye sensörü' },
            { title: 'VEGA kataloğu', url: '/pages/vega', desc: 'Seviye sensörü' },
            { title: 'Prosense satın al', url: '/pages/articles/buy-prosense-iran', desc: 'Gaz dedektörü' },
            { title: 'Teltonika', url: '/pages/teltonika', desc: 'FMB920 — 29$’dan' },
            { title: 'Digi', url: '/pages/articles/buy-digi-system-iran', desc: 'Terazi ve POS' },
            { title: 'Endüstriyel ticaret', url: '/pages/articles/industrial-trade-iran', desc: 'Tüm markalar' },
            { title: 'Ürünler', url: '/pages/products#supply', desc: 'Tedarik kataloğu' }
          ]
        },
        clusters: {
          eyebrow: 'Sonraki adım',
          title: 'Yazıdan hizmete veya teklife',
          desc: 'Rehber yetmezse aynı konuyu Bizdavar ekibiyle projeye çevirin.',
          digitalTitle: 'Pazarlama ve SEO',
          digitalDesc: 'Kampanya, SEO ve SMM — ABD/AB bütçesi USD veya EUR.',
          webTitle: 'Web tasarım',
          webDesc: 'İngilizce LTR site 5 günde — $99 / ~€90’dan, Stripe ve Zoom/Meet.',
          industrialTitle: 'VEGA satın al',
          industrialDesc: 'Sipariş kodu, proforma ve sahaya lojistik.',
          prosenseTitle: 'Prosense dedektör',
          prosenseDesc: 'Gaz, alev ve SIL — B2B proforma.',
          portfolioTitle: 'Portföy',
          portfolioDesc: 'Marvi Society, FXGuard ve dijital projeler.',
          appsTitle: 'iOS uygulama',
          appsDesc: 'Tasarım, Swift ve App Store.'
        },
        faq: {
          eyebrow: 'SSS',
          title: 'Okumadan önce',
          desc: 'Bizdavar blog hakkında sık aranan sorular.',
          items: [
            { q: 'Bizdavar blog ne hakkında?', a: 'Dijital pazarlama, SEO, çok dilli web, Fast Web Studio, VEGA sensör tedariki ve BizPet / BizTab gibi özgün ürün rehberleri.' },
            { q: 'Yazılar kaç dilde yayımlanır?', a: 'Blog ve ana makaleler Farsça, Türkçe, İngilizce, Rusça ve Arapça — ayrı hreflang ile indekslenir.' },
            { q: 'Hizmetle ilgili yazıyı nasıl bulurum?', a: 'Üstteki konu filtresini kullanın veya pazarlama, web tasarım ve endüstriyel kümelerden hizmet sayfalarına gidin.' },
            { q: 'VEGA teklifi için ne yapmalıyım?', a: 'Modeli veya tank verisini WhatsApp ya da iletişim formuna gönderin — proforma ve sipariş kodu hazırlanır.' },
            { q: 'Bizdavar ürünleri blogda var mı?', a: 'Evet. BizTab, BizClean V5 ve BizPet ısı pedinin ayrı sayfaları bu listeden açılır.' }
          ]
        },
        cta: {
          title: 'Uzman danışmanlığa mı ihtiyacınız var?',
          desc: 'Konunuzu <a href="/pages/contact">iletişim formuna</a> yazın — veya WhatsApp’tan mesaj atın.',
          btn: 'Danışmanlık iste',
          btnWa: 'Farsça WhatsApp'
        },
        geoText: 'İran ve Türkiye işletmeleri için yazılar — dijital pazarlama, SEO, çok dilli web ve VEGA endüstriyel tedariki.',
        related: [
          { title: 'ABD/AB web tasarım', desc: '$99’dan / EUR fatura', titleKey: 'blogPage.related.0.title', descKey: 'blogPage.related.0.desc' },
          { title: 'ABD/AB reklam', desc: 'Google, Meta, LinkedIn', titleKey: 'blogPage.related.1.title', descKey: 'blogPage.related.1.desc' },
          { title: 'VEGA kataloğu', desc: 'Seviye ve basınç sensörü', titleKey: 'blogPage.related.2.title', descKey: 'blogPage.related.2.desc' },
          { title: 'İletişim', desc: 'Ücretsiz danışmanlık', titleKey: 'blogPage.related.3.title', descKey: 'blogPage.related.3.desc' }
        ]
      },
      privacyPage: { hero: { title: 'Gizlilik Politikası', desc: 'Bizdavar Group web sitesinde bilgilerinizin nasıl toplandığı ve kullanıldığı' }, sections: [{ title: '1. Toplanan bilgiler', body: '<a href="contact">İletişim formunu</a> gönderdiğinizde adınız, e-posta adresiniz, telefon numaranız (isteğe bağlı), hizmet türü ve mesajınız alınır. Bu bilgiler yalnızca talebinize yanıt vermek için kullanılır.' }, { title: '2. Kullanım şekli', items: ['Danışmanlık talebine ve hizmet önerisine yanıt vermek', 'Görüşme aşamasındaki projeleri takip etmek', 'Hizmet kalitesini iyileştirmek (kamuya açık paylaşım olmadan)'] }, { title: '3. Üçüncü taraflarla paylaşım', body: 'Bilgileriniz açık izniniz olmadan üçüncü taraflara satılmaz veya aktarılmaz; yasal zorunluluklar hariç.' }, { title: '4. Çerezler ve analiz', body: 'Bu site ziyaret ölçümü için <strong>Google Tag Manager</strong> (GTM-NXWQQWF8) ve <strong>Google Analytics 4</strong> (G-4GFEY12SLH) kullanır. Bu araçlar çerez veya benzer tanımlayıcılar ayarlayabilir. Dil algılama ayrıntıları bölüm 5\'tedir.' }, { title: '5. Dil ve bölge algılama', body: 'Uygun dili göstermek için (Farsça, Türkçe, İngilizce) IP adresiniz yaklaşık ülke tespiti amacıyla anonim olarak <strong>ipapi.co</strong> veya <strong>ipwho.is</strong> servislerine gönderilebilir. Dil tercihi tarayıcı <code>localStorage</code> içinde (<code>bizdavar_locale</code> anahtarı) saklanır. Dili menüden veya <code>?lang=fa</code>, <code>?lang=tr</code>, <code>?lang=en</code> parametreleriyle istediğiniz zaman seçebilirsiniz.' }, { title: '6. Bize ulaşın', body: 'Gizlilik soruları için: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> veya <a href="contact">iletişim formu</a>.' }], updated: 'Son güncelleme: Nisan 2025' },
      gamakPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Gamak tedariki', desc: 'Sadece katalog göstermiyoruz — güç seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan Gamak serileri', desc: 'GM/GMB · B5/B35 flanş · IE2/IE3 · Frenli — her seri için “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Gamak elektrik motoru kataloğu', desc: 'Üç fazlı ve tek fazlı — IE2/IE3 — flanş, ayak, frenli ve projeye özel' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Gamak yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — yük türü ve güç ihtiyacını gönderin.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Gamak motorları her endüstriyel bölüm için' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Gamak tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">resmi Gamak web sitesine</a> dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Gamak fiyat teklifine hazır mısınız?', desc: 'kW, rpm ve uygulama tipini gönderin — IE2/IE3/IE4 · Ex-proof · MV', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'Gamak teklifi' }, geoText: 'Orijinal Gamak motor tedariki — uluslararası Türkçe teknik danışmanlık, proforma ve uluslararası lojistik.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Ürün kataloğu', desc: 'Tedarik markaları' }, { title: 'İletişim', desc: 'Ücretsiz danışmanlık' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Mağaza ve satınalma biriminiz için güvenilir Digi System tedariki', desc: 'Terazi, POS ve çevre birimleri — model seçiminden teslimata.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Digi System öne çıkan ürünler', desc: 'PC terazi · entegre POS · tarayıcı ve yazıcı — “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Digi System tam katalog', desc: 'Terazi, POS, çevre birimleri ve perakende yazılımı — uluslararası tedarik' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Digi System perakende pazarında', desc: 'Mağaza türü ve kasa sayısını gönderin — uygun paketi önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı sektörlerde uygulama', desc: 'Digi perakende ekipmanları — mağaza ve HORECA' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Digi System tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">resmi Digi System</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'Digi System fiyat teklifine hazır mısınız?', desc: 'Mağaza türü, kasa sayısı ve onaylı terazi ihtiyacını gönderin', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'Digi System teklifi' }, geoText: 'Digi System terazi ve POS tedariki — Türkçe danışmanlık, proforma ve uluslararası lojistik.', related: [{ title: 'Teraoka Seiko', desc: 'Japon terazi ve POS' }, { title: 'Ürün kataloğu', desc: 'Tedarik markaları' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Mağaza ve depo biriminiz için güvenilir Teraoka Seiko tedariki', desc: 'Japon terazi, etiketleme ve POS — model danışmanlığı ve uluslararası lojistik.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan Teraoka serileri', desc: 'Mağaza terazisi · deli scale · POS · etiketleme — “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Teraoka Seiko tam katalog', desc: 'Terazi, etiketleme, POS ve food service — Japonya tedariki' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Teraoka perakende ve food service pazarında', desc: 'Mağaza veya endüstriyel mutfak türünü gönderin — uygun seriyi önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı sektörlerde uygulama', desc: 'Teraoka ekipmanları — perakende, HORECA ve lojistik' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Teraoka Seiko tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">resmi Teraoka Seiko</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="digi-system">Digi System</a>', cta: { title: 'Teraoka fiyat teklifine hazır mısınız?', desc: 'Terazi türü, kapasite ve kasa sayısını gönderin — deli · POS · etiketleme', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'Teraoka teklifi' }, geoText: 'Teraoka Seiko tedariki — Türkçe danışmanlık, proforma ve uluslararası lojistik Bizdavar tarafından.', related: [{ title: 'Digi System', desc: 'Türkiye terazi ve POS' }, { title: 'Ürün kataloğu', desc: 'Tedarik markaları' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      customWebAppPage: {
        hero: { eyebrow: 'Sabit planın ötesi', title: 'Özel web ve uygulama geliştirme', subtitle: 'Web app, panel, PWA ve uygulama — hızlı, profesyonel, uzman', desc: '<a href="fast">Fast Web Studio</a> landing ve mağaza için yeter; özel mantık gerektiğinde aynı Bizdavar ekibi yürütür.', ctaForm: 'Danışmanlık iste', ctaWa: 'WhatsApp', ctaFast: 'Fast planları' },
        when: { eyebrow: 'Ne zaman?', title: 'Ne zaman özel proje gerekir?', desc: 'Bunlardan biri varsa Fast yetmez.', items: [ { icon: 'users', title: 'Karmaşık roller', desc: 'Çoklu rol, şube veya erişim seviyesi.' }, { icon: 'gear', title: 'İş mantığı', desc: 'Sipariş, cüzdan, rapor veya özel workflow.' }, { icon: 'mobile', title: 'Uygulama veya PWA', desc: 'Responsive siteden fazlası.' }, { icon: 'link', title: 'API entegrasyonu', desc: 'CRM, ödeme veya dış servisler.' } ] },
        services: { eyebrow: 'Hizmetler', title: 'Ne inşa ediyoruz?', items: [ { icon: 'monitor', title: 'Web app & panel', desc: 'Dashboard, admin ve web sistemleri.' }, { icon: 'mobile', title: 'Uygulama', desc: 'PWA ve mobil deneyim.' }, { icon: 'globe', title: 'Çok dilli site', desc: 'fa / tr / en + hreflang.' }, { icon: 'bag', title: 'Gelişmiş mağaza', desc: 'Temel WooCommerce ötesi.' }, { icon: 'shield', title: 'Güvenlik & roller', desc: '2FA ve erişim kontrolü.' }, { icon: 'rocket', title: 'İteratif teslim', desc: 'Test edilebilir sürümler.' } ] },
        process: { eyebrow: 'Süreç', title: 'Keşiften teslimata', items: [ { num: '01', title: 'Keşif', desc: 'Hedef, kullanıcı, kısıtlar.' }, { num: '02', title: 'Mimari', desc: 'Modüller, veri, yol haritası.' }, { num: '03', title: 'UI tasarım', desc: 'Mobil öncelikli RTL.' }, { num: '04', title: 'Geliştirme', desc: 'İteratif test edilebilir sürümler.' }, { num: '05', title: 'Teslim', desc: 'Eğitim ve destek.' } ] },
        links: { eyebrow: 'İlgili yollar', title: 'Nereden başlamalı?', fastTitle: 'Fast Web Studio', fastDesc: '5 günde sabit fiyatlı site/mağaza.', fastCta: 'Planları gör', webTitle: 'Web tasarım hizmetleri', webDesc: 'Web ve web app hizmet özeti.', webCta: 'Web hizmetleri', appsTitle: 'Uygulama & sistem', appsDesc: 'Bizdavar yazılım ekseni.', appsCta: 'App hizmetleri', articleTitle: 'Özel geliştirme yazısı', articleDesc: 'Fast vs Custom seçim rehberi.', articleCta: 'Makaleyi oku' },
        cta: { title: 'Özel projeye başlayalım mı?', desc: 'İhtiyacı yazın — net mimari ve tahmin.', form: 'İletişim formu', wa: 'WhatsApp', portfolio: 'Portfolyo' },
        geoText: 'İran, Türkiye ve uluslararası pazarlar için özel web app ve uygulama — Bizdavar Group.'
      },
      fastPage: { sections: { speed: { eyebrow: 'Profesyonel hız', title: 'Nasıl hızlı ve uzman çalışıyoruz?', desc: 'Belirsiz vaat yok — günlük plan, modern tasarım ve web app yolu.' }, scope: { eyebrow: 'Hizmet kapsamı', title: 'Site, mağaza, web app ve uygulama', desc: 'Sabit fiyatlı Fast ile başlayın; özel proje için <a href="custom-web-app">web & app</a>.' }, deliverables: { eyebrow: 'Teslimat', title: 'Gerçekte ne teslim alırsınız?', desc: 'Satış/lead için hazır site — ham şablon değil.' }, guides: { eyebrow: 'Rehber ve blog', title: 'Web ve uygulama yazıları', desc: 'Sipariş öncesi okuyun — veya <a href="blog">Bizdavar blog</a>.' },  plans: { eyebrow: 'Fiyat planları', title: 'İşletmeniz için doğru planı seçin', desc: 'Sabit fiyat, gizli maliyet yok — WhatsApp veya <a href="contact">iletişim formu</a> ile sipariş.' }, compare: { eyebrow: 'Plan karşılaştırması', title: 'Her planda neler var?', desc: 'Plan seçmek için tabloyu inceleyin veya WhatsApp’tan sorun.' }, timeline: { eyebrow: 'Uygulama yolu', title: '5 günde yayına — adım adım', desc: 'Her gün net hedef ve WhatsApp üzerinden ilerleme raporu.' }, why: { eyebrow: 'Neden Fast?', title: 'Neden Fast Web Studio?', desc: '<a href="about">Bizdavar Group</a> ürünü — belirsiz vaatler veren genel bir ajans değil.' }, showcase: { eyebrow: 'Örnek işler', title: 'Bizdavar ile yapılan web siteleri', desc: 'Web tasarım örnekleri — <a href="portfolio">tüm portfolyoyu gör</a>' }, faq: { eyebrow: 'SSS', title: 'Sipariş öncesi sık sorulanlar', desc: '' } }, cta: { title: 'Web sitenizi başlatmaya hazır mısınız?', desc: 'WhatsApp’ta ücretsiz danışmanlık — uygun planı 2 dakikada önerelim.', btnWa: 'WhatsApp’ta başla', btnForm: 'İletişim formu', btnCustom: 'Özel proje', btnDevConsult: 'Özel yazılım ve danışmanlık — iletişime geçin' }, devCta: { title: 'Özel yazılım geliştirme mi istiyorsunuz?', desc: 'Fast planlarının ötesinde — özel proje, CRM, gelişmiş mağaza ve teknik danışmanlık.', btn: 'Özel yazılım ve danışmanlık — iletişime geçin' }, sticky: { label: 'Fast siparişi — $99\'dan itibaren' }, geoText: 'Türkiye, İran ve uluslararası pazarlardaki işletmeler için web tasarımı — 5 günde teslim, Türkçe WhatsApp danışmanlığı ve lansman sonrası destek.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir VEGA tedariki', desc: 'Sadece katalog göstermiyoruz — model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        quote: { eyebrow: 'Teklif rehberi', title: 'Daha net talep = daha hızlı öneri', desc: 'Aşağıdaki kontrol listesini WhatsApp veya forma gönderin — kısmi bilgi de yeter.' },
        products: { eyebrow: 'Ürün kataloğu', title: 'Endüstriyel projelerde en çok talep edilen ürünler', desc: 'Her ürün için teklif almak üzere “Teklif iste” düğmesini kullanın. Teknik danışmanlık ücretsizdir.' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'VEGA yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — proses koşullarını gönderin, uygun modeli önerelim.' },
        value: { eyebrow: 'Marka avantajları', title: 'Neden mühendisler VEGA’yı seçiyor?', desc: '65 yılı aşkın Alman inovasyonu — her yıl dünyada 500 binden fazla VEGA sensörü kuruluyor.' },
        principles: { eyebrow: 'Ölçüm prensipleri', title: 'VEGA ölçüm yöntemleri', desc: 'Doğru ölçüm prensibini seçin — koşullarınıza göre en iyisini öneririz.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstriler için VEGA çözümü', desc: '15+ endüstri — kimyadan enerjiye ve çevreye' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Bizdavar Group ile VEGA tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Ürünlerin teknik bilgileri <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">resmi VEGA web sitesine</a> dayanır. Fiyat teklifi, sipariş kodu ve tedarik için — <a href="contact">Bizdavar ile iletişime geçin</a>.', cta: { title: 'VEGA fiyat teklifine hazır mısınız?', desc: 'Ürün adını veya proses koşullarını gönderin — ücretsiz teknik danışmanlık ve şeffaf proforma', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'VEGA teklifi', hint: 'Türkçe teknik danışmanlık · hızlı yanıt' }, geoText: 'Orijinal VEGA sensör tedariki — uluslararası Türkçe teknik danışmanlık, şeffaf proforma ve endüstriyel projelere lojistik.', related: [{ title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Ürün kataloğu', desc: 'Tedarik markaları' }, { title: 'İletişim ve teklif', desc: 'Ücretsiz danışmanlık' }] },
      uwtPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir UWT tedariki', desc: 'Sadece katalog göstermiyoruz — şalter veya radar seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Bölgesel projeler için öne çıkan UWT serileri', desc: 'Rotonivo · Vibranivo · NivoRadar · NivoGuide — her seri için “Teklif iste” düğmesini kullanın.' },
        catalog: { eyebrow: 'Tam katalog', title: 'UWT seviye ölçüm kataloğu', desc: 'Seviye şalteri, temassız radar, guided radar ve yerel gösterge' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'UWT yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — malzeme türü ve silo yüksekliğini gönderin, uygun modeli önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'UWT seviye sensörleri dökme katı ve sıvılar için' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'UWT tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.uwtgroup.com/en/" target="_blank" rel="noopener noreferrer">resmi UWT web sitesine</a> dayanır. Teklif için — <a href="contact">Bizdavar ile iletişime geçin</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'UWT fiyat teklifine hazır mısınız?', desc: 'Malzeme türü, silo yüksekliği ve dolu/boş noktayı gönderin — Rotonivo · Vibranivo · NivoRadar', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'UWT teklifi' }, geoText: 'Almanya\'dan UWT seviye sensör tedariki — Türkçe teknik danışmanlık, proforma ve lojistik — Bizdavar Group.', related: [{ title: 'VEGA kataloğu', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense', desc: 'Gaz ve alev dedektörü' }, { title: 'Ürün kataloğu', desc: 'B2B tedarik markaları' }, { title: 'İletişim ve teklif', desc: 'Ücretsiz danışmanlık' }] },
      prosensePage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Prosense tedariki', desc: 'Sadece katalog göstermiyoruz — gaz ve model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        quote: { eyebrow: 'Teklif rehberi', title: 'Daha net talep = daha hızlı öneri', desc: 'Aşağıdaki kontrol listesini WhatsApp veya forma gönderin — kısmi bilgi de yeter.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan seriler', desc: 'SIL · M1 · EN-50545-1 · MPS — her ürün için WhatsApp veya teklif formu.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Tüm Prosense ürün serileri', desc: '8 kategori — 60’tan fazla seri — sabit, taşınabilir, alev, panel, otopark, yazılım ve kalibrasyon' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Prosense yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — gaz türü ve kurulum ortamını gönderin, uygun modeli önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Her endüstriyel bölüm için özel gaz algılama çözümü' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Prosense tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Farsça WhatsApp’tan yazın.' }
      }, officialNote: 'Ürünlerin teknik bilgileri <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">resmi Prosense web sitesine</a> dayanır. Fiyat teklifi ve tedarik için — <a href="contact">Bizdavar ile iletişime geçin</a> · <a href="articles/buy-prosense-iran">Prosense rehberi</a> · <a href="vega">VEGA ürünleri</a>', cta: { title: 'Prosense fiyat teklifine hazır mısınız?', desc: 'Gaz türünü veya model serisini gönderin — PQ · SafeVader · SOMA · PPS+ · S-DPX paneli', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'Prosense teklifi', hint: 'Türkçe teknik danışmanlık · hızlı yanıt' }, geoText: 'Orijinal Prosense dedektör tedariki — SIL/M1/EN sertifikaları, Farsça WhatsApp danışmanlığı ve petrol, gaz ve endüstri projeleri için lojistik.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Teltonika GPS', desc: 'Fleet Telematics' }, { title: 'Endüstriyel hizmetler', desc: 'B2B danışmanlık' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Teltonika tedariki', desc: 'Sadece katalog göstermiyoruz — model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan modeller', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — her ürün için “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Tüm Teltonika Telematics ürünleri', desc: '12 kategori — 100+ model — tracker, CAN/OBD, asset, BLE, video, yazılım ve aksesuar' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Teltonika yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — filo türü ve veri ihtiyacını gönderin.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Her sektör için Fleet Telematics çözümü' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Teltonika tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">resmi Teltonika Telematics</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="articles/buy-teltonika-iran">FMB920 rehberi</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Teltonika fiyat teklifine hazır mısınız?', desc: 'Tracker modeli veya filo türünü gönderin — FMB920 · FMC650 · FTC305', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'Teltonika teklifi' }, geoText: 'Orijinal Teltonika GPS tedariki — Fleet Telematics, Türkçe danışmanlık ve uluslararası lojistik.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Ürün kataloğu', desc: 'Tedarik markaları' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      liquiMolyPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Şeffaf dolar fiyatıyla güvenilir Liqui Moly tedariki', desc: 'Yağ ve katkı seçiminden proforma ve teslimata — Farsça ve Türkçe destek.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Ürün seçiminden teslimata — 5 adım', desc: 'Gösterilen fiyat dolardır; nihai tutar proformada onaylanır.' },
        quote: { eyebrow: 'Teklif rehberi', title: 'Daha net talep = daha hızlı öneri', desc: 'Ürün adı, SKU veya araç modelini WhatsApp’tan gönderin.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Octane Plus’tan motor yağına', desc: 'Her kartta yaklaşık dolar fiyatı — WhatsApp veya teklif formu.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Dolar fiyatlı Liqui Moly ürünleri', desc: 'Orijinal Liqui Moly kataloğu — motor yağı, yakıt katkısı, antifriz ve oto bakım' },
        iran: { eyebrow: 'Uygulama', title: 'Liqui Moly kimler için?', desc: 'Servisten filoya, motosikletten bireysel kullanıma — her kullanım için Farsça teklif ve orijinal tedarik.', note: 'Listenizde yok mu? Araç modeli, yakıt tipi ve adedi gönderin — net öneri verelim.' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Liqui Moly tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece fiyat listesi değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? WhatsApp’tan yazın.' }
      }, rateNote: { strong: '', body: '' }, officialNote: 'Teknik bilgiler <a href="https://www.liqui-moly.com/" target="_blank" rel="noopener noreferrer">resmi Liqui Moly web sitesine</a> dayanır. Sipariş için — <a href="contact">Bizdavar</a> · <a href="articles/liqui-moly-supply-iran">Liqui Moly rehberi</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Liqui Moly siparişine hazır mısınız?', desc: 'Ürün adı veya SKU gönderin — Octane Plus · Top Tec · Molygen', btnForm: 'Teklif formu', btnServices: 'Ürün kataloğu' }, sticky: { label: 'Liqui Moly teklifi', hint: 'Dolar fiyat · Farsça danışmanlık' }, geoText: 'Orijinal Liqui Moly tedariki — şeffaf dolar fiyat, Farsça danışmanlık ve uluslararası lojistik.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Ürün kataloğu', desc: 'B2B tedarik markaları' }, { title: 'İletişim', desc: 'Liqui Moly fiyat teklifi' }] }
    },
    en: {
      aboutPage: { hero: { tag: 'About Bizdavar', title: 'Your growth partner in digital and industry', desc: 'Since 2013 — 100+ projects in 11 countries · marketing, web, fintech and industrial supply' }, whatIs: { title: 'What is Bizdavar Group?', p1: 'Bizdavar Group is a digital agency and B2B supply group founded in 2013 by <strong>Ersan Jahed Tabrizi</strong>. Our digital services include <a href="services#digital-marketing">digital marketing</a>, <a href="fast">web design</a>, fintech platforms and SMM management. Owned products and <a href="products#supply">industrial brands</a> live on the products page.', p2: '100+ custom web and platform projects across 11 countries — from custom web and platforms to VEGA supply and digital products. Digital infrastructure, domains, hosting, SSL and technical support are also managed by our team. <a href="portfolio">View portfolio</a>' }, features: ['Digital marketing', 'Professional web design', 'Equipment supply', 'Infrastructure management'], stats: [{ value: '12+', label: 'Years experience' }, { value: '100+', label: 'Projects' }, { value: '11', label: 'Countries' }, { value: '4', label: 'Business pillars' }], navAria: 'Page sections', nav: [{ href: '#profile', label: 'Profile' }, { href: '#activities', label: 'Expertise' }, { href: '#ecosystem', label: 'Ecosystem' }, { href: '#presence', label: 'Global presence' }, { href: '#highlights', label: 'Highlights' }, { href: '#sources', label: 'Sources' }, { href: '#trust', label: 'Trust' }, { href: '#faq', label: 'FAQ' }], sections: { identityEyebrow: 'Company profile', identityTitle: 'Bizdavar Group at a glance', leadershipEyebrow: 'Leadership', leadershipTitle: 'Founder and team', activitiesEyebrow: 'Activity areas', activitiesTitle: 'Areas of expertise', ecosystemEyebrow: 'Ecosystem', ecosystemTitle: 'Related brands and projects', ecosystemDesc: 'Examples from the digital and industrial ecosystem Bizdavar has developed or managed', presenceEyebrow: 'Global presence', presenceTitle: 'Active countries', presenceDesc: 'International project network offices in Iran, Turkey, Armenia and Dubai — projects across Europe and the US', exhibitionsEyebrow: 'Exhibitions & events', exhibitionsTitle: 'Technology exhibition presence', exhibitionsDesc: 'Innovation and commercialization events — from RINOTEX Tabriz to university fairs', achievementsEyebrow: 'Achievements', achievementsTitle: 'Bizdavar products & innovation', achievementsDesc: 'Beyond digital services and industrial supply, the Bizdavar team has also designed owned products', sourcesEyebrow: 'Verified sources', sourcesTitle: 'Media, exhibitions and verifiable references', sourcesDesc: 'Official links published about products, exhibitions and Bizdavar history — independent of on-site claims.', credentialsEyebrow: 'Certifications', credentialsTitle: 'Verified skills', proofEyebrow: 'Professional credibility', proofTitle: 'Trust indicators', proofDesc: 'Based on verifiable public sources — no fabricated testimonials', faqEyebrow: 'FAQ', faqTitle: 'Common questions about Bizdavar' }, relatedLinks: [{ title: 'Our services', url: 'services', desc: 'Digital marketing, web, SMM and industry' }, { title: 'Portfolio', url: 'portfolio', desc: 'ZedPay, BZ Diamond and more' }, { title: 'Contact us', url: 'contact', desc: 'Free consultation' }], values: { title: 'Our values', items: [{ title: 'Outcome focus', desc: 'Sales, conversion and brand growth — not just execution.' }, { title: 'Transparent collaboration', desc: 'Regular reporting and direct communication with the team.' }, { title: 'Global market', desc: 'Projects in Iran, Turkey and international markets.' }, { title: 'Fast execution', desc: 'Fast Web Studio — website delivery in 5 days.' }] }, cta: { title: 'Ready to work with Bizdavar?', desc: 'Initial consultation is free — through the <a href="contact" class="link-yellow">contact form</a> or WhatsApp.', btn: 'Contact us' } },
      servicesPage: { hero: { tag: 'Our services', title: 'Bizdavar digital & technical services', desc: 'Marketing, web apps, mobile, systems, servers and SMM — plus CCTV, wiring and cove lighting. Products live on the <a href="products">products page</a>.' }, overview: { eyebrow: 'Overview', title: 'Six Bizdavar service areas', desc: 'Digital and software up top — on-site technical services below via dedicated technical WhatsApp.' }, navAria: 'Services list', viewDetails: 'View details', stats: [{ value: '6', label: 'Service areas' }, { value: '100+', label: 'Projects' }, { value: '2', label: 'Field cities' }, { value: '12+', label: 'Years experience' }], cards: serviceBlocks.en.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.en, panels: servicesPanels.en, relatedLinks: servicesRelatedLinks.en, process: { eyebrow: 'Collaboration process', title: 'How do we work with you?', desc: 'A simple, transparent and trackable workflow.', steps: [{ title: 'Consulting', desc: 'Understanding your needs and goals' }, { title: 'Solution design', desc: 'Technical proposal and timeline estimate' }, { title: 'Execution', desc: 'Campaign, implementation or supply delivery' }, { title: 'Support', desc: 'Reporting, optimization and ongoing support' }] }, cta: { title: 'Need a custom solution?', desc: 'Free consultation — see project examples in the <a href="portfolio">Bizdavar portfolio</a>', btn: 'Free consultation', btnSecondary: 'View portfolio' } },
      portfolioPage: { hero: { tag: 'Portfolio', title: 'Bizdavar services, products and delivered work', desc: 'Web design, digital marketing, SMM, FXGuard and Fast Web Studio products, plus VEGA / Prosense / Liqui Moly supply — <a href="about">about Bizdavar</a>.' }, areas: { eyebrow: 'Areas', title: 'Project activity areas' }, archived: { eyebrow: 'Past projects', title: 'Previous and incomplete work', desc: 'Projects without a live link or left unfinished — including sites whose hosting expired and marketplaces that were never completed. Listed briefly only.' }, tags: ['Fintech and payments', 'Accounting and finance', 'Artificial intelligence', 'iOS mobile apps', 'Events and tickets', 'Holding and investment', 'Hosting and infrastructure', 'Web design and stores', 'International trade', 'Swiss trade', 'SMM panel', 'SMM management', 'Industrial supply', 'VEGA sensors', 'Prosense detectors', 'Aviation', 'Brokerage and finance'], cta: { title: 'Your brand could be the next project', desc: 'From <a href="fast" class="link-yellow">web design</a> to DNS and SSL management, Bizdavar is with you.', btnPrimary: 'Start a new project', btnSecondary: 'View services' }, filters: [{ id: 'all', label: 'All' }, { id: 'case-study', label: 'Case studies' }, { id: 'client', label: 'Clients' }, { id: 'ecosystem', label: 'Ecosystem' }, { id: 'fintech', label: 'Fintech' }, { id: 'digital', label: 'Digital' }, { id: 'industrial', label: 'Industrial' }, { id: 'other', label: 'Other' }], roleLabels: { ecosystem: 'Ecosystem', 'case-study': 'Case study', client: 'Client', website: 'Website', page: 'Bizdavar page' }, statsLabels: ['Projects & brands', 'Case studies', 'Clients', 'Ecosystem'], filterAria: 'Portfolio filters', countText: '{count} items shown', relatedLinks: portfolioRelatedLinks.en },
      blogPage: {
        hero: {
          tag: 'Expert blog',
          title: 'US/EU web design, ads and industrial supply guides',
          desc: 'English websites billed in USD or EUR, Google/Meta/LinkedIn campaigns, plus genuine VEGA supply for Iran.',
          ctaArticles: 'Browse articles',
          ctaTopics: 'Topics',
          ctaConsult: 'Free consult'
        },
        intro: {
          title: 'Field notes from live projects',
          body: 'The Bizdavar blog distils <a href="/pages/services">digital services</a>, <a href="/pages/articles/website-design-us-eu">US/EU website design</a>, <a href="/pages/fast">Fast Studio</a> and <a href="/pages/products#supply">industrial supply</a>. Read ads, SEO, SMM and the VEGA buying path as execution — not slogans.',
          statPosts: '20',
          statPostsLabel: 'Guides',
          statLangs: '5',
          statLangsLabel: 'Languages',
          statTopics: '5',
          statTopicsLabel: 'Topic clusters'
        },
        topics: {
          eyebrow: 'Topic clusters',
          title: 'From SEO to VEGA sensors',
          desc: 'Pick by need — each cluster links to the matching service or product page.',
          digital: { label: 'Digital marketing', desc: 'SEO, CRO and SMM' },
          web: { label: 'Web design', desc: 'US/EU English sites & Fast Studio' },
          industrial: { label: 'Industrial supply', desc: 'VEGA and instrumentation' },
          products: { label: 'Bizdavar products', desc: 'BizPet, BizTab and BizClean' },
          company: { label: 'Company', desc: 'History and activity areas' }
        },
        catalog: {
          eyebrow: 'Article catalog',
          title: 'All guides at a glance',
          desc: 'Filter by topic or open a guide — links sit in the HTML for crawlers.',
          filterAll: 'All',
          empty: 'No articles in this topic.',
          filterAria: 'Article topic filter',
          countText: '{count} posts',
          relatedService: 'Related service'
        },
        featured: {
          eyebrow: 'Editor picks',
          title: 'Latest guides',
          desc: 'Recent articles with direct links to services or quotes.'
        },
        linkHub: {
          eyebrow: 'Quick paths',
          title: 'From blog to key pages',
          desc: 'Internal links to services, catalogs and contact — no menu hunting.',
          items: [
            { title: 'US/EU websites', url: '/pages/articles/website-design-us-eu', desc: 'From $99 / EUR invoice' },
            { title: 'US/EU ads', url: '/pages/articles/digital-marketing-us-eu', desc: 'Google, Meta, LinkedIn' },
            { title: 'Fast Studio', url: '/pages/fast', desc: 'English site in 5 days' },
            { title: 'Services', url: '/pages/services', desc: 'Web, ads and apps' },
            { title: 'Contact / quote', url: '/pages/contact?service=web-design', desc: 'USD or EUR invoice' },
            { title: 'Buy VEGAPULS', url: '/pages/articles/buy-vegapuls-iran', desc: 'Iran level sensor' },
            { title: 'VEGA catalog', url: '/pages/vega', desc: 'Level sensors' },
            { title: 'Buy Prosense', url: '/pages/articles/buy-prosense-iran', desc: 'Gas detectors' },
            { title: 'Teltonika', url: '/pages/teltonika', desc: 'FMB920 from $29' },
            { title: 'Digi', url: '/pages/articles/buy-digi-system-iran', desc: 'Scales and POS' },
            { title: 'Industrial trade', url: '/pages/articles/industrial-trade-iran', desc: 'All brands' },
            { title: 'Products', url: '/pages/products#supply', desc: 'Supply catalogue' }
          ]
        },
        clusters: {
          eyebrow: 'Next step',
          title: 'From a guide to a quote',
          desc: 'If the article is not enough, run the same topic as a project with Bizdavar.',
          digitalTitle: 'Marketing & SEO',
          digitalDesc: 'Google Ads, Meta and LinkedIn — budgets in USD or EUR.',
          webTitle: 'Web design',
          webDesc: 'English LTR sites in 5 days — from $99 / ~€90, Stripe and Zoom/Meet.',
          industrialTitle: 'Buy VEGA',
          industrialDesc: 'Order code, proforma and logistics to site.',
          prosenseTitle: 'Prosense detectors',
          prosenseDesc: 'Gas, flame and SIL — B2B proforma.',
          portfolioTitle: 'Portfolio',
          portfolioDesc: 'Marvi Society, FXGuard and digital work.',
          appsTitle: 'iOS apps',
          appsDesc: 'Design, Swift and App Store release.'
        },
        faq: {
          eyebrow: 'FAQ',
          title: 'Before you read',
          desc: 'Short answers to common searches about the Bizdavar blog.',
          items: [
            { q: 'What is the Bizdavar blog about?', a: 'Two tracks: English websites and ads for US/EU (USD/EUR invoices), and genuine industrial supply into Iran. Start with <a href="/pages/articles/website-design-us-eu">US/EU web design</a> or a VEGA buying guide.' },
            { q: 'How many languages are the articles in?', a: 'The blog hub and core articles are indexed in Persian, Turkish, English, Russian and Arabic with separate hreflang URLs.' },
            { q: 'How do I find a service-related article?', a: 'Use the topic filter above, or jump from the marketing, web design and industrial clusters to the service pages.' },
            { q: 'What should I do after reading a VEGA guide?', a: 'Send the model or tank data on WhatsApp or the contact form — the proforma and order code are issued by Bizdavar.' },
            { q: 'Are Bizdavar products listed here too?', a: 'Yes. BizTab, BizClean V5 and the BizPet heating pad have dedicated pages linked from this catalog.' }
          ]
        },
        cta: {
          title: 'Need expert consulting?',
          desc: 'Write your topic in the <a href="/pages/contact">contact form</a> — or message us on WhatsApp.',
          btn: 'Request consulting',
          btnWa: 'Persian WhatsApp'
        },
        geoText: 'Specialized articles for businesses in Iran and Turkey — digital marketing, SEO, multilingual web design and VEGA industrial supply.',
        related: [
          { title: 'US/EU websites', desc: 'From $99 / EUR invoice', titleKey: 'blogPage.related.0.title', descKey: 'blogPage.related.0.desc' },
          { title: 'US/EU ads', desc: 'Google, Meta, LinkedIn', titleKey: 'blogPage.related.1.title', descKey: 'blogPage.related.1.desc' },
          { title: 'VEGA catalog', desc: 'Level and pressure sensors', titleKey: 'blogPage.related.2.title', descKey: 'blogPage.related.2.desc' },
          { title: 'Contact', desc: 'Website quote or WhatsApp', titleKey: 'blogPage.related.3.title', descKey: 'blogPage.related.3.desc' }
        ]
      },
      privacyPage: { hero: { title: 'Privacy Policy', desc: 'How your information is collected and used on the Bizdavar Group website' }, sections: [{ title: '1. Information we collect', body: 'When you submit the <a href="contact">contact form</a>, we receive your name, email, phone number (optional), service type and message. This information is used only to respond to your request.' }, { title: '2. How we use it', items: ['Responding to consulting requests and service proposals', 'Following up on projects under discussion', 'Improving service quality without public disclosure'] }, { title: '3. Sharing with third parties', body: 'Your information is not sold or transferred to third parties without your explicit consent, except where legally required.' }, { title: '4. Cookies and analytics', body: 'This site uses <strong>Google Tag Manager</strong> (GTM-NXWQQWF8) and <strong>Google Analytics 4</strong> (G-4GFEY12SLH) to measure traffic and improve the experience. These tools may set cookies or similar identifiers. Language detection details are in section 5.' }, { title: '5. Language & region detection', body: 'To show the appropriate language (Persian, Turkish, English), your IP address may be sent anonymously to <strong>ipapi.co</strong> or <strong>ipwho.is</strong> to detect your approximate country. Your language preference is stored in browser <code>localStorage</code> (key <code>bizdavar_locale</code>). You can change language anytime from the menu or with <code>?lang=fa</code>, <code>?lang=tr</code> or <code>?lang=en</code>.' }, { title: '6. Contact us', body: 'For privacy questions: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> or the <a href="contact">contact form</a>.' }], updated: 'Last updated: April 2025' },
      gamakPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Gamak supply for your technical and procurement teams', desc: 'We do more than show a catalog — from power selection to delivery in Iran.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Gamak series for regional projects', desc: 'GM/GMB · B5/B35 flange · IE2/IE3 · Braked — use “Request quote” for each series.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Gamak electric motor catalog', desc: 'Three-phase and single-phase — IE2/IE3 — flange, foot, braked and custom' },
        iran: { eyebrow: 'Regional application', title: 'Gamak across common industries', desc: 'If your industry isn’t listed — send load type and required power.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Gamak motors for every industrial sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Gamak supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">official Gamak website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a Gamak quote?', desc: 'Send kW, rpm and application type — IE2/IE3/IE4 · Ex-proof · MV', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'Gamak quote' }, geoText: 'Genuine Gamak supply for industrial projects — multilingual technical consulting (English, Persian, Turkish), proforma and logistics by Bizdavar Group.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Product catalog', desc: 'Supply brands' }, { title: 'Contact', desc: 'Free consultation' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Digi System supply for your store and procurement teams', desc: 'Scales, POS and peripherals — from model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Digi System products', desc: 'PC scales · integrated POS · scanner and printer — use “Request quote”.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Digi System catalog', desc: 'Scales, POS, peripherals and retail software — international supply' },
        iran: { eyebrow: 'Regional application', title: 'Digi System in the retail market', desc: 'Send store type and checkout count — we’ll suggest the right package.' },
        industries: { eyebrow: 'Global industries', title: 'Application across sectors', desc: 'Digi retail equipment for stores and HORECA' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Digi System supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">official Digi System website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'Ready for a Digi System quote?', desc: 'Send store type, checkout count and legal-for-trade scale needs', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'Digi System quote' }, geoText: 'Digi System international supply for industrial projects — multilingual consulting, proforma and logistics by Bizdavar Group.', related: [{ title: 'Teraoka Seiko', desc: 'Japanese scales and POS' }, { title: 'Product catalog', desc: 'Supply brands' }, { title: 'Contact', desc: 'Price inquiry' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Teraoka Seiko supply for your store and warehouse teams', desc: 'Japanese scales, labeling and POS — model consulting and international logistics.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Teraoka series for regional projects', desc: 'Retail scales · deli scale · POS · labeling — use “Request quote”.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Teraoka Seiko catalog', desc: 'Scales, labeling, POS and food service — international supply' },
        iran: { eyebrow: 'Regional application', title: 'Teraoka in retail and food service markets', desc: 'Send store or commercial kitchen type — we’ll suggest the right series.' },
        industries: { eyebrow: 'Global industries', title: 'Application across sectors', desc: 'Teraoka equipment for retail, HORECA and logistics' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Teraoka Seiko supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">official Teraoka Seiko website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="digi-system">Digi System</a>', cta: { title: 'Ready for a Teraoka quote?', desc: 'Send scale type, capacity and checkout count — deli · POS · labeling', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'Teraoka quote' }, geoText: 'Teraoka Seiko supply to Iran — multilingual consulting, proforma and international logistics by Bizdavar Group.', related: [{ title: 'Digi System', desc: 'Turkish scales and POS' }, { title: 'Product catalog', desc: 'Supply brands' }, { title: 'Contact', desc: 'Price inquiry' }] },
      customWebAppPage: {
        hero: { eyebrow: 'Beyond fixed plans', title: 'Custom web & app development', subtitle: 'Web apps, panels, PWAs and apps — fast, professional, specialized', desc: 'When <a href="fast">Fast Web Studio</a> is enough for landing and store, great. When you need custom logic — the same Bizdavar team builds it.', ctaForm: 'Request consulting', ctaWa: 'WhatsApp', ctaFast: 'Fast plans' },
        when: { eyebrow: 'When?', title: 'When do you need a custom project?', desc: 'If any of these apply, Fast is not enough.', items: [ { icon: 'users', title: 'Complex roles', desc: 'Multiple roles, branches or access levels.' }, { icon: 'gear', title: 'Business logic', desc: 'Orders, wallets, reports or custom workflows.' }, { icon: 'mobile', title: 'App or PWA', desc: 'More than a responsive website.' }, { icon: 'link', title: 'API integrations', desc: 'CRM, payments or external services.' } ] },
        services: { eyebrow: 'Services', title: 'What we build', items: [ { icon: 'monitor', title: 'Web apps & panels', desc: 'Dashboards, admin and web systems.' }, { icon: 'mobile', title: 'Applications', desc: 'PWA and mobile-grade UX.' }, { icon: 'globe', title: 'Complex multilingual sites', desc: 'fa / tr / en with hreflang.' }, { icon: 'bag', title: 'Advanced commerce', desc: 'Beyond basic WooCommerce.' }, { icon: 'shield', title: 'Security & roles', desc: '2FA and access control.' }, { icon: 'rocket', title: 'Iterative delivery', desc: 'Testable releases with progress reports.' } ] },
        process: { eyebrow: 'Process', title: 'From discovery to delivery', items: [ { num: '01', title: 'Discovery', desc: 'Goals, users and constraints.' }, { num: '02', title: 'Architecture', desc: 'Modules, data and delivery map.' }, { num: '03', title: 'UI design', desc: 'Mobile-first professional RTL.' }, { num: '04', title: 'Build', desc: 'Iterative testable releases.' }, { num: '05', title: 'Handover', desc: 'Training, monitoring and support.' } ] },
        links: { eyebrow: 'Related paths', title: 'Where to start', fastTitle: 'Fast Web Studio', fastDesc: 'Fixed-price site/store in 5 days.', fastCta: 'View plans', webTitle: 'Web design services', webDesc: 'Overview of web & web-app services.', webCta: 'Web services', appsTitle: 'Apps & systems', appsDesc: 'Bizdavar software track.', appsCta: 'App services', articleTitle: 'Custom development article', articleDesc: 'Fast vs Custom decision guide.', articleCta: 'Read article' },
        cta: { title: 'Ready to start a custom project?', desc: 'Tell us the need — clear architecture and estimate.', form: 'Contact form', wa: 'WhatsApp', portfolio: 'Portfolio' },
        geoText: 'Custom web apps and applications for Iran, Turkey and international markets — Bizdavar Group.'
      },
      fastPage: { sections: { speed: { eyebrow: 'Professional speed', title: 'How we work fast and specialized', desc: 'No vague promises — daily milestones, modern design, path to web apps.' }, scope: { eyebrow: 'Service scope', title: 'Sites, stores, web apps and applications', desc: 'Start with fixed-price Fast; for custom work see <a href="custom-web-app">web & app</a>.' }, deliverables: { eyebrow: 'Deliverables', title: 'What do you actually get?', desc: 'A site ready for leads/sales — not a raw template.' }, guides: { eyebrow: 'Guides & blog', title: 'Web and app articles', desc: 'Read before ordering — or start from the <a href="blog">Bizdavar blog</a>.' },  plans: { eyebrow: 'Pricing plans', title: 'Choose the right plan for your business', desc: 'Fixed pricing, no hidden costs — order through WhatsApp or the <a href="contact">contact form</a>.' }, compare: { eyebrow: 'Plan comparison', title: 'What do you get in each plan?', desc: 'Use this table to choose a plan or ask us on WhatsApp.' }, timeline: { eyebrow: 'Delivery path', title: '5 days to go live — step by step', desc: 'Each day has a clear goal and progress is reported on WhatsApp.' }, why: { eyebrow: 'Why Fast?', title: 'Why Fast Web Studio?', desc: 'A <a href="about">Bizdavar Group</a> product — not a generic agency with vague promises.' }, showcase: { eyebrow: 'Showcase', title: 'Websites built with Bizdavar', desc: 'Web design examples — <a href="portfolio">view the full portfolio</a>' }, faq: { eyebrow: 'FAQ', title: 'Common questions before ordering', desc: '' } }, cta: { title: 'Ready to launch your website?', desc: 'Free WhatsApp consultation — we suggest the right plan in 2 minutes.', btnWa: 'Start on WhatsApp', btnForm: 'Contact form', btnCustom: 'Custom project', btnDevConsult: 'Custom development & consulting — contact us' }, devCta: { title: 'Need custom development?', desc: 'Beyond Fast plans — custom projects, CRM, advanced stores and technical consulting.', btn: 'Custom development & consulting — contact us' }, sticky: { label: 'Order Fast — from $99' }, geoText: 'Web design for businesses in Iran, Turkey and international markets — 5-day delivery, multilingual WhatsApp support and post-launch assistance.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable VEGA supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        quote: { eyebrow: 'Quote guide', title: 'Clearer inquiry = faster recommendation', desc: 'Send the checklist below on WhatsApp or the contact form — even partial details help.' },
        products: { eyebrow: 'Product catalog', title: 'High-demand products for regional projects', desc: 'Use the “Request quote” button for each product. Technical consulting is free.' },
        iran: { eyebrow: 'Regional application', title: 'VEGA across common industries', desc: 'If your industry isn’t listed — send your process conditions and we’ll suggest the right model.' },
        value: { eyebrow: 'Brand advantages', title: 'Why engineers choose VEGA', desc: 'Over 65 years of German innovation — more than 500,000 VEGA sensors installed worldwide each year.' },
        principles: { eyebrow: 'Measuring principles', title: 'VEGA measuring methods', desc: 'Choosing the right measuring principle — we recommend the best based on your conditions.' },
        industries: { eyebrow: 'Global industries', title: 'VEGA solutions for various industries', desc: '15+ industries — from chemicals to energy and environment' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'VEGA supply services by Bizdavar Group', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Product technical information is based on the <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">official VEGA website</a>. For pricing, order codes and supply — <a href="contact">contact Bizdavar</a>.', cta: { title: 'Ready for a VEGA quote?', desc: 'Send the product name or process conditions — free technical consulting and a transparent proforma', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'VEGA quote', hint: 'Multilingual consulting · fast reply' }, geoText: 'Genuine VEGA sensor supply to Iran — multilingual technical multilingual consulting, transparent proforma and logistics to industrial projects.', related: [{ title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Product catalog', desc: 'Supply brands' }, { title: 'Contact and inquiry', desc: 'Free consultation' }] },
      uwtPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable UWT supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from switch or radar selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand products', title: 'Featured UWT series for regional projects', desc: 'Rotonivo · Vibranivo · NivoRadar · NivoGuide — use “Request quote” for each series.' },
        catalog: { eyebrow: 'Full catalog', title: 'UWT level measurement catalog', desc: 'Point level switches, non-contact radar, guided radar and local display' },
        iran: { eyebrow: 'Regional application', title: 'UWT across common industries', desc: 'If your industry isn’t listed — send material type and silo height and we’ll suggest the right model.' },
        industries: { eyebrow: 'Global industries', title: 'Applications across industries', desc: 'UWT level sensors for bulk solids and liquids' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'UWT supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.uwtgroup.com/en/" target="_blank" rel="noopener noreferrer">official UWT website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a UWT quote?', desc: 'Send material type, silo height and high/low points — Rotonivo · Vibranivo · NivoRadar', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'UWT quote' }, geoText: 'Genuine UWT level sensor supply from Germany — multilingual technical consulting, proforma and logistics by Bizdavar Group.', related: [{ title: 'VEGA catalog', desc: 'Level and pressure sensors' }, { title: 'Prosense', desc: 'Gas and flame detectors' }, { title: 'Product catalog', desc: 'B2B supply brands' }, { title: 'Contact and inquiry', desc: 'Free consultation' }] },
      prosensePage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Prosense supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from gas/model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        quote: { eyebrow: 'Quote guide', title: 'Clearer inquiry = faster recommendation', desc: 'Send the checklist below on Farsi WhatsApp or the contact form — even partial details help.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Prosense series', desc: 'SIL · M1 · EN-50545-1 · MPS — WhatsApp or quote form for each product.' },
        catalog: { eyebrow: 'Full catalog', title: 'All Prosense product series', desc: '8 categories — over 60 series — fixed, portable, flame, panel, parking, software and calibration' },
        iran: { eyebrow: 'Industry applications', title: 'Prosense across common industries', desc: 'If your industry isn’t listed — send the gas type and installation environment and we’ll suggest the right model.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Custom gas detection solution for every industrial sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Prosense supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Message us on Farsi WhatsApp.' }
      }, officialNote: 'Product technical information is based on the <a href="https://www.prosense.com.tr/?lang=en" target="_blank" rel="noopener noreferrer">official Prosense website</a>. For pricing and supply — <a href="contact">contact Bizdavar</a> · <a href="articles/buy-prosense-iran">Prosense buyer guide</a> · <a href="vega">VEGA products</a>', cta: { title: 'Ready for a Prosense quote?', desc: 'Send the gas type or model series — PQ · SafeVader · SOMA · PPS+ · S-DPX panel', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'Prosense quote', hint: 'Farsi technical consulting · fast reply' }, geoText: 'Genuine Prosense detector supply — SIL/M1/EN certifications, Farsi WhatsApp consulting and logistics for oil, gas and industrial projects.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Teltonika GPS', desc: 'Fleet Telematics' }, { title: 'Industrial services', desc: 'B2B consulting' }, { title: 'Contact', desc: 'Price inquiry' }] },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Teltonika supply for your technical and procurement teams', desc: 'We do more than show a catalog — from tracker selection to delivery in Iran.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand products', title: 'Featured models for regional projects', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — use “Request quote” for each product.' },
        catalog: { eyebrow: 'Full catalog', title: 'All Teltonika Telematics products', desc: '12 categories — 100+ models — trackers, CAN/OBD, assets, BLE, video, software and accessories' },
        iran: { eyebrow: 'Regional application', title: 'Teltonika across common industries', desc: 'If your industry isn’t listed — send fleet type and required data.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Fleet Telematics solution for every sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Teltonika supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">official Teltonika Telematics website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="articles/buy-teltonika-iran">FMB920 buyer guide</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a Teltonika quote?', desc: 'Send tracker model or fleet type — FMB920 · FMC650 · FTC305 · DualCam', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'Teltonika quote' }, geoText: 'Genuine Teltonika GPS supply to Iran — Fleet Telematics, multilingual consulting and logistics.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Product catalog', desc: 'Supply brands' }, { title: 'Contact', desc: 'Price inquiry' }] },
      liquiMolyPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Liqui Moly supply with transparent USD pricing', desc: 'From oil and additive selection to proforma and delivery — Farsi-speaking support.' },
        buy: { eyebrow: 'Purchase path', title: 'From product pick to delivery — 5 steps', desc: 'Displayed prices are in USD; the final amount is confirmed on the proforma.' },
        quote: { eyebrow: 'Quote guide', title: 'Clearer request = faster proposal', desc: 'Send product name, SKU or vehicle model on WhatsApp.' },
        highlights: { eyebrow: 'High-demand products', title: 'From Octane Plus to engine oils', desc: 'Approximate USD price on every card — WhatsApp or quote form.' },
        catalog: { eyebrow: 'Full catalog', title: 'Liqui Moly products with USD prices', desc: 'Genuine Liqui Moly catalog — engine oils, fuel additives, antifreeze and car care' },
        iran: { eyebrow: 'Use cases', title: 'Who is Liqui Moly for?', desc: 'From workshops and fleets to motorcycles and personal use — Farsi inquiry and genuine supply for every use case.', note: 'Not listed? Send vehicle model, fuel type and quantity for a precise recommendation.' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Liqui Moly supply services', desc: 'Your supply partner — not just a price list' },
        faq: { eyebrow: 'FAQ', title: 'Common buyer questions', desc: 'Didn’t find your answer? Message us on WhatsApp.' }
      }, rateNote: { strong: '', body: '' }, officialNote: 'Technical information is based on the <a href="https://www.liqui-moly.com/" target="_blank" rel="noopener noreferrer">official Liqui Moly website</a>. To order — <a href="contact">contact Bizdavar</a> · <a href="articles/liqui-moly-supply-iran">Liqui Moly guide</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready to order Liqui Moly?', desc: 'Send product name or SKU — Octane Plus · Top Tec · Molygen · diesel additives', btnForm: 'Quote form', btnServices: 'Product catalog' }, sticky: { label: 'Liqui Moly quote', hint: 'USD pricing · Farsi consulting' }, geoText: 'Genuine Liqui Moly supply — transparent USD pricing, Farsi consulting and international logistics for oils, additives and car care.', related: [{ title: 'VEGA products', desc: 'Industrial level and pressure sensors' }, { title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Product catalog', desc: 'B2B supply brands' }, { title: 'Contact', desc: 'Liqui Moly price inquiry' }] }
    }
  };

  const blogPosts = {
    fa: [
      ['تامین سنسور VEGA برای پروژه‌های ایران — از مشاوره تا تحویل', 'مشاوره فارسی، پیش‌فاکتور شفاف و لجستیک بین‌المللی VEGA اصل برای پروژه‌های صنعتی.', 'تجهیزات صنعتی'],
      ['وبسایت چندزبانه برای بازار ایران و ترکیه', 'hreflang، اعتماد محلی و تحویل سریع برای کسب‌وکارهای دو بازاری.', 'طراحی وب'],
      ['دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها', 'سئو، گوگل ادز، SMM و سنجش لید — مسیر عملی برای ایران و ترکیه.', 'بازاریابی دیجیتال'],
      ['چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟', 'راهکارهای عملی برای تبدیل بازدیدکننده به مشتری.', 'بازاریابی دیجیتال'],
      ['مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها', 'تولید محتوا، تقویم انتشار و تبلیغات هدفمند در اینستاگرام و لینکدین.', 'مدیریت SMM'],
      ['راه‌اندازی سایت در ۵ روز — راهنمای کامل Fast Studio', 'پلن‌ها، مسیر ۵ روزه و تفاوت با پروژه اختصاصی.', 'طراحی وب'],
      ['انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق', 'نکات مهم در تامین تجهیزات VEGA و ابزار دقیق.', 'تجهیزات صنعتی'],
      ['بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت', 'شناسنامه کامل بیزدوار: بنیان‌گذار، ۱۱ کشور، ۱۰۰+ پروژه و اکوسیستم برندها.', 'درباره شرکت'],
      ['چک‌لیست راه‌اندازی سایت در ۵ روز', 'لوگو، متن، دامنه و تصمیم‌های روزبه‌روز برای تحویل واقعی.', 'طراحی وب'],
      ['طراحی وب و اپلیکیشن اختصاصی — راهنمای انتخاب', 'چه زمانی Fast کافی است و چه زمانی به وب‌اپ نیاز دارید.', 'طراحی وب']
    ],
    tr: [
      ['İran projeleri için VEGA sensör tedariki — danışmanlıktan teslimata', 'Farsça danışmanlık, şeffaf proforma ve uluslararası VEGA lojistiği.', 'Endüstriyel ekipman'],
      ['İran ve Türkiye pazarı için çok dilli web sitesi', 'hreflang, yerel güven ve hızlı teslimat.', 'Web tasarım'],
      ['Dijital pazarlama nedir? İşletmeler için tam rehber', 'SEO, Google Ads, SMM ve lead ölçümü — İran ve Türkiye için pratik yol.', 'Dijital pazarlama'],
      ['Dijital pazarlama satışları nasıl artırır?', 'Ziyaretçileri müşteriye dönüştürmek için pratik yöntemler.', 'Dijital pazarlama'],
      ['Sosyal medya yönetimi — Markalar için SMM stratejisi', 'Instagram ve LinkedIn için içerik üretimi, yayın takvimi ve hedefli reklamlar.', 'SMM yönetimi'],
      ['5 günde web sitesi — Fast Studio rehberi', 'Planlar, 5 günlük yol ve özel proje farkı.', 'Web tasarım'],
      ['Doğru endüstriyel sensör seçimi — VEGA ve ölçüm cihazları', 'VEGA ve endüstriyel ölçüm ekipmanı tedarikinde önemli noktalar.', 'Endüstriyel ekipman'],
      ['Bizdavar Group nedir? Tarihçe, ekip ve faaliyet alanları', 'Bizdavar profili: kurucu, 11 ülke, 100+ proje ve marka ekosistemi.', 'Şirket hakkında'],
      ['5 günde site kurulum kontrol listesi', 'Logo, metin, domain ve günlük kararlar.', 'Web tasarım'],
      ['Özel web ve uygulama — seçim rehberi', 'Ne zaman Fast yeter, ne zaman web app gerekir.', 'Web tasarım']
    ],
    en: [
      ['VEGA sensor supply for Iran projects — consulting to delivery', 'Persian consulting, transparent proforma, and international VEGA logistics.', 'Industrial equipment'],
      ['Multilingual websites for Iran and Turkey markets', 'hreflang, local trust signals, and fast delivery for dual-market businesses.', 'Web design'],
      ['What is digital marketing? A complete guide for businesses', 'SEO, Google Ads, SMM and lead measurement — a practical path for Iran and Turkey.', 'Digital marketing'],
      ['How does digital marketing increase sales?', 'Practical methods for turning visitors into customers.', 'Digital marketing'],
      ['Social media management — SMM strategy for brands', 'Content production, publishing calendars, and targeted ads for Instagram and LinkedIn.', 'SMM management'],
      ['Launch a website in 5 days — Fast Studio guide', 'Plans, 5-day path, and custom vs Fast.', 'Web design'],
      ['Choosing the right industrial sensor — VEGA and instrumentation', 'Key points in VEGA and instrumentation supply.', 'Industrial equipment'],
      ['What is Bizdavar Group? History, team and activities', 'Bizdavar profile: founder, 11 countries, 100+ projects and brand ecosystem.', 'About company'],
      ['5-day website launch checklist', 'Logo, copy, domain and day-by-day decisions.', 'Web design'],
      ['Custom web & app — how to choose', 'When Fast is enough vs when you need a web app.', 'Web design']
    ],
    ru: [
      ['Поставка датчиков VEGA для проектов в Иране — от консультации до доставки', 'Консультации, прозрачная проформа и международная логистика VEGA.', 'Промышленное оборудование'],
      ['Многоязычные сайты для рынков Ирана и Турции', 'hreflang, локальное доверие и быстрая сдача для двух рынков.', 'Веб-дизайн'],
      ['Что такое цифровой маркетинг? Полное руководство для бизнеса', 'Определение, каналы и роль цифрового маркетинга в росте продаж.', 'Цифровой маркетинг'],
      ['Как цифровой маркетинг увеличивает продажи?', 'Практические методы превращения посетителей в клиентов.', 'Цифровой маркетинг'],
      ['Управление соцсетями — SMM-стратегия для брендов', 'Контент, календарь публикаций и таргетированная реклама в Instagram и LinkedIn.', 'SMM'],
      ['Запуск сайта за 5 дней — гайд Fast Studio', 'Тарифы, 5-дневный путь и отличие от кастомного проекта.', 'Веб-дизайн'],
      ['Выбор промышленного датчика — VEGA и КИП', 'Ключевые моменты при поставке VEGA и измерительного оборудования.', 'Промышленное оборудование'],
      ['Что такое Bizdavar Group? История, команда и направления', 'Профиль Bizdavar: основатель, 11 стран, 100+ проектов и экосистема брендов.', 'О компании'],
      ['Чеклист запуска сайта за 5 дней', 'Логотип, тексты, домен и решения по дням.', 'Веб-дизайн'],
      ['Кастомный web и приложения — как выбрать', 'Когда хватает Fast, а когда нужен web app.', 'Веб-дизайн']
    ],
    ar: [
      ['توريد حساسات VEGA لمشاريع إيران — من الاستشارة إلى التسليم', 'استشارة، عرض سعر شفاف ولوجستيات VEGA الدولية.', 'معدات صناعية'],
      ['مواقع متعددة اللغات لأسواق إيران وتركيا', 'hreflang وثقة محلية وتسليم سريع للأسواق المزدوجة.', 'تصميم مواقع'],
      ['ما هو التسويق الرقمي؟ دليل شامل للأعمال', 'تعريف التسويق الرقمي وقنواته ودوره في نمو المبيعات.', 'تسويق رقمي'],
      ['كيف يزيد التسويق الرقمي المبيعات؟', 'طرق عملية لتحويل الزوار إلى عملاء.', 'تسويق رقمي'],
      ['إدارة الشبكات الاجتماعية — استراتيجية SMM للعلامات', 'إنتاج محتوى وتقويم نشر وإعلانات مستهدفة على Instagram وLinkedIn.', 'إدارة SMM'],
      ['إطلاق موقع خلال ٥ أيام — دليل Fast Studio', 'الباقات ومسار ٥ أيام والفرق عن المشروع المخصّص.', 'تصميم مواقع'],
      ['اختيار الحساس الصناعي المناسب — VEGA وأجهزة القياس', 'نقاط مهمة في توريد VEGA ومعدات القياس.', 'معدات صناعية'],
      ['ما هي Bizdavar Group؟ التاريخ والفريق ومجالات العمل', 'ملف Bizdavar: المؤسس و١١ دولة وأكثر من ١٠٠ مشروع.', 'عن الشركة'],
      ['قائمة التحقق لإطلاق موقع خلال ٥ أيام', 'الشعار والنصوص والنطاق وقرارات كل يوم.', 'تصميم مواقع'],
      ['تطبيق ويب مخصّص — كيف تختار', 'متى يكفي Fast ومتى تحتاج web app.', 'تصميم مواقع']
    ]
  };

  function asBlogRows(rows) {
    return rows.map(([title, excerpt, category]) => ({ title, excerpt, category }));
  }

  const caseStudy = {
    fa: {
      biztejarat: {
        hero: { tag: 'پروژه گذشته · SMM', title: 'بیزتجارت — نمونه‌کار SMM محصولات صنعتی', desc: 'پروژه گذشته مدیریت و تولید محتوای اینستاگرام برای معرفی تجهیزات الکترونیکی، ابزار دقیق و قطعات صنعتی' },
        about: { title: 'درباره پروژه', archivedNotice: 'صفحه اینستاگرام این پروژه بسته شده و فعلاً فعال نیست. این صفحه فقط به‌عنوان مرجع نمونه‌کار SMM B2B نگه‌داری می‌شود.', body: '<strong>بیزتجارت (Biztejarat)</strong> نام یک پروژه نمونه‌کار SMM بود — صفحه اینستاگرام محصولات صنعتی که توسط بیزدوار گروپ راه‌اندازی و مدیریت می‌شد. این پروژه <strong>نمونه‌کار مدیریت SMM و محتوای B2B</strong> است، نه واحد بازارگانی یا برند جداگانهٔ بیزدوار.', body2: 'در دوران فعالیت، تجهیزات الکترونیکی، ابزار دقیق، سنسور و قطعات صنعتی (از جمله VEGA، Prosense و برندهای مرتبط) در قالب پست و استوری معرفی و مستندسازی می‌شدند.', servicesTitle: 'خدمات اجراشده', services: ['راه‌اندازی و بهینه‌سازی پروفایل اینستاگرام', 'تولید محتوای فارسی/انگلیسی برای محصولات صنعتی', 'طراحی گرافیک پست و استوری', 'تقویم انتشار و مدیریت تعامل', 'لینک‌دهی به کاتالوگ‌ها و استعلام قیمت'], ctaSmm: 'خدمات مدیریت SMM', ctaPortfolio: 'سایر نمونه‌کارها' },
        products: { title: 'حوزه‌های محتوایی پوشش‌داده‌شده', desc: 'نمونه حوزه‌هایی که در محتوای این پروژه پوشش داده می‌شد — تامین فنی از طریق <a href="products#supply">بیزدوار گروپ</a>', vega: 'سنسور سطح و فشار', prosense: 'دتکتور گاز و شعله', gamak: 'الکتروموتور صنعتی', industrialTitle: 'تجهیزات صنعتی', industrialDesc: 'مشاوره و تامین B2B' },
        geoText: 'نمونه‌کار گذشته SMM B2B — معرفی تجهیزات صنعتی VEGA، Prosense و Gamak با زبان فارسی و انگلیسی.'
      },
      biztab: {
        hero: { tag: 'محصول اختصاصی · IoT', title: 'BizTab — دماسنج دیواری غیرتماسی', desc: 'اولین دماسنج دیواری غیرتماسی طراحی‌شده در تبریز — توسعه‌یافته توسط تیم بیزدوار با دقت اندازه‌گیری کمتر از ۰.۳ درجه' },
        about: {
          title: 'درباره محصول',
          imageAlt: 'BizTab — دماسنج دیواری غیرتماسی (تصویر محصول از گزارش نصرنیوز)',
          body: '<strong>BizTab</strong> دماسنج دیواری غیرتماسی است که توسط <strong>تیم بیزدوار</strong> طراحی و توسعه یافته. این محصول به‌عنوان <strong>اولین دماسنج دیواری غیرتماسی در تبریز</strong> معرفی شده و تمامی حقوق مالکیت و تولید انحصاری متعلق به تیم بیزدوار است.',
          body2: 'دماسنج توسط اساتید دانشگاه تبریز تأیید شده و برای نصب دیواری در ورودی ساختمان‌ها، مراکز درمانی و فضاهای پرتردد طراحی شده است — بدون تماس فیزیکی و با نمایشگر دیجیتال دما.',
          specsTitle: 'ویژگی‌های فنی',
          specs: ['اندازه‌گیری غیرتماسی (infrared)', 'خطای اندازه‌گیری کمتر از ۰.۳ درجه سانتی‌گراد', 'نمایشگر دیجیتال LED', 'نصب دیواری — مناسب ورودی و سالن', 'تأیید علمی اساتید دانشگاه تبریز', 'تولید انحصاری تیم بیزدوار'],
          ctaContact: 'استعلام و تماس',
          ctaPress: 'گزارش خبری نصرنیوز'
        },
        press: {
          eyebrow: 'رسانه و دستاورد',
          title: 'پوشش خبری و اعتبار علمی',
          desc: 'معرفی BizTab در آژانس خبری تحلیلی نصر — اسفند ۱۳۹۸',
          quote: '«این دماسنج توسط افراد تیم بیزدوار توسعه یافته است و تمامی حقوق و مالکیت و تولید انحصاری به عهده این تیم می‌باشد.»',
          source: 'آژانس خبری تحلیلی نصر',
          imageAlt: 'صفحه گزارش BizTab در آژانس خبری تحلیلی نصر — اسفند ۱۳۹۸'
        },
        related: { title: 'محصولات و خدمات مرتبط' },
        geoText: 'طراحی و توسعه محصول IoT در تبریز — بخشی از اکوسیستم نوآوری و صنعتی بیزدوار گروپ.'
      },

      bizpet: {
        hero: { tag: 'محصول اختصاصی · پد حرارتی', title: 'BizPet — پد حرارتی بیز پت', desc: 'محصول اصلی ۱۳۹۹ — پد حرارتی پدیده برای خانه، خودرو و جا خواب حیوانات؛ بیز پت / پت بیز' },
        nav: { about: 'درباره محصول', rd: 'تحقیق و توسعه', pets: 'جا خواب حیوانات', origin: 'مرکز رشد', contact: 'تماس' },
        about: {
          title: 'درباره محصول',
          imageAlt: 'BizPet — پد حرارتی خاکستری طراحی‌شده توسط تیم بیزدوار',
          body: '<strong>BizPet</strong> (بیز پت / پت بیز) محصول اصلی پد حرارتی پدیده است — برای گرمایش در فصل سرد و تسکین درد موضعی که در <strong>مرکز رشد فناوری دانشگاه تبریز</strong> طراحی و تولید شد. پشتی صندلی خودرو با نام فروشگاهی BizSeat همان این پد است، نه محصول دوم.',
          body2: 'توسعه با همکاری <strong>تکنولوژی پردازان توسعه خاورمیانه</strong> و واحد فناور <strong>ایمن سهند پدیده</strong> انجام شد. قابل حمل در خانه و خودرو؛ عرضه فروشگاهی در دیجی‌کالا (dkp-7694589).',
          specsTitle: 'ویژگی‌ها',
          specs: ['پد حرارتی پدیده — BizPet / بیز پت / پت بیز', 'گرمایش فصل سرد و تسکین درد موضعی', 'قابل حمل — استفاده در خانه و خودرو', 'ولتاژ کاری ۵ تا ۱۲ ولت (حداکثر ۱ آمپر)', 'قابل شستشو پس از خارج کردن المان حرارتی', 'طراحی و تولید در مرکز رشد فناوری دانشگاه تبریز', 'همکاری ایمن سهند پدیده و تکنولوژی پردازان توسعه خاورمیانه'],
          ctaContact: 'استعلام عمده / تماس',
          ctaCatalog: 'کاتالوگ محصولات'
        },
        gallery: { tanAlt: 'BizPet — پد حرارتی کرم با کانکتور برق', elementAlt: 'BizPet — المان حرارتی با نقاط اتصال', posterAlt: 'برگه معرفی پد حرارتی پدیده' },
        rd: {
          eyebrow: 'تحقیق و توسعه',
          title: 'آزمایش المان حرارتی در آزمایشگاه',
          desc: 'تصاویر تست حرارتی المان، نمونه اولیه و مونتاژ — بخشی از مسیر مهندسی پد حرارتی در مرکز رشد دانشگاه تبریز.',
          tempHighAlt: 'آزمایش حرارتی المان با دماسنج مادون قرمز',
          tempHighCaption: 'آزمایش حرارتی المان در آزمایشگاه',
          protoAlt: 'نمونه اولیه پد حرارتی روی بلوک عایق',
          protoCaption: 'نمونه اولیه و مونتاژ آزمایشی',
          portfolioCta: 'نمونه‌کارها — نمایشگاه و تولید'
        },
        military: { vestAlt: 'نمونه جلیقه نظامی با پد حرارتی روی مانکن', vestCaption: 'نمونه جلیقه تاکتیکی با واحد کنترل حرارتی' },
        production: { imageAlt: 'خط تولید پد حرارتی BizPet — مونتاژ و تست روی میز کار', caption: 'مونتاژ و تست پدهای حرارتی در کارگاه تولید.' },
        pets: {
          eyebrow: 'جا خواب حیوانات خانگی',
          title: 'پد حرارتی مادون قرمز مخصوص حیوانات خانگی',
          desc: 'همین پد حرارتی برای جا خواب سگ و گربه هم مناسب است — گرم نگه‌داشتن در فصل سرد، با ولتاژ ایمن و روکش قابل شستشو.',
          imageAlt: 'BizPet — پد حرارتی مادون قرمز برای جا خواب حیوانات خانگی',
          specs: ['مناسب جا خواب حیوانات خانگی', 'نانومواد کربنی · مادون قرمز دور · بازده ۹۵ تا ۹۹ درصد', 'ولتاژ ایمن ۵ تا ۱۲ ولت · مصرف ۵ تا ۸ وات', 'روکش نرم، جداشدنی و قابل شستشو', 'کنترل دما در محدوده دمای بدن حیوان', 'کاربرد درمانی: اسپاسم عضلانی و آرتروز — مناسب حیوانات مسن یا باردار']
        },
        origin: {
          eyebrow: 'مرکز رشد تبریز · ۱۳۹۹',
          title: 'از طراحی تا تولید در مرکز رشد فناوری',
          desc: 'BizPet یکی از محصولات سخت‌افزاری تیم بیزدوار است — پد حرارتی پدیده، با دو شریک فناور محلی در اکوسیستم نوآوری دانشگاه تبریز.',
          parkTitle: 'مرکز رشد فناوری',
          parkDesc: 'دانشگاه تبریز — بستر طراحی و تولید پد حرارتی پدیده.',
          partner1Title: 'تکنولوژی پردازان توسعه خاورمیانه',
          partner1Desc: 'شریک همکاری در توسعه و تجاری‌سازی محصول.',
          partner2Title: 'ایمن سهند پدیده',
          partner2Desc: 'واحد فناور پارک علمی تبریز — همکار طراحی و ساخت پد حرارتی پدیده.',
          specTitle: '۵ تا ۱۲ ولت · حداکثر ۱ آمپر',
          specDesc: 'قابل حمل برای خانه و خودرو — قابل شستشو پس از خارج کردن المان حرارتی.'
        },
        related: {
          title: 'محصولات و خدمات مرتبط',
          biztab: 'دماسنج دیواری غیرتماسی',
          portfolioDesc: 'نمایشگاه‌ها و پروژه‌های بیزدوار',
          catalog: 'کاتالوگ محصولات',
          catalogDesc: 'سخت‌افزار و خطوط تولید بیزدوار',
          about: 'درباره بیزدوار',
          aboutDesc: 'پارک علمی، نمایشگاه‌ها و دستاوردها'
        },
        geoText: 'پد حرارتی طراحی‌شده در مرکز رشد فناوری دانشگاه تبریز — محصول بیز پت تیم بیزدوار.'
      },

      bizsanitizerV5: {
        hero: { tag: 'محصول اختصاصی · بهداشت', title: 'BizClean — دستگاه ضدعفونی دست بیزدوار (مدل V5)', desc: 'دستگاه اتوماتیک با سنسور التراسونیک — ساخته‌شده در دوران شیوع جهانی کرونا، طراحی و مهندسی‌شده توسط تیم بیزدوار' },
        about: {
          title: 'درباره محصول',
          imageAlt: 'BizClean V5 — دستگاه ضدعفونی دست دیواری بیزدوار (مدل V5)',
          body: '<strong>BizClean V5</strong> (دستگاه ضدعفونی دست بیزدوار) محصول مهندسی‌شده توسط <strong>تیم بیزدوار</strong> است — برای ورودی ساختمان‌ها، ادارات، فروشگاه‌ها و مراکز درمانی.',
          body2: 'این محصول در دوران شیوع کرونا توسعه یافت؛ از دی ۱۳۹۸ تا شهریور ۱۴۰۱ با سرمایه‌گذاری شخصی بنیان‌گذار و تولید توسط تیم بیزدوار ساخته شد. در نمایشگاه مرکز رشد ۱۳۹۹ (ISNA، SNN، صدا و سیما) و RINOTEX 1400 از طریق واحد فناور «ایمن سهند پدیده» (پارک علم و فناوری دانشگاه تبریز) معرفی شد؛ امروز در دیجی‌کالا نیز موجود است.',
          specsTitle: 'ویژگی‌ها',
          specs: ['عملکرد اتوماتیک با سنسور التراسونیک', 'پاشش خودکار مایع ضدعفونی بدون تماس دست', 'زاویه ۹۰ درجه سنسور و نازل برای پوشش بهتر', 'مناسب نصب دیواری در ورودی و فضاهای پرتردد', 'طراحی و مهندسی توسط تیم بیزدوار', 'قابل سفارش از دیجی‌کالا'],
          ctaDigikala: 'مشاهده در دیجی‌کالا',
          ctaVideo: 'ویدیو کوتاه — نمونه اولیه V1',
          ctaPress: 'گزارش خبری SNN',
          ctaPressIsna: 'گزارش ISNA',
          ctaPressIrib: 'گزارش صدا و سیما',
          ctaContact: 'استعلام عمده / تماس'
        },
        video: {
          eyebrow: 'زمانه و رسانه',
          title: 'ویدیو کوتاه — نمونه اولیه BizClean V1',
          desc: 'این ویدیو یوتیوب نمایش مدل اولیه (V1) خط BizClean است — نسخهٔ تجاری و عرضه‌شده در دیجی‌کالا مدل V5 است.',
          quote: 'نمونه اولیه دستگاه ضدعفونی بدون تماس — پیش از توسعهٔ نسخهٔ V5 که امروز در دیجی‌کالا موجود است.',
          source: 'YouTube — نمونه اولیه BizClean V1',
          note: 'ویدیو مربوط به مدل اولیه V1 است؛ محصول فعلی فروش آنلاین BizClean V5 می‌باشد.'
        },
        press: {
          eyebrow: 'رسانه و نمایشگاه',
          title: 'نمایشگاه مرکز رشد دانشگاه تبریز — مقابله با کرونا',
          desc: 'دستگاه‌های مهندسی‌شده توسط تیم بیزدوار — از جمله BizClean V5 — در نمایشگاه دستاوردهای مرکز رشد دانشگاه تبریز با حضور استاندار آذربایجان شرقی عرضه شد. گزارش تصویری صدا و سیما و تصاویر ISNA و SNN مربوط به همین محصولات و حضور ارسان جاهد تبریزی در مراسم است.',
          videoTitle: 'گزارش تصویری خبرگزاری صدا و سیما',
          videoDesc: 'پوشش رسانه‌ای نمایشگاه — معرفی دستگاه‌های تولیدشده تیم بیزدوار با حضور استاندار آذربایجان شرقی در مرکز رشد دانشگاه تبریز.',
          quoteIrib: 'نمایشگاهی از دستاوردهای مرکز رشد و نوآوری دانشگاه تبریز در مقابله با شیوع ویروس کرونا گشایش یافت — گزارش تصویری با حضور استاندار و معرفی محصولات دانش‌بنیان.',
          sourceIrib: 'خبرگزاری صدا و سیما (IRIB News)',
          ctaIrib: 'گزارش صدا و سیما',
          quoteIsna: 'گزارش ISNA از دستاوردهای پژوهشی و فناورانه دانشگاه تبریز در مقابله با کرونا — معرفی محصولات دانش‌بنیان شامل دستگاه‌های ضدعفونی و تجهیزات بهداشتی ساخته‌شده در مرکز رشد.',
          sourceIsna: 'خبرگزاری ISNA',
          ctaIsna: 'گزارش ISNA',
          quoteSnn: 'در این نمایشگاه ۲۱ محصول دانش‌بنیان از ۱۰ شرکت از جمله دستگاه‌های ضدعفونی‌کننده معرفی شد — استاندار از آمادگی برای تامین مواد اولیه و تولید انبوه خبر داد.',
          sourceSnn: 'خبرگزاری دانشجو (SNN)',
          ctaSnn: 'گزارش SNN',
          mediaNote: 'ویدیو و تصاویر منتشرشده در صدا و سیما، ISNA و SNN مربوط به دستگاه‌های تولیدشده توسط تیم بیزدوار است — بنیان‌گذار در مراسم نمایشگاه حضور داشته است.'
        },
        heritage: {
          eyebrow: 'پارک علمی و RINOTEX',
          title: 'ایمن سهند پدیده — واحد فناور پارک علم و فناوری تبریز',
          desc: 'شرکت «ایمن سهند پدیده» از واحدهای فناور مستقر در پارک علم و فناوری دانشگاه تبریز بود. در نهمین RINOTEX (آبان ۱۴۰۰) این واحد در فهرست واحدهای پارک، محصول دانش‌بنیان «طراحی و ساخت دستگاه هوشمند ضدعفونی دست» را ارائه داد. از دی ۱۳۹۸ تا شهریور ۱۴۰۱ سرمایه‌گذاری شخصی بنیان‌گذار بود و تمام طراحی و تولید توسط تیم بیزدوار انجام شد.',
          period1399: {
            period: 'اردیبهشت ۱۳۹۹',
            text: 'نمایشگاه دستاوردهای مرکز رشد دانشگاه تبریز — پوشش ISNA، SNN و صدا و سیما از دستگاه‌های تولیدشده تیم بیزدوار.'
          },
          period1400: {
            period: 'آبان ۱۴۰۰',
            text: 'RINOTEX 1400 — معرفی محصول از طریق واحد فناور «ایمن سهند پدیده»؛ هم‌زمان غرفه ۱۲ متری «تکنولوژی پردازان توسعه خاورمیانه» (بیزدوار) در زون ICT.'
          },
          note: 'منابع عمومی با نام «ایمن سهند پدیده» محدود است؛ محصول، تولید و حضور در نمایشگاه‌ها از طریق گزارش‌های ISNA، SNN، صدا و سیما، RINOTEX و پارک علم و فناوری تبریز قابل راستی‌آزمایی است.',
          linkRinotex: 'RINOTEX 1400',
          linkTechpark: 'پارک علم و فناوری تبریز',
          linkExhibitions: 'نمایشگاه‌ها در درباره ما'
        },
        store: {
          eyebrow: 'فروش آنلاین',
          title: 'خرید از دیجی‌کالا',
          desc: 'محصول V5 با شناسه کالای dkp-3730222 در دیجی‌کالا ثبت شده',
          quote: 'دستگاه ضدعفونی دست اتوماتیک بیزدوار — با سنسور التراسونیک و پاشش خودکار مایع ضدعفونی.',
          source: 'دیجی‌کالا'
        },
        related: { title: 'محصولات مرتبط بیزدوار' },
        geoText: 'محصول بهداشتی مهندسی‌شده در ایران — طراحی تیم بیزدوار و عرضه از طریق دیجی‌کالا.'
      },

      bizseat: {
        hero: {
          tag: 'همان محصول · BizPet',
          title: 'BizSeat همان پد حرارتی BizPet است',
          desc: 'نام فروشگاهی پشتی خودرو — محصول اصلی پد حرارتی بیز پت است، نه یک خط جدا'
        },
        about: {
          title: 'یک محصول، دو نام فروش',
          imageAlt: 'BizSeat — همان پد حرارتی BizPet در قالب پشتی صندلی خودرو',
          body: '<strong>BizSeat</strong> محصول جداگانه‌ای نیست. همان <strong>پد حرارتی BizPet</strong> (بیز پت / پت بیز) است که در سال <strong>۱۳۹۹</strong> در <strong>مرکز رشد و پارک علم و فناوری دانشگاه تبریز</strong> طراحی و ساخته شد و به‌صورت پشتی صندلی خودرو هم عرضه شد.',
          body2: 'توسعه با همکاری <strong>تکنولوژی پردازان توسعه خاورمیانه</strong> و واحد فناور <strong>ایمن سهند پدیده</strong> بود. صفحهٔ اصلی محصول <a href="/pages/bizpet">BizPet</a> است؛ لینک دیجی‌کالا همان کالا را نشان می‌دهد.',
          specsTitle: 'ویژگی‌ها',
          specs: [
            'محصول اصلی: پد حرارتی BizPet',
            'کاربرد خودرو: پشتی صندلی با همان پد',
            'طراحی و ساخت ۱۳۹۹ در تبریز',
            'همکاری ایمن سهند پدیده و تکنولوژی پردازان توسعه خاورمیانه',
            'عرضه فروشگاهی در دیجی‌کالا (dkp-7694589)'
          ],
          ctaDigikala: 'مشاهده در دیجی‌کالا',
          ctaBizpet: 'صفحه اصلی BizPet',
          ctaContact: 'استعلام عمده / تماس'
        },
        origin: {
          eyebrow: 'پارک علمی تبریز · ۱۳۹۹',
          title: 'از اختراع تا تولید در پارک علم و فناوری',
          desc: 'BizSeat نام فروشگاهی همان پد حرارتی BizPet است — یک مسیر طراحی در اکوسیستم نوآوری دانشگاه تبریز.',
          parkTitle: 'پارک علم و فناوری',
          parkDesc: 'دانشگاه تبریز — بستر اختراع، طراحی و ساخت محصول در ۱۳۹۹.',
          partner1Title: 'تکنولوژی پردازان توسعه خاورمیانه',
          partner1Desc: 'شریک همکاری در توسعه و تجاری‌سازی محصول.',
          partner2Title: 'ایمن سهند پدیده',
          partner2Desc: 'واحد فناور پارک علمی تبریز — همکار طراحی و ساخت.',
          storeTitle: 'عرضه در دیجی‌کالا',
          storeDesc: 'شناسه کالا dkp-7694589 — پشتی صندلی خودرو مدل bizdavar.'
        },
        related: {
          title: 'محصولات و خدمات مرتبط',
          bizclean: 'دستگاه ضدعفونی دست',
          biztab: 'دماسنج دیواری غیرتماسی',
          catalog: 'کاتالوگ محصولات',
          catalogDesc: 'سخت‌افزار و خطوط تولید بیزدوار',
          about: 'درباره بیزدوار',
          aboutDesc: 'پارک علمی، نمایشگاه‌ها و دستاوردها'
        },
        geoText: 'محصول خودرو اختراع‌شده در پارک علم و فناوری دانشگاه تبریز — طراحی تیم بیزدوار و عرضه در دیجی‌کالا.'
      },

      bizpet: {
        hero: {
          tag: 'محصول اختصاصی · پد حرارتی',
          title: 'BizPet — پد حرارتی بیز پت',
          desc: 'محصول اصلی ۱۳۹۹ — پد حرارتی پدیده برای خانه، خودرو و جا خواب حیوانات؛ بیز پت / پت بیز'
        },
        nav: {
          about: 'درباره محصول',
          rd: 'تحقیق و توسعه',
          pets: 'جا خواب حیوانات',
          origin: 'مرکز رشد',
          gallery: 'گالری تصاویر',
          contact: 'تماس'
        },
        about: {
          title: 'درباره محصول',
          imageAlt: 'BizPet — پد حرارتی خاکستری طراحی‌شده توسط تیم بیزدوار',
          body: '<strong>BizPet</strong> (بیز پت / پت بیز) محصول اصلی پد حرارتی پدیده است — برای گرمایش در فصل سرد و تسکین درد موضعی که در <strong>مرکز رشد فناوری دانشگاه تبریز</strong> طراحی و تولید شد. پشتی صندلی خودرو با نام فروشگاهی BizSeat همان این پد است، نه محصول دوم.',
          body2: 'توسعه با همکاری <strong>تکنولوژی پردازان توسعه خاورمیانه</strong> و واحد فناور <strong>ایمن سهند پدیده</strong> انجام شد. قابل حمل در خانه و خودرو؛ عرضه فروشگاهی در دیجی‌کالا (dkp-7694589).',
          specsTitle: 'ویژگی‌ها',
          specs: [
            'پد حرارتی پدیده — محصول اصلی BizPet / بیز پت / پت بیز',
            'همان کالا به‌صورت پشتی صندلی خودرو (نام فروشگاهی BizSeat)',
            'گرمایش فصل سرد و تسکین درد موضعی',
            'قابل حمل — خانه، خودرو و جا خواب حیوانات',
            'ولتاژ کاری ۵ تا ۱۲ ولت (حداکثر ۱ آمپر)',
            'قابل شستشو پس از خارج کردن المان حرارتی',
            'طراحی و تولید در مرکز رشد فناوری دانشگاه تبریز',
            'همکاری ایمن سهند پدیده و تکنولوژی پردازان توسعه خاورمیانه'
          ],
          ctaContact: 'استعلام عمده / تماس',
          ctaCatalog: 'کاتالوگ محصولات'
        },
        gallery: {
          tanAlt: 'BizPet — پد حرارتی کرم با کانکتور برق',
          elementAlt: 'BizPet — المان حرارتی با نقاط اتصال',
          posterAlt: 'برگه معرفی پد حرارتی پدیده'
        },
        rd: {
          eyebrow: 'تحقیق و توسعه',
          title: 'آزمایش المان حرارتی در آزمایشگاه',
          desc: 'تصاویر تست حرارتی المان، نمونه اولیه و مونتاژ — بخشی از مسیر مهندسی پد حرارتی در مرکز رشد دانشگاه تبریز.',
          tempHighAlt: 'آزمایش حرارتی المان با دماسنج مادون قرمز',
          tempHighCaption: 'آزمایش حرارتی المان در آزمایشگاه',
          tempAlt: 'اندازه‌گیری دمای سطح در تست تحقیق و توسعه',
          tempCaption: 'اندازه‌گیری دمای سطح در تست R&D',
          elementAlt: 'المان حرارتی مستطیلی با نقاط اتصال',
          elementCaption: 'المان حرارتی با نقاط اتصال',
          protoAlt: 'نمونه اولیه پد حرارتی روی بلوک عایق',
          protoCaption: 'نمونه اولیه و مونتاژ آزمایشی'
        },
        military: {
          eyebrow: 'تحقیق و توسعه',
          title: 'پد حرارتی در پوشش لباس نظامی',
          desc: 'نمونه اولیه جلیقه تاکتیکی با المان حرارتی یکپارچه و واحد کنترل — مسیر R&D برای به‌کارگیری پد حرارتی در پوشش لباس نظامی.',
          vestAlt: 'نمونه جلیقه نظامی با پد حرارتی روی مانکن',
          vestCaption: 'نمونه جلیقه تاکتیکی با واحد کنترل حرارتی',
          liningAlt: 'نمای داخلی جلیقه و سیم‌کشی پد حرارتی',
          liningCaption: 'نمای داخلی پوشش — المان حرارتی دوخته‌شده',
          outdoorAlt: 'جلیقه نظامی حرارتی روی مانکن در فضای باز',
          outdoorCaption: 'نمایش نمونه اولیه در فضای باز'
        },
        dryer: {
          eyebrow: 'تحقیق و توسعه',
          title: 'پد حرارتی در سبد میوه‌خشک‌کن',
          desc: 'نمونه طراحی سبد چوبی میوه‌خشک‌کن با توری حرارتی شش‌ضلعی و سیم تغذیه — مسیر R&D برای به‌کارگیری پد حرارتی در سبدهای خشک‌کن میوه.',
          imageAlt: 'نمونه سبد میوه‌خشک‌کن با توری حرارتی',
          caption: 'رندر سه‌بعدی سبد خشک‌کن با المان حرارتی مشبک.'
        },
        pets: {
          eyebrow: 'جا خواب حیوانات خانگی',
          title: 'پد حرارتی مادون قرمز مخصوص حیوانات خانگی',
          desc: 'همین پد حرارتی برای جا خواب سگ و گربه هم مناسب است — گرم نگه‌داشتن در فصل سرد، با ولتاژ ایمن و روکش قابل شستشو.',
          imageAlt: 'BizPet — پد حرارتی مادون قرمز برای جا خواب حیوانات خانگی',
          specs: [
            'مناسب جا خواب حیوانات خانگی',
            'نانومواد کربنی · مادون قرمز دور · بازده ۹۵ تا ۹۹ درصد',
            'ولتاژ ایمن ۵ تا ۱۲ ولت · مصرف ۵ تا ۸ وات',
            'روکش نرم، جداشدنی و قابل شستشو',
            'کنترل دما در محدوده دمای بدن حیوان',
            'کاربرد درمانی: اسپاسم عضلانی و آرتروز — مناسب حیوانات مسن یا باردار'
          ]
        },
        expo: {
          eyebrow: 'نمایشگاه',
          title: 'غرفه ایمن سهند پدیده',
          desc: 'نمایش پدهای حرارتی در نمایشگاه — با تأکید بر مصرف بسیار پایین و سازگاری با محیط زیست.',
          imageAlt: 'غرفه نمایشگاهی ایمن سهند پدیده با پدهای حرارتی',
          caption: 'غرفه شرکت ایمن سهند پدیده — معرفی پد حرارتی با مصرف پایین.'
        },
        origin: {
          eyebrow: 'مرکز رشد تبریز · ۱۳۹۹',
          title: 'از طراحی تا تولید در مرکز رشد فناوری',
          desc: 'BizPet یکی از محصولات سخت‌افزاری تیم بیزدوار است — پد حرارتی پدیده، با دو شریک فناور محلی در اکوسیستم نوآوری دانشگاه تبریز.',
          parkTitle: 'مرکز رشد فناوری',
          parkDesc: 'دانشگاه تبریز — بستر طراحی و تولید پد حرارتی پدیده.',
          partner1Title: 'تکنولوژی پردازان توسعه خاورمیانه',
          partner1Desc: 'شریک همکاری در توسعه و تجاری‌سازی محصول.',
          partner2Title: 'ایمن سهند پدیده',
          partner2Desc: 'واحد فناور پارک علمی تبریز — همکار طراحی و ساخت پد حرارتی پدیده.',
          specTitle: '۵ تا ۱۲ ولت · حداکثر ۱ آمپر',
          specDesc: 'قابل حمل برای خانه و خودرو — قابل شستشو پس از خارج کردن المان حرارتی.'
        },
        production: {
          eyebrow: 'خط تولید',
          title: 'مونتاژ و تست پد حرارتی',
          desc: 'ایستگاه مونتاژ و کنترل کیفیت — پدهای پارچه‌ای، واحد تغذیه و بسته‌بندی محصول.',
          imageAlt: 'خط تولید پد حرارتی BizPet — مونتاژ و تست روی میز کار',
          caption: 'مونتاژ و تست پدهای حرارتی در کارگاه تولید.'
        },
        related: {
          title: 'محصولات و خدمات مرتبط',
          bizseat: 'پشتی صندلی خودرو',
          biztab: 'دماسنج دیواری غیرتماسی',
          catalog: 'کاتالوگ محصولات',
          catalogDesc: 'سخت‌افزار و خطوط تولید بیزدوار',
          about: 'درباره بیزدوار',
          aboutDesc: 'پارک علمی، نمایشگاه‌ها و دستاوردها'
        },
        geoText: 'پد حرارتی طراحی‌شده در مرکز رشد فناوری دانشگاه تبریز — محصول بیز پت تیم بیزدوار.'
      },

      bizswap: {
        hero: {
          tag: 'محصول Web3 · DeFi',
          title: 'BizSwap — پیش‌فروش و سواپ توکن',
          desc: 'ماژول front-end و اسکریپت on-chain برای پیش‌فروش، سواپ مستقیم در وبسایت و اتصال کیف پول — برای پروژه‌های RWA و توکن دارایی‌محور.',
          chains: 'BNB Chain · BEP-20 · RWA · Presale',
          trust: 'توسعه Web3 · کد اختصاصی · پشتیبانی بیزدوار',
          ctaContact: 'سفارش ماژول مشابه',
          ctaPortfolio: 'سایر نمونه‌کارها'
        },
        stats: {
          capabilities: '۶',
          capabilitiesLabel: 'قابلیت UI',
          flow: '۴',
          flowLabel: 'مرحله swap',
          chain: 'BEP-20',
          chainLabel: 'شبکه پشتیبانی',
          module: 'Web3',
          moduleLabel: 'نوع ماژول'
        },
        about: {
          title: 'درباره ماژول',
          imageAlt: 'رابط سواپ توکن BizSwap — ماژول Web3 توسعه‌یافته توسط بیزدوار',
          body: '<strong>BizSwap</strong> ماژول پیش‌فروش و سواپ توکن است که توسط <strong>تیم بیزدوار</strong> طراحی و پیاده‌سازی شده — کاربر بدون خروج از وبسایت پروژه، stablecoin را به توکن تبدیل می‌کند.',
          body2: 'شامل UI اتصال کیف پول (Web3)، ویجت سواپ با انتخاب توکن، دکمه‌های درصد سریع، محاسبه اسلیپیج و حداقل دریافتی، نمایش وضعیت تراکنش on-chain و یکپارچگی با اسمارت‌کنترکت BEP-20.',
          specsTitle: 'قابلیت‌های فنی',
          specs: [
            'اتصال کیف پول (WalletConnect / injected provider)',
            'سواپ stablecoin ↔ توکن پروژه در UI وبسایت',
            'ویجت پیش‌فروش (Presale) با نرخ لحظه‌ای',
            'دکمه‌های ۱۰٪ · ۲۵٪ · ۵۰٪ · ۷۵٪ · ۱۰۰٪ موجودی',
            'تنظیم و نمایش Slippage و Minimum Received',
            'مودال انتخاب توکن (From / To)',
            'فیدبک «در حال پردازش تراکنش» و خطاهای on-chain',
            'پشتیبانی BNB Chain (BEP-20)',
            'لینک تأیید قرارداد در explorer (BSC Scan و شبکه‌های سازگار)',
            'توابع onlyOwner: تغییر نرخ و Claim در قرارداد'
          ],
          ctaContact: 'سفارش ماژول مشابه',
          ctaPortfolio: 'سایر نمونه‌کارها'
        },
        capabilities: {
          eyebrow: 'امکانات در وبسایت',
          title: 'کاربر در وبسایت چه می‌کند؟',
          desc: 'همه عملیات داخل رابط وب — بدون نیاز به DEX جدا برای خرید اولیه.',
          items: [
            { icon: 'link', title: 'اتصال کیف پول', desc: 'اتصال Trust Wallet و کیف پول‌های سازگار با Web3 — نمایش موجودی مبدأ و مقصد.' },
            { icon: 'swap', title: 'سواپ DEX', desc: 'تبدیل USDT (یا stablecoin) به توکن پروژه با نرخ لحظه‌ای و تأیید در کیف پول.' },
            { icon: 'target', title: 'پیش‌فروش', desc: 'خرید در مرحله پیش‌فروش — مستقیم از صفحه فرود پروژه.' },
            { icon: 'chart-bar', title: 'اسلیپیج و حداقل دریافتی', desc: 'نمایش اسلیپیج (مثلاً ۰.۵٪) و حداقل توکن دریافتی قبل از تأیید.' },
            { icon: 'coin', title: 'انتخاب توکن', desc: 'انتخاب توکن مبدأ و مقصد از لیست پشتیبانی‌شده.' },
            { icon: 'hourglass', title: 'وضعیت تراکنش', desc: 'پیام «در حال پردازش…» هنگام ارسال تراکنش و بازخورد موفقیت یا خطا.' }
          ]
        },
        flow: {
          eyebrow: 'جریان کار',
          title: 'از اتصال کیف پول تا دریافت توکن',
          steps: [
            { title: 'اتصال کیف پول', desc: 'کاربر دکمه اتصال کیف پول را می‌زند و شبکه BEP-20 را تأیید می‌کند.' },
            { title: 'انتخاب مبلغ', desc: 'مقدار USDT یا درصد موجودی را وارد می‌کند — نرخ و توکن دریافتی محاسبه می‌شود.' },
            { title: 'تأیید on-chain', desc: 'تراکنش در کیف پول امضا و به شبکه ارسال می‌شود.' },
            { title: 'دریافت توکن', desc: 'پس از تأیید بلاک، موجودی To به‌روز و swap تکمیل می‌شود.' }
          ]
        },
        admin: {
          title: 'پنل مدیریت و قرارداد هوشمند',
          desc: 'توابع onlyOwner و تنظیمات — یکپارچه با UI ادمین.',
          items: [
            'تغییر نرخ — به‌روزرسانی نرخ swap در قرارداد (onlyOwner)',
            'برداشت توکن — برداشت توکن‌های لیست‌شده از قرارداد (onlyOwner)',
            'همگام‌سازی نرخ سایت با پنل مدیریت',
            'اتصال به آدرس قرارداد ثابت — شفافیت در explorer'
          ]
        },
        useCasesTitle: 'مناسب برای چه پروژه‌هایی؟',
        useCases: [
          'توکن‌های پشتوانه‌دار (RWA) — طلا، نقره، دارایی واقعی',
          'ICO / IDO / Presale مرحله‌ای',
          'پروژه‌های BEP-20 با landing و whitepaper',
          'سواپ درون‌سایتی قبل از لیست شدن در DEX خارجی'
        ],
        cta: {
          title: 'پیش‌فروش یا سواپ توکن می‌خواهید؟',
          desc: 'تیم بیزدوار ماژول BizSwap را برای پروژه Web3 شما سفارشی‌سازی می‌کند.',
          btn: 'درخواست مشاوره Web3'
        },
        related: {
          title: 'محصولات و خدمات مرتبط',
          items: [
            { href: '/pages/fxguard', icon: 'chat-wa', title: 'WhatsApp CRM', desc: 'FXGuard · از $49/ماه' },
            { href: '/pages/fast', icon: 'bolt', title: 'Fast Studio', desc: 'طراحی وب' },
            { href: '/pages/portfolio', icon: 'briefcase', title: 'نمونه‌کارها', desc: 'فین‌تک و Web3' },
            { href: '/pages/services', icon: 'list', title: 'خدمات', desc: 'طراحی وب و فین‌تک' }
          ]
        },
        geoText: 'توسعه ماژول DeFi و Web3 — بخشی از خدمات فین‌تک و طراحی وب بیزدوار گروپ.'
      },

      fxguard: {
        hero: {
          tag: 'Exchange · remittance · finance',
          title: 'Quote the rate on WhatsApp. Keep the customer book.',
          desc: 'Full copy loads from i18n/fxguard-i18n.js on this page only.',
          regions: '',
          trust: 'From $49/mo · guided demo · 7-day money-back',
          ctaDemo: 'See the panel',
          ctaPricing: 'Prices',
          ctaContact: 'Buy on WhatsApp',
          ctaStore: 'fxguard.io'
        },
        stats: {
          businesses: 'ماژول+',
          regions: 'نقش کاربری',
          regionsVal: 'Owner → Agent',
          uptime: 'هدف آپ‌تایم',
          setup: 'زبان پشتیبانی',
          setupSuffix: ''
        },
        suite: {
          eyebrow: 'سوئیت FXGuard',
          title: 'محصولات دیجیتال ما',
          desc: 'فروشگاه در fxguard.io — WhatsApp CRM زنده است؛ Accounting در راه است.',
          products: [
            {
              badge: 'موجود الان',
              title: 'WhatsApp CRM',
              desc: 'اینباکس مشترک، مشتریان، تیکت، شعب و ابزار FX. Cloud از $49/ماه.',
              cta: 'همین صفحه',
              ctaSecondary: 'همه محصولات',
              secondaryHref: 'products',
              featured: true,
              href: '#pricing'
            },
            {
              badge: 'به‌زودی',
              title: 'Accounting',
              desc: 'جریان‌های مالی برای همان تیم‌های صرافی و SME. به لیست انتظار بپیوندید.',
              cta: 'اطلاع در واتساپ',
              ctaSecondary: 'جزئیات بیشتر',
              secondaryHref: 'fxguard-accounting',
              href: 'https://wa.me/905010676486?text=' + encodeURIComponent('سلام، برای FXGuard Accounting (لیست انتظار) پیام می‌دهم.')
            }
          ]
        },
        problem: {
          eyebrow: 'مشکل',
          title: 'آشناست؟',
          desc: 'تیم‌های در حال رشد سریع از واتساپ شخصی جلوتر می‌افتند — پیام گم می‌شود و مسئولیت‌پذیری از بین می‌رود.',
          items: [
            { icon: 'mobile', title: 'چند گوشی، یک شماره', desc: 'اشتراک لاگین یا گوشی شخصی — پیام‌ها گم می‌شود و تصویر کامل از مکالمه وجود ندارد.' },
            { icon: 'list', title: 'بدون تاریخچه مشتری', desc: 'هر چت از صفر شروع می‌شود؛ تگ، یادداشت و زمینه مشترک بین اپراتورها نیست.' },
            { icon: 'clock', title: 'بدون پاسخ‌گویی', desc: 'نه تیکت، نه تسک، نه رکورد از اینکه چه کسی چه چیزی را کی بسته است.' },
            { icon: 'shield', title: 'امنیت مبهم', desc: 'دستگاه مشترک، بدون ۲FA و بدون جداسازی نقش بین شعب و سطوح دسترسی.' }
          ]
        },
        solution: {
          title: 'FXGuard همه این‌ها را حل می‌کند',
          desc: 'یک پنل برای واتساپ، مشتریان، تیکت، تسک، کاربران، شعب و ابزار FX — با دسترسی نقش‌محور و ۲FA. قبل از انتخاب مدل استقرار، زنده امتحان کنید.',
          cta: 'باز کردن دموی رایگان',
          href: 'https://app.fxguard.io/'
        },
        why: {
          eyebrow: 'چرا بخرند',
          title: 'چرا تیم‌ها FXGuard می‌خرند',
          desc: 'برای بستن معامله بیشتر و محافظت از هر چت — نه فقط یک مسنجر دیگر.',
          items: [
            { num: '01', title: 'جلوی از دست رفتن پول در چت را بگیرید', desc: 'پیام خوانده‌نشده = مشتری از دست‌رفته. اینباکس مشترک یعنی چیزی جا نمی‌ماند.' },
            { num: '02', title: 'با تاریخچه کامل بفروشید', desc: 'تگ، یادداشت و چت‌های قبلی روی مشتری می‌ماند — تیم با زمینه می‌بندد.' },
            { num: '03', title: 'کنترل کنید چه کسی چه می‌بیند', desc: 'نقش، شعبه و ۲FA تا مالک در همه مکان‌ها کنترل داشته باشد.' },
            { num: '04', title: 'یک‌بار بخرید؛ هر طور خواستید اجرا کنید', desc: 'Cloud از $49/ماه، لایسنس یک‌باره روی سرور شما، یا Managed کامل توسط ما.' }
          ]
        },
        demo: {
          eyebrow: 'دموی زنده',
          title: 'محصول واقعی را خودتان امتحان کنید',
          desc: 'این پنل زنده FXGuard است، نه ماکاپ.',
          liveBadge: 'LIVE DEMO',
          userLabel: 'نام کاربری',
          passLabel: 'رمز عبور',
          user: 'demo',
          pass: '123456',
          note: 'محیط دموی عمومی — آزادانه کاوش کنید. چیزی که وارد یا تغییر می‌دهید ذخیره نمی‌شود.',
          cta: 'باز کردن دموی زنده',
          shots: [
            { title: 'Dashboard', desc: 'نمای زنده و اکشن‌های سریع' },
            { title: 'Users & Roles', desc: 'Owner تا Agent · امنیت و ۲FA' },
            { title: 'Mobile', desc: 'داشبورد و مکالمات در موبایل' }
          ]
        },
        steps: {
          eyebrow: 'خرید در ۳ گام',
          title: 'دمو رایگان، انتخاب پکیج، خرید امروز',
          desc: 'چرخه فروش طولانی نیست — اول محصول واقعی را ببینید، بعد مدل استقرار را انتخاب کنید.',
          items: [
            { num: '01', icon: 'bolt', title: 'دموی زنده را امتحان کنید', desc: 'app.fxguard.io — کاربر demo / رمز 123456. محصول واقعی است، نه ماکاپ.' },
            { num: '02', icon: 'target', title: 'پکیج را انتخاب کنید', desc: 'Hosted Cloud برای سرعت، Self-hosted License برای مالکیت، یا Managed Dedicated برای استقرار کامل.' },
            { num: '03', icon: 'whatsapp', title: 'خرید یا استعلام', desc: 'از طریق واتساپ فروش یا فرم در fxguard.io — معمولاً در روز کاری کمتر از ۲۴ ساعت پاسخ می‌گیرید.' }
          ],
          cta: 'باز کردن دموی زنده'
        },
        features: {
          eyebrow: 'ماژول‌ها',
          title: 'همه‌چیز در یک پنل',
          desc: 'ماژول‌های واقعی برای تیم‌های صرافی، مالی، فروش و پشتیبانی.',
          items: [
            { icon: 'inbox', title: 'اینباکس یکپارچه واتساپ', desc: 'یک شماره، اینباکس مشترک؛ فیلتر خوانده‌نشده/باز/اختصاص‌یافته و مسیریابی به اپراتور درست.' },
            { icon: 'users', title: 'مشتریان و CRM', desc: 'پروفایل، تگ و تاریخچه مکالمه — دیگر از صفر شروع نمی‌کنید.' },
            { icon: 'list', title: 'تیکت پشتیبانی', desc: 'درخواست‌ها از باز تا بسته‌شدن با مالکیت و وضعیت شفاف.' },
            { icon: 'bolt', title: 'تسک و گردش کار', desc: 'تخصیص تسک و پیگیری فرایند تا انتها.' },
            { icon: 'shield', title: 'نقش، شعبه و ۲FA', desc: 'Owner تا Agent، شعب و دپارتمان، Google Authenticator و لاگ فعالیت.' },
            { icon: 'chart-line', title: 'ابزار FX و نرخ', desc: 'تنظیم نرخ، نمودار ارز و ابزارهای سرویس صرافی برای تیم‌های مالی.' }
          ]
        },
        audiences: {
          eyebrow: 'برای چه کسانی',
          title: 'ساخته‌شده برای صرافی، فایننس و پشتیبانی',
          desc: 'تیم‌هایی که به پاسخ‌گویی واقعی نیاز دارند — نه فقط چت.',
          items: [
            { icon: 'chart-line', title: 'صرافی و FX', region: 'ترکیه · امارات · اروپا · ایران', desc: 'چند شعبه، نرخ و سرویس تبادل در کنار اینباکس تیمی.', tag: 'Multi-branch' },
            { icon: 'briefcase', title: 'فروش و پشتیبانی B2B', region: 'همه مناطق', desc: 'تاریخچه مشتری، تیکت و تسک برای بستن معامله با زمینه کامل.', tag: 'Sales ops' },
            { icon: 'building', title: 'هلدینگ و چند شعبه', region: 'ترکیه · دبی', desc: 'نقش، شعبه و نظارت مالک روی فعالیت کارکنان.', tag: 'Roles & branches' },
            { icon: 'health', title: 'خدمات و کلینیک', region: 'ترکیه · اروپا', desc: 'پیگیری درخواست، یادآوری و پاسخ‌گویی بدون گم‌شدن پیام.', tag: 'Support desk' }
          ]
        },
        pricing: {
          eyebrow: 'پکیج‌ها',
          title: 'سه مدل اجرا — همان هسته محصول',
          desc: 'تفاوت در این است که چه کسی میزبانی و عملیات را انجام می‌دهد. همه پکیج‌ها ماژول‌های اصلی را دارند.',
          note: 'دمو رایگان است. قبل از پرداخت با فروش صحبت کنید — Cloud از $49/ماه یا $490/سال.',
          plans: [
            {
              id: 'cloud',
              name: 'Hosted Cloud',
              price: '$49',
              period: '/ماه',
              badge: 'محبوب‌ترین',
              desc: 'ما FXGuard را برای شما روی زیرساخت خودمان اجرا می‌کنیم. ثبت‌نام، ورود، شروع کار.',
              features: [
                'آماده در چند دقیقه، بدون سرور',
                'به‌روزرسانی و پچ امنیتی خودکار',
                'بکاپ روزانه و مانیتورینگ',
                'نقش‌محور و ۲FA',
                'یا $490 در سال (۲ ماه صرفه‌جویی)'
              ],
              cta: 'خرید Cloud در fxguard.io',
              href: 'https://fxguard.io/',
              featured: true
            },
            {
              id: 'license',
              name: 'Self-hosted License',
              price: 'یک‌باره',
              period: ' · استعلام',
              desc: 'سیستم کامل را بخرید و روی سرور خودتان اجرا کنید — داده نزد شما می‌ماند.',
              features: [
                'خرید یک‌باره، مال شما',
                'پکیج نصب و مستندات',
                'داده روی زیرساخت شما',
                'قرارداد اختیاری آپدیت و پشتیبانی',
                'آنبوردینگ اولیه'
              ],
              cta: 'استعلام لایسنس',
              href: 'https://fxguard.io/'
            },
            {
              id: 'managed',
              name: 'Managed Dedicated',
              price: 'سفارشی',
              period: ' · استعلام',
              desc: 'نصب، میزبانی و عملیات اختصاصی توسط تیم ما — با SLA و حساب‌مدیر.',
              features: [
                'اینستنس اختصاصی',
                'نگهداری، مانیتورینگ و بکاپ',
                'SLA و زمان پاسخ سفارشی',
                'حساب‌مدیر اختصاصی',
                'آموزش کارکنان'
              ],
              cta: 'استعلام Managed',
              href: 'https://fxguard.io/'
            }
          ]
        },
        faq: {
          eyebrow: 'سوالات',
          title: 'پرسش‌های پرتکرار',
          items: [
            { q: 'تفاوت Cloud، لایسنس و Managed چیست؟', a: 'Cloud: ما میزبانی می‌کنیم (ماهانه/سالانه). لایسنس: سیستم را یک‌بار می‌خرید و روی سرور خودتان اجرا می‌کنید. Managed: اینستنس اختصاصی را ما نصب و اداره می‌کنیم. هر سه همان ماژول‌های اصلی را دارند.' },
            { q: 'قبل از خرید می‌توانم امتحان کنم؟', a: 'بله. دموی زنده در app.fxguard.io (کاربر demo / رمز 123456) محصول واقعی است — عمومی است و تغییرات ذخیره نمی‌شود.' },
            { q: 'شروع قیمت چقدر است؟', a: 'Hosted Cloud از $49 در ماه یا $490 در سال. لایسنس و Managed با استعلام قیمت سفارشی.' },
            { q: 'داده بکاپ می‌شود؟', a: 'روی Cloud و Managed بکاپ روزانه بخشی از سرویس است. روی لایسنس Self-hosted بکاپ روی زیرساخت شماست — راهنمایی و قرارداد پشتیبانی در دسترس است.' },
            { q: 'امنیت چگونه است؟', a: 'هر حساب می‌تواند ۲FA با Google Authenticator داشته باشد. دسترسی نقش‌محور (Owner تا Agent) و لاگ کامل فعالیت وجود دارد.' },
            { q: 'چند شعبه و نقش پشتیبانی می‌شود؟', a: 'شعب و دپارتمان داخلی است؛ نقش‌ها از Owner تا Agent با نظارت مالک روی وضعیت آنلاین و تاریخچه ورود.' },
            { q: 'چه زبان‌هایی پشتیبانی می‌شود؟', a: 'وبسایت و پشتیبانی: فارسی، ترکی، انگلیسی، عربی و روسی.' },
            { q: 'رابطه با بیزدوار چیست؟', a: 'FXGuard محصول سوئیت دیجیتال تیم بیزدوار است؛ فروش و دمو از طریق fxguard.io انجام می‌شود و در کاتالوگ محصولات بیزدوار هم معرفی می‌گردد.' }
          ]
        },
        support: {
          eyebrow: 'پشتیبانی',
          title: 'پشتیبانی که بعد از نصب تمام نمی‌شود',
          desc: 'بکاپ، نگهداری، امنیت و پشتیبانی چندزبانه — روی هر پلنی که ما عملیات می‌کنیم.',
          items: [
            { icon: 'monitor', title: 'مانیتورینگ و نگهداری ۲۴/۷', desc: 'پلن‌های Cloud و Managed شبانه‌روزی مانیتور می‌شوند با نگهداری و پچ پیشگیرانه.' },
            { icon: 'shield', title: 'بکاپ روزانه و بازیابی', desc: 'بکاپ خودکار روزانه روی پلن‌های میزبانی‌شده با فرایند بازیابی مستند.' },
            { icon: 'lock', title: 'امنیت و ۲FA', desc: 'Google Authenticator، نقش‌محور و لاگ فعالیت روی هر استقرار.' },
            { icon: 'globe', title: 'پشتیبانی چندزبانه', desc: 'آنبوردینگ و پشتیبانی به فارسی، ترکی، انگلیسی، عربی و روسی.' },
            { icon: 'building', title: 'استقرار چندشعبه', desc: 'کمک برای ساختار شعبه، دپارتمان و نقش‌ها هنگام رشد.' },
            { icon: 'bolt', title: 'هدف آپ‌تایم ۹۹.۹٪', desc: 'Cloud و Managed برای دسترسی بالا؛ SLA در صورت درخواست.' },
            { icon: 'document', title: 'داده با رویکرد GDPR', desc: 'حداقل‌سازی داده و کنترل دسترسی مطابق اصول GDPR.' },
            { icon: 'users', title: 'آنبوردینگ و مهاجرت', desc: 'راه‌اندازی راهنما، کمک ایمپورت داده و آموزش کارکنان هنگام go-live.' }
          ]
        },
        updates: {
          eyebrow: 'به‌روزرسانی‌ها',
          title: 'چه خبر در FXGuard؟',
          desc: 'Cloud و Managed خودکار به‌روز می‌شوند؛ لایسنس Self-hosted با قرارداد آپدیت.',
          items: [
            {
              date: 'Jul 2026',
              tag: 'Latest',
              title: 'دموی عمومی زنده و مدل‌های استقرار شفاف‌تر',
              desc: 'محیط دموی عمومی در app.fxguard.io و بسته‌بندی روشن‌تر برای Cloud، لایسنس و Managed.',
              bullets: ['دموی پنل با اعتبار مشترک', 'مسیر فروش لایسنس و Managed', 'اسکرین واقعی دسکتاپ و موبایل']
            },
            {
              date: 'May 2026',
              tag: 'Security',
              title: 'امنیت حساب قوی‌تر و برندینگ پنل',
              desc: '۲FA با Google Authenticator، سخت‌سازی پروفایل و تنظیمات ظاهر پنل.',
              bullets: ['راه‌اندازی ۲FA در پروفایل', 'دسترسی نقش‌محور Owner → Agent', 'عنوان و ظاهر ورود قابل تنظیم']
            },
            {
              date: 'Mar 2026',
              tag: 'Product',
              title: 'عملیات چندشعبه و ابزار تیم FX',
              desc: 'شعب، دپارتمان و نظارت مالک به‌همراه نرخ و سرویس تبادل.',
              bullets: ['ساختار شعبه و دپارتمان', 'وضعیت آنلاین کارکنان', 'نرخ FX، نمودار و سرویس تبادل']
            },
            {
              date: 'Jan 2026',
              tag: 'Core',
              title: 'اینباکس یکپارچه، تیکت، تسک و موبایل',
              desc: 'حلقه هسته CRM: یک شماره برای کل تیم، تاریخچه مشتری، تیکت و تسک — دسکتاپ و موبایل.',
              bullets: ['اینباکس تیمی واتساپ', 'مشتری، تیکت و گردش تسک', 'داشبورد و مکالمات موبایل']
            }
          ]
        },
        about: {
          title: 'محصول FXGuard — توسعه اکوسیستم بیزدوار',
          body: '<strong>FXGuard WhatsApp CRM</strong> اینباکس تیمی، CRM مشتری، تیکت، تسک، شعب و ابزار FX را در یک پنل امن جمع می‌کند. فروشگاه محصول: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · دمو: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a>.',
          ctaContact: 'رفتن به fxguard.io',
          ctaPortfolio: 'Accounting و محصولات مرتبط'
        },
        cta: {
          title: 'آماده خرید FXGuard هستید؟',
          desc: 'اول دموی رایگان را ببینید؛ بعد Cloud از $49/ماه، لایسنس یا Managed را انتخاب کنید.',
          btnStart: 'دموی رایگان',
          btnPricing: 'مشاهده پکیج‌ها',
          btnStore: 'fxguard.io'
        },
        related: { title: 'محصولات و خدمات مرتبط' },
        geoText: 'FXGuard WhatsApp CRM — ترکیه، امارات، اروپا و ایران · سوئیت fxguard.io · توسعه اکوسیستم بیزدوار.'
      },

      fxguardAccounting: {
        hero: {
          tag: 'FXGuard · Accounting',
          badge: 'به‌زودی',
          title: 'Accounting — حسابداری برای تیم‌های مالی و صرافی',
          desc: 'جریان‌های مالی همان تیم‌هایی که امروز WhatsApp CRM را اجرا می‌کنند. بخشی از سوئیت <strong>FXGuard</strong> — توسعه بیزدوار؛ الان در لیست انتظار.',
          ctaWaitlist: 'اطلاع در واتساپ',
          ctaCrm: 'دموی WhatsApp CRM',
          ctaStore: 'fxguard.io',
          trust: 'Coming soon · کنار CRM · اکوسیستم بیزدوار'
        },
        audience: {
          eyebrow: 'برای چه کسانی',
          title: 'ساخته‌شده برای همان تیم‌های FXGuard',
          desc: 'صرافی، فایننس و SMEهایی که به حسابداری متمرکز کنار عملیات واتساپ نیاز دارند.',
          items: [
            { icon: 'chart-line', title: 'دفاتر صرافی و حواله', desc: 'ثبت و پیگیری عملیات مالی کنار اینباکس تیمی.' },
            { icon: 'briefcase', title: 'تیم‌های مالی SME', desc: 'جریان‌های حسابداری شفاف برای کسب‌وکارهای در حال رشد.' },
            { icon: 'building', title: 'هلدینگ چندشعبه', desc: 'نقش و دسترسی جدا برای حسابداری شعب.' },
            { icon: 'users', title: 'همراه WhatsApp CRM', desc: 'همان اکوسیستم FXGuard — فروش، پشتیبانی و مالی در یک سوئیت.' }
          ]
        },
        features: {
          eyebrow: 'قابلیت‌ها (نقشه راه)',
          title: 'چه چیزی پوشش می‌دهد؟',
          desc: 'Accounting برای تکمیل حلقه عملیاتی صرافی و پشتیبانی طراحی می‌شود — نه یک دفترکل عمومی جدا.',
          items: [
            { icon: 'document', title: 'جریان‌های مالی', desc: 'ثبت و پیگیری عملیات مالی تیم‌های صرافی و SME.' },
            { icon: 'shield', title: 'دسترسی نقش‌محور', desc: 'کنترل دسترسی کارکنان حسابداری با نقش‌های مشخص.' },
            { icon: 'inbox', title: 'هماهنگ با CRM واتساپ', desc: 'کنار WhatsApp CRM برای فروش و پشتیبانی.' },
            { icon: 'building', title: 'استقرار اختصاصی', desc: 'نصب و سفارشی‌سازی برای هلدینگ‌ها و کسب‌وکارهای مالی.' },
            { icon: 'lock', title: 'امنیت سازمانی', desc: 'هم‌راستا با ۲FA و نقش‌های سوئیت FXGuard.' },
            { icon: 'globe', title: 'چندزبانه', desc: 'پشتیبانی فارسی، ترکی، انگلیسی، عربی و روسی.' }
          ]
        },
        steps: {
          eyebrow: 'لیست انتظار',
          title: 'چطور مطلع شوید',
          items: [
            { num: '01', title: 'CRM را امروز ببینید', desc: 'دموی زنده WhatsApp CRM در app.fxguard.io آماده است.' },
            { num: '02', title: 'به لیست انتظار بپیوندید', desc: 'در واتساپ بگویید برای Accounting اطلاع می‌خواهید.' },
            { num: '03', title: 'اولویت early access', desc: 'وقتی لانچ شد، تیم فروش با شما هماهنگ می‌کند.' }
          ]
        },
        faq: {
          eyebrow: 'سوالات',
          title: 'پرسش‌های Accounting',
          items: [
            { q: 'Accounting الان قابل خرید است؟', a: 'هنوز نه — در نقشه راه سوئیت FXGuard است و لیست انتظار باز است. WhatsApp CRM از امروز از $49/ماه در دسترس است.' },
            { q: 'با CRM چه ارتباطی دارد؟', a: 'هر دو محصول سوئیت FXGuard هستند؛ Accounting برای همان تیم‌های صرافی/مالی کنار عملیات واتساپ طراحی می‌شود.' },
            { q: 'چطور در لیست انتظار باشم؟', a: 'از واتساپ فروش (+90 501 067 6486) یا فرم تماس بیزدوار پیام بدهید و به Accounting اشاره کنید.' }
          ]
        },
        cta: {
          title: 'CRM امروز · Accounting به‌زودی',
          desc: 'اول دموی WhatsApp CRM را ببینید؛ برای Accounting در لیست انتظار بمانید — <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a>.',
          crm: 'WhatsApp CRM',
          waitlist: 'واتساپ لیست انتظار',
          store: 'fxguard.io'
        },
        geoText: 'FXGuard Accounting — حسابداری سوئیت FXGuard برای تیم‌های صرافی و SME · توسعه بیزدوار.'
      },

      marvispace: {
        hero: { tag: 'نمونه‌کار طراحی و توسعه وب', title: 'MarviSpace — فروشگاه آنلاین محصولات چرمی', desc: 'برنامه‌نویسی، توسعه و طراحی وبسایت فروشگاهی اختصاصی برای برند محصولات چرمی — توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>MarviSpace</strong> نمونه‌کار برنامه‌نویسی و طراحی فروشگاه آنلاین بیزدوار گروپ است — فروشگاه اختصاصی محصولات چرمی با کاتالوگ مینیمال، جریان خرید و پنل مدیریت. این صفحه <strong>نمونه‌کار طراحی و توسعه وب فروشگاهی</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی UI/UX فروشگاه محصولات چرمی', 'برنامه‌نویسی و توسعه فروشگاه اختصاصی', 'کاتالوگ محصول، سبد خرید و جریان سفارش', 'داشبورد ادمین و مدیریت محتوا', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی پس از لانچ'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'MarviSpace برند فروش آنلاین محصولات چرمی است — کت، پوشاک و اکسسوری چرم. جزئیات محصولات و سفارش در وبسایت رسمی مشتری منتشر می‌شود.', challengeTitle: 'چالش پروژه', challenge: 'برند محصولات چرمی به فروشگاه اختصاصی نیاز داشت — گرید محصول مینیمال، کد SKU، تجربه خرید بین‌المللی و پنل مدیریت محتوا؛ نه قالب آماده.', resultsTitle: 'نتایج و دستاورد', result1: 'فروشگاه زنده marvispace.com با کاتالوگ محصولات چرمی', result2: 'تجربه خرید مینیمال و هویت بصری اختصاصی برند', result3: 'پنل مدیریت محصول و محتوا برای تیم فروش', ctaSite: 'مشاهده وبسایت MarviSpace', ctaOrder: 'سفارش فروشگاه مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        shots: { grid: 'کاتالوگ محصولات چرمی روی marvispace.com' },
        geoText: 'نمونه‌کار برنامه‌نویسی و طراحی فروشگاه آنلاین محصولات چرمی — بیزدوار گروپ.'
      },
      bzDiamond: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'BZ Diamond — طراحی وبسایت و فروشگاه آنلاین', desc: 'پروژه مشتری در حوزه جواهرات و الماس — طراحی، توسعه و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>BZ Diamond</strong> یکی از مشتریان بیزدوار گروپ است — برند تخصصی فروش الماس و جواهرات آنلاین. ما وبسایت، فروشگاه WooCommerce، زیرساخت ایمیل و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است، نه بخش کسب‌وکار صنعتی بیزدوار.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی و فروشگاهی', 'پیاده‌سازی WooCommerce — فروش آنلاین الماس و جواهرات', 'مدیریت و پیکربندی ایمیل سازمانی (دامنه و صندوق‌های پستی)', 'سئو، ساختار محتوا و بهینه‌سازی صفحات محصول', 'رابط کاربری RTL و چندزبانه (فارسی / انگلیسی)', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'BZ Diamond در حوزه الماس GIA، lab-grown و آموزش انتخاب جواهرات فعالیت می‌کند. جزئیات محصولات و قیمت‌ها در وبسایت رسمی مشتری منتشر می‌شود.', challengeTitle: 'چالش پروژه', challenge: 'نیاز به فروشگاه آنلاین قابل‌اعتماد برای الماس و جواهرات، با RTL فارسی/انگلیسی، سئوی صفحات محصول و ایمیل سازمانی امن — بدون قطع پشتیبانی پس از لانچ.', resultsTitle: 'نتایج و دستاورد', result1: 'فروشگاه WooCommerce با ساختار کاتالوگ و صفحات تبدیل', result2: 'ایمیل دامنه و نگهداری مداوم پس از تحویل', result3: 'پایه سئو و چندزبانه برای بازار هدف مشتری', ctaSite: 'مشاهده وبسایت BZ Diamond', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای برندهای ایران و بین‌المللی — WooCommerce، سئو و پشتیبانی از دفاتر ایران، ترکیه، ارمنستان و دبی.'
      },
      supplifyTrade: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'Supplify Trade — طراحی وبسایت تجارت بین‌المللی', desc: 'پروژه مشتری B2B در امارات (RAKEZ) — طراحی وبسایت شرکتی، سئو و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>Supplify Trade FZ-LLC</strong> یکی از مشتریان بیزدوار گروپ است — شرکت تجارت و sourcing بین‌المللی با لایسنس RAKEZ در رأس‌الخیمه، امارات. ما وبسایت شرکتی، ساختار محتوا، سئو پایه و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی B2B', 'هویت بصری و رابط کاربری چندبخشی (خدمات، صنایع، فرآیند، تماس)', 'سئو پایه، ساختار محتوا و صفحات تبدیل (RFQ)', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'Supplify Trade FZ-LLC در sourcing، تأمین، کنترل کیفیت و لجستیک بین‌المللی فعالیت می‌کند — مصالح ساختمانی، کالاهای صنعتی، تجهیزات کشاورزی و قطعات خودرو. جزئیات خدمات و استعلام قیمت در وبسایت رسمی مشتری منتشر می‌شود.', ctaSite: 'مشاهده وبسایت Supplify Trade', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای شرکت‌های تجارت بین‌المللی در امارات و خاورمیانه — بیزدوار گروپ.'
      },
      kayaOne: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'Kaya One AG — طراحی وبسایت تجارت سوئیسی', desc: 'پروژه مشتری B2B در سوئیس — طراحی وبسایت شرکتی، سئو و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>Kaya One AG</strong> یکی از مشتریان بیزدوار گروپ است — شرکت تجارت و راهکارهای صنعتی ثبت‌شده در سوئیس (Brunnen، کانتون Schwyz، UID: CHE-351.641.458). ما وبسایت شرکتی، ساختار محتوا، سئو پایه و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی B2B', 'هویت بصری و رابط کاربری چندبخشی (خدمات، صنایع، درباره، تماس)', 'سئو پایه، ساختار محتوا و صفحات تبدیل', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'Kaya One AG در تجارت بین‌المللی، تجهیزات سنگین و لجستیک فعالیت می‌کند — محصولات کشاورزی و غذایی، فلزات و فولاد، کامیون و ماشین‌آلات صنعتی. جزئیات خدمات در وبسایت رسمی مشتری منتشر می‌شود.', challengeTitle: 'چالش پروژه', challenge: 'شرکت تجارت سوئیسی به وبسایت B2B چندبخشی نیاز داشت که اعتماد اروپایی بسازد، خدمات و صنایع را شفاف کند و مسیر تماس/استعلام را کوتاه کند.', resultsTitle: 'نتایج و دستاورد', result1: 'وبسایت شرکتی با ساختار خدمات، صنایع و تماس', result2: 'سئو پایه و بهینه‌سازی موبایل برای بازار بین‌الملل', result3: 'نگهداری و به‌روزرسانی فنی توسط بیزدوار', ctaSite: 'مشاهده وبسایت Kaya One AG', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای شرکت‌های تجارت سوئیسی و بین‌المللی — بیزدوار گروپ.'
      },
      smmTurk: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'SMM Turk — طراحی پنل SMM و وبسایت', desc: 'پروژه مشتری در ترکیه — طراحی رابط کاربری پنل، وبسایت و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>SMM Turk</strong> یکی از مشتریان بیزدوار گروپ است — پلتفرم پنل SMM برای رشد کسب‌وکار در شبکه‌های اجتماعی با قیمت رقابتی، تحویل خودکار ۲۴/۷ و برنامه همکاری (affiliate / reseller). ما وبسایت و تجربه کاربری پنل، ساختار محتوا، سئو پایه و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت و پنل کاربری SMM', 'رابط کاربری ورود، ثبت‌نام و داشبورد', 'سئو پایه، ساختار محتوا و صفحات تبدیل', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی، به‌روزرسانی و نگهداری'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'SMM Turk پنل خدمات شبکه‌های اجتماعی ارائه می‌دهد — سفارش خودکار، پرداخت کریپتو (BTC، ETH، USDT)، برنامه نمایندگی (bayi panel) و API. جزئیات قیمت و خدمات در وبسایت رسمی مشتری منتشر می‌شود.', challengeTitle: 'چالش پروژه', challenge: 'پنل SMM ترکیه به UI روشن برای ثبت‌نام، داشبورد و صفحات تبدیل نیاز داشت — با تمرکز بر موبایل و نرخ ثبت‌نام.', resultsTitle: 'نتایج و دستاورد', result1: 'طراحی وبسایت و جریان ورود/داشبورد پنل', result2: 'صفحات تبدیل و سئو پایه برای ترافیک ترکیه', result3: 'پشتیبانی فنی و به‌روزرسانی پس از لانچ', ctaSite: 'مشاهده وبسایت SMM Turk', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب و پنل SMM برای بازار ترکیه و بین‌الملل — بیزدوار گروپ.'
      },
      marviSociety: {
        hero: { tag: 'نمونه‌کار اپلیکیشن iOS', title: 'Marvi Society — اپ iOS کلاب دعوت‌محور استانبول', desc: 'طراحی، برنامه‌نویسی و انتشار صفر تا صد اپ iOS — اتصال creatorهای تأییدشده با مکان‌های استانبول؛ منتشر در App Store' },
        about: { title: 'درباره پروژه', body: '<strong>Marvi Society</strong> نمونه‌کار توسعه موبایل بیزدوار گروپ است — اپ iOS دعوت‌محور برای همکاری creator و کسب‌وکارهای تأییدشده در استانبول. کشف رویداد و مکان، ارسال درخواست همکاری، check-in، ارسال مدرک بازدید، مدیریت مکان و پروفایل TR/EN. این صفحه <strong>نمونه‌کار اپلیکیشن iOS</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی محصول و UI/UX اپ iOS', 'برنامه‌نویسی و معماری اپ موبایل', 'جریان کشف، دعوت، check-in و مدرک بازدید', 'پنل مدیریت مکان، کمپین و اعلان‌ها', 'انتشار در App Store و پشتیبانی پس از لانچ'], clientTitle: 'حوزه فعالیت محصول', clientBody: 'Marvi Society کلاب دعوت‌محور lifestyle در استانبول است — اتصال creator با رستوران، نایت‌لایف، wellness و زیبایی. جزئیات محصول در وبسایت و صفحه App Store منتشر می‌شود.', challengeTitle: 'چالش پروژه', challenge: 'نیاز به اپ دعوت‌محور برای اتصال creator و مکان در استانبول — با کشف رویداد، مدیریت دعوت، check-in و اثبات بازدید، آماده انتشار در App Store.', resultsTitle: 'نتایج و دستاورد', result1: 'اپ iOS منتشرشده در App Store', result2: 'جریان کامل کشف، همکاری و مدیریت مکان', result3: 'هویت بصری دارک و تجربه TR/EN', ctaAppStore: 'مشاهده در App Store', ctaSite: 'وبسایت Marvi Society', ctaOrder: 'سفارش اپلیکیشن مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        shots: { discover: 'کشف رویدادها', events: 'رویدادها و دعوت‌ها', profile: 'پروفایل creator' },
        geoText: 'نمونه‌کار توسعه اپ iOS برای بازار استانبول و بین‌الملل — طراحی تا انتشار در App Store توسط بیزدوار گروپ.'
      },
      fxguardExchange: {
        hero: { tag: 'نمونه‌کار فین‌تک', title: 'FXGuard Exchange — پلتفرم تبادل تومان و لیر', desc: 'طراحی و توسعه وب‌اپلیکیشن تبادل ارز مسیر ایران ↔ ترکیه — نرخ زنده، سفارش شناسه‌دار، KYC و پیگیری مرحله‌ای توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>FXGuard Exchange</strong> یک پلتفرم تخصصی تبادل تومان و لیر است که توسط بیزدوار گروپ طراحی و توسعه شده — تمرکز روی مسیر <strong>IRR ↔ TRY</strong> با نرخ مرجع شفاف، ثبت سفارش با شناسه یکتا، احراز هویت (KYC)، ماشین‌حساب تبدیل، جدول نرخ زنده و پیگیری مرحله‌ای تا تسویه. این صفحه <strong>نمونه‌کار طراحی وب و فین‌تک</strong> است و با محصول جداگانه «اسکریپت CRM واتساپ» فرق دارد.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وب‌اپلیکیشن تبادل ارز (RTL فارسی)', 'داشبورد نرخ زنده، ماشین‌حساب تبدیل و جدول ارزها', 'جریان ثبت سفارش، پیگیری شناسه‌دار و KYC', 'حالت روشن/تاریک، سئو صفحات نرخ و ساختار محتوا', 'امنیت حساب (ورود، ۲FA) و پشتیبانی متصل به سفارش'], clientTitle: 'حوزه فعالیت محصول', clientBody: 'FXGuard Exchange زیرساخت تخصصی تبادل تومان و لیر برای کاربران مسیر ایران–ترکیه است. سفارش واقعی فعلاً روی IRR ↔ TRY فعال است؛ سایر ارزها (دلار، یورو، درهم و…) به‌عنوان مرجع قیمت نمایش داده می‌شوند — نه بازار رمزارز.', ctaSite: 'مشاهده FXGuard Exchange', ctaCrm: 'اسکریپت CRM واتساپ', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار فین‌تک برای مسیر ایران ↔ ترکیه — طراحی و توسعه توسط بیزدوار گروپ.'
      }
    },
    tr: {
      biztejarat: {
        hero: { tag: 'Geçmiş proje · SMM', title: 'Biztejarat — Endüstriyel ürün SMM örneği', desc: 'Elektronik ekipman, ölçüm cihazları ve endüstriyel parçalar için geçmiş Instagram içerik yönetimi projesi' },
        about: { title: 'Proje hakkında', archivedNotice: 'Bu projenin Instagram sayfası kapatıldı ve şu an aktif değil. Bu sayfa yalnızca B2B SMM örneği olarak arşivlenmiştir.', body: '<strong>Biztejarat</strong>, Bizdavar Group tarafından kurulan ve yönetilen bir SMM örneği projesiydi — endüstriyel ürünler Instagram sayfası. Bu proje <strong>SMM yönetimi ve B2B içerik üretimi</strong> örneğidir; Bizdavar’ın ayrı bir ticari veya pazarlama birimi değildir.', body2: 'Aktif dönemde elektronik ekipman, ölçüm cihazları, sensör ve endüstriyel parçalar (VEGA, Prosense ve ilgili markalar dahil) gönderi ve story formatında tanıtılıyordu.', servicesTitle: 'Yapılan hizmetler', services: ['Instagram profili kurulumu ve optimizasyonu', 'Endüstriyel ürünler için Türkçe, Farsça ve İngilizce içerik üretimi', 'Gönderi ve story grafik tasarımı', 'Yayın takvimi ve etkileşim yönetimi', 'Kataloglara ve teklif sayfalarına yönlendirme'], ctaSmm: 'SMM yönetim hizmetleri', ctaPortfolio: 'Diğer örnekler' },
        products: { title: 'Kapsanan içerik alanları', desc: 'Bu projede kapsanan alan örnekleri — teknik tedarik <a href="products#supply">Bizdavar Group</a> üzerinden', vega: 'Seviye ve basınç sensörü', prosense: 'Gaz ve alev dedektörü', gamak: 'Endüstriyel elektrik motoru', industrialTitle: 'Endüstriyel ekipman', industrialDesc: 'B2B danışmanlık ve tedarik' },
        geoText: 'Geçmiş B2B SMM örneği — VEGA, Prosense ve Gamak endüstriyel ekipmanlarının Türkçe, Farsça ve İngilizce tanıtımı.'
      },
      biztab: {
        hero: { tag: 'Özel ürün · IoT', title: 'BizTab — Temasız duvar termometresi', desc: 'Tebriz\'de tasarlanan ilk temasız duvar termometresi — Bizdavar ekibi tarafından geliştirildi, 0,3°C altı hata payı' },
        about: {
          title: 'Ürün hakkında',
          imageAlt: 'BizTab — Bizdavar ekibi tarafından tasarlanan temasız duvar termometresi',
          body: '<strong>BizTab</strong>, <strong>Bizdavar ekibi</strong> tarafından tasarlanıp geliştirilen temasız duvar termometresidir. <strong>Tebriz\'deki ilk temasız duvar termometresi</strong> olarak tanıtılmıştır; tüm fikri mülkiyet ve münhasır üretim hakları Bizdavar ekibine aittir.',
          body2: 'Termometre Tebriz Üniversitesi akademisyenleri tarafından onaylanmıştır; girişler, sağlık tesisleri ve yoğun alanlar için duvara monte, temasız ölçüm ve dijital ekran sunar.',
          specsTitle: 'Teknik özellikler',
          specs: ['Temasız ölçüm (kızılötesi)', '0,3°C altı hata payı', 'Dijital LED ekran', 'Duvar montajı — giriş ve salonlar için', 'Tebriz Üniversitesi akademik onayı', 'Bizdavar ekibi münhasır üretimi'],
          ctaContact: 'Teklif ve iletişim',
          ctaPress: 'Nasr News haberi'
        },
        press: { eyebrow: 'Medya ve başarı', title: 'Basın ve bilimsel onay', desc: 'BizTab tanıtımı — Nasr News Ajansı, Mart 2020', quote: '«Bu termometre Bizdavar ekibi tarafından geliştirilmiştir; tüm haklar ve münhasır üretim bu ekibe aittir.»', source: 'Nasr News Ajansı', imageAlt: 'Nasr News Ajansı\'nda BizTab haber sayfası — Mart 2020' },
        related: { title: 'İlgili ürün ve hizmetler' },
        geoText: 'Tebriz\'de IoT ürün tasarımı — Bizdavar Group inovasyon ve endüstriyel ekosisteminin parçası.'
      },
      bizpet: {
        hero: { tag: 'Özel ürün · Isıtma pedi', title: 'BizPet — Isıtma pedi', desc: '2020 ana ürün — ev, araç ve evcil hayvan yatakları için Padideh ısıtma pedi; BizPet / Pet Biz' },
        nav: { about: 'Ürün hakkında', rd: 'Ar-Ge', pets: 'Evcil hayvan yatağı', origin: 'Kuluçka merkezi', contact: 'İletişim' },
        about: {
          title: 'Ürün hakkında',
          imageAlt: 'BizPet — Bizdavar ekibi tarafından tasarlanan gri ısıtma pedi',
          body: '<strong>BizPet</strong> (Biz Pet / Pet Biz), <strong>Tebriz Üniversitesi Teknoloji Kuluçka Merkezi</strong>\'nde tasarlanıp üretilen Padideh ısıtma pedinin ana ürünüdür — kışın ısınma ve lokal ağrı giderme için. BizSeat adlı araç koltuk minderi aynı peddir, ayrı bir ürün değildir.',
          body2: '<strong>Teknoloji Pardazan Tosee Khavarmiyaneh</strong> ve <strong>Imen Sahand Padideh</strong> teknoloji birimi ile geliştirildi. Ev ve araçta taşınabilir; Digikala\'da satışta (dkp-7694589).',
          specsTitle: 'Özellikler',
          specs: ['Padideh ısıtma pedi — BizPet / Biz Pet / Pet Biz', 'Kış ısıtması ve lokal ağrı giderme', 'Taşınabilir — ev ve araçta kullanım', '5–12 V çalışma gerilimi (maks. 1 A)', 'Isıtma elemanı çıkarıldıktan sonra yıkanabilir', 'Tebriz Üniversitesi Teknoloji Kuluçka Merkezi\'nde tasarım ve üretim', 'Imen Sahand Padideh ve Teknoloji Pardazan iş birliği'],
          ctaContact: 'Toptan teklif / iletişim',
          ctaCatalog: 'Ürün kataloğu'
        },
        gallery: { tanAlt: 'BizPet — krem renk ısıtma pedi ve güç konnektörü', elementAlt: 'BizPet — bağlantı noktalı ısıtma elemanı', posterAlt: 'Padideh ısıtma pedi tanıtım afişi' },
        rd: {
          eyebrow: 'Ar-Ge',
          title: 'Laboratuvar ısıtma elemanı testi',
          desc: 'Isıtma elemanı testi, prototip ve montaj görselleri — Tebriz Üniversitesi kuluçka merkezinde mühendislik sürecinin parçası.',
          tempHighAlt: 'Kızılötesi termometre ile ısıtma elemanı testi',
          tempHighCaption: 'Laboratuvar ısıtma elemanı testi',
          protoAlt: 'Yalıtım bloğu üzerinde ısıtma pedi prototipi',
          protoCaption: 'Prototip ve deneysel montaj',
          portfolioCta: 'Portfolyo — sergi ve üretim'
        },
        military: { vestAlt: 'Manken üzerinde ısıtma pedli taktik yelek', vestCaption: 'Isı kontrol üniteli taktik yelek örneği' },
        production: { imageAlt: 'BizPet ısıtma pedi üretim hattı — montaj ve test', caption: 'Atölyede ısıtma pedlerinin montajı ve testi.' },
        pets: {
          eyebrow: 'Evcil hayvan yatağı',
          title: 'Evcil hayvanlar için kızılötesi ısıtma pedi',
          desc: 'Aynı ısıtma pedi köpek ve kedi yatakları için de uygundur — kışın sıcak tutma, güvenli voltaj ve yıkanabilir kılıf.',
          imageAlt: 'BizPet — evcil hayvan yatağı için kızılötesi ısıtma pedi',
          specs: ['Evcil hayvan yatakları için uygun', 'Karbon nanomalzeme · uzun dalga kızılötesi · %95–99 verim', 'Güvenli 5–12 V · 5–8 W tüketim', 'Yumuşak, çıkarılabilir ve yıkanabilir kılıf', 'Hayvan vücut sıcaklığı aralığında sıcaklık kontrolü', 'Terapötik: kas spazmı ve artrit — yaşlı veya gebe hayvanlar için']
        },
        origin: {
          eyebrow: 'Tebriz Kuluçka · 2020',
          title: 'Tasarımdan üretime teknoloji kuluçka merkezinde',
          desc: 'BizPet, Bizdavar ekibinin donanım ürünlerinden biridir — Tebriz Üniversitesi inovasyon ekosisteminde iki yerel teknoloji ortağıyla.',
          parkTitle: 'Teknoloji kuluçka merkezi',
          parkDesc: 'Tebriz Üniversitesi — Padideh ısıtma pedi tasarım ve üretim ortamı.',
          partner1Title: 'Teknoloji Pardazan Tosee Khavarmiyaneh',
          partner1Desc: 'Geliştirme ve ticarileştirme ortağı.',
          partner2Title: 'Imen Sahand Padideh',
          partner2Desc: 'Tebriz bilim parkı teknoloji birimi — Padideh ısıtma pedi tasarım ve üretim ortağı.',
          specTitle: '5–12 V · maks. 1 A',
          specDesc: 'Ev ve araç için taşınabilir — eleman çıkarıldıktan sonra yıkanabilir.'
        },
        related: {
          title: 'İlgili ürün ve hizmetler',
          biztab: 'Temasız duvar termometresi',
          portfolioDesc: 'Bizdavar sergileri ve projeleri',
          catalog: 'Ürün kataloğu',
          catalogDesc: 'Bizdavar donanım ve üretim hatları',
          about: 'Bizdavar hakkında',
          aboutDesc: 'Bilim parkı, sergiler ve başarılar'
        },
        geoText: 'Tebriz Üniversitesi Teknoloji Kuluçka Merkezi\'nde tasarlanan ısıtma pedi — Bizdavar ekibinin BizPet ürünü.'
      },
      bizsanitizerV5: {
        hero: { tag: 'Özel ürün · Hijyen', title: 'BizClean V5 — Otomatik el dezenfektanı', desc: 'Ultrasonik sensörlü otomatik cihaz — küresel COVID-19 salgını döneminde üretildi, Bizdavar ekibi tarafından tasarlandı' },
        about: {
          title: 'Ürün hakkında',
          imageAlt: 'BizClean V5 — otomatik el dezenfektanı',
          body: '<strong>BizClean V5</strong>, <strong>Bizdavar ekibi</strong> tarafından mühendislik yapılmış otomatik el dezenfektanıdır — bina girişleri, ofisler, mağazalar ve sağlık tesisleri için.',
          body2: 'Bu ürün, koronavirüsün dünya genelinde yayıldığı dönemde geliştirildi; Aralık 2019 — Eylül 2022 arasında kurucunun kişisel yatırımı ve Bizdavar ekibinin üretimiyle yapıldı. 1399 büyüme merkezi sergisinde (ISNA, SNN, IRIB) ve RINOTEX 1400\'de «Imen Sahand Padideh» teknoloji parkı birimi aracılığıyla tanıtıldı; bugün Digikala\'da satışta.',
          specsTitle: 'Özellikler',
          specs: ['Ultrasonik sensörle otomatik çalışma', 'Temasız el dezenfektanı otomatik püskürtme', 'Daha iyi kapsama için 90° sensör ve nozul açısı', 'Giriş ve yoğun alanlar için duvar montajına uygun', 'Bizdavar ekibi tarafından tasarım ve mühendislik', 'Digikala\'dan sipariş edilebilir'],
          ctaDigikala: 'Digikala\'da görüntüle',
          ctaVideo: 'Kısa video — V1 prototip',
          ctaPress: 'SNN haberi',
          ctaPressIsna: 'ISNA haberi',
          ctaPressIrib: 'IRIB haberi',
          ctaContact: 'Toptan teklif / iletişim'
        },
        video: {
          eyebrow: 'Dönem ve medya',
          title: 'Kısa video — BizClean V1 prototip',
          desc: 'Bu YouTube videosu BizClean hattının V1 prototipini gösterir — Digikala\'daki ticari sürüm V5\'tir.',
          quote: 'Temasız el dezenfektanı erken prototipi — bugün Digikala\'da satılan V5 sürümünden önce.',
          source: 'YouTube — BizClean V1 prototip',
          note: 'Video V1 prototipine aittir; mevcut online satış ürünü BizClean V5\'tir.'
        },
        press: {
          eyebrow: 'Medya ve sergi',
          title: 'Tebriz Üniversitesi büyüme merkezi — COVID-19 sergisi',
          desc: 'Bizdavar ekibi tarafından mühendislik yapılan cihazlar — BizClean V5 dahil — Doğu Azerbaycan valisinin katılımıyla sergilendi. IRIB video raporu ile ISNA ve SNN görselleri bu ürünleri ve kurucunun katılımını gösterir.',
          videoTitle: 'IRIB Haber Ajansı video raporu',
          videoDesc: 'Sergi medya kapsamı — Tebriz Üniversitesi büyüme merkezinde valinin katılımıyla Bizdavar cihazlarının tanıtımı.',
          quoteIrib: 'Tebriz Üniversitesi büyüme merkezinin COVID-19\'a karşı başarıları sergisi açıldı — valinin katılımıyla bilgi temelli ürünlerin video raporu.',
          sourceIrib: 'IRIB Haber Ajansı (İran Radyo Televizyonu)',
          ctaIrib: 'IRIB haberi',
          quoteIsna: 'ISNA — Tebriz Üniversitesi\'nin COVID-19\'a karşı araştırma ve teknoloji başarıları; dezenfektan cihazları dahil bilgi temelli ürünler.',
          sourceIsna: 'ISNA Haber Ajansı',
          ctaIsna: 'ISNA haberi',
          quoteSnn: 'Sergide 10 şirketten 21 bilgi temelli ürün; vali kitlesel üretim desteği sözü verdi.',
          sourceSnn: 'SNN (İran Öğrenci Haber Ajansı)',
          ctaSnn: 'SNN haberi',
          mediaNote: 'IRIB, ISNA ve SNN\'de yayınlanan video ve görseller Bizdavar ekibinin ürettiği cihazlara aittir — kurucu sergide yer almıştır.'
        },
        heritage: {
          eyebrow: 'Teknoloji parkı ve RINOTEX',
          title: 'Imen Sahand Padideh — Tebriz Üniversitesi teknoloji parkı birimi',
          desc: '«Imen Sahand Padideh», Tebriz Üniversitesi Bilim ve Teknoloji Parkı\'nda yerleşik bir teknoloji birimiydi. 9. RINOTEX\'te (Kasım 2021) park birimleri listesinde «akıllı el dezenfektan cihazı tasarım ve üretimi» bilgi temelli ürününü sundu. Aralık 2019 — Eylül 2022 arasında kurucunun kişisel yatırımı vardı; tüm tasarım ve üretim Bizdavar ekibi tarafından yapıldı.',
          period1399: { period: 'Ordibehesht 1399', text: 'Tebriz Üniversitesi büyüme merkezi sergisi — ISNA, SNN ve IRIB kapsamı.' },
          period1400: { period: 'Aban 1400', text: 'RINOTEX 1400 — «Imen Sahand Padideh» birimi aracılığıyla ürün tanıtımı; aynı dönemde Bizdavar (ICT zonu, 12 m² stant).' },
          note: '«Imen Sahand Padideh» adıyla sınırlı kamu kaynağı vardır; ürün ve üretim ISNA, SNN, IRIB, RINOTEX ve teknoloji parkı bağlantılarıyla doğrulanabilir.',
          linkRinotex: 'RINOTEX 1400',
          linkTechpark: 'Tebriz Üniversitesi teknoloji parkı',
          linkExhibitions: 'Hakkımızda — sergiler'
        },
        store: {
          eyebrow: 'Online satış',
          title: 'Digikala\'dan satın al',
          desc: 'V5 ürünü Digikala\'da dkp-3730222 ürün koduyla listelenmiştir',
          quote: 'Bizdavar otomatik el dezenfektan cihazı — ultrasonik sensör ve otomatik dezenfektan püskürtme.',
          source: 'Digikala'
        },
        related: { title: 'İlgili Bizdavar ürünleri' },
        geoText: 'İran\'da mühendislik hijyen ürünü — Bizdavar ekibi tasarımı, Digikala üzerinden satış.'
      },
      bizseat: {
        hero: {
          tag: 'Aynı ürün · BizPet',
          title: 'BizSeat, BizPet ısı pedidir',
          desc: 'Araç koltuğu satış adı — asıl ürün ayrı bir hat değil, 1399 Padideh ısı pedi BizPet’tir'
        },
        about: {
          title: 'Bir ürün, iki satış adı',
          imageAlt: 'BizSeat — araç koltuğunda aynı BizPet ısı pedi',
          body: '<strong>BizSeat</strong> ayrı bir ürün değildir. Aynı <strong>BizPet ısı pedidir</strong> — <strong>1399</strong>’da <strong>Tebriz Üniversitesi teknoloji kuluçkasında</strong> tasarlandı ve araç koltuğu bel desteği olarak da satıldı.',
          body2: 'Geliştirme <strong>Teknoloji Pardazan Tosee Khavarmianeh</strong> ve <strong>Imen Sahand Padideh</strong> ile yapıldı. Ana sayfa <a href="/pages/bizpet">BizPet</a>’tir; Digikala aynı SKU’dur.',
          specsTitle: 'Özellikler',
          specs: [
            'Ergonomik araç koltuğu bel desteği',
            '1399 icat, tasarım ve üretim',
            'Tebriz Üniversitesi Bilim ve Teknoloji Parkı',
            'Teknoloji Pardazan Tosee Khavarmianeh iş birliği',
            'Imen Sahand Padideh teknoloji birimi iş birliği',
            'Digikala’dan sipariş edilebilir'
          ],
          ctaDigikala: 'Digikala’da görüntüle',
          ctaBizpet: 'Ana sayfa: BizPet',
          ctaContact: 'Toptan teklif / iletişim'
        },
        origin: {
          eyebrow: 'Tebriz teknoloji parkı · 1399',
          title: 'İcattan üretime — bilim ve teknoloji parkı',
          desc: 'BizSeat, Bizdavar ekibinin icat ettiği donanım ürünlerinden biridir — Tebriz Üniversitesi inovasyon ekosisteminde, iki yerel teknoloji ortağıyla tasarım ve üretim.',
          parkTitle: 'Bilim ve Teknoloji Parkı',
          parkDesc: 'Tebriz Üniversitesi — 1399’da icat, tasarım ve üretim ortamı.',
          partner1Title: 'Teknoloji Pardazan Tosee Khavarmianeh',
          partner1Desc: 'Geliştirme ve ticarileştirme ortağı.',
          partner2Title: 'Imen Sahand Padideh',
          partner2Desc: 'Tebriz teknoloji parkı birimi — tasarım ve üretim ortağı.',
          storeTitle: 'Digikala’da satış',
          storeDesc: 'Ürün kodu dkp-7694589 — araç koltuğu bel desteği, model bizdavar.'
        },
        related: {
          title: 'İlgili ürün ve hizmetler',
          bizclean: 'Otomatik el dezenfektanı',
          biztab: 'Temasız duvar termometresi',
          catalog: 'Ürün kataloğu',
          catalogDesc: 'Bizdavar donanımı ve üretim hatları',
          about: 'Bizdavar hakkında',
          aboutDesc: 'Teknoloji parkı, fuarlar ve başarılar'
        },
        geoText: 'Tebriz Üniversitesi Bilim ve Teknoloji Parkı’nda icat edilen otomotiv ürünü — Bizdavar tasarımı, Digikala satışı.'
      },
      bizpet: {
        hero: {
          tag: 'Özel ürün · Isı pedi',
          title: 'BizPet — Bizdavar ısı pedi',
          desc: 'Tebriz Üniversitesi teknoloji kuluçkasında tasarım ve üretim — BizPet / Pet Biz adlarıyla Bizdavar’ın sahip olduğu ürün'
        },
        nav: {
          about: 'Ürün hakkında',
          rd: 'Ar-Ge',
          pets: 'Evcil hayvan yatağı',
          origin: 'Kuluçka merkezi',
          gallery: 'Fotoğraf galerisi',
          contact: 'İletişim'
        },
        about: {
          title: 'Ürün hakkında',
          imageAlt: 'BizPet — Bizdavar ekibinin tasarladığı gri ısı pedi',
          body: '<strong>BizPet</strong> (Biz Pet / Pet Biz), Padideh ısı pedidir — soğuk mevsimde ısınma ve bölgesel ağrı rahatlaması için <strong>Tebriz Üniversitesi Teknoloji Kuluçka Merkezi</strong>’nde tasarlanıp üretildi.',
          body2: 'Geliştirme, <strong>Teknoloji Pardazan Tosee Khavarmianeh</strong> ve teknoloji birimi <strong>Imen Sahand Padideh</strong> ile iş birliğinde yapıldı. Ürün taşınabilir; evde veya araçta kullanılır.',
          specsTitle: 'Özellikler',
          specs: [
            'Padideh ısı pedi — BizPet / Biz Pet / Pet Biz',
            'Soğuk mevsim ısınması ve bölgesel ağrı rahatlaması',
            'Taşınabilir — ev ve araç kullanımı',
            'Çalışma voltajı 5–12 V (maks. 1 A)',
            'Isıtma elemanı çıkarıldıktan sonra yıkanabilir',
            'Tebriz Üniversitesi Teknoloji Kuluçka Merkezi’nde tasarım ve üretim',
            'Imen Sahand Padideh ve Teknoloji Pardazan Tosee Khavarmianeh iş birliği'
          ],
          ctaContact: 'Toptan teklif / iletişim',
          ctaCatalog: 'Ürün kataloğu'
        },
        gallery: {
          tanAlt: 'BizPet — krem ısı pedi, güç konnektörüyle',
          elementAlt: 'BizPet — temas noktalı ısıtma elemanı',
          posterAlt: 'Padideh ısı pedi tanıtım afişi'
        },
        rd: {
          eyebrow: 'Ar-Ge',
          title: 'Laboratuvarda ısıtma elemanı testleri',
          desc: 'Termal test, prototip ve montaj fotoğrafları — Tebriz Üniversitesi kuluçkasındaki mühendislik süreci.',
          tempHighAlt: 'Kızılötesi termometreyle ısıtma elemanı testi',
          tempHighCaption: 'Laboratuvarda ısıtma elemanı testi',
          tempAlt: 'Ar-Ge testinde yüzey sıcaklığı ölçümü',
          tempCaption: 'Ar-Ge testinde yüzey sıcaklığı',
          elementAlt: 'Köşe temaslı dikdörtgen ısıtma elemanı',
          elementCaption: 'Temas noktalı ısıtma elemanı',
          protoAlt: 'Yalıtım bloğu üzerinde ısı pedi prototipi',
          protoCaption: 'Prototip ve deneysel montaj'
        },
        military: {
          eyebrow: 'Ar-Ge',
          title: 'Askeri giyside ısı pedi',
          desc: 'Entegre ısıtma elemanı ve kontrol ünitesi olan taktik yelek prototipi — ısı pedinin askeri giysi katmanlarına uygulanması için Ar-Ge.',
          vestAlt: 'Isı pedli askeri yelek prototipi, manken üzerinde',
          vestCaption: 'Kontrol ünitesli taktik yelek prototipi',
          liningAlt: 'Yelek iç astarı ve ısı pedi kablolaması',
          liningCaption: 'İç astar — dikilmiş ısıtma elemanı',
          outdoorAlt: 'Açık havada manken üzerinde ısıtmalı askeri yelek',
          outdoorCaption: 'Prototipin açık hava gösterimi'
        },
        dryer: {
          eyebrow: 'Ar-Ge',
          title: 'Meyve kurutma sepetinde ısı pedi',
          desc: 'Altıgen ısıtma filesi ve besleme kablosu olan ahşap meyve kurutma sepeti tasarımı — ısı pedinin kurutma sepetlerine uygulanması için Ar-Ge.',
          imageAlt: 'Isıtma filesi olan meyve kurutma sepeti prototipi',
          caption: 'Kurutma sepetinin 3D görseli — gözenekli ısıtma elemanı.'
        },
        pets: {
          eyebrow: 'Evcil hayvan yatağı',
          title: 'Evcil hayvanlar için kızılötesi ısı pedi',
          desc: 'Aynı ısı pedi köpek ve kedi yatakları için de uygundur — soğuk mevsimde güvenli voltaj ve yıkanabilir kılıfla ısıtma.',
          imageAlt: 'BizPet — evcil hayvan yatağı için kızılötesi ısı pedi',
          specs: [
            'Evcil hayvan yatakları için uygun',
            'Karbon nanomalzeme · uzak kızılötesi · %95–99 verim',
            'Güvenli 5–12 V · 5–8 W tüketim',
            'Yumuşak, çıkarılabilir ve yıkanabilir kılıf',
            'Sıcaklık hayvan vücut sıcaklığı aralığında kontrol edilir',
            'Tedavi: kas spazmı ve artrit — yaşlı veya gebe hayvanlar için'
          ]
        },
        expo: {
          eyebrow: 'Fuar',
          title: 'Imen Sahand Padideh standı',
          desc: 'Fuar standında ısı pedleri — çok düşük tüketim ve çevre uyumu vurgusuyla.',
          imageAlt: 'Imen Sahand Padideh fuar standı, ısı pedleriyle',
          caption: 'Imen Sahand Padideh standı — düşük tüketimli ısı pedi tanıtımı.'
        },
        origin: {
          eyebrow: 'Tebriz kuluçka merkezi · 1399',
          title: 'Tasarımdan üretime — teknoloji kuluçkası',
          desc: 'BizPet, Bizdavar ekibinin donanım ürünlerinden biridir — Padideh ısı pedi, iki yerel teknoloji ortağıyla.',
          parkTitle: 'Teknoloji Kuluçka Merkezi',
          parkDesc: 'Tebriz Üniversitesi — Padideh ısı pedinin tasarım ve üretim yeri.',
          partner1Title: 'Teknoloji Pardazan Tosee Khavarmianeh',
          partner1Desc: 'Geliştirme ve ticarileştirme ortağı.',
          partner2Title: 'Imen Sahand Padideh',
          partner2Desc: 'Tebriz teknoloji parkı birimi — Padideh ısı pedi tasarım ve üretim ortağı.',
          specTitle: '5–12 V · maks. 1 A',
          specDesc: 'Ev ve araç için taşınabilir — ısıtma elemanı çıkarıldıktan sonra yıkanabilir.'
        },
        production: {
          eyebrow: 'Üretim hattı',
          title: 'Isı pedi montaj ve test',
          desc: 'Montaj ve kalite kontrol istasyonu — kumaş pedler, güç ünitesi ve ürün paketleme.',
          imageAlt: 'BizPet ısı pedi üretim hattı — tezgâhta montaj ve test',
          caption: 'Atölyede ısı pedlerinin montaj ve testi.'
        },
        related: {
          title: 'İlgili ürün ve hizmetler',
          bizseat: 'Araç koltuğu bel desteği',
          biztab: 'Temasız duvar termometresi',
          catalog: 'Ürün kataloğu',
          catalogDesc: 'Bizdavar donanımı ve üretim hatları',
          about: 'Bizdavar hakkında',
          aboutDesc: 'Teknoloji parkı, fuarlar ve başarılar'
        },
        geoText: 'Tebriz Üniversitesi teknoloji kuluçkasında tasarlanan ısı pedi — Bizdavar’ın BizPet ürünü.'
      },
      bizswap: {
        hero: {
          tag: 'Web3 ürün · DeFi',
          title: 'BizSwap — Token ön satış & swap',
          desc: 'Ön satış, sitede doğrudan swap ve cüzdan bağlantısı için front-end ve on-chain modül — RWA ve varlık destekli token projeleri için.',
          chains: 'BNB Chain · BEP-20 · RWA · Presale',
          trust: 'Web3 geliştirme · Özel kod · Bizdavar desteği',
          ctaContact: 'Benzer modül siparişi',
          ctaPortfolio: 'Diğer portfolyo'
        },
        stats: {
          capabilities: '6',
          capabilitiesLabel: 'UI özelliği',
          flow: '4',
          flowLabel: 'Swap adımı',
          chain: 'BEP-20',
          chainLabel: 'Desteklenen ağ',
          module: 'Web3',
          moduleLabel: 'Modül türü'
        },
        about: {
          title: 'Modül hakkında',
          imageAlt: 'BizSwap token swap arayüzü — Bizdavar Web3 modülü',
          body: '<strong>BizSwap</strong>, <strong>Bizdavar ekibi</strong> tarafından geliştirilen token ön satış ve swap modülüdür — kullanıcı projeden ayrılmadan stablecoin\'i token\'a çevirir.',
          body2: 'Web3 cüzdan UI, token seçici, hızlı yüzde butonları, slippage/minimum received hesabı, on-chain işlem durumu ve BEP-20 akıllı sözleşme entegrasyonu içerir.',
          specsTitle: 'Teknik özellikler',
          specs: ['Cüzdan bağlantısı (WalletConnect / injected)', 'Sitede stablecoin ↔ proje token swap', 'Anlık kur ile Presale widget', '%10 · %25 · %50 · %75 · %100 hızlı seçim', 'Slippage ve Minimum Received', 'From/To token modali', 'İşlem işleniyor / hata geri bildirimi', 'BNB Chain (BEP-20)', 'Explorer\'da sözleşme doğrulama', 'onlyOwner: kur değişimi ve Claim'],
          ctaContact: 'Benzer modül siparişi',
          ctaPortfolio: 'Diğer portfolyo'
        },
        capabilities: { eyebrow: 'Sitede neler yapılır', title: 'Kullanıcı sitede ne yapar?', desc: 'Tüm işlemler web arayüzünde — harici DEX\'e gerek kalmadan ön satış.', items: [{ icon: 'link', title: 'Connect Wallet', desc: 'Trust Wallet ve uyumlu Web3 cüzdanlar — From/To bakiye.' }, { icon: 'swap', title: 'DEX Swap', desc: 'USDT\'den proje token\'ına anlık kur ile swap.' }, { icon: 'target', title: 'Presale', desc: 'Ön satış aşamasında doğrudan landing\'den satın alma.' }, { icon: 'chart-bar', title: 'Slippage', desc: 'Slippage ve minimum alınacak miktar gösterimi.' }, { icon: 'coin', title: 'Token seçici', desc: 'Kaynak ve hedef token listesinden seçim.' }, { icon: 'hourglass', title: 'İşlem durumu', desc: 'Processing mesajı ve başarı/hata geri bildirimi.' }] },
        flow: { eyebrow: 'Akış', title: 'Cüzdandan token\'a', steps: [{ title: 'Cüzdan bağla', desc: 'Connect Wallet ve BEP-20 ağ onayı.' }, { title: 'Tutar seç', desc: 'USDT veya bakiye yüzdesi — kur hesaplanır.' }, { title: 'On-chain onay', desc: 'İşlem cüzdanda imzalanır.' }, { title: 'Token al', desc: 'Blok onayı sonrası swap tamamlanır.' }] },
        admin: { title: 'Admin & akıllı sözleşme', desc: 'onlyOwner fonksiyonları — admin UI ile entegre.', items: ['Change Rate (onlyOwner)', 'Claim Tokens (onlyOwner)', 'Site-admin kur senkronizasyonu', 'Sabit sözleşme adresi — explorer şeffaflığı'] },
        useCasesTitle: 'Hangi projeler için uygun?',
        useCases: ['RWA tokenları (altın, gümüş)', 'ICO / IDO / Presale', 'BEP-20 landing + whitepaper', 'Harici DEX öncesi site içi swap'],
        cta: { title: 'Token ön satış veya swap mı istiyorsunuz?', desc: 'Bizdavar ekibi BizSwap\'ı projenize uyarlar.', btn: 'Web3 danışmanlığı iste' },
        related: {
          title: 'İlgili ürün ve hizmetler',
          items: [
            { href: '/pages/fxguard', icon: 'chat-wa', title: 'WhatsApp CRM', desc: 'FXGuard · $49/ay’dan' },
            { href: '/pages/fast', icon: 'bolt', title: 'Fast Studio', desc: 'Web tasarım' },
            { href: '/pages/portfolio', icon: 'briefcase', title: 'Portfolyo', desc: 'Fintech ve Web3' },
            { href: '/pages/services', icon: 'list', title: 'Hizmetler', desc: 'Web ve fintech' }
          ]
        },
        geoText: 'DeFi ve Web3 modül geliştirme — Bizdavar Group fintech hizmetlerinin parçası.'
      },
      fxguard: {
        hero: {
          tag: 'Exchange · remittance · finance',
          title: 'Quote the rate on WhatsApp. Keep the customer book.',
          desc: 'Full copy loads from i18n/fxguard-i18n.js on this page only.',
          regions: '',
          trust: 'From $49/mo · guided demo · 7-day money-back',
          ctaDemo: 'See the panel',
          ctaPricing: 'Prices',
          ctaContact: 'Buy on WhatsApp',
          ctaStore: 'fxguard.io'
        },
        stats: { businesses: 'Modül+', regions: 'Kullanıcı rolü', regionsVal: 'Owner → Agent', uptime: 'Uptime hedefi', setup: 'Destek dili', setupSuffix: '' },
        suite: {
          eyebrow: 'FXGuard suite',
          title: 'Dijital ürünlerimiz',
          desc: 'Mağaza fxguard.io — WhatsApp CRM canlı; Accounting yolda.',
          products: [
            { badge: 'Şimdi mevcut', title: 'WhatsApp CRM', desc: 'Ortak inbox, müşteriler, ticket, şubeler ve FX araçları. Cloud $49/ay’dan.', cta: 'Bu sayfa', ctaSecondary: 'Tüm ürünler', secondaryHref: 'products', featured: true, href: '#pricing' },
            { badge: 'Yakında', title: 'Accounting', desc: 'Aynı exchange ve KOBİ ekipleri için finans akışları. Bekleme listesine katılın.', cta: 'WhatsApp ile bildir', ctaSecondary: 'Daha fazla', secondaryHref: 'fxguard-accounting', href: 'https://wa.me/905010676486?text=Hello%2C%20FXGuard%20Accounting%20waitlist' }
          ]
        },
        problem: {
          eyebrow: 'Sorun',
          title: 'Tanıdık mı?',
          desc: 'Büyüyen ekipler kişisel WhatsApp’ı aşar — mesaj kaybolur, hesap verebilirlik biter.',
          items: [
            { icon: 'mobile', title: 'Birden fazla telefon, tek numara', desc: 'Paylaşılan giriş veya kişisel telefonlar — mesajlar kaybolur.' },
            { icon: 'list', title: 'Müşteri geçmişi yok', desc: 'Her sohbet sıfırdan; etiket ve ortak bağlam yok.' },
            { icon: 'clock', title: 'Hesap verebilirlik yok', desc: 'Ticket/task yok; kim neyi kapattı bilinmiyor.' },
            { icon: 'shield', title: 'Belirsiz güvenlik', desc: '2FA yok, şube/rol ayrımı yok.' }
          ]
        },
        solution: {
          title: 'FXGuard hepsini çözer',
          desc: 'WhatsApp, müşteriler, ticket, görev, kullanıcılar, şubeler ve FX araçları tek panelde — rol tabanlı erişim ve 2FA ile. Canlı deneyin.',
          cta: 'Ücretsiz demoyu aç',
          href: 'https://app.fxguard.io/'
        },
        why: {
          eyebrow: 'Neden alırlar',
          title: 'Ekipler neden FXGuard alır',
          desc: 'Daha fazla satış ve her müşteri sohbetini korumak için — sadece bir messenger değil.',
          items: [
            { num: '01', title: 'Sohbette para kaybını durdurun', desc: 'Okunmamış mesaj = kayıp müşteri. Ortak inbox hiçbir şeyi kaçırmaz.' },
            { num: '02', title: 'Tam geçmişle satın', desc: 'Etiket, not ve geçmiş sohbetler müşteride kalır.' },
            { num: '03', title: 'Kim ne görür kontrol edin', desc: 'Roller, şubeler ve 2FA ile sahip kontrolü.' },
            { num: '04', title: 'Bir kez alın, istediğiniz gibi kurun', desc: 'Cloud $49/ay’dan, kendi sunucunuzda lisans veya Managed.' }
          ]
        },
        demo: {
          eyebrow: 'Canlı demo',
          title: 'Gerçek ürünü deneyin',
          desc: 'Canlı FXGuard paneli — maket değil.',
          liveBadge: 'LIVE DEMO',
          userLabel: 'Kullanıcı',
          passLabel: 'Şifre',
          user: 'demo',
          pass: '123456',
          note: 'Genel demo ortamı — değişiklikler kaydedilmez.',
          cta: 'Canlı demoyu aç',
          shots: [
            { title: 'Dashboard', desc: 'Canlı özet ve hızlı aksiyonlar' },
            { title: 'Users & Roles', desc: 'Owner → Agent · 2FA' },
            { title: 'Mobile', desc: 'Mobil dashboard ve sohbetler' }
          ]
        },
        steps: {
          eyebrow: '3 adımda satın al',
          title: 'Demo, paket, satın alma',
          desc: 'Önce gerçek ürünü görün, sonra kurulum modelini seçin.',
          items: [
            { num: '01', icon: 'bolt', title: 'Canlı demoyu deneyin', desc: 'app.fxguard.io — demo / 123456. Gerçek ürün.' },
            { num: '02', icon: 'target', title: 'Paketi seçin', desc: 'Cloud, Self-hosted License veya Managed Dedicated.' },
            { num: '03', icon: 'whatsapp', title: 'Satın alın / teklif alın', desc: 'WhatsApp veya fxguard.io formu — iş gününde genelde 24 saat içinde yanıt.' }
          ],
          cta: 'Canlı demoyu aç'
        },
        features: {
          eyebrow: 'Modüller',
          title: 'Hepsi tek panelde',
          desc: 'Exchange, finans, satış ve destek ekipleri için gerçek modüller.',
          items: [
            { icon: 'inbox', title: 'Birleşik WhatsApp gelen kutusu', desc: 'Tek numara, ortak inbox, yönlendirme.' },
            { icon: 'users', title: 'Müşteriler & CRM', desc: 'Profil, etiket, konuşma geçmişi.' },
            { icon: 'list', title: 'Destek ticket’ları', desc: 'Açıktan çözüme net sahiplik.' },
            { icon: 'bolt', title: 'Görev & iş akışı', desc: 'Atama ve uçtan uca takip.' },
            { icon: 'shield', title: 'Rol, şube & 2FA', desc: 'Owner→Agent, şubeler, Authenticator, audit log.' },
            { icon: 'chart-line', title: 'FX araçları', desc: 'Kur, grafik ve exchange servis araçları.' }
          ]
        },
        audiences: {
          eyebrow: 'Kimler için',
          title: 'Exchange, finans ve destek için',
          desc: 'Sadece sohbet değil — gerçek hesap verebilirlik isteyen ekipler.',
          items: [
            { icon: 'chart-line', title: 'Exchange & FX', region: 'Türkiye · BAE · Avrupa · İran', desc: 'Çok şubeli operasyon + ekip inbox.', tag: 'Multi-branch' },
            { icon: 'briefcase', title: 'B2B satış & destek', region: 'Tüm bölgeler', desc: 'Geçmiş, ticket ve görevlerle kapanış.', tag: 'Sales ops' },
            { icon: 'building', title: 'Holding / çok şube', region: 'Türkiye · Dubai', desc: 'Rol ve şube denetimi.', tag: 'Roles' },
            { icon: 'health', title: 'Hizmet & klinik', region: 'Türkiye · Avrupa', desc: 'Talep takibi, kayıp mesaj yok.', tag: 'Support' }
          ]
        },
        pricing: {
          eyebrow: 'Paketler',
          title: 'Üç çalışma modeli — aynı çekirdek',
          desc: 'Fark kim barındırır ve işletir. Tüm paketlerde aynı ana modüller.',
          note: 'Demo ücretsiz. Cloud $49/ay veya $490/yıl.',
          plans: [
            { id: 'cloud', name: 'Hosted Cloud', price: '$49', period: '/ay', badge: 'En popüler', desc: 'FXGuard’ı bizim altyapımızda çalıştırırız.', features: ['Dakikalar içinde canlı', 'Otomatik güncelleme', 'Günlük yedek', 'Rol & 2FA', '$490/yıl (2 ay tasarruf)'], cta: 'Cloud satın al', href: 'https://fxguard.io/', featured: true },
            { id: 'license', name: 'Self-hosted License', price: 'Tek sefer', period: ' · teklif', desc: 'Tam sistemi alın, kendi sunucunuzda çalıştırın.', features: ['Tek seferlik sahiplik', 'Kurulum paketi', 'Veri sizde', 'Opsiyonel güncelleme sözleşmesi', 'Onboarding'], cta: 'Lisans teklifi', href: 'https://fxguard.io/' },
            { id: 'managed', name: 'Managed Dedicated', price: 'Özel', period: ' · teklif', desc: 'Biz kurar, barındırır ve işletiriz — SLA ile.', features: ['Dedicated instance', 'Bakım & monitoring', 'Özel SLA', 'Hesap yöneticisi', 'Eğitim'], cta: 'Managed teklifi', href: 'https://fxguard.io/' }
          ]
        },
        faq: {
          eyebrow: 'SSS',
          title: 'Sık sorulanlar',
          items: [
            { q: 'Cloud, lisans ve Managed farkı?', a: 'Cloud: biz barındırırız. Lisans: siz kendi sunucunuzda çalıştırırsınız. Managed: dedicated instance’ı biz işletiriz. Üçünde de aynı çekirdek modüller.' },
            { q: 'Satın almadan deneyebilir miyim?', a: 'Evet — app.fxguard.io (demo / 123456) gerçek üründür.' },
            { q: 'Fiyat ne kadar başlar?', a: 'Cloud $49/ay veya $490/yıl. Lisans ve Managed teklifle.' },
            { q: 'Veri yedekleniyor mu?', a: 'Cloud ve Managed’de günlük yedek hizmetin parçasıdır. Self-hosted’ta yedek sizin altyapınızda — rehberlik ve destek sözleşmesi mevcut.' },
            { q: 'Güvenlik nasıl?', a: 'Google Authenticator 2FA, rol tabanlı erişim (Owner→Agent) ve tam aktivite logları.' },
            { q: 'Çok şube destekleniyor mu?', a: 'Evet — şube, departman, Owner→Agent roller, 2FA ve audit log.' },
            { q: 'Hangi diller?', a: 'Site ve destek: Türkçe, Farsça, İngilizce, Arapça, Rusça.' },
            { q: 'Bizdavar ile ilişkisi?', a: 'FXGuard, Bizdavar ekosistem ürünüdür; satış fxguard.io üzerinden, Bizdavar katalogunda da yer alır.' }
          ]
        },
        support: {
          eyebrow: 'Destek',
          title: 'Kurulumda bitmeyen destek',
          desc: 'Yedek, bakım, güvenlik ve çok dilli destek — işlettiğimiz her planda.',
          items: [
            { icon: 'monitor', title: '7/24 izleme & bakım', desc: 'Cloud ve Managed proaktif izleme ve yama ile.' },
            { icon: 'shield', title: 'Günlük yedek', desc: 'Barındırılan planlarda otomatik günlük yedek.' },
            { icon: 'lock', title: 'Güvenlik & 2FA', desc: 'Authenticator, roller ve aktivite logları.' },
            { icon: 'globe', title: 'Çok dilli destek', desc: 'TR, FA, EN, AR, RU onboarding ve destek.' },
            { icon: 'building', title: 'Çok şube rollout', desc: 'Şube, departman ve rol yapısına yardım.' },
            { icon: 'bolt', title: '%99.9 uptime hedefi', desc: 'Cloud/Managed yüksek erişilebilirlik; SLA talep üzerine.' },
            { icon: 'document', title: 'GDPR odaklı veri', desc: 'Veri minimizasyonu ve erişim kontrolü.' },
            { icon: 'users', title: 'Onboarding & migrasyon', desc: 'Kurulum, veri aktarımı ve ekip eğitimi.' }
          ]
        },
        updates: {
          eyebrow: 'Güncellemeler',
          title: 'FXGuard’da neler yeni?',
          desc: 'Cloud ve Managed otomatik güncellenir; Self-hosted güncelleme sözleşmesiyle.',
          items: [
            { date: 'Jul 2026', tag: 'Latest', title: 'Genel canlı demo & net paketler', desc: 'app.fxguard.io demosu ve Cloud / License / Managed paketleri.', bullets: ['Paylaşılan demo hesabı', 'Lisans ve managed satış yolu', 'Gerçek ekran görüntüleri'] },
            { date: 'May 2026', tag: 'Security', title: 'Daha güçlü hesap güvenliği', desc: '2FA, profil sertleştirme ve panel markalama.', bullets: ['2FA kurulumu', 'Owner→Agent roller', 'Giriş görünümü ayarı'] },
            { date: 'Mar 2026', tag: 'Product', title: 'Çok şube & FX araçları', desc: 'Şube/departman ve FX oran araçları.', bullets: ['Şube yapısı', 'Online durum', 'FX oranları ve servisler'] },
            { date: 'Jan 2026', tag: 'Core', title: 'Inbox, ticket, görev & mobil', desc: 'Çekirdek CRM döngüsü masaüstü ve mobilde.', bullets: ['Takım WhatsApp inbox', 'Müşteri/ticket/görev', 'Mobil dashboard'] }
          ]
        },
        about: {
          title: 'FXGuard — Bizdavar ekosistem ürünü',
          body: '<strong>FXGuard WhatsApp CRM</strong> ekip inbox, müşteri CRM, ticket, görev, şube ve FX araçlarını tek panelde birleştirir. Mağaza: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · Demo: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a>.',
          ctaContact: 'fxguard.io’ya git',
          ctaPortfolio: 'Accounting ve ilgili ürünler'
        },
        cta: {
          title: 'FXGuard satın almaya hazır mısınız?',
          desc: 'Önce ücretsiz demoyu görün; sonra Cloud $49/ay, lisans veya Managed seçin.',
          btnStart: 'Ücretsiz demo',
          btnPricing: 'Paketleri gör',
          btnStore: 'fxguard.io'
        },
        related: { title: 'İlgili ürün ve hizmetler' },
        geoText: 'FXGuard WhatsApp CRM — Türkiye, BAE, Avrupa, İran · fxguard.io · Bizdavar ekosistemi.'
      },

      fxguardAccounting: {
        hero: {
          tag: 'FXGuard · Accounting',
          badge: 'Yakında',
          title: 'Accounting — döviz ve KOBİ ekipleri için finans',
          desc: 'Bugün WhatsApp CRM çalıştıran aynı ekipler için finansal akışlar. <strong>FXGuard</strong> paketinin parçası — Bizdavar geliştirmesi; bekleme listesi açık.',
          ctaWaitlist: 'WhatsApp ile haber ver',
          ctaCrm: 'WhatsApp CRM demosu',
          ctaStore: 'fxguard.io',
          trust: 'Yakında · CRM yanında · Bizdavar ekosistemi'
        },
        audience: {
          eyebrow: 'Kimler için',
          title: 'Aynı FXGuard ekipleri için',
          desc: 'WhatsApp operasyonunun yanında odaklı muhasebe isteyen döviz masaları, finans ekipleri ve KOBİ’ler.',
          items: [
            { icon: 'chart-line', title: 'Döviz ve havale masaları', desc: 'Finansal işlemleri ekip gelen kutusu yanında kaydedin ve takip edin.' },
            { icon: 'briefcase', title: 'KOBİ finans ekipleri', desc: 'Büyüyen işletmeler için net muhasebe akışları.' },
            { icon: 'building', title: 'Çok şubeli holdingler', desc: 'Şube muhasebesi için ayrı rol ve erişim.' },
            { icon: 'users', title: 'WhatsApp CRM ile birlikte', desc: 'Aynı FXGuard paketi — satış, destek ve finans bir arada.' }
          ]
        },
        features: {
          eyebrow: 'Yetenekler (yol haritası)',
          title: 'Neleri kapsayacak?',
          desc: 'Accounting, döviz ve destek ekiplerinin operasyon döngüsünü tamamlamak için tasarlanır — genel, ayrı bir defter değil.',
          items: [
            { icon: 'document', title: 'Finansal akışlar', desc: 'Döviz ve KOBİ ekipleri için finansal işlem kaydı ve takibi.' },
            { icon: 'shield', title: 'Rol tabanlı erişim', desc: 'Muhasebe personeli erişimini net rollerle kontrol edin.' },
            { icon: 'inbox', title: 'WhatsApp CRM ile uyumlu', desc: 'Satış ve destek için WhatsApp CRM’in yanında.' },
            { icon: 'building', title: 'Özel kurulum', desc: 'Holding ve finans işletmeleri için kurulum ve özelleştirme.' },
            { icon: 'lock', title: 'Kurumsal güvenlik', desc: '2FA ve FXGuard paket rolleriyle uyumlu.' },
            { icon: 'globe', title: 'Çok dilli', desc: 'Farsça, Türkçe, İngilizce, Arapça ve Rusça destek.' }
          ]
        },
        steps: {
          eyebrow: 'Bekleme listesi',
          title: 'Nasıl haberdar olunur',
          items: [
            { num: '01', title: 'CRM’i bugün görün', desc: 'Canlı WhatsApp CRM demosu app.fxguard.io’da hazır.' },
            { num: '02', title: 'Bekleme listesine katılın', desc: 'WhatsApp’tan Accounting güncellemeleri istediğinizi yazın.' },
            { num: '03', title: 'Erken erişim önceliği', desc: 'Lansmanda satış önce bekleme listesi ekipleriyle koordine eder.' }
          ]
        },
        faq: {
          eyebrow: 'Sorular',
          title: 'Accounting SSS',
          items: [
            { q: 'Accounting şu an satın alınabilir mi?', a: 'Henüz değil — FXGuard paket yol haritasında ve bekleme listesi açık. WhatsApp CRM bugün $49/ay’dan kullanılabilir.' },
            { q: 'CRM ile ilişkisi nedir?', a: 'İkisi de FXGuard paket ürünleri; Accounting aynı döviz/finans ekipleri için WhatsApp operasyonunun yanında tasarlanır.' },
            { q: 'Bekleme listesine nasıl katılırım?', a: 'WhatsApp satış (+90 501 067 6486) veya Bizdavar iletişim formundan Accounting’i belirterek yazın.' }
          ]
        },
        cta: {
          title: 'CRM bugün · Accounting yakında',
          desc: 'Önce WhatsApp CRM demosunu deneyin; Accounting için bekleme listesinde kalın — <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a>.',
          crm: 'WhatsApp CRM',
          waitlist: 'WhatsApp bekleme listesi',
          store: 'fxguard.io'
        },
        geoText: 'FXGuard Accounting — döviz ve KOBİ ekipleri için FXGuard paket muhasebesi · Bizdavar geliştirmesi.'
      },

      bzDiamond: {
        hero: { tag: 'Web tasarım örneği', title: 'BZ Diamond — Web sitesi ve online mağaza tasarımı', desc: 'Mücevher ve pırlanta alanında müşteri projesi — tasarım, geliştirme ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>BZ Diamond</strong>, Bizdavar Group müşterilerinden biridir — online pırlanta ve mücevher satışına odaklanan bir marka. Web sitesi, WooCommerce mağazası, e-posta altyapısı ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>, Bizdavar’ın endüstriyel iş birimi değildir.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['Kurumsal ve e-ticaret web sitesi tasarımı ve geliştirme', 'WooCommerce uygulaması — online pırlanta ve mücevher satışı', 'Kurumsal e-posta yönetimi ve yapılandırması (alan adı ve posta kutuları)', 'SEO, içerik yapısı ve ürün sayfası optimizasyonu', 'RTL ve çok dilli arayüz (Türkçe / Farsça / İngilizce)', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'BZ Diamond, GIA ve lab-grown elmas ile mücevher seçimi eğitimi alanında faaliyet gösterir. Ürün ve fiyat detayları müşterinin resmi web sitesinde yayınlanır.', challengeTitle: 'Proje zorluğu', challenge: 'Elmas ve mücevher için güvenilir WooCommerce mağazası, Farsça/İngilizce RTL, ürün SEO’su ve kurumsal e-posta — lansman sonrası destek kesintisi olmadan.', resultsTitle: 'Sonuçlar', result1: 'Katalog ve dönüşüm sayfalarıyla WooCommerce mağazası', result2: 'Alan adlı e-posta ve sürekli bakım', result3: 'Hedef pazar için SEO ve çok dilli temel', ctaSite: 'BZ Diamond web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'Türkiye ve uluslararası markalar için web tasarım örneği — WooCommerce, SEO ve uluslararası destek.'
      },
      supplifyTrade: {
        hero: { tag: 'Web tasarım örneği', title: 'Supplify Trade — Uluslararası ticaret web sitesi', desc: 'BAE (RAKEZ) merkezli B2B müşteri projesi — kurumsal web tasarımı, SEO ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>Supplify Trade FZ-LLC</strong>, Bizdavar Group müşterilerinden biridir — Ras Al Khaimah Ekonomik Bölgesi (RAKEZ) lisanslı uluslararası ticaret ve sourcing şirketi. Kurumsal web sitesi, içerik yapısı, temel SEO ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['B2B kurumsal web sitesi tasarımı ve geliştirme', 'Çok bölümlü arayüz (hizmetler, sektörler, süreç, iletişim)', 'Temel SEO, içerik yapısı ve dönüşüm sayfaları (RFQ)', 'Mobil ve performans optimizasyonu', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'Supplify Trade FZ-LLC uluslararası sourcing, tedarik, kalite kontrol ve lojistik alanında faaliyet gösterir — inşaat malzemeleri, endüstriyel ürünler, tarım ekipmanları ve otomotiv yedek parçaları. Hizmet ve teklif detayları müşterinin resmi web sitesinde yayınlanır.', ctaSite: 'Supplify Trade web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'BAE ve Ortadoğu’daki uluslararası ticaret şirketleri için web tasarım örneği — Bizdavar Group.'
      },
      kayaOne: {
        hero: { tag: 'Web tasarım örneği', title: 'Kaya One AG — İsviçre ticaret web sitesi', desc: 'İsviçre merkezli B2B müşteri projesi — kurumsal web tasarımı, SEO ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>Kaya One AG</strong>, Bizdavar Group müşterilerinden biridir — İsviçre’de (Brunnen, Schwyz) kayıtlı ticaret ve endüstriyel çözümler şirketi (UID: CHE-351.641.458). Kurumsal web sitesi, içerik yapısı, temel SEO ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['B2B kurumsal web sitesi tasarımı ve geliştirme', 'Çok bölümlü arayüz (hizmetler, sektörler, hakkımızda, iletişim)', 'Temel SEO, içerik yapısı ve dönüşüm sayfaları', 'Mobil ve performans optimizasyonu', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'Kaya One AG uluslararası ticaret, ağır ekipman ve lojistik alanında faaliyet gösterir — tarım ve gıda ürünleri, metal ve çelik, kamyon ve endüstriyel makineler. Hizmet detayları müşterinin resmi web sitesinde yayınlanır.', challengeTitle: 'Proje zorluğu', challenge: 'İsviçreli ticaret firması, Avrupa güvenini artıran, hizmetleri net gösteren ve teklif yolunu kısaltan B2B site istiyordu.', resultsTitle: 'Sonuçlar', result1: 'Hizmetler, sektörler ve iletişim yapılı kurumsal site', result2: 'Uluslararası pazar için temel SEO ve mobil optimizasyon', result3: 'Bizdavar teknik bakım ve güncelleme', ctaSite: 'Kaya One AG web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'İsviçre ve uluslararası ticaret şirketleri için web tasarım örneği — Bizdavar Group.'
      },
      smmTurk: {
        hero: { tag: 'Web tasarım örneği', title: 'SMM Turk — SMM paneli ve web sitesi tasarımı', desc: 'Türkiye merkezli müşteri projesi — panel arayüzü, web sitesi ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>SMM Turk</strong>, Bizdavar Group müşterilerinden biridir — rekabetçi fiyatlı, 7/24 otomatik teslimatlı ve ortaklık (affiliate / bayi) programlı bir SMM paneli. Web sitesi ve panel deneyimi, içerik yapısı, temel SEO ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['SMM web sitesi ve kullanıcı paneli tasarımı', 'Giriş, kayıt ve dashboard arayüzü', 'Temel SEO, içerik yapısı ve dönüşüm sayfaları', 'Mobil ve performans optimizasyonu', 'Teknik destek, güncelleme ve bakım'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'SMM Turk sosyal medya hizmet paneli sunar — otomatik sipariş, kripto ödeme (BTC, ETH, USDT), bayi paneli ve API. Fiyat ve hizmet detayları müşterinin resmi web sitesinde yayınlanır.', challengeTitle: 'Proje zorluğu', challenge: 'Türkiye SMM paneli için kayıt, dashboard ve dönüşüm odaklı net UI — özellikle mobil ve kayıt oranı.', resultsTitle: 'Sonuçlar', result1: 'Site ve panel giriş/dashboard akışı', result2: 'Türkiye trafiği için dönüşüm sayfaları ve temel SEO', result3: 'Lansman sonrası teknik destek', ctaSite: 'SMM Turk web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'Türkiye ve uluslararası pazar için SMM paneli web tasarım örneği — Bizdavar Group.'
      },
      marviSociety: {
        hero: { tag: 'iOS uygulama örneği', title: 'Marvi Society — İstanbul davetli kulüp iOS uygulaması', desc: 'Sıfırdan iOS tasarım, geliştirme ve yayın — onaylı creator’ları İstanbul mekanlarıyla buluşturur; App Store’da yayında' },
        about: { title: 'Proje hakkında', body: '<strong>Marvi Society</strong>, Bizdavar Group’un mobil geliştirme örneğidir — İstanbul’da onaylı creator’lar ile işletmeleri buluşturan davetli iOS uygulaması. Etkinlik ve mekan keşfi, iş birliği talebi, check-in, ziyaret kanıtı, mekan yönetimi ve TR/EN profil. Bu sayfa bir <strong>iOS uygulama örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['iOS ürün ve UI/UX tasarımı', 'Mobil uygulama geliştirme ve mimari', 'Keşif, davet, check-in ve ziyaret kanıtı akışı', 'Mekan, kampanya ve bildirim yönetimi', 'App Store yayını ve lansman sonrası destek'], clientTitle: 'Ürün faaliyet alanı', clientBody: 'Marvi Society, İstanbul’da davetli bir lifestyle kulübüdür — creator’ları restoran, gece hayatı, wellness ve güzellik mekanlarıyla buluşturur. Ürün detayları web sitesi ve App Store sayfasında yayınlanır.', challengeTitle: 'Proje zorluğu', challenge: 'İstanbul’da creator ve mekanları bağlayan davetli bir uygulama — etkinlik keşfi, davet yönetimi, check-in ve ziyaret kanıtı ile App Store’a hazır teslim.', resultsTitle: 'Sonuçlar', result1: 'App Store’da yayınlanan iOS uygulaması', result2: 'Keşif, iş birliği ve mekan yönetimi akışı', result3: 'Koyu görsel kimlik ve TR/EN deneyim', ctaAppStore: 'App Store’da gör', ctaSite: 'Marvi Society web sitesi', ctaOrder: 'Benzer uygulama sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        shots: { discover: 'Etkinlik keşfi', events: 'Etkinlikler ve davetler', profile: 'Creator profili' },
        geoText: 'İstanbul ve uluslararası pazar için iOS uygulama geliştirme örneği — tasarımdan App Store yayınına Bizdavar Group.'
      },
      fxguardExchange: {
        hero: { tag: 'Fintech örneği', title: 'FXGuard Exchange — Toman–Lira değişim platformu', desc: 'İran ↔ Türkiye döviz değişim web uygulaması — canlı kur, kimlik doğrulama (KYC) ve aşamalı takip; Bizdavar Group tarafından geliştirildi' },
        about: { title: 'Proje hakkında', body: '<strong>FXGuard Exchange</strong>, Bizdavar Group tarafından tasarlanıp geliştirilen uzman bir Toman–Lira değişim platformudur — <strong>IRR ↔ TRY</strong> odaklı şeffaf referans kur, benzersiz sipariş kimliği, KYC, dönüşüm hesaplayıcı, canlı kur tablosu ve ödeme sonrası aşamalı takip. Bu sayfa bir <strong>web ve fintech tasarım örneğidir</strong>; ayrı ürün olan WhatsApp CRM scriptinden farklıdır.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['Döviz değişim web uygulaması tasarımı (Farsça RTL)', 'Canlı kur panosu, dönüşüm hesaplayıcı ve para birimi tablosu', 'Sipariş kaydı, kimlikli takip ve KYC akışı', 'Açık/koyu tema, kur sayfaları SEO ve içerik yapısı', 'Hesap güvenliği (giriş, 2FA) ve siparişe bağlı destek'], clientTitle: 'Ürün faaliyet alanı', clientBody: 'FXGuard Exchange, İran–Türkiye koridorundaki kullanıcılar için uzman Toman–Lira altyapısıdır. Gerçek sipariş şu an yalnızca IRR ↔ TRY üzerindedir; diğer para birimleri (USD, EUR, AED…) fiyat referansı olarak gösterilir — kripto piyasası değildir.', ctaSite: 'FXGuard Exchange’i gör', ctaCrm: 'WhatsApp CRM scripti', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'İran ↔ Türkiye koridoru için fintech tasarım örneği — Bizdavar Group.'
      }
    },
    en: {
      biztejarat: {
        hero: { tag: 'Past project · SMM', title: 'Biztejarat — Industrial product SMM case study', desc: 'Past Instagram management and content production project for electronic equipment, instrumentation and industrial parts' },
        about: { title: 'About the project', archivedNotice: 'This project’s Instagram page has been closed and is no longer active. This page is kept only as a B2B SMM case study reference.', body: '<strong>Biztejarat</strong> was an SMM case study project — an industrial products Instagram page launched and managed by Bizdavar Group. This is a <strong>SMM management and B2B content</strong> case study, not a separate Bizdavar trading or business unit.', body2: 'While active, electronic equipment, instrumentation, sensors and industrial parts (including VEGA, Prosense and related brands) were introduced and documented through posts and stories.', servicesTitle: 'Services delivered', services: ['Instagram profile setup and optimization', 'Persian/English content for industrial products', 'Post and story graphic design', 'Publishing calendar and engagement management', 'Linking to catalogs and quote requests'], ctaSmm: 'SMM management services', ctaPortfolio: 'Other case studies' },
        products: { title: 'Content areas covered', desc: 'Examples of areas covered in this project — technical supply via <a href="products#supply">Bizdavar Group</a>', vega: 'Level and pressure sensors', prosense: 'Gas and flame detectors', gamak: 'Industrial electric motors', industrialTitle: 'Industrial equipment', industrialDesc: 'B2B consulting and supply' },
        geoText: 'Past B2B SMM case study — introducing VEGA, Prosense and Gamak industrial equipment in Persian and English.'
      },
      biztab: {
        hero: { tag: 'Owned product · IoT', title: 'BizTab — Non-contact wall thermometer', desc: 'First non-contact wall thermometer designed in Tabriz — developed by the Bizdavar team with measurement error under 0.3°C' },
        about: {
          title: 'About the product',
          imageAlt: 'BizTab — non-contact wall thermometer designed by the Bizdavar team',
          body: '<strong>BizTab</strong> is a non-contact wall thermometer designed and developed by the <strong>Bizdavar team</strong>. Introduced as the <strong>first non-contact wall thermometer in Tabriz</strong>, all intellectual property and exclusive production rights belong to the Bizdavar team.',
          body2: 'Approved by University of Tabriz professors, it is designed for wall mounting at building entrances, healthcare facilities and high-traffic areas — contactless measurement with a digital temperature display.',
          specsTitle: 'Technical features',
          specs: ['Non-contact measurement (infrared)', 'Measurement error under 0.3°C', 'Digital LED display', 'Wall mounting — entrances and lobbies', 'University of Tabriz academic approval', 'Exclusive production by Bizdavar team'],
          ctaContact: 'Inquiry & contact',
          ctaPress: 'Nasr News report'
        },
        press: { eyebrow: 'Media & achievement', title: 'Press coverage and academic validation', desc: 'BizTab featured by Nasr News Agency — March 2020', quote: '"This thermometer was developed by the Bizdavar team; all rights and exclusive production belong to this team."', source: 'Nasr News Agency', imageAlt: 'BizTab report page on Nasr News Agency — March 2020' },
        related: { title: 'Related products & services' },
        geoText: 'IoT product design in Tabriz — part of Bizdavar Group innovation and industrial ecosystem.'
      },
      bizpet: {
        hero: { tag: 'Owned product · Heating pad', title: 'BizPet — Heating pad', desc: '2020 flagship — Padideh heating pad for home, car and pet beds; BizPet / Pet Biz' },
        nav: { about: 'About the product', rd: 'R&D', pets: 'Pet beds', origin: 'Incubator', contact: 'Contact' },
        about: {
          title: 'About the product',
          imageAlt: 'BizPet — grey heating pad designed by the Bizdavar team',
          body: '<strong>BizPet</strong> (Biz Pet / Pet Biz) is the flagship Padideh heating pad — for winter warmth and local pain relief, designed and produced at the <strong>University of Tabriz Technology Incubator</strong>. The BizSeat car seat cushion is the same pad, not a separate product.',
          body2: 'Developed with <strong>Teknoloji Pardazan Tosee Khavarmiyaneh</strong> and the <strong>Imen Sahand Padideh</strong> technology unit. Portable for home and car; available on Digikala (dkp-7694589).',
          specsTitle: 'Features',
          specs: ['Padideh heating pad — BizPet / Biz Pet / Pet Biz', 'Winter heating and local pain relief', 'Portable — home and car use', '5–12 V operating voltage (max 1 A)', 'Washable after removing the heating element', 'Designed and produced at University of Tabriz Technology Incubator', 'Partnership with Imen Sahand Padideh and Teknoloji Pardazan'],
          ctaContact: 'Bulk inquiry / contact',
          ctaCatalog: 'Product catalog'
        },
        gallery: { tanAlt: 'BizPet — tan heating pad with power connector', elementAlt: 'BizPet — heating element with connection points', posterAlt: 'Padideh heating pad product sheet' },
        rd: {
          eyebrow: 'R&D',
          title: 'Laboratory heating element testing',
          desc: 'Thermal testing, prototype and assembly photos — part of the heating pad engineering path at the University of Tabriz incubator.',
          tempHighAlt: 'Thermal element test with infrared thermometer',
          tempHighCaption: 'Laboratory thermal element test',
          protoAlt: 'Heating pad prototype on insulation block',
          protoCaption: 'Prototype and experimental assembly',
          portfolioCta: 'Portfolio — exhibitions and production'
        },
        military: { vestAlt: 'Tactical vest with heating pad on mannequin', vestCaption: 'Tactical vest sample with heat control unit' },
        production: { imageAlt: 'BizPet heating pad production line — assembly and bench test', caption: 'Assembly and testing of heating pads in the workshop.' },
        pets: {
          eyebrow: 'Pet beds',
          title: 'Infrared heating pad for pets',
          desc: 'The same heating pad suits dog and cat beds — keeping warm in winter with safe voltage and a washable cover.',
          imageAlt: 'BizPet — infrared heating pad for pet beds',
          specs: ['Suitable for pet beds', 'Carbon nanomaterials · far infrared · 95–99% efficiency', 'Safe 5–12 V · 5–8 W consumption', 'Soft, removable and washable cover', 'Temperature control within pet body temperature range', 'Therapeutic use: muscle spasm and arthritis — for senior or pregnant pets']
        },
        origin: {
          eyebrow: 'Tabriz incubator · 2020',
          title: 'From design to production at the technology incubator',
          desc: 'BizPet is one of Bizdavar’s hardware products — the Padideh heating pad, with two local technology partners in the University of Tabriz innovation ecosystem.',
          parkTitle: 'Technology incubator',
          parkDesc: 'University of Tabriz — design and production environment for the Padideh heating pad.',
          partner1Title: 'Teknoloji Pardazan Tosee Khavarmiyaneh',
          partner1Desc: 'Development and commercialization partner.',
          partner2Title: 'Imen Sahand Padideh',
          partner2Desc: 'Tabriz science park technology unit — Padideh heating pad design and manufacturing partner.',
          specTitle: '5–12 V · max 1 A',
          specDesc: 'Portable for home and car — washable after removing the heating element.'
        },
        related: {
          title: 'Related products & services',
          biztab: 'Non-contact wall thermometer',
          portfolioDesc: 'Bizdavar exhibitions and projects',
          catalog: 'Product catalog',
          catalogDesc: 'Bizdavar hardware and production lines',
          about: 'About Bizdavar',
          aboutDesc: 'Science park, exhibitions and achievements'
        },
        geoText: 'Heating pad designed at the University of Tabriz Technology Incubator — Bizdavar team’s BizPet product.'
      },
      bizsanitizerV5: {
        hero: { tag: 'Owned product · Hygiene', title: 'BizClean V5 — Automatic hand sanitizer', desc: 'Automatic device with ultrasonic sensor — built during the global COVID-19 pandemic, engineered by the Bizdavar team' },
        about: {
          title: 'About the product',
          imageAlt: 'BizClean V5 — automatic hand sanitizer',
          body: '<strong>BizClean V5</strong> is an automatic hand sanitizer engineered by the <strong>Bizdavar team</strong> — for building entrances, offices, stores and healthcare facilities.',
          body2: 'Developed during the COVID-19 pandemic; from Dey 1398 to Shahrivar 1401 it was personally funded by the founder and manufactured by the Bizdavar team. Showcased at the 1399 growth center exhibition (ISNA, SNN, IRIB) and at RINOTEX 1400 via the «Imen Sahand Padideh» science park unit; now available on Digikala.',
          specsTitle: 'Features',
          specs: ['Automatic operation with ultrasonic sensor', 'Contact-free automatic sanitizer spray', '90° sensor and nozzle angle for better coverage', 'Wall-mountable for entrances and high-traffic areas', 'Designed and engineered by the Bizdavar team', 'Available to order on Digikala'],
          ctaDigikala: 'View on Digikala',
          ctaVideo: 'Short video — V1 prototype',
          ctaPress: 'SNN report',
          ctaPressIsna: 'ISNA report',
          ctaPressIrib: 'IRIB report',
          ctaContact: 'Bulk inquiry / contact'
        },
        video: {
          eyebrow: 'Context & media',
          title: 'Short video — BizClean V1 prototype',
          desc: 'This YouTube short shows the early BizClean V1 prototype — the commercial version sold on Digikala is V5.',
          quote: 'Early contact-free hand sanitizer prototype — before the V5 model now available on Digikala.',
          source: 'YouTube — BizClean V1 prototype',
          note: 'Video shows the V1 prototype; the current online retail product is BizClean V5.'
        },
        press: {
          eyebrow: 'Media & exhibition',
          title: 'University of Tabriz growth center — COVID-19 exhibition',
          desc: 'Devices engineered by the Bizdavar team — including BizClean V5 — were showcased with the East Azerbaijan governor present. The IRIB video report and ISNA/SNN photos show these products and founder Ersan Jahed Tabrizi at the event.',
          videoTitle: 'IRIB News Agency video report',
          videoDesc: 'Exhibition media coverage — Bizdavar devices presented with the governor at the University of Tabriz growth center.',
          quoteIrib: 'An exhibition of the University of Tabriz growth center achievements against COVID-19 opened — video report with the governor presenting knowledge-based products.',
          sourceIrib: 'IRIB News Agency (Islamic Republic of Iran Broadcasting)',
          ctaIrib: 'IRIB report',
          quoteIsna: 'ISNA report on Tabriz University research and technology achievements against COVID-19 — knowledge-based products including disinfection devices.',
          sourceIsna: 'ISNA News Agency',
          ctaIsna: 'ISNA report',
          quoteSnn: '21 knowledge-based products from 10 companies were presented — the governor pledged support for mass production.',
          sourceSnn: 'SNN (Student News Network)',
          ctaSnn: 'SNN report',
          mediaNote: 'Video and images published by IRIB, ISNA and SNN show devices manufactured by the Bizdavar team — the founder attended the exhibition.'
        },
        heritage: {
          eyebrow: 'Science park & RINOTEX',
          title: 'Imen Sahand Padideh — University of Tabriz science park unit',
          desc: '«Imen Sahand Padideh» was a technology unit based at the University of Tabriz Science & Technology Park. At the 9th RINOTEX (Aban 1400) it appeared on the park units list presenting the knowledge-based product «design and manufacture of a smart hand disinfection device». From Dey 1398 to Shahrivar 1401 the founder provided personal investment; all design and production was done by the Bizdavar team.',
          period1399: { period: 'Ordibehesht 1399', text: 'University growth center exhibition — covered by ISNA, SNN and IRIB.' },
          period1400: { period: 'Aban 1400', text: 'RINOTEX 1400 — product presented via «Imen Sahand Padideh»; simultaneous 12 m² Bizdavar booth in the ICT zone.' },
          note: 'Public sources naming «Imen Sahand Padideh» are limited; product and production are verifiable through ISNA, SNN, IRIB, RINOTEX and the Tabriz science park.',
          linkRinotex: 'RINOTEX 1400',
          linkTechpark: 'Tabriz University science park',
          linkExhibitions: 'Exhibitions on About'
        },
        store: {
          eyebrow: 'Online retail',
          title: 'Buy on Digikala',
          desc: 'V5 product listed on Digikala with product ID dkp-3730222',
          quote: 'Bizdavar automatic hand sanitizer device — with ultrasonic sensor and automatic sanitizer spray.',
          source: 'Digikala'
        },
        related: { title: 'Related Bizdavar products' },
        geoText: 'Engineered hygiene product in Iran — Bizdavar team design, sold via Digikala.'
      },
      bizseat: {
        hero: {
          tag: 'Same product · BizPet',
          title: 'BizSeat is the BizPet heating pad',
          desc: 'A shop listing name — not a second line. The 1399 product is BizPet'
        },
        about: {
          title: 'One product, two shop names',
          imageAlt: 'BizSeat — the same BizPet heating pad as a car-seat support',
          body: '<strong>BizSeat</strong> is not a separate product. It is the same <strong>BizPet heating pad</strong>, designed in <strong>1399</strong> at the <strong>University of Tabriz Technology Incubator</strong> and also sold as a car-seat backrest.',
          body2: 'Developed with <strong>Technology Pardazan Tosee Khavarmianeh</strong> and <strong>Imen Sahand Padideh</strong>. The main page is <a href="/pages/bizpet">BizPet</a>; Digikala is the same SKU.',
          specsTitle: 'Features',
          specs: [
            'Main product: BizPet heating pad',
            'Car-seat listing name: BizSeat',
            'Designed and built in 1399 in Tabriz',
            'Imen Sahand Padideh and Technology Pardazan Tosee Khavarmianeh',
            'Sold on Digikala (dkp-7694589)'
          ],
          ctaDigikala: 'View on Digikala',
          ctaBizpet: 'Main page: BizPet',
          ctaContact: 'Bulk inquiry / contact'
        },
        origin: {
          eyebrow: 'Tabriz science park · 1399',
          title: 'From invention to production at the science park',
          desc: 'BizSeat is one of the hardware products invented by the Bizdavar team — designed and built in the University of Tabriz innovation ecosystem with two local technology partners.',
          parkTitle: 'Science and Technology Park',
          parkDesc: 'University of Tabriz — where the product was invented, designed and built in 1399.',
          partner1Title: 'Technology Pardazan Tosee Khavarmianeh',
          partner1Desc: 'Development and commercialization partner.',
          partner2Title: 'Imen Sahand Padideh',
          partner2Desc: 'Tabriz science-park technology unit — design and manufacturing partner.',
          storeTitle: 'Sold on Digikala',
          storeDesc: 'Product ID dkp-7694589 — car seat backrest, model bizdavar.'
        },
        related: {
          title: 'Related products and services',
          bizclean: 'Automatic hand sanitizer',
          biztab: 'Non-contact wall thermometer',
          catalog: 'Product catalog',
          catalogDesc: 'Bizdavar hardware and production lines',
          about: 'About Bizdavar',
          aboutDesc: 'Science park, exhibitions and achievements'
        },
        geoText: 'Automotive product invented at the University of Tabriz Science and Technology Park — Bizdavar design, sold on Digikala.'
      },
      bizpet: {
        hero: {
          tag: 'Owned product · Heating pad',
          title: 'BizPet — Bizdavar heating pad',
          desc: 'Designed and produced at the University of Tabriz Technology Incubator — a Bizdavar-owned product also known as Biz Pet / Pet Biz'
        },
        nav: {
          about: 'About the product',
          rd: 'R&D',
          pets: 'Pet beds',
          origin: 'Incubator',
          gallery: 'Photo gallery',
          contact: 'Contact'
        },
        about: {
          title: 'About the product',
          imageAlt: 'BizPet — grey heating pad designed by the Bizdavar team',
          body: '<strong>BizPet</strong> (Biz Pet / Pet Biz) is the Padideh heating pad — for warming in cold seasons and localized pain relief, designed and produced at the <strong>University of Tabriz Technology Incubator</strong>.',
          body2: 'It was developed with <strong>Technology Pardazan Tosee Khavarmianeh</strong> and the technology unit <strong>Imen Sahand Padideh</strong>. The pad is portable for home or car use.',
          specsTitle: 'Features',
          specs: [
            'Padideh heating pad — BizPet / Biz Pet / Pet Biz',
            'Cold-season warming and localized pain relief',
            'Portable — home and car use',
            'Operating voltage 5–12 V (max 1 A)',
            'Washable after removing the heating element',
            'Designed and produced at the University of Tabriz Technology Incubator',
            'Collaboration with Imen Sahand Padideh and Technology Pardazan Tosee Khavarmianeh'
          ],
          ctaContact: 'Bulk inquiry / contact',
          ctaCatalog: 'Product catalog'
        },
        gallery: {
          tanAlt: 'BizPet — tan heating pad with power connector',
          elementAlt: 'BizPet — heating element with contact points',
          posterAlt: 'Padideh heating pad product poster'
        },
        rd: {
          eyebrow: 'Research & development',
          title: 'Heating-element tests in the lab',
          desc: 'Thermal tests, prototype and assembly photos — part of the engineering path at the Tabriz University incubator.',
          tempHighAlt: 'Infrared thermometer test of the heating element',
          tempHighCaption: 'Lab thermal test of the heating element',
          tempAlt: 'Surface temperature measurement during R&D',
          tempCaption: 'Surface temperature during R&D testing',
          elementAlt: 'Rectangular heating element with corner contacts',
          elementCaption: 'Heating element with contact points',
          protoAlt: 'Heating-pad prototype on an insulation block',
          protoCaption: 'Prototype and experimental assembly'
        },
        military: {
          eyebrow: 'Research & development',
          title: 'Heating pads in military clothing',
          desc: 'A tactical-vest prototype with an integrated heating element and control unit — R&D for applying the heating pad inside military clothing layers.',
          vestAlt: 'Military vest prototype with heating pad on a mannequin',
          vestCaption: 'Tactical vest prototype with thermal control unit',
          liningAlt: 'Vest interior lining and heating-pad wiring',
          liningCaption: 'Interior lining — stitched-in heating element',
          outdoorAlt: 'Heated military vest on a mannequin outdoors',
          outdoorCaption: 'Outdoor display of the prototype'
        },
        dryer: {
          eyebrow: 'Research & development',
          title: 'Heating pads in fruit-dryer baskets',
          desc: 'A wooden fruit-dryer basket design with a hexagonal heating mesh and a power lead — R&D for applying the heating pad inside dryer trays.',
          imageAlt: 'Fruit-dryer basket prototype with heating mesh',
          caption: '3D render of a dryer basket with a mesh heating element.'
        },
        pets: {
          eyebrow: 'Pet beds',
          title: 'Infrared heating pad for pets',
          desc: 'The same heating pad also works well in dog and cat beds — safe low-voltage warmth in cold seasons, with a washable cover.',
          imageAlt: 'BizPet — infrared heating pad for pet beds',
          specs: [
            'Suitable for pet beds',
            'Carbon nanomaterials · far infrared · 95–99% efficiency',
            'Safe 5–12 V · 5–8 W consumption',
            'Soft, removable, washable cover',
            'Temperature control in the pet’s body-temperature range',
            'Therapeutic use: muscle spasms and arthritis — for older or pregnant animals'
          ]
        },
        expo: {
          eyebrow: 'Exhibition',
          title: 'Imen Sahand Padideh booth',
          desc: 'Heating pads on display — with emphasis on very low consumption and environmental compatibility.',
          imageAlt: 'Imen Sahand Padideh exhibition booth with heating pads',
          caption: 'Imen Sahand Padideh booth — introducing a low-consumption heating pad.'
        },
        origin: {
          eyebrow: 'Tabriz incubator · 1399',
          title: 'From design to production at the incubator',
          desc: 'BizPet is one of the hardware products from the Bizdavar team — the Padideh heating pad, with two local technology partners.',
          parkTitle: 'Technology Incubator',
          parkDesc: 'University of Tabriz — where the Padideh heating pad was designed and produced.',
          partner1Title: 'Technology Pardazan Tosee Khavarmianeh',
          partner1Desc: 'Development and commercialization partner.',
          partner2Title: 'Imen Sahand Padideh',
          partner2Desc: 'Tabriz science-park technology unit — design and manufacturing partner for the Padideh heating pad.',
          specTitle: '5–12 V · max 1 A',
          specDesc: 'Portable for home and car — washable after removing the heating element.'
        },
        production: {
          eyebrow: 'Production line',
          title: 'Heating-pad assembly and testing',
          desc: 'Assembly and quality-control station — fabric pads, power units and product packaging.',
          imageAlt: 'BizPet heating-pad production line — assembly and testing at the workbench',
          caption: 'Assembling and testing heating pads in the workshop.'
        },
        related: {
          title: 'Related products and services',
          bizseat: 'Car seat backrest',
          biztab: 'Non-contact wall thermometer',
          catalog: 'Product catalog',
          catalogDesc: 'Bizdavar hardware and production lines',
          about: 'About Bizdavar',
          aboutDesc: 'Science park, exhibitions and achievements'
        },
        geoText: 'Heating pad designed at the University of Tabriz Technology Incubator — Bizdavar’s BizPet product.'
      },
      bizswap: {
        hero: {
          tag: 'Web3 product · DeFi',
          title: 'BizSwap — Token presale & swap',
          desc: 'Front-end and on-chain module for presale, on-site swap and wallet connect — built for RWA and asset-backed token projects.',
          chains: 'BNB Chain · BEP-20 · RWA · Presale',
          trust: 'Web3 development · Custom code · Bizdavar support',
          ctaContact: 'Order a similar module',
          ctaPortfolio: 'Other portfolio work'
        },
        stats: {
          capabilities: '6',
          capabilitiesLabel: 'UI features',
          flow: '4',
          flowLabel: 'Swap steps',
          chain: 'BEP-20',
          chainLabel: 'Supported network',
          module: 'Web3',
          moduleLabel: 'Module type'
        },
        about: {
          title: 'About the module',
          imageAlt: 'BizSwap token swap UI — Web3 module by Bizdavar',
          body: '<strong>BizSwap</strong> is a presale and token swap module engineered by the <strong>Bizdavar team</strong> — users convert stablecoin to project tokens without leaving the project website.',
          body2: 'Includes Web3 wallet UI, swap widget with token picker, quick percentage buttons, slippage/minimum received calculation, on-chain transaction feedback and BEP-20 smart contract integration.',
          specsTitle: 'Technical capabilities',
          specs: ['Wallet connect (WalletConnect / injected provider)', 'On-site stablecoin ↔ project token swap', 'Presale widget with live rate', '10% · 25% · 50% · 75% · 100% quick fill', 'Slippage & Minimum Received display', 'From/To token selector modal', 'Processing / error transaction feedback', 'BNB Chain (BEP-20) support', 'Contract verification links on explorer', 'onlyOwner: rate change & Claim functions'],
          ctaContact: 'Order a similar module',
          ctaPortfolio: 'Other portfolio work'
        },
        capabilities: { eyebrow: 'On-site features', title: 'What users do on the website', desc: 'All actions inside the web UI — no external DEX required for initial purchase.', items: [{ icon: 'link', title: 'Connect Wallet', desc: 'Trust Wallet and compatible Web3 wallets — From/To balances.' }, { icon: 'swap', title: 'DEX Swap', desc: 'Convert USDT to project token at live rate with wallet confirmation.' }, { icon: 'target', title: 'Presale', desc: 'Buy during presale directly from the project landing page.' }, { icon: 'chart-bar', title: 'Slippage', desc: 'Slippage and minimum received shown before confirm.' }, { icon: 'coin', title: 'Token selector', desc: 'Pick source and destination tokens from supported list.' }, { icon: 'hourglass', title: 'Transaction status', desc: 'Processing message and success/error feedback.' }] },
        flow: { eyebrow: 'User flow', title: 'From wallet connect to tokens', steps: [{ title: 'Connect wallet', desc: 'User clicks Connect Wallet and confirms BEP-20 network.' }, { title: 'Enter amount', desc: 'USDT amount or balance percentage — rate and output calculated.' }, { title: 'On-chain confirm', desc: 'Transaction signed in wallet and broadcast.' }, { title: 'Receive tokens', desc: 'After block confirmation, swap completes and To balance updates.' }] },
        admin: { title: 'Admin panel & smart contract', desc: 'onlyOwner functions integrated with project admin UI.', items: ['Change Rate (onlyOwner)', 'Claim Tokens (onlyOwner)', 'On-site rate sync with Admin Panel', 'Fixed contract address — explorer transparency'] },
        useCasesTitle: 'Which projects is it for?',
        useCases: ['RWA tokens (gold, silver, real assets)', 'ICO / IDO / staged presale', 'BEP-20 projects with landing & whitepaper', 'On-site swap before external DEX listing'],
        cta: { title: 'Need presale or token swap?', desc: 'The Bizdavar team customizes BizSwap for your Web3 project.', btn: 'Request Web3 consulting' },
        related: {
          title: 'Related products & services',
          items: [
            { href: '/pages/fxguard', icon: 'chat-wa', title: 'WhatsApp CRM', desc: 'FXGuard · from $49/mo' },
            { href: '/pages/fast', icon: 'bolt', title: 'Fast Studio', desc: 'Web design' },
            { href: '/pages/portfolio', icon: 'briefcase', title: 'Portfolio', desc: 'Fintech & Web3' },
            { href: '/pages/services', icon: 'list', title: 'Services', desc: 'Web & fintech' }
          ]
        },
        geoText: 'DeFi and Web3 module development — part of Bizdavar Group fintech and web services.'
      },
      fxguard: {
        hero: {
          tag: 'Exchange · remittance · finance',
          title: 'Quote the rate on WhatsApp. Keep the customer book.',
          desc: 'Full copy loads from i18n/fxguard-i18n.js on this page only.',
          regions: '',
          trust: 'From $49/mo · guided demo · 7-day money-back',
          ctaDemo: 'See the panel',
          ctaPricing: 'Prices',
          ctaContact: 'Buy on WhatsApp',
          ctaStore: 'fxguard.io'
        },
        stats: { businesses: 'Modules+', regions: 'User roles', regionsVal: 'Owner → Agent', uptime: 'Uptime target', setup: 'Support languages', setupSuffix: '' },
        suite: {
          eyebrow: 'FXGuard suite',
          title: 'Our digital products',
          desc: 'fxguard.io is the storefront. WhatsApp CRM is live — Accounting is on the way.',
          products: [
            { badge: 'Available now', title: 'WhatsApp CRM', desc: 'Shared inbox, customers, tickets, branches and FX tools. Cloud from $49/mo.', cta: 'This page', ctaSecondary: 'All products', secondaryHref: 'products', featured: true, href: '#pricing' },
            { badge: 'Coming soon', title: 'Accounting', desc: 'Finance workflows for the same exchange & SME teams. Join the waitlist.', cta: 'Notify on WhatsApp', ctaSecondary: 'Learn more', secondaryHref: 'fxguard-accounting', href: 'https://wa.me/905010676486?text=Hello%2C%20FXGuard%20Accounting%20waitlist' }
          ]
        },
        problem: {
          eyebrow: 'The problem',
          title: 'Sound familiar?',
          desc: 'Fast-growing teams outgrow personal WhatsApp — messages get lost and accountability disappears.',
          items: [
            { icon: 'mobile', title: 'Multiple phones, one number', desc: 'Shared logins or personal phones — chats slip away.' },
            { icon: 'list', title: 'No customer history', desc: 'Every chat starts from zero — no tags or shared context.' },
            { icon: 'clock', title: 'No accountability', desc: 'No tickets or tasks recording who closed what.' },
            { icon: 'shield', title: 'Unclear security', desc: 'No 2FA, no role separation across branches.' }
          ]
        },
        solution: {
          title: 'FXGuard solves all of it',
          desc: 'One panel for WhatsApp, customers, tickets, tasks, users, branches and FX tools — with roles and 2FA. Try it live before you decide how to deploy.',
          cta: 'Open free demo',
          href: 'https://app.fxguard.io/'
        },
        why: {
          eyebrow: 'Why buy',
          title: 'Why teams buy FXGuard',
          desc: 'Built to close more deals and protect every customer chat — not just another messenger.',
          items: [
            { num: '01', title: 'Stop losing money in chat', desc: 'Unread messages = lost customers. One shared inbox means nothing slips away.' },
            { num: '02', title: 'Sell with full history', desc: 'Tags, notes and past chats stay on the customer.' },
            { num: '03', title: 'Control who sees what', desc: 'Roles, branches and 2FA so owners stay in charge.' },
            { num: '04', title: 'Buy once. Deploy your way', desc: 'Cloud from $49/mo, one-time license, or fully managed.' }
          ]
        },
        demo: {
          eyebrow: 'Live demo',
          title: 'See the real product — try it yourself',
          desc: 'This is the live FXGuard panel, not a mockup.',
          liveBadge: 'LIVE DEMO',
          userLabel: 'Username',
          passLabel: 'Password',
          user: 'demo',
          pass: '123456',
          note: 'Public demo environment — nothing you change is saved.',
          cta: 'Open live demo',
          shots: [
            { title: 'Dashboard', desc: 'Live overview & quick actions' },
            { title: 'Users & Roles', desc: 'Owner → Agent · 2FA security' },
            { title: 'Mobile', desc: 'Dashboard & conversations on the go' }
          ]
        },
        steps: {
          eyebrow: 'Buy in 3 steps',
          title: 'Demo free, pick a package, purchase today',
          desc: 'No long sales cycle — evaluate the real product first.',
          items: [
            { num: '01', icon: 'bolt', title: 'Try the live demo', desc: 'app.fxguard.io — demo / 123456. Real product, not a mockup.' },
            { num: '02', icon: 'target', title: 'Pick your package', desc: 'Hosted Cloud, Self-hosted License, or Managed Dedicated.' },
            { num: '03', icon: 'whatsapp', title: 'Purchase or request a quote', desc: 'WhatsApp sales or the form on fxguard.io — usually within 24 hours on business days.' }
          ],
          cta: 'Open live demo'
        },
        features: {
          eyebrow: 'Modules',
          title: 'Everything in one panel',
          desc: 'Real modules for exchange, finance, sales and support teams.',
          items: [
            { icon: 'inbox', title: 'Unified WhatsApp inbox', desc: 'One number, shared inbox, smart routing.' },
            { icon: 'users', title: 'Customers & CRM', desc: 'Profiles, tags and conversation history.' },
            { icon: 'list', title: 'Support tickets', desc: 'Clear ownership from open to resolved.' },
            { icon: 'bolt', title: 'Tasks & workflows', desc: 'Assign and track end-to-end.' },
            { icon: 'shield', title: 'Roles, branches & 2FA', desc: 'Owner→Agent, branches, Authenticator, audit logs.' },
            { icon: 'chart-line', title: 'FX tools', desc: 'Rates, charts and exchange service tools.' }
          ]
        },
        audiences: {
          eyebrow: 'Who it’s for',
          title: 'Built for exchange, finance and support',
          desc: 'Teams that need real accountability — not just chat.',
          items: [
            { icon: 'chart-line', title: 'Exchange & FX', region: 'Turkey · UAE · Europe · Iran', desc: 'Multi-branch ops plus a team inbox.', tag: 'Multi-branch' },
            { icon: 'briefcase', title: 'B2B sales & support', region: 'All regions', desc: 'Close with full history, tickets and tasks.', tag: 'Sales ops' },
            { icon: 'building', title: 'Holdings / multi-site', region: 'Turkey · Dubai', desc: 'Role and branch oversight for owners.', tag: 'Roles' },
            { icon: 'health', title: 'Services & clinics', region: 'Turkey · Europe', desc: 'Request tracking without lost messages.', tag: 'Support' }
          ]
        },
        pricing: {
          eyebrow: 'Packages',
          title: 'Three ways to run FXGuard — same core',
          desc: 'The difference is who hosts and operates it. Every package includes the same core modules.',
          note: 'Demo is free. Cloud from $49/mo or $490/year.',
          plans: [
            { id: 'cloud', name: 'Hosted Cloud', price: '$49', period: '/mo', badge: 'Most popular', desc: 'We run FXGuard for you on our infrastructure.', features: ['Live in minutes', 'Automatic updates', 'Daily backups', 'Roles & 2FA', '$490/year (save 2 months)'], cta: 'Buy Cloud on fxguard.io', href: 'https://fxguard.io/', featured: true },
            { id: 'license', name: 'Self-hosted License', price: 'One-time', period: ' · quote', desc: 'Buy the full system and run it on your servers.', features: ['One-time ownership', 'Install package & docs', 'Your data stays with you', 'Optional update contract', 'Onboarding'], cta: 'Get license quote', href: 'https://fxguard.io/' },
            { id: 'managed', name: 'Managed Dedicated', price: 'Custom', period: ' · quote', desc: 'We install, host and operate a dedicated instance — with SLA.', features: ['Dedicated instance', 'Maintenance & monitoring', 'Custom SLA', 'Account manager', 'Staff training'], cta: 'Get Managed quote', href: 'https://fxguard.io/' }
          ]
        },
        faq: {
          eyebrow: 'FAQ',
          title: 'Common questions',
          items: [
            { q: 'Cloud vs License vs Managed?', a: 'Cloud: we host it. License: you run it on your servers. Managed: we operate a dedicated instance. All three share the same core modules.' },
            { q: 'Can I try before buying?', a: 'Yes — app.fxguard.io (demo / 123456) is the real product.' },
            { q: 'What does pricing start at?', a: 'Hosted Cloud from $49/mo or $490/year. License and Managed are custom quotes.' },
            { q: 'Is my data backed up?', a: 'On Cloud and Managed, daily backups are included. On Self-hosted, backups run on your infrastructure — guidance and optional support contracts available.' },
            { q: 'How secure is FXGuard?', a: 'Google Authenticator 2FA, role-based access (Owner→Agent) and full activity logs.' },
            { q: 'Multi-branch support?', a: 'Yes — branches, departments, Owner→Agent roles, 2FA and audit logs.' },
            { q: 'Which languages?', a: 'Site and support: English, Persian, Turkish, Arabic and Russian.' },
            { q: 'How does Bizdavar relate?', a: 'FXGuard is a Bizdavar ecosystem product; sales run through fxguard.io and it is listed in the Bizdavar product catalog.' }
          ]
        },
        support: {
          eyebrow: 'Support',
          title: 'Support that doesn’t stop at setup',
          desc: 'Backups, maintenance, security and multilingual support — on every plan we operate.',
          items: [
            { icon: 'monitor', title: '24/7 monitoring', desc: 'Cloud and Managed monitored around the clock with proactive patching.' },
            { icon: 'shield', title: 'Daily backups', desc: 'Automatic daily backups on hosted plans with documented recovery.' },
            { icon: 'lock', title: 'Security & 2FA', desc: 'Authenticator, roles and activity logs on every deployment.' },
            { icon: 'globe', title: 'Multilingual support', desc: 'Onboarding and support in EN, FA, TR, AR, RU.' },
            { icon: 'building', title: 'Multi-branch rollouts', desc: 'Help structuring branches, departments and roles as you grow.' },
            { icon: 'bolt', title: '99.9% uptime target', desc: 'Cloud/Managed built for high availability; SLA on request.' },
            { icon: 'document', title: 'GDPR-minded data', desc: 'Data minimization and access-control practices.' },
            { icon: 'users', title: 'Onboarding & migration', desc: 'Guided setup, import assistance and staff training.' }
          ]
        },
        updates: {
          eyebrow: 'Updates',
          title: 'What’s new in FXGuard',
          desc: 'Cloud and Managed get updates automatically; Self-hosted with the update contract.',
          items: [
            { date: 'Jul 2026', tag: 'Latest', title: 'Public live demo & clearer packages', desc: 'Public demo at app.fxguard.io plus clearer Cloud / License / Managed packaging.', bullets: ['Shared demo credentials', 'License and managed sales paths', 'Real product screenshots'] },
            { date: 'May 2026', tag: 'Security', title: 'Stronger account security', desc: '2FA, profile hardening and panel branding.', bullets: ['2FA in profile', 'Owner→Agent roles', 'Configurable login visuals'] },
            { date: 'Mar 2026', tag: 'Product', title: 'Multi-branch ops & FX tools', desc: 'Branches, departments and FX rate tools.', bullets: ['Branch structure', 'Online status', 'FX rates and services'] },
            { date: 'Jan 2026', tag: 'Core', title: 'Inbox, tickets, tasks & mobile', desc: 'Core CRM loop on desktop and mobile.', bullets: ['Team WhatsApp inbox', 'Customers, tickets, tasks', 'Mobile dashboard'] }
          ]
        },
        about: {
          title: 'FXGuard — Bizdavar ecosystem product',
          body: '<strong>FXGuard WhatsApp CRM</strong> unifies team inbox, customer CRM, tickets, tasks, branches and FX tools in one secure panel. Store: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · Demo: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a>.',
          ctaContact: 'Go to fxguard.io',
          ctaPortfolio: 'Accounting & related products'
        },
        cta: {
          title: 'Ready to buy FXGuard?',
          desc: 'Try the free demo first; then choose Cloud from $49/mo, License, or Managed.',
          btnStart: 'Free demo',
          btnPricing: 'View packages',
          btnStore: 'fxguard.io'
        },
        related: { title: 'Related products & services' },
        geoText: 'FXGuard WhatsApp CRM — Turkey, UAE, Europe, Iran · fxguard.io · Bizdavar ecosystem.'
      },

      fxguardAccounting: {
        hero: {
          tag: 'FXGuard · Accounting',
          badge: 'Coming soon',
          title: 'Accounting — finance for exchange & SME teams',
          desc: 'Financial workflows for the same teams running WhatsApp CRM today. Part of the <strong>FXGuard</strong> suite — built by Bizdavar; waitlist is open.',
          ctaWaitlist: 'Notify me on WhatsApp',
          ctaCrm: 'WhatsApp CRM demo',
          ctaStore: 'fxguard.io',
          trust: 'Coming soon · beside CRM · Bizdavar ecosystem'
        },
        audience: {
          eyebrow: 'Who it is for',
          title: 'Built for the same FXGuard teams',
          desc: 'Exchange desks, finance teams, and SMEs that need focused accounting next to WhatsApp operations.',
          items: [
            { icon: 'chart-line', title: 'Exchange & remittance desks', desc: 'Record and track financial ops beside the team inbox.' },
            { icon: 'briefcase', title: 'SME finance teams', desc: 'Clear accounting flows for growing businesses.' },
            { icon: 'building', title: 'Multi-branch holdings', desc: 'Separate roles and access for branch accounting.' },
            { icon: 'users', title: 'Alongside WhatsApp CRM', desc: 'Same FXGuard suite — sales, support, and finance together.' }
          ]
        },
        features: {
          eyebrow: 'Capabilities (roadmap)',
          title: 'What will it cover?',
          desc: 'Accounting is designed to close the ops loop for exchange and support teams — not a generic standalone ledger.',
          items: [
            { icon: 'document', title: 'Financial workflows', desc: 'Record and track financial operations for exchange and SME teams.' },
            { icon: 'shield', title: 'Role-based access', desc: 'Control accounting staff access with clear roles.' },
            { icon: 'inbox', title: 'Aligned with WhatsApp CRM', desc: 'Sits beside WhatsApp CRM for sales and support.' },
            { icon: 'building', title: 'Dedicated deployment', desc: 'Install and customize for holdings and financial businesses.' },
            { icon: 'lock', title: 'Enterprise security', desc: 'Aligned with 2FA and FXGuard suite roles.' },
            { icon: 'globe', title: 'Multilingual', desc: 'Persian, Turkish, English, Arabic, and Russian support.' }
          ]
        },
        steps: {
          eyebrow: 'Waitlist',
          title: 'How to stay informed',
          items: [
            { num: '01', title: 'See CRM today', desc: 'The live WhatsApp CRM demo is ready at app.fxguard.io.' },
            { num: '02', title: 'Join the waitlist', desc: 'Message on WhatsApp that you want Accounting updates.' },
            { num: '03', title: 'Early-access priority', desc: 'When it launches, sales coordinates with waitlist teams first.' }
          ]
        },
        faq: {
          eyebrow: 'Questions',
          title: 'Accounting FAQ',
          items: [
            { q: 'Is Accounting available to buy now?', a: 'Not yet — it is on the FXGuard suite roadmap and the waitlist is open. WhatsApp CRM is available today from $49/mo.' },
            { q: 'How does it relate to CRM?', a: 'Both are FXGuard suite products; Accounting is designed for the same exchange/finance teams beside WhatsApp ops.' },
            { q: 'How do I join the waitlist?', a: 'Message sales on WhatsApp (+90 501 067 6486) or the Bizdavar contact form and mention Accounting.' }
          ]
        },
        cta: {
          title: 'CRM today · Accounting soon',
          desc: 'Try the WhatsApp CRM demo first; stay on the waitlist for Accounting — <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a>.',
          crm: 'WhatsApp CRM',
          waitlist: 'WhatsApp waitlist',
          store: 'fxguard.io'
        },
        geoText: 'FXGuard Accounting — FXGuard suite accounting for exchange and SME teams · built by Bizdavar.'
      },

      bzDiamond: {
        hero: { tag: 'Web design case study', title: 'BZ Diamond — Website and online store design', desc: 'Client project in jewelry and diamonds — design, development and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>BZ Diamond</strong> is a Bizdavar Group client focused on online diamond and jewelry sales. We designed and implemented the website, WooCommerce store, email infrastructure and technical support. This page is a <strong>web design case study</strong>, not part of Bizdavar’s industrial business.', servicesTitle: 'Services delivered by Bizdavar', services: ['Corporate and e-commerce website design and development', 'WooCommerce implementation — online diamond and jewelry sales', 'Corporate email management and configuration (domain and mailboxes)', 'SEO, content structure and product page optimization', 'RTL and multilingual interface (Persian / English)', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'BZ Diamond operates in GIA and lab-grown diamonds and jewelry selection education. Product and pricing details are published on the client’s official website.', challengeTitle: 'Project challenge', challenge: 'Need a trustworthy diamond/jewelry store with Persian/English RTL, product SEO, and secure corporate email — with ongoing support after launch.', resultsTitle: 'Results', result1: 'WooCommerce store with catalog and conversion pages', result2: 'Domain email and ongoing maintenance', result3: 'SEO and multilingual foundation for the target market', ctaSite: 'View the BZ Diamond website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for Iranian and international brands — WooCommerce, SEO and support from offices in Iran, Turkey, Armenia and Dubai.'
      },
      supplifyTrade: {
        hero: { tag: 'Web design case study', title: 'Supplify Trade — International trade website', desc: 'UAE (RAKEZ) B2B client project — corporate web design, SEO and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>Supplify Trade FZ-LLC</strong> is a Bizdavar Group client — a RAKEZ-licensed international trade and sourcing company in Ras Al Khaimah, UAE. We designed and implemented the corporate website, content structure, foundational SEO and technical support. This page is a <strong>web design case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['B2B corporate website design and development', 'Multi-section UI (services, industries, process, contact)', 'Foundational SEO, content structure and conversion pages (RFQ)', 'Mobile and performance optimization', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'Supplify Trade FZ-LLC operates in international sourcing, procurement, quality control and logistics — construction materials, industrial goods, agricultural equipment and automotive spare parts. Service and quotation details are published on the client’s official website.', ctaSite: 'View the Supplify Trade website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for international trading companies in the UAE and Middle East — Bizdavar Group.'
      },
      kayaOne: {
        hero: { tag: 'Web design case study', title: 'Kaya One AG — Swiss trade website', desc: 'Switzerland B2B client project — corporate web design, SEO and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>Kaya One AG</strong> is a Bizdavar Group client — a Swiss-registered trading and industrial solutions company in Brunnen, Canton of Schwyz (UID: CHE-351.641.458). We designed and implemented the corporate website, content structure, foundational SEO and technical support. This page is a <strong>web design case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['B2B corporate website design and development', 'Multi-section UI (services, industries, about, contact)', 'Foundational SEO, content structure and conversion pages', 'Mobile and performance optimization', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'Kaya One AG operates in international trade, heavy equipment and logistics — agricultural and food products, metals and steel, trucks and industrial machinery. Service details are published on the client’s official website.', challengeTitle: 'Project challenge', challenge: 'A Swiss trading company needed a multi-section B2B site that builds European trust, clarifies services/industries, and shortens the inquiry path.', resultsTitle: 'Results', result1: 'Corporate site structured around services, industries, and contact', result2: 'Foundational SEO and mobile optimization for international traffic', result3: 'Ongoing technical maintenance by Bizdavar', ctaSite: 'View the Kaya One AG website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for Swiss and international trading companies — Bizdavar Group.'
      },
      smmTurk: {
        hero: { tag: 'Web design case study', title: 'SMM Turk — SMM panel and website design', desc: 'Turkey client project — panel UI, website and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>SMM Turk</strong> is a Bizdavar Group client — an SMM panel platform for social growth with competitive pricing, 24/7 automated delivery and affiliate / reseller programs. We designed and implemented the website and panel experience, content structure, foundational SEO and technical support. This page is a <strong>web design case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['SMM website and user panel design', 'Login, signup and dashboard UI', 'Foundational SEO, content structure and conversion pages', 'Mobile and performance optimization', 'Technical support, updates and maintenance'], clientTitle: 'Client field of activity', clientBody: 'SMM Turk provides a social media services panel — automated orders, crypto payments (BTC, ETH, USDT), reseller panel and API. Pricing and service details are published on the client’s official website.', challengeTitle: 'Project challenge', challenge: 'A Turkey SMM panel needed clear UI for signup, dashboard, and conversion pages — with mobile focus and signup rate in mind.', resultsTitle: 'Results', result1: 'Website and panel login/dashboard flow', result2: 'Conversion pages and foundational SEO for Turkish traffic', result3: 'Post-launch technical support and updates', ctaSite: 'View the SMM Turk website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for SMM panels in Turkey and international markets — Bizdavar Group.'
      },
      marviSociety: {
        hero: { tag: 'iOS app case study', title: 'Marvi Society — invite-only iOS club for Istanbul', desc: 'Zero-to-launch iOS design and development — connecting verified creators with Istanbul venues; live on the App Store' },
        about: { title: 'About the project', body: '<strong>Marvi Society</strong> is a Bizdavar Group mobile case study — an invite-only iOS app that connects verified creators with approved Istanbul venues. Discover events and places, request collaborations, check in, submit visit proof, manage venues and TR/EN profiles. This page is an <strong>iOS app case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['iOS product and UI/UX design', 'Mobile app architecture and development', 'Discover, invite, check-in and visit-proof flows', 'Venue, campaign and notification management', 'App Store launch and post-release support'], clientTitle: 'Product field of activity', clientBody: 'Marvi Society is an invite-only lifestyle club in Istanbul — matching creators with restaurants, nightlife, wellness and beauty venues. Product details are published on the website and App Store page.', challengeTitle: 'Project challenge', challenge: 'An invite-only app to connect creators and venues in Istanbul — with event discovery, invite management, check-in and visit proof, ready for App Store release.', resultsTitle: 'Results', result1: 'iOS app live on the App Store', result2: 'End-to-end discover, collab and venue management flow', result3: 'Dark visual identity with TR/EN experience', ctaAppStore: 'View on the App Store', ctaSite: 'Marvi Society website', ctaOrder: 'Order a similar app', ctaPortfolio: 'Other case studies' },
        shots: { discover: 'Discover events', events: 'Events and invites', profile: 'Creator profile' },
        geoText: 'iOS app case study for Istanbul and international markets — from design to App Store launch by Bizdavar Group.'
      },
      fxguardExchange: {
        hero: { tag: 'Fintech case study', title: 'FXGuard Exchange — Toman–Lira exchange platform', desc: 'Iran ↔ Turkey currency exchange web app — live rates, tracked orders, KYC and step-by-step settlement by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>FXGuard Exchange</strong> is a specialized Toman–Lira exchange platform designed and developed by Bizdavar Group — focused on the <strong>IRR ↔ TRY</strong> corridor with transparent reference rates, unique order IDs, KYC, a conversion calculator, live rate tables and step-by-step tracking through settlement. This page is a <strong>web and fintech case study</strong> and is separate from the WhatsApp CRM script product.', servicesTitle: 'Services delivered by Bizdavar', services: ['Currency exchange web app design (Persian RTL)', 'Live rates dashboard, conversion calculator and currency tables', 'Order registration, ID-based tracking and KYC flow', 'Light/dark theme, rate-page SEO and content structure', 'Account security (login, 2FA) and order-linked support'], clientTitle: 'Product field of activity', clientBody: 'FXGuard Exchange is specialized Toman–Lira infrastructure for the Iran–Turkey corridor. Live orders currently run on IRR ↔ TRY only; other currencies (USD, EUR, AED…) are shown as price references — not a crypto market.', ctaSite: 'View FXGuard Exchange', ctaCrm: 'WhatsApp CRM script', ctaPortfolio: 'Other case studies' },
        geoText: 'Fintech design case study for the Iran ↔ Turkey corridor — built by Bizdavar Group.'
      }
    }
  };

  const articleSlugs = [
    'website-design-us-eu',
    'digital-marketing-us-eu',
    'buy-vegapuls-iran',
    'vega-quote-iran',
    'buy-prosense-iran',
    'industrial-trade-iran',
    'buy-teltonika-iran',
    'buy-gamak-iran',
    'buy-digi-system-iran',
    'buy-teraoka-iran',
    'vega-supply-iran',
    'multilingual-web-iran-turkey',
    'what-is-digital-marketing',
    'digital-marketing',
    'social-media-management',
    'fast-studio',
    'industrial-sensors',
    'about-bizdavar-group',
    'website-speed-5-days',
    'custom-web-app-development'
  ];

  const articleCta = {
    fa: { text: 'برای مشاوره تخصصی با بیزدوار تماس بگیرید.', btnPrimary: 'مشاوره رایگان', btnSecondary: 'مشاهده خدمات' },
    tr: { text: 'Uzman danışmanlık için Bizdavar ile iletişime geçin.', btnPrimary: 'Ücretsiz danışmanlık', btnSecondary: 'Hizmetleri gör' },
    en: { text: 'Contact Bizdavar for expert consulting.', btnPrimary: 'Free consultation', btnSecondary: 'View services' },
    ru: { text: 'Свяжитесь с Bizdavar для экспертной консультации.', btnPrimary: 'Бесплатная консультация', btnSecondary: 'Услуги' },
    ar: { text: 'تواصل مع Bizdavar للاستشارة المتخصصة.', btnPrimary: 'استشارة مجانية', btnSecondary: 'عرض الخدمات' }
  };

  const articleDates = {
    'vega-supply-iran': { iso: '2026-07-29', fa: '۱۴۰۵/۰۵/۰۷', en: 'Jul 29, 2026', tr: '29 Tem 2026', ru: '29 июл 2026', ar: '29 يوليو 2026' },
    'multilingual-web-iran-turkey': { iso: '2026-07-29', fa: '۱۴۰۵/۰۵/۰۷', en: 'Jul 29, 2026', tr: '29 Tem 2026', ru: '29 июл 2026', ar: '29 يوليو 2026' },
    'what-is-digital-marketing': { iso: '2025-02-10', fa: '۱۴۰۳/۱۱/۲۱', en: 'Feb 10, 2025', tr: '10 Şub 2025', ru: '10 фев 2025', ar: '10 فبراير 2025' },
    'digital-marketing': { iso: '2025-04-01', fa: '۱۴۰۴/۰۱/۱۲', en: 'Apr 1, 2025', tr: '1 Nis 2025', ru: '1 апр 2025', ar: '1 أبريل 2025' },
    'social-media-management': { iso: '2025-03-05', fa: '۱۴۰۳/۱۲/۱۵', en: 'Mar 5, 2025', tr: '5 Mar 2025', ru: '5 мар 2025', ar: '5 مارس 2025' },
    'fast-studio': { iso: '2026-08-13', fa: '۱۴۰۵/۰۵/۲۲', en: 'Aug 13, 2026', tr: '13 Ağu 2026', ru: '13 авг 2026', ar: '13 أغسطس 2026' },
    'industrial-sensors': { iso: '2025-03-20', fa: '۱۴۰۳/۱۲/۳۰', en: 'Mar 20, 2025', tr: '20 Mar 2025', ru: '20 мар 2025', ar: '20 مارس 2025' },
    'about-bizdavar-group': { iso: '2025-06-01', fa: '۱۴۰۴/۰۳/۱۱', en: 'Jun 1, 2025', tr: '1 Haz 2025', ru: '1 июн 2025', ar: '1 يونيو 2025' },
    'website-speed-5-days': { iso: '2026-08-13', fa: '۱۴۰۵/۰۵/۲۲', en: 'Aug 13, 2026', tr: '13 Ağu 2026', ru: '13 авг 2026', ar: '13 أغسطس 2026' },
    'custom-web-app-development': { iso: '2026-08-13', fa: '۱۴۰۵/۰۵/۲۲', en: 'Aug 13, 2026', tr: '13 Ağu 2026', ru: '13 авг 2026', ar: '13 أغسطس 2026' }
  };

  function articleDateDisplay(lang, slug) {
    const d = articleDates[slug];
    const brand = lang === 'fa' ? 'بیزدوار گروپ' : 'Bizdavar Group';
    if (!d) return brand + ' · <time>2025</time>';
    const display = d[lang] || d.en;
    return brand + ' · <time datetime="' + d.iso + '">' + display + '</time>';
  }

  function asArticles(lang) {
    const cta = articleCta[lang] || articleCta.en;
    return articleSlugs.reduce((acc, slug, i) => {
      const row = blogPosts[lang][i] || blogPosts.en[i] || blogPosts.en[0];
      acc[slug] = {
        category: row[2],
        title: row[0],
        dateDisplay: articleDateDisplay(lang, slug),
        cta: cta
      };
      return acc;
    }, {});
  }

  const galleryPage = {
    fa: {
      hero: {
        tag: 'گالری بیزدوار',
        title: 'تصاویر تولید، تحقیق و نمایشگاه',
        desc: 'خط تولید، آزمایشگاه، محصولات و حضور در نمایشگاه‌ها — از مرکز رشد دانشگاه تبریز تا غرفه ایمن سهند پدیده.'
      },
      filters: { all: 'همه', exhibition: 'نمایشگاه', rd: 'تحقیق و توسعه', production: 'خط تولید', products: 'محصولات' },
      filterAria: 'فیلتر گالری',
      countText: '{count} تصویر',
      empty: 'در این دسته هنوز تصویری نیست.',
      close: 'بستن',
      related: 'مشاهده صفحه مرتبط',
      relatedTitle: 'صفحات مرتبط',
      relatedAbout: 'پارک علمی، نمایشگاه‌ها و دستاوردها',
      relatedBizpet: 'پد حرارتی بیز پت',
      relatedProducts: 'سخت‌افزار و خطوط تولید',
      relatedContact: 'مشاوره و استعلام',
      relatedGamak: 'تامین الکتروموتور صنعتی',
      geoText: 'تصاویر واقعی از نمایشگاه، تولید و تحقیق تیم بیزدوار در تبریز.',
      ctaFromAbout: 'گالری تصاویر نمایشگاه و تولید',
      items: {
        'expo-imen-booth': { caption: 'غرفه ایمن سهند پدیده — پدهای حرارتی روی میز نمایشگاه', alt: 'غرفه نمایشگاهی ایمن سهند پدیده با پدهای حرارتی سیاه روی میز' },
        'expo-team-bizdavar': { caption: 'تیم بیزدوار در غرفه نمایشگاه — بنر Bizdavar', alt: 'سه نفر در غرفه نمایشگاه با بنر بیزدوار و ایمن سهند پدیده' },
        'expo-team-imen': { caption: 'نمایندگان ایمن سهند پدیده در نمایشگاه', alt: 'سه نفر در غرفه ایمن سهند پدیده با پرچم ایران' },
        'expo-tabrizu': { caption: 'مرکز رشد و نوآوری دانشگاه تبریز', alt: 'غرفه مرکز رشد و نوآوری دانشگاه تبریز' },
        'bizpet-expo': { caption: 'نمایش پد حرارتی پدیده در غرفه نمایشگاه', alt: 'غرفه نمایشگاهی با پدهای حرارتی پدیده' },
        'bizpet-production': { caption: 'مونتاژ و تولید پد حرارتی', alt: 'خط تولید پد حرارتی بیز پت' },
        'bizpet-rd-high': { caption: 'آزمایش حرارتی در آزمایشگاه', alt: 'آزمایش دمای پد حرارتی در آزمایشگاه' },
        'bizpet-rd-temp': { caption: 'اندازه‌گیری دما روی نمونه آزمایشگاهی', alt: 'اندازه‌گیری دمای پد حرارتی' },
        'bizpet-prototype': { caption: 'نمونه اولیه پد حرارتی', alt: 'نمونه اولیه پد حرارتی بیز پت' },
        'bizpet-element': { caption: 'المان حرارتی داخل پد', alt: 'المان حرارتی پد پدیده' },
        'bizpet-military-vest': { caption: 'تحقیق پوشش حرارتی برای لباس', alt: 'جلیقه با لایه حرارتی در مرحله تحقیق' },
        'bizpet-military-lining': { caption: 'لایه حرارتی دوخته‌شده در پوشش', alt: 'لایه حرارتی داخل پوشش' },
        'bizpet-military-outdoor': { caption: 'آزمایش میدانی پوشش حرارتی', alt: 'آزمایش پوشش حرارتی در فضای باز' },
        'bizpet-dryer': { caption: 'طرح تحقیق خشک‌کن میوه با المان حرارتی', alt: 'طرح سه‌بعدی سبد خشک‌کن میوه' },
        'bizpet-grey': { caption: 'BizPet — پد حرارتی خاکستری', alt: 'پد حرارتی بیز پت خاکستری' },
        'bizpet-tan': { caption: 'BizPet — پد حرارتی کرم', alt: 'پد حرارتی بیز پت کرم' },
        'bizpet-pets': { caption: 'برگه معرفی کاربرد پد برای حیوانات خانگی', alt: 'پوستر BizPet برای جای خواب حیوانات' },
        'motor-housings': { caption: 'پوسته‌های الکتروموتور در مرحله مونتاژ', alt: 'چند پوسته الکتروموتور روی کف کارگاه' },
        'motor-stator-pair': { caption: 'سیم‌پیچی مسی داخل پوسته موتور', alt: 'دو استاتور الکتروموتور با سیم‌پیچی مسی' },
        'motor-stator-wind': { caption: 'سیم‌پیچی استاتور الکتروموتور', alt: 'استاتور با کلاف مسی در حال سیم‌پیچی' },
        'motor-stators-bench': { caption: 'استاتورها روی میز مونتاژ', alt: 'چند استاتور الکتروموتور روی میز کار' },
        'motor-stators-leads': { caption: 'استاتور با سیم‌های خروجی آماده اتصال', alt: 'استاتورهای پیچیده با سیم قرمز و زرد' },
        'motor-shaft': { caption: 'شفت ماشین‌کاری‌شده موتور', alt: 'شفت فلزی الکتروموتور روی کف کارگاه' },
        'motor-rotor': { caption: 'روتور و یاتاقان روی پوسته موتور', alt: 'روتور الکتروموتور با یاتاقان روی پوسته' },
        'motor-parts': { caption: 'قطعات ریخته‌گری و جعبه ترمینال', alt: 'قطعات الکتروموتور روی پالت چوبی' },
        'motor-machining': { caption: 'ماشین‌کاری پوسته الکتروموتور', alt: 'سوراخ‌کاری پوسته موتور روی گیره ماشین' },
        'motor-molds': { caption: 'قالب ریخته‌گری پوسته موتور', alt: 'قالب‌های ریخته‌گری پوسته الکتروموتور' },
        'motor-finished-row': { caption: 'الکتروموتورهای مونتاژشده', alt: 'ردیف موتورهای صنعتی مونتاژشده' },
        'motor-vibrator-orange': { caption: 'موتور ویبره صنعتی', alt: 'موتور ویبره صنعتی نارنجی روی میز کار' },
        'motor-vibrator-weights': { caption: 'وزنه‌های خارج از مرکز موتور ویبره', alt: 'موتور ویبره نارنجی با وزنه روی شفت' }
      }
    },
    tr: {
      hero: {
        tag: 'Bizdavar galerisi',
        title: 'Üretim, Ar-Ge ve fuar görselleri',
        desc: 'Üretim hattı, laboratuvar, ürünler ve fuar standları — Tebriz Üniversitesi kuluçka merkezinden Imen Sahand Padideh standına.'
      },
      filters: { all: 'Tümü', exhibition: 'Fuar', rd: 'Ar-Ge', production: 'Üretim', products: 'Ürünler' },
      filterAria: 'Galeri filtresi',
      countText: '{count} görsel',
      empty: 'Bu kategoride henüz görsel yok.',
      close: 'Kapat',
      related: 'İlgili sayfayı gör',
      relatedTitle: 'İlgili sayfalar',
      relatedAbout: 'Teknopark, fuarlar ve başarılar',
      relatedBizpet: 'BizPet ısı pedi',
      relatedProducts: 'Donanım ve üretim hatları',
      relatedContact: 'Danışmanlık ve teklif',
      relatedGamak: 'Türkiye’den endüstriyel motor tedariki',
      geoText: 'Bizdavar ekibinin Tebriz’deki fuar, üretim ve Ar-Ge fotoğrafları.',
      ctaFromAbout: 'Fuar ve üretim galerisi',
      items: {
        'expo-imen-booth': { caption: 'Imen Sahand Padideh standı — ısı pedleri masada', alt: 'Fuar standında siyah ısı pedleri' },
        'expo-team-bizdavar': { caption: 'Bizdavar ekibi fuar standında', alt: 'Bizdavar ve Imen Sahand Padideh standında üç kişi' },
        'expo-team-imen': { caption: 'Imen Sahand Padideh temsilcileri fuarda', alt: 'Imen Sahand Padideh standında üç kişi ve İran bayrağı' },
        'expo-tabrizu': { caption: 'Tebriz Üniversitesi kuluçka ve inovasyon merkezi', alt: 'Tebriz Üniversitesi kuluçka merkezi standı' },
        'bizpet-expo': { caption: 'Padideh ısı pedinin fuarda sergilenmesi', alt: 'Fuar standında Padideh ısı pedleri' },
        'bizpet-production': { caption: 'Isı pedi montajı', alt: 'BizPet ısı pedi üretim hattı' },
        'bizpet-rd-high': { caption: 'Laboratuvarda ısıl test', alt: 'Laboratuvarda ısı pedi sıcaklık testi' },
        'bizpet-rd-temp': { caption: 'Numune üzerinde sıcaklık ölçümü', alt: 'Isı pedi sıcaklık ölçümü' },
        'bizpet-prototype': { caption: 'Isı pedi prototipi', alt: 'BizPet ısı pedi prototipi' },
        'bizpet-element': { caption: 'Ped içindeki ısıtıcı eleman', alt: 'Padideh ısıtıcı eleman' },
        'bizpet-military-vest': { caption: 'Giysi için ısıtmalı astar araştırması', alt: 'Isıtmalı astarlı yelek prototipi' },
        'bizpet-military-lining': { caption: 'Giysiye dikilmiş ısıtmalı katman', alt: 'Giysi içinde ısıtmalı astar' },
        'bizpet-military-outdoor': { caption: 'Isıtmalı giysinin saha testi', alt: 'Açık alanda ısıtmalı giysi testi' },
        'bizpet-dryer': { caption: 'Meyve kurutucu araştırma tasarımı', alt: 'Meyve kurutucu sepetinin 3B görseli' },
        'bizpet-grey': { caption: 'BizPet — gri ısı pedi', alt: 'Gri BizPet ısı pedi' },
        'bizpet-tan': { caption: 'BizPet — bej ısı pedi', alt: 'Bej BizPet ısı pedi' },
        'bizpet-pets': { caption: 'Evcil hayvan yatağı uygulaması', alt: 'BizPet evcil hayvan afişi' },
        'motor-housings': { caption: 'Montaj aşamasındaki motor gövdeleri', alt: 'Atölye zemininde elektrik motoru gövdeleri' },
        'motor-stator-pair': { caption: 'Motor gövdesinde bakır sargı', alt: 'Bakır sargılı iki motor statoru' },
        'motor-stator-wind': { caption: 'Elektrik motoru stator sargısı', alt: 'Bakır bobinlerle sarılan stator' },
        'motor-stators-bench': { caption: 'Montaj tezgâhındaki statorlar', alt: 'İş tezgâhında elektrik motoru statorları' },
        'motor-stators-leads': { caption: 'Bağlantı kablolu statorlar', alt: 'Kırmızı ve sarı kablolu sarılmış statorlar' },
        'motor-shaft': { caption: 'İşlenmiş motor mili', alt: 'Atölye zemininde elektrik motoru mili' },
        'motor-rotor': { caption: 'Rotor ve rulman, motor gövdesinde', alt: 'Rulmanlı rotor motor gövdesinin üzerinde' },
        'motor-parts': { caption: 'Döküm parçalar ve klemens kutusu', alt: 'Ahşap palet üzerinde motor parçaları' },
        'motor-machining': { caption: 'Motor gövdesinin talaşlı imalatı', alt: 'Mengenede delinen motor gövdesi' },
        'motor-molds': { caption: 'Motor gövdesi döküm kalıpları', alt: 'Elektrik motoru gövde kalıpları' },
        'motor-finished-row': { caption: 'Montajı tamamlanmış elektrik motorları', alt: 'Sıralanmış endüstriyel motorlar' },
        'motor-vibrator-orange': { caption: 'Endüstriyel vibratör motoru', alt: 'Tezgâhta turuncu vibratör motoru' },
        'motor-vibrator-weights': { caption: 'Vibratör motorunun eksantrik ağırlıkları', alt: 'Şaftında ağırlık bulunan turuncu vibratör' }
      }
    },
    en: {
      hero: {
        tag: 'Bizdavar gallery',
        title: 'Production, R&D and exhibition photos',
        desc: 'Factory floor, lab work, products and trade-show booths — from the University of Tabriz incubator to the Imen Sahand Padideh stand.'
      },
      filters: { all: 'All', exhibition: 'Exhibitions', rd: 'R&D', production: 'Production', products: 'Products' },
      filterAria: 'Gallery filter',
      countText: '{count} photos',
      empty: 'No photos in this category yet.',
      close: 'Close',
      related: 'Open related page',
      relatedTitle: 'Related pages',
      relatedAbout: 'Science park, exhibitions and milestones',
      relatedBizpet: 'BizPet heating pad',
      relatedProducts: 'Hardware and production lines',
      relatedContact: 'Consulting and quotes',
      relatedGamak: 'Industrial motor supply from Turkey',
      geoText: 'Real photos of Bizdavar exhibitions, production and R&D in Tabriz.',
      ctaFromAbout: 'Exhibition and production gallery',
      items: {
        'expo-imen-booth': { caption: 'Imen Sahand Padideh booth — heating pads on display', alt: 'Exhibition booth with black heating pads on the table' },
        'expo-team-bizdavar': { caption: 'Bizdavar team at the exhibition booth', alt: 'Three people at the Bizdavar and Imen Sahand Padideh booth' },
        'expo-team-imen': { caption: 'Imen Sahand Padideh representatives at the show', alt: 'Three people at the Imen Sahand Padideh booth with the Iranian flag' },
        'expo-tabrizu': { caption: 'University of Tabriz Incubation and Innovation Center', alt: 'University of Tabriz incubation center booth' },
        'bizpet-expo': { caption: 'Padideh heating pads at the exhibition', alt: 'Exhibition booth showing Padideh heating pads' },
        'bizpet-production': { caption: 'Heating-pad assembly', alt: 'BizPet heating pad production' },
        'bizpet-rd-high': { caption: 'Thermal testing in the lab', alt: 'Heating pad temperature test in the laboratory' },
        'bizpet-rd-temp': { caption: 'Temperature reading on a lab sample', alt: 'Heating pad temperature measurement' },
        'bizpet-prototype': { caption: 'Heating pad prototype', alt: 'BizPet heating pad prototype' },
        'bizpet-element': { caption: 'Heating element inside the pad', alt: 'Padideh heating element' },
        'bizpet-military-vest': { caption: 'Heated-clothing research vest', alt: 'Vest with a heating lining in R&D' },
        'bizpet-military-lining': { caption: 'Heating layer sewn into a garment', alt: 'Heating lining inside a garment' },
        'bizpet-military-outdoor': { caption: 'Outdoor test of heated clothing', alt: 'Heated clothing field test' },
        'bizpet-dryer': { caption: 'Fruit-dryer research concept', alt: '3D render of a fruit-dryer basket' },
        'bizpet-grey': { caption: 'BizPet — grey heating pad', alt: 'Grey BizPet heating pad' },
        'bizpet-tan': { caption: 'BizPet — tan heating pad', alt: 'Tan BizPet heating pad' },
        'bizpet-pets': { caption: 'Pet-bed application flyer', alt: 'BizPet pet-bed poster' },
        'motor-housings': { caption: 'Electric motor housings in assembly', alt: 'Electric motor housings on the workshop floor' },
        'motor-stator-pair': { caption: 'Copper windings inside the motor housing', alt: 'Two motor stators with copper windings' },
        'motor-stator-wind': { caption: 'Stator winding for an electric motor', alt: 'Stator with copper coils during winding' },
        'motor-stators-bench': { caption: 'Stators on the assembly bench', alt: 'Electric motor stators on a workbench' },
        'motor-stators-leads': { caption: 'Wound stators with connection leads', alt: 'Stators with red and yellow lead wires' },
        'motor-shaft': { caption: 'Machined motor shaft', alt: 'Electric motor shaft on the workshop floor' },
        'motor-rotor': { caption: 'Rotor and bearing on a motor housing', alt: 'Motor rotor with a bearing on the housing' },
        'motor-parts': { caption: 'Cast parts and a terminal box', alt: 'Electric motor parts on a wooden pallet' },
        'motor-machining': { caption: 'Machining a motor housing', alt: 'Drilling a motor housing in a machine vise' },
        'motor-molds': { caption: 'Casting molds for motor housings', alt: 'Molds for electric motor housings' },
        'motor-finished-row': { caption: 'Assembled electric motors', alt: 'Rows of assembled industrial motors' },
        'motor-vibrator-orange': { caption: 'Industrial vibrator motor', alt: 'Orange industrial vibrator motor on a bench' },
        'motor-vibrator-weights': { caption: 'Eccentric weights on a vibrator motor', alt: 'Orange vibrator motor with shaft weights' }
      }
    }
  };

  ['fa', 'tr', 'en'].forEach(lang => {
    if (!window.BIZDAVAR_LOCALES || !window.BIZDAVAR_LOCALES[lang]) return;
    if (page[lang].fastPage) {
      page[lang].fastPage.hostingNote = fastHostingNote[lang];
      page[lang].fastPage.ui = fastPageUi[lang];
      page[lang].fastPage.relatedLinks = fastRelatedLinks[lang];
      page[lang].fastPage.schema = fastSchema[lang];
    }
    Object.assign(window.BIZDAVAR_LOCALES[lang], page[lang], {
      galleryPage: galleryPage[lang],
      blogPosts: asBlogRows(blogPosts[lang]),
      caseStudy: caseStudy[lang],
      articles: asArticles(lang)
    });
  });

  window.BIZDAVAR_ARTICLE_META = {
    slugs: articleSlugs,
    dates: articleDates,
    cta: articleCta
  };
})();
