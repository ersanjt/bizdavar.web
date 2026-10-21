bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "Поставка датчиков VEGA в Иран — от запроса до объекта", url: "vega-supply-iran" }
          ];
      injectPageSeo('articleVegaSupplyIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-supply-iran',
        ogImage: 'assets/images/vega/slides/value-process-safety.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "Поставка датчиков VEGA в Иран — от запроса до объекта",
        description: "Оригинальный VEGA для проектов в Иране: код заказа, проформа и логистика на объект.",
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/vega-supply-iran',
        image: 'assets/images/vega/slides/value-process-safety.jpg',
        keywords: 'поставка VEGA Иран, купить VEGA, проформа, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "Выбор датчика", url: "industrial-sensors", desc: "Технические заметки" },
            { title: "Каталог VEGA", url: "vega", desc: "Уровень и давление" },
            { title: "Контакты", url: "contact", desc: "Запрос цены" }
          ]);
      setupWhatsappLinks();
    });
