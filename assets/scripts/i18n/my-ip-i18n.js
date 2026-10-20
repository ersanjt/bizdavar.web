/**
 * What is my IP — SEO meta + copy for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js so RU/AR are set directly (not cloned from EN).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'IP من چیست',
      seoTitle: 'IP من چیست؟ نمایش آی‌پی، اپراتور و موقعیت شما — بیزدوار',
      seoDescription: 'آدرس IP عمومی خود (IPv4 و IPv6) را فوراً ببینید: کشور، شهر، اپراتور، ASN و منطقه زمانی، به‌همراه تشخیص VPN و مشخصات مرورگر. رایگان و بدون ثبت‌نام.',
      seoKeywords: 'ip من چیست, آی پی من, نمایش ip, what is my ip, my ip, آدرس ip من, تشخیص vpn, ip چیست'
    },
    tr: {
      crumb: 'IP adresim ne',
      seoTitle: 'IP Adresim Ne? IP, Operatör ve Konum Sorgulama | Bizdavar',
      seoDescription: 'Genel IP adresinizi (IPv4 ve IPv6) anında görün: ülke, şehir, operatör, ASN ve saat dilimi; ayrıca VPN tespiti ve tarayıcı bilgileri. Ücretsiz, kayıt yok.',
      seoKeywords: 'ip adresim ne, ip adresim, ip öğrenme, ip sorgulama, my ip, what is my ip, ipv6 adresim, vpn testi'
    },
    en: {
      crumb: 'What is my IP',
      seoTitle: 'What Is My IP Address? IPv4, IPv6, ISP & Location | Bizdavar',
      seoDescription: 'See your public IP address (IPv4 and IPv6) instantly: country, city, ISP, ASN and time zone, plus a VPN hint and your browser details. Free, no sign-up.',
      seoKeywords: 'what is my ip, my ip address, ip lookup, check my ip, ipv6 address, my isp, ip location, vpn check'
    },
    ru: {
      crumb: 'Мой IP-адрес',
      seoTitle: 'Мой IP-адрес — узнать IPv4, IPv6, провайдера и местоположение | Bizdavar',
      seoDescription: 'Узнайте свой внешний IP-адрес (IPv4 и IPv6): страна, город, провайдер, ASN и часовой пояс, а также подсказка о VPN и данные браузера. Бесплатно, без регистрации.',
      seoKeywords: 'мой ip, узнать ip адрес, мой ip адрес, проверить ip, ipv6 адрес, мой провайдер, местоположение по ip, проверка vpn'
    },
    ar: {
      crumb: 'ما هو IP الخاص بي',
      seoTitle: 'ما هو عنوان IP الخاص بي؟ IPv4 وIPv6 والمزود والموقع | Bizdavar',
      seoDescription: 'اعرف عنوان IP العام لديك (IPv4 وIPv6) فوراً: الدولة والمدينة ومزود الخدمة وASN والمنطقة الزمنية، مع تلميح VPN وبيانات المتصفح. مجاني ودون تسجيل.',
      seoKeywords: 'ما هو ip الخاص بي, معرفة ip, عنوان ip الخاص بي, my ip, what is my ip, عنوان ipv6, مزود الانترنت, فحص vpn'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان آنلاین',
        title: 'IP من چیست؟',
        lead: 'آدرس IP عمومی شما همان آدرسی است که سایت‌ها و سرویس‌ها می‌بینند. اینجا IPv4، IPv6، اپراتور، موقعیت تقریبی و مشخصات مرورگرتان را ببینید.'
      },
      ui: {
        yourIp: 'آدرس IP شما',
        loading: 'در حال دریافت…',
        copy: 'کپی IP',
        copied: 'کپی شد ✓',
        refresh: 'به‌روزرسانی',
        notAvailable: 'ندارد',
        connTitle: 'جزئیات اتصال',
        country: 'کشور',
        region: 'استان / منطقه',
        city: 'شهر',
        isp: 'اپراتور / ISP',
        asn: 'ASN',
        ipTimezone: 'منطقه زمانی IP',
        deviceTitle: 'دستگاه و مرورگر',
        browser: 'مرورگر',
        os: 'سیستم‌عامل',
        language: 'زبان مرورگر',
        screen: 'صفحه نمایش',
        deviceTimezone: 'منطقه زمانی دستگاه',
        vpnHint: 'منطقه زمانی دستگاه با محل IP یکی نیست؛ احتمالاً از VPN یا پروکسی استفاده می‌کنید.',
        error: 'دریافت اطلاعات IP ممکن نشد. اگر VPN یا فیلترشکن روشن است، دوباره امتحان کنید.',
        note: 'IP فقط به خود شما نمایش داده می‌شود و روی سرور ما ذخیره نمی‌شود. موقعیت تقریبی است و از پایگاه داده ipwho.is می‌آید.'
      },
      explain: {
        eyebrow: 'آشنایی',
        title: 'آدرس IP چیست؟',
        items: [
          { title: 'IP عمومی', body: 'شناسه‌ای که اپراتور به اتصال شما می‌دهد و سایت‌ها با آن پاسخ را به شما برمی‌گردانند. همه دستگاه‌های پشت یک مودم معمولاً یک IP عمومی دارند.' },
          { title: 'IPv4 و IPv6', body: 'IPv4 چهار عدد مثل 85.15.20.1 است و تعدادش محدود است. IPv6 نسل جدید با آدرس‌های بسیار بیشتر است؛ اگر اپراتورتان پشتیبانی کند، هر دو را می‌بینید.' },
          { title: 'IP خصوصی', body: 'آدرس‌هایی مثل 192.168.x.x فقط داخل شبکه خانه یا شرکت معنا دارند و از اینترنت دیده نمی‌شوند.' }
        ]
      },
      tips: {
        title: 'چه وقت IP به کار می‌آید؟',
        items: [
          'برای تنظیم دسترسی ریموت، دوربین مداربسته یا سرور، IP عمومی را به پشتیبانی بدهید.',
          'اگر سایتی شما را به‌اشتباه مسدود کرده، IP را برای رفع مسدودیت ارسال کنید.',
          'بعد از روشن کردن VPN، این صفحه را باز کنید تا مطمئن شوید IP عوض شده است.',
          'برای سرورها، دوربین‌ها و دسترسی ثابت از اپراتور IP ثابت (Static IP) بگیرید.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره IP',
        items: [
          { q: 'IP من چیست و چطور پیدایش کنم؟', a: 'همین که این صفحه را باز کردید، IP عمومی شما بالای صفحه نمایش داده شد. این همان آدرسی است که سایت‌ها و سرویس‌ها از اتصال شما می‌بینند.' },
          { q: 'موقعیت نمایش‌داده‌شده چقدر دقیق است؟', a: 'موقعیت IP معمولاً در حد شهر یا مرکز اپراتور است، نه آدرس دقیق شما. در اینترنت موبایل ممکن است شهر دیگری نمایش داده شود.' },
          { q: 'آیا کسی می‌تواند با IP آدرس خانه‌ام را پیدا کند؟', a: 'خیر. IP فقط اپراتور و منطقه تقریبی را نشان می‌دهد. مشخصات مشترک فقط نزد اپراتور است و با حکم قانونی قابل دسترسی است.' },
          { q: 'چرا IP من مدام عوض می‌شود؟', a: 'بیشتر اپراتورها IP پویا (Dynamic) می‌دهند که با خاموش‌وروشن شدن مودم یا جابه‌جایی در اینترنت موبایل تغییر می‌کند.' },
          { q: 'IP ثابت چیست و لازم دارم؟', a: 'IP ثابت هیچ‌وقت تغییر نمی‌کند و برای سرور، دوربین، VPN سازمانی و دسترسی ریموت لازم است. اپراتورها آن را با هزینه ماهانه ارائه می‌دهند.' }
        ]
      },
      cta: {
        title: 'سرور، VPN سازمانی یا IP ثابت لازم دارید؟',
        desc: 'تیم بیزدوار راه‌اندازی و مدیریت سرور، امنیت، بکاپ و مانیتورینگ را برای کسب‌وکار شما انجام می‌دهد.',
        btn: 'مدیریت سرور بیزدوار',
        btn2: 'مشاوره رایگان'
      },
      geoText: 'نمایش IP و اپراتور برای کاربران ایران، ترکیه، کشورهای عربی، روسیه و سراسر جهان — IPv4 و IPv6.',
      related: [
        { title: 'تست سرعت اینترنت', url: 'speed-test', desc: 'دانلود، آپلود و پینگ اینترنت شما' },
        { title: 'مدیریت سرور', url: 'services#server-ops', desc: 'VPS، امنیت، بکاپ و مانیتورینگ' },
        { title: 'ابزارهای رایگان بیزدوار', url: 'tools', desc: 'ابزارهای وب، بازاریابی و صنعتی' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz online araç',
        title: 'IP Adresim Ne?',
        lead: 'Genel IP adresiniz, sitelerin ve hizmetlerin gördüğü adrestir. Burada IPv4, IPv6, operatör, yaklaşık konum ve tarayıcı bilgilerinizi görün.'
      },
      ui: {
        yourIp: 'IP adresiniz',
        loading: 'Alınıyor…',
        copy: "IP'yi kopyala",
        copied: 'Kopyalandı ✓',
        refresh: 'Yenile',
        notAvailable: 'Yok',
        connTitle: 'Bağlantı ayrıntıları',
        country: 'Ülke',
        region: 'İl / Bölge',
        city: 'Şehir',
        isp: 'Operatör / ISP',
        asn: 'ASN',
        ipTimezone: 'IP saat dilimi',
        deviceTitle: 'Cihaz ve tarayıcı',
        browser: 'Tarayıcı',
        os: 'İşletim sistemi',
        language: 'Tarayıcı dili',
        screen: 'Ekran',
        deviceTimezone: 'Cihaz saat dilimi',
        vpnHint: 'Cihazınızın saat dilimi IP konumuyla uyuşmuyor; muhtemelen VPN veya proxy kullanıyorsunuz.',
        error: "IP bilgisi alınamadı. VPN açıksa tekrar deneyin.",
        note: 'IP yalnızca size gösterilir ve sunucumuzda saklanmaz. Konum yaklaşıktır ve ipwho.is veritabanından gelir.'
      },
      explain: {
        eyebrow: 'Temel bilgiler',
        title: 'IP adresi nedir?',
        items: [
          { title: 'Genel IP', body: 'Operatörün bağlantınıza verdiği kimliktir; siteler yanıtı bu adrese gönderir. Aynı modemin arkasındaki cihazlar genellikle tek bir genel IP paylaşır.' },
          { title: 'IPv4 ve IPv6', body: 'IPv4, 85.15.20.1 gibi dört sayıdan oluşur ve sayısı sınırlıdır. IPv6 çok daha fazla adres sunan yeni nesildir; operatörünüz destekliyorsa ikisini de görürsünüz.' },
          { title: 'Özel IP', body: '192.168.x.x gibi adresler yalnızca ev veya ofis ağında geçerlidir ve internetten görünmez.' }
        ]
      },
      tips: {
        title: 'IP adresi ne zaman gerekir?',
        items: [
          'Uzaktan erişim, güvenlik kamerası veya sunucu kurulumu için genel IP’yi teknik desteğe verin.',
          'Bir site sizi yanlışlıkla engellediyse engeli kaldırmak için IP’nizi iletin.',
          'VPN’i açtıktan sonra IP’nin değiştiğinden emin olmak için bu sayfayı açın.',
          'Sunucu, kamera ve sabit erişim için operatörden sabit IP (Static IP) alın.'
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'IP adresi hakkında sorular',
        items: [
          { q: 'IP adresim ne ve nasıl öğrenirim?', a: 'Bu sayfayı açtığınız anda genel IP adresiniz en üstte gösterildi. Bu, sitelerin ve hizmetlerin bağlantınızdan gördüğü adrestir.' },
          { q: 'Gösterilen konum ne kadar doğru?', a: 'IP konumu genellikle şehir veya operatör merkezi düzeyindedir, tam adresiniz değildir. Mobil internette başka bir şehir görünebilir.' },
          { q: 'Biri IP ile ev adresimi bulabilir mi?', a: 'Hayır. IP yalnızca operatörü ve yaklaşık bölgeyi gösterir. Abone bilgileri yalnızca operatördedir ve ancak yasal kararla erişilebilir.' },
          { q: 'IP adresim neden sürekli değişiyor?', a: 'Çoğu operatör dinamik IP verir; modem yeniden başlatıldığında veya mobil ağda yer değiştirdiğinizde değişir.' },
          { q: 'Sabit IP nedir, gerekli mi?', a: 'Sabit IP hiç değişmez; sunucu, kamera, kurumsal VPN ve uzaktan erişim için gerekir. Operatörler aylık ücretle sunar.' }
        ]
      },
      cta: {
        title: 'Sunucu, kurumsal VPN veya sabit IP mi gerekiyor?',
        desc: 'Bizdavar ekibi işletmeniz için sunucu kurulumu ve yönetimi, güvenlik, yedekleme ve izleme hizmeti verir.',
        btn: 'Bizdavar sunucu yönetimi',
        btn2: 'Ücretsiz danışmanlık'
      },
      geoText: "Türkiye, İran, Arap ülkeleri, Rusya ve tüm dünyadaki kullanıcılar için IP ve operatör sorgulama — IPv4 ve IPv6.",
      related: [
        { title: 'İnternet hız testi', url: 'speed-test', desc: 'İndirme, yükleme ve ping ölçümü' },
        { title: 'Sunucu yönetimi', url: 'services#server-ops', desc: 'VPS, güvenlik, yedekleme ve izleme' },
        { title: 'Bizdavar ücretsiz araçlar', url: 'tools', desc: 'Web, pazarlama ve endüstriyel araçlar' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free online tool',
        title: 'What Is My IP Address?',
        lead: 'Your public IP address is the address websites and services see. Check your IPv4, IPv6, ISP, approximate location and browser details here.'
      },
      ui: {
        yourIp: 'Your IP address',
        loading: 'Loading…',
        copy: 'Copy IP',
        copied: 'Copied ✓',
        refresh: 'Refresh',
        notAvailable: 'Not available',
        connTitle: 'Connection details',
        country: 'Country',
        region: 'Region',
        city: 'City',
        isp: 'ISP',
        asn: 'ASN',
        ipTimezone: 'IP time zone',
        deviceTitle: 'Device and browser',
        browser: 'Browser',
        os: 'Operating system',
        language: 'Browser language',
        screen: 'Screen',
        deviceTimezone: 'Device time zone',
        vpnHint: "Your device time zone doesn't match the IP location — you are probably using a VPN or proxy.",
        error: 'Could not load your IP details. If a VPN is on, please try again.',
        note: 'Your IP is shown only to you and is not stored on our servers. The location is approximate and comes from the ipwho.is database.'
      },
      explain: {
        eyebrow: 'The basics',
        title: 'What is an IP address?',
        items: [
          { title: 'Public IP', body: 'The identifier your ISP gives your connection; websites send their responses back to it. Devices behind one router usually share a single public IP.' },
          { title: 'IPv4 and IPv6', body: 'IPv4 is four numbers like 85.15.20.1 and is in short supply. IPv6 is the newer version with vastly more addresses; if your ISP supports it, you will see both.' },
          { title: 'Private IP', body: 'Addresses such as 192.168.x.x only exist inside a home or office network and are not visible from the internet.' }
        ]
      },
      tips: {
        title: 'When do you need your IP?',
        items: [
          'Give your public IP to IT support to set up remote access, CCTV cameras or a server.',
          'If a website blocked you by mistake, send them your IP to get unblocked.',
          'Open this page after turning on a VPN to confirm your IP has changed.',
          'Ask your ISP for a static IP for servers, cameras and fixed remote access.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'IP address questions',
        items: [
          { q: 'What is my IP and how do I find it?', a: 'Your public IP appeared at the top as soon as you opened this page. It is the address websites and services see from your connection.' },
          { q: 'How accurate is the location?', a: 'IP location is usually city-level or the ISP hub — not your street address. On mobile data another city may appear.' },
          { q: 'Can someone find my home address from my IP?', a: 'No. An IP only reveals the ISP and an approximate area. Subscriber details stay with the ISP and are released only under a legal order.' },
          { q: 'Why does my IP keep changing?', a: 'Most ISPs assign dynamic IPs that change when the router restarts or as you move on a mobile network.' },
          { q: 'What is a static IP and do I need one?', a: 'A static IP never changes. You need one for servers, cameras, company VPNs and remote access; ISPs offer it for a monthly fee.' }
        ]
      },
      cta: {
        title: 'Need a server, company VPN or static IP setup?',
        desc: 'The Bizdavar team sets up and manages servers, security, backups and monitoring for your business.',
        btn: 'Bizdavar server management',
        btn2: 'Free consultation'
      },
      geoText: 'IP and ISP lookup for users in Turkey, Iran, the Arab world, Russia, Europe and worldwide — IPv4 and IPv6.',
      related: [
        { title: 'Internet speed test', url: 'speed-test', desc: 'Your download, upload and ping' },
        { title: 'Server management', url: 'services#server-ops', desc: 'VPS, security, backups and monitoring' },
        { title: 'Bizdavar free tools', url: 'tools', desc: 'Web, marketing and industrial tools' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный онлайн-инструмент',
        title: 'Мой IP-адрес',
        lead: 'Внешний IP-адрес — это адрес, который видят сайты и сервисы. Здесь показаны ваши IPv4, IPv6, провайдер, примерное местоположение и данные браузера.'
      },
      ui: {
        yourIp: 'Ваш IP-адрес',
        loading: 'Загрузка…',
        copy: 'Копировать IP',
        copied: 'Скопировано ✓',
        refresh: 'Обновить',
        notAvailable: 'Нет',
        connTitle: 'Данные подключения',
        country: 'Страна',
        region: 'Регион',
        city: 'Город',
        isp: 'Провайдер',
        asn: 'ASN',
        ipTimezone: 'Часовой пояс IP',
        deviceTitle: 'Устройство и браузер',
        browser: 'Браузер',
        os: 'Операционная система',
        language: 'Язык браузера',
        screen: 'Экран',
        deviceTimezone: 'Часовой пояс устройства',
        vpnHint: 'Часовой пояс устройства не совпадает с местоположением IP — вероятно, вы используете VPN или прокси.',
        error: 'Не удалось получить данные IP. Если включён VPN, попробуйте ещё раз.',
        note: 'IP показывается только вам и не сохраняется на наших серверах. Местоположение примерное и берётся из базы ipwho.is.'
      },
      explain: {
        eyebrow: 'Основы',
        title: 'Что такое IP-адрес?',
        items: [
          { title: 'Внешний IP', body: 'Идентификатор, который провайдер выдаёт вашему подключению; сайты отправляют ответы на него. Устройства за одним роутером обычно делят один внешний IP.' },
          { title: 'IPv4 и IPv6', body: 'IPv4 — четыре числа вроде 85.15.20.1, их число ограничено. IPv6 — новое поколение с огромным количеством адресов; если провайдер его поддерживает, вы увидите оба.' },
          { title: 'Частный IP', body: 'Адреса вида 192.168.x.x работают только внутри домашней или офисной сети и не видны из интернета.' }
        ]
      },
      tips: {
        title: 'Когда нужен IP-адрес?',
        items: [
          'Сообщите внешний IP техподдержке для настройки удалённого доступа, видеонаблюдения или сервера.',
          'Если сайт заблокировал вас по ошибке, отправьте им свой IP для разблокировки.',
          'Откройте эту страницу после включения VPN, чтобы убедиться, что IP сменился.',
          'Для серверов, камер и постоянного доступа закажите у провайдера статический IP.'
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы об IP-адресе',
        items: [
          { q: 'Какой у меня IP и как его узнать?', a: 'Ваш внешний IP появился вверху страницы сразу после её открытия. Это адрес, который сайты и сервисы видят у вашего подключения.' },
          { q: 'Насколько точно местоположение?', a: 'Местоположение по IP обычно определяется с точностью до города или узла провайдера, а не до улицы. В мобильном интернете может отображаться другой город.' },
          { q: 'Можно ли по IP найти мой домашний адрес?', a: 'Нет. IP показывает только провайдера и примерный район. Данные абонента есть только у провайдера и выдаются лишь по решению суда.' },
          { q: 'Почему мой IP постоянно меняется?', a: 'Большинство провайдеров выдают динамический IP, который меняется после перезагрузки роутера или при перемещении в мобильной сети.' },
          { q: 'Что такое статический IP и нужен ли он?', a: 'Статический IP не меняется. Он нужен для серверов, камер, корпоративного VPN и удалённого доступа; провайдеры дают его за ежемесячную плату.' }
        ]
      },
      cta: {
        title: 'Нужен сервер, корпоративный VPN или статический IP?',
        desc: 'Команда Bizdavar настраивает и обслуживает серверы, безопасность, резервные копии и мониторинг для вашего бизнеса.',
        btn: 'Администрирование серверов',
        btn2: 'Бесплатная консультация'
      },
      geoText: 'Проверка IP и провайдера для пользователей в России, Турции, Иране, арабских странах и по всему миру — IPv4 и IPv6.',
      related: [
        { title: 'Тест скорости интернета', url: 'speed-test', desc: 'Загрузка, отдача и пинг' },
        { title: 'Администрирование серверов', url: 'services#server-ops', desc: 'VPS, безопасность, бэкапы и мониторинг' },
        { title: 'Бесплатные инструменты Bizdavar', url: 'tools', desc: 'Веб, маркетинг и промышленность' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة مجانية عبر الإنترنت',
        title: 'ما هو عنوان IP الخاص بي؟',
        lead: 'عنوان IP العام هو العنوان الذي تراه المواقع والخدمات. اطّلع هنا على IPv4 وIPv6 ومزود الخدمة وموقعك التقريبي وبيانات متصفحك.'
      },
      ui: {
        yourIp: 'عنوان IP الخاص بك',
        loading: 'جارٍ التحميل…',
        copy: 'نسخ IP',
        copied: 'تم النسخ ✓',
        refresh: 'تحديث',
        notAvailable: 'غير متاح',
        connTitle: 'تفاصيل الاتصال',
        country: 'الدولة',
        region: 'المنطقة',
        city: 'المدينة',
        isp: 'مزود الخدمة',
        asn: 'ASN',
        ipTimezone: 'المنطقة الزمنية لـ IP',
        deviceTitle: 'الجهاز والمتصفح',
        browser: 'المتصفح',
        os: 'نظام التشغيل',
        language: 'لغة المتصفح',
        screen: 'الشاشة',
        deviceTimezone: 'المنطقة الزمنية للجهاز',
        vpnHint: 'المنطقة الزمنية لجهازك لا تطابق موقع IP؛ على الأرجح تستخدم VPN أو بروكسي.',
        error: 'تعذر تحميل بيانات IP. إذا كان VPN مفعّلاً فحاول مرة أخرى.',
        note: 'يظهر عنوان IP لك وحدك ولا يُحفظ على خوادمنا. الموقع تقريبي ومصدره قاعدة بيانات ipwho.is.'
      },
      explain: {
        eyebrow: 'الأساسيات',
        title: 'ما هو عنوان IP؟',
        items: [
          { title: 'IP العام', body: 'المعرّف الذي يمنحه مزود الخدمة لاتصالك، وإليه ترسل المواقع ردودها. الأجهزة خلف راوتر واحد تتشارك عادةً IP عاماً واحداً.' },
          { title: 'IPv4 وIPv6', body: 'IPv4 أربعة أرقام مثل 85.15.20.1 وعددها محدود. IPv6 هو الجيل الأحدث بعدد هائل من العناوين؛ وإذا دعمه مزودك فسترى الاثنين.' },
          { title: 'IP الخاص', body: 'عناوين مثل 192.168.x.x تعمل داخل شبكة المنزل أو المكتب فقط ولا تظهر على الإنترنت.' }
        ]
      },
      tips: {
        title: 'متى تحتاج إلى عنوان IP؟',
        items: [
          'أعطِ عنوان IP العام للدعم الفني لإعداد الوصول عن بُعد أو كاميرات المراقبة أو الخادم.',
          'إذا حظرك موقع بالخطأ، أرسل لهم عنوان IP لفك الحظر.',
          'افتح هذه الصفحة بعد تشغيل VPN للتأكد من تغيّر عنوان IP.',
          'اطلب من مزودك IP ثابتاً للخوادم والكاميرات والوصول الدائم.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول عنوان IP',
        items: [
          { q: 'ما هو IP الخاص بي وكيف أعرفه؟', a: 'ظهر عنوان IP العام في أعلى الصفحة بمجرد فتحها. وهو العنوان الذي تراه المواقع والخدمات من اتصالك.' },
          { q: 'ما مدى دقة الموقع المعروض؟', a: 'موقع IP يكون عادةً على مستوى المدينة أو مركز مزود الخدمة، وليس عنوانك الدقيق. وقد تظهر مدينة أخرى عند استخدام بيانات الجوال.' },
          { q: 'هل يمكن لأحد معرفة عنوان منزلي من IP؟', a: 'لا. يكشف IP مزود الخدمة والمنطقة التقريبية فقط، وبيانات المشترك تبقى لدى المزود ولا تُكشف إلا بأمر قانوني.' },
          { q: 'لماذا يتغير عنوان IP باستمرار؟', a: 'يمنح معظم المزودين عنوان IP ديناميكياً يتغير عند إعادة تشغيل الراوتر أو التنقل في شبكة الجوال.' },
          { q: 'ما هو IP الثابت وهل أحتاجه؟', a: 'IP الثابت لا يتغير أبداً، وهو ضروري للخوادم والكاميرات وVPN الشركات والوصول عن بُعد، ويقدمه المزودون مقابل رسوم شهرية.' }
        ]
      },
      cta: {
        title: 'تحتاج إلى خادم أو VPN للشركة أو IP ثابت؟',
        desc: 'يتولى فريق Bizdavar إعداد الخوادم وإدارتها والأمان والنسخ الاحتياطي والمراقبة لأعمالك.',
        btn: 'إدارة الخوادم من Bizdavar',
        btn2: 'استشارة مجانية'
      },
      geoText: 'معرفة IP ومزود الخدمة للمستخدمين في الإمارات والسعودية والعراق وتركيا وإيران وحول العالم — IPv4 وIPv6.',
      related: [
        { title: 'اختبار سرعة الإنترنت', url: 'speed-test', desc: 'التنزيل والرفع والبينغ لديك' },
        { title: 'إدارة الخوادم', url: 'services#server-ops', desc: 'VPS والأمان والنسخ الاحتياطي والمراقبة' },
        { title: 'أدوات Bizdavar المجانية', url: 'tools', desc: 'أدوات الويب والتسويق والصناعة' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.myIp = Object.assign(L.pages.myIp || {}, seo[lang]);
    L.myIpPage = pages[lang];
  });
})();
