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
        lead: 'اجرای تخصصی واحدهای مسکونی و تجاری در تبریز و استانبول — بازدید فنی، پیشنهاد طرح و نصب با گارانتی.',
        chips: ['CCTV', 'سیم‌کشی', 'نورمخفی', 'تبریز', 'استانبول'],
        waCta: 'واتساپ خدمات فنی',
        callCta: 'تماس تلفنی',
        imgAlt: 'خدمات فنی بیزدوار — نصب CCTV، سیم‌کشی ساختمان و نورمخفی در تبریز و استانبول'
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
          { id: 'cities', icon: 'pin', title: 'تبریز و استانبول', desc: 'پوشش اجرایی دو شهر' },
          { id: 'support', icon: 'shield', title: 'گارانتی اجرا', desc: 'پشتیبانی پس از نصب' }
        ]
      },
      cities: {
        eyebrow: 'پوشش جغرافیایی',
        title: 'اجرا در تبریز و استانبول',
        desc: 'تیم فنی بیزدوار برای پروژه‌های محلی در دو شهر آماده هماهنگی است.',
        items: [
          { title: 'تبریز', body: 'نصب دوربین، سیم‌کشی و نورمخفی واحدهای مسکونی و تجاری در تبریز و اطراف.' },
          { title: 'استانبول', body: 'هماهنگی بازدید و اجرای خدمات فنی برای واحدهای مسکونی و تجاری در استانبول.' }
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
            q: 'نصب دوربین مدار بسته در تبریز و استانبول انجام می‌دهید؟',
            a: 'بله. نصب و راه‌اندازی دوربین مدار بسته برای واحدهای مسکونی و تجاری در تبریز و استانبول توسط تیم فنی بیزدوار انجام می‌شود.'
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
      geoText: 'خدمات فنی بیزدوار — نصب CCTV، سیم‌کشی و نورمخفی در تبریز و استانبول.',
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
        lead: 'Tebriz ve İstanbul’da konut ve ticari birimler için keşif, plan ve kurulum — garanti ile.',
        chips: ['CCTV', 'Tesisat', 'Gizli aydınlatma', 'Tebriz', 'İstanbul'],
        waCta: 'Teknik WhatsApp',
        callCta: 'Telefon',
        imgAlt: 'Bizdavar teknik hizmetler — Tebriz ve İstanbul’da CCTV, tesisat ve gizli aydınlatma'
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
          { id: 'cities', icon: 'pin', title: 'Tebriz ve İstanbul', desc: 'İki şehirde saha hizmeti' },
          { id: 'support', icon: 'shield', title: 'Kurulum garantisi', desc: 'Kurulum sonrası destek' }
        ]
      },
      cities: {
        eyebrow: 'Kapsam',
        title: 'Tebriz ve İstanbul’da uygulama',
        desc: 'Bizdavar teknik ekibi iki şehirde koordinasyon için hazır.',
        items: [
          { title: 'Tebriz', body: 'Konut ve ticari birimlerde CCTV, tesisat ve gizli aydınlatma.' },
          { title: 'İstanbul', body: 'Keşif ve kurulum koordinasyonu — konut ve ticari birimler.' }
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
            q: 'Tebriz ve İstanbul’da kamera kurulumu var mı?',
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
      geoText: 'Bizdavar teknik hizmetler — Tebriz ve İstanbul’da CCTV, tesisat ve gizli aydınlatma.',
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
        lead: 'Residential and commercial installs in Tabriz and Istanbul — survey, plan and install with warranty.',
        chips: ['CCTV', 'Wiring', 'Cove lighting', 'Tabriz', 'Istanbul'],
        waCta: 'Technical WhatsApp',
        callCta: 'Call',
        imgAlt: 'Bizdavar technical services — CCTV, wiring and cove lighting in Tabriz and Istanbul'
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
          { id: 'cities', icon: 'pin', title: 'Tabriz & Istanbul', desc: 'On-site coverage in both cities' },
          { id: 'support', icon: 'shield', title: 'Install warranty', desc: 'After-install support' }
        ]
      },
      cities: {
        eyebrow: 'Coverage',
        title: 'Tabriz and Istanbul',
        desc: 'Bizdavar technical team coordinates local installs in both cities.',
        items: [
          { title: 'Tabriz', body: 'CCTV, wiring and cove lighting for homes and commercial units.' },
          { title: 'Istanbul', body: 'Survey and install coordination for residential and commercial spaces.' }
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
            q: 'Do you install CCTV in Tabriz and Istanbul?',
            a: 'Yes. Residential and commercial CCTV install is handled by the Bizdavar technical team in Tabriz and Istanbul.'
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
      geoText: 'Bizdavar technical services — CCTV, wiring and cove lighting in Tabriz and Istanbul.',
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

  // Lightweight RU/AR mirrors from EN structure with translated titles where available
  if (window.BIZDAVAR_LOCALES.ru) {
    window.BIZDAVAR_LOCALES.ru.fieldTechPage = Object.assign({}, pages.en, {
      hero: Object.assign({}, pages.en.hero, {
        eyebrow: 'Технические услуги Bizdavar',
        title: 'CCTV, проводка и скрытое освещение',
        lead: 'Монтаж в жилых и коммерческих объектах в Тебризе и Стамбуле — осмотр, план и установка с гарантией.',
        chips: ['CCTV', 'Проводка', 'Скрытое освещение', 'Тебриз', 'Стамбул'],
        waCta: 'WhatsApp техслужбы',
        callCta: 'Позвонить',
        imgAlt: 'Технические услуги Bizdavar — CCTV, проводка и скрытое освещение в Тебризе и Стамбуле'
      }),
      geoText: 'Технические услуги Bizdavar — CCTV, проводка и скрытое освещение в Тебризе и Стамбуле.'
    });
  }
  if (window.BIZDAVAR_LOCALES.ar) {
    window.BIZDAVAR_LOCALES.ar.fieldTechPage = Object.assign({}, pages.en, {
      hero: Object.assign({}, pages.en.hero, {
        eyebrow: 'الخدمات الفنية من Bizdavar',
        title: 'كاميرات مراقبة وتمديدات وإضاءة مخفية',
        lead: 'تركيب للمنازل والمساحات التجارية في تبريز وإسطنبول — معاينة وخطة وتركيب مع ضمان.',
        chips: ['CCTV', 'تمديدات', 'إضاءة مخفية', 'تبريز', 'إسطنبول'],
        waCta: 'واتساب الخدمات الفنية',
        callCta: 'اتصال',
        imgAlt: 'الخدمات الفنية من Bizdavar — كاميرات وتمديدات وإضاءة مخفية في تبريز وإسطنبول'
      }),
      geoText: 'الخدمات الفنية من Bizdavar — كاميرات وتمديدات وإضاءة مخفية في تبريز وإسطنبول.'
    });
  }
})();
