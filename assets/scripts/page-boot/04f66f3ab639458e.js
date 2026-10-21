bizdavarPageInit(function () {
      injectPageSeo('vega', {
            canonical: 'https://bizdavar.com/pages/vega',
            ogImage: 'assets/images/vega/product-vegapuls-6x-photo.webp'
          });
renderBreadcrumbs([
            { page: 'home', url: 'index' },
            { page: 'vega', url: 'vega' }
          ]);
          injectBreadcrumbSchema([
            { page: 'home', url: 'index' },
            { page: 'vega', url: 'pages/vega' }
          ]);
          initVegaPage();
          renderGeoStrip('geoStrip', {
            textKey: 'vegaPage.geoText',
            text: 'تامین اصل سنسور VEGA برای پروژه‌های فارسی‌زبان — مشاوره فنی چندزبانه، پیش‌فاکتور شفاف و لجستیک تا مقصد پروژه.'
          });
          renderRelatedLinks([{"title":"راهنمای خرید VEGAPULS","url":"articles/buy-vegapuls-iran","desc":"قیمت و کد سفارش","titleKey":"vegaPage.related.0.title","descKey":"vegaPage.related.0.desc"},{"title":"محصولات Prosense","url":"prosense","desc":"دتکتور گاز و شعله","titleKey":"vegaPage.related.1.title","descKey":"vegaPage.related.1.desc"},{"title":"کاتالوگ محصولات","url":"products#supply","desc":"مشاوره و تامین","titleKey":"vegaPage.related.2.title","descKey":"vegaPage.related.2.desc"},{"title":"تماس و استعلام","url":"contact","desc":"مشاوره رایگان","titleKey":"vegaPage.related.3.title","descKey":"vegaPage.related.3.desc"}]);
          injectJsonLdProductList();
            setupWhatsappLinks();
    });
