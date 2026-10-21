bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Что такое Bizdavar Group? История, команда, направления', url: 'about-bizdavar-group' }
          ];
      injectPageSeo('articleAboutBizdavar', {
        canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group',
        ogImage: 'assets/images/content/about-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Что такое Bizdavar Group? История, команда, направления',
        description: 'Профиль Bizdavar: основатель Ersan Jahed Tabrizi, цифровые услуги, свои продукты и промпоставки в 11 странах.',
        date: '2025-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/about-bizdavar-group',
        image: 'assets/images/content/about-hero.jpg',
        keywords: 'Bizdavar Group, Ersan Jahed Tabrizi, промышленные поставки'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'О нас', url: 'about', desc: 'Команда и история' },
            { title: 'Услуги', url: 'services', desc: 'Четыре направления' },
            { title: 'Контакты', url: 'contact', desc: 'Бесплатная консультация' }
          ]);
      setupWhatsappLinks();
    });
