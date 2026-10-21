bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' },
        { name: '5 günde İngilizce site — ABD/AB için Fast Studio rehberi', url: 'fast-studio' }
      ];
      injectPageSeo('articleFastStudio', {
        canonical: 'https://bizdavar.com/pages/articles/fast-studio',
        ogImage: 'assets/images/content/fast-hero.svg',
        type: 'article'
      });
      injectArticleSchema({
        title: '5 günde İngilizce site — ABD/AB için Fast Studio rehberi',
        description: 'Fast Web Studio $99 / ~€90’dan: ABD ve AB için İngilizce LTR site — 5 iş günü, Stripe, Zoom/Meet, fatura USD veya EUR.',
        date: '2025-05-15',
        dateModified: '2026-08-29',
        slug: 'pages/articles/fast-studio',
        image: 'assets/images/content/related-thumb-fast.svg',
        keywords: '5 günde web sitesi, Fast Web Studio, ABD web tasarım, EUR fatura, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'Planlar $99 / ~€90’dan' },
            { title: 'ABD/AB web tasarım', url: 'website-design-us-eu', desc: 'USD veya EUR fatura' },
            { title: 'Web teklifi', url: 'contact?service=web-design', desc: 'Zoom / Meet veya form' }
          ]);
      setupWhatsappLinks();
    });
