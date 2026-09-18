/**
 * Motorcycle SKU pages — BRAKESHOP-style buy box, gallery, sticky dock.
 */
(function () {
  const COPY = {
    fa: {
      wa: 'پرسش در واتساپ',
      original: 'کالای تامین‌شده با کد سازنده',
      assureTitle: 'ضمانت تامین فروشگاه موتور',
      assure: 'قیمت دلاری تحویل ایران است. سایز، رنگ و موجودی قبل از ارسال تأیید می‌شود.',
      stock: 'موجودی را بپرسید'
    },
    tr: {
      wa: 'WhatsApp ile sor',
      original: 'Üretici kodlu tedarik ürünü',
      assureTitle: 'Motosiklet tedarik güvencesi',
      assure: 'Kart fiyatı İran teslim USD. Beden, renk ve stok siparişten önce doğrulanır.',
      stock: 'Stoku sorun'
    },
    en: {
      wa: 'Ask on WhatsApp',
      original: 'Supplied item with maker code',
      assureTitle: 'Motorcycle supply guarantee',
      assure: 'Card price is Iran-delivery USD. Size, colour and stock are confirmed before dispatch.',
      stock: 'Ask about stock'
    },
    ru: {
      wa: 'Спросить в WhatsApp',
      original: 'Поставка с кодом производителя',
      assureTitle: 'Гарантия поставки',
      assure: 'Цена в долларах с доставкой в Иран. Размер, цвет и наличие уточняются до отправки.',
      stock: 'Уточните наличие'
    },
    ar: {
      wa: 'اسأل عبر واتساب',
      original: 'صنف توريد برمز المصنع',
      assureTitle: 'ضمان توريد متجر الدراجة',
      assure: 'السعر بالدولار لتسليم إيران. المقاس واللون والتوفر تُؤكد قبل الإرسال.',
      stock: 'اسأل عن التوفر'
    }
  };

  function lang() {
    const code = String(document.documentElement.lang || 'fa').slice(0, 2).toLowerCase();
    return COPY[code] ? code : 'fa';
  }

  function esc(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function ensureCss() {
    if (document.querySelector('link[href*="shop-pdp.css"]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/styles/shop-pdp.css?v=20260919w';
    document.head.appendChild(link);
  }

  function waHref(title) {
    const num = (window.BD_CTX && typeof window.BD_CTX.getPrimaryWhatsapp === 'function')
      ? window.BD_CTX.getPrimaryWhatsapp()
      : '989305880135';
    const c = COPY[lang()];
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(c.wa + '\n' + title + '\n' + location.href);
  }

  function boot() {
    const root = document.querySelector('.am-pdp');
    if (!root || root.dataset.shopReady === '1') return;
    root.dataset.shopReady = '1';
    root.classList.add('shop-pdp');
    ensureCss();

    const gallery = root.querySelector('.am-pdp__gallery');
    const buy = gallery && gallery.nextElementSibling;
    if (buy) buy.classList.add('shop-pdp__buy');
    const h1 = root.querySelector('h1');
    const title = h1 ? h1.textContent.trim() : '';
    const c = COPY[lang()];
    const priceEl = root.querySelector('.am-pdp__price');
    const img = root.querySelector('.am-pdp__main');
    const specStock = Array.from(root.querySelectorAll('.am-pdp__specs dd')).pop();

    const back = buy && buy.querySelector('p > a[href*="motorcycle"]');
    if (back && back.parentElement) back.parentElement.hidden = true;

    if (buy && !buy.querySelector('.shop-pdp__wa')) {
      const wa = document.createElement('a');
      wa.className = 'shop-pdp__wa';
      wa.target = '_blank';
      wa.rel = 'noopener noreferrer';
      wa.href = waHref(title);
      wa.textContent = c.wa;
      if (priceEl) priceEl.after(wa);
      else buy.insertBefore(wa, buy.firstChild);

      const badge = document.createElement('div');
      badge.className = 'shop-pdp__badge';
      badge.textContent = c.original;
      wa.after(badge);

      const assure = document.createElement('div');
      assure.className = 'shop-pdp__assure';
      assure.innerHTML = '<h2>' + esc(c.assureTitle) + '</h2><p>' + esc(c.assure) + '</p>';
      buy.appendChild(assure);
    }

    if (!document.querySelector('.shop-pdp__dock')) {
      const dock = document.createElement('div');
      dock.className = 'shop-pdp__dock';
      const src = img ? img.getAttribute('src') : '';
      const price = priceEl ? priceEl.textContent.trim() : '';
      const stock = specStock ? specStock.textContent.trim() : c.stock;
      const out = /ناموجود|yok|out|нет|غير/i.test(stock);
      dock.innerHTML =
        '<div class="shop-pdp__dock-art">' + (src ? '<img src="' + esc(src) + '" alt="">' : '') + '</div>' +
        '<div><strong>' + esc(title) + '</strong><small>' + esc(stock) + '</small></div>' +
        '<p class="shop-pdp__dock-price" dir="ltr">' + esc(price) + '</p>' +
        '<span class="shop-pdp__stock' + (out ? ' is-out' : ' is-in') + '">' + esc(stock) + '</span>';
      root.appendChild(dock);
      document.body.classList.add('has-shop-pdp-dock');
    }

    if (typeof window.renderBreadcrumbs === 'function' && title) {
      window.renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply' },
        { page: 'autoMoto', url: 'auto-moto' },
        { page: 'motorcycle', url: 'motorcycle' },
        { name: title }
      ]);
    }
  }

  if (typeof window.bizdavarPageInit === 'function') window.bizdavarPageInit(boot);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
