bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Как цифровой маркетинг увеличивает продажи', url: 'digital-marketing' }
          ];
      injectPageSeo('articleDigitalMarketing', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing',
        ogImage: 'assets/images/blog/blog-dm-sales.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Как цифровой маркетинг увеличивает продажи',
        description: 'Воронка, CRO, реклама и сопровождение лидов — практический рост с Bizdavar.',
        date: '2025-04-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/digital-marketing',
        image: 'assets/images/blog/blog-dm-sales.webp',
        keywords: 'рост онлайн продаж, CRO, воронка, Google Ads, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Услуги цифрового маркетинга', url: 'services#digital-marketing', desc: 'Кампании и CRO' },
            { title: 'Fast Web Studio', url: 'fast', desc: 'Продающий лендинг' },
            { title: 'Запрос', url: 'contact?service=digital-marketing', desc: 'Запуск кампании' }
          ]);
      setupWhatsappLinks();
    });
