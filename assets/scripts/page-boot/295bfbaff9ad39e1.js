bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { page: 'fxguard', url: 'fxguard' }
      ];
      injectPageSeo('fxguard', { canonical: 'https://bizdavar.com/pages/fxguard' });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.fxguard.geoText',
        text: 'FXGuard — پنل واتساپ میز صرافی، حواله و مالی · fxguard.io · اکوسیستم بیزدوار.'
      });
      if (typeof initFxguardPage === 'function') initFxguardPage();
      if (typeof initDataIcons === 'function') initDataIcons(document.getElementById('main-content'));
    });
