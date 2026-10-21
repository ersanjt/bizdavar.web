bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { name: 'BizPad', url: 'bizpad' }
      ];
      injectPageSeo('bizpad', { canonical: 'https://bizdavar.com/pages/bizpad' });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.bizpad.geoText',
        text: 'پد حرارتی طراحی‌شده در مرکز رشد فناوری دانشگاه تبریز — محصول بیز پد تیم بیزدوار.'
      });
      injectSupplyBrandSchema({
        id: 'bizpad',
        name: 'BizPad — Padideh Heating Pad',
        description: 'Portable heating pad (BizPad) designed and produced at the University of Tabriz Technology Incubator with Imen Sahand Padideh. 5–12 V, max 1 A; washable after removing the heating element.',
        brand: 'BizPad',
        image: 'assets/images/products/bizpet/bizpet-grey.jpg'
      });
    });
