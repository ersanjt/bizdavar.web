/**
 * Put motorcycle titles in Persian order:
 * نوع کالا، سپس برند و مدل، و رنگ در پایان.
 * Prices and SKUs stay untouched.
 */
function squeeze(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

const COMPOUNDS = [
  [/کمر\s+کیف/g, 'کیف کمری'],
  [/حمل\s+کیف/g, 'کیف حمل'],
  [/موبایل\s+کاور/g, 'کاور موبایل'],
  [/موبایل\s+نگهدارنده/g, 'نگهدارنده موبایل'],
  [/طلق\s+مکانیزم/g, 'مکانیزم طلق'],
  [/عقب\s+کیف/g, 'کیف عقب'],
  [/فرمان\s+کیف/g, 'کیف فرمان'],
  [/باک\s+کیف/g, 'کیف روی باک'],
  [/ابزار\s+کیف/g, 'کیف ابزار'],
  [/سفر\s+کیف/g, 'کیف سفر'],
  [/اسکوتر\s+کیف/g, 'کیف اسکوتر'],
  [/بغل\s+کیف/g, 'کیف بغل'],
  [/پا\s+کیف/g, 'کیف پا'],
  [/Tam\s+بدنه/g, 'تمام‌بدن'],
  [/\(\s*تمام‌بدن\s+محافظ\s*\)/g, 'تمام‌بدن']
];

const GENERIC_PREFIX = [
  'لوازم جانبی موتورسیکلت',
  'لوازم جانبی موتور',
  'تجهیزات محافظتی موتور',
  'تجهیزات محافظ موتور',
  'تجهیزات آفرود موتور',
  'تجهیزات آفرود',
  'پوشاک روزمره موتور',
  'قطعات موتورسیکلت'
];

const HEADS = [
  'نگهدارنده موبایل', 'تهویه کلاه', 'کلاه کپ', 'کلاه بافتنی', 'کلاه ایمنی',
  'کیف موتورسوار', 'کیف کمری', 'کیف حمل', 'کیف روی باک', 'کیف عقب', 'کیف فرمان',
  'کیف ابزار', 'کیف سفر', 'کیف اسکوتر', 'کیف بغل', 'کیف پا',
  'قطعات یدکی کلاه', 'لوازم اینترکام', 'لوازم کلاه', 'مکانیزم طلق', 'طلق کلاه',
  'محافظ زانو و آرنج', 'محافظ تمام‌بدن', 'محافظ کمر', 'محافظ گردن', 'محافظ سینه', 'محافظ زانو',
  'لباس زیر بالا', 'لباس زیر پایین', 'لباس زیر', 'روغن موتور و زنجیر',
  'دستگاه اینترکام', 'پد داخلی', 'کاور موتور', 'کاور موبایل', 'بارانی بالا', 'بارانی پایین',
  'قفل موتور', 'گردن‌پوش', 'پین‌لاک', 'اینترکام',
  'تیشرت', 'سویشرت', 'عینک', 'جرسی', 'کاپشن', 'دستکش', 'شلوار', 'جلیقه', 'سرهمی', 'بوت', 'کیف', 'طلق'
].sort((a, b) => b.length - a.length);

function startsWithPhrase(text, phrase) {
  return text === phrase || text.startsWith(phrase + ' ');
}

function endsWithPhrase(text, phrase) {
  return text === phrase || text.endsWith(' ' + phrase);
}

function stripPhrase(text, phrase) {
  if (!phrase) return squeeze(text);
  return squeeze(text.split(phrase).join(' '));
}

function dedupeAdjacent(text) {
  const out = [];
  squeeze(text).split(' ').forEach((part) => {
    if (out[out.length - 1] !== part) out.push(part);
  });
  return out.join(' ');
}

function removeOnce(text, phrase) {
  const at = text.indexOf(phrase);
  if (at < 0) return squeeze(text);
  return squeeze(text.slice(0, at) + ' ' + text.slice(at + phrase.length));
}

function pullHead(title, head) {
  if (!head) return title;
  if (title.includes('برای ' + head)) {
    const parts = title.split(' ');
    const at = parts.findIndex((part, i) => part === 'برای' && parts.slice(i + 1).join(' ').startsWith(head));
    let beside = '';
    if (at > 0) {
      const noun = [];
      let i = at - 1;
      while (i >= 0 && /^[\u0600-\u06FF‌]+$/.test(parts[i])) {
        noun.unshift(parts[i]);
        i -= 1;
      }
      beside = noun.join(' ');
      parts.splice(i + 1, at - i - 1 + 1 + head.split(' ').length);
      title = parts.join(' ');
    } else {
      title = title.replace('برای ' + head, '');
    }
    return squeeze(head + ' برای ' + beside + ' ' + title);
  }
  if (startsWithPhrase(title, head)) return title;
  let rest = title.includes(head) ? stripPhrase(title, head) : title;
  if (!title.includes(head)) {
    const short = HEADS.find((phrase) => head.startsWith(phrase + ' ') && rest.includes(phrase));
    if (short) rest = removeOnce(rest, short);
  }
  return squeeze(head + ' ' + rest);
}

const COLORS = new Set([
  'مشکی', 'سفید', 'قرمز', 'آبی', 'خاکستری', 'زرد', 'نارنجی', 'سبز', 'قهوه‌ای', 'صورتی',
  'طلایی', 'نقره‌ای', 'بنفش', 'بژ', 'سرمه‌ای', 'زرشکی', 'خاکی', 'فوشیا', 'آنتراسیت', 'برنزی',
  'دودی', 'شفاف'
]);
const FINISH = new Set(['مات', 'براق', 'تیره', 'روشن', 'متالیک']);

function parkColors(title) {
  const parts = title.split(' ');
  const latin = parts.findIndex((part) => /[A-Za-z0-9]/.test(part));
  if (latin <= 1) return title;
  const moved = [];
  const head = [];
  for (let i = 0; i < latin; i++) {
    const bare = parts[i].replace(/[\/،]+$/g, '');
    if (COLORS.has(bare) || FINISH.has(bare)) moved.push(parts[i]);
    else head.push(parts[i]);
  }
  if (!moved.length || !head.length) return title;
  return squeeze(head.join(' ') + ' ' + parts.slice(latin).join(' ') + ' ' + moved.join(' '));
}

function dropTrailingEcho(title) {
  const parts = title.split(' ');
  if (parts.length > 3 && parts[0] && parts[parts.length - 1] === parts[0]) parts.pop();
  let text = parts.join(' ');
  ['کاپشن', 'دستکش', 'بوت', 'شلوار', 'کیف', 'طلق', 'اینترکام', 'جرسی', 'عینک', 'کلاه'].forEach((word) => {
    if (text.startsWith(word + ' ') && text.endsWith(' ' + word)) {
      text = squeeze(text.slice(0, -word.length));
    }
  });
  return text;
}

function structureFaTitle(item) {
  const original = squeeze(item && item.titleFa);
  if (!original) return original;
  let title = original;
  COMPOUNDS.forEach(([re, repl]) => {
    title = title.replace(re, repl);
  });

  const generic = GENERIC_PREFIX.find((phrase) => startsWithPhrase(title, phrase));
  if (generic) title = squeeze(title.slice(generic.length));

  const leaf = squeeze(item.leafFa);
  let head = '';
  if (leaf && title.includes(leaf)) head = leaf;
  else if (leaf && generic) {
    const leafHead = HEADS.find((phrase) => phrase === leaf || leaf.startsWith(phrase + ' '));
    if (leafHead && title.includes(leafHead)) head = leaf;
    else head = HEADS.find((phrase) => endsWithPhrase(title, phrase) || title.includes(phrase)) || '';
  } else {
    head = HEADS.find((phrase) => endsWithPhrase(title, phrase) && !startsWithPhrase(title, phrase)) || '';
  }

  const ending = HEADS.find((phrase) => endsWithPhrase(title, phrase) && !startsWithPhrase(title, phrase));
  if (ending && (!head || /^(لوازم|قطعات)/.test(head))) {
    if (head && startsWithPhrase(title, head)) title = squeeze(title.slice(head.length));
    head = ending;
  }

  if (head) title = pullHead(title, head);
  title = parkColors(title);

  title = dropTrailingEcho(dedupeAdjacent(title));
  if (!/^[\u0600-\u06FF]/.test(title)) {
    if (leaf) title = squeeze(leaf + ' ' + title);
    else return original;
  }
  if (!/[\u0600-\u06FF]/.test(title) || title.length < 4) return original;
  const brand = squeeze(item.brand);
  if (brand && /[A-Za-z]/.test(brand) && original.includes(brand) && !title.includes(brand)) return original;
  return title;
}

function descFaForItem(item) {
  const title = squeeze(item.titleFa);
  const leaf = squeeze(item.leafFa);
  const brand = squeeze(item.brand);
  const where = leaf ? 'در گروه ' + leaf : 'در فروشگاه موتورسیکلت بیزدوار';
  const maker = brand ? '، از برند ' + brand : '';
  const price = item.priceUsd != null && item.priceUsd !== ''
    ? 'قیمت روی کارت ' + item.priceUsd + ' دلار است و برای تحویل بین‌المللی.'
    : 'قیمت این کالا روی کارت نیست و فقط با استعلام مشخص می‌شود.';
  return squeeze(title + '، ' + where + maker + '. ' + price + ' سایز، رنگ و موجودی پیش از سفارش تأیید می‌شود.');
}

module.exports = { structureFaTitle, descFaForItem, squeeze };
