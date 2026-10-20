/**
 * UTM builder (campaign URL builder) — SEO meta + copy for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js so RU/AR are set directly (not cloned from EN).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'ساخت لینک UTM',
      seoTitle: 'ساخت لینک UTM رایگان | UTM Builder برای Google Analytics — بیزدوار',
      seoDescription: 'لینک کمپین با پارامترهای UTM بسازید تا در Google Analytics ببینید فروش از کدام تبلیغ، پست یا ایمیل آمده است. پیش‌تنظیم اینستاگرام، گوگل ادز، ایمیل و واتساپ.',
      seoKeywords: 'ساخت لینک utm, utm builder, پارامتر utm, utm چیست, لینک کمپین, ردیابی تبلیغات, google analytics utm'
    },
    tr: {
      crumb: 'UTM link oluşturucu',
      seoTitle: 'UTM Link Oluşturucu — Ücretsiz Kampanya URL Builder | Bizdavar',
      seoDescription: "UTM parametreli kampanya linki oluşturun ve satışın hangi reklam, gönderi veya e-postadan geldiğini Google Analytics'te görün. Instagram, Google Ads, e-posta ve WhatsApp şablonları.",
      seoKeywords: 'utm oluşturucu, utm builder, utm link oluşturma, utm parametreleri, kampanya url oluşturucu, google analytics utm, utm nedir'
    },
    en: {
      crumb: 'UTM builder',
      seoTitle: 'UTM Builder — Free Campaign URL Builder for Google Analytics | Bizdavar',
      seoDescription: 'Build campaign links with UTM parameters and see in Google Analytics which ad, post or email drives sales. Presets for Instagram, Google Ads, email and WhatsApp.',
      seoKeywords: 'utm builder, campaign url builder, utm link generator, utm parameters, google analytics utm, utm tracking, utm generator'
    },
    ru: {
      crumb: 'Генератор UTM-меток',
      seoTitle: 'Генератор UTM-меток — бесплатный конструктор ссылок для Google Analytics | Bizdavar',
      seoDescription: 'Создайте ссылку с UTM-метками и смотрите в Google Analytics и Яндекс Метрике, какая реклама, пост или рассылка приносит продажи. Шаблоны для Instagram, Google Ads, email и WhatsApp.',
      seoKeywords: 'генератор utm меток, utm метки, конструктор utm, utm ссылка, utm builder, utm метки google analytics, utm метки для рекламы'
    },
    ar: {
      crumb: 'منشئ روابط UTM',
      seoTitle: 'منشئ روابط UTM مجاناً — بناء روابط الحملات لـ Google Analytics | Bizdavar',
      seoDescription: 'أنشئ روابط حملات بمعاملات UTM واعرف في Google Analytics أي إعلان أو منشور أو بريد يجلب المبيعات. قوالب جاهزة لإنستغرام وGoogle Ads والبريد وواتساب.',
      seoKeywords: 'منشئ utm, utm builder, روابط utm, معاملات utm, تتبع الحملات, google analytics utm, ما هو utm'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان آنلاین',
        title: 'ساخت لینک UTM',
        lead: 'برای هر تبلیغ، پست یا ایمیل یک لینک UTM بسازید تا در Google Analytics دقیقاً ببینید بازدید و فروش از کجا آمده است.'
      },
      ui: {
        url: 'آدرس صفحه مقصد',
        urlPh: 'https://example.com/landing',
        presets: 'پیش‌تنظیم‌ها:',
        presetInstagram: 'اینستاگرام',
        presetGoogle: 'Google Ads',
        presetEmail: 'ایمیل',
        presetWhatsapp: 'واتساپ',
        presetTelegram: 'تلگرام',
        presetLinkedin: 'لینکدین',
        source: 'منبع (utm_source)',
        sourcePh: 'instagram',
        sourceHint: 'جایی که لینک منتشر می‌شود: instagram، google، newsletter',
        medium: 'رسانه (utm_medium)',
        mediumPh: 'social',
        mediumHint: 'نوع کانال: social، cpc، email، referral',
        campaign: 'نام کمپین (utm_campaign)',
        campaignPh: 'yalda_sale_2026',
        term: 'کلمه کلیدی (utm_term)',
        termPh: 'اختیاری — برای تبلیغات جست‌وجو',
        content: 'محتوا (utm_content)',
        contentPh: 'اختیاری — برای تفکیک بنر یا لینک',
        normalize: 'حروف کوچک و خط تیره به‌جای فاصله',
        resultTitle: 'لینک کمپین شما',
        resultEmpty: 'آدرس صفحه، منبع، رسانه و نام کمپین را وارد کنید.',
        invalidUrl: 'آدرس صفحه معتبر نیست. با https:// شروع کنید.',
        copy: 'کپی لینک',
        copied: 'کپی شد ✓',
        open: 'باز کردن لینک',
        reset: 'پاک کردن فرم',
        note: 'لینک در مرورگر شما ساخته می‌شود و چیزی روی سرور ما ذخیره نمی‌شود.'
      },
      explain: {
        eyebrow: 'آشنایی',
        title: 'UTM چیست و چه کمکی می‌کند؟',
        items: [
          { title: 'برچسب روی لینک', body: 'UTM چند پارامتر به انتهای لینک اضافه می‌کند. محتوای صفحه تغییری نمی‌کند، ولی ابزار آنالیتیکس می‌فهمد بازدیدکننده از کجا آمده است.' },
          { title: 'سه پارامتر اصلی', body: 'source می‌گوید از کجا (instagram)، medium می‌گوید چه نوع کانالی (social) و campaign می‌گوید کدام کمپین (yalda_sale). term و content اختیاری‌اند.' },
          { title: 'گزارش در Google Analytics', body: 'در GA4 از مسیر Reports › Acquisition › Traffic acquisition، بازدید و فروش هر منبع، رسانه و کمپین را جداگانه ببینید.' }
        ]
      },
      tips: {
        title: 'قوانین نام‌گذاری UTM',
        items: [
          'همیشه از حروف کوچک استفاده کنید؛ Instagram و instagram در گزارش دو منبع جدا می‌شوند.',
          'به‌جای فاصله از خط تیره یا زیرخط استفاده کنید و نام‌ها را کوتاه نگه دارید.',
          'روی لینک‌های داخلی سایت خودتان UTM نگذارید؛ منبع اصلی جلسه از بین می‌رود.',
          'فهرست نام کمپین‌ها را در یک شیت نگه دارید تا تیم یکسان نام‌گذاری کند.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره UTM',
        items: [
          { q: 'لینک UTM چیست؟', a: 'لینکی است که پارامترهای utm_source، utm_medium و utm_campaign به آن اضافه شده تا ابزارهایی مثل Google Analytics منبع بازدید را دقیق ثبت کنند.' },
          { q: 'آیا UTM به سئو ضرر می‌زند؟', a: 'خیر، به شرطی که صفحه تگ canonical درست داشته باشد. گوگل نسخه بدون UTM را ایندکس می‌کند. فقط روی لینک‌های داخلی سایت از UTM استفاده نکنید.' },
          { q: 'نتیجه UTM را کجا ببینم؟', a: 'در GA4 به Reports › Acquisition › Traffic acquisition بروید و ابعاد Session source / medium یا Session campaign را انتخاب کنید.' },
          { q: 'برای Google Ads هم UTM لازم است؟', a: 'اگر Google Ads به GA4 متصل و auto-tagging روشن باشد لازم نیست. برای اینستاگرام، ایمیل، واتساپ و تبلیغات دیگر حتماً UTM بگذارید.' },
          { q: 'لینک UTM طولانی است؛ چه کنم؟', a: 'می‌توانید آن را با یک کوتاه‌کننده لینک کوتاه کنید. پارامترها بعد از باز شدن لینک کوتاه حفظ می‌شوند.' }
        ]
      },
      cta: {
        title: 'می‌خواهید بدانید کدام تبلیغ فروش می‌آورد؟',
        desc: 'تیم بازاریابی دیجیتال بیزدوار کمپین‌های Google Ads، Meta و LinkedIn را با ردیابی دقیق و گزارش فروش اجرا می‌کند.',
        btn: 'بازاریابی دیجیتال بیزدوار',
        btn2: 'مشاوره رایگان'
      },
      geoText: 'ساخت لینک UTM برای کمپین‌های ایران، ترکیه، کشورهای عربی، روسیه، اروپا و آمریکا — سازگار با GA4.',
      related: [
        { title: 'بازاریابی دیجیتال', url: 'services#digital-marketing', desc: 'Google Ads، Meta و LinkedIn' },
        { title: 'بازاریابی دیجیتال چیست؟', url: 'articles/what-is-digital-marketing', desc: 'راهنمای شروع برای کسب‌وکارها' },
        { title: 'ساخت لینک واتساپ', url: 'whatsapp-link-generator', desc: 'لینک wa.me با پیام آماده و QR' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz online araç',
        title: 'UTM Link Oluşturucu',
        lead: "Her reklam, gönderi veya e-posta için bir UTM linki oluşturun; ziyaret ve satışın tam olarak nereden geldiğini Google Analytics'te görün."
      },
      ui: {
        url: 'Hedef sayfa adresi',
        urlPh: 'https://ornek.com/kampanya',
        presets: 'Şablonlar:',
        presetInstagram: 'Instagram',
        presetGoogle: 'Google Ads',
        presetEmail: 'E-posta',
        presetWhatsapp: 'WhatsApp',
        presetTelegram: 'Telegram',
        presetLinkedin: 'LinkedIn',
        source: 'Kaynak (utm_source)',
        sourcePh: 'instagram',
        sourceHint: 'Linkin paylaşıldığı yer: instagram, google, newsletter',
        medium: 'Ortam (utm_medium)',
        mediumPh: 'social',
        mediumHint: 'Kanal türü: social, cpc, email, referral',
        campaign: 'Kampanya adı (utm_campaign)',
        campaignPh: 'yaz_indirimi_2026',
        term: 'Anahtar kelime (utm_term)',
        termPh: 'İsteğe bağlı — arama reklamları için',
        content: 'İçerik (utm_content)',
        contentPh: 'İsteğe bağlı — banner veya linki ayırmak için',
        normalize: 'Küçük harf ve boşluk yerine tire',
        resultTitle: 'Kampanya linkiniz',
        resultEmpty: 'Sayfa adresini, kaynak, ortam ve kampanya adını girin.',
        invalidUrl: 'Sayfa adresi geçersiz. https:// ile başlayın.',
        copy: 'Linki kopyala',
        copied: 'Kopyalandı ✓',
        open: 'Linki aç',
        reset: 'Formu temizle',
        note: 'Link tarayıcınızda oluşturulur; sunucumuzda hiçbir şey saklanmaz.'
      },
      explain: {
        eyebrow: 'Temel bilgiler',
        title: 'UTM nedir, ne işe yarar?',
        items: [
          { title: 'Linke eklenen etiket', body: 'UTM linkin sonuna birkaç parametre ekler. Sayfa içeriği değişmez ama analiz aracı ziyaretçinin nereden geldiğini anlar.' },
          { title: 'Üç ana parametre', body: 'source nereden geldiğini (instagram), medium kanal türünü (social), campaign hangi kampanya olduğunu (yaz_indirimi) söyler. term ve content isteğe bağlıdır.' },
          { title: "Google Analytics'te rapor", body: "GA4'te Reports › Acquisition › Traffic acquisition yolundan her kaynak, ortam ve kampanyanın ziyaret ve satışlarını ayrı görün." }
        ]
      },
      tips: {
        title: 'UTM adlandırma kuralları',
        items: [
          'Her zaman küçük harf kullanın; Instagram ve instagram raporda iki ayrı kaynak olur.',
          'Boşluk yerine tire veya alt çizgi kullanın ve adları kısa tutun.',
          'Kendi sitenizdeki iç linklere UTM eklemeyin; oturumun asıl kaynağı kaybolur.',
          'Ekibin aynı adları kullanması için kampanya adlarını bir tabloda tutun.'
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'UTM hakkında sorular',
        items: [
          { q: 'UTM linki nedir?', a: 'Google Analytics gibi araçların ziyaret kaynağını doğru kaydetmesi için utm_source, utm_medium ve utm_campaign parametreleri eklenmiş bir linktir.' },
          { q: "UTM SEO'ya zarar verir mi?", a: "Hayır, sayfada doğru canonical etiketi varsa. Google UTM'siz sürümü dizine ekler. Sadece site içi linklerde UTM kullanmayın." },
          { q: 'UTM sonuçlarını nerede görürüm?', a: "GA4'te Reports › Acquisition › Traffic acquisition'a gidin ve Session source / medium veya Session campaign boyutunu seçin." },
          { q: 'Google Ads için de UTM gerekir mi?', a: "Google Ads GA4'e bağlı ve otomatik etiketleme açıksa gerekmez. Instagram, e-posta, WhatsApp ve diğer reklamlarda mutlaka UTM kullanın." },
          { q: 'UTM linki çok uzun, ne yapmalıyım?', a: 'Bir link kısaltıcı ile kısaltabilirsiniz. Kısa link açıldığında parametreler korunur.' }
        ]
      },
      cta: {
        title: 'Hangi reklamın satış getirdiğini bilmek ister misiniz?',
        desc: 'Bizdavar dijital pazarlama ekibi Google Ads, Meta ve LinkedIn kampanyalarını doğru takip ve satış raporlarıyla yönetir.',
        btn: 'Bizdavar dijital pazarlama',
        btn2: 'Ücretsiz danışmanlık'
      },
      geoText: "Türkiye, İran, Arap ülkeleri, Rusya, Avrupa ve ABD kampanyaları için UTM linki — GA4 uyumlu.",
      related: [
        { title: 'Dijital pazarlama', url: 'services#digital-marketing', desc: 'Google Ads, Meta ve LinkedIn' },
        { title: 'Dijital pazarlama nedir?', url: 'articles/what-is-digital-marketing', desc: 'İşletmeler için başlangıç rehberi' },
        { title: 'WhatsApp link oluşturucu', url: 'whatsapp-link-generator', desc: 'Hazır mesajlı wa.me linki ve QR' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free online tool',
        title: 'UTM Builder',
        lead: 'Create a UTM link for every ad, post or email and see in Google Analytics exactly where your visits and sales come from.'
      },
      ui: {
        url: 'Landing page URL',
        urlPh: 'https://example.com/landing',
        presets: 'Presets:',
        presetInstagram: 'Instagram',
        presetGoogle: 'Google Ads',
        presetEmail: 'Email',
        presetWhatsapp: 'WhatsApp',
        presetTelegram: 'Telegram',
        presetLinkedin: 'LinkedIn',
        source: 'Source (utm_source)',
        sourcePh: 'instagram',
        sourceHint: 'Where the link is shared: instagram, google, newsletter',
        medium: 'Medium (utm_medium)',
        mediumPh: 'social',
        mediumHint: 'Channel type: social, cpc, email, referral',
        campaign: 'Campaign name (utm_campaign)',
        campaignPh: 'black_friday_2026',
        term: 'Keyword (utm_term)',
        termPh: 'Optional — for search ads',
        content: 'Content (utm_content)',
        contentPh: 'Optional — to tell banners or links apart',
        normalize: 'Lowercase and dashes instead of spaces',
        resultTitle: 'Your campaign URL',
        resultEmpty: 'Enter the page URL, source, medium and campaign name.',
        invalidUrl: 'The page URL is not valid. Start with https://.',
        copy: 'Copy URL',
        copied: 'Copied ✓',
        open: 'Open URL',
        reset: 'Clear form',
        note: 'The URL is built in your browser; nothing is stored on our servers.'
      },
      explain: {
        eyebrow: 'The basics',
        title: 'What are UTM parameters?',
        items: [
          { title: 'A tag on your link', body: 'UTM adds a few parameters to the end of a URL. The page stays the same, but your analytics tool learns where the visitor came from.' },
          { title: 'Three key parameters', body: 'source says where (instagram), medium says what kind of channel (social) and campaign says which campaign (black_friday). term and content are optional.' },
          { title: 'Reports in Google Analytics', body: 'In GA4, open Reports › Acquisition › Traffic acquisition to see visits and sales for each source, medium and campaign.' }
        ]
      },
      tips: {
        title: 'UTM naming rules',
        items: [
          'Always use lowercase — Instagram and instagram show up as two different sources.',
          'Use dashes or underscores instead of spaces and keep names short.',
          "Don't add UTMs to internal links on your own site; it overwrites the real session source.",
          'Keep campaign names in a shared sheet so the whole team names things the same way.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'UTM questions',
        items: [
          { q: 'What is a UTM link?', a: 'A link with utm_source, utm_medium and utm_campaign parameters added so tools like Google Analytics record exactly where a visit came from.' },
          { q: 'Do UTM parameters hurt SEO?', a: "No, as long as the page has a correct canonical tag — Google indexes the version without UTMs. Just don't use UTMs on internal links." },
          { q: 'Where do I see UTM results?', a: 'In GA4 go to Reports › Acquisition › Traffic acquisition and choose the Session source / medium or Session campaign dimension.' },
          { q: 'Do I need UTMs for Google Ads?', a: 'Not if Google Ads is linked to GA4 with auto-tagging on. For Instagram, email, WhatsApp and other ads, always add UTMs.' },
          { q: 'My UTM link is too long — what can I do?', a: 'Shorten it with any link shortener. The parameters are kept when the short link opens.' }
        ]
      },
      cta: {
        title: 'Want to know which ads actually sell?',
        desc: "Bizdavar's digital marketing team runs Google Ads, Meta and LinkedIn campaigns with proper tracking and sales reporting.",
        btn: 'Bizdavar digital marketing',
        btn2: 'Free consultation'
      },
      geoText: 'UTM links for campaigns in Turkey, Iran, the Arab world, Russia, Europe and the US — GA4 compatible.',
      related: [
        { title: 'Digital marketing', url: 'services#digital-marketing', desc: 'Google Ads, Meta and LinkedIn' },
        { title: 'What is digital marketing?', url: 'articles/what-is-digital-marketing', desc: 'A starter guide for businesses' },
        { title: 'WhatsApp link generator', url: 'whatsapp-link-generator', desc: 'wa.me link with a ready message and QR' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный онлайн-инструмент',
        title: 'Генератор UTM-меток',
        lead: 'Создайте ссылку с UTM-метками для каждой рекламы, поста или рассылки и точно видите в Google Analytics, откуда приходят визиты и продажи.'
      },
      ui: {
        url: 'Адрес целевой страницы',
        urlPh: 'https://example.ru/landing',
        presets: 'Шаблоны:',
        presetInstagram: 'Instagram',
        presetGoogle: 'Google Ads',
        presetEmail: 'Email',
        presetWhatsapp: 'WhatsApp',
        presetTelegram: 'Telegram',
        presetLinkedin: 'LinkedIn',
        source: 'Источник (utm_source)',
        sourcePh: 'instagram',
        sourceHint: 'Где размещена ссылка: instagram, google, newsletter',
        medium: 'Канал (utm_medium)',
        mediumPh: 'social',
        mediumHint: 'Тип канала: social, cpc, email, referral',
        campaign: 'Название кампании (utm_campaign)',
        campaignPh: 'sale_2026',
        term: 'Ключевое слово (utm_term)',
        termPh: 'Необязательно — для поисковой рекламы',
        content: 'Содержание (utm_content)',
        contentPh: 'Необязательно — чтобы различать баннеры и ссылки',
        normalize: 'Строчные буквы и дефис вместо пробелов',
        resultTitle: 'Ваша ссылка с UTM',
        resultEmpty: 'Введите адрес страницы, источник, канал и название кампании.',
        invalidUrl: 'Неверный адрес страницы. Начните с https://.',
        copy: 'Копировать ссылку',
        copied: 'Скопировано ✓',
        open: 'Открыть ссылку',
        reset: 'Очистить форму',
        note: 'Ссылка создаётся в вашем браузере; на наших серверах ничего не сохраняется.'
      },
      explain: {
        eyebrow: 'Основы',
        title: 'Что такое UTM-метки?',
        items: [
          { title: 'Метка на ссылке', body: 'UTM добавляет несколько параметров в конец ссылки. Страница не меняется, но система аналитики понимает, откуда пришёл посетитель.' },
          { title: 'Три главных параметра', body: 'source — откуда (instagram), medium — тип канала (social), campaign — какая кампания (sale_2026). term и content необязательны.' },
          { title: 'Отчёты в Google Analytics', body: 'В GA4 откройте Reports › Acquisition › Traffic acquisition и смотрите визиты и продажи по каждому источнику, каналу и кампании. Метки понимает и Яндекс Метрика.' }
        ]
      },
      tips: {
        title: 'Правила именования UTM',
        items: [
          'Всегда пишите строчными: Instagram и instagram в отчёте — два разных источника.',
          'Используйте дефис или подчёркивание вместо пробелов и короткие названия.',
          'Не ставьте UTM на внутренние ссылки сайта — это затирает настоящий источник сессии.',
          'Ведите таблицу названий кампаний, чтобы вся команда называла их одинаково.'
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы об UTM-метках',
        items: [
          { q: 'Что такое ссылка с UTM?', a: 'Это ссылка с параметрами utm_source, utm_medium и utm_campaign, по которым Google Analytics и Яндекс Метрика точно записывают источник визита.' },
          { q: 'Вредят ли UTM-метки SEO?', a: 'Нет, если на странице правильный canonical — Google индексирует версию без меток. Просто не используйте UTM на внутренних ссылках.' },
          { q: 'Где смотреть результаты UTM?', a: 'В GA4 перейдите в Reports › Acquisition › Traffic acquisition и выберите параметр Session source / medium или Session campaign.' },
          { q: 'Нужны ли UTM для Google Ads?', a: 'Нет, если Google Ads связан с GA4 и включена автопометка. Для Instagram, email, WhatsApp и другой рекламы метки обязательны.' },
          { q: 'Ссылка с UTM слишком длинная — что делать?', a: 'Сократите её любым сервисом сокращения ссылок. Параметры сохранятся при переходе по короткой ссылке.' }
        ]
      },
      cta: {
        title: 'Хотите знать, какая реклама приносит продажи?',
        desc: 'Команда digital-маркетинга Bizdavar ведёт кампании в Google Ads, Meta и LinkedIn с точной аналитикой и отчётами о продажах.',
        btn: 'Digital-маркетинг Bizdavar',
        btn2: 'Бесплатная консультация'
      },
      geoText: 'UTM-ссылки для кампаний в России, Турции, ОАЭ, Иране, Европе и США — совместимо с GA4 и Яндекс Метрикой.',
      related: [
        { title: 'Digital-маркетинг', url: 'services#digital-marketing', desc: 'Google Ads, Meta и LinkedIn' },
        { title: 'Что такое digital-маркетинг?', url: 'articles/what-is-digital-marketing', desc: 'Руководство для бизнеса' },
        { title: 'Генератор ссылки WhatsApp', url: 'whatsapp-link-generator', desc: 'Ссылка wa.me с текстом и QR' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة مجانية عبر الإنترنت',
        title: 'منشئ روابط UTM',
        lead: 'أنشئ رابط UTM لكل إعلان أو منشور أو بريد، واعرف في Google Analytics بدقة من أين تأتي الزيارات والمبيعات.'
      },
      ui: {
        url: 'عنوان الصفحة المقصودة',
        urlPh: 'https://example.com/landing',
        presets: 'قوالب جاهزة:',
        presetInstagram: 'إنستغرام',
        presetGoogle: 'Google Ads',
        presetEmail: 'البريد',
        presetWhatsapp: 'واتساب',
        presetTelegram: 'تيليغرام',
        presetLinkedin: 'لينكدإن',
        source: 'المصدر (utm_source)',
        sourcePh: 'instagram',
        sourceHint: 'مكان نشر الرابط: instagram أو google أو newsletter',
        medium: 'الوسيط (utm_medium)',
        mediumPh: 'social',
        mediumHint: 'نوع القناة: social أو cpc أو email أو referral',
        campaign: 'اسم الحملة (utm_campaign)',
        campaignPh: 'ramadan_sale_2026',
        term: 'الكلمة المفتاحية (utm_term)',
        termPh: 'اختياري — لإعلانات البحث',
        content: 'المحتوى (utm_content)',
        contentPh: 'اختياري — للتمييز بين البنرات أو الروابط',
        normalize: 'أحرف صغيرة وشرطة بدل المسافات',
        resultTitle: 'رابط حملتك',
        resultEmpty: 'أدخل عنوان الصفحة والمصدر والوسيط واسم الحملة.',
        invalidUrl: 'عنوان الصفحة غير صالح. ابدأ بـ https://.',
        copy: 'نسخ الرابط',
        copied: 'تم النسخ ✓',
        open: 'فتح الرابط',
        reset: 'مسح النموذج',
        note: 'يتم إنشاء الرابط في متصفحك ولا يُحفظ أي شيء على خوادمنا.'
      },
      explain: {
        eyebrow: 'الأساسيات',
        title: 'ما هي معاملات UTM؟',
        items: [
          { title: 'وسم على الرابط', body: 'يضيف UTM بضعة معاملات إلى نهاية الرابط. لا تتغير الصفحة، لكن أداة التحليلات تعرف من أين جاء الزائر.' },
          { title: 'ثلاثة معاملات أساسية', body: 'source يحدد المصدر (instagram)، وmedium نوع القناة (social)، وcampaign اسم الحملة (ramadan_sale). أما term وcontent فاختياريان.' },
          { title: 'التقارير في Google Analytics', body: 'في GA4 افتح Reports › Acquisition › Traffic acquisition لترى الزيارات والمبيعات لكل مصدر ووسيط وحملة.' }
        ]
      },
      tips: {
        title: 'قواعد تسمية UTM',
        items: [
          'استخدم الأحرف الصغيرة دائماً؛ Instagram وinstagram يظهران كمصدرين مختلفين.',
          'استخدم الشرطة أو الشرطة السفلية بدل المسافات واجعل الأسماء قصيرة.',
          'لا تضع UTM على الروابط الداخلية في موقعك؛ فهي تمحو المصدر الحقيقي للجلسة.',
          'احتفظ بأسماء الحملات في جدول مشترك ليستخدم الفريق التسمية نفسها.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول UTM',
        items: [
          { q: 'ما هو رابط UTM؟', a: 'رابط أضيفت إليه معاملات utm_source وutm_medium وutm_campaign لكي تسجل أدوات مثل Google Analytics مصدر الزيارة بدقة.' },
          { q: 'هل تضر معاملات UTM بالسيو؟', a: 'لا، ما دامت الصفحة تحتوي على وسم canonical صحيح، إذ تفهرس Google النسخة دون UTM. فقط لا تستخدم UTM في الروابط الداخلية.' },
          { q: 'أين أرى نتائج UTM؟', a: 'في GA4 اذهب إلى Reports › Acquisition › Traffic acquisition واختر بُعد Session source / medium أو Session campaign.' },
          { q: 'هل أحتاج UTM لإعلانات Google Ads؟', a: 'لا إذا كان Google Ads مرتبطاً بـ GA4 مع تفعيل الوسم التلقائي. أما لإنستغرام والبريد وواتساب والإعلانات الأخرى فاستخدم UTM دائماً.' },
          { q: 'رابط UTM طويل جداً، ماذا أفعل؟', a: 'اختصره بأي خدمة لاختصار الروابط، وستبقى المعاملات محفوظة عند فتح الرابط القصير.' }
        ]
      },
      cta: {
        title: 'تريد أن تعرف أي إعلان يجلب المبيعات؟',
        desc: 'يدير فريق التسويق الرقمي في Bizdavar حملات Google Ads وMeta وLinkedIn مع تتبع دقيق وتقارير مبيعات.',
        btn: 'التسويق الرقمي من Bizdavar',
        btn2: 'استشارة مجانية'
      },
      geoText: 'روابط UTM لحملات الإمارات والسعودية والعراق وتركيا وإيران وأوروبا وأمريكا — متوافقة مع GA4.',
      related: [
        { title: 'التسويق الرقمي', url: 'services#digital-marketing', desc: 'Google Ads وMeta وLinkedIn' },
        { title: 'ما هو التسويق الرقمي؟', url: 'articles/what-is-digital-marketing', desc: 'دليل البداية للشركات' },
        { title: 'إنشاء رابط واتساب', url: 'whatsapp-link-generator', desc: 'رابط wa.me برسالة جاهزة ورمز QR' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.utmBuilder = Object.assign(L.pages.utmBuilder || {}, seo[lang]);
    L.utmBuilderPage = pages[lang];
  });
})();
