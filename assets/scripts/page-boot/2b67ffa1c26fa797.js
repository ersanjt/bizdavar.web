bizdavarBootPage({
      seo: 'about',
      seoOptions: {
        canonical: 'https://bizdavar.com/pages/about',
        ogImage: 'assets/images/content/about-hero.jpg'
      },
      crumbs: [
        { page: 'home', url: 'index' },
        { page: 'about', url: 'about' }
      ],
      init: function () {
        if (typeof window.ensureBizdavarPageShell === 'function') window.ensureBizdavarPageShell();
        if (typeof window.renderSiteChrome === 'function') window.renderSiteChrome();
        renderCompanyIntelAbout();
        injectIntelFaqSchema();
        const related = window.BIZDAVAR_I18N?.raw('aboutPage.relatedLinks') || [
          { title: 'خدمات ما', url: 'services', desc: 'بازاریابی دیجیتال، وب، SMM و صنعت' },
          { title: 'نمونه‌کارها', url: 'portfolio', desc: 'طراحی وب، محصولات و تامین صنعتی' },
          { title: 'تماس با ما', url: 'contact', desc: 'مشاوره رایگان' }
        ];
        renderRelatedLinks(related);
      }
    });
