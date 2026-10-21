bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { name: 'BizSwap', url: 'bizswap' }
      ];
      injectPageSeo('bizswap', { canonical: 'https://bizdavar.com/pages/bizswap' });
renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.bizswap.geoText',
        text: 'توسعه ماژول DeFi و Web3 — بخشی از خدمات فین‌تک و طراحی وب بیزدوار گروپ.'
      });
      if (typeof initBizswapPage === 'function') initBizswapPage();
    });
    if (window.bizdavarReady) {
      window.bizdavarReady.then(function () {
        if (typeof initBizswapPage === 'function') initBizswapPage();
      });
    }
