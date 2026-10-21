if (typeof bizdavarBootPage === 'function') bizdavarBootPage({
      seo: 'services',
      seoOptions: {
        canonical: 'https://bizdavar.com/pages/services',
        ogImage: 'assets/images/content/hero-home.svg'
      },
      crumbs: [
        { page: 'home', url: 'index' },
        { page: 'services', url: 'services' }
      ],
      init: function () {
        if (typeof window.ensureBizdavarPageShell === 'function') window.ensureBizdavarPageShell();
        if (typeof window.renderSiteChrome === 'function') window.renderSiteChrome();
        if (typeof window.initServicesPage === 'function') window.initServicesPage();
        if (typeof window.injectServiceSchema === 'function') window.injectServiceSchema();
        if (typeof window.renderGeoStrip === 'function') {
          window.renderGeoStrip('geoStrip', {
            textKey: 'servicesPage.geoText',
            text: 'خدمات دیجیتال و فنی بیزدوار — تمرکز اجرایی تبریز و استانبول، مشاوره فارسی و واتساپ تخصصی خدمات فنی.'
          });
        }
        if (typeof window.renderServicesRelatedLinks === 'function') window.renderServicesRelatedLinks();
      }
    });
