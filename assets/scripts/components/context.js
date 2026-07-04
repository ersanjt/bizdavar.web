/**
 * Bizdavar — shared component context (paths, i18n helpers, schema utils)
 * @requires BIZDAVAR_CONFIG, resolvePath, BD_ICON
 */
(function () {
  const C = window.BIZDAVAR_CONFIG;
  if (!C) return;

  const R = C.routes;
  const A = C.assets;
  const path = (p) => window.resolvePath(p);
  const pagePath = (p) => (window.resolvePagePath ? window.resolvePagePath(p) : path(p));

  /** Unify data-page variants with URL slugs and route keys */
  const PAGE_ID_ALIASES = {
    bizsanitizerV5: 'bizsanitizer-v5',
    digiSystem: 'digi-system',
    bzDiamond: 'bz-diamond'
  };
  function normalizePageId(id) {
    return PAGE_ID_ALIASES[id] || id;
  }
  const currentPage = normalizePageId(document.body.dataset.page || 'home');

  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const linkArrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : '');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));

  function pageDepth() {
    return parseInt(document.body?.dataset?.depth || '0', 10);
  }

  function splitUrl(url) {
    const hashIdx = url.indexOf('#');
    if (hashIdx === -1) return { pathPart: url, hash: '' };
    return { pathPart: url.slice(0, hashIdx), hash: url.slice(hashIdx) };
  }

  /** Normalize any internal href to site-root relative path (e.g. pages/contact.html) */
  function toSiteRootPath(pathPart) {
    if (!pathPart) return '';
    let n = pathPart.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
    if (n === 'index' || n === 'index.html' || n === '') return '';
    if (n.startsWith('pages/')) {
      return n.endsWith('.html') ? n : `${n}.html`;
    }

    const knownPages = new Set([
      'about', 'services', 'portfolio', 'blog', 'contact', 'privacy', 'fast', 'vega',
      'prosense', 'teltonika', 'gamak', 'digi-system', 'teraoka', 'bz-diamond', 'biztejarat',
      'products', 'biztab', 'bizsanitizer-v5', 'fxguard', 'bizswap'
    ]);
    const stem = n.replace(/\.html$/, '');
    if (knownPages.has(stem)) return `pages/${stem}.html`;

    const depth = pageDepth();
    if (depth === 2 && document.body?.dataset?.page === 'article') {
      return stem.includes('.') ? `pages/articles/${n}` : `pages/articles/${stem}.html`;
    }
    return stem.includes('.') ? `pages/${n}` : `pages/${stem}.html`;
  }

  function prettyPath(link) {
    if (window.BD_prettifyPath) return window.BD_prettifyPath(link);
    return link.replace(/\.html(?=[#?]|$)/, '').replace(/index\.html$/, '') || './';
  }

  /** Root-absolute internal link — consistent from any page depth */
  function siteLink(url) {
    if (!url || url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#')) {
      return url;
    }
    if (url.startsWith('/')) return url;
    const { pathPart, hash } = splitUrl(url);
    const siteRoot = toSiteRootPath(pathPart);
    return pagePath((siteRoot || 'index.html') + hash);
  }

  function absUrl(urlPath) {
    if (!urlPath) return `${C.baseUrl}/`;
    if (urlPath.startsWith('http')) return urlPath;
    const { pathPart, hash } = splitUrl(urlPath);
    const siteRoot = toSiteRootPath(pathPart);
    if (siteRoot === '') {
      return `${C.baseUrl}/${hash}`.replace(/\/#/, '#').replace(/\/$/, '') || `${C.baseUrl}/`;
    }
    const clean = siteRoot.replace(/\.html$/i, '');
    return `${C.baseUrl}/${clean}${hash}`;
  }

  function buildContactPoints() {
    const channels = C.contact.channels || [];
    const langs = ['Persian', 'English', 'Turkish'];
    if (channels.length) {
      return channels.map(ch => ({
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: ch.tel,
        areaServed: ch.id === 'ir' ? 'IR' : 'TR',
        availableLanguage: langs,
        contactOption: 'https://schema.org/WhatsApp'
      }));
    }
    if (C.contact.phone) {
      return [{
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: C.contact.phone,
        email: C.contact.email,
        availableLanguage: langs
      }];
    }
    return [{
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: C.contact.email,
      availableLanguage: langs
    }];
  }

  function orgAddress() {
    const hq = C.geo?.headquarters;
    return {
      '@type': 'PostalAddress',
      addressLocality: hq?.city || 'Istanbul',
      addressCountry: hq?.countryCode || 'TR'
    };
  }

  function breadcrumbHref(url) {
    if (!url || /^(https?:|mailto:|tel:|#)/.test(url)) return url || '/';
    const { pathPart, hash } = splitUrl(url);
    const siteRoot = toSiteRootPath(pathPart);
    return pagePath((siteRoot || 'index.html') + hash);
  }

  function localizeCrumbs(items) {
    const I = window.BIZDAVAR_I18N;
    if (!I || !items) return items;
    return items.map(item => {
      if (!item.page) return item;
      const name = item.page === 'home'
        ? I.t('nav.home', item.name)
        : I.pageCrumb(item.page, item.name);
      return { ...item, name };
    });
  }

  function buildWaUrl(num) {
    if (!num) return siteLink(R.contact);
    const base = C.contact.whatsappMessage || '';
    let msg = base;
    if (typeof location !== 'undefined' && location.href) {
      msg = `${base}\n${location.href}`;
    }
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  }

  window.BD_CTX = {
    C,
    R,
    A,
    path,
    pagePath,
    siteLink,
    currentPage,
    normalizePageId,
    buildWaUrl,
    get wa() {
      return C.contact.whatsapp ? buildWaUrl(C.contact.whatsapp) : siteLink(R.contact);
    },
    ic,
    linkArrow,
    t,
    absUrl,
    buildContactPoints,
    orgAddress,
    breadcrumbHref,
    localizeCrumbs
  };
})();
