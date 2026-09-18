/**
 * Rewrite Turkish product-fact lines into Persian.
 * A line that still contains Turkish is dropped, never published.
 */
const PHRASES = [
  ['İşlenmiş yağlı deri', 'چرم روغن‌کاری‌شده'],
  ['Çift yoğunluklu kaymaz taban', 'کفی دوچگالی ضدلغزش'],
  ['Plastik koruma bölgeleri', 'ناحیه محافظ پلاستیکی'],
  ['Plastik vites değiştirme bölgesi', 'بخش تعویض دنده پلاستیکی'],
  ['Genişliği ayarlanabilir velcro üst kapanış', 'بست ولکرو با عرض قابل تنظیم'],
  ['Değiştirilebilir ve ayarlanabilir plastik mandallar', 'قفل پلاستیکی قابل تعویض و تنظیم'],
  ['suya dayanıklı, nefes alabilir iç astar', 'آستر داخلی ضدآب و تنفس‌پذیر'],
  ['TPU plastik bilek ve incik korumalar', 'محافظ مچ و ساق از TPU'],
  ['Bilek desteği', 'تکیه‌گاه مچ'],
  ['Özel kırılmaz iç taban yapısı', 'ساختار کفی داخلی نشکن'],
  ['Ayağa baskı noktalarında hafızalı köpük pedler', 'پد فوم حافظه‌دار در نقاط فشار پا'],
  ['hava pompalama sistemi', 'سیستم پمپ هوا'],
  ['taban astarı', 'آستر کفی'],
  ['CE ONAYLI', 'تأیید CE'],
  ['İTALYAN MARKASI/AVRUPA ÜRETİMİ', 'برند ایتالیایی، تولید اروپا'],
  ['SUYA DAYANIKLI, NEFES ALABİLİR', 'ضدآب و تنفس‌پذیر'],
  ['Su ve rüzgar geçirmez', 'مقاوم در برابر آب و باد'],
  ['tam olarak su geçirmez bir ürün değildir', 'کاملاً ضدآب نیست'],
  ['kumaş suyu dışarıda tutar', 'پارچه آب را بیرون نگه می‌دارد'],
  ['ancak ürün', 'اما کالا'],
  ['EN1621-1 CE sertifikalı yumuşak koruyucular', 'محافظ نرم با گواهی CE استاندارد EN1621-1'],
  ['EN 1621-2 sırt koruma takılabilir', 'محافظ کمر EN 1621-2 قابل نصب است'],
  ['İsteğe bağlı', 'اختیاری'],
  ['Omuzlarda ve dirsekte', 'روی شانه و آرنج'],
  ['Sportif görünüm', 'ظاهر اسپرت'],
  ['yumuşak köpük', 'فوم نرم'],
  ['Reflektif hatlar', 'نوار شب‌نما'],
  ['Pantolon bağlantı fermuarı', 'زیپ اتصال به شلوار'],
  ['Yeni kontrast dikiş', 'دوخت متضاد'],
  ['Yeni inceltilmiş bilek yapısı ile kolay kullanım', 'ساختار باریک‌تر مچ برای استفاده آسان'],
  ['Atletik kesim', 'برش ورزشی'],
  ['Nefes alabilir, nem emici', 'تنفس‌پذیر و جذب‌کننده رطوبت'],
  ['Hızlı kurur', 'زودخشک'],
  ['4 yönlü esneme', 'کشسانی چهارجهته'],
  ['dış cep', 'جیب بیرونی'],
  ['İç cep', 'جیب داخلی'],
  ['Astar Mesh', 'آستر مش'],
  ['su geçirmez', 'ضدآب'],
  ['suya dayanıklı', 'ضدآب'],
  ['rüzgar geçirmez', 'ضدباد'],
  ['nefes alabilir', 'تنفس‌پذیر'],
  ['nem emici', 'جذب‌کننده رطوبت'],
  ['iç astar', 'آستر داخلی'],
  ['hafızalı köpük', 'فوم حافظه‌دار'],
  ['kaymaz taban', 'کفی ضدلغزش'],
  ['ayarlanabilir', 'قابل تنظیم'],
  ['değiştirilebilir', 'قابل تعویض'],
  ['çıkarılabilir', 'قابل جدا شدن'],
  ['yıkanabilir', 'قابل شستشو'],
  ['yumuşak koruyucu', 'محافظ نرم'],
  ['sertifikalı', 'دارای گواهی'],
  ['kontrast dikiş', 'دوخت متضاد'],
  ['yağlı deri', 'چرم روغنی'],
  ['işlenmiş deri', 'چرم پرداخت‌شده']
];

