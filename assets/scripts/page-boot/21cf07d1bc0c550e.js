bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da Teltonika FMB920 — 29$’dan', url: 'buy-teltonika-iran' }
          ];
      injectPageSeo('articleBuyTeltonikaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teltonika-iran',
        ogImage: 'assets/images/partners/teltonika.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da Teltonika FMB920 — 29$’dan',
        description: 'Orijinal Teltonika GPS İran filoları için: FMB920 29$’dan, FMC650 ve DualCam — Farsça teklif.',
        date: '2026-08-26',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teltonika-iran',
        image: 'assets/images/partners/teltonika.png',
        keywords: 'Teltonika İran, FMB920 fiyat, filo GPS, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Teltonika kataloğu', url: 'teltonika', desc: 'FMB920 ve FMC650' },
            { title: 'Endüstriyel ticaret', url: 'industrial-trade-iran', desc: 'Tüm markalar' },
            { title: 'Teklif', url: 'contact?product=Teltonika', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
