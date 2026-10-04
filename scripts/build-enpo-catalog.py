# -*- coding: utf-8 -*-
"""Build the ENPO supply catalog and locale pages from crawled source data."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "data" / "enpo" / "catalog-source.json"
IMG = ROOT / "assets" / "images" / "enpo"

GLOSS = {
    "fa": [
        ("Yüksek Teknoloji Ürünleri", "محصولات فناوری پیشرفته"),
        ("Pnömatik Tahrikli Programlanabilir Silindirler", "سیلندرهای قابل برنامه‌ریزی با محرک پنوماتیک"),
        ("Manometre Ve Basınç Vakum Anahtarları", "مانومتر و کلیدهای فشار و خلاء"),
        ("Şartlandırıcıya Uyumlu Dijital Anahtarlar", "کلیدهای دیجیتال سازگار با واحد مراقبت"),
        ("Elektrik Uyarılı Aç Kapa Valfleri", "شیرهای قطع و وصل تحریک الکتریکی"),
        ("Servo Kontrollü Aç Kapa Valfleri", "شیرهای قطع و وصل با کنترل سروو"),
        ("Büyük Gövde İkili Şartlandırıcılar", "واحد دوتایی بدنه بزرگ"),
        ("Büyük Gövde Üçlü Şartlandırıcılar", "واحد سه‌تایی بدنه بزرگ"),
        ("Büyük Gövde Filtre Regülatörler", "فیلتر رگولاتور بدنه بزرگ"),
        ("İkili Şartlandırıcılar", "واحدهای دوتایی مراقبت هوا"),
        ("Üçlü Şartlandırıcılar", "واحدهای سه‌تایی مراقبت هوا"),
        ("Kombine Filtre Regülatörler", "فیلتر رگولاتورهای ترکیبی"),
        ("Yavaş Başlatma Valfleri", "شیرهای راه‌اندازی نرم"),
        ("Yavaş Başlatma Valfi", "شیر راه‌اندازی نرم"),
        ("Manuel Aç Kapa Valfleri", "شیرهای قطع و وصل دستی"),
        ("Hava Hazırlayıcılar", "آماده‌سازی هوا"),
        ("Dağıtıcı Bloklar", "بلوک‌های توزیع"),
        ("Dağıtıcılar", "توزیع‌کننده‌ها"),
        ("Manyetik Sensörler", "سنسورهای مغناطیسی"),
        ("Kompakt Silindirler", "سیلندرهای کامپکت"),
        ("Rodless Milsiz Silindirler", "سیلندرهای بدون شفت"),
        ("Milsiz Silindir Kilitleme Ünitesi", "واحد قفل سیلندر بدون شفت"),
        ("Silindir Kilitleme Ünitesi", "واحد قفل سیلندر"),
        ("Rodless Silindirler", "سیلندرهای بدون شفت"),
        ("Kısa Stroklu Silindirler", "سیلندرهای کورس کوتاه"),
        ("Yataklı Silindirler", "سیلندرهای هدایت‌دار"),
        ("Kalem Silindirler", "سیلندرهای قلمی"),
        ("Oval Silindirler", "سیلندرهای بیضی"),
        ("Teleskopik Silindirler", "سیلندرهای تلسکوپی"),
        ("Paslanmaz Silindirler", "سیلندرهای استنلس"),
        ("Kilitleme Üniteleri", "واحدهای قفل"),
        ("Kilitleme Valfleri", "شیرهای قفل"),
        ("Gripper Serileri", "سری‌های گریپر"),
        ("Açılı Gripper", "گریپر زاویه‌ای"),
        ("Paralel Seri Gripper", "گریپر موازی"),
        ("Paralel Gripper", "گریپر موازی"),
        ("Ayaklı Gripper", "گریپر سه‌فک"),
        ("Derece Gripper", "درجه گریپر"),
        ("Filtre Regülatörler", "فیلتر رگولاتورها"),
        ("Hassas Regülatörler", "رگولاتورهای دقیق"),
        ("Mikro Regülatör", "میکرو رگولاتور"),
        ("Oransal Regülatör", "رگولاتور تناسبی"),
        ("Büyük Seri Regülatörler", "رگولاتورهای سایز بزرگ"),
        ("Büyük Filtreler", "فیلترهای سایز بزرگ"),
        ("Dijital Anahtarlar", "کلیدهای دیجیتال"),
        ("Gömme Manometreler", "مانومترهای توکار"),
        ("Ayarlı Basınç Anahtarı", "کلید فشار قابل تنظیم"),
        ("Aksesuarlar ve Diğer Valf Grupları", "لوازم جانبی و سایر گروه‌های شیر"),
        ("Hava Ve Yağ Tankı", "مخزن هوا و روغن"),
        ("Kısma Valfleri", "شیرهای کنترل دبی"),
        ("Ve Veya Valfleri", "شیرهای AND/OR"),
        ("Ekonomizatörler", "اکونومایزرها"),
        ("Flip Flop Valfler", "شیرهای فلیپ‌فلاپ"),
        ("Solenoid Valfler", "شیرهای سلونوئیدی"),
        ("Konumlandırma Valfi", "شیر موقعیت‌دهی"),
        ("Pnömatik Silindirler için", "برای سیلندر پنوماتیک"),
        ("Akümülatörler", "آکومولاتورها"),
        ("Bobin Ve Konnektörler", "بوبین و کانکتور"),
        ("Minyatür Elektropilot", "الکتروپایلوت مینیاتوری"),
        ("Elektropilotlar", "الکتروپایلوت‌ها"),
        ("Mikro Valf", "میکروشیر"),
        ("Nano Valf", "نانوشیر"),
        ("Nanovalves", "نانوشیر"),
        ("Sertifikaları Solenoid Valfler", "شیرهای سلونوئیدی با گواهی"),
        ("Namur Valfler", "شیرهای NAMUR"),
        ("ISO Valfler", "شیرهای ISO"),
        ("Mekanik Operatörler", "عملگرهای مکانیکی"),
        ("Popet Ve Genel Maksat Valfler", "شیرهای پاپت و مصارف عمومی"),
        ("Popet Valfler", "شیرهای پاپت"),
        ("Vakum Ve Dıştan Pilotlu Valfler", "شیرهای خلاء و پایلوت خارجی"),
        ("Pano Bağlantılı Mekanik Valfler", "شیرهای مکانیکی نصب تابلویی"),
        ("Mekanik Valfler", "شیرهای مکانیکی"),
        ("Minyatür Pimli Valf", "شیر پین‌دار مینیاتوری"),
        ("Pedal Valfler", "شیرهای پدالی"),
        ("Multipine Valfler", "شیرهای مولتی‌پین"),
        ("Seri İletişim Modülleri", "ماژول‌های ارتباط سریال"),
        ("Haberleşme Modüleri", "ماژول‌های ارتباطی"),
        ("Spool Valfler", "شیرهای اسپول"),
        ("Minyatür Valfler", "شیرهای مینیاتوری"),
        ("Montaj Kitleri", "کیت‌های نصب"),
        ("Diğer Ürünlerimiz", "سایر محصولات"),
        ("Manometreler", "مانومترها"),
        ("Regülatörler", "رگولاتورها"),
        ("Filtreler", "فیلترها"),
        ("Yağlayıcılar", "روغن‌زن‌ها"),
        ("Bobinler", "بوبین‌ها"),
        ("Operatörler", "عملگرها"),
        ("Klavuz", "راهنما"),
        ("Silindirler", "سیلندرها"),
        ("Valfler", "شیرها"),
        ("Yataklı", "هدایت‌دار"),
        ("Paslanmaz", "استنلس"),
        ("Serisi", "سری"),
    ],
    "en": [
        ("Yüksek Teknoloji Ürünleri", "High-technology products"),
        ("Pnömatik Tahrikli Programlanabilir Silindirler", "Programmable pneumatic cylinders"),
        ("Manometre Ve Basınç Vakum Anahtarları", "Pressure gauges and pressure/vacuum switches"),
        ("Şartlandırıcıya Uyumlu Dijital Anahtarlar", "Digital switches for air-prep units"),
        ("Elektrik Uyarılı Aç Kapa Valfleri", "Electrically actuated on/off valves"),
        ("Servo Kontrollü Aç Kapa Valfleri", "Servo-controlled on/off valves"),
        ("Büyük Gövde İkili Şartlandırıcılar", "Large-body FR+L units"),
        ("Büyük Gövde Üçlü Şartlandırıcılar", "Large-body F+R+L units"),
        ("Büyük Gövde Filtre Regülatörler", "Large-body filter regulators"),
        ("İkili Şartlandırıcılar", "FR+L air preparation units"),
        ("Üçlü Şartlandırıcılar", "F+R+L air preparation units"),
        ("Kombine Filtre Regülatörler", "Filter regulators"),
        ("Yavaş Başlatma Valfleri", "Soft-start valves"),
        ("Yavaş Başlatma Valfi", "Soft-start valve"),
        ("Manuel Aç Kapa Valfleri", "Manual on/off valves"),
        ("Hava Hazırlayıcılar", "Air preparation"),
        ("Dağıtıcı Bloklar", "Distributor blocks"),
        ("Dağıtıcılar", "Distributors"),
        ("Manyetik Sensörler", "Magnetic sensors"),
        ("Kompakt Silindirler", "Compact cylinders"),
        ("Rodless Milsiz Silindirler", "Rodless cylinders"),
        ("Milsiz Silindir Kilitleme Ünitesi", "Rodless cylinder locking unit"),
        ("Silindir Kilitleme Ünitesi", "Cylinder locking unit"),
        ("Rodless Silindirler", "Rodless cylinders"),
        ("Kısa Stroklu Silindirler", "Short-stroke cylinders"),
        ("Yataklı Silindirler", "Guided cylinders"),
        ("Kalem Silindirler", "Pencil cylinders"),
        ("Oval Silindirler", "Oval cylinders"),
        ("Teleskopik Silindirler", "Telescopic cylinders"),
        ("Paslanmaz Silindirler", "Stainless cylinders"),
        ("Kilitleme Üniteleri", "Locking units"),
        ("Kilitleme Valfleri", "Locking valves"),
        ("Gripper Serileri", "Gripper series"),
        ("Açılı Gripper", "Angular gripper"),
        ("Paralel Seri Gripper", "Parallel gripper"),
        ("Paralel Gripper", "Parallel gripper"),
        ("Ayaklı Gripper", "3-jaw gripper"),
        ("Derece Gripper", "degree gripper"),
        ("Filtre Regülatörler", "Filter regulators"),
        ("Hassas Regülatörler", "Precision regulators"),
        ("Mikro Regülatör", "Micro regulator"),
        ("Oransal Regülatör", "Proportional regulator"),
        ("Büyük Seri Regülatörler", "Large regulators"),
        ("Büyük Filtreler", "Large filters"),
        ("Dijital Anahtarlar", "Digital switches"),
        ("Gömme Manometreler", "Flush pressure gauges"),
        ("Ayarlı Basınç Anahtarı", "Adjustable pressure switch"),
        ("Aksesuarlar ve Diğer Valf Grupları", "Accessories and other valve groups"),
        ("Hava Ve Yağ Tankı", "Air and oil reservoir"),
        ("Kısma Valfleri", "Flow control valves"),
        ("Ve Veya Valfleri", "AND/OR valves"),
        ("Ekonomizatörler", "Economizers"),
        ("Flip Flop Valfler", "Flip-flop valves"),
        ("Solenoid Valfler", "Solenoid valves"),
        ("Konumlandırma Valfi", "Positioning valve"),
        ("Pnömatik Silindirler için", "for pneumatic cylinders"),
        ("Akümülatörler", "Accumulators"),
        ("Bobin Ve Konnektörler", "Coils and connectors"),
        ("Minyatür Elektropilot", "Miniature solenoid pilot"),
        ("Elektropilotlar", "Solenoid pilots"),
        ("Mikro Valf", "Micro valve"),
        ("Nano Valf", "Nano valve"),
        ("Nanovalves", "nano valves"),
        ("Sertifikaları Solenoid Valfler", "Certified solenoid valves"),
        ("Namur Valfler", "NAMUR valves"),
        ("ISO Valfler", "ISO valves"),
        ("Mekanik Operatörler", "Mechanical operators"),
        ("Popet Ve Genel Maksat Valfler", "Poppet and general-purpose valves"),
        ("Popet Valfler", "Poppet valves"),
        ("Vakum Ve Dıştan Pilotlu Valfler", "Vacuum and external-pilot valves"),
        ("Pano Bağlantılı Mekanik Valfler", "Panel-mounted mechanical valves"),
        ("Mekanik Valfler", "Mechanical valves"),
        ("Minyatür Pimli Valf", "Miniature plunger valve"),
        ("Pedal Valfler", "Pedal valves"),
        ("Multipine Valfler", "Multipin valves"),
        ("Seri İletişim Modülleri", "Serial communication modules"),
        ("Haberleşme Modüleri", "Communication modules"),
        ("Spool Valfler", "Spool valves"),
        ("Minyatür Valfler", "Miniature valves"),
        ("Montaj Kitleri", "Mounting kits"),
        ("Diğer Ürünlerimiz", "Other products"),
        ("Manometreler", "Pressure gauges"),
        ("Regülatörler", "Regulators"),
        ("Filtreler", "Filters"),
        ("Yağlayıcılar", "Lubricators"),
        ("Bobinler", "Coils"),
        ("Operatörler", "Operators"),
        ("Klavuz", "Guide"),
        ("Silindirler", "Cylinders"),
        ("Valfler", "Valves"),
        ("Yataklı", "guided"),
        ("Paslanmaz", "Stainless"),
        ("Serisi", "series"),
    ],
    "ru": [
        ("Yüksek Teknoloji Ürünleri", "Высокотехнологичные изделия"),
        ("Pnömatik Tahrikli Programlanabilir Silindirler", "Программируемые пневмоцилиндры"),
        ("Manometre Ve Basınç Vakum Anahtarları", "Манометры и реле давления/вакуума"),
        ("Şartlandırıcıya Uyumlu Dijital Anahtarlar", "Цифровые реле для блоков подготовки воздуха"),
        ("Elektrik Uyarılı Aç Kapa Valfleri", "Клапаны вкл/выкл с электроуправлением"),
        ("Servo Kontrollü Aç Kapa Valfleri", "Сервоуправляемые клапаны вкл/выкл"),
        ("Büyük Gövde İkili Şartlandırıcılar", "Крупные блоки FR+L"),
        ("Büyük Gövde Üçlü Şartlandırıcılar", "Крупные блоки F+R+L"),
        ("Büyük Gövde Filtre Regülatörler", "Крупные фильтр-регуляторы"),
        ("İkili Şartlandırıcılar", "Блоки FR+L"),
        ("Üçlü Şartlandırıcılar", "Блоки F+R+L"),
        ("Kombine Filtre Regülatörler", "Фильтр-регуляторы"),
        ("Yavaş Başlatma Valfleri", "Клапаны плавного пуска"),
        ("Yavaş Başlatma Valfi", "Клапан плавного пуска"),
        ("Manuel Aç Kapa Valfleri", "Ручные клапаны вкл/выкл"),
        ("Hava Hazırlayıcılar", "Подготовка воздуха"),
        ("Dağıtıcı Bloklar", "Распределительные блоки"),
        ("Dağıtıcılar", "Распределители"),
        ("Manyetik Sensörler", "Магнитные датчики"),
        ("Kompakt Silindirler", "Компактные цилиндры"),
        ("Rodless Milsiz Silindirler", "Бесштоковые цилиндры"),
        ("Milsiz Silindir Kilitleme Ünitesi", "Блок фиксации бесштокового цилиндра"),
        ("Silindir Kilitleme Ünitesi", "Блок фиксации цилиндра"),
        ("Rodless Silindirler", "Бесштоковые цилиндры"),
        ("Kısa Stroklu Silindirler", "Короткоходовые цилиндры"),
        ("Yataklı Silindirler", "Направляющие цилиндры"),
        ("Kalem Silindirler", "Карандашные цилиндры"),
        ("Oval Silindirler", "Овальные цилиндры"),
        ("Teleskopik Silindirler", "Телескопические цилиндры"),
        ("Paslanmaz Silindirler", "Нержавеющие цилиндры"),
        ("Kilitleme Üniteleri", "Блоки фиксации"),
        ("Kilitleme Valfleri", "Клапаны блокировки"),
        ("Gripper Serileri", "Серии захватов"),
        ("Açılı Gripper", "Угловой захват"),
        ("Paralel Seri Gripper", "Параллельный захват"),
        ("Paralel Gripper", "Параллельный захват"),
        ("Ayaklı Gripper", "Трёхкулачковый захват"),
        ("Derece Gripper", "градусов захват"),
        ("Filtre Regülatörler", "Фильтр-регуляторы"),
        ("Hassas Regülatörler", "Прецизионные регуляторы"),
        ("Mikro Regülatör", "Микрорегулятор"),
        ("Oransal Regülatör", "Пропорциональный регулятор"),
        ("Büyük Seri Regülatörler", "Крупные регуляторы"),
        ("Büyük Filtreler", "Крупные фильтры"),
        ("Dijital Anahtarlar", "Цифровые реле"),
        ("Gömme Manometreler", "Встраиваемые манометры"),
        ("Ayarlı Basınç Anahtarı", "Регулируемое реле давления"),
        ("Aksesuarlar ve Diğer Valf Grupları", "Аксессуары и прочие группы клапанов"),
        ("Hava Ve Yağ Tankı", "Резервуар воздуха и масла"),
        ("Kısma Valfleri", "Дроссели"),
        ("Ve Veya Valfleri", "Клапаны И/ИЛИ"),
        ("Ekonomizatörler", "Экономайзеры"),
        ("Flip Flop Valfler", "Клапаны flip-flop"),
        ("Solenoid Valfler", "Электромагнитные клапаны"),
        ("Konumlandırma Valfi", "Клапан позиционирования"),
        ("Pnömatik Silindirler için", "для пневмоцилиндров"),
        ("Akümülatörler", "Аккумуляторы"),
        ("Bobin Ve Konnektörler", "Катушки и разъёмы"),
        ("Minyatür Elektropilot", "Миниатюрный электропилот"),
        ("Elektropilotlar", "Электропилоты"),
        ("Mikro Valf", "Микроклапан"),
        ("Nano Valf", "Наноклапан"),
        ("Nanovalves", "наноклапаны"),
        ("Sertifikaları Solenoid Valfler", "Сертифицированные электромагнитные клапаны"),
        ("Namur Valfler", "Клапаны NAMUR"),
        ("ISO Valfler", "Клапаны ISO"),
        ("Mekanik Operatörler", "Механические операторы"),
        ("Popet Ve Genel Maksat Valfler", "Тарельчатые и общепромышленные клапаны"),
        ("Popet Valfler", "Тарельчатые клапаны"),
        ("Vakum Ve Dıştan Pilotlu Valfler", "Вакуумные клапаны с внешним пилотом"),
        ("Pano Bağlantılı Mekanik Valfler", "Панельные механические клапаны"),
        ("Mekanik Valfler", "Механические клапаны"),
        ("Minyatür Pimli Valf", "Миниатюрный толкательный клапан"),
        ("Pedal Valfler", "Педальные клапаны"),
        ("Multipine Valfler", "Многоштырьковые клапаны"),
        ("Seri İletişim Modülleri", "Модули последовательной связи"),
        ("Haberleşme Modüleri", "Коммуникационные модули"),
        ("Spool Valfler", "Золотниковые клапаны"),
        ("Minyatür Valfler", "Миниатюрные клапаны"),
        ("Montaj Kitleri", "Монтажные комплекты"),
        ("Diğer Ürünlerimiz", "Прочие изделия"),
        ("Manometreler", "Манометры"),
        ("Regülatörler", "Регуляторы"),
        ("Filtreler", "Фильтры"),
        ("Yağlayıcılar", "Лубрикаторы"),
        ("Bobinler", "Катушки"),
        ("Operatörler", "Операторы"),
        ("Klavuz", "Руководство"),
        ("Silindirler", "Цилиндры"),
        ("Valfler", "Клапаны"),
        ("Yataklı", "направляющий"),
        ("Paslanmaz", "нержавеющие"),
        ("Serisi", "серия"),
    ],
    "ar": [
        ("Yüksek Teknoloji Ürünleri", "منتجات التقنية المتقدمة"),
        ("Pnömatik Tahrikli Programlanabilir Silindirler", "أسطوانات هوائية قابلة للبرمجة"),
        ("Manometre Ve Basınç Vakum Anahtarları", "مقاييس ضغط ومفاتيح ضغط وتفريغ"),
        ("Şartlandırıcıya Uyumlu Dijital Anahtarlar", "مفاتيح رقمية لوحدات تجهيز الهواء"),
        ("Elektrik Uyarılı Aç Kapa Valfleri", "صمامات فتح وإغلاق بتحفيز كهربائي"),
        ("Servo Kontrollü Aç Kapa Valfleri", "صمامات فتح وإغلاق بتحكم سيرفو"),
        ("Büyük Gövde İkili Şartlandırıcılar", "وحدات FR+L بهيكل كبير"),
        ("Büyük Gövde Üçlü Şartlandırıcılar", "وحدات F+R+L بهيكل كبير"),
        ("Büyük Gövde Filtre Regülatörler", "منظمات مرشح بهيكل كبير"),
        ("İkili Şartlandırıcılar", "وحدات FR+L"),
        ("Üçlü Şartlandırıcılar", "وحدات F+R+L"),
        ("Kombine Filtre Regülatörler", "منظمات المرشح"),
        ("Yavaş Başlatma Valfleri", "صمامات التشغيل التدريجي"),
        ("Yavaş Başlatma Valfi", "صمام تشغيل تدريجي"),
        ("Manuel Aç Kapa Valfleri", "صمامات فتح وإغلاق يدوية"),
        ("Hava Hazırlayıcılar", "تجهيز الهواء"),
        ("Dağıtıcı Bloklar", "بلوكات التوزيع"),
        ("Dağıtıcılar", "موزعات"),
        ("Manyetik Sensörler", "حساسات مغناطيسية"),
        ("Kompakt Silindirler", "أسطوانات مدمجة"),
        ("Rodless Milsiz Silindirler", "أسطوانات بلا قضيب"),
        ("Milsiz Silindir Kilitleme Ünitesi", "وحدة قفل أسطوانة بلا قضيب"),
        ("Silindir Kilitleme Ünitesi", "وحدة قفل الأسطوانة"),
        ("Rodless Silindirler", "أسطوانات بلا قضيب"),
        ("Kısa Stroklu Silindirler", "أسطوانات شوط قصير"),
        ("Yataklı Silindirler", "أسطوانات موجهة"),
        ("Kalem Silindirler", "أسطوانات قلمية"),
        ("Oval Silindirler", "أسطوانات بيضاوية"),
        ("Teleskopik Silindirler", "أسطوانات تلسكوبية"),
        ("Paslanmaz Silindirler", "أسطوانات ستانلس"),
        ("Kilitleme Üniteleri", "وحدات القفل"),
        ("Kilitleme Valfleri", "صمامات القفل"),
        ("Gripper Serileri", "سلاسل القوابض"),
        ("Açılı Gripper", "قابض زاوي"),
        ("Paralel Seri Gripper", "قابض متوازٍ"),
        ("Paralel Gripper", "قابض متوازٍ"),
        ("Ayaklı Gripper", "قابض ثلاثي الفك"),
        ("Derece Gripper", "درجة قابض"),
        ("Filtre Regülatörler", "منظمات المرشح"),
        ("Hassas Regülatörler", "منظمات دقيقة"),
        ("Mikro Regülatör", "منظم دقيق صغير"),
        ("Oransal Regülatör", "منظم تناسبي"),
        ("Büyük Seri Regülatörler", "منظمات كبيرة"),
        ("Büyük Filtreler", "مرشحات كبيرة"),
        ("Dijital Anahtarlar", "مفاتيح رقمية"),
        ("Gömme Manometreler", "مقاييس ضغط غاطسة"),
        ("Ayarlı Basınç Anahtarı", "مفتاح ضغط قابل للضبط"),
        ("Aksesuarlar ve Diğer Valf Grupları", "ملحقات ومجموعات صمامات أخرى"),
        ("Hava Ve Yağ Tankı", "خزان هواء وزيت"),
        ("Kısma Valfleri", "صمامات التحكم بالتدفق"),
        ("Ve Veya Valfleri", "صمامات AND/OR"),
        ("Ekonomizatörler", "موفرات"),
        ("Flip Flop Valfler", "صمامات فليب فلوب"),
        ("Solenoid Valfler", "صمامات ملف لولبي"),
        ("Konumlandırma Valfi", "صمام تحديد موضع"),
        ("Pnömatik Silindirler için", "لأسطوانات الهواء"),
        ("Akümülatörler", "مراكم"),
        ("Bobin Ve Konnektörler", "ملفات وموصلات"),
        ("Minyatür Elektropilot", "طيار كهربائي مصغر"),
        ("Elektropilotlar", "طيارات كهربائية"),
        ("Mikro Valf", "صمام دقيق"),
        ("Nano Valf", "صمام نانو"),
        ("Nanovalves", "صمامات نانو"),
        ("Sertifikaları Solenoid Valfler", "صمامات ملف معتمدة"),
        ("Namur Valfler", "صمامات NAMUR"),
        ("ISO Valfler", "صمامات ISO"),
        ("Mekanik Operatörler", "مشغلات ميكانيكية"),
        ("Popet Ve Genel Maksat Valfler", "صمامات بوبت والاستخدام العام"),
        ("Popet Valfler", "صمامات بوبت"),
        ("Vakum Ve Dıştan Pilotlu Valfler", "صمامات تفريغ بطيار خارجي"),
        ("Pano Bağlantılı Mekanik Valfler", "صمامات ميكانيكية للوحة"),
        ("Mekanik Valfler", "صمامات ميكانيكية"),
        ("Minyatür Pimli Valf", "صمام دبوس مصغر"),
        ("Pedal Valfler", "صمامات دواسة"),
        ("Multipine Valfler", "صمامات متعددة الأطراف"),
        ("Seri İletişim Modülleri", "وحدات اتصال تسلسلي"),
        ("Haberleşme Modüleri", "وحدات اتصال"),
        ("Spool Valfler", "صمامات سبول"),
        ("Minyatür Valfler", "صمامات مصغرة"),
        ("Montaj Kitleri", "أطقم التركيب"),
        ("Diğer Ürünlerimiz", "منتجات أخرى"),
        ("Manometreler", "مقاييس الضغط"),
        ("Regülatörler", "منظمات"),
        ("Filtreler", "مرشحات"),
        ("Yağlayıcılar", "مزيتات"),
        ("Bobinler", "ملفات"),
        ("Operatörler", "مشغلات"),
        ("Klavuz", "دليل"),
        ("Silindirler", "أسطوانات"),
        ("Valfler", "صمامات"),
        ("Yataklı", "موجّه"),
        ("Paslanmaz", "ستانلس"),
        ("Serisi", "سلسلة"),
    ],
}

LABELS = {
    "codes": {"fa": "کد سفارش", "tr": "Sipariş kodu", "en": "Order codes", "ru": "Коды заказа", "ar": "رموز الطلب"},
    "pressure": {"fa": "فشار کاری", "tr": "Çalışma basıncı", "en": "Working pressure", "ru": "Рабочее давление", "ar": "ضغط التشغيل"},
    "ports": {"fa": "اتصال", "tr": "Bağlantı", "en": "Ports", "ru": "Присоединение", "ar": "التوصيل"},
    "temp": {"fa": "دما", "tr": "Sıcaklık", "en": "Temperature", "ru": "Температура", "ar": "الحرارة"},
    "fallback": {
        "fa": "این سری در کاتالوگ ENPO پنوماتیک است. مدل، سایز و تعداد را برای استعلام بفرستید.",
        "tr": "Bu seri ENPO pnömatik kataloğundadır. Teklif için model, ölçü ve adet gönderin.",
        "en": "This series is in the ENPO pneumatic catalog. Send the model, size and quantity for a quote.",
        "ru": "Серия из каталога пневматики ENPO. Для предложения укажите модель, размер и количество.",
        "ar": "هذه السلسلة من كتالوج ENPO للهواء المضغوط. أرسلوا الموديل والمقاس والكمية لعرض السعر.",
    },
}


def clean_title(title):
    return (
        title.replace("Srisi", "Serisi")
        .replace("Mantyetik", "Manyetik")
        .replace("KIsa", "Kısa")
        .replace("Şartlandırıya", "Şartlandırıcıya")
        .replace("  ", " ")
        .strip()
    )


def translate(title, lang):
    if lang == "tr":
        return title
    text = clean_title(title)
    pairs = sorted(GLOSS[lang], key=lambda item: len(item[0]), reverse=True)
    for src, dst in pairs:
        text = re.sub(re.escape(src), dst, text, flags=re.IGNORECASE)
    return re.sub(r"\s+", " ", text).strip()


def image_for(kid):
    webp = IMG / f"{kid}.webp"
    jpg = IMG / f"{kid}.jpg"
    if webp.exists():
        return f"assets/images/enpo/{kid}.webp"
    if jpg.exists():
        return f"assets/images/enpo/{kid}.jpg"
    return "assets/images/enpo/logo.png"


def describe(lang, facts):
    facts = facts or {}
    bits = []
    codes = facts.get("codes") or []
    if codes:
        bits.append(LABELS["codes"][lang] + ": " + " · ".join(codes[:8]))
    if facts.get("pressure"):
        bits.append(LABELS["pressure"][lang] + ": " + " · ".join(facts["pressure"][:3]))
    if facts.get("ports"):
        bits.append(LABELS["ports"][lang] + ": " + " · ".join(facts["ports"][:6]))
    temps = [" ".join(t.split()) for t in (facts.get("temp") or []) if "°" in t and len(t) < 40]
    if temps:
        bits.append(LABELS["temp"][lang] + ": " + " · ".join(temps[:2]))
    if not bits:
        return LABELS["fallback"][lang]
    return ". ".join(bits) + "."


def titles(title):
    return {
        "titleFa": translate(title, "fa"),
        "titleTr": title,
        "titleEn": translate(title, "en"),
        "titleRu": translate(title, "ru"),
        "titleAr": translate(title, "ar"),
    }


def build_catalog(nodes):
    by_id = {n["kid"]: n for n in nodes}
    roots = [n for n in nodes if n["depth"] == 0 and n["children"]]
    categories = []
    for root in roots:
        first = True
        for child in root["children"]:
            node = by_id[child["kid"]]
            series_nodes = []
            if node["children"]:
                series_nodes = [by_id[c["kid"]] for c in node["children"]]
            elif node["depth"] == 1:
                series_nodes = [node]
            series = []
            for s in series_nodes:
                facts = s.get("facts") or {}
                named = titles(s["title"])
                parent_names = titles(node["title"])
                official = s["pdf"] if facts.get("pages") else s["page"]
                item = {
                    "id": s["kid"],
                    "name": s["title"],
                    **named,
                    "descFa": describe("fa", facts),
                    "descTr": describe("tr", facts),
                    "descEn": describe("en", facts),
                    "descRu": describe("ru", facts),
                    "descAr": describe("ar", facts),
                    "image": image_for(s["kid"]),
                    "imageAlt": named["titleEn"] + " — ENPO",
                    "categoryFa": parent_names["titleFa"],
                    "categoryTr": parent_names["titleTr"],
                    "categoryEn": parent_names["titleEn"],
                    "categoryRu": parent_names["titleRu"],
                    "categoryAr": parent_names["titleAr"],
                    "leafFa": parent_names["titleFa"],
                    "officialUrl": official,
                    "inquiryName": "ENPO " + s["title"],
                    "quoteOnly": True,
                    "specList": [],
                }
                if facts.get("codes"):
                    item["specList"].append({"key": "sku", "value": " · ".join(facts["codes"][:8])})
                series.append(item)
            cat_names = titles(node["title"])
            root_names = titles(root["title"])
            cat = {
                "id": node["kid"],
                "family": root["kid"],
                **cat_names,
                "title": cat_names["titleFa"],
                "icon": "gear",
                "image": image_for(node["kid"]),
                "imageAlt": cat_names["titleEn"],
                "desc": "",
                "series": series,
            }
            if first:
                cat["groupTitle"] = root_names["titleFa"]
                cat["groupTitleFa"] = root_names["titleFa"]
                cat["groupTitleTr"] = root_names["titleTr"]
                cat["groupTitleEn"] = root_names["titleEn"]
                cat["groupTitleRu"] = root_names["titleRu"]
                cat["groupTitleAr"] = root_names["titleAr"]
                first = False
            categories.append(cat)
    return categories


def hero_image(categories):
    for cat in categories:
        for s in cat["series"]:
            if s["image"].endswith(".webp"):
                return s["image"]
    return "assets/images/enpo/logo.png"


def catalog_object(categories):
    hero = hero_image(categories)
    highlights = []
    seen = set()
    for cat in categories:
        if cat["family"] in seen:
            continue
        seen.add(cat["family"])
        highlights.append({
            "title": cat.get("groupTitleFa") or cat["titleFa"],
            "titleFa": cat.get("groupTitleFa") or cat["titleFa"],
            "titleTr": cat.get("groupTitleTr") or cat["titleTr"],
            "titleEn": cat.get("groupTitleEn") or cat["titleEn"],
            "titleRu": cat.get("groupTitleRu") or cat["titleRu"],
            "titleAr": cat.get("groupTitleAr") or cat["titleAr"],
            "descFa": "سری‌های همین خانواده را در کاتالوگ پایین ببینید و برای مدل دقیق استعلام بگیرید.",
            "descTr": "Seriler aşağıdaki katalogda. Model için teklif isteyin.",
            "descEn": "The series in this family are in the catalog below. Ask for a quote with the exact model.",
            "descRu": "Серии этой группы — в каталоге ниже. Запросите предложение с точной моделью.",
            "descAr": "سلاسل هذه العائلة في الكتالوج أدناه. اطلبوا عرض سعر بالموديل الدقيق.",
            "badge": "ENPO",
            "inquiryName": "ENPO " + (cat.get("groupTitleTr") or cat["titleTr"]),
            "image": cat["image"],
            "imageAlt": cat["imageAlt"],
            "quoteOnly": True,
        })
    return {
        "quoteEmptyPrices": True,
        "lazyCatalog": True,
        "catalogPageSize": 12,
        "brand": {
            "name": "ENPO",
            "nameFa": "انپو",
            "logo": "assets/images/enpo/logo.png",
            "logoAlt": "ENPO Pnömatik",
            "heroImage": hero,
            "heroImageAlt": "ENPO pneumatic air preparation and cylinders",
            "heroEyebrow": "تامین پنوماتیک ENPO",
            "heroEyebrowFa": "تامین پنوماتیک ENPO",
            "heroEyebrowTr": "ENPO pnömatik tedariki",
            "heroEyebrowEn": "ENPO pneumatic supply",
            "heroEyebrowRu": "Поставка пневматики ENPO",
            "heroEyebrowAr": "توريد ENPO للهواء المضغوط",
            "heroHeadline": "تجهیزات پنوماتیک ENPO",
            "heroHeadlineFa": "تجهیزات پنوماتیک ENPO",
            "heroHeadlineTr": "ENPO pnömatik ekipman",
            "heroHeadlineEn": "ENPO pneumatic equipment",
            "heroHeadlineRu": "Пневматическое оборудование ENPO",
            "heroHeadlineAr": "معدات ENPO الهوائية",
            "heroHeadlineSub": "آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی و گریپر — استعلام مدل دقیق",
            "heroHeadlineSubFa": "آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی و گریپر — استعلام مدل دقیق",
            "heroHeadlineSubTr": "Hava hazırlama, silindir, valf, manyetik sensör ve gripper — net model için teklif",
            "heroHeadlineSubEn": "Air preparation, cylinders, valves, magnetic sensors and grippers — quote the exact model",
            "heroHeadlineSubRu": "Подготовка воздуха, цилиндры, клапаны, датчики и захваты — запрос точной модели",
            "heroHeadlineSubAr": "تجهيز الهواء، الأسطوانات، الصمامات، الحساسات والقوابض — استفسار بالموديل الدقيق",
            "descriptionTr": "Bizdavar Group, ENPO pnömatik serilerini tedarik eder. Seri adları ve okunabilen sipariş kodları ENPO kataloğu ile aynıdır.",
            "descriptionEn": "Bizdavar Group supplies ENPO pneumatic series. Series names and readable order codes match the ENPO catalog.",
            "descriptionRu": "Bizdavar Group поставляет серии пневматики ENPO. Названия серий и считанные коды заказа совпадают с каталогом ENPO.",
            "descriptionAr": "تورد مجموعة بيزدوار سلاسل ENPO الهوائية. أسماء السلاسل ورموز الطلب المقروءة مطابقة لكتالوج ENPO.",
            "tagline": "ENPO Pnömatik",
            "taglineFa": "پنوماتیک صنعتی — استانبول",
            "since": "İstanbul",
            "origin": "استانبول — ترکیه",
            "officialUrl": "http://www.enpo.net/",
            "descriptionFa": "بیزدوار گروپ سری‌های پنوماتیک ENPO را برای خطوط تولید و پروژه‌های صنعتی تامین می‌کند: واحد مراقبت هوا، سیلندر، شیر، سنسور مغناطیسی و گریپر. نام سری و کد سفارش مطابق کاتالوگ ENPO است.",
            "heroStats": [
                {"value": "4", "label": "خانواده محصول"},
                {"value": str(sum(len(c["series"]) for c in categories)), "label": "سری محصول"},
                {"value": "TR", "label": "مبدا تامین"},
            ],
        },
        "trustSignals": [
            {"icon": "target", "label": "مطابق کاتالوگ ENPO", "desc": "نام سری، عکس و کد سفارش از کاتالوگ رسمی ENPO برداشته شده است"},
            {"icon": "globe", "label": "مشاوره فارسی", "desc": "انتخاب سایز پورت، کورس سیلندر و ولتاژ بوبین بر اساس کاربرد"},
            {"icon": "factory", "label": "پنوماتیک صنعتی", "desc": "واحد مراقبت، سیلندر ISO، شیر و سنسور موقعیت"},
            {"icon": "mail", "label": "پیش‌فاکتور", "desc": "مدل، تعداد و زمان تامین قبل از سفارش مشخص می‌شود"},
        ],
        "whyBuyFromUs": [
            {"icon": "target", "title": "همان سری‌های ENPO", "desc": "دسته‌ها و نام سری‌ها با سایت ENPO یکی است؛ کدهایی که در PDF خوانا بوده‌اند کنار محصول آمده‌اند."},
            {"icon": "document", "title": "کاتالوگ رسمی", "desc": "برای هر سری لینک کاتالوگ یا صفحه ENPO هست تا نقشه فنی را ببینید."},
            {"icon": "factory", "title": "انتخاب روی کاربرد", "desc": "اگر فقط مصرف هوا، کورس یا دبی را دارید، سری مناسب را پیشنهاد می‌دهیم."},
            {"icon": "handshake", "title": "یک نقطه تماس", "desc": "استعلام فارسی، پیش‌فاکتور و لجستیک از بیزدوار."},
        ],
        "purchaseSteps": [
            {"num": "۱", "title": "استعلام", "desc": "نام سری ENPO، کد سفارش، سایز پورت یا کورس، تعداد"},
            {"num": "۲", "title": "تطبیق فنی", "desc": "مقایسه با کاتالوگ ENPO و پیشنهاد جایگزین در صورت نیاز"},
            {"num": "۳", "title": "پیش‌فاکتور", "desc": "قیمت، زمان تامین و شرایط حمل"},
            {"num": "۴", "title": "تامین", "desc": "سفارش و حمل بین‌المللی"},
            {"num": "۵", "title": "تحویل", "desc": "تحویل به همراه مشخصات سری"},
        ],
        "highlights": highlights,
        "categories": categories,
        "iranIndustries": [
            {"name": "خطوط مونتاژ", "desc": "سیلندر، شیر و سنسور موقعیت", "image": hero, "imageAlt": "ENPO cylinders for assembly lines", "icon": "factory"},
            {"name": "بسته‌بندی", "desc": "گریپر، سیلندر کامپکت و شیر", "image": hero, "imageAlt": "ENPO grippers for packaging", "icon": "gear"},
            {"name": "هوای فشرده کارخانه", "desc": "فیلتر، رگولاتور و روغن‌زن", "image": hero, "imageAlt": "ENPO air preparation", "icon": "droplet"},
        ],
        "industries": [
            {"name": "مونتاژ", "nameEn": "Assembly", "desc": "Cylinders, valves and sensors", "image": hero, "imageAlt": "ENPO assembly", "icon": "factory"},
            {"name": "بسته‌بندی", "nameEn": "Packaging", "desc": "Grippers and compact cylinders", "image": hero, "imageAlt": "ENPO packaging", "icon": "gear"},
            {"name": "ماشین‌سازی", "nameEn": "Machinery", "desc": "Air prep and control valves", "image": hero, "imageAlt": "ENPO machinery", "icon": "bolt"},
        ],
        "academy": {
            "title": "ENPO — پنوماتیک صنعتی",
            "descFa": "کاتالوگ این صفحه از دسته‌بندی عمومی ENPO برداشته شده است: آماده‌سازی هوا، سیلندر، شیر و محصولات فناوری بالا. کدهای سفارش فقط وقتی آمده‌اند که در PDF همان سری قابل خواندن بوده‌اند.",
            "image": hero,
            "imageAlt": "ENPO pneumatic products",
            "url": "http://www.enpo.net/",
            "urlLabel": "سایت ENPO",
            "topics": [
                "واحد FRL و سایز پورت",
                "سیلندر ISO 15552 و ISO 21287",
                "سنسور مغناطیسی روی سیلندر",
                "شیر دستی، سلونوئید و نامور",
            ],
        },
        "services": [
            {"title": "انتخاب سری", "desc": "بر اساس پورت، کورس، دبی و ولتاژ بوبین"},
            {"title": "جایگزینی", "desc": "تطبیق کد ENPO با قطعه نصب‌شده"},
            {"title": "پیش‌فاکتور", "desc": "قیمت و زمان تامین در یک سند"},
            {"title": "لجستیک", "desc": "حمل از ترکیه تا پروژه"},
            {"title": "پشتیبانی فارسی", "desc": "یک نقطه تماس برای استعلام"},
        ],
        "faq": [
            {"q": "این محصولات همان ENPO هستند؟", "a": "نام دسته، نام سری و عکس از کاتالوگ ENPO است. کد سفارش فقط برای سری‌هایی آمده که در PDF همان صفحه خوانا بوده است."},
            {"q": "چرا بعضی سری‌ها کد سفارش ندارند؟", "a": "اگر PDF آن سری روی ENPO تصویر باشد یا فایل کاتالوگ باز نشود، کد را حدس نمی‌زنیم. لینک صفحه رسمی همان سری برای استعلام هست."},
            {"q": "چطور سفارش بدهم؟", "a": "نام سری یا کد روی بدنه، تعداد و ولتاژ بوبین را بفرستید. پیش‌فاکتور قبل از خرید صادر می‌شود."},
            {"q": "سیلندر و واحد مراقبت هر دو هست؟", "a": "بله. آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی، گریپر و سیلندر تلسکوپی در همین کاتالوگ است."},
        ],
        "inquiryTemplate": "سلام، درخواست استعلام {product} از ENPO دارم.\n\nکد سفارش:\nسایز / کورس:\nتعداد:\n",
        "officialUrl": "http://www.enpo.net/",
    }


LOCALES = [
    {
        "lang": "fa", "dir": "rtl", "folder": "pages", "prefix": "",
        "title": "تجهیزات پنوماتیک ENPO | سیلندر، شیر و واحد مراقبت — بیزدوار",
        "desc": "تامین سری‌های پنوماتیک ENPO: آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی و گریپر. نام و کد سفارش مطابق کاتالوگ ENPO — بیزدوار گروپ.",
        "trust_e": "چرا از بیزدوار", "trust_t": "تامین ENPO برای واحد فنی و خرید", "trust_d": "سری‌ها را از کاتالوگ ENPO آورده‌ایم و برای مدل دقیق پیش‌فاکتور می‌دهیم.",
        "buy_e": "مسیر خرید", "buy_t": "از استعلام تا تحویل", "buy_d": "کد سری، تعداد و زمان تامین در هر مرحله مشخص است.",
        "hi_e": "خانواده‌های محصول", "hi_t": "چهار گروه اصلی ENPO", "hi_d": "آماده‌سازی هوا، سیلندر، شیر و محصولات فناوری پیشرفته.",
        "cat_e": "کاتالوگ", "cat_t": "کاتالوگ سری‌های ENPO", "cat_d": "هر کارت یک سری از سایت ENPO است. کدهای سفارش از PDF همان سری خوانده شده‌اند.",
        "iran_e": "کاربرد", "iran_t": "ENPO در خطوط صنعتی", "iran_d": "اگر صنعت شما در لیست نیست، مصرف هوا و نوع عملگر را بفرستید.",
        "ind_e": "صنایع", "ind_t": "کاربرد تجهیزات پنوماتیک", "ind_d": "مونتاژ، بسته‌بندی و ماشین‌سازی.",
        "sup_e": "تامین", "sup_t": "خدمات تامین ENPO", "sup_d": "انتخاب سری، پیش‌فاکتور و حمل.",
        "faq_e": "پرسش‌ها", "faq_t": "سوال‌های رایج", "faq_d": "اگر کد روی قطعه را دارید همان را بفرستید.",
        "cta_t": "برای ENPO استعلام می‌خواهید؟", "cta_d": "نام سری یا کد سفارش را بفرستید.",
        "cta_form": "فرم استعلام", "cta_cat": "کاتالوگ محصولات", "sticky": "استعلام ENPO",
        "geo": "تامین پنوماتیک ENPO — مشاوره فنی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.",
        "note": "مشخصات از <a href=\"http://www.enpo.net/\" target=\"_blank\" rel=\"noopener noreferrer\">کاتالوگ ENPO</a> است. برای استعلام <a href=\"contact\">با بیزدوار تماس بگیرید</a>.",
        "nav": "دسته‌های ENPO",
    },
    {
        "lang": "tr", "dir": "ltr", "folder": "tr/pages", "prefix": "/tr",
        "title": "ENPO pnömatik | Silindir, valf ve hava hazırlayıcı — Bizdavar",
        "desc": "ENPO pnömatik serileri: hava hazırlama, silindir, valf, manyetik sensör ve gripper. Seri adları ENPO kataloğu ile aynıdır — Bizdavar Group.",
        "trust_e": "Neden Bizdavar", "trust_t": "ENPO tedariki", "trust_d": "Seriler ENPO kataloğundan alındı. Net model için proforma veriyoruz.",
        "buy_e": "Satın alma", "buy_t": "Tekliften teslimata", "buy_d": "Seri kodu, adet ve termin her adımda açıktır.",
        "hi_e": "Ürün grupları", "hi_t": "Dört ana ENPO grubu", "hi_d": "Hava hazırlayıcılar, silindirler, valfler ve yüksek teknoloji.",
        "cat_e": "Katalog", "cat_t": "ENPO seri kataloğu", "cat_d": "Her kart ENPO sitesindeki bir seridir. Sipariş kodları o serinin PDF’inden okunmuştur.",
        "iran_e": "Uygulama", "iran_t": "Endüstriyel hatlarda ENPO", "iran_d": "Listenizde yoksa hava tüketimini ve aktüatör tipini gönderin.",
        "ind_e": "Sektörler", "ind_t": "Pnömatik kullanım", "ind_d": "Montaj, paketleme ve makine imalatı.",
        "sup_e": "Tedarik", "sup_t": "ENPO tedarik hizmeti", "sup_d": "Seri seçimi, proforma ve lojistik.",
        "faq_e": "Sorular", "faq_t": "Sık sorulanlar", "faq_d": "Gövdedeki kodu gönderin.",
        "cta_t": "ENPO teklifi ister misiniz?", "cta_d": "Seri adını veya sipariş kodunu gönderin.",
        "cta_form": "Teklif formu", "cta_cat": "Ürün kataloğu", "sticky": "ENPO teklifi",
        "geo": "ENPO pnömatik tedariki — teknik danışmanlık, proforma ve lojistik, Bizdavar Group.",
        "note": "Bilgiler <a href=\"http://www.enpo.net/\" target=\"_blank\" rel=\"noopener noreferrer\">ENPO kataloğundan</a> gelir. Teklif için <a href=\"contact\">Bizdavar</a>.",
        "nav": "ENPO kategorileri",
    },
    {
        "lang": "en", "dir": "ltr", "folder": "en/pages", "prefix": "/en",
        "title": "ENPO pneumatics | Cylinders, valves and air prep — Bizdavar",
        "desc": "ENPO pneumatic series: air preparation, cylinders, valves, magnetic sensors and grippers. Series names match the ENPO catalog — Bizdavar Group.",
        "trust_e": "Why Bizdavar", "trust_t": "ENPO supply", "trust_d": "Series come from the ENPO catalog. We quote the exact model.",
        "buy_e": "How to buy", "buy_t": "From inquiry to delivery", "buy_d": "Series code, quantity and lead time are clear at each step.",
        "hi_e": "Product families", "hi_t": "Four ENPO groups", "hi_d": "Air preparation, cylinders, valves and advanced products.",
        "cat_e": "Catalog", "cat_t": "ENPO series catalog", "cat_d": "Each card is one ENPO series. Order codes were read from that series PDF.",
        "iran_e": "Applications", "iran_t": "ENPO on industrial lines", "iran_d": "If your industry is not listed, send air use and actuator type.",
        "ind_e": "Industries", "ind_t": "Where pneumatics are used", "ind_d": "Assembly, packaging and machinery.",
        "sup_e": "Supply", "sup_t": "ENPO supply service", "sup_d": "Series selection, proforma and logistics.",
        "faq_e": "Questions", "faq_t": "Common questions", "faq_d": "Send the code printed on the part.",
        "cta_t": "Need an ENPO quote?", "cta_d": "Send the series name or order code.",
        "cta_form": "Quote form", "cta_cat": "Product catalog", "sticky": "ENPO quote",
        "geo": "ENPO pneumatic supply — technical consulting, proforma and logistics by Bizdavar Group.",
        "note": "Data comes from the <a href=\"http://www.enpo.net/\" target=\"_blank\" rel=\"noopener noreferrer\">ENPO catalog</a>. For a quote, <a href=\"contact\">contact Bizdavar</a>.",
        "nav": "ENPO categories",
    },
    {
        "lang": "ru", "dir": "ltr", "folder": "ru/pages", "prefix": "/ru",
        "title": "Пневматика ENPO | Цилиндры, клапаны и подготовка воздуха — Bizdavar",
        "desc": "Серии пневматики ENPO: подготовка воздуха, цилиндры, клапаны, магнитные датчики и захваты. Названия серий совпадают с каталогом ENPO — Bizdavar Group.",
        "trust_e": "Почему Bizdavar", "trust_t": "Поставка ENPO", "trust_d": "Серии взяты из каталога ENPO. Точную модель указываем в предложении.",
        "buy_e": "Покупка", "buy_t": "От запроса до поставки", "buy_d": "Код серии, количество и срок видны на каждом шаге.",
        "hi_e": "Группы", "hi_t": "Четыре группы ENPO", "hi_d": "Подготовка воздуха, цилиндры, клапаны и высокие технологии.",
        "cat_e": "Каталог", "cat_t": "Каталог серий ENPO", "cat_d": "Каждая карточка — серия с сайта ENPO. Коды заказа прочитаны из PDF этой серии.",
        "iran_e": "Применение", "iran_t": "ENPO на промышленных линиях", "iran_d": "Если вашей отрасли нет в списке, пришлите расход воздуха и тип привода.",
        "ind_e": "Отрасли", "ind_t": "Где применяется пневматика", "ind_d": "Сборка, упаковка и машиностроение.",
        "sup_e": "Поставка", "sup_t": "Поставка ENPO", "sup_d": "Подбор серии, проформа и логистика.",
        "faq_e": "Вопросы", "faq_t": "Частые вопросы", "faq_d": "Пришлите код с корпуса.",
        "cta_t": "Нужно предложение ENPO?", "cta_d": "Пришлите название серии или код заказа.",
        "cta_form": "Форма запроса", "cta_cat": "Каталог", "sticky": "Запрос ENPO",
        "geo": "Поставка пневматики ENPO — консультация, проформа и логистика Bizdavar Group.",
        "note": "Данные из <a href=\"http://www.enpo.net/\" target=\"_blank\" rel=\"noopener noreferrer\">каталога ENPO</a>. Для предложения — <a href=\"contact\">Bizdavar</a>.",
        "nav": "Категории ENPO",
    },
    {
        "lang": "ar", "dir": "rtl", "folder": "ar/pages", "prefix": "/ar",
        "title": "معدات ENPO الهوائية | أسطوانات وصمامات وتجهيز هواء — بيزدوار",
        "desc": "سلاسل ENPO الهوائية: تجهيز الهواء، الأسطوانات، الصمامات، الحساسات المغناطيسية والقوابض. الأسماء مطابقة لكتالوج ENPO — Bizdavar Group.",
        "trust_e": "لماذا بيزدوار", "trust_t": "توريد ENPO", "trust_d": "السلاسل مأخوذة من كتالوج ENPO. الموديل الدقيق يظهر في عرض السعر.",
        "buy_e": "الشراء", "buy_t": "من الاستفسار إلى التسليم", "buy_d": "رمز السلسلة والكمية ومدة التوريد واضحة في كل خطوة.",
        "hi_e": "العائلات", "hi_t": "أربع مجموعات ENPO", "hi_d": "تجهيز الهواء، الأسطوانات، الصمامات والتقنية المتقدمة.",
        "cat_e": "الكتالوج", "cat_t": "كتالوج سلاسل ENPO", "cat_d": "كل بطاقة سلسلة من موقع ENPO. رموز الطلب قُرئت من PDF تلك السلسلة.",
        "iran_e": "الاستخدام", "iran_t": "ENPO في الخطوط الصناعية", "iran_d": "إذا لم تكن صناعتكم في القائمة، أرسلوا استهلاك الهواء ونوع المشغل.",
        "ind_e": "القطاعات", "ind_t": "استخدام الهواء المضغوط", "ind_d": "التجميع والتغليف وبناء الآلات.",
        "sup_e": "التوريد", "sup_t": "خدمة توريد ENPO", "sup_d": "اختيار السلسلة وعرض السعر واللوجستيات.",
        "faq_e": "أسئلة", "faq_t": "أسئلة شائعة", "faq_d": "أرسلوا الرمز المكتوب على القطعة.",
        "cta_t": "تريدون عرض سعر ENPO؟", "cta_d": "أرسلوا اسم السلسلة أو رمز الطلب.",
        "cta_form": "نموذج الاستفسار", "cta_cat": "كتالوج المنتجات", "sticky": "استفسار ENPO",
        "geo": "توريد معدات ENPO الهوائية — استشارة فنية وعرض سعر ولوجستيات من بيزدوار.",
        "note": "البيانات من <a href=\"http://www.enpo.net/\" target=\"_blank\" rel=\"noopener noreferrer\">كتالوج ENPO</a>. للاستفسار <a href=\"contact\">تواصلوا مع بيزدوار</a>.",
        "nav": "فئات ENPO",
    },
]


def page_html(loc, hero_src):
    p = loc["prefix"]
    canon = f"https://bizdavar.com{p}/pages/enpo"
    hrefs = {
        "fa-IR": "https://bizdavar.com/pages/enpo",
        "tr-TR": "https://bizdavar.com/tr/pages/enpo",
        "en-US": "https://bizdavar.com/en/pages/enpo",
        "ru-RU": "https://bizdavar.com/ru/pages/enpo",
        "ar-AE": "https://bizdavar.com/ar/pages/enpo",
    }
    alts = "\n".join(
        f'  <link rel="alternate" hreflang="{k}" href="{v}">' for k, v in hrefs.items()
    )
    og_locale = {"fa": "fa_IR", "tr": "tr_TR", "en": "en_US", "ru": "ru_RU", "ar": "ar_AE"}[loc["lang"]]
    hero_url = "/" + hero_src.replace(".webp", "-800.webp")
    if not (ROOT / hero_src.replace(".webp", "-800.webp")).exists():
        hero_url = "/" + hero_src
    return f"""<!DOCTYPE html>
