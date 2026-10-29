/**
 * Owned products — fa / tr / en copy
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const catalog = {
    fa: {
      productsPage: {
        crumb: 'محصولات بیزدوار',
        hero: {
          tag: 'بازرگانی صنعتی و محصولات بیزدوار',
          title: 'خرید VEGA، Prosense و محصولات بیزدوار',
          desc: 'اولویت با خریدار ایران: سنسور VEGA، دتکتور Prosense، Liqui Moly و Teltonika — کنار سایت، بازاریابی و نرم‌افزارهایی مثل FXGuard.',
          ctaLive: 'محصولات زنده',
          ctaCatalog: 'کاتالوگ کامل',
          ctaSupply: 'کاتالوگ بازرگانی',
          ctaContact: 'استعلام محصول'
        },
        pillars: {
          eyebrow: 'دسته‌های محصول',
          title: 'نرم‌افزار و چرم',
          desc: 'دستهٔ قابل سفارش: نرم‌افزار و چرم. BizTab، BizClean، BizPad و خطوط قدیمی تولید فقط در سابقهٔ شرکت هستند.'
        },
        intro: {
          title: 'ما چه می‌سازیم؟',
          body: 'نرم‌افزار زنده <strong>FXGuard</strong> و BizSwap، و چرم شترمرغ، صفحهٔ فروش دارند. BizTab، BizClean و BizPad دیگر تولید نمی‌شوند و فقط در رزومهٔ شرکت هستند.',
          ctaContact: 'استعلام و سفارش',
          ctaPortfolio: 'نمونه‌کارهای دیجیتال',
          statProducts: '۳',
          statProductsLabel: 'محصول فعلی',
          statCats: '۲',
          statCatsLabel: 'دسته اصلی',
          statOrigin: 'تبریز',
          statOriginLabel: 'مهندسی و IP'
        },
        featured: {
          eyebrow: 'محصولات زنده',
          title: 'صفحات محصول آماده سفارش',
          desc: 'صفحهٔ فروش: واتساپ CRM از ۴۹ دلار، BizSwap و چرم شترمرغ. حسابداری FXGuard در لیست انتظار است. سخت‌افزار تبریز در سابقهٔ شرکت است.'
        },
        filterAll: 'همه',
        empty: 'محصولی برای نمایش نیست.',
        catalog: {
          eyebrow: 'کاتالوگ کامل',
          title: 'همه محصولات مهندسی‌شده بیزدوار',
          desc: 'فقط محصولاتی که هنوز عرضه می‌شوند و صفحهٔ خودشان را دارند.'
        },
        supply: {
          eyebrow: 'تامین برند',
          title: 'برندهای صنعتی که تامین می‌کنیم',
          desc: 'VEGA، UWT، Prosense، Liqui Moly، Teltonika، Gamak، Digi System و Teraoka — کاتالوگ جداگانه با مشاوره فنی و پیش‌فاکتور شفاف.',
          cta: 'کاتالوگ محصولات مالکیتی',
          ctaContact: 'استعلام تامین برند'
        },
        explore: {
          eyebrow: 'دسترسی سریع',
          title: 'مسیر مستقیم به محصولات و برندها',
          desc: 'نرم‌افزار مالکیتی و چرم شترمرغ صفحهٔ فروش دارند. سخت‌افزار قدیمی در رزومهٔ شرکت است.',
          ownedKicker: 'Owned · Software',
          ownedTitle: 'محصولات مالکیتی',
          ownedDesc: 'نرم‌افزار و چرم شترمرغ صفحهٔ فروش دارند. BizTab، BizClean و BizPad در سابقهٔ شرکت هستند.',
          supplyKicker: 'Supply · Industrial Brands',
          supplyTitle: 'برندهای تامین',
          supplyDesc: 'کاتالوگ جداگانه، مشاوره فنی و پیش‌فاکتور شفاف برای پروژه‌های صنعتی.',
          servicesTitle: 'خدمات و نمونه‌کار',
          catalogLink: 'کاتالوگ کامل محصولات',
          linkServices: 'خدمات بیزدوار',
          linkIndustrial: 'مشاهده همه برندهای تامین',
          linkFast: 'Fast Web Studio',
          linkPortfolio: 'نمونه‌کارها',
          linkContact: 'تماس و استعلام',
          links: {
            fxguard: 'اینباکس تیمی · از $49/ماه',
            accounting: 'سامانه حسابداری · FXGuard',
            bizswap: 'پیش‌فروش و سواپ توکن',
            biztab: 'دماسنج IoT غیرتماسی',
            bizclean: 'ضدعفونی دست اتوماتیک',
            bizpad: 'پد حرارتی — خانه و خودرو',
            vega: 'سنسور سطح و فشار',
            uwt: 'سنسور سطح سیلو و مخزن',
            prosense: 'دتکتور گاز و شعله',
            teltonika: 'Fleet Telematics / GPS',
            liqui: 'روغن و افزودنی خودرو',
            gamak: 'الکتروموتور صنعتی',
            enpo: 'سیلندر، شیر و واحد مراقبت هوا',
            digi: 'ترازو و POS',
            teraoka: 'ترازو و برچسب‌زن'
          }
        },
        geoText: 'محصولات مالکیتی و تامین برندهای صنعتی — مشاوره فنی چندزبانه و تبریز.',
        related: [
          { title: 'خرید VEGAPULS', desc: 'سنسور سطح ایران' },
          { title: 'تامین Prosense', desc: 'دتکتور گاز و شعله' },
          { title: 'Teltonika GPS', desc: 'Fleet Telematics از $29' },
          { title: 'تماس و استعلام', desc: 'مشاوره رایگان' }
        ],
        cta: {
          title: 'آماده استعلام محصول هستید؟',
          desc: 'برای سفارش، سفارشی‌سازی یا نمایندگی — با تیم فنی بیزدوار در واتساپ یا فرم تماس پیام بدهید.'
        },
        statusLive: 'صفحه محصول',
        statusCatalog: 'استعلام',
        statusWaitlist: 'لیست انتظار',
        categories: {
          software: { label: 'نرم‌افزار و SaaS', desc: 'WhatsApp CRM از ۴۹ دلار و BizSwap. حسابداری FXGuard در لیست انتظار است.' },
          'iot-health': { label: 'IoT و بهداشت', desc: 'دماسنج غیرتماسی، ضدعفونی دست و پد حرارتی' },
          packaging: { label: 'بسته‌بندی و سیل', desc: 'دستگاه‌های کش‌زن و خطوط بسته‌بندی' },
          medical: { label: 'پزشکی و PPE', desc: 'پد حرارتی BizPad (خانه و خودرو) و خطوط تولید ماسک' }
        },
        items: {
          bizswap: {
            name: 'BizSwap',
            title: 'پیش‌فروش و سواپ توکن',
            desc: 'اتصال کیف پول، سواپ و پیش‌فروش توکن روی زنجیره — برای پروژه‌های BEP-20 و RWA.',
            homeDesc: 'سواپ و پیش‌فروش توکن روی زنجیره',
            tags: ['DeFi', 'Web3', 'Token Swap']
          },
          fxguard: {
            name: 'WhatsApp CRM',
            title: 'اینباکس تیمی واتساپ',
            desc: 'اینباکس، مشتری، تیکت و وظیفه — از ۴۹ دلار در ماه. شعبه و پک نرخ از Cloud Business، ۲۴۹ دلار.',
            homeDesc: 'اینباکس تیمی واتساپ — از ۴۹ دلار',
            tags: ['FXGuard', 'CRM', 'از ۴۹ دلار']
          },
          'fxguard-accounting': {
            name: 'Accounting',
            title: 'FXGuard Accounting',
            desc: 'هنوز نه — در نقشه راه سوئیت FXGuard است و لیست انتظار باز است.',
            tags: ['FXGuard', 'Accounting', 'Finance']
          },
          biztab: {
            name: 'BizTab',
            title: 'دماسنج دیواری غیرتماسی',
            desc: 'دماسنج دیواری غیرتماسی، ساخته‌شده در تبریز. تولید این مدل تمام شده است.',
            homeDesc: 'دیگر تولید نمی‌شود',
            tags: ['IoT', 'غیرتماسی', 'تبریز']
          },
          bizclean: {
            name: 'BizClean',
            title: 'خط بهداشت و ضدعفونی',
            desc: 'دستگاه ضدعفونی دست اتوماتیک، ساخته‌شده در دوران کرونا. تولید این مدل تمام شده است.',
            tags: ['بهداشت', 'اتوماتیک', 'کرونا']
          },
          bizpad: {
            name: 'BizPad',
            title: 'پد حرارتی',
            desc: 'پد حرارتی برای خانه، خودرو و جای خواب حیوان. تولید این مدل تمام شده است.',
            homeDesc: 'دیگر تولید نمی‌شود',
            tags: ['پد حرارتی', 'خودرو', 'تبریز']
          },
          biztouch: {
            name: 'BizTouch',
            title: 'راهکارهای بدون تماس',
            desc: 'دستگاه‌ها و رابط‌های بدون تماس برای ورودی، بهداشت و فضاهای عمومی — طراحی اختصاصی تیم بیزدوار.',
            tags: ['بدون تماس', 'IoT', 'ورودی']
          },
          bizroll: {
            name: 'BizRoll',
            title: 'سیستم‌های رول و بسته‌بندی',
            desc: 'ماشین‌آلات رول و بسته‌بندی مهندسی‌شده برای تولید و بسته‌بندی صنعتی.',
            tags: ['بسته‌بندی', 'رول', 'صنعتی']
          },
          'sealer-home': {
            name: 'دستگاه کش‌زن خانگی',
            title: 'سیل خانگی',
            desc: 'دستگاه کش‌زن (vacuum sealer) طراحی‌شده برای مصرف خانگی و کارگاه‌های کوچک.',
            tags: ['کش‌زن', 'خانگی', 'وکیوم']
          },
          'sealer-pneumatic': {
            name: 'دستگاه کش‌زن پنوماتیک',
            title: 'سیل پنوماتیک',
            desc: 'دستگاه کش‌زن با عملکرد پنوماتیک — مناسب تولید نیمه‌صنعتی و خطوط بسته‌بندی.',
            tags: ['پنوماتیک', 'کش‌زن', 'B2B']
          },
          'sealer-robotic': {
            name: 'دستگاه کش‌زن رباتیک',
            title: 'سیل رباتیک',
            desc: 'خط کش‌زن رباتیک برای تولید انبوه و یکنواخت — اتوماسیون بسته‌بندی.',
            tags: ['رباتیک', 'اتوماسیون', 'تولید']
          },
          'mask-production': {
            name: 'خط تولید ماسک سه‌لایه',
            title: 'ماشین ماسک N95/سه‌لایه',
            desc: 'دستگاه تولید ماسک سه‌لایه — توسعه‌یافته در دوران کرونا برای پاسخ به نیاز PPE.',
            tags: ['PPE', 'ماسک', 'خط تولید']
          },
          'heat-pad-production': {
            name: 'خط تولید پد حرارتی',
            title: 'ماشین پد گرمایی',
            desc: 'دستگاه تولید پد حرارتی. تولید این خط تمام شده و فقط در رزومهٔ شرکت است.',
            tags: ['پد حرارتی', 'پزشکی', 'تولید']
          }
        }
      },
      ownedProducts: {
        eyebrow: 'محصولات ما',
        title: 'مهندسی و تولید اختصاصی',
        desc: 'WhatsApp CRM و BizSwap. سخت‌افزارهای قدیمی در سابقهٔ شرکت هستند.',
        viewAll: 'همه محصولات',
        contact: 'استعلام محصول'
      },
      companyHistory: {
        eyebrow: 'سابقه تولید',
        title: 'خط‌هایی که دیگر نمی‌فروشیم',
        desc: 'این‌ها محصولات قدیمی مجموعه‌اند و فقط سابقه کار را نشان می‌دهند. برای فروش، سفارش یا استعلام نیستند.',
        badge: 'دیگر عرضه نمی‌شود',
        cardNote: 'سابقه تولید است، نه کالای قابل فروش.'
      },
      home: {
        ownedEyebrow: 'ساخت بیزدوار',
        ownedTitle: 'آنچه خودمان می‌سازیم',
        ownedDesc: 'WhatsApp CRM و BizSwap — محصولات زنده. تولید سخت‌افزاری در دستاوردهای شرکت است.',
        ownedCta: 'همه محصولات',
        ownedAchievements: 'دستاوردها و تولید'
      }
    },
    tr: {
      productsPage: {
        crumb: 'Bizdavar ürünleri',
        hero: {
          tag: 'Bizdavar mühendislik ve üretim',
          title: 'Bizdavar ürünleri',
          desc: 'İran alıcısı öncelikli: VEGA, Prosense, Liqui Moly ve Teltonika — yanında web, pazarlama ve FXGuard gibi yazılımlar.',
          ctaLive: 'Canlı ürünler',
          ctaCatalog: 'Tam katalog',
          ctaSupply: 'Tedarik markaları',
          ctaContact: 'Ürün teklifi'
        },
        pillars: {
          eyebrow: 'Ürün kategorileri',
          title: 'Yazılım, donanım ve deri',
          desc: 'Hâlâ satılan üç grup: yazılım, hijyen ve deri. Eski üretim hatları yalnızca şirket geçmişindedir ve satılmaz.'
        },
        intro: {
          title: 'Ne üretiyoruz?',
          body: 'Canlı yazılım <strong>FXGuard</strong> ve BizSwap ile devekuşu derisinin satış sayfası var. BizTab, BizClean ve BizPad artık üretilmiyor; yalnızca şirket geçmişindedir.',
          ctaContact: 'Teklif ve sipariş',
          ctaPortfolio: 'Dijital portfolyo',
          statProducts: '7',
          statProductsLabel: 'satılan ürün',
          statCats: '3',
          statCatsLabel: 'ana kategori',
          statOrigin: 'Tebriz',
          statOriginLabel: 'mühendislik ve IP'
        },
        featured: {
          eyebrow: 'Canlı ürünler',
          title: 'Siparişe hazır ürün sayfaları',
          desc: 'Satış sayfası: WhatsApp CRM ayda 49 dolardan, BizSwap ve devekuşu derisi. FXGuard Accounting bekleme listesinde. Tebriz donanımı şirket geçmişindedir.'
        },
        filterAll: 'Tümü',
        empty: 'Gösterilecek ürün yok.',
        catalog: {
          eyebrow: 'Tam katalog',
          title: 'Tüm Bizdavar mühendislik ürünleri',
          desc: 'Yalnızca hâlâ sattığımız ve kendi sayfası olan ürünler.'
        },
        supply: {
          eyebrow: 'Marka tedariki',
          title: 'Tedarik ettiğimiz endüstriyel markalar',
          desc: 'VEGA, UWT, Prosense, Liqui Moly, Teltonika, Gamak, Digi System ve Teraoka — ayrı katalog, teknik danışmanlık ve şeffaf proforma.',
          cta: 'Sahip olunan ürün kataloğu',
          ctaContact: 'Marka tedarik teklifi'
        },
        explore: {
          eyebrow: 'Hızlı erişim',
          title: 'Ürün ve marka sayfalarına doğrudan gidin',
          desc: 'Sahip olunan yazılım/donanım ve endüstriyel tedarik markaları — tek tıkla özel sayfa.',
          ownedKicker: 'Owned · Software & Hardware',
          ownedTitle: 'Sahip olunan ürünler',
          ownedDesc: 'Yazılım, Tebriz donanımı ve devekuşu derisinin ayrı sayfası var. FXGuard Accounting bekleme listesinde.',
          supplyKicker: 'Supply · Industrial Brands',
          supplyTitle: 'Tedarik markaları',
          supplyDesc: 'Ayrı katalog, teknik danışmanlık ve şeffaf proforma.',
          servicesTitle: 'Hizmetler ve portfolyo',
          catalogLink: 'Tam ürün kataloğu',
          linkServices: 'Bizdavar hizmetleri',
          linkIndustrial: 'Tüm tedarik markalarını gör',
          linkFast: 'Fast Web Studio',
          linkPortfolio: 'Portfolyo',
          linkContact: 'İletişim ve teklif',
          links: {
            fxguard: 'Ortak inbox · $49/ay’dan',
            accounting: 'Muhasebe sistemi · FXGuard',
            bizswap: 'Token ön satış & swap',
            biztab: 'Temassız IoT termometre',
            bizclean: 'Otomatik el dezenfektanı',
            bizpad: 'Isı pedi — ev ve araç',
            vega: 'Seviye ve basınç sensörü',
            uwt: 'Silo ve tank seviye sensörü',
            prosense: 'Gaz ve alev dedektörü',
            teltonika: 'Fleet Telematics / GPS',
            liqui: 'Yağ ve katkı',
            gamak: 'Endüstriyel elektrik motoru',
            enpo: 'Pnömatik, silindir ve valf',
            digi: 'Terazi ve POS',
            teraoka: 'Terazi ve etiketleyici'
          }
        },
        geoText: 'Sahip olunan ürünler ve endüstriyel marka tedariki — dünya genelinde ofislerinden teknik danışmanlık.',
        related: [
          { title: 'VEGAPULS satın al', desc: 'İran seviye sensörü' },
          { title: 'Prosense tedariki', desc: 'Gaz ve alev dedektörü' },
          { title: 'Teltonika GPS', desc: 'Fleet Telematics 29$’dan' },
          { title: 'İletişim', desc: 'Ücretsiz danışmanlık' }
        ],
        cta: {
          title: 'Ürün teklifi almak ister misiniz?',
          desc: 'Sipariş, özelleştirme veya bayilik için Bizdavar teknik ekibine WhatsApp veya iletişim formuyla yazın.'
        },
        statusLive: 'Ürün sayfası',
        statusCatalog: 'Teklif iste',
        statusWaitlist: 'Bekleme listesi',
        categories: {
          software: { label: 'Yazılım ve SaaS', desc: 'FXGuard WhatsApp CRM ve Accounting, ayrıca BizSwap' },
          'iot-health': { label: 'IoT ve hijyen', desc: 'Termometre, dezenfektan ve temasız ekipman' },
          packaging: { label: 'Ambalaj ve vakum', desc: 'Vakum makineleri ve ambalaj hatları' },
          medical: { label: 'Medikal ve PPE', desc: 'BizPad ısı pedi (ev ve araç) ve maske üretim hatları' }
        },
        items: {
          bizswap: { name: 'BizSwap', title: 'Token ön satış & swap', desc: 'Cüzdan bağlantısı, token swap ve on-chain ön satış — BEP-20 ve RWA.', homeDesc: 'Zincir üstü token swap ve ön satış', tags: ['DeFi', 'Web3', 'Token Swap'] },
          fxguard: { name: 'WhatsApp CRM', title: 'Paylaşılan WhatsApp inbox', desc: 'Ortak inbox, müşteri, ticket ve görev — ayda 49 dolardan. Şube ve FX paketi Cloud Business’ta, 249 dolardan.', homeDesc: 'WhatsApp ekip inbox — 49 dolardan', tags: ['FXGuard', 'CRM', 'From $49/mo'] },
          'fxguard-accounting': { name: 'Accounting', title: 'FXGuard Accounting', desc: 'Finans ve döviz ekipleri için muhasebe — henüz bekleme listesinde; herkese açık demo CRM’den ayrıdır.', tags: ['FXGuard', 'Accounting', 'Waitlist'] },
          biztab: { name: 'BizTab', title: 'Temasız duvar termometresi', desc: 'Tebriz’de üretilmiş temassız duvar termometresi. Bu modelin üretimi bitmiştir.', homeDesc: 'Artık üretilmiyor', tags: ['IoT', 'Temasız', 'Tebriz'] },
          bizclean: { name: 'BizClean', title: 'Hijyen ve dezenfeksiyon', desc: 'Pandemi döneminde üretilmiş otomatik el dezenfektanı. Bu modelin üretimi bitmiştir.', tags: ['Hijyen', 'Otomatik', 'COVID'] },
          bizpad: { name: 'BizPad', title: 'BizPad ısı pedi', desc: 'Ev, araç ve pet yatağı için ısı pedi. Bu modelin üretimi bitmiştir.', homeDesc: 'Artık üretilmiyor', tags: ['Isı pedi', 'Otomotiv', 'Tebriz'] },
          biztouch: { name: 'BizTouch', title: 'Temasız çözümler', desc: 'Giriş, hijyen ve kamusal alanlar için temasız cihazlar — Bizdavar tasarımı.', tags: ['Temasız', 'IoT', 'Giriş'] },
          bizroll: { name: 'BizRoll', title: 'Rulo ve ambalaj sistemleri', desc: 'Endüstriyel rulo ve ambalaj makineleri.', tags: ['Ambalaj', 'Rulo', 'Endüstriyel'] },
          'sealer-home': { name: 'Ev tipi vakum makinesi', title: 'Ev vakumu', desc: 'Ev ve küçük atölyeler için vakum/kapama makinesi.', tags: ['Vakum', 'Ev', 'Kapama'] },
          'sealer-pneumatic': { name: 'Pnömatik vakum makinesi', title: 'Pnömatik kapama', desc: 'Pnömatik vakum makinesi — yarı endüstriyel üretim hatları.', tags: ['Pnömatik', 'Vakum', 'B2B'] },
          'sealer-robotic': { name: 'Robotik vakum makinesi', title: 'Robotik kapama', desc: 'Seri üretim için robotik vakum hattı.', tags: ['Robotik', 'Otomasyon', 'Üretim'] },
          'mask-production': { name: '3 katlı maske hattı', title: 'Maske üretim makinesi', desc: '3 katlı maske üretim hattı — COVID döneminde PPE ihtiyacına yanıt.', tags: ['PPE', 'Maske', 'Hat'] },
          'heat-pad-production': { name: 'Isı pedi hattı', title: 'Isı pedi makinesi', desc: 'Medikal ve ısınma amaçlı ısı pedi üretim makinesi.', tags: ['Isı pedi', 'Medikal', 'Üretim'] }
        }
      },
      ownedProducts: {
        eyebrow: 'Ürünlerimiz',
        title: 'Özel mühendislik ve üretim',
        desc: 'WhatsApp CRM, BizSwap ve hâlâ ürün sayfası olan donanım',
        viewAll: 'Tüm ürünler',
        contact: 'Ürün teklifi'
      },
      companyHistory: {
        eyebrow: 'Üretim geçmişi',
        title: 'Artık satmadığımız hatlar',
        desc: 'Bunlar şirketin eski işleridir ve yalnızca geçmişi gösterir. Satış, sipariş veya teklif için değildir.',
        badge: 'Artık satılmıyor',
        cardNote: 'Üretim geçmişidir, satılık ürün değildir.'
      },
      home: {
        ownedEyebrow: 'Bizdavar üretimi',
        ownedTitle: 'Kendimiz ne üretiyoruz',
        ownedDesc: 'WhatsApp CRM ve BizSwap — canlı ürünler. Donanım üretimi şirket başarılarında.',
        ownedCta: 'Tüm ürünleri gör',
        ownedAchievements: 'Başarılar ve üretim'
      }
    },
    en: {
      productsPage: {
        crumb: 'Bizdavar products',
        hero: {
          tag: 'Bizdavar engineering & manufacturing',
          title: 'Bizdavar products',
          desc: 'Iran buyers first: VEGA, Prosense, Liqui Moly and Teltonika — plus websites, marketing and software like FXGuard.',
          ctaLive: 'Live products',
          ctaCatalog: 'Full catalog',
          ctaSupply: 'Supply brands',
          ctaContact: 'Product inquiry'
        },
        pillars: {
          eyebrow: 'Product categories',
          title: 'Software, hardware and leather',
          desc: 'Three groups we still sell: software, hygiene and leather. Older production lines appear only in the company record and are not for sale.'
        },
        intro: {
          title: 'What we build',
          body: 'Live software is <strong>FXGuard</strong> and BizSwap, plus ostrich leather. BizTab, BizClean and BizPad are no longer made and stay in the company history.',
          ctaContact: 'Quote & order',
          ctaPortfolio: 'Digital portfolio',
          statProducts: '7',
          statProductsLabel: 'products still sold',
          statCats: '3',
          statCatsLabel: 'main categories',
          statOrigin: 'Tabriz',
          statOriginLabel: 'engineering & IP'
        },
        featured: {
          eyebrow: 'Live products',
          title: 'Ready product pages',
          desc: 'For sale: WhatsApp CRM from $49/mo, BizSwap and ostrich leather. FXGuard Accounting is on the waitlist. Tabriz hardware is in the company history.'
        },
        filterAll: 'All',
        empty: 'No products to display.',
        catalog: {
          eyebrow: 'Full catalog',
          title: 'All engineered Bizdavar products',
          desc: 'Only lines we still sell, each with its own page.'
        },
        supply: {
          eyebrow: 'Brand supply',
          title: 'Industrial brands we supply',
          desc: 'VEGA, UWT, Prosense, Liqui Moly, Teltonika, Gamak, Digi System and Teraoka — separate catalogs with technical consulting and transparent proformas.',
          cta: 'Owned products catalog',
          ctaContact: 'Brand supply inquiry'
        },
        explore: {
          eyebrow: 'Quick access',
          title: 'Jump straight to products and brands',
          desc: 'Owned software and hardware plus industrial supply brands — one click to each dedicated page.',
          ownedKicker: 'Owned · Software & Hardware',
          ownedTitle: 'Owned products',
          ownedDesc: 'Software, Tabriz hardware and ostrich leather each have a page. FXGuard Accounting is on the waitlist.',
          supplyKicker: 'Supply · Industrial Brands',
          supplyTitle: 'Supply brands',
          supplyDesc: 'Separate catalogs, technical consulting and transparent proformas.',
          servicesTitle: 'Services & portfolio',
          catalogLink: 'Full product catalog',
          linkServices: 'Bizdavar services',
          linkIndustrial: 'View all supply brands',
          linkFast: 'Fast Web Studio',
          linkPortfolio: 'Portfolio',
          linkContact: 'Contact & inquiry',
          links: {
            fxguard: 'Shared inbox · from $49/mo',
            accounting: 'Accounting system · FXGuard',
            bizswap: 'Token presale & swap',
            biztab: 'Non-contact IoT thermometer',
            bizclean: 'Automatic hand sanitizer',
            bizpad: 'Heating pad — home and car',
            vega: 'Level and pressure sensors',
            uwt: 'Silo and tank level sensors',
            prosense: 'Gas and flame detectors',
            teltonika: 'Fleet Telematics / GPS',
            liqui: 'Oils and additives',
            gamak: 'Industrial electric motors',
            enpo: 'Pneumatics, cylinders and valves',
            digi: 'Scales and POS',
            teraoka: 'Scales and labelers'
          }
        },
        geoText: 'Owned products and industrial brand supply — technical multilingual consulting and Tabriz.',
        related: [
          { title: 'Buy VEGAPULS', desc: 'Iran level sensor' },
          { title: 'Prosense supply', desc: 'Gas and flame detectors' },
          { title: 'Teltonika GPS', desc: 'Fleet telematics from $29' },
          { title: 'Contact', desc: 'Free consultation' }
        ],
        cta: {
          title: 'Ready to inquire about a product?',
          desc: 'For orders, customization or distribution — message the Bizdavar technical team on WhatsApp or the contact form.'
        },
        statusLive: 'Product page',
        statusCatalog: 'Request quote',
        statusWaitlist: 'Waitlist',
        categories: {
          software: { label: 'Software & SaaS', desc: 'FXGuard WhatsApp CRM and Accounting, plus BizSwap' },
          'iot-health': { label: 'IoT & hygiene', desc: 'Thermometers, sanitizers and contactless devices' },
          packaging: { label: 'Packaging & sealing', desc: 'Vacuum sealers and packaging lines' },
          medical: { label: 'Medical & PPE', desc: 'BizPad heating pad (home and car) and mask production lines' }
        },
        items: {
          bizswap: { name: 'BizSwap', title: 'Token presale & swap', desc: 'Wallet connect, token swap and on-chain presale — BEP-20 and RWA.', homeDesc: 'On-chain token swap and presale', tags: ['DeFi', 'Web3', 'Token Swap'] },
          fxguard: { name: 'WhatsApp CRM', title: 'Shared WhatsApp inbox', desc: 'Shared inbox, customer, ticket and task — from $49/mo. Branches and the FX pack start on Cloud Business at $249.', homeDesc: 'Team WhatsApp inbox — from $49', tags: ['FXGuard', 'CRM', 'From $49/mo'] },
          'fxguard-accounting': { name: 'Accounting', title: 'FXGuard Accounting', desc: 'Accounting for finance and exchange teams — still on the waitlist. The public demo is separate from the CRM.', tags: ['FXGuard', 'Accounting', 'Waitlist'] },
          biztab: { name: 'BizTab', title: 'Non-contact wall thermometer', desc: 'Wall-mounted non-contact thermometer built in Tabriz. This model is no longer made.', homeDesc: 'No longer made', tags: ['IoT', 'Contactless', 'Tabriz'] },
          bizclean: { name: 'BizClean', title: 'Hygiene & disinfection line', desc: 'Automatic hand sanitizer made during the pandemic. This model is no longer made.', tags: ['Hygiene', 'Automatic', 'COVID'] },
          bizpad: { name: 'BizPad', title: 'Heating pad', desc: 'Heating pad for home, car and pet beds. This model is no longer made.', homeDesc: 'No longer made', tags: ['Heating pad', 'Automotive', 'Tabriz'] },
          biztouch: { name: 'BizTouch', title: 'Contactless solutions', desc: 'Contactless devices for entrances, hygiene and public spaces — Bizdavar engineered.', tags: ['Contactless', 'IoT', 'Entrance'] },
          bizroll: { name: 'BizRoll', title: 'Roll & packaging systems', desc: 'Engineered roll and packaging machinery for industrial production.', tags: ['Packaging', 'Roll', 'Industrial'] },
          'sealer-home': { name: 'Home vacuum sealer', title: 'Domestic sealing', desc: 'Vacuum sealer designed for home use and small workshops.', tags: ['Vacuum', 'Home', 'Sealing'] },
          'sealer-pneumatic': { name: 'Pneumatic vacuum sealer', title: 'Pneumatic sealing', desc: 'Pneumatic vacuum sealer for semi-industrial and packaging lines.', tags: ['Pneumatic', 'Vacuum', 'B2B'] },
          'sealer-robotic': { name: 'Robotic vacuum sealer', title: 'Robotic sealing', desc: 'Robotic sealing line for high-volume consistent packaging.', tags: ['Robotic', 'Automation', 'Production'] },
          'mask-production': { name: '3-layer mask production line', title: 'Mask manufacturing machine', desc: 'Three-layer mask production equipment — developed during COVID for PPE demand.', tags: ['PPE', 'Mask', 'Production line'] },
          'heat-pad-production': { name: 'Heat pad production line', title: 'Heat pad machine', desc: 'Heat pad manufacturing equipment for medical and warming applications.', tags: ['Heat pad', 'Medical', 'Production'] }
        }
      },
      ownedProducts: {
        eyebrow: 'Our products',
        title: 'Proprietary engineering & manufacturing',
        desc: 'WhatsApp CRM, BizSwap and hardware that still has a product page',
        viewAll: 'All products',
        contact: 'Product inquiry'
      },
      companyHistory: {
        eyebrow: 'Production history',
        title: 'Lines we no longer sell',
        desc: 'These are older lines from the company record. They are not for sale, order or quote.',
        badge: 'No longer sold',
        cardNote: 'Company history, not a product for sale.'
      },
      home: {
        ownedEyebrow: 'Built by Bizdavar',
        ownedTitle: 'What we build ourselves',
        ownedDesc: 'WhatsApp CRM and BizSwap — live products. Hardware we produced is in company achievements.',
        ownedCta: 'View all products',
        ownedAchievements: 'Achievements & production'
      }
    }
  };

  Object.keys(catalog).forEach(lang => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    const { home: homePatch, productsPage, ...rest } = catalog[lang];
    Object.assign(L, rest);
    if (homePatch) {
      if (L.home && typeof L.home === 'object') Object.assign(L.home, homePatch);
      else L.home = homePatch;
    }
    if (!L.pages) L.pages = {};
    L.productsPage = productsPage;
    // Preserve crumb used by breadcrumbs (do not wipe pages.products.crumb)
    const prevCrumb = L.pages.products && L.pages.products.crumb;
    L.pages.products = Object.assign({}, productsPage, {
      crumb: productsPage.crumb || prevCrumb || (productsPage.hero && productsPage.hero.title) || ''
    });
  });
})();
