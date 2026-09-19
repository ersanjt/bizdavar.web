createSupplyBrandPage({
  prefix: 'auto',
  catalogKey: 'AUTO_MOTO_CATALOG',
  brandName: 'Bizdavar Auto-Moto',
  schemaId: 'jsonld-auto-moto',
  schemaListName: 'تامین لوازم خودرو خارجی و موتورسیکلت — بیزدوار گروپ',
  initFn: 'initAutoMotoPage',
  schemaFn: 'injectAutoMotoSchema'
});

(function () {
  const init = window.initAutoMotoPage;
  const schema = window.injectAutoMotoSchema;
  const KEY = 'AUTO_MOTO_CATALOG';
  const ORDER = ['intercom', 'helmets', 'jackets', 'gloves', 'boots', 'pants', 'protection', 'offroad', 'casual', 'moto-parts', 'accessories'];

  const SHORT = {
    fa: { intercom: 'اینترکام', helmets: 'کلاه', jackets: 'کاپشن', gloves: 'دستکش', boots: 'بوت', pants: 'شلوار', protection: 'محافظ', offroad: 'آفرود', casual: 'روزمره', 'moto-parts': 'قطعات', accessories: 'اکسسوری' },
    tr: { intercom: 'Interkom', helmets: 'Kask', jackets: 'Mont', gloves: 'Eldiven', boots: 'Bot', pants: 'Pantolon', protection: 'Koruma', offroad: 'MX Off-road', casual: 'Casual', 'moto-parts': 'Motorunuza', accessories: 'Aksesuar' },
    en: { intercom: 'Intercom', helmets: 'Helmets', jackets: 'Jackets', gloves: 'Gloves', boots: 'Boots', pants: 'Pants', protection: 'Protection', offroad: 'MX Off-road', casual: 'Casual', 'moto-parts': 'On the bike', accessories: 'Accessories' },
    ru: { intercom: 'Интерком', helmets: 'Шлемы', jackets: 'Куртки', gloves: 'Перчатки', boots: 'Боты', pants: 'Штаны', protection: 'Защита', offroad: 'MX', casual: 'Casual', 'moto-parts': 'На мото', accessories: 'Аксессуары' },
    ar: { intercom: 'إنتركم', helmets: 'خوذات', jackets: 'سترات', gloves: 'قفازات', boots: 'بوت', pants: 'بناطيل', protection: 'حماية', offroad: 'أوف رود', casual: 'كاجوال', 'moto-parts': 'على الدراجة', accessories: 'إكسسوار' }
  };

  const ALL = { fa: 'همه', tr: 'Tümü', en: 'All', ru: 'Все', ar: 'الكل' };
  const CLEAR = { fa: 'پاک کردن فیلتر', tr: 'Filtreyi temizle', en: 'Clear filter', ru: 'Сбросить фильтр', ar: 'مسح التصفية' };

  function L(map) {
    const loc = window.BIZDAVAR_I18N?.locale || document.documentElement.lang || 'fa';
    const lang = String(loc).slice(0, 2);
    return map[lang] || map.en || map.fa;
  }

  function pick(item) {
    const loc = window.BIZDAVAR_I18N?.locale || 'fa';
    const lang = String(loc).slice(0, 2);
    if (lang === 'tr') return item.tr || item.en || item.fa;
    if (lang === 'en') return item.en || item.tr || item.fa;
    if (lang === 'ru') return item.ru || item.en || item.fa;
    if (lang === 'ar') return item.ar || item.en || item.fa;
    return item.fa;
  }

  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function tile(id, leaves, labels) {
    return { id: id, leaves: leaves, fa: labels.fa, tr: labels.tr, en: labels.en, ru: labels.ru, ar: labels.ar };
  }

  const SUBNAV = {
    helmets: {
      layout: 'tiles',
      items: [
        tile('ff', ['کلاه تمام‌صورت'], { fa: 'کلاه تمام‌صورت', tr: 'Kapalı kask', en: 'Full-face', ru: 'Интеграл', ar: 'وجه كامل' }),
        tile('ic', ['کلاه با اینترکام'], { fa: 'با اینترکام', tr: 'Interkomlu', en: 'With intercom', ru: 'С интеркомом', ar: 'مع إنتركم' }),
        tile('flip', ['کلاه فک‌متحرک'], { fa: 'فک‌متحرک', tr: 'Çene açılır', en: 'Flip-up', ru: 'Модулярный', ar: 'فك متحرك' }),
        tile('mod', ['کلاه ماژولار'], { fa: 'ماژولار', tr: 'Modüler', en: 'Modular', ru: 'Модуль', ar: 'معياري' }),
        tile('open', ['کلاه باز'], { fa: 'کلاه باز', tr: 'Açık kask', en: 'Open-face', ru: 'Открытый', ar: 'مفتوح' }),
        tile('mx', ['کلاه کراس'], { fa: 'کراس', tr: 'Cross kask', en: 'MX / Cross', ru: 'Кросс', ar: 'كروس' }),
        tile('kid', ['کلاه کودک'], { fa: 'کودک', tr: 'Çocuk kask', en: 'Kids', ru: 'Детские', ar: 'أطفال' }),
        tile('visor', ['طلق کلاه', 'طلق آفتابی کلاه', 'پین‌لاک', 'مکانیزم طلق', 'لنز کلاه'], { fa: 'طلق و لوازم', tr: 'Cam / aksesuar', en: 'Visors', ru: 'Визоры', ar: 'واقي' }),
        tile('spare', ['قطعات یدکی کلاه', 'آستر داخلی', 'درپوش کلاه', 'تهویه کلاه', 'پد داخلی', 'پرده فک کلاه', 'پیچ کلاه', 'لوازم کلاه'], { fa: 'قطعات یدکی', tr: 'Yedek parça', en: 'Spare parts', ru: 'Запчасти', ar: 'قطع غيار' })
      ]
    },
    jackets: {
      layout: 'tiles',
      items: [
        tile('sum', ['کاپشن تابستانه'], { fa: 'تابستانه', tr: 'Yazlık', en: 'Summer', ru: 'Летние', ar: 'صيفي' }),
        tile('3s', ['کاپشن سه‌فصل'], { fa: 'سه‌فصل', tr: '3 mevsim', en: '3-season', ru: '3 сезона', ar: 'ثلاث فصول' }),
        tile('sea', ['کاپشن فصلی'], { fa: 'فصلی', tr: 'Mevsimlik', en: 'Seasonal', ru: 'Сезонные', ar: 'موسمي' }),
        tile('gtx', ['کاپشن گورتکس'], { fa: 'گورتکس', tr: 'Gore-Tex', en: 'Gore-Tex', ru: 'Gore-Tex', ar: 'Gore-Tex' }),
        tile('lea', ['کاپشن چرمی'], { fa: 'چرمی', tr: 'Deri', en: 'Leather', ru: 'Кожа', ar: 'جلد' }),
        tile('tex', ['کاپشن پارچه‌ای'], { fa: 'پارچه‌ای', tr: 'Kumaş', en: 'Textile', ru: 'Текстиль', ar: 'قماش' }),
        tile('soft', ['کاپشن سافت‌شل و حرارتی'], { fa: 'سافت‌شل', tr: 'Softshell', en: 'Softshell', ru: 'Softshell', ar: 'سوفتشل' }),
        tile('w', ['کاپشن زنانه'], { fa: 'زنانه', tr: 'Kadın', en: 'Women', ru: 'Женские', ar: 'نسائي' }),
        tile('kid', ['کاپشن کودک'], { fa: 'کودک', tr: 'Çocuk', en: 'Kids', ru: 'Детские', ar: 'أطفال' }),
        tile('suit', ['سرهمی'], { fa: 'سرهمی', tr: 'Tulum', en: 'Suit', ru: 'Комбинезон', ar: 'بدلة' })
      ]
    },
    gloves: {
      layout: 'tiles',
      items: [
        tile('sum', ['دستکش تابستانه'], { fa: 'تابستانه', tr: 'Yazlık', en: 'Summer', ru: 'Летние', ar: 'صيفي' }),
        tile('3s', ['دستکش سه‌فصل'], { fa: 'سه‌فصل', tr: '3 mevsim', en: '3-season', ru: '3 сезона', ar: 'ثلاث فصول' }),
        tile('sea', ['دستکش فصلی'], { fa: 'فصلی', tr: 'Mevsimlik', en: 'Seasonal', ru: 'Сезонные', ar: 'موسمي' }),
        tile('gtx', ['دستکش گورتکس'], { fa: 'گورتکس', tr: 'Gore-Tex', en: 'Gore-Tex', ru: 'Gore-Tex', ar: 'Gore-Tex' }),
        tile('lea', ['دستکش چرمی'], { fa: 'چرمی', tr: 'Deri', en: 'Leather', ru: 'Кожа', ar: 'جلد' }),
        tile('w', ['دستکش زنانه'], { fa: 'زنانه', tr: 'Kadın', en: 'Women', ru: 'Женские', ar: 'نسائي' }),
        tile('short', ['دستکش کوتاه'], { fa: 'کوتاه', tr: 'Kısa', en: 'Short', ru: 'Короткие', ar: 'قصير' }),
        tile('kid', ['دستکش کودک'], { fa: 'کودک', tr: 'Çocuk', en: 'Kids', ru: 'Детские', ar: 'أطفال' })
      ]
    },
    boots: {
      layout: 'tiles',
      items: [
        tile('sum', ['بوت تابستانه'], { fa: 'تابستانه', tr: 'Yazlık', en: 'Summer', ru: 'Летние', ar: 'صيفي' }),
        tile('3s', ['بوت سه‌فصل'], { fa: 'سه‌فصل', tr: '3 mevsim', en: '3-season', ru: '3 сезона', ar: 'ثلاث فصول' }),
        tile('sea', ['بوت فصلی'], { fa: 'فصلی', tr: 'Mevsimlik', en: 'Seasonal', ru: 'Сезонные', ar: 'موسمي' }),
        tile('gtx', ['بوت گورتکس'], { fa: 'گورتکس', tr: 'Gore-Tex', en: 'Gore-Tex', ru: 'Gore-Tex', ar: 'Gore-Tex' }),
        tile('w', ['بوت زنانه'], { fa: 'زنانه', tr: 'Kadın', en: 'Women', ru: 'Женские', ar: 'نسائي' }),
        tile('tall', ['بوت بلند'], { fa: 'ساق‌بلند', tr: 'Uzun', en: 'Tall', ru: 'Высокие', ar: 'طويل' }),
        tile('short', ['بوت کوتاه'], { fa: 'کوتاه', tr: 'Kısa', en: 'Short', ru: 'Короткие', ar: 'قصير' }),
        tile('parts', ['لوازم و قطعات بوت'], { fa: 'لوازم بوت', tr: 'Bot aksesuar', en: 'Boot parts', ru: 'Аксессуары', ar: 'قطع البوت' })
      ]
    },
    pants: {
      layout: 'tiles',
      items: [
        tile('sum', ['شلوار تابستانه'], { fa: 'تابستانه', tr: 'Yazlık', en: 'Summer', ru: 'Летние', ar: 'صيفي' }),
        tile('3s', ['شلوار سه‌فصل'], { fa: 'سه‌فصل', tr: '3 mevsim', en: '3-season', ru: '3 сезона', ar: 'ثلاث فصول' }),
        tile('sea', ['شلوار فصلی'], { fa: 'فصلی', tr: 'Mevsimlik', en: 'Seasonal', ru: 'Сезонные', ar: 'موسمي' }),
        tile('jean', ['شلوار جین'], { fa: 'جین', tr: 'Jean', en: 'Jeans', ru: 'Джинсы', ar: 'جينز' }),
        tile('gtx', ['شلوار گورتکس'], { fa: 'گورتکس', tr: 'Gore-Tex', en: 'Gore-Tex', ru: 'Gore-Tex', ar: 'Gore-Tex' }),
        tile('w', ['شلوار زنانه'], { fa: 'زنانه', tr: 'Kadın', en: 'Women', ru: 'Женские', ar: 'نسائي' }),
        tile('kid', ['شلوار کودک'], { fa: 'کودک', tr: 'Çocuk', en: 'Kids', ru: 'Детские', ar: 'أطفال' })
      ]
    },
    protection: {
      layout: 'tiles',
      items: [
        tile('air', ['ایربگ'], { fa: 'ایربگ', tr: 'Airbag', en: 'Airbag', ru: 'Подушка', ar: 'وسادة هوائية' }),
        tile('full', ['محافظ تمام‌بدن'], { fa: 'تمام‌بدن', tr: 'Full body', en: 'Full body', ru: 'Все тело', ar: 'جسم كامل' }),
        tile('knee', ['محافظ زانو و آرنج'], { fa: 'زانو و آرنج', tr: 'Diz / dirsek', en: 'Knee / elbow', ru: 'Колени', ar: 'ركبة ومرفق' }),
        tile('chest', ['محافظ سینه'], { fa: 'سینه', tr: 'Göğüs', en: 'Chest', ru: 'Грудь', ar: 'صدر' }),
        tile('back', ['محافظ کمر'], { fa: 'کمر', tr: 'Sırt', en: 'Back', ru: 'Спина', ar: 'ظهر' }),
        tile('neck', ['محافظ گردن'], { fa: 'گردن', tr: 'Boyun', en: 'Neck', ru: 'Шея', ar: 'رقبة' }),
        tile('belt', ['کمربند محافظ'], { fa: 'کمربند', tr: 'Kemer', en: 'Belt', ru: 'Пояс', ar: 'حزام' }),
        tile('hip', ['شورت و محافظ لگن'], { fa: 'لگن', tr: 'Kalça', en: 'Hip', ru: 'Бёдра', ar: 'ورك' }),
        tile('kid', ['محافظ کودک'], { fa: 'کودک', tr: 'Çocuk', en: 'Kids', ru: 'Детские', ar: 'أطفال' })
      ]
    },
    intercom: {
      layout: 'tiles',
      items: [
        tile('unit', ['دستگاه اینترکام'], { fa: 'دستگاه اینترکام', tr: 'Interkom', en: 'Intercom unit', ru: 'Интерком', ar: 'جهاز إنتركم' }),
        tile('cam', ['اینترکام دوربین‌دار'], { fa: 'با دوربین', tr: 'Kameralı', en: 'With camera', ru: 'С камерой', ar: 'مع كاميرا' }),
        tile('parts', ['لوازم اینترکام'], { fa: 'لوازم اینترکام', tr: 'Interkom aksesuar', en: 'Intercom parts', ru: 'Аксессуары', ar: 'ملحقات' }),
        tile('cam-parts', ['لوازم دوربین'], { fa: 'لوازم دوربین', tr: 'Kamera aksesuar', en: 'Camera parts', ru: 'К камере', ar: 'قطع الكاميرا' })
      ]
    },
    casual: {
      layout: 'tiles',
      items: [
        tile('tee', ['تیشرت'], { fa: 'تیشرت', tr: 'T-shirt', en: 'T-shirt', ru: 'Футболка', ar: 'تيشيرت' }),
        tile('sw', ['سویشرت'], { fa: 'سویشرت', tr: 'Sweatshirt', en: 'Sweatshirt', ru: 'Свитшот', ar: 'سويتشيرت' }),
        tile('cap', ['کلاه کپ'], { fa: 'کلاه کپ', tr: 'Şapka', en: 'Caps', ru: 'Кепки', ar: 'قبعة' }),
        tile('beanie', ['کلاه بافتنی'], { fa: 'بافتنی', tr: 'Bere', en: 'Beanies', ru: 'Шапки', ar: 'طاقية' }),
        tile('shoe', ['کفش'], { fa: 'کفش', tr: 'Ayakkabı', en: 'Shoes', ru: 'Обувь', ar: 'حذاء' }),
        tile('belt', ['کمربند'], { fa: 'کمربند', tr: 'Kemer', en: 'Belts', ru: 'Ремни', ar: 'حزام' }),
        tile('jk', ['کاپشن'], { fa: 'کاپشن روزمره', tr: 'Ceket', en: 'Casual jacket', ru: 'Куртка', ar: 'سترة' })
      ]
    },
    accessories: {
      layout: 'tiles',
      items: [
        tile('bag', ['کیف موتورسوار'], { fa: 'کیف', tr: 'Çanta', en: 'Bags', ru: 'Сумки', ar: 'حقائب' }),
        tile('neck', ['گردن‌پوش'], { fa: 'گردن‌پوش', tr: 'Boyunluk', en: 'Neck tubes', ru: 'Бафф', ar: 'رقبة' }),
        tile('bala', ['بالاکلاوا و ماسک'], { fa: 'بالاکلاوا', tr: 'Balaklava', en: 'Balaclava', ru: 'Балаклава', ar: 'بالاكلافا' }),
        tile('base-top', ['لباس زیر بالا'], { fa: 'لایه زیر بالا', tr: 'İç üst', en: 'Base top', ru: 'Верх', ar: 'طبقة عليا' }),
        tile('base-bot', ['لباس زیر پایین'], { fa: 'لایه زیر پایین', tr: 'İç alt', en: 'Base bottom', ru: 'Низ', ar: 'طبقة سفلى' }),
        tile('rain-top', ['بارانی بالا'], { fa: 'بارانی بالا', tr: 'Yağmurluk üst', en: 'Rain jacket', ru: 'Дождевик', ar: 'مطر علوي' }),
        tile('rain-bot', ['بارانی پایین'], { fa: 'بارانی پایین', tr: 'Yağmurluk alt', en: 'Rain pants', ru: 'Дождевые штаны', ar: 'مطر سفلي' }),
        tile('vest', ['جلیقه موتورسوار'], { fa: 'جلیقه', tr: 'Yelek', en: 'Vests', ru: 'Жилет', ar: 'سترة' }),
        tile('sock', ['جوراب'], { fa: 'جوراب', tr: 'Çorap', en: 'Socks', ru: 'Носки', ar: 'جوارب' }),
        tile('gift', ['هدیه'], { fa: 'هدیه', tr: 'Hediyelik', en: 'Gifts', ru: 'Подарки', ar: 'هدايا' })
      ]
    },
    'moto-parts': {
      layout: 'tiles',
      items: [
        tile('phone', ['نگهدارنده موبایل'], { fa: 'هلدر موبایل', tr: 'Telefon tutucu', en: 'Phone mount', ru: 'Держатель', ar: 'حامل هاتف' }),
        tile('oil', ['روغن موتور و زنجیر'], { fa: 'روغن و زنجیر', tr: 'Yağ / zincir', en: 'Oil & chain', ru: 'Масло', ar: 'زيت وسلسلة' }),
        tile('care', ['نظافت و نگهداری'], { fa: 'نظافت', tr: 'Bakım', en: 'Care', ru: 'Уход', ar: 'عناية' }),
        tile('cover', ['کاور موتور'], { fa: 'کاور', tr: 'Branda', en: 'Cover', ru: 'Чехол', ar: 'غطاء' }),
        tile('lock', ['قفل موتور'], { fa: 'قفل', tr: 'Kilit', en: 'Locks', ru: 'Замки', ar: 'قفل' }),
        tile('bag', ['کیف بغل', 'کیف روی باک', 'کیف سفر', 'کیف عقب', 'کیف عقب زین', 'کیف فرمان', 'کیف کمر و پا', 'کیف اسکوتر', 'کیف ابزار'], { fa: 'کیف روی موتور', tr: 'Motor çantası', en: 'Bike bags', ru: 'Сумки', ar: 'حقائب الدراجة' })
      ]
    },
    offroad: {
      layout: 'cols',
      groups: [
        {
          fa: 'کراس', tr: 'Motocross', en: 'Motocross', ru: 'Мотокросс', ar: 'موتو كروس',
          items: [
            tile('hel', ['کلاه ایمنی'], { fa: 'کلاه', tr: 'Kask', en: 'Helmets', ru: 'Шлемы', ar: 'خوذات' }),
            tile('gog', ['عینک'], { fa: 'عینک', tr: 'Goggle', en: 'Goggles', ru: 'Очки', ar: 'نظارات' }),
            tile('jer', ['جرسی'], { fa: 'جرسی', tr: 'Jersey', en: 'Jersey', ru: 'Джерси', ar: 'جيرسي' }),
            tile('pt', ['شلوار'], { fa: 'شلوار', tr: 'Pantolon', en: 'Pants', ru: 'Штаны', ar: 'بناطيل' }),
            tile('gl', ['دستکش'], { fa: 'دستکش', tr: 'Eldiven', en: 'Gloves', ru: 'Перчатки', ar: 'قفازات' }),
            tile('bt', ['بوت'], { fa: 'بوت', tr: 'Bot', en: 'Boots', ru: 'Боты', ar: 'بوت' }),
            tile('jk', ['کاپشن'], { fa: 'کاپشن', tr: 'Mont', en: 'Jackets', ru: 'Куртки', ar: 'سترات' }),
            tile('ax', ['لوازم کراس'], { fa: 'لوازم کراس', tr: 'MX aksesuar', en: 'MX extras', ru: 'MX аксессуары', ar: 'إكسسوار MX' })
          ]
        },
        {
          fa: 'کودک', tr: 'MX çocuk', en: 'MX kids', ru: 'Детский MX', ar: 'MX أطفال',
          items: [
            tile('k-bt', ['بوت کودک'], { fa: 'بوت کودک', tr: 'Çocuk bot', en: 'Kids boots', ru: 'Дет. боты', ar: 'بوت أطفال' }),
            tile('k-jer', ['جرسی کودک'], { fa: 'جرسی کودک', tr: 'Çocuk jersey', en: 'Kids jersey', ru: 'Дет. джерси', ar: 'جيرسي أطفال' }),
            tile('k-pt', ['شلوار کودک'], { fa: 'شلوار کودک', tr: 'Çocuk pantolon', en: 'Kids pants', ru: 'Дет. штаны', ar: 'بناطيل أطفال' }),
            tile('k-gl', ['دستکش کودک'], { fa: 'دستکش کودک', tr: 'Çocuk eldiven', en: 'Kids gloves', ru: 'Дет. перчатки', ar: 'قفاز أطفال' }),
            tile('k-pr', ['محافظ کودک'], { fa: 'محافظ کودک', tr: 'Çocuk koruma', en: 'Kids protection', ru: 'Дет. защита', ar: 'حماية أطفال' })
          ]
        },
        {
          fa: 'نوجوان', tr: 'MX genç', en: 'MX youth', ru: 'Подростки', ar: 'MX شباب',
          items: [
            tile('y-bt', ['بوت نوجوان'], { fa: 'بوت نوجوان', tr: 'Genç bot', en: 'Youth boots', ru: 'Бот. подростков', ar: 'بوت شباب' }),
            tile('y-jer', ['جرسی نوجوان'], { fa: 'جرسی نوجوان', tr: 'Genç jersey', en: 'Youth jersey', ru: 'Джерси', ar: 'جيرسي شباب' }),
            tile('y-pt', ['شلوار نوجوان'], { fa: 'شلوار نوجوان', tr: 'Genç pantolon', en: 'Youth pants', ru: 'Штаны', ar: 'بناطيل شباب' }),
            tile('y-gl', ['دستکش نوجوان'], { fa: 'دستکش نوجوان', tr: 'Genç eldiven', en: 'Youth gloves', ru: 'Перчатки', ar: 'قفاز شباب' }),
            tile('y-gog', ['عینک نوجوان'], { fa: 'عینک نوجوان', tr: 'Genç goggle', en: 'Youth goggles', ru: 'Очки', ar: 'نظارات شباب' }),
            tile('y-pr', ['محافظ نوجوان'], { fa: 'محافظ نوجوان', tr: 'Genç koruma', en: 'Youth protection', ru: 'Защита', ar: 'حماية شباب' })
          ]
        }
      ]
    }
  };

  function localizedCatalog() {
    return window.BIZDAVAR_I18N?.getSupplyCatalog
      ? window.BIZDAVAR_I18N.getSupplyCatalog(KEY)
      : window.AUTO_MOTO_CATALOG;
  }

  function catById(id) {
    return (localizedCatalog()?.categories || []).find(function (c) { return c.id === id; });
  }

  function leafImage(catId, leaves) {
    const cat = catById(catId);
    const series = cat && cat.series ? cat.series : [];
    const hit = series.find(function (s) { return s.image && leaves.indexOf(s.leafFa) !== -1; });
    return (hit && hit.image) || (cat && cat.image) || '/assets/images/auto-moto/categories/motorcycle-helmet.svg';
  }

  function path(src) {
    return window.resolvePath ? window.resolvePath(src) : src;
  }

  function setFilter(cat, leaves, label) {
    window.BIZDAVAR_SUPPLY_FILTER = window.BIZDAVAR_SUPPLY_FILTER || {};
    if (!cat) {
      delete window.BIZDAVAR_SUPPLY_FILTER[KEY];
    } else {
      window.BIZDAVAR_SUPPLY_FILTER[KEY] = { cat: cat, leaves: leaves || [], label: label || '' };
    }
    document.dispatchEvent(new Event('bizdavar:supply-filter'));
    paintChip();
    const nav = document.getElementById('autoCatNav');
    if (nav) {
      nav.querySelectorAll('[data-cat]').forEach(function (el) {
        el.classList.toggle('active', !!cat && el.getAttribute('data-cat') === cat);
      });
    }
    const target = document.getElementById('auto-cat-' + (cat || '')) || document.getElementById('auto-catalog');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function paintChip() {
    const toolbar = document.querySelector('.auto-catalog-toolbar');
    if (!toolbar) return;
    let chip = document.getElementById('autoLeafChip');
    const f = window.BIZDAVAR_SUPPLY_FILTER && window.BIZDAVAR_SUPPLY_FILTER[KEY];
    if (!f || !f.leaves || !f.leaves.length) {
      if (chip) chip.remove();
      return;
    }
    if (!chip) {
      chip = document.createElement('p');
      chip.id = 'autoLeafChip';
      chip.className = 'auto-leaf-chip';
      toolbar.appendChild(chip);
    }
    chip.innerHTML = '<span>' + esc(f.label || f.leaves[0]) + '</span><button type="button" data-clear-leaf="1">' + esc(L(CLEAR)) + '</button>';
  }

  function closePanel() {
    const panel = document.getElementById('autoSubnav');
    const nav = document.getElementById('autoCatNav');
    if (panel) {
      panel.hidden = true;
      panel.innerHTML = '';
    }
    if (nav) nav.querySelectorAll('[aria-expanded]').forEach(function (el) { el.setAttribute('aria-expanded', 'false'); el.classList.remove('is-open'); });
  }

  function renderPanel(catId) {
    const panel = document.getElementById('autoSubnav');
    const spec = SUBNAV[catId];
    if (!panel || !spec) {
      closePanel();
      return;
    }
    const allLabel = L(ALL);
    let html = '<div class="auto-subnav__inner">';
    html += '<a class="auto-subnav__all" href="#auto-cat-' + catId + '" data-sub-all="' + catId + '">' + esc(allLabel) + '</a>';
    if (spec.layout === 'cols') {
      html += '<div class="auto-subnav__cols">';
      spec.groups.forEach(function (g) {
        const figLeaves = (g.items[0] && g.items[0].leaves) || [];
        const img = path(leafImage(catId, figLeaves));
        html += '<div class="auto-subnav__col"><img class="auto-subnav__col-img" src="' + esc(img) + '" alt="" width="180" height="180" loading="lazy" decoding="async"><h3>' + esc(pick(g)) + '</h3><ul>';
        g.items.forEach(function (item) {
          html += '<li><a href="#auto-cat-' + catId + '&leaf=' + encodeURIComponent(item.id) + '" data-sub-cat="' + catId + '" data-sub-id="' + item.id + '">' + esc(pick(item)) + '</a></li>';
        });
        html += '</ul></div>';
      });
      html += '</div>';
    } else {
      html += '<div class="auto-subnav__grid">';
      spec.items.forEach(function (item) {
        const img = path(leafImage(catId, item.leaves));
        html += '<a class="auto-subnav__tile" href="#auto-cat-' + catId + '&leaf=' + encodeURIComponent(item.id) + '" data-sub-cat="' + catId + '" data-sub-id="' + item.id + '">' +
          '<img src="' + esc(img) + '" alt="" width="180" height="180" loading="lazy" decoding="async">' +
          '<span>' + esc(pick(item)) + '</span></a>';
      });
      html += '</div>';
    }
    html += '</div>';
    panel.innerHTML = html;
    panel.hidden = false;
  }

  function findItem(catId, itemId) {
    const spec = SUBNAV[catId];
    if (!spec) return null;
    if (spec.items) return spec.items.find(function (i) { return i.id === itemId; }) || null;
    let found = null;
    (spec.groups || []).forEach(function (g) {
      g.items.forEach(function (i) { if (i.id === itemId) found = i; });
    });
    return found;
  }

  function openCat(catId, itemEl) {
    const nav = document.getElementById('autoCatNav');
    if (nav) {
      nav.querySelectorAll('[aria-expanded]').forEach(function (el) {
        const on = el === itemEl;
        el.setAttribute('aria-expanded', on ? 'true' : 'false');
        el.classList.toggle('is-open', on);
        el.classList.toggle('active', on);
      });
    }
    renderPanel(catId);
  }

  function setupMotoSubnav() {
    const nav = document.getElementById('autoCatNav');
    if (!nav) return;
    let chrome = document.getElementById('autoShopChrome');
    let bar = document.getElementById('autoCatBar');
    if (!chrome) {
      chrome = document.createElement('div');
      chrome.id = 'autoShopChrome';
      chrome.className = 'auto-shop-chrome';
      if (!bar) {
        bar = document.createElement('div');
        bar.id = 'autoCatBar';
        bar.className = 'auto-cat-bar';
        bar.appendChild(nav);
        const panel = document.createElement('div');
        panel.id = 'autoSubnav';
        panel.className = 'auto-subnav';
        panel.hidden = true;
        panel.setAttribute('role', 'region');
        bar.appendChild(panel);
      }
      chrome.appendChild(bar);
    }
    const crumbs = document.getElementById('breadcrumbs');
    if (crumbs && crumbs.parentNode && chrome.previousElementSibling !== crumbs) {
      crumbs.parentNode.insertBefore(chrome, crumbs.nextSibling);
    }
    nav.classList.add('auto-cat-nav--shop');
    const cats = localizedCatalog()?.categories || [];
    const byId = {};
    cats.forEach(function (c) { byId[c.id] = c; });
    const labels = L(SHORT);
    nav.innerHTML = ORDER.filter(function (id) { return byId[id]; }).map(function (id) {
      const has = !!SUBNAV[id];
      return '<a href="#auto-cat-' + id + '" class="auto-cat-nav__item" data-cat="' + id + '"' +
        (has ? ' aria-expanded="false" aria-controls="autoSubnav"' : '') + '>' +
        esc(labels[id] || byId[id].title) + '</a>';
    }).join('');

    if (!bar || bar.dataset.bound === '1') return;
    bar.dataset.bound = '1';
    let hideTimer = 0;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    bar.addEventListener('mouseover', function (e) {
      if (!canHover) return;
      const item = e.target.closest('[data-cat]');
      if (!item || !bar.contains(item)) return;
      clearTimeout(hideTimer);
      openCat(item.getAttribute('data-cat'), item);
    });
    bar.addEventListener('mouseleave', function () {
      if (!canHover) return;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(closePanel, 160);
    });

    bar.addEventListener('click', function (e) {
      const clear = e.target.closest('[data-clear-leaf]');
      if (clear) return;
      const all = e.target.closest('[data-sub-all]');
      if (all) {
        e.preventDefault();
        closePanel();
        setFilter(all.getAttribute('data-sub-all'), [], '');
        return;
      }
      const tileEl = e.target.closest('[data-sub-id]');
      if (tileEl) {
        e.preventDefault();
        const cat = tileEl.getAttribute('data-sub-cat');
        const id = tileEl.getAttribute('data-sub-id');
        const item = findItem(cat, id);
        closePanel();
        setFilter(cat, item ? item.leaves : [], item ? pick(item) : '');
        return;
      }
      const item = e.target.closest('[data-cat]');
      if (!item) return;
      const cat = item.getAttribute('data-cat');
      if (!canHover && SUBNAV[cat]) {
        const open = item.classList.contains('is-open');
        if (!open) {
          e.preventDefault();
          openCat(cat, item);
          return;
        }
      }
      closePanel();
      setFilter(cat, [], L(SHORT)[cat] || '');
    });

    document.addEventListener('click', function (e) {
      const chipBtn = e.target.closest('[data-clear-leaf]');
      if (chipBtn) {
        setFilter(null, [], '');
        closePanel();
        return;
      }
      if (!e.target.closest('#autoCatBar')) closePanel();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel();
    });
  }

  function paintFaq() {
    const faq = localizedCatalog()?.faq;
    if (faq && typeof window.injectFaqSchema === 'function') window.injectFaqSchema(faq);
  }

  function paintThenHydrate(fn) {
    if (typeof fn === 'function') fn();
    paintFaq();
    setupMotoSubnav();
    paintChip();
    const ready = window.AUTO_MOTO_CATALOG_READY;
    if (ready && typeof ready.then === 'function') {
      ready.then(function () {
        if (typeof fn === 'function') fn();
        paintFaq();
        setupMotoSubnav();
        paintChip();
      });
    }
  }
  window.initAutoMotoPage = function () { return paintThenHydrate(init); };
  window.injectAutoMotoSchema = function () { return paintThenHydrate(schema); };
})();
