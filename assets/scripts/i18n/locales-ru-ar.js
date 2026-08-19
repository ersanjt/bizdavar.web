/**
 * Russian + Arabic locales — clone English base, then overlay home/nav/SEO/Liqui Moly.
 * Loaded after locale-seo.js (see site-loader.js).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES || !window.BIZDAVAR_LOCALES.en) return;

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function deepMerge(target, src) {
    if (!src || typeof src !== 'object') return target;
    Object.keys(src).forEach(function (key) {
      var val = src[key];
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        if (!target[key] || typeof target[key] !== 'object') target[key] = {};
        deepMerge(target[key], val);
      } else {
        target[key] = val;
      }
    });
    return target;
  }

  var commonLang = {
    langFa: 'فارسی',
    langTr: 'Türkçe',
    langEn: 'English',
    langRu: 'Русский',
    langAr: 'العربية'
  };

  var pageSeoRu = {
    home: {
      crumb: 'Главная',
      seoTitle: 'Веб-дизайн и поставка VEGA из Стамбула | Бесплатная консультация',
      seoDescription: 'Сайт за 5 дней, цифровой маркетинг и оригинальные VEGA / Prosense из Стамбула. Расчёт цены и бесплатная консультация в WhatsApp — Bizdavar.',
      seoKeywords: 'веб-дизайн Стамбул, купить VEGA, Prosense, цифровой маркетинг, Fast Web Studio, Bizdavar'
    },
    about: {
      crumb: 'О нас',
      seoTitle: 'О Bizdavar | цифровые услуги и промышленные поставки с 2013',
      seoDescription: 'Bizdavar Group с 2013 в Стамбуле — веб-дизайн, цифровой маркетинг, продукты FXGuard и поставки VEGA, Prosense и Liqui Moly в 11 странах.',
      seoKeywords: 'о Bizdavar, цифровое агентство Стамбул, промышленные поставки'
    },
    services: {
      crumb: 'Услуги',
      seoTitle: 'Веб-дизайн и маркетинг в Стамбуле | Bizdavar',
      seoDescription: 'Стамбул и Тебриз: сайт за 5 дней, SEO, SMM, приложения, серверы и монтаж. Бесплатная консультация — запросите расчёт в WhatsApp.',
      seoKeywords: 'веб-дизайн Стамбул, цифровой маркетинг, SEO, SMM, Bizdavar'
    },
    fieldTech: {
      crumb: 'Технические услуги',
      seoTitle: 'Технические услуги | CCTV, проводка и скрытое освещение — Тебриз и Стамбул',
      seoDescription: 'Установка CCTV, проводка и скрытое освещение в Тебризе и Стамбуле — осмотр, план, монтаж и гарантия. WhatsApp техслужбы: +98 936 411 5151.',
      seoKeywords: 'CCTV Тебриз, CCTV Стамбул, проводка, скрытое освещение, Bizdavar'
    },
    products: {
      crumb: 'Продукты',
      seoTitle: 'Купить VEGA, Prosense и FXGuard | продукты Bizdavar',
      seoDescription: 'Каталог Bizdavar: датчики VEGA, детекторы Prosense, Liqui Moly, Teltonika и FXGuard WhatsApp CRM. Прозрачная цена и расчёт в WhatsApp.',
      seoKeywords: 'купить VEGA, Prosense, FXGuard, Fast Web Studio, Liqui Moly, Bizdavar'
    },
    contact: {
      crumb: 'Контакты',
      seoTitle: 'Бесплатная консультация и расчёт | WhatsApp Bizdavar',
      seoDescription: 'Запрос VEGA, Prosense или сайта — форма или WhatsApp. Ответ в рабочие часы из Стамбула и Тебриза.',
      seoKeywords: 'бесплатная консультация, расчёт VEGA, WhatsApp Bizdavar, контакты Bizdavar'
    },
    liquiMoly: {
      crumb: 'Продукция Liqui Moly',
      seoTitle: 'Купить Liqui Moly | моторные масла и присадки | Bizdavar',
      seoDescription: 'Bizdavar Group поставляет оригинальную Liqui Moly: моторные масла, Octane Plus, дизельные присадки, антифриз и автохимию. Прозрачные цены в USD и многоязычная консультация.',
      seoKeywords: 'Liqui Moly купить, моторное масло Liqui Moly, Octane Plus, Top Tec, Molygen, присадка в бензин, антифриз, Bizdavar'
    },
    vega: {
      crumb: 'Продукция VEGA',
      seoTitle: 'Купить датчики VEGA | VEGAPULS — расчёт из Стамбула',
      seoDescription: 'VEGAPULS 6X, VEGABAR 39 и VEGAPOINT оригинал из Стамбула до проекта в Иране. Точный order code, прозрачная проформа и консультация в WhatsApp.',
      seoKeywords: 'купить VEGA, VEGAPULS 6X, VEGABAR 39, VEGAPOINT, датчик уровня, Bizdavar'
    },
    prosense: {
      crumb: 'Продукция Prosense',
      seoTitle: 'Купить газовые детекторы Prosense | PQ и SafeVader',
      seoDescription: 'Оригинальные газовые и пламенные детекторы Prosense с сертификатами SIL. Запрос PQ, SafeVader и PPS+ в WhatsApp — прозрачная проформа от Bizdavar.',
      seoKeywords: 'купить Prosense, газовый детектор, PQ Series, SafeVader, PPS+, Bizdavar'
    },
    portfolio: {
      crumb: 'Портфолио',
      seoTitle: 'Портфолио | веб-дизайн, цифровые продукты и промышленные поставки — Bizdavar',
      seoDescription: 'Портфолио Bizdavar Group: веб-дизайн, цифровой маркетинг, SMM, продукты FXGuard и Fast Web Studio, поставки VEGA, Prosense и Liqui Moly.',
      seoKeywords: 'портфолио Bizdavar, веб-дизайн, цифровой маркетинг, FXGuard, Fast Web Studio, VEGA'
    },
    fast: {
      crumb: 'Fast Web Studio',
      seoTitle: 'Сайт за 5 дней от $99 | Fast Web Studio',
      seoDescription: 'Корпоративный, магазин и лендинг за 5 рабочих дней. Тарифы $99 / $199 / $299 — RTL, WhatsApp и базовое SEO. Заказ у Bizdavar.',
      seoKeywords: 'сайт за 5 дней, дешёвый веб-дизайн, Fast Web Studio, WooCommerce, Bizdavar'
    },
    blog: {
      crumb: 'Блог',
      seoTitle: 'Блог Bizdavar | маркетинг, веб-дизайн и промышленные поставки',
      seoDescription: 'Статьи Bizdavar: цифровой маркетинг, Fast Web Studio, датчики VEGA, промышленные поставки и рост бизнеса для рынков Ирана и Турции.',
      seoKeywords: 'блог Bizdavar, цифровой маркетинг, веб-дизайн, VEGA, промышленные поставки'
    },
    privacy: {
      crumb: 'Конфиденциальность',
      seoTitle: 'Политика конфиденциальности | Bizdavar Group',
      seoDescription: 'Политика конфиденциальности сайта Bizdavar Group — данные формы контакта, язык и определение региона.',
      seoKeywords: 'политика конфиденциальности, privacy, Bizdavar'
    },
    teltonika: {
      crumb: 'Teltonika',
      seoTitle: 'Купить GPS-трекер Teltonika | FMB920 от $29 — Bizdavar',
      seoDescription: 'Поставка оригинальных GPS и Fleet Telematics Teltonika. FMB920 от $29, FMC650, DualCam, EYE Mesh — консультация и логистика — Bizdavar Group.',
      seoKeywords: 'Teltonika, GPS трекер, FMB920 цена, fleet telematics, Bizdavar'
    },
    gamak: {
      crumb: 'Gamak',
      seoTitle: 'Купить электродвигатель Gamak | IE2/IE3 — Bizdavar Group',
      seoDescription: 'Оригинальные промышленные электродвигатели Gamak из Турции. GM/GMB, IE2/IE3, фланец B3/B5 — техконсультация, проформа и логистика — Bizdavar Group.',
      seoKeywords: 'Gamak, электродвигатель, IE2 IE3, промышленный мотор, Bizdavar'
    },
    digiSystem: {
      crumb: 'Digi System',
      seoTitle: 'Купить Digi System | торговые весы и POS | Bizdavar',
      seoDescription: 'Поставка весов и POS Digi System — SM-6000, W-5600SRX, LX-5600 и AW-5600. Подбор модели, прозрачная проформа и логистика — Bizdavar Group.',
      seoKeywords: 'Digi System, DIGI, SM-6000, POS, торговые весы, Bizdavar'
    },
    teraoka: {
      crumb: 'Teraoka',
      seoTitle: 'Купить Teraoka Seiko | весы и POS — Bizdavar Group',
      seoDescription: 'Поставка весов, этикетирования и POS Teraoka Seiko — многоязычная консультация, проформа и международная логистика — Bizdavar Group.',
      seoKeywords: 'Teraoka, весы, POS, этикетирование, Bizdavar'
    },
    bzDiamond: {
      crumb: 'BZ Diamond',
      seoTitle: 'Кейс дизайна магазина WooCommerce | веб и SEO — Bizdavar',
      seoDescription: 'Кейс интернет-магазина: WooCommerce, корпоративная почта, SEO и техподдержка — услуги веб-дизайна Bizdavar Group.',
      seoKeywords: 'WooCommerce магазин, кейс веб-дизайна, SEO, Bizdavar'
    },
    supplifyTrade: {
      crumb: 'Supplify Trade',
      seoTitle: 'Кейс B2B сайта международной торговли | SEO — Bizdavar',
      seoDescription: 'Кейс корпоративного B2B сайта: sourcing и международная торговля, структура контента, SEO и техподдержка — Bizdavar Group.',
      seoKeywords: 'B2B веб-дизайн, международная торговля, кейс сайта, SEO, Bizdavar'
    },
    kayaOne: {
      crumb: 'Kaya One',
      seoTitle: 'Кейс сайта промышленной торговли | корпоративный сайт — Bizdavar',
      seoDescription: 'Кейс корпоративного сайта для торговли и промышленных решений: структура контента, SEO и техподдержка — Bizdavar Group.',
      seoKeywords: 'корпоративный веб-дизайн, промышленная торговля, кейс сайта, Bizdavar'
    },
    smmTurk: {
      crumb: 'SMM Turk',
      seoTitle: 'Кейс панели SMM | UI и SEO — Bizdavar',
      seoDescription: 'Кейс панели и веб-дизайна SMM: интерфейс, страницы конверсии, SEO и техподдержка — Bizdavar Group.',
      seoKeywords: 'дизайн панели SMM, кейс веб-дизайна, цифровой маркетинг, Bizdavar'
    },
    fxguardExchange: {
      crumb: 'FXGuard Exchange',
      seoTitle: 'Кейс FXGuard Exchange | платформа обмена томан–лира — Bizdavar',
      seoDescription: 'Кейс дизайна FXGuard Exchange — обмен IRR ↔ TRY, живые курсы, KYC и отслеживание заказов. Разработано Bizdavar Group.',
      seoKeywords: 'FXGuard Exchange, томан лира, финтех, курсы валют, Bizdavar'
    },
    biztejarat: {
      crumb: 'BizTejarat',
      seoTitle: 'Кейс промышленного SMM | B2B-контент — Bizdavar',
      seoDescription: 'Прошлый кейс Instagram SMM: промышленный B2B-контент — проект больше не активен. Выполнено Bizdavar Group.',
      seoKeywords: 'промышленный SMM, B2B контент, Instagram, Bizdavar'
    },
    biztab: {
      crumb: 'BizTab',
      seoTitle: 'BizTab | бесконтактный настенный термометр — продукт Bizdavar',
      seoDescription: 'BizTab — первый бесконтактный настенный термометр, разработанный в Тебризе командой Bizdavar. Погрешность менее 0,3°C, одобрен Университетом Тебриза.',
      seoKeywords: 'BizTab, бесконтактный термометр, IoT, Bizdavar, Тебриз'
    },
    bizsanitizerV5: {
      crumb: 'BizClean V5',
      seoTitle: 'BizClean V5 | автоматический санитайзер рук — Bizdavar',
      seoDescription: 'BizClean V5 — автоматический санитайзер рук с ультразвуковым датчиком. Разработан командой Bizdavar в период COVID-19, доступен на Digikala.',
      seoKeywords: 'BizClean V5, санитайзер рук, Bizdavar, Digikala'
    },
    fxguard: {
      crumb: 'FXGuard',
      seoTitle: 'FXGuard WhatsApp CRM | от $49/мес · бесплатное демо — Bizdavar',
      seoDescription: 'FXGuard WhatsApp CRM — общий inbox, клиенты, тикеты, филиалы и 2FA. Cloud от $49/мес, лицензия или Managed. Бесплатное демо app.fxguard.io.',
      seoKeywords: 'FXGuard, WhatsApp CRM, общий inbox, Bizdavar, fxguard.io'
    },
    fxguardAccounting: {
      crumb: 'FXGuard Accounting',
      seoTitle: 'FXGuard Accounting | бухгалтерия — Bizdavar',
      seoDescription: 'FXGuard Accounting — бухгалтерия для финансов, обменников и SME. Часть suite FXGuard от Bizdavar Group.',
      seoKeywords: 'FXGuard Accounting, бухгалтерское ПО, Bizdavar, fxguard.io'
    },
    bizswap: {
      crumb: 'BizSwap',
      seoTitle: 'BizSwap | пресейл и своп токенов Web3 — продукт Bizdavar',
      seoDescription: 'BizSwap — подключение кошелька, on-chain swap, пресейл токена, slippage и админ-панель BEP-20. Разработано командой Bizdavar.',
      seoKeywords: 'BizSwap, DeFi, Web3, token swap, presale, BEP-20, Bizdavar'
    },
    articleDigitalMarketing: {
      crumb: 'Цифровой маркетинг',
      seoTitle: 'Как цифровой маркетинг увеличивает продажи? | Bizdavar',
      seoDescription: 'Практический цифровой маркетинг для роста продаж: CRO, рекламные кампании, SEO и автоматизация. Руководство Bizdavar Group.',
      seoKeywords: 'цифровой маркетинг, рост продаж, CRO, SEO, Bizdavar'
    },
    articleWhatIsDm: {
      crumb: 'Что такое цифровой маркетинг',
      seoTitle: 'Что такое цифровой маркетинг? | Полное руководство — Bizdavar',
      seoDescription: 'Определение цифрового маркетинга, каналы (SEO, реклама, SMM) и роль в росте бизнеса. Руководство Bizdavar Group.',
      seoKeywords: 'что такое цифровой маркетинг, SEO, SMM, Bizdavar'
    },
    articleSmm: {
      crumb: 'SMM',
      seoTitle: 'Управление соцсетями (SMM) | Bizdavar',
      seoDescription: 'Стратегия SMM: контент, календарь публикаций, дизайн и таргетированная реклама. Руководство Bizdavar Group.',
      seoKeywords: 'SMM, управление соцсетями, Instagram, LinkedIn, Bizdavar'
    },
    articleFastStudio: {
      crumb: 'Fast Studio',
      seoTitle: 'Запуск сайта за 5 дней — гайд Fast Studio | Bizdavar',
      seoDescription: 'Полный гайд Fast Web Studio: тарифы $99–$299, сдача за 5 дней, WooCommerce и базовое SEO.',
      seoKeywords: 'Fast Web Studio, сайт за 5 дней, WooCommerce, Bizdavar'
    },
    articleIndustrialSensors: {
      crumb: 'Датчики VEGA',
      seoTitle: 'Выбор промышленных датчиков VEGA — гайд поставки | Bizdavar',
      seoDescription: 'Гайд по датчикам VEGA, насосам P-Series и SafeVader. Техконсультация и международная поставка — Bizdavar Group.',
      seoKeywords: 'датчик VEGA, промышленное оборудование, Bizdavar'
    },
    articleAboutBizdavar: {
      crumb: 'О Bizdavar Group',
      seoTitle: 'Что такое Bizdavar Group? — история, команда, 11 стран | Полный гайд',
      seoDescription: 'Профиль Bizdavar Group: основатель Ersan Jahed Tabrizi, 100+ проектов, финтех, веб-дизайн и поставки VEGA/Prosense в 11 странах.',
      seoKeywords: 'Bizdavar Group, история, Ersan Jahed Tabrizi'
    },
    articleVegaSupplyIran: {
      crumb: 'Поставка VEGA в Иран',
      seoTitle: 'Поставка датчиков VEGA в Иран из Стамбула | Bizdavar',
      seoDescription: 'Как закупить оригинальные датчики VEGA для проектов в Иране — консультация, проформа и логистика из офиса Bizdavar в Стамбуле.',
      seoKeywords: 'купить VEGA Иран, поставка VEGA, VEGAPULS, Bizdavar Стамбул'
    },
    articleMultilingualWeb: {
      crumb: 'Многоязычный сайт',
      seoTitle: 'Многоязычные сайты для Ирана и Турции | Bizdavar',
      seoDescription: 'Сайты fa/tr/en с hreflang и локальным доверием — гайд Bizdavar для бизнеса на двух рынках.',
      seoKeywords: 'многоязычный сайт, веб-дизайн Стамбул, hreflang, Bizdavar'
    }
  };

  var pageSeoAr = {
    home: {
      crumb: 'الرئيسية',
      seoTitle: 'تصميم مواقع وشراء VEGA من إسطنبول | استشارة مجانية',
      seoDescription: 'موقع خلال ٥ أيام، تسويق رقمي وتوريد VEGA وProsense الأصلي من إسطنبول. عرض سعر واستشارة مجانية عبر واتساب — Bizdavar.',
      seoKeywords: 'تصميم مواقع إسطنبول, شراء VEGA, Prosense, تسويق رقمي, Fast Web Studio, Bizdavar'
    },
    about: {
      crumb: 'من نحن',
      seoTitle: 'عن Bizdavar | خدمات رقمية وتوريد صناعي منذ ٢٠١٣',
      seoDescription: 'Bizdavar Group منذ ٢٠١٣ في إسطنبول — تصميم مواقع، تسويق رقمي، منتجات FXGuard وتوريد VEGA وProsense وLiqui Moly في ١١ دولة.',
      seoKeywords: 'عن Bizdavar, وكالة رقمية إسطنبول, توريد صناعي'
    },
    services: {
      crumb: 'الخدمات',
      seoTitle: 'تصميم مواقع وتسويق رقمي إسطنبول | Bizdavar',
      seoDescription: 'إسطنبول وتبريز: موقع خلال ٥ أيام، SEO وSMM وتطبيقات وخوادم وتركيبات فنية. استشارة مجانية — اطلب عرض سعر عبر واتساب.',
      seoKeywords: 'تصميم مواقع إسطنبول, تسويق رقمي, SEO, SMM, Bizdavar'
    },
    fieldTech: {
      crumb: 'خدمات فنية',
      seoTitle: 'خدمات فنية | كاميرات وتمديدات وإضاءة مخفية — تبريز وإسطنبول',
      seoDescription: 'تركيب كاميرات مراقبة وتمديدات وإضاءة مخفية في تبريز وإسطنبول — معاينة وخطة وتركيب مع ضمان. واتساب فني: +98 936 411 5151.',
      seoKeywords: 'كاميرات تبريز, كاميرات إسطنبول, تمديدات, إضاءة مخفية, Bizdavar'
    },
    products: {
      crumb: 'المنتجات',
      seoTitle: 'شراء VEGA وProsense وFXGuard | منتجات Bizdavar',
      seoDescription: 'كتالوج Bizdavar: حساسات VEGA وكواشف Prosense وLiqui Moly وTeltonika وFXGuard WhatsApp CRM. سعر واضح وعرض واتساب.',
      seoKeywords: 'شراء VEGA, Prosense, FXGuard, Fast Web Studio, Liqui Moly, Bizdavar'
    },
    contact: {
      crumb: 'اتصل بنا',
      seoTitle: 'استشارة مجانية وعرض سعر | واتساب Bizdavar',
      seoDescription: 'استعلام VEGA أو Prosense أو تصميم موقع — نموذج أو واتساب. الرد خلال ساعات العمل من إسطنبول وتبريز.',
      seoKeywords: 'استشارة مجانية, عرض سعر VEGA, واتساب Bizdavar, اتصال Bizdavar'
    },
    liquiMoly: {
      crumb: 'منتجات Liqui Moly',
      seoTitle: 'شراء Liqui Moly | زيوت المحرك وإضافات الوقود | Bizdavar',
      seoDescription: 'مجموعة Bizdavar تورّد منتجات Liqui Moly الأصلية: زيوت المحرك، Octane Plus، إضافات الديزل، مضاد التجمد والعناية بالسيارة. أسعار شفافة بالدولار واستشارة متعددة اللغات.',
      seoKeywords: 'شراء Liqui Moly, زيت محرك Liqui Moly, Octane Plus, Top Tec, Molygen, إضافات بنزين, مضاد تجمد, بيزدوار, Bizdavar'
    },
    vega: {
      crumb: 'منتجات VEGA',
      seoTitle: 'شراء حساسات VEGA | عرض VEGAPULS من إسطنبول',
      seoDescription: 'VEGAPULS 6X وVEGABAR 39 وVEGAPOINT أصلية من إسطنبول إلى مشروعك في إيران. رمز طلب دقيق وفاتورة مبدئية واستشارة عبر واتساب.',
      seoKeywords: 'شراء VEGA, VEGAPULS 6X, VEGABAR 39, VEGAPOINT, حساس مستوى, Bizdavar'
    },
    prosense: {
      crumb: 'منتجات Prosense',
      seoTitle: 'شراء كواشف غاز Prosense | PQ وSafeVader',
      seoDescription: 'كواشف غاز ولهب Prosense الأصلية بشهادات SIL. استعلام PQ وSafeVader وPPS+ عبر واتساب — فاتورة مبدئية شفافة من Bizdavar.',
      seoKeywords: 'شراء Prosense, كاشف غاز, PQ Series, SafeVader, PPS+, Bizdavar'
    },
    portfolio: {
      crumb: 'الأعمال',
      seoTitle: 'الأعمال | تصميم مواقع ومنتجات رقمية وتوريد صناعي — Bizdavar',
      seoDescription: 'أعمال Bizdavar Group: تصميم مواقع، تسويق رقمي، SMM، منتجات FXGuard وFast Web Studio، وتوريد VEGA وProsense وLiqui Moly.',
      seoKeywords: 'أعمال Bizdavar, تصميم مواقع, تسويق رقمي, FXGuard, Fast Web Studio, VEGA'
    },
    fast: {
      crumb: 'Fast Web Studio',
      seoTitle: 'موقع خلال ٥ أيام من ٩٩ دولار | Fast Web Studio',
      seoDescription: 'موقع شركات ومتجر ولاندينغ خلال ٥ أيام عمل. باقات $99 / $199 / $299 — RTL وواتساب وSEO أساسي. اطلب من Bizdavar.',
      seoKeywords: 'تصميم مواقع ٥ أيام, تصميم مواقع رخيص, Fast Web Studio, WooCommerce, Bizdavar'
    },
    blog: {
      crumb: 'المدونة',
      seoTitle: 'مدونة Bizdavar | تسويق وتصميم مواقع وتوريد صناعي',
      seoDescription: 'مقالات Bizdavar: تسويق رقمي، Fast Web Studio، حساسات VEGA، توريد صناعي ونمو الأعمال لأسواق إيران وتركيا.',
      seoKeywords: 'مدونة Bizdavar, تسويق رقمي, تصميم مواقع, VEGA, توريد صناعي'
    },
    privacy: {
      crumb: 'الخصوصية',
      seoTitle: 'سياسة الخصوصية | Bizdavar Group',
      seoDescription: 'سياسة خصوصية موقع Bizdavar Group — بيانات نموذج الاتصال واللغة واكتشاف المنطقة.',
      seoKeywords: 'سياسة الخصوصية, privacy, Bizdavar'
    },
    teltonika: {
      crumb: 'Teltonika',
      seoTitle: 'شراء جهاز تتبع Teltonika | FMB920 من ٢٩$ — Bizdavar',
      seoDescription: 'توريد GPS وFleet Telematics من Teltonika الأصلية. FMB920 من ٢٩$، FMC650، DualCam، EYE Mesh — استشارة ولوجستيات — Bizdavar Group.',
      seoKeywords: 'Teltonika, جهاز تتبع GPS, سعر FMB920, fleet telematics, Bizdavar'
    },
    gamak: {
      crumb: 'Gamak',
      seoTitle: 'شراء موتور كهربائي Gamak | IE2/IE3 — Bizdavar Group',
      seoDescription: 'موتورات Gamak الصناعية الأصلية من تركيا. GM/GMB، IE2/IE3، شفة B3/B5 — استشارة فنية وفاتورة مبدئية ولوجستيات — Bizdavar Group.',
      seoKeywords: 'Gamak, موتور كهربائي, IE2 IE3, موتور صناعي, Bizdavar'
    },
    digiSystem: {
      crumb: 'Digi System',
      seoTitle: 'شراء Digi System | موازين وPOS للتجزئة | Bizdavar',
      seoDescription: 'توريد موازين وPOS من Digi System — SM-6000، W-5600SRX، LX-5600 وAW-5600. اختيار الموديل وفاتورة شفافة ولوجستيات — Bizdavar Group.',
      seoKeywords: 'Digi System, DIGI, SM-6000, POS, موازين تجزئة, Bizdavar'
    },
    teraoka: {
      crumb: 'Teraoka',
      seoTitle: 'شراء Teraoka Seiko | موازين وPOS — Bizdavar Group',
      seoDescription: 'توريد موازين وتوسيم وPOS من Teraoka Seiko — استشارة متعددة اللغات وفاتورة مبدئية ولوجستيات دولية — Bizdavar Group.',
      seoKeywords: 'Teraoka, موازين, POS, توسيم, Bizdavar'
    },
    bzDiamond: {
      crumb: 'BZ Diamond',
      seoTitle: 'نموذج تصميم متجر WooCommerce | ويب وSEO — Bizdavar',
      seoDescription: 'نموذج متجر إلكتروني: WooCommerce، بريد مؤسسي، SEO ودعم فني — خدمات تصميم الويب من Bizdavar Group.',
      seoKeywords: 'متجر WooCommerce, نموذج تصميم مواقع, SEO, Bizdavar'
    },
    supplifyTrade: {
      crumb: 'Supplify Trade',
      seoTitle: 'نموذج موقع B2B للتجارة الدولية | SEO — Bizdavar',
      seoDescription: 'نموذج موقع B2B مؤسسي: sourcing وتجارة دولية، هيكل محتوى، SEO ودعم فني — Bizdavar Group.',
      seoKeywords: 'تصميم ويب B2B, تجارة دولية, نموذج موقع, SEO, Bizdavar'
    },
    kayaOne: {
      crumb: 'Kaya One',
      seoTitle: 'نموذج موقع تجارة صناعية | موقع مؤسسي — Bizdavar',
      seoDescription: 'نموذج موقع مؤسسي للتجارة والحلول الصناعية: هيكل محتوى، SEO ودعم فني — Bizdavar Group.',
      seoKeywords: 'تصميم ويب مؤسسي, تجارة صناعية, نموذج موقع, Bizdavar'
    },
    smmTurk: {
      crumb: 'SMM Turk',
      seoTitle: 'نموذج لوحة SMM | واجهة وSEO — Bizdavar',
      seoDescription: 'نموذج لوحة وتصميم ويب لخدمات SMM: واجهة، صفحات تحويل، SEO ودعم فني — Bizdavar Group.',
      seoKeywords: 'تصميم لوحة SMM, نموذج تصميم مواقع, تسويق رقمي, Bizdavar'
    },
    fxguardExchange: {
      crumb: 'FXGuard Exchange',
      seoTitle: 'نموذج FXGuard Exchange | منصة صرف تومان–ليرة — Bizdavar',
      seoDescription: 'نموذج تصميم FXGuard Exchange — صرف IRR ↔ TRY بأسعار حية وKYC وتتبع الطلبات. تطوير Bizdavar Group.',
      seoKeywords: 'FXGuard Exchange, تومان ليرة, fintech, أسعار صرف, Bizdavar'
    },
    biztejarat: {
      crumb: 'BizTejarat',
      seoTitle: 'نموذج SMM صناعي | محتوى B2B — Bizdavar',
      seoDescription: 'نموذج سابق لإدارة Instagram: محتوى منتجات صناعية B2B — المشروع لم يعد نشطاً. نفذته Bizdavar Group.',
      seoKeywords: 'SMM صناعي, محتوى B2B, إدارة Instagram, Bizdavar'
    },
    biztab: {
      crumb: 'BizTab',
      seoTitle: 'BizTab | مقياس حرارة جداري بلا تلامس — منتج Bizdavar',
      seoDescription: 'BizTab — أول مقياس حرارة جداري بلا تلامس صُمم في تبريز بواسطة فريق Bizdavar. خطأ أقل من ٠٫٣°م، معتمد من جامعة تبريز.',
      seoKeywords: 'BizTab, مقياس حرارة بلا تلامس, IoT, Bizdavar, تبريز'
    },
    bizsanitizerV5: {
      crumb: 'BizClean V5',
      seoTitle: 'BizClean V5 | معقم يدين آلي — Bizdavar',
      seoDescription: 'BizClean V5 — معقم يدين آلي بمستشعر فوق صوتي. صممه فريق Bizdavar خلال COVID-19، متوفر على Digikala.',
      seoKeywords: 'BizClean V5, معقم يدين, Bizdavar, Digikala'
    },
    fxguard: {
      crumb: 'FXGuard',
      seoTitle: 'FXGuard WhatsApp CRM | من ٤٩$/شهر · عرض تجريبي مجاني — Bizdavar',
      seoDescription: 'FXGuard WhatsApp CRM — صندوق وارد مشترك، عملاء، تذاكر، فروع و2FA. Cloud من ٤٩$/شهر أو ترخيص أو Managed. عرض تجريبي مجاني app.fxguard.io.',
      seoKeywords: 'FXGuard, WhatsApp CRM, صندوق وارد مشترك, Bizdavar, fxguard.io'
    },
    fxguardAccounting: {
      crumb: 'FXGuard Accounting',
      seoTitle: 'FXGuard Accounting | نظام محاسبة — Bizdavar',
      seoDescription: 'FXGuard Accounting — محاسبة لفرق المالية والصرافة والشركات الصغيرة. جزء من suite FXGuard من Bizdavar Group.',
      seoKeywords: 'FXGuard Accounting, برنامج محاسبة, Bizdavar, fxguard.io'
    },
    bizswap: {
      crumb: 'BizSwap',
      seoTitle: 'BizSwap | بيع مسبق ومبادلة توكن Web3 — منتج Bizdavar',
      seoDescription: 'BizSwap — ربط محفظة، مبادلة on-chain، بيع مسبق للتوكن، slippage ولوحة إدارة BEP-20. تطوير فريق Bizdavar.',
      seoKeywords: 'BizSwap, DeFi, Web3, token swap, presale, BEP-20, Bizdavar'
    },
    articleDigitalMarketing: {
      crumb: 'التسويق الرقمي',
      seoTitle: 'كيف يزيد التسويق الرقمي المبيعات؟ | Bizdavar',
      seoDescription: 'تسويق رقمي عملي لنمو المبيعات: CRO، حملات إعلانية، SEO وأتمتة. دليل Bizdavar Group.',
      seoKeywords: 'تسويق رقمي, نمو المبيعات, CRO, SEO, Bizdavar'
    },
    articleWhatIsDm: {
      crumb: 'ما هو التسويق الرقمي',
      seoTitle: 'ما هو التسويق الرقمي؟ | دليل كامل — Bizdavar',
      seoDescription: 'تعريف التسويق الرقمي والقنوات (SEO، إعلانات، SMM) وأهميته لنمو الأعمال. دليل Bizdavar Group.',
      seoKeywords: 'ما هو التسويق الرقمي, SEO, SMM, Bizdavar'
    },
    articleSmm: {
      crumb: 'SMM',
      seoTitle: 'إدارة وسائل التواصل (SMM) | Bizdavar',
      seoDescription: 'استراتيجية SMM: إنشاء محتوى، تقويم نشر، تصميم وإعلانات مستهدفة. دليل Bizdavar Group.',
      seoKeywords: 'SMM, إدارة وسائل التواصل, Instagram, LinkedIn, Bizdavar'
    },
    articleFastStudio: {
      crumb: 'Fast Studio',
      seoTitle: 'إطلاق موقع خلال ٥ أيام — دليل Fast Studio | Bizdavar',
      seoDescription: 'دليل Fast Web Studio الكامل: خطط ٩٩$–٢٩٩$، تسليم خلال ٥ أيام، WooCommerce وSEO أساسي.',
      seoKeywords: 'Fast Web Studio, موقع خلال ٥ أيام, WooCommerce, Bizdavar'
    },
    articleIndustrialSensors: {
      crumb: 'حساسات VEGA',
      seoTitle: 'اختيار حساسات VEGA الصناعية — دليل التوريد | Bizdavar',
      seoDescription: 'دليل حساسات VEGA ومضخات P-Series وSafeVader. استشارة فنية وتوريد دولي — Bizdavar Group.',
      seoKeywords: 'حساس VEGA, معدات صناعية, Bizdavar'
    },
    articleAboutBizdavar: {
      crumb: 'عن Bizdavar Group',
      seoTitle: 'ما هي Bizdavar Group؟ — التاريخ والفريق و١١ دولة | دليل كامل',
      seoDescription: 'ملف Bizdavar Group: المؤسس Ersan Jahed Tabrizi، أكثر من ١٠٠ مشروع، fintech وتصميم ويب وتوريد VEGA/Prosense في ١١ دولة.',
      seoKeywords: 'Bizdavar Group, التاريخ, Ersan Jahed Tabrizi'
    },
    articleVegaSupplyIran: {
      crumb: 'توريد VEGA لإيران',
      seoTitle: 'توريد حساسات VEGA إلى إيران من إسطنبول | Bizdavar',
      seoDescription: 'كيف تشتري حساسات VEGA الأصلية لمشاريع إيران — استشارة وفاتورة مبدئية ولوجستيات من مكتب Bizdavar في إسطنبول.',
      seoKeywords: 'شراء VEGA إيران, توريد VEGA, VEGAPULS, Bizdavar إسطنبول'
    },
    articleMultilingualWeb: {
      crumb: 'موقع متعدد اللغات',
      seoTitle: 'مواقع متعددة اللغات لإيران وتركيا | Bizdavar',
      seoDescription: 'مواقع fa/tr/en مع hreflang وثقة محلية — دليل Bizdavar للأعمال ذات السوقين.',
      seoKeywords: 'موقع متعدد اللغات, تصميم مواقع إسطنبول, hreflang, Bizdavar'
    }
  };

  var homeRu = {
    heroBadge: 'Bizdavar — веб-дизайн и промышленные поставки из Стамбула',
    heroTitle: 'Веб-дизайн и поставка',
    heroTitleSpan: 'VEGA из Стамбула',
    heroTitleEnd: 'с бесплатной консультацией',
    heroDesc: 'Сайт за 5 дней, цифровой маркетинг и оригинальные VEGA, Prosense и Liqui Moly. Расчёт в WhatsApp.',
    intentNavLabel: 'Популярные страницы',
    intentVega: 'Купить VEGA',
    intentProsense: 'Детектор Prosense',
    intentFast: 'Сайт за 5 дней',
    intentQuote: 'Бесплатный расчёт',
    viewServices: 'Смотреть услуги',
    heroCard: 'Цифровой маркетинг · Веб-дизайн · Промышленность',
    statProjects: 'Цифровых проектов',
    statCountries: 'Активных стран',
    statYears: 'Лет опыта',
    featFast: 'Быстрая поставка',
    featFastDesc: 'Fast Web Studio — сайт за 5 дней',
    featGlobal: 'Глобальный охват',
    featGlobalDesc: 'Проекты в Иране, Турции и мире',
    featIndustrial: 'Промышленная экспертиза',
    featIndustrialDesc: 'VEGA, Prosense, Liqui Moly и КИП',
    featResults: 'Измеримый результат',
    featResultsDesc: 'Рост конверсии и бренда',
    svcEyebrow: 'Экспертные услуги',
    svcTitle: 'Комплексные решения Bizdavar Group',
    svcDesc: 'Шесть направлений — цифровые, софт и технический монтаж (Тебриз и Стамбул)',
    svcDmDesc: 'Стратегия, рекламные кампании, SEO и CRO для роста онлайн-продаж.',
    svcWebDesc: 'Корпоративные сайты, магазины и лендинги — быстрая сдача через Fast Web Studio.',
    svcSmmDesc: 'Контент, ведение страниц и таргетированная реклама в соцсетях.',
    svcAppsDesc: 'Android, iOS, веб-приложения и корпоративные системы.',
    svcServerDesc: 'Настройка, безопасность, бэкапы, мониторинг и миграция серверов.',
    svcFieldDesc: 'CCTV, проводка и скрытое освещение — Тебриз и Стамбул.',
    svcIndDesc: 'Датчики VEGA, детекторы Prosense, Liqui Moly, насосы и техконсультации.',
    svcPlans: 'Тарифы и цены',
    fastTitle: 'Профессиональный сайт за 5 дней!',
    fastDesc: 'Запуститесь на этой неделе — Fast Web Studio',
    fastBtn: 'Смотреть тарифы',
    aboutTag: 'О нас',
    aboutTitle: 'Bizdavar Group — партнёр роста вашего бизнеса',
    aboutP1: 'Команда цифровых услуг, веб-дизайна, онлайн-маркетинга и промышленных поставок. Интегрированные решения — от финтеха и событий до индустрии и хостинга.',
    aboutP2: 'Цифровая инфраструктура, домены, SSL и безопасность — тоже наши услуги. Международный хостинг и домены через <a href="https://netinode.net/" class="service-card__link" target="_blank" rel="noopener noreferrer">Netinode</a>.',
    aboutHeroImage: 'assets/images/content/about-hero-en.svg',
    aboutHeroAlt: 'Bizdavar Group — цифровое и промышленное агентство',
    aboutMore: 'Подробнее о Bizdavar',
    aboutInfra: 'Управление инфраструктурой',
    clientsTitle: 'Услуги и продукты на практике',
    clientsDesc: 'Веб-дизайн, продукты FXGuard и Fast Web Studio, промышленные поставки',
    clientsAll: 'Смотреть всё портфолио',
    blogTitle: 'Последние статьи',
    blogAll: 'Все материалы блога',
    faqTitle: 'Частые вопросы',
    ctaTitle: 'Нужен расчёт VEGA или новый сайт?',
    ctaDesc: 'Напишите в WhatsApp — бесплатная консультация из Стамбула и Тебриза',
    ctaForm: 'Запросить расчёт',
    faqs: [
      { q: 'Как купить оригинальные датчики VEGA для проекта в Иране?', a: 'Выберите модель на странице VEGA или пришлите данные резервуара/процесса в WhatsApp. Bizdavar выдаёт точный order code, проформу и логистику из Стамбула.' },
      { q: 'Сколько стоит сайт Fast Web Studio?', a: 'Базовый $99, магазин $199, pro $299 — сдача от 5 рабочих дней, RTL и базовое SEO.' },
      { q: 'Где взять газовые детекторы Prosense?', a: 'Оригинальные PQ, SafeVader и PPS+ с сертификатами SIL. Расчёт в WhatsApp на фарси или турецком.' },
      { q: 'Как начинается бесплатная консультация?', a: 'Заполните форму или напишите в WhatsApp. Отвечаем из Стамбула и Тебриза в рабочие часы.' },
      { q: 'Где работает Bizdavar?', a: 'Штаб-квартира в Стамбуле, координация по Ирану в Тебризе, проекты в 11 странах — цифровые услуги и промышленные поставки.' }
    ]
  };

  var homeAr = {
    heroBadge: 'Bizdavar — تصميم مواقع وتوريد صناعي من إسطنبول',
    heroTitle: 'تصميم مواقع وتوريد',
    heroTitleSpan: 'VEGA من إسطنبول',
    heroTitleEnd: 'مع استشارة مجانية',
    heroDesc: 'موقع خلال ٥ أيام وتسويق رقمي وتوريد VEGA وProsense وLiqui Moly الأصلي. عرض السعر عبر واتساب.',
    intentNavLabel: 'صفحات مطلوبة',
    intentVega: 'شراء VEGA',
    intentProsense: 'كاشف Prosense',
    intentFast: 'موقع خلال ٥ أيام',
    intentQuote: 'عرض سعر مجاني',
    viewServices: 'عرض الخدمات',
    heroCard: 'تسويق رقمي · تصميم ويب · صناعي',
    statProjects: 'مشاريع رقمية',
    statCountries: 'دول نشطة',
    statYears: 'سنوات خبرة',
    featFast: 'تسليم سريع',
    featFastDesc: 'Fast Web Studio — موقع خلال ٥ أيام',
    featGlobal: 'انتشار عالمي',
    featGlobalDesc: 'مشاريع إيران وتركيا والعالم',
    featIndustrial: 'خبرة صناعية',
    featIndustrialDesc: 'VEGA وProsense وLiqui Moly وأدوات دقيقة',
    featResults: 'نتائج قابلة للقياس',
    featResultsDesc: 'نمو التحويل والعلامة',
    svcEyebrow: 'خدمات متخصصة',
    svcTitle: 'حلول شاملة من Bizdavar Group',
    svcDesc: 'ستة محاور — رقمي وبرمجي وتركيبات فنية (تبريز وإسطنبول)',
    svcDmDesc: 'استراتيجية وحملات وإعلانات وSEO وتحسين التحويل لنمو المبيعات.',
    svcWebDesc: 'مواقع شركات ومتاجر ولاندينغ — تسليم سريع عبر Fast Web Studio.',
    svcSmmDesc: 'إنتاج محتوى وإدارة صفحات وإعلانات مستهدفة على الشبكات.',
    svcAppsDesc: 'Android وiOS وتطبيقات ويب وأنظمة مؤسسية.',
    svcServerDesc: 'إعداد وأمان ونسخ احتياطي ومراقبة وترحيل خوادم.',
    svcFieldDesc: 'كاميرات وتمديدات وإضاءة مخفية — تبريز وإسطنبول.',
    svcIndDesc: 'حساسات VEGA وكواشف Prosense وLiqui Moly ومضخات واستشارة فنية.',
    svcPlans: 'الباقات والأسعار',
    fastTitle: 'موقع احترافي خلال ٥ أيام!',
    fastDesc: 'انطلق هذا الأسبوع — Fast Web Studio',
    fastBtn: 'عرض الباقات',
    aboutTag: 'من نحن',
    aboutTitle: 'Bizdavar Group — شريك نمو أعمالك',
    aboutP1: 'فريق خدمات رقمية وتصميم مواقع وتسويق عبر الإنترنت وتوريد صناعي. حلول متكاملة من الفنتك والفعاليات إلى الصناعة والاستضافة.',
    aboutP2: 'البنية الرقمية والنطاقات وSSL والأمان جزء من خدماتنا أيضاً — استضافة ونطاقات دولية عبر <a href="https://netinode.net/" class="service-card__link" target="_blank" rel="noopener noreferrer">Netinode</a>.',
    aboutHeroImage: 'assets/images/content/about-hero.svg',
    aboutHeroAlt: 'Bizdavar Group — وكالة رقمية وصناعية',
    aboutMore: 'المزيد عن Bizdavar',
    aboutInfra: 'إدارة البنية',
    clientsTitle: 'الخدمات والمنتجات عملياً',
    clientsDesc: 'تصميم مواقع ومنتجات FXGuard وFast Web Studio وتوريد العلامات الصناعية',
    clientsAll: 'عرض كل الأعمال',
    blogTitle: 'أحدث المقالات',
    blogAll: 'كل مقالات المدونة',
    faqTitle: 'الأسئلة الشائعة',
    ctaTitle: 'تحتاج عرض سعر VEGA أو موقعاً جديداً؟',
    ctaDesc: 'راسل واتساب — استشارة مجانية من إسطنبول وتبريز',
    ctaForm: 'طلب عرض سعر',
    faqs: [
      { q: 'كيف أشتري حساسات VEGA الأصلية لمشروع في إيران؟', a: 'اختر الموديل من صفحة VEGA أو أرسل بيانات الخزان/العملية عبر واتساب. Bizdavar يصدر رمز الطلب والفاتورة المبدئية واللوجستيات من إسطنبول.' },
      { q: 'كم يكلف موقع Fast Web Studio؟', a: 'أساسي $99 ومتجر $199 واحترافي $299 — التسليم من ٥ أيام عمل مع RTL وSEO أساسي.' },
      { q: 'من أين أحصل على كواشف غاز Prosense؟', a: 'PQ وSafeVader وPPS+ أصلية بشهادات SIL. عرض السعر عبر واتساب بالفارسية أو التركية.' },
      { q: 'كيف تبدأ الاستشارة المجانية؟', a: 'املأ النموذج أو راسل واتساب. نرد من إسطنبول وتبريز خلال ساعات العمل.' },
      { q: 'أين تعمل Bizdavar؟', a: 'المقر في إسطنبول وتنسيق إيران في تبريز ومشاريع في ١١ دولة — خدمات رقمية وتوريد صناعي.' }
    ]
  };

  var homeSectionsRu = {
    trustMetrics: [
      { value: '+100', label: 'Цифровых проектов' },
      { value: '11', label: 'Активных стран' },
      { value: '12+', label: 'Лет опыта' },
      { value: '35', label: 'Проектов и брендов' }
    ],
    processSteps: [
      { num: '01', title: 'Анализ и консультация', desc: 'Цели бизнеса, аудитория и цифровые приоритеты — бесплатная первичная консультация.' },
      { num: '02', title: 'Проектирование решения', desc: 'Стратегия, выбор платформы и план исполнения под бюджет и сроки.' },
      { num: '03', title: 'Реализация и сдача', desc: 'Профессиональная реализация — от кампаний до сайтов и промышленных поставок.' },
      { num: '04', title: 'Поддержка и рост', desc: 'Непрерывная оптимизация, прозрачная отчётность и долгосрочное партнёрство.' }
    ],
    process: {
      eyebrow: 'Как мы работаем',
      title: 'Профессиональный процесс сотрудничества',
      desc: 'От первой консультации до сдачи и поддержки — понятный и отслеживаемый путь'
    },
    credibility: {
      eyebrow: 'Доверие и опыт',
      title: 'Почему Bizdavar Group?',
      desc: 'Проверенные данные из профессионального профиля, портфолио и истории поставок',
      projects: 'Веб- и платформенные проекты',
      countries: 'Страны',
      years: 'Лет опыта',
      founded: 'Основана',
      foundedDisplay: '2013',
      sources: 'Источники',
      founderLinkedin: 'LinkedIn основателя',
      portfolio: 'Портфолио',
      fullAbout: 'Полная страница о нас'
    },
    geo: {
      summary: 'Услуги из Стамбула для Ирана, Турции и 11 стран — многоязычная поддержка, WhatsApp и международная доставка.',
      hubs: [
        { city: 'Стамбул', country: 'Турция', role: 'Главный офис · финтех и международные операции' },
        { city: 'Тебриз', country: 'Иран', role: 'Рынок Ирана · промышленные и цифровые проекты' },
        { city: 'Ереван', country: 'Армения', role: 'Региональные операции' }
      ]
    },
    industrial: {
      eyebrow: 'Промышленное оборудование',
      title: 'Поставки надёжных брендов и оборудования',
      desc: 'Датчики, детекторы, моторы и насосы — технический подбор, прайс и международная логистика для B2B',
      ctaTitle: 'Нужна консультация по поставкам?',
      ctaDesc: 'Подбор модели, международная закупка, перевозка и таможня — команда Bizdavar',
      ctaBtn: 'Запросить цену',
      ctaLink: 'Промышленные услуги',
      products: [
        { name: 'VEGA', title: 'Датчики и КИП', desc: 'Уровень, давление, расход — нефть, нефтехимия и вода', badge: 'Германия', tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'], cta: 'Смотреть каталог' },
        { name: 'Prosense', title: 'Газовые и пламенные детекторы', desc: 'Стационарные и портативные системы с сертификацией SIL2/3', badge: 'Турция', tags: ['PQ+', 'SafeVader', 'PPS'], cta: 'Линейки продуктов' },
        { name: 'Teltonika', title: 'GPS и Fleet Telematics', desc: 'Трекеры флота, CAN/OBD, BLE, видео и IoT — FMB920 · FMC650 · FTC305', badge: 'Литва', tags: ['FMB920', 'FTC305', 'DualCam'], cta: 'Каталог Teltonika' },
        { name: 'Gamak', title: 'Промышленные электродвигатели', desc: 'Трёхфазные и однофазные моторы — поставка и техподдержка', badge: 'Турция', tags: ['IE2/IE3', 'Фланец', 'Под проект'], cta: 'О Gamak' },
        { name: 'Digi System', title: 'Ритейл и POS', desc: 'Поставка Digi — весы, кассы, POS и торговое оборудование', badge: 'Турция', tags: ['POS', 'Retail', 'Scales'], cta: 'Смотреть продукты' },
        { name: 'Teraoka', title: 'Весы и магазинное оборудование', desc: 'Полная линейка Teraoka Seiko — весы, этикетирование, POS', badge: 'Япония', tags: ['Scales', 'Labeling', 'POS'], cta: 'Смотреть бренд' },
        { name: 'Liqui Moly', title: 'Масла и присадки', desc: 'Моторные масла, Octane Plus, дизельные присадки и автохимия — цены в USD', badge: 'Германия', tags: ['Octane Plus', 'Top Tec', '5W-30'], cta: 'Каталог и цены' }
      ]
    }
  };

  var homeSectionsAr = {
    trustMetrics: [
      { value: '+١٠٠', label: 'مشاريع رقمية' },
      { value: '١١', label: 'دول نشطة' },
      { value: '١٢+', label: 'سنوات خبرة' },
      { value: '٣٥', label: 'مشاريع وعلامات' }
    ],
    processSteps: [
      { num: '٠١', title: 'تحليل واستشارة', desc: 'أهداف العمل والجمهور وأولويات رقمية — استشارة أولية مجانية.' },
      { num: '٠٢', title: 'تصميم الحل', desc: 'استراتيجية واختيار المنصة وخطة تنفيذ وفق الميزانية والجدول.' },
      { num: '٠٣', title: 'تنفيذ وتسليم', desc: 'تنفيذ احترافي — من الحملات إلى المواقع والتوريد الصناعي.' },
      { num: '٠٤', title: 'دعم ونمو', desc: 'تحسين مستمر وتقارير شفافة وشراكة طويلة الأمد.' }
    ],
    process: {
      eyebrow: 'طريقة عملنا',
      title: 'مسار تعاون احترافي',
      desc: 'من الاستشارة الأولى إلى التسليم والدعم — مسار واضح وقابل للمتابعة'
    },
    credibility: {
      eyebrow: 'الثقة والخبرة',
      title: 'لماذا Bizdavar Group؟',
      desc: 'بيانات موثقة من الملف المهني والأعمال وسجل التنفيذ',
      projects: 'مشاريع ويب ومنصات',
      countries: 'دول',
      years: 'سنوات خبرة',
      founded: 'تأسست',
      foundedDisplay: '٢٠١٣',
      sources: 'المصادر',
      founderLinkedin: 'LinkedIn المؤسس',
      portfolio: 'الأعمال',
      fullAbout: 'صفحة من نحن كاملة'
    },
    geo: {
      summary: 'خدمات من إسطنبول إلى إيران وتركيا و١١ دولة — دعم متعدد اللغات وواتساب وتسليم دولي.',
      hubs: [
        { city: 'إسطنبول', country: 'تركيا', role: 'المقر الرئيسي · فنتك وعمليات دولية' },
        { city: 'تبريز', country: 'إيران', role: 'سوق إيران · مشاريع صناعية ورقمية' },
        { city: 'يريفان', country: 'أرمينيا', role: 'عمليات إقليمية' }
      ]
    },
    industrial: {
      eyebrow: 'معدات صناعية',
      title: 'توريد علامات ومعدات موثوقة',
      desc: 'حساسات وكواشف ومحركات ومضخات — اختيار فني وعروض أسعار ولوجستيات دولية لـ B2B',
      ctaTitle: 'تحتاج استشارة توريد؟',
      ctaDesc: 'اختيار الموديل والشراء الدولي والشحن والجمارك — فريق Bizdavar الفني',
      ctaBtn: 'طلب عرض سعر',
      ctaLink: 'خدمات صناعية',
      products: [
        { name: 'VEGA', title: 'حساسات وأدوات دقيقة', desc: 'مستوى وضغط وتدفق — نفط وبتروكيماويات ومياه', badge: 'ألمانيا', tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'], cta: 'عرض الكتالوج' },
        { name: 'Prosense', title: 'كواشف غاز ولهب', desc: 'أنظمة ثابتة ومحمولة بشهادة SIL2/3', badge: 'تركيا', tags: ['PQ+', 'SafeVader', 'PPS'], cta: 'سلاسل المنتجات' },
        { name: 'Teltonika', title: 'GPS وFleet Telematics', desc: 'متتبعات أساطيل وCAN/OBD وBLE وفيديو وIoT — FMB920 · FMC650 · FTC305', badge: 'ليتوانيا', tags: ['FMB920', 'FTC305', 'DualCam'], cta: 'كتالوج Teltonika' },
        { name: 'Gamak', title: 'محركات كهربائية صناعية', desc: 'محركات ثلاثية وأحادية الطور — توريد ودعم فني', badge: 'تركيا', tags: ['IE2/IE3', 'فلانش', 'حسب المشروع'], cta: 'معلومات Gamak' },
        { name: 'Digi System', title: 'معدات تجزئة وPOS', desc: 'توريد Digi — موازين وصناديق وأنظمة POS', badge: 'تركيا', tags: ['POS', 'Retail', 'Scales'], cta: 'عرض المنتجات' },
        { name: 'Teraoka', title: 'موازين ومعدات متاجر', desc: 'توريد Teraoka Seiko الكامل — موازين وملصقات وPOS', badge: 'اليابان', tags: ['Scales', 'Labeling', 'POS'], cta: 'عرض العلامة' },
        { name: 'Liqui Moly', title: 'زيوت وإضافات', desc: 'زيوت محرك وOctane Plus وإضافات ديزل وعناية — أسعار بالدولار', badge: 'ألمانيا', tags: ['Octane Plus', 'Top Tec', '5W-30'], cta: 'الكتالوج والأسعار' }
      ]
    }
  };

  var liquiPage = {
    ru: {
      sections: {
        trust: {
          eyebrow: 'Почему Bizdavar?',
          title: 'Надёжные поставки Liqui Moly с прозрачными ценами в USD',
          desc: 'От подбора масла и присадок до проформы и доставки — многоязычная поддержка.'
        },
        buy: {
          eyebrow: 'Путь покупки',
          title: 'От выбора продукта до доставки — 5 шагов',
          desc: 'Отображаемые цены в USD; итоговая сумма подтверждается в проформе.'
        },
        quote: {
          eyebrow: 'Как запросить цену',
          title: 'Чем точнее запрос — тем быстрее предложение',
          desc: 'Отправьте название продукта, SKU или модель автомобиля в WhatsApp.'
        },
        highlights: {
          eyebrow: 'Хиты продаж',
          title: 'От Octane Plus до моторных масел',
          desc: 'Ориентировочная цена в USD на каждой карточке — WhatsApp или форма запроса.'
        },
        catalog: {
          eyebrow: 'Полный каталог',
          title: 'Продукция Liqui Moly с ценами в USD',
          desc: 'Оригинальный каталог Liqui Moly — моторные масла, топливные присадки, антифриз и автохимия'
        },
        iran: {
          eyebrow: 'Применение',
          title: 'Для кого Liqui Moly?',
          desc: 'От СТО и автопарков до мотоциклов и личного использования — запрос и подлинные поставки под любую задачу.',
          note: 'Нет в списке? Пришлите модель авто, тип топлива и количество — подберём точное решение.'
        },
        supply: {
          eyebrow: 'Поставки Bizdavar',
          title: 'Услуги поставки Liqui Moly',
          desc: 'Ваш партнёр по поставкам — не просто прайс-лист'
        },
        faq: {
          eyebrow: 'FAQ',
          title: 'Частые вопросы покупателей',
          desc: 'Не нашли ответ? Напишите нам в WhatsApp.'
        }
      },
      rateNote: { strong: '', body: '' },
      officialNote: 'Технические данные основаны на <a href="https://www.liqui-moly.com/" target="_blank" rel="noopener noreferrer">официальном сайте Liqui Moly</a>. Для заказа — <a href="contact">связаться с Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>',
      cta: {
        title: 'Готовы заказать Liqui Moly?',
        desc: 'Пришлите название продукта или SKU — Octane Plus · Top Tec · Molygen · дизельные присадки',
        btnForm: 'Форма запроса',
        btnServices: 'Каталог продуктов'
      },
      sticky: { label: 'Запрос Liqui Moly', hint: 'Цены в USD · многоязычная консультация' },
      geoText: 'Оригинальные поставки Liqui Moly — прозрачные цены в USD, консультация и международная логистика масел, присадок и автохимии.',
      related: [
        { title: 'Продукция VEGA', desc: 'Промышленные датчики уровня и давления' },
        { title: 'Продукция Prosense', desc: 'Газовые и пламенные детекторы' },
        { title: 'Каталог продуктов', desc: 'B2B бренды поставок' },
        { title: 'Контакты', desc: 'Запрос цены Liqui Moly' }
      ]
    },
    ar: {
      sections: {
        trust: {
          eyebrow: 'لماذا Bizdavar؟',
          title: 'توريد موثوق لـ Liqui Moly بأسعار دولار شفافة',
          desc: 'من اختيار الزيت والإضافات إلى الفاتورة المبدئية والتسليم — دعم متعدد اللغات.'
        },
        buy: {
          eyebrow: 'مسار الشراء',
          title: 'من اختيار المنتج إلى التسليم — ٥ خطوات',
          desc: 'الأسعار المعروضة بالدولار؛ المبلغ النهائي يُعتمد في الفاتورة المبدئية.'
        },
        quote: {
          eyebrow: 'دليل الاستعلام',
          title: 'طلب أوضح = عرض أسرع',
          desc: 'أرسل اسم المنتج أو رمز SKU أو موديل السيارة عبر واتساب.'
        },
        highlights: {
          eyebrow: 'الأكثر طلباً',
          title: 'من Octane Plus إلى زيوت المحرك',
          desc: 'سعر تقريبي بالدولار على كل بطاقة — واتساب أو نموذج الاستعلام.'
        },
        catalog: {
          eyebrow: 'الكتالوج الكامل',
          title: 'منتجات Liqui Moly بأسعار بالدولار',
          desc: 'كتالوج Liqui Moly الأصلي — زيوت المحرك، إضافات الوقود، مضاد التجمد والعناية بالسيارة'
        },
        iran: {
          eyebrow: 'الاستخدامات',
          title: 'لمن Liqui Moly؟',
          desc: 'من الورش والأساطيل إلى الدراجات والاستخدام الشخصي — استعلام وتوريد أصلي لكل استخدام.',
          note: 'غير مدرج؟ أرسل موديل السيارة ونوع الوقود والكمية لنقترح الحل المناسب.'
        },
        supply: {
          eyebrow: 'توريد Bizdavar',
          title: 'خدمات توريد Liqui Moly',
          desc: 'شريك التوريد — وليس مجرد قائمة أسعار'
        },
        faq: {
          eyebrow: 'الأسئلة الشائعة',
          title: 'أسئلة المشترين الشائعة',
          desc: 'لم تجد إجابتك؟ راسلنا على واتساب.'
        }
      },
      rateNote: { strong: '', body: '' },
      officialNote: 'المعلومات الفنية مستندة إلى <a href="https://www.liqui-moly.com/" target="_blank" rel="noopener noreferrer">الموقع الرسمي لـ Liqui Moly</a>. للطلب — <a href="contact">تواصل مع Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>',
      cta: {
        title: 'هل أنت مستعد لطلب Liqui Moly؟',
        desc: 'أرسل اسم المنتج أو رمز SKU — Octane Plus · Top Tec · Molygen · إضافات الديزل',
        btnForm: 'نموذج الاستعلام',
        btnServices: 'كتالوج المنتجات'
      },
      sticky: { label: 'استعلام Liqui Moly', hint: 'أسعار بالدولار · استشارة متعددة اللغات' },
      geoText: 'توريد أصلي لـ Liqui Moly — أسعار دولار شفافة واستشارة ولوجستيات دولية للزيوت والإضافات والعناية بالسيارة.',
      related: [
        { title: 'منتجات VEGA', desc: 'حساسات مستوى وضغط صناعية' },
        { title: 'منتجات Prosense', desc: 'كواشف غاز ولهب' },
        { title: 'كتالوج المنتجات', desc: 'علامات التوريد B2B' },
        { title: 'اتصل بنا', desc: 'استعلام سعر Liqui Moly' }
      ]
    }
  };

  var vegaPage = {
    ru: {
      sections: {
        trust: {
          eyebrow: 'Почему Bizdavar?',
          title: 'Надёжные поставки VEGA для технических и закупочных команд',
          desc: 'Мы не просто показываем каталог — сопровождаем от выбора модели до доставки.'
        },
        buy: {
          eyebrow: 'Путь покупки',
          title: 'От запроса до доставки — 5 понятных шагов',
          desc: 'Без сложностей — вы знаете каждый этап и остаётесь на связи.'
        },
        quote: {
          eyebrow: 'Гид по запросу',
          title: 'Чем точнее запрос — тем быстрее рекомендация',
          desc: 'Отправьте чек-лист ниже в WhatsApp или через форму — даже частичных данных достаточно.'
        },
        products: {
          eyebrow: 'Каталог продуктов',
          title: 'Востребованные продукты для региональных проектов',
          desc: 'Для запроса цены нажмите «Запросить цену» у каждого продукта. Техконсультация бесплатна.'
        },
        iran: {
          eyebrow: 'Региональное применение',
          title: 'VEGA в типовых отраслях',
          desc: 'Если вашей отрасли нет в списке — пришлите условия процесса, подберём подходящую модель.'
        },
        value: {
          eyebrow: 'Преимущества бренда',
          title: 'Почему инженеры выбирают VEGA',
          desc: 'Более 65 лет немецких инноваций — каждый год в мире устанавливают свыше 500 000 датчиков VEGA.'
        },
        principles: {
          eyebrow: 'Принципы измерения',
          title: 'Методы измерения VEGA',
          desc: 'Выбор правильного принципа измерения — рекомендуем лучший вариант под ваши условия.'
        },
        industries: {
          eyebrow: 'Глобальные отрасли',
          title: 'Решения VEGA для разных отраслей',
          desc: '15+ отраслей — от химии до энергетики и экологии'
        },
        supply: {
          eyebrow: 'Поставки Bizdavar',
          title: 'Услуги поставки VEGA от Bizdavar Group',
          desc: 'Ваш партнёр по поставкам — не просто поставщик'
        },
        faq: {
          eyebrow: 'FAQ',
          title: 'Частые вопросы покупателей',
          desc: 'Не нашли ответ? Свяжитесь с нами напрямую.'
        }
      },
      officialNote: 'Технические данные основаны на <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">официальном сайте VEGA</a>. Для цены, order code и поставки — <a href="contact">свяжитесь с Bizdavar</a>.',
      cta: {
        title: 'Готовы запросить цену VEGA?',
        desc: 'Пришлите название продукта или условия процесса — бесплатная техконсультация и прозрачная проформа',
        btnForm: 'Форма запроса',
        btnServices: 'Каталог продуктов'
      },
      sticky: { label: 'Запрос VEGA', hint: 'Многоязычная консультация · быстрый ответ' },
      geoText: 'Оригинальные поставки датчиков VEGA — техконсультация из Стамбула, прозрачная проформа и логистика до промышленных проектов.',
      related: [
        { title: 'Продукция Prosense', desc: 'Газовые и пламенные детекторы' },
        { title: 'Каталог продуктов', desc: 'Бренды поставок' },
        { title: 'Контакты и запрос', desc: 'Бесплатная консультация' }
      ]
    },
    ar: {
      sections: {
        trust: {
          eyebrow: 'لماذا Bizdavar؟',
          title: 'توريد موثوق لـ VEGA لفرقك الفنية والمشتريات',
          desc: 'نحن لا نعرض كتالوجاً فحسب — نرافقك من اختيار الموديل حتى التسليم.'
        },
        buy: {
          eyebrow: 'مسار الشراء',
          title: 'من الاستعلام إلى التسليم — 5 خطوات واضحة',
          desc: 'بدون تعقيد — تعرف كل خطوة وتبقى على تواصل طوال العملية.'
        },
        quote: {
          eyebrow: 'دليل الاستعلام',
          title: 'استعلام أوضح = توصية أسرع',
          desc: 'أرسل قائمة التحقق أدناه عبر واتساب أو نموذج الاتصال — حتى التفاصيل الجزئية تساعد.'
        },
        products: {
          eyebrow: 'كتالوج المنتجات',
          title: 'المنتجات الأكثر طلباً للمشاريع الإقليمية',
          desc: 'استخدم زر «طلب عرض سعر» لكل منتج. الاستشارة الفنية مجانية.'
        },
        iran: {
          eyebrow: 'التطبيق الإقليمي',
          title: 'VEGA عبر الصناعات الشائعة',
          desc: 'إذا لم يكن قطاعك مدرجاً — أرسل ظروف العملية وسنقترح الموديل المناسب.'
        },
        value: {
          eyebrow: 'مزايا العلامة',
          title: 'لماذا يختار المهندسون VEGA؟',
          desc: 'أكثر من 65 عاماً من الابتكار الألماني — يُركَّب أكثر من 500,000 حساس VEGA حول العالم كل عام.'
        },
        principles: {
          eyebrow: 'مبادئ القياس',
          title: 'طرق القياس لدى VEGA',
          desc: 'اختيار مبدأ القياس الصحيح — نوصي بالأفضل وفق ظروفك.'
        },
        industries: {
          eyebrow: 'صناعات عالمية',
          title: 'حلول VEGA لمختلف الصناعات',
          desc: 'أكثر من 15 صناعة — من الكيماويات إلى الطاقة والبيئة'
        },
        supply: {
          eyebrow: 'توريد Bizdavar',
          title: 'خدمات توريد VEGA من مجموعة Bizdavar',
          desc: 'شريك التوريد — وليس مجرد بائع'
        },
        faq: {
          eyebrow: 'الأسئلة الشائعة',
          title: 'أسئلة المشترين الشائعة',
          desc: 'لم تجد إجابتك؟ تواصل معنا مباشرة.'
        }
      },
      officialNote: 'المعلومات الفنية مستندة إلى <a href="https://www.vega.com/en-ae" target="_blank" rel="noopener noreferrer">الموقع الرسمي لـ VEGA</a>. للتسعير ورمز الطلب والتوريد — <a href="contact">تواصل مع Bizdavar</a>.',
      cta: {
        title: 'هل أنت مستعد لطلب عرض سعر VEGA؟',
        desc: 'أرسل اسم المنتج أو ظروف العملية — استشارة فنية مجانية وفاتورة مبدئية شفافة',
        btnForm: 'نموذج الاستعلام',
        btnServices: 'كتالوج المنتجات'
      },
      sticky: { label: 'استعلام VEGA', hint: 'استشارة متعددة اللغات · رد سريع' },
      geoText: 'توريد أصلي لحساسات VEGA — استشارة فنية من إسطنبول، فاتورة مبدئية شفافة ولوجستيات إلى المشاريع الصناعية.',
      related: [
        { title: 'منتجات Prosense', desc: 'كواشف غاز ولهب' },
        { title: 'كتالوج المنتجات', desc: 'علامات التوريد' },
        { title: 'اتصل واستعلم', desc: 'استشارة مجانية' }
      ]
    }
  };

  var prosensePage = {
    ru: {
      sections: {
        trust: {
          eyebrow: 'Почему Bizdavar?',
          title: 'Надёжные поставки Prosense для технических и закупочных команд',
          desc: 'Мы не просто показываем каталог — сопровождаем от выбора газа и модели до доставки.'
        },
        buy: {
          eyebrow: 'Путь покупки',
          title: 'От запроса до доставки — 5 понятных шагов',
          desc: 'Без сложностей — вы знаете каждый этап и остаётесь на связи.'
        },
        quote: {
          eyebrow: 'Гид по запросу',
          title: 'Чем точнее запрос — тем быстрее рекомендация',
          desc: 'Отправьте чек-лист ниже в WhatsApp или через форму — даже частичных данных достаточно.'
        },
        highlights: {
          eyebrow: 'Хиты продаж',
          title: 'Ключевые серии Prosense',
          desc: 'SIL · M1 · EN-50545-1 · MPS — WhatsApp или форма запроса для каждого продукта.'
        },
        catalog: {
          eyebrow: 'Полный каталог',
          title: 'Все серии продукции Prosense',
          desc: '8 категорий — более 60 серий — стационарные, портативные, пламя, панели, паркинг, ПО и калибровка'
        },
        iran: {
          eyebrow: 'Отраслевое применение',
          title: 'Prosense в типовых отраслях',
          desc: 'Если вашей отрасли нет в списке — пришлите тип газа и условия монтажа, подберём подходящую модель.'
        },
        industries: {
          eyebrow: 'Глобальные отрасли',
          title: 'Применение в разных отраслях',
          desc: 'Индивидуальное решение газового детектирования для каждого промышленного сектора'
        },
        supply: {
          eyebrow: 'Поставки Bizdavar',
          title: 'Услуги поставки Prosense',
          desc: 'Ваш партнёр по поставкам — не просто поставщик'
        },
        faq: {
          eyebrow: 'FAQ',
          title: 'Частые вопросы покупателей',
          desc: 'Не нашли ответ? Напишите нам в WhatsApp.'
        }
      },
      officialNote: 'Технические данные основаны на <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">официальном сайте Prosense</a>. Для цены и поставки — <a href="contact">свяжитесь с Bizdavar</a> · <a href="vega">продукция VEGA</a>',
      cta: {
        title: 'Готовы запросить цену Prosense?',
        desc: 'Пришлите тип газа или серию модели — PQ · SafeVader · SOMA · PPS+ · панель S-DPX',
        btnForm: 'Форма запроса',
        btnServices: 'Каталог продуктов'
      },
      sticky: { label: 'Запрос Prosense', hint: 'Многоязычная техконсультация · быстрый ответ' },
      geoText: 'Оригинальные поставки детекторов Prosense — сертификаты SIL/M1/EN, консультация в WhatsApp и логистика для нефтегазовых и промышленных проектов.',
      related: [
        { title: 'Продукция VEGA', desc: 'Датчики уровня и давления' },
        { title: 'Teltonika GPS', desc: 'Fleet Telematics' },
        { title: 'Промышленные услуги', desc: 'B2B-консультации' },
        { title: 'Контакты', desc: 'Запрос цены' }
      ]
    },
    ar: {
      sections: {
        trust: {
          eyebrow: 'لماذا Bizdavar؟',
          title: 'توريد موثوق لـ Prosense لفرقك الفنية والمشتريات',
          desc: 'نحن لا نعرض كتالوجاً فحسب — نرافقك من اختيار الغاز والموديل حتى التسليم.'
        },
        buy: {
          eyebrow: 'مسار الشراء',
          title: 'من الاستعلام إلى التسليم — 5 خطوات واضحة',
          desc: 'بدون تعقيد — تعرف كل خطوة وتبقى على تواصل طوال العملية.'
        },
        quote: {
          eyebrow: 'دليل الاستعلام',
          title: 'استعلام أوضح = توصية أسرع',
          desc: 'أرسل قائمة التحقق أدناه عبر واتساب أو نموذج الاتصال — حتى التفاصيل الجزئية تساعد.'
        },
        highlights: {
          eyebrow: 'الأكثر طلباً',
          title: 'سلاسل Prosense المميزة',
          desc: 'SIL · M1 · EN-50545-1 · MPS — واتساب أو نموذج استعلام لكل منتج.'
        },
        catalog: {
          eyebrow: 'الكتالوج الكامل',
          title: 'جميع سلاسل منتجات Prosense',
          desc: '8 فئات — أكثر من 60 سلسلة — ثابت ومحمول ولهب ولوحات ومواقف وبرمجيات ومعايرة'
        },
        iran: {
          eyebrow: 'تطبيقات صناعية',
          title: 'Prosense عبر الصناعات الشائعة',
          desc: 'إذا لم يكن قطاعك مدرجاً — أرسل نوع الغاز وبيئة التركيب وسنقترح الموديل المناسب.'
        },
        industries: {
          eyebrow: 'صناعات عالمية',
          title: 'التطبيق عبر الصناعات',
          desc: 'حل كشف غاز مخصص لكل قطاع صناعي'
        },
        supply: {
          eyebrow: 'توريد Bizdavar',
          title: 'خدمات توريد Prosense',
          desc: 'شريك التوريد — وليس مجرد بائع'
        },
        faq: {
          eyebrow: 'الأسئلة الشائعة',
          title: 'أسئلة المشترين الشائعة',
          desc: 'لم تجد إجابتك؟ راسلنا على واتساب.'
        }
      },
      officialNote: 'المعلومات الفنية مستندة إلى <a href="https://www.prosense.com.tr/?lang=tr" target="_blank" rel="noopener noreferrer">الموقع الرسمي لـ Prosense</a>. للتسعير والتوريد — <a href="contact">تواصل مع Bizdavar</a> · <a href="vega">منتجات VEGA</a>',
      cta: {
        title: 'هل أنت مستعد لطلب عرض سعر Prosense؟',
        desc: 'أرسل نوع الغاز أو سلسلة الموديل — PQ · SafeVader · SOMA · PPS+ · لوحة S-DPX',
        btnForm: 'نموذج الاستعلام',
        btnServices: 'كتالوج المنتجات'
      },
      sticky: { label: 'استعلام Prosense', hint: 'استشارة فنية متعددة اللغات · رد سريع' },
      geoText: 'توريد أصلي لكواشف Prosense — شهادات SIL/M1/EN واستشارة واتساب ولوجستيات لمشاريع النفط والغاز والصناعة.',
      related: [
        { title: 'منتجات VEGA', desc: 'حساسات مستوى وضغط' },
        { title: 'Teltonika GPS', desc: 'Fleet Telematics' },
        { title: 'خدمات صناعية', desc: 'استشارات B2B' },
        { title: 'اتصل بنا', desc: 'استعلام سعر' }
      ]
    }
  };

  var supplyBrandRu = {
    inquiryCta: 'Запрос цены и поставки',
    whyBuyCta: 'Почему Bizdavar?',
    quoteGuideCta: 'Чек-лист запроса',
    whatsappInquiry: 'Запрос в WhatsApp',
    whatsappShort: 'WhatsApp',
    requestInquiry: 'Запросить цену',
    inquiryCategory: 'Запрос по этой категории',
    inquirySeries: 'Запрос',
    useCaseLabel: 'Применение:',
    approxPrice: 'примерно',
    priceFrom: 'от',
    catalogSearch: 'Поиск в каталоге…',
    catalogSearchEmpty: 'По этому запросу ничего не найдено.',
    priceSellLabel: 'Цена продажи',
    techConsultCta: 'Запросить техконсультацию',
    navTrust: 'Почему Bizdavar',
    navBuy: 'Путь покупки',
    navQuote: 'Гид по запросу',
    navHighlights: 'Избранные продукты',
    navIran: 'Применение',
    navFaq: 'FAQ',
    navAria: 'Категории продуктов поставок',
    inquiryTemplate: 'Запрос: {product}',
    officialCatalog: 'Официальный каталог',
    orderCodeCta: 'Запрос кода заказа'
  };

  var supplyBrandAr = {
    inquiryCta: 'طلب السعر والتوريد',
    whyBuyCta: 'لماذا Bizdavar؟',
    quoteGuideCta: 'قائمة الاستعلام',
    whatsappInquiry: 'استعلام عبر واتساب',
    whatsappShort: 'واتساب',
    requestInquiry: 'طلب عرض سعر',
    inquiryCategory: 'استعلام هذه الفئة',
    inquirySeries: 'استعلام',
    useCaseLabel: 'الاستخدام:',
    approxPrice: 'تقريباً',
    priceFrom: 'من',
    catalogSearch: 'البحث في الكتالوج…',
    catalogSearchEmpty: 'لا توجد منتجات مطابقة.',
    priceSellLabel: 'سعر البيع',
    techConsultCta: 'طلب استشارة فنية',
    navTrust: 'لماذا Bizdavar',
    navBuy: 'مسار الشراء',
    navQuote: 'دليل الاستعلام',
    navHighlights: 'منتجات مميزة',
    navIran: 'الاستخدامات',
    navFaq: 'الأسئلة',
    navAria: 'فئات منتجات التوريد',
    inquiryTemplate: 'استعلام: {product}',
    officialCatalog: 'الكتالوج الرسمي',
    orderCodeCta: 'طلب رمز الطلب'
  };

  /* ─── Russian ─── */
  var ru = clone(window.BIZDAVAR_LOCALES.en);
  ru.lang = 'ru';
  ru.dir = 'ltr';
  ru.localeTag = 'ru_RU';
  ru.siteName = 'Bizdavar Group';
  deepMerge(ru.common, Object.assign({}, commonLang, {
    langLabel: 'Язык',
    breadcrumbAria: 'Навигация',
    inquiry: 'Запросить цену',
    contactForm: 'Форма связи',
    rights: 'Все права защищены',
    skipLink: 'Перейти к основному содержимому',
    freeConsult: 'Бесплатная консультация',
    contact: 'Контакты',
    menu: 'Меню',
    whatsapp: 'WhatsApp',
    homeAria: 'Главная',
    mainNav: 'Главное меню',
    relatedPages: 'Связанные страницы',
    learnMore: 'Подробнее',
    readMore: 'Читать далее',
    viewAll: 'Смотреть всё',
    backToTop: 'Наверх',
    details: 'Подробности',
    view: 'Смотреть'
  }));
  deepMerge(ru.nav, {
    home: 'Главная',
    about: 'О нас',
    services: 'Услуги',
    products: 'Продукты',
    portfolio: 'Портфолио',
    blog: 'Блог',
    contact: 'Контакты',
    webDesign: 'Веб-дизайн',
    servicesAll: 'Все услуги',
    productsCatalog: 'Весь каталог'
  });
  deepMerge(ru.footer, {
    tagline: 'Цифровые услуги, веб-дизайн, онлайн-маркетинг и промышленные поставки.',
    services: 'Услуги',
    quickLinks: 'Быстрые ссылки',
    brands: 'Бренды',
    connect: 'Связь',
    contactUs: 'Связаться',
    faq: 'FAQ',
    privacy: 'Конфиденциальность',
    digitalMarketing: 'Цифровой маркетинг',
    webFast: 'Веб — Fast Studio',
    smm: 'SMM',
    industrial: 'Промышленные поставки',
    webDesign: 'Веб-дизайн',
    softwareApps: 'Приложения и системы',
    serverOps: 'Управление серверами',
    fieldTech: 'Технические услуги',
    industrialShort: 'Промышленность'
  });
  deepMerge(ru.services, {
    digitalMarketing: 'Цифровой маркетинг',
    webDesign: 'Веб-дизайн и web app',
    smm: 'SMM',
    softwareApps: 'Приложения и системы',
    serverOps: 'Управление серверами',
    fieldTech: 'Технические услуги',
    industrial: 'Промышленные поставки'
  });
  deepMerge(ru.supplyBrand, supplyBrandRu);
  deepMerge(ru.home, homeRu);
  deepMerge(ru, homeSectionsRu);
  if (!ru.pages) ru.pages = {};
  deepMerge(ru.pages, pageSeoRu);
  ru.liquiMolyPage = liquiPage.ru;
  ru.vegaPage = vegaPage.ru;
  ru.prosensePage = prosensePage.ru;
  if (ru.contact) {
    ru.contact.whatsappMessage = 'Здравствуйте, пишу с сайта bizdavar.com.';
    ru.contact.channelIr = 'WhatsApp';
    ru.contact.channelTr = 'Турция';
    ru.contact.address = 'Стамбул, Турция';
    ru.contact.workingHours = '24/7 — всегда на связи';
  }
  if (ru.geo) {
    ru.geo.summary = 'Услуги из Стамбула для Ирана, Турции и 11 стран — многоязычная поддержка, WhatsApp и международная доставка.';
  }
  if (ru.seo) {
    ru.seo.defaultTitle = pageSeoRu.home.seoTitle;
    ru.seo.defaultDescription = pageSeoRu.home.seoDescription;
  }

  /* ─── Arabic (RTL) ─── */
  var ar = clone(window.BIZDAVAR_LOCALES.en);
  ar.lang = 'ar';
  ar.dir = 'rtl';
  ar.localeTag = 'ar_AE';
  ar.siteName = 'Bizdavar Group';
  deepMerge(ar.common, Object.assign({}, commonLang, {
    langLabel: 'اللغة',
    breadcrumbAria: 'مسار الصفحة',
    inquiry: 'طلب عرض سعر',
    contactForm: 'نموذج الاتصال',
    rights: 'جميع الحقوق محفوظة',
    skipLink: 'الانتقال إلى المحتوى الرئيسي',
    freeConsult: 'استشارة مجانية',
    contact: 'اتصل بنا',
    menu: 'القائمة',
    whatsapp: 'واتساب',
    homeAria: 'الصفحة الرئيسية',
    mainNav: 'القائمة الرئيسية',
    relatedPages: 'صفحات ذات صلة',
    learnMore: 'اعرف المزيد',
    readMore: 'اقرأ المزيد',
    viewAll: 'عرض الكل',
    backToTop: 'العودة للأعلى',
    details: 'التفاصيل',
    view: 'عرض'
  }));
  deepMerge(ar.nav, {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    products: 'المنتجات',
    portfolio: 'الأعمال',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    webDesign: 'تصميم المواقع',
    servicesAll: 'كل الخدمات',
    productsCatalog: 'كل المنتجات'
  });
  deepMerge(ar.footer, {
    tagline: 'خدمات رقمية وتصميم مواقع وتسويق عبر الإنترنت وتوريد معدات صناعية.',
    services: 'الخدمات',
    quickLinks: 'روابط سريعة',
    brands: 'العلامات',
    connect: 'تواصل',
    contactUs: 'اتصل بنا',
    faq: 'الأسئلة',
    privacy: 'الخصوصية',
    digitalMarketing: 'التسويق الرقمي',
    webFast: 'تصميم ويب — Fast Studio',
    smm: 'إدارة SMM',
    industrial: 'توريد صناعي',
    webDesign: 'تصميم الويب',
    softwareApps: 'تطبيقات وأنظمة',
    serverOps: 'إدارة الخوادم',
    fieldTech: 'خدمات فنية',
    industrialShort: 'صناعي'
  });
  deepMerge(ar.services, {
    digitalMarketing: 'التسويق الرقمي',
    webDesign: 'تصميم ويب وweb app',
    smm: 'إدارة SMM',
    softwareApps: 'تطبيقات وأنظمة',
    serverOps: 'إدارة الخوادم',
    fieldTech: 'خدمات فنية',
    industrial: 'توريد صناعي'
  });
  deepMerge(ar.supplyBrand, supplyBrandAr);
  deepMerge(ar.home, homeAr);
  deepMerge(ar, homeSectionsAr);
  if (!ar.pages) ar.pages = {};
  deepMerge(ar.pages, pageSeoAr);
  ar.liquiMolyPage = liquiPage.ar;
  ar.vegaPage = vegaPage.ar;
  ar.prosensePage = prosensePage.ar;
  if (ar.contact) {
    ar.contact.whatsappMessage = 'مرحباً، أراسل من موقع bizdavar.com.';
    ar.contact.channelIr = 'واتساب';
    ar.contact.channelTr = 'تركيا';
    ar.contact.address = 'إسطنبول، تركيا';
    ar.contact.workingHours = 'على مدار الساعة';
  }
  if (ar.geo) {
    ar.geo.summary = 'خدمات من إسطنبول إلى إيران وتركيا و١١ دولة — دعم متعدد اللغات وواتساب وتسليم دولي.';
  }
  if (ar.seo) {
    ar.seo.defaultTitle = pageSeoAr.home.seoTitle;
    ar.seo.defaultDescription = pageSeoAr.home.seoDescription;
  }

  window.BIZDAVAR_LOCALES.ru = ru;
  window.BIZDAVAR_LOCALES.ar = ar;
})();
