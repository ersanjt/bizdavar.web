bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'MarviSpace', url: 'marvispace' }
      ];
      injectPageSeo('marvispace', {
        canonical: 'https://bizdavar.com/pages/marvispace'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.marvispace.geoText',
        text: 'نمونه‌کار برنامه‌نویسی و طراحی فروشگاه آنلاین محصولات چرمی — بیزدوار گروپ.'
      });
      injectCaseStudySchema({
        id: 'marvispace',
        name: 'MarviSpace — فروشگاه آنلاین محصولات چرمی',
        description: 'نمونه‌کار برنامه‌نویسی، توسعه و طراحی وبسایت فروشگاهی برای محصولات چرمی',
        service: 'طراحی و توسعه فروشگاه آنلاین',
        slug: 'pages/marvispace'
      });
      renderRelatedLinks([
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های دیگر' },
        { title: 'تماس', url: 'contact', desc: 'سفارش طراحی سایت' }
      ]);
      setupWhatsappLinks();
    });
