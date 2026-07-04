#!/usr/bin/env python3
"""Download Gamak assets from gamak.com with stable local filenames."""
from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'images' / 'gamak'
BASE = 'https://www.gamak.com'

ASSETS = {
    # Hero / brand
    'hero-low-voltage.webp': '/uploads/images/slider/8b0e3340-d056-40c3-961c-10912bbbb17a%20(1).webp',
    'hero-anniversary.webp': '/uploads/images/65_%20Y%C4%B1l%20Slider%20EN.webp',
    'hero-product-line.webp': '/uploads/images/en-Gamak%20Wallpaper%20828x1100%20EN.webp',
    # Product categories (official category images)
    'category-three-phase.webp': '/uploads/images/categories/d06d827d-680b-46e0-a754-51e3a252f914.webp',
    'category-single-phase.webp': '/uploads/images/categories/32ff9089-2a56-4805-8c48-d232af11cbc1.webp',
    'category-smoke-extraction.webp': '/uploads/images/categories/33bd2e14-f11c-4d06-8f3b-205c5a36e7c8.webp',
    'category-crusher.webp': '/uploads/images/categories/69d1a3bd-59b3-4a93-ac42-58449075f652.webp',
    'category-ex-proof.webp': '/uploads/images/categories/a3f01758-f0df-4999-af81-4f4a8ea02964.webp',
    'category-milking.webp': '/uploads/images/categories/e9f84fe3-c743-4150-9b5e-956f64060f01.webp',
    'category-medium-voltage.webp': '/uploads/images/orta-gerilim-motorlar.webp',
    'category-new-series.webp': '/uploads/images/GAMAK-New-Series-Electric-Motors.webp',
    'category-double-speed.webp': '/uploads/images/Double-Speed-Electric-Motors.webp',
    'category-inverter-duty.webp': '/uploads/images/Speed-Control-in-Electric-Motors.webp',
    'category-compressor.webp': '/uploads/images/Blog/GAMAK-Compressor-Motors-news.webp',
    'category-ie4.webp': '/uploads/images/Blog/gamak_IE4_blog_haber_kapak-01.webp',
    # Factory / academy
    'factory-main.webp': '/uploads/images/gamak-fabrika.webp',
    'factory-assembly.webp': '/uploads/images/uretim-montaj.webp',
    'factory-lab.webp': '/uploads/images/laboratuvar.webp',
    'factory-winding.webp': '/uploads/images/sargi.webp',
    'factory-medium-voltage-plant.webp': '/uploads/images/orta-gerilim-motorlari-uretim-tesisi.webp',
    # Application / industry teasers
    'industry-water.webp': '/uploads/images/categories/d06d827d-680b-46e0-a754-51e3a252f914.webp',
    'industry-food.webp': '/uploads/images/GAMAK-New-Series-Electric-Motors.webp',
    'industry-mining.webp': '/uploads/images/categories/69d1a3bd-59b3-4a93-ac42-58449075f652.webp',
    'industry-hvac.webp': '/uploads/images/categories/33bd2e14-f11c-4d06-8f3b-205c5a36e7c8.webp',
    'industry-oil-gas.webp': '/uploads/images/categories/a3f01758-f0df-4999-af81-4f4a8ea02964.webp',
    'industry-energy.webp': '/uploads/images/orta-gerilim-motorlar.webp',
    'industry-agriculture.webp': '/uploads/images/categories/e9f84fe3-c743-4150-9b5e-956f64060f01.webp',
    'industry-manufacturing.webp': '/uploads/images/categories/menu-motor-secim-araci.webp',
}

CTX = ssl.create_default_context()
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'


def download(name: str, remote: str) -> bool:
    url = remote if remote.startswith('http') else BASE + remote
    dest = OUT / name
    if dest.exists() and dest.stat().st_size > 400:
        print(f'  skip {name}')
        return True
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA, 'Referer': BASE})
        with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
            data = r.read()
        if len(data) < 200:
            print(f'  tiny {name}')
            return False
        OUT.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
        print(f'  OK   {name} ({len(data) // 1024} KB)')
        return True
    except Exception as e:
        print(f'  FAIL {name}: {e}')
        return False


def main() -> None:
    ok = 0
    for name, remote in ASSETS.items():
        if download(name, remote):
            ok += 1
    # keep legacy hero path in sync
    legacy = OUT / 'hero' / 'gamak-motor.webp'
    src = OUT / 'category-three-phase.webp'
    if src.exists():
        legacy.parent.mkdir(parents=True, exist_ok=True)
        legacy.write_bytes(src.read_bytes())
        print('  sync hero/gamak-motor.webp')
    print(f'\nDownloaded {ok}/{len(ASSETS)} -> {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
