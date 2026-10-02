/**
 * Renders the AED shop from window.BIZDAVAR_DIRHAM_SHOP.
 */
(function () {
  var CATS = ['industrial', 'instrument', 'electronic', 'other'];

  function t(key, fb) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb == null ? key : fb);
  }

  function locale() {
    var loc = window.BIZDAVAR_LOCALE_URL && window.BIZDAVAR_LOCALE_URL.currentLocale
      ? window.BIZDAVAR_LOCALE_URL.currentLocale()
      : (document.documentElement.lang || 'fa');
    return String(loc || 'fa').slice(0, 2);
  }

  function textOf(value) {
    if (value == null || value === '') return '';
    if (typeof value === 'string') return value;
    var lang = locale();
    return value[lang] || value.en || value.fa || value.ar || value.tr || value.ru || '';
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatAed(amount) {
    var lang = locale();
    var map = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-AE', ru: 'ru-RU', ar: 'ar-AE' };
    var num;
    try {
      num = new Intl.NumberFormat(map[lang] || 'en-AE', { maximumFractionDigits: 2 }).format(amount);
    } catch (e) {
      num = String(amount);
    }
    if (lang === 'fa' || lang === 'ar') return num + ' درهم';
    if (lang === 'en') return 'AED ' + num;
    return num + ' AED';
  }

  function priceLabel(product) {
    if (typeof product.price === 'number' && isFinite(product.price)) return formatAed(product.price);
    return t('shopPage.priceOnRequest', 'استعلام قیمت');
  }

  function catalog() {
    var shop = window.BIZDAVAR_DIRHAM_SHOP || {};
    var items = Array.isArray(shop.products) ? shop.products.slice() : [];
    return items.filter(function (item) { return item && item.id && textOf(item.name); });
  }

  function activeCategory() {
    var hash = (location.hash || '').replace('#', '');
    if (hash === 'all') return 'all';
    return CATS.indexOf(hash) >= 0 ? hash : 'all';
  }

  function render() {
    var grid = document.getElementById('shopGrid');
    var filters = document.getElementById('shopFilters');
    var countEl = document.getElementById('shopCount');
    if (!grid || !filters) return;

    var lang = locale();
    var items = catalog();
    var cat = activeCategory();
    var visible = cat === 'all' ? items : items.filter(function (item) { return item.category === cat; });

    var chips = ['all'].concat(CATS).map(function (id) {
      var pressed = id === cat ? 'true' : 'false';
      var current = id === cat ? ' aria-current="true"' : '';
      return '<button type="button" class="shop-filters__btn' + (id === cat ? ' is-active' : '') + '" data-shop-cat="' + id + '" aria-pressed="' + pressed + '"' + current + '>' + esc(t('shopPage.filters.' + id, id)) + '</button>';
    }).join('');
    filters.innerHTML = chips;

    if (countEl) {
      countEl.textContent = t('shopPage.count', '{n} کالا').replace('{n}', String(visible.length));
    }

    if (!visible.length) {
      var title = items.length ? t('shopPage.emptyFilter', 'در این دسته هنوز کالایی نیست.') : t('shopPage.emptyTitle', 'این فهرست هنوز خالی است');
      var body = items.length ? '' : '<p>' + esc(t('shopPage.emptyBody', '')) + '</p>';
      grid.innerHTML = '<div class="shop-empty" role="status"><h2>' + esc(title) + '</h2>' + body + '</div>';
      return;
    }

    grid.innerHTML = visible.map(function (item) {
      var name = textOf(item.name);
      var summary = textOf(item.summary);
      var price = priceLabel(item);
      var catLabel = t('shopPage.filters.' + (CATS.indexOf(item.category) >= 0 ? item.category : 'other'), item.category || '');
      var img = item.image
        ? '<img src="' + esc(window.resolveAssetPath ? window.resolveAssetPath(item.image) : item.image) + '" alt="' + esc(name) + '" loading="lazy">'
        : '<span class="shop-card__mark" aria-hidden="true">' + esc(catLabel.slice(0, 1)) + '</span>';
      var sku = item.sku ? '<p class="shop-card__sku">' + esc(t('shopPage.sku', 'کد')) + ' ' + esc(item.sku) + '</p>' : '';
      var msg = t('shopPage.orderMessage', 'سلام، سفارش «{name}». قیمت: {price}')
        .replace('{name}', name)
        .replace('{price}', price);
      var href = typeof window.getWhatsappUrl === 'function' ? window.getWhatsappUrl(msg) : '/pages/contact';
      return '<article class="shop-card">' +
        '<div class="shop-card__media">' + img + '</div>' +
        '<div class="shop-card__body">' +
          '<p class="shop-card__cat">' + esc(catLabel) + '</p>' +
          '<h2>' + esc(name) + '</h2>' +
          (summary ? '<p>' + esc(summary) + '</p>' : '') +
          sku +
          '<p class="shop-card__price" lang="' + esc(lang) + '">' + esc(price) + '</p>' +
          '<a class="btn btn--primary" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + esc(t('shopPage.order', 'سفارش در واتساپ')) + '</a>' +
        '</div></article>';
    }).join('');
  }

  function boot() {
    if (!document.body || document.body.getAttribute('data-page') !== 'shop') return;
    render();
    var filters = document.getElementById('shopFilters');
    if (filters && !filters.dataset.bound) {
      filters.dataset.bound = '1';
      filters.addEventListener('click', function (event) {
        var btn = event.target.closest('[data-shop-cat]');
        if (!btn) return;
        var id = btn.getAttribute('data-shop-cat');
        var next = id === 'all' ? '#all' : '#' + id;
        if (location.hash !== next) history.replaceState(null, '', next);
        render();
      });
    }
  }

  window.renderDirhamShop = render;
  document.addEventListener('bizdavar:locale', render);
  window.addEventListener('hashchange', function () {
    if (document.body && document.body.getAttribute('data-page') === 'shop') render();
  });
  if (typeof window.bizdavarPageInit === 'function') window.bizdavarPageInit(boot);
  else boot();
})();
