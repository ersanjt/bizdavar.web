# -*- coding: utf-8 -*-
"""Sharp Digi System hero — SM-6000 retail scale, native resolution."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets/images/digi-system/products/sm-6000-retail-scale.png"
OUT_WEBP = ROOT / "assets/images/digi-system/hero/digi-retail-hero.webp"
OUT_PNG = ROOT / "assets/images/digi-system/hero/digi-retail-hero.png"

W, H = 1200, 800


def trim_black(im: Image.Image, threshold: int = 18) -> Image.Image:
    rgba = im.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    min_x, min_y, max_x, max_y = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a > 10 and (r + g + b) > threshold * 3:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
    if max_x <= min_x:
        return rgba
    pad = 10
    return rgba.crop((
        max(0, min_x - pad),
        max(0, min_y - pad),
        min(w, max_x + pad + 1),
        min(h, max_y + pad + 1),
    ))


bg = Image.new("RGBA", (W, H), (15, 23, 41, 255))
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([-160, -120, W // 2 + 120, H + 120], fill=(200, 16, 46, 58))
gd.ellipse([W // 4, -140, W + 180, H + 140], fill=(28, 46, 88, 95))
glow = glow.filter(ImageFilter.GaussianBlur(100))
canvas = Image.alpha_composite(bg, glow)

floor = Image.new("RGBA", (W, H), (0, 0, 0, 0))
fd = ImageDraw.Draw(floor)
fd.ellipse([200, H - 200, W - 200, H - 55], fill=(255, 255, 255, 24))
floor = floor.filter(ImageFilter.GaussianBlur(30))
canvas = Image.alpha_composite(canvas, floor)

prod = trim_black(Image.open(SRC))
# Keep native sharpness — slight fit only if taller than canvas margin
pw, ph = prod.size
max_h = H - 100
max_w = W - 160
scale = min(max_w / pw, max_h / ph, 1.0)
if scale < 1:
    prod = prod.resize((int(pw * scale), int(ph * scale)), Image.Resampling.LANCZOS)
prod = ImageEnhance.Sharpness(prod).enhance(1.12)
prod = ImageEnhance.Contrast(prod).enhance(1.04)

nw, nh = prod.size
x = (W - nw) // 2
y = (H - nh) // 2 - 8

shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
shadow.paste((0, 0, 0, 90), (x + 18, y + 28, x + nw + 18, y + nh + 28))
shadow = shadow.filter(ImageFilter.GaussianBlur(36))
canvas = Image.alpha_composite(canvas, shadow)
canvas.paste(prod, (x, y), prod)

bar = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(bar).rectangle([0, H - 8, W, H], fill=(200, 16, 46, 255))
canvas = Image.alpha_composite(canvas, bar)

final = canvas.convert("RGB")
final.save(OUT_WEBP, "WEBP", quality=95, method=6)
final.save(OUT_PNG, "PNG", optimize=True)
print(f"OK {final.size} webp={OUT_WEBP.stat().st_size}")
