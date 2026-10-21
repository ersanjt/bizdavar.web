bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'portfolio', url: 'portfolio' },
            { name: 'BZ Diamond', url: 'bz-diamond' }
          ];
          injectPageSeo('bzDiamond', {
            canonical: 'https://bizdavar.com/pages/bz-diamond'
          });
renderBreadcrumbs(crumbs);
          injectBreadcrumbSchema(crumbs);
          renderGeoStrip('geoStrip', {
            textKey: 'caseStudy.bzDiamond.geoText',
            text: 'نمونه‌کار طراحی وب برای برندهای ایران و بین‌المللی — WooCommerce، سئو و پشتیبانی از دفاتر ایران، ترکیه، ارمنستان و دبی.'
          });
          injectCaseStudySchema({
            id: 'bz-diamond',
            name: 'BZ Diamond — طراحی وبسایت و فروشگاه آنلاین',
            description: 'پروژه مشتری در حوزه جواهرات و الماس — طراحی، توسعه و پشتیبانی دیجیتال توسط بیزدوار گروپ',
            service: 'خدمات اجراشده توسط بیزدوار',
            slug: 'pages/bz-diamond'
          });
          renderRelatedLinks([{"title":"Fast Web Studio","url":"fast","desc":"طراحی سایت از $99"},{"title":"نمونه‌کارها","url":"portfolio","desc":"پروژه‌های دیگر"},{"title":"تماس","url":"contact","desc":"سفارش طراحی سایت"}]);
            setupWhatsappLinks();
    });
