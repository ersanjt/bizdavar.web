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
        text: "BAE ve Körfez’deki yem markaları için web, sunucu ve kurumsal e-posta örneği — Bizdavar Group."
      });
      injectCaseStudySchema({
        id: 'asil-feed',
        name: "ASIL — Web sitesi, sunucu ve kurumsal e-posta",
        description: "Örnek iş: ASIL yem markası için web sitesi, sunucu ve kurumsal e-posta",
        service: "Web sitesi tasarımı, sunucu kurulumu ve kurumsal e-posta",
        slug: 'pages/asil-feed'
      });
      renderRelatedLinks([
        {
          "title": "Supplify Trade",
          "url": "supplify-trade",
          "desc": "BAE uluslararası ticaret"
        },
        {
          "title": "Kaya One AG",
          "url": "kaya-one",
          "desc": "İsviçre ticareti"
        },
        {
          "title": "Portfolyo",
          "url": "portfolio",
          "desc": "Bizdavar projeleri"
        }
      ]);
      setupWhatsappLinks();
    });
