bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'شراء محرك Gamak في إيران — القدرة والشفة والاستعلام', url: 'buy-gamak-iran' }
          ];
      injectPageSeo('articleBuyGamakIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-gamak-iran',
        ogImage: 'assets/images/gamak/category-three-phase.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'شراء محرك Gamak في إيران — القدرة والشفة والاستعلام',
        description: 'كيف تشتري محرك Gamak أصلي لمضخات وخطوط إيران: كيلوواط وشفعة B3/B5 وفئة IE.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-gamak-iran',
        image: 'assets/images/gamak/category-three-phase.webp',
        keywords: 'شراء محرك Gamak إيران, IE3, شفة B5, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'كتالوج Gamak', url: 'gamak', desc: 'ثلاثي الطور وIE3' },
            { title: 'تجارة صناعية', url: 'industrial-trade-iran', desc: 'كل العلامات' },
            { title: 'استعلام', url: 'contact?product=Gamak', desc: 'فاتورة' }
          ]);
      setupWhatsappLinks();
    });
