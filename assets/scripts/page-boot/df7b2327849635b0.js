bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Цифровой маркетинг для США и ЕС — бюджет в USD и EUR', url: 'digital-marketing-us-eu' }
          ];
      injectPageSeo('articleDigitalMarketingUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing-us-eu',
        ogImage: 'assets/images/blog/blog-ads-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Цифровой маркетинг для США и ЕС — бюджет в USD и EUR',
        description: 'Google Ads, Meta и LinkedIn для аудиторий США/ЕС — счёт в USD или EUR, английский лендинг и GA4.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/digital-marketing-us-eu',
        image: 'assets/images/blog/blog-ads-us-eu.jpg',
        keywords: 'Google Ads ЕС, маркетинг США, LinkedIn Ads, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Цифровой маркетинг', url: 'services#digital-marketing', desc: 'Ads, SEO, CRO' },
            { title: 'Сайт US/EU', url: 'website-design-us-eu', desc: 'Английский лендинг' },
            { title: 'Запрос кампании', url: 'contact?service=digital-marketing', desc: 'Бюджет USD/EUR' }
          ]);
      setupWhatsappLinks();
    });
