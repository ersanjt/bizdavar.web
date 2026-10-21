bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "اختيار الحساس الصناعي المناسب — VEGA والقياس", url: "industrial-sensors" }
          ];
      injectPageSeo('articleIndustrialSensors', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-sensors',
        ogImage: 'assets/images/vega/blog-industrial-sensors.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "اختيار الحساس الصناعي المناسب — VEGA والقياس",
        description: "مقارنة VEGAPULS وVEGABAR وVEGAPOINT للمستوى والضغط ونقطة المستوى. Ex/SIL واستعلام بيزدوار.",
        date: '2025-03-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/industrial-sensors',
        image: 'assets/images/vega/blog-industrial-sensors.jpg',
        keywords: 'اختيار حساس VEGA, VEGAPULS, VEGABAR, VEGAPOINT, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "كتالوج VEGA", url: "vega", desc: "حساسات وأجهزة قياس" },
            { title: "خدمات صناعية", url: "products#supply", desc: "استشارة B2B" },
            { title: "اتصل بنا", url: "contact", desc: "استعلام السعر" }
          ]);
      setupWhatsappLinks();
    });
