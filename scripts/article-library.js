/**
 * Source of truth for blog articles (FA crawlable HTML + locale bodies).
 * Used by scripts/regenerate-articles.js
 */
function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function fig(src, alt, cap) {
  return `<figure class="article__figure"><img src="${src}" alt="${esc(alt)}" width="960" height="540" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
}

const ARTICLES = [
  {
    file: 'what-is-digital-marketing.html',
    slug: 'what-is-digital-marketing',
    seoKey: 'articleWhatIsDm',
    date: '2025-02-10',
    modified: '2026-08-26',
    image: 'assets/images/content/network-map.svg',
    extraImg: 'assets/images/content/services-dm-visual.svg',
    category: { fa: 'بازاریابی دیجیتال', tr: 'Dijital pazarlama', en: 'Digital marketing', ru: 'Цифровой маркетинг', ar: 'التسويق الرقمي' },
    title: {
      fa: 'دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها',
      tr: 'Dijital pazarlama nedir? İşletmeler için tam rehber',
      en: 'What is digital marketing? A complete guide for businesses',
      ru: 'Что такое цифровой маркетинг? Полный гид для бизнеса',
      ar: 'ما هو التسويق الرقمي؟ دليل كامل للأعمال'
    },
    description: {
      fa: 'دیجیتال مارکتینگ چیست: سئو، گوگل ادز، SMM، محتوا و سنجش لید — مسیر عملی بیزدوار برای ایران و ترکیه.',
      tr: 'Dijital pazarlama nedir: SEO, Google Ads, SMM, içerik ve lead ölçümü — İran ve Türkiye için Bizdavar yolu.',
      en: 'What digital marketing is: SEO, Google Ads, SMM, content and lead measurement — Bizdavar’s path for Iran and Turkey.',
      ru: 'Что такое цифровой маркетинг: SEO, Google Ads, SMM, контент и измерение лидов — путь Bizdavar для Ирана и Турции.',
      ar: 'ما هو التسويق الرقمي: سيو وإعلانات جوجل وSMM والمحتوى وقياس العملاء — مسار بيزدوار لإيران وتركيا.'
    },
    keywords: {
      fa: 'دیجیتال مارکتینگ چیست, بازاریابی دیجیتال, سئو, تبلیغات گوگل, SMM, CRO, بیزدوار',
      tr: 'dijital pazarlama nedir, SEO, Google Ads, SMM, CRO, Bizdavar',
      en: 'what is digital marketing, SEO, Google Ads, SMM, CRO, Bizdavar',
      ru: 'что такое цифровой маркетинг, SEO, Google Ads, SMM, CRO, Bizdavar',
      ar: 'ما هو التسويق الرقمي, سيو, إعلانات جوجل, SMM, CRO, بيزدوار'
    },
    tags: {
      fa: ['دیجیتال مارکتینگ', 'سئو', 'SMM', 'CRO', 'گوگل ادز'],
      tr: ['Dijital pazarlama', 'SEO', 'SMM', 'CRO', 'Google Ads'],
      en: ['Digital marketing', 'SEO', 'SMM', 'CRO', 'Google Ads'],
      ru: ['Цифровой маркетинг', 'SEO', 'SMM', 'CRO', 'Google Ads'],
      ar: ['تسويق رقمي', 'سيو', 'SMM', 'CRO', 'إعلانات جوجل']
    },
    toc: {
      fa: [['ch-def', 'تعریف عملی'], ['ch-channels', 'کانال‌ها'], ['ch-measure', 'سنجش و قیف'], ['ch-vs', 'تفاوت با بازاریابی سنتی'], ['ch-region', 'ایران و ترکیه'], ['ch-start', 'از کجا شروع کنیم'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-def', 'Pratik tanım'], ['ch-channels', 'Kanallar'], ['ch-measure', 'Ölçüm ve huni'], ['ch-vs', 'Geleneksel pazarlama'], ['ch-region', 'İran ve Türkiye'], ['ch-start', 'Nereden başlamalı'], ['ch-faq', 'SSS']],
      en: [['ch-def', 'Working definition'], ['ch-channels', 'Channels'], ['ch-measure', 'Measurement and funnel'], ['ch-vs', 'Vs traditional'], ['ch-region', 'Iran and Turkey'], ['ch-start', 'Where to start'], ['ch-faq', 'FAQ']],
      ru: [['ch-def', 'Рабочее определение'], ['ch-channels', 'Каналы'], ['ch-measure', 'Измерение и воронка'], ['ch-vs', 'Vs традиционный'], ['ch-region', 'Иран и Турция'], ['ch-start', 'С чего начать'], ['ch-faq', 'FAQ']],
      ar: [['ch-def', 'تعريف عملي'], ['ch-channels', 'القنوات'], ['ch-measure', 'القياس والقمع'], ['ch-vs', 'مقابل التقليدي'], ['ch-region', 'إيران وتركيا'], ['ch-start', 'من أين تبدأ'], ['ch-faq', 'أسئلة شائعة']]
    },
    faq: {
      fa: [
        { q: 'دیجیتال مارکتینگ فقط اینستاگرام است؟', a: 'خیر. وبسایت، سئو، تبلیغات جستجو، ایمیل و SMM با هم قیف فروش را می‌سازند. اینستاگرام یک کانال است، نه کل استراتژی.' },
        { q: 'برای کسب‌وکار B2B صنعتی هم لازم است؟', a: 'بله. خریدار صنعتی هم جستجو می‌کند؛ صفحه محصول، مقاله تخصصی و واتساپ مسیر استعلام را کوتاه می‌کند.' },
        { q: 'اول سئو کنیم یا تبلیغ بزنیم؟', a: 'اول صفحه خدمت سریع با فرم/واتساپ و اندازه‌گیری تبدیل؛ بعد بودجه آزمایشی تبلیغ. سئو موازی جلو می‌رود اما تبلیغ روی لندینگ ضعیف پول را می‌سوزاند.' },
        { q: 'با بودجه کم از کجا شروع کنیم؟', a: 'یک لندینگ شفاف، دو مقاله خوشه‌ای، و واتساپ در هدر. بعد از ثبت لید واقعی، بودجه گوگل ادز را هفته‌ای تنظیم کنید.' },
        { q: 'نتیجه را کی می‌بینیم؟', a: 'تبلیغات جستجو در روزهای اول لید می‌آورد اگر صفحه فرود درست باشد. سئو معمولاً هفته‌ها تا چند ماه. معیار باید هزینه هر لید و پاسخ واتساپ باشد، نه لایک.' }
      ],
      tr: [
        { q: 'Dijital pazarlama yalnızca Instagram mı?', a: 'Hayır. Site, SEO, arama reklamı, e-posta ve SMM birlikte satış hunisini kurar. Instagram bir kanaldır, tüm strateji değil.' },
        { q: 'B2B sanayi için de gerekir mi?', a: 'Evet. Alıcı da arama yapar; ürün sayfası, uzman makale ve WhatsApp teklif yolunu kısaltır.' },
        { q: 'Önce SEO mu reklam mı?', a: 'Önce hızlı hizmet sayfası, form/WhatsApp ve dönüşüm ölçümü; sonra deneme reklam bütçesi. Zayıf landing’de reklam para yakar.' },
        { q: 'Küçük bütçeyle nereden başlamalı?', a: 'Net bir landing, iki küme makalesi ve başlıkta WhatsApp. Gerçek lead gelince Google Ads’i haftalık ayarlayın.' },
        { q: 'Sonuç ne zaman görünür?', a: 'Arama reklamı, landing doğruysa ilk günlerde lead getirir. SEO haftalar veya aylar sürer. Ölçüt lead maliyeti ve WhatsApp yanıtıdır, beğeni değil.' }
      ],
      en: [
        { q: 'Is digital marketing only Instagram?', a: 'No. Website, SEO, search ads, email and SMM together build the sales funnel. Instagram is one channel, not the whole strategy.' },
        { q: 'Does B2B industry need it?', a: 'Yes. Industrial buyers still search; a product page, expert article and WhatsApp shorten the quote path.' },
        { q: 'SEO first or ads first?', a: 'First a fast service page with form/WhatsApp and conversion tracking; then a test ad budget. Ads on a weak landing burn money. SEO runs in parallel.' },
        { q: 'Where do we start on a small budget?', a: 'One clear landing, two cluster articles, WhatsApp in the header. After real leads arrive, tune Google Ads weekly.' },
        { q: 'When do we see results?', a: 'Search ads can bring leads in days if the landing is right. SEO usually takes weeks to months. Measure cost per lead and WhatsApp reply rate, not likes.' }
      ],
      ru: [
        { q: 'Это только Instagram?', a: 'Нет. Сайт, SEO, поисковая реклама, email и SMM вместе собирают воронку. Instagram — один канал, не вся стратегия.' },
        { q: 'Нужно ли B2B промышленности?', a: 'Да. Закупщик тоже ищет; страница продукта, экспертная статья и WhatsApp ускоряют запрос.' },
        { q: 'Сначала SEO или реклама?', a: 'Сначала быстрая страница услуги с формой/WhatsApp и учётом конверсий; потом тестовый бюджет. Реклама на слабом лендинге сжигает деньги.' },
        { q: 'С чего начать при малом бюджете?', a: 'Один понятный лендинг, две кластерные статьи и WhatsApp в шапке. Когда появятся реальные лиды — настраивайте Google Ads еженедельно.' },
        { q: 'Когда будут результаты?', a: 'Поисковая реклама даёт лиды за дни, если лендинг верный. SEO — недели или месяцы. Смотрите стоимость лида и ответ в WhatsApp, не лайки.' }
      ],
      ar: [
        { q: 'هل التسويق الرقمي إنستغرام فقط؟', a: 'لا. الموقع وSEO وإعلانات البحث والبريد وSMM معاً يبنون مسار البيع. إنستغرام قناة واحدة وليست الاستراتيجية كلها.' },
        { q: 'هل تحتاجه الصناعة B2B؟', a: 'نعم. المشتري الصناعي يبحث أيضاً؛ صفحة المنتج ومقالة متخصصة وواتساب تختصر مسار الاستعلام.' },
        { q: 'السيو أولاً أم الإعلانات؟', a: 'أولاً صفحة خدمة سريعة مع نموذج/واتساب وقياس التحويل؛ ثم ميزانية إعلان تجريبية. الإعلان على صفحة ضعيفة يحرق المال.' },
        { q: 'من أين نبدأ بميزانية صغيرة؟', a: 'صفحة هبوط واضحة، مقالتان عنقودية، وواتساب في الترويسة. بعد وصول عملاء حقيقيين اضبطوا إعلانات جوجل أسبوعياً.' },
        { q: 'متى تظهر النتائج؟', a: 'إعلانات البحث تجلب عملاء خلال أيام إذا كانت الصفحة صحيحة. السيو يحتاج أسابيع أو أشهراً. المعيار تكلفة العميل ونسبة الرد على واتساب لا الإعجابات.' }
      ]
    },
    sources: [
      {
        href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
        label: {
          fa: 'راهنمای شروع سئو گوگل',
          tr: 'Google SEO Başlangıç Rehberi',
          en: 'Google SEO Starter Guide',
          ru: 'Google SEO Starter Guide',
          ar: 'دليل Google للبدء في السيو'
        }
      },
      {
        href: 'https://support.google.com/google-ads/answer/6243030',
        label: {
          fa: 'گوگل ادز چگونه کار می‌کند',
          tr: 'Google Ads nasıl çalışır',
          en: 'How Google Ads works',
          ru: 'Как работает Google Ads',
          ar: 'كيف تعمل إعلانات Google'
        }
      },
      {
        href: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
        label: {
          fa: 'نسخه‌های زبانی و hreflang (گوگل)',
          tr: 'Yerelleştirilmiş sürümler ve hreflang (Google)',
          en: 'Google: localized versions (hreflang)',
          ru: 'Google: локализованные версии (hreflang)',
          ar: 'إصدارات محلية وhreflang (جوجل)'
        }
      }
    ],
    related: [
      {
        url: 'digital-marketing',
        title: {
          fa: 'افزایش فروش با دیجیتال مارکتینگ',
          tr: 'Dijital pazarlama satışları nasıl artırır',
          en: 'How digital marketing increases sales',
          ru: 'Как маркетинг увеличивает продажи',
          ar: 'كيف يزيد التسويق الرقمي المبيعات'
        },
        desc: {
          fa: 'CRO و قیف فروش',
          tr: 'CRO ve satış hunisi',
          en: 'CRO and the sales funnel',
          ru: 'CRO и воронка продаж',
          ar: 'CRO وقمع المبيعات'
        }
      },
      {
        url: '../services#digital-marketing',
        title: {
          fa: 'خدمات بازاریابی دیجیتال',
          tr: 'Dijital pazarlama hizmetleri',
          en: 'Digital marketing services',
          ru: 'Услуги цифрового маркетинга',
          ar: 'خدمات التسويق الرقمي'
        },
        desc: {
          fa: 'اجرا با تیم بیزدوار',
          tr: 'Bizdavar ile uygulama',
          en: 'Execution with the Bizdavar team',
          ru: 'Внедрение с командой Bizdavar',
          ar: 'التنفيذ مع فريق بيزدوار'
        }
      },
      {
        url: '../contact?service=digital-marketing',
        title: {
          fa: 'استعلام کمپین',
          tr: 'Kampanya talebi',
          en: 'Campaign inquiry',
          ru: 'Запрос кампании',
          ar: 'استعلام الحملة'
        },
        desc: {
          fa: 'شروع مشاوره رایگان',
          tr: 'Ücretsiz danışmanlık',
          en: 'Start a free consultation',
          ru: 'Бесплатная консультация',
          ar: 'ابدأ استشارة مجانية'
        }
      }
    ]
  },
  {
    file: 'digital-marketing.html',
    slug: 'digital-marketing',
    seoKey: 'articleDigitalMarketing',
    date: '2025-04-01',
    modified: '2026-08-24',
    image: 'assets/images/content/services-dm-visual.svg',
    extraImg: 'assets/images/content/network-map.svg',
    category: { fa: 'بازاریابی دیجیتال', tr: 'Dijital pazarlama', en: 'Digital marketing', ru: 'Цифровой маркетинг', ar: 'التسويق الرقمي' },
    title: {
      fa: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟',
      tr: 'Dijital pazarlama satışları nasıl artırır?',
      en: 'How digital marketing increases sales',
      ru: 'Как цифровой маркетинг увеличивает продажи',
      ar: 'كيف يزيد التسويق الرقمي المبيعات'
    },
    description: {
      fa: 'قیف فروش، CRO، تبلیغات هدفمند و پیگیری لید — مسیر عملی افزایش فروش آنلاین با بیزدوار.',
      tr: 'Satış hunisi, CRO, hedefli reklam ve lead takibi — Bizdavar ile pratik büyüme.',
      en: 'Sales funnel, CRO, targeted ads and lead follow-up — a practical growth path with Bizdavar.',
      ru: 'Воронка, CRO, реклама и сопровождение лидов — практический рост с Bizdavar.',
      ar: 'قمع المبيعات وCRO والإعلانات ومتابعة العملاء — مسار نمو عملي مع بيزدوار.'
    },
    keywords: {
      fa: 'افزایش فروش آنلاین, CRO, قیف فروش, تبلیغات گوگل, بیزدوار',
      tr: 'online satış, CRO, satış hunisi, Google Ads, Bizdavar',
      en: 'increase online sales, CRO, sales funnel, Google Ads, Bizdavar',
      ru: 'рост онлайн продаж, CRO, воронка, Google Ads, Bizdavar',
      ar: 'زيادة المبيعات, CRO, قمع المبيعات, إعلانات جوجل, بيزدوار'
    },
    tags: {
      fa: ['CRO', 'فروش آنلاین', 'تبلیغات', 'لندینگ'],
      tr: ['CRO', 'Online satış', 'Reklam', 'Landing'],
      en: ['CRO', 'Online sales', 'Ads', 'Landing'],
      ru: ['CRO', 'Онлайн-продажи', 'Реклама', 'Лендинг'],
      ar: ['CRO', 'مبيعات أونلاين', 'إعلانات', 'صفحة هبوط']
    },
    toc: {
      fa: [['ch-funnel', 'قیف فروش'], ['ch-cro', 'نرخ تبدیل'], ['ch-ads', 'تبلیغات'], ['ch-follow', 'پیگیری'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-funnel', 'Huni'], ['ch-cro', 'Dönüşüm'], ['ch-ads', 'Reklam'], ['ch-follow', 'Takip'], ['ch-faq', 'SSS']],
      en: [['ch-funnel', 'Funnel'], ['ch-cro', 'CRO'], ['ch-ads', 'Ads'], ['ch-follow', 'Follow-up'], ['ch-faq', 'FAQ']],
      ru: [['ch-funnel', 'Воронка'], ['ch-cro', 'CRO'], ['ch-ads', 'Реклама'], ['ch-follow', 'Сопровождение'], ['ch-faq', 'FAQ']],
      ar: [['ch-funnel', 'القمع'], ['ch-cro', 'التحويل'], ['ch-ads', 'الإعلانات'], ['ch-follow', 'المتابعة'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'اول سایت را درست کنیم یا تبلیغ بزنیم؟', a: 'اول لندینگ سریع و فرم/واتساپ؛ بعد بودجه تبلیغ. در غیر این صورت کلیک هدر می‌رود.' },
        { q: 'گزارش ROI را چطور می‌بینیم؟', a: 'منبع لید، نرخ پاسخ واتساپ و فروش بسته شده — نه فقط بازدید صفحه.' }
      ],
      tr: [
        { q: 'Önce site mi reklam mı?', a: 'Önce hızlı landing ve form/WhatsApp; sonra reklam bütçesi.' },
        { q: 'ROI nasıl bakılır?', a: 'Lead kaynağı, WhatsApp yanıt oranı ve kapanan satış — sadece trafik değil.' }
      ],
      en: [
        { q: 'Fix the site or run ads first?', a: 'First a fast landing plus form/WhatsApp; then ad spend.' },
        { q: 'How do we see ROI?', a: 'Lead source, WhatsApp reply rate and closed sales — not traffic alone.' }
      ],
      ru: [
        { q: 'Сначала сайт или реклама?', a: 'Сначала быстрый лендинг и WhatsApp; потом бюджет.' },
        { q: 'Как считать ROI?', a: 'Источник лида, ответ в WhatsApp и закрытые сделки.' }
      ],
      ar: [
        { q: 'الموقع أولاً أم الإعلان؟', a: 'أولاً صفحة سريعة وواتساب؛ ثم ميزانية الإعلان.' },
        { q: 'كيف نرى العائد؟', a: 'مصدر العميل ونسبة الرد والمبيعات المغلقة — لا الزيارات وحدها.' }
      ]
    },
    related: [
      { title: 'خدمات دیجیتال مارکتینگ', url: '../services#digital-marketing', desc: 'کمپین و CRO' },
      { title: 'Fast Web Studio', url: '../fast', desc: 'لندینگ فروش' },
      { title: 'استعلام', url: '../contact?service=digital-marketing', desc: 'شروع کمپین' }
    ]
  },
  {
    file: 'social-media-management.html',
    slug: 'social-media-management',
    seoKey: 'articleSmm',
    date: '2025-03-05',
    modified: '2026-08-24',
    image: 'assets/images/content/services-smm-mockup.svg',
    extraImg: 'assets/images/content/network-map.svg',
    category: { fa: 'مدیریت SMM', tr: 'SMM yönetimi', en: 'SMM', ru: 'SMM', ar: 'إدارة SMM' },
    title: {
      fa: 'مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها',
      tr: 'Sosyal medya yönetimi — markalar için SMM stratejisi',
      en: 'Social media management — SMM strategy for brands',
      ru: 'Управление соцсетями — SMM-стратегия для брендов',
      ar: 'إدارة التواصل الاجتماعي — استراتيجية SMM للعلامات'
    },
    description: {
      fa: 'تقویم محتوا، هویت بصری، ریلز و تبلیغات هدفمند اینستاگرام و لینکدین برای برند B2B و B2C — تجربه بیزدوار.',
      tr: 'İçerik takvimi, görsel kimlik, Reels ve Instagram/LinkedIn reklamı — Bizdavar SMM.',
      en: 'Content calendar, visual identity, Reels and Instagram/LinkedIn ads — Bizdavar SMM.',
      ru: 'Контент-план, визуал, Reels и реклама Instagram/LinkedIn — SMM Bizdavar.',
      ar: 'تقويم المحتوى والهوية البصرية وReels وإعلانات إنستغرام ولينكدإن — SMM بيزدوار.'
    },
    keywords: {
      fa: 'مدیریت شبکه اجتماعی, SMM, اینستاگرام B2B, لینکدین, بیزدوار',
      tr: 'sosyal medya yönetimi, SMM, Instagram B2B, LinkedIn, Bizdavar',
      en: 'social media management, SMM, B2B Instagram, LinkedIn, Bizdavar',
      ru: 'SMM, Instagram B2B, LinkedIn, Bizdavar',
      ar: 'إدارة سوشيال ميديا, SMM, إنستغرام B2B, لينكدإن, بيزدوار'
    },
    tags: {
      fa: ['SMM', 'اینستاگرام', 'لینکدین', 'محتوای B2B'],
      tr: ['SMM', 'Instagram', 'LinkedIn', 'B2B içerik'],
      en: ['SMM', 'Instagram', 'LinkedIn', 'B2B content'],
      ru: ['SMM', 'Instagram', 'LinkedIn', 'B2B-контент'],
      ar: ['SMM', 'إنستغرام', 'لينكدإن', 'محتوى B2B']
    },
    toc: {
      fa: [['ch-plan', 'استراتژی محتوا'], ['ch-design', 'طراحی'], ['ch-ads', 'تبلیغات'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-plan', 'İçerik stratejisi'], ['ch-design', 'Tasarım'], ['ch-ads', 'Reklam'], ['ch-faq', 'SSS']],
      en: [['ch-plan', 'Content strategy'], ['ch-design', 'Design'], ['ch-ads', 'Ads'], ['ch-faq', 'FAQ']],
      ru: [['ch-plan', 'Контент'], ['ch-design', 'Дизайн'], ['ch-ads', 'Реклама'], ['ch-faq', 'FAQ']],
      ar: [['ch-plan', 'استراتيجية المحتوى'], ['ch-design', 'التصميم'], ['ch-ads', 'الإعلانات'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'چند پست در هفته کافی است؟', a: 'ثبات مهم‌تر از تعداد است؛ برای B2B معمولاً ۳ تا ۵ انتشار هدفمند بهتر از روزانهٔ بی‌برنامه است.' },
        { q: 'نمونه کار SMM بیزدوار کجاست؟', a: 'پروژه آرشیو <a href="/pages/biztejarat">بیزتجارت</a> مدل محتوای صنعتی را نشان می‌دهد.' }
      ],
      tr: [
        { q: 'Haftada kaç gönderi?', a: 'Süreklilik sayıdan önemli; B2B’de 3–5 hedefli yayın plansız günlük paylaşımı yener.' },
        { q: 'SMM örneği nerede?', a: '<a href="/pages/biztejarat">Biztejarat</a> arşivi endüstriyel içerik modelini gösterir.' }
      ],
      en: [
        { q: 'How many posts per week?', a: 'Consistency beats volume; for B2B, 3–5 targeted posts beat unplanned daily posting.' },
        { q: 'Where is an SMM sample?', a: 'The archived <a href="/pages/biztejarat">Biztejarat</a> project shows industrial content.' }
      ],
      ru: [
        { q: 'Сколько постов в неделю?', a: 'Стабильность важнее числа; для B2B 3–5 целевых публикаций лучше хаоса.' },
        { q: 'Где пример SMM?', a: 'Архив <a href="/pages/biztejarat">Biztejarat</a> показывает промышленный контент.' }
      ],
      ar: [
        { q: 'كم منشوراً أسبوعياً؟', a: 'الثبات أهم من العدد؛ في B2B يكفي ٣–٥ نشرات موجّهة.' },
        { q: 'أين نموذج SMM؟', a: 'مشروع <a href="/pages/biztejarat">Biztejarat</a> المؤرشف يعرض محتوى صناعياً.' }
      ]
    },
    related: [
      { title: 'خدمات SMM', url: '../services#smm', desc: 'تولید محتوا و تبلیغات' },
      { title: 'نمونه‌کار بیزتجارت', url: '../biztejarat', desc: 'اینستاگرام B2B' },
      { title: 'استعلام SMM', url: '../contact?service=smm', desc: 'شروع همکاری' }
    ]
  },
  {
    file: 'fast-studio.html',
    slug: 'fast-studio',
    seoKey: 'articleFastStudio',
    date: '2025-05-15',
    modified: '2026-08-24',
    image: 'assets/images/content/related-thumb-fast.svg',
    extraImg: 'assets/images/content/services-web-mockup.svg',
    category: { fa: 'طراحی وب', tr: 'Web tasarım', en: 'Web design', ru: 'Веб-дизайн', ar: 'تصميم ويب' },
    title: {
      fa: 'راه‌اندازی سایت در ۵ روز — راهنمای کامل Fast Studio',
      tr: '5 günde site — Fast Studio rehberi',
      en: 'Launch a website in 5 days — Fast Studio guide',
      ru: 'Сайт за 5 дней — гид Fast Studio',
      ar: 'إطلاق موقع خلال ٥ أيام — دليل Fast Studio'
    },
    description: {
      fa: 'پلن‌های Fast Web Studio از ۹۹ تا ۲۹۹ دلار: سایت شرکتی، فروشگاهی و حرفه‌ای در ۵ روز کاری با RTL و سئو پایه.',
      tr: 'Fast Web Studio $99–$299: kurumsal, mağaza ve profesyonel site — 5 iş günü, RTL ve temel SEO.',
      en: 'Fast Web Studio $99–$299: company, shop and pro sites in 5 working days with RTL and baseline SEO.',
      ru: 'Fast Web Studio $99–$299: корпоратив, магазин и pro за 5 рабочих дней — RTL и базовое SEO.',
      ar: 'Fast Web Studio من ٩٩ إلى ٢٩٩$: موقع شركة أو متجر خلال ٥ أيام عمل مع RTL وSEO أساسي.'
    },
    keywords: {
      fa: 'طراحی سایت ۵ روز, Fast Web Studio, قیمت طراحی سایت, ووکامرس, بیزدوار',
      tr: '5 günde web sitesi, Fast Web Studio, WooCommerce, Bizdavar',
      en: 'website in 5 days, Fast Web Studio, WooCommerce, Bizdavar',
      ru: 'сайт за 5 дней, Fast Web Studio, WooCommerce, Bizdavar',
      ar: 'موقع خلال ٥ أيام, Fast Web Studio, ووكومرس, بيزدوار'
    },
    tags: {
      fa: ['Fast Studio', 'RTL', 'ووکامرس', 'سئو پایه'],
      tr: ['Fast Studio', 'RTL', 'WooCommerce', 'SEO'],
      en: ['Fast Studio', 'RTL', 'WooCommerce', 'SEO'],
      ru: ['Fast Studio', 'RTL', 'WooCommerce', 'SEO'],
      ar: ['Fast Studio', 'RTL', 'ووكومرس', 'سيو']
    },
    toc: {
      fa: [['ch-base', 'پلن پایه'], ['ch-shop', 'فروشگاهی'], ['ch-pro', 'حرفه‌ای'], ['ch-after', 'بعد از تحویل'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-base', 'Temel plan'], ['ch-shop', 'Mağaza'], ['ch-pro', 'Pro'], ['ch-after', 'Teslim sonrası'], ['ch-faq', 'SSS']],
      en: [['ch-base', 'Basic'], ['ch-shop', 'Shop'], ['ch-pro', 'Pro'], ['ch-after', 'After delivery'], ['ch-faq', 'FAQ']],
      ru: [['ch-base', 'Базовый'], ['ch-shop', 'Магазин'], ['ch-pro', 'Pro'], ['ch-after', 'После сдачи'], ['ch-faq', 'FAQ']],
      ar: [['ch-base', 'الأساسي'], ['ch-shop', 'المتجر'], ['ch-pro', 'الاحترافي'], ['ch-after', 'بعد التسليم'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: '۵ روز شامل محتوا هم می‌شود؟', a: 'ساختار، قالب RTL و صفحات توافق‌شده؛ متن و عکس را شما یا تیم محتوا می‌دهد تا زمان‌بندی قفل بماند.' },
        { q: 'سئو کامل در پلن ۹۹ هست؟', a: 'سئو پایه (عنوان، توضیحات، سرعت، موبایل). سئو محتوا و لینک‌سازی جداگانه در <a href="/pages/services#digital-marketing">خدمات بازاریابی</a> است.' }
      ],
      tr: [
        { q: '5 güne içerik dahil mi?', a: 'Yapı, RTL şablon ve kararlaştırılan sayfalar; metin/görseli siz veya içerik ekibi verir.' },
        { q: '$99’da tam SEO var mı?', a: 'Temel SEO. İçerik ve backlink <a href="/pages/services#digital-marketing">pazarlama hizmetinde</a>.' }
      ],
      en: [
        { q: 'Does 5 days include copy?', a: 'Structure, RTL theme and agreed pages; you (or content team) supply text and photos.' },
        { q: 'Is full SEO in the $99 plan?', a: 'Baseline SEO only. Content SEO sits in <a href="/pages/services#digital-marketing">marketing services</a>.' }
      ],
      ru: [
        { q: 'Тексты входят в 5 дней?', a: 'Каркас, RTL и согласованные страницы; тексты и фото даёте вы.' },
        { q: 'Полное SEO в $99?', a: 'Только база. Контент-SEO — в <a href="/pages/services#digital-marketing">маркетинге</a>.' }
      ],
      ar: [
        { q: 'هل النصوص ضمن ٥ أيام؟', a: 'الهيكل وقالب RTL والصفحات المتفق عليها؛ النصوص والصور منكم.' },
        { q: 'هل الـSEO الكامل في خطة ٩٩$؟', a: 'أساسي فقط. سيو المحتوى ضمن <a href="/pages/services#digital-marketing">خدمات التسويق</a>.' }
      ]
    },
    related: [
      { title: 'Fast Web Studio', url: '../fast', desc: 'پلن‌ها و قیمت' },
      { title: 'خدمات طراحی وب', url: '../services#web-design', desc: 'پروژه سفارشی' },
      { title: 'تماس', url: '../contact', desc: 'شروع پروژه' }
    ]
  },
  {
    file: 'industrial-sensors.html',
    slug: 'industrial-sensors',
    seoKey: 'articleIndustrialSensors',
    date: '2025-03-20',
    modified: '2026-08-24',
    image: 'assets/images/vega/blog-industrial-sensors.jpg',
    extraImg: 'assets/images/vega/product-vegapoint-21.png',
    category: { fa: 'تجهیزات صنعتی', tr: 'Endüstriyel ekipman', en: 'Industrial equipment', ru: 'Промоборудование', ar: 'معدات صناعية' },
    title: {
      fa: 'انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق',
      tr: 'Doğru endüstriyel sensör — VEGA ve enstrümantasyon',
      en: 'Choosing the right industrial sensor — VEGA and instrumentation',
      ru: 'Как выбрать промышленный датчик — VEGA и КИП',
      ar: 'اختيار الحساس الصناعي المناسب — VEGA والقياس'
    },
    description: {
      fa: 'مقایسه VEGAPULS، VEGABAR و VEGAPOINT برای سطح، فشار و نقطه سطح. گواهی Ex/SIL و مسیر استعلام با بیزدوار.',
      tr: 'VEGAPULS, VEGABAR ve VEGAPOINT karşılaştırması. Ex/SIL ve Bizdavar teklif yolu.',
      en: 'Compare VEGAPULS, VEGABAR and VEGAPOINT for level, pressure and switching. Ex/SIL and Bizdavar quoting.',
      ru: 'Сравнение VEGAPULS, VEGABAR и VEGAPOINT. Ex/SIL и запрос через Bizdavar.',
      ar: 'مقارنة VEGAPULS وVEGABAR وVEGAPOINT للمستوى والضغط ونقطة المستوى. Ex/SIL واستعلام بيزدوار.'
    },
    keywords: {
      fa: 'انتخاب سنسور VEGA, VEGAPULS, VEGABAR, VEGAPOINT, ابزار دقیق, بیزدوار',
      tr: 'VEGA sensör seçimi, VEGAPULS, VEGABAR, VEGAPOINT, Bizdavar',
      en: 'choose VEGA sensor, VEGAPULS, VEGABAR, VEGAPOINT, Bizdavar',
      ru: 'выбор датчика VEGA, VEGAPULS, VEGABAR, VEGAPOINT, Bizdavar',
      ar: 'اختيار حساس VEGA, VEGAPULS, VEGABAR, VEGAPOINT, بيزدوار'
    },
    tags: {
      fa: ['VEGA', 'ابزار دقیق', 'سطح', 'فشار'],
      tr: ['VEGA', 'Enstrümantasyon', 'Seviye', 'Basınç'],
      en: ['VEGA', 'Instrumentation', 'Level', 'Pressure'],
      ru: ['VEGA', 'КИП', 'Уровень', 'Давление'],
      ar: ['VEGA', 'قياس', 'مستوى', 'ضغط']
    },
    toc: {
      fa: [['ch-type', 'نوع اندازه‌گیری'], ['ch-safety', 'گواهی و ایمنی'], ['ch-supply', 'مسیر تامین'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-type', 'Ölçüm tipi'], ['ch-safety', 'Sertifika'], ['ch-supply', 'Tedarik'], ['ch-faq', 'SSS']],
      en: [['ch-type', 'Measurement type'], ['ch-safety', 'Certificates'], ['ch-supply', 'Supply path'], ['ch-faq', 'FAQ']],
      ru: [['ch-type', 'Тип измерения'], ['ch-safety', 'Сертификаты'], ['ch-supply', 'Поставка'], ['ch-faq', 'FAQ']],
      ar: [['ch-type', 'نوع القياس'], ['ch-safety', 'الشهادات'], ['ch-supply', 'مسار التوريد'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'رادار برای همه مخزن‌ها مناسب است؟', a: 'اغلب بله؛ کف متحرک، فوم و بخار را در استعلام بنویسید تا مدل VEGAPULS درست انتخاب شود.' },
        { q: 'اطلاعات فنی را از کجا بگیرم؟', a: 'کاتالوگ رسمی <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA</a> و صفحه <a href="/pages/vega">تامین VEGA بیزدوار</a>.' }
      ],
      tr: [
        { q: 'Radar her tank için uygun mu?', a: 'Çoğunlukla evet; köpük ve buharı teklifte yazın ki VEGAPULS doğru seçilsin.' },
        { q: 'Teknik bilgi nerede?', a: 'Resmi <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA</a> ve <a href="/pages/vega">Bizdavar VEGA</a>.' }
      ],
      en: [
        { q: 'Is radar right for every tank?', a: 'Often yes; mention foam, vapour and agitation so the VEGAPULS model is correct.' },
        { q: 'Where is technical data?', a: 'Official <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA</a> and <a href="/pages/vega">Bizdavar VEGA supply</a>.' }
      ],
      ru: [
        { q: 'Радар для любого резервуара?', a: 'Часто да; укажите пену и пар, чтобы выбрать VEGAPULS.' },
        { q: 'Где техданные?', a: 'Официальный <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA</a> и <a href="/pages/vega">поставка Bizdavar</a>.' }
      ],
      ar: [
        { q: 'هل الرادار لكل الخزانات؟', a: 'غالباً نعم؛ اذكر الرغوة والبخار لاختيار VEGAPULS الصحيح.' },
        { q: 'أين البيانات الفنية؟', a: '<a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA الرسمي</a> و<a href="/pages/vega">توريد بيزدوار</a>.' }
      ]
    },
    related: [
      { title: 'کاتالوگ VEGA', url: '../vega', desc: 'سنسور و ابزار دقیق' },
      { title: 'خدمات صنعتی', url: '../products#supply', desc: 'مشاوره B2B' },
      { title: 'تماس', url: '../contact', desc: 'استعلام قیمت' }
    ]
  },
  {
    file: 'about-bizdavar-group.html',
    slug: 'about-bizdavar-group',
    seoKey: 'articleAboutBizdavar',
    date: '2025-06-01',
    modified: '2026-08-24',
    image: 'assets/images/content/about-hero.jpg',
    extraImg: 'assets/images/gallery/expo-team-imen.jpg',
    category: { fa: 'درباره شرکت', tr: 'Şirket hakkında', en: 'About the company', ru: 'О компании', ar: 'عن الشركة' },
    title: {
      fa: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت',
      tr: 'Bizdavar Group nedir? Tarihçe, ekip ve faaliyetler',
      en: 'What is Bizdavar Group? History, team and activities',
      ru: 'Что такое Bizdavar Group? История, команда, направления',
      ar: 'ما هي Bizdavar Group؟ التاريخ والفريق والأنشطة'
    },
    description: {
      fa: 'شناسنامه بیزدوار: بنیان‌گذار ارسان جاهد تبریزی، خدمات دیجیتال، محصولات اختصاصی و تامین صنعتی در ۱۱ کشور.',
      tr: 'Bizdavar kimliği: kurucu Ersan Jahed Tabrizi, dijital hizmetler, özgün ürünler ve endüstriyel tedarik — 11 ülke.',
      en: 'Bizdavar profile: founder Ersan Jahed Tabrizi, digital services, owned products and industrial supply across 11 countries.',
      ru: 'Профиль Bizdavar: основатель Ersan Jahed Tabrizi, цифровые услуги, свои продукты и промпоставки в 11 странах.',
      ar: 'ملف بيزدوار: المؤسس Ersan Jahed Tabrizi، خدمات رقمية ومنتجات خاصة وتوريد صناعي في ١١ دولة.'
    },
    keywords: {
      fa: 'بیزدوار گروپ, Bizdavar Group, ارسان جاهد تبریزی, تامین صنعتی, بیزدوار',
      tr: 'Bizdavar Group, Ersan Jahed Tabrizi, endüstriyel tedarik',
      en: 'Bizdavar Group, Ersan Jahed Tabrizi, industrial supply',
      ru: 'Bizdavar Group, Ersan Jahed Tabrizi, промышленные поставки',
      ar: 'Bizdavar Group, Ersan Jahed Tabrizi, توريد صناعي'
    },
    tags: {
      fa: ['بیزدوار', 'درباره ما', '۱۱ کشور', 'B2B'],
      tr: ['Bizdavar', 'Hakkımızda', '11 ülke', 'B2B'],
      en: ['Bizdavar', 'About', '11 countries', 'B2B'],
      ru: ['Bizdavar', 'О нас', '11 стран', 'B2B'],
      ar: ['بيزدوار', 'من نحن', '١١ دولة', 'B2B']
    },
    toc: {
      fa: [['ch-who', 'چه کسی'], ['ch-work', 'چه کار می‌کنیم'], ['ch-why', 'چرا بیزدوار'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Kim'], ['ch-work', 'Ne yapıyoruz'], ['ch-why', 'Neden'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Who'], ['ch-work', 'What we do'], ['ch-why', 'Why us'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Кто'], ['ch-work', 'Что делаем'], ['ch-why', 'Почему'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'من نحن'], ['ch-work', 'ماذا نفعل'], ['ch-why', 'لماذا'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'دفتر بیزدوار کجاست؟', a: 'هماهنگی پروژه‌ها از تبریز و با پشتیبانی چندزبانه؛ برای پروژه از <a href="/pages/contact">فرم تماس</a> یا واتساپ هماهنگ کنید.' },
        { q: 'محصولات خودتان چیست؟', a: 'از جمله <a href="/pages/bizpet">BizPet</a>، <a href="/pages/biztab">BizTab</a> و اکوسیستم FXGuard.' }
      ],
      tr: [
        { q: 'Ofis nerede?', a: 'Proje koordinasyonu Tebriz ve çok dilli destek; <a href="/pages/contact">iletişim formu</a>.' },
        { q: 'Kendi ürünleriniz?', a: '<a href="/pages/bizpet">BizPet</a>, <a href="/pages/biztab">BizTab</a> ve FXGuard ekosistemi.' }
      ],
      en: [
        { q: 'Where is the office?', a: 'Project coordination from Tabriz with multilingual support; contact via the <a href="/pages/contact">contact form</a> or WhatsApp.' },
        { q: 'Owned products?', a: '<a href="/pages/bizpet">BizPet</a>, <a href="/pages/biztab">BizTab</a> and the FXGuard ecosystem.' }
      ],
      ru: [
        { q: 'Где офис?', a: 'Операции включая Стамбул и Тебриз; пишите в <a href="/pages/contact">форму</a>.' },
        { q: 'Свои продукты?', a: '<a href="/pages/bizpet">BizPet</a>, <a href="/pages/biztab">BizTab</a> и экосистема FXGuard.' }
      ],
      ar: [
        { q: 'أين المكتب؟', a: 'عمليات تشمل إسطنبول وتبريز؛ نسّق عبر <a href="/pages/contact">نموذج الاتصال</a>.' },
        { q: 'منتجاتكم؟', a: '<a href="/pages/bizpet">BizPet</a> و<a href="/pages/biztab">BizTab</a> ومنظومة FXGuard.' }
      ]
    },
    related: [
      { title: 'درباره ما', url: '../about', desc: 'تیم و تاریخچه' },
      { title: 'خدمات', url: '../services', desc: 'چهار محور اصلی' },
      { title: 'تماس', url: '../contact', desc: 'مشاوره رایگان' }
    ]
  },
  {
    file: 'vega-supply-iran.html',
    slug: 'vega-supply-iran',
    seoKey: 'articleVegaSupplyIran',
    date: '2026-07-29',
    modified: '2026-08-24',
    image: 'assets/images/vega/slides/value-process-safety.jpg',
    extraImg: 'assets/images/vega/blog-industrial-sensors.jpg',
    category: { fa: 'تجهیزات صنعتی', tr: 'Endüstriyel ekipman', en: 'Industrial equipment', ru: 'Промоборудование', ar: 'معدات صناعية' },
    title: {
      fa: 'تامین سنسور VEGA در ایران — از استعلام تا پروژه صنعتی',
      tr: 'İran’da VEGA sensör tedariki — sorgudan sahaya',
      en: 'VEGA sensor supply to Iran — from inquiry to site',
      ru: 'Поставка датчиков VEGA в Иран — от запроса до объекта',
      ar: 'توريد حساسات VEGA إلى إيران — من الاستعلام إلى الموقع'
    },
    description: {
      fa: 'مسیر استعلام تا تحویل VEGA اصل برای پروژه ایران: کد سفارش، پیش‌فاکتور و لجستیک تا محل نصب — بدون ابهام بازار خاکستری.',
      tr: 'İran projesi için orijinal VEGA: sipariş kodu, proforma ve sahaya lojistik — gri pazar yok.',
      en: 'Original VEGA for Iran projects: order code, proforma and logistics to site — not the grey market.',
      ru: 'Оригинальный VEGA для проектов в Иране: код заказа, проформа и логистика на объект.',
      ar: 'VEGA أصلي لمشاريع إيران: رمز الطلب وفاتورة مبدئية ولوجستيات حتى الموقع.'
    },
    keywords: {
      fa: 'تامین VEGA ایران, خرید سنسور VEGA, پیش‌فاکتور VEGA, بیزدوار',
      tr: 'VEGA İran tedarik, VEGA satın al, proforma, Bizdavar',
      en: 'VEGA supply Iran, buy VEGA sensor, proforma, Bizdavar',
      ru: 'поставка VEGA Иран, купить VEGA, проформа, Bizdavar',
      ar: 'توريد VEGA إيران, شراء حساس VEGA, فاتورة مبدئية, بيزدوار'
    },
    tags: {
      fa: ['VEGA', 'استعلام قیمت', 'لجستیک', 'ایران'],
      tr: ['VEGA', 'Teklif', 'Lojistik', 'İran'],
      en: ['VEGA', 'Quote', 'Logistics', 'Iran'],
      ru: ['VEGA', 'Запрос', 'Логистика', 'Иран'],
      ar: ['VEGA', 'عرض سعر', 'لوجستيات', 'إيران']
    },
    toc: {
      fa: [['ch-why', 'کانال رسمی'], ['ch-steps', 'از استعلام تا تحویل'], ['ch-brands', 'برندهای مکمل'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-why', 'Resmi kanal'], ['ch-steps', 'Adımlar'], ['ch-brands', 'Tamamlayıcı markalar'], ['ch-faq', 'SSS']],
      en: [['ch-why', 'Official channel'], ['ch-steps', 'Steps'], ['ch-brands', 'Companion brands'], ['ch-faq', 'FAQ']],
      ru: [['ch-why', 'Официальный канал'], ['ch-steps', 'Шаги'], ['ch-brands', 'Другие бренды'], ['ch-faq', 'FAQ']],
      ar: [['ch-why', 'القناة الرسمية'], ['ch-steps', 'الخطوات'], ['ch-brands', 'علامات مكمّلة'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'کد سفارش را خودتان صادر می‌کنید؟', a: 'بله. مدل و شرایط فرآیند را می‌فرستید؛ کد سفارش و پیش‌فاکتور شفاف صادر می‌شود.' },
        { q: 'مبدأ کالا را در مقاله می‌نویسید؟', a: 'خیر. مسیر تامین رسمی و اصل بودن کالا مهم است؛ جزئیات لجستیک در استعلام محرمانه هماهنگ می‌شود.' }
      ],
      tr: [
        { q: 'Sipariş kodunu siz mi kesiyorsunuz?', a: 'Evet. Model ve prosesi gönderin; sipariş kodu ve şeffaf proforma çıkar.' },
        { q: 'Menşei yazıda var mı?', a: 'Hayır. Resmi kanal ve orijinallik esas; lojistik teklifte gizlilikle netleşir.' }
      ],
      en: [
        { q: 'Do you issue the order code?', a: 'Yes. Send the model and process data; we issue the order code and a clear proforma.' },
        { q: 'Do you publish the origin country?', a: 'No. Official channel and authenticity matter; logistics details stay in the private quote.' }
      ],
      ru: [
        { q: 'Вы даёте order code?', a: 'Да. Пришлите модель и процесс — код и прозрачная проформа.' },
        { q: 'Страна происхождения в статье?', a: 'Нет. Важен официальный канал; логистика — в конфиденциальном запросе.' }
      ],
      ar: [
        { q: 'هل تصدرون رمز الطلب؟', a: 'نعم. أرسلوا الموديل وبيانات العملية؛ يصدر الرمز وفاتورة مبدئية واضحة.' },
        { q: 'هل تذكرون بلد المنشأ؟', a: 'لا. القناة الرسمية والأصالة هما الأساس؛ تفاصيل الشحن في الاستعلام الخاص.' }
      ]
    },
    related: [
      { title: 'راهنمای انتخاب سنسور', url: 'industrial-sensors', desc: 'نکات فنی' },
      { title: 'کاتالوگ VEGA', url: '../vega', desc: 'سنسور سطح و فشار' },
      { title: 'تماس', url: '../contact', desc: 'استعلام قیمت' }
    ]
  },
  {
    file: 'multilingual-web-iran-turkey.html',
    slug: 'multilingual-web-iran-turkey',
    seoKey: 'articleMultilingualWeb',
    date: '2026-07-29',
    modified: '2026-08-24',
    image: 'assets/images/content/services-web-mockup.svg',
    extraImg: 'assets/images/content/related-thumb-fast.svg',
    category: { fa: 'طراحی وب', tr: 'Web tasarım', en: 'Web design', ru: 'Веб-дизайн', ar: 'تصميم ويب' },
    title: {
      fa: 'وبسایت چندزبانه برای بازار ایران و ترکیه',
      tr: 'İran ve Türkiye pazarı için çok dilli web sitesi',
      en: 'Multilingual websites for Iran and Turkey markets',
      ru: 'Многоязычный сайт для рынков Ирана и Турции',
      ar: 'موقع متعدد اللغات لأسواق إيران وتركيا'
    },
    description: {
      fa: 'hreflang، نسخه RTL فارسی، اعتماد محلی و تحویل سریع برای کسب‌وکارهای دو بازاری ایران و ترکیه.',
      tr: 'hreflang, Farsça RTL, yerel güven ve hızlı teslimat — İran/Türkiye çift pazar.',
      en: 'hreflang, Persian RTL, local trust and fast delivery for dual Iran/Turkey markets.',
      ru: 'hreflang, RTL фарси, локальное доверие и быстрая сдача для рынков Ирана и Турции.',
      ar: 'hreflang وRTL فارسي وثقة محلية وتسليم سريع لسوقي إيران وتركيا.'
    },
    keywords: {
      fa: 'سایت چندزبانه, hreflang, طراحی سایت فارسی ترکی, بیزدوار',
      tr: 'çok dilli site, hreflang, Farsça Türkçe web, Bizdavar',
      en: 'multilingual website, hreflang, Persian Turkish web, Bizdavar',
      ru: 'многоязычный сайт, hreflang, фарси турецкий, Bizdavar',
      ar: 'موقع متعدد اللغات, hreflang, فارسي تركي, بيزدوار'
    },
    tags: {
      fa: ['hreflang', 'RTL', 'ایران', 'ترکیه'],
      tr: ['hreflang', 'RTL', 'İran', 'Türkiye'],
      en: ['hreflang', 'RTL', 'Iran', 'Turkey'],
      ru: ['hreflang', 'RTL', 'Иран', 'Турция'],
      ar: ['hreflang', 'RTL', 'إيران', 'تركيا']
    },
    toc: {
      fa: [['ch-why', 'چرا دو زبان'], ['ch-tech', 'hreflang و ایندکس'], ['ch-trust', 'اعتماد محلی'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-why', 'Neden iki dil'], ['ch-tech', 'hreflang'], ['ch-trust', 'Yerel güven'], ['ch-faq', 'SSS']],
      en: [['ch-why', 'Why two languages'], ['ch-tech', 'hreflang'], ['ch-trust', 'Local trust'], ['ch-faq', 'FAQ']],
      ru: [['ch-why', 'Зачем два языка'], ['ch-tech', 'hreflang'], ['ch-trust', 'Доверие'], ['ch-faq', 'FAQ']],
      ar: [['ch-why', 'لماذا لغتان'], ['ch-tech', 'hreflang'], ['ch-trust', 'الثقة المحلية'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'گوگل نسخه فارسی و انگلیسی را قاطی می‌کند؟', a: 'اگر hreflang و canonical درست باشد خیر. راهنمای رسمی: <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Localized versions</a>.' },
        { q: 'Fast Studio چندزبانه می‌دهد؟', a: 'بله؛ ساختار fa/tr/en در <a href="/pages/fast">Fast Web Studio</a> قابل توافق است.' }
      ],
      tr: [
        { q: 'Google dilleri karıştırır mı?', a: 'Doğru hreflang ve canonical ile hayır. Resmi rehber: <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Localized versions</a>.' },
        { q: 'Fast Studio çok dilli mi?', a: 'Evet; fa/tr/en yapı <a href="/pages/fast">Fast Web Studio</a>’da kararlaştırılır.' }
      ],
      en: [
        { q: 'Will Google mix language versions?', a: 'Not if hreflang and canonical are correct. See <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Localized versions</a>.' },
        { q: 'Does Fast Studio ship multilingual?', a: 'Yes; fa/tr/en structure can be scoped in <a href="/pages/fast">Fast Web Studio</a>.' }
      ],
      ru: [
        { q: 'Google смешает языки?', a: 'Нет при правильном hreflang. См. <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Localized versions</a>.' },
        { q: 'Fast Studio многоязычный?', a: 'Да; структура fa/tr/en в <a href="/pages/fast">Fast Web Studio</a>.' }
      ],
      ar: [
        { q: 'هل يخلط جوجل اللغات؟', a: 'لا إذا كان hreflang والكانونيكال صحيحين. راجع <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Localized versions</a>.' },
        { q: 'هل Fast Studio متعدد اللغات؟', a: 'نعم؛ هيكل fa/tr/en يُحدد في <a href="/pages/fast">Fast Web Studio</a>.' }
      ]
    },
    related: [
      { title: 'Fast Web Studio', url: '../fast', desc: 'تحویل ۵روزه' },
      { title: 'خدمات طراحی وب', url: '../services#web-design', desc: 'پروژه سفارشی' },
      { title: 'استعلام', url: '../contact?service=web-design', desc: 'شروع پروژه' }
    ]
  },
  {
    file: 'marvi-society-ios-app.html',
    slug: 'marvi-society-ios-app',
    seoKey: 'articleMarviSociety',
    date: '2026-08-01',
    modified: '2026-08-24',
    image: 'assets/images/content/marvi-society/screen-discover.jpg',
    extraImg: 'assets/images/content/marvi-society/screen-events.jpg',
    category: { fa: 'طراحی اپ', tr: 'Uygulama tasarımı', en: 'App development', ru: 'Разработка приложений', ar: 'تطوير التطبيقات' },
    title: {
      fa: 'توسعه اپ iOS — نمونه‌کار Marvi Society و انتشار App Store',
      tr: 'iOS uygulama geliştirme — Marvi Society vaka çalışması',
      en: 'iOS app development — Marvi Society case study and App Store launch',
      ru: 'Разработка iOS — кейс Marvi Society и App Store',
      ar: 'تطوير تطبيق iOS — دراسة Marvi Society وApp Store'
    },
    description: {
      fa: 'از ایده کلاب دعوت‌محور تا انتشار در App Store: طراحی UI، Swift، رویداد و پروفایل creator — نمونه‌کار بیزدوار.',
      tr: 'Davetli kulüp fikrinden App Store’a: UI, Swift, etkinlik ve creator profili — Bizdavar vaka çalışması.',
      en: 'From invite-only club idea to App Store: UI design, Swift, events and creator profiles — Bizdavar case study.',
      ru: 'От идеи закрытого клуба до App Store: UI, Swift, события — кейс Bizdavar в Стамбуле.',
      ar: 'من فكرة نادٍ بالدعوة إلى App Store: تصميم UI وSwift وأحداث — دراسة بيزدوار في إسطنبول.'
    },
    keywords: {
      fa: 'توسعه اپ iOS, Marvi Society, App Store, طراحی اپ, بیزدوار',
      tr: 'iOS uygulama, Marvi Society, App Store, Bizdavar',
      en: 'iOS app development, Marvi Society, App Store, Bizdavar',
      ru: 'разработка iOS, Marvi Society, App Store, Bizdavar',
      ar: 'تطوير iOS, Marvi Society, App Store, بيزدوار'
    },
    tags: {
      fa: ['iOS', 'Swift', 'App Store', 'نمونه‌کار'],
      tr: ['iOS', 'Swift', 'App Store', 'Vaka'],
      en: ['iOS', 'Swift', 'App Store', 'Case study'],
      ru: ['iOS', 'Swift', 'App Store', 'Кейс'],
      ar: ['iOS', 'Swift', 'App Store', 'دراسة']
    },
    toc: {
      fa: [['ch-brief', 'خلاصه پروژه'], ['ch-stack', 'تکنولوژی'], ['ch-features', 'امکانات'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-brief', 'Proje özeti'], ['ch-stack', 'Teknoloji'], ['ch-features', 'Özellikler'], ['ch-faq', 'SSS']],
      en: [['ch-brief', 'Project brief'], ['ch-stack', 'Stack'], ['ch-features', 'Features'], ['ch-faq', 'FAQ']],
      ru: [['ch-brief', 'О проекте'], ['ch-stack', 'Стек'], ['ch-features', 'Функции'], ['ch-faq', 'FAQ']],
      ar: [['ch-brief', 'ملخص المشروع'], ['ch-stack', 'التقنية'], ['ch-features', 'الميزات'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'Marvi Society چیست؟', a: 'کلاب دعوت‌محور creator و مکان در استانبول — اپ iOS با رویداد، کشف مکان و پروفایل. جزئیات در <a href="/pages/marvi-society">صفحه نمونه‌کار</a>.' },
        { q: 'بیزدوار چه نقشی داشت؟', a: 'طراحی UI/UX، توسعه Swift، تست و انتشار App Store — بخشی از <a href="/pages/services#app-development">خدمات اپ</a> بیزدوار.' }
      ],
      tr: [
        { q: 'Marvi Society nedir?', a: 'İstanbul’da davetli creator kulübü — iOS uygulaması. <a href="/pages/marvi-society">Vaka sayfası</a>.' },
        { q: 'Bizdavar’ın rolü?', a: 'UI/UX, Swift geliştirme ve App Store yayını — <a href="/pages/services#app-development">uygulama hizmetleri</a>.' }
      ],
      en: [
        { q: 'What is Marvi Society?', a: 'An invite-only creator and venue club in Istanbul — iOS app with events and discovery. See the <a href="/pages/marvi-society">case study page</a>.' },
        { q: 'What did Bizdavar deliver?', a: 'UI/UX, Swift development, testing and App Store release — part of our <a href="/pages/services#app-development">app services</a>.' }
      ],
      ru: [
        { q: 'Что такое Marvi Society?', a: 'Закрытый клуб creator в Стамбуле — iOS-приложение. <a href="/pages/marvi-society">Страница кейса</a>.' },
        { q: 'Роль Bizdavar?', a: 'UI/UX, Swift и публикация в App Store — <a href="/pages/services#app-development">услуги приложений</a>.' }
      ],
      ar: [
        { q: 'ما Marvi Society؟', a: 'نادٍ بالدعوة للمبدعين في إسطنبول — تطبيق iOS. <a href="/pages/marvi-society">صفحة الدراسة</a>.' },
        { q: 'دور بيزدوار؟', a: 'UI/UX وتطوير Swift ونشر App Store — <a href="/pages/services#app-development">خدمات التطبيقات</a>.' }
      ]
    },
    related: [
      { title: 'صفحه Marvi Society', url: '../marvi-society', desc: 'اسکرین‌شات و App Store' },
      { title: 'نمونه‌کارها', url: '../portfolio', desc: 'پروژه‌های دیجیتال' },
      { title: 'خدمات اپ', url: '../services#app-development', desc: 'iOS و وب‌اپ' }
    ]
  },
  {
    file: 'prosense-gas-detection.html',
    slug: 'prosense-gas-detection',
    seoKey: 'articleProsenseGas',
    date: '2026-06-15',
    modified: '2026-08-24',
    image: 'assets/images/prosense/slides/pq-sil.jpg',
    extraImg: 'assets/images/vega/blog-industrial-sensors.jpg',
    category: { fa: 'تجهیزات صنعتی', tr: 'Endüstriyel ekipman', en: 'Industrial equipment', ru: 'Промоборудование', ar: 'معدات صناعية' },
    title: {
      fa: 'تامین دتکتور گاز Prosense — از انتخاب مدل تا نصب',
      tr: 'Prosense gaz dedektörü tedariki — model seçiminden montaja',
      en: 'Prosense gas detector supply — from model selection to install',
      ru: 'Поставка газовых датчиков Prosense — от выбора модели',
      ar: 'توريد كاشف غاز Prosense — من اختيار الطراز إلى التركيب'
    },
    description: {
      fa: 'راهنمای خرید دتکتور گاز و شعله Prosense برای پروژه‌های نفت، پتروشیمی و HVAC — کد سفارش، SIL و استعلام B2B با بیزدوار.',
      tr: 'Petrol, petrokimya ve HVAC için Prosense gaz/alev dedektörü — sipariş kodu ve B2B teklif.',
      en: 'Guide to Prosense gas and flame detectors for oil, petrochemical and HVAC — order codes, SIL and B2B quotes via Bizdavar.',
      ru: 'Датчики газа и пламени Prosense для нефти и HVAC — код заказа и запрос Bizdavar.',
      ar: 'دليل كاشفات غاز ولهب Prosense للنفط والبتروكيما — رمز الطلب وعرض B2B.'
    },
    keywords: {
      fa: 'دتکتور گاز Prosense, خرید Prosense, SIL, تامین صنعتی, بیزدوار',
      tr: 'Prosense gaz dedektörü, SIL, endüstriyel tedarik, Bizdavar',
      en: 'Prosense gas detector, SIL, industrial supply, Bizdavar',
      ru: 'Prosense газовый датчик, SIL, Bizdavar',
      ar: 'كاشف غاز Prosense, SIL, بيزدوار'
    },
    tags: {
      fa: ['Prosense', 'دتکتور گاز', 'SIL', 'Ex'],
      tr: ['Prosense', 'Gaz dedektörü', 'SIL', 'Ex'],
      en: ['Prosense', 'Gas detector', 'SIL', 'Ex'],
      ru: ['Prosense', 'Газовый датчик', 'SIL', 'Ex'],
      ar: ['Prosense', 'كاشف غاز', 'SIL', 'Ex']
    },
    toc: {
      fa: [['ch-why', 'چرا Prosense'], ['ch-models', 'انتخاب مدل'], ['ch-quote', 'استعلام'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-why', 'Neden Prosense'], ['ch-models', 'Model seçimi'], ['ch-quote', 'Teklif'], ['ch-faq', 'SSS']],
      en: [['ch-why', 'Why Prosense'], ['ch-models', 'Model choice'], ['ch-quote', 'Quote path'], ['ch-faq', 'FAQ']],
      ru: [['ch-why', 'Зачем Prosense'], ['ch-models', 'Выбор модели'], ['ch-quote', 'Запрос'], ['ch-faq', 'FAQ']],
      ar: [['ch-why', 'لماذا Prosense'], ['ch-models', 'اختيار الطراز'], ['ch-quote', 'الاستعلام'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'Prosense با VEGA چه تفاوتی دارد؟', a: 'VEGA سطح و فشار؛ Prosense گاز، شعله و ایمنی فرآیند. هر دو از <a href="/pages/products#supply">تامین صنعتی</a> بیزدوار.' },
        { q: 'برای استعلام چه بفرستیم؟', a: 'گاز هدف، محیط Ex، SIL و تعداد نقطه — پیش‌فاکتور از <a href="/pages/contact?product=Prosense">تماس Prosense</a>.' }
      ],
      tr: [
        { q: 'Prosense ile VEGA farkı?', a: 'VEGA seviye/basınç; Prosense gaz/alev. İkisi de <a href="/pages/products#supply">endüstriyel tedarik</a>.' },
        { q: 'Teklif için ne gönderilmeli?', a: 'Gaz tipi, Ex, SIL, nokta sayısı — <a href="/pages/contact?product=Prosense">Prosense iletişim</a>.' }
      ],
      en: [
        { q: 'Prosense vs VEGA?', a: 'VEGA is level/pressure; Prosense is gas, flame and safety. Both via <a href="/pages/products#supply">industrial supply</a>.' },
        { q: 'What to send for a quote?', a: 'Target gas, Ex zone, SIL and point count — <a href="/pages/contact?product=Prosense">Prosense contact</a>.' }
      ],
      ru: [
        { q: 'Prosense vs VEGA?', a: 'VEGA — уровень/давление; Prosense — газ/пламя. Оба через <a href="/pages/products#supply">промышленную поставку</a>.' },
        { q: 'Что для запроса?', a: 'Газ, Ex, SIL, количество точек — <a href="/pages/contact?product=Prosense">контакт Prosense</a>.' }
      ],
      ar: [
        { q: 'Prosense مقابل VEGA؟', a: 'VEGA للمستوى/الضغط؛ Prosense للغاز/اللهب. كلاهما عبر <a href="/pages/products#supply">التوريد الصناعي</a>.' },
        { q: 'ماذا نرسل للاستعلام؟', a: 'نوع الغاز وEx وSIL — <a href="/pages/contact?product=Prosense">اتصال Prosense</a>.' }
      ]
    },
    related: [
      { title: 'کاتالوگ Prosense', url: '../prosense', desc: 'دتکتور و SIL' },
      { title: 'راهنمای VEGA', url: 'vega-supply-iran', desc: 'سنسور سطح' },
      { title: 'تماس B2B', url: '../contact?product=Prosense', desc: 'پیش‌فاکتور' }
    ]
  },
  {
    file: 'field-tech-services.html',
    slug: 'field-tech-services',
    seoKey: 'articleFieldTech',
    date: '2026-05-10',
    modified: '2026-08-24',
    image: 'assets/images/content/field-tech-hero.svg',
    extraImg: 'assets/images/content/services-web-mockup.svg',
    category: { fa: 'خدمات فنی', tr: 'Saha hizmetleri', en: 'Field services', ru: 'Выездные услуги', ar: 'خدمات ميدانية' },
    title: {
      fa: 'خدمات فنی میدانی بیزدوار — تبریز',
      tr: 'Bizdavar saha teknik hizmetleri — Tebriz',
      en: 'Bizdavar field tech services — Tabriz',
      ru: 'Выездные технические услуги Bizdavar — Тебриз',
      ar: 'الخدمات الفنية الميدانية لبيزدوار — تبريز'
    },
    description: {
      fa: 'دوربین مداربسته، سیم‌کشی، نورمخفی و نصب تجهیزات در تبریز — هماهنگی واتساپ و اجرای میدانی تیم بیزدوار.',
      tr: 'CCTV, kablolama, gizli aydınlatma ve saha montajı — Tebriz WhatsApp koordinasyonu.',
      en: 'CCTV, wiring, cove lighting and on-site installs in Tabriz — WhatsApp coordination by Bizdavar.',
      ru: 'CCTV, проводка, скрытая подсветка и монтаж в Тебризе — WhatsApp Bizdavar.',
      ar: 'كاميرات وتوصيلات وإضاءة مخفية وتركيب ميداني في تبريز — تنسيق واتساب.'
    },
    keywords: {
      fa: 'خدمات فنی تبریز, دوربین مداربسته, نورمخفی, بیزدوار',
      tr: 'saha hizmeti, CCTV, gizli aydınlatma, Bizdavar',
      en: 'field tech, CCTV, cove lighting, Bizdavar Tabriz',
      ru: 'выездные услуги, CCTV, Bizdavar',
      ar: 'خدمات ميدانية, كاميرات, بيزدوار'
    },
    tags: {
      fa: ['دوربین', 'سیم‌کشی', 'نورمخفی', 'تبریز'],
      tr: ['CCTV', 'Kablolama', 'Aydınlatma', 'Tebriz'],
      en: ['CCTV', 'Wiring', 'Lighting', 'Tabriz'],
      ru: ['CCTV', 'Проводка', 'Освещение', 'Тебриз'],
      ar: ['كاميرات', 'توصيلات', 'إضاءة', 'تبريز']
    },
    toc: {
      fa: [['ch-scope', 'حوزه‌ها'], ['ch-cities', 'شهرها'], ['ch-process', 'فرآیند'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-scope', 'Kapsam'], ['ch-cities', 'Şehirler'], ['ch-process', 'Süreç'], ['ch-faq', 'SSS']],
      en: [['ch-scope', 'Scope'], ['ch-cities', 'Cities'], ['ch-process', 'Process'], ['ch-faq', 'FAQ']],
      ru: [['ch-scope', 'Объём'], ['ch-cities', 'Города'], ['ch-process', 'Процесс'], ['ch-faq', 'FAQ']],
      ar: [['ch-scope', 'النطاق'], ['ch-cities', 'المدن'], ['ch-process', 'العملية'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'خدمات فنی با دیجیتال مارکتینگ چه فرقی دارد؟', a: 'دیجیتال در <a href="/pages/services">خدمات آنلاین</a> است؛ فیلد تک نصب فیزیکی در ساختمان — هر دو از بیزدوار.' },
        { q: 'چطور هماهنگ می‌کنیم؟', a: 'واتساپ تخصصی فیلد تک از <a href="/pages/field-tech">صفحه خدمات فنی</a> — بازدید و برآورد قبل از اجرا.' }
      ],
      tr: [
        { q: 'Saha hizmeti dijitalden farkı?', a: 'Dijital <a href="/pages/services">online hizmetler</a>; saha fiziksel montaj — ikisi de Bizdavar.' },
        { q: 'Nasıl koordine?', a: '<a href="/pages/field-tech">Saha hizmetleri</a> WhatsApp hattı — keşif sonrası teklif.' }
      ],
      en: [
        { q: 'Field tech vs digital marketing?', a: 'Digital is <a href="/pages/services">online services</a>; field tech is physical install — both Bizdavar.' },
        { q: 'How to coordinate?', a: 'Dedicated WhatsApp from <a href="/pages/field-tech">field tech page</a> — site visit before quote.' }
      ],
      ru: [
        { q: 'Выезд vs цифровой маркетинг?', a: 'Цифровое — <a href="/pages/services">онлайн-услуги</a>; выезд — монтаж на объекте.' },
        { q: 'Как связаться?', a: 'WhatsApp с <a href="/pages/field-tech">страницы field tech</a>.' }
      ],
      ar: [
        { q: 'الفرق عن التسويق الرقمي؟', a: 'الرقمي في <a href="/pages/services">الخدمات</a>؛ الميداني تركيب فعلي.' },
        { q: 'كيف التنسيق؟', a: 'واتساب من <a href="/pages/field-tech">صفحة الخدمات الميدانية</a>.' }
      ]
    },
    related: [
      { title: 'صفحه فیلد تک', url: '../field-tech', desc: 'CCTV و نورمخفی' },
      { title: 'خدمات دیجیتال', url: '../services', desc: 'وب و SMM' },
      { title: 'تماس', url: '../contact', desc: 'هماهنگی واتساپ' }
    ]
  },
  {
    file: 'local-seo-iran.html',
    slug: 'local-seo-iran',
    seoKey: 'articleLocalSeo',
    date: '2026-04-20',
    modified: '2026-08-24',
    image: 'assets/images/content/network-map.svg',
    extraImg: 'assets/images/content/services-dm-visual.svg',
    category: { fa: 'بازاریابی دیجیتال', tr: 'Dijital pazarlama', en: 'Digital marketing', ru: 'Цифровой маркетинг', ar: 'التسويق الرقمي' },
    title: {
      fa: 'سئو محلی برای کسب‌وکار ایران — Google Maps و جستجوی محلی',
      tr: 'Yerel SEO — İran işletmeleri için Google Maps',
      en: 'Local SEO for Iran businesses — Google Maps and local search',
      ru: 'Локальное SEO для бизнеса в Иране — Google Maps',
      ar: 'SEO محلي للأعمال في إيران — Google Maps'
    },
    description: {
      fa: 'بهینه‌سازی Google Business Profile، NAP یکسان، صفحه فرود محلی و لینک‌های داخلی — مسیر عملی سئو محلی با بیزدوار.',
      tr: 'Google Business Profile, tutarlı NAP, yerel landing — Bizdavar yerel SEO rehberi.',
      en: 'Google Business Profile, consistent NAP, local landing pages and internal links — practical local SEO with Bizdavar.',
      ru: 'Google Business Profile, NAP, локальные лендинги — локальное SEO с Bizdavar.',
      ar: 'Google Business Profile وNAP وصفحات محلية — SEO محلي مع بيزدوار.'
    },
    keywords: {
      fa: 'سئو محلی ایران, Google Maps, بهینه‌سازی محلی, بیزدوار',
      tr: 'yerel SEO, Google Maps, Bizdavar',
      en: 'local SEO Iran, Google Maps, Bizdavar',
      ru: 'локальное SEO, Google Maps, Bizdavar',
      ar: 'SEO محلي, Google Maps, بيزدوار'
    },
    tags: {
      fa: ['سئو محلی', 'Google Maps', 'NAP', 'لندینگ'],
      tr: ['Yerel SEO', 'Google Maps', 'NAP', 'Landing'],
      en: ['Local SEO', 'Google Maps', 'NAP', 'Landing'],
      ru: ['Локальное SEO', 'Google Maps', 'NAP', 'Лендинг'],
      ar: ['SEO محلي', 'Google Maps', 'NAP', 'صفحة هبوط']
    },
    toc: {
      fa: [['ch-gbp', 'Google Business'], ['ch-nap', 'NAP'], ['ch-pages', 'صفحات محلی'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-gbp', 'Google Business'], ['ch-nap', 'NAP'], ['ch-pages', 'Yerel sayfalar'], ['ch-faq', 'SSS']],
      en: [['ch-gbp', 'Google Business'], ['ch-nap', 'NAP'], ['ch-pages', 'Local pages'], ['ch-faq', 'FAQ']],
      ru: [['ch-gbp', 'Google Business'], ['ch-nap', 'NAP'], ['ch-pages', 'Локальные страницы'], ['ch-faq', 'FAQ']],
      ar: [['ch-gbp', 'Google Business'], ['ch-nap', 'NAP'], ['ch-pages', 'صفحات محلية'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'سئو محلی بدون سایت ممکن است؟', a: 'موقت بله؛ اما لندینگ با فرم/واتساپ و مقالات خوشه‌ای مثل <a href="/pages/articles/what-is-digital-marketing">دیجیتال مارکتینگ</a> تبدیل را بالا می‌برد.' },
        { q: 'برای دو شهر چه کنیم؟', a: 'صفحه یا بخش جدا با NAP همان شهر — الگوی چندزبانه در <a href="/pages/articles/multilingual-web-iran-turkey">وب چندزبانه</a>.' }
      ],
      tr: [
        { q: 'Site olmadan yerel SEO?', a: 'Kısa vadede evet; landing + <a href="/pages/articles/what-is-digital-marketing">dijital pazarlama</a> dönüşümü artırır.' },
        { q: 'İki şehir?', a: 'Şehir bazlı NAP — <a href="/pages/articles/multilingual-web-iran-turkey">çok dilli web</a> modeli.' }
      ],
      en: [
        { q: 'Local SEO without a website?', a: 'Short term yes; a landing plus cluster articles like <a href="/pages/articles/what-is-digital-marketing">digital marketing</a> improves conversion.' },
        { q: 'Two cities?', a: 'Separate city sections with correct NAP — see <a href="/pages/articles/multilingual-web-iran-turkey">multilingual web</a>.' }
      ],
      ru: [
        { q: 'Локальное SEO без сайта?', a: 'Краткосрочно да; лендинг и статьи вроде <a href="/pages/articles/what-is-digital-marketing">цифровой маркетинг</a>.' },
        { q: 'Два города?', a: 'Отдельный NAP — <a href="/pages/articles/multilingual-web-iran-turkey">мультиязычный сайт</a>.' }
      ],
      ar: [
        { q: 'SEO محلي بدون موقع؟', a: 'مؤقتاً نعم؛ صفحة هبوط و<a href="/pages/articles/what-is-digital-marketing">تسويق رقمي</a>.' },
        { q: 'مدينتان؟', a: 'NAP منفصل — <a href="/pages/articles/multilingual-web-iran-turkey">موقع متعدد اللغات</a>.' }
      ]
    },
    related: [
      { title: 'خدمات سئو', url: '../services#digital-marketing', desc: 'کمپین و محتوا' },
      { title: 'Fast Studio', url: '../fast', desc: 'لندینگ سریع' },
      { title: 'استعلام سئو', url: '../contact?service=digital-marketing', desc: 'مشاوره محلی' }
    ]
  },
  {
    file: 'liqui-moly-supply-iran.html',
    slug: 'liqui-moly-supply-iran',
    seoKey: 'articleLiquiMolySupply',
    date: '2026-06-01',
    modified: '2026-08-24',
    image: 'assets/images/liqui-moly/octane-plus.jpg',
    extraImg: 'assets/images/vega/slides/value-process-safety.jpg',
    category: { fa: 'تجهیزات صنعتی', tr: 'Endüstriyel ekipman', en: 'Industrial supply', ru: 'Промышленная поставка', ar: 'توريد صناعي' },
    title: {
      fa: 'تامین Liqui Moly آلمان — روغن و افزودنی اصل برای ناوگان و صنعت',
      tr: 'Liqui Moly tedariki — orijinal yağ ve katkı',
      en: 'Liqui Moly supply — genuine oils and additives for fleet and industry',
      ru: 'Поставка Liqui Moly — оригинальные масла и присадки',
      ar: 'توريد Liqui Moly — زيوت وإضافات أصلية'
    },
    description: {
      fa: 'مسیر استعلام روغن موتور، گیربکس و افزودنی Liqui Moly برای ناوگان، کارگاه و پروژه صنعتی — B2B با بیزدوار.',
      tr: 'Motor yağı, şanzıman ve katkı maddeleri için Liqui Moly B2B teklifi — Bizdavar.',
      en: 'Quote path for Liqui Moly engine oil, gear oil and additives for fleets and workshops — B2B via Bizdavar.',
      ru: 'Запрос масел и присадок Liqui Moly для автопарка — B2B Bizdavar.',
      ar: 'مسار استعلام زيوت Liqui Moly للأساطيل والورش — B2B مع بيزدوار.'
    },
    keywords: {
      fa: 'Liqui Moly ایران, روغن موتور, تامین Liqui Moly, بیزدوار',
      tr: 'Liqui Moly tedarik, motor yağı, Bizdavar',
      en: 'Liqui Moly supply, engine oil, Bizdavar',
      ru: 'Liqui Moly поставка, моторное масло, Bizdavar',
      ar: 'Liqui Moly, زيت محرك, بيزدوار'
    },
    tags: {
      fa: ['Liqui Moly', 'روغن موتور', 'ناوگان', 'B2B'],
      tr: ['Liqui Moly', 'Motor yağı', 'Filo', 'B2B'],
      en: ['Liqui Moly', 'Engine oil', 'Fleet', 'B2B'],
      ru: ['Liqui Moly', 'Масло', 'Автопарк', 'B2B'],
      ar: ['Liqui Moly', 'زيت', 'أسطول', 'B2B']
    },
    toc: {
      fa: [['ch-lines', 'خطوط محصول'], ['ch-use', 'کاربرد'], ['ch-quote', 'استعلام'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-lines', 'Ürün grupları'], ['ch-use', 'Kullanım'], ['ch-quote', 'Teklif'], ['ch-faq', 'SSS']],
      en: [['ch-lines', 'Product lines'], ['ch-use', 'Use cases'], ['ch-quote', 'Quote'], ['ch-faq', 'FAQ']],
      ru: [['ch-lines', 'Линейки'], ['ch-use', 'Применение'], ['ch-quote', 'Запрос'], ['ch-faq', 'FAQ']],
      ar: [['ch-lines', 'خطوط المنتج'], ['ch-use', 'الاستخدام'], ['ch-quote', 'الاستعلام'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'Liqui Moly با VEGA چه ارتباطی دارد؟', a: 'هر دو B2B از بیزدوار — VEGA <a href="/pages/vega">ابزار دقیق</a>، Liqui Moly <a href="/pages/liqui-moly">روغن و افزودنی</a>.' },
        { q: 'حداقل سفارش؟', a: 'بسته به SKU و مسیر حمل — لیست نیاز را در <a href="/pages/contact?product=Liqui%20Moly">تماس</a> بفرستید.' }
      ],
      tr: [
        { q: 'Liqui Moly ile VEGA?', a: 'İkisi de B2B — VEGA <a href="/pages/vega">ölçüm</a>, Liqui Moly <a href="/pages/liqui-moly">yağ</a>.' },
        { q: 'Minimum sipariş?', a: 'SKU’ya göre — <a href="/pages/contact?product=Liqui%20Moly">iletişim</a>.' }
      ],
      en: [
        { q: 'Liqui Moly vs VEGA?', a: 'Both B2B — VEGA <a href="/pages/vega">instrumentation</a>, Liqui Moly <a href="/pages/liqui-moly">oils</a>.' },
        { q: 'Minimum order?', a: 'Depends on SKU — send needs via <a href="/pages/contact?product=Liqui%20Moly">contact</a>.' }
      ],
      ru: [
        { q: 'Liqui Moly и VEGA?', a: 'Оба B2B — VEGA <a href="/pages/vega">КИП</a>, Liqui Moly <a href="/pages/liqui-moly">масла</a>.' },
        { q: 'Минимальный заказ?', a: 'По SKU — <a href="/pages/contact?product=Liqui%20Moly">контакт</a>.' }
      ],
      ar: [
        { q: 'Liqui Moly وVEGA؟', a: 'كلاهما B2B — VEGA <a href="/pages/vega">أجهزة</a>، Liqui Moly <a href="/pages/liqui-moly">زيوت</a>.' },
        { q: 'الحد الأدنى؟', a: 'حسب SKU — <a href="/pages/contact?product=Liqui%20Moly">اتصال</a>.' }
      ]
    },
    related: [
      { title: 'کاتالوگ Liqui Moly', url: '../liqui-moly', desc: 'روغن و افزودنی' },
      { title: 'محصولات B2B', url: '../products#supply', desc: 'VEGA و Prosense' },
      { title: 'استعلام', url: '../contact?product=Liqui%20Moly', desc: 'پیش‌فاکتور' }
    ]
  }
];

function bodiesFor(a) {
  const B = {};
  B.fa = faBody(a);
  B.en = enBody(a);
  B.tr = trBody(a);
  B.ru = ruBody(a);
  B.ar = arBody(a);
  return B;
}

function faBody(a) {
  const map = {
    'what-is-digital-marketing': `
<p>دیجیتال مارکتینگ یعنی رساندن پیام درست به مخاطب درست در کانال آنلاین — وبسایت، جستجو، شبکه اجتماعی، تبلیغات و ایمیل — تا آگاهی، اعتماد و در نهایت فروش ساخته شود. در <a href="/pages/about">بیزدوار گروپ</a> این کار را جدا از «پست گذاشتن» می‌بینیم: قیف، سنجش و اتصال به <a href="/pages/services#digital-marketing">خدمات بازاریابی دیجیتال</a>.</p>
${fig('/' + a.image, 'نقشه کانال‌های دیجیتال مارکتینگ برای کسب‌وکار B2B', 'هر کانال باید به تماس، واتساپ یا استعلام ختم شود — نه فقط بازدید.')}
<h2 id="ch-def">تعریف عملی</h2>
<p>تعریف دانشگاهی کافی نیست. تعریف عملی ما این است: هر فعالیت قابل اندازه‌گیری که هزینه جذب مشتری را کم و نرخ تبدیل را زیاد کند. اگر کمپین بازدید می‌آورد اما واتساپ ساکت است، مارکتینگ کامل نیست. لایک، ایمپرشن و حتی ترافیک بدون لید، گزارش تزئینی است.</p>
<p>برای کسب‌وکار B2B — از تامین صنعتی تا خدمات فنی — خریدار معمولاً از جستجو شروع می‌کند، صفحه محصول یا مقاله را می‌خواند، بعد در واتساپ استعلام می‌فرستد. دیجیتال مارکتینگ یعنی همین مسیر را کوتاه، شفاف و قابل‌پیگیری کردن.</p>
<h2 id="ch-channels">کانال‌های اصلی</h2>
<ul>
<li><strong>سئو و محتوا:</strong> مقاله و صفحه خدمت برای کوئری‌هایی مثل «دیجیتال مارکتینگ چیست» — همین وبلاگ بخشی از همان مسیر است. سئو محلی را در <a href="/pages/articles/local-seo-iran">راهنمای سئو محلی</a> ببینید.</li>
<li><strong>تبلیغات جستجو:</strong> بودجه کنترل‌شده روی کوئری با نیت خرید. تا وقتی تبدیل اندازه‌گیری نشود، بودجه را بالا نبرید.</li>
<li><strong>SMM:</strong> حضور منظم در اینستاگرام و لینکدین با لینک به صفحه خدمت؛ جزئیات در <a href="/pages/articles/social-media-management">راهنمای SMM</a>.</li>
<li><strong>وبسایت:</strong> اگر لندینگ کند، مبهم یا بدون RTL باشد، بقیه کانال‌ها هدر می‌رود — <a href="/pages/fast">Fast Web Studio</a> برای شروع ۵روزه.</li>
<li><strong>ایمیل و پیگیری:</strong> لید بدون پاسخ در ۲۴ ساعت می‌میرد. یادآوری ساده از واتساپ یا CRM هزینه جذب را پایین می‌آورد.</li>
</ul>
${fig('/' + a.extraImg, 'نمای کانال‌های بازاریابی دیجیتال و اتصال به صفحه خدمت', 'محتوا، تبلیغ و شبکه اجتماعی باید به یک وعده واحد روی لندینگ برسند.')}
<h2 id="ch-measure">سنجش و قیف فروش</h2>
<p>آگاهی (مقاله و سئو)، بررسی (صفحه خدمت و <a href="/pages/portfolio">نمونه‌کار</a>)، تصمیم (پیش‌فاکتور یا دمو)، خرید (واتساپ و قرارداد). معیارهای مفید: هزینه هر لید، نرخ پاسخ واتساپ، و فروش بسته‌شده — نه CTR به‌تنهایی. ادامه عملی در <a href="/pages/articles/digital-marketing">چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد</a>.</p>
<h2 id="ch-vs">تفاوت با بازاریابی سنتی</h2>
<p>در دیجیتال می‌توان CTR، CPA و نرخ پاسخ را هفتگی دید و بودجه را جابه‌جا کرد. بیلبورد و کاتالوگ چاپی این حلقه بازخورد را ندارند. راهنمای پایه گوگل برای شروع فنی: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">SEO Starter Guide</a>.</p>
<h2 id="ch-region">ایران و ترکیه: واتساپ، RTL و چندزبانگی</h2>
<p>در این دو بازار تماس واقعی اغلب در واتساپ بسته می‌شود؛ فرم انگلیسی بدون شماره محلی اعتماد نمی‌سازد. صفحه فارسی باید RTL درست داشته باشد و نسخه ترکی URL و hreflang جدا. الگوی فنی در <a href="/pages/articles/multilingual-web-iran-turkey">وبسایت چندزبانه ایران و ترکیه</a> آمده است.</p>
<h2 id="ch-start">از کجا شروع کنیم؟</h2>
<ol>
<li>یک صفحه خدمت شفاف با فراخوان واتساپ/فرم و سرعت قابل‌قبول روی موبایل.</li>
<li>دو یا سه مقاله خوشه‌ای که به همان صفحه لینک بدهند.</li>
<li>ردیابی تبدیل (کلیک واتساپ یا ارسال فرم) قبل از بودجه تبلیغ.</li>
<li>بودجه آزمایشی گوگل ادز فقط روی کوئری با نیت خرید؛ هفته‌ای بر اساس هزینه هر لید تنظیم کنید.</li>
</ol>
<p>برای اجرای کمپین از <a href="/pages/contact?service=digital-marketing">فرم تماس</a> مشاوره بگیرید یا <a href="/pages/services#digital-marketing">خدمات بازاریابی</a> را ببینید.</p>`,
    'digital-marketing': `
<p>بازدید به‌تنهایی فروش نیست. افزایش فروش یعنی رساندن فرد مناسب به پیشنهاد واضح و بستن مسیر تماس. بیزدوار این مسیر را با داده و تست روی <a href="/pages/services#digital-marketing">کمپین و CRO</a> جلو می‌برد.</p>
${fig('/' + a.image, 'نمودار قیف فروش دیجیتال از آگاهی تا خرید', 'هر مرحله قیف باید CTA مخصوص خود را داشته باشد.')}
<h2 id="ch-funnel">قیف فروش شفاف</h2>
<p>آگاهی (مقاله و سئو)، بررسی (صفحه خدمت و نمونه‌کار)، تصمیم (پیش‌فاکتور یا دمو)، خرید (واتساپ و قرارداد). اگر مقاله به <a href="/pages/blog">وبلاگ</a> ختم شود و دکمه استعلام نباشد، قیف قطع است.</p>
<h2 id="ch-cro">بهینه‌سازی نرخ تبدیل</h2>
<ul>
<li>سرعت و موبایل — به‌خصوص RTL فارسی.</li>
<li>فرم کوتاه + واتساپ در هدر.</li>
<li>اعتماد: <a href="/pages/portfolio">نمونه‌کار</a> و مسیر شفاف قیمت.</li>
</ul>
<p>لندینگ ضعیف را قبل از تبلیغ با <a href="/pages/fast">Fast Web Studio</a> عوض کنید.</p>
<h2 id="ch-ads">تبلیغات هدفمند</h2>
<p>گوگل و Paid Social فقط وقتی معنا دارند که صفحه فرود همان وعده تبلیغ را بدهد. بودجه را هفتگی بر اساس هزینه هر لید واقعی تنظیم کنید نه فقط کلیک.</p>
<h2 id="ch-follow">اتوماسیون و پیگیری</h2>
<p>لید بدون پاسخ در ۲۴ ساعت می‌میرد. CRM ساده، یادآوری و ریتارگتینگ هزینه جذب را پایین می‌آورد. شروع از <a href="/pages/contact">تماس بیزدوار</a>.</p>`,
    'social-media-management': `
<p>SMM برنامه‌ریزی محتوا، طراحی، انتشار و تحلیل است — نه فقط «ادمین بودن». برای برند صنعتی، لحن فنی و اثبات پروژه مهم‌تر از ترند صرف است. نمونه آرشیو: <a href="/pages/biztejarat">بیزتجارت</a>.</p>
${fig('/' + a.image, 'نمونه مدیریت شبکه‌های اجتماعی و تقویم محتوا', 'تقویم انتشار باید به صفحه خدمت یا استعلام وصل شود.')}
<h2 id="ch-plan">استراتژی محتوا</h2>
<p>ستون‌ها را ثابت کنید: آموزش، محصول، اجتماعی‌اثبات، استخدام/فرهنگ. برای B2B لینکدین و واتساپ اغلب از اینستاگرامِ صرف جلوترند. اتصال به <a href="/pages/services#smm">خدمات SMM بیزدوار</a>.</p>
<h2 id="ch-design">طراحی و ویدئو</h2>
<p>هویت رنگ، قالب پست و زیرنویس فارسی/ترکی یکدست. ریلز بدون زیرنویس در موبایل دیده نمی‌شود.</p>
<h2 id="ch-ads">تبلیغات Paid Social</h2>
<p>هدف را روی لید بگذارید نه فقط بازدید. لندینگ باید همان محصول تبلیغ‌شده باشد — در غیر این صورت فرمول SMM به فروش نمی‌رسد. مشاوره: <a href="/pages/contact">فرم تماس</a>.</p>`,
    'fast-studio': `
<p><a href="/pages/fast">Fast Web Studio</a> محصول بیزدوار برای تحویل سایت شرکتی یا فروشگاهی در ۵ روز کاری است — پلن‌های ۹۹، ۱۹۹ و ۲۹۹ دلار با RTL و سئو پایه.</p>
${fig('/' + a.image, 'Fast Web Studio — طراحی سایت شرکتی در پنج روز', 'تحویل سریع وقتی معنا دارد که ساختار URL و فرم تماس از روز اول درست باشد.')}
<h2 id="ch-base">پلن پایه ($99)</h2>
<p>معرفی شرکت، تماس، واتساپ و موبایل‌فرست. مناسب استارتاپ و برندی که باید سریع آنلاین شود.</p>
<h2 id="ch-shop">پلن فروشگاهی ($199)</h2>
<p>ووکامرس، محصول و درگاه. موجودی و عکس را از قبل آماده کنید تا ۵ روز قفل بماند.</p>
<h2 id="ch-pro">پلن حرفه‌ای ($299)</h2>
<p>صفحات بیشتر، سئو پایه قوی‌تر و آمادگی اتصال به کمپین <a href="/pages/services#digital-marketing">بازاریابی</a>.</p>
<h2 id="ch-after">بعد از تحویل</h2>
<p>آموزش پنل، پشتیبانی و مسیر ارتقا به پروژه سفارشی در <a href="/pages/services#web-design">طراحی وب</a>. سفارش از <a href="/pages/contact">تماس</a>.</p>`,
    'industrial-sensors': `
<p>انتخاب سنسور سطح، فشار یا نقطه سطح برای نفت، پتروشیمی، آب و غذا کار کاتالوگ‌خوانی تنها نیست: رسانه، دما، اتصال فرآیند و گواهی ایمنی باید یک مدل را مشخص کنند. بیزدوار <a href="/pages/vega">تامین VEGA</a> و در گاز/شعله <a href="/pages/prosense">Prosense</a> را با پیش‌فاکتور شفاف انجام می‌دهد.</p>
${fig('/' + a.image, 'سنسور سطح رادار VEGA با بدنه زرد در استودیو محصول', 'بدنه و اتصال فرآیند را کامل ببینید — کراپ نزدیک برای انتخاب مدل کافی نیست.')}
<h2 id="ch-type">نوع اندازه‌گیری</h2>
<ul>
<li><strong>رادار (VEGAPULS):</strong> سطح بدون تماس؛ مناسب مخزن و مایع/جامد با شرایط سخت.</li>
<li><strong>فشار (VEGABAR):</strong> فشار فرآیند و گاه سطح هیدرواستاتیک.</li>
<li><strong>سوئیچ (VEGAPOINT):</strong> نقطه سطح جمع‌وجور برای آلارم و کنترل.</li>
</ul>
${fig('/' + a.extraImg, 'نصب سنسور نقطه سطح VEGA روی مخزن استیل بهداشتی', 'نصب واقعی روی مخزن — کابل، کلمپ و نشانگر وضعیت را در یک قاب می‌بینید.')}
<p>مشخصات فنی را فقط با کاتالوگ سازنده مقایسه کنید؛ منبع رسمی: <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">vega.com</a>.</p>
<h2 id="ch-safety">گواهی و ایمنی</h2>
<p>محیط Ex، SIL و بهداشت غذا را در اولین پیام استعلام بنویسید. بدون این‌ها کد سفارش دقیق صادر نمی‌شود.</p>
<h2 id="ch-supply">مسیر تامین</h2>
<p>شرح فرآیند → پیشنهاد مدل → پیش‌فاکتور → سفارش و حمل. جزئیات در <a href="/pages/products#supply">خدمات صنعتی</a> و مقاله <a href="/pages/articles/vega-supply-iran">تامین VEGA برای ایران</a>. استعلام: <a href="/pages/contact">تماس</a>.</p>`,
    'about-bizdavar-group': `
<p>بیزدوار گروپ از سال ۲۰۱۳ با بنیان‌گذاری <strong>ارسان جاهد تبریزی</strong> کار می‌کند — بیش از ۱۰۰ پروژه در ۱۱ کشور. ترکیب خدمات دیجیتال و تامین صنعتی B2B یک نقطه تماس برای کارفرما می‌سازد.</p>
${fig('/' + a.image, 'نمای معرفی بیزدوار گروپ — آژانس دیجیتال و تامین صنعتی', 'سه مسیر کار: خدمات، محصولات خودمان، تامین صنعتی.')}
<h2 id="ch-who">چه کسی هستیم</h2>
<p>شناسنامه کامل در صفحه <a href="/pages/about">درباره ما</a> است. این مقاله همان روایت را برای جستجوی «بیزدوار گروپ چیست» خلاصه می‌کند.</p>
<h2 id="ch-work">حوزه‌های فعالیت</h2>
<ul>
<li><a href="/pages/services">خدمات دیجیتال</a> و SMM</li>
<li><a href="/pages/fast">Fast Web Studio</a> و طراحی وب</li>
<li>محصولات اختصاصی مثل <a href="/pages/bizpet">BizPet</a> و <a href="/pages/biztab">BizTab</a></li>
<li>تامین <a href="/pages/vega">VEGA</a>، Prosense، Teltonika و برندهای خرده‌فروشی</li>
</ul>
${fig('/' + a.extraImg, 'تیم بیزدوار در غرفه نمایشگاه با بنر Bizdavar', 'حضور نمایشگاهی و شبکه B2B — بخشی از اعتبار قابل راستی‌آزمایی.')}
<h2 id="ch-why">چرا بیزدوار</h2>
<p>یک تیم هم زبان فارسی پروژه ایران را می‌فهمد و هم مسیر تامین و وب چندزبانه را برای ترکیه و بین‌الملل می‌سازد. <a href="/pages/portfolio">نمونه‌کارها</a> · <a href="/pages/contact">تماس</a></p>`,
    'vega-supply-iran': `
<p>پروژه‌های نفت، پتروشیمی، آب و صنایع غذایی در ایران به سنسور سطح و فشار قابل‌اعتماد نیاز دارند. بیزدوار تامین اصل <a href="/pages/vega">محصولات VEGA</a> را با مشاوره فارسی، کد سفارش دقیق و لجستیک تا محل پروژه پوشش می‌دهد — نه خرید مبهم از بازار خاکستری.</p>
${fig('/' + a.image, 'سنسورهای سطح و سوئیچ VEGA در محیط صنعتی تمیز', 'ابزار دقیق باید در شرایط فرآیند دیده شود نه فقط در کراپ تبلیغاتی.')}
<h2 id="ch-why">چرا کانال تامین رسمی؟</h2>
<p>کالای اصل، پیش‌فاکتور شفاف و هماهنگی گمرک/حمل. مبدأ دقیق در مقاله عمومی نمی‌آید؛ در استعلام خصوصی مشخص می‌شود. همزمان تیم فنی برای هماهنگی پروژه کنار شماست.</p>
<h2 id="ch-steps">از استعلام تا تحویل</h2>
<ol>
<li>شرح فرآیند، مخزن و شرایط Ex/SIL</li>
<li>پیشنهاد مدل (VEGAPULS، VEGABAR، VEGAPOINT) و کد سفارش</li>
<li>پیش‌فاکتور و بازه تحویل</li>
<li>سفارش، حمل و پشتیبانی نصب</li>
</ol>
${fig('/' + a.extraImg, 'نمای کامل سنسور VEGA برای استعلام فنی', 'برای استعلام، عکس پلاک و شرایط مخزن را همراه مدل بفرستید.')}
<p>انتخاب مدل: <a href="/pages/articles/industrial-sensors">راهنمای سنسور صنعتی</a>. داده سازنده: <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA official</a>.</p>
<h2 id="ch-brands">برندهای مکمل</h2>
<p>گاز و شعله <a href="/pages/prosense">Prosense</a>، ناوگان <a href="/pages/teltonika">Teltonika</a>، الکتروموتور <a href="/pages/gamak">Gamak</a> — یک نقطه تماس B2B. شروع: <a href="/pages/contact?product=VEGA">استعلام VEGA</a>.</p>`,
    'multilingual-web-iran-turkey': `
<p>کسب‌وکاری که هم مشتری فارسی دارد هم ترکی، با یک سایت تک‌زبانه یا ترجمه ماشینی بدون hreflang در گوگل جریمه یا قاطی‌شدن نسخه می‌گیرد. بیزدوار همین الگو را در پروژه‌ها و در <a href="/pages/fast">Fast Web Studio</a> پیاده می‌کند.</p>
${fig('/' + a.image, 'طراحی وبسایت شرکتی چندزبانه روی دسکتاپ', 'نسخه زبان باید URL جدا، hreflang و محتوای واقعی داشته باشد.')}
<h2 id="ch-why">چرا دو زبان (یا بیشتر)</h2>
<p>اعتماد محلی: شماره واتساپ، جهت RTL، و قیمت/واحد پولی جدا. صفحه خدمت فارسی نباید کپی ترکی با فونت اشتباه باشد.</p>
<h2 id="ch-tech">hreflang و ایندکس گوگل</h2>
<p>هر زبان URL جدا، canonical همان زبان، و تگ‌های hreflang متقابل. مرجع: <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Google localized versions</a>. خود بیزدوار روی <a href="/pages/blog">وبلاگ</a> همین مدل fa/tr/en/ru/ar را دارد.</p>
<h2 id="ch-trust">اعتماد محلی</h2>
<ul>
<li>نمونه کار منطقه‌ای در <a href="/pages/portfolio">پورتفولیو</a></li>
<li>تماس دو زبانه از <a href="/pages/contact">صفحه تماس</a></li>
<li>محتوای خوشه‌ای مثل همین مقاله به‌جای یک صفحه «همه زبان‌ها در یک URL»</li>
</ul>
<p>سفارش سایت دو بازاری: <a href="/pages/services#web-design">طراحی وب</a>.</p>`,
    'marvi-society-ios-app': `
<p><strong>Marvi Society</strong> کلاب دعوت‌محور creator و مکان در استانبول است — اپ iOS با کشف رویداد، پروفایل و مکان. تیم <a href="/pages/about">بیزدوار</a> UI/UX، توسعه Swift و انتشار <a href="/pages/marvi-society">App Store</a> را انجام داد.</p>
${fig('/' + a.image, 'Marvi Society — صفحه کشف رویداد در اپ iOS', 'طراحی native برای engagement و onboarding دعوت‌محور.')}
<h2 id="ch-brief">خلاصه پروژه</h2>
<p>برند lifestyle/creator به اپ native نیاز داشت — نه PWA. مسیر: wireframe → UI kit → Swift → TestFlight → App Store. جزئیات و لینک دانلود در <a href="/pages/marvi-society">نمونه‌کار Marvi Society</a> و <a href="/pages/portfolio">پورتفولیو</a>.</p>
<h2 id="ch-stack">تکنولوژی</h2>
<ul>
<li>Swift و UIKit/SwiftUI hybrid</li>
<li>API رویداد و پروفایل creator</li>
<li>Push و deep link برای دعوت</li>
</ul>
${fig('/' + a.extraImg, 'Marvi Society — فید رویداد و پروفایل', 'هر صفحه به CTA تماس یا رزرو لینک می‌شود — الگوی مشابه لندینگ فروش.')}
<h2 id="ch-features">امکانات کلیدی</h2>
<p>کشف مکان، RSVP رویداد، پروفایل creator و flow دعوت. برای پروژه مشابه: <a href="/pages/services#app-development">خدمات اپ</a> یا <a href="/pages/contact">تماس</a>. مقالات مرتبط: <a href="/pages/articles/fast-studio">Fast Studio</a> (وب) و <a href="/pages/articles/multilingual-web-iran-turkey">چندزبانه</a>.</p>`,
    'prosense-gas-detection': `
<p>ایمنی فرآیند بدون دتکتور گاز و شعله قابل دفاع نیست. <a href="/pages/prosense">Prosense</a> خط PQ و SIL را برای نفت، پتروشیمی و HVAC پوشش می‌دهد — بیزدوار پیش‌فاکتور B2B و هماهنگی با <a href="/pages/vega">VEGA</a> در یک پروژه.</p>
${fig('/' + a.image, 'دتکتور گاز Prosense در محیط صنعتی', 'مدل و گواهی Ex/SIL را در استعلام اول بفرستید.')}
<h2 id="ch-why">چرا Prosense</h2>
<p>برند تخصصی گاز/شکل با پشتیبانی SIL — مکمل سنسور سطح VEGA در پروژه‌های integrated. کاتالوگ: <a href="/pages/prosense">صفحه Prosense</a>.</p>
<h2 id="ch-models">انتخاب مدل</h2>
<ul>
<li>نوع گاز (CH₄، H₂S، CO و…)</li>
<li>کلاس Ex و SIL</li>
<li>Head mount vs remote sensor</li>
</ul>
${fig('/' + a.extraImg, 'سنسور صنعتی VEGA — مکمل Prosense در پروژه', 'VEGA سطح/فشار؛ Prosense گاز — هر دو از <a href="/pages/products#supply">تامین صنعتی</a>.')}
<h2 id="ch-quote">مسیر استعلام</h2>
<p>لیست نقاط + datasheet فرآیند → کد سفارش → پیش‌فاکتور. راهنمای VEGA: <a href="/pages/articles/vega-supply-iran">تامین VEGA ایران</a>. شروع: <a href="/pages/contact?product=Prosense">استعلام Prosense</a>.</p>`,
    'field-tech-services': `
<p>کنار خدمات دیجیتال، بیزدوار در <strong>تبریز</strong> اجرای میدانی دوربین، سیم‌کشی و نورمخفی انجام می‌دهد — هماهنگی از <a href="/pages/field-tech">صفحه فیلد تک</a> و واتساپ تخصصی.</p>
${fig('/' + a.image, 'خدمات فنی میدانی — دوربین و نورمخفی', 'بازدید میدانی قبل از برآورد نهایی.')}
<h2 id="ch-scope">حوزه‌ها</h2>
<ul>
<li>دوربین مداربسته و NVR</li>
<li>سیم‌کشی ساختمان و تجهیزات</li>
<li>نورمخفی و LED</li>
</ul>
<p>خدمات آنلاین (وب، SMM) در <a href="/pages/services">صفحه خدمات</a> جدا است.</p>
<h2 id="ch-cities">شهرها</h2>
<p><strong>تبریز:</strong> پروژه‌های مسکونی، اداری و صنعتی. تماس از <a href="/pages/contact">فرم تماس</a>.</p>
<h2 id="ch-process">فرآیند</h2>
<ol>
<li>عکس/پلان + نیاز در واتساپ</li>
<li>بازدید (در صورت نیاز)</li>
<li>پیش‌فاکتور و زمان‌بندی</li>
<li>اجرا و تحویل</li>
</ol>
<p>مقاله مرتبط دیجیتال: <a href="/pages/articles/local-seo-iran">سئو محلی</a> برای جذب مشتری محلی.</p>`,
    'local-seo-iran': `
<p>کسب‌وکار فیزیکی در ایران بدون حضور در <strong>جستجوی محلی</strong> و Google Maps مشتری نزدیک را از دست می‌دهد. بیزدوار سئو محلی را با <a href="/pages/services#digital-marketing">کمپین دیجیتال</a> و <a href="/pages/fast">لندینگ Fast</a> یکپارچه می‌کند.</p>
${fig('/' + a.image, 'کانال‌های دیجیتال شامل جستجوی محلی', 'Maps باید به همان شماره واتساپ سایت لینک شود.')}
<h2 id="ch-gbp">Google Business Profile</h2>
<p>نام، آدرس، ساعت کاری و دسته دقیق — عکس واقعی پروژه از <a href="/pages/portfolio">نمونه‌کار</a>. راهنمای سئو: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">Google SEO Starter Guide</a>.</p>
<h2 id="ch-nap">NAP یکسان</h2>
<p>نام، آدرس و تلفن در سایت، Maps و شبکه‌های اجتماعی یکسان باشد — وگرنه رتبه محلی افت می‌کند.</p>
<h2 id="ch-pages">صفحات و لینک داخلی</h2>
<p>صفحه خدمت + مقالات خوشه‌ای (مثل <a href="/pages/articles/what-is-digital-marketing">دیجیتال مارکتینگ</a> و <a href="/pages/articles/social-media-management">SMM</a>) به Maps لینک دهید. چند شهر: <a href="/pages/articles/multilingual-web-iran-turkey">وب چندزبانه</a>.</p>
${fig('/' + a.extraImg, 'قیف فروش دیجیتال — از Maps تا واتساپ', 'هر کلیک محلی باید به فرم یا واتساپ برسد.')}
<p>شروع: <a href="/pages/contact">مشاوره سئو</a>.</p>`,
    'liqui-moly-supply-iran': `
<p>ناوگان، کارگاه و پروژه صنعتی به روغن و افزودنی <strong>اصل</strong> نیاز دارند — نه تقلبی انبار. بیزدوار <a href="/pages/liqui-moly">Liqui Moly</a> آلمان را با پیش‌فاکتور B2B و کنار <a href="/pages/gamak">Gamak</a> و <a href="/pages/vega">VEGA</a> تامین می‌کند.</p>
${fig('/' + a.image, 'Liqui Moly Octane Plus — افزودنی اصل', 'SKU و حجم را در استعلام بنویسید.')}
<h2 id="ch-lines">خطوط محصول</h2>
<ul>
<li>روغن موتور بنزین/دیزل</li>
<li>گیربکس و هیدرولیک</li>
<li>افزودنی (Octane Plus و…)</li>
</ul>
<p>کاتالوگ کامل: <a href="/pages/liqui-moly">صفحه Liqui Moly</a> · سایر B2B: <a href="/pages/products#supply">محصولات تامین</a>.</p>
<h2 id="ch-use">کاربرد</h2>
<p>ناوگان حمل، تعمیرگاه، ماشین‌آلات صنعتی — حجم و بازه تحویل در پیش‌فاکتور شفاف است.</p>
<h2 id="ch-quote">استعلام</h2>
<p>لیست SKU یا عکس پلاک → پیش‌فاکتور → سفارش. مقاله مرتبط: <a href="/pages/articles/industrial-sensors">سنسور صنعتی</a>. <a href="/pages/contact?product=Liqui%20Moly">تماس Liqui Moly</a>.</p>`
  };
  return map[a.slug];
}

function enBody(a) {
  const map = {
    'what-is-digital-marketing': `
<p>Digital marketing is reaching the right audience online — site, search, social, ads and email — to build awareness, trust and sales. At <a href="/pages/about">Bizdavar Group</a> it is not “posting”; it is funnel, measurement and <a href="/pages/services#digital-marketing">digital marketing services</a>.</p>
${fig('/' + a.image, 'Map of digital marketing channels for a B2B company', 'Every channel should end in a call, WhatsApp or quote — not vanity traffic.')}
<h2 id="ch-def">A working definition</h2>
<p>A textbook definition is not enough. Ours is practical: any measurable activity that lowers customer-acquisition cost and raises conversion. If a campaign brings visits but WhatsApp stays quiet, marketing is incomplete. Likes, impressions and even traffic without leads are decorative reports.</p>
<p>For B2B — from industrial supply to field services — the buyer usually starts with search, reads a product page or article, then sends a WhatsApp inquiry. Digital marketing is making that path short, clear and trackable.</p>
<h2 id="ch-channels">Main channels</h2>
<ul>
<li><strong>SEO and content:</strong> service pages and articles for queries such as “what is digital marketing” — this blog is part of that path. See also <a href="/pages/articles/local-seo-iran">local SEO</a>.</li>
<li><strong>Search ads:</strong> controlled spend on buyer-intent queries. Do not scale budget until conversion is measured.</li>
<li><strong>SMM:</strong> a regular Instagram and LinkedIn presence that links to a service page; details in the <a href="/pages/articles/social-media-management">SMM guide</a>.</li>
<li><strong>Website:</strong> a slow, vague or broken-RTL landing wastes every other channel — start in five days with <a href="/pages/fast">Fast Web Studio</a>.</li>
<li><strong>Email and follow-up:</strong> a lead that is not answered within 24 hours dies. A simple WhatsApp or CRM reminder lowers acquisition cost.</li>
</ul>
${fig('/' + a.extraImg, 'Digital marketing channels connected to a service landing page', 'Content, ads and social should land on one promise on the same page.')}
<h2 id="ch-measure">Measurement and the sales funnel</h2>
<p>Awareness (articles and SEO), evaluation (service page and <a href="/pages/portfolio">portfolio</a>), decision (proforma or demo), purchase (WhatsApp and contract). Useful metrics: cost per lead, WhatsApp reply rate and closed sales — not CTR alone. Next: <a href="/pages/articles/digital-marketing">how digital marketing increases sales</a>.</p>
<h2 id="ch-vs">Vs traditional marketing</h2>
<p>Online you can see CTR, CPA and reply rate weekly and move budget. Billboards and printed catalogues do not give that loop. Technical primer: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">Google SEO Starter Guide</a>.</p>
<h2 id="ch-region">Iran and Turkey: WhatsApp, RTL and languages</h2>
<p>In these markets the real conversation often closes on WhatsApp; an English-only form with no local number does not build trust. A Persian page needs correct RTL, and the Turkish version needs its own URL and hreflang. The technical pattern is in <a href="/pages/articles/multilingual-web-iran-turkey">multilingual web for Iran and Turkey</a>.</p>
<h2 id="ch-start">Where to start</h2>
<ol>
<li>One clear service page with WhatsApp/form and acceptable mobile speed.</li>
<li>Two or three cluster articles that link back to it.</li>
<li>Conversion tracking (WhatsApp click or form submit) before any ad budget.</li>
<li>A test Google Ads budget only on buyer-intent queries; tune weekly by cost per lead.</li>
</ol>
<p>To run a campaign, use the <a href="/pages/contact?service=digital-marketing">contact form</a> or see <a href="/pages/services#digital-marketing">marketing services</a>.</p>`,
    'digital-marketing': `<p>Traffic is not sales. Growth means the right person, a clear offer and a closed contact path — via <a href="/pages/services#digital-marketing">campaigns and CRO</a>.</p>${fig('/' + a.image, 'Digital sales funnel from awareness to purchase', 'Each funnel stage needs its own CTA.')}<h2 id="ch-funnel">Clear funnel</h2><p>Awareness, evaluation, decision, purchase. If an article has no quote button, the funnel breaks. See the <a href="/pages/blog">blog hub</a>.</p><h2 id="ch-cro">CRO</h2><ul><li>Speed and mobile, including Persian RTL.</li><li>Short form plus header WhatsApp.</li><li>Trust via <a href="/pages/portfolio">portfolio</a>.</li></ul><p>Fix weak landings with <a href="/pages/fast">Fast Web Studio</a> before ads.</p><h2 id="ch-ads">Targeted ads</h2><p>The landing must match the ad promise. Optimise cost per real lead, not clicks.</p><h2 id="ch-follow">Follow-up</h2><p>Leads die in 24 hours without a reply. Start at <a href="/pages/contact">Bizdavar contact</a>.</p>`,
    'social-media-management': `<p>SMM is planning, design, publishing and analytics. Industrial brands need technical proof, not only trends. Archive sample: <a href="/pages/biztejarat">Biztejarat</a>.</p>${fig('/' + a.image, 'Social media management mockup and content calendar', 'The calendar should link to a service page or quote.')}<h2 id="ch-plan">Content strategy</h2><p>Fix pillars: education, product, social proof. LinkedIn and WhatsApp often outperform Instagram-only for B2B. <a href="/pages/services#smm">Bizdavar SMM</a>.</p><h2 id="ch-design">Design and video</h2><p>Consistent templates; Reels need captions on mute.</p><h2 id="ch-ads">Paid social</h2><p>Optimise for leads. Landing must match the product. <a href="/pages/contact">Contact</a>.</p>`,
    'fast-studio': `<p><a href="/pages/fast">Fast Web Studio</a> delivers a company or shop site in 5 working days — $99 / $199 / $299 with RTL and baseline SEO.</p>${fig('/' + a.image, 'Fast Web Studio company website delivered in five days', 'Fast delivery only works if URLs and the contact form are correct from day one.')}<h2 id="ch-base">Basic ($99)</h2><p>Company intro, contact, WhatsApp, mobile-first.</p><h2 id="ch-shop">Shop ($199)</h2><p>WooCommerce and checkout. Prepare photos before the clock starts.</p><h2 id="ch-pro">Pro ($299)</h2><p>More pages and readiness for <a href="/pages/services#digital-marketing">marketing</a>.</p><h2 id="ch-after">After delivery</h2><p>Panel training and upgrade path via <a href="/pages/services#web-design">web design</a>. Order: <a href="/pages/contact">contact</a>.</p>`,
    'industrial-sensors': `<p>Picking level, pressure or point-level sensors is not brochure shopping: media, temperature, process connection and certificates decide the model. Bizdavar supplies <a href="/pages/vega">VEGA</a> and, for gas/flame, <a href="/pages/prosense">Prosense</a> with a clear proforma.</p>${fig('/' + a.image, 'VEGA radar level sensor yellow housing studio photo', 'See the full body and process connection — a tight crop is not enough to choose a model.')}<h2 id="ch-type">Measurement type</h2><ul><li><strong>Radar (VEGAPULS)</strong> — non-contact level.</li><li><strong>Pressure (VEGABAR)</strong> — process pressure / hydrostatic level.</li><li><strong>Switch (VEGAPOINT)</strong> — compact point level.</li></ul>${fig('/' + a.extraImg, 'VEGA point-level sensors mounted on a hygienic stainless tank', 'Real install: cable, clamp and status ring in one frame.')}<p>Official data: <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">vega.com</a>.</p><h2 id="ch-safety">Certificates</h2><p>State Ex, SIL and food hygiene in the first message or the order code will be wrong.</p><h2 id="ch-supply">Supply path</h2><p>Process → model → proforma → shipment. See <a href="/pages/products#supply">industrial supply</a> and <a href="/pages/articles/vega-supply-iran">VEGA for Iran projects</a>. Quote: <a href="/pages/contact">contact</a>.</p>`,
    'about-bizdavar-group': `<p>Bizdavar Group has worked since 2013, founded by <strong>Ersan Jahed Tabrizi</strong> — 100+ projects in 11 countries. Digital services plus industrial B2B supply in one contact.</p>${fig('/' + a.image, 'Bizdavar Group introduction — digital agency and industrial supply', 'Three paths: services, owned products, industrial supply.')}<h2 id="ch-who">Who we are</h2><p>Full identity: <a href="/pages/about">About</a>.</p><h2 id="ch-work">What we do</h2><ul><li><a href="/pages/services">Digital services</a></li><li><a href="/pages/fast">Fast Web Studio</a></li><li>Owned products such as <a href="/pages/bizpet">BizPet</a> and <a href="/pages/biztab">BizTab</a></li><li>Supply of <a href="/pages/vega">VEGA</a> and other industrial brands</li></ul>${fig('/' + a.extraImg, 'Bizdavar team at an exhibition booth with Bizdavar banner', 'Exhibitions and a verifiable B2B network.')}<h2 id="ch-why">Why Bizdavar</h2><p>Persian-speaking delivery for Iran projects and multilingual web/supply for regional work. <a href="/pages/portfolio">Portfolio</a> · <a href="/pages/contact">Contact</a></p>`,
    'vega-supply-iran': `<p>Oil, petrochemical, water and food projects in Iran need reliable level and pressure sensors. Bizdavar supplies genuine <a href="/pages/vega">VEGA products</a> with Persian consulting, exact order codes and logistics to site — not the grey market.</p>${fig('/' + a.image, 'VEGA level and switching sensors in a clean industrial hall', 'Instrumentation should be shown in process context, not only a cropped ad.')}<h2 id="ch-why">Official channel</h2><p>Genuine goods, a clear proforma and customs/freight coordination. We do not publish the origin country on this page; that stays in the private quote.</p><h2 id="ch-steps">From inquiry to delivery</h2><ol><li>Process, tank, Ex/SIL</li><li>Model (VEGAPULS, VEGABAR, VEGAPOINT) and order code</li><li>Proforma and lead time</li><li>Order, freight, install support</li></ol>${fig('/' + a.extraImg, 'Full VEGA sensor view for a technical quote', 'Send nameplate photos and tank conditions with the model.')}<p>Selection guide: <a href="/pages/articles/industrial-sensors">industrial sensors</a>. OEM: <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA official</a>.</p><h2 id="ch-brands">Companion brands</h2><p><a href="/pages/prosense">Prosense</a>, <a href="/pages/teltonika">Teltonika</a>, <a href="/pages/gamak">Gamak</a>. Start: <a href="/pages/contact?product=VEGA">VEGA quote</a>.</p>`,
    'multilingual-web-iran-turkey': `<p>A business serving Persian and Turkish customers fails with one language or machine translation without hreflang. Bizdavar ships this pattern in projects and <a href="/pages/fast">Fast Web Studio</a>.</p>${fig('/' + a.image, 'Multilingual corporate website design on a desktop screen', 'Each language needs its own URL, hreflang and real copy.')}<h2 id="ch-why">Why two languages</h2><p>Local trust: WhatsApp numbers, RTL, separate currency. Persian service pages must not be broken Turkish clones.</p><h2 id="ch-tech">hreflang and indexing</h2><p>Separate URLs, per-locale canonicals, reciprocal hreflang. See <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Google localized versions</a>. This site’s <a href="/pages/blog">blog</a> uses fa/tr/en/ru/ar.</p><h2 id="ch-trust">Local trust</h2><ul><li><a href="/pages/portfolio">Portfolio</a></li><li><a href="/pages/contact">Bilingual contact</a></li><li>Cluster articles instead of one URL for all languages</li></ul><p>Order: <a href="/pages/services#web-design">web design</a>.</p>`,
    'marvi-society-ios-app': `<p><strong>Marvi Society</strong> is an invite-only creator and venue club in Istanbul — native iOS with events, discovery and profiles. <a href="/pages/about">Bizdavar</a> delivered UI/UX, Swift development and <a href="/pages/marvi-society">App Store</a> release.</p>${fig('/' + a.image, 'Marvi Society — event discovery screen on iOS', 'Native design for invite-only onboarding.')}<h2 id="ch-brief">Project brief</h2><p>The brand needed a native app, not a PWA: wireframes → UI kit → Swift → TestFlight → App Store. Screenshots and download link on the <a href="/pages/marvi-society">case study page</a> and <a href="/pages/portfolio">portfolio</a>.</p><h2 id="ch-stack">Stack</h2><ul><li>Swift (UIKit/SwiftUI)</li><li>Events and creator profile APIs</li><li>Push and invite deep links</li></ul>${fig('/' + a.extraImg, 'Marvi Society — events feed and profile', 'Each screen ties to a clear CTA — similar to a sales landing.')}<h2 id="ch-features">Key features</h2><p>Venue discovery, RSVP, creator profiles and invite flow. Similar project: <a href="/pages/services#app-development">app services</a> or <a href="/pages/contact">contact</a>. Related: <a href="/pages/articles/fast-studio">Fast Studio</a> (web) and <a href="/pages/articles/multilingual-web-iran-turkey">multilingual web</a>.</p>`,
    'prosense-gas-detection': `<p>Process safety needs gas and flame detection. <a href="/pages/prosense">Prosense</a> covers PQ lines and SIL for oil, petrochemical and HVAC — Bizdavar B2B quotes alongside <a href="/pages/vega">VEGA</a> on one project.</p>${fig('/' + a.image, 'Prosense gas detector in industrial setting', 'Send Ex/SIL requirements in the first message.')}<h2 id="ch-why">Why Prosense</h2><p>Specialist gas/flame brand with SIL support — complements VEGA level sensors. Catalog: <a href="/pages/prosense">Prosense page</a>.</p><h2 id="ch-models">Model choice</h2><ul><li>Target gas (CH₄, H₂S, CO…)</li><li>Ex zone and SIL</li><li>Head mount vs remote sensor</li></ul>${fig('/' + a.extraImg, 'VEGA industrial sensor — companion to Prosense', 'VEGA level/pressure; Prosense gas — both via <a href="/pages/products#supply">industrial supply</a>.')}<h2 id="ch-quote">Quote path</h2><p>Point list + process data → order code → proforma. VEGA guide: <a href="/pages/articles/vega-supply-iran">VEGA for Iran</a>. Start: <a href="/pages/contact?product=Prosense">Prosense inquiry</a>.</p>`,
    'field-tech-services': `<p>Beyond digital services, Bizdavar runs on-site CCTV, wiring and cove lighting in <strong>Tabriz</strong> — coordinated via the <a href="/pages/field-tech">field tech page</a> and dedicated WhatsApp.</p>${fig('/' + a.image, 'Field tech services — CCTV and lighting', 'Site visit before final quote when needed.')}<h2 id="ch-scope">Scope</h2><ul><li>CCTV and NVR</li><li>Building and equipment wiring</li><li>Cove lighting and LED</li></ul><p>Online services (web, SMM) live on the <a href="/pages/services">services page</a>.</p><h2 id="ch-cities">Cities</h2><p><strong>Tabriz:</strong> residential, office and industrial sites. Contact: <a href="/pages/contact">contact form</a>.</p><h2 id="ch-process">Process</h2><ol><li>Photos/plan + need on WhatsApp</li><li>Site visit if required</li><li>Quote and schedule</li><li>Install and handover</li></ol><p>Related digital article: <a href="/pages/articles/local-seo-iran">local SEO</a> for nearby customers.</p>`,
    'local-seo-iran': `<p>Physical businesses in Iran lose nearby customers without <strong>local search</strong> and Google Maps presence. Bizdavar ties local SEO to <a href="/pages/services#digital-marketing">digital campaigns</a> and <a href="/pages/fast">Fast landing pages</a>.</p>${fig('/' + a.image, 'Digital channels including local search', 'Maps should link to the same WhatsApp as the website.')}<h2 id="ch-gbp">Google Business Profile</h2><p>Accurate name, address, hours and category — real project photos from <a href="/pages/portfolio">portfolio</a>. Primer: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">Google SEO Starter Guide</a>.</p><h2 id="ch-nap">Consistent NAP</h2><p>Name, address and phone must match across site, Maps and social — or local rankings suffer.</p><h2 id="ch-pages">Pages and internal links</h2><p>Service page plus cluster articles (<a href="/pages/articles/what-is-digital-marketing">digital marketing</a>, <a href="/pages/articles/social-media-management">SMM</a>) linking back to Maps. Multi-city: <a href="/pages/articles/multilingual-web-iran-turkey">multilingual web</a>.</p>${fig('/' + a.extraImg, 'Digital sales funnel — Maps to WhatsApp', 'Every local click should reach form or WhatsApp.')}<p>Start: <a href="/pages/contact">SEO consultation</a>.</p>`,
    'liqui-moly-supply-iran': `<p>Fleets, workshops and plants need <strong>genuine</strong> oils and additives — not grey-market stock. Bizdavar supplies <a href="/pages/liqui-moly">Liqui Moly</a> Germany with B2B proforma, alongside <a href="/pages/gamak">Gamak</a> and <a href="/pages/vega">VEGA</a>.</p>${fig('/' + a.image, 'Liqui Moly Octane Plus additive', 'List SKU and volume in your inquiry.')}<h2 id="ch-lines">Product lines</h2><ul><li>Engine oils (petrol/diesel)</li><li>Gear and hydraulic fluids</li><li>Additives (Octane Plus etc.)</li></ul><p>Full catalog: <a href="/pages/liqui-moly">Liqui Moly page</a> · Other B2B: <a href="/pages/products#supply">supply products</a>.</p><h2 id="ch-use">Use cases</h2><p>Transport fleets, garages, industrial machinery — volume and lead time on a clear proforma.</p><h2 id="ch-quote">Quote</h2><p>SKU list or label photo → proforma → order. Related: <a href="/pages/articles/industrial-sensors">industrial sensors</a>. <a href="/pages/contact?product=Liqui%20Moly">Liqui Moly contact</a>.</p>`
  };
  return map[a.slug];
}

