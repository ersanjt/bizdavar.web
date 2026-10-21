function bootProductsPage() {
      const chrome = window.__bizdavarChrome || window.renderSiteChrome;
      if (typeof chrome === 'function') chrome();
      setupWhatsappLinks();
      injectPageSeo('products', { canonical: 'https://bizdavar.com/pages/products' });
      renderBreadcrumbs([
        { page: 'home', url: '' },
        { page: 'products', url: 'pages/products' }
      ]);
      if (typeof initOwnedProductsPage === 'function') initOwnedProductsPage();
      renderGeoStrip('geoStrip', {
        textKey: 'productsPage.geoText',
        text: 'محصولات مالکیتی و تامین برندهای صنعتی — مشاوره فنی فارسی از دفاتر ایران، ترکیه، ارمنستان و دبی.'
      });
      renderRelatedLinks([
        { title: 'خرید VEGAPULS', url: 'articles/buy-vegapuls-iran', desc: 'سنسور سطح ایران', titleKey: 'productsPage.related.0.title', descKey: 'productsPage.related.0.desc' },
        { title: 'تامین Prosense', url: 'prosense', desc: 'دتکتور گاز و شعله', titleKey: 'productsPage.related.1.title', descKey: 'productsPage.related.1.desc' },
        { title: 'Teltonika GPS', url: 'teltonika', desc: 'Fleet Telematics از $29', titleKey: 'productsPage.related.2.title', descKey: 'productsPage.related.2.desc' },
        { title: 'تماس و استعلام', url: 'contact', desc: 'مشاوره رایگان', titleKey: 'productsPage.related.3.title', descKey: 'productsPage.related.3.desc' }
      ]);
    }
    bizdavarPageInit(bootProductsPage);
    if (window.bizdavarReady) {
      window.bizdavarReady.then(function () {
        if (typeof initOwnedProductsPage === 'function') initOwnedProductsPage();
      });
    }
