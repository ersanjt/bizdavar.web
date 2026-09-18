/**
 * Convert the Bizdavar AutoMoto import package into a site catalog JSON
 * and extract product media to /media/catalog/automoto/.
 *
 * Usage:
 *   node scripts/import-automoto-catalog.js
 *   node scripts/import-automoto-catalog.js --json-only
 *   node scripts/import-automoto-catalog.js --zip "D:\\path\\package.zip"
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DEFAULT_ZIP = 'C:/Users/ersan/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an-2/outputs/bizdavar_automoto_import_2026-09-18.zip';
const DEFAULT_JSONL = 'C:/Users/ersan/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an-2/work/bizdavar_automoto_import/catalog/products.jsonl';
const DEFAULT_PRICE_ZIP = 'C:/Users/ersan/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an-2/outputs/bizdavar_automoto_cursor_package_2026-09-18.zip';
const DEFAULT_PRICE_CSV = path.join(ROOT, 'work/automoto-cursor-package/bizdavar_automoto_price_list_2026-09-18.csv');

const CATEGORY_FA = {
  'کلاه ایمنی موتورسیکلت': 'helmets',
  'کاپشن و پوشاک موتورسیکلت': 'jackets',
  'دستکش موتورسیکلت': 'gloves',
  'کفش و بوت موتورسیکلت': 'boots',
  'تجهیزات محافظتی': 'protection',
  'لوازم جانبی موتورسیکلت': 'accessories',
  'شلوار موتورسیکلت': 'pants',
  'تجهیزات آفرود': 'offroad',
  'پوشاک ضد باران': 'accessories'
};

const CATEGORY_ROOT = {
  kasklar: 'helmets',
  montlar: 'jackets',
  eldivenler: 'gloves',
  botlar: 'boots',
  korumalar: 'protection',
  aksesuarlar: 'accessories',
  pantolonlar: 'pants',
  interkom: 'intercom',
  'i̇nterkom': 'intercom',
  'off-road': 'offroad',
  'mx off-road': 'offroad',
  'casual giyim': 'casual',
  motorunuza: 'moto-parts'
};

const HIGHLIGHT_PREF = ['helmets', 'jackets', 'boots', 'intercom', 'offroad', 'accessories'];

function argValue(flag, fallback) {
  const i = process.argv.indexOf(flag);
  if (i === -1 || !process.argv[i + 1]) return fallback;
  return process.argv[i + 1];
}

function norm(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function rootPath(value) {
  return norm(value).split(/\s*>\s*/)[0].toLowerCase();
}

function categoryId(row) {
  const fa = CATEGORY_FA[norm(row.category_fa)];
  if (fa) return fa;
  const mapped = CATEGORY_ROOT[rootPath(row.category_path_tr)] || CATEGORY_ROOT[rootPath(row.category_fa)];
  if (mapped) return mapped;
  return 'accessories';
}

