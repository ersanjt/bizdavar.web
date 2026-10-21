bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'شراء Teltonika FMB920 في إيران — من ٢٩ دولاراً', url: 'buy-teltonika-iran' }
          ];
      injectPageSeo('articleBuyTeltonikaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teltonika-iran',
        ogImage: 'assets/images/partners/teltonika.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'شراء Teltonika FMB920 في إيران — من ٢٩ دولاراً',
        description: 'GPS أصلي من Teltonika لأساطيل إيران: FMB920 من ٢٩$ وFMC650 وDualCam.',
        date: '2026-08-26',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teltonika-iran',
        image: 'assets/images/partners/teltonika.png',
        keywords: 'شراء Teltonika إيران, FMB920, GPS أسطول, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'كتالوج Teltonika', url: 'teltonika', desc: 'FMB920 وFMC650' },
            { title: 'تجارة صناعية', url: 'industrial-trade-iran', desc: 'كل العلامات' },
            { title: 'استعلام', url: 'contact?product=Teltonika', desc: 'فاتورة' }
          ]);
      setupWhatsappLinks();
    });