const WORDS = [
  ['kişisel koruyucu donanım', 'تجهیزات حفاظت فردی'],
  ['kask taşıma çantası', 'کیف حمل کلاه'],
  ['şeffaf vizör', 'طلق شفاف'],
  ['reflektif bölümler', 'بخش‌های شب‌نما'],
  ['hızlı manyetik bağlantı', 'اتصال مغناطیسی سریع'],
  ['vizör sileceği', 'برف‌پاک‌کن طلق'],
  ['kablosuz şarj', 'شارژ بی‌سیم'],
  ['çıkarılabilir', 'قابل جدا شدن'],
  ['ayarlanabilir', 'قابل تنظیم'],
  ['nefes alabilir', 'تنفس‌پذیر'],
  ['su geçirmez', 'ضدآب'],
  ['suya dayanıklı', 'ضدآب'],
  ['rüzgar geçirmez', 'ضدباد'],
  ['havalandırma', 'تهویه'],
  ['havalandırmalı', 'تهویه‌دار'],
  ['sertifikalı', 'دارای گواهی'],
  ['sertifikası', 'گواهی'],
  ['dayanıklılık', 'دوام'],
  ['dayanıklı', 'مقاوم'],
  ['korumaları', 'محافظ‌ها'],
  ['korumalar', 'محافظ‌ها'],
  ['koruması', 'محافظ'],
  ['koruma', 'محافظ'],
  ['fermuarlar', 'زیپ‌ها'],
  ['fermuarlı', 'زیپ‌دار'],
  ['fermuar', 'زیپ'],
  ['motosiklet', 'موتورسیکلت'],
  ['pantolon', 'شلوار'],
  ['eldiven', 'دستکش'],
  ['kask', 'کلاه'],
  ['mont', 'کاپشن'],
  ['bot', 'بوت'],
  ['vizör', 'طلق'],
  ['astar', 'آستر'],
  ['kumaş', 'پارچه'],
  ['malzeme', 'جنس'],
  ['tasarımı', 'طراحی'],
  ['tasarım', 'طراحی'],
  ['sistemi', 'سیستم'],
  ['sistem', 'سیستم'],
  ['yapısı', 'ساختار'],
  ['yapı', 'ساختار'],
  ['kabuk', 'پوسته'],
  ['konforu', 'راحتی'],
  ['konfor', 'راحتی'],
  ['performans', 'عملکرد'],
  ['esneklik', 'انعطاف'],
  ['esnek', 'منعطف'],
  ['ergonomik', 'ارگونومیک'],
  ['entegre', 'یکپارچه'],
  ['dahili', 'داخلی'],
  ['optimize', 'بهینه'],
  ['optimum', 'بهینه'],
  ['maksimum', 'حداکثر'],
  ['hafif', 'سبک'],
  ['yumuşak', 'نرم'],
  ['güvenli', 'ایمن'],
  ['gelişmiş', 'پیشرفته'],
  ['reflektif', 'شب‌نما'],
  ['manyetik', 'مغناطیسی'],
  ['kablosuz', 'بی‌سیم'],
  ['hızlı', 'سریع'],
  ['kolay', 'آسان'],
  ['özel', 'ویژه'],
  ['yeni', ''],
  ['dış', 'بیرونی'],
  ['iç', 'داخلی'],
  ['arka', 'عقب'],
  ['ön', 'جلو'],
  ['üst', 'بالا'],
  ['yan', 'کناری'],
  ['hava', 'هوا'],
  ['suya', 'آب'],
  ['rüzgar', 'باد'],
  ['darbe', 'ضربه'],
  ['omuz', 'شانه'],
  ['dirsek', 'آرنج'],
  ['sırt', 'کمر'],
  ['göğüs', 'سینه'],
  ['bilek', 'مچ'],
  ['avuç', 'کف دست'],
  ['parmak', 'انگشت'],
  ['bel', 'کمر'],
  ['diz', 'زانو'],
  ['ayak', 'پا'],
  ['yaka', 'یقه'],
  ['kol', 'آستین'],
  ['cep', 'جیب'],
  ['cebi', 'جیب'],
  ['taban', 'کفی'],
  ['deri', 'چرم'],
  ['file', 'توری'],
  ['cırt', 'چسبک'],
  ['bağlantı', 'اتصال'],
  ['akışı', 'جریان'],
  ['direnci', 'مقاومت'],
  ['kullanım', 'استفاده'],
  ['sürüş', 'سواری'],
  ['sürücü', 'موتورسوار'],
  ['hareket', 'حرکت'],
  ['seviye', 'سطح'],
  ['kategori', 'دسته'],
  ['standart', 'استاندارد'],
  ['uyumlu', 'سازگار'],
  ['uyum', 'تناسب'],
  ['adet', 'عدد'],
  ['çift', 'دو'],
  ['yüksek', 'بالا'],
  ['daha', 'بیشتر'],
  ['fazla', 'بیشتر'],
  ['üstün', 'برتر'],
  ['sağlar', 'دارد'],
  ['sunar', 'دارد'],
  ['sahiptir', 'دارد'],
  ['sahip', 'دارای'],
  ['için', 'برای'],
  ['ile', 'با'],
  ['veya', 'یا'],
  ['ve', 'و'],
  ['bir', ''],
  ['olan', ''],
  ['olarak', ''],
  ['şekilde', ''],
  ['sayesinde', 'با'],
  ['göre', 'طبق'],
  ['karşı', 'در برابر'],
  ['paneller', 'پنل‌ها'],
  ['panel', 'پنل'],
  ['aşınma', 'سایش'],
  ['teknolojisi', 'فناوری'],
  ['görünürlük', 'دید'],
  ['yüzey', 'سطح'],
  ['gürültü', 'صدا'],
  ['buğu', 'بخار'],
  ['güneş', 'آفتاب'],
  ['karbon', 'کربن'],
  ['çene', 'فک'],
  ['kayış', 'بند'],
  ['ped', 'پد'],
  ['köpük', 'فوم'],
  ['naylon', 'نایلون'],
  ['polyester', 'پلی‌استر'],
  ['mikrofiber', 'میکروفایبر'],
  ['fiberglas', 'فایبرگلاس'],
  ['telefon', 'تلفن'],
  ['ağırlık', 'وزن'],
  ['gözlük', 'عینک'],
  ['müzik', 'موسیقی'],
  ['şarj', 'شارژ'],
  ['adaptör', 'آداپتور'],
  ['hoparlör', 'بلندگو'],
  ['taşıma', 'حمل'],
  ['çanta', 'کیف'],
  ['bölüm', 'بخش'],
  ['bölge', 'ناحیه'],
  ['takılı', 'نصب‌شده'],
  ['montaj', 'نصب'],
  ['elastik', 'کشی'],
  ['spandex', 'اسپندکس'],
  ['softshell', 'سافت‌شل'],
];

