/**
 * Locale + SEO head before first paint.
 * Requires locale-url.js and seo-head.js (generated).
 */
(function () {
  var valid = function (l) { return l === 'fa' || l === 'tr' || l === 'en'; };
  var LU = window.BIZDAVAR_LOCALE_URL;

  /* Legacy ?lang= → locale path (301-style client redirect) */
  var q = new URLSearchParams(window.location.search).get('lang');
  if (q && valid(q) && LU) {
    var pagePath = LU.currentPagePath();
    var target = LU.toLocalePath(q, pagePath);
    var dest = target.split('#')[0];
    if (window.location.pathname !== dest) {
      window.location.replace(target + window.location.hash);
      return;
    }
  }

  var pathLocale = LU ? LU.currentLocale() : null;
  var stored = localStorage.getItem('bizdavar_locale');
  var manual = localStorage.getItem('bizdavar_locale_manual');
  var geoCached = sessionStorage.getItem('bizdavar_geo_locale');

  var lang = pathLocale
    || ((q && valid(q)) ? q
    : (stored && valid(stored) && manual === '1') ? stored
    : (geoCached && valid(geoCached)) ? geoCached
    : null);

  if (!lang) lang = 'fa';

  var dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  if (dir === 'ltr') document.documentElement.classList.add('is-ltr-locale');

  /* Static SEO head from build manifest (crawler-visible before main JS) */
  var seoMap = window.BIZDAVAR_SEO_HEAD;
  if (seoMap && LU) {
    var pagePath = LU.currentPagePath();
    var entry = seoMap[pagePath];
    if (entry && entry[lang]) {
      var meta = entry[lang];
      if (meta.title) document.title = meta.title;

      var descEl = document.querySelector('meta[name="description"]');
      if (meta.description) {
        if (!descEl) {
          descEl = document.createElement('meta');
          descEl.setAttribute('name', 'description');
          document.head.appendChild(descEl);
        }
        descEl.setAttribute('content', meta.description);
      }

      var canon = document.querySelector('link[rel="canonical"]');
      var canonicalUrl = LU.toAbsolute(lang, pagePath);
      if (!canon) {
        canon = document.createElement('link');
        canon.rel = 'canonical';
        document.head.appendChild(canon);
      }
      canon.href = canonicalUrl;

      document.querySelectorAll('link[data-bd-hreflang]').forEach(function (el) { el.remove(); });
      var alts = LU.hreflangUrls(pagePath);
      Object.keys(alts).forEach(function (hl) {
        var link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hl;
        link.href = alts[hl];
        link.setAttribute('data-bd-hreflang', '1');
        document.head.appendChild(link);
      });
    }
  }
})();
