#!/usr/bin/env python3
"""Download UWT ELS-R1 product image from sensors.com.tr."""
from __future__ import annotations

import re
import ssl
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images" / "uwt" / "product-els-r1.jpg"
PAGE = "https://www.sensors.com.tr/urun/uwt-els-r1-seviye-salteri"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
CTX = ssl.create_default_context()


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": PAGE})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        return r.read()


def main() -> None:
    html = fetch(PAGE).decode("utf-8", "replace")
    og = re.search(r'property=["\']og:image["\'][^>]*content=["\']([^"\']+)', html, re.I)
    if not og:
        og = re.search(r'content=["\']([^"\']+)["\'][^>]*property=["\']og:image', html, re.I)
    candidates = []
    if og:
        candidates.append(og.group(1))
    candidates.extend(re.findall(r'src=["\']([^"\']+\.(?:jpe?g|png|webp)(?:\?[^"\']*)?)', html, re.I))
    picked = None
    for src in candidates:
        low = src.lower()
        if any(x in low for x in ("logo", "icon", "sprite", "placeholder", "banner")):
            continue
        if "els" in low or "uwt" in low or "/urun" in low or "/uploads" in low or "/data/" in low or "myassets" in low:
            picked = src
            break
    if not picked and candidates:
        picked = candidates[0]
    if not picked:
        raise SystemExit("no image found")
    url = urljoin(PAGE, picked)
    data = fetch(url)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_bytes(data)
    print(url, len(data), OUT)


if __name__ == "__main__":
    main()
