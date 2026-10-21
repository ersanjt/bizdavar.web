bizdavarPageInit(function () {
      injectPageSeo('liquiMoly', {
        canonical: 'https://bizdavar.com/pages/liqui-moly',
        ogImage: 'assets/images/liqui-moly/octane-plus.jpg'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'liquiMoly', url: 'liqui-moly' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'liquiMoly', url: 'pages/liqui-moly' }
      ]);
      initLiquiMolyPage();
      injectLiquiMolySchema();
      renderGeoStrip('geoStrip', {
        textKey: 'liquiMolyPage.geoText',
        text: 'تامین اصل Liqui Moly — قیمت دلاری شفاف، مشاوره فارسی و لجستیک بین‌المللی.'
      });
      renderRelatedLinks([
        { title: 'تامین Liqui Moly در ایران', url: 'articles/liqui-moly-supply-iran', desc: 'روغن و افزودنی اصل', titleKey: 'liquiMolyPage.related.0.title', descKey: 'liquiMolyPage.related.0.desc' },
        { title: 'محصولات VEGA', url: 'vega', desc: 'سنسور سطح و فشار صنعتی', titleKey: 'liquiMolyPage.related.1.title', descKey: 'liquiMolyPage.related.1.desc' },
        { title: 'کاتالوگ محصولات', url: 'products#supply', desc: 'برندهای تامین B2B', titleKey: 'liquiMolyPage.related.2.title', descKey: 'liquiMolyPage.related.2.desc' },
        { title: 'تماس و استعلام', url: 'contact', desc: 'استعلام قیمت Liqui Moly', titleKey: 'liquiMolyPage.related.3.title', descKey: 'liquiMolyPage.related.3.desc' }
      ]);
      setupWhatsappLinks();
    });
