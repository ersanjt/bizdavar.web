bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Prosense gas detector supply — from model selection to install', url: 'prosense-gas-detection' }
          ];
      injectPageSeo('articleProsenseGas', {
        canonical: 'https://bizdavar.com/pages/articles/prosense-gas-detection',
        ogImage: 'assets/images/prosense/slides/pq-sil.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Prosense gas detector supply — from model selection to install',
        description: 'Guide to Prosense gas and flame detectors for oil, petrochemical and HVAC — order codes, SIL and B2B quotes via Bizdavar.',
        date: '2026-06-15',
        dateModified: '2026-08-24',
        slug: 'pages/articles/prosense-gas-detection',
        image: 'assets/images/prosense/slides/pq-sil.jpg',
        keywords: 'Prosense gas detector, SIL, industrial supply, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Prosense', url: 'prosense', desc: 'دتکتور و SIL' },
            { title: 'راهنمای VEGA', url: 'vega-supply-iran', desc: 'سنسور سطح' },
            { title: 'تماس B2B', url: 'contact?product=Prosense', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
