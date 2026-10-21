bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { page: 'fxguard', url: 'fxguard' },
        { page: 'fxguard-accounting', url: 'fxguard-accounting' }
      ];
      injectPageSeo('fxguardAccounting', { canonical: 'https://bizdavar.com/pages/fxguard-accounting' });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.fxguardAccounting.geoText',
        text: 'FXGuard Accounting — حسابداری سوئیت FXGuard برای تیم‌های صرافی و SME · توسعه بیزدوار.'
      });
      if (typeof initFxguardAccountingPage === 'function') initFxguardAccountingPage();
      if (typeof initDataIcons === 'function') initDataIcons(document.getElementById('main-content'));
    });
