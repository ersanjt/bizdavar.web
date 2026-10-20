/**
 * Tank volume calculator — SEO meta + copy for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js so RU/AR are set directly (not cloned from EN).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'محاسبه حجم مخزن',
      seoTitle: 'محاسبه حجم مخزن آنلاین | استوانه‌ای، افقی، مکعبی و کروی — بیزدوار',
      seoDescription: 'حجم کل و حجم پر شده مخزن استوانه‌ای عمودی، افقی، مکعب مستطیل و کروی را بر حسب لیتر، متر مکعب و گالن محاسبه کنید. با ارتفاع مایع و درصد پر بودن.',
      seoKeywords: 'محاسبه حجم مخزن, محاسبه حجم مخزن استوانه ای, حجم مخزن افقی, محاسبه لیتر مخزن, حجم مخزن مکعبی, فرمول حجم استوانه, محاسبه حجم منبع آب'
    },
    tr: {
      crumb: 'Tank hacmi hesaplama',
      seoTitle: 'Tank Hacmi Hesaplama — Silindir, Yatay, Dikdörtgen ve Küresel | Bizdavar',
      seoDescription: 'Dikey ve yatay silindir, dikdörtgen ve küresel tankların toplam ve dolu hacmini litre, m³ ve galon olarak hesaplayın. Sıvı seviyesi ve doluluk yüzdesiyle.',
      seoKeywords: 'tank hacmi hesaplama, silindir tank hacmi, yatay tank hacmi hesaplama, depo litre hesaplama, su deposu hacmi, silindir hacmi formülü, tank kapasitesi hesaplama'
    },
    en: {
      crumb: 'Tank volume calculator',
      seoTitle: 'Tank Volume Calculator — Cylinder, Horizontal, Rectangular & Sphere | Bizdavar',
      seoDescription: 'Calculate total and filled volume of vertical and horizontal cylindrical, rectangular and spherical tanks in liters, m³ and gallons — with liquid level and fill percentage.',
      seoKeywords: 'tank volume calculator, cylindrical tank volume, horizontal tank volume calculator, tank capacity calculator, liters in tank, rectangular tank volume, tank fill calculator'
    },
    ru: {
      crumb: 'Калькулятор объёма резервуара',
      seoTitle: 'Калькулятор объёма резервуара — цилиндр, горизонтальный, прямоугольный, шар | Bizdavar',
      seoDescription: 'Рассчитайте полный объём и объём заполнения вертикального и горизонтального цилиндрического, прямоугольного и шарового резервуара в литрах, м³ и галлонах по уровню жидкости.',
      seoKeywords: 'калькулятор объема резервуара, объем цилиндрической емкости, объем горизонтальной емкости, расчет объема бочки, объем бака в литрах, калькулятор объема емкости, расчет объема резервуара по уровню'
    },
    ar: {
      crumb: 'حاسبة حجم الخزان',
      seoTitle: 'حاسبة حجم الخزان — أسطواني عمودي وأفقي ومستطيل وكروي | Bizdavar',
      seoDescription: 'احسب الحجم الكلي والحجم المملوء للخزانات الأسطوانية العمودية والأفقية والمستطيلة والكروية باللتر والمتر المكعب والجالون، مع مستوى السائل ونسبة الامتلاء.',
      seoKeywords: 'حاسبة حجم الخزان, حساب حجم خزان اسطواني, حجم الخزان الأفقي, حساب سعة الخزان باللتر, حجم خزان مستطيل, قانون حجم الاسطوانة, حساب حجم خزان المياه'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان صنعتی',
        title: 'محاسبه حجم مخزن',
        lead: 'حجم کل و حجم پر شده مخزن را با وارد کردن ابعاد و ارتفاع مایع، بر حسب لیتر، متر مکعب و گالن به‌دست بیاورید.'
      },
      ui: {
        shape: 'شکل مخزن',
        shapeVcyl: 'استوانه عمودی',
        shapeHcyl: 'استوانه افقی',
        shapeRect: 'مکعب مستطیل',
        shapeSphere: 'کروی',
        unit: 'واحد ابعاد',
        unitMm: 'میلی‌متر (mm)',
        unitCm: 'سانتی‌متر (cm)',
        unitM: 'متر (m)',
        unitIn: 'اینچ (in)',
        unitFt: 'فوت (ft)',
        diameter: 'قطر داخلی',
        length: 'طول',
        width: 'عرض',
        height: 'ارتفاع',
        fill: 'ارتفاع مایع',
        fillHint: 'اختیاری — ارتفاع مایع از کف مخزن، برای محاسبه حجم پر شده',
        resultTitle: 'نتیجه محاسبه',
        resultEmpty: 'ابعاد مخزن را وارد کنید.',
        errFill: 'ارتفاع مایع نمی‌تواند از ارتفاع داخلی مخزن بیشتر باشد.',
        total: 'حجم کل',
        filled: 'حجم مایع',
        empty: 'فضای خالی',
        fillPct: 'درصد پر بودن',
        liters: 'لیتر',
        m3: 'متر مکعب',
        gallons: 'گالن آمریکا',
        copy: 'کپی نتیجه',
        copied: 'کپی شد ✓',
        note: 'محاسبه برای مخزن با سرهای تخت است. برای کف یا سر عدسی و مخروطی، حجم سرها را جداگانه اضافه کنید.'
      },
      explain: {
        eyebrow: 'فرمول‌ها',
        title: 'حجم مخزن چطور محاسبه می‌شود؟',
        items: [
          { title: 'استوانه عمودی و مکعبی', body: 'حجم استوانه عمودی برابر π × r² × h و حجم مخزن مکعبی برابر طول × عرض × ارتفاع است. حجم مایع با جایگذاری ارتفاع مایع به‌جای h به‌دست می‌آید.' },
          { title: 'استوانه افقی', body: 'در مخزن خوابیده، سطح مایع یک قطعه دایره است و حجم با ارتفاع خطی نیست. فرمول قطعه دایره ضرب در طول مخزن، حجم دقیق را می‌دهد.' },
          { title: 'مخزن کروی', body: 'حجم کره برابر (4/3) × π × r³ است. حجم مایع در ارتفاع h از فرمول کلاهک کروی π × h² × (3r − h) / 3 به‌دست می‌آید.' }
        ]
      },
      tips: {
        title: 'نکته‌های اندازه‌گیری دقیق',
        items: [
          'قطر داخلی را اندازه بگیرید؛ ضخامت دیواره در مخزن‌های بزرگ چند صد لیتر اختلاف می‌سازد.',
          'یک واحد را برای همه ابعاد استفاده کنید؛ ابزار خودش نتیجه را به لیتر و متر مکعب تبدیل می‌کند.',
          'برای مخزن‌های رسمی و فروش سوخت از جدول کالیبراسیون (Strapping Table) استفاده کنید.',
          'برای پایش دائمی سطح، به‌جای خط‌کش و میله، سنسور سطح راداری یا التراسونیک نصب کنید.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره حجم مخزن',
        items: [
          { q: 'حجم مخزن استوانه‌ای را چطور حساب کنم؟', a: 'شعاع (نصف قطر) را به توان دو برسانید، در ۳٫۱۴۱۶ و سپس در ارتفاع ضرب کنید. اگر ابعاد به متر باشد، نتیجه متر مکعب است و با ضرب در ۱۰۰۰ لیتر می‌شود.' },
          { q: 'هر متر مکعب چند لیتر است؟', a: 'هر متر مکعب برابر ۱۰۰۰ لیتر و حدود ۲۶۴٫۲ گالن آمریکا است.' },
          { q: 'چرا حجم مخزن افقی با ارتفاع مایع خطی نیست؟', a: 'چون عرض سطح مایع در وسط مخزن بیشترین و در کف و سقف کمترین است. نیمه پر بودن ارتفاع یعنی ۵۰٪ حجم، اما ۲۵٪ ارتفاع حدود ۱۹٫۶٪ حجم است.' },
          { q: 'سرهای عدسی (Dished Head) را چطور حساب کنم؟', a: 'این ابزار سرها را تخت فرض می‌کند. برای سرهای بیضوی ۲:۱ حجم هر سر تقریباً π × D³ / 24 است که باید به حجم بدنه اضافه شود.' },
          { q: 'چطور سطح مخزن را خودکار اندازه بگیرم؟', a: 'سنسورهای سطح راداری مثل VEGAPULS بدون تماس با مایع، ارتفاع را دقیق اندازه می‌گیرند و با جدول حجم، لیتر مخزن را به‌صورت آنلاین نشان می‌دهند.' }
        ]
      },
      cta: {
        title: 'سطح مخزن را خودکار و دقیق اندازه بگیرید',
        desc: 'بیزدوار سنسورهای سطح و فشار VEGA را برای مخازن آب، سوخت و مواد شیمیایی تأمین می‌کند و برای انتخاب مدل مناسب مشاوره می‌دهد.',
        btn: 'سنسورهای VEGA',
        btn2: 'درخواست مشاوره'
      },
      geoText: 'محاسبه حجم مخزن برای صنایع ایران، ترکیه، کشورهای عربی، روسیه و اروپا — واحدهای متریک و اینچی.',
      related: [
        { title: 'سنسورهای VEGA', url: 'vega', desc: 'سنسور سطح راداری و فشار' },
        { title: 'سنسورهای صنعتی', url: 'articles/industrial-sensors', desc: 'راهنمای انتخاب سنسور سطح و فشار' },
        { title: 'تبدیل واحد فشار و دبی', url: 'unit-converter', desc: 'bar، psi، m³/h، دما و حجم' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz endüstriyel araç',
        title: 'Tank Hacmi Hesaplama',
        lead: 'Ölçüleri ve sıvı seviyesini girerek tankın toplam ve dolu hacmini litre, metreküp ve galon olarak bulun.'
      },
      ui: {
        shape: 'Tank şekli',
        shapeVcyl: 'Dikey silindir',
        shapeHcyl: 'Yatay silindir',
        shapeRect: 'Dikdörtgen',
        shapeSphere: 'Küresel',
        unit: 'Ölçü birimi',
        unitMm: 'Milimetre (mm)',
        unitCm: 'Santimetre (cm)',
        unitM: 'Metre (m)',
        unitIn: 'İnç (in)',
        unitFt: 'Fit (ft)',
        diameter: 'İç çap',
        length: 'Uzunluk',
        width: 'Genişlik',
        height: 'Yükseklik',
        fill: 'Sıvı seviyesi',
        fillHint: 'İsteğe bağlı — dolu hacim için tank tabanından sıvı yüksekliği',
        resultTitle: 'Sonuç',
        resultEmpty: 'Tank ölçülerini girin.',
        errFill: 'Sıvı seviyesi tankın iç yüksekliğinden büyük olamaz.',
        total: 'Toplam hacim',
        filled: 'Sıvı hacmi',
        empty: 'Boş hacim',
        fillPct: 'Doluluk oranı',
        liters: 'litre',
        m3: 'metreküp',
        gallons: 'ABD galonu',
        copy: 'Sonucu kopyala',
        copied: 'Kopyalandı ✓',
        note: 'Hesaplama düz kapaklı tanklar içindir. Bombeli veya konik kapaklarda kapak hacmini ayrıca ekleyin.'
      },
      explain: {
        eyebrow: 'Formüller',
        title: 'Tank hacmi nasıl hesaplanır?',
        items: [
          { title: 'Dikey silindir ve dikdörtgen', body: 'Dikey silindirin hacmi π × r² × h, dikdörtgen tankın hacmi uzunluk × genişlik × yüksekliktir. Sıvı hacmi için h yerine sıvı seviyesi kullanılır.' },
          { title: 'Yatay silindir', body: 'Yatık tankta sıvı yüzeyi bir daire parçasıdır ve hacim seviyeyle doğrusal değişmez. Daire parçası alanı × tank uzunluğu kesin hacmi verir.' },
          { title: 'Küresel tank', body: 'Kürenin hacmi (4/3) × π × r³ tür. h seviyesindeki sıvı hacmi küresel başlık formülüyle bulunur: π × h² × (3r − h) / 3.' }
        ]
      },
      tips: {
        title: 'Doğru ölçüm için ipuçları',
        items: [
          'İç çapı ölçün; büyük tanklarda et kalınlığı yüzlerce litre fark yaratır.',
          'Tüm ölçüler için aynı birimi kullanın; araç sonucu litre ve m³ e kendisi çevirir.',
          'Resmi ölçüm ve yakıt satışı için kalibrasyon tablosu (strapping table) kullanın.',
          'Sürekli izleme için cetvel veya çubuk yerine radar ya da ultrasonik seviye sensörü takın.'
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'Tank hacmi hakkında sorular',
        items: [
          { q: 'Silindir tankın hacmi nasıl hesaplanır?', a: 'Yarıçapın (çapın yarısı) karesini alın, 3,1416 ve ardından yükseklikle çarpın. Ölçüler metre ise sonuç m³ tür; 1000 ile çarparak litreye çevirin.' },
          { q: '1 metreküp kaç litredir?', a: '1 metreküp 1000 litre ve yaklaşık 264,2 ABD galonudur.' },
          { q: 'Yatay tankta hacim neden seviyeyle doğrusal değil?', a: 'Çünkü sıvı yüzeyinin genişliği ortada en fazla, altta ve üstte en azdır. Yarı seviye %50 hacimdir ama %25 seviye yaklaşık %19,6 hacimdir.' },
          { q: 'Bombeli kapakları nasıl hesaplarım?', a: 'Bu araç kapakları düz kabul eder. 2:1 elipsoidal kapakta her kapağın hacmi yaklaşık π × D³ / 24 tür ve gövde hacmine eklenmelidir.' },
          { q: 'Tank seviyesini otomatik nasıl ölçerim?', a: 'VEGAPULS gibi radar seviye sensörleri sıvıya temas etmeden seviyeyi hassas ölçer ve hacim tablosuyla tanktaki litreyi canlı gösterir.' }
        ]
      },
      cta: {
        title: 'Tank seviyesini otomatik ve hassas ölçün',
        desc: 'Bizdavar su, yakıt ve kimyasal tankları için VEGA seviye ve basınç sensörleri tedarik eder ve doğru model seçiminde destek verir.',
        btn: 'VEGA sensörleri',
        btn2: 'Danışmanlık isteyin'
      },
      geoText: 'Türkiye, İran, Arap ülkeleri, Rusya ve Avrupa endüstrisi için tank hacmi hesaplama — metrik ve inç birimleri.',
      related: [
        { title: 'VEGA sensörleri', url: 'vega', desc: 'Radar seviye ve basınç sensörleri' },
        { title: 'Endüstriyel sensörler', url: 'articles/industrial-sensors', desc: 'Seviye ve basınç sensörü seçim rehberi' },
        { title: 'Basınç ve debi birim çevirici', url: 'unit-converter', desc: 'bar, psi, m³/h, sıcaklık ve hacim' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free industrial tool',
        title: 'Tank Volume Calculator',
        lead: 'Enter the dimensions and liquid level to get the total and filled volume of your tank in liters, cubic meters and gallons.'
      },
      ui: {
        shape: 'Tank shape',
        shapeVcyl: 'Vertical cylinder',
        shapeHcyl: 'Horizontal cylinder',
        shapeRect: 'Rectangular',
        shapeSphere: 'Sphere',
        unit: 'Dimension unit',
        unitMm: 'Millimeters (mm)',
        unitCm: 'Centimeters (cm)',
        unitM: 'Meters (m)',
        unitIn: 'Inches (in)',
        unitFt: 'Feet (ft)',
        diameter: 'Inner diameter',
        length: 'Length',
        width: 'Width',
        height: 'Height',
        fill: 'Liquid level',
        fillHint: 'Optional — liquid height from the tank bottom, for the filled volume',
        resultTitle: 'Result',
        resultEmpty: 'Enter the tank dimensions.',
        errFill: "The liquid level can't be higher than the tank's inner height.",
        total: 'Total volume',
        filled: 'Liquid volume',
        empty: 'Empty space',
        fillPct: 'Fill level',
        liters: 'liters',
        m3: 'cubic meters',
        gallons: 'US gallons',
        copy: 'Copy result',
        copied: 'Copied ✓',
        note: 'Calculated for flat-ended tanks. For dished or conical heads, add the head volume separately.'
      },
      explain: {
        eyebrow: 'Formulas',
        title: 'How is tank volume calculated?',
        items: [
          { title: 'Vertical cylinder and rectangular', body: 'A vertical cylinder holds π × r² × h; a rectangular tank holds length × width × height. For the liquid volume, use the liquid level instead of h.' },
          { title: 'Horizontal cylinder', body: 'In a horizontal tank the liquid cross-section is a circular segment, so volume is not linear with level. Segment area × tank length gives the exact volume.' },
          { title: 'Spherical tank', body: 'A sphere holds (4/3) × π × r³. The liquid volume at level h comes from the spherical cap formula: π × h² × (3r − h) / 3.' }
        ]
      },
      tips: {
        title: 'Tips for accurate measurement',
        items: [
          'Measure the inner diameter — wall thickness makes a difference of hundreds of liters on big tanks.',
          'Use the same unit for every dimension; the tool converts the result to liters and m³ for you.',
          'For custody transfer and fuel sales, use a certified strapping (calibration) table.',
          'For continuous monitoring, install a radar or ultrasonic level sensor instead of a dipstick.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Tank volume questions',
        items: [
          { q: 'How do I calculate the volume of a cylindrical tank?', a: 'Square the radius (half the diameter), multiply by 3.1416, then by the height. With dimensions in meters the result is in m³; multiply by 1000 for liters.' },
          { q: 'How many liters are in a cubic meter?', a: 'One cubic meter is 1000 liters, or about 264.2 US gallons.' },
          { q: 'Why is a horizontal tank not linear with level?', a: 'The liquid surface is widest in the middle and narrowest at the bottom and top. Half the height is 50% of the volume, but 25% of the height is only about 19.6%.' },
          { q: 'How do I account for dished heads?', a: 'This tool assumes flat ends. For 2:1 ellipsoidal heads each head adds roughly π × D³ / 24, which you add to the shell volume.' },
          { q: 'How can I measure tank level automatically?', a: 'Radar level sensors such as VEGAPULS measure the level without touching the liquid and, with a volume table, show the liters in the tank in real time.' }
        ]
      },
      cta: {
        title: 'Measure tank level automatically and precisely',
        desc: 'Bizdavar supplies VEGA level and pressure sensors for water, fuel and chemical tanks and helps you choose the right model.',
        btn: 'VEGA sensors',
        btn2: 'Ask an expert'
      },
      geoText: 'Tank volume calculator for industry in Turkey, Iran, the Gulf, Russia, Europe and the US — metric and imperial units.',
      related: [
        { title: 'VEGA sensors', url: 'vega', desc: 'Radar level and pressure sensors' },
        { title: 'Industrial sensors', url: 'articles/industrial-sensors', desc: 'Choosing level and pressure sensors' },
        { title: 'Pressure & flow unit converter', url: 'unit-converter', desc: 'bar, psi, m³/h, temperature and volume' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный промышленный инструмент',
        title: 'Калькулятор объёма резервуара',
        lead: 'Введите размеры и уровень жидкости — и получите полный объём и объём заполнения резервуара в литрах, кубометрах и галлонах.'
      },
      ui: {
        shape: 'Форма резервуара',
        shapeVcyl: 'Вертикальный цилиндр',
        shapeHcyl: 'Горизонтальный цилиндр',
        shapeRect: 'Прямоугольный',
        shapeSphere: 'Шаровой',
        unit: 'Единица размеров',
        unitMm: 'Миллиметры (мм)',
        unitCm: 'Сантиметры (см)',
        unitM: 'Метры (м)',
        unitIn: 'Дюймы (in)',
        unitFt: 'Футы (ft)',
        diameter: 'Внутренний диаметр',
        length: 'Длина',
        width: 'Ширина',
        height: 'Высота',
        fill: 'Уровень жидкости',
        fillHint: 'Необязательно — высота жидкости от дна, для объёма заполнения',
        resultTitle: 'Результат',
        resultEmpty: 'Введите размеры резервуара.',
        errFill: 'Уровень жидкости не может быть выше внутренней высоты резервуара.',
        total: 'Полный объём',
        filled: 'Объём жидкости',
        empty: 'Свободный объём',
        fillPct: 'Заполнение',
        liters: 'литров',
        m3: 'кубометров',
        gallons: 'галлонов США',
        copy: 'Копировать результат',
        copied: 'Скопировано ✓',
        note: 'Расчёт для резервуара с плоскими днищами. Для эллиптических или конических днищ добавьте их объём отдельно.'
      },
      explain: {
        eyebrow: 'Формулы',
        title: 'Как рассчитать объём резервуара?',
        items: [
          { title: 'Вертикальный цилиндр и прямоугольный', body: 'Объём вертикального цилиндра — π × r² × h, прямоугольного резервуара — длина × ширина × высота. Для объёма жидкости вместо h подставьте уровень.' },
          { title: 'Горизонтальный цилиндр', body: 'В горизонтальной ёмкости сечение жидкости — круговой сегмент, поэтому объём не пропорционален уровню. Площадь сегмента × длина даёт точный объём.' },
          { title: 'Шаровой резервуар', body: 'Объём шара — (4/3) × π × r³. Объём жидкости на уровне h считается по формуле шарового сегмента: π × h² × (3r − h) / 3.' }
        ]
      },
      tips: {
        title: 'Как измерить точно',
        items: [
          'Измеряйте внутренний диаметр — толщина стенки на больших ёмкостях даёт разницу в сотни литров.',
          'Вводите все размеры в одной единице; инструмент сам переведёт результат в литры и м³.',
          'Для коммерческого учёта и продажи топлива используйте градуировочную таблицу резервуара.',
          'Для постоянного контроля установите радарный или ультразвуковой уровнемер вместо метрштока.'
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы об объёме резервуара',
        items: [
          { q: 'Как рассчитать объём цилиндрической ёмкости?', a: 'Возведите радиус (половину диаметра) в квадрат, умножьте на 3,1416 и на высоту. Если размеры в метрах, результат в м³; умножьте на 1000, чтобы получить литры.' },
          { q: 'Сколько литров в одном кубометре?', a: 'В одном кубометре 1000 литров, или около 264,2 галлона США.' },
          { q: 'Почему в горизонтальной ёмкости объём не пропорционален уровню?', a: 'Ширина зеркала жидкости максимальна посередине и минимальна у дна и верха. Половина высоты — это 50% объёма, а 25% высоты — лишь около 19,6%.' },
          { q: 'Как учесть эллиптические днища?', a: 'Инструмент считает днища плоскими. Для эллиптического днища 2:1 объём каждого примерно π × D³ / 24 — прибавьте его к объёму обечайки.' },
          { q: 'Как измерять уровень в резервуаре автоматически?', a: 'Радарные уровнемеры, например VEGAPULS, измеряют уровень бесконтактно и вместе с градуировочной таблицей показывают объём в литрах в реальном времени.' }
        ]
      },
      cta: {
        title: 'Измеряйте уровень в резервуаре автоматически',
        desc: 'Bizdavar поставляет датчики уровня и давления VEGA для резервуаров с водой, топливом и химией и помогает подобрать модель.',
        btn: 'Датчики VEGA',
        btn2: 'Консультация инженера'
      },
      geoText: 'Калькулятор объёма резервуаров для промышленности России, Казахстана, Турции, ОАЭ, Ирана и Европы — метрические и дюймовые единицы.',
      related: [
        { title: 'Датчики VEGA', url: 'vega', desc: 'Радарные уровнемеры и датчики давления' },
        { title: 'Промышленные датчики', url: 'articles/industrial-sensors', desc: 'Как выбрать датчик уровня и давления' },
        { title: 'Конвертер единиц давления и расхода', url: 'unit-converter', desc: 'бар, psi, м³/ч, температура и объём' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة صناعية مجانية',
        title: 'حاسبة حجم الخزان',
        lead: 'أدخل الأبعاد ومستوى السائل لتحصل على الحجم الكلي والحجم المملوء للخزان باللتر والمتر المكعب والجالون.'
      },
      ui: {
        shape: 'شكل الخزان',
        shapeVcyl: 'أسطوانة عمودية',
        shapeHcyl: 'أسطوانة أفقية',
        shapeRect: 'متوازي مستطيلات',
        shapeSphere: 'كروي',
        unit: 'وحدة الأبعاد',
        unitMm: 'مليمتر (mm)',
        unitCm: 'سنتيمتر (cm)',
        unitM: 'متر (m)',
        unitIn: 'إنش (in)',
        unitFt: 'قدم (ft)',
        diameter: 'القطر الداخلي',
        length: 'الطول',
        width: 'العرض',
        height: 'الارتفاع',
        fill: 'مستوى السائل',
        fillHint: 'اختياري — ارتفاع السائل من قاع الخزان لحساب الحجم المملوء',
        resultTitle: 'النتيجة',
        resultEmpty: 'أدخل أبعاد الخزان.',
        errFill: 'لا يمكن أن يتجاوز مستوى السائل الارتفاع الداخلي للخزان.',
        total: 'الحجم الكلي',
        filled: 'حجم السائل',
        empty: 'الحجم الفارغ',
        fillPct: 'نسبة الامتلاء',
        liters: 'لتر',
        m3: 'متر مكعب',
        gallons: 'جالون أمريكي',
        copy: 'نسخ النتيجة',
        copied: 'تم النسخ ✓',
        note: 'الحساب للخزانات ذات النهايات المسطحة. للرؤوس المقعرة أو المخروطية أضف حجمها بشكل منفصل.'
      },
      explain: {
        eyebrow: 'المعادلات',
        title: 'كيف يُحسب حجم الخزان؟',
        items: [
          { title: 'الأسطوانة العمودية والمستطيل', body: 'حجم الأسطوانة العمودية π × r² × h، وحجم الخزان المستطيل الطول × العرض × الارتفاع. لحجم السائل استخدم مستوى السائل بدل h.' },
          { title: 'الأسطوانة الأفقية', body: 'في الخزان الأفقي يكون مقطع السائل قطعة دائرية، لذا لا يتناسب الحجم خطياً مع المستوى. مساحة القطعة × طول الخزان تعطي الحجم الدقيق.' },
          { title: 'الخزان الكروي', body: 'حجم الكرة (4/3) × π × r³. ويُحسب حجم السائل عند المستوى h بمعادلة القبعة الكروية: π × h² × (3r − h) / 3.' }
        ]
      },
      tips: {
        title: 'نصائح لقياس دقيق',
        items: [
          'قِس القطر الداخلي؛ فسماكة الجدار تصنع فرقاً بمئات اللترات في الخزانات الكبيرة.',
          'استخدم الوحدة نفسها لكل الأبعاد؛ وتحوّل الأداة النتيجة إلى لتر ومتر مكعب تلقائياً.',
          'لعمليات البيع والتسليم الرسمية للوقود استخدم جدول معايرة معتمداً للخزان.',
          'للمراقبة المستمرة ركّب حساس مستوى راداري أو بالموجات فوق الصوتية بدل عصا القياس.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول حجم الخزان',
        items: [
          { q: 'كيف أحسب حجم خزان أسطواني؟', a: 'ربّع نصف القطر، واضربه في 3.1416 ثم في الارتفاع. إذا كانت الأبعاد بالمتر فالنتيجة بالمتر المكعب؛ اضربها في 1000 لتحصل على اللترات.' },
          { q: 'كم لتراً في المتر المكعب؟', a: 'المتر المكعب يساوي 1000 لتر، أي نحو 264.2 جالوناً أمريكياً.' },
          { q: 'لماذا لا يتناسب حجم الخزان الأفقي خطياً مع المستوى؟', a: 'لأن سطح السائل أعرض ما يكون في المنتصف وأضيق عند القاع والقمة. نصف الارتفاع يعادل 50% من الحجم، لكن 25% من الارتفاع تعادل نحو 19.6% فقط.' },
          { q: 'كيف أحسب الرؤوس المقعرة؟', a: 'تفترض الأداة نهايات مسطحة. للرؤوس البيضاوية 2:1 يضيف كل رأس نحو π × D³ / 24 إلى حجم جسم الخزان.' },
          { q: 'كيف أقيس مستوى الخزان تلقائياً؟', a: 'حساسات المستوى الرادارية مثل VEGAPULS تقيس المستوى دون تلامس مع السائل، ومع جدول الحجم تعرض اللترات في الخزان لحظياً.' }
        ]
      },
      cta: {
        title: 'قِس مستوى الخزان تلقائياً وبدقة',
        desc: 'توفّر Bizdavar حساسات المستوى والضغط من VEGA لخزانات المياه والوقود والمواد الكيميائية وتساعدك على اختيار الطراز المناسب.',
        btn: 'حساسات VEGA',
        btn2: 'اطلب استشارة'
      },
      geoText: 'حاسبة حجم الخزانات للصناعة في الإمارات والسعودية والعراق وتركيا وإيران وأوروبا — بالوحدات المترية والإنشية.',
      related: [
        { title: 'حساسات VEGA', url: 'vega', desc: 'حساسات المستوى الرادارية والضغط' },
        { title: 'الحساسات الصناعية', url: 'articles/industrial-sensors', desc: 'دليل اختيار حساسات المستوى والضغط' },
        { title: 'محوّل وحدات الضغط والتدفق', url: 'unit-converter', desc: 'bar وpsi وm³/h والحرارة والحجم' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.tankVolume = Object.assign(L.pages.tankVolume || {}, seo[lang]);
    L.tankVolumePage = pages[lang];
  });
})();
