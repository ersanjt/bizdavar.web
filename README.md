# بیزدوار گروپ — وبسایت استاتیک (بازسازی از بکاپ)

وبسایت فارسی RTL بازسازی‌شده از بکاپ‌های `well-known.zip` و `fast.zip`.

## صفحات

| صفحه | مسیر | توضیح |
|------|------|-------|
| خانه | `index.html` | همه بخش‌های سایت اصلی |
| خدمات | `services.html` | ۴ محور خدمات |
| نمونه‌کارها | `portfolio.html` | ۱۶ پروژه از control panel |
| Fast Studio | `fast.html` | پلن‌های $99 / $199 / $299 |
| تماس | `contact.html` | فرم تماس + اطلاعات ارتباطی |

## پیش‌نمایش محلی

```bash
npx serve . -l 3456
```

سپس: http://localhost:3456

## تنظیمات تماس (مهم)

فایل `js/site-config.js`:

```js
contact: {
  phone: '',           // مثال: '+905xxxxxxxxx'
  whatsapp: '',        // مثال: '905xxxxxxxxx' (بدون +)
  phoneDisplay: 'تماس از طریق واتساپ',
}
```

پس از وارد کردن شماره واتساپ، دکمه‌های واتساپ در همه صفحات فعال می‌شوند.

## سئو

- `robots.txt` و `sitemap.xml`
- متا تگ‌های Open Graph و Twitter
- JSON-LD: Organization، WebSite، FAQ (خانه)، ContactPage (تماس)
- Canonical URL برای هر صفحه

## تصاویر (از بکاپ استخراج شده)

- `header-logo-1.png` / `bizdavar-logo.png`
- `about-us-1320x682.jpg`
- `Image-Contact-1-768x387.jpg`
- `global-network-...-300x300.jpg`
- `favicon.png`

## استقرار

فایل‌های پوشه `bizdavar-web` را روی هاست `bizdavar.com` آپلود کنید.
برای `fast.bizdavar.com` می‌توانید `fast.html` را به `index.html` کپی کنید.

## فرم تماس

فعلاً با `mailto:info@bizdavar.com` کار می‌کند. برای production:
Formspree، PHP یا API backend توصیه می‌شود.
