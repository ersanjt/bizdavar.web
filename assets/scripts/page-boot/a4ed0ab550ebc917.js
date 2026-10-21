bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Buy Teltonika FMB920 in Iran — from $29', url: 'buy-teltonika-iran' }
          ];
      injectPageSeo('articleBuyTeltonikaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teltonika-iran',
        ogImage: 'assets/images/partners/teltonika.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Buy Teltonika FMB920 in Iran — from $29',
        description: 'Genuine Teltonika GPS for Iran fleets: FMB920 from $29, FMC650 and DualCam — Persian proforma.',
        date: '2026-08-26',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teltonika-iran',
        image: 'assets/images/partners/teltonika.png',
        keywords: 'buy Teltonika Iran, FMB920 price, fleet GPS, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Teltonika catalogue', url: 'teltonika', desc: 'FMB920 and FMC650' },
            { title: 'Industrial trade', url: 'industrial-trade-iran', desc: 'All brands' },
            { title: 'Quote', url: 'contact?product=Teltonika', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
