#!/usr/bin/env python3
"""Download VEGA marketing assets from vega.com with stable local filenames."""
from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'images' / 'vega'
BASE = 'https://www.vega.com'

# local_name -> full URL on vega.com (from scripts/scrape-vega-urls.py)
ASSETS = {
    # Hero
    'hero-radar-level.jpg': '/-/media/images/slides/homepage/slide-process-automation-level-1920x1000px.jpg',
    'hero-vegapuls-6x.png': '/-/media/images/products/sensors/f-ps6x-vegapuls-6x-allround-radar-level-sensor-v01.png',
    # Value props (homepage sliders + hydrogen)
    'value-point-level.jpg': '/-/media/images/slides/homepage/slide-process-automation-grenzstand-vibration_1920x1000px.jpg',
    'value-innovation.jpg': '/-/media/images/slides/homepage/slide-image-innovation_1920x1000px.jpg',
    'value-industry40.jpg': '/-/media/images/slides/homepage/slide-digital_1920x1000px.jpg',
    'value-hydrogen.jpg': '/-/media/images/anwendungen/3d-animationen/wasserstoff/uebersicht_wasserstoff_loop.jpg',
    'value-partnership.jpg': '/-/media/images/slides/homepage/slide-image-partnership_1920x1000px-v01.jpg',
    # Featured products
    'product-vegapuls-6x.png': '/-/media/images/landingpages/vegapuls-6x/keyvisual-web-produktdetailseite.png',
    'product-vegapuls.png': '/-/media/images/landingpages/all-landingpage-teaser-vegapuls-c-11.png',
    'product-vegabar.png': '/-/media/images/landingpages/all-landingpage-teaser-vegabar.png',
    'product-vegapoint.png': '/-/media/images/landingpages/all-landingpage-teaser-vegapoint.png',
    'product-vegapuls-photo.png': '/-/media/images/products/sensors/f-ps6x-vegapuls-6x-radar-level-sensor-for-the-chemical-industry.png',
    'product-vegabar-photo.png': '/-/media/images/products/sensors/devices2020/f-vegabar-1x-duxm.png',
    'product-vegapoint-photo.png': '/-/media/images/products/sensors/devices2020/o-vegapoint-11-ab.png',
    # Global industries (15)
    'industry-chemical.jpg': '/-/media/images/anwendungen/3d-animationen/chemie/uebersicht_chemical_plant.jpg',
    'industry-food.jpg': '/-/media/images/anwendungen/3d-animationen/lebensmittel/brauerei/uebersicht_brauerei_loop.jpg',
    'industry-pharma.png': '/-/media/images/landingpages/industry/lp-teaser-pharma.png',
    'industry-water.jpg': '/-/media/images/anwendungen/branchenbilder/water.jpg',
    'industry-aquaculture.jpg': '/-/media/images/anwendungen/3d-animationen/aquakultur/uebersicht_aquakultur_loop.jpg',
    'industry-building.jpg': '/-/media/images/landingpages/industry/building-materials-industry-application-teaser-520x293px.jpg',
    'industry-carbon-capture.png': '/-/media/images/anwendungen/branchenbilder/fabrik_carbon-capture-teaser.png',
    'industry-energy.jpg': '/-/media/images/anwendungen/3d-animationen/energie/bersicht_kohlekraftwerk_loop_1.jpg',
    'industry-mining.jpg': '/-/media/images/landingpages/industry/a2080-c0-00-header-mining-1410x400px.jpg',
    'industry-oil-gas.jpg': '/-/media/images/application-graphics/industry_offshore.jpg',
    'industry-paper.jpg': '/-/media/images/anwendungen/branchenbilder/industry_paper_rdax_200x100.jpg',
    'industry-refining.jpg': '/-/media/images/application-graphics/industry_petrochemical.jpg',
    'industry-ship.jpg': '/-/media/images/landingpages/industry/m2100-c0-00-header-ship-1410x400px.jpg',
    'industry-environment.jpg': '/-/media/images/anwendungen/branchenbilder/industry_environment_rdax_200x100.jpg',
    'industry-cement.jpg': '/-/media/images/application-graphics/industry_cement.jpg',
    # Iran-focused industries
    'iran-refining.jpg': '/-/media/images/application-graphics/industry_petrochemical.jpg',
    'iran-water.jpg': '/-/media/images/anwendungen/branchenbilder/water.jpg',
    'iran-food-pharma.jpg': '/-/media/images/anwendungen/anwendungsbilder/lp-teaser-food-more-en.jpg',
    'iran-cement-mining.jpg': '/-/media/images/application-graphics/industry_cement.jpg',
    'iran-oil-gas.jpg': '/-/media/images/landingpages/industry/oil-and-gas-offshore-application-teaser-520x293px.jpg',
    'iran-energy.jpg': '/-/media/images/anwendungen/anwendungsbilder/energy-production/c2050-006-industry-photo-1571.png',
    # Digital / company
    'digital-myvega.png': '/-/media/images/landingpages/teaser-myvega.png',
    'about-innovation.jpg': '/-/media/images/company/company-2022/teaser-landingpage-innovation.jpg',
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
            print(f'  tiny {name} ({len(data)} bytes)')
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
    fail = []
    for name, remote in ASSETS.items():
        if download(name, remote):
            ok += 1
        else:
            fail.append(name)
    print(f'\nDownloaded {ok}/{len(ASSETS)} -> {OUT.relative_to(ROOT)}')
    if fail:
        print('Failed:', ', '.join(fail))


if __name__ == '__main__':
    main()
