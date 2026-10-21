bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'SEO محلي للأعمال في إيران — Google Maps', url: 'local-seo-iran' }
          ];
      injectPageSeo('articleLocalSeo', {
        canonical: 'https://bizdavar.com/pages/articles/local-seo-iran',
        ogImage: 'assets/images/blog/blog-local-seo.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'SEO محلي للأعمال في إيران — Google Maps',
        description: 'Google Business Profile وNAP وصفحات محلية — SEO محلي مع بيزدوار.',
        date: '2026-04-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/local-seo-iran',
        image: 'assets/images/blog/blog-local-seo.jpg',
        keywords: 'SEO محلي, Google Maps, بيزدوار'
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
