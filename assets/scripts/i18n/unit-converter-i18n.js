/**
 * Engineering unit converter (pressure, flow, temperature, length, volume) — SEO meta + copy for fa / tr / en / ru / ar.
 * Unit symbols live in free-tools.js; only the human-readable unit names are translated here.
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'تبدیل واحد مهندسی',
      seoTitle: 'تبدیل واحد فشار، دبی و دما آنلاین | bar به psi، m³/h — بیزدوار',
      seoDescription: 'تبدیل واحد فشار (bar، psi، kPa، atm)، دبی (m³/h، لیتر بر دقیقه، gpm)، دما، طول و حجم — همه واحدها همزمان، رایگان و دقیق برای مهندسان و تکنسین‌ها.',
      seoKeywords: 'تبدیل واحد فشار, تبدیل بار به psi, تبدیل واحد دبی, تبدیل m3/h به لیتر بر ثانیه, تبدیل واحد دما, تبدیل اینچ به میلی متر, تبدیل گالن به لیتر, تبدیل واحد آنلاین'
    },
    tr: {
      crumb: 'Mühendislik birim çevirici',
      seoTitle: "Basınç, Debi ve Sıcaklık Birim Çevirici | bar'dan psi'ye, m³/h — Bizdavar",
      seoDescription: 'Basınç (bar, psi, kPa, atm), debi (m³/h, L/dk, gpm), sıcaklık, uzunluk ve hacim birimlerini çevirin — tüm birimler aynı anda, ücretsiz ve hassas.',
      seoKeywords: "basınç birim çevirici, bar psi çevirme, debi birim çevirme, m3/h l/s çevirme, sıcaklık çevirme, inç mm çevirme, galon litre çevirme, birim çevirici"
    },
    en: {
      crumb: 'Engineering unit converter',
      seoTitle: 'Pressure, Flow & Temperature Unit Converter | bar to psi, m³/h — Bizdavar',
      seoDescription: 'Convert pressure (bar, psi, kPa, atm), flow (m³/h, L/min, gpm), temperature, length and volume — every unit at once, free and precise for engineers and technicians.',
      seoKeywords: 'pressure unit converter, bar to psi, flow rate converter, m3/h to l/s, gpm to m3/h, temperature converter, inch to mm, gallons to liters, engineering unit converter'
    },
    ru: {
      crumb: 'Конвертер инженерных единиц',
      seoTitle: 'Конвертер единиц давления, расхода и температуры | бар в psi, м³/ч — Bizdavar',
      seoDescription: 'Переводите давление (бар, psi, кПа, атм, мм рт. ст.), расход (м³/ч, л/мин, gpm), температуру, длину и объём — все единицы сразу, бесплатно и точно.',
      seoKeywords: 'перевод единиц давления, бар в psi, конвертер расхода, м3/ч в л/с, перевод кгс/см2 в бар, конвертер температуры, дюймы в мм, галлоны в литры, конвертер единиц'
    },
    ar: {
      crumb: 'محوّل الوحدات الهندسية',
      seoTitle: 'محوّل وحدات الضغط والتدفق والحرارة | bar إلى psi وm³/h — Bizdavar',
      seoDescription: 'حوّل وحدات الضغط (bar وpsi وkPa وatm) والتدفق (m³/h ولتر/دقيقة وgpm) والحرارة والطول والحجم — كل الوحدات دفعة واحدة، مجاناً وبدقة للمهندسين والفنيين.',
      seoKeywords: 'تحويل وحدات الضغط, تحويل بار الى psi, تحويل وحدات التدفق, تحويل m3/h الى لتر, تحويل درجة الحرارة, تحويل انش الى مم, تحويل جالون الى لتر, محول وحدات'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان صنعتی',
        title: 'تبدیل واحد فشار، دبی و دما',
        lead: 'یک عدد و واحد وارد کنید تا معادل آن را در همه واحدهای فشار، دبی، دما، طول یا حجم همزمان ببینید.'
      },
      ui: {
        category: 'نوع کمیت',
        catPressure: 'فشار',
        catFlow: 'دبی',
        catTemperature: 'دما',
        catLength: 'طول',
        catVolume: 'حجم',
        value: 'مقدار',
        from: 'از واحد',
        resultTitle: 'معادل در همه واحدها',
        clickCopy: 'برای کپی، روی هر نتیجه بزنید.',
        copied: 'کپی شد ✓',
        invalid: 'یک عدد معتبر وارد کنید.',
        note: 'ضرایب تبدیل بر اساس مقادیر استاندارد SI است. فشارها نسبی یا مطلق بودن را تغییر نمی‌دهند.'
      },
      units: {
        pa: 'پاسکال', kpa: 'کیلوپاسکال', mpa: 'مگاپاسکال', bar: 'بار', mbar: 'میلی‌بار', psi: 'پوند بر اینچ مربع', atm: 'اتمسفر', kgcm2: 'کیلوگرم بر سانتی‌متر مربع', mmhg: 'میلی‌متر جیوه', mh2o: 'متر ستون آب', inh2o: 'اینچ ستون آب',
        m3h: 'متر مکعب بر ساعت', m3s: 'متر مکعب بر ثانیه', ls: 'لیتر بر ثانیه', lmin: 'لیتر بر دقیقه', lh: 'لیتر بر ساعت', usgpm: 'گالن آمریکا بر دقیقه', ukgpm: 'گالن انگلیسی بر دقیقه', cfm: 'فوت مکعب بر دقیقه', bpd: 'بشکه نفت در روز',
        c: 'سلسیوس', f: 'فارنهایت', k: 'کلوین', r: 'رانکین',
        mm: 'میلی‌متر', cm: 'سانتی‌متر', m: 'متر', km: 'کیلومتر', in: 'اینچ', ft: 'فوت', yd: 'یارد', mi: 'مایل',
        ml: 'میلی‌لیتر', l: 'لیتر', m3: 'متر مکعب', usgal: 'گالن آمریکا', ukgal: 'گالن انگلیسی', bbl: 'بشکه نفت', ft3: 'فوت مکعب', in3: 'اینچ مکعب'
      },
      explain: {
        eyebrow: 'مرجع سریع',
        title: 'تبدیل‌های پرکاربرد در صنعت',
        items: [
          { title: 'فشار', body: '۱ بار = ۱۰۰ کیلوپاسکال ≈ ۱۴٫۵ psi ≈ ۱٫۰۲ کیلوگرم بر سانتی‌متر مربع. ۱ اتمسفر = ۱٫۰۱۳۲۵ بار. ۱۰ متر ستون آب تقریباً ۱ بار است.' },
          { title: 'دبی', body: '۱ متر مکعب بر ساعت ≈ ۰٫۲۷۸ لیتر بر ثانیه ≈ ۱۶٫۷ لیتر بر دقیقه ≈ ۴٫۴ گالن آمریکا بر دقیقه.' },
          { title: 'دما', body: '°F = °C × 1.8 + 32 و K = °C + 273.15. تبدیل دما خطی ولی با جابه‌جایی صفر است؛ پس برای اختلاف دما فقط ضریب ۱٫۸ را بزنید.' }
        ]
      },
      tips: {
        title: 'نکته‌های تبدیل واحد',
        items: [
          'در دیتاشیت سنسورها دقت کنید فشار نسبی (gauge، barg) است یا مطلق (absolute، bara).',
          'گالن آمریکا (۳٫۷۸۵ لیتر) با گالن انگلیسی (۴٫۵۴۶ لیتر) فرق دارد؛ منبع دیتاشیت را ببینید.',
          'برای پمپ و لوله، دبی را با یک واحد زمانی ثابت (ساعت یا ثانیه) در کل محاسبه نگه دارید.',
          'نتیجه را بیش از دقت سنسور گرد نکنید؛ معمولاً ۳ تا ۴ رقم معنادار کافی است.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره تبدیل واحد',
        items: [
          { q: 'هر بار چند psi است؟', a: 'هر بار برابر ۱۴٫۵۰۴ psi است. برعکس، هر psi حدود ۰٫۰۶۸۹۵ بار است.' },
          { q: 'فرق bar با kg/cm² چیست؟', a: 'بسیار نزدیک‌اند: ۱ کیلوگرم بر سانتی‌متر مربع برابر ۰٫۹۸۰۷ بار است. در بسیاری از گیج‌های قدیمی هر دو تقریباً یکی در نظر گرفته می‌شوند.' },
          { q: 'متر مکعب بر ساعت را چطور به لیتر بر ثانیه تبدیل کنم؟', a: 'عدد را بر ۳٫۶ تقسیم کنید. مثلاً ۳۶ متر مکعب بر ساعت برابر ۱۰ لیتر بر ثانیه است.' },
          { q: 'چند متر ستون آب یک بار است؟', a: 'حدود ۱۰٫۲ متر ستون آب برابر ۱ بار است؛ به همین دلیل ارتفاع پمپاژ را به متر هم بیان می‌کنند.' },
          { q: 'سلسیوس را چطور به فارنهایت تبدیل کنم؟', a: 'دما را در ۱٫۸ ضرب و با ۳۲ جمع کنید. مثلاً ۲۵ درجه سلسیوس برابر ۷۷ درجه فارنهایت است.' }
        ]
      },
      cta: {
        title: 'سنسور فشار یا دبی مناسب لازم دارید؟',
        desc: 'بیزدوار سنسورهای فشار، سطح و ابزار دقیق VEGA و برندهای صنعتی دیگر را تأمین می‌کند و در انتخاب رنج و واحد مناسب مشاوره می‌دهد.',
        btn: 'سنسورهای VEGA',
        btn2: 'درخواست مشاوره'
      },
      geoText: 'تبدیل واحد مهندسی برای صنایع ایران، ترکیه، کشورهای عربی، روسیه، اروپا و آمریکا — واحدهای متریک و انگلیسی.',
      related: [
        { title: 'محاسبه حجم مخزن', url: 'tank-volume-calculator', desc: 'استوانه‌ای، افقی، مکعبی و کروی' },
        { title: 'سنسورهای VEGA', url: 'vega', desc: 'سنسور سطح راداری و فشار' },
        { title: 'سنسورهای صنعتی', url: 'articles/industrial-sensors', desc: 'راهنمای انتخاب سنسور' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz endüstriyel araç',
        title: 'Basınç, Debi ve Sıcaklık Birim Çevirici',
        lead: 'Bir değer ve birim girin; karşılığını tüm basınç, debi, sıcaklık, uzunluk veya hacim birimlerinde aynı anda görün.'
      },
      ui: {
        category: 'Büyüklük',
        catPressure: 'Basınç',
        catFlow: 'Debi',
        catTemperature: 'Sıcaklık',
        catLength: 'Uzunluk',
        catVolume: 'Hacim',
        value: 'Değer',
        from: 'Birim',
        resultTitle: 'Tüm birimlerde karşılığı',
        clickCopy: 'Kopyalamak için bir sonuca dokunun.',
        copied: 'Kopyalandı ✓',
        invalid: 'Geçerli bir sayı girin.',
        note: 'Çevrim katsayıları standart SI değerlerine dayanır. Gösterge ve mutlak basınç arasında çevirme yapılmaz.'
      },
      units: {
        pa: 'Pascal', kpa: 'Kilopascal', mpa: 'Megapascal', bar: 'Bar', mbar: 'Milibar', psi: 'Pound/inç²', atm: 'Atmosfer', kgcm2: 'Kilogram/cm²', mmhg: 'Milimetre cıva', mh2o: 'Metre su sütunu', inh2o: 'İnç su sütunu',
        m3h: 'Metreküp/saat', m3s: 'Metreküp/saniye', ls: 'Litre/saniye', lmin: 'Litre/dakika', lh: 'Litre/saat', usgpm: 'ABD galonu/dakika', ukgpm: 'İngiliz galonu/dakika', cfm: 'Fitküp/dakika', bpd: 'Varil/gün',
        c: 'Santigrat', f: 'Fahrenheit', k: 'Kelvin', r: 'Rankine',
        mm: 'Milimetre', cm: 'Santimetre', m: 'Metre', km: 'Kilometre', in: 'İnç', ft: 'Fit', yd: 'Yarda', mi: 'Mil',
        ml: 'Mililitre', l: 'Litre', m3: 'Metreküp', usgal: 'ABD galonu', ukgal: 'İngiliz galonu', bbl: 'Varil (petrol)', ft3: 'Fitküp', in3: 'İnçküp'
      },
      explain: {
        eyebrow: 'Hızlı başvuru',
        title: 'Endüstride sık kullanılan çevrimler',
        items: [
          { title: 'Basınç', body: '1 bar = 100 kPa ≈ 14,5 psi ≈ 1,02 kg/cm². 1 atm = 1,01325 bar. 10 metre su sütunu yaklaşık 1 bardır.' },
          { title: 'Debi', body: '1 m³/h ≈ 0,278 L/s ≈ 16,7 L/dk ≈ 4,4 ABD galonu/dakika.' },
          { title: 'Sıcaklık', body: '°F = °C × 1,8 + 32 ve K = °C + 273,15. Sıcaklık farkı çevirirken yalnızca 1,8 katsayısını kullanın.' }
        ]
      },
      tips: {
        title: 'Birim çevirme ipuçları',
        items: [
          'Sensör veri sayfasında basıncın gösterge (barg) mı mutlak (bara) mı olduğuna bakın.',
          'ABD galonu (3,785 L) ile İngiliz galonu (4,546 L) farklıdır; veri sayfasının kaynağını kontrol edin.',
          'Pompa ve boru hesaplarında debiyi baştan sona tek bir zaman birimiyle (saat veya saniye) tutun.',
          'Sonucu sensör doğruluğundan fazla basamakla yazmayın; genellikle 3–4 anlamlı basamak yeterlidir.'
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'Birim çevirme hakkında sorular',
        items: [
          { q: '1 bar kaç psi?', a: '1 bar 14,504 psi dir. Tersine, 1 psi yaklaşık 0,06895 bardır.' },
          { q: 'bar ile kg/cm² arasındaki fark nedir?', a: 'Çok yakındırlar: 1 kg/cm² = 0,9807 bar. Birçok eski manometrede ikisi neredeyse aynı kabul edilir.' },
          { q: "m³/h'yi L/s'ye nasıl çeviririm?", a: "Değeri 3,6'ya bölün. Örneğin 36 m³/h = 10 L/s." },
          { q: '1 bar kaç metre su sütunudur?', a: 'Yaklaşık 10,2 metre su sütunu 1 bardır; bu yüzden pompa basma yüksekliği metre ile de ifade edilir.' },
          { q: "Santigrat Fahrenheit'a nasıl çevrilir?", a: "Sıcaklığı 1,8 ile çarpıp 32 ekleyin. Örneğin 25 °C = 77 °F." }
        ]
      },
      cta: {
        title: 'Doğru basınç veya debi sensörüne mi ihtiyacınız var?',
        desc: 'Bizdavar VEGA ve diğer endüstriyel markaların basınç, seviye ve enstrümantasyon ürünlerini tedarik eder; doğru ölçüm aralığı seçiminde destek verir.',
        btn: 'VEGA sensörleri',
        btn2: 'Danışmanlık isteyin'
      },
      geoText: 'Türkiye, İran, Arap ülkeleri, Rusya, Avrupa ve ABD endüstrisi için mühendislik birim çevirici — metrik ve emperyal birimler.',
      related: [
        { title: 'Tank hacmi hesaplama', url: 'tank-volume-calculator', desc: 'Silindir, yatay, dikdörtgen ve küresel' },
        { title: 'VEGA sensörleri', url: 'vega', desc: 'Radar seviye ve basınç sensörleri' },
        { title: 'Endüstriyel sensörler', url: 'articles/industrial-sensors', desc: 'Sensör seçim rehberi' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free industrial tool',
        title: 'Pressure, Flow & Temperature Unit Converter',
        lead: 'Enter a value and unit to see the equivalent in every pressure, flow, temperature, length or volume unit at once.'
      },
      ui: {
        category: 'Quantity',
        catPressure: 'Pressure',
        catFlow: 'Flow rate',
        catTemperature: 'Temperature',
        catLength: 'Length',
        catVolume: 'Volume',
        value: 'Value',
        from: 'From unit',
        resultTitle: 'Equivalent in every unit',
        clickCopy: 'Tap any result to copy it.',
        copied: 'Copied ✓',
        invalid: 'Enter a valid number.',
        note: "Conversion factors use standard SI values. Gauge vs. absolute pressure isn't converted."
      },
      units: {
        pa: 'Pascal', kpa: 'Kilopascal', mpa: 'Megapascal', bar: 'Bar', mbar: 'Millibar', psi: 'Pound per sq. inch', atm: 'Atmosphere', kgcm2: 'Kilogram-force per cm²', mmhg: 'Millimeter of mercury', mh2o: 'Meter of water', inh2o: 'Inch of water',
        m3h: 'Cubic meter per hour', m3s: 'Cubic meter per second', ls: 'Liter per second', lmin: 'Liter per minute', lh: 'Liter per hour', usgpm: 'US gallon per minute', ukgpm: 'UK gallon per minute', cfm: 'Cubic foot per minute', bpd: 'Oil barrel per day',
        c: 'Celsius', f: 'Fahrenheit', k: 'Kelvin', r: 'Rankine',
        mm: 'Millimeter', cm: 'Centimeter', m: 'Meter', km: 'Kilometer', in: 'Inch', ft: 'Foot', yd: 'Yard', mi: 'Mile',
        ml: 'Milliliter', l: 'Liter', m3: 'Cubic meter', usgal: 'US gallon', ukgal: 'UK gallon', bbl: 'Oil barrel', ft3: 'Cubic foot', in3: 'Cubic inch'
      },
      explain: {
        eyebrow: 'Quick reference',
        title: 'Common industrial conversions',
        items: [
          { title: 'Pressure', body: '1 bar = 100 kPa ≈ 14.5 psi ≈ 1.02 kg/cm². 1 atm = 1.01325 bar. A 10-meter water column is roughly 1 bar.' },
          { title: 'Flow rate', body: '1 m³/h ≈ 0.278 L/s ≈ 16.7 L/min ≈ 4.4 US gpm.' },
          { title: 'Temperature', body: '°F = °C × 1.8 + 32 and K = °C + 273.15. For a temperature difference, apply only the 1.8 factor.' }
        ]
      },
      tips: {
        title: 'Unit conversion tips',
        items: [
          'Check whether a sensor datasheet gives gauge (barg) or absolute (bara) pressure.',
          'A US gallon (3.785 L) is not a UK gallon (4.546 L) — check where the datasheet comes from.',
          'For pumps and piping, keep flow in one time unit (hour or second) through the whole calculation.',
          "Don't report more digits than the sensor's accuracy; 3–4 significant figures are usually enough."
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Unit conversion questions',
        items: [
          { q: 'How many psi is 1 bar?', a: '1 bar is 14.504 psi. Conversely, 1 psi is about 0.06895 bar.' },
          { q: "What's the difference between bar and kg/cm²?", a: 'They are very close: 1 kg/cm² = 0.9807 bar. Many older gauges treat them as nearly the same.' },
          { q: 'How do I convert m³/h to L/s?', a: 'Divide by 3.6. For example, 36 m³/h = 10 L/s.' },
          { q: 'How many meters of water is 1 bar?', a: 'About 10.2 meters of water column equals 1 bar, which is why pump head is often given in meters.' },
          { q: 'How do I convert Celsius to Fahrenheit?', a: 'Multiply by 1.8 and add 32. For example, 25 °C = 77 °F.' }
        ]
      },
      cta: {
        title: 'Need the right pressure or flow sensor?',
        desc: 'Bizdavar supplies VEGA pressure, level and instrumentation products and other industrial brands, and helps you choose the right range.',
        btn: 'VEGA sensors',
        btn2: 'Ask an expert'
      },
      geoText: 'Engineering unit converter for industry in Turkey, Iran, the Gulf, Russia, Europe and the US — metric and imperial units.',
      related: [
        { title: 'Tank volume calculator', url: 'tank-volume-calculator', desc: 'Cylinder, horizontal, rectangular and sphere' },
        { title: 'VEGA sensors', url: 'vega', desc: 'Radar level and pressure sensors' },
        { title: 'Industrial sensors', url: 'articles/industrial-sensors', desc: 'How to choose a sensor' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный промышленный инструмент',
        title: 'Конвертер единиц давления, расхода и температуры',
        lead: 'Введите значение и единицу — и сразу увидите эквивалент во всех единицах давления, расхода, температуры, длины или объёма.'
      },
      ui: {
        category: 'Величина',
        catPressure: 'Давление',
        catFlow: 'Расход',
        catTemperature: 'Температура',
        catLength: 'Длина',
        catVolume: 'Объём',
        value: 'Значение',
        from: 'Из единицы',
        resultTitle: 'Эквивалент во всех единицах',
        clickCopy: 'Нажмите на результат, чтобы скопировать.',
        copied: 'Скопировано ✓',
        invalid: 'Введите корректное число.',
        note: 'Коэффициенты основаны на стандартных значениях СИ. Избыточное и абсолютное давление не пересчитываются.'
      },
      units: {
        pa: 'Паскаль', kpa: 'Килопаскаль', mpa: 'Мегапаскаль', bar: 'Бар', mbar: 'Миллибар', psi: 'Фунт на кв. дюйм', atm: 'Атмосфера', kgcm2: 'Кгс/см² (техн. атмосфера)', mmhg: 'Миллиметр рт. ст.', mh2o: 'Метр вод. ст.', inh2o: 'Дюйм вод. ст.',
        m3h: 'Кубометр в час', m3s: 'Кубометр в секунду', ls: 'Литр в секунду', lmin: 'Литр в минуту', lh: 'Литр в час', usgpm: 'Галлон США в минуту', ukgpm: 'Англ. галлон в минуту', cfm: 'Кубический фут в минуту', bpd: 'Баррель в сутки',
        c: 'Цельсий', f: 'Фаренгейт', k: 'Кельвин', r: 'Ранкин',
        mm: 'Миллиметр', cm: 'Сантиметр', m: 'Метр', km: 'Километр', in: 'Дюйм', ft: 'Фут', yd: 'Ярд', mi: 'Миля',
        ml: 'Миллилитр', l: 'Литр', m3: 'Кубометр', usgal: 'Галлон США', ukgal: 'Английский галлон', bbl: 'Нефтяной баррель', ft3: 'Кубический фут', in3: 'Кубический дюйм'
      },
      explain: {
        eyebrow: 'Краткий справочник',
        title: 'Частые пересчёты в промышленности',
        items: [
          { title: 'Давление', body: '1 бар = 100 кПа ≈ 14,5 psi ≈ 1,02 кгс/см². 1 атм = 1,01325 бар. 10 метров водяного столба — примерно 1 бар.' },
          { title: 'Расход', body: '1 м³/ч ≈ 0,278 л/с ≈ 16,7 л/мин ≈ 4,4 галлона США в минуту.' },
          { title: 'Температура', body: '°F = °C × 1,8 + 32, K = °C + 273,15. Для разницы температур применяйте только множитель 1,8.' }
        ]
      },
      tips: {
        title: 'Советы по переводу единиц',
        items: [
          'Проверьте в паспорте датчика, указано избыточное (изб.) или абсолютное (абс.) давление.',
          'Галлон США (3,785 л) и английский галлон (4,546 л) различаются — смотрите, откуда паспорт.',
          'В расчётах насосов и трубопроводов держите расход в одной единице времени (час или секунда).',
          'Не указывайте больше знаков, чем позволяет точность датчика; обычно хватает 3–4 значащих цифр.'
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы о переводе единиц',
        items: [
          { q: 'Сколько psi в 1 баре?', a: '1 бар = 14,504 psi. Наоборот, 1 psi ≈ 0,06895 бар.' },
          { q: 'Чем бар отличается от кгс/см²?', a: 'Они очень близки: 1 кгс/см² = 0,9807 бар. На многих старых манометрах их считают почти одинаковыми.' },
          { q: 'Как перевести м³/ч в л/с?', a: 'Разделите на 3,6. Например, 36 м³/ч = 10 л/с.' },
          { q: 'Сколько метров водяного столба в 1 баре?', a: 'Около 10,2 метра водяного столба равны 1 бару — поэтому напор насоса часто указывают в метрах.' },
          { q: 'Как перевести Цельсий в Фаренгейт?', a: 'Умножьте на 1,8 и прибавьте 32. Например, 25 °C = 77 °F.' }
        ]
      },
      cta: {
        title: 'Нужен подходящий датчик давления или расхода?',
        desc: 'Bizdavar поставляет датчики давления, уровня и КИП VEGA и других промышленных брендов и помогает подобрать диапазон измерения.',
        btn: 'Датчики VEGA',
        btn2: 'Консультация инженера'
      },
      geoText: 'Конвертер инженерных единиц для промышленности России, Казахстана, Турции, ОАЭ, Ирана и Европы — метрические и британские единицы.',
      related: [
        { title: 'Калькулятор объёма резервуара', url: 'tank-volume-calculator', desc: 'Цилиндр, горизонтальный, прямоугольный, шар' },
        { title: 'Датчики VEGA', url: 'vega', desc: 'Радарные уровнемеры и датчики давления' },
        { title: 'Промышленные датчики', url: 'articles/industrial-sensors', desc: 'Как выбрать датчик' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة صناعية مجانية',
        title: 'محوّل وحدات الضغط والتدفق والحرارة',
        lead: 'أدخل قيمة ووحدة لترى ما يعادلها في كل وحدات الضغط أو التدفق أو الحرارة أو الطول أو الحجم دفعة واحدة.'
      },
      ui: {
        category: 'نوع الكمية',
        catPressure: 'الضغط',
        catFlow: 'التدفق',
        catTemperature: 'الحرارة',
        catLength: 'الطول',
        catVolume: 'الحجم',
        value: 'القيمة',
        from: 'من وحدة',
        resultTitle: 'ما يعادلها في كل الوحدات',
        clickCopy: 'اضغط على أي نتيجة لنسخها.',
        copied: 'تم النسخ ✓',
        invalid: 'أدخل رقماً صحيحاً.',
        note: 'تعتمد معاملات التحويل على قيم SI القياسية. لا يتم التحويل بين الضغط النسبي والمطلق.'
      },
      units: {
        pa: 'باسكال', kpa: 'كيلوباسكال', mpa: 'ميغاباسكال', bar: 'بار', mbar: 'ميلي بار', psi: 'رطل لكل إنش مربع', atm: 'ضغط جوي', kgcm2: 'كيلوغرام لكل سم²', mmhg: 'مليمتر زئبق', mh2o: 'متر عمود ماء', inh2o: 'إنش عمود ماء',
        m3h: 'متر مكعب في الساعة', m3s: 'متر مكعب في الثانية', ls: 'لتر في الثانية', lmin: 'لتر في الدقيقة', lh: 'لتر في الساعة', usgpm: 'جالون أمريكي في الدقيقة', ukgpm: 'جالون إنجليزي في الدقيقة', cfm: 'قدم مكعب في الدقيقة', bpd: 'برميل نفط في اليوم',
        c: 'سيلسيوس', f: 'فهرنهايت', k: 'كلفن', r: 'رانكين',
        mm: 'مليمتر', cm: 'سنتيمتر', m: 'متر', km: 'كيلومتر', in: 'إنش', ft: 'قدم', yd: 'ياردة', mi: 'ميل',
        ml: 'مليلتر', l: 'لتر', m3: 'متر مكعب', usgal: 'جالون أمريكي', ukgal: 'جالون إنجليزي', bbl: 'برميل نفط', ft3: 'قدم مكعب', in3: 'إنش مكعب'
      },
      explain: {
        eyebrow: 'مرجع سريع',
        title: 'التحويلات الشائعة في الصناعة',
        items: [
          { title: 'الضغط', body: '1 بار = 100 كيلوباسكال ≈ 14.5 psi ≈ 1.02 كغ/سم². 1 ضغط جوي = 1.01325 بار. عمود ماء بارتفاع 10 أمتار يعادل تقريباً 1 بار.' },
          { title: 'التدفق', body: '1 م³/ساعة ≈ 0.278 لتر/ثانية ≈ 16.7 لتر/دقيقة ≈ 4.4 جالون أمريكي/دقيقة.' },
          { title: 'الحرارة', body: '°F = °C × 1.8 + 32 وK = °C + 273.15. عند تحويل فرق درجات الحرارة استخدم المعامل 1.8 فقط.' }
        ]
      },
      tips: {
        title: 'نصائح لتحويل الوحدات',
        items: [
          'تحقق في نشرة الحساس هل الضغط نسبي (barg) أم مطلق (bara).',
          'الجالون الأمريكي (3.785 لتر) يختلف عن الإنجليزي (4.546 لتر)؛ تحقق من مصدر النشرة.',
          'في حسابات المضخات والأنابيب حافظ على وحدة زمن واحدة للتدفق (ساعة أو ثانية).',
          'لا تكتب أرقاماً أكثر من دقة الحساس؛ عادةً تكفي 3 إلى 4 أرقام معنوية.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول تحويل الوحدات',
        items: [
          { q: 'كم psi في 1 بار؟', a: '1 بار يساوي 14.504 psi. وبالعكس، 1 psi يساوي نحو 0.06895 بار.' },
          { q: 'ما الفرق بين bar وkg/cm²؟', a: 'هما متقاربان جداً: 1 كغ/سم² = 0.9807 بار، وتعاملهما كثير من المقاييس القديمة على أنهما متساويان تقريباً.' },
          { q: 'كيف أحوّل م³/ساعة إلى لتر/ثانية؟', a: 'اقسم القيمة على 3.6. مثلاً 36 م³/ساعة = 10 لتر/ثانية.' },
          { q: 'كم متر عمود ماء يعادل 1 بار؟', a: 'نحو 10.2 متر عمود ماء يعادل 1 بار، ولهذا يُعبَّر عن ارتفاع ضخ المضخات بالمتر أيضاً.' },
          { q: 'كيف أحوّل سيلسيوس إلى فهرنهايت؟', a: 'اضرب في 1.8 وأضف 32. مثلاً 25 °C = 77 °F.' }
        ]
      },
      cta: {
        title: 'تحتاج حساس ضغط أو تدفق مناسباً؟',
        desc: 'توفّر Bizdavar حساسات الضغط والمستوى وأجهزة القياس من VEGA وعلامات صناعية أخرى وتساعدك على اختيار نطاق القياس المناسب.',
        btn: 'حساسات VEGA',
        btn2: 'اطلب استشارة'
      },
      geoText: 'محوّل الوحدات الهندسية للصناعة في الإمارات والسعودية والعراق وتركيا وإيران وأوروبا وأمريكا — وحدات مترية وإمبراطورية.',
      related: [
        { title: 'حاسبة حجم الخزان', url: 'tank-volume-calculator', desc: 'أسطواني وأفقي ومستطيل وكروي' },
        { title: 'حساسات VEGA', url: 'vega', desc: 'حساسات المستوى الرادارية والضغط' },
        { title: 'الحساسات الصناعية', url: 'articles/industrial-sensors', desc: 'دليل اختيار الحساس' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.unitConverter = Object.assign(L.pages.unitConverter || {}, seo[lang]);
    L.unitConverterPage = pages[lang];
  });
})();
