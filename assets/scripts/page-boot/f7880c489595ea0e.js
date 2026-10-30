bizdavarPageInit(function () {
      injectPageSeo('carParts', {
        canonical: 'https://bizdavar.com/pages/car-parts',
        ogImage: 'assets/images/brand/bizdavar-logo-square.png',
        ogImageAlt: 'لوگوی بیزدوار — خرید لنت و دیسک ترمز'
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
        { title: 'Auto-Moto', url: 'auto-moto', desc: 'موتورسیکلت و قطعات' },
        { title: 'Liqui Moly', url: 'liqui-moly', desc: 'روغن و افزودنی' },
        { title: 'تماس', url: 'contact', desc: 'استعلام قطعه' }
      ]);
    });
