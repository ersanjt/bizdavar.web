bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'Kaya One AG', url: 'kaya-one' }
      ];
      injectPageSeo('kayaOne', {
        canonical: 'https://bizdavar.com/pages/kaya-one'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.kayaOne.geoText',
        text: 'نمونه‌کار طراحی وب برای شرکت‌های تجارت سوئیسی و بین‌المللی — بیزدوار گروپ.'
      });
      injectCaseStudySchema({
        id: 'kaya-one',
        name: 'Kaya One AG — طراحی وبسایت تجارت سوئیسی',
        description: 'نمونه‌کار طراحی وب برای Kaya One AG — شرکت تجارت و راهکارهای صنعتی ثبت‌شده در سوئیس',
        service: 'طراحی وبسایت شرکتی و سئو',
        slug: 'pages/kaya-one'
      });
      renderRelatedLinks([
        { title: 'Supplify Trade', url: 'supplify-trade', desc: 'تجارت بین‌المللی امارات' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
      ]);
      setupWhatsappLinks();
    });
