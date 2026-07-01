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
  const currentPage = document.body.dataset.page || 'home';

  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const linkArrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : '');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));

  function absUrl(urlPath) {
    if (!urlPath) return `${C.baseUrl}/`;
    if (urlPath.startsWith('http')) return urlPath;
    const normalized = urlPath.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
    if (normalized === 'index.html') return `${C.baseUrl}/`;
    return `${C.baseUrl}/${normalized.replace(/^\//, '')}`;
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
    if (!url || url.startsWith('http') || url.startsWith('#')) return url;
    const depth = parseInt(document.body?.dataset?.depth || '0', 10);
    if (depth > 0 && url === 'index.html') {
      return `${'../'.repeat(depth)}index.html`;
    }
    if (depth > 0 && !url.includes('/') && url.endsWith('.html')) {
      if (depth === 1) return url;
      if (depth === 2) return `../${url}`;
    }
    return path(url);
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

  window.BD_CTX = {
    C,
    R,
    A,
    path,
    currentPage,
    get wa() {
      return C.contact.whatsapp
        ? `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappMessage)}`
        : path(R.contact);
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
