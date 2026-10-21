bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'شراء كاشف غاز Prosense في إيران — PQ وSafeVader وSIL', url: 'buy-prosense-iran' }
          ];
      injectPageSeo('articleBuyProsenseIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-prosense-iran',
        ogImage: 'assets/images/prosense/series-pq.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'شراء كاشف غاز Prosense في إيران — PQ وSafeVader وSIL',
        description: 'كواشف غاز Prosense الأصلية للنفط والبتروكيما في إيران — PQ وSafeVader وSIL.',
        date: '2026-08-28',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-prosense-iran',
        image: 'assets/images/prosense/series-pq.webp',
        keywords: 'شراء Prosense, كاشف غاز صناعي, PQ, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'كتالوج Prosense', url: 'prosense', desc: 'PQ وSafeVader' },
            { title: 'شراء VEGA', url: 'buy-vegapuls-iran', desc: 'حساس مستوى' },
            { title: 'استعلام', url: 'contact?product=Prosense', desc: 'فاتورة' }
          ]);
      setupWhatsappLinks();
    });
