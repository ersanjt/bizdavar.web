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
      { label: '5-day delivery', desc: 'Transparent process with daily milestones' },
      { label: 'From $99', desc: 'Basic plan with launch discount' },
      { label: 'RTL + multilingual', desc: 'Persian, English and Turkish' },
      { label: 'WhatsApp support', desc: 'Direct consulting and follow-up' }
    ],
    plans: [
      {
        name: 'Basic plan',
        subtitle: 'Startups and new businesses',
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
          'Cart and basic checkout',
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
          'International payment gateway',
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
      { num: '1', title: 'Day 1 — Discovery', desc: 'WhatsApp call, logo, brand colors, copy and reference sites.' },
      { num: '2', title: 'Day 2 — Design', desc: 'Homepage and site structure design. Your approval before development.' },
      { num: '3', title: 'Day 3 — Development', desc: 'Coding, contact form, WhatsApp and social links.' },
      { num: '4', title: 'Day 4 — Store setup', desc: 'For store plans: products, gateway and purchase testing.' },
      { num: '5', title: 'Day 5 — Launch', desc: 'Management training, domain transfer and go-live.' }
    ],
    whyChoose: [
      { title: 'Real speed', desc: 'No vague promises — daily progress reports on WhatsApp.' },
      { title: 'Modern RTL design', desc: 'Vazirmatn font, mobile-first and accessibility standards.' },
      { title: 'Backed by Bizdavar', desc: '12+ years and 100+ digital projects across 11 countries.' },
      { title: 'Training & support', desc: 'Site management videos and post-launch assistance.' }
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
      { label: '5 günde teslim', desc: 'Günlük planlı şeffaf süreç' },
      { label: '$99\'dan', desc: 'Başlangıç indirimli temel plan' },
      { label: 'RTL + çok dilli', desc: 'Türkçe, Farsça ve İngilizce' },
      { label: 'WhatsApp desteği', desc: 'Doğrudan danışmanlık ve takip' }
    ],
    plans: [
      {
        name: 'Temel plan',
        subtitle: 'Startup\'lar ve yeni işletmeler',
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
          'Sepet ve temel ödeme',
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
          'Uluslararası ödeme geçidi',
          'Canlı sohbet / WhatsApp widget',
          'Temel SEO + Google Analytics',
          '1 ay ücretsiz destek'
        ]
      }
    ],
    compareRows: [
      { feature: 'Sayfa sayısı', basic: '1 sayfa', store: '5\'e kadar', pro: '15\'e kadar + blog' },
      { feature: 'WooCommerce mağazası', basic: '—', store: '5 ürün', pro: 'Tam + geçit' },
      { feature: 'Form + WhatsApp', basic: true, store: true, pro: true },
      { feature: 'Özel tasarım', basic: 'Şablon', store: 'Yarı özel', pro: 'Özel' },
      { feature: 'Temel SEO', basic: '—', store: 'Ürünler', pro: 'Tam' },
      { feature: 'Teslim sonrası destek', basic: '1 hafta', store: '2 hafta', pro: '1 ay' },
      { feature: 'Teslim süresi', basic: '5 gün', store: '5 gün', pro: '5–7 gün' }
    ],
    timeline: [
      { num: '1', title: '1. gün — Keşif', desc: 'WhatsApp görüşmesi, logo, renkler, metinler ve referans siteler.' },
      { num: '2', title: '2. gün — Tasarım', desc: 'Ana sayfa ve site yapısı. Geliştirmeden önce onayınız.' },
      { num: '3', title: '3. gün — Geliştirme', desc: 'Kodlama, iletişim formu, WhatsApp ve sosyal bağlantılar.' },
      { num: '4', title: '4. gün — Mağaza', desc: 'Mağaza planlarında: ürünler, ödeme geçidi ve test alışverişi.' },
      { num: '5', title: '5. gün — Yayın', desc: 'Yönetim eğitimi, domain transferi ve yayına alma.' }
    ],
    whyChoose: [
      { title: 'Gerçek hız', desc: 'Belirsiz vaat yok — WhatsApp\'ta günlük ilerleme raporu.' },
      { title: 'Modern RTL tasarım', desc: 'Vazirmatn font, mobil öncelikli ve erişilebilirlik.' },
      { title: 'Bizdavar güvencesi', desc: '11 ülkede 12+ yıl ve 100+ dijital proje.' },
      { title: 'Eğitim ve destek', desc: 'Site yönetimi videoları ve lansman sonrası yardım.' }
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
  }
})();
