bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Multilingual websites for Iran and Turkey markets', url: 'multilingual-web-iran-turkey' }
          ];
      injectPageSeo('articleMultilingualWeb', {
        canonical: 'https://bizdavar.com/pages/articles/multilingual-web-iran-turkey',
        ogImage: 'assets/images/blog/blog-multilingual.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Multilingual websites for Iran and Turkey markets',
        description: 'hreflang, Persian RTL, local trust and fast delivery for dual Iran/Turkey markets.',
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/multilingual-web-iran-turkey',
        image: 'assets/images/blog/blog-multilingual.webp',
        keywords: 'multilingual website, hreflang, Persian Turkish web, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: '5-day delivery' },
            { title: 'Web design services', url: 'services#web-design', desc: 'Custom project' },
            { title: 'Request a quote', url: 'contact?service=web-design', desc: 'Start a project' }
          ]);
      setupWhatsappLinks();
    });
