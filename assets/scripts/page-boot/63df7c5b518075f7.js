bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Buy Teraoka scales in Iran — deli, POS and labeling', url: 'buy-teraoka-iran' }
          ];
      injectPageSeo('articleBuyTeraokaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teraoka-iran',
        ogImage: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Buy Teraoka scales in Iran — deli, POS and labeling',
        description: 'How to buy genuine Teraoka Seiko scales and labelers for Iran stores and kitchens: scale type, capacity and checkout count — Persian proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teraoka-iran',
        image: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        keywords: 'buy Teraoka Iran, Teraoka Seiko scale, deli scale, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Teraoka catalogue', url: 'teraoka', desc: 'Scales and labels' },
            { title: 'Buy Digi', url: 'buy-digi-system-iran', desc: 'Turkey scales' },
            { title: 'Quote', url: 'contact?product=Teraoka', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
