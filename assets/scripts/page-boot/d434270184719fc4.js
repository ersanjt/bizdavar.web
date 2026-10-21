bizdavarPageInit(function () {
      injectPageSeo('shop', { canonical: 'https://bizdavar.com/pages/shop' });
      var crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { page: 'shop', url: 'shop' }
      ];
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'shopPage.geoText',
        text: 'فروشگاه بیزدوار با قیمت درهم امارات — کالاهای صنعتی، ابزار دقیق و الکترونیکی.'
      });
      renderRelatedLinks([
        { title: 'محصولات', url: 'products', desc: 'برندها و خطوط بیزدوار' },
        { title: 'تماس', url: 'contact', desc: 'سفارش و استعلام' }
      ]);
      if (window.renderDirhamShop) window.renderDirhamShop();
      setupWhatsappLinks();
    });