function trBody(a) {
  const en = enBody(a);
  const map = {
    'what-is-digital-marketing': `
<p>Dijital pazarlama, doğru kitleye çevrimiçi ulaşmaktır — site, arama, sosyal, reklam ve e-posta — farkındalık, güven ve satış kurmak için. <a href="/pages/about">Bizdavar Group</a> bünyesinde bu “post atmak” değildir; huni, ölçüm ve <a href="/pages/services#digital-marketing">dijital pazarlama hizmetleridir</a>.</p>
${fig('/' + a.image, 'B2B şirket için dijital pazarlama kanalları haritası', 'Her kanal arama, WhatsApp veya teklifle bitmeli — süs trafiğiyle değil.')}
<h2 id="ch-def">Pratik tanım</h2>
<p>Akademik tanım yetmez. Bizim tanımımız ölçülebilir: müşteri edinme maliyetini düşüren ve dönüşümü yükselten her faaliyet. Kampanya ziyaret getiriyor ama WhatsApp sessizse pazarlama eksiktir. Beğeni, gösterim ve leadsiz trafik süs rapordur.</p>
<p>B2B’de — endüstriyel tedarikten saha hizmetine — alıcı genelde aramayla başlar, ürün sayfası veya makale okur, sonra WhatsApp’tan sorar. Dijital pazarlama bu yolu kısa, net ve izlenebilir kılmaktır.</p>
<h2 id="ch-channels">Ana kanallar</h2>
<ul>
<li><strong>SEO ve içerik:</strong> «dijital pazarlama nedir» gibi sorgular için hizmet sayfası ve makale — bu blog o yolun parçası. Ayrıca <a href="/pages/articles/local-seo-iran">yerel SEO</a>.</li>
<li><strong>Arama reklamı:</strong> satın alma niyetli sorgulara kontrollü bütçe. Dönüşüm ölçülmeden bütçeyi büyütmeyin.</li>
<li><strong>SMM:</strong> hizmet sayfasına bağlanan düzenli Instagram ve LinkedIn; ayrıntı <a href="/pages/articles/social-media-management">SMM rehberinde</a>.</li>
<li><strong>Web sitesi:</strong> yavaş, belirsiz veya bozuk RTL landing diğer kanalları boşa harcar — <a href="/pages/fast">Fast Web Studio</a> ile 5 günde başlayın.</li>
<li><strong>E-posta ve takip:</strong> 24 saatte yanıtsız lead ölür. Basit WhatsApp veya CRM hatırlatması maliyeti düşürür.</li>
</ul>
${fig('/' + a.extraImg, 'Hizmet sayfasına bağlanan dijital pazarlama kanalları', 'İçerik, reklam ve sosyal aynı vaatle aynı landing’e inmeli.')}
<h2 id="ch-measure">Ölçüm ve satış hunisi</h2>
<p>Farkındalık (makale ve SEO), değerlendirme (hizmet sayfası ve <a href="/pages/portfolio">portföy</a>), karar (proforma veya demo), satın alma (WhatsApp ve sözleşme). Yararlı metrikler: lead maliyeti, WhatsApp yanıt oranı ve kapanan satış — tek başına CTR değil. Devamı: <a href="/pages/articles/digital-marketing">dijital pazarlama satışları nasıl artırır</a>.</p>
<h2 id="ch-vs">Geleneksel pazarlamadan farkı</h2>
<p>Dijitalde CTR, CPA ve yanıt oranını haftalık görüp bütçeyi kaydırabilirsiniz. Billboard ve basılı katalog bu döngüyü vermez. Teknik başlangıç: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">Google SEO Starter Guide</a>.</p>
<h2 id="ch-region">İran ve Türkiye: WhatsApp, RTL ve diller</h2>
<p>Bu pazarlarda asıl konuşma çoğu zaman WhatsApp’ta kapanır; yerel numarasız İngilizce form güven kurmaz. Farsça sayfa doğru RTL ister; Türkçe sürüm ayrı URL ve hreflang ister. Teknik model: <a href="/pages/articles/multilingual-web-iran-turkey">İran ve Türkiye için çok dilli web</a>.</p>
<h2 id="ch-start">Nereden başlamalı</h2>
<ol>
<li>WhatsApp/formlu, mobilde yeterince hızlı net bir hizmet sayfası.</li>
<li>Aynı sayfaya bağlanan iki veya üç küme makalesi.</li>
<li>Reklam bütçesinden önce dönüşüm takibi (WhatsApp tıklaması veya form).</li>
<li>Yalnızca satın alma niyetli sorgularda deneme Google Ads; lead maliyetine göre haftalık ayar.</li>
</ol>
<p>Kampanya için <a href="/pages/contact?service=digital-marketing">iletişim formu</a> veya <a href="/pages/services#digital-marketing">pazarlama hizmetleri</a>.</p>`,
    'digital-marketing': `<p>Trafik satış değildir. Büyüme doğru kişi, net teklif ve kapalı iletişim yoludur — <a href="/pages/services#digital-marketing">kampanya ve CRO</a>.</p>${fig('/' + a.image, 'Farkındalıktan satın almaya dijital satış hunisi', 'Hununun her adımının kendi CTA’sı olmalı.')}<h2 id="ch-funnel">Net huni</h2><p>Makalede teklif butonu yoksa huni kopar. <a href="/pages/blog">Blog</a>.</p><h2 id="ch-cro">CRO</h2><ul><li>Hız ve mobil, Farsça RTL.</li><li>Kısa form + WhatsApp.</li><li><a href="/pages/portfolio">Portföy</a> ile güven.</li></ul><p>Zayıf landing’i reklamdan önce <a href="/pages/fast">Fast Web Studio</a> ile düzeltin.</p><h2 id="ch-ads">Hedefli reklam</h2><p>Landing, reklam vaadiyle aynı olmalı. Gerçek lead maliyetine bakın.</p><h2 id="ch-follow">Takip</h2><p>24 saatte yanıtsız lead ölür. <a href="/pages/contact">İletişim</a>.</p>`,
    'social-media-management': `<p>SMM plan, tasarım, yayın ve analitiktir. Endüstriyel marka kanıt ister. Örnek: <a href="/pages/biztejarat">Biztejarat</a>.</p>${fig('/' + a.image, 'Sosyal medya yönetimi ve içerik takvimi', 'Takvim hizmet sayfasına veya teklife bağlanmalı.')}<h2 id="ch-plan">İçerik stratejisi</h2><p>Eğitim, ürün, kanıt. B2B’de LinkedIn ve WhatsApp sık öndedir. <a href="/pages/services#smm">SMM hizmeti</a>.</p><h2 id="ch-design">Tasarım</h2><p>Şablon tutarlılığı; Reels’e altyazı.</p><h2 id="ch-ads">Paid social</h2><p>Lead’e optimize edin. <a href="/pages/contact">İletişim</a>.</p>`,
    'fast-studio': `<p><a href="/pages/fast">Fast Web Studio</a> 5 iş gününde kurumsal veya mağaza sitesi teslim eder — $99 / $199 / $299, RTL ve temel SEO.</p>${fig('/' + a.image, 'Fast Web Studio — beş günde kurumsal site', 'URL ve iletişim formu ilk günden doğru olmalı.')}<h2 id="ch-base">Temel ($99)</h2><p>Tanıtım, iletişim, WhatsApp.</p><h2 id="ch-shop">Mağaza ($199)</h2><p>WooCommerce. Fotoğrafları önceden hazırlayın.</p><h2 id="ch-pro">Pro ($299)</h2><p>Daha fazla sayfa ve <a href="/pages/services#digital-marketing">pazarlama</a> hazırlığı.</p><h2 id="ch-after">Teslim sonrası</h2><p><a href="/pages/services#web-design">Web tasarım</a> ile yükseltme. <a href="/pages/contact">Sipariş</a>.</p>`,
    'industrial-sensors': `<p>Seviye, basınç veya nokta seviye seçimi katalog yapraklamak değildir. Bizdavar <a href="/pages/vega">VEGA</a> ve gaz/alev için <a href="/pages/prosense">Prosense</a> tedarik eder.</p>${fig('/' + a.image, 'VEGA radar seviye sensörü sarı gövde stüdyo fotoğrafı', 'Gövde ve proses bağlantısının tamamı görünmeli.')}<h2 id="ch-type">Ölçüm tipi</h2><ul><li><strong>Radar (VEGAPULS)</strong></li><li><strong>Basınç (VEGABAR)</strong></li><li><strong>Şalter (VEGAPOINT)</strong></li></ul>${fig('/' + a.extraImg, 'Hijyenik çelik tankta VEGA nokta seviye montajı', 'Kablo, kelepçe ve durum halkası tek karede.')}<p>Resmi veri: <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">vega.com</a>.</p><h2 id="ch-safety">Sertifika</h2><p>Ex, SIL ve gıda hijyenini ilk mesajda yazın.</p><h2 id="ch-supply">Tedarik</h2><p><a href="/pages/products#supply">Endüstriyel tedarik</a> · <a href="/pages/articles/vega-supply-iran">İran için VEGA</a> · <a href="/pages/contact">İletişim</a>.</p>`,
    'about-bizdavar-group': `<p>Bizdavar Group 2013’ten beri — kurucu <strong>Ersan Jahed Tabrizi</strong>, 11 ülkede 100+ proje.</p>${fig('/' + a.image, 'Bizdavar Group tanıtımı — dijital ajans ve endüstriyel tedarik', 'Üç yol: hizmet, kendi ürün, tedarik.')}<h2 id="ch-who">Kimiz</h2><p><a href="/pages/about">Hakkımızda</a>.</p><h2 id="ch-work">Ne yapıyoruz</h2><ul><li><a href="/pages/services">Dijital hizmetler</a></li><li><a href="/pages/fast">Fast Web Studio</a></li><li><a href="/pages/bizpet">BizPet</a> ve <a href="/pages/biztab">BizTab</a></li><li><a href="/pages/vega">VEGA</a> tedariki</li></ul>${fig('/' + a.extraImg, 'Bizdavar ekibi fuar standında', 'Doğrulanabilir B2B ağ.')}<h2 id="ch-why">Neden</h2><p><a href="/pages/portfolio">Portföy</a> · <a href="/pages/contact">İletişim</a></p>`,
    'vega-supply-iran': `<p>İran’daki proses projeleri güvenilir VEGA seviye/basınç ister. Bizdavar orijinal <a href="/pages/vega">VEGA</a> tedarik eder — gri pazar değil.</p>${fig('/' + a.image, 'Temiz endüstriyel salonda VEGA seviye ve şalter sensörleri', 'Cihaz proses bağlamında görülmeli.')}<h2 id="ch-why">Resmi kanal</h2><p>Orijinal mal, şeffaf proforma. Menşei bu sayfada yazılmaz; özel teklifte netleşir.</p><h2 id="ch-steps">Adımlar</h2><ol><li>Proses, tank, Ex/SIL</li><li>Model ve sipariş kodu</li><li>Proforma</li><li>Sevkiyat ve montaj desteği</li></ol>${fig('/' + a.extraImg, 'Teknik teklif için tam VEGA sensör görünümü', 'Etiket fotoğrafı ve tank şartlarını gönderin.')}<p><a href="/pages/articles/industrial-sensors">Seçim rehberi</a> · <a href="https://www.vega.com/en-ae" rel="noopener noreferrer" target="_blank">VEGA</a> · <a href="/pages/contact?product=VEGA">Teklif</a>.</p><h2 id="ch-brands">Tamamlayıcı</h2><p><a href="/pages/prosense">Prosense</a>, <a href="/pages/teltonika">Teltonika</a>, <a href="/pages/gamak">Gamak</a>.</p>`,
    'multilingual-web-iran-turkey': `<p>Farsça ve Türkçe müşteriye tek dilli veya hreflang’sız çeviri yetmez. Bizdavar bunu <a href="/pages/fast">Fast Web Studio</a>’da kurar.</p>${fig('/' + a.image, 'Masaüstünde çok dilli kurumsal web sitesi', 'Her dilin ayrı URL ve gerçek metni olmalı.')}<h2 id="ch-why">Neden iki dil</h2><p>WhatsApp, RTL, para birimi. Bozuk klon sayfalar güven kırar.</p><h2 id="ch-tech">hreflang</h2><p>Ayrı URL, kanonik, karşılıklı hreflang. <a href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">Google localized versions</a>. <a href="/pages/blog">Blog</a> fa/tr/en/ru/ar kullanır.</p><h2 id="ch-trust">Yerel güven</h2><ul><li><a href="/pages/portfolio">Portföy</a></li><li><a href="/pages/contact">İletişim</a></li></ul><p><a href="/pages/services#web-design">Web tasarım</a>.</p>`,
    'marvi-society-ios-app': `<p><strong>Marvi Society</strong> İstanbul’da davetli creator kulübü — native iOS. <a href="/pages/about">Bizdavar</a> UI/UX, Swift ve <a href="/pages/marvi-society">App Store</a> yayını.</p>${fig('/' + a.image, 'Marvi Society — iOS etkinlik keşfi', 'Davetli onboarding için native tasarım.')}<h2 id="ch-brief">Özet</h2><p>Wireframe → UI → Swift → TestFlight → App Store. <a href="/pages/marvi-society">Vaka sayfası</a> · <a href="/pages/portfolio">Portföy</a>.</p><h2 id="ch-stack">Teknoloji</h2><ul><li>Swift</li><li>Etkinlik API</li><li>Push ve deep link</li></ul>${fig('/' + a.extraImg, 'Marvi Society — etkinlik akışı', 'Her ekran net CTA ile biter.')}<h2 id="ch-features">Özellikler</h2><p>Mekan keşfi, RSVP, profil. <a href="/pages/services#app-development">Uygulama hizmetleri</a> · <a href="/pages/contact">İletişim</a>.</p>`,
    'prosense-gas-detection': `<p>Proses güvenliği için <a href="/pages/prosense">Prosense</a> gaz/alev dedektörü — Bizdavar B2B teklif, <a href="/pages/vega">VEGA</a> ile aynı projede.</p>${fig('/' + a.image, 'Prosense gaz dedektörü', 'Ex/SIL ilk mesajda.')}<h2 id="ch-why">Neden Prosense</h2><p><a href="/pages/prosense">Prosense sayfası</a>.</p><h2 id="ch-models">Model</h2><ul><li>Gaz tipi</li><li>Ex ve SIL</li></ul><h2 id="ch-quote">Teklif</h2><p><a href="/pages/articles/vega-supply-iran">VEGA rehberi</a> · <a href="/pages/contact?product=Prosense">Prosense teklif</a>.</p>`,
    'field-tech-services': `<p>Bizdavar <strong>Tebriz</strong>’de CCTV, kablolama ve gizli aydınlatma — <a href="/pages/field-tech">saha hizmetleri</a>.</p>${fig('/' + a.image, 'Saha teknik hizmetleri', 'Keşif sonrası teklif.')}<h2 id="ch-scope">Kapsam</h2><ul><li>CCTV</li><li>Kablolama</li><li>LED aydınlatma</li></ul><p><a href="/pages/services">Dijital hizmetler</a> ayrı.</p><h2 id="ch-process">Süreç</h2><ol><li>WhatsApp + foto</li><li>Keşif</li><li>Teklif</li><li>Montaj</li></ol><p><a href="/pages/articles/local-seo-iran">Yerel SEO</a>.</p>`,
    'local-seo-iran': `<p>İran’daki fiziksel işletmeler <strong>yerel arama</strong> olmadan müşteri kaybeder. Bizdavar <a href="/pages/services#digital-marketing">dijital pazarlama</a> + <a href="/pages/fast">Fast landing</a>.</p>${fig('/' + a.image, 'Yerel arama kanalları', 'Maps = site WhatsApp.')}<h2 id="ch-gbp">Google Business</h2><p><a href="/pages/portfolio">Portföy</a> fotoğrafları.</p><h2 id="ch-nap">NAP</h2><p>Site, Maps, sosyal aynı bilgi.</p><h2 id="ch-pages">Sayfalar</h2><p><a href="/pages/articles/what-is-digital-marketing">Dijital pazarlama</a> · <a href="/pages/contact">İletişim</a>.</p>`,
    'liqui-moly-supply-iran': `<p>Filo ve atölyeler için orijinal <a href="/pages/liqui-moly">Liqui Moly</a> — Bizdavar B2B proforma.</p>${fig('/' + a.image, 'Liqui Moly Octane Plus', 'SKU listesi gönderin.')}<h2 id="ch-lines">Ürün grupları</h2><ul><li>Motor yağı</li><li>Şanzıman</li><li>Katkılar</li></ul><p><a href="/pages/liqui-moly">Katalog</a> · <a href="/pages/contact?product=Liqui%20Moly">Teklif</a>.</p>`
  };
  return map[a.slug] || en;
}

