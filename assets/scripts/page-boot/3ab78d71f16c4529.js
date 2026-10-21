bizdavarPageInit(function () {
      injectPageSeo('enpo', {
        canonical: 'https://bizdavar.com/ar/pages/pneumatic',
        ogImage: 'assets/images/enpo/1759141902.webp',
        ogImageAlt: "معدات هواء مضغوط صناعية | أسطوانات وصمامات وتجهيز هواء — بيزدوار",
        keywords: "هواء مضغوط, أسطوانة هوائية, صمام, تجهيز هواء, بيزدوار",
        title: "معدات هواء مضغوط صناعية | أسطوانات وصمامات وتجهيز هواء — بيزدوار",
        description: "سلاسل هواء مضغوط صناعية: تجهيز الهواء، الأسطوانات، الصمامات، الحساسات المغناطيسية والقوابض. استفسار بالموديل الدقيق من Bizdavar Group."
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
      renderGeoStrip('geoStrip', { text: 'توريد معدات هواء مضغوط صناعية — استشارة فنية وعرض سعر ولوجستيات من بيزدوار.' });
      renderRelatedLinks([
        { title: 'Catalog', url: 'products#supply', desc: 'Supply' },
        { title: 'Contact', url: 'contact', desc: 'Quote' }
      ]);
      setupWhatsappLinks();
    });
