#!/usr/bin/env python3
"""Patch prosense-products.js to use downloaded local images."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
P = ROOT / 'assets' / 'scripts' / 'config' / 'prosense-products.js'
t = P.read_text(encoding='utf-8')

fixes = [
    (
        "inquiryName: 'PQ Serisi',\n      image: PROSENSE_IMG + 'hero-pq-sil2.jpeg',\n    }",
        "inquiryName: 'PQ Serisi',\n      image: PROSENSE_IMG + 'hero-pq-sil2.jpeg',\n      imageAlt: 'Prosense PQ series SIL2 SIL3 fixed gas detector for process safety'\n    }",
    ),
    (
        "inquiryName: 'SafeVader Serisi',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'SafeVader Serisi',\n      image: PROSENSE_IMG + 'category-safevader.jpg'",
    ),
    (
        "inquiryName: 'Marine Gaz Dedektörü',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'Marine Gaz Dedektörü',\n      image: PROSENSE_IMG + 'hero-marine.jpg'",
    ),
    (
        "inquiryName: 'MPS Hidrokarbon Dedektörü',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'MPS Hidrokarbon Dedektörü',\n      image: PROSENSE_IMG + 'hero-mps-hydrocarbon.jpg'",
    ),
    (
        "inquiryName: 'PQD VOC Dedektörü',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'PQD VOC Dedektörü',\n      image: PROSENSE_IMG + 'hero-voc-pqd.jpg'",
    ),
    (
        "inquiryName: 'Kalibrasyon Hizmeti',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'Kalibrasyon Hizmeti',\n      image: PROSENSE_IMG + 'hero-calibration.jpg'",
    ),
    (
        "inquiryName: 'SOMA Serisi',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'SOMA Serisi',\n      image: PROSENSE_IMG + 'hero-soma-mining.jpg'",
    ),
    (
        "inquiryName: 'PPS+ Otopark Sistemi',\n      image: 'assets/images/content/industrial-placeholder.svg'",
        "inquiryName: 'PPS+ Otopark Sistemi',\n      image: PROSENSE_IMG + 'hero-parking-pps-plus.webp'",
    ),
]
for a, b in fixes:
    if a not in t:
        print('WARN missing block:', a[:60])
    else:
        t = t.replace(a, b)

cat_imgs = {
    'fixed': 'category-fixed-gas.jpg',
    'portable': 'category-portable-gas.jpg',
    'flame': 'category-flame-detector.png',
    'panels': 'category-control-panel.png',
    'parking': 'category-parking.jpg',
    'software': 'category-software.png',
    'calibration': 'category-calibration.jpg',
    'other': 'category-other-equipment.png',
}
for cid, img in cat_imgs.items():
    t, n = re.subn(
        rf"(id: '{cid}',[\s\S]*?)image: 'assets/images/content/industrial-placeholder.svg'",
        rf"\1image: PROSENSE_IMG + '{img}'",
        t,
        count=1,
    )
    if not n:
        print('WARN category', cid)

industry_rows = [
    ('Petrol ve Gaz', 'industry-oil-gas.webp'),
    ('Gaz Dağıtım İstasyonları', 'industry-gas-distribution.webp'),
    ('Kapalı Otoparklar', 'industry-parking.jpg'),
    ('Denizcilik', 'industry-marine.jpg'),
    ('HVAC - Freon', 'industry-hvac.jpg'),
    ('Su Arıtma Tesisleri', 'industry-water.jpeg'),
    ('Petrokimya', 'industry-petrochemical.jpg'),
    ('Maden ve Tüneller', 'industry-mining.jpg'),
    ('Demir Çelik', 'industry-steel.jpg'),
    ('İlaç Sanayi', 'industry-pharma.jpg'),
    ('Yemek ve İçecek Endüstrisi', 'industry-food.jpeg'),
    ('Akü Dolum Odaları', 'industry-battery.webp'),
]
for name_tr, img in industry_rows:
    t, n = re.subn(
        rf"(nameTr: '{re.escape(name_tr)}', desc: [^,]+, icon: '[^']+', )image: 'assets/images/content/industrial-placeholder.svg'",
        rf"\1image: PROSENSE_IMG + '{img}'",
        t,
        count=1,
    )
    if not n:
        print('WARN industry', name_tr)

t = t.replace(
    "image: 'assets/images/content/industrial-placeholder.svg',\n    imageSecondary: 'assets/images/content/industrial-placeholder.svg'",
    "image: PROSENSE_IMG + 'academy-factory.webp',\n    imageSecondary: PROSENSE_IMG + 'academy-production.webp'",
)

left = t.count('industrial-placeholder')
print('placeholders remaining:', left)
P.write_text(t, encoding='utf-8')
