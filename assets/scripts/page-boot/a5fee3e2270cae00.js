bizdavarPageInit(function () {
      const renderChrome = window.__bizdavarChrome || window.renderSiteChrome;
      if (typeof renderChrome === 'function') renderChrome();

      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'fast', url: 'pages/fast' }
      ];
      injectPageSeo('fast', {
        canonical: 'https://bizdavar.com/pages/fast',
        ogImage: 'assets/images/content/fast-hero.svg'
      });
      setupWhatsappLinks();
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      const initFast = window.__initFastPage || window.initFastPage;
      if (typeof initFast === 'function') initFast();
      renderGeoStrip('geoStrip', {
        textKey: 'fastPage.geoText',
        text: 'سایت انگلیسی LTR برای آمریکا و اروپا — تحویل ۵روزه، Stripe، Zoom/Meet و فاکتور USD یا EUR. فارسی/RTL زبان دوم.'
      });
      if (window.injectFastProductSchema) window.injectFastProductSchema();
      if (window.renderFastRelatedLinks) window.renderFastRelatedLinks();
    });
