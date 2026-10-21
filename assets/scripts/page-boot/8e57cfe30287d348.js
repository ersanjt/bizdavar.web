bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Управление соцсетями — SMM-стратегия для брендов', url: 'social-media-management' }
          ];
      injectPageSeo('articleSmm', {
        canonical: 'https://bizdavar.com/pages/articles/social-media-management',
        ogImage: 'assets/images/blog/blog-smm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Управление соцсетями — SMM-стратегия для брендов',
        description: 'Контент-план, визуал, Reels и реклама Instagram/LinkedIn — SMM Bizdavar.',
        date: '2025-03-05',
        dateModified: '2026-08-24',
        slug: 'pages/articles/social-media-management',
        image: 'assets/images/blog/blog-smm.webp',
        keywords: 'SMM, Instagram B2B, LinkedIn, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Услуги SMM', url: 'services#smm', desc: 'Контент и реклама' },
            { title: 'Кейс BizTejarat', url: 'biztejarat', desc: 'Instagram B2B' },
            { title: 'Запрос SMM', url: 'contact?service=smm', desc: 'Начать сотрудничество' }
          ]);
      setupWhatsappLinks();
    });
