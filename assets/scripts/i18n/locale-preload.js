/**
 * Apply locale to html[lang|dir] before first paint — must match resolveLocale() in i18n.js
 */
(function () {
  var q = new URLSearchParams(window.location.search).get('lang');
  var stored = localStorage.getItem('bizdavar_locale');
  var manual = localStorage.getItem('bizdavar_locale_manual');
  var geoCached = sessionStorage.getItem('bizdavar_geo_locale');
  var valid = function (l) { return l === 'fa' || l === 'tr' || l === 'en'; };
  var lang = (q && valid(q)) ? q
    : (stored && valid(stored) && manual === '1') ? stored
    : (geoCached && valid(geoCached)) ? geoCached
    : null;
  if (!lang) return;
  var dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  if (dir === 'ltr') document.documentElement.classList.add('is-ltr-locale');
})();