function ruBody(a) {
  const map = {
    'what-is-digital-marketing': `
<p>Цифровой маркетинг — это выход к нужной аудитории онлайн: сайт, поиск, соцсети, реклама и email — чтобы строить узнаваемость, доверие и продажи. В <a href="/pages/about">Bizdavar Group</a> это не «постинг», а воронка, измерение и <a href="/pages/services#digital-marketing">услуги цифрового маркетинга</a>.</p>
${fig('/' + a.image, 'Карта каналов цифрового маркетинга для B2B-компании', 'Каждый канал должен заканчиваться звонком, WhatsApp или запросом — не пустым трафиком.')}
<h2 id="ch-def">Рабочее определение</h2>
<p>Учебникового определения мало. Наше практическое: любая измеримая активность, которая снижает стоимость привлечения и повышает конверсию. Если кампания даёт визиты, а WhatsApp молчит, маркетинг неполный. Лайки, показы и трафик без лидов — декоративный отчёт.</p>
<p>В B2B — от промышленной поставки до выездных услуг — закупщик обычно начинает с поиска, читает страницу продукта или статью, затем пишет в WhatsApp. Цифровой маркетинг — сделать этот путь коротким, понятным и отслеживаемым.</p>
<h2 id="ch-channels">Основные каналы</h2>
<ul>
<li><strong>SEO и контент:</strong> страницы услуг и статьи под запросы вроде «что такое цифровой маркетинг» — этот блог часть того пути. См. также <a href="/pages/articles/local-seo-iran">локальное SEO</a>.</li>
<li><strong>Поисковая реклама:</strong> контролируемый бюджет на запросы с намерением купить. Не масштабируйте, пока не измерена конверсия.</li>
<li><strong>SMM:</strong> регулярное присутствие в Instagram и LinkedIn со ссылкой на страницу услуги; подробности в <a href="/pages/articles/social-media-management">гайде SMM</a>.</li>
<li><strong>Сайт:</strong> медленный, размытый или сломанный RTL-лендинг сжигает остальные каналы — старт за пять дней с <a href="/pages/fast">Fast Web Studio</a>.</li>
<li><strong>Email и сопровождение:</strong> лид без ответа за 24 часа умирает. Простое напоминание в WhatsApp или CRM снижает стоимость привлечения.</li>
</ul>
${fig('/' + a.extraImg, 'Каналы цифрового маркетинга, связанные со страницей услуги', 'Контент, реклама и соцсети должны вести к одному обещанию на одном лендинге.')}
<h2 id="ch-measure">Измерение и воронка продаж</h2>
<p>Узнаваемость (статьи и SEO), оценка (страница услуги и <a href="/pages/portfolio">портфолио</a>), решение (проформа или демо), покупка (WhatsApp и договор). Полезные метрики: стоимость лида, доля ответов в WhatsApp и закрытые сделки — не CTR в одиночку. Далее: <a href="/pages/articles/digital-marketing">как маркетинг увеличивает продажи</a>.</p>
<h2 id="ch-vs">Отличие от традиционного маркетинга</h2>
<p>Онлайн вы еженедельно видите CTR, CPA и ответы и двигаете бюджет. Билборды и печатные каталоги этого цикла не дают. Технический старт: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">Google SEO Starter Guide</a>.</p>
<h2 id="ch-region">Иран и Турция: WhatsApp, RTL и языки</h2>
<p>На этих рынках реальный разговор часто закрывается в WhatsApp; английская форма без местного номера не строит доверие. Персидской странице нужен корректный RTL, турецкой — отдельный URL и hreflang. Техническая схема: <a href="/pages/articles/multilingual-web-iran-turkey">многоязычный сайт для Ирана и Турции</a>.</p>
<h2 id="ch-start">С чего начать</h2>
<ol>
<li>Одна понятная страница услуги с WhatsApp/формой и приемлемой скоростью на мобильном.</li>
<li>Две-три кластерные статьи со ссылкой на неё.</li>
<li>Учёт конверсий (клик WhatsApp или отправка формы) до рекламного бюджета.</li>
<li>Тестовый бюджет Google Ads только на запросы с намерением купить; еженедельно по стоимости лида.</li>
</ol>
<p>Для кампании — <a href="/pages/contact?service=digital-marketing">форма контакта</a> или <a href="/pages/services#digital-marketing">услуги маркетинга</a>.</p>`
  };
  if (map[a.slug]) return map[a.slug];
  return enBody(a)
    .replace(/Digital marketing is reaching the right audience online/g, 'Цифровой маркетинг — доступ к нужной аудитории онлайн')
    .replace(/Traffic is not sales/g, 'Трафик — это не продажи')
    .replace(/SMM is planning/g, 'SMM — это план')
    .replace(/delivers a company or shop site in 5 working days/g, 'сдаёт корпоративный или магазинный сайт за 5 рабочих дней')
    .replace(/Picking level, pressure or point-level sensors/g, 'Выбор датчиков уровня, давления или предельного уровня')
    .replace(/Bizdavar Group has worked since 2013/g, 'Bizdavar Group работает с 2013 года')
    .replace(/Oil, petrochemical, water and food projects in Iran/g, 'Нефть, нефтехимия, вода и пищевые проекты в Иране')
    .replace(/A business serving Persian and Turkish customers/g, 'Бизнес с персидскими и турецкими клиентами');
}

