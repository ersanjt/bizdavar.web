bizdavarPageInit(function () {
      injectPageSeo('enpo', {
        canonical: 'https://bizdavar.com/tr/pages/pneumatic',
        ogImage: 'assets/images/enpo/1759141902.webp',
        ogImageAlt: "Endüstriyel pnömatik | Silindir, valf ve hava hazırlayıcı — Bizdavar",
        keywords: "endüstriyel pnömatik, silindir, valf, hava hazırlayıcı, Bizdavar",
        title: "Endüstriyel pnömatik | Silindir, valf ve hava hazırlayıcı — Bizdavar",
        description: "Endüstriyel pnömatik serileri: hava hazırlama, silindir, valf, manyetik sensör ve gripper. Teklif Bizdavar Group."
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
      renderGeoStrip('geoStrip', { text: 'Endüstriyel pnömatik tedariki — teknik danışmanlık, proforma ve lojistik, Bizdavar Group.' });
      renderRelatedLinks([
        { title: 'Catalog', url: 'products#supply', desc: 'Supply' },
        { title: 'Contact', url: 'contact', desc: 'Quote' }
      ]);
      setupWhatsappLinks();
    });
