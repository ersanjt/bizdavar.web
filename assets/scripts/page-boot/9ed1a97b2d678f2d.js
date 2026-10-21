bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Купить Prosense в Иране — PQ, SafeVader и SIL', url: 'buy-prosense-iran' }
          ];
      injectPageSeo('articleBuyProsenseIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-prosense-iran',
        ogImage: 'assets/images/prosense/series-pq.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Купить Prosense в Иране — PQ, SafeVader и SIL',
        description: 'Оригинальные газовые детекторы Prosense для Ирана — PQ, SafeVader, SIL и запрос в WhatsApp.',
        date: '2026-08-28',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-prosense-iran',
        image: 'assets/images/prosense/series-pq.webp',
        keywords: 'купить Prosense, газовый детектор, PQ, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Каталог Prosense', url: 'prosense', desc: 'PQ и SafeVader' },
            { title: 'Купить VEGA', url: 'buy-vegapuls-iran', desc: 'Уровень' },
            { title: 'Запрос', url: 'contact?product=Prosense', desc: 'Проформа' }
          ]);
      setupWhatsappLinks();
    });
