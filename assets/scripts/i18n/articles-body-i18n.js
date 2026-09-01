/**
 * Localized article body HTML (between hero image and .article__cta).
 * FA source lives in pages/articles/{slug}.html; injected by applyArticlePage().
 */
(function () {
  var en = {
    'vega-supply-iran':
      '<img src="/assets/images/vega/slides/value-process-safety.jpg" alt="VEGA sensors and instrumentation in an industrial environment" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Oil, petrochemical, water and food projects in Iran need reliable level, pressure and switch sensors. Bizdavar Group supplies genuine <a href="/en/pages/vega">VEGA products</a> with Persian consulting, precise order codes and international logistics — with offices in <strong>Iran, Turkey, Armenia and Dubai</strong>.</p>' +
      '<h2>1. Why supply through Bizdavar?</h2>' +
      '<p>A transparent supply channel, clear foreign-currency proforma and coordinated shipping to your project — instead of ambiguous grey-market purchases. Our multilingual technical team helps you choose the right model for your process (Ex/SIL and tank conditions).</p>' +
      '<h2>2. From inquiry to delivery</h2>' +
      '<ol>' +
      '<li>Process, tank and Ex/SIL requirements</li>' +
      '<li>Model recommendation (e.g. VEGAPULS, VEGABAR, VEGAPOINT) and order code</li>' +
      '<li>Proforma and delivery window</li>' +
      '<li>Order, shipping and installation support</li>' +
      '</ol>' +
      '<p>See the buying path in <a href="/en/pages/products#supply">industrial services</a> and the <a href="/en/pages/vega">VEGA catalog</a>.</p>' +
      '<h2>3. Complementary brands</h2>' +
      '<p>Alongside VEGA we also supply <a href="/en/pages/prosense">Prosense</a> for gas and flame, <a href="/en/pages/teltonika">Teltonika</a> for fleet and <a href="/en/pages/gamak">Gamak</a> for electric motors — one contact for B2B projects.</p>' +
      '<h2>4. Start your inquiry</h2>' +
      '<p>Send product name, quantity and process conditions via the <a href="/en/pages/contact">contact form</a> or Persian WhatsApp. We respond during business hours.</p>',

    'multilingual-web-iran-turkey':
      '<img src="/assets/images/brand/bizdavar-logo-square.png" alt="Bizdavar — multilingual website fa / tr / en" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Businesses active in both <strong>Iran</strong> and <strong>Turkey</strong> need a site that handles Persian RTL, Turkish/English LTR, local WhatsApp numbers and hreflang SEO correctly. Bizdavar Group implements this pattern in its own projects and for clients — with offices in Iran, Turkey, Armenia and Dubai.</p>' +
      '<h2>1. URL structure and languages</h2>' +
      '<p>Persian at the domain root, Turkish under <code>/tr/</code> and English under <code>/en/</code> — with separate hreflang and canonical tags per language. This prevents duplicate content and sends clear GEO signals to Google.</p>' +
      '<h2>2. Content and local trust</h2>' +
      '<ul>' +
      '<li>WhatsApp numbers for Iran and Turkey</li>' +
      '<li>Office presence in Iran, Turkey, Armenia and Dubai</li>' +
      '<li>Case studies and familiar brands for each market</li>' +
      '<li>Service pages targeting local queries (web design Istanbul, industrial supply Iran, …)</li>' +
      '</ul>' +
      '<h2>3. Fast delivery with Fast Studio</h2>' +
      '<p>If you need a corporate site or store in a few days, <a href="/en/pages/fast">Fast Web Studio</a> offers fixed plans with RTL support and WhatsApp. For custom multilingual projects, see Bizdavar <a href="/en/pages/services#web-design">web design services</a>.</p>' +
      '<h2>4. Next step</h2>' +
      '<p>Describe your target markets (IR / TR / international), required languages and site type in the <a href="/en/pages/contact">contact form</a> so we can recommend the right path.</p>',

    'what-is-digital-marketing':
      '<img src="/assets/images/content/network-map.svg" alt="Digital marketing channel map" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Digital marketing means using online channels — websites, social media, ads, SEO and email — to attract audiences, build trust and increase sales. At <a href="/en/pages/about">Bizdavar Group</a> we align this track with our <a href="/en/pages/services#digital-marketing">digital marketing services</a>.</p>' +
      '<h2>1. Main channels</h2>' +
      '<p>SEO, pay-per-click (Google Ads), social networks, email marketing and expert content (blog) are the most important channels.</p>' +
      '<h2>2. Difference from traditional marketing</h2>' +
      '<p>In digital, everything is measurable: CTR, CPA, conversion rate and ROI — and you can optimize faster.</p>' +
      '<h2>3. Where to start?</h2>' +
      '<p>Define your target audience, analyze competitors and launch a professional landing page or site — for example with <a href="/en/pages/fast">Fast Web Studio</a> in 5 days.</p>',

    'digital-marketing':
      '<img src="/assets/images/content/network-map.svg" alt="Digital marketing network" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Digital marketing is not just about traffic — the goal is converting visitors into customers. At <a href="/en/pages/about">Bizdavar Group</a> we drive this path with data and A/B testing:</p>' +
      '<h2>1. A clear sales funnel</h2>' +
      '<p>From awareness to purchase — each stage needs its own content, offer and CTA.</p>' +
      '<h2>2. Conversion rate optimization (CRO)</h2>' +
      '<p>Site speed, contact forms, trust signals (portfolio, reviews) and <a href="/en/pages/fast">landing page design</a> directly affect sales.</p>' +
      '<h2>3. Targeted advertising</h2>' +
      '<p>Google Ads and paid social with controlled budgets and ROI reporting — details in our <a href="/en/pages/services#digital-marketing">digital marketing services</a>.</p>' +
      '<h2>4. Automation and follow-up</h2>' +
      '<p>Email, CRM and retargeting keep warm leads from slipping away.</p>',

    'social-media-management':
      '<img src="/assets/images/content/network-map.svg" alt="Social media management" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>SMM means content planning, visual design, regular publishing and performance analysis on Instagram, LinkedIn and other networks. Example execution: the <a href="/en/pages/biztejarat">Biztejarat project</a>.</p>' +
      '<h2>1. Content strategy</h2>' +
      '<p>Publishing calendar, brand tone and content types (educational, product, social proof) should be defined upfront.</p>' +
      '<h2>2. Design and video</h2>' +
      '<p>Posts, stories and reels with a unified visual identity — especially important for industrial B2B.</p>' +
      '<h2>3. Paid Social ads</h2>' +
      '<p>Precise audience targeting with links to landing pages or the <a href="/en/pages/contact">contact form</a>.</p>',

    'fast-studio':
      '<img src="/assets/images/content/fast-hero.svg?v=20260901d" alt="Fast Web Studio — desktop and mobile mockup" class="article__img" loading="lazy" width="960" height="640">' +
      '<p><a href="/en/pages/fast">Fast Web Studio</a> is Bizdavar\'s product for delivering corporate or store websites with <strong>fixed pricing</strong> and <strong>daily milestones</strong> — from $99 to $299. The goal: go live this week, not after months of vague negotiation.</p>' +
      '<h2>Why Fast matters for business</h2>' +
      '<p>Many teams get stuck between "cheap low-quality sites" and "multi-month custom projects." Fast sits in the middle: professional RTL design, WhatsApp and lead forms, and a clear 5-day path — with upgrades to stores, multilingual sites or even <a href="/en/pages/custom-web-app">custom web and apps</a>.</p>' +
      '<h2>1. Starter plan ($99)</h2>' +
      '<ul>' +
      '<li>Single-page / company intro site</li>' +
      '<li>Mobile responsive, contact form, WhatsApp button</li>' +
      '<li>Social links and management training</li>' +
      '</ul>' +
      '<p>Ideal for startups and businesses that need a quick online presence.</p>' +
      '<h2>2. Store plan ($199)</h2>' +
      '<ul>' +
      '<li>All starter features + WooCommerce</li>' +
      '<li>Initial products, categories and cart</li>' +
      '<li>Basic product-page SEO and store management training</li>' +
      '</ul>' +
      '<h2>3. Pro plan ($299)</h2>' +
      '<ul>' +
      '<li>More custom UI, up to 15 pages + blog</li>' +
      '<li>Payment gateway, chat/WhatsApp widget, analytics</li>' +
      '<li>1 month post-launch support</li>' +
      '</ul>' +
      '<h2>4. How does the 5-day path work?</h2>' +
      '<ol>' +
      '<li><strong>Day 1:</strong> Discovery — logo, colors, copy and references</li>' +
      '<li><strong>Day 2:</strong> Design — approval before coding</li>' +
      '<li><strong>Day 3:</strong> Development — forms, WhatsApp, structure</li>' +
      '<li><strong>Day 4:</strong> Store/content — purchase test on store plans</li>' +
      '<li><strong>Day 5:</strong> Delivery — training, domain, go live</li>' +
      '</ol>' +
      '<p>See content prep details in the <a href="/en/pages/articles/website-speed-5-days">5-day site checklist</a>.</p>' +
      '<h2>5. Domain, hosting and SSL</h2>' +
      '<p>Design cost is separate from domain/hosting. Buy domain and hosting from <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">Netinode Shop</a> — Bizdavar\'s own infrastructure. Service overview: <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">netinode.net</a>.</p>' +
      '<h2>6. Fast or custom project?</h2>' +
      '<p>If you need user panels, complex logic, mobile apps or special integrations, start with <a href="/en/pages/custom-web-app">custom web and app design</a> or read <a href="/en/pages/articles/custom-web-app-development">custom web and app development</a>. The same Bizdavar team covers both paths.</p>',

    'industrial-sensors':
      '<img src="/assets/images/vega/slides/value-process-safety.jpg" alt="VEGA industrial sensor" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Choosing level, pressure or flow sensors for oil, petrochemical, water and food projects requires technical consulting. Bizdavar supplies <a href="/en/pages/vega">VEGA</a> and <a href="/en/pages/prosense">Prosense</a> with transparent proforma quotes.</p>' +
      '<h2>1. Measurement type</h2>' +
      '<p>Radar (VEGAPULS), pressure (VEGABAR), switches (VEGAPOINT) — depending on tank, temperature and medium.</p>' +
      '<h2>2. Certification and safety</h2>' +
      '<p>For Ex and SIL environments, model and technical documentation must be specified precisely.</p>' +
      '<h2>3. Supply path</h2>' +
      '<p>Inquiry → proforma → order → logistics — details in <a href="/en/pages/products#supply">industrial services</a>.</p>',

    'about-bizdavar-group':
      '<img src="/assets/images/content/about-hero.svg" alt="Bizdavar Group — global presence" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Bizdavar Group has operated since 2013, founded by <strong>Ersan Jahed Tabrizi</strong> — 100+ projects across 11 countries.</p>' +
      '<h2>Areas of activity</h2>' +
      '<ul>' +
      '<li>Digital marketing and SMM</li>' +
      '<li>Web design and Fast Web Studio</li>' +
      '<li>Digital products and industrial supply (FXGuard, VEGA, Prosense and more)</li>' +
      '<li>Supply of VEGA, Prosense, Teltonika, Gamak and retail brands</li>' +
      '</ul>' +
      '<h2>Why Bizdavar?</h2>' +
      '<p>A combination of digital expertise and B2B industrial supply — one contact for projects in Iran, Turkey and internationally. <a href="/en/pages/portfolio">Portfolio</a> · <a href="/en/pages/contact">Contact</a></p>',

    'website-speed-5-days':
      '<img src="/assets/images/content/fast-speed-banner.svg?v=20260901d" alt="Professional web design speed — Bizdavar" class="article__img" loading="lazy" width="800" height="280">' +
      '<p>A 5-day delivery is only real when content and decisions are ready. This checklist is what the <a href="/en/pages/fast">Fast Web Studio</a> team asks for before starting — so speed, quality and expertise stay aligned.</p>' +
      '<h2>Before day 1 — prepare these</h2>' +
      '<ul>' +
      '<li>Quality logo (SVG or transparent PNG)</li>' +
      '<li>3–5 brand colors or approximate color codes</li>' +
      '<li>Short intro copy + list of services/products</li>' +
      '<li>WhatsApp number, email and social links</li>' +
      '<li>2–3 reference sites whose look you like</li>' +
      '<li>Domain name (or buy directly from <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">Netinode Shop</a> — Bizdavar infrastructure · <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">netinode.net</a>)</li>' +
      '</ul>' +
      '<h2>What happens day by day?</h2>' +
      '<h3>Day 1 — Discovery</h3>' +
      '<p>WhatsApp call, file intake, site goal confirmation (leads, sales, intro). If content is incomplete, the 5-day timer starts when it is complete.</p>' +
      '<h3>Day 2 — Design</h3>' +
      '<p>Page structure and main look. One quick approval round prevents rework.</p>' +
      '<h3>Day 3 — Development</h3>' +
      '<p>Responsive build, forms, WhatsApp, links and baseline speed.</p>' +
      '<h3>Day 4 — Store / content</h3>' +
      '<p>On store plans: products, categories, cart test. On starter: section and image completion.</p>' +
      '<h3>Day 5 — Delivery</h3>' +
      '<p>Short management training, domain/SSL connection and go live.</p>' +
      '<h2>Common mistakes that kill speed</h2>' +
      '<ul>' +
      '<li>Replacing all copy on day 4</li>' +
      '<li>No quality product photos</li>' +
      '<li>Delayed day-2 design approval</li>' +
      '<li>Mid-project feature requests outside the plan (these belong on the <a href="/en/pages/custom-web-app">custom project</a> path)</li>' +
      '</ul>' +
      '<h2>After going live</h2>' +
      '<p>Basic SEO is included in the Pro plan; sustainable growth continues with content, ads and sometimes <a href="/en/pages/services#digital-marketing">digital marketing</a>. Plan guide: <a href="/en/pages/articles/fast-studio">Fast Studio article</a>.</p>',

    'custom-web-app-development':
      '<img src="/assets/images/content/custom-web-app-hero.svg?v=20260901d" alt="Bizdavar custom web and app" class="article__img" loading="lazy" width="800" height="420">' +
      '<p>Bizdavar offers two clear paths for digital presence: <a href="/en/pages/fast">Fast Web Studio</a> for fast launch with fixed pricing, and <a href="/en/pages/custom-web-app">custom web and apps</a> when your business needs logic, user roles or native apps. This guide helps you choose the right path — without wasting budget.</p>' +
      '<h2>Fast is enough if…</h2>' +
      '<ul>' +
      '<li>Your main goal is brand intro, WhatsApp leads or selling a few products</li>' +
      '<li>You want to go live in under a week</li>' +
      '<li>You want fixed pricing and clear plans ($99 / $199 / $299)</li>' +
      '</ul>' +
      '<p>Plan details: <a href="/en/pages/articles/fast-studio">Fast Studio guide</a>.</p>' +
      '<h2>Custom project is needed if…</h2>' +
      '<ul>' +
      '<li>You have admin panels, multi-level roles or workflows</li>' +
      '<li>You need payments, wallets, orders or complex reporting</li>' +
      '<li>You need PWA, mobile apps or API integrations</li>' +
      '<li>You are building complex multilingual, multi-branch or white-label systems</li>' +
      '</ul>' +
      '<h2>How Bizdavar runs custom projects</h2>' +
      '<ol>' +
      '<li><strong>Discovery:</strong> business goals, users and constraints</li>' +
      '<li><strong>Architecture:</strong> pages/modules, data, security and delivery map</li>' +
      '<li><strong>UI design:</strong> mobile-first and professional RTL</li>' +
      '<li><strong>Iterative development:</strong> testable releases with progress reports</li>' +
      '<li><strong>Delivery and support:</strong> training, monitoring and improvement</li>' +
      '</ol>' +
      '<h2>Example domains we have delivered</h2>' +
      '<p>Fintech and exchange, SMM panels, specialty stores, B2B portals and Bizdavar ecosystem products like <a href="/en/pages/fxguard">FXGuard</a>. Broader list in <a href="/en/pages/portfolio">portfolio</a>.</p>' +
      '<h2>Practical recommendation</h2>' +
      '<p>If you do not have a site yet: start with Fast to get sales/leads running, then add custom modules. If you need a system from day one: go directly to <a href="/en/pages/custom-web-app">custom web and apps</a>.</p>'
  };

  var tr = {
    'vega-supply-iran':
      '<img src="/assets/images/vega/slides/value-process-safety.jpg" alt="Endüstriyel ortamda VEGA sensör ve ölçüm cihazları" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>İran\'daki petrol, petrokimya, su ve gıda projeleri güvenilir seviye, basınç ve switch sensörlerine ihtiyaç duyar. Bizdavar Group, Farsça danışmanlık, doğru sipariş kodu ve uluslararası lojistik ile orijinal <a href="/tr/pages/vega">VEGA ürünleri</a> tedarik eder — <strong>İran, Türkiye, Ermenistan ve Dubai</strong> ofisleriyle.</p>' +
      '<h2>1. Neden Bizdavar üzerinden tedarik?</h2>' +
      '<p>Şeffaf tedarik kanalı, net döviz proforması ve projeye kadar koordineli nakliye — belirsiz gri pazar alımları yerine. Çok dilli teknik ekibimiz, süreç için doğru modeli (Ex/SIL ve tank koşulları) seçmenize yardımcı olur.</p>' +
      '<h2>2. Talepten teslimata</h2>' +
      '<ol>' +
      '<li>Süreç, tank ve Ex/SIL koşulları</li>' +
      '<li>Model önerisi (ör. VEGAPULS, VEGABAR, VEGAPOINT) ve sipariş kodu</li>' +
      '<li>Proforma ve teslimat süresi</li>' +
      '<li>Sipariş, nakliye ve montaj desteği</li>' +
      '</ol>' +
      '<p>Satın alma yolu <a href="/tr/pages/products#supply">endüstriyel hizmetler</a> ve <a href="/tr/pages/vega">VEGA kataloğu</a> sayfalarında.</p>' +
      '<h2>3. Tamamlayıcı markalar</h2>' +
      '<p>VEGA\'nın yanı sıra gaz ve alev için <a href="/tr/pages/prosense">Prosense</a>, filo için <a href="/tr/pages/teltonika">Teltonika</a> ve elektrik motoru için <a href="/tr/pages/gamak">Gamak</a> tedarik ediyoruz — B2B projeler için tek iletişim noktası.</p>' +
      '<h2>4. Talebi başlatın</h2>' +
      '<p>Ürün adı, adet ve süreç koşullarını <a href="/tr/pages/contact">iletişim formu</a> veya Türkçe WhatsApp ile gönderin. Mesai saatlerinde yanıt veriyoruz.</p>',

    'multilingual-web-iran-turkey':
      '<img src="/assets/images/brand/bizdavar-logo-square.png" alt="Bizdavar — çok dilli web sitesi fa / tr / en" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Hem <strong>İran</strong> hem <strong>Türkiye</strong> pazarında faaliyet gösteren işletmeler; Farsça RTL, Türkçe/İngilizce LTR, yerel WhatsApp numaraları ve hreflang SEO\'sunu doğru kapsayan bir siteye ihtiyaç duyar. Bizdavar Group bu modeli kendi projelerinde ve müşterilerinde uygular — İran, Türkiye, Ermenistan ve Dubai ofisleriyle.</p>' +
      '<h2>1. URL yapısı ve diller</h2>' +
      '<p>Farsça alan adı kökünde, Türkçe <code>/tr/</code> altında, İngilizce <code>/en/</code> altında — her dil için ayrı hreflang ve canonical etiketleriyle. Bu, duplicate content\'i önler ve Google\'a net GEO sinyali gönderir.</p>' +
      '<h2>2. İçerik ve yerel güven</h2>' +
      '<ul>' +
      '<li>İran ve Türkiye WhatsApp numaraları</li>' +
      '<li>İran, Türkiye, Ermenistan ve Dubai ofis varlığı</li>' +
      '<li>Her pazar için referans projeler ve tanıdık markalar</li>' +
      '<li>Yerel sorgulara yönelik hizmet sayfaları (İstanbul web tasarım, İran endüstriyel tedarik, …)</li>' +
      '</ul>' +
      '<h2>3. Fast Studio ile hızlı teslimat</h2>' +
      '<p>Birkaç günde kurumsal site veya mağaza gerekiyorsa, <a href="/tr/pages/fast">Fast Web Studio</a> RTL destekli ve WhatsApp\'lı sabit planlar sunar. Özel çok dilli projeler için Bizdavar <a href="/tr/pages/services#web-design">web tasarım hizmetleri</a> mevcuttur.</p>' +
      '<h2>4. Sonraki adım</h2>' +
      '<p>Hedef pazarlarınızı (IR / TR / uluslararası), gerekli dilleri ve site türünü <a href="/tr/pages/contact">iletişim formunda</a> yazın; uygun yolu önerelim.</p>',

    'what-is-digital-marketing':
      '<img src="/assets/images/content/network-map.svg" alt="Dijital pazarlama kanal haritası" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Dijital pazarlama; web sitesi, sosyal medya, reklamlar, SEO ve e-posta gibi çevrimiçi kanalları kullanarak kitle çekmek, güven oluşturmak ve satışı artırmak demektir. <a href="/tr/pages/about">Bizdavar Group</a> bu ekseni <a href="/tr/pages/services#digital-marketing">dijital pazarlama hizmetleri</a> ile uyumlu yürütür.</p>' +
      '<h2>1. Ana kanallar</h2>' +
      '<p>SEO, tıklama başına reklam (Google Ads), sosyal ağlar, e-posta pazarlaması ve uzman içerik (blog) en önemli kanallardır.</p>' +
      '<h2>2. Geleneksel pazarlamadan farkı</h2>' +
      '<p>Dijitalde her şey ölçülebilir: CTR, CPA, dönüşüm oranı ve ROI — ve daha hızlı optimize edebilirsiniz.</p>' +
      '<h2>3. Nereden başlamalı?</h2>' +
      '<p>Hedef kitlenizi tanımlayın, rakipleri analiz edin ve profesyonel bir landing veya site kurun — örneğin 5 günde <a href="/tr/pages/fast">Fast Web Studio</a> ile.</p>',

    'digital-marketing':
      '<img src="/assets/images/content/network-map.svg" alt="Dijital pazarlama ağı" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Dijital pazarlama sadece trafik yaratmaz — amaç ziyaretçiyi müşteriye dönüştürmektir. <a href="/tr/pages/about">Bizdavar Group</a> bu yolu veri ve A/B testleriyle ilerletir:</p>' +
      '<h2>1. Net satış hunisi</h2>' +
      '<p>Farkındalıktan satın almaya — her aşamanın kendi içeriği, teklifi ve CTA\'sı olmalıdır.</p>' +
      '<h2>2. Dönüşüm oranı optimizasyonu (CRO)</h2>' +
      '<p>Site hızı, iletişim formları, güven sinyalleri (portfolyo, yorumlar) ve <a href="/tr/pages/fast">landing tasarımı</a> doğrudan satışı etkiler.</p>' +
      '<h2>3. Hedefli reklamcılık</h2>' +
      '<p>Kontrollü bütçeli Google Ads ve Paid Social, ROI raporlamasıyla — detaylar <a href="/tr/pages/services#digital-marketing">dijital pazarlama hizmetlerimizde</a>.</p>' +
      '<h2>4. Otomasyon ve takip</h2>' +
      '<p>E-posta, CRM ve retargeting sıcak lead\'lerin kaybolmasını önler.</p>',

    'social-media-management':
      '<img src="/assets/images/content/network-map.svg" alt="Sosyal medya yönetimi" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>SMM; Instagram, LinkedIn ve diğer ağlarda içerik planlama, görsel tasarım, düzenli yayın ve performans analizi demektir. Örnek uygulama: <a href="/tr/pages/biztejarat">Biztejarat projesi</a>.</p>' +
      '<h2>1. İçerik stratejisi</h2>' +
      '<p>Yayın takvimi, marka tonu ve içerik türleri (eğitici, ürün, social proof) önceden tanımlanmalıdır.</p>' +
      '<h2>2. Tasarım ve video</h2>' +
      '<p>Birleşik görsel kimlikle post, story ve reel — endüstriyel B2B için özellikle önemli.</p>' +
      '<h2>3. Paid Social reklamları</h2>' +
      '<p>Hassas hedef kitle ve landing veya <a href="/tr/pages/contact">iletişim formuna</a> link.</p>',

    'fast-studio':
      '<img src="/assets/images/content/fast-hero.svg?v=20260901d" alt="Fast Web Studio — masaüstü ve mobil mockup" class="article__img" loading="lazy" width="960" height="640">' +
      '<p><a href="/tr/pages/fast">Fast Web Studio</a>, kurumsal veya mağaza sitelerini <strong>sabit fiyat</strong> ve <strong>günlük kilometre taşları</strong> ile teslim etmek için Bizdavar\'ın ürünüdür — $99\'dan $299\'a. Amaç: aylarca belirsiz pazarlık değil, bu hafta yayına çıkmak.</p>' +
      '<h2>Fast işletme için neden önemli?</h2>' +
      '<p>Pek çok ekip "ucuz düşük kaliteli site" ile "aylar süren özel proje" arasında kalır. Fast ikisinin ortasında: profesyonel RTL tasarım, WhatsApp ve lead formları, net 5 günlük yol — mağaza, çok dilli veya <a href="/tr/pages/custom-web-app">özel web ve uygulama</a> yükseltmeleriyle.</p>' +
      '<h2>1. Başlangıç planı ($99)</h2>' +
      '<ul>' +
      '<li>Tek sayfa / şirket tanıtım sitesi</li>' +
      '<li>Mobil uyumlu, iletişim formu, WhatsApp butonu</li>' +
      '<li>Sosyal bağlantılar ve yönetim eğitimi</li>' +
      '</ul>' +
      '<p>Hızlı çevrimiçi varlık gereken startup ve işletmeler için ideal.</p>' +
      '<h2>2. Mağaza planı ($199)</h2>' +
      '<ul>' +
      '<li>Tüm başlangıç özellikleri + WooCommerce</li>' +
      '<li>İlk ürünler, kategoriler ve sepet</li>' +
      '<li>Temel ürün sayfası SEO ve mağaza yönetim eğitimi</li>' +
      '</ul>' +
      '<h2>3. Pro plan ($299)</h2>' +
      '<ul>' +
      '<li>Daha özel UI, 15 sayfaya kadar + blog</li>' +
      '<li>Ödeme geçidi, sohbet/WhatsApp widget, analitik</li>' +
      '<li>Teslimattan sonra 1 ay destek</li>' +
      '</ul>' +
      '<h2>4. 5 günlük yol nasıl işler?</h2>' +
      '<ol>' +
      '<li><strong>Gün 1:</strong> Keşif — logo, renkler, metin ve referanslar</li>' +
      '<li><strong>Gün 2:</strong> Tasarım — kodlamadan önce onay</li>' +
      '<li><strong>Gün 3:</strong> Geliştirme — formlar, WhatsApp, yapı</li>' +
      '<li><strong>Gün 4:</strong> Mağaza/içerik — mağaza planlarında satın alma testi</li>' +
      '<li><strong>Gün 5:</strong> Teslimat — eğitim, domain, yayına alma</li>' +
      '</ol>' +
      '<p>İçerik hazırlığı detayları <a href="/tr/pages/articles/website-speed-5-days">5 günlük site kontrol listesinde</a>.</p>' +
      '<h2>5. Domain, hosting ve SSL</h2>' +
      '<p>Tasarım maliyeti domain/hosting\'den ayrıdır. Domain ve hosting\'i <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">Netinode Shop</a>\'tan alın — Bizdavar\'ın kendi altyapısı. Hizmet özeti: <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">netinode.net</a>.</p>' +
      '<h2>6. Fast mi özel proje mi?</h2>' +
      '<p>Kullanıcı paneli, karmaşık mantık, mobil uygulama veya özel entegrasyonlar gerekiyorsa <a href="/tr/pages/custom-web-app">özel web ve uygulama tasarımı</a> veya <a href="/tr/pages/articles/custom-web-app-development">özel web ve uygulama geliştirme</a> makalesinden başlayın. Aynı Bizdavar ekibi her iki yolu da kapsar.</p>',

    'industrial-sensors':
      '<img src="/assets/images/vega/slides/value-process-safety.jpg" alt="VEGA endüstriyel sensör" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Petrol, petrokimya, su ve gıda projeleri için seviye, basınç veya akış sensörü seçimi teknik danışmanlık gerektirir. Bizdavar <a href="/tr/pages/vega">VEGA</a> ve <a href="/tr/pages/prosense">Prosense</a> tedarikini şeffaf proforma ile sunar.</p>' +
      '<h2>1. Ölçüm türü</h2>' +
      '<p>Radar (VEGAPULS), basınç (VEGABAR), switch (VEGAPOINT) — tank, sıcaklık ve ortama göre.</p>' +
      '<h2>2. Sertifikasyon ve güvenlik</h2>' +
      '<p>Ex ve SIL ortamları için model ve teknik dokümantasyon hassas belirtilmelidir.</p>' +
      '<h2>3. Tedarik yolu</h2>' +
      '<p>Talep → proforma → sipariş → lojistik — detaylar <a href="/tr/pages/products#supply">endüstriyel hizmetlerde</a>.</p>',

    'about-bizdavar-group':
      '<img src="/assets/images/content/about-hero.svg" alt="Bizdavar Group — küresel varlık" class="article__img" loading="lazy" width="768" height="400">' +
      '<p>Bizdavar Group, <strong>Ersan Jahed Tabrizi</strong> tarafından 2013\'ten beri faaliyet gösterir — 11 ülkede 100+ proje.</p>' +
      '<h2>Faaliyet alanları</h2>' +
      '<ul>' +
      '<li>Dijital pazarlama ve SMM</li>' +
      '<li>Web tasarım ve Fast Web Studio</li>' +
      '<li>Dijital ürünler ve endüstriyel tedarik (FXGuard, VEGA, Prosense ve daha fazlası)</li>' +
      '<li>VEGA, Prosense, Teltonika, Gamak ve perakende markaları tedariki</li>' +
      '</ul>' +
      '<h2>Neden Bizdavar?</h2>' +
      '<p>Dijital uzmanlık ve B2B endüstriyel tedarik birleşimi — İran, Türkiye ve uluslararası projeler için tek iletişim noktası. <a href="/tr/pages/portfolio">Portfolyo</a> · <a href="/tr/pages/contact">İletişim</a></p>',

    'website-speed-5-days':
      '<img src="/assets/images/content/fast-speed-banner.svg?v=20260901d" alt="Profesyonel web tasarım hızı — Bizdavar" class="article__img" loading="lazy" width="800" height="280">' +
      '<p>5 günlük teslimat yalnızca içerik ve kararlar hazır olduğunda gerçektir. Bu kontrol listesi, <a href="/tr/pages/fast">Fast Web Studio</a> ekibinin başlamadan önce istediği şeylerdir — hız, kalite ve uzmanlık bir arada kalsın diye.</p>' +
      '<h2>1. günden önce — bunları hazırlayın</h2>' +
      '<ul>' +
      '<li>Kaliteli logo (SVG veya şeffaf PNG)</li>' +
      '<li>3–5 marka rengi veya yaklaşık renk kodları</li>' +
      '<li>Kısa tanıtım metni + hizmet/ürün listesi</li>' +
      '<li>WhatsApp numarası, e-posta ve sosyal bağlantılar</li>' +
      '<li>Beğendiğiniz görünüme sahip 2–3 referans site</li>' +
      '<li>Domain adı (veya doğrudan <a href="https://shop.netinode.net/" target="_blank" rel="noopener noreferrer">Netinode Shop</a>\'tan alın — Bizdavar altyapısı · <a href="https://netinode.net/" target="_blank" rel="noopener noreferrer">netinode.net</a>)</li>' +
      '</ul>' +
      '<h2>Gün gün ne olur?</h2>' +
      '<h3>Gün 1 — Keşif</h3>' +
      '<p>WhatsApp görüşmesi, dosya alımı, site hedefi onayı (lead, satış, tanıtım). İçerik eksikse 5 günlük süre tamamlandığında başlar.</p>' +
      '<h3>Gün 2 — Tasarım</h3>' +
      '<p>Sayfa yapısı ve ana görünüm. Hızlı bir onay turu yeniden işi önler.</p>' +
      '<h3>Gün 3 — Geliştirme</h3>' +
      '<p>Responsive uygulama, formlar, WhatsApp, bağlantılar ve temel hız.</p>' +
      '<h3>Gün 4 — Mağaza / içerik</h3>' +
      '<p>Mağaza planlarında: ürün, kategori, sepet testi. Başlangıç planında: bölüm ve görsel tamamlama.</p>' +
      '<h3>Gün 5 — Teslimat</h3>' +
      '<p>Kısa yönetim eğitimi, domain/SSL bağlantısı ve yayına alma.</p>' +
      '<h2>Hızı öldüren yaygın hatalar</h2>' +
      '<ul>' +
      '<li>4. günde tüm metni değiştirmek</li>' +
      '<li>Kaliteli ürün fotoğrafı olmaması</li>' +
      '<li>2. gün tasarım onayının gecikmesi</li>' +
      '<li>Plan dışı özellik talepleri (bunlar <a href="/tr/pages/custom-web-app">özel proje</a> yoluna aittir)</li>' +
      '</ul>' +
      '<h2>Yayına aldıktan sonra</h2>' +
      '<p>Pro planda temel SEO vardır; sürdürülebilir büyüme içerik, reklam ve bazen <a href="/tr/pages/services#digital-marketing">dijital pazarlama</a> ile devam eder. Plan rehberi: <a href="/tr/pages/articles/fast-studio">Fast Studio makalesi</a>.</p>',

    'custom-web-app-development':
      '<img src="/assets/images/content/custom-web-app-hero.svg?v=20260901d" alt="Bizdavar özel web ve uygulama" class="article__img" loading="lazy" width="800" height="420">' +
      '<p>Bizdavar dijital varlık için iki net yol sunar: sabit fiyatlı hızlı lansman için <a href="/tr/pages/fast">Fast Web Studio</a> ve iş mantığı, kullanıcı rolleri veya uygulama gerektiğinde <a href="/tr/pages/custom-web-app">özel web ve uygulama</a>. Bu rehber doğru yolu seçmenize yardımcı olur — bütçe israfı olmadan.</p>' +
      '<h2>Fast yeterli ise…</h2>' +
      '<ul>' +
      '<li>Ana hedef marka tanıtımı, WhatsApp lead veya birkaç ürün satışıysa</li>' +
      '<li>Bir haftadan kısa sürede yayına çıkmak istiyorsanız</li>' +
      '<li>Sabit fiyat ve net plan istiyorsanız ($99 / $199 / $299)</li>' +
      '</ul>' +
      '<p>Plan detayları: <a href="/tr/pages/articles/fast-studio">Fast Studio rehberi</a>.</p>' +
      '<h2>Özel proje gerekli ise…</h2>' +
      '<ul>' +
      '<li>Admin paneli, çok seviyeli roller veya iş akışlarınız varsa</li>' +
      '<li>Ödeme, cüzdan, sipariş veya karmaşık raporlama istiyorsanız</li>' +
      '<li>PWA, mobil uygulama veya API entegrasyonlarına ihtiyacınız varsa</li>' +
      '<li>Karmaşık çok dilli, çok şubeli veya white-label sistem kuruyorsanız</li>' +
      '</ul>' +
      '<h2>Bizdavar özel projeyi nasıl yürütür?</h2>' +
      '<ol>' +
      '<li><strong>Keşif:</strong> iş hedefleri, kullanıcılar ve kısıtlar</li>' +
      '<li><strong>Mimari:</strong> sayfa/modül, veri, güvenlik ve teslimat haritası</li>' +
      '<li><strong>UI tasarımı:</strong> mobil öncelikli ve profesyonel RTL</li>' +
      '<li><strong>Yinelemeli geliştirme:</strong> ilerleme raporlu test edilebilir sürümler</li>' +
      '<li><strong>Teslimat ve destek:</strong> eğitim, izleme ve iyileştirme</li>' +
      '</ol>' +
      '<h2>Teslim ettiğimiz örnek alanlar</h2>' +
      '<p>Fintech ve döviz, SMM panelleri, özel mağazalar, B2B portallar ve <a href="/tr/pages/fxguard">FXGuard</a> gibi Bizdavar ekosistem ürünleri. Geniş liste <a href="/tr/pages/portfolio">portfolyoda</a>.</p>' +
      '<h2>Pratik öneri</h2>' +
      '<p>Henüz siteniz yoksa: satış/lead için Fast ile başlayın, sonra özel modüller ekleyin. İlk günden sistem istiyorsanız: doğrudan <a href="/tr/pages/custom-web-app">özel web ve uygulama</a> sayfasına gidin.</p>'
  };

  function localeBodies(src, prefix) {
    var out = {};
    Object.keys(src).forEach(function (slug) {
      out[slug] = src[slug].replace(/\/en\/pages\//g, prefix + '/pages/');
    });
    return out;
  }

  window.BIZDAVAR_ARTICLE_BODIES = {
    en: en,
    tr: tr,
    ru: localeBodies(en, '/ru'),
    ar: localeBodies(en, '/ar')
  };
})();
