bizdavarPageInit(function () {
      injectPageSeo('motorcycle', {
        canonical: 'https://bizdavar.com/pages/motorcycle',
        ogImage: 'assets/images/auto-moto/hero/auto-moto-hero.webp'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply', name: "Supply" },
        { page: 'autoMoto', url: 'auto-moto', name: "Auto-Moto" },
        { page: 'motorcycle', url: 'motorcycle' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply', name: "Supply" },
        { page: 'autoMoto', url: 'pages/auto-moto', name: "Auto-Moto" },
        { page: 'motorcycle', url: 'pages/motorcycle' }
      ]);
      initAutoMotoPage();
      injectAutoMotoSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'autoMotoPage.geoText',
        text: "Motorcycle gear supply — prices on the card are in US dollars, for worldwide delivery."
      });
      renderRelatedLinks([
        { title: "Auto-Moto", url: "auto-moto", desc: "Two separate shops: gear and brakes", titleKey: 'autoMotoPage.related.0.title', descKey: 'autoMotoPage.related.0.desc' },
        { title: "Brake shop", url: "car-parts", desc: "Pads and discs by brand and model", titleKey: 'autoMotoPage.related.1.title', descKey: 'autoMotoPage.related.1.desc' },
        { title: "Liqui Moly", url: "liqui-moly", desc: "Oils and additives", titleKey: 'autoMotoPage.related.2.title', descKey: 'autoMotoPage.related.2.desc' },
        { title: "Contact", url: "contact", desc: "Clothing size or SKU", titleKey: 'autoMotoPage.related.3.title', descKey: 'autoMotoPage.related.3.desc' }
      ]);
      setupWhatsappLinks();
    });
