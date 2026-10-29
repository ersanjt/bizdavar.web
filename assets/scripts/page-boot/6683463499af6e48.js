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
        text: 'متجر درهم بيزدوار — لا أصناف حالياً. السعر يُكتب فقط للصنف المسجّل.'
      });
      renderRelatedLinks([
        { title: 'المنتجات', url: 'products', desc: 'علامات بيزدوار' },
        { title: 'اتصل بنا', url: 'contact', desc: 'طلب واستفسار' }
      ]);
      if (window.renderDirhamShop) window.renderDirhamShop();
      setupWhatsappLinks();
    });
