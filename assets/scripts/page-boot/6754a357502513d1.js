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
        text: "Кейс сайта, сервера и корпоративной почты для брендов кормов в ОАЭ и Персидском заливе — Bizdavar Group."
      });
      injectCaseStudySchema({
        id: 'asil-feed',
        name: "ASIL — сайт, сервер и корпоративная почта",
        description: "Кейс: дизайн сайта, сервер и корпоративная почта для бренда кормов ASIL в Дубае",
        service: "Дизайн сайта, сервер и корпоративная почта",
        slug: 'pages/asil-feed'
      });
      renderRelatedLinks([
        {
          "title": "Supplify Trade",
          "url": "supplify-trade",
          "desc": "Международная торговля ОАЭ"
        },
        {
          "title": "Kaya One AG",
          "url": "kaya-one",
          "desc": "Швейцарская торговля"
        },
        {
          "title": "Портфолио",
          "url": "portfolio",
          "desc": "Проекты Bizdavar"
        }
      ]);
      setupWhatsappLinks();
    });
