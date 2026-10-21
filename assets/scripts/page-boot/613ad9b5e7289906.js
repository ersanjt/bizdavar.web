bizdavarPageInit(function () {
      injectPageSeo('carParts', {
        canonical: 'https://bizdavar.com/tr/pages/car-parts',
        ogImage: 'assets/images/brand/bizdavar-logo-square.png'
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
        { title: 'Auto-Moto', url: 'auto-moto', desc: 'Motosiklet ve oto parçası' },
        { title: 'Liqui Moly', url: 'liqui-moly', desc: 'Yağ ve katkı' },
        { title: 'İletişim', url: 'contact', desc: 'Parça sorun' }
      ]);
    });