function arBody(a) {
  const map = {
    'what-is-digital-marketing': `
<p>التسويق الرقمي هو الوصول إلى الجمهور المناسب عبر الإنترنت — الموقع والبحث والشبكات الاجتماعية والإعلانات والبريد — لبناء الوعي والثقة ثم المبيعات. في <a href="/pages/about">بيزدوار گروپ</a> هذا ليس «نشر منشورات»؛ بل قمع وقياس و<a href="/pages/services#digital-marketing">خدمات تسويق رقمي</a>.</p>
${fig('/' + a.image, 'خريطة قنوات التسويق الرقمي لشركة B2B', 'يجب أن تنتهي كل قناة بمكالمة أو واتساب أو استعلام — لا بزيارات فارغة.')}
<h2 id="ch-def">تعريف عملي</h2>
<p>التعريف الأكاديمي لا يكفي. تعريفنا عملي: أي نشاط قابل للقياس يخفض تكلفة جذب العميل ويرفع التحويل. إذا جلبت الحملة زيارات وبقي واتساب صامتاً فالتسويق ناقص. الإعجابات والظهور وحتى الزيارات بلا عملاء تقارير تجميلية.</p>
<p>في B2B — من التوريد الصناعي إلى الخدمات الميدانية — يبدأ المشتري عادة بالبحث، يقرأ صفحة منتج أو مقالة، ثم يرسل استعلاماً عبر واتساب. التسويق الرقمي هو جعل هذا المسار قصيراً وواضحاً وقابلاً للتتبع.</p>
<h2 id="ch-channels">القنوات الرئيسية</h2>
<ul>
<li><strong>السيو والمحتوى:</strong> صفحات خدمة ومقالات لاستعلامات مثل «ما هو التسويق الرقمي» — هذه المدونة جزء من ذلك المسار. انظر أيضاً <a href="/pages/articles/local-seo-iran">السيو المحلي</a>.</li>
<li><strong>إعلانات البحث:</strong> ميزانية مضبوطة على استعلامات بنية الشراء. لا توسّعوا الميزانية قبل قياس التحويل.</li>
<li><strong>SMM:</strong> حضور منتظم في إنستغرام ولينكدإن مع رابط لصفحة الخدمة؛ التفاصيل في <a href="/pages/articles/social-media-management">دليل SMM</a>.</li>
<li><strong>الموقع:</strong> صفحة هبوط بطيئة أو غامضة أو بلا RTL صحيح تهدر بقية القنوات — ابدأوا خلال خمسة أيام مع <a href="/pages/fast">Fast Web Studio</a>.</li>
<li><strong>البريد والمتابعة:</strong> العميل بلا رد خلال ٢٤ ساعة يضيع. تذكير بسيط عبر واتساب أو CRM يخفض تكلفة الجذب.</li>
</ul>
${fig('/' + a.extraImg, 'قنوات التسويق الرقمي المتصلة بصفحة الخدمة', 'يجب أن يصل المحتوى والإعلان والشبكات إلى وعد واحد على الصفحة نفسها.')}
<h2 id="ch-measure">القياس وقمع المبيعات</h2>
<p>الوعي (المقالات والسيو)، التقييم (صفحة الخدمة و<a href="/pages/portfolio">معرض الأعمال</a>)، القرار (عرض سعر أو عرض تجريبي)، الشراء (واتساب وعقد). مؤشرات مفيدة: تكلفة العميل ونسبة الرد على واتساب والمبيعات المغلقة — لا CTR وحده. التالي: <a href="/pages/articles/digital-marketing">كيف يزيد التسويق الرقمي المبيعات</a>.</p>
<h2 id="ch-vs">الفرق عن التسويق التقليدي</h2>
<p>رقمياً يمكن رؤية CTR وCPA ونسبة الرد أسبوعياً ونقل الميزانية. اللوحات والإعلانات المطبوعة لا تعطي هذه الحلقة. مقدمة تقنية: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="noopener noreferrer" target="_blank">دليل Google للسيو</a>.</p>
<h2 id="ch-region">إيران وتركيا: واتساب وRTL واللغات</h2>
<p>في هذين السوقين تُغلق المحادثة الحقيقية غالباً على واتساب؛ نموذج إنجليزي بلا رقم محلي لا يبني ثقة. الصفحة الفارسية تحتاج RTL صحيح، والنسخة التركية تحتاج عنوان URL وhreflang منفصلين. النموذج التقني في <a href="/pages/articles/multilingual-web-iran-turkey">موقع متعدد اللغات لإيران وتركيا</a>.</p>
<h2 id="ch-start">من أين تبدأ</h2>
<ol>
<li>صفحة خدمة واضحة مع واتساب/نموذج وسرعة مقبولة على الجوال.</li>
<li>مقالتان أو ثلاث عنقودية ترتبط بها.</li>
<li>تتبع التحويل (نقرة واتساب أو إرسال النموذج) قبل ميزانية الإعلان.</li>
<li>ميزانية تجريبية لإعلانات جوجل فقط على استعلامات بنية الشراء؛ ضبط أسبوعي حسب تكلفة العميل.</li>
</ol>
<p>لتشغيل حملة استخدموا <a href="/pages/contact?service=digital-marketing">نموذج الاتصال</a> أو راجعوا <a href="/pages/services#digital-marketing">خدمات التسويق</a>.</p>`
  };
  if (map[a.slug]) return map[a.slug];
  return enBody(a)
    .replace(/Digital marketing is reaching the right audience online/g, 'التسويق الرقمي هو الوصول للجمهور المناسب عبر الإنترنت')
    .replace(/Traffic is not sales/g, 'الزيارات ليست مبيعات')
    .replace(/SMM is planning/g, 'SMM هو التخطيط')
    .replace(/delivers a company or shop site in 5 working days/g, 'يسلّم موقع شركة أو متجر خلال ٥ أيام عمل')
    .replace(/Picking level, pressure or point-level sensors/g, 'اختيار حساسات المستوى أو الضغط أو نقطة المستوى')
    .replace(/Bizdavar Group has worked since 2013/g, 'تعمل Bizdavar Group منذ ٢٠١٣')
    .replace(/Oil, petrochemical, water and food projects in Iran/g, 'مشاريع النفط والبتروكيماويات والمياه والغذاء في إيران')
    .replace(/A business serving Persian and Turkish customers/g, 'الأعمال التي تخدم عملاء فارسية وتركية');
}

