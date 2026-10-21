bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Промышленная торговля в Иране — VEGA, Prosense и оригинал', url: 'industrial-trade-iran' }
          ];
      injectPageSeo('articleIndustrialTradeIran', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-trade-iran',
        ogImage: 'assets/images/content/supply-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Промышленная торговля в Иране — VEGA, Prosense и оригинал',
        description: 'Оригинальные поставки КИП, газовой безопасности, GPS и масел для Ирана — один контакт.',
        date: '2026-08-27',
        dateModified: '2026-08-29',
        slug: 'pages/articles/industrial-trade-iran',
        image: 'assets/images/content/supply-hero.jpg',
        keywords: 'промторговля Иран, VEGA Prosense, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'VEGA', url: 'buy-vegapuls-iran', desc: 'VEGAPULS 6X' },
            { title: 'Prosense', url: 'buy-prosense-iran', desc: 'Газ' },
            { title: 'Каталог поставок', url: 'products#supply', desc: 'Все бренды' }
          ]);
      setupWhatsappLinks();
    });
