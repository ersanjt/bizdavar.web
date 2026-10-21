bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Купить VEGAPULS 6X в Иране — цена, код заказа, запрос', url: 'buy-vegapuls-iran' }
          ];
      injectPageSeo('articleBuyVegapulsIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-vegapuls-iran',
        ogImage: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Купить VEGAPULS 6X в Иране — цена, код заказа, запрос',
        description: 'Как купить оригинальный VEGAPULS 6X для Ирана: код заказа, проформа и логистика на объект.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-vegapuls-iran',
        image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        keywords: 'купить VEGAPULS 6X, радарный уровнемер Иран, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Запрос VEGA', url: 'vega-quote-iran', desc: 'Чек-лист' },
            { title: 'Каталог VEGA', url: 'vega', desc: 'Уровень и давление' },
            { title: 'Промторговля', url: 'industrial-trade-iran', desc: 'VEGA и Prosense' }
          ]);
      setupWhatsappLinks();
    });
