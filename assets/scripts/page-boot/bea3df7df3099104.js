bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "Doğru endüstriyel sensör — VEGA ve enstrümantasyon", url: "industrial-sensors" }
          ];
      injectPageSeo('articleIndustrialSensors', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-sensors',
        ogImage: 'assets/images/vega/blog-industrial-sensors.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "Doğru endüstriyel sensör — VEGA ve enstrümantasyon",
        description: "VEGAPULS, VEGABAR ve VEGAPOINT karşılaştırması. Ex/SIL ve Bizdavar teklif yolu.",
        date: '2025-03-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/industrial-sensors',
        image: 'assets/images/vega/blog-industrial-sensors.jpg',
        keywords: 'VEGA sensör seçimi, VEGAPULS, VEGABAR, VEGAPOINT, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "VEGA kataloğu", url: "vega", desc: "Sensör ve enstrümantasyon" },
            { title: "Endüstriyel hizmetler", url: "products#supply", desc: "B2B danışmanlık" },
            { title: "İletişim", url: "contact", desc: "Fiyat teklifi" }
          ]);
      setupWhatsappLinks();
    });
