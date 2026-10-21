bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { name: 'BizSeat', url: 'bizseat' }
      ];
      injectPageSeo('bizseat', { canonical: 'https://bizdavar.com/pages/bizseat' });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.bizseat.geoText',
        text: 'محصول خودرو اختراع‌شده در پارک علم و فناوری دانشگاه تبریز — طراحی تیم بیزدوار و عرضه در دیجی‌کالا.'
      });
      injectSupplyBrandSchema({
        id: 'bizseat',
        name: 'BizSeat — Car Seat Backrest',
        description: 'Car seat backrest invented, designed and manufactured in 1399 (2020–2021) at the University of Tabriz Science and Technology Park by Bizdavar, with Technology Pardazan Tosee Khavarmianeh and Imen Sahand Padideh.',
        brand: 'BizSeat',
        image: 'assets/images/products/bizseat/bizseat-hero.svg'
      });
    });
