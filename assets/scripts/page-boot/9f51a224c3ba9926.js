bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خرید الکتروموتور Gamak در ایران — توان، فلنج و استعلام', url: 'buy-gamak-iran' }
          ];
      injectPageSeo('articleBuyGamakIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-gamak-iran',
        ogImage: 'assets/images/gamak/category-three-phase.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خرید الکتروموتور Gamak در ایران — توان، فلنج و استعلام',
        description: 'چطور الکتروموتور اصل Gamak برای پمپ، فن و خط تولید ایران بخرید: توان kW، دور، فلنج B3/B5 و کلاس IE — پیش‌فاکتور فارسی.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-gamak-iran',
        image: 'assets/images/gamak/category-three-phase.webp',
        keywords: 'خرید الکتروموتور Gamak ایران, موتور گاماک, IE3, فلنج B5, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Gamak', url: 'gamak', desc: 'سه‌فاز و IE3' },
            { title: 'بازرگانی صنعتی', url: 'industrial-trade-iran', desc: 'همه برندها' },
            { title: 'استعلام', url: 'contact?product=Gamak', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
