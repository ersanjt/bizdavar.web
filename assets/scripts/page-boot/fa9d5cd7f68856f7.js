bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'What is digital marketing? A complete guide for businesses', url: 'what-is-digital-marketing' }
          ];
      injectPageSeo('articleWhatIsDm', {
        canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing',
        ogImage: 'assets/images/blog/blog-what-is-dm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'What is digital marketing? A complete guide for businesses',
        description: 'What digital marketing is: SEO, Google Ads, SMM, content and lead measurement — Bizdavar’s path for Iran and Turkey.',
        date: '2025-02-10',
        dateModified: '2026-09-01',
        slug: 'pages/articles/what-is-digital-marketing',
        image: 'assets/images/blog/blog-what-is-dm.webp',
        keywords: 'what is digital marketing, SEO, Google Ads, SMM, CRO, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'How digital marketing increases sales', url: 'digital-marketing', desc: 'CRO and the sales funnel' },
            { title: 'Digital marketing services', url: 'services#digital-marketing', desc: 'Execution with the Bizdavar team' },
            { title: 'Campaign inquiry', url: 'contact?service=digital-marketing', desc: 'Start a free consultation' }
          ]);
      setupWhatsappLinks();
    });
