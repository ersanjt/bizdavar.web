# -*- coding: utf-8 -*-
"""Build the ENPO supply catalog and locale pages from crawled source data."""
import html
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
    "fallback": {"fa": "", "tr": "", "en": "", "ru": "", "ar": ""},
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
    return "assets/images/enpo/placeholder.svg"


def describe(lang, facts):
    facts = facts or {}
    bits = []
    if facts.get("pressure"):
        bits.append(LABELS["pressure"][lang] + " " + " · ".join(facts["pressure"][:3]))
    if facts.get("ports"):
        bits.append(LABELS["ports"][lang] + " " + " · ".join(facts["ports"][:6]))
    temps = [" ".join(t.split()) for t in (facts.get("temp") or []) if "°" in t and len(t) < 40]
    if temps:
        bits.append(LABELS["temp"][lang] + " " + " · ".join(temps[:2]))
    return ". ".join(bits)


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
                    "imageAlt": named["titleEn"],
                    "categoryFa": parent_names["titleFa"],
                    "categoryTr": parent_names["titleTr"],
                    "categoryEn": parent_names["titleEn"],
                    "categoryRu": parent_names["titleRu"],
                    "categoryAr": parent_names["titleAr"],
                    "leafFa": parent_names["titleFa"],
                    "inquiryName": s["title"],
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
                "descFa": "",
                "descTr": "",
                "descEn": "",
                "descRu": "",
                "descAr": "",
                "series": series,
            }
            real = next((s["image"] for s in series if not s["image"].endswith("placeholder.svg")), "")
            if real:
                cat["image"] = real
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
    return "assets/images/enpo/placeholder.svg"


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
            "descFa": {"1758528905": "فیلتر، رگولاتور، روغن‌زن و واحد مراقبت.", "1758529434": "سیلندر کامپکت، ISO، بدون شفت و قلمی.", "1758529463": "شیر دستی، سلونوئید و نامور.", "1758530071": "گریپر، قفل و سیلندر تلسکوپی."}.get(cat["family"], ""),
            "descTr": {"1758528905": "Filtre, regülatör, yağlayıcı ve şartlandırıcı.", "1758529434": "Kompakt, ISO, rodsuz ve kalem silindir.", "1758529463": "Manuel, solenoid ve namur valf.", "1758530071": "Gripper, kilit ve teleskopik silindir."}.get(cat["family"], ""),
            "descEn": {"1758528905": "Filters, regulators, lubricators and air-prep units.", "1758529434": "Compact, ISO, rodless and pencil cylinders.", "1758529463": "Manual, solenoid and Namur valves.", "1758530071": "Grippers, locks and telescopic cylinders."}.get(cat["family"], ""),
            "descRu": {"1758528905": "Фильтры, регуляторы, лубрикаторы и блоки подготовки воздуха.", "1758529434": "Компактные, ISO, бесштоковые и карандашные цилиндры.", "1758529463": "Ручные, соленоидные и Namur клапаны.", "1758530071": "Захваты, замки и телескопические цилиндры."}.get(cat["family"], ""),
            "descAr": {"1758528905": "مرشحات ومنظمات ومزيتات ووحدات تجهيز الهواء.", "1758529434": "أسطوانات مدمجة وISO ومن دون ذراع وقلمية.", "1758529463": "صمامات يدوية وملف لولبي ونامور.", "1758530071": "قوابض وأقفال وأسطوانات تلسكوبية."}.get(cat["family"], ""),
            "badge": "Bizdavar",
            "inquiryName": cat.get("groupTitleTr") or cat["titleTr"],
            "image": cat["image"],
            "imageAlt": cat["imageAlt"],
            "quoteOnly": True,
        })
    return {
        "quoteEmptyPrices": True,
        "hideQuotePrice": True,
        "lazyCatalog": True,
        "catalogPageSize": 12,
        "navMode": "categories",
        "brand": {
            "name": "پنوماتیک",
            "nameFa": "پنوماتیک",
            "logo": "assets/images/brand/bizdavar-logo.png",
            "logoAlt": "Bizdavar",
            "heroImage": hero,
            "heroImageAlt": "Industrial pneumatic air preparation and cylinders",
            "heroEyebrow": "تامین پنوماتیک صنعتی",
            "heroEyebrowFa": "تامین پنوماتیک صنعتی",
            "heroEyebrowTr": "Endüstriyel pnömatik tedariki",
            "heroEyebrowEn": "Industrial pneumatic supply",
            "heroEyebrowRu": "Поставка промышленной пневматики",
            "heroEyebrowAr": "توريد معدات الهواء المضغوط",
            "heroHeadline": "تجهیزات پنوماتیک صنعتی",
            "heroHeadlineFa": "تجهیزات پنوماتیک صنعتی",
            "heroHeadlineTr": "Endüstriyel pnömatik ekipman",
            "heroHeadlineEn": "Industrial pneumatic equipment",
            "heroHeadlineRu": "Промышленное пневматическое оборудование",
            "heroHeadlineAr": "معدات هواء مضغوط صناعية",
            "heroHeadlineSub": "آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی و گریپر — استعلام مدل دقیق",
            "heroHeadlineSubFa": "آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی و گریپر — استعلام مدل دقیق",
            "heroHeadlineSubTr": "Hava hazırlama, silindir, valf, manyetik sensör ve gripper — net model için teklif",
            "heroHeadlineSubEn": "Air preparation, cylinders, valves, magnetic sensors and grippers — quote the exact model",
            "heroHeadlineSubRu": "Подготовка воздуха, цилиндры, клапаны, датчики и захваты — запрос точной модели",
            "heroHeadlineSubAr": "تجهيز الهواء، الأسطوانات، الصمامات، الحساسات والقوابض — استفسار بالموديل الدقيق",
            "descriptionTr": "Bizdavar Group endüstriyel pnömatik serilerini tedarik eder: hava hazırlama, silindir, valf, manyetik sensör ve gripper.",
            "descriptionEn": "Bizdavar Group supplies industrial pneumatic series: air preparation, cylinders, valves, magnetic sensors and grippers.",
            "descriptionRu": "Bizdavar Group поставляет серии промышленной пневматики: подготовка воздуха, цилиндры, клапаны, датчики и захваты.",
            "descriptionAr": "تورد مجموعة بيزدوار سلاسل الهواء المضغوط الصناعية: تجهيز الهواء، الأسطوانات، الصمامات، الحساسات والقوابض.",
            "tagline": "پنوماتیک صنعتی",
            "taglineFa": "پنوماتیک صنعتی — استانبول",
            "since": "İstanbul",
            "origin": "استانبول — ترکیه",
            "descriptionFa": "سیلندر پنوماتیک، شیر برقی، واحد مراقبت هوا، فیلتر، رگولاتور و روغن‌زن برای خطوط تولید ایران. مشاوره فارسی و پیش‌فاکتور از بیزدوار گروپ.",
            "heroStats": [
                {"value": "4", "label": "خانواده محصول"},
                {"value": str(sum(len(c["series"]) for c in categories)), "label": "سری محصول"},
                {"value": "TR", "label": "مبدا تامین"},
            ],
        },
        "trustSignals": [
            {"icon": "target", "label": "کد سفارش خوانا", "desc": "نام سری، عکس و کد سفارشی که در کاتالوگ خوانا بوده کنار محصول آمده است"},
            {"icon": "globe", "label": "مشاوره فارسی", "desc": "انتخاب سایز پورت، کورس سیلندر و ولتاژ بوبین بر اساس کاربرد"},
            {"icon": "factory", "label": "پنوماتیک صنعتی", "desc": "واحد مراقبت، سیلندر ISO، شیر و سنسور موقعیت"},
            {"icon": "mail", "label": "پیش‌فاکتور", "desc": "مدل، تعداد و زمان تامین قبل از سفارش مشخص می‌شود"},
        ],
        "whyBuyFromUs": [
            {"icon": "target", "title": "سری‌های کامل", "desc": "دسته‌ها و نام سری‌ها کنار هم هستند؛ کدهایی که در کاتالوگ خوانا بوده‌اند کنار محصول آمده‌اند."},
            {"icon": "document", "title": "کد سفارش", "desc": "اگر کد روی بدنه را دارید همان را بفرستید تا مدل دقیق پیش‌فاکتور شود."},
            {"icon": "factory", "title": "انتخاب روی کاربرد", "desc": "اگر فقط مصرف هوا، کورس یا دبی را دارید، سری مناسب را پیشنهاد می‌دهیم."},
            {"icon": "handshake", "title": "یک نقطه تماس", "desc": "استعلام فارسی، پیش‌فاکتور و لجستیک از بیزدوار."},
        ],
        "purchaseSteps": [
            {"num": "۱", "title": "استعلام", "desc": "نام سری، کد سفارش، سایز پورت یا کورس، تعداد"},
            {"num": "۲", "title": "تطبیق فنی", "desc": "بررسی مدل و پیشنهاد جایگزین در صورت نیاز"},
            {"num": "۳", "title": "پیش‌فاکتور", "desc": "قیمت، زمان تامین و شرایط حمل"},
            {"num": "۴", "title": "تامین", "desc": "سفارش و حمل بین‌المللی"},
            {"num": "۵", "title": "تحویل", "desc": "تحویل به همراه مشخصات سری"},
        ],
        "highlights": highlights,
        "categories": categories,
        "iranIndustries": [
            {"name": "خطوط مونتاژ", "desc": "سیلندر، شیر و سنسور موقعیت", "image": hero, "imageAlt": "Pneumatic cylinders for assembly lines", "icon": "factory"},
            {"name": "بسته‌بندی", "desc": "گریپر، سیلندر کامپکت و شیر", "image": hero, "imageAlt": "Pneumatic grippers for packaging", "icon": "gear"},
            {"name": "هوای فشرده کارخانه", "desc": "فیلتر، رگولاتور و روغن‌زن", "image": hero, "imageAlt": "Industrial air preparation", "icon": "droplet"},
        ],
        "industries": [
            {"name": "مونتاژ", "nameEn": "Assembly", "desc": "Cylinders, valves and sensors", "image": hero, "imageAlt": "Pneumatic assembly", "icon": "factory"},
            {"name": "بسته‌بندی", "nameEn": "Packaging", "desc": "Grippers and compact cylinders", "image": hero, "imageAlt": "Pneumatic packaging", "icon": "gear"},
            {"name": "ماشین‌سازی", "nameEn": "Machinery", "desc": "Air prep and control valves", "image": hero, "imageAlt": "Pneumatic machinery", "icon": "bolt"},
        ],
        "academy": {
            "title": "پنوماتیک صنعتی",
            "descFa": "این کاتالوگ آماده‌سازی هوا، سیلندر، شیر و محصولات فناوری بالا را پوشش می‌دهد. کد سفارش فقط وقتی آمده که در برگهٔ همان سری خوانا بوده است.",
            "image": hero,
            "imageAlt": "Industrial pneumatic products",
            "topics": [
                "واحد FRL و سایز پورت",
                "سیلندر ISO 15552 و ISO 21287",
                "سنسور مغناطیسی روی سیلندر",
                "شیر دستی، سلونوئید و نامور",
            ],
        },
        "services": [
            {"title": "انتخاب سری", "desc": "بر اساس پورت، کورس، دبی و ولتاژ بوبین"},
            {"title": "جایگزینی", "desc": "تطبیق کد سفارش با قطعه نصب‌شده"},
            {"title": "پیش‌فاکتور", "desc": "قیمت و زمان تامین در یک سند"},
            {"title": "لجستیک", "desc": "حمل از ترکیه تا پروژه"},
            {"title": "پشتیبانی فارسی", "desc": "یک نقطه تماس برای استعلام"},
        ],
        "faq": [
            {
                "qFa": "کد سفارش را کجا ببینم؟",
                "aFa": "روی کارت هر سری، کدهای خوانا آمده است. جزئیات را باز کنید و برای خرید همان کد را در فرم یا واتساپ بفرستید.",
                "qTr": "Sipariş kodunu nerede görürüm?",
                "aTr": "Okunabilen kodlar seri kartındadır. Ayrıntıyı açın ve satın almak için kodu form veya WhatsApp ile gönderin.",
                "qEn": "Where do I see the order code?",
                "aEn": "Readable codes are on each series card. Open the details and send that code by the form or WhatsApp to buy.",
                "qRu": "Где смотреть код заказа?",
                "aRu": "Читаемые коды указаны на карточке серии. Откройте подробности и отправьте код через форму или WhatsApp.",
                "qAr": "أين أرى رمز الطلب؟",
                "aAr": "الرموز المقروءة على بطاقة كل سلسلة. افتحوا التفاصيل وأرسلوا الرمز عبر النموذج أو واتساب للشراء.",
            },
            {
                "qFa": "چرا بعضی سری‌ها کد ندارند؟",
                "aFa": "اگر برگهٔ فنی آن سری فقط تصویر باشد، کد را حدس نمی‌زنیم. نام سری را بفرستید تا همان مدل استعلام شود.",
                "qTr": "Bazı serilerde neden kod yok?",
                "aTr": "Teknik sayfa yalnızca görselse kod uydurmayız. Seri adını gönderin, aynı model için teklif verelim.",
                "qEn": "Why do some series have no code?",
                "aEn": "If that series sheet is image-only, we do not guess a code. Send the series name and we will quote that model.",
                "qRu": "Почему у части серий нет кода?",
                "aRu": "Если лист серии только картинка, код не угадываем. Пришлите название серии — подготовим предложение.",
                "qAr": "لماذا بعض السلاسل بلا رمز؟",
                "aAr": "إذا كانت ورقة السلسلة صورة فقط لا نخمن الرمز. أرسلوا اسم السلسلة لنقدّم عرض السعر.",
            },
            {
                "qFa": "چطور خرید کنم؟",
                "aFa": "نام سری یا کد روی بدنه، تعداد و ولتاژ بوبین را بفرستید. پیش‌فاکتور قبل از خرید صادر می‌شود.",
                "qTr": "Nasıl satın alırım?",
                "aTr": "Seri adını veya gövdedeki kodu, adedi ve bobin voltajını gönderin. Proforma satın almadan önce çıkar.",
                "qEn": "How do I buy?",
                "aEn": "Send the series name or the code on the body, the quantity and the coil voltage. A proforma is issued before you buy.",
                "qRu": "Как купить?",
                "aRu": "Пришлите название серии или код с корпуса, количество и напряжение катушки. Проформа выставляется до покупки.",
                "qAr": "كيف أشتري؟",
                "aAr": "أرسلوا اسم السلسلة أو الرمز على الهيكل والكمية وفولتية الملف. يصدر عرض السعر قبل الشراء.",
            },
            {
                "qFa": "سیلندر و واحد مراقبت هر دو هست؟",
                "aFa": "بله. آماده‌سازی هوا، سیلندر، شیر، سنسور مغناطیسی، گریپر و سیلندر تلسکوپی در همین کاتالوگ است.",
                "qTr": "Silindir ve şartlandırıcı ikisi de var mı?",
                "aTr": "Evet. Hava hazırlama, silindir, valf, manyetik sensör, gripper ve teleskopik silindir bu katalogdadır.",
                "qEn": "Are both cylinders and air-prep units listed?",
                "aEn": "Yes. Air preparation, cylinders, valves, magnetic sensors, grippers and telescopic cylinders are in this catalog.",
                "qRu": "Есть и цилиндры, и подготовка воздуха?",
                "aRu": "Да. Подготовка воздуха, цилиндры, клапаны, магнитные датчики, захваты и телескопические цилиндры есть в этом каталоге.",
                "qAr": "هل الأسطوانات ووحدات تجهيز الهواء متوفرة معاً؟",
                "aAr": "نعم. تجهيز الهواء والأسطوانات والصمامات والحساسات المغناطيسية والقوابض والأسطوانات التلسكوبية في هذا الكتالوج.",
            },
        ],
        "inquiryTemplate": "سلام، درخواست استعلام {product} دارم.\n\nکد سفارش:\nسایز / کورس:\nتعداد:\n",
    }