<html lang="{loc['lang']}" dir="{loc['dir']}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20261004a">
  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/estedad/Estedad-Black.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" as="image" href="{hero_url}" fetchpriority="high">
  <script src="/assets/scripts/gtm-boot.js?v=20260910c" defer></script>
<script src="/assets/scripts/i18n/locale-url.js?v=20260910c" defer></script>
  <script src="/assets/scripts/i18n/seo-head.js?v=20260910c" defer></script>
<script src="/assets/scripts/i18n/locale-preload.js?v=20260910c" defer></script>
<meta name="view-transition" content="same-origin">
  <title>{loc['title']}</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/styles/brand-supply-shared.css?v=20261004a">
  <link rel="stylesheet" href="/assets/styles/enpo.css?v=20261004a">
  <meta name="description" content="{loc['desc']}">
  <meta name="keywords" content="ENPO, pnömatik, pneumatic, سیلندر, شیر, بیزدوار">
  <meta property="og:title" content="{loc['title']}">
  <meta property="og:description" content="{loc['desc']}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canon}">
  <meta property="og:image" content="https://bizdavar.com/{hero_src}">
  <meta property="og:locale" content="{og_locale}">
  <meta property="og:site_name" content="Bizdavar Group">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{loc['title']}">
  <meta name="twitter:description" content="{loc['desc']}">
  <link rel="canonical" href="{canon}">
{alts}
  <link rel="alternate" hreflang="x-default" href="https://bizdavar.com/pages/enpo">
