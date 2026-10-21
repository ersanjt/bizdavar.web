bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'شراء موازين وPOS من Digi System في إيران — المتجر والصندوق', url: 'buy-digi-system-iran' }
          ];
      injectPageSeo('articleBuyDigiIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-digi-system-iran',
        ogImage: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'شراء موازين وPOS من Digi System في إيران — المتجر والصندوق',
        description: 'كيف تشتري موازين وPOS أصلية من Digi لمتاجر إيران: نوع المتجر وعدد الصناديق.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-digi-system-iran',
        image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        keywords: 'شراء Digi System إيران, ميزان POS, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'كتالوج Digi', url: 'digi-system', desc: 'موازين وPOS' },
            { title: 'شراء Teraoka', url: 'buy-teraoka-iran', desc: 'موازين يابانية' },
            { title: 'استعلام', url: 'contact?product=Digi%20System', desc: 'فاتورة' }
          ]);
      setupWhatsappLinks();
    });
