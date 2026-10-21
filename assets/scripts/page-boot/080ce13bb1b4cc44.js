bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Что такое цифровой маркетинг? Полный гид для бизнеса', url: 'what-is-digital-marketing' }
          ];
      injectPageSeo('articleWhatIsDm', {
        canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing',
        ogImage: 'assets/images/blog/blog-what-is-dm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Что такое цифровой маркетинг? Полный гид для бизнеса',
        description: 'Что такое цифровой маркетинг: SEO, Google Ads, SMM, контент и измерение лидов — путь Bizdavar для Ирана и Турции.',
        date: '2025-02-10',
        dateModified: '2026-09-01',
        slug: 'pages/articles/what-is-digital-marketing',
        image: 'assets/images/blog/blog-what-is-dm.webp',
        keywords: 'что такое цифровой маркетинг, SEO, Google Ads, SMM, CRO, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Как маркетинг увеличивает продажи', url: 'digital-marketing', desc: 'CRO и воронка продаж' },
            { title: 'Услуги цифрового маркетинга', url: 'services#digital-marketing', desc: 'Внедрение с командой Bizdavar' },
            { title: 'Запрос кампании', url: 'contact?service=digital-marketing', desc: 'Бесплатная консультация' }
          ]);
      setupWhatsappLinks();
    });
