bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'FXGuard Exchange', url: 'fxguard-exchange' }
      ];
      injectPageSeo('fxguardExchange', {
        canonical: 'https://bizdavar.com/pages/fxguard-exchange'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.fxguardExchange.geoText',
        text: 'نمونه‌کار فین‌تک برای مسیر ایران ↔ ترکیه — طراحی و توسعه توسط بیزدوار گروپ.'
      });
      injectCaseStudySchema({
        id: 'fxguard-exchange',
        name: 'FXGuard Exchange — پلتفرم تبادل تومان و لیر',
        description: 'نمونه‌کار طراحی وب‌اپلیکیشن تبادل ارز IRR ↔ TRY با نرخ زنده، KYC و پیگیری سفارش',
        service: 'طراحی و توسعه پلتفرم فین‌تک',
        slug: 'pages/fxguard-exchange'
      });
      renderRelatedLinks([
        { title: 'CRM واتساپ', url: 'fxguard', desc: 'اسکریپت اختصاصی بیزدوار' },
        { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
        { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
      ]);
      setupWhatsappLinks();
    });
