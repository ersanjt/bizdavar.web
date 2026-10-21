bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Buy VEGAPULS 6X in Iran — price, order code and quote', url: 'buy-vegapuls-iran' }
          ];
      injectPageSeo('articleBuyVegapulsIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-vegapuls-iran',
        ogImage: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Buy VEGAPULS 6X in Iran — price, order code and quote',
        description: 'How to buy genuine VEGAPULS 6X for Iran tanks and process: exact order code, Persian proforma and logistics to site.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-vegapuls-iran',
        image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        keywords: 'buy VEGAPULS 6X, radar level sensor Iran, VEGA Iran, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'VEGA quote', url: 'vega-quote-iran', desc: 'Buyer checklist' },
            { title: 'VEGA catalogue', url: 'vega', desc: 'Level and pressure' },
            { title: 'Industrial trade', url: 'industrial-trade-iran', desc: 'VEGA and Prosense' }
          ]);
      setupWhatsappLinks();
    });
