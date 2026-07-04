/**
 * Page SEO meta — merged into BIZDAVAR_LOCALES[lang].pages
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seoByLang = {
    fa: {
      home: {
        seoTitle: 'بیزدوار گروپ | خدمات دیجیتال، طراحی سایت و تامین تجهیزات صنعتی',
        seoDescription: 'بیزدوار گروپ — آژانس دیجیتال با ۱۲+ سال تجربه و ۱۰۰+ پروژه در ۱۱ کشور. بازاریابی دیجیتال، طراحی وب، فین‌تک، SMM و تامین VEGA و Prosense.',
        seoKeywords: 'بیزدوار, Bizdavar Group, طراحی سایت, VEGA, Prosense, Fast Web Studio'
      },
      about: {
        seoTitle: 'درباره ما | بیزدوار گروپ — آژانس دیجیتال و صنعتی',
        seoDescription: 'بیزدوار گروپ از ۲۰۱۳ — بنیان‌گذار ارسان جاهد تبریزی. ۱۰۰+ پروژه در ۱۱ کشور: بازاریابی دیجیتال، فین‌تک، طراحی وب و تامین VEGA/Prosense.',
        seoKeywords: 'بیزدوار گروپ, Bizdavar Group, ارسان جاهد تبریزی, آژانس دیجیتال, تاریخچه بیزدوار'
      },
      services: {
        seoTitle: 'خدمات بیزدوار | بازاریابی دیجیتال، طراحی وب و تامین تجهیزات',
        seoDescription: 'خدمات بیزدوار گروپ: بازاریابی دیجیتال، طراحی سایت Fast Studio، مدیریت SMM و تامین تجهیزات صنعتی VEGA و Prosense.',
        seoKeywords: 'خدمات دیجیتال, طراحی سایت, SMM, VEGA, Prosense, بیزدوار'
      },
      products: {
        seoTitle: 'محصولات بیزدوار | BizSwap، FXGuard، BizTab و خطوط تولید',
        seoDescription: 'محصولات بیزدوار — BizSwap DeFi، FXGuard WhatsApp CRM، BizTab، BizClean و خطوط تولید. سخت‌افزار و SaaS مهندسی‌شده توسط تیم بیزدوار.',
        seoKeywords: 'BizSwap, FXGuard, WhatsApp CRM, BizTab, BizClean, بیزدوار'
      },
      portfolio: {
        seoTitle: 'نمونه‌کارها | پروژه‌های بیزدوار گروپ — ZedPay، BZ Diamond و...',
        seoDescription: 'نمونه‌کارهای بیزدوار: ZedPay، BZ Diamond، Marvelous Holding، NIK Aesthetic، Karen Leather و برندهای دیگر — اکوسیستم، مشتریان و پروژه‌های دیجیتال.',
        seoKeywords: 'نمونه کار, ZedPay, BZ Diamond, بیزدوار, پورتفولیو'
      },
      blog: {
        seoTitle: 'وبلاگ بیزدوار | بازاریابی دیجیتال، طراحی وب و تجهیزات صنعتی',
        seoDescription: 'مقالات تخصصی بیزدوار گروپ: بازاریابی دیجیتال، Fast Web Studio، سنسورهای صنعتی VEGA و راهکارهای رشد کسب‌وکار.',
        seoKeywords: 'وبلاگ بیزدوار, بازاریابی دیجیتال, طراحی سایت, VEGA, سنسور صنعتی'
      },
      fast: {
        seoTitle: 'Fast Web Studio | طراحی سایت حرفه‌ای در ۵ روز — بیزدوار',
        seoDescription: 'Fast Web Studio بیزدوار — طراحی سایت در ۵ روز. پلن پایه $99، فروشگاهی $199، حرفه‌ای $299. RTL، واتساپ فارسی، WooCommerce و سئو پایه.',
        seoKeywords: 'Fast Web Studio, طراحی سایت, طراحی سایت ارزان, WooCommerce, بیزدوار, bizdavar.com'
      },
      privacy: {
        seoTitle: 'حریم خصوصی | بیزدوار گروپ',
        seoDescription: 'سیاست حفظ حریم خصوصی وبسایت بیزدوار گروپ — نحوه استفاده از اطلاعات فرم تماس، زبان و تشخیص منطقه.',
        seoKeywords: 'حریم خصوصی, privacy, بیزدوار'
      },
      contact: {
        seoTitle: 'تماس با ما | بیزدوار گروپ — مشاوره رایگان',
        seoDescription: 'با بیزدوار گروپ تماس بگیرید: بازاریابی دیجیتال، طراحی سایت، SMM و تامین تجهیزات صنعتی VEGA و Prosense. فرم تماس، واتساپ و ایمیل.',
        seoKeywords: 'تماس بیزدوار, مشاوره رایگان, Bizdavar contact, طراحی سایت, VEGA'
      },
      vega: {
        seoTitle: 'خرید سنسور VEGA در ایران | VEGAPULS، VEGABAR، VEGAPOINT — بیزدوار',
        seoDescription: 'تامین اصل سنسورهای VEGA برای پروژه‌های صنعتی ایران. مشاوره فنی فارسی، کد سفارش دقیق، پیش‌فاکتور شفاف و لجستیک تا ایران — بیزدوار گروپ.',
        seoKeywords: 'خرید VEGA ایران, سنسور سطح VEGA, VEGAPULS, VEGABAR, VEGAPOINT, تامین VEGA, بیزدوار'
      },
      prosense: {
        seoTitle: 'خرید دتکتور Prosense در ایران | PQ, SafeVader, PPS+ — بیزدوار',
        seoDescription: 'تامین اصل دتکتور گاز و شعله Prosense برای پروژه‌های صنعتی ایران. مشاوره فنی فارسی، گواهی SIL/M1/EN، پیش‌فاکتور شفاف و لجستیک تا ایران — بیزدوار گروپ.',
        seoKeywords: 'خرید Prosense ایران, دتکتور گاز, PQ Serisi, SafeVader, PPS+, بیزدوار'
      },
      teltonika: {
        seoTitle: 'خرید ردیاب Teltonika در ایران | FMB920، FMC650، Fleet Telematics — بیزدوار',
        seoDescription: 'تامین اصل ردیاب GPS و Fleet Telematics Teltonika برای ناوگان ایران. FMB920، CAN/OBD، DualCam، EYE Mesh — مشاوره فارسی و لجستیک — بیزدوار گروپ.',
        seoKeywords: 'Teltonika ایران, ردیاب GPS, FMB920, Fleet Telematics, FMC650, بیزدوار'
      },
      gamak: {
        seoTitle: 'خرید الکتروموتور Gamak در ایران | IE2/IE3 — بیزدوار گروپ',
        seoDescription: 'تامین اصل الکتروموتور Gamak ترکیه برای پروژه‌های صنعتی ایران. GM/GMB، IE2/IE3، فلنج B3/B5 — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک — بیزدوار گروپ.',
        seoKeywords: 'Gamak ایران, الکتروموتور صنعتی, IE2 IE3, موتور سه فاز, بیزدوار'
      },
      digiSystem: {
        seoTitle: 'خرید Digi System | ترازو و POS — بیزدوار گروپ',
        seoDescription: 'تامین ترازو، POS و صندوق فروشگاهی Digi System برای retail ایران. مشاوره انتخاب مدل، پیش‌فاکتور شفاف و لجستیک از ترکیه — بیزدوار گروپ.',
        seoKeywords: 'Digi System ایران, ترازو فروشگاهی, POS, retail, بیزدوار'
      },
      teraoka: {
        seoTitle: 'خرید Teraoka Seiko | ترازو و POS — بیزدوار گروپ',
        seoDescription: 'تامین ترازو، برچسب‌زن و POS Teraoka Seiko برای فروشگاه و food service ایران. مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی — بیزدوار گروپ.',
        seoKeywords: 'Teraoka ایران, ترازو Teraoka, POS ژاپن, labeling, بیزدوار'
      },
      bzDiamond: {
        seoTitle: 'نمونه‌کار BZ Diamond | طراحی وب و WooCommerce — بیزدوار گروپ',
        seoDescription: 'نمونه‌کار طراحی وب BZ Diamond: فروشگاه WooCommerce، مدیریت ایمیل، سئو و پشتیبانی فنی — پروژه مشتری بیزدوار گروپ.',
        seoKeywords: 'نمونه کار طراحی سایت, BZ Diamond, WooCommerce, طراحی وب, بیزدوار'
      },
      biztejarat: {
        seoTitle: 'نمونه‌کار بیزتجارت | صفحه محصولات صنعتی اینستاگرام — بیزدوار',
        seoDescription: 'نمونه‌کار مدیریت اینستاگرام بیزتجارت: محتوای محصولات صنعتی، ابزار دقیق و SMM توسط بیزدوار گروپ.',
        seoKeywords: 'بیزتجارت, Biztejarat, اینستاگرام صنعتی, SMM, مدیریت شبکه اجتماعی, بیزدوار'
      },
      biztab: {
        seoTitle: 'BizTab | دماسنج دیواری غیرتماسی — محصول بیزدوار',
        seoDescription: 'BizTab — اولین دماسنج دیواری غیرتماسی تبریز. طراحی تیم بیزدوار، دقت کمتر از ۰.۳ درجه، تأیید دانشگاه تبریز.',
        seoKeywords: 'BizTab, دماسنج غیرتماسی, IoT, بیزدوار, تبریز, محصول اختصاصی'
      },
      bizsanitizerV5: {
        seoTitle: 'دستگاه ضدعفونی دست بیزدوار V5 | محصول مهندسی‌شده',
        seoDescription: 'دستگاه ضدعفونی دست بیزدوار V5 — ساخته‌شده در دوران کرونا، نمایشگاه مرکز رشد دانشگاه تبریز، سنسور التراسونیک. طراحی تیم بیزدوار، موجود در دیجی‌کالا.',
        seoKeywords: 'BizSan V5, ضدعفونی دست, بیزدوار, کرونا, دیجی‌کالا, محصول اختصاصی'
      },
      fxguard: {
        seoTitle: 'FXGuard | WhatsApp CRM — محصول SaaS بیزدوار',
        seoDescription: 'FXGuard — CRM واتساپ با یک شماره و پنل تیمی، پیام انبوه، پاسخ خودکار ۲۴/۷ و پشتیبانی فارسی/ترکی/عربی. توسعه‌یافته توسط تیم بیزدوار.',
        seoKeywords: 'FXGuard, WhatsApp CRM, CRM واتساپ, SaaS, بیزدوار, fxguard.io'
      },
      bizswap: {
        seoTitle: 'BizSwap | پیش‌فروش و سواپ توکن Web3 — محصول بیزدوار',
        seoDescription: 'BizSwap — ماژول DeFi برای اتصال کیف پول، سواپ on-chain، پیش‌فروش توکن، اسلیپیج و پنل ادمین BEP-20. توسعه‌یافته توسط تیم بیزدوار.',
        seoKeywords: 'BizSwap, DeFi, Web3, token swap, presale, BEP-20, بیزدوار'
      },
      articleDigitalMarketing: {
        seoTitle: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟ | بیزدوار',
        seoDescription: 'راهکارهای عملی بازاریابی دیجیتال برای افزایش فروش: CRO، کمپین تبلیغاتی، سئو و اتوماسیون. راهنمای بیزدوار گروپ.',
        seoKeywords: 'بازاریابی دیجیتال, افزایش فروش, CRO, سئو, بیزدوار'
      },
      articleWhatIsDm: {
        seoTitle: 'دیجیتال مارکتینگ چیست؟ | راهنمای کامل — بیزدوار',
        seoDescription: 'تعریف دیجیتال مارکتینگ، کانال‌ها (سئو، تبلیغات، SMM) و اهمیت آن برای رشد کسب‌وکار. راهنمای بیزدوار گروپ.',
        seoKeywords: 'دیجیتال مارکتینگ چیست, بازاریابی دیجیتال, سئو, بیزدوار'
      },
      articleSmm: {
        seoTitle: 'مدیریت شبکه‌های اجتماعی (SMM) | بیزدوار',
        seoDescription: 'استراتژی SMM: تولید محتوا، تقویم انتشار، طراحی گرافیک و تبلیغات هدفمند. راهنمای بیزدوار گروپ.',
        seoKeywords: 'مدیریت شبکه اجتماعی, SMM, اینستاگرام, لینکدین, بیزدوار'
      },
      articleFastStudio: {
        seoTitle: 'راه‌اندازی سایت در ۵ روز — راهنمای Fast Studio | بیزدوار',
        seoDescription: 'راهنمای کامل Fast Web Studio: پلن $99 تا $299، تحویل ۵ روزه، WooCommerce و سئو پایه.',
        seoKeywords: 'Fast Web Studio, طراحی سایت ۵ روز, WooCommerce, بیزدوار'
      },
      articleIndustrialSensors: {
        seoTitle: 'انتخاب سنسور صنعتی VEGA — راهنمای تامین | بیزدوار',
        seoDescription: 'راهنمای انتخاب سنسور صنعتی VEGA، پمپ P-Series و SafeVader. مشاوره فنی و تامین بین‌المللی از بیزدوار گروپ.',
        seoKeywords: 'سنسور VEGA, تجهیزات صنعتی, ابزار دقیق, بیزدوار'
      },
      articleAboutBizdavar: {
        seoTitle: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم، ۱۱ کشور | راهنمای کامل',
        seoDescription: 'شناسنامه بیزدوار گروپ: بنیان‌گذار ارسان جاهد تبریزی، ۱۰۰+ پروژه، فین‌تک، طراحی وب و تامین VEGA/Prosense در ۱۱ کشور.',
        seoKeywords: 'بیزدوار گروپ, Bizdavar Group, تاریخچه, ارسان جاهد تبریزی'
      }
    },
    tr: {
      home: {
        seoTitle: 'Bizdavar Group | Dijital hizmetler, web tasarım ve endüstriyel tedarik',
        seoDescription: 'Bizdavar Group — 12+ yıl deneyim, 100+ proje, 11 ülkede dijital ajans. Dijital pazarlama, web tasarım, SMM ve VEGA/Prosense tedariki. İstanbul merkezli.',
        seoKeywords: 'Bizdavar, web tasarım İstanbul, dijital pazarlama, VEGA, Prosense, Fast Web Studio'
      },
      about: {
        seoTitle: 'Hakkımızda | Bizdavar Group — Dijital ve endüstriyel ajans',
        seoDescription: 'Bizdavar Group 2013’ten beri — kurucu Ersan Jahed Tabrizi. 11 ülkede 100+ proje: dijital pazarlama, fintech, web tasarım ve VEGA/Prosense tedariki.',
        seoKeywords: 'Bizdavar Group, Ersan Jahed Tabrizi, dijital ajans, hakkımızda'
      },
      services: {
        seoTitle: 'Hizmetler | Dijital pazarlama, web tasarım ve endüstriyel tedarik',
        seoDescription: 'Bizdavar Group hizmetleri: dijital pazarlama, Fast Web Studio web tasarım, SMM yönetimi ve VEGA/Prosense endüstriyel ekipman tedariki.',
        seoKeywords: 'dijital hizmetler, web tasarım, SMM, VEGA, Prosense, Bizdavar'
      },
      products: {
        seoTitle: 'Bizdavar ürünleri | FXGuard, BizTab, BizClean ve üretim hatları',
        seoDescription: 'Bizdavar ürünleri — FXGuard WhatsApp CRM, BizTab, BizClean, BizRoll, vakum makineleri ve PPE hatları. Donanım ve SaaS — Bizdavar ekibi.',
        seoKeywords: 'FXGuard, WhatsApp CRM, BizTab, BizClean, BizRoll, Bizdavar'
      },
      portfolio: {
        seoTitle: 'Portfolyo | Bizdavar Group projeleri — ZedPay, BZ Diamond...',
        seoDescription: 'Bizdavar portfolyosu: ZedPay, BZ Diamond, Marvelous Holding, NIK Aesthetic, Karen Leather ve daha fazlası — ekosistem, müşteriler ve dijital projeler.',
        seoKeywords: 'portfolyo, ZedPay, BZ Diamond, Bizdavar, web tasarım'
      },
      blog: {
        seoTitle: 'Blog | Dijital pazarlama, web tasarım ve endüstriyel tedarik',
        seoDescription: 'Bizdavar Group uzman yazıları: dijital pazarlama, Fast Web Studio, VEGA endüstriyel sensörler ve iş büyütme rehberleri.',
        seoKeywords: 'Bizdavar blog, dijital pazarlama, web tasarım, VEGA'
      },
      fast: {
        seoTitle: 'Fast Web Studio | 5 günde profesyonel web sitesi — Bizdavar',
        seoDescription: 'Bizdavar Fast Web Studio — 5 günde web sitesi. Temel $99, mağaza $199, pro $299. RTL, WhatsApp, WooCommerce ve temel SEO.',
        seoKeywords: 'Fast Web Studio, web tasarım, WooCommerce, Bizdavar, bizdavar.com'
      },
      privacy: {
        seoTitle: 'Gizlilik Politikası | Bizdavar Group',
        seoDescription: 'Bizdavar Group web sitesi gizlilik politikası — iletişim formu, dil tercihi ve bölge algılama hakkında bilgi.',
        seoKeywords: 'gizlilik politikası, privacy, Bizdavar'
      },
      contact: {
        seoTitle: 'İletişim | Bizdavar Group — Ücretsiz danışmanlık',
        seoDescription: 'Bizdavar Group ile iletişime geçin: dijital pazarlama, web tasarım, SMM ve VEGA/Prosense endüstriyel tedarik. İletişim formu, WhatsApp ve e-posta.',
        seoKeywords: 'Bizdavar iletişim, ücretsiz danışmanlık, web tasarım, VEGA'
      },
      vega: {
        seoTitle: 'VEGA sensör tedariki | VEGAPULS, VEGABAR, VEGAPOINT — Bizdavar',
        seoDescription: 'Endüstriyel projeler için orijinal VEGA sensör tedariki. Türkçe/Farsça teknik danışmanlık, şeffaf proforma ve İran’a lojistik — Bizdavar Group.',
        seoKeywords: 'VEGA sensör, VEGAPULS, VEGABAR, endüstriyel tedarik, Bizdavar'
      },
      prosense: {
        seoTitle: 'Prosense dedektör tedariki | PQ, SafeVader, PPS+ — Bizdavar',
        seoDescription: 'Endüstriyel projeler için orijinal Prosense gaz ve alev dedektörü tedariki. SIL/M1/EN sertifikaları, teknik danışmanlık ve lojistik — Bizdavar Group.',
        seoKeywords: 'Prosense, gaz dedektörü, PQ, SafeVader, Bizdavar'
      },
      teltonika: {
        seoTitle: 'Teltonika GPS tedariki | FMB920, FMC650, Fleet Telematics — Bizdavar',
        seoDescription: 'Orijinal Teltonika GPS ve Fleet Telematics tedariki. FMB920, CAN/OBD, DualCam, EYE Mesh — teknik danışmanlık ve lojistik — Bizdavar Group.',
        seoKeywords: 'Teltonika, GPS tracker, FMB920, fleet telematics, Bizdavar'
      },
      gamak: {
        seoTitle: 'Gamak elektrik motoru tedariki | IE2/IE3 — Bizdavar Group',
        seoDescription: 'Türkiye Gamak endüstriyel elektrik motoru tedariki. GM/GMB, IE2/IE3, B3/B5 flanş — Farsça teknik danışmanlık, proforma ve lojistik — Bizdavar Group.',
        seoKeywords: 'Gamak, elektrik motoru, IE2 IE3, endüstriyel motor, Bizdavar'
      },
      digiSystem: {
        seoTitle: 'Digi System tedariki | Terazi ve POS — Bizdavar Group',
        seoDescription: 'Digi System terazi, POS ve kasa tedariki — perakende projeleri için model seçimi, şeffaf proforma ve Türkiye lojistiği — Bizdavar Group.',
        seoKeywords: 'Digi System, POS, terazi, perakende, Bizdavar'
      },
      teraoka: {
        seoTitle: 'Teraoka Seiko tedariki | Terazi ve POS — Bizdavar Group',
        seoDescription: 'Teraoka Seiko terazi, etiketleme ve POS tedariki — Farsça danışmanlık, proforma ve uluslararası lojistik — Bizdavar Group.',
        seoKeywords: 'Teraoka, terazi, POS, etiketleme, Bizdavar'
      },
      bzDiamond: {
        seoTitle: 'BZ Diamond vaka çalışması | Web tasarım ve WooCommerce — Bizdavar',
        seoDescription: 'BZ Diamond web tasarım vaka çalışması: WooCommerce mağaza, e-posta yönetimi, SEO ve teknik destek — Bizdavar Group müşteri projesi.',
        seoKeywords: 'BZ Diamond, WooCommerce, web tasarım, Bizdavar, vaka çalışması'
      },
      biztejarat: {
        seoTitle: 'Biztejarat vaka çalışması | Endüstriyel Instagram SMM — Bizdavar',
        seoDescription: 'Biztejarat Instagram yönetimi vaka çalışması: endüstriyel ürün içeriği, enstrümantasyon ve SMM — Bizdavar Group.',
        seoKeywords: 'Biztejarat, endüstriyel SMM, Instagram, Bizdavar'
      },
      biztab: {
        seoTitle: 'BizTab | Temasız duvar termometresi — Bizdavar ürünü',
        seoDescription: 'BizTab — Tebriz\'de tasarlanan ilk temasız duvar termometresi. Bizdavar ekibi, 0,3°C altı hata payı, Tebriz Üniversitesi onayı.',
        seoKeywords: 'BizTab, temasız termometre, IoT, Bizdavar, Tebriz'
      },
      bizsanitizerV5: {
        seoTitle: 'Bizdavar el dezenfektan V5 | Mühendislik ürünü',
        seoDescription: 'Bizdavar el dezenfektan cihazı V5 — ultrasonik sensör, otomatik püskürtme. Bizdavar ekibi tasarımı, Digikala\'da satışta.',
        seoKeywords: 'BizSan V5, el dezenfektan, Bizdavar, Digikala'
      },
      fxguard: {
        seoTitle: 'FXGuard | WhatsApp CRM — Bizdavar SaaS ürünü',
        seoDescription: 'FXGuard — tek numara, ekip paneli, toplu mesaj ve 7/24 otomatik yanıt. Türkiye, BAE, Avrupa ve İran için WhatsApp CRM. Bizdavar tarafından geliştirildi.',
        seoKeywords: 'FXGuard, WhatsApp CRM, SaaS, Bizdavar, fxguard.io'
      },
      bizswap: {
        seoTitle: 'BizSwap | Token ön satış & swap Web3 — Bizdavar ürünü',
        seoDescription: 'BizSwap — cüzdan bağlantısı, on-chain swap, token ön satış, slippage ve BEP-20 admin paneli. Bizdavar ekibi tarafından geliştirildi.',
        seoKeywords: 'BizSwap, DeFi, Web3, token swap, presale, BEP-20, Bizdavar'
      },
      articleDigitalMarketing: {
        seoTitle: 'Dijital pazarlama satışları nasıl artırır? | Bizdavar',
        seoDescription: 'Satış artışı için pratik dijital pazarlama: CRO, reklam kampanyaları, SEO ve otomasyon. Bizdavar Group rehberi.',
        seoKeywords: 'dijital pazarlama, satış artışı, CRO, SEO, Bizdavar'
      },
      articleWhatIsDm: {
        seoTitle: 'Dijital pazarlama nedir? | Tam rehber — Bizdavar',
        seoDescription: 'Dijital pazarlama tanımı, kanallar (SEO, reklam, SMM) ve iş büyümesindeki rolü. Bizdavar Group rehberi.',
        seoKeywords: 'dijital pazarlama nedir, SEO, SMM, Bizdavar'
      },
      articleSmm: {
        seoTitle: 'Sosyal medya yönetimi (SMM) | Bizdavar',
        seoDescription: 'SMM stratejisi: içerik üretimi, yayın takvimi, grafik tasarım ve hedefli reklamlar. Bizdavar Group rehberi.',
        seoKeywords: 'SMM, sosyal medya yönetimi, Instagram, LinkedIn, Bizdavar'
      },
      articleFastStudio: {
        seoTitle: '5 günde site kurulumu — Fast Studio rehberi | Bizdavar',
        seoDescription: 'Fast Web Studio tam rehber: $99–$299 planlar, 5 günde teslim, WooCommerce ve temel SEO.',
        seoKeywords: 'Fast Web Studio, 5 günde web sitesi, WooCommerce, Bizdavar'
      },
      articleIndustrialSensors: {
        seoTitle: 'VEGA endüstriyel sensör seçimi — tedarik rehberi | Bizdavar',
        seoDescription: 'VEGA endüstriyel sensör, P-Series pompa ve SafeVader seçim rehberi. Teknik danışmanlık ve uluslararası tedarik — Bizdavar Group.',
        seoKeywords: 'VEGA sensör, endüstriyel ekipman, Bizdavar'
      },
      articleAboutBizdavar: {
        seoTitle: 'Bizdavar Group nedir? — Tarihçe, ekip, 11 ülke | Tam rehber',
        seoDescription: 'Bizdavar Group profili: kurucu Ersan Jahed Tabrizi, 100+ proje, fintech, web tasarım ve VEGA/Prosense tedariki 11 ülkede.',
        seoKeywords: 'Bizdavar Group, tarihçe, Ersan Jahed Tabrizi'
      }
    },
    en: {
      home: {
        seoTitle: 'Bizdavar Group | Digital services, web design & industrial supply',
        seoDescription: 'Bizdavar Group — 12+ years, 100+ projects across 11 countries. Digital marketing, web design, SMM, and VEGA/Prosense supply. Istanbul HQ.',
        seoKeywords: 'Bizdavar, web design Istanbul, digital marketing, VEGA, Prosense, Fast Web Studio'
      },
      about: {
        seoTitle: 'About us | Bizdavar Group — Digital & industrial agency',
        seoDescription: 'Bizdavar Group since 2013 — founder Ersan Jahed Tabrizi. 100+ projects in 11 countries: digital marketing, fintech, web design, and VEGA/Prosense supply.',
        seoKeywords: 'Bizdavar Group, Ersan Jahed Tabrizi, digital agency, about'
      },
      services: {
        seoTitle: 'Services | Digital marketing, web design & industrial supply',
        seoDescription: 'Bizdavar Group services: digital marketing, Fast Web Studio web design, SMM management, and VEGA/Prosense industrial equipment supply.',
        seoKeywords: 'digital services, web design, SMM, VEGA, Prosense, Bizdavar'
      },
      products: {
        seoTitle: 'Bizdavar products | FXGuard, BizTab, BizClean & production lines',
        seoDescription: 'Bizdavar products — FXGuard WhatsApp CRM, BizTab, BizClean, BizRoll, vacuum sealers and PPE lines. Hardware and SaaS engineered by the Bizdavar team.',
        seoKeywords: 'FXGuard, WhatsApp CRM, BizTab, BizClean, BizRoll, Bizdavar products'
      },
      portfolio: {
        seoTitle: 'Portfolio | Bizdavar Group projects — ZedPay, BZ Diamond & more',
        seoDescription: 'Bizdavar portfolio: ZedPay, BZ Diamond, Marvelous Holding, NIK Aesthetic, Karen Leather and more — ecosystem, clients and digital projects.',
        seoKeywords: 'portfolio, ZedPay, BZ Diamond, Bizdavar, web design'
      },
      blog: {
        seoTitle: 'Blog | Digital marketing, web design & industrial supply',
        seoDescription: 'Bizdavar Group expert articles: digital marketing, Fast Web Studio, VEGA industrial sensors, and business growth guides.',
        seoKeywords: 'Bizdavar blog, digital marketing, web design, VEGA'
      },
      fast: {
        seoTitle: 'Fast Web Studio | Professional website in 5 days — Bizdavar',
        seoDescription: 'Bizdavar Fast Web Studio — website in 5 days. Basic $99, store $199, pro $299. RTL, WhatsApp, WooCommerce and basic SEO.',
        seoKeywords: 'Fast Web Studio, web design, WooCommerce, Bizdavar, bizdavar.com'
      },
      privacy: {
        seoTitle: 'Privacy Policy | Bizdavar Group',
        seoDescription: 'Bizdavar Group website privacy policy — contact form data, language preference and region detection.',
        seoKeywords: 'privacy policy, Bizdavar, GDPR'
      },
      contact: {
        seoTitle: 'Contact us | Bizdavar Group — Free consultation',
        seoDescription: 'Contact Bizdavar Group: digital marketing, web design, SMM, and VEGA/Prosense industrial supply. Contact form, WhatsApp, and email.',
        seoKeywords: 'Bizdavar contact, free consultation, web design, VEGA'
      },
      vega: {
        seoTitle: 'VEGA sensor supply | VEGAPULS, VEGABAR, VEGAPOINT — Bizdavar',
        seoDescription: 'Genuine VEGA sensors for industrial projects. Persian/Turkish technical consulting, transparent proforma and logistics to Iran — Bizdavar Group.',
        seoKeywords: 'VEGA sensor, VEGAPULS, VEGABAR, industrial supply, Bizdavar'
      },
      prosense: {
        seoTitle: 'Prosense detector supply | PQ, SafeVader, PPS+ — Bizdavar',
        seoDescription: 'Genuine Prosense gas and flame detectors for industrial projects. SIL/M1/EN certifications, technical consulting and logistics — Bizdavar Group.',
        seoKeywords: 'Prosense, gas detector, PQ, SafeVader, Bizdavar'
      },
      teltonika: {
        seoTitle: 'Teltonika GPS tracker supply | FMB920, FMC650, Fleet Telematics — Bizdavar',
        seoDescription: 'Genuine Teltonika GPS and Fleet Telematics for fleet projects. FMB920, CAN/OBD, DualCam, EYE Mesh — consulting and logistics — Bizdavar Group.',
        seoKeywords: 'Teltonika, GPS tracker, FMB920, fleet telematics, Bizdavar'
      },
      gamak: {
        seoTitle: 'Gamak electric motor supply | IE2/IE3 — Bizdavar Group',
        seoDescription: 'Genuine Gamak industrial electric motors from Turkey. GM/GMB, IE2/IE3, B3/B5 flange — Persian technical consulting, proforma and logistics — Bizdavar Group.',
        seoKeywords: 'Gamak, electric motor, IE2 IE3, industrial motor, Bizdavar'
      },
      digiSystem: {
        seoTitle: 'Digi System supply | Scales & POS — Bizdavar Group',
        seoDescription: 'Digi System retail scales, POS and checkout supply — model selection, transparent proforma and logistics from Turkey — Bizdavar Group.',
        seoKeywords: 'Digi System, POS, retail scales, Bizdavar'
      },
      teraoka: {
        seoTitle: 'Teraoka Seiko supply | Scales & POS — Bizdavar Group',
        seoDescription: 'Teraoka Seiko scales, labeling and POS supply — Persian consulting, proforma and international logistics — Bizdavar Group.',
        seoKeywords: 'Teraoka, scales, POS, labeling, Bizdavar'
      },
      bzDiamond: {
        seoTitle: 'BZ Diamond case study | Web design & WooCommerce — Bizdavar',
        seoDescription: 'BZ Diamond web design case study: WooCommerce store, email management, SEO and technical support — Bizdavar Group client project.',
        seoKeywords: 'BZ Diamond, WooCommerce, web design, Bizdavar, case study'
      },
      biztejarat: {
        seoTitle: 'Biztejarat case study | Industrial Instagram SMM — Bizdavar',
        seoDescription: 'Biztejarat Instagram management case study: industrial product content, instrumentation and SMM by Bizdavar Group.',
        seoKeywords: 'Biztejarat, industrial SMM, Instagram, Bizdavar'
      },
      biztab: {
        seoTitle: 'BizTab | Non-contact wall thermometer — Bizdavar product',
        seoDescription: 'BizTab — first non-contact wall thermometer designed in Tabriz by the Bizdavar team. Error under 0.3°C, approved by University of Tabriz.',
        seoKeywords: 'BizTab, non-contact thermometer, IoT, Bizdavar, Tabriz'
      },
      bizsanitizerV5: {
        seoTitle: 'Bizdavar hand sanitizer V5 | Engineered product',
        seoDescription: 'Bizdavar hand sanitizer device V5 — ultrasonic sensor, automatic spray. Engineered by Bizdavar team, available on Digikala.',
        seoKeywords: 'BizSan V5, hand sanitizer, Bizdavar, Digikala'
      },
      fxguard: {
        seoTitle: 'FXGuard | WhatsApp CRM — Bizdavar SaaS product',
        seoDescription: 'FXGuard — one number, team panel, bulk messaging and 24/7 auto-reply. WhatsApp CRM for Turkey, UAE, Europe and Iran. Built by Bizdavar.',
        seoKeywords: 'FXGuard, WhatsApp CRM, SaaS, Bizdavar, fxguard.io'
      },
      bizswap: {
        seoTitle: 'BizSwap | Token presale & swap Web3 — Bizdavar product',
        seoDescription: 'BizSwap — wallet connect, on-chain swap, token presale, slippage UI and BEP-20 admin panel. Engineered by the Bizdavar team.',
        seoKeywords: 'BizSwap, DeFi, Web3, token swap, presale, BEP-20, Bizdavar'
      },
      articleDigitalMarketing: {
        seoTitle: 'How does digital marketing increase sales? | Bizdavar',
        seoDescription: 'Practical digital marketing for sales growth: CRO, ad campaigns, SEO and automation. Bizdavar Group guide.',
        seoKeywords: 'digital marketing, sales growth, CRO, SEO, Bizdavar'
      },
      articleWhatIsDm: {
        seoTitle: 'What is digital marketing? | Complete guide — Bizdavar',
        seoDescription: 'Definition of digital marketing, channels (SEO, ads, SMM) and why it matters for business growth. Bizdavar Group guide.',
        seoKeywords: 'what is digital marketing, SEO, SMM, Bizdavar'
      },
      articleSmm: {
        seoTitle: 'Social media management (SMM) | Bizdavar',
        seoDescription: 'SMM strategy: content creation, publishing calendar, graphic design and targeted ads. Bizdavar Group guide.',
        seoKeywords: 'SMM, social media management, Instagram, LinkedIn, Bizdavar'
      },
      articleFastStudio: {
        seoTitle: 'Launch a website in 5 days — Fast Studio guide | Bizdavar',
        seoDescription: 'Complete Fast Web Studio guide: $99–$299 plans, 5-day delivery, WooCommerce and basic SEO.',
        seoKeywords: 'Fast Web Studio, website in 5 days, WooCommerce, Bizdavar'
      },
      articleIndustrialSensors: {
        seoTitle: 'Choosing industrial VEGA sensors — supply guide | Bizdavar',
        seoDescription: 'Guide to VEGA industrial sensors, P-Series pumps and SafeVader. Technical consulting and international supply — Bizdavar Group.',
        seoKeywords: 'VEGA sensor, industrial equipment, Bizdavar'
      },
      articleAboutBizdavar: {
        seoTitle: 'What is Bizdavar Group? — History, team, 11 countries | Full guide',
        seoDescription: 'Bizdavar Group profile: founder Ersan Jahed Tabrizi, 100+ projects, fintech, web design and VEGA/Prosense supply across 11 countries.',
        seoKeywords: 'Bizdavar Group, history, Ersan Jahed Tabrizi'
      }
    }
  };

  ['fa', 'tr', 'en'].forEach(lang => {
    const pages = window.BIZDAVAR_LOCALES[lang]?.pages;
    const seo = seoByLang[lang];
    if (!pages || !seo) return;
    Object.entries(seo).forEach(([key, meta]) => {
      pages[key] = Object.assign(pages[key] || {}, meta);
    });
  });

  const privacyGeo = {
    fa: {
      title: '۵. زبان و تشخیص منطقه',
      body: 'برای نمایش زبان مناسب (فارسی، ترکی، انگلیسی)، ممکن است آدرس IP شما به‌صورت ناشناس به <strong>ipapi.co</strong> یا <strong>ipwho.is</strong> ارسال شود تا کشور تقریبی تشخیص داده شود. ترجیح زبان در حافظه مرورگر (<code>localStorage</code> — کلید <code>bizdavar_locale</code>) ذخیره می‌شود. می‌توانید هر زمان از منوی زبان یا با پارامتر <code>?lang=fa</code>، <code>?lang=tr</code> یا <code>?lang=en</code> زبان را خودتان انتخاب کنید.'
    },
    tr: {
      title: '5. Dil ve bölge algılama',
      body: 'Uygun dili göstermek için (Farsça, Türkçe, İngilizce) IP adresiniz yaklaşık ülke tespiti amacıyla <strong>ipapi.co</strong> veya <strong>ipwho.is</strong> servislerine anonim olarak gönderilebilir. Dil tercihi tarayıcı <code>localStorage</code> içinde (<code>bizdavar_locale</code>) saklanır. Dil menüsünden veya <code>?lang=fa</code>, <code>?lang=tr</code>, <code>?lang=en</code> parametreleriyle istediğiniz zaman değiştirebilirsiniz.'
    },
    en: {
      title: '5. Language and region detection',
      body: 'To show the appropriate language (Persian, Turkish, English), your IP address may be sent anonymously to <strong>ipapi.co</strong> or <strong>ipwho.is</strong> for approximate country detection. Your language preference is stored in browser <code>localStorage</code> (<code>bizdavar_locale</code>). You can change it anytime via the language menu or <code>?lang=fa</code>, <code>?lang=tr</code>, or <code>?lang=en</code> URL parameters.'
    }
  };

  const contactTitle = {
    fa: '۶. ارتباط با ما',
    tr: '6. Bize ulaşın',
    en: '6. Contact us'
  };

  ['fa', 'tr', 'en'].forEach(lang => {
    const pp = window.BIZDAVAR_LOCALES[lang]?.privacyPage;
    if (!pp?.sections || pp.sections.length < 5) return;
    const contact = pp.sections.pop();
    pp.sections.push(privacyGeo[lang]);
    contact.title = contactTitle[lang];
    pp.sections.push(contact);
  });
})();
