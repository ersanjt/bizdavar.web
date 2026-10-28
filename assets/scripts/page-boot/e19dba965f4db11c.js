bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Локальное SEO для бизнеса по всему миру — Google Maps', url: 'local-seo-iran' }
          ];
      injectPageSeo('articleLocalSeo', {
        canonical: 'https://bizdavar.com/pages/articles/local-seo-iran',
        ogImage: 'assets/images/blog/blog-local-seo.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Локальное SEO для бизнеса по всему миру — Google Maps',
        description: 'Google Business Profile, NAP, локальные лендинги — локальное SEO с Bizdavar.',
        date: '2026-04-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/local-seo-iran',
        image: 'assets/images/blog/blog-local-seo.jpg',
        keywords: 'локальное SEO, Google Maps, Bizdavar'
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
