#!/usr/bin/env python3
"""Download Prosense assets from prosense.com.tr with stable local filenames."""
from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'images' / 'prosense'
BASE = 'https://www.prosense.com.tr/'

# local_name -> remote path under prosense.com.tr
ASSETS = {
    # Hero / highlights (homepage sliders)
    'hero-pq-sil2.jpeg': 'uploads/856--sil2-slider.jpeg',
    'hero-marine.jpg': 'uploads/688--sly1-copy.jpg',
    'hero-mps-hydrocarbon.jpg': 'uploads/491--prosense_slider-copy21.jpg',
    'hero-voc-pqd.jpg': 'uploads/852--prosense-ile-hassas-olcumu.jpg',
    'hero-hart-fdi.png': 'uploads/730--856-sil2-slider.png',
    'hero-calibration.jpg': 'uploads/275--prosense_slider6.jpg',
    'hero-soma-mining.jpg': 'uploads/651--soma-slider.jpg',
    'hero-parking-pps-plus.webp': 'uploads/865--672-prosense3-min.webp',
    'hero-brand.webp': 'uploads/313--prosense1.webp',
    # Category cards (homepage + listing pages)
    'category-fixed-gas.jpg': 'uploads/688--gorselleranasayfa1-min.jpg',
    'category-portable-gas.jpg': 'uploads/853--gas.jpg',
    'category-flame-detector.png': 'uploads/463--takex-alev-dedektoru.png',
    'category-control-panel.png': 'uploads/847--4-kanal-panel.png',
    'category-parking.jpg': 'uploads/681--gorselleranasayfa5.jpg',
    'category-software.png': 'uploads/147--856-sil2-slider.png',
    'category-calibration.jpg': 'uploads/684--tup1.jpg',
    'category-other-equipment.png': 'uploads/5--resim1-3-.png',
    'category-safevader.jpg': 'uploads/741-239-259-445-prosense1[1][1].jpg',
    # Industries (sector gallery)
    'industry-oil-gas.webp': 'uploads/404--874-7-min.webp',
    'industry-gas-distribution.webp': 'uploads/167--974-3-min.webp',
    'industry-parking.jpg': 'uploads/571--2-min.jpg',
    'industry-marine.jpg': 'uploads/708--5-min.jpg',
    'industry-hvac.jpg': 'uploads/857--12-min.jpg',
    'industry-water.jpeg': 'uploads/537--water-treatment.jpeg',
    'industry-petrochemical.jpg': 'uploads/27--10-min.jpg',
    'industry-mining.jpg': 'uploads/911--6-min.jpg',
    'industry-steel.jpg': 'uploads/616--8-min.jpg',
    'industry-pharma.jpg': 'uploads/333--9-min.jpg',
    'industry-food.jpeg': 'uploads/436--food-bevarage.jpeg',
    'industry-battery.webp': 'uploads/368--sy-547-1-min.webp',
    # About / academy block
    'academy-factory.webp': 'uploads/643--983-prosense2-min.webp',
    'academy-production.webp': 'uploads/165--yeni-969-uretim.webp',
    # Cert badges
    'cert-sil2.png': 'uploads/577--asdasdasdad.png',
    'cert-ce.png': 'uploads/204--w3.png',
}

CTX = ssl.create_default_context()
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'


def download(name: str, remote: str) -> bool:
    url = BASE + remote.lstrip('/')
    dest = OUT / name
    if dest.exists() and dest.stat().st_size > 400:
        print(f'  skip {name}')
        return True
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA, 'Referer': BASE})
        with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
            data = r.read()
        if len(data) < 200:
            print(f'  tiny {name}')
            return False
        OUT.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
        print(f'  OK   {name} ({len(data)//1024} KB)')
        return True
    except Exception as e:
        print(f'  FAIL {name}: {e}')
        return False


def main() -> None:
    ok = 0
    for name, remote in ASSETS.items():
        if download(name, remote):
            ok += 1
    print(f'\nDownloaded {ok}/{len(ASSETS)} -> {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
