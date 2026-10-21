bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Prosense gaz dedektörü tedariki — model seçiminden montaja', url: 'prosense-gas-detection' }
          ];
      injectPageSeo('articleProsenseGas', {
        canonical: 'https://bizdavar.com/pages/articles/prosense-gas-detection',
        ogImage: 'assets/images/prosense/slides/pq-sil.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Prosense gaz dedektörü tedariki — model seçiminden montaja',
        description: 'Petrol, petrokimya ve HVAC için Prosense gaz/alev dedektörü — sipariş kodu ve B2B teklif.',
        date: '2026-06-15',
        dateModified: '2026-08-24',
        slug: 'pages/articles/prosense-gas-detection',
        image: 'assets/images/prosense/slides/pq-sil.jpg',
        keywords: 'Prosense gaz dedektörü, SIL, endüstriyel tedarik, Bizdavar'
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