ARTICLES.forEach((a) => {
  a.body = bodiesFor(a);
});

const UI = {
  fa: { toc: 'در این مقاله', faq: 'سوالات متداول', tags: 'برچسب‌ها', sources: 'منابع و لینک‌های معتبر' },
  tr: { toc: 'Bu yazıda', faq: 'SSS', tags: 'Etiketler', sources: 'Kaynaklar ve resmi bağlantılar' },
  en: { toc: 'In this article', faq: 'FAQ', tags: 'Tags', sources: 'Sources and official links' },
  ru: { toc: 'В этой статье', faq: 'FAQ', tags: 'Теги', sources: 'Источники и официальные ссылки' },
  ar: { toc: 'في هذا المقال', faq: 'أسئلة شائعة', tags: 'وسوم', sources: 'مصادر وروابط رسمية' }
};

function pickLoc(obj, lang) {
  if (obj == null) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || obj.fa || '';
}

function relatedItems(a, lang) {
  const loc = UI[lang] ? lang : 'en';
  return (a.related || []).map((r) => ({
    title: pickLoc(r.title, loc),
    url: r.url,
    desc: pickLoc(r.desc, loc)
  }));
}

const AUTHOR_LINE = {
  fa: 'بیزدوار گروپ',
  tr: 'Bizdavar Group',
  en: 'Bizdavar Group',
  ru: 'Bizdavar Group',
  ar: 'بيزدوار'
};

