/**
 * Bizdavar — Path resolver
 * مسیرهای نسبی بر اساس عمق صفحه (data-depth روی body)
 */
(function () {
  const depth = parseInt(document.body.dataset.depth || '0', 10);
  const root = depth > 0 ? '../'.repeat(depth) : '';

  function isAssetPath(p) {
    return /(^|\/)assets\//.test(p)
      || /\.(css|js|png|jpe?g|webp|svg|gif|woff2?|ico|json|txt|xml|pdf)(\?|#|$)/i.test(p);
  }

  /** Strip .html from internal page links (not assets) */
  function prettifyInternalPath(relativeOut) {
    if (!relativeOut || isAssetPath(relativeOut)) return relativeOut;
    let o = relativeOut;
    if (/(^|\/)index\.html([#?]|$)/.test(o)) {
      o = o.replace(/index\.html/, '');
      if (o === '' || o === './') return './';
      if (o.endsWith('/') && o.length > 1) return o.slice(0, -1) || './';
      return o || './';
    }
    return o.replace(/\.html(?=[#?]|$)/, '') || './';
  }

  window.BD_prettifyPath = prettifyInternalPath;

  /** Root-absolute URL for any site asset (immune to /pages/foo/ trailing slashes). */
  window.resolveAssetPath = function (relativeFromRoot) {
    if (!relativeFromRoot) return '/assets/';
    if (/^(https?:|data:|\/)/.test(relativeFromRoot)) return relativeFromRoot;
    return '/' + relativeFromRoot.replace(/^\//, '');
  };

  window.resolvePath = function (relativeFromRoot) {
    if (!relativeFromRoot) return root || './';
    if (/^(https?:|mailto:|tel:|#)/.test(relativeFromRoot)) return relativeFromRoot;
    const clean = relativeFromRoot.replace(/^\//, '');
    if (clean.startsWith('assets/')) return window.resolveAssetPath(clean);
    const joined = root + clean;
    return prettifyInternalPath(joined);
  };

  /** Root-absolute internal page URL — same on every page depth (/pages/contact) */
  window.resolvePagePath = function (href) {
    if (!href) return '/';
    if (/^(https?:|mailto:|tel:)/.test(href)) return href;
    if (href.startsWith('#')) return href;

    const hashIdx = href.indexOf('#');
    const hash = hashIdx >= 0 ? href.slice(hashIdx) : '';
    let pathPart = (hashIdx >= 0 ? href.slice(0, hashIdx) : href).replace(/^\//, '');

    if (pathPart === '' || pathPart === 'index.html' || pathPart === 'index' || pathPart === './') {
      return hash ? '/' + hash : '/';
    }

    const knownPages = new Set([
      'about', 'services', 'portfolio', 'blog', 'contact', 'privacy', 'fast', 'vega',
      'prosense', 'teltonika', 'gamak', 'digi-system', 'teraoka', 'bz-diamond', 'supplify-trade', 'kaya-one', 'smm-turk', 'fxguard-exchange', 'biztejarat',
      'products', 'biztab', 'bizsanitizer-v5', 'fxguard', 'bizswap'
    ]);
    const stem = pathPart.replace(/\.html$/i, '').split('/').pop();
    if (!pathPart.startsWith('pages/') && knownPages.has(stem)) {
      pathPart = `pages/${pathPart}`;
    } else if (pathPart.startsWith('articles/')) {
      pathPart = `pages/${pathPart}`;
    }

    pathPart = pathPart.replace(/\.html$/i, '');
    if (pathPart === 'index') return hash ? '/' + hash : '/';

    const base = '/' + pathPart + hash;
    const locale = window.BIZDAVAR_LOCALE_URL?.currentLocale?.() || 'fa';
    return window.BIZDAVAR_LOCALE_URL
      ? window.BIZDAVAR_LOCALE_URL.toLocalePath(locale, base)
      : base;
  };

  function fixInternalPageRefs() {
    document.querySelectorAll('a[href]').forEach(el => {
      const href = el.getAttribute('href');
      if (!href || /^(https?:|mailto:|tel:|#|\/)/.test(href)) return;
      if (/^(pages\/|\.\.\/|articles\/)/.test(href) || href === 'index.html' || href === './') {
        el.setAttribute('href', window.resolvePagePath(href));
        return;
      }
      const stem = href.replace(/[#?].*$/, '').replace(/\.html$/, '');
      if (/^[a-z0-9-]+$/i.test(stem)) {
        el.setAttribute('href', window.resolvePagePath(href));
      }
    });
  }

  window.BIZDAVAR_PATHS = {
    depth,
    root,
    styles: '/assets/styles/',
    scripts: '/assets/scripts/',
    images: '/assets/images/',
    brand: '/assets/images/brand/',
    content: '/assets/images/content/',
    icons: '/assets/images/icons/',
    partners: '/assets/images/partners/'
  };

  function fixRelativeAssetRefs() {
    const toRoot = (url) => {
      if (!url || /^(https?:|data:|\/|#|mailto:|tel:)/.test(url)) return null;
      const m = String(url).match(/^(?:\.\.\/)*(assets\/.*)$/);
      return m ? '/' + m[1] : null;
    };
    document.querySelectorAll('img[src], link[href]').forEach(el => {
      const attr = el.hasAttribute('src') ? 'src' : 'href';
      const fixed = toRoot(el.getAttribute(attr));
      if (fixed) el.setAttribute(attr, fixed);
    });
  }

  window.fixRelativeAssetRefs = fixRelativeAssetRefs;
  fixRelativeAssetRefs();
  fixInternalPageRefs();
  document.addEventListener('DOMContentLoaded', () => {
    fixRelativeAssetRefs();
    fixInternalPageRefs();
  });
})();
