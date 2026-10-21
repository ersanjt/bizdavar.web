bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Купить Teltonika FMB920 в Иране — от $29', url: 'buy-teltonika-iran' }
          ];
      injectPageSeo('articleBuyTeltonikaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teltonika-iran',
        ogImage: 'assets/images/partners/teltonika.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Купить Teltonika FMB920 в Иране — от $29',
        description: 'Оригинальный Teltonika GPS для автопарков Ирана: FMB920 от $29, FMC650 и DualCam.',
        date: '2026-08-26',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teltonika-iran',
        image: 'assets/images/partners/teltonika.png',
        keywords: 'купить Teltonika Иран, FMB920, GPS парк, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Каталог Teltonika', url: 'teltonika', desc: 'FMB920 и FMC650' },
            { title: 'Промторговля', url: 'industrial-trade-iran', desc: 'Все бренды' },
            { title: 'Запрос', url: 'contact?product=Teltonika', desc: 'Проформа' }
          ]);
      setupWhatsappLinks();
    });
