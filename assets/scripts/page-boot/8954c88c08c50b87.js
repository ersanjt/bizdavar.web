bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'تامین سنسور VEGA در ایران — از استعلام تا پروژه صنعتی', url: 'vega-supply-iran' }
          ];
      injectPageSeo('articleVegaSupplyIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-supply-iran',
        ogImage: 'assets/images/vega/slides/value-process-safety.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'تامین سنسور VEGA در ایران — از استعلام تا پروژه صنعتی',
        description: 'مسیر استعلام تا تحویل VEGA اصل برای پروژه ایران: کد سفارش، پیش‌فاکتور و لجستیک تا محل نصب — بدون ابهام بازار خاکستری.',
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/vega-supply-iran',
        image: 'assets/images/vega/slides/value-process-safety.jpg',
        keywords: 'تامین VEGA ایران, خرید سنسور VEGA, پیش‌فاکتور VEGA, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'راهنمای انتخاب سنسور', url: 'industrial-sensors', desc: 'نکات فنی' },
            { title: 'کاتالوگ VEGA', url: 'vega', desc: 'سنسور سطح و فشار' },
            { title: 'تماس', url: 'contact', desc: 'استعلام قیمت' }
          ]);
      setupWhatsappLinks();
    });