</head>
<body data-page="enpo" data-depth="1">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWQQWF8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
<main id="main-content" class="site-main">
  <section class="enpo-hero"><div class="container" id="enpoHeroContent"></div></section>
  <div class="enpo-trust-bar" id="enpoTrustBar"></div>
  <nav class="enpo-cat-nav" id="enpoCatNav" aria-label="{loc['nav']}"></nav>
  <section class="section section--gray" id="enpo-trust"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['trust_e']}</span>
      <h2 class="section__title">{loc['trust_t']}</h2>
      <p class="section__desc">{loc['trust_d']}</p>
    </div>
    <div class="enpo-why-grid" id="enpoWhyGrid"></div>
  </div></section>
  <section class="section" id="enpo-buy"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['buy_e']}</span>
      <h2 class="section__title">{loc['buy_t']}</h2>
      <p class="section__desc">{loc['buy_d']}</p>
    </div>
    <div class="enpo-steps" id="enpoPurchaseSteps"></div>
  </div></section>
  <section class="section section--gray" id="enpo-highlights"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['hi_e']}</span>
      <h2 class="section__title">{loc['hi_t']}</h2>
      <p class="section__desc">{loc['hi_d']}</p>
    </div>
    <div class="enpo-highlights" id="enpoHighlights"></div>
  </div></section>
  <section class="section" id="enpo-catalog"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['cat_e']}</span>
      <h2 class="section__title">{loc['cat_t']}</h2>
      <p class="section__desc">{loc['cat_d']}</p>
    </div>
    <div id="enpoCategories"></div>
  </div></section>
  <section class="section section--gray" id="enpo-iran"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['iran_e']}</span>
      <h2 class="section__title">{loc['iran_t']}</h2>
      <p class="section__desc">{loc['iran_d']}</p>
    </div>
    <div class="enpo-iran-grid" id="enpoIranGrid"></div>
  </div></section>
  <section class="section"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['ind_e']}</span>
      <h2 class="section__title">{loc['ind_t']}</h2>
      <p class="section__desc">{loc['ind_d']}</p>
    </div>
    <div class="enpo-industries-grid" id="enpoIndustries"></div>
  </div></section>
  <section class="section section--gray"><div class="container"><div class="enpo-academy-block" id="enpoAcademy"></div></div></section>
  <section class="section" id="enpo-supply"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['sup_e']}</span>
      <h2 class="section__title">{loc['sup_t']}</h2>
      <p class="section__desc">{loc['sup_d']}</p>
    </div>
    <div class="enpo-supply-grid" id="enpoSupplyList"></div>
    <div class="enpo-official-note">{loc['note']}</div>
  </div></section>
  <section class="section section--gray" id="enpo-faq"><div class="container">
    <div class="section__header section__header--pro">
      <span class="section__eyebrow">{loc['faq_e']}</span>
      <h2 class="section__title">{loc['faq_t']}</h2>
      <p class="section__desc">{loc['faq_d']}</p>
    </div>
    <div class="enpo-faq" id="enpoFaq"></div>
  </div></section>
  <section class="section section--yellow"><div class="container cta-banner cta-banner--pro">
    <h2>{loc['cta_t']}</h2>
    <p>{loc['cta_d']}</p>
    <div class="hero__actions hero__actions--center">
      <a href="contact?service=industrial" class="btn btn--primary" id="enpoCtaForm">{loc['cta_form']}</a>
      <a href="#" class="btn btn--green" id="enpoCtaWhatsapp">WhatsApp</a>
      <a href="{p}/pages/products#supply" class="btn btn--yellow">{loc['cta_cat']}</a>
    </div>
  </div></section>
  <div class="enpo-sticky-cta" id="enpoStickyCta" hidden>
    <span>{loc['sticky']}</span>
    <a href="contact?service=industrial" class="btn btn--yellow enpo-btn-inquiry">{loc['cta_form']}</a>
  </div>
  <div id="geoStrip"></div>
  <div id="relatedLinks"></div>
