/**

 * Locale + SEO head before first paint.

 * Requires locale-url.js and seo-head.js (generated).

 */

(function () {

  var valid = function (l) { return l === 'fa' || l === 'tr' || l === 'en'; };

  var LU = window.BIZDAVAR_LOCALE_URL;

  var OG_LOCALE = { fa: 'fa_IR', tr: 'tr_TR', en: 'en_US' };

  var SCHEMA_LANG = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US' };



  function hintFromNavigator() {

    var nav = String((navigator.language || navigator.userLanguage || '')).toLowerCase();

    if (nav.indexOf('tr') === 0) return 'tr';

    if (nav.indexOf('fa') === 0) return 'fa';

    if (nav.indexOf('en') === 0) return 'en';

    return null;

  }



  function setMeta(name, content) {

    if (!content) return;

    var el = document.querySelector('meta[name="' + name + '"]');

    if (!el) {

      el = document.createElement('meta');

      el.setAttribute('name', name);

      document.head.appendChild(el);

    }

    el.setAttribute('content', content);

  }



  function setOg(prop, content) {

    if (!content) return;

    var el = document.querySelector('meta[property="' + prop + '"]');

    if (!el) {

      el = document.createElement('meta');

      el.setAttribute('property', prop);

      document.head.appendChild(el);

    }

    el.setAttribute('content', content);

  }



  function setOgLocaleAlternates(lang) {

    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(function (el) {

      el.parentNode.removeChild(el);

    });

    var current = OG_LOCALE[lang] || OG_LOCALE.fa;

    ['fa_IR', 'tr_TR', 'en_US'].forEach(function (tag) {

      if (tag === current) return;

      var el = document.createElement('meta');

      el.setAttribute('property', 'og:locale:alternate');

      el.setAttribute('content', tag);

      document.head.appendChild(el);

    });

  }



  function injectEarlySeo(lang, pagePath, meta, site) {

    var canonicalUrl = LU.toAbsolute(lang, pagePath);

    var ogImage = meta.ogImage || site.defaultOgImage;

    var pageType = meta.type || 'website';



    if (meta.title) document.title = meta.title;

    setMeta('description', meta.description);

    setMeta('keywords', meta.keywords);

    setMeta('robots', site.robots);

    setMeta('author', site.siteName);



    var canon = document.querySelector('link[rel="canonical"]');

    if (!canon) {

      canon = document.createElement('link');

      canon.rel = 'canonical';

      document.head.appendChild(canon);

    }

    canon.href = canonicalUrl;

    var sitemap = document.querySelector('link[rel="sitemap"]');
    if (!sitemap) {
      sitemap = document.createElement('link');
      sitemap.rel = 'sitemap';
      sitemap.type = 'application/xml';
      sitemap.title = 'Sitemap';
      sitemap.href = site.base + '/sitemap.xml';
      document.head.appendChild(sitemap);
    }

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



    setOg('og:title', meta.title);

    setOg('og:description', meta.description);

    setOg('og:type', pageType);

    setOg('og:url', canonicalUrl);

    setOg('og:image', ogImage);

    setOg('og:image:alt', meta.title || site.siteName);

    setOg('og:site_name', site.siteName);

    setOg('og:locale', OG_LOCALE[lang] || OG_LOCALE.fa);

    setOgLocaleAlternates(lang);



    setMeta('twitter:card', site.twitterCard);

    setMeta('twitter:title', meta.title);

    setMeta('twitter:description', meta.description);

    setMeta('twitter:image', ogImage);



    /* Lightweight WebPage JSON-LD — visible to crawlers before main bundle */

    var ld = {

      '@context': 'https://schema.org',

      '@type': pageType === 'article' ? 'Article' : 'WebPage',

      '@id': canonicalUrl + '#webpage',

      url: canonicalUrl,

      name: meta.title,

      description: meta.description,

      inLanguage: SCHEMA_LANG[lang] || SCHEMA_LANG.fa,

      isPartOf: { '@id': site.base + '/#website' }

    };

    if (pageType === 'article') {

      ld.headline = meta.title;

      ld.publisher = {

        '@type': 'Organization',

        name: site.siteName,

        url: site.base + '/'

      };

    }

    var script = document.getElementById('jsonld-webpage');

    if (!script) {

      script = document.createElement('script');

      script.id = 'jsonld-webpage';

      script.type = 'application/ld+json';

      document.head.appendChild(script);

    }

    script.textContent = JSON.stringify(ld);

  }



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

  var onPrefixedLocale = LU && pathLocale && pathLocale !== LU.DEFAULT;

  var stored = localStorage.getItem('bizdavar_locale');

  var manual = localStorage.getItem('bizdavar_locale_manual');

  var geoCached = sessionStorage.getItem('bizdavar_geo_locale');



  var lang = (onPrefixedLocale ? pathLocale : null)

    || ((q && valid(q)) ? q

    : (stored && valid(stored) && manual === '1') ? stored

    : (geoCached && valid(geoCached)) ? geoCached

    : hintFromNavigator());



  if (!lang) lang = 'fa';



  var dir = lang === 'fa' ? 'rtl' : 'ltr';

  document.documentElement.lang = lang;

  document.documentElement.dir = dir;

  if (dir === 'ltr') document.documentElement.classList.add('is-ltr-locale');



  /* Static SEO head from build manifest (crawler-visible before main JS) */

  var seoMap = window.BIZDAVAR_SEO_HEAD;

  var site = window.BIZDAVAR_SEO_SITE || {

    base: 'https://bizdavar.com',

    siteName: 'Bizdavar Group',

    defaultOgImage: 'https://bizdavar.com/assets/images/content/about-hero.svg',

    twitterCard: 'summary_large_image',

    robots: 'index, follow, max-image-preview:large'

  };

  if (seoMap && LU) {

    var seoPagePath = LU.currentPagePath();

    var entry = seoMap[seoPagePath];

    if (entry && entry[lang]) {

      injectEarlySeo(lang, seoPagePath, entry[lang], site);

    }

  }

})();


