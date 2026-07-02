/**
 * Fast Web Studio catalog — en / tr (merged by index in getFastCatalog)
 */
(function () {
  const N = 'https://netinode.net/';
  const ni = (label) => `<a href="${N}" target="_blank" rel="noopener noreferrer">${label}</a>`;

  const en = {
    brand: {
      eyebrow: 'Exclusive Bizdavar Group product',
      headline: 'Professional website design in 5 days',
      subtitle: 'Go live this week — from startup to WooCommerce store',
      description: 'Fast Web Studio delivers rapid RTL websites with Vazirmatn font, contact forms, WhatsApp integration and multilingual support — for businesses in Iran, Turkey and international markets.'
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
          `SSL & starter hosting — ${ni('Buy domain & hosting (Netinode)')}`,
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
    showcases: [
      { category: 'Jewelry store' },
      { category: 'Leather & fashion' },
      { category: 'Holding' },
      { category: 'Aesthetic clinic' },
      { category: 'Commercial brand' },
      { category: 'Industrial B2B' }
    ],
    faq: [
      { q: 'Do you really deliver in 5 days?', a: 'Yes — for Basic and Store plans when content is ready. Pro plans with more pages may take 5–7 days. We confirm the exact timeline on WhatsApp before starting.' },
      { q: 'Is hosting and domain included in the price?', a: `Design and setup are separate. You can buy domain and hosting yearly from ${ni('Netinode')} (domain search, web hosting, WordPress hosting and SSL) or we guide you through setup.` },
      { q: 'Can I expand the site later?', a: 'Yes. Start with Basic and upgrade to Store or Pro. Bizdavar continues on the same project.' },
      { q: 'How does payment work?', a: 'Usually 50% upfront and 50% before final delivery — bank transfer, card or international methods. Details are agreed on WhatsApp.' },
      { q: 'Do you work with businesses outside Iran?', a: 'Yes — Fast Web Studio has launched sites in Iran, Turkey, UAE and Europe. Consulting in Persian, English and Turkish.' },
      { q: 'How is Fast different from custom projects?', a: 'Fast is fixed-price rapid launch. Larger projects (apps, B2B portals, complex multilingual sites) go through our <a href="services#web-design">web design services</a>.' }
    ]
  };

  const tr = {
    brand: {
      eyebrow: 'Bizdavar Group özel ürünü',
      headline: '5 günde profesyonel web sitesi',
      subtitle: 'Bu hafta yayına geç — startup\'tan WooCommerce mağazasına',
      description: 'Fast Web Studio; Vazirmatn font, iletişim formu, WhatsApp ve çok dilli destekle hızlı RTL web sitesi kurar — İran, Türkiye ve uluslararası pazarlar için.'
    },
    trustSignals: [
      { label: '5 günde teslim', desc: 'Günlük planlı şeffaf süreç' },
      { label: '$99\'dan', desc: 'Başlangıç indirimli temel plan' },
      { label: 'RTL + çok dilli', desc: 'Farsça, İngilizce ve Türkçe' },
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
          `SSL ve başlangıç hosting — ${ni('Domain ve hosting satın al (Netinode)')}`,
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
    showcases: [
      { category: 'Mücevher mağazası' },
      { category: 'Deri ve moda' },
      { category: 'Holding' },
      { category: 'Estetik klinik' },
      { category: 'Ticari marka' },
      { category: 'Endüstriyel B2B' }
    ],
    faq: [
      { q: 'Gerçekten 5 günde teslim ediyor musunuz?', a: 'Evet — içerik hazırsa Temel ve Mağaza planları için. Pro planlar 5–7 gün sürebilir. Başlamadan önce WhatsApp\'ta net süre onaylanır.' },
      { q: 'Hosting ve domain fiyata dahil mi?', a: `Tasarım ve kurulum ayrıdır. Domain ve yıllık hosting için ${ni('Netinode')} (domain arama, web hosting, WordPress hosting ve SSL) kullanabilir veya rehberlik alabilirsiniz.` },
      { q: 'Siteyi sonra genişletebilir miyim?', a: 'Evet. Temel ile başlayıp Mağaza veya Pro\'ya yükseltebilirsiniz. Bizdavar aynı projeyi sürdürür.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Genelde %50 peşin, %50 teslimden önce — havale, kart veya uluslararası yöntemler. Detaylar WhatsApp\'ta netleşir.' },
      { q: 'İran dışındaki işletmelerle çalışıyor musunuz?', a: 'Evet — İran, Türkiye, BAE ve Avrupa\'da siteler kuruldu. Farsça, İngilizce ve Türkçe danışmanlık.' },
      { q: 'Fast ile özel proje arasındaki fark nedir?', a: 'Fast sabit fiyatlı hızlı lansman içindir. Büyük projeler (uygulama, B2B portal) <a href="services#web-design">web tasarım hizmetlerimiz</a> üzerinden yürür.' }
    ]
  };

  if (window.BIZDAVAR_LOCALES) {
    if (window.BIZDAVAR_LOCALES.en) window.BIZDAVAR_LOCALES.en.fastCatalog = en;
    if (window.BIZDAVAR_LOCALES.tr) window.BIZDAVAR_LOCALES.tr.fastCatalog = tr;
  }
})();
