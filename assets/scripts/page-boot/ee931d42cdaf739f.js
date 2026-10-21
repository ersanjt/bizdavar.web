bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' },
        { name: 'چک‌لیست راه‌اندازی سایت در ۵ روز', url: 'website-speed-5-days' }
      ];
      injectPageSeo('articleWebsiteSpeed5Days', {
        canonical: 'https://bizdavar.com/pages/articles/website-speed-5-days',
        ogImage: 'assets/images/content/fast-speed-banner.svg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'چک‌لیست راه‌اندازی سایت در ۵ روز',
        description: 'چک‌لیست عملی برای آنلاین شدن در ۵ روز با Fast Web Studio بیزدوار.',
        date: '2026-08-13',
        slug: 'pages/articles/website-speed-5-days',
        image: 'assets/images/content/fast-speed-banner.svg'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
        { title: 'Fast Web Studio', url: 'fast', desc: 'پلن‌ها' },
        { title: 'راهنمای Fast', url: 'articles/fast-studio', desc: 'جزئیات پلن‌ها' },
        { title: 'وب و اپ اختصاصی', url: 'custom-web-app', desc: 'پروژه سفارشی' },
        { title: 'تماس', url: 'contact', desc: 'شروع' }
      ]);
      setupWhatsappLinks();
    });
