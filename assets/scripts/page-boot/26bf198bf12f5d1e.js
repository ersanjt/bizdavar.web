bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'بازرگانی تجهیزات صنعتی در ایران — VEGA، Prosense و برندهای اصل', url: 'industrial-trade-iran' }
          ];
      injectPageSeo('articleIndustrialTradeIran', {
        canonical: 'https://bizdavar.com/pages/articles/industrial-trade-iran',
        ogImage: 'assets/images/content/supply-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'بازرگانی تجهیزات صنعتی در ایران — VEGA، Prosense و برندهای اصل',
        description: 'مسیر بازرگانی اصل برای ابزار دقیق، ایمنی گاز، ردیاب ناوگان و روغن صنعتی در ایران — یک نقطه تماس فارسی با پیش‌فاکتور شفاف.',
        date: '2026-08-27',
        dateModified: '2026-08-29',
        slug: 'pages/articles/industrial-trade-iran',
        image: 'assets/images/content/supply-hero.jpg',
        keywords: 'بازرگانی صنعتی بین‌المللی, تامین تجهیزات ابزار دقیق, واردات تجهیزات صنعتی, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خرید VEGA', url: 'buy-vegapuls-iran', desc: 'VEGAPULS 6X' },
            { title: 'خرید Prosense', url: 'buy-prosense-iran', desc: 'دتکتور گاز' },
            { title: 'کاتالوگ تامین', url: 'products#supply', desc: 'همه برندها' }
          ]);
      setupWhatsappLinks();
    });
