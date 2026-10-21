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
        text: 'Bizdavar shop priced in UAE dirhams — industrial goods, instruments and electronics.'
      });
      renderRelatedLinks([
        { title: 'Products', url: 'products', desc: 'Bizdavar brands and lines' },
        { title: 'Contact', url: 'contact', desc: 'Orders and inquiries' }
      ]);
      if (window.renderDirhamShop) window.renderDirhamShop();
      setupWhatsappLinks();
    });
