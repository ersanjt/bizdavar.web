bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "Choosing the right industrial sensor — VEGA and instrumentation", url: "industrial-sensors" }
          ];
      injectPageSeo('articleIndustrialSensors', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-sensors',
        ogImage: 'assets/images/vega/blog-industrial-sensors.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "Choosing the right industrial sensor — VEGA and instrumentation",
        description: "Compare VEGAPULS, VEGABAR and VEGAPOINT for level, pressure and switching. Ex/SIL and Bizdavar quoting.",
        date: '2025-03-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/industrial-sensors',
        image: 'assets/images/vega/blog-industrial-sensors.jpg',
        keywords: 'choose VEGA sensor, VEGAPULS, VEGABAR, VEGAPOINT, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "VEGA catalog", url: "vega", desc: "Sensors and instrumentation" },
            { title: "Industrial services", url: "products#supply", desc: "B2B consulting" },
            { title: "Contact", url: "contact", desc: "Price quote" }
          ]);
      setupWhatsappLinks();
    });
