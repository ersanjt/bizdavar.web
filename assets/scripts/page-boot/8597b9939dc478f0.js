bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'portfolio', url: 'portfolio' },
        { name: 'BizClean V5', url: 'bizsanitizer-v5' }
      ];
      injectPageSeo('bizsanitizerV5', { canonical: 'https://bizdavar.com/pages/bizsanitizer-v5' });
renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'caseStudy.bizsanitizerV5.geoText',
        text: 'محصول بهداشتی مهندسی‌شده در ایران — طراحی تیم بیزدوار و عرضه از طریق دیجی‌کالا.'
      });
      injectSupplyBrandSchema({
        id: 'bizsanitizer-v5',
        name: 'BizClean V5 — automatic hand sanitizer',
        description: 'BizClean V5 wall-mounted automatic contactless hand sanitizer with ultrasonic sensor. Engineered by the Bizdavar team during the global COVID-19 pandemic. Available on Digikala.',
        brand: 'BizClean',
        image: 'assets/images/gallery/expo-imen-booth.jpg',
        url: 'https://www.digikala.com/product/dkp-3730222/'
      });
      const videoLd = document.createElement('script');
      videoLd.type = 'application/ld+json';
      videoLd.id = 'jsonld-bizsan-video';
      videoLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'BizClean V1 prototype — hand sanitizer short',
        description: 'YouTube short showing the early BizClean V1 prototype. The commercial retail product is BizClean V5 on Digikala.',
        embedUrl: 'https://www.youtube.com/embed/GcOtue1Nmlo',
        contentUrl: 'https://www.youtube.com/shorts/GcOtue1Nmlo',
        uploadDate: '2020',
        publisher: { '@type': 'Organization', name: 'Bizdavar', url: 'https://bizdavar.com/' }
      });
      document.head.appendChild(videoLd);
    });
