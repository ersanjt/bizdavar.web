#!/usr/bin/env python3
"""Download UWT marketing assets from uwtgroup.com with stable local filenames."""
from __future__ import annotations

import re
import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images" / "uwt"
PARTNERS = ROOT / "assets" / "images" / "partners"
BASE = "https://www.uwtgroup.com"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
CTX = ssl.create_default_context()

CACHE = "553761e1c239bcd5973d5ba4fb1f412b"
CAT = f"{BASE}/media/catalog/product/cache/{CACHE}"

ASSETS = {
    "partners/uwt.png": f"{BASE}/media/logo/default/logo.png",
    "og-uwt-logo.jpg": f"{BASE}/media/og_image/default/UWT-Logo-1200x630px_web.jpg",
    "hero-solids.jpg": f"{BASE}/media/homepage/solids-header.png",
    "hero-level.jpg": f"{BASE}/media/homepage/level-up-to-the-max.png",
    "point-level.jpg": f"{BASE}/media/homepage/point-level-measurement.jpg",
    "continuous-level.jpg": f"{BASE}/media/homepage/continuous-level-measurement.jpg",
    "visualisation.jpg": f"{BASE}/media/homepage/visualisation.jpg",
    "industry-solids.jpg": f"{BASE}/media/homepage/solids.jpg",
    "industry-liquids.jpg": f"{BASE}/media/homepage/liquids.jpg",
    "industry-safety.jpg": f"{BASE}/media/homepage/safety.jpg",
    "industry-technology.jpg": f"{BASE}/media/homepage/technology.jpg",
    "company-betzigau.jpg": f"{BASE}/media/company/Titelbild-72dpi.jpg",
    "category-rotonivo.jpg": f"{BASE}/media/productimages/categories/rotonivo.jpg",
    "category-nivoradar.jpg": f"{BASE}/media/productimages/NR/NR3300-web.jpg",
    "product-rn3001.jpg": f"{CAT}/r/n/rn3001-rotonivo-rotary-paddle-switch.jpg",
    "product-rn6001.jpg": f"{CAT}/r/n/rn6001-rotonivo-rotary-paddle-switch_2.jpg",
    "product-vn1020.jpg": f"{CAT}/v/n/vn1020-vibraniov-vibration-fork-switch-short-version.jpg",
    "product-vn7120.jpg": f"{CAT}/v/n/vn-7120-compact_2_1.jpg",
    "product-nr4100.jpg": f"{CAT}/n/r/nr4100-radar-sensor-title-image.jpg",
    "product-nr3300.jpg": f"{CAT}/n/r/nr3300-lens-antenna-front.jpg",
    "product-nr7200.jpg": f"{CAT}/n/r/nr7200-radar-sensor-cc-right.jpg",
    "product-nr8200.jpg": f"{CAT}/n/r/nr8200-threaded-antenna_1.jpg",
    "product-ng8100.jpg": f"{CAT}/n/g/ng-8100-nivoguide-guided-wave-radar-sensor-tdr-rod-version.jpg",
    "product-ng8200.jpg": f"{CAT}/n/g/ng-8200-nivoguide-guided-wave-radar-sensor-tdr-rod-version.jpg",
    "product-cn4020.jpg": f"{CAT}/c/n/cn4020-capanivo-capacitive-sensor-short-version-front_1.jpg",
    "product-cn7120.jpg": f"{CAT}/c/n/cn7120-capanivo-capacitive-sensor-35-65mm.jpg",
    "product-nivoled.jpg": f"{CAT}/n/i/nivoled-9000-green-signallight_1.jpg",
    "product-nivotec.jpg": f"{CAT}/n/t/nt90000-nivotec-local-level-visualisation-digit-display.jpg",
}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, context=CTX, timeout=40) as resp:
        return resp.read()


def abs_url(src: str) -> str:
    if src.startswith("//"):
        return "https:" + src
    if src.startswith("/"):
        return BASE + src
    if src.startswith("http"):
        return src
    return BASE + "/" + src.lstrip("./")


def download(name: str, url: str, dest_dir: Path = OUT) -> bool:
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / name
    if dest.exists() and dest.stat().st_size > 400:
        print(f"  skip {name}")
        return True
    try:
        data = fetch(url)
        dest.write_bytes(data)
        print(f"  ok   {name}  ({len(data)} bytes)  {url}")
        return True
    except Exception as exc:
        print(f"  FAIL {name}  {url}  {exc}")
        return False


def extract_imgs(html: str) -> list[str]:
    found = []
    for pat in (
        r'(?:src|data-src|data-srcset|content)=["\']([^"\']+\.(?:png|jpe?g|webp|svg|gif)[^"\']*)',
        r'url\((?:["\']?)([^)"\']+\.(?:png|jpe?g|webp|svg|gif)[^)"\']*)',
    ):
        found.extend(re.findall(pat, html, re.I))
    out = []
    for raw in found:
        part = raw.split(" ")[0].split(",")[0]
        out.append(abs_url(part))
    return list(dict.fromkeys(out))


def main() -> None:
    ok = 0
    for name, url in ASSETS.items():
        if name.startswith("partners/"):
            dest_dir = PARTNERS
            file_name = Path(name).name
        else:
            dest_dir = OUT
            file_name = name
        if download(file_name, url, dest_dir):
            ok += 1
    print(f"downloaded {ok}/{len(ASSETS)}")


if __name__ == "__main__":
    main()
