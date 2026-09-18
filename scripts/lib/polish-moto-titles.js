/**
 * Helmet visors and spare parts were titled as full helmets.
 * Rewrite only those rows. Prices and SKUs stay untouched.
 */
const PART_LEAVES = new Set(['لوازم کلاه', 'قطعات یدکی کلاه']);

const FINISHES = [
  'آینه‌ای', 'دودی', 'شفاف', 'طلایی', 'آبی', 'نقره‌ای', 'مشکی', 'خاکستری',
  'روشن', 'تیره', 'مات', 'براق', 'قرمز', 'سبز', 'سفید', 'زرد', 'برنزی',
  'نارنجی', 'آنتراسیت', 'فوشیا', 'بنفش'
];

function squeeze(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function kindOf(title, leaf) {
  if (/پین‌لاک|پین\s*لاک/.test(title)) return 'پین‌لاک';
  if (/مکانیزم/.test(title)) return 'مکانیزم طلق';
  if (/لنز/.test(title)) return 'لنز کلاه';
  if (/تاج/.test(title)) return /تهویه/.test(title) ? 'تاج تهویه کلاه' : 'تاج کلاه';
  if (/پرده/.test(title) || /\bفک\b/.test(title) || /فک /.test(title)) return 'پرده فک کلاه';
  if (/آفتاب/.test(title) && /طلق/.test(title)) return 'طلق آفتابی کلاه';
  if (/طلق/.test(title)) return 'طلق کلاه';
  if (leaf === 'قطعات یدکی کلاه') return 'قطعه کلاه';
  return 'لوازم کلاه';
}

function finishesOf(title) {
  const found = [];
  FINISHES.forEach((word) => {
    if (title.indexOf(word) !== -1) found.push(word);
  });
  found.sort((a, b) => {
    if (a === 'آینه‌ای') return -1;
    if (b === 'آینه‌ای') return 1;
    if (a === 'روشن' || a === 'تیره') return -1;
    if (b === 'روشن' || b === 'تیره') return 1;
    return 0;
  });
  return found;
}

function modelOf(title) {
  let text = title
    .replace(/کلاه ایمنی موتورسیکلت/g, ' ')
    .replace(/کلاه ایمنی/g, ' ')
    .replace(/تمام‌صورت/g, ' ')
    .replace(/پین‌لاک|پین\s*لاک|مکانیزم|لنز|تاج|تهویه|پرده|فک|طلق|برای|آینه‌ای|آفتاب|کلاه/g, ' ');
  FINISHES.forEach((word) => {
    text = text.split(word).join(' ');
  });
  text = text.replace(/\b(Gold|Blue|Silver|Black|Clear|Smoke|Grey|Gray)\b/gi, ' ');
  text = text.replace(/\b(Uyumlu|Modelleri|Modeller|Modeli)\b/gi, ' ');
  text = text.replace(/(^|\s)با(?=\s|$)/g, ' ');
  return squeeze(text);
}

function polishTitleEn(title) {
  let text = squeeze(title);
  text = text.replace(/\bFor (Visor|Pinlock|Lens)\b/gi, '$1');
  ['Gold', 'Blue', 'Silver', 'Black', 'Clear', 'Smoke', 'Grey', 'Gray', 'White', 'Red'].forEach((color) => {
    const re = new RegExp('\\b' + color + '\\b', 'gi');
    const hits = text.match(re);
    if (!hits || hits.length < 2) return;
    let seen = 0;
    text = text.replace(re, () => (++seen < hits.length ? '' : color));
  });
  text = text.replace(/\bVisor (Clear|Smoke|Gold|Blue|Silver|Black|Grey|Gray)\b/gi, '$1 Visor');
  return squeeze(text);
}

function cleanTokens(title) {
  let text = title
    .replace(/کلاه ایمنی موتورسیکلت/g, ' ')
    .replace(/کلاه ایمنی/g, ' ')
    .replace(/ستı/g, 'ست')
    .replace(/آسترı/g, 'آستر')
    .replace(/Çıزمستانه/g, 'خروجی')
    .replace(/\bVida\b/gi, 'پیچ')
    .replace(/Yuvas[ıi]/gi, 'جای')
    .replace(/\bKapak\b/gi, 'درپوش')
    .replace(/Yanak Pedleri/gi, 'پد گونه')
    .replace(/\bPed\b/gi, 'پد')
    .replace(/\bTerek\b/gi, 'آفتاب‌گیر')
    .replace(/\bSeti\b|\bSet\b/gi, 'ست')
    .replace(/\bUyumlu\b/gi, ' ')
    .replace(/\bModelleri\b|\bModeller\b|\bModeli\b/gi, ' ')
    .replace(/\b(Gold|Blue|Silver|Black|Clear|Smoke|Grey|Gray)\b/gi, ' ');
  return squeeze(text);
}

function spareKind(title) {
  if (/پین‌لاک|پین\s*لاک/.test(title)) return 'پین‌لاک';
  if (/مکانیزم/.test(title)) return 'مکانیزم طلق';
  if (/طلق/.test(title)) return 'طلق کلاه';
  if (/آستر/.test(title)) return 'آستر داخلی';
  if (/پد/.test(title)) return 'پد داخلی';
  if (/پیچ/.test(title)) return 'پیچ کلاه';
  if (/درپوش/.test(title)) return 'درپوش کلاه';
  if (/خروجی|تهویه|تاج/.test(title)) return 'تهویه کلاه';
  if (/پرده|فک/.test(title)) return 'پرده فک کلاه';
  return '';
}

function finishItem(item, titleFa, categoryFa, leafFa) {
  const brand = item.brand ? 'برند ' + item.brand + '. ' : '';
  const typeLine = leafFa && leafFa !== categoryFa ? 'نوع ' + leafFa + '. ' : '';
  const descFa = squeeze(
    titleFa + '. در دستهٔ ' + categoryFa + ' کاتالوگ موتورسیکلت بیزداور. ' +
    brand + typeLine + 'سازگاری و موجودی قبل از سفارش با اطلاعات سازنده تطبیق داده می‌شود.'
  );
  return Object.assign({}, item, {
    titleFa,
    titleEn: polishTitleEn(item.titleEn || titleFa),
    categoryFa,
    leafFa,
    descFa
  });
}

function polishAccessory(item) {
  if (!item || !PART_LEAVES.has(item.leafFa)) return item;
  const group = item.leafFa;
  if (group === 'لوازم کلاه') {
    const raw = item.titleFa || '';
    const kind = kindOf(raw, group);
    const finishes = finishesOf(raw).filter((word) => kind.indexOf(word) === -1);
    const model = modelOf(raw);
    const titleFa = squeeze([kind, finishes.join(' '), model].filter(Boolean).join(' '));
    return finishItem(item, titleFa, group, kind);
  }
  const titleFa = cleanTokens(item.titleFa || '');
  const kind = spareKind(titleFa) || group;
  return finishItem(item, titleFa, group, kind);
}

module.exports = { polishAccessory, PART_LEAVES };
