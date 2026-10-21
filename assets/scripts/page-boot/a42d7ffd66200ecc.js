bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها', url: 'what-is-digital-marketing' }
          ];
      injectPageSeo('articleWhatIsDm', {
        canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing',
        ogImage: 'assets/images/blog/blog-what-is-dm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'دیجیتال مارکتینگ چیست؟ — راهنمای کامل برای کسب‌وکارها',
        description: 'دیجیتال مارکتینگ چیست: سئو، گوگل ادز، SMM، محتوا و سنجش لید — مسیر عملی بیزدوار برای ایران و ترکیه.',
        date: '2025-02-10',
        dateModified: '2026-09-01',
        slug: 'pages/articles/what-is-digital-marketing',
        image: 'assets/images/blog/blog-what-is-dm.webp',
        keywords: 'دیجیتال مارکتینگ چیست, بازاریابی دیجیتال, سئو, تبلیغات گوگل, SMM, CRO, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'افزایش فروش با دیجیتال مارکتینگ', url: 'digital-marketing', desc: 'CRO و قیف فروش' },
            { title: 'خدمات بازاریابی دیجیتال', url: 'services#digital-marketing', desc: 'اجرا با تیم بیزدوار' },
            { title: 'استعلام کمپین', url: 'contact?service=digital-marketing', desc: 'شروع مشاوره رایگان' }
          ]);
      setupWhatsappLinks();
    });
