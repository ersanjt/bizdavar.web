bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da endüstriyel ticaret — VEGA, Prosense ve orijinal markalar', url: 'industrial-trade-iran' }
          ];
      injectPageSeo('articleIndustrialTradeIran', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-trade-iran',
        ogImage: 'assets/images/content/supply-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da endüstriyel ticaret — VEGA, Prosense ve orijinal markalar',
        description: 'Orijinal B2B tedarik: ölçüm, gaz güvenliği, filo GPS ve yağ — İran projeleri için tek iletişim.',
        date: '2026-08-27',
        dateModified: '2026-08-29',
        slug: 'pages/articles/industrial-trade-iran',
        image: 'assets/images/content/supply-hero.jpg',
        keywords: 'endüstriyel ticaret İran, VEGA Prosense, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'VEGA', url: 'buy-vegapuls-iran', desc: 'VEGAPULS 6X' },
            { title: 'Prosense', url: 'buy-prosense-iran', desc: 'Gaz dedektörü' },
            { title: 'Tedarik kataloğu', url: 'products#supply', desc: 'Tüm markalar' }
          ]);
      setupWhatsappLinks();
    });
