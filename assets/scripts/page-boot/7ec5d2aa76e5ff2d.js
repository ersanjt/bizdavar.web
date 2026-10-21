bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'موقع متعدد اللغات لأسواق إيران وتركيا', url: 'multilingual-web-iran-turkey' }
          ];
      injectPageSeo('articleMultilingualWeb', {
        canonical: 'https://bizdavar.com/pages/articles/multilingual-web-iran-turkey',
        ogImage: 'assets/images/blog/blog-multilingual.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'موقع متعدد اللغات لأسواق إيران وتركيا',
        description: 'hreflang وRTL فارسي وثقة محلية وتسليم سريع لسوقي إيران وتركيا.',
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/multilingual-web-iran-turkey',
        image: 'assets/images/blog/blog-multilingual.webp',
        keywords: 'موقع متعدد اللغات, hreflang, فارسي تركي, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'تسليم خلال ٥ أيام' },
            { title: 'خدمات تصميم الويب', url: 'services#web-design', desc: 'مشروع مخصص' },
            { title: 'استعلام', url: 'contact?service=web-design', desc: 'بدء المشروع' }
          ]);
      setupWhatsappLinks();
    });
