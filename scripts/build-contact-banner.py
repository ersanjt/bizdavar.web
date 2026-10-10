"""Rebuild the contact banner so the left panel is a real world map."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "assets/images/content/presence-map.svg").read_text(encoding="utf-8")
start = src.find('<path id="kalimantan"')
end = src.find('<g class="presence-overlay"')
paths = src[start:end].strip()
keep = {"iran", "turkey", "armenia", "emirates"}
parts = paths.split("<path ")
out_parts = [parts[0]]
for part in parts[1:]:
    pid = ""
    if part.startswith('id="'):
        pid = part.split('"', 2)[1]
    if pid not in keep:
        part = part.replace('fill="#FFDE00"', 'fill="#c5c9e6"')
        part = part.replace('stroke="#8a7600"', 'stroke="#3a3d72"')
        part = part.replace('stroke-width="0.55"', 'stroke-width="0.4"')
    part = part.replace('fill="#3a3d72"', 'fill="#c5c9e6"')
    part = part.replace('stroke="#12122e"', 'stroke="#3a3d72"')
    out_parts.append(part)
paths = "<path ".join(out_parts)

# Source map is 960×600. Sit the whole world on a panel left of the text.
scale = 0.345
panel = {"x": 16, "y": 28, "w": 340, "h": 331}
tx = panel["x"] + (panel["w"] - 960 * scale) / 2
ty = panel["y"] + (panel["h"] - 600 * scale) / 2
offices = {
    "istanbul": (525.2, 210.4),
    "yerevan": (569.7, 213.2),
    "tabriz": (577.5, 224.9),
    "dubai": (600.8, 263.8),
}
pins = {name: (round(tx + x * scale, 1), round(ty + y * scale, 1)) for name, (x, y) in offices.items()}
print(pins)

banner = f"""<svg xmlns="http://www.w3.org/2000/svg" width="768" height="387" viewBox="0 0 768 387" role="img" aria-label="Bizdavar Group world map — Iran, Turkey, Armenia, Dubai">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16163f"/>
      <stop offset="100%" stop-color="#2a2a6a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFDE00"/>
      <stop offset="100%" stop-color="#f5c400"/>
    </linearGradient>
    <radialGradient id="cluster" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFDE00" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#FFDE00" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="768" height="387" fill="url(#bg)" rx="16"/>
  <circle cx="640" cy="70" r="90" fill="#FFDE00" opacity="0.06"/>
  <circle cx="700" cy="320" r="64" fill="#25D366" opacity="0.1"/>
  <rect x="{panel['x']}" y="{panel['y']}" width="{panel['w']}" height="{panel['h']}" rx="14" fill="#12143a"/>
  <g transform="translate({tx:.1f}, {ty:.1f}) scale({scale})">
{paths}
  </g>
  <circle cx="{(pins['istanbul'][0] + pins['dubai'][0]) / 2:.1f}" cy="{(pins['yerevan'][1] + pins['dubai'][1]) / 2:.1f}" r="22" fill="url(#cluster)"/>
  <circle cx="{pins['istanbul'][0]}" cy="{pins['istanbul'][1]}" r="3.6" fill="#E62833" stroke="#fff" stroke-width="1.1"/>
  <circle cx="{pins['yerevan'][0]}" cy="{pins['yerevan'][1]}" r="3.6" fill="#E62833" stroke="#fff" stroke-width="1.1"/>
  <circle cx="{pins['tabriz'][0]}" cy="{pins['tabriz'][1]}" r="4.2" fill="#FFDE00" stroke="#16163f" stroke-width="1.1"/>
  <circle cx="{pins['dubai'][0]}" cy="{pins['dubai'][1]}" r="3.6" fill="#E62833" stroke="#fff" stroke-width="1.1"/>
  <text x="368" y="118" fill="url(#accent)" font-family="Tahoma,Segoe UI,sans-serif" font-size="30" font-weight="700">Bizdavar Group</text>
  <text x="368" y="162" fill="#fff" font-family="Tahoma,Segoe UI,sans-serif" font-size="19" opacity="0.92">Iran · Turkey · International</text>
  <text x="368" y="198" fill="#fff" font-family="Tahoma,Segoe UI,sans-serif" font-size="15" opacity="0.72">Digital marketing · Web · Industrial supply</text>
  <rect x="368" y="232" width="330" height="46" rx="23" fill="rgba(255,255,255,0.08)" stroke="rgba(255,222,0,0.35)" stroke-width="1"/>
  <text x="533" y="261" text-anchor="middle" fill="#FFDE00" font-family="Tahoma,Segoe UI,sans-serif" font-size="17" font-weight="600">info@bizdavar.com</text>
  <rect x="368" y="296" width="148" height="36" rx="18" fill="#25D366"/>
  <text x="442" y="319" text-anchor="middle" fill="#fff" font-family="Tahoma,Segoe UI,sans-serif" font-size="13" font-weight="600">WhatsApp</text>
</svg>
"""
out = ROOT / "assets/images/content/contact-banner.svg"
out.write_text(banner, encoding="utf-8")
print("wrote", out.stat().st_size)
