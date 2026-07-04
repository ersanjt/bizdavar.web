from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BIZ_OK = '\u0628\u06cc\u0632\u062f\u0648\u0627\u0631'
BIZ_BAD = '\u0628\u06cc\u0632\u062f\u0648' + 'ar'
DK_OK = '\u062f\u06cc\u062c\u06cc\u200c\u06a9\u0627\u0644\u0627'
DK_BAD = '\u062f\u06cc\u062c\u06cc\u200c\u06a9' + 'ala'
SAN_OK = '\u0636\u062f\u0639\u0641\u0648\u0646\u06cc'
SAN_BAD = '\u0636\u062f\u0639\u0641' + 'oni'

for p in ROOT.rglob('*'):
    if p.suffix not in {'.js', '.html'}:
        continue
    if 'node_modules' in p.parts:
        continue
    t = p.read_text(encoding='utf-8')
    n = t
    for a, b in ((BIZ_BAD, BIZ_OK), (DK_BAD, DK_OK), (SAN_BAD, SAN_OK)):
        n = n.replace(a, b)
    if n != t:
        p.write_text(n, encoding='utf-8')
        print('fixed', p.relative_to(ROOT))
