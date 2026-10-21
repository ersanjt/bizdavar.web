bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها', url: 'social-media-management' }
          ];
      injectPageSeo('articleSmm', {
        canonical: 'https://bizdavar.com/pages/articles/social-media-management',
        ogImage: 'assets/images/blog/blog-smm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'مدیریت شبکه‌های اجتماعی — استراتژی SMM برای برندها',
        description: 'تقویم محتوا، هویت بصری، ریلز و تبلیغات هدفمند اینستاگرام و لینکدین برای برند B2B و B2C — تجربه بیزدوار.',
        date: '2025-03-05',
        dateModified: '2026-08-24',
        slug: 'pages/articles/social-media-management',
        image: 'assets/images/blog/blog-smm.webp',
        keywords: 'مدیریت شبکه اجتماعی, SMM, اینستاگرام B2B, لینکدین, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خدمات SMM', url: 'services#smm', desc: 'تولید محتوا و تبلیغات' },
            { title: 'نمونه‌کار بیزتجارت', url: 'biztejarat', desc: 'اینستاگرام B2B' },
            { title: 'استعلام SMM', url: 'contact?service=smm', desc: 'شروع همکاری' }
          ]);
      setupWhatsappLinks();
    });
