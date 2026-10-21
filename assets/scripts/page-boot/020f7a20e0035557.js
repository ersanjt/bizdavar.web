bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'تامین دتکتور گاز Prosense — از انتخاب مدل تا نصب', url: 'prosense-gas-detection' }
          ];
      injectPageSeo('articleProsenseGas', {
        canonical: 'https://bizdavar.com/pages/articles/prosense-gas-detection',
        ogImage: 'assets/images/prosense/slides/pq-sil.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'تامین دتکتور گاز Prosense — از انتخاب مدل تا نصب',
        description: 'راهنمای خرید دتکتور گاز و شعله Prosense برای پروژه‌های نفت، پتروشیمی و HVAC — کد سفارش، SIL و استعلام B2B با بیزدوار.',
        date: '2026-06-15',
        dateModified: '2026-08-24',
        slug: 'pages/articles/prosense-gas-detection',
        image: 'assets/images/prosense/slides/pq-sil.jpg',
        keywords: 'دتکتور گاز Prosense, خرید Prosense, SIL, تامین صنعتی, بیزدوار'
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
