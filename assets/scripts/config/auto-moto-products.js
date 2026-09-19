/**
 * Bizdavar Auto-Moto catalog
 * Never invent card prices. Inquiry only until a real proforma exists.
 */
(function () {
  const IMG = 'assets/images/auto-moto/';
  const CAT = IMG + 'categories/';

  const SIZE_HELMET = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const SIZE_JACKET = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];
  const SIZE_PANT = ['S', 'M', 'L', 'XL', 'XXL'];
  const SIZE_GLOVE = ['S', 'M', 'L', 'XL', 'XXL'];
  const SIZE_BOOT = ['39', '40', '41', '42', '43', '44', '45', '46'];

  function color(id, name, nameEn, nameTr, hex) {
    return { id: id, name: name, nameEn: nameEn, nameTr: nameTr, hex: hex, image: IMG + 'products/' + id + '.svg' };
  }

  function galleryFor(id, name) {
    return [
      { image: IMG + 'products/' + id + '.svg', imageAlt: name + ' — نمای روبرو' },
      { image: IMG + 'products/' + id + '-side.svg', imageAlt: name + ' — نمای کنار' },
      { image: IMG + 'products/' + id + '-visor.svg', imageAlt: name + ' — طلق و جزئیات' }
    ];
  }

  function series(id, name, nameEn, nameTr, _unusedPrice, image, extra) {
    const productImg = IMG + 'products/' + id + '.svg';
    const more = extra || {};
    delete more.priceUsd;
    delete more.priceTry;
    delete more.priceEur;
    delete more.priceFrom;
    if (more.colors && more.colors.length && !more.gallery) {
      more.gallery = more.colors.map(function (c) {
        return { image: c.image || productImg, imageAlt: name + ' — ' + c.name };
      });
    }
    if (!more.gallery && more.sizes) {
      more.gallery = galleryFor(id, name);
    }
    const firstColor = more.colors && more.colors[0];
    return Object.assign({
      id,
      sku: id.toUpperCase(),
      name,
      title: name,
      titleFa: name,
      titleEn: nameEn,
      titleTr: nameTr,
      inquiryName: name,
      note: 'SKU ' + id.toUpperCase(),
      quoteOnly: true,
      image: (firstColor && firstColor.image) || productImg,
      imageAlt: name,
      featured: !!more.featured
    }, more, { quoteOnly: true });
  }

  function productFromSeries(catId, catTitle, s) {
    return {
      id: s.id,
      name: s.name,
      nameFa: s.name,
      nameTr: s.titleTr,
      nameEn: s.titleEn,
      sku: s.sku,
      image: s.image,
      category: catTitle,
      categoryId: catId
    };
  }

  const categories = [
    {
      id: 'helmets',
      family: 'moto',
      title: 'کلاه ایمنی موتور',
      titleEn: 'Motorcycle helmets',
      titleTr: 'Motosiklet kaskları',
      icon: 'shield',
      image: CAT + 'motorcycle-helmet.svg',
      imageAlt: 'کلاه ایمنی موتورسیکلت — تمام‌صورت، فک‌متحرک و کراس',
      desc: 'کلاه تمام‌صورت، فک‌متحرک، باز و کراس با استاندارد ECE — رنگ، سایز و مشخصات هر مدل را در کارت ببینید.',
      descTr: 'Tam yüz, çene açılır, açık ve kros kasklar. Renk, beden ve stok kartta.',
      descEn: 'Full-face, modular, open and MX helmets. See color, size and stock on the card.',
      series: [
        series('bd-hm-ff06', 'کلاه ایمنی تمام‌صورت شهری ECE 22.06', 'Urban full-face helmet ECE 22.06', 'Şehir tam yüz kask ECE 22.06', 5690, CAT + 'motorcycle-helmet.svg', {
          featured: true,
          specs: 'ECE 22.06',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-ff06-mb', 'مشکی مات', 'Matte black', 'Mat siyah', '#1d1d1b'),
            color('bd-hm-ff06-wh', 'سفید', 'White', 'Beyaz', '#f4f1ea'),
            color('bd-hm-ff06-rd', 'مشکی / قرمز', 'Black / red', 'Siyah / kırmızı', '#d0122d'),
            color('bd-hm-ff06-bl', 'مشکی / آبی', 'Black / blue', 'Siyah / mavi', '#2b4c7e'),
            color('bd-hm-ff06-sv', 'نقره‌ای مات', 'Matte silver', 'Mat gümüş', '#8b919a')
          ],
          gallery: galleryFor('bd-hm-ff06', 'کلاه تمام‌صورت شهری'),
          features: ['پوسته پلی‌کربنات', 'طلق ضدخش آماده ضدبخار', 'آستر قابل شست‌وشو', 'سگک سریع'],
          specList: [
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'پوسته', value: 'پلی‌کربنات، تهویه جلو و بالای سر' },
            { label: 'طلق', value: 'ضدخش، تعویض بدون ابزار، آماده لایه ضدبخار' },
            { label: 'آستر', value: 'جداشونده و قابل شست‌وشو' },
            { label: 'قفل بند', value: 'سگک سریع یک‌دست' },
            { label: 'سایز', value: 'XS تا XXL' },
            { label: 'وزن تقریبی', value: '۱۴۵۰ گرم' }
          ],
          boxContents: ['کلاه', 'طلق شفاف نصب‌شده', 'کیف حمل']
        }),
        series('bd-hm-ff-tour', 'کلاه ایمنی تمام‌صورت جاده‌ای', 'Touring full-face helmet', 'Yol tam yüz kask', 8900, CAT + 'motorcycle-helmet.svg', {
          specs: 'Touring ECE',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-ff-tour-mb', 'مشکی مات', 'Matte black', 'Mat siyah', '#1d1d1b'),
            color('bd-hm-ff-tour-wh', 'سفید براق', 'Gloss white', 'Parlak beyaz', '#f4f1ea'),
            color('bd-hm-ff-tour-rd', 'قرمز جاده‌ای', 'Touring red', 'Yol kırmızısı', '#b01024')
          ],
          gallery: galleryFor('bd-hm-ff-tour', 'کلاه تمام‌صورت جاده‌ای'),
          features: ['آفتاب‌گیر داخلی', 'کانال عینک', 'قفل طلق آیرودینامیک'],
          specList: [
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'طلق', value: 'آفتاب‌گیر کشویی + طلق اصلی شفاف' },
            { label: 'راحتی', value: 'پد گونه عینک‌خور، سه لایه فوم' },
            { label: 'تهویه', value: 'چانه تک‌مرحله + خروجی عقب' },
            { label: 'سایز', value: 'XS تا XXL' }
          ],
          boxContents: ['کلاه', 'طلق شفاف', 'کیف حمل']
        }),
        series('bd-hm-ff-gfx', 'کلاه ایمنی تمام‌صورت گرافیک شهری', 'Urban graphic full-face helmet', 'Grafik şehir kaskı', 6200, CAT + 'motorcycle-helmet.svg', {
          specs: 'Graphic',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-ff-gfx-rd', 'گرافیک قرمز / مشکی', 'Red / black graphic', 'Kırmızı / siyah grafik', '#d0122d'),
            color('bd-hm-ff-gfx-bl', 'گرافیک آبی / سفید', 'Blue / white graphic', 'Mavi / beyaz grafik', '#2b4c7e')
          ],
          gallery: galleryFor('bd-hm-ff-gfx', 'کلاه گرافیک شهری'),
          features: ['طرح چاپی پوسته', 'طلق ضدخش', 'سگک سریع'],
          specList: [
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'پوسته', value: 'پلی‌کربنات با پوشش گرافیک' },
            { label: 'سایز', value: 'XS تا XXL' }
          ]
        }),
        series('bd-hm-carbon', 'کلاه ایمنی تمام‌صورت پوسته سبک', 'Light-shell full-face helmet', 'Hafif kabuk tam yüz kask', 14900, CAT + 'motorcycle-helmet.svg', {
          specs: 'Light shell',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-carbon-bk', 'مشکی بافت‌دار', 'Textured black', 'Dokulu siyah', '#111110'),
            color('bd-hm-carbon-rd', 'مشکی / خط قرمز', 'Black / red line', 'Siyah / kırmızı çizgi', '#d0122d')
          ],
          gallery: galleryFor('bd-hm-carbon', 'کلاه پوسته سبک'),
          features: ['پوسته سبک‌تر', 'طلق عریض', 'آستر ضدباکتری'],
          specList: [
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'پوسته', value: 'کامپوزیت سبک' },
            { label: 'وزن تقریبی', value: '۱۲۸۰ گرم' },
            { label: 'سایز', value: 'XS تا XXL' }
          ]
        }),
        series('bd-hm-mod', 'کلاه ایمنی فک‌متحرک', 'Modular flip-up helmet', 'Çene açılır kask', 6200, CAT + 'motorcycle-helmet.svg', {
          specs: 'Modular',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-mod-bk', 'مشکی مات', 'Matte black', 'Mat siyah', '#1d1d1b'),
            color('bd-hm-mod-wh', 'سفید', 'White', 'Beyaz', '#f4f1ea'),
            color('bd-hm-mod-ti', 'تیتانیوم', 'Titanium', 'Titanyum', '#6d7278')
          ],
          gallery: galleryFor('bd-hm-mod', 'کلاه فک‌متحرک'),
          features: ['فک بازشونده', 'تهویه دوگانه', 'مناسب شهر و جاده'],
          specList: [
            { label: 'نوع', value: 'فک متحرک با قفل ایمنی' },
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'طلق', value: 'اصلی شفاف + آفتاب‌گیر داخلی' },
            { label: 'سایز', value: 'XS تا XXL' }
          ]
        }),
        series('bd-hm-open', 'کلاه ایمنی باز شهری', 'Open-face urban helmet', 'Açık kask', 2800, CAT + 'motorcycle-helmet.svg', {
          specs: 'Open face',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-open-bk', 'مشکی', 'Black', 'Siyah', '#1d1d1b'),
            color('bd-hm-open-wh', 'سفید', 'White', 'Beyaz', '#f4f1ea')
          ],
          gallery: galleryFor('bd-hm-open', 'کلاه باز شهری'),
          features: ['وزن کم', 'طلق کوتاه', 'تهویه باز'],
          specList: [
            { label: 'نوع', value: 'نیمه‌باز شهری' },
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'سایز', value: 'XS تا XXL' }
          ]
        }),
        series('bd-hm-mx', 'کلاه کراس و آفرود', 'MX / off-road helmet', 'Cross kask', 4500, CAT + 'motorcycle-helmet.svg', {
          specs: 'MX',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-mx-bk', 'مشکی / زرد', 'Black / yellow', 'Siyah / sarı', '#f5c518'),
            color('bd-hm-mx-or', 'نارنجی کراس', 'MX orange', 'Cross turuncu', '#c45a11')
          ],
          gallery: galleryFor('bd-hm-mx', 'کلاه کراس'),
          features: ['نقاب آفرود', 'تهویه قوی', 'سازگار با عینک کراس'],
          specList: [
            { label: 'نوع', value: 'کراس / اندرو' },
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'نکته', value: 'عینک جدا سفارش داده می‌شود' },
            { label: 'سایز', value: 'XS تا XXL' }
          ]
        }),
        series('bd-hm-women', 'کلاه ایمنی سبک شهری', 'Lightweight urban helmet', 'Hafif şehir kaskı', 3900, CAT + 'motorcycle-helmet.svg', {
          specs: 'Urban light',
          sizes: SIZE_HELMET,
          colors: [
            color('bd-hm-women-bk', 'مشکی', 'Black', 'Siyah', '#1d1d1b'),
            color('bd-hm-women-pk', 'مشکی / صورتی', 'Black / pink', 'Siyah / pembe', '#c45a7a'),
            color('bd-hm-women-wh', 'سفید', 'White', 'Beyaz', '#f4f1ea')
          ],
          gallery: galleryFor('bd-hm-women', 'کلاه سبک شهری'),
          features: ['پوسته سبک', 'طرح جمع‌وجور', 'آستر نرم'],
          specList: [
            { label: 'استاندارد', value: 'ECE 22.06' },
            { label: 'وزن تقریبی', value: '۱۳۲۰ گرم' },
            { label: 'سایز', value: 'XS تا XXL' }
          ]
        }),
        series('bd-hm-vis', 'طلق شفاف یدکی کلاه', 'Clear spare visor', 'Şeffaf yedek vizör', 850, CAT + 'motorcycle-helmet.svg', {
          specs: 'Clear visor',
          colors: [color('bd-hm-vis', 'شفاف', 'Clear', 'Şeffaf', '#cfd8e3')],
          features: ['ضدخش', 'تعویض بدون ابزار'],
          specList: [
            { label: 'نوع', value: 'طلق شفاف' },
            { label: 'سازگاری', value: 'مدل‌های تمام‌صورت شهری و جاده‌ای بیزدوار' }
          ],
          boxContents: ['طلق شفاف']
        }),
        series('bd-hm-vis-sm', 'طلق دودی یدکی کلاه', 'Smoke spare visor', 'Füme yedek vizör', 980, CAT + 'motorcycle-helmet.svg', {
          specs: 'Smoke visor',
          colors: [color('bd-hm-vis-sm', 'دودی', 'Smoke', 'Füme', '#4a5560')],
          features: ['کاهش تابش', 'ضدخش'],
          specList: [
            { label: 'نوع', value: 'طلق دودی' },
            { label: 'نکته', value: 'برای شب طلق شفاف پیشنهاد می‌شود' }
          ],
          boxContents: ['طلق دودی']
        })
      ]
    },
    {
      id: 'intercom',
      family: 'moto',
      title: 'اینترکام و دوربین',
      titleEn: 'Intercom & camera',
      titleTr: 'Interkom ve kamera',
      icon: 'phone',
      image: CAT + 'motorcycle-intercom.svg',
      imageAlt: 'اینترکام بلوتوث و دوربین موتورسیکلت',
      desc: 'هندزفری بلوتوث، اینترکام جفت و دوربین ثبت مسیر — نصب روی بیشتر کلاه‌های استاندارد.',
      descTr: 'Bluetooth interkom, çift set ve kamera. Çoğu standart kaska takılır.',
      descEn: 'Bluetooth intercom, pair kits and cameras for standard helmets.',
      series: [
        series('bd-ic-bt1', 'اینترکام بلوتوث تک‌نفره', 'Single Bluetooth intercom', 'Tekli Bluetooth interkom', 2400, CAT + 'motorcycle-intercom.svg', { featured: true, specs: 'BT 5.1', features: ['موسیقی و تماس', 'ضدآب', 'شارژ USB-C'] }),
        series('bd-ic-pair', 'اینترکام جفت راننده و ترک‌نشین', 'Rider–passenger intercom pair', 'Çift interkom', 4100, CAT + 'motorcycle-intercom.svg', { specs: 'Mesh pair' }),
        series('bd-ic-cam', 'دوربین اکشن ضدآب موتور', 'Waterproof action camera', 'Su geçirmez kamera', 3200, CAT + 'motorcycle-intercom.svg'),
        series('bd-ic-mount', 'پایه و کابل اینترکام', 'Intercom mount & cables', 'Montaj ve kablo', 480, CAT + 'motorcycle-intercom.svg')
      ]
    },
    {
      id: 'jackets',
      family: 'moto',
      title: 'کاپشن و لباس موتور',
      titleEn: 'Motorcycle jackets',
      titleTr: 'Motosiklet montları',
      icon: 'bag',
      image: CAT + 'motorcycle-jacket.svg',
      imageAlt: 'کاپشن موتور چرمی و پارچه‌ای با محافظ CE',
      desc: 'کاپشن چرم، پارچه‌ای چهارفصل و ضدآب — محافظ شانه و آرنج CE.',
      descTr: 'Deri, tekstil, 3 mevsim ve Gore-Tex montlar. Kadın ve çocuk modelleri dahil.',
      descEn: 'Leather, textile, 3-season and Gore-Tex jackets, including women and kids.',
      series: [
        series('bd-jk-leather', 'کاپشن چرمی چهارفصل با محافظ CE', 'Leather CE touring jacket', 'Deri CE mont', 8900, CAT + 'motorcycle-jacket.svg', {
          featured: true,
          specs: 'CE Level 2',
          sizes: SIZE_JACKET,
          colors: [
            color('bd-jk-leather', 'مشکی', 'Black', 'Siyah', '#1d1d1b'),
            color('bd-jk-leather-br', 'قهوه‌ای', 'Brown', 'Kahverengi', '#6b3f22')
          ],
          features: ['چرم ضخیم', 'آستر جداشونده', 'محافظ شانه و آرنج'],
          specList: [
            { label: 'محافظ', value: 'شانه و آرنج CE Level 2' },
            { label: 'آستر', value: 'جداشونده چهارفصل' },
            { label: 'سایز', value: 'S تا 3XL' }
          ]
        }),
        series('bd-jk-textile', 'کاپشن پارچه‌ای تابستانه', 'Summer textile jacket', 'Yazlık kumaş mont', 5200, CAT + 'motorcycle-jacket.svg', {
          specs: 'Mesh CE',
          sizes: SIZE_JACKET,
          colors: [
            color('bd-jk-textile', 'مشکی', 'Black', 'Siyah', '#1d1d1b'),
            color('bd-jk-textile-rd', 'مشکی / قرمز', 'Black / red', 'Siyah / kırmızı', '#d0122d')
          ],
          features: ['توری تهویه', 'محافظ CE', 'جیب داخلی'],
          specList: [
            { label: 'فصل', value: 'تابستان و شهر' },
            { label: 'سایز', value: 'S تا 3XL' }
          ]
        }),
        series('bd-jk-rain', 'کاپشن ضدآب بارانی', 'Waterproof rain jacket', 'Yağmurluk mont', 2100, CAT + 'motorcycle-jacket.svg', {
          specs: 'WP',
          sizes: SIZE_JACKET,
          colors: [color('bd-jk-rain', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['رویی ضدآب', 'بسته می‌شود روی کاپشن'],
          specList: [{ label: 'سایز', value: 'S تا 3XL' }]
        }),
        series('bd-jk-vest', 'جلیقه محافظ سبک', 'Light protection vest', 'Koruma yeleği', 3600, CAT + 'motorcycle-jacket.svg', {
          specs: 'CE vest',
          sizes: SIZE_JACKET,
          colors: [color('bd-jk-vest', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['محافظ کمر و سینه', 'زیر کاپشن'],
          specList: [{ label: 'سایز', value: 'S تا 3XL' }]
        })
      ]
    },
    {
      id: 'pants',
      family: 'moto',
      title: 'شلوار موتور',
      titleEn: 'Motorcycle pants',
      titleTr: 'Motosiklet pantolonları',
      icon: 'toolbox',
      image: CAT + 'motorcycle-pants.svg',
      imageAlt: 'شلوار موتور با محافظ زانو',
      desc: 'شلوار پارچه‌ای، جین تقویتی و ضدآب با محافظ زانو.',
      descTr: 'Yazlık, 3 mevsim, Gore-Tex, jean ve kadın pantolonlar.',
      descEn: 'Summer, 3-season, Gore-Tex, jeans and women pants.',
      series: [
        series('bd-pt-tour', 'شلوار تورینگ با محافظ زانو', 'Touring pants with knee armor', 'Diz korumalı pantolon', 4100, CAT + 'motorcycle-pants.svg', {
          featured: true,
          specs: 'CE knee',
          sizes: SIZE_PANT,
          colors: [
            color('bd-pt-tour', 'مشکی', 'Black', 'Siyah', '#1d1d1b'),
            color('bd-pt-tour-gy', 'خاکستری', 'Grey', 'Gri', '#6d7278')
          ],
          features: ['محافظ زانو', 'درز تقویت‌شده'],
          specList: [{ label: 'سایز', value: 'S تا XXL' }, { label: 'محافظ', value: 'زانو CE' }]
        }),
        series('bd-pt-jean', 'جین موتور تقویت‌شده', 'Reinforced riding jeans', 'Korumalı jean', 3400, CAT + 'motorcycle-pants.svg', {
          specs: 'Riding jean',
          sizes: SIZE_PANT,
          colors: [color('bd-pt-jean', 'آبی تیره', 'Dark blue', 'Koyu mavi', '#1a2332')],
          features: ['پارچه تقویت', 'ظاهر روزمره'],
          specList: [{ label: 'سایز', value: 'S تا XXL' }]
        }),
        series('bd-pt-rain', 'شلوار بارانی رویی', 'Over-pant rain cover', 'Yağmurluk pantolon', 950, CAT + 'motorcycle-pants.svg', {
          specs: 'WP over',
          sizes: SIZE_PANT,
          colors: [color('bd-pt-rain', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          specList: [{ label: 'سایز', value: 'S تا XXL' }]
        })
      ]
    },
    {
      id: 'gloves',
      family: 'moto',
      title: 'دستکش موتور',
      titleEn: 'Motorcycle gloves',
      titleTr: 'Motosiklet eldivenleri',
      icon: 'handshake',
      image: CAT + 'motorcycle-gloves.svg',
      imageAlt: 'دستکش موتور تابستانه، زمستانه و چرمی',
      desc: 'دستکش تابستانه، زمستانه و چرمی با محافظ بند انگشت.',
      descTr: 'Yazlık, 3 mevsim, deri ve Gore-Tex eldivenler.',
      descEn: 'Summer, 3-season, leather and Gore-Tex gloves.',
      series: [
        series('bd-gl-sum', 'دستکش تابستانه تهویه‌دار', 'Ventilated summer gloves', 'Yazlık eldiven', 980, CAT + 'motorcycle-gloves.svg', {
          featured: true,
          specs: 'Summer',
          sizes: SIZE_GLOVE,
          colors: [color('bd-gl-sum', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['توری پشت دست', 'محافظ بند انگشت'],
          specList: [{ label: 'سایز', value: 'S تا XXL' }]
        }),
        series('bd-gl-win', 'دستکش زمستانه ضدآب', 'Waterproof winter gloves', 'Kış eldiveni', 1650, CAT + 'motorcycle-gloves.svg', {
          specs: 'WP winter',
          sizes: SIZE_GLOVE,
          colors: [color('bd-gl-win', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['عایق حرارتی', 'سرآستین بلند'],
          specList: [{ label: 'سایز', value: 'S تا XXL' }]
        }),
        series('bd-gl-lea', 'دستکش چرمی شهری', 'Leather urban gloves', 'Deri eldiven', 1200, CAT + 'motorcycle-gloves.svg', {
          specs: 'Leather',
          sizes: SIZE_GLOVE,
          colors: [
            color('bd-gl-lea', 'مشکی', 'Black', 'Siyah', '#1d1d1b'),
            color('bd-gl-lea-br', 'قهوه‌ای', 'Brown', 'Kahverengi', '#6b3f22')
          ],
          specList: [{ label: 'سایز', value: 'S تا XXL' }]
        }),
        series('bd-gl-touch', 'دستکش تاچ‌اسکرین', 'Touchscreen riding gloves', 'Dokunmatik eldiven', 890, CAT + 'motorcycle-gloves.svg', {
          specs: 'Touch',
          sizes: SIZE_GLOVE,
          colors: [color('bd-gl-touch', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['نوک انگشت تاچ'],
          specList: [{ label: 'سایز', value: 'S تا XXL' }]
        })
      ]
    },
    {
      id: 'boots',
      family: 'moto',
      title: 'بوت و کفش موتور',
      titleEn: 'Motorcycle boots',
      titleTr: 'Motosiklet botları',
      icon: 'bag',
      image: CAT + 'motorcycle-boots.svg',
      imageAlt: 'بوت موتور شهری و آفرود',
      desc: 'بوت شهری، تورینگ و آفرود با زیره ضدلغزش.',
      descTr: 'Yazlık, 3 mevsim, Gore-Tex ve kadın botlar.',
      descEn: 'Summer, 3-season, Gore-Tex and women boots.',
      series: [
        series('bd-bt-urban', 'بوت شهری کوتاه', 'Short urban riding boot', 'Kısa şehir botu', 3200, CAT + 'motorcycle-boots.svg', {
          featured: true,
          specs: 'Urban',
          sizes: SIZE_BOOT,
          colors: [color('bd-bt-urban', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['زیپ داخلی', 'زیره ضدلغزش'],
          specList: [{ label: 'سایز', value: '۳۹ تا ۴۶' }]
        }),
        series('bd-bt-tour', 'بوت تورینگ ساق‌بلند', 'Tall touring boot', 'Uzun touring bot', 4800, CAT + 'motorcycle-boots.svg', {
          specs: 'Touring WP',
          sizes: SIZE_BOOT,
          colors: [color('bd-bt-tour', 'مشکی', 'Black', 'Siyah', '#1d1d1b')],
          features: ['ساق بلند', 'غشاء ضدآب'],
          specList: [{ label: 'سایز', value: '۳۹ تا ۴۶' }]
        }),
        series('bd-bt-mx', 'بوت کراس و آفرود', 'MX / off-road boot', 'Cross bot', 5400, CAT + 'motorcycle-boots.svg', {
          specs: 'MX',
          sizes: SIZE_BOOT,
          colors: [
            color('bd-bt-mx', 'مشکی / سفید', 'Black / white', 'Siyah / beyaz', '#1d1d1b'),
            color('bd-bt-mx-rd', 'مشکی / قرمز', 'Black / red', 'Siyah / kırmızı', '#d0122d')
          ],
          features: ['قفل ساق', 'زیره آج‌دار'],
          specList: [{ label: 'سایز', value: '۳۹ تا ۴۶' }]
        })
      ]
    },
    {
      id: 'protection',
      family: 'moto',
      title: 'محافظ بدن',
      titleEn: 'Body protection',
      titleTr: 'Vücut koruma',
      icon: 'shield',
      image: CAT + 'motorcycle-protection.svg',
      imageAlt: 'محافظ کمر، زانو، آرنج و گردن موتورسیکلت',
      desc: 'محافظ کمر، زانو، آرنج، سینه و گردن با سطح CE.',
      descTr: 'Sırtlık, diz-dirsek, göğüs, airbag ve bel koruma.',
      descEn: 'Back, knee, chest, airbag and waist protection.',
      series: [
        series('bd-pr-back', 'محافظ کمر CE', 'CE back protector', 'Sırt koruması', 1450, CAT + 'motorcycle-protection.svg', { featured: true, specs: 'CE Level 2' }),
        series('bd-pr-knee', 'محافظ زانو و ساق', 'Knee and shin guard', 'Diz-baldır koruma', 1100, CAT + 'motorcycle-protection.svg'),
        series('bd-pr-chest', 'محافظ سینه و شانه', 'Chest and shoulder armor', 'Göğüs koruma', 2100, CAT + 'motorcycle-protection.svg'),
        series('bd-pr-neck', 'محافظ گردن آفرود', 'Off-road neck brace', 'Boyun koruma', 2600, CAT + 'motorcycle-protection.svg')
      ]
    },
    {
      id: 'offroad',
      family: 'moto',
      title: 'آفرود و کراس',
      titleEn: 'MX & off-road',
      titleTr: 'MX ve off-road',
      icon: 'bolt',
      image: CAT + 'motorcycle-offroad.svg',
      imageAlt: 'لباس و تجهیزات موتور کراس و اندرو',
      desc: 'ست لباس کراس، عینک، محافظ بدن و بوت آفرود.',
      descTr: 'MX bot, gözlük, jersey, pantolon ve genç/çocuk off-road.',
      descEn: 'MX boots, goggles, jersey, pants and youth off-road.',
      series: [
        series('bd-mx-kit', 'ست لباس کراس پیراهن و شلوار', 'MX jersey and pant kit', 'MX forma takımı', 2800, CAT + 'motorcycle-offroad.svg', { featured: true }),
        series('bd-mx-gog', 'عینک کراس ضدبخار', 'Anti-fog MX goggles', 'MX gözlük', 720, CAT + 'motorcycle-offroad.svg'),
        series('bd-mx-kid', 'ست کودک کراس', 'Kids MX kit', 'Çocuk MX takım', 2400, CAT + 'motorcycle-offroad.svg')
      ]
    },
    {
      id: 'accessories',
      family: 'moto',
      title: 'اکسسوری موتور',
      titleEn: 'Rider accessories',
      titleTr: 'Sürücü aksesuarı',
      icon: 'bag',
      image: CAT + 'motorcycle-accessory.svg',
      imageAlt: 'کوله، گردن‌پوش، بارانی و اکسسوری موتورسوار',
      desc: 'کوله، گردن‌پوش، بالاکلاوا، کاور باران و کیف باک.',
      descTr: 'Yelek, yağmurluk, boyunluk, balaklava, hediyelik ve sürücü çantası.',
      descEn: 'Vests, rainwear, neck tubes, balaclava, gifts and rider bags.',
      series: [
        series('bd-ax-bag', 'کوله و کیف باک ضدآب', 'Waterproof tank / backpack', 'Su geçirmez çanta', 1900, CAT + 'motorcycle-accessory.svg', { featured: true }),
        series('bd-ax-neck', 'گردن‌پوش و بالاکلاوا', 'Neck tube and balaclava', 'Boyunluk ve maske', 320, CAT + 'motorcycle-accessory.svg'),
        series('bd-ax-therm', 'لایه حرارتی زیر لباس', 'Thermal base layer', 'Termal iç giyim', 780, CAT + 'motorcycle-accessory.svg'),
        series('bd-ax-lock', 'قفل دیسک و کابل', 'Disc lock and cable', 'Disk kilit', 640, CAT + 'motorcycle-accessory.svg')
      ]
    },
    {
      id: 'moto-parts',
      family: 'moto',
      title: 'قطعات روی موتور',
      titleEn: 'Motorcycle parts',
      titleTr: 'Motor üzeri parçalar',
      icon: 'wrench',
      image: CAT + 'motorcycle-parts.svg',
      imageAlt: 'چراغ، آینه، اگزوز و قطعات روی موتورسیکلت',
      desc: 'چراغ، آینه، محافظ دست، زنجیر و قطعات ظاهری موتور.',
      descTr: 'Telefon tutucu, kilit, branda, çanta, yağ ve bakım.',
      descEn: 'Phone mounts, locks, covers, bags, oil and care.',
      series: [
        series('bd-mp-light', 'چراغ جلو LED موتور', 'LED motorcycle headlight', 'LED far', 1350, CAT + 'motorcycle-parts.svg', { featured: true }),
        series('bd-mp-mirror', 'جفت آینه موتور', 'Motorcycle mirror pair', 'Ayna takımı', 420, CAT + 'motorcycle-parts.svg'),
        series('bd-mp-chain', 'ست زنجیر و دنده', 'Chain and sprocket kit', 'Zincir-dişli set', 1680, CAT + 'motorcycle-parts.svg'),
        series('bd-mp-guard', 'محافظ دست و لیور', 'Handguard and lever set', 'El koruma', 890, CAT + 'motorcycle-parts.svg')
      ]
    },
  ];

  const groupCopy = {
    moto: { title: 'تجهیزات موتورسیکلت', desc: 'کلاه، اینترکام، لباس، بوت، محافظ و قطعات روی موتور' }
  };
  const seenFamily = {};
  categories.forEach(function (cat) {
    if (cat.family && !seenFamily[cat.family] && groupCopy[cat.family]) {
      seenFamily[cat.family] = true;
      cat.groupTitle = groupCopy[cat.family].title;
      cat.groupDesc = groupCopy[cat.family].desc;
    }
  });

  categories.forEach(function (cat) {
    if (cat.family === 'moto') cat.series = [];
  });

  const products = [];
  categories.forEach(function (cat) {
    (cat.series || []).forEach(function (s) {
      products.push(productFromSeries(cat.id, cat.title, s));
    });
  });

  window.AUTO_MOTO_CATALOG = {
    navMode: 'categories',
    productDetail: true,
    quoteEmptyPrices: true,
    productBase: 'pages/motorcycle',
    brand: {
      name: 'Bizdavar Auto-Moto',
      nameFa: 'بیزدوار اتو‌موتو',
      logo: IMG + 'logo-moto-shop.svg',
      logoAlt: 'لوگوی بیزدوار — فروشگاه موتورسیکلت',
      heroImage: IMG + 'hero/auto-moto-hero.webp',
      heroImageAlt: 'کلاه ایمنی، کاپشن و بوت موتورسیکلت — کاتالوگ بیزدوار اتو‌موتو',
      heroEyebrow: 'فروشگاه تجهیزات موتورسیکلت',
      heroHeadline: 'کلاه، کاپشن، بوت و لوازم موتور',
      heroHeadlineSub: 'کلاه ایمنی، اینترکام، کاپشن، دستکش، شلوار، بوت، محافظ و لوازم موتورسوار',
      tagline: 'تجهیزات موتورسیکلت',
      taglineFa: 'تجهیزات موتورسیکلت',
      taglineTr: 'Motosiklet ekipmanı',
      taglineEn: 'Motorcycle gear',
      since: 'قیمت دلاری تحویل ایران',
      origin: 'تامین از ترکیه و اروپا',
      officialUrl: 'https://bizdavar.com/pages/auto-moto',
      descriptionFa: 'کلاه ایمنی، کاپشن، دستکش، شلوار، بوت، اینترکام و محافظ برای موتورسوار. قیمت روی کارت به دلار و برای تحویل در ایران است. کالایی که قیمت ندارد فقط با استعلام فروخته می‌شود.',
      heroStats: [
        { value: String(products.length) + '+', label: 'محصول در کاتالوگ' },
        { value: 'USD', label: 'تحویل ایران' },
        { value: '۱۱', label: 'دسته کالا' }
      ]
    },
    trustSignals: [
      { icon: 'coin', label: 'قیمت دلاری تحویل ایران', desc: 'مبلغ روی کارت برای تحویل در ایران است. اگر قیمت نباشد، همان کالا استعلام می‌شود.' },
      { icon: 'ship', label: 'ارسال بعد از سفارش', desc: 'هزینه حمل پس از وزن، حجم و مقصد حساب می‌شود' },
      { icon: 'phone', label: 'مشاوره فارسی', desc: 'سایز لباس یا کد SKU را در واتساپ بفرستید' },
      { icon: 'shield', label: 'سفارش تکی و عمده', desc: 'مصرف شخصی، تعمیرگاه و فروشگاه موتور' }
    ],
    whyBuyFromUs: [
      { icon: 'document', title: 'پیش‌فاکتور قبل از پرداخت', desc: 'قیمت کارت برای تحویل ایران است. موجودی، مبلغ نهایی و هزینه ارسال در پیش‌فاکتور تایید می‌شود.' },
      { icon: 'ship', title: 'ارسال جدا از قیمت کالا', desc: 'هزینه پست و بیمه بعد از سفارش و تایید وزن اعلام می‌شود.' },
      { icon: 'handshake', title: 'کاتالوگ کامل موتور', desc: 'کلاه، کاپشن، دستکش، شلوار، بوت، اینترکام و محافظ در یک نقطه تماس.' },
      { icon: 'factory', title: 'استعلام با سایز', desc: 'سایز، قد و وزن را بفرستید تا مدل درست پیشنهاد شود.' }
    ],
    purchaseSteps: [
      { num: '۱', title: 'انتخاب محصول', desc: 'دسته موتور را باز کنید یا نام را در جستجو بنویسید' },
      { num: '۲', title: 'تایید موجودی', desc: 'موجودی و قیمت روز کالا را چک می‌کنیم' },
      { num: '۳', title: 'پیش‌فاکتور', desc: 'مبلغ کالا + اعلام جداگانه پست پس از وزن و مقصد' },
      { num: '۴', title: 'پرداخت و تامین', desc: 'پس از تایید پیش‌فاکتور، تامین از ترکیه/اروپا شروع می‌شود' },
      { num: '۵', title: 'ارسال', desc: 'هزینه پست بعد از سفارش محاسبه و ارسال می‌شود' }
    ],
    quoteChecklist: {
      title: 'برای استعلام دقیق این موارد را بفرستید',
      desc: 'هرچه دقیق‌تر بنویسید، پیش‌فاکتور سریع‌تر آماده می‌شود.',
      items: [
        'نام محصول یا کد SKU (مثلاً BDV-AM-5860)',
        'برای لباس موتور: سایز، قد و وزن',
        'رنگ مورد نظر اگر چند رنگ دارد',
        'تعداد و شهر / کشور تحویل'
      ],
      tip: 'قیمت کارت دلاری تحویل ایران است. اگر قیمت نباشد استعلام کنید. مبلغ نهایی در پیش‌فاکتور می‌آید.'
    },
    quickSeries: [
      { id: 'helmets', name: 'کلاه ایمنی', nameTr: 'Motosiklet kaskı', nameEn: 'Helmets', tag: 'ECE', hint: 'تمام‌صورت · فک‌متحرک · کراس', hintTr: 'Tam yüz · çene açılır · kros', hintEn: 'Full-face · modular · MX', anchor: 'cat' },
      { id: 'jackets', name: 'کاپشن موتور', nameTr: 'Motosiklet montu', nameEn: 'Jackets', tag: 'CE', hint: 'چرم · پارچه · بارانی', hintTr: 'Deri · tekstil · yağmurluk', hintEn: 'Leather · textile · rain', anchor: 'cat' },
      { id: 'boots', name: 'بوت موتور', nameTr: 'Motosiklet botu', nameEn: 'Boots', tag: 'بوت', hint: 'تابستانه · گورتکس · زنانه', hintTr: 'Yazlık · Gore-Tex · kadın', hintEn: 'Summer · Gore-Tex · women', anchor: 'cat' },
      { id: 'gloves', name: 'دستکش', nameTr: 'Eldiven', nameEn: 'Gloves', tag: 'دستکش', hint: 'تابستانه · چرمی · گورتکس', hintTr: 'Yazlık · deri · Gore-Tex', hintEn: 'Summer · leather · Gore-Tex', anchor: 'cat' },
      { id: 'intercom', name: 'اینترکام', nameTr: 'Interkom', nameEn: 'Intercom', tag: 'BT', hint: 'دستگاه · لوازم · دوربین', hintTr: 'Cihaz · aksesuar · kamera', hintEn: 'Device · accessory · camera', anchor: 'cat' },
      { id: 'protection', name: 'محافظ', nameTr: 'Koruma', nameEn: 'Protection', tag: 'CE', hint: 'کمر · زانو · ایربگ', hintTr: 'Sırt · diz · airbag', hintEn: 'Back · knee · airbag', anchor: 'cat' }
    ],
    highlights: [
      {
        id: 'full-face-helmet',
        title: 'کلاه ایمنی تمام‌صورت شهری ECE 22.06',
        titleTr: 'Şehir tam yüz kask ECE 22.06',
        titleEn: 'Urban full-face helmet ECE 22.06',
        desc: 'کلاه تمام‌صورت برای شهر و جاده — سایز را در واتساپ بفرستید',
        useCaseFa: 'رانندگی شهری و جاده',
        badge: 'پرفروش',
        inquiryName: 'کلاه ایمنی تمام‌صورت ECE 22.06',
        image: IMG + 'products/bd-hm-ff06.svg',
        imageAlt: 'کلاه ایمنی تمام‌صورت موتورسیکلت',
        quoteOnly: true
      },
      {
        id: 'leather-jacket',
        title: 'کاپشن چرمی چهارفصل CE',
        titleTr: 'Deri CE mont',
        titleEn: 'Leather CE touring jacket',
        desc: 'محافظ شانه و آرنج — سایز را در واتساپ بفرستید',
        useCaseFa: 'تورینگ و استفاده روزانه',
        badge: 'پرفروش',
        inquiryName: 'کاپشن چرمی چهارفصل با محافظ CE',
        image: IMG + 'products/bd-jk-leather.svg',
        imageAlt: 'کاپشن موتور چرمی',
        quoteOnly: true
      },
      {
        id: 'intercom-bt',
        title: 'اینترکام بلوتوث تک‌نفره',
        titleTr: 'Bluetooth interkom',
        titleEn: 'Single Bluetooth intercom',
        desc: 'تماس، موسیقی و ضدآب — نصب روی کلاه استاندارد',
        useCaseFa: 'ارتباط راننده',
        badge: 'اینترکام',
        inquiryName: 'اینترکام بلوتوث تک‌نفره',
        image: IMG + 'products/bd-ic-bt1.svg',
        imageAlt: 'اینترکام بلوتوث موتور',
        quoteOnly: true
      },
    ],
    categories,
    products,
    iranIndustries: [
      {
        name: 'فروشگاه و کلاب موتور',
        desc: 'کلاه، کاپشن، دستکش و بوت برای فروشگاه موتورسیکلت — سایزبندی و موجودی روز.',
        image: CAT + 'motorcycle-helmet.svg',
        imageAlt: 'فروشگاه تجهیزات موتور',
        icon: 'box',
        models: 'کلاه · لباس · بوت'
      },
      {
        name: 'سوار شهری و جاده',
        desc: 'کلاه تمام‌صورت، کاپشن سه‌فصل و بوت تورینگ برای استفاده روزانه.',
        image: CAT + 'motorcycle-jacket.svg',
        imageAlt: 'پوشاک موتورسوار',
        icon: 'users',
        models: 'کلاه · کاپشن · بوت'
      },
      {
        name: 'آفرود و کراس',
        desc: 'جرسی، عینک، بوت و محافظ برای MX و آفرود.',
        image: CAT + 'motorcycle-offroad.svg',
        imageAlt: 'تجهیزات آفرود',
        icon: 'wrench',
        models: 'جرسی · عینک · بوت'
      },
      {
        name: 'سفارش شخصی',
        desc: 'یک کلاه، یک کاپشن یا یک جفت دستکش — مشاوره واتساپ و ارسال پس از سفارش.',
        image: CAT + 'motorcycle-gloves.svg',
        imageAlt: 'سفارش شخصی تجهیزات موتور',
        icon: 'users',
        models: 'تکی · سایز شخصی'
      }
    ],
    faq: [
      { q: 'قیمت روی کارت نهایی است؟', a: 'قیمت روی کارت برای تحویل ایران است. مبلغ نهایی و هزینه ارسال در پیش‌فاکتور تایید می‌شود. اگر قیمت نباشد، فقط استعلام است.' },
      { q: 'هزینه ارسال داخل قیمت است؟', a: 'خیر. هزینه پست، بیمه و ترخیص بعد از ثبت سفارش و مشخص شدن وزن، حجم و مقصد اعلام می‌شود.' },
      { q: 'برای لباس چه اطلاعاتی لازم است؟', a: 'سایز، قد و وزن را بفرستید. اگر بین دو سایز هستید در واتساپ بنویسید تا مدل درست پیشنهاد شود.' },
      { q: 'سایز و رنگ را چطور انتخاب کنم؟', a: 'روی جزئیات هر کالا رنگ و سایز را انتخاب کنید. اگر بین دو سایز هستید قد و وزن را در واتساپ بفرستید.' },
      { q: 'حداقل سفارش چقدر است؟', a: 'سفارش تکی ممکن است. برای تعمیرگاه و فروشگاه، تعداد بالاتر پیش‌فاکتور به‌صرفه‌تر می‌شود.' }
    ],
    inquiryTemplate: 'سلام، استعلام اتو‌موتو بیزدوار — {product}\n\nتعداد:\nسایز لباس:\nشهر / کشور تحویل:\n',
    lazyCatalog: true,
    catalogLoading: true,
    catalogPageSize: 12,
    services: [
      { title: 'مشاوره انتخاب کالا', desc: 'کلاه، کاپشن و بوت با سایز شما' },
      { title: 'سایز لباس موتور', desc: 'کلاه، کاپشن، دستکش و بوت' },
      { title: 'پیش‌فاکتور دلاری', desc: 'قیمت کالا + اعلام ارسال' },
      { title: 'اعلام ارسال بعد از سفارش', desc: 'وزن، حجم و مقصد' },
      { title: 'سفارش عمده', desc: 'تعمیرگاه و فروشگاه موتور' },
      { title: 'پشتیبانی فارسی', desc: 'واتساپ و فرم تماس' }
    ]
  };

  function escapeText(value) {
    return String(value || '').replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]);
    });
  }

  function featuresFromTitle(title) {
    const t = String(title || '');
    const out = [];
    if (/محافظ/.test(t)) out.push('محافظ‌دار');
    if (/کوتاه/.test(t)) out.push('مدل کوتاه');
    if (/بلند/.test(t)) out.push('مدل بلند');
    if (/ضدآب|گورتکس/.test(t)) out.push('ضدآب');
    if (/گورتکس/.test(t)) out.push('گورتکس');
    if (/تابستانه/.test(t)) out.push('تابستانه');
    if (/زمستانه|حرارتی/.test(t)) out.push('زمستانه');
    if (/سه‌فصل|فصلی/.test(t)) out.push('سه‌فصل');
    if (/چرمی/.test(t)) out.push('چرمی');
    if (/تمام‌صورت/.test(t)) out.push('تمام‌صورت');
    if (/فک‌متحرک|فک متحرک/.test(t)) out.push('فک‌متحرک');
    if (/زنانه/.test(t)) out.push('زنانه');
    if (/مردانه/.test(t)) out.push('مردانه');
    if (/کودک/.test(t)) out.push('کودک');
    if (/نوجوان/.test(t)) out.push('نوجوان');
    if (/تهویه|هواکش/.test(t)) out.push('تهویه');
    if (/ضدبخار|پین‌لاک/.test(t)) out.push('ضدبخار');
    if (/کراس|آفرود/.test(t)) out.push('آفرود');
    if (/ایربگ/.test(t)) out.push('ایربگ');
    if (/کربن/.test(t)) out.push('کربن');
    if (/شب‌نما/.test(t)) out.push('شب‌نما');
    return out;
  }

  function expandImported(item) {
    const name = escapeText(item.titleFa || item.name);
    const titleTr = escapeText(item.titleTr) || name;
    const titleEn = escapeText(item.titleEn) || titleTr;
    const brand = escapeText(item.brand);
    const sku = escapeText(item.sku);
    const categoryFa = escapeText(item.categoryFa || '');
    const leafFa = escapeText(item.leafFa || item.leaf || '');
    const desc = escapeText(item.descFa || '');
    const usdPrice = Number(item.priceUsd);
    const hasUsd = item.priceUsd != null && item.priceUsd !== '' && !Number.isNaN(usdPrice);
    const avail = escapeText(item.availability || '');
    const specList = [
      brand ? { key: 'brand', label: 'برند', value: brand } : null,
      categoryFa ? { key: 'category', label: 'دسته', value: categoryFa } : null,
      leafFa && leafFa !== categoryFa ? { key: 'type', label: 'نوع', value: leafFa } : null,
      sku ? { key: 'sku', label: 'کد کالا', value: sku } : null,
      avail ? { key: 'stock', label: 'موجودی', value: avail } : null,
      hasUsd ? { key: 'delivery', label: 'تحویل', value: 'iran' } : null,
      hasUsd ? { key: 'currency', label: 'واحد قیمت', value: 'usd' } : { key: 'price', label: 'قیمت', value: 'quote' }
    ].filter(Boolean);
    return {
      id: item.id,
      sku: item.sku,
      name: name,
      title: name,
      titleFa: name,
      titleTr: titleTr,
      titleEn: titleEn,
      inquiryName: name,
      desc: desc,
      descFa: desc,
      note: [brand, sku, leafFa].filter(Boolean).join(' · '),
      brand: brand,
      leafFa: item.leafFa || item.leaf || '',
      image: item.image,
      imageAlt: name,
      quoteOnly: !hasUsd,
      priceUsd: hasUsd ? usdPrice : undefined,
      currency: hasUsd ? 'USD' : undefined,
      iranDelivery: hasUsd,
      availability: avail,
      specs: categoryFa || leafFa || brand,
      specList: specList,
      features: Array.isArray(item.featuresFa) && item.featuresFa.length ? item.featuresFa.slice(0, 4) : featuresFromTitle(name)
    };
  }

  const extraCats = {
    casual: {
      id: 'casual',
      family: 'moto',
      title: 'لباس روزمره موتور',
      titleEn: 'Casual rider wear',
      titleTr: 'Casual giyim',
      icon: 'bag',
      image: CAT + 'motorcycle-accessory.svg',
      imageAlt: 'تیشرت، سویشرت و کلاه کپ موتورسوار',
      desc: 'تیشرت، سویشرت، کلاه کپ و لباس روزمره کنار تجهیزات موتور.',
      descTr: 'Tişört, sweatshirt, şapka ve günlük sürücü giyimi.',
      descEn: 'T-shirts, hoodies, caps and casual rider wear.',
      series: []
    }
  };

  function applyImported(data) {
    if (!data || !Array.isArray(data.categories)) return;
    const byId = {};
    categories.forEach(function (c) { byId[c.id] = c; });
    data.categories.forEach(function (inc) {
      if (!byId[inc.id] && extraCats[inc.id]) {
        categories.push(extraCats[inc.id]);
        byId[inc.id] = extraCats[inc.id];
      }
      const cat = byId[inc.id];
      if (!cat || cat.family === 'car') return;
      cat.series = (inc.series || []).map(expandImported);
    });
    const importedHighlights = (data.highlights || []).map(function (h) {
      const usdPrice = Number(h.priceUsd);
      const hasUsd = h.priceUsd != null && h.priceUsd !== '' && !Number.isNaN(usdPrice);
      return {
        id: h.id,
        title: h.title,
        titleTr: h.titleTr,
        titleEn: h.titleEn || h.titleTr,
        desc: h.descFa || h.title,
        inquiryName: h.title,
        image: h.image,
        imageAlt: h.title,
        badge: h.badge,
        quoteOnly: !hasUsd,
        priceUsd: hasUsd ? usdPrice : undefined,
        iranDelivery: hasUsd
      };
    });
    window.AUTO_MOTO_CATALOG.highlights = importedHighlights.slice(0, 6);
    if (window.AUTO_MOTO_CATALOG.brand && window.AUTO_MOTO_CATALOG.brand.heroStats) {
      window.AUTO_MOTO_CATALOG.brand.heroStats[0].value = String((data.productCount || 0) + products.length) + '+';
    }
    window.AUTO_MOTO_CATALOG.brands = data.brands || [];
    window.AUTO_MOTO_CATALOG.quoteEmptyPrices = true;
    window.AUTO_MOTO_CATALOG.imported = true;
    window.AUTO_MOTO_CATALOG.catalogLoading = false;
    window.AUTO_MOTO_CATALOG._rev = (window.AUTO_MOTO_CATALOG._rev || 0) + 1;
  }

  window.AUTO_MOTO_CATALOG_READY = fetch('/assets/data/auto-moto/catalog.json?v=20260919d')
    .then(function (res) {
      if (!res.ok) throw new Error('catalog ' + res.status);
      return res.json();
    })
    .then(applyImported)
    .catch(function () {
      window.AUTO_MOTO_CATALOG.imported = false;
      window.AUTO_MOTO_CATALOG.catalogLoading = false;
      window.AUTO_MOTO_CATALOG._rev = (window.AUTO_MOTO_CATALOG._rev || 0) + 1;
    });
})();
