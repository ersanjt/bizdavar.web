bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'iOS app development — Marvi Society case study and App Store launch', url: 'marvi-society-ios-app' }
          ];
      injectPageSeo('articleMarviSociety', {
        canonical: 'https://bizdavar.com/pages/articles/marvi-society-ios-app',
        ogImage: 'assets/images/content/marvi-society/screen-discover.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'iOS app development — Marvi Society case study and App Store launch',
        description: 'From invite-only club idea to App Store: UI design, Swift, events and creator profiles — Bizdavar case study.',
        date: '2026-08-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/marvi-society-ios-app',
        image: 'assets/images/content/marvi-society/screen-discover.jpg',
        keywords: 'iOS app development, Marvi Society, App Store, Bizdavar'
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
