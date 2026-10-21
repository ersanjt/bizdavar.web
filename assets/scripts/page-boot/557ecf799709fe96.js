function bootHomePage() {
      const I = window.BIZDAVAR_I18N;
      setupWhatsappLinks();
      injectPageSeo('home', { canonical: 'https://bizdavar.com/' });
      injectServiceSchema();
      renderCredibilitySection('credibilitySection');
      renderProcessSection('processSection');
      renderOwnedProductsSection('ownedProductsSection');
      renderIndustrialSection('industrialSection');
      renderClientsGrid('homeClientsGrid', 12);
      renderBlogGrid('homeBlogGrid', 6);
      renderGeoStrip('geoStrip');
      renderLeadPaths('leadPaths');
      if (I) {
        const faqs = I.t('home.faqs', []);
        if (Array.isArray(faqs)) injectFaqSchema(faqs);
      }
    }
    bizdavarPageInit(bootHomePage);
