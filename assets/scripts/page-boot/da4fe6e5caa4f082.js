bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'ASIL', url: 'asil-feed' }
      ];
      injectPageSeo('asilFeed', {
        canonical: 'https://bizdavar.com/pages/asil-feed',
        ogImage: 'assets/images/content/asil-feed/hero.webp'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.asilFeed.geoText',
        text: "Web, server and company-email case study for feed brands in the UAE and the Gulf — Bizdavar Group."
      });
      injectCaseStudySchema({
        id: 'asil-feed',
        name: "ASIL — Website, server and company email",
        description: "Case study: website design, server setup and company email for the ASIL feed brand in Dubai",
        service: "Website design, server setup and company email",
        slug: 'pages/asil-feed'
      });
      renderRelatedLinks([
        {
          "title": "Supplify Trade",
          "url": "supplify-trade",
          "desc": "UAE international trade"
        },
        {
          "title": "Kaya One AG",
          "url": "kaya-one",
          "desc": "Swiss trade"
        },
        {
          "title": "Portfolio",
          "url": "portfolio",
          "desc": "Bizdavar projects"
        }
      ]);
      setupWhatsappLinks();
    });
