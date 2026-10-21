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
        text: 'Магазин Bizdavar с ценами в дирхамах ОАЭ — промышленные товары, приборы и электроника.'
      });
      renderRelatedLinks([
        { title: 'Продукты', url: 'products', desc: 'Бренды Bizdavar' },
        { title: 'Контакты', url: 'contact', desc: 'Заказ и запрос' }
      ]);
      if (window.renderDirhamShop) window.renderDirhamShop();
      setupWhatsappLinks();
    });
