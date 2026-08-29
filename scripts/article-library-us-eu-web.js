/**
 * US/EU web design + digital marketing articles (USD / EUR billing).
 * Merged into ARTICLES by article-library.js
 */
function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function fig(src, alt, cap) {
  return `<figure class="article__figure"><img src="${src}" alt="${esc(alt)}" width="960" height="540" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
}

function loc(fa, tr, en, ru, ar) {
  return { fa, tr, en, ru, ar };
}

module.exports = [
  {
    file: 'website-design-us-eu.html',
    slug: 'website-design-us-eu',
    seoKey: 'articleWebsiteDesignUsEu',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/content/services-web-mockup.svg',
    extraImg: 'assets/images/content/related-thumb-fast.svg',
    category: loc('طراحی وب', 'Web tasarım', 'Web design', 'Веб-дизайн', 'تصميم ويب'),
    title: loc(
      'طراحی سایت انگلیسی برای اروپا و آمریکا — فاکتور دلار یا یورو',
      'Avrupa ve ABD için İngilizce web tasarım — USD veya EUR fatura',
      'English website design for US and EU businesses — billed in USD or EUR',
      'Английский веб-дизайн для США и ЕС — счёт в USD или EUR',
      'تصميم مواقع إنجليزية لأمريكا وأوروبا — فاتورة بالدولار أو اليورو'
    ),
    description: loc(
      'چطور برای مشتری آمریکا و اروپا سایت انگلیسی سفارش بدهید: پلن ۵روزه از ۹۹ دلار، پروژه سفارشی، Stripe، Zoom/Meet و فاکتور USD/EUR.',
      'ABD ve AB için İngilizce site nasıl sipariş edilir: 5 günde $99’dan, özel proje, Stripe, Zoom/Meet ve USD/EUR fatura.',
      'How US and EU companies order an English site: 5-day plans from $99 / ~€90, custom builds, Stripe, Zoom/Meet and invoices in USD or EUR.',
      'Как компаниям США и ЕС заказать английский сайт: тарифы от $99 / ~€90, Stripe, Zoom/Meet и счёт в USD или EUR.',
      'كيف تطلب شركة أمريكية أو أوروبية موقعاً إنجليزياً: باقات من ٩٩$ / ~€90 وStripe وZoom وفاتورة USD أو EUR.'
    ),
    keywords: loc(
      'طراحی سایت اروپا, طراحی سایت آمریکا, web design USD, طراحی سایت یورو, Fast Web Studio, بیزدوار',
      'web tasarım Avrupa, web tasarım ABD, USD web tasarım, Fast Web Studio, Bizdavar',
      'web design US, web design EU, website from $99, EUR web design, Fast Web Studio, Bizdavar',
      'веб-дизайн США, веб-дизайн ЕС, сайт от $99, Fast Web Studio, Bizdavar',
      'تصميم مواقع أمريكا, تصميم مواقع أوروبا, موقع من 99 دولار, Fast Web Studio, بيزدوار'
    ),
    tags: loc(
      ['طراحی سایت', 'USD/EUR', 'Fast Studio', 'Stripe', 'GDPR'],
      ['Web tasarım', 'USD/EUR', 'Fast Studio', 'Stripe', 'GDPR'],
      ['Web design', 'USD/EUR', 'Fast Studio', 'Stripe', 'GDPR'],
      ['Веб-дизайн', 'USD/EUR', 'Fast Studio', 'Stripe', 'GDPR'],
      ['تصميم ويب', 'USD/EUR', 'Fast Studio', 'Stripe', 'GDPR']
    ),
    toc: {
      fa: [['ch-who', 'برای چه کسب‌وکاری'], ['ch-fast', 'پلن ۵روزه'], ['ch-custom', 'پروژه سفارشی'], ['ch-pay', 'پرداخت و ارز'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-who', 'Hangi işletme'], ['ch-fast', '5 günlük plan'], ['ch-custom', 'Özel proje'], ['ch-pay', 'Ödeme ve para birimi'], ['ch-faq', 'SSS']],
      en: [['ch-who', 'Who it is for'], ['ch-fast', '5-day plans'], ['ch-custom', 'Custom builds'], ['ch-pay', 'Payment and currency'], ['ch-faq', 'FAQ']],
      ru: [['ch-who', 'Для кого'], ['ch-fast', 'Тариф 5 дней'], ['ch-custom', 'Индивидуальный проект'], ['ch-pay', 'Оплата и валюта'], ['ch-faq', 'FAQ']],
      ar: [['ch-who', 'لمن'], ['ch-fast', 'باقة ٥ أيام'], ['ch-custom', 'مشروع مخصص'], ['ch-pay', 'الدفع والعملة'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'برای شرکت آمریکایی یا اروپایی هم سایت می‌سازید؟', a: 'بله — این تمرکز اصلی خدمات وب است. سایت انگلیسی LTR، فاکتور دلار یا یورو، جلسه Zoom/Meet و همپوشانی CET/EST. جزئیات در <a href="/pages/services#intl-markets">صفحه خدمات</a>.' },
        { q: 'ارزان‌ترین پلن چقدر است؟', a: 'پلن پایه Fast Studio ۹۹ دلار (حدود ۹۰ یورو). فروشگاهی ۱۹۹ و حرفه‌ای ۲۹۹ دلار. جدول در <a href="/pages/fast">Fast Web Studio</a>.' },
        { q: 'Stripe و PayPal دارید؟', a: 'بله — روی فروشگاه و پلن Pro. هاست بین‌المللی از طریق Netinode.' }
      ],
      tr: [
        { q: 'ABD veya AB şirketi için site yapıyor musunuz?', a: 'Evet — asıl odağımız bu. İngilizce LTR, USD/EUR fatura, Zoom/Meet. Ayrıntı: <a href="/pages/services#intl-markets">hizmetler</a>.' },
        { q: 'En düşük fiyat?', a: 'Fast Studio temel plan 99$ (~€90). Tablo: <a href="/pages/fast">Fast Web Studio</a>.' },
        { q: 'Stripe / PayPal?', a: 'Evet — mağaza ve Pro planda. Hosting Netinode.' }
      ],
      en: [
        { q: 'Do you build sites for US and EU companies?', a: 'Yes — that is the core web offer. English LTR, invoices in USD or EUR, Zoom/Meet reviews and CET/EST overlap. See <a href="/pages/services#intl-markets">services</a>.' },
        { q: 'What is the lowest price?', a: 'Fast Studio Basic is $99 (about €90). Store $199, Pro $299. Plans: <a href="/pages/fast">Fast Web Studio</a>.' },
        { q: 'Stripe and PayPal?', a: 'Yes — on store builds and the Pro plan. International hosting via Netinode.' }
      ],
      ru: [
        { q: 'Делаете сайты для США и ЕС?', a: 'Да — это основной оффер. Английский LTR, счёт USD/EUR, Zoom/Meet. См. <a href="/pages/services#intl-markets">услуги</a>.' },
        { q: 'Минимальная цена?', a: 'Basic $99 (~€90). Тарифы: <a href="/pages/fast">Fast Web Studio</a>.' },
        { q: 'Stripe / PayPal?', a: 'Да — магазин и Pro. Хостинг Netinode.' }
      ],
      ar: [
        { q: 'هل تبنون مواقع لأمريكا وأوروبا؟', a: 'نعم — هذا العرض الأساسي. إنجليزي LTR وفاتورة USD/EUR وZoom. التفاصيل: <a href="/pages/services#intl-markets">الخدمات</a>.' },
        { q: 'أقل سعر؟', a: 'الأساسي ٩٩$ (~€90). الباقات: <a href="/pages/fast">Fast Web Studio</a>.' },
        { q: 'Stripe وPayPal؟', a: 'نعم في المتجر وPro. الاستضافة عبر Netinode.' }
      ]
    },
    related: [
      { title: loc('Fast Web Studio', 'Fast Web Studio', 'Fast Web Studio', 'Fast Web Studio', 'Fast Web Studio'), url: '../fast', desc: loc('از ۹۹ دلار / ~€۹۰', '$99 / ~€90’dan', 'From $99 / ~€90', 'от $99 / ~€90', 'من $99 / ~€90') },
      { title: loc('خدمات طراحی وب', 'Web tasarım hizmetleri', 'Web design services', 'Услуги веб-дизайна', 'خدمات تصميم الويب'), url: '../services#web-design', desc: loc('سایت سفارشی US/EU', 'Özel US/EU sitesi', 'Custom US/EU websites', 'Сайт US/EU под ключ', 'موقع مخصص US/EU') },
      { title: loc('استعلام پیشنهاد', 'Teklif iste', 'Request a quote', 'Запросить оценку', 'اطلب عرضاً'), url: '../contact?service=web-design', desc: loc('فاکتور USD یا EUR', 'USD veya EUR fatura', 'Invoice in USD or EUR', 'Счёт USD или EUR', 'فاتورة USD أو EUR') }
    ],
    sources: [
      { href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', label: loc('راهنمای سئو گوگل', 'Google SEO rehberi', 'Google SEO Starter Guide', 'Google SEO Starter Guide', 'دليل Google للسيو') },
      { href: 'https://stripe.com/docs', label: loc('اسناد Stripe', 'Stripe belgeleri', 'Stripe documentation', 'Документация Stripe', 'وثائق Stripe') }
    ],
    body: {
      fa: `
<p>اگر بازار هدف شما <strong>اروپا یا آمریکاست</strong>، سایت باید انگلیسی، سریع و قابل فاکتور به <strong>دلار یا یورو</strong> باشد — نه فقط یک قالب RTL. بیزدوار همین مسیر را در <a href="/pages/services#web-design">طراحی وب</a> و <a href="/pages/fast">Fast Web Studio</a> می‌فروشد.</p>
${fig('/assets/images/content/services-web-mockup.svg', 'ماکاپ طراحی سایت شرکتی انگلیسی — Fast Web Studio', 'پلن پایه از ۹۹ دلار / حدود ۹۰ یورو — تحویل ۵ روز کاری.')}
<h2 id="ch-who">برای چه کسب‌وکاری مناسب است؟</h2>
<ul>
<li>استارتاپ و SaaS آمریکا که به لندینگ انگلیسی و Stripe نیاز دارند</li>
<li>SMB اروپا با فاکتور یورو و هاست سازگار با GDPR</li>
<li>آژانس‌هایی که ظرفیت طراحی وب ندارند (سرریز / white-label)</li>
</ul>
<p>همپوشانی ساعت با CET و EST است؛ بازبینی در Zoom یا Google Meet.</p>
<h2 id="ch-fast">پلن ۵روزه از ۹۹ دلار</h2>
<p>Fast Studio سه پلن ثابت دارد: <strong>$99 / $199 / $299</strong>. مناسب سایت شرکتی، فروشگاه کوچک و برند در حال رشد. جدول قیمت در <a href="/pages/fast">صفحه Fast</a>.</p>
${fig('/assets/images/content/related-thumb-fast.svg', 'تحویل سایت شرکتی در پنج روز کاری', 'محتوا و لوگو را روز اول بفرستید تا زمان‌بندی قفل بماند.')}
<h2 id="ch-custom">چه زمانی پروژه سفارشی بگیرید؟</h2>
<p>وب‌اپ، پنل، فروشگاه Stripe پیچیده یا چندزبانه از مسیر <a href="/pages/contact?service=web-design">پیشنهاد سفارشی</a> می‌رود — نه پلن ثابت پنج‌روزه.</p>
<h2 id="ch-pay">پرداخت، ارز و هاست</h2>
<p>ارز فاکتور را قبل از شروع مکتوب می‌کنیم (USD یا EUR). درگاه فروشگاه: Stripe یا PayPal. هاست بین‌المللی از <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a>. شروع: <a href="/pages/contact?service=web-design">فرم پیشنهاد وب</a>.</p>`,
      tr: `
<p>Hedefiniz <strong>Avrupa veya ABD</strong> ise site İngilizce, hızlı ve <strong>USD veya EUR</strong> faturalı olmalı. Bizdavar bunu <a href="/pages/services#web-design">web tasarım</a> ve <a href="/pages/fast">Fast Web Studio</a> ile satar.</p>
${fig('/assets/images/content/services-web-mockup.svg', 'İngilizce kurumsal site mockup — Fast Web Studio', 'Temel plan 99$ / ~€90 — 5 iş günü.')}
<h2 id="ch-who">Hangi işletmeye uygun?</h2>
<ul>
<li>Stripe’lı İngilizce landing isteyen ABD startup / SaaS</li>
<li>EUR fatura ve GDPR uyumlu hosting isteyen AB KOBİ</li>
<li>Kapasitesi yetmeyen ajanslar (overflow / white-label)</li>
</ul>
<p>CET ve EST örtüşmesi; inceleme Zoom veya Google Meet.</p>
<h2 id="ch-fast">5 günde $99’dan</h2>
<p>Fast Studio: <strong>$99 / $199 / $299</strong>. Tablo: <a href="/pages/fast">Fast sayfası</a>.</p>
${fig('/assets/images/content/related-thumb-fast.svg', 'Beş iş gününde kurumsal site teslimi', 'İçerik ve logoyu 1. gün gönderin.')}
<h2 id="ch-custom">Özel proje ne zaman?</h2>
<p>Web app, panel veya karmaşık Stripe mağaza <a href="/pages/contact?service=web-design">özel teklif</a> ile yürür.</p>
<h2 id="ch-pay">Ödeme ve hosting</h2>
<p>Para birimi başlamadan yazılı netleşir. Mağaza: Stripe veya PayPal. Hosting: <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a>. Başlangıç: <a href="/pages/contact?service=web-design">web teklif formu</a>.</p>`,
      en: `
<p>If your buyers are in the <strong>United States or Europe</strong>, the site should be English-first, fast, and invoiced in <strong>USD or EUR</strong> — not an RTL template with machine translation. Bizdavar sells that path on <a href="/pages/services#web-design">web design</a> and <a href="/pages/fast">Fast Web Studio</a>.</p>
${fig('/assets/images/content/services-web-mockup.svg', 'English corporate website mockup — Fast Web Studio', 'Basic plan from $99 / about €90 — five business days.')}
<h2 id="ch-who">Who it is for</h2>
<ul>
<li>US startups and SaaS that need an English landing and Stripe</li>
<li>EU SMBs that want an EUR invoice and GDPR-aware hosting</li>
<li>Agencies that need overflow or white-label production</li>
</ul>
<p>We overlap CET and EST. Reviews happen on Zoom or Google Meet — no on-site travel.</p>
<h2 id="ch-fast">5-day plans from $99</h2>
<p>Fast Studio is three fixed prices: <strong>$99 / $199 / $299</strong> for a company site, a small store or a growing brand. See the table on the <a href="/pages/fast">Fast page</a>.</p>
${fig('/assets/images/content/related-thumb-fast.svg', 'Corporate website delivered in five business days', 'Send copy and logo on day one so the clock can start.')}
<h2 id="ch-custom">When to go custom</h2>
<p>Web apps, admin panels, complex Stripe stores or extra locales go through a <a href="/pages/contact?service=web-design">custom quote</a> — not the five-day SKU.</p>
<h2 id="ch-pay">Payment, currency and hosting</h2>
<p>We lock invoice currency in writing before kickoff (USD or EUR). Store checkout uses Stripe or PayPal. International hosting is via <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a>. Start on the <a href="/pages/contact?service=web-design">website quote form</a>.</p>`,
      ru: `
<p>Если покупатели в <strong>США или Европе</strong>, сайт должен быть на английском, быстрым и со счётом в <strong>USD или EUR</strong>. Этот путь — на <a href="/pages/services#web-design">веб-дизайне</a> и <a href="/pages/fast">Fast Web Studio</a>.</p>
${fig('/assets/images/content/services-web-mockup.svg', 'Макет английского корпоративного сайта — Fast Web Studio', 'Базовый тариф от $99 / ~€90 — 5 рабочих дней.')}
<h2 id="ch-who">Для кого</h2>
<ul>
<li>Стартапы и SaaS США — английский лендинг и Stripe</li>
<li>SMB ЕС — счёт в евро и хостинг с учётом GDPR</li>
<li>Агентства без свободной ёмкости (overflow / white-label)</li>
</ul>
<p>Пересечение CET и EST; ревью в Zoom или Google Meet.</p>
<h2 id="ch-fast">5 дней от $99</h2>
<p>Fast Studio: <strong>$99 / $199 / $299</strong>. Таблица на <a href="/pages/fast">странице Fast</a>.</p>
${fig('/assets/images/content/related-thumb-fast.svg', 'Корпоративный сайт за пять рабочих дней', 'Тексты и логотип — в день 1.')}
<h2 id="ch-custom">Когда индивидуальный проект</h2>
<p>Web app, панель или сложный магазин Stripe — через <a href="/pages/contact?service=web-design">индивидуальную оценку</a>.</p>
<h2 id="ch-pay">Оплата и хостинг</h2>
<p>Валюту фиксируем письменно до старта. Магазин: Stripe или PayPal. Хостинг: <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a>. Старт: <a href="/pages/contact?service=web-design">форма оценки сайта</a>.</p>`,
      ar: `
<p>إذا كان عملاؤكم في <strong>أمريكا أو أوروبا</strong> فالموقع يجب أن يكون بالإنجليزية وسريعاً وبفاتورة <strong>USD أو EUR</strong>. هذا المسار على <a href="/pages/services#web-design">تصميم الويب</a> و<a href="/pages/fast">Fast Web Studio</a>.</p>
${fig('/assets/images/content/services-web-mockup.svg', 'نموذج موقع شركات إنجليزي — Fast Web Studio', 'الباقة الأساسية من ٩٩$ / نحو ٩٠€ — خمسة أيام عمل.')}
<h2 id="ch-who">لمن</h2>
<ul>
<li>شركات ناشئة وSaaS أمريكية تحتاج لاندينغ إنجليزي وStripe</li>
<li>SMB أوروبية تريد فاتورة يورو واستضافة تراعي GDPR</li>
<li>وكالات بلا سعة (overflow / white-label)</li>
</ul>
<p>تداخل CET وEST؛ المراجعة عبر Zoom أو Google Meet.</p>
<h2 id="ch-fast">٥ أيام من ٩٩$</h2>
<p>Fast Studio: <strong>$99 / $199 / $299</strong>. الجدول في <a href="/pages/fast">صفحة Fast</a>.</p>
${fig('/assets/images/content/related-thumb-fast.svg', 'تسليم موقع شركات خلال خمسة أيام عمل', 'أرسلوا النصوص والشعار في اليوم الأول.')}
<h2 id="ch-custom">متى المشروع المخصص</h2>
<p>الويب آب واللوحة والمتجر المعقد عبر <a href="/pages/contact?service=web-design">عرض مخصص</a>.</p>
<h2 id="ch-pay">الدفع والاستضافة</h2>
<p>نثبت العملة كتابةً قبل البدء. المتجر: Stripe أو PayPal. الاستضافة: <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">Netinode</a>. ابدأ من <a href="/pages/contact?service=web-design">نموذج عرض الموقع</a>.</p>`
    }
  },
  {
    file: 'digital-marketing-us-eu.html',
    slug: 'digital-marketing-us-eu',
    seoKey: 'articleDigitalMarketingUsEu',
    date: '2026-08-29',
    modified: '2026-08-29',
    image: 'assets/images/content/services-dm-visual.svg',
    extraImg: 'assets/images/content/network-map.svg',
    category: loc('بازاریابی دیجیتال', 'Dijital pazarlama', 'Digital marketing', 'Цифровой маркетинг', 'التسويق الرقمي'),
    title: loc(
      'بازاریابی دیجیتال برای بازار آمریکا و اروپا — بودجه دلار و یورو',
      'ABD ve AB için dijital pazarlama — USD ve EUR bütçe',
      'Digital marketing for US and EU markets — budgets in USD and EUR',
      'Цифровой маркетинг для США и ЕС — бюджет в USD и EUR',
      'تسويق رقمي لأسواق أمريكا وأوروبا — ميزانية بالدولار واليورو'
    ),
    description: loc(
      'کمپین Google Ads، Meta و LinkedIn برای مخاطب US/EU با فاکتور دلار یا یورو، لندینگ انگلیسی و گزارش GA4.',
      'Google Ads, Meta ve LinkedIn — ABD/AB kitle, USD/EUR fatura, İngilizce landing ve GA4.',
      'Google Ads, Meta and LinkedIn for US/EU audiences — invoiced in USD or EUR, English landings and GA4 reporting.',
      'Google Ads, Meta и LinkedIn для аудиторий США/ЕС — счёт в USD или EUR, английский лендинг и GA4.',
      'إعلانات Google وMeta وLinkedIn لجمهور US/EU — فاتورة USD أو EUR وصفحات إنجليزية وGA4.'
    ),
    keywords: loc(
      'گوگل ادز اروپا, تبلیغات آمریکا, LinkedIn Ads, Meta Ads USD, بازاریابی دیجیتال یورو, بیزدوار',
      'Google Ads Avrupa, ABD reklam, LinkedIn Ads, Meta Ads USD, Bizdavar',
      'Google Ads EU, US digital marketing, LinkedIn Ads, Meta Ads USD, Bizdavar',
      'Google Ads ЕС, маркетинг США, LinkedIn Ads, Bizdavar',
      'إعلانات جوجل أوروبا, تسويق أمريكا, LinkedIn, بيزدوار'
    ),
    tags: loc(
      ['Google Ads', 'Meta', 'LinkedIn', 'GA4', 'USD/EUR'],
      ['Google Ads', 'Meta', 'LinkedIn', 'GA4', 'USD/EUR'],
      ['Google Ads', 'Meta', 'LinkedIn', 'GA4', 'USD/EUR'],
      ['Google Ads', 'Meta', 'LinkedIn', 'GA4', 'USD/EUR'],
      ['Google Ads', 'Meta', 'LinkedIn', 'GA4', 'USD/EUR']
    ),
    toc: {
      fa: [['ch-why', 'چرا US/EU'], ['ch-channels', 'کانال‌ها'], ['ch-landing', 'لندینگ و CRO'], ['ch-report', 'گزارش و ارز'], ['ch-faq', 'سوالات متداول']],
      tr: [['ch-why', 'Neden US/EU'], ['ch-channels', 'Kanallar'], ['ch-landing', 'Landing ve CRO'], ['ch-report', 'Rapor ve para birimi'], ['ch-faq', 'SSS']],
      en: [['ch-why', 'Why US/EU'], ['ch-channels', 'Channels'], ['ch-landing', 'Landing and CRO'], ['ch-report', 'Reporting and currency'], ['ch-faq', 'FAQ']],
      ru: [['ch-why', 'Почему US/EU'], ['ch-channels', 'Каналы'], ['ch-landing', 'Лендинг и CRO'], ['ch-report', 'Отчёт и валюта'], ['ch-faq', 'FAQ']],
      ar: [['ch-why', 'لماذا US/EU'], ['ch-channels', 'القنوات'], ['ch-landing', 'الصفحة وCRO'], ['ch-report', 'التقرير والعملة'], ['ch-faq', 'أسئلة']]
    },
    faq: {
      fa: [
        { q: 'بودجه تبلیغ را به چه ارزی می‌بندید؟', a: 'دلار یا یورو — همان ارز فاکتور خدمات. گزارش GA4 هم به همان واحد است.' },
        { q: 'بدون سایت انگلیسی می‌شود Ads زد؟', a: 'نباید. اول لندینگ انگلیسی و فرم؛ بعد بودجه. مسیر وب: <a href="/pages/articles/website-design-us-eu">طراحی سایت US/EU</a>.' },
        { q: 'LinkedIn برای B2B اروپا مناسب است؟', a: 'بله. برای لید سازمانی معمولاً LinkedIn را با Google Ads جستجو ترکیب می‌کنیم.' }
      ],
      tr: [
        { q: 'Reklam bütçesi hangi para birimi?', a: 'USD veya EUR — fatura ile aynı. GA4 aynı birimde.' },
        { q: 'İngilizce sitesiz Ads?', a: 'Hayır. Önce landing. Web: <a href="/pages/articles/website-design-us-eu">US/EU web tasarım</a>.' },
        { q: 'AB B2B için LinkedIn?', a: 'Evet — genelde Google Ads arama ile birlikte.' }
      ],
      en: [
        { q: 'Which currency is the ad budget in?', a: 'USD or EUR — same as the service invoice. GA4 reports in that unit.' },
        { q: 'Can we run ads without an English site?', a: 'You should not. Land first, then spend. Web path: <a href="/pages/articles/website-design-us-eu">US/EU website design</a>.' },
        { q: 'Is LinkedIn right for EU B2B?', a: 'Often yes. We usually pair it with Google Search for high-intent queries.' }
      ],
      ru: [
        { q: 'В какой валюте бюджет?', a: 'USD или EUR — как в счёте. GA4 в той же единице.' },
        { q: 'Реклама без английского сайта?', a: 'Не стоит. Сначала лендинг. Веб: <a href="/pages/articles/website-design-us-eu">дизайн US/EU</a>.' },
        { q: 'LinkedIn для B2B ЕС?', a: 'Часто да — вместе с Google Search.' }
      ],
      ar: [
        { q: 'بأي عملة الميزانية؟', a: 'USD أو EUR — نفس فاتورة الخدمة. GA4 بنفس الوحدة.' },
        { q: 'إعلانات بلا موقع إنجليزي؟', a: 'لا. أولاً الصفحة. الويب: <a href="/pages/articles/website-design-us-eu">تصميم مواقع US/EU</a>.' },
        { q: 'LinkedIn لـ B2B أوروبا؟', a: 'غالباً نعم مع بحث Google.' }
      ]
    },
    related: [
      { title: loc('خدمات بازاریابی دیجیتال', 'Dijital pazarlama', 'Digital marketing services', 'Цифровой маркетинг', 'التسويق الرقمي'), url: '../services#digital-marketing', desc: loc('Ads و SEO و CRO', 'Ads, SEO, CRO', 'Ads, SEO and CRO', 'Ads, SEO, CRO', 'إعلانات وSEO وCRO') },
      { title: loc('طراحی سایت US/EU', 'US/EU web tasarım', 'US/EU website design', 'Сайт US/EU', 'تصميم مواقع US/EU'), url: 'website-design-us-eu', desc: loc('لندینگ انگلیسی', 'İngilizce landing', 'English landings', 'Английский лендинг', 'صفحات إنجليزية') },
      { title: loc('استعلام کمپین', 'Kampanya teklifi', 'Campaign quote', 'Запрос кампании', 'عرض الحملة'), url: '../contact?service=digital-marketing', desc: loc('بودجه USD/EUR', 'USD/EUR bütçe', 'USD/EUR budget', 'Бюджет USD/EUR', 'ميزانية USD/EUR') }
    ],
    sources: [
      { href: 'https://support.google.com/google-ads/answer/6243030', label: loc('گوگل ادز چگونه کار می‌کند', 'Google Ads nasıl çalışır', 'How Google Ads works', 'Как работает Google Ads', 'كيف تعمل إعلانات Google') },
      { href: 'https://developers.google.com/analytics/devguides/collection/ga4', label: loc('مستندات GA4', 'GA4 belgeleri', 'GA4 documentation', 'Документация GA4', 'وثائق GA4') }
    ],
    body: {
      fa: `
<p>کمپین برای <strong>مخاطب آمریکا و اروپا</strong> با بودجه ریالی و لندینگ فارسی جلو نمی‌رود. بیزدوار Ads را روی سایت انگلیسی، فرم تبدیل و فاکتور <strong>دلار یا یورو</strong> می‌چیند — جزئیات اجرا در <a href="/pages/services#digital-marketing">بازاریابی دیجیتال</a>.</p>
${fig('/assets/images/content/services-dm-visual.svg', 'شبکه بازاریابی دیجیتال و کانال‌های جهانی', 'Google Ads، Meta و LinkedIn با گزارش GA4 به ارز فاکتور.')}
<h2 id="ch-why">چرا جدا از بازار ایران؟</h2>
<p>حراج، زبان، درگاه و ساعت کاری فرق دارد. پیام فارسی برای جستجوی انگلیسی تبدیل نمی‌شود. اول <a href="/pages/articles/website-design-us-eu">سایت انگلیسی</a>، بعد بودجه.</p>
<h2 id="ch-channels">کانال‌ها</h2>
<ul>
<li><strong>Google Ads</strong> — جستجو و Performance Max برای intent خرید</li>
<li><strong>Meta</strong> — Facebook / Instagram برای آگاهی و ریتارگت</li>
<li><strong>LinkedIn</strong> — لید B2B اروپا و آمریکای شمالی</li>
</ul>
${fig('/assets/images/content/network-map.svg', 'نقشه شبکه و مسیر جذب مشتری بین‌المللی', 'قیف را با GA4 به دلار یا یورو اندازه می‌گیریم — نه با لایک.')}
<h2 id="ch-landing">لندینگ و CRO</h2>
<p>هر کلیک باید به صفحه انگلیسی با فرم، تقویم Zoom یا Stripe برسد. بدون آن بودجه می‌سوزد. هم‌راستا با <a href="/pages/fast">Fast Studio</a> یا سایت سفارشی.</p>
<h2 id="ch-report">گزارش و ارز</h2>
<p>KPI ماهانه: هزینه جذب، نرخ تبدیل، کیفیت لید و درآمد به USD یا EUR. شروع: <a href="/pages/contact?service=digital-marketing">استعلام کمپین</a>.</p>`,
      tr: `
<p><strong>ABD/AB kitlesi</strong> için reklam, İngilizce site ve <strong>USD veya EUR</strong> fatura ister. Uygulama: <a href="/pages/services#digital-marketing">dijital pazarlama</a>.</p>
${fig('/assets/images/content/services-dm-visual.svg', 'Küresel dijital pazarlama ağı', 'Google Ads, Meta ve LinkedIn — GA4 fatura para biriminde.')}
<h2 id="ch-why">Neden ayrı?</h2>
<p>Dil, ödeme ve saat farklı. Önce <a href="/pages/articles/website-design-us-eu">İngilizce site</a>, sonra bütçe.</p>
<h2 id="ch-channels">Kanallar</h2>
<ul>
<li><strong>Google Ads</strong> — arama ve Performance Max</li>
<li><strong>Meta</strong> — farkındalık ve retarget</li>
<li><strong>LinkedIn</strong> — AB/ABD B2B lead</li>
</ul>
${fig('/assets/images/content/network-map.svg', 'Uluslararası edinme ağı', 'Huniyi GA4 ile dolar veya euro ölçün.')}
<h2 id="ch-landing">Landing ve CRO</h2>
<p>Tıklama İngilizce forma, Zoom’a veya Stripe’a gitmeli. <a href="/pages/fast">Fast Studio</a> ile hizalayın.</p>
<h2 id="ch-report">Rapor</h2>
<p>Aylık KPI USD veya EUR. Başlangıç: <a href="/pages/contact?service=digital-marketing">kampanya talebi</a>.</p>`,
      en: `
<p>Campaigns for <strong>US and EU buyers</strong> need an English site and a budget invoiced in <strong>USD or EUR</strong>. Bizdavar runs that stack on <a href="/pages/services#digital-marketing">digital marketing</a>.</p>
${fig('/assets/images/content/services-dm-visual.svg', 'Global digital marketing network', 'Google Ads, Meta and LinkedIn with GA4 in your billing currency.')}
<h2 id="ch-why">Why not reuse an Iran funnel?</h2>
<p>Language, checkout and time zones differ. Persian copy does not convert English search. Ship an <a href="/pages/articles/website-design-us-eu">English website</a> first, then spend.</p>
<h2 id="ch-channels">Channels</h2>
<ul>
<li><strong>Google Ads</strong> — Search and Performance Max for high intent</li>
<li><strong>Meta</strong> — Facebook / Instagram for reach and retargeting</li>
<li><strong>LinkedIn</strong> — B2B leads in Europe and North America</li>
</ul>
${fig('/assets/images/content/network-map.svg', 'International acquisition map', 'Measure the funnel in GA4 in dollars or euros — not likes.')}
<h2 id="ch-landing">Landing and CRO</h2>
<p>Every click should hit an English page with a form, Zoom booking or Stripe. Align with <a href="/pages/fast">Fast Studio</a> or a custom site.</p>
<h2 id="ch-report">Reporting and currency</h2>
<p>Monthly KPIs: acquisition cost, conversion rate, lead quality and revenue in USD or EUR. Start with a <a href="/pages/contact?service=digital-marketing">campaign quote</a>.</p>`,
      ru: `
<p>Кампании для <strong>США и ЕС</strong> нуждаются в английском сайте и бюджете в <strong>USD или EUR</strong>. Стек — на <a href="/pages/services#digital-marketing">цифровом маркетинге</a>.</p>
${fig('/assets/images/content/services-dm-visual.svg', 'Глобальная сеть цифрового маркетинга', 'Google Ads, Meta и LinkedIn — GA4 в валюте счёта.')}
<h2 id="ch-why">Почему отдельно?</h2>
<p>Язык, оплата и часовые пояса другие. Сначала <a href="/pages/articles/website-design-us-eu">английский сайт</a>, потом бюджет.</p>
<h2 id="ch-channels">Каналы</h2>
<ul>
<li><strong>Google Ads</strong> — поиск и Performance Max</li>
<li><strong>Meta</strong> — охват и ретаргет</li>
<li><strong>LinkedIn</strong> — B2B США и ЕС</li>
</ul>
${fig('/assets/images/content/network-map.svg', 'Карта международного привлечения', 'Воронку мерим в GA4 в долларах или евро.')}
<h2 id="ch-landing">Лендинг и CRO</h2>
<p>Клик — на английскую форму, Zoom или Stripe. С <a href="/pages/fast">Fast Studio</a>.</p>
<h2 id="ch-report">Отчёт</h2>
<p>KPI в USD или EUR. Старт: <a href="/pages/contact?service=digital-marketing">запрос кампании</a>.</p>`,
      ar: `
<p>حملات <strong>أمريكا وأوروبا</strong> تحتاج موقعاً إنجليزياً وميزانية <strong>USD أو EUR</strong>. التنفيذ على <a href="/pages/services#digital-marketing">التسويق الرقمي</a>.</p>
${fig('/assets/images/content/services-dm-visual.svg', 'شبكة تسويق رقمي عالمية', 'Google Ads وMeta وLinkedIn مع GA4 بعملة الفاتورة.')}
<h2 id="ch-why">لماذا مسار منفصل؟</h2>
<p>اللغة والدفع والمناطق الزمنية مختلفة. أولاً <a href="/pages/articles/website-design-us-eu">موقع إنجليزي</a> ثم الميزانية.</p>
<h2 id="ch-channels">القنوات</h2>
<ul>
<li><strong>Google Ads</strong> — البحث وPerformance Max</li>
<li><strong>Meta</strong> — الوصول وإعادة الاستهداف</li>
<li><strong>LinkedIn</strong> — عملاء B2B في أوروبا وأمريكا</li>
</ul>
${fig('/assets/images/content/network-map.svg', 'خريطة اكتساب دولية', 'نقيس القمع في GA4 بالدولار أو اليورو.')}
<h2 id="ch-landing">الصفحة وCRO</h2>
<p>كل نقرة إلى نموذج إنجليزي أو Zoom أو Stripe. مع <a href="/pages/fast">Fast Studio</a>.</p>
<h2 id="ch-report">التقرير</h2>
<p>مؤشرات شهرية بـ USD أو EUR. ابدأ من <a href="/pages/contact?service=digital-marketing">عرض الحملة</a>.</p>`
    }
  }
];
