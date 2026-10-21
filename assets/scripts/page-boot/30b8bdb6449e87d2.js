bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'تامین Liqui Moly آلمان — روغن و افزودنی اصل برای ناوگان و صنعت', url: 'liqui-moly-supply-iran' }
          ];
      injectPageSeo('articleLiquiMolySupply', {
        canonical: 'https://bizdavar.com/pages/articles/liqui-moly-supply-iran',
        ogImage: 'assets/images/liqui-moly/octane-plus.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'تامین Liqui Moly آلمان — روغن و افزودنی اصل برای ناوگان و صنعت',
        description: 'مسیر استعلام روغن موتور، گیربکس و افزودنی Liqui Moly برای ناوگان، کارگاه و پروژه صنعتی — B2B با بیزدوار.',
        date: '2026-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/liqui-moly-supply-iran',
        image: 'assets/images/liqui-moly/octane-plus.jpg',
        keywords: 'Liqui Moly ایران, روغن موتور, تامین Liqui Moly, بیزدوار'
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