LOCALES = [
    {
        "lang": "fa", "dir": "rtl", "folder": "pages", "prefix": "",
        "title": "خرید سیلندر و شیر پنوماتیک | واحد مراقبت هوا — بیزدوار",
        "desc": "سیلندر پنوماتیک، شیر برقی، واحد مراقبت هوا، فیلتر، رگولاتور و روغن‌زن برای خطوط تولید ایران. مشاوره فارسی و پیش‌فاکتور از بیزدوار گروپ.",
        "keywords": "سیلندر پنوماتیک, خرید سیلندر پنوماتیک, شیر پنوماتیک, شیر برقی پنوماتیک, واحد مراقبت هوا, فیلتر رگولاتور, روغن‌زن پنوماتیک, سنسور مغناطیسی سیلندر, گریپر پنوماتیک, پنوماتیک صنعتی, بیزدوار",
        "trust_e": "چرا از بیزدوار", "trust_t": "تامین پنوماتیک برای واحد فنی و خرید", "trust_d": "سری‌ها را در کاتالوگ آورده‌ایم و برای مدل دقیق پیش‌فاکتور می‌دهیم.",
        "buy_e": "مسیر خرید", "buy_t": "از استعلام تا تحویل", "buy_d": "کد سری، تعداد و زمان تامین در هر مرحله مشخص است.",
        "hi_e": "خانواده‌های محصول", "hi_t": "چهار گروه اصلی", "hi_d": "آماده‌سازی هوا، سیلندر، شیر و محصولات فناوری پیشرفته.",
        "cat_e": "کاتالوگ", "cat_t": "کاتالوگ سری‌ها", "cat_d": "هر کارت یک سری است. کد سفارش، فشار و سایز اتصال روی همان کارت آمده است.",
        "iran_e": "کاربرد", "iran_t": "پنوماتیک در خطوط صنعتی", "iran_d": "اگر صنعت شما در لیست نیست، مصرف هوا و نوع عملگر را بفرستید.",
        "ind_e": "صنایع", "ind_t": "کاربرد تجهیزات پنوماتیک", "ind_d": "مونتاژ، بسته‌بندی و ماشین‌سازی.",
        "sup_e": "تامین", "sup_t": "خدمات تامین پنوماتیک", "sup_d": "انتخاب سری، پیش‌فاکتور و حمل.",
        "faq_e": "پرسش‌ها", "faq_t": "پرسش‌های خرید", "faq_d": "مدل، کد سفارش و پیش‌فاکتور.",
        "cta_t": "برای پنوماتیک استعلام می‌خواهید؟", "cta_d": "نام سری یا کد سفارش را بفرستید.",
        "cta_form": "فرم استعلام", "cta_cat": "کاتالوگ محصولات", "sticky": "استعلام پنوماتیک",
        "geo": "تامین پنوماتیک صنعتی — مشاوره فنی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.",
        "note": "برای استعلام مدل دقیق <a href=\"contact\">با بیزدوار تماس بگیرید</a>.",
        "nav": "دسته‌های پنوماتیک",
        "search_label": "جستجو در کاتالوگ",
        "search_ph": "جستجو: فیلتر، سیلندر، شیر یا کد سفارش",
        "search_empty": "چیزی با این عبارت پیدا نشد. نام سری یا کد را کوتاه‌تر بنویسید، یا از دسته‌ها انتخاب کنید.",
        "jumps_label": "گروه‌های اصلی",
    },
    {
        "lang": "tr", "dir": "ltr", "folder": "tr/pages", "prefix": "/tr",
        "title": "Endüstriyel pnömatik | Silindir, valf ve hava hazırlayıcı — Bizdavar",
        "desc": "Endüstriyel pnömatik serileri: hava hazırlama, silindir, valf, manyetik sensör ve gripper. Teklif Bizdavar Group.",
        "keywords": "endüstriyel pnömatik, silindir, valf, hava hazırlayıcı, Bizdavar",
        "trust_e": "Neden Bizdavar", "trust_t": "Pnömatik tedariki", "trust_d": "Seriler katalogda. Net model için proforma veriyoruz.",
        "buy_e": "Satın alma", "buy_t": "Tekliften teslimata", "buy_d": "Seri kodu, adet ve termin her adımda açıktır.",
        "hi_e": "Ürün grupları", "hi_t": "Dört ana grup", "hi_d": "Hava hazırlayıcılar, silindirler, valfler ve yüksek teknoloji.",
        "cat_e": "Katalog", "cat_t": "Seri kataloğu", "cat_d": "Her kart bir seridir. Sipariş kodları o serinin kataloğundan okunmuştur.",
        "iran_e": "Uygulama", "iran_t": "Endüstriyel hatlarda pnömatik", "iran_d": "Listenizde yoksa hava tüketimini ve aktüatör tipini gönderin.",
        "ind_e": "Sektörler", "ind_t": "Pnömatik kullanım", "ind_d": "Montaj, paketleme ve makine imalatı.",
        "sup_e": "Tedarik", "sup_t": "Pnömatik tedarik hizmeti", "sup_d": "Seri seçimi, proforma ve lojistik.",
        "faq_e": "Sorular", "faq_t": "Sık sorulanlar", "faq_d": "Gövdedeki kodu gönderin.",
        "cta_t": "Pnömatik teklifi ister misiniz?", "cta_d": "Seri adını veya sipariş kodunu gönderin.",
        "cta_form": "Teklif formu", "cta_cat": "Ürün kataloğu", "sticky": "Pnömatik teklifi",
        "geo": "Endüstriyel pnömatik tedariki — teknik danışmanlık, proforma ve lojistik, Bizdavar Group.",
        "note": "Teklif için <a href=\"contact\">Bizdavar</a> ile iletişime geçin.",
        "nav": "Pnömatik kategorileri",
        "search_label": "Katalogda ara",
        "search_ph": "Ara: filtre, silindir, valf veya sipariş kodu",
        "search_empty": "Bu aramayla sonuç yok. Seri adını veya kodu kısaltın, ya da kategorilerden seçin.",
        "jumps_label": "Ana gruplar",
    },
    {
        "lang": "en", "dir": "ltr", "folder": "en/pages", "prefix": "/en",
        "title": "Industrial pneumatics | Cylinders, valves and air prep — Bizdavar",
        "desc": "Industrial pneumatic series: air preparation, cylinders, valves, magnetic sensors and grippers. Quote the exact model with Bizdavar Group.",
        "keywords": "industrial pneumatics, pneumatic cylinder, pneumatic valve, air preparation unit, Bizdavar",
        "trust_e": "Why Bizdavar", "trust_t": "Pneumatic supply", "trust_d": "Series are in the catalog. We quote the exact model.",
        "buy_e": "How to buy", "buy_t": "From inquiry to delivery", "buy_d": "Series code, quantity and lead time are clear at each step.",
        "hi_e": "Product families", "hi_t": "Four product groups", "hi_d": "Air preparation, cylinders, valves and advanced products.",
        "cat_e": "Catalog", "cat_t": "Series catalog", "cat_d": "Each card is one series. Order codes were read from that series sheet.",
        "iran_e": "Applications", "iran_t": "Pneumatics on industrial lines", "iran_d": "If your industry is not listed, send air use and actuator type.",
        "ind_e": "Industries", "ind_t": "Where pneumatics are used", "ind_d": "Assembly, packaging and machinery.",
        "sup_e": "Supply", "sup_t": "Pneumatic supply service", "sup_d": "Series selection, proforma and logistics.",
        "faq_e": "Questions", "faq_t": "Common questions", "faq_d": "Send the code printed on the part.",
        "cta_t": "Need a pneumatic quote?", "cta_d": "Send the series name or order code.",
        "cta_form": "Quote form", "cta_cat": "Product catalog", "sticky": "Pneumatic quote",
        "geo": "Industrial pneumatic supply — technical consulting, proforma and logistics by Bizdavar Group.",
        "note": "For a quote, <a href=\"contact\">contact Bizdavar</a>.",
        "nav": "Pneumatic categories",
        "search_label": "Search the catalog",
        "search_ph": "Search: filter, cylinder, valve or order code",
        "search_empty": "Nothing matched. Shorten the series name or code, or pick a category.",
        "jumps_label": "Main groups",
    },
    {
        "lang": "ru", "dir": "ltr", "folder": "ru/pages", "prefix": "/ru",
        "title": "Промышленная пневматика | Цилиндры, клапаны и подготовка воздуха — Bizdavar",
        "desc": "Серии промышленной пневматики: подготовка воздуха, цилиндры, клапаны, магнитные датчики и захваты. Запрос точной модели — Bizdavar Group.",
        "keywords": "промышленная пневматика, пневмоцилиндр, пневмоклапан, подготовка воздуха, Bizdavar",
        "trust_e": "Почему Bizdavar", "trust_t": "Поставка пневматики", "trust_d": "Серии есть в каталоге. Точную модель указываем в предложении.",
        "buy_e": "Покупка", "buy_t": "От запроса до поставки", "buy_d": "Код серии, количество и срок видны на каждом шаге.",
        "hi_e": "Группы", "hi_t": "Четыре группы", "hi_d": "Подготовка воздуха, цилиндры, клапаны и высокие технологии.",
        "cat_e": "Каталог", "cat_t": "Каталог серий", "cat_d": "Каждая карточка — одна серия. Коды заказа прочитаны из листа этой серии.",
        "iran_e": "Применение", "iran_t": "Пневматика на промышленных линиях", "iran_d": "Если вашей отрасли нет в списке, пришлите расход воздуха и тип привода.",
        "ind_e": "Отрасли", "ind_t": "Где применяется пневматика", "ind_d": "Сборка, упаковка и машиностроение.",
        "sup_e": "Поставка", "sup_t": "Поставка пневматики", "sup_d": "Подбор серии, проформа и логистика.",
        "faq_e": "Вопросы", "faq_t": "Частые вопросы", "faq_d": "Пришлите код с корпуса.",
        "cta_t": "Нужно предложение по пневматике?", "cta_d": "Пришлите название серии или код заказа.",
        "cta_form": "Форма запроса", "cta_cat": "Каталог", "sticky": "Запрос пневматики",
        "geo": "Поставка промышленной пневматики — консультация, проформа и логистика Bizdavar Group.",
        "note": "Для предложения — <a href=\"contact\">Bizdavar</a>.",
        "nav": "Категории пневматики",
        "search_label": "Поиск по каталогу",
        "search_ph": "Поиск: фильтр, цилиндр, клапан или код заказа",
        "search_empty": "Ничего не найдено. Сократите название или код, либо выберите категорию.",
        "jumps_label": "Основные группы",
    },
    {
        "lang": "ar", "dir": "rtl", "folder": "ar/pages", "prefix": "/ar",
        "title": "معدات هواء مضغوط صناعية | أسطوانات وصمامات وتجهيز هواء — بيزدوار",
        "desc": "سلاسل هواء مضغوط صناعية: تجهيز الهواء، الأسطوانات، الصمامات، الحساسات المغناطيسية والقوابض. استفسار بالموديل الدقيق من Bizdavar Group.",
        "keywords": "هواء مضغوط, أسطوانة هوائية, صمام, تجهيز هواء, بيزدوار",
        "trust_e": "لماذا بيزدوار", "trust_t": "توريد الهواء المضغوط", "trust_d": "السلاسل في الكتالوج. الموديل الدقيق يظهر في عرض السعر.",
        "buy_e": "الشراء", "buy_t": "من الاستفسار إلى التسليم", "buy_d": "رمز السلسلة والكمية ومدة التوريد واضحة في كل خطوة.",
        "hi_e": "العائلات", "hi_t": "أربع مجموعات", "hi_d": "تجهيز الهواء، الأسطوانات، الصمامات والتقنية المتقدمة.",
        "cat_e": "الكتالوج", "cat_t": "كتالوج السلاسل", "cat_d": "كل بطاقة سلسلة واحدة. رموز الطلب قُرئت من ورقة تلك السلسلة.",
        "iran_e": "الاستخدام", "iran_t": "الهواء المضغوط في الخطوط الصناعية", "iran_d": "إذا لم تكن صناعتكم في القائمة، أرسلوا استهلاك الهواء ونوع المشغل.",
        "ind_e": "القطاعات", "ind_t": "استخدام الهواء المضغوط", "ind_d": "التجميع والتغليف وبناء الآلات.",
        "sup_e": "التوريد", "sup_t": "خدمة توريد الهواء المضغوط", "sup_d": "اختيار السلسلة وعرض السعر واللوجستيات.",
        "faq_e": "أسئلة", "faq_t": "أسئلة شائعة", "faq_d": "أرسلوا الرمز المكتوب على القطعة.",
        "cta_t": "تريدون عرض سعر للهواء المضغوط؟", "cta_d": "أرسلوا اسم السلسلة أو رمز الطلب.",
        "cta_form": "نموذج الاستفسار", "cta_cat": "كتالوج المنتجات", "sticky": "استفسار هواء مضغوط",
        "geo": "توريد معدات هواء مضغوط صناعية — استشارة فنية وعرض سعر ولوجستيات من بيزدوار.",
        "note": "للاستفسار <a href=\"contact\">تواصلوا مع بيزدوار</a>.",
        "nav": "فئات الهواء المضغوط",
        "search_label": "بحث في الكتالوج",
        "search_ph": "ابحثوا: مرشح، أسطوانة، صمام أو رمز الطلب",
        "search_empty": "لا توجد نتيجة. اختصروا اسم السلسلة أو الرمز، أو اختاروا فئة.",
        "jumps_label": "المجموعات الرئيسية",
    },
]


