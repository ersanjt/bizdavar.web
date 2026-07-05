/**
 * Owned products — fa / tr / en copy
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const catalog = {
    fa: {
      productsPage: {
        hero: {
          tag: 'مهندسی و تولید',
          title: 'محصولات بیزدوار',
          desc: 'دستگاه‌ها، خطوط تولید و نرم‌افزار SaaS که توسط تیم بیزدوار طراحی، مهندسی و ساخته شده‌اند — از WhatsApp CRM و IoT تا بسته‌بندی و تجهیزات پزشکی.'
        },
        intro: {
          title: 'ما چه می‌سازیم؟',
          body: 'بیزدوار گروپ علاوه بر خدمات دیجیتال و تامین صنعتی، <strong>محصولات سخت‌افزاری و نرم‌افزار SaaS اختصاصی</strong> نیز تولید می‌کند. هر محصول با مالکیت فکری تیم بیزدوار، در ایران (تبریز) و استانبول مهندسی شده و برای بازار داخلی و بین‌المللی قابل عرضه است.',
          ctaContact: 'استعلام و سفارش',
          ctaPortfolio: 'نمونه‌کارهای دیجیتال'
        },
        filterAll: 'همه',
        empty: 'محصولی برای نمایش نیست.',
        catalog: {
          eyebrow: 'کاتالوگ محصولات',
          title: 'دستگاه‌های مهندسی‌شده بیزدوار',
          desc: '۱۱ محصول و خط تولید — از BizSwap و CRM واتساپ تا BizTab و خطوط PPE. فیلتر بر اساس دسته یا مستقیم استعلام بگیرید.'
        },
        statusLive: 'صفحه محصول',
        statusCatalog: 'استعلام',
        categories: {
          software: { label: 'نرم‌افزار و SaaS', desc: 'CRM واتساپ و پلتفرم‌های B2B' },
          'iot-health': { label: 'IoT و بهداشت', desc: 'دماسنج، ضدعفونی‌کننده و تجهیزات بدون تماس' },
          packaging: { label: 'بسته‌بندی و سیل', desc: 'دستگاه‌های کش‌زن و خطوط بسته‌بندی' },
          medical: { label: 'پزشکی و PPE', desc: 'خطوط تولید ماسک و پد حرارتی' }
        },
        items: {
          bizswap: {
            name: 'BizSwap',
            title: 'پیش‌فروش و سواپ توکن',
            desc: 'ماژول Web3 — اتصال کیف پول، سواپ stablecoin به توکن، پیش‌فروش on-chain، اسلیپیج و پنل ادمین برای BEP-20 و RWA.',
            tags: ['DeFi', 'Web3', 'Token Swap']
          },
          fxguard: {
            name: 'CRM واتساپ',
            title: 'اسکریپت WhatsApp CRM',
            desc: 'اسکریپت اختصاصی CRM واتساپ — یک شماره، یک پنل، پیام انبوه و پاسخ خودکار. پلن $500، $800 و $1,200.',
            tags: ['WhatsApp CRM', 'اسکریپت اختصاصی', 'B2B']
          },
          biztab: {
            name: 'BizTab',
            title: 'دماسنج دیواری غیرتماسی',
            desc: 'اولین دماسنج دیواری غیرتماسی تبریز — دقت کمتر از ۰.۳°C، تأیید دانشگاه تبریز.',
            tags: ['IoT', 'غیرتماسی', 'تبریز']
          },
          bizclean: {
            name: 'BizClean',
            title: 'خط بهداشت و ضدعفونی',
            desc: 'دستگاه ضدعفونی دست اتوماتیک BizClean V5 — تولید تیم بیزدوار، RINOTEX 1400 از طریق واحد پارکی «ایمن سهند پدیده»، پوشش ISNA و صدا و سیما.',
            tags: ['بهداشت', 'اتوماتیک', 'کرونا']
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
            desc: 'دستگاه تولید پد حرارتی (heat pad) — برای مصارف درمانی و گرمایشی.',
            tags: ['پد حرارتی', 'پزشکی', 'تولید']
          }
        }
      },
      ownedProducts: {
        eyebrow: 'محصولات ما',
        title: 'مهندسی و تولید اختصاصی',
        desc: 'دستگاه‌هایی که تیم بیزدوار طراحی و ساخته — IoT، بهداشت، بسته‌بندی و خطوط تولید پزشکی',
        viewAll: 'همه محصولات',
        contact: 'استعلام محصول'
      },
      home: {
        ownedEyebrow: 'محصولات بیزدوار',
        ownedTitle: 'آنچه می‌سازیم',
        ownedDesc: 'علاوه بر خدمات دیجیتال، تیم بیزدوار دستگاه و خط تولید اختصاصی نیز مهندسی می‌کند — از BizTab تا خطوط بسته‌بندی و PPE.',
        ownedCta: 'مشاهده همه محصولات'
      }
    },
    tr: {
      productsPage: {
        hero: {
          tag: 'Mühendislik ve üretim',
          title: 'Bizdavar ürünleri',
          desc: 'Bizdavar ekibi tarafından tasarlanan cihazlar, hatlar ve SaaS — WhatsApp CRM ve IoT\'tan ambalaja ve medikal ekipmana.'
        },
        intro: {
          title: 'Ne üretiyoruz?',
          body: 'Bizdavar Group, dijital hizmetler ve endüstriyel tedarikin yanı sıra <strong>özel donanım ve SaaS ürünleri</strong> de geliştirir. Her ürün Bizdavar ekibinin fikri mülkiyetiyle İstanbul ve Tebriz\'de mühendislik edilmiştir.',
          ctaContact: 'Teklif ve sipariş',
          ctaPortfolio: 'Dijital portfolyo'
        },
        filterAll: 'Tümü',
        empty: 'Gösterilecek ürün yok.',
        catalog: {
          eyebrow: 'Ürün kataloğu',
          title: 'Bizdavar mühendislik ürünleri',
          desc: '11 ürün ve üretim hattı — BizSwap ve WhatsApp CRM\'den BizTab\'a ve PPE hatlarına. Kategoriye göre filtreleyin veya teklif isteyin.'
        },
        statusLive: 'Ürün sayfası',
        statusCatalog: 'Teklif iste',
        categories: {
          software: { label: 'Yazılım ve SaaS', desc: 'WhatsApp CRM ve B2B platformlar' },
          'iot-health': { label: 'IoT ve hijyen', desc: 'Termometre, dezenfektan ve temasız ekipman' },
          packaging: { label: 'Ambalaj ve vakum', desc: 'Vakum makineleri ve ambalaj hatları' },
          medical: { label: 'Medikal ve PPE', desc: 'Maske ve ısı pedi üretim hatları' }
        },
        items: {
          bizswap: { name: 'BizSwap', title: 'Token ön satış & swap', desc: 'Web3 modülü — cüzdan bağlantısı, stablecoin-token swap, on-chain ön satış, slippage ve admin paneli (BEP-20 / RWA).', tags: ['DeFi', 'Web3', 'Token Swap'] },
          fxguard: { name: 'WhatsApp CRM', title: 'Özel WhatsApp CRM script', desc: 'Özel WhatsApp CRM scripti — tek numara, tek panel, toplu mesaj ve otomatik yanıt. $500, $800 ve $1,200 planları.', tags: ['WhatsApp CRM', 'Özel script', 'B2B'] },
          biztab: { name: 'BizTab', title: 'Temasız duvar termometresi', desc: 'Tebriz\'deki ilk temasız duvar termometresi — 0,3°C altı hata, üniversite onayı.', tags: ['IoT', 'Temasız', 'Tebriz'] },
          bizclean: { name: 'BizClean', title: 'Hijyen ve dezenfeksiyon', desc: 'Otomatik el dezenfektan (BizClean V5) — Bizdavar üretimi; RINOTEX 1400 «Imen Sahand Padideh» park birimi; ISNA/IRIB basını.', tags: ['Hijyen', 'Otomatik', 'COVID'] },
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
        desc: 'Bizdavar ekibinin tasarladığı cihazlar — IoT, hijyen, ambalaj ve medikal hatlar',
        viewAll: 'Tüm ürünler',
        contact: 'Ürün teklifi'
      },
      home: {
        ownedEyebrow: 'Bizdavar ürünleri',
        ownedTitle: 'Ne üretiyoruz',
        ownedDesc: 'Dijital hizmetlerin yanı sıra Bizdavar ekibi özel makine ve üretim hatları mühendislik eder — BizTab\'dan ambalaj ve PPE hatlarına.',
        ownedCta: 'Tüm ürünleri gör'
      }
    },
    en: {
      productsPage: {
        hero: {
          tag: 'Engineering & manufacturing',
          title: 'Bizdavar products',
          desc: 'Devices, production lines and SaaS designed and built by the Bizdavar team — from WhatsApp CRM and IoT to packaging and medical equipment.'
        },
        intro: {
          title: 'What we build',
          body: 'Beyond digital services and industrial supply, Bizdavar Group develops <strong>proprietary hardware products</strong>. Each product is engineered in Iran (Tabriz) with IP owned by the Bizdavar team — available for domestic and international markets.',
          ctaContact: 'Quote & order',
          ctaPortfolio: 'Digital portfolio'
        },
        filterAll: 'All',
        empty: 'No products to display.',
        catalog: {
          eyebrow: 'Product catalog',
          title: 'Engineered Bizdavar devices',
          desc: 'Eleven products and production lines — from BizSwap and WhatsApp CRM to BizTab and PPE lines. Filter by category or request a quote.'
        },
        statusLive: 'Product page',
        statusCatalog: 'Request quote',
        categories: {
          software: { label: 'Software & SaaS', desc: 'WhatsApp CRM and B2B platforms' },
          'iot-health': { label: 'IoT & hygiene', desc: 'Thermometers, sanitizers and contactless devices' },
          packaging: { label: 'Packaging & sealing', desc: 'Vacuum sealers and packaging lines' },
          medical: { label: 'Medical & PPE', desc: 'Mask and heat pad production lines' }
        },
        items: {
          bizswap: { name: 'BizSwap', title: 'Token presale & swap', desc: 'Web3 module — wallet connect, stablecoin-to-token swap, on-chain presale, slippage UI and admin panel for BEP-20 / RWA projects.', tags: ['DeFi', 'Web3', 'Token Swap'] },
          fxguard: { name: 'WhatsApp CRM', title: 'Custom WhatsApp CRM script', desc: 'Custom WhatsApp CRM script — one number, one panel, bulk messaging and auto-reply. $500, $800 and $1,200 plans.', tags: ['WhatsApp CRM', 'Custom script', 'B2B'] },
          biztab: { name: 'BizTab', title: 'Non-contact wall thermometer', desc: 'First non-contact wall thermometer in Tabriz — under 0.3°C error, university validated.', tags: ['IoT', 'Contactless', 'Tabriz'] },
          bizclean: { name: 'BizClean', title: 'Hygiene & disinfection line', desc: 'Automatic hand sanitizer (BizClean V5) — Bizdavar production; RINOTEX 1400 via «Imen Sahand Padideh» park unit; ISNA & IRIB press.', tags: ['Hygiene', 'Automatic', 'COVID'] },
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
        desc: 'Devices engineered by the Bizdavar team — IoT, hygiene, packaging and medical production lines',
        viewAll: 'All products',
        contact: 'Product inquiry'
      },
      home: {
        ownedEyebrow: 'Bizdavar products',
        ownedTitle: 'What we manufacture',
        ownedDesc: 'Alongside digital services, the Bizdavar team engineers proprietary machines and production lines — from BizTab to packaging and PPE equipment.',
        ownedCta: 'View all products'
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
    L.pages.products = productsPage;
  });
})();
