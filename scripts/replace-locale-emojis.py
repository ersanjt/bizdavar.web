#!/usr/bin/env python3
"""Replace emoji icon keys in locales-pages.js with bd-icon names."""
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / 'assets' / 'scripts' / 'i18n' / 'locales-pages.js'
text = PATH.read_text(encoding='utf-8')

ICON_MAP = {
    "'📱'": "'mobile'",
    "'⏰'": "'clock'",
    "'📋'": "'list'",
    "'🔗'": "'link'",
    "'👥'": "'users'",
    "'🚀'": "'rocket'",
    "'📥'": "'inbox'",
    "'📤'": "'send'",
    "'🤖'": "'robot'",
    "'📊'": "'chart-bar'",
    "'🔌'": "'plug'",
    "'🏥'": "'health'",
    "'🛍️'": "'bag'",
    "'🏠'": "'home'",
    "'🍽️'": "'utensils'",
    "'💱'": "'swap'",
    "'🎯'": "'target'",
    "'🪙'": "'coin'",
    "'⏳'": "'hourglass'",
}

for old, new in ICON_MAP.items():
    text = text.replace(f'icon: {old}', f'icon: {new}')

REGION_ITEMS_FA = """regionItems: [
            { code: 'TR', label: 'ترکیه' },
            { code: 'AE', label: 'دبی' },
            { code: 'EU', label: 'اروپا' },
            { code: 'IR', label: 'ایران' }
          ],
          regions: 'ترکیه · دبی · اروپا · ایران',"""

REGION_ITEMS_TR = """regionItems: [
            { code: 'TR', label: 'Türkiye' },
            { code: 'AE', label: 'Dubai' },
            { code: 'EU', label: 'Avrupa' },
            { code: 'IR', label: 'İran' }
          ],
          regions: 'Türkiye · Dubai · Avrupa · İran',"""

REGION_ITEMS_EN = """regionItems: [
            { code: 'TR', label: 'Turkey' },
            { code: 'AE', label: 'Dubai' },
            { code: 'EU', label: 'Europe' },
            { code: 'IR', label: 'Iran' }
          ],
          regions: 'Turkey · Dubai · Europe · Iran',"""

text = text.replace(
    "regions: '🇹🇷 ترکیه · 🇦🇪 دبی · 🇪🇺 اروپا · 🇮🇷 ایران',",
    REGION_ITEMS_FA,
)
text = text.replace(
    "regions: '🇹🇷 Türkiye · 🇦🇪 Dubai · 🇪🇺 Avrupa · 🇮🇷 İran',",
    REGION_ITEMS_TR,
)
text = text.replace(
    "regions: '🇹🇷 Turkey · 🇦🇪 Dubai · 🇪🇺 Europe · 🇮🇷 Iran',",
    REGION_ITEMS_EN,
)

PATH.write_text(text, encoding='utf-8')
print('Updated', PATH.name)
