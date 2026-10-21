bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Купить весы и POS Digi System в Иране — магазин и касса', url: 'buy-digi-system-iran' }
          ];
      injectPageSeo('articleBuyDigiIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-digi-system-iran',
        ogImage: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Купить весы и POS Digi System в Иране — магазин и касса',
        description: 'Как купить оригинальные весы и POS Digi для магазинов Ирана: тип магазина и число касс.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-digi-system-iran',
        image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        keywords: 'купить Digi System Иран, весы POS, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Каталог Digi', url: 'digi-system', desc: 'Весы и POS' },
            { title: 'Купить Teraoka', url: 'buy-teraoka-iran', desc: 'Японские весы' },
            { title: 'Запрос', url: 'contact?product=Digi%20System', desc: 'Проформа' }
          ]);
      setupWhatsappLinks();
    });
