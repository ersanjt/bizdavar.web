bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'services', url: 'pages/services' },
        { page: 'fieldTech', url: 'pages/field-tech' }
      ];
      injectPageSeo('fieldTech', {
        canonical: 'https://bizdavar.com/pages/field-tech',
        ogImage: 'assets/images/content/field-tech-hero.svg'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      if (typeof window.initFieldTechPage === 'function') window.initFieldTechPage();
      setupWhatsappLinks();
      const geo = (window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('fieldTechPage.geoText')) ||
        'خدمات فنی بیزدوار — نصب CCTV، سیم‌کشی و نورمخفی در تبریز و استانبول.';
      renderGeoStrip('geoStrip', { text: geo });
      const related = (window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('fieldTechPage.related')) || [
        { title: 'همه خدمات', url: 'services', desc: 'دیجیتال و فنی' },
        { title: 'تماس', url: 'contact', desc: 'فرم و واتساپ' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت' }
      ];
      if (window.renderRelatedLinks) window.renderRelatedLinks(related);
    });
