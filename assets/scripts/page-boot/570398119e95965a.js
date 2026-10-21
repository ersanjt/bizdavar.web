bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "Как выбрать промышленный датчик — VEGA и КИП", url: "industrial-sensors" }
          ];
      injectPageSeo('articleIndustrialSensors', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-sensors',
        ogImage: 'assets/images/vega/blog-industrial-sensors.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "Как выбрать промышленный датчик — VEGA и КИП",
        description: "Сравнение VEGAPULS, VEGABAR и VEGAPOINT. Ex/SIL и запрос через Bizdavar.",
        date: '2025-03-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/industrial-sensors',
        image: 'assets/images/vega/blog-industrial-sensors.jpg',
        keywords: 'выбор датчика VEGA, VEGAPULS, VEGABAR, VEGAPOINT, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "Каталог VEGA", url: "vega", desc: "Датчики и КИП" },
            { title: "Промышленные услуги", url: "products#supply", desc: "B2B-консультация" },
            { title: "Контакты", url: "contact", desc: "Запрос цены" }
          ]);
      setupWhatsappLinks();
    });
