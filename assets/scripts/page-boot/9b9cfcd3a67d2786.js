bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'VEGA sensor quote in Iran — what to send', url: 'vega-quote-iran' }
          ];
      injectPageSeo('articleVegaQuoteIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-quote-iran',
        ogImage: 'assets/images/vega/product-vegabar-39.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'VEGA sensor quote in Iran — what to send',
        description: 'VEGA quote checklist for Iran buyers: tank, media, Ex/SIL, process connection and nameplate photo.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/vega-quote-iran',
        image: 'assets/images/vega/product-vegabar-39.png',
        keywords: 'VEGA quote Iran, VEGABAR, level sensor proforma, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Buy VEGAPULS', url: 'buy-vegapuls-iran', desc: 'Radar level' },
            { title: 'VEGA catalogue', url: 'vega', desc: 'Models' },
            { title: 'Contact', url: 'contact?product=VEGA', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
