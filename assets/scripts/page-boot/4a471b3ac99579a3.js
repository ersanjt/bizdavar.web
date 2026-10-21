bizdavarPageInit(function () {
      injectPageSeo('gamak', {
        canonical: 'https://bizdavar.com/pages/gamak',
        ogImage: 'assets/images/gamak/hero/gamak-motor.webp'
      });
renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'gamak', url: 'gamak' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'gamak', url: 'pages/gamak' }
      ]);
      initGamakPage();
      injectGamakSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'gamakPage.geoText',
        text: 'تامین Gamak برای پروژه‌های صنعتی — مشاوره فنی فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.'
      });
      renderRelatedLinks([{"title":"خرید Gamak در ایران","url":"articles/buy-gamak-iran","desc":"توان و فلنج","titleKey":"gamakPage.related.0.title","descKey":"gamakPage.related.0.desc"},{"title":"محصولات VEGA","url":"vega","desc":"سنسور سطح و فشار","titleKey":"gamakPage.related.1.title","descKey":"gamakPage.related.1.desc"},{"title":"کاتالوگ محصولات","url":"products#supply","desc":"مشاوره تامین B2B","titleKey":"gamakPage.related.2.title","descKey":"gamakPage.related.2.desc"},{"title":"تماس و استعلام","url":"contact","desc":"مشاوره رایگان","titleKey":"gamakPage.related.3.title","descKey":"gamakPage.related.3.desc"}]);
      setupWhatsappLinks();
    });
