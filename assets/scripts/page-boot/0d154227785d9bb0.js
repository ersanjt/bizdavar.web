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
        textKey: 'customWebAppPage.geoText'
      });
      const relatedByLang = {
        fa: [
          { title: 'Fast Web Studio', url: 'fast', desc: 'سایت ۵ روزه' },
          { title: 'مقاله توسعه اختصاصی', url: 'articles/custom-web-app-development', desc: 'راهنمای انتخاب' },
          { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های وب' },
          { title: 'تماس', url: 'contact', desc: 'شروع پروژه' }
        ],
        en: [
          { title: 'Fast Web Studio', url: 'fast', desc: '5-day English site' },
          { title: 'Custom development article', url: 'articles/custom-web-app-development', desc: 'How to choose' },
          { title: 'Portfolio', url: 'portfolio', desc: 'Web projects' },
          { title: 'Contact', url: 'contact', desc: 'Start a project' }
        ],
        tr: [
          { title: 'Fast Web Studio', url: 'fast', desc: '5 günlük site' },
          { title: 'Özel geliştirme yazısı', url: 'articles/custom-web-app-development', desc: 'Nasıl seçilir' },
          { title: 'Portfolyo', url: 'portfolio', desc: 'Web projeleri' },
          { title: 'İletişim', url: 'contact', desc: 'Projeyi başlat' }
        ],
        ru: [
          { title: 'Fast Web Studio', url: 'fast', desc: 'Сайт за 5 дней' },
          { title: 'Статья о заказной разработке', url: 'articles/custom-web-app-development', desc: 'Как выбрать' },
          { title: 'Портфолио', url: 'portfolio', desc: 'Веб-проекты' },
          { title: 'Контакты', url: 'contact', desc: 'Начать проект' }
        ],
        ar: [
          { title: 'Fast Web Studio', url: 'fast', desc: 'موقع في ٥ أيام' },
          { title: 'مقال التطوير المخصص', url: 'articles/custom-web-app-development', desc: 'كيف تختار' },
          { title: 'الأعمال', url: 'portfolio', desc: 'مشاريع الويب' },
          { title: 'تواصل', url: 'contact', desc: 'ابدأ المشروع' }
        ]
      };
      const relatedLang = document.documentElement.lang || 'fa';
      renderRelatedLinks(relatedByLang[relatedLang] || relatedByLang.en);
    });
