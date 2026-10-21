bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'tools', name: toolsLabel, url: 'pages/tools' },
        { page: 'utmBuilder', url: 'pages/utm-builder' }
      ];
      injectPageSeo('utmBuilder', {
        canonical: 'https://bizdavar.com/pages/utm-builder',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: 'utmBuilderPage.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('utmBuilderPage.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initFreeTool === 'function') window.initFreeTool();
    });
