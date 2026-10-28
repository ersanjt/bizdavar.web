bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Купить весы Teraoka по всему миру — deli, POS, этикетка', url: 'buy-teraoka-iran' }
          ];
      injectPageSeo('articleBuyTeraokaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teraoka-iran',
        ogImage: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Купить весы Teraoka по всему миру — deli, POS, этикетка',
        description: 'Как купить оригинальные весы Teraoka для магазинов Ирана: тип, грузоподъёмность, число касс.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teraoka-iran',
        image: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        keywords: 'купить Teraoka Иран, весы Seiko, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Каталог Teraoka', url: 'teraoka', desc: 'Весы и этикетка' },
            { title: 'Купить Digi', url: 'buy-digi-system-iran', desc: 'Весы из Турции' },
            { title: 'Запрос', url: 'contact?product=Teraoka', desc: 'Проформа' }
          ]);
      setupWhatsappLinks();
    });
