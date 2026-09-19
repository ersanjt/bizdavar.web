/**
 * Iranian ostrich leather — page copy + SEO for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js (data-after-seo) so ru/ar are not English clones.
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const pack = {
    fa: {
      seo: {
        seoTitle: 'چرم شترمرغ ایرانی | کراس از ۶.۵ دلار، رنگ‌شده ۸.۵، ساق از ۶ دلار',
        seoDescription: 'تولید صفر تا صد چرم شترمرغ در ایران: کراس از ۶.۵ دلار هر فوت مربع، رنگ‌شده از ۸.۵ دلار، ساق از ۶ دلار. صادرات به چین و ترکیه. استعلام عمده.',
        seoKeywords: 'چرم شترمرغ, چرم شترمرغ ایرانی, چرم کراس شترمرغ, ساق شترمرغ, خرید چرم شترمرغ, صادرات چرم اگزوتیک'
      },
      navLabel: 'چرم شترمرغ',
      navDesc: 'کراس از ۶.۵ دلار · ساق از ۶ دلار',
      explore: 'چرم شترمرغ ایرانی · از ۶ دلار',
      category: { label: 'چرم اگزوتیک', desc: 'چرم شترمرغ تولید ایران — کراس، رنگ‌شده و ساق' },
      item: {
        name: 'چرم شترمرغ',
        title: 'چرم شترمرغ ایرانی',
        desc: 'تولید صفر تا صد در ایران. کراس از ۶.۵ دلار هر فوت مربع، رنگ‌شده ۸.۵ دلار، ساق از ۶ دلار. صادرات به چین و ترکیه.',
        homeDesc: 'چرم شترمرغ ایرانی — از ۶ دلار',
        tags: ['چرم شترمرغ', 'کراس', 'صادرات']
      }
    },
    en: {
      seo: {
        seoTitle: 'Iranian Ostrich Leather Wholesale | Crust from $6.50/sq ft',
        seoDescription: 'Ostrich leather made end to end in Iran. Crust from $6.50 per sq ft, dyed from $8.50, legs from $6. Exported to China and Turkey. Wholesale inquiry.',
        seoKeywords: 'Iranian ostrich leather, ostrich crust leather, ostrich leg leather wholesale, ostrich skin supplier Iran, exotic leather export'
      },
      navLabel: 'Ostrich leather',
      navDesc: 'Crust from $6.50 · legs from $6',
      explore: 'Iranian ostrich leather · from $6',
      category: { label: 'Exotic leather', desc: 'Iranian ostrich leather — crust, dyed and leg' },
      item: {
        name: 'Ostrich leather',
        title: 'Iranian ostrich leather',
        desc: 'Produced end to end in Iran. Crust from $6.50 per sq ft, dyed $8.50, legs from $6. Exported to China and Turkey.',
        homeDesc: 'Iranian ostrich leather — from $6',
        tags: ['Ostrich', 'Crust', 'Export']
      }
    },
    tr: {
      seo: {
        seoTitle: 'İran devekuşu derisi toptan | krust $6.50/ft²’den',
        seoDescription: 'Devekuşu derisi İran’da sıfırdan yüze üretilir. Krust fit kare $6.50’den, boyalı $8.50’den, bacak $6’dan. Çin ve Türkiye’ye ihracat. Toptan teklif.',
        seoKeywords: 'devekuşu derisi, İran devekuşu derisi, devekuşu krust, devekuşu bacak derisi, devekuşu derisi toptan, egzotik deri ihracat'
      },
      navLabel: 'Devekuşu derisi',
      navDesc: 'Krust $6.50’den · bacak $6’dan',
      explore: 'İran devekuşu derisi · $6’dan',
      category: { label: 'Egzotik deri', desc: 'İran devekuşu derisi — krust, boyalı ve bacak' },
      item: {
        name: 'Devekuşu derisi',
        title: 'İran devekuşu derisi',
        desc: 'İran’da sıfırdan yüze üretim. Krust fit kare $6.50’den, boyalı $8.50, bacak $6’dan. Çin ve Türkiye’ye ihracat.',
        homeDesc: 'İran devekuşu derisi — $6’dan',
        tags: ['Devekuşu', 'Krust', 'İhracat']
      }
    },
    ru: {
      seo: {
        seoTitle: 'Иранская страусиная кожа оптом | краст от $6.50 за фут',
        seoDescription: 'Страусиная кожа полного цикла из Ирана. Краст от $6.50 за кв. фут, окрашенная от $8.50, нога от $6. Экспорт в Китай и Турцию. Оптовый запрос.',
        seoKeywords: 'страусиная кожа, иранская страусиная кожа, краст страуса, кожа ног страуса оптом, экзотическая кожа экспорт'
      },
      navLabel: 'Страусиная кожа',
      navDesc: 'Краст от $6.50 · нога от $6',
      explore: 'Иранская страусиная кожа · от $6',
      category: { label: 'Экзотическая кожа', desc: 'Иранская страусиная кожа — краст, окрашенная и нога' },
      item: {
        name: 'Страусиная кожа',
        title: 'Иранская страусиная кожа',
        desc: 'Полный цикл в Иране. Краст от $6.50 за кв. фут, окрашенная $8.50, нога от $6. Экспорт в Китай и Турцию.',
        homeDesc: 'Иранская страусиная кожа — от $6',
        tags: ['Страус', 'Краст', 'Экспорт']
      }
    },
    ar: {
      seo: {
        seoTitle: 'جلد نعام إيراني بالجملة | كراست من 6.5 دولار للقدم',
        seoDescription: 'إنتاج جلد النعام الإيراني من الصفر حتى المائة داخل إيران. كراست من 6.5 دولار للقدم المربع، مصبوغ من 8.5، وساق من 6 دولارات. تصدير إلى الصين وتركيا.',
        seoKeywords: 'جلد نعام, جلد نعام إيراني, جلد نعام كراست, جلد ساق النعام, مورد جلد نعام, تصدير جلد غريب'
      },
      navLabel: 'جلد النعام',
      navDesc: 'كراست من 6.5 دولار · ساق من 6',
      explore: 'جلد نعام إيراني · من 6 دولارات',
      category: { label: 'جلد غريب', desc: 'جلد نعام إيراني — كراست ومصبوغ وساق' },
      item: {
        name: 'جلد النعام',
        title: 'جلد نعام إيراني',
        desc: 'إنتاج من الصفر إلى المائة في إيران. الكراست من 6.5 دولار للقدم المربع، المصبوغ 8.5، والساق من 6 دولارات. تصدير إلى الصين وتركيا.',
        homeDesc: 'جلد نعام إيراني — من 6 دولارات',
        tags: ['نعام', 'كراست', 'تصدير']
      }
    }
  };

  const copy = {
    fa: {
      geoText: 'چرم شترمرغ تولید ایران — کراس، رنگ‌شده و ساق. صادرات به چین و ترکیه.',
      hero: {
        tag: 'تولید ایران · چرم اگزوتیک',
        title: 'چرم شترمرغ ایرانی — کراس، رنگ‌شده و ساق',
        desc: 'صفر تا صد در ایران. شروع قیمت کراس ۶.۵ دلار هر فوت مربع، رنگ‌شده ۸.۵ دلار، هر ساق از ۶ دلار. صادرات انجام‌شده به چین و ترکیه.'
      },
      nav: { about: 'درباره چرم', prices: 'قیمت', specs: 'مشخصات فنی', process: 'تولید', gallery: 'انبار و رنگ', goods: 'کاربرد', export: 'صادرات', faq: 'پرسش‌ها', contact: 'استعلام' },
      about: {
        title: 'چرم شترمرغ، تولید خودمان در ایران',
        body: 'این صفحه مخصوص <strong>چرم شترمرغ ایرانی</strong> است؛ محصولی که در ایران، از پوست تا چرم آماده برش، توسط ما تولید و تامین می‌شود. خریدار عمده پوست بدن (کراس یا رنگ‌شده، به فوت مربع) و ساق را جداگانه می‌گیرد.',
        body2: 'چرم شترمرغ به خاطر فولیکول پر (کویل) نرم، مقاوم در برابر ترک‌خوردگی خم و نسبت به چرم گاوی تنفس‌پذیرتر است. در دسته چرم‌های اگزوتیک کنار کروکودیل، مار و مارمولک قرار می‌گیرد؛ الگوی طبیعی‌اش جعل‌شدنی نیست. برای استعلام بچ، <a href="/pages/contact">فرم تماس</a> یا واتساپ را ببینید. بقیه محصولات مالکیتی در <a href="/pages/products">کاتالوگ محصولات</a> است.',
        specsTitle: 'آنچه عرضه می‌کنیم',
        imageAlt: 'نمونه‌های رنگی چرم شترمرغ ایرانی با الگوی کویل',
        thumb1Alt: 'پوست ساق شترمرغ کراس، طول حدود ۷۰ سانتی‌متر',
        thumb2Alt: 'کیف پول و جاکارتی چرم ساق شترمرغ مشکی',
        thumb3Alt: 'رول چرم کراس شترمرغ روی میز کارگاه',
        spec1: 'چرم بدن کراس — دباغی‌شده، هنوز رنگ نهایی نخورده',
        spec2: 'چرم بدن رنگ‌شده — پالت گسترده، آماده برش',
        spec3: 'ساق شترمرغ — فلس مرکزی درشت، مناسب بوت و خرده‌چرم',
        spec4: 'تولید صفر تا صد داخل ایران',
        spec5: 'صادرات انجام‌شده به چین و ترکیه',
        spec6: 'قیمت شروع؛ درجه، متراژ و رنگ روی پیش‌فاکتور',
        ctaContact: 'استعلام عمده',
        ctaCatalog: 'کاتالوگ محصولات'
      },
      prices: {
        eyebrow: 'شروع قیمت عمده',
        title: 'کراس، رنگ‌شده و ساق',
        desc: 'در عرف تجارت چرم، «پا» همان فوت مربع است. قیمت‌ها شروع‌اند، نه نرخ ثابت هر پوست.',
        crustName: 'چرم کراس',
        crustPrice: '$6.50',
        crustUnit: 'هر فوت مربع (پا) · شروع',
        crustDesc: 'دباغی تا کراس، رنگ طبیعی کرم. مناسب رنگرزی اختصاصی خریدار.',
        dyedName: 'چرم رنگ‌شده',
        dyedPrice: '$8.50',
        dyedUnit: 'هر فوت مربع (پا) · شروع',
        dyedDesc: 'رنگ‌شده و آماده برش. طیف رنگ در انبار و شوروم موجود است.',
        legName: 'ساق',
        legPrice: '$6',
        legUnit: 'هر ساق · شروع',
        legDesc: 'پوست ساق با ردیف فلس مرکزی. واحد فروش، عدد است نه فوت مربع.',
        note: 'نرخ نهایی به درجه تاج، متراژ قابل‌برش، رنگ، ضخامت و حجم سفارش بستگی دارد. پیش‌فاکتور بعد از مشخص شدن بچ صادر می‌شود.'
      },
      specs: {
        eyebrow: 'برای خریدار کارخانه',
        title: 'کویل، درجه، کراس و ساق',
        desc: 'اصطلاح‌ها همان زبان دباغ‌خانه و خریدار اگزوتیک است. عدد دقیق هر محموله روی پیش‌فاکتور می‌آید، نه به‌جای آن.',
        quillTitle: 'تاج و کویل',
        quillBody: 'کویل همان برجستگی گرد محل پر است. تاج (crown) مرکز پوست است؛ کویل درشت و یکدست اینجاست. در عمل حدود دوسوم پوست کویل کامل است و بقیه کویل ریز یا صاف. اگر متراژ «کویل کامل» می‌خواهید، حدود ۱٫۵ برابر سفارش دهید.',
        gradeTitle: 'درجه‌بندی',
        gradeBody: 'درجه بر ارزش برش تاج است، نه فقط رنگ. درجه ۱ تاج بدون عیب (کیف و روکش). درجه ۲ یک یا دو عیب. درجه ۳ عیب بیشتر؛ مناسب کفش، بوت و خرده‌چرم. کویل نارس یا فرورفته می‌تواند درجه را پایین بیاورد. درجه هر بچ را جدا اعلام می‌کنیم.',
        crustTitle: 'کراس در برابر رنگ‌شده',
        crustBody: 'کراس یعنی بعد از دباغی، ریتن، چربی‌دهی، خشک و نرم شدن؛ هنوز پرداخت و رنگ نهایی ندارد. رنگش کرم است و برای رنگرزی خریدار مناسب است. رنگ‌شده همان پوست بعد از رنگ و آماده برش. ضخامت معمول بازار برای پوست بدن حدود ۰٫۶ تا ۱٫۲ میلی‌متر است.',
        legTitle: 'ساق',
        legBody: 'ساق باریک است و یک ردیف فلس درشت در وسط دارد؛ دو طرف دانه‌ریزتر است. در نمونه‌های انبار، طول حدود ۷۰ سانتی‌متر و عرض در نقطه اندازه‌گیری حدود ۱۰ تا ۱۲ سانتی‌متر دیده می‌شود. برای بوت، بند ساعت، کیف پول و جاکارتی استفاده می‌شود.'
      },
      process: {
        eyebrow: 'صفر تا صد',
        title: 'تولید در ایران، نه پوست خام واسطه‌ای',
        desc: 'زنجیره داخل ایران است: از پوست تا کراس، رنگ و نمونه کالای ساخته‌شده. عکس‌های کارگاه و انبار همین صفحه از همین تولید است.',
        s1Title: '۱. پوست و آماده‌سازی',
        s1Desc: 'کیفیت کویل به رسیدگی پر هنگام برداشت وابسته است. پوست رسیده کویل گرد و پربدنه می‌دهد؛ پر سبز کویل پهن و توخالی می‌گذارد.',
        s2Title: '۲. دباغی تا کراس',
        s2Desc: 'پوست دباغی، ریتن و چربی‌دهی می‌شود، سپس خشک و نرم می‌گردد. خروجی، رول کراس کرم است که در کارگاه اندازه گرفته می‌شود.',
        s3Title: '۳. رنگ و پرداخت',
        s3Desc: 'رنگ نفوذی روی کراس، پالت از کرم و قهوه‌ای تا سبز، آبی، زرد و سرخابی. ساق و بدن جدا رنگ می‌شوند.',
        s4Title: '۴. کنترل و ارسال',
        s4Desc: 'متراژ، درجه و رنگ روی پیش‌فاکتور می‌آید. ارسال صادراتی به چین و ترکیه انجام شده؛ مقصد دیگر با هماهنگی لجستیک.'
      },
      gallery: {
        eyebrow: 'موجودی واقعی',
        title: 'کراس، ساق، رنگ و شوروم',
        desc: 'عکس‌ها از کارگاه، انبار و شوروم خودمان است؛ نه رندر کاتالوگ.',
        a1: 'طول رول کراس شترمرغ حدود یک متر',
        c1: 'رول کراس؛ طول نمونه حدود ۹۵ تا ۱۰۰ سانتی‌متر.',
        a2: 'پوست کراس آویزان کنار نمونه‌های رنگی در کارگاه',
        c2: 'کارگاه: دسته پوست کراس کنار نمونه رنگ و پر شترمرغ.',
        a3: 'دسته ساق کراس با عرض حدود ۱۰ تا ۱۲ سانتی‌متر',
        c3: 'دسته ساق کراس؛ عرض در نقطه متر حدود ۱۰ تا ۱۲ سانتی‌متر.',
        a4: 'پوست کامل شترمرغ با تاج کویل‌دار',
        c4: 'پوست کامل: تاج کویل‌دار در مرکز، لبه‌ها صاف‌تر.',
        a5: 'رک پوست بدن و ساق شترمرغ در رنگ‌های مختلف',
        c5: 'انبار: پوست بدن پایین، ساق روی ردیف بالا.',
        a6: 'نمایش سه‌طبقه پوست بدن، ساق و ورق رنگ‌شده',
        c6: 'سه طبقه: بدن، ساق، ورق رنگ‌شده.',
        a7: 'قاب آینه پوشیده از پوست رنگی شترمرغ در شوروم',
        c7: 'شوروم: طیف رنگ بدن و ساق، کاربرد در کفش و کیف.',
        a8: 'پوست سبز شترمرغ روی نیمکت شوروم',
        c8: 'پوست سبز روی نیمکت؛ کنار کمربند و چمدان.',
        a9: 'پوست سبز تیره کنار کیف و کفش چرمی',
        c9: 'پوست رنگ‌شده کنار کیف، کفش و کمربند.'
      },
      goods: {
        eyebrow: 'نمونه کاربرد',
        title: 'از همین پوست چه ساخته می‌شود',
        desc: 'کالای ساخته‌شده برای نشان دادن برش و دوخت است. فروش عمده این صفحه، پوست است نه کیف تکی.',
        a1: 'کلاسور چرم ساق شترمرغ در چند رنگ',
        c1: 'کلاسور ساق: قهوه‌ای، آبی، نارنجی، سرمه‌ای و سبز.',
        a2: 'کیف پول زرد با نوار ساق روی پوست بدن',
        c2: 'کیف پول زرد: کویل بدن به‌علاوه نوار فلس ساق.',
        a3: 'سه جاکارتی مشکی، کنیاک و قهوه‌ای روی پوست شترمرغ',
        c3: 'جاکارتی سه‌رنگ روی پوست بدن کویل‌دار.',
        a4: 'چیدمان کیف پول و نوار خام ساق شترمرغ',
        c4: 'از نوار خام ساق تا کیف آماده؛ مشکی، زرد و عسلی.'
      },
      export: {
        eyebrow: 'بازار صادرات',
        title: 'چین و ترکیه، و خریدار بعدی',
        body: 'محموله چرم شترمرغ به <strong>چین</strong> و <strong>ترکیه</strong> ارسال شده است. خریدار کارخانه کفش، کیف و خرده‌چرم می‌تواند کراس بگیرد و خودش رنگ کند، یا رنگ‌شده و ساق سفارش دهد. هماهنگی از <a href="/pages/contact">تماس</a> است؛ معرفی شرکت در <a href="/pages/about">درباره بیزدوار</a>.',
        chinaTitle: 'چین',
        chinaDesc: 'صادرات انجام شده. مناسب کارخانه‌های کیف، کفش و خرده‌چرم که متراژ و درجه را روی پیش‌فاکتور می‌خواهند.',
        turkeyTitle: 'ترکیه',
        turkeyDesc: 'صادرات انجام شده. مسیر لجستیک منطقه‌ای برای خریدار استانبول و آناتولی که چرم اگزوتیک کار می‌کند.',
        iranTitle: 'مبدأ ایران',
        iranDesc: 'تولید داخل است، نه ری‌برند پوست وارداتی. عکس انبار و کارگاه سند همین ادعا است.'
      },
      faq: {
        title: 'پرسش خریدار عمده',
        q1: 'پا یعنی فوت مربع؟',
        a1: 'بله. در عرف این تجارت، هر پا همان یک فوت مربع است. کراس از ۶.۵ دلار و رنگ‌شده از ۸.۵ دلار برای هر فوت مربع. ساق عددی است و از ۶ دلار شروع می‌شود.',
        q2: 'کراس را خودمان می‌توانیم رنگ کنیم؟',
        a2: 'بله. کراس برای همین است: چرم دباغی‌شده بدون رنگ نهایی. اگر رنگ آماده می‌خواهید، نرخ رنگ‌شده را بگیرید.',
        q3: 'درجه و متراژ را چطور اعلام می‌کنید؟',
        a3: 'درجه تاج، متراژ و در ساق ابعاد بچ روی پیش‌فاکتور نوشته می‌شود. عکس‌های متر فقط نمونه انبار است، تعهد ابعادی هر سفارش نیست.',
        q4: 'حداقل سفارش چقدر است؟',
        a4: 'حداقل ثابت روی سایت نمی‌گذاریم. حجم، درجه و مقصد را بگویید تا همان بچ قیمت شود. نمونه برای بررسی بافت قبل از سفارش حجمی ممکن است.',
        q5: 'به کدام کشورها فرستاده‌اید؟',
        a5: 'صادرات چرم شترمرغ به چین و ترکیه انجام شده است. مقصد دیگر را جدا بررسی می‌کنیم.'
      },
      related: {
        title: 'ادامه در سایت',
        products: 'کاتالوگ محصولات',
        productsDesc: 'چرم شترمرغ کنار بقیه تولیدات بیزدوار',
        contact: 'استعلام و پیش‌فاکتور',
        contactDesc: 'درجه، متراژ، رنگ و مقصد را بفرستید',
        about: 'درباره بیزدوار',
        aboutDesc: 'شرکت، از ۲۰۱۳، ایران و بازار منطقه'
      }
    },
    en: {
      geoText: 'Ostrich leather produced in Iran — crust, dyed and leg. Exported to China and Turkey.',
      hero: {
        tag: 'Made in Iran · Exotic leather',
        title: 'Iranian ostrich leather — crust, dyed and leg',
        desc: 'End to end in Iran. Crust from $6.50 per sq ft, dyed from $8.50, each leg from $6. Already exported to China and Turkey.'
      },
      nav: { about: 'The leather', prices: 'Prices', specs: 'Specs', process: 'Production', gallery: 'Stock & color', goods: 'Uses', export: 'Export', faq: 'FAQ', contact: 'Inquiry' },
      about: {
        title: 'Ostrich leather we produce in Iran',
        body: 'This page is for <strong>Iranian ostrich leather</strong>, produced and supplied by us in Iran from the skin through to cuttable leather. Wholesale buyers order body hides (crust or dyed, by the square foot) and legs separately.',
        body2: 'Ostrich leather stays soft because of the feather follicles (quills), resists cracking at flex points, and breathes better than cowhide. It sits with crocodile, snake and lizard as exotic leather — the quill pattern is not a printable fake. For a lot inquiry use the <a href="/pages/contact">contact form</a> or WhatsApp. Other owned lines are in the <a href="/pages/products">product catalog</a>.',
        specsTitle: 'What we supply',
        imageAlt: 'Colored Iranian ostrich leather swatches with quill pattern',
        thumb1Alt: 'Crust ostrich leg skins, about 70 cm long',
        thumb2Alt: 'Black ostrich-leg wallet and cardholder',
        thumb3Alt: 'Roll of ostrich crust leather on a workshop bench',
        spec1: 'Body crust — tanned, not yet finally dyed',
        spec2: 'Dyed body leather — wide palette, ready to cut',
        spec3: 'Ostrich leg — large central scales, for boots and small goods',
        spec4: 'Produced end to end in Iran',
        spec5: 'Exported to China and Turkey',
        spec6: 'Starting prices; grade, footage and color on the proforma',
        ctaContact: 'Wholesale inquiry',
        ctaCatalog: 'Product catalog'
      },
      prices: {
        eyebrow: 'Wholesale starting prices',
        title: 'Crust, dyed and leg',
        desc: 'In this trade a “foot” means one square foot. Prices are starting points, not a fixed rate per hide.',
        crustName: 'Crust leather',
        crustPrice: '$6.50',
        crustUnit: 'per sq ft · from',
        crustDesc: 'Tanned through to crust, natural cream. For the buyer’s own dye.',
        dyedName: 'Dyed leather',
        dyedPrice: '$8.50',
        dyedUnit: 'per sq ft · from',
        dyedDesc: 'Dyed and ready to cut. The color range is in stock and in the showroom.',
        legName: 'Leg',
        legPrice: '$6',
        legUnit: 'per leg · from',
        legDesc: 'Leg skin with the central scale row. Sold by the piece, not by the square foot.',
        note: 'The final rate depends on crown grade, cuttable area, color, thickness and volume. The proforma is issued once the lot is defined.'
      },
      specs: {
        eyebrow: 'For factory buyers',
        title: 'Quill, grade, crust and leg',
        desc: 'The terms are tannery language. Exact figures for each shipment go on the proforma — they do not replace it.',
        quillTitle: 'Crown and quill',
        quillBody: 'A quill is the round follicle where the feather sat. The crown is the center of the hide, where quills are large and even. In practice about two-thirds of a hide is full quill; the rest is partial quill or smooth. If you need full-quill footage, order about 1.5 times that area.',
        gradeTitle: 'Grading',
        gradeBody: 'Grade follows the cutting value of the crown, not the dye. Grade 1: crown free of defects (bags and upholstery). Grade 2: one or two defects. Grade 3: more defects — shoes, boots and small leather goods. Under-developed or sunken quills can drop a grade. We state the grade of each lot.',
        crustTitle: 'Crust versus dyed',
        crustBody: 'Crust is leather after tanning, retan, fatliquor, drying and softening, before the final color and finish. It is cream and suited to the buyer’s own dye. Dyed leather is the same hide after color, ready to cut. Typical commercial body thickness is about 0.6–1.2 mm.',
        legTitle: 'Leg',
        legBody: 'A leg is narrow, with one row of large scales down the center and a finer grain on the sides. Stock samples in the photos run about 70 cm long and about 10–12 cm wide at the measured point. Used for boots, watch straps, wallets and cardholders.'
      },
      process: {
        eyebrow: 'End to end',
        title: 'Made in Iran, not a rebranded raw skin',
        desc: 'The chain stays in Iran: skin to crust, dye, and sample finished goods. The workshop and stock photos on this page are from that production.',
        s1Title: '1. Skin and preparation',
        s1Desc: 'Quill quality depends on feather ripeness at harvest. A ripe feather leaves a round, full quill; a green feather leaves a flat, open one.',
        s2Title: '2. Tanning to crust',
        s2Desc: 'The skin is tanned, retanned and fatliquored, then dried and softened. The output is a cream crust roll, measured in the workshop.',
        s3Title: '3. Color and finish',
        s3Desc: 'Dye goes through the crust. The palette runs from cream and brown to green, blue, yellow and magenta. Legs and body hides are dyed separately.',
        s4Title: '4. Check and ship',
        s4Desc: 'Footage, grade and color are on the proforma. Export shipments to China and Turkey are done; other destinations are arranged with logistics.'
      },
      gallery: {
        eyebrow: 'Real stock',
        title: 'Crust, legs, color and showroom',
        desc: 'Photos are from our workshop, warehouse and showroom — not catalog renders.',
        a1: 'Ostrich crust roll about one metre long',
        c1: 'Crust roll; this sample is about 95–100 cm long.',
        a2: 'Crust hides hanging beside color samples in the workshop',
        c2: 'Workshop: crust hides next to color samples and ostrich feathers.',
        a3: 'Stack of crust legs about 10–12 cm wide',
        c3: 'Crust leg stack; about 10–12 cm wide at the tape.',
        a4: 'Full ostrich hide with a quilled crown',
        c4: 'Full hide: quilled crown in the center, smoother edges.',
        a5: 'Racks of ostrich body hides and legs in many colors',
        c5: 'Warehouse: body hides below, legs on the upper bar.',
        a6: 'Three-tier display of body, leg and dyed sheets',
        c6: 'Three tiers: body, leg, dyed sheets.',
        a7: 'Mirror framed with colored ostrich skins in the showroom',
        c7: 'Showroom: body and leg colors, used in shoes and bags.',
        a8: 'Green ostrich hide on a showroom bench',
        c8: 'Green hide on the bench, beside belts and luggage.',
        a9: 'Dark green hide beside leather bags and shoes',
        c9: 'Dyed hide beside bags, shoes and belts.'
      },
      goods: {
        eyebrow: 'What it becomes',
        title: 'What this skin is cut into',
        desc: 'Finished pieces show cutting and stitching. Wholesale on this page is the skin, not a single wallet.',
        a1: 'Ostrich-leg document folders in several colors',
        c1: 'Leg folders: brown, blue, orange, navy and green.',
        a2: 'Yellow wallet with a leg strip on a body hide',
        c2: 'Yellow wallet: body quill plus a leg-scale strip.',
        a3: 'Black, cognac and brown cardholders on an ostrich hide',
        c3: 'Three cardholders on a quilled body hide.',
        a4: 'Wallets laid out with a raw ostrich-leg strip',
        c4: 'From a raw leg strip to finished wallets — black, yellow and honey.'
      },
      export: {
        eyebrow: 'Export markets',
        title: 'China and Turkey, and the next buyer',
        body: 'Ostrich leather has already shipped to <strong>China</strong> and <strong>Turkey</strong>. A shoe, bag or small-leather factory can take crust and dye it, or order dyed hides and legs. Start from <a href="/pages/contact">contact</a>. Company background is on <a href="/pages/about">About Bizdavar</a>.',
        chinaTitle: 'China',
        chinaDesc: 'Export completed. For bag, shoe and small-leather factories that want footage and grade on the proforma.',
        turkeyTitle: 'Turkey',
        turkeyDesc: 'Export completed. A regional logistics path for Istanbul and Anatolian buyers working exotic leather.',
        iranTitle: 'Origin: Iran',
        iranDesc: 'Production is domestic, not a relabel of imported skins. The warehouse and workshop photos are the evidence.'
      },
      faq: {
        title: 'Wholesale questions',
        q1: 'Does “foot” mean a square foot?',
        a1: 'Yes. In this trade one foot is one square foot. Crust starts at $6.50 and dyed at $8.50 per square foot. Legs are priced per piece, from $6.',
        q2: 'Can we dye the crust ourselves?',
        a2: 'Yes. That is what crust is for: tanned leather without the final color. If you want ready color, take the dyed rate.',
        q3: 'How do you state grade and area?',
        a3: 'Crown grade, area, and for legs the lot dimensions, are written on the proforma. Tape photos are stock samples, not a size guarantee for every order.',
        q4: 'What is the minimum order?',
        a4: 'We do not publish a fixed minimum. Send volume, grade and destination and that lot is priced. A sample for hand-feel before a volume order is possible.',
        q5: 'Which countries have you shipped to?',
        a5: 'Ostrich leather has been exported to China and Turkey. Other destinations are checked case by case.'
      },
      related: {
        title: 'Continue on the site',
        products: 'Product catalog',
        productsDesc: 'Ostrich leather beside other Bizdavar production',
        contact: 'Inquiry and proforma',
        contactDesc: 'Send grade, footage, color and destination',
        about: 'About Bizdavar',
        aboutDesc: 'The company since 2013 — Iran and the region'
      }
    }
  };

  copy.tr = {
    geoText: 'İran’da üretilen devekuşu derisi — krust, boyalı ve bacak. Çin ve Türkiye’ye ihracat.',
    hero: {
      tag: 'İran üretimi · Egzotik deri',
      title: 'İran devekuşu derisi — krust, boyalı ve bacak',
      desc: 'İran’da sıfırdan yüze. Krust fit kare 6,50 dolardan, boyalı 8,50 dolardan, bacak 6 dolardan. Çin ve Türkiye’ye ihracat yapıldı.'
    },
    nav: { about: 'Deri', prices: 'Fiyat', specs: 'Teknik', process: 'Üretim', gallery: 'Stok ve renk', goods: 'Kullanım', export: 'İhracat', faq: 'Sorular', contact: 'Teklif' },
    about: {
      title: 'İran’da kendi ürettiğimiz devekuşu derisi',
      body: 'Bu sayfa <strong>İran devekuşu derisi</strong> içindir; deri, İran’da ham deriden kesime hazır hale kadar tarafımızdan üretilir ve tedarik edilir. Toptan alıcı gövde derisini (krust veya boyalı, fit kare) ve bacakları ayrı sipariş eder.',
      body2: 'Devekuşu derisi tüy folikülü (quil) sayesinde yumuşak kalır, büküm yerinde kolay çatlamaz ve sığır derisine göre daha iyi nefes alır. Timsah, yılan ve kertenkele ile birlikte egzotik deridir; quil deseni basılamaz. Parti teklifi için <a href="/pages/contact">iletişim formu</a> veya WhatsApp. Diğer ürünler <a href="/pages/products">ürün kataloğunda</a>.',
      specsTitle: 'Ne sunuyoruz',
      imageAlt: 'Quil desenli renkli İran devekuşu derisi numuneleri',
      thumb1Alt: 'Krust devekuşu bacak derisi, yaklaşık 70 cm',
      thumb2Alt: 'Siyah bacak derisinden cüzdan ve kartlık',
      thumb3Alt: 'Atölye tezgahında krust devekuşu derisi rulosu',
      spec1: 'Gövde krust — tabaklanmış, henüz son renk yok',
      spec2: 'Boyalı gövde — geniş palet, kesime hazır',
      spec3: 'Bacak — ortada iri pul, bot ve küçük deri için',
      spec4: 'İran’da sıfırdan yüze üretim',
      spec5: 'Çin ve Türkiye’ye ihracat yapıldı',
      spec6: 'Başlangıç fiyatı; kalite, metraj ve renk proformada',
      ctaContact: 'Toptan teklif',
      ctaCatalog: 'Ürün kataloğu'
    },
    prices: {
      eyebrow: 'Toptan başlangıç',
      title: 'Krust, boyalı ve bacak',
      desc: 'Bu ticarette «ayak» bir fit karedir. Fiyatlar başlangıçtır, her post için sabit kur değildir.',
      crustName: 'Krust deri',
      crustPrice: '$6.50',
      crustUnit: 'fit kare · başlangıç',
      crustDesc: 'Krusta kadar tabaklanmış, doğal krem. Alıcının kendi boyası için.',
      dyedName: 'Boyalı deri',
      dyedPrice: '$8.50',
      dyedUnit: 'fit kare · başlangıç',
      dyedDesc: 'Boyalı ve kesime hazır. Renk skalası depo ve showroom’da.',
      legName: 'Bacak',
      legPrice: '$6',
      legUnit: 'bacak başı · başlangıç',
      legDesc: 'Ortada pul sırası olan bacak derisi. Adet satılır, fit kare değil.',
      note: 'Son fiyat taç kalitesi, kesilebilir alan, renk, kalınlık ve hacme bağlıdır. Proforma parti netleşince kesilir.'
    },
    specs: {
      eyebrow: 'Fabrika alıcısı için',
      title: 'Quil, kalite, krust ve bacak',
      desc: 'Terimler tabakhane dilidir. Her sevkiyatın rakamı proformadadır; onun yerine geçmez.',
      quillTitle: 'Taç ve quil',
      quillBody: 'Quil, tüyün oturduğu yuvarlak foliküldür. Taç (crown) postun merkezidir; iri ve düzgün quil buradadır. Pratikte postun yaklaşık üçte ikisi tam quildir, kalanı ince quil veya düzdür. Tam quil metrajı istiyorsanız yaklaşık 1,5 kat alan sipariş edin.',
      gradeTitle: 'Kalite',
      gradeBody: 'Kalite tacın kesim değerine bakar, yalnızca renge değil. 1. kalite: taç hatasız (çanta ve döşeme). 2. kalite: bir veya iki hata. 3. kalite: daha fazla hata — ayakkabı, bot ve küçük deri. Olgunlaşmamış veya çökük quil kaliteyi düşürebilir. Her partinin kalitesini ayrıca yazarız.',
      crustTitle: 'Krust ve boyalı',
      crustBody: 'Krust; tabak, retenaj, yağlama, kurutma ve yumuşatmadan sonra, son renk ve finişten öncedir. Kremdir, alıcının boyası için uygundur. Boyalı deri aynı postun renkten sonraki, kesime hazır halidir. Gövde için piyasada tipik kalınlık yaklaşık 0,6–1,2 mm’dir.',
      legTitle: 'Bacak',
      legBody: 'Bacak dardır; ortada iri pul sırası, yanlarda daha ince tane vardır. Depo numunelerinde uzunluk yaklaşık 70 cm, ölçü noktasında genişlik yaklaşık 10–12 cm’dir. Bot, saat kayışı, cüzdan ve kartlık için kullanılır.'
    },
    process: {
      eyebrow: 'Sıfırdan yüze',
      title: 'İran’da üretim, aracı ham post değil',
      desc: 'Zincir İran’dadır: posttan krusta, boyaya ve örnek mamule. Bu sayfadaki atölye ve depo fotoğrafları bu üretimdendir.',
      s1Title: '1. Post ve hazırlık',
      s1Desc: 'Quil kalitesi, hasatta tüyün olgunluğuna bağlıdır. Olgun tüy yuvarlak ve dolgun quil bırakır; yeşil tüy yassı ve açık quil bırakır.',
      s2Title: '2. Krusta kadar tabak',
      s2Desc: 'Post tabaklanır, retenaj ve yağlanır, sonra kurutulup yumuşatılır. Çıktı, atölyede ölçülen krem krust rulosudur.',
      s3Title: '3. Renk ve finiş',
      s3Desc: 'Boya krustun içine işler. Palet krem ve kahveden yeşil, mavi, sarı ve macentaya gider. Bacak ve gövde ayrı boyanır.',
      s4Title: '4. Kontrol ve sevkiyat',
      s4Desc: 'Metraj, kalite ve renk proformadadır. Çin ve Türkiye’ye ihracat yapılmıştır; başka varış lojistikle konuşulur.'
    },
    gallery: {
      eyebrow: 'Gerçek stok',
      title: 'Krust, bacak, renk ve showroom',
      desc: 'Fotoğraflar kendi atölye, depo ve showroom’umuzdan — katalog render’ı değil.',
      a1: 'Yaklaşık bir metre krust devekuşu rulosu',
      c1: 'Krust rulo; bu numune yaklaşık 95–100 cm.',
      a2: 'Atölyede renk numunelerinin yanında asılı krust',
      c2: 'Atölye: krust postlar, renk numunesi ve devekuşu tüyü.',
      a3: 'Yaklaşık 10–12 cm genişliğinde krust bacak destesi',
      c3: 'Krust bacak destesi; metrede yaklaşık 10–12 cm genişlik.',
      a4: 'Quilli taçlı tam devekuşu postu',
      c4: 'Tam post: merkezde quilli taç, kenarlar daha düz.',
      a5: 'Çok renkli gövde ve bacak rafları',
      c5: 'Depo: altta gövde, üst çubukta bacak.',
      a6: 'Gövde, bacak ve boyalı tabaka — üç kat',
      c6: 'Üç kat: gövde, bacak, boyalı tabaka.',
      a7: 'Showroom’da renkli deriyle çevrili ayna',
      c7: 'Showroom: gövde ve bacak renkleri, ayakkabı ve çantada kullanım.',
      a8: 'Showroom sehpasında yeşil devekuşu postu',
      c8: 'Sehpadaki yeşil post; kemer ve valiz yanında.',
      a9: 'Koyu yeşil post, çanta ve ayakkabı yanında',
      c9: 'Boyalı post; çanta, ayakkabı ve kemer yanında.'
    },
    goods: {
      eyebrow: 'Kullanım örneği',
      title: 'Bu deriden ne kesilir',
      desc: 'Mamul, kesim ve dikişi göstermek içindir. Bu sayfanın toptanı posttur, tek cüzdan değil.',
      a1: 'Birkaç renkte bacak derisi evraklık',
      c1: 'Bacak evraklık: kahve, mavi, turuncu, lacivert ve yeşil.',
      a2: 'Gövde postu üzerinde bacak şeritli sarı cüzdan',
      c2: 'Sarı cüzdan: gövde quil’i artı bacak pul şeridi.',
      a3: 'Devekuşu postu üzerinde üç kartlık',
      c3: 'Quilli gövde üzerinde siyah, konyak ve kahve kartlık.',
      a4: 'Ham bacak şeridi ve cüzdanlar',
      c4: 'Ham bacak şeridinden mamule — siyah, sarı ve bal rengi.'
    },
    export: {
      eyebrow: 'İhracat',
      title: 'Çin ve Türkiye, ve sonraki alıcı',
      body: 'Devekuşu derisi <strong>Çin</strong> ve <strong>Türkiye</strong>’ye gönderildi. Ayakkabı, çanta veya küçük deri fabrikası krust alıp kendi boyayabilir ya da boyalı post ve bacak sipariş eder. Başlangıç <a href="/pages/contact">iletişim</a>. Şirket <a href="/pages/about">Bizdavar hakkında</a>.',
      chinaTitle: 'Çin',
      chinaDesc: 'İhracat yapıldı. Metraj ve kaliteyi proformada isteyen çanta, ayakkabı ve küçük deri fabrikaları için.',
      turkeyTitle: 'Türkiye',
      turkeyDesc: 'İhracat yapıldı. Egzotik deri çalışan İstanbul ve Anadolu alıcısı için bölgesel lojistik.',
      iranTitle: 'Menşe İran',
      iranDesc: 'Üretim yerli; ithal postun yeniden markalanması değil. Depo ve atölye fotoğrafları bu iddianın belgesidir.'
    },
    faq: {
      title: 'Toptan sorular',
      q1: 'Ayak, fit kare mi?',
      a1: 'Evet. Bu ticarette bir ayak bir fit karedir. Krust fit kare 6,50 dolardan, boyalı 8,50 dolardan başlar. Bacak adettir ve 6 dolardan başlar.',
      q2: 'Krustu kendimiz boyayabilir miyiz?',
      a2: 'Evet. Krust bunun içindir: son rengi olmayan tabaklanmış deri. Hazır renk istiyorsanız boyalı fiyatı alın.',
      q3: 'Kalite ve metraj nasıl yazılır?',
      a3: 'Taç kalitesi, metraj ve bacakta parti ölçüsü proformaya yazılır. Metre fotoğrafları depo numunesidir, her siparişin ölçü taahhüdü değildir.',
      q4: 'Minimum sipariş nedir?',
      a4: 'Sitede sabit minimum yok. Hacim, kalite ve varış noktasını yazın, o parti fiyatlanır. Hacimli siparişten önce doku numunesi mümkün olabilir.',
      q5: 'Hangi ülkelere gönderdiniz?',
      a5: 'Devekuşu derisi Çin ve Türkiye’ye ihraç edildi. Başka varış ayrı incelenir.'
    },
    related: {
      title: 'Sitede devam',
      products: 'Ürün kataloğu',
      productsDesc: 'Devekuşu derisi, diğer Bizdavar üretiminin yanında',
      contact: 'Teklif ve proforma',
      contactDesc: 'Kalite, metraj, renk ve varış noktasını gönderin',
      about: 'Bizdavar hakkında',
      aboutDesc: '2013’ten beri şirket — İran ve bölge'
    }
  };

  copy.ar = {
    geoText: 'جلد نعام مُنتَج في إيران — كراست ومصبوغ وساق. تصدير إلى الصين وتركيا.',
    hero: {
      tag: 'إنتاج إيران · جلد غريب',
      title: 'جلد نعام إيراني — كراست ومصبوغ وساق',
      desc: 'من الصفر إلى المائة داخل إيران. الكراست من 6.5 دولار للقدم المربع، المصبوغ من 8.5، والساق من 6 دولارات. تم التصدير إلى الصين وتركيا.'
    },
    nav: { about: 'عن الجلد', prices: 'السعر', specs: 'مواصفات', process: 'الإنتاج', gallery: 'المخزون والألوان', goods: 'الاستخدام', export: 'التصدير', faq: 'أسئلة', contact: 'استفسار' },
    about: {
      title: 'جلد نعام ننتجه نحن في إيران',
      body: 'هذه الصفحة لـ<strong>جلد النعام الإيراني</strong>، ننتجه ونورّده في إيران من الجلد الخام حتى يصبح جاهزًا للقص. يطلب تاجر الجملة جلد الجسم (كراست أو مصبوغ، بالقدم المربع) والساق كلًا على حدة.',
      body2: 'يبقى جلد النعام ليّنًا بسبب بصيلات الريش (الكويل)، ويقاوم التشقق عند الثني، ويتنفس أفضل من جلد البقر. يصنَّف مع التمساح والثعبان والسحلية كجلد غريب، ونقش الكويل لا يُطبع. لطلب دفعة استخدم <a href="/pages/contact">نموذج الاتصال</a> أو واتساب. بقية منتجاتنا في <a href="/pages/products">كتالوج المنتجات</a>.',
      specsTitle: 'ماذا نعرض',
      imageAlt: 'عينات ملونة من جلد نعام إيراني بنقش الكويل',
      thumb1Alt: 'جلد ساق نعام كراست بطول نحو 70 سم',
      thumb2Alt: 'محفظة وحافظة بطاقات من جلد ساق النعام الأسود',
      thumb3Alt: 'لفة جلد نعام كراست على طاولة الورشة',
      spec1: 'جلد الجسم كراست — مدبوغ ولم يُصبغ الصبغ النهائي',
      spec2: 'جلد الجسم المصبوغ — لوحة واسعة، جاهز للقص',
      spec3: 'ساق النعام — حراشف وسطى كبيرة، للبوت والجلود الصغيرة',
      spec4: 'إنتاج من الصفر إلى المائة داخل إيران',
      spec5: 'تصدير منفَّذ إلى الصين وتركيا',
      spec6: 'سعر بداية؛ الدرجة والمساحة واللون على الفاتورة الأولية',
      ctaContact: 'استفسار جملة',
      ctaCatalog: 'كتالوج المنتجات'
    },
    prices: {
      eyebrow: 'بداية سعر الجملة',
      title: 'كراست ومصبوغ وساق',
      desc: 'في عرف هذه التجارة، «القدم» يعني قدمًا مربعًا. الأسعار بداية وليست سعرًا ثابتًا لكل جلد.',
      crustName: 'جلد كراست',
      crustPrice: '$6.50',
      crustUnit: 'للقدم المربع · بداية',
      crustDesc: 'مدبوغ حتى الكراست، لون كريمي طبيعي. لصبغ المشتري الخاص.',
      dyedName: 'جلد مصبوغ',
      dyedPrice: '$8.50',
      dyedUnit: 'للقدم المربع · بداية',
      dyedDesc: 'مصبوغ وجاهز للقص. طيف الألوان في المخزن وصالة العرض.',
      legName: 'الساق',
      legPrice: '$6',
      legUnit: 'للساق · بداية',
      legDesc: 'جلد ساق بصف حراشف في الوسط. يُباع بالقطعة لا بالقدم المربع.',
      note: 'السعر النهائي يعتمد على درجة التاج، والمساحة القابلة للقص، واللون، والسماكة، والحجم. تُصدر الفاتورة الأولية بعد تحديد الدفعة.'
    },
    specs: {
      eyebrow: 'لمشتري المصنع',
      title: 'الكويل والدرجة والكراست والساق',
      desc: 'المصطلحات لغة المدبغة. أرقام كل شحنة تُكتب على الفاتورة الأولية ولا تغني عنها.',
      quillTitle: 'التاج والكويل',
      quillBody: 'الكويل هو البصيلة المستديرة التي كان فيها الريش. التاج مركز الجلد حيث الكويل كبير ومتجانس. عمليًا نحو ثلثي الجلد كويل كامل والباقي كويل ناعم أو أملس. إذا أردتم مساحة كويل كامل فاطلبوا نحو 1.5 ضعف تلك المساحة.',
      gradeTitle: 'الدرجات',
      gradeBody: 'الدرجة تتبع قيمة قص التاج لا اللون وحده. الدرجة 1: تاج بلا عيوب (حقائب وتنجيد). الدرجة 2: عيب أو عيبان. الدرجة 3: عيوب أكثر — أحذية وبوت وجلود صغيرة. الكويل غير الناضج أو الغائر قد يُنزل الدرجة. نذكر درجة كل دفعة.',
      crustTitle: 'الكراست مقابل المصبوغ',
      crustBody: 'الكراست هو الجلد بعد الدباغة وإعادة الدباغة والتشحيم والتجفيف والتليين، وقبل اللون النهائي والتشطيب. لونه كريمي ويصلح لصبغ المشتري. المصبوغ هو الجلد نفسه بعد اللون، جاهزًا للقص. السماكة الشائعة لجلد الجسم في السوق نحو 0.6 إلى 1.2 مم.',
      legTitle: 'الساق',
      legBody: 'الساق ضيقة وفي وسطها صف حراشف كبيرة والجوانب أدق حبّة. في عينات المخزن الطول نحو 70 سم والعرض عند نقطة القياس نحو 10 إلى 12 سم. تُستخدم للبوت وسوار الساعة والمحفظة وحافظة البطاقات.'
    },
    process: {
      eyebrow: 'من الصفر إلى المائة',
      title: 'إنتاج في إيران، لا جلد خام بوساطة',
      desc: 'السلسلة داخل إيران: من الجلد إلى الكراست والصبغ وعينة المنتج الجاهز. صور الورشة والمخزن في هذه الصفحة من هذا الإنتاج.',
      s1Title: '١. الجلد والتحضير',
      s1Desc: 'جودة الكويل تتعلق بنضج الريشة عند الحصاد. الريشة الناضجة تترك كويلًا مستديرًا ممتلئًا؛ الريشة الخضراء تترك كويلًا مسطحًا مفتوحًا.',
      s2Title: '٢. الدباغة حتى الكراست',
      s2Desc: 'يُدبغ الجلد ويُعاد دبغه ويُشحَّم ثم يُجفف ويُليَّن. الناتج لفة كراست كريمية تُقاس في الورشة.',
      s3Title: '٣. اللون والتشطيب',
      s3Desc: 'الصبغ ينفذ في الكراست. اللوحة من الكريمي والبني إلى الأخضر والأزرق والأصفر والماجنتا. الساق والجسم يُصبغان منفصلين.',
      s4Title: '٤. الفحص والشحن',
      s4Desc: 'المساحة والدرجة واللون على الفاتورة الأولية. تم الشحن إلى الصين وتركيا؛ الوجهات الأخرى تُرتَّب مع اللوجستيات.'
    },
    gallery: {
      eyebrow: 'مخزون حقيقي',
      title: 'كراست وساق وألوان وصالة عرض',
      desc: 'الصور من ورشتنا ومخزننا وصالة عرضنا — وليست صور كتالوج مصنوعة.',
      a1: 'لفة كراست نعام طولها نحو متر',
      c1: 'لفة كراست؛ هذه العينة نحو 95 إلى 100 سم.',
      a2: 'جلود كراست معلّقة بجانب عينات اللون في الورشة',
      c2: 'الورشة: جلود كراست بجانب عينات اللون وريش النعام.',
      a3: 'رزمة سيقان كراست بعرض نحو 10 إلى 12 سم',
      c3: 'رزمة ساق الكراست؛ العرض عند الشريط نحو 10 إلى 12 سم.',
      a4: 'جلد نعام كامل بتاج ذي كويل',
      c4: 'جلد كامل: تاج الكويل في الوسط والحواف أنعم.',
      a5: 'حوامل جلود الجسم والساق بألوان متعددة',
      c5: 'المخزن: جلد الجسم في الأسفل والساق على القضيب العلوي.',
      a6: 'عرض من ثلاث طبقات: جسم وساق وألواح مصبوغة',
      c6: 'ثلاث طبقات: جسم، ساق، ألواح مصبوغة.',
      a7: 'مرآة محاطة بجلود نعام ملونة في صالة العرض',
      c7: 'صالة العرض: ألوان الجسم والساق، واستخدام في الأحذية والحقائب.',
      a8: 'جلد نعام أخضر على مقعد صالة العرض',
      c8: 'الجلد الأخضر على المقعد، بجانب الأحزمة والحقائب.',
      a9: 'جلد أخضر داكن بجانب حقائب وأحذية جلدية',
      c9: 'جلد مصبوغ بجانب الحقائب والأحذية والأحزمة.'
    },
    goods: {
      eyebrow: 'مثال الاستخدام',
      title: 'ماذا يُقص من هذا الجلد',
      desc: 'المنتج الجاهز لإظهار القص والخياطة. جملة هذه الصفحة هي الجلد لا محفظة مفردة.',
      a1: 'حافظات مستندات من جلد ساق النعام بعدة ألوان',
      c1: 'حافظة الساق: بني، أزرق، برتقالي، كحلي وأخضر.',
      a2: 'محفظة صفراء بشريط ساق على جلد الجسم',
      c2: 'محفظة صفراء: كويل الجسم مع شريط حراشف الساق.',
      a3: 'ثلاث حافظات بطاقات على جلد نعام',
      c3: 'حافظات بالأسود والكونياك والبني على جلد جسم ذي كويل.',
      a4: 'محافظ مع شريط ساق خام',
      c4: 'من شريط الساق الخام إلى المحفظة — أسود وأصفر وعسلي.'
    },
    export: {
      eyebrow: 'أسواق التصدير',
      title: 'الصين وتركيا، والمشتري التالي',
      body: 'شُحن جلد النعام إلى <strong>الصين</strong> و<strong>تركيا</strong>. مصنع الأحذية أو الحقائب أو الجلود الصغيرة يستطيع أخذ الكراست وصبغه، أو طلب الجلد المصبوغ والساق. البداية من <a href="/pages/contact">الاتصال</a>. تعريف الشركة في <a href="/pages/about">عن بيزدوار</a>.',
      chinaTitle: 'الصين',
      chinaDesc: 'تم التصدير. لمصانع الحقائب والأحذية والجلود الصغيرة التي تريد المساحة والدرجة على الفاتورة الأولية.',
      turkeyTitle: 'تركيا',
      turkeyDesc: 'تم التصدير. مسار لوجستي إقليمي لمشتري إسطنبول والأناضول العاملين في الجلد الغريب.',
      iranTitle: 'المنشأ إيران',
      iranDesc: 'الإنتاج محلي وليس إعادة وسم لجلد مستورد. صور المخزن والورشة هي دليل ذلك.'
    },
    faq: {
      title: 'أسئلة تاجر الجملة',
      q1: 'هل القدم تعني قدمًا مربعًا؟',
      a1: 'نعم. في عرف هذه التجارة القدم الواحدة قدم مربع. الكراست يبدأ من 6.5 دولار والمصبوغ من 8.5 دولار للقدم المربع. الساق بالقطعة ويبدأ من 6 دولارات.',
      q2: 'هل نستطيع صبغ الكراست بأنفسنا؟',
      a2: 'نعم. الكراست لهذا الغرض: جلد مدبوغ بلا لون نهائي. إذا أردتم لونًا جاهزًا فخذوا سعر المصبوغ.',
      q3: 'كيف تذكرون الدرجة والمساحة؟',
      a3: 'درجة التاج والمساحة، وأبعاد دفعة الساق، تُكتب على الفاتورة الأولية. صور الشريط عينات مخزن وليست ضمان قياس لكل طلب.',
      q4: 'ما الحد الأدنى للطلب؟',
      a4: 'لا ننشر حدًا أدنى ثابتًا على الموقع. أرسلوا الحجم والدرجة والوجهة ليُسعَّر تلك الدفعة. عينة للمس قبل الطلب الكبير ممكنة.',
      q5: 'إلى أي بلدان شحنتم؟',
      a5: 'تم تصدير جلد النعام إلى الصين وتركيا. الوجهات الأخرى تُدرس كل حالة على حدة.'
    },
    related: {
      title: 'متابعة في الموقع',
      products: 'كتالوج المنتجات',
      productsDesc: 'جلد النعام إلى جانب إنتاج بيزدوار الآخر',
      contact: 'استفسار وفاتورة أولية',
      contactDesc: 'أرسلوا الدرجة والمساحة واللون والوجهة',
      about: 'عن بيزدوار',
      aboutDesc: 'الشركة منذ 2013 — إيران والمنطقة'
    }
  };

  copy.ru = {
    geoText: 'Страусиная кожа производства Ирана — краст, окрашенная и нога. Экспорт в Китай и Турцию.',
    hero: {
      tag: 'Производство Ирана · Экзотическая кожа',
      title: 'Иранская страусиная кожа — краст, окрашенная и нога',
      desc: 'Полный цикл в Иране. Краст от $6.50 за кв. фут, окрашенная от $8.50, нога от $6. Экспорт в Китай и Турцию уже выполнен.'
    },
    nav: { about: 'О коже', prices: 'Цены', specs: 'Характеристики', process: 'Производство', gallery: 'Склад и цвет', goods: 'Применение', export: 'Экспорт', faq: 'Вопросы', contact: 'Запрос' },
    about: {
      title: 'Страусиная кожа, которую мы производим в Иране',
      body: 'Эта страница про <strong>иранскую страусиную кожу</strong>: мы производим и поставляем её в Иране — от шкуры до кожи, готовой к раскрою. Опт заказывает кожу тела (краст или окрашенную, за квадратный фут) и ноги отдельно.',
      body2: 'Страусиная кожа остаётся мягкой за счёт фолликулов пера (quill), не трескается на сгибе и дышит лучше, чем бычья. Это экзотическая кожа рядом с крокодилом, змеёй и ящерицей — рисунок quill не печатается. Запрос партии — через <a href="/pages/contact">форму</a> или WhatsApp. Остальные продукты — в <a href="/pages/products">каталоге</a>.',
      specsTitle: 'Что поставляем',
      imageAlt: 'Цветные образцы иранской страусиной кожи с рисунком quill',
      thumb1Alt: 'Краст кожи ног страуса, длина около 70 см',
      thumb2Alt: 'Чёрный бумажник и картхолдер из кожи ноги страуса',
      thumb3Alt: 'Рулон краста страуса на столе цеха',
      spec1: 'Краст тела — выдублен, финальной краски ещё нет',
      spec2: 'Окрашенная кожа тела — широкая палитра, к раскрою',
      spec3: 'Нога страуса — крупная чешуя по центру, для сапог и мелочи',
      spec4: 'Полный цикл внутри Ирана',
      spec5: 'Экспорт в Китай и Турцию выполнен',
      spec6: 'Стартовая цена; сорт, метраж и цвет — в проформе',
      ctaContact: 'Оптовый запрос',
      ctaCatalog: 'Каталог продуктов'
    },
    prices: {
      eyebrow: 'Старт оптовой цены',
      title: 'Краст, окрашенная и нога',
      desc: 'В этой торговле «фут» — это квадратный фут. Цены стартовые, не фиксированная ставка за шкуру.',
      crustName: 'Краст',
      crustPrice: '$6.50',
      crustUnit: 'за кв. фут · от',
      crustDesc: 'Выдублен до краста, натуральный кремовый. Под краску покупателя.',
      dyedName: 'Окрашенная',
      dyedPrice: '$8.50',
      dyedUnit: 'за кв. фут · от',
      dyedDesc: 'Окрашена и готова к раскрою. Палитра есть на складе и в шоуруме.',
      legName: 'Нога',
      legPrice: '$6',
      legUnit: 'за ногу · от',
      legDesc: 'Кожа ноги с центральным рядом чешуи. Продаётся штучно, не за квадратный фут.',
      note: 'Итог зависит от сорта короны, полезной площади, цвета, толщины и объёма. Проформа выставляется, когда партия определена.'
    },
    specs: {
      eyebrow: 'Для фабрики',
      title: 'Quill, сорт, краст и нога',
      desc: 'Термины — язык дубильни. Точные цифры каждой отгрузки пишутся в проформе и её не заменяют.',
      quillTitle: 'Корона и quill',
      quillBody: 'Quill — круглая фолликула, где сидело перо. Корона — центр шкуры, там quill крупный и ровный. На практике около двух третей шкуры — полный quill, остальное мелкий quill или гладкое поле. Если нужна площадь полного quill, заказывайте примерно в 1,5 раза больше.',
      gradeTitle: 'Сортность',
      gradeBody: 'Сорт смотрит на кроящую ценность короны, а не только на цвет. 1-й сорт: корона без дефектов (сумки и обивка). 2-й: один-два дефекта. 3-й: дефектов больше — обувь, сапоги и мелкая кожгалантерея. Недозрелый или проваленный quill может снизить сорт. Сорт каждой партии указываем отдельно.',
      crustTitle: 'Краст и окрашенная',
      crustBody: 'Краст — кожа после дубления, редубления, жирования, сушки и мягчения, до финального цвета и отделки. Кремовая, под краску покупателя. Окрашенная — та же шкура после цвета, к раскрою. Типичная рыночная толщина кожи тела около 0,6–1,2 мм.',
      legTitle: 'Нога',
      legBody: 'Нога узкая: по центру ряд крупной чешуи, по бокам зерно мельче. На складских образцах длина около 70 см, ширина в точке замера около 10–12 см. Идёт на сапоги, ремешки, бумажники и картхолдеры.'
    },
    process: {
      eyebrow: 'Полный цикл',
      title: 'Производство в Иране, не переклеенная сырая шкура',
      desc: 'Цепочка внутри Ирана: от шкуры до краста, краски и образца изделия. Фото цеха и склада на этой странице — с этого производства.',
      s1Title: '1. Шкура и подготовка',
      s1Desc: 'Качество quill зависит от спелости пера при съёме. Спелое перо оставляет круглый полный quill; зелёное — плоский и открытый.',
      s2Title: '2. Дубление до краста',
      s2Desc: 'Шкуру дубят, редубят и жируют, затем сушат и мягчат. На выходе — кремовый рулон краста, который меряют в цехе.',
      s3Title: '3. Цвет и отделка',
      s3Desc: 'Краска проходит краст. Палитра от кремового и коричневого до зелёного, синего, жёлтого и мадженты. Ноги и тело красят отдельно.',
      s4Title: '4. Контроль и отгрузка',
      s4Desc: 'Метраж, сорт и цвет — в проформе. Экспорт в Китай и Турцию выполнен; другие направления согласуются с логистикой.'
    },
    gallery: {
      eyebrow: 'Реальный склад',
      title: 'Краст, ноги, цвет и шоурум',
      desc: 'Фото из нашего цеха, склада и шоурума — не рендер каталога.',
      a1: 'Рулон краста страуса длиной около метра',
      c1: 'Рулон краста; этот образец около 95–100 см.',
      a2: 'Краст на вешалках рядом с образцами цвета в цехе',
      c2: 'Цех: краст, образцы цвета и страусиное перо.',
      a3: 'Стопка ног краста шириной около 10–12 см',
      c3: 'Стопка ног краста; ширина у рулетки около 10–12 см.',
      a4: 'Целая шкура страуса с короной quill',
      c4: 'Целая шкура: корона с quill в центре, края ровнее.',
      a5: 'Стеллажи кожи тела и ног разных цветов',
      c5: 'Склад: тело снизу, ноги на верхней перекладине.',
      a6: 'Три яруса: тело, нога и окрашенные полотна',
      c6: 'Три яруса: тело, нога, окрашенные полотна.',
      a7: 'Зеркало в раме из цветных шкур страуса в шоуруме',
      c7: 'Шоурум: цвета тела и ног, применение в обуви и сумках.',
      a8: 'Зелёная шкура страуса на скамье шоурума',
      c8: 'Зелёная шкура на скамье, рядом ремни и чемоданы.',
      a9: 'Тёмно-зелёная шкура рядом с сумками и обувью',
      c9: 'Окрашенная шкура рядом с сумками, обувью и ремнями.'
    },
    goods: {
      eyebrow: 'Пример применения',
      title: 'Что кроят из этой кожи',
      desc: 'Готовые вещи показывают крой и строчку. Опт на этой странице — шкура, не один бумажник.',
      a1: 'Папки из кожи ноги страуса нескольких цветов',
      c1: 'Папки из ноги: коричневый, синий, оранжевый, тёмно-синий и зелёный.',
      a2: 'Жёлтый бумажник с полосой ноги на коже тела',
      c2: 'Жёлтый бумажник: quill тела плюс полоса чешуи ноги.',
      a3: 'Три картхолдера на шкуре страуса',
      c3: 'Чёрный, коньяк и коричневый картхолдер на коже тела с quill.',
      a4: 'Бумажники и сырая полоса ноги страуса',
      c4: 'От сырой полосы ноги до готового бумажника — чёрный, жёлтый и медовый.'
    },
    export: {
      eyebrow: 'Экспорт',
      title: 'Китай и Турция и следующий покупатель',
      body: 'Страусиная кожа уже отгружалась в <strong>Китай</strong> и <strong>Турцию</strong>. Фабрика обуви, сумок или мелкой кожи может взять краст и красить сама либо заказать окрашенную кожу и ноги. Старт — <a href="/pages/contact">контакт</a>. О компании — <a href="/pages/about">Bizdavar</a>.',
      chinaTitle: 'Китай',
      chinaDesc: 'Экспорт выполнен. Для фабрик сумок, обуви и мелкой кожи, которым нужны метраж и сорт в проформе.',
      turkeyTitle: 'Турция',
      turkeyDesc: 'Экспорт выполнен. Региональная логистика для покупателей Стамбула и Анатолии, которые работают с экзотической кожей.',
      iranTitle: 'Происхождение — Иран',
      iranDesc: 'Производство местное, это не переклейка импортной шкуры. Фото склада и цеха — подтверждение.'
    },
    faq: {
      title: 'Вопросы опта',
      q1: 'Фут — это квадратный фут?',
      a1: 'Да. В этой торговле один фут — один квадратный фут. Краст от $6.50, окрашенная от $8.50 за квадратный фут. Нога считается штучно и стартует от $6.',
      q2: 'Можно ли красить краст самим?',
      a2: 'Да. Краст для этого и нужен: выдубленная кожа без финального цвета. Если нужен готовый цвет — берите цену окрашенной.',
      q3: 'Как вы указываете сорт и площадь?',
      a3: 'Сорт короны, площадь, а для ног размеры партии пишутся в проформе. Фото с рулеткой — складские образцы, не гарантия размера каждого заказа.',
      q4: 'Какой минимум заказа?',
      a4: 'Фиксированный минимум на сайте не публикуем. Напишите объём, сорт и направление — оценим эту партию. Образец на ощупь до крупного заказа возможен.',
      q5: 'В какие страны уже отправляли?',
      a5: 'Страусиная кожа экспортировалась в Китай и Турцию. Другие направления смотрим отдельно.'
    },
    related: {
      title: 'Дальше по сайту',
      products: 'Каталог продуктов',
      productsDesc: 'Страусиная кожа рядом с другим производством Bizdavar',
      contact: 'Запрос и проформа',
      contactDesc: 'Пришлите сорт, метраж, цвет и направление',
      about: 'О Bizdavar',
      aboutDesc: 'Компания с 2013 года — Иран и регион'
    }
  };

  function apply(lang) {
    const L = window.BIZDAVAR_LOCALES[lang];
    const meta = pack[lang] || pack.en;
    const cs = copy[lang];
    if (!L || !cs) return;
    L.caseStudy = L.caseStudy || {};
    L.caseStudy.ostrich = cs;
    L.pages = L.pages || {};
    L.pages.ostrichLeather = meta.seo;
    L.nav = L.nav || {};
    L.nav.productOstrich = meta.navLabel;
    L.nav.productOstrichDesc = meta.navDesc;
    L.productsPage = L.productsPage || {};
    L.productsPage.categories = L.productsPage.categories || {};
    L.productsPage.categories.leather = meta.category;
    L.productsPage.items = L.productsPage.items || {};
    L.productsPage.items['ostrich-leather'] = meta.item;
    if (!L.productsPage.explore) L.productsPage.explore = {};
    if (!L.productsPage.explore.links) L.productsPage.explore.links = {};
    L.productsPage.explore.links.ostrich = meta.explore;
  }

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach(apply);
})();
