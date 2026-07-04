# BizHub — CRM & CMS for Bizdavar

**BizHub** is the internal PHP backend for managing leads (CRM) and content (CMS).

- **Admin panel:** `https://bizdavar.com/admin/`
- **API:** `https://bizdavar.com/api/`

---

## Features

### CRM
- Lead capture from contact form
- Pipeline: new → contacted → qualified → proposal → won / lost
- Notes per lead
- Search & filter
- Dashboard stats

### CMS
- Blog posts (fa/tr/en fields)
- FAQ management
- Public API for future dynamic frontend integration

---

## Setup on cPanel (5 steps)

### 1) Create MySQL database

cPanel → **MySQL Databases**

- Database: `bizdavar_hub`
- User: `bizdavar_hub` with ALL PRIVILEGES

### 2) Configure API

```bash
cp api/config.sample.php api/config.php
```

Edit `api/config.php`:

```php
'db' => [
  'database' => 'bizdavar_hub',
  'username' => 'bizdavar_hub',
  'password' => 'YOUR_DB_PASSWORD',
],
'install_key' => 'random-secret-key-here',
'admin_email' => 'you@bizdavar.com',
'admin_password' => 'StrongPassword123!',
```

### 3) Run installer (once)

Open in browser:

```
https://bizdavar.com/api/install.php?key=random-secret-key-here
```

Then **delete** `api/install.php` and remove `install_key` / `admin_password` from config.

### 4) Enable contact form → CRM

In `assets/scripts/config/site-config.js`:

```javascript
bizhub: {
  enabled: true,
  apiBase: '/api'
},
```

Deploy updated JS to server.

### 5) Login to admin

```
https://bizdavar.com/admin/
```

Use the admin email/password from install.

---

## API endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/public/leads` | — | Submit contact form |
| GET | `/api/public/posts?locale=fa` | — | Published posts |
| GET | `/api/public/faqs?locale=fa` | — | Published FAQs |
| POST | `/api/auth/login` | — | Admin login |
| GET | `/api/dashboard/stats` | ✓ | Dashboard |
| GET/PATCH | `/api/leads` | ✓ | CRM leads |

---

## Security

- `api/config.php` is gitignored — never commit passwords
- Rate limit on public lead submission (8/hour per IP)
- Session cookies: HttpOnly, Secure, SameSite=Lax
- Block `/admin/` and `/api/` in robots.txt
- Delete `install.php` after setup

---

## Deploy

`api/` and `admin/` are included in rsync deploy (`scripts/deploy-sync.sh`).

Ensure PHP 7.4+ and PDO MySQL are enabled on the server.
