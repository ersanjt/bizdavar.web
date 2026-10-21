bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "VEGA sensor supply to Iran — from inquiry to site", url: "vega-supply-iran" }
          ];
      injectPageSeo('articleVegaSupplyIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-supply-iran',
        ogImage: 'assets/images/vega/slides/value-process-safety.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "VEGA sensor supply to Iran — from inquiry to site",
        description: "Original VEGA for Iran projects: order code, proforma and logistics to site — not the grey market.",
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/vega-supply-iran',
        image: 'assets/images/vega/slides/value-process-safety.jpg',
        keywords: 'VEGA supply Iran, buy VEGA sensor, proforma, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "Sensor selection guide", url: "industrial-sensors", desc: "Technical notes" },
            { title: "VEGA catalog", url: "vega", desc: "Level and pressure" },
            { title: "Contact", url: "contact", desc: "Price quote" }
          ]);
      setupWhatsappLinks();
    });
