# ساختار پروژه Bizdavar Web

> آخرین به‌روزرسانی: 2026 — سایت استاتیک چندصفحه‌ای (fa / tr / en) + BizHub CRM/CMS

## درخت پوشه‌ها

```
bizdavar-web/
├── index.html                 # صفحه اصلی (data-depth="0")
├── pages/                     # صفحات داخلی (depth 1)
│   ├── about.html, services.html, contact.html, …
│   └── articles/              # وبلاگ (depth 2)
├── assets/                    # فایل‌های عمومی (deploy)
│   ├── fonts/
│   ├── images/
│   ├── styles/
│   └── scripts/
│       ├── config/            # site-config, paths, catalogs
│       ├── components/        # chrome, grids, schema, icons
│       ├── i18n/              # locales, bootstrap, SEO
│       ├── lib/               # shared page helpers
│       ├── *-page.js          # boot per page
│       ├── main.js            # shared UI boot
│       └── premium.js         # motion & polish
├── api/                       # BizHub PHP REST API
├── admin/                     # BizHub admin panel
├── database/                  # schema.sql
├── storage/                   # runtime (gitignored)
├── scripts/                   # ابزار dev (deploy نمی‌شود)
├── docs/                      # مستندات
├── .htaccess                  # HTTPS, CSP, clean URLs
├── robots.txt, sitemap.xml
└── package.json               # npm run audit
```

## قوانین مسیردهی

| نوع | فرمت | مثال |
|-----|------|------|
| Asset در HTML | root-absolute | `/assets/styles/style.css` |
| لینک صفحات | extensionless | `pages/contact` |
| JS داخلی | `resolvePath()` / `siteLink()` | از `paths.js` |
| Config routes | `.html` suffix | `pages/about.html` → prettified در runtime |

## عمق صفحات (`data-depth`)

| depth | مسیر | resolvePath prefix |
|-------|------|-------------------|
| 0 | `index.html` | `/` |
| 1 | `pages/*.html` | `/` |
| 2 | `pages/articles/*.html` | `/` |

## ترتیب بارگذاری اسکریپت (الزامی)

```
paths.js → site-config.js → locales* → i18n.js → page-i18n.js
→ company-intel.js → biz-icons.js → context.js → chrome.js
→ schema.js → grids.js → main.js → premium.js
→ [inline chrome snapshot] → bootstrap.js → page boot
```

`bootstrap.js` **بعد از** `main.js` — هرگز قبل از آن.

## CSS — ترتیب لایه‌ها

```
fonts → typography → icons → tokens → style → layout → i18n
→ footer → responsive → premium → [page CSS]
```

`mobile-chrome.css` فقط از طریق `@import` داخل `responsive.css` — در HTML لینک نشود.

## i18n

- `locales.js` — رشته‌های مشترک
- `locales-pages.js` — محتوای صفحات
- `data-i18n` روی HTML + `applyDataI18n()` در bootstrap
- زبان: `?lang=fa|tr|en` + localStorage

## BizHub (CRM + CMS)

- Admin: `/admin/`
- API: `/api/`
- راهنما: `docs/BIZHUB.md`

## Deploy

| روش | فایل |
|-----|------|
| cPanel Git | `.cpanel.yml` |
| WHM rsync | `scripts/deploy-sync.sh` |
| ZIP دستی | `bizdavar-public_html.zip` |

**قبل از deploy:** `npm run audit` (باید 0 error)

## ابزارهای کیفیت

```bash
npm run audit          # همه چک‌ها
npm run audit:site     # لینک‌ها و ساختار HTML
npm run audit:assets   # فایل‌های asset
npm run sitemap        # تولید sitemap.xml
```

خروجی audit: `docs/SITE-AUDIT.md`

## چیزهایی که deploy نمی‌شوند

`scripts/`, `docs/`, `README.md`, `.git/`, `node_modules/`, `*.zip`

`api/config.php` فقط روی سرور — در git نیست.
