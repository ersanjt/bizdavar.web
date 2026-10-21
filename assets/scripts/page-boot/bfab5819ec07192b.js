bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Многоязычный сайт для рынков Ирана и Турции', url: 'multilingual-web-iran-turkey' }
          ];
      injectPageSeo('articleMultilingualWeb', {
        canonical: 'https://bizdavar.com/pages/articles/multilingual-web-iran-turkey',
        ogImage: 'assets/images/blog/blog-multilingual.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Многоязычный сайт для рынков Ирана и Турции',
        description: 'hreflang, RTL фарси, локальное доверие и быстрая сдача для рынков Ирана и Турции.',
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/multilingual-web-iran-turkey',
        image: 'assets/images/blog/blog-multilingual.webp',
        keywords: 'многоязычный сайт, hreflang, фарси турецкий, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'Сдача за 5 дней' },
            { title: 'Услуги веб-дизайна', url: 'services#web-design', desc: 'Индивидуальный проект' },
            { title: 'Запрос', url: 'contact?service=web-design', desc: 'Старт проекта' }
          ]);
      setupWhatsappLinks();
    });
