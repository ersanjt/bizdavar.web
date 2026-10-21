bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'tools', name: toolsLabel, url: 'pages/tools' },
        { page: 'unitConverter', url: 'pages/unit-converter' }
      ];
      injectPageSeo('unitConverter', {
        canonical: 'https://bizdavar.com/pages/unit-converter',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: 'unitConverterPage.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('unitConverterPage.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initFreeTool === 'function') window.initFreeTool();
    });