</main>
  <script src="/assets/scripts/site-loader.js?v=20261004a" data-after-seo="i18n/supply-catalog-i18n.js" data-after-page-i18n="lib/supply-brand-page.js,config/enpo-products.js" data-before-main="enpo-page.js"></script>
  <script>
    bizdavarPageInit(function () {{
      injectPageSeo('enpo', {{
        canonical: '{canon}',
        ogImage: '{hero_src}',
        title: '{loc['title']}',
        description: '{loc['desc']}'
      }});
      renderBreadcrumbs([
        {{ page: 'home', url: 'index' }},
        {{ page: 'products', url: 'products#supply' }},
        {{ page: 'enpo', url: 'enpo' }}
      ]);
      injectBreadcrumbSchema([
        {{ page: 'home', url: 'index' }},
        {{ page: 'products', url: 'pages/products#supply' }},
        {{ page: 'enpo', url: 'pages/enpo' }}
      ]);
      initEnpoPage();
      injectEnpoSchema();
      renderGeoStrip('geoStrip', {{ text: '{loc['geo']}' }});
      renderRelatedLinks([
        {{ title: 'VEGA', url: 'vega', desc: 'Level' }},
        {{ title: 'Gamak', url: 'gamak', desc: 'Motors' }},
        {{ title: 'Catalog', url: 'products#supply', desc: 'Brands' }},
        {{ title: 'Contact', url: 'contact', desc: 'Quote' }}
      ]);
      setupWhatsappLinks();
    }});
  </script>
