bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Buy Digi System scales and POS in Iran — store and checkout', url: 'buy-digi-system-iran' }
          ];
      injectPageSeo('articleBuyDigiIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-digi-system-iran',
        ogImage: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Buy Digi System scales and POS in Iran — store and checkout',
        description: 'How to buy genuine Digi System scales and POS for Iran stores: store type, checkout count and legal-for-trade needs — Persian proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-digi-system-iran',
        image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        keywords: 'buy Digi System Iran, retail scale POS, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Digi catalogue', url: 'digi-system', desc: 'Scales and POS' },
            { title: 'Buy Teraoka', url: 'buy-teraoka-iran', desc: 'Japanese scales' },
            { title: 'Quote', url: 'contact?product=Digi%20System', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
