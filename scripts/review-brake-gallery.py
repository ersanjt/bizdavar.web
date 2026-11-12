# -*- coding: utf-8 -*-
"""Put the real part photo first in the brake catalog.

Brakeshop's cards show the studio shot of the part. The imported galleries
also contain brand advertisements and technical line drawings. Advertisements
are removed. When a gallery has both a photograph and a drawing, the
photograph stays in front.
"""
import json
import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "assets" / "data" / "brakes" / "catalog.json"
MEDIA = ROOT / "media" / "catalog" / "brakeshop"

# Reviewed by hand: these files are campaign tiles, not a picture of the part.
ADVERTS = {
    "assets/0c/0c387ce2ba5587e9b89760a06c0758a351db84590e45eb5b60ff4970ac951362.jpg",
    "assets/bc/bc78f0246964d493eca8eceaa5a4bbcc4295e7553fd8ce070b2055ffc3544aee.jpg",
    "assets/ba/ba25c844df010f3929fbc16986b1e615a3430618cfb2e95a91ae33576a437e42.jpg",
    "assets/95/95f5d67f7ae9619cf18732be635c82a9750e9b534af7680e23c2923bcb81e703.jpg",
    "assets/e5/e546b7bf7d06d2c123c0b2730a6a3036ffe6980334c81c5d0c8d78cf635a55bb.jpg",
}
# Shows the part inside a campaign layout. Keep it, but behind a studio photo.
LIFESTYLE = {
    "assets/ca/ca9fb43c0b76a52c4d9a2766521bde41c764329f14543d5c3c3818c08ee1365a.jpg",
}

DIAGRAMS = {}


def is_diagram(rel):
    if rel in DIAGRAMS:
        return DIAGRAMS[rel]
    path = MEDIA / rel
    flag = False
    if path.is_file() and path.stat().st_size <= 150000:
        try:
            with Image.open(path) as image:
                image = image.convert("RGB")
                image.thumbnail((80, 80))
                pixels = list(image.getdata())
            count = len(pixels) or 1
            unique = len(set(pixels))
            white = sum(1 for r, g, b in pixels if min(r, g, b) > 240) / count
            saturation = sum((max(r, g, b) - min(r, g, b)) for r, g, b in pixels) / count
            flag = unique < 260 and saturation < 4 and white > 0.55
        except OSError:
            flag = False
    DIAGRAMS[rel] = flag
    return flag


def order_shots(shots):
    kept = []
    for rel in shots:
        if rel and rel not in kept and rel not in ADVERTS:
            kept.append(rel)
    if len(kept) > 1:
        kept.sort(key=lambda rel: 2 if is_diagram(rel) else (1 if rel in LIFESTYLE else 0))
    return kept


def main():
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    changed = 0
    ads_removed = 0
    drawings_demoted = 0
    emptied = 0
    samples = []
    for item in catalog.get("products") or []:
        shots = []
        for rel in [item.get("img")] + list(item.get("gallery") or []):
            if rel and rel not in shots:
                shots.append(rel)
        if not shots:
            continue
        ordered = order_shots(shots)
        if any(rel in ADVERTS for rel in shots):
            ads_removed += 1
        if ordered and ordered[0] != shots[0] and shots[0] not in ADVERTS and is_diagram(shots[0]):
            drawings_demoted += 1
        new_img = ordered[0] if ordered else ""
        new_gallery = ordered if len(ordered) > 1 else []
        previous = item.get("img") or ""
        if new_img == previous and new_gallery == list(item.get("gallery") or []):
            continue
        item["img"] = new_img
        if new_gallery:
            item["gallery"] = new_gallery
        elif item.get("gallery"):
            item["gallery"] = []
        if not ordered and previous:
            emptied += 1
        if item.get("img") != previous:
            changed += 1
            if len(samples) < 12:
                samples.append((item.get("id"), previous[-18:], (item.get("img") or "")[-18:]))
    catalog["video"] = "/assets/video/road-america-motorsport.mp4"
    catalog["videos"] = [
        "/assets/video/road-america-motorsport.mp4",
        "/assets/video/porsche-997-gt3rs.mp4",
        "/assets/video/ferrari-f40.mp4",
    ]
    temporary = CATALOG.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    os.replace(temporary, CATALOG)
    print("primary_changed", changed)
    print("products_with_ads", ads_removed)
    print("drawings_demoted", drawings_demoted)
    print("emptied", emptied)
    for row in samples:
        print(" | ".join(row))


if __name__ == "__main__":
    main()
