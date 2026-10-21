bizdavarPageInit(function () {
      injectPageSeo('teltonika', {
            canonical: 'https://bizdavar.com/pages/teltonika',
            ogImage: 'assets/images/teltonika/teltonika-logo.png'
          });
renderBreadcrumbs([
            { page: 'home', url: 'index' },
            { page: 'teltonika', url: 'teltonika' }
          ]);
          injectBreadcrumbSchema([
            { page: 'home', url: 'index' },
            { page: 'teltonika', url: 'pages/teltonika' }
          ]);
          initTeltonikaPage();
          injectTeltonikaSchema();
          renderGeoStrip('geoStrip', {
            textKey: 'teltonikaPage.geoText',
            text: 'تامین اصل ردیاب Teltonika به ایران — Fleet Telematics، مشاوره فارسی و تحویل برای ناوگان و IoT.'
          });
          renderRelatedLinks([{"title":"خرید FMB920 در ایران","url":"articles/buy-teltonika-iran","desc":"ردیاب از ۲۹ دلار","titleKey":"teltonikaPage.related.0.title","descKey":"teltonikaPage.related.0.desc"},{"title":"محصولات VEGA","url":"vega","desc":"سنسور سطح و فشار","titleKey":"teltonikaPage.related.1.title","descKey":"teltonikaPage.related.1.desc"},{"title":"کاتالوگ محصولات","url":"products#supply","desc":"مشاوره و تامین","titleKey":"teltonikaPage.related.2.title","descKey":"teltonikaPage.related.2.desc"},{"title":"تماس","url":"contact","desc":"استعلام قیمت","titleKey":"teltonikaPage.related.3.title","descKey":"teltonikaPage.related.3.desc"}]);
            setupWhatsappLinks();
    });
