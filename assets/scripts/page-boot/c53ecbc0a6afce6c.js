bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Buy Gamak motors in Iran — kW, flange and quote', url: 'buy-gamak-iran' }
          ];
      injectPageSeo('articleBuyGamakIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-gamak-iran',
        ogImage: 'assets/images/gamak/category-three-phase.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Buy Gamak motors in Iran — kW, flange and quote',
        description: 'How to buy a genuine Gamak motor for Iran pumps, fans and lines: kW, rpm, B3/B5 flange and IE class — Persian proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-gamak-iran',
        image: 'assets/images/gamak/category-three-phase.webp',
        keywords: 'buy Gamak motor Iran, IE3, B5 flange, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Gamak catalogue', url: 'gamak', desc: 'Three-phase and IE3' },
            { title: 'Industrial trade', url: 'industrial-trade-iran', desc: 'All brands' },
            { title: 'Quote', url: 'contact?product=Gamak', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
