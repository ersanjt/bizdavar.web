# اتصال Search Console به اسکریپت رشد (یک‌بار، حدود ۱۰ دقیقه)

اسکریپت `npm run growth` با یک **Service Account** فقط‌خواندنی، آمار کلیک، نمایش، CTR و رتبه را از Search Console می‌خواند.

## ۱. ساخت Service Account

1. به [console.cloud.google.com/projectcreate](https://console.cloud.google.com/projectcreate) برو و پروژه‌ای به نام `bizdavar-growth` بساز.
2. در [صفحه Google Search Console API](https://console.cloud.google.com/apis/library/searchconsole.googleapis.com) دکمه **Enable** را بزن (پروژه `bizdavar-growth` انتخاب باشد).
3. در [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) روی **Create service account** بزن، نام را `gsc-reader` بگذار و **Done** را بزن. نقش (Role) لازم نیست.
4. روی حساب ساخته‌شده کلیک کن ← تب **Keys** ← **Add key** ← **Create new key** ← **JSON**. یک فایل `.json` دانلود می‌شود.
5. ایمیل حساب را کپی کن (شکلی مثل `gsc-reader@bizdavar-growth.iam.gserviceaccount.com`).

## ۲. دسترسی در Search Console

1. در [Search Console → Settings → Users and permissions](https://search.google.com/search-console/users?resource_id=sc-domain:bizdavar.com) روی **Add user** بزن.
2. ایمیل Service Account را وارد کن، Permission را **Restricted** بگذار و **Add** بزن.

## ۳. قرار دادن کلید

**روی همین کامپیوتر:** فایل JSON را با نام `gsc-service-account.json` در پوشه `.secrets/` ریشه پروژه بگذار. این پوشه در `.gitignore` است و هرگز commit نمی‌شود. سپس اجرا کن:

```bash
npm run growth
```

باید خطی مثل `36 clicks / 1260 impressions (28d)` ببینی.

**برای اجرای خودکار روزانه (Cloud Agent):** در [cursor.com/dashboard → Cloud Agents](https://cursor.com/dashboard?tab=cloud-agents) یک Secret بساز:

- Name: `GSC_SERVICE_ACCOUNT_JSON`
- Value: کل محتوای فایل JSON

اگر property شما از نوع URL-prefix است (نه Domain)، یک Secret دیگر هم بساز: `GSC_SITE` = `https://bizdavar.com/`.
