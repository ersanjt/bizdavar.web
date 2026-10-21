bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Buy Prosense gas detectors in Iran — PQ, SafeVader and SIL', url: 'buy-prosense-iran' }
          ];
      injectPageSeo('articleBuyProsenseIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-prosense-iran',
        ogImage: 'assets/images/prosense/series-pq.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Buy Prosense gas detectors in Iran — PQ, SafeVader and SIL',
        description: 'Genuine Prosense industrial gas detectors for oil, petrochemical, mining and HVAC in Iran — PQ, SafeVader, SIL and WhatsApp quote.',
        date: '2026-08-28',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-prosense-iran',
        image: 'assets/images/prosense/series-pq.webp',
        keywords: 'buy Prosense Iran, industrial gas detector, PQ Series, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Prosense catalogue', url: 'prosense', desc: 'PQ and SafeVader' },
            { title: 'Buy VEGA', url: 'buy-vegapuls-iran', desc: 'Level sensor' },
            { title: 'Quote', url: 'contact?product=Prosense', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
