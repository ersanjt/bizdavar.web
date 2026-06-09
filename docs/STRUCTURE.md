# ساختار پروژه بیزدوار

```
bizdavar-web/
├── index.html                 # صفحه اصلی (ریشه دامنه)
├── pages/                     # صفحات داخلی
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   ├── contact.html
│   ├── blog.html
│   ├── privacy.html
│   ├── fast.html
│   ├── vega.html              # کاتالوگ VEGA
│   ├── prosense.html          # کاتالوگ Prosense
│   └── articles/              # مقالات وبلاگ
│       ├── digital-marketing.html
│       ├── fast-studio.html
│       └── industrial-sensors.html
├── assets/
│   ├── styles/                # CSS
│   │   ├── tokens.css         # Design tokens
│   │   ├── style.css          # Components
│   │   ├── layout.css         # Layout patterns
│   │   └── responsive.css     # Breakpoints
│   ├── scripts/
│   │   ├── config/
│   │   │   ├── paths.js       # مسیردهی نسبی
│   │   │   └── site-config.js # تنظیمات مرکزی
│   │   ├── components/
│   │   │   └── site-components.js
│   │   └── main.js
│   └── images/
│       ├── brand/             # لوگو، فاویکون
│       ├── content/           # تصاویر محتوا
│       ├── icons/             # آیکون‌ها
│       └── partners/          # لوگوی پروژه‌ها
├── docs/                      # مستندات
├── robots.txt
├── sitemap.xml
└── README.md
```

## عمق صفحات (`data-depth`)

| عمق | مسیر نمونه | prefix |
|-----|------------|--------|
| 0 | `index.html` | — |
| 1 | `pages/about.html` | `../` |
| 2 | `pages/articles/*.html` | `../../` |

## مسیرها

همه URLها در `assets/scripts/config/site-config.js` → `routes` تعریف شده‌اند.
از `resolvePath()` برای لینک‌های نسبی در JS استفاده کنید.
