/**
 * Internet speed test page — SEO meta + copy for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js so RU/AR are set directly (not cloned from EN).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'تست سرعت اینترنت',
      seoTitle: 'تست سرعت اینترنت | اسپید تست رایگان و دقیق — بیزدوار',
      seoDescription: 'سرعت اینترنت خود را در چند ثانیه تست کنید: دانلود، آپلود، پینگ و جیتر روی شبکه جهانی Cloudflare. رایگان، بدون نصب برنامه، روی موبایل و کامپیوتر.',
      seoKeywords: 'تست سرعت اینترنت, اسپید تست, speed test, تست پینگ, تست سرعت وای فای, سرعت اینترنت من, تست سرعت ایرانسل, تست سرعت همراه اول, تست سرعت مخابرات'
    },
    tr: {
      crumb: 'Hız testi',
      seoTitle: 'İnternet Hız Testi — Ücretsiz ve Doğru Speed Test | Bizdavar',
      seoDescription: 'İnternet hızınızı saniyeler içinde ölçün: indirme, yükleme, ping ve jitter Cloudflare küresel ağında test edilir. Ücretsiz, uygulama gerekmez, mobil ve bilgisayarda çalışır.',
      seoKeywords: 'internet hız testi, hız testi, speed test, speedtest, ping testi, wifi hız testi, fiber hız testi, internet hızı ölçme'
    },
    en: {
      crumb: 'Speed test',
      seoTitle: 'Internet Speed Test — Free, Accurate Speedtest | Bizdavar',
      seoDescription: 'Test your internet speed in seconds: download, upload, ping and jitter measured on Cloudflare\'s global network. Free, no app, works on mobile and desktop.',
      seoKeywords: 'internet speed test, speed test, speedtest, wifi speed test, ping test, upload speed test, download speed test, jitter test'
    },
    ru: {
      crumb: 'Тест скорости',
      seoTitle: 'Тест скорости интернета — бесплатный и точный спидтест | Bizdavar',
      seoDescription: 'Проверьте скорость интернета за секунды: загрузка, отдача, пинг и джиттер в глобальной сети Cloudflare. Бесплатно, без установки, на телефоне и компьютере.',
      seoKeywords: 'тест скорости интернета, проверка скорости интернета, спидтест, speed test, пинг тест, скорость wifi, измерить скорость интернета'
    },
    ar: {
      crumb: 'اختبار السرعة',
      seoTitle: 'اختبار سرعة الإنترنت — سبيد تست مجاني ودقيق | Bizdavar',
      seoDescription: 'اختبر سرعة الإنترنت لديك خلال ثوانٍ: التنزيل والرفع والبينغ والتذبذب عبر شبكة Cloudflare العالمية. مجاني، دون تطبيق، يعمل على الجوال والكمبيوتر.',
      seoKeywords: 'اختبار سرعة الانترنت, قياس سرعة النت, سبيد تست, speed test, اختبار البينغ, سرعة الواي فاي, فحص سرعة الانترنت'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان آنلاین',
        title: 'تست سرعت اینترنت',
        lead: 'سرعت دانلود، آپلود، پینگ و جیتر اینترنت خود را در حدود ۳۰ ثانیه بسنجید. بدون نصب برنامه و ثبت‌نام — برای موبایل، وای‌فای، ADSL و فیبر.'
      },
      ui: {
        start: 'شروع تست',
        restart: 'تست دوباره',
        statusIdle: 'روی «شروع تست» بزنید — تست حدود ۳۰ ثانیه طول می‌کشد.',
        statusLatency: 'در حال سنجش پینگ و جیتر…',
        statusDownload: 'در حال سنجش سرعت دانلود…',
        statusUpload: 'در حال سنجش سرعت آپلود…',
        statusDone: 'تست کامل شد.',
        statusError: 'اتصال به سرور تست برقرار نشد. اینترنت، VPN یا فایروال خود را بررسی کنید و دوباره تلاش کنید.',
        download: 'دانلود',
        upload: 'آپلود',
        ping: 'پینگ',
        jitter: 'جیتر',
        mbps: 'Mbps',
        ms: 'ms',
        ip: 'IP شما',
        isp: 'اپراتور / ISP',
        location: 'موقعیت شما',
        server: 'سرور تست',
        goodFor: 'این اینترنت برای چه کارهایی مناسب است؟',
        okLabel: 'مناسب',
        noLabel: 'ناکافی',
        activities: {
          browsing: 'وب‌گردی و ایمیل',
          hd: 'ویدیو HD (1080p)',
          uhd: 'استریم 4K',
          calls: 'تماس تصویری',
          gaming: 'بازی آنلاین',
          uploads: 'آپلود فایل حجیم و بکاپ ابری'
        },
        copy: 'کپی نتیجه',
        copied: 'کپی شد!',
        share: 'اشتراک‌گذاری',
        shareText: 'سرعت اینترنت من: دانلود {down} Mbps · آپلود {up} Mbps · پینگ {ping} ms — تست در {url}',
        historyTitle: 'تست‌های اخیر شما',
        historyNote: 'فقط در همین مرورگر ذخیره می‌شود.',
        clear: 'پاک کردن',
        colDate: 'زمان',
        colDown: 'دانلود',
        colUp: 'آپلود',
        colPing: 'پینگ',
        note: 'سنجش با نزدیک‌ترین دیتاسنتر Cloudflare انجام می‌شود. نتایج روی سرور ما ذخیره نمی‌شود.',
        gaugeAria: 'سرعت لحظه‌ای'
      },
      explain: {
        eyebrow: 'معنی اعداد',
        title: 'دانلود، آپلود، پینگ و جیتر چیست؟',
        items: [
          { title: 'سرعت دانلود', body: 'سرعت رسیدن داده به شما بر حسب مگابیت بر ثانیه (Mbps). تماشای ویدیو، وب‌گردی و دانلود برنامه به آن وابسته است.' },
          { title: 'سرعت آپلود', body: 'سرعت ارسال داده از سمت شما — تماس تصویری، بکاپ ابری، ارسال فایل و لایو استریم به آن بستگی دارد.' },
          { title: 'پینگ (تأخیر)', body: 'زمان رفت‌وبرگشت تا سرور بر حسب میلی‌ثانیه. زیر ۳۰ عالی، زیر ۶۰ برای بازی مناسب و بالای ۱۵۰ همراه با لگ است.' },
          { title: 'جیتر', body: 'میزان نوسان پینگ بین بسته‌ها. جیتر پایین (زیر ۲۰ میلی‌ثانیه) تماس و بازی را روان نگه می‌دارد.' }
        ]
      },
      table: {
        title: 'چه سرعت اینترنتی لازم دارید؟',
        desc: 'حداقل سرعت پیشنهادی برای هر کار و هر دستگاه. برای خانواده پرمصرف آن‌ها را جمع بزنید.',
        headActivity: 'کاربرد',
        headSpeed: 'سرعت پیشنهادی',
        rows: [
          { a: 'ایمیل و وب‌گردی', v: '۱ تا ۵ Mbps' },
          { a: 'ویدیو HD (1080p)', v: '۵ تا ۱۰ Mbps' },
          { a: 'استریم 4K', v: '۲۵ Mbps' },
          { a: 'تماس تصویری HD (Zoom، Meet، Teams)', v: '۳ تا ۴ Mbps دانلود و آپلود' },
          { a: 'بازی آنلاین', v: '۳ تا ۶ Mbps با پینگ زیر ۶۰ میلی‌ثانیه' },
          { a: 'دورکاری با فایل‌های حجیم', v: 'بیش از ۵۰ Mbps دانلود و ۱۰ Mbps آپلود' }
        ]
      },
      tips: {
        title: 'چطور نتیجه دقیق بگیریم؟',
        items: [
          'قبل از تست، دانلودها، استریم و همگام‌سازی ابری را روی همه دستگاه‌ها متوقف کنید.',
          'با کابل یا نزدیک مودم تست کنید تا مشکل وای‌فای از مشکل خط جدا شود.',
          'VPN و پروکسی را خاموش کنید — ترافیک را از کشور دیگری عبور می‌دهند و نتیجه را پایین می‌آورند.',
          'دو یا سه بار در ساعات مختلف تست بگیرید؛ شب‌ها شبکه معمولاً شلوغ‌تر و کندتر است.',
          'نتیجه را با سرعت سرویس خود مقایسه کنید. وای‌فای معمولاً ۵۰ تا ۷۰ درصد سرعت خط را می‌دهد.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره تست سرعت اینترنت',
        items: [
          { q: 'این تست سرعت چطور کار می‌کند؟', a: 'مرورگر شما فایل‌های تستی با حجم افزایشی را از نزدیک‌ترین دیتاسنتر Cloudflare دانلود و به آن آپلود می‌کند. زمان هر انتقال اندازه‌گیری و صدک ۹۰ سرعت گزارش می‌شود و پینگ از ۲۰ درخواست کوچک به دست می‌آید — همان روش speed.cloudflare.com.' },
          { q: 'سرعت اینترنت خوب چقدر است؟', a: 'برای یک نفر، ۲۵ Mbps دانلود و ۵ Mbps آپلود برای ویدیو، تماس و وب‌گردی کافی است. برای خانواده یا دفتر کار ۱۰۰ Mbps و بیشتر راحت است. در بازی آنلاین پینگ مهم‌تر از سرعت است: زیر ۶۰ میلی‌ثانیه.' },
          { q: 'چرا سرعت من کمتر از سرعت سرویس خریداری‌شده است؟', a: 'تداخل وای‌فای، فاصله از مودم، مصرف دستگاه‌های دیگر، VPN و شلوغی ساعات اوج سرعت را کم می‌کنند. با کابل تست کنید تا ببینید خط واقعاً سرعت خریداری‌شده را می‌دهد یا نه.' },
          { q: 'آیا تست سرعت رایگان و امن است؟', a: 'بله. رایگان است، به نصب برنامه یا حساب کاربری نیاز ندارد و فقط داده تستی تصادفی جابه‌جا می‌کند. آدرس IP فقط به خود شما نمایش داده می‌شود و روی سرور ما ذخیره نمی‌شود.' },
          { q: 'هر تست چقدر اینترنت مصرف می‌کند؟', a: 'حجم تست با سرعت شما تنظیم می‌شود: حدود ۱۵ مگابایت در اینترنت کند تا چند صد مگابایت در فیبر گیگابیتی. اگر بسته اینترنت محدود دارید، با وای‌فای تست کنید.' },
          { q: 'فرق Mbps با MB/s چیست؟', a: 'سرعت اینترنت بر حسب مگابیت بر ثانیه (Mbps) سنجیده می‌شود. هر مگابایت بر ثانیه (MB/s) برابر ۸ Mbps است؛ یعنی اینترنت ۱۰۰ Mbps حدود ۱۲٫۵ مگابایت در ثانیه دانلود می‌کند.' }
        ]
      },
      cta: {
        title: 'سایت شما هم به سرعت اینترنتتان است؟',
        desc: 'سایت کند بازدیدکننده و فروش را از دست می‌دهد. Fast Web Studio بیزدوار سایت سریع و موبایل‌پسند را در ۵ روز تحویل می‌دهد.',
        btn: 'مشاهده Fast Web Studio',
        btn2: 'مشاوره رایگان'
      },
      geoText: 'تست سرعت اینترنت رایگان برای کاربران ایران، ترکیه، کشورهای خلیج فارس، روسیه، اروپا و سراسر جهان — سنجش روی شبکه جهانی Cloudflare.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'سایت سریع و حرفه‌ای در ۵ روز' },
        { title: 'سرعت سایت در ۵ روز', url: 'articles/website-speed-5-days', desc: 'چرا سرعت سایت فروش را بالا می‌برد' },
        { title: 'خدمات بیزدوار', url: 'services', desc: 'طراحی وب، سئو و بازاریابی دیجیتال' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz çevrimiçi araç',
        title: 'İnternet Hız Testi',
        lead: 'İndirme, yükleme, ping ve jitter değerlerinizi yaklaşık 30 saniyede ölçün. Uygulama ve üyelik yok — mobil, Wi‑Fi, ADSL ve fiberde çalışır.'
      },
      ui: {
        start: 'Testi başlat',
        restart: 'Tekrar test et',
        statusIdle: '«Testi başlat»a basın — test yaklaşık 30 saniye sürer.',
        statusLatency: 'Ping ve jitter ölçülüyor…',
        statusDownload: 'İndirme hızı ölçülüyor…',
        statusUpload: 'Yükleme hızı ölçülüyor…',
        statusDone: 'Test tamamlandı.',
        statusError: 'Test sunucusuna ulaşılamadı. Bağlantınızı, VPN veya güvenlik duvarını kontrol edip tekrar deneyin.',
        download: 'İndirme',
        upload: 'Yükleme',
        ping: 'Ping',
        jitter: 'Jitter',
        mbps: 'Mbps',
        ms: 'ms',
        ip: 'IP adresiniz',
        isp: 'Servis sağlayıcı',
        location: 'Konumunuz',
        server: 'Test sunucusu',
        goodFor: 'Bu bağlantı neler için uygun?',
        okLabel: 'Uygun',
        noLabel: 'Yetersiz',
        activities: {
          browsing: 'Web ve e-posta',
          hd: 'HD video (1080p)',
          uhd: '4K yayın',
          calls: 'Görüntülü görüşme',
          gaming: 'Online oyun',
          uploads: 'Büyük dosya yükleme ve bulut yedekleme'
        },
        copy: 'Sonucu kopyala',
        copied: 'Kopyalandı!',
        share: 'Paylaş',
        shareText: 'İnternet hızım: ↓ {down} Mbps · ↑ {up} Mbps · ping {ping} ms — test: {url}',
        historyTitle: 'Son testleriniz',
        historyNote: 'Yalnızca bu tarayıcıda saklanır.',
        clear: 'Temizle',
        colDate: 'Tarih',
        colDown: 'İndirme',
        colUp: 'Yükleme',
        colPing: 'Ping',
        note: 'Ölçüm en yakın Cloudflare veri merkezine yapılır. Sonuçlar sunucularımızda saklanmaz.',
        gaugeAria: 'Anlık hız'
      },
      explain: {
        eyebrow: 'Değerlerin anlamı',
        title: 'İndirme, yükleme, ping ve jitter nedir?',
        items: [
          { title: 'İndirme hızı', body: 'Verinin size ulaşma hızı, saniyede megabit (Mbps). Video izleme, gezinme ve uygulama indirme buna bağlıdır.' },
          { title: 'Yükleme hızı', body: 'Sizden veri gönderme hızı — görüntülü görüşme, bulut yedekleme, dosya gönderme ve canlı yayın buna bağlıdır.' },
          { title: 'Ping (gecikme)', body: 'Sunucuya gidiş-dönüş süresi, milisaniye cinsinden. 30 ms altı mükemmel, 60 ms altı oyun için uygun, 150 ms üstü takılma hissettirir.' },
          { title: 'Jitter', body: 'Ping değerinin paketler arasında ne kadar dalgalandığı. Düşük jitter (20 ms altı) görüşmeleri ve oyunları akıcı tutar.' }
        ]
      },
      table: {
        title: 'Ne kadar internet hızına ihtiyacınız var?',
        desc: 'Cihaz başına önerilen minimum hızlar. Kalabalık bir ev için toplayın.',
        headActivity: 'Kullanım',
        headSpeed: 'Önerilen hız',
        rows: [
          { a: 'E-posta ve web', v: '1–5 Mbps' },
          { a: 'HD video (1080p)', v: '5–10 Mbps' },
          { a: '4K yayın', v: '25 Mbps' },
          { a: 'HD görüntülü görüşme (Zoom, Meet, Teams)', v: 'İndirme ve yüklemede 3–4 Mbps' },
          { a: 'Online oyun', v: '3–6 Mbps, ping 60 ms altı' },
          { a: 'Büyük dosyalarla evden çalışma', v: '50+ Mbps indirme, 10+ Mbps yükleme' }
        ]
      },
      tips: {
        title: 'Doğru sonuç için ipuçları',
        items: [
          'Testten önce tüm cihazlarda indirme, yayın ve bulut senkronizasyonunu durdurun.',
          'Wi‑Fi sorununu hat sorunundan ayırmak için kabloyla veya modeme yakın test edin.',
          'VPN ve proxy\'yi kapatın — trafiği başka ülke üzerinden geçirip sonucu düşürürler.',
          'Günün farklı saatlerinde 2–3 test yapın; akşamları yoğun ağlar genelde daha yavaştır.',
          'Sonucu tarifenizle karşılaştırın. Wi‑Fi genellikle hat hızının %50–70\'ini verir.'
        ]
      },
      faq: {
        eyebrow: 'SSS',
        title: 'İnternet hız testi hakkında sorular',
        items: [
          { q: 'Bu hız testi nasıl çalışır?', a: 'Tarayıcınız en yakın Cloudflare veri merkezine giderek büyüyen test dosyaları indirir ve yükler. Her aktarım zamanlanır, 90. yüzdelik hız raporlanır ve ping 20 küçük istekle ölçülür — speed.cloudflare.com ile aynı yöntem.' },
          { q: 'İyi bir internet hızı ne kadardır?', a: 'Tek kişi için 25 Mbps indirme ve 5 Mbps yükleme; video, görüşme ve gezinme için yeterlidir. Aile veya ev ofisi için 100 Mbps ve üzeri rahattır. Oyunda hızdan çok ping önemlidir: 60 ms altını hedefleyin.' },
          { q: 'Sonucum neden tarifemden düşük?', a: 'Wi‑Fi paraziti, modeme uzaklık, diğer cihazların kullanımı, VPN ve yoğun saat trafiği hızı düşürür. Hattın ödediğiniz hızı verip vermediğini görmek için kabloyla test edin.' },
          { q: 'Hız testi ücretsiz ve güvenli mi?', a: 'Evet. Ücretsizdir, uygulama veya hesap gerektirmez ve yalnızca rastgele test verisi aktarır. IP adresiniz yalnızca size gösterilir, sunucularımızda saklanmaz.' },
          { q: 'Bir test ne kadar veri harcar?', a: 'Test boyutu hızınıza göre ayarlanır: yavaş bağlantıda yaklaşık 15 MB, gigabit fiberde birkaç yüz MB. Kotalı mobil paketteyseniz Wi‑Fi üzerinden test edin.' },
          { q: 'Mbps ile MB/s arasındaki fark nedir?', a: 'İnternet hızı saniyede megabit (Mbps) ile ölçülür. 1 MB/s, 8 Mbps\'e eşittir; yani 100 Mbps bağlantı yaklaşık 12,5 MB/s indirir.' }
        ]
      },
      cta: {
        title: 'Web siteniz de internetiniz kadar hızlı mı?',
        desc: 'Yavaş site ziyaretçi ve satış kaybettirir. Bizdavar Fast Web Studio, hızlı ve mobil uyumlu siteleri 5 günde teslim eder.',
        btn: 'Fast Web Studio\'yu incele',
        btn2: 'Ücretsiz danışmanlık'
      },
      geoText: 'İran, Türkiye, Körfez ülkeleri, Rusya, Avrupa ve tüm dünyadaki kullanıcılar için ücretsiz internet hız testi — Cloudflare küresel ağında ölçülür.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: '5 günde hızlı ve profesyonel site' },
        { title: '5 günde hızlı web sitesi', url: 'articles/website-speed-5-days', desc: 'Site hızı satışları neden artırır' },
        { title: 'Bizdavar hizmetleri', url: 'services', desc: 'Web tasarım, SEO ve dijital pazarlama' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free online tool',
        title: 'Internet Speed Test',
        lead: 'Measure your download, upload, ping and jitter in about 30 seconds. No app, no sign-up — works on mobile, Wi‑Fi, DSL and fibre.'
      },
      ui: {
        start: 'Start test',
        restart: 'Test again',
        statusIdle: 'Press “Start test” — it takes about 30 seconds.',
        statusLatency: 'Measuring ping and jitter…',
        statusDownload: 'Measuring download speed…',
        statusUpload: 'Measuring upload speed…',
        statusDone: 'Test complete.',
        statusError: 'Couldn\'t reach the test server. Check your connection, VPN or firewall and try again.',
        download: 'Download',
        upload: 'Upload',
        ping: 'Ping',
        jitter: 'Jitter',
        mbps: 'Mbps',
        ms: 'ms',
        ip: 'Your IP',
        isp: 'Provider',
        location: 'Your location',
        server: 'Test server',
        goodFor: 'What this connection handles',
        okLabel: 'Good',
        noLabel: 'Too slow',
        activities: {
          browsing: 'Web & email',
          hd: 'HD video (1080p)',
          uhd: '4K streaming',
          calls: 'Video calls',
          gaming: 'Online gaming',
          uploads: 'Large uploads & cloud backup'
        },
        copy: 'Copy result',
        copied: 'Copied!',
        share: 'Share',
        shareText: 'My internet speed: ↓ {down} Mbps · ↑ {up} Mbps · ping {ping} ms — tested at {url}',
        historyTitle: 'Your recent tests',
        historyNote: 'Saved only in this browser.',
        clear: 'Clear',
        colDate: 'Date',
        colDown: 'Download',
        colUp: 'Upload',
        colPing: 'Ping',
        note: 'Measured against the nearest Cloudflare data center. Results are not stored on our servers.',
        gaugeAria: 'Current speed'
      },
      explain: {
        eyebrow: 'What the numbers mean',
        title: 'Download, upload, ping and jitter explained',
        items: [
          { title: 'Download speed', body: 'How fast data reaches you, in megabits per second (Mbps). Streaming, browsing and app downloads depend on it.' },
          { title: 'Upload speed', body: 'How fast you send data — video calls, cloud backup, sending files and live streaming depend on it.' },
          { title: 'Ping (latency)', body: 'Round-trip time to the server in milliseconds. Under 30 ms is excellent, under 60 ms is fine for gaming, above 150 ms feels laggy.' },
          { title: 'Jitter', body: 'How much ping varies between packets. Low jitter (under 20 ms) keeps calls and games smooth.' }
        ]
      },
      table: {
        title: 'What internet speed do you need?',
        desc: 'Typical minimums per activity and per device. Add them up for a busy household.',
        headActivity: 'Activity',
        headSpeed: 'Recommended speed',
        rows: [
          { a: 'Email & web browsing', v: '1–5 Mbps' },
          { a: 'HD video (1080p)', v: '5–10 Mbps' },
          { a: '4K streaming', v: '25 Mbps' },
          { a: 'HD video calls (Zoom, Meet, Teams)', v: '3–4 Mbps up and down' },
          { a: 'Online gaming', v: '3–6 Mbps, ping under 60 ms' },
          { a: 'Working from home with large files', v: '50+ Mbps down, 10+ Mbps up' }
        ]
      },
      tips: {
        title: 'How to get an accurate result',
        items: [
          'Pause downloads, streaming and cloud sync on every device before testing.',
          'Test over a cable or next to the router to separate Wi‑Fi problems from line problems.',
          'Turn off VPN and proxy — they route traffic through another country and lower the result.',
          'Run 2–3 tests at different times of day; busy networks are usually slower in the evening.',
          'Compare the result with your plan. Wi‑Fi typically delivers 50–70% of the line speed.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Internet speed test questions',
        items: [
          { q: 'How does this speed test work?', a: 'Your browser downloads and uploads test files of increasing size to the nearest Cloudflare data center. Each transfer is timed, the 90th-percentile speed is reported, and ping comes from 20 small requests — the same method as speed.cloudflare.com.' },
          { q: 'What is a good internet speed?', a: 'For one person, 25 Mbps download and 5 Mbps upload covers streaming, calls and browsing. A family or home office is comfortable with 100 Mbps or more. For gaming, ping matters more than speed: aim for under 60 ms.' },
          { q: 'Why is my result lower than my plan?', a: 'Wi‑Fi interference, distance from the router, other devices, VPNs and peak-hour congestion all reduce speed. Test over a cable to see whether the line itself delivers what you pay for.' },
          { q: 'Is the speed test free and safe?', a: 'Yes. It is free, needs no app or account, and only transfers random test data. Your IP address is shown to you but not stored on our servers.' },
          { q: 'How much data does a test use?', a: 'The test adapts to your speed: about 15 MB on a slow connection and a few hundred MB on gigabit fibre. On a capped mobile plan, run it over Wi‑Fi.' },
          { q: 'What is the difference between Mbps and MB/s?', a: 'Internet speed is measured in megabits per second (Mbps). One megabyte per second (MB/s) equals 8 Mbps, so a 100 Mbps connection downloads at roughly 12.5 MB/s.' }
        ]
      },
      cta: {
        title: 'Is your website as fast as your internet?',
        desc: 'A slow site loses visitors and sales. Bizdavar Fast Web Studio builds fast, mobile-ready websites in 5 days.',
        btn: 'See Fast Web Studio',
        btn2: 'Free consultation'
      },
      geoText: 'Free internet speed test for users in Iran, Turkey, the Gulf, Russia, Europe and worldwide — measured on Cloudflare\'s global network.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'A fast, professional website in 5 days' },
        { title: 'Fast website in 5 days', url: 'articles/website-speed-5-days', desc: 'Why site speed lifts sales' },
        { title: 'Bizdavar services', url: 'services', desc: 'Web design, SEO and digital marketing' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный онлайн-инструмент',
        title: 'Тест скорости интернета',
        lead: 'Измерьте скорость загрузки, отдачи, пинг и джиттер примерно за 30 секунд. Без приложений и регистрации — для мобильного интернета, Wi‑Fi, DSL и оптики.'
      },
      ui: {
        start: 'Начать тест',
        restart: 'Повторить тест',
        statusIdle: 'Нажмите «Начать тест» — это займёт около 30 секунд.',
        statusLatency: 'Измеряем пинг и джиттер…',
        statusDownload: 'Измеряем скорость загрузки…',
        statusUpload: 'Измеряем скорость отдачи…',
        statusDone: 'Тест завершён.',
        statusError: 'Не удалось подключиться к серверу теста. Проверьте соединение, VPN или файрвол и попробуйте снова.',
        download: 'Загрузка',
        upload: 'Отдача',
        ping: 'Пинг',
        jitter: 'Джиттер',
        mbps: 'Мбит/с',
        ms: 'мс',
        ip: 'Ваш IP',
        isp: 'Провайдер',
        location: 'Ваше местоположение',
        server: 'Сервер теста',
        goodFor: 'Для чего подходит это подключение',
        okLabel: 'Подходит',
        noLabel: 'Недостаточно',
        activities: {
          browsing: 'Сайты и почта',
          hd: 'HD-видео (1080p)',
          uhd: '4K-стриминг',
          calls: 'Видеозвонки',
          gaming: 'Онлайн-игры',
          uploads: 'Большие файлы и облачный бэкап'
        },
        copy: 'Скопировать результат',
        copied: 'Скопировано!',
        share: 'Поделиться',
        shareText: 'Моя скорость интернета: ↓ {down} Мбит/с · ↑ {up} Мбит/с · пинг {ping} мс — тест: {url}',
        historyTitle: 'Ваши последние тесты',
        historyNote: 'Хранится только в этом браузере.',
        clear: 'Очистить',
        colDate: 'Дата',
        colDown: 'Загрузка',
        colUp: 'Отдача',
        colPing: 'Пинг',
        note: 'Измерение идёт до ближайшего дата-центра Cloudflare. Результаты не сохраняются на наших серверах.',
        gaugeAria: 'Текущая скорость'
      },
      explain: {
        eyebrow: 'Что значат цифры',
        title: 'Загрузка, отдача, пинг и джиттер — что это?',
        items: [
          { title: 'Скорость загрузки', body: 'Как быстро данные приходят к вам, в мегабитах в секунду (Мбит/с). От неё зависят видео, сайты и скачивание приложений.' },
          { title: 'Скорость отдачи', body: 'Как быстро вы отправляете данные — видеозвонки, облачный бэкап, отправка файлов и стримы.' },
          { title: 'Пинг (задержка)', body: 'Время отклика сервера туда и обратно в миллисекундах. До 30 мс — отлично, до 60 мс — подходит для игр, выше 150 мс — заметные лаги.' },
          { title: 'Джиттер', body: 'Насколько пинг колеблется между пакетами. Низкий джиттер (до 20 мс) — стабильные звонки и игры.' }
        ]
      },
      table: {
        title: 'Какая скорость интернета нужна?',
        desc: 'Рекомендуемый минимум на одно устройство. Для большой семьи суммируйте.',
        headActivity: 'Задача',
        headSpeed: 'Рекомендуемая скорость',
        rows: [
          { a: 'Почта и сайты', v: '1–5 Мбит/с' },
          { a: 'HD-видео (1080p)', v: '5–10 Мбит/с' },
          { a: '4K-стриминг', v: '25 Мбит/с' },
          { a: 'HD-видеозвонки (Zoom, Meet, Teams)', v: '3–4 Мбит/с в обе стороны' },
          { a: 'Онлайн-игры', v: '3–6 Мбит/с, пинг до 60 мс' },
          { a: 'Удалённая работа с большими файлами', v: 'от 50 Мбит/с загрузка, от 10 Мбит/с отдача' }
        ]
      },
      tips: {
        title: 'Как получить точный результат',
        items: [
          'Перед тестом остановите загрузки, стриминг и облачную синхронизацию на всех устройствах.',
          'Проверяйте по кабелю или рядом с роутером, чтобы отделить проблемы Wi‑Fi от проблем линии.',
          'Отключите VPN и прокси — они ведут трафик через другую страну и занижают результат.',
          'Сделайте 2–3 теста в разное время суток; вечером загруженные сети обычно медленнее.',
          'Сравните результат с тарифом. По Wi‑Fi обычно доходит 50–70% скорости линии.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Вопросы о тесте скорости интернета',
        items: [
          { q: 'Как работает этот тест скорости?', a: 'Браузер скачивает и отправляет тестовые файлы растущего размера в ближайший дата-центр Cloudflare. Каждая передача замеряется, итог — 90-й перцентиль скорости, а пинг считается по 20 небольшим запросам — тот же метод, что у speed.cloudflare.com.' },
          { q: 'Какая скорость интернета считается хорошей?', a: 'Одному человеку хватает 25 Мбит/с на загрузку и 5 Мбит/с на отдачу для видео, звонков и сайтов. Семье или домашнему офису комфортно от 100 Мбит/с. В играх важнее пинг: держите его ниже 60 мс.' },
          { q: 'Почему результат ниже, чем в тарифе?', a: 'Помехи Wi‑Fi, расстояние до роутера, другие устройства, VPN и вечерняя нагрузка снижают скорость. Проверьте по кабелю, чтобы понять, даёт ли линия оплаченную скорость.' },
          { q: 'Тест бесплатный и безопасный?', a: 'Да. Он бесплатный, не требует приложения или аккаунта и передаёт только случайные тестовые данные. Ваш IP показывается только вам и не сохраняется на наших серверах.' },
          { q: 'Сколько трафика расходует тест?', a: 'Объём подстраивается под скорость: около 15 МБ на медленном подключении и несколько сотен МБ на гигабитной оптике. При лимитном мобильном тарифе проверяйте через Wi‑Fi.' },
          { q: 'Чем Мбит/с отличается от МБ/с?', a: 'Скорость интернета измеряют в мегабитах в секунду (Мбит/с). 1 МБ/с равен 8 Мбит/с, то есть подключение 100 Мбит/с скачивает примерно 12,5 МБ/с.' }
        ]
      },
      cta: {
        title: 'Ваш сайт так же быстр, как ваш интернет?',
        desc: 'Медленный сайт теряет посетителей и продажи. Fast Web Studio от Bizdavar делает быстрые адаптивные сайты за 5 дней.',
        btn: 'Смотреть Fast Web Studio',
        btn2: 'Бесплатная консультация'
      },
      geoText: 'Бесплатный тест скорости интернета для пользователей по всему миру — измерение в глобальной сети Cloudflare.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'Быстрый профессиональный сайт за 5 дней' },
        { title: 'Быстрый сайт за 5 дней', url: 'articles/website-speed-5-days', desc: 'Почему скорость сайта растит продажи' },
        { title: 'Услуги Bizdavar', url: 'services', desc: 'Веб-дизайн, SEO и цифровой маркетинг' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة مجانية عبر الإنترنت',
        title: 'اختبار سرعة الإنترنت',
        lead: 'قِس سرعة التنزيل والرفع والبينغ والتذبذب في نحو 30 ثانية. دون تطبيق أو تسجيل — للجوال والواي فاي وDSL والألياف.'
      },
      ui: {
        start: 'ابدأ الاختبار',
        restart: 'أعد الاختبار',
        statusIdle: 'اضغط «ابدأ الاختبار» — يستغرق نحو 30 ثانية.',
        statusLatency: 'جارٍ قياس البينغ والتذبذب…',
        statusDownload: 'جارٍ قياس سرعة التنزيل…',
        statusUpload: 'جارٍ قياس سرعة الرفع…',
        statusDone: 'اكتمل الاختبار.',
        statusError: 'تعذّر الوصول إلى خادم الاختبار. تحقّق من الاتصال أو VPN أو جدار الحماية ثم أعد المحاولة.',
        download: 'التنزيل',
        upload: 'الرفع',
        ping: 'البينغ',
        jitter: 'التذبذب',
        mbps: 'Mbps',
        ms: 'ms',
        ip: 'عنوان IP',
        isp: 'مزوّد الخدمة',
        location: 'موقعك',
        server: 'خادم الاختبار',
        goodFor: 'ماذا يناسب هذا الاتصال؟',
        okLabel: 'مناسب',
        noLabel: 'غير كافٍ',
        activities: {
          browsing: 'التصفح والبريد',
          hd: 'فيديو HD (1080p)',
          uhd: 'بث 4K',
          calls: 'مكالمات الفيديو',
          gaming: 'الألعاب عبر الإنترنت',
          uploads: 'رفع الملفات الكبيرة والنسخ السحابي'
        },
        copy: 'نسخ النتيجة',
        copied: 'تم النسخ!',
        share: 'مشاركة',
        shareText: 'سرعة الإنترنت لدي: تنزيل {down} Mbps · رفع {up} Mbps · بينغ {ping} ms — الاختبار: {url}',
        historyTitle: 'اختباراتك الأخيرة',
        historyNote: 'تُحفظ في هذا المتصفح فقط.',
        clear: 'مسح',
        colDate: 'الوقت',
        colDown: 'التنزيل',
        colUp: 'الرفع',
        colPing: 'البينغ',
        note: 'يتم القياس مع أقرب مركز بيانات لـ Cloudflare. لا تُحفظ النتائج على خوادمنا.',
        gaugeAria: 'السرعة الحالية'
      },
      explain: {
        eyebrow: 'معنى الأرقام',
        title: 'ما هو التنزيل والرفع والبينغ والتذبذب؟',
        items: [
          { title: 'سرعة التنزيل', body: 'سرعة وصول البيانات إليك بالميغابت في الثانية (Mbps). تعتمد عليها مشاهدة الفيديو والتصفح وتنزيل التطبيقات.' },
          { title: 'سرعة الرفع', body: 'سرعة إرسال البيانات منك — مكالمات الفيديو والنسخ السحابي وإرسال الملفات والبث المباشر.' },
          { title: 'البينغ (زمن الاستجابة)', body: 'زمن الذهاب والإياب إلى الخادم بالمللي ثانية. أقل من 30 ممتاز، وأقل من 60 مناسب للألعاب، وفوق 150 يسبب تأخيرًا ملحوظًا.' },
          { title: 'التذبذب (Jitter)', body: 'مقدار تغيّر البينغ بين الحزم. التذبذب المنخفض (أقل من 20 مللي ثانية) يُبقي المكالمات والألعاب سلسة.' }
        ]
      },
      table: {
        title: 'ما سرعة الإنترنت التي تحتاجها؟',
        desc: 'الحد الأدنى المقترح لكل استخدام ولكل جهاز. اجمعها لمنزل كثير الاستخدام.',
        headActivity: 'الاستخدام',
        headSpeed: 'السرعة المقترحة',
        rows: [
          { a: 'البريد والتصفح', v: '1–5 Mbps' },
          { a: 'فيديو HD (1080p)', v: '5–10 Mbps' },
          { a: 'بث 4K', v: '25 Mbps' },
          { a: 'مكالمات فيديو HD (Zoom وMeet وTeams)', v: '3–4 Mbps تنزيلًا ورفعًا' },
          { a: 'الألعاب عبر الإنترنت', v: '3–6 Mbps مع بينغ أقل من 60 ms' },
          { a: 'العمل عن بُعد بملفات كبيرة', v: 'أكثر من 50 Mbps تنزيل و10 Mbps رفع' }
        ]
      },
      tips: {
        title: 'كيف تحصل على نتيجة دقيقة؟',
        items: [
          'أوقف التنزيلات والبث والمزامنة السحابية على كل الأجهزة قبل الاختبار.',
          'اختبر عبر الكابل أو بالقرب من الراوتر لتفصل مشاكل الواي فاي عن مشاكل الخط.',
          'أوقف VPN والبروكسي — فهما يمرّران الاتصال عبر بلد آخر ويخفضان النتيجة.',
          'أجرِ 2–3 اختبارات في أوقات مختلفة؛ الشبكات المزدحمة أبطأ عادةً في المساء.',
          'قارن النتيجة بباقتك. الواي فاي يقدّم عادةً 50–70% من سرعة الخط.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول اختبار سرعة الإنترنت',
        items: [
          { q: 'كيف يعمل اختبار السرعة هذا؟', a: 'ينزّل متصفحك ويرفع ملفات اختبار متزايدة الحجم إلى أقرب مركز بيانات لـ Cloudflare. يُقاس زمن كل نقل وتُعرض سرعة الشريحة المئوية 90، ويُحسب البينغ من 20 طلبًا صغيرًا — بالطريقة نفسها المستخدمة في speed.cloudflare.com.' },
          { q: 'ما هي سرعة الإنترنت الجيدة؟', a: 'لشخص واحد تكفي 25 Mbps تنزيلًا و5 Mbps رفعًا للفيديو والمكالمات والتصفح. وللعائلة أو المكتب المنزلي 100 Mbps فأكثر. في الألعاب البينغ أهم من السرعة: استهدف أقل من 60 مللي ثانية.' },
          { q: 'لماذا نتيجتي أقل من سرعة باقتي؟', a: 'تداخل الواي فاي والبعد عن الراوتر واستهلاك الأجهزة الأخرى وVPN وازدحام أوقات الذروة كلها تقلل السرعة. اختبر عبر الكابل لتعرف هل يقدّم الخط السرعة التي تدفع مقابلها.' },
          { q: 'هل اختبار السرعة مجاني وآمن؟', a: 'نعم. مجاني ولا يحتاج إلى تطبيق أو حساب، وينقل بيانات اختبار عشوائية فقط. يظهر عنوان IP لك وحدك ولا يُحفظ على خوادمنا.' },
          { q: 'كم يستهلك الاختبار من البيانات؟', a: 'يتكيّف حجم الاختبار مع سرعتك: نحو 15 ميغابايت في الاتصال البطيء وبضع مئات من الميغابايت في الألياف بسرعة غيغابت. إذا كانت باقتك محدودة فاختبر عبر الواي فاي.' },
          { q: 'ما الفرق بين Mbps وMB/s؟', a: 'تُقاس سرعة الإنترنت بالميغابت في الثانية (Mbps). كل 1 ميغابايت في الثانية (MB/s) يساوي 8 Mbps، أي أن اتصال 100 Mbps ينزّل نحو 12.5 ميغابايت في الثانية.' }
        ]
      },
      cta: {
        title: 'هل موقعك بسرعة الإنترنت لديك؟',
        desc: 'الموقع البطيء يخسر الزوار والمبيعات. يسلّم Fast Web Studio من Bizdavar مواقع سريعة ومتوافقة مع الجوال خلال 5 أيام.',
        btn: 'تعرّف على Fast Web Studio',
        btn2: 'استشارة مجانية'
      },
      geoText: 'اختبار سرعة إنترنت مجاني للمستخدمين في إيران وتركيا ودول الخليج وروسيا وأوروبا وحول العالم — يُقاس عبر شبكة Cloudflare العالمية.',
      related: [
        { title: 'Fast Web Studio', url: 'fast', desc: 'موقع سريع واحترافي خلال 5 أيام' },
        { title: 'موقع سريع خلال 5 أيام', url: 'articles/website-speed-5-days', desc: 'لماذا ترفع سرعة الموقع المبيعات' },
        { title: 'خدمات Bizdavar', url: 'services', desc: 'تصميم ويب وSEO وتسويق رقمي' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach(lang => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.speedTest = Object.assign(L.pages.speedTest || {}, seo[lang]);
    L.speedTestPage = pages[lang];
  });
})();
