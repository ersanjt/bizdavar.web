bizdavarPageInit(function () {
      injectPageSeo('digiSystem', {
        canonical: 'https://bizdavar.com/pages/digi-system',
        ogImage: 'assets/images/digi-system/hero/digi-retail-hero.webp'
      });
renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'products#supply' },
        { page: 'digiSystem', url: 'digi-system' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'products', url: 'pages/products#supply' },
        { page: 'digiSystem', url: 'pages/digi-system' }
      ]);
      initDigiSystemPage();
      injectDigiSystemSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'digiSystemPage.geoText',
        text: 'تامین Digi System برای پروژه‌های صنعتی — مشاوره فارسی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.'
      });
      renderRelatedLinks([
        { titleKey: 'digiSystemPage.related.0.title', title: 'خرید Digi در ایران', url: 'articles/buy-digi-system-iran', descKey: 'digiSystemPage.related.0.desc', desc: 'ترازو و POS' },
        { titleKey: 'digiSystemPage.related.1.title', title: 'Teraoka Seiko', url: 'teraoka', descKey: 'digiSystemPage.related.1.desc', desc: 'ترازو و POS ژاپن' },
        { titleKey: 'digiSystemPage.related.2.title', title: 'تماس و استعلام', url: 'contact?product=Digi%20System', descKey: 'digiSystemPage.related.2.desc', desc: 'استعلام قیمت Digi System' }
      ]);
      setupWhatsappLinks();
    });
