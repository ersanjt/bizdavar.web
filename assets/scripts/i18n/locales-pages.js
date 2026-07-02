/**
 * Page-level translations for subpages and JS-rendered content.
 */
(function () {
  const serviceBlocks = {
    fa: [
      { title: 'بازاریابی دیجیتال', subtitle: 'Digital Marketing · استراتژی و اجرای کمپین', body: 'در بیزدوار گروپ، با اجرای استراتژی‌های نوین بازاریابی دیجیتال، نرخ تبدیل مشتریان را به‌طور قابل‌توجهی افزایش می‌دهیم. مطلب مرتبط: <a href="articles/digital-marketing">چگونه دیجیتال مارکتینگ فروش را افزایش می‌دهد؟</a>', tags: ['Google Ads', 'سئو', 'CRO', 'اتوماسیون'], checks: ['تحلیل رقبا و بازار هدف', 'کمپین‌های تبلیغاتی Google و شبکه‌های اجتماعی', 'بهینه‌سازی نرخ تبدیل (CRO)', 'اتوماسیون بازاریابی و ایمیل مارکتینگ', 'گزارش‌دهی و تحلیل عملکرد'], cta: 'درخواست مشاوره' },
      { title: 'طراحی و توسعه وب', subtitle: 'Web Design · Fast Web Studio', body: 'طراحی سایت شرکتی، فروشگاه اینترنتی، لندینگ پیج و پنل‌های اختصاصی با تحویل سریع از طریق <a href="fast">Fast Web Studio</a>.', tags: ['ریسپانسیو', 'WooCommerce', 'سئو پایه', '۵ روز تحویل'], checks: ['طراحی ریسپانسیو با فونت فارسی Vazirmatn', 'فروشگاه WooCommerce و درگاه پرداخت', 'سئو پایه و بهینه‌سازی سرعت', 'اتصال واتساپ و <a href="contact">فرم تماس</a>', 'آموزش مدیریت و پشتیبانی', '<a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a> — نمونه‌کار طراحی وب B2B'], cta: 'مشاهده پلن‌های Fast Studio' },
      { title: 'مدیریت شبکه‌های اجتماعی (SMM)', subtitle: 'Social Media · محتوا و تبلیغات', body: 'تولید محتوا، مدیریت صفحات، تبلیغات هدفمند در <a href="https://www.instagram.com/bizdavar" target="_blank" rel="noopener noreferrer me">اینستاگرام</a>، <a href="https://www.linkedin.com/in/ersanjt" target="_blank" rel="noopener noreferrer me">لینکدین</a> و سایر پلتفرم‌ها.', tags: ['تقویم محتوا', 'Paid Social', 'طراحی گرافیک'], checks: ['تقویم محتوایی ماهانه', 'طراحی گرافیک و ویدیو', 'مدیریت تبلیغات Paid Social', 'گزارش رشد و تعامل'], cta: 'شروع همکاری SMM' },
      { title: 'تامین تجهیزات صنعتی', subtitle: 'Industrial Supply · B2B', body: 'مشاوره و تامین تجهیزات صنعتی شامل سنسورها، دتکتور گاز، GPS ناوگان، پمپ‌ها، موتور و ابزار دقیق. کاتالوگ: <a href="vega">VEGA</a> · <a href="prosense">Prosense</a> · <a href="teltonika">Teltonika</a> · <a href="gamak">Gamak</a>.', tags: ['SIL2/3', 'لجستیک', 'مشاوره فنی'], checks: ['<a href="vega">سنسورهای VEGA</a> — VEGAPULS، VEGABAR، VEGAPOINT', '<a href="prosense">Prosense</a> — PQ، SafeVader، SOMA، PPS+', '<a href="teltonika">Teltonika</a> — FMB920، FMC650، Fleet Telematics', '<a href="gamak">الکتروموتور Gamak</a> — موتورهای صنعتی ترکیه', '<a href="digi-system">Digi System</a> — POS و تجهیزات خرده‌فروشی', '<a href="teraoka">Teraoka Seiko</a> — ترازو و تجهیزات فروشگاهی', 'مشاوره فنی و انتخاب تجهیز', 'تامین و لجستیک بین‌المللی'], cta: 'استعلام قیمت تجهیزات' }
    ],
    tr: [
      { title: 'Dijital pazarlama', subtitle: 'Digital Marketing · Strateji ve kampanya yönetimi', body: 'Bizdavar Group modern dijital pazarlama stratejileriyle dönüşüm oranını ve online satışı artırır. İlgili yazı: <a href="articles/digital-marketing">Dijital pazarlama satışları nasıl artırır?</a>', tags: ['Google Ads', 'SEO', 'CRO', 'Otomasyon'], checks: ['Rakip ve hedef kitle analizi', 'Google ve sosyal medya kampanyaları', 'Dönüşüm oranı optimizasyonu (CRO)', 'Pazarlama otomasyonu ve e-posta', 'Performans raporlama ve analiz'], cta: 'Danışmanlık iste' },
      { title: 'Web tasarım ve geliştirme', subtitle: 'Web Design · Kurumsal site, e-ticaret ve landing', body: 'Kurumsal web sitelerinden WooCommerce mağazalara ve kampanya landing sayfalarına kadar hız, UX, SEO ve dönüşüm odaklı geliştirme. Hızlı teslim için <a href="fast">Fast Web Studio</a>’yu inceleyin.', tags: ['WordPress', 'WooCommerce', 'Landing', 'SEO'], checks: ['Responsive UI/UX tasarımı', 'Kurumsal veya e-ticaret site kurulumu', 'İletişim formu, WhatsApp ve sosyal ağ bağlantıları', 'Hız, güvenlik ve SSL optimizasyonu', 'Site yönetimi eğitimi'], cta: 'Web tasarım planlarını gör' },
      { title: 'SMM yönetimi', subtitle: 'Social Media Management · İçerik, reklam ve büyüme', body: 'Sosyal medyada profesyonel görünmek isteyen markalar için içerik takvimi, tasarım, metin, kampanya ve büyüme raporu.', tags: ['Instagram', 'LinkedIn', 'Content', 'Ads'], checks: ['İçerik stratejisi ve yayın takvimi', 'Post ve story tasarımı', 'Farsça, Türkçe ve İngilizce metin yazımı', 'Hedefli reklam ve kampanya', 'Aylık rapor ve iyileştirme önerisi'], cta: 'SMM iş birliğine başla' },
      { title: 'Endüstriyel ekipman tedariki', subtitle: 'Industrial Supply · VEGA, Prosense, Gamak', body: 'B2B projeler için sensör, dedektör, motor ve pompa tedarikinde teknik seçim, fiyat teklifi ve lojistik desteği.', tags: ['VEGA', 'Prosense', 'Gamak', 'B2B'], checks: ['Model ve sipariş kodu danışmanlığı', 'Şeffaf teklif ve proforma', 'Uluslararası lojistik ve gümrük koordinasyonu', 'Datasheet ve teknik doküman desteği', 'İran ve bölgesel projelere teslimat'], cta: 'Ekipman teklifi iste' }
    ],
    en: [
      { title: 'Digital marketing', subtitle: 'Digital Marketing · Strategy and campaign delivery', body: 'Bizdavar Group increases conversion and online sales through modern digital marketing strategies. Related article: <a href="articles/digital-marketing">How digital marketing increases sales</a>.', tags: ['Google Ads', 'SEO', 'CRO', 'Automation'], checks: ['Competitor and audience analysis', 'Google and social media campaigns', 'Conversion rate optimization (CRO)', 'Marketing automation and email', 'Performance reporting and analysis'], cta: 'Request consulting' },
      { title: 'Web design and development', subtitle: 'Web Design · Corporate, e-commerce and landing pages', body: 'From corporate sites to WooCommerce stores and landing pages, we build for speed, UX, SEO and conversion. For fast delivery, see <a href="fast">Fast Web Studio</a>.', tags: ['WordPress', 'WooCommerce', 'Landing', 'SEO'], checks: ['Responsive UI/UX design', 'Corporate or e-commerce implementation', 'Contact form, WhatsApp and social links', 'Speed, security and SSL optimization', 'Website management training'], cta: 'View web design plans' },
      { title: 'SMM management', subtitle: 'Social Media Management · Content, ads and growth', body: 'Content calendar, post design, captions, campaigns and growth reporting for brands that want a professional social media presence.', tags: ['Instagram', 'LinkedIn', 'Content', 'Ads'], checks: ['Content strategy and publishing calendar', 'Post and story design', 'Persian, Turkish and English copywriting', 'Targeted ads and campaigns', 'Monthly reporting and improvement ideas'], cta: 'Start SMM cooperation' },
      { title: 'Industrial equipment supply', subtitle: 'Industrial Supply · VEGA, Prosense, Gamak', body: 'Technical selection, quotation and supply support for B2B industrial projects, from sensors and detectors to motors and pumps.', tags: ['VEGA', 'Prosense', 'Gamak', 'B2B'], checks: ['Model and order-code consulting', 'Transparent quote and proforma', 'International logistics and customs coordination', 'Datasheet and technical document support', 'Delivery to Iran and regional projects'], cta: 'Request equipment quote' }
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
      navPlans: 'Plans', navCompare: 'Compare', navTimeline: '5-day path', navShowcase: 'Showcase', navFaq: 'FAQ',
      oneTime: 'One-time payment', orderWa: 'Order on WhatsApp', orContact: 'or contact form',
      compareFeature: 'Features', compareBasic: 'Basic', compareStore: 'Store', comparePro: 'Pro',
      viewCase: 'View', navAria: 'Fast Web Studio sections'
    }
  };

  const page = {
    fa: {
      aboutPage: { hero: { tag: 'درباره بیزدوار', title: 'شریک رشد کسب‌وکار در دیجیتال و صنعت', desc: 'از سال ۱۳۹۲ — ۱۰۰+ پروژه در ۱۱ کشور · بازاریابی، وب، فین‌تک و تامین صنعتی' }, whatIs: { title: 'بیزدوار گروپ چیست؟', p1: 'بیزدوار گروپ (Bizdavar Group) آژانس دیجیتال و تامین‌کننده B2B است که از سال ۲۰۱۳ توسط <strong>ارسان جاهد تبریزی</strong> راه‌اندازی شده. خدمات ما شامل <a href="services#digital-marketing">بازاریابی دیجیتال</a>، <a href="fast">طراحی وب</a>، پلتفرم‌های فین‌تک، مدیریت SMM و <a href="services#industrial">تامین تجهیزات صنعتی</a> است.', p2: 'بیش از ۱۰۰ پروژه وب و پلتفرم سفارشی در ۱۱ کشور — از ZedPay و Netinode تا Bear Event و تامین VEGA. زیرساخت دیجیتال، دامنه، هاست، SSL و پشتیبانی فنی نیز تحت مدیریت ما است. <a href="portfolio">مشاهده نمونه‌کارها</a>' }, features: ['بازاریابی دیجیتال', 'طراحی وب حرفه‌ای', 'تامین تجهیزات', 'مدیریت زیرساخت'], sections: { identityEyebrow: 'شناسنامه سازمانی', identityTitle: 'بیزدوار گروپ در یک نگاه', leadershipEyebrow: 'رهبری', leadershipTitle: 'بنیان‌گذار و تیم', activitiesEyebrow: 'دسته‌بندی فعالیت', activitiesTitle: 'حوزه‌های تخصصی', ecosystemEyebrow: 'اکوسیستم', ecosystemTitle: 'برندها و پروژه‌های مرتبط', ecosystemDesc: 'نمونه‌ای از اکوسیستم دیجیتال و صنعتی که بیزدوار در توسعه یا مدیریت آن نقش داشته', presenceEyebrow: 'حضور جهانی', presenceTitle: 'کشورهای فعال', presenceDesc: 'شبکه بین‌المللی پروژه‌ها — از استانبول و ایروان تا اروپا و آمریکا', credentialsEyebrow: 'گواهینامه‌ها', credentialsTitle: 'مهارت‌های تأییدشده', proofEyebrow: 'اعتبار حرفه‌ای', proofTitle: 'بازخورد و شاخص‌های اعتماد', proofDesc: 'بر اساس منابع عمومی قابل راستی‌آزمایی — بدون نظر ساختگی', faqEyebrow: 'سوالات متداول', faqTitle: 'پرسش‌های رایج درباره بیزدوار' }, values: { title: 'ارزش‌های ما', items: [{ title: 'تمرکز بر نتیجه', desc: 'افزایش فروش، تبدیل و رشد برند — نه فقط اجرا.' }, { title: 'همکاری شفاف', desc: 'گزارش‌دهی منظم و ارتباط مستقیم با تیم.' }, { title: 'بازار جهانی', desc: 'پروژه در ایران، ترکیه و بازارهای بین‌المللی.' }, { title: 'سرعت اجرا', desc: 'Fast Web Studio — تحویل سایت در ۵ روز.' }] }, cta: { title: 'آماده همکاری با بیزدوار هستید؟', desc: 'مشاوره اولیه رایگان — از طریق <a href="contact" class="link-yellow">فرم تماس</a> یا واتساپ.', btn: 'تماس با ما' } },
      servicesPage: { hero: { tag: 'خدمات ما', title: 'راهکارهای جامع برای رشد کسب‌وکار', desc: 'از استراتژی دیجیتال تا تامین تجهیزات صنعتی — <a href="about">بیزدوار گروپ</a> در چهار محور اصلی همراه شماست.' }, overview: { eyebrow: 'نمای کلی', title: 'چهار محور خدمات بیزدوار', desc: 'برای مشاهده جزئیات هر خدمت، روی کارت کلیک کنید یا از منوی بالا استفاده کنید.' }, navAria: 'فهرست خدمات', viewDetails: 'مشاهده جزئیات', stats: [{ value: '۴', label: 'محور خدمات' }, { value: '۱۰۰+', label: 'پروژه' }, { value: '۱۱', label: 'کشور فعال' }, { value: '۱۳+', label: 'سال تجربه' }], cards: serviceBlocks.fa.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.fa, panels: servicesPanels.fa, relatedLinks: servicesRelatedLinks.fa, process: { eyebrow: 'فرآیند همکاری', title: 'چگونه با ما کار می‌کنید؟', desc: 'مسیر همکاری ساده، شفاف و قابل پیگیری است.', steps: [{ title: 'مشاوره', desc: 'شناخت نیاز و اهداف کسب‌وکار' }, { title: 'طراحی راهکار', desc: 'پیشنهاد فنی و برآورد زمان‌بندی' }, { title: 'اجرا', desc: 'پیاده‌سازی، تامین یا راه‌اندازی کمپین' }, { title: 'پشتیبانی', desc: 'گزارش‌دهی، بهینه‌سازی و همراهی مستمر' }] }, cta: { title: 'نیاز به راهکار اختصاصی دارید؟', desc: 'مشاوره رایگان — نمونه پروژه‌ها در <a href="portfolio">نمونه‌کارهای بیزدوار</a>', btn: 'مشاوره رایگان', btnSecondary: 'مشاهده نمونه‌کارها' } },
      portfolioPage: { hero: { tag: 'نمونه‌کارها', title: 'پروژه‌ها و برندهایی که با ما رشد کرده‌اند', desc: 'اکوسیستم برندهای بیزدوار، نمونه‌کارهای طراحی وب و SMM، و مشتریانی که خدمات دیجیتال دریافت کرده‌اند — <a href="about">درباره بیزدوار</a>.' }, areas: { eyebrow: 'حوزه‌ها', title: 'دامنه فعالیت پروژه‌ها' }, archived: { eyebrow: 'پروژه‌های گذشته', title: 'همکاری‌های قبلی و ناتمام', desc: 'پروژه‌هایی که دیگر لینک زنده ندارند یا به‌صورت ناتمام متوقف شده‌اند — از جمله سایت‌هایی که سرورشان تمدید نشده یا مارکت‌پلیس‌هایی که تکمیل نشده‌اند. فقط به‌صورت خلاصه ذکر می‌شوند.' }, tags: ['فین‌تک و پرداخت', 'رویداد و بلیت', 'هلدینگ و سرمایه‌گذاری', 'هاستینگ و زیرساخت', 'طراحی وب و فروشگاه', 'مدیریت SMM', 'تامین صنعتی', 'سنسور VEGA', 'دتکتور Prosense', 'هواپیمایی', 'بروکر و مالی'], cta: { title: 'پروژه بعدی می‌تواند برند شما باشد', desc: 'از <a href="fast" class="link-yellow">طراحی وب</a> تا مدیریت DNS و SSL — بیزدوار همراه شماست.', btnPrimary: 'شروع پروژه جدید', btnSecondary: 'مشاهده خدمات' }, filters: [{ id: 'all', label: 'همه' }, { id: 'case-study', label: 'نمونه‌کارها' }, { id: 'client', label: 'مشتریان' }, { id: 'ecosystem', label: 'اکوسیستم' }, { id: 'fintech', label: 'فین‌تک' }, { id: 'digital', label: 'دیجیتال' }, { id: 'industrial', label: 'صنعتی' }, { id: 'other', label: 'سایر' }], roleLabels: { ecosystem: 'اکوسیستم', 'case-study': 'نمونه‌کار', client: 'مشتری', website: 'وبسایت', page: 'صفحه بیزدوار' }, statsLabels: ['پروژه و برند', 'نمونه‌کار', 'مشتری', 'اکوسیستم'], filterAria: 'فیلتر نمونه‌کارها', countText: '{count} مورد نمایش داده می‌شود', relatedLinks: portfolioRelatedLinks.fa },
      blogPage: { hero: { tag: 'وبلاگ', title: 'مطالب تخصصی دیجیتال و صنعت', desc: 'راهنماها و نکات کاربردی از تیم بیزدوار گروپ.' }, cta: { title: 'نیاز به مشاوره تخصصی دارید؟', desc: 'موضوع مطلب شما را در <a href="contact">فرم تماس</a> بنویسید — پاسخگوییم.', btn: 'درخواست مشاوره' }, geoText: 'مقالات تخصصی برای کسب‌وکارهای ایران و ترکیه — بازاریابی دیجیتال، طراحی وب و تامین تجهیزات صنعتی.' },
      privacyPage: { hero: { title: 'سیاست حفظ حریم خصوصی', desc: 'نحوه جمع‌آوری و استفاده از اطلاعات شما در وبسایت بیزدوار گروپ' }, sections: [{ title: '۱. اطلاعاتی که جمع‌آوری می‌شود', body: 'هنگام ارسال <a href="contact">فرم تماس</a>، نام، ایمیل، شماره تماس (اختیاری)، نوع خدمات و متن پیام شما دریافت می‌شود. این اطلاعات فقط برای پاسخ به درخواست شما استفاده می‌شود.' }, { title: '۲. نحوه استفاده', items: ['پاسخ به درخواست مشاوره و پیشنهاد خدمات', 'پیگیری پروژه‌های در حال مذاکره', 'بهبود کیفیت خدمات (بدون انتشار عمومی)'] }, { title: '۳. اشتراک‌گذاری با اشخاص ثالث', body: 'اطلاعات شما بدون رضایت صریح شما به اشخاص ثالث فروخته یا منتقل نمی‌شود، مگر الزامات قانونی.' }, { title: '۴. کوکی‌ها و تحلیل', body: 'این وبسایت استاتیک است و کوکی ردیابی شخص ثالث ندارد. در صورت افزودن ابزار تحلیل، این صفحه به‌روزرسانی خواهد شد.' }, { title: '۵. ارتباط با ما', body: 'برای سوالات حریم خصوصی: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> یا <a href="contact">فرم تماس</a>.' }], updated: 'آخرین به‌روزرسانی: فروردین ۱۴۰۴' },
      gamakPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Gamak برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب توان موتور تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Gamak برای پروژه‌های ایرانی', desc: 'GM/GMB · فلنج B5/B35 · IE2/IE3 · ترمزدار — برای استعلام هر سری دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل الکتروموتور Gamak', desc: 'موتور سه‌فاز و تک‌فاز — IE2/IE3 — فلنج، پایه، ترمزدار و پروژه‌ای' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Gamak در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع بار و توان مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'الکتروموتور Gamak برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Gamak', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Gamak</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت Gamak هستید؟', desc: 'توان kW، دور rpm و نوع فلنج را بفرستید — GM/GMB · IE2/IE3 · B3/B5', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Gamak' }, geoText: 'تامین Gamak از ترکیه به ایران — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'محصولات VEGA', desc: 'سنسور سطح و فشار' }, { title: 'محصولات Prosense', desc: 'دتکتور گاز و شعله' }, { title: 'خدمات صنعتی', desc: 'مشاوره تامین B2B' }, { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Digi System برای فروشگاه و واحد خرید شما', desc: 'ترازو، POS و peripheral — از انتخاب مدل تا تحویل در ایران.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'محصولات پرتقاضا Digi System', desc: 'ترازوی PC · POS یکپارچه · اسکنر و پرینتر — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل Digi System', desc: 'ترازو، POS، peripheral و نرم‌افزار retail — تامین از ترکیه' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Digi System در بازار retail ایران', desc: 'نوع فروشگاه و تعداد صندوق را بفرستید — پکیج مناسب پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'تجهیزات retail Digi برای انواع فروشگاه و HORECA' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Digi System', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Digi System</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'آماده استعلام قیمت Digi System هستید؟', desc: 'نوع فروشگاه، تعداد صندوق و نیاز ترازو legal-for-trade را بفرستید', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Digi System' }, geoText: 'تامین Digi System از ترکیه به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.', related: [{ title: 'Teraoka Seiko', desc: 'ترازو و POS ژاپن' }, { title: 'خدمات صنعتی', desc: 'تامین retail B2B' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Teraoka Seiko برای فروشگاه و انبار شما', desc: 'ترازو، برچسب‌زن و POS ژاپن — مشاوره مدل و لجستیک بین‌المللی.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص Teraoka برای پروژه‌های ایرانی', desc: 'ترازوی فروشگاهی · deli scale · POS · برچسب‌زن — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'کاتالوگ کامل Teraoka Seiko', desc: 'ترازو، labeling، POS و تجهیزات food service — تامین از ژاپن' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Teraoka در بازار retail و food service ایران', desc: 'نوع فروشگاه یا آشپزخانه صنعتی را بفرستید — سری مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'تجهیزات Teraoka برای retail، HORECA و لجستیک' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Teraoka Seiko', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی بر اساس <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teraoka Seiko</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="digi-system">Digi System</a>', cta: { title: 'آماده استعلام قیمت Teraoka هستید؟', desc: 'نوع ترازو، ظرفیت و تعداد صندوق را بفرستید — deli · POS · labeling', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Teraoka' }, geoText: 'تامین Teraoka Seiko به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی توسط بیزدوار گروپ.', related: [{ title: 'Digi System', desc: 'ترازو و POS ترکیه' }, { title: 'خدمات صنعتی', desc: 'تامین retail B2B' }, { title: 'تماس', desc: 'استعلام قیمت' }] },
      fastPage: { sections: { plans: { eyebrow: 'پلن‌های قیمت', title: 'پلن مناسب کسب‌وکار خود را انتخاب کنید', desc: 'قیمت ثابت، بدون هزینه پنهان — سفارش از واتساپ یا <a href="contact">فرم تماس</a>.' }, compare: { eyebrow: 'مقایسه پلن‌ها', title: 'چه چیزی در هر پلن می‌گیرید؟', desc: 'برای انتخاب بین پلن‌ها — این جدول را ببینید یا در واتساپ بپرسید.' }, timeline: { eyebrow: 'مسیر اجرا', title: '۵ روز تا آنلاین شدن — مرحله به مرحله', desc: 'هر روز هدف مشخص دارد و در واتساپ گزارش پیشرفت می‌دهیم.' }, why: { eyebrow: 'چرا Fast؟', title: 'چرا Fast Web Studio؟', desc: 'محصولی از <a href="about">بیزدوار گروپ</a> — نه آژانس عمومی با وعده‌های مبهم.' }, showcase: { eyebrow: 'نمونه‌کارها', title: 'سایت‌هایی که با بیزدوار ساخته شده‌اند', desc: 'نمونه پروژه‌های طراحی وب — <a href="portfolio">مشاهده همه نمونه‌کارها</a>' }, faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج قبل از سفارش', desc: '' } }, cta: { title: 'آماده راه‌اندازی سایت هستید؟', desc: 'مشاوره رایگان در واتساپ — پلن مناسب را در ۲ دقیقه پیشنهاد می‌دهیم.', btnWa: 'شروع در واتساپ', btnForm: 'فرم تماس', btnCustom: 'پروژه اختصاصی' }, sticky: { label: 'سفارش Fast — از $99' }, geoText: 'طراحی سایت برای کسب‌وکارهای ایران، ترکیه و بازارهای بین‌المللی — تحویل ۵ روزه، واتساپ فارسی و پشتیبانی پس از راه‌اندازی.' },
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
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">وبسایت رسمی VEGA</a> است. برای استعلام قیمت، کد سفارش و تامین — <a href="contact">با بیزدوار تماس بگیرید</a>.', cta: { title: 'آماده استعلام قیمت VEGA هستید؟', desc: 'نام محصول یا شرایط فرآیند را بفرستید — مشاوره فنی رایگان و پیش‌فاکتور شفاف', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام VEGA' }, geoText: 'تامین اصل سنسور VEGA به ایران — مشاوره فنی فارسی از استانبول، پیش‌فاکتور شفاف و لجستیک تا پروژه‌های صنعتی ایران.' },
      prosensePage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Prosense برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب گاز و مدل تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص برای پروژه‌های ایرانی', desc: 'SIL · M1 · EN-50545-1 · MPS — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'تمام سری‌های محصول Prosense', desc: '۸ دسته — بیش از ۶۰ سری — دتکتور ثابت، پرتابل، شعله، پنل، پارکینگ، نرم‌افزار و کالیبراسیون' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Prosense در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع گاز و محیط نصب را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'راهکار تشخیص گاز سفارشی برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Prosense', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">وبسایت رسمی Prosense</a> است. برای استعلام قیمت و تامین — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">محصولات VEGA</a>', cta: { title: 'آماده استعلام قیمت Prosense هستید؟', desc: 'نوع گاز یا سری مدل را بفرستید — PQ · SafeVader · SOMA · PPS+ · پنل S-DPX', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Prosense' }, geoText: 'تامین اصل دتکتور Prosense به ایران — گواهی SIL/M1/EN، مشاوره فارسی و تحویل برای پروژه‌های نفت، گاز و صنعت.' },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'چرا از بیزدوار بخرید؟', title: 'تامین مطمئن Teltonika برای واحد فنی و خرید شما', desc: 'ما فقط کاتالوگ نشان نمی‌دهیم — همراه شما از انتخاب مدل ردیاب تا تحویل در ایران هستیم.' },
        buy: { eyebrow: 'مسیر خرید', title: 'از استعلام تا تحویل — ۵ مرحله شفاف', desc: 'بدون پیچیدگی — هر مرحله را می‌دانید و در هر قدم در ارتباط هستید.' },
        highlights: { eyebrow: 'محصولات پرتقاضا', title: 'سری‌های شاخص برای پروژه‌های ایرانی', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — برای استعلام هر محصول دکمه «درخواست استعلام» را بزنید.' },
        catalog: { eyebrow: 'کاتالوگ کامل', title: 'تمام محصولات Teltonika Telematics', desc: '۱۲ دسته — ۱۰۰+ مدل — ردیاب، CAN/OBD، asset، BLE، ویدئو، نرم‌افزار و لوازم جانبی' },
        iran: { eyebrow: 'کاربرد در ایران', title: 'Teltonika در صنایع رایج ایران', desc: 'اگر صنعت شما در لیست نیست — نوع ناوگان و داده مورد نیاز را بفرستید، مدل مناسب را پیشنهاد می‌دهیم.' },
        industries: { eyebrow: 'صنایع جهانی', title: 'کاربرد در صنایع مختلف', desc: 'راهکار Fleet Telematics برای هر بخش صنعتی' },
        supply: { eyebrow: 'تامین از بیزدوار', title: 'خدمات تامین Teltonika', desc: 'شریک تامین شما — نه فقط فروشنده' },
        faq: { eyebrow: 'سوالات متداول', title: 'پرسش‌های رایج خریداران ایرانی', desc: 'پاسخ سوال خود را پیدا نکردید؟ مستقیم با ما در تماس باشید.' }
      }, officialNote: 'اطلاعات فنی محصولات بر اساس <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">وبسایت رسمی Teltonika Telematics</a> است. برای استعلام — <a href="contact">با بیزدوار تماس بگیرید</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'آماده استعلام قیمت Teltonika هستید؟', desc: 'مدل ردیاب یا نوع ناوگان را بفرستید — FMB920 · FMC650 · FTC305 · DualCam', btnForm: 'فرم استعلام', btnServices: 'خدمات صنعتی' }, sticky: { label: 'استعلام Teltonika' }, geoText: 'تامین اصل ردیاب Teltonika به ایران — Fleet Telematics، مشاوره فارسی و تحویل برای ناوگان و IoT.' }
    },
    tr: {
      aboutPage: { hero: { tag: 'Bizdavar Hakkında', title: 'Dijital ve endüstride büyüme ortağınız', desc: '2013’ten beri — 11 ülkede 100+ proje · pazarlama, web, fintech ve endüstriyel tedarik' }, whatIs: { title: 'Bizdavar Group nedir?', p1: 'Bizdavar Group, 2013 yılında <strong>Ersan Jahed Tabrizi</strong> tarafından kurulan bir dijital ajans ve B2B tedarik grubudur. Hizmetlerimiz <a href="services#digital-marketing">dijital pazarlama</a>, <a href="fast">web tasarım</a>, fintech platformları, SMM yönetimi ve <a href="services#industrial">endüstriyel ekipman tedarikini</a> kapsar.', p2: '11 ülkede 100+ web ve özel platform projesi — ZedPay, Netinode, Bear Event ve VEGA tedariki dahil. Dijital altyapı, domain, hosting, SSL ve teknik destek de ekibimiz tarafından yönetilir. <a href="portfolio">Portfolyoyu görüntüle</a>' }, features: ['Dijital pazarlama', 'Profesyonel web tasarım', 'Ekipman tedariki', 'Altyapı yönetimi'], sections: { identityEyebrow: 'Kurumsal kimlik', identityTitle: 'Bizdavar Group’a kısa bakış', leadershipEyebrow: 'Liderlik', leadershipTitle: 'Kurucu ve ekip', activitiesEyebrow: 'Faaliyet alanları', activitiesTitle: 'Uzmanlık alanları', ecosystemEyebrow: 'Ekosistem', ecosystemTitle: 'İlgili marka ve projeler', ecosystemDesc: 'Bizdavar’ın geliştirdiği veya yönettiği dijital ve endüstriyel ekosistemden örnekler', presenceEyebrow: 'Küresel varlık', presenceTitle: 'Aktif ülkeler', presenceDesc: 'İstanbul ve Erivan’dan Avrupa ve Amerika’ya uzanan proje ağı', credentialsEyebrow: 'Sertifikalar', credentialsTitle: 'Doğrulanmış yetkinlikler', proofEyebrow: 'Profesyonel güven', proofTitle: 'Güven göstergeleri', proofDesc: 'Doğrulanabilir kamu kaynaklarına dayalıdır — sahte yorum yoktur', faqEyebrow: 'SSS', faqTitle: 'Bizdavar hakkında sık sorulanlar' }, values: { title: 'Değerlerimiz', items: [{ title: 'Sonuç odaklılık', desc: 'Sadece uygulama değil, satış, dönüşüm ve marka büyümesi.' }, { title: 'Şeffaf iş birliği', desc: 'Düzenli raporlama ve ekiple doğrudan iletişim.' }, { title: 'Küresel pazar', desc: 'İran, Türkiye ve uluslararası pazarlarda projeler.' }, { title: 'Hızlı uygulama', desc: 'Fast Web Studio — 5 günde web sitesi teslimi.' }] }, cta: { title: 'Bizdavar ile çalışmaya hazır mısınız?', desc: 'İlk danışmanlık ücretsiz — <a href="contact" class="link-yellow">iletişim formu</a> veya WhatsApp üzerinden.', btn: 'Bize ulaşın' } },
      servicesPage: { hero: { tag: 'Hizmetlerimiz', title: 'İş büyümesi için kapsamlı çözümler', desc: 'Dijital stratejiden endüstriyel tedarike — <a href="about">Bizdavar Group</a> dört ana alanda yanınızda.' }, overview: { eyebrow: 'Genel bakış', title: 'Bizdavar’ın dört hizmet alanı', desc: 'Detayları görmek için karta tıklayın veya üst menüyü kullanın.' }, navAria: 'Hizmet listesi', viewDetails: 'Detayları gör', stats: [{ value: '4', label: 'Hizmet alanı' }, { value: '100+', label: 'Proje' }, { value: '11', label: 'Aktif ülke' }, { value: '13+', label: 'Yıl deneyim' }], cards: serviceBlocks.tr.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.tr, panels: servicesPanels.tr, relatedLinks: servicesRelatedLinks.tr, process: { eyebrow: 'İş birliği süreci', title: 'Nasıl çalışıyoruz?', desc: 'Sade, şeffaf ve takip edilebilir bir süreç.', steps: [{ title: 'Danışmanlık', desc: 'İhtiyaçları ve iş hedeflerini anlama' }, { title: 'Çözüm tasarımı', desc: 'Teknik öneri ve zaman planı' }, { title: 'Uygulama', desc: 'Kampanya, kurulum veya tedarik teslimi' }, { title: 'Destek', desc: 'Raporlama, optimizasyon ve sürekli destek' }] }, cta: { title: 'Özel bir çözüme mi ihtiyacınız var?', desc: 'Ücretsiz danışmanlık — proje örnekleri için <a href="portfolio">Bizdavar portfolyosu</a>', btn: 'Ücretsiz danışmanlık', btnSecondary: 'Portfolyoyu gör' } },
      portfolioPage: { hero: { tag: 'Portfolyo', title: 'Birlikte büyüttüğümüz proje ve markalar', desc: 'Bizdavar ekosistemi, web tasarım ve SMM örnekleri, dijital hizmet alan müşteriler — <a href="about">Bizdavar hakkında</a>.' }, areas: { eyebrow: 'Alanlar', title: 'Proje faaliyet alanları' }, archived: { eyebrow: 'Geçmiş projeler', title: 'Önceki ve tamamlanmamış işler', desc: 'Canlı bağlantısı olmayan veya yarım kalan projeler — sunucusu yenilenmeyen siteler veya tamamlanmamış marketplace projeleri dahil. Yalnızca kısaca anılır.' }, tags: ['Fintech ve ödeme', 'Etkinlik ve bilet', 'Holding ve yatırım', 'Hosting ve altyapı', 'Web tasarım ve mağaza', 'SMM yönetimi', 'Endüstriyel tedarik', 'VEGA sensör', 'Prosense dedektör', 'Havacılık', 'Broker ve finans'], cta: { title: 'Sıradaki proje markanız olabilir', desc: '<a href="fast" class="link-yellow">Web tasarımdan</a> DNS ve SSL yönetimine kadar Bizdavar yanınızda.', btnPrimary: 'Yeni proje başlat', btnSecondary: 'Hizmetleri gör' }, filters: [{ id: 'all', label: 'Tümü' }, { id: 'case-study', label: 'Örnek işler' }, { id: 'client', label: 'Müşteriler' }, { id: 'ecosystem', label: 'Ekosistem' }, { id: 'fintech', label: 'Fintech' }, { id: 'digital', label: 'Dijital' }, { id: 'industrial', label: 'Endüstriyel' }, { id: 'other', label: 'Diğer' }], roleLabels: { ecosystem: 'Ekosistem', 'case-study': 'Örnek iş', client: 'Müşteri', website: 'Web sitesi', page: 'Bizdavar sayfası' }, statsLabels: ['Proje ve marka', 'Örnek iş', 'Müşteri', 'Ekosistem'], filterAria: 'Portfolyo filtreleri', countText: '{count} öğe gösteriliyor', relatedLinks: portfolioRelatedLinks.tr },
      blogPage: { hero: { tag: 'Blog', title: 'Dijital ve endüstri içgörüleri', desc: 'Bizdavar Group ekibinden pratik rehberler ve ipuçları.' }, cta: { title: 'Uzman danışmanlığa mı ihtiyacınız var?', desc: 'Konunuzu <a href="contact">iletişim formuna</a> yazın — yanıtlarız.', btn: 'Danışmanlık iste' }, geoText: 'İran ve Türkiye’deki işletmeler için dijital pazarlama, web tasarım ve endüstriyel tedarik yazıları.' },
      privacyPage: { hero: { title: 'Gizlilik Politikası', desc: 'Bizdavar Group web sitesinde bilgilerinizin nasıl toplandığı ve kullanıldığı' }, sections: [{ title: '1. Toplanan bilgiler', body: '<a href="contact">İletişim formunu</a> gönderdiğinizde adınız, e-posta adresiniz, telefon numaranız (isteğe bağlı), hizmet türü ve mesajınız alınır. Bu bilgiler yalnızca talebinize yanıt vermek için kullanılır.' }, { title: '2. Kullanım şekli', items: ['Danışmanlık talebine ve hizmet önerisine yanıt vermek', 'Görüşme aşamasındaki projeleri takip etmek', 'Hizmet kalitesini iyileştirmek (kamuya açık paylaşım olmadan)'] }, { title: '3. Üçüncü taraflarla paylaşım', body: 'Bilgileriniz açık izniniz olmadan üçüncü taraflara satılmaz veya aktarılmaz; yasal zorunluluklar hariç.' }, { title: '4. Çerezler ve analiz', body: 'Bu web sitesi statiktir ve üçüncü taraf takip çerezi kullanmaz. Analiz aracı eklenirse bu sayfa güncellenecektir.' }, { title: '5. Bize ulaşın', body: 'Gizlilik soruları için: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> veya <a href="contact">iletişim formu</a>.' }], updated: 'Son güncelleme: Nisan 2025' },
      gamakPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Gamak tedariki', desc: 'Sadece katalog göstermiyoruz — güç seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan Gamak serileri', desc: 'GM/GMB · B5/B35 flanş · IE2/IE3 · Frenli — her seri için “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Gamak elektrik motoru kataloğu', desc: 'Üç fazlı ve tek fazlı — IE2/IE3 — flanş, ayak, frenli ve projeye özel' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Gamak yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — yük türü ve güç ihtiyacını gönderin.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Gamak motorları her endüstriyel bölüm için' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Gamak tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">resmi Gamak web sitesine</a> dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Gamak fiyat teklifine hazır mısınız?', desc: 'kW, rpm ve flanş tipini gönderin — GM/GMB · IE2/IE3 · B3/B5', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Gamak teklifi' }, geoText: 'Gamak tedariki Türkiye’den İran’a — Farsça teknik danışmanlık, proforma ve lojistik Bizdavar tarafından.', related: [{ title: 'VEGA ürünleri', desc: 'Seviye ve basınç sensörleri' }, { title: 'Prosense ürünleri', desc: 'Gaz ve alev dedektörü' }, { title: 'Endüstriyel hizmetler', desc: 'B2B tedarik danışmanlığı' }, { title: 'İletişim', desc: 'Ücretsiz danışmanlık' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Mağaza ve satınalma biriminiz için güvenilir Digi System tedariki', desc: 'Terazi, POS ve çevre birimleri — model seçiminden teslimata.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Digi System öne çıkan ürünler', desc: 'PC terazi · entegre POS · tarayıcı ve yazıcı — “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Digi System tam katalog', desc: 'Terazi, POS, çevre birimleri ve perakende yazılımı — Türkiye tedariki' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Digi System perakende pazarında', desc: 'Mağaza türü ve kasa sayısını gönderin — uygun paketi önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı sektörlerde uygulama', desc: 'Digi perakende ekipmanları — mağaza ve HORECA' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Digi System tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">resmi Digi System</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'Digi System fiyat teklifine hazır mısınız?', desc: 'Mağaza türü, kasa sayısı ve legal-for-trade terazi ihtiyacını gönderin', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Digi System teklifi' }, geoText: 'Digi System tedariki Türkiye’den İran’a — Farsça danışmanlık, proforma ve lojistik Bizdavar tarafından.', related: [{ title: 'Teraoka Seiko', desc: 'Japon terazi ve POS' }, { title: 'Endüstriyel hizmetler', desc: 'Perakende B2B tedarik' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Mağaza ve depo biriminiz için güvenilir Teraoka Seiko tedariki', desc: 'Japon terazi, etiketleme ve POS — model danışmanlığı ve uluslararası lojistik.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan Teraoka serileri', desc: 'Mağaza terazisi · deli scale · POS · etiketleme — “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Teraoka Seiko tam katalog', desc: 'Terazi, etiketleme, POS ve food service — Japonya tedariki' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Teraoka perakende ve food service pazarında', desc: 'Mağaza veya endüstriyel mutfak türünü gönderin — uygun seriyi önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı sektörlerde uygulama', desc: 'Teraoka ekipmanları — perakende, HORECA ve lojistik' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Teraoka Seiko tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">resmi Teraoka Seiko</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="digi-system">Digi System</a>', cta: { title: 'Teraoka fiyat teklifine hazır mısınız?', desc: 'Terazi türü, kapasite ve kasa sayısını gönderin — deli · POS · etiketleme', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Teraoka teklifi' }, geoText: 'Teraoka Seiko tedariki İran ve bölgeye — Farsça danışmanlık, proforma ve uluslararası lojistik Bizdavar tarafından.', related: [{ title: 'Digi System', desc: 'Türkiye terazi ve POS' }, { title: 'Endüstriyel hizmetler', desc: 'Perakende B2B tedarik' }, { title: 'İletişim', desc: 'Fiyat teklifi' }] },
      fastPage: { sections: { plans: { eyebrow: 'Fiyat planları', title: 'İşletmeniz için doğru planı seçin', desc: 'Sabit fiyat, gizli maliyet yok — WhatsApp veya <a href="contact">iletişim formu</a> ile sipariş.' }, compare: { eyebrow: 'Plan karşılaştırması', title: 'Her planda neler var?', desc: 'Plan seçmek için tabloyu inceleyin veya WhatsApp’tan sorun.' }, timeline: { eyebrow: 'Uygulama yolu', title: '5 günde yayına — adım adım', desc: 'Her gün net hedef ve WhatsApp üzerinden ilerleme raporu.' }, why: { eyebrow: 'Neden Fast?', title: 'Neden Fast Web Studio?', desc: '<a href="about">Bizdavar Group</a> ürünü — belirsiz vaatler veren genel bir ajans değil.' }, showcase: { eyebrow: 'Örnek işler', title: 'Bizdavar ile yapılan web siteleri', desc: 'Web tasarım örnekleri — <a href="portfolio">tüm portfolyoyu gör</a>' }, faq: { eyebrow: 'SSS', title: 'Sipariş öncesi sık sorulanlar', desc: '' } }, cta: { title: 'Web sitenizi başlatmaya hazır mısınız?', desc: 'WhatsApp’ta ücretsiz danışmanlık — uygun planı 2 dakikada önerelim.', btnWa: 'WhatsApp’ta başla', btnForm: 'İletişim formu', btnCustom: 'Özel proje' }, sticky: { label: 'Fast siparişi — $99’dan başlayan' }, geoText: 'İran, Türkiye ve uluslararası pazarlardaki işletmeler için web tasarımı — 5 günde teslim, Farsça WhatsApp ve lansman sonrası destek.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir VEGA tedariki', desc: 'Sadece katalog göstermiyoruz — model seçiminden İran’a teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        products: { eyebrow: 'Ürün kataloğu', title: 'İran projelerinde en çok talep edilen ürünler', desc: 'Her ürün için teklif almak üzere “Teklif iste” düğmesini kullanın. Teknik danışmanlık ücretsizdir.' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'VEGA yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — proses koşullarını gönderin, uygun modeli önerelim.' },
        value: { eyebrow: 'Marka avantajları', title: 'Neden mühendisler VEGA’yı seçiyor?', desc: '65 yılı aşkın Alman inovasyonu — her yıl dünyada 500 binden fazla VEGA sensörü kuruluyor.' },
        principles: { eyebrow: 'Ölçüm prensipleri', title: 'VEGA ölçüm yöntemleri', desc: 'Doğru ölçüm prensibini seçin — koşullarınıza göre en iyisini öneririz.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstriler için VEGA çözümü', desc: '15+ endüstri — kimyadan enerjiye ve çevreye' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Bizdavar Group ile VEGA tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Ürünlerin teknik bilgileri <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">resmi VEGA web sitesine</a> dayanır. Fiyat teklifi, sipariş kodu ve tedarik için — <a href="contact">Bizdavar ile iletişime geçin</a>.', cta: { title: 'VEGA fiyat teklifine hazır mısınız?', desc: 'Ürün adını veya proses koşullarını gönderin — ücretsiz teknik danışmanlık ve şeffaf proforma', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'VEGA teklifi' }, geoText: 'İran’a orijinal VEGA sensör tedariki — İstanbul’dan Farsça teknik danışmanlık, şeffaf proforma ve endüstriyel projelere lojistik.' },
      prosensePage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Prosense tedariki', desc: 'Sadece katalog göstermiyoruz — gaz ve model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan seriler', desc: 'SIL · M1 · EN-50545-1 · MPS — her ürün için “Teklif iste” düğmesini kullanın.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Tüm Prosense ürün serileri', desc: '8 kategori — 60’tan fazla seri — sabit, taşınabilir, alev, panel, otopark, yazılım ve kalibrasyon' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Prosense yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — gaz türü ve kurulum ortamını gönderin, uygun modeli önerelim.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Her endüstriyel bölüm için özel gaz algılama çözümü' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Prosense tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Ürünlerin teknik bilgileri <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">resmi Prosense web sitesine</a> dayanır. Fiyat teklifi ve tedarik için — <a href="contact">Bizdavar ile iletişime geçin</a> · <a href="vega">VEGA ürünleri</a>', cta: { title: 'Prosense fiyat teklifine hazır mısınız?', desc: 'Gaz türünü veya model serisini gönderin — PQ · SafeVader · SOMA · PPS+ · S-DPX paneli', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Prosense teklifi' }, geoText: 'İran’a orijinal Prosense dedektör tedariki — SIL/M1/EN sertifikaları, Farsça danışmanlık ve petrol, gaz ve endüstri projeleri için teslimat.' },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'Neden Bizdavar’dan alın?', title: 'Teknik ve satınalma biriminiz için güvenilir Teltonika tedariki', desc: 'Sadece katalog göstermiyoruz — model seçiminden teslimata kadar yanınızdayız.' },
        buy: { eyebrow: 'Satınalma yolu', title: 'Tekliften teslimata — 5 net adım', desc: 'Karmaşa yok — her adımı bilir ve her aşamada iletişimde olursunuz.' },
        highlights: { eyebrow: 'En çok talep edilenler', title: 'Projeler için öne çıkan modeller', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — her ürün için “Teklif iste”.' },
        catalog: { eyebrow: 'Tam katalog', title: 'Tüm Teltonika Telematics ürünleri', desc: '12 kategori — 100+ model — tracker, CAN/OBD, asset, BLE, video, yazılım ve aksesuar' },
        iran: { eyebrow: 'Bölgesel uygulama', title: 'Teltonika yaygın endüstrilerde', desc: 'Sektörünüz listede yoksa — filo türü ve veri ihtiyacını gönderin.' },
        industries: { eyebrow: 'Küresel endüstriler', title: 'Farklı endüstrilerde uygulama', desc: 'Her sektör için Fleet Telematics çözümü' },
        supply: { eyebrow: 'Bizdavar tedariki', title: 'Teltonika tedarik hizmetleri', desc: 'Tedarik ortağınız — sadece satıcı değil' },
        faq: { eyebrow: 'SSS', title: 'Alıcıların sık sorduğu sorular', desc: 'Cevabı bulamadınız mı? Doğrudan bizimle iletişime geçin.' }
      }, officialNote: 'Teknik bilgiler <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">resmi Teltonika Telematics</a> sitesine dayanır. Teklif için — <a href="contact">Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Teltonika fiyat teklifine hazır mısınız?', desc: 'Tracker modeli veya filo türünü gönderin — FMB920 · FMC650 · FTC305', btnForm: 'Teklif formu', btnServices: 'Endüstriyel hizmetler' }, sticky: { label: 'Teltonika teklifi' }, geoText: 'İran’a orijinal Teltonika GPS tedariki — Fleet Telematics, danışmanlık ve lojistik.' }
    },
    en: {
      aboutPage: { hero: { tag: 'About Bizdavar', title: 'Your growth partner in digital and industry', desc: 'Since 2013 — 100+ projects in 11 countries · marketing, web, fintech and industrial supply' }, whatIs: { title: 'What is Bizdavar Group?', p1: 'Bizdavar Group is a digital agency and B2B supply group founded in 2013 by <strong>Ersan Jahed Tabrizi</strong>. Our services include <a href="services#digital-marketing">digital marketing</a>, <a href="fast">web design</a>, fintech platforms, SMM management and <a href="services#industrial">industrial equipment supply</a>.', p2: '100+ custom web and platform projects across 11 countries — from ZedPay and Netinode to Bear Event and VEGA supply. Digital infrastructure, domains, hosting, SSL and technical support are also managed by our team. <a href="portfolio">View portfolio</a>' }, features: ['Digital marketing', 'Professional web design', 'Equipment supply', 'Infrastructure management'], sections: { identityEyebrow: 'Company profile', identityTitle: 'Bizdavar Group at a glance', leadershipEyebrow: 'Leadership', leadershipTitle: 'Founder and team', activitiesEyebrow: 'Activity areas', activitiesTitle: 'Areas of expertise', ecosystemEyebrow: 'Ecosystem', ecosystemTitle: 'Related brands and projects', ecosystemDesc: 'Examples from the digital and industrial ecosystem Bizdavar has developed or managed', presenceEyebrow: 'Global presence', presenceTitle: 'Active countries', presenceDesc: 'International project network from Istanbul and Yerevan to Europe and the US', credentialsEyebrow: 'Certifications', credentialsTitle: 'Verified skills', proofEyebrow: 'Professional credibility', proofTitle: 'Trust indicators', proofDesc: 'Based on verifiable public sources — no fabricated testimonials', faqEyebrow: 'FAQ', faqTitle: 'Common questions about Bizdavar' }, values: { title: 'Our values', items: [{ title: 'Outcome focus', desc: 'Sales, conversion and brand growth — not just execution.' }, { title: 'Transparent collaboration', desc: 'Regular reporting and direct communication with the team.' }, { title: 'Global market', desc: 'Projects in Iran, Turkey and international markets.' }, { title: 'Fast execution', desc: 'Fast Web Studio — website delivery in 5 days.' }] }, cta: { title: 'Ready to work with Bizdavar?', desc: 'Initial consultation is free — through the <a href="contact" class="link-yellow">contact form</a> or WhatsApp.', btn: 'Contact us' } },
      servicesPage: { hero: { tag: 'Our services', title: 'Comprehensive solutions for business growth', desc: 'From digital strategy to industrial supply — <a href="about">Bizdavar Group</a> supports you across four core areas.' }, overview: { eyebrow: 'Overview', title: 'Four Bizdavar service areas', desc: 'Click a card or use the top menu to view service details.' }, navAria: 'Services list', viewDetails: 'View details', stats: [{ value: '4', label: 'Service areas' }, { value: '100+', label: 'Projects' }, { value: '11', label: 'Active countries' }, { value: '13+', label: 'Years experience' }], cards: serviceBlocks.en.map(({ title, body, ...rest }) => ({ title, desc: rest.subtitle || body })), blocks: serviceBlocks.en, panels: servicesPanels.en, relatedLinks: servicesRelatedLinks.en, process: { eyebrow: 'Collaboration process', title: 'How do we work with you?', desc: 'A simple, transparent and trackable workflow.', steps: [{ title: 'Consulting', desc: 'Understanding your needs and goals' }, { title: 'Solution design', desc: 'Technical proposal and timeline estimate' }, { title: 'Execution', desc: 'Campaign, implementation or supply delivery' }, { title: 'Support', desc: 'Reporting, optimization and ongoing support' }] }, cta: { title: 'Need a custom solution?', desc: 'Free consultation — see project examples in the <a href="portfolio">Bizdavar portfolio</a>', btn: 'Free consultation', btnSecondary: 'View portfolio' } },
      portfolioPage: { hero: { tag: 'Portfolio', title: 'Projects and brands we have helped grow', desc: 'Bizdavar ecosystem brands, web design and SMM case studies, and clients who received digital services — <a href="about">about Bizdavar</a>.' }, areas: { eyebrow: 'Areas', title: 'Project activity areas' }, archived: { eyebrow: 'Past projects', title: 'Previous and incomplete work', desc: 'Projects without a live link or left unfinished — including sites whose hosting expired and marketplaces that were never completed. Listed briefly only.' }, tags: ['Fintech and payments', 'Events and tickets', 'Holding and investment', 'Hosting and infrastructure', 'Web design and stores', 'SMM management', 'Industrial supply', 'VEGA sensors', 'Prosense detectors', 'Aviation', 'Brokerage and finance'], cta: { title: 'Your brand could be the next project', desc: 'From <a href="fast" class="link-yellow">web design</a> to DNS and SSL management, Bizdavar is with you.', btnPrimary: 'Start a new project', btnSecondary: 'View services' }, filters: [{ id: 'all', label: 'All' }, { id: 'case-study', label: 'Case studies' }, { id: 'client', label: 'Clients' }, { id: 'ecosystem', label: 'Ecosystem' }, { id: 'fintech', label: 'Fintech' }, { id: 'digital', label: 'Digital' }, { id: 'industrial', label: 'Industrial' }, { id: 'other', label: 'Other' }], roleLabels: { ecosystem: 'Ecosystem', 'case-study': 'Case study', client: 'Client', website: 'Website', page: 'Bizdavar page' }, statsLabels: ['Projects & brands', 'Case studies', 'Clients', 'Ecosystem'], filterAria: 'Portfolio filters', countText: '{count} items shown', relatedLinks: portfolioRelatedLinks.en },
      blogPage: { hero: { tag: 'Blog', title: 'Digital and industrial insights', desc: 'Practical guides and tips from the Bizdavar Group team.' }, cta: { title: 'Need expert consulting?', desc: 'Write your topic in the <a href="contact">contact form</a> — we will respond.', btn: 'Request consulting' }, geoText: 'Specialized articles for businesses in Iran and Turkey — digital marketing, web design and industrial supply.' },
      privacyPage: { hero: { title: 'Privacy Policy', desc: 'How your information is collected and used on the Bizdavar Group website' }, sections: [{ title: '1. Information we collect', body: 'When you submit the <a href="contact">contact form</a>, we receive your name, email, phone number (optional), service type and message. This information is used only to respond to your request.' }, { title: '2. How we use it', items: ['Responding to consulting requests and service proposals', 'Following up on projects under discussion', 'Improving service quality without public disclosure'] }, { title: '3. Sharing with third parties', body: 'Your information is not sold or transferred to third parties without your explicit consent, except where legally required.' }, { title: '4. Cookies and analytics', body: 'This website is static and does not use third-party tracking cookies. If analytics tools are added, this page will be updated.' }, { title: '5. Contact us', body: 'For privacy questions: <a href="mailto:info@bizdavar.com">info@bizdavar.com</a> or the <a href="contact">contact form</a>.' }], updated: 'Last updated: April 2025' },
      gamakPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Gamak supply for your technical and procurement teams', desc: 'We do more than show a catalog — from power selection to delivery in Iran.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Gamak series for regional projects', desc: 'GM/GMB · B5/B35 flange · IE2/IE3 · Braked — use “Request quote” for each series.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Gamak electric motor catalog', desc: 'Three-phase and single-phase — IE2/IE3 — flange, foot, braked and custom' },
        iran: { eyebrow: 'Regional application', title: 'Gamak across common industries', desc: 'If your industry isn’t listed — send load type and required power.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Gamak motors for every industrial sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Gamak supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.gamak.com/" target="_blank" rel="noopener noreferrer">official Gamak website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a Gamak quote?', desc: 'Send kW, rpm and flange type — GM/GMB · IE2/IE3 · B3/B5', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Gamak quote' }, geoText: 'Gamak supply from Turkey to Iran — Persian technical consulting, proforma and logistics by Bizdavar Group.', related: [{ title: 'VEGA products', desc: 'Level and pressure sensors' }, { title: 'Prosense products', desc: 'Gas and flame detectors' }, { title: 'Industrial services', desc: 'B2B supply consulting' }, { title: 'Contact', desc: 'Free consultation' }] },
      digiSystemPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Digi System supply for your store and procurement teams', desc: 'Scales, POS and peripherals — from model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Digi System products', desc: 'PC scales · integrated POS · scanner and printer — use “Request quote”.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Digi System catalog', desc: 'Scales, POS, peripherals and retail software — supply from Turkey' },
        iran: { eyebrow: 'Regional application', title: 'Digi System in the retail market', desc: 'Send store type and checkout count — we’ll suggest the right package.' },
        industries: { eyebrow: 'Global industries', title: 'Application across sectors', desc: 'Digi retail equipment for stores and HORECA' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Digi System supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.digisystem.com.tr/" target="_blank" rel="noopener noreferrer">official Digi System website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="teraoka">Teraoka</a>', cta: { title: 'Ready for a Digi System quote?', desc: 'Send store type, checkout count and legal-for-trade scale needs', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Digi System quote' }, geoText: 'Digi System supply from Turkey to Iran — Persian consulting, proforma and logistics by Bizdavar Group.', related: [{ title: 'Teraoka Seiko', desc: 'Japanese scales and POS' }, { title: 'Industrial services', desc: 'Retail B2B supply' }, { title: 'Contact', desc: 'Price inquiry' }] },
      teraokaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Teraoka Seiko supply for your store and warehouse teams', desc: 'Japanese scales, labeling and POS — model consulting and international logistics.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured Teraoka series for regional projects', desc: 'Retail scales · deli scale · POS · labeling — use “Request quote”.' },
        catalog: { eyebrow: 'Full catalog', title: 'Complete Teraoka Seiko catalog', desc: 'Scales, labeling, POS and food service — supply from Japan' },
        iran: { eyebrow: 'Regional application', title: 'Teraoka in retail and food service markets', desc: 'Send store or commercial kitchen type — we’ll suggest the right series.' },
        industries: { eyebrow: 'Global industries', title: 'Application across sectors', desc: 'Teraoka equipment for retail, HORECA and logistics' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Teraoka Seiko supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.teraoka.co.jp/" target="_blank" rel="noopener noreferrer">official Teraoka Seiko website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="digi-system">Digi System</a>', cta: { title: 'Ready for a Teraoka quote?', desc: 'Send scale type, capacity and checkout count — deli · POS · labeling', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Teraoka quote' }, geoText: 'Teraoka Seiko supply to Iran — Persian consulting, proforma and international logistics by Bizdavar Group.', related: [{ title: 'Digi System', desc: 'Turkish scales and POS' }, { title: 'Industrial services', desc: 'Retail B2B supply' }, { title: 'Contact', desc: 'Price inquiry' }] },
      fastPage: { sections: { plans: { eyebrow: 'Pricing plans', title: 'Choose the right plan for your business', desc: 'Fixed pricing, no hidden costs — order through WhatsApp or the <a href="contact">contact form</a>.' }, compare: { eyebrow: 'Plan comparison', title: 'What do you get in each plan?', desc: 'Use this table to choose a plan or ask us on WhatsApp.' }, timeline: { eyebrow: 'Delivery path', title: '5 days to go live — step by step', desc: 'Each day has a clear goal and progress is reported on WhatsApp.' }, why: { eyebrow: 'Why Fast?', title: 'Why Fast Web Studio?', desc: 'A <a href="about">Bizdavar Group</a> product — not a generic agency with vague promises.' }, showcase: { eyebrow: 'Showcase', title: 'Websites built with Bizdavar', desc: 'Web design examples — <a href="portfolio">view the full portfolio</a>' }, faq: { eyebrow: 'FAQ', title: 'Common questions before ordering', desc: '' } }, cta: { title: 'Ready to launch your website?', desc: 'Free WhatsApp consultation — we suggest the right plan in 2 minutes.', btnWa: 'Start on WhatsApp', btnForm: 'Contact form', btnCustom: 'Custom project' }, sticky: { label: 'Order Fast — from $99' }, geoText: 'Web design for businesses in Iran, Turkey and international markets — 5-day delivery, Persian WhatsApp and post-launch support.' },
      vegaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable VEGA supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        products: { eyebrow: 'Product catalog', title: 'High-demand products for Iranian projects', desc: 'Use the “Request quote” button for each product. Technical consulting is free.' },
        iran: { eyebrow: 'Regional application', title: 'VEGA across common industries', desc: 'If your industry isn’t listed — send your process conditions and we’ll suggest the right model.' },
        value: { eyebrow: 'Brand advantages', title: 'Why engineers choose VEGA', desc: 'Over 65 years of German innovation — more than 500,000 VEGA sensors installed worldwide each year.' },
        principles: { eyebrow: 'Measuring principles', title: 'VEGA measuring methods', desc: 'Choosing the right measuring principle — we recommend the best based on your conditions.' },
        industries: { eyebrow: 'Global industries', title: 'VEGA solutions for various industries', desc: '15+ industries — from chemicals to energy and environment' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'VEGA supply services by Bizdavar Group', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Product technical information is based on the <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">official VEGA website</a>. For pricing, order codes and supply — <a href="contact">contact Bizdavar</a>.', cta: { title: 'Ready for a VEGA quote?', desc: 'Send the product name or process conditions — free technical consulting and a transparent proforma', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'VEGA quote' }, geoText: 'Genuine VEGA sensor supply to Iran — Persian technical consulting from Istanbul, transparent proforma and logistics to industrial projects.' },
      prosensePage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Prosense supply for your technical and procurement teams', desc: 'We do more than show a catalog — we are with you from gas/model selection to delivery.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand', title: 'Featured series for projects', desc: 'SIL · M1 · EN-50545-1 · MPS — use the “Request quote” button for each product.' },
        catalog: { eyebrow: 'Full catalog', title: 'All Prosense product series', desc: '8 categories — over 60 series — fixed, portable, flame, panel, parking, software and calibration' },
        iran: { eyebrow: 'Regional application', title: 'Prosense across common industries', desc: 'If your industry isn’t listed — send the gas type and installation environment and we’ll suggest the right model.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Custom gas detection solution for every industrial sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Prosense supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Product technical information is based on the <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">official Prosense website</a>. For pricing and supply — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA products</a>', cta: { title: 'Ready for a Prosense quote?', desc: 'Send the gas type or model series — PQ · SafeVader · SOMA · PPS+ · S-DPX panel', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Prosense quote' }, geoText: 'Genuine Prosense detector supply to Iran — SIL/M1/EN certifications, Persian consulting and delivery for oil, gas and industrial projects.' },
      teltonikaPage: { sections: {
        trust: { eyebrow: 'Why buy from Bizdavar?', title: 'Reliable Teltonika supply for your technical and procurement teams', desc: 'We do more than show a catalog — from tracker selection to delivery in Iran.' },
        buy: { eyebrow: 'Purchase path', title: 'From quote to delivery — 5 clear steps', desc: 'No complexity — you know every step and stay in touch throughout.' },
        highlights: { eyebrow: 'High-demand products', title: 'Featured models for regional projects', desc: 'FMB920 · FTC305 · FMC650 · DualCam · EYE Mesh — use “Request quote” for each product.' },
        catalog: { eyebrow: 'Full catalog', title: 'All Teltonika Telematics products', desc: '12 categories — 100+ models — trackers, CAN/OBD, assets, BLE, video, software and accessories' },
        iran: { eyebrow: 'Regional application', title: 'Teltonika across common industries', desc: 'If your industry isn’t listed — send fleet type and required data.' },
        industries: { eyebrow: 'Global industries', title: 'Application across industries', desc: 'Fleet Telematics solution for every sector' },
        supply: { eyebrow: 'Supply by Bizdavar', title: 'Teltonika supply services', desc: 'Your supply partner — not just a vendor' },
        faq: { eyebrow: 'FAQ', title: 'Common questions from buyers', desc: 'Didn’t find your answer? Contact us directly.' }
      }, officialNote: 'Technical information is based on the <a href="https://www.teltonika-gps.com/" target="_blank" rel="noopener noreferrer">official Teltonika Telematics website</a>. For quotes — <a href="contact">contact Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>', cta: { title: 'Ready for a Teltonika quote?', desc: 'Send tracker model or fleet type — FMB920 · FMC650 · FTC305 · DualCam', btnForm: 'Quote form', btnServices: 'Industrial services' }, sticky: { label: 'Teltonika quote' }, geoText: 'Genuine Teltonika GPS supply to Iran — Fleet Telematics, Persian consulting and logistics.' }
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
        hero: { tag: 'نمونه‌کار SMM', title: 'بیزتجارت — صفحه محصولات صنعتی در اینستاگرام', desc: 'پروژه مدیریت و تولید محتوای اینستاگرام برای معرفی تجهیزات الکترونیکی، ابزار دقیق و قطعات صنعتی' },
        about: { title: 'درباره پروژه', imageAlt: 'محتوای صنعتی بیزتجارت در اینستاگرام — SMM B2B توسط بیزدوار گروپ', body: '<strong>بیزتجارت (Biztejarat)</strong> صفحه اینستاگرام محصولات صنعتی است که توسط بیزدوار گروپ راه‌اندازی و مدیریت شده. این پروژه <strong>نمونه‌کار مدیریت SMM و محتوای B2B</strong> است — نه واحد تجاری جداگانهٔ بیزدوار.', body2: 'در این صفحه تجهیزات الکترونیکی، ابزار دقیق، سنسور و قطعات صنعتی (از جمله VEGA، Prosense و برندهای مرتبط) معرفی و مستندسازی می‌شوند.', servicesTitle: 'خدمات اجراشده', services: ['راه‌اندازی و بهینه‌سازی پروفایل اینستاگرام', 'تولید محتوای فارسی/انگلیسی برای محصولات صنعتی', 'طراحی گرافیک پست و استوری', 'تقویم انتشار و مدیریت تعامل', 'لینک‌دهی به کاتالوگ‌ها و استعلام قیمت'], ctaInstagram: 'صفحه اینستاگرام بیزتجارت', ctaSmm: 'خدمات مدیریت SMM' },
        products: { title: 'محصولات معرفی‌شده در صفحه', desc: 'نمونه حوزه‌هایی که در محتوای بیزتجارت پوشش داده می‌شود — تامین فنی از طریق <a href="services#industrial">بیزدوار گروپ</a>' },
        geoText: 'مدیریت محتوای B2B برای بازار ایران — معرفی تجهیزات صنعتی VEGA، Prosense و Gamak با زبان فارسی و انگلیسی.'
      },
      bzDiamond: {
        hero: { tag: 'نمونه‌کار طراحی وب', title: 'BZ Diamond — طراحی وبسایت و فروشگاه آنلاین', desc: 'پروژه مشتری در حوزه جواهرات و الماس — طراحی، توسعه و پشتیبانی دیجیتال توسط بیزدوار گروپ' },
        about: { title: 'درباره پروژه', body: '<strong>BZ Diamond</strong> یکی از مشتریان بیزدوار گروپ است — برند تخصصی فروش الماس و جواهرات آنلاین. ما وبسایت، فروشگاه WooCommerce، زیرساخت ایمیل و پشتیبانی فنی این پروژه را طراحی و اجرا کرده‌ایم. این صفحه <strong>نمونه‌کار طراحی وب</strong> است، نه بخش کسب‌وکار صنعتی بیزدوار.', servicesTitle: 'خدمات اجراشده توسط بیزدوار', services: ['طراحی و توسعه وبسایت شرکتی و فروشگاهی', 'پیاده‌سازی WooCommerce — فروش آنلاین الماس و جواهرات', 'مدیریت و پیکربندی ایمیل سازمانی (دامنه و صندوق‌های پستی)', 'سئو، ساختار محتوا و بهینه‌سازی صفحات محصول', 'رابط کاربری RTL و چندزبانه (فارسی / انگلیسی)', 'پشتیبانی فنی، به‌روزرسانی و نگهداری سایت'], clientTitle: 'حوزه فعالیت مشتری', clientBody: 'BZ Diamond در حوزه الماس GIA، lab-grown و آموزش انتخاب جواهرات فعالیت می‌کند. جزئیات محصولات و قیمت‌ها در وبسایت رسمی مشتری منتشر می‌شود.', ctaSite: 'مشاهده وبسایت BZ Diamond', ctaOrder: 'سفارش طراحی سایت مشابه', ctaPortfolio: 'سایر نمونه‌کارها' },
        geoText: 'نمونه‌کار طراحی وب برای برندهای ایران و بین‌المللی — WooCommerce، سئو و پشتیبانی از استانبول و تبریز.'
      }
    },
    tr: {
      biztejarat: {
        hero: { tag: 'SMM örneği', title: 'Biztejarat — Instagram’da endüstriyel ürün sayfası', desc: 'Elektronik ekipman, ölçüm cihazları ve endüstriyel parçalar için Instagram içerik yönetimi projesi' },
        about: { title: 'Proje hakkında', imageAlt: 'Biztejarat Instagram endüstriyel ürün içeriği — Bizdavar SMM örneği', body: '<strong>Biztejarat</strong>, Bizdavar Group tarafından kurulan ve yönetilen endüstriyel ürünler Instagram sayfasıdır. Bu proje <strong>SMM yönetimi ve B2B içerik üretimi</strong> örneğidir; Bizdavar’ın ayrı bir ticari birimi değildir.', body2: 'Bu sayfada elektronik ekipman, ölçüm cihazları, sensör ve endüstriyel parçalar (VEGA, Prosense ve ilgili markalar dahil) tanıtılır ve belgelenir.', servicesTitle: 'Yapılan hizmetler', services: ['Instagram profili kurulumu ve optimizasyonu', 'Endüstriyel ürünler için Farsça/İngilizce içerik üretimi', 'Gönderi ve story grafik tasarımı', 'Yayın takvimi ve etkileşim yönetimi', 'Kataloglara ve teklif sayfalarına yönlendirme'], ctaInstagram: 'Biztejarat Instagram sayfası', ctaSmm: 'SMM yönetim hizmetleri' },
        products: { title: 'Sayfada tanıtılan ürünler', desc: 'Biztejarat içeriğinde kapsanan alan örnekleri — teknik tedarik <a href="services#industrial">Bizdavar Group</a> üzerinden' },
        geoText: 'İran pazarı için B2B içerik yönetimi — VEGA, Prosense ve Gamak endüstriyel ekipmanlarının Farsça ve İngilizce tanıtımı.'
      },
      bzDiamond: {
        hero: { tag: 'Web tasarım örneği', title: 'BZ Diamond — Web sitesi ve online mağaza tasarımı', desc: 'Mücevher ve pırlanta alanında müşteri projesi — tasarım, geliştirme ve dijital destek Bizdavar Group tarafından' },
        about: { title: 'Proje hakkında', body: '<strong>BZ Diamond</strong>, Bizdavar Group müşterilerinden biridir — online pırlanta ve mücevher satışına odaklanan bir marka. Web sitesi, WooCommerce mağazası, e-posta altyapısı ve teknik desteği Bizdavar tarafından tasarlanıp uygulanmıştır. Bu sayfa bir <strong>web tasarım örneğidir</strong>, Bizdavar’ın endüstriyel iş birimi değildir.', servicesTitle: 'Bizdavar tarafından yapılan hizmetler', services: ['Kurumsal ve e-ticaret web sitesi tasarımı ve geliştirme', 'WooCommerce uygulaması — online pırlanta ve mücevher satışı', 'Kurumsal e-posta yönetimi ve yapılandırması (alan adı ve posta kutuları)', 'SEO, içerik yapısı ve ürün sayfası optimizasyonu', 'RTL ve çok dilli arayüz (Farsça / İngilizce)', 'Teknik destek, güncelleme ve site bakımı'], clientTitle: 'Müşteri faaliyet alanı', clientBody: 'BZ Diamond, GIA ve lab-grown elmas ile mücevher seçimi eğitimi alanında faaliyet gösterir. Ürün ve fiyat detayları müşterinin resmi web sitesinde yayınlanır.', ctaSite: 'BZ Diamond web sitesini gör', ctaOrder: 'Benzer site tasarımı sipariş et', ctaPortfolio: 'Diğer örnek işler' },
        geoText: 'İran ve uluslararası markalar için web tasarım örneği — WooCommerce, SEO ve İstanbul ile Tebriz’den destek.'
      }
    },
    en: {
      biztejarat: {
        hero: { tag: 'SMM case study', title: 'Biztejarat — Industrial products on Instagram', desc: 'Instagram management and content production project for electronic equipment, instrumentation and industrial parts' },
        about: { title: 'About the project', imageAlt: 'Biztejarat Instagram industrial product content — Bizdavar SMM case study', body: '<strong>Biztejarat</strong> is an industrial products Instagram page launched and managed by Bizdavar Group. This is an <strong>SMM management and B2B content</strong> case study, not a separate Bizdavar business unit.', body2: 'The page introduces and documents electronic equipment, instrumentation, sensors and industrial parts (including VEGA, Prosense and related brands).', servicesTitle: 'Services delivered', services: ['Instagram profile setup and optimization', 'Persian/English content for industrial products', 'Post and story graphic design', 'Publishing calendar and engagement management', 'Linking to catalogs and quote requests'], ctaInstagram: 'Biztejarat Instagram page', ctaSmm: 'SMM management services' },
        products: { title: 'Products featured on the page', desc: 'Examples of areas covered in Biztejarat content — technical supply via <a href="services#industrial">Bizdavar Group</a>' },
        geoText: 'B2B content management for the Iranian market — introducing VEGA, Prosense and Gamak industrial equipment in Persian and English.'
      },
      bzDiamond: {
        hero: { tag: 'Web design case study', title: 'BZ Diamond — Website and online store design', desc: 'Client project in jewelry and diamonds — design, development and digital support by Bizdavar Group' },
        about: { title: 'About the project', body: '<strong>BZ Diamond</strong> is a Bizdavar Group client focused on online diamond and jewelry sales. We designed and implemented the website, WooCommerce store, email infrastructure and technical support. This page is a <strong>web design case study</strong>, not part of Bizdavar’s industrial business.', servicesTitle: 'Services delivered by Bizdavar', services: ['Corporate and e-commerce website design and development', 'WooCommerce implementation — online diamond and jewelry sales', 'Corporate email management and configuration (domain and mailboxes)', 'SEO, content structure and product page optimization', 'RTL and multilingual interface (Persian / English)', 'Technical support, updates and site maintenance'], clientTitle: 'Client field of activity', clientBody: 'BZ Diamond operates in GIA and lab-grown diamonds and jewelry selection education. Product and pricing details are published on the client’s official website.', ctaSite: 'View the BZ Diamond website', ctaOrder: 'Order a similar website', ctaPortfolio: 'Other case studies' },
        geoText: 'Web design case study for Iranian and international brands — WooCommerce, SEO and support from Istanbul and Tabriz.'
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
    }
    Object.assign(window.BIZDAVAR_LOCALES[lang], page[lang], {
      blogPosts: asBlogRows(blogPosts[lang]),
      caseStudy: caseStudy[lang],
      articles: asArticles(lang)
    });
  });
})();
