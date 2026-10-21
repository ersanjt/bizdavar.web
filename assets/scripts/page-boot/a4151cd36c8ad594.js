bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'بازاریابی دیجیتال برای بازار آمریکا و اروپا — بودجه دلار و یورو', url: 'digital-marketing-us-eu' }
          ];
      injectPageSeo('articleDigitalMarketingUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing-us-eu',
        ogImage: 'assets/images/blog/blog-ads-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'بازاریابی دیجیتال برای بازار آمریکا و اروپا — بودجه دلار و یورو',
        description: 'کمپین Google Ads، Meta و LinkedIn برای مخاطب US/EU با فاکتور دلار یا یورو، لندینگ انگلیسی و گزارش GA4.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/digital-marketing-us-eu',
        image: 'assets/images/blog/blog-ads-us-eu.jpg',
        keywords: 'گوگل ادز اروپا, تبلیغات آمریکا, LinkedIn Ads, Meta Ads USD, بازاریابی دیجیتال یورو, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خدمات بازاریابی دیجیتال', url: 'services#digital-marketing', desc: 'Ads و SEO و CRO' },
            { title: 'طراحی سایت US/EU', url: 'website-design-us-eu', desc: 'لندینگ انگلیسی' },
            { title: 'استعلام کمپین', url: 'contact?service=digital-marketing', desc: 'بودجه USD/EUR' }
          ]);
      setupWhatsappLinks();
    });
