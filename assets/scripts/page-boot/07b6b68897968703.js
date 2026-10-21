bizdavarPageInit(function () {
      injectPageSeo('prosense', {
            canonical: 'https://bizdavar.com/pages/prosense',
            ogImage: 'assets/images/prosense/hero-pq-sil2.webp'
          });
renderBreadcrumbs([
            { page: 'home', url: 'index' },
            { page: 'prosense', url: 'prosense' }
          ]);
          injectBreadcrumbSchema([
            { page: 'home', url: 'index' },
            { page: 'prosense', url: 'pages/prosense' }
          ]);
          initProsensePage();
          injectProsenseSchema();
          renderGeoStrip('geoStrip', {
            textKey: 'prosensePage.geoText',
            text: 'تامین اصل دتکتور Prosense — گواهی SIL/M1/EN، مشاوره فارسی در واتساپ و لجستیک برای پروژه‌های نفت، گاز و صنعت.'
          });
          renderRelatedLinks([{"title":"خرید Prosense در ایران","url":"articles/buy-prosense-iran","desc":"PQ و SafeVader","titleKey":"prosensePage.related.0.title","descKey":"prosensePage.related.0.desc"},{"title":"محصولات VEGA","url":"vega","desc":"سنسور سطح و فشار","titleKey":"prosensePage.related.1.title","descKey":"prosensePage.related.1.desc"},{"title":"کاتالوگ محصولات","url":"products#supply","desc":"مشاوره B2B","titleKey":"prosensePage.related.2.title","descKey":"prosensePage.related.2.desc"},{"title":"تماس","url":"contact","desc":"استعلام قیمت","titleKey":"prosensePage.related.3.title","descKey":"prosensePage.related.3.desc"}]);
            setupWhatsappLinks();
    });
