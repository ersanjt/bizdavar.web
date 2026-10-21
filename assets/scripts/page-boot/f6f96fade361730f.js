bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'سئو محلی برای کسب‌وکار ایران — Google Maps و جستجوی محلی', url: 'local-seo-iran' }
          ];
      injectPageSeo('articleLocalSeo', {
        canonical: 'https://bizdavar.com/pages/articles/local-seo-iran',
        ogImage: 'assets/images/blog/blog-local-seo.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'سئو محلی برای کسب‌وکار ایران — Google Maps و جستجوی محلی',
        description: 'بهینه‌سازی Google Business Profile، NAP یکسان، صفحه فرود محلی و لینک‌های داخلی — مسیر عملی سئو محلی با بیزدوار.',
        date: '2026-04-20',
        dateModified: '2026-08-24',
        slug: 'pages/articles/local-seo-iran',
        image: 'assets/images/blog/blog-local-seo.jpg',
        keywords: 'سئو محلی ایران, Google Maps, بهینه‌سازی محلی, بیزدوار'
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
