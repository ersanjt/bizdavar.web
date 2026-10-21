bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Yerel SEO — İran işletmeleri için Google Maps', url: 'local-seo-iran' }
          ];
      injectPageSeo('articleLocalSeo', {
        canonical: 'https://bizdavar.com/pages/articles/local-seo-iran',
        ogImage: 'assets/images/blog/blog-local-seo.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Yerel SEO — İran işletmeleri için Google Maps',
        description: 'Google Business Profile, tutarlı NAP, yerel landing — Bizdavar yerel SEO rehberi.',
        date: '2026-04-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/local-seo-iran',
        image: 'assets/images/blog/blog-local-seo.jpg',
        keywords: 'yerel SEO, Google Maps, Bizdavar'
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
