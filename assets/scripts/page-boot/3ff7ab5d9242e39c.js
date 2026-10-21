bizdavarPageInit(function () {
      injectPageSeo('teraoka', {
        canonical: 'https://bizdavar.com/pages/teraoka',
        ogImage: 'assets/images/teraoka/products/luxeed-l-retail-scale.png'
      });
renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'teraoka', url: 'teraoka' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'teraoka', url: 'pages/teraoka' }
      ]);
      initTeraokaPage();
      injectTeraokaSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'teraokaPage.geoText',
        text: 'تامین Teraoka Seiko به ایران — مشاوره فارسی، پیش‌فاکتور و لجستیک بین‌المللی توسط بیزدوار گروپ.'
      });
      renderRelatedLinks([{"title":"خرید Teraoka در ایران","url":"articles/buy-teraoka-iran","desc":"deli و POS","titleKey":"teraokaPage.related.0.title","descKey":"teraokaPage.related.0.desc"},{"title":"Digi System","url":"digi-system","desc":"ترازو و POS ترکیه","titleKey":"teraokaPage.related.1.title","descKey":"teraokaPage.related.1.desc"},{"title":"تماس","url":"contact?product=Teraoka","desc":"استعلام قیمت","titleKey":"teraokaPage.related.2.title","descKey":"teraokaPage.related.2.desc"}]);
      setupWhatsappLinks();
    });
