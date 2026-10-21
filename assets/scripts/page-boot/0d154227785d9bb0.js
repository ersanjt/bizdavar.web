bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'fast', url: 'fast' },
        { page: 'customWebApp', url: 'custom-web-app' }
      ];
      injectPageSeo('customWebApp', {
        canonical: 'https://bizdavar.com/pages/custom-web-app',
        ogImage: 'assets/images/content/custom-web-app-hero.svg'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      if (typeof initCustomWebAppPage === 'function') initCustomWebAppPage();
      renderGeoStrip('geoStrip', {
        textKey: 'customWebAppPage.geoText',
        text: 'طراحی وب‌اپ و اپلیکیشن اختصاصی برای کسب‌وکارهای ایران، ترکیه و بازار بین‌المللی — تیم بیزدوار گروپ.'
      });
      renderRelatedLinks([
        { title: 'Fast Web Studio', url: 'fast', desc: 'سایت ۵ روزه' },
        { title: 'مقاله توسعه اختصاصی', url: 'articles/custom-web-app-development', desc: 'راهنمای انتخاب' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های وب' },
        { title: 'تماس', url: 'contact', desc: 'شروع پروژه' }
      ]);
    });
