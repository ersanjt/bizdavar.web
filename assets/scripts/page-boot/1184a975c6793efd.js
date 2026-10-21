bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'ABD ve AB için dijital pazarlama — USD ve EUR bütçe', url: 'digital-marketing-us-eu' }
          ];
      injectPageSeo('articleDigitalMarketingUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing-us-eu',
        ogImage: 'assets/images/blog/blog-ads-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'ABD ve AB için dijital pazarlama — USD ve EUR bütçe',
        description: 'Google Ads, Meta ve LinkedIn — ABD/AB kitle, USD/EUR fatura, İngilizce landing ve GA4.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/digital-marketing-us-eu',
        image: 'assets/images/blog/blog-ads-us-eu.jpg',
        keywords: 'Google Ads Avrupa, ABD reklam, LinkedIn Ads, Meta Ads USD, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Dijital pazarlama', url: 'services#digital-marketing', desc: 'Ads, SEO, CRO' },
            { title: 'US/EU web tasarım', url: 'website-design-us-eu', desc: 'İngilizce landing' },
            { title: 'Kampanya teklifi', url: 'contact?service=digital-marketing', desc: 'USD/EUR bütçe' }
          ]);
      setupWhatsappLinks();
    });
