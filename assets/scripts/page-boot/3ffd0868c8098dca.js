bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da Prosense gaz dedektörü — PQ, SafeVader ve SIL', url: 'buy-prosense-iran' }
          ];
      injectPageSeo('articleBuyProsenseIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-prosense-iran',
        ogImage: 'assets/images/prosense/series-pq.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da Prosense gaz dedektörü — PQ, SafeVader ve SIL',
        description: 'Orijinal Prosense gaz dedektörü İran projeleri için: PQ, SafeVader, SIL ve WhatsApp teklifi.',
        date: '2026-08-28',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-prosense-iran',
        image: 'assets/images/prosense/series-pq.webp',
        keywords: 'Prosense satın al, gaz dedektörü, PQ Series, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Prosense kataloğu', url: 'prosense', desc: 'PQ ve SafeVader' },
            { title: 'VEGA satın al', url: 'buy-vegapuls-iran', desc: 'Seviye sensörü' },
            { title: 'Teklif', url: 'contact?product=Prosense', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
