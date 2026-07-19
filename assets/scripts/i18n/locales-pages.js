/**
 * Page-level translations for subpages and JS-rendered content.
 */
(function () {
  const serviceBlocks = {
    fa: [
      { title: 'بازاریابی دیجیتال', subtitle: 'Digital Marketing · استراتژی و اجرای کمپین', body: 'در بیزدوار گروپ، با اجرای استراتژی‌های نوین بازاریابی دیجیتال، نرخ تبدیل مشتریان را به‌طور قابل‌توجهی افزایش می‌دهیم. مطلب مرتبط: <a href="articles/digital-marketing">چگونه دیجیتال مارکتینگ فروش را افزایش می‌دهد؟</a>', tags: ['Google Ads', 'سئو', 'CRO', 'اتوماسیون'], checks: ['تحلیل رقبا و بازار هدف', 'کمپین‌های تبلیغاتی Google و شبکه‌های اجتماعی', 'بهینه‌سازی نرخ تبدیل (CRO)', 'اتوماسیون بازاریابی و ایمیل مارکتینگ', 'گزارش‌دهی و تحلیل عملکرد'], cta: 'درخواست مشاوره' },
      { title: 'طراحی و توسعه وب', subtitle: 'Web Design · Fast Web Studio', body: 'طراحی سایت شرکتی، فروشگاه اینترنتی، لندینگ پیج و پنل‌های اختصاصی با تحویل سریع از طریق <a href="fast">Fast Web Studio</a>.', tags: ['ریسپانسیو', 'WooCommerce', 'سئو پایه', '۵ روز تحویل'], checks: ['طراحی ریسپانسیو با فونت فارسی Vazirmatn', 'فروشگاه WooCommerce و درگاه پرداخت', 'سئو پایه و بهینه‌سازی سرعت', 'اتصال واتساپ و <a href="contact">فرم تماس</a>', 'آموزش مدیریت و پشتیبانی', '<a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a> — نمونه‌کار طراحی وب B2B'], cta: 'مشاهده پلن‌های Fast Studio' },
      { title: 'مدیریت شبکه‌های اجتماعی (SMM)', subtitle: 'Social Media · محتوا و تبلیغات', body: 'تولید محتوا، مدیریت صفحات، تبلیغات هدفمند در <a href="https://www.instagram.com/bizdavar" target="_blank" rel="noopener noreferrer me">اینستاگرام</a>، <a href="https://www.linkedin.com/in/ersanjt" target="_blank" rel="noopener noreferrer me">لینکدین</a> و سایر پلتفرم‌ها.', tags: ['تقویم محتوا', 'Paid Social', 'طراحی گرافیک'], checks: ['تقویم محتوایی ماهانه', 'طراحی گرافیک و ویدیو', 'مدیریت تبلیغات Paid Social', 'گزارش رشد و تعامل'], cta: 'شروع همکاری SMM' },
      { title: 'تامین تجهیزات صنعتی', subtitle: 'Industrial Supply · VEGA · Prosense · Gamak', body: 'تامین اصل VEGA، Prosense و Gamak برای پروژه‌های B2B — سنسور، دتکتور گاز، الکتروموتور، GPS و تجهیزات فروشگاهی. کاتالوگ: <a href="vega">VEGA</a> · <a href="prosense">Prosense</a> · <a href="gamak">Gamak</a> · <a href="teltonika">Teltonika</a>.', tags: ['SIL2/3', 'لجستیک', 'مشاوره فنی'], checks: ['<a href="vega">VEGA</a> — VEGAPULS 6X، VEGABAR، VEGAPOINT', '<a href="prosense">Prosense</a> — PQ، SafeVader، SOMA، PPS+', '<a href="gamak">Gamak</a> — IE2/IE3/IE4، Ex-proof، فشار متوسط', '<a href="teltonika">Teltonika</a> — FMB920، FMC650، Fleet Telematics', '<a href="digi-system">Digi System</a> — POS و تجهیزات خرده‌فروشی', '<a href="teraoka">Teraoka</a> — ترازو و تجهیزات فروشگاهی', 'مشاوره فنی و انتخاب مدل', 'پیش‌فاکتور شفاف و لجستیک بین‌المللی'], cta: 'استعلام قیمت تجهیزات' }
    ],
    tr: [
      { title: 'Dijital pazarlama', subtitle: 'Digital Marketing · Strateji ve kampanya yönetimi', body: 'Bizdavar Group modern dijital pazarlama stratejileriyle dönüşüm oranını ve online satışı artırır. İlgili yazı: <a href="articles/digital-marketing">Dijital pazarlama satışları nasıl artırır?</a>', tags: ['Google Ads', 'SEO', 'CRO', 'Otomasyon'], checks: ['Rakip ve hedef kitle analizi', 'Google ve sosyal medya kampanyaları', 'Dönüşüm oranı optimizasyonu (CRO)', 'Pazarlama otomasyonu ve e-posta', 'Performans raporlama ve analiz'], cta: 'Danışmanlık iste' },
      { title: 'Web tasarım ve geliştirme', subtitle: 'Web Design · Kurumsal site, e-ticaret ve landing', body: 'Kurumsal web sitelerinden WooCommerce mağazalara ve kampanya landing sayfalarına kadar hız, UX, SEO ve dönüşüm odaklı geliştirme. Hızlı teslim için <a href="fast">Fast Web Studio</a>’yu inceleyin.', tags: ['WordPress', 'WooCommerce', 'Landing', 'SEO'], checks: ['Responsive UI/UX tasarımı', 'Kurumsal veya e-ticaret site kurulumu', 'İletişim formu, WhatsApp ve sosyal ağ bağlantıları', 'Hız, güvenlik ve SSL optimizasyonu', 'Site yönetimi eğitimi'], cta: 'Web tasarım planlarını gör' },
      { title: 'SMM yönetimi', subtitle: 'Social Media Management · İçerik, reklam ve büyüme', body: 'Sosyal medyada profesyonel görünmek isteyen markalar için içerik takvimi, tasarım, metin, kampanya ve büyüme raporu.', tags: ['Instagram', 'LinkedIn', 'Content', 'Ads'], checks: ['İçerik stratejisi ve yayın takvimi', 'Post ve story tasarımı', 'Türkçe, Farsça ve İngilizce metin yazımı', 'Hedefli reklam ve kampanya', 'Aylık rapor ve iyileştirme önerisi'], cta: 'SMM iş birliğine başla' },
      { title: 'Endüstriyel ekipman tedariki', subtitle: 'Industrial Supply · VEGA · Prosense · Gamak', body: 'VEGA, Prosense ve Gamak orijinal tedariki — sensör, gaz dedektörü, elektrik motoru, GPS ve perakende ekipmanı. Katalog: <a href="vega">VEGA</a> · <a href="prosense">Prosense</a> · <a href="gamak">Gamak</a> · <a href="teltonika">Teltonika</a>.', tags: ['SIL2/3', 'Lojistik', 'Teknik danışmanlık'], checks: ['<a href="vega">VEGA</a> — VEGAPULS 6X, VEGABAR, VEGAPOINT', '<a href="prosense">Prosense</a> — PQ, SafeVader, SOMA, PPS+', '<a href="gamak">Gamak</a> — IE2/IE3/IE4, Ex-proof, orta gerilim', '<a href="teltonika">Teltonika</a> — FMB920, FMC650, Fleet Telematics', '<a href="digi-system">Digi System</a> — POS ve perakende', '<a href="teraoka">Teraoka</a> — terazi ve mağaza sistemleri', 'Teknik danışmanlık ve model seçimi', 'Şeffaf proforma ve uluslararası lojistik'], cta: 'Ekipman teklifi iste' }
    ],
    en: [
      { title: 'Digital marketing', subtitle: 'Digital Marketing · Strategy and campaign delivery', body: 'Bizdavar Group increases conversion and online sales through modern digital marketing strategies. Related article: <a href="articles/digital-marketing">How digital marketing increases sales</a>.', tags: ['Google Ads', 'SEO', 'CRO', 'Automation'], checks: ['Competitor and audience analysis', 'Google and social media campaigns', 'Conversion rate optimization (CRO)', 'Marketing automation and email', 'Performance reporting and analysis'], cta: 'Request consulting' },
      { title: 'Web design and development', subtitle: 'Web Design · Corporate, e-commerce and landing pages', body: 'From corporate sites to WooCommerce stores and landing pages, we build for speed, UX, SEO and conversion. For fast delivery, see <a href="fast">Fast Web Studio</a>.', tags: ['WordPress', 'WooCommerce', 'Landing', 'SEO'], checks: ['Responsive UI/UX design', 'Corporate or e-commerce implementation', 'Contact form, WhatsApp and social links', 'Speed, security and SSL optimization', 'Website management training'], cta: 'View web design plans' },
      { title: 'SMM management', subtitle: 'Social Media Management · Content, ads and growth', body: 'Content calendar, post design, captions, campaigns and growth reporting for brands that want a professional social media presence.', tags: ['Instagram', 'LinkedIn', 'Content', 'Ads'], checks: ['Content strategy and publishing calendar', 'Post and story design', 'Persian, Turkish and English copywriting', 'Targeted ads and campaigns', 'Monthly reporting and improvement ideas'], cta: 'Start SMM cooperation' },
      { title: 'Industrial equipment supply', subtitle: 'Industrial Supply · VEGA · Prosense · Gamak', body: 'Genuine VEGA, Prosense and Gamak supply for B2B projects — level sensors, gas detectors, electric motors, GPS and retail equipment. Catalog: <a href="vega">VEGA</a> · <a href="prosense">Prosense</a> · <a href="gamak">Gamak</a> · <a href="teltonika">Teltonika</a>.', tags: ['SIL2/3', 'Logistics', 'Technical consulting'], checks: ['<a href="vega">VEGA</a> — VEGAPULS 6X, VEGABAR, VEGAPOINT', '<a href="prosense">Prosense</a> — PQ, SafeVader, SOMA, PPS+', '<a href="gamak">Gamak</a> — IE2/IE3/IE4, Ex-proof, medium voltage', '<a href="teltonika">Teltonika</a> — FMB920, FMC650, Fleet Telematics', '<a href="digi-system">Digi System</a> — POS and retail equipment', '<a href="teraoka">Teraoka</a> — scales and store systems', 'Technical consulting and model selection', 'Transparent proforma and international logistics'], cta: 'Request equipment quote' }
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
      digiSystemSub: 'Retail & POS',
      teraokaSub: 'Scales & retail'
    }
  };

  const servicesRelatedLinks = {
    fa: [
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: '۳۵ پروژه و برند', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'وبلاگ تخصصی', url: 'blog', desc: 'راهنما و مقالات', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ],
    tr: [
      { title: 'Fast Web Studio', url: 'fast', desc: '$99\'dan web tasarım', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'Portfolyo', url: 'portfolio', desc: '35 proje ve marka', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'Blog', url: 'blog', desc: 'Rehberler ve makaleler', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ],
    en: [
      { title: 'Fast Web Studio', url: 'fast', desc: 'Website design from $99', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'Portfolio', url: 'portfolio', desc: '35 projects and brands', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'Blog', url: 'blog', desc: 'Guides and articles', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ]
  };

  const fastRelatedLinks = {
    fa: [
      { title: 'مقاله Fast Studio', url: 'articles/fast-studio', desc: 'راهنمای سفارش' },
      { title: 'خدمات طراحی وب', url: 'services#web-design', desc: 'جزئیات خدمات' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
    ],
    tr: [
      { title: 'Fast Studio makalesi', url: 'articles/fast-studio', desc: 'Sipariş rehberi' },
      { title: 'Web tasarım hizmetleri', url: 'services#web-design', desc: 'Hizmet detayları' },
      { title: 'Portfolyo', url: 'portfolio', desc: 'Bizdavar projeleri' }
    ],
    en: [
      { title: 'Fast Studio article', url: 'articles/fast-studio', desc: 'Ordering guide' },
      { title: 'Web design services', url: 'services#web-design', desc: 'Service details' },
      { title: 'Portfolio', url: 'portfolio', desc: 'Bizdavar projects' }
    ]
  };

  const fastSchema = {
    fa: {
      description: 'طراحی سایت حرفه‌ای در ۵ روز — پلن‌های شفاف، واتساپ فارسی و پشتیبانی پس از راه‌اندازی.',
      offers: [
        { name: 'پلن پایه', price: '99' },
        { name: 'پلن فروشگاهی', price: '199' },
        { name: 'پلن حرفه‌ای', price: '299' }
      ]
    },
    tr: {
      description: '5 günde profesyonel web sitesi — şeffaf planlar, Türkçe WhatsApp danışmanlığı ve yayın sonrası destek.',
      offers: [
        { name: 'Temel plan', price: '99' },
        { name: 'Mağaza planı', price: '199' },
        { name: 'Pro plan', price: '299' }
      ]
    },
    en: {
      description: 'Professional website design in 5 days — transparent plans, WhatsApp consulting and post-launch support.',
      offers: [
        { name: 'Basic plan', price: '99' },
        { name: 'Store plan', price: '199' },
        { name: 'Pro plan', price: '299' }
      ]
    }
  };

  const portfolioRelatedLinks = {
    fa: [
      { title: 'خدمات ما', url: 'services', desc: 'دیجیتال و صنعتی' },
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت ۵ روزه' },
      { title: 'تماس', url: 'contact', desc: 'شروع پروژه جدید' }
    ],
    tr: [
      { title: 'Hizmetlerimiz', url: 'services', desc: 'Dijital ve endüstriyel' },
      { title: 'Fast Web Studio', url: 'fast', desc: '5 günde web tasarım' },
      { title: 'İletişim', url: 'contact', desc: 'Yeni proje başlat' }
    ],
    en: [
      { title: 'Our services', url: 'services', desc: 'Digital and industrial' },
      { title: 'Fast Web Studio', url: 'fast', desc: '5-day website design' },
      { title: 'Contact', url: 'contact', desc: 'Start a new project' }
    ]
  };

  const fastHostingNote = {
    fa: {
      title: 'دامنه، هاست و SSL',
      text: 'برای جستجوی دامنه، هاست وب، WordPress و ایمیل — از زیرساخت <strong>Netinode</strong> (اکوسیستم بیزدوار) استفاده کنید.',
      cta: 'Netinode — خرید دامنه و هاست'
    },
    tr: {
      title: 'Domain, hosting ve SSL',
      text: 'Domain arama, web hosting, WordPress ve e-posta için <strong>Netinode</strong> altyapısını (Bizdavar ekosistemi) kullanın.',
      cta: 'Netinode — domain ve hosting'
    },
    en: {
      title: 'Domain, hosting & SSL',
      text: 'Search domains, web hosting, WordPress and business email on <strong>Netinode</strong> — trusted infrastructure in the Bizdavar ecosystem.',
      cta: 'Netinode — domains & hosting'
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
      oneTime: 'پرداخت یک‌باره', orderWa: 'سفارش در واتساپ', orContact: 'یا فرم تماس',
      compareFeature: 'امکانات', compareBasic: 'پایه', compareStore: 'فروشگاهی', comparePro: 'حرفه‌ای',
      viewCase: 'مشاهده', navAria: 'بخش‌های Fast Web Studio'
    },
    tr: {
      statDays: '5 gün', statDaysLabel: 'Standart teslimat',
      statPrice: '$99', statPriceLabel: 'Başlangıç fiyatı',
      statProjects: '100+', statProjectsLabel: 'Bizdavar projesi',
      viewPlans: 'Planları gör', consultWa: 'WhatsApp danışmanlık',
      btnDevConsult: 'Özel yazılım ve danışmanlık — iletişime geçin',
      navPlans: 'Planlar', navCompare: 'Karşılaştır', navTimeline: '5 günlük yol', navShowcase: 'Örnek işler', navFaq: 'SSS',
      oneTime: 'Tek seferlik ödeme', orderWa: 'WhatsApp sipariş', orContact: 'veya iletişim formu',
      compareFeature: 'Özellikler', compareBasic: 'Temel', compareStore: 'Mağaza', comparePro: 'Pro',
      viewCase: 'Görüntüle', navAria: 'Fast Web Studio bölümleri'
    },
    en: {
      statDays: '5 days', statDaysLabel: 'Standard delivery',
      statPrice: '$99', statPriceLabel: 'Starting price',
      statProjects: '100+', statProjectsLabel: 'Bizdavar projects',
      viewPlans: 'View plans', consultWa: 'Consult on WhatsApp',
      btnDevConsult: 'Custom development & consulting — contact us',
      navPlans: 'Plans', navCompare: 'Compare', navTimeline: '5-day path', navShowcase: 'Showcase', navFaq: 'FAQ',
      oneTime: 'One-time payment', orderWa: 'Order on WhatsApp', orContact: 'or contact form',
      compareFeature: 'Features', compareBasic: 'Basic', compareStore: 'Store', comparePro: 'Pro',
      viewCase: 'View', navAria: 'Fast Web Studio sections'
    }
  };

  const page = {
    fa: {
      aboutPage: { hero: { tag: 'درباره بیزدوار', title: 'شریک رشد کسب‌وکار در دیجیتال و صنعت', desc: 'از سال ۱۳۹۲ — ۱۰۰+ پروژه در ۱۱ کشور · بازاریابی، وب، فین‌تک و تامین صنعتی' }, whatIs: { title: 'بیزدوار گروپ چیست؟', p1: 'بیزدوار گروپ (Bizdavar Group) آژانس دیجیتال و تامین‌کننده B2B است که از سال ۲۰۱۳ توسط <strong>ارسان جاهد تبریزی</strong> راه‌اندازی شده. خدمات ما شامل <a href="services#digital-marketing">بازاریابی دیجیتال</a>، <a href="fast">طراحی وب</a>، پلتفرم‌های فین‌تک، مدیریت SMM و <a href="services#industrial">تامین تجهیزات صنعتی</a> است.', p2: 'بیش از ۱۰۰ پروژه وب و پلتفرم سفارشی در ۱۱ کشور — از ZedPay و Netinode تا Bear Event و تامین VEGA. زیرساخت دیجیتال، دامنه، هاست، SSL و پشتیبانی فنی نیز تحت مدیریت ما است. <a href="portfolio">مشاهده نمونه‌کارها</a>' }, features: ['بازاریابی دیجیتال', 'طراحی وب حرفه‌ای', 'تامین تجهیزات', 'مدیریت زیرساخت'], stats: [{ value: '۱۳+', label: 'سال تجربه' }, { value: '۱۰۰+', label: 'پروژه' }, { value: '۱۱', label: 'کشور' }, { value: '۴', label: 'محور خدمات' }], navAria: 'فهرست بخش‌های صفحه', nav: [{ href: '#profile', label: 'شناسنامه' }, { href: '#activities', label: 'تخصص‌ها' }, { href: '#ecosystem', label: 'اکوسیستم' }, { href: '#presence', label: 'حضور جهانی' }, { href: '#highlights', label: 'دستاوردها' }, { href: '#sources', label: 'منابع' }, { href: '#trust', label: 'اعتبار' }, { href: '#faq', label: 'سوالات' }], sections: { identityEyebrow: 'شناسنامه سازمانی', identityTitle: 'بیزدوار گروپ در یک نگاه', leadershipEyebrow: 'رهبری', leadershipTitle: 'بنیان‌گذار و تیم', activitiesEyebrow: 'دسته‌بندی فعالیت', activitiesTitle: 'حوزه‌های تخصصی', ecosystemEyebrow: 'اکوسیستم', ecosystemTitle: 'برندها و پروژه‌های مرتبط', ecosystemDesc: 'نمونه‌ای از اکوسیستم دیجیتال و صنعتی که بیزدوار در توسعه یا مدیریت آن نقش داشته', presenceEyebrow: 'حضور جهانی', presenceTitle: 'کشورهای فعال', presenceDesc: 'شبکه بین‌المللی پروژه‌ها — از استانبول و ایروان تا اروپا و آمریکا', exhibitionsEyebrow: 'نمایشگاه و رویداد', exhibitionsTitle: 'حضور در نمایشگاه‌های فناوری', exhibitionsDesc: 'رویدادهای نوآوری و تجاری‌سازی فناوری — از RINOTEX تبریز تا نمایشگاه‌های دانشگاهی', achievementsEyebrow: 'دستاوردها', achievementsTitle: 'محصولات و نوآوری‌های بیزدوار', achievementsDesc: 'علاوه بر خدمات دیجیتال و تامین صنعتی، تیم بیزدوار محصولات اختصاصی نیز طراحی و توسعه داده است', sourcesEyebrow: 'منابع معتبر', sourcesTitle: 'رسانه، نمایشگاه و منابع قابل راستی‌آزمایی', sourcesDesc: 'لینک‌های رسمی که درباره محصولات، نمایشگاه‌ها و سوابق بیزدوار منتشر شده‌اند — مستقل از ادعاهای داخلی سایت.', credentialsEyebrow: 'گواهینامه‌ها', credentialsTitle: 'مهارت‌های تأییدشده', proofEyebrow: 'اعتبار حرفه‌ای', proofTitle: 'بازخورد و شاخص‌های اعتماد', proofDesc: 'بر اساس منابع عمومی قابل راستی‌آزمایی — بدون نظر ساختگی', faqEyebrow: 'سوالات متداول', faqTitle: 'پرسش‌های رایج درباره بیزدوار' }, relatedLinks: [{ title: 'خدمات ما', url: 'services', desc: 'بازاریابی دیجیتال، وب، SMM و صنعت' }, { title: 'نمونه‌کارها', url: 'portfolio', desc: 'ZedPay، BZ Diamond و...' }, { title: 'تماس با ما', url: 'contact', desc: 'مشاوره رایگان' }], values: { title: 'ارزش‌های ما', items: [{ title: 'تمرکز بر نتیجه', desc: 'افزایش فروش، تبدیل و رشد برند — نه فقط اجرا.' }, { title: 'همکاری شفاف', desc: 'گزارش‌دهی منظم و ارتباط مستقیم با تیم.' }, { title: 'بازار جهانی', desc: 'پروژه در ایران، ترکیه و بازارهای بین‌المللی.' }, { title: 'سرعت اجرا', desc: 'Fast Web Studio — تحویل سایت در ۵ روز.' }] }, cta: { title: 'آماده همکاری با بیزدوار هستید؟', desc: 'مشاوره اولیه رایگان — از طریق <a href="contact" class="link-yellow">فرم تماس</a> یا واتساپ.', btn: 'تماس با ما' } },
      servicesPage: { hero: { tag: 'خدمات ما', title: 'راهکارهای جامع برای رشد کسب‌وکار', desc: 'از استراتژی دیجیتال تا تامین تجهیزات صنعتی — <a href="about">بیزدوار گروپ</a> در چهار محور اصلی همراه شماست.' }, overview: { eyebrow: 'نمای کلی', title: 'چهار محور خدمات بیزدوار', desc: 'برای مشاهده جزئیات هر خدمت، روی کارت کلیک کنید یا از منوی بالا استفاده کنید.' }, navAria: 'فهرست خدمات', viewDetails: 'مشاهده جزئیات', stats: [{ value: '۴', label: 'محور خدمات' }, { value: '۱۰۰+', label: 'پروژه' }, { value: '۱۱', label: 'کشور فعال' }, { value: '۱۳+', label: 'سال تجربه' }], cards: serviceBlocks.fa.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.fa, panels: servicesPanels.fa, relatedLinks: servicesRelatedLinks.fa, process: { eyebrow: 'فرآیند همکاری', title: 'چگونه با ما کار می‌کنید؟', desc: 'مسیر همکاری ساده، شفاف و قابل پیگیری است.', steps: [{ title: 'مشاوره', desc: 'شناخت نیاز و اهداف کسب‌وکار' }, { title: 'طراحی راهکار', desc: 'پیشنهاد فنی و برآورد زمان‌بندی' }, { title: 'اجرا', desc: 'پیاده‌سازی، تامین یا راه‌اندازی کمپین' }, { title: 'پشتیبانی', desc: 'گزارش‌دهی، بهینه‌سازی و همراهی مستمر' }] }, cta: { title: 'نیاز به راهکار اختصاصی دارید؟', desc: 'مشاوره رایگان — نمونه پروژه‌ها در <a href="portfolio">نمونه‌کارهای بیزدوار</a>', btn: 'مشاوره رایگان', btnSecondary: 'مشاهده نمونه‌کارها' } },
      portfolioPage: { hero: { tag: 'نمونه‌کارها', title: 'پروژه‌ها و برندهایی که با ما رشد کرده‌اند', desc: 'اکوسیستم برندهای بیزدوار، نمونه‌کارهای طراحی وب و SMM، و مشتریانی که خدمات دیجیتال دریافت کرده‌اند — <a href="about">درباره بیزدوار</a>.' }, areas: { eyebrow: 'حوزه‌ها', title: 'دامنه فعالیت پروژه‌ها' }, archived: { eyebrow: 'پروژه‌های گذشته', title: 'همکاری‌های قبلی و ناتمام', desc: 'پروژه‌هایی که دیگر لینک زنده ندارند یا به‌صورت ناتمام متوقف شده‌اند — از جمله سایت‌هایی که سرورشان تمدید نشده یا مارکت‌پلیس‌هایی که تکمیل نشده‌اند. فقط به‌صورت خلاصه ذکر می‌شوند.' }, tags: ['فین‌تک و پرداخت', 'حسابداری و فینانس', 'هوش مصنوعی', 'اپ موبایل iOS', 'رویداد و بلیت', 'هلدینگ و سرمایه‌گذاری', 'هاستینگ و زیرساخت', 'طراحی وب و فروشگاه', 'تجارت بین‌المللی', 'تجارت سوئیسی', 'پنل SMM', 'مدیریت SMM', 'تامین صنعتی', 'سنسور VEGA', 'دتکتور Prosense', 'هواپیمایی', 'بروکر و مالی'], cta: { title: 'پروژه بعدی می‌تواند برند شما باشد', desc: 'از <a href="fast" class="link-yellow">طراحی وب</a> تا مدیریت DNS و SSL — بیزدوار همراه شماست.', btnPrimary: 'شروع پروژه جدید', btnSecondary: 'مشاهده خدمات' }, filters: [{ id: 'all', label: 'همه' }, { id: 'case-study', label: 'نمونه‌کارها' }, { id: 'client', label: 'مشتریان' }, { id: 'ecosystem', label: 'اکوسیستم' }, { id: 'fintech', label: 'فین‌تک' }, { id: 'digital', label: 'دیجیتال' }, { id: 'industrial', label: 'صنعتی' }, { id: 'other', label: 'سایر' }], roleLabels: { ecosystem: 'اکوسیستم', 'case-study': 'نمونه‌کار', client: 'مشتری', website: 'وبسایت', page: 'صفحه بیزدوار' }, statsLabels: ['پروژه و برند', 'نمونه‌کار', 'مشتری', 'اکوسیستم'], filterAria: 'فیلتر نمونه‌کارها', countText: '{count} مورد نمایش داده می‌شود', relatedLinks: portfolioRelatedLinks.fa },
      blogPage: { hero: { tag: 'وبلاگ', title: 'مطالب تخصصی دیجیتال و صنعت', desc: 'راهنماها و نکات کاربردی از تیم بیزدوار گروپ.' }, cta: { title: 'نیاز به مشاوره تخصصی دارید؟', desc: 'موضوع مطلب شما را در <a href="contact">فرم تماس</a> بنویسید — پاسخگوییم.', btn: 'درخواست مشاوره' }, geoText: 'مقالات تخصصی برای کسب‌وکارهای ایران و ترکیه — بازاریابی دیجیتال، طراحی وب و تامین تجهیزات صنعتی.' },
      privacyPage: { hero: { title: 'سیاست حفظ حریم خصوصی', desc: 'نحوه جمع‌آوری و استفاده از اطلاعات شما در وبسایت بیزدوار گروپ' }, sections: [{ title: '۱. اطلاعاتی که جمع‌آوری می‌شود', body: 'هنگام ارسال <a href="contact">فرم تماس</a>، نام، ایمیل، شماره تماس (اختیاری)، نوع خدمات و متن پیام شما دریافت می‌شود. این اطلاعات فقط برای پاسخ به درخواست شما استفاده می‌شود.' }, { title: '۲. نحوه استفاده', items: ['پاسخ به درخواست مشاوره و پیشنهاد خدمات', 'پیگیری پروژه‌های در حال مذاکره', 'بهبود کیفیت خدمات (بدون انتشار عمومی)'] }, { title: '۳. اشتراک‌گذاری با اشخاص ثالث', body: 'اطلاعات شما بدون رضایت صریح شما به اشخاص ثالث فروخته یا منتقل نمی‌شود، مگر الزامات قانونی.' }, { title: '۴. کوکی‌ها و تحلیل', body: 'این وبسایت استاتیک است و کوکی ردیابی شخص ثالث ندارد. در صورت افزودن ابزار تحلیل، این صفحه به‌روزرسانی خواهد شد.' }, { title: '۵. زبان و تشخیص منطقه', body: 'برای نمایش زبان مناسب (فارسی، ترکی، انگلیسی)، ممکن است آدرس IP شما به‌صورت ناشناس به <strong>ipapi.co</strong> یا <strong>ipwho.is</strong> ارسال شود تا کشور تقریبی تشخیص داده شود. ترجیح زبان در حافظه مرورگر (<code>localStorage</code> — کلید <code>bizdavar_locale</code>) ذخیره می‌شود. می‌توانید هر زمان از منوی زبان یا با پارامتر <code>?lang=fa</code>، <code>?lang=tr</code> یا <code>?lang=en</code> زبان را خودتان انتخاب کنید.' }, { title: '۶. ارتباط با ما', body: 'برای سوالات حریم خصوصی: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> یا <a href="contact">فرم تماس</a>.' }], updated: 'آخرین به‌روزرسانی: فروردین ۱۴۰۴' },
      gamakPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Gamak برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب توان موتور تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Gamak برای پروژه‌های ایرانی', desc: 'سه‌فاز · تک‌فاز · Ex-proof · IE4 · MV — برای استعلام هر سری دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل الکتروموتور Gamak', desc: 'سه‌فاز و تک‌فاز — IE2/IE3/IE4 — Ex-proof، smoke extraction، MV و inverter' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Gamak در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع بار و توان مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'الکتروموتور Gamak برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Gamak', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Gamak</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت Gamak هستید؟', desc: 'توان kW، دور rpm و نوع کاربرد را بفرستید — IE2/IE3/IE4 · Ex-proof · MV', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Gamak' }, geoText: 'تامین Gamak از ترکیه به ایران — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'محصولات Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'خدمات صنعتی', desc: 'مشاوره تامین B2B' }, { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Digi System برای فروشگاه و واحد خرید شما', desc: 'ترازو، POS و peripheral — از انتخاب مدل تا تحویل در ایران.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'محصولات پرتقاضا Digi System', desc: 'ترازوی PC · POS یکپارچه · اسکنر و پرینتر — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل Digi System', desc: 'ترازو، POS، تجهیزات جانبی و نرم‌افزار خرده‌فروشی — تامین از ترکیه' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Digi System در بازار خرده‌فروشی ایران', desc: 'نوع فروشگاه و تعداد صندوق را بفرستید — پکیج مناسب پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'تجهیزات Digi برای انواع فروشگاه و رستوران/هتل (HORECA)' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Digi System', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Digi System</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'آماده استعلام قیمت Digi System هستید؟', desc: 'نوع فروشگاه، تعداد صندوق و نیاز ترازوی قانونی (legal-for-trade) را بفرستید', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Digi System' }, geoText: 'تامین Digi System از ترکیه به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'Teraoka Seiko', desc: 'ترازو و POS ژاپن' }, { title: 'خدمات صنعتی', desc: 'تامین B2B خرده‌فروشی' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Teraoka Seiko برای فروشگاه و انبار شما', desc: 'ترازو، برچسب‌زن و POS ژاپن — مشاوره مدل و لجستیک بین‌المللی.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Teraoka برای پروژه‌های ایرانی', desc: 'ترازوی فروشگاهی · deli scale · POS · برچسب‌زن — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل Teraoka Seiko', desc: 'ترازو، برچسب‌زن، POS و تجهیزات رستوران/فروشگاه — تامین از ژاپن' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Teraoka در بازار خرده‌فروشی و رستوران/فروشگاه ایران', desc: 'نوع فروشگاه یا آشپزخانه صنعتی را بفرستید — سری مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'تجهیزات Teraoka برای خرده‌فروشی، HORECA و لجستیک' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Teraoka Seiko', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teraoka Seiko</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="digi-system">Digi System</a>', cta: { title: 'آماده استعلام قیمت Teraoka هستید؟', desc: 'نوع ترازو، ظرفیت و تعداد صندوق را بفرستید — delicatessen · POS · برچسب‌زن', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Teraoka' }, geoText: 'تامین Teraoka Seiko به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی توسط بیزدوار گروپ.', related: [{ title: 'Digi System', desc: 'ترازو و POS ترکیه' }, { title: 'خدمات صنعتی', desc: 'تامین B2B خرده‌فروشی' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      fastPage: { sections: { plans: { eyebrow: 'پلن‌های قیمت', title: 'پلن مناسب کسب‌وکار خود را انتخاب کنید', desc: 'قیمت ثابت، بدون هزینه پنهان — سفارش از واتساپ یا <a href="contact">فرم تماس</a>.' }, compare: { eyebrow: 'مقایسه پلن‌ها', title: 'چه چیزی در هر پلن می‌گیرید؟', desc: 'برای انتخاب بین پلن‌ها — این جدول را ببینید یا در واتساپ بپرسید.' }, timeline: { eyebrow: 'مسیر اجرا', title: '۵ روز تا آنلاین شدن — مرحله به مرحله', desc: 'هر روز هدف مشخص دارد و در واتساپ گزارش پیشرفت می‌دهیم.' }, why: { eyebrow: 'چرا Fast؟', title: 'چرا Fast Web Studio؟', desc: 'محصولی از <a href="about">بیزدوار گروپ</a> — نه آژانس عمومی با وعده‌های مبهم.' }, showcase: { eyebrow: 'نمونه‌کارها', title: 'سایت‌هایی که با بیزدوار ساخته شده‌اند', desc: 'نمونه پروژه‌های طراحی وب — <a href="portfolio">مشاهده همه نمونه‌کارها</a>' }, faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج قبل از سفارش', desc: '' } }, cta: { title: 'آماده راه‌اندازی سایت هستید؟', desc: 'مشاوره رایگان در واتساپ — پلن مناسب را در ۲ دقیقه پیشنهاد می‌دهیم.', btnWa: 'شروع در واتساپ', btnForm: 'فرم تماس', btnCustom: 'پروژه اختصاصی', btnDevConsult: 'برنامه‌نویسی تخصصی و مشاوره — تماس بگیرید' }, devCta: { title: 'نیاز به برنامه‌نویسی تخصصی دارید؟', desc: 'فراتر از پلن‌های Fast — پروژه سفارشی، CRM، فروشگاه پیشرفته و مشاوره فنی.', btn: 'برنامه‌نویسی تخصصی و مشاوره — تماس بگیرید' }, sticky: { label: 'سفارش Fast — از $99' }, geoText: 'طراحی سایت برای کسب‌وکارهای ایران، ترکیه و بازارهای بین‌المللی — تحویل ۵ روزه، واتساپ فارسی و پشتیبانی پس از راه‌اندازی.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن VEGA برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب مدل تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        products: { eyebrow: 'کاتالوگ محصولات', title: 'محصولات پرتقاضا برای پروژه‌های ایرانی', desc: 'برای استعلام قیمت هر محصول — دکمه «درخواست استعلام» را بزنید. مشاوره فنی رایگان است.' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'VEGA در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — شرایط فرآیند را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        value: { eyebrow: 'مزیت‌های برند', title: 'چرا VEGA انتخاب مهندسان است؟', desc: 'بیش از ۶۵ سال نوآوری آلمان — هر سال بیش از ۵۰۰ هزار سنسور VEGA در جهان نصب می‌شود.' },
        principles: { eyebrow: 'اصول اندازه‌گیری', title: 'روش‌های اندازه‌گیری VEGA', desc: 'انتخاب اصل اندازه‌گیری مناسب — ما بر اساس شرایط شما بهترین را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'راهکار VEGA برای صنایع مختلف', desc: '۱۵+ صنعت — از شیمیایی تا انرژی و محیط‌زیست' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین VEGA توسط بیزدوار گروپ', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">وبسایت رسمی VEGA</a> است. برای استعلام قیمت، کد سفارش و تامین — <a href="contact">با بیزدوار تماس بگیرید</a>.', cta: { title: 'آماده استعلام قیمت VEGA هستید؟', desc: 'نام محصول یا شرایط فرآیند را بفرستید — مشاوره فنی رایگان و پیش‌فاکتور شفاف', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام VEGA' }, geoText: 'تامین اصل سنسور VEGA به ایران — مشاوره فنی فارسی از استانبول، پیش‌فاکتور شفاف و لجستیک تا پروژه‌های صنعتی ایران.', related: [{ title: 'محصولات Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'خدمات صنعتی', desc: 'مشاوره و تامین' }, { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }] },
      prosensePage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Prosense برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب گاز و مدل تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص برای پروژه‌های ایرانی', desc: 'SIL · M1 · EN-50545-1 · MPS — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'تمام سری‌های محصول Prosense', desc: '۸ دسته — بیش از ۶۰ سری — دتکتور ثابت، پرتابل، شعله، پنل، پارکینگ، نرم‌افزار و کالیبراسیون' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Prosense در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع گاز و محیط نصب را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'راهکار تشخیص گاز سفارشی برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Prosense', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">وبسایت رسمی Prosense</a> است. برای استعلام قیمت و تامین — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">محصولات VEGA</a>', cta: { title: 'آماده استعلام قیمت Prosense هستید؟', desc: 'نوع گاز یا سری مدل را بفرستید — PQ · SafeVader · SOMA · PPS+ · پنل S-DPX', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Prosense' }, geoText: 'تامین اصل دتکتور Prosense به ایران — گواهی SIL/M1/EN، مشاوره فارسی و تحویل برای پروژه‌های نفت، گاز و صنعت.', related: [{ title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'Teltonika GPS', desc: 'Fleet Telematics' }, { title: 'خدمات صنعتی', desc: 'مشاوره B2B' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Teltonika برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب مدل ردیاب تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص برای پروژه‌های ایرانی', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'تمام محصولات Teltonika Telematics', desc: '۱۲ دسته — ۱۰۰+ مدل — ردیاب، CAN/OBD، asset، BLE، ویدئو، نرم‌افزار و لوازم جانبی' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Teltonika در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع ناوگان و داده مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'راهکار Fleet Telematics برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Teltonika', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teltonika Telematics</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت Teltonika هستید؟', desc: 'مدل ردیاب یا نوع ناوگان را بفرستید — FMB920 · FMC650 · FTC305 · DualCam', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Teltonika' }, geoText: 'تامین اصل ردیاب Teltonika به ایران — Fleet Telematics، مشاوره فارسی و تحویل برای ناوگان و IoT.', related: [{ title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'محصولات Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'خدمات صنعتی', desc: 'مشاوره و تامین' }, { title: 'تماس', desc: 'استعلام قیمت' }] }
    },
    tr: {
      aboutPage: { hero: { tag: 'Bizdavar Hakkında', title: 'Dijital ve endüstride büyüme ortağınız', desc: '2013’ten beri — 11 ülkede 100+ proje · pazarlama, web, fintech ve endüstriyel tedarik' }, whatIs: { title: 'Bizdavar Group nedir?', p1: 'Bizdavar Group, 2013 yılında <strong>Ersan Jahed Tabrizi</strong> tarafından kurulan bir dijital ajans ve B2B tedarik grubudur. Hizmetlerimiz <a href="services#digital-marketing">dijital pazarlama</a>, <a href="fast">web tasarım</a>, fintech platformları, SMM yönetimi ve <a href="services#industrial">endüstriyel ekipman tedarikini</a> kapsar.', p2: '11 ülkede 100+ web ve özel platform projesi — ZedPay, Netinode, Bear Event ve VEGA tedariki dahil. Dijital altyapı, domain, hosting, SSL ve teknik destek de ekibimiz tarafından yönetilir. <a href="portfolio">Portfolyoyu görüntüle</a>' }, features: ['Dijital pazarlama', 'Profesyonel web tasarım', 'Ekipman tedariki', 'Altyapı yönetimi'], stats: [{ value: '13+', label: 'Yıl deneyim' }, { value: '100+', label: 'Proje' }, { value: '11', label: 'Ülke' }, { value: '4', label: 'Hizmet alanı' }], navAria: 'Sayfa bölümleri', nav: [{ href: '#profile', label: 'Kimlik' }, { href: '#activities', label: 'Uzmanlık' }, { href: '#ecosystem', label: 'Ekosistem' }, { href: '#presence', label: 'Küresel varlık' }, { href: '#highlights', label: 'Başarılar' }, { href: '#sources', label: 'Kaynaklar' }, { href: '#trust', label: 'Güven' }, { href: '#faq', label: 'SSS' }], sections: { identityEyebrow: 'Kurumsal kimlik', identityTitle: 'Bizdavar Group’a kısa bakış', leadershipEyebrow: 'Liderlik', leadershipTitle: 'Kurucu ve ekip', activitiesEyebrow: 'Faaliyet alanları', activitiesTitle: 'Uzmanlık alanları', ecosystemEyebrow: 'Ekosistem', ecosystemTitle: 'İlgili marka ve projeler', ecosystemDesc: 'Bizdavar’ın geliştirdiği veya yönettiği dijital ve endüstriyel ekosistemden örnekler', presenceEyebrow: 'Küresel varlık', presenceTitle: 'Aktif ülkeler', presenceDesc: 'İstanbul ve Erivan’dan Avrupa ve Amerika’ya uzanan proje ağı', exhibitionsEyebrow: 'Fuar ve etkinlik', exhibitionsTitle: 'Teknoloji fuarlarındaki varlık', exhibitionsDesc: 'RINOTEX Tabriz’ten üniversite fuarlarına — inovasyon ve ticarileştirme etkinlikleri', achievementsEyebrow: 'Başarılar', achievementsTitle: 'Bizdavar ürün ve inovasyonları', achievementsDesc: 'Dijital hizmetler ve endüstriyel tedarikin yanı sıra Bizdavar ekibi özel ürünler de tasarladı', sourcesEyebrow: 'Doğrulanmış kaynaklar', sourcesTitle: 'Medya, fuarlar ve doğrulanabilir referanslar', sourcesDesc: 'Ürünler, fuarlar ve Bizdavar geçmişi hakkında yayımlanan resmi bağlantılar — site içi iddialardan bağımsız.', credentialsEyebrow: 'Sertifikalar', credentialsTitle: 'Doğrulanmış yetkinlikler', proofEyebrow: 'Profesyonel güven', proofTitle: 'Güven göstergeleri', proofDesc: 'Doğrulanabilir kamu kaynaklarına dayalıdır — sahte yorum yoktur', faqEyebrow: 'SSS', faqTitle: 'Bizdavar hakkında sık sorulanlar' }, relatedLinks: [{ title: 'Hizmetlerimiz', url: 'services', desc: 'Dijital pazarlama, web, SMM ve endüstri' }, { title: 'Portfolyo', url: 'portfolio', desc: 'ZedPay, BZ Diamond ve daha fazlası' }, { title: 'İletişim', url: 'contact', desc: 'Ücretsiz danışmanlık' }], values: { title: 'Değerlerimiz', items: [{ title: 'Sonuç odaklılık', desc: 'Sadece uygulama değil, satış, dönüşüm ve marka büyümesi.' }, { title: 'Şeffaf iş birliği', desc: 'Düzenli raporlama ve ekiple doğrudan iletişim.' }, { title: 'Küresel pazar', desc: 'İran, Türkiye ve uluslararası pazarlarda projeler.' }, { title: 'Hızlı uygulama', desc: 'Fast Web Studio — 5 günde web sitesi teslimi.' }] }, cta: { title: 'Bizdavar ile çalışmaya hazır mısınız?', desc: 'İlk danışmanlık ücretsiz — <a href="contact" class="link-yellow">iletişim formu</a> veya WhatsApp üzerinden.', btn: 'Bize ulaşın' } },
      servicesPage: { hero: { tag: 'Hizmetlerimiz', title: 'İş büyümesi için kapsamlı çözümler', desc: 'Dijital stratejiden endüstriyel tedarike — <a href="about">Bizdavar Group</a> dört ana alanda yanınızda.' }, overview: { eyebrow: 'Genel bakış', title: 'Bizdavar’ın dört hizmet alanı', desc: 'Detayları görmek için karta tıklayın veya üst menüyü kullanın.' }, navAria: 'Hizmet listesi', viewDetails: 'Detayları gör', stats: [{ value: '4', label: 'Hizmet alanı' }, { value: '100+', label: 'Proje' }, { value: '11', label: 'Aktif ülke' }, { value: '13+', label: 'Yıl deneyim' }], cards: serviceBlocks.tr.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.tr, panels: servicesPanels.tr, relatedLinks: servicesRelatedLinks.tr, process: { eyebrow: 'İş birliği süreci', title: 'Nasıl çalışıyoruz?', desc: 'Sade, şeffaf ve takip edilebilir bir süreç.', steps: [{ title: 'Danışmanlık', desc: 'İhtiyaçları ve iş hedeflerini anlama' }, { title: 'Çözüm tasarımı', desc: 'Teknik öneri ve zaman planı' }, { title: 'Uygulama', desc: 'Kampanya, kurulum veya tedarik teslimi' }, { title: 'Destek', desc: 'Raporlama, optimizasyon ve sürekli destek' }] }, cta: { title: 'Özel bir çözüme mi ihtiyacınız var?', desc: 'Ücretsiz danışmanlık — proje örnekleri için <a href="portfolio">Bizdavar portfolyosu</a>', btn: 'Ücretsiz danışmanlık', btnSecondary: 'Portfolyoyu gör' } },
      portfolioPage: { hero: { tag: 'Portfolyo', title: 'Birlikte büyüttüğümüz proje ve markalar', desc: 'Bizdavar ekosistemi, web tasarım ve SMM örnekleri, dijital hizmet alan müşteriler — <a href="about">Bizdavar hakkında</a>.' }, areas: { eyebrow: 'Alanlar', title: 'Proje faaliyet alanları' }, archived: { eyebrow: 'Geçmiş projeler', title: 'Önceki ve tamamlanmamış işler', desc: 'Canlı bağlantısı olmayan veya yarım kalan projeler — sunucusu yenilenmeyen siteler veya tamamlanmamış marketplace projeleri dahil. Yalnızca kısaca anılır.' }, tags: ['Fintech ve ödeme', 'Muhasebe ve finans', 'Yapay zeka', 'iOS mobil uygulama', 'Etkinlik ve bilet', 'Holding ve yatırım', 'Hosting ve altyapı', 'Web tasarım ve mağaza', 'Uluslararası ticaret', 'İsviçre ticareti', 'SMM paneli', 'SMM yönetimi', 'Endüstriyel tedarik', 'VEGA sensör', 'Prosense dedektör', 'Havacılık', 'Broker ve finans'], cta: { title: 'Sıradaki proje markanız olabilir', desc: '<a href="fast" class="link-yellow">Web tasarımdan</a> DNS ve SSL yönetimine kadar Bizdavar yanınızda.', btnPrimary: 'Yeni proje başlat', btnSecondary: 'Hizmetleri gör' }, filters: [{ id: 'all', label: 'Tümü' }, { id: 'case-study', label: 'Örnek işler' }, { id: 'client', label: 'Müşteriler' }, { id: 'ecosystem', label: 'Ekosistem' }, { id: 'fintech', label: 'Fintech' }, { id: 'digital', label: 'Dijital' }, { id: 'industrial', label: 'Endüstriyel' }, { id: 'other', label: 'Diğer' }], roleLabels: { ecosystem: 'Ekosistem', 'case-study': 'Örnek iş', client: 'Müşteri', website: 'Web sitesi', page: 'Bizdavar sayfası' }, statsLabels: ['Proje ve marka', 'Örnek iş', 'Müşteri', 'Ekosistem'], filterAria: 'Portfolyo filtreleri', countText: '{count} öğe gösteriliyor', relatedLinks: portfolioRelatedLinks.tr },
      blogPage: { hero: { tag: 'Blog', title: 'Dijital ve endüstri içgörüleri', desc: 'Bizdavar Group ekibinden pratik rehberler ve ipuçları.' }, cta: { title: 'Uzman danışmanlığa mı ihtiyacınız var?', desc: 'Konunuzu <a href="contact">iletişim formuna</a> yazın — yanıtlarız.', btn: 'Danışmanlık iste' }, geoText: 'İran ve Türkiye’deki işletmeler için dijital pazarlama, web tasarım ve endüstriyel tedarik yazıları.' },
      privacyPage: { hero: { title: 'Gizlilik Politikası', desc: 'Bizdavar Group web sitesinde bilgilerinizin nasıl toplandığı ve kullanıldığı' }, sections: [{ title: '1. Toplanan bilgiler', body: '<a href="contact">İletişim formunu</a> gönderdiğinizde adınız, e-posta adresiniz, telefon numaranız (isteğe bağlı), hizmet türü ve mesajınız alınır. Bu bilgiler yalnızca talebinize yanıt vermek için kullanılır.' }, { title: '2. Kullanım şekli', items: ['Danışmanlık talebine ve hizmet önerisine yanıt vermek', 'Görüşme aşamasındaki projeleri takip etmek', 'Hizmet kalitesini iyileştirmek (kamuya açık paylaşım olmadan)'] }, { title: '3. Üçüncü taraflarla paylaşım', body: 'Bilgileriniz açık izniniz olmadan üçüncü taraflara satılmaz veya aktarılmaz; yasal zorunluluklar hariç.' }, { title: '4. Çerezler ve analiz', body: 'Bu web sitesi statiktir ve üçüncü taraf takip çerezi kullanmaz. Analiz aracı eklenirse bu sayfa güncellenecektir.' }, { title: '5. Dil ve bölge algılama', body: 'Uygun dili göstermek için (Farsça, Türkçe, İngilizce) IP adresiniz yaklaşık ülke tespiti amacıyla anonim olarak <strong>ipapi.co</strong> veya <strong>ipwho.is</strong> servislerine gönderilebilir. Dil tercihi tarayıcı <code>localStorage</code> içinde (<code>bizdavar_locale</code> anahtarı) saklanır. Dili menüden veya <code>?lang=fa</code>, <code>?lang=tr</code>, <code>?lang=en</code> parametreleriyle istediğiniz zaman seçebilirsiniz.' }, { title: '6. Bize ulaşın', body: 'Gizlilik soruları için: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> veya <a href="contact">iletişim formu</a>.' }], updated: 'Son güncelleme: Nisan 2025' },
      gamakPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Gamak tedariki', desc: 'Sadece katalog göstermiyoruz — güç seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan Gamak serileri', desc: 'GM/GMB · B5/B35 flanş · IE2/IE3 · Frenli — her seri için “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Gamak elektrik motoru kataloğu', desc: 'Üç fazlı ve tek fazlı — IE2/IE3 — flanş, ayak, frenli ve projeye özel' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Gamak yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — yük türü ve güç ihtiyacını gönderin.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Gamak motorları her endüstriyel bölüm için' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Gamak tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">resmi Gamak web sitesine</a> dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Gamak fiyat teklifine hazır mısınız?', desc: 'kW, rpm ve uygulama tipini gönderin — IE2/IE3/IE4 · Ex-proof · MV', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Gamak teklifi' }, geoText: 'Orijinal Gamak motor tedariki — İstanbul merkezli Türkçe teknik danışmanlık, proforma ve uluslararası lojistik.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Endüstriyel hizmetler', desc: 'B2B tedarik danışmanlığı' }, { title: 'İletişim', desc: 'Ücretsiz danışmanlık' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Mağaza ve satınalma biriminiz için güvenilir Digi System tedariki', desc: 'Terazi, POS ve çevre birimleri — model seçiminden teslimata.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Digi System öne çıkan ürünler', desc: 'PC terazi · entegre POS · tarayıcı ve yazıcı — “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Digi System tam katalog', desc: 'Terazi, POS, çevre birimleri ve perakende yazılımı — Türkiye tedariki' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Digi System perakende pazarında', desc: 'Mağaza türü ve kasa sayısını gönderin — uygun paketi önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı sektörlerde uygulama', desc: 'Digi perakende ekipmanları — mağaza ve HORECA' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Digi System tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">resmi Digi System</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'Digi System fiyat teklifine hazır mısınız?', desc: 'Mağaza türü, kasa sayısı ve onaylı terazi ihtiyacını gönderin', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Digi System teklifi' }, geoText: 'Digi System terazi ve POS tedariki — Türkiye\'den Türkçe danışmanlık, proforma ve lojistik.', related: [{ title: 'Teraoka Seiko', desc: 'Japon terazi ve POS' }, { title: 'Endüstriyel hizmetler', desc: 'Perakende B2B tedarik' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Mağaza ve depo biriminiz için güvenilir Teraoka Seiko tedariki', desc: 'Japon terazi, etiketleme ve POS — model danışmanlığı ve uluslararası lojistik.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan Teraoka serileri', desc: 'Mağaza terazisi · deli scale · POS · etiketleme — “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Teraoka Seiko tam katalog', desc: 'Terazi, etiketleme, POS ve food service — Japonya tedariki' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Teraoka perakende ve food service pazarında', desc: 'Mağaza veya endüstriyel mutfak türünü gönderin — uygun seriyi önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı sektörlerde uygulama', desc: 'Teraoka ekipmanları — perakende, HORECA ve lojistik' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Teraoka Seiko tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">resmi Teraoka Seiko</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="digi-system">Digi System</a>', cta: { title: 'Teraoka fiyat teklifine hazır mısınız?', desc: 'Terazi türü, kapasite ve kasa sayısını gönderin — deli · POS · etiketleme', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Teraoka teklifi' }, geoText: 'Teraoka Seiko tedariki — Türkçe danışmanlık, proforma ve uluslararası lojistik Bizdavar tarafından.', related: [{ title: 'Digi System', desc: 'Türkiye terazi ve POS' }, { title: 'Endüstriyel hizmetler', desc: 'Perakende B2B tedarik' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      fastPage: { sections: { plans: { eyebrow: 'Fiyat planları', title: 'İşletmeniz için doğru planı seçin', desc: 'Sabit fiyat, gizli maliyet yok — WhatsApp veya <a href="contact">iletişim formu</a> ile sipariş.' }, compare: { eyebrow: 'Plan karşılaştırması', title: 'Her planda neler var?', desc: 'Plan seçmek için tabloyu inceleyin veya WhatsApp’tan sorun.' }, timeline: { eyebrow: 'Uygulama yolu', title: '5 günde yayına — adım adım', desc: 'Her gün net hedef ve WhatsApp üzerinden ilerleme raporu.' }, why: { eyebrow: 'Neden Fast?', title: 'Neden Fast Web Studio?', desc: '<a href="about">Bizdavar Group</a> ürünü — belirsiz vaatler veren genel bir ajans değil.' }, showcase: { eyebrow: 'Örnek işler', title: 'Bizdavar ile yapılan web siteleri', desc: 'Web tasarım örnekleri — <a href="portfolio">tüm portfolyoyu gör</a>' }, faq: { eyebrow: 'SSS', title: 'Sipariş öncesi sık sorulanlar', desc: '' } }, cta: { title: 'Web sitenizi başlatmaya hazır mısınız?', desc: 'WhatsApp’ta ücretsiz danışmanlık — uygun planı 2 dakikada önerelim.', btnWa: 'WhatsApp’ta başla', btnForm: 'İletişim formu', btnCustom: 'Özel proje', btnDevConsult: 'Özel yazılım ve danışmanlık — iletişime geçin' }, devCta: { title: 'Özel yazılım geliştirme mi istiyorsunuz?', desc: 'Fast planlarının ötesinde — özel proje, CRM, gelişmiş mağaza ve teknik danışmanlık.', btn: 'Özel yazılım ve danışmanlık — iletişime geçin' }, sticky: { label: 'Fast siparişi — $99\'dan itibaren' }, geoText: 'Türkiye, İran ve uluslararası pazarlardaki işletmeler için web tasarımı — 5 günde teslim, Türkçe WhatsApp danışmanlığı ve lansman sonrası destek.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir VEGA tedariki', desc: 'Sadece katalog göstermiyoruz — model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        products: { eyebrow: 'Ürün kataloğu', title: 'Endüstriyel projelerde en çok talep edilen ürünler', desc: 'Her ürün için teklif almak üzere “Teklif iste” düğmesini kullanın. Teknik danışmanlık ücretsizdir.' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'VEGA yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — proses koşullarını gönderin, uygun modeli önerelim.' },
        value: { eyebrow: 'Marka avantajları', title: 'Neden mühendisler VEGA’yı seçiyor?', desc: '65 yılı aşkın Alman inovasyonu — her yıl dünyada 500 binden fazla VEGA sensörü kuruluyor.' },
        principles: { eyebrow: 'Ölçüm prensipleri', title: 'VEGA ölçüm yöntemleri', desc: 'Doğru ölçüm prensibini seçin — koşullarınıza göre en iyisini öneririz.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstriler için VEGA çözümü', desc: '15+ endüstri — kimyadan enerjiye ve çevreye' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Bizdavar Group ile VEGA tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Ürünlerin teknik bilgileri <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">resmi VEGA web sitesine</a> dayanır. Fiyat teklifi, sipariş kodu ve tedarik için — <a href="contact">Bizdavar ile iletişime geçin</a>.', cta: { title: 'VEGA fiyat teklifine hazır mısınız?', desc: 'Ürün adını veya proses koşullarını gönderin — ücretsiz teknik danışmanlık ve şeffaf proforma', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'VEGA teklifi' }, geoText: 'Orijinal VEGA sensör tedariki — İstanbul merkezli Türkçe teknik danışmanlık, şeffaf proforma ve endüstriyel projelere lojistik.', related: [{ title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Endüstriyel hizmetler', desc: 'Danışmanlık ve tedarik' }, { title: 'İletişim ve teklif', desc: 'Ücretsiz danışmanlık' }] },
      prosensePage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Prosense tedariki', desc: 'Sadece katalog göstermiyoruz — gaz ve model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan seriler', desc: 'SIL · M1 · EN-50545-1 · MPS — her ürün için “Teklif iste” düğmesini kullanın.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Tüm Prosense ürün serileri', desc: '8 kategori — 60’tan fazla seri — sabit, taşınabilir, alev, panel, otopark, yazılım ve kalibrasyon' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Prosense yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — gaz türü ve kurulum ortamını gönderin, uygun modeli önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Her endüstriyel bölüm için özel gaz algılama çözümü' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Prosense tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Ürünlerin teknik bilgileri <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">resmi Prosense web sitesine</a> dayanır. Fiyat teklifi ve tedarik için — <a href="contact">Bizdavar ile iletişime geçin</a> · <a href="vega">VEGA ürünleri</a>', cta: { title: 'Prosense fiyat teklifine hazır mısınız?', desc: 'Gaz türünü veya model serisini gönderin — PQ · SafeVader · SOMA · PPS+ · S-DPX paneli', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Prosense teklifi' }, geoText: 'Orijinal Prosense dedektör tedariki — SIL/M1/EN sertifikaları, Türkçe danışmanlık ve petrol, gaz ve endüstri projeleri için teslimat.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Teltonika GPS', desc: 'Fleet Telematics' }, { title: 'Endüstriyel hizmetler', desc: 'B2B danışmanlık' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Teltonika tedariki', desc: 'Sadece katalog göstermiyoruz — model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan modeller', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — her ürün için “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Tüm Teltonika Telematics ürünleri', desc: '12 kategori — 100+ model — tracker, CAN/OBD, asset, BLE, video, yazılım ve aksesuar' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Teltonika yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — filo türü ve veri ihtiyacını gönderin.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Her sektör için Fleet Telematics çözümü' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Teltonika tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">resmi Teltonika Telematics</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Teltonika fiyat teklifine hazır mısınız?', desc: 'Tracker modeli veya filo türünü gönderin — FMB920 · FMC650 · FTC305', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Teltonika teklifi' }, geoText: 'Orijinal Teltonika GPS tedariki — Fleet Telematics, Türkçe danışmanlık ve uluslararası lojistik.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Endüstriyel hizmetler', desc: 'Danışmanlık ve tedarik' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] }
    },
    en: {
      aboutPage: { hero: { tag: 'About Bizdavar', title: 'Your growth partner in digital and industry', desc: 'Since 2013 — 100+ projects in 11 countries · marketing, web, fintech and industrial supply' }, whatIs: { title: 'What is Bizdavar Group?', p1: 'Bizdavar Group is a digital agency and B2B supply group founded in 2013 by <strong>Ersan Jahed Tabrizi</strong>. Our services include <a href="services#digital-marketing">digital marketing</a>, <a href="fast">web design</a>, fintech platforms, SMM management and <a href="services#industrial">industrial equipment supply</a>.', p2: '100+ custom web and platform projects across 11 countries — from ZedPay and Netinode to Bear Event and VEGA supply. Digital infrastructure, domains, hosting, SSL and technical support are also managed by our team. <a href="portfolio">View portfolio</a>' }, features: ['Digital marketing', 'Professional web design', 'Equipment supply', 'Infrastructure management'], stats: [{ value: '13+', label: 'Years experience' }, { value: '100+', label: 'Projects' }, { value: '11', label: 'Countries' }, { value: '4', label: 'Service areas' }], navAria: 'Page sections', nav: [{ href: '#profile', label: 'Profile' }, { href: '#activities', label: 'Expertise' }, { href: '#ecosystem', label: 'Ecosystem' }, { href: '#presence', label: 'Global presence' }, { href: '#highlights', label: 'Highlights' }, { href: '#sources', label: 'Sources' }, { href: '#trust', label: 'Trust' }, { href: '#faq', label: 'FAQ' }], sections: { identityEyebrow: 'Company profile', identityTitle: 'Bizdavar Group at a glance', leadershipEyebrow: 'Leadership', leadershipTitle: 'Founder and team', activitiesEyebrow: 'Activity areas', activitiesTitle: 'Areas of expertise', ecosystemEyebrow: 'Ecosystem', ecosystemTitle: 'Related brands and projects', ecosystemDesc: 'Examples from the digital and industrial ecosystem Bizdavar has developed or managed', presenceEyebrow: 'Global presence', presenceTitle: 'Active countries', presenceDesc: 'International project network from Istanbul and Yerevan to Europe and the US', exhibitionsEyebrow: 'Exhibitions & events', exhibitionsTitle: 'Technology exhibition presence', exhibitionsDesc: 'Innovation and commercialization events — from RINOTEX Tabriz to university fairs', achievementsEyebrow: 'Achievements', achievementsTitle: 'Bizdavar products & innovation', achievementsDesc: 'Beyond digital services and industrial supply, the Bizdavar team has also designed owned products', sourcesEyebrow: 'Verified sources', sourcesTitle: 'Media, exhibitions and verifiable references', sourcesDesc: 'Official links published about products, exhibitions and Bizdavar history — independent of on-site claims.', credentialsEyebrow: 'Certifications', credentialsTitle: 'Verified skills', proofEyebrow: 'Professional credibility', proofTitle: 'Trust indicators', proofDesc: 'Based on verifiable public sources — no fabricated testimonials', faqEyebrow: 'FAQ', faqTitle: 'Common questions about Bizdavar' }, relatedLinks: [{ title: 'Our services', url: 'services', desc: 'Digital marketing, web, SMM and industry' }, { title: 'Portfolio', url: 'portfolio', desc: 'ZedPay, BZ Diamond and more' }, { title: 'Contact us', url: 'contact', desc: 'Free consultation' }], values: { title: 'Our values', items: [{ title: 'Outcome focus', desc: 'Sales, conversion and brand growth — not just execution.' }, { title: 'Transparent collaboration', desc: 'Regular reporting and direct communication with the team.' }, { title: 'Global market', desc: 'Projects in Iran, Turkey and international markets.' }, { title: 'Fast execution', desc: 'Fast Web Studio — website delivery in 5 days.' }] }, cta: { title: 'Ready to work with Bizdavar?', desc: 'Initial consultation is free — through the <a href="contact" class="link-yellow">contact form</a> or WhatsApp.', btn: 'Contact us' } },
      servicesPage: { hero: { tag: 'Our services', title: 'Comprehensive solutions for business growth', desc: 'From digital strategy to industrial supply — <a href="about">Bizdavar Group</a> supports you across four core areas.' }, overview: { eyebrow: 'Overview', title: 'Four Bizdavar service areas', desc: 'Click a card or use the top menu to view service details.' }, navAria: 'Services list', viewDetails: 'View details', stats: [{ value: '4', label: 'Service areas' }, { value: '100+', label: 'Projects' }, { value: '11', label: 'Active countries' }, { value: '13+', label: 'Years experience' }], cards: serviceBlocks.en.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.en, panels: servicesPanels.en, relatedLinks: servicesRelatedLinks.en, process: { eyebrow: 'Collaboration process', title: 'How do we work with you?', desc: 'A simple, transparent and trackable workflow.', steps: [{ title: 'Consulting', desc: 'Understanding your needs and goals' }, { title: 'Solution design', desc: 'Technical proposal and timeline estimate' }, { title: 'Execution', desc: 'Campaign, implementation or supply delivery' }, { title: 'Support', desc: 'Reporting, optimization and ongoing support' }] }, cta: { title: 'Need a custom solution?', desc: 'Free consultation — see project examples in the <a href="portfolio">Bizdavar portfolio</a>', btn: 'Free consultation', btnSecondary: 'View portfolio' } },
      portfolioPage: { hero: { tag: 'Portfolio', title: 'Projects and brands we have helped grow', desc: 'Bizdavar ecosystem brands, web design and SMM case studies, and clients who received digital services — <a href="about">about Bizdavar</a>.' }, areas: { eyebrow: 'Areas', title: 'Project activity areas' }, archived: { eyebrow: 'Past projects', title: 'Previous and incomplete work', desc: 'Projects without a live link or left unfinished — including sites whose hosting expired and marketplaces that were never completed. Listed briefly only.' }, tags: ['Fintech and payments', 'Accounting and finance', 'Artificial intelligence', 'iOS mobile apps', 'Events and tickets', 'Holding and investment', 'Hosting and infrastructure', 'Web design and stores', 'International trade', 'Swiss trade', 'SMM panel', 'SMM management', 'Industrial supply', 'VEGA sensors', 'Prosense detectors', 'Aviation', 'Brokerage and finance'], cta: { title: 'Your brand could be the next project', desc: 'From <a href="fast" class="link-yellow">web design</a> to DNS and SSL management, Bizdavar is with you.', btnPrimary: 'Start a new project', btnSecondary: 'View services' }, filters: [{ id: 'all', label: 'All' }, { id: 'case-study', label: 'Case studies' }, { id: 'client', label: 'Clients' }, { id: 'ecosystem', label: 'Ecosystem' }, { id: 'fintech', label: 'Fintech' }, { id: 'digital', label: 'Digital' }, { id: 'industrial', label: 'Industrial' }, { id: 'other', label: 'Other' }], roleLabels: { ecosystem: 'Ecosystem', 'case-study': 'Case study', client: 'Client', website: 'Website', page: 'Bizdavar page' }, statsLabels: ['Projects & brands', 'Case studies', 'Clients', 'Ecosystem'], filterAria: 'Portfolio filters', countText: '{count} items shown', relatedLinks: portfolioRelatedLinks.en },
      blogPage: { hero: { tag: 'Blog', title: 'Digital and industrial insights', desc: 'Practical guides and tips from the Bizdavar Group team.' }, cta: { title: 'Need expert consulting?', desc: 'Write your topic in the <a href="contact">contact form</a> — we will respond.', btn: 'Request consulting' }, geoText: 'Specialized articles for businesses in Iran and Turkey — digital marketing, web design and industrial supply.' },
      privacyPage: { hero: { title: 'Privacy Policy', desc: 'How your information is collected and used on the Bizdavar Group website' }, sections: [{ title: '1. Information we collect', body: 'When you submit the <a href="contact">contact form</a>, we receive your name, email, phone number (optional), service type and message. This information is used only to respond to your request.' }, { title: '2. How we use it', items: ['Responding to consulting requests and service proposals', 'Following up on projects under discussion', 'Improving service quality without public disclosure'] }, { title: '3. Sharing with third parties', body: 'Your information is not sold or transferred to third parties without your explicit consent, except where legally required.' }, { title: '4. Cookies and analytics', body: 'This website is static and does not use third-party tracking cookies. If analytics tools are added, this page will be updated.' }, { title: '5. Language & region detection', body: 'To show the appropriate language (Persian, Turkish, English), your IP address may be sent anonymously to <strong>ipapi.co</strong> or <strong>ipwho.is</strong> to detect your approximate country. Your language preference is stored in browser <code>localStorage</code> (key <code>bizdavar_locale</code>). You can change language anytime from the menu or with <code>?lang=fa</code>, <code>?lang=tr</code> or <code>?lang=en</code>.' }, { title: '6. Contact us', body: 'For privacy questions: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> or the <a href="contact">contact form</a>.' }], updated: 'Last updated: April 2025' },
      gamakPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Gamak supply for your technical and procurement teams', desc: 'We do more than show a catalog — from power selection to delivery in Iran.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Gamak series for regional projects', desc: 'GM/GMB · B5/B35 flange · IE2/IE3 · Braked — use “Request quote” for each series.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Gamak electric motor catalog', desc: 'Three-phase and single-phase — IE2/IE3 — flange, foot, braked and custom' },
        iran: { eyebrow: 'Regional application', title: 'Gamak across common industries', desc: 'If your industry isn’t listed — send load type and required power.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Gamak motors for every industrial sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Gamak supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">official Gamak website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a Gamak quote?', desc: 'Send kW, rpm and application type — IE2/IE3/IE4 · Ex-proof · MV', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Gamak quote' }, geoText: 'Gamak supply from Turkey to Iran — multilingual technical consulting (English, Persian, Turkish), proforma and logistics by Bizdavar Group.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Industrial services', desc: 'B2B supply consulting' }, { title: 'Contact', desc: 'Free consultation' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Digi System supply for your store and procurement teams', desc: 'Scales, POS and peripherals — from model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Digi System products', desc: 'PC scales · integrated POS · scanner and printer — use “Request quote”.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Digi System catalog', desc: 'Scales, POS, peripherals and retail software — supply from Turkey' },
        iran: { eyebrow: 'Regional application', title: 'Digi System in the retail market', desc: 'Send store type and checkout count — we’ll suggest the right package.' },
        industries: { eyebrow: 'Global industries', title: 'Application across sectors', desc: 'Digi retail equipment for stores and HORECA' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Digi System supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">official Digi System website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'Ready for a Digi System quote?', desc: 'Send store type, checkout count and legal-for-trade scale needs', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Digi System quote' }, geoText: 'Digi System supply from Turkey to Iran — multilingual consulting, proforma and logistics by Bizdavar Group.', related: [{ title: 'Teraoka Seiko', desc: 'Japanese scales and POS' }, { title: 'Industrial services', desc: 'Retail B2B supply' }, { title: 'Contact', desc: 'Price inquiry' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Teraoka Seiko supply for your store and warehouse teams', desc: 'Japanese scales, labeling and POS — model consulting and international logistics.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Teraoka series for regional projects', desc: 'Retail scales · deli scale · POS · labeling — use “Request quote”.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Teraoka Seiko catalog', desc: 'Scales, labeling, POS and food service — supply from Japan' },
        iran: { eyebrow: 'Regional application', title: 'Teraoka in retail and food service markets', desc: 'Send store or commercial kitchen type — we’ll suggest the right series.' },
        industries: { eyebrow: 'Global industries', title: 'Application across sectors', desc: 'Teraoka equipment for retail, HORECA and logistics' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Teraoka Seiko supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">official Teraoka Seiko website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="digi-system">Digi System</a>', cta: { title: 'Ready for a Teraoka quote?', desc: 'Send scale type, capacity and checkout count — deli · POS · labeling', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Teraoka quote' }, geoText: 'Teraoka Seiko supply to Iran — multilingual consulting, proforma and international logistics by Bizdavar Group.', related: [{ title: 'Digi System', desc: 'Turkish scales and POS' }, { title: 'Industrial services', desc: 'Retail B2B supply' }, { title: 'Contact', desc: 'Price inquiry' }] },
      fastPage: { sections: { plans: { eyebrow: 'Pricing plans', title: 'Choose the right plan for your business', desc: 'Fixed pricing, no hidden costs — order through WhatsApp or the <a href="contact">contact form</a>.' }, compare: { eyebrow: 'Plan comparison', title: 'What do you get in each plan?', desc: 'Use this table to choose a plan or ask us on WhatsApp.' }, timeline: { eyebrow: 'Delivery path', title: '5 days to go live — step by step', desc: 'Each day has a clear goal and progress is reported on WhatsApp.' }, why: { eyebrow: 'Why Fast?', title: 'Why Fast Web Studio?', desc: 'A <a href="about">Bizdavar Group</a> product — not a generic agency with vague promises.' }, showcase: { eyebrow: 'Showcase', title: 'Websites built with Bizdavar', desc: 'Web design examples — <a href="portfolio">view the full portfolio</a>' }, faq: { eyebrow: 'FAQ', title: 'Common questions before ordering', desc: '' } }, cta: { title: 'Ready to launch your website?', desc: 'Free WhatsApp consultation — we suggest the right plan in 2 minutes.', btnWa: 'Start on WhatsApp', btnForm: 'Contact form', btnCustom: 'Custom project', btnDevConsult: 'Custom development & consulting — contact us' }, devCta: { title: 'Need custom development?', desc: 'Beyond Fast plans — custom projects, CRM, advanced stores and technical consulting.', btn: 'Custom development & consulting — contact us' }, sticky: { label: 'Order Fast — from $99' }, geoText: 'Web design for businesses in Iran, Turkey and international markets — 5-day delivery, multilingual WhatsApp support and post-launch assistance.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable VEGA supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        products: { eyebrow: 'Product catalog', title: 'High-demand products for regional projects', desc: 'Use the “Request quote” button for each product. Technical consulting is free.' },
        iran: { eyebrow: 'Regional application', title: 'VEGA across common industries', desc: 'If your industry isn’t listed — send your process conditions and we’ll suggest the right model.' },
        value: { eyebrow: 'Brand advantages', title: 'Why engineers choose VEGA', desc: 'Over 65 years of German innovation — more than 500,000 VEGA sensors installed worldwide each year.' },
        principles: { eyebrow: 'Measuring principles', title: 'VEGA measuring methods', desc: 'Choosing the right measuring principle — we recommend the best based on your conditions.' },
        industries: { eyebrow: 'Global industries', title: 'VEGA solutions for various industries', desc: '15+ industries — from chemicals to energy and environment' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'VEGA supply services by Bizdavar Group', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Product technical information is based on the <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">official VEGA website</a>. For pricing, order codes and supply — <a href="contact">contact Bizdavar</a>.', cta: { title: 'Ready for a VEGA quote?', desc: 'Send the product name or process conditions — free technical consulting and a transparent proforma', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'VEGA quote' }, geoText: 'Genuine VEGA sensor supply to Iran — multilingual technical consulting from Istanbul, transparent proforma and logistics to industrial projects.', related: [{ title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Industrial services', desc: 'Consulting and supply' }, { title: 'Contact and inquiry', desc: 'Free consultation' }] },
      prosensePage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Prosense supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from gas/model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured series for projects', desc: 'SIL · M1 · EN-50545-1 · MPS — use the “Request quote” button for each product.' },
        catalog: { eyebrow: 'Full catalog', title: 'All Prosense product series', desc: '8 categories — over 60 series — fixed, portable, flame, panel, parking, software and calibration' },
        iran: { eyebrow: 'Regional application', title: 'Prosense across common industries', desc: 'If your industry isn’t listed — send the gas type and installation environment and we’ll suggest the right model.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Custom gas detection solution for every industrial sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Prosense supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Product technical information is based on the <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">official Prosense website</a>. For pricing and supply — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA products</a>', cta: { title: 'Ready for a Prosense quote?', desc: 'Send the gas type or model series — PQ · SafeVader · SOMA · PPS+ · S-DPX panel', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Prosense quote' }, geoText: 'Genuine Prosense detector supply to Iran — SIL/M1/EN certifications, multilingual consulting and delivery for oil, gas and industrial projects.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Teltonika GPS', desc: 'Fleet Telematics' }, { title: 'Industrial services', desc: 'B2B consulting' }, { title: 'Contact', desc: 'Price inquiry' }] },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Teltonika supply for your technical and procurement teams', desc: 'We do more than show a catalog — from tracker selection to delivery in Iran.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand products', title: 'Featured models for regional projects', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — use “Request quote” for each product.' },
        catalog: { eyebrow: 'Full catalog', title: 'All Teltonika Telematics products', desc: '12 categories — 100+ models — trackers, CAN/OBD, assets, BLE, video, software and accessories' },
        iran: { eyebrow: 'Regional application', title: 'Teltonika across common industries', desc: 'If your industry isn’t listed — send fleet type and required data.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Fleet Telematics solution for every sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Teltonika supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">official Teltonika Telematics website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a Teltonika quote?', desc: 'Send tracker model or fleet type — FMB920 · FMC650 · FTC305 · DualCam', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Teltonika quote' }, geoText: 'Genuine Teltonika GPS supply to Iran — Fleet Telematics, multilingual consulting and logistics.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Industrial services', desc: 'Consulting and supply' }, { title: 'Contact', desc: 'Price inquiry' }] }
    }
  };

  const blogPosts = {
    fa: [
      ['دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها', 'تعریف بازاریابی دیجیتال، کانال‌ها و نقش آن در رشد فروش آنلاین.', 'بازاریابی دیجیتال'],
      ['چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟', 'راهکارهای عملی برای تبدیل بازدیدکننده به مشتری.', 'بازاریابی دیجیتال'],
      ['مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها', 'تولید محتوا، تقویم انتشار و تبلیغات هدفمند در اینستاگرام و لینکدین.', 'مدیریت SMM'],
      ['راه‌اندازی سایت در ۵ روز — راهنمای کامل Fast Studio', 'معرفی پلن‌های Fast Web Studio برای استارتاپ‌ها.', 'طراحی وب'],
      ['انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق', 'نکات مهم در تامین تجهیزات VEGA و ابزار دقیق.', 'تجهیزات صنعتی'],
      ['بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت', 'شناسنامه کامل بیزدوار: بنیان‌گذار، ۱۱ کشور، ۱۰۰+ پروژه و اکوسیستم برندها.', 'درباره شرکت']
    ],
    tr: [
      ['Dijital pazarlama nedir? İşletmeler için rehber', 'Dijital pazarlamanın tanımı, kanalları ve online satış büyümesindeki rolü.', 'Dijital pazarlama'],
      ['Dijital pazarlama satışları nasıl artırır?', 'Ziyaretçileri müşteriye dönüştürmek için pratik yöntemler.', 'Dijital pazarlama'],
      ['Sosyal medya yönetimi — Markalar için SMM stratejisi', 'Instagram ve LinkedIn için içerik üretimi, yayın takvimi ve hedefli reklamlar.', 'SMM yönetimi'],
      ['5 günde web sitesi — Fast Studio rehberi', 'Startuplar için Fast Web Studio planlarının tanıtımı.', 'Web tasarım'],
      ['Doğru endüstriyel sensör seçimi — VEGA ve ölçüm cihazları', 'VEGA ve endüstriyel ölçüm ekipmanı tedarikinde önemli noktalar.', 'Endüstriyel ekipman'],
      ['Bizdavar Group nedir? Tarihçe, ekip ve faaliyet alanları', 'Bizdavar profili: kurucu, 11 ülke, 100+ proje ve marka ekosistemi.', 'Şirket hakkında']
    ],
    en: [
      ['What is digital marketing? A complete guide for businesses', 'Definition, channels, and the role of digital marketing in online sales growth.', 'Digital marketing'],
      ['How does digital marketing increase sales?', 'Practical methods for turning visitors into customers.', 'Digital marketing'],
      ['Social media management — SMM strategy for brands', 'Content production, publishing calendars, and targeted ads for Instagram and LinkedIn.', 'SMM management'],
      ['Launch a website in 5 days — Fast Studio guide', 'Introducing Fast Web Studio plans for startups.', 'Web design'],
      ['Choosing the right industrial sensor — VEGA and instrumentation', 'Key points in VEGA and instrumentation supply.', 'Industrial equipment'],
      ['What is Bizdavar Group? History, team and activities', 'Bizdavar profile: founder, 11 countries, 100+ projects and brand ecosystem.', 'About company']
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
        products: { title: 'حوزه‌های محتوایی پوشش‌داده‌شده', desc: 'نمونه حوزه‌هایی که در محتوای این پروژه پوشش داده می‌شد — تامین فنی از طریق <a href="services#industrial">بیزدوار گروپ</a>', vega: 'سنسور سطح و فشار', prosense: 'دتکتور گاز و شعله', gamak: 'الکتروموتور صنعتی', industrialTitle: 'تجهیزات صنعتی', industrialDesc: 'مشاوره و تامین B2B' },
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
            { href: '/pages/fxguard', icon: 'chat-wa', title: 'CRM واتساپ', desc: 'اسکریپت WhatsApp CRM' },
            { href: '/pages/fast', icon: 'bolt', title: 'Fast Studio', desc: 'طراحی وب' },
            { href: '/pages/portfolio', icon: 'briefcase', title: 'نمونه‌کارها', desc: 'فین‌تک و Web3' },
            { href: '/pages/services', icon: 'list', title: 'خدمات', desc: 'طراحی وب و فین‌تک' }
          ]
        },
        geoText: 'توسعه ماژول DeFi و Web3 — بخشی از خدمات فین‌تک و طراحی وب بیزدوار گروپ.'
      },

      fxguard: {
        hero: {
          tag: 'اسکریپت اختصاصی · WhatsApp CRM',
          title: 'CRM واتساپ — اسکریپت اختصاصی برای تیم شما',
          desc: 'اسکریپتی که تیم بیزدوار نوشته — یک شماره، یک پنل، پیام انبوه و پاسخ خودکار. مالکیت کامل، بدون اشتراک ماهانه.',
          regionItems: [
            { code: 'TR', label: 'ترکیه' },
            { code: 'AE', label: 'دبی' },
            { code: 'EU', label: 'اروپا' },
            { code: 'IR', label: 'ایران' }
          ],
          regions: 'ترکیه · دبی · اروپا · ایران',
          trust: 'کدنویسی ۱۰۰٪ اختصاصی · پشتیبانی بیزدوار',
          ctaPricing: 'مشاهده پلن‌ها',
          ctaContact: 'برنامه‌نویسی تخصصی — تماس بگیرید'
        },
        stats: {
          businesses: 'پلن اسکریپت',
          regions: 'بازار هدف',
          regionsVal: 'TR · AE · EU · IR',
          uptime: 'کد اختصاصی',
          setup: 'تحویل تقریبی',
          setupSuffix: ' روز'
        },
        problem: {
          eyebrow: 'مشکل',
          title: 'آشناست؟',
          desc: 'هر کسب‌وکار در حال رشد به همین دیوارها می‌خورد — اسکریپت CRM واتساپ ما برای حل آن‌ها نوشته شده.',
          items: [
            { icon: 'mobile', title: 'چند گوشی، صفر کنترل', desc: 'سه نفر، سه گوشی، سه شماره. کسی نمی‌داند چه کسی چه جوابی داده — مشتری نادیده گرفته یا دوبار پاسخ می‌گیرد.' },
            { icon: 'clock', title: 'پاسخ دادن ساعت ۲ بامداد', desc: 'بدون پاسخ خودکار، همیشه باید کسی آنلاین باشد. مشتریان پاسخ فوری می‌خواهند و شما نمی‌توانید بخوابید.' },
            { icon: 'list', title: 'پیام انبوه خسته‌کننده', desc: 'کپی‌پیست برای ۲۰۰ مخاطب یکی‌یکی. ساعت‌ها کار هر کمپین. خطا زیاد. بدون شخصی‌سازی.' }
          ]
        },
        steps: {
          eyebrow: 'نحوه کار',
          title: 'راه‌اندازی در ۳ مرحله',
          desc: 'تیم بیزدوار اسکریپت را نصب، پیکربندی و آموزش می‌دهد.',
          items: [
            { num: '01', icon: 'link', title: 'شماره را وصل کنید', desc: 'شماره WhatsApp Business موجود را به پنل اختصاصی وصل کنید. شماره همیشه مال شماست.' },
            { num: '02', icon: 'users', title: 'تیم را اضافه کنید', desc: 'کارکنان را دعوت کنید، نقش و دسترسی تعیین کنید. همه از یک داشبورد پاسخ می‌دهند.' },
            { num: '03', icon: 'rocket', title: 'رشد و اتوماسیون', desc: 'پاسخ خودکار، کمپین انبوه، ردیابی هر مکالمه — رضایت مشتری را بالا ببرید.' }
          ],
          cta: 'برنامه‌نویسی تخصصی — تماس بگیرید'
        },
        features: {
          eyebrow: 'امکانات',
          title: 'هر آنچه تیم شما نیاز دارد',
          desc: 'نه فقط چت — CRM کامل ساخته‌شده دور واتساپ با کد اختصاصی.',
          items: [
            { icon: 'inbox', title: 'اینباکس تیمی یکپارچه', desc: 'همه مکالمات یکجا. تخصیص چت، یادداشت، وضعیت — با هم.' },
            { icon: 'send', title: 'پیام انبوه', desc: 'ارسال شخصی‌سازی‌شده به هزاران مخاطب با تأخیر هوشمند و زمان‌بندی.' },
            { icon: 'robot', title: 'پاسخ خودکار ۲۴/۷', desc: 'قوانین بعد از ساعت کاری، کلمات کلیدی، خوش‌آمد — هیچ مشتری منتظر نماند.' },
            { icon: 'chart-bar', title: 'آنالیتیکس و گزارش', desc: 'زمان پاسخ، حجم مکالمه، عملکرد تیم — در داشبورد تمیز.' },
            { icon: 'users', title: 'دسترسی نقش‌محور', desc: 'مدیر، اپراتور، ناظر — هر کس فقط آنچه لازم دارد ببیند.' },
            { icon: 'plug', title: 'یکپارچه‌سازی API', desc: 'اتصال به CRM، فروشگاه یا رزرواسیون موجود از طریق REST API.' }
          ]
        },
        audiences: {
          eyebrow: 'برای چه کسانی',
          title: 'ساخته‌شده برای کسب‌وکارهایی مثل شما',
          desc: 'از رستوران‌های استانبول تا کلینیک‌های دبی — هر تیمی که با مشتری در واتساپ صحبت می‌کند.',
          items: [
            { icon: 'health', title: 'کلینیک و سلامت', region: 'ترکیه · امارات · اروپا', desc: 'نوبت‌دهی، یادآوری، پیگیری — همه از یک پنل.', tag: 'اتوماسیون نوبت' },
            { icon: 'bag', title: 'فروشگاه آنلاین', region: 'همه مناطق', desc: 'وضعیت سفارش، بازیابی سبد، پاسخ به ۵۰۰+ پیام روزانه با تیم ۳ نفره.', tag: 'کمپین انبوه' },
            { icon: 'home', title: 'املاک', region: 'دبی · استانبول', desc: 'معرفی ملک، بازدید، پیگیری لید — تاریخچه کامل هر مشتری.', tag: 'ردیابی لید' },
            { icon: 'utensils', title: 'رستوران و غذا', region: 'ترکیه · اروپا', desc: 'رزرو، سفارش بیرون‌بر، منوی روز — پیام‌های روتین خودکار.', tag: 'رزرو خودکار' }
          ]
        },
        pricing: {
          eyebrow: 'قیمت',
          title: 'پلن‌های اسکریپت CRM واتساپ',
          desc: 'قیمت یک‌بار پرداخت — مالکیت کامل اسکریپت و پنل.',
          note: 'قیمت یک‌بار پرداخت — شامل نصب، راه‌اندازی و آموزش اولیه.',
          plans: [
            {
              id: 'basic',
              name: 'پایه',
              price: '$500',
              period: '',
              desc: 'اسکریپت CRM واتساپ برای تیم کوچک.',
              features: ['۱ شماره واتساپ', 'پنل تیمی', 'اینباکس مشترک', 'پاسخ خودکار پایه', 'نصب و راه‌اندازی'],
              cta: 'برنامه‌نویسی تخصصی — تماس بگیرید',
              href: '/pages/contact?product=whatsapp-crm-basic'
            },
            {
              id: 'pro',
              name: 'حرفه‌ای',
              price: '$800',
              period: '',
              badge: 'پرفروش‌ترین',
              desc: 'برای کسب‌وکار در حال رشد با پیام انبوه.',
              features: ['همه امکانات پایه', 'پیام انبوه', 'پاسخ خودکار پیشرفته', 'آنالیتیکس', '۴ زبان رابط'],
              cta: 'برنامه‌نویسی تخصصی — تماس بگیرید',
              href: '/pages/contact?product=whatsapp-crm-pro',
              featured: true
            },
            {
              id: 'enterprise',
              name: 'سازمانی',
              price: '$1,200',
              period: '',
              desc: 'چند شماره، API و یکپارچه‌سازی سفارشی.',
              features: ['همه امکانات حرفه‌ای', 'API اختصاصی', 'چند شماره', 'یکپارچه‌سازی CRM', 'پشتیبانی اولویت‌دار'],
              cta: 'برنامه‌نویسی تخصصی — تماس بگیرید',
              href: '/pages/contact?product=whatsapp-crm-enterprise'
            }
          ]
        },
        faq: {
          eyebrow: 'سوالات',
          title: 'پرسش‌های متداول',
          items: [
            { q: 'قیمت اسکریپت CRM واتساپ چقدر است؟', a: 'سه پلن $500، $800 و $1,200 — یک‌بار پرداخت، بدون اشتراک ماهانه.' },
            { q: 'چند نفر می‌توانند از یک شماره استفاده کنند؟', a: 'نامحدود — همه از یک پنل و یک شماره WhatsApp Business کار می‌کنند.' },
            { q: 'پیام انبوه پشتیبانی می‌شود؟', a: 'بله — در پلن حرفه‌ای ($800) و سازمانی ($1,200) با شخصی‌سازی و زمان‌بندی.' },
            { q: 'اسکریپت اختصاصی است یا SaaS؟', a: 'کد اختصاصی تیم بیزدوار — مالکیت و کنترل کامل برای شما، بدون وابستگی به پلتفرم ثالث.' },
            { q: 'از فارسی پشتیبانی می‌کند؟', a: 'بله — UI و پشتیبانی به فارسی، ترکی، عربی و انگلیسی.' }
          ]
        },
        about: {
          title: 'توسعه اختصاصی توسط بیزدوار',
          body: 'این <strong>اسکریپت CRM واتساپ</strong> با برنامه‌نویسی اختصاصی توسط <strong>تیم بیزدوار</strong> نوشته شده — پنل تیمی، وب‌اپ و API تحت کنترل شما.',
          ctaContact: 'برنامه‌نویسی تخصصی — تماس بگیرید',
          ctaPortfolio: 'نمونه‌کارها'
        },
        cta: {
          title: 'اسکریپت اختصاصی می‌خواهید؟',
          desc: 'پلن $500، $800 یا $1,200 — تماس بگیرید تا پروژه شما را بررسی کنیم.',
          btnStart: 'برنامه‌نویسی تخصصی — تماس بگیرید',
          btnPricing: 'مشاهده پلن‌ها'
        },
        related: { title: 'محصولات و خدمات مرتبط' },
        geoText: 'اسکریپت CRM واتساپ برای بازارهای ترکیه، امارات، اروپا و ایران — توسعه اختصاصی توسط بیزدوار گروپ.'
      },

      bzDiamond: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'BZ Diamond — طراحی وبسایت و فروشگاه آنلاین', desc: 'پروژه مشتری در حوزه جواهرات و الماس — طراحی، توسعه و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>BZ Diamond</strong> یکی از مشتریان بیزدوار گروپ است — برند تخصصی فروش الماس و جواهرات آنلاین. ما وبسایت، فروشگاه WooCommerce، زیرساخت ایمیل و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است، نه بخش کسب‌وکار صنعتی بیزدوار.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی و فروشگاهی', 'پیاده‌سازی WooCommerce — فروش آنلاین الماس و جواهرات', 'مدیریت و پیکربندی ایمیل سازمانی (دامنه و صندوق‌های پستی)', 'سئو، ساختار محتوا و بهینه‌سازی صفحات محصول', 'رابط کاربری RTL و چندزبانه (فارسی / انگلیسی)', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'BZ Diamond در حوزه الماس GIA، lab-grown و آموزش انتخاب جواهرات فعالیت می‌کند. جزئیات محصولات و قیمت‌ها در وبسایت رسمی مشتری منتشر می‌شود.', ctaSite: 'مشاهده وبسایت BZ Diamond', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای برندهای ایران و بین‌المللی — WooCommerce، سئو و پشتیبانی از استانبول و تبریز.'
      },
      supplifyTrade: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'Supplify Trade — طراحی وبسایت تجارت بین‌المللی', desc: 'پروژه مشتری B2B در امارات (RAKEZ) — طراحی وبسایت شرکتی، سئو و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>Supplify Trade FZ-LLC</strong> یکی از مشتریان بیزدوار گروپ است — شرکت تجارت و sourcing بین‌المللی با لایسنس RAKEZ در رأس‌الخیمه، امارات. ما وبسایت شرکتی، ساختار محتوا، سئو پایه و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی B2B', 'هویت بصری و رابط کاربری چندبخشی (خدمات، صنایع، فرآیند، تماس)', 'سئو پایه، ساختار محتوا و صفحات تبدیل (RFQ)', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'Supplify Trade FZ-LLC در sourcing، تأمین، کنترل کیفیت و لجستیک بین‌المللی فعالیت می‌کند — مصالح ساختمانی، کالاهای صنعتی، تجهیزات کشاورزی و قطعات خودرو. جزئیات خدمات و استعلام قیمت در وبسایت رسمی مشتری منتشر می‌شود.', ctaSite: 'مشاهده وبسایت Supplify Trade', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای شرکت‌های تجارت بین‌المللی در امارات و خاورمیانه — بیزدوار گروپ.'
      },
      kayaOne: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'Kaya One AG — طراحی وبسایت تجارت سوئیسی', desc: 'پروژه مشتری B2B در سوئیس — طراحی وبسایت شرکتی، سئو و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>Kaya One AG</strong> یکی از مشتریان بیزدوار گروپ است — شرکت تجارت و راهکارهای صنعتی ثبت‌شده در سوئیس (Brunnen، کانتون Schwyz، UID: CHE-351.641.458). ما وبسایت شرکتی، ساختار محتوا، سئو پایه و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی B2B', 'هویت بصری و رابط کاربری چندبخشی (خدمات، صنایع، درباره، تماس)', 'سئو پایه، ساختار محتوا و صفحات تبدیل', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'Kaya One AG در تجارت بین‌المللی، تجهیزات سنگین و لجستیک فعالیت می‌کند — محصولات کشاورزی و غذایی، فلزات و فولاد، کامیون و ماشین‌آلات صنعتی. جزئیات خدمات در وبسایت رسمی مشتری منتشر می‌شود.', ctaSite: 'مشاهده وبسایت Kaya One AG', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای شرکت‌های تجارت سوئیسی و بین‌المللی — بیزدوار گروپ.'
      },
      smmTurk: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'SMM Turk — طراحی پنل SMM و وبسایت', desc: 'پروژه مشتری در ترکیه — طراحی رابط کاربری پنل، وبسایت و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>SMM Turk</strong> یکی از مشتریان بیزدوار گروپ است — پلتفرم پنل SMM برای رشد کسب‌وکار در شبکه‌های اجتماعی با قیمت رقابتی، تحویل خودکار ۲۴/۷ و برنامه همکاری (affiliate / reseller). ما وبسایت و تجربه کاربری پنل، ساختار محتوا، سئو پایه و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت و پنل کاربری SMM', 'رابط کاربری ورود، ثبت‌نام و داشبورد', 'سئو پایه، ساختار محتوا و صفحات تبدیل', 'بهینه‌سازی موبایل و عملکرد', 'پشتیبانی فنی، به‌روزرسانی و نگهداری'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'SMM Turk پنل خدمات شبکه‌های اجتماعی ارائه می‌دهد — سفارش خودکار، پرداخت کریپتو (BTC، ETH، USDT)، برنامه نمایندگی (bayi panel) و API. جزئیات قیمت و خدمات در وبسایت رسمی مشتری منتشر می‌شود.', ctaSite: 'مشاهده وبسایت SMM Turk', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب و پنل SMM برای بازار ترکیه و بین‌الملل — بیزدوار گروپ.'
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
        products: { title: 'Kapsanan içerik alanları', desc: 'Bu projede kapsanan alan örnekleri — teknik tedarik <a href="services#industrial">Bizdavar Group</a> üzerinden', vega: 'Seviye ve basınç sensörü', prosense: 'Gaz ve alev dedektörü', gamak: 'Endüstriyel elektrik motoru', industrialTitle: 'Endüstriyel ekipman', industrialDesc: 'B2B danışmanlık ve tedarik' },
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
            { href: '/pages/fxguard', icon: 'chat-wa', title: 'WhatsApp CRM', desc: 'WhatsApp CRM scripti' },
            { href: '/pages/fast', icon: 'bolt', title: 'Fast Studio', desc: 'Web tasarım' },
            { href: '/pages/portfolio', icon: 'briefcase', title: 'Portfolyo', desc: 'Fintech ve Web3' },
            { href: '/pages/services', icon: 'list', title: 'Hizmetler', desc: 'Web ve fintech' }
          ]
        },
        geoText: 'DeFi ve Web3 modül geliştirme — Bizdavar Group fintech hizmetlerinin parçası.'
      },
      fxguard: {
        hero: { tag: 'Özel script · WhatsApp CRM', title: 'WhatsApp CRM — Ekibiniz için özel script', desc: 'Bizdavar ekibinin yazdığı script — tek numara, tek panel, toplu mesaj ve otomatik yanıt. Tam sahiplik, aylık abonelik yok.', regionItems: [
            { code: 'TR', label: 'Türkiye' },
            { code: 'AE', label: 'Dubai' },
            { code: 'EU', label: 'Avrupa' },
            { code: 'IR', label: 'İran' }
          ],
          regions: 'Türkiye · Dubai · Avrupa · İran', trust: '%100 özel kod · Bizdavar desteği', ctaPricing: 'Planları gör', ctaContact: 'Özel yazılım — iletişime geçin' },
        stats: { businesses: 'Script planı', regions: 'Hedef pazar', regionsVal: 'TR · AE · EU · IR', uptime: 'Özel kod', setup: 'Tahmini teslim', setupSuffix: ' gün' },
        problem: { eyebrow: 'Sorun', title: 'Tanıdık mı?', desc: 'Büyüyen her işletme bu duvarlarla karşılaşır — WhatsApp CRM scriptimiz bunları çözmek için yazıldı.', items: [{ icon: 'mobile', title: 'Birden fazla telefon, sıfır kontrol', desc: 'Üç personel, üç telefon. Kim ne cevapladı bilinmiyor.' }, { icon: 'clock', title: 'Gece 2\'de cevap', desc: 'Otomatik yanıt yoksa biri her zaman nöbette.' }, { icon: 'list', title: 'Toplu mesaj yorucu', desc: '200 kişiye tek tek kopyala-yapıştır. Saatler sürer.' }] },
        steps: { eyebrow: 'Nasıl çalışır', title: '3 adımda hazır', desc: 'Bizdavar ekibi scripti kurar, yapılandırır ve eğitir.', items: [{ num: '01', icon: 'link', title: 'Numaranızı bağlayın', desc: 'Mevcut WhatsApp Business numaranızı özel panele bağlayın.' }, { num: '02', icon: 'users', title: 'Ekibinizi ekleyin', desc: 'Personeli davet edin, roller atayın.' }, { num: '03', icon: 'rocket', title: 'Büyüyün ve otomatikleştirin', desc: 'Otomatik yanıt, toplu kampanyalar, her konuşmayı takip edin.' }], cta: 'Özel yazılım — iletişime geçin' },
        features: { eyebrow: 'Özellikler', title: 'Ekibinizin ihtiyacı olan her şey', desc: 'Sadece sohbet değil — WhatsApp etrafında tam CRM, özel kod.', items: [{ icon: 'inbox', title: 'Birleşik ekip gelen kutusu', desc: 'Tüm konuşmalar tek yerde.' }, { icon: 'send', title: 'Toplu mesaj', desc: 'Binlerce kişiye kişiselleştirilmiş mesaj.' }, { icon: 'robot', title: '7/24 otomatik yanıt', desc: 'Mesai dışı, anahtar kelime, karşılama kuralları.' }, { icon: 'chart-bar', title: 'Analitik ve raporlar', desc: 'Yanıt süresi, hacim, ekip performansı.' }, { icon: 'users', title: 'Rol tabanlı erişim', desc: 'Yönetici, operatör, gözlemci.' }, { icon: 'plug', title: 'API entegrasyonu', desc: 'Mevcut CRM veya e-ticaret sisteminize REST API.' }] },
        audiences: { eyebrow: 'Kimler için', title: 'Sizin gibi işletmeler için', desc: 'WhatsApp\'ta müşteriyle konuşan her ekip.', items: [{ icon: 'health', title: 'Klinik ve sağlık', region: 'Türkiye · BAE · Avrupa', desc: 'Randevu, hatırlatma, takip.', tag: 'Randevu otomasyonu' }, { icon: 'bag', title: 'E-ticaret', region: 'Tüm bölgeler', desc: 'Sipariş güncellemeleri, sepet kurtarma.', tag: 'Toplu kampanya' }, { icon: 'home', title: 'Emlak', region: 'Dubai · İstanbul', desc: 'İlan paylaşımı, lead takibi.', tag: 'Lead takibi' }, { icon: 'utensils', title: 'Restoran', region: 'Türkiye · Avrupa', desc: 'Rezervasyon, paket servis.', tag: 'Otomatik rezervasyon' }] },
        pricing: { eyebrow: 'Fiyat', title: 'WhatsApp CRM script planları', desc: 'Tek seferlik ödeme — script ve panelin tam sahipliği.', note: 'Tek seferlik ödeme — kurulum, yapılandırma ve ilk eğitim dahil.', plans: [{ id: 'basic', name: 'Temel', price: '$500', period: '', desc: 'Küçük ekipler için WhatsApp CRM script.', features: ['1 WhatsApp numarası', 'Ekip paneli', 'Ortak gelen kutusu', 'Temel otomatik yanıt', 'Kurulum'], cta: 'Özel yazılım — iletişime geçin', href: '/pages/contact?product=whatsapp-crm-basic' }, { id: 'pro', name: 'Profesyonel', price: '$800', period: '', badge: 'En popüler', desc: 'Toplu mesajlı büyüyen işletmeler için.', features: ['Temel plandaki her şey', 'Toplu mesaj', 'Gelişmiş otomatik yanıt', 'Analitik', '4 dil UI'], cta: 'Özel yazılım — iletişime geçin', href: '/pages/contact?product=whatsapp-crm-pro', featured: true }, { id: 'enterprise', name: 'Kurumsal', price: '$1,200', period: '', desc: 'Çoklu numara, API ve özel entegrasyon.', features: ['Profesyonel plandaki her şey', 'Özel API', 'Çoklu numara', 'CRM entegrasyonu', 'Öncelikli destek'], cta: 'Özel yazılım — iletişime geçin', href: '/pages/contact?product=whatsapp-crm-enterprise' }] },
        faq: { eyebrow: 'SSS', title: 'Sık sorulan sorular', items: [{ q: 'WhatsApp CRM script ne kadar?', a: 'Üç plan: $500, $800 ve $1,200 — tek seferlik ödeme, aylık abonelik yok.' }, { q: 'Birden fazla personel aynı numarayı kullanabilir mi?', a: 'Evet — sınırsız personel, tek panel ve tek numara.' }, { q: 'Toplu mesaj var mı?', a: 'Evet — Profesyonel ($800) ve Kurumsal ($1,200) planlarda.' }, { q: 'Özel script mi yoksa SaaS mı?', a: 'Bizdavar ekibinin özel kodu — tam sahiplik, üçüncü taraf platforma bağımlılık yok.' }, { q: 'Türkçe destek var mı?', a: 'Evet — TR, AR, FA ve EN UI ve destek.' }] },
        about: { title: 'Bizdavar tarafından özel geliştirme', body: 'Bu <strong>WhatsApp CRM scripti</strong>, <strong>Bizdavar ekibi</strong> tarafından özel kodla yazılmıştır — ekip paneli, web uygulaması ve API sizin kontrolünüzde.', ctaContact: 'Özel yazılım — iletişime geçin', ctaPortfolio: 'Örnek işler' },
        cta: { title: 'Özel script mi istiyorsunuz?', desc: '$500, $800 veya $1,200 planları — projenizi konuşalım.', btnStart: 'Özel yazılım — iletişime geçin', btnPricing: 'Planları gör' },
        related: { title: 'İlgili ürün ve hizmetler' },
        geoText: 'Türkiye, BAE, Avrupa ve İran için WhatsApp CRM scripti — Bizdavar Group özel geliştirme.'
      },
      bzDiamond: {
        hero: { tag: 'Web tasarım örneği', title: 'BZ Diamond — Web sitesi ve online mağaza tasarımı', desc: 'Mücevher ve pırlanta alanında müşteri projesi — tasarım, geliştirme ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>BZ Diamond</strong>, Bizdavar Group müşterilerinden biridir — online pırlanta ve mücevher satışına odaklanan bir marka. Web sitesi, WooCommerce mağazası, e-posta altyapısı ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>, Bizdavar’ın endüstriyel iş birimi değildir.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['Kurumsal ve e-ticaret web sitesi tasarımı ve geliştirme', 'WooCommerce uygulaması — online pırlanta ve mücevher satışı', 'Kurumsal e-posta yönetimi ve yapılandırması (alan adı ve posta kutuları)', 'SEO, içerik yapısı ve ürün sayfası optimizasyonu', 'RTL ve çok dilli arayüz (Türkçe / Farsça / İngilizce)', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'BZ Diamond, GIA ve lab-grown elmas ile mücevher seçimi eğitimi alanında faaliyet gösterir. Ürün ve fiyat detayları müşterinin resmi web sitesinde yayınlanır.', ctaSite: 'BZ Diamond web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'Türkiye ve uluslararası markalar için web tasarım örneği — WooCommerce, SEO ve İstanbul merkezli destek.'
      },
      supplifyTrade: {
        hero: { tag: 'Web tasarım örneği', title: 'Supplify Trade — Uluslararası ticaret web sitesi', desc: 'BAE (RAKEZ) merkezli B2B müşteri projesi — kurumsal web tasarımı, SEO ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>Supplify Trade FZ-LLC</strong>, Bizdavar Group müşterilerinden biridir — Ras Al Khaimah Ekonomik Bölgesi (RAKEZ) lisanslı uluslararası ticaret ve sourcing şirketi. Kurumsal web sitesi, içerik yapısı, temel SEO ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['B2B kurumsal web sitesi tasarımı ve geliştirme', 'Çok bölümlü arayüz (hizmetler, sektörler, süreç, iletişim)', 'Temel SEO, içerik yapısı ve dönüşüm sayfaları (RFQ)', 'Mobil ve performans optimizasyonu', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'Supplify Trade FZ-LLC uluslararası sourcing, tedarik, kalite kontrol ve lojistik alanında faaliyet gösterir — inşaat malzemeleri, endüstriyel ürünler, tarım ekipmanları ve otomotiv yedek parçaları. Hizmet ve teklif detayları müşterinin resmi web sitesinde yayınlanır.', ctaSite: 'Supplify Trade web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'BAE ve Ortadoğu’daki uluslararası ticaret şirketleri için web tasarım örneği — Bizdavar Group.'
      },
      kayaOne: {
        hero: { tag: 'Web tasarım örneği', title: 'Kaya One AG — İsviçre ticaret web sitesi', desc: 'İsviçre merkezli B2B müşteri projesi — kurumsal web tasarımı, SEO ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>Kaya One AG</strong>, Bizdavar Group müşterilerinden biridir — İsviçre’de (Brunnen, Schwyz) kayıtlı ticaret ve endüstriyel çözümler şirketi (UID: CHE-351.641.458). Kurumsal web sitesi, içerik yapısı, temel SEO ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['B2B kurumsal web sitesi tasarımı ve geliştirme', 'Çok bölümlü arayüz (hizmetler, sektörler, hakkımızda, iletişim)', 'Temel SEO, içerik yapısı ve dönüşüm sayfaları', 'Mobil ve performans optimizasyonu', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'Kaya One AG uluslararası ticaret, ağır ekipman ve lojistik alanında faaliyet gösterir — tarım ve gıda ürünleri, metal ve çelik, kamyon ve endüstriyel makineler. Hizmet detayları müşterinin resmi web sitesinde yayınlanır.', ctaSite: 'Kaya One AG web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'İsviçre ve uluslararası ticaret şirketleri için web tasarım örneği — Bizdavar Group.'
      },
      smmTurk: {
        hero: { tag: 'Web tasarım örneği', title: 'SMM Turk — SMM paneli ve web sitesi tasarımı', desc: 'Türkiye merkezli müşteri projesi — panel arayüzü, web sitesi ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>SMM Turk</strong>, Bizdavar Group müşterilerinden biridir — rekabetçi fiyatlı, 7/24 otomatik teslimatlı ve ortaklık (affiliate / bayi) programlı bir SMM paneli. Web sitesi ve panel deneyimi, içerik yapısı, temel SEO ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['SMM web sitesi ve kullanıcı paneli tasarımı', 'Giriş, kayıt ve dashboard arayüzü', 'Temel SEO, içerik yapısı ve dönüşüm sayfaları', 'Mobil ve performans optimizasyonu', 'Teknik destek, güncelleme ve bakım'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'SMM Turk sosyal medya hizmet paneli sunar — otomatik sipariş, kripto ödeme (BTC, ETH, USDT), bayi paneli ve API. Fiyat ve hizmet detayları müşterinin resmi web sitesinde yayınlanır.', ctaSite: 'SMM Turk web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'Türkiye ve uluslararası pazar için SMM paneli web tasarım örneği — Bizdavar Group.'
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
        products: { title: 'Content areas covered', desc: 'Examples of areas covered in this project — technical supply via <a href="services#industrial">Bizdavar Group</a>', vega: 'Level and pressure sensors', prosense: 'Gas and flame detectors', gamak: 'Industrial electric motors', industrialTitle: 'Industrial equipment', industrialDesc: 'B2B consulting and supply' },
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
            { href: '/pages/fxguard', icon: 'chat-wa', title: 'WhatsApp CRM', desc: 'WhatsApp CRM script' },
            { href: '/pages/fast', icon: 'bolt', title: 'Fast Studio', desc: 'Web design' },
            { href: '/pages/portfolio', icon: 'briefcase', title: 'Portfolio', desc: 'Fintech & Web3' },
            { href: '/pages/services', icon: 'list', title: 'Services', desc: 'Web & fintech' }
          ]
        },
        geoText: 'DeFi and Web3 module development — part of Bizdavar Group fintech and web services.'
      },
      fxguard: {
        hero: { tag: 'Custom script · WhatsApp CRM', title: 'WhatsApp CRM — Custom script for your team', desc: 'Script written by the Bizdavar team — one number, one panel, bulk messaging and auto-reply. Full ownership, no monthly subscription.', regionItems: [
            { code: 'TR', label: 'Turkey' },
            { code: 'AE', label: 'Dubai' },
            { code: 'EU', label: 'Europe' },
            { code: 'IR', label: 'Iran' }
          ],
          regions: 'Turkey · Dubai · Europe · Iran', trust: '100% custom code · Bizdavar support', ctaPricing: 'See plans', ctaContact: 'Custom development — contact us' },
        stats: { businesses: 'Script plans', regions: 'Target markets', regionsVal: 'TR · AE · EU · IR', uptime: 'Custom code', setup: 'Est. delivery', setupSuffix: ' days' },
        problem: { eyebrow: 'The problem', title: 'Sound familiar?', desc: 'Every growing business hits these walls — our WhatsApp CRM script was built to solve them.', items: [{ icon: 'mobile', title: 'Multiple phones, zero control', desc: 'Three staff, three phones. Nobody knows who replied.' }, { icon: 'clock', title: 'Replying at 2am', desc: 'Without auto-replies someone is always on call.' }, { icon: 'list', title: 'Bulk messaging is exhausting', desc: 'Copy-pasting to 200 contacts one by one. Hours per campaign.' }] },
        steps: { eyebrow: 'How it works', title: 'Up & running in 3 steps', desc: 'The Bizdavar team installs, configures and trains your team.', items: [{ num: '01', icon: 'link', title: 'Connect your number', desc: 'Link your existing WhatsApp Business number to the custom panel.' }, { num: '02', icon: 'users', title: 'Add your team', desc: 'Invite staff, assign roles. Everyone replies from one dashboard.' }, { num: '03', icon: 'rocket', title: 'Grow & automate', desc: 'Auto-replies, bulk campaigns, track every conversation.' }], cta: 'Custom development — contact us' },
        features: { eyebrow: 'Features', title: 'Everything your team needs', desc: 'Not just chat — a full CRM built around WhatsApp with custom code.', items: [{ icon: 'inbox', title: 'Unified team inbox', desc: 'All conversations in one place.' }, { icon: 'send', title: 'Bulk messaging', desc: 'Personalized messages to thousands.' }, { icon: 'robot', title: 'Auto-response 24/7', desc: 'After-hours rules, keywords, greetings.' }, { icon: 'chart-bar', title: 'Analytics & reports', desc: 'Response times, volume, team performance.' }, { icon: 'users', title: 'Role-based access', desc: 'Manager, agent, viewer.' }, { icon: 'plug', title: 'API integration', desc: 'Connect to your CRM or e-commerce via REST API.' }] },
        audiences: { eyebrow: 'Who it\'s for', title: 'Built for businesses like yours', desc: 'Any team that talks to customers on WhatsApp.', items: [{ icon: 'health', title: 'Clinics & healthcare', region: 'Turkey · UAE · Europe', desc: 'Appointments, reminders, follow-ups.', tag: 'Booking automation' }, { icon: 'bag', title: 'E-commerce', region: 'All regions', desc: 'Order updates, cart recovery.', tag: 'Bulk campaigns' }, { icon: 'home', title: 'Real estate', region: 'Dubai · Istanbul', desc: 'Listings, lead follow-up.', tag: 'Lead tracking' }, { icon: 'utensils', title: 'Restaurants', region: 'Turkey · Europe', desc: 'Reservations, catering.', tag: 'Auto-reservation' }] },
        pricing: { eyebrow: 'Pricing', title: 'WhatsApp CRM script plans', desc: 'One-time payment — full ownership of script and panel.', note: 'One-time payment — includes setup, configuration and initial training.', plans: [{ id: 'basic', name: 'Basic', price: '$500', period: '', desc: 'WhatsApp CRM script for small teams.', features: ['1 WhatsApp number', 'Team panel', 'Shared inbox', 'Basic auto-reply', 'Setup & onboarding'], cta: 'Custom development — contact us', href: '/pages/contact?product=whatsapp-crm-basic' }, { id: 'pro', name: 'Professional', price: '$800', period: '', badge: 'Most popular', desc: 'For growing businesses with bulk messaging.', features: ['Everything in Basic', 'Bulk messaging', 'Advanced auto-reply', 'Analytics', '4-language UI'], cta: 'Custom development — contact us', href: '/pages/contact?product=whatsapp-crm-pro', featured: true }, { id: 'enterprise', name: 'Enterprise', price: '$1,200', period: '', desc: 'Multiple numbers, API and custom integrations.', features: ['Everything in Pro', 'Custom API', 'Multiple numbers', 'CRM integration', 'Priority support'], cta: 'Custom development — contact us', href: '/pages/contact?product=whatsapp-crm-enterprise' }] },
        faq: { eyebrow: 'FAQ', title: 'Common questions', items: [{ q: 'How much does the WhatsApp CRM script cost?', a: 'Three plans: $500, $800 and $1,200 — one-time payment, no monthly subscription.' }, { q: 'Can multiple staff use one number?', a: 'Yes — unlimited staff on one panel and one WhatsApp Business number.' }, { q: 'Does it support bulk messaging?', a: 'Yes — on Professional ($800) and Enterprise ($1,200) plans.' }, { q: 'Is it custom script or SaaS?', a: 'Custom code by the Bizdavar team — full ownership, no third-party platform dependency.' }, { q: 'Does it support Farsi and Turkish?', a: 'Yes — EN, AR, TR and FA UI and support.' }] },
        about: { title: 'Custom development by Bizdavar', body: 'This <strong>WhatsApp CRM script</strong> is custom-built by the <strong>Bizdavar team</strong> — team panel, web app and API under your control.', ctaContact: 'Custom development — contact us', ctaPortfolio: 'Case studies' },
        cta: { title: 'Need a custom script?', desc: '$500, $800 or $1,200 plans — contact us to discuss your project.', btnStart: 'Custom development — contact us', btnPricing: 'See plans' },
        related: { title: 'Related products & services' },
        geoText: 'WhatsApp CRM script for Turkey, UAE, Europe and Iran — custom development by Bizdavar Group.'
      },
      bzDiamond: {
        hero: { tag: 'Web design case study', title: 'BZ Diamond — Website and online store design', desc: 'Client project in jewelry and diamonds — design, development and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>BZ Diamond</strong> is a Bizdavar Group client focused on online diamond and jewelry sales. We designed and implemented the website, WooCommerce store, email infrastructure and technical support. This page is a <strong>web design case study</strong>, not part of Bizdavar’s industrial business.', servicesTitle: 'Services delivered by Bizdavar', services: ['Corporate and e-commerce website design and development', 'WooCommerce implementation — online diamond and jewelry sales', 'Corporate email management and configuration (domain and mailboxes)', 'SEO, content structure and product page optimization', 'RTL and multilingual interface (Persian / English)', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'BZ Diamond operates in GIA and lab-grown diamonds and jewelry selection education. Product and pricing details are published on the client’s official website.', ctaSite: 'View the BZ Diamond website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for Iranian and international brands — WooCommerce, SEO and support from Istanbul and Tabriz.'
      },
      supplifyTrade: {
        hero: { tag: 'Web design case study', title: 'Supplify Trade — International trade website', desc: 'UAE (RAKEZ) B2B client project — corporate web design, SEO and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>Supplify Trade FZ-LLC</strong> is a Bizdavar Group client — a RAKEZ-licensed international trade and sourcing company in Ras Al Khaimah, UAE. We designed and implemented the corporate website, content structure, foundational SEO and technical support. This page is a <strong>web design case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['B2B corporate website design and development', 'Multi-section UI (services, industries, process, contact)', 'Foundational SEO, content structure and conversion pages (RFQ)', 'Mobile and performance optimization', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'Supplify Trade FZ-LLC operates in international sourcing, procurement, quality control and logistics — construction materials, industrial goods, agricultural equipment and automotive spare parts. Service and quotation details are published on the client’s official website.', ctaSite: 'View the Supplify Trade website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for international trading companies in the UAE and Middle East — Bizdavar Group.'
      },
      kayaOne: {
        hero: { tag: 'Web design case study', title: 'Kaya One AG — Swiss trade website', desc: 'Switzerland B2B client project — corporate web design, SEO and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>Kaya One AG</strong> is a Bizdavar Group client — a Swiss-registered trading and industrial solutions company in Brunnen, Canton of Schwyz (UID: CHE-351.641.458). We designed and implemented the corporate website, content structure, foundational SEO and technical support. This page is a <strong>web design case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['B2B corporate website design and development', 'Multi-section UI (services, industries, about, contact)', 'Foundational SEO, content structure and conversion pages', 'Mobile and performance optimization', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'Kaya One AG operates in international trade, heavy equipment and logistics — agricultural and food products, metals and steel, trucks and industrial machinery. Service details are published on the client’s official website.', ctaSite: 'View the Kaya One AG website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for Swiss and international trading companies — Bizdavar Group.'
      },
      smmTurk: {
        hero: { tag: 'Web design case study', title: 'SMM Turk — SMM panel and website design', desc: 'Turkey client project — panel UI, website and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>SMM Turk</strong> is a Bizdavar Group client — an SMM panel platform for social growth with competitive pricing, 24/7 automated delivery and affiliate / reseller programs. We designed and implemented the website and panel experience, content structure, foundational SEO and technical support. This page is a <strong>web design case study</strong>.', servicesTitle: 'Services delivered by Bizdavar', services: ['SMM website and user panel design', 'Login, signup and dashboard UI', 'Foundational SEO, content structure and conversion pages', 'Mobile and performance optimization', 'Technical support, updates and maintenance'], clientTitle: 'Client field of activity', clientBody: 'SMM Turk provides a social media services panel — automated orders, crypto payments (BTC, ETH, USDT), reseller panel and API. Pricing and service details are published on the client’s official website.', ctaSite: 'View the SMM Turk website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for SMM panels in Turkey and international markets — Bizdavar Group.'
      },
      fxguardExchange: {
        hero: { tag: 'Fintech case study', title: 'FXGuard Exchange — Toman–Lira exchange platform', desc: 'Iran ↔ Turkey currency exchange web app — live rates, tracked orders, KYC and step-by-step settlement by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>FXGuard Exchange</strong> is a specialized Toman–Lira exchange platform designed and developed by Bizdavar Group — focused on the <strong>IRR ↔ TRY</strong> corridor with transparent reference rates, unique order IDs, KYC, a conversion calculator, live rate tables and step-by-step tracking through settlement. This page is a <strong>web and fintech case study</strong> and is separate from the WhatsApp CRM script product.', servicesTitle: 'Services delivered by Bizdavar', services: ['Currency exchange web app design (Persian RTL)', 'Live rates dashboard, conversion calculator and currency tables', 'Order registration, ID-based tracking and KYC flow', 'Light/dark theme, rate-page SEO and content structure', 'Account security (login, 2FA) and order-linked support'], clientTitle: 'Product field of activity', clientBody: 'FXGuard Exchange is specialized Toman–Lira infrastructure for the Iran–Turkey corridor. Live orders currently run on IRR ↔ TRY only; other currencies (USD, EUR, AED…) are shown as price references — not a crypto market.', ctaSite: 'View FXGuard Exchange', ctaCrm: 'WhatsApp CRM script', ctaPortfolio: 'Other case studies' },
        geoText: 'Fintech design case study for the Iran ↔ Turkey corridor — built by Bizdavar Group.'
      }
    }
  };

  const articleSlugs = [
    'what-is-digital-marketing',
    'digital-marketing',
    'social-media-management',
    'fast-studio',
    'industrial-sensors',
    'about-bizdavar-group'
  ];

  const articleCta = {
    fa: { text: 'برای مشاوره تخصصی با بیزدوار تماس بگیرید.', btnPrimary: 'مشاوره رایگان', btnSecondary: 'مشاهده خدمات' },
    tr: { text: 'Uzman danışmanlık için Bizdavar ile iletişime geçin.', btnPrimary: 'Ücretsiz danışmanlık', btnSecondary: 'Hizmetleri gör' },
    en: { text: 'Contact Bizdavar for expert consulting.', btnPrimary: 'Free consultation', btnSecondary: 'View services' }
  };

  function asArticles(lang) {
    return articleSlugs.reduce((acc, slug, i) => {
      const row = blogPosts[lang][i] || blogPosts[lang][1];
      acc[slug] = {
        category: row[2],
        title: row[0],
        dateDisplay: lang === 'fa' ? 'بیزدوار گروپ · <time>۱۴۰۴</time>' : lang === 'tr' ? 'Bizdavar Group · <time>2025</time>' : 'Bizdavar Group · <time>2025</time>',
        cta: articleCta[lang]
      };
      return acc;
    }, {});
  }

  ['fa', 'tr', 'en'].forEach(lang => {
    if (!window.BIZDAVAR_LOCALES || !window.BIZDAVAR_LOCALES[lang]) return;
    if (page[lang].fastPage) {
      page[lang].fastPage.hostingNote = fastHostingNote[lang];
      page[lang].fastPage.ui = fastPageUi[lang];
      page[lang].fastPage.relatedLinks = fastRelatedLinks[lang];
      page[lang].fastPage.schema = fastSchema[lang];
    }
    Object.assign(window.BIZDAVAR_LOCALES[lang], page[lang], {
      blogPosts: asBlogRows(blogPosts[lang]),
      caseStudy: caseStudy[lang],
      articles: asArticles(lang)
    });
  });
})();
