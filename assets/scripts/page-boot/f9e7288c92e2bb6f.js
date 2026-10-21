bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Запрос цены VEGA в Иране — что прислать', url: 'vega-quote-iran' }
          ];
      injectPageSeo('articleVegaQuoteIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-quote-iran',
        ogImage: 'assets/images/vega/product-vegabar-39.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Запрос цены VEGA в Иране — что прислать',
        description: 'Чек-лист запроса VEGA: резервуар, среда, Ex/SIL и фото шильдика.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/vega-quote-iran',
        image: 'assets/images/vega/product-vegabar-39.png',
        keywords: 'запрос VEGA, VEGABAR, проформа, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Купить VEGAPULS', url: 'buy-vegapuls-iran', desc: 'Радар уровня' },
            { title: 'Каталог VEGA', url: 'vega', desc: 'Модели' },
            { title: 'Контакты', url: 'contact?product=VEGA', desc: 'Проформа' }
          ]);
      setupWhatsappLinks();
    });