</body>
</html>
"""


def patch_css(hero_src):
    shared = ROOT / "assets" / "styles" / "brand-supply-shared.css"
    css = shared.read_text(encoding="utf-8")
    if ".enpo-hero {" not in css:
        blocks = re.split(r"(?<=\})", css)
        extra = [b.replace(".gamak-", ".enpo-") for b in blocks if ".gamak-" in b]
        shared.write_text(css + "\n/* ENPO — same supply layout */\n" + "".join(extra), encoding="utf-8")
    hero_file = hero_src.split("/")[-1]
    (ROOT / "assets" / "styles" / "enpo.css").write_text(
        f"""body[data-page="enpo"] {{
  --brand-accent: #0095d8;
  --brand-accent-dark: #006fa3;
  --brand-surface: #f3f8fb;
}}
body[data-page="enpo"] .enpo-hero {{
  background: #f3f8fb;
  border-bottom-color: #0095d8;
}}
body[data-page="enpo"] .enpo-hero::before {{
  background:
    linear-gradient(105deg, rgba(243, 248, 251, 0.97) 42%, rgba(243, 248, 251, 0.55) 68%, rgba(243, 248, 251, 0.2) 100%),
    url('../images/enpo/{hero_file}') center right / cover no-repeat;
}}
body[data-page="enpo"] .enpo-hero__visual img,
body[data-page="enpo"] .enpo-series-card__img--photo {{
  object-fit: contain;
  background: #fff;
}}
""",
        encoding="utf-8",
    )


def main():
    nodes = json.loads(SRC.read_text(encoding="utf-8"))
    categories = build_catalog(nodes)
    data = catalog_object(categories)
    js = "(function () {\n  window.ENPO_CATALOG = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n})();\n"
    (ROOT / "assets" / "scripts" / "config" / "enpo-products.js").write_text(js, encoding="utf-8")
    (ROOT / "assets" / "scripts" / "enpo-page.js").write_text(
        """createSupplyBrandPage({
  prefix: 'enpo',
  catalogKey: 'ENPO_CATALOG',
  brandName: 'ENPO',
  schemaId: 'jsonld-enpo',
  schemaListName: 'ENPO pneumatic catalog — Bizdavar Group',
  initFn: 'initEnpoPage',
  schemaFn: 'injectEnpoSchema'
});
""",
        encoding="utf-8",
    )
    hero = data["brand"]["heroImage"]
    for loc in LOCALES:
        path = ROOT / loc["folder"] / "enpo.html"
        path.write_text(page_html(loc, hero), encoding="utf-8")
    patch_css(hero)
    series_n = sum(len(c["series"]) for c in categories)
    coded = sum(1 for c in categories for s in c["series"] if s["specList"])
    print("categories", len(categories), "series", series_n, "with specs", coded)


if __name__ == "__main__":
    main()
