bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'How digital marketing increases sales', url: 'digital-marketing' }
          ];
      injectPageSeo('articleDigitalMarketing', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing',
        ogImage: 'assets/images/blog/blog-dm-sales.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'How digital marketing increases sales',
        description: 'Sales funnel, CRO, targeted ads and lead follow-up — a practical growth path with Bizdavar.',
        date: '2025-04-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/digital-marketing',
        image: 'assets/images/blog/blog-dm-sales.webp',
        keywords: 'increase online sales, CRO, sales funnel, Google Ads, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Digital marketing services', url: 'services#digital-marketing', desc: 'Campaigns and CRO' },
            { title: 'Fast Web Studio', url: 'fast', desc: 'Sales landing' },
            { title: 'Request a quote', url: 'contact?service=digital-marketing', desc: 'Start a campaign' }
          ]);
      setupWhatsappLinks();
    });
