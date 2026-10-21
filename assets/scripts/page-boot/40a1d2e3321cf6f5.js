bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da Teraoka terazi — deli, POS, etiketleme', url: 'buy-teraoka-iran' }
          ];
      injectPageSeo('articleBuyTeraokaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teraoka-iran',
        ogImage: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da Teraoka terazi — deli, POS, etiketleme',
        description: 'Orijinal Teraoka Seiko: terazi türü, kapasite, kasa sayısı — Farsça proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teraoka-iran',
        image: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        keywords: 'Teraoka terazi İran, Teraoka Seiko, deli terazi, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Teraoka kataloğu', url: 'teraoka', desc: 'Terazi ve etiket' },
            { title: 'Digi satın al', url: 'buy-digi-system-iran', desc: 'Türkiye terazi' },
            { title: 'Teklif', url: 'contact?product=Teraoka', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
