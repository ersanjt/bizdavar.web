# استقرار خودکار bizdavar.com از GitHub (cPanel / WHM)

ریپو: `https://github.com/ersanjt/bizdavar.web.git`  
شاخه: `main`  
نوع سایت: استاتیک HTML (بدون build)

---

## پیش‌نیاز

- cPanel با **Git Version Control** (معمولاً cPanel 82+)
- دسترسی WHM Terminal یا SSH به اکانت cPanel دامنه `bizdavar.com`
- ریپوی GitHub عمومی یا **Deploy Key** برای ریپوی خصوصی

---

## روش ۱ — از پنل cPanel (ساده‌ترین)

### ۱) ساخت Deploy Key (ترمینال WHM یا SSH کاربر)

```bash
# با کاربر cPanel دامنه bizdavar.com وارد شوید (نه root)
whoami
# باید چیزی مثل bizdavar یا user123 باشد

mkdir -p ~/.ssh
chmod 700 ~/.ssh

ssh-keygen -t ed25519 -C "bizdavar-cpanel-deploy" -f ~/.ssh/github_bizdavar -N ""

cat ~/.ssh/github_bizdavar.pub
```

خروجی `cat` را کپی کنید.

### ۲) اضافه کردن Deploy Key در GitHub

1. بروید به: `https://github.com/ersanjt/bizdavar.web/settings/keys`
2. **Add deploy key**
3. Title: `bizdavar.com cPanel`
4. Key: محتوای `.pub`
5. فقط **Allow read access** (نوشتن لازم نیست)
6. Save

### ۳) تنظیم SSH برای GitHub (همان کاربر cPanel)

```bash
cat >> ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_bizdavar
  IdentitiesOnly yes
EOF
chmod 600 ~/.ssh/config

ssh -T git@github.com
# باید پیام موفقیت GitHub ببینید
```

### ۴) Clone در cPanel

**cPanel → Git Version Control → Create**

| فیلد | مقدار |
|------|--------|
| Clone URL | `git@github.com:ersanjt/bizdavar.web.git` |
| Repository Path | `repositories/bizdavar.web` |
| Repository Name | `bizdavar.web` |

Create → سپس **Update from Remote** (اولین pull)

### ۵) فعال‌سازی Deploy به public_html

**Manage → Pull or Deploy → Deploy HEAD Commit**

- **Deploy Path:** `public_html` (برای دامنه اصلی bizdavar.com)

با فایل `.cpanel.yml` در ریشه ریپو، cPanel بعد از هر Deploy این کارها را انجام می‌دهد:
- کپی `index.html`, `robots.txt`, `sitemap.xml`
- کپی پوشه‌های `assets/` و `pages/`

### ۶) Webhook برای Deploy خودکار با هر push

**cPanel → Git Version Control → Manage → Pull or Deploy**

- گزینه **Pull on webhook** یا **Automatic deployment** را فعال کنید
- URL webhook را کپی کنید

**GitHub → repo → Settings → Webhooks → Add webhook**

| فیلد | مقدار |
|------|--------|
| Payload URL | URL از cPanel |
| Content type | `application/json` |
| Events | Just the `push` event |
| Active | ✓ |

از این به بعد با هر `git push` به `main`، سرور خودکار pull و deploy می‌کند.

---

## روش ۲ — WHM Terminal به‌عنوان root (پیشنهادی)

> کاربر `bizdavar` روی این سرور **Shell access** ندارد؛ deploy با **root** انجام می‌شود.

```bash
cd /home/bizdavar/repositories/bizdavar.web
git pull origin main   # یا بعد از push محلی
bash scripts/deploy-sync.sh
```

اسکریپت `scripts/deploy-sync.sh`:
1. `git fetch` + `reset --hard origin/main`
2. **Backup** از `public_html` در `/root/bizdavar-public_html-before-sync-*.tar.gz`
3. **rsync** با `--delete` (فایل‌های اضافی در public_html حذف می‌شوند)
4. حفظ `.well-known` برای SSL
5. `chown` و chmod
6. تست `curl` روی bizdavar.com

### یک‌خطی (بدون اسکریپت)

```bash
REPO=/home/bizdavar/repositories/bizdavar.web
WEB=/home/bizdavar/public_html
TS=$(date +%F-%H%M)

git config --global --add safe.directory "$REPO"
cd "$REPO" && git fetch origin && git reset --hard origin/main

tar -czf "/root/bizdavar-public_html-before-sync-$TS.tar.gz" -C /home/bizdavar public_html

rsync -av --delete \
  --exclude .git/ --exclude .cpanel.yml --exclude .gitignore \
  --exclude .well-known/ --exclude docs/ --exclude scripts/ \
  --exclude README.md --exclude '*.zip' \
  "$REPO/" "$WEB/"

mkdir -p "$WEB/.well-known/acme-challenge" "$WEB/.well-known/pki-validation"
chown -R bizdavar:bizdavar "$WEB"
find "$WEB" -type d -exec chmod 755 {} \;
find "$WEB" -type f -exec chmod 644 {} \;
```

### ZIP به‌جای Git (بدون rsync)

1. فایل `bizdavar-public_html.zip` را در cPanel File Manager آپلود کنید
2. داخل `public_html` Extract کنید (مستقیم `index.html` و `assets/` در ریشه باشند)
3. `.htaccess` حتماً extract شده باشد

---

## روش ۳ — ترمینال cPanel (اگر Shell فعال شد)

```bash
mkdir -p ~/repositories
cd ~/repositories
git clone git@github.com:ersanjt/bizdavar.web.git
cd bizdavar.web
bash scripts/deploy-cpanel.sh
```

### cron (اختیاری)

```bash
*/30 * * * * bash ~/repositories/bizdavar.web/scripts/deploy-cpanel.sh >> ~/logs/deploy-bizdavar.log 2>&1
```

---

## روش قدیمی — cp دستی (fallback)

## زیردامنه fast.bizdavar.com (اختیاری)

```bash
cp ~/public_html/pages/fast.html ~/public_html/fast/index.html
# یا در cPanel Subdomain → Document Root = public_html/fast
```

---

## عیب‌یابی

| مشکل | راه‌حل |
|------|--------|
| `Permission denied (publickey)` | Deploy key را در GitHub اضافه کنید؛ `~/.ssh/config` را بررسی کنید |
| صفحه 404 برای `/pages/...` | مطمئن شوید پوشه `pages/` در `public_html` کپی شده |
| تغییرات دیده نمی‌شود | Cache مرورگر / Cloudflare را پاک کنید؛ دوباره Deploy کنید |
| `.cpanel.yml` اجرا نمی‌شود | از cPanel **Deploy HEAD Commit** بزنید، نه فقط Pull |

---

## چک‌لیست بعد از دیپلوی

- [ ] `https://bizdavar.com/` باز می‌شود
- [ ] `https://bizdavar.com/pages/about.html` کار می‌کند
- [ ] `https://bizdavar.com/sitemap.xml` در دسترس است
- [ ] لوگو و فونت‌ها لود می‌شوند (`/assets/...`)
- [ ] یک push تست به GitHub → سایت به‌روز می‌شود
