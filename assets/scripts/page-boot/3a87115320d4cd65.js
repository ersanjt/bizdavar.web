bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'ما هي Bizdavar Group؟ التاريخ والفريق والأنشطة', url: 'about-bizdavar-group' }
          ];
      injectPageSeo('articleAboutBizdavar', {
        canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group',
        ogImage: 'assets/images/content/about-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'ما هي Bizdavar Group؟ التاريخ والفريق والأنشطة',
        description: 'ملف بيزدوار: المؤسس Ersan Jahed Tabrizi، خدمات رقمية ومنتجات خاصة وتوريد صناعي في ١١ دولة.',
        date: '2025-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/about-bizdavar-group',
        image: 'assets/images/content/about-hero.jpg',
        keywords: 'Bizdavar Group, Ersan Jahed Tabrizi, توريد صناعي'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'من نحن', url: 'about', desc: 'الفريق والتاريخ' },
            { title: 'الخدمات', url: 'services', desc: 'أربعة محاور' },
            { title: 'اتصل بنا', url: 'contact', desc: 'استشارة مجانية' }
          ]);
      setupWhatsappLinks();
    });
