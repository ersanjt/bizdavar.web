#!/usr/bin/env python3
import ssl, urllib.request, re
UA = {'User-Agent': 'Mozilla/5.0'}
CTX = ssl.create_default_context()
pages = [
    '/en/three-phase-asynchronous-motors',
    '/en/single-phase-asynchronous-motors',
    '/en/low-voltage-motors',
    '/en/crusher-motors',
    '/en/smoke-extraction-motors',
    '/en/ex-proof-motors',
    '/en/medium-voltage-electric-motors',
]
for p in pages:
    h = urllib.request.urlopen(
        urllib.request.Request('https://www.gamak.com' + p, headers=UA),
        context=CTX, timeout=30
    ).read().decode('utf-8', 'replace')
    imgs = re.findall(r'uploads/images/[^"\']+\.(?:webp|jpg|png|jpeg)', h)
    alts = re.findall(r'<img[^>]+alt="([^"]+)"[^>]+src="([^"]+uploads/images[^"]+)"', h)
    alts2 = re.findall(r'src="([^"]+uploads/images[^"]+)"[^>]+alt="([^"]+)"', h)
    print('===', p)
    for i in sorted(set(imgs)):
        if 'logo' not in i and 'menu-' not in i:
            print(' ', i)
    for a in alts + [(b, a) for a, b in alts2]:
        if 'uploads' in a[1] if isinstance(a, tuple) else True:
            pass
    for m in re.finditer(r'<img[^>]+src="([^"]+uploads/images[^"]+)"[^>]+alt="([^"]+)"', h):
        print('  ALT:', m.group(2), '->', m.group(1).split('/')[-1])
