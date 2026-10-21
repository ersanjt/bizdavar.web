bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da VEGA fiyat teklifi — ne göndermelisiniz', url: 'vega-quote-iran' }
          ];
      injectPageSeo('articleVegaQuoteIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-quote-iran',
        ogImage: 'assets/images/vega/product-vegabar-39.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da VEGA fiyat teklifi — ne göndermelisiniz',
        description: 'VEGA teklif kontrol listesi: tank, ortam, Ex/SIL ve etiket fotoğrafı — daha hızlı proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/vega-quote-iran',
        image: 'assets/images/vega/product-vegabar-39.png',
        keywords: 'VEGA teklif, VEGABAR, seviye sensörü proforma, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'VEGAPULS satın al', url: 'buy-vegapuls-iran', desc: 'Radar seviye' },
            { title: 'VEGA kataloğu', url: 'vega', desc: 'Modeller' },
            { title: 'İletişim', url: 'contact?product=VEGA', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
