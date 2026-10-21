bizdavarPageInit(function () {
      injectPageSeo('motorcycle', {
        canonical: 'https://bizdavar.com/pages/motorcycle',
        ogImage: 'assets/images/auto-moto/hero/auto-moto-hero.webp'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply', name: "Tedarik" },
        { page: 'autoMoto', url: 'auto-moto', name: "Auto-Moto" },
        { page: 'motorcycle', url: 'motorcycle' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply', name: "Tedarik" },
        { page: 'autoMoto', url: 'pages/auto-moto', name: "Auto-Moto" },
        { page: 'motorcycle', url: 'pages/motorcycle' }
      ]);
      initAutoMotoPage();
      injectAutoMotoSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'autoMotoPage.geoText',
        text: "Motosiklet ekipmanı tedariki — karttaki fiyat ABD doları, İran teslimi."
      });
      renderRelatedLinks([
        { title: "Auto-Moto", url: "auto-moto", desc: "İki ayrı mağaza: motosiklet ve fren", titleKey: 'autoMotoPage.related.0.title', descKey: 'autoMotoPage.related.0.desc' },
        { title: "Fren mağazası", url: "car-parts", desc: "Balata ve disk, marka ve modele göre", titleKey: 'autoMotoPage.related.1.title', descKey: 'autoMotoPage.related.1.desc' },
        { title: "Liqui Moly", url: "liqui-moly", desc: "Motor yağı ve katkı", titleKey: 'autoMotoPage.related.2.title', descKey: 'autoMotoPage.related.2.desc' },
        { title: "İletişim", url: "contact", desc: "Beden veya ürün kodu", titleKey: 'autoMotoPage.related.3.title', descKey: 'autoMotoPage.related.3.desc' }
      ]);
      setupWhatsappLinks();
    });
