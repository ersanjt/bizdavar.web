/**
 * Teraoka Seiko — Scales, labeling & POS (Japan)
 * Product names & images: teraokaseiko.com official catalog
 */
(function () {
  const base = 'assets/images/teraoka';
  const hero = `${base}/hero/teraoka-retail-hero.webp`;
  const luxeed = `${base}/products/luxeed-l-retail-scale.png`;
  const ds782 = `${base}/products/ds-782-service-scale.jpg`;
  const pos = `${base}/products/w5600srx-pos.png`;
  const label = `${base}/products/lx5600-label-printer.jpg`;
  const checkout = `${base}/products/aw5600-checkout-scale.png`;
  const portable = `${base}/products/ds-502hd-portable-scale.jpg`;
  const industrial = `${base}/products/tcs-205-industrial-scale.png`;
  const indSuper = `${base}/industries/supermarket-retail.webp`;
  const indFood = `${base}/industries/food-service.webp`;
  const indLogistics = `${base}/industries/logistics-warehouse.webp`;
  const indHospitality = `${base}/industries/hospitality.webp`;
  const logo = 'assets/images/partners/teraoka.svg';

  const series = (names, note, featuredNames) =>
    names.map(name => ({
      name,
      note: note || 'Teraoka Seiko equipment',
      featured: featuredNames ? featuredNames.includes(name) : false
    }));

  window.TERAOKA_CATALOG = {
    brand: {
      name: 'Teraoka Seiko',
      logo,
      logoAlt: 'Teraoka Seiko — Japanese scales, label printers and POS systems',
      heroImage: hero,
      heroImageAlt: 'Teraoka Seiko retail scales and checkout systems in a supermarket',
      heroEyebrow: 'تامین رسمی Teraoka Seiko (DIGI) از ژاپن',
      heroHeadline: 'ترازو، POS و برچسب‌زن Teraoka Seiko',
      heroHeadlineSub: 'Luxeed-L · W-5600SRX · LX-5600 · DS-782 — کیفیت و دقت ژاپن برای retail و food service',
      tagline: 'Scales, Label Printers & POS',
      taglineFa: 'ترازو، پرینتر لیبل و POS — ساخت ژاپن',
      since: 'از ۱۹۲۳ · Tokyo',
      descriptionFa: 'بیزدوار گروپ تامین‌کننده ترازو، صندوق فروشگاهی (POS)، پرینتر لیبل و تجهیزات food service برند Teraoka Seiko برای سوپرمارکت، deli، رستوران و انبار در ایران است. انتخاب مدل رسمی (Luxeed-L، W-5600SRX، LX-5600، DS-782)، مشاوره فنی و لجستیک بین‌المللی از ژاپن.',
      heroStats: [
        { value: '100+ yrs', label: 'تاریخچه برند' },
        { value: 'Luxeed / W / LX', label: 'سری‌های شاخص' },
        { value: 'Global', label: 'نصب جهانی' }
      ]
    },

    trustSignals: [
      { icon: 'target', label: 'محصول اصل Teraoka', desc: 'تامین از Teraoka Seiko ژاپن — ساخت، QC و مشخصات کارخانه' },
      { icon: 'globe', label: 'مشاوره فارسی', desc: 'انتخاب Luxeed-L، W-5600SRX، LX-5600 یا DS-782 بر اساس نوع فروشگاه' },
      { icon: 'factory', label: 'Food service & retail', desc: 'deli، fresh food، hypermarket و franchise premium' },
      { icon: 'mail', label: 'لجستیک بین‌المللی', desc: 'ژاپن → ترکیه/امارات → ایران — lead time شفاف در پیش‌فاکتور' }
    ],

    whyBuyFromUs: [
      { icon: 'target', title: 'کیفیت premium ژاپن', desc: 'برای پروژه‌هایی که دقت، دوام و brand image مهم است — Teraoka Seiko استاندارد صنعت food retail در آسیا و اروپا است.' },
      { icon: 'factory', title: 'اکوسystem یکپارچه', desc: 'ترازوی service (Luxeed-L / DS-782)، POS (W-5600SRX) و label printer (LX-5600) — یک پیش‌فاکتور هماهنگ.' },
      { icon: 'document', title: 'مشخصات دقیق در پیش‌فاکتور', desc: 'مدل، ظرفیت، رزولوشن، پورت و Incoterms — قبل از پرداخت.' },
      { icon: 'handshake', title: 'Digi یا Teraoka؟', desc: 'Digi System از ترکیه lead time کوتاه‌تر؛ Teraoka Seiko برای food-service حرفه‌ای و پروژه premium — هر دو از بیزدوار.' }
    ],

    purchaseSteps: [
      { num: '۱', title: 'استعلام', desc: 'نوع فروشگاه، مدل (Luxeed-L / W-5600SRX / LX-5600)، تعداد و voltage' },
      { num: '۲', title: 'مشاوره', desc: 'پیشنهاد scale + label + POS متناسب با layout فروشگاه' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت Teraoka Seiko، lead time ژاپن، Incoterms و شرایط پرداخت' },
      { num: '۴', title: 'تامین', desc: 'سفارش رسمی — بیمه حمل، بسته‌بندی صنعتی' },
      { num: '۵', title: 'تحویل', desc: 'تحویل در ایران — راهنمای راه‌اندازی و کالیبراسیون اولیه' }
    ],

    highlights: [
      {
        title: 'Luxeed-L — ترازوی service counter',
        titleTr: 'Luxeed-L Service Scale',
        desc: 'ترازوی premium با طراحی فروشگاهی — PLU، label و اتصال POS',
        useCaseFa: 'deli، fresh corner، butcher counter',
        badge: 'Luxeed-L',
        inquiryName: 'Teraoka Luxeed-L',
        image: luxeed,
        imageAlt: 'Teraoka Seiko Luxeed-L service counter retail scale with PLU display'
      },
      {
        title: 'W-5600SRX — POS فروشگاهی',
        titleTr: 'W-5600SRX POS Terminal',
        desc: 'صندوق POS ژاپن — one-stop checkout، EFT و یکپارچگی با ترازو',
        useCaseFa: 'hypermarket، supermarket chain',
        badge: 'POS',
        inquiryName: 'Teraoka W-5600SRX',
        image: pos,
        imageAlt: 'Teraoka Seiko W-5600SRX retail POS checkout terminal'
      },
      {
        title: 'LX-5600 — پرینتر لیبل',
        titleTr: 'LX-5600 Label Printer',
        desc: 'چاپ GS1، nutrition facts و price label — اتصال به ترازو',
        useCaseFa: 'deli، bakery، prepared food',
        badge: 'Label',
        inquiryName: 'Teraoka LX-5600',
        image: label,
        imageAlt: 'Teraoka Seiko LX-5600 retail label printer for GS1 barcodes'
      },
      {
        title: 'DS-782 — ترازوی counter',
        titleTr: 'DS-782 Counter Scale',
        desc: 'عملیات ساده، LCD با backlight — کارایی counter service',
        useCaseFa: 'قصابی، ماهی، پنیر، counter service',
        badge: 'DS-782',
        inquiryName: 'Teraoka DS-782',
        image: ds782,
        imageAlt: 'Teraoka Seiko DS-782 face-to-face service counter scale'
      }
    ],

    categories: [
      {
        id: 'retail-scales',
        title: 'Retail scales — Luxeed-L / AW-5600',
        titleTr: 'Retail & Checkout Scales',
        icon: 'globe',
        image: checkout,
        imageAlt: 'Teraoka Seiko AW-5600 AI retail checkout scale with recognition',
        desc: 'Luxeed-L service scale و AW-5600 checkout — PLU، label، AI recognition',
        series: series(
          ['Luxeed-L', 'AW-5600', 'DS-782', 'AW-5600α II', 'Price computing'],
          'Retail / Service / Checkout',
          ['Luxeed-L', 'AW-5600', 'DS-782']
        )
      },
      {
        id: 'deli',
        title: 'Deli & fresh food — DS-782 / DS-502HD',
        titleTr: 'Deli & Fresh Food',
        icon: 'globe',
        image: ds782,
        imageAlt: 'Teraoka Seiko DS-782 deli and fresh food service counter scale',
        desc: 'Service counter، portion control و ترازوی portable outdoor',
        series: series(
          ['DS-782', 'DS-502HD', 'DS-65', 'Portion scale', 'Hanging scale'],
          'Deli / Fresh / Portable',
          ['DS-782', 'DS-502HD']
        )
      },
      {
        id: 'label',
        title: 'Label printers — LX-5600',
        titleTr: 'Label Printers',
        icon: 'wrench',
        image: label,
        imageAlt: 'Teraoka Seiko LX-5600 label printer integrated with retail scales',
        desc: 'LX-5600 — GS1، nutrition labeling و scale integration',
        series: series(['LX-5600', 'Scale-linked printer', 'Label design software'], 'Label / LX series', ['LX-5600'])
      },
      {
        id: 'pos',
        title: 'POS — W-5600SRX',
        titleTr: 'W-Series POS',
        icon: 'monitor',
        image: pos,
        imageAlt: 'Teraoka Seiko W-5600SRX supermarket POS register system',
        desc: 'W-5600SRX — hypermarket POS، EFT، self-checkout integration',
        series: series(['W-5600SRX', 'HappySelf (G3)', 'IPT2000', 'Payoss', 'EFT integration'], 'POS / W series', ['W-5600SRX'])
      },
      {
        id: 'industrial',
        title: 'Industrial weighing — TCS-205 / DSX',
        titleTr: 'Industrial Scales',
        icon: 'factory',
        image: industrial,
        imageAlt: 'Teraoka Seiko TCS-205 industrial portioning and checkweigh scale',
        desc: 'TCS-205 portioning، platform و counting — انبار و food production',
        series: series(['TCS-205', 'DSX-1000', 'Platform scale', 'Counting scale', 'Checkweigher'], 'Industrial / Production', ['TCS-205', 'DSX-1000'])
      }
    ],

    iranIndustries: [
      { name: 'Hypermarket و supermarket', desc: 'Luxeed-L + W-5600SRX + LX-5600 یکپارچه', image: indSuper, imageAlt: 'Teraoka Seiko scales and POS for Iranian hypermarkets', icon: 'briefcase' },
      { name: 'Deli و fresh food', desc: 'DS-782 service counter + label printer', image: ds782, imageAlt: 'Teraoka DS-782 deli counter scale for fresh food in Iran', icon: 'globe' },
      { name: 'رستوران و catering', desc: 'portion control، kitchen scale و DS-502HD portable', image: indFood, imageAlt: 'Teraoka Seiko food service weighing for restaurants', icon: 'globe' },
      { name: 'انبار و logistics', desc: 'TCS-205 و platform scale برای warehouse', image: indLogistics, imageAlt: 'Teraoka industrial scales for warehouse and logistics', icon: 'factory' },
      { name: 'Franchise premium', desc: 'استاندارد تجهیز یکسان ژاپن در شعب', image: luxeed, imageAlt: 'Teraoka Luxeed-L premium franchise retail equipment', icon: 'briefcase' },
      { name: 'صادرات مواد غذایی', desc: 'checkweigher، GS1 label و TCS-205', image: industrial, imageAlt: 'Teraoka TCS-205 checkweigh scale for food export labeling', icon: 'factory' }
    ],

    industries: [
      { name: 'Supermarket & Hypermarket', nameTr: 'Supermarket', desc: 'Luxeed-L, AW-5600 and W-5600SRX POS', image: indSuper, imageAlt: 'Teraoka supermarket retail solutions', icon: 'briefcase' },
      { name: 'Food Service & Deli', nameTr: 'Food Service', desc: 'DS-782 service scales and LX-5600 labels', image: indFood, imageAlt: 'Teraoka food service and deli equipment', icon: 'globe' },
      { name: 'Logistics & Warehouse', nameTr: 'Logistics', desc: 'TCS-205 and industrial weighing', image: indLogistics, imageAlt: 'Teraoka logistics and warehouse scales', icon: 'factory' },
      { name: 'Hospitality', nameTr: 'Hospitality', desc: 'Kitchen and portion control scales', image: indHospitality, imageAlt: 'Teraoka hospitality weighing equipment', icon: 'globe' }
    ],

    academy: {
      title: 'Teraoka Seiko — بیش از ۱۰۰ سال نوآوری در توکیو',
      descFa: 'Teraoka Seiko (DIGI) از پیشگامان ترازو، POS و label printer در ژاپن است — حضور global در food retail. بیزدوار گروپ برای پروژه‌های premium ایران تامین، پیش‌فاکتور و لجستیک را مدیریت می‌کند.',
      image: luxeed,
      imageAlt: 'Teraoka Seiko Luxeed-L retail scale — official supply by Bizdavar Group',
      imageSecondary: logo,
      imageSecondaryAlt: 'Teraoka Seiko corporate logo',
      topics: [
        'Luxeed-L vs DS-782 — انتخاب ترازوی service counter',
        'W-5600SRX POS — یکپارچگی با scale و EFT',
        'LX-5600 — GS1 و nutrition labeling',
        'Lead time ژاپن و گزینه transship از امارات/ترکیه',
        'Teraoka premium vs Digi System Turkey — مقایسه lead time'
      ]
    },

    services: [
      { title: 'مشاوره انتخاب Luxeed / W / LX', desc: 'بر اساس نوع فروشگاه، layout و budget' },
      { title: 'پیش‌فاکتور رسمی', desc: 'مدل دقیق، Incoterms، lead time و مشخصات فنی' },
      { title: 'لجستیک ژاپن → ایران', desc: 'حمل، بیمه، هماهنگی ترخیص' },
      { title: 'جایگزین Digi System', desc: 'اگر lead time کوتاه‌تر از ترکیه اولویت است' },
      { title: 'پشتیبانی فارسی', desc: 'استعلام، پیگیری سفارش و FAQ فنی' }
    ],

    faq: [
      { q: 'Teraoka Seiko اصل ژاپن است؟', a: 'بله — تجهیزات اصل Teraoka Seiko (DIGI) با مشخصات کارخانه و مدل رسمی در پیش‌فاکتور.' },
      { q: 'Teraoka یا Digi System؟', a: 'Teraoka Seiko: premium ژاپن، food-service عمیق، lead time ۶–۱۲ هفته. Digi System: ترکیه، lead time کوتاه‌تر، retail عمومی.' },
      { q: 'مدل‌های شاخص کدام‌اند؟', a: 'Luxeed-L (service scale)، W-5600SRX (POS)، LX-5600 (label printer)، DS-782 (counter)، AW-5600 (checkout AI).' },
      { q: 'زمان تحویل به ایران؟', a: 'معمولاً ۶ تا ۱۲ هفته — بسته به مدل و مسیر حمل از ژاپن.' },
      { q: 'label roll و قطعه مصرفی؟', a: 'LX-5600 consumables و label roll در پیش‌فاکتور دوره‌ای قابل تامین است.' }
    ],

    inquiryTemplate: 'سلام، درخواست استعلام {product} از Teraoka Seiko دارم.\n\nنوع فروشگاه:\nمدل (Luxeed-L / W-5600SRX / LX-5600 / DS-782):\nتعداد:\n',

    officialUrl: 'https://www.teraokaseiko.com/jp/'
  };
})();