def family_jumps(categories, lang):
    key = {"fa": "groupTitleFa", "tr": "groupTitleTr", "en": "groupTitleEn", "ru": "groupTitleRu", "ar": "groupTitleAr"}[lang]
    seen = []
    parts = []
    for cat in categories:
        if cat["family"] in seen or not cat.get("groupTitleFa"):
            continue
        seen.append(cat["family"])
        label = html.escape(cat.get(key) or cat["groupTitleFa"])
        parts.append(f'<a class="enpo-family-jump" href="#enpo-group-{cat["family"]}">{label}</a>')
    return "".join(parts)


SHARE_IMAGE = "assets/images/enpo/1759141902.webp"


def faq_jsonld(faq, lang):
    suffix = {"fa": "Fa", "tr": "Tr", "en": "En", "ru": "Ru", "ar": "Ar"}[lang]
    lang_tag = {"fa": "fa-IR", "tr": "tr-TR", "en": "en-US", "ru": "ru-RU", "ar": "ar-AE"}[lang]
    entities = []
    for item in faq:
        q = item.get("q" + suffix) or item.get("q")
        a = item.get("a" + suffix) or item.get("a")
        if not q or not a:
            continue
        entities.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {"@type": "Answer", "text": a},
        })
    return json.dumps({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "inLanguage": lang_tag,
        "mainEntity": entities,
    }, ensure_ascii=False)


