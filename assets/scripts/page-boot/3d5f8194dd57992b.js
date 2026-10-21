bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'BizTab', url: 'biztab' }
      ];
      injectPageSeo('biztab', { canonical: 'https://bizdavar.com/pages/biztab' });
renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.biztab.geoText',
        text: 'طراحی و توسعه محصول IoT در تبریز — بخشی از اکوسیستم نوآوری و صنعتی بیزدوار گروپ.'
      });
      injectSupplyBrandSchema({
        id: 'biztab',
        name: 'BizTab — Non-contact Wall Thermometer',
        description: 'First non-contact wall thermometer designed in Tabriz by the Bizdavar team. Measurement error under 0.3°C, approved by University of Tabriz professors.',
        brand: 'BizTab',
        image: 'assets/images/gallery/expo-tabrizu-incubator.jpg'
      });
    });
