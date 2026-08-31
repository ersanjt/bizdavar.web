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
      seoTitle: 'Английские сайты для США и ЕС от $99 | Bizdavar',
      seoDescription: 'Английский LTR и реклама Google/Meta для США и ЕС — счёт в USD или EUR, от $99 / ~€90. Zoom/Meet и Fast Studio. Поставки в Иран — отдельный путь.',
      seoKeywords: 'веб-дизайн США, веб-дизайн ЕС, сайт от $99, цифровой маркетинг USD, Fast Web Studio, Bizdavar'
    },
    about: {
      crumb: 'О нас',
      seoTitle: 'О Bizdavar | цифровые услуги и промышленные поставки с 2013',
      seoDescription: 'Bizdavar Group с 2013 — веб-дизайн, цифровой маркетинг, продукты FXGuard и поставки VEGA, Prosense и Liqui Moly в 11 странах.',
      seoKeywords: 'о Bizdavar, цифровое агентство, промышленные поставки'
    },
    gallery: {
      crumb: 'Галерея',
      seoTitle: 'Фотогалерея Bizdavar | выставки, производство и R&D',
      seoDescription: 'Реальные фото Bizdavar: стенд Imen Sahand Padideh, инкубатор Университета Тебриза, линия сборки и R&D нагревательного мата BizPet.',
      seoKeywords: 'галерея Bizdavar, выставка Imen Sahand Padideh, инкубатор Тебриз, BizPet'
    },
    services: {
      crumb: 'Услуги',
      seoTitle: 'Веб-дизайн для США и ЕС | от $99 — Bizdavar',
      seoDescription: 'Английские сайты, web app и маркетинг для клиентов в США и ЕС. Счёт в USD или EUR. Сайт за 5 дней от $99 / ~€90, Stripe, пересечение CET/EST. Бесплатная оценка.',
      seoKeywords: 'веб-дизайн США, веб-дизайн ЕС, сайт от $99, EUR web design, Fast Web Studio, Bizdavar'
    },
    fieldTech: {
      crumb: 'Технические услуги',
      seoTitle: 'Технические услуги | CCTV, проводка и скрытое освещение — Тебриз',
      seoDescription: 'Установка CCTV, проводка и скрытое освещение в Тебризе — осмотр, план, монтаж и гарантия. WhatsApp техслужбы: +98 936 411 5151.',
      seoKeywords: 'CCTV Тебриз, проводка, скрытое освещение, Bizdavar'
    },
    products: {
      crumb: 'Продукты',
      seoTitle: 'Купить VEGA, Prosense и FXGuard | продукты Bizdavar',
      seoDescription: 'Каталог Bizdavar: датчики VEGA, детекторы Prosense, Liqui Moly, Teltonika и FXGuard WhatsApp CRM. Прозрачная цена и расчёт в WhatsApp.',
      seoKeywords: 'купить VEGA, Prosense, FXGuard, Fast Web Studio, Liqui Moly, Bizdavar'
    },
    contact: {
      crumb: 'Контакты',
      seoTitle: 'Расчёт сайта USD/EUR или поставка в Иран | Bizdavar',
      seoDescription: 'Английский сайт и реклама — Zoom/Meet, счёт в USD или EUR. VEGA, Prosense и Gamak для Ирана по-прежнему через WhatsApp.',
      seoKeywords: 'расчёт сайта USD, счёт EUR, веб-дизайн США, запрос VEGA, Bizdavar'
    },
    liquiMoly: {
      crumb: 'Продукция Liqui Moly',
      seoTitle: 'Купить Liqui Moly | моторные масла и присадки | Bizdavar',
      seoDescription: 'Bizdavar Group поставляет оригинальную Liqui Moly: моторные масла, Octane Plus, дизельные присадки, антифриз и автохимию. Прозрачные цены в USD и многоязычная консультация.',
      seoKeywords: 'Liqui Moly купить, моторное масло Liqui Moly, Octane Plus, Top Tec, Molygen, присадка в бензин, антифриз, Bizdavar'
    },
    vega: {
      crumb: 'Продукция VEGA',
      seoTitle: 'Купить датчики VEGA | VEGAPULS — расчёт',
      seoDescription: 'VEGAPULS 6X, VEGAPULS C 11, VEGABAR 39 и VEGAPOINT оригинал до проекта в Иране. Точный order code, прозрачная проформа и консультация в WhatsApp.',
      seoKeywords: 'купить VEGA, VEGAPULS 6X, VEGAPULS C 11, VEGAPULS C 23, VEGAPULS 11, VEGAPULS 21, VEGAPULS 31, VEGABAR 39, VEGASWING 51, VEGAPOINT, датчик уровня, Bizdavar'
    },
    uwt: {
      crumb: 'Продукция UWT',
      seoTitle: 'Купить датчики уровня UWT | Rotonivo и NivoRadar — Bizdavar',
      seoDescription: 'Оригинальные уровнемеры UWT Германия для силосов и резервуаров. Rotonivo, Vibranivo, NivoRadar и NivoGuide — консультация, проформа и логистика — Bizdavar Group.',
      seoKeywords: 'UWT, Rotonivo, NivoRadar, Vibranivo, датчик уровня силоса, Bizdavar'
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
      seoTitle: 'Английский сайт за 5 дней от $99 / ~€90 | Fast Web Studio',
      seoDescription: 'Корпоративный, магазин и лендинг для бизнеса США и ЕС за 5 рабочих дней. $99 / $199 / $299 — Stripe, хостинг с учётом GDPR, счёт USD или EUR.',
      seoKeywords: 'сайт за 5 дней, веб-дизайн США, веб-дизайн ЕС, Fast Web Studio, Stripe, Bizdavar'
    },
    blog: {
      crumb: 'Блог',
      seoTitle: 'Блог Bizdavar | сайты US/EU, реклама и поставки',
      seoDescription: 'Английские сайты со счётом USD/EUR, кампании Google/Meta, Fast Studio — плюс оригинальная поставка VEGA в Иран.',
      seoKeywords: 'блог Bizdavar, веб-дизайн США, цифровой маркетинг ЕС, Fast Web Studio, VEGA Иран'
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
    marvispace: {
      crumb: 'MarviSpace',
      seoTitle: 'Кейс магазина кожаных изделий | разработка и веб-дизайн — Bizdavar',
      seoDescription: 'Кейс программирования и дизайна интернет-магазина кожи: каталог, корзина и админ-панель — marvispace.com — Bizdavar Group.',
      seoKeywords: 'магазин кожи, разработка e-commerce, кейс веб-дизайна, MarviSpace, Bizdavar'
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
    marviSociety: {
      crumb: 'Marvi Society',
      seoTitle: 'Кейс iOS-приложения | Marvi Society — Bizdavar',
      seoDescription: 'Кейс разработки iOS: Marvi Society — закрытый клуб, связывающий креаторов с площадками Стамбула. Дизайн, разработка и публикация в App Store — Bizdavar.',
      seoKeywords: 'iOS приложение, App Store, Marvi Society, мобильная разработка, Bizdavar'
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
    bizseat: {
      crumb: 'BizSeat',
      seoTitle: 'BizSeat — это BizPet | нагревательный мат',
      seoDescription: 'BizSeat не отдельный продукт: это торговое имя того же нагревательного мата BizPet 1399. Основная страница — BizPet.',
      seoKeywords: 'BizSeat, BizPet, нагревательный мат, Bizdavar, Digikala'
    },
    bizpet: {
      crumb: 'BizPet',
      seoTitle: 'BizPet | нагревательный мат — основной продукт 1399',
      seoDescription: 'BizPet — основной нагревательный мат Padideh для дома, автокресла и лежанки животных. Карточка Digikala — тот же товар.',
      seoKeywords: 'BizPet, нагревательный мат, Padideh, Университет Тебриза, Imen Sahand Padideh, Bizdavar'
    },
    fxguard: {
      crumb: 'FXGuard',
      seoTitle: 'FXGuard | котируйте курс в WhatsApp — от $49/мес — Bizdavar',
      seoDescription: 'FXGuard — панель обменных, переводных и финансовых столов на корпоративном WhatsApp. Cloud Start $49/мес, Business от $249 с пакетом FX, лицензия от $4 000. Демо с гидом — без общего пароля.',
      seoKeywords: 'FXGuard, WhatsApp CRM, обмен, курсы, Bizdavar, fxguard.io'
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
      seoDescription: 'Что такое цифровой маркетинг: SEO, Google Ads, SMM, контент и измерение лидов — путь Bizdavar для Ирана и Турции.',
      seoKeywords: 'что такое цифровой маркетинг, SEO, Google Ads, SMM, CRO, Bizdavar'
    },
    articleSmm: {
      crumb: 'SMM',
      seoTitle: 'Управление соцсетями (SMM) | Bizdavar',
      seoDescription: 'Стратегия SMM: контент, календарь публикаций, дизайн и таргетированная реклама. Руководство Bizdavar Group.',
      seoKeywords: 'SMM, управление соцсетями, Instagram, LinkedIn, Bizdavar'
    },
    articleFastStudio: {
      crumb: 'Fast Studio',
      seoTitle: 'Английский сайт за 5 дней — Fast Studio для США и ЕС | Bizdavar',
      seoDescription: 'Fast Web Studio от $99 / ~€90: английский LTR, Stripe, Zoom/Meet и счёт в USD или EUR.',
      seoKeywords: 'Fast Web Studio, сайт за 5 дней, веб-дизайн США, счёт EUR, Bizdavar'
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
      seoTitle: 'Оригинальная поставка VEGA для проектов в Иране | Bizdavar',
      seoDescription: 'Как закупить оригинальные датчики VEGA для проектов в Иране — консультация, код заказа, проформа и логистика до объекта. Bizdavar Group.',
      seoKeywords: 'купить VEGA Иран, поставка VEGA, VEGAPULS, Bizdavar'
    },
    articleBuyVegapulsIran: {
      crumb: 'VEGAPULS 6X',
      seoTitle: 'Купить VEGAPULS 6X в Иране | расчёт',
      seoDescription: 'Оригинальный VEGAPULS 6X для резервуаров в Иране: код заказа, проформа и логистика — Bizdavar.',
      seoKeywords: 'купить VEGAPULS 6X, радарный уровнемер, VEGA Иран, Bizdavar'
    },
    articleVegaQuoteIran: {
      crumb: 'Запрос VEGA',
      seoTitle: 'Запрос цены VEGA в Иране | чек-лист',
      seoDescription: 'Что прислать для проформы VEGA: резервуар, среда, Ex/SIL и фото шильдика.',
      seoKeywords: 'запрос VEGA, VEGABAR, проформа, Bizdavar'
    },
    articleBuyProsenseIran: {
      crumb: 'Prosense Иран',
      seoTitle: 'Купить Prosense в Иране | PQ и SafeVader',
      seoDescription: 'Оригинальные газовые детекторы Prosense для нефти и HVAC в Иране — SIL и WhatsApp.',
      seoKeywords: 'купить Prosense, газовый детектор, PQ, Bizdavar'
    },
    articleIndustrialTradeIran: {
      crumb: 'Промторговля',
      seoTitle: 'Промышленная торговля в Иране | VEGA и Prosense',
      seoDescription: 'Оригинальные поставки КИП, газовой безопасности, GPS и масел для Ирана.',
      seoKeywords: 'промторговля Иран, VEGA Prosense, Bizdavar'
    },
    articleBuyTeltonikaIran: {
      crumb: 'Teltonika Иран',
      seoTitle: 'Купить Teltonika FMB920 в Иране | от $29',
      seoDescription: 'Оригинальный GPS Teltonika для автопарков Ирана: FMB920 от $29, FMC650 и DualCam.',
      seoKeywords: 'купить Teltonika Иран, FMB920, GPS, Bizdavar'
    },
    articleBuyGamakIran: {
      crumb: 'Gamak Иран',
      seoTitle: 'Купить двигатель Gamak в Иране | кВт и фланец',
      seoDescription: 'Оригинальный Gamak для насосов и линий в Иране: кВт, об/мин, B3/B5 и IE — проформа.',
      seoKeywords: 'купить Gamak Иран, IE3, фланец B5, Bizdavar'
    },
    articleBuyDigiIran: {
      crumb: 'Digi Иран',
      seoTitle: 'Купить весы Digi System в Иране | POS',
      seoDescription: 'Оригинальные весы и POS Digi для магазинов Ирана: тип магазина и число касс.',
      seoKeywords: 'купить Digi Иран, POS весы, Bizdavar'
    },
    articleBuyTeraokaIran: {
      crumb: 'Teraoka Иран',
      seoTitle: 'Купить весы Teraoka в Иране | deli и POS',
      seoDescription: 'Оригинальные весы Teraoka Seiko для магазинов Ирана — тип, грузоподъёмность, проформа.',
      seoKeywords: 'купить Teraoka Иран, deli весы, Bizdavar'
    },
    articleWebsiteDesignUsEu: {
      crumb: 'Веб-дизайн США и ЕС',
      seoTitle: 'Английский веб-дизайн для США и ЕС | от $99',
      seoDescription: 'Как заказать английский сайт: тарифы от $99 / ~€90, Stripe, Zoom/Meet и счёт в USD или EUR — Bizdavar.',
      seoKeywords: 'веб-дизайн США, веб-дизайн ЕС, сайт от $99, Fast Web Studio, Bizdavar'
    },
    articleDigitalMarketingUsEu: {
      crumb: 'Маркетинг США/ЕС',
      seoTitle: 'Маркетинг для США и ЕС | бюджет USD и EUR',
      seoDescription: 'Google Ads, Meta и LinkedIn для аудиторий США/ЕС — счёт в USD или EUR, английский лендинг и GA4.',
      seoKeywords: 'Google Ads ЕС, маркетинг США, LinkedIn Ads, Bizdavar'
    },
    articleMultilingualWeb: {
      crumb: 'Многоязычный сайт',
      seoTitle: 'Многоязычные сайты для Ирана и Турции | Bizdavar',
      seoDescription: 'Сайты fa/tr/en с hreflang и локальным доверием — гайд Bizdavar для бизнеса на двух рынках.',
      seoKeywords: 'многоязычный сайт, hreflang, Bizdavar'
    }
  };

  var pageSeoAr = {
    home: {
      crumb: 'الرئيسية',
      seoTitle: 'مواقع إنجليزية لأمريكا وأوروبا من ٩٩$ | Bizdavar',
      seoDescription: 'مواقع إنجليزية LTR وإعلانات Google/Meta لأمريكا وأوروبا — فاتورة USD أو EUR من ٩٩$ / ~€90. Zoom/Meet وFast Studio. توريد إيران مسار منفصل.',
      seoKeywords: 'تصميم مواقع أمريكا, تصميم مواقع أوروبا, موقع من 99 دولار, تسويق رقمي USD, Fast Web Studio, بيزدوار'
    },
    about: {
      crumb: 'من نحن',
      seoTitle: 'عن Bizdavar | خدمات رقمية وتوريد صناعي منذ ٢٠١٣',
      seoDescription: 'Bizdavar Group منذ ٢٠١٣ — تصميم مواقع، تسويق رقمي، منتجات FXGuard وتوريد VEGA وProsense وLiqui Moly في ١١ دولة.',
      seoKeywords: 'عن Bizdavar, وكالة رقمية, توريد صناعي'
    },
    gallery: {
      crumb: 'معرض الصور',
      seoTitle: 'معرض صور بيزدوار | معارض وإنتاج وبحث',
      seoDescription: 'صور حقيقية لبيزدوار: جناح إيمن سهند پديده، حاضنة جامعة تبريز، خط الإنتاج وأبحاث حصيرة BizPet الحرارية.',
      seoKeywords: 'معرض بيزدوار, معرض إيمن سهند پديده, حاضنة تبريز, BizPet'
    },
    services: {
      crumb: 'الخدمات',
      seoTitle: 'تصميم مواقع لأمريكا وأوروبا | من ٩٩$ — Bizdavar',
      seoDescription: 'مواقع إنجليزية وويب آب وتسويق رقمي لعملاء US/EU بفاتورة دولار أو يورو. موقع خلال ٥ أيام من ٩٩$ / ~€90 وStripe وتداخل CET/EST. عرض مجاني.',
      seoKeywords: 'تصميم مواقع أمريكا, تصميم مواقع أوروبا, موقع من 99 دولار, Fast Web Studio, Bizdavar'
    },
    fieldTech: {
      crumb: 'خدمات فنية',
      seoTitle: 'خدمات فنية | كاميرات وتمديدات وإضاءة مخفية — تبريز',
      seoDescription: 'تركيب كاميرات مراقبة وتمديدات وإضاءة مخفية في تبريز — معاينة وخطة وتركيب مع ضمان. واتساب فني: +98 936 411 5151.',
      seoKeywords: 'كاميرات تبريز, تمديدات, إضاءة مخفية, Bizdavar'
    },
    products: {
      crumb: 'المنتجات',
      seoTitle: 'شراء VEGA وProsense وFXGuard | منتجات Bizdavar',
      seoDescription: 'كتالوج Bizdavar: حساسات VEGA وكواشف Prosense وLiqui Moly وTeltonika وFXGuard WhatsApp CRM. سعر واضح وعرض واتساب.',
      seoKeywords: 'شراء VEGA, Prosense, FXGuard, Fast Web Studio, Liqui Moly, Bizdavar'
    },
    contact: {
      crumb: 'اتصل بنا',
      seoTitle: 'عرض موقع USD/EUR أو توريد إيران | Bizdavar',
      seoDescription: 'عرض موقع وإعلانات إنجليزية — Zoom/Meet وفاتورة USD أو EUR. VEGA وProsense وGamak لإيران ما زالت عبر واتساب.',
      seoKeywords: 'عرض موقع USD, فاتورة EUR, تصميم مواقع أمريكا, استعلام VEGA, بيزدوار'
    },
    liquiMoly: {
      crumb: 'منتجات Liqui Moly',
      seoTitle: 'شراء Liqui Moly | زيوت المحرك وإضافات الوقود | Bizdavar',
      seoDescription: 'مجموعة Bizdavar تورّد منتجات Liqui Moly الأصلية: زيوت المحرك، Octane Plus، إضافات الديزل، مضاد التجمد والعناية بالسيارة. أسعار شفافة بالدولار واستشارة متعددة اللغات.',
      seoKeywords: 'شراء Liqui Moly, زيت محرك Liqui Moly, Octane Plus, Top Tec, Molygen, إضافات بنزين, مضاد تجمد, بيزدوار, Bizdavar'
    },
    vega: {
      crumb: 'منتجات VEGA',
      seoTitle: 'شراء حساسات VEGA | عرض VEGAPULS',
      seoDescription: 'VEGAPULS 6X وVEGAPULS C 11 وVEGABAR 39 وVEGAPOINT أصلية إلى مشروعك في إيران. رمز طلب دقيق وفاتورة مبدئية واستشارة عبر واتساب.',
      seoKeywords: 'شراء VEGA, VEGAPULS 6X, VEGAPULS C 11, VEGAPULS C 23, VEGAPULS 11, VEGAPULS 21, VEGAPULS 31, VEGABAR 39, VEGASWING 51, VEGAPOINT, حساس مستوى, Bizdavar'
    },
    uwt: {
      crumb: 'منتجات UWT',
      seoTitle: 'شراء حساسات مستوى UWT | Rotonivo وNivoRadar — Bizdavar',
      seoDescription: 'حساسات مستوى UWT الألمانية الأصلية للصوامع والخزانات. Rotonivo وVibranivo وNivoRadar وNivoGuide — استشارة وفاتورة مبدئية ولوجستيات — Bizdavar Group.',
      seoKeywords: 'UWT, Rotonivo, NivoRadar, Vibranivo, حساس مستوى صومعة, Bizdavar'
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
      seoTitle: 'موقع إنجليزي خلال ٥ أيام من ٩٩$ / ~€90 | Fast Web Studio',
      seoDescription: 'موقع شركات ومتجر ولاندينغ لأعمال أمريكا وأوروبا خلال ٥ أيام عمل. $99 / $199 / $299 — Stripe واستضافة تراعي GDPR وفاتورة USD أو EUR.',
      seoKeywords: 'تصميم مواقع ٥ أيام, تصميم مواقع أمريكا, تصميم مواقع أوروبا, Fast Web Studio, Stripe, Bizdavar'
    },
    blog: {
      crumb: 'المدونة',
      seoTitle: 'مدونة Bizdavar | مواقع US/EU وإعلانات وتوريد صناعي',
      seoDescription: 'مواقع إنجليزية بفاتورة USD/EUR وحملات Google/Meta وFast Studio — مع توريد VEGA الأصلي لإيران.',
      seoKeywords: 'مدونة Bizdavar, تصميم مواقع أمريكا, تسويق رقمي أوروبا, Fast Web Studio, VEGA إيران'
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
    marvispace: {
      crumb: 'MarviSpace',
      seoTitle: 'نموذج متجر جلدي | برمجة وتصميم ويب — Bizdavar',
      seoDescription: 'نموذج برمجة وتصميم متجر إلكتروني للمنتجات الجلدية: كتالوج مخصص وسلة ولوحة إدارة — marvispace.com — Bizdavar Group.',
      seoKeywords: 'متجر جلدي, تطوير متجر إلكتروني, نموذج تصميم مواقع, MarviSpace, Bizdavar'
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
    marviSociety: {
      crumb: 'Marvi Society',
      seoTitle: 'نموذج تطبيق iOS | Marvi Society — Bizdavar',
      seoDescription: 'نموذج تطوير تطبيق iOS: Marvi Society — نادٍ بدعوة يربط صنّاع المحتوى بأماكن إسطنبول. تصميم وتطوير ونشر على App Store — Bizdavar.',
      seoKeywords: 'تطبيق iOS, App Store, Marvi Society, تطوير موبايل, Bizdavar'
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
    bizseat: {
      crumb: 'BizSeat',
      seoTitle: 'BizSeat هو BizPet | وسادة التدفئة',
      seoDescription: 'BizSeat ليس خطاً منفصلاً — إنه اسم بيع وسادة التدفئة BizPet لعام ١٣٩٩. الصفحة الرئيسية BizPet.',
      seoKeywords: 'BizSeat, BizPet, وسادة تدفئة, Bizdavar, ديجي‌كالا'
    },
    bizpet: {
      crumb: 'BizPet',
      seoTitle: 'BizPet | وسادة تدفئة — حاضنة تبريز التقنية',
      seoDescription: 'BizPet (بیز پت / پت بیز) — وسادة التدفئة پدیده. صُممت وأُنتجت في حاضنة التكنولوجيا بجامعة تبريز بالتعاون مع ایمن سهند پدیده. ٥–١٢ فولت، محمولة للمنزل والسيارة.',
      seoKeywords: 'BizPet, وسادة تدفئة, پدیده, جامعة تبريز, ایمن سهند پدیده, Bizdavar'
    },
    fxguard: {
      crumb: 'FXGuard',
      seoTitle: 'FXGuard | سعّر على واتساب — من ٤٩$/شهر — Bizdavar',
      seoDescription: 'FXGuard لوحة تشغيل لمكاتب الصرافة والحوالات والمالية على واتساب الشركة. Cloud Start ٤٩$/شهر، Business من ٢٤٩$ مع حزمة FX، ترخيص من ٤٬٠٠٠$. عرض موجَّه — بلا كلمة مرور عامة.',
      seoKeywords: 'FXGuard, WhatsApp CRM, صرافة, أسعار, Bizdavar, fxguard.io'
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
      seoDescription: 'ما هو التسويق الرقمي: سيو وإعلانات جوجل وSMM والمحتوى وقياس العملاء — مسار بيزدوار لإيران وتركيا.',
      seoKeywords: 'ما هو التسويق الرقمي, سيو, إعلانات جوجل, SMM, CRO, بيزدوار'
    },
    articleSmm: {
      crumb: 'SMM',
      seoTitle: 'إدارة وسائل التواصل (SMM) | Bizdavar',
      seoDescription: 'استراتيجية SMM: إنشاء محتوى، تقويم نشر، تصميم وإعلانات مستهدفة. دليل Bizdavar Group.',
      seoKeywords: 'SMM, إدارة وسائل التواصل, Instagram, LinkedIn, Bizdavar'
    },
    articleFastStudio: {
      crumb: 'Fast Studio',
      seoTitle: 'موقع إنجليزي خلال ٥ أيام — Fast Studio لأمريكا وأوروبا | Bizdavar',
      seoDescription: 'Fast Web Studio من ٩٩$ / ~€90: مواقع إنجليزية LTR وStripe وZoom وفاتورة USD أو EUR.',
      seoKeywords: 'Fast Web Studio, موقع خلال ٥ أيام, تصميم مواقع أمريكا, فاتورة يورو, بيزدوار'
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
      seoTitle: 'توريد VEGA الأصلي لمشاريع إيران | Bizdavar',
      seoDescription: 'كيف تشتري حساسات VEGA الأصلية لمشاريع إيران — استشارة ورمز طلب وفاتورة مبدئية ولوجستيات حتى موقع التركيب. Bizdavar Group.',
      seoKeywords: 'شراء VEGA إيران, توريد VEGA, VEGAPULS, Bizdavar'
    },
    articleBuyVegapulsIran: {
      crumb: 'VEGAPULS 6X',
      seoTitle: 'شراء VEGAPULS 6X في إيران | عرض سعر',
      seoDescription: 'VEGAPULS 6X أصلي لخزانات إيران: رمز الطلب وفاتورة مبدئية ولوجستيات — بيزدوار.',
      seoKeywords: 'شراء VEGAPULS 6X, حساس مستوى راداري, VEGA إيران, بيزدوار'
    },
    articleVegaQuoteIran: {
      crumb: 'استعلام VEGA',
      seoTitle: 'استعلام سعر VEGA في إيران | قائمة الشراء',
      seoDescription: 'ماذا ترسلون لفاتورة VEGA: الخزان والوسط وEx/SIL وصورة اللوحة.',
      seoKeywords: 'استعلام VEGA, VEGABAR, فاتورة مبدئية, بيزدوار'
    },
    articleBuyProsenseIran: {
      crumb: 'Prosense إيران',
      seoTitle: 'شراء Prosense في إيران | PQ وSafeVader',
      seoDescription: 'كواشف غاز Prosense الأصلية للنفط وHVAC في إيران — SIL وواتساب.',
      seoKeywords: 'شراء Prosense, كاشف غاز, PQ, بيزدوار'
    },
    articleIndustrialTradeIran: {
      crumb: 'تجارة صناعية',
      seoTitle: 'التجارة الصناعية في إيران | VEGA وProsense',
      seoDescription: 'توريد أصلي لأجهزة القياس وسلامة الغاز وGPS والزيوت لمشاريع إيران.',
      seoKeywords: 'تجارة صناعية إيران, VEGA Prosense, بيزدوار'
    },
    articleBuyTeltonikaIran: {
      crumb: 'Teltonika إيران',
      seoTitle: 'شراء Teltonika FMB920 في إيران | من ٢٩$',
      seoDescription: 'GPS أصلي من Teltonika لأساطيل إيران: FMB920 من ٢٩$ وFMC650 وDualCam.',
      seoKeywords: 'شراء Teltonika إيران, FMB920, GPS, بيزدوار'
    },
    articleBuyGamakIran: {
      crumb: 'Gamak إيران',
      seoTitle: 'شراء محرك Gamak في إيران | القدرة والشفة',
      seoDescription: 'محرك Gamak أصلي للمضخات والخطوط في إيران: كيلوواط ولفة وB3/B5 وفئة IE — فاتورة مبدئية.',
      seoKeywords: 'شراء Gamak إيران, IE3, شفة B5, بيزدوار'
    },
    articleBuyDigiIran: {
      crumb: 'Digi إيران',
      seoTitle: 'شراء موازين Digi System في إيران | POS',
      seoDescription: 'موازين وPOS أصلية من Digi لمتاجر إيران: نوع المتجر وعدد الصناديق.',
      seoKeywords: 'شراء Digi إيران, ميزان POS, بيزدوار'
    },
    articleBuyTeraokaIran: {
      crumb: 'Teraoka إيران',
      seoTitle: 'شراء موازين Teraoka في إيران | دلّي وPOS',
      seoDescription: 'موازين Teraoka Seiko أصلية لمتاجر إيران — النوع والسعة وفاتورة مبدئية.',
      seoKeywords: 'شراء Teraoka إيران, ميزان دلّي, بيزدوار'
    },
    articleWebsiteDesignUsEu: {
      crumb: 'تصميم ويب أمريكا وأوروبا',
      seoTitle: 'تصميم مواقع إنجليزية لأمريكا وأوروبا | من ٩٩$',
      seoDescription: 'كيف تطلب موقعاً إنجليزياً: باقات من ٩٩$ / ~€90 وStripe وZoom وفاتورة USD أو EUR — Bizdavar.',
      seoKeywords: 'تصميم مواقع أمريكا, تصميم مواقع أوروبا, موقع من 99 دولار, Fast Web Studio, بيزدوار'
    },
    articleDigitalMarketingUsEu: {
      crumb: 'تسويق أمريكا/أوروبا',
      seoTitle: 'تسويق رقمي لأمريكا وأوروبا | ميزانية دولار ويورو',
      seoDescription: 'إعلانات Google وMeta وLinkedIn لجمهور US/EU — فاتورة USD أو EUR وصفحات إنجليزية وGA4.',
      seoKeywords: 'إعلانات جوجل أوروبا, تسويق أمريكا, LinkedIn, بيزدوار'
    },
    articleMultilingualWeb: {
      crumb: 'موقع متعدد اللغات',
      seoTitle: 'مواقع متعددة اللغات لإيران وتركيا | Bizdavar',
      seoDescription: 'مواقع fa/tr/en مع hreflang وثقة محلية — دليل Bizdavar للأعمال ذات السوقين.',
      seoKeywords: 'موقع متعدد اللغات, hreflang, Bizdavar'
    }
  };

  var homeRu = {
    heroBadge: 'Bizdavar Group — с 2013',
    heroTitle: 'Bizdavar делает три отдельные вещи',
    heroTitleSpan: '',
    heroTitleEnd: '',
    heroDesc: 'Цифровые услуги для США и ЕС — английские сайты от $99, счёт в USD или EUR — или поставки в Иран. Сначала выберите путь.',
    intentNavLabel: 'Сайт, реклама или поставка в Иран',
    intentVega: 'Купить VEGA',
    intentLiqui: 'Liqui Moly',
    intentTeltonika: 'Teltonika GPS',
    intentGamak: 'Двигатель Gamak',
    intentDigi: 'Весы Digi',
    intentTeraoka: 'Весы Teraoka',
    viewSupply: 'Каталог поставок',
    intentProsense: 'Детектор Prosense',
    intentFast: 'Английский сайт от $99',
    intentQuote: 'Бесплатный расчёт',
    viewServices: 'Смотреть услуги',
    hero3dHint: 'Наведите на категории — гид смотрит на них · клик для входа',
    hero3dPanelKicker: 'Исследуйте Bizdavar',
    hero3dExplore: 'Перейти в раздел',
    hero3dClose: 'Закрыть',
    hero3dChipsAria: 'Категории 3D-шоурума',
    gatewayServicesTag: 'Цифровые и технические услуги',
    gatewayProductsTag: 'Свои продукты и промпоставки',
    gatewayServicesSubsAria: 'Подкатегории услуг',
    gatewayProductsSubsAria: 'Подкатегории продуктов',
    heroCard: 'Цифровой маркетинг · Веб-дизайн · Промышленность',
    statProjects: 'Цифровых проектов',
    statCountries: 'Активных стран',
    statYears: 'Лет опыта',
    featSectionTitle: 'Почему Bizdavar',
    featFast: 'Быстрая поставка',
    featFastDesc: 'Английские сайты от $99 / ~€90 за 5 дней',
    featGlobal: 'Глобальный охват',
    featGlobalDesc: 'Проекты в Иране, Турции и мире',
    featIndustrial: 'Промышленная экспертиза',
    featIndustrialDesc: 'VEGA, Prosense, Liqui Moly и КИП',
    featResults: 'Измеримый результат',
    featResultsDesc: 'Рост конверсии и бренда',
    svcEyebrow: 'Экспертные услуги',
    svcTitle: 'Комплексные решения Bizdavar Group',
    svcDesc: 'Шесть направлений — цифровые, софт и технический монтаж (Тебриз)',
    svcDmDesc: 'Стратегия, рекламные кампании, SEO и CRO для роста онлайн-продаж.',
    svcWebDesc: 'Корпоративные сайты, магазины и лендинги — быстрая сдача через Fast Web Studio.',
    svcSmmDesc: 'Контент, ведение страниц и таргетированная реклама в соцсетях.',
    svcAppsDesc: 'Android, iOS, веб-приложения и корпоративные системы.',
    svcServerDesc: 'Настройка, безопасность, бэкапы, мониторинг и миграция серверов.',
    svcFieldDesc: 'CCTV, проводка и скрытое освещение — Тебриз.',
    svcIndDesc: 'Датчики VEGA, детекторы Prosense, Liqui Moly, насосы и техконсультации.',
    svcPlans: 'Тарифы и цены',
    fastTitle: 'Профессиональный сайт за 5 дней!',
    fastDesc: 'Запуститесь на этой неделе — Fast Web Studio',
    fastBtn: 'Смотреть тарифы',
    aboutTag: 'О нас',
    aboutTitle: 'Bizdavar Group — партнёр роста вашего бизнеса',
    aboutP1: 'Цифровые услуги, сайты и промпоставки — плюс свои продукты: нагревательный мат BizPet и FXGuard. От финтеха до промышленности.',
    aboutP2: 'Цифровая инфраструктура, домены, SSL и безопасность — тоже наши услуги. Международный хостинг и домены через <a href="https://netinode.net/" class="service-card__link" target="_blank" rel="noopener noreferrer">Netinode</a>.',
    aboutHeroImage: 'assets/images/content/about-hero.jpg',
    aboutHeroAlt: 'Команда Bizdavar на выставке в Тебризе',
    aboutMore: 'Подробнее о Bizdavar',
    aboutInfra: 'Управление инфраструктурой',
    ownedEyebrow: 'Продукты Bizdavar',
    ownedTitle: 'Что мы производим',
    ownedDesc: 'Помимо цифровых услуг Bizdavar делает свои устройства и ПО — нагревательный мат BizPet, BizTab, FXGuard и BizSwap.',
    ownedCta: 'Все продукты',
    clientsTitle: 'Услуги и продукты на практике',
    clientsDesc: 'Веб-дизайн, продукты FXGuard и Fast Web Studio, промышленные поставки',
    clientsAll: 'Смотреть всё портфолио',
    blogTitle: 'Последние статьи',
    blogAll: 'Все материалы блога',
    faqTitle: 'Частые вопросы',
    ctaTitle: 'Нужен английский сайт или реклама в USD/EUR?',
    ctaDesc: 'Форма расчёта или Zoom/Meet — валюту фиксируем письменно. Поставки в Иран — по WhatsApp.',
    ctaForm: 'Запросить расчёт',
    faqs: [
      { q: 'Сколько стоит сайт Fast Web Studio?', a: 'Базовый $99 (~€90), магазин $199, pro $299 — английский LTR для США и ЕС, счёт в USD или EUR. Тарифы: <a href="/ru/pages/fast">Fast Web Studio</a>.' },
      { q: 'Можно счёт в USD или EUR?', a: 'Да. Валюту выбираете до старта. Веб и реклама — доллар или евро. Путь: <a href="/ru/pages/contact?service=web-design">расчёт сайта</a>.' },
      { q: 'Делаете Google Ads и Meta для США/ЕС?', a: 'Да — бюджет в USD или EUR, отчёт GA4, перекрытие CET/EST. Гид: <a href="/ru/pages/articles/digital-marketing-us-eu">маркетинг для США и ЕС</a>.' },
      { q: 'Как начинается консультация?', a: '<a href="/ru/pages/contact">Форма</a> (телефон обязателен) и email для Zoom/Meet. Отвечаем в пересечении CET и EST.' },
      { q: 'Как запросить VEGA или Prosense для Ирана?', a: 'Этот путь — WhatsApp. Каталог: <a href="/ru/pages/vega">VEGA</a> · <a href="/ru/pages/prosense">Prosense</a>.' }
    ]
  };

  var homeAr = {
    heroBadge: 'Bizdavar Group — منذ ٢٠١٣',
    heroTitle: 'بيزدوار يعمل في ثلاثة مجالات منفصلة',
    heroTitleSpan: '',
    heroTitleEnd: '',
    heroDesc: 'خدمات رقمية لأمريكا وأوروبا — مواقع إنجليزية من ٩٩$ بفاتورة USD أو EUR — أو توريد لإيران. اختر المسار أولاً.',
    intentNavLabel: 'موقع أو إعلانات أو توريد إيران',
    intentVega: 'شراء VEGA',
    intentProsense: 'كاشف Prosense',
    intentLiqui: 'Liqui Moly',
    intentTeltonika: 'Teltonika GPS',
    intentGamak: 'محرك Gamak',
    intentDigi: 'ميزان Digi',
    intentTeraoka: 'ميزان Teraoka',
    intentFast: 'موقع إنجليزي من ٩٩$',
    intentQuote: 'عرض سعر مجاني',
    viewServices: 'عرض الخدمات',
    viewSupply: 'كتالوج التوريد',
    hero3dHint: 'مرّر فوق الفئات — المرشد ينظر إليها · انقر للدخول',
    hero3dPanelKicker: 'استكشف Bizdavar',
    hero3dExplore: 'الدخول إلى هذا القسم',
    hero3dClose: 'إغلاق',
    hero3dChipsAria: 'فئات صالة العرض ثلاثية الأبعاد',
    gatewayServicesTag: 'خدمات رقمية وتقنية',
    gatewayProductsTag: 'منتجاتنا والتوريد الصناعي',
    gatewayServicesSubsAria: 'فئات فرعية للخدمات',
    gatewayProductsSubsAria: 'فئات فرعية للمنتجات',
    heroCard: 'تسويق رقمي · تصميم ويب · صناعي',
    statProjects: 'مشاريع رقمية',
    statCountries: 'دول نشطة',
    statYears: 'سنوات خبرة',
    featSectionTitle: 'لماذا بيزدوار',
    featFast: 'تسليم سريع',
    featFastDesc: 'مواقع إنجليزية من ٩٩$ / ~€90 خلال ٥ أيام',
    featGlobal: 'انتشار عالمي',
    featGlobalDesc: 'مشاريع إيران وتركيا والعالم',
    featIndustrial: 'خبرة صناعية',
    featIndustrialDesc: 'VEGA وProsense وLiqui Moly وأدوات دقيقة',
    featResults: 'نتائج قابلة للقياس',
    featResultsDesc: 'نمو التحويل والعلامة',
    svcEyebrow: 'خدمات متخصصة',
    svcTitle: 'حلول شاملة من Bizdavar Group',
    svcDesc: 'ستة محاور — رقمي وبرمجي وتركيبات فنية (تبريز)',
    svcDmDesc: 'استراتيجية وحملات وإعلانات وSEO وتحسين التحويل لنمو المبيعات.',
    svcWebDesc: 'مواقع شركات ومتاجر ولاندينغ — تسليم سريع عبر Fast Web Studio.',
    svcSmmDesc: 'إنتاج محتوى وإدارة صفحات وإعلانات مستهدفة على الشبكات.',
    svcAppsDesc: 'Android وiOS وتطبيقات ويب وأنظمة مؤسسية.',
    svcServerDesc: 'إعداد وأمان ونسخ احتياطي ومراقبة وترحيل خوادم.',
    svcFieldDesc: 'كاميرات وتمديدات وإضاءة مخفية — تبريز.',
    svcIndDesc: 'حساسات VEGA وكواشف Prosense وLiqui Moly ومضخات واستشارة فنية.',
    svcPlans: 'الباقات والأسعار',
    fastTitle: 'موقع احترافي خلال ٥ أيام!',
    fastDesc: 'انطلق هذا الأسبوع — Fast Web Studio',
    fastBtn: 'عرض الباقات',
    aboutTag: 'من نحن',
    aboutTitle: 'Bizdavar Group — شريك نمو أعمالك',
    aboutP1: 'خدمات رقمية ومواقع وتوريد صناعي — ومنتجاتنا مثل وسادة BizPet وFXGuard. من الفنتك إلى الصناعة.',
    aboutP2: 'البنية الرقمية والنطاقات وSSL والأمان جزء من خدماتنا أيضاً — استضافة ونطاقات دولية عبر <a href="https://netinode.net/" class="service-card__link" target="_blank" rel="noopener noreferrer">Netinode</a>.',
    aboutHeroImage: 'assets/images/content/about-hero.jpg',
    aboutHeroAlt: 'فريق بيزدوار في معرض تبريز',
    aboutMore: 'المزيد عن Bizdavar',
    aboutInfra: 'إدارة البنية',
    ownedEyebrow: 'منتجات Bizdavar',
    ownedTitle: 'ما نصنعه',
    ownedDesc: 'إلى جانب الخدمات الرقمية يصنع Bizdavar أجهزته وبرامجه — وسادة BizPet وBizTab وFXGuard وBizSwap.',
    ownedCta: 'عرض كل المنتجات',
    clientsTitle: 'الخدمات والمنتجات عملياً',
    clientsDesc: 'تصميم مواقع ومنتجات FXGuard وFast Web Studio وتوريد العلامات الصناعية',
    clientsAll: 'عرض كل الأعمال',
    blogTitle: 'أحدث المقالات',
    blogAll: 'كل مقالات المدونة',
    faqTitle: 'الأسئلة الشائعة',
    ctaTitle: 'تحتاج موقعاً إنجليزياً أو إعلانات بفاتورة USD/EUR؟',
    ctaDesc: 'نموذج العرض أو Zoom/Meet — نثبّت العملة كتابياً. توريد إيران ما زال عبر واتساب.',
    ctaForm: 'طلب عرض سعر',
    faqs: [
      { q: 'كم يكلف موقع Fast Web Studio؟', a: 'أساسي $99 (~€90) ومتجر $199 واحترافي $299 — إنجليزي LTR لأمريكا وأوروبا بفاتورة USD أو EUR. الباقات: <a href="/ar/pages/fast">Fast Web Studio</a>.' },
      { q: 'هل تصدرون فاتورة USD أو EUR؟', a: 'نعم. اختاروا العملة قبل الانطلاق. الويب والإعلانات بالدولار أو اليورو. المسار: <a href="/ar/pages/contact?service=web-design">عرض الموقع</a>.' },
      { q: 'هل تديرون Google Ads وMeta لأمريكا وأوروبا؟', a: 'نعم — ميزانية USD أو EUR وتقارير GA4 وتداخل CET/EST. الدليل: <a href="/ar/pages/articles/digital-marketing-us-eu">التسويق لأمريكا وأوروبا</a>.' },
      { q: 'كيف تبدأ الاستشارة؟', a: '<a href="/ar/pages/contact">النموذج</a> (الهاتف إلزامي) وبريد لـ Zoom/Meet. نرد في تداخل CET وEST.' },
      { q: 'كيف أستعلم عن VEGA أو Prosense لإيران؟', a: 'هذا المسار عبر واتساب. الكتالوج: <a href="/ar/pages/vega">VEGA</a> · <a href="/ar/pages/prosense">Prosense</a>.' }
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
      summary: 'Цифровые услуги и промышленные поставки в 11 странах — многоязычная поддержка, WhatsApp и международная доставка.',
      hubs: [
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
      visualAlt: 'Датчик уровня, газовый детектор и экспортные ящики — промышленные поставки Bizdavar',
      visualLead: 'От запроса до поставки на объект',
      visualNote: 'Подбор модели, международная закупка и логистика — VEGA, Prosense, моторы и насосы.',
      products: [
        { name: 'VEGA', title: 'Датчики и КИП', desc: 'Уровень, давление, расход — нефть, нефтехимия и вода', badge: 'Германия', tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'], cta: 'Смотреть каталог' },
        { name: 'UWT', title: 'Уровень силоса и резервуара', desc: 'Сигнализаторы и радар для сыпучих и жидкостей — Rotonivo, Vibranivo, NivoRadar', badge: 'Германия', tags: ['Rotonivo', 'NivoRadar', 'Vibranivo'], cta: 'Каталог UWT' },
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
      summary: 'خدمات رقمية وتوريد صناعي في ١١ دولة — دعم متعدد اللغات وواتساب وتسليم دولي.',
      hubs: [
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
      visualAlt: 'حساس مستوى وكاشف غاز وصناديق تصدير — توريد صناعي بيزدوار',
      visualLead: 'من الاستفسار حتى التسليم في الموقع',
      visualNote: 'اختيار الموديل والشراء الدولي واللوجستيات — VEGA وProsense ومحركات ومضخات.',
      products: [
        { name: 'VEGA', title: 'حساسات وأدوات دقيقة', desc: 'مستوى وضغط وتدفق — نفط وبتروكيماويات ومياه', badge: 'ألمانيا', tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'], cta: 'عرض الكتالوج' },
        { name: 'UWT', title: 'قياس مستوى الصوامع والخزانات', desc: 'مفاتيح مستوى ورادار للمواد الصلبة والسوائل — Rotonivo وVibranivo وNivoRadar', badge: 'ألمانيا', tags: ['Rotonivo', 'NivoRadar', 'Vibranivo'], cta: 'كتالوج UWT' },
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
      geoText: 'Оригинальные поставки датчиков VEGA — техконсультация, прозрачная проформа и логистика до промышленных проектов.',
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
      geoText: 'توريد أصلي لحساسات VEGA — استشارة فنية، فاتورة مبدئية شفافة ولوجستيات إلى المشاريع الصناعية.',
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
      officialNote: 'Технические данные основаны на <a href="https://www.prosense.com.tr/?lang=en" target="_blank" rel="noopener noreferrer">официальном сайте Prosense</a>. Для цены и поставки — <a href="contact">свяжитесь с Bizdavar</a> · <a href="vega">продукция VEGA</a>',
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
      officialNote: 'المعلومات الفنية مستندة إلى <a href="https://www.prosense.com.tr/?lang=en" target="_blank" rel="noopener noreferrer">الموقع الرسمي لـ Prosense</a>. للتسعير والتوريد — <a href="contact">تواصل مع Bizdavar</a> · <a href="vega">منتجات VEGA</a>',
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
    view: 'Смотреть',
    guideBuyGamak: 'Купить двигатель Gamak',
    guideBuyGamakDesc: 'кВт и фланец B3/B5',
    guideBuyDigi: 'Купить весы Digi',
    guideBuyDigiDesc: 'POS и касса',
    guideBuyTeraoka: 'Купить весы Teraoka',
    guideBuyTeraokaDesc: 'Deli, POS и этикетка',
    offerMap: {
      aria: 'Три пути Bizdavar',
      lead: 'Что вам нужно?',
      servicesNum: '01',
      servicesTitle: 'Услуги',
      servicesDesc: 'Сайт за 5 дней, цифровой маркетинг, SMM, приложения, серверы и технические работы',
      servicesGo: 'К услугам',
      productsNum: '02',
      productsTitle: 'Продукты Bizdavar',
      productsDesc: 'Наши цифровые и физические продукты — BizPet, BizTab и FXGuard',
      productsGo: 'К продуктам',
      supplyNum: '03',
      supplyTitle: 'Промпоставки',
      supplyDesc: 'Промдетали и КИП: детекторы Prosense, датчики VEGA и другие бренды — напишите нам за ценой',
      supplyGo: 'Запросить цену'
    }
  }));
  deepMerge(ru.nav, {
    home: 'Главная',
    about: 'О нас',
    gallery: 'Галерея',
    services: 'Услуги',
    products: 'Продукты',
    portfolio: 'Портфолио',
    blog: 'Блог',
    contact: 'Контакты',
    webDesign: 'Веб-дизайн',
    servicesAll: 'Все услуги',
    servicesMegaHint: 'Выездные услуги Bizdavar',
    servicesConsult: 'Консультация по услугам',
    servicesConsultDesc: 'Форма и WhatsApp',
    tabServicesDigital: 'Цифра и ПО',
    tabServicesField: 'Технические услуги',
    servicesGroupGrowth: 'Рост и маркетинг',
    servicesGroupBuild: 'Разработка и инфраструктура',
    servicesGroupField: 'Работы на объекте',
    serviceDigital: 'Цифровой маркетинг',
    serviceDigitalDesc: 'Google Ads, Meta, LinkedIn — USD/EUR',
    serviceWeb: 'Веб и web app',
    serviceWebDesc: 'Сайты США/ЕС от $99',
    serviceApps: 'Приложения и системы',
    serviceAppsDesc: 'Android, iOS — App Store и Stripe',
    serviceServer: 'Управление серверами',
    serviceServerDesc: 'VPS, безопасность, бэкап, мониторинг',
    serviceSmm: 'SMM',
    serviceSmmDesc: 'Контент, reels и Paid Social',
    serviceField: 'Технические и строительные работы',
    serviceFieldDesc: 'Видеонаблюдение, проводка и скрытый свет',
    serviceFieldFeaturedDesc: 'Тебриз — техническая команда',
    serviceFieldBadge: 'Выезд',
    productsCatalog: 'Весь каталог',
    productsHardware: 'IoT-оборудование',
    productsSoftware: 'ПО и SaaS',
    productsLines: 'Производственные линии',
    productsMegaHint: 'Собственные продукты Bizdavar',
    productsSupplyLink: 'Поставки промышленных брендов',
    productsSupplyDesc: 'Консультация, выбор модели и проформа',
    productsQuote: 'Запросить цену',
    tabOwned: 'Продукты Bizdavar',
    tabLines: 'Линии и каталог',
    tabBrands: 'Промышленные бренды',
    brandGroupSensing: 'Датчики и безопасность',
    brandGroupTelematics: 'Флот и трекинг',
    brandGroupPower: 'Моторы и авто',
    brandGroupRetail: 'Ритейл и весы',
    brandVegaDesc: 'Датчики уровня и давления',
    brandUwtDesc: 'Датчики уровня силоса и резервуара',
    brandProsenseDesc: 'Газовые и пламенные детекторы',
    brandTeltonikaDesc: 'GPS и телематика флота',
    brandGamakDesc: 'Промышленные электродвигатели',
    brandLiquiDesc: 'Масла и присадки',
    brandDigiDesc: 'POS и торговое оборудование',
    brandTeraokaDesc: 'Весы и маркировка',
    productFxguard: 'WhatsApp CRM',
    productFxguardDesc: 'Общий inbox · от $49/мес',
    productFxguardAccounting: 'Accounting',
    productFxguardAccountingDesc: 'Финансовый учёт · FXGuard',
    productBizswap: 'BizSwap',
    productBizswapDesc: 'Пресейл и своп токена',
    productBiztab: 'BizTab',
    productBiztabDesc: 'Бесконтактный IoT-термометр',
    productBizclean: 'BizClean',
    productBizcleanDesc: 'Автоматический санитайзер',
    productBizseat: 'BizSeat',
    productBizseatDesc: 'Поясничная опора для автокресла',
    productBizpet: 'BizPet',
    productBizpetDesc: 'Нагревательный мат BizPet'
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
    industrialShort: 'Промышленность',
    hq: 'Многоязычная поддержка'
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
  if (!ru.blogPage) ru.blogPage = {};
  deepMerge(ru.blogPage, {
    hero: {
      tag: 'Экспертный блог',
      title: 'Цифровой маркетинг, SEO и промышленные поставки',
      desc: 'Практические гайды Bizdavar: рост онлайн-продаж, многоязычные сайты и оригинальные датчики VEGA для Ирана и Турции.',
      ctaArticles: 'Смотреть статьи',
      ctaTopics: 'Темы',
      ctaConsult: 'Бесплатная консультация'
    },
    intro: {
      title: 'Практика с живых проектов',
      body: 'Блог Bizdavar — сжатый опыт <a href="/pages/services">цифровых услуг</a>, <a href="/pages/fast">Fast Studio</a> и <a href="/pages/products#supply">промпоставок</a>. Маркетинг, SEO, SMM, многоязычный сайт и закупка VEGA — как исполнение, не слоган.',
      statPosts: '13',
      statPostsLabel: 'Гайды',
      statLangs: '5',
      statLangsLabel: 'Языки',
      statTopics: '5',
      statTopicsLabel: 'Тематические кластеры'
    },
    topics: {
      eyebrow: 'Кластеры',
      title: 'От SEO до датчиков VEGA',
      desc: 'Выберите по задаче — каждый кластер ведёт на услугу или продукт.',
      digital: { label: 'Цифровой маркетинг', desc: 'SEO, CRO и SMM' },
      web: { label: 'Веб-дизайн', desc: 'Многоязычный сайт и Fast Studio' },
      industrial: { label: 'Промпоставки', desc: 'VEGA и КИП' },
      products: { label: 'Продукты Bizdavar', desc: 'BizPet, BizTab и BizClean' },
      company: { label: 'О компании', desc: 'История и направления' }
    },
    catalog: {
      eyebrow: 'Каталог статей',
      title: 'Все гайды одним взглядом',
      desc: 'Фильтр по теме или сразу откройте статью — ссылки есть в HTML для поисковиков.',
      filterAll: 'Все',
      empty: 'В этой теме статей нет.',
      filterAria: 'Фильтр тем блога',
      countText: '{count} материалов'
    },
    clusters: {
      eyebrow: 'Следующий шаг',
      title: 'От статьи к запросу',
      desc: 'Если гайда мало — запустите ту же тему как проект с Bizdavar.',
      digitalTitle: 'Маркетинг и SEO',
      digitalDesc: 'Кампании, SEO и SMM для Ирана и Турции.',
      webTitle: 'Веб-дизайн',
      webDesc: 'Корпоративный и магазин за 5 дней — RTL и базовое SEO.',
      industrialTitle: 'Купить VEGA',
      industrialDesc: 'Order code, проформа и логистика.'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Перед чтением',
      desc: 'Короткие ответы на частые запросы о блоге Bizdavar.',
      items: [
        { q: 'О чём блог Bizdavar?', a: 'Гайды по цифровому маркетингу, SEO, многоязычным сайтам, Fast Web Studio, поставке датчиков VEGA и продуктам BizPet и BizTab.' },
        { q: 'На скольких языках публикуются статьи?', a: 'Хаб блога и основные статьи индексируются на фарси, турецком, английском, русском и арабском — отдельные hreflang URL.' },
        { q: 'Как найти статью по услуге?', a: 'Используйте фильтр тем или перейдите из кластеров маркетинга, веба и поставок на страницы услуг.' },
        { q: 'Что делать после гайда по VEGA?', a: 'Отправьте модель или данные резервуара в WhatsApp или форму — проформа и код заказа выдаются Bizdavar.' },
        { q: 'Есть ли продукты Bizdavar в блоге?', a: 'Да. BizTab, BizClean V5 и нагревательный мат BizPet открываются из этого каталога.' }
      ]
    },
    cta: {
      title: 'Нужна экспертная консультация?',
      desc: 'Напишите тему в <a href="/pages/contact">форме контакта</a> — или в WhatsApp.',
      btn: 'Запросить консультацию',
      btnWa: 'WhatsApp'
    },
    geoText: 'Статьи для бизнеса Ирана и Турции — цифровой маркетинг, SEO, многоязычный веб и поставки VEGA.',
    related: [
      { title: 'Веб США/ЕС', desc: 'От $99 / счёт EUR', titleKey: 'blogPage.related.0.title', descKey: 'blogPage.related.0.desc' },
      { title: 'Ads США/ЕС', desc: 'Google, Meta, LinkedIn', titleKey: 'blogPage.related.1.title', descKey: 'blogPage.related.1.desc' },
      { title: 'Каталог VEGA', desc: 'Датчики уровня и давления', titleKey: 'blogPage.related.2.title', descKey: 'blogPage.related.2.desc' },
      { title: 'Контакты', desc: 'Бесплатная консультация', titleKey: 'blogPage.related.3.title', descKey: 'blogPage.related.3.desc' }
    ]
  });
  ru.blogPosts = [
    { title: 'Английский веб-дизайн для США и ЕС — счёт в USD или EUR', excerpt: 'Тарифы от $99 / ~€90, Stripe, Zoom/Meet и счёт в долларах или евро.', category: 'Веб-дизайн' },
    { title: 'Цифровой маркетинг для США и ЕС — бюджет в USD и EUR', excerpt: 'Google Ads, Meta и LinkedIn со счётом USD/EUR и отчётом GA4.', category: 'Цифровой маркетинг' },
    { title: 'Купить VEGAPULS 6X в Иране — цена, код заказа, запрос', excerpt: 'Как купить оригинальный радарный уровнемер для резервуара в Иране — проформа и WhatsApp.', category: 'Промоборудование' },
    { title: 'Запрос цены VEGA в Иране — что прислать', excerpt: 'Чек-лист закупщика: резервуар, среда, Ex/SIL и фото шильдика.', category: 'Промоборудование' },
    { title: 'Купить газовый детектор Prosense в Иране — PQ и SIL', excerpt: 'Оригинальные детекторы для нефти и HVAC — запрос в WhatsApp.', category: 'Промоборудование' },
    { title: 'Промышленная торговля в Иране — VEGA, Prosense и оригинал', excerpt: 'Один контакт на фарси для КИП, газовой безопасности, GPS и масел.', category: 'Промоборудование' },
    { title: 'Купить Teltonika FMB920 в Иране — от $29', excerpt: 'Оригинальный GPS для автопарков Ирана — FMB920, FMC650 и DualCam.', category: 'Промоборудование' },
    { title: 'Купить двигатель Gamak в Иране — кВт, фланец, запрос', excerpt: 'Оригинальный мотор для насосов и линий — проформа.', category: 'Промоборудование' },
    { title: 'Купить весы и POS Digi System в Иране', excerpt: 'Оригинальные весы и касса для магазинов Ирана — проформа.', category: 'Промоборудование' },
    { title: 'Купить весы Teraoka в Иране — deli, POS, этикетка', excerpt: 'Оригинальные весы Teraoka Seiko для магазина и кухни.', category: 'Промоборудование' },
    { title: 'Поставка датчиков VEGA в Иран — от запроса до объекта', excerpt: 'Консультация, проформа и логистика оригинального VEGA для проектов в Иране.', category: 'Промоборудование' },
    { title: 'Многоязычный сайт для рынков Ирана и Турции', excerpt: 'hreflang, локальное доверие и быстрая сдача для бизнеса на двух рынках.', category: 'Веб-дизайн' },
    { title: 'Что такое цифровой маркетинг? Полный гид для бизнеса', excerpt: 'SEO, Google Ads, SMM и измерение лидов — практический путь для Ирана и Турции.', category: 'Цифровой маркетинг' },
    { title: 'Как цифровой маркетинг увеличивает продажи?', excerpt: 'Практические способы превратить посетителя в клиента.', category: 'Цифровой маркетинг' },
    { title: 'Управление соцсетями — SMM-стратегия для брендов', excerpt: 'Контент, календарь публикаций и таргет в Instagram и LinkedIn.', category: 'SMM' },
    { title: 'Сайт за 5 дней — гайд Fast Studio', excerpt: 'Тарифы Fast Web Studio для стартапов.', category: 'Веб-дизайн' },
    { title: 'Как выбрать промышленный датчик — VEGA и КИП', excerpt: 'Ключевые моменты поставки VEGA и измерительного оборудования.', category: 'Промоборудование' },
    { title: 'Что такое Bizdavar Group? История, команда, направления', excerpt: 'Профиль: основатель, 11 стран, 100+ проектов и экосистема брендов.', category: 'О компании' },
    { title: 'BizTab — первый бесконтактный настенный термометр Тебриза', excerpt: 'Продукт Bizdavar — погрешность менее 0,3°C, одобрение Университета Тебриза.', category: 'Свой продукт' },
    { title: 'Санитайзер рук Bizdavar V5', excerpt: 'Ультразвуковой датчик и автораспыление — инженерия Bizdavar.', category: 'Свой продукт' },
    { title: 'BizPet — нагревательный мат BizPet', excerpt: 'Проектирование и производство в инкубаторе Университета Тебриза с Imen Sahand Padideh.', category: 'Свой продукт' },
    { title: 'Разработка iOS — кейс Marvi Society', excerpt: 'UI/UX, Swift и App Store — клуб creator в Стамбуле.', category: 'Разработка приложений' },
    { title: 'Поставка газовых датчиков Prosense', excerpt: 'Выбор модели и B2B-запрос для нефти и HVAC.', category: 'Промоборудование' },
    { title: 'Поставка Liqui Moly — масла и присадки', excerpt: 'Моторные масла для автопарка и мастерских — B2B Bizdavar.', category: 'Промоборудование' },
    { title: 'Выездные услуги Bizdavar — Тебриз', excerpt: 'CCTV, проводка и скрытая подсветка — WhatsApp.', category: 'Выездные услуги' },
    { title: 'Локальное SEO — Google Maps для Ирана', excerpt: 'Google Business Profile, NAP и локальные страницы.', category: 'Цифровой маркетинг' },
    { title: 'FXGuard Exchange — биржа и OTC', excerpt: 'Fintech: KYC, кошелёк, OTC и админ-панель.', category: 'Fintech' }
  ];
  ru.liquiMolyPage = liquiPage.ru;
  ru.vegaPage = vegaPage.ru;
  ru.prosensePage = prosensePage.ru;
  if (ru.contact) {
    ru.contact.whatsappMessage = 'Здравствуйте, пишу с сайта bizdavar.com.';
    ru.contact.channelIr = 'WhatsApp';
    ru.contact.channelTr = 'WhatsApp продажи';
    ru.contact.channelField = 'Технические услуги';
    ru.contact.address = 'Тебриз';
    ru.contact.workingHours = '24/7 — всегда на связи';
  }
  ru.contactPage = Object.assign({}, ru.contactPage || {}, {
    connectTitle: 'Каналы связи',
    websites: 'Сайты',
    title: 'Контакты',
    mapImgAlt: 'Международное сотрудничество — Bizdavar Group',
    heroTitle: 'Расчёт сайта в USD или EUR — Zoom, Meet или форма',
    heroDesc: 'Английские сайты и реклама для США и ЕС: форма и Zoom/Meet, счёт в долларах или евро. VEGA/Prosense для Ирана быстрее в WhatsApp — модель, количество и фото шильдика.',
    formTitle: 'Форма заявки',
    formDesc: 'Имя и WhatsApp обязательны. Email по желанию.',
    subtitle: 'Заполните форму или напишите в WhatsApp — ответ в рабочие часы',
    firstName: 'Имя',
    lastName: 'Фамилия',
    placeholderFirstName: 'Ваше имя',
    placeholderLastName: 'Ваша фамилия',
    name: 'Имя и фамилия',
    email: 'Эл. почта',
    phone: 'Телефон / WhatsApp',
    service: 'Тип услуги',
    servicePlaceholder: 'Выберите...',
    message: 'Ваше сообщение',
    messagePlaceholder: 'Кратко опишите задачу...',
    privacy: 'Я согласен с',
    privacyBefore: 'Я согласен с',
    privacyLink: 'политикой конфиденциальности',
    privacyAfter: '.',
    privacyAgree: '.',
    submit: 'Отправить запрос',
    formNote: 'Данные используются только для ответа на ваш запрос.',
    formSending: 'Отправка…',
    formSuccess: 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
    formSuccessMailto: 'Сообщение готово к отправке. Если окно почты не открылось, напишите на info@bizdavar.com.',
    formSuccessWhatsapp: 'Сообщение готово для WhatsApp. Если окно не открылось, используйте кнопки WhatsApp на этой странице.',
    geoText: 'Перекрытие CET/EST — Zoom/Meet, счёт USD или EUR. Поставки в Иран через WhatsApp.',
    formError: 'Отправка не удалась. Повторите попытку или напишите на info@bizdavar.com.',
    waTr: 'WhatsApp продажи',
    waIr: 'WhatsApp (фарси)',
    mapTitle: 'Международное сотрудничество',
    mapDesc: 'Bizdavar Group работает с цифровыми и промышленными проектами в Иране, Турции и на международных рынках.',
    optDm: 'Цифровой маркетинг',
    optWeb: 'Английский сайт (USD / EUR)',
    optFast: 'Fast Web Studio — от $99',
    optApps: 'Приложения и системы',
    optServer: 'Серверы и инфраструктура',
    optSmm: 'SMM',
    optField: 'Технические услуги (камеры, проводка, скрытый свет)',
    optIndustrial: 'Поставка промышленного оборудования',
    optConsult: 'Бизнес-консалтинг',
    optOther: 'Другое'
  });
  if (ru.geo) {
    ru.geo.summary = 'Цифровые услуги и промышленные поставки в 11 странах — многоязычная поддержка, WhatsApp и международная доставка.';
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
    view: 'عرض',
    guideBuyGamak: 'شراء محرك Gamak',
    guideBuyGamakDesc: 'كيلوواط وشفة B3/B5',
    guideBuyDigi: 'شراء ميزان Digi',
    guideBuyDigiDesc: 'POS وصندوق المتجر',
    guideBuyTeraoka: 'شراء ميزان Teraoka',
    guideBuyTeraokaDesc: 'دلّي وPOS وملصقات',
    offerMap: {
      aria: 'مسارات بيزدوار الثلاثة',
      lead: 'ماذا تحتاج؟',
      servicesNum: '٠١',
      servicesTitle: 'خدمات',
      servicesDesc: 'موقع خلال ٥ أيام، تسويق رقمي، SMM، تطبيقات، خوادم وخدمات فنية',
      servicesGo: 'إلى الخدمات',
      productsNum: '٠٢',
      productsTitle: 'منتجات بيزدوار',
      productsDesc: 'منتجاتنا الرقمية والمادية — BizPet وBizTab وFXGuard',
      productsGo: 'إلى المنتجات',
      supplyNum: '٠٣',
      supplyTitle: 'توريد صناعي',
      supplyDesc: 'قطع صناعية وأجهزة قياس: كواشف Prosense وحساسات VEGA وعلامات أخرى — تواصل معنا لعرض السعر',
      supplyGo: 'طلب عرض سعر'
    }
  }));
  deepMerge(ar.nav, {
    home: 'الرئيسية',
    about: 'من نحن',
    gallery: 'معرض الصور',
    services: 'الخدمات',
    products: 'المنتجات',
    portfolio: 'الأعمال',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    webDesign: 'تصميم المواقع',
    servicesAll: 'كل الخدمات',
    servicesMegaHint: 'الخدمات الميدانية من بيزدوار',
    servicesConsult: 'استشارة الخدمات',
    servicesConsultDesc: 'النموذج وواتساب',
    tabServicesDigital: 'رقمي وبرمجيات',
    tabServicesField: 'خدمات فنية',
    servicesGroupGrowth: 'النمو والتسويق',
    servicesGroupBuild: 'البناء والبنية',
    servicesGroupField: 'التنفيذ الميداني',
    serviceDigital: 'التسويق الرقمي',
    serviceDigitalDesc: 'Google Ads وMeta وLinkedIn — USD/EUR',
    serviceWeb: 'مواقع وتطبيقات ويب',
    serviceWebDesc: 'مواقع أمريكا/أوروبا من ٩٩$',
    serviceApps: 'تطبيقات وأنظمة',
    serviceAppsDesc: 'أندرويد وiOS ولوحات أعمال',
    serviceServer: 'إدارة الخوادم',
    serviceServerDesc: 'VPS وأمان ونسخ احتياطي ومراقبة',
    serviceSmm: 'إدارة SMM',
    serviceSmmDesc: 'محتوى وريلز وإعلانات اجتماعية',
    serviceField: 'خدمات فنية وإنشائية',
    serviceFieldDesc: 'كاميرات وتمديدات وإضاءة مخفية',
    serviceFieldFeaturedDesc: 'تبريز — الفريق الفني',
    serviceFieldBadge: 'ميداني',
    productsCatalog: 'كل المنتجات',
    productsHardware: 'عتاد IoT',
    productsSoftware: 'برمجيات وSaaS',
    productsLines: 'خطوط الإنتاج',
    productsMegaHint: 'منتجات بيزدوار الخاصة',
    productsSupplyLink: 'توريد العلامات الصناعية',
    productsSupplyDesc: 'استشارة واختيار الموديل وفاتورة مبدئية',
    productsQuote: 'طلب عرض سعر',
    tabOwned: 'منتجات بيزدوار',
    tabLines: 'خطوط وكتالوج',
    tabBrands: 'علامات صناعية',
    brandGroupSensing: 'حساسات وسلامة',
    brandGroupTelematics: 'تتبع وأساطيل',
    brandGroupPower: 'محركات وسيارات',
    brandGroupRetail: 'تجزئة وموازين',
    brandVegaDesc: 'حساسات مستوى وضغط',
    brandUwtDesc: 'حساسات مستوى الصوامع والخزانات',
    brandProsenseDesc: 'كواشف غاز ولهب',
    brandTeltonikaDesc: 'GPS وتتبع الأسطول',
    brandGamakDesc: 'محركات كهربائية صناعية',
    brandLiquiDesc: 'زيوت وإضافات',
    brandDigiDesc: 'نقاط بيع وتجهيزات متاجر',
    brandTeraokaDesc: 'موازين ووسم',
    productFxguard: 'WhatsApp CRM',
    productFxguardDesc: 'صندوق وارد مشترك · من 49$/شهر',
    productFxguardAccounting: 'Accounting',
    productFxguardAccountingDesc: 'نظام محاسبة مالية · FXGuard',
    productBizswap: 'BizSwap',
    productBizswapDesc: 'بيع مسبق ومبادلة توكن',
    productBiztab: 'BizTab',
    productBiztabDesc: 'ميزان حرارة IoT بدون لمس',
    productBizclean: 'BizClean',
    productBizcleanDesc: 'معقم يدين تلقائي',
    productBizseat: 'BizSeat',
    productBizseatDesc: 'مسند ظهر مقعد السيارة',
    productBizpet: 'BizPet',
    productBizpetDesc: 'وسادة تدفئة BizPet'
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
    industrialShort: 'صناعي',
    hq: 'دعم متعدد اللغات'
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
  if (!ar.blogPage) ar.blogPage = {};
  deepMerge(ar.blogPage, {
    hero: {
      tag: 'مدونة متخصصة',
      title: 'تسويق رقمي وSEO وتوريد صناعي',
      desc: 'أدلة عملية من Bizdavar: نمو المبيعات، مواقع متعددة اللغات وحساسات VEGA الأصلية لإيران وتركيا.',
      ctaArticles: 'عرض المقالات',
      ctaTopics: 'المواضيع',
      ctaConsult: 'استشارة مجانية'
    },
    intro: {
      title: 'معرفة من مشاريع حقيقية',
      body: 'مدونة Bizdavar تلخّص <a href="/pages/services">الخدمات الرقمية</a> و<a href="/pages/fast">تصميم Fast Studio</a> و<a href="/pages/products#supply">التوريد الصناعي</a>. اقرأ التسويق وSEO وSMM والموقع متعدد اللغات ومسار شراء VEGA كتنفيذ لا شعارات.',
      statPosts: '١٣',
      statPostsLabel: 'مقال ودليل',
      statLangs: '٥',
      statLangsLabel: 'لغات النشر',
      statTopics: '٥',
      statTopicsLabel: 'عناقيد موضوعية'
    },
    topics: {
      eyebrow: 'العناقيد',
      title: 'من SEO إلى حساسات VEGA',
      desc: 'اختر حسب الحاجة — كل عنقود يربط بصفحة الخدمة أو المنتج.',
      digital: { label: 'تسويق رقمي', desc: 'SEO وCRO وSMM' },
      web: { label: 'تصميم مواقع', desc: 'موقع متعدد اللغات وFast Studio' },
      industrial: { label: 'توريد صناعي', desc: 'VEGA وأجهزة القياس' },
      products: { label: 'منتجات Bizdavar', desc: 'BizPet وBizTab وBizClean' },
      company: { label: 'عن الشركة', desc: 'التاريخ ومجالات النشاط' }
    },
    catalog: {
      eyebrow: 'كتالوج المقالات',
      title: 'كل الأدلة في نظرة',
      desc: 'صفِّ حسب الموضوع أو افتح المقال — الروابط موجودة في HTML لمحركات البحث.',
      filterAll: 'الكل',
      empty: 'لا مقالات في هذا الموضوع.',
      filterAria: 'فلتر مواضيع المدونة',
      countText: '{count} مادة'
    },
    clusters: {
      eyebrow: 'الخطوة التالية',
      title: 'من المقال إلى عرض السعر',
      desc: 'إن لم يكفِ الدليل، نفّذ نفس الموضوع كمشروع مع Bizdavar.',
      digitalTitle: 'تسويق وSEO',
      digitalDesc: 'حملات وSEO وSMM لإيران وتركيا.',
      webTitle: 'تصميم مواقع',
      webDesc: 'موقع شركات ومتجر خلال ٥ أيام — RTL وSEO أساسي.',
      industrialTitle: 'شراء VEGA',
      industrialDesc: 'رمز الطلب وفاتورة مبدئية ولوجستيات.'
    },
    faq: {
      eyebrow: 'أسئلة شائعة',
      title: 'قبل القراءة',
      desc: 'إجابات قصيرة لعمليات البحث الشائعة عن مدونة Bizdavar.',
      items: [
        { q: 'عن ماذا تتحدث مدونة Bizdavar؟', a: 'أدلة تسويق رقمي وSEO ومواقع متعددة اللغات وFast Web Studio وتوريد حساسات VEGA ومنتجات مثل BizPet وBizTab.' },
        { q: 'بكم لغة تُنشر المقالات؟', a: 'مركز المدونة والمقالات الأساسية مفهرسة بالفارسية والتركية والإنجليزية والروسية والعربية مع عناوين hreflang منفصلة.' },
        { q: 'كيف أجد مقالاً مرتبطاً بخدمة؟', a: 'استخدم فلتر الموضوع أو انتقل من عناقيد التسويق وتصميم الويب والتوريد إلى صفحات الخدمات.' },
        { q: 'ماذا أفعل بعد دليل VEGA؟', a: 'أرسل الموديل أو بيانات الخزان عبر واتساب أو النموذج — الفاتورة المبدئية ورمز الطلب يصدران من Bizdavar.' },
        { q: 'هل منتجات Bizdavar موجودة هنا؟', a: 'نعم. BizTab وBizClean V5 ووسادة BizPet الحرارية لها صفحات من هذا الكتالوج.' }
      ]
    },
    cta: {
      title: 'تحتاج استشارة متخصصة؟',
      desc: 'اكتب موضوعك في <a href="/pages/contact">نموذج الاتصال</a> — أو راسلنا على واتساب.',
      btn: 'طلب استشارة',
      btnWa: 'واتساب'
    },
    geoText: 'مقالات متخصصة لأعمال إيران وتركيا — تسويق رقمي وSEO وتصميم مواقع متعدد اللغات وتوريد VEGA.',
    related: [
      { title: 'مواقع أمريكا/أوروبا', desc: 'من ٩٩$ / فاتورة يورو', titleKey: 'blogPage.related.0.title', descKey: 'blogPage.related.0.desc' },
      { title: 'إعلانات أمريكا/أوروبا', desc: 'Google وMeta وLinkedIn', titleKey: 'blogPage.related.1.title', descKey: 'blogPage.related.1.desc' },
      { title: 'كتالوج VEGA', desc: 'حساسات مستوى وضغط', titleKey: 'blogPage.related.2.title', descKey: 'blogPage.related.2.desc' },
      { title: 'اتصال', desc: 'استشارة مجانية', titleKey: 'blogPage.related.3.title', descKey: 'blogPage.related.3.desc' }
    ]
  });
  ar.blogPosts = [
    { title: 'تصميم مواقع إنجليزية لأمريكا وأوروبا — فاتورة بالدولار أو اليورو', excerpt: 'باقات من ٩٩$ / ~€90 وStripe وZoom وفاتورة USD أو EUR.', category: 'تصميم ويب' },
    { title: 'تسويق رقمي لأسواق أمريكا وأوروبا — ميزانية بالدولار واليورو', excerpt: 'إعلانات Google وMeta وLinkedIn بفاتورة USD/EUR وتقرير GA4.', category: 'التسويق الرقمي' },
    { title: 'شراء VEGAPULS 6X في إيران — السعر ورمز الطلب والاستعلام', excerpt: 'كيف تشتري حساس مستوى راداري أصلي لخزان إيران — فاتورة مبدئية وواتساب.', category: 'معدات صناعية' },
    { title: 'استعلام سعر VEGA في إيران — ماذا ترسلون', excerpt: 'قائمة المشتري: الخزان والوسط وEx/SIL وصورة اللوحة.', category: 'معدات صناعية' },
    { title: 'شراء كاشف غاز Prosense في إيران — PQ وSIL', excerpt: 'كواشف أصلية للنفط وHVAC — استعلام واتساب.', category: 'معدات صناعية' },
    { title: 'التجارة الصناعية في إيران — VEGA وProsense', excerpt: 'نقطة اتصال واحدة لأجهزة القياس وسلامة الغاز وGPS والزيوت.', category: 'معدات صناعية' },
    { title: 'شراء Teltonika FMB920 في إيران — من ٢٩$', excerpt: 'GPS أصلي لأساطيل إيران — FMB920 وFMC650 وDualCam.', category: 'معدات صناعية' },
    { title: 'شراء محرك Gamak في إيران — القدرة والشفة', excerpt: 'محرك أصلي للمضخات والخطوط — فاتورة مبدئية.', category: 'معدات صناعية' },
    { title: 'شراء موازين وPOS من Digi System في إيران', excerpt: 'موازين وصناديق أصلية لمتاجر إيران — فاتورة مبدئية.', category: 'معدات صناعية' },
    { title: 'شراء موازين Teraoka في إيران — دلّي وPOS', excerpt: 'موازين Teraoka Seiko أصلية للمتجر والمطبخ.', category: 'معدات صناعية' },
    { title: 'توريد حساسات VEGA إلى إيران — من الاستعلام إلى الموقع', excerpt: 'استشارة وفاتورة مبدئية ولوجستيات VEGA الأصلية لمشاريع إيران.', category: 'معدات صناعية' },
    { title: 'موقع متعدد اللغات لأسواق إيران وتركيا', excerpt: 'hreflang وثقة محلية وتسليم سريع للأعمال ذات السوقين.', category: 'تصميم ويب' },
    { title: 'ما هو التسويق الرقمي؟ دليل كامل للأعمال', excerpt: 'سيو وإعلانات جوجل وSMM وقياس العملاء — مسار عملي لإيران وتركيا.', category: 'تسويق رقمي' },
    { title: 'كيف يزيد التسويق الرقمي المبيعات؟', excerpt: 'طرق عملية لتحويل الزائر إلى عميل.', category: 'تسويق رقمي' },
    { title: 'إدارة التواصل الاجتماعي — استراتيجية SMM للعلامات', excerpt: 'محتوى وتقويم نشر وإعلانات مستهدفة على Instagram وLinkedIn.', category: 'SMM' },
    { title: 'إطلاق موقع خلال ٥ أيام — دليل Fast Studio', excerpt: 'باقات Fast Web Studio للشركات الناشئة.', category: 'تصميم ويب' },
    { title: 'اختيار الحساس الصناعي المناسب — VEGA والقياس', excerpt: 'نقاط مهمة في توريد VEGA وأجهزة القياس.', category: 'معدات صناعية' },
    { title: 'ما هي Bizdavar Group؟ التاريخ والفريق والأنشطة', excerpt: 'الملف: المؤسس، ١١ دولة، أكثر من ١٠٠ مشروع ونظام العلامات.', category: 'عن الشركة' },
    { title: 'BizTab — أول مقياس حرارة جداري بلا تلامس في تبريز', excerpt: 'منتج Bizdavar — خطأ أقل من ٠٫٣°م واعتماد جامعة تبريز.', category: 'منتج خاص' },
    { title: 'معقم اليدين Bizdavar V5', excerpt: 'مستشعر فوق صوتي ورش تلقائي — هندسة Bizdavar.', category: 'منتج خاص' },
    { title: 'BizPet — وسادة التدفئة BizPet', excerpt: 'تصميم وإنتاج في حاضنة جامعة تبريز مع ایمن سهند پدیده.', category: 'منتج خاص' },
    { title: 'تطوير iOS — دراسة Marvi Society', excerpt: 'UI/UX وSwift وApp Store — نادٍ للمبدعين في إسطنبول.', category: 'تطوير تطبيقات' },
    { title: 'توريد كاشف غاز Prosense', excerpt: 'اختيار الطراز وعرض B2B للنفط وHVAC.', category: 'معدات صناعية' },
    { title: 'توريد Liqui Moly — زيوت وإضافات أصلية', excerpt: 'زيت محرك للأساطيل والورش — B2B بيزدوار.', category: 'معدات صناعية' },
    { title: 'خدمات ميدانية — تبريز', excerpt: 'كاميرات وتوصيلات وإضاءة مخفية — واتساب.', category: 'خدمات ميدانية' },
    { title: 'SEO محلي — Google Maps لإيران', excerpt: 'Google Business Profile وNAP وصفحات محلية.', category: 'تسويق رقمي' },
    { title: 'FXGuard Exchange — منصة صرف وOTC', excerpt: 'فintech: KYC ومحفظة وOTC ولوحة إدارة.', category: 'Fintech' }
  ];
  ar.liquiMolyPage = liquiPage.ar;
  ar.vegaPage = vegaPage.ar;
  ar.prosensePage = prosensePage.ar;
  if (ar.contact) {
    ar.contact.whatsappMessage = 'مرحباً، أراسل من موقع bizdavar.com.';
    ar.contact.channelIr = 'واتساب';
    ar.contact.channelTr = 'واتساب المبيعات';
    ar.contact.channelField = 'خدمات فنية';
    ar.contact.address = 'تبريز';
    ar.contact.workingHours = 'على مدار الساعة';
  }
  ar.contactPage = Object.assign({}, ar.contactPage || {}, {
    connectTitle: 'قنوات التواصل',
    websites: 'المواقع',
    title: 'اتصل بنا',
    mapImgAlt: 'تعاون دولي — Bizdavar Group',
    heroTitle: 'عرض موقع USD أو EUR — Zoom أو Meet أو النموذج',
    heroDesc: 'المواقع والإعلانات الإنجليزية لأمريكا وأوروبا: أرسلوا النموذج ونحدد Zoom أو Meet. الفاتورة بالدولار أو اليورو. VEGA/Prosense لإيران أسرع على واتساب.',
    formTitle: 'نموذج طلب التواصل',
    formDesc: 'الاسم وواتساب إلزاميان. البريد اختياري.',
    subtitle: 'املأ النموذج أو راسلنا على واتساب — الرد خلال ساعات العمل',
    firstName: 'الاسم',
    lastName: 'اسم العائلة',
    placeholderFirstName: 'اسمك',
    placeholderLastName: 'اسم العائلة',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف / واتساب',
    service: 'نوع الخدمة',
    servicePlaceholder: 'اختر...',
    message: 'رسالتك',
    messagePlaceholder: 'صف احتياجك باختصار...',
    privacy: 'أوافق على',
    privacyBefore: 'أوافق على',
    privacyLink: 'سياسة الخصوصية',
    privacyAfter: '.',
    privacyAgree: '.',
    submit: 'إرسال طلب العرض',
    formNote: 'تُستخدم بياناتك فقط للرد على طلبك.',
    formSending: 'جارٍ الإرسال…',
    formSuccess: 'تم إرسال رسالتك. سنتواصل معك قريباً.',
    formSuccessMailto: 'الرسالة جاهزة للإرسال. إذا لم تفتح نافذة البريد، اكتب إلى info@bizdavar.com.',
    formSuccessWhatsapp: 'الرسالة جاهزة لواتساب. إذا لم تفتح النافذة، استخدم أزرار واتساب في هذه الصفحة.',
    geoText: 'تداخل CET/EST — Zoom/Meet وفاتورة USD أو EUR. توريد إيران عبر واتساب.',
    formError: 'فشل الإرسال. أعد المحاولة أو راسل info@bizdavar.com مباشرة.',
    waTr: 'واتساب المبيعات',
    waIr: 'واتساب الفارسية',
    mapTitle: 'تعاون دولي',
    mapDesc: 'تقدم Bizdavar Group خدمات رقمية وصناعية في إيران وتركيا والأسواق الدولية.',
    optDm: 'التسويق الرقمي',
    optWeb: 'موقع إنجليزي (USD / EUR)',
    optFast: 'Fast Web Studio — من ٩٩$',
    optApps: 'تطبيقات وأنظمة',
    optServer: 'إدارة الخوادم والبنية',
    optSmm: 'إدارة الشبكات الاجتماعية',
    optField: 'خدمات فنية (كاميرات، تمديدات، إضاءة مخفية)',
    optIndustrial: 'توريد معدات صناعية',
    optConsult: 'استشارة أعمال',
    optOther: 'أخرى'
  });
  if (ar.geo) {
    ar.geo.summary = 'خدمات رقمية وتوريد صناعي في ١١ دولة — دعم متعدد اللغات وواتساب وتسليم دولي.';
  }
  if (ar.seo) {
    ar.seo.defaultTitle = pageSeoAr.home.seoTitle;
    ar.seo.defaultDescription = pageSeoAr.home.seoDescription;
  }

  if (ru.fastPage) {
    ru.fastPage.hostingNote = {
      title: 'Домен, хостинг и сервер',
      text: 'Хостинг отделён от дизайна. Для Ирана — <strong>Netino Host</strong> (netinohost.com); международно — магазин <strong>Netinode</strong>. Платформы вроде netinohost.com тоже могут заказать Fast или индивидуальный дизайн.',
      cta: 'Купить домен и хостинг',
      ctaShop: 'Магазин Netinode',
      ctaSite: 'Сайт Netinode',
      ctaNetinohost: 'Netino Host — Иран'
    };
    ru.fastPage.ui = Object.assign({}, ru.fastPage.ui, {
      navFor: 'Для кого',
      liveBadge: 'Онлайн за 5 дней',
      fromPrice: 'от $99',
      mockUrl: 'yourbrand.com',
      saveOff: '{n}% скидка на запуск',
      consultWa: 'WhatsApp или Zoom',
      orderWa: 'Заказать этот план'
    });
    ru.fastPage.sections = Object.assign({}, ru.fastPage.sections, {
      for: {
        eyebrow: 'Для кого',
        title: 'Кому подходит Fast Web Studio?',
        desc: 'Стартапы и SMB США и ЕС: английский LTR-сайт или магазин Stripe. Персидский/RTL — второй язык, не оболочка по умолчанию.'
      },
      plans: {
        eyebrow: 'Тарифы',
        title: 'Выберите план под задачу',
        desc: 'Фиксированная цена в USD или EUR — заказ через <a href="contact">форму</a>, Zoom/Meet или WhatsApp.'
      },
      compare: {
        eyebrow: 'Сравнение',
        title: 'Что входит в каждый план?',
        desc: 'Таблица ниже — или уточните в Zoom/Meet и WhatsApp.'
      },
      timeline: {
        eyebrow: 'Путь запуска',
        title: '5 дней до онлайн — по шагам',
        desc: 'Каждый день цель; отчёт в Zoom, Meet или WhatsApp.'
      }
    });
    ru.fastPage.cta = Object.assign({}, ru.fastPage.cta, {
      title: 'Готовы запустить сайт?',
      desc: 'Форма расчёта, Zoom/Meet или WhatsApp — счёт в USD или EUR от $99 / ~€90.'
    });
    ru.fastPage.geoText = 'Английские LTR-сайты для США и ЕС — сдача за 5 дней, Stripe, Zoom/Meet, счёт USD или EUR.';
  }
  if (ar.fastPage) {
    ar.fastPage.hostingNote = {
      title: 'النطاق والاستضافة والخادم',
      text: 'الاستضافة منفصلة عن التصميم. لإيران <strong>Netino Host</strong> (netinohost.com)؛ دولياً متجر <strong>Netinode</strong>. منصات مثل netinohost.com يمكنها أيضاً طلب Fast أو تصميم مخصص.',
      cta: 'شراء نطاق واستضافة',
      ctaShop: 'متجر Netinode',
      ctaSite: 'موقع Netinode',
      ctaNetinohost: 'Netino Host — إيران'
    };
    ar.fastPage.ui = Object.assign({}, ar.fastPage.ui, {
      navFor: 'لمن',
      liveBadge: 'أونلاين خلال 5 أيام',
      fromPrice: 'من $99',
      mockUrl: 'yourbrand.com',
      saveOff: 'خصم إطلاق {n}٪',
      consultWa: 'واتساب أو Zoom',
      orderWa: 'اطلب هذه الخطة'
    });
    ar.fastPage.sections = Object.assign({}, ar.fastPage.sections, {
      for: {
        eyebrow: 'الجمهور',
        title: 'لمن يناسب Fast Web Studio؟',
        desc: 'شركات ناشئة وSMB في أمريكا وأوروبا: موقع إنجليزي LTR أو متجر Stripe. الفارسية/RTL لغة ثانية وليست القالب الافتراضي.'
      },
      plans: {
        eyebrow: 'خطط الأسعار',
        title: 'اختر الخطة المناسبة',
        desc: 'سعر ثابت بالدولار أو اليورو — الطلب عبر <a href="contact">النموذج</a> أو Zoom/Meet أو واتساب.'
      },
      compare: {
        eyebrow: 'المقارنة',
        title: 'ماذا تحصل في كل خطة؟',
        desc: 'راجع الجدول أو اسأل عبر Zoom/Meet وواتساب.'
      },
      timeline: {
        eyebrow: 'مسار التنفيذ',
        title: '٥ أيام حتى الأونلاين — خطوة بخطوة',
        desc: 'كل يوم هدف واضح — التقرير على Zoom أو Meet أو واتساب.'
      }
    });
    ar.fastPage.cta = Object.assign({}, ar.fastPage.cta, {
      title: 'مستعد لإطلاق موقعك؟',
      desc: 'نموذج العرض أو Zoom/Meet أو واتساب — فاتورة USD أو EUR من ٩٩$ / ~€90.'
    });
    ar.fastPage.geoText = 'مواقع إنجليزية LTR لأعمال أمريكا وأوروبا — تسليم خلال ٥ أيام وStripe وZoom/Meet وفاتورة USD أو EUR.';
  }

  if (!ru.caseStudy) ru.caseStudy = {};
  if (!ru.galleryPage) ru.galleryPage = {};
  deepMerge(ru.galleryPage, {
    hero: {
      tag: 'Галерея Bizdavar',
      title: 'Производство, R&D и выставки',
      desc: 'Линия сборки, лаборатория, продукты и стенды — от инкубатора Университета Тебриза до стенда Imen Sahand Padideh.'
    },
    filters: { all: 'Все', exhibition: 'Выставки', rd: 'R&D', production: 'Производство', products: 'Продукты' },
    filterAria: 'Фильтр галереи',
    countText: '{count} фото',
    empty: 'В этой категории пока нет фото.',
    close: 'Закрыть',
    related: 'Открыть связанную страницу',
    relatedTitle: 'Связанные страницы',
    relatedAbout: 'Технопарк, выставки и достижения',
    relatedBizpet: 'Нагревательный мат BizPet',
    relatedProducts: 'Оборудование и производственные линии',
    relatedContact: 'Консультация и запрос цены',
    relatedGamak: 'Поставка промышленных электродвигателей из Турции',
    geoText: 'Реальные фото выставок, производства и R&D команды Bizdavar в Тебризе.',
    ctaFromAbout: 'Галерея выставок и производства',
    items: {
      'expo-imen-booth': { caption: 'Стенд Imen Sahand Padideh — нагревательные маты на столе', alt: 'Выставочный стенд с чёрными нагревательными матами' },
      'expo-team-bizdavar': { caption: 'Команда Bizdavar на выставочном стенде', alt: 'Трое у стенда Bizdavar и Imen Sahand Padideh' },
      'expo-team-imen': { caption: 'Представители Imen Sahand Padideh на выставке', alt: 'Трое у стенда Imen Sahand Padideh с флагом Ирана' },
      'expo-tabrizu': { caption: 'Центр инкубации и инноваций Университета Тебриза', alt: 'Стенд инкубатора Университета Тебриза' },
      'bizpet-expo': { caption: 'Нагревательные маты Padideh на выставке', alt: 'Стенд с нагревательными матами Padideh' },
      'bizpet-production': { caption: 'Сборка нагревательного мата', alt: 'Производство нагревательного мата BizPet' },
      'bizpet-rd-high': { caption: 'Тепловые испытания в лаборатории', alt: 'Лабораторный тест температуры мата' },
      'bizpet-rd-temp': { caption: 'Измерение температуры образца', alt: 'Измерение температуры нагревательного мата' },
      'bizpet-prototype': { caption: 'Прототип нагревательного мата', alt: 'Прототип BizPet' },
      'bizpet-element': { caption: 'Нагревательный элемент внутри мата', alt: 'Нагревательный элемент Padideh' },
      'bizpet-military-vest': { caption: 'Исследование обогреваемой одежды', alt: 'Жилет с нагревательной подкладкой' },
      'bizpet-military-lining': { caption: 'Нагревательный слой, вшитый в одежду', alt: 'Нагревательная подкладка внутри одежды' },
      'bizpet-military-outdoor': { caption: 'Полевое испытание обогреваемой одежды', alt: 'Испытание обогреваемой одежды на улице' },
      'bizpet-dryer': { caption: 'Концепция сушилки для фруктов', alt: '3D-рендер корзины сушилки' },
      'bizpet-grey': { caption: 'BizPet — серый нагревательный мат', alt: 'Серый нагревательный мат BizPet' },
      'bizpet-tan': { caption: 'BizPet — бежевый нагревательный мат', alt: 'Бежевый нагревательный мат BizPet' },
      'bizpet-pets': { caption: 'Применение для лежанки питомца', alt: 'Постер BizPet для питомцев' },
      'motor-housings': { caption: 'Корпуса электродвигателей на сборке', alt: 'Корпуса электродвигателей на полу цеха' },
      'motor-stator-pair': { caption: 'Медная обмотка внутри корпуса', alt: 'Два статора с медной обмоткой' },
      'motor-stator-wind': { caption: 'Намотка статора электродвигателя', alt: 'Статор с медными катушками' },
      'motor-stators-bench': { caption: 'Статоры на сборочном столе', alt: 'Статоры электродвигателей на верстаке' },
      'motor-stators-leads': { caption: 'Статоры с выводными проводами', alt: 'Статоры с красными и жёлтыми проводами' },
      'motor-shaft': { caption: 'Обработанный вал двигателя', alt: 'Вал электродвигателя на полу цеха' },
      'motor-rotor': { caption: 'Ротор и подшипник на корпусе', alt: 'Ротор с подшипником на корпусе двигателя' },
      'motor-parts': { caption: 'Литые детали и клеммная коробка', alt: 'Детали электродвигателя на деревянном поддоне' },
      'motor-machining': { caption: 'Механообработка корпуса двигателя', alt: 'Сверление корпуса двигателя в тисках' },
      'motor-molds': { caption: 'Литейные формы корпуса двигателя', alt: 'Формы для корпусов электродвигателей' },
      'motor-finished-row': { caption: 'Собранные электродвигатели', alt: 'Ряды собранных промышленных двигателей' },
      'motor-vibrator-orange': { caption: 'Промышленный вибрационный двигатель', alt: 'Оранжевый вибрационный двигатель на столе' },
      'motor-vibrator-weights': { caption: 'Эксцентриковые грузы вибратора', alt: 'Оранжевый вибратор с грузами на валу' }
    }
  });
  if (!ar.galleryPage) ar.galleryPage = {};
  deepMerge(ar.galleryPage, {
    hero: {
      tag: 'معرض بيزدوار',
      title: 'صور الإنتاج والبحث والمعارض',
      desc: 'خط الإنتاج والمختبر والمنتجات وأجنحة المعارض — من حاضنة جامعة تبريز إلى جناح إيمن سهند پديده.'
    },
    filters: { all: 'الكل', exhibition: 'معارض', rd: 'بحث وتطوير', production: 'إنتاج', products: 'منتجات' },
    filterAria: 'تصفية المعرض',
    countText: '{count} صورة',
    empty: 'لا توجد صور في هذه الفئة بعد.',
    close: 'إغلاق',
    related: 'فتح الصفحة المرتبطة',
    relatedTitle: 'صفحات ذات صلة',
    relatedAbout: 'الحديقة العلمية والمعارض والإنجازات',
    relatedBizpet: 'حصيرة BizPet الحرارية',
    relatedProducts: 'الأجهزة وخطوط الإنتاج',
    relatedContact: 'استشارة وعرض سعر',
    relatedGamak: 'توريد محركات صناعية من تركيا',
    geoText: 'صور حقيقية لمعارض وإنتاج وبحث فريق بيزدوار في تبريز.',
    ctaFromAbout: 'معرض صور الإنتاج والمعارض',
    items: {
      'expo-imen-booth': { caption: 'جناح إيمن سهند پديده — حصائر حرارية على الطاولة', alt: 'جناح معرض بحصائر حرارية سوداء' },
      'expo-team-bizdavar': { caption: 'فريق بيزدوار في جناح المعرض', alt: 'ثلاثة أشخاص في جناح بيزدوار وإيمن سهند پديده' },
      'expo-team-imen': { caption: 'ممثلو إيمن سهند پديده في المعرض', alt: 'ثلاثة أشخاص في جناح إيمن سهند پديده مع علم إيران' },
      'expo-tabrizu': { caption: 'مركز الحضانة والابتكار بجامعة تبريز', alt: 'جناح حاضنة جامعة تبريز' },
      'bizpet-expo': { caption: 'حصائر پديده الحرارية في المعرض', alt: 'جناح يعرض حصائر پديده الحرارية' },
      'bizpet-production': { caption: 'تجميع الحصيرة الحرارية', alt: 'إنتاج حصيرة BizPet الحرارية' },
      'bizpet-rd-high': { caption: 'اختبار حراري في المختبر', alt: 'اختبار درجة حرارة الحصيرة في المختبر' },
      'bizpet-rd-temp': { caption: 'قياس درجة حرارة العينة', alt: 'قياس درجة حرارة الحصيرة الحرارية' },
      'bizpet-prototype': { caption: 'نموذج أولي للحصيرة الحرارية', alt: 'نموذج BizPet الأولي' },
      'bizpet-element': { caption: 'عنصر التسخين داخل الحصيرة', alt: 'عنصر تسخين پديده' },
      'bizpet-military-vest': { caption: 'بحث عن ملابس حرارية', alt: 'سترة ببطانة حرارية' },
      'bizpet-military-lining': { caption: 'طبقة حرارية مخيطة في الملبس', alt: 'بطانة حرارية داخل الملبس' },
      'bizpet-military-outdoor': { caption: 'اختبار ميداني للملابس الحرارية', alt: 'اختبار الملابس الحرارية في الهواء الطلق' },
      'bizpet-dryer': { caption: 'مفهوم مجفف الفاكهة', alt: 'تصميم ثلاثي الأبعاد لسلة تجفيف الفاكهة' },
      'bizpet-grey': { caption: 'BizPet — حصيرة حرارية رمادية', alt: 'حصيرة BizPet الرمادية' },
      'bizpet-tan': { caption: 'BizPet — حصيرة حرارية بيج', alt: 'حصيرة BizPet البيج' },
      'bizpet-pets': { caption: 'استخدام سرير الحيوانات الأليفة', alt: 'ملصق BizPet للحيوانات الأليفة' },
      'motor-housings': { caption: 'أغلفة المحركات الكهربائية في مرحلة التجميع', alt: 'أغلفة محركات على أرضية الورشة' },
      'motor-stator-pair': { caption: 'ملفات نحاسية داخل غلاف المحرك', alt: 'ساكنان بملفات نحاسية' },
      'motor-stator-wind': { caption: 'لف ساكن المحرك الكهربائي', alt: 'ساكن بملفات نحاسية أثناء اللف' },
      'motor-stators-bench': { caption: 'ساكنات على طاولة التجميع', alt: 'ساكنات محركات على منضدة العمل' },
      'motor-stators-leads': { caption: 'ساكنات بأسلاك توصيل', alt: 'ساكنات بملفات وأسلاك حمراء وصفراء' },
      'motor-shaft': { caption: 'عمود محرك مشغّل', alt: 'عمود محرك كهربائي على أرضية الورشة' },
      'motor-rotor': { caption: 'الدوار والمحمل على غلاف المحرك', alt: 'دوار بمحمل على غلاف المحرك' },
      'motor-parts': { caption: 'قطع مصبوبة وصندوق أطراف', alt: 'قطع محرك على منصة خشبية' },
      'motor-machining': { caption: 'تشغيل آلي لغلاف المحرك', alt: 'ثقب غلاف محرك في ملزمة الآلة' },
      'motor-molds': { caption: 'قوالب صب أغلفة المحرك', alt: 'قوالب لأغلفة المحركات الكهربائية' },
      'motor-finished-row': { caption: 'محركات كهربائية مجمّعة', alt: 'صفوف من المحركات الصناعية المجمّعة' },
      'motor-vibrator-orange': { caption: 'محرك اهتزاز صناعي', alt: 'محرك اهتزاز برتقالي على الطاولة' },
      'motor-vibrator-weights': { caption: 'أوزان لامركزية على محرك الاهتزاز', alt: 'محرك اهتزاز برتقالي بأوزان على العمود' }
    }
  });
  deepMerge(ru.caseStudy, {
    marvispace: {
      hero: { tag: 'Кейс веб-дизайна и разработки', title: 'MarviSpace — интернет-магазин кожаных изделий', desc: 'Программирование, разработка и дизайн магазина для бренда кожаных изделий — Bizdavar Group' },
      about: { title: 'О проекте', body: '<strong>MarviSpace</strong> — кейс программирования и дизайна e-commerce от Bizdavar Group: собственный магазин кожаных изделий с минималистичным каталогом, оформлением заказа и админ-панелью. Эта страница — <strong>кейс дизайна и разработки интернет-магазина</strong>.', servicesTitle: 'Услуги Bizdavar', services: ['UI/UX дизайн магазина кожаных изделий', 'Программирование и разработка собственного e-commerce', 'Каталог, корзина и поток заказа', 'Админ-панель и управление контентом', 'Мобильная и производительная оптимизация', 'Техподдержка после запуска'], clientTitle: 'Сфера клиента', clientBody: 'MarviSpace — бренд онлайн-продажи кожаных изделий: куртки, одежда и аксессуары. Детали товаров и заказов — на официальном сайте клиента.', challengeTitle: 'Задача', challenge: 'Бренду кожи нужен был собственный магазин, а не готовая тема: минималистичная сетка товаров, SKU, международный шопинг и панель управления контентом.', resultsTitle: 'Результаты', result1: 'Живой каталог кожи на marvispace.com', result2: 'Минималистичный шопинг и собственная визуальная идентичность', result3: 'Админ-панель товаров и контента для команды продаж', ctaSite: 'Открыть сайт MarviSpace', ctaOrder: 'Заказать похожий магазин', ctaPortfolio: 'Другие кейсы' },
      shots: { grid: 'Каталог кожаных изделий на marvispace.com' },
      geoText: 'Кейс программирования и дизайна интернет-магазина кожаных изделий — Bizdavar Group.'
    },
    marviSociety: {
      hero: { tag: 'Кейс iOS-приложения', title: 'Marvi Society — закрытый iOS-клуб для Стамбула', desc: 'Дизайн и разработка iOS с нуля — связь верифицированных креаторов с площадками Стамбула; в App Store' },
      about: { title: 'О проекте', body: '<strong>Marvi Society</strong> — мобильный кейс Bizdavar Group: закрытое iOS-приложение, которое соединяет верифицированных креаторов с одобренными площадками Стамбула. Поиск событий и мест, заявки на коллаборации, check-in, подтверждение визита, управление площадками и профили TR/EN. Эта страница — <strong>кейс iOS-приложения</strong>.', servicesTitle: 'Услуги Bizdavar', services: ['Продуктовый дизайн и UI/UX iOS', 'Архитектура и разработка мобильного приложения', 'Потоки поиска, приглашений, check-in и подтверждения визита', 'Управление площадками, кампаниями и уведомлениями', 'Публикация в App Store и поддержка после релиза'], clientTitle: 'Сфера продукта', clientBody: 'Marvi Society — закрытый lifestyle-клуб в Стамбуле: креаторы, рестораны, ночная жизнь, wellness и beauty. Детали — на сайте и в App Store.', challengeTitle: 'Задача', challenge: 'Закрытое приложение для связи креаторов и площадок в Стамбуле — поиск событий, приглашения, check-in и подтверждение визита, готовое к App Store.', resultsTitle: 'Результаты', result1: 'iOS-приложение опубликовано в App Store', result2: 'Полный поток поиска, коллабораций и управления площадками', result3: 'Тёмная визуальная идентичность и опыт TR/EN', ctaAppStore: 'Открыть в App Store', ctaSite: 'Сайт Marvi Society', ctaOrder: 'Заказать похожее приложение', ctaPortfolio: 'Другие кейсы' },
      shots: { discover: 'Поиск событий', events: 'События и приглашения', profile: 'Профиль креатора' },
      geoText: 'Кейс разработки iOS для Стамбула и международных рынков — от дизайна до публикации в App Store, Bizdavar Group.'
    },
    bizseat: {
      hero: {
        tag: 'Собственный продукт · Авто',
        title: 'BizSeat — поясничная опора Bizdavar',
        desc: 'Изобретено, спроектировано и произведено в 1399 в технопарке Университета Тебриза — продукт команды Bizdavar'
      },
      about: {
        title: 'О продукте',
        imageAlt: 'BizSeat — поясничная опора для автокресла от команды Bizdavar',
        body: '<strong>BizSeat</strong> — поясничная опора модели Bizdavar: изобретена, спроектирована и изготовлена в <strong>1399</strong> в <strong>технопарке Университета Тебриза</strong>.',
        body2: 'Разработка велась совместно с <strong>Technology Pardazan Tosee Khavarmianeh</strong> и технологическим подразделением <strong>Imen Sahand Padideh</strong>. Интеллектуальная собственность принадлежит Bizdavar; продукт продаётся на Digikala.',
        specsTitle: 'Особенности',
        specs: [
          'Эргономичная поясничная опора для автокресла',
          'Изобретение, дизайн и производство — 1399 (2020–2021)',
          'Технопарк Университета Тебриза',
          'Сотрудничество с Technology Pardazan Tosee Khavarmianeh',
          'Сотрудничество с Imen Sahand Padideh',
          'Заказ на Digikala'
        ],
        ctaDigikala: 'Смотреть на Digikala',
        ctaContact: 'Оптовый запрос / контакт'
      },
      origin: {
        eyebrow: 'Технопарк Тебриза · 1399',
        title: 'От изобретения до производства в технопарке',
        desc: 'BizSeat — один из аппаратных продуктов, изобретённых командой Bizdavar, с двумя местными технологическими партнёрами.',
        parkTitle: 'Научно-технологический парк',
        parkDesc: 'Университет Тебриза — место изобретения, проектирования и производства в 1399.',
        partner1Title: 'Technology Pardazan Tosee Khavarmianeh',
        partner1Desc: 'Партнёр по разработке и коммерциализации.',
        partner2Title: 'Imen Sahand Padideh',
        partner2Desc: 'Технологическое подразделение парка — партнёр по проектированию и производству.',
        storeTitle: 'Продажа на Digikala',
        storeDesc: 'Код товара dkp-7694589 — поясничная опора, модель bizdavar.'
      },
      related: {
        title: 'Смежные продукты и услуги',
        bizclean: 'Автоматический санитайзер',
        biztab: 'Бесконтактный настенный термометр',
        catalog: 'Каталог продуктов',
        catalogDesc: 'Оборудование и линии Bizdavar',
        about: 'О Bizdavar',
        aboutDesc: 'Технопарк, выставки и достижения'
      },
      geoText: 'Автомобильный продукт, изобретённый в технопарке Университета Тебриза — дизайн Bizdavar, продажа на Digikala.'
    },
    bizpet: {
      hero: {
        tag: 'Собственный продукт · Нагревательный мат',
        title: 'BizPet — нагревательный мат Bizdavar',
        desc: 'Спроектирован и произведён в технологическом инкубаторе Университета Тебриза — продукт команды Bizdavar (Biz Pet / Pet Biz)'
      },
      nav: {
        about: 'О продукте',
        rd: 'НИОКР',
        pets: 'Лежанки для животных',
        origin: 'Инкубатор',
        gallery: 'Фотогалерея',
        contact: 'Контакты'
      },
      about: {
        title: 'О продукте',
        imageAlt: 'BizPet — серый нагревательный мат команды Bizdavar',
        body: '<strong>BizPet</strong> (Biz Pet / Pet Biz) — нагревательный мат Padideh для обогрева в холодный сезон и локального снятия боли. Спроектирован и произведён в <strong>технологическом инкубаторе Университета Тебриза</strong>.',
        body2: 'Разработка велась совместно с <strong>Technology Pardazan Tosee Khavarmianeh</strong> и технологическим подразделением <strong>Imen Sahand Padideh</strong>. Мат портативный — для дома и автомобиля.',
        specsTitle: 'Особенности',
        specs: [
          'Нагревательный мат Padideh — BizPet / Biz Pet / Pet Biz',
          'Обогрев в холодный сезон и локальное снятие боли',
          'Портативный — дом и автомобиль',
          'Рабочее напряжение 5–12 В (макс. 1 А)',
          'Можно стирать после извлечения нагревательного элемента',
          'Проектирование и производство в инкубаторе Университета Тебриза',
          'Сотрудничество с Imen Sahand Padideh и Technology Pardazan Tosee Khavarmianeh'
        ],
        ctaContact: 'Оптовый запрос / контакт',
        ctaCatalog: 'Каталог продуктов'
      },
      gallery: {
        tanAlt: 'BizPet — бежевый нагревательный мат с разъёмом питания',
        elementAlt: 'BizPet — нагревательный элемент с контактами',
        posterAlt: 'Постер нагревательного мата Padideh'
      },
      rd: {
        eyebrow: 'НИОКР',
        title: 'Испытания нагревательного элемента в лаборатории',
        desc: 'Термические тесты, прототип и сборка — инженерный путь в инкубаторе Университета Тебриза.',
        tempHighAlt: 'Тест нагревательного элемента инфракрасным термометром',
        tempHighCaption: 'Лабораторный термический тест элемента',
        tempAlt: 'Измерение температуры поверхности в НИОКР',
        tempCaption: 'Температура поверхности в тестах НИОКР',
        elementAlt: 'Прямоугольный нагревательный элемент с контактами',
        elementCaption: 'Нагревательный элемент с точками контакта',
        protoAlt: 'Прототип нагревательного мата на изоляционном блоке',
        protoCaption: 'Прототип и экспериментальная сборка'
      },
      military: {
        eyebrow: 'НИОКР',
        title: 'Нагревательные маты в военной одежде',
        desc: 'Прототип тактического жилета со встроенным нагревательным элементом и блоком управления — НИОКР по применению мата в слоях военной одежды.',
        vestAlt: 'Прототип военного жилета с нагревательным матом на манекене',
        vestCaption: 'Прототип тактического жилета с блоком управления',
        liningAlt: 'Внутренняя подкладка жилета и проводка нагревательного мата',
        liningCaption: 'Подкладка — вшитый нагревательный элемент',
        outdoorAlt: 'Нагревательный военный жилет на манекене на улице',
        outdoorCaption: 'Показ прототипа на открытом воздухе'
      },
      dryer: {
        eyebrow: 'НИОКР',
        title: 'Нагревательные маты в корзинах фруктовой сушилки',
        desc: 'Деревянная корзина фруктовой сушилки с шестиугольной нагревательной сеткой и кабелем питания — НИОКР по применению мата в лотках сушилки.',
        imageAlt: 'Прототип корзины фруктовой сушилки с нагревательной сеткой',
        caption: '3D-рендер корзины сушилки с сетчатым нагревательным элементом.'
      },
      pets: {
        eyebrow: 'Лежанки для животных',
        title: 'Инфракрасный нагревательный мат для домашних животных',
        desc: 'Тот же мат подходит и для лежанок собак и кошек — безопасный низковольтный обогрев в холодный сезон, со съёмным чехлом.',
        imageAlt: 'BizPet — инфракрасный нагревательный мат для лежанок животных',
        specs: [
          'Подходит для лежанок домашних животных',
          'Углеродные наноматериалы · дальний ИК · КПД 95–99%',
          'Безопасные 5–12 В · потребление 5–8 Вт',
          'Мягкий съёмный и стираемый чехол',
          'Контроль температуры в диапазоне температуры тела животного',
          'Терапия: мышечные спазмы и артрит — для пожилых или беременных животных'
        ]
      },
      expo: {
        eyebrow: 'Выставка',
        title: 'Стенд Imen Sahand Padideh',
        desc: 'Нагревательные маты на выставке — акцент на очень низком потреблении и экологической совместимости.',
        imageAlt: 'Выставочный стенд Imen Sahand Padideh с нагревательными матами',
        caption: 'Стенд Imen Sahand Padideh — представление мата с низким потреблением.'
      },
      origin: {
        eyebrow: 'Инкубатор Тебриза · 1399',
        title: 'От проектирования до производства в инкубаторе',
        desc: 'BizPet — один из аппаратных продуктов команды Bizdavar: нагревательный мат Padideh с двумя местными технологическими партнёрами.',
        parkTitle: 'Технологический инкубатор',
        parkDesc: 'Университет Тебриза — место проектирования и производства мата Padideh.',
        partner1Title: 'Technology Pardazan Tosee Khavarmianeh',
        partner1Desc: 'Партнёр по разработке и коммерциализации.',
        partner2Title: 'Imen Sahand Padideh',
        partner2Desc: 'Технологическое подразделение парка — партнёр по проектированию и производству мата Padideh.',
        specTitle: '5–12 В · макс. 1 А',
        specDesc: 'Портативный для дома и автомобиля — стирка после извлечения нагревательного элемента.'
      },
      production: {
        eyebrow: 'Производственная линия',
        title: 'Сборка и тестирование нагревательных матов',
        desc: 'Станция сборки и контроля качества — тканевые маты, блоки питания и упаковка.',
        imageAlt: 'Производственная линия BizPet — сборка и тест на рабочем столе',
        caption: 'Сборка и тестирование нагревательных матов в мастерской.'
      },
      related: {
        title: 'Смежные продукты и услуги',
        bizseat: 'Поясничная опора для автокресла',
        biztab: 'Бесконтактный настенный термометр',
        catalog: 'Каталог продуктов',
        catalogDesc: 'Оборудование и линии Bizdavar',
        about: 'О Bizdavar',
        aboutDesc: 'Технопарк, выставки и достижения'
      },
      geoText: 'Нагревательный мат, спроектированный в технологическом инкубаторе Университета Тебриза — продукт BizPet команды Bizdavar.'
    }
  });

  if (!ar.caseStudy) ar.caseStudy = {};
  deepMerge(ar.caseStudy, {
    marvispace: {
      hero: { tag: 'نموذج تصميم وتطوير ويب', title: 'MarviSpace — متجر إلكتروني للمنتجات الجلدية', desc: 'برمجة وتطوير وتصميم متجر مخصص لعلامة منتجات جلدية — Bizdavar Group' },
      about: { title: 'عن المشروع', body: '<strong>MarviSpace</strong> نموذج برمجة وتصميم تجارة إلكترونية من Bizdavar Group — متجر جلدي مخصص بكتالوج بسيط ومسار شراء ولوحة إدارة. هذه الصفحة <strong>نموذج تصميم وتطوير متجر إلكتروني</strong>.', servicesTitle: 'خدمات Bizdavar', services: ['تصميم واجهة متجر المنتجات الجلدية', 'برمجة وتطوير متجر إلكتروني مخصص', 'كتالوج المنتجات والسلة ومسار الطلب', 'لوحة إدارة ومحتوى', 'تحسين الجوال والأداء', 'دعم فني بعد الإطلاق'], clientTitle: 'مجال العميل', clientBody: 'MarviSpace علامة بيع منتجات جلدية عبر الإنترنت — سترات وملابس وإكسسوارات. تفاصيل المنتجات والطلب على الموقع الرسمي للعميل.', challengeTitle: 'تحدي المشروع', challenge: 'احتاجت علامة المنتجات الجلدية متجراً مخصصاً لا قالباً جاهزاً: شبكة منتجات بسيطة ورموز SKU وتجربة شراء دولية ولوحة إدارة محتوى.', resultsTitle: 'النتائج', result1: 'كتالوج جلدي مباشر على marvispace.com', result2: 'تجربة شراء بسيطة وهوية بصرية مخصصة', result3: 'لوحة إدارة منتجات ومحتوى لفريق المبيعات', ctaSite: 'عرض موقع MarviSpace', ctaOrder: 'اطلب متجراً مشابهاً', ctaPortfolio: 'نماذج أخرى' },
      shots: { grid: 'كتالوج المنتجات الجلدية على marvispace.com' },
      geoText: 'نموذج برمجة وتصميم متجر إلكتروني للمنتجات الجلدية — Bizdavar Group.'
    },
    marviSociety: {
      hero: { tag: 'نموذج تطبيق iOS', title: 'Marvi Society — تطبيق iOS لنادٍ بدعوة في إسطنبول', desc: 'تصميم وتطوير iOS من الصفر — ربط صنّاع المحتوى المعتمدين بأماكن إسطنبول؛ منشور على App Store' },
      about: { title: 'عن المشروع', body: '<strong>Marvi Society</strong> نموذج تطوير موبايل من Bizdavar Group — تطبيق iOS بدعوة يربط صنّاع المحتوى المعتمدين بأماكن إسطنبول المعتمدة. اكتشاف الفعاليات والأماكن، طلب التعاون، check-in، إثبات الزيارة، إدارة المكان وملفات TR/EN. هذه الصفحة <strong>نموذج تطبيق iOS</strong>.', servicesTitle: 'خدمات Bizdavar', services: ['تصميم المنتج وواجهة iOS', 'هندسة وتطوير تطبيق الموبايل', 'مسارات الاكتشاف والدعوة وcheck-in وإثبات الزيارة', 'إدارة الأماكن والحملات والإشعارات', 'النشر على App Store والدعم بعد الإطلاق'], clientTitle: 'مجال المنتج', clientBody: 'Marvi Society نادٍ lifestyle بدعوة في إسطنبول — يربط صنّاع المحتوى بالمطاعم والحياة الليلية والعافية والجمال. التفاصيل على الموقع وصفحة App Store.', challengeTitle: 'تحدي المشروع', challenge: 'تطبيق بدعوة لربط صنّاع المحتوى والأماكن في إسطنبول — مع اكتشاف الفعاليات وإدارة الدعوات وcheck-in وإثبات الزيارة، جاهز لـ App Store.', resultsTitle: 'النتائج', result1: 'تطبيق iOS منشور على App Store', result2: 'مسار كامل للاكتشاف والتعاون وإدارة الأماكن', result3: 'هوية بصرية داكنة وتجربة TR/EN', ctaAppStore: 'عرض في App Store', ctaSite: 'موقع Marvi Society', ctaOrder: 'اطلب تطبيقاً مشابهاً', ctaPortfolio: 'نماذج أخرى' },
      shots: { discover: 'اكتشاف الفعاليات', events: 'الفعاليات والدعوات', profile: 'ملف الصانع' },
      geoText: 'نموذج تطوير تطبيق iOS لإسطنبول والأسواق الدولية — من التصميم إلى النشر على App Store بواسطة Bizdavar Group.'
    },
    bizseat: {
      hero: {
        tag: 'منتج ملكية · سيارات',
        title: 'BizSeat — مسند ظهر مقعد السيارة من بيزدوار',
        desc: 'اختُرع وصُمم وصُنع عام ١٣٩٩ في حديقة العلوم والتكنولوجيا بجامعة تبريز — منتج فريق Bizdavar'
      },
      about: {
        title: 'عن المنتج',
        imageAlt: 'BizSeat — مسند ظهر مقعد سيارة صممه فريق Bizdavar',
        body: '<strong>BizSeat</strong> مسند ظهر مقعد سيارة موديل بيزدوار — اختُرع وصُمم وصُنع عام <strong>١٣٩٩</strong> في <strong>حديقة العلوم والتكنولوجيا بجامعة تبريز</strong>.',
        body2: 'طُوّر بالتعاون مع <strong>تكنولوجي پردازان توسعه خاورمیانه</strong> والوحدة التكنولوجية <strong>ایمن سهند پدیده</strong>. الملكية الفكرية لبيزدوار والمنتج متوفر على ديجي‌كالا.',
        specsTitle: 'الميزات',
        specs: [
          'مسند ظهر مريح لمقعد السيارة',
          'اختراع وتصميم وتصنيع عام ١٣٩٩',
          'حديقة العلوم والتكنولوجيا بجامعة تبريز',
          'تعاون مع تكنولوجي پردازان توسعه خاورمیانه',
          'تعاون مع ایمن سهند پدیده',
          'يمكن طلبه من ديجي‌كالا'
        ],
        ctaDigikala: 'عرض في ديجي‌كالا',
        ctaContact: 'استعلام جملة / اتصال'
      },
      origin: {
        eyebrow: 'حديقة تبريز العلمية · ١٣٩٩',
        title: 'من الاختراع إلى الإنتاج في حديقة العلوم',
        desc: 'BizSeat أحد منتجات العتاد التي اخترعها فريق بيزدوار — مع شريكين تكنولوجيين محليين.',
        parkTitle: 'حديقة العلوم والتكنولوجيا',
        parkDesc: 'جامعة تبريز — مكان الاختراع والتصميم والتصنيع عام ١٣٩٩.',
        partner1Title: 'تكنولوجي پردازان توسعه خاورمیانه',
        partner1Desc: 'شريك التطوير والتسويق.',
        partner2Title: 'ایمن سهند پدیده',
        partner2Desc: 'وحدة تكنولوجية في حديقة تبريز — شريك التصميم والتصنيع.',
        storeTitle: 'البيع على ديجي‌كالا',
        storeDesc: 'رمز المنتج dkp-7694589 — مسند ظهر موديل bizdavar.'
      },
      related: {
        title: 'منتجات وخدمات ذات صلة',
        bizclean: 'معقم يدين آلي',
        biztab: 'مقياس حرارة جداري بلا تلامس',
        catalog: 'كتالوج المنتجات',
        catalogDesc: 'عتاد وخطوط إنتاج بيزدوار',
        about: 'عن بيزدوار',
        aboutDesc: 'الحديقة العلمية والمعارض والإنجازات'
      },
      geoText: 'منتج سيارات اختُرع في حديقة العلوم بجامعة تبريز — تصميم بيزدوار وبيع على ديجي‌كالا.'
    },
    bizpet: {
      hero: {
        tag: 'منتج ملكية · وسادة تدفئة',
        title: 'BizPet — وسادة التدفئة من بيزدوار',
        desc: 'صُممت وأُنتجت في حاضنة التكنولوجيا بجامعة تبريز — منتج فريق Bizdavar بأسماء بیز پت وپت بیز'
      },
      nav: {
        about: 'عن المنتج',
        rd: 'البحث والتطوير',
        pets: 'فراش الحيوانات',
        origin: 'الحاضنة',
        gallery: 'معرض الصور',
        contact: 'اتصال'
      },
      about: {
        title: 'عن المنتج',
        imageAlt: 'BizPet — وسادة تدفئة رمادية صممها فريق Bizdavar',
        body: '<strong>BizPet</strong> (بیز پت / پت بیز) وسادة التدفئة پدیده — للتدفئة في الموسم البارد وتخفيف الألم الموضعي، صُممت وأُنتجت في <strong>حاضنة التكنولوجيا بجامعة تبريز</strong>.',
        body2: 'طُوّر بالتعاون مع <strong>تكنولوجي پردازان توسعه خاورمیانه</strong> والوحدة التكنولوجية <strong>ایمن سهند پدیده</strong>. المنتج محمول للاستخدام في المنزل أو السيارة.',
        specsTitle: 'الميزات',
        specs: [
          'وسادة التدفئة پدیده — BizPet / بیز پت / پت بیز',
          'تدفئة الموسم البارد وتخفيف الألم الموضعي',
          'محمولة — استخدام منزلي وفي السيارة',
          'جهد التشغيل ٥–١٢ فولت (حد أقصى ١ أمبير)',
          'قابلة للغسل بعد إخراج عنصر التدفئة',
          'تصميم وإنتاج في حاضنة التكنولوجيا بجامعة تبريز',
          'تعاون مع ایمن سهند پدیده وتكنولوجي پردازان توسعه خاورمیانه'
        ],
        ctaContact: 'استعلام جملة / اتصال',
        ctaCatalog: 'كتالوج المنتجات'
      },
      gallery: {
        tanAlt: 'BizPet — وسادة تدفئة كريمية مع موصل الطاقة',
        elementAlt: 'BizPet — عنصر تدفئة بنقاط تلامس',
        posterAlt: 'ملصق وسادة التدفئة پدیده'
      },
      rd: {
        eyebrow: 'البحث والتطوير',
        title: 'اختبارات عنصر التدفئة في المختبر',
        desc: 'صور الاختبار الحراري والنموذج الأولي والتجميع — مسار الهندسة في حاضنة جامعة تبريز.',
        tempHighAlt: 'اختبار عنصر التدفئة بمقياس حرارة بالأشعة تحت الحمراء',
        tempHighCaption: 'اختبار حراري للعنصر في المختبر',
        tempAlt: 'قياس درجة حرارة السطح أثناء البحث والتطوير',
        tempCaption: 'درجة حرارة السطح في اختبارات البحث والتطوير',
        elementAlt: 'عنصر تدفئة مستطيل بنقاط تلامس',
        elementCaption: 'عنصر تدفئة بنقاط تلامس',
        protoAlt: 'نموذج أولي لوسادة التدفئة على كتلة عازلة',
        protoCaption: 'نموذج أولي وتجميع تجريبي'
      },
      military: {
        eyebrow: 'البحث والتطوير',
        title: 'وسائد التدفئة في الملابس العسكرية',
        desc: 'نموذج أولي لسترة تكتيكية بعنصر تدفئة مدمج ووحدة تحكم — بحث وتطوير لتطبيق الوسادة الحرارية داخل طبقات الملابس العسكرية.',
        vestAlt: 'نموذج أولي لسترة عسكرية بوسادة تدفئة على مانيكان',
        vestCaption: 'نموذج أولي لسترة تكتيكية مع وحدة التحكم الحراري',
        liningAlt: 'البطانة الداخلية للسترة وأسلاك وسادة التدفئة',
        liningCaption: 'البطانة الداخلية — عنصر تدفئة مخيّط',
        outdoorAlt: 'سترة عسكرية مُدفأة على مانيكان في الهواء الطلق',
        outdoorCaption: 'عرض النموذج الأولي في الهواء الطلق'
      },
      dryer: {
        eyebrow: 'البحث والتطوير',
        title: 'وسائد التدفئة في سلال تجفيف الفاكهة',
        desc: 'تصميم سلة خشبية لتجفيف الفاكهة بشبكة تدفئة سداسية وكابل تغذية — بحث وتطوير لتطبيق الوسادة الحرارية داخل سلال التجفيف.',
        imageAlt: 'نموذج أولي لسلة تجفيف الفاكهة بشبكة تدفئة',
        caption: 'تصيير ثلاثي الأبعاد لسلة التجفيف مع عنصر تدفئة شبكي.'
      },
      pets: {
        eyebrow: 'فرش نوم الحيوانات الأليفة',
        title: 'وسادة تدفئة بالأشعة تحت الحمراء للحيوانات الأليفة',
        desc: 'الوسادة نفسها مناسبة أيضاً لفرش نوم الكلاب والقطط — تدفئة بجهد آمن في الموسم البارد مع غطاء قابل للغسل.',
        imageAlt: 'BizPet — وسادة تدفئة بالأشعة تحت الحمراء لفرش نوم الحيوانات',
        specs: [
          'مناسبة لفرش نوم الحيوانات الأليفة',
          'مواد نانوية كربونية · أشعة تحت حمراء بعيدة · كفاءة ٩٥–٩٩٪',
          'جهد آمن ٥–١٢ فولت · استهلاك ٥–٨ واط',
          'غطاء ناعم قابل للفصل والغسل',
          'التحكم بدرجة الحرارة ضمن نطاق حرارة جسم الحيوان',
          'استخدام علاجي: تشنج عضلي والتهاب المفاصل — للحيوانات المسنّة أو الحامل'
        ]
      },
      expo: {
        eyebrow: 'المعرض',
        title: 'جناح ایمن سهند پدیده',
        desc: 'عرض وسائد التدفئة في المعرض — مع التركيز على الاستهلاك المنخفض جداً والتوافق البيئي.',
        imageAlt: 'جناح معرض ایمن سهند پدیده مع وسائد تدفئة',
        caption: 'جناح شركة ایمن سهند پدیده — تقديم وسادة تدفئة منخفضة الاستهلاك.'
      },
      origin: {
        eyebrow: 'حاضنة تبريز · ١٣٩٩',
        title: 'من التصميم إلى الإنتاج في الحاضنة التقنية',
        desc: 'BizPet أحد منتجات العتاد لفريق بيزدوار — وسادة التدفئة پدیده مع شريكين تكنولوجيين محليين.',
        parkTitle: 'حاضنة التكنولوجيا',
        parkDesc: 'جامعة تبريز — مكان تصميم وإنتاج وسادة التدفئة پدیده.',
        partner1Title: 'تكنولوجي پردازان توسعه خاورمیانه',
        partner1Desc: 'شريك التطوير والتسويق.',
        partner2Title: 'ایمن سهند پدیده',
        partner2Desc: 'وحدة تكنولوجية في حديقة تبريز — شريك تصميم وتصنيع وسادة التدفئة پدیده.',
        specTitle: '٥–١٢ فولت · حد أقصى ١ أمبير',
        specDesc: 'محمولة للمنزل والسيارة — قابلة للغسل بعد إخراج عنصر التدفئة.'
      },
      production: {
        eyebrow: 'خط الإنتاج',
        title: 'تجميع واختبار وسائد التدفئة',
        desc: 'محطة تجميع ومراقبة جودة — وسائد قماشية ووحدات تغذية وتعبئة المنتج.',
        imageAlt: 'خط إنتاج وسادة التدفئة BizPet — تجميع واختبار على طاولة العمل',
        caption: 'تجميع واختبار وسائد التدفئة في الورشة.'
      },
      related: {
        title: 'منتجات وخدمات ذات صلة',
        bizseat: 'مسند ظهر مقعد السيارة',
        biztab: 'مقياس حرارة جداري بلا تلامس',
        catalog: 'كتالوج المنتجات',
        catalogDesc: 'عتاد وخطوط إنتاج بيزدوار',
        about: 'عن بيزدوار',
        aboutDesc: 'الحديقة العلمية والمعارض والإنجازات'
      },
      geoText: 'وسادة تدفئة صُممت في حاضنة التكنولوجيا بجامعة تبريز — منتج بیز پت لفريق بيزدوار.'
    }
  });

  var articleSlugs = [
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
    'about-bizdavar-group'
  ];
  function articlesFromPosts(posts, author, cta) {
    var acc = {};
    articleSlugs.forEach(function (slug, i) {
      var row = posts[i];
      if (!row) return;
      acc[slug] = {
        category: row.category,
        title: row.title,
        dateDisplay: author + ' · <time>2025</time>',
        cta: cta
      };
    });
    return acc;
  }
  ru.articles = articlesFromPosts(ru.blogPosts, 'Bizdavar Group', {
    text: 'Свяжитесь с Bizdavar для экспертной консультации.',
    btnPrimary: 'Бесплатная консультация',
    btnSecondary: 'Услуги'
  });
  ar.articles = articlesFromPosts(ar.blogPosts, 'بيزدوار', {
    text: 'تواصل مع بيزدوار للاستشارة المتخصصة.',
    btnPrimary: 'استشارة مجانية',
    btnSecondary: 'عرض الخدمات'
  });

  window.BIZDAVAR_LOCALES.ru = ru;
  window.BIZDAVAR_LOCALES.ar = ar;
})();
