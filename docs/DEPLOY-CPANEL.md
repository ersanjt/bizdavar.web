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

## روش ۲ — فقط از ترمینال WHM (بدون UI)

```bash
# 1) سوئیچ به کاربر cPanel (از WHM Terminal)
su - CPANEL_USERNAME

# 2) کلون (اگر از قبل نیست)
mkdir -p ~/repositories
cd ~/repositories
git clone git@github.com:ersanjt/bizdavar.web.git
cd bizdavar.web
git checkout main

# 3) دیپلوی دستی (مشابه .cpanel.yml)
DEPLOYPATH=~/public_html
cp -f index.html robots.txt sitemap.xml "$DEPLOYPATH/"
cp -a assets "$DEPLOYPATH/"
cp -a pages "$DEPLOYPATH/"

echo "Deploy OK: $(date)"
```

### اسکریپت دیپلوی + cron (اگر webhook ندارید)

```bash
cat > ~/bin/deploy-bizdavar.sh << 'SCRIPT'
#!/bin/bash
set -e
REPO=~/repositories/bizdavar.web
WEB=~/public_html
cd "$REPO"
git fetch origin main
git reset --hard origin/main
cp -f index.html robots.txt sitemap.xml "$WEB/"
cp -a assets "$WEB/"
cp -a pages "$WEB/"
echo "[$(date)] bizdavar deployed"
SCRIPT
chmod +x ~/bin/deploy-bizdavar.sh
```

هر ۵ دقیقه (اختیاری):

```bash
crontab -e
# اضافه کنید:
*/5 * * * * ~/bin/deploy-bizdavar.sh >> ~/logs/deploy-bizdavar.log 2>&1
```

---

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
