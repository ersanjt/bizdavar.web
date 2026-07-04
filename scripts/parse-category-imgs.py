import re
from pathlib import Path
from urllib.parse import urljoin

BASE = 'https://www.prosense.com.tr/'
for f in sorted(Path('.').glob('tmp-*.html')):
    html = f.read_text(encoding='utf-8', errors='ignore')
    imgs = []
    for m in re.finditer(r'data-src=["\'](uploads/[^"\']+)["\']', html):
        imgs.append(m.group(1))
    for m in re.finditer(r'src=["\'](uploads/[^"\']+\.(?:jpg|jpeg|png|webp))["\']', html, re.I):
        imgs.append(m.group(1))
    uniq = []
    for u in imgs:
        if u not in uniq and 'logo' not in u.lower():
            uniq.append(u)
    print(f.name, '->', uniq[:5])