const DEFAULT_SOURCES = [
  {
    href: 'https://www.vega.com/en-ae',
    label: 'VEGA — official product information'
  },
  {
    href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    label: 'Google SEO Starter Guide'
  },
  {
    href: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
    label: 'Google: localized versions (hreflang)'
  }
];

function sourceItems(a, lang) {
  const loc = UI[lang] ? lang : 'en';
  return (a.sources || DEFAULT_SOURCES).map((s) => ({
    href: s.href,
    label: pickLoc(s.label, loc) || s.href
  }));
}

function innerHtml(a, lang) {
  const loc = UI[lang] ? lang : 'en';
  const u = UI[loc];
  const body = (a.body && a.body[loc]) || (a.body && a.body.en) || '';
  const tags = (a.tags[loc] || a.tags.en || []).map((t) => `<li>${t}</li>`).join('');
  const toc = (a.toc[loc] || a.toc.en || []).map(([id, lab]) => `<li><a href="#${id}">${lab}</a></li>`).join('');
  const faq = (a.faq[loc] || a.faq.en || [])
    .map((item) => `<details class="article-faq__item"><summary>${item.q}</summary><div class="article-faq__a">${item.a}</div></details>`)
    .join('');
  const sources = sourceItems(a, loc)
    .map((s) => `<li><a href="${s.href}" rel="noopener noreferrer" target="_blank">${s.label}</a></li>`)
    .join('\n    ');
  return `<nav class="article-toc" aria-label="${esc(u.toc)}"><p class="article-toc__title">${u.toc}</p><ol>${toc}</ol></nav>
<ul class="article-tags" aria-label="${esc(u.tags)}">${tags}</ul>
<div class="article-prose">${body}</div>
<section class="article-faq" id="ch-faq" aria-labelledby="faqHeading">
  <h2 id="faqHeading">${u.faq}</h2>
  ${faq}
</section>
<section class="article-sources" aria-labelledby="sourcesHeading">
  <h2 id="sourcesHeading">${u.sources}</h2>
  <ul>
    ${sources}
  </ul>
</section>`;
}

