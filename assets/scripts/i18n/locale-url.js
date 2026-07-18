/**
 * Locale URL helpers — fa at root, tr/en under /tr/ and /en/
 * Primary: fa (Persian) · Secondary: tr · Third: en
 */
(function () {
  var BASE = 'https://bizdavar.com';
  var DEFAULT = 'fa';
  var PREFIXED = { tr: true, en: true };

  function splitPath(pathname) {
    var p = pathname || '/';
    if (p.charAt(0) !== '/') p = '/' + p;
    p = p.replace(/\/+$/, '') || '/';
    var parts = p.split('/').filter(Boolean);
    if (parts.length && PREFIXED[parts[0]]) {
      return {
        locale: parts[0],
        path: '/' + parts.slice(1).join('/') || '/'
      };
    }
    return { locale: DEFAULT, path: p };
  }

  function normalizePagePath(pagePath) {
    if (!pagePath || pagePath === '/' || pagePath === './') return '/';
    var hashIdx = pagePath.indexOf('#');
    var hash = hashIdx >= 0 ? pagePath.slice(hashIdx) : '';
    var part = (hashIdx >= 0 ? pagePath.slice(0, hashIdx) : pagePath).replace(/^\//, '');

    if (part === '' || part === 'index' || part === 'index.html') return '/' + hash;

    var knownPages = {
      about: 1, services: 1, portfolio: 1, blog: 1, contact: 1, privacy: 1, fast: 1,
      vega: 1, prosense: 1, teltonika: 1, gamak: 1, 'digi-system': 1, teraoka: 1,
      'bz-diamond': 1, 'supplify-trade': 1, 'kaya-one': 1, 'smm-turk': 1, 'fxguard-exchange': 1, biztejarat: 1, products: 1, biztab: 1, 'bizsanitizer-v5': 1,
      fxguard: 1, bizswap: 1
    };

    if (part.indexOf('pages/') === 0) {
      part = part.replace(/\.html$/, '');
    } else if (part.indexOf('articles/') === 0) {
      part = 'pages/' + part.replace(/\.html$/, '');
    } else {
      var stem = part.replace(/\.html$/, '').split('/').pop();
      if (knownPages[stem]) part = 'pages/' + stem;
      else if (part.indexOf('.') === -1 && knownPages[part.replace(/\.html$/, '')]) {
        part = 'pages/' + part.replace(/\.html$/, '');
      }
    }

    part = part.replace(/\.html$/, '');
    if (part === 'pages/index') return '/' + hash;
    return '/' + part + hash;
  }

  function toLocalePath(locale, pagePath) {
    var norm = normalizePagePath(pagePath);
    var hashIdx = norm.indexOf('#');
    var hash = hashIdx >= 0 ? norm.slice(hashIdx) : '';
    var base = hashIdx >= 0 ? norm.slice(0, hashIdx) : norm;

    if (!locale || locale === DEFAULT) {
      return (base === '/' ? '/' : base) + hash;
    }
    if (base === '/') return '/' + locale + '/' + hash.replace(/^#/, '#');
    return '/' + locale + base + hash;
  }

  function toAbsolute(locale, pagePath) {
    var rel = toLocalePath(locale, pagePath);
    if (rel === '/') return BASE + '/';
    return BASE + rel;
  }

  function hreflangUrls(pagePath) {
    return {
      fa: toAbsolute('fa', pagePath),
      tr: toAbsolute('tr', pagePath),
      en: toAbsolute('en', pagePath),
      'x-default': toAbsolute('fa', pagePath)
    };
  }

  function currentPagePath() {
    return splitPath(window.location.pathname).path;
  }

  function currentLocale() {
    return splitPath(window.location.pathname).locale;
  }

  function isPrefixedLocale() {
    return !!PREFIXED[splitPath(window.location.pathname).locale];
  }

  /** Skip geo redirects — crawlers must see the exact URL from sitemap/hreflang */
  function isSearchBot() {
    var ua = String(navigator.userAgent || '').toLowerCase();
    return /googlebot|google-inspectiontool|storebot-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|applebot|petalbot|facebot|facebookexternalhit|twitterbot|linkedinbot|semrushbot|ahrefsbot|mj12bot|dotbot|rogerbot/i.test(ua);
  }

  function localizeCanonical(url, locale) {
    try {
      var u = new URL(url, BASE);
      var parsed = splitPath(u.pathname);
      return toAbsolute(locale || parsed.locale, parsed.path);
    } catch (_) {
      return url;
    }
  }

  window.BIZDAVAR_LOCALE_URL = {
    BASE: BASE,
    DEFAULT: DEFAULT,
    LOCALES: ['fa', 'tr', 'en'],
    splitPath: splitPath,
    normalizePagePath: normalizePagePath,
    toLocalePath: toLocalePath,
    toAbsolute: toAbsolute,
    hreflangUrls: hreflangUrls,
    currentPagePath: currentPagePath,
    currentLocale: currentLocale,
    isPrefixedLocale: isPrefixedLocale,
    isSearchBot: isSearchBot,
    localizeCanonical: localizeCanonical
  };
})();
