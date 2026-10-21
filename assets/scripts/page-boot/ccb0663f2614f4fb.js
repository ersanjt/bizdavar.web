bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'وبسایت چندزبانه برای بازار ایران و ترکیه', url: 'multilingual-web-iran-turkey' }
          ];
      injectPageSeo('articleMultilingualWeb', {
        canonical: 'https://bizdavar.com/pages/articles/multilingual-web-iran-turkey',
        ogImage: 'assets/images/blog/blog-multilingual.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'وبسایت چندزبانه برای بازار ایران و ترکیه',
        description: 'hreflang، نسخه RTL فارسی، اعتماد محلی و تحویل سریع برای کسب‌وکارهای دو بازاری ایران و ترکیه.',
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/multilingual-web-iran-turkey',
        image: 'assets/images/blog/blog-multilingual.webp',
        keywords: 'سایت چندزبانه, hreflang, طراحی سایت فارسی ترکی, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'تحویل ۵روزه' },
            { title: 'خدمات طراحی وب', url: 'services#web-design', desc: 'پروژه سفارشی' },
            { title: 'استعلام', url: 'contact?service=web-design', desc: 'شروع پروژه' }
          ]);
      setupWhatsappLinks();
    });
