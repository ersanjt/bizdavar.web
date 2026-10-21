bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'tools', url: 'pages/tools' }
      ];
      injectPageSeo('tools', {
        canonical: 'https://bizdavar.com/pages/tools',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: 'toolsPage.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('toolsPage.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initFreeTool === 'function') window.initFreeTool();
    });
