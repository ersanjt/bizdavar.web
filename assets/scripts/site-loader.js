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
  var el = document.currentScript;
  if (!el) return;

  var BASE = '/assets/scripts/';
  var ASSET_VER = '20260828a';

  // Inline page boots run before deferred chain scripts; queue until bootstrap.js.
  window.bizdavarPageInit = window.bizdavarPageInit || function (fn) {
    if (typeof fn !== 'function') return;
    (window.__bizdavarBootQ = window.__bizdavarBootQ || []).push(fn);
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

  var loc = (window.BIZDAVAR_LOCALE_URL && window.BIZDAVAR_LOCALE_URL.currentLocale)
    ? window.BIZDAVAR_LOCALE_URL.currentLocale()
    : String(document.documentElement.lang || 'fa').slice(0, 2).toLowerCase();
  var isArticle = document.body && (
    document.body.getAttribute('data-page') === 'article' ||
    document.body.getAttribute('data-article')
  );
  var i18nPacks = [
    'i18n/locales-pages.js',
    'i18n/locale-seo.js'
  ];
  if (loc === 'ru' || loc === 'ar') i18nPacks.push('i18n/locales-ru-ar.js');
  if (isArticle) i18nPacks.push('i18n/articles-bodies.js');

  var chain = [
    'config/paths.js',
    'config/site-config.js'
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
    'premium.js',
    'nav-flow.js',
    'components/site-boot.js',
    'i18n/bootstrap.js'
  ]);

  document.write(chain.map(function (p) {
    return '<script defer src="' + BASE + p + '?v=' + ASSET_VER + '"><\/script>';
  }).join('\n'));
})();
