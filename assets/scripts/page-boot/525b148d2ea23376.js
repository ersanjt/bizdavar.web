bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' },
        { name: 'Английский сайт за 5 дней — гид Fast Studio для США и ЕС', url: 'fast-studio' }
      ];
      injectPageSeo('articleFastStudio', {
        canonical: 'https://bizdavar.com/pages/articles/fast-studio',
        ogImage: 'assets/images/content/fast-hero.svg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Английский сайт за 5 дней — гид Fast Studio для США и ЕС',
        description: 'Fast Web Studio от $99 / ~€90: английский LTR-сайт для США и ЕС за 5 рабочих дней — Stripe, Zoom/Meet, счёт USD или EUR.',
        date: '2025-05-15',
        dateModified: '2026-08-29',
        slug: 'pages/articles/fast-studio',
        image: 'assets/images/content/related-thumb-fast.svg',
        keywords: 'сайт за 5 дней, Fast Web Studio, веб-дизайн США, счёт EUR, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'Тарифы от $99 / ~€90' },
            { title: 'Сайт US/EU', url: 'website-design-us-eu', desc: 'Счёт USD или EUR' },
            { title: 'Расчёт сайта', url: 'contact?service=web-design', desc: 'Zoom / Meet или форма' }
          ]);
      setupWhatsappLinks();
    });
