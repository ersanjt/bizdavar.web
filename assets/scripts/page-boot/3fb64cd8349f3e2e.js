bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Digital marketing for US and EU markets — budgets in USD and EUR', url: 'digital-marketing-us-eu' }
          ];
      injectPageSeo('articleDigitalMarketingUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing-us-eu',
        ogImage: 'assets/images/blog/blog-ads-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Digital marketing for US and EU markets — budgets in USD and EUR',
        description: 'Google Ads, Meta and LinkedIn for US/EU audiences — invoiced in USD or EUR, English landings and GA4 reporting.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/digital-marketing-us-eu',
        image: 'assets/images/blog/blog-ads-us-eu.jpg',
        keywords: 'Google Ads EU, US digital marketing, LinkedIn Ads, Meta Ads USD, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Digital marketing services', url: 'services#digital-marketing', desc: 'Ads, SEO and CRO' },
            { title: 'US/EU website design', url: 'website-design-us-eu', desc: 'English landings' },
            { title: 'Campaign quote', url: 'contact?service=digital-marketing', desc: 'USD/EUR budget' }
          ]);
      setupWhatsappLinks();
    });