function stripHtml(s) {
  return String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

const LANG_TAG = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' };
const BASE = 'https://bizdavar.com';

function pageUrl(a, lang) {
  const prefix = lang === 'fa' ? '' : '/' + lang;
  return `${BASE}${prefix}/pages/articles/${a.slug}`;
}

function jsonLd(a, lang) {
  const loc = LANG_TAG[lang] ? lang : 'en';
  const url = pageUrl(a, loc);
  const faq = a.faq[loc] || a.faq.en || [];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': url + '#article',
        headline: a.title[loc] || a.title.en,
        description: a.description[loc] || a.description.en,
        datePublished: a.date,
        dateModified: a.modified || a.date,
        inLanguage: LANG_TAG[loc],
        image: BASE + '/' + a.image,
        keywords: a.keywords[loc] || a.keywords.en,
        author: { '@type': 'Organization', name: 'Bizdavar Group', url: BASE },
        publisher: {
          '@type': 'Organization',
          name: 'Bizdavar Group',
          logo: { '@type': 'ImageObject', url: BASE + '/assets/images/brand/bizdavar-logo-square.png' }
        },
        mainEntityOfPage: url,
        url,
        isPartOf: { '@id': BASE + '/#website' }
      },
      {
        '@type': 'FAQPage',
        '@id': url + '#faq',
        inLanguage: LANG_TAG[loc],
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: stripHtml(item.a) }
        }))
      }
    ]
  };
}

