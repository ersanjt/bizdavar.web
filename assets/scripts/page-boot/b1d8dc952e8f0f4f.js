bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'Marvi Society', url: 'marvi-society' }
      ];
      injectPageSeo('marviSociety', {
        canonical: 'https://bizdavar.com/pages/marvi-society'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.marviSociety.geoText',
        text: 'نمونه‌کار توسعه اپ iOS برای بازار استانبول و بین‌الملل — طراحی تا انتشار در App Store توسط بیزدوار گروپ.'
      });
      injectCaseStudySchema({
        id: 'marvi-society',
        name: 'Marvi Society — اپلیکیشن iOS',
        description: 'نمونه‌کار توسعه اپ iOS برای Marvi Society — کلاب دعوت‌محور creator و مکان در استانبول',
        service: 'توسعه اپلیکیشن iOS',
        slug: 'pages/marvi-society'
      });
      renderRelatedLinks([
        { title: 'اپلیکیشن موبایل', url: 'services#software-apps', desc: 'Android، iOS و سامانه' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' },
        { title: 'تماس', url: 'contact', desc: 'سفارش پروژه مشابه' }
      ]);
      setupWhatsappLinks();
    });
