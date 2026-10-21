function bootBlogPage() {
      const chrome = window.__bizdavarChrome || window.renderSiteChrome;
      if (typeof chrome === 'function') chrome();
      setupWhatsappLinks();
      injectPageSeo('blog', {
        canonical: 'https://bizdavar.com/pages/blog',
        type: 'website'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' }
      ]);
      if (typeof initBlogPage === 'function') initBlogPage();
      renderGeoStrip('geoStrip', {
        textKey: 'blogPage.geoText',
        text: 'مقالات تخصصی برای کسب‌وکارهای ایران و ترکیه — بازاریابی دیجیتال، سئو، طراحی وب چندزبانه و تامین تجهیزات صنعتی VEGA.'
      });
      renderRelatedLinks([
        { title: 'طراحی سایت US/EU', url: 'articles/website-design-us-eu', desc: 'از ۹۹ دلار / فاکتور یورو', titleKey: 'blogPage.related.0.title', descKey: 'blogPage.related.0.desc' },
        { title: 'Ads آمریکا و اروپا', url: 'articles/digital-marketing-us-eu', desc: 'Google، Meta، LinkedIn', titleKey: 'blogPage.related.1.title', descKey: 'blogPage.related.1.desc' },
        { title: 'کاتالوگ VEGA', url: 'vega', desc: 'سنسور سطح و فشار', titleKey: 'blogPage.related.2.title', descKey: 'blogPage.related.2.desc' },
        { title: 'تماس و استعلام', url: 'contact', desc: 'مشاوره رایگان', titleKey: 'blogPage.related.3.title', descKey: 'blogPage.related.3.desc' }
      ]);
      injectBlogListSchema();
    }
    bizdavarPageInit(bootBlogPage);
