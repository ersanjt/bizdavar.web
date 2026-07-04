#!/usr/bin/env python3
import re, ssl, urllib.request, json
from pathlib import Path

BASE = 'https://www.gamak.com'
CTX = ssl.create_default_context()
UA = {'User-Agent': 'Mozilla/5.0'}
ROOT = Path(__file__).resolve().parents[1]

pages = [
    '/en',
    '/en/products',
    '/en/low-voltage-motors',
    '/en/three-phase-asynchronous-motors',
    '/en/single-phase-asynchronous-motors',
    '/en/medium-voltage-electric-motors',
    '/en/smoke-extraction-motors',
    '/en/crusher-motors',
    '/en/ex-proof-motors',
    '/en/milking-machine-motors',
    '/en/production-facility',
    '/en/history',
]

urls = set()
for p in pages:
    try:
        req = urllib.request.Request(BASE + p, headers=UA)
        with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
            html = r.read().decode('utf-8', errors='replace')
        for m in re.finditer(r'https?://www\.gamak\.com/uploads/images/[^"\')\s>]+', html):
            urls.add(m.group(0).split('?')[0])
        for m in re.finditer(r'(?:src|data-nav-image-url|data-src)=["\']([^"\']*uploads/images[^"\']+)["\']', html):
            u = m.group(1)
            if u.startswith('/'):
                u = BASE + u
            elif not u.startswith('http'):
                u = BASE + '/' + u.lstrip('/')
            urls.add(u.split('?')[0])
        print('OK', p)
    except Exception as e:
        print('FAIL', p, e)

out = sorted(urls)
(ROOT / 'assets/images/gamak/all-media-urls.json').write_text(json.dumps(out, indent=2), encoding='utf-8')
print(f'\n{len(out)} URLs')
for u in out:
    if 'blog' not in u.lower() and 'news/' not in u.lower() and 'social' not in u.lower():
        print(u)
