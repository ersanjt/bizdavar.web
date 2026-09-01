#!/usr/bin/env python3
"""Download official Prosense fixed-series product photos and convert to webp."""
from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images" / "prosense"
BASE = "https://www.prosense.com.tr/"
CTX = ssl.create_default_context()
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# local stem (without ext) -> remote path
SERIES = {
    "series-pq": "uploads/907--pqd-series-6.jpg",
    "series-pq-marine": "uploads/615--pqd-marine.jpg",
    "series-p": "uploads/947--p-series-3.jpg",
    # PE / PE-Kayo use local HQ studio renders (series-pe.webp, series-pe-01.webp, series-pe-02.webp)
    "series-pc3": "uploads/315--pc3-series-3.jpg",
    "series-btn": "uploads/636--btn-series-3.jpg",
}


def fetch(remote: str) -> bytes:
    url = BASE + remote.lstrip("/")
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": BASE})
    with urllib.request.urlopen(req, context=CTX, timeout=40) as r:
        return r.read()


def to_card(im: Image.Image, max_w: int = 960) -> Image.Image:
    im = im.convert("RGB")
    w, h = im.size
    if w > max_w:
        nh = int(round(max_w * h / w))
        im = im.resize((max_w, nh), Image.Resampling.LANCZOS)
    return im


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for stem, remote in SERIES.items():
        jpg = OUT / f"{stem}.jpg"
        webp = OUT / f"{stem}.webp"
        try:
            data = fetch(remote)
            jpg.write_bytes(data)
            im = to_card(Image.open(jpg))
            im.save(jpg, "JPEG", quality=88, optimize=True)
            im.save(webp, "WEBP", quality=84, method=6)
            print(f"OK {stem} {im.size} jpg={jpg.stat().st_size//1024}k webp={webp.stat().st_size//1024}k")
        except Exception as e:
            print(f"FAIL {stem}: {e}")


if __name__ == "__main__":
    main()
