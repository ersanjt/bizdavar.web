#!/usr/bin/env python3
"""Generate Bizdavar favicons and on-dark logo from master assets."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BRAND_DIR = ROOT / 'assets' / 'images' / 'brand'

BRAND_BLACK = (0x1D, 0x1D, 0x1B)
BRAND_RED = (0xE3, 0x19, 0x1F)
WHITE = (255, 255, 255)


def is_red(r: int, g: int, b: int) -> bool:
    return r > 160 and g < 100 and b < 100


def is_dark_text(r: int, g: int, b: int) -> bool:
    return r < 120 and g < 120 and b < 120


def make_on_dark_logo(src: Path, dst: Path) -> None:
    im = Image.open(src).convert('RGBA')
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 32:
                continue
            if is_red(r, g, b):
                px[x, y] = (*BRAND_RED, a)
            elif is_dark_text(r, g, b):
                px[x, y] = (*WHITE, a)
    im.save(dst, 'PNG', optimize=True)


def _load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for name in ('arialbd.ttf', 'Arial Bold.ttf', 'segoeuib.ttf', 'calibrib.ttf'):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def make_favicon(size: int) -> Image.Image:
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    pad = max(1, size // 14)
    radius = max(3, size // 5)
    draw.rounded_rectangle(
        [pad, pad, size - pad - 1, size - pad - 1],
        radius=radius,
        fill=(*BRAND_BLACK, 255),
    )

    font_b = _load_font(max(8, int(size * 0.52)))
    font_v = _load_font(max(7, int(size * 0.34)))

    b = 'B'
    v = 'v'
    bb = draw.textbbox((0, 0), b, font=font_b)
    vb = draw.textbbox((0, 0), v, font=font_v)
    bw, bh = bb[2] - bb[0], bb[3] - bb[1]
    vw = vb[2] - vb[0]
    total_w = bw + vw - max(2, size // 18)
    x0 = (size - total_w) // 2 - bb[0]
    y0 = (size - bh) // 2 - bb[1]

    draw.text((x0, y0), b, fill=(*WHITE, 255), font=font_b)
    draw.text((x0 + bw - max(2, size // 18), y0 + max(1, size // 14)), v, fill=(*BRAND_RED, 255), font=font_v)
    return img


def trim_transparent(im: Image.Image) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    return im.crop(bbox)


def make_square_logo(src: Path, dst: Path, size: int = 512) -> None:
    im = Image.open(src).convert('RGBA')
    im = trim_transparent(im)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    im.thumbnail((int(size * 0.88), int(size * 0.88)), Image.Resampling.LANCZOS)
    ox = (size - im.width) // 2
    oy = (size - im.height) // 2
    canvas.paste(im, (ox, oy), im)
    canvas.save(dst, 'PNG', optimize=True)


def main() -> None:
    BRAND_DIR.mkdir(parents=True, exist_ok=True)
    master = BRAND_DIR / 'bizdavar-logo.png'
    if not master.exists():
        raise SystemExit(f'Missing master logo: {master}')

    make_on_dark_logo(master, BRAND_DIR / 'bizdavar-logo-on-dark.png')
    make_square_logo(master, BRAND_DIR / 'bizdavar-logo-square.png')

    sizes = {
        'favicon-16.png': 16,
        'favicon.png': 32,
        'favicon-48.png': 48,
        'favicon-192.png': 192,
        'apple-touch-icon.png': 180,
    }
    for name, px in sizes.items():
        make_favicon(px).save(BRAND_DIR / name, 'PNG', optimize=True)
        print(f'wrote {name} ({px}px)')


if __name__ == '__main__':
    main()
