bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'privacy', url: 'privacy' }
          ];
          injectPageSeo('privacy', {
            canonical: 'https://bizdavar.com/pages/privacy',
            robots: 'index, follow'
          });
renderBreadcrumbs(crumbs);
          injectBreadcrumbSchema(crumbs);
            setupWhatsappLinks();
    });
