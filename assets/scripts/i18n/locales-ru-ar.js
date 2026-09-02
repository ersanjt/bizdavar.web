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
      seoTitle: 'Bizdavar Group | веб-дизайн, цифровой маркетинг и промышленные поставки',
      seoDescription: 'Bizdavar Group: сайты Fast Web Studio, цифровой маркетинг и SMM, FXGuard WhatsApp CRM, поставки VEGA, Prosense и Liqui Moly. Бесплатная консультация.',
      seoKeywords: 'Bizdavar, веб-дизайн Стамбул, цифровой маркетинг, FXGuard, VEGA, Prosense, Liqui Moly, Fast Web Studio'
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
      seoTitle: 'Каталог газовых детекторов Prosense | PQ и SafeVader',
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
    customWebApp: {
      crumb: 'Web & app',
      seoTitle: 'Кастомный web и приложения | Bizdavar',
      seoDescription: 'Web app, панели и кастомные системы — когда Fast недостаточно. Разработка Bizdavar.',
      seoKeywords: 'web app, кастомная разработка, Bizdavar'
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
    bizpet: {
      crumb: 'BizPet',
      seoTitle: 'BizPet | грелка Padideh — продукт Bizdavar',
      seoDescription: 'BizPet — переносная грелка Padideh для дома, автомобиля и лежанок питомцев. Разработана в технологическом инкубаторе Университета Тебриза. 5–12 В.',
      seoKeywords: 'BizPet, грелка, Padideh, Bizdavar, Тебриз'
    },
    uwt: {
      crumb: 'UWT',
      seoTitle: 'Поставка датчиков уровня UWT | Rotonivo и NivoRadar — Bizdavar',
      seoDescription: 'Оригинальные датчики уровня UWT из Германии для силосов и резервуаров. Rotonivo, Vibranivo, NivoRadar и NivoGuide — техконсультация, проформа и логистика — Bizdavar Group.',
      seoKeywords: 'UWT, Rotonivo, NivoRadar, Vibranivo, датчик уровня силоса, Bizdavar'
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
      seoTitle: 'FXGuard Accounting | скоро — бухгалтерия suite FXGuard — Bizdavar',
      seoDescription: 'FXGuard Accounting скоро — бухгалтерия для обменников и SME рядом с WhatsApp CRM. Лист ожидания открыт. Разработка Bizdavar.',
      seoKeywords: 'FXGuard Accounting, бухгалтерия, лист ожидания, Bizdavar, fxguard.io'
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
    articleWebsiteSpeed5Days: {
      crumb: 'Чеклист 5 дней',
      seoTitle: 'Чеклист запуска сайта за 5 дней | Bizdavar',
      seoDescription: 'Практический чеклист для запуска сайта за 5 дней с Fast Web Studio.',
      seoKeywords: 'быстрый сайт, Fast Studio, Bizdavar'
    },
    articleCustomWebApp: {
      crumb: 'Custom web & app',
      seoTitle: 'Кастомный web и приложения — как выбрать | Bizdavar',
      seoDescription: 'Когда хватает Fast, а когда нужен кастомный web app или мобильное приложение.',
      seoKeywords: 'web app, кастомный проект, Bizdavar'
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
      seoTitle: 'Поставка датчиков VEGA в Иран международно | Bizdavar',
      seoDescription: 'Как закупить оригинальные датчики VEGA для проектов в Иране — консультация, проформа и международная логистика Bizdavar.',
      seoKeywords: 'купить VEGA Иран, поставка VEGA, VEGAPULS, Bizdavar Стамбул'
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
      seoTitle: 'Bizdavar Group | تصميم مواقع وتسويق رقمي وتوريد صناعي',
      seoDescription: 'Bizdavar Group: مواقع Fast Web Studio، تسويق رقمي وSMM، FXGuard WhatsApp CRM، وتوريد VEGA وProsense وLiqui Moly. استشارة مجانية.',
      seoKeywords: 'Bizdavar, تصميم مواقع إسطنبول, تسويق رقمي, FXGuard, VEGA, Prosense, Liqui Moly, Fast Web Studio'
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
      seoTitle: 'كتالوج كواشف غاز Prosense | PQ وSafeVader',
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
    customWebApp: {
      crumb: 'ويب وتطبيق',
      seoTitle: 'تطوير ويب وتطبيق مخصص | Bizdavar',
      seoDescription: 'ويب أب، لوحات وأنظمة مخصصة — عندما لا يكفي Fast. تطوير Bizdavar.',
      seoKeywords: 'تطبيق ويب, تطوير مخصص, Bizdavar'
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
    bizpet: {
      crumb: 'BizPet',
      seoTitle: 'BizPet | وسادة تدفئة Padideh — منتج Bizdavar',
      seoDescription: 'BizPet — وسادة تدفئة Padideh محمولة للمنزل والسيارة وأسرة الحيوانات. صُممت في حاضنة جامعة تبريز. 5–12 فولت.',
      seoKeywords: 'BizPet, وسادة تدفئة, Padideh, Bizdavar, تبريز'
    },
    uwt: {
      crumb: 'UWT',
      seoTitle: 'توريد حساسات مستوى UWT | Rotonivo وNivoRadar — Bizdavar',
      seoDescription: 'حساسات مستوى UWT أصلية من ألمانيا للصوامع والخزانات. Rotonivo وVibranivo وNivoRadar وNivoGuide — استشارة فنية وفاتورة أولية ولوجستيات — Bizdavar Group.',
      seoKeywords: 'UWT, Rotonivo, NivoRadar, Vibranivo, حساس مستوى, Bizdavar'
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
      seoTitle: 'FXGuard Accounting | قريباً — محاسبة suite FXGuard — Bizdavar',
      seoDescription: 'FXGuard Accounting قريباً — محاسبة لفرق الصرافة والشركات الصغيرة بجانب WhatsApp CRM. قائمة الانتظار مفتوحة. تطوير Bizdavar.',
      seoKeywords: 'FXGuard Accounting, محاسبة, قائمة انتظار, Bizdavar, fxguard.io'
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
    articleWebsiteSpeed5Days: {
      crumb: 'قائمة ٥ أيام',
      seoTitle: 'قائمة إطلاق موقع خلال ٥ أيام | Bizdavar',
      seoDescription: 'قائمة عملية للإطلاق خلال ٥ أيام مع Fast Web Studio.',
      seoKeywords: 'موقع سريع, Fast Studio, Bizdavar'
    },
    articleCustomWebApp: {
      crumb: 'ويب وتطبيق مخصص',
      seoTitle: 'ويب وتطبيق مخصص — دليل الاختيار | Bizdavar',
      seoDescription: 'متى يكفي Fast ومتى تحتاج ويب أب أو تطبيق مخصص.',
      seoKeywords: 'ويب أب, مشروع مخصص, Bizdavar'
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
      seoTitle: 'توريد حساسات VEGA إلى إيران دوليًا | Bizdavar',
      seoDescription: 'كيف تشتري حساسات VEGA الأصلية لمشاريع إيران — استشارة وفاتورة مبدئية ولوجستيات من مكتب Bizdavar في إسطنبول.',
      seoKeywords: 'شراء VEGA إيران, توريد VEGA, VEGAPULS, Bizdavar إسطنبول'
    },
    articleMultilingualWeb: {
      crumb: 'موقع متعدد اللغات',
      seoTitle: 'مواقع متعددة اللغات لإيران وتركيا | Bizdavar',
      seoDescription: 'مواقع fa/tr/en مع hreflang وثقة محلية — دليل Bizdavar للأعمال ذات السوقين.',
      seoKeywords: 'موقع متعدد اللغات, hreflang, Bizdavar'
    }
  };

  var conversionsRu = {
    fabLabel: 'Бесплатная консультация',
    fabAria: 'Бесплатная консультация в WhatsApp',
    waDefault: 'Здравствуйте, пишу с сайта bizdavar.com.',
    waVega: 'Здравствуйте, запрос цены на датчики VEGA — bizdavar.com',
    waUwt: 'Здравствуйте, запрос цены на датчики UWT — bizdavar.com',
    waProsense: 'Здравствуйте, запрос цены на Prosense — bizdavar.com',
    waFast: 'Здравствуйте, хочу консультацию по Fast Web Studio — bizdavar.com',
    waLiqui: 'Здравствуйте, запрос цены на Liqui Moly — bizdavar.com',
    waGamak: 'Здравствуйте, запрос цены на моторы Gamak — bizdavar.com',
    waFxguard: 'Здравствуйте, хочу демо FXGuard CRM — bizdavar.com',
    waContact: 'Здравствуйте, пишу с сайта bizdavar.com.'
  };

  var conversionsAr = {
    fabLabel: 'استشارة مجانية',
    fabAria: 'استشارة مجانية عبر واتساب',
    waDefault: 'مرحباً، أراسل من موقع bizdavar.com.',
    waVega: 'مرحباً، أطلب عرض سعر لحساسات VEGA — bizdavar.com',
    waUwt: 'مرحباً، أطلب عرض سعر لحساسات UWT — bizdavar.com',
    waProsense: 'مرحباً، أطلب عرض سعر Prosense — bizdavar.com',
    waFast: 'مرحباً، أريد استشارة حول Fast Web Studio — bizdavar.com',
    waLiqui: 'مرحباً، أطلب سعر Liqui Moly — bizdavar.com',
    waGamak: 'مرحباً، أطلب عرض سعر محركات Gamak — bizdavar.com',
    waFxguard: 'مرحباً، أريد تجربة FXGuard CRM — bizdavar.com',
    waContact: 'مرحباً، أراسل من موقع bizdavar.com.'
  };

  var contactPageRu = {
    connectTitle: 'Каналы связи',
    websites: 'Сайты',
    title: 'Контакты',
    mapImgAlt: 'Международное сотрудничество — Bizdavar Group',
    heroTitle: 'Готовы к бесплатной консультации',
    heroDesc: 'Заполните форму ниже или свяжитесь с командой Bizdavar напрямую.',
    formTitle: 'Форма обратной связи',
    formDesc: 'Поля со звёздочкой обязательны.',
    subtitle: 'Заполните форму или напишите в WhatsApp — ответ в рабочие часы',
    firstName: 'Имя',
    lastName: 'Фамилия',
    placeholderFirstName: 'Ваше имя',
    placeholderLastName: 'Ваша фамилия',
    email: 'Email',
    phone: 'Телефон / WhatsApp',
    service: 'Тип услуги',
    servicePlaceholder: 'Выберите…',
    message: 'Ваше сообщение',
    messagePlaceholder: 'Кратко опишите ваш запрос…',
    privacyBefore: 'Я согласен с',
    privacyLink: 'политикой конфиденциальности',
    privacyAfter: '.',
    submit: 'Отправить в WhatsApp',
    submitEmail: 'Отправить запрос',
    formWhatsappHint: 'Сообщение откроется в WhatsApp — быстрее, чем email.',
    formNote: 'Данные используются только для ответа на ваш запрос.',
    formSending: 'Отправка…',
    formSuccess: 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
    formError: 'Ошибка отправки. Повторите попытку или напишите на info@bizdavar.com.',
    geoText: 'Консультация из офисов в Иране, Турции, Армении и Дубае — WhatsApp на персидском и турецком.',
    waTr: 'WhatsApp Турция',
    waIr: 'WhatsApp персидский'
  };

  var contactPageAr = {
    connectTitle: 'قنوات التواصل',
    websites: 'المواقع',
    title: 'اتصل بنا',
    mapImgAlt: 'تعاون دولي — Bizdavar Group',
    heroTitle: 'جاهزون للاستشارة المجانية',
    heroDesc: 'املأ النموذج أدناه أو تواصل مباشرة مع فريق Bizdavar.',
    formTitle: 'نموذج طلب التواصل',
    formDesc: 'الحقول المميزة بـ * إلزامية.',
    subtitle: 'املأ النموذج أو راسلنا على واتساب — الرد خلال ساعات العمل',
    firstName: 'الاسم',
    lastName: 'اسم العائلة',
    placeholderFirstName: 'اسمك',
    placeholderLastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف / واتساب',
    service: 'نوع الخدمة',
    servicePlaceholder: 'اختر…',
    message: 'رسالتك',
    messagePlaceholder: 'صف احتياجك باختصار…',
    privacyBefore: 'أوافق على',
    privacyLink: 'سياسة الخصوصية',
    privacyAfter: '.',
    submit: 'إرسال عبر واتساب',
    submitEmail: 'إرسال الطلب',
    formWhatsappHint: 'تُفتح رسالتك مباشرة في واتساب — أسرع من البريد.',
    formNote: 'تُستخدم معلوماتك فقط للرد على طلبك.',
    formSending: 'جارٍ الإرسال…',
    formSuccess: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
    formError: 'فشل الإرسال. حاول مرة أخرى أو راسل info@bizdavar.com.',
    geoText: 'استشارة من مكاتب إيران وتركيا وأرمينيا ودبي — واتساب بالفارسية والتركية.',
    waTr: 'واتساب تركيا',
    waIr: 'واتساب فارسي'
  };

  var homeRu = {
    heroBadge: 'Bizdavar Group — цифровое агентство',
    heroTitle: 'Развивайте бизнес с',
    heroTitleSpan: 'умными цифровыми',
    heroTitleEnd: 'решениями',
    heroDesc: 'Сайты Fast Web Studio, цифровой маркетинг, FXGuard и поставки VEGA, UWT, Prosense и Liqui Moly — офисы в Иране, Турции, Армении и Дубае.',
    viewServices: 'Смотреть услуги',
    heroFast: 'Сайт от $99 — 5 дней',
    heroIndustrial: 'Промышленный запрос',
    heroVisualAlt: 'Радарный датчик уровня на промышленном резервуаре — поставки Bizdavar',
    heroDigitalAlt: 'Студия веб-дизайна и цифровая панель Bizdavar',
    heroChipVega: 'Каталог VEGA',
    heroChipFast: 'Сайт от $99',
    statProjectsValue: '+100',
    statCountriesValue: '11',
    statYearsValue: '2013',
    statFastValue: '5 дней',
    statFast: 'Сдача сайта',
    marqueeAria: 'Промышленные и цифровые бренды Bizdavar',
    marqueeLabel: 'Бренды, которые мы поставляем и создаём',
    pathEyebrow: 'Три пути сотрудничества',
    pathTitle: 'С чего начать?',
    pathDesc: 'Промпоставки, продукты Bizdavar или цифровые услуги — выберите путь',
    pathSupplyAlt: 'КИП, готовый к поставке на объект в Иране',
    pathProductsAlt: 'WhatsApp CRM и программные продукты Bizdavar',
    pathDigitalAlt: 'Студия сайтов, приложений и цифрового маркетинга',
    svcDmImgAlt: 'Цифровой маркетинг и реклама',
    svcWebImgAlt: 'Английский сайт Fast Web Studio',
    svcSmmImgAlt: 'Ведение соцсетей',
    svcAppsImgAlt: 'Разработка приложений и систем',
    svcServerImgAlt: 'Управление серверами и инфраструктурой',
    svcFieldImgAlt: 'Камеры и электрика в Тебризе',
    fastImgAlt: 'Английский сайт за пять рабочих дней',
    intentNavLabel: 'Быстрая покупка для Ирана',
    intentVega: 'Купить VEGA',
    intentProsense: 'Детектор Prosense',
    intentLiqui: 'Liqui Moly',
    intentTeltonika: 'Трекер Teltonika',
    intentGamak: 'Двигатель Gamak',
    intentDigi: 'Весы Digi',
    intentTeraoka: 'Весы Teraoka',
    intentQuote: 'Бесплатный запрос',
    leadPathsEyebrow: 'Быстрый старт',
    leadPathsTitle: 'Как вы хотите с нами работать?',
    leadPathsDesc: 'Выберите путь — обычно отвечаем в течение 24 часов',
    leadPaths: [
      { icon: 'desktop', title: 'Сайт и онлайн-продажи', desc: 'Fast Web Studio — от $99, сдача за 5 дней, WhatsApp и форма лидов', cta: 'Смотреть тарифы', url: '/ru/pages/fast' },
      { icon: 'factory', title: 'Промышленные поставки', desc: 'VEGA, Prosense, UWT, Liqui Moly — запрос с техконсультацией', cta: 'Запросить цену', url: '/ru/pages/contact?service=industrial' },
      { icon: 'phone', title: 'Бесплатная консультация', desc: 'Веб, маркетинг, FXGuard CRM или кастомный проект — без обязательств', cta: 'Связаться', url: '/ru/pages/contact' }
    ],
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
    featIndustrialDesc: 'VEGA, UWT, Prosense, Liqui Moly и КИП',
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
    aboutP1: 'Большинство клиентов в Иране покупают промпоставки: VEGA, Prosense, Liqui Moly. Рядом делаем сайты, маркетинг и ПО вроде FXGuard.',
    aboutP2: 'Цифровая инфраструктура, домены, SSL и безопасность — тоже наши услуги. Международный хостинг и домены через <a href="https://netinode.net/" class="service-card__link" target="_blank" rel="noopener noreferrer">Netinode</a>.',
    aboutHeroImage: 'assets/images/content/home-about.webp',
    aboutHeroAlt: 'Промышленные датчики и цифровая панель на рабочем столе Bizdavar',
    aboutMore: 'Подробнее о Bizdavar',
    aboutInfra: 'Управление инфраструктурой',
    ownedEyebrow: 'Сделано Bizdavar',
    ownedTitle: 'Что делаем сами',
    ownedDesc: 'WhatsApp CRM и BizSwap — живые продукты. Произведённое железо — в достижениях компании.',
    ownedCta: 'Все продукты',
    ownedAchievements: 'Достижения и производство',
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
      { q: 'С какого года работает Bizdavar Group?', a: 'С 2013 года, основатель — Эрсан Джахед Табризи. Более 100 проектов в 11 странах.' },
      { q: 'Какие услуги предоставляет Bizdavar?', a: 'Шесть направлений: цифровой маркетинг, веб и web app, мобильные приложения и системы, серверы, SMM и технический монтаж (CCTV, проводка, освещение). Продукты и промышленные бренды — на странице продуктов.' },
      { q: 'Сколько занимает разработка сайта?', a: 'С Fast Web Studio — от 5 рабочих дней, тарифы от $99 до $299.' },
      { q: 'Как проверить надёжность Bizdavar?', a: 'LinkedIn основателя, портфолио, сертификаты Google и info@bizdavar.com.' },
      { q: 'Какие промышленные бренды вы поставляете?', a: 'VEGA, UWT, Prosense, Liqui Moly, Gamak, Digi System, Teraoka и другие глобальные бренды.' }
    ]
  };

  var homeAr = {
    heroBadge: 'Bizdavar Group — وكالة تسويق رقمي',
    heroTitle: 'نمِّ عملك مع',
    heroTitleSpan: 'حلول رقمية',
    heroTitleEnd: 'ذكية',
    heroDesc: 'مواقع Fast Web Studio وتسويق رقمي وFXGuard وتوريد VEGA وUWT وProsense وLiqui Moly — مكاتب في إيران وتركيا وأرمينيا ودبي.',
    viewServices: 'عرض الخدمات',
    heroFast: 'موقع من $99 — ٥ أيام',
    heroIndustrial: 'عرض سعر صناعي',
    heroVisualAlt: 'حساس مستوى راداري على خزان صناعي — توريد بيزدوار',
    heroDigitalAlt: 'استوديو تصميم المواقع ولوحة رقمية من بيزدوار',
    heroChipVega: 'كتالوج VEGA',
    heroChipFast: 'موقع من ٩٩ دولاراً',
    statProjectsValue: '+١٠٠',
    statCountriesValue: '١١',
    statYearsValue: '٢٠١٣',
    statFastValue: '٥ أيام',
    statFast: 'تسليم الموقع',
    marqueeAria: 'علامات بيزدوار الصناعية والرقمية',
    marqueeLabel: 'علامات نوفرها ونبنيها',
    pathEyebrow: 'ثلاثة مسارات للتعاون',
    pathTitle: 'من أين نبدأ؟',
    pathDesc: 'توريد صناعي أو منتجات بيزدوار أو خدمات رقمية — اختر المسار المناسب',
    pathSupplyAlt: 'أجهزة قياس جاهزة للتسليم إلى مشروع في إيران',
    pathProductsAlt: 'WhatsApp CRM ومنتجات برمجيات بيزدوار',
    pathDigitalAlt: 'استوديو المواقع والتطبيقات والتسويق الرقمي',
    svcDmImgAlt: 'تسويق رقمي وإعلانات',
    svcWebImgAlt: 'تصميم موقع إنجليزي Fast Web Studio',
    svcSmmImgAlt: 'إدارة شبكات اجتماعية',
    svcAppsImgAlt: 'تطوير تطبيقات وأنظمة',
    svcServerImgAlt: 'إدارة الخوادم والبنية التحتية',
    svcFieldImgAlt: 'كاميرات وتمديدات في تبريز',
    fastImgAlt: 'موقع إنجليزي خلال خمسة أيام عمل',
    intentNavLabel: 'شراء سريع لإيران',
    intentVega: 'شراء VEGA',
    intentProsense: 'كاشف Prosense',
    intentLiqui: 'Liqui Moly',
    intentTeltonika: 'متعقب Teltonika',
    intentGamak: 'محرك Gamak',
    intentDigi: 'ميزان Digi',
    intentTeraoka: 'ميزان Teraoka',
    intentQuote: 'عرض سعر مجاني',
    leadPathsEyebrow: 'بداية سريعة',
    leadPathsTitle: 'كيف تريد العمل معنا؟',
    leadPathsDesc: 'اختر المسار — نرد عادةً خلال ٢٤ ساعة',
    leadPaths: [
      { icon: 'desktop', title: 'موقع ومبيعات أونلاين', desc: 'Fast Web Studio — من $99، تسليم خلال ٥ أيام، واتساب ونموذج leads', cta: 'عرض الباقات', url: '/ar/pages/fast' },
      { icon: 'factory', title: 'توريد صناعي', desc: 'VEGA وProsense وUWT وLiqui Moly — عرض سعر مع استشارة فنية', cta: 'طلب عرض سعر', url: '/ar/pages/contact?service=industrial' },
      { icon: 'phone', title: 'استشارة مجانية', desc: 'ويب، تسويق، FXGuard CRM أو مشروع مخصص — بدون التزام', cta: 'اتصل بنا', url: '/ar/pages/contact' }
    ],
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
    featIndustrialDesc: 'VEGA وUWT وProsense وLiqui Moly وأدوات دقيقة',
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
    aboutP1: 'معظم عملائنا في إيران يشترون التوريد الصناعي: VEGA وProsense وLiqui Moly. إلى جانبه نبني المواقع والتسويق وبرمجيات مثل FXGuard.',
    aboutP2: 'البنية الرقمية والنطاقات وSSL والأمان جزء من خدماتنا أيضاً — استضافة ونطاقات دولية عبر <a href="https://netinode.net/" class="service-card__link" target="_blank" rel="noopener noreferrer">Netinode</a>.',
    aboutHeroImage: 'assets/images/content/home-about.webp',
    aboutHeroAlt: 'حساسات صناعية ولوحة رقمية على مكتب عمل بيزدوار',
    aboutMore: 'المزيد عن Bizdavar',
    aboutInfra: 'إدارة البنية',
    ownedEyebrow: 'صنع بيزدوار',
    ownedTitle: 'ما نصنعه بأنفسنا',
    ownedDesc: 'WhatsApp CRM وBizSwap — منتجات حية. العتاد المُنتَج في إنجازات الشركة.',
    ownedCta: 'عرض كل المنتجات',
    ownedAchievements: 'إنجازات وإنتاج',
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
      { q: 'منذ متى تعمل مجموعة Bizdavar؟', a: 'منذ ٢٠١٣، أسسها إرسان جاهد تبريزي — أكثر من ١٠٠ مشروع في ١١ دولة.' },
      { q: 'ما الخدمات التي تقدمها Bizdavar؟', a: 'ستة محاور: تسويق رقمي، ويب وweb app، تطبيقات وأنظمة، خوادم، SMM وتركيبات فنية (كاميرات وتمديدات وإضاءة). المنتجات والعلامات الصناعية في صفحة المنتجات.' },
      { q: 'كم يستغرق تصميم الموقع؟', a: 'مع Fast Web Studio التسليم من ٥ أيام عمل، باقات من $99 إلى $299.' },
      { q: 'كيف أتحقق من موثوقية Bizdavar؟', a: 'LinkedIn المؤسس، الأعمال، شهادات Google وinfo@bizdavar.com.' },
      { q: 'ما العلامات الصناعية التي تورّدونها؟', a: 'VEGA وUWT وProsense وLiqui Moly وGamak وDigi System وTeraoka وعلامات عالمية أخرى.' }
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
      summary: 'Услуги в Иране, Турции и 11 странах — офисы в Иране, Турции, Армении и Дубае · многоязычная поддержка, WhatsApp и международная доставка.',
      hubs: [
        { city: 'Тебриз', country: 'Иран', role: 'Офис в Иране · промышленные и цифровые проекты' },
        { city: 'Стамбул', country: 'Турция', role: 'Офис в Турции · финтех и международные операции' },
        { city: 'Ереван', country: 'Армения', role: 'Офис в Армении · Bizdavar Group LLC' },
        { city: 'Дубай', country: 'ОАЭ', role: 'Офис в Дубае · региональные операции' }
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
      visualAlt: 'Экспортный ящик промышленного оборудования для проекта в Иране',
      visualLead: 'От запроса до поставки на объект',
      visualNote: 'Назовите модель — проформа на фарси и логистика до объекта в Иране.',
      step1: 'Подбор модели',
      step2: 'Проформа на фарси',
      step3: 'Доставка в Иран',
      products: [
        { name: 'VEGA', title: 'Датчики и КИП', desc: 'Уровень, давление, расход — нефть, нефтехимия и вода', badge: 'Германия', tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'], cta: 'Смотреть каталог' },
        { name: 'UWT', title: 'Уровень силоса и резервуара', desc: 'Сигнализаторы и радар для сыпучих и жидкостей — Rotonivo, Vibranivo, NivoRadar', badge: 'Германия', tags: ['Rotonivo', 'NivoRadar', 'Vibranivo'], cta: 'Каталог UWT' },
        { name: 'Prosense', title: 'Газовые и пламенные детекторы', desc: 'Стационарные и портативные системы с сертификацией SIL2/3', badge: 'Турция', tags: ['PQ+', 'SafeVader', 'PPS'], cta: 'Линейки продуктов' },
        { name: 'Teltonika', title: 'GPS и Fleet Telematics', desc: 'Трекеры флота, CAN/OBD, BLE, видео и IoT — FMB920 · FMC650 · FTC305', badge: 'Литва', tags: ['FMB920', 'FTC305', 'DualCam'], cta: 'Каталог Teltonika' },
        { name: 'Gamak', title: 'Промышленные электродвигатели', desc: 'Трёхфазные и однофазные моторы — поставка и техподдержка', badge: 'Турция', tags: ['IE2/IE3', 'Фланец', 'Под проект'], cta: 'О Gamak' },
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
      summary: 'خدمات في إيران وتركيا و١١ دولة — مكاتب في إيران وتركيا وأرمينيا ودبي · دعم متعدد اللغات وواتساب وتسليم دولي.',
      hubs: [
        { city: 'تبريز', country: 'إيران', role: 'مكتب إيران · مشاريع صناعية ورقمية' },
        { city: 'إسطنبول', country: 'تركيا', role: 'مكتب تركيا · فنتك وعمليات دولية' },
        { city: 'يريفان', country: 'أرمينيا', role: 'مكتب أرمينيا · Bizdavar Group LLC' },
        { city: 'دبي', country: 'الإمارات', role: 'مكتب دبي · عمليات إقليمية' }
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
      visualAlt: 'صندوق تصدير لمعدات صناعية جاهزة لمشروع في إيران',
      visualLead: 'من الاستفسار حتى التسليم في الموقع',
      visualNote: 'حدّدوا الموديل — عرض سعر بالفارسية ولوجستيات حتى المشروع في إيران.',
      step1: 'اختيار الموديل',
      step2: 'عرض سعر بالفارسية',
      step3: 'تسليم إلى إيران',
      products: [
        { name: 'VEGA', title: 'حساسات وأدوات دقيقة', desc: 'مستوى وضغط وتدفق — نفط وبتروكيماويات ومياه', badge: 'ألمانيا', tags: ['VEGAPULS', 'VEGABAR', 'VEGAPOINT'], cta: 'عرض الكتالوج' },
        { name: 'UWT', title: 'قياس مستوى الصوامع والخزانات', desc: 'مفاتيح مستوى ورادار للمواد الصلبة والسوائل — Rotonivo وVibranivo وNivoRadar', badge: 'ألمانيا', tags: ['Rotonivo', 'NivoRadar', 'Vibranivo'], cta: 'كتالوج UWT' },
        { name: 'Prosense', title: 'كواشف غاز ولهب', desc: 'أنظمة ثابتة ومحمولة بشهادة SIL2/3', badge: 'تركيا', tags: ['PQ+', 'SafeVader', 'PPS'], cta: 'سلاسل المنتجات' },
        { name: 'Teltonika', title: 'GPS وFleet Telematics', desc: 'متتبعات أساطيل وCAN/OBD وBLE وفيديو وIoT — FMB920 · FMC650 · FTC305', badge: 'ليتوانيا', tags: ['FMB920', 'FTC305', 'DualCam'], cta: 'كتالوج Teltonika' },
        { name: 'Gamak', title: 'محركات كهربائية صناعية', desc: 'محركات ثلاثية وأحادية الطور — توريد ودعم فني', badge: 'تركيا', tags: ['IE2/IE3', 'فلانش', 'حسب المشروع'], cta: 'معلومات Gamak' },
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
      geoText: 'Оригинальные поставки датчиков VEGA — техконсультация международно, прозрачная проформа и логистика до промышленных проектов.',
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
      geoText: 'توريد أصلي لحساسات VEGA — استشارة فنية دوليًا، فاتورة مبدئية شفافة ولوجستيات إلى المشاريع الصناعية.',
      related: [
        { title: 'منتجات Prosense', desc: 'كواشف غاز ولهب' },
        { title: 'كتالوج المنتجات', desc: 'علامات التوريد' },
        { title: 'اتصل واستعلم', desc: 'استشارة مجانية' }
      ]
    }
  };

  var uwtPage = {
    ru: {
      sections: {
        trust: {
          eyebrow: 'Почему Bizdavar?',
          title: 'Надёжные поставки UWT для технических и закупочных команд',
          desc: 'Мы не просто показываем каталог — сопровождаем от выбора переключателя или радара до доставки.'
        },
        buy: {
          eyebrow: 'Путь покупки',
          title: 'От запроса до доставки — 5 понятных шагов',
          desc: 'Без сложностей — вы знаете каждый этап и остаётесь на связи.'
        },
        highlights: {
          eyebrow: 'Хиты продаж',
          title: 'Ключевые серии UWT для региональных проектов',
          desc: 'Rotonivo · Vibranivo · NivoRadar · NivoGuide — нажмите «Запросить цену» для каждой серии.'
        },
        catalog: {
          eyebrow: 'Полный каталог',
          title: 'Каталог измерения уровня UWT',
          desc: 'Point level, бесконтактный радар, guided radar и локальная индикация'
        },
        iran: {
          eyebrow: 'Региональное применение',
          title: 'UWT в типовых отраслях',
          desc: 'Если вашей отрасли нет в списке — пришлите тип материала и высоту силоса, подберём модель.'
        },
        industries: {
          eyebrow: 'Глобальные отрасли',
          title: 'Применение в разных отраслях',
          desc: 'Датчики уровня UWT для сыпучих материалов и жидкостей'
        },
        supply: {
          eyebrow: 'Поставки Bizdavar',
          title: 'Услуги поставки UWT',
          desc: 'Ваш партнёр по поставкам — не просто поставщик'
        },
        faq: {
          eyebrow: 'FAQ',
          title: 'Частые вопросы покупателей',
          desc: 'Не нашли ответ? Свяжитесь с нами напрямую.'
        }
      },
      officialNote: 'Технические данные основаны на <a href="https://www.uwtgroup.com/en/" target="_blank" rel="noopener noreferrer">официальном сайте UWT</a>. Для запроса — <a href="contact">свяжитесь с Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>',
      cta: {
        title: 'Готовы запросить цену UWT?',
        desc: 'Пришлите тип материала, высоту силоса и точки min/max — Rotonivo · Vibranivo · NivoRadar',
        btnForm: 'Форма запроса',
        btnServices: 'Каталог продуктов'
      },
      sticky: { label: 'Запрос UWT' },
      geoText: 'Оригинальные датчики уровня UWT из Германии — техконсультация, проформа и логистика от Bizdavar Group.',
      related: [
        { title: 'Каталог VEGA', desc: 'Датчики уровня и давления' },
        { title: 'Prosense', desc: 'Газовые и пламенные детекторы' },
        { title: 'Каталог продуктов', desc: 'B2B бренды поставок' },
        { title: 'Контакты и запрос', desc: 'Бесплатная консультация' }
      ]
    },
    ar: {
      sections: {
        trust: {
          eyebrow: 'لماذا Bizdavar؟',
          title: 'توريد موثوق لـ UWT لفرقك الفنية والمشتريات',
          desc: 'نحن لا نعرض كتالوجاً فحسب — نرافقك من اختيار المفتاح أو الرادار حتى التسليم.'
        },
        buy: {
          eyebrow: 'مسار الشراء',
          title: 'من الاستعلام إلى التسليم — 5 خطوات واضحة',
          desc: 'بدون تعقيد — تعرف كل خطوة وتبقى على تواصل طوال العملية.'
        },
        highlights: {
          eyebrow: 'المنتجات الأكثر طلباً',
          title: 'سلسل UWT البارزة للمشاريع الإقليمية',
          desc: 'Rotonivo · Vibranivo · NivoRadar · NivoGuide — اضغط «طلب عرض سعر» لكل سلسلة.'
        },
        catalog: {
          eyebrow: 'الكتالوج الكامل',
          title: 'كتالوج قياس مستوى UWT',
          desc: 'مفتاح مستوى، رادار بلا تماس، رادار موجّه وعرض محلي'
        },
        iran: {
          eyebrow: 'التطبيق الإقليمي',
          title: 'UWT عبر الصناعات الشائعة',
          desc: 'إذا لم يكن قطاعك مدرجاً — أرسل نوع المادة وارتفاع الصومعة وسنقترح الموديل المناسب.'
        },
        industries: {
          eyebrow: 'صناعات عالمية',
          title: 'التطبيق في صناعات مختلفة',
          desc: 'حساسات مستوى UWT للمواد السائبة والسوائل'
        },
        supply: {
          eyebrow: 'توريد Bizdavar',
          title: 'خدمات توريد UWT',
          desc: 'شريك التوريد — وليس مجرد بائع'
        },
        faq: {
          eyebrow: 'الأسئلة الشائعة',
          title: 'أسئلة المشترين الشائعة',
          desc: 'لم تجد إجابتك؟ تواصل معنا مباشرة.'
        }
      },
      officialNote: 'المعلومات الفنية مستندة إلى <a href="https://www.uwtgroup.com/en/" target="_blank" rel="noopener noreferrer">الموقع الرسمي لـ UWT</a>. للاستعلام — <a href="contact">تواصل مع Bizdavar</a> · <a href="vega">VEGA</a> · <a href="prosense">Prosense</a>',
      cta: {
        title: 'هل أنت مستعد لطلب عرض سعر UWT؟',
        desc: 'أرسل نوع المادة وارتفاع الصومعة ونقاط min/max — Rotonivo · Vibranivo · NivoRadar',
        btnForm: 'نموذج الاستعلام',
        btnServices: 'كتالوج المنتجات'
      },
      sticky: { label: 'استعلام UWT' },
      geoText: 'توريد أصلي لحساسات مستوى UWT من ألمانيا — استشارة فنية وفاتورة أولية ولوجستيات من Bizdavar Group.',
      related: [
        { title: 'كتالوج VEGA', desc: 'حساسات مستوى وضغط' },
        { title: 'Prosense', desc: 'كواشف غاز ولهب' },
        { title: 'كتالوج المنتجات', desc: 'علامات توريد B2B' },
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
    articleLocaleNote: 'Статья отображается на выбранном языке.',
    offerMap: {
      productsDesc: 'WhatsApp CRM, FXGuard Accounting и BizSwap'
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
    productsCatalog: 'Весь каталог',
    serviceDigital: 'Цифровой маркетинг',
    serviceDigitalDesc: 'Кампании, SEO и CRO',
    serviceWeb: 'Веб и web app',
    serviceWebDesc: 'Сайты, магазины и Fast Studio',
    serviceApps: 'Приложения и системы',
    serviceAppsDesc: 'Android, iOS и панели',
    serviceServer: 'Управление серверами',
    serviceServerDesc: 'VPS, безопасность и бэкапы',
    serviceSmm: 'SMM',
    serviceSmmDesc: 'Контент, reels и Paid Social',
    serviceField: 'Технические услуги',
    serviceFieldDesc: 'CCTV, проводка и освещение',
    serviceFieldFeaturedDesc: 'Тебриз и Стамбул — полевые работы',
    productsSupplyDesc: 'Консультация, подбор модели и проформа',
    productsSupplyLink: 'Промышленные бренды',
    productsHardware: 'Достижения и производство',
    productsMegaHint: 'ПО и SaaS Bizdavar'
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
  deepMerge(ru.productsPage || {}, {
    featured: {
      desc: 'WhatsApp CRM, Accounting и BizSwap — к заказу. Нагревательный мат и BizTab — в достижениях и полном каталоге.'
    },
    items: {
      fxguard: {
        title: 'Общий WhatsApp inbox',
        desc: 'Командный inbox, тикеты и филиалы — от $49/мес. Демо: app.fxguard.io.',
        homeDesc: 'Командный WhatsApp inbox — от $49'
      },
      bizpet: {
        title: 'Нагревательный мат',
        desc: 'Мат для дома, авто и лежанки питомца — дизайн команды Bizdavar.',
        homeDesc: 'Нагревательный мат для дома и автокресла'
      },
      biztab: {
        title: 'Бесконтактный настенный термометр',
        desc: 'Настенный бесконтактный термометр — погрешность менее 0,3°C, Тебриз.',
        homeDesc: 'Бесконтактный термометр для входа и клиники'
      },
      bizswap: {
        title: 'Пресale и своп токенов',
        desc: 'Кошелёк, своп и on-chain пресейл — BEP-20 и RWA.',
        homeDesc: 'Ончейн-своп и пресейл токена'
      }
    }
  });
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
  ru.uwtPage = uwtPage.ru;
  ru.prosensePage = prosensePage.ru;
  deepMerge(ru.conversions || {}, conversionsRu);
  deepMerge(ru.contactPage || {}, contactPageRu);
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
    ru.geo.summary = 'Услуги международно для Ирана, Турции и 11 стран — многоязычная поддержка, WhatsApp и международная доставка.';
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
    articleLocaleNote: 'يُعرض المقال باللغة التي اخترتها.',
    offerMap: {
      productsDesc: 'WhatsApp CRM ومحاسبة FXGuard وBizSwap'
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
    productsCatalog: 'كل المنتجات',
    serviceDigital: 'التسويق الرقمي',
    serviceDigitalDesc: 'حملات وSEO وتحسين التحويل',
    serviceWeb: 'ويب وتطبيقات',
    serviceWebDesc: 'مواقع ومتاجر وFast Studio',
    serviceApps: 'تطبيقات وأنظمة',
    serviceAppsDesc: 'Android وiOS ولوحات إدارية',
    serviceServer: 'إدارة الخوادم',
    serviceServerDesc: 'VPS وأمان ونسخ احتياطي',
    serviceSmm: 'إدارة SMM',
    serviceSmmDesc: 'محتوى وريلز وإعلانات مدفوعة',
    serviceField: 'خدمات فنية',
    serviceFieldDesc: 'كاميرات وتمديدات وإضاءة',
    serviceFieldFeaturedDesc: 'تبريز وإسطنبول — فرق ميدانية',
    productsSupplyDesc: 'استشارة واختيار الموديل وعرض سعر شفاف',
    productsSupplyLink: 'علامات صناعية',
    productsHardware: 'إنجازات وإنتاج',
    productsMegaHint: 'برمجيات وSaaS بيزدوار'
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
  deepMerge(ar.productsPage || {}, {
    featured: {
      desc: 'WhatsApp CRM ومحاسبة FXGuard وBizSwap — جاهزة للطلب. وسادة التدفئة وBizTab في الإنجازات والكتالوج الكامل.'
    },
    items: {
      fxguard: {
        title: 'صندوق واتساب مشترك',
        desc: 'صندوق فريق وتذاكر وفروع — من ٤٩ دولاراً شهرياً. التجربة: app.fxguard.io.',
        homeDesc: 'صندوق واتساب للفريق — من ٤٩ دولاراً'
      },
      bizpet: {
        title: 'وسادة تدفئة',
        desc: 'وسادة للمنزل والسيارة وسرير الحيوان — تصميم فريق بيزدوار.',
        homeDesc: 'وسادة تدفئة للمنزل ومقعد السيارة'
      },
      biztab: {
        title: 'مقياس حرارة جداري بلا لمس',
        desc: 'مقياس جداري بلا لمس — خطأ أقل من ٠٫٣°م، صنع تبريز.',
        homeDesc: 'مقياس بلا لمس للمدخل والعيادة'
      },
      bizswap: {
        title: 'بيع مسبق ومبادلة توكن',
        desc: 'محفظة ومبادلة وبيع مسبق على السلسلة — BEP-20 وRWA.',
        homeDesc: 'مبادلة وبيع مسبق للتوكن على السلسلة'
      }
    }
  });
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
  ar.uwtPage = uwtPage.ar;
  ar.prosensePage = prosensePage.ar;
  deepMerge(ar.conversions || {}, conversionsAr);
  deepMerge(ar.contactPage || {}, contactPageAr);
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
    ar.geo.summary = 'خدمات دوليًا إلى إيران وتركيا و١١ دولة — دعم متعدد اللغات وواتساب وتسليم دولي.';
  }
  if (ar.seo) {
    ar.seo.defaultTitle = pageSeoAr.home.seoTitle;
    ar.seo.defaultDescription = pageSeoAr.home.seoDescription;
  }

  var articleMeta = window.BIZDAVAR_ARTICLE_META;
  if (articleMeta && ru.articles && ar.articles) {
    ['ru', 'ar'].forEach(function (lang) {
      var loc = lang === 'ru' ? ru : ar;
      var cta = articleMeta.cta[lang] || articleMeta.cta.en;
      articleMeta.slugs.forEach(function (slug) {
        if (!loc.articles[slug]) return;
        loc.articles[slug].cta = cta;
        var d = articleMeta.dates[slug];
        if (d) {
          var display = d[lang] || d.en;
          loc.articles[slug].dateDisplay = 'Bizdavar Group · <time datetime="' + d.iso + '">' + display + '</time>';
        }
      });
    });
  }

  window.BIZDAVAR_LOCALES.ru = ru;
  window.BIZDAVAR_LOCALES.ar = ar;
})();
