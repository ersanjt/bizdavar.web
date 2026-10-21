bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Английский веб-дизайн для США и ЕС — счёт в USD или EUR', url: 'website-design-us-eu' }
          ];
      injectPageSeo('articleWebsiteDesignUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/website-design-us-eu',
        ogImage: 'assets/images/blog/blog-web-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Английский веб-дизайн для США и ЕС — счёт в USD или EUR',
        description: 'Как компаниям США и ЕС заказать английский сайт: тарифы от $99 / ~€90, Stripe, Zoom/Meet и счёт в USD или EUR.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/website-design-us-eu',
        image: 'assets/images/blog/blog-web-us-eu.jpg',
        keywords: 'веб-дизайн США, веб-дизайн ЕС, сайт от $99, Fast Web Studio, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'от $99 / ~€90' },
            { title: 'Услуги веб-дизайна', url: 'services#web-design', desc: 'Сайт US/EU под ключ' },
            { title: 'Запросить оценку', url: 'contact?service=web-design', desc: 'Счёт USD или EUR' }
          ]);
      setupWhatsappLinks();
    });
