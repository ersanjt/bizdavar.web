bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'tools', name: toolsLabel, url: 'pages/tools' },
        { page: 'myIp', url: 'pages/what-is-my-ip' }
      ];
      injectPageSeo('myIp', {
        canonical: 'https://bizdavar.com/pages/what-is-my-ip',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: 'myIpPage.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('myIpPage.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initFreeTool === 'function') window.initFreeTool();
    });