function mediaPath(value) {
  const raw = norm(value);
  if (!raw) return '';
  return raw.startsWith('/') ? raw : '/' + raw.replace(/^\.\//, '');
}

function readJsonl(file) {
  return fs.readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

const LEAF_FA = {
  'Kapalı Kasklar': 'کلاه تمام‌صورت',
  'Açık Kasklar': 'کلاه باز',
  'Çene Açılır Kasklar': 'کلاه فک‌متحرک',
  'Modüler Kasklar': 'کلاه ماژولار',
  'Cross Kasklar': 'کلاه کراس',
  'Çocuk Kaskları': 'کلاه کودک',
  'İnterkomlu Kasklar': 'کلاه با اینترکام',
  'Kask Aksesuarları': 'لوازم کلاه',
  'Kask Yedek Parçaları': 'قطعات یدکی کلاه',
  'Deri Montlar': 'کاپشن چرمی',
  'Yazlık Montlar': 'کاپشن تابستانه',
  'Gore-Tex Montlar': 'کاپشن گورتکس',
  'Kadın Montları': 'کاپشن زنانه',
  'Tekstil Montlar': 'کاپشن پارچه‌ای',
  'Softshell ve Termal Montlar': 'کاپشن سافت‌شل و حرارتی',
  'Deri Eldivenler': 'دستکش چرمی',
  'Yazlık Eldivenler': 'دستکش تابستانه',
  'Gore-Tex Eldivenler': 'دستکش گورتکس',
  'Kadın Eldivenleri': 'دستکش زنانه',
  'Yazlık Botlar': 'بوت تابستانه',
  'Gore-Tex Botlar': 'بوت گورتکس',
  'Kadın Botları': 'بوت زنانه',
  'Jeans Pantolonlar': 'شلوار جین',
  'Gore-Tex Pantolonlar': 'شلوار گورتکس',
  'Kadın Pantolonları': 'شلوار زنانه',
  'Telefon Tutucular': 'نگهدارنده موبایل',
  'Motosiklet Kilitleri': 'قفل موتور',
  'Motosiklet Brandaları': 'کاور موتور',
  'İnterkom Cihazları': 'دستگاه اینترکام',
  'İnterkom Aksesuarları': 'لوازم اینترکام',
  'Boyunluklar': 'گردن‌پوش',
  'T-shirt': 'تیشرت',
  'Sweatshirt': 'سویشرت',
  'Şapkalar': 'کلاه کپ',
  '3 Mevsim Montlar': 'کاپشن سه‌فصل',
  'Sürücü Çantaları': 'کیف موتورسوار',
  'Mevsimlik Botlar': 'بوت فصلی',
  'Mevsimlik Montlar': 'کاپشن فصلی',
  'Botlar': 'بوت',
  'Mevsimlik Eldivenler': 'دستکش فصلی',
  '3 Mevsim Pantolonlar': 'شلوار سه‌فصل',
  'Dizlik ve Dirseklikler': 'محافظ زانو و آرنج',
  'Goggle': 'عینک',
  '3 Mevsim Botlar': 'بوت سه‌فصل',
  'Temizlik & Bakım': 'نظافت و نگهداری',
  'Üst İçlik': 'لباس زیر بالا',
  'Eldivenler': 'دستکش',
  'Motor ve Zincir Yağları': 'روغن موتور و زنجیر',
  'Jersey': 'جرسی',
  'Mevsimlik Pantolonlar': 'شلوار فصلی',
  'Yazlık Pantolonlar': 'شلوار تابستانه',
  'Pantolon': 'شلوار',
  '3 Mevsim Eldivenler': 'دستکش سه‌فصل',
  'Alt İçlik': 'لباس زیر پایین',
  'Üst Yağmurluk': 'بارانی بالا',
  'Sırtlıklar': 'محافظ کمر',
  'Body Armour/Full Korumalar': 'محافظ تمام‌بدن',
  'Bereler': 'کلاه بافتنی',
  'Balaklava & Maske': 'بالاکلاوا و ماسک',
  'Genç Eldiven': 'دستکش نوجوان',
  'Çorap': 'جوراب',
  'Genç Pantolon': 'شلوار نوجوان',
  'Şort ve Kalça Korumalar': 'شورت و محافظ لگن',
  'Kasklar': 'کلاه ایمنی',
  'Montlar': 'کاپشن',
  'Göğüs Korumalar': 'محافظ سینه',
  'Arka Çantalar': 'کیف عقب',
  'Sürücü Yelekleri': 'جلیقه موتورسوار',
  'Airbag': 'ایربگ',
  'Çocuk Botlar': 'بوت کودک',
  'Genç Jersey': 'جرسی نوجوان',
  'Hediyelikler': 'هدیه',
  'Alt Yağmurluk': 'بارانی پایین',
  'Yan Çantalar': 'کیف بغل',
  'Genç Goggle': 'عینک نوجوان',
  'Bellikler': 'کمربند محافظ',
  'Çocuk Koruma': 'محافظ کودک',
  'Eldiven': 'دستکش',
  'Uzun Botlar': 'بوت بلند',
  'File Lastikli Kanca ve Strap': 'بند و قلاب کشی',
  'MX Aksesuar': 'لوازم کراس',
  'Bot Aksesuar ve Yedek Parçaları': 'لوازم و قطعات بوت',
  'Kamera Aksesuarları': 'لوازم دوربین',
  'Tulumlar': 'سرهمی',
  'Kısa Eldivenler': 'دستکش کوتاه',
  'Anahtarlık & Boyunluk': 'جاکلیدی و گردن‌پوش',
  'Kulak Sağlığı': 'محافظ گوش',
  'Kuyruk Çantaları': 'کیف عقب زین',
  'Gidon Çantaları': 'کیف فرمان',
  'Çocuk Jersey': 'جرسی کودک',
  'Çocuk Pantolon': 'شلوار کودک',
  'Ayakkabılar': 'کفش',
  'Boyun Korumalar': 'محافظ گردن',
  'Depo Üstü Çantalar': 'کیف روی باک',
  'Çocuk Montlar': 'کاپشن کودک',
  'Seyahat Çantaları': 'کیف سفر',
  'Kısa Botlar': 'بوت کوتاه',
  'Kemerler': 'کمربند',
  'Ceketler': 'کاپشن',
  'Pantolonlar': 'شلوار',
  'Diz Rüzgarlığı ve Elcik Korumalar': 'بادگیر زانو و محافظ گریپ',
  'Kameralı İnterkomlar': 'اینترکام دوربین‌دار',
  'Sırt & Bel ve Bacak Çantaları': 'کیف کمر و پا',
  'Alet Çantaları': 'کیف ابزار',
  'Scooter Çantaları': 'کیف اسکوتر',
  'Genç Koruma': 'محافظ نوجوان',
  'Çocuk Eldivenleri': 'دستکش کودک',
  'Genç Botlar': 'بوت نوجوان',
  'Çocuk Pantolonları': 'شلوار کودک',
  'Yağmurluk Tulumlar': 'سرهمی بارانی',
  'Tekstil Eldivenler': 'دستکش پارچه‌ای',
  'Lastik Tamir Kitleri': 'کیت تعمیر لاستیک',
  'Çocuk Eldiven': 'دستکش کودک',
  'Diz Korumalar': 'محافظ زانو',
  'Deri Pantolonlar': 'شلوار چرمی'
};

const TITLE_FA = [
  [/Motosiklet/gi, 'موتورسیکلت'],
  [/Korumalı/gi, 'محافظ‌دار'],
  [/Havalandırması/gi, 'تهویه'],
  [/Hayalet/gi, 'شبح'],
  [/Beyazı/gi, 'سفید'],
  [/Yeşili/gi, 'سبز'],
  [/Siyahı/gi, 'مشکی'],
  [/SİYAH/g, 'مشکی'],
  [/GRİ/g, 'خاکستری'],
  [/Gri(?:si)?/gi, 'خاکستری'],
  [/İçliği/gi, 'لباس زیر'],
  [/içlik/gi, 'لباس زیر'],
  [/İçin/gi, 'برای'],
  [/Için/gi, 'برای'],
  [/İçi/gi, 'داخل'],
  [/içi/gi, 'داخل'],
  [/İç آستر/gi, 'آستر داخلی'],
  [/İç /g, 'داخل '],
  [/Rüzgar/gi, 'باد'],
  [/Motokros/gi, 'موتورکراس'],
  [/Çorabı/gi, 'جوراب'],
  [/yaş/gi, 'سال'],
  [/Kullanımına Uygun/gi, 'مناسب استفاده'],
  [/İridyum/gi, 'ایریدیوم'],
  [/Aparatı/gi, 'قطعه'],
  [/\bKrom\b/gi, 'کروم'],
  [/Camı/gi, 'طلق'],
  [/Katmanlı/gi, 'لایه'],
  [/Sertifikalı/gi, 'دارای گواهی'],
  [/Rüzgarlığı/gi, 'بادگیر'],
  [/Rüzgarlık/gi, 'بادگیر'],
  [/Kapşon/gi, 'کلاهک'],
  [/ ve /g, ' و '],
  [/Yarış/gi, 'ریس'],
  [/Günlük/gi, 'روزمره'],
  [/Gündelik/gi, 'روزمره'],
  [/Zeytin/gi, 'زیتونی'],
  [/Kapağı/gi, 'درپوش'],
  [/İnci /gi, 'مرواریدی '],
  [/Nefes/gi, 'تنفس'],
  [/Deflektörü/gi, 'دیفلکتور'],
  [/Spoileri/gi, 'اسپویلر'],
  [/Saptırıcı/gi, 'منحرف‌کننده'],
  [/Yönlendirici/gi, 'هدایت‌کننده'],
  [/Perdesi/gi, 'پرده'],
  [/Yan Kapak/gi, 'درپوش بغل'],
  [/Baş Çevresi/gi, 'دور سر'],
  [/Geniş Beden/gi, 'سایز بزرگ'],
  [/Fuşya/gi, 'فوشیا'],
  [/Tutucular/gi, 'نگهدارنده'],
  [/Tutucu/gi, 'نگهدارنده'],
  [/Brandası/gi, 'کاور'],
  [/Akıllı/gi, 'هوشمند'],
  [/İkili/gi, 'دوتایی'],
  [/Alarmlı/gi, 'آلارم‌دار'],
  [/Geniş/gi, 'پهن'],
  [/Renkli/gi, 'رنگی'],
  [/Peluş/gi, 'پولیش'],
  [/İle/gi, 'با'],
  [/Parça/gi, 'تکه'],
  [/Araç/gi, 'وسیله'],
  [/Bakır/gi, 'مسی'],
  [/Tıkacı/gi, 'درپوش'],
  [/Üstü/gi, 'روی'],
  [/Üst /gi, 'بالا '],
  [/Isıtmalı/gi, 'گرم‌شونده'],
  [/Kartı/gi, 'کارت'],
  [/Yüzey/gi, 'سطح'],
  [/Titreşim/gi, 'لرزش'],
  [/Çakmak/gi, 'فندکی'],
  [/Çift /gi, 'جفت '],
  [/Gövde/gi, 'بدنه'],
  [/Derisi/gi, 'چرم'],
  [/Mıknatıslı/gi, 'مغناطیسی'],
  [/Taşıma/gi, 'حمل'],
  [/Örtüsü/gi, 'روکش'],
  [/Lastiği/gi, 'لاستیک'],
  [/Yüzük/gi, 'حلقه'],
  [/Modülü/gi, 'ماژول'],
  [/Askısı/gi, 'بند'],
  [/İnce /gi, 'نازک '],
  [/Düz /gi, 'ساده '],
  [/Serisi/gi, 'سری'],
  [/Yarım/gi, 'نیم'],
  [/Siperlik/gi, 'آفتاب‌گیر'],
  [/Kayış/gi, 'تسمه'],
  [/İmzalı/gi, 'امضادار'],
  [/Astar/gi, 'آستر'],
  [/Pedi/gi, 'پد'],
  [/Ön /gi, 'جلو '],
  [/Açık Kask/gi, 'کلاه باز'],
  [/Kask Aksesuar/gi, 'لوازم کلاه'],
  [/Kaskı/gi, 'کلاه ایمنی'],
  [/Kasklar/gi, 'کلاه‌های ایمنی'],
  [/Kask/gi, 'کلاه ایمنی'],
  [/Çene Açılır/gi, 'فک‌متحرک'],
  [/Montaj(ı|ıu|u)?/gi, 'مونتاژ'],
  [/\bMontu\b/gi, 'کاپشن'],
  [/\bMontlar\b/gi, 'کاپشن'],
  [/\bMont\b/gi, 'کاپشن'],
  [/Pantolonu/gi, 'شلوار'],
  [/Pantolonlar/gi, 'شلوار'],
  [/Pantolon/gi, 'شلوار'],
  [/Eldiveni/gi, 'دستکش'],
  [/Eldivenler/gi, 'دستکش'],
  [/Eldiven/gi, 'دستکش'],
  [/Botu/gi, 'بوت'],
  [/Botlar/gi, 'بوت'],
  [/Bot /gi, 'بوت '],
  [/Vizörü/gi, 'طلق'],
  [/Vizör/gi, 'طلق'],
  [/Aynalı Cam/gi, 'طلق آینه‌ای'],
  [/Çift Katmanlı Yedek Cam/gi, 'طلق یدکی دولایه'],
  [/Yedek Cam/gi, 'طلق یدکی'],
  [/Ön Cam/gi, 'طلق جلو'],
  [/Hazırlıklı Cam/gi, 'طلق آماده'],
  [/Buğu Önleyici Cam/gi, 'طلق ضدبخار'],
  [/Ayna Cam/gi, 'طلق آینه‌ای'],
  [/\bCam\b/gi, 'طلق'],
  [/Pinlock/gi, 'پین‌لاک'],
  [/Boyunluk/gi, 'گردن‌پوش'],
  [/Yağmurluk/gi, 'بارانی'],
  [/İnterkomu/gi, 'اینترکام'],
  [/Interkomu/gi, 'اینترکام'],
  [/İnterkom/gi, 'اینترکام'],
  [/Interkom/gi, 'اینترکام'],
  [/Adaptörü/gi, 'آداپتور'],
  [/Adaptör/gi, 'آداپتور'],
  [/Bağlantı Kiti/gi, 'کیت اتصال'],
  [/Kiti/gi, 'کیت'],
  [/Güneş/gi, 'آفتاب'],
  [/Açık /gi, 'روشن '],
  [/\bMat\b/gi, 'مات'],
  [/Oranj/gi, 'نارنجی'],
  [/Bronz/gi, 'برنزی'],
  [/\bLens\b/gi, 'لنز'],
  [/Yazlık/gi, 'تابستانه'],
  [/Kışlık/gi, 'زمستانه'],
  [/Hazırlıklı/gi, 'آماده'],
  [/\(Kısa\)/gi, '(کوتاه)'],
  [/\(Uzun\)/gi, '(بلند)'],
  [/Kısa /gi, 'کوتاه '],
  [/Uzun /gi, 'بلند '],
  [/Kış /gi, 'زمستانه '],
  [/Kadın/gi, 'زنانه'],
  [/Erkek/gi, 'مردانه'],
  [/Bayan/gi, 'زنانه'],
  [/Genç/gi, 'نوجوان'],
  [/Çocuk/gi, 'کودک'],
  [/Şeffaf/gi, 'شفاف'],
  [/Füme/gi, 'دودی'],
  [/Siyah/gi, 'مشکی'],
  [/Beyaz/gi, 'سفید'],
  [/Kırmızı/gi, 'قرمز'],
  [/Mavi/gi, 'آبی'],
  [/Gri/gi, 'خاکستری'],
  [/Antrasit/gi, 'آنتراسیت'],
  [/Kahverengi/gi, 'قهوه‌ای'],
  [/Sarı/gi, 'زرد'],
  [/Altın/gi, 'طلایی'],
  [/Gümüş/gi, 'نقره‌ای'],
  [/Koyu /gi, 'تیره '],
  [/Deri /gi, 'چرمی '],
  [/Tekstil/gi, 'پارچه‌ای'],
  [/Termal/gi, 'حرارتی'],
  [/Ceketi/gi, 'کاپشن'],
  [/Ceketler/gi, 'کاپشن'],
  [/Ceket/gi, 'کاپشن'],
  [/Tam Gövde Koruma/gi, 'محافظ تمام‌بدن'],
  [/Diz Koruma/gi, 'محافظ زانو'],
  [/Dirsek Koruma/gi, 'محافظ آرنج'],
  [/Koruma/gi, 'محافظ'],
  [/Koruyucu/gi, 'محافظ'],
  [/Gözlüğü/gi, 'عینک'],
  [/Gözlük/gi, 'عینک'],
  [/Üniversal/gi, 'یونیورسال'],
  [/Buğu Önleyici/gi, 'ضدبخار'],
  [/Antifog/gi, 'ضدبخار'],
  [/Yedek Parça(ları)?/gi, 'قطعه یدکی'],
  [/Yedek/gi, 'یدکی'],
  [/Aksesuar(ları|ı)?/gi, 'لوازم'],
  [/Su Geçirmez/gi, 'ضدآب'],
  [/Nefes Alabilir/gi, 'تنفس‌پذیر'],
  [/Takım/gi, 'ست'],
  [/Seti/gi, 'ست'],
  [/Giyim/gi, 'پوشاک'],
  [/Kross/gi, 'کراس'],
  [/Cross /gi, 'کراس '],
  [/Ayna/gi, 'آینه'],
  [/Çanta(sı|lar)?/gi, 'کیف'],
  [/Kilitleri/gi, 'قفل'],
  [/Kilit/gi, 'قفل'],
  [/İçin/gi, 'برای'],
  [/Için/gi, 'برای'],
  [/Kapalı/gi, 'تمام‌صورت'],
  [/Havalandırma/gi, 'تهویه'],
  [/Şapka(lar|sı)?/gi, 'کلاه کپ'],
  [/\bKros\b/gi, 'کراس'],
  [/Çene/gi, 'فک'],
  [/Goggle/gi, 'عینک'],
  [/Gore[-\s]?Tex/gi, 'گورتکس'],
  [/\bSırt\b/gi, 'کمر'],
  [/Kılıfı/gi, 'کاور'],
  [/Kılıf/gi, 'کاور'],
  [/\bTepe\b/gi, 'تاج'],
  [/Telefon/gi, 'موبایل'],
  [/Kapüşonlu/gi, 'کلاه‌دار'],
  [/Tişört/gi, 'تیشرت'],
  [/Hoodie/gi, 'هودی'],
  [/Açılabilir/gi, 'بازشو'],
  [/\bArka\b/gi, 'عقب'],
  [/İçlik/gi, 'لباس زیر'],
  [/\bSpor\b/gi, 'اسپرت'],
  [/Jerseyi/gi, 'جرسی'],
  [/\bÜst\b/gi, 'بالا'],
  [/Yeşil/gi, 'سبز'],
  [/Pembe/gi, 'صورتی'],
  [/Denim/gi, 'جین'],
  [/Mekanizması/gi, 'مکانیزم'],
  [/Mekanizma/gi, 'مکانیزم'],
  [/Yağı/gi, 'روغن'],
  [/\bYağ\b/gi, 'روغن'],
  [/\bAlt\b/gi, 'پایین'],
  [/Metalik/gi, 'متالیک'],
  [/\bKahve\b/gi, 'قهوه‌ای'],
  [/Supervented/gi, 'هواکش‌دار'],
  [/\bFull\b/gi, 'کامل'],
  [/Off[-\s]?Road/gi, 'آفرود'],
  [/Çantası/gi, 'کیف'],
  [/Çantalar/gi, 'کیف'],
  [/Bacak/gi, 'پا'],
  [/Koruması/gi, 'محافظ'],
  [/Sweatshirt/gi, 'سویشرت'],
  [/Bağlantı/gi, 'اتصال'],
  [/Dizlik/gi, 'محافظ زانو'],
  [/Dirseklik/gi, 'محافظ آرنج'],
  [/Sırtlık/gi, 'محافظ کمر'],
  [/Yelek(leri|i)?/gi, 'جلیقه'],
  [/Tulum(lar|u)?/gi, 'سرهمی'],
  [/Çorap/gi, 'جوراب'],
  [/Bereler/gi, 'کلاه بافتنی'],
  [/\bBere\b/gi, 'کلاه بافتنی'],
  [/Balaklava/gi, 'بالاکلاوا'],
  [/Maske(si)?/gi, 'ماسک'],
  [/Airbag/gi, 'ایربگ'],
  [/\bCarbon\b/gi, 'کربن'],
  [/Karbon/gi, 'کربن'],
  [/Mevsimlik/gi, 'فصلی'],
  [/3 Mevsim/gi, 'سه‌فصل'],
  [/\bJersey\b/gi, 'جرسی'],
  [/\bDiz\b/gi, 'زانو'],
  [/Modüler/gi, 'ماژولار'],
  [/Temizlik/gi, 'نظافت'],
  [/Bakım/gi, 'نگهداری'],
  [/Zincir/gi, 'زنجیر'],
  [/Lastik/gi, 'لاستیک'],
  [/Kamera(lı)?/gi, 'دوربین'],
  [/Anahtarlık/gi, 'جاکلیدی'],
  [/Kemer(ler|i)?/gi, 'کمربند'],
  [/Şort/gi, 'شورت'],
  [/Kalça/gi, 'لگن'],
  [/Göğüs/gi, 'سینه'],
  [/File/gi, 'توری'],
  [/Lastikli/gi, 'کشی'],
  [/Kanca/gi, 'قلاب'],
  [/Ayakkabı(lar)?/gi, 'کفش'],
  [/Seyahat/gi, 'سفر'],
  [/Depo/gi, 'باک'],
  [/Gidon/gi, 'فرمان'],
  [/Kuyruk/gi, 'عقب'],
  [/Alet/gi, 'ابزار'],
  [/Kulak/gi, 'گوش'],
  [/Hediyelik(ler)?/gi, 'هدیه'],
  [/Sürücü/gi, 'موتورسوار'],
  [/Armou?r/gi, 'محافظ'],
  [/Rüzgarlığı/gi, 'بادگیر'],
  [/Elcik/gi, 'گریپ'],
  [/Turuncu/gi, 'نارنجی'],
  [/\bMor\b/gi, 'بنفش'],
  [/Lacivert/gi, 'سرمه‌ای'],
  [/\bBej\b/gi, 'بژ'],
  [/Bordo/gi, 'زرشکی'],
  [/\bHaki\b/gi, 'خاکی'],
  [/\bNeon\b/gi, 'نئون'],
  [/Parlak/gi, 'براق'],
  [/Yansıtıcı|Reflektif|Reflektörlü/gi, 'شب‌نما'],
  [/\bMesh\b/gi, 'مش'],
  [/\bPolar\b/gi, 'پلار'],
  [/Softshell/gi, 'سافت‌شل'],
  [/Fermuar(lı)?/gi, 'زیپ‌دار'],
  [/Cepli/gi, 'جیب‌دار'],
  [/Astarlı/gi, 'آستردار'],
  [/Kablosuz/gi, 'بی‌سیم'],
  [/Kablolu/gi, 'سیمی'],
  [/Bluetooth/gi, 'بلوتوث'],
  [/Hoparlör/gi, 'بلندگو'],
  [/Mikrofon/gi, 'میکروفون'],
  [/Şarj/gi, 'شارژ']
];

const ORDER_FA = [
  [/موتورسیکلت بوت/g, 'بوت موتورسیکلت'],
  [/موتورسیکلت کلاه ایمنی/g, 'کلاه ایمنی موتورسیکلت'],
  [/موتورسیکلت کاپشن/g, 'کاپشن موتورسیکلت'],
  [/موتورسیکلت دستکش/g, 'دستکش موتورسیکلت'],
  [/موتورسیکلت شلوار/g, 'شلوار موتورسیکلت'],
  [/موتورسیکلت طلق/g, 'طلق کلاه ایمنی'],
  [/موتورسیکلت اینترکام/g, 'اینترکام موتورسیکلت'],
  [/موتورسیکلت کیف/g, 'کیف موتورسیکلت'],
  [/موتورسیکلت محافظ/g, 'محافظ موتورسیکلت']
];

const TYPE_FA = {
  helmets: 'کلاه ایمنی موتورسیکلت',
  jackets: 'کاپشن موتورسیکلت',
  gloves: 'دستکش موتورسیکلت',
  boots: 'بوت موتورسیکلت',
  protection: 'تجهیزات محافظ موتور',
  accessories: 'لوازم جانبی موتور',
  pants: 'شلوار موتورسیکلت',
  offroad: 'تجهیزات آفرود',
  intercom: 'اینترکام موتور',
  casual: 'پوشاک روزمره موتور',
  'moto-parts': 'قطعات موتورسیکلت'
};

function polishFa(value) {
  return norm(value)
    .replace(/عینک[\s-]*عینک/g, 'عینک')
    .replace(/کلاه ایمنی کلاه ایمنی/g, 'کلاه ایمنی')
    .replace(/کاپشن کاپشن/g, 'کاپشن')
    .replace(/دستکش دستکش/g, 'دستکش')
    .replace(/تهویهsı/gi, 'تهویه')
    .replace(/سفیدı/g, 'سفید')
    .replace(/سبزi/g, 'سبز')
    .replace(/مشکیı/g, 'مشکی')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function leadWithType(title, type) {
  const clean = norm(title);
  if (!type) return clean;
  const head = type.split(' ')[0];
  const stripped = clean.replace(new RegExp(type.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), ' ');
  if (clean.indexOf(head) === -1) return norm(type + ' ' + clean);
  return norm(type + ' ' + stripped);
}

const CAT_INTRO_FA = {
  helmets: 'کلاه ایمنی موتورسیکلت برای سواری شهری و جاده‌ای.',
  jackets: 'کاپشن موتورسیکلت برای سواری روزمره و سفر.',
  gloves: 'دستکش موتورسیکلت برای کنترل بهتر فرمان.',
  boots: 'بوت موتورسیکلت برای سواری و محافظت پا.',
  protection: 'تجهیزات محافظ موتورسوار.',
  accessories: 'لوازم جانبی موتورسیکلت.',
  pants: 'شلوار موتورسیکلت برای سواری.',
  offroad: 'تجهیزات آفرود و کراس.',
  intercom: 'اینترکام و ارتباط موتورسوار.',
  casual: 'پوشاک روزمره موتورسوار.',
  'moto-parts': 'قطعات و روغن موتورسیکلت.'
};

function descFaFor(titleFa, brand, categoryFa, leafFa, row, catId) {
  const extras = [];
  if (brand) extras.push('برند ' + brand);
  if (leafFa && leafFa !== categoryFa) extras.push('نوع ' + leafFa);
  else if (categoryFa) extras.push('دسته ' + categoryFa);
  let raw = norm(row && row.short_description_fa);
  const titleTr = norm(row && row.title_tr);
  const titleSrc = norm(row && row.title_fa);
  if (raw && titleTr) raw = raw.split(titleTr).join(titleFa);
  if (raw && titleSrc && titleSrc !== titleFa) raw = raw.split(titleSrc).join(titleFa);
  if (raw && /[\u0600-\u06FF]/.test(raw) && !/[ğıüşöçİĞÜŞÖÇ]/.test(raw)) {
    return extras.length ? raw.replace(/[。.]\s*$/, '') + ' ' + extras.join('، ') + '.' : raw;
  }
  const intro = CAT_INTRO_FA[catId] || 'محصول موتورسیکلت از کاتالوگ اتو‌موتو بیزداور.';
  return [titleFa ? titleFa + '.' : '', intro, extras.length ? extras.join('، ') + '.' : '', 'سایز، رنگ و موجودی نهایی قبل از سفارش تایید می‌شود.']
    .filter(Boolean)
    .join(' ');
}

const TITLE_EN = [
  [/Motosiklet/gi, 'motorcycle'],
  [/Korumalı/gi, 'protective'],
  [/Kaskı/gi, 'helmet'],
  [/Kasklar/gi, 'helmets'],
  [/Kask/gi, 'helmet'],
  [/Çene Açılır/gi, 'modular'],
  [/Montaj(ı|ıu|u)?/gi, 'mount'],
  [/\bMontu\b/gi, 'jacket'],
  [/\bMontlar\b/gi, 'jackets'],
  [/\bMont\b/gi, 'jacket'],
  [/Pantolonu/gi, 'pants'],
  [/Pantolon/gi, 'pants'],
  [/Eldiveni/gi, 'glove'],
  [/Eldivenler/gi, 'gloves'],
  [/Eldiven/gi, 'glove'],
  [/Botu/gi, 'boot'],
  [/Botlar/gi, 'boots'],
  [/Vizörü/gi, 'visor'],
  [/Vizör/gi, 'visor'],
  [/Aynalı Cam/gi, 'mirror visor'],
  [/Çift Katmanlı Yedek Cam/gi, 'double-layer spare visor'],
  [/Yedek Cam/gi, 'spare visor'],
  [/Ön Cam/gi, 'front visor'],
  [/Hazırlıklı Cam/gi, 'prepared visor'],
  [/Buğu Önleyici Cam/gi, 'anti-fog visor'],
  [/Ayna Cam/gi, 'mirror visor'],
  [/\bCam\b/gi, 'visor'],
  [/Boyunluk/gi, 'neck tube'],
  [/Yağmurluk/gi, 'rain suit'],
  [/İnterkomu|Interkomu|İnterkom|Interkom/gi, 'intercom'],
  [/Adaptörü|Adaptör/gi, 'adapter'],
  [/Bağlantı Kiti/gi, 'connection kit'],
  [/Güneş/gi, 'sun'],
  [/Açık /gi, 'light '],
  [/\bMat\b/gi, 'matte'],
  [/Oranj/gi, 'orange'],
  [/Bronz/gi, 'bronze'],
  [/Hazırlıklı/gi, 'prepared'],
  [/\(Kısa\)/gi, '(short)'],
  [/\(Uzun\)/gi, '(tall)'],
  [/Yazlık/gi, 'summer'],
  [/Kışlık/gi, 'winter'],
  [/Kadın/gi, 'women'],
  [/Erkek/gi, 'men'],
  [/Bayan/gi, 'women'],
  [/Genç/gi, 'youth'],
  [/Çocuk/gi, 'kids'],
  [/Şeffaf/gi, 'clear'],
  [/Füme/gi, 'smoke'],
  [/Siyah/gi, 'black'],
  [/Beyaz/gi, 'white'],
  [/Kırmızı/gi, 'red'],
  [/Mavi/gi, 'blue'],
  [/Gri/gi, 'grey'],
  [/Antrasit/gi, 'anthracite'],
  [/Kahverengi/gi, 'brown'],
  [/Sarı/gi, 'yellow'],
  [/Altın/gi, 'gold'],
  [/Gümüş/gi, 'silver'],
  [/Koyu /gi, 'dark '],
  [/Deri /gi, 'leather '],
  [/Ceketi|Ceketler|Ceket/gi, 'jacket'],
  [/Tam Gövde Koruma/gi, 'full body protection'],
  [/Diz Koruma/gi, 'knee protection'],
  [/Dirsek Koruma/gi, 'elbow protection'],
  [/Koruma|Koruyucu/gi, 'protection'],
  [/Gözlüğü|Gözlük/gi, 'goggles'],
  [/Üniversal/gi, 'universal'],
  [/Buğu Önleyici|Antifog/gi, 'anti-fog'],
  [/Yedek Parça(ları)?/gi, 'spare part'],
  [/Yedek/gi, 'spare'],
  [/Aksesuar(ları|ı)?/gi, 'accessory'],
  [/Su Geçirmez/gi, 'waterproof'],
  [/Giyim/gi, 'apparel'],
  [/Kross/gi, 'motocross'],
  [/Ayna/gi, 'mirror'],
  [/İçin|Için/gi, 'for']
];

function applyTerms(value, pairs) {
  let out = norm(value);
  pairs.forEach(([re, repl]) => {
    out = out.replace(re, repl);
  });
  return out.replace(/\s+/g, ' ').trim();
}

function titleCaseEn(value) {
  return norm(value).replace(/\b([a-z])/g, (m) => m.toUpperCase());
}

const { polishAccessory } = require('./lib/polish-moto-titles');

function toSeries(row) {
  const titleTr = norm(row.title_tr);
  const catId = categoryId(row);
  const translated = applyTerms(applyTerms(titleTr, TITLE_FA), ORDER_FA);
  const nouns = ['کلاه ایمنی موتورسیکلت', 'بوت موتورسیکلت', 'کاپشن موتورسیکلت', 'دستکش موتورسیکلت', 'شلوار موتورسیکلت', 'اینترکام موتورسیکلت', 'طلق کلاه ایمنی', 'کیف موتورسیکلت', 'محافظ موتورسیکلت'];
  const detected = nouns.find((n) => translated.indexOf(n) !== -1);
  const typeFa = detected || TYPE_FA[catId] || norm(row.category_fa);
  const titleFa = polishFa(leadWithType(translated, typeFa));
  const titleEn = titleCaseEn(applyTerms(titleTr, TITLE_EN));
  const brand = norm(row.brand);
  const sku = norm(row.sku);
  const image = mediaPath(row.primary_image);
  const leaf = norm(row.category_path_tr).split(/\s*>\s*/).pop() || norm(row.category_fa);
  const categoryFa = norm(row.category_fa) || typeFa;
  const leafFa = LEAF_FA[leaf] || applyTerms(leaf, TITLE_FA);
  return polishAccessory({
    id: sku.toLowerCase(),
    sku,
    titleFa,
    titleTr,
    titleEn,
    brand,
    image,
    categoryFa,
    leafFa,
    descFa: descFaFor(titleFa, brand, categoryFa, leafFa, row, catId)
  });
}

function buildCatalog(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    if (!row || !row.sku) return;
    const id = categoryId(row);
    if (!groups.has(id)) groups.set(id, []);
    groups.get(id).push(toSeries(row));
  });

  const categories = [...groups.entries()].map(([id, series]) => ({
    id,
    count: series.length,
    series
  }));

  const highlights = [];
  HIGHLIGHT_PREF.forEach((id) => {
    const group = groups.get(id);
    if (!group || !group.length) return;
    const item = group.find((s) => s.image && !/aksesuar|yedek|vizör|visor|cam /i.test(`${s.leafFa} ${s.titleTr}`))
      || group.find((s) => s.image)
      || group[0];
    highlights.push({
      id: item.id,
      title: item.titleFa || item.name,
      titleTr: item.titleTr,
      titleEn: item.titleEn,
      descFa: item.descFa,
      image: item.image,
      badge: item.brand || id
    });
  });

  const brands = [...new Set(rows.map((row) => norm(row.brand)).filter((brand) => {
    return /[A-Za-zÀ-ÿ]/.test(brand) && !/^\d[\d.\s]*$/.test(brand);
  }))].sort((a, b) => a.localeCompare(b));

  return {
    generatedOn: '2026-09-18',
    source: 'bizdavar_automoto_import_2026-09-18',
    productCount: rows.length,
    brands,
    categories,
    highlights: highlights.slice(0, 4)
  };
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let i = 0;
  let inQuotes = false;
  const src = String(text || '').replace(/^\uFEFF/, '');
  while (i < src.length) {
    const ch = src[i];
    if (inQuotes) {
      if (ch === '"') {
        if (src[i + 1] === '"') {
          cell += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      cell += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (ch === ',') {
      row.push(cell);
      cell = '';
      i += 1;
      continue;
    }
    if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && src[i + 1] === '\n') i += 1;
      row.push(cell);
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = '';
      i += 1;
      continue;
    }
    cell += ch;
    i += 1;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  if (!rows.length) return [];
  const headers = rows[0].map((h) => norm(h));
  return rows.slice(1).map((values) => {
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = values[idx] == null ? '' : values[idx];
    });
    return obj;
  });
}

function readPriceCsv(csvPath, zipPath) {
  if (csvPath && fs.existsSync(csvPath)) {
    return parseCsv(fs.readFileSync(csvPath, 'utf8'));
  }
  if (!zipPath || !fs.existsSync(zipPath)) {
    throw new Error('price list not found');
  }
  const py = `
import zipfile
zip_path = r'''${String(zipPath).replace(/\\/g, '/')}'''
with zipfile.ZipFile(zip_path) as z:
    name = next(n for n in z.namelist() if n.endswith('price_list_2026-09-18.csv'))
    print(z.read(name).decode('utf-8-sig'), end='')
`;
  const result = spawnSync('python', ['-c', py], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || 'price zip read failed').trim());
  }
  return parseCsv(result.stdout);
}

