bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Industrial trade in Iran — VEGA, Prosense and genuine brands', url: 'industrial-trade-iran' }
          ];
      injectPageSeo('articleIndustrialTradeIran', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-trade-iran',
        ogImage: 'assets/images/content/supply-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Industrial trade in Iran — VEGA, Prosense and genuine brands',
        description: 'Genuine B2B supply of instrumentation, gas safety, fleet GPS and industrial oils for Iran — one Persian contact.',
        date: '2026-08-27',
        dateModified: '2026-08-29',
        slug: 'pages/articles/industrial-trade-iran',
        image: 'assets/images/content/supply-hero.jpg',
        keywords: 'industrial trade Iran, instrumentation supply, VEGA Prosense, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Buy VEGA', url: 'buy-vegapuls-iran', desc: 'VEGAPULS 6X' },
            { title: 'Buy Prosense', url: 'buy-prosense-iran', desc: 'Gas detector' },
            { title: 'Supply catalogue', url: 'products#supply', desc: 'All brands' }
          ]);
      setupWhatsappLinks();
    });
