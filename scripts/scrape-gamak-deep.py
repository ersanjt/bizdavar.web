#!/usr/bin/env python3
import re, ssl, urllib.request, json
from pathlib import Path

BASE = 'https://www.gamak.com'
CTX = ssl.create_default_context()
UA = {'User-Agent': 'Mozilla/5.0'}

pages = [
    '/en', '/tr', '/en/products', '/tr/urunler',
    '/tr/urunler/dusuk-gerilim-motorlar',
    '/tr/urunler/orta-gerilim-motorlar',
    '/tr/hakkimizda', '/en/about-gamak', '/tr/sektorler',
    '/tr/urunler/frenli-motorlar', '/tr/urunler/flansli-motorlar',
    '/tr/urunler/tek-fazli-motorlar', '/tr/urunler/uc-fazli-motorlar',
]

urls = set()
for p in pages:
    try:
        req = urllib.request.Request(BASE + p, headers=UA)
        with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
            html = r.read().decode('utf-8', errors='replace')
        for m in re.finditer(r'/uploads/images/[^"\')\s>]+', html):
            urls.add(BASE + m.group(0).split('?')[0])
        print('OK', p, len(urls))
    except Exception as e:
        print('FAIL', p, e)

for u in sorted(urls):
    print(u)
