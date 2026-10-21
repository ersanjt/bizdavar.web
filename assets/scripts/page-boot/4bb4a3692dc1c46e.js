bizdavarPageInit(function () {
      injectPageSeo('enpo', {
        canonical: 'https://bizdavar.com/en/pages/pneumatic',
        ogImage: 'assets/images/enpo/1759141902.webp',
        ogImageAlt: "Industrial pneumatics | Cylinders, valves and air prep — Bizdavar",
        keywords: "industrial pneumatics, pneumatic cylinder, pneumatic valve, air preparation unit, Bizdavar",
        title: "Industrial pneumatics | Cylinders, valves and air prep — Bizdavar",
        description: "Industrial pneumatic series: air preparation, cylinders, valves, magnetic sensors and grippers. Quote the exact model with Bizdavar Group."
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'enpo', url: 'pneumatic' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'enpo', url: 'pages/pneumatic' }
      ]);
      initEnpoPage();
      injectEnpoSchema();
      renderGeoStrip('geoStrip', { text: 'Industrial pneumatic supply — technical consulting, proforma and logistics by Bizdavar Group.' });
      renderRelatedLinks([
        { title: 'Catalog', url: 'products#supply', desc: 'Supply' },
        { title: 'Contact', url: 'contact', desc: 'Quote' }
      ]);
      setupWhatsappLinks();
    });
