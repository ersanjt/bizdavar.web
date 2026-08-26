/**
 * Field-tech landing — copy (fa / tr / en). RU/AR fall back via i18n merge.
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const pages = {
    fa: {
      hero: {
        eyebrow: 'خدمات فنی بیزدوار',
        title: 'نصب دوربین مدار بسته، سیم‌کشی و نورمخفی',
        lead: 'اجرای تخصصی واحدهای مسکونی و تجاری در تبریز — بازدید فنی، پیشنهاد طرح و نصب با گارانتی.',
        chips: ['CCTV', 'سیم‌کشی', 'نورمخفی', 'تبریز'],
        waCta: 'واتساپ خدمات فنی',
        callCta: 'تماس تلفنی',
        imgAlt: 'خدمات فنی بیزدوار — نصب CCTV، سیم‌کشی ساختمان و نورمخفی در تبریز'
      },
      services: {
        eyebrow: 'محورهای اجرا',
        title: 'چه خدماتی ارائه می‌دهیم؟',
        desc: 'یک لیست شفاف — بدون تکرار و بدون کارت تو در تو.',
        items: [
          { id: 'cctv', icon: 'monitor', title: 'دوربین مدار بسته', desc: 'نصب و راه‌اندازی CCTV منزل و محل کار' },
          { id: 'wiring', icon: 'bolt', title: 'سیم‌کشی ساختمان', desc: 'واحدهای مسکونی و تجاری' },
          { id: 'lighting', icon: 'flame', title: 'نورمخفی', desc: 'طراحی و اجرای داخلی و فضای تجاری' },
          { id: 'survey', icon: 'document', title: 'بازدید فنی', desc: 'پیشنهاد طرح و زمان‌بندی اجرا' },
          { id: 'cities', icon: 'pin', title: 'تبریز', desc: 'پوشش اجرایی دو شهر' },
          { id: 'support', icon: 'shield', title: 'گارانتی اجرا', desc: 'پشتیبانی پس از نصب' }
        ]
      },
      cities: {
        eyebrow: 'پوشش جغرافیایی',
        title: 'اجرا در تبریز',
        desc: 'تیم فنی بیزدوار برای پروژه‌های محلی در دو شهر آماده هماهنگی است.',
        items: [
          { title: 'تبریز', body: 'نصب دوربین، سیم‌کشی و نورمخفی واحدهای مسکونی و تجاری در تبریز و اطراف.' }
        ]
      },
      process: {
        eyebrow: 'فرآیند',
        title: 'از پیام تا نصب',
        desc: 'مسیر کوتاه و قابل پیگیری.',
        steps: [
          { title: 'پیام واتساپ', desc: 'نیاز و آدرس را بفرستید' },
          { title: 'بازدید فنی', desc: 'بررسی محل و پیشنهاد طرح' },
          { title: 'زمان‌بندی', desc: 'توافق تاریخ و برآورد' },
          { title: 'اجرا و گارانتی', desc: 'نصب و پشتیبانی پس از کار' }
        ]
      },
      contact: {
        title: 'هماهنگی مستقیم خدمات فنی',
        desc: 'شماره تخصصی تیم فنی — پاسخ سریع در واتساپ.',
        waCta: 'واتساپ خدمات فنی',
        callCta: 'تماس تلفنی'
      },
      faq: {
        eyebrow: 'سوالات پرتکرار',
        title: 'قبل از سفارش بدانید',
        items: [
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
            a: 'مستقیم در واتساپ با شماره +98 936 411 5151 پیام بدهید یا از دکمه واتساپ خدمات فنی در همین صفحه استفاده کنید.'
          }
        ]
      },
      geoText: 'خدمات فنی بیزدوار — نصب CCTV، سیم‌کشی و نورمخفی در تبریز.',
      related: [
        { title: 'همه خدمات', url: 'services', desc: 'دیجیتال و فنی' },
        { title: 'تماس', url: 'contact', desc: 'فرم و واتساپ' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت' }
      ]
    },
    tr: {
      hero: {
        eyebrow: 'Bizdavar teknik hizmetler',
        title: 'CCTV, bina tesisatı ve gizli aydınlatma',
        lead: 'Tebriz’de konut ve ticari birimler için keşif, plan ve kurulum — garanti ile.',
        chips: ['CCTV', 'Tesisat', 'Gizli aydınlatma', 'Tebriz'],
        waCta: 'Teknik WhatsApp',
        callCta: 'Telefon',
        imgAlt: 'Bizdavar teknik hizmetler — Tebriz’de CCTV, tesisat ve gizli aydınlatma'
      },
      services: {
        eyebrow: 'Hizmetler',
        title: 'Ne sunuyoruz?',
        desc: 'Tek net liste — tekrar yok.',
        items: [
          { id: 'cctv', icon: 'monitor', title: 'Güvenlik kamerası', desc: 'Konut ve işyeri CCTV kurulumu' },
          { id: 'wiring', icon: 'bolt', title: 'Bina tesisatı', desc: 'Konut ve ticari birimler' },
          { id: 'lighting', icon: 'flame', title: 'Gizli aydınlatma', desc: 'İç mekân ve ticari alan' },
          { id: 'survey', icon: 'document', title: 'Teknik keşif', desc: 'Plan ve kurulum takvimi' },
          { id: 'cities', icon: 'pin', title: 'Tebriz', desc: 'İki şehirde saha hizmeti' },
          { id: 'support', icon: 'shield', title: 'Kurulum garantisi', desc: 'Kurulum sonrası destek' }
        ]
      },
      cities: {
        eyebrow: 'Kapsam',
        title: 'Tebriz’de uygulama',
        desc: 'Bizdavar teknik ekibi Tebriz’de koordinasyon için hazır.',
        items: [
          { title: 'Tebriz', body: 'Konut ve ticari birimlerde CCTV, tesisat ve gizli aydınlatma.' }
        ]
      },
      process: {
        eyebrow: 'Süreç',
        title: 'Mesajdan kuruluma',
        desc: 'Kısa ve takip edilebilir yol.',
        steps: [
          { title: 'WhatsApp', desc: 'İhtiyaç ve adresi yazın' },
          { title: 'Keşif', desc: 'Yerinde inceleme ve plan' },
          { title: 'Takvim', desc: 'Tarih ve teklif' },
          { title: 'Kurulum', desc: 'Uygulama ve garanti' }
        ]
      },
      contact: {
        title: 'Direkt teknik koordinasyon',
        desc: 'Teknik ekibin özel hattı — WhatsApp’tan hızlı dönüş.',
        waCta: 'Teknik WhatsApp',
        callCta: 'Telefon'
      },
      faq: {
        eyebrow: 'SSS',
        title: 'Sipariş öncesi',
        items: [
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
      geoText: 'Bizdavar teknik hizmetler — Tebriz’de CCTV, tesisat ve gizli aydınlatma.',
      related: [
        { title: 'Tüm hizmetler', url: 'services', desc: 'Dijital ve teknik' },
        { title: 'İletişim', url: 'contact', desc: 'Form ve WhatsApp' },
        { title: 'Portfolyo', url: 'portfolio', desc: 'Bizdavar projeleri' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'Web tasarım' }
      ]
    },
    en: {
      hero: {
        eyebrow: 'Bizdavar technical services',
        title: 'CCTV, building wiring and cove lighting',
        lead: 'Residential and commercial installs in Tabriz — survey, plan and install with warranty.',
        chips: ['CCTV', 'Wiring', 'Cove lighting', 'Tabriz'],
        waCta: 'Technical WhatsApp',
        callCta: 'Call',
        imgAlt: 'Bizdavar technical services — CCTV, wiring and cove lighting in Tabriz'
      },
      services: {
        eyebrow: 'What we deliver',
        title: 'On-site technical services',
        desc: 'One clear list — no nested duplicate cards.',
        items: [
          { id: 'cctv', icon: 'monitor', title: 'CCTV', desc: 'Home and workplace camera install' },
          { id: 'wiring', icon: 'bolt', title: 'Building wiring', desc: 'Residential and commercial units' },
          { id: 'lighting', icon: 'flame', title: 'Cove lighting', desc: 'Indoor and commercial spaces' },
          { id: 'survey', icon: 'document', title: 'Site survey', desc: 'Plan and install schedule' },
          { id: 'cities', icon: 'pin', title: 'Tabriz', desc: 'On-site coverage in Tabriz' },
          { id: 'support', icon: 'shield', title: 'Install warranty', desc: 'After-install support' }
        ]
      },
      cities: {
        eyebrow: 'Coverage',
        title: 'Tabriz',
        desc: 'Bizdavar technical team coordinates local installs in Tabriz.',
        items: [
          { title: 'Tabriz', body: 'CCTV, wiring and cove lighting for homes and commercial units.' }
        ]
      },
      process: {
        eyebrow: 'Process',
        title: 'From message to install',
        desc: 'Short and trackable.',
        steps: [
          { title: 'WhatsApp', desc: 'Send need and address' },
          { title: 'Survey', desc: 'On-site review and plan' },
          { title: 'Schedule', desc: 'Date and estimate' },
          { title: 'Install', desc: 'Delivery and warranty' }
        ]
      },
      contact: {
        title: 'Direct technical coordination',
        desc: 'Dedicated technical line — fast reply on WhatsApp.',
        waCta: 'Technical WhatsApp',
        callCta: 'Call'
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Before you order',
        items: [
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
      },
      geoText: 'Bizdavar technical services — CCTV, wiring and cove lighting in Tabriz.',
      related: [
        { title: 'All services', url: 'services', desc: 'Digital and technical' },
        { title: 'Contact', url: 'contact', desc: 'Form and WhatsApp' },
        { title: 'Portfolio', url: 'portfolio', desc: 'Bizdavar projects' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'Web design' }
      ]
    }
  };

  ['fa', 'tr', 'en'].forEach(lang => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.fieldTechPage = pages[lang];
  });

  if (window.BIZDAVAR_LOCALES.ru) {
    window.BIZDAVAR_LOCALES.ru.fieldTechPage = {
      hero: {
        eyebrow: 'Технические услуги Bizdavar',
        title: 'CCTV, проводка и скрытое освещение',
        lead: 'Монтаж в жилых и коммерческих объектах в Тебризе — осмотр, план и установка с гарантией.',
        chips: ['CCTV', 'Проводка', 'Скрытое освещение', 'Тебриз'],
        waCta: 'WhatsApp техслужбы',
        callCta: 'Позвонить',
        imgAlt: 'Технические услуги Bizdavar — CCTV, проводка и скрытое освещение в Тебризе'
      },
      services: {
        eyebrow: 'Что делаем',
        title: 'Выездные технические услуги',
        desc: 'Один понятный список — без вложенных карточек.',
        items: [
          { id: 'cctv', icon: 'monitor', title: 'CCTV', desc: 'Установка камер дома и на объекте' },
          { id: 'wiring', icon: 'bolt', title: 'Проводка', desc: 'Жилые и коммерческие помещения' },
          { id: 'lighting', icon: 'flame', title: 'Скрытое освещение', desc: 'Интерьер и коммерческие зоны' },
          { id: 'survey', icon: 'document', title: 'Технический осмотр', desc: 'План и график монтажа' },
          { id: 'cities', icon: 'pin', title: 'Тебриз', desc: 'Выезд в Тебризе' },
          { id: 'support', icon: 'shield', title: 'Гарантия монтажа', desc: 'Поддержка после установки' }
        ]
      },
      cities: {
        eyebrow: 'География',
        title: 'Тебриз',
        desc: 'Техническая команда Bizdavar координирует монтаж в Тебризе.',
        items: [
          { title: 'Тебриз', body: 'CCTV, проводка и скрытое освещение для квартир и коммерции.' }
        ]
      },
      process: {
        eyebrow: 'Процесс',
        title: 'От сообщения до монтажа',
        desc: 'Короткий и прозрачный путь.',
        steps: [
          { title: 'WhatsApp', desc: 'Опишите задачу и адрес' },
          { title: 'Осмотр', desc: 'Выезд и план работ' },
          { title: 'Сроки', desc: 'Дата и смета' },
          { title: 'Монтаж', desc: 'Установка и гарантия' }
        ]
      },
      contact: {
        title: 'Прямая координация техслужбы',
        desc: 'Отдельная линия — быстрый ответ в WhatsApp.',
        waCta: 'WhatsApp техслужбы',
        callCta: 'Позвонить'
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Перед заказом',
        items: [
          {
            q: 'Ставите ли вы камеры в Тебризе?',
            a: 'Да. Жилые и коммерческие CCTV-проекты выполняет техническая команда Bizdavar в Тебризе.'
          },
          {
            q: 'Делаете ли скрытое освещение внутри помещений?',
            a: 'Да. Скрытое освещение для жилья и коммерции планируем вместе со стандартной проводкой.'
          },
          {
            q: 'Как согласовать технические работы?',
            a: 'Напишите в WhatsApp +98 936 411 5151 или нажмите кнопку WhatsApp техслужбы на этой странице.'
          }
        ]
      },
      geoText: 'Технические услуги Bizdavar — CCTV, проводка и скрытое освещение в Тебризе.',
      related: [
        { title: 'Все услуги', url: 'services', desc: 'Цифровые и технические' },
        { title: 'Контакты', url: 'contact', desc: 'Форма и WhatsApp' },
        { title: 'Портфолио', url: 'portfolio', desc: 'Проекты Bizdavar' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'Веб-дизайн' }
      ]
    };
  }
  if (window.BIZDAVAR_LOCALES.ar) {
    window.BIZDAVAR_LOCALES.ar.fieldTechPage = {
      hero: {
        eyebrow: 'الخدمات الفنية من Bizdavar',
        title: 'كاميرات مراقبة وتمديدات وإضاءة مخفية',
        lead: 'تركيب للمنازل والمساحات التجارية في تبريز — معاينة وخطة وتركيب مع ضمان.',
        chips: ['CCTV', 'تمديدات', 'إضاءة مخفية', 'تبريز'],
        waCta: 'واتساب الخدمات الفنية',
        callCta: 'اتصال',
        imgAlt: 'الخدمات الفنية من Bizdavar — كاميرات وتمديدات وإضاءة مخفية في تبريز'
      },
      services: {
        eyebrow: 'ما نقدّمه',
        title: 'خدمات فنية ميدانية',
        desc: 'قائمة واحدة واضحة — بدون بطاقات متداخلة.',
        items: [
          { id: 'cctv', icon: 'monitor', title: 'كاميرات مراقبة', desc: 'تركيب كاميرات للمنازل وأماكن العمل' },
          { id: 'wiring', icon: 'bolt', title: 'تمديدات المبنى', desc: 'وحدات سكنية وتجارية' },
          { id: 'lighting', icon: 'flame', title: 'إضاءة مخفية', desc: 'داخليات ومساحات تجارية' },
          { id: 'survey', icon: 'document', title: 'معاينة فنية', desc: 'خطة وجدول التركيب' },
          { id: 'cities', icon: 'pin', title: 'تبريز', desc: 'تغطية ميدانية في تبريز' },
          { id: 'support', icon: 'shield', title: 'ضمان التركيب', desc: 'دعم بعد التركيب' }
        ]
      },
      cities: {
        eyebrow: 'التغطية',
        title: 'تبريز',
        desc: 'فريق Bizdavar الفني ينسّق التركيب المحلي في تبريز.',
        items: [
          { title: 'تبريز', body: 'كاميرات وتمديدات وإضاءة مخفية للمنازل والوحدات التجارية.' }
        ]
      },
      process: {
        eyebrow: 'العملية',
        title: 'من الرسالة إلى التركيب',
        desc: 'مسار قصير وقابل للمتابعة.',
        steps: [
          { title: 'واتساب', desc: 'أرسل الاحتياج والعنوان' },
          { title: 'معاينة', desc: 'مراجعة ميدانية وخطة' },
          { title: 'جدولة', desc: 'التاريخ والتقدير' },
          { title: 'تركيب', desc: 'التنفيذ والضمان' }
        ]
      },
      contact: {
        title: 'تنسيق فني مباشر',
        desc: 'خط فني مخصص — رد سريع على واتساب.',
        waCta: 'واتساب الخدمات الفنية',
        callCta: 'اتصال'
      },
      faq: {
        eyebrow: 'أسئلة شائعة',
        title: 'قبل الطلب',
        items: [
          {
            q: 'هل تركّبون كاميرات في تبريز؟',
            a: 'نعم. تركيب كاميرات المراقبة للمنازل والتجارة يتولاه فريق Bizdavar الفني في تبريز.'
          },
          {
            q: 'هل تنفّذون إضاءة مخفية داخل الوحدات؟',
            a: 'نعم. الإضاءة المخفية للمنازل والمساحات التجارية تُخطط مع التمديدات القياسية.'
          },
          {
            q: 'كيف أنسّق الخدمات الفنية؟',
            a: 'راسل +98 936 411 5151 على واتساب أو استخدم زر واتساب الخدمات الفنية في هذه الصفحة.'
          }
        ]
      },
      geoText: 'الخدمات الفنية من Bizdavar — كاميرات وتمديدات وإضاءة مخفية في تبريز.',
      related: [
        { title: 'كل الخدمات', url: 'services', desc: 'رقمية وفنية' },
        { title: 'اتصل بنا', url: 'contact', desc: 'نموذج وواتساب' },
        { title: 'أعمالنا', url: 'portfolio', desc: 'مشاريع Bizdavar' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'تصميم مواقع' }
      ]
    };
  }
})();
