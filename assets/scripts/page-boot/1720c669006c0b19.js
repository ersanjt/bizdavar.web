bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خدمات فنی میدانی بیزدوار — تبریز', url: 'field-tech-services' }
          ];
      injectPageSeo('articleFieldTech', {
        canonical: 'https://bizdavar.com/pages/articles/field-tech-services',
        ogImage: 'assets/images/content/home-svc-field.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خدمات فنی میدانی بیزدوار — تبریز',
        description: 'دوربین مداربسته، سیم‌کشی، نورمخفی و نصب تجهیزات در تبریز — هماهنگی واتساپ و اجرای میدانی تیم بیزدوار.',
        date: '2026-05-10',
        dateModified: '2026-08-24',
        slug: 'pages/articles/field-tech-services',
        image: 'assets/images/content/home-svc-field.webp',
        keywords: 'خدمات فنی تبریز, دوربین مداربسته, نورمخفی, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'صفحه فیلد تک', url: 'field-tech', desc: 'CCTV و نورمخفی' },
            { title: 'خدمات دیجیتال', url: 'services', desc: 'وب و SMM' },
            { title: 'تماس', url: 'contact', desc: 'هماهنگی واتساپ' }
          ]);
      setupWhatsappLinks();
    });
