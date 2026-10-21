bizdavarPageInit(function () {
      const renderChrome = window.__bizdavarChrome || window.renderSiteChrome;
      if (typeof renderChrome === 'function') renderChrome();

      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'pages/portfolio' }
      ];
      injectPageSeo('portfolio', {
        canonical: 'https://bizdavar.com/pages/portfolio',
        ogImage: 'assets/images/content/about-hero.jpg'
      });
      setupWhatsappLinks();
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      initPortfolioPage();
      injectPortfolioSchema();
      renderGeoStrip('geoStrip');
      if (window.renderPortfolioRelatedLinks) window.renderPortfolioRelatedLinks();
    });
