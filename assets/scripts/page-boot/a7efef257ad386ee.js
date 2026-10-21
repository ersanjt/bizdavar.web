bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت', url: 'about-bizdavar-group' }
          ];
      injectPageSeo('articleAboutBizdavar', {
        canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group',
        ogImage: 'assets/images/content/about-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'بیزدوار گروپ چیست؟ — تاریخچه، تیم و حوزه‌های فعالیت',
        description: 'شناسنامه بیزدوار: بنیان‌گذار ارسان جاهد تبریزی، خدمات دیجیتال، محصولات اختصاصی و تامین صنعتی در ۱۱ کشور.',
        date: '2025-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/about-bizdavar-group',
        image: 'assets/images/content/about-hero.jpg',
        keywords: 'بیزدوار گروپ, Bizdavar Group, ارسان جاهد تبریزی, تامین صنعتی, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'درباره ما', url: 'about', desc: 'تیم و تاریخچه' },
            { title: 'خدمات', url: 'services', desc: 'چهار محور اصلی' },
            { title: 'تماس', url: 'contact', desc: 'مشاوره رایگان' }
          ]);
      setupWhatsappLinks();
    });
