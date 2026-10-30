bizdavarPageInit(function () {
      injectPageSeo('carParts', {
        canonical: 'https://bizdavar.com/en/pages/car-parts',
        ogImage: 'assets/images/brand/bizdavar-logo-square.png',
        ogImageAlt: 'Bizdavar logo — brake pads and discs'
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
        { title: 'Auto-Moto', url: 'auto-moto', desc: 'Motorcycle gear and parts' },
        { title: 'Liqui Moly', url: 'liqui-moly', desc: 'Oils and additives' },
        { title: 'Contact', url: 'contact', desc: 'Ask for a part' }
      ]);
    });
