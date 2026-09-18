#!/usr/bin/env node
/**
 * Split Auto-Moto into a hub, a motorcycle shop, a car-parts shop,
 * and one static HTML page per motorcycle SKU (5 locales) for Google.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://bizdavar.com';
const VER = '20260919d';
const JSONL = 'C:/Users/ersan/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an-2/work/bizdavar_automoto_import/catalog/products.jsonl';

const LOCALES = [
  { code: 'fa', folder: 'pages', prefix: '', lang: 'fa', dir: 'rtl' },
  { code: 'tr', folder: 'tr/pages', prefix: '/tr', lang: 'tr', dir: 'ltr' },
  { code: 'en', folder: 'en/pages', prefix: '/en', lang: 'en', dir: 'ltr' },
  { code: 'ru', folder: 'ru/pages', prefix: '/ru', lang: 'ru', dir: 'ltr' },
  { code: 'ar', folder: 'ar/pages', prefix: '/ar', lang: 'ar', dir: 'rtl' }
];

const HUB = {
  fa: {
    title: 'اتو‌موتو | فروشگاه موتورسیکلت و قطعات خودرو | بیزدوار',
    desc: 'اتو‌موتو دو فروشگاه جدا دارد: تجهیزات موتورسیکلت با قیمت دلاری تحویل ایران، و قطعات خودرو فقط با استعلام. هر بخش فقط داده خودش را لود می‌کند.',
    h1: 'اتو‌موتو',
    lead: 'موتورسیکلت و قطعات خودرو قاطی نیستند. وارد همان بخشی شوید که لازم دارید.',
    motoTitle: 'فروشگاه موتورسیکلت',
    motoText: 'کلاه، کاپشن، دستکش، شلوار، بوت، اینترکام و محافظ. قیمت دلاری تحویل ایران.',
    motoGo: 'ورود به فروشگاه موتور',
    carTitle: 'فروشگاه قطعات خودرو',
    carText: 'لنت و دیسک ترمز با انتخاب برند و مدل. قیمت دلاری: لیر ÷ ۴۸ + ۲۰٪.',
    carGo: 'ورود به فروشگاه ترمز',
    chipsMoto: [['کلاه', 'motorcycle#auto-cat-helmets'], ['کاپشن', 'motorcycle#auto-cat-jackets'], ['بوت', 'motorcycle#auto-cat-boots']],
    chipsCar: [['لنت', 'car-parts#part=pads'], ['دیسک', 'car-parts#part=discs'], ['روغن', 'car-parts#part=fluids']]
  },
  tr: {
    title: 'Auto-Moto | motosiklet ve oto parçası | Bizdavar',
    desc: 'İki ayrı mağaza: motosiklet ekipmanı İran teslim USD, oto parçası yalnızca teklif. Her bölüm yalnız kendi verisini yükler.',
    h1: 'Auto-Moto',
    lead: 'Motosiklet ve oto parçası karışmaz. İhtiyacınız olan mağazaya girin.',
    motoTitle: 'Motosiklet mağazası',
    motoText: 'Kask, mont, eldiven, pantolon, bot ve interkom. Kart fiyatı İran teslim USD.',
    motoGo: 'Motosiklet mağazası',
    carTitle: 'Oto parçası mağazası',
    carText: 'Balata ve disk, marka ve model seçerek. Kart fiyatı USD: TL ÷ 48 + %20.',
    carGo: 'Fren mağazası',
    chipsMoto: [['Kask', 'motorcycle#auto-cat-helmets'], ['Mont', 'motorcycle#auto-cat-jackets'], ['Bot', 'motorcycle#auto-cat-boots']],
    chipsCar: [['Balata', 'car-parts#part=pads'], ['Disk', 'car-parts#part=discs'], ['Sıvı', 'car-parts#part=fluids']]
  },
  en: {
    title: 'Auto-Moto | motorcycle gear and car parts | Bizdavar',
    desc: 'Two separate shops: motorcycle gear with Iran-delivery USD, and car parts by inquiry only. Each section loads only its own data.',
    h1: 'Auto-Moto',
    lead: 'Motorcycle gear and car parts stay separate. Open only the shop you need.',
    motoTitle: 'Motorcycle shop',
    motoText: 'Helmets, jackets, gloves, pants, boots and intercoms. Iran-delivery USD on the card.',
    motoGo: 'Open motorcycle shop',
    carTitle: 'Car parts shop',
    carText: 'Pads and discs by brand and model. Card price is USD: TRY ÷ 48 + 20%.',
    carGo: 'Open brake parts',
    chipsMoto: [['Helmets', 'motorcycle#auto-cat-helmets'], ['Jackets', 'motorcycle#auto-cat-jackets'], ['Boots', 'motorcycle#auto-cat-boots']],
    chipsCar: [['Pads', 'car-parts#part=pads'], ['Discs', 'car-parts#part=discs'], ['Fluid', 'car-parts#part=fluids']]
  },
  ru: {
    title: 'Auto-Moto | мотоэкипировка и автозапчасти | Bizdavar',
    desc: 'Два отдельных магазина. Каждый раздел загружает только свои данные.',
    h1: 'Auto-Moto',
    lead: 'Мотоэкипировка и автозапчасти не смешиваются.',
    motoTitle: 'Мотоэкипировка',
    motoText: 'Шлемы, куртки, боты и интерком. Цена в долларах с доставкой в Иран.',
    motoGo: 'Магазин мотоэкипировки',
    carTitle: 'Автозапчасти',
    carText: 'Колодки и диски по марке и модели. Цена в USD: лира ÷ 48 + 20%.',
    carGo: 'Магазин тормозов',
    chipsMoto: [['Шлемы', 'motorcycle#auto-cat-helmets'], ['Куртки', 'motorcycle#auto-cat-jackets'], ['Боты', 'motorcycle#auto-cat-boots']],
    chipsCar: [['Колодки', 'car-parts#part=pads'], ['Диски', 'car-parts#part=discs'], ['Жидкость', 'car-parts#part=fluids']]
  },
  ar: {
    title: 'Auto-Moto | عتاد دراجة وقطع سيارات | Bizdavar',
    desc: 'متجران منفصلان. كل قسم يحمّل بياناته فقط.',
    h1: 'Auto-Moto',
    lead: 'عتاد الدراجة وقطع السيارات لا يختلطان.',
    motoTitle: 'متجر الدراجة',
    motoText: 'خوذات وسترات وبوت وإنتركم. السعر بالدولار لتسليم إيران.',
    motoGo: 'دخول متجر الدراجة',
    carTitle: 'قطع السيارات',
    carText: 'فحمات وأقراص حسب الماركة والموديل. السعر بالدولار: ليرة ÷ ٤٨ + ٢٠٪.',
    carGo: 'متجر الفرامل',
    chipsMoto: [['خوذة', 'motorcycle#auto-cat-helmets'], ['سترة', 'motorcycle#auto-cat-jackets'], ['بوت', 'motorcycle#auto-cat-boots']],
    chipsCar: [['فحمات', 'car-parts#part=pads'], ['أقراص', 'car-parts#part=discs'], ['زيت', 'car-parts#part=fluids']]
  }
};

const CAR_TITLE = {
  fa: 'خرید قطعات خودرو خارجی | لنت، فیلتر، آرم و رینگ | بیزدوار',
  tr: 'İthal oto parçası | balata, filtre, arma, jant | Bizdavar',
  en: 'Import car parts | pads, filters, emblems, rims | Bizdavar',
  ru: 'Импортные автозапчасти | колодки, фильтры, эмблемы | Bizdavar',
  ar: 'قطع سيارات مستوردة | فحمات وفلاتر وشعارات | Bizdavar'
};
const CAR_DESC = {
  fa: 'فروشگاه جدا برای لنت، فیلتر هوا و کابین، آرم و رینگ. قیمت روی کارت نیست.',
  tr: 'Motosiklet mağazasından ayrı oto parçası. Kartta fiyat yok.',
  en: 'A separate shop for pads, filters, emblems and rims. No price on the card.',
  ru: 'Отдельный магазин автозапчастей. Цены на карточке нет.',
  ar: 'متجر منفصل لقطع السيارات. لا سعر على البطاقة.'
};
const CAR_H1 = {
  fa: 'قطعات خودرو خارجی',
  tr: 'İthal oto parçası',
  en: 'Import car parts',
  ru: 'Импортные автозапчасти',
  ar: 'قطع سيارات مستوردة'
};

const COPY = {
  fa: { shop: 'فروشگاه موتورسیکلت', quote: 'استعلام', price: 'دلار · تحویل ایران', back: 'بازگشت به فروشگاه', sku: 'کد کالا', cat: 'دسته', brand: 'برند', type: 'نوع', inStock: 'موجود', outStock: 'ناموجود', ask: 'نیاز به استعلام', note: 'سایز، رنگ و مشخصات فنی سازنده در این صفحه ثبت نشده و قبل از سفارش جدا تأیید می‌شود.' },
  tr: { shop: 'Motosiklet mağazası', quote: 'Teklif', price: 'USD · İran teslim', back: 'Mağazaya dön', sku: 'Ürün kodu', cat: 'Kategori', brand: 'Marka', type: 'Tür', inStock: 'Stokta', outStock: 'Stok yok', ask: 'Teklif gerekir', note: 'Beden, renk ve üretici teknik özellikleri bu sayfada yoktur; siparişten önce ayrıca doğrulanır.' },
  en: { shop: 'Motorcycle shop', quote: 'Request a quote', price: 'USD · Iran delivery', back: 'Back to the shop', sku: 'Item code', cat: 'Category', brand: 'Brand', type: 'Type', inStock: 'In stock', outStock: 'Out of stock', ask: 'Quote only', note: 'Size, color and the maker’s technical specifications are not stored on this page and are confirmed before the order.' },
  ru: { shop: 'Мотоэкипировка', quote: 'Запросить цену', price: 'USD · доставка в Иран', back: 'Назад в магазин', sku: 'Код', cat: 'Категория', brand: 'Бренд', type: 'Тип', inStock: 'В наличии', outStock: 'Нет в наличии', ask: 'Только запрос', note: 'Размер, цвет и технические данные производителя на этой странице не указаны и уточняются до заказа.' },
  ar: { shop: 'متجر الدراجة', quote: 'استعلام', price: 'دولار · تسليم إيران', back: 'العودة للمتجر', sku: 'رمز المنتج', cat: 'الفئة', brand: 'العلامة', type: 'النوع', inStock: 'متوفر', outStock: 'غير متوفر', ask: 'استعلام فقط', note: 'المقاس واللون والمواصفات الفنية للمصنّع غير مسجلة هنا وتُؤكد قبل الطلب.' }
};

const CAT_NAME = {
  helmets: { fa: 'کلاه ایمنی', tr: 'Kask', en: 'Helmets', ru: 'Шлемы', ar: 'خوذات' },
  jackets: { fa: 'کاپشن', tr: 'Mont', en: 'Jackets', ru: 'Куртки', ar: 'سترات' },
  pants: { fa: 'شلوار', tr: 'Pantolon', en: 'Pants', ru: 'Штаны', ar: 'بناطيل' },
  gloves: { fa: 'دستکش', tr: 'Eldiven', en: 'Gloves', ru: 'Перчатки', ar: 'قفازات' },
  boots: { fa: 'بوت', tr: 'Bot', en: 'Boots', ru: 'Боты', ar: 'بوت' },
  protection: { fa: 'محافظ', tr: 'Koruma', en: 'Protection', ru: 'Защита', ar: 'حماية' },
  offroad: { fa: 'آفرود', tr: 'Off-road', en: 'Off-road', ru: 'Оффроуд', ar: 'أوف رود' },
  accessories: { fa: 'اکسسوری', tr: 'Aksesuar', en: 'Accessories', ru: 'Аксессуары', ar: 'إكسسوار' },
  'moto-parts': { fa: 'قطعات موتور', tr: 'Motosiklet parçası', en: 'Motorcycle parts', ru: 'Запчасти', ar: 'قطع الدراجة' },
  intercom: { fa: 'اینترکام', tr: 'Interkom', en: 'Intercom', ru: 'Интерком', ar: 'إنتركم' },
  casual: { fa: 'لباس روزمره', tr: 'Günlük giyim', en: 'Casual wear', ru: 'Повседневное', ar: 'ملابس يومية' }
};

function esc(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function chips(list) {
  return list.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join('');
}

function hubHtml(loc) {
  const t = HUB[loc.code];
  const canonical = `${BASE}${loc.prefix}/pages/auto-moto`;
  const alts = LOCALES.map(l => {
    const hl = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' }[l.code];
    return `  <link rel="alternate" hreflang="${hl}" href="${BASE}${l.prefix}/pages/auto-moto">`;
  }).join('\n');
  return `<!DOCTYPE html>
<html lang="${loc.lang}" dir="${loc.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(t.title)}</title>
  <meta name="description" content="${esc(t.desc)}">
  <link rel="canonical" href="${canonical}">
${alts}
  <link rel="alternate" hreflang="x-default" href="${BASE}/pages/auto-moto">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20260910c">
  <link rel="stylesheet" href="/assets/styles/auto-moto.css?v=${VER}">
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
</head>
<body data-page="auto-moto" data-depth="1">
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
  <main id="main-content" class="site-main">
    <section class="am-hub">
      <div class="container">
        <h1>${esc(t.h1)}</h1>
        <p class="am-hub__lead">${esc(t.lead)}</p>
        <div class="am-hub__grid">
          <article class="am-hub__card">
            <a class="am-hub__shot" href="motorcycle"><img src="/assets/images/auto-moto/logo-moto-shop.svg" width="880" height="300" alt="${esc(t.motoTitle)}"></a>
            <h2>${esc(t.motoTitle)}</h2>
            <p>${esc(t.motoText)}</p>
            <div class="am-hub__chips">${chips(t.chipsMoto)}</div>
            <a class="am-hub__go" href="motorcycle">${esc(t.motoGo)}</a>
          </article>
          <article class="am-hub__card am-hub__card--car">
            <a class="am-hub__shot" href="car-parts"><img src="/assets/images/auto-moto/logo-brake-shop.svg" width="880" height="300" alt="${esc(t.carTitle)}"></a>
            <h2>${esc(t.carTitle)}</h2>
            <p>${esc(t.carText)}</p>
            <div class="am-hub__chips">${chips(t.chipsCar)}</div>
            <a class="am-hub__go" href="car-parts">${esc(t.carGo)}</a>
          </article>
        </div>
      </div>
    </section>
  </main>
  <script src="/assets/scripts/site-loader.js?v=${VER}"></script>
  <script>
    bizdavarPageInit(function () {
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'autoMoto', url: 'auto-moto' }
      ]);
    });
  </script>
</body>
</html>
`;
}

function toMotorcycle(html) {
  return html
    .replace('data-page="auto-moto"', 'data-page="motorcycle"')
    .replaceAll('/pages/auto-moto', '/pages/motorcycle')
    .replaceAll("injectPageSeo('autoMoto'", "injectPageSeo('motorcycle'")
    .replaceAll("{ page: 'autoMoto'", "{ page: 'motorcycle'")
    .replaceAll('20260918s', VER)
    .replaceAll('20260918r', VER);
}

function toCar(html, loc) {
  let out = html
    .replace('data-page="auto-moto"', 'data-page="car-parts"')
    .replace('class="auto-page"', 'class="auto-page car-page"')
    .replaceAll('/pages/auto-moto', '/pages/car-parts')
    .replaceAll("injectPageSeo('autoMoto'", "injectPageSeo('carParts'")
    .replaceAll("{ page: 'autoMoto'", "{ page: 'carParts'")
    .replace('config/auto-moto-products.js', 'config/car-parts-products.js')
    .replace('auto-moto-page.js', 'car-parts-page.js')
    .replaceAll('initAutoMotoPage', 'initCarPartsPage')
    .replaceAll('injectAutoMotoSchema', 'injectCarPartsSchema')
    .replace('i18n/supply-catalog-i18n.js,i18n/auto-moto-catalog-i18n.js', 'i18n/supply-catalog-i18n.js,i18n/car-parts-catalog-i18n.js')
    .replace('/assets/styles/auto-moto.css?v=20260918s', '/assets/styles/auto-moto.css?v=' + VER + '">\n  <link rel="stylesheet" href="/assets/styles/car-parts.css?v=' + VER)
    .replaceAll('20260918r', VER)
    .replace(/<title>[^<]*<\/title>/, '<title>' + esc(CAR_TITLE[loc.code]) + '</title>')
    .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + esc(CAR_DESC[loc.code]) + '">')
    .replace(/<h1>[^<]*<\/h1>/, '<h1>' + esc(CAR_H1[loc.code]) + '</h1>');
  return out;
}

function hreflang(id) {
  const map = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' };
  const lines = LOCALES.map(l => `  <link rel="alternate" hreflang="${map[l.code]}" href="${BASE}${l.prefix}/pages/motorcycle/${id}">`);
  lines.push(`  <link rel="alternate" hreflang="x-default" href="${BASE}/pages/motorcycle/${id}">`);
  return lines.join('\n');
}

function localImage(src) {
  const raw = String(src || '').trim();
  if (!raw.startsWith('/media/catalog/automoto/')) return '';
  if (!fs.existsSync(path.join(ROOT, raw.slice(1)))) return '';
  return raw;
}

function loadGalleries() {
  const map = new Map();
  if (!fs.existsSync(JSONL)) return map;
  fs.readFileSync(JSONL, 'utf8').split(/\r?\n/).filter(Boolean).forEach((line) => {
    let row;
    try { row = JSON.parse(line); } catch (err) { return; }
    const sku = String(row.sku || '').toUpperCase();
    if (!sku) return;
    const seen = new Set();
    const images = [];
    const list = Array.isArray(row.gallery_images) ? row.gallery_images : [];
    list.forEach((src) => {
      const full = localImage(src);
      if (!full || seen.has(full)) return;
      seen.add(full);
      images.push(full);
    });
    if (images.length) map.set(sku, images);
  });
  return map;
}

function stockText(code, copy) {
  if (code === 'in_stock') return copy.inStock;
  if (code === 'out_of_stock') return copy.outStock;
  if (code === 'not_listed') return copy.ask;
  return '';
}

function specRows(loc, item, cat) {
  const copy = COPY[loc.code];
  const stockLabel = { fa: 'موجودی', tr: 'Stok', en: 'Stock', ru: 'Наличие', ar: 'التوفر' }[loc.code];
  const rows = [];
  if (item.brand) rows.push([copy.brand, item.brand]);
  if (cat) rows.push([copy.cat, cat]);
  if (loc.code === 'fa' && item.leafFa && item.leafFa !== cat) rows.push([copy.type, item.leafFa]);
  rows.push([copy.sku, item.sku || item.id]);
  const stock = stockText(item.availability, copy);
  if (stock) rows.push([stockLabel, stock]);
  return rows.filter((row) => row[0] && row[1]);
}

function productHtml(loc, item, catId, images) {
  const copy = COPY[loc.code];
  const title = loc.code === 'fa' ? item.titleFa : loc.code === 'tr' ? (item.titleTr || item.titleEn) : (item.titleEn || item.titleFa);
  const cat = (CAT_NAME[catId] && CAT_NAME[catId][loc.code]) || catId;
  const descBase = loc.code === 'fa' && item.descFa
    ? item.descFa
    : `${title}. ${copy.cat}: ${cat}. ${item.brand || ''}`.trim();
  const desc = String(descBase).replace(/\s+/g, ' ').slice(0, 280);
  const price = item.priceUsd != null && item.priceUsd !== '' ? `$${item.priceUsd} ${copy.price}` : copy.quote;
  const gallery = (images && images.length ? images : [localImage(item.image)]).filter(Boolean);
  const img = gallery[0] || '/assets/images/auto-moto/categories/motorcycle-helmet.svg';
  const url = `${BASE}${loc.prefix}/pages/motorcycle/${item.id}`;
  const shop = `${loc.prefix}/pages/motorcycle#auto-cat-${catId}`;
  const availability = item.availability === 'in_stock' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder';
  const imageUrls = (gallery.length ? gallery : [img]).map((src) => BASE + src);
  const ld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    sku: item.sku || item.id,
    image: imageUrls,
    description: desc,
    brand: { '@type': 'Brand', name: item.brand || 'Bizdavar' },
    offers: {
      '@type': 'Offer',
      url: url,
      priceCurrency: 'USD',
      ...(item.priceUsd != null && item.priceUsd !== '' ? { price: String(item.priceUsd) } : {}),
      availability: availability
    }
  }).replace(/</g, '\\u003c');
  const thumbs = gallery.length > 1
    ? `<div class="am-pdp__thumbs" role="list">${gallery.map((src, i) => `<button type="button" data-src="${esc(src)}" class="${i === 0 ? 'is-active' : ''}" aria-label="${esc(title)} ${i + 1}"><img src="${esc(src)}" alt="" width="72" height="72" loading="lazy" decoding="async"></button>`).join('')}</div>`
    : '';
  const specs = specRows(loc, item, cat).map((row) => `<div><dt>${esc(row[0])}</dt><dd>${esc(row[1])}</dd></div>`).join('');
  const facts = loc.code === 'fa' && Array.isArray(item.featuresFa) ? item.featuresFa.filter(Boolean) : [];
  const factHtml = facts.length
    ? `<h2 class="am-pdp__facts-title">مشخصات</h2><ul class="am-pdp__facts">${facts.map((line) => `<li>${esc(line)}</li>`).join('')}</ul>`
    : `<p>${esc(desc)}</p>`;
  return `<!DOCTYPE html>
<html lang="${loc.lang}" dir="${loc.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)} | ${esc(copy.shop)} | Bizdavar</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${url}">
${hreflang(item.id)}
  <meta property="og:type" content="product">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${BASE}${img}">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20260910c">
  <link rel="stylesheet" href="/assets/styles/auto-moto.css?v=${VER}">
  <script type="application/ld+json">${ld}</script>
</head>
<body data-page="motorcycle" data-depth="2" class="auto-page">
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
  <main id="main-content" class="site-main">
    <article class="section">
      <div class="container am-pdp">
        <div class="am-pdp__gallery" data-am-gallery>
          <img class="am-pdp__main" src="${esc(img)}" alt="${esc(title)}" width="640" height="640" onerror="this.onerror=null;this.src='/assets/images/auto-moto/categories/motorcycle-helmet.svg'">
          ${thumbs}
        </div>
        <div>
          <p><a href="${shop}">${esc(copy.back)}</a></p>
          <h1>${esc(title)}</h1>
          <p class="am-pdp__price"><strong>${esc(price)}</strong></p>
          <dl class="am-pdp__specs">${specs}</dl>
          ${factHtml}
          <p class="am-pdp__note">${esc(copy.note)}</p>
          <p><a class="btn btn--yellow" href="${loc.prefix}/pages/contact?service=industrial&amp;product=${esc(item.sku || item.id)}">${esc(copy.quote)}</a></p>
        </div>
      </div>
    </article>
  </main>
  <script>
    document.querySelectorAll('[data-am-gallery]').forEach(function (root) {
      var main = root.querySelector('.am-pdp__main');
      root.addEventListener('click', function (event) {
        var btn = event.target.closest('button[data-src]');
        if (!btn || !main) return;
        main.src = btn.getAttribute('data-src');
        root.querySelectorAll('button[data-src]').forEach(function (node) {
          node.classList.toggle('is-active', node === btn);
        });
      });
    });
  </script>
  <script src="/assets/scripts/site-loader.js?v=${VER}"></script>
</body>
</html>
`;
}

function writeShops() {
  for (const loc of LOCALES) {
    const srcPath = path.join(ROOT, loc.folder, 'auto-moto.html');
    const src = fs.readFileSync(srcPath, 'utf8');
    fs.writeFileSync(path.join(ROOT, loc.folder, 'motorcycle.html'), toMotorcycle(src));
    fs.writeFileSync(srcPath, hubHtml(loc));
    console.log('shops', loc.code);
  }
}

function writeProducts() {
  const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/data/auto-moto/catalog.json'), 'utf8'));
  const galleries = loadGalleries();
  console.log('galleries', galleries.size);
  const items = [];
  for (const cat of catalog.categories || []) {
    for (const series of cat.series || []) items.push({ item: series, catId: cat.id });
  }
  for (const loc of LOCALES) {
    fs.mkdirSync(path.join(ROOT, loc.folder, 'motorcycle'), { recursive: true });
  }
  const sm = fs.createWriteStream(path.join(ROOT, 'sitemap-motorcycle.xml'), { encoding: 'utf8' });
  sm.write('<?xml version="1.0" encoding="UTF-8"?>\n');
  sm.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n');
  let n = 0;
  for (const row of items) {
    const id = row.item.id;
    if (!id) continue;
    const images = galleries.get(String(row.item.sku || '').toUpperCase()) || [];
    for (const loc of LOCALES) {
      const file = path.join(ROOT, loc.folder, 'motorcycle', id + '.html');
      fs.writeFileSync(file, productHtml(loc, row.item, row.catId, images));
    }
    const links = LOCALES.map(l => {
      const hl = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' }[l.code];
      return `    <xhtml:link rel="alternate" hreflang="${hl}" href="${BASE}${l.prefix}/pages/motorcycle/${id}"/>`;
    }).concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/pages/motorcycle/${id}"/>`).join('\n');
    const blocks = LOCALES.map(l => `  <url>\n    <loc>${BASE}${l.prefix}/pages/motorcycle/${id}</loc>\n    <lastmod>2026-09-18</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n${links}\n  </url>`).join('\n');
    sm.write(blocks + '\n');
    n++;
    if (n % 500 === 0) console.log('products', n);
  }
  sm.end('</urlset>\n');
  console.log('product pages', n, 'x', LOCALES.length);
}

if (process.argv.includes('--shops')) writeShops();
writeProducts();
