/**
 * Services page — expanded digital + field-tech copy (fa / tr / en)
 * Merges into BIZDAVAR_LOCALES after locales-pages.js
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const fieldWa = '989364115151';

  const blocks = {
    fa: [
      {
        title: 'بازاریابی دیجیتال',
        subtitle: 'Digital Marketing · استراتژی و اجرای کمپین',
        body: 'استراتژی، اجرا و بهینه‌سازی <strong>بازاریابی دیجیتال</strong> برای رشد فروش آنلاین — از تحلیل بازار و سئو تا <strong>Google Ads</strong>، کمپین‌های اجتماعی، CRO و اتوماسیون. مسیر جذب تا تبدیل را شفاف و قابل اندازه‌گیری می‌کنیم. مطلب مرتبط: <a href="articles/digital-marketing">چگونه دیجیتال مارکتینگ فروش را افزایش می‌دهد؟</a>',
        tags: ['Google Ads', 'سئو', 'CRO', 'اتوماسیون', 'Analytics', 'Funnel'],
        checks: [
          'تحلیل رقبا، بازار هدف و قیف فروش',
          'کمپین‌های Google Ads و شبکه‌های اجتماعی',
          'سئو فنی/محتوایی و ساختار صفحات تبدیل',
          'بهینه‌سازی نرخ تبدیل (CRO) روی لندینگ و فرم',
          'اتوماسیون بازاریابی، ایمیل و nurture',
          'گزارش KPI ماهانه و پیشنهاد بهبود مستمر'
        ],
        cta: 'درخواست مشاوره'
      },
      {
        title: 'طراحی وب و وب‌اپلیکیشن',
        subtitle: 'Website · Web App · Fast Web Studio',
        body: 'طراحی و توسعه <strong>سایت شرکتی</strong>، <strong>فروشگاه</strong>، لندینگ کمپین و <strong>وب‌اپلیکیشن</strong> اختصاصی — با UI فارسی/RTL، سئو پایه و اتصال فرم و واتساپ. برای تحویل سریع از <a href="fast">Fast Web Studio</a> استفاده کنید؛ پروژه‌های سفارشی هم از تحلیل تا لانچ پوشش داده می‌شود. نمونه: <a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a>.',
        tags: ['وب‌سایت', 'وب‌اپ', 'WooCommerce', 'Landing', 'RTL', 'SEO'],
        checks: [
          'سایت شرکتی، فروشگاهی و لندینگ کمپین',
          'وب‌اپلیکیشن و پنل مدیریت اختصاصی',
          'UI ریسپانسیو با فونت و جهت فارسی (RTL)',
          'سئو پایه، ساختار محتوا و بهینه‌سازی سرعت',
          'اتصال واتساپ، فرم تماس و درگاه در صورت نیاز',
          'آموزش مدیریت محتوا و پشتیبانی پس از لانچ'
        ],
        cta: 'مشاهده پلن‌های Fast Studio'
      },
      {
        title: 'اپلیکیشن موبایل و سامانه',
        subtitle: 'Android · iOS · سامانه سازمانی',
        body: 'طراحی و توسعه <strong>اپلیکیشن اندروید و iOS</strong>، سامانه سازمانی، پنل B2B و راهکارهای نرم‌افزاری سفارشی — از تحلیل نیاز تا انتشار، یکپارچه‌سازی و پشتیبانی.',
        tags: ['Android', 'iOS', 'سامانه', 'API'],
        checks: ['اپلیکیشن اندروید و iOS', 'سامانه و پنل سازمانی', 'اتصال به API و درگاه پرداخت', 'UI/UX فارسی و چندزبانه', 'پشتیبانی و به‌روزرسانی'],
        cta: 'درخواست پروژه نرم‌افزاری'
      },
      {
        title: 'مدیریت سرور و زیرساخت',
        subtitle: 'Server · VPS · Linux · Security · Ops',
        body: 'راه‌اندازی، سخت‌سازی و <strong>مدیریت عملیاتی سرور</strong> — از VPS و لینوکس تا وب‌سرور، دیتابیس، DNS، CDN، بکاپ، مانیتورینگ و واکنش به حادثه. زیرساخت پایدار برای سایت، وب‌اپ و سامانه‌های سازمانی شما؛ در صورت نیاز با اکوسیستم <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a>.',
        tags: ['VPS', 'Linux', 'Nginx', 'SSL', 'Backup', 'Monitoring', 'Cloudflare', 'Docker'],
        checks: [
          'راه‌اندازی و سخت‌سازی VPS / سرور اختصاصی',
          'پیکربندی Nginx یا Apache، PHP، Node و دیتابیس',
          'SSL، فایروال، محدودسازی دسترسی و سخت‌گیری SSH',
          'بکاپ زمان‌بندی‌شده با تست بازیابی',
          'مانیتورینگ uptime، منابع و هشدار سریع',
          'مدیریت DNS، دامنه و CDN (Cloudflare)',
          'مهاجرت کنترل‌شده از هاست یا سرور فعلی',
          'بهینه‌سازی عملکرد و پشتیبانی عملیاتی مستمر'
        ],
        cta: 'مشاوره مدیریت سرور'
      },
      {
        title: 'مدیریت شبکه‌های اجتماعی (SMM)',
        subtitle: 'Social Media · محتوا · تبلیغات · رشد',
        body: 'مدیریت حرفه‌ای حضور برند در شبکه‌های اجتماعی — تولید محتوا، طراحی بصری، تقویم انتشار، تعامل با مخاطب و <strong>تبلیغات هدفمند (Paid Social)</strong> در <a href="https://www.instagram.com/bizdavar" target="_blank" rel="noopener noreferrer me">اینستاگرام</a> و <a href="https://www.linkedin.com/in/ersanjt" target="_blank" rel="noopener noreferrer me">لینکدین</a>، با گزارش رشد ماهانه.',
        tags: ['تقویم محتوا', 'کپی‌رایتینگ', 'گرافیک', 'ریلز / ویدیو', 'Paid Social', 'گزارش رشد'],
        checks: [
          'استراتژی محتوا و هویت بصری صفحه',
          'تقویم محتوایی ماهانه (پست، استوری، ریلز)',
          'تولید کپی، گرافیک و ویدیو کوتاه',
          'مدیریت صفحه، پاسخ‌گویی و تعامل',
          'کمپین تبلیغاتی هدفمند (Paid Social)',
          'تحلیل رقبا و بهینه‌سازی محتوا',
          'گزارش رشد، پوشش و نرخ تعامل',
          'هماهنگی با کمپین‌های بازاریابی دیجیتال'
        ],
        cta: 'شروع همکاری SMM'
      },
      {
        title: 'خدمات فنی و ساختمانی',
        subtitle: 'دوربین مدار بسته · سیم‌کشی · نورمخفی',
        body: 'نصب و راه‌اندازی <strong>دوربین مدار بسته</strong>، <strong>سیم‌کشی ساختمان</strong> و <strong>نورمخفی</strong> واحدهای مسکونی و تجاری در <strong>تبریز</strong> و <strong>استانبول</strong> — با هماهنگی <strong>مسئول فنی</strong>.',
        tags: ['CCTV', 'سیم‌کشی', 'نورمخفی', 'تبریز', 'استانبول'],
        checks: [
          'نصب دوربین مدار بسته منزل و محل کار — تبریز و استانبول',
          'سیم‌کشی ساختمانی واحدهای مسکونی و تجاری',
          'نورمخفی داخل واحد و فضای تجاری',
          'بازدید فنی و پیشنهاد طرح اجرا',
          'گارانتی اجرا و پشتیبانی پس از نصب'
        ],
        cta: 'واتساپ خدمات فنی'
      }
    ],
    tr: [
      {
        title: 'Dijital pazarlama',
        subtitle: 'Digital Marketing · Strateji ve kampanya',
        body: 'Online satış büyümesi için <strong>dijital pazarlama</strong> stratejisi, uygulama ve optimizasyon — pazar analizi, SEO, <strong>Google Ads</strong>, sosyal kampanyalar, CRO ve otomasyon. Edinmeden dönüşüme ölçülebilir yol. İlgili yazı: <a href="articles/digital-marketing">Dijital pazarlama satışları nasıl artırır?</a>',
        tags: ['Google Ads', 'SEO', 'CRO', 'Otomasyon', 'Analytics', 'Funnel'],
        checks: [
          'Rakip, hedef kitle ve satış hunisi analizi',
          'Google Ads ve sosyal medya kampanyaları',
          'Teknik/içerik SEO ve dönüşüm sayfaları',
          'Landing ve formlarda CRO',
          'Pazarlama otomasyonu, e-posta ve nurture',
          'Aylık KPI raporu ve iyileştirme önerileri'
        ],
        cta: 'Danışmanlık iste'
      },
      {
        title: 'Web ve web uygulaması',
        subtitle: 'Website · Web App · Fast Web Studio',
        body: '<strong>Kurumsal site</strong>, <strong>e-ticaret</strong>, kampanya landing ve özel <strong>web uygulaması</strong> — Farsça/RTL UI, temel SEO ve form/WhatsApp bağlantısı ile. Hızlı teslim için <a href="fast">Fast Web Studio</a>; özel projeler analizden yayına. Örnek: <a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a>.',
        tags: ['Website', 'Web App', 'WooCommerce', 'Landing', 'RTL', 'SEO'],
        checks: [
          'Kurumsal, mağaza ve kampanya landing siteleri',
          'Web uygulaması ve özel admin paneli',
          'Responsive UI — Farsça/RTL tipografi',
          'Temel SEO, içerik yapısı ve hız optimizasyonu',
          'WhatsApp, iletişim formu ve gerekirse ödeme entegrasyonu',
          'İçerik yönetimi eğitimi ve lansman sonrası destek'
        ],
        cta: 'Fast Studio planları'
      },
      {
        title: 'Mobil uygulama ve sistem',
        subtitle: 'Android · iOS · Kurumsal sistem',
        body: '<strong>Android / iOS</strong> uygulaması, kurumsal sistem, B2B paneller ve özel yazılım çözümleri — ihtiyaç analizinden yayına, entegrasyona ve desteğe kadar.',
        tags: ['Android', 'iOS', 'Sistem', 'API'],
        checks: ['Android ve iOS uygulama', 'Kurumsal sistem / panel', 'API ve ödeme entegrasyonu', 'Çok dilli UI', 'Destek ve güncelleme'],
        cta: 'Yazılım projesi iste'
      },
      {
        title: 'Sunucu ve altyapı yönetimi',
        subtitle: 'Server · VPS · Linux · Security · Ops',
        body: 'Kurulum, sertleştirme ve <strong>operasyonel sunucu yönetimi</strong> — VPS, Linux, web sunucusu, veritabanı, DNS, CDN, yedekleme, monitoring ve olay müdahalesi. Site, web app ve kurumsal sistemler için kararlı altyapı; ihtiyaç halinde <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a> ekosistemi ile.',
        tags: ['VPS', 'Linux', 'Nginx', 'SSL', 'Backup', 'Monitoring', 'Cloudflare', 'Docker'],
        checks: [
          'VPS / dedicated sunucu kurulum ve hardening',
          'Nginx veya Apache, PHP, Node ve veritabanı yapılandırması',
          'SSL, firewall, erişim kısıtlama ve SSH sertleştirme',
          'Zamanlanmış yedek + geri yükleme testi',
          'Uptime, kaynak izleme ve hızlı uyarı',
          'DNS, domain ve CDN (Cloudflare) yönetimi',
          'Mevcut host / sunucudan kontrollü migrasyon',
          'Performans optimizasyonu ve sürekli operasyon desteği'
        ],
        cta: 'Sunucu danışmanlığı'
      },
      {
        title: 'SMM yönetimi',
        subtitle: 'Social Media · İçerik · Reklam · Büyüme',
        body: 'Markanın sosyal medya varlığını profesyonel yönetiyoruz — içerik, görsel tasarım, yayın takvimi, etkileşim ve <strong>hedefli reklam (Paid Social)</strong>; Instagram ve LinkedIn’de aylık büyüme raporu ile.',
        tags: ['İçerik takvimi', 'Copywriting', 'Grafik', 'Reels / Video', 'Paid Social', 'Büyüme raporu'],
        checks: [
          'İçerik stratejisi ve görsel kimlik',
          'Aylık içerik takvimi (post, story, reels)',
          'Copy, grafik ve kısa video üretimi',
          'Sayfa yönetimi, yanıt ve etkileşim',
          'Hedefli reklam kampanyaları (Paid Social)',
          'Rakip analizi ve içerik optimizasyonu',
          'Büyüme, erişim ve etkileşim raporu',
          'Dijital pazarlama kampanyaları ile uyum'
        ],
        cta: 'SMM iş birliği'
      },
      {
        title: 'Teknik ve bina hizmetleri',
        subtitle: 'CCTV · Tesisat · Gizli aydınlatma',
        body: '<strong>Güvenlik kamerası</strong>, <strong>bina tesisatı</strong> ve <strong>gizli aydınlatma</strong> — <strong>Tebriz</strong> ve <strong>İstanbul</strong>. Teknik sorumlu ile koordinasyon.',
        tags: ['CCTV', 'Tesisat', 'Aydınlatma', 'Tebriz', 'İstanbul'],
        checks: [
          'CCTV kurulum — konut ve işyeri',
          'Bina elektrik tesisatı',
          'Gizli aydınlatma (konut / ticari)',
          'Teknik keşif ve uygulama planı',
          'Kurulum sonrası destek'
        ],
        cta: 'Teknik WhatsApp'
      }
    ],
    en: [
      {
        title: 'Digital marketing',
        subtitle: 'Strategy and campaign delivery',
        body: 'Strategy, execution and optimization for <strong>digital marketing</strong> that grows online sales — market analysis, SEO, <strong>Google Ads</strong>, social campaigns, CRO and automation. A measurable path from acquisition to conversion. Related: <a href="articles/digital-marketing">How digital marketing increases sales</a>.',
        tags: ['Google Ads', 'SEO', 'CRO', 'Automation', 'Analytics', 'Funnel'],
        checks: [
          'Competitor, audience and funnel analysis',
          'Google Ads and social media campaigns',
          'Technical/content SEO and conversion pages',
          'CRO on landings and forms',
          'Marketing automation, email and nurture',
          'Monthly KPI reporting and continuous improvement'
        ],
        cta: 'Request consulting'
      },
      {
        title: 'Web design & web apps',
        subtitle: 'Website · Web App · Fast Web Studio',
        body: 'Corporate sites, stores, campaign landings and custom <strong>web applications</strong> — Persian/RTL UI, foundational SEO, forms and WhatsApp. Fast delivery via <a href="fast">Fast Web Studio</a>, or bespoke builds from discovery to launch. Example: <a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a>.',
        tags: ['Website', 'Web App', 'WooCommerce', 'Landing', 'RTL', 'SEO'],
        checks: [
          'Corporate, store and campaign landing sites',
          'Web apps and custom admin panels',
          'Responsive UI with Persian/RTL typography',
          'Foundational SEO, content structure and speed',
          'WhatsApp, contact forms and payment when needed',
          'CMS training and post-launch support'
        ],
        cta: 'View Fast Studio plans'
      },
      {
        title: 'Mobile apps & systems',
        subtitle: 'Android · iOS · Business systems',
        body: 'Design and build <strong>Android and iOS</strong> apps, enterprise systems, B2B panels and custom software — from requirements through release, integration and support.',
        tags: ['Android', 'iOS', 'Systems', 'API'],
        checks: ['Android and iOS apps', 'Business systems and panels', 'API and payment integrations', 'Multilingual UI', 'Support and updates'],
        cta: 'Request a software project'
      },
      {
        title: 'Server & infrastructure management',
        subtitle: 'Server · VPS · Linux · Security · Ops',
        body: 'Provisioning, hardening and ongoing <strong>server operations</strong> — VPS, Linux, web stack, databases, DNS, CDN, backups, monitoring and incident response. Stable infrastructure for sites, web apps and business systems; with <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a> when needed.',
        tags: ['VPS', 'Linux', 'Nginx', 'SSL', 'Backup', 'Monitoring', 'Cloudflare', 'Docker'],
        checks: [
          'VPS / dedicated setup and hardening',
          'Nginx or Apache, PHP, Node and database configuration',
          'SSL, firewall, access control and SSH hardening',
          'Scheduled backups with restore testing',
          'Uptime and resource monitoring with alerts',
          'DNS, domain and CDN (Cloudflare) management',
          'Controlled migration from your current host or server',
          'Performance tuning and ongoing ops support'
        ],
        cta: 'Server consulting'
      },
      {
        title: 'SMM management',
        subtitle: 'Social Media · Content · Ads · Growth',
        body: 'Professional social presence — content production, visual design, publishing calendar, community engagement and <strong>Paid Social</strong> on Instagram and LinkedIn, with monthly growth reporting.',
        tags: ['Content calendar', 'Copywriting', 'Design', 'Reels / Video', 'Paid Social', 'Growth report'],
        checks: [
          'Content strategy and visual identity',
          'Monthly calendar (posts, stories, reels)',
          'Copy, graphics and short-form video',
          'Page management, replies and engagement',
          'Targeted Paid Social campaigns',
          'Competitor analysis and content optimization',
          'Reach, growth and engagement reporting',
          'Alignment with digital marketing campaigns'
        ],
        cta: 'Start SMM collaboration'
      },
      {
        title: 'Technical & building services',
        subtitle: 'CCTV · Wiring · Cove lighting',
        body: '<strong>CCTV installation</strong>, <strong>building wiring</strong> and <strong>cove lighting</strong> for homes and commercial units in <strong>Tabriz</strong> and <strong>Istanbul</strong> — coordinated with the <strong>technical lead</strong>.',
        tags: ['CCTV', 'Wiring', 'Lighting', 'Tabriz', 'Istanbul'],
        checks: [
          'CCTV for homes and workplaces',
          'Residential and commercial wiring',
          'Cove lighting indoors',
          'Site survey and execution plan',
          'Post-install support'
        ],
        cta: 'Technical WhatsApp'
      }
    ]
  };

  const cards = {
    fa: [
      { title: 'بازاریابی دیجیتال', desc: 'استراتژی، کمپین، سئو و CRO برای رشد فروش آنلاین.' },
      { title: 'وب و وب‌اپلیکیشن', desc: 'سایت، فروشگاه و وب‌اپ اختصاصی — Fast Studio یا سفارشی.' },
      { title: 'اپ و سامانه', desc: 'اندروید، iOS و سامانه‌های سازمانی.' },
      { title: 'مدیریت سرور', desc: 'VPS، امنیت، بکاپ، مانیتورینگ، DNS و مهاجرت.' },
      { title: 'مدیریت SMM', desc: 'محتوا، گرافیک، ریلز، تبلیغات و گزارش رشد.' },
      { title: 'خدمات فنی', desc: 'دوربین مدار بسته، سیم‌کشی و نورمخفی — تبریز و استانبول.' }
    ],
    tr: [
      { title: 'Dijital pazarlama', desc: 'Strateji, kampanya, SEO ve CRO.' },
      { title: 'Web ve web app', desc: 'Site, mağaza ve özel web uygulaması.' },
      { title: 'Uygulama ve sistem', desc: 'Android, iOS ve kurumsal sistemler.' },
      { title: 'Sunucu yönetimi', desc: 'VPS, güvenlik, yedek, monitoring, DNS ve migrasyon.' },
      { title: 'SMM yönetimi', desc: 'İçerik, grafik, reels, reklam ve büyüme raporu.' },
      { title: 'Teknik hizmetler', desc: 'CCTV, tesisat ve gizli aydınlatma — Tebriz & İstanbul.' }
    ],
    en: [
      { title: 'Digital marketing', desc: 'Strategy, campaigns, SEO and CRO.' },
      { title: 'Web & web apps', desc: 'Sites, stores and custom web applications.' },
      { title: 'Apps & systems', desc: 'Android, iOS and business systems.' },
      { title: 'Server management', desc: 'VPS, security, backups, monitoring, DNS and migration.' },
      { title: 'SMM management', desc: 'Content, design, reels, ads and growth reporting.' },
      { title: 'Technical services', desc: 'CCTV, wiring and cove lighting — Tabriz & Istanbul.' }
    ]
  };

  const digitalMarketing = {
    fa: {
      servicesTitle: 'در بازاریابی دیجیتال چه می‌کنیم؟',
      processNote: 'از تحلیل بازار تا کمپین، CRO و گزارش ماهانه — مسیر رشد قابل اندازه‌گیری.',
      ctaArticle: 'مقاله دیجیتال مارکتینگ',
      packagesTitle: 'خروجی‌های همکاری',
      packages: [
        'نقشه کانال و قیف فروش',
        'راه‌اندازی و بهینه‌سازی کمپین',
        'آزمایش CRO روی صفحات کلیدی',
        'گزارش KPI ماهانه'
      ],
      panels: [
        { title: 'Ads', desc: 'Google و شبکه‌های اجتماعی' },
        { title: 'SEO', desc: 'سئو و محتوای هدفمند' },
        { title: 'CRO', desc: 'بهینه‌سازی نرخ تبدیل' },
        { title: 'Email', desc: 'اتوماسیون و ایمیل' },
        { title: 'Analytics', desc: 'گزارش و KPI' },
        { title: 'Funnel', desc: 'مسیر جذب تا خرید' }
      ],
      faqEyebrow: 'دیجیتال مارکتینگ',
      faqTitle: 'سوالات پرتکرار بازاریابی دیجیتال',
      faq: [
        {
          q: 'بازاریابی دیجیتال بیزدوار چه کانال‌هایی را پوشش می‌دهد؟',
          a: 'Google Ads، سئو، کمپین‌های شبکه‌های اجتماعی، CRO روی لندینگ و فرم، اتوماسیون ایمیل و گزارش عملکرد — بسته به هدف فروش شما ترکیب می‌شود.'
        },
        {
          q: 'از کجا شروع می‌کنید؟',
          a: 'با تحلیل بازار، رقبا و قیف فعلی شروع می‌کنیم؛ بعد کانال‌ها و بودجه را اولویت‌بندی و کمپین یا بهینه‌سازی را اجرا می‌کنیم.'
        },
        {
          q: 'نتیجه را چطور می‌سنجید؟',
          a: 'با KPIهای شفاف مثل هزینه جذب، نرخ تبدیل، کیفیت لید و درآمد نسبت به هزینه تبلیغ — در گزارش ماهانه.'
        },
        {
          q: 'با SMM یا طراحی وب هم هماهنگ می‌شود؟',
          a: 'بله. کمپین‌ها با محتوای شبکه‌های اجتماعی و صفحات وب/لندینگ هم‌راستا می‌شوند تا پیام و تبدیل یکدست باشد.'
        }
      ]
    },
    tr: {
      servicesTitle: 'Dijital pazarda neler yapıyoruz?',
      processNote: 'Pazar analizinden kampanyaya, CRO ve aylık rapora — ölçülebilir büyüme yolu.',
      ctaArticle: 'Dijital pazarlama yazısı',
      packagesTitle: 'İş birliği çıktıları',
      packages: [
        'Kanal ve huni haritası',
        'Kampanya kurulum ve optimizasyon',
        'Kritik sayfalarda CRO testleri',
        'Aylık KPI raporu'
      ],
      panels: [
        { title: 'Ads', desc: 'Google ve sosyal ağlar' },
        { title: 'SEO', desc: 'SEO ve odaklı içerik' },
        { title: 'CRO', desc: 'Dönüşüm optimizasyonu' },
        { title: 'Email', desc: 'Otomasyon ve e-posta' },
        { title: 'Analytics', desc: 'Rapor ve KPI' },
        { title: 'Funnel', desc: 'Edinimden satışa yol' }
      ],
      faqEyebrow: 'Dijital pazarlama',
      faqTitle: 'Dijital pazarlama SSS',
      faq: [
        {
          q: 'Hangi kanalları kapsıyorsunuz?',
          a: 'Google Ads, SEO, sosyal kampanyalar, landing/form CRO, e-posta otomasyonu ve performans raporu — satış hedefine göre birleştirilir.'
        },
        {
          q: 'Nasıl başlıyorsunuz?',
          a: 'Pazar, rakip ve mevcut huni analiziyle; ardından kanal/bütçe önceliği ve kampanya veya optimizasyon.'
        },
        {
          q: 'Sonucu nasıl ölçüyorsunuz?',
          a: 'CAC, dönüşüm oranı, lead kalitesi ve reklam maliyetine göre gelir gibi KPI’larla — aylık raporda.'
        },
        {
          q: 'SMM veya web tasarımla uyumlu mu?',
          a: 'Evet. Kampanyalar sosyal içerik ve web/landing sayfalarıyla aynı mesaj ve dönüşüm hedefinde hizalanır.'
        }
      ]
    },
    en: {
      servicesTitle: 'What we do in digital marketing',
      processNote: 'From market analysis to campaigns, CRO and monthly reporting — a measurable growth path.',
      ctaArticle: 'Digital marketing article',
      packagesTitle: 'Engagement outputs',
      packages: [
        'Channel and funnel map',
        'Campaign setup and optimization',
        'CRO tests on key pages',
        'Monthly KPI report'
      ],
      panels: [
        { title: 'Ads', desc: 'Google and social networks' },
        { title: 'SEO', desc: 'SEO and targeted content' },
        { title: 'CRO', desc: 'Conversion rate optimization' },
        { title: 'Email', desc: 'Automation and email' },
        { title: 'Analytics', desc: 'Reporting and KPIs' },
        { title: 'Funnel', desc: 'Acquisition to purchase' }
      ],
      faqEyebrow: 'Digital marketing',
      faqTitle: 'Digital marketing FAQ',
      faq: [
        {
          q: 'Which channels does Bizdavar cover?',
          a: 'Google Ads, SEO, social campaigns, landing/form CRO, email automation and performance reporting — combined around your sales goal.'
        },
        {
          q: 'How do you start?',
          a: 'With market, competitor and current funnel analysis; then we prioritize channels and budget and run campaigns or optimizations.'
        },
        {
          q: 'How do you measure results?',
          a: 'With clear KPIs such as acquisition cost, conversion rate, lead quality and revenue vs ad spend — in a monthly report.'
        },
        {
          q: 'Does it align with SMM or web design?',
          a: 'Yes. Campaigns stay aligned with social content and web/landing pages so message and conversion stay consistent.'
        }
      ]
    }
  };

  const webDesign = {
    fa: {
      servicesTitle: 'چه می‌سازیم؟',
      processNote: 'از لندینگ سریع تا وب‌اپ سفارشی — UI فارسی/RTL، سئو پایه و اتصال فرم و واتساپ.',
      ctaCustom: 'پروژه سفارشی وب',
      packagesTitle: 'خروجی‌های تحویل',
      packages: [
        'طراحی UI/UX و هویت صفحه',
        'پیاده‌سازی ریسپانسیو RTL',
        'سئو پایه و سرعت',
        'آموزش و پشتیبانی لانچ'
      ],
      panels: [
        { title: 'Corporate', desc: 'سایت شرکتی' },
        { title: 'Store', desc: 'فروشگاه ووکامرس' },
        { title: 'Web App', desc: 'پنل و سامانه وب' },
        { title: 'Landing', desc: 'لندینگ کمپین' },
        { title: 'RTL / FA', desc: 'فونت و UI فارسی' },
        { title: 'Fast', desc: 'تحویل از $99' }
      ],
      faqEyebrow: 'طراحی وب',
      faqTitle: 'سوالات پرتکرار طراحی وب',
      faq: [
        {
          q: 'تفاوت Fast Web Studio با پروژه سفارشی چیست؟',
          a: 'Fast Studio برای سایت شرکتی/لندینگ با پلن‌های آماده و تحویل سریع است (از حدود $99). پروژه سفارشی برای وب‌اپ، پنل، فروشگاه پیچیده یا نیازمندی‌های خاص از تحلیل تا لانچ تعریف می‌شود.'
        },
        {
          q: 'سایت فارسی و RTL هم طراحی می‌کنید؟',
          a: 'بله. رابط کاربری راست‌به‌چپ، فونت فارسی و ساختار محتوا برای مخاطب فارسی‌زبان بخش استاندارد پروژه‌های وب بیزدوار است.'
        },
        {
          q: 'فروشگاه ووکامرس و درگاه پرداخت هم دارید؟',
          a: 'بله. فروشگاه WooCommerce، کاتالوگ محصول، سبد خرید و اتصال درگاه در پروژه‌های فروشگاهی پوشش داده می‌شود.'
        },
        {
          q: 'بعد از لانچ چه پشتیبانی می‌دهید؟',
          a: 'آموزش مدیریت محتوا، رفع باگ اولیه و در صورت قرارداد، نگهداری، به‌روزرسانی و بهبود سئو/سرعت ادامه پیدا می‌کند.'
        }
      ]
    },
    tr: {
      servicesTitle: 'Ne inşa ediyoruz?',
      processNote: 'Hızlı landing’den özel web app’e — Farsça/RTL UI, temel SEO, form ve WhatsApp.',
      ctaCustom: 'Özel web projesi',
      packagesTitle: 'Teslim çıktıları',
      packages: [
        'UI/UX ve sayfa kimliği',
        'Responsive RTL geliştirme',
        'Temel SEO ve hız',
        'Eğitim ve lansman desteği'
      ],
      panels: [
        { title: 'Corporate', desc: 'Kurumsal site' },
        { title: 'Store', desc: 'WooCommerce mağaza' },
        { title: 'Web App', desc: 'Panel ve web sistemi' },
        { title: 'Landing', desc: 'Kampanya landing' },
        { title: 'RTL / FA', desc: 'Farsça UI' },
        { title: 'Fast', desc: '$99’dan teslim' }
      ],
      faqEyebrow: 'Web tasarım',
      faqTitle: 'Web tasarım SSS',
      faq: [
        {
          q: 'Fast Web Studio ile özel proje farkı nedir?',
          a: 'Fast Studio hazır planlarla hızlı kurumsal/landing teslimidir (yaklaşık $99’dan). Özel proje web app, panel veya karmaşık mağaza ihtiyaçları içindir.'
        },
        {
          q: 'Farsça / RTL site yapıyor musunuz?',
          a: 'Evet. Sağdan sola arayüz, Farsça tipografi ve içerik yapısı standart kapsamımızdadır.'
        },
        {
          q: 'WooCommerce ve ödeme entegrasyonu var mı?',
          a: 'Evet. Ürün kataloğu, sepet ve ödeme geçidi e-ticaret projelerinde sunulur.'
        },
        {
          q: 'Lansman sonrası destek nedir?',
          a: 'İçerik yönetimi eğitimi, ilk hata düzeltmeleri ve sözleşmeye göre bakım / SEO-hız iyileştirmesi devam eder.'
        }
      ]
    },
    en: {
      servicesTitle: 'What we build',
      processNote: 'From fast landings to custom web apps — Persian/RTL UI, foundational SEO, forms and WhatsApp.',
      ctaCustom: 'Custom web project',
      packagesTitle: 'Delivery outputs',
      packages: [
        'UI/UX and page identity',
        'Responsive RTL implementation',
        'Foundational SEO and speed',
        'Training and launch support'
      ],
      panels: [
        { title: 'Corporate', desc: 'Company websites' },
        { title: 'Store', desc: 'WooCommerce stores' },
        { title: 'Web App', desc: 'Panels & web systems' },
        { title: 'Landing', desc: 'Campaign landings' },
        { title: 'RTL / FA', desc: 'Persian UI' },
        { title: 'Fast', desc: 'From $99 delivery' }
      ],
      faqEyebrow: 'Web design',
      faqTitle: 'Web design FAQ',
      faq: [
        {
          q: 'What’s the difference between Fast Web Studio and a custom project?',
          a: 'Fast Studio is packaged, fast corporate/landing delivery (from about $99). Custom projects cover web apps, panels or complex stores from discovery to launch.'
        },
        {
          q: 'Do you build Persian / RTL sites?',
          a: 'Yes. Right-to-left UI, Persian typography and content structure are standard in Bizdavar web projects.'
        },
        {
          q: 'Do you offer WooCommerce and payment gateways?',
          a: 'Yes. Product catalogs, carts and payment integrations are included in store projects.'
        },
        {
          q: 'What support do you provide after launch?',
          a: 'CMS training, early bug fixes and, under agreement, ongoing maintenance plus SEO/speed improvements.'
        }
      ]
    }
  };

  const smm = {
    fa: {
      servicesTitle: 'در مدیریت شبکه‌های اجتماعی چه می‌کنیم؟',
      platformsTitle: 'پلتفرم‌ها',
      platforms: [
        { title: 'Instagram', desc: 'پست، استوری، ریلز و تبلیغات' },
        { title: 'LinkedIn', desc: 'محتوای B2B و برندینگ حرفه‌ای' },
        { title: 'Content', desc: 'تقویم، کپی و هویت بصری' },
        { title: 'Paid Ads', desc: 'کمپین هدفمند و بهینه‌سازی' },
        { title: 'Community', desc: 'تعامل و پاسخ‌گویی' },
        { title: 'Analytics', desc: 'گزارش رشد و عملکرد' }
      ],
      packagesTitle: 'خروجی‌های ماهانه',
      packages: [
        'تقویم محتوا و موضوعات',
        'پست و استوری طراحی‌شده',
        'ریلز / ویدیو کوتاه',
        'گزارش ماهانه رشد'
      ],
      faqTitle: 'سوالات پرتکرار SMM',
      faqEyebrow: 'شبکه‌های اجتماعی',
      faq: [
        {
          q: 'مدیریت SMM شامل چه کارهایی است؟',
          a: 'استراتژی محتوا، تقویم انتشار، تولید کپی و گرافیک، ریلز/ویدیو کوتاه، مدیریت صفحه و تعامل، تبلیغات هدفمند و گزارش رشد ماهانه.'
        },
        {
          q: 'روی کدام پلتفرم‌ها کار می‌کنید؟',
          a: 'تمرکز اصلی روی اینستاگرام و لینکدین است؛ در صورت نیاز، گسترش به سایر شبکه‌ها هم قابل برنامه‌ریزی است.'
        },
        {
          q: 'تبلیغات پولی (Paid Social) هم انجام می‌دهید؟',
          a: 'بله. طراحی، اجرا و بهینه‌سازی کمپین‌های تبلیغاتی هدفمند همراه با رصد بودجه و گزارش عملکرد ارائه می‌شود.'
        },
        {
          q: 'چطور پیشرفت را می‌بینم؟',
          a: 'هر ماه گزارش پوشش، رشد دنبال‌کننده، نرخ تعامل و نتایج کمپین‌ها در اختیارتان قرار می‌گیرد تا مسیر شفاف باشد.'
        }
      ]
    },
    tr: {
      servicesTitle: 'SMM’de neler yapıyoruz?',
      platformsTitle: 'Platformlar',
      platforms: [
        { title: 'Instagram', desc: 'Post, story, reels ve reklam' },
        { title: 'LinkedIn', desc: 'B2B içerik ve kurumsal marka' },
        { title: 'Content', desc: 'Takvim, copy ve görsel kimlik' },
        { title: 'Paid Ads', desc: 'Hedefli kampanya ve optimizasyon' },
        { title: 'Community', desc: 'Etkileşim ve yanıt yönetimi' },
        { title: 'Analytics', desc: 'Büyüme ve performans raporu' }
      ],
      packagesTitle: 'Aylık çıktılar',
      packages: [
        'İçerik takvimi ve konular',
        'Tasarlanmış post ve story',
        'Reels / kısa video',
        'Aylık büyüme raporu'
      ],
      faqTitle: 'SMM SSS',
      faqEyebrow: 'Sosyal medya',
      faq: [
        {
          q: 'SMM yönetimi neleri kapsar?',
          a: 'İçerik stratejisi, yayın takvimi, copy/grafik, reels, sayfa yönetimi, hedefli reklam ve aylık büyüme raporu.'
        },
        {
          q: 'Hangi platformlarda çalışıyorsunuz?',
          a: 'Ana odak Instagram ve LinkedIn; ihtiyaç halinde diğer ağlar da planlanabilir.'
        },
        {
          q: 'Paid Social da yapıyor musunuz?',
          a: 'Evet. Hedefli reklam kampanyalarının tasarımı, yönetimi ve bütçe/performans raporlaması sunulur.'
        },
        {
          q: 'İlerlemeyi nasıl görürüm?',
          a: 'Her ay erişim, takipçi büyümesi, etkileşim ve kampanya sonuçlarını içeren rapor paylaşılır.'
        }
      ]
    },
    en: {
      servicesTitle: 'What we deliver in SMM',
      platformsTitle: 'Platforms',
      platforms: [
        { title: 'Instagram', desc: 'Posts, stories, reels and ads' },
        { title: 'LinkedIn', desc: 'B2B content and brand presence' },
        { title: 'Content', desc: 'Calendar, copy and visual identity' },
        { title: 'Paid Ads', desc: 'Targeted campaigns and optimization' },
        { title: 'Community', desc: 'Engagement and reply handling' },
        { title: 'Analytics', desc: 'Growth and performance reports' }
      ],
      packagesTitle: 'Monthly deliverables',
      packages: [
        'Content calendar and themes',
        'Designed posts and stories',
        'Reels / short video',
        'Monthly growth report'
      ],
      faqTitle: 'SMM FAQ',
      faqEyebrow: 'Social media',
      faq: [
        {
          q: 'What does SMM management include?',
          a: 'Content strategy, publishing calendar, copy and design, reels, page management, Paid Social and monthly growth reporting.'
        },
        {
          q: 'Which platforms do you cover?',
          a: 'Primary focus is Instagram and LinkedIn; other networks can be planned when needed.'
        },
        {
          q: 'Do you run Paid Social?',
          a: 'Yes. We design, manage and optimize targeted ad campaigns with budget tracking and performance reports.'
        },
        {
          q: 'How do I track progress?',
          a: 'Each month you receive a report covering reach, follower growth, engagement and campaign results.'
        }
      ]
    }
  };

  const serverOps = {
    fa: {
      servicesTitle: 'چه خدماتی در زیرساخت پوشش می‌دهیم؟',
      stackTitle: 'استک و ابزارهای رایج',
      stack: ['Ubuntu', 'Debian', 'Nginx', 'MySQL / MariaDB', 'Redis', 'Cloudflare', 'Docker', 'Git'],
      panels: [
        { title: 'VPS', desc: 'راه‌اندازی و سخت‌سازی' },
        { title: 'Security', desc: 'SSL، فایروال و دسترسی' },
        { title: 'Backup', desc: 'بکاپ و تست بازیابی' },
        { title: 'Monitor', desc: 'uptime و هشدار' },
        { title: 'DNS / CDN', desc: 'دامنه و Cloudflare' },
        { title: 'Migrate', desc: 'انتقال بدون قطعی' }
      ],
      faqTitle: 'سوالات پرتکرار مدیریت سرور',
      faqEyebrow: 'زیرساخت و Ops',
      faq: [
        {
          q: 'مدیریت سرور شامل چه مواردی است؟',
          a: 'راه‌اندازی و سخت‌سازی VPS، پیکربندی وب‌سرور و دیتابیس، SSL و فایروال، بکاپ زمان‌بندی‌شده، مانیتورینگ، مدیریت DNS/CDN، مهاجرت و پشتیبانی عملیاتی مستمر.'
        },
        {
          q: 'بکاپ و بازیابی چگونه انجام می‌شود؟',
          a: 'بکاپ‌های زمان‌بندی‌شده از فایل‌ها و دیتابیس تعریف می‌شود و در بازه‌های مشخص تست بازیابی انجام می‌گیرد تا در زمان حادثه، بازگردانی قابل اتکا باشد.'
        },
        {
          q: 'از هاست یا سرور فعلی می‌توانید مهاجرت کنید؟',
          a: 'بله. مهاجرت کنترل‌شده با چک‌لیست DNS، SSL، دیتابیس و تست نهایی انجام می‌شود تا قطعی سرویس به حداقل برسد.'
        },
        {
          q: 'آیا پشتیبانی بعد از راه‌اندازی هم دارید؟',
          a: 'بله. علاوه بر راه‌اندازی اولیه، پایش، بهینه‌سازی عملکرد، به‌روزرسانی امنیتی و واکنش به حوادث در قالب پشتیبانی عملیاتی ارائه می‌شود.'
        }
      ]
    },
    tr: {
      servicesTitle: 'Altyapıda neleri kapsıyoruz?',
      stackTitle: 'Yaygın stack ve araçlar',
      stack: ['Ubuntu', 'Debian', 'Nginx', 'MySQL / MariaDB', 'Redis', 'Cloudflare', 'Docker', 'Git'],
      panels: [
        { title: 'VPS', desc: 'Kurulum ve hardening' },
        { title: 'Security', desc: 'SSL, firewall, erişim' },
        { title: 'Backup', desc: 'Yedek ve geri yükleme' },
        { title: 'Monitor', desc: 'Uptime ve uyarı' },
        { title: 'DNS / CDN', desc: 'Domain ve Cloudflare' },
        { title: 'Migrate', desc: 'Kontrollü geçiş' }
      ],
      faqTitle: 'Sunucu yönetimi SSS',
      faqEyebrow: 'Altyapı ve Ops',
      faq: [
        {
          q: 'Sunucu yönetimi neleri kapsar?',
          a: 'VPS kurulum/hardening, web sunucusu ve veritabanı, SSL/firewall, zamanlanmış yedek, monitoring, DNS/CDN, migrasyon ve sürekli operasyon desteği.'
        },
        {
          q: 'Yedekleme ve geri yükleme nasıl işler?',
          a: 'Dosya ve veritabanı için zamanlanmış yedekler alınır; belirli aralıklarla restore testi yapılır.'
        },
        {
          q: 'Mevcut hosttan geçiş yapabilir misiniz?',
          a: 'Evet. DNS, SSL, veritabanı ve final test checklist’i ile kontrollü migrasyon yapılır.'
        },
        {
          q: 'Kurulum sonrası destek var mı?',
          a: 'Evet. İzleme, performans iyileştirme, güvenlik güncellemeleri ve olay müdahalesi operasyon desteği kapsamında sunulur.'
        }
      ]
    },
    en: {
      servicesTitle: 'What does infrastructure cover?',
      stackTitle: 'Common stack & tools',
      stack: ['Ubuntu', 'Debian', 'Nginx', 'MySQL / MariaDB', 'Redis', 'Cloudflare', 'Docker', 'Git'],
      panels: [
        { title: 'VPS', desc: 'Setup and hardening' },
        { title: 'Security', desc: 'SSL, firewall, access' },
        { title: 'Backup', desc: 'Backups and restore tests' },
        { title: 'Monitor', desc: 'Uptime and alerts' },
        { title: 'DNS / CDN', desc: 'Domain and Cloudflare' },
        { title: 'Migrate', desc: 'Controlled cutover' }
      ],
      faqTitle: 'Server management FAQ',
      faqEyebrow: 'Infrastructure & Ops',
      faq: [
        {
          q: 'What does server management include?',
          a: 'VPS provisioning and hardening, web stack and databases, SSL and firewalls, scheduled backups, monitoring, DNS/CDN, migrations and ongoing ops support.'
        },
        {
          q: 'How do backups and restores work?',
          a: 'Scheduled file and database backups are configured, with periodic restore tests so recovery is reliable when incidents happen.'
        },
        {
          q: 'Can you migrate from our current host?',
          a: 'Yes. Controlled migrations follow a DNS, SSL, database and final-test checklist to keep downtime minimal.'
        },
        {
          q: 'Do you support us after go-live?',
          a: 'Yes. Monitoring, performance tuning, security updates and incident response are part of ongoing operations support.'
        }
      ]
    }
  };

  const fieldTech = {
    fa: {
      eyebrow: 'خدمات فنی میدانی',
      title: 'دوربین مدار بسته، سیم‌کشی و نورمخفی',
      desc: 'اجرای تخصصی در تبریز و استانبول — بازدید، پیشنهاد طرح و نصب.',
      leadLabel: 'مسئول فنی',
      leadName: 'مسئول فنی',
      leadRole: 'مسئول فنی و اجرایی خدمات ساختمانی و امنیتی',
      citiesLabel: 'شهرهای هدف',
      cities: 'تبریز · استانبول',
      phoneLabel: 'شماره مستقیم',
      waCta: 'واتساپ خدمات فنی',
      callCta: 'تماس تلفنی',
      waHint: '+98 936 411 5151',
      servicesTitle: 'چه خدماتی ارائه می‌دهیم؟',
      processNote: 'بازدید فنی، پیشنهاد طرح و زمان‌بندی اجرا — هماهنگی مستقیم با مسئول فنی.',
      faqTitle: 'سوالات پرتکرار خدمات فنی',
      panel: [
        { title: 'CCTV', desc: 'دوربین مدار بسته' },
        { title: 'Wiring', desc: 'سیم‌کشی ساختمان' },
        { title: 'Lighting', desc: 'نورمخفی داخلی' },
        { title: 'Survey', desc: 'بازدید و طرح اجرا' },
        { title: 'Cities', desc: 'تبریز و استانبول' },
        { title: 'Support', desc: 'گارانتی پس از نصب' }
      ],
      faq: [
        {
          q: 'نصب دوربین مدار بسته در تبریز و استانبول انجام می‌دهید؟',
          a: 'بله. نصب و راه‌اندازی دوربین مدار بسته برای واحدهای مسکونی و تجاری در تبریز و استانبول توسط تیم فنی بیزدوار و با هماهنگی مسئول فنی انجام می‌شود.'
        },
        {
          q: 'نورمخفی داخل واحد مسکونی یا تجاری هم کار می‌کنید؟',
          a: 'بله. طراحی و اجرای نورمخفی داخل واحدهای مسکونی و فضاهای تجاری، همراه با سیم‌کشی استاندارد ساختمانی ارائه می‌شود.'
        },
        {
          q: 'چطور با مسئول فنی هماهنگ کنم؟',
          a: 'مستقیم در واتساپ با شماره +98 936 411 5151 پیام بدهید یا از دکمه «واتساپ خدمات فنی» در همین صفحه استفاده کنید.'
        }
      ]
    },
    tr: {
      eyebrow: 'Saha teknik hizmetleri',
      title: 'CCTV, tesisat ve gizli aydınlatma',
      desc: 'Tebriz ve İstanbul’da keşif, plan ve kurulum.',
      leadLabel: 'Teknik sorumlu',
      leadName: 'Teknik sorumlu',
      leadRole: 'Teknik ve uygulama sorumlusu — CCTV, tesisat, aydınlatma',
      citiesLabel: 'Hedef şehirler',
      cities: 'Tebriz · İstanbul',
      phoneLabel: 'Direkt numara',
      waCta: 'Teknik WhatsApp',
      callCta: 'Telefon',
      waHint: '+98 936 411 5151',
      servicesTitle: 'Hangi hizmetleri veriyoruz?',
      processNote: 'Teknik keşif, uygulama planı ve kurulum takvimi — doğrudan teknik sorumluya yazın.',
      faqTitle: 'Teknik hizmet SSS',
      panel: [
        { title: 'CCTV', desc: 'Güvenlik kamerası' },
        { title: 'Wiring', desc: 'Bina tesisatı' },
        { title: 'Lighting', desc: 'Gizli aydınlatma' },
        { title: 'Survey', desc: 'Keşif ve plan' },
        { title: 'Cities', desc: 'Tebriz ve İstanbul' },
        { title: 'Support', desc: 'Kurulum sonrası destek' }
      ],
      faq: [
        {
          q: 'Tebriz ve İstanbul’da kamera kurulumu var mı?',
          a: 'Evet. Konut ve ticari birimlerde CCTV kurulumu Bizdavar teknik ekibi ve teknik sorumlu koordinasyonunda yapılır.'
        },
        {
          q: 'Gizli aydınlatma da yapıyor musunuz?',
          a: 'Evet. Konut ve ticari alanlarda gizli aydınlatma ile standart bina tesisatı birlikte planlanır.'
        },
        {
          q: 'Teknik sorumluya nasıl ulaşırım?',
          a: '+98 936 411 5151 WhatsApp hattından veya bu sayfadaki Teknik WhatsApp düğmesinden yazabilirsiniz.'
        }
      ]
    },
    en: {
      eyebrow: 'On-site technical services',
      title: 'CCTV, wiring and cove lighting',
      desc: 'Survey, plan and install in Tabriz and Istanbul.',
      leadLabel: 'Technical lead',
      leadName: 'Technical lead',
      leadRole: 'Technical lead — CCTV, building wiring and cove lighting',
      citiesLabel: 'Focus cities',
      cities: 'Tabriz · Istanbul',
      phoneLabel: 'Direct line',
      waCta: 'Technical WhatsApp',
      callCta: 'Call',
      waHint: '+98 936 411 5151',
      servicesTitle: 'What we deliver',
      processNote: 'Site survey, execution plan and install schedule — coordinate directly with the technical lead.',
      faqTitle: 'Technical services FAQ',
      panel: [
        { title: 'CCTV', desc: 'Security cameras' },
        { title: 'Wiring', desc: 'Building wiring' },
        { title: 'Lighting', desc: 'Cove lighting' },
        { title: 'Survey', desc: 'Visit & plan' },
        { title: 'Cities', desc: 'Tabriz & Istanbul' },
        { title: 'Support', desc: 'After-install support' }
      ],
      faq: [
        {
          q: 'Do you install CCTV in Tabriz and Istanbul?',
          a: 'Yes. Residential and commercial CCTV installs are handled by the Bizdavar technical team with the technical lead.'
        },
        {
          q: 'Do you offer cove lighting indoors?',
          a: 'Yes. Cove lighting for homes and commercial spaces, with standard building wiring, is part of this service line.'
        },
        {
          q: 'How do I reach the technical lead?',
          a: 'Message +98 936 411 5151 on WhatsApp or use the Technical WhatsApp button on this page.'
        }
      ]
    }
  };

  const pageMeta = {
    fa: {
      hero: {
        tag: 'خدمات ما',
        title: 'خدمات دیجیتال و فنی بیزدوار',
        desc: 'بازاریابی، وب‌اپ، اپلیکیشن، سامانه، سرور و SMM — به‌همراه خدمات فنی دوربین، سیم‌کشی و نورمخفی در <strong>تبریز</strong> و <strong>استانبول</strong>. محصولات در <a href="products">صفحه محصولات</a> هستند.'
      },
      overview: {
        eyebrow: 'نمای کلی',
        title: 'شش محور خدمات بیزدوار',
        desc: 'دیجیتال و نرم‌افزار در بالا — خدمات فنی ساختمانی با مسئول مشخص در پایین.'
      },
      navAria: 'فهرست خدمات',
      viewDetails: 'مشاهده جزئیات',
      stats: [
        { value: '۶', label: 'محور خدمات' },
        { value: '۱۰۰+', label: 'پروژه' },
        { value: '۲', label: 'شهر فنی' },
        { value: '۱۳+', label: 'سال تجربه' }
      ],
      process: {
        eyebrow: 'فرآیند همکاری',
        title: 'چگونه با ما کار می‌کنید؟',
        desc: 'مسیر همکاری ساده، شفاف و قابل پیگیری است.',
        steps: [
          { title: 'مشاوره', desc: 'شناخت نیاز دیجیتال یا بازدید فنی میدانی' },
          { title: 'طراحی راهکار', desc: 'پیشنهاد فنی، برآورد و زمان‌بندی' },
          { title: 'اجرا', desc: 'پیاده‌سازی نرم‌افزار یا نصب خدمات فنی' },
          { title: 'پشتیبانی', desc: 'گزارش، بهینه‌سازی و همراهی مستمر' }
        ]
      },
      cta: {
        title: 'نیاز به راهکار اختصاصی دارید؟',
        desc: 'مشاوره دیجیتال یا خدمات فنی — نمونه پروژه‌ها در <a href="portfolio">نمونه‌کارها</a>',
        btn: 'مشاوره رایگان',
        btnSecondary: 'مشاهده نمونه‌کارها'
      },
      relatedLinks: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
        { title: 'محصولات بیزدوار', url: 'products', desc: 'SaaS و برندهای تامین' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: '۳۵ پروژه و برند' },
        { title: 'تماس', url: 'contact', desc: 'فرم و واتساپ' }
      ],
      geoText: 'خدمات دیجیتال و فنی بیزدوار — تمرکز اجرایی تبریز و استانبول؛ واتساپ تخصصی خدمات فنی با مسئول فنی.'
    },
    tr: {
      hero: {
        tag: 'Hizmetlerimiz',
        title: 'Bizdavar dijital ve teknik hizmetleri',
        desc: 'Pazarlama, web app, mobil, sistem, sunucu ve SMM — ayrıca CCTV, tesisat ve gizli aydınlatma (<strong>Tebriz</strong> & <strong>İstanbul</strong>). Ürünler <a href="products">ürünler sayfasında</a>.'
      },
      overview: {
        eyebrow: 'Genel bakış',
        title: 'Altı Bizdavar hizmet alanı',
        desc: 'Dijital ve yazılım üstte — saha teknik hizmetleri aşağıda, net sorumlu ile.'
      },
      navAria: 'Hizmet listesi',
      viewDetails: 'Detayları gör',
      stats: [
        { value: '6', label: 'Hizmet alanı' },
        { value: '100+', label: 'Proje' },
        { value: '2', label: 'Teknik şehir' },
        { value: '13+', label: 'Yıl deneyim' }
      ],
      process: {
        eyebrow: 'İş birliği süreci',
        title: 'Nasıl çalışıyoruz?',
        desc: 'Sade, şeffaf ve takip edilebilir süreç.',
        steps: [
          { title: 'Danışmanlık', desc: 'Dijital ihtiyaç veya saha keşfi' },
          { title: 'Çözüm tasarımı', desc: 'Teknik teklif ve zaman planı' },
          { title: 'Uygulama', desc: 'Yazılım gelişimi veya teknik kurulum' },
          { title: 'Destek', desc: 'Raporlama ve sürekli iyileştirme' }
        ]
      },
      cta: {
        title: 'Özel bir çözüme mi ihtiyacınız var?',
        desc: 'Dijital danışmanlık veya teknik hizmet — örnekler <a href="portfolio">portfolyoda</a>',
        btn: 'Ücretsiz danışmanlık',
        btnSecondary: 'Portfolyoyu gör'
      },
      relatedLinks: [
        { title: 'Fast Web Studio', url: 'fast', desc: '$99’dan web tasarım' },
        { title: 'Bizdavar ürünleri', url: 'products', desc: 'SaaS ve tedarik markaları' },
        { title: 'Portfolyo', url: 'portfolio', desc: '35 proje' },
        { title: 'İletişim', url: 'contact', desc: 'Form ve WhatsApp' }
      ]
    },
    en: {
      hero: {
        tag: 'Our services',
        title: 'Bizdavar digital & technical services',
        desc: 'Marketing, web apps, mobile, systems, servers and SMM — plus CCTV, wiring and cove lighting in <strong>Tabriz</strong> and <strong>Istanbul</strong>. Products live on the <a href="products">products page</a>.'
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Six Bizdavar service areas',
        desc: 'Digital and software up top — on-site technical services below with a named lead.'
      },
      navAria: 'Services list',
      viewDetails: 'View details',
      stats: [
        { value: '6', label: 'Service areas' },
        { value: '100+', label: 'Projects' },
        { value: '2', label: 'Field cities' },
        { value: '13+', label: 'Years experience' }
      ],
      process: {
        eyebrow: 'Collaboration process',
        title: 'How we work with you',
        desc: 'A simple, transparent and trackable workflow.',
        steps: [
          { title: 'Consulting', desc: 'Digital needs or on-site survey' },
          { title: 'Solution design', desc: 'Technical proposal and timeline' },
          { title: 'Delivery', desc: 'Software build or technical install' },
          { title: 'Support', desc: 'Reporting and ongoing improvement' }
        ]
      },
      cta: {
        title: 'Need a tailored solution?',
        desc: 'Digital consulting or technical services — see work in the <a href="portfolio">portfolio</a>',
        btn: 'Free consultation',
        btnSecondary: 'View portfolio'
      },
      relatedLinks: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'Websites from $99' },
        { title: 'Bizdavar products', url: 'products', desc: 'SaaS and supply brands' },
        { title: 'Portfolio', url: 'portfolio', desc: '35 projects' },
        { title: 'Contact', url: 'contact', desc: 'Form and WhatsApp' }
      ]
    }
  };

  const panels = {
    fa: {
      dmImgAlt: 'بازاریابی دیجیتال — بیزدوار',
      webImgAlt: 'طراحی وب و وب‌اپلیکیشن — بیزدوار',
      appsImgAlt: 'اپلیکیشن اندروید و iOS و سامانه',
      serverImgAlt: 'مدیریت سرور و زیرساخت',
      smmImgAlt: 'مدیریت شبکه‌های اجتماعی — SMM',
      fieldImgAlt: 'نصب دوربین مدار بسته و نورمخفی — تبریز و استانبول'
    },
    tr: {
      dmImgAlt: 'Dijital pazarlama — Bizdavar',
      webImgAlt: 'Web ve web uygulaması — Bizdavar',
      appsImgAlt: 'Android, iOS ve kurumsal sistem',
      serverImgAlt: 'Sunucu yönetimi',
      smmImgAlt: 'SMM yönetimi',
      fieldImgAlt: 'CCTV ve gizli aydınlatma — Tebriz & İstanbul'
    },
    en: {
      dmImgAlt: 'Digital marketing — Bizdavar',
      webImgAlt: 'Web design and web apps — Bizdavar',
      appsImgAlt: 'Android, iOS and business systems',
      serverImgAlt: 'Server management',
      smmImgAlt: 'Social media management',
      fieldImgAlt: 'CCTV and cove lighting — Tabriz & Istanbul'
    }
  };

  ['fa', 'tr', 'en'].forEach(lang => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.servicesPage = Object.assign({}, L.servicesPage || {}, pageMeta[lang], {
      cards: cards[lang],
      blocks: blocks[lang],
      panels: Object.assign({}, (L.servicesPage && L.servicesPage.panels) || {}, panels[lang]),
      digitalMarketing: digitalMarketing[lang],
      serverOps: serverOps[lang],
      smm: smm[lang],
      webDesign: webDesign[lang],
      fieldTech: fieldTech[lang],
      fieldWhatsapp: fieldWa
    });
    if (!L.footer) L.footer = {};
    Object.assign(L.footer, {
      softwareApps: lang === 'fa' ? 'اپ و سامانه' : lang === 'tr' ? 'Uygulama ve sistem' : 'Apps & systems',
      serverOps: lang === 'fa' ? 'مدیریت سرور' : lang === 'tr' ? 'Sunucu yönetimi' : 'Server management',
      fieldTech: lang === 'fa' ? 'خدمات فنی' : lang === 'tr' ? 'Teknik hizmetler' : 'Technical services'
    });
    if (!L.services) L.services = {};
    Object.assign(L.services, {
      softwareApps: L.footer.softwareApps,
      serverOps: L.footer.serverOps,
      fieldTech: L.footer.fieldTech,
      webDesign: lang === 'fa' ? 'طراحی وب و وب‌اپلیکیشن' : lang === 'tr' ? 'Web ve web app' : 'Web design & web apps'
    });
  });
})();
