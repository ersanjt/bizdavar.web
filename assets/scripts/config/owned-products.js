/**
 * Bizdavar — Owned products (hardware + SaaS engineered in-house)
 * Default copy (fa) lives here; owned-products-i18n.js overrides per locale.
 */
window.BIZDAVAR_OWNED_PRODUCTS = {
  imgVersion: '4',
  categories: [
    { id: 'software', label: 'نرم‌افزار و SaaS', icon: 'globe' },
    { id: 'iot-health', label: 'IoT و بهداشت', icon: 'shield' },
    { id: 'packaging', label: 'بسته‌بندی و سیل', icon: 'box' },
    { id: 'medical', label: 'پزشکی و PPE', icon: 'heart' }
  ],
  items: [
    {
      id: 'bizswap',
      category: 'software',
      categoryLabel: 'نرم‌افزار و SaaS',
      name: 'BizSwap',
      title: 'پیش‌فروش و سواپ توکن',
      desc: 'ماژول Web3 برای اتصال کیف پول، سواپ stablecoin به توکن پروژه، پیش‌فروش on-chain و پنل ادمین — BEP-20 و RWA.',
      tags: ['DeFi', 'Web3', 'Token Swap'],
      image: 'assets/images/products/bizswap/bizswap-hero.svg',
      logo: 'assets/images/products/bizswap/bizswap-logo.svg',
      page: 'pages/bizswap.html',
      featured: true,
      status: 'live'
    },
    {
      id: 'fxguard',
      category: 'software',
      categoryLabel: 'نرم‌افزار و SaaS',
      name: 'CRM واتساپ',
      title: 'اسکریپت WhatsApp CRM',
      desc: 'اسکریپت اختصاصی CRM واتساپ — یک شماره، یک پنل، پیام انبوه و پاسخ خودکار. پلن $500، $800 و $1,200.',
      tags: ['WhatsApp CRM', 'اسکریپت اختصاصی', 'B2B'],
      image: 'assets/images/products/fxguard/fxguard-hero.svg',
      logo: 'assets/images/products/fxguard/fxguard-logo.svg',
      page: 'pages/fxguard.html',
      featured: true,
      status: 'live'
    },
    {
      id: 'biztab',
      category: 'iot-health',
      categoryLabel: 'IoT و بهداشت',
      name: 'BizTab',
      title: 'دماسنج دیواری غیرتماسی',
      desc: 'اولین دماسنج دیواری غیرتماسی تبریز — دقت کمتر از ۰.۳°C، تأیید دانشگاه تبریز.',
      tags: ['IoT', 'غیرتماسی', 'تبریز'],
      image: 'assets/images/products/biztab/biztab-hero.jpg',
      logo: 'assets/images/products/biztab/biztab-hero.jpg',
      page: 'pages/biztab.html',
      featured: true,
      status: 'live'
    },
    {
      id: 'bizclean',
      category: 'iot-health',
      categoryLabel: 'IoT و بهداشت',
      name: 'BizClean',
      title: 'خط بهداشت و ضدعفونی',
      desc: 'دستگاه ضدعفونی دست اتوماتیک BizClean V5 — تولید تیم بیزدوار؛ RINOTEX 1400، ISNA و صدا و سیما.',
      tags: ['بهداشت', 'اتوماتیک', 'کرونا'],
      image: 'assets/images/products/bizsanitizer/bizclean-v5.png',
      logo: 'assets/images/products/bizsanitizer/bizclean-v5.png',
      page: 'pages/bizsanitizer-v5.html',
      featured: true,
      status: 'live'
    },
    {
      id: 'biztouch',
      category: 'iot-health',
      categoryLabel: 'IoT و بهداشت',
      name: 'BizTouch',
      title: 'راهکارهای تماس‌LESS',
      desc: 'دستگاه‌ها و رابط‌های بدون تماس برای ورودی، بهداشت و فضاهای عمومی.',
      tags: ['تماس‌LESS', 'IoT', 'ورودی'],
      image: 'assets/images/products/product-default.svg',
      featured: true,
      status: 'catalog'
    },
    {
      id: 'bizroll',
      category: 'packaging',
      categoryLabel: 'بسته‌بندی و سیل',
      name: 'BizRoll',
      title: 'سیستم‌های رول و بسته‌بندی',
      desc: 'ماشین‌آلات رول و بسته‌بندی مهندسی‌شده برای تولید و بسته‌بندی صنعتی.',
      tags: ['بسته‌بندی', 'رول', 'صنعتی'],
      image: 'assets/images/products/product-default.svg',
      featured: true,
      status: 'catalog'
    },
    {
      id: 'sealer-home',
      category: 'packaging',
      categoryLabel: 'بسته‌بندی و سیل',
      name: 'دستگاه کش‌زن خانگی',
      title: 'سیل خانگی',
      desc: 'دستگاه کش‌زن (vacuum sealer) برای مصرف خانگی و کارگاه‌های کوچک.',
      tags: ['کش‌زن', 'خانگی', 'وکیوم'],
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'sealer-pneumatic',
      category: 'packaging',
      categoryLabel: 'بسته‌بندی و سیل',
      name: 'دستگاه کش‌زن پنوماتیک',
      title: 'سیل پنوماتیک',
      desc: 'دستگاه کش‌زن پنوماتیک — مناسب تولید نیمه‌صنعتی و خطوط بسته‌بندی.',
      tags: ['پنوماتیک', 'کش‌زن', 'B2B'],
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'sealer-robotic',
      category: 'packaging',
      categoryLabel: 'بسته‌بندی و سیل',
      name: 'دستگاه کش‌زن رباتیک',
      title: 'سیل رباتیک',
      desc: 'خط کش‌زن رباتیک برای تولید انبوه — اتوماسیون بسته‌بندی.',
      tags: ['رباتیک', 'اتوماسیون', 'تولید'],
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'mask-production',
      category: 'medical',
      categoryLabel: 'پزشکی و PPE',
      name: 'خط تولید ماسک سه‌لایه',
      title: 'ماشین ماسک N95/سه‌لایه',
      desc: 'دستگاه تولید ماسک سه‌لایه — توسعه‌یافته در دوران کرونا.',
      tags: ['PPE', 'ماسک', 'خط تولید'],
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'heat-pad-production',
      category: 'medical',
      categoryLabel: 'پزشکی و PPE',
      name: 'خط تولید پد حرارتی',
      title: 'ماشین پد گرمایی',
      desc: 'دستگاه تولید پد حرارتی (heat pad) — مصارف درمانی و گرمایشی.',
      tags: ['پد حرارتی', 'پزشکی', 'تولید'],
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    }
  ]
};
