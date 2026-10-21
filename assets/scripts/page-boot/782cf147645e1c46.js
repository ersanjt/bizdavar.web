bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Liqui Moly tedariki — orijinal yağ ve katkı', url: 'liqui-moly-supply-iran' }
          ];
      injectPageSeo('articleLiquiMolySupply', {
        canonical: 'https://bizdavar.com/pages/articles/liqui-moly-supply-iran',
        ogImage: 'assets/images/liqui-moly/octane-plus.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Liqui Moly tedariki — orijinal yağ ve katkı',
        description: 'Motor yağı, şanzıman ve katkı maddeleri için Liqui Moly B2B teklifi — Bizdavar.',
        date: '2026-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/liqui-moly-supply-iran',
        image: 'assets/images/liqui-moly/octane-plus.jpg',
        keywords: 'Liqui Moly tedarik, motor yağı, Bizdavar'
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
