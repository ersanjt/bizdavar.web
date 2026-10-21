bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'portfolio', url: 'portfolio' },
            { name: 'بیزتجارت', url: 'biztejarat' }
          ];
          injectPageSeo('biztejarat', {
            canonical: 'https://bizdavar.com/pages/biztejarat'
          });
renderBreadcrumbs(crumbs);
          injectBreadcrumbSchema(crumbs);
          renderGeoStrip('geoStrip', {
            textKey: 'caseStudy.biztejarat.geoText',
            text: 'نمونه‌کار گذشته SMM B2B — معرفی تجهیزات صنعتی VEGA، Prosense و Gamak با زبان فارسی و انگلیسی.'
          });
          injectCaseStudySchema({
            id: 'biztejarat',
            name: 'بیزتجارت — نمونه‌کار SMM محصولات صنعتی',
            description: 'پروژه گذشته مدیریت و تولید محتوای اینستاگرام برای معرفی تجهیزات الکترونیکی، ابزار دقیق و قطعات صنعتی',
            service: 'خدمات اجراشده',
            slug: 'pages/biztejarat'
          });
          renderRelatedLinks([{"title":"خدمات SMM","url":"services#smm","desc":"مدیریت شبکه‌های اجتماعی"},{"title":"نمونه‌کار BZ Diamond","url":"bz-diamond","desc":"طراحی وب"},{"title":"نمونه‌کارها","url":"portfolio","desc":"پروژه‌های گذشته و فعال"}]);
            setupWhatsappLinks();
    });
