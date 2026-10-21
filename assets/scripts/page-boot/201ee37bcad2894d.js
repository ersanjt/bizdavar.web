bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Local SEO for Iran businesses — Google Maps and local search', url: 'local-seo-iran' }
          ];
      injectPageSeo('articleLocalSeo', {
        canonical: 'https://bizdavar.com/pages/articles/local-seo-iran',
        ogImage: 'assets/images/blog/blog-local-seo.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Local SEO for Iran businesses — Google Maps and local search',
        description: 'Google Business Profile, consistent NAP, local landing pages and internal links — practical local SEO with Bizdavar.',
        date: '2026-04-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/local-seo-iran',
        image: 'assets/images/blog/blog-local-seo.jpg',
        keywords: 'local SEO Iran, Google Maps, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خدمات سئو', url: 'services#digital-marketing', desc: 'کمپین و محتوا' },
            { title: 'Fast Studio', url: 'fast', desc: 'لندینگ سریع' },
            { title: 'استعلام سئو', url: 'contact?service=digital-marketing', desc: 'مشاوره محلی' }
          ]);
      setupWhatsappLinks();
    });
