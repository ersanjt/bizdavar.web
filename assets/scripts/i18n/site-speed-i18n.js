/**
 * Website speed test (Google PageSpeed Insights) — SEO meta + copy for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js so RU/AR are set directly (not cloned from EN).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'تست سرعت سایت',
      seoTitle: 'تست سرعت سایت رایگان | بررسی امتیاز گوگل و Core Web Vitals — بیزدوار',
      seoDescription: 'سرعت سایت خود را با Google PageSpeed Insights تست کنید: امتیاز موبایل و دسکتاپ، LCP، CLS، INP و پیشنهادهای بهبود به فارسی. رایگان و بدون ثبت‌نام.',
      seoKeywords: 'تست سرعت سایت, بررسی سرعت سایت, pagespeed insights, امتیاز سرعت گوگل, core web vitals, افزایش سرعت سایت, تست سرعت وردپرس'
    },
    tr: {
      crumb: 'Site hız testi',
      seoTitle: 'Web Sitesi Hız Testi — Ücretsiz PageSpeed ve Core Web Vitals | Bizdavar',
      seoDescription: 'Sitenizin hızını Google PageSpeed Insights ile test edin: mobil ve masaüstü puanı, LCP, CLS, INP ve Türkçe iyileştirme önerileri. Ücretsiz, kayıt yok.',
      seoKeywords: 'site hız testi, web sitesi hız testi, pagespeed insights, google hız testi, core web vitals, site hızlandırma, wordpress hız testi'
    },
    en: {
      crumb: 'Website speed test',
      seoTitle: 'Website Speed Test — Free PageSpeed & Core Web Vitals Check | Bizdavar',
      seoDescription: 'Test your website speed with Google PageSpeed Insights: mobile and desktop score, LCP, CLS, INP and the top fixes to make your site faster. Free, no sign-up.',
      seoKeywords: 'website speed test, site speed test, pagespeed insights, page speed checker, core web vitals test, google speed test, wordpress speed test'
    },
    ru: {
      crumb: 'Тест скорости сайта',
      seoTitle: 'Проверка скорости сайта — бесплатный PageSpeed и Core Web Vitals | Bizdavar',
      seoDescription: 'Проверьте скорость сайта через Google PageSpeed Insights: оценка для мобильных и ПК, LCP, CLS, INP и главные рекомендации по ускорению. Бесплатно, без регистрации.',
      seoKeywords: 'проверка скорости сайта, тест скорости сайта, pagespeed insights, скорость загрузки сайта, core web vitals, ускорение сайта, скорость сайта google'
    },
    ar: {
      crumb: 'اختبار سرعة الموقع',
      seoTitle: 'اختبار سرعة الموقع مجاناً — فحص PageSpeed وCore Web Vitals | Bizdavar',
      seoDescription: 'اختبر سرعة موقعك عبر Google PageSpeed Insights: تقييم الجوال وسطح المكتب وLCP وCLS وINP وأهم اقتراحات التسريع بالعربية. مجاني ودون تسجيل.',
      seoKeywords: 'اختبار سرعة الموقع, فحص سرعة الموقع, pagespeed insights, سرعة تحميل الموقع, core web vitals, تسريع الموقع, اختبار سرعة ووردبريس'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان آنلاین',
        title: 'تست سرعت سایت',
        lead: 'آدرس سایت را وارد کنید تا امتیاز سرعت گوگل، Core Web Vitals و مهم‌ترین پیشنهادهای بهبود را برای موبایل یا دسکتاپ ببینید.'
      },
      ui: {
        url: 'آدرس سایت',
        urlPh: 'example.com',
        device: 'دستگاه',
        mobile: 'موبایل',
        desktop: 'دسکتاپ',
        analyze: 'بررسی سرعت',
        analyzing: 'در حال بررسی…',
        statusIdle: 'بررسی با Google PageSpeed Insights حدود ۲۰ تا ۴۰ ثانیه طول می‌کشد.',
        statusRunning: 'گوگل در حال بارگذاری و تحلیل صفحه است…',
        statusDone: 'بررسی کامل شد.',
        errInvalid: 'آدرس معتبر نیست. مثلاً example.com یا https://example.com وارد کنید.',
        errFetch: 'گوگل نتوانست این صفحه را بارگذاری کند. مطمئن شوید سایت آنلاین و عمومی است.',
        errQuota: 'سقف درخواست‌های رایگان گوگل فعلاً پر شده است. چند دقیقه دیگر دوباره امتحان کنید.',
        errNetwork: 'اتصال به Google برقرار نشد. اینترنت یا VPN خود را بررسی کنید.',
        scoreTitle: 'امتیاز سرعت',
        scoreGood: 'عالی — سایت شما سریع است.',
        scoreAvg: 'متوسط — جای بهبود دارد.',
        scorePoor: 'ضعیف — کندی سایت، بازدیدکننده و رتبه گوگل را از شما می‌گیرد.',
        labTitle: 'معیارهای اندازه‌گیری‌شده',
        fcp: 'FCP · اولین نمایش',
        lcp: 'LCP · محتوای اصلی',
        tbt: 'TBT · زمان مسدودی',
        cls: 'CLS · جابه‌جایی چیدمان',
        si: 'Speed Index',
        fieldTitle: 'تجربه کاربران واقعی (Core Web Vitals)',
        fieldNone: 'گوگل هنوز داده کافی از کاربران واقعی این سایت ندارد.',
        inp: 'INP · پاسخ به کلیک',
        fieldGood: 'خوب',
        fieldAvg: 'نیازمند بهبود',
        fieldPoor: 'ضعیف',
        oppTitle: 'مهم‌ترین پیشنهادهای بهبود',
        oppNone: 'پیشنهاد مهمی پیدا نشد.',
        fullReport: 'گزارش کامل در PageSpeed Insights',
        note: 'نتایج از Google PageSpeed Insights گرفته می‌شود و روی سرور ما ذخیره نمی‌شود.'
      },
      explain: {
        eyebrow: 'معنی نتایج',
        title: 'امتیاز سرعت و Core Web Vitals چیست؟',
        items: [
          { title: 'امتیاز Performance', body: 'عددی بین ۰ تا ۱۰۰ که گوگل از چند معیار سرعت می‌سازد. ۹۰ به بالا سبز (عالی)، ۵۰ تا ۸۹ نارنجی و زیر ۵۰ قرمز است.' },
          { title: 'Core Web Vitals', body: 'سه معیار رسمی گوگل برای تجربه کاربر: LCP (سرعت نمایش محتوای اصلی)، INP (پاسخ به کلیک) و CLS (ثبات چیدمان). روی رتبه سئو اثر دارند.' },
          { title: 'چرا سرعت مهم است؟', body: 'هر ثانیه تأخیر نرخ تبدیل را کم می‌کند و بیشتر کاربران موبایل صفحه‌ای را که بیش از ۳ ثانیه طول بکشد، می‌بندند.' }
        ]
      },
      tips: {
        title: 'چطور سرعت سایت را بالا ببریم؟',
        items: [
          'تصاویر را به WebP یا AVIF تبدیل و فشرده کنید و ابعاد درست بدهید.',
          'تصاویر و ویدیوهای پایین صفحه را با lazy loading بارگذاری کنید.',
          'افزونه‌ها و اسکریپت‌های اضافه (چت، پیکسل‌ها، اسلایدر) را کم کنید.',
          'از کش مرورگر، فشرده‌سازی Brotli/Gzip و CDN مثل Cloudflare استفاده کنید.',
          'هاست سریع با پردازنده و حافظه کافی و نزدیک به مخاطب انتخاب کنید.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره تست سرعت سایت',
        items: [
          { q: 'این تست سرعت سایت چطور کار می‌کند؟', a: 'آدرس شما به Google PageSpeed Insights فرستاده می‌شود. گوگل صفحه را با Lighthouse بارگذاری می‌کند و امتیاز، معیارها و پیشنهادها را برمی‌گرداند — همان داده‌ای که گوگل برای سنجش سرعت استفاده می‌کند.' },
          { q: 'امتیاز خوب چند است؟', a: '۹۰ تا ۱۰۰ عالی، ۵۰ تا ۸۹ متوسط و زیر ۵۰ ضعیف است. برای Core Web Vitals، LCP زیر ۲٫۵ ثانیه، INP زیر ۲۰۰ میلی‌ثانیه و CLS زیر ۰٫۱ خوب است.' },
          { q: 'چرا امتیاز موبایل از دسکتاپ کمتر است؟', a: 'تست موبایل با پردازنده ضعیف‌تر و اینترنت کندتر شبیه‌سازی می‌شود. چون بیشتر بازدیدها از موبایل است، گوگل امتیاز موبایل را مبنای رتبه قرار می‌دهد.' },
          { q: 'چرا هر بار امتیاز کمی فرق می‌کند؟', a: 'بار سرور، تبلیغات، اسکریپت‌های بیرونی و شبکه در هر اجرا متفاوت است. چند بار تست بگیرید و میانگین را در نظر بگیرید.' },
          { q: 'چطور امتیاز ۹۰ به بالا بگیرم؟', a: 'بهینه‌سازی تصاویر، کم کردن جاوااسکریپت، کش و هاست خوب بیشترین اثر را دارند. Fast Web Studio بیزدوار سایت‌هایی با امتیاز بالای ۹۰ در ۵ روز تحویل می‌دهد.' }
        ]
      },
      cta: {
        title: 'امتیازتان زیر ۹۰ است؟',
        desc: 'Fast Web Studio بیزدوار سایت سریع، موبایل‌پسند و سئوشده با امتیاز بالای ۹۰ را در ۵ روز با قیمت ثابت تحویل می‌دهد.',
        btn: 'مشاهده Fast Web Studio',
        btn2: 'مشاوره رایگان'
      },
      geoText: 'تست سرعت سایت برای وب‌سایت‌های ایران، ترکیه، کشورهای عربی، روسیه و سراسر جهان — با داده رسمی Google PageSpeed Insights.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'سایت سریع و حرفه‌ای در ۵ روز' },
        { title: 'سرعت سایت در ۵ روز', url: 'articles/website-speed-5-days', desc: 'چرا سرعت سایت فروش را بالا می‌برد' },
        { title: 'تست سرعت اینترنت', url: 'speed-test', desc: 'دانلود، آپلود و پینگ اینترنت شما' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz online araç',
        title: 'Web Sitesi Hız Testi',
        lead: "Site adresini girin; Google hız puanını, Core Web Vitals değerlerini ve en önemli iyileştirme önerilerini mobil veya masaüstü için görün."
      },
      ui: {
        url: 'Site adresi',
        urlPh: 'ornek.com',
        device: 'Cihaz',
        mobile: 'Mobil',
        desktop: 'Masaüstü',
        analyze: 'Hızı test et',
        analyzing: 'Test ediliyor…',
        statusIdle: 'Google PageSpeed Insights testi yaklaşık 20–40 saniye sürer.',
        statusRunning: 'Google sayfayı yüklüyor ve analiz ediyor…',
        statusDone: 'Test tamamlandı.',
        errInvalid: 'Adres geçersiz. Örneğin ornek.com veya https://ornek.com girin.',
        errFetch: 'Google bu sayfayı yükleyemedi. Sitenin çevrimiçi ve herkese açık olduğundan emin olun.',
        errQuota: "Google'ın ücretsiz istek sınırı şu an dolu. Birkaç dakika sonra tekrar deneyin.",
        errNetwork: "Google'a bağlanılamadı. İnternetinizi veya VPN'inizi kontrol edin.",
        scoreTitle: 'Hız puanı',
        scoreGood: 'Mükemmel — siteniz hızlı.',
        scoreAvg: 'Orta — iyileştirilebilir.',
        scorePoor: 'Zayıf — yavaşlık size ziyaretçi ve Google sıralaması kaybettiriyor.',
        labTitle: 'Ölçülen metrikler',
        fcp: 'FCP · İlk içerik',
        lcp: 'LCP · Ana içerik',
        tbt: 'TBT · Engelleme süresi',
        cls: 'CLS · Düzen kayması',
        si: 'Speed Index',
        fieldTitle: 'Gerçek kullanıcı deneyimi (Core Web Vitals)',
        fieldNone: 'Google bu site için henüz yeterli gerçek kullanıcı verisine sahip değil.',
        inp: 'INP · Tıklama yanıtı',
        fieldGood: 'İyi',
        fieldAvg: 'İyileştirilmeli',
        fieldPoor: 'Zayıf',
        oppTitle: 'En önemli iyileştirme önerileri',
        oppNone: 'Önemli bir öneri bulunamadı.',
        fullReport: "PageSpeed Insights'ta tam rapor",
        note: 'Sonuçlar Google PageSpeed Insights’tan alınır ve sunucumuzda saklanmaz.'
      },
      explain: {
        eyebrow: 'Sonuçların anlamı',
        title: 'Hız puanı ve Core Web Vitals nedir?',
        items: [
          { title: 'Performance puanı', body: "Google'ın birkaç hız metriğinden hesapladığı 0–100 arası puan. 90 ve üzeri yeşil (mükemmel), 50–89 turuncu, 50'nin altı kırmızıdır." },
          { title: 'Core Web Vitals', body: "Google'ın kullanıcı deneyimi için üç resmi metriği: LCP (ana içeriğin görünmesi), INP (tıklamaya yanıt) ve CLS (düzen kararlılığı). SEO sıralamasını etkiler." },
          { title: 'Hız neden önemli?', body: "Her saniyelik gecikme dönüşümü düşürür; mobil kullanıcıların çoğu 3 saniyeden uzun süren sayfayı kapatır." }
        ]
      },
      tips: {
        title: 'Site hızı nasıl artırılır?',
        items: [
          'Görselleri WebP veya AVIF’e çevirip sıkıştırın ve doğru boyut verin.',
          'Sayfanın altındaki görsel ve videoları lazy loading ile yükleyin.',
          'Gereksiz eklenti ve betikleri (sohbet, pikseller, slider) azaltın.',
          'Tarayıcı önbelleği, Brotli/Gzip sıkıştırma ve Cloudflare gibi bir CDN kullanın.',
          'Ziyaretçilerinize yakın, yeterli işlemci ve belleğe sahip hızlı hosting seçin.'
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'Site hız testi hakkında sorular',
        items: [
          { q: 'Bu site hız testi nasıl çalışır?', a: "Adresiniz Google PageSpeed Insights'a gönderilir. Google sayfayı Lighthouse ile yükler ve puanı, metrikleri ve önerileri döndürür — Google'ın hızı ölçmek için kullandığı verinin aynısı." },
          { q: 'İyi bir puan kaçtır?', a: "90–100 mükemmel, 50–89 orta, 50'nin altı zayıftır. Core Web Vitals için LCP 2,5 saniyenin, INP 200 ms'nin ve CLS 0,1'in altında olmalıdır." },
          { q: 'Mobil puan neden masaüstünden düşük?', a: 'Mobil test daha zayıf işlemci ve daha yavaş internetle simüle edilir. Ziyaretlerin çoğu mobilden geldiği için Google sıralamada mobil puanı esas alır.' },
          { q: 'Puan neden her testte biraz değişiyor?', a: 'Sunucu yükü, reklamlar, dış betikler ve ağ her çalıştırmada farklıdır. Birkaç test yapıp ortalamaya bakın.' },
          { q: '90 üzeri puanı nasıl alırım?', a: 'Görsel optimizasyonu, daha az JavaScript, önbellek ve iyi hosting en büyük etkiyi yapar. Bizdavar Fast Web Studio 90 üzeri puanlı siteleri 5 günde teslim eder.' }
        ]
      },
      cta: {
        title: "Puanınız 90'ın altında mı?",
        desc: 'Bizdavar Fast Web Studio hızlı, mobil uyumlu ve SEO hazır, 90 üzeri puanlı siteyi 5 günde sabit fiyatla teslim eder.',
        btn: "Fast Web Studio'yu inceleyin",
        btn2: 'Ücretsiz danışmanlık'
      },
      geoText: "Türkiye, İran, Arap ülkeleri, Rusya ve tüm dünyadaki web siteleri için hız testi — resmi Google PageSpeed Insights verisiyle.",
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: '5 günde hızlı ve profesyonel site' },
        { title: '5 günde hızlı site', url: 'articles/website-speed-5-days', desc: 'Site hızı satışları neden artırır' },
        { title: 'İnternet hız testi', url: 'speed-test', desc: 'İndirme, yükleme ve ping ölçümü' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free online tool',
        title: 'Website Speed Test',
        lead: "Enter a URL to see Google's speed score, Core Web Vitals and the most important fixes for mobile or desktop."
      },
      ui: {
        url: 'Website URL',
        urlPh: 'example.com',
        device: 'Device',
        mobile: 'Mobile',
        desktop: 'Desktop',
        analyze: 'Test speed',
        analyzing: 'Testing…',
        statusIdle: 'A Google PageSpeed Insights test takes about 20–40 seconds.',
        statusRunning: 'Google is loading and analysing the page…',
        statusDone: 'Test complete.',
        errInvalid: 'That URL is not valid. Try example.com or https://example.com.',
        errFetch: 'Google could not load this page. Make sure the site is online and public.',
        errQuota: "Google's free request limit is full right now. Please try again in a few minutes.",
        errNetwork: 'Could not reach Google. Check your internet connection or VPN.',
        scoreTitle: 'Speed score',
        scoreGood: 'Excellent — your site is fast.',
        scoreAvg: 'Average — there is room to improve.',
        scorePoor: 'Poor — slowness is costing you visitors and Google rankings.',
        labTitle: 'Measured metrics',
        fcp: 'FCP · First content',
        lcp: 'LCP · Main content',
        tbt: 'TBT · Blocking time',
        cls: 'CLS · Layout shift',
        si: 'Speed Index',
        fieldTitle: 'Real-user experience (Core Web Vitals)',
        fieldNone: "Google doesn't have enough real-user data for this site yet.",
        inp: 'INP · Click response',
        fieldGood: 'Good',
        fieldAvg: 'Needs improvement',
        fieldPoor: 'Poor',
        oppTitle: 'Top improvement opportunities',
        oppNone: 'No major opportunities found.',
        fullReport: 'Full report on PageSpeed Insights',
        note: 'Results come from Google PageSpeed Insights and are not stored on our servers.'
      },
      explain: {
        eyebrow: 'What the results mean',
        title: 'What are the speed score and Core Web Vitals?',
        items: [
          { title: 'Performance score', body: 'A 0–100 score Google builds from several speed metrics. 90+ is green (excellent), 50–89 orange and below 50 red.' },
          { title: 'Core Web Vitals', body: "Google's three official user-experience metrics: LCP (main content loading), INP (response to clicks) and CLS (layout stability). They affect SEO rankings." },
          { title: 'Why speed matters', body: 'Every second of delay lowers conversions, and most mobile users leave a page that takes more than 3 seconds to load.' }
        ]
      },
      tips: {
        title: 'How to make your website faster',
        items: [
          'Convert images to WebP or AVIF, compress them and set the right dimensions.',
          'Lazy-load images and videos below the fold.',
          'Cut extra plugins and third-party scripts (chat widgets, pixels, sliders).',
          'Use browser caching, Brotli/Gzip compression and a CDN such as Cloudflare.',
          'Choose fast hosting with enough CPU and memory, close to your visitors.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Website speed test questions',
        items: [
          { q: 'How does this website speed test work?', a: 'Your URL is sent to Google PageSpeed Insights. Google loads the page with Lighthouse and returns the score, metrics and suggestions — the same data Google uses to judge page speed.' },
          { q: 'What is a good score?', a: '90–100 is excellent, 50–89 average and under 50 poor. For Core Web Vitals, aim for LCP under 2.5 s, INP under 200 ms and CLS under 0.1.' },
          { q: 'Why is my mobile score lower than desktop?', a: 'The mobile test simulates a slower CPU and network. Because most visits are mobile, Google uses the mobile score for rankings.' },
          { q: 'Why does the score change between runs?', a: 'Server load, ads, third-party scripts and the network vary on every run. Run a few tests and look at the average.' },
          { q: 'How do I get a 90+ score?', a: 'Image optimization, less JavaScript, caching and good hosting have the biggest impact. Bizdavar Fast Web Studio delivers 90+ scoring sites in 5 days.' }
        ]
      },
      cta: {
        title: 'Scoring under 90?',
        desc: 'Bizdavar Fast Web Studio delivers a fast, mobile-ready, SEO-ready website with a 90+ score in 5 days at a fixed price.',
        btn: 'See Fast Web Studio',
        btn2: 'Free consultation'
      },
      geoText: 'Website speed testing for sites in Turkey, Iran, the Arab world, Russia, Europe and worldwide — with official Google PageSpeed Insights data.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'A fast, professional website in 5 days' },
        { title: 'Fast website in 5 days', url: 'articles/website-speed-5-days', desc: 'Why site speed lifts sales' },
        { title: 'Internet speed test', url: 'speed-test', desc: 'Your download, upload and ping' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный онлайн-инструмент',
        title: 'Проверка скорости сайта',
        lead: 'Введите адрес сайта, чтобы увидеть оценку скорости Google, Core Web Vitals и главные рекомендации для мобильных или ПК.'
      },
      ui: {
        url: 'Адрес сайта',
        urlPh: 'example.ru',
        device: 'Устройство',
        mobile: 'Мобильный',
        desktop: 'Компьютер',
        analyze: 'Проверить скорость',
        analyzing: 'Проверяем…',
        statusIdle: 'Проверка через Google PageSpeed Insights занимает около 20–40 секунд.',
        statusRunning: 'Google загружает и анализирует страницу…',
        statusDone: 'Проверка завершена.',
        errInvalid: 'Неверный адрес. Введите, например, example.ru или https://example.ru.',
        errFetch: 'Google не смог загрузить страницу. Убедитесь, что сайт работает и открыт для всех.',
        errQuota: 'Бесплатный лимит запросов Google сейчас исчерпан. Попробуйте через несколько минут.',
        errNetwork: 'Не удалось подключиться к Google. Проверьте интернет или VPN.',
        scoreTitle: 'Оценка скорости',
        scoreGood: 'Отлично — ваш сайт быстрый.',
        scoreAvg: 'Средне — есть что улучшить.',
        scorePoor: 'Плохо — медленный сайт теряет посетителей и позиции в Google.',
        labTitle: 'Измеренные метрики',
        fcp: 'FCP · Первый контент',
        lcp: 'LCP · Основной контент',
        tbt: 'TBT · Время блокировки',
        cls: 'CLS · Сдвиг макета',
        si: 'Speed Index',
        fieldTitle: 'Опыт реальных пользователей (Core Web Vitals)',
        fieldNone: 'У Google пока недостаточно данных от реальных пользователей этого сайта.',
        inp: 'INP · Отклик на клик',
        fieldGood: 'Хорошо',
        fieldAvg: 'Нужно улучшить',
        fieldPoor: 'Плохо',
        oppTitle: 'Главные рекомендации',
        oppNone: 'Существенных рекомендаций не найдено.',
        fullReport: 'Полный отчёт в PageSpeed Insights',
        note: 'Результаты получены из Google PageSpeed Insights и не сохраняются на наших серверах.'
      },
      explain: {
        eyebrow: 'Что означают результаты',
        title: 'Что такое оценка скорости и Core Web Vitals?',
        items: [
          { title: 'Оценка Performance', body: 'Число от 0 до 100, которое Google рассчитывает по нескольким метрикам скорости. 90+ — зелёная зона (отлично), 50–89 — оранжевая, ниже 50 — красная.' },
          { title: 'Core Web Vitals', body: 'Три официальные метрики Google для опыта пользователя: LCP (загрузка основного контента), INP (отклик на клик) и CLS (стабильность макета). Влияют на SEO.' },
          { title: 'Почему скорость важна', body: 'Каждая секунда задержки снижает конверсию, а большинство мобильных пользователей закрывают страницу, которая грузится дольше 3 секунд.' }
        ]
      },
      tips: {
        title: 'Как ускорить сайт',
        items: [
          'Переведите изображения в WebP или AVIF, сожмите их и задайте правильные размеры.',
          'Загружайте изображения и видео ниже первого экрана через lazy loading.',
          'Уберите лишние плагины и сторонние скрипты (чаты, пиксели, слайдеры).',
          'Включите кеширование, сжатие Brotli/Gzip и CDN, например Cloudflare.',
          'Выберите быстрый хостинг с достаточными CPU и памятью рядом с аудиторией.'
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы о проверке скорости сайта',
        items: [
          { q: 'Как работает проверка скорости сайта?', a: 'Адрес отправляется в Google PageSpeed Insights. Google загружает страницу через Lighthouse и возвращает оценку, метрики и рекомендации — те же данные, по которым Google оценивает скорость.' },
          { q: 'Какая оценка считается хорошей?', a: '90–100 — отлично, 50–89 — средне, ниже 50 — плохо. Для Core Web Vitals: LCP до 2,5 с, INP до 200 мс и CLS до 0,1.' },
          { q: 'Почему мобильная оценка ниже, чем для ПК?', a: 'Мобильный тест имитирует слабый процессор и медленную сеть. Большинство визитов мобильные, поэтому Google ранжирует по мобильной оценке.' },
          { q: 'Почему оценка меняется от проверки к проверке?', a: 'Нагрузка на сервер, реклама, сторонние скрипты и сеть каждый раз разные. Сделайте несколько проверок и смотрите на среднее.' },
          { q: 'Как получить оценку 90+?', a: 'Больше всего дают оптимизация изображений, меньше JavaScript, кеширование и хороший хостинг. Bizdavar Fast Web Studio делает сайты с оценкой 90+ за 5 дней.' }
        ]
      },
      cta: {
        title: 'Оценка ниже 90?',
        desc: 'Bizdavar Fast Web Studio создаёт быстрый, адаптивный и готовый к SEO сайт с оценкой 90+ за 5 дней по фиксированной цене.',
        btn: 'Fast Web Studio',
        btn2: 'Бесплатная консультация'
      },
      geoText: 'Проверка скорости сайтов в России, Турции, ОАЭ, Иране и по всему миру — по официальным данным Google PageSpeed Insights.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'Быстрый профессиональный сайт за 5 дней' },
        { title: 'Быстрый сайт за 5 дней', url: 'articles/website-speed-5-days', desc: 'Почему скорость сайта увеличивает продажи' },
        { title: 'Тест скорости интернета', url: 'speed-test', desc: 'Загрузка, отдача и пинг' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة مجانية عبر الإنترنت',
        title: 'اختبار سرعة الموقع',
        lead: 'أدخل عنوان موقعك لترى تقييم السرعة من Google ومؤشرات Core Web Vitals وأهم اقتراحات التحسين للجوال أو سطح المكتب.'
      },
      ui: {
        url: 'عنوان الموقع',
        urlPh: 'example.com',
        device: 'الجهاز',
        mobile: 'الجوال',
        desktop: 'سطح المكتب',
        analyze: 'اختبر السرعة',
        analyzing: 'جارٍ الاختبار…',
        statusIdle: 'يستغرق اختبار Google PageSpeed Insights نحو 20 إلى 40 ثانية.',
        statusRunning: 'تقوم Google بتحميل الصفحة وتحليلها…',
        statusDone: 'اكتمل الاختبار.',
        errInvalid: 'العنوان غير صالح. أدخل مثلاً example.com أو https://example.com.',
        errFetch: 'لم تتمكن Google من تحميل هذه الصفحة. تأكد من أن الموقع يعمل ومتاح للجميع.',
        errQuota: 'تم بلوغ حد الطلبات المجانية لدى Google حالياً. حاول مجدداً بعد بضع دقائق.',
        errNetwork: 'تعذر الاتصال بـ Google. تحقق من الإنترنت أو VPN.',
        scoreTitle: 'تقييم السرعة',
        scoreGood: 'ممتاز — موقعك سريع.',
        scoreAvg: 'متوسط — يمكن تحسينه.',
        scorePoor: 'ضعيف — البطء يفقدك الزوار وترتيبك في Google.',
        labTitle: 'المقاييس المُقاسة',
        fcp: 'FCP · أول محتوى',
        lcp: 'LCP · المحتوى الرئيسي',
        tbt: 'TBT · زمن الحظر',
        cls: 'CLS · إزاحة التخطيط',
        si: 'Speed Index',
        fieldTitle: 'تجربة المستخدمين الحقيقيين (Core Web Vitals)',
        fieldNone: 'لا تملك Google بعد بيانات كافية من مستخدمين حقيقيين لهذا الموقع.',
        inp: 'INP · الاستجابة للنقر',
        fieldGood: 'جيد',
        fieldAvg: 'يحتاج إلى تحسين',
        fieldPoor: 'ضعيف',
        oppTitle: 'أهم فرص التحسين',
        oppNone: 'لم يتم العثور على اقتراحات مهمة.',
        fullReport: 'التقرير الكامل في PageSpeed Insights',
        note: 'النتائج مأخوذة من Google PageSpeed Insights ولا تُحفظ على خوادمنا.'
      },
      explain: {
        eyebrow: 'معنى النتائج',
        title: 'ما هو تقييم السرعة وCore Web Vitals؟',
        items: [
          { title: 'تقييم Performance', body: 'رقم من 0 إلى 100 تحسبه Google من عدة مقاييس للسرعة. 90 فأكثر أخضر (ممتاز)، و50–89 برتقالي، وأقل من 50 أحمر.' },
          { title: 'Core Web Vitals', body: 'ثلاثة مقاييس رسمية من Google لتجربة المستخدم: LCP (ظهور المحتوى الرئيسي) وINP (الاستجابة للنقر) وCLS (ثبات التخطيط). تؤثر في ترتيب SEO.' },
          { title: 'لماذا السرعة مهمة؟', body: 'كل ثانية تأخير تخفض معدل التحويل، ومعظم مستخدمي الجوال يغلقون الصفحة إذا استغرقت أكثر من 3 ثوانٍ.' }
        ]
      },
      tips: {
        title: 'كيف تسرّع موقعك؟',
        items: [
          'حوّل الصور إلى WebP أو AVIF واضغطها وحدد أبعادها الصحيحة.',
          'حمّل الصور ومقاطع الفيديو أسفل الصفحة بتقنية lazy loading.',
          'قلّل الإضافات والسكربتات الخارجية (الدردشة، البكسلات، السلايدر).',
          'استخدم التخزين المؤقت وضغط Brotli/Gzip وشبكة CDN مثل Cloudflare.',
          'اختر استضافة سريعة بمعالج وذاكرة كافيين وقريبة من زوارك.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول اختبار سرعة الموقع',
        items: [
          { q: 'كيف يعمل اختبار سرعة الموقع هذا؟', a: 'يُرسل عنوانك إلى Google PageSpeed Insights، فتحمّل Google الصفحة عبر Lighthouse وتعيد التقييم والمقاييس والاقتراحات — وهي البيانات نفسها التي تقيس بها Google سرعة الصفحات.' },
          { q: 'ما هو التقييم الجيد؟', a: '90–100 ممتاز، و50–89 متوسط، وأقل من 50 ضعيف. ولـ Core Web Vitals استهدف LCP أقل من 2.5 ثانية وINP أقل من 200 مللي ثانية وCLS أقل من 0.1.' },
          { q: 'لماذا تقييم الجوال أقل من سطح المكتب؟', a: 'يحاكي اختبار الجوال معالجاً أضعف وشبكة أبطأ. ولأن معظم الزيارات من الجوال، تعتمد Google تقييم الجوال في الترتيب.' },
          { q: 'لماذا يتغير التقييم بين اختبار وآخر؟', a: 'حِمل الخادم والإعلانات والسكربتات الخارجية والشبكة تختلف في كل مرة. أجرِ عدة اختبارات وانظر إلى المتوسط.' },
          { q: 'كيف أحصل على تقييم 90 فأكثر؟', a: 'تحسين الصور وتقليل JavaScript والتخزين المؤقت والاستضافة الجيدة لها الأثر الأكبر. يسلّم Fast Web Studio من Bizdavar مواقع بتقييم 90+ خلال 5 أيام.' }
        ]
      },
      cta: {
        title: 'تقييمك أقل من 90؟',
        desc: 'يسلّم Fast Web Studio من Bizdavar موقعاً سريعاً ومتوافقاً مع الجوال وجاهزاً لـ SEO بتقييم 90+ خلال 5 أيام وبسعر ثابت.',
        btn: 'تعرّف على Fast Web Studio',
        btn2: 'استشارة مجانية'
      },
      geoText: 'اختبار سرعة المواقع في الإمارات والسعودية والعراق وتركيا وإيران وحول العالم — ببيانات Google PageSpeed Insights الرسمية.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'موقع سريع واحترافي خلال 5 أيام' },
        { title: 'موقع سريع خلال 5 أيام', url: 'articles/website-speed-5-days', desc: 'لماذا ترفع سرعة الموقع المبيعات' },
        { title: 'اختبار سرعة الإنترنت', url: 'speed-test', desc: 'التنزيل والرفع والبينغ لديك' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.siteSpeed = Object.assign(L.pages.siteSpeed || {}, seo[lang]);
    L.siteSpeedPage = pages[lang];
  });
})();
