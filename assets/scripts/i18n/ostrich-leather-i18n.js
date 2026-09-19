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
        seoDescription: 'چرم شترمرغ را در ایران، از پوست تا چرم آمادهٔ برش، تولید می‌کنیم. کراس از ۶.۵ دلار هر فوت مربع، رنگ‌شده از ۸.۵ دلار، ساق از ۶ دلار. صادرات به چین و ترکیه.',
        seoKeywords: 'چرم شترمرغ, چرم شترمرغ ایرانی, چرم کراس شترمرغ, ساق شترمرغ, خرید چرم شترمرغ, صادرات چرم اگزوتیک'
      },
      navLabel: 'چرم شترمرغ',
      navDesc: 'کراس از ۶.۵ دلار · ساق از ۶ دلار',
      explore: 'چرم شترمرغ ایرانی · از ۶ دلار',
      category: { label: 'چرم اگزوتیک', desc: 'چرم شترمرغ تولید ایران — کراس، رنگ‌شده و ساق' },
      item: {
        name: 'چرم شترمرغ',
        title: 'چرم شترمرغ ایرانی',
        desc: 'تولید در ایران، از پوست تا چرم آمادهٔ برش. کراس از ۶.۵ دلار هر فوت مربع، رنگ‌شده ۸.۵ دلار، ساق از ۶ دلار. صادرات به چین و ترکیه.',
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
        seoDescription: 'Devekuşu derisini İran’da, ham deriden kesime hazır hale kadar üretiyoruz. Krust fit kare 6,50 dolardan, boyalı 8,50 dolardan, bacak 6 dolardan. Çin ve Türkiye’ye ihracat.',
        seoKeywords: 'devekuşu derisi, İran devekuşu derisi, devekuşu krust, devekuşu bacak derisi, devekuşu derisi toptan, egzotik deri ihracat'
      },
      navLabel: 'Devekuşu derisi',
      navDesc: 'Krust $6.50’den · bacak $6’dan',
      explore: 'İran devekuşu derisi · $6’dan',
      category: { label: 'Egzotik deri', desc: 'İran devekuşu derisi — krust, boyalı ve bacak' },
      item: {
        name: 'Devekuşu derisi',
        title: 'İran devekuşu derisi',
        desc: 'İran’da ham deriden kesime hazır deriye kadar üretim. Krust fit kare 6,50 dolardan, boyalı 8,50, bacak 6 dolardan. Çin ve Türkiye’ye ihracat.',
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
        seoDescription: 'ننتج جلد النعام في إيران من الجلد الخام حتى يصبح جاهزًا للقص. الكراست من 6.5 دولار للقدم المربع، والمصبوغ من 8.5، والساق من 6 دولارات. التصدير إلى الصين وتركيا.',
        seoKeywords: 'جلد نعام, جلد نعام إيراني, جلد نعام كراست, جلد ساق النعام, مورد جلد نعام, تصدير جلد غريب'
      },
      navLabel: 'جلد النعام',
      navDesc: 'كراست من 6.5 دولار · ساق من 6',
      explore: 'جلد نعام إيراني · من 6 دولارات',
      category: { label: 'جلد غريب', desc: 'جلد نعام إيراني — كراست ومصبوغ وساق' },
      item: {
        name: 'جلد النعام',
        title: 'جلد نعام إيراني',
        desc: 'إنتاج في إيران من الجلد الخام حتى الجلد الجاهز للقص. الكراست من 6.5 دولار للقدم المربع، والمصبوغ من 8.5، والساق من 6 دولارات. تصدير إلى الصين وتركيا.',
        homeDesc: 'جلد نعام إيراني — من 6 دولارات',
        tags: ['نعام', 'كراست', 'تصدير']
      }
    }
  };

  const copy = {
    fa: {
      geoText: 'چرم شترمرغ را در ایران تولید می‌کنیم: کراس، رنگ‌شده و ساق. به چین و ترکیه صادر شده است.',
      hero: {
        tag: 'تولید ایران · چرم اگزوتیک',
        title: 'چرم شترمرغ ایرانی: کراس، رنگ‌شده و ساق',
        desc: 'این چرم را در ایران، از پوست خام تا آمادهٔ برش، خودمان تولید می‌کنیم. قیمت شروع کراس ۶.۵ دلار برای هر فوت مربع است، رنگ‌شده ۸.۵ دلار، و هر ساق از ۶ دلار. به چین و ترکیه هم صادر کرده‌ایم.'
      },
      nav: { menu: 'بخش‌های صفحه', about: 'دربارهٔ چرم', prices: 'قیمت', specs: 'مشخصات', process: 'تولید', gallery: 'انبار و رنگ', goods: 'کاربرد', export: 'صادرات', faq: 'پرسش‌ها', contact: 'استعلام' },
      about: {
        title: 'چرم شترمرغ را خودمان در ایران تولید می‌کنیم',
        body: 'این صفحه برای <strong>چرم شترمرغ ایرانی</strong> است. پوست را در ایران دباغی می‌کنیم تا به چرم آمادهٔ برش برسد و همان را به خریدار عمده می‌دهیم. پوست بدن را، کراس یا رنگ‌شده، به فوت مربع می‌فروشیم و ساق را جدا، دانه‌ای.',
        body2: 'نرمی این چرم از فولیکول پر می‌آید که در بازار به آن کویل می‌گویند. روی خم کمتر ترک می‌خورد و از چرم گاو بهتر نفس می‌کشد. کنار کروکودیل، مار و مارمولک جزو چرم‌های اگزوتیک است و نقش کویل را نمی‌شود چاپ کرد. برای استعلام محموله <a href="/pages/contact">فرم تماس</a> یا واتساپ را ببینید. بقیهٔ تولیدات ما در <a href="/pages/products">کاتالوگ محصولات</a> است.',
        specsTitle: 'چه چیزهایی می‌فروشیم',
        imageAlt: 'نمونه‌های رنگی چرم شترمرغ ایرانی با نقش کویل',
        thumb1Alt: 'پوست ساق شترمرغ در حالت کراس، با طول حدود ۷۰ سانتی‌متر',
        thumb2Alt: 'کیف پول و جاکارتی از چرم ساق شترمرغ مشکی',
        thumb3Alt: 'رول چرم کراس شترمرغ روی میز کارگاه',
        spec1: 'چرم بدن، کراس: دباغی شده و هنوز رنگ نهایی نخورده',
        spec2: 'چرم بدن، رنگ‌شده: طیف رنگ باز، آمادهٔ برش',
        spec3: 'ساق شترمرغ: فلس وسط درشت است و به بوت و خرده‌چرم می‌خورد',
        spec4: 'تولید در ایران، از پوست تا چرم آماده',
        spec5: 'صادرات انجام‌شده به چین و ترکیه',
        spec6: 'قیمت‌ها شروع‌اند؛ درجه، متراژ و رنگ روی پیش‌فاکتور می‌آید',
        ctaContact: 'استعلام عمده',
        ctaCatalog: 'کاتالوگ محصولات'
      },
      prices: {
        eyebrow: 'قیمت شروع فروش عمده',
        title: 'کراس، رنگ‌شده و ساق',
        desc: 'در عرف این تجارت، هر «پا» یک فوت مربع است. رقم‌های زیر قیمت شروع‌اند، نه نرخ ثابت هر پوست.',
        crustName: 'چرم کراس',
        crustPrice: '$6.50',
        crustUnit: 'هر فوت مربع (پا) · از این قیمت',
        crustDesc: 'دباغی تا مرحلهٔ کراس تمام شده و رنگ طبیعی‌اش کرم است. برای کارگاهی که خودش رنگ می‌کند مناسب است.',
        dyedName: 'چرم رنگ‌شده',
        dyedPrice: '$8.50',
        dyedUnit: 'هر فوت مربع (پا) · از این قیمت',
        dyedDesc: 'رنگ خورده و آمادهٔ برش است. طیف رنگ را در انبار و شوروم داریم.',
        legName: 'ساق',
        legPrice: '$6',
        legUnit: 'هر ساق · از این قیمت',
        legDesc: 'پوست ساق یک ردیف فلس درشت در وسط دارد. واحد فروش عدد است، نه فوت مربع.',
        note: 'قیمت نهایی به درجهٔ تاج، متراژ قابل برش، رنگ، ضخامت و حجم سفارش بستگی دارد. پیش‌فاکتور را بعد از مشخص شدن محموله صادر می‌کنیم.'
      },
      specs: {
        eyebrow: 'برای خریدار کارخانه',
        title: 'تاج، درجه، کراس و ساق',
        desc: 'این‌ها همان اصطلاح‌هایی است که در دباغ‌خانه و بین خریداران چرم اگزوتیک به کار می‌رود. رقم دقیق هر محموله را روی پیش‌فاکتور می‌نویسیم؛ توضیح این صفحه جای پیش‌فاکتور را نمی‌گیرد.',
        quillTitle: 'تاج و کویل',
        quillBody: 'کویل برجستگی گرد جایی است که پر درآمده. تاج مرکز پوست است و کویل آنجا درشت‌تر و یکدست‌تر است. در عمل حدود دو سوم پوست کویل کامل دارد و بقیه کویل ریز یا سطح صاف است. اگر متراژ کویل کامل می‌خواهید، حدود یک و نیم برابر همان متراژ سفارش بدهید.',
        gradeTitle: 'درجه‌بندی',
        gradeBody: 'درجه را از ارزش برش تاج می‌سنجیم، نه فقط از رنگ. درجهٔ ۱ تاج بدون عیب است و به کیف و روکش می‌خورد. درجهٔ ۲ یک یا دو عیب دارد. درجهٔ ۳ عیب بیشتری دارد و برای کفش، بوت و خرده‌چرم مناسب است. کویل نارس یا فرورفته می‌تواند درجه را پایین بیاورد. درجهٔ هر محموله را جدا اعلام می‌کنیم.',
        crustTitle: 'کراس و رنگ‌شده',
        crustBody: 'کراس یعنی پوست بعد از دباغی، دباغی مجدد، چربی‌دهی، خشک شدن و نرم شدن، پیش از پرداخت و رنگ نهایی. رنگش کرم است و به رنگرزی خریدار می‌خورد. رنگ‌شده همان پوست است بعد از رنگ، آمادهٔ برش. ضخامت معمول بازار برای پوست بدن حدود ۰.۶ تا ۱.۲ میلی‌متر است. ضخامت محمولهٔ شما را روی پیش‌فاکتور می‌نویسیم.',
        legTitle: 'ساق',
        legBody: 'ساق باریک است. وسطش یک ردیف فلس درشت دارد و دو طرف دانه‌ریزتر است. در نمونه‌های انبار، طول حدود ۷۰ سانتی‌متر است و عرض، جایی که متر را گذاشته‌ایم، حدود ۱۰ تا ۱۲ سانتی‌متر. این اندازهٔ نمونه است، نه تعهد هر سفارش. از ساق برای بوت، بند ساعت، کیف پول و جاکارتی استفاده می‌شود.'
      },
      process: {
        eyebrow: 'مسیر تولید',
        title: 'در ایران تولید می‌شود، نه پوست خام واسطه‌ای',
        desc: 'زنجیره داخل ایران است: از پوست تا کراس، بعد رنگ، و نمونهٔ کالای دوخته‌شده. عکس‌های کارگاه و انبار همین صفحه از همین خط تولید است.',
        s1Title: '۱. پوست و آماده‌سازی',
        s1Desc: 'کیفیت کویل به رسیدگی پر در زمان برداشت بستگی دارد. پر رسیده کویل گرد و توپر می‌گذارد. پر نارس کویل پهن و توخالی می‌گذارد.',
        s2Title: '۲. دباغی تا کراس',
        s2Desc: 'پوست دباغی می‌شود، دباغی مجدد و چربی‌دهی می‌بیند، بعد خشک و نرم می‌گردد. خروجی، رول کراس به رنگ کرم است که در کارگاه متر می‌شود.',
        s3Title: '۳. رنگ و پرداخت',
        s3Desc: 'رنگ به داخل کراس نفوذ می‌کند. طیف رنگ از کرم و قهوه‌ای تا سبز، آبی، زرد و سرخابی است. ساق و بدن را جدا رنگ می‌کنیم.',
        s4Title: '۴. کنترل و ارسال',
        s4Desc: 'متراژ، درجه و رنگ را روی پیش‌فاکتور می‌نویسیم. به چین و ترکیه صادر کرده‌ایم. مقصد دیگر را با هماهنگی حمل بررسی می‌کنیم.'
      },
      gallery: {
        eyebrow: 'موجودی واقعی',
        title: 'کراس، ساق، رنگ و شوروم',
        desc: 'این عکس‌ها را در کارگاه، انبار و شوروم خودمان گرفته‌ایم. رندر کاتالوگ نیستند.',
        a1: 'رول کراس شترمرغ به طول حدود یک متر',
        c1: 'طول این نمونه از رول کراس حدود ۹۵ تا ۱۰۰ سانتی‌متر است.',
        a2: 'پوست کراس آویزان کنار نمونه‌های رنگ در کارگاه',
        c2: 'در کارگاه، دستهٔ پوست کراس کنار نمونهٔ رنگ و پر شترمرغ است.',
        a3: 'دستهٔ ساق کراس با عرض حدود ۱۰ تا ۱۲ سانتی‌متر',
        c3: 'عرض این دستهٔ ساق، روی متر، حدود ۱۰ تا ۱۲ سانتی‌متر است.',
        a4: 'پوست کامل شترمرغ با تاج کویل‌دار',
        c4: 'در پوست کامل، تاج کویل‌دار وسط است و لبه‌ها صاف‌ترند.',
        a5: 'رک پوست بدن و ساق شترمرغ در رنگ‌های مختلف',
        c5: 'در انبار، پوست بدن پایین است و ساق را روی ردیف بالا گذاشته‌ایم.',
        a6: 'چیدمان سه‌طبقه: پوست بدن، ساق و ورق رنگ‌شده',
        c6: 'سه طبقه چیده شده: پوست بدن، ساق، و ورق رنگ‌شده.',
        a7: 'قاب آینه با پوست‌های رنگی شترمرغ در شوروم',
        c7: 'در شوروم، رنگ‌های بدن و ساق را برای کفش و کیف نشان داده‌ایم.',
        a8: 'پوست سبز شترمرغ روی نیمکت شوروم',
        c8: 'پوست سبز روی نیمکت است، کنار کمربند و چمدان.',
        a9: 'پوست سبز تیره کنار کیف و کفش چرمی',
        c9: 'پوست رنگ‌شده کنار کیف، کفش و کمربند دیده می‌شود.'
      },
      goods: {
        eyebrow: 'نمونهٔ کاربرد',
        title: 'از همین پوست چه چیزی دوخته می‌شود',
        desc: 'کالای آماده فقط برش و دوخت را نشان می‌دهد. آنچه اینجا عمده می‌فروشیم خودِ پوست است، نه کیف تکی.',
        a1: 'کلاسورهایی از چرم ساق شترمرغ در چند رنگ',
        c1: 'کلاسور ساق در رنگ‌های قهوه‌ای، آبی، نارنجی، سرمه‌ای و سبز.',
        a2: 'کیف پول زرد با نوار ساق، روی پوست بدن',
        c2: 'این کیف زرد از کویل بدن است، با یک نوار فلس ساق.',
        a3: 'سه جاکارتی مشکی، کنیاک و قهوه‌ای روی پوست شترمرغ',
        c3: 'سه جاکارتی روی پوست بدن کویل‌دار چیده شده‌اند.',
        a4: 'کیف پول‌ها کنار نوار خام ساق شترمرغ',
        c4: 'از نوار خام ساق تا کیف آماده: مشکی، زرد و عسلی.'
      },
      export: {
        eyebrow: 'صادرات',
        title: 'به چین و ترکیه فرستاده‌ایم',
        body: 'محمولهٔ چرم شترمرغ به <strong>چین</strong> و <strong>ترکیه</strong> رسیده است. کارخانهٔ کفش، کیف یا خرده‌چرم می‌تواند کراس بگیرد و خودش رنگ کند، یا پوست رنگ‌شده و ساق سفارش بدهد. هماهنگی از <a href="/pages/contact">تماس</a> شروع می‌شود. معرفی شرکت در صفحهٔ <a href="/pages/about">دربارهٔ بیزدوار</a> است.',
        chinaTitle: 'چین',
        chinaDesc: 'صادرات انجام شده است. برای کارخانه‌هایی که متراژ و درجه را روی پیش‌فاکتور می‌خواهند.',
        turkeyTitle: 'ترکیه',
        turkeyDesc: 'صادرات انجام شده است. برای خریدار استانبول و آناتولی که با چرم اگزوتیک کار می‌کند، مسیر حمل منطقه‌ای داریم.',
        iranTitle: 'مبدأ: ایران',
        iranDesc: 'تولید داخل ایران است. پوست وارداتی را به نام خودمان نمی‌فروشیم. عکس انبار و کارگاه همین را نشان می‌دهد.'
      },
      faq: {
        title: 'پرسش‌های خریدار عمده',
        q1: 'منظور از پا، فوت مربع است؟',
        a1: 'بله. در عرف این تجارت هر پا یک فوت مربع است. کراس از ۶.۵ دلار و رنگ‌شده از ۸.۵ دلار برای هر فوت مربع شروع می‌شود. ساق را دانه‌ای می‌فروشیم و قیمتش از ۶ دلار شروع می‌شود.',
        q2: 'کراس را خودمان می‌توانیم رنگ کنیم؟',
        a2: 'بله. کراس برای همین است: چرم دباغی‌شده‌ای که هنوز رنگ نهایی ندارد. اگر رنگ آماده می‌خواهید، نرخ چرم رنگ‌شده را بگیرید.',
        q3: 'درجه و متراژ را چطور اعلام می‌کنید؟',
        a3: 'درجهٔ تاج، متراژ، و برای ساق ابعاد محموله را روی پیش‌فاکتور می‌نویسیم. عکس‌هایی که متر در آن‌ها هست فقط نمونهٔ انبارند و اندازهٔ قطعی هر سفارش نیستند.',
        q4: 'حداقل سفارش چقدر است؟',
        a4: 'حداقل ثابتی روی سایت اعلام نمی‌کنیم. حجم، درجه و مقصد را بگویید تا همان محموله قیمت شود. پیش از سفارش حجمی، نمونه برای دیدن بافت هم ممکن است.',
        q5: 'به کدام کشورها فرستاده‌اید؟',
        a5: 'چرم شترمرغ را به چین و ترکیه صادر کرده‌ایم. مقصدهای دیگر را جدا بررسی می‌کنیم.'
      },
      related: {
        title: 'ادامه در سایت',
        products: 'کاتالوگ محصولات',
        productsDesc: 'چرم شترمرغ در کنار بقیهٔ تولیدات بیزدوار',
        contact: 'استعلام و پیش‌فاکتور',
        contactDesc: 'درجه، متراژ، رنگ و مقصد را بفرستید',
        about: 'دربارهٔ بیزدوار',
        aboutDesc: 'شرکت از سال ۲۰۱۳، در ایران و بازار منطقه'
      }
    },
    en: {
      geoText: 'Ostrich leather tanned in Iran: crust, dyed hides and legs. Shipped to China and Turkey.',
      hero: {
        tag: 'Made in Iran · Exotic leather',
        title: 'Iranian ostrich leather: crust, dyed and leg',
        desc: 'We tan this leather in Iran, from the raw skin to leather ready for cutting. Crust starts at $6.50 per square foot, dyed leather at $8.50, and each leg at $6. We have already shipped to China and Turkey.'
      },
      nav: { menu: 'On this page', about: 'The leather', prices: 'Prices', specs: 'Specs', process: 'Production', gallery: 'Stock and color', goods: 'Uses', export: 'Export', faq: 'Questions', contact: 'Inquiry' },
      about: {
        title: 'Ostrich leather we tan in Iran',
        body: 'This page is for <strong>Iranian ostrich leather</strong>. We tan the skin in Iran until it is ready to cut, and we sell that leather to wholesale buyers. Body hides, crust or dyed, are sold by the square foot. Legs are sold separately, by the piece.',
        body2: 'The leather stays soft because of the feather follicles, called quills in the trade. It is less likely to crack on a fold than many hides, and it breathes more than cowhide. It belongs with crocodile, snake and lizard as an exotic leather, and the quill pattern cannot be printed. For a lot inquiry, use the <a href="/pages/contact">contact form</a> or WhatsApp. Our other lines are in the <a href="/pages/products">product catalog</a>.',
        specsTitle: 'What we sell',
        imageAlt: 'Colored Iranian ostrich leather samples with the quill pattern',
        thumb1Alt: 'Crust ostrich leg skins, about 70 cm long',
        thumb2Alt: 'Black wallet and cardholder in ostrich leg leather',
        thumb3Alt: 'A roll of ostrich crust on the workshop bench',
        spec1: 'Body crust: tanned, not yet given its final color',
        spec2: 'Dyed body leather: a wide color range, ready to cut',
        spec3: 'Ostrich leg: a large central scale row, for boots and small leather goods',
        spec4: 'Tanned in Iran, from the skin to finished leather',
        spec5: 'Already shipped to China and Turkey',
        spec6: 'Prices are starting points; grade, area and color go on the proforma',
        ctaContact: 'Wholesale inquiry',
        ctaCatalog: 'Product catalog'
      },
      prices: {
        eyebrow: 'Wholesale starting prices',
        title: 'Crust, dyed leather and legs',
        desc: 'In this trade, one “foot” is one square foot. The figures below are starting prices, not a fixed rate for every hide.',
        crustName: 'Crust',
        crustPrice: '$6.50',
        crustUnit: 'per square foot · from',
        crustDesc: 'Tanned through to crust, in its natural cream color. The right choice if you dye it yourself.',
        dyedName: 'Dyed leather',
        dyedPrice: '$8.50',
        dyedUnit: 'per square foot · from',
        dyedDesc: 'Colored and ready to cut. The color range is in the warehouse and the showroom.',
        legName: 'Leg',
        legPrice: '$6',
        legUnit: 'per leg · from',
        legDesc: 'Leg skin with one row of large scales down the center. Sold by the piece, not by the square foot.',
        note: 'The final price depends on crown grade, cuttable area, color, thickness and order volume. We issue the proforma once the lot is defined.'
      },
      specs: {
        eyebrow: 'For factory buyers',
        title: 'Crown, grade, crust and leg',
        desc: 'These are the terms used in the tannery and among exotic-leather buyers. The exact figures for each shipment are written on the proforma. This page does not replace that document.',
        quillTitle: 'Crown and quill',
        quillBody: 'A quill is the round bump where a feather grew. The crown is the center of the hide, and that is where the quills are largest and most even. In practice about two-thirds of a hide is full quill. The rest is fine quill or smooth. If you need a given area of full quill, order about one and a half times that area.',
        gradeTitle: 'Grading',
        gradeBody: 'Grade follows how much of the crown can be cut, not the color alone. Grade 1 has a clean crown and suits bags and upholstery. Grade 2 has one or two defects. Grade 3 has more defects and suits shoes, boots and small leather goods. An immature or sunken quill can lower the grade. We state the grade of each lot separately.',
        crustTitle: 'Crust and dyed',
        crustBody: 'Crust is the hide after tanning, retanning, fatliquoring, drying and softening, and before the final color and finish. It is cream, and it is meant for the buyer’s own dye. Dyed leather is the same hide after color, ready to cut. Body hides on the market are often about 0.6 to 1.2 mm thick. We write the thickness of your lot on the proforma.',
        legTitle: 'Leg',
        legBody: 'A leg is narrow. One row of large scales runs down the center, and the sides are finer. On the warehouse samples, length is about 70 cm and width, where the tape was placed, is about 10 to 12 cm. That is a sample size, not a promise for every order. Legs are used for boots, watch straps, wallets and cardholders.'
      },
      process: {
        eyebrow: 'How it is made',
        title: 'Tanned in Iran, not a traded raw skin',
        desc: 'The chain stays in Iran: from the skin to crust, then color, then sample goods that have been cut and sewn. The workshop and warehouse photos on this page are from that production.',
        s1Title: '1. Skin and preparation',
        s1Desc: 'Quill quality depends on whether the feather was mature when the skin was taken. A ripe feather leaves a round, full quill. An unripe feather leaves a flat, hollow one.',
        s2Title: '2. Tanning to crust',
        s2Desc: 'The skin is tanned, retanned and fatliquored, then dried and softened. The result is a cream crust roll, measured in the workshop.',
        s3Title: '3. Color and finish',
        s3Desc: 'The dye penetrates the crust. Colors run from cream and brown to green, blue, yellow and magenta. Legs and body hides are dyed separately.',
        s4Title: '4. Check and shipment',
        s4Desc: 'Area, grade and color are written on the proforma. We have shipped to China and Turkey. Other destinations are checked with the forwarder.'
      },
      gallery: {
        eyebrow: 'Actual stock',
        title: 'Crust, legs, color and the showroom',
        desc: 'These photos were taken in our workshop, warehouse and showroom. They are not catalog renders.',
        a1: 'An ostrich crust roll about one metre long',
        c1: 'This crust roll measures about 95 to 100 cm.',
        a2: 'Crust hides hanging beside color samples in the workshop',
        c2: 'In the workshop, crust hides hang beside color samples and ostrich feathers.',
        a3: 'A stack of crust legs about 10 to 12 cm wide',
        c3: 'At the tape, this stack of legs is about 10 to 12 cm wide.',
        a4: 'A full ostrich hide with a quilled crown',
        c4: 'On a full hide the quilled crown sits in the center and the edges are smoother.',
        a5: 'Racks of ostrich body hides and legs in several colors',
        c5: 'In the warehouse the body hides are below and the legs are on the upper rail.',
        a6: 'Three tiers: body hide, legs and dyed sheets',
        c6: 'The rack has three tiers: body hide, legs, and dyed sheets.',
        a7: 'A mirror framed with colored ostrich skins in the showroom',
        c7: 'The showroom shows body and leg colors used for shoes and bags.',
        a8: 'A green ostrich hide on the showroom bench',
        c8: 'A green hide lies on the bench, next to belts and luggage.',
        a9: 'A dark green hide beside leather bags and shoes',
        c9: 'Dyed leather is shown beside bags, shoes and belts.'
      },
      goods: {
        eyebrow: 'What it is cut into',
        title: 'What can be made from this skin',
        desc: 'The finished pieces only show the cut and the stitch. What we sell wholesale on this page is the skin itself, not a single bag.',
        a1: 'Document folders in ostrich leg leather, in several colors',
        c1: 'Leg folders in brown, blue, orange, navy and green.',
        a2: 'A yellow wallet with a leg strip, on a body hide',
        c2: 'This yellow wallet is body quill, with one strip of leg scale.',
        a3: 'Three cardholders, black, cognac and brown, on an ostrich hide',
        c3: 'Three cardholders laid on a quilled body hide.',
        a4: 'Wallets beside a raw ostrich-leg strip',
        c4: 'From a raw leg strip to a finished wallet: black, yellow and honey.'
      },
      export: {
        eyebrow: 'Export',
        title: 'Shipped to China and Turkey',
        body: 'Ostrich leather has been delivered to <strong>China</strong> and <strong>Turkey</strong>. A shoe, bag or small-leather factory can take crust and dye it, or order dyed hides and legs. Start with <a href="/pages/contact">contact</a>. The company is introduced on <a href="/pages/about">About Bizdavar</a>.',
        chinaTitle: 'China',
        chinaDesc: 'The shipment has been made. It suits factories that want area and grade written on the proforma.',
        turkeyTitle: 'Turkey',
        turkeyDesc: 'The shipment has been made. Buyers in Istanbul and Anatolia who work exotic leather can use the regional route.',
        iranTitle: 'Origin: Iran',
        iranDesc: 'The leather is produced in Iran. We do not relabel imported skins. The warehouse and workshop photos show that.'
      },
      faq: {
        title: 'Questions from wholesale buyers',
        q1: 'Does “foot” mean a square foot?',
        a1: 'Yes. In this trade one foot is one square foot. Crust starts at $6.50 and dyed leather at $8.50 per square foot. Legs are sold by the piece, from $6.',
        q2: 'Can we dye the crust ourselves?',
        a2: 'Yes. That is what crust is for: tanned leather that does not yet have its final color. If you want the color already done, take the dyed price.',
        q3: 'How do you state grade and area?',
        a3: 'Crown grade, area, and for legs the measurements of the lot, are written on the proforma. Photos with a tape measure are warehouse samples. They are not a size promise for every order.',
        q4: 'What is the minimum order?',
        a4: 'We do not publish a fixed minimum on the site. Tell us the volume, grade and destination, and we price that lot. A sample to check the hand, before a larger order, is possible.',
        q5: 'Which countries have you shipped to?',
        a5: 'We have exported ostrich leather to China and Turkey. Other destinations are looked at one by one.'
      },
      related: {
        title: 'Elsewhere on the site',
        products: 'Product catalog',
        productsDesc: 'Ostrich leather alongside the rest of Bizdavar production',
        contact: 'Inquiry and proforma',
        contactDesc: 'Send the grade, area, color and destination',
        about: 'About Bizdavar',
        aboutDesc: 'The company since 2013, in Iran and the region'
      }
    },
    tr: {
      geoText: 'Devekuşu derisini İran’da üretiyoruz: krust, boyalı deri ve bacak. Çin ve Türkiye’ye sevk edildi.',
      hero: {
        tag: 'İran üretimi · Egzotik deri',
        title: 'İran devekuşu derisi: krust, boyalı ve bacak',
        desc: 'Bu deriyi İran’da, ham deriden kesime hazır hale gelene kadar kendimiz üretiyoruz. Krust fit kare 6,50 dolardan, boyalı deri 8,50 dolardan, her bacak 6 dolardan başlar. Çin ve Türkiye’ye sevkiyat yaptık.'
      },
      nav: { menu: 'Sayfa bölümleri', about: 'Deri', prices: 'Fiyat', specs: 'Özellikler', process: 'Üretim', gallery: 'Stok ve renk', goods: 'Kullanım', export: 'İhracat', faq: 'Sorular', contact: 'Teklif' },
      about: {
        title: 'Devekuşu derisini İran’da kendimiz üretiyoruz',
        body: 'Bu sayfa <strong>İran devekuşu derisi</strong> içindir. Deriyi İran’da, kesime hazır olana kadar tabaklıyoruz ve toptan alıcıya bu haliyle veriyoruz. Gövde derisi, krust ya da boyalı, fit kare satılır. Bacaklar ayrı ve adetle satılır.',
        body2: 'Derinin yumuşaklığı tüy kökünden gelir. Piyasada buna quil denir. Kıvrımda birçok deriden daha az çatlar ve sığır derisine göre daha iyi nefes alır. Timsah, yılan ve kertenkele ile birlikte egzotik deridir; quil deseni basılamaz. Parti için <a href="/pages/contact">iletişim formunu</a> ya da WhatsApp’ı kullanın. Diğer üretimimiz <a href="/pages/products">ürün kataloğunda</a>.',
        specsTitle: 'Ne satıyoruz',
        imageAlt: 'Quil desenli, renkli İran devekuşu derisi örnekleri',
        thumb1Alt: 'Krust devekuşu bacak derisi, uzunluk yaklaşık 70 cm',
        thumb2Alt: 'Siyah devekuşu bacak derisinden cüzdan ve kartlık',
        thumb3Alt: 'Atölye tezgahında krust devekuşu derisi rulosu',
        spec1: 'Gövde krust: tabaklanmış, son renk henüz verilmemiş',
        spec2: 'Boyalı gövde: geniş renk skalası, kesime hazır',
        spec3: 'Devekuşu bacağı: ortada iri pul, bot ve küçük deri için',
        spec4: 'İran’da üretim, ham deriden hazır deriye',
        spec5: 'Çin ve Türkiye’ye sevkiyat yapıldı',
        spec6: 'Fiyatlar başlangıçtır; kalite, metraj ve renk proformada yazar',
        ctaContact: 'Toptan teklif',
        ctaCatalog: 'Ürün kataloğu'
      },
      prices: {
        eyebrow: 'Toptan başlangıç fiyatı',
        title: 'Krust, boyalı deri ve bacak',
        desc: 'Bu ticarette bir «ayak», bir fit karedir. Aşağıdaki rakamlar başlangıç fiyatıdır, her postun sabit fiyatı değildir.',
        crustName: 'Krust',
        crustPrice: '$6.50',
        crustUnit: 'fit kare başına · bu fiyattan',
        crustDesc: 'Krusta kadar tabaklanmıştır, doğal rengi kremdir. Boyayı kendisi yapacak atölye için uygundur.',
        dyedName: 'Boyalı deri',
        dyedPrice: '$8.50',
        dyedUnit: 'fit kare başına · bu fiyattan',
        dyedDesc: 'Boyanmış ve kesime hazırdır. Renk skalası depoda ve showroom’da durur.',
        legName: 'Bacak',
        legPrice: '$6',
        legUnit: 'bacak başına · bu fiyattan',
        legDesc: 'Bacak derisinin ortasında iri bir pul sırası vardır. Adet satılır, fit kare değil.',
        note: 'Son fiyat taç kalitesine, kesilebilir alana, renge, kalınlığa ve sipariş hacmine bağlıdır. Proformayı parti netleşince düzenleriz.'
      },
      specs: {
        eyebrow: 'Fabrika alıcısı için',
        title: 'Taç, kalite, krust ve bacak',
        desc: 'Bunlar tabakhanede ve egzotik deri alıcıları arasında kullanılan terimlerdir. Her partinin rakamı proformaya yazılır. Bu sayfa proformanın yerine geçmez.',
        quillTitle: 'Taç ve quil',
        quillBody: 'Quil, tüyün çıktığı yuvarlak kabartmadır. Taç postun merkezidir ve quil orada daha iri, daha düzgündür. Uygulamada postun yaklaşık üçte ikisi tam quildir, kalanı ince quil ya da düz yüzeydir. Tam quil metrajı istiyorsanız, o metrajın yaklaşık bir buçuk katını sipariş edin.',
        gradeTitle: 'Kalite',
        gradeBody: 'Kaliteye tacın kesim değeriyle bakarız, yalnızca renkle değil. 1. kalitede taç temizdir; çanta ve döşemeye gider. 2. kalitede bir ya da iki kusur vardır. 3. kalitede kusur daha fazladır; ayakkabı, bot ve küçük deri işine gelir. Olgunlaşmamış ya da çökük quil kaliteyi düşürebilir. Her partinin kalitesini ayrıca yazarız.',
        crustTitle: 'Krust ve boyalı',
        crustBody: 'Krust, tabak, retenaj, yağlama, kurutma ve yumuşatmadan sonra, son renk ve finişten önceki deridir. Rengi kremdir ve alıcının kendi boyası içindir. Boyalı deri, aynı postun renkten sonraki, kesime hazır halidir. Piyasada gövde derisi çoğu zaman yaklaşık 0,6 ile 1,2 mm kalınlığındadır. Sizin partinizin kalınlığını proformaya yazarız.',
        legTitle: 'Bacak',
        legBody: 'Bacak dardır. Ortasında iri bir pul sırası, yanlarında daha ince bir tane vardır. Depo numunelerinde uzunluk yaklaşık 70 cm, metrenin durduğu yerde genişlik yaklaşık 10 ile 12 cm’dir. Bu numune ölçüsüdür, her siparişin ölçüsü değildir. Bacak bot, saat kayışı, cüzdan ve kartlıkta kullanılır.'
      },
      process: {
        eyebrow: 'Üretim',
        title: 'İran’da üretilir, aracı ham post değildir',
        desc: 'Zincir İran’ın içindedir: posttan krusta, sonra boyaya, sonra kesilip dikilmiş örnek ürüne. Bu sayfadaki atölye ve depo fotoğrafları bu üretimdendir.',
        s1Title: '1. Post ve hazırlık',
        s1Desc: 'Quil kalitesi, deri alınırken tüyün olgun olup olmadığına bağlıdır. Olgun tüy yuvarlak ve dolgun quil bırakır. Ham tüy yassı ve içi boş quil bırakır.',
        s2Title: '2. Krusta kadar tabak',
        s2Desc: 'Post tabaklanır, retenaj ve yağlama görür, sonra kurutulup yumuşatılır. Çıkan, atölyede ölçülen krem rengi krust rulosudur.',
        s3Title: '3. Renk ve finiş',
        s3Desc: 'Boya krustun içine işler. Renkler krem ve kahveden yeşile, maviye, sarıya ve macentaya gider. Bacak ile gövde ayrı boyanır.',
        s4Title: '4. Kontrol ve sevkiyat',
        s4Desc: 'Metraj, kalite ve renk proformaya yazılır. Çin ve Türkiye’ye sevkiyat yaptık. Başka varış noktasını nakliyeyle birlikte bakarız.'
      },
      gallery: {
        eyebrow: 'Gerçek stok',
        title: 'Krust, bacak, renk ve showroom',
        desc: 'Bu fotoğraflar kendi atölyemizde, depomuzda ve showroom’umuzda çekildi. Katalog çizimi değildir.',
        a1: 'Yaklaşık bir metre uzunluğunda krust rulosu',
        c1: 'Bu krust rulosunun uzunluğu yaklaşık 95 ile 100 cm’dir.',
        a2: 'Atölyede renk örneklerinin yanında asılı krust',
        c2: 'Atölyede krust postlar, renk örneği ve devekuşu tüyünün yanındadır.',
        a3: 'Genişliği yaklaşık 10 ile 12 cm olan krust bacak destesi',
        c3: 'Bu bacak destesinin genişliği, metrenin üzerinde, yaklaşık 10 ile 12 cm’dir.',
        a4: 'Quilli taçlı tam devekuşu postu',
        c4: 'Tam postta quilli taç ortadadır, kenarlar daha düzdür.',
        a5: 'Çeşitli renklerde gövde ve bacak rafları',
        c5: 'Depoda gövde derisi alttadır, bacaklar üst sıradadır.',
        a6: 'Üç kat: gövde, bacak ve boyalı tabaka',
        c6: 'Üç kat dizilmiştir: gövde derisi, bacak ve boyalı tabaka.',
        a7: 'Showroom’da renkli devekuşu derisiyle çevrili ayna',
        c7: 'Showroom’da ayakkabı ve çanta için gövde ve bacak renkleri durur.',
        a8: 'Showroom sehpasında yeşil devekuşu postu',
        c8: 'Yeşil post sehpanın üstündedir, kemer ve valizin yanında.',
        a9: 'Koyu yeşil post, deri çanta ve ayakkabının yanında',
        c9: 'Boyalı deri, çanta, ayakkabı ve kemerin yanında durur.'
      },
      goods: {
        eyebrow: 'Ne kesilir',
        title: 'Bu deriden ne dikilir',
        desc: 'Hazır eşya yalnızca kesimi ve dikişi gösterir. Burada toptan sattığımız şey derinin kendisidir, tek bir çanta değil.',
        a1: 'Birkaç renkte devekuşu bacak derisinden evraklık',
        c1: 'Bacak evraklık: kahve, mavi, turuncu, lacivert ve yeşil.',
        a2: 'Gövde postunun üzerinde, bacak şeritli sarı cüzdan',
        c2: 'Bu sarı cüzdan gövde quilidir, bir sıra bacak puluyla.',
        a3: 'Devekuşu postu üzerinde siyah, konyak ve kahve kartlık',
        c3: 'Üç kartlık, quilli gövde derisinin üzerine dizilmiştir.',
        a4: 'Ham bacak şeridinin yanında cüzdanlar',
        c4: 'Ham bacak şeridinden hazır cüzdana: siyah, sarı ve bal rengi.'
      },
      export: {
        eyebrow: 'İhracat',
        title: 'Çin ve Türkiye’ye gönderdik',
        body: 'Devekuşu derisi <strong>Çin</strong> ve <strong>Türkiye</strong>’ye ulaştı. Ayakkabı, çanta ya da küçük deri fabrikası krust alıp kendi boyayabilir veya boyalı deri ile bacak sipariş edebilir. İş <a href="/pages/contact">iletişimle</a> başlar. Şirket <a href="/pages/about">Bizdavar hakkında</a> sayfasındadır.',
        chinaTitle: 'Çin',
        chinaDesc: 'Sevkiyat yapıldı. Metraj ve kaliteyi proformada isteyen fabrikalar için uygundur.',
        turkeyTitle: 'Türkiye',
        turkeyDesc: 'Sevkiyat yapıldı. Egzotik deri çalışan İstanbul ve Anadolu alıcısı için bölge nakliyesi vardır.',
        iranTitle: 'Menşe: İran',
        iranDesc: 'Üretim İran’dadır. İthal postu kendi adımıza satmayız. Depo ve atölye fotoğrafları bunu gösterir.'
      },
      faq: {
        title: 'Toptan alıcının soruları',
        q1: 'Ayak, fit kare mi demek?',
        a1: 'Evet. Bu ticarette bir ayak, bir fit karedir. Krust fit kare 6,50 dolardan, boyalı deri 8,50 dolardan başlar. Bacak adetle satılır ve 6 dolardan başlar.',
        q2: 'Krustu kendimiz boyayabilir miyiz?',
        a2: 'Evet. Krust bunun içindir: son rengi henüz verilmemiş tabaklanmış deri. Renk hazır gelsin istiyorsanız boyalı deri fiyatını alın.',
        q3: 'Kalite ve metraj nasıl yazılır?',
        a3: 'Taç kalitesi, metraj ve bacakta partinin ölçüleri proformaya yazılır. Üzerinde metre görünen fotoğraflar depo numunesidir. Her siparişin kesin ölçüsü değildir.',
        q4: 'Asgari sipariş ne kadar?',
        a4: 'Sitede sabit bir asgari yazmıyoruz. Hacmi, kaliteyi ve varış yerini söyleyin, o partiyi fiyatlayalım. Büyük siparişten önce dokuyu görmek için numune de mümkün.',
        q5: 'Hangi ülkelere gönderdiniz?',
        a5: 'Devekuşu derisini Çin ve Türkiye’ye ihraç ettik. Başka varış noktalarına ayrı bakarız.'
      },
      related: {
        title: 'Sitede devam',
        products: 'Ürün kataloğu',
        productsDesc: 'Devekuşu derisi, Bizdavar’ın diğer üretiminin yanında',
        contact: 'Teklif ve proforma',
        contactDesc: 'Kalite, metraj, renk ve varış yerini gönderin',
        about: 'Bizdavar hakkında',
        aboutDesc: 'Şirket 2013’ten beri, İran’da ve bölgede'
      }
    },
    ar: {
      geoText: 'ننتج جلد النعام في إيران: كراست وجلد مصبوغ وساق. وصل الشحن إلى الصين وتركيا.',
      hero: {
        tag: 'إنتاج إيران · جلد غريب',
        title: 'جلد نعام إيراني: كراست ومصبوغ وساق',
        desc: 'ندبغ هذا الجلد في إيران، من الجلد الخام حتى يصبح جاهزًا للقص. يبدأ الكراست من 6.5 دولار للقدم المربع، والمصبوغ من 8.5 دولار، وكل ساق من 6 دولارات. وقد شحنا إلى الصين وتركيا.'
      },
      nav: { menu: 'أقسام الصفحة', about: 'عن الجلد', prices: 'السعر', specs: 'المواصفات', process: 'الإنتاج', gallery: 'المخزون والألوان', goods: 'الاستخدام', export: 'التصدير', faq: 'أسئلة', contact: 'استفسار' },
      about: {
        title: 'ندبغ جلد النعام في إيران',
        body: 'هذه الصفحة لـ<strong>جلد النعام الإيراني</strong>. ندبغ الجلد في إيران إلى أن يصبح جاهزًا للقص، ونبيعه هكذا لتاجر الجملة. جلد الجسم، كراستًا أو مصبوغًا، يُباع بالقدم المربع. والساق تُباع وحدها، بالقطعة.',
        body2: 'ليونة هذا الجلد من بصيلة الريشة، ويسمّيها السوق الكويل. هو أقل تشققًا عند الثني من كثير من الجلود، ويتنفس أكثر من جلد البقر. يُصنَّف مع التمساح والثعبان والسحلية في الجلود الغريبة، ولا يُطبع نقش الكويل. لطلب دفعة استخدموا <a href="/pages/contact">نموذج الاتصال</a> أو واتساب. بقية إنتاجنا في <a href="/pages/products">كتالوج المنتجات</a>.',
        specsTitle: 'ماذا نبيع',
        imageAlt: 'عينات ملونة من جلد نعام إيراني بنقش الكويل',
        thumb1Alt: 'جلد ساق نعام كراست، طوله نحو 70 سم',
        thumb2Alt: 'محفظة وحافظة بطاقات من جلد ساق النعام الأسود',
        thumb3Alt: 'لفة جلد نعام كراست على طاولة الورشة',
        spec1: 'جلد الجسم كراست: مدبوغ ولم يأخذ لونه النهائي',
        spec2: 'جلد الجسم المصبوغ: ألوان كثيرة، جاهز للقص',
        spec3: 'ساق النعام: حراشف الوسط كبيرة، وتصلح للبوت والجلود الصغيرة',
        spec4: 'الإنتاج في إيران، من الجلد الخام إلى الجلد الجاهز',
        spec5: 'تم الشحن إلى الصين وتركيا',
        spec6: 'الأسعار للبداية، والدرجة والمساحة واللون تُكتب على الفاتورة الأولية',
        ctaContact: 'استفسار جملة',
        ctaCatalog: 'كتالوج المنتجات'
      },
      prices: {
        eyebrow: 'سعر بداية الجملة',
        title: 'الكراست والجلد المصبوغ والساق',
        desc: 'في عرف هذه التجارة، القدم الواحدة قدم مربع. الأرقام أدناه أسعار بداية، وليست سعرًا ثابتًا لكل جلد.',
        crustName: 'الكراست',
        crustPrice: '$6.50',
        crustUnit: 'للقدم المربع · من هذا السعر',
        crustDesc: 'اكتملت دباغته حتى الكراست، ولونه الطبيعي كريمي. يناسب الورشة التي تصبغ بنفسها.',
        dyedName: 'جلد مصبوغ',
        dyedPrice: '$8.50',
        dyedUnit: 'للقدم المربع · من هذا السعر',
        dyedDesc: 'مصبوغ وجاهز للقص. طيف الألوان موجود في المخزن وفي صالة العرض.',
        legName: 'الساق',
        legPrice: '$6',
        legUnit: 'للساق الواحدة · من هذا السعر',
        legDesc: 'لجلد الساق صف حراشف كبيرة في الوسط. يُباع بالقطعة لا بالقدم المربع.',
        note: 'السعر النهائي يتوقف على درجة التاج، والمساحة التي تُقص، واللون، والسماكة، وحجم الطلب. نصدر الفاتورة الأولية بعد تحديد الدفعة.'
      },
      specs: {
        eyebrow: 'لمشتري المصنع',
        title: 'التاج والدرجة والكراست والساق',
        desc: 'هذه المصطلحات هي ما يُستعمل في المدبغة وبين تجار الجلد الغريب. نكتب رقم كل شحنة على الفاتورة الأولية. هذه الصفحة لا تغني عن تلك الفاتورة.',
        quillTitle: 'التاج والكويل',
        quillBody: 'الكويل نتوء مستدير في موضع الريشة. التاج وسط الجلد، وفيه يكون الكويل أكبر وأكثر انتظامًا. في العمل يكون نحو ثلثي الجلد كويلًا كاملًا، والباقي كويلًا ناعمًا أو سطحًا أملس. إذا أردتم مساحة من الكويل الكامل، اطلبوا نحو مرة ونصف تلك المساحة.',
        gradeTitle: 'الدرجات',
        gradeBody: 'نقيس الدرجة بقيمة قص التاج، لا باللون وحده. الدرجة الأولى تاج بلا عيب، وتصلح للحقائب والتنجيد. الدرجة الثانية فيها عيب أو عيبان. الدرجة الثالثة عيوبها أكثر، وتصلح للحذاء والبوت والجلود الصغيرة. الكويل غير الناضج أو الغائر قد ينزل بالدرجة. نذكر درجة كل دفعة على حدة.',
        crustTitle: 'الكراست والمصبوغ',
        crustBody: 'الكراست هو الجلد بعد الدباغة وإعادة الدباغة والتشحيم والتجفيف والتليين، وقبل اللون النهائي والتشطيب. لونه كريمي، وهو لصبغ المشتري. المصبوغ هو الجلد نفسه بعد اللون، جاهزًا للقص. سمك جلد الجسم في السوق غالبًا بين 0.6 و1.2 مم. نكتب سمك دفعتكم على الفاتورة الأولية.',
        legTitle: 'الساق',
        legBody: 'الساق ضيقة. في وسطها صف حراشف كبيرة، والجانبان أدق. في عينات المخزن الطول نحو 70 سم، والعرض حيث وُضع الشريط نحو 10 إلى 12 سم. هذا قياس العينة، وليس وعدًا لكل طلب. تُستخدم الساق للبوت وسوار الساعة والمحفظة وحافظة البطاقات.'
      },
      process: {
        eyebrow: 'مسار الإنتاج',
        title: 'يُنتج في إيران، وليس جلدًا خامًا من وسيط',
        desc: 'السلسلة داخل إيران: من الجلد إلى الكراست، ثم اللون، ثم عينة مقصوصة ومخيطة. صور الورشة والمخزن في هذه الصفحة من هذا الإنتاج.',
        s1Title: '١. الجلد والتحضير',
        s1Desc: 'جودة الكويل تتوقف على نضج الريشة عند أخذ الجلد. الريشة الناضجة تترك كويلًا مستديرًا ممتلئًا. الريشة غير الناضجة تترك كويلًا عريضًا وأجوف.',
        s2Title: '٢. الدباغة حتى الكراست',
        s2Desc: 'يُدبغ الجلد، ثم تُعاد دباغته ويُشحَّم، وبعد ذلك يُجفَّف ويُليَّن. الناتج لفة كراست كريمية تُقاس في الورشة.',
        s3Title: '٣. اللون والتشطيب',
        s3Desc: 'يخترق الصباغ الكراست. الألوان من الكريمي والبني إلى الأخضر والأزرق والأصفر والأرجواني. نصبغ الساق والجسم كلًا على حدة.',
        s4Title: '٤. الفحص والشحن',
        s4Desc: 'نكتب المساحة والدرجة واللون على الفاتورة الأولية. شحنا إلى الصين وتركيا. الوجهة الأخرى ندرسها مع النقل.'
      },
      gallery: {
        eyebrow: 'مخزون فعلي',
        title: 'كراست وساق وألوان وصالة العرض',
        desc: 'التقطنا هذه الصور في ورشتنا ومخزننا وصالة عرضنا. ليست صور كتالوج مصنوعة.',
        a1: 'لفة كراست نعام طولها نحو متر',
        c1: 'طول هذه العينة من لفة الكراست نحو 95 إلى 100 سم.',
        a2: 'جلود كراست معلقة بجانب عينات اللون في الورشة',
        c2: 'في الورشة، جلود الكراست بجانب عينة اللون وريش النعام.',
        a3: 'رزمة سيقان كراست عرضها نحو 10 إلى 12 سم',
        c3: 'عرض هذه الرزمة، على الشريط، نحو 10 إلى 12 سم.',
        a4: 'جلد نعام كامل بتاج ذي كويل',
        c4: 'في الجلد الكامل يكون تاج الكويل في الوسط، والحواف أملس.',
        a5: 'حوامل جلود الجسم والساق بألوان مختلفة',
        c5: 'في المخزن جلد الجسم في الأسفل، والساق على الصف العلوي.',
        a6: 'ثلاثة مستويات: جلد الجسم والساق والألواح المصبوغة',
        c6: 'ثلاثة مستويات: جلد الجسم، والساق، واللوح المصبوغ.',
        a7: 'مرآة محاطة بجلود نعام ملونة في صالة العرض',
        c7: 'في صالة العرض ألوان الجسم والساق المستعملة في الأحذية والحقائب.',
        a8: 'جلد نعام أخضر على مقعد صالة العرض',
        c8: 'الجلد الأخضر على المقعد، بجانب الأحزمة والحقائب.',
        a9: 'جلد أخضر داكن بجانب حقائب وأحذية جلدية',
        c9: 'الجلد المصبوغ ظاهر بجانب الحقيبة والحذاء والحزام.'
      },
      goods: {
        eyebrow: 'ماذا يُقص منه',
        title: 'ماذا يُخاط من هذا الجلد',
        desc: 'القطعة الجاهزة لا تُظهر إلا القص والخياطة. ما نبيعه هنا بالجملة هو الجلد نفسه، لا حقيبة واحدة.',
        a1: 'حافظات مستندات من جلد ساق النعام بعدة ألوان',
        c1: 'حافظة الساق بالبني والأزرق والبرتقالي والكحلي والأخضر.',
        a2: 'محفظة صفراء بشريط ساق، على جلد الجسم',
        c2: 'هذه المحفظة الصفراء من كويل الجسم، مع شريط من حراشف الساق.',
        a3: 'ثلاث حافظات بطاقات بالأسود والكونياك والبني على جلد نعام',
        c3: 'ثلاث حافظات موضوعة على جلد جسم ذي كويل.',
        a4: 'محافظ إلى جانب شريط ساق خام',
        c4: 'من شريط الساق الخام إلى المحفظة الجاهزة: أسود وأصفر وعسلي.'
      },
      export: {
        eyebrow: 'التصدير',
        title: 'شحنا إلى الصين وتركيا',
        body: 'وصل جلد النعام إلى <strong>الصين</strong> و<strong>تركيا</strong>. مصنع الأحذية أو الحقائب أو الجلود الصغيرة يستطيع أخذ الكراست وصبغه، أو طلب الجلد المصبوغ والساق. البداية من <a href="/pages/contact">الاتصال</a>. تعريف الشركة في <a href="/pages/about">عن بيزدوار</a>.',
        chinaTitle: 'الصين',
        chinaDesc: 'تم الشحن. يناسب المصانع التي تريد المساحة والدرجة مكتوبتين على الفاتورة الأولية.',
        turkeyTitle: 'تركيا',
        turkeyDesc: 'تم الشحن. لمشتري إسطنبول والأناضول الذين يعملون في الجلد الغريب طريق نقل إقليمي.',
        iranTitle: 'المنشأ: إيران',
        iranDesc: 'الإنتاج في إيران. لا نبيع جلدًا مستوردًا باسمنا. صور المخزن والورشة تُظهر ذلك.'
      },
      faq: {
        title: 'أسئلة تاجر الجملة',
        q1: 'هل القدم تعني قدمًا مربعًا؟',
        a1: 'نعم. في عرف هذه التجارة القدم الواحدة قدم مربع. يبدأ الكراست من 6.5 دولار والمصبوغ من 8.5 دولار للقدم المربع. الساق تُباع بالقطعة، ومن 6 دولارات.',
        q2: 'هل نستطيع صبغ الكراست بأنفسنا؟',
        a2: 'نعم. الكراست لهذا: جلد مدبوغ لم يأخذ لونه النهائي بعد. إذا أردتم اللون جاهزًا فخذوا سعر الجلد المصبوغ.',
        q3: 'كيف تذكرون الدرجة والمساحة؟',
        a3: 'نكتب درجة التاج والمساحة، وأبعاد دفعة الساق، على الفاتورة الأولية. الصور التي يظهر فيها شريط القياس عينات مخزن، وليست قياسًا ملزمًا لكل طلب.',
        q4: 'ما الحد الأدنى للطلب؟',
        a4: 'لا نعلن حدًا أدنى ثابتًا على الموقع. اذكروا الحجم والدرجة والوجهة لنسعّر تلك الدفعة. ويمكن إرسال عينة لمس النسيج قبل الطلب الكبير.',
        q5: 'إلى أي بلدان شحنتم؟',
        a5: 'صدّرنا جلد النعام إلى الصين وتركيا. الوجهات الأخرى ندرسها واحدة واحدة.'
      },
      related: {
        title: 'في مكان آخر من الموقع',
        products: 'كتالوج المنتجات',
        productsDesc: 'جلد النعام إلى جانب بقية إنتاج بيزدوار',
        contact: 'استفسار وفاتورة أولية',
        contactDesc: 'أرسلوا الدرجة والمساحة واللون والوجهة',
        about: 'عن بيزدوار',
        aboutDesc: 'الشركة منذ 2013، في إيران والمنطقة'
      }
    },
    ru: {
      geoText: 'Страусиную кожу мы выделываем в Иране: краст, окрашенная кожа и нога. Отгрузки были в Китай и Турцию.',
      hero: {
        tag: 'Производство Ирана · Экзотическая кожа',
        title: 'Иранская страусиная кожа: краст, окрашенная и нога',
        desc: 'Мы выделываем эту кожу в Иране, от сырой шкуры до кожи, готовой к раскрою. Краст начинается от $6.50 за квадратный фут, окрашенная кожа от $8.50, каждая нога от $6. В Китай и Турцию уже отгружали.'
      },
      nav: { menu: 'Разделы страницы', about: 'О коже', prices: 'Цены', specs: 'Характеристики', process: 'Производство', gallery: 'Склад и цвет', goods: 'Применение', export: 'Экспорт', faq: 'Вопросы', contact: 'Запрос' },
      about: {
        title: 'Страусиную кожу мы выделываем в Иране',
        body: 'Эта страница про <strong>иранскую страусиную кожу</strong>. Шкуру мы выделываем в Иране, пока она не готова к раскрою, и в таком виде отдаём её оптовому покупателю. Кожу тела, краст или окрашенную, продаём за квадратный фут. Ноги продаём отдельно, поштучно.',
        body2: 'Мягкость этой кожи идёт от фолликула пера. В торговле его называют квилл. На сгибе она трескается реже многих кож и дышит лучше, чем бычья. Вместе с крокодилом, змеёй и ящерицей это экзотическая кожа, и рисунок квилла не печатается. Запрос партии — через <a href="/pages/contact">форму</a> или WhatsApp. Остальное производство — в <a href="/pages/products">каталоге</a>.',
        specsTitle: 'Что продаём',
        imageAlt: 'Цветные образцы иранской страусиной кожи с рисунком квилла',
        thumb1Alt: 'Краст кожи ног страуса, длина около 70 см',
        thumb2Alt: 'Чёрный бумажник и картхолдер из кожи ноги страуса',
        thumb3Alt: 'Рулон краста страуса на столе цеха',
        spec1: 'Краст тела: выдублен, финального цвета ещё нет',
        spec2: 'Окрашенная кожа тела: широкая палитра, к раскрою',
        spec3: 'Нога страуса: крупная чешуя по центру, для сапог и мелкой кожи',
        spec4: 'Выделка в Иране, от шкуры до готовой кожи',
        spec5: 'Отгрузки в Китай и Турцию уже были',
        spec6: 'Цены стартовые; сорт, площадь и цвет пишем в проформе',
        ctaContact: 'Оптовый запрос',
        ctaCatalog: 'Каталог'
      },
      prices: {
        eyebrow: 'Стартовая оптовая цена',
        title: 'Краст, окрашенная кожа и нога',
        desc: 'В этой торговле один «фут» — это один квадратный фут. Цифры ниже — стартовые цены, а не фиксированная ставка за каждую шкуру.',
        crustName: 'Краст',
        crustPrice: '$6.50',
        crustUnit: 'за квадратный фут · от',
        crustDesc: 'Выдублен до краста, натуральный цвет кремовый. Подходит цеху, который красит сам.',
        dyedName: 'Окрашенная кожа',
        dyedPrice: '$8.50',
        dyedUnit: 'за квадратный фут · от',
        dyedDesc: 'Окрашена и готова к раскрою. Палитра есть на складе и в шоуруме.',
        legName: 'Нога',
        legPrice: '$6',
        legUnit: 'за ногу · от',
        legDesc: 'У кожи ноги по центру один ряд крупной чешуи. Продаётся поштучно, не за квадратный фут.',
        note: 'Итоговая цена зависит от сорта короны, полезной площади, цвета, толщины и объёма заказа. Проформу выставляем, когда партия определена.'
      },
      specs: {
        eyebrow: 'Для фабрики',
        title: 'Корона, сорт, краст и нога',
        desc: 'Это термины дубильни и покупателей экзотической кожи. Точные цифры каждой партии пишем в проформе. Эта страница проформу не заменяет.',
        quillTitle: 'Корона и квилл',
        quillBody: 'Квилл — круглая выпуклость на месте пера. Корона — центр шкуры, там квилл крупнее и ровнее. На практике около двух третей шкуры — полный квилл, остальное мелкий квилл или гладкое поле. Если нужна площадь полного квилла, заказывайте примерно в полтора раза больше.',
        gradeTitle: 'Сорт',
        gradeBody: 'Сорт смотрит на то, сколько короны можно скроить, а не только на цвет. Первый сорт — чистая корона, для сумок и обивки. Второй — один или два дефекта. Третий — дефектов больше, он идёт на обувь, сапоги и мелкую кожгалантерею. Недозрелый или просевший квилл может снизить сорт. Сорт каждой партии указываем отдельно.',
        crustTitle: 'Краст и окрашенная кожа',
        crustBody: 'Краст — это кожа после дубления, редубления, жирования, сушки и мягчения, до финального цвета и отделки. Она кремовая и рассчитана на краску покупателя. Окрашенная — та же шкура после цвета, к раскрою. На рынке кожа тела чаще всего около 0,6–1,2 мм. Толщину вашей партии пишем в проформе.',
        legTitle: 'Нога',
        legBody: 'Нога узкая. По центру один ряд крупной чешуи, по бокам зерно мельче. На складских образцах длина около 70 см, ширина там, где стояла рулетка, около 10–12 см. Это размер образца, а не обещание на каждый заказ. Нога идёт на сапоги, ремешки, бумажники и картхолдеры.'
      },
      process: {
        eyebrow: 'Как делаем',
        title: 'Выделываем в Иране, это не сырьё от посредника',
        desc: 'Цепочка внутри Ирана: от шкуры до краста, затем цвет, затем скроенный и сшитый образец. Фото цеха и склада на этой странице с этого производства.',
        s1Title: '1. Шкура и подготовка',
        s1Desc: 'Качество квилла зависит от того, спелым ли было перо, когда сняли шкуру. Спелое перо оставляет круглый полный квилл. Неспелое — плоский и пустой.',
        s2Title: '2. Дубление до краста',
        s2Desc: 'Шкуру дубят, затем редубят и жируют, после этого сушат и мягчат. На выходе кремовый рулон краста, его меряют в цехе.',
        s3Title: '3. Цвет и отделка',
        s3Desc: 'Краска проходит краст насквозь. Цвета от кремового и коричневого до зелёного, синего, жёлтого и мадженты. Ноги и тело красим отдельно.',
        s4Title: '4. Проверка и отгрузка',
        s4Desc: 'Площадь, сорт и цвет пишем в проформе. В Китай и Турцию уже отгружали. Другие направления смотрим вместе с перевозчиком.'
      },
      gallery: {
        eyebrow: 'Реальный склад',
        title: 'Краст, ноги, цвет и шоурум',
        desc: 'Эти фото сняты в нашем цехе, на складе и в шоуруме. Это не рендер каталога.',
        a1: 'Рулон краста страуса длиной около метра',
        c1: 'Длина этого рулона краста около 95–100 см.',
        a2: 'Краст на вешалках рядом с образцами цвета в цехе',
        c2: 'В цехе краст висит рядом с образцами цвета и страусиным пером.',
        a3: 'Стопка ног краста шириной около 10–12 см',
        c3: 'Ширина этой стопки ног по рулетке около 10–12 см.',
        a4: 'Целая шкура страуса с короной квилла',
        c4: 'На целой шкуре корона с квиллом в центре, края ровнее.',
        a5: 'Стеллажи кожи тела и ног разных цветов',
        c5: 'На складе кожа тела снизу, ноги на верхней перекладине.',
        a6: 'Три яруса: тело, нога и окрашенные полотна',
        c6: 'Три яруса: кожа тела, нога и окрашенное полотно.',
        a7: 'Зеркало в раме из цветных шкур страуса в шоуруме',
        c7: 'В шоуруме показаны цвета тела и ног для обуви и сумок.',
        a8: 'Зелёная шкура страуса на скамье шоурума',
        c8: 'Зелёная шкура лежит на скамье, рядом ремни и чемоданы.',
        a9: 'Тёмно-зелёная шкура рядом с сумками и обувью',
        c9: 'Окрашенная кожа показана рядом с сумкой, обувью и ремнём.'
      },
      goods: {
        eyebrow: 'Что из неё кроят',
        title: 'Что шьют из этой кожи',
        desc: 'Готовая вещь показывает только крой и строчку. Оптом на этой странице мы продаём саму кожу, а не одну сумку.',
        a1: 'Папки из кожи ноги страуса нескольких цветов',
        c1: 'Папки из ноги: коричневый, синий, оранжевый, тёмно-синий и зелёный.',
        a2: 'Жёлтый бумажник с полосой ноги на коже тела',
        c2: 'Этот жёлтый бумажник из квилла тела, с одной полосой чешуи ноги.',
        a3: 'Три картхолдера — чёрный, коньяк и коричневый — на шкуре страуса',
        c3: 'Три картхолдера лежат на коже тела с квиллом.',
        a4: 'Бумажники рядом с сырой полосой ноги',
        c4: 'От сырой полосы ноги до готового бумажника: чёрный, жёлтый и медовый.'
      },
      export: {
        eyebrow: 'Экспорт',
        title: 'Отгружали в Китай и Турцию',
        body: 'Страусиная кожа уже доходила до <strong>Китая</strong> и <strong>Турции</strong>. Фабрика обуви, сумок или мелкой кожи может взять краст и красить сама либо заказать окрашенную кожу и ноги. Начало — <a href="/pages/contact">контакт</a>. О компании — на странице <a href="/pages/about">Bizdavar</a>.',
        chinaTitle: 'Китай',
        chinaDesc: 'Отгрузка была. Подходит фабрикам, которым нужны площадь и сорт в проформе.',
        turkeyTitle: 'Турция',
        turkeyDesc: 'Отгрузка была. Для покупателей Стамбула и Анатолии, которые работают с экзотической кожей, есть региональный маршрут.',
        iranTitle: 'Происхождение: Иран',
        iranDesc: 'Производство в Иране. Импортные шкуры под своим именем не продаём. Фото склада и цеха это показывают.'
      },
      faq: {
        title: 'Вопросы оптового покупателя',
        q1: 'Фут — это квадратный фут?',
        a1: 'Да. В этой торговле один фут — один квадратный фут. Краст начинается от $6.50, окрашенная кожа от $8.50 за квадратный фут. Ногу продаём поштучно, от $6.',
        q2: 'Можно ли красить краст самим?',
        a2: 'Да. Краст для этого и нужен: выдубленная кожа, у которой ещё нет финального цвета. Если цвет нужен готовым, берите цену окрашенной кожи.',
        q3: 'Как вы указываете сорт и площадь?',
        a3: 'Сорт короны, площадь, а для ног размеры партии пишем в проформе. Фото с рулеткой — складские образцы. Это не обещание размера на каждый заказ.',
        q4: 'Какой минимум заказа?',
        a4: 'Фиксированный минимум на сайте не публикуем. Напишите объём, сорт и направление — оценим эту партию. Образец, чтобы пощупать кожу до крупного заказа, возможен.',
        q5: 'В какие страны уже отправляли?',
        a5: 'Страусиную кожу экспортировали в Китай и Турцию. Другие направления смотрим по одному.'
      },
      related: {
        title: 'Дальше по сайту',
        products: 'Каталог',
        productsDesc: 'Страусиная кожа рядом с остальным производством Bizdavar',
        contact: 'Запрос и проформа',
        contactDesc: 'Пришлите сорт, площадь, цвет и направление',
        about: 'О Bizdavar',
        aboutDesc: 'Компания с 2013 года, в Иране и регионе'
      }
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
