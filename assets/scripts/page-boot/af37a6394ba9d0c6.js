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
        text: "نموذج موقع وخادم وبريد مؤسسي لعلامات الأعلاف في الإمارات والخليج — Bizdavar Group."
      });
      injectCaseStudySchema({
        id: 'asil-feed',
        name: "ASIL — موقع وخادم وبريد الشركة",
        description: "نموذج عمل: تصميم موقع وتشغيل خادم وبريد الشركة لعلامة أعلاف ASIL في دبي",
        service: "تصميم موقع وتشغيل خادم وبريد الشركة",
        slug: 'pages/asil-feed'
      });
      renderRelatedLinks([
        {
          "title": "Supplify Trade",
          "url": "supplify-trade",
          "desc": "تجارة دولية في الإمارات"
        },
        {
          "title": "Kaya One AG",
          "url": "kaya-one",
          "desc": "تجارة سويسرية"
        },
        {
          "title": "الأعمال",
          "url": "portfolio",
          "desc": "مشاريع بيزدوار"
        }
      ]);
      setupWhatsappLinks();
    });