const TRY_PER_USD = 48;
const IRAN_DELIVERY_MARKUP = 1.2;

function finitePrice(value) {
  const n = Number(String(value || '').trim().replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}

function usdIranFromTry(tryAmount) {
  return Math.round((tryAmount / TRY_PER_USD) * IRAN_DELIVERY_MARKUP);
}

function applyListingPrices(catalog, priceRows) {
  const bySku = new Map();
  let newWithoutArchive = 0;
  priceRows.forEach((row) => {
    const sku = norm(row.bizdavar_sku).toUpperCase();
    if (sku) bySku.set(sku, row);
    if (norm(row.price_status) === 'new_current_product_not_in_image_archive') {
      newWithoutArchive += 1;
    }
  });

  const stats = {
    matched: 0,
    pricedUsd: 0,
    unavailable: 0,
    skippedNew: newWithoutArchive,
    rejected: 0
  };

  catalog.categories.forEach((cat) => {
    (cat.series || []).forEach((item) => {
      const row = bySku.get(norm(item.sku).toUpperCase());
      if (!row) {
        stats.rejected += 1;
        return;
      }
      stats.matched += 1;
      const status = norm(row.price_status);
      if (status === 'unavailable_in_current_public_listing') {
        stats.unavailable += 1;
        item.availability = 'not_listed';
        return;
      }
      if (status !== 'current_public_listing') {
        stats.rejected += 1;
        return;
      }
      const amount = finitePrice(row.current_price);
      if (amount == null) return;
      if (norm(row.currency) && norm(row.currency) !== 'TRY' && norm(row.currency) !== 'TL') {
        stats.rejected += 1;
        return;
      }
      item.priceUsd = usdIranFromTry(amount);
      item.currency = 'USD';
      item.availability = norm(row.availability) === 'out_of_stock' ? 'out_of_stock' : 'in_stock';
      stats.pricedUsd += 1;
    });
  });

  const byId = new Map();
  catalog.categories.forEach((cat) => {
    (cat.series || []).forEach((item) => byId.set(item.id, item));
  });
  (catalog.highlights || []).forEach((item) => {
    const src = byId.get(item.id);
    if (src && src.priceUsd != null) {
      item.priceUsd = src.priceUsd;
      item.currency = 'USD';
    }
  });

  catalog.priceCurrency = 'USD';
  catalog.tryPerUsd = TRY_PER_USD;
  catalog.iranMarkup = IRAN_DELIVERY_MARKUP;
  catalog.priceConverted = true;
  catalog.priceStats = stats;
  return stats;
}

function writeCatalog(catalog) {
  const dir = path.join(ROOT, 'assets', 'data', 'auto-moto');
  fs.mkdirSync(dir, { recursive: true });
  const jsonPath = path.join(dir, 'catalog.json');
  fs.writeFileSync(jsonPath, JSON.stringify(catalog));
  return { jsonPath, bytes: fs.statSync(jsonPath).size, products: catalog.productCount };
}

function extractMedia(zipPath) {
  const dest = path.join(ROOT, 'media');
  fs.mkdirSync(dest, { recursive: true });
  const py = `
import zipfile, os
zip_path = r'''${zipPath.replace(/\\/g, '/')}'''
dest = r'''${dest.replace(/\\/g, '/')}'''
os.makedirs(dest, exist_ok=True)
extracted = 0
skipped = 0
with zipfile.ZipFile(zip_path) as z:
    for name in z.namelist():
        if name.endswith('/') or not name.startswith('media/catalog/automoto/'):
            skipped += 1
            continue
        target = os.path.join(dest, os.path.relpath(name, 'media'))
        os.makedirs(os.path.dirname(target), exist_ok=True)
        if os.path.exists(target) and os.path.getsize(target) > 0:
            extracted += 1
            continue
        with z.open(name) as src, open(target, 'wb') as out:
            out.write(src.read())
        extracted += 1
print(f'extracted={extracted}')
`;
  const result = spawnSync('python', ['-c', py], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || 'media extract failed').trim());
  }
  return norm(result.stdout);
}

