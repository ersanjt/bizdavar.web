bizdavarPageInit(function () {
      injectPageSeo('motorcycle', {
        canonical: 'https://bizdavar.com/pages/motorcycle',
        ogImage: 'assets/images/auto-moto/hero/auto-moto-hero.webp'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply', name: "التوريد" },
        { page: 'autoMoto', url: 'auto-moto', name: "أوتو-موتو" },
        { page: 'motorcycle', url: 'motorcycle' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply', name: "التوريد" },
        { page: 'autoMoto', url: 'pages/auto-moto', name: "أوتو-موتو" },
        { page: 'motorcycle', url: 'pages/motorcycle' }
      ]);
      initAutoMotoPage();
      injectAutoMotoSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'autoMotoPage.geoText',
        text: "توريد معدات الدراجات النارية — السعر على البطاقة بالدولار الأمريكي لتسليم إيران."
      });
      renderRelatedLinks([
        { title: "أوتو-موتو", url: "auto-moto", desc: "متجران منفصلان: المعدات والفرامل", titleKey: 'autoMotoPage.related.0.title', descKey: 'autoMotoPage.related.0.desc' },
        { title: "متجر الفرامل", url: "car-parts", desc: "فحمات وأقراص حسب الماركة والموديل", titleKey: 'autoMotoPage.related.1.title', descKey: 'autoMotoPage.related.1.desc' },
        { title: "Liqui Moly", url: "liqui-moly", desc: "زيوت وإضافات", titleKey: 'autoMotoPage.related.2.title', descKey: 'autoMotoPage.related.2.desc' },
        { title: "اتصلوا بنا", url: "contact", desc: "مقاس الملابس أو رمز المنتج", titleKey: 'autoMotoPage.related.3.title', descKey: 'autoMotoPage.related.3.desc' }
      ]);
      setupWhatsappLinks();
    });
