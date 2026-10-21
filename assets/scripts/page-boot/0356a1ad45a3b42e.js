bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Avrupa ve ABD için İngilizce web tasarım — USD veya EUR fatura', url: 'website-design-us-eu' }
          ];
      injectPageSeo('articleWebsiteDesignUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/website-design-us-eu',
        ogImage: 'assets/images/blog/blog-web-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Avrupa ve ABD için İngilizce web tasarım — USD veya EUR fatura',
        description: 'ABD ve AB için İngilizce site nasıl sipariş edilir: 5 günde $99’dan, özel proje, Stripe, Zoom/Meet ve USD/EUR fatura.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/website-design-us-eu',
        image: 'assets/images/blog/blog-web-us-eu.jpg',
        keywords: 'web tasarım Avrupa, web tasarım ABD, USD web tasarım, Fast Web Studio, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: '$99 / ~€90’dan' },
            { title: 'Web tasarım hizmetleri', url: 'services#web-design', desc: 'Özel US/EU sitesi' },
            { title: 'Teklif iste', url: 'contact?service=web-design', desc: 'USD veya EUR fatura' }
          ]);
      setupWhatsappLinks();
    });