function main() {
  const zipPath = argValue('--zip', DEFAULT_ZIP);
  const jsonlPath = fs.existsSync(DEFAULT_JSONL) ? DEFAULT_JSONL : '';
  const jsonOnly = process.argv.includes('--json-only');

  let rows;
  if (jsonlPath) {
    rows = readJsonl(jsonlPath);
  } else {
    throw new Error('products.jsonl not found: ' + DEFAULT_JSONL);
  }

  const catalog = buildCatalog(rows);
  const priceZip = argValue('--prices', DEFAULT_PRICE_ZIP);
  const priceCsv = argValue('--price-csv', fs.existsSync(DEFAULT_PRICE_CSV) ? DEFAULT_PRICE_CSV : '');
  const priceRows = readPriceCsv(priceCsv, priceZip);
  const priceStats = applyListingPrices(catalog, priceRows);
  catalog.source = 'bizdavar_automoto_import_2026-09-18 + price_list_2026-09-18';
  const written = writeCatalog(catalog);
  const counts = catalog.categories.map((c) => c.id + ':' + c.count).join(', ');
  console.log('catalog.json', written.products, 'products', Math.round(written.bytes / 1024) + 'KB');
  console.log('categories', counts);
  console.log('prices matched', priceStats.matched);
  console.log('prices USD Iran', priceStats.pricedUsd, 'rate 1 USD = 48 TRY + 20%');
  console.log('unavailable kept', priceStats.unavailable);
  console.log('new skipped no image', priceStats.skippedNew);
  console.log('rejected', priceStats.rejected);

  if (!jsonOnly) {
    if (!fs.existsSync(zipPath)) throw new Error('zip not found: ' + zipPath);
    console.log(extractMedia(zipPath));
  }
}

main();
