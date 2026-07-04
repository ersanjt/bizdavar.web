#!/usr/bin/env python3
"""Scrape gamak.com for media URLs."""
import json
import re
import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'images' / 'gamak'
BASE = 'https://www.gamak.com'
CTX = ssl.create_default_context()
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

PAGES = [
    '/en',
    '/en/products',
    '/en/products/three-phase-motors',
    '/en/products/single-phase-motors',
    '/en/products/brake-motors',
    '/en/products/flange-motors',
    '/en/about-us',
    '/en/sectors',
    '/en/contact',
    '/tr',
    '/tr/urunler',
]

all_urls: set[str] = set()

for page in PAGES:
    url = BASE + page
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
            html = r.read().decode('utf-8', errors='replace')
        for m in re.finditer(r'https?://[^"\')\s>]+\.(?:jpg|jpeg|png|webp|gif)(?:\?[^"\')\s>]*)?', html, re.I):
            all_urls.add(m.group(0).split('?')[0])
        for m in re.finditer(r'(?:src|data-src|data-lazy-src|href)=["\']([^"\']+\.(?:jpg|jpeg|png|webp|gif)[^"\']*)["\']', html, re.I):
            u = m.group(1)
            if u.startswith('//'):
                u = 'https:' + u
            elif u.startswith('/'):
                u = BASE + u
            if 'gamak' in u.lower() or u.startswith(BASE):
                all_urls.add(u.split('?')[0])
        print(f'OK {page} -> {len(all_urls)} total')
    except Exception as e:
        print(f'FAIL {page}: {e}')

items = sorted(all_urls)
OUT.mkdir(parents=True, exist_ok=True)
(OUT / 'all-media-urls.json').write_text(json.dumps(items, indent=2), encoding='utf-8')
print(f'\n{len(items)} URLs saved')

for kw in ['motor', 'brake', 'flange', 'single', 'three', 'factory', 'sector', 'pump', 'fan', 'hero', 'banner', 'product', 'about']:
    hits = [u for u in items if kw.lower() in u.lower()]
    if hits:
        print(f'\n[{kw}] ({len(hits)})')
        for h in hits[:8]:
            print(' ', h)
