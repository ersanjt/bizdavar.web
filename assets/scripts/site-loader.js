/**
 * Loads shared site scripts in one place — pages declare only their extras.
 *
 * Core slots (all optional, comma-separated paths under /assets/scripts/):
 *   data-after-config      — after site-config.js
 *   data-after-locales     — after locales.js
 *   data-after-seo         — after locale-seo.js
 *   data-after-page-i18n   — after page-i18n.js
 *   data-before-main       — after grids.js (*-page.js, lib/*)
 *   data-extra             — shorthand: *-page.js → before-main; else → after-page-i18n
 */
(function () {
  if (!window.__bizdavarImgFallback) {
    window.__bizdavarImgFallback = true;
    function onImgError(event) {
      var el = event.target;
      if (!el || el.tagName !== 'IMG') return;
      if (el.getAttribute('data-fallback-handled') === '1') return;
      var fb = el.getAttribute('data-fallback');
      function finish() {
        var emptySel = el.getAttribute('data-fallback-empty');
        if (emptySel) {
          var box = el.closest(emptySel);
          if (box) box.classList.add('owned-product-card__media--empty');
        }
        if (el.hasAttribute('data-fallback-broken')) el.classList.add('is-broken');
        if (el.hasAttribute('data-fallback-label')) {
          var span = document.createElement('span');
          span.className = 'client-item__name';
          span.textContent = el.getAttribute('alt') || '';
          if (el.parentNode) el.parentNode.replaceChild(span, el);
        }
      }
      if (fb) {
        var same = false;
        try { same = new URL(fb, document.baseURI).href === el.src; } catch (err) { same = false; }
        if (el.getAttribute('data-fallback-used') === '1' || same) {
          el.setAttribute('data-fallback-handled', '1');
          finish();
          return;
        }
        el.setAttribute('data-fallback-used', '1');
        if (el.hasAttribute('data-fallback-clear-srcset')) el.removeAttribute('srcset');
        el.src = fb;
        return;
      }
      el.setAttribute('data-fallback-handled', '1');
      if (el.hasAttribute('data-hide-broken')) {
        el.style.display = 'none';
        return;
      }
      if (el.hasAttribute('data-remove-broken')) {
        el.remove();
        return;
      }
      if (el.hasAttribute('data-fallback-label')) finish();
    }
    document.addEventListener('error', onImgError, true);
    function repairBrokenImages() {
      var nodes = document.querySelectorAll('img[data-fallback], img[data-hide-broken], img[data-remove-broken], img[data-fallback-label]');
      for (var i = 0; i < nodes.length; i++) {
        var img = nodes[i];
        if (img.complete && img.naturalWidth === 0) onImgError({ target: img });
      }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', repairBrokenImages);
    repairBrokenImages();
  }

  var el = document.currentScript;
  if (!el) return;

  var BASE = '/assets/scripts/';
  var ASSET_VER = '20261028g';

  // Inline page boots run before deferred chain scripts; queue until bootstrap.js.
  window.bizdavarPageInit = window.bizdavarPageInit || function (fn) {
    if (typeof fn !== 'function') return;
    (window.__bizdavarBootQ = window.__bizdavarBootQ || []).push(fn);
  };
  window.bizdavarBootPage = window.bizdavarBootPage || function (opts) {
    (window.__bizdavarBootPageQ = window.__bizdavarBootPageQ || []).push(opts);
  };

  function split(name) {
    return (el.getAttribute(name) || '')
      .split(',')
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  var afterConfig = split('data-after-config');
  var afterLocales = split('data-after-locales');
  var afterSeo = split('data-after-seo');
  var afterPageI18n = split('data-after-page-i18n');
  var beforeMain = split('data-before-main');

  split('data-extra').forEach(function (p) {
    if (/-page\.js$/.test(p) || /^lib\//.test(p)) beforeMain.push(p);
    else afterPageI18n.push(p);
  });

  function localeFromPath() {
    var path = '';
    try { path = String(location.pathname || ''); } catch (_) {}
    var first = path.replace(/^\/+/, '').split('/')[0];
    if (first === 'tr' || first === 'en' || first === 'ru' || first === 'ar') return first;
    return '';
  }
  var loc = (window.BIZDAVAR_LOCALE_URL && window.BIZDAVAR_LOCALE_URL.currentLocale)
    ? window.BIZDAVAR_LOCALE_URL.currentLocale()
    : (localeFromPath() || String(document.documentElement.lang || 'fa').slice(0, 2).toLowerCase());
  var isArticle = document.body && (
    document.body.getAttribute('data-page') === 'article' ||
    document.body.getAttribute('data-article')
  );
  var i18nPacks = [
    'i18n/locales-pages.js',
    'i18n/locale-seo.js',
    'i18n/locales-ru-ar.js',
    'i18n/blue-print-i18n.js'
  ];
  if (isArticle) {
    i18nPacks.push('i18n/articles-body-i18n.js');
    if (loc === 'ru' || loc === 'ar') i18nPacks.push('i18n/articles-body-ru-ar.js');
  }

  if (document.querySelector('.am-pdp')) beforeMain.push('auto-moto-pdp.js');

  var chain = [
    'config/paths.js',
    'config/site-config.js',
    'config/blue-print-nav.js',
    'i18n/locale-url.js'
  ].concat(afterConfig, [
    'i18n/locales.js'
  ], afterLocales, i18nPacks, afterSeo, [
    'i18n/i18n.js',
    'i18n/page-i18n.js'
  ], afterPageI18n, [
    'components/page-shell.js',
    'components/biz-icons.js',
    'components/context.js',
    'components/chrome.js',
    'components/schema.js',
    'components/grids.js',
    'components/lead-track.js'
  ], beforeMain, [
    'main.js',
    'conversions.js',
    'premium.js',
    'nav-flow.js',
    'components/site-boot.js',
    'i18n/bootstrap.js'
  ]);

  document.write(chain.map(function (p) {
    return '<script defer src="' + BASE + p + '?v=' + ASSET_VER + '"><\/script>';
  }).join('\n'));

  // Repleo chat widget — public pages only. Token is the public embed key.
  var path = '';
  try { path = String(location.pathname || ''); } catch (_) {}
  if (path.indexOf('/admin') !== 0 && !document.querySelector('script[data-repleo-widget]')) {
    var rplSc = document.createElement('script');
    rplSc.src = 'https://repleo.app/widget/repleo-widget-v4.js?v=' + new Date().getTime();
    rplSc.setAttribute('data-token', 'e6352f14c5c1cae29d61fcf3dadc620f');
    rplSc.setAttribute('data-repleo-widget', '1');
    document.head.appendChild(rplSc);
  }
})();
