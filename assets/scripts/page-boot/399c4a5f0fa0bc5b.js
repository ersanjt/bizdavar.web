bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Liqui Moly supply — genuine oils and additives for fleet and industry', url: 'liqui-moly-supply-iran' }
          ];
      injectPageSeo('articleLiquiMolySupply', {
        canonical: 'https://bizdavar.com/pages/articles/liqui-moly-supply-iran',
        ogImage: 'assets/images/liqui-moly/octane-plus.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Liqui Moly supply — genuine oils and additives for fleet and industry',
        description: 'Quote path for Liqui Moly engine oil, gear oil and additives for fleets and workshops — B2B via Bizdavar.',
        date: '2026-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/liqui-moly-supply-iran',
        image: 'assets/images/liqui-moly/octane-plus.jpg',
        keywords: 'Liqui Moly supply, engine oil, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Liqui Moly', url: 'liqui-moly', desc: 'روغن و افزودنی' },
            { title: 'محصولات B2B', url: 'products#supply', desc: 'VEGA و Prosense' },
            { title: 'استعلام', url: 'contact?product=Liqui%20Moly', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
