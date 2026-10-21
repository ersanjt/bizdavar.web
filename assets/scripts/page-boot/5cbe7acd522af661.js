bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da VEGAPULS 6X satın al — fiyat, sipariş kodu, teklif', url: 'buy-vegapuls-iran' }
          ];
      injectPageSeo('articleBuyVegapulsIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-vegapuls-iran',
        ogImage: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da VEGAPULS 6X satın al — fiyat, sipariş kodu, teklif',
        description: 'Orijinal VEGAPULS 6X İran tank ve prosesi için: sipariş kodu, Farsça proforma ve sahaya lojistik.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-vegapuls-iran',
        image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        keywords: 'VEGAPULS 6X satın al, radar seviye sensörü, VEGA İran, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'VEGA teklifi', url: 'vega-quote-iran', desc: 'Kontrol listesi' },
            { title: 'VEGA kataloğu', url: 'vega', desc: 'Seviye ve basınç' },
            { title: 'Endüstriyel ticaret', url: 'industrial-trade-iran', desc: 'VEGA ve Prosense' }
          ]);
      setupWhatsappLinks();
    });
