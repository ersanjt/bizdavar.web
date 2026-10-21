bizdavarPageInit(function () {
      injectPageSeo('uwt', {
        canonical: 'https://bizdavar.com/pages/uwt',
        ogImage: 'assets/images/uwt/og-uwt-logo.jpg'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'uwt', url: 'uwt' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'uwt', url: 'pages/uwt' }
      ]);
      initUwtPage();
      injectUwtSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'uwtPage.geoText',
        text: 'تامین سنسور سطح UWT از آلمان به ایران — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.'
      });
      renderRelatedLinks([{"title":"کاتالوگ VEGA","url":"vega","desc":"سنسور سطح و فشار","titleKey":"uwtPage.related.0.title","descKey":"uwtPage.related.0.desc"},{"title":"Prosense","url":"prosense","desc":"دتکتور گاز و شعله","titleKey":"uwtPage.related.1.title","descKey":"uwtPage.related.1.desc"},{"title":"کاتالوگ محصولات","url":"products#supply","desc":"برندهای تامین B2B","titleKey":"uwtPage.related.2.title","descKey":"uwtPage.related.2.desc"},{"title":"تماس و استعلام","url":"contact","desc":"مشاوره رایگان","titleKey":"uwtPage.related.3.title","descKey":"uwtPage.related.3.desc"}]);
      setupWhatsappLinks();
    });
