bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'SMM Turk', url: 'smm-turk' }
      ];
      injectPageSeo('smmTurk', {
        canonical: 'https://bizdavar.com/pages/smm-turk'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.smmTurk.geoText',
        text: 'نمونه‌کار طراحی وب و پنل SMM برای بازار ترکیه و بین‌الملل — بیزدوار گروپ.'
      });
      injectCaseStudySchema({
        id: 'smm-turk',
        name: 'SMM Turk — طراحی پنل SMM و وبسایت',
        description: 'نمونه‌کار طراحی وب برای SMM Turk — پلتفرم پنل خدمات شبکه‌های اجتماعی در ترکیه',
        service: 'طراحی وبسایت و پنل کاربری',
        slug: 'pages/smm-turk'
      });
      renderRelatedLinks([
        { title: 'خدمات SMM', url: 'services#smm', desc: 'مدیریت شبکه‌های اجتماعی' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
      ]);
      setupWhatsappLinks();
    });