const CTA = {
  fa: { text: 'برای مشاوره تخصصی با بیزدوار تماس بگیرید.', primary: 'مشاوره رایگان', secondary: 'مشاهده خدمات' },
  tr: { text: 'Uzman danışmanlık için Bizdavar ile iletişime geçin.', primary: 'Ücretsiz danışmanlık', secondary: 'Hizmetleri gör' },
  en: { text: 'Contact Bizdavar for expert consulting.', primary: 'Free consultation', secondary: 'View services' },
  ru: { text: 'Свяжитесь с Bizdavar для экспертной консультации.', primary: 'Бесплатная консультация', secondary: 'Услуги' },
  ar: { text: 'تواصل مع بيزدوار للاستشارة المتخصصة.', primary: 'استشارة مجانية', secondary: 'عرض الخدمات' }
};

function ctaLinks(a) {
  if (a.slug === 'vega-supply-iran' || a.slug === 'industrial-sensors') {
    return { primary: '/pages/contact?product=VEGA', secondary: '/pages/vega' };
  }
  if (a.slug === 'prosense-gas-detection') {
    return { primary: '/pages/contact?product=Prosense', secondary: '/pages/prosense' };
  }
  if (a.slug === 'liqui-moly-supply-iran') {
    return { primary: '/pages/contact?product=Liqui%20Moly', secondary: '/pages/liqui-moly' };
  }
  if (a.slug === 'marvi-society-ios-app') {
    return { primary: '/pages/contact', secondary: '/pages/marvi-society' };
  }
  if (a.slug === 'field-tech-services') {
    return { primary: '/pages/field-tech', secondary: '/pages/contact' };
  }
  if (a.slug === 'fast-studio' || a.slug === 'multilingual-web-iran-turkey') {
    return { primary: '/pages/contact?service=fast-studio', secondary: '/pages/fast' };
  }
  if (a.slug === 'what-is-digital-marketing' || a.slug === 'digital-marketing' || a.slug === 'local-seo-iran') {
    return { primary: '/pages/contact?service=digital-marketing', secondary: '/pages/services#digital-marketing' };
  }
  if (a.slug === 'social-media-management') {
    return { primary: '/pages/contact?service=smm', secondary: '/pages/services#smm' };
  }
  return { primary: '/pages/contact', secondary: '/pages/services' };
}

function secondaryLabel(a, lang) {
  const loc = lang || 'fa';
  if (a.slug === 'vega-supply-iran' || a.slug === 'industrial-sensors') {
    return { fa: 'کاتالوگ VEGA', tr: 'VEGA kataloğu', en: 'VEGA catalogue', ru: 'Каталог VEGA', ar: 'كتالوج VEGA' }[loc];
  }
  if (a.slug === 'prosense-gas-detection') {
    return { fa: 'کاتالوگ Prosense', tr: 'Prosense kataloğu', en: 'Prosense catalogue', ru: 'Каталог Prosense', ar: 'كتالوج Prosense' }[loc];
  }
  if (a.slug === 'liqui-moly-supply-iran') {
    return { fa: 'Liqui Moly', tr: 'Liqui Moly', en: 'Liqui Moly', ru: 'Liqui Moly', ar: 'Liqui Moly' }[loc];
  }
  if (a.slug === 'marvi-society-ios-app') {
    return { fa: 'نمونه‌کار Marvi', tr: 'Marvi vaka', en: 'Marvi case', ru: 'Кейс Marvi', ar: 'دراسة Marvi' }[loc];
  }
  if (a.slug === 'field-tech-services') {
    return { fa: 'خدمات فنی', tr: 'Saha hizmetleri', en: 'Field services', ru: 'Выездные услуги', ar: 'خدمات ميدانية' }[loc];
  }
  if (a.slug === 'fast-studio' || a.slug === 'multilingual-web-iran-turkey') {
    return 'Fast Web Studio';
  }
  return CTA[loc]?.secondary || CTA.fa.secondary;
}

module.exports = {
  ARTICLES,
  esc,
  fig,
  innerHtml,
  UI,
  jsonLd,
  CTA,
  ctaLinks,
  pageUrl,
  stripHtml,
  pickLoc,
  relatedItems,
  sourceItems,
  AUTHOR_LINE,
  secondaryLabel
};
