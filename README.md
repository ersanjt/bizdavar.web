# Bizdavar Group — Website

Multilingual static site (fa / tr / en) for [bizdavar.com](https://bizdavar.com).

## Stack

- HTML pages + vanilla JS/CSS (no bundler)
- i18n via `data-i18n` + locale JS bundles
- Apache/cPanel + `.htaccess` clean URLs
- **BizHub** — optional PHP CRM/CMS (`/admin/`, `/api/`)

## Quick start

```bash
npm run serve      # http://localhost:3456
npm run audit      # verify before deploy (must pass)
```

## Structure

See [docs/STRUCTURE.md](docs/STRUCTURE.md) for folders, script order, and path rules.

| Doc | Purpose |
|-----|---------|
| [STRUCTURE.md](docs/STRUCTURE.md) | Architecture & conventions |
| [DEPLOY-CPANEL.md](docs/DEPLOY-CPANEL.md) | Server deploy |
| [BIZHUB.md](docs/BIZHUB.md) | CRM/CMS setup |
| [SITE-AUDIT.md](docs/SITE-AUDIT.md) | Last audit output |

## Deploy (WHM)

```bash
cd /home/bizdavar/repositories/bizdavar.web
bash scripts/deploy-sync.sh
```

## Pages

22 HTML pages: home, services, portfolio, contact, brand catalogs (VEGA, Fast, …), blog articles.

All asset paths use `/assets/...` (root-absolute). Page links are extensionless (`pages/contact`).
