"""Build Prosense logo assets: transparent PNG + SVG wrapper."""
import base64
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PARTNERS = ROOT / "assets" / "images" / "partners"
SOURCE_URL = "https://www.prosense.com.tr/uploads/logo.png"


def fetch_source() -> Path:
    cached = PARTNERS / "prosense-source.png"
    if not cached.exists():
        urllib.request.urlretrieve(SOURCE_URL, cached)
    return cached

def main():
    from PIL import Image

    src = fetch_source()
    img = Image.open(src).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r < 30 and g < 30 and b < 30:
                px[x, y] = (r, g, b, 0)
            else:
                px[x, y] = (r, g, b, 255)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    png_path = PARTNERS / "prosense.png"
    img.save(png_path, "PNG", optimize=True)
    iw, ih = img.size

    b64 = base64.b64encode(png_path.read_bytes()).decode("ascii")
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {iw} {ih}" role="img" aria-label="Prosense">\n'
        f'  <title>Prosense</title>\n'
        f'  <image width="{iw}" height="{ih}" href="data:image/png;base64,{b64}"/>\n'
        f"</svg>\n"
    )
    (PARTNERS / "prosense.svg").write_text(svg, encoding="utf-8")
    print(f"prosense.png {iw}x{ih}")
    print(f"prosense.svg {len(svg)} bytes")

if __name__ == "__main__":
    main()
