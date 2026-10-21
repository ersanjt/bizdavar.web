bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟', url: 'digital-marketing' }
          ];
      injectPageSeo('articleDigitalMarketing', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing',
        ogImage: 'assets/images/blog/blog-dm-sales.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'چگونه بازاریابی دیجیتال فروش را افزایش می‌دهد؟',
        description: 'قیف فروش، CRO، تبلیغات هدفمند و پیگیری لید — مسیر عملی افزایش فروش آنلاین با بیزدوار.',
        date: '2025-04-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/digital-marketing',
        image: 'assets/images/blog/blog-dm-sales.webp',
        keywords: 'افزایش فروش آنلاین, CRO, قیف فروش, تبلیغات گوگل, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خدمات دیجیتال مارکتینگ', url: 'services#digital-marketing', desc: 'کمپین و CRO' },
            { title: 'Fast Web Studio', url: 'fast', desc: 'لندینگ فروش' },
            { title: 'استعلام', url: 'contact?service=digital-marketing', desc: 'شروع کمپین' }
          ]);
      setupWhatsappLinks();
    });
