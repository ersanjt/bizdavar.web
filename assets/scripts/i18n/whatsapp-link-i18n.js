/**
 * WhatsApp link generator — SEO meta + copy for fa / tr / en / ru / ar.
 * Loaded after locales-ru-ar.js so RU/AR are set directly (not cloned from EN).
 */
(function () {
  if (!window.BIZDAVAR_LOCALES) return;

  const seo = {
    fa: {
      crumb: 'ساخت لینک واتساپ',
      seoTitle: 'ساخت لینک واتساپ رایگان | لینک مستقیم wa.me با پیام و QR — بیزدوار',
      seoDescription: 'لینک مستقیم واتساپ با پیام آماده بسازید: شماره را وارد کنید و لینک wa.me، کد QR و کد دکمه سایت را در یک ثانیه بگیرید. رایگان، بدون ثبت‌نام، برای اینستاگرام و کسب‌وکار.',
      seoKeywords: 'ساخت لینک واتساپ, لینک مستقیم واتساپ, لینک واتساپ برای اینستاگرام, wa.me, ساخت لینک چت واتساپ, کد QR واتساپ, لینک واتساپ با پیام'
    },
    tr: {
      crumb: 'WhatsApp link oluşturucu',
      seoTitle: 'WhatsApp Link Oluşturma — Ücretsiz wa.me Linki ve QR Kod | Bizdavar',
      seoDescription: 'Hazır mesajlı WhatsApp linki oluşturun: numarayı girin, wa.me linkini, QR kodu ve site butonu kodunu saniyede alın. Ücretsiz, kayıt yok, Instagram ve işletmeler için.',
      seoKeywords: 'whatsapp link oluşturma, whatsapp linki, wa.me link, whatsapp mesaj linki, instagram whatsapp linki, whatsapp qr kod, whatsapp direkt mesaj linki'
    },
    en: {
      crumb: 'WhatsApp link generator',
      seoTitle: 'WhatsApp Link Generator — Free wa.me Link with Message & QR | Bizdavar',
      seoDescription: 'Create a WhatsApp click-to-chat link with a pre-filled message: enter a number and get the wa.me link, a QR code and website button code in a second. Free, no sign-up.',
      seoKeywords: 'whatsapp link generator, wa.me link, whatsapp chat link, click to chat whatsapp, whatsapp qr code generator, whatsapp link with message, whatsapp link for instagram'
    },
    ru: {
      crumb: 'Генератор ссылки WhatsApp',
      seoTitle: 'Генератор ссылки WhatsApp — бесплатная ссылка wa.me с текстом и QR | Bizdavar',
      seoDescription: 'Создайте ссылку на чат WhatsApp с готовым сообщением: введите номер и получите ссылку wa.me, QR-код и код кнопки для сайта за секунду. Бесплатно, без регистрации.',
      seoKeywords: 'ссылка на whatsapp, генератор ссылки whatsapp, wa.me ссылка, ссылка на чат whatsapp, qr код whatsapp, ссылка whatsapp с текстом, ссылка whatsapp для instagram'
    },
    ar: {
      crumb: 'إنشاء رابط واتساب',
      seoTitle: 'إنشاء رابط واتساب مجاناً — رابط wa.me مع رسالة ورمز QR | Bizdavar',
      seoDescription: 'أنشئ رابط دردشة واتساب مع رسالة جاهزة: أدخل الرقم واحصل على رابط wa.me ورمز QR وكود زر الموقع خلال ثانية. مجاني ودون تسجيل، لإنستغرام والأعمال.',
      seoKeywords: 'إنشاء رابط واتساب, رابط واتساب مباشر, رابط wa.me, رابط واتساب مع رسالة, رمز QR واتساب, رابط واتساب للانستقرام, عمل رابط واتساب'
    }
  };

  const pages = {
    fa: {
      hero: {
        eyebrow: 'ابزار رایگان آنلاین',
        title: 'ساخت لینک واتساپ',
        lead: 'شماره و پیام آماده را وارد کنید تا لینک مستقیم چت (wa.me)، کد QR و کد دکمه سایت را فوراً بگیرید. مخاطب بدون ذخیره شماره، مستقیم به چت شما می‌رسد.'
      },
      ui: {
        country: 'کد کشور',
        phone: 'شماره واتساپ',
        phonePh: '912 345 6789',
        phoneHint: 'شماره را بدون صفر اول وارد کنید؛ مثلاً 9123456789.',
        message: 'پیام آماده (اختیاری)',
        messagePh: 'سلام، درباره محصولاتتان سؤال داشتم.',
        templates: 'پیام‌های آماده:',
        tplPrice: 'استعلام قیمت',
        tplPriceText: 'سلام، قیمت و موجودی محصول را می‌خواستم.',
        tplOrder: 'ثبت سفارش',
        tplOrderText: 'سلام، می‌خواهم سفارش ثبت کنم.',
        tplSupport: 'پشتیبانی',
        tplSupportText: 'سلام، برای پشتیبانی پیام می‌دهم.',
        resultTitle: 'لینک واتساپ شما',
        resultEmpty: 'شماره را وارد کنید تا لینک ساخته شود.',
        invalid: 'شماره معتبر نیست: همراه با کد کشور باید ۷ تا ۱۵ رقم باشد.',
        copy: 'کپی لینک',
        copied: 'کپی شد ✓',
        open: 'تست در واتساپ',
        copyHtml: 'کپی کد دکمه سایت',
        buttonLabel: 'گفت‌وگو در واتساپ',
        qrTitle: 'کد QR لینک',
        qrNote: 'برای کارت ویزیت، منو، بسته‌بندی یا ویترین پرینت بگیرید.',
        qrDownload: 'دانلود QR',
        note: 'لینک و QR در مرورگر خود شما ساخته می‌شوند و شماره‌ای روی سرور ما ذخیره نمی‌شود.'
      },
      explain: {
        eyebrow: 'کاربردها',
        title: 'لینک واتساپ کجا به کار می‌آید؟',
        items: [
          { title: 'بیو اینستاگرام و تلگرام', body: 'یک لینک کوتاه در بیو بگذارید تا مشتری با یک لمس، چت را با پیام آماده شروع کند.' },
          { title: 'سایت و فروشگاه آنلاین', body: 'دکمه «گفت‌وگو در واتساپ» را با کد آماده روی صفحه محصول یا تماس بگذارید.' },
          { title: 'کارت ویزیت و تبلیغات چاپی', body: 'کد QR را روی کارت، منو، بسته‌بندی یا بنر چاپ کنید تا با دوربین گوشی اسکن شود.' }
        ]
      },
      tips: {
        title: 'نکات ساخت لینک درست',
        items: [
          'شماره را با کد کشور و بدون صفر اول، فاصله یا خط تیره وارد کنید.',
          'پیام آماده را کوتاه و مشخص بنویسید تا مشتری فقط دکمه ارسال را بزند.',
          'قبل از انتشار، لینک را با «تست در واتساپ» امتحان کنید.',
          'برای کسب‌وکار از واتساپ بیزینس استفاده کنید تا پاسخ خودکار و کاتالوگ داشته باشید.'
        ]
      },
      faq: {
        eyebrow: 'سوالات متداول',
        title: 'پرسش‌های رایج درباره لینک واتساپ',
        items: [
          { q: 'لینک wa.me چیست؟', a: 'لینک رسمی واتساپ برای شروع چت با یک شماره، بدون نیاز به ذخیره آن در مخاطبین. روی موبایل اپ واتساپ و روی کامپیوتر WhatsApp Web باز می‌شود.' },
          { q: 'آیا ساخت لینک واتساپ رایگان است؟', a: 'بله. این ابزار کاملاً رایگان است و به ثبت‌نام نیاز ندارد. لینک ساخته‌شده هم تاریخ انقضا ندارد.' },
          { q: 'چرا لینک من کار نمی‌کند؟', a: 'معمولاً شماره با صفر اول یا بدون کد کشور وارد شده است. شماره باید مثل 989123456789 باشد و روی آن واتساپ فعال باشد.' },
          { q: 'می‌توانم پیام آماده را بعداً تغییر دهم؟', a: 'بله، کافی است لینک جدیدی با پیام تازه بسازید. پیام داخل خود لینک است و جایی ذخیره نمی‌شود.' },
          { q: 'اگر چند نفر به واتساپ مشتریان جواب می‌دهند چه کنم؟', a: 'یک اینباکس تیمی مثل FXGuard WhatsApp CRM گفت‌وگوهای یک شماره را بین اپراتورها تقسیم و پیگیری می‌کند.' }
        ]
      },
      cta: {
        title: 'پیام‌های واتساپ زیاد شده؟',
        desc: 'FXGuard WhatsApp CRM همه چت‌ها را در یک اینباکس تیمی جمع می‌کند: تقسیم بین اپراتورها، پاسخ آماده و گزارش فروش.',
        btn: 'آشنایی با FXGuard CRM',
        btn2: 'مشاوره رایگان'
      },
      geoText: 'ساخت لینک واتساپ برای کسب‌وکارهای ایران، ترکیه، امارات، عراق، روسیه و سراسر جهان — برای هر شماره با کد کشور.',
      related: [
        { title: 'WhatsApp CRM FXGuard', url: 'fxguard', desc: 'اینباکس تیمی واتساپ برای فروش و پشتیبانی' },
        { title: 'ابزارهای رایگان بیزدوار', url: 'tools', desc: 'تست سرعت، IP، UTM و ابزارهای دیگر' },
        { title: 'خدمات بیزدوار', url: 'services', desc: 'طراحی وب، سئو و بازاریابی دیجیتال' }
      ]
    },

    tr: {
      hero: {
        eyebrow: 'Ücretsiz online araç',
        title: 'WhatsApp Link Oluşturucu',
        lead: 'Numarayı ve hazır mesajı girin; doğrudan sohbet linkini (wa.me), QR kodu ve site butonu kodunu hemen alın. Müşteri numaranızı kaydetmeden sohbete başlar.'
      },
      ui: {
        country: 'Ülke kodu',
        phone: 'WhatsApp numarası',
        phonePh: '532 123 4567',
        phoneHint: 'Numarayı başında 0 olmadan girin; örn. 5321234567.',
        message: 'Hazır mesaj (isteğe bağlı)',
        messagePh: 'Merhaba, ürünleriniz hakkında bilgi almak istiyorum.',
        templates: 'Hazır mesajlar:',
        tplPrice: 'Fiyat sorma',
        tplPriceText: 'Merhaba, ürünün fiyatını ve stok durumunu öğrenebilir miyim?',
        tplOrder: 'Sipariş',
        tplOrderText: 'Merhaba, sipariş vermek istiyorum.',
        tplSupport: 'Destek',
        tplSupportText: 'Merhaba, destek için yazıyorum.',
        resultTitle: 'WhatsApp linkiniz',
        resultEmpty: 'Link oluşturmak için numarayı girin.',
        invalid: 'Numara geçersiz: ülke koduyla birlikte 7–15 rakam olmalı.',
        copy: 'Linki kopyala',
        copied: 'Kopyalandı ✓',
        open: "WhatsApp'ta test et",
        copyHtml: 'Site butonu kodunu kopyala',
        buttonLabel: "WhatsApp'tan yazın",
        qrTitle: 'Linkin QR kodu',
        qrNote: 'Kartvizit, menü, ambalaj veya vitrin için yazdırın.',
        qrDownload: 'QR indir',
        note: 'Link ve QR tarayıcınızda oluşturulur; numaranız sunucumuzda saklanmaz.'
      },
      explain: {
        eyebrow: 'Kullanım alanları',
        title: 'WhatsApp linki nerede işe yarar?',
        items: [
          { title: 'Instagram ve Telegram biyografisi', body: 'Biyografiye kısa bir link koyun; müşteri tek dokunuşla hazır mesajla sohbete başlasın.' },
          { title: 'Web sitesi ve e-ticaret', body: "Ürün veya iletişim sayfasına hazır kodla \"WhatsApp'tan yazın\" butonu ekleyin." },
          { title: 'Kartvizit ve basılı reklam', body: 'QR kodu kartvizit, menü, ambalaj veya afişe basın; telefon kamerasıyla taransın.' }
        ]
      },
      tips: {
        title: 'Doğru link için ipuçları',
        items: [
          'Numarayı ülke koduyla, başında 0, boşluk veya tire olmadan girin.',
          'Hazır mesajı kısa ve net yazın; müşteri sadece gönder tuşuna bassın.',
          "Yayınlamadan önce linki \"WhatsApp'ta test et\" ile deneyin.",
          'İşletmeler için otomatik yanıt ve katalog sunan WhatsApp Business kullanın.'
        ]
      },
      faq: {
        eyebrow: 'Sık sorulan sorular',
        title: 'WhatsApp linki hakkında sorular',
        items: [
          { q: 'wa.me linki nedir?', a: 'Bir numarayla rehbere kaydetmeden sohbet başlatan resmi WhatsApp linkidir. Telefonda WhatsApp uygulaması, bilgisayarda WhatsApp Web açılır.' },
          { q: 'WhatsApp linki oluşturmak ücretsiz mi?', a: 'Evet. Araç tamamen ücretsizdir ve kayıt gerektirmez. Oluşturulan linkin süresi de dolmaz.' },
          { q: 'Linkim neden çalışmıyor?', a: 'Genellikle numara başında 0 ile veya ülke kodu olmadan girilmiştir. Numara 905321234567 gibi olmalı ve WhatsApp kullanmalıdır.' },
          { q: 'Hazır mesajı sonra değiştirebilir miyim?', a: 'Evet, yeni mesajla yeni bir link oluşturmanız yeterli. Mesaj linkin içindedir, hiçbir yerde saklanmaz.' },
          { q: 'Müşterilere birden fazla kişi yanıt veriyorsa ne yapmalı?', a: 'FXGuard WhatsApp CRM gibi bir ekip gelen kutusu, tek numaradaki sohbetleri temsilciler arasında dağıtır ve takip eder.' }
        ]
      },
      cta: {
        title: 'WhatsApp mesajlarınız çoğaldı mı?',
        desc: 'FXGuard WhatsApp CRM tüm sohbetleri tek bir ekip gelen kutusunda toplar: temsilcilere dağıtım, hazır yanıtlar ve satış raporu.',
        btn: "FXGuard CRM'i inceleyin",
        btn2: 'Ücretsiz danışmanlık'
      },
      geoText: "Türkiye, İran, BAE, Irak, Rusya ve tüm dünyadaki işletmeler için WhatsApp linki — ülke koduyla her numaraya.",
      related: [
        { title: 'WhatsApp CRM FXGuard', url: 'fxguard', desc: 'Satış ve destek için ekip WhatsApp gelen kutusu' },
        { title: 'Bizdavar ücretsiz araçlar', url: 'tools', desc: 'Hız testi, IP, UTM ve diğer araçlar' },
        { title: 'Bizdavar hizmetleri', url: 'services', desc: 'Web tasarım, SEO ve dijital pazarlama' }
      ]
    },

    en: {
      hero: {
        eyebrow: 'Free online tool',
        title: 'WhatsApp Link Generator',
        lead: 'Enter a number and a ready message to get a click-to-chat link (wa.me), a QR code and website button code instantly. Customers reach your chat without saving your number.'
      },
      ui: {
        country: 'Country code',
        phone: 'WhatsApp number',
        phonePh: '201 555 0123',
        phoneHint: 'Enter the number without a leading 0; the country code is added for you.',
        message: 'Pre-filled message (optional)',
        messagePh: 'Hi, I have a question about your products.',
        templates: 'Ready messages:',
        tplPrice: 'Price inquiry',
        tplPriceText: 'Hi, could you share the price and availability of this product?',
        tplOrder: 'Place an order',
        tplOrderText: "Hi, I'd like to place an order.",
        tplSupport: 'Support',
        tplSupportText: "Hi, I'm writing for support.",
        resultTitle: 'Your WhatsApp link',
        resultEmpty: 'Enter a number to create your link.',
        invalid: 'Invalid number: with the country code it must be 7–15 digits.',
        copy: 'Copy link',
        copied: 'Copied ✓',
        open: 'Test in WhatsApp',
        copyHtml: 'Copy website button code',
        buttonLabel: 'Chat on WhatsApp',
        qrTitle: 'QR code for your link',
        qrNote: 'Print it on business cards, menus, packaging or shop windows.',
        qrDownload: 'Download QR',
        note: 'The link and QR code are created in your browser; your number is not stored on our servers.'
      },
      explain: {
        eyebrow: 'Use cases',
        title: 'Where does a WhatsApp link help?',
        items: [
          { title: 'Instagram and Telegram bio', body: 'Put a short link in your bio so customers start a chat with a ready message in one tap.' },
          { title: 'Website and online store', body: 'Add a "Chat on WhatsApp" button to product or contact pages with the ready-made code.' },
          { title: 'Business cards and print ads', body: 'Print the QR code on cards, menus, packaging or banners so people can scan it with their phone camera.' }
        ]
      },
      tips: {
        title: 'Tips for a working link',
        items: [
          'Use the country code and drop the leading 0, spaces and dashes.',
          'Keep the ready message short and specific so the customer just taps send.',
          'Test the link with "Test in WhatsApp" before you publish it.',
          'Use WhatsApp Business for auto-replies and a product catalog.'
        ]
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'WhatsApp link questions',
        items: [
          { q: 'What is a wa.me link?', a: "It is WhatsApp's official click-to-chat link: it opens a chat with a number without saving it to contacts. It opens the WhatsApp app on phones and WhatsApp Web on computers." },
          { q: 'Is the WhatsApp link generator free?', a: 'Yes. The tool is completely free and needs no sign-up. The links you create never expire.' },
          { q: "Why doesn't my link work?", a: 'Usually the number has a leading 0 or is missing the country code. It should look like 14155550123, and the number must use WhatsApp.' },
          { q: 'Can I change the ready message later?', a: 'Yes, just create a new link with the new message. The message lives inside the link itself and is not stored anywhere.' },
          { q: 'What if several people answer customers on WhatsApp?', a: 'A team inbox such as FXGuard WhatsApp CRM splits and tracks the chats of one number across your agents.' }
        ]
      },
      cta: {
        title: 'Too many WhatsApp messages?',
        desc: 'FXGuard WhatsApp CRM brings every chat into one team inbox: assignment to agents, saved replies and sales reports.',
        btn: 'Explore FXGuard CRM',
        btn2: 'Free consultation'
      },
      geoText: 'WhatsApp links for businesses in Turkey, Iran, the UAE, Iraq, Russia and worldwide — any number with its country code.',
      related: [
        { title: 'WhatsApp CRM FXGuard', url: 'fxguard', desc: 'Team WhatsApp inbox for sales and support' },
        { title: 'Bizdavar free tools', url: 'tools', desc: 'Speed test, IP, UTM and more' },
        { title: 'Bizdavar services', url: 'services', desc: 'Web design, SEO and digital marketing' }
      ]
    },

    ru: {
      hero: {
        eyebrow: 'Бесплатный онлайн-инструмент',
        title: 'Генератор ссылки WhatsApp',
        lead: 'Введите номер и готовое сообщение — сразу получите ссылку на чат (wa.me), QR-код и код кнопки для сайта. Клиент пишет вам, не сохраняя номер в контакты.'
      },
      ui: {
        country: 'Код страны',
        phone: 'Номер WhatsApp',
        phonePh: '912 345 67 89',
        phoneHint: 'Вводите номер без 8 и 0 в начале; код страны добавится сам.',
        message: 'Готовое сообщение (необязательно)',
        messagePh: 'Здравствуйте, у меня вопрос о ваших товарах.',
        templates: 'Готовые сообщения:',
        tplPrice: 'Узнать цену',
        tplPriceText: 'Здравствуйте, подскажите цену и наличие товара.',
        tplOrder: 'Заказ',
        tplOrderText: 'Здравствуйте, хочу оформить заказ.',
        tplSupport: 'Поддержка',
        tplSupportText: 'Здравствуйте, пишу в поддержку.',
        resultTitle: 'Ваша ссылка WhatsApp',
        resultEmpty: 'Введите номер, чтобы создать ссылку.',
        invalid: 'Неверный номер: вместе с кодом страны должно быть 7–15 цифр.',
        copy: 'Копировать ссылку',
        copied: 'Скопировано ✓',
        open: 'Проверить в WhatsApp',
        copyHtml: 'Копировать код кнопки',
        buttonLabel: 'Написать в WhatsApp',
        qrTitle: 'QR-код ссылки',
        qrNote: 'Распечатайте на визитке, в меню, на упаковке или витрине.',
        qrDownload: 'Скачать QR',
        note: 'Ссылка и QR-код создаются в вашем браузере; номер не сохраняется на наших серверах.'
      },
      explain: {
        eyebrow: 'Применение',
        title: 'Где пригодится ссылка WhatsApp?',
        items: [
          { title: 'Шапка Instagram и Telegram', body: 'Разместите короткую ссылку в профиле — клиент начнёт чат с готовым сообщением в одно касание.' },
          { title: 'Сайт и интернет-магазин', body: 'Добавьте кнопку «Написать в WhatsApp» на страницу товара или контактов с помощью готового кода.' },
          { title: 'Визитки и печатная реклама', body: 'Напечатайте QR-код на визитке, в меню, на упаковке или баннере — его сканируют камерой телефона.' }
        ]
      },
      tips: {
        title: 'Как сделать рабочую ссылку',
        items: [
          'Указывайте код страны, без 8 или 0 в начале, пробелов и дефисов.',
          'Пишите короткое и конкретное сообщение — клиенту останется нажать «Отправить».',
          'Перед публикацией проверьте ссылку кнопкой «Проверить в WhatsApp».',
          'Для бизнеса используйте WhatsApp Business с автоответами и каталогом.'
        ]
      },
      faq: {
        eyebrow: 'Вопросы и ответы',
        title: 'Вопросы о ссылке WhatsApp',
        items: [
          { q: 'Что такое ссылка wa.me?', a: 'Это официальная ссылка WhatsApp для чата с номером без сохранения в контакты. На телефоне открывается приложение, на компьютере — WhatsApp Web.' },
          { q: 'Генератор ссылок WhatsApp бесплатный?', a: 'Да. Инструмент полностью бесплатный и не требует регистрации. Созданные ссылки не имеют срока действия.' },
          { q: 'Почему моя ссылка не работает?', a: 'Чаще всего номер указан с 8 или 0 в начале либо без кода страны. Номер должен выглядеть как 79123456789, и на нём должен быть WhatsApp.' },
          { q: 'Можно ли потом изменить сообщение?', a: 'Да, просто создайте новую ссылку с новым текстом. Сообщение хранится внутри самой ссылки и нигде не сохраняется.' },
          { q: 'Что делать, если клиентам отвечают несколько сотрудников?', a: 'Командный инбокс, например FXGuard WhatsApp CRM, распределяет чаты одного номера между операторами и отслеживает их.' }
        ]
      },
      cta: {
        title: 'Сообщений в WhatsApp стало слишком много?',
        desc: 'FXGuard WhatsApp CRM собирает все чаты в один командный инбокс: распределение по операторам, шаблоны ответов и отчёты о продажах.',
        btn: 'Узнать о FXGuard CRM',
        btn2: 'Бесплатная консультация'
      },
      geoText: 'Ссылки WhatsApp для бизнеса в России, Турции, ОАЭ, Иране, Ираке и по всему миру — для любого номера с кодом страны.',
      related: [
        { title: 'WhatsApp CRM FXGuard', url: 'fxguard', desc: 'Командный инбокс WhatsApp для продаж и поддержки' },
        { title: 'Бесплатные инструменты Bizdavar', url: 'tools', desc: 'Тест скорости, IP, UTM и другие' },
        { title: 'Услуги Bizdavar', url: 'services', desc: 'Веб-дизайн, SEO и digital-маркетинг' }
      ]
    },

    ar: {
      hero: {
        eyebrow: 'أداة مجانية عبر الإنترنت',
        title: 'إنشاء رابط واتساب',
        lead: 'أدخل الرقم ورسالة جاهزة لتحصل فوراً على رابط دردشة مباشر (wa.me) ورمز QR وكود زر للموقع. يصل العميل إلى محادثتك دون حفظ رقمك.'
      },
      ui: {
        country: 'رمز الدولة',
        phone: 'رقم واتساب',
        phonePh: '50 123 4567',
        phoneHint: 'أدخل الرقم دون الصفر في البداية؛ تتم إضافة رمز الدولة تلقائياً.',
        message: 'رسالة جاهزة (اختياري)',
        messagePh: 'مرحباً، لدي سؤال عن منتجاتكم.',
        templates: 'رسائل جاهزة:',
        tplPrice: 'الاستفسار عن السعر',
        tplPriceText: 'مرحباً، أرجو معرفة سعر المنتج وتوفره.',
        tplOrder: 'طلب شراء',
        tplOrderText: 'مرحباً، أرغب في تقديم طلب.',
        tplSupport: 'الدعم',
        tplSupportText: 'مرحباً، أتواصل معكم بخصوص الدعم.',
        resultTitle: 'رابط واتساب الخاص بك',
        resultEmpty: 'أدخل الرقم لإنشاء الرابط.',
        invalid: 'الرقم غير صالح: يجب أن يتكون مع رمز الدولة من 7 إلى 15 رقماً.',
        copy: 'نسخ الرابط',
        copied: 'تم النسخ ✓',
        open: 'تجربة في واتساب',
        copyHtml: 'نسخ كود زر الموقع',
        buttonLabel: 'تواصل عبر واتساب',
        qrTitle: 'رمز QR للرابط',
        qrNote: 'اطبعه على بطاقة العمل أو القائمة أو التغليف أو واجهة المتجر.',
        qrDownload: 'تنزيل QR',
        note: 'يتم إنشاء الرابط ورمز QR في متصفحك؛ ولا يُحفظ رقمك على خوادمنا.'
      },
      explain: {
        eyebrow: 'الاستخدامات',
        title: 'أين يفيد رابط واتساب؟',
        items: [
          { title: 'بايو إنستغرام وتيليغرام', body: 'ضع رابطاً قصيراً في البايو ليبدأ العميل المحادثة برسالة جاهزة بلمسة واحدة.' },
          { title: 'الموقع والمتجر الإلكتروني', body: 'أضف زر «تواصل عبر واتساب» إلى صفحة المنتج أو التواصل باستخدام الكود الجاهز.' },
          { title: 'بطاقات العمل والإعلانات المطبوعة', body: 'اطبع رمز QR على البطاقة أو القائمة أو التغليف أو اللافتة ليُمسح بكاميرا الهاتف.' }
        ]
      },
      tips: {
        title: 'نصائح لرابط يعمل بشكل صحيح',
        items: [
          'أدخل الرقم مع رمز الدولة ودون الصفر الأول أو المسافات أو الشرطات.',
          'اكتب رسالة جاهزة قصيرة وواضحة ليضغط العميل زر الإرسال فقط.',
          'جرّب الرابط عبر «تجربة في واتساب» قبل نشره.',
          'استخدم واتساب للأعمال للحصول على الردود التلقائية والكتالوج.'
        ]
      },
      faq: {
        eyebrow: 'الأسئلة الشائعة',
        title: 'أسئلة حول رابط واتساب',
        items: [
          { q: 'ما هو رابط wa.me؟', a: 'هو رابط واتساب الرسمي لبدء محادثة مع رقم دون حفظه في جهات الاتصال. يفتح تطبيق واتساب على الهاتف وواتساب ويب على الكمبيوتر.' },
          { q: 'هل إنشاء رابط واتساب مجاني؟', a: 'نعم. الأداة مجانية بالكامل ولا تحتاج إلى تسجيل، والروابط التي تنشئها لا تنتهي صلاحيتها.' },
          { q: 'لماذا لا يعمل الرابط؟', a: 'غالباً أُدخل الرقم مع صفر في البداية أو دون رمز الدولة. يجب أن يكون الرقم مثل 971501234567 وأن يكون عليه واتساب.' },
          { q: 'هل يمكنني تغيير الرسالة الجاهزة لاحقاً؟', a: 'نعم، أنشئ رابطاً جديداً بالرسالة الجديدة. الرسالة موجودة داخل الرابط نفسه ولا تُحفظ في أي مكان.' },
          { q: 'ماذا لو كان أكثر من موظف يرد على العملاء في واتساب؟', a: 'صندوق وارد جماعي مثل FXGuard WhatsApp CRM يوزّع محادثات الرقم الواحد على الموظفين ويتابعها.' }
        ]
      },
      cta: {
        title: 'هل كثرت رسائل واتساب لديك؟',
        desc: 'يجمع FXGuard WhatsApp CRM كل المحادثات في صندوق وارد جماعي: توزيع على الموظفين وردود جاهزة وتقارير مبيعات.',
        btn: 'تعرّف على FXGuard CRM',
        btn2: 'استشارة مجانية'
      },
      geoText: 'روابط واتساب للأعمال في الإمارات والسعودية والعراق وتركيا وإيران وحول العالم — لأي رقم مع رمز دولته.',
      related: [
        { title: 'WhatsApp CRM FXGuard', url: 'fxguard', desc: 'صندوق وارد واتساب جماعي للمبيعات والدعم' },
        { title: 'أدوات Bizdavar المجانية', url: 'tools', desc: 'اختبار السرعة وIP وUTM وغيرها' },
        { title: 'خدمات Bizdavar', url: 'services', desc: 'تصميم المواقع وSEO والتسويق الرقمي' }
      ]
    }
  };

  ['fa', 'tr', 'en', 'ru', 'ar'].forEach((lang) => {
    const L = window.BIZDAVAR_LOCALES[lang];
    if (!L) return;
    L.pages = L.pages || {};
    L.pages.whatsappLink = Object.assign(L.pages.whatsappLink || {}, seo[lang]);
    L.whatsappLinkPage = pages[lang];
  });
})();
