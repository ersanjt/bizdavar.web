bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'ما هو التسويق الرقمي؟ دليل كامل للأعمال', url: 'what-is-digital-marketing' }
          ];
      injectPageSeo('articleWhatIsDm', {
        canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing',
        ogImage: 'assets/images/blog/blog-what-is-dm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'ما هو التسويق الرقمي؟ دليل كامل للأعمال',
        description: 'ما هو التسويق الرقمي: سيو وإعلانات جوجل وSMM والمحتوى وقياس العملاء — مسار بيزدوار لإيران وتركيا.',
        date: '2025-02-10',
        dateModified: '2026-09-01',
        slug: 'pages/articles/what-is-digital-marketing',
        image: 'assets/images/blog/blog-what-is-dm.webp',
        keywords: 'ما هو التسويق الرقمي, سيو, إعلانات جوجل, SMM, CRO, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'كيف يزيد التسويق الرقمي المبيعات', url: 'digital-marketing', desc: 'CRO وقمع المبيعات' },
            { title: 'خدمات التسويق الرقمي', url: 'services#digital-marketing', desc: 'التنفيذ مع فريق بيزدوار' },
            { title: 'استعلام الحملة', url: 'contact?service=digital-marketing', desc: 'ابدأ استشارة مجانية' }
          ]);
      setupWhatsappLinks();
    });
