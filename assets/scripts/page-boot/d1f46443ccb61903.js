bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'توسعه اپ iOS — نمونه‌کار Marvi Society و انتشار App Store', url: 'marvi-society-ios-app' }
          ];
      injectPageSeo('articleMarviSociety', {
        canonical: 'https://bizdavar.com/pages/articles/marvi-society-ios-app',
        ogImage: 'assets/images/content/marvi-society/screen-discover.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'توسعه اپ iOS — نمونه‌کار Marvi Society و انتشار App Store',
        description: 'از ایده کلاب دعوت‌محور تا انتشار در App Store: طراحی UI، Swift، رویداد و پروفایل creator — نمونه‌کار بیزدوار.',
        date: '2026-08-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/marvi-society-ios-app',
        image: 'assets/images/content/marvi-society/screen-discover.jpg',
        keywords: 'توسعه اپ iOS, Marvi Society, App Store, طراحی اپ, بیزدوار'
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
