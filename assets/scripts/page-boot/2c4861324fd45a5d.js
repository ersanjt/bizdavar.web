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
        text: 'Bizdavar mağazası, fiyatlar BAE dirhemi — endüstriyel, ölçüm ve elektronik ürünler.'
      });
      renderRelatedLinks([
        { title: 'Ürünler', url: 'products', desc: 'Bizdavar markaları' },
        { title: 'İletişim', url: 'contact', desc: 'Sipariş ve teklif' }
      ]);
      if (window.renderDirhamShop) window.renderDirhamShop();
      setupWhatsappLinks();
    });
