bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خرید دتکتور گاز Prosense در ایران — PQ، SafeVader و SIL', url: 'buy-prosense-iran' }
          ];
      injectPageSeo('articleBuyProsenseIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-prosense-iran',
        ogImage: 'assets/images/prosense/series-pq.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خرید دتکتور گاز Prosense در ایران — PQ، SafeVader و SIL',
        description: 'خرید دتکتور گاز صنعتی اصل Prosense برای نفت، پتروشیمی، معدن و HVAC در ایران — سری PQ، SafeVader، گواهی SIL و پیش‌فاکتور واتساپ.',
        date: '2026-08-28',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-prosense-iran',
        image: 'assets/images/prosense/series-pq.webp',
        keywords: 'خرید دتکتور گاز صنعتی, قیمت Prosense ایران, PQ Series, SafeVader, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Prosense', url: 'prosense', desc: 'PQ و SafeVader' },
            { title: 'خرید VEGA', url: 'buy-vegapuls-iran', desc: 'سنسور سطح' },
            { title: 'استعلام', url: 'contact?product=Prosense', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
