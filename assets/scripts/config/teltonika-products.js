/**
 * Teltonika Telematics — Product catalog
 * Source: wiki.teltonika-gps.com + teltonika-gps.com (2026 catalog)
 */
(function () {
  const base = 'assets/images/teltonika';
  const logo = `${base}/teltonika-logo.png`;
  const hero = `${base}/hero/fleet-telematics.webp`;
  const p = `${base}/products`;
  const cat = `${base}/categories`;
  const acad = `${base}/academy/teltonika-factory.jpg`;
  const ind = `${base}/industries`;

  const series = (names, note, featuredNames) =>
    names.map(name => ({
      name,
      note: note || 'GPS / IoT Telematics',
      featured: featuredNames ? featuredNames.includes(name) : false
    }));

  window.TELTONIKA_CATALOG = {
    brand: {
      name: 'Teltonika',
      nameFa: 'تلتونیکا',
      logo,
      heroImage: hero,
      heroImageAlt: 'Teltonika Fleet Telematics — GPS trackers and fleet management',
      heroEyebrow: 'تامین رسمی برای ناوگان و پروژه‌های IoT ایران',
      heroHeadline: 'ردیاب‌های Teltonika Telematics',
      heroHeadlineSub: 'Fleet Telematics، GPS، CAN/OBD، ویدئو و سنسور BLE — تامین اصل با مشاوره فنی فارسی',
      tagline: 'GPS Trackers & Fleet Telematics',
      taglineFa: 'ردیاب GPS و تله‌متیک ناوگان — ساخت لیتوانی',
      since: 'از سال ۱۹۹۸ · ۲۷+ سال',
      origin: 'ونیا، لیتوانی — ۲۶ کشور با دفتر محلی',
      officialUrl: 'https://www.teltonika-gps.com/',
      heroStats: [
        { value: '71+', label: 'مدل ردیاب' },
        { value: '35M+', label: 'دستگاه IoT' },
        { value: '12+', label: 'تجربه بیزدوار' }
      ],
      descriptionFa: 'بیزدوار گروپ تامین‌کننده ردیاب‌ها، سنسورها و راهکارهای Teltonika Telematics برای ناوگان، لجستیک، اموال و پروژه‌های IoT در ایران و منطقه است. محصول اصل، پیکربندی TCT/FOTA، مشاوره انتخاب مدل به فارسی و لجستیک بین‌المللی.'
    },

    trustSignals: [
      { icon: 'target', label: 'محصول اصل', desc: 'تامین از Teltonika Telematics — IMEI و firmware معتبر' },
      { icon: 'globe', label: '۳۵M+ دستگاه', desc: 'بیش از ۳۵ میلیون دستگاه IoT Teltonika در جهان مستقر شده' },
      { icon: 'mail', label: 'مشاوره فارسی', desc: 'انتخاب سری FMB/FMC/FTC، CAN، OBD یا Asset — بر اساس سناریوی واقعی' },
      { icon: 'lab', label: 'راهکار کامل', desc: 'TCT · FOTA WEB · Connectivity · DualCam · EYE Beacons' }
    ],

    whyBuyFromUs: [
      {
        icon: 'target',
        title: 'انتخاب درست مدل و connectivity',
        desc: '۲G/4G/M1، CAN bus، OBD Plug&Play یا Asset tracker — اگر مشخصات ناوگان را نمی‌دانید، نوع خودرو و داده مورد نیاز را بگویید. FMB920 تا FMC650 یا FTC305 را پیشنهاد می‌دهیم.'
      },
      {
        icon: 'factory',
        title: 'مناسب ناوگان ایران و منطقه',
        desc: 'حمل‌ونقل، لجستیک، کرایه خودرو، معدن، کشاورزی، توزیع سوخت و ناوگان سازمانی — با پشتیبانی فارسی از استانبول.'
      },
      {
        icon: 'document',
        title: 'پیش‌فاکتور و زمان‌بندی شفاف',
        desc: 'قبل از پرداخت، قیمت، lead time و کد سفارش (Order Code) رسمی Teltonika را دریافت می‌کنید.'
      },
      {
        icon: 'handshake',
        title: 'یک نقطه تماس برای سخت‌افزار و نرم‌افزار',
        desc: 'ردیاب + کابل + سنسور BLE + TCT/FOTA — همه از یک تیم. نیازی به مکاتبه مستقیم با تولیدکننده نیست.'
      }
    ],

    purchaseSteps: [
      { num: '۱', title: 'استعلام', desc: 'فرم یا واتساپ — نوع ناوگان، داده CAN/OBD/GPS، تعداد و مدل مورد نظر' },
      { num: '۲', title: 'مشاوره فنی', desc: 'پیشنهاد سری Basic/Advanced/Professional/FT — و لوازم جانبی' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'Order Code رسمی، قیمت، زمان تحویل و شرایط پرداخت' },
      { num: '۴', title: 'تامین و حمل', desc: 'سفارش از Teltonika، firmware و بسته‌بندی — لجستیک بین‌المللی' },
      { num: '۵', title: 'تحویل و پشتیبانی', desc: 'تحویل در ایران — راهنمای TCT، FOTA و wiki فنی' }
    ],

    iranIndustries: [
      { name: 'حمل‌ونقل و لجستیک', desc: 'FMB920/FMC125 — ردیابی ناوگان، مصرف سوخت، رفتار راننده', image: `${p}/fmb920.png`, imageAlt: 'Teltonika FMB920 — fleet GPS tracker', icon: 'globe' },
      { name: 'توزیع و پخش', desc: 'CAN/OBD — کیلومتر، DTC و دمای بار', image: `${p}/fmc150.png`, imageAlt: 'Teltonika FMC150 — CAN bus GPS tracker', icon: 'briefcase' },
      { name: 'کرایه و اشتراک خودرو', desc: 'Fast & Easy — نصب سریع FMB010/FMC800', image: `${p}/fmb010.png`, imageAlt: 'Teltonika FMB010 — fast install GPS tracker', icon: 'globe' },
      { name: 'معدن و ساخت', desc: 'IP67 — FMB204/FMB225 و EYE Beacon برای ابزار', image: `${p}/fmb225.png`, imageAlt: 'Teltonika FMB225 — IP67 professional tracker', icon: 'pickaxe' },
      { name: 'کشاورزی و ماشین‌آلات', desc: 'FMC230/FMC250 — CAN و GPS در شرایط سخت', image: `${p}/fmc230.png`, imageAlt: 'Teltonika FMC230 — advanced CAN GPS tracker', icon: 'factory' },
      { name: 'اموال و نیروی کار', desc: 'TAT100/TMT250/GH5200 — asset و ایمنی پرسنل', image: `${p}/tat100.png`, imageAlt: 'Teltonika TAT100 — autonomous asset tracker', icon: 'target' }
    ],

    faq: [
      {
        q: 'محصول اصل Teltonika است؟',
        a: 'بله — فقط محصول اصل Teltonika Telematics با IMEI معتبر و مستندات رسمی تامین می‌شود. کد سفارش (Order Code) در پیش‌فاکتور درج می‌شود.'
      },
      {
        q: 'کدام سری برای ناوگان معمولی کافی است؟',
        a: 'برای ردیابی پایه FMB920 (Basic) پرفروش‌ترین مدل است. برای CAN، tachograph یا IP67 — سری Advanced یا Professional (FMC650، FMB225) مناسب‌تر است.'
      },
      {
        q: 'Fleet Telematics Platform (FTC/FTM) چیست؟',
        a: 'پلتفرم نسل جدید Teltonika برای مدیریت ناوگان — شامل FTC305، FTM305، FTC164 و FTM164. برای پروژه‌های بزرگ ناوگانی با قابلیت‌های پیشرفته.'
      },
      {
        q: 'سنسور BLE و indoor tracking دارید؟',
        a: 'بله — EYE Beacon، EYE Sensor و نسل Mesh (EYE Beacon Mesh / EYE Sensor Mesh با Wirepas) برای ردیابی داخل ساختمان و دارایی.'
      },
      {
        q: 'نرم‌افزار پیکربندی و FOTA چطور است؟',
        a: 'TCT (Telematics Configuration Tool)، Teltonika Configurator، FOTA WEB برای به‌روزرسانی از راه دور و Connectivity Solution برای SIM جهانی — قابل معرفی در پیش‌فاکتور.'
      },
      {
        q: 'زمان تحویل به ایران چقدر است؟',
        a: 'معمولاً ۳ تا ۸ هفته بسته به مدل و موجودی انبار اروپا. زمان دقیق در پیش‌فاکتور اعلام می‌شود.'
      }
    ],

    inquiryTemplate: 'سلام، درخواست استعلام قیمت و تامین {product} از Teltonika دارم.\n\nنوع ناوگان / داده مورد نیاز:\nتعداد:\n',

    highlights: [
      {
        title: 'FMB920 — پرفروش‌ترین ردیاب 2G',
        titleTr: 'FMB920 Basic Tracker',
        desc: 'بیش از ۳ میلیون واحد فروش — ردیابی پایه، ضد سرقت و Green Driving',
        useCaseFa: 'ناوگان سبک، ضد سرقت، ردیابی پایه',
        badge: 'Bestseller',
        inquiryName: 'FMB920',
        image: `${p}/fmb920.png`,
        imageAlt: 'Teltonika FMB920 Basic GPS tracker',
        featured: true
      },
      {
        title: 'FTC305 / FTM305 — Fleet Telematics',
        titleTr: 'Fleet Telematics Platform',
        desc: 'پلتفرم نسل جدید مدیریت ناوگان Teltonika — استاندارد صنعت',
        useCaseFa: 'ناوگان بزرگ، لجستیک، عملیات بین‌المللی',
        badge: 'Fleet',
        inquiryName: 'FTC305',
        image: `${p}/ftc305.png`,
        imageAlt: 'Teltonika FTC305 Fleet Telematics Platform',
        featured: true
      },
      {
        title: 'FMC650 — Professional CAN',
        titleTr: 'FMC650 Professional',
        desc: 'تachograph، CAN bus و تجهیزات جانبی — برای کاربرد حرفه‌ای',
        useCaseFa: 'کامیون، اتوبوس، ماشین‌آلات سنگین',
        badge: 'Professional',
        inquiryName: 'FMC650',
        image: `${p}/fmc650.png`,
        imageAlt: 'Teltonika FMC650 Professional CAN GPS tracker',
        featured: true
      },
      {
        title: 'EYE Beacon Mesh / Sensor Mesh',
        titleTr: 'EYE Mesh Indoor Tracking',
        desc: 'ردیابی indoor با Wirepas Mesh — پوشش گسترده در محیط پیچیده',
        useCaseFa: 'انبار، کارخانه، ردیابی ابزار و دارایی',
        badge: 'BLE Mesh',
        inquiryName: 'EYE Beacon Mesh',
        image: `${p}/eye-beacon-mesh.png`,
        imageAlt: 'Teltonika EYE Beacon Mesh — indoor asset tracking'
      },
      {
        title: 'Teltonika DualCam / DSM',
        titleTr: 'Video Telematics',
        desc: 'ویدئو و عکس از جاده — ADAS و ایمنی راننده',
        useCaseFa: 'ناوگان حمل، بیمه، ایمنی راننده',
        badge: 'Video',
        inquiryName: 'Teltonika DualCam',
        image: `${p}/dualcam.jpg`,
        imageAlt: 'Teltonika DualCam — dual camera video telematics'
      },
      {
        title: 'FMB001 — OBD Plug & Play',
        titleTr: 'OBD Trackers',
        desc: 'نصب فوری — خواندن OBD: کیلومتر، RPM، سوخت، DTC',
        useCaseFa: 'کرایه خودرو، ناوگان سبک، نصب بدون سیم‌کشی',
        badge: 'OBD',
        inquiryName: 'FMB001',
        image: `${p}/fmb001.png`,
        imageAlt: 'Teltonika FMB001 OBD Plug and Play GPS tracker'
      },
      {
        title: 'TCT — Telematics Configuration Tool',
        titleTr: 'TCT Software',
        desc: 'ابزار پیکربندی نسل جدید — web و desktop، به‌روزرسانی خودکار',
        useCaseFa: 'استقرار انبوه، مدیریت fleet',
        badge: 'Software',
        inquiryName: 'TCT',
        image: `${p}/tct.png`,
        imageAlt: 'Teltonika TCT — Telematics Configuration Tool'
      },
      {
        title: 'Dead Reckoning',
        titleTr: 'Dead Reckoning',
        desc: 'ادامه ردیابی حتی بدون GPS — مقاوم در برابر jammer',
        useCaseFa: 'ضد سرقت، تونل، پارکینگ زیرزمین',
        badge: 'DR',
        inquiryName: 'Dead Reckoning Tracker',
        image: `${p}/fmc920.png`,
        imageAlt: 'Teltonika FMC920 — GPS tracker with Dead Reckoning'
      }
    ],

    categories: [
      {
        id: 'basic',
        title: 'Basic — ردیاب‌های پایه',
        titleTr: 'Basic Trackers',
        icon: 'globe',
        image: `${cat}/basic.png`,
        imageAlt: 'Teltonika Basic GPS trackers — FMB920 series',
        desc: 'ردیابی ساده و مقرون‌به‌صرفه — FMB920 پرفروش‌ترین مدل جهان',
        series: series(
          ['FMB900', 'FMB910', 'FMB920', 'FMC920', 'FMM920', 'FMB930', 'FMB965', 'FTC920', 'FTC921', 'FTC924', 'FTC927', 'FTC961', 'FTC965'],
          'Basic / Fleet Telematics',
          ['FMB920', 'FMC920', 'FTC920']
        )
      },
      {
        id: 'fast-easy',
        title: 'Fast & Easy — نصب سریع',
        titleTr: 'Fast & Easy Trackers',
        icon: 'bolt',
        image: `${cat}/fast-easy.png`,
        imageAlt: 'Teltonika Fast and Easy GPS trackers',
        desc: 'نصب در چند دقیقه — بدون ابزار خاص',
        series: series(
          ['FMP100', 'FMB010', 'FMB020', 'FMC800', 'FMM800', 'FMM80A', 'FMT100', 'FMC880', 'FMM880', 'FTC881', 'FTC880', 'FTM880', 'FTC887', 'FTM887'],
          'Fast & Easy / IP65 / Fleet',
          ['FMB010', 'FMC800']
        )
      },
      {
        id: 'advanced',
        title: 'Advanced — پیشرفته',
        titleTr: 'Advanced Trackers',
        icon: 'sensor',
        image: `${p}/fmc230.png`,
        imageAlt: 'Teltonika FMC230 Advanced IP67 GPS tracker',
        desc: 'IP67، احراز هویت راننده، ورودی/خروجی انعطاف‌پذیر',
        series: series(
          ['FMB110', 'FMB120', 'FMB122', 'FMB130', 'FMC130', 'FMM130', 'FMM13A', 'FMB202', 'FMB204', 'FMB209', 'FMB230', 'FMC230', 'FMC234', 'FMM230', 'FTC134', 'FTM134', 'FTC164', 'FTM164'],
          'Advanced / IP67 / Fleet',
          ['FMB130', 'FMC230', 'FTC164']
        )
      },
      {
        id: 'professional',
        title: 'Professional — حرفه‌ای',
        titleTr: 'Professional Trackers',
        icon: 'factory',
        image: `${p}/fmc650.png`,
        imageAlt: 'Teltonika FMC650 Professional CAN GPS tracker',
        desc: 'tachograph، CAN، RS232/RS485 — برای سخت‌ترین سناریوها',
        series: series(
          ['FMC650', 'FMM650', 'FMB125', 'FMC125', 'FMM125', 'FMB225', 'FMC225'],
          'Professional / IP67',
          ['FMC650', 'FMB225', 'FMC125']
        )
      },
      {
        id: 'obd',
        title: 'OBD — Plug & Play',
        titleTr: 'OBD Trackers',
        icon: 'globe',
        image: `${p}/fmb001.png`,
        imageAlt: 'Teltonika FMB001 OBD GPS tracker',
        desc: 'خواندن OBD II — کیلومتر، RPM، سوخت، کد خطا',
        series: series(['FMB001', 'FMB003', 'FMC003', 'FMM003', 'FMM00A'], 'OBD Data', ['FMB001'])
      },
      {
        id: 'can',
        title: 'CAN — باس خودرو',
        titleTr: 'CAN Trackers & Adapters',
        icon: 'wrench',
        image: `${p}/fmc150.png`,
        imageAlt: 'Teltonika FMC150 CAN bus GPS tracker',
        desc: 'CAN bus، FMS، J1939 — برای ماشین‌آلات سنگین',
        series: series(
          ['FMB140', 'FMB150', 'FMC150', 'FMM150', 'LV-CAN200', 'ALL-CAN300', 'CAN-CONTROL', 'ECAN02', 'FMB240', 'FMC250', 'FMM250'],
          'CAN / Adapter / IP67',
          ['FMC150', 'ALL-CAN300', 'FMC250']
        )
      },
      {
        id: 'e-mobility',
        title: 'E-Mobility — mobility برقی',
        titleTr: 'E-Mobility Trackers',
        icon: 'bolt',
        image: `${p}/ftc305.png`,
        imageAlt: 'Teltonika FTC305 E-Mobility Fleet Telematics tracker',
        desc: 'اسکوتر، e-bike، لیفتراک و fleet اشتراکی برقی',
        series: series(['TFT100', 'FTC305', 'FTM305', 'FTC308', 'FTM308'], 'E-Mobility / Fleet / IP67', ['FTC305', 'FTM305'])
      },
      {
        id: 'autonomous',
        title: 'Asset & Workforce — autonomous',
        titleTr: 'Autonomous Trackers',
        icon: 'target',
        image: `${p}/tat100.png`,
        imageAlt: 'Teltonika TAT100 autonomous asset tracker',
        desc: 'ردیابی دارایی بدون برق و ایمنی پرسنل',
        series: series(['TAT100', 'TAT140', 'TAT141', 'TAT240', 'GH5200', 'ATC700', 'ATM700', 'TMT250'], 'Asset / Personal Safety', ['TAT100', 'GH5200', 'TMT250'])
      },
      {
        id: 'sensors',
        title: 'Sensors & Beacons — BLE',
        titleTr: 'Sensors & Beacons',
        icon: 'sensor',
        image: `${p}/eye-beacon.jpg`,
        imageAlt: 'Teltonika EYE Beacon — BLE indoor tracking',
        desc: 'EYE Beacon/Sensor و Mesh indoor — دما، رطوبت، دارایی',
        series: series(
          ['EYE Beacon', 'EYE Sensor', 'EYE Beacon Mesh', 'EYE Sensor Mesh', 'Wirepas Mesh WNT', 'Wirepas Mesh WPE'],
          'Bluetooth LE / Mesh',
          ['EYE Beacon', 'EYE Beacon Mesh']
        )
      },
      {
        id: 'video',
        title: 'Video Telematics — ویدئو',
        titleTr: 'Video Solutions',
        icon: 'monitor',
        image: `${p}/dualcam.jpg`,
        imageAlt: 'Teltonika DualCam video telematics camera',
        desc: 'DualCam، ADAS — ویدئو و عکس از cab',
        series: series(['Teltonika DualCam', 'Teltonika DSM', 'ADAS Solution'], 'Video / ADAS', ['Teltonika DualCam', 'ADAS Solution'])
      },
      {
        id: 'software',
        title: 'Solutions — نرم‌افزار و پلتفرم',
        titleTr: 'Software & Solutions',
        icon: 'monitor',
        image: `${p}/tct.png`,
        imageAlt: 'Teltonika TCT and fleet software solutions',
        desc: 'TCT، FOTA، Connectivity، TachoSync — مدیریت fleet',
        series: series(
          ['TCT — Telematics Configuration Tool', 'FOTA WEB', 'Teltonika Configurator', 'Connectivity Solution', 'TachoSync', 'WEB Tacho', 'Fleet Telematics Platform'],
          'Software / Cloud',
          ['TCT', 'FOTA WEB', 'Connectivity Solution']
        )
      },
      {
        id: 'accessories',
        title: 'Accessories — لوازم جانبی',
        titleTr: 'Accessories',
        icon: 'wrench',
        image: `${p}/data-cables.webp`,
        imageAlt: 'Teltonika GPS tracker accessories and cables',
        desc: 'کابل داده/برق، RFID، fuel sensor، relay، case',
        series: series(
          ['DATA CABLES — FMS J1939/J1708', 'POWER CABLES', '1-Wire RFID Reader', 'TAT100 Holder', 'Readers & Holders', 'Fuel Monitoring Sensors', 'Relays', 'Satellite Data Modules', 'IP67 Cases'],
          'Accessory',
          ['DATA CABLES', 'POWER CABLES']
        )
      }
    ],

    industries: [
      { name: 'Fleet Telematics', nameTr: 'Fleet Telematics', desc: 'مدیریت ناوگان، مصرف سوخت، رفتار راننده', image: hero, imageAlt: 'Teltonika Fleet Telematics use cases', icon: 'globe' },
      { name: 'Logistics & Delivery', nameTr: 'Logistics', desc: 'لجستیک و پخش — ETA و cold chain', image: `${p}/fmc650.png`, imageAlt: 'Teltonika FMC650 for logistics fleet', icon: 'briefcase' },
      { name: 'Car Sharing & Rental', nameTr: 'Car Sharing', desc: 'اشتراک و کرایه — OBD و Fast & Easy', image: `${p}/fmb001.png`, imageAlt: 'Teltonika FMB001 OBD for car sharing', icon: 'globe' },
      { name: 'E-Mobility', nameTr: 'E-Mobility', desc: 'اسکوتر، bike و forklift برقی', image: `${p}/ftc305.png`, imageAlt: 'Teltonika FTC305 E-Mobility tracker', icon: 'bolt' },
      { name: 'Utility & Emergency', nameTr: 'Utility Transport', desc: 'خدمات شهری و امداد', image: `${p}/fmc230.png`, imageAlt: 'Teltonika FMC230 for utility vehicles', icon: 'factory' },
      { name: 'Agriculture & Mining', nameTr: 'Agri & Mining', desc: 'IP67 و CAN در مزرعه و معدن', image: `${p}/fmb225.png`, imageAlt: 'Teltonika FMB225 IP67 for mining', icon: 'pickaxe' },
      { name: 'Assets & Workforce', nameTr: 'Assets & Workforce', desc: 'دارایی و ایمنی پرسنل', image: `${p}/tat100.png`, imageAlt: 'Teltonika TAT100 asset tracker', icon: 'target' },
      { name: 'Driver Safety', nameTr: 'Driver Safety', desc: 'DualCam، ADAS و Green Driving', image: `${ind}/driver-safety.jpg`, imageAlt: 'Teltonika DualCam driver safety solution', icon: 'shield' }
    ],

    academy: {
      title: 'Teltonika Telematics — ۲۷+ سال نوآوری IoT',
      descFa: 'Teltonika یکی از پیشروان جهانی در hardware تله‌متیک است — ۹۲٪ رضایت مشتری، تیم R&D در حال رشد و بیش از ۱۵۰۰ صفحه Wiki فنی. بیزدوار گروپ پل بین شما و Teltonika برای انتخاب، تامین و استقرار است.',
      image: acad,
      imageAlt: 'Teltonika GPS trackers — fleet telematics hardware',
      imageSecondary: `${cat}/basic.png`,
      imageSecondaryAlt: 'Teltonika Basic tracker product line',
      topics: [
        'کاتالوگ محصول ۲۰۲۶ — Trackers، Sensors، Video، Solutions',
        'Wiki فنی — datasheet، firmware، use case',
        'TCT و FOTA WEB — پیکربندی و به‌روزرسانی remote',
        'Dead Reckoning — ردیابی بدون GPS',
        'EYE Mesh — indoor tracking مقیاس‌پذیر'
      ]
    },

    services: [
      { title: 'مشاوره انتخاب مدل', desc: 'Basic تا Professional — بر اساس داده CAN/OBD/GPS و محیط نصب' },
      { title: 'Order Code رسمی', desc: 'کد سفارش Teltonika در پیش‌فاکتور — بسته استاندارد یا سفارشی' },
      { title: 'لوازم جانبی و کابل', desc: 'DATA/POWER cable، CAN adapter، fuel sensor، beacon' },
      { title: 'لجستیک بین‌المللی', desc: 'از انبار اروپا/ترکیه تا تحویل در ایران' },
      { title: 'راه‌اندازی TCT/FOTA', desc: 'راهنمای پیکربندی اولیه و firmware update' },
      { title: 'پشتیبانی فارسی', desc: 'یک نقطه تماس — info@bizdavar.com و واتساپ' }
    ],

    useCases: [
      'Anti-theft & Stolen Vehicle Recovery',
      'CAN bus & tachograph data',
      'Indoor tracking with EYE Beacons',
      'Video telematics & ADAS',
      'E-mobility fleet management',
      'Construction tools & equipment tracking'
    ]
  };
})();
