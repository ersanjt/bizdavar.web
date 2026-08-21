/**
 * Page SEO meta — merged into BIZDAVAR_LOCALES[lang].pages
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seoByLang = {
    fa: {
      home: {
        seoTitle: 'طراحی سایت و خرید VEGA از استانبول | مشاوره رایگان',
        seoDescription: 'طراحی سایت ۵روزه، بازاریابی دیجیتال و تامین اصل VEGA و Prosense از استانبول. استعلام قیمت و مشاوره رایگان در واتساپ — بیزدوار گروپ.',
        seoKeywords: 'طراحی سایت استانبول, خرید VEGA, خرید Prosense, بازاریابی دیجیتال, Fast Web Studio, بیزدوار'
      },
      about: {
        seoTitle: 'درباره بیزدوار | خدمات دیجیتال و تامین صنعتی از ۲۰۱۳',
        seoDescription: 'بیزدوار گروپ از ۲۰۱۳ در استانبول — طراحی وب، بازاریابی دیجیتال، محصولات FXGuard و تامین تجهیزات صنعتی VEGA، Prosense و Liqui Moly در ۱۱ کشور.',
        seoKeywords: 'درباره بیزدوار, Bizdavar Group, آژانس دیجیتال استانبول, تامین صنعتی'
      },
      services: {
        seoTitle: 'طراحی سایت و بازاریابی دیجیتال استانبول | بیزدوار',
        seoDescription: 'خدمات بیزدوار در استانبول و تبریز: طراحی سایت ۵روزه، سئو، SMM، اپ، سرور و خدمات فنی. مشاوره رایگان در واتساپ — همین امروز استعلام بگیرید.',
        seoKeywords: 'طراحی سایت استانبول, بازاریابی دیجیتال, سئو, SMM, خدمات فنی تبریز, بیزدوار'
      },
      fieldTech: {
        seoTitle: 'خدمات فنی بیزدوار | CCTV، سیم‌کشی و نورمخفی — تبریز و استانبول',
        seoDescription: 'نصب دوربین مدار بسته، سیم‌کشی ساختمان و نورمخفی در تبریز و استانبول — بازدید فنی، پیشنهاد طرح، اجرا و گارانتی توسط تیم فنی بیزدوار. هماهنگی واتساپ +98 936 411 5151.',
        seoKeywords: 'نصب دوربین مدار بسته تبریز, CCTV استانبول, سیم‌کشی ساختمان, نورمخفی, خدمات فنی بیزدوار'
      },
      products: {
        seoTitle: 'خرید VEGA، Prosense و FXGuard | محصولات بیزدوار',
        seoDescription: 'کاتالوگ بیزدوار: سنسور VEGA، دتکتور Prosense، Liqui Moly، Teltonika و FXGuard WhatsApp CRM. قیمت شفاف و استعلام واتساپ.',
        seoKeywords: 'خرید VEGA, خرید Prosense, FXGuard, Fast Web Studio, Liqui Moly, محصولات بیزدوار'
      },
      portfolio: {
        seoTitle: 'نمونه‌کارها | طراحی وب، محصولات دیجیتال و تامین صنعتی — بیزدوار',
        seoDescription: 'نمونه‌کارهای بیزدوار گروپ: طراحی وب، بازاریابی دیجیتال، SMM، محصولات FXGuard و Fast Web Studio، و تامین VEGA، Prosense و Liqui Moly.',
        seoKeywords: 'نمونه کار بیزدوار, طراحی وب, بازاریابی دیجیتال, FXGuard, Fast Web Studio, VEGA, تامین صنعتی'
      },
      blog: {
        seoTitle: 'وبلاگ بیزدوار | راهنمای بازاریابی، طراحی وب و تامین صنعتی',
        seoDescription: 'مقالات کاربردی بیزدوار: بازاریابی دیجیتال، Fast Web Studio، سنسور VEGA، تامین صنعتی و رشد کسب‌وکار در ایران و ترکیه.',
        seoKeywords: 'وبلاگ بیزدوار, بازاریابی دیجیتال, طراحی سایت, VEGA, تامین صنعتی'
      },
      fast: {
        seoTitle: 'طراحی سایت در ۵ روز از ۹۹ دلار | Fast Web Studio',
        seoDescription: 'سایت شرکتی، فروشگاهی و لندینگ در ۵ روز کاری. پلن $99 / $199 / $299 — RTL، واتساپ فارسی و سئو پایه. سفارش آنلاین از بیزدوار.',
        seoKeywords: 'طراحی سایت ۵ روز, طراحی سایت ارزان, Fast Web Studio, WooCommerce, بیزدوار'
      },
      privacy: {
        seoTitle: 'حریم خصوصی | بیزدوار گروپ',
        seoDescription: 'سیاست حفظ حریم خصوصی وبسایت بیزدوار گروپ — نحوه استفاده از اطلاعات فرم تماس، زبان و تشخیص منطقه.',
        seoKeywords: 'حریم خصوصی, privacy, بیزدوار'
      },
      contact: {
        seoTitle: 'مشاوره رایگان و استعلام قیمت | واتساپ بیزدوار',
        seoDescription: 'استعلام VEGA، Prosense یا طراحی سایت — فرم تماس یا واتساپ فارسی/ترکی. پاسخ در ساعات کاری از استانبول و تبریز.',
        seoKeywords: 'مشاوره رایگان, استعلام قیمت VEGA, واتساپ بیزدوار, تماس بیزدوار'
      },
      vega: {
        seoTitle: 'خرید سنسور VEGA در ایران | قیمت و استعلام',
        seoDescription: 'VEGAPULS 6X، VEGABAR 39 و VEGAPOINT اصل از استانبول تا پروژه ایران. کد سفارش دقیق، پیش‌فاکتور شفاف و مشاوره فارسی در واتساپ.',
        seoKeywords: 'خرید VEGA ایران, قیمت VEGAPULS 6X, VEGABAR 39, VEGAPOINT, سنسور سطح, بیزدوار'
      },
      prosense: {
        seoTitle: 'خرید دتکتور گاز Prosense در ایران | PQ و SafeVader',
        seoDescription: 'دتکتور گاز و شعله اصل Prosense با گواهی SIL. استعلام PQ، SafeVader و PPS+ در واتساپ فارسی — پیش‌فاکتور شفاف از بیزدوار.',
        seoKeywords: 'خرید Prosense ایران, دتکتور گاز, PQ Serisi, SafeVader, PPS+, بیزدوار'
      },
      liquiMoly: {
        seoTitle: 'خرید Liqui Moly | روغن موتور و افزودنی خودرو | بیزدوار',
        seoDescription: 'بیزدوار گروپ تامین‌کننده محصولات اصل Liqui Moly: روغن موتور، Octane Plus، افزودنی دیزل، ضدیخ و مراقبت خودرو. قیمت دلاری شفاف و مشاوره فارسی.',
        seoKeywords: 'Liqui Moly, Octane Plus, Top Tec, Molygen, روغن موتور, افزودنی بنزین, بیزدوار'
      },
      teltonika: {
        seoTitle: 'خرید ردیاب Teltonika FMB920 | از ۲۹ دلار',
        seoDescription: 'ردیاب GPS اصل Teltonika برای ناوگان. FMB920 از ۲۹ دلار، FMC650 و DualCam — استعلام فارسی و لجستیک از بیزدوار.',
        seoKeywords: 'خرید Teltonika ایران, قیمت FMB920, ردیاب GPS, FMC650, بیزدوار'
      },
      gamak: {
        seoTitle: 'خرید الکتروموتور Gamak در ایران | IE2/IE3 — بیزدوار گروپ',
        seoDescription: 'تامین اصل الکتروموتور Gamak ترکیه برای پروژه‌های صنعتی ایران. GM/GMB، IE2/IE3، فلنج B3/B5 — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک — بیزدوار گروپ.',
        seoKeywords: 'Gamak ایران, الکتروموتور صنعتی, IE2 IE3, موتور سه فاز, بیزدوار'
      },
      digiSystem: {
        seoTitle: 'خرید Digi System | ترازو و POS فروشگاهی | بیزدوار',
        seoDescription: 'تامین ترازو و POS Digi System — SM-6000، W-5600SRX، LX-5600 و AW-5600 برای سوپرمارکت و خرده‌فروشی. مشاوره فارسی و پیش‌فاکتور شفاف — بیزدوار گروپ.',
        seoKeywords: 'Digi System, DIGI, SM-6000, W-5600SRX, ترازو فروشگاهی, POS, بیزدوار'
      },
      teraoka: {
        seoTitle: 'خرید Teraoka Seiko | ترازو و POS — بیزدوار گروپ',
        seoDescription: 'تامین ترازو، برچسب‌زن و POS Teraoka Seiko برای فروشگاه و food service ایران. مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی — بیزدوار گروپ.',
        seoKeywords: 'Teraoka ایران, ترازو Teraoka, POS ژاپن, labeling, بیزدوار'
      },
      bzDiamond: {
        seoTitle: 'نمونه طراحی فروشگاه WooCommerce | وب و سئو — بیزدوار گروپ',
        seoDescription: 'نمونه طراحی فروشگاه آنلاین با WooCommerce: فروشگاه چندزبانه، ایمیل سازمانی، سئو و پشتیبانی فنی — خدمات طراحی وب بیزدوار گروپ.',
        seoKeywords: 'نمونه طراحی فروشگاه, WooCommerce, طراحی وب, سئو, بیزدوار'
      },
      supplifyTrade: {
        seoTitle: 'نمونه طراحی وب B2B تجارت بین‌المللی | سئو و پشتیبانی — بیزدوار',
        seoDescription: 'نمونه طراحی سایت شرکتی B2B برای تجارت و sourcing بین‌المللی: ساختار محتوا، سئو و پشتیبانی فنی — خدمات طراحی وب بیزدوار گروپ.',
        seoKeywords: 'طراحی وب B2B, تجارت بین‌المللی, نمونه طراحی سایت, سئو, بیزدوار'
      },
      kayaOne: {
        seoTitle: 'نمونه طراحی وب تجارت صنعتی | سایت شرکتی — بیزدوار',
        seoDescription: 'نمونه طراحی سایت شرکتی برای تجارت و راهکارهای صنعتی: ساختار محتوا، سئو و پشتیبانی فنی — خدمات طراحی وب بیزدوار گروپ.',
        seoKeywords: 'طراحی وب شرکتی, تجارت صنعتی, نمونه طراحی سایت, بیزدوار'
      },
      smmTurk: {
        seoTitle: 'نمونه طراحی پنل SMM | UI و سئو — بیزدوار گروپ',
        seoDescription: 'نمونه طراحی وب و پنل خدمات شبکه‌های اجتماعی: UI، صفحات تبدیل، سئو و پشتیبانی — خدمات طراحی وب بیزدوار گروپ.',
        seoKeywords: 'طراحی پنل SMM, نمونه طراحی سایت, دیجیتال مارکتینگ, بیزدوار'
      },
      fxguardExchange: {
        seoTitle: 'نمونه‌کار FXGuard Exchange | تبادل تومان و لیر — بیزدوار',
        seoDescription: 'نمونه‌کار طراحی پلتفرم FXGuard Exchange — تبادل تخصصی تومان و لیر (IRR ↔ TRY) با نرخ زنده، KYC، سفارش شناسه‌دار و پیگیری مرحله‌ای. توسعه بیزدوار گروپ.',
        seoKeywords: 'FXGuard Exchange, تبادل تومان لیر, فین‌تک, نرخ ارز, بیزدوار'
      },
      biztejarat: {
        seoTitle: 'نمونه مدیریت SMM صنعتی | محتوای B2B — بیزدوار',
        seoDescription: 'نمونه گذشته مدیریت اینستاگرام برای محصولات صنعتی B2B — پروژه SMM که اکنون غیرفعال است. اجراشده توسط بیزدوار گروپ.',
        seoKeywords: 'نمونه کار SMM, محتوای B2B صنعتی, مدیریت اینستاگرام, بیزدوار'
      },
      biztab: {
        seoTitle: 'BizTab | دماسنج دیواری غیرتماسی — محصول بیزدوار',
        seoDescription: 'BizTab — اولین دماسنج دیواری غیرتماسی تبریز. طراحی تیم بیزدوار، دقت کمتر از ۰.۳ درجه، تأیید دانشگاه تبریز.',
        seoKeywords: 'BizTab, دماسنج غیرتماسی, IoT, بیزدوار, تبریز, محصول اختصاصی'
      },
      bizsanitizerV5: {
        seoTitle: 'BizClean V5 | دستگاه ضدعفونی دست بیزدوار — محصول مهندسی‌شده',
        seoDescription: 'BizClean V5 — دستگاه ضدعفونی دست اتوماتیک بیزدوار با سنسور التراسونیک. ساخته‌شده در دوران کرونا، نمایشگاه مرکز رشد دانشگاه تبریز. موجود در دیجی‌کالا.',
        seoKeywords: 'BizClean V5, BizClean, ضدعفونی دست, بیزدوار, کرونا, دیجی‌کالا, محصول اختصاصی'
      },
      bizseat: {
        seoTitle: 'BizSeat | پشتی صندلی خودرو بیزدوار — محصول ۱۳۹۹ تبریز',
        seoDescription: 'BizSeat — پشتی صندلی خودرو اختراع، طراحی و ساخت ۱۳۹۹ در پارک علم و فناوری دانشگاه تبریز. همکاری تکنولوژی پردازان توسعه خاورمیانه و ایمن سهند پدیده. موجود در دیجی‌کالا.',
        seoKeywords: 'BizSeat, پشتی صندلی خودرو, بیزدوار, پارک علم و فناوری تبریز, دیجی‌کالا, محصول اختصاصی'
      },
      fxguard: {
        seoTitle: 'FXGuard WhatsApp CRM | از $49/ماه · دمو رایگان — بیزدوار',
        seoDescription: 'FXGuard WhatsApp CRM — اینباکس تیمی، مشتریان، تیکت، شعب و ۲FA. Cloud از $49/ماه، لایسنس یا Managed. دمو رایگان app.fxguard.io. محصول اکوسیستم بیزدوار.',
        seoKeywords: 'FXGuard, WhatsApp CRM, CRM واتساپ, اینباکس تیمی, بیزدوار, fxguard.io'
      },
      fxguardAccounting: {
        seoTitle: 'FXGuard Accounting | سامانه حسابداری — بیزدوار',
        seoDescription: 'FXGuard Accounting — سامانه حسابداری برای تیم‌های مالی، صرافی و SME. بخشی از سوئیت FXGuard، توسعه بیزدوار گروپ.',
        seoKeywords: 'FXGuard Accounting, حسابداری, نرم‌افزار حسابداری, بیزدوار, fxguard.io'
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
        seoTitle: 'طراحی سایت در ۵ روز | قیمت ۹۹ تا ۲۹۹ دلار',
        seoDescription: 'پلن‌های Fast Web Studio: پایه $99، فروشگاهی $199، حرفه‌ای $299. تحویل ۵روزه، RTL و سئو پایه — سفارش از بیزدوار.',
        seoKeywords: 'طراحی سایت ۵ روز, قیمت طراحی سایت, Fast Web Studio, WooCommerce, بیزدوار'
      },
      articleIndustrialSensors: {
        seoTitle: 'کدام سنسور VEGA بخرم؟ | راهنمای انتخاب',
        seoDescription: 'مقایسه VEGAPULS، VEGABAR و VEGAPOINT برای مخزن، فشار و نقطه سطح. مشاوره فنی و تامین از استانبول تا ایران.',
        seoKeywords: 'انتخاب سنسور VEGA, VEGAPULS, ابزار دقیق, تامین صنعتی, بیزدوار'
      },
      articleAboutBizdavar: {
        seoTitle: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم، ۱۱ کشور | راهنمای کامل',
        seoDescription: 'شناسنامه بیزدوار گروپ: بنیان‌گذار ارسان جاهد تبریزی، ۱۰۰+ پروژه، فین‌تک، طراحی وب و تامین VEGA/Prosense در ۱۱ کشور.',
        seoKeywords: 'بیزدوار گروپ, Bizdavar Group, تاریخچه, ارسان جاهد تبریزی'
      },
      articleVegaSupplyIran: {
        seoTitle: 'خرید VEGA برای پروژه ایران از استانبول | راهنما',
        seoDescription: 'مسیر استعلام تا تحویل سنسور VEGA اصل برای ایران: کد سفارش، پیش‌فاکتور ارزی و لجستیک از دفتر بیزدوار در استانبول.',
        seoKeywords: 'خرید VEGA ایران, تامین VEGA استانبول, VEGAPULS, بیزدوار'
      },
      articleMultilingualWeb: {
        seoTitle: 'وبسایت چندزبانه برای ایران و ترکیه | بیزدوار',
        seoDescription: 'سایت فارسی–ترکی–انگلیسی با hreflang، اعتماد محلی و تحویل سریع — راهنمای بیزدوار برای کسب‌وکارهای دو بازاری.',
        seoKeywords: 'طراحی سایت چندزبانه, طراحی سایت استانبول, hreflang, بیزدوار'
      }
    },
    tr: {
      home: {
        seoTitle: 'İstanbul’dan web tasarım ve VEGA tedariki | Ücretsiz danışmanlık',
        seoDescription: '5 günde web sitesi, dijital pazarlama ve orijinal VEGA / Prosense tedariki. Fiyat teklifi ve ücretsiz danışmanlık — WhatsApp’tan yazın.',
        seoKeywords: 'İstanbul web tasarım, VEGA tedarik, Prosense, dijital pazarlama, Fast Web Studio, Bizdavar'
      },
      about: {
        seoTitle: 'Hakkımızda | Bizdavar — dijital hizmetler ve endüstriyel tedarik',
        seoDescription: 'Bizdavar Group 2013’ten beri İstanbul’da: web tasarım, dijital pazarlama, FXGuard ürünleri ve VEGA, Prosense, Liqui Moly tedariki — 11 ülkede hizmet.',
        seoKeywords: 'Bizdavar hakkımızda, dijital ajans İstanbul, endüstriyel tedarik'
      },
      services: {
        seoTitle: 'İstanbul web tasarım ve dijital pazarlama | Bizdavar',
        seoDescription: 'İstanbul ve Tebriz: 5 günde site, SEO, SMM, uygulama, sunucu ve teknik hizmet. Ücretsiz danışmanlık — WhatsApp ile teklif alın.',
        seoKeywords: 'İstanbul web tasarım, dijital pazarlama, SEO, SMM, Bizdavar'
      },
      fieldTech: {
        seoTitle: 'Teknik hizmetler | CCTV, tesisat ve gizli aydınlatma — Tebriz & İstanbul',
        seoDescription: 'Tebriz ve İstanbul’da CCTV, bina tesisatı ve gizli aydınlatma — keşif, plan, kurulum ve garanti. Bizdavar teknik WhatsApp: +98 936 411 5151.',
        seoKeywords: 'CCTV Tebriz, CCTV İstanbul, bina tesisatı, gizli aydınlatma, Bizdavar teknik'
      },
      products: {
        seoTitle: 'VEGA, Prosense ve FXGuard satın al | Bizdavar ürünleri',
        seoDescription: 'VEGA sensör, Prosense dedektör, Liqui Moly, Teltonika ve FXGuard WhatsApp CRM. Şeffaf fiyat ve WhatsApp teklifi.',
        seoKeywords: 'VEGA satın al, Prosense, FXGuard, Fast Web Studio, Liqui Moly, Bizdavar'
      },
      portfolio: {
        seoTitle: 'Portfolyo | Web tasarım, dijital ürünler ve endüstriyel tedarik — Bizdavar',
        seoDescription: 'Bizdavar Group portfolyosu: web tasarım, dijital pazarlama, SMM, FXGuard ve Fast Web Studio ürünleri, VEGA, Prosense ve Liqui Moly tedariki.',
        seoKeywords: 'Bizdavar portfolyo, web tasarım, dijital pazarlama, FXGuard, Fast Web Studio, VEGA, endüstriyel tedarik'
      },
      blog: {
        seoTitle: 'Blog | Dijital pazarlama, web tasarım ve endüstriyel tedarik rehberleri',
        seoDescription: 'Bizdavar uzman yazıları: dijital pazarlama, Fast Web Studio, VEGA sensörleri, endüstriyel tedarik ve iş büyütme — Türkiye ve İran odaklı.',
        seoKeywords: 'Bizdavar blog, dijital pazarlama, web tasarım, VEGA, endüstriyel tedarik'
      },
      fast: {
        seoTitle: '5 günde web sitesi $99’dan | Fast Web Studio',
        seoDescription: 'Kurumsal, mağaza ve landing sayfası 5 iş gününde. $99 / $199 / $299 — RTL, WhatsApp ve temel SEO. Bizdavar’dan sipariş.',
        seoKeywords: '5 günde web sitesi, ucuz web tasarım, Fast Web Studio, WooCommerce, Bizdavar'
      },
      privacy: {
        seoTitle: 'Gizlilik Politikası | Bizdavar Group',
        seoDescription: 'Bizdavar Group web sitesi gizlilik politikası — iletişim formu, dil tercihi ve bölge algılama hakkında bilgi.',
        seoKeywords: 'gizlilik politikası, privacy, Bizdavar'
      },
      contact: {
        seoTitle: 'Ücretsiz danışmanlık ve fiyat teklifi | Bizdavar WhatsApp',
        seoDescription: 'VEGA, Prosense veya web tasarım teklifi — form veya Türkçe/Farsça WhatsApp. İstanbul ve Tebriz’den mesai saatlerinde yanıt.',
        seoKeywords: 'ücretsiz danışmanlık, VEGA teklif, Bizdavar WhatsApp, iletişim'
      },
      vega: {
        seoTitle: 'VEGA sensör satın al | Fiyat ve proforma — İstanbul',
        seoDescription: 'Orijinal VEGAPULS 6X, VEGABAR 39 ve VEGAPOINT. Türkçe teknik danışmanlık, net order code ve uluslararası lojistik — Bizdavar.',
        seoKeywords: 'VEGA satın al, VEGAPULS 6X fiyat, VEGABAR 39, VEGAPOINT, seviye sensörü, Bizdavar'
      },
      prosense: {
        seoTitle: 'Prosense gaz dedektörü satın al | PQ ve SafeVader',
        seoDescription: 'Orijinal Prosense gaz ve alev dedektörü, SIL sertifikalı. PQ, SafeVader, PPS+ için WhatsApp teklifi — Bizdavar.',
        seoKeywords: 'Prosense satın al, gaz dedektörü, PQ Serisi, SafeVader, PPS+, Bizdavar'
      },
      liquiMoly: {
        seoTitle: 'Liqui Moly tedariki | Motor yağı ve katkı ürünleri | Bizdavar',
        seoDescription: 'Bizdavar Group orijinal Liqui Moly tedarik eder: motor yağı, Octane Plus, dizel katkı, antifriz ve oto bakım. Şeffaf dolar fiyat ve Farsça danışmanlık.',
        seoKeywords: 'Liqui Moly, Octane Plus, motor yağı, Bizdavar'
      },
      teltonika: {
        seoTitle: 'Teltonika GPS tedariki | FMB920 29$’dan — Bizdavar',
        seoDescription: 'Orijinal Teltonika GPS ve Fleet Telematics tedariki. FMB920 başlangıç fiyatı 29$, FMC650, DualCam, EYE Mesh — teknik danışmanlık ve lojistik — Bizdavar Group.',
        seoKeywords: 'Teltonika, GPS tracker, FMB920 fiyat, fleet telematics, Bizdavar'
      },
      gamak: {
        seoTitle: 'Gamak elektrik motoru tedariki | IE2/IE3 — Bizdavar Group',
        seoDescription: 'Türkiye Gamak endüstriyel elektrik motoru tedariki. GM/GMB, IE2/IE3, B3/B5 flanş — Türkçe teknik danışmanlık, proforma ve lojistik — Bizdavar Group.',
        seoKeywords: 'Gamak, elektrik motoru, IE2 IE3, endüstriyel motor, Bizdavar'
      },
      digiSystem: {
        seoTitle: 'Digi System tedariki | Terazi ve POS | Bizdavar',
        seoDescription: 'Digi System terazi ve POS tedariki — SM-6000, W-5600SRX, LX-5600 ve AW-5600. Model seçimi, şeffaf proforma ve lojistik — Bizdavar Group.',
        seoKeywords: 'Digi System, DIGI, SM-6000, POS, terazi, Bizdavar'
      },
      teraoka: {
        seoTitle: 'Teraoka Seiko tedariki | Terazi ve POS — Bizdavar Group',
        seoDescription: 'Teraoka Seiko terazi, etiketleme ve POS tedariki — Türkçe danışmanlık, proforma ve uluslararası lojistik — Bizdavar Group.',
        seoKeywords: 'Teraoka, terazi, POS, etiketleme, Bizdavar'
      },
      bzDiamond: {
        seoTitle: 'WooCommerce mağaza tasarım örneği | Web ve SEO — Bizdavar',
        seoDescription: 'Online mağaza tasarım örneği: WooCommerce, kurumsal e-posta, SEO ve teknik destek — Bizdavar Group web tasarım hizmetleri.',
        seoKeywords: 'WooCommerce mağaza, web tasarım örneği, SEO, Bizdavar'
      },
      supplifyTrade: {
        seoTitle: 'B2B uluslararası ticaret web tasarım örneği | SEO — Bizdavar',
        seoDescription: 'Kurumsal B2B web tasarım örneği: sourcing ve uluslararası ticaret sitesi, içerik yapısı, SEO ve teknik destek — Bizdavar Group.',
        seoKeywords: 'B2B web tasarım, uluslararası ticaret, web tasarım örneği, SEO, Bizdavar'
      },
      kayaOne: {
        seoTitle: 'Endüstriyel ticaret web tasarım örneği | Kurumsal site — Bizdavar',
        seoDescription: 'Kurumsal web tasarım örneği: ticaret ve endüstriyel çözümler sitesi, içerik yapısı, SEO ve teknik destek — Bizdavar Group.',
        seoKeywords: 'kurumsal web tasarım, endüstriyel ticaret, web tasarım örneği, Bizdavar'
      },
      smmTurk: {
        seoTitle: 'SMM panel web tasarım örneği | UI ve SEO — Bizdavar',
        seoDescription: 'SMM panel ve web tasarım örneği: kullanıcı arayüzü, dönüşüm sayfaları, SEO ve teknik destek — Bizdavar Group.',
        seoKeywords: 'SMM paneli tasarım, web tasarım örneği, dijital pazarlama, Bizdavar'
      },
      fxguardExchange: {
        seoTitle: 'FXGuard Exchange vaka çalışması | Toman–Lira değişim platformu — Bizdavar',
        seoDescription: 'FXGuard Exchange tasarım örneği — IRR ↔ TRY döviz değişimi, canlı kur, KYC ve sipariş takibi. Bizdavar Group tarafından geliştirildi.',
        seoKeywords: 'FXGuard Exchange, Toman Lira, fintech, döviz kuru, Bizdavar'
      },
      biztejarat: {
        seoTitle: 'Endüstriyel SMM örneği | B2B içerik yönetimi — Bizdavar',
        seoDescription: 'Geçmiş Instagram SMM örneği: endüstriyel ürün içeriği B2B — proje artık aktif değil. Bizdavar Group tarafından yürütüldü.',
        seoKeywords: 'endüstriyel SMM, B2B içerik, Instagram yönetimi, Bizdavar'
      },
      biztab: {
        seoTitle: 'BizTab | Temasız duvar termometresi — Bizdavar ürünü',
        seoDescription: 'BizTab — Tebriz\'de tasarlanan ilk temasız duvar termometresi. Bizdavar ekibi, 0,3°C altı hata payı, Tebriz Üniversitesi onayı.',
        seoKeywords: 'BizTab, temasız termometre, IoT, Bizdavar, Tebriz'
      },
      bizsanitizerV5: {
        seoTitle: 'BizClean V5 | Otomatik el dezenfektanı — Bizdavar',
        seoDescription: 'BizClean V5 — ultrasonik sensörlü otomatik el dezenfektanı. Bizdavar ekibi tasarımı, COVID dönemi üretimi, Digikala\'da satışta.',
        seoKeywords: 'BizClean V5, BizClean, el dezenfektan, Bizdavar, Digikala'
      },
      bizseat: {
        seoTitle: 'BizSeat | Araç koltuğu bel desteği — Bizdavar ürünü',
        seoDescription: 'BizSeat — 1399’da Tebriz Üniversitesi teknoloji parkında icat, tasarım ve üretim. Teknoloji Pardazan Tosee Khavarmianeh ve Imen Sahand Padideh iş birliği. Digikala’da satışta.',
        seoKeywords: 'BizSeat, araç koltuğu bel desteği, Bizdavar, Tebriz, Digikala'
      },
      fxguard: {
        seoTitle: 'FXGuard WhatsApp CRM | $49/ay’dan · ücretsiz demo — Bizdavar',
        seoDescription: 'FXGuard WhatsApp CRM — ortak inbox, müşteriler, ticket, şubeler ve 2FA. Cloud $49/ay’dan, lisans veya Managed. Ücretsiz demo app.fxguard.io.',
        seoKeywords: 'FXGuard, WhatsApp CRM, ortak inbox, Bizdavar, fxguard.io'
      },
      fxguardAccounting: {
        seoTitle: 'FXGuard Accounting | Muhasebe sistemi — Bizdavar',
        seoDescription: 'FXGuard Accounting — finans, döviz ve KOBİ ekipleri için muhasebe. FXGuard suite parçası, Bizdavar Group.',
        seoKeywords: 'FXGuard Accounting, muhasebe yazılımı, Bizdavar, fxguard.io'
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
      },
      articleVegaSupplyIran: {
        seoTitle: 'İran’da VEGA sensör tedariki — İstanbul | Bizdavar',
        seoDescription: 'Orijinal VEGA sensörleri İran projeleri için nasıl tedarik edilir? Farsça danışmanlık, proforma ve lojistik — Bizdavar İstanbul.',
        seoKeywords: 'VEGA İran, VEGA tedarik, VEGAPULS, Bizdavar İstanbul'
      },
      articleMultilingualWeb: {
        seoTitle: 'İran ve Türkiye için çok dilli web sitesi | Bizdavar',
        seoDescription: 'fa/tr/en site, hreflang ve yerel güven sinyalleri — çift pazar işletmeler için Bizdavar rehberi.',
        seoKeywords: 'çok dilli web, İstanbul web tasarım, hreflang, Bizdavar'
      }
    },
    en: {
      home: {
        seoTitle: 'Web design & VEGA supply from Istanbul | Free consult',
        seoDescription: '5-day websites, digital marketing, and genuine VEGA / Prosense supply from Istanbul. WhatsApp quote and free consultation — Bizdavar Group.',
        seoKeywords: 'Istanbul web design, buy VEGA, Prosense, digital marketing, Fast Web Studio, Bizdavar'
      },
      about: {
        seoTitle: 'About Bizdavar | Digital services & industrial supply since 2013',
        seoDescription: 'Bizdavar Group since 2013 in Istanbul — web design, digital marketing, FXGuard products, and VEGA, Prosense & Liqui Moly supply across 11 countries.',
        seoKeywords: 'about Bizdavar, digital agency Istanbul, industrial supply'
      },
      services: {
        seoTitle: 'Istanbul web design & digital marketing | Bizdavar',
        seoDescription: 'Istanbul and Tabriz: 5-day websites, SEO, SMM, apps, servers and field installs. Free consult — get a WhatsApp quote today.',
        seoKeywords: 'Istanbul web design, digital marketing, SEO, SMM, Bizdavar'
      },
      fieldTech: {
        seoTitle: 'Technical services | CCTV, wiring & cove lighting — Tabriz & Istanbul',
        seoDescription: 'CCTV, building wiring and cove lighting in Tabriz and Istanbul — survey, plan, install and warranty by Bizdavar. Technical WhatsApp: +98 936 411 5151.',
        seoKeywords: 'CCTV Tabriz, CCTV Istanbul, building wiring, cove lighting, Bizdavar technical'
      },
      products: {
        seoTitle: 'Buy VEGA, Prosense & FXGuard | Bizdavar products',
        seoDescription: 'VEGA sensors, Prosense detectors, Liqui Moly, Teltonika GPS and FXGuard WhatsApp CRM. Clear pricing and WhatsApp quotes.',
        seoKeywords: 'buy VEGA, Prosense, FXGuard, Fast Web Studio, Liqui Moly, Bizdavar'
      },
      portfolio: {
        seoTitle: 'Portfolio | Web design, digital products & industrial supply — Bizdavar',
        seoDescription: 'Bizdavar Group portfolio: web design, digital marketing, SMM, FXGuard and Fast Web Studio products, plus VEGA, Prosense and Liqui Moly supply.',
        seoKeywords: 'Bizdavar portfolio, web design, digital marketing, FXGuard, Fast Web Studio, VEGA, industrial supply'
      },
      blog: {
        seoTitle: 'Blog | Digital marketing, web design & industrial supply guides',
        seoDescription: 'Bizdavar expert articles: digital marketing, Fast Web Studio, VEGA sensors, industrial supply and growth playbooks for Iran and Turkey markets.',
        seoKeywords: 'Bizdavar blog, digital marketing, web design, VEGA, industrial supply'
      },
      fast: {
        seoTitle: 'Website in 5 days from $99 | Fast Web Studio',
        seoDescription: 'Corporate, store and landing pages in 5 business days. $99 / $199 / $299 — RTL, WhatsApp and basic SEO. Order from Bizdavar.',
        seoKeywords: 'website in 5 days, cheap web design, Fast Web Studio, WooCommerce, Bizdavar'
      },
      privacy: {
        seoTitle: 'Privacy Policy | Bizdavar Group',
        seoDescription: 'Bizdavar Group website privacy policy — contact form data, language preference and region detection.',
        seoKeywords: 'privacy policy, Bizdavar, GDPR'
      },
      contact: {
        seoTitle: 'Free quote & consultation | Bizdavar WhatsApp',
        seoDescription: 'Ask for VEGA, Prosense or a website quote — form or Persian/Turkish WhatsApp. Replies from Istanbul and Tabriz during business hours.',
        seoKeywords: 'free consultation, VEGA quote, Bizdavar WhatsApp, contact'
      },
      vega: {
        seoTitle: 'Buy VEGA sensors | VEGAPULS quote from Istanbul',
        seoDescription: 'Genuine VEGAPULS 6X, VEGABAR 39 and VEGAPOINT. Exact order codes, clear proforma and logistics to Iran and beyond — Bizdavar.',
        seoKeywords: 'buy VEGA, VEGAPULS 6X price, VEGABAR 39, VEGAPOINT, level sensor, Bizdavar'
      },
      prosense: {
        seoTitle: 'Buy Prosense gas detectors | PQ and SafeVader',
        seoDescription: 'Genuine Prosense gas and flame detectors with SIL certificates. WhatsApp quote for PQ, SafeVader and PPS+ — Bizdavar.',
        seoKeywords: 'buy Prosense, gas detector, PQ Series, SafeVader, PPS+, Bizdavar'
      },
      liquiMoly: {
        seoTitle: 'Liqui Moly supply | Motor oil & fuel additives | Bizdavar',
        seoDescription: 'Bizdavar Group supplies genuine Liqui Moly: engine oil, Octane Plus, diesel additives, antifreeze and car care. Transparent USD pricing and multilingual consulting.',
        seoKeywords: 'Liqui Moly, Octane Plus, engine oil, Bizdavar'
      },
      teltonika: {
        seoTitle: 'Teltonika GPS tracker supply | FMB920 from $29 — Bizdavar',
        seoDescription: 'Genuine Teltonika GPS and Fleet Telematics. FMB920 base price from $29, FMC650, DualCam, EYE Mesh — consulting and logistics — Bizdavar Group.',
        seoKeywords: 'Teltonika, GPS tracker, FMB920 price, fleet telematics, Bizdavar'
      },
      gamak: {
        seoTitle: 'Gamak electric motor supply | IE2/IE3 — Bizdavar Group',
        seoDescription: 'Genuine Gamak industrial electric motors from Turkey. GM/GMB, IE2/IE3, B3/B5 flange — English, Persian and Turkish technical consulting, proforma and logistics — Bizdavar Group.',
        seoKeywords: 'Gamak, electric motor, IE2 IE3, industrial motor, Bizdavar'
      },
      digiSystem: {
        seoTitle: 'Digi System supply | Retail scales & POS | Bizdavar',
        seoDescription: 'Digi System retail scales and POS — SM-6000, W-5600SRX, LX-5600 and AW-5600. Model selection, transparent proforma and logistics — Bizdavar Group.',
        seoKeywords: 'Digi System, DIGI, SM-6000, POS, retail scales, Bizdavar'
      },
      teraoka: {
        seoTitle: 'Teraoka Seiko supply | Scales & POS — Bizdavar Group',
        seoDescription: 'Teraoka Seiko scales, labeling and POS supply — multilingual consulting, proforma and international logistics — Bizdavar Group.',
        seoKeywords: 'Teraoka, scales, POS, labeling, Bizdavar'
      },
      bzDiamond: {
        seoTitle: 'WooCommerce store design case study | Web & SEO — Bizdavar',
        seoDescription: 'Online store design case study: WooCommerce, corporate email, SEO and technical support — Bizdavar Group web design services.',
        seoKeywords: 'WooCommerce store, web design case study, SEO, Bizdavar'
      },
      supplifyTrade: {
        seoTitle: 'B2B international trade web design case study | SEO — Bizdavar',
        seoDescription: 'Corporate B2B web design case study: sourcing and international trade site, content structure, SEO and technical support — Bizdavar Group.',
        seoKeywords: 'B2B web design, international trade, web design case study, SEO, Bizdavar'
      },
      kayaOne: {
        seoTitle: 'Industrial trade web design case study | Corporate site — Bizdavar',
        seoDescription: 'Corporate web design case study: trading and industrial solutions site, content structure, SEO and technical support — Bizdavar Group.',
        seoKeywords: 'corporate web design, industrial trade, web design case study, Bizdavar'
      },
      smmTurk: {
        seoTitle: 'SMM panel web design case study | UI & SEO — Bizdavar',
        seoDescription: 'SMM panel and web design case study: UI, conversion pages, SEO and technical support — Bizdavar Group.',
        seoKeywords: 'SMM panel design, web design case study, digital marketing, Bizdavar'
      },
      fxguardExchange: {
        seoTitle: 'FXGuard Exchange case study | Toman–Lira exchange platform — Bizdavar',
        seoDescription: 'FXGuard Exchange design case study — specialized IRR ↔ TRY remittance with live rates, KYC, tracked orders. Built by Bizdavar Group.',
        seoKeywords: 'FXGuard Exchange, Toman Lira, fintech, exchange rates, Bizdavar'
      },
      biztejarat: {
        seoTitle: 'Industrial SMM case study | B2B content management — Bizdavar',
        seoDescription: 'Past Instagram SMM case study: industrial B2B product content — project is no longer active. Delivered by Bizdavar Group.',
        seoKeywords: 'industrial SMM, B2B content, Instagram management, Bizdavar'
      },
      biztab: {
        seoTitle: 'BizTab | Non-contact wall thermometer — Bizdavar product',
        seoDescription: 'BizTab — first non-contact wall thermometer designed in Tabriz by the Bizdavar team. Error under 0.3°C, approved by University of Tabriz.',
        seoKeywords: 'BizTab, non-contact thermometer, IoT, Bizdavar, Tabriz'
      },
      bizsanitizerV5: {
        seoTitle: 'BizClean V5 | Automatic hand sanitizer — Bizdavar',
        seoDescription: 'BizClean V5 automatic hand sanitizer — ultrasonic sensor, contact-free spray. Engineered by the Bizdavar team during COVID-19, available on Digikala.',
        seoKeywords: 'BizClean V5, BizClean, hand sanitizer, Bizdavar, Digikala'
      },
      bizseat: {
        seoTitle: 'BizSeat | Car seat backrest — Bizdavar product',
        seoDescription: 'BizSeat — car seat backrest invented, designed and built in 1399 at the University of Tabriz Science and Technology Park, with Technology Pardazan Tosee Khavarmianeh and Imen Sahand Padideh. Sold on Digikala.',
        seoKeywords: 'BizSeat, car seat backrest, Bizdavar, Tabriz, Digikala'
      },
      fxguard: {
        seoTitle: 'FXGuard WhatsApp CRM | From $49/mo · Free demo — Bizdavar',
        seoDescription: 'FXGuard WhatsApp CRM — shared inbox, customers, tickets, branches and 2FA. Cloud from $49/mo, License or Managed. Free demo at app.fxguard.io.',
        seoKeywords: 'FXGuard, WhatsApp CRM, shared inbox, Bizdavar, fxguard.io'
      },
      fxguardAccounting: {
        seoTitle: 'FXGuard Accounting | Finance accounting — Bizdavar',
        seoDescription: 'FXGuard Accounting — accounting for finance, exchange and SME teams. Part of the FXGuard suite by Bizdavar Group.',
        seoKeywords: 'FXGuard Accounting, accounting software, Bizdavar, fxguard.io'
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
      },
      articleVegaSupplyIran: {
        seoTitle: 'VEGA sensor supply to Iran from Istanbul | Bizdavar',
        seoDescription: 'How to source original VEGA sensors for Iran projects — Persian consulting, proforma and logistics from Bizdavar’s Istanbul office.',
        seoKeywords: 'buy VEGA Iran, VEGA supply, VEGAPULS, Bizdavar Istanbul'
      },
      articleMultilingualWeb: {
        seoTitle: 'Multilingual websites for Iran and Turkey | Bizdavar',
        seoDescription: 'fa/tr/en sites with hreflang and local trust — Bizdavar guide for dual-market businesses.',
        seoKeywords: 'multilingual website, Istanbul web design, hreflang, Bizdavar'
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
      body: 'برای نمایش زبان مناسب (فارسی، ترکی، انگلیسی، روسی، عربی)، ممکن است آدرس IP شما به‌صورت ناشناس به <strong>ipapi.co</strong> یا <strong>ipwho.is</strong> ارسال شود تا کشور تقریبی تشخیص داده شود. ترجیح زبان در حافظه مرورگر (<code>localStorage</code> — کلید <code>bizdavar_locale</code>) ذخیره می‌شود. می‌توانید هر زمان از منوی زبان یا با پارامتر <code>?lang=fa</code>، <code>?lang=tr</code>، <code>?lang=en</code>، <code>?lang=ru</code> یا <code>?lang=ar</code> زبان را خودتان انتخاب کنید.'
    },
    tr: {
      title: '5. Dil ve bölge algılama',
      body: 'Uygun dili göstermek için (Türkçe, Farsça, İngilizce, Rusça, Arapça) IP adresiniz yaklaşık ülke tespiti amacıyla <strong>ipapi.co</strong> veya <strong>ipwho.is</strong> servislerine anonim olarak gönderilebilir. Dil tercihi tarayıcı <code>localStorage</code> içinde (<code>bizdavar_locale</code>) saklanır. Dil menüsünden veya <code>?lang=fa</code>, <code>?lang=tr</code>, <code>?lang=en</code>, <code>?lang=ru</code>, <code>?lang=ar</code> parametreleriyle istediğiniz zaman değiştirebilirsiniz.'
    },
    en: {
      title: '5. Language and region detection',
      body: 'To show the right language (Persian, Turkish, English, Russian, Arabic), your IP may be sent anonymously to <strong>ipapi.co</strong> or <strong>ipwho.is</strong> for approximate country detection. Language preference is stored in browser <code>localStorage</code> (<code>bizdavar_locale</code>). You can change it anytime from the language menu or with <code>?lang=fa</code>, <code>?lang=tr</code>, <code>?lang=en</code>, <code>?lang=ru</code>, or <code>?lang=ar</code>.'
    },
    ru: {
      title: '5. Язык и определение региона',
      body: 'Чтобы показать подходящий язык (персидский, турецкий, английский, русский, арабский), ваш IP может анонимно отправляться в <strong>ipapi.co</strong> или <strong>ipwho.is</strong> для приблизительного определения страны. Предпочтение языка хранится в <code>localStorage</code> (<code>bizdavar_locale</code>). Вы можете сменить язык в меню или параметрами <code>?lang=fa</code>, <code>?lang=tr</code>, <code>?lang=en</code>, <code>?lang=ru</code>, <code>?lang=ar</code>.'
    },
    ar: {
      title: '٥. اللغة واكتشاف المنطقة',
      body: 'لعرض اللغة المناسبة (الفارسية، التركية، الإنجليزية، الروسية، العربية) قد يُرسل عنوان IP الخاص بك بشكل مجهول إلى <strong>ipapi.co</strong> أو <strong>ipwho.is</strong> لتحديد البلد تقريباً. يُحفظ تفضيل اللغة في <code>localStorage</code> (<code>bizdavar_locale</code>). يمكنك تغييره من قائمة اللغة أو بـ <code>?lang=fa</code> و<code>?lang=tr</code> و<code>?lang=en</code> و<code>?lang=ru</code> و<code>?lang=ar</code>.'
    }
  };

  const contactTitle = {
    fa: '۶. ارتباط با ما',
    tr: '6. Bize ulaşın',
    en: '6. Contact us',
    ru: '6. Связаться с нами',
    ar: '٦. تواصل معنا'
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach(lang => {
    const pp = window.BIZDAVAR_LOCALES[lang]?.privacyPage;
    if (!pp?.sections || pp.sections.length < 5) return;
    const contact = pp.sections.pop();
    if (privacyGeo[lang]) pp.sections.push(privacyGeo[lang]);
    contact.title = contactTitle[lang] || contact.title;
    pp.sections.push(contact);
  });
})();
