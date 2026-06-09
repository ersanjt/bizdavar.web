/**
 * Prosense — Product catalog (source: prosense.com.tr)
 * گاز و آتش دتکتور — Prosense Teknoloji Sanayi A.Ş.
 */
window.PROSENSE_CATALOG = {
  brand: {
    name: 'Prosense',
    nameFa: 'پروسنس',
    tagline: 'Gaz ve Alev Dedektörleri',
    taglineFa: 'دتکتورهای گاز و شعله صنعتی',
    since: 'از سال ۲۰۰۶',
    origin: 'کارتال، استانبول — ترکیه',
    officialUrl: 'https://www.prosense.com.tr/?lang=tr',
    email: 'info@prosense.com.tr',
    phone: '+90 216 306 77 88',
    descriptionFa: 'Prosense بیش از ۱۰۰۰ گاز صنعتی را پوشش می‌دهد — دتکتور گاز ثابت و پرتابل، دتکتور شعله، پنل کنترل، نرم‌افزار و سیستم‌های otopark gaz algılama. کیفیت محصولات با گواهینامه‌های بین‌المللی تأیید شده است.'
  },

  highlights: [
    { title: 'PQ Serisi — SIL2 / SIL3', desc: 'دتکتور گاز ثابت با گواهی SIL برای ایمنی فرآیند', badge: 'SIL' },
    { title: 'SOMA Serisi — M1', desc: 'دتکتور معدن — محافظت در برابر خطرات گازی در معادن', badge: 'Maden' },
    { title: 'PPS+ Otopark — EN 50545-1', desc: 'اولین سیستم otopark gaz algılama مطابق EN 50545-1', badge: 'Otopark' },
    { title: 'MPS™ Hidrokarbon', desc: 'سنسور MPS — دقت و قابلیت اطمینان جدید در تشخیص هیدروکاربن', badge: 'MPS' },
    { title: 'PQD VOC', desc: 'دتکتور VOC — کاهش ریسک ترکیبات آلی فرار', badge: 'VOC' },
    { title: 'TÜRKAK Akredite', desc: 'کالیبراسیون مطابق TS EN ISO/IEC 17025 — AB-0260-K', badge: 'Kalibrasyon' },
    { title: 'Marine & Offshore', desc: 'گواهی دریانوردی برای H2S و CH4', badge: 'Denizcilik' },
    { title: 'HART FDI', desc: 'ماژول HART و نرم‌افزار FDI تأییدشده', badge: 'HART' }
  ],

  categories: [
    {
      id: 'fixed',
      title: 'دتکتورهای گاز ثابت',
      titleTr: 'Sabit Gaz Dedektörleri',
      icon: 'sensor',
      desc: 'سنسورهای گاز ثابت برای نصب دائم در تاسیسات صنعتی',
      series: [
        { name: 'PQ Serisi', note: 'SIL2, SIL3 sertifikalı', featured: true },
        { name: 'PX Serisi', note: 'عملکرد پیشرفته' },
        { name: 'P Serisi', note: 'سری استاندارد' },
        { name: 'PE Serisi', note: 'نسخه PE' },
        { name: 'SOMA Serisi', note: 'M1 Sertifikalı — Maden', featured: true },
        { name: 'SafeVader Serisi', note: 'ایمنی فرآیند', featured: true },
        { name: 'PE-Kayo Serisi', note: 'سری Kayo' },
        { name: 'PC3 Serisi', note: 'فشرده' },
        { name: 'BTN Serisi', note: 'BTN' },
        { name: 'PPS Serisi', note: 'Otopark gaz algılama' },
        { name: 'PPS+ Serisi', note: 'EN-50545-1 Sertifikalı', featured: true },
        { name: 'PPSR Serisi', note: 'Otopark — PPSR' },
        { name: 'Open Path', note: 'مسیر باز — شناسایی از راه دور' },
        { name: 'Smart 3G', note: 'ارتباط هوشمند 3G' },
        { name: 'Xgard', note: 'Xgard' },
        { name: 'IRmax', note: 'فناوری IR' }
      ]
    },
    {
      id: 'portable',
      title: 'دتکتورهای گاز پرتابل',
      titleTr: 'Portatif Gaz Dedektörleri',
      icon: 'bag',
      desc: 'ابزار اندازه‌گیری قابل حمل برای کارکنان و بازرسی میدانی',
      series: [
        { name: 'Gas-Pro', note: 'حرفه‌ای' },
        { name: 'Tank-Pro', note: 'مخازن و تانک' },
        { name: 'T4', note: 'چهار گاز' },
        { name: 'Tetra 3', note: 'Tetra 3' },
        { name: 'Gasman', note: 'Gasman' },
        { name: 'Triple Plus+', note: 'سه‌گانه+' },
        { name: 'Detective+', note: 'Detective+' },
        { name: 'Detective Wireless', note: 'بی‌سیم' },
        { name: 'Ventis Pro', note: 'Ventis Pro' },
        { name: 'MX6 iBrid', note: 'iBrid' },
        { name: 'Ventis MX4', note: 'MX4' },
        { name: 'Tango TX1', note: 'Tango TX1' },
        { name: 'GasBadge Pro', note: 'GasBadge Pro' }
      ]
    },
    {
      id: 'flame',
      title: 'دتکتورهای شعله',
      titleTr: 'Alev Dedektörleri',
      icon: 'flame',
      desc: 'شناسایی شعله و آتش در محیط‌های صنعتی و خطرناک',
      series: [
        { name: 'Takex', note: 'Takex' },
        { name: 'Rezontech', note: 'Rezontech' },
        { name: 'Viking', note: 'Viking' },
        { name: 'Spectrex', note: 'Spectrex' },
        { name: 'Det-Tronics', note: 'Det-Tronics' },
        { name: 'Siemens', note: 'Siemens' }
      ]
    },
    {
      id: 'panels',
      title: 'پنل‌های کنترل',
      titleTr: 'Kontrol Panelleri',
      icon: 'desktop',
      desc: 'پنل‌های آنالوگ و دیجیتال برای مدیریت چندین دتکتور',
      series: [
        { name: 'S-DP4 Analog', note: '۴ کانال آنالوگ' },
        { name: 'S-DP8 Analog', note: '۸ کانال آنالوگ' },
        { name: 'S-DP32 Dijital', note: '۳۲ کانال دیجیتال' },
        { name: 'S-DPX004 Analog', note: 'DPX ۴ آنالوگ' },
        { name: 'S-DPX008 Analog', note: 'DPX ۸ آنالوگ' },
        { name: 'S-DPX032 Dijital & Analog', note: '۳۲ ترکیبی' },
        { name: 'S-DPX064 Dijital & Analog', note: '۶۴ ترکیبی' },
        { name: 'S-DPX128 Dijital & Analog', note: '۱۲۸ ترکیبی' },
        { name: 'MULTISCAN++', note: 'MULTISCAN++' },
        { name: 'PL4+', note: 'PL4+' },
        { name: 'PPS-Manager', note: 'مدیریت PPS' },
        { name: 'PPS+-Manager', note: 'مدیریت PPS+' }
      ]
    },
    {
      id: 'parking',
      title: 'سیستم گاز پارکینگ',
      titleTr: 'Otopark Gaz Algılama',
      icon: 'parking',
      desc: 'سیستم‌های تشخیص CO و NO2 در پارکینگ‌های بسته',
      series: [
        { name: 'PPS Otopark Gaz Algılama', note: 'PPS' },
        { name: 'PPS+ Otopark Gaz Algılama', note: 'EN-50545-1', featured: true },
        { name: 'PPSR Otopark Gaz Algılama', note: 'PPSR' }
      ]
    },
    {
      id: 'software',
      title: 'نرم‌افزارها',
      titleTr: 'Yazılımlar',
      icon: 'monitor',
      desc: 'نرم‌افزار پیکربندی، مانیتورینگ و مدیریت سیستم',
      series: [
        { name: 'S-PVSX', note: 'S-PVSX' },
        { name: 'S-MCX004', note: 'MCX ۴' },
        { name: 'S-MCX008', note: 'MCX ۸' },
        { name: 'S-MCX032', note: 'MCX ۳۲' },
        { name: 'S-MCX064', note: 'MCX ۶۴' },
        { name: 'S-MCX128', note: 'MCX ۱۲۸' },
        { name: 'S-MCX', note: 'S-MCX' },
        { name: 'S-SETX', note: 'S-SETX' }
      ]
    },
    {
      id: 'calibration',
      title: 'سیلندر کالیبراسیون',
      titleTr: 'Kalibrasyon Test Tüpü',
      icon: 'lab',
      desc: 'گازهای تست و کالیبراسیون Span',
      series: [
        { name: 'Span / Test Gaz Tüpleri', note: 'Span' },
        { name: 'Karışım Gaz Tüpleri', note: 'Karışım' },
        { name: 'Sıfırlama Tüpleri', note: 'Sıfır' },
        { name: 'Kalibrasyon Gaz Regülatörü', note: 'Regülatör' }
      ]
    },
    {
      id: 'other',
      title: 'سایر تجهیزات',
      titleTr: 'Diğer Ekipmanlar',
      icon: 'wrench',
      desc: 'لوازم جانبی، آژیر، منبع تغذیه و تجهیزات Ex',
      series: [
        { name: 'Gaz Toplama Aparatı', note: 'نمونه‌برداری' },
        { name: 'Ex Yangın Ekipmanları', note: 'Ex' },
        { name: 'Siren ve Flaşörler', note: 'هشدار' },
        { name: 'PG-PS120 24V Güç Kaynağı', note: '24V' },
        { name: 'EOL (End of Life)', note: 'EOL' }
      ]
    }
  ],

  industries: [
    { name: 'نفت و گاز', nameTr: 'Petrol ve Gaz', desc: 'SIL2 sertifikalı سیستم‌های درجه یک', icon: 'barrel' },
    { name: 'ایستگاه گاز', nameTr: 'Gaz Dağıtım İstasyonları', desc: 'گازهای قابل اشتعال و سمی', icon: 'gas-station' },
    { name: 'پارکینگ سرپوشیده', nameTr: 'Kapalı Otoparklar', desc: 'EN 50545-1 — اولین سیستم جهانی', icon: 'parking' },
    { name: 'کشتیرانی', nameTr: 'Denizcilik', desc: 'H2S و CH4 — Marine sertifikalı', icon: 'ship' },
    { name: 'HVAC و Freon', nameTr: 'HVAC - Freon', desc: 'CO2, O2, NH3, Freon', icon: 'snowflake' },
    { name: 'تصفیه آب', nameTr: 'Su Arıtma Tesisleri', desc: 'H2S, CH4, NH3, SO2, O2, CO', icon: 'droplet' },
    { name: 'پتروشیمی', nameTr: 'Petrokimya', desc: 'ایمنی فرآیند', icon: 'flask' },
    { name: 'معدن و تونل', nameTr: 'Maden ve Tüneller', desc: 'SOMA — M1 sertifikalı', icon: 'pickaxe' },
    { name: 'فولاد', nameTr: 'Demir Çelik', desc: 'محیط‌های سنگین صنعتی', icon: 'factory' },
    { name: 'داروسازی', nameTr: 'İlaç Sanayi', desc: 'کنترل گازهای فرآیندی', icon: 'pill' },
    { name: 'غذا و نوشیدنی', nameTr: 'Yemek ve İçecek', desc: 'ایمنی تولید', icon: 'utensils' },
    { name: 'اتاق شارژ باتری', nameTr: 'Akü Dolum Odaları', desc: 'محافظت در برابر هیدروژن', icon: 'battery' }
  ],

  academy: {
    title: 'Prosense Akademi',
    descFa: 'مهندسی و تجربه بخشی — اصول تشخیص گاز، فناوری سنسور، استانداردها، وبینارها و جزئیات گازها.',
    topics: ['اصول تشخیص گاز', 'فناوری سنسور', 'استانداردها و گواهینامه‌ها', 'وبینارهای تخصصی', 'جزئیات گازها', 'بررسی تجهیزات']
  },

  services: [
    'TÜRKAK Akredite Kalibrasyon و نگهداری',
    'مشاوره انتخاب دتکتور مناسب',
    'تامین اصل Prosense از ترکیه',
    'طراحی سیستم gaz algılama',
    'پشتیبانی فنی و آموزش',
    'لجستیک بین‌المللی — بیزدوار گروپ'
  ],

  bizdavarNote: 'بیزدوار گروپ — تامین Prosense، VEGA و سایر برندهای ابزار دقیق صنعتی'
};
