bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق', url: 'industrial-sensors' }
          ];
      injectPageSeo('articleIndustrialSensors', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-sensors',
        ogImage: 'assets/images/vega/blog-industrial-sensors.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'انتخاب سنسور صنعتی مناسب — راهنمای VEGA و ابزار دقیق',
        description: 'مقایسه VEGAPULS، VEGABAR و VEGAPOINT برای سطح، فشار و نقطه سطح. گواهی Ex/SIL و مسیر استعلام با بیزدوار.',
        date: '2025-03-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/industrial-sensors',
        image: 'assets/images/vega/blog-industrial-sensors.jpg',
        keywords: 'انتخاب سنسور VEGA, VEGAPULS, VEGABAR, VEGAPOINT, ابزار دقیق, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ VEGA', url: 'vega', desc: 'سنسور و ابزار دقیق' },
            { title: 'خدمات صنعتی', url: 'products#supply', desc: 'مشاوره B2B' },
            { title: 'تماس', url: 'contact', desc: 'استعلام قیمت' }
          ]);
      setupWhatsappLinks();
    });
