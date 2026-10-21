bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خرید ردیاب Teltonika FMB920 در ایران — از ۲۹ دلار', url: 'buy-teltonika-iran' }
          ];
      injectPageSeo('articleBuyTeltonikaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teltonika-iran',
        ogImage: 'assets/images/partners/teltonika.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خرید ردیاب Teltonika FMB920 در ایران — از ۲۹ دلار',
        description: 'خرید ردیاب GPS اصل Teltonika برای ناوگان ایران: FMB920 از ۲۹ دلار، FMC650 و DualCam — پیش‌فاکتور فارسی و استعلام واتساپ.',
        date: '2026-08-26',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teltonika-iran',
        image: 'assets/images/partners/teltonika.png',
        keywords: 'خرید Teltonika ایران, قیمت FMB920, ردیاب GPS ناوگان, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Teltonika', url: 'teltonika', desc: 'FMB920 و FMC650' },
            { title: 'بازرگانی صنعتی', url: 'industrial-trade-iran', desc: 'همه برندها' },
            { title: 'استعلام', url: 'contact?product=Teltonika', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
