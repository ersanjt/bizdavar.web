bizdavarPageInit(function () {
      injectPageSeo('enpo', {
        canonical: 'https://bizdavar.com/pages/pneumatic',
        ogImage: 'assets/images/enpo/1759141902.webp',
        ogImageAlt: "خرید سیلندر و شیر پنوماتیک | واحد مراقبت هوا — بیزدوار",
        keywords: "سیلندر پنوماتیک, خرید سیلندر پنوماتیک, شیر پنوماتیک, شیر برقی پنوماتیک, واحد مراقبت هوا, فیلتر رگولاتور, روغن‌زن پنوماتیک, سنسور مغناطیسی سیلندر, گریپر پنوماتیک, پنوماتیک صنعتی, بیزدوار",
        title: "خرید سیلندر و شیر پنوماتیک | واحد مراقبت هوا — بیزدوار",
        description: "سیلندر پنوماتیک، شیر برقی، واحد مراقبت هوا، فیلتر، رگولاتور و روغن‌زن برای خطوط تولید ایران. مشاوره فارسی و پیش‌فاکتور از بیزدوار گروپ."
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
      renderGeoStrip('geoStrip', { text: 'تامین پنوماتیک صنعتی — مشاوره فنی، پیش‌فاکتور و لجستیک توسط بیزدوار گروپ.' });
      renderRelatedLinks([
        { title: 'Catalog', url: 'products#supply', desc: 'Supply' },
        { title: 'Contact', url: 'contact', desc: 'Quote' }
      ]);
      setupWhatsappLinks();
    });
