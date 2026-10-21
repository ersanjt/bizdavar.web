bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'إدارة التواصل الاجتماعي — استراتيجية SMM للعلامات', url: 'social-media-management' }
          ];
      injectPageSeo('articleSmm', {
        canonical: 'https://bizdavar.com/pages/articles/social-media-management',
        ogImage: 'assets/images/blog/blog-smm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'إدارة التواصل الاجتماعي — استراتيجية SMM للعلامات',
        description: 'تقويم المحتوى والهوية البصرية وReels وإعلانات إنستغرام ولينكدإن — SMM بيزدوار.',
        date: '2025-03-05',
        dateModified: '2026-08-24',
        slug: 'pages/articles/social-media-management',
        image: 'assets/images/blog/blog-smm.webp',
        keywords: 'إدارة سوشيال ميديا, SMM, إنستغرام B2B, لينكدإن, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خدمات SMM', url: 'services#smm', desc: 'محتوى وإعلانات' },
            { title: 'دراسة BizTejarat', url: 'biztejarat', desc: 'إنستغرام B2B' },
            { title: 'استعلام SMM', url: 'contact?service=smm', desc: 'بدء التعاون' }
          ]);
      setupWhatsappLinks();
    });
