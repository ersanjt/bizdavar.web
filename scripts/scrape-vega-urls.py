#!/usr/bin/env python3
"""Deep scrape vega.com HTML for /-/media/ URLs."""
import json
import re
import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'images' / 'vega'
BASE = 'https://www.vega.com'
CTX = ssl.create_default_context()
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

PAGES = [
    '/en-ae',
    '/en-ae/products/product-catalog/level/radar/vegapuls-6x',
    '/en-ae/products/product-catalog/level/radar/vegapuls',
    '/en-ae/products/product-catalog/pressure/process-pressure/vegabar',
    '/en-ae/products/product-catalog/switching/capacitive/vegapoint',
    '/en-ae/industries',
    '/en-ae/industries/chemical-industry',
    '/en-ae/industries/food-industry',
    '/en-ae/industries/pharmaceutical-industry',
    '/en-ae/industries/water-and-wastewater',
    '/en-ae/industries/energy',
    '/en-ae/industries/refining-and-petrochemicals',
    '/en-ae/industries/cement',
    '/en-ae/industries/oil-and-gas-offshore',
    '/en-ae/industries/mining-and-metal-production',
    '/en-ae/industries/paper-industry',
    '/en-ae/industries/aquaculture',
    '/en-ae/industries/building-materials',
    '/en-ae/industries/carbon-capture',
    '/en-ae/industries/ship-and-yacht-building',
    '/en-ae/industries/environment-and-recycling',
    '/en-ae/myvega',
    '/en-ae/company/about-vega',
]

all_urls: set[str] = set()

for page in PAGES:
    url = BASE + page
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
            html = r.read().decode('utf-8', errors='replace')
        for m in re.finditer(r'https?://[^"\')\s]+/-/media/[^"\')\s]+', html):
            all_urls.add(m.group(0).split('?')[0])
        for m in re.finditer(r'/-/media/[^"\')\s]+', html):
            all_urls.add((BASE + m.group(0)).split('?')[0])
        print(f'OK {page} -> {len(all_urls)} total')
    except Exception as e:
        print(f'FAIL {page}: {e}')

items = sorted(all_urls)
OUT.mkdir(parents=True, exist_ok=True)
(OUT / 'all-media-urls.json').write_text(json.dumps(items, indent=2), encoding='utf-8')
print(f'\n{len(items)} unique media URLs saved')

# print sample by keyword
keywords = ['slider', 'branchen', 'industr', 'vegapuls', 'vegabar', 'vegapoint', 'myvega', 'startseite', 'chemical', 'food', 'water', 'energy', 'cement', 'mining', 'paper', 'ship', 'hydrogen', 'radar']
for kw in keywords:
    hits = [u for u in items if kw.lower() in u.lower()]
    if hits:
        print(f'\n[{kw}] ({len(hits)})')
        for h in hits[:5]:
            print(' ', h)
