bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' },
        { name: 'طراحی وب و اپلیکیشن اختصاصی — راهنمای انتخاب', url: 'custom-web-app-development' }
      ];
      injectPageSeo('articleCustomWebApp', {
        canonical: 'https://bizdavar.com/pages/articles/custom-web-app-development',
        ogImage: 'assets/images/content/custom-web-app-hero.svg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'طراحی وب و اپلیکیشن اختصاصی — راهنمای انتخاب',
        description: 'چه زمانی Fast کافی است و چه زمانی به وب‌اپ یا اپ اختصاصی نیاز دارید؟',
        date: '2026-08-13',
        slug: 'pages/articles/custom-web-app-development',
        image: 'assets/images/content/custom-web-app-hero.svg'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
        { title: 'وب و اپ اختصاصی', url: 'custom-web-app', desc: 'صفحه خدمات' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'سایت ۵ روزه' },
        { title: 'چک‌لیست ۵ روزه', url: 'articles/website-speed-5-days', desc: 'آماده‌سازی' },
        { title: 'تماس', url: 'contact', desc: 'شروع پروژه' }
      ]);
      setupWhatsappLinks();
    });
