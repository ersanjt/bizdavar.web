bizdavarPageInit(function () {
      if (typeof window.ensureBizdavarPageShell === 'function') window.ensureBizdavarPageShell();
      if (typeof window.renderSiteChrome === 'function') window.renderSiteChrome();
      if (typeof window.initGalleryPage === 'function') window.initGalleryPage();
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'about', url: 'about' },
        { name: window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.gallery', 'گالری تصاویر') : 'گالری تصاویر', url: 'gallery' }
      ];
      injectPageSeo('gallery', { canonical: 'https://bizdavar.com/pages/gallery' });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderGeoStrip('geoStrip', {
        textKey: 'galleryPage.geoText',
        text: 'تصاویر واقعی از نمایشگاه، تولید و تحقیق تیم بیزدوار در تبریز.'
      });
    });
