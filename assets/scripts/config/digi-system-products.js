/**
 * Digi System (DIGI) — Retail scales, POS & store equipment
 * Product names & images: digisystem.com official catalog · Turkey supply via Bizdavar
 */
(function () {
  const base = 'assets/images/digi-system';
  const hero = `${base}/hero/digi-retail-hero.webp`;
  const sm6000 = `${base}/products/sm-6000-retail-scale.png`;
  const sm5300 = `${base}/products/sm-5300-retail-scale.png`;
  const pos = `${base}/products/w5600srx-pos.png`;
  const label = `${base}/products/lx5600-label-printer.jpg`;
  const checkout = `${base}/products/aw5600-checkout-scale.png`;
  const ds782 = `${base}/products/ds-782-service-scale.jpg`;
  const webspeeza = `${base}/products/webspeezasl-pos.png`;
  const delious = `${base}/products/delious-wiz-pos.png`;
  const happyself = `${base}/products/happyself-g3.png`;
  const indSuper = `${base}/industries/supermarket-retail.webp`;
  const indFood = `${base}/industries/food-service.webp`;
  const indLogistics = `${base}/industries/logistics-warehouse.webp`;
  const indHospitality = `${base}/industries/hospitality.webp`;
  const logo = 'assets/images/partners/digi-system.svg';

  const series = (names, note, featuredNames) =>
    names.map(name => ({
      name,
      note: note || 'Digi System retail equipment',
      featured: featuredNames ? featuredNames.includes(name) : false
    }));

  window.DIGI_SYSTEM_CATALOG = {
    brand: {
      name: 'Digi System',
      logo,
      logoAlt: 'Digi System (DIGI) — retail POS and weighing scales supplied from Turkey',
      heroImage: hero,
      heroImageAlt: 'Digi System retail scales and checkout systems in a supermarket',
      heroEyebrow: 'تامین تجهیزات خرده‌فروشی Digi System (DIGI) از ترکیه',
      heroHeadline: 'ترازو و POS Digi System',
      heroHeadlineSub: 'SM-6000 · W-5600SRX · LX-5600 · AW-5600 — تامین سریع از ترکیه برای retail و food service',
      tagline: 'Retail & POS Equipment',
      taglineFa: 'تجهیزات خرده‌فروشی — DIGI · تامین از ترکیه',
      since: 'از سال ۱۹۷۴ · Istanbul',
      descriptionFa: 'بیزدوار گروپ تامین‌کننده ترازو، صندوق فروشگاهی و سیستم POS برند Digi System (DIGI) برای سوپرمارکت، deli، نانوایی و زنجیره‌های retail در ایران است. انتخاب مدل رسمی (SM-6000، W-5600SRX، LX-5600، AW-5600)، مشاوره فنی و لجستیک از استانبول.',
      heroStats: [
        { value: 'POS+Scale', label: 'یکپارچه retail' },
        { value: 'TR', label: 'تامین از ترکیه' },
        { value: 'Metrology', label: 'ترازوی قانونی' }
      ]
    },

    trustSignals: [
      { icon: 'target', label: 'محصول اصل DIGI', desc: 'تامین از Digi System ترکیه — گواهی metrology و مشخصات کارخانه' },
      { icon: 'globe', label: 'مشاوره فارسی', desc: 'انتخاب SM-6000، W-5600SRX، LX-5600 یا AW-5600 بر اساس نوع فروشگاه' },
      { icon: 'briefcase', label: 'retail و HORECA', desc: 'سوپرمارکت، deli، رستوران و franchise' },
      { icon: 'mail', label: 'لجستیک سریع', desc: 'مسیر ترکیه → ایران — lead time کوتاه‌تر نسبت به ژاپن' }
    ],

    whyBuyFromUs: [
      { icon: 'target', title: 'راه‌حل کامل فروشگاه', desc: 'ترازوی PC (SM-6000) + POS (W-5600SRX) + لیبل (LX-5600) — یک پیش‌فاکتور یکپارچه.' },
      { icon: 'factory', title: 'مناسب بازار ایران', desc: 'سوپرمارکت محلی، franchise و B2B خرده‌فروشی — با پشتیبانی فارسی.' },
      { icon: 'document', title: 'مشخصات شفاف', desc: 'مدل دقیق، ظرفیت ترازو، پورت‌ها و نرم‌افزار در پیش‌فاکتور.' },
      { icon: 'handshake', title: 'مقایسه با Teraoka', desc: 'Digi برای تامین سریع از ترکیه؛ Teraoka Seiko برای پروژه premium ژاپن — هر دو از بیزدوار.' }
    ],

    purchaseSteps: [
      { num: '۱', title: 'استعلام', desc: 'نوع فروشگاه، مدل (SM-6000 / W-5600SRX / LX-5600)، تعداد صندوق' },
      { num: '۲', title: 'مشاوره', desc: 'پیشنهاد scale + POS + label printer متناسب با layout' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'قیمت Digi، lead time ترکیه، Incoterms و نصب اولیه' },
      { num: '۴', title: 'تامین', desc: 'سفارش رسمی — بسته‌بندی و حمل از استانبول' },
      { num: '۵', title: 'تحویل', desc: 'تحویل در ایران — راهنمای راه‌اندازی و کالیبراسیون اولیه' }
    ],

    highlights: [
      {
        title: 'SM-6000 — ترازوی PC فروشگاهی',
        titleTr: 'SM-6000 PC Retail Scale',
        desc: 'ترازوی PC با صفحه لمسی، linerless label و e.Label — نسل جدید DIGI',
        useCaseFa: 'deli، fresh corner، hypermarket',
        badge: 'SM-6000',
        inquiryName: 'Digi SM-6000',
        image: sm6000,
        imageAlt: 'Digi System SM-6000 PC-based retail scale with touchscreen and label printer'
      },
      {
        title: 'W-5600SRX — POS فروشگاهی',
        titleTr: 'W-5600SRX POS Terminal',
        desc: 'صندوق POS یکپارچه — EFT، self-checkout و اتصال به ترازو',
        useCaseFa: 'hypermarket، supermarket chain',
        badge: 'POS',
        inquiryName: 'Digi W-5600SRX',
        image: pos,
        imageAlt: 'Digi System W-5600SRX retail POS checkout terminal'
      },
      {
        title: 'LX-5600 — پرینتر لیبل',
        titleTr: 'LX-5600 Label Printer',
        desc: 'چاپ GS1، nutrition facts و price label — اتصال به ترازو',
        useCaseFa: 'deli، bakery، prepared food',
        badge: 'Label',
        inquiryName: 'Digi LX-5600',
        image: label,
        imageAlt: 'Digi System LX-5600 retail label printer for GS1 barcodes'
      },
      {
        title: 'DS-782 — ترازوی counter',
        titleTr: 'DS-782 Counter Scale',
        desc: 'ترازوی service counter — IP65، PLU و چاپ برچسب',
        useCaseFa: 'قصابی، لبنیات، counter service',
        badge: 'DS-782',
        inquiryName: 'Digi DS-782',
        image: ds782,
        imageAlt: 'Digi System DS-782 face-to-face service counter scale for deli'
      }
    ],

    categories: [
      {
        id: 'scales',
        title: 'Retail scales — SM-6000 / SM-5300',
        titleTr: 'Retail PC Scales',
        icon: 'globe',
        image: sm6000,
        imageAlt: 'Digi System SM-6000 and SM-5300 PC retail weighing scales',
        desc: 'SM-6000، SM-5300 و AW-5600 — ترازوی PC، checkout AI و legal metrology',
        series: series(
          ['SM-6000', 'SM-5300', 'AW-5600AT II', 'DS-782', 'SM-6000 AI SSP'],
          'PC Scale / Retail / Checkout',
          ['SM-6000', 'SM-5300', 'AW-5600AT II']
        )
      },
      {
        id: 'pos',
        title: 'POS — W-5600SRX / WebSpeezaSL',
        titleTr: 'POS Systems',
        icon: 'monitor',
        image: pos,
        imageAlt: 'Digi System W-5600SRX and WebSpeezaSL supermarket POS systems',
        desc: 'W-5600SRX، WebSpeezaSL و HappySelf G3 — hypermarket POS و self-checkout',
        series: series(
          ['W-5600SRX', 'WebSpeezaSL-T/K', 'HappySelf G3', 'DPS-5600II', 'EFT integration'],
          'POS / W series / Self-checkout',
          ['W-5600SRX', 'WebSpeezaSL-T/K']
        )
      },
      {
        id: 'peripherals',
        title: 'Peripheral — اسکنر و چاپگر',
        titleTr: 'Peripherals',
        icon: 'wrench',
        image: webspeeza,
        imageAlt: 'Digi System WebSpeezaSL POS with integrated peripherals and scanner',
        desc: 'اسکنر بارکد، پرینتر رسید، کشوی پول، customer display — یکپارچه با POS',
        series: series(
          ['1D/2D barcode scanner', 'Receipt printer', 'Cash drawer', 'Customer pole display', 'LX-5600 label printer'],
          'Peripheral / Checkout',
          ['1D/2D barcode scanner', 'LX-5600 label printer']
        )
      },
      {
        id: 'software',
        title: 'نرم‌افزار — Retail management',
        titleTr: 'Retail Software',
        icon: 'monitor',
        image: checkout,
        imageAlt: 'Digi System AW-5600 AI checkout with retail management software',
        desc: 'مدیریت PLU، گزارش فروش، DIGIweb و اتصال ERP',
        series: series(['DIGIweb', 'Store management SW', 'Scale management', 'ERP integration', 'Cloud reporting'], 'Software / DIGIweb', ['DIGIweb'])
      },
      {
        id: 'horeca',
        title: 'HORECA — Delious WIZ',
        titleTr: 'HORECA POS',
        icon: 'globe',
        image: delious,
        imageAlt: 'Digi System Delious WIZ restaurant POS terminal',
        desc: 'Delious WIZ و ترازوی kitchen — رستوران، کافه و catering',
        series: series(['Delious WIZ', 'Delious WIZ PLUS', 'Kitchen scale', 'Portion control', 'Ticket printer'], 'HORECA / Restaurant', ['Delious WIZ'])
      }
    ],

    iranIndustries: [
      { name: 'سوپرمارکت و هایپر', desc: 'SM-6000 + W-5600SRX + LX-5600 یکپارچه', image: indSuper, imageAlt: 'Digi System scales and POS for Iranian hypermarkets', icon: 'briefcase' },
      { name: 'قصابی و پروتئین', desc: 'DS-782 service counter + label printer', image: ds782, imageAlt: 'Digi DS-782 butcher counter scale for fresh food in Iran', icon: 'globe' },
      { name: 'نانوایی و شیرینی', desc: 'SM-5300 price computing و LX-5600', image: sm5300, imageAlt: 'Digi SM-5300 bakery and confectionery scale', icon: 'globe' },
      { name: 'franchise و زنجیره', desc: 'POS یکسان W-5600SRX در شعب متعدد', image: pos, imageAlt: 'Digi W-5600SRX franchise retail POS rollout', icon: 'briefcase' },
      { name: 'میوه و تره‌بار', desc: 'SM-6000 SSP self-service و AW-5600', image: checkout, imageAlt: 'Digi AW-5600 AI checkout for fresh produce', icon: 'globe' },
      { name: 'B2B خرده‌فروشی', desc: 'پکیج scale + POS + label برای فروشگاه عمده', image: happyself, imageAlt: 'Digi HappySelf G3 self-checkout for B2B retail', icon: 'factory' }
    ],

    industries: [
      { name: 'Supermarket & Hypermarket', nameTr: 'Supermarket', desc: 'SM-6000, AW-5600 and W-5600SRX POS', image: indSuper, imageAlt: 'Digi supermarket retail solutions', icon: 'briefcase' },
      { name: 'Butcher & Deli', nameTr: 'Butcher & Deli', desc: 'DS-782 service scales and LX-5600 labels', image: indFood, imageAlt: 'Digi food service and deli equipment', icon: 'globe' },
      { name: 'HORECA', nameTr: 'HORECA', desc: 'Delious WIZ restaurant POS and kitchen scales', image: indHospitality, imageAlt: 'Digi hospitality POS and weighing', icon: 'globe' },
      { name: 'Franchise Retail', nameTr: 'Franchise', desc: 'Standardized W-5600SRX rollout across branches', image: pos, imageAlt: 'Digi franchise retail POS equipment', icon: 'briefcase' }
    ],

    academy: {
      title: 'Digi System — ۵۰+ سال نوآوری retail در ترکیه و جهان',
      descFa: 'Digi System (DIGI) از پیشروان ترازو، POS و label printer در ترkiye و منطقه است. بیزدوار گروپ برای پروژه‌های retail ایران انتخاب مدل (SM-6000، W-5600SRX، LX-5600)، تامین و لجستیک را یکجا انجام می‌دهد.',
      image: sm6000,
      imageAlt: 'Digi System SM-6000 retail scale — official supply by Bizdavar Group',
      imageSecondary: logo,
      imageSecondaryAlt: 'Digi System corporate logo',
      topics: [
        'SM-6000 vs SM-5300 — انتخاب ترازوی PC',
        'W-5600SRX POS — یکپارچگی با scale و EFT',
        'LX-5600 — GS1 و nutrition labeling',
        'Lead time ترکیه vs ژاپن (Teraoka Seiko)',
        'AW-5600 AI checkout — self-service produce'
      ]
    },

    services: [
      { title: 'مشاوره انتخاب SM / W / LX', desc: 'بر اساس نوع فروشگاه، layout و budget' },
      { title: 'پیش‌فاکتور یکپارچه', desc: 'ترازو + POS + label printer در یک سند' },
      { title: 'لجستیک از ترکیه', desc: 'حمل سریع‌تر برای پروژه retail' },
      { title: 'هماهنگی با Teraoka Seiko', desc: 'اگر پروژه premium ژاپن نیاز دارد — هر دو برند از بیزدوار' },
      { title: 'پشتیبانی فارسی', desc: 'استعلام و پیگیری سفارش' }
    ],

    faq: [
      { q: 'Digi System اصل است؟', a: 'بله — تجهیزات اصل Digi System (DIGI) با مشخصات فنی و مدل رسمی در پیش‌فاکتور.' },
      { q: 'مدل‌های شاخص کدام‌اند؟', a: 'SM-6000 (PC scale)، W-5600SRX (POS)، LX-5600 (label printer)، AW-5600 (AI checkout)، DS-782 (counter).' },
      { q: 'ترازوی قانونی (legal) دارید؟', a: 'بله — SM-6000 و SM-5300 برای فروش بر اساس وزن با metrology معتبر.' },
      { q: 'Digi یا Teraoka Seiko؟', a: 'Digi: تامین سریع از ترکیه، مناسب اکثر retail. Teraoka: premium ژاپن، deli/food-service عمیق‌تر.' },
      { q: 'زمان تحویل؟', a: 'معمولاً ۲ تا ۵ هفته از ترکیه — بسته به مدل و موجودی.' }
    ],

    inquiryTemplate: 'سلام، درخواست استعلام {product} از Digi System دارم.\n\nنوع فروشگاه:\nمدل (SM-6000 / W-5600SRX / LX-5600 / AW-5600):\nتعداد:\n',

    officialUrl: 'https://www.digisystem.com/tr/retail/'
  };
})();
