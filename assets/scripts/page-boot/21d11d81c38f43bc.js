bizdavarPageInit(function () {
      injectPageSeo('enpo', {
        canonical: 'https://bizdavar.com/ru/pages/pneumatic',
        ogImage: 'assets/images/enpo/1759141902.webp',
        ogImageAlt: "Промышленная пневматика | Цилиндры, клапаны и подготовка воздуха — Bizdavar",
        keywords: "промышленная пневматика, пневмоцилиндр, пневмоклапан, подготовка воздуха, Bizdavar",
        title: "Промышленная пневматика | Цилиндры, клапаны и подготовка воздуха — Bizdavar",
        description: "Серии промышленной пневматики: подготовка воздуха, цилиндры, клапаны, магнитные датчики и захваты. Запрос точной модели — Bizdavar Group."
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
      renderGeoStrip('geoStrip', { text: 'Поставка промышленной пневматики — консультация, проформа и логистика Bizdavar Group.' });
      renderRelatedLinks([
        { title: 'Catalog', url: 'products#supply', desc: 'Supply' },
        { title: 'Contact', url: 'contact', desc: 'Quote' }
      ]);
      setupWhatsappLinks();
    });
