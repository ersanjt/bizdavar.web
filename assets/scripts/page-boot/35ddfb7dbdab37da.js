bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'tools', name: toolsLabel, url: 'pages/tools' },
        { page: 'tankVolume', url: 'pages/tank-volume-calculator' }
      ];
      injectPageSeo('tankVolume', {
        canonical: 'https://bizdavar.com/pages/tank-volume-calculator',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: 'tankVolumePage.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('tankVolumePage.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initFreeTool === 'function') window.initFreeTool();
    });
