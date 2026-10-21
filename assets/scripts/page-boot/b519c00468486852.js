bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "Поставка газовых датчиков Prosense — от выбора модели", url: "prosense-gas-detection" }
          ];
      injectPageSeo('articleProsenseGas', {
        canonical: 'https://bizdavar.com/pages/articles/prosense-gas-detection',
        ogImage: 'assets/images/prosense/slides/pq-sil.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "Поставка газовых датчиков Prosense — от выбора модели",
        description: "Датчики газа и пламени Prosense для нефти и HVAC — код заказа и запрос Bizdavar.",
        date: '2026-06-15',
        dateModified: '2026-08-24',
        slug: 'pages/articles/prosense-gas-detection',
        image: 'assets/images/prosense/slides/pq-sil.jpg',
        keywords: 'Prosense газовый датчик, SIL, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "Каталог Prosense", url: "prosense", desc: "Детекторы и SIL" },
            { title: "Гид VEGA", url: "vega-supply-iran", desc: "Датчики уровня" },
            { title: "Контакт B2B", url: "contact?product=Prosense", desc: "Проформа" }
          ]);
      setupWhatsappLinks();
    });
