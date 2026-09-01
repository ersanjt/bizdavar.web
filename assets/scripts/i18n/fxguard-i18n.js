/**
 * FXGuard product page copy — loaded only on /pages/fxguard.
 * Source of commercial facts: https://fxguard.io/ (desk ops, not a generic inbox).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  var WA = 'https://wa.me/905010676486';
  var STORE = 'https://fxguard.io/';
  var APP = 'https://app.fxguard.io/';
  var EXCHANGE = 'https://exchange.fxguard.io/';

  function merge(lang, pack) {
    var loc = window.BIZDAVAR_LOCALES[lang];
    if (!loc) return;
    if (!loc.caseStudy) loc.caseStudy = {};
    loc.caseStudy.fxguard = pack;
  }

  merge('fa', {
    hero: {
      tag: 'صرافی · حواله · مالی',
      title: 'نرخ را در واتساپ بزنید. دفتر مشتری پیش شما بماند.',
      desc: 'یک شماره شرکتی. کارکنان از پنل جواب می‌دهند. اگر کسی برود، چت‌ها و نرخ‌های اعلام‌شده پیش شما می‌ماند — نه روی گوشی شخصی.',
      regionItems: [
        { code: 'TR', label: 'ترکیه' },
        { code: 'AE', label: 'دبی' },
        { code: 'EU', label: 'اروپا' },
        { code: 'IR', label: 'ایران' }
      ],
      regions: 'ترکیه · دبی · اروپا · ایران',
      trust: 'از $49/ماه · دموی هدایت‌شده · بازگشت وجه ۷روزه برای ماه اول Cloud Start',
      ctaBuy: 'خرید در واتساپ',
      ctaDemo: 'دیدن پنل',
      ctaPricing: 'قیمت‌ها',
      ctaContact: 'خرید در واتساپ',
      ctaStore: 'fxguard.io',
      visualAlt: 'پنل FXGuard — چت واتساپ و نرخ در یک صفحه',
      visualCaption: 'همان پنلی که صراف واقعاً استفاده می‌کند — چت و نرخ کنار هم.'
    },
    stats: {
      businesses: 'ماژول+',
      regions: 'نقش کاربری',
      regionsVal: 'Owner → Agent',
      uptime: 'روز بازگشت وجه',
      setup: 'زبان پشتیبانی',
      setupSuffix: ''
    },
    suite: {
      eyebrow: 'یک حوزه، سه محصول',
      title: 'FXGuard چه می‌دهد؟',
      desc: 'WhatsApp CRM با پک نرخ FX محصول اصلی است. Accounting و وبسایت صرافی برندشده کنار آن هستند — هر کدام جدا استعلام می‌شود.',
      items: [
        { badge: 'موجود', icon: 'inbox', title: 'WhatsApp CRM', desc: 'واتساپ شرکتی، دفتر مشتری، نقش، شعبه — به‌علاوه نرخ FX، نمودار و سرویس تبادل از پلن Business به بالا.', audience: 'برای میز صرافی، حواله و مالی. تیم‌های دیگر Cloud Start را بدون پک FX می‌گیرند.', cta: 'دموی زنده', href: APP, external: true },
        { badge: 'موجود', icon: 'chart-line', title: 'Accounting', desc: 'دفتر زنده برای دریافت، پرداخت، نرخ و حواله. دموی عمومی جدا از CRM است و ریست می‌شود.', audience: 'برای دفاتر صرافی و میز حواله.', cta: 'صفحه Accounting', href: '/pages/fxguard-accounting', external: false },
        { badge: 'موجود', icon: 'globe', title: 'وبسایت صرافی و مالی', desc: 'سایت برندشده با نرخ، سفارش و پیگیری. نمونه زنده: exchange.fxguard.io — جدا از CRM استعلام می‌شود.', audience: 'برای دفاتر صرافی و شرکت‌های مالی.', cta: 'نمونه زنده', href: EXCHANGE, external: true }
      ]
    },
    why: {
      eyebrow: 'چرا میز مالی می‌خرد',
      title: 'چهار دلیل خرید — نه اینباکس قشنگ‌تر از Wati',
      desc: 'اگر تیم صرافی، حواله یا مالی شما روی واتساپ نرخ می‌دهد، این چهار زیان دلیل خرید است.',
      items: [
        { icon: 'users', title: 'دفتر مشتری وقتی نیرو می‌رود نماند روی گوشی', desc: 'وقتی فروشنده، صراف یا منشی می‌رود، چت روی گوشی‌اش هم می‌رود. پنل را می‌خرید تا تاریخچه پیش شرکت بماند.' },
        { icon: 'document', title: 'نرخی که گفتید قابل اثبات باشد', desc: 'نقل‌قول فروشگاه، تعرفه کلینیک یا نرخ FX در چت سند نیست. یک اختلاف می‌تواند از چند سال نرم‌افزار گران‌تر باشد.' },
        { icon: 'shield', title: 'بدانید چه کسی چه کرد', desc: 'یک واتساپ مشترک بین چند نفر یعنی هیچ‌کس پاسخگو نیست. نقش می‌خرید تا هر نفر لاگین خودش را داشته باشد.' },
        { icon: 'mobile', title: 'شماره واتساپ کسب‌وکار بن نشود', desc: 'پیام انبوه روی لینک غیررسمی خط را می‌سوزاند. مسیر صادقانه را انتخاب می‌کنید — QR یا Cloud API رسمی — قبل از مرگ شماره.' }
      ],
      closer: 'یک شماره شرکتی، نرخ FX روی همان پنل چت، دفتر مشتری پیش کسب‌وکار. ماه اول Cloud Start: بازگشت وجه ۷روزه. تیم‌های دیگر می‌توانند پک FX را نگیرند.'
    },
    outcomes: {
      eyebrow: 'بعد از خرید',
      title: 'چه چیزی دستتان می‌آید',
      desc: 'برای فروش، فروشگاه، کلینیک و شرکت. دفاتر صرافی می‌توانند ماژول نرخ را اضافه کنند — اختیاری است، خود محصول نیست.',
      items: [
        { num: '01', icon: 'users', title: 'دفتر مشتری پیش شرکت می‌ماند', desc: 'تاریخچه و تگ روی پنل شرکت است — نه روی گوشی فروشنده.' },
        { num: '02', icon: 'document', title: 'قیمتی که به مشتری گفتید ثبت است', desc: 'نقل‌قول یا نرخ در چت زمان‌دار است. نرخ FX فقط اگر لازم دارید.' },
        { num: '03', icon: 'shield', title: 'نقش و شعبه، نه یک لاگین مشترک', desc: 'از Owner تا Agent. هر نفر دسترسی خودش. ۲FA و لاگ فعالیت.' },
        { num: '04', icon: 'coin', title: 'قیمت با اندازه تیم جلو می‌رود', desc: 'Cloud Start $49 برای تیم کوچک. Business از $249. لایسنس از $4,000. Managed از $800/ماه.' }
      ]
    },
    problem: {
      eyebrow: 'زیان‌ها',
      title: 'این چهار زیان روی واتساپ شخصی رخ می‌دهد',
      desc: 'ابزار چت ۴۹ دلاری این زیان‌ها را متوقف نمی‌کند. FXGuard پنل عملیات میز مالی است — اینباکس هست، دلیل انتخاب ما نیست.',
      items: [
        { icon: 'mobile', title: 'چند گوشی، یک شماره', desc: 'لاگین مشترک یا گوشی شخصی — چت با نیرو می‌رود و تصویر کامل مکالمه نیست.' },
        { icon: 'list', title: 'نرخ اعلام‌شده سند ندارد', desc: 'نرخ USD/TRY یا تعرفه در چت، اسکرین‌شات است نه رکورد زمان‌دار.' },
        { icon: 'clock', title: 'بدون پاسخ‌گویی', desc: 'نه تیکت، نه تسک، نه رکورد از اینکه چه کسی چه فایلی را بست.' },
        { icon: 'shield', title: 'مسیر واتساپ مبهم', desc: 'ارسال انبوه روی نشست غیررسمی ریسک بن دارد. QR یا Cloud API رسمی را صریح می‌گوییم.' }
      ]
    },
    channel: {
      eyebrow: 'اتصال واتساپ',
      title: 'دو مسیر صادقانه',
      desc: 'تظاهر نمی‌کنیم هر استقرار Meta Business Solution Provider است. مسیری را انتخاب کنید که با بازار شما جور است.',
      items: [
        { icon: 'mobile', title: 'درگاه QR (WhatsApp Web)', desc: 'یک‌بار اسکن، کارکنان از پنل جواب می‌دهند. سریع، بدون تأیید Business متا. نشست غیررسمی: پیام انبوه ریسک بن دارد. وقتی API رسمی در دسترس نیست.' },
        { icon: 'shield', title: 'Meta Cloud API رسمی', desc: 'واتساپ بیزنس تأییدشده. بدون QR. پیام قالب خارج از پنجره ۲۴ساعته. برای ارسال جدی و خریدارانی که کانال مطابق نیاز دارند.' }
      ]
    },
    stories: {
      eyebrow: 'آنچه میزها می‌گویند — بدون لوگوی جعلی',
      title: 'اتفاق‌هایی که معامله را می‌بندد',
      desc: 'بدون برند ساختگی. این‌ها حوادثی است که خریدار خودش را در آن می‌شناسد.',
      items: [
        { place: 'استانبول · حواله · ۲ شعبه', title: 'دفتر ماند وقتی دو دیلر رفتند', desc: 'چت‌ها و تگ‌ها روی پنل شرکت بود. مالک لیست مشتری را از نیروی خروجی نخرید.' },
        { place: 'آناتولی · صرافی / طلا', title: 'نرخ USD/TRY اعلام‌شده روی رکورد بود', desc: 'اختلاف روی قیمت گفته‌شده در واتساپ با نقل‌قول زمان‌دار تمام شد — نه جنگ اسکرین‌شات.' },
        { place: 'میز چندشهری · ۸ نفر', title: 'نقش، لاگین واتساپ مشترک را بست', desc: 'هر شعبه صف خودش را دید. مالک دید چه کسی نرخ داد و چه کسی تیکت را بست.' }
      ]
    },
    demo: {
      eyebrow: 'دمو',
      title: 'دموی هدایت‌شده، یا آزمایش زمان‌دار روی شماره شما',
      desc: 'رمز عمومی مشترک روی این صفحه منتشر نمی‌کنیم. صفحه را حدود ۱۰ دقیقه با هم می‌بینیم. خط زنده جلسه‌ای است که رزرو می‌کنید، یا آزمایشی که قطع می‌کنید.',
      items: [
        { num: '1', title: 'بازدید ۱۰ دقیقه‌ای', desc: 'نرخ، اینباکس، نقش و شعبه.' },
        { num: '2', title: 'آزمایش اختیاری', desc: 'واتساپ خودتان را وصل کنید، بعد قطع کنید.' },
        { num: '3', title: 'خرید', desc: 'Cloud Start سلف‌سرویس، یا پیش‌فاکتور برای Business / لایسنس.' }
      ],
      note: 'رمز مشتری واقعی را در هیچ محیط مشترکی وارد نکنید. برای خط زنده جلسه رزرو کنید.',
      ctaDemo: 'رزرو دموی هدایت‌شده در واتساپ',
      ctaTrial: 'درخواست آزمایش ۷روزه روی شماره خودتان'
    },
    steps: {
      eyebrow: 'خرید در ۳ گام',
      title: 'دمو، انتخاب پکیج، خرید امروز',
      desc: 'چرخه فروش طولانی نیست — اول محصول واقعی را ببینید، بعد مدل استقرار را انتخاب کنید.',
      items: [
        { num: '01', icon: 'bolt', title: 'دموی هدایت‌شده رزرو کنید', desc: 'ده دقیقه روی نرخ، اینباکس، نقش و شعبه. آزمایش ۷روزه روی شماره خودتان اختیاری است. رمز عمومی مشترک منتشر نمی‌شود.' },
        { num: '02', icon: 'target', title: 'پکیج را انتخاب کنید', desc: 'Hosted Cloud برای سرعت، لایسنس روی سرور خودتان برای مالکیت، یا Managed Dedicated برای عملیات کامل.' },
        { num: '03', icon: 'whatsapp', title: 'خرید یا استعلام', desc: 'واتساپ فروش یا فرم fxguard.io — در روز کاری معمولاً کمتر از ۲۴ ساعت پاسخ.' }
      ],
      cta: 'خرید / دمو در واتساپ'
    },
    features: {
      eyebrow: 'ساخته‌شده برای میز مالی روی واتساپ',
      title: 'نرخ FX روی همان پنل چت',
      desc: 'اینباکس هست — دلیل انتخاب ما به‌جای Wati یا respond.io نیست.',
      items: [
        { icon: 'users', title: 'دفتر مشتری پیش شرکت', desc: 'تاریخچه، تگ و یادداشت دنبال مشتری می‌رود — نه گوشی نیرو. مالک بعد از خروج نیرو دفتر را نگه می‌دارد.' },
        { icon: 'chart-line', title: 'نرخ FX، نمودار، سرویس تبادل', desc: 'خرید/فروش زنده، نمودار و سرویس تبادل روی همان صفحه واتساپ. این پک از Cloud Business شروع می‌شود. Cloud Start فقط اینباکس است.' },
        { icon: 'shield', title: 'نقش، شعبه، ۲FA، لاگ', desc: 'از Owner تا Agent. هر شعبه میز خودش را می‌بیند. Google Authenticator و لاگ روی هر حساب.' },
        { icon: 'inbox', title: 'اینباکس واتساپ مشترک', desc: 'یک شماره کسب‌وکار، اختصاص، صف خوانده‌نشده و بی‌پاسخ. شامل پلن است — دلیل انتخاب ما نیست.' },
        { icon: 'list', title: 'تیکت و تسک', desc: 'چت را به کار قابل‌پیگیری با مالک تبدیل کنید. در همه پلن‌ها.' },
        { icon: 'mobile', title: 'دو مسیر واتساپ، صریح', desc: 'QR / WhatsApp Web برای بازار بدون Meta BSP. Cloud API رسمی وقتی قالب و ریسک بن کمتر می‌خواهید.' },
        { icon: 'document', title: 'قیمت اعلام‌شده، زمان‌دار', desc: 'نرخ یا تعرفه‌ای که به مشتری گفتید روی رکورد می‌ماند.' },
        { icon: 'bolt', title: 'پاسخ اول اختیاری با AI', desc: 'OpenAI می‌تواند پیش‌نویس و مسیریابی کند — کلید را شما می‌آورید. نیرو نرخ و پرونده را می‌بندد. Agent جایگزین نقش و ۲FA نیست.' }
      ]
    },
    modules: {
      eyebrow: 'منوی پنل',
      title: 'هر ماژول روی پنل کارکنان',
      desc: 'همان منویی که تیم بعد از ورود باز می‌کند. Cloud Start اینباکس، مشتری، تیکت و تسک را پوشش می‌دهد. نرخ FX، نمودار و سرویس تبادل از Business شروع می‌شود.',
      note: 'Start = اینباکس. Business = پک FX.',
      groups: [
        { title: 'عملیات', items: ['داشبورد', 'گفتگوها', 'مشتریان', 'تیکت داخلی', 'تسک', 'فرایند کسب‌وکار'] },
        { title: 'سازمان', items: ['کاربران (Owner تا Agent)', 'گروه شعبه', 'شعب', 'دپارتمان'] },
        { title: 'مالی و FX', items: ['نرخ FX (Business به بالا)', 'تنظیم نرخ', 'نمودار FX', 'سرویس تبادل'] },
        { title: 'نظارت', items: ['نظارت مالک', 'وضعیت سیستم', 'لاگین و آنلاین'] },
        { title: 'حساب و تنظیمات', items: ['پروفایل و ۲FA', 'چت داخلی', 'اعلان‌ها', 'اتصال واتساپ', 'قالب پیام', 'ظاهر پنل'] }
      ]
    },
    audiences: {
      eyebrow: 'برای چه کسانی',
      title: 'میز صرافی، حواله و مالی — و تیم‌های بدون پک FX',
      desc: 'تیم‌هایی که به پاسخ‌گویی واقعی نیاز دارند. Cloud Start برای فروشگاه، کلینیک و فروش کوچک بدون ماژول FX.',
      items: [
        { icon: 'chart-line', title: 'صرافی و FX', region: 'ترکیه · امارات · اروپا · ایران', desc: 'چند شعبه، نرخ و سرویس تبادل کنار اینباکس تیمی — از Business.', tag: 'پک FX' },
        { icon: 'briefcase', title: 'فروش و پشتیبانی B2B', region: 'همه مناطق', desc: 'تاریخچه مشتری، تیکت و تسک برای بستن معامله با زمینه کامل.', tag: 'عملیات فروش' },
        { icon: 'building', title: 'هلدینگ و چند شعبه', region: 'ترکیه · دبی', desc: 'نقش، شعبه و نظارت مالک. Cloud Multi-branch از $499/ماه.', tag: 'چند شعبه' },
        { icon: 'health', title: 'فروشگاه، خدمات و کلینیک', region: 'ترکیه · اروپا', desc: 'Cloud Start: اینباکس و دفتر مشتری بدون ماژول FX.', tag: 'Cloud Start' }
      ]
    },
    pricing: {
      eyebrow: 'پکیج‌ها',
      title: 'Start اینباکس است. Business پک FX است.',
      desc: 'کلاد سلف‌سرویس برای میز کوچک. پیش‌فاکتور، فاکتور و SLA برای تیم‌های چندشعبه FX. کف قیمت منتشر شده تا خرید حدس نزند.',
      note: 'Cloud Start ماژول نرخ FX ندارد. Business به بالا دارد. لایسنس و Managed فاکتور می‌شوند. ماه اول Cloud Start: بازگشت وجه ۷روزه. اعداد نهایی قابل مذاکره است.',
      plans: [
        {
          id: 'start',
          name: 'Cloud Start',
          price: '$49',
          period: '/ماه',
          badge: 'سلف‌سرویس',
          desc: '۱ شعبه · تا ۳ نفر · بدون ماژول FX',
          features: ['اینباکس، مشتری، تیکت، تسک', '۱ شماره واتساپ', 'پشتیبانی ایمیل', 'بازگشت وجه ۷روزه ماه اول'],
          cta: 'خرید Start در واتساپ',
          href: WA,
          featured: true
        },
        {
          id: 'business',
          name: 'Cloud Business',
          price: '$249',
          period: '/ماه از',
          desc: 'تا ۳ شعبه · ۱۰ نفر · ماژول FX',
          features: ['نرخ FX، نمودار، سرویس تبادل', 'نقش و جداسازی شعبه', '۲FA و لاگ فعالیت'],
          cta: 'استعلام Business در واتساپ',
          href: WA
        },
        {
          id: 'multi',
          name: 'Cloud Multi-branch',
          price: '$499',
          period: '/ماه از',
          desc: 'شعب بیشتر · SLA پشتیبانی مکتوب',
          features: ['پشتیبانی اولویت / SLA درخواستی', 'آنبوردینگ چند مکان', 'بسته فاکتور و خرید'],
          cta: 'درخواست فاکتور',
          href: STORE
        },
        {
          id: 'license',
          name: 'لایسنس روی سرور شما',
          price: '$4,000',
          period: ' · یک‌باره از',
          desc: 'سرور شما · داده پیش شما می‌ماند',
          features: ['تحویل کامل سیستم', 'راهنمای نصب', 'آپدیت سالانه اختیاری', 'برای شرکتی که فاکتور می‌خواهد'],
          cta: 'پیش‌فاکتور لایسنس',
          href: STORE
        },
        {
          id: 'managed',
          name: 'Managed Dedicated',
          price: '$800',
          period: '/ماه از',
          desc: 'ما نصب و اداره می‌کنیم — اینستنس اختصاصی',
          features: ['کپی جدا، نه مشترک با مشتری دیگر', 'مانیتورینگ و بکاپ', 'حساب‌مدیر', 'شرایط پشتیبانی روی فاکتور'],
          cta: 'پیش‌فاکتور Managed',
          href: STORE
        }
      ]
    },
    faq: {
      eyebrow: 'سوالات خریدار',
      title: 'کانال، کف قیمت، فاکتور',
      items: [
        { q: 'چرا respond.io، Wati، Kommo، Trengo یا Chatwoot نه؟', a: 'آن‌ها اینباکس گفتگو برای تبلیغات و پشتیبانی‌اند — اینستاگرام، تیک‌تاک، AI Agent، HubSpot. FXGuard پنل عملیات میز صرافی، حواله و مالی است: نرخ FX روی همان صفحه واتساپ، دفتر مشتری متعلق به شرکت، شعبه، ۲FA، و لایسنس اگر داده نباید روی SaaS آمریکایی بنشیند. اینباکس شامل است. اگر تبلیغات به‌علاوه اینستاگرام می‌خواهید، آن‌ها را بردارید.' },
        { q: 'واتساپ API رسمی متا است؟', a: 'دو مسیر: WhatsApp Web غیررسمی (QR) بدون تأیید Business — سریع‌تر، انبوه ریسک بن دارد — و Meta Cloud API رسمی. پنهان نمی‌کنیم روی کدام هستید. براکست جدی Cloud API می‌خواهد.' },
        { q: 'چرا $49 نامحدود برای همه نیست؟', a: 'Cloud Start ماهانه $49 برای یک شعبه و تا سه نفر، بدون ماژول FX. Business از $249. Multi-branch از $499. لایسنس یک‌باره از $4,000. Managed از $800/ماه. اعداد نهایی قابل مذاکره است؛ کف منتشر شده.' },
        { q: 'فاکتور / PO به‌جای پرداخت واتساپ؟', a: 'بله. درخواست فاکتور یا پیش‌فاکتور کتبی. Cloud Start از واتساپ است. معامله تجاری و لایسنس با فاکتور می‌رود. برای اروپا DPA با فاکتور ارسال می‌شود.' },
        { q: 'با شماره خودمان چطور امتحان کنیم؟', a: 'رمز دموی مشترک اینجا منتشر نمی‌شود. جلسه ۱۰ دقیقه‌ای رزرو کنید، یا آزمایش زمان‌دار که شماره را وصل می‌کنید و بعد قطع می‌کنید.' },
        { q: 'چند شعبه پشتیبانی می‌شود؟', a: 'بله. شعبه و دپارتمان داخلی است، با نظارت سطح مالک. کلاد چندشعبه برای ثبت‌نام جدید از $499/ماه شروع می‌شود.' },
        { q: 'اگر راضی نباشم پول برمی‌گردد؟', a: 'برای ماه اول Cloud Start: تا ۷ روز بعد از اولین پرداخت در واتساپ بنویسید، شماره را قطع کنید، همان ماه را برمی‌گردانیم. Business، چندشعبه، لایسنس و Managed طبق فاکتور. ضمانت نامحدود جعلی منتشر نمی‌کنیم. آپ‌تایم ۹۹.۹٪ برچسب نیست — SLA درخواستی مکتوب است.' },
        { q: 'AI جای نیرو میز را می‌گیرد؟', a: 'خیر. پاسخ اول و مسیریابی اختیاری OpenAI — کلید را شما می‌آورید. AI نرخ زنده نمی‌دهد، پرونده پردازش نمی‌کند، و جایگزین نقش یا ۲FA نیست. نیرو معامله را می‌بندد.' },
        { q: 'رابطه با بیزدوار چیست؟', a: 'FXGuard محصول سوئیت دیجیتال تیم بیزدوار است؛ فروش و دمو از fxguard.io و واتساپ +90 501 067 6486. در کاتالوگ محصولات بیزدوار هم معرفی می‌شود.' }
      ]
    },
    about: {
      title: 'محصول FXGuard — توسعه اکوسیستم بیزدوار',
      body: '<strong>FXGuard</strong> پنل عملیات میز صرافی، حواله و مالی روی یک شماره واتساپ شرکتی است — نه اینباکس عمومی تبلیغات. فروشگاه: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · پنل: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a> · واتساپ فروش: <a href="https://wa.me/905010676486" target="_blank" rel="noopener noreferrer">+90 501 067 6486</a>.',
      ctaContact: 'رفتن به fxguard.io',
      ctaPortfolio: 'Accounting و وبسایت صرافی'
    },
    cta: {
      title: 'میز مالی را روی یک پنل واتساپ شرکتی راه بیندازید',
      desc: 'Cloud Start $49/ماه اینباکس. Business از $249 با پک FX. مسیر کانال صریح گفته می‌شود. بازگشت وجه ۷روزه ماه اول Start.',
      btnStart: 'دموی هدایت‌شده',
      btnPricing: 'قیمت‌ها',
      btnStore: 'خرید در واتساپ'
    },
    related: {
      title: 'محصولات و خدمات مرتبط',
      items: [
        { href: '/pages/fxguard-accounting', icon: 'chart-line', title: 'Accounting', desc: 'دفتر FXGuard برای دریافت و حواله' },
        { href: '/pages/fxguard-exchange', icon: 'globe', title: 'وبسایت صرافی', desc: 'نرخ، سفارش و پیگیری برندشده' },
        { href: STORE, icon: 'external-link', title: 'fxguard.io', desc: 'فروشگاه و پیش‌فاکتور', external: true },
        { href: '/pages/products', icon: 'box', title: 'محصولات', desc: 'کاتالوگ بیزدوار' },
        { href: '/pages/contact', icon: 'phone', title: 'تماس', desc: 'مشاوره بیزدوار' }
      ]
    },
    geoText: 'FXGuard — پنل واتساپ میز صرافی، حواله و مالی · ترکیه، امارات، اروپا و ایران · fxguard.io · اکوسیستم بیزدوار.'
  });

  merge('tr', {
    hero: {
      tag: 'Döviz · havale · finans',
      title: 'Kuru WhatsApp’tan verin. Müşteri defteri sizde kalsın.',
      desc: 'Tek şirket numarası. Personel panelden yanıtlar. Biri ayrılınca sohbetler ve verilen fiyatlar sizde kalır — kişisel telefonda değil.',
      regionItems: [
        { code: 'TR', label: 'Türkiye' },
        { code: 'AE', label: 'Dubai' },
        { code: 'EU', label: 'Avrupa' },
        { code: 'IR', label: 'İran' }
      ],
      regions: 'Türkiye · Dubai · Avrupa · İran',
      trust: '$49/ay’dan · rehberli demo · ilk Cloud Start ayında 7 gün iade',
      ctaBuy: 'WhatsApp’tan satın al',
      ctaDemo: 'Paneli gör',
      ctaPricing: 'Fiyatlar',
      ctaContact: 'WhatsApp’tan satın al',
      ctaStore: 'fxguard.io',
      visualAlt: 'FXGuard paneli — WhatsApp sohbeti ve kurlar aynı ekranda',
      visualCaption: 'Gişenin gerçekten kullandığı panel — sohbet ve kur birlikte.'
    },
    stats: {
      businesses: 'Modül+',
      regions: 'Kullanıcı rolü',
      regionsVal: 'Owner → Agent',
      uptime: 'Gün iade',
      setup: 'Destek dili',
      setupSuffix: ''
    },
    suite: {
      eyebrow: 'Bir dikey, üç ürün',
      title: 'FXGuard ne sunar?',
      desc: 'FX kur paketiyle WhatsApp CRM ana üründür. Accounting ve markalı döviz siteleri yanındadır — her biri ayrı tekliflenir.',
      items: [
        { badge: 'Yayında', icon: 'inbox', title: 'WhatsApp CRM', desc: 'Şirket WhatsApp’ı, müşteri defteri, roller, şubeler — artı FX kurları, grafikler ve döviz hizmetleri Business ve üzeri.', audience: 'Döviz, havale ve finans gişeleri için. Diğer ekipler FX paketi olmadan Cloud Start kullanır.', cta: 'Canlı demo', href: APP, external: true },
        { badge: 'Yayında', icon: 'chart-line', title: 'Accounting', desc: 'Tahsilat, ödeme, kur ve havale için canlı defter. Genel demo CRM’den ayrıdır ve sıfırlanır.', audience: 'Döviz ofisleri ve havale gişeleri için.', cta: 'Accounting sayfası', href: '/pages/fxguard-accounting', external: false },
        { badge: 'Yayında', icon: 'globe', title: 'Döviz ve finans siteleri', desc: 'Kur, sipariş ve takip içeren markalı site. Canlı örnek: exchange.fxguard.io — CRM’den ayrı teklif.', audience: 'Döviz ofisleri ve finans firmaları için.', cta: 'Canlı örnek', href: EXCHANGE, external: true }
      ]
    },
    why: {
      eyebrow: 'Neden finans gişesi alır',
      title: 'Dört satın alma nedeni — Wati’den daha şık bir gelen kutusu değil',
      desc: 'Döviz, havale veya finans ekibiniz WhatsApp’tan fiyat veriyorsa, bu dört kayıp yüzünden alırsınız.',
      items: [
        { icon: 'users', title: 'Personel gidince defter kalır', desc: 'Satışçı, gişe veya asistan ayrılınca telefondaki sohbet de gider. Paneli defter şirkette kalsın diye alırsınız.' },
        { icon: 'document', title: 'Verdiğiniz fiyat kanıtlanabilsin', desc: 'Sohbetteki dükkân teklifi, klinik ücreti veya FX kuru belge değildir. Bir uyuşmazlık yıllarca yazılımdan pahalıya mal olabilir.' },
        { icon: 'shield', title: 'Kim ne yaptı görülsün', desc: 'Birkaç kişinin paylaştığı WhatsApp’ta kimse sorumlu değildir. Herkesin kendi girişiyle rol alırsınız.' },
        { icon: 'mobile', title: 'İş WhatsApp numarası yasaklanmasın', desc: 'Resmi olmayan bağlantıda toplu mesaj hattı yakar. Numara ölmeden dürüst yolu seçersiniz — QR veya resmi Cloud API.' }
      ],
      closer: 'Tek şirket numarası, sohbetle aynı panelde FX kurları, müşteri defteri işte kalır. İlk Cloud Start ayı: 7 gün iade. Diğer ekipler FX paketini atlayabilir.'
    },
    outcomes: {
      eyebrow: 'Satın aldıktan sonra',
      title: 'Elinize ne geçer',
      desc: 'Satış ekipleri, dükkânlar, klinikler ve şirketler için. Döviz ofisleri kur modülünü ekleyebilir — isteğe bağlıdır, ürünün kendisi değildir.',
      items: [
        { num: '01', icon: 'users', title: 'Müşteri defteri şirkette kalır', desc: 'Geçmiş ve etiketler şirket panelinde — satışçının telefonunda değil.' },
        { num: '02', icon: 'document', title: 'Müşteriye söylediğiniz fiyat kayıtta', desc: 'Sohbetteki teklif veya kur zaman damgalıdır. FX kurları yalnızca ihtiyaç varsa.' },
        { num: '03', icon: 'shield', title: 'Rol ve şube, paylaşılan giriş değil', desc: 'Owner’dan Agent’a. Herkesin kendi erişimi. 2FA ve aktivite logu.' },
        { num: '04', icon: 'coin', title: 'Fiyat ekip büyüklüğünü izler', desc: 'Küçük ekip için Cloud Start $49. Business $249’dan. Lisans $4.000’dan. Managed $800/ay’dan.' }
      ]
    },
    problem: {
      eyebrow: 'Kayıplar',
      title: 'Bu dört kayıp kişisel WhatsApp’ta olur',
      desc: '49 dolarlık bir sohbet aracı bunları durdurmaz. FXGuard finans gişesi operasyon panelidir — gelen kutusu dahildir, bizi seçme nedeni değildir.',
      items: [
        { icon: 'mobile', title: 'Birden fazla telefon, tek numara', desc: 'Paylaşılan giriş veya kişisel telefonlar — sohbet personelle gider.' },
        { icon: 'list', title: 'Verilen kur belgede yok', desc: 'Sohbetteki USD/TRY veya tarife ekran görüntüsüdür, zaman damgalı kayıt değil.' },
        { icon: 'clock', title: 'Hesap verebilirlik yok', desc: 'Ticket/görev yok; kim hangi dosyayı kapattı bilinmez.' },
        { icon: 'shield', title: 'Belirsiz WhatsApp yolu', desc: 'Resmi olmayan oturumda toplu gönderim yasak riski taşır. QR veya resmi Cloud API’yi açık söyleriz.' }
      ]
    },
    channel: {
      eyebrow: 'WhatsApp bağlantısı',
      title: 'İki dürüst yol',
      desc: 'Her kurulumu Meta Business Solution Provider gibi göstermeyiz. Pazarınıza uyan yolu seçin.',
      items: [
        { icon: 'mobile', title: 'QR geçidi (WhatsApp Web)', desc: 'Bir kez tarayın, personel panelden yanıtlar. Hızlı, Meta Business doğrulaması yok. Resmi olmayan oturum: toplu/yayın yasak riskini artırır. Resmi API yoksa kullanın.' },
        { icon: 'shield', title: 'Resmi Meta Cloud API', desc: 'Doğrulanmış WhatsApp Business API. QR yok. 24 saat penceresi dışında şablon mesajlar. Ciddi yayın ve uyumlu kanal isteyen alıcılar için.' }
      ]
    },
    stories: {
      eyebrow: 'Gişeler ne anlatıyor — sahte logo yok',
      title: 'Anlaşmayı kapatan olaylar',
      desc: 'Sahte marka yok. Alıcının kendini tanıdığı vakalar.',
      items: [
        { place: 'İstanbul · havale · 2 şube', title: 'İki dealer gidince defter kaldı', desc: 'Sohbetler ve etiketler şirket panelindeydi. Sahip, çıkan personelden müşteri listesini geri satın almadı.' },
        { place: 'Anadolu · döviz / altın', title: 'Söylenen USD/TRY kuru kayıtta kaldı', desc: 'WhatsApp’ta verilen fiyat uyuşmazlığı zaman damgalı teklifle bitti — ekran görüntüsü tartışmasıyla değil.' },
        { place: 'Çok şehirli gişe · 8 kişi', title: 'Roller paylaşılan WhatsApp girişini kesti', desc: 'Her şube kendi kuyruğunu gördü. Sahip kimin kur verdiğini ve kimin ticket’ı kapattığını gördü.' }
      ]
    },
    demo: {
      eyebrow: 'Demo',
      title: 'Rehberli demo veya kendi numaranızda süreli deneme',
      desc: 'Bu sitede paylaşılan genel şifre yayımlamayız. Ekranlar yaklaşık 10 dakikada gezilir. Canlı hat rezervasyonlu oturumdur veya kesebileceğiniz bir denemedir.',
      items: [
        { num: '1', title: '10 dakikalık tur', desc: 'Kurlar, gelen kutusu, roller ve şubeler.' },
        { num: '2', title: 'İsteğe bağlı deneme', desc: 'Kendi WhatsApp’ınızı bağlayın, sonra kesin.' },
        { num: '3', title: 'Satın alma', desc: 'Cloud Start self-servis veya Business / lisans için yazılı teklif.' }
      ],
      note: 'Paylaşılan hiçbir ortamda gerçek müşteri sırlarını girmeyin. Canlı hat için oturum ayırtın.',
      ctaDemo: 'WhatsApp’tan rehberli demo ayırtın',
      ctaTrial: '7 günlük kendi-numara denemesi isteyin'
    },
    steps: {
      eyebrow: '3 adımda satın al',
      title: 'Demo, paket, satın alma',
      desc: 'Uzun satış döngüsü yok — önce gerçek ürünü görün.',
      items: [
        { num: '01', icon: 'bolt', title: 'Rehberli demo ayırtın', desc: 'Kur, gelen kutusu, rol ve şube için on dakika. İsteğe bağlı 7 günlük kendi-numara denemesi. Genel paylaşılan şifre yayımlanmaz.' },
        { num: '02', icon: 'target', title: 'Paketi seçin', desc: 'Hız için Hosted Cloud, sahiplik için kendi sunucuda lisans veya Managed Dedicated.' },
        { num: '03', icon: 'whatsapp', title: 'Satın alın veya teklif alın', desc: 'Satış WhatsApp’ı veya fxguard.io formu — iş gününde genelde 24 saat içinde yanıt.' }
      ],
      cta: 'WhatsApp’tan satın al / demo'
    },
    features: {
      eyebrow: 'WhatsApp’taki finans gişesi için',
      title: 'FX kurları sohbetle aynı panelde',
      desc: 'Gelen kutusu dahildir — bizi Wati veya respond.io yerine seçme nedeniniz bu değildir.',
      items: [
        { icon: 'users', title: 'Müşteri defteri şirkette', desc: 'Geçmiş, etiket ve notlar müşteriyi izler — personelin telefonunu değil.' },
        { icon: 'chart-line', title: 'FX kur, grafik, döviz hizmetleri', desc: 'Canlı alış/satış, grafikler ve döviz hizmetleri WhatsApp ile aynı ekranda. Bu paket Cloud Business’tan başlar. Cloud Start yalnızca gelen kutusudur.' },
        { icon: 'shield', title: 'Rol, şube, 2FA, denetim logu', desc: 'Owner’dan Agent’a. Her şube kendi gişesini görür. Google Authenticator ve aktivite logları.' },
        { icon: 'inbox', title: 'Paylaşılan WhatsApp gelen kutusu', desc: 'Tek iş numarası, atama, okunmamış ve yanıtsız kuyruklar. Dahil — seçim nedeni değil.' },
        { icon: 'list', title: 'Ticket ve görevler', desc: 'Sohbeti sahibi olan takip edilebilir işe çevirin. Her planda.' },
        { icon: 'mobile', title: 'İki WhatsApp yolu, açıkça', desc: 'Meta BSP olmayan pazarlar için QR / WhatsApp Web. Şablon ve daha düşük yasak riski için resmi Cloud API.' },
        { icon: 'document', title: 'Verilen fiyat, zaman damgalı', desc: 'Müşteriye söylediğiniz kur veya ücret kayıtta kalır.' },
        { icon: 'bolt', title: 'İsteğe bağlı AI ilk yanıt', desc: 'OpenAI taslak ve yönlendirme yapabilir — anahtarı siz getirirsiniz. Personel kuru ve dosyayı kapatır. Rolleri ve 2FA’yı değiştiren bir AI Agent değildir.' }
      ]
    },
    modules: {
      eyebrow: 'Panel menüsü',
      title: 'Personel panelindeki her modül',
      desc: 'Ekibin girişten sonra açtığı menü. Cloud Start gelen kutusu, müşteriler, ticket ve görevleri kapsar. FX kurları, grafikler ve döviz hizmetleri Business’tan başlar.',
      note: 'Start = gelen kutusu. Business = FX paketi.',
      groups: [
        { title: 'Operasyon', items: ['Dashboard', 'Konuşmalar', 'Müşteriler', 'İç ticket', 'Görevler', 'İş süreçleri'] },
        { title: 'Organizasyon', items: ['Kullanıcılar (Owner → Agent)', 'Şube grupları', 'Şubeler', 'Departmanlar'] },
        { title: 'Finans & FX', items: ['FX kurları (Business+)', 'Kur ayarları', 'FX grafikleri', 'Döviz hizmetleri'] },
        { title: 'Gözetim', items: ['Sahip denetimi', 'Sistem durumu', 'Giriş ve çevrimiçi'] },
        { title: 'Hesap & ayarlar', items: ['Profil ve 2FA', 'İç sohbet', 'Bildirimler', 'WhatsApp bağlantısı', 'Mesaj şablonları', 'Panel görünümü'] }
      ]
    },
    audiences: {
      eyebrow: 'Kimler için',
      title: 'Döviz, havale ve finans gişesi — ve FX’siz ekipler',
      desc: 'Gerçek hesap verebilirlik isteyen ekipler. Cloud Start: dükkân, klinik ve küçük satış, FX modülü yok.',
      items: [
        { icon: 'chart-line', title: 'Döviz & FX', region: 'Türkiye · BAE · Avrupa · İran', desc: 'Çok şube, kur ve döviz hizmetleri ekip gelen kutusu yanında — Business’tan.', tag: 'FX paketi' },
        { icon: 'briefcase', title: 'B2B satış & destek', region: 'Tüm bölgeler', desc: 'Geçmiş, ticket ve görevlerle kapanış.', tag: 'Satış operasyonu' },
        { icon: 'building', title: 'Holding / çok şube', region: 'Türkiye · Dubai', desc: 'Rol, şube ve sahip denetimi. Cloud Multi-branch $499/ay’dan.', tag: 'Çok şube' },
        { icon: 'health', title: 'Dükkân, hizmet & klinik', region: 'Türkiye · Avrupa', desc: 'Cloud Start: FX modülü olmadan gelen kutusu ve müşteri defteri.', tag: 'Cloud Start' }
      ]
    },
    pricing: {
      eyebrow: 'Paketler',
      title: 'Start gelen kutusudur. Business FX paketidir.',
      desc: 'Küçük gişe için self-servis bulut. Çok şubeli FX ekipleri için ticari teklif, fatura ve SLA. Taban fiyatlar yayınlanır; satın alma tahmin etmez.',
      note: 'Cloud Start FX kur modülünü içermez. Business ve üzeri içerir. Lisans ve Managed faturalanır. İlk Cloud Start ayı: 7 gün iade. Nihai rakamlar müzakere edilebilir.',
      plans: [
        { id: 'start', name: 'Cloud Start', price: '$49', period: '/ay', badge: 'Self-servis', desc: '1 şube · 3 kişiye kadar · FX yok', features: ['Gelen kutusu, müşteriler, ticket, görev', '1 WhatsApp numarası', 'E-posta destek', 'İlk ay 7 gün iade'], cta: 'Start’ı WhatsApp’tan al', href: WA, featured: true },
        { id: 'business', name: 'Cloud Business', price: '$249', period: '/ay’dan', desc: '3 şubeye · 10 kişi · FX modülü', features: ['FX kur, grafik, döviz hizmetleri', 'Rol ve şube ayrımı', '2FA ve denetim logu'], cta: 'Business teklifi WhatsApp', href: WA },
        { id: 'multi', name: 'Cloud Multi-branch', price: '$499', period: '/ay’dan', desc: 'Daha fazla şube · yazılı destek SLA', features: ['Öncelikli destek / talep üzerine SLA', 'Çok lokasyon onboarding', 'Fatura ve satın alma paketi'], cta: 'Fatura iste', href: STORE },
        { id: 'license', name: 'Kendi sunucuda lisans', price: '$4,000', period: ' · bir kez, itibaren', desc: 'Sizin sunucularınız · veri sizde kalır', features: ['Tam sistem teslimi', 'Kurulum kılavuzu', 'İsteğe bağlı yıllık güncelleme', 'Fatura isteyen şirketler için'], cta: 'Yazılı lisans teklifi', href: STORE },
        { id: 'managed', name: 'Managed Dedicated', price: '$800', period: '/ay’dan', desc: 'Biz kurar ve işletiriz — ayrı kopya', features: ['Paylaşımsız ayrı kopya', 'İzleme ve yedek', 'Hesap yöneticisi', 'Faturada yazılı destek şartları'], cta: 'Yazılı Managed teklifi', href: STORE }
      ]
    },
    faq: {
      eyebrow: 'Alıcının sordukları',
      title: 'Kanal, taban fiyat, fatura',
      items: [
        { q: 'Neden respond.io, Wati, Kommo, Trengo veya Chatwoot değil?', a: 'Onlar reklam ve destek için sohbet gelen kutularıdır — Instagram, TikTok, AI Agent, HubSpot. FXGuard döviz, havale ve finans gişesi operasyon panelidir: WhatsApp ile aynı ekranda FX kurları, şirkete ait müşteri defteri, şubeler, 2FA ve veri ABD SaaS’ta duramasın diye lisans. Gelen kutusu dahildir. Reklam artı Instagram istiyorsanız onları seçin.' },
        { q: 'WhatsApp resmi Meta API mi?', a: 'İki yol: Business doğrulaması olmadan resmi olmayan WhatsApp Web (QR) — daha hızlı, toplu gönderim yasak riskini artırır — ve resmi Meta Cloud API. Hangisinde olduğunuzu gizlemeyiz. Ciddi yayın Cloud API ister.' },
        { q: 'Neden herkes için sınırsız $49 değil?', a: 'Cloud Start ayda $49: bir şube, üç kişiye kadar, FX modülü yok. Business $249’dan. Multi-branch $499’dan. Lisans bir kez $4.000’dan. Managed $800/ay’dan. Nihai rakamlar müzakere edilebilir; taban yayınlanır.' },
        { q: 'WhatsApp ödemesi yerine fatura / PO?', a: 'Evet. Fatura isteyin veya yazılı teklif alın. Cloud Start WhatsApp’tandır. Ticari ve lisans anlaşmaları faturadan gider. Avrupa için DPA fatura ile gönderilir.' },
        { q: 'Kendi numaramızla nasıl deneriz?', a: 'Burada paylaşılan demo şifresi yayımlamayız. 10 dakikalık rehberli oturum ayırtın veya numarayı bağlayıp sonra kesebileceğiniz süreli deneme.' },
        { q: 'Birden fazla şube destekleniyor mu?', a: 'Evet. Şube ve departman yerleşiktir, sahip düzeyinde gözetimle. Yeni kayıtlar için çok şubeli bulut $499/ay’dan başlar.' },
        { q: 'Memnun kalmazsam paramı geri alır mıyım?', a: 'İlk Cloud Start ayı için: ilk ödemeden 7 gün içinde WhatsApp yazın, numarayı kesin, o ayı iade ederiz. Business, çok şube, lisans ve managed faturaya uyar. Sahte sınırsız garanti yayımlamayız. %99,9 uptime çıkartması yoktur — SLA talep üzerine yazılıdır.' },
        { q: 'AI gişeyi personelin yerine mi çalıştırır?', a: 'Hayır. İsteğe bağlı OpenAI ilk yanıt ve yönlendirme — anahtarı siz getirirsiniz. AI canlı kur vermez, dosya işlemez, rol veya 2FA’nın yerini almaz. Personel anlaşmayı kapatır.' },
        { q: 'Bizdavar ile ilişkisi?', a: 'FXGuard, Bizdavar ekibinin dijital suite ürünüdür; satış fxguard.io ve WhatsApp +90 501 067 6486 üzerinden. Bizdavar ürün kataloğunda da yer alır.' }
      ]
    },
    about: {
      title: 'FXGuard — Bizdavar ekosistem ürünü',
      body: '<strong>FXGuard</strong>, şirket WhatsApp numarasında döviz, havale ve finans gişesi operasyon panelidir — genel reklam gelen kutusu değildir. Mağaza: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · Panel: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a> · Satış WhatsApp: <a href="https://wa.me/905010676486" target="_blank" rel="noopener noreferrer">+90 501 067 6486</a>.',
      ctaContact: 'fxguard.io’ya git',
      ctaPortfolio: 'Accounting ve döviz sitesi'
    },
    cta: {
      title: 'Finans gişesini tek şirket WhatsApp panelinde çalıştırın',
      desc: 'Cloud Start $49/ay gelen kutusu. Business $249’dan FX paketiyle. Kanal yolu açık söylenir. İlk Start ayı 7 gün iade.',
      btnStart: 'Rehberli demo',
      btnPricing: 'Fiyatlar',
      btnStore: 'WhatsApp’tan satın al'
    },
    related: {
      title: 'İlgili ürün ve hizmetler',
      items: [
        { href: '/pages/fxguard-accounting', icon: 'chart-line', title: 'Accounting', desc: 'Tahsilat ve havale defteri' },
        { href: '/pages/fxguard-exchange', icon: 'globe', title: 'Döviz sitesi', desc: 'Markalı kur, sipariş ve takip' },
        { href: STORE, icon: 'external-link', title: 'fxguard.io', desc: 'Mağaza ve yazılı teklif', external: true },
        { href: '/pages/products', icon: 'box', title: 'Ürünler', desc: 'Bizdavar kataloğu' },
        { href: '/pages/contact', icon: 'phone', title: 'İletişim', desc: 'Bizdavar danışmanlığı' }
      ]
    },
    geoText: 'FXGuard — döviz, havale ve finans gişesi için WhatsApp paneli · Türkiye, BAE, Avrupa, İran · fxguard.io · Bizdavar ekosistemi.'
  });

  merge('en', {
    hero: {
      tag: 'Exchange · remittance · finance',
      title: 'Quote the rate on WhatsApp. Keep the customer book.',
      desc: 'One company number. Staff reply from the panel. When someone leaves, chats and quoted prices stay with you — not on a personal phone.',
      regionItems: [
        { code: 'TR', label: 'Turkey' },
        { code: 'AE', label: 'Dubai' },
        { code: 'EU', label: 'Europe' },
        { code: 'IR', label: 'Iran' }
      ],
      regions: 'Turkey · Dubai · Europe · Iran',
      trust: 'From $49/mo · guided demo · 7-day money-back on first Cloud Start month',
      ctaBuy: 'Buy on WhatsApp',
      ctaDemo: 'See the panel',
      ctaPricing: 'Prices',
      ctaContact: 'Buy on WhatsApp',
      ctaStore: 'fxguard.io',
      visualAlt: 'FXGuard panel — WhatsApp chat and rates on one screen',
      visualCaption: 'The panel your teller actually uses — chat and rates together.'
    },
    stats: {
      businesses: 'Modules+',
      regions: 'User roles',
      regionsVal: 'Owner → Agent',
      uptime: 'Day money-back',
      setup: 'Languages',
      setupSuffix: ''
    },
    suite: {
      eyebrow: 'One vertical, three products',
      title: 'What FXGuard offers',
      desc: 'WhatsApp CRM with an FX rates pack is the lead product. Accounting and branded exchange websites sit beside it — each quoted separately.',
      items: [
        { badge: 'Available now', icon: 'inbox', title: 'WhatsApp CRM', desc: 'Company WhatsApp, customer book, roles, branches — plus FX rates, charts and exchange services on Business and above.', audience: 'For exchange, remittance and finance desks. Other teams use Cloud Start without the FX pack.', cta: 'Live demo', href: APP, external: true },
        { badge: 'Available now', icon: 'chart-line', title: 'Accounting', desc: 'A live ledger for receipts, payments, rates and remittance. Public demo is separate from the CRM and resets.', audience: 'For exchange offices and remittance desks.', cta: 'Accounting page', href: '/pages/fxguard-accounting', external: false },
        { badge: 'Available now', icon: 'globe', title: 'Exchange & finance websites', desc: 'A branded website with rates, orders and tracking. Live example at exchange.fxguard.io — quoted separately from the CRM.', audience: 'For exchange offices and finance firms.', cta: 'See live example', href: EXCHANGE, external: true }
      ]
    },
    why: {
      eyebrow: 'Why a money desk buys',
      title: 'Four reasons to buy — not a prettier inbox than Wati',
      desc: 'If your exchange, remittance or finance team quotes prices on WhatsApp, these are the four reasons to buy.',
      items: [
        { icon: 'users', title: 'So the customer book stays when staff leave', desc: 'When a salesperson, shop clerk, clinic assistant or teller leaves, chats on their phone leave too. You buy the panel so history stays with the company.' },
        { icon: 'document', title: 'So the price you quoted can be proven', desc: 'A shop quote, clinic fee or FX rate in chat is not a document. One dispute can cost more than years of software.' },
        { icon: 'shield', title: 'So you know who did what', desc: 'One WhatsApp shared by several people means nobody is accountable. You buy roles so each person has their own login.' },
        { icon: 'mobile', title: 'So the business WhatsApp number is not banned', desc: 'Bulk messages on an unofficial link burn the line. You buy this to choose an honest path — QR or official Cloud API — before the number dies.' }
      ],
      closer: 'One company number, FX rates on the same panel as the chat, customer book stays with the business. First Cloud Start month: 7-day money-back. Other teams can skip the FX pack.'
    },
    outcomes: {
      eyebrow: 'After you buy',
      title: 'What you get',
      desc: 'For sales teams, shops, clinics and companies. Exchange offices can add the rates module — it is optional, not the product.',
      items: [
        { num: '01', icon: 'users', title: 'The customer book stays with the company', desc: 'History and tags sit on the company panel — not on a salesperson’s phone.' },
        { num: '02', icon: 'document', title: 'The price you told the customer is on record', desc: 'A shop quote, clinic fee or any price said in chat is timestamped. Optional FX rates only if you need them.' },
        { num: '03', icon: 'shield', title: 'Roles and branches, not a shared login', desc: 'Owner through agent. Each person has their own access. 2FA and activity logs.' },
        { num: '04', icon: 'coin', title: 'Price follows the size of your team', desc: 'Cloud Start $49 for a small team. Business from $249. License from $4,000. Managed from $800/mo.' }
      ]
    },
    problem: {
      eyebrow: 'The losses',
      title: 'These four losses happen on personal WhatsApp',
      desc: 'A $49 chat tool does not stop them. FXGuard is an operations panel for money desks — inbox is included, it is not why you pick us.',
      items: [
        { icon: 'mobile', title: 'Multiple phones, one number', desc: 'Shared logins or personal phones — chats leave with the staff member.' },
        { icon: 'list', title: 'The quoted rate is not a document', desc: 'A USD/TRY rate or fee in chat is a screenshot, not a timestamped record.' },
        { icon: 'clock', title: 'No accountability', desc: 'No tickets or tasks recording who closed which file.' },
        { icon: 'shield', title: 'Unclear WhatsApp path', desc: 'Bulk on an unofficial session raises ban risk. We state QR or official Cloud API honestly.' }
      ]
    },
    channel: {
      eyebrow: 'How WhatsApp is connected',
      title: 'Two honest paths',
      desc: 'We will not pretend every deployment is a Meta Business Solution Provider. Choose the path that matches your market.',
      items: [
        { icon: 'mobile', title: 'QR gateway (WhatsApp Web)', desc: 'Scan once, staff reply from the panel. Fast, no Meta Business verification. Unofficial session: bulk/broadcast raises ban risk. Use it when official API is not available.' },
        { icon: 'shield', title: 'Official Meta Cloud API', desc: 'Verified WhatsApp Business API. No QR. Template messages outside the 24-hour window. Required for serious bulk and for buyers who need a compliant channel.' }
      ]
    },
    stories: {
      eyebrow: 'What desks tell us — no fake logos',
      title: 'The incidents that close a deal',
      desc: 'No fake brands. Written so a buyer can recognize themselves.',
      items: [
        { place: 'Istanbul · remittance · 2 branches', title: 'The book stayed when two dealers left', desc: 'Chats and tags were on the company panel. The owner did not buy the customer list back from departing staff.' },
        { place: 'Anatolia · FX / gold shop', title: 'A quoted USD/TRY rate was on record', desc: 'A dispute over the price said in WhatsApp ended with a timestamped quote — not a screenshot argument.' },
        { place: 'Multi-city desk · 8 staff', title: 'Roles stopped a shared WhatsApp login', desc: 'Each branch saw its own queue. The owner could see who quoted and who marked a ticket done.' }
      ]
    },
    demo: {
      eyebrow: 'Demo',
      title: 'Guided demo, or a time-limited trial on your number',
      desc: 'We do not publish a shared public password on this site. Screens can be walked through in about 10 minutes. A live line is a session you book, or a trial you can disconnect.',
      items: [
        { num: '1', title: '10-minute walkthrough', desc: 'Rates, inbox, roles and branches.' },
        { num: '2', title: 'Optional trial', desc: 'Connect your WhatsApp, then disconnect it.' },
        { num: '3', title: 'Purchase', desc: 'Cloud Start self-serve, or a written quote for Business / license.' }
      ],
      note: 'Do not enter real customer secrets in any shared environment. For a live line, book a session.',
      ctaDemo: 'Book a guided demo on WhatsApp',
      ctaTrial: 'Ask for a 7-day own-number trial'
    },
    steps: {
      eyebrow: 'Buy in 3 steps',
      title: 'Demo, pick a package, purchase today',
      desc: 'No long sales cycle — evaluate the real product first.',
      items: [
        { num: '01', icon: 'bolt', title: 'Book a guided demo', desc: 'Ten minutes on rates, inbox, roles and branches. Optional 7-day trial on your own number. We do not publish a shared public password.' },
        { num: '02', icon: 'target', title: 'Pick your package', desc: 'Hosted Cloud for speed, Self-hosted License for ownership, or Managed Dedicated hands-off.' },
        { num: '03', icon: 'whatsapp', title: 'Purchase or request a quote', desc: 'WhatsApp sales or the form on fxguard.io — usually within 24 hours on business days.' }
      ],
      cta: 'Buy / demo on WhatsApp'
    },
    features: {
      eyebrow: 'Built for money desks on WhatsApp',
      title: 'FX rates on the same panel as the chat',
      desc: 'Inbox is included — it is not why you pick us over Wati or respond.io.',
      items: [
        { icon: 'users', title: 'Customer book stays in the company', desc: 'History, tags and notes follow the customer — not the employee’s phone. Owners keep the book after staff exit.' },
        { icon: 'chart-line', title: 'FX rates, charts, exchange services', desc: 'Live buy/sell, charts and exchange services on the same panel as WhatsApp. This pack starts on Cloud Business. Cloud Start is inbox only.' },
        { icon: 'shield', title: 'Roles, branches, 2FA, audit logs', desc: 'Owner through agent. Each branch sees its desk. Google Authenticator and activity logs on every account.' },
        { icon: 'inbox', title: 'Shared WhatsApp inbox', desc: 'One business number, assignment, unread and unanswered queues. Included — not the reason to choose us.' },
        { icon: 'list', title: 'Tickets and tasks', desc: 'Turn a chat into a tracked job with an owner. Included with every plan.' },
        { icon: 'mobile', title: 'Two WhatsApp paths, stated honestly', desc: 'QR / WhatsApp Web for markets without Meta BSP. Official Cloud API when you need templates and lower ban risk.' },
        { icon: 'document', title: 'Quoted prices, timestamped', desc: 'The rate or fee you told the customer stays on record.' },
        { icon: 'bolt', title: 'Optional AI first-replies', desc: 'OpenAI can draft and route — you bring the key. Staff still close the rate and the file. Not an AI Agent that replaces roles and 2FA.' }
      ]
    },
    modules: {
      eyebrow: 'Staff menu',
      title: 'Every module on the staff panel',
      desc: 'The same menu your team opens after login. Cloud Start covers inbox, customers, tickets and tasks. FX rates, charts and exchange services start on Business.',
      note: 'Start is inbox. Business is the FX pack.',
      groups: [
        { title: 'Operations', items: ['Dashboard', 'Conversations', 'Customers', 'Internal tickets', 'Tasks', 'Business processes'] },
        { title: 'Organization', items: ['Users (Owner → Agent)', 'Branch groups', 'Branches', 'Departments'] },
        { title: 'Finance & FX', items: ['FX rates (Business+)', 'Rate settings', 'FX charts', 'Exchange services'] },
        { title: 'Oversight', items: ['Owner supervision', 'System status', 'Logins and online'] },
        { title: 'Account & settings', items: ['Profile and 2FA', 'Internal chat', 'Notifications', 'WhatsApp connection', 'Message templates', 'Panel appearance'] }
      ]
    },
    audiences: {
      eyebrow: 'Who it is for',
      title: 'Exchange, remittance and finance desks — and teams without the FX pack',
      desc: 'Teams that need real accountability. Cloud Start for shops, clinics and small sales without the FX module.',
      items: [
        { icon: 'chart-line', title: 'Exchange & FX', region: 'Turkey · UAE · Europe · Iran', desc: 'Multi-branch ops, rates and exchange services beside the team inbox — from Business.', tag: 'FX pack' },
        { icon: 'briefcase', title: 'B2B sales & support', region: 'All regions', desc: 'Close with full history, tickets and tasks.', tag: 'Sales ops' },
        { icon: 'building', title: 'Holdings / multi-site', region: 'Turkey · Dubai', desc: 'Role, branch and owner oversight. Cloud Multi-branch from $499/mo.', tag: 'Multi-branch' },
        { icon: 'health', title: 'Shops, services & clinics', region: 'Turkey · Europe', desc: 'Cloud Start: inbox and customer book without the FX module.', tag: 'Cloud Start' }
      ]
    },
    pricing: {
      eyebrow: 'Packages',
      title: 'Start is inbox. Business is the FX pack.',
      desc: 'Self-serve cloud for a small desk. Commercial quotes, invoices and SLA for multi-branch FX teams. Floors are published so procurement is not guessing.',
      note: 'Cloud Start does not include the FX rates module. Business and above do. License and Managed are invoiced. First Cloud Start month: 7-day money-back. Final commercial numbers can be negotiated.',
      plans: [
        { id: 'start', name: 'Cloud Start', price: '$49', period: '/mo', badge: 'Self-serve', desc: '1 branch · up to 3 staff · no FX module', features: ['Inbox, customers, tickets, tasks', '1 WhatsApp number', 'Email support', '7-day money-back on first month'], cta: 'Buy Start on WhatsApp', href: WA, featured: true },
        { id: 'business', name: 'Cloud Business', price: '$249', period: '/mo from', desc: 'Up to 3 branches · 10 staff · FX module', features: ['FX rates, charts, exchange services', 'Roles and branch separation', '2FA and audit logs'], cta: 'Quote Business on WhatsApp', href: WA },
        { id: 'multi', name: 'Cloud Multi-branch', price: '$499', period: '/mo from', desc: 'More branches · written support SLA', features: ['Priority support / SLA on request', 'Onboarding for multiple locations', 'Invoice and procurement pack'], cta: 'Request invoice', href: STORE },
        { id: 'license', name: 'Self-hosted license', price: '$4,000', period: ' · one-time from', desc: 'Your servers · data stays with you', features: ['Full system handover', 'Install guide', 'Optional yearly updates', 'For companies that need an invoice'], cta: 'Get a written quote', href: STORE },
        { id: 'managed', name: 'Managed dedicated', price: '$800', period: '/mo from', desc: 'We install and operate a dedicated instance', features: ['A separate copy — not shared', 'Monitoring and backups', 'Account manager', 'Written support terms on the invoice'], cta: 'Get a written quote', href: STORE }
      ]
    },
    faq: {
      eyebrow: 'Questions buyers actually ask',
      title: 'Channel, price floors, invoice',
      items: [
        { q: 'Why not respond.io, Wati, Kommo, Trengo or Chatwoot?', a: 'Those are conversation inboxes for ads and support — Instagram, TikTok, AI Agents, HubSpot. FXGuard is an operations panel for exchange, remittance and finance desks: FX rates on the same screen as WhatsApp, a company-owned customer book, branches, 2FA, and a license if data cannot sit on a US SaaS. Inbox is included. If you need ads plus Instagram, pick them.' },
        { q: 'Is WhatsApp official Meta API?', a: 'Two paths: unofficial WhatsApp Web (QR) without Business verification — faster, bulk raises ban risk — and official Meta Cloud API. We do not hide which one you are on. Serious broadcast needs Cloud API.' },
        { q: 'Why not $49 unlimited for everyone?', a: 'Cloud Start is $49/month for one branch and up to three staff, without the FX module. Business from $249. Multi-branch from $499. License from $4,000 one-time. Managed from $800/month. Final numbers can be negotiated; the floor is published.' },
        { q: 'Can we get an invoice / PO instead of WhatsApp checkout?', a: 'Yes. Use Request invoice or Get a written quote. Cloud Start is WhatsApp. Commercial and license deals go through invoice. Buying from Europe? We send a DPA with the invoice.' },
        { q: 'How do we try it with our own number?', a: 'We do not publish a shared demo password here. Book a 10-minute guided session, or a time-limited trial where you connect your number and can disconnect it afterwards.' },
        { q: 'Can FXGuard handle multiple branches?', a: 'Yes. Branches and departments are built in, with owner-level oversight. Multi-branch cloud starts from $499/month for new signups.' },
        { q: 'If I am not satisfied, do I get my money back?', a: 'Yes for the first Cloud Start month: message WhatsApp within 7 days of the first payment, disconnect the number, and we refund that month. Business, multi-branch, license and managed refunds follow the invoice. We do not publish a fake unlimited guarantee. SLA is written on request — not a 99.9% sticker.' },
        { q: 'Does AI run the desk instead of staff?', a: 'No. Optional OpenAI first-replies and routing — you bring the key. AI does not quote a live rate, does not process files, and does not replace roles or 2FA. Staff close the deal.' },
        { q: 'How does Bizdavar relate?', a: 'FXGuard is a Bizdavar ecosystem product; sales run through fxguard.io and WhatsApp +90 501 067 6486, and it is listed in the Bizdavar product catalog.' }
      ]
    },
    about: {
      title: 'FXGuard — Bizdavar ecosystem product',
      body: '<strong>FXGuard</strong> is an operations panel for exchange, remittance and finance desks on one company WhatsApp number — not a generic ads inbox. Store: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · Panel: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a> · Sales WhatsApp: <a href="https://wa.me/905010676486" target="_blank" rel="noopener noreferrer">+90 501 067 6486</a>.',
      ctaContact: 'Go to fxguard.io',
      ctaPortfolio: 'Accounting & exchange websites'
    },
    cta: {
      title: 'Ready to run the money desk on one company WhatsApp panel?',
      desc: 'Cloud Start $49/mo inbox. Business from $249 with the FX pack. Channel path stated honestly. 7-day money-back on first Start month.',
      btnStart: 'Guided demo',
      btnPricing: 'See prices',
      btnStore: 'Buy via WhatsApp'
    },
    related: {
      title: 'Related products & services',
      items: [
        { href: '/pages/fxguard-accounting', icon: 'chart-line', title: 'Accounting', desc: 'FXGuard ledger for receipts and remittance' },
        { href: '/pages/fxguard-exchange', icon: 'globe', title: 'Exchange websites', desc: 'Branded rates, orders and tracking' },
        { href: STORE, icon: 'external-link', title: 'fxguard.io', desc: 'Store and written quotes', external: true },
        { href: '/pages/products', icon: 'box', title: 'Products', desc: 'Bizdavar catalog' },
        { href: '/pages/contact', icon: 'phone', title: 'Contact', desc: 'Bizdavar consult' }
      ]
    },
    geoText: 'FXGuard — WhatsApp panel for exchange, remittance and finance desks · Turkey, UAE, Europe, Iran · fxguard.io · Bizdavar ecosystem.'
  });

  merge('ru', {
    hero: {
      tag: 'Обмен · переводы · финансы',
      title: 'Котируйте курс в WhatsApp. Клиентская книга остаётся у вас.',
      desc: 'Один корпоративный номер. Сотрудники отвечают из панели. Если кто-то уходит, переписки и названные цены остаются у вас — не на личном телефоне.',
      regionItems: [
        { code: 'TR', label: 'Турция' },
        { code: 'AE', label: 'Дубай' },
        { code: 'EU', label: 'Европа' },
        { code: 'IR', label: 'Иран' }
      ],
      regions: 'Турция · Дубай · Европа · Иран',
      trust: 'От $49/мес · демо с гидом · возврат за 7 дней в первый месяц Cloud Start',
      ctaBuy: 'Купить в WhatsApp',
      ctaDemo: 'Смотреть панель',
      ctaPricing: 'Цены',
      ctaContact: 'Купить в WhatsApp',
      ctaStore: 'fxguard.io',
      visualAlt: 'Панель FXGuard — чат WhatsApp и курсы на одном экране',
      visualCaption: 'Панель, которой кассир реально пользуется — чат и курсы вместе.'
    },
    stats: {
      businesses: 'Модулей+',
      regions: 'Ролей',
      regionsVal: 'Owner → Agent',
      uptime: 'Дней на возврат',
      setup: 'Языков поддержки',
      setupSuffix: ''
    },
    suite: {
      eyebrow: 'Одна вертикаль, три продукта',
      title: 'Что даёт FXGuard',
      desc: 'WhatsApp CRM с пакетом курсов FX — основной продукт. Accounting и брендированные сайты обменников рядом — каждое котируется отдельно.',
      items: [
        { badge: 'Доступно', icon: 'inbox', title: 'WhatsApp CRM', desc: 'Корпоративный WhatsApp, клиентская книга, роли, филиалы — плюс курсы FX, графики и обменные услуги с тарифа Business.', audience: 'Для обменных, переводных и финансовых столов. Другие команды берут Cloud Start без пакета FX.', cta: 'Живое демо', href: APP, external: true },
        { badge: 'Доступно', icon: 'chart-line', title: 'Accounting', desc: 'Живая книга поступлений, выплат, курсов и переводов. Публичное демо отдельно от CRM и сбрасывается.', audience: 'Для обменных пунктов и переводных столов.', cta: 'Страница Accounting', href: '/pages/fxguard-accounting', external: false },
        { badge: 'Доступно', icon: 'globe', title: 'Сайты обмена и финансов', desc: 'Брендированный сайт с курсами, заказами и трекингом. Живой пример: exchange.fxguard.io — отдельно от CRM.', audience: 'Для обменных пунктов и финансовых компаний.', cta: 'Живой пример', href: EXCHANGE, external: true }
      ]
    },
    why: {
      eyebrow: 'Почему покупает денежный стол',
      title: 'Четыре причины купить — не красивее inbox, чем у Wati',
      desc: 'Если обменный, переводной или финансовый стол котирует цены в WhatsApp, это четыре причины покупки.',
      items: [
        { icon: 'users', title: 'Чтобы книга клиентов осталась, когда уходят сотрудники', desc: 'Когда продавец, кассир или ассистент уходит, уходят и чаты с телефона. Панель покупают, чтобы история осталась в компании.' },
        { icon: 'document', title: 'Чтобы названную цену можно было доказать', desc: 'Цитата магазина, тариф клиники или курс FX в чате — не документ. Один спор может стоить дороже лет ПО.' },
        { icon: 'shield', title: 'Чтобы знать, кто что сделал', desc: 'Один WhatsApp на нескольких людей — никто не подотчётен. Роли покупают, чтобы у каждого был свой логин.' },
        { icon: 'mobile', title: 'Чтобы бизнес-номер WhatsApp не забанили', desc: 'Массовые сообщения по неофициальной связке сжигают линию. Честный путь — QR или официальный Cloud API — до смерти номера.' }
      ],
      closer: 'Один корпоративный номер, курсы FX на той же панели, что и чат, книга клиентов у бизнеса. Первый месяц Cloud Start: возврат за 7 дней. Другие команды могут обойтись без пакета FX.'
    },
    outcomes: {
      eyebrow: 'После покупки',
      title: 'Что вы получаете',
      desc: 'Для продаж, магазинов, клиник и компаний. Обменные пункты могут добавить модуль курсов — он опционален, это не сам продукт.',
      items: [
        { num: '01', icon: 'users', title: 'Книга клиентов остаётся в компании', desc: 'История и теги на панели компании — не на телефоне продавца.' },
        { num: '02', icon: 'document', title: 'Цена, названная клиенту, в записи', desc: 'Цитата или курс в чате с меткой времени. Курсы FX — только если нужны.' },
        { num: '03', icon: 'shield', title: 'Роли и филиалы, не общий логин', desc: 'От Owner до Agent. У каждого свой доступ. 2FA и журналы.' },
        { num: '04', icon: 'coin', title: 'Цена растёт с командой', desc: 'Cloud Start $49 для малой команды. Business от $249. Лицензия от $4 000. Managed от $800/мес.' }
      ]
    },
    problem: {
      eyebrow: 'Потери',
      title: 'Эти четыре потери случаются на личном WhatsApp',
      desc: 'Чат за $49 их не останавливает. FXGuard — операционная панель денежного стола: inbox включён, это не причина выбрать нас.',
      items: [
        { icon: 'mobile', title: 'Несколько телефонов, один номер', desc: 'Общие логины или личные телефоны — чаты уходят с сотрудником.' },
        { icon: 'list', title: 'Названный курс не документ', desc: 'USD/TRY или тариф в чате — скриншот, не запись со временем.' },
        { icon: 'clock', title: 'Нет подотчётности', desc: 'Нет тикетов и задач: кто какой файл закрыл.' },
        { icon: 'shield', title: 'Неясный путь WhatsApp', desc: 'Массовая рассылка на неофициальной сессии повышает риск бана. QR или официальный Cloud API называем прямо.' }
      ]
    },
    channel: {
      eyebrow: 'Как подключается WhatsApp',
      title: 'Два честных пути',
      desc: 'Мы не притворяемся, что каждое внедрение — Meta Business Solution Provider. Выберите путь под ваш рынок.',
      items: [
        { icon: 'mobile', title: 'QR-шлюз (WhatsApp Web)', desc: 'Одно сканирование, сотрудники отвечают из панели. Быстро, без верификации Meta Business. Неофициальная сессия: массовая рассылка повышает риск бана. Когда официального API нет.' },
        { icon: 'shield', title: 'Официальный Meta Cloud API', desc: 'Верифицированный WhatsApp Business API. Без QR. Шаблоны вне 24-часового окна. Для серьёзной рассылки и покупателей, которым нужен compliant-канал.' }
      ]
    },
    stories: {
      eyebrow: 'Что говорят столы — без фейковых логотипов',
      title: 'Случаи, которые закрывают сделку',
      desc: 'Без вымышленных брендов. Чтобы покупатель узнал себя.',
      items: [
        { place: 'Стамбул · переводы · 2 филиала', title: 'Книга осталась, когда ушли два дилера', desc: 'Чаты и теги были на панели компании. Владелец не выкупал базу у уходящих.' },
        { place: 'Анатолия · FX / золото', title: 'Названный курс USD/TRY был в записи', desc: 'Спор о цене в WhatsApp закончился котировкой со временем — не войной скриншотов.' },
        { place: 'Мультигород · 8 человек', title: 'Роли закрыли общий логин WhatsApp', desc: 'Каждый филиал видел свою очередь. Владелец видел, кто котировал и кто закрыл тикет.' }
      ]
    },
    demo: {
      eyebrow: 'Демо',
      title: 'Демо с гидом или ограниченный пробник на вашем номере',
      desc: 'Общий публичный пароль на этой странице не публикуем. Экраны за ~10 минут. Живая линия — сессия по записи или пробник, который можно отключить.',
      items: [
        { num: '1', title: '10-минутный обзор', desc: 'Курсы, inbox, роли и филиалы.' },
        { num: '2', title: 'Опциональный пробник', desc: 'Подключите свой WhatsApp, затем отключите.' },
        { num: '3', title: 'Покупка', desc: 'Cloud Start самостоятельно или письменная котировка Business / лицензии.' }
      ],
      note: 'Не вводите секреты реальных клиентов в общей среде. Для живой линии запишитесь на сессию.',
      ctaDemo: 'Записать демо с гидом в WhatsApp',
      ctaTrial: 'Запросить 7-дневный пробник на своём номере'
    },
    steps: {
      eyebrow: 'Покупка за 3 шага',
      title: 'Демо, пакет, покупка сегодня',
      desc: 'Без длинного цикла продаж — сначала живой продукт.',
      items: [
        { num: '01', icon: 'bolt', title: 'Запишите демо с гидом', desc: 'Десять минут: курсы, inbox, роли и филиалы. Опционально 7 дней на своём номере. Общий пароль не публикуем.' },
        { num: '02', icon: 'target', title: 'Выберите пакет', desc: 'Hosted Cloud для скорости, лицензия на своём сервере для владения или Managed Dedicated.' },
        { num: '03', icon: 'whatsapp', title: 'Купите или запросите котировку', desc: 'WhatsApp продаж или форма fxguard.io — в рабочий день обычно до 24 часов.' }
      ],
      cta: 'Купить / демо в WhatsApp'
    },
    features: {
      eyebrow: 'Для денежных столов в WhatsApp',
      title: 'Курсы FX на той же панели, что и чат',
      desc: 'Inbox включён — это не причина выбрать нас вместо Wati или respond.io.',
      items: [
        { icon: 'users', title: 'Книга клиентов в компании', desc: 'История, теги и заметки идут за клиентом — не за телефоном сотрудника.' },
        { icon: 'chart-line', title: 'Курсы FX, графики, обменные услуги', desc: 'Живые buy/sell, графики и услуги на том же экране, что WhatsApp. Пакет с Cloud Business. Cloud Start — только inbox.' },
        { icon: 'shield', title: 'Роли, филиалы, 2FA, журналы', desc: 'От Owner до Agent. Каждый филиал видит свой стол. Google Authenticator и журналы.' },
        { icon: 'inbox', title: 'Общий inbox WhatsApp', desc: 'Один бизнес-номер, назначение, непрочитанные и без ответа. Включено — не причина выбора.' },
        { icon: 'list', title: 'Тикеты и задачи', desc: 'Чат становится работой с владельцем. В каждом тарифе.' },
        { icon: 'mobile', title: 'Два пути WhatsApp, честно', desc: 'QR / WhatsApp Web для рынков без Meta BSP. Официальный Cloud API для шаблонов и меньшего риска бана.' },
        { icon: 'document', title: 'Названные цены со временем', desc: 'Курс или тариф, сказанный клиенту, остаётся в записи.' },
        { icon: 'bolt', title: 'Опциональные первые ответы AI', desc: 'OpenAI может черновить и маршрутизировать — ключ ваш. Сотрудники закрывают курс и файл. Это не AI Agent вместо ролей и 2FA.' }
      ]
    },
    modules: {
      eyebrow: 'Меню панели',
      title: 'Каждый модуль на панели сотрудников',
      desc: 'То же меню после входа. Cloud Start: inbox, клиенты, тикеты и задачи. Курсы FX, графики и обменные услуги — с Business.',
      note: 'Start = inbox. Business = пакет FX.',
      groups: [
        { title: 'Операции', items: ['Дашборд', 'Диалоги', 'Клиенты', 'Внутренние тикеты', 'Задачи', 'Бизнес-процессы'] },
        { title: 'Организация', items: ['Пользователи (Owner → Agent)', 'Группы филиалов', 'Филиалы', 'Отделы'] },
        { title: 'Финансы и FX', items: ['Курсы FX (Business+)', 'Настройки курса', 'Графики FX', 'Обменные услуги'] },
        { title: 'Контроль', items: ['Надзор владельца', 'Статус системы', 'Входы и онлайн'] },
        { title: 'Аккаунт и настройки', items: ['Профиль и 2FA', 'Внутренний чат', 'Уведомления', 'Подключение WhatsApp', 'Шаблоны', 'Внешний вид панели'] }
      ]
    },
    audiences: {
      eyebrow: 'Для кого',
      title: 'Обмен, переводы и финансы — и команды без пакета FX',
      desc: 'Командам нужна подотчётность. Cloud Start: магазины, клиники и малые продажи без модуля FX.',
      items: [
        { icon: 'chart-line', title: 'Обмен и FX', region: 'Турция · ОАЭ · Европа · Иран', desc: 'Несколько филиалов, курсы и услуги рядом с inbox — с Business.', tag: 'Пакет FX' },
        { icon: 'briefcase', title: 'B2B продажи и поддержка', region: 'Все регионы', desc: 'Закрытие с историей, тикетами и задачами.', tag: 'Sales ops' },
        { icon: 'building', title: 'Холдинг / несколько площадок', region: 'Турция · Дубай', desc: 'Роли, филиалы и надзор. Cloud Multi-branch от $499/мес.', tag: 'Мультифилиал' },
        { icon: 'health', title: 'Магазины, услуги и клиники', region: 'Турция · Европа', desc: 'Cloud Start: inbox и книга клиентов без модуля FX.', tag: 'Cloud Start' }
      ]
    },
    pricing: {
      eyebrow: 'Пакеты',
      title: 'Start — inbox. Business — пакет FX.',
      desc: 'Облако самообслуживания для малого стола. Коммерческие котировки, счета и SLA для мультифилиальных FX-команд. Полы цен опубликованы.',
      note: 'Cloud Start не включает модуль курсов FX. Business и выше — да. Лицензия и Managed по счёту. Первый месяц Cloud Start: возврат за 7 дней. Итоговые цифры можно согласовать.',
      plans: [
        { id: 'start', name: 'Cloud Start', price: '$49', period: '/мес', badge: 'Self-serve', desc: '1 филиал · до 3 человек · без FX', features: ['Inbox, клиенты, тикеты, задачи', '1 номер WhatsApp', 'Поддержка по email', 'Возврат 7 дней в первый месяц'], cta: 'Купить Start в WhatsApp', href: WA, featured: true },
        { id: 'business', name: 'Cloud Business', price: '$249', period: '/мес от', desc: 'До 3 филиалов · 10 человек · модуль FX', features: ['Курсы FX, графики, обменные услуги', 'Роли и разделение филиалов', '2FA и журналы'], cta: 'Котировка Business в WhatsApp', href: WA },
        { id: 'multi', name: 'Cloud Multi-branch', price: '$499', period: '/мес от', desc: 'Больше филиалов · письменный SLA', features: ['Приоритетная поддержка / SLA по запросу', 'Онбординг нескольких площадок', 'Пакет счёта и закупки'], cta: 'Запросить счёт', href: STORE },
        { id: 'license', name: 'Лицензия на своих серверах', price: '$4,000', period: ' · разово от', desc: 'Ваши серверы · данные у вас', features: ['Полная передача системы', 'Гид по установке', 'Опциональные годовые обновления', 'Для компаний, которым нужен счёт'], cta: 'Письменная котировка', href: STORE },
        { id: 'managed', name: 'Managed dedicated', price: '$800', period: '/мес от', desc: 'Мы ставим и ведём выделенный инстанс', features: ['Отдельная копия, не общая', 'Мониторинг и бэкапы', 'Аккаунт-менеджер', 'Условия поддержки в счёте'], cta: 'Письменная котировка', href: STORE }
      ]
    },
    faq: {
      eyebrow: 'Вопросы покупателей',
      title: 'Канал, полы цен, счёт',
      items: [
        { q: 'Почему не respond.io, Wati, Kommo, Trengo или Chatwoot?', a: 'Это inbox для рекламы и поддержки — Instagram, TikTok, AI Agent, HubSpot. FXGuard — операционная панель обменных, переводных и финансовых столов: курсы FX на том же экране, что WhatsApp, книга клиентов компании, филиалы, 2FA и лицензия, если данные нельзя держать на US SaaS. Inbox включён. Нужна реклама плюс Instagram — берите их.' },
        { q: 'WhatsApp — официальный Meta API?', a: 'Два пути: неофициальный WhatsApp Web (QR) без Business-верификации — быстрее, массовая рассылка повышает риск бана — и официальный Meta Cloud API. Мы не скрываем, на каком вы. Серьёзный бродкаст требует Cloud API.' },
        { q: 'Почему не $49 безлимит для всех?', a: 'Cloud Start $49/мес: один филиал, до трёх человек, без модуля FX. Business от $249. Multi-branch от $499. Лицензия разово от $4 000. Managed от $800/мес. Итог можно согласовать; пол опубликован.' },
        { q: 'Счёт / PO вместо оплаты в WhatsApp?', a: 'Да. Запросите счёт или письменную котировку. Cloud Start — через WhatsApp. Коммерция и лицензия — по счёту. Для Европы DPA отправляем со счётом.' },
        { q: 'Как попробовать на своём номере?', a: 'Общий пароль демо здесь не публикуем. Запишите 10-минутную сессию или ограниченный пробник: подключаете номер и можете отключить.' },
        { q: 'Несколько филиалов?', a: 'Да. Филиалы и отделы встроены, с надзором владельца. Мультифилиальное облако для новых регистраций от $499/мес.' },
        { q: 'Если не устроит — вернут деньги?', a: 'Да для первого месяца Cloud Start: напишите в WhatsApp в течение 7 дней после первой оплаты, отключите номер — вернём этот месяц. Business, мультифилиал, лицензия и managed — по счёту. Фейковую безлимитную гарантию не публикуем. SLA пишется по запросу — не наклейка 99,9%.' },
        { q: 'AI ведёт стол вместо сотрудников?', a: 'Нет. Опциональные первые ответы и маршрутизация OpenAI — ключ ваш. AI не котирует живой курс, не обрабатывает файлы и не заменяет роли или 2FA. Сделку закрывают люди.' },
        { q: 'Как связан Bizdavar?', a: 'FXGuard — продукт экосистемы Bizdavar; продажи через fxguard.io и WhatsApp +90 501 067 6486, плюс каталог продуктов Bizdavar.' }
      ]
    },
    about: {
      title: 'FXGuard — продукт экосистемы Bizdavar',
      body: '<strong>FXGuard</strong> — операционная панель обменных, переводных и финансовых столов на одном корпоративном номере WhatsApp, не общий рекламный inbox. Магазин: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · Панель: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a> · WhatsApp продаж: <a href="https://wa.me/905010676486" target="_blank" rel="noopener noreferrer">+90 501 067 6486</a>.',
      ctaContact: 'Перейти на fxguard.io',
      ctaPortfolio: 'Accounting и сайты обменников'
    },
    cta: {
      title: 'Запустите денежный стол на одной корпоративной панели WhatsApp',
      desc: 'Cloud Start $49/мес inbox. Business от $249 с пакетом FX. Путь канала назван честно. Возврат 7 дней в первый месяц Start.',
      btnStart: 'Демо с гидом',
      btnPricing: 'Цены',
      btnStore: 'Купить в WhatsApp'
    },
    related: {
      title: 'Смежные продукты и услуги',
      items: [
        { href: '/pages/fxguard-accounting', icon: 'chart-line', title: 'Accounting', desc: 'Книга FXGuard для поступлений и переводов' },
        { href: '/pages/fxguard-exchange', icon: 'globe', title: 'Сайты обменников', desc: 'Брендированные курсы, заказы и трекинг' },
        { href: STORE, icon: 'external-link', title: 'fxguard.io', desc: 'Магазин и письменные котировки', external: true },
        { href: '/pages/products', icon: 'box', title: 'Продукты', desc: 'Каталог Bizdavar' },
        { href: '/pages/contact', icon: 'phone', title: 'Контакты', desc: 'Консультация Bizdavar' }
      ]
    },
    geoText: 'FXGuard — панель WhatsApp для обменных, переводных и финансовых столов · Турция, ОАЭ, Европа, Иран · fxguard.io · экосистема Bizdavar.'
  });

  merge('ar', {
    hero: {
      tag: 'صرافة · حوالات · مالية',
      title: 'سعّر السعر على واتساب. دفتر العملاء يبقى عندك.',
      desc: 'رقم شركة واحد. الموظفون يردّون من اللوحة. إذا غادر أحدهم، المحادثات والأسعار المعلنة تبقى عندك — لا على هاتف شخصي.',
      regionItems: [
        { code: 'TR', label: 'تركيا' },
        { code: 'AE', label: 'دبي' },
        { code: 'EU', label: 'أوروبا' },
        { code: 'IR', label: 'إيران' }
      ],
      regions: 'تركيا · دبي · أوروبا · إيران',
      trust: 'من ٤٩$/شهر · عرض موجَّه · استرداد خلال ٧ أيام لأول شهر Cloud Start',
      ctaBuy: 'اشترِ عبر واتساب',
      ctaDemo: 'شاهد اللوحة',
      ctaPricing: 'الأسعار',
      ctaContact: 'اشترِ عبر واتساب',
      ctaStore: 'fxguard.io',
      visualAlt: 'لوحة FXGuard — دردشة واتساب وأسعار في شاشة واحدة',
      visualCaption: 'اللوحة التي يستخدمها الصرّاف فعلاً — الدردشة والأسعار معاً.'
    },
    stats: {
      businesses: 'وحدات+',
      regions: 'أدوار المستخدم',
      regionsVal: 'Owner → Agent',
      uptime: 'يوم استرداد',
      setup: 'لغات الدعم',
      setupSuffix: ''
    },
    suite: {
      eyebrow: 'مجال واحد، ثلاثة منتجات',
      title: 'ماذا يقدّم FXGuard',
      desc: 'WhatsApp CRM مع حزمة أسعار FX هو المنتج الرئيسي. المحاسبة ومواقع الصرافة ذات العلامة بجانبه — يُسعَّر كل منها على حدة.',
      items: [
        { badge: 'متاح الآن', icon: 'inbox', title: 'WhatsApp CRM', desc: 'واتساب الشركة، دفتر العملاء، الأدوار، الفروع — إضافة أسعار FX والرسوم البيانية وخدمات التبادل من Business فما فوق.', audience: 'لمكاتب الصرافة والحوالات والمالية. الفرق الأخرى تستخدم Cloud Start دون حزمة FX.', cta: 'عرض حي', href: APP, external: true },
        { badge: 'متاح الآن', icon: 'chart-line', title: 'Accounting', desc: 'دفتر حي للإيصالات والمدفوعات والأسعار والحوالات. العرض العام منفصل عن CRM ويُعاد ضبطه.', audience: 'لمكاتب الصرافة ومكاتب الحوالات.', cta: 'صفحة المحاسبة', href: '/pages/fxguard-accounting', external: false },
        { badge: 'متاح الآن', icon: 'globe', title: 'مواقع الصرافة والمالية', desc: 'موقع بعلامتك مع أسعار وطلبات وتتبع. مثال حي: exchange.fxguard.io — يُسعَّر منفصلاً عن CRM.', audience: 'لمكاتب الصرافة وشركات المالية.', cta: 'مثال حي', href: EXCHANGE, external: true }
      ]
    },
    why: {
      eyebrow: 'لماذا يشتري مكتب المال',
      title: 'أربعة أسباب للشراء — لا صندوق وارد أجمل من Wati',
      desc: 'إذا كان فريق الصرافة أو الحوالات أو المالية يسعّر على واتساب، فهذه أسباب الشراء الأربعة.',
      items: [
        { icon: 'users', title: 'ليبقى دفتر العملاء عند مغادرة الموظفين', desc: 'عندما يغادر بائع أو صرّاف أو مساعد، تغادر المحادثات مع هاتفه. تشتري اللوحة لتبقى السجلات عند الشركة.' },
        { icon: 'document', title: 'ليُثبت السعر الذي أعلنته', desc: 'عرض متجر أو رسم عيادة أو سعر FX في الدردشة ليس مستنداً. نزاع واحد قد يكلف أكثر من سنوات برمجيات.' },
        { icon: 'shield', title: 'لتعرف من فعل ماذا', desc: 'واتساب واحد مشترك بين عدة أشخاص يعني لا مساءلة. تشتري الأدوار ليكون لكل شخص دخوله.' },
        { icon: 'mobile', title: 'كي لا يُحظر رقم واتساب العمل', desc: 'الرسائل الجماعية على رابط غير رسمي تحرق الخط. تختار مساراً صادقاً — QR أو Cloud API الرسمي — قبل موت الرقم.' }
      ],
      closer: 'رقم شركة واحد، أسعار FX على نفس لوحة الدردشة، دفتر العملاء يبقى مع العمل. أول شهر Cloud Start: استرداد ٧ أيام. يمكن للفرق الأخرى تخطي حزمة FX.'
    },
    outcomes: {
      eyebrow: 'بعد الشراء',
      title: 'ماذا تحصل عليه',
      desc: 'لفرق المبيعات والمتاجر والعيادات والشركات. يمكن لمكاتب الصرافة إضافة وحدة الأسعار — اختيارية وليست المنتج نفسه.',
      items: [
        { num: '01', icon: 'users', title: 'دفتر العملاء يبقى عند الشركة', desc: 'السجل والوسوم على لوحة الشركة — لا على هاتف البائع.' },
        { num: '02', icon: 'document', title: 'السعر الذي قلته للعميل مسجَّل', desc: 'عرض أو سعر في الدردشة بطابع زمني. أسعار FX فقط إن احتجتها.' },
        { num: '03', icon: 'shield', title: 'أدوار وفروع، لا دخول مشترك', desc: 'من Owner إلى Agent. لكل شخص وصوله. 2FA وسجلات نشاط.' },
        { num: '04', icon: 'coin', title: 'السعر يتبع حجم الفريق', desc: 'Cloud Start ٤٩$ لفريق صغير. Business من ٢٤٩$. الترخيص من ٤٬٠٠٠$. Managed من ٨٠٠$/شهر.' }
      ]
    },
    problem: {
      eyebrow: 'الخسائر',
      title: 'هذه الخسائر الأربع تحدث على واتساب شخصي',
      desc: 'أداة دردشة بـ ٤٩$ لا توقفها. FXGuard لوحة تشغيل لمكتب المال — الصندوق وارد مضمَّن وليس سبب اختيارنا.',
      items: [
        { icon: 'mobile', title: 'هواتف عدة، رقم واحد', desc: 'دخول مشترك أو هواتف شخصية — المحادثات تغادر مع الموظف.' },
        { icon: 'list', title: 'السعر المعلن ليس مستنداً', desc: 'سعر USD/TRY أو رسم في الدردشة لقطة شاشة لا سجلاً بوقت.' },
        { icon: 'clock', title: 'بلا مساءلة', desc: 'لا تذاكر ولا مهام تسجّل من أغلق أي ملف.' },
        { icon: 'shield', title: 'مسار واتساب غير واضح', desc: 'الإرسال الجماعي على جلسة غير رسمية يرفع خطر الحظر. نقول QR أو Cloud API الرسمي بصراحة.' }
      ]
    },
    channel: {
      eyebrow: 'كيف يُربط واتساب',
      title: 'مساران صادقان',
      desc: 'لن ندّعي أن كل نشر هو Meta Business Solution Provider. اختر المسار الذي يناسب سوقك.',
      items: [
        { icon: 'mobile', title: 'بوابة QR (WhatsApp Web)', desc: 'امسح مرة، يرد الموظفون من اللوحة. سريع بلا تحقق Meta Business. جلسة غير رسمية: البث الجماعي يرفع خطر الحظر. استخدمها حين لا يتوفر API رسمي.' },
        { icon: 'shield', title: 'Meta Cloud API الرسمي', desc: 'واجهة واتساب بزنس موثّقة. بلا QR. رسائل قوالب خارج نافذة ٢٤ ساعة. للبث الجاد ولمن يحتاج قناة متوافقة.' }
      ]
    },
    stories: {
      eyebrow: 'ما تقوله المكاتب — بلا شعارات مزيفة',
      title: 'حوادث تُغلق الصفقة',
      desc: 'بلا علامات تجارية مختلقة. مكتوبة ليتعرّف المشتري على نفسه.',
      items: [
        { place: 'إسطنبول · حوالات · فرعان', title: 'بقي الدفتر بعد مغادرة تاجرين', desc: 'كانت المحادثات والوسوم على لوحة الشركة. لم يشترِ المالك قائمة العملاء من المغادرين.' },
        { place: 'الأناضول · صرافة / ذهب', title: 'سعر USD/TRY المعلن كان مسجَّلاً', desc: 'انتهى نزاع السعر في واتساب بعرض بوقت — لا جدال لقطات شاشة.' },
        { place: 'مكتب متعدد المدن · ٨ موظفين', title: 'الأدوار أوقفت دخول واتساب المشترك', desc: 'رأى كل فرع طابوره. رأى المالك من سعّر ومن أغلق التذكرة.' }
      ]
    },
    demo: {
      eyebrow: 'العرض',
      title: 'عرض موجَّه، أو تجربة محدودة على رقمك',
      desc: 'لا ننشر كلمة مرور عامة مشتركة هنا. يمكن استعراض الشاشات في نحو ١٠ دقائق. الخط الحي جلسة تحجزها، أو تجربة يمكن قطعها.',
      items: [
        { num: '1', title: 'جولة ١٠ دقائق', desc: 'الأسعار والصندوق والأدوار والفروع.' },
        { num: '2', title: 'تجربة اختيارية', desc: 'اربط واتسابك ثم اقطعه.' },
        { num: '3', title: 'الشراء', desc: 'Cloud Start ذاتي الخدمة، أو عرض مكتوب لـ Business / الترخيص.' }
      ],
      note: 'لا تُدخل أسرار عملاء حقيقيين في أي بيئة مشتركة. للخط الحي احجز جلسة.',
      ctaDemo: 'احجز عرضاً موجَّهاً على واتساب',
      ctaTrial: 'اطلب تجربة ٧ أيام على رقمك'
    },
    steps: {
      eyebrow: 'الشراء في ٣ خطوات',
      title: 'عرض، اختر الباقة، اشترِ اليوم',
      desc: 'لا دورة مبيعات طويلة — قيّم المنتج الحقيقي أولاً.',
      items: [
        { num: '01', icon: 'bolt', title: 'احجز عرضاً موجَّهاً', desc: 'عشر دقائق على الأسعار والصندوق والأدوار والفروع. تجربة ٧ أيام على رقمك اختيارية. لا ننشر كلمة مرور عامة.' },
        { num: '02', icon: 'target', title: 'اختر باقتك', desc: 'Hosted Cloud للسرعة، ترخيص على خادمك للملكية، أو Managed Dedicated.' },
        { num: '03', icon: 'whatsapp', title: 'اشترِ أو اطلب عرضاً', desc: 'واتساب المبيعات أو نموذج fxguard.io — عادة خلال ٢٤ ساعة في أيام العمل.' }
      ],
      cta: 'اشترِ / عرض على واتساب'
    },
    features: {
      eyebrow: 'لمكاتب المال على واتساب',
      title: 'أسعار FX على نفس لوحة الدردشة',
      desc: 'الصندوق وارد مضمَّن — ليس سبب اختيارنا بدل Wati أو respond.io.',
      items: [
        { icon: 'users', title: 'دفتر العملاء عند الشركة', desc: 'السجل والوسوم والملاحظات تتبع العميل — لا هاتف الموظف.' },
        { icon: 'chart-line', title: 'أسعار FX ورسوم وخدمات تبادل', desc: 'شراء/بيع حي ورسوم بيانية وخدمات تبادل على نفس شاشة واتساب. تبدأ الحزمة من Cloud Business. Cloud Start صندوق وارد فقط.' },
        { icon: 'shield', title: 'أدوار وفروع و2FA وسجلات', desc: 'من Owner إلى Agent. كل فرع يرى مكتبه. Google Authenticator وسجلات على كل حساب.' },
        { icon: 'inbox', title: 'صندوق واتساب مشترك', desc: 'رقم عمل واحد وتعيين وطوابير غير مقروءة وبلا رد. مضمَّن — ليس سبب الاختيار.' },
        { icon: 'list', title: 'تذاكر ومهام', desc: 'حوّل الدردشة إلى عمل بمسؤول. في كل خطة.' },
        { icon: 'mobile', title: 'مسارا واتساب، بصراحة', desc: 'QR / WhatsApp Web لأسواق بلا Meta BSP. Cloud API الرسمي للقوالب وخطر حظر أقل.' },
        { icon: 'document', title: 'أسعار معلنة بطابع زمني', desc: 'السعر أو الرسم الذي قلته للعميل يبقى مسجَّلاً.' },
        { icon: 'bolt', title: 'ردود أولى اختيارية بالذكاء الاصطناعي', desc: 'يمكن لـ OpenAI المسودة والتوجيه — المفتاح منك. الموظفون يغلقون السعر والملف. ليس وكيلاً يستبدل الأدوار و2FA.' }
      ]
    },
    modules: {
      eyebrow: 'قائمة اللوحة',
      title: 'كل وحدة على لوحة الموظفين',
      desc: 'نفس القائمة بعد الدخول. Cloud Start يغطي الصندوق والعملاء والتذاكر والمهام. أسعار FX والرسوم وخدمات التبادل تبدأ من Business.',
      note: 'Start = صندوق وارد. Business = حزمة FX.',
      groups: [
        { title: 'التشغيل', items: ['لوحة التحكم', 'المحادثات', 'العملاء', 'تذاكر داخلية', 'مهام', 'عمليات العمل'] },
        { title: 'المنظمة', items: ['مستخدمون (Owner → Agent)', 'مجموعات الفروع', 'فروع', 'أقسام'] },
        { title: 'المالية وFX', items: ['أسعار FX (Business+)', 'إعدادات السعر', 'رسوم FX', 'خدمات التبادل'] },
        { title: 'الرقابة', items: ['إشراف المالك', 'حالة النظام', 'دخول ومتصل'] },
        { title: 'الحساب والإعدادات', items: ['الملف و2FA', 'دردشة داخلية', 'إشعارات', 'ربط واتساب', 'قوالب الرسائل', 'مظهر اللوحة'] }
      ]
    },
    audiences: {
      eyebrow: 'لمن',
      title: 'مكاتب الصرافة والحوالات والمالية — وفرق بلا حزمة FX',
      desc: 'فرق تحتاج مساءلة حقيقية. Cloud Start للمتاجر والعيادات والمبيعات الصغيرة دون وحدة FX.',
      items: [
        { icon: 'chart-line', title: 'صرافة وFX', region: 'تركيا · الإمارات · أوروبا · إيران', desc: 'فروع متعددة وأسعار وخدمات تبادل بجانب صندوق الفريق — من Business.', tag: 'حزمة FX' },
        { icon: 'briefcase', title: 'مبيعات ودعم B2B', region: 'كل المناطق', desc: 'إغلاق بتاريخ كامل وتذاكر ومهام.', tag: 'عمليات بيع' },
        { icon: 'building', title: 'شركات قابضة / مواقع متعددة', region: 'تركيا · دبي', desc: 'أدوار وفروع ورقابة المالك. Cloud Multi-branch من ٤٩٩$/شهر.', tag: 'فروع متعددة' },
        { icon: 'health', title: 'متاجر وخدمات وعيادات', region: 'تركيا · أوروبا', desc: 'Cloud Start: صندوق ودفتر عملاء دون وحدة FX.', tag: 'Cloud Start' }
      ]
    },
    pricing: {
      eyebrow: 'الباقات',
      title: 'Start صندوق وارد. Business حزمة FX.',
      desc: 'سحابة خدمة ذاتية لمكتب صغير. عروض تجارية وفواتير وSLA لفرق FX متعددة الفروع. الأرضيات منشورة حتى لا يخمن الشراء.',
      note: 'Cloud Start لا يشمل وحدة أسعار FX. Business فما فوق يشملها. الترخيص وManaged بالفاتورة. أول شهر Cloud Start: استرداد ٧ أيام. الأرقام النهائية قابلة للتفاوض.',
      plans: [
        { id: 'start', name: 'Cloud Start', price: '$49', period: '/شهر', badge: 'خدمة ذاتية', desc: 'فرع واحد · حتى ٣ موظفين · بلا FX', features: ['صندوق وعملاء وتذاكر ومهام', 'رقم واتساب واحد', 'دعم بالبريد', 'استرداد ٧ أيام لأول شهر'], cta: 'اشترِ Start على واتساب', href: WA, featured: true },
        { id: 'business', name: 'Cloud Business', price: '$249', period: '/شهر من', desc: 'حتى ٣ فروع · ١٠ موظفين · وحدة FX', features: ['أسعار FX ورسوم وخدمات تبادل', 'أدوار وفصل الفروع', '2FA وسجلات'], cta: 'عرض Business على واتساب', href: WA },
        { id: 'multi', name: 'Cloud Multi-branch', price: '$499', period: '/شهر من', desc: 'فروع أكثر · SLA دعم مكتوب', features: ['دعم أولوية / SLA عند الطلب', 'تهيئة مواقع متعددة', 'حزمة فاتورة ومشتريات'], cta: 'اطلب فاتورة', href: STORE },
        { id: 'license', name: 'ترخيص على خوادمك', price: '$4,000', period: ' · مرة واحدة من', desc: 'خوادمك · البيانات عندك', features: ['تسليم النظام كاملاً', 'دليل التثبيت', 'تحديثات سنوية اختيارية', 'للشركات التي تحتاج فاتورة'], cta: 'عرض مكتوب', href: STORE },
        { id: 'managed', name: 'Managed dedicated', price: '$800', period: '/شهر من', desc: 'نثبّت وندير نسخة مخصصة', features: ['نسخة منفصلة غير مشتركة', 'مراقبة ونسخ احتياطي', 'مدير حساب', 'شروط دعم على الفاتورة'], cta: 'عرض مكتوب', href: STORE }
      ]
    },
    faq: {
      eyebrow: 'أسئلة المشترين',
      title: 'القناة وأرضيات السعر والفاتورة',
      items: [
        { q: 'لماذا ليس respond.io أو Wati أو Kommo أو Trengo أو Chatwoot؟', a: 'تلك صناديق دردشة للإعلانات والدعم — إنستغرام وتيك توك ووكلاء ذكاء وHubSpot. FXGuard لوحة تشغيل لمكاتب الصرافة والحوالات والمالية: أسعار FX على نفس شاشة واتساب، دفتر عملاء ملك الشركة، فروع، 2FA، وترخيص إن تعذّر بقاء البيانات على SaaS أمريكي. الصندوق وارد مضمَّن. إن احتجت إعلانات وإنستغرام فاخترهم.' },
        { q: 'هل واتساب واجهة ميتا الرسمية؟', a: 'مساران: WhatsApp Web غير رسمي (QR) بلا تحقق Business — أسرع والبث الجماعي يرفع خطر الحظر — وMeta Cloud API الرسمي. لا نخفي أيهما تستخدم. البث الجاد يحتاج Cloud API.' },
        { q: 'لماذا ليس ٤٩$ بلا حدود للجميع؟', a: 'Cloud Start ٤٩$/شهر لفرع واحد وحتى ثلاثة موظفين دون وحدة FX. Business من ٢٤٩$. Multi-branch من ٤٩٩$. الترخيص مرة من ٤٬٠٠٠$. Managed من ٨٠٠$/شهر. الأرقام النهائية قابلة للتفاوض؛ الأرضية منشورة.' },
        { q: 'فاتورة / أمر شراء بدل دفع واتساب؟', a: 'نعم. اطلب فاتورة أو عرضاً مكتوباً. Cloud Start عبر واتساب. الصفقات التجارية والترخيص بالفاتورة. لأوروبا نرسل DPA مع الفاتورة.' },
        { q: 'كيف نجرّب برقمنا؟', a: 'لا ننشر كلمة مرور عرض مشتركة هنا. احجز جلسة ١٠ دقائق موجَّهة، أو تجربة محدودة تربط فيها رقمك ويمكنك قطعه لاحقاً.' },
        { q: 'هل يدعم عدة فروع؟', a: 'نعم. الفروع والأقسام مدمجة مع رقابة المالك. سحابة متعددة الفروع للتسجيل الجديد من ٤٩٩$/شهر.' },
        { q: 'إن لم أرضَ هل يُسترد المال؟', a: 'نعم لأول شهر Cloud Start: راسل واتساب خلال ٧ أيام من أول دفع، اقطع الرقم، نرد ذلك الشهر. Business ومتعدد الفروع والترخيص وManaged وفق الفاتورة. لا ننشر ضماناً بلا حدود مزيفاً. SLA يُكتب عند الطلب — ليست ملصقة ٩٩.٩٪.' },
        { q: 'هل يدير الذكاء الاصطناعي المكتب بدل الموظفين؟', a: 'لا. ردود أولى وتوجيه اختياري عبر OpenAI — المفتاح منك. الذكاء الاصطناعي لا يسعّر سعراً حياً ولا يعالج ملفات ولا يستبدل الأدوار أو 2FA. الموظفون يغلقون الصفقة.' },
        { q: 'ما علاقة بيزدوار؟', a: 'FXGuard منتج منظومة بيزدوار الرقمية؛ البيع عبر fxguard.io وواتساب ‎+90 501 067 6486 وفي كتالوج منتجات بيزدوار.' }
      ]
    },
    about: {
      title: 'FXGuard — منتج منظومة بيزدوار',
      body: '<strong>FXGuard</strong> لوحة تشغيل لمكاتب الصرافة والحوالات والمالية على رقم واتساب شركة واحد — لا صندوق إعلانات عام. المتجر: <a href="https://fxguard.io/" target="_blank" rel="noopener noreferrer">fxguard.io</a> · اللوحة: <a href="https://app.fxguard.io/" target="_blank" rel="noopener noreferrer">app.fxguard.io</a> · واتساب المبيعات: <a href="https://wa.me/905010676486" target="_blank" rel="noopener noreferrer">+90 501 067 6486</a>.',
      ctaContact: 'إلى fxguard.io',
      ctaPortfolio: 'المحاسبة ومواقع الصرافة'
    },
    cta: {
      title: 'شغّل مكتب المال على لوحة واتساب شركة واحدة',
      desc: 'Cloud Start ٤٩$/شهر صندوق وارد. Business من ٢٤٩$ مع حزمة FX. مسار القناة يُقال بصدق. استرداد ٧ أيام لأول شهر Start.',
      btnStart: 'عرض موجَّه',
      btnPricing: 'الأسعار',
      btnStore: 'اشترِ عبر واتساب'
    },
    related: {
      title: 'منتجات وخدمات ذات صلة',
      items: [
        { href: '/pages/fxguard-accounting', icon: 'chart-line', title: 'Accounting', desc: 'دفتر FXGuard للإيصالات والحوالات' },
        { href: '/pages/fxguard-exchange', icon: 'globe', title: 'مواقع الصرافة', desc: 'أسعار وطلبات وتتبع بعلامتك' },
        { href: STORE, icon: 'external-link', title: 'fxguard.io', desc: 'المتجر والعروض المكتوبة', external: true },
        { href: '/pages/products', icon: 'box', title: 'المنتجات', desc: 'كتالوج بيزدوار' },
        { href: '/pages/contact', icon: 'phone', title: 'تواصل', desc: 'استشارة بيزدوار' }
      ]
    },
    geoText: 'FXGuard — لوحة واتساب لمكاتب الصرافة والحوالات والمالية · تركيا والإمارات وأوروبا وإيران · fxguard.io · منظومة بيزدوار.'
  });
})();

