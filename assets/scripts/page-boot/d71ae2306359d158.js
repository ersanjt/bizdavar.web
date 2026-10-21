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
        text: "نمونه‌کار طراحی وب، سرور و ایمیل سازمانی برای برندهای خوراک در امارات و خلیج فارس — بیزدوار گروپ."
      });
      injectCaseStudySchema({
        id: 'asil-feed',
        name: "ASIL — طراحی وبسایت، سرور و ایمیل شرکت",
        description: "نمونه‌کار طراحی وب، راه‌اندازی سرور و ایمیل سازمانی برای برند خوراک ASIL در دبی",
        service: "طراحی وبسایت، راه‌اندازی سرور و ایمیل سازمانی",
        slug: 'pages/asil-feed'
      });
      renderRelatedLinks([
        {
          "title": "Supplify Trade",
          "url": "supplify-trade",
          "desc": "تجارت بین‌المللی امارات"
        },
        {
          "title": "Kaya One AG",
          "url": "kaya-one",
          "desc": "تجارت سوئیسی"
        },
        {
          "title": "نمونه‌کارها",
          "url": "portfolio",
          "desc": "پروژه‌های بیزدوار"
        }
      ]);
      setupWhatsappLinks();
    });
