bizdavarPageInit(function () {
      const I = window.BIZDAVAR_I18N;
      const crumbName = I && typeof I.t === 'function' ? I.t('nav.productOstrich', 'Ostrich leather') : 'Ostrich leather';
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products' },
        { name: crumbName, url: 'ostrich-leather' }
      ];
      injectPageSeo('ostrichLeather', { canonical: 'https://bizdavar.com/pages/ostrich-leather' });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.ostrich.geoText',
        text: 'چرم شترمرغ تولید ایران — کراس، رنگ‌شده و ساق. صادرات به چین و ترکیه.'
      });
      if (typeof injectSupplyBrandSchema === 'function') {
        injectSupplyBrandSchema({
          id: 'ostrich-leather',
          name: 'Iranian Ostrich Leather',
          description: 'Iranian ostrich leather produced end to end in Iran. Crust from 6.50 USD per square foot, dyed from 8.50 USD per square foot, leg skins from 6 USD. Exported to China and Turkey.',
          brand: 'Bizdavar',
          category: 'Exotic leather',
          image: 'assets/images/products/ostrich/color-swatches.jpg',
          url: 'pages/ostrich-leather.html',
          price: '6.00',
          priceCurrency: 'USD',
          areaServed: ['IR', 'CN', 'TR']
        });
      }
    });
