/**
 * Brake parts on the car-parts page.
 * Prices in the catalog are already USD = (TRY / 48) * 1.20.
 */
(function () {
  const WA = 'https://wa.me/989305880135';
  const PAGE_SIZE = 12;

  const COPY = {
    fa: {
      search: 'برند، مدل، OEM یا کد قطعه را جستجو کنید',
      parts: 'سیستم ترمز',
      chooseBrand: 'برند را انتخاب کنید',
      vehicleBrand: 'برند خودرو',
      models: 'مدل‌های خودرو',
      pickBrand: 'برای دیدن مدل‌ها یک برند را انتخاب کنید',
      allModels: 'همه مدل‌ها',
      code: 'جستجو با کد قطعه',
      brandFind: 'جستجوی برند',
      modelFind: 'جستجوی مدل',
      products: 'قطعه',
      empty: 'برای این انتخاب، قطعه‌ای با قیمت ثبت‌شده پیدا نشد. کد قطعه را جستجو کنید یا در واتساپ بفرستید.',
      in: 'موجود',
      out: 'ناموجود — استعلام',
      wa: 'پرسش در واتساپ',
      back: 'بازگشت به فهرست',
      kicker: 'بر اساس تطبیق خودرو',
      related: 'قطعات سازگار',
      original: 'قطعه نو با کد سازنده',
      brands: 'برند',
      loading: 'در حال چیدن کاتالوگ ترمز…',
      error: 'کاتالوگ باز نشد. دوباره تلاش کنید.',
      retry: 'تلاش دوباره',
      touch: 'ارتباط',
      sort: 'مرتب‌سازی: موجودها اول',
      results: 'نتیجه جستجو',
      desk: 'لنت و دیسک ترمز',
      assureTitle: 'ضمانت تامین فروشگاه ترمز',
      assure: 'دیسک و لنت با کد سازنده. قیمت دلاری تحویل ایران است و موجودی نهایی قبل از ارسال تأیید می‌شود.'
    },
    tr: {
      search: 'Marka, model, OEM veya parça kodu ara',
      parts: 'Fren sistemleri',
      chooseBrand: 'Markanı seç',
      vehicleBrand: 'Araç markası',
      models: 'Araç modelleri',
      pickBrand: 'Modeller için bir marka seçin',
      allModels: 'Tüm modeller',
      code: 'Parça koduyla ara',
      brandFind: 'Marka ara',
      modelFind: 'Model ara',
      products: 'ürün',
      empty: 'Bu seçim için fiyatlı parça yok. Kodu arayın veya WhatsApp’tan yazın.',
      in: 'Stokta',
      out: 'Stokta yok — teklif',
      wa: 'WhatsApp ile sor',
      back: 'Listeye dön',
      kicker: 'Araç eşleşmesine göre',
      related: 'Uyumlu parçalar',
      original: 'Üretici kodlu yeni parça',
      brands: 'marka',
      loading: 'Fren kataloğu hazırlanıyor…',
      error: 'Katalog açılmadı. Tekrar deneyin.',
      retry: 'Tekrar dene',
      touch: 'İletişime geç',
      sort: 'Sırala: stoktakiler',
      results: 'Arama sonucu',
      desk: 'Fren balatası ve diski',
      assureTitle: 'Fren tedarik güvencesi',
      assure: 'Disk ve balata üretici koduyla. Kart fiyatı İran teslim USD; stok sevkiyattan önce doğrulanır.'
    },
    en: {
      search: 'Search brand, model, OEM or part code',
      parts: 'Brake systems',
      chooseBrand: 'Choose a brand',
      vehicleBrand: 'Vehicle brand',
      models: 'Vehicle models',
      pickBrand: 'Choose a brand to see models',
      allModels: 'All models',
      code: 'Search by part code',
      brandFind: 'Find a brand',
      modelFind: 'Find a model',
      products: 'parts',
      empty: 'No priced part for this filter. Search a code or ask on WhatsApp.',
      in: 'In stock',
      out: 'Out of stock — ask',
      wa: 'Ask on WhatsApp',
      back: 'Back to the list',
      kicker: 'Matched to the vehicle',
      related: 'Compatible parts',
      original: 'New part with maker code',
      brands: 'brands',
      loading: 'Loading the brake catalog…',
      error: 'The catalog did not open. Try again.',
      retry: 'Try again',
      touch: 'Get in touch',
      sort: 'Sort: in stock first',
      results: 'Search results',
      desk: 'Brake pads and discs',
      assureTitle: 'Brake shop supply guarantee',
      assure: 'Discs and pads with the maker code. Card price is Iran-delivery USD; stock is confirmed before dispatch.'
    },
    ru: {
      search: 'Марка, модель, OEM или код детали',
      parts: 'Тормозная система',
      chooseBrand: 'Выберите марку',
      vehicleBrand: 'Марка авто',
      models: 'Модели',
      pickBrand: 'Сначала выберите марку',
      allModels: 'Все модели',
      code: 'Поиск по коду',
      brandFind: 'Найти марку',
      modelFind: 'Найти модель',
      products: 'деталей',
      empty: 'Для этого фильтра нет детали с ценой. Напишите код в WhatsApp.',
      in: 'В наличии',
      out: 'Нет в наличии',
      wa: 'Спросить в WhatsApp',
      back: 'К списку',
      kicker: 'По совпадению авто',
      related: 'Подходящие детали',
      original: 'Новая деталь с кодом производителя',
      brands: 'марок',
      loading: 'Каталог тормозов загружается…',
      error: 'Каталог не открылся. Повторите.',
      retry: 'Ещё раз',
      touch: 'Написать',
      sort: 'Сначала в наличии',
      results: 'Результаты',
      desk: 'Колодки и диски',
      assureTitle: 'Гарантия поставки тормозов',
      assure: 'Диски и колодки с кодом производителя. Цена в долларах с доставкой в Иран; наличие уточняется до отправки.'
    },
    ar: {
      search: 'ابحث بالماركة أو الموديل أو رمز القطعة',
      parts: 'نظام الفرامل',
      chooseBrand: 'اختر الماركة',
      vehicleBrand: 'ماركة السيارة',
      models: 'الموديلات',
      pickBrand: 'اختر ماركة لعرض الموديلات',
      allModels: 'كل الموديلات',
      code: 'بحث برمز القطعة',
      brandFind: 'ابحث عن الماركة',
      modelFind: 'ابحث عن الموديل',
      products: 'قطعة',
      empty: 'لا توجد قطعة مسعّرة لهذا الاختيار. أرسل الرمز على واتساب.',
      in: 'متوفر',
      out: 'غير متوفر — استعلام',
      wa: 'اسأل عبر واتساب',
      back: 'العودة للقائمة',
      kicker: 'حسب توافق السيارة',
      related: 'قطع متوافقة',
      original: 'قطعة جديدة برمز المصنع',
      brands: 'ماركة',
      loading: 'جاري تجهيز كتالوج الفرامل…',
      error: 'تعذر فتح الكتالوج. أعد المحاولة.',
      retry: 'إعادة',
      touch: 'تواصل',
      sort: 'المتوفر أولاً',
      results: 'نتائج البحث',
      desk: 'فحمات وأقراص الفرامل',
      assureTitle: 'ضمان توريد متجر الفرامل',
      assure: 'أقراص وفحمات برمز المصنع. السعر بالدولار لتسليم إيران، والتوفر يُؤكد قبل الإرسال.'
    }
  };

  const PARTS = {
    fa: [['all', '۰۰', 'همه قطعات ترمز'], ['discs', '۰۱', 'دیسک ترمز'], ['pads', '۰۲', 'لنت ترمز'], ['performance', '۰۳', 'ترمز عملکردی'], ['fluids', '۰۴', 'روغن ترمز']],
    tr: [['all', '00', 'Tüm fren parçaları'], ['discs', '01', 'Fren diskleri'], ['pads', '02', 'Fren balataları'], ['performance', '03', 'Performans frenleri'], ['fluids', '04', 'Fren sıvıları']],
    en: [['all', '00', 'All brake parts'], ['discs', '01', 'Brake discs'], ['pads', '02', 'Brake pads'], ['performance', '03', 'Performance brakes'], ['fluids', '04', 'Brake fluid']],
    ru: [['all', '00', 'Все тормозные детали'], ['discs', '01', 'Диски'], ['pads', '02', 'Колодки'], ['performance', '03', 'Спорт'], ['fluids', '04', 'Жидкость']],
    ar: [['all', '00', 'كل قطع الفرامل'], ['discs', '01', 'أقراص'], ['pads', '02', 'فحمات'], ['performance', '03', 'أداء'], ['fluids', '04', 'زيت الفرامل']]
  };

  const MENU = {
    fa: { open: 'سیستم ترمز', close: 'بستن' },
    tr: { open: 'Fren sistemleri', close: 'Kapat' },
    en: { open: 'Brake systems', close: 'Close' },
    ru: { open: 'Тормоза', close: 'Закрыть' },
    ar: { open: 'نظام الفرامل', close: 'إغلاق' }
  };
  const PART_NAME = {};
  Object.keys(PARTS).forEach((loc) => {
    PART_NAME[loc] = Object.fromEntries(PARTS[loc].map((row) => [row[0], row[2]]));
  });

  let catalog = null;
  let booted = false;
  let loading = false;
  let menuOpen = false;
  let brandDragged = false;
  let brandQuery = '';
  let modelQuery = '';
  let focusField = '';

  function loc() {
    const code = String(document.documentElement.lang || 'fa').slice(0, 2).toLowerCase();
    return COPY[code] ? code : 'fa';
  }
  function t() { return COPY[loc()]; }

  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  const BRAND_LOGO = new Set(['bmw', 'mercedes', 'opel', 'volkswagen', 'audi', 'peugeot', 'renault', 'ford', 'citroen', 'toyota', 'land-rover', 'hyundai', 'kia', 'honda', 'chevrolet', 'fiat', 'skoda', 'seat', 'nissan', 'porsche', 'mazda', 'mini', 'dacia', 'jeep', 'mitsubishi', 'subaru', 'suzuki', 'alfa-romeo', 'jaguar', 'infiniti', 'ds', 'smart', 'tesla', 'volvo', 'aston-martin', 'maserati', 'ferrari']);

  function brandLogo(id) {
    if (!BRAND_LOGO.has(id)) return '';
    return '<img class="brake-logo" alt="" aria-hidden="true" width="28" height="20" loading="lazy" src="/assets/images/vehicle-brands/' + esc(id) + '.svg">';
  }

  function money(amount) {
    return '$' + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function readState() {
    const q = new URLSearchParams(String(location.hash || '').replace(/^#/, ''));
    const page = Math.max(1, Number(q.get('page') || 1) || 1);
    return {
      part: q.get('part') || 'all',
      brand: q.get('brand') || '',
      model: q.get('model') || '',
      q: q.get('q') || '',
      product: q.get('product') || '',
      page: page
    };
  }

  function writeState(next, push) {
    const q = new URLSearchParams();
    if (next.part && next.part !== 'all') q.set('part', next.part);
    if (next.brand) q.set('brand', next.brand);
    if (next.model) q.set('model', next.model);
    if (next.q) q.set('q', next.q);
    if (next.product) q.set('product', next.product);
    if (next.page && next.page > 1) q.set('page', String(next.page));
    const hash = q.toString();
    const url = location.pathname + location.search + (hash ? '#' + hash : '');
    if (push) history.pushState(null, '', url);
    else history.replaceState(null, '', url);
    paint();
  }

  function brandById(id) {
    return (catalog.brands || []).find((b) => b.id === id) || null;
  }

  const FIT = {
    bmw: {
      '1 serisi': ['e81', 'e82', 'e87', 'e88', 'f20', 'f21', 'f40', 'f52'],
      '2 serisi': ['f22', 'f23', 'f44', 'f45', 'f46', 'g42', 'f87', 'g87'],
      '3 serisi': ['e30', 'e36', 'e46', 'e90', 'e91', 'e92', 'e93', 'f30', 'f31', 'f34', 'f35', 'g20', 'g21', 'f80', 'g80', 'g81'],
      '4 serisi': ['f32', 'f33', 'f36', 'g22', 'g23', 'g26', 'f82', 'f83', 'g82', 'g83'],
      '5 serisi': ['e34', 'e39', 'e60', 'e61', 'f07', 'f10', 'f11', 'g30', 'g31', 'g60'],
      '6 serisi': ['e63', 'e64', 'f06', 'f12', 'f13', 'g32'],
      '7 serisi': ['e38', 'e65', 'e66', 'f01', 'f02', 'g11', 'g12'],
      '8 serisi': ['e31', 'g14', 'g15', 'g16'],
      x1: ['e84', 'f48', 'u11'],
      x2: ['f39', 'u10'],
      x3: ['e83', 'f25', 'g01'],
      x4: ['f26', 'g02'],
      x5: ['e53', 'e70', 'f15', 'g05'],
      x6: ['e71', 'e72', 'f16', 'g06'],
      x7: ['g07'],
      xm: ['g09'],
      z4: ['e85', 'e86', 'e89', 'g29'],
      i3: ['i01'],
      i8: ['i12', 'i15'],
      ix: ['i20']
    },
    mercedes: {
      'a serisi': ['w176', 'w177', 'v177'],
      'b serisi': ['w246', 'w247'],
      'c serisi': ['w202', 'w203', 'w204', 'w205', 'w206', 's203', 's204', 's205'],
      'e serisi': ['w210', 'w211', 'w212', 'w213', 's211', 's212', 's213'],
      's serisi': ['w220', 'w221', 'w222', 'w223'],
      cla: ['c117', 'c118'],
      cls: ['c218', 'c219', 'c257'],
      gla: ['x156', 'h247'],
      glc: ['x253', 'c253'],
      gle: ['w166', 'c292', 'v167'],
      glk: ['x204'],
      ml: ['w163', 'w164']
    }
  };

  function modelNeedle(model, brandId) {
    const brand = brandById(brandId);
    const words = new Set([brandId, brand && brand.name, brand && brand.id]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase()));
    let name = String(model.name || '').toLowerCase();
    words.forEach((word) => { name = name.split(word).join(' '); });
    return name.replace(/\s+/g, ' ').trim();
  }

  function hasNeedle(hay, token) {
    if (!token) return false;
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(^|[^a-z0-9])' + escaped + '([^a-z0-9]|$)').test(hay);
  }

  function matchesModel(item, model) {
    if (!model) return true;
    const hay = (item.title + ' ' + item.id).toLowerCase();
    const needle = modelNeedle(model, item.brand);
    if (needle && hasNeedle(hay, needle)) return true;
    const alias = { '2 serisi': ['m2'], '3 serisi': ['m3'], '4 serisi': ['m4'], '5 serisi': ['m5'], '6 serisi': ['m6'] };
    const extra = item.brand === 'bmw' ? (alias[needle] || []) : [];
    if (extra.some((token) => hasNeedle(hay, token))) return true;
    const codes = (FIT[item.brand] && FIT[item.brand][needle]) || [];
    if (!codes.length) return false;
    const found = hay.match(/[a-z]\d{2,3}/g) || [];
    return codes.some((code) => found.indexOf(code) !== -1);
  }

  function filtered(state) {
    const query = state.q.trim().toLowerCase();
    const model = state.model && state.brand
      ? ((brandById(state.brand) || {}).models || []).find((m) => m.id === state.model)
      : null;
    return (catalog.products || []).filter((item) => {
      if (state.part !== 'all' && item.part !== state.part) return false;
      if (state.brand && item.brand !== state.brand) return false;
      if (model && !matchesModel(item, model)) return false;
      if (!query) return true;
      const hay = [item.title, item.mpn, item.sku, item.maker, item.id].join(' ').toLowerCase();
      return hay.includes(query);
    });
  }

  function art(part) {
    if (part === 'pads') {
      return '<svg viewBox="0 0 120 80" aria-hidden="true"><rect x="8" y="18" width="104" height="44" rx="8" fill="none" stroke="#222" stroke-width="3"/><path d="M20 40h80M28 28h64M28 52h64" stroke="#ef3b42" stroke-width="3"/></svg>';
    }
    if (part === 'fluids') {
      return '<svg viewBox="0 0 80 110" aria-hidden="true"><path d="M28 16h24l8 18v58a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V34z" fill="none" stroke="#222" stroke-width="3"/><path d="M24 58h32" stroke="#ef3b42" stroke-width="3"/></svg>';
    }
    return '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="46" fill="none" stroke="#222" stroke-width="8"/><circle cx="60" cy="60" r="16" fill="none" stroke="#ef3b42" stroke-width="6"/><path d="M60 14v18M60 88v18M14 60h18M88 60h18" stroke="#bbb" stroke-width="4"/></svg>';
  }

  function carIcon() {
    return '<svg viewBox="0 0 80 36" aria-hidden="true"><path d="M6 22c2-7 8-11 16-12l7-5h20l9 5c7 1 12 5 16 12" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M22 10l7 8h24l-5-8" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M8 22h64" stroke="#fff" stroke-width="1.5"/><circle cx="22" cy="26" r="4.2" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="58" cy="26" r="4.2" fill="none" stroke="#fff" stroke-width="1.4"/></svg>';
  }

  function waLink(item) {
    const text = t().wa + '\n' + item.title + '\n' + (item.mpn || item.sku || '') + '\n' + money(item.priceUsd);
    return WA + '?text=' + encodeURIComponent(text);
  }

  function paint() {
    const root = document.getElementById('frenDesk');
    if (!root || !catalog) return;
    const c = t();
    const state = readState();
    const brand = brandById(state.brand);
    const items = filtered(state);
    const pages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const page = Math.min(state.page, pages);
    const slice = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const open = (catalog.products || []).find((item) => item.id === state.product) || null;
    const parts = PARTS[loc()];
    const heading = open ? open.title : (state.q ? c.results : (brand ? brand.name + ' — ' + (PART_NAME[loc()][state.part] || c.desk) : c.desk));

    const pills = (catalog.brands || []).map((b) =>
      '<button type="button" class="brake-pill' + (state.brand === b.id ? ' is-on' : '') + '" data-brand="' + esc(b.id) + '">' + (brandLogo(b.id) || '<span class="brake-pill__mark" aria-hidden="true">' + esc(b.name.slice(0, 1)) + '</span>') + '<span>' + esc(b.name) + '</span></button>'
    ).join('');

    const partBtns = parts.map((row) =>
      '<li><button type="button" class="' + (state.part === row[0] ? 'is-on' : '') + '" data-part="' + esc(row[0]) + '"><em>' + esc(row[1]) + '</em><span>' + esc(row[2]) + '</span></button></li>'
    ).join('');

    const qBrand = brandQuery.trim().toLowerCase();
    const qModel = modelQuery.trim().toLowerCase();
    const brandRows = (catalog.brands || []).map((b) => {
      const n = (catalog.products || []).filter((item) => item.brand === b.id && (state.part === 'all' || item.part === state.part)).length;
      return { b: b, n: n };
    }).filter((row) => !qBrand || row.b.name.toLowerCase().indexOf(qBrand) !== -1 || row.b.id.indexOf(qBrand) !== -1);
    brandRows.sort((a, b) => (b.n > 0) - (a.n > 0));
    const tiles = brandRows.map((row) => {
      const b = row.b;
      return '<button type="button" class="brake-tile' + (state.brand === b.id ? ' is-on' : '') + (row.n ? '' : ' is-empty') + '" data-brand="' + esc(b.id) + '">' +
        (brandLogo(b.id) || '<span aria-hidden="true">' + esc(b.name.slice(0, 2)) + '</span>') +
        '<strong>' + esc(b.name) + '</strong><small>' + row.n + '</small></button>';
    }).join('');

    const modelRows = brand
      ? (brand.models || []).map((m) => {
        const n = (catalog.products || []).filter((item) => item.brand === brand.id && (state.part === 'all' || item.part === state.part) && matchesModel(item, m)).length;
        return { m: m, n: n };
      }).filter((row) => !qModel || row.m.name.toLowerCase().indexOf(qModel) !== -1)
      : [];
    modelRows.sort((a, b) => (b.n > 0) - (a.n > 0) || a.m.name.localeCompare(b.m.name, 'tr'));
    const models = modelRows.map((row) => {
      const m = row.m;
      return '<button type="button" class="brake-model' + (state.model === m.id ? ' is-on' : '') + (row.n ? '' : ' is-empty') + '" data-model="' + esc(m.id) + '">' + carIcon() + '<span>' + esc(m.name) + '</span><small>' + row.n + ' ' + esc(c.products) + '</small></button>';
    }).join('');

    const cards = slice.map((item) => cardHtml(item)).join('');
    const pager = pages > 1
      ? '<div class="brake-pages">' + Array.from({ length: pages }, (_, i) =>
        '<button type="button" class="' + (i + 1 === page ? 'is-on' : '') + '" data-page="' + (i + 1) + '">' + (i + 1) + '</button>'
      ).join('') + '</div>'
      : '';

    const related = open
      ? (catalog.products || []).filter((item) => item.id !== open.id && item.brand === open.brand && item.part === open.part).slice(0, 4)
      : [];

    const menu = MENU[loc()] || MENU.fa;
    const finder =
      '<div class="fren-mega' + (menuOpen && !open ? ' is-open' : '') + '" id="frenMega">' +
        '<div class="fren-mega__head"><strong>' + esc(menu.open) + '</strong><button type="button" data-mega-close="1">' + esc(menu.close) + '</button></div>' +
        '<section class="brake-finder" aria-label="' + esc(c.parts) + '">' +
          '<div class="brake-col"><p class="brake-kicker">' + esc(c.parts) + '</p><ul class="brake-parts">' + partBtns + '</ul><button type="button" class="brake-code" data-focus-search="1">' + esc(c.code) + '</button></div>' +
          '<div class="brake-col"><div class="brake-col__top"><div><p class="brake-kicker">' + esc(c.vehicleBrand) + '</p><h2>' + esc(c.chooseBrand) + '</h2></div><span class="brake-count">' + (catalog.brands || []).length + ' ' + esc(c.brands) + '</span></div><input class="brake-finder-q" data-finder="brand" type="search" autocomplete="off" placeholder="' + esc(c.brandFind) + '" value="' + esc(brandQuery) + '"><div class="brake-grid">' + tiles + '</div></div>' +
          '<div class="brake-col"><div class="brake-col__top"><div><p class="brake-kicker">' + esc(c.models) + '</p><h2>' + esc(brand ? brand.name : c.pickBrand) + '</h2></div>' + (brand ? (brandLogo(brand.id) || '') : '') + '</div>' +
            (brand ? '<input class="brake-finder-q" data-finder="model" type="search" autocomplete="off" placeholder="' + esc(c.modelFind) + '" value="' + esc(modelQuery) + '"><div class="brake-models">' + models + '</div><button type="button" class="brake-all-models" data-clear-model="1">' + esc(c.allModels) + ' →</button>' : '<p class="brake-count">' + esc(c.pickBrand) + '</p>') +
          '</div>' +
        '</section>' +
      '</div>';

    root.innerHTML =
      '<div class="fren-stage">' +
        '<section class="brake-hero">' +
          '<video autoplay muted loop playsinline preload="metadata"><source src="' + esc(catalog.video || '/assets/video/porsche-997-gt3rs.mp4') + '" type="video/mp4"></video>' +
          '<div class="brake-hero__shade"></div>' +
          '<form class="brake-search" role="search">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
            '<label class="visually-hidden" for="brakeQ">' + esc(c.search) + '</label>' +
            '<input id="brakeQ" name="q" type="search" autocomplete="off" placeholder="' + esc(c.search) + '" value="' + esc(state.q) + '">' +
            '<button type="submit" aria-label="' + esc(c.search) + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></button>' +
          '</form>' +
          '<div class="brake-dots" aria-hidden="true"><span></span><span></span><span></span></div>' +
        '</section>' +
        '<nav class="brake-brands" aria-label="' + esc(c.vehicleBrand) + '">' +
          '<button type="button" class="brake-pill brake-pill--menu' + (menuOpen ? ' is-on' : '') + '" data-mega-toggle="1">' + esc(menu.open) + '</button>' +
          pills +
        '</nav>' +
        finder +
      '</div>' +
      '<section class="brake-desk" id="brakeDesk">' +
        (open ? detailHtml(open, related, c) :
          '<div class="brake-desk__bar"><div><h2>' + esc(heading) + '</h2><p>' + items.length + ' ' + esc(c.products) + '</p></div><span class="brake-sort">' + esc(c.sort) + '</span></div>' +
          '<div class="brake-results">' +
            (cards ? '<div class="brake-cards">' + cards + '</div>' + pager : '<p class="brake-empty">' + esc(c.empty) + '</p>') +
          '</div>') +
      '</section>';

    bind(root);
    if (focusField) {
      const kept = root.querySelector(focusField);
      if (kept) {
        kept.focus();
        const end = kept.value.length;
        try { kept.setSelectionRange(end, end); } catch (err) { /* search inputs */ }
      }
      focusField = '';
    }
    const video = root.querySelector('video');
    if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      video.removeAttribute('autoplay');
    }
  }

  function cardHtml(item) {
    const c = t();
    const brand = brandById(item.brand);
    return '<button type="button" class="brake-card" data-product="' + esc(item.id) + '">' +
      '<div class="brake-card__art">' + art(item.part) + '</div>' +
      '<div class="brake-card__meta"><span>' + esc(item.maker || '') + '</span><span>' + esc(brand ? brand.name : '') + '</span></div>' +
      '<h3>' + esc(item.title) + '</h3>' +
      '<p class="brake-card__stock' + (item.stock ? ' is-in' : '') + '">' + esc(item.stock ? c.in : c.out) + '</p>' +
      '<p class="brake-card__price" dir="ltr">' + esc(money(item.priceUsd)) + '</p>' +
    '</button>';
  }

  function detailHtml(item, related, c) {
    const brand = brandById(item.brand);
    const part = (PART_NAME[loc()] && PART_NAME[loc()][item.part]) || item.part;
    const cards = related.map((row) => cardHtml(row)).join('');
    const stock = item.stock ? c.in : c.out;
    const figure = art(item.part);
    return '<article class="shop-pdp brake-pdp">' +
      '<nav class="shop-pdp__crumb">' +
        '<button type="button" class="brake-back" data-close-product="1">' + esc(c.back) + '</button>' +
        (brand ? '<span>' + esc(brand.name) + '</span>' : '') +
        '<span>' + esc(part) + '</span>' +
        '<span>' + esc(item.title) + '</span>' +
      '</nav>' +
      '<div class="shop-pdp__gallery">' +
        '<div class="shop-pdp__thumbs"><button type="button" class="is-active" tabindex="-1">' + figure + '</button></div>' +
        '<div class="shop-pdp__stage">' + figure + '</div>' +
      '</div>' +
      '<div class="shop-pdp__buy">' +
        '<h1>' + esc(item.title) + '</h1>' +
        '<p class="shop-pdp__price" dir="ltr">' + esc(money(item.priceUsd)) + '</p>' +
        '<a class="shop-pdp__wa" href="' + waLink(item) + '" target="_blank" rel="noopener noreferrer">' + esc(c.wa) + '</a>' +
        '<div class="shop-pdp__badge">' + esc(c.original) + '</div>' +
        '<ul class="brake-specs">' +
          '<li>SKU: ' + esc(item.sku || '—') + '</li>' +
          '<li>MPN: ' + esc(item.mpn || '—') + '</li>' +
          '<li>' + esc(brand ? brand.name : '') + '</li>' +
          '<li>' + esc(part) + '</li>' +
          '<li>' + esc(item.maker || '') + '</li>' +
          '<li>' + esc(stock) + '</li>' +
        '</ul>' +
        '<div class="shop-pdp__assure"><h2>' + esc(c.assureTitle) + '</h2><p>' + esc(c.assure) + '</p></div>' +
      '</div>' +
      '<div class="shop-pdp__dock">' +
        '<div class="shop-pdp__dock-art">' + figure + '</div>' +
        '<div><strong>' + esc(item.title) + '</strong><small>' + esc(part) + '</small></div>' +
        '<p class="shop-pdp__dock-price" dir="ltr">' + esc(money(item.priceUsd)) + '</p>' +
        '<span class="shop-pdp__stock' + (item.stock ? ' is-in' : ' is-out') + '">' + esc(stock) + '</span>' +
      '</div>' +
      (cards ? '<div class="brake-related"><p>' + esc(c.kicker) + '</p><h3>' + esc(c.related) + '</h3><div class="brake-cards">' + cards + '</div></div>' : '') +
    '</article>';
  }

  function bind(root) {
    const brands = root.querySelector('.brake-brands');
    if (brands) {
      let drag = null;
      brands.addEventListener('pointerdown', (event) => {
        drag = { x: event.clientX, left: brands.scrollLeft };
        brands.classList.add('is-grabbing');
      });
      brands.addEventListener('pointermove', (event) => {
        if (!drag) return;
        if (Math.abs(event.clientX - drag.x) > 8) brandDragged = true;
        brands.scrollLeft = drag.left - (event.clientX - drag.x);
      });
      const end = () => { drag = null; brands.classList.remove('is-grabbing'); };
      brands.addEventListener('pointerup', end);
      brands.addEventListener('pointerleave', end);
    }

    root.querySelectorAll('[data-brand]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (brandDragged) { brandDragged = false; return; }
        menuOpen = true;
        modelQuery = '';
        const state = readState();
        const id = btn.getAttribute('data-brand');
        writeState({ part: state.part, brand: id, model: '', q: state.q, product: '', page: 1 }, true);
      });
    });
    root.querySelectorAll('[data-part]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const state = readState();
        writeState({ ...state, part: btn.getAttribute('data-part'), product: '', page: 1 }, true);
      });
    });
    root.querySelectorAll('[data-model]').forEach((btn) => {
      btn.addEventListener('click', () => {
        menuOpen = false;
        const state = readState();
        writeState({ ...state, model: btn.getAttribute('data-model'), product: '', page: 1 }, true);
        const desk = document.getElementById('brakeDesk');
        if (desk) desk.scrollIntoView({ block: 'start' });
      });
    });
    root.querySelectorAll('[data-product]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const state = readState();
        writeState({ ...state, product: btn.getAttribute('data-product'), page: 1 }, true);
        window.scrollTo({ top: 0 });
      });
    });
    root.querySelectorAll('[data-page]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const state = readState();
        writeState({ ...state, page: Number(btn.getAttribute('data-page')) }, true);
      });
    });
    const clear = root.querySelector('[data-clear-model]');
    if (clear) {
      clear.addEventListener('click', () => {
        const state = readState();
        writeState({ ...state, model: '', product: '', page: 1 }, true);
      });
    }
    const close = root.querySelector('[data-close-product]');
    if (close) {
      close.addEventListener('click', () => {
        const state = readState();
        writeState({ ...state, product: '' }, true);
      });
    }
    const focus = root.querySelector('[data-focus-search]');
    if (focus) {
      focus.addEventListener('click', () => {
        const input = document.getElementById('brakeQ');
        if (input) input.focus();
      });
    }
    const toggle = root.querySelector('[data-mega-toggle]');
    if (toggle) {
      toggle.addEventListener('click', () => {
        if (brandDragged) { brandDragged = false; return; }
        menuOpen = !menuOpen;
        paint();
      });
    }
    const megaClose = root.querySelector('[data-mega-close]');
    if (megaClose) {
      megaClose.addEventListener('click', () => {
        menuOpen = false;
        paint();
      });
    }
    const hero = root.querySelector('.brake-hero');
    if (hero) {
      hero.addEventListener('click', (event) => {
        if (event.target.closest('.brake-search') || !menuOpen) return;
        menuOpen = false;
        paint();
      });
    }
    root.querySelectorAll('[data-finder]').forEach((input) => {
      input.addEventListener('input', () => {
        const which = input.getAttribute('data-finder');
        if (which === 'brand') brandQuery = input.value;
        else modelQuery = input.value;
        focusField = which === 'brand' ? '[data-finder="brand"]' : '[data-finder="model"]';
        paint();
      });
    });
    const form = root.querySelector('.brake-search');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const state = readState();
        const value = (form.querySelector('input') || {}).value || '';
        writeState({ part: state.part, brand: '', model: '', q: value.trim(), product: '', page: 1 }, true);
        const desk = document.getElementById('brakeDesk');
        if (desk) desk.scrollIntoView({ block: 'start' });
      });
    }
  }

  function showError() {
    const root = document.getElementById('frenDesk');
    if (!root) return;
    const c = t();
    root.innerHTML = '<p class="brake-error">' + esc(c.error) + '<br><button type="button">' + esc(c.retry) + '</button></p>';
    root.querySelector('button').addEventListener('click', () => {
      catalog = null;
      boot();
    });
  }

  function boot() {
    const root = document.getElementById('frenDesk');
    if (!root || loading) return;
    if (catalog) { paint(); return; }
    loading = true;
    root.innerHTML = '<p class="brake-loading">' + esc(t().loading) + '</p>';
    fetch('/assets/data/brakes/catalog.json?v=20260918u')
      .then((res) => {
        if (!res.ok) throw new Error('catalog');
        return res.json();
      })
      .then((data) => {
        catalog = data;
        paint();
        if (typeof window.injectCarPartsSchema === 'function') window.injectCarPartsSchema();
      })
      .catch(showError)
      .finally(() => { loading = false; });
  }

  window.initCarPartsPage = function () {
    if (!document.getElementById('frenDesk')) return;
    if (!booted) {
      booted = true;
      window.addEventListener('hashchange', paint);
      window.addEventListener('popstate', paint);
    }
    if (!catalog) boot();
    else paint();
  };

  window.injectCarPartsSchema = function () {
    if (!catalog || document.getElementById('jsonld-brakes')) return;
    const top = (catalog.products || []).slice(0, 12).map((item) => ({
      '@type': 'Product',
      name: item.title,
      sku: item.sku || item.mpn || item.id,
      brand: item.maker || 'Bizdavar',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: String(item.priceUsd),
        availability: item.stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
      }
    }));
    const script = document.createElement('script');
    script.id = 'jsonld-brakes';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Bizdavar brake parts',
      itemListElement: top
    });
    document.head.appendChild(script);
  };
})();