const SKIP = /son incelenen|benzer ürün|tükendi|sepete ekle/i;
const TURKISH_MARK = /[ğıüşöçĞÜŞÖÇ]/;

function squeeze(value) {
  return String(value || '').replace(/\s+/g, ' ').replace(/\s+([،.])/g, '$1').trim();
}

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceTerm(text, from, to) {
  const needle = from.toLocaleLowerCase('tr');
  const lower = text.toLocaleLowerCase('tr');
  let out = '';
  let i = 0;
  while (i < text.length) {
    const at = lower.indexOf(needle, i);
    if (at < 0) {
      out += text.slice(i);
      break;
    }
    const beforeOk = at === 0 || !/[\p{L}\p{N}]/u.test(lower[at - 1]);
    const end = at + needle.length;
    const afterOk = end >= lower.length || !/[\p{L}\p{N}]/u.test(lower[end]);
    if (!beforeOk || !afterOk) {
      out += text.slice(i, at + 1);
      i = at + 1;
      continue;
    }
    out += text.slice(i, at) + to;
    i = end;
  }
  return out;
}

function toFa(line) {
  let text = squeeze(line);
  if (!text || SKIP.test(text.toLocaleLowerCase('tr'))) return '';
  const terms = PHRASES.concat(WORDS).sort((a, b) => b[0].length - a[0].length);
  terms.forEach(([from, to]) => {
    text = replaceTerm(text, from, to);
  });
  text = squeeze(text);
  if (TURKISH_MARK.test(text)) {
    text = squeeze(text.split(' ').filter((word) => !TURKISH_MARK.test(word)).join(' '));
  }
  if (!text || SKIP.test(text.toLocaleLowerCase('tr'))) return '';
  if (!/[\u0600-\u06FF]/.test(text)) return '';
  return text;
}

function factsToFa(raw) {
  const features = [];
  const seen = new Set();
  (raw.features || []).forEach((line) => {
    const fa = toFa(line);
    if (!fa) return;
    const key = fa.toLocaleLowerCase('fa');
    if (seen.has(key)) return;
    seen.add(key);
    features.push(fa);
  });
  return features.slice(0, 12);
}

module.exports = { toFa, factsToFa };
