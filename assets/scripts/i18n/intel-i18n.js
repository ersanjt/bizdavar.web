/**
 * Company intel — locale overlays for about page (TR / EN).
 * Persian source of truth: company-intel.js
 */
(function () {
  const LABELS = {
    fa: {
      intlBrand: 'برند بین‌المللی',
      armeniaReg: 'ثبت ارمنستان',
      iranLegal: 'شخصیت حقوقی ایران',
      brandPrefix: 'برند',
      founded: 'تأسیس',
      domains: 'دامنه‌ها',
      serviceLangs: 'زبان‌های خدمت',
      b2bProfile: 'پروفایل B2B',
      linkedinProfile: 'پروفایل LinkedIn',
      education: 'تحصیلات',
      years: 'سال',
      projects: 'پروژه',
      office: 'دفتر',
      mainOffice: 'دفتر اصلی',
      whatsapp: 'واتساپ',
      whatsappIstanbul: 'واتساپ استانبول',
      whatsappIran: 'واتساپ ایران',
      armenia: 'ارمنستان',
      iran: 'ایران',
      contactForm: 'فرم تماس',
      address: 'آدرس',
      workingHours: 'ساعات کاری',
      languages: 'زبان‌ها',
      contact: 'تماس',
      email: 'ایمیل',
      hubBadge: 'هاب',
      mapAlt: 'نقشه حضور جهانی بیزدوار — دفتر اصلی استانبول'
    },
    tr: {
      intlBrand: 'Uluslararası marka',
      armeniaReg: 'Ermenistan kaydı',
      iranLegal: 'İran tüzel kişiliği',
      brandPrefix: 'Marka',
      founded: 'Kuruluş',
      domains: 'Alan adları',
      serviceLangs: 'Hizmet dilleri',
      b2bProfile: 'B2B profili',
      linkedinProfile: 'LinkedIn profili',
      education: 'Eğitim',
      years: 'yıl',
      projects: 'proje',
      office: 'Ofis',
      mainOffice: 'Ana ofis',
      whatsapp: 'WhatsApp',
      whatsappIstanbul: 'İstanbul WhatsApp',
      whatsappIran: 'İran WhatsApp',
      armenia: 'Ermenistan',
      iran: 'İran',
      contactForm: 'İletişim formu',
      address: 'Adres',
      workingHours: 'Çalışma saatleri',
      languages: 'Diller',
      contact: 'Telefon',
      email: 'E-posta',
      hubBadge: 'Merkez',
      mapAlt: 'Bizdavar küresel varlık haritası — İstanbul ana ofis'
    },
    en: {
      intlBrand: 'International brand',
      armeniaReg: 'Armenia registration',
      iranLegal: 'Iran legal entity',
      brandPrefix: 'Brand',
      founded: 'Founded',
      domains: 'Domains',
      serviceLangs: 'Service languages',
      b2bProfile: 'B2B profile',
      linkedinProfile: 'LinkedIn profile',
      education: 'Education',
      years: 'years',
      projects: 'projects',
      office: 'Office',
      mainOffice: 'Head office',
      whatsapp: 'WhatsApp',
      whatsappIstanbul: 'Istanbul WhatsApp',
      whatsappIran: 'Iran WhatsApp',
      armenia: 'Armenia',
      iran: 'Iran',
      contactForm: 'Contact form',
      address: 'Address',
      workingHours: 'Working hours',
      languages: 'Languages',
      contact: 'Phone',
      email: 'Email',
      hubBadge: 'Hub',
      mapAlt: 'Bizdavar global presence map — Istanbul HQ'
    }
  };

  function mergeById(base, overlay) {
    if (!overlay) return base;
    const map = Object.fromEntries(overlay.map(o => [o.id, o]));
    return base.map(item => ({ ...item, ...(map[item.id] || {}) }));
  }

  const TR = {
    identity: {
      legalNameFa: 'Bizdavar Group',
      iranLegalNameFa: 'Middle East Development Technology Processors',
      iranBrandFa: 'Bizdavar Digital Marketing Agency',
      armeniaBrandFa: 'Bizdavar Group',
      foundedDisplay: '2013',
      languages: ['Türkçe', 'Farsça', 'English'],
      headquarters: [
        { city: 'İstanbul', country: 'Türkiye', role: 'Ana ofis · Uluslararası operasyon merkezi', badge: 'HQ' },
        { city: 'Erivan', country: 'Ermenistan', role: 'Şirket kaydı · Bizdavar Group LLC — SEO ve dijital pazarlama', badge: 'AM' },
        { city: 'Tebriz', country: 'İran', role: 'Tüzel kişilik · Middle East Development Technology Processors', badge: 'IR' }
      ],
      directories: [
        { label: 'Spyur.am — Ermenistan profili', url: 'https://www.spyur.am/en/companies/bizdavar/57783/', note: 'Bizdavar Group LLC · Erivan · SEO ve web reklamcılığı' },
        { label: 'Jooyeshgar — B2B profili', url: 'https://www.jooyeshgar.com/company/det-29884', note: 'Middle East Development Technology Processors · Doğu Azerbaycan' }
      ]
    },
    leadership: {
      founder: {
        nameFa: 'Ersan Jahed Tabrizi',
        titleFa: 'Kurucu ve strateji lideri',
        bioFa: '12+ yıllık deneyimle 100+ web sitesi ve özel platform tasarladı ve geliştirdi. Bizdavar Group kurucusu; fintech ve ödemelerden endüstri ve bulut hostinge kadar 11 ülkede dijital projelere liderlik eder.',
        education: [
          'Elektrik Mühendisliği Lisans — İslam Azad Üniversitesi (Endüstriyel Otomasyon)',
          'Bilgisayar Mühendisliği Lisans — İslam Azad Üniversitesi Teheran',
          'MBA — Teheran Üniversitesi (Dijital Dönüşüm)',
          'Bilgisayar Mühendisliği Yüksek Lisans — İstanbul Nişantaşı Üniversitesi'
        ],
        expertise: [
          'Fintech ve ödeme platformları',
          'İleri WordPress ve özel geliştirme',
          'Performans pazarlama ve SEO',
          'Yapay zeka otomasyonu',
          'B2B endüstriyel ekipman tedariki',
          'Grafik, içerik ve satış ekiplerine liderlik'
        ]
      }
    },
    activityAreas: [
      { id: 'digital-growth', title: 'Dijital büyüme', items: ['Dijital pazarlama', 'SEO ve Google Ads', 'SMM yönetimi', 'Dönüşüm hunisi', 'GA4 analitiği'] },
      { id: 'web-platforms', title: 'Web platformları', items: ['Kurumsal web sitesi', 'WooCommerce mağaza', 'Fast Web Studio', 'İleri WordPress', 'Özel geliştirme'] },
      { id: 'fintech', title: 'Fintech ve ödeme', items: ['Ödeme platformları', 'Finansal panolar', 'Cloudflare güvenliği', 'Telegram botları', 'Finans markalaşması'] },
      { id: 'industrial', title: 'Endüstri ve B2B', items: ['VEGA ve Prosense tedariki', 'BizTab — IoT termometre', 'Endüstriyel pompa ve motor', 'Proses enstrümantasyonu', 'Otomasyon', 'Uluslararası tedarik'] },
      { id: 'infrastructure', title: 'Altyapı', items: ['Netinode domain, hosting ve sunucu', 'DNS yönetimi', 'SSL ve güvenlik', 'Teknik destek'] }
    ],
    ecosystem: [
      { name: 'ZedPay', type: 'Fintech / ödeme', note: 'IT yönetimi ve platform geliştirme' },
      { name: 'Netinode', type: 'Domain, hosting, sunucu', note: 'Domain, hosting, WordPress hosting, kurumsal e-posta, DNS' },
      { name: 'BZ Diamond', type: 'Web tasarım referansı', note: 'WooCommerce mağaza, e-posta ve SEO — müşteri projesi' },
      { name: 'Biztejarat', type: 'SMM referansı', note: 'Endüstriyel ürün Instagram sayfası — içerik yönetimi' },
      { name: 'BizTab', type: 'IoT / sağlık ürünü', note: 'Temassız duvar termometresi — Tebriz’de ilk örnek, Bizdavar ekibi' },
      { name: 'BizClean V5', type: 'Hijyen ürünü', note: 'Otomatik el dezenfektanı — ultrasonik sensör, Digikala’da satış' },
      { name: 'BZBroker', type: 'P2P borsa', note: 'Kripto platformu' },
      { name: 'FXGuard', type: 'WhatsApp CRM', note: 'Satış otomasyonu' },
      { name: 'Bear Event', type: 'Etkinlik', note: 'Bilet ve online etkinlik' },
      { name: 'Gamak', type: 'Elektrik motoru', note: 'Türkiye endüstriyel motor tedariki' },
      { name: 'Arian Pumps', type: 'Web tasarım referansı', note: 'B2B kurumsal web — dijital müşteri' },
      { name: 'Karen Leather', type: 'İhracat', note: 'B2B deri pazarlama' }
    ],
    presence: {
      summary: '11 ülkede tamamlanan projeler — ana ofis İstanbul; İran, Türkiye ve MENA projeleri buradan koordine edilir.',
      summaryFa: '11 ülkede tamamlanan projeler — ana ofis İstanbul; İran, Türkiye ve MENA projeleri buradan koordine edilir.',
      stats: [
        { value: '11', label: 'Aktif ülke' },
        { value: '3', label: 'Operasyon ofisi' },
        { value: '100+', label: 'Uluslararası proje' }
      ],
      istanbulHub: {
        title: 'İstanbul operasyon merkezi',
        city: 'İstanbul',
        country: 'Türkiye',
        address: 'İstanbul, Türkiye',
        workingHours: '7/24',
        languages: ['Türkçe', 'Farsça', 'English'],
        intro: 'Bizdavar Group’un İstanbul’daki ana ofisi; dijital, fintech ve B2B endüstriyel tedarik projelerinin koordinasyon merkezidir. Türkçe, Farsça ve İngilizce danışmanlık; proforma, uluslararası lojistik ve teknik destek buradan yönetilir.',
        services: [
          'Fintech ve ödeme platformları (ZedPay ekosistemi)',
          'Web tasarım ve Fast Web Studio',
          'Dijital pazarlama, SEO ve SMM',
          'VEGA, Prosense, Gamak ve Türkiye ekipman tedariki',
          'Domain, hosting, SSL ve altyapı (Netinode)',
          'İran ve MENA proje koordinasyonu'
        ],
        note: 'Endüstriyel veya dijital teklif için — WhatsApp veya Türkiye hattından doğrudan iletişim.'
      },
      yerevanHub: {
        title: 'Şirket kaydı — Erivan',
        brand: 'Bizdavar Group — SEO & Digital Marketing',
        city: 'Erivan',
        country: 'Ermenistan',
        intro: 'Ermenistan’da kayıtlı şirket — SEO, web reklamcılığı, dijital pazarlama ve web tasarımında aktif. Spyur.am’deki Bizdavar profili doğrulanabilir.',
        services: [
          'SEO ve arama motoru optimizasyonu',
          'Web reklamcılığı ve promosyon',
          'Dijital pazarlama ve kampanya yönetimi',
          'Web tasarım ve geliştirme',
          'Marka ve içerik üretimi',
          'Bölgesel B2B projeler'
        ],
        note: 'Ermenistan iş rehberi — kayıt no. 57783'
      },
      tabrizHub: {
        title: 'İran ofisi — Tebriz',
        subtitle: 'Middle East Development Technology Processors',
        brand: 'Bizdavar Digital Marketing Agency',
        city: 'Tebriz',
        province: 'Doğu Azerbaycan',
        country: 'İran',
        address: 'Tebriz, Rudaki Cd., Janfeshan, 12. Sokak No:6',
        languages: ['Farsça', 'English'],
        intro: 'İran’da kayıtlı tüzel kişilik — dijital pazarlama, web tasarım, içerik, SEO ve B2B endüstriyel projelerde aktif. “Bizdavar” ticari markası bu şirket altında faaliyet gösterir.',
        services: [
          'Arama motoru optimizasyonu (SEO)',
          'Sosyal medya ve SMM yönetimi',
          'Web tasarım ve geliştirme',
          'Metin, video ve fotoğraf içerik üretimi',
          'Web ve sosyal medya analitiği',
          'Endüstriyel tedarik ve B2B projeler'
        ],
        profileLabel: 'Jooyeshgar profili',
        note: 'Jooyeshgar’da doğrulanabilir B2B profili — Doğu Azerbaycan.',
        exhibitionsNote: '9. RINOTEX (Rabe Rashidi) fuarı — Kasım 2021 · 12 m² stant · ICT zonu'
      },
      regions: [
        {
          id: 'mena',
          title: 'Orta Doğu ve Türkiye',
          countries: [
            { name: 'Türkiye', hub: true, city: 'İstanbul', focus: 'Ana ofis · Fintech · Web · Endüstriyel tedarik', detail: 'Uluslararası operasyon merkezi — Türkçe, Farsça ve İngilizce danışmanlık' },
            { name: 'İran', hub: true, city: 'Tebriz', focus: 'Tüzel kişilik · Dijital ve endüstri', detail: 'Middle East Development Technology Processors — Doğu Azerbaycan' },
            { name: 'BAE', focus: 'Ticaret ve fintech' },
            { name: 'Irak', focus: 'B2B endüstri' },
            { name: 'Lübnan', focus: 'Bölgesel projeler' }
          ]
        },
        {
          id: 'europe',
          title: 'Avrupa ve Kafkasya',
          countries: [
            { name: 'Ermenistan', hub: true, city: 'Erivan', focus: 'Şirket kaydı · SEO ve dijital', detail: 'Bizdavar Group LLC — Spyur.am profili' },
            { name: 'Gürcistan', focus: 'Uluslararası ticaret' },
            { name: 'Almanya', focus: 'Ekipman tedariki' },
            { name: 'İngiltere', focus: 'Fintech ve danışmanlık' },
            { name: 'İtalya', focus: 'Endüstriyel projeler' }
          ]
        },
        {
          id: 'americas',
          title: 'Amerika',
          countries: [
            { name: 'ABD', focus: 'Platform ve startup' }
          ]
        }
      ]
    },
    exhibitions: [
      {
        id: 'tabriz-growth-center-1399',
        dateDisplay: 'Nisan 2020',
        title: 'Tebriz Üniversitesi büyüme merkezi fuarı — COVID-19',
        entity: 'Bizdavar ekibi',
        desc: 'Bizdavar ekibinin mühendislik ürünleri — BizTab termometre ve BizClean V5 dezenfektanı dahil — Doğu Azerbaycan valisinin katılımıyla tanıtıldı. ISNA, SNN ve IRIB kapsamı.',
        city: 'Tebriz',
        country: 'İran',
        sourceLabel: 'IRIB haberi',
        videoLabel: 'Video — fuar görüntüleri'
      },
      {
        id: 'rinotex-1400',
        dateDisplay: 'Kasım 2021',
        title: '9. Rabe Rashidi İnovasyon ve Teknoloji Fuarı — RINOTEX 1400',
        entity: 'Middle East Development Technology Processors',
        brand: 'Bizdavar Digital Marketing Agency',
        desc: 'Eşzamanlı katılım: (1) “Middle East Development Technology Processors” (Bizdavar) 12 m² stant — teknoloji ticarileştirme bölümü, ICT zonu; (2) Tebriz Üniversitesi teknopark birimi “Imen Sahand Padideh” — akıllı el dezenfektanı ürünü.',
        section: 'Teknoloji geliştirme ve ticarileştirme',
        zone: 'Bilgi ve iletişim teknolojileri (ICT)',
        booth: '12 m²',
        city: 'Tebriz',
        country: 'İran',
        sourceLabel: 'Resmi RINOTEX sitesi',
        parkUnit: {
          name: 'Imen Sahand Padideh',
          host: 'Tebriz Üniversitesi Bilim ve Teknoloji Parkı',
          product: 'Akıllı el dezenfektanı tasarımı ve üretimi',
          period: 'Aralık 2019 — Ağustos 2022',
          note: 'Kurucunun kişisel yatırımı — tasarım ve üretim Bizdavar ekibi tarafından'
        }
      }
    ],
    achievements: [
      {
        id: 'biztab',
        year: '2020',
        title: 'BizTab — Tebriz’in ilk temassız duvar termometresi',
        desc: '0,3°C altında hata payı — Tebriz Üniversitesi akademisyenleri tarafından onaylandı. Bizdavar ekibinin özel tasarımı.',
        tags: ['IoT', 'Tebriz', 'Özel ürün']
      },
      {
        id: 'bizsanitizer-v5',
        year: '2020',
        title: 'BizClean V5 — Otomatik el dezenfektanı',
        desc: 'Bizdavar ekibi tarafından tasarlanıp üretildi (2019–2022), 2020 büyüme merkezi fuarı (ISNA, SNN, IRIB), RINOTEX 1400 teknopark birimi, Digikala satışı.',
        pressLabel: 'IRIB',
        tags: ['Hijyen', 'IoT', 'COVID-19', 'Tebriz Üniversitesi', 'RINOTEX', 'Imen Sahand Padideh', 'Digikala']
      }
    ],
    verifiedSources: [
      {
        group: 'Medya ve haber',
        items: [
          { label: 'ISNA — Tebriz Üniversitesi COVID-19 fuarı', date: 'Nisan 2020', note: 'BizClean V5 · Bizdavar hijyen ekipmanları' },
          { label: 'SNN — Tebriz büyüme merkezi fuarı', date: 'Nisan 2020', note: '21 bilgi tabanlı ürün — dezenfektan cihazları' },
          { label: 'IRIB — fuar video haberi', date: 'Nisan 2020', note: 'BizClean sayfasında yerel video' },
          { label: 'Nasrnews — Tebriz’in ilk temassız duvar termometresi (BizTab)', date: 'Mart 2020', note: 'Bizdavar ekibi tarafından geliştirildi' }
        ]
      },
      {
        group: 'Fuar ve teknopark',
        items: [
          { label: 'RINOTEX — resmi fuar sitesi', date: 'Kasım 2021', note: '9. Rabe Rashidi İnovasyon ve Teknoloji Fuarı' },
          { label: 'RINOTEX — fuar geçmişi 1400', date: '2021', note: 'ICT stant · teknopark birimleri' },
          { label: 'Tebriz Üniversitesi Bilim ve Teknoloji Parkı', note: '“Imen Sahand Padideh” teknopark birimi' }
        ]
      },
      {
        group: 'Satış ve video',
        items: [
          { label: 'Digikala — BizClean V5 (dkp-3730222)', note: 'Bizdavar mühendislik ürünü' },
          { label: 'YouTube — BizClean V1 prototip', note: 'Kısa video — V1 prototip; ticari sürüm V5 Digikala\'da' }
        ]
      },
      {
        group: 'Kurumsal profiller',
        items: [
          { label: 'LinkedIn — Ersan Jahed Tabrizi' },
          { label: 'Spyur.am — Bizdavar Group (Ermenistan)' },
          { label: 'Jooyeshgar — Middle East Development Technology Processors' }
        ]
      }
    ],
    socialProof: {
      sources: [
        { type: 'linkedin', label: 'Kurucu LinkedIn profili', url: 'https://www.linkedin.com/in/ersanjt' },
        { type: 'spyur', label: 'Spyur.am profili — Ermenistan', url: 'https://www.spyur.am/en/companies/bizdavar/57783/' },
        { type: 'jooyeshgar', label: 'Jooyeshgar B2B profili — İran', url: 'https://www.jooyeshgar.com/company/det-29884' },
        { type: 'portfolio', label: 'Yayınlanan portfolyo', url: 'pages/portfolio.html' }
      ],
      highlights: [
        { category: 'Fuar ve teknoloji', text: '“Imen Sahand Padideh” teknopark birimi (Tebriz Üniversitesi) — RINOTEX 1400’de akıllı el dezenfektanı; tasarım ve üretim Bizdavar ekibi (2019–2022).', source: 'RINOTEX — Rabe Rashidi', year: '2021' },
        { category: 'Fuar ve teknoloji', text: '“Middle East Development Technology Processors” (Bizdavar) 9. RINOTEX 1400 — ICT zonunda 12 m² stant.', source: 'RINOTEX — Rabe Rashidi', year: '2021' },
        { category: 'Ürün ve inovasyon', text: 'IRIB — Tebriz Üniversitesi fuarından video haber; valinin katılımıyla Bizdavar ürünleri tanıtıldı.', source: 'IRIB Haber Ajansı', year: '2020' },
        { category: 'Ürün ve inovasyon', text: 'BizClean V5 — Tebriz büyüme merkezi COVID-19 fuarında; Doğu Azerbaycan valisi katılımı.', source: 'SNN', year: '2020' },
        { category: 'Ürün ve inovasyon', text: 'ISNA — Tebriz Üniversitesi araştırma çıktıları; Bizdavar ürünleri ve kurucunun fuar katılımı.', source: 'ISNA', year: '2020' },
        { category: 'Ürün ve inovasyon', text: 'BizTab — Tebriz’in ilk temassız duvar termometresi, ±0,3°C hassasiyet, Tebriz Üniversitesi onayı.', source: 'Nasrnews', year: '2020' },
        { category: 'Dijital pazarlama', text: 'Yenilikçi dijital pazarlama stratejileriyle müşteri dönüşüm oranları belirgin şekilde arttı.', source: 'Kurucu LinkedIn gönderisi', year: '2024' },
        { category: 'Uygulama deneyimi', text: '11 ülkede 100+ web ve platform projesi — startup’tan fintech ve endüstri markalarına.', source: 'LinkedIn — Ersan J. Tabrizi', year: '2025' },
        { category: 'Fintech', text: 'ZedPay ekosistemi için ödeme platformları, yönetim panelleri ve Cloudflare güvenlik entegrasyonu.', source: 'Doğrulanmış profesyonel geçmiş', year: '2023–2025' },
        { category: 'Endüstri', text: 'Endüstriyel ekipman tedarik yönetimi — Golgohar maden pompalarından uluslararası enstrümantasyona.', source: 'Sanati ve Europe Gayrimenkul geçmişi', year: '2015–2024' }
      ],
      trustSignals: [
        'Şeffaf iletişim: info@bizdavar.com',
        'LinkedIn’de doğrulanabilir kurucu profili',
        'Bağımsız domainlerde canlı portfolyo örnekleri',
        'Google Analytics ve reklam sertifikaları',
        '9. RINOTEX 1400 katılımı — Middle East Development Technology Processors ve Imen Sahand Padideh teknopark birimi',
        'Jooyeshgar B2B profili — Middle East Development Technology Processors',
        'Spyur.am profili — Bizdavar Group LLC Erivan',
        'Instagram ve LinkedIn’de aktif varlık'
      ]
    },
    faqIntel: [
      { q: 'İran’daki resmi şirket adı nedir?', a: 'İran tüzel kişiliği “Middle East Development Technology Processors” — ticari marka “Bizdavar Digital Marketing Agency”. Tebriz ofisi, Doğu Azerbaycan. Jooyeshgar profili mevcuttur.' },
      { q: 'Bizdavar teknoloji fuarlarına katıldı mı?', a: 'Evet — “Middle East Development Technology Processors” (Bizdavar) Kasım 2021’de 9. RINOTEX’te ICT zonunda 12 m² stantla yer aldı. Aynı dönemde teknopark birimi “Imen Sahand Padideh” akıllı el dezenfektanını tanıttı — tasarım ve üretim Bizdavar ekibi (2019–2022). Detaylar rinotex.ir ve fuar bölümünde.' },
      { q: 'Bizdavar ile “Imen Sahand Padideh” ilişkisi nedir?', a: '“Imen Sahand Padideh”, Tebriz Üniversitesi teknoparkında faaliyet gösteren bir birimdi. 2019–2022 arasında kurucu kişisel yatırım yaptı; BizClean V5 dahil tüm tasarım ve üretim Bizdavar ekibince yapıldı. RINOTEX 1400’de teknopark birimi aracılığıyla tanıtıldı.' },
      { q: 'Ermenistan kaydı nasıl?', a: 'Bizdavar Group, Erivan’da LLC olarak kayıtlı — SEO, web reklamcılığı ve dijital pazarlamada aktif. Spyur.am profili (57783) doğrulanabilir.' },
      { q: 'Bizdavar Group hangi yıldan beri faal?', a: '2013’ten beri Ersan Jahed Tabrizi tarafından kuruldu; dijital, web ve endüstriyel hizmetleri tek marka altında sunar.' },
      { q: 'Bizdavar hangi ülkelerde proje yürüttü?', a: 'Türkiye, BAE, Almanya, ABD, İngiltere, Ermenistan, Lübnan, İran, Irak, Gürcistan ve İtalya dahil 11 ülkede projeler tamamlandı.' },
      { q: 'Bizdavar’ı diğer ajanslardan ayıran nedir?', a: 'Tam dijital ajans (SEO, reklam, SMM) + teknik geliştirme (WordPress, fintech, AI) + B2B endüstriyel tedarik — büyüme ve altyapı için tek ekip.' },
      { q: 'Bizdavar sadece web sitesi mi yapıyor?', a: 'Hayır. Fast Web Studio’nun yanı sıra dijital pazarlama, Netinode altyapı yönetimi, fintech ve VEGA/Prosense tedariki de sunulur.' },
      { q: 'Bizdavar’ın güvenilirliğini nasıl doğrularım?', a: 'Kurucu LinkedIn profili, canlı portfolyo, Google sertifikaları ve info@bizdavar.com üzerinden doğrudan iletişim.' }
    ]
  };

  const EN = {
    identity: {
      legalNameFa: 'Bizdavar Group',
      iranLegalNameFa: 'Middle East Development Technology Processors',
      iranBrandFa: 'Bizdavar Digital Marketing Agency',
      armeniaBrandFa: 'Bizdavar Group',
      foundedDisplay: '2013',
      languages: ['Persian', 'English', 'Turkish'],
      headquarters: [
        { city: 'Istanbul', country: 'Turkey', role: 'Head office · International operations centre', badge: 'HQ' },
        { city: 'Yerevan', country: 'Armenia', role: 'Company registration · Bizdavar Group LLC — SEO & digital marketing', badge: 'AM' },
        { city: 'Tabriz', country: 'Iran', role: 'Legal entity · Middle East Development Technology Processors', badge: 'IR' }
      ],
      directories: [
        { label: 'Spyur.am — Armenia profile', url: 'https://www.spyur.am/en/companies/bizdavar/57783/', note: 'Bizdavar Group LLC · Yerevan · SEO and web advertising' },
        { label: 'Jooyeshgar — B2B profile', url: 'https://www.jooyeshgar.com/company/det-29884', note: 'Middle East Development Technology Processors · East Azerbaijan' }
      ]
    },
    leadership: {
      founder: {
        nameFa: 'Ersan Jahed Tabrizi',
        titleFa: 'Founder & lead strategist',
        bioFa: '12+ years designing and building 100+ websites and custom platforms. Founder of Bizdavar Group, leading digital projects across 11 countries — from fintech and payments to industry and cloud hosting.',
        education: [
          'BSc Electrical Engineering — Islamic Azad University (Industrial Automation)',
          'BSc Computer Engineering — Islamic Azad University Tehran',
          'MBA — University of Tehran (Digital Transformation)',
          'MSc Computer Engineering — Nişantaşı University Istanbul'
        ],
        expertise: [
          'Fintech and payment platforms',
          'Advanced WordPress and custom development',
          'Performance marketing and SEO',
          'AI automation',
          'B2B industrial equipment supply',
          'Leading graphic, content and sales teams'
        ]
      }
    },
    activityAreas: TR.activityAreas.map((a, i) => ({
      ...a,
      title: ['Digital growth', 'Web platforms', 'Fintech & payments', 'Industry & B2B', 'Infrastructure'][i],
      items: [
        ['Digital marketing', 'SEO & Google Ads', 'SMM management', 'Conversion funnel', 'GA4 analytics'],
        ['Corporate websites', 'WooCommerce stores', 'Fast Web Studio', 'Advanced WordPress', 'Custom development'],
        ['Payment platforms', 'Financial dashboards', 'Cloudflare security', 'Telegram bots', 'Financial branding'],
        ['VEGA & Prosense supply', 'BizTab — IoT thermometer', 'Industrial pumps & motors', 'Process instrumentation', 'Automation', 'International procurement'],
        ['Netinode domains, hosting & servers', 'DNS management', 'SSL & security', 'Technical support']
      ][i]
    })),
    ecosystem: [
      { name: 'ZedPay', type: 'Fintech / payments', note: 'IT management and platform development' },
      { name: 'Netinode', type: 'Domains, hosting & servers', note: 'Domains, hosting, WordPress hosting, business email, DNS' },
      { name: 'BZ Diamond', type: 'Web design case study', note: 'WooCommerce store, email and SEO — client project' },
      { name: 'Biztejarat', type: 'SMM case study', note: 'Industrial product Instagram — content management' },
      { name: 'BizTab', type: 'IoT / health product', note: 'Non-contact wall thermometer — first in Tabriz, Bizdavar team' },
      { name: 'BizClean V5', type: 'Hygiene product', note: 'Automatic hand sanitizer — ultrasonic sensor, sold on Digikala' },
      { name: 'BZBroker', type: 'P2P exchange', note: 'Crypto platform' },
      { name: 'WhatsApp CRM', type: 'WhatsApp CRM script', note: 'Custom sales automation script' },
      { name: 'Bear Event', type: 'Events', note: 'Tickets and online events' },
      { name: 'Gamak', type: 'Electric motors', note: 'Turkish industrial motor supply' },
      { name: 'Arian Pumps', type: 'Web design case study', note: 'B2B corporate web — digital client' },
      { name: 'Karen Leather', type: 'Export', note: 'B2B leather marketing' }
    ],
    presence: {
      summary: 'Projects delivered in 11 countries — HQ in Istanbul; Iran, Turkey and MENA projects coordinated from this hub.',
      summaryFa: 'Projects delivered in 11 countries — HQ in Istanbul; Iran, Turkey and MENA projects coordinated from this hub.',
      stats: [
        { value: '11', label: 'Active countries' },
        { value: '3', label: 'Operating offices' },
        { value: '100+', label: 'International projects' }
      ],
      istanbulHub: {
        title: 'Istanbul operations centre',
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Istanbul, Turkey',
        workingHours: '24/7',
        languages: ['Persian', 'Turkish', 'English'],
        intro: 'Bizdavar Group’s Istanbul HQ coordinates digital, fintech and B2B industrial supply projects. Persian consulting, proforma quotes, international logistics and technical support are managed here.',
        services: [
          'Fintech and payment platforms (ZedPay ecosystem)',
          'Web design and Fast Web Studio',
          'Digital marketing, SEO and SMM',
          'VEGA, Prosense, Gamak and Turkish equipment supply',
          'Domains, hosting, SSL and infrastructure (Netinode)',
          'Iran and MENA project coordination'
        ],
        note: 'For industrial or digital enquiries — WhatsApp or direct call to the Turkey line.'
      },
      yerevanHub: {
        title: 'Company registration — Yerevan',
        brand: 'Bizdavar Group — SEO & Digital Marketing',
        city: 'Yerevan',
        country: 'Armenia',
        intro: 'Registered company in Armenia — active in SEO, web advertising, digital marketing and web design. Bizdavar profile on Spyur.am is verifiable.',
        services: [
          'SEO and search engine optimization',
          'Web advertising and promotion',
          'Digital marketing and campaign management',
          'Web design and development',
          'Branding and content production',
          'Regional B2B projects'
        ],
        note: 'Armenia business directory — ID 57783'
      },
      tabrizHub: {
        title: 'Iran office — Tabriz',
        subtitle: 'Middle East Development Technology Processors',
        brand: 'Bizdavar Digital Marketing Agency',
        city: 'Tabriz',
        province: 'East Azerbaijan',
        country: 'Iran',
        address: 'Tabriz, Rudaki St., Janfeshan, 1st 12m Alley, No. 6',
        languages: ['Persian', 'English'],
        intro: 'Registered legal entity in Iran — active in digital marketing, web design, content, SEO and B2B industrial projects. The “Bizdavar” brand operates under this company in the Iranian market.',
        services: [
          'Search engine optimization (SEO)',
          'Social media and SMM management',
          'Web design and development',
          'Text, video and photo content',
          'Website and social media analytics',
          'Industrial supply and B2B projects'
        ],
        profileLabel: 'Jooyeshgar profile',
        note: 'Verifiable B2B profile on Jooyeshgar — East Azerbaijan province.',
        exhibitionsNote: '9th RINOTEX (Rabe Rashidi) exhibition — Nov 2021 · 12 m² booth · ICT zone'
      },
      regions: [
        {
          id: 'mena',
          title: 'Middle East & Turkey',
          countries: [
            { name: 'Turkey', hub: true, city: 'Istanbul', focus: 'HQ · Fintech · Web · Industrial supply', detail: 'International ops centre — Persian/Turkish/English consulting' },
            { name: 'Iran', hub: true, city: 'Tabriz', focus: 'Legal entity · Digital & industry', detail: 'Middle East Development Technology Processors — East Azerbaijan' },
            { name: 'UAE', focus: 'Trade and fintech' },
            { name: 'Iraq', focus: 'B2B industry' },
            { name: 'Lebanon', focus: 'Regional projects' }
          ]
        },
        {
          id: 'europe',
          title: 'Europe & Caucasus',
          countries: [
            { name: 'Armenia', hub: true, city: 'Yerevan', focus: 'Registration · SEO & digital', detail: 'Bizdavar Group LLC — Spyur.am profile' },
            { name: 'Georgia', focus: 'International trade' },
            { name: 'Germany', focus: 'Equipment supply' },
            { name: 'United Kingdom', focus: 'Fintech and consulting' },
            { name: 'Italy', focus: 'Industrial projects' }
          ]
        },
        {
          id: 'americas',
          title: 'Americas',
          countries: [
            { name: 'United States', focus: 'Platforms and startups' }
          ]
        }
      ]
    },
    exhibitions: [
      {
        id: 'tabriz-growth-center-1399',
        dateDisplay: 'April 2020',
        title: 'University of Tabriz growth centre exhibition — COVID-19',
        entity: 'Bizdavar team',
        desc: 'Engineered products by the Bizdavar team — including BizTab thermometer and BizClean V5 sanitizer — presented with the East Azerbaijan governor. Covered by ISNA, SNN and IRIB.',
        city: 'Tabriz',
        country: 'Iran',
        sourceLabel: 'IRIB report',
        videoLabel: 'Video — exhibition footage'
      },
      {
        id: 'rinotex-1400',
        dateDisplay: 'November 2021',
        title: '9th Rab\'e Rashidi Innovation & Technology Exhibition — RINOTEX 1400',
        entity: 'Middle East Development Technology Processors',
        brand: 'Bizdavar Digital Marketing Agency',
        desc: 'Dual presence: (1) “Middle East Development Technology Processors” (Bizdavar) 12 m² booth in technology commercialization — ICT zone; (2) tech-park unit “Imen Sahand Padideh” from Tabriz University Science & Technology Park — smart hand sanitizer product.',
        section: 'Technology development & commercialization',
        zone: 'Information & communication technology (ICT)',
        booth: '12 m²',
        city: 'Tabriz',
        country: 'Iran',
        sourceLabel: 'Official RINOTEX website',
        parkUnit: {
          name: 'Imen Sahand Padideh',
          host: 'Tabriz University Science & Technology Park',
          product: 'Smart hand sanitizer design and manufacturing',
          period: 'Dec 2019 — Aug 2022',
          note: 'Founder personal investment — design and production by Bizdavar team'
        }
      }
    ],
    achievements: [
      {
        id: 'biztab',
        year: '2020',
        title: 'BizTab — First non-contact wall thermometer in Tabriz',
        desc: 'Sub-0.3°C error margin — validated by Tabriz University faculty. Exclusive design and ownership by the Bizdavar team.',
        tags: ['IoT', 'Tabriz', 'Owned product']
      },
      {
        id: 'bizsanitizer-v5',
        year: '2020',
        title: 'BizClean V5 — Automatic hand sanitizer dispenser',
        desc: 'Designed and built by Bizdavar (2019–2022), 2020 growth-centre exhibition (ISNA, SNN, IRIB), RINOTEX 1400 via tech-park unit, sold on Digikala.',
        pressLabel: 'IRIB',
        tags: ['Hygiene', 'IoT', 'COVID-19', 'Tabriz University', 'RINOTEX', 'Imen Sahand Padideh', 'Digikala']
      }
    ],
    verifiedSources: [
      {
        group: 'Media & news',
        items: [
          { label: 'ISNA — Tabriz University COVID-19 exhibition', date: 'April 2020', note: 'BizClean V5 · Bizdavar hygiene equipment' },
          { label: 'SNN — Tabriz growth centre exhibition', date: 'April 2020', note: '21 knowledge-based products — sanitizer devices' },
          { label: 'IRIB — exhibition video report', date: 'April 2020', note: 'Local video on BizClean page' },
          { label: 'Nasrnews — first non-contact wall thermometer in Tabriz (BizTab)', date: 'March 2020', note: 'Developed by Bizdavar team' }
        ]
      },
      {
        group: 'Exhibitions & tech park',
        items: [
          { label: 'RINOTEX — official exhibition site', date: 'Nov 2021', note: '9th Rab\'e Rashidi Innovation & Technology Exhibition' },
          { label: 'RINOTEX — 1400 exhibition history', date: '2021', note: 'ICT booth · tech-park units' },
          { label: 'Tabriz University Science & Technology Park', note: '“Imen Sahand Padideh” park unit' }
        ]
      },
      {
        group: 'Sales & video',
        items: [
          { label: 'Digikala — BizClean V5 (dkp-3730222)', note: 'Bizdavar engineered product' },
          { label: 'YouTube — BizClean V1 prototype', note: 'Short video — V1 prototype; retail product is V5 on Digikala' }
        ]
      },
      {
        group: 'Company profiles',
        items: [
          { label: 'LinkedIn — Ersan Jahed Tabrizi' },
          { label: 'Spyur.am — Bizdavar Group (Armenia)' },
          { label: 'Jooyeshgar — Middle East Development Technology Processors' }
        ]
      }
    ],
    socialProof: {
      sources: [
        { type: 'linkedin', label: 'Founder LinkedIn profile', url: 'https://www.linkedin.com/in/ersanjt' },
        { type: 'spyur', label: 'Spyur.am profile — Armenia', url: 'https://www.spyur.am/en/companies/bizdavar/57783/' },
        { type: 'jooyeshgar', label: 'Jooyeshgar B2B profile — Iran', url: 'https://www.jooyeshgar.com/company/det-29884' },
        { type: 'portfolio', label: 'Published portfolio', url: 'pages/portfolio.html' }
      ],
      highlights: [
        { category: 'Exhibitions & technology', text: '“Imen Sahand Padideh” tech-park unit (Tabriz University) — smart hand sanitizer at RINOTEX 1400; design and production by Bizdavar (2019–2022).', source: 'RINOTEX — Rabe Rashidi', year: '2021' },
        { category: 'Exhibitions & technology', text: '“Middle East Development Technology Processors” (Bizdavar) at 9th RINOTEX 1400 — 12 m² booth in ICT zone.', source: 'RINOTEX — Rabe Rashidi', year: '2021' },
        { category: 'Products & innovation', text: 'IRIB video report from Tabriz University exhibition — Bizdavar devices with provincial governor attendance.', source: 'IRIB News Agency', year: '2020' },
        { category: 'Products & innovation', text: 'BizClean V5 at Tabriz growth-centre COVID-19 exhibition with East Azerbaijan governor.', source: 'SNN', year: '2020' },
        { category: 'Products & innovation', text: 'ISNA coverage of Tabriz University research outputs — Bizdavar devices and founder at the exhibition.', source: 'ISNA', year: '2020' },
        { category: 'Products & innovation', text: 'BizTab — first non-contact wall thermometer in Tabriz, ±0.3°C accuracy, Tabriz University validation.', source: 'Nasrnews', year: '2020' },
        { category: 'Digital marketing', text: 'Modern digital marketing strategies have measurably increased client conversion rates.', source: 'Founder LinkedIn post', year: '2024' },
        { category: 'Delivery experience', text: '100+ web and platform projects in 11 countries — from startups to fintech and industrial brands.', source: 'LinkedIn — Ersan J. Tabrizi', year: '2025' },
        { category: 'Fintech', text: 'Payment platforms, admin dashboards and Cloudflare security integration for the ZedPay ecosystem.', source: 'Verified professional record', year: '2023–2025' },
        { category: 'Industry', text: 'Industrial equipment supply management — from Golgohar mine fire pumps to international instrumentation.', source: 'Sanatm and Europe Gayrimenkul record', year: '2015–2024' }
      ],
      trustSignals: [
        'Transparent contact: info@bizdavar.com',
        'Verifiable founder profile on LinkedIn',
        'Live portfolio examples on independent domains',
        'Google Analytics and advertising certifications',
        '9th RINOTEX 1400 — Middle East Development Technology Processors and Imen Sahand Padideh park unit',
        'Jooyeshgar B2B profile — Middle East Development Technology Processors',
        'Spyur.am profile — Bizdavar Group LLC Yerevan',
        'Active presence on Instagram and LinkedIn'
      ]
    },
    faqIntel: [
      { q: 'What is the official company name in Iran?', a: 'The legal entity is “Middle East Development Technology Processors” — commercial brand “Bizdavar Digital Marketing Agency”. Tabriz office, East Azerbaijan. Jooyeshgar B2B profile available.' },
      { q: 'Has Bizdavar attended technology exhibitions?', a: 'Yes — “Middle East Development Technology Processors” (Bizdavar) had a 12 m² ICT booth at the 9th RINOTEX in Nov 2021. The tech-park unit “Imen Sahand Padideh” also presented a smart hand sanitizer — designed and built by Bizdavar (2019–2022). See rinotex.ir and the exhibitions section.' },
      { q: 'What is the relationship between Bizdavar and “Imen Sahand Padideh”?', a: '“Imen Sahand Padideh” was a unit at Tabriz University Science & Technology Park. From 2019–2022 the founder invested personally; all design and production (including BizClean V5) was by the Bizdavar team. Introduced at RINOTEX 1400 via the park unit.' },
      { q: 'How is the Armenia registration structured?', a: 'Bizdavar Group is registered as an LLC in Yerevan — active in SEO, web advertising and digital marketing. Spyur.am profile (57783) is verifiable.' },
      { q: 'Since when has Bizdavar Group operated?', a: 'Founded in 2013 by Ersan Jahed Tabrizi, offering digital, web and industrial services under one integrated brand.' },
      { q: 'In which countries has Bizdavar delivered projects?', a: 'Projects in 11 countries including Turkey, UAE, Germany, USA, UK, Armenia, Lebanon, Iran, Iraq, Georgia and Italy.' },
      { q: 'How is Bizdavar different from typical digital agencies?', a: 'Full digital agency (SEO, ads, SMM) plus technical delivery (WordPress, fintech, AI) and B2B industrial supply — one team for growth and infrastructure.' },
      { q: 'Does Bizdavar only build websites?', a: 'No. Beyond Fast Web Studio, we offer digital marketing, Netinode infrastructure, fintech and VEGA/Prosense industrial supply.' },
      { q: 'How can I verify Bizdavar’s credibility?', a: 'Founder LinkedIn profile, live portfolio, Google certifications and direct contact via info@bizdavar.com.' }
    ]
  };

  function intelLang() {
    const l = window.BIZDAVAR_I18N?.locale || document.documentElement.lang?.slice(0, 2) || 'fa';
    return l === 'tr' || l === 'en' ? l : 'fa';
  }

  function mergeHub(base, overlay) {
    if (!base) return base;
    if (!overlay) return base;
    return { ...base, ...overlay, services: overlay.services || base.services, languages: overlay.languages || base.languages };
  }

  function mergePresence(base, overlay) {
    if (!overlay) return base;
    return {
      ...base,
      ...overlay,
      stats: overlay.stats || base.stats,
      istanbulHub: mergeHub(base.istanbulHub, overlay.istanbulHub),
      yerevanHub: mergeHub(base.yerevanHub, overlay.yerevanHub),
      tabrizHub: mergeHub(base.tabrizHub, overlay.tabrizHub),
      regions: overlay.regions || base.regions
    };
  }

  function mergeVerifiedSources(base, overlay) {
    if (!overlay) return base;
    return base.map((g, gi) => ({
      group: overlay[gi]?.group || g.group,
      items: g.items.map((item, ii) => ({
        ...item,
        ...(overlay[gi]?.items?.[ii] || {})
      }))
    }));
  }

  window.getIntelLocalized = function () {
    const lang = intelLang();
    const base = window.BIZDAVAR_INTEL;
    const labels = LABELS[lang] || LABELS.fa;
    if (!base) return { _labels: labels };
    if (lang === 'fa') return { ...base, _labels: labels };

    const o = lang === 'tr' ? TR : EN;
    return {
      ...base,
      identity: { ...base.identity, ...o.identity },
      leadership: {
        ...base.leadership,
        founder: { ...base.leadership.founder, ...o.leadership.founder }
      },
      activityAreas: o.activityAreas || base.activityAreas,
      ecosystem: o.ecosystem || base.ecosystem,
      presence: mergePresence(base.presence, o.presence),
      exhibitions: mergeById(base.exhibitions, o.exhibitions),
      achievements: mergeById(base.achievements, o.achievements),
      verifiedSources: mergeVerifiedSources(base.verifiedSources, o.verifiedSources),
      socialProof: o.socialProof || base.socialProof,
      faqIntel: o.faqIntel || base.faqIntel,
      _labels: labels
    };
  };
})();
