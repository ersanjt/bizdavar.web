#!/usr/bin/env python3
"""Download remote Liqui Moly catalog photos and store compact WebP copies."""
from __future__ import annotations

import hashlib
import io
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
JS = ROOT / "assets" / "scripts" / "config" / "liqui-moly-products.js"
OUT = ROOT / "assets" / "images" / "liqui-moly" / "catalog"
IMG = ROOT / "assets" / "images" / "liqui-moly"
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/*,*/*;q=0.8",
    "Referer": "https://www.liquimolyturkey.com/",
}


def to_webp(data: bytes, max_w: int = 800) -> bytes:
    im = Image.open(io.BytesIO(data))
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
    if im.mode == "RGBA":
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    elif im.mode != "RGB":
        im = im.convert("RGB")
    w, h = im.size
    if w > max_w:
        im = im.resize((max_w, max(1, int(h * max_w / w))), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=74, method=4)
    return buf.getvalue()


def slug_for(url: str) -> str:
    name = url.split("?")[0].rstrip("/").split("/")[-1]
    name = re.sub(r"\.(jpe?g|png|webp|gif)$", "", name, flags=re.I)
    name = re.sub(r"[^a-z0-9\-]+", "-", name.lower())
    name = re.sub(r"-+", "-", name).strip("-")[:90]
    return name or hashlib.md5(url.encode()).hexdigest()[:12]


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as res:
        return res.read()


def main() -> None:
    text = JS.read_text(encoding="utf-8")
    urls = sorted(set(re.findall(r"https://www\.liquimolyturkey\.com/[^\"'\s]+", text)))
    OUT.mkdir(parents=True, exist_ok=True)
    used: dict[str, str] = {}
    jobs = []
    for url in urls:
        slug = slug_for(url)
        dest_name = slug + ".webp"
        if dest_name in used.values():
            dest_name = slug[:70] + "-" + hashlib.md5(url.encode()).hexdigest()[:6] + ".webp"
        used[url] = dest_name
        jobs.append((url, OUT / dest_name))

    ok = 0
    fail = []

    def one(item):
        url, dest = item
        if dest.exists() and dest.stat().st_size > 800:
            return url, dest, None
        try:
            raw = fetch(url)
            dest.write_bytes(to_webp(raw))
            return url, dest, None
        except Exception as exc:  # noqa: BLE001
            return url, dest, exc

    with ThreadPoolExecutor(max_workers=10) as pool:
        futures = [pool.submit(one, job) for job in jobs]
        for fut in as_completed(futures):
            url, dest, err = fut.result()
            if err:
                fail.append((url, str(err)))
            else:
                ok += 1
                rel = dest.relative_to(ROOT).as_posix()
                text = text.replace(url, rel)

    # Compact oversized local rasters that the catalog still references.
    for path in IMG.glob("product-*.*"):
        if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        if path.stat().st_size < 70_000:
            continue
        webp = path.with_suffix(".webp")
        try:
            data = to_webp(path.read_bytes())
        except Exception as exc:  # noqa: BLE001
            print("local skip", path.name, exc)
            continue
        if len(data) >= path.stat().st_size:
            continue
        webp.write_bytes(data)
        rel_old = path.relative_to(ROOT).as_posix()
        rel_new = webp.relative_to(ROOT).as_posix()
        if rel_old in text:
            text = text.replace(rel_old, rel_new)
            path.unlink()
            print("compressed", path.name, "->", webp.name, len(data))

    # Social preview: product centered on a 1200x630 canvas.
    src = IMG / "octane-plus.jpg"
    if src.exists():
        bottle = Image.open(src).convert("RGB")
        canvas = Image.new("RGB", (1200, 630), (12, 16, 22))
        bottle.thumbnail((520, 580), Image.Resampling.LANCZOS)
        canvas.paste(bottle, ((1200 - bottle.width) // 2, (630 - bottle.height) // 2))
        og = IMG / "og-liqui-moly.jpg"
        canvas.save(og, "JPEG", quality=82, optimize=True)
        print("og", og.stat().st_size)

    JS.write_text(text, encoding="utf-8")
    print(f"remote ok={ok} fail={len(fail)} unique={len(urls)}")
    for url, err in fail[:15]:
        print("FAIL", err[:120], url[:100])


if __name__ == "__main__":
    main()
