bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'شراء موازين Teraoka في إيران — دلّي وPOS وملصقات', url: 'buy-teraoka-iran' }
          ];
      injectPageSeo('articleBuyTeraokaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teraoka-iran',
        ogImage: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'شراء موازين Teraoka في إيران — دلّي وPOS وملصقات',
        description: 'كيف تشتري موازين Teraoka أصلية لمتاجر إيران: النوع والسعة وعدد الصناديق.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teraoka-iran',
        image: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        keywords: 'شراء Teraoka إيران, ميزان Seiko, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'كتالوج Teraoka', url: 'teraoka', desc: 'موازين وملصقات' },
            { title: 'شراء Digi', url: 'buy-digi-system-iran', desc: 'موازين تركيا' },
            { title: 'استعلام', url: 'contact?product=Teraoka', desc: 'فاتورة' }
          ]);
      setupWhatsappLinks();
    });