def page_html(loc, hero_src, jumps, faq_ld):
    p = loc["prefix"]
    canon = f"https://bizdavar.com{p}/pages/pneumatic"
    hrefs = {
        "fa-IR": "https://bizdavar.com/pages/pneumatic",
        "tr-TR": "https://bizdavar.com/tr/pages/pneumatic",
        "en-US": "https://bizdavar.com/en/pages/pneumatic",
        "ru-RU": "https://bizdavar.com/ru/pages/pneumatic",
        "ar-AE": "https://bizdavar.com/ar/pages/pneumatic",
    }
    alts = "\n".join(
        f'  <link rel="alternate" hreflang="{k}" href="{v}">' for k, v in hrefs.items()
    )
    og_map = {"fa": "fa_IR", "tr": "tr_TR", "en": "en_US", "ru": "ru_RU", "ar": "ar_AE"}
    og_locale = og_map[loc["lang"]]
    og_alts = "\n".join(
        f'  <meta property="og:locale:alternate" content="{v}">' for k, v in og_map.items() if k != loc["lang"]
    )
    title_attr = html.escape(loc["title"], quote=True)
    desc_attr = html.escape(loc["desc"], quote=True)
    keywords_attr = html.escape(loc["keywords"], quote=True)
    share = "https://bizdavar.com/" + SHARE_IMAGE
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
  <title>{html.escape(loc['title'])}</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/styles/brand-supply-shared.css?v=20261004a">
  <link rel="stylesheet" href="/assets/styles/enpo.css?v=20261008c">
  <meta name="description" content="{desc_attr}">
  <meta name="keywords" content="{keywords_attr}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta property="og:title" content="{title_attr}">
  <meta property="og:description" content="{desc_attr}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canon}">
  <meta property="og:image" content="{share}">
  <meta property="og:image:secure_url" content="{share}">
  <meta property="og:image:type" content="image/webp">
  <meta property="og:image:width" content="500">
  <meta property="og:image:height" content="450">
  <meta property="og:image:alt" content="{title_attr}">
  <meta property="og:locale" content="{og_locale}">
{og_alts}
  <meta property="og:site_name" content="Bizdavar Group">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title_attr}">
  <meta name="twitter:description" content="{desc_attr}">
  <meta name="twitter:image" content="{share}">
  <meta name="twitter:image:alt" content="{title_attr}">
  <link rel="canonical" href="{canon}">
{alts}
  <link rel="alternate" hreflang="x-default" href="https://bizdavar.com/pages/pneumatic">
  <script type="application/ld+json">{faq_ld}</script>
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
    <nav class="enpo-family-jumps" aria-label="{html.escape(loc['jumps_label'])}">{jumps}</nav>
    <div class="enpo-catalog-toolbar">
      <label class="enpo-catalog-search" for="enpoCatalogSearch">
        <span class="visually-hidden">{html.escape(loc['search_label'])}</span>
        <input type="search" id="enpoCatalogSearch" name="q" autocomplete="off" enterkeyhint="search" placeholder="{html.escape(loc['search_ph'])}">
      </label>
    </div>
    <p class="enpo-catalog-empty" id="enpoCatalogEmpty" hidden>{html.escape(loc['search_empty'])}</p>
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
  <script src="/assets/scripts/site-loader.js?v=20261009a" data-after-seo="i18n/supply-catalog-i18n.js" data-after-page-i18n="lib/supply-brand-page.js,config/enpo-products.js" data-before-main="enpo-page.js"></script>
  <script>
    bizdavarPageInit(function () {{
      injectPageSeo('enpo', {{
        canonical: '{canon}',
        ogImage: '{SHARE_IMAGE}',
        ogImageAlt: {json.dumps(loc['title'], ensure_ascii=False)},
        keywords: {json.dumps(loc['keywords'], ensure_ascii=False)},
        title: {json.dumps(loc['title'], ensure_ascii=False)},
        description: {json.dumps(loc['desc'], ensure_ascii=False)}
      }});
      renderBreadcrumbs([
        {{ page: 'home', url: 'index' }},
        {{ page: 'products', url: 'products#supply' }},
        {{ page: 'enpo', url: 'pneumatic' }}
      ]);
      injectBreadcrumbSchema([
        {{ page: 'home', url: 'index' }},
        {{ page: 'products', url: 'pages/products#supply' }},
        {{ page: 'enpo', url: 'pages/pneumatic' }}
      ]);
      initEnpoPage();
      injectEnpoSchema();
      renderGeoStrip('geoStrip', {{ text: '{loc['geo']}' }});
      renderRelatedLinks([
        {{ title: 'Catalog', url: 'products#supply', desc: 'Supply' }},
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
body[data-page="enpo"] .enpo-family-jumps {{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px;
}}
body[data-page="enpo"] .enpo-family-jump {{
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #c5d7e4;
  color: #006fa3;
  font-weight: 700;
  text-decoration: none;
}}
body[data-page="enpo"] .enpo-family-jump:hover {{
  background: #0095d8;
  border-color: #0095d8;
  color: #fff;
}}
body[data-page="enpo"] .enpo-catalog-toolbar {{
  margin-bottom: 16px;
}}
body[data-page="enpo"] .enpo-catalog-search {{
  display: block;
}}
body[data-page="enpo"] .enpo-catalog-search input {{
  width: 100%;
  min-height: 52px;
  padding: 0 18px;
  border: 1px solid #c5d7e4;
  border-radius: 14px;
  background: #fff;
  font: inherit;
  color: inherit;
}}
body[data-page="enpo"] .enpo-catalog-search input:focus {{
  outline: 3px solid rgba(0, 149, 216, 0.28);
  border-color: #0095d8;
}}
body[data-page="enpo"] .enpo-catalog-empty {{
  margin: 0 0 16px;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid #c5d7e4;
  border-radius: 12px;
}}
body[data-page="enpo"] .enpo-series-grid--products {{
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}}
body[data-page="enpo"] .enpo-series-card__desc {{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}}
body[data-page="enpo"] .enpo-series-card__specs dd {{
  overflow-wrap: anywhere;
}}
body[data-page="enpo"] .enpo-series-card__foot {{
  margin-top: auto;
}}
body[data-page="enpo"] .enpo-series-card__actions {{
  display: flex;
  gap: 8px;
}}
body[data-page="enpo"] .enpo-series-card__actions .btn {{
  flex: 1 1 0;
}}
body[data-page="enpo"] .visually-hidden {{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}}
@media (max-width: 720px) {{
  body[data-page="enpo"] .enpo-series-grid--products {{
    grid-template-columns: 1fr;
  }}
}}
.enpo-drawer {{
  position: fixed;
  inset: 0;
  z-index: 80;
}}
.enpo-drawer[hidden] {{ display: none !important; }}
.enpo-drawer__backdrop {{
  position: absolute;
  inset: 0;
  background: rgba(8, 24, 36, 0.55);
}}
.enpo-drawer__panel {{
  position: relative;
  margin: 4vh auto;
  width: min(960px, calc(100% - 24px));
  max-height: 92vh;
  overflow: auto;
  background: #fff;
  border-radius: 16px;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 24px;
  padding: 24px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
}}
.enpo-drawer__close {{
  position: absolute;
  top: 10px;
  inset-inline-end: 10px;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 999px;
  background: #f3f8fb;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
}}
.enpo-drawer__media > img {{
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  background: #f3f8fb;
  border-radius: 12px;
}}
.enpo-drawer__info h2 {{
  margin: 0 0 10px;
  font-size: 1.35rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}}
.enpo-drawer__desc {{ margin: 0 0 12px; color: #334; }}
.enpo-drawer__specs {{
  display: grid;
  gap: 8px;
  margin: 12px 0 0;
}}
.enpo-drawer__spec {{
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  background: #f3f8fb;
  border-radius: 10px;
}}
.enpo-drawer__spec dd {{
  margin: 0;
  overflow-wrap: anywhere;
  font-weight: 700;
}}
.enpo-drawer__actions {{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}}
.enpo-drawer__actions .btn {{ flex: 1 1 140px; justify-content: center; }}
body.enpo-drawer-open {{ overflow: hidden; }}
@media (max-width: 800px) {{
  .enpo-drawer__panel {{
    grid-template-columns: 1fr;
    margin: 0;
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
  }}
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
  brandName: 'Bizdavar',
  schemaId: 'jsonld-enpo',
  schemaListName: {
    fa: 'کاتالوگ پنوماتیک صنعتی — بیزدوار گروپ',
    tr: 'Endüstriyel pnömatik kataloğu — Bizdavar Group',
    en: 'Industrial pneumatic catalog — Bizdavar Group',
    ru: 'Каталог промышленной пневматики — Bizdavar Group',
    ar: 'كتالوج الهواء المضغوط الصناعي — Bizdavar Group'
  },
  initFn: 'initEnpoPage',
  schemaFn: 'injectEnpoSchema'
});
""",
        encoding="utf-8",
    )
    hero = data["brand"]["heroImage"]
    for loc in LOCALES:
        path = ROOT / loc["folder"] / "pneumatic.html"
        path.write_text(page_html(loc, hero, family_jumps(categories, loc["lang"]), faq_jsonld(data["faq"], loc["lang"])), encoding="utf-8")
    patch_css(hero)
    series_n = sum(len(c["series"]) for c in categories)
    coded = sum(1 for c in categories for s in c["series"] if s["specList"])
    print("categories", len(categories), "series", series_n, "with specs", coded)


if __name__ == "__main__":
    main()
