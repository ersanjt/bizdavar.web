bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'استعلام سعر حساس VEGA في إيران — ماذا ترسلون', url: 'vega-quote-iran' }
          ];
      injectPageSeo('articleVegaQuoteIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-quote-iran',
        ogImage: 'assets/images/vega/product-vegabar-39.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'استعلام سعر حساس VEGA في إيران — ماذا ترسلون',
        description: 'قائمة استعلام VEGA: الخزان والوسط وEx/SIL وصورة اللوحة.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/vega-quote-iran',
        image: 'assets/images/vega/product-vegabar-39.png',
        keywords: 'استعلام VEGA, VEGABAR, فاتورة مبدئية, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'شراء VEGAPULS', url: 'buy-vegapuls-iran', desc: 'رادار مستوى' },
            { title: 'كتالوج VEGA', url: 'vega', desc: 'موديلات' },
            { title: 'اتصال', url: 'contact?product=VEGA', desc: 'فاتورة' }
          ]);
      setupWhatsappLinks();
    });
