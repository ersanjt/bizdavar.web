/**
 * Auto-Moto catalog chrome — en / tr / ru / ar
 */
(function () {
  const en = {
    brand: {
      heroEyebrow: 'Motorcycle gear shop',
      heroHeadline: 'Helmets, jackets, boots and riding gear',
      heroHeadlineSub: 'Helmets, intercoms, jackets, gloves, pants, boots and protection',
      since: 'Iran-delivery USD',
      origin: 'Sourced from Turkey and Europe',
      logoAlt: 'Bizdavar Auto-Moto — motorcycle gear',
      heroImageAlt: 'Motorcycle helmet, jacket and boots — Bizdavar Auto-Moto catalog',
      description: 'Bizdavar supplies motorcycle gear. Card prices are Iran-delivery USD: listing TRY ÷ 48 plus 20%. Lira is not shown. If there is no price, request a quote.',
      heroStats: [
        { label: 'Products in catalog' },
        { label: 'Iran delivery' },
        { label: 'Motorcycle categories' }
      ]
    },
    trustSignals: [
      { label: 'Iran-delivery USD', desc: 'Listing TRY ÷ 48 plus 20%. Lira is not shown on the card' },
      { label: 'Shipping after order', desc: 'Postage is calculated after weight, volume and destination' },
      { label: 'Persian consulting', desc: 'Send clothing size or SKU on WhatsApp' },
      { label: 'Single and bulk orders', desc: 'Personal use and motorcycle shops' }
    ],
    whyBuyFromUs: [
      { title: 'Proforma before payment', desc: 'Stock and daily price are quoted. No amount is invented on the card. The final amount is on the proforma.' },
      { title: 'Postage separate from goods', desc: 'Shipping and insurance are confirmed after weight.' },
      { title: 'Full motorcycle catalog', desc: 'Helmets, jackets, gloves, pants, boots, intercoms and protection — one contact.' },
      { title: 'Quote with size', desc: 'Send size, height and weight so we can suggest the right model.' }
    ],
    purchaseSteps: [
      { num: '1', title: 'Pick a product', desc: 'Open a category or search by name, brand or SKU' },
      { num: '2', title: 'Confirm stock', desc: 'We check live availability' },
      { num: '3', title: 'Proforma', desc: 'Goods amount plus postage after weight and destination' },
      { num: '4', title: 'Pay and supply', desc: 'Supply from Turkey/Europe starts after you confirm' },
      { num: '5', title: 'Ship', desc: 'Postage is calculated after the order' }
    ],
    quoteChecklist: {
      title: 'Send these for an accurate quote',
      desc: 'The more precise the details, the faster the proforma.',
      items: [
        'Product name or SKU (e.g. BDV-AM-5860)',
        'For motorcycle apparel: size, height and weight',
        'Preferred color if several colors exist',
        'Quantity and delivery city / country'
      ],
      tip: 'If there is no card price, goods and postage appear on the proforma after inquiry.'
    },
    faq: [
      { q: 'Is the card price final?', a: 'Card prices are Iran-delivery USD: listing TRY ÷ 48 plus 20%. Lira is not shown. If there is no price, request a quote. The final amount is on the proforma.' },
      { q: 'Is shipping included?', a: 'No. Postage, insurance and clearance are confirmed after weight, volume and destination.' },
      { q: 'What do you need for apparel?', a: 'Send size, height and weight. If you are between sizes, write on WhatsApp.' },
      { q: 'How do I choose size and color?', a: 'Open product details. If you are between sizes, send height and weight on WhatsApp.' },
      { q: 'Is there a minimum order?', a: 'Single orders are fine. Shops get a better proforma at higher quantities.' }
    ],
    inquiryTemplate: 'Hello, Auto-Moto quote from Bizdavar — {product}\n\nQuantity:\nClothing size:\nDelivery city / country:\n'
  };

  const tr = {
    brand: {
      heroEyebrow: 'Motosiklet ekipmanı mağazası',
      heroHeadline: 'Kask, mont, bot ve motosiklet ekipmanı',
      heroHeadlineSub: 'Kask, interkom, mont, eldiven, pantolon, bot ve koruma',
      since: 'İran teslim USD',
      origin: 'Türkiye ve Avrupa tedariki',
      logoAlt: 'Bizdavar Auto-Moto — motosiklet ekipmanı',
      heroImageAlt: 'Motosiklet kaskı, mont ve bot — Bizdavar Auto-Moto kataloğu',
      description: 'Bizdavar motosiklet ekipmanı tedarik eder. Kart fiyatı İran teslim dolardır: liste lirası ÷ 48 + %20. Lira gösterilmez. Fiyat yoksa yalnızca teklif alınır.',
      heroStats: [
        { label: 'Katalogdaki ürün' },
        { label: 'İran teslim' },
        { label: 'Motosiklet kategorisi' }
      ]
    },
    trustSignals: [
      { label: 'İran teslim USD', desc: 'Liste lirası ÷ 48 + %20. Kartta lira yok' },
      { label: 'Kargo sipariş sonrası', desc: 'Kargo ağırlık, hacim ve varışa göre hesaplanır' },
      { label: 'Farsça danışmanlık', desc: 'Beden veya SKU’yu WhatsApp’tan gönderin' },
      { label: 'Tekil ve toptan', desc: 'Bireysel ve motosiklet mağazası' }
    ],
    whyBuyFromUs: [
      { title: 'Ödeme öncesi proforma', desc: 'Kart fiyatı İran teslim dolardır. Yoksa teklif istenir. Nihai tutar proformadadır.' },
      { title: 'Kargo üründen ayrı', desc: 'Kargo ve sigorta ağırlık sonrası netleşir.' },
      { title: 'Tam motosiklet kataloğu', desc: 'Kask, mont, eldiven, pantolon, bot, interkom ve koruma aynı iletişim noktasında.' },
      { title: 'Bedenle teklif', desc: 'Beden, boy ve kilo gönderin — doğru model önerilir.' }
    ],
    purchaseSteps: [
      { num: '1', title: 'Ürün seçin', desc: 'Kategori açın veya ad, marka, SKU ile arayın' },
      { num: '2', title: 'Stok onayı', desc: 'Güncel stoğu kontrol ederiz' },
      { num: '3', title: 'Proforma', desc: 'Ürün tutarı + ağırlık ve varış sonrası kargo' },
      { num: '4', title: 'Ödeme ve tedarik', desc: 'Onaydan sonra Türkiye/Avrupa tedariki başlar' },
      { num: '5', title: 'Sevkiyat', desc: 'Kargo sipariş sonrası hesaplanır' }
    ],
    quoteChecklist: {
      title: 'Net teklif için bunları gönderin',
      desc: 'Detay ne kadar netse proforma o kadar hızlıdır.',
      items: [
        'Ürün adı veya SKU (ör. BDV-AM-5860)',
        'Motosiklet giyimi için: beden, boy ve kilo',
        'Birden fazla renk varsa tercih ettiğiniz renk',
        'Adet ve teslimat şehri / ülkesi'
      ],
      tip: 'Kartta fiyat yoksa ürün ve kargo tutarı teklif sonrası proformada gelir.'
    },
    faq: [
      { q: 'Kart fiyatı nihai mi?', a: 'Kart fiyatı İran teslim dolardır: liste lirası ÷ 48 + %20. Lira gösterilmez. Fiyat yoksa teklif isteyin. Nihai tutar proformadadır.' },
      { q: 'Kargo fiyata dahil mi?', a: 'Hayır. Kargo, sigorta ve gümrük ağırlık, hacim ve varış sonrası netleşir.' },
      { q: 'Giyim için ne gerekli?', a: 'Beden, boy ve kilo gönderin. İki beden arasındaysanız WhatsApp’tan yazın.' },
      { q: 'Beden ve rengi nasıl seçerim?', a: 'Ürün detayını açın. İki beden arasındaysanız boy ve kiloyu WhatsApp’tan yazın.' },
      { q: 'Minimum sipariş var mı?', a: 'Tekil sipariş mümkün. Mağaza için yüksek adet daha avantajlı proforma verir.' }
    ],
    inquiryTemplate: 'Merhaba, Bizdavar Auto-Moto teklifi — {product}\n\nAdet:\nGiyim bedeni:\nTeslimat şehri / ülkesi:\n'
  };

  if (window.BIZDAVAR_LOCALES) {
    if (window.BIZDAVAR_LOCALES.en) window.BIZDAVAR_LOCALES.en.autoMotoCatalog = en;
    if (window.BIZDAVAR_LOCALES.tr) window.BIZDAVAR_LOCALES.tr.autoMotoCatalog = tr;
    if (window.BIZDAVAR_LOCALES.ru) {
      window.BIZDAVAR_LOCALES.ru.autoMotoCatalog = {
        brand: {
          heroEyebrow: 'Магазин мотоэкипировки',
          heroHeadline: 'Шлемы, куртки, боты и экипировка',
          heroHeadlineSub: 'Шлемы, интерком, куртки, перчатки, штаны, боты и защита',
          since: 'USD с доставкой в Иран',
          heroStats: [
            { label: 'Товаров в каталоге' },
            { label: 'Доставка в Иран' },
            { label: 'Мотокатегории' }
          ]
        },
        trustSignals: [
          { label: 'USD с доставкой в Иран', desc: 'Лира ÷ 48 + 20%. Лира на карточке не показывается' },
          { label: 'Почта после заказа', desc: 'Доставка после веса, объёма и пункта назначения' },
          { label: 'Консультация', desc: 'Пришлите размер или SKU в WhatsApp' },
          { label: 'Розница и опт', desc: 'Лично и мотомагазин' }
        ],
        inquiryTemplate: 'Здравствуйте, запрос Auto-Moto Bizdavar — {product}\n\nКоличество:\nРазмер одежды:\nГород / страна доставки:\n'
      };
    }
    if (window.BIZDAVAR_LOCALES.ar) {
      window.BIZDAVAR_LOCALES.ar.autoMotoCatalog = {
        brand: {
          heroEyebrow: 'متجر عتاد دراجة نارية',
          heroHeadline: 'خوذات وسترات وبوت وعتاد الدراجة',
          heroHeadlineSub: 'خوذات وإنتركم وسترات وقفازات وبوت وحماية',
          since: 'دولار لتسليم إيران',
          heroStats: [
            { label: 'منتجات في الكتالوج' },
            { label: 'تسليم إيران' },
            { label: 'فئات الدراجة' }
          ]
        },
        trustSignals: [
          { label: 'دولار لتسليم إيران', desc: 'الليرة ÷ ٤٨ + ٢٠٪. الليرة لا تظهر على البطاقة' },
          { label: 'الشحن بعد الطلب', desc: 'يحسب الشحن بعد الوزن والحجم والوجهة' },
          { label: 'استشارة', desc: 'أرسل المقاس أو SKU عبر واتساب' },
          { label: 'قطعي وجملة', desc: 'استخدام شخصي ومتجر دراجات' }
        ],
        inquiryTemplate: 'مرحباً، استعلام Auto-Moto بيزدوار — {product}\n\nالكمية:\nمقاس الملابس:\nمدينة / بلد التسليم:\n'
      };
    }
  }
})();
