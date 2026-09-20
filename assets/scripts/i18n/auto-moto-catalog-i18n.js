/**
 * Motorcycle shop catalog chrome — en / tr / ru / ar
 */
(function () {
  function catalog(c) {
    return {
      brand: {
        heroEyebrow: c.heroEyebrow,
        heroHeadline: c.heroHeadline,
        heroHeadlineSub: c.heroHeadlineSub,
        since: c.since,
        origin: c.origin,
        logoAlt: c.logoAlt,
        heroImageAlt: c.heroImageAlt,
        description: c.description,
        tagline: c.tagline,
        heroStats: c.heroStats
      },
      trustSignals: c.trustSignals,
      whyBuyFromUs: c.whyBuyFromUs,
      purchaseSteps: c.purchaseSteps,
      quoteChecklist: c.quoteChecklist,
      faq: c.faq,
      inquiryTemplate: c.inquiryTemplate,
      quickSeries: c.quickSeries,
      highlights: c.highlights,
      iranIndustries: c.iranIndustries,
      services: c.services
    };
  }

  const en = catalog({
    heroEyebrow: 'Motorcycle gear shop',
    heroHeadline: 'Helmets, jackets, boots and riding gear',
    heroHeadlineSub: 'Helmets, intercoms, jackets, gloves, pants, boots and armour',
    since: 'Priced in US dollars, for delivery in Iran',
    origin: 'Sourced from Turkey and Europe',
    logoAlt: 'Bizdavar motorcycle shop logo',
    heroImageAlt: 'Motorcycle helmet, jacket and boots in the Bizdavar catalog',
    description: 'Helmets, jackets, gloves, pants, boots, intercoms and armour for riders. The price on the card is in US dollars, for delivery in Iran. If a product has no price, we quote on request.',
    tagline: 'Motorcycle gear',
    heroStats: [
      { label: 'Products in the catalog' },
      { label: 'Iran delivery' },
      { label: 'Motorcycle categories' }
    ],
    trustSignals: [
      { label: 'US dollars, Iran delivery', desc: 'The amount on the card is for delivery in Iran. No price means quote only.' },
      { label: 'Postage after the order', desc: 'Shipping is calculated after weight, volume and destination.' },
      { label: 'WhatsApp consulting', desc: 'Send a clothing size or SKU on WhatsApp.' },
      { label: 'Single and bulk orders', desc: 'Personal use, workshops and motorcycle shops.' }
    ],
    whyBuyFromUs: [
      { title: 'Proforma before payment', desc: 'Stock and the daily price are quoted. Nothing is invented on the card. The final amount is on the proforma.' },
      { title: 'Postage separate from goods', desc: 'Shipping and insurance are confirmed after the weight is known.' },
      { title: 'Full motorcycle catalog', desc: 'Helmets, jackets, gloves, pants, boots, intercoms and armour — one contact.' },
      { title: 'Quote with a size', desc: 'Send size, height and weight so we can suggest the right model.' }
    ],
    purchaseSteps: [
      { num: '1', title: 'Pick a product', desc: 'Open a category or search by name, brand or SKU' },
      { num: '2', title: 'Confirm stock', desc: 'We check live availability' },
      { num: '3', title: 'Proforma', desc: 'Goods amount plus postage after weight and destination' },
      { num: '4', title: 'Pay and supply', desc: 'Supply from Turkey or Europe starts after you confirm' },
      { num: '5', title: 'Ship', desc: 'Postage is calculated after the order' }
    ],
    quoteChecklist: {
      title: 'Send these for an accurate quote',
      desc: 'The more precise the details, the faster the proforma.',
      items: [
        'Product name or SKU (for example BDV-AM-5860)',
        'For riding apparel: size, height and weight',
        'Preferred colour if several colours exist',
        'Quantity and delivery city or country'
      ],
      tip: 'If there is no card price, goods and postage appear on the proforma after inquiry.'
    },
    faq: [
      { q: 'Is the card price final?', a: 'The card price is for delivery in Iran. The final amount and postage are confirmed on the proforma. No price means quote only.' },
      { q: 'Is shipping included?', a: 'No. Postage, insurance and clearance are confirmed after weight, volume and destination.' },
      { q: 'What do you need for apparel?', a: 'Send size, height and weight. If you are between sizes, write on WhatsApp.' },
      { q: 'How do I choose size and colour?', a: 'Open the product page. If you are between sizes, send height and weight on WhatsApp.' },
      { q: 'Is there a minimum order?', a: 'Single orders are fine. Workshops and shops get a better proforma at higher quantities.' }
    ],
    inquiryTemplate: 'Hello, motorcycle gear quote from Bizdavar — {product}\n\nQuantity:\nClothing size:\nDelivery city / country:\n',
    quickSeries: [
      { name: 'Helmets', hint: 'Full-face · modular · MX', tag: 'ECE' },
      { name: 'Jackets', hint: 'Leather · textile · rain', tag: 'CE' },
      { name: 'Boots', hint: 'Summer · Gore-Tex · women', tag: 'Boots' },
      { name: 'Gloves', hint: 'Summer · leather · Gore-Tex', tag: 'Gloves' },
      { name: 'Intercom', hint: 'Unit · accessory · camera', tag: 'BT' },
      { name: 'Protection', hint: 'Back · knee · airbag', tag: 'CE' }
    ],
    highlights: [
      { title: 'Urban full-face helmet ECE 22.06', desc: 'Full-face helmet for city and road — send your size on WhatsApp', badge: 'Best seller' },
      { title: 'Four-season leather CE jacket', desc: 'Shoulder and elbow armour — send your size on WhatsApp', badge: 'Best seller' },
      { title: 'Single Bluetooth intercom', desc: 'Calls, music and waterproof — fits a standard helmet', badge: 'Intercom' }
    ],
    iranIndustries: [
      { name: 'Motorcycle shops and clubs', desc: 'Helmets, jackets, gloves and boots for a motorcycle shop — sizing and live stock.', models: 'Helmets · apparel · boots' },
      { name: 'City and road riders', desc: 'Full-face helmets, three-season jackets and touring boots for daily riding.', models: 'Helmets · jackets · boots' },
      { name: 'Off-road and motocross', desc: 'Jerseys, goggles, boots and armour for MX and off-road.', models: 'Jersey · goggles · boots' },
      { name: 'Personal orders', desc: 'One helmet, one jacket or one pair of gloves — WhatsApp consulting, shipping after the order.', models: 'Single · personal size' }
    ],
    services: [
      { title: 'Product consulting', desc: 'Helmet, jacket and boots in your size' },
      { title: 'Riding-gear sizes', desc: 'Helmet, jacket, gloves and boots' },
      { title: 'USD proforma', desc: 'Goods price plus postage notice' },
      { title: 'Postage after the order', desc: 'Weight, volume and destination' },
      { title: 'Bulk orders', desc: 'Workshops and motorcycle shops' },
      { title: 'Multilingual support', desc: 'WhatsApp and the contact form' }
    ]
  });

  const tr = catalog({
    heroEyebrow: 'Motosiklet ekipmanı mağazası',
    heroHeadline: 'Kask, mont, bot ve sürüş ekipmanı',
    heroHeadlineSub: 'Kask, interkom, mont, eldiven, pantolon, bot ve koruma',
    since: 'Karttaki fiyat ABD doları, İran teslimi',
    origin: 'Türkiye ve Avrupa tedariki',
    logoAlt: 'Bizdavar motosiklet mağazası logosu',
    heroImageAlt: 'Motosiklet kaskı, mont ve bot — Bizdavar kataloğu',
    description: 'Kask, mont, eldiven, pantolon, bot, interkom ve koruma. Karttaki fiyat ABD dolarıdır ve İran teslimi içindir. Fiyat yoksa ürün yalnızca teklifle satılır.',
    tagline: 'Motosiklet ekipmanı',
    heroStats: [
      { label: 'Katalogdaki ürün' },
      { label: 'İran teslim' },
      { label: 'Motosiklet kategorisi' }
    ],
    trustSignals: [
      { label: 'ABD doları, İran teslimi', desc: 'Karttaki tutar İran teslimi içindir. Fiyat yoksa yalnızca teklif alınır.' },
      { label: 'Kargo siparişten sonra', desc: 'Kargo ağırlık, hacim ve varışa göre hesaplanır.' },
      { label: 'WhatsApp danışmanlığı', desc: 'Bedeninizi veya SKU’yu WhatsApp’tan gönderin.' },
      { label: 'Tekil ve toptan', desc: 'Bireysel kullanım, servis ve motosiklet dükkânı.' }
    ],
    whyBuyFromUs: [
      { title: 'Ödemeden önce proforma', desc: 'Stok ve güncel fiyat yazılır. Kartta tutar uydurulmaz. Nihai tutar proformadadır.' },
      { title: 'Kargo üründen ayrı', desc: 'Kargo ve sigorta, ağırlık belli olunca netleşir.' },
      { title: 'Tam motosiklet kataloğu', desc: 'Kask, mont, eldiven, pantolon, bot, interkom ve koruma — tek iletişim hattı.' },
      { title: 'Bedenle teklif', desc: 'Beden, boy ve kiloyu gönderin; doğru modeli önerelim.' }
    ],
    purchaseSteps: [
      { num: '1', title: 'Ürün seçin', desc: 'Kategoriyi açın veya ad, marka, SKU ile arayın' },
      { num: '2', title: 'Stok onayı', desc: 'Güncel stoğu kontrol ederiz' },
      { num: '3', title: 'Proforma', desc: 'Ürün tutarı + ağırlık ve varış sonrası kargo' },
      { num: '4', title: 'Ödeme ve tedarik', desc: 'Onaydan sonra Türkiye veya Avrupa tedariki başlar' },
      { num: '5', title: 'Sevkiyat', desc: 'Kargo siparişten sonra hesaplanır' }
    ],
    quoteChecklist: {
      title: 'Net teklif için bunları gönderin',
      desc: 'Ayrıntı ne kadar netse proforma o kadar çabuk çıkar.',
      items: [
        'Ürün adı veya SKU (örneğin BDV-AM-5860)',
        'Motosiklet giyimi için: beden, boy ve kilo',
        'Birden fazla renk varsa tercih ettiğiniz renk',
        'Adet ve teslimat şehri veya ülkesi'
      ],
      tip: 'Kartta fiyat yoksa ürün ve kargo tutarı, tekliften sonra proformada yazar.'
    },
    faq: [
      { q: 'Kart fiyatı nihai mi?', a: 'Karttaki fiyat İran teslimi içindir. Nihai tutar ve kargo proformada netleşir. Fiyat yoksa yalnızca teklif alınır.' },
      { q: 'Kargo fiyata dahil mi?', a: 'Hayır. Kargo, sigorta ve gümrük; ağırlık, hacim ve varış belli olunca netleşir.' },
      { q: 'Giyim için ne gerekir?', a: 'Beden, boy ve kilo gönderin. İki beden arasındaysanız WhatsApp’tan yazın.' },
      { q: 'Beden ve rengi nasıl seçerim?', a: 'Ürün sayfasını açın. İki beden arasındaysanız boy ve kiloyu WhatsApp’tan yazın.' },
      { q: 'Asgari sipariş var mı?', a: 'Tekil sipariş mümkün. Servis ve dükkân için yüksek adet daha avantajlı proforma verir.' }
    ],
    inquiryTemplate: 'Merhaba, Bizdavar motosiklet ekipmanı teklifi — {product}\n\nAdet:\nGiyim bedeni:\nTeslimat şehri / ülkesi:\n',
    quickSeries: [
      { name: 'Kask', hint: 'Kapalı · çene açılır · motocross', tag: 'ECE' },
      { name: 'Mont', hint: 'Deri · kumaş · yağmurluk', tag: 'CE' },
      { name: 'Bot', hint: 'Yazlık · Gore-Tex · kadın', tag: 'Bot' },
      { name: 'Eldiven', hint: 'Yazlık · deri · Gore-Tex', tag: 'Eldiven' },
      { name: 'Interkom', hint: 'Cihaz · aksesuar · kamera', tag: 'BT' },
      { name: 'Koruma', hint: 'Sırt · diz · airbag', tag: 'CE' }
    ],
    highlights: [
      { title: 'Şehir tam yüz kaskı ECE 22.06', desc: 'Şehir ve yol için kapalı kask — bedeninizi WhatsApp’tan gönderin', badge: 'Çok satan' },
      { title: 'Dört mevsim deri CE mont', desc: 'Omuz ve dirsek koruması — bedeninizi WhatsApp’tan gönderin', badge: 'Çok satan' },
      { title: 'Tekli Bluetooth interkom', desc: 'Arama, müzik ve suya dayanıklı — standart kaska takılır', badge: 'Interkom' }
    ],
    iranIndustries: [
      { name: 'Motosiklet dükkânı ve kulüp', desc: 'Dükkân için kask, mont, eldiven ve bot — beden ve güncel stok.', models: 'Kask · giyim · bot' },
      { name: 'Şehir ve yol sürücüsü', desc: 'Günlük kullanım için kapalı kask, üç mevsim mont ve touring bot.', models: 'Kask · mont · bot' },
      { name: 'Off-road ve motocross', desc: 'MX ve off-road için forma, gözlük, bot ve koruma.', models: 'Forma · gözlük · bot' },
      { name: 'Bireysel sipariş', desc: 'Bir kask, bir mont veya bir çift eldiven — WhatsApp danışmanlığı, kargo siparişten sonra.', models: 'Tekil · kişisel beden' }
    ],
    services: [
      { title: 'Ürün danışmanlığı', desc: 'Kask, mont ve bot sizin bedeninizde' },
      { title: 'Ekipman bedeni', desc: 'Kask, mont, eldiven ve bot' },
      { title: 'Dolar proforma', desc: 'Ürün tutarı + kargo bildirimi' },
      { title: 'Kargo siparişten sonra', desc: 'Ağırlık, hacim ve varış' },
      { title: 'Toptan sipariş', desc: 'Servis ve motosiklet dükkânı' },
      { title: 'Türkçe destek', desc: 'WhatsApp ve iletişim formu' }
    ]
  });

  const ru = catalog({
    heroEyebrow: 'Магазин мотоэкипировки',
    heroHeadline: 'Шлемы, куртки, мотоботы и экипировка',
    heroHeadlineSub: 'Шлемы, интерком, куртки, перчатки, брюки, мотоботы и защита',
    since: 'Цена в долларах США, доставка в Иран',
    origin: 'Поставка из Турции и Европы',
    logoAlt: 'Логотип мотомагазина Bizdavar',
    heroImageAlt: 'Мотошлем, куртка и мотоботы в каталоге Bizdavar',
    description: 'Шлемы, куртки, перчатки, брюки, мотоботы, интерком и защита. Цена на карточке — в долларах США, с доставкой в Иран. Если цены нет, товар только по запросу.',
    tagline: 'Мотоэкипировка',
    heroStats: [
      { label: 'Товаров в каталоге' },
      { label: 'Доставка в Иран' },
      { label: 'Мотокатегории' }
    ],
    trustSignals: [
      { label: 'Доллары США, доставка в Иран', desc: 'Сумма на карточке — с доставкой в Иран. Нет цены — только запрос.' },
      { label: 'Почта после заказа', desc: 'Доставка считается после веса, объёма и пункта назначения.' },
      { label: 'Консультация в WhatsApp', desc: 'Пришлите размер одежды или артикул в WhatsApp.' },
      { label: 'Розница и опт', desc: 'Лично, мастерская и мотомагазин.' }
    ],
    whyBuyFromUs: [
      { title: 'Проформа до оплаты', desc: 'Наличие и дневная цена указываются в запросе. На карточке ничего не придумывается. Итог — в проформе.' },
      { title: 'Почта отдельно от товара', desc: 'Доставка и страховка подтверждаются после веса.' },
      { title: 'Полный мотокаталог', desc: 'Шлемы, куртки, перчатки, брюки, мотоботы, интерком и защита — один контакт.' },
      { title: 'Запрос с размером', desc: 'Пришлите размер, рост и вес — подскажем модель.' }
    ],
    purchaseSteps: [
      { num: '1', title: 'Выберите товар', desc: 'Откройте категорию или ищите по названию, бренду, артикулу' },
      { num: '2', title: 'Наличие', desc: 'Проверяем текущий склад' },
      { num: '3', title: 'Проформа', desc: 'Сумма товара плюс почта после веса и пункта назначения' },
      { num: '4', title: 'Оплата и поставка', desc: 'После подтверждения поставка из Турции или Европы' },
      { num: '5', title: 'Отправка', desc: 'Почта считается после заказа' }
    ],
    quoteChecklist: {
      title: 'Для точной цены пришлите это',
      desc: 'Чем точнее данные, тем быстрее проформа.',
      items: [
        'Название или артикул (например BDV-AM-5860)',
        'Для мотоодежды: размер, рост и вес',
        'Цвет, если вариантов несколько',
        'Количество и город или страна доставки'
      ],
      tip: 'Если на карточке нет цены, товар и почта появятся в проформе после запроса.'
    },
    faq: [
      { q: 'Цена на карточке окончательная?', a: 'Цена на карточке — с доставкой в Иран. Итог и почта подтверждаются в проформе. Нет цены — только запрос.' },
      { q: 'Доставка входит в цену?', a: 'Нет. Почта, страховка и таможенное оформление подтверждаются после веса, объёма и пункта назначения.' },
      { q: 'Что нужно для одежды?', a: 'Пришлите размер, рост и вес. Если вы между размерами — напишите в WhatsApp.' },
      { q: 'Как выбрать размер и цвет?', a: 'Откройте карточку товара. Если вы между размерами, пришлите рост и вес в WhatsApp.' },
      { q: 'Есть ли минимум заказа?', a: 'Можно заказать одну вещь. Для мастерских и магазинов большее количество даёт выгоднее проформу.' }
    ],
    inquiryTemplate: 'Здравствуйте, запрос мотоэкипировки Bizdavar — {product}\n\nКоличество:\nРазмер одежды:\nГород / страна доставки:\n',
    quickSeries: [
      { name: 'Шлемы', hint: 'Интеграл · модуляр · мотокросс', tag: 'ECE' },
      { name: 'Куртки', hint: 'Кожа · текстиль · дождевик', tag: 'CE' },
      { name: 'Мотоботы', hint: 'Лето · Gore-Tex · женские', tag: 'Мотоботы' },
      { name: 'Перчатки', hint: 'Лето · кожа · Gore-Tex', tag: 'Перчатки' },
      { name: 'Интерком', hint: 'Блок · аксессуар · камера', tag: 'BT' },
      { name: 'Защита', hint: 'Спина · колени · подушка', tag: 'CE' }
    ],
    highlights: [
      { title: 'Городской интеграл ECE 22.06', desc: 'Закрытый шлем для города и трассы — пришлите размер в WhatsApp', badge: 'Хит' },
      { title: 'Кожаная куртка CE на сезон', desc: 'Защита плеч и локтей — пришлите размер в WhatsApp', badge: 'Хит' },
      { title: 'Одиночный Bluetooth-интерком', desc: 'Звонки, музыка и защита от воды — на стандартный шлем', badge: 'Интерком' }
    ],
    iranIndustries: [
      { name: 'Мотомагазины и клубы', desc: 'Шлемы, куртки, перчатки и мотоботы для магазина — размеры и наличие.', models: 'Шлемы · одежда · мотоботы' },
      { name: 'Город и трасса', desc: 'Интеграл, трёхсезонная куртка и туристические мотоботы на каждый день.', models: 'Шлемы · куртки · мотоботы' },
      { name: 'Оффроуд и мотокросс', desc: 'Джерси, очки, мотоботы и защита для MX и эндуро.', models: 'Джерси · очки · мотоботы' },
      { name: 'Личный заказ', desc: 'Один шлем, одна куртка или одна пара перчаток — консультация в WhatsApp, отправка после заказа.', models: 'Одна вещь · свой размер' }
    ],
    services: [
      { title: 'Подбор товара', desc: 'Шлем, куртка и мотоботы вашего размера' },
      { title: 'Размеры экипировки', desc: 'Шлем, куртка, перчатки и мотоботы' },
      { title: 'Проформа в долларах', desc: 'Цена товара плюс уведомление о почте' },
      { title: 'Почта после заказа', desc: 'Вес, объём и пункт назначения' },
      { title: 'Оптовый заказ', desc: 'Мастерские и мотомагазины' },
      { title: 'Поддержка', desc: 'WhatsApp и форма контакта' }
    ]
  });

  const ar = catalog({
    heroEyebrow: 'متجر معدات الدراجات النارية',
    heroHeadline: 'خوذات وسترات وبوت ومعدات الركوب',
    heroHeadlineSub: 'خوذات وإنتركم وسترات وقفازات وبناطيل وبوت وحماية',
    since: 'السعر بالدولار الأمريكي لتسليم إيران',
    origin: 'توريد من تركيا وأوروبا',
    logoAlt: 'شعار متجر الدراجات النارية في بيزدوار',
    heroImageAlt: 'خوذة وسترة وبوت دراجة نارية في كتالوج بيزدوار',
    description: 'خوذات وسترات وقفازات وبناطيل وبوت وإنتركم وحماية للراكبين. السعر على البطاقة بالدولار الأمريكي لتسليم إيران. إن لم يوجد سعر فالاستعلام فقط.',
    tagline: 'معدات الدراجات النارية',
    heroStats: [
      { label: 'منتجات في الكتالوج' },
      { label: 'تسليم إيران' },
      { label: 'فئات الدراجة النارية' }
    ],
    trustSignals: [
      { label: 'دولار أمريكي، تسليم إيران', desc: 'المبلغ على البطاقة لتسليم إيران. بلا سعر يعني استعلام فقط.' },
      { label: 'الشحن بعد الطلب', desc: 'يُحسب الشحن بعد الوزن والحجم والوجهة.' },
      { label: 'استشارة واتساب', desc: 'أرسلوا المقاس أو رمز SKU عبر واتساب.' },
      { label: 'قطعي وجملة', desc: 'استخدام شخصي وورش ومتاجر دراجات نارية.' }
    ],
    whyBuyFromUs: [
      { title: 'فاتورة مبدئية قبل الدفع', desc: 'التوفر والسعر اليومي يُذكران في الاستعلام. لا يُختلق مبلغ على البطاقة. المبلغ النهائي في الفاتورة المبدئية.' },
      { title: 'الشحن منفصل عن السلعة', desc: 'الشحن والتأمين يُؤكدان بعد معرفة الوزن.' },
      { title: 'كتالوج كامل للدراجات النارية', desc: 'خوذات وسترات وقفازات وبناطيل وبوت وإنتركم وحماية — جهة اتصال واحدة.' },
      { title: 'استعلام بالمقاس', desc: 'أرسلوا المقاس والطول والوزن لنقترح الموديل المناسب.' }
    ],
    purchaseSteps: [
      { num: '1', title: 'اختاروا المنتج', desc: 'افتحوا الفئة أو ابحثوا بالاسم أو العلامة أو SKU' },
      { num: '2', title: 'تأكيد التوفر', desc: 'نتحقق من المخزون الحالي' },
      { num: '3', title: 'فاتورة مبدئية', desc: 'مبلغ السلعة مع الشحن بعد الوزن والوجهة' },
      { num: '4', title: 'الدفع والتوريد', desc: 'بعد التأكيد يبدأ التوريد من تركيا أو أوروبا' },
      { num: '5', title: 'الإرسال', desc: 'يُحسب الشحن بعد الطلب' }
    ],
    quoteChecklist: {
      title: 'أرسلوا هذا لاستعلام دقيق',
      desc: 'كلّما كانت التفاصيل أوضح خرجت الفاتورة المبدئية أسرع.',
      items: [
        'اسم المنتج أو رمز SKU (مثلاً BDV-AM-5860)',
        'للملابس: المقاس والطول والوزن',
        'اللون المفضّل إن تعددت الألوان',
        'الكمية ومدينة أو بلد التسليم'
      ],
      tip: 'إن لم يوجد سعر على البطاقة يظهر مبلغ السلعة والشحن في الفاتورة المبدئية بعد الاستعلام.'
    },
    faq: [
      { q: 'هل سعر البطاقة نهائي؟', a: 'السعر على البطاقة لتسليم إيران. المبلغ النهائي والشحن يُؤكدان في الفاتورة المبدئية. بلا سعر يعني استعلام فقط.' },
      { q: 'هل الشحن داخل السعر؟', a: 'لا. الشحن والتأمين والتخليص تُؤكد بعد الوزن والحجم والوجهة.' },
      { q: 'ماذا يلزم للملابس؟', a: 'أرسلوا المقاس والطول والوزن. إن كنتم بين مقاسين فاكتبوا عبر واتساب.' },
      { q: 'كيف نختار المقاس واللون؟', a: 'افتحوا صفحة المنتج. إن كنتم بين مقاسين أرسلوا الطول والوزن عبر واتساب.' },
      { q: 'هل يوجد حد أدنى للطلب؟', a: 'الطلب الفردي ممكن. للورش والمتاجر الكمية الأعلى تعطي فاتورة مبدئية أفضل.' }
    ],
    inquiryTemplate: 'مرحباً، استعلام معدات دراجات نارية من بيزدوار — {product}\n\nالكمية:\nمقاس الملابس:\nمدينة / بلد التسليم:\n',
    quickSeries: [
      { name: 'خوذات', hint: 'وجه كامل · فك متحرك · موتوكروس', tag: 'ECE' },
      { name: 'سترات', hint: 'جلد · قماش · مطر', tag: 'CE' },
      { name: 'بوت', hint: 'صيفي · Gore-Tex · نسائي', tag: 'بوت' },
      { name: 'قفازات', hint: 'صيفي · جلد · Gore-Tex', tag: 'قفازات' },
      { name: 'إنتركم', hint: 'جهاز · ملحق · كاميرا', tag: 'BT' },
      { name: 'حماية', hint: 'ظهر · ركبة · وسادة هوائية', tag: 'CE' }
    ],
    highlights: [
      { title: 'خوذة وجه كامل حضرية ECE 22.06', desc: 'خوذة مغلقة للمدينة والطريق — أرسلوا المقاس عبر واتساب', badge: 'الأكثر مبيعاً' },
      { title: 'سترة جلد CE لأربعة فصول', desc: 'حماية للكتف والمرفق — أرسلوا المقاس عبر واتساب', badge: 'الأكثر مبيعاً' },
      { title: 'إنتركم بلوتوث لشخص واحد', desc: 'مكالمات وموسيقى ومقاوم للماء — يُركَّب على خوذة قياسية', badge: 'إنتركم' }
    ],
    iranIndustries: [
      { name: 'متاجر ونوادي الدراجات النارية', desc: 'خوذات وسترات وقفازات وبوت للمتجر — المقاسات والتوفر اليومي.', models: 'خوذات · ملابس · بوت' },
      { name: 'راكبو المدينة والطريق', desc: 'خوذة وجه كامل وسترة لثلاثة فصول وبوت تورينغ للاستخدام اليومي.', models: 'خوذات · سترات · بوت' },
      { name: 'أوف رود وموتوكروس', desc: 'جيرسي ونظارات وبوت وحماية للموتوكروس والأوف رود.', models: 'جيرسي · نظارات · بوت' },
      { name: 'طلب شخصي', desc: 'خوذة واحدة أو سترة أو زوج قفازات — استشارة واتساب والشحن بعد الطلب.', models: 'قطعة واحدة · مقاس شخصي' }
    ],
    services: [
      { title: 'استشارة اختيار المنتج', desc: 'خوذة وسترة وبوت بمقاسكم' },
      { title: 'مقاسات المعدات', desc: 'خوذة وسترة وقفازات وبوت' },
      { title: 'فاتورة مبدئية بالدولار', desc: 'سعر السلعة مع إعلان الشحن' },
      { title: 'الشحن بعد الطلب', desc: 'الوزن والحجم والوجهة' },
      { title: 'طلب جملة', desc: 'ورش ومتاجر دراجات نارية' },
      { title: 'دعم بالعربية', desc: 'واتساب ونموذج الاتصال' }
    ]
  });

  if (window.BIZDAVAR_LOCALES) {
    if (window.BIZDAVAR_LOCALES.en) window.BIZDAVAR_LOCALES.en.autoMotoCatalog = en;
    if (window.BIZDAVAR_LOCALES.tr) window.BIZDAVAR_LOCALES.tr.autoMotoCatalog = tr;
    if (window.BIZDAVAR_LOCALES.ru) window.BIZDAVAR_LOCALES.ru.autoMotoCatalog = ru;
    if (window.BIZDAVAR_LOCALES.ar) window.BIZDAVAR_LOCALES.ar.autoMotoCatalog = ar;
  }
})();
