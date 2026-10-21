bizdavarPageInit(function () {
      injectPageSeo('contact', {
        canonical: 'https://bizdavar.com/pages/contact',
        ogImage: 'assets/images/content/contact-banner.svg'
      });
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'contact', url: 'contact' }
      ];
renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      fillContactDetails();
      setupWhatsappLinks();
      injectContactPageSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'contactPage.geoText',
        text: 'مشاوره و پشتیبانی از دفاتر ایران، ترکیه، ارمنستان و دبی — واتساپ فارسی و ترکی.'
      });
    });
