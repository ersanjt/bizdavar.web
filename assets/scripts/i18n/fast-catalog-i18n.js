/**
 * Fast Web Studio catalog — en / tr (merged by index in getFastCatalog)
 */
(function () {
  const N = 'https://netinode.net/';
  const SHOP = 'https://shop.netinode.net/';
  const ni = (label, toShop) => `<a href="${toShop ? SHOP : N}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const niPair = (shopLabel, siteLabel) => `${ni(shopLabel, true)} · ${ni(siteLabel || 'netinode.net', false)}`;

  const en = {
    brand: {
      eyebrow: 'Exclusive Bizdavar Group product',
      headline: 'Professional website design in 5 days',
      subtitle: 'Go live this week — fast, professional, specialized — from landing to store and web app',
      description: 'Fast Web Studio delivers rapid RTL websites with Vazirmatn, contact forms, WhatsApp, basic SEO and multilingual support. When you need panels or apps, the same Bizdavar team continues on the custom track.'
    },
    trustSignals: [
      { label: '5-day delivery', desc: 'Daily milestones on Zoom, Meet or WhatsApp' },
      { label: 'From $99 / ~€90', desc: 'Basic plan — invoice in USD or EUR' },
      { label: 'US & EU ready', desc: 'English LTR, Stripe and CET/EST overlap' },
      { label: 'GDPR-aware hosting', desc: 'International stack via Netinode' }
    ],
    plans: [
      {
        name: 'Basic plan',
        subtitle: 'Startups and new US/EU businesses',
        features: [
          'Single-page corporate site',
          'Mobile-responsive design',
          'Professional contact form',
          'Direct WhatsApp button',
          'Instagram / LinkedIn links',
          `SSL & starter hosting — ${niPair('Buy domain & hosting (Netinode Shop)', 'netinode.net')}`,
          'Video tutorial for site management'
        ]
      },
      {
        name: 'Store plan',
        subtitle: 'Online sales with multiple products',
        features: [
          'Everything in Basic',
          'WooCommerce store',
          'First 5 products added',
          'Categories and tags',
          'Cart and Stripe / PayPal checkout',
          'Store management training',
          'Basic product-page SEO'
        ]
      },
      {
        name: 'Pro plan',
        subtitle: 'Brands ready to scale',
        ribbon: 'Most popular',
        features: [
          'Everything in Store',
          'Custom UI design',
          'Up to 15 pages + blog',
          'Stripe / PayPal checkout',
          'Live chat / WhatsApp widget',
          'Basic SEO + Google Analytics',
          '1 month free support'
        ]
      }
    ],
    compareRows: [
      { feature: 'Number of pages', basic: '1 page', store: 'Up to 5', pro: 'Up to 15 + blog' },
      { feature: 'WooCommerce store', basic: '—', store: '5 products', pro: 'Full + gateway' },
      { feature: 'Contact form + WhatsApp', basic: true, store: true, pro: true },
      { feature: 'Custom design', basic: 'Template', store: 'Semi-custom', pro: 'Custom' },
      { feature: 'Basic SEO', basic: '—', store: 'Products', pro: 'Full' },
      { feature: 'Post-delivery support', basic: '1 week', store: '2 weeks', pro: '1 month' },
      { feature: 'Delivery time', basic: '5 days', store: '5 days', pro: '5–7 days' }
    ],
    timeline: [
      { num: '1', title: 'Day 1 — Discovery', desc: 'Zoom / Meet or WhatsApp, logo, brand colors, English copy and reference sites.' },
      { num: '2', title: 'Day 2 — Design', desc: 'Homepage and site structure design. Your approval before development.' },
      { num: '3', title: 'Day 3 — Development', desc: 'Coding, contact form, WhatsApp and social links.' },
      { num: '4', title: 'Day 4 — Store setup', desc: 'For store plans: products, gateway and purchase testing.' },
      { num: '5', title: 'Day 5 — Launch', desc: 'Management training, domain transfer and go-live.' }
    ],
    audiences: [
      { title: 'US startups and SaaS', desc: 'An English one-pager, contact form and Stripe or calendar CTA — live this week, billed in USD.' },
      { title: 'EU SMBs', desc: 'Company site in English (plus a local language if needed), invoice in EUR, hosting via Netinode.' },
      { title: 'Stores selling in dollars or euros', desc: 'WooCommerce, starter products and Stripe/PayPal checkout.' },
      { title: 'Agencies needing overflow', desc: 'White-label or co-branded 5-day builds when your studio is at capacity.' },
      { title: 'Hosting, SaaS and platforms', desc: 'Web hosting, VPS or panels — like netinohost.com; via Fast or custom Bizdavar design.' }
    ],
    whyChoose: [
      { title: 'Real speed', desc: 'No vague promises — daily progress on Zoom, Meet or WhatsApp.' },
      { title: 'English-first design', desc: 'LTR UI, mobile-first and Core Web Vitals — RTL as a second locale when you need it.' },
      { title: 'Backed by Bizdavar', desc: '12+ years and 100+ digital projects across 11 countries.' },
      { title: 'USD or EUR billing', desc: 'Card, PayPal or bank transfer — currency agreed before kickoff.' }
    ],
    faq: [
      { q: 'Do you really deliver in 5 days?', a: 'Yes — for Basic and Store plans when content is ready. Pro plans with more pages may take 5–7 days. We confirm the exact timeline on WhatsApp before starting.' },
      { q: 'Is hosting and domain included in the price?', a: `Design and setup are separate. Buy domain and hosting from ${ni('Netinode Shop', true)} (Bizdavar’s own stack) or browse services on ${ni('netinode.net')} — we can guide you.` },
      { q: 'Can I expand the site later?', a: 'Yes. Start with Basic and upgrade to Store or Pro. Bizdavar continues on the same project — even to <a href="custom-web-app">custom web & apps</a>.' },
      { q: 'How does payment work?', a: 'Usually 50% upfront and 50% before final delivery — bank transfer, card or international methods. Details are agreed on WhatsApp.' },
      { q: 'Do you work with businesses outside Iran?', a: 'Yes — Fast Web Studio has launched sites in Iran, Turkey, UAE and Europe. Consulting in Persian, English and Turkish.' },
      { q: 'How is Fast different from custom projects?', a: 'Fast is fixed-price rapid launch. Larger projects (apps, B2B portals, complex multilingual sites) go through <a href="custom-web-app">custom web & app</a> or <a href="services#web-design">web design services</a>.' },
      { q: 'Do you build mobile apps?', a: 'Yes — apps, PWAs and custom panels are covered on the <a href="custom-web-app">custom web & app</a> page.' },
      { q: 'Who provides content and photos?', a: 'You send copy and logo; we handle structure, design and build. If content is not ready, the 5-day clock starts when it is — see the <a href="articles/website-speed-5-days">5-day checklist</a>.' }
    ],
    speedHighlights: [
      { title: 'Measurable speed', desc: 'Clear daily milestones — not “we will update you later”.' },
      { title: 'Professional design', desc: 'Mobile-first, clean RTL, Vazirmatn typography and clear CTAs.' },
      { title: 'Technical craft', desc: 'Forms, WhatsApp, basic SEO, analytics and management training.' },
      { title: 'Continue the path', desc: 'From Fast to store, multilingual, panel or app — same team.' }
    ],
    scope: [
      { title: 'Corporate site & landing', desc: 'Brand intro, services and lead form — Fast Basic from $99.', cta: 'View plans' },
      { title: 'WooCommerce store', desc: 'Products, cart and gateway — Store and Pro plans.', cta: 'Store plan' },
      { title: 'Web apps & applications', desc: 'Panels, PWAs, apps and custom systems beyond fixed plans.', cta: 'Web & app page' },
      { title: 'Guides & blog', desc: '5-day checklist, plans and custom development path.', cta: 'Articles' }
    ],
    deliverables: [
      { title: 'Real responsive', desc: 'Mobile, tablet and desktop with manual QA before delivery.' },
      { title: 'WhatsApp & forms', desc: 'Direct contact button + professional lead form.' },
      { title: 'Basic SEO', desc: 'Titles, meta, speed and index-ready structure.' },
      { title: 'SSL & hosting', desc: 'Buy domain and hosting on Netinode Shop — Bizdavar’s own infrastructure.' },
      { title: 'Management training', desc: 'Video/guide so you can update content yourself.' },
      { title: 'Post-delivery support', desc: 'Clear support window based on the selected plan.' }
    ],
    guides: [
      { title: 'Complete Fast Studio guide', desc: 'Plans $99–$299, 5-day delivery and custom vs Fast.' },
      { title: '5-day website checklist', desc: 'What to prepare from day one for real speed.' },
      { title: 'Custom web & apps', desc: 'When to leave Fast and start a custom project.' },
      { title: 'Multilingual Iran–Turkey sites', desc: 'hreflang, local trust and fa / tr / en pattern.' }
    ],
    showcases: [
      { category: 'Jewelry store' },
      { category: 'International B2B trade' },
      { category: 'Swiss B2B trade' },
      { category: 'SMM panel' },
      { category: 'Fintech / FX' },
      { category: 'Leather & fashion' },
      { category: 'Holding' },
      { category: 'Aesthetic clinic' },
      { category: 'Commercial brand' },
      { category: 'Industrial B2B' }
    ]
  };

  const tr = {
    brand: {
      eyebrow: 'Bizdavar Group özel ürünü',
      headline: '5 günde profesyonel web sitesi',
      subtitle: 'Bu hafta yayına geç — hızlı, profesyonel, uzman — landing’den mağaza ve web app’e',
      description: 'Fast Web Studio; Vazirmatn, iletişim formu, WhatsApp, temel SEO ve çok dilli destekle hızlı RTL site kurar. Panel veya uygulama gerektiğinde aynı Bizdavar ekibi özel yolda devam eder.'
    },
    trustSignals: [
      { label: '5 günde teslim', desc: 'Günlük kilometre Zoom, Meet veya WhatsApp’ta' },
      { label: '$99 / ~€90’dan', desc: 'Temel plan — fatura USD veya EUR' },
      { label: 'ABD ve AB hazır', desc: 'İngilizce LTR, Stripe ve CET/EST örtüşmesi' },
      { label: 'GDPR hosting', desc: 'Uluslararası altyapı Netinode üzerinden' }
    ],
    plans: [
      {
        name: 'Temel plan',
        subtitle: 'ABD/AB startup ve yeni işletmeler',
        features: [
          'Tek sayfalık kurumsal site',
          'Mobil uyumlu tasarım',
          'Profesyonel iletişim formu',
          'Doğrudan WhatsApp düğmesi',
          'Instagram / LinkedIn bağlantıları',
          `SSL ve başlangıç hosting — ${niPair('Domain ve hosting satın al (Netinode Shop)', 'netinode.net')}`,
          'Site yönetimi video eğitimi'
        ]
      },
      {
        name: 'Mağaza planı',
        subtitle: 'Birden fazla ürünle online satış',
        features: [
          'Temel plandaki her şey',
          'WooCommerce mağazası',
          'İlk 5 ürün eklenir',
          'Kategori ve etiketler',
          'Sepet ve Stripe / PayPal ödeme',
          'Mağaza yönetimi eğitimi',
          'Ürün sayfası temel SEO'
        ]
      },
      {
        name: 'Profesyonel plan',
        subtitle: 'Büyümeye hazır markalar',
        ribbon: 'En popüler',
        features: [
          'Mağaza planındaki her şey',
          'Özel UI tasarımı',
          '15 sayfaya kadar + blog',
          'Stripe / PayPal ödeme',
          'Canlı sohbet / WhatsApp widget',
          'Temel SEO + Google Analytics',
          '1 ay ücretsiz destek'
        ]
      }
    ],
    compareRows: [
      { feature: 'Sayfa sayısı', basic: '1 sayfa', store: '5\'e kadar', pro: '15\'e kadar + blog' },
      { feature: 'WooCommerce mağazası', basic: '—', store: '5 ürün', pro: 'Tam + geçit' },
      { feature: 'Form + Zoom/WhatsApp', basic: true, store: true, pro: true },
      { feature: 'Özel tasarım', basic: 'Şablon', store: 'Yarı özel', pro: 'Özel' },
      { feature: 'Temel SEO', basic: '—', store: 'Ürünler', pro: 'Tam' },
      { feature: 'Teslim sonrası destek', basic: '1 hafta', store: '2 hafta', pro: '1 ay' },
      { feature: 'Teslim süresi', basic: '5 gün', store: '5 gün', pro: '5–7 gün' }
    ],
    timeline: [
      { num: '1', title: '1. gün — Keşif', desc: 'Zoom / Meet veya WhatsApp, logo, marka renkleri, İngilizce metin ve referans siteler.' },
      { num: '2', title: '2. gün — Tasarım', desc: 'Ana sayfa ve site yapısı. Geliştirmeden önce onayınız.' },
      { num: '3', title: '3. gün — Geliştirme', desc: 'Kodlama, iletişim formu, WhatsApp ve sosyal bağlantılar.' },
      { num: '4', title: '4. gün — Mağaza', desc: 'Mağaza planlarında: ürünler, ödeme geçidi ve test alışverişi.' },
      { num: '5', title: '5. gün — Yayın', desc: 'Yönetim eğitimi, domain transferi ve yayına alma.' }
    ],
    audiences: [
      { title: 'ABD startup ve SaaS', desc: 'İngilizce tek sayfa, form ve Stripe veya takvim CTA — bu hafta yayında, fatura USD.' },
      { title: 'AB KOBİ', desc: 'İngilizce kurumsal site (gerekirse yerel dil), fatura EUR, hosting Netinode.' },
      { title: 'Dolar veya euro satan mağazalar', desc: 'WooCommerce, başlangıç ürünleri ve Stripe/PayPal ödeme.' },
      { title: 'Kapasitesi dolu ajanslar', desc: 'Stüdyonuz doluyken white-label veya ortak markalı 5 günlük teslim.' },
      { title: 'Hosting, SaaS ve platformlar', desc: 'Web hosting, VPS veya panel — netinohost.com gibi; Fast veya özel Bizdavar tasarımı.' }
    ],
    whyChoose: [
      { title: 'Gerçek hız', desc: 'Belirsiz vaat yok — günlük ilerleme Zoom, Meet veya WhatsApp’ta.' },
      { title: 'İngilizce-öncelikli tasarım', desc: 'LTR arayüz, mobil-öncelikli ve Core Web Vitals — RTL ikinci dil olarak.' },
      { title: 'Bizdavar güvencesi', desc: '11 ülkede 12+ yıl ve 100+ dijital proje.' },
      { title: 'USD veya EUR fatura', desc: 'Kart, PayPal veya havale — para birimi başlamadan yazılı netleşir.' }
    ],
    faq: [
      { q: 'Gerçekten 5 günde teslim ediyor musunuz?', a: 'Evet — içerik hazırsa Temel ve Mağaza planları için. Pro planlar 5–7 gün sürebilir. Başlamadan önce WhatsApp\'ta net süre onaylanır.' },
      { q: 'Hosting ve domain fiyata dahil mi?', a: `Tasarım ve kurulum ayrıdır. Domain ve hosting için ${ni('Netinode Shop', true)} (Bizdavar altyapısı) veya ${ni('netinode.net')} — rehberlik de ederiz.` },
      { q: 'Siteyi sonra genişletebilir miyim?', a: 'Evet. Temel ile başlayıp Mağaza veya Pro\'ya yükseltebilirsiniz. Bizdavar aynı projeyi sürdürür — hatta <a href="custom-web-app">özel web & uygulama</a>ya.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Genelde %50 peşin, %50 teslimden önce — havale, kart veya uluslararası yöntemler. Detaylar WhatsApp\'ta netleşir.' },
      { q: 'İran dışındaki işletmelerle çalışıyor musunuz?', a: 'Evet — Türkiye, İran, BAE ve Avrupa\'da siteler kuruldu. Türkçe, Farsça ve İngilizce danışmanlık.' },
      { q: 'Fast ile özel proje arasındaki fark nedir?', a: 'Fast sabit fiyatlı hızlı lansman içindir. Büyük projeler <a href="custom-web-app">özel web & uygulama</a> veya <a href="services#web-design">web tasarım hizmetlerimiz</a> üzerinden yürür.' },
      { q: 'Mobil uygulama da yapıyor musunuz?', a: 'Evet — uygulama, PWA ve özel paneller <a href="custom-web-app">özel web & uygulama</a> sayfasında.' },
      { q: 'İçerik ve fotoğrafları kim verir?', a: 'Metin ve logoyu siz gönderirsiniz; yapı, tasarım ve geliştirmeyi biz yaparız. İçerik hazır değilse 5 günlük süre hazır olunca başlar — <a href="articles/website-speed-5-days">5 günlük checklist</a>.' }
    ],
    speedHighlights: [
      { title: 'Ölçülebilir hız', desc: 'Net günlük kilometre taşları — “sonra haber veririz” değil.' },
      { title: 'Profesyonel tasarım', desc: 'Mobil öncelikli, temiz RTL, Vazirmatn ve net CTA.' },
      { title: 'Teknik uzmanlık', desc: 'Form, WhatsApp, temel SEO, analitik ve yönetim eğitimi.' },
      { title: 'Yola devam', desc: 'Fast’ten mağaza, çok dil, panel veya uygulamaya — aynı ekip.' }
    ],
    scope: [
      { title: 'Kurumsal site & landing', desc: 'Marka, hizmetler ve lead formu — Fast Temel $99’dan.', cta: 'Planları gör' },
      { title: 'WooCommerce mağaza', desc: 'Ürün, sepet ve ödeme — Mağaza ve Pro.', cta: 'Mağaza planı' },
      { title: 'Web app & uygulama', desc: 'Panel, PWA, uygulama ve sabit plan ötesi sistemler.', cta: 'Web & app' },
      { title: 'Rehber & blog', desc: '5 günlük checklist, planlar ve özel geliştirme.', cta: 'Yazılar' }
    ],
    deliverables: [
      { title: 'Gerçek responsive', desc: 'Mobil, tablet, masaüstü — teslim öncesi manuel test.' },
      { title: 'WhatsApp & form', desc: 'Doğrudan iletişim + profesyonel lead formu.' },
      { title: 'Temel SEO', desc: 'Başlık, meta, hız ve index’e hazır yapı.' },
      { title: 'SSL & hosting', desc: 'Domain ve hosting’i Netinode Shop’tan alın — Bizdavar altyapısı.' },
      { title: 'Yönetim eğitimi', desc: 'İçeriği kendiniz güncelleyin.' },
      { title: 'Teslim sonrası destek', desc: 'Seçilen plana göre net destek süresi.' }
    ],
    guides: [
      { title: 'Fast Studio tam rehber', desc: '$99–$299 planlar, 5 gün ve özel farkı.' },
      { title: '5 günlük checklist', desc: 'Gerçek hız için ilk günden hazırlık.' },
      { title: 'Özel web & uygulama', desc: 'Ne zaman Fast’ten çıkılır.' },
      { title: 'İran–Türkiye çok dilli', desc: 'hreflang, yerel güven, fa / tr / en.' }
    ],
    showcases: [
      { category: 'Mücevher mağazası' },
      { category: 'Uluslararası B2B ticaret' },
      { category: 'İsviçre B2B ticaret' },
      { category: 'SMM paneli' },
      { category: 'Fintech / döviz' },
      { category: 'Deri ve moda' },
      { category: 'Holding' },
      { category: 'Estetik klinik' },
      { category: 'Ticari marka' },
      { category: 'Endüstriyel B2B' }
    ]
  };

  if (window.BIZDAVAR_LOCALES) {
    if (window.BIZDAVAR_LOCALES.en) window.BIZDAVAR_LOCALES.en.fastCatalog = en;
    if (window.BIZDAVAR_LOCALES.tr) window.BIZDAVAR_LOCALES.tr.fastCatalog = tr;
    if (window.BIZDAVAR_LOCALES.ru) {
      window.BIZDAVAR_LOCALES.ru.fastCatalog = Object.assign({}, en, {
        brand: {
          eyebrow: 'Эксклюзивный продукт Bizdavar Group',
          headline: 'Английские сайты для США и ЕС за 5 дней',
          subtitle: 'Онлайн на этой неделе — счёт в USD или EUR, от $99 / ~€90',
          description: 'Fast Web Studio сдаёт английские LTR-сайты со Stripe/PayPal, формой, Zoom/Meet и хостингом с учётом GDPR через Netinode — для стартапов, SMB и агентств в США и Европе. Персидский/RTL и турецкий остаются дополнительными языками.'
        },
        trustSignals: [
          { label: 'Сдача за 5 дней', desc: 'Ежедневные этапы в Zoom, Meet или WhatsApp' },
          { label: 'От $99 / ~€90', desc: 'Базовый план — счёт в USD или EUR' },
          { label: 'США и ЕС', desc: 'Английский LTR, Stripe и перекрытие CET/EST' },
          { label: 'Хостинг GDPR', desc: 'Международный стек через Netinode' }
        ],
        audiences: [
          { title: 'Стартапы и SaaS США', desc: 'Английская одностраничка, форма и Stripe — запуск на этой неделе, счёт в USD.' },
          { title: 'SMB ЕС', desc: 'Корпоративный сайт на английском (плюс локальный язык при необходимости), счёт в EUR, хостинг Netinode.' },
          { title: 'Магазины в долларах или евро', desc: 'WooCommerce, стартовые товары и оплата Stripe/PayPal.' },
          { title: 'Агентства без свободной ёмкости', desc: 'White-label или совместный бренд за 5 дней, когда студия заполнена.' },
          { title: 'Хостинг, SaaS и платформы', desc: 'Хостинг, VPS или панели — как netinohost.com; Fast или индивидуальный дизайн Bizdavar.' }
        ],
        whyChoose: [
          { title: 'Реальная скорость', desc: 'Без туманных обещаний — ежедневный прогресс в Zoom, Meet или WhatsApp.' },
          { title: 'Английский в приоритете', desc: 'LTR, mobile-first и Core Web Vitals — RTL как второй язык при необходимости.' },
          { title: 'Опора Bizdavar', desc: '12+ лет и 100+ цифровых проектов в 11 странах.' },
          { title: 'Счёт USD или EUR', desc: 'Карта, PayPal или перевод — валюта до старта.' }
        ],
        showcases: [
          { category: 'Ювелирный магазин' },
          { category: 'Магазин кожаных изделий' },
          { category: 'Международная B2B-торговля' },
          { category: 'Швейцарская B2B-торговля' },
          { category: 'SMM-панель' },
          { category: 'Финтех / FX' },
          { category: 'Облачный хостинг' },
          { category: 'Кожа и мода' },
          { category: 'Холдинг' },
          { category: 'Клиника эстетики' },
          { category: 'Коммерческий бренд' },
          { category: 'Промышленный B2B' }
        ],
        faq: [
          { q: 'Вы правда сдаёте за 5 дней?', a: 'Да — для Basic и Store, если тексты и логотип готовы. Pro может занять 5–7 дней. Срок подтверждаем в Zoom/Meet или WhatsApp до старта.' },
          { q: 'Можно счёт в USD или EUR?', a: 'Да. Валюту выбираете до kickoff. План $99 ≈ €90 — курс фиксируем письменно.' },
          { q: 'Работаете с компаниями США и ЕС?', a: 'Да — это основной рынок Fast Studio. Перекрытие CET и EST, английские сайты, Stripe/PayPal и хостинг Netinode с учётом GDPR.' },
          { q: 'Хостинг и домен входят в цену?', a: `Дизайн и установка отдельно. Международные клиенты — ${shop('магазин Netinode')}, каталог ${ni('netinode.net')}. Для Ирана — ${nh('Netino Host')}.` },
          { q: 'Как оплата?', a: 'Обычно 50% старт и 50% до запуска — карта, PayPal или перевод USD/EUR. Детали письменно.' },
          { q: 'Чем Fast отличается от кастома?', a: 'Fast — фиксированная быстрая сдача. Крупные проекты идут через <a href="services#web-design">веб-дизайн</a>.' }
        ]
      });
    }
    if (window.BIZDAVAR_LOCALES.ar) {
      window.BIZDAVAR_LOCALES.ar.fastCatalog = Object.assign({}, en, {
        brand: {
          eyebrow: 'منتج حصري لـ Bizdavar Group',
          headline: 'مواقع إنجليزية لأمريكا وأوروبا خلال ٥ أيام',
          subtitle: 'أونلاين هذا الأسبوع — فاتورة USD أو EUR من ٩٩$ / ~€90',
          description: 'Fast Web Studio يبني مواقع إنجليزية LTR مع Stripe/PayPal ونموذج وZoom/Meet واستضافة تراعي GDPR عبر Netinode — للشركات الناشئة وSMB والوكالات في أمريكا وأوروبا. الفارسية/RTL والتركية لغات إضافية.'
        },
        trustSignals: [
          { label: 'تسليم خلال ٥ أيام', desc: 'محطات يومية على Zoom أو Meet أو واتساب' },
          { label: 'من $99 / ~€90', desc: 'الخطة الأساسية — فاتورة USD أو EUR' },
          { label: 'أمريكا وأوروبا', desc: 'إنجليزي LTR وStripe وتداخل CET/EST' },
          { label: 'استضافة GDPR', desc: 'بنية دولية عبر Netinode' }
        ],
        audiences: [
          { title: 'شركات ناشئة وSaaS أمريكية', desc: 'صفحة إنجليزية واحدة ونموذج وStripe — أونلاين هذا الأسبوع بفاتورة USD.' },
          { title: 'شركات صغيرة أوروبية', desc: 'موقع شركة بالإنجليزية (ولغة محلية عند الحاجة) وفاتورة EUR واستضافة Netinode.' },
          { title: 'متاجر بالدولار أو اليورو', desc: 'WooCommerce ومنتجات أولية ودفع Stripe/PayPal.' },
          { title: 'وكالات بلا سعة', desc: 'تسليم ٥ أيام بعلامتكم أو بيزدوار عندما يمتلئ الاستوديو.' },
          { title: 'استضافة وSaaS ومنصات', desc: 'استضافة أو VPS أو لوحات — مثل netinohost.com؛ Fast أو تصميم مخصص من Bizdavar.' }
        ],
        whyChoose: [
          { title: 'سرعة حقيقية', desc: 'بدون وعود مبهمة — تقدم يومي على Zoom أو Meet أو واتساب.' },
          { title: 'الإنجليزية أولاً', desc: 'واجهة LTR وموبايل أولاً وCore Web Vitals — RTL لغة ثانية عند الحاجة.' },
          { title: 'بدعم Bizdavar', desc: 'أكثر من ١٢ سنة و١٠٠+ مشروع رقمي في ١١ دولة.' },
          { title: 'فاتورة USD أو EUR', desc: 'بطاقة أو PayPal أو تحويل — العملة قبل الانطلاق.' }
        ],
        showcases: [
          { category: 'متجر مجوهرات' },
          { category: 'متجر منتجات جلدية' },
          { category: 'تجارة B2B دولية' },
          { category: 'تجارة سويسرية B2B' },
          { category: 'لوحة SMM' },
          { category: 'فينتك / صرف' },
          { category: 'استضافة سحابية' },
          { category: 'جلد وأزياء' },
          { category: 'قابضة' },
          { category: 'عيادة تجميل' },
          { category: 'علامة تجارية' },
          { category: 'B2B صناعي' }
        ],
        faq: [
          { q: 'هل تسلّمون فعلاً خلال ٥ أيام؟', a: 'نعم — للخطط الأساسية والمتجر إن كانت النصوص والشعار جاهزة. الاحترافية قد تستغرق ٥–٧ أيام. نؤكد الجدول على Zoom/Meet أو واتساب قبل البدء.' },
          { q: 'هل تصدرون فاتورة USD أو EUR؟', a: 'نعم. اختاروا العملة قبل الانطلاق. خطة ٩٩$ ≈ €90 — نثبّت السعر كتابياً.' },
          { q: 'هل تعملون مع شركات أمريكا وأوروبا؟', a: 'نعم — هذا السوق الأساسي لـ Fast Studio. تداخل CET وEST ومواقع إنجليزية وStripe/PayPal واستضافة Netinode تراعي GDPR.' },
          { q: 'هل الاستضافة والنطاق ضمن السعر؟', a: `التصميم والإعداد منفصلان. العملاء الدوليون يستخدمون ${shop('متجر Netinode')} — الكتالوج ${ni('netinode.net')}. لإيران ${nh('Netino Host')}.` },
          { q: 'كيف يتم الدفع؟', a: 'عادة ٥٠٪ للبدء و٥٠٪ قبل الإطلاق — بطاقة أو PayPal أو تحويل USD/EUR. التفاصيل كتابياً.' },
          { q: 'ما الفرق بين Fast والمشروع المخصص؟', a: 'Fast إطلاق سريع بسعر ثابت. المشاريع الأكبر عبر <a href="services#web-design">تصميم الويب</a>.' }
        ]
      });
    }
  }
})();
