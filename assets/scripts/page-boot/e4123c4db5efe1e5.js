bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'التجارة الصناعية في إيران — VEGA وProsense وعلامات أصلية', url: 'industrial-trade-iran' }
          ];
      injectPageSeo('articleIndustrialTradeIran', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-trade-iran',
        ogImage: 'assets/images/content/supply-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'التجارة الصناعية في إيران — VEGA وProsense وعلامات أصلية',
        description: 'توريد أصلي لأجهزة القياس وسلامة الغاز وGPS والزيوت لمشاريع إيران — نقطة اتصال واحدة.',
        date: '2026-08-27',
        dateModified: '2026-08-29',
        slug: 'pages/articles/industrial-trade-iran',
        image: 'assets/images/content/supply-hero.jpg',
        keywords: 'تجارة صناعية إيران, VEGA Prosense, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'VEGA', url: 'buy-vegapuls-iran', desc: 'VEGAPULS 6X' },
            { title: 'Prosense', url: 'buy-prosense-iran', desc: 'كاشف غاز' },
            { title: 'كتالوج التوريد', url: 'products#supply', desc: 'كل العلامات' }
          ]);
      setupWhatsappLinks();
    });
