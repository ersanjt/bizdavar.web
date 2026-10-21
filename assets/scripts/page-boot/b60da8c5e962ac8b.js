bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' },
        { name: 'English website in 5 days — Fast Studio guide for US and EU', url: 'fast-studio' }
      ];
      injectPageSeo('articleFastStudio', {
        canonical: 'https://bizdavar.com/pages/articles/fast-studio',
        ogImage: 'assets/images/content/fast-hero.svg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'English website in 5 days — Fast Studio guide for US and EU',
        description: 'Fast Web Studio from $99 / ~€90: English LTR sites for US and EU in 5 working days — Stripe, Zoom/Meet, billed in USD or EUR.',
        date: '2025-05-15',
        dateModified: '2026-08-29',
        slug: 'pages/articles/fast-studio',
        image: 'assets/images/content/related-thumb-fast.svg',
        keywords: 'website in 5 days, Fast Web Studio, web design US, EUR invoice, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'Plans from $99 / ~€90' },
            { title: 'US/EU website design', url: 'website-design-us-eu', desc: 'Invoice in USD or EUR' },
            { title: 'Website quote', url: 'contact?service=web-design', desc: 'Zoom / Meet or the form' }
          ]);
      setupWhatsappLinks();
    });
