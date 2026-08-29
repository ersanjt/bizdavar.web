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
        body: 'استراتژی، اجرا و بهینه‌سازی <strong>بازاریابی دیجیتال</strong> برای رشد فروش آنلاین — از تحلیل بازار و سئو تا <strong>Google Ads</strong>، Meta، LinkedIn، CRO و اتوماسیون. برای مشتری اروپا و آمریکا کمپین را با ارز دلار/یورو و گزارش GA4 می‌چینیم. مطلب مرتبط: <a href="articles/digital-marketing">چگونه دیجیتال مارکتینگ فروش را افزایش می‌دهد؟</a>',
        tags: ['Google Ads', 'Meta', 'LinkedIn', 'SEO', 'CRO', 'GA4'],
        checks: [
          'تحلیل رقبا، بازار هدف آمریکا/اروپا و قیف فروش',
          'کمپین‌های Google Ads، Meta و LinkedIn با بودجه USD/EUR',
          'سئو فنی/محتوایی انگلیسی و صفحات تبدیل',
          'بهینه‌سازی نرخ تبدیل (CRO) روی لندینگ و فرم',
          'اتوماسیون بازاریابی، ایمیل و nurture',
          'گزارش KPI ماهانه به دلار یا یورو'
        ],
        cta: 'درخواست مشاوره'
      },
      {
        title: 'طراحی وب و وب‌اپلیکیشن',
        subtitle: 'Website · Web App · Fast Web Studio · USD / EUR',
        body: 'طراحی و توسعه <strong>سایت شرکتی انگلیسی</strong>، <strong>فروشگاه</strong>، لندینگ کمپین و <strong>وب‌اپلیکیشن</strong> برای مشتری اروپا و آمریکا — فاکتور دلار یا یورو، Stripe/PayPal، هاست بین‌المللی و همپوشانی ساعت با CET و EST. برای تحویل سریع از <a href="fast">Fast Web Studio</a> (از ۹۹ دلار) استفاده کنید؛ پروژه‌های سفارشی از تحلیل تا لانچ. نمونه: <a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a>.',
        tags: ['Website', 'Web App', 'Stripe', 'SEO', 'USD/EUR', '5-day'],
        checks: [
          'سایت شرکتی، فروشگاهی و لندینگ انگلیسی برای بازار US/EU',
          'وب‌اپلیکیشن و پنل مدیریت اختصاصی',
          'UI ریسپانسیو LTR یا RTL — چندزبانه در صورت نیاز',
          'سئو پایه، Core Web Vitals و ساختار محتوا',
          'Stripe، PayPal، فرم تماس و تقویم جلسه Zoom/Meet',
          'فاکتور USD یا EUR، آموزش CMS و پشتیبانی پس از لانچ'
        ],
        cta: 'مشاهده پلن‌های Fast Studio'
      },
      {
        title: 'اپلیکیشن موبایل و سامانه',
        subtitle: 'Android · iOS · سامانه سازمانی',
        body: 'طراحی و توسعه <strong>اپلیکیشن اندروید و iOS</strong>، سامانه سازمانی، پنل B2B و راهکارهای نرم‌افزاری سفارشی برای بازار داخلی و بین‌المللی — از تحلیل نیاز تا انتشار App Store / Google Play، یکپارچه‌سازی Stripe و پشتیبانی. نمونه: <a href="marvi-society">Marvi Society</a> در App Store.',
        tags: ['Android', 'iOS', 'App Store', 'API', 'Stripe'],
        checks: ['اپلیکیشن اندروید و iOS با UI انگلیسی یا چندزبانه', 'سامانه و پنل سازمانی / B2B', 'اتصال به API، Stripe و درگاه پرداخت', 'انتشار App Store و Google Play', 'پشتیبانی و به‌روزرسانی پس از لانچ', '<a href="marvi-society">Marvi Society</a> — نمونه‌کار اپ iOS'],
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
        body: 'نصب و راه‌اندازی <strong>دوربین مدار بسته</strong>، <strong>سیم‌کشی ساختمان</strong> و <strong>نورمخفی</strong> واحدهای مسکونی و تجاری در <strong>تبریز</strong> — توسط <strong>تیم فنی بیزدوار</strong>.',
        tags: ['CCTV', 'سیم‌کشی', 'نورمخفی', 'تبریز'],
        checks: [
          'نصب دوربین مدار بسته منزل و محل کار — تبریز',
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
        body: 'ABD ve AB pazarında <strong>USD/EUR ciro</strong> için <strong>dijital pazarlama</strong> — pazar analizi, SEO, <strong>Google Ads</strong>, Meta, LinkedIn, CRO ve otomasyon. Kampanyalar GA4 ile fatura para biriminizde raporlanır. İlgili yazı: <a href="articles/digital-marketing">Dijital pazarlama satışları nasıl artırır?</a>',
        tags: ['Google Ads', 'Meta', 'LinkedIn', 'SEO', 'CRO', 'GA4'],
        checks: [
          'ABD/AB hedef kitle, rakip ve satış hunisi analizi',
          'Google Ads, Meta ve LinkedIn — bütçe USD veya EUR',
          'İngilizce teknik/içerik SEO ve dönüşüm sayfaları',
          'Landing, form ve checkout’ta CRO',
          'Pazarlama otomasyonu, e-posta ve nurture',
          'Aylık KPI raporu dolar veya euro cinsinden'
        ],
        cta: 'Danışmanlık iste'
      },
      {
        title: 'Web ve web uygulaması',
        subtitle: 'Website · Web App · Fast Web Studio · USD / EUR',
        body: 'Avrupa ve ABD müşterileri için İngilizce <strong>kurumsal site</strong>, <strong>e-ticaret</strong>, kampanya landing ve özel <strong>web uygulaması</strong> — fatura <strong>USD veya EUR</strong>, Stripe/PayPal, uluslararası hosting, CET ve EST örtüşmesi. Hızlı teslim: <a href="fast">Fast Web Studio</a> ($99 / ~€90’dan). Örnek: <a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a>.',
        tags: ['Website', 'Web App', 'Stripe', 'SEO', 'USD/EUR', '5-day'],
        checks: [
          'ABD/AB pazarı için İngilizce kurumsal, mağaza ve landing',
          'Web uygulaması ve özel admin paneli',
          'Responsive LTR (gerekirse RTL) — çok dilli',
          'Teknik SEO, Core Web Vitals ve içerik yapısı',
          'Stripe, PayPal, iletişim formu ve Zoom/Meet randevu',
          'USD veya EUR fatura, CMS eğitimi ve lansman sonrası destek'
        ],
        cta: 'Fast Studio planları'
      },
      {
        title: 'Mobil uygulama ve sistem',
        subtitle: 'Android · iOS · Kurumsal sistem',
        body: 'Uluslararası ürünler için <strong>Android / iOS</strong> uygulaması, kurumsal sistem, B2B paneller ve özel yazılım — ihtiyaç analizinden App Store / Google Play yayınına, Stripe entegrasyonuna ve desteğe. Örnek: App Store’daki <a href="marvi-society">Marvi Society</a>.',
        tags: ['Android', 'iOS', 'App Store', 'API', 'Stripe'],
        checks: ['İngilizce veya çok dilli UI ile Android ve iOS', 'Kurumsal sistem / B2B paneli', 'API, Stripe ve ödeme entegrasyonu', 'App Store ve Google Play yayını', 'Lansman sonrası destek ve güncelleme', '<a href="marvi-society">Marvi Society</a> — iOS uygulama örneği'],
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
        body: '<strong>Güvenlik kamerası</strong>, <strong>bina tesisatı</strong> ve <strong>gizli aydınlatma</strong> — <strong>Tebriz</strong>. Bizdavar teknik ekibi tarafından uygulanır.',
        tags: ['CCTV', 'Tesisat', 'Aydınlatma', 'Tebriz'],
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
        body: 'Strategy, execution and optimization for <strong>digital marketing</strong> that grows USD/EUR revenue — market analysis, SEO, <strong>Google Ads</strong>, Meta, LinkedIn, CRO and automation. Campaigns for US and EU audiences with GA4 reporting in your billing currency. Related: <a href="articles/digital-marketing">How digital marketing increases sales</a>.',
        tags: ['Google Ads', 'Meta', 'LinkedIn', 'SEO', 'CRO', 'GA4'],
        checks: [
          'US/EU audience, competitor and funnel analysis',
          'Google Ads, Meta and LinkedIn campaigns billed in USD or EUR',
          'English technical/content SEO and conversion pages',
          'CRO on landings, forms and checkout',
          'Marketing automation, email and nurture',
          'Monthly KPI reporting in dollars or euros'
        ],
        cta: 'Request consulting'
      },
      {
        title: 'Web design & web apps',
        subtitle: 'Website · Web App · Fast Web Studio · USD / EUR',
        body: 'English <strong>company websites</strong>, stores, campaign landings and custom <strong>web applications</strong> for US and EU clients — invoiced in <strong>USD or EUR</strong>, Stripe/PayPal, EU-friendly hosting and overlap hours with CET and EST. Ship in 5 days with <a href="fast">Fast Web Studio</a> (from $99 / ~€90), or go custom from discovery to launch. Example: <a href="https://arianpumps.com" target="_blank" rel="noopener noreferrer">Arian Pumps</a>.',
        tags: ['Website', 'Web App', 'Stripe', 'SEO', 'USD/EUR', '5-day'],
        checks: [
          'English corporate, store and campaign sites for US/EU markets',
          'Custom web apps and admin panels',
          'Responsive LTR (or RTL) UI — multilingual when needed',
          'Technical SEO, Core Web Vitals and content structure',
          'Stripe, PayPal, contact forms and Zoom/Meet booking',
          'USD or EUR invoices, CMS training and post-launch support'
        ],
        cta: 'View Fast Studio plans'
      },
      {
        title: 'Mobile apps & systems',
        subtitle: 'Android · iOS · Business systems',
        body: 'Design and build <strong>Android and iOS</strong> apps, enterprise systems, B2B panels and custom software for international products — from requirements through App Store / Google Play, Stripe integration and support. Example: <a href="marvi-society">Marvi Society</a> on the App Store.',
        tags: ['Android', 'iOS', 'App Store', 'API', 'Stripe'],
        checks: ['Android and iOS apps with English or multilingual UI', 'Business systems and B2B panels', 'API, Stripe and payment integrations', 'App Store and Google Play release', 'Support and updates after launch', '<a href="marvi-society">Marvi Society</a> — iOS app case study'],
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
        body: '<strong>CCTV installation</strong>, <strong>building wiring</strong> and <strong>cove lighting</strong> for homes and commercial units in <strong>Tabriz</strong> — by the <strong>Bizdavar technical team</strong>.',
        tags: ['CCTV', 'Wiring', 'Lighting', 'Tabriz'],
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
      { title: 'بازاریابی دیجیتال', desc: 'Google Ads، Meta و LinkedIn برای رشد فروش دلاری و یورویی.' },
      { title: 'وب و وب‌اپلیکیشن', desc: 'سایت انگلیسی برای اروپا و آمریکا — از ۹۹ دلار، فاکتور USD/EUR.' },
      { title: 'اپ و سامانه', desc: 'اندروید، iOS و وب‌اپ — App Store / Play و Stripe.' },
      { title: 'مدیریت سرور', desc: 'VPS، امنیت، بکاپ، مانیتورینگ، DNS و مهاجرت.' },
      { title: 'مدیریت SMM', desc: 'محتوا، گرافیک، ریلز، تبلیغات و گزارش رشد.' },
      { title: 'خدمات فنی', desc: 'دوربین مدار بسته، سیم‌کشی و نورمخفی — تبریز.' }
    ],
    tr: [
      { title: 'Dijital pazarlama', desc: 'Google Ads, Meta ve LinkedIn — USD/EUR ciro.' },
      { title: 'Web ve web app', desc: 'ABD/AB için İngilizce site — $99’dan, fatura USD/EUR.' },
      { title: 'Uygulama ve sistem', desc: 'Android, iOS ve web app — App Store / Play ve Stripe.' },
      { title: 'Sunucu yönetimi', desc: 'VPS, güvenlik, yedek, monitoring, DNS ve migrasyon.' },
      { title: 'SMM yönetimi', desc: 'İçerik, grafik, reels, reklam ve büyüme raporu.' },
      { title: 'Teknik hizmetler', desc: 'CCTV, tesisat ve gizli aydınlatma — Tebriz.' }
    ],
    en: [
      { title: 'Digital marketing', desc: 'Google Ads, Meta and LinkedIn that grow USD/EUR revenue.' },
      { title: 'Web & web apps', desc: 'English sites for US & EU — from $99, billed in USD or EUR.' },
      { title: 'Apps & systems', desc: 'Android, iOS and web apps — App Store / Play and Stripe.' },
      { title: 'Server management', desc: 'VPS, security, backups, monitoring, DNS and migration.' },
      { title: 'SMM management', desc: 'Content, design, reels, ads and growth reporting.' },
      { title: 'Technical services', desc: 'CCTV, wiring and cove lighting — Tabriz.' }
    ]
  };

  const digitalMarketing = {
    fa: {
      servicesTitle: 'در بازاریابی دیجیتال چه می‌کنیم؟',
      processNote: 'کمپین برای مخاطب آمریکا و اروپا — Google Ads، Meta، LinkedIn، سئوی انگلیسی و گزارش GA4 به دلار یا یورو.',
      ctaArticle: 'مقاله دیجیتال مارکتینگ',
      packagesTitle: 'خروجی‌های همکاری',
      packages: [
        'نقشه کانال برای بازار US/EU',
        'راه‌اندازی Ads با بودجه USD/EUR',
        'آزمایش CRO روی لندینگ انگلیسی',
        'گزارش KPI ماهانه به دلار یا یورو'
      ],
      panels: [
        { title: 'Google Ads', desc: 'جستجو و Performance Max — US/EU' },
        { title: 'Meta', desc: 'Facebook و Instagram Ads' },
        { title: 'LinkedIn', desc: 'لید B2B اروپا و آمریکا' },
        { title: 'SEO', desc: 'سئوی انگلیسی و صفحات تبدیل' },
        { title: 'CRO', desc: 'نرخ تبدیل لندینگ و چک‌اوت' },
        { title: 'GA4', desc: 'گزارش به USD یا EUR' }
      ],
      faqEyebrow: 'دیجیتال مارکتینگ',
      faqTitle: 'سوالات پرتکرار بازاریابی دیجیتال',
      faq: [
        {
          q: 'برای مشتری اروپا و آمریکا هم کمپین اجرا می‌کنید؟',
          a: 'بله. بودجه و فاکتور را به دلار یا یورو می‌بندیم، مخاطب را در بازار US/EU هدف می‌گیریم و گزارش را با GA4 به همان ارز می‌دهیم.'
        },
        {
          q: 'کدام کانال‌ها پوشش داده می‌شود؟',
          a: 'Google Ads، Meta، LinkedIn، سئوی انگلیسی، CRO روی لندینگ و فرم، اتوماسیون ایمیل و گزارش عملکرد — ترکیب بر اساس هدف فروش دلاری/یورویی شما.'
        },
        {
          q: 'از کجا شروع می‌کنید؟',
          a: 'با تحلیل بازار هدف آمریکا/اروپا، رقبا و قیف فعلی؛ بعد کانال و بودجه را اولویت می‌دهیم و کمپین یا بهینه‌سازی را اجرا می‌کنیم.'
        },
        {
          q: 'با طراحی وب هم هماهنگ می‌شود؟',
          a: 'بله. کمپین روی لندینگ انگلیسی، Stripe/فرم و صفحات Fast Studio یا سایت سفارشی شما سوار می‌شود تا پیام و تبدیل یکدست باشد.'
        }
      ]
    },
    tr: {
      servicesTitle: 'Dijital pazarda neler yapıyoruz?',
      processNote: 'ABD ve AB kitleleri için kampanya — Google Ads, Meta, LinkedIn, İngilizce SEO ve GA4 raporu USD veya EUR.',
      ctaArticle: 'Dijital pazarlama yazısı',
      packagesTitle: 'İş birliği çıktıları',
      packages: [
        'ABD/AB kanal ve huni haritası',
        'Ads kurulumu — bütçe USD/EUR',
        'İngilizce landing’de CRO testleri',
        'Aylık KPI — dolar veya euro'
      ],
      panels: [
        { title: 'Google Ads', desc: 'Arama ve Performance Max — US/EU' },
        { title: 'Meta', desc: 'Facebook ve Instagram Ads' },
        { title: 'LinkedIn', desc: 'ABD/AB B2B lead' },
        { title: 'SEO', desc: 'İngilizce SEO ve dönüşüm sayfaları' },
        { title: 'CRO', desc: 'Landing ve checkout dönüşümü' },
        { title: 'GA4', desc: 'Rapor USD veya EUR' }
      ],
      faqEyebrow: 'Dijital pazarlama',
      faqTitle: 'Dijital pazarlama SSS',
      faq: [
        {
          q: 'Avrupa ve ABD müşterileri için kampanya yürütüyor musunuz?',
          a: 'Evet. Bütçe ve fatura USD veya EUR; hedef kitle US/EU; raporlama GA4 ile aynı para biriminde.'
        },
        {
          q: 'Hangi kanalları kapsıyorsunuz?',
          a: 'Google Ads, Meta, LinkedIn, İngilizce SEO, landing/form CRO, e-posta otomasyonu ve performans raporu — dolar/euro satış hedefine göre birleştirilir.'
        },
        {
          q: 'Nasıl başlıyorsunuz?',
          a: 'ABD/AB pazar, rakip ve mevcut huni analiziyle; ardından kanal/bütçe önceliği ve kampanya veya optimizasyon.'
        },
        {
          q: 'Web tasarımla uyumlu mu?',
          a: 'Evet. Kampanyalar İngilizce landing, Stripe/form ve Fast Studio veya özel sitenizle aynı mesajda hizalanır.'
        }
      ]
    },
    en: {
      servicesTitle: 'What we do in digital marketing',
      processNote: 'Campaigns for US and EU audiences — Google Ads, Meta, LinkedIn, English SEO and GA4 reports in USD or EUR.',
      ctaArticle: 'Digital marketing article',
      packagesTitle: 'Engagement outputs',
      packages: [
        'US/EU channel and funnel map',
        'Ads setup billed in USD or EUR',
        'CRO tests on English landings',
        'Monthly KPI report in dollars or euros'
      ],
      panels: [
        { title: 'Google Ads', desc: 'Search & Performance Max — US/EU' },
        { title: 'Meta', desc: 'Facebook and Instagram Ads' },
        { title: 'LinkedIn', desc: 'B2B leads in the US and EU' },
        { title: 'SEO', desc: 'English SEO and conversion pages' },
        { title: 'CRO', desc: 'Landing and checkout conversion' },
        { title: 'GA4', desc: 'Reporting in USD or EUR' }
      ],
      faqEyebrow: 'Digital marketing',
      faqTitle: 'Digital marketing FAQ',
      faq: [
        {
          q: 'Do you run ads for US and EU companies?',
          a: 'Yes. Media budgets and invoices are in USD or EUR, audiences are targeted in US/EU markets, and GA4 reports match your billing currency.'
        },
        {
          q: 'Which channels does Bizdavar cover?',
          a: 'Google Ads, Meta, LinkedIn, English SEO, landing/form CRO, email automation and performance reporting — combined around your dollar or euro sales goal.'
        },
        {
          q: 'How do you start?',
          a: 'With US/EU market, competitor and current funnel analysis; then we prioritize channels and budget and run campaigns or optimizations.'
        },
        {
          q: 'Does it align with web design?',
          a: 'Yes. Campaigns land on English pages, Stripe/forms and Fast Studio or custom sites so message and conversion stay consistent.'
        }
      ]
    }
  };

  const webDesign = {
    fa: {
      servicesTitle: 'چه می‌سازیم؟',
      processNote: 'از لندینگ انگلیسی ۵روزه تا وب‌اپ سفارشی — فاکتور دلار/یورو، Stripe/PayPal، هاست بین‌المللی و همپوشانی CET/EST. UI فارسی/RTL برای بازار دوم در صورت نیاز.',
      ctaCustom: 'پیشنهاد وب به دلار / یورو',
      packagesTitle: 'خروجی‌های تحویل',
      packages: [
        'UI/UX و هویت صفحه انگلیسی',
        'پیاده‌سازی ریسپانسیو LTR (RTL در صورت نیاز)',
        'سئو فنی و Core Web Vitals',
        'Stripe / PayPal، آموزش CMS و پشتیبانی لانچ'
      ],
      panels: [
        { title: 'Corporate', desc: 'سایت شرکتی انگلیسی' },
        { title: 'Store', desc: 'فروشگاه + Stripe' },
        { title: 'Web App', desc: 'پنل و SaaS' },
        { title: 'Landing', desc: 'لندینگ کمپین US/EU' },
        { title: 'USD / EUR', desc: 'فاکتور به ارز شما' },
        { title: 'Fast', desc: 'از $99 / ~€90' }
      ],
      faqEyebrow: 'طراحی وب',
      faqTitle: 'سوالات پرتکرار طراحی وب',
      faq: [
        {
          q: 'برای مشتری اروپا و آمریکا سایت می‌سازید؟',
          a: 'بله — این تمرکز اصلی ماست. سایت انگلیسی LTR، فاکتور دلار یا یورو، همپوشانی ساعت با CET و EST، جلسه Zoom/Meet و هاست سازگار با GDPR از طریق Netinode.'
        },
        {
          q: 'تفاوت Fast Web Studio با پروژه سفارشی چیست؟',
          a: 'Fast Studio برای سایت شرکتی/لندینگ انگلیسی با پلن ثابت و تحویل ۵روزه است (از $99 / حدود €90). پروژه سفارشی برای وب‌اپ، پنل، فروشگاه Stripe یا نیازمندی‌های خاص از تحلیل تا لانچ تعریف می‌شود.'
        },
        {
          q: 'Stripe و PayPal هم وصل می‌کنید؟',
          a: 'بله. فروشگاه WooCommerce، کاتالوگ، سبد و درگاه بین‌المللی (Stripe/PayPal) در پروژه‌های فروشگاهی و پلن Pro پوشش داده می‌شود.'
        },
        {
          q: 'سایت فارسی و RTL هم طراحی می‌کنید؟',
          a: 'بله، به‌عنوان بازار دوم یا پروژه جدا. برای جذب مشتری دلار/یورو، نسخه انگلیسی LTR را پیش‌فرض می‌گیریم.'
        }
      ]
    },
    tr: {
      servicesTitle: 'Ne inşa ediyoruz?',
      processNote: '5 günde İngilizce landing’den özel web app’e — USD/EUR fatura, Stripe/PayPal, uluslararası hosting ve CET/EST örtüşmesi. Farsça/RTL ikinci pazar için.',
      ctaCustom: 'USD / EUR web teklifi',
      packagesTitle: 'Teslim çıktıları',
      packages: [
        'UI/UX ve İngilizce sayfa kimliği',
        'Responsive LTR (isteğe RTL)',
        'Teknik SEO ve Core Web Vitals',
        'Stripe / PayPal, CMS eğitimi ve lansman desteği'
      ],
      panels: [
        { title: 'Corporate', desc: 'İngilizce kurumsal site' },
        { title: 'Store', desc: 'Mağaza + Stripe' },
        { title: 'Web App', desc: 'Panel ve SaaS' },
        { title: 'Landing', desc: 'ABD/AB kampanya landing' },
        { title: 'USD / EUR', desc: 'Fatura sizin para biriminizde' },
        { title: 'Fast', desc: '$99 / ~€90’dan' }
      ],
      faqEyebrow: 'Web tasarım',
      faqTitle: 'Web tasarım SSS',
      faq: [
        {
          q: 'Avrupa ve ABD şirketleri için site yapıyor musunuz?',
          a: 'Evet — asıl odağımız bu. İngilizce LTR site, USD veya EUR fatura, CET/EST örtüşmesi, Zoom/Meet ve Netinode üzerinden GDPR uyumlu hosting.'
        },
        {
          q: 'Fast Web Studio ile özel proje farkı nedir?',
          a: 'Fast Studio sabit fiyatlı 5 günlük kurumsal/landing teslimidir ($99 / ~€90’dan). Özel proje web app, panel veya Stripe mağazası içindir.'
        },
        {
          q: 'Stripe ve PayPal var mı?',
          a: 'Evet. WooCommerce kataloğu, sepet ve uluslararası ödeme (Stripe/PayPal) e-ticaret ve Pro planda sunulur.'
        },
        {
          q: 'Farsça / RTL site de yapıyor musunuz?',
          a: 'Evet, ikinci pazar veya ayrı proje olarak. Dolar/euro müşteri için varsayılan İngilizce LTR’dir.'
        }
      ]
    },
    en: {
      servicesTitle: 'What we build',
      processNote: 'From a 5-day English landing to a custom web app — LTR UI, Stripe/PayPal, GDPR-aware hosting and overlap hours with CET and EST. Persian/RTL is available as a second market.',
      ctaCustom: 'Get a USD / EUR website quote',
      packagesTitle: 'Delivery outputs',
      packages: [
        'UI/UX and English page identity',
        'Responsive LTR (RTL on request)',
        'Technical SEO and Core Web Vitals',
        'Stripe / PayPal, CMS training and launch support'
      ],
      panels: [
        { title: 'Corporate', desc: 'English company sites' },
        { title: 'Store', desc: 'WooCommerce + Stripe' },
        { title: 'Web App', desc: 'Panels & SaaS UI' },
        { title: 'Landing', desc: 'US/EU campaign landings' },
        { title: 'USD / EUR', desc: 'Invoice in your currency' },
        { title: 'Fast', desc: 'From $99 / ~€90' }
      ],
      faqEyebrow: 'Web design',
      faqTitle: 'Web design FAQ',
      faq: [
        {
          q: 'Do you design websites for US and EU companies?',
          a: 'Yes — that is the core offer. English LTR sites, invoices in USD or EUR, overlap hours with CET and EST, Zoom/Meet reviews, and GDPR-aware hosting via Netinode.'
        },
        {
          q: 'What’s the difference between Fast Web Studio and a custom project?',
          a: 'Fast Studio is packaged 5-day corporate/landing delivery (from $99 / about €90). Custom projects cover web apps, admin panels or Stripe stores from discovery to launch.'
        },
        {
          q: 'Do you integrate Stripe and PayPal?',
          a: 'Yes. WooCommerce catalogs, carts and international checkout (Stripe/PayPal) are included in store builds and the Pro plan.'
        },
        {
          q: 'Can you still build Persian / RTL sites?',
          a: 'Yes, as a second locale or a separate project. For dollar/euro clients the default is English LTR.'
        }
      ]
    }
  };

  const softwareApps = {
    fa: {
      servicesTitle: 'چه می‌سازیم؟',
      processNote: 'از تحلیل نیاز تا انتشار App Store / Google Play — UI انگلیسی یا چندزبانه، Stripe و همپوشانی ساعت با تیم‌های آمریکا/اروپا.',
      ctaPortfolio: 'نمونه‌کار نرم‌افزاری',
      packagesTitle: 'خروجی‌های پروژه',
      packages: [
        'تحلیل نیاز و نقشه محصول',
        'UI/UX و معماری فنی',
        'توسعه اندروید / iOS یا سامانه',
        'انتشار، آموزش و پشتیبانی'
      ],
      panels: [
        { title: 'Android', desc: 'اپلیکیشن اندروید' },
        { title: 'iOS', desc: 'اپلیکیشن آیفون' },
        { title: 'سامانه', desc: 'پنل و سیستم سازمانی' },
        { title: 'API', desc: 'یکپارچه‌سازی و درگاه' },
        { title: 'B2B', desc: 'پنل و گردش‌کار سازمانی' },
        { title: 'Support', desc: 'انتشار و به‌روزرسانی' }
      ],
      faqEyebrow: 'اپ و سامانه',
      faqTitle: 'سوالات پرتکرار اپلیکیشن و سامانه',
      faq: [
        {
          q: 'چه نوع نرم‌افزاری می‌سازید؟',
          a: 'اپلیکیشن اندروید و iOS با UI انگلیسی یا چندزبانه، سامانه‌های سازمانی، پنل B2B و نرم‌افزار سفارشی — از جمله محصولاتی که در App Store و Google Play منتشر می‌شوند.'
        },
        {
          q: 'فرآیند پروژه چگونه است؟',
          a: 'از تحلیل نیاز و طراحی UI/UX شروع می‌کنیم، سپس توسعه، تست، انتشار استور (در صورت نیاز) و پشتیبانی ادامه می‌یابد.'
        },
        {
          q: 'یکپارچه‌سازی با سیستم‌های موجود دارید؟',
          a: 'بله. اتصال API، Stripe/PayPal، CRM و سرویس‌های ثالث در محدوده پروژه قابل برنامه‌ریزی است — مناسب محصول بین‌المللی با درآمد دلاری/یورویی.'
        },
        {
          q: 'پس از لانچ چه پشتیبانی می‌دهید؟',
          a: 'رفع باگ اولیه، به‌روزرسانی نسخه‌ها و در صورت قرارداد، نگهداری مستمر و توسعه قابلیت‌های جدید.'
        }
      ]
    },
    tr: {
      servicesTitle: 'Ne geliştiriyoruz?',
      processNote: 'İhtiyaç analizinden App Store / Google Play yayınına — İngilizce veya çok dilli UI, Stripe ve ABD/AB ekipleriyle saat örtüşmesi.',
      ctaPortfolio: 'Yazılım portfolyosu',
      packagesTitle: 'Proje çıktıları',
      packages: [
        'İhtiyaç analizi ve ürün haritası',
        'UI/UX ve teknik mimari',
        'Android / iOS veya sistem geliştirme',
        'Yayın, eğitim ve destek'
      ],
      panels: [
        { title: 'Android', desc: 'Android uygulaması' },
        { title: 'iOS', desc: 'iPhone uygulaması' },
        { title: 'Sistem', desc: 'Kurumsal panel ve sistem' },
        { title: 'API', desc: 'Entegrasyon ve ödeme' },
        { title: 'B2B', desc: 'Kurumsal iş akışı' },
        { title: 'Support', desc: 'Yayın ve güncelleme' }
      ],
      faqEyebrow: 'Uygulama ve sistem',
      faqTitle: 'Uygulama ve sistem SSS',
      faq: [
        {
          q: 'Ne tür yazılımlar geliştiriyorsunuz?',
          a: 'Android ve iOS uygulamaları, kurumsal sistemler, B2B paneller ve özel yazılım — işletme ihtiyacınıza göre.'
        },
        {
          q: 'Proje süreci nasıl ilerler?',
          a: 'İhtiyaç analizi ve UI/UX ile başlar; ardından geliştirme, test, mağaza yayını (gerekirse) ve destek gelir.'
        },
        {
          q: 'Mevcut sistemlerle entegrasyon var mı?',
          a: 'Evet. API, Stripe/PayPal, CRM ve üçüncü taraf servisler proje kapsamında planlanabilir — USD/EUR gelirli uluslararası ürünler için.'
        },
        {
          q: 'Lansman sonrası destek nedir?',
          a: 'İlk hata düzeltmeleri, sürüm güncellemeleri ve sözleşmeye göre sürekli bakım / yeni özellikler.'
        }
      ]
    },
    en: {
      servicesTitle: 'What we build',
      processNote: 'From requirements to App Store / Google Play — English or multilingual UI, Stripe, and overlap hours with US/EU teams.',
      ctaPortfolio: 'Software portfolio',
      packagesTitle: 'Project outputs',
      packages: [
        'Requirements and product map',
        'UI/UX and technical architecture',
        'Android / iOS or system development',
        'Release, training and support'
      ],
      panels: [
        { title: 'Android', desc: 'Android apps' },
        { title: 'iOS', desc: 'iPhone apps' },
        { title: 'Systems', desc: 'Business panels & systems' },
        { title: 'API', desc: 'Integrations & payments' },
        { title: 'B2B', desc: 'Enterprise workflows' },
        { title: 'Support', desc: 'Release and updates' }
      ],
      faqEyebrow: 'Apps & systems',
      faqTitle: 'Apps & systems FAQ',
      faq: [
        {
          q: 'What software do you build?',
          a: 'Android and iOS apps with English or multilingual UI, enterprise systems, B2B panels and custom software — including products shipped to the App Store and Google Play.'
        },
        {
          q: 'How does a project run?',
          a: 'We start with requirements and UI/UX, then build, test, store release when needed, and ongoing support.'
        },
        {
          q: 'Can you integrate with existing systems?',
          a: 'Yes. APIs, Stripe/PayPal, CRM and third-party services can be scoped in — typical for international products billed in USD or EUR.'
        },
        {
          q: 'What support do you provide after launch?',
          a: 'Early bug fixes, version updates and, under agreement, ongoing maintenance and new features.'
        }
      ]
    }
  };

  const smm = {
    fa: {
      servicesTitle: 'در مدیریت شبکه‌های اجتماعی چه می‌کنیم؟',
      processNote: 'تقویم محتوا، طراحی، تعامل و Paid Social — با گزارش رشد ماهانه.',
      ctaMarketing: 'هم‌راستا با دیجیتال مارکتینگ',
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
      processNote: 'İçerik takvimi, tasarım, etkileşim ve Paid Social — aylık büyüme raporuyla.',
      ctaMarketing: 'Dijital pazarlamayla hizalı',
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
      processNote: 'Content calendar, design, engagement and Paid Social — with monthly growth reporting.',
      ctaMarketing: 'Align with digital marketing',
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
      processNote: 'از سخت‌سازی اولیه تا مانیتورینگ و واکنش به حادثه — زیرساخت پایدار برای سایت و سامانه.',
      ctaHost: 'Netinode',
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
      processNote: 'İlk hardening’den monitoring ve olay müdahalesine — site ve sistem için kararlı altyapı.',
      ctaHost: 'Netinode',
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
      processNote: 'From initial hardening to monitoring and incident response — stable infrastructure for sites and systems.',
      ctaHost: 'Netinode',
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
      desc: 'اجرای تخصصی در تبریز — بازدید، پیشنهاد طرح و نصب.',
      leadLabel: 'هماهنگی خدمات فنی',
      leadName: 'تیم فنی بیزدوار',
      leadRole: 'نصب دوربین مدار بسته، سیم‌کشی ساختمان و نورمخفی',
      citiesLabel: 'شهرهای هدف',
      cities: 'تبریز',
      phoneLabel: 'شماره مستقیم',
      waCta: 'واتساپ خدمات فنی',
      callCta: 'تماس تلفنی',
      waHint: '+98 936 411 5151',
      servicesTitle: 'چه خدماتی ارائه می‌دهیم؟',
      processNote: 'بازدید فنی، پیشنهاد طرح و زمان‌بندی اجرا — هماهنگی مستقیم از واتساپ خدمات فنی.',
      faqTitle: 'سوالات پرتکرار خدمات فنی',
      panel: [
        { id: 'cctv', icon: 'monitor', title: 'دوربین مدار بسته', desc: 'نصب CCTV منزل و محل کار' },
        { id: 'wiring', icon: 'bolt', title: 'سیم‌کشی ساختمان', desc: 'واحد مسکونی و تجاری' },
        { id: 'lighting', icon: 'flame', title: 'نورمخفی', desc: 'طراحی و اجرای داخلی' },
        { id: 'survey', icon: 'document', title: 'بازدید فنی', desc: 'طرح و زمان‌بندی اجرا' },
        { id: 'cities', icon: 'pin', title: 'تبریز', desc: 'پوشش اجرایی دو شهر' },
        { id: 'support', icon: 'shield', title: 'گارانتی اجرا', desc: 'پشتیبانی پس از نصب' }
      ],
      faq: [
        {
          q: 'نصب دوربین مدار بسته در تبریز انجام می‌دهید؟',
          a: 'بله. نصب و راه‌اندازی دوربین مدار بسته برای واحدهای مسکونی و تجاری در تبریز توسط تیم فنی بیزدوار انجام می‌شود.'
        },
        {
          q: 'نورمخفی داخل واحد مسکونی یا تجاری هم کار می‌کنید؟',
          a: 'بله. طراحی و اجرای نورمخفی داخل واحدهای مسکونی و فضاهای تجاری، همراه با سیم‌کشی استاندارد ساختمانی ارائه می‌شود.'
        },
        {
          q: 'چطور برای خدمات فنی هماهنگ کنم؟',
          a: 'مستقیم در واتساپ با شماره +98 936 411 5151 پیام بدهید یا از دکمه «واتساپ خدمات فنی» در همین صفحه استفاده کنید.'
        }
      ]
    },
    tr: {
      eyebrow: 'Saha teknik hizmetleri',
      title: 'CCTV, tesisat ve gizli aydınlatma',
      desc: 'Tebriz’de keşif, plan ve kurulum.',
      leadLabel: 'Teknik hizmet koordinasyonu',
      leadName: 'Bizdavar teknik ekibi',
      leadRole: 'CCTV, bina tesisatı ve gizli aydınlatma kurulumu',
      citiesLabel: 'Hedef şehirler',
      cities: 'Tebriz',
      phoneLabel: 'Direkt numara',
      waCta: 'Teknik WhatsApp',
      callCta: 'Telefon',
      waHint: '+98 936 411 5151',
      servicesTitle: 'Hangi hizmetleri veriyoruz?',
      processNote: 'Teknik keşif, uygulama planı ve kurulum takvimi — Teknik WhatsApp’tan yazın.',
      faqTitle: 'Teknik hizmet SSS',
      panel: [
        { id: 'cctv', icon: 'monitor', title: 'Güvenlik kamerası', desc: 'Konut ve işyeri CCTV' },
        { id: 'wiring', icon: 'bolt', title: 'Bina tesisatı', desc: 'Konut ve ticari birimler' },
        { id: 'lighting', icon: 'flame', title: 'Gizli aydınlatma', desc: 'İç mekân uygulama' },
        { id: 'survey', icon: 'document', title: 'Teknik keşif', desc: 'Plan ve kurulum takvimi' },
        { id: 'cities', icon: 'pin', title: 'Tebriz', desc: 'İki şehirde uygulama' },
        { id: 'support', icon: 'shield', title: 'Kurulum garantisi', desc: 'Kurulum sonrası destek' }
      ],
      faq: [
        {
          q: 'Tebriz’de kamera kurulumu var mı?',
          a: 'Evet. Konut ve ticari birimlerde CCTV kurulumu Bizdavar teknik ekibi tarafından yapılır.'
        },
        {
          q: 'Gizli aydınlatma da yapıyor musunuz?',
          a: 'Evet. Konut ve ticari alanlarda gizli aydınlatma ile standart bina tesisatı birlikte planlanır.'
        },
        {
          q: 'Teknik hizmet için nasıl ulaşırım?',
          a: '+98 936 411 5151 WhatsApp hattından veya bu sayfadaki Teknik WhatsApp düğmesinden yazabilirsiniz.'
        }
      ]
    },
    en: {
      eyebrow: 'On-site technical services',
      title: 'CCTV, wiring and cove lighting',
      desc: 'Survey, plan and install in Tabriz.',
      leadLabel: 'Technical coordination',
      leadName: 'Bizdavar technical team',
      leadRole: 'CCTV, building wiring and cove lighting installation',
      citiesLabel: 'Focus cities',
      cities: 'Tabriz',
      phoneLabel: 'Direct line',
      waCta: 'Technical WhatsApp',
      callCta: 'Call',
      waHint: '+98 936 411 5151',
      servicesTitle: 'What we deliver',
      processNote: 'Site survey, execution plan and install schedule — message via Technical WhatsApp.',
      faqTitle: 'Technical services FAQ',
      panel: [
        { id: 'cctv', icon: 'monitor', title: 'CCTV', desc: 'Home and workplace cameras' },
        { id: 'wiring', icon: 'bolt', title: 'Building wiring', desc: 'Residential and commercial' },
        { id: 'lighting', icon: 'flame', title: 'Cove lighting', desc: 'Indoor design and install' },
        { id: 'survey', icon: 'document', title: 'Site survey', desc: 'Plan and schedule' },
        { id: 'cities', icon: 'pin', title: 'Tabriz', desc: 'On-site coverage' },
        { id: 'support', icon: 'shield', title: 'Install warranty', desc: 'After-install support' }
      ],
      faq: [
        {
          q: 'Do you install CCTV in Tabriz?',
          a: 'Yes. Residential and commercial CCTV install is handled by the Bizdavar technical team in Tabriz.'
        },
        {
          q: 'Do you also do cove lighting indoors?',
          a: 'Yes. Cove lighting for homes and commercial spaces is planned together with standard building wiring.'
        },
        {
          q: 'How do I coordinate technical services?',
          a: 'Message +98 936 411 5151 on WhatsApp or use the Technical WhatsApp button on this page.'
        }
      ]
    }
  };

  const intl = {
    fa: {
      eyebrow: 'بازار اروپا و آمریکا',
      title: 'طراحی سایت، اپ و بازاریابی برای درآمد دلاری و یورویی',
      desc: 'برای استارتاپ‌ها، SMB و آژانس‌های اروپا و آمریکا سایت انگلیسی، وب‌اپ و کمپین می‌سازیم — فاکتور USD یا EUR، همپوشانی ساعت با CET و EST، و تحویل با Zoom / Meet.',
      nav: 'اروپا و آمریکا',
      ctaPrimary: 'درخواست پیشنهاد وب (USD / EUR)',
      ctaSecondary: 'سایت ۵روزه از $۹۹',
      note: 'مشاوره اول رایگان است. محدوده، زمان و ارز فاکتور را قبل از شروع مکتوب می‌کنیم.',
      points: [
        { title: 'فاکتور دلار یا یورو', desc: 'قرارداد و پیش‌فاکتور به USD یا EUR. نرخ تقریبی €۹۰ برای پلن ۹۹ دلاری را شفاف می‌گوییم.' },
        { title: 'همپوشانی CET و EST', desc: 'بازار اروپا صبح‌ها و آمریکا بعدازظهر؛ جلسه Zoom / Google Meet در ساعت کاری شما.' },
        { title: 'انگلیسی‌اول و GDPR', desc: 'سایت LTR انگلیسی، سئو پایه و هاست بین‌المللی سازگار با حریم اروپا از طریق Netinode.' },
        { title: 'Stripe، PayPal و حواله', desc: 'درگاه بین‌المللی روی فروشگاه و وب‌اپ؛ پرداخت پروژه با کارت، PayPal یا انتقال بانکی.' },
        { title: 'Figma و بازبینی زنده', desc: 'طراحی در Figma، بازخورد در جلسه تصویری، تحویل با آموزش CMS — بدون رفت‌وآمد حضوری.' },
        { title: 'سرریز آژانس', desc: 'آژانس‌های US/EU که ظرفیت طراحی وب ندارند می‌توانند پروژه را با برند خود یا بیزدوار بسپارند.' }
      ],
      offers: [
        { name: 'Fast Web Studio', price: 'از $99 / ~€90', desc: 'سایت شرکتی یا لندینگ انگلیسی در ۵ روز کاری — پلن‌های $99 / $199 / $299.', href: 'fast', cta: 'مشاهده پلن‌ها' },
        { name: 'سایت سفارشی US / EU', price: 'پیشنهاد USD / EUR', desc: 'وب‌اپ، فروشگاه Stripe، چندزبانه یا برند پیچیده — از تحلیل تا لانچ.', href: 'contact?service=web-design', cta: 'درخواست پیشنهاد' },
        { name: 'اپ و بازاریابی', price: 'پروژه یا ماهانه', desc: 'اندروید / iOS / App Store و کمپین Google Ads، Meta و LinkedIn با بودجه دلاری یا یورویی.', href: 'contact?service=software-apps', cta: 'شروع پروژه' }
      ]
    },
    tr: {
      eyebrow: 'Avrupa ve ABD',
      title: 'Dolar ve euro geliri için web, uygulama ve pazarlama',
      desc: 'Avrupa ve ABD’deki startup, KOBİ ve ajanslar için İngilizce site, web app ve kampanya — USD veya EUR fatura, CET ve EST örtüşmesi, Zoom / Meet teslimatı.',
      nav: 'Avrupa ve ABD',
      ctaPrimary: 'Web teklifi iste (USD / EUR)',
      ctaSecondary: '5 günde site $99’dan',
      note: 'İlk danışmanlık ücretsizdir. Kapsam, süre ve fatura para birimini başlamadan yazılı netleştiririz.',
      points: [
        { title: 'USD veya EUR fatura', desc: 'Sözleşme ve proforma dolar veya euro. $99 plan için yaklaşık €90’ı şeffaf paylaşırız.' },
        { title: 'CET ve EST örtüşmesi', desc: 'Avrupa sabahları, ABD öğleden sonra; Zoom / Google Meet sizin iş saatlerinizde.' },
        { title: 'İngilizce önce + GDPR', desc: 'LTR İngilizce site, temel SEO ve Netinode üzerinden Avrupa’ya uygun hosting.' },
        { title: 'Stripe, PayPal ve havale', desc: 'Mağaza ve web app’te uluslararası ödeme; proje ödemesi kart, PayPal veya banka transferi.' },
        { title: 'Figma ve canlı inceleme', desc: 'Tasarım Figma’da, geri bildirim görüntülü toplantıda, teslim CMS eğitimiyle — seyahat yok.' },
        { title: 'Ajans taşması', desc: 'Kapasitesi yetmeyen ABD/AB ajansları web işini kendi markaları veya Bizdavar adı altında devredebilir.' }
      ],
      offers: [
        { name: 'Fast Web Studio', price: '$99 / ~€90’dan', desc: 'İngilizce kurumsal veya landing — 5 iş günü. Planlar $99 / $199 / $299.', href: 'fast', cta: 'Planları gör' },
        { name: 'Özel US / EU sitesi', price: 'USD / EUR teklif', desc: 'Web app, Stripe mağaza, çok dilli veya karmaşık marka — keşiften yayına.', href: 'contact?service=web-design', cta: 'Teklif iste' },
        { name: 'Uygulama ve pazarlama', price: 'Proje veya aylık', desc: 'Android / iOS / App Store ve Google Ads, Meta, LinkedIn — bütçe dolar veya euro.', href: 'contact?service=software-apps', cta: 'Projeyi başlat' }
      ]
    },
    en: {
      eyebrow: 'Europe and the United States',
      title: 'Websites, apps and marketing billed in USD and EUR',
      desc: 'We build English sites, web apps and campaigns for US and EU startups, SMBs and agencies — invoiced in USD or EUR, overlap hours with CET and EST, delivery over Zoom / Meet.',
      nav: 'US & EU',
      ctaPrimary: 'Request a website quote (USD / EUR)',
      ctaSecondary: '5-day site from $99',
      note: 'The first consult is free. Scope, timeline and invoice currency are confirmed in writing before we start.',
      points: [
        { title: 'Invoices in USD or EUR', desc: 'Contracts and proformas in dollars or euros. We state the approx. €90 equivalent of the $99 plan up front.' },
        { title: 'CET and EST overlap', desc: 'Morning slots for Europe, afternoon for the US East Coast — Zoom / Google Meet in your business hours.' },
        { title: 'English-first and GDPR-aware', desc: 'LTR English sites, technical SEO and EU-friendly hosting via Netinode.' },
        { title: 'Stripe, PayPal and bank transfer', desc: 'International checkout on stores and web apps; project fees by card, PayPal or wire.' },
        { title: 'Figma and live reviews', desc: 'Design in Figma, feedback on a video call, handoff with CMS training — no on-site travel required.' },
        { title: 'Agency overflow', desc: 'US/EU agencies short on web capacity can white-label or co-brand the build with Bizdavar.' }
      ],
      offers: [
        { name: 'Fast Web Studio', price: 'From $99 / ~€90', desc: 'English company or landing site in 5 business days — $99 / $199 / $299 plans.', href: 'fast', cta: 'View plans' },
        { name: 'Custom US / EU website', price: 'USD / EUR quote', desc: 'Web apps, Stripe stores, multilingual or complex brands — discovery through launch.', href: 'contact?service=web-design', cta: 'Request a quote' },
        { name: 'Apps & marketing', price: 'Project or monthly', desc: 'Android / iOS / App Store plus Google Ads, Meta and LinkedIn with USD or EUR budgets.', href: 'contact?service=software-apps', cta: 'Start a project' }
      ]
    },
    ru: {
      eyebrow: 'Европа и США',
      title: 'Сайты, приложения и маркетинг со счётом в USD и EUR',
      desc: 'Для стартапов, SMB и агентств в Европе и США делаем английские сайты, web app и кампании — счёт в USD или EUR, пересечение часов с CET и EST, сдача через Zoom / Meet.',
      nav: 'Европа и США',
      ctaPrimary: 'Запросить предложение по сайту (USD / EUR)',
      ctaSecondary: 'Сайт за 5 дней от $99',
      note: 'Первая консультация бесплатна. Объём, сроки и валюту счёта фиксируем письменно до старта.',
      points: [
        { title: 'Счёт в долларах или евро', desc: 'Договор и проформа в USD или EUR. Эквивалент ~€90 для тарифа $99 называем сразу.' },
        { title: 'Пересечение CET и EST', desc: 'Утро для Европы, день для востока США — Zoom / Google Meet в ваши рабочие часы.' },
        { title: 'English-first и GDPR', desc: 'Английский LTR-сайт, техническое SEO и хостинг, удобный для ЕС, через Netinode.' },
        { title: 'Stripe, PayPal и перевод', desc: 'Международная оплата в магазине и web app; гонорар проекта картой, PayPal или SWIFT.' },
        { title: 'Figma и живые ревью', desc: 'Дизайн в Figma, правки на видеозвонке, сдача с обучением CMS — без выезда на объект.' },
        { title: 'Overflow для агентств', desc: 'Агентства US/EU без свободной ёмкости могут отдать веб white-label или под брендом Bizdavar.' }
      ],
      offers: [
        { name: 'Fast Web Studio', price: 'от $99 / ~€90', desc: 'Английский корпоративный или лендинг за 5 рабочих дней — тарифы $99 / $199 / $299.', href: 'fast', cta: 'Смотреть тарифы' },
        { name: 'Индивидуальный сайт US / EU', price: 'оценка USD / EUR', desc: 'Web app, магазин Stripe, мультиязычность или сложный бренд — от анализа до запуска.', href: 'contact?service=web-design', cta: 'Запросить оценку' },
        { name: 'Приложения и маркетинг', price: 'проект или помесячно', desc: 'Android / iOS / App Store плюс Google Ads, Meta и LinkedIn с бюджетом в USD или EUR.', href: 'contact?service=software-apps', cta: 'Начать проект' }
      ]
    },
    ar: {
      eyebrow: 'أوروبا وأمريكا',
      title: 'مواقع وتطبيقات وتسويق بفاتورة بالدولار واليورو',
      desc: 'للشركات الناشئة وSMB والوكالات في أوروبا وأمريكا نبني مواقع إنجليزية وweb app وحملات — فاتورة USD أو EUR، تداخل ساعات مع CET وEST، والتسليم عبر Zoom / Meet.',
      nav: 'أوروبا وأمريكا',
      ctaPrimary: 'اطلب عرض تصميم موقع (USD / EUR)',
      ctaSecondary: 'موقع خلال ٥ أيام من ٩٩$',
      note: 'الاستشارة الأولى مجانية. نثبت النطاق والمدة وعملة الفاتورة كتابةً قبل البدء.',
      points: [
        { title: 'فاتورة بالدولار أو اليورو', desc: 'عقد وفاتورة مبدئية بـ USD أو EUR. نعادل باقة ٩٩$ بنحو ٩٠€ منذ البداية.' },
        { title: 'تداخل CET وEST', desc: 'صباحاً لأوروبا وبعد الظهر للساحل الشرقي الأمريكي — Zoom / Google Meet في ساعات عملك.' },
        { title: 'إنجليزي أولاً وGDPR', desc: 'موقع LTR بالإنجليزية وSEO تقني واستضافة مناسبة لأوروبا عبر Netinode.' },
        { title: 'Stripe وPayPal والتحويل', desc: 'دفع دولي في المتجر والويب آب؛ أتعاب المشروع ببطاقة أو PayPal أو حوالة.' },
        { title: 'Figma ومراجعات مباشرة', desc: 'التصميم في Figma والملاحظات في مكالمة فيديو والتسليم مع تدريب CMS — دون سفر.' },
        { title: 'فائض الوكالات', desc: 'وكالات أمريكا/أوروبا بلا سعة ويب يمكنها تسليم المشروع بعلامتها أو مع Bizdavar.' }
      ],
      offers: [
        { name: 'Fast Web Studio', price: 'من $99 / ~€90', desc: 'موقع شركة أو لاندينغ بالإنجليزية خلال ٥ أيام عمل — باقات $99 / $199 / $299.', href: 'fast', cta: 'عرض الباقات' },
        { name: 'موقع مخصص US / EU', price: 'عرض USD / EUR', desc: 'ويب آب ومتجر Stripe ومتعدد اللغات أو علامة معقدة — من التحليل حتى الإطلاق.', href: 'contact?service=web-design', cta: 'اطلب عرضاً' },
        { name: 'تطبيقات وتسويق', price: 'مشروع أو شهري', desc: 'Android / iOS / App Store مع Google Ads وMeta وLinkedIn بميزانية دولار أو يورو.', href: 'contact?service=software-apps', cta: 'ابدأ المشروع' }
      ]
    }
  };

  const pageMeta = {
    fa: {
      hero: {
        tag: 'خدمات ما',
        title: 'طراحی سایت و خدمات دیجیتال برای اروپا و آمریکا',
        desc: 'سایت انگلیسی، وب‌اپ و کمپین بازاریابی با فاکتور <strong>دلار یا یورو</strong> — به‌همراه اپ، سرور، SMM و خدمات فنی در تبریز. پلن سریع از <a href="fast">۹۹ دلار / حدود ۹۰ یورو</a>. محصولات در <a href="products">صفحه محصولات</a>.',
        ctaPrimary: 'مشاوره طراحی سایت',
        ctaWeb: 'پلن‌های سایت از ۹۹ دلار',
        ctaField: 'واتساپ خدمات فنی'
      },
      paths: {
        digital: {
          eyebrow: 'مسیر دیجیتال',
          title: 'طراحی وب، بازاریابی، اپ، سرور و SMM',
          desc: 'از سایت انگلیسی US/EU تا کمپین دلاری/یورویی و تحویل نرم‌افزار — یک تیم برای مسیر آنلاین.',
          cta: 'شروع از طراحی سایت'
        },
        field: {
          eyebrow: 'مسیر فنی',
          title: 'دوربین، سیم‌کشی و نورمخفی',
          desc: 'نصب و اجرای میدانی در تبریز — هماهنگی مستقیم از واتساپ خدمات فنی.',
          cta: 'رفتن به خدمات فنی'
        }
      },
      overview: {
        eyebrow: 'نمای کلی',
        title: 'شش محور خدمات بیزدوار',
        desc: 'دیجیتال و نرم‌افزار در بالا — طراحی سایت انگلیسی برای اروپا/آمریکا؛ خدمات فنی تبریز در پایین.'
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
        { title: 'Fast Web Studio', url: 'fast', desc: 'سایت انگلیسی از $99 / ~€90' },
        { title: 'مقاله طراحی US/EU', url: 'articles/website-design-us-eu', desc: 'فاکتور دلار یا یورو' },
        { title: 'مقاله Ads آمریکا و اروپا', url: 'articles/digital-marketing-us-eu', desc: 'Google، Meta، LinkedIn' },
        { title: 'تماس — پیشنهاد وب', url: 'contact?service=web-design', desc: 'فاکتور USD یا EUR' }
      ],
      geoText: 'خدمات دیجیتال و فنی بیزدوار — تمرکز اجرایی تبریز؛ واتساپ تخصصی خدمات فنی.'
    },
    tr: {
      hero: {
        tag: 'Hizmetlerimiz',
        title: 'Avrupa ve ABD için web tasarım ve dijital hizmetler',
        desc: 'İngilizce site, web app ve pazarlama kampanyası — fatura <strong>USD veya EUR</strong>. Ayrıca uygulama, sunucu, SMM ve Tebriz teknik hizmetleri. Hızlı plan: <a href="fast">$99 / ~€90</a>. Ürünler <a href="products">ürünler sayfasında</a>.',
        ctaPrimary: 'Web tasarım danışmanlığı',
        ctaWeb: 'Siteler $99’dan',
        ctaField: 'Teknik WhatsApp'
      },
      paths: {
        digital: {
          eyebrow: 'Dijital yol',
          title: 'Web, pazarlama, uygulama, sunucu ve SMM',
          desc: 'ABD/AB İngilizce siteden USD/EUR kampanyaya ve yazılım teslimine — online işiniz için tek ekip.',
          cta: 'Web tasarımla başla'
        },
        field: {
          eyebrow: 'Teknik yol',
          title: 'CCTV, tesisat ve gizli aydınlatma',
          desc: 'Tebriz’de saha kurulumu — doğrudan teknik WhatsApp ile koordinasyon.',
          cta: 'Teknik hizmetlere git'
        }
      },
      overview: {
        eyebrow: 'Genel bakış',
        title: 'Altı Bizdavar hizmet alanı',
        desc: 'Dijital ve yazılım üstte — saha teknik hizmetleri aşağıda, özel teknik WhatsApp ile.'
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
        { title: 'Fast Web Studio', url: 'fast', desc: 'İngilizce site $99 / ~€90’dan' },
        { title: 'ABD/AB web yazısı', url: 'articles/website-design-us-eu', desc: 'USD veya EUR fatura' },
        { title: 'ABD/AB Ads yazısı', url: 'articles/digital-marketing-us-eu', desc: 'Google, Meta, LinkedIn' },
        { title: 'İletişim — web teklifi', url: 'contact?service=web-design', desc: 'Fatura USD veya EUR' }
      ]
    },
    en: {
      hero: {
        tag: 'Our services',
        title: 'Web design & digital services for US and EU clients',
        desc: 'English websites, web apps and growth campaigns invoiced in <strong>USD or EUR</strong> — plus apps, servers, SMM and field installs in Tabriz. Fast sites from <a href="fast">$99 / ~€90</a>. Products live on the <a href="products">products page</a>.',
        ctaPrimary: 'Get a website quote',
        ctaWeb: '5-day sites from $99',
        ctaField: 'Technical WhatsApp'
      },
      paths: {
        digital: {
          eyebrow: 'Digital path',
          title: 'Web design, marketing, apps & SMM',
          desc: 'From English US/EU sites to dollar/euro campaigns and software delivery — one team for your online stack.',
          cta: 'Start with a website quote'
        },
        field: {
          eyebrow: 'Field path',
          title: 'CCTV, wiring & cove lighting',
          desc: 'On-site installs in Tabriz — coordinate directly via technical WhatsApp.',
          cta: 'Go to technical services'
        }
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Six Bizdavar service areas',
        desc: 'Digital and software first — English web for US/EU, then on-site technical services in Tabriz.'
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
        title: 'How we work with US and EU clients',
        desc: 'Currency, scope and Zoom time are locked in writing before kickoff.',
        steps: [
          { title: 'Discovery call', desc: 'Zoom or Meet in CET/EST overlap — goals, invoice currency and timeline' },
          { title: 'Written quote', desc: 'Scope, USD or EUR price and delivery date before we start' },
          { title: 'Build', desc: 'English LTR site or ads account — daily progress on the same channel' },
          { title: 'Launch & report', desc: 'Go-live, CMS training, GA4 or Ads reporting' }
        ]
      },
      cta: {
        title: 'Need a tailored solution?',
        desc: 'Digital consulting or technical services — see work in the <a href="portfolio">portfolio</a>',
        btn: 'Free consultation',
        btnSecondary: 'View portfolio'
      },
      relatedLinks: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'English sites from $99 / ~€90' },
        { title: 'US/EU website article', url: 'articles/website-design-us-eu', desc: 'Invoice in USD or EUR' },
        { title: 'US/EU ads article', url: 'articles/digital-marketing-us-eu', desc: 'Google, Meta, LinkedIn' },
        { title: 'Contact — website quote', url: 'contact?service=web-design', desc: 'Invoice in USD or EUR' }
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
      fieldImgAlt: 'نصب دوربین مدار بسته و نورمخفی — تبریز'
    },
    tr: {
      dmImgAlt: 'Dijital pazarlama — Bizdavar',
      webImgAlt: 'Web ve web uygulaması — Bizdavar',
      appsImgAlt: 'Android, iOS ve kurumsal sistem',
      serverImgAlt: 'Sunucu yönetimi',
      smmImgAlt: 'SMM yönetimi',
      fieldImgAlt: 'CCTV ve gizli aydınlatma — Tebriz'
    },
    en: {
      dmImgAlt: 'Digital marketing — Bizdavar',
      webImgAlt: 'Web design and web apps — Bizdavar',
      appsImgAlt: 'Android, iOS and business systems',
      serverImgAlt: 'Server management',
      smmImgAlt: 'Social media management',
      fieldImgAlt: 'CCTV and cove lighting — Tabriz'
    }
  };

  ['fa', 'tr', 'en'].forEach(lang => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.servicesPage = Object.assign({}, L.servicesPage || {}, pageMeta[lang], {
      intl: intl[lang],
      cards: cards[lang],
      blocks: blocks[lang],
      panels: Object.assign({}, (L.servicesPage && L.servicesPage.panels) || {}, panels[lang]),
      digitalMarketing: digitalMarketing[lang],
      softwareApps: softwareApps[lang],
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

  const intlHero = {
    ru: {
      tag: 'Наши услуги',
      title: 'Веб-дизайн и цифровые услуги для клиентов в США и ЕС',
      desc: 'Английские сайты, web app и кампании роста со счётом в <strong>USD или EUR</strong> — плюс приложения, серверы, SMM и монтаж в Тебризе. Быстрые сайты от <a href="fast">$99 / ~€90</a>. Продукты — на <a href="products">странице продуктов</a>.',
      ctaPrimary: 'Запросить оценку сайта',
      ctaWeb: 'Сайт за 5 дней от $99',
      ctaField: 'Технический WhatsApp'
    },
    ar: {
      tag: 'خدماتنا',
      title: 'تصميم مواقع وخدمات رقمية لعملاء أمريكا وأوروبا',
      desc: 'مواقع إنجليزية وويب آب وحملات نمو بفاتورة <strong>USD أو EUR</strong> — مع تطبيقات وخوادم وSMM وتركيبات في تبريز. مواقع سريعة من <a href="fast">$99 / ~€90</a>. المنتجات في <a href="products">صفحة المنتجات</a>.',
      ctaPrimary: 'اطلب عرض تصميم موقع',
      ctaWeb: 'مواقع خلال ٥ أيام من ٩٩$',
      ctaField: 'واتساب فني'
    }
  };

  ['ru', 'ar'].forEach(lang => {
    const L = window.BIZDAVAR_LOCALES[lang];
    const enPage = window.BIZDAVAR_LOCALES.en && window.BIZDAVAR_LOCALES.en.servicesPage;
    if (!L || !enPage) return;
    L.servicesPage = Object.assign({}, JSON.parse(JSON.stringify(enPage)), {
      intl: intl[lang] || enPage.intl,
      hero: Object.assign({}, enPage.hero, intlHero[lang] || {})
    });
  });
})();
