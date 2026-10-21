bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'Supplify Trade', url: 'supplify-trade' }
      ];
      injectPageSeo('supplifyTrade', {
        canonical: 'https://bizdavar.com/pages/supplify-trade'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.supplifyTrade.geoText',
        text: 'نمونه‌کار طراحی وب برای شرکت‌های تجارت بین‌المللی در امارات و خاورمیانه — بیزدوار گروپ.'
      });
      injectCaseStudySchema({
        id: 'supplify-trade',
        name: 'Supplify Trade — طراحی وبسایت تجارت بین‌المللی',
        description: 'نمونه‌کار طراحی وب برای Supplify Trade FZ-LLC — شرکت sourcing و تجارت B2B با لایسنس RAKEZ در امارات',
        service: 'طراحی وبسایت شرکتی و سئو',
        slug: 'pages/supplify-trade'
      });
      renderRelatedLinks(window.BIZDAVAR_I18N?.raw('caseStudy.supplifyTrade.related') || [
        { title: 'Fast Web Studio', url: 'fast', desc: 'Website design from $99' },
        { title: 'Portfolio', url: 'portfolio', desc: 'Bizdavar projects' },
        { title: 'Contact', url: 'contact', desc: 'Free consultation' }
      ]);
      setupWhatsappLinks();
    });
