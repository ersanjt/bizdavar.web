bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "İran’da VEGA sensör tedariki — sorgudan sahaya", url: "vega-supply-iran" }
          ];
      injectPageSeo('articleVegaSupplyIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-supply-iran',
        ogImage: 'assets/images/vega/slides/value-process-safety.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "İran’da VEGA sensör tedariki — sorgudan sahaya",
        description: "İran projesi için orijinal VEGA: sipariş kodu, proforma ve sahaya lojistik — gri pazar yok.",
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/vega-supply-iran',
        image: 'assets/images/vega/slides/value-process-safety.jpg',
        keywords: 'VEGA İran tedarik, VEGA satın al, proforma, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "Sensör seçim rehberi", url: "industrial-sensors", desc: "Teknik notlar" },
            { title: "VEGA kataloğu", url: "vega", desc: "Seviye ve basınç" },
            { title: "İletişim", url: "contact", desc: "Fiyat teklifi" }
          ]);
      setupWhatsappLinks();
    });
