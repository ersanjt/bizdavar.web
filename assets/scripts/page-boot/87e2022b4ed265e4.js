bizdavarPageInit(function () {
      injectPageSeo('carParts', {
        canonical: 'https://bizdavar.com/ar/pages/car-parts',
        ogImage: 'assets/images/brand/bizdavar-logo-square.png',
        ogImageAlt: 'شعار بيزدوار — فحمات وأقراص الفرامل'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply' },
        { page: 'autoMoto', url: 'auto-moto' },
        { page: 'carParts', url: 'car-parts' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply' },
        { page: 'autoMoto', url: 'pages/auto-moto' },
        { page: 'carParts', url: 'pages/car-parts' }
      ]);
      initCarPartsPage();
      injectCarPartsSchema();
      renderRelatedLinks([
        { title: 'Auto-Moto', url: 'auto-moto', desc: 'عتاد الدراجة وقطع الغيار' },
        { title: 'Liqui Moly', url: 'liqui-moly', desc: 'زيوت وإضافات' },
        { title: 'اتصل', url: 'contact', desc: 'استعلام قطعة' }
      ]);
    });
