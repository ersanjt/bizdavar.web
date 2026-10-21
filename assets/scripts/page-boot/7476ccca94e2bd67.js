bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Разработка iOS — кейс Marvi Society и App Store', url: 'marvi-society-ios-app' }
          ];
      injectPageSeo('articleMarviSociety', {
        canonical: 'https://bizdavar.com/pages/articles/marvi-society-ios-app',
        ogImage: 'assets/images/content/marvi-society/screen-discover.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Разработка iOS — кейс Marvi Society и App Store',
        description: 'От идеи закрытого клуба до App Store: UI, Swift, события — кейс Bizdavar в Стамбуле.',
        date: '2026-08-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/marvi-society-ios-app',
        image: 'assets/images/content/marvi-society/screen-discover.jpg',
        keywords: 'разработка iOS, Marvi Society, App Store, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'صفحه Marvi Society', url: 'marvi-society', desc: 'اسکرین‌شات و App Store' },
            { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های دیجیتال' },
            { title: 'خدمات اپ', url: 'services#app-development', desc: 'iOS و وب‌اپ' }
          ]);
      setupWhatsappLinks();
    });
