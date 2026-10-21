bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da Gamak motor satın al — kW, flanş, teklif', url: 'buy-gamak-iran' }
          ];
      injectPageSeo('articleBuyGamakIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-gamak-iran',
        ogImage: 'assets/images/gamak/category-three-phase.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da Gamak motor satın al — kW, flanş, teklif',
        description: 'Orijinal Gamak motor: kW, rpm, B3/B5 flanş ve IE sınıfı — Farsça proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-gamak-iran',
        image: 'assets/images/gamak/category-three-phase.webp',
        keywords: 'Gamak motor satın al, İran, IE3, B5 flanş, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Gamak kataloğu', url: 'gamak', desc: 'Üç faz ve IE3' },
            { title: 'Endüstriyel ticaret', url: 'industrial-trade-iran', desc: 'Tüm markalar' },
            { title: 'Teklif', url: 'contact?product=Gamak', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
