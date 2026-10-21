bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'tools', name: toolsLabel, url: 'pages/tools' },
        { page: 'speedTest', url: 'pages/speed-test' }
      ];
      injectPageSeo('speedTest', {
        canonical: 'https://bizdavar.com/pages/speed-test',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: 'speedTestPage.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('speedTestPage.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initSpeedTestPage === 'function') window.initSpeedTestPage();
    });
