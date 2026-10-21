bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Купить двигатель Gamak в Иране — кВт, фланец, запрос', url: 'buy-gamak-iran' }
          ];
      injectPageSeo('articleBuyGamakIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-gamak-iran',
        ogImage: 'assets/images/gamak/category-three-phase.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Купить двигатель Gamak в Иране — кВт, фланец, запрос',
        description: 'Как купить оригинальный Gamak для насосов и линий в Иране: кВт, об/мин, фланец B3/B5.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-gamak-iran',
        image: 'assets/images/gamak/category-three-phase.webp',
        keywords: 'купить Gamak Иран, IE3, фланец B5, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Каталог Gamak', url: 'gamak', desc: 'Три фазы и IE3' },
            { title: 'Промторговля', url: 'industrial-trade-iran', desc: 'Все бренды' },
            { title: 'Запрос', url: 'contact?product=Gamak', desc: 'Проформа' }
          ]);
      setupWhatsappLinks();
    });
