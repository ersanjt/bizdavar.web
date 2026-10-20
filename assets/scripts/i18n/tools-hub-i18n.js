/**
 * Free tools hub — SEO meta + copy for fa / tr / en / ru / ar.
 * Card order must match TOOL_GROUPS in scripts/gen-tool-pages.js.
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'ابزارهای رایگان',
      seoTitle: 'ابزارهای رایگان آنلاین | تست سرعت، IP، لینک واتساپ، UTM و ابزار صنعتی — بیزدوار',
      seoDescription: 'ابزارهای رایگان بیزدوار: تست سرعت اینترنت و سایت، آی‌پی من، ساخت لینک واتساپ و UTM، محاسبه حجم مخزن و تبدیل واحد فشار و دبی. بدون ثبت‌نام، در ۵ زبان.',
      seoKeywords: 'ابزار رایگان آنلاین, ابزارهای وب, تست سرعت اینترنت, آی پی من, ساخت لینک واتساپ, ساخت لینک utm, محاسبه حجم مخزن, تبدیل واحد فشار'
    },
    tr: {
      crumb: 'Ücretsiz araçlar',
      seoTitle: 'Ücretsiz Online Araçlar | Hız Testi, IP, WhatsApp Linki, UTM ve Endüstriyel Araçlar — Bizdavar',
      seoDescription: 'Bizdavar ücretsiz araçları: internet ve site hız testi, IP adresim, WhatsApp ve UTM link oluşturucu, tank hacmi hesaplama ve basınç-debi birim çevirici. Kayıt yok, 5 dilde.',
      seoKeywords: 'ücretsiz online araçlar, web araçları, internet hız testi, ip adresim, whatsapp link oluşturma, utm oluşturucu, tank hacmi hesaplama, birim çevirici'
    },
    en: {
      crumb: 'Free tools',
      seoTitle: 'Free Online Tools | Speed Test, My IP, WhatsApp Link, UTM & Industrial Calculators — Bizdavar',
      seoDescription: "Bizdavar's free tools: internet and website speed tests, what is my IP, WhatsApp and UTM link builders, tank volume calculator and pressure/flow unit converter. No sign-up, in 5 languages.",
      seoKeywords: 'free online tools, web tools, internet speed test, what is my ip, whatsapp link generator, utm builder, tank volume calculator, unit converter'
    },
    ru: {
      crumb: 'Бесплатные инструменты',
      seoTitle: 'Бесплатные онлайн-инструменты | Тест скорости, мой IP, ссылка WhatsApp, UTM и инженерные калькуляторы — Bizdavar',
      seoDescription: 'Бесплатные инструменты Bizdavar: тест скорости интернета и сайта, мой IP, генераторы ссылок WhatsApp и UTM, калькулятор объёма резервуара и конвертер единиц давления и расхода. Без регистрации, на 5 языках.',
      seoKeywords: 'бесплатные онлайн инструменты, веб инструменты, тест скорости интернета, мой ip, ссылка на whatsapp, генератор utm меток, калькулятор объема резервуара, конвертер единиц'
    },
    ar: {
      crumb: 'الأدوات المجانية',
      seoTitle: 'أدوات مجانية عبر الإنترنت | اختبار السرعة وعنوان IP ورابط واتساب وUTM وأدوات صناعية — Bizdavar',
      seoDescription: 'أدوات Bizdavar المجانية: اختبار سرعة الإنترنت والموقع، ما هو عنوان IP الخاص بي، منشئ روابط واتساب وUTM، حاسبة حجم الخزان ومحوّل وحدات الضغط والتدفق. بلا تسجيل وبخمس لغات.',
      seoKeywords: 'أدوات مجانية اون لاين, أدوات الويب, اختبار سرعة الانترنت, ما هو ip الخاص بي, انشاء رابط واتساب, منشئ utm, حاسبة حجم الخزان, محول الوحدات'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'رایگان، بدون ثبت‌نام',
        title: 'ابزارهای رایگان بیزدوار',
        lead: 'ابزارهای کاربردی وب، بازاریابی و صنعت که مستقیم در مرورگر شما اجرا می‌شوند — سریع، امن و در پنج زبان.'
      },
      open: 'استفاده از ابزار',
      groups: [
        {
          title: 'اینترنت و وب‌سایت',
          cards: [
            { title: 'تست سرعت اینترنت', desc: 'دانلود، آپلود، پینگ و جیتر اینترنت خود را در ۳۰ ثانیه بسنجید.' },
            { title: 'تست سرعت سایت', desc: 'امتیاز PageSpeed و Core Web Vitals سایت خود را برای موبایل و دسکتاپ بگیرید.' },
            { title: 'آی‌پی من چیست؟', desc: 'آدرس IP، اپراتور، موقعیت تقریبی و مشخصات مرورگر و دستگاه خود را ببینید.' }
          ]
        },
        {
          title: 'بازاریابی و فروش',
          cards: [
            { title: 'ساخت لینک واتساپ', desc: 'لینک wa.me با پیام آماده، کد دکمه برای سایت و QR Code قابل چاپ بسازید.' },
            { title: 'ساخت لینک UTM', desc: 'لینک کمپین برای Google Analytics بسازید و بفهمید فروش از کدام تبلیغ آمده است.' }
          ]
        },
        {
          title: 'مهندسی و صنعت',
          cards: [
            { title: 'محاسبه حجم مخزن', desc: 'حجم کل و حجم مایع مخزن استوانه‌ای، افقی، مکعبی و کروی را حساب کنید.' },
            { title: 'تبدیل واحد فشار و دبی', desc: 'bar، psi، m³/h، gpm، دما، طول و حجم را همزمان به همه واحدها تبدیل کنید.' }
          ]
        }
      ],
      explain: {
        eyebrow: 'چرا این ابزارها؟',
        title: 'ساخته‌شده برای کار واقعی',
        items: [
          { title: 'بدون ثبت‌نام و رایگان', body: 'همه ابزارها بدون حساب کاربری، تبلیغ مزاحم یا محدودیت استفاده در دسترس هستند.' },
          { title: 'حریم خصوصی', body: 'محاسبه‌ها در مرورگر شما انجام می‌شود و داده‌ای که وارد می‌کنید روی سرور ما ذخیره نمی‌شود.' },
          { title: 'پنج زبان', body: 'فارسی، ترکی، انگلیسی، روسی و عربی — برای تیم‌ها و مشتریان شما در هر کشوری.' }
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره ابزارها',
        items: [
          { q: 'آیا ابزارهای بیزدوار واقعاً رایگان هستند؟', a: 'بله. همه ابزارها رایگان‌اند و به ثبت‌نام یا نصب برنامه نیاز ندارند.' },
          { q: 'اطلاعاتی که وارد می‌کنم ذخیره می‌شود؟', a: 'خیر. محاسبه‌ها در مرورگر شما انجام می‌شود. فقط تست سرعت سایت آدرس را برای تحلیل به Google PageSpeed می‌فرستد.' },
          { q: 'روی موبایل هم کار می‌کنند؟', a: 'بله. همه ابزارها برای موبایل، تبلت و کامپیوتر طراحی شده‌اند.' },
          { q: 'می‌توانم ابزار جدیدی پیشنهاد بدهم؟', a: 'حتماً. از صفحه تماس ابزار مورد نیازتان را بنویسید؛ ابزارهای پرطرفدار را اضافه می‌کنیم.' }
        ]
      },
      cta: {
        title: 'ابزار اختصاصی برای کسب‌وکار خود می‌خواهید؟',
        desc: 'بیزدوار ماشین‌حساب، پنل و اپلیکیشن وب اختصاصی می‌سازد — از محاسبه قیمت تا داشبورد صنعتی.',
        btn: 'خدمات بیزدوار',
        btn2: 'پیشنهاد ابزار'
      },
      geoText: 'ابزارهای رایگان برای کاربران و کسب‌وکارهای ایران، ترکیه، کشورهای عربی، روسیه، اروپا و آمریکا.',
      related: [
        { title: 'خدمات بیزدوار', url: 'services', desc: 'طراحی وب، سئو و بازاریابی دیجیتال' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'سایت سریع و حرفه‌ای در ۵ روز' },
        { title: 'نرم‌افزار وب اختصاصی', url: 'articles/custom-web-app-development', desc: 'پنل و ابزار مخصوص کسب‌وکار شما' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz, kayıt gerekmez',
        title: 'Bizdavar Ücretsiz Araçlar',
        lead: 'Doğrudan tarayıcınızda çalışan web, pazarlama ve endüstri araçları — hızlı, güvenli ve beş dilde.'
      },
      open: 'Aracı kullan',
      groups: [
        {
          title: 'İnternet ve web sitesi',
          cards: [
            { title: 'İnternet hız testi', desc: 'İndirme, yükleme, ping ve jitter değerlerinizi 30 saniyede ölçün.' },
            { title: 'Web sitesi hız testi', desc: 'Sitenizin mobil ve masaüstü PageSpeed puanını ve Core Web Vitals değerlerini görün.' },
            { title: 'IP adresim nedir?', desc: 'IP adresinizi, operatörünüzü, yaklaşık konumunuzu ve cihaz bilgilerinizi görün.' }
          ]
        },
        {
          title: 'Pazarlama ve satış',
          cards: [
            { title: 'WhatsApp link oluşturucu', desc: 'Hazır mesajlı wa.me linki, site butonu kodu ve yazdırılabilir QR kod oluşturun.' },
            { title: 'UTM link oluşturucu', desc: "Google Analytics için kampanya linki oluşturun, satışın hangi reklamdan geldiğini görün." }
          ]
        },
        {
          title: 'Mühendislik ve endüstri',
          cards: [
            { title: 'Tank hacmi hesaplama', desc: 'Silindir, yatay, dikdörtgen ve küresel tankların toplam ve sıvı hacmini hesaplayın.' },
            { title: 'Basınç ve debi birim çevirici', desc: 'bar, psi, m³/h, gpm, sıcaklık, uzunluk ve hacmi tüm birimlere aynı anda çevirin.' }
          ]
        }
      ],
      explain: {
        eyebrow: 'Neden bu araçlar?',
        title: 'Gerçek iş için tasarlandı',
        items: [
          { title: 'Ücretsiz ve kayıtsız', body: 'Tüm araçlar hesap, rahatsız edici reklam veya kullanım sınırı olmadan kullanılabilir.' },
          { title: 'Gizlilik', body: 'Hesaplamalar tarayıcınızda yapılır; girdiğiniz veriler sunucumuzda saklanmaz.' },
          { title: 'Beş dil', body: 'Farsça, Türkçe, İngilizce, Rusça ve Arapça — her ülkedeki ekip ve müşterileriniz için.' }
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'Araçlar hakkında sorular',
        items: [
          { q: 'Bizdavar araçları gerçekten ücretsiz mi?', a: 'Evet. Tüm araçlar ücretsizdir ve kayıt ya da kurulum gerektirmez.' },
          { q: 'Girdiğim bilgiler saklanıyor mu?', a: "Hayır. Hesaplamalar tarayıcınızda yapılır. Yalnızca site hız testi adresi analiz için Google PageSpeed'e gönderir." },
          { q: 'Mobilde çalışıyor mu?', a: 'Evet. Tüm araçlar telefon, tablet ve bilgisayar için tasarlandı.' },
          { q: 'Yeni bir araç önerebilir miyim?', a: 'Elbette. İletişim sayfasından ihtiyacınız olan aracı yazın; çok istenenleri ekliyoruz.' }
        ]
      },
      cta: {
        title: 'İşletmenize özel bir araç mı istiyorsunuz?',
        desc: 'Bizdavar fiyat hesaplayıcıdan endüstriyel panoya kadar özel hesap makineleri, paneller ve web uygulamaları geliştirir.',
        btn: 'Bizdavar hizmetleri',
        btn2: 'Araç önerin'
      },
      geoText: 'Türkiye, İran, Arap ülkeleri, Rusya, Avrupa ve ABD deki kullanıcılar ve işletmeler için ücretsiz araçlar.',
      related: [
        { title: 'Bizdavar hizmetleri', url: 'services', desc: 'Web tasarım, SEO ve dijital pazarlama' },
        { title: 'Fast Web Studio', url: 'fast', desc: '5 günde hızlı ve profesyonel site' },
        { title: 'Özel web yazılımı', url: 'articles/custom-web-app-development', desc: 'İşletmenize özel panel ve araçlar' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free, no sign-up',
        title: 'Bizdavar Free Tools',
        lead: 'Practical web, marketing and industrial tools that run right in your browser — fast, private and in five languages.'
      },
      open: 'Use the tool',
      groups: [
        {
          title: 'Internet & website',
          cards: [
            { title: 'Internet speed test', desc: 'Measure your download, upload, ping and jitter in about 30 seconds.' },
            { title: 'Website speed test', desc: "Get your site's PageSpeed score and Core Web Vitals for mobile and desktop." },
            { title: 'What is my IP?', desc: 'See your IP address, ISP, approximate location and browser and device details.' }
          ]
        },
        {
          title: 'Marketing & sales',
          cards: [
            { title: 'WhatsApp link generator', desc: 'Create a wa.me link with a ready message, a website button and a printable QR code.' },
            { title: 'UTM builder', desc: 'Build campaign URLs for Google Analytics and see which ad drives sales.' }
          ]
        },
        {
          title: 'Engineering & industry',
          cards: [
            { title: 'Tank volume calculator', desc: 'Total and liquid volume for vertical, horizontal, rectangular and spherical tanks.' },
            { title: 'Pressure & flow unit converter', desc: 'Convert bar, psi, m³/h, gpm, temperature, length and volume to every unit at once.' }
          ]
        }
      ],
      explain: {
        eyebrow: 'Why these tools?',
        title: 'Built for real work',
        items: [
          { title: 'Free, no sign-up', body: 'Every tool works without an account, intrusive ads or usage limits.' },
          { title: 'Private', body: 'Calculations run in your browser, and what you type is not stored on our servers.' },
          { title: 'Five languages', body: 'Persian, Turkish, English, Russian and Arabic — for your team and customers in any country.' }
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions about the tools',
        items: [
          { q: "Are Bizdavar's tools really free?", a: 'Yes. Every tool is free and needs no sign-up or installation.' },
          { q: 'Is the data I enter stored?', a: 'No. Calculations run in your browser. Only the website speed test sends the URL to Google PageSpeed for analysis.' },
          { q: 'Do they work on mobile?', a: 'Yes. All tools are designed for phones, tablets and desktops.' },
          { q: 'Can I suggest a new tool?', a: 'Of course. Tell us what you need on the contact page — we add the most requested ones.' }
        ]
      },
      cta: {
        title: 'Need a custom tool for your business?',
        desc: 'Bizdavar builds custom calculators, dashboards and web apps — from price calculators to industrial dashboards.',
        btn: 'Bizdavar services',
        btn2: 'Suggest a tool'
      },
      geoText: 'Free tools for people and businesses in Turkey, Iran, the Arab world, Russia, Europe and the US.',
      related: [
        { title: 'Bizdavar services', url: 'services', desc: 'Web design, SEO and digital marketing' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'A fast, professional website in 5 days' },
        { title: 'Custom web apps', url: 'articles/custom-web-app-development', desc: 'Dashboards and tools built for your business' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатно, без регистрации',
        title: 'Бесплатные инструменты Bizdavar',
        lead: 'Практичные инструменты для веба, маркетинга и промышленности, которые работают прямо в браузере — быстро, конфиденциально и на пяти языках.'
      },
      open: 'Открыть инструмент',
      groups: [
        {
          title: 'Интернет и сайт',
          cards: [
            { title: 'Тест скорости интернета', desc: 'Измерьте скорость загрузки, отдачи, пинг и джиттер примерно за 30 секунд.' },
            { title: 'Проверка скорости сайта', desc: 'Узнайте оценку PageSpeed и Core Web Vitals вашего сайта для мобильных и ПК.' },
            { title: 'Какой у меня IP?', desc: 'Ваш IP-адрес, провайдер, примерное местоположение и данные браузера и устройства.' }
          ]
        },
        {
          title: 'Маркетинг и продажи',
          cards: [
            { title: 'Генератор ссылки WhatsApp', desc: 'Ссылка wa.me с готовым текстом, код кнопки для сайта и QR-код для печати.' },
            { title: 'Генератор UTM-меток', desc: 'Создавайте ссылки кампаний для Google Analytics и смотрите, какая реклама продаёт.' }
          ]
        },
        {
          title: 'Инженерия и промышленность',
          cards: [
            { title: 'Калькулятор объёма резервуара', desc: 'Полный объём и объём жидкости для вертикальных, горизонтальных, прямоугольных и шаровых ёмкостей.' },
            { title: 'Конвертер давления и расхода', desc: 'Бар, psi, м³/ч, gpm, температура, длина и объём — во все единицы сразу.' }
          ]
        }
      ],
      explain: {
        eyebrow: 'Почему эти инструменты?',
        title: 'Сделано для реальной работы',
        items: [
          { title: 'Бесплатно, без регистрации', body: 'Все инструменты работают без аккаунта, навязчивой рекламы и лимитов.' },
          { title: 'Конфиденциально', body: 'Расчёты выполняются в вашем браузере, введённые данные не сохраняются на наших серверах.' },
          { title: 'Пять языков', body: 'Персидский, турецкий, английский, русский и арабский — для команды и клиентов в любой стране.' }
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы об инструментах',
        items: [
          { q: 'Инструменты Bizdavar действительно бесплатны?', a: 'Да. Все инструменты бесплатны и не требуют регистрации или установки.' },
          { q: 'Сохраняются ли введённые данные?', a: 'Нет. Расчёты идут в браузере. Только проверка скорости сайта отправляет адрес в Google PageSpeed для анализа.' },
          { q: 'Работают ли они на телефоне?', a: 'Да. Все инструменты рассчитаны на телефоны, планшеты и компьютеры.' },
          { q: 'Можно предложить новый инструмент?', a: 'Конечно. Напишите на странице контактов, что вам нужно, — самые востребованные мы добавляем.' }
        ]
      },
      cta: {
        title: 'Нужен собственный инструмент для бизнеса?',
        desc: 'Bizdavar разрабатывает калькуляторы, панели и веб-приложения под задачу — от расчёта цены до промышленных дашбордов.',
        btn: 'Услуги Bizdavar',
        btn2: 'Предложить инструмент'
      },
      geoText: 'Бесплатные инструменты для пользователей и бизнеса в России, Казахстане, Турции, ОАЭ, Иране, Европе и США.',
      related: [
        { title: 'Услуги Bizdavar', url: 'services', desc: 'Веб-дизайн, SEO и цифровой маркетинг' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'Быстрый профессиональный сайт за 5 дней' },
        { title: 'Веб-приложения на заказ', url: 'articles/custom-web-app-development', desc: 'Панели и инструменты под ваш бизнес' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'مجانية وبلا تسجيل',
        title: 'أدوات Bizdavar المجانية',
        lead: 'أدوات عملية للويب والتسويق والصناعة تعمل مباشرة في متصفحك — سريعة وآمنة وبخمس لغات.'
      },
      open: 'استخدم الأداة',
      groups: [
        {
          title: 'الإنترنت والموقع',
          cards: [
            { title: 'اختبار سرعة الإنترنت', desc: 'قِس سرعة التنزيل والرفع والبينغ والجيتر خلال 30 ثانية تقريباً.' },
            { title: 'اختبار سرعة الموقع', desc: 'احصل على تقييم PageSpeed ومؤشرات Core Web Vitals لموقعك على الجوال والكمبيوتر.' },
            { title: 'ما هو عنوان IP الخاص بي؟', desc: 'اعرف عنوان IP ومزوّد الخدمة وموقعك التقريبي وتفاصيل المتصفح والجهاز.' }
          ]
        },
        {
          title: 'التسويق والمبيعات',
          cards: [
            { title: 'إنشاء رابط واتساب', desc: 'أنشئ رابط wa.me برسالة جاهزة وكود زر للموقع ورمز QR قابل للطباعة.' },
            { title: 'منشئ روابط UTM', desc: 'أنشئ روابط حملات لـ Google Analytics واعرف أي إعلان يجلب المبيعات.' }
          ]
        },
        {
          title: 'الهندسة والصناعة',
          cards: [
            { title: 'حاسبة حجم الخزان', desc: 'الحجم الكلي وحجم السائل للخزانات العمودية والأفقية والمستطيلة والكروية.' },
            { title: 'محوّل وحدات الضغط والتدفق', desc: 'حوّل bar وpsi وm³/h وgpm والحرارة والطول والحجم إلى كل الوحدات دفعة واحدة.' }
          ]
        }
      ],
      explain: {
        eyebrow: 'لماذا هذه الأدوات؟',
        title: 'مصممة للعمل الحقيقي',
        items: [
          { title: 'مجانية وبلا تسجيل', body: 'كل الأدوات تعمل دون حساب أو إعلانات مزعجة أو حدود للاستخدام.' },
          { title: 'الخصوصية', body: 'تتم الحسابات في متصفحك، ولا تُحفظ البيانات التي تدخلها على خوادمنا.' },
          { title: 'خمس لغات', body: 'الفارسية والتركية والإنجليزية والروسية والعربية — لفريقك وعملائك في أي بلد.' }
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول الأدوات',
        items: [
          { q: 'هل أدوات Bizdavar مجانية فعلاً؟', a: 'نعم. كل الأدوات مجانية ولا تحتاج إلى تسجيل أو تثبيت.' },
          { q: 'هل تُحفظ البيانات التي أدخلها؟', a: 'لا. تتم الحسابات في متصفحك. فقط اختبار سرعة الموقع يرسل العنوان إلى Google PageSpeed للتحليل.' },
          { q: 'هل تعمل على الجوال؟', a: 'نعم. كل الأدوات مصممة للهواتف والأجهزة اللوحية والكمبيوتر.' },
          { q: 'هل يمكنني اقتراح أداة جديدة؟', a: 'بالتأكيد. اكتب لنا ما تحتاجه من صفحة التواصل، ونضيف الأدوات الأكثر طلباً.' }
        ]
      },
      cta: {
        title: 'تحتاج أداة مخصصة لعملك؟',
        desc: 'تطوّر Bizdavar حاسبات ولوحات وتطبيقات ويب مخصصة — من حاسبة الأسعار إلى لوحات المراقبة الصناعية.',
        btn: 'خدمات Bizdavar',
        btn2: 'اقترح أداة'
      },
      geoText: 'أدوات مجانية للأفراد والشركات في الإمارات والسعودية والعراق وتركيا وإيران وأوروبا وأمريكا.',
      related: [
        { title: 'خدمات Bizdavar', url: 'services', desc: 'تصميم ويب وSEO وتسويق رقمي' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'موقع سريع واحترافي خلال 5 أيام' },
        { title: 'تطبيقات ويب مخصصة', url: 'articles/custom-web-app-development', desc: 'لوحات وأدوات مصممة لعملك' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.tools = Object.assign(L.pages.tools || {}, seo[lang]);
    L.toolsPage = pages[lang];
  });
})();
