import re
import json
from pathlib import Path
from urllib.parse import urljoin

BASE = 'https://www.prosense.com.tr'
html = Path('tmp-prosense-home.html').read_text(encoding='utf-8', errors='ignore')

imgs = set()
for m in re.finditer(r'(?:src|data-src|data-lazy|data-original)=["\']([^"\']+)["\']', html, re.I):
    u = m.group(1)
    if re.search(r'\.(jpg|jpeg|png|webp|svg)(\?|$)', u, re.I):
        imgs.add(u)
for m in re.finditer(r'url\(["\']?([^"\')\s]+)["\']?\)', html, re.I):
    u = m.group(1)
    if re.search(r'\.(jpg|jpeg|png|webp)', u, re.I):
        imgs.add(u)

abs_imgs = []
for u in sorted(imgs):
    if u.startswith('//'):
        u = 'https:' + u
    elif u.startswith('/'):
        u = BASE + u
    elif not u.startswith('http'):
        u = urljoin(BASE + '/', u)
    abs_imgs.append(u)

print(json.dumps(abs_imgs, indent=2, ensure_ascii=False))
print('TOTAL', len(abs_imgs), file=__import__('sys').stderr)
