/**
 * Unified page boot — breadcrumbs, SEO, WhatsApp; chrome is handled by bootstrap.js only.
 */
(function () {
  function runCrumbs(crumbs) {
    if (!Array.isArray(crumbs) || !crumbs.length) return;
    if (typeof window.renderBreadcrumbs === 'function') window.renderBreadcrumbs(crumbs);
    if (typeof window.injectBreadcrumbSchema === 'function') window.injectBreadcrumbSchema(crumbs);
  }

  window.bizdavarBootPage = function (opts) {
    opts = opts || {};
    window.bizdavarPageInit(function () {
      if (opts.seo) {
        const seoOpts = opts.seoOptions || opts.seoOpts || {};
        if (typeof window.injectPageSeo === 'function') {
          window.injectPageSeo(opts.seo, seoOpts);
        }
      }
      runCrumbs(opts.crumbs);
      if (opts.whatsapp !== false && typeof window.setupWhatsappLinks === 'function') {
        window.setupWhatsappLinks();
      }
      if (typeof opts.init === 'function') opts.init();
    });
  };
})();
