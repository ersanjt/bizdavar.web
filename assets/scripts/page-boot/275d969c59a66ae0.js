bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'كيف يزيد التسويق الرقمي المبيعات', url: 'digital-marketing' }
          ];
      injectPageSeo('articleDigitalMarketing', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing',
        ogImage: 'assets/images/blog/blog-dm-sales.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'كيف يزيد التسويق الرقمي المبيعات',
        description: 'قمع المبيعات وCRO والإعلانات ومتابعة العملاء — مسار نمو عملي مع بيزدوار.',
        date: '2025-04-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/digital-marketing',
        image: 'assets/images/blog/blog-dm-sales.webp',
        keywords: 'زيادة المبيعات, CRO, قمع المبيعات, إعلانات جوجل, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خدمات التسويق الرقمي', url: 'services#digital-marketing', desc: 'حملات وتحسين التحويل' },
            { title: 'Fast Web Studio', url: 'fast', desc: 'صفحة هبوط للمبيعات' },
            { title: 'استعلام', url: 'contact?service=digital-marketing', desc: 'بدء الحملة' }
          ]);
      setupWhatsappLinks();
    });
