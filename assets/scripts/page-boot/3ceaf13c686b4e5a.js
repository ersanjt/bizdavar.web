bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'شراء VEGAPULS 6X في إيران — السعر ورمز الطلب والاستعلام', url: 'buy-vegapuls-iran' }
          ];
      injectPageSeo('articleBuyVegapulsIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-vegapuls-iran',
        ogImage: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'شراء VEGAPULS 6X في إيران — السعر ورمز الطلب والاستعلام',
        description: 'كيف تشتري VEGAPULS 6X أصلي لمشاريع إيران: رمز الطلب وفاتورة مبدئية ولوجستيات حتى الموقع.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-vegapuls-iran',
        image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        keywords: 'شراء VEGAPULS 6X, حساس مستوى راداري إيران, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'استعلام VEGA', url: 'vega-quote-iran', desc: 'قائمة الشراء' },
            { title: 'كتالوج VEGA', url: 'vega', desc: 'مستوى وضغط' },
            { title: 'تجارة صناعية', url: 'industrial-trade-iran', desc: 'VEGA وProsense' }
          ]);
      setupWhatsappLinks();
    });
