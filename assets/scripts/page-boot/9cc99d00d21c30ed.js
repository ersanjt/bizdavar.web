bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran’da Digi System terazi ve POS — mağaza ve kasa', url: 'buy-digi-system-iran' }
          ];
      injectPageSeo('articleBuyDigiIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-digi-system-iran',
        ogImage: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran’da Digi System terazi ve POS — mağaza ve kasa',
        description: 'Orijinal Digi System terazi ve POS: mağaza türü, kasa sayısı, onaylı terazi — Farsça proforma.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-digi-system-iran',
        image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        keywords: 'Digi System terazi İran, POS, mağaza terazisi, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Digi kataloğu', url: 'digi-system', desc: 'Terazi ve POS' },
            { title: 'Teraoka satın al', url: 'buy-teraoka-iran', desc: 'Japon terazi' },
            { title: 'Teklif', url: 'contact?product=Digi%20System', desc: 'Proforma' }
          ]);
      setupWhatsappLinks();
    });
