bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'توريد Liqui Moly — زيوت وإضافات أصلية', url: 'liqui-moly-supply-iran' }
          ];
      injectPageSeo('articleLiquiMolySupply', {
        canonical: 'https://bizdavar.com/pages/articles/liqui-moly-supply-iran',
        ogImage: 'assets/images/liqui-moly/octane-plus.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'توريد Liqui Moly — زيوت وإضافات أصلية',
        description: 'مسار استعلام زيوت Liqui Moly للأساطيل والورش — B2B مع بيزدوار.',
        date: '2026-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/liqui-moly-supply-iran',
        image: 'assets/images/liqui-moly/octane-plus.jpg',
        keywords: 'Liqui Moly, زيت محرك, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Liqui Moly', url: 'liqui-moly', desc: 'روغن و افزودنی' },
            { title: 'محصولات B2B', url: 'products#supply', desc: 'VEGA و Prosense' },
            { title: 'استعلام', url: 'contact?product=Liqui%20Moly', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
