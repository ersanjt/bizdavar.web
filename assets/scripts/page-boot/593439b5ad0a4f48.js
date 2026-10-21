bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خرید VEGAPULS 6X در ایران — قیمت، کد سفارش و استعلام', url: 'buy-vegapuls-iran' }
          ];
      injectPageSeo('articleBuyVegapulsIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-vegapuls-iran',
        ogImage: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خرید VEGAPULS 6X در ایران — قیمت، کد سفارش و استعلام',
        description: 'چطور VEGAPULS 6X اصل برای مخزن و فرآیند ایران بخرید: کد سفارش دقیق، پیش‌فاکتور فارسی و لجستیک تا محل نصب — بدون بازار خاکستری.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-vegapuls-iran',
        image: 'assets/images/vega/product-vegapuls-6x-photo.webp',
        keywords: 'خرید VEGAPULS 6X, قیمت سنسور سطح راداری, سنسور سطح VEGA ایران, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'استعلام قیمت VEGA', url: 'vega-quote-iran', desc: 'چک‌لیست خرید' },
            { title: 'کاتالوگ VEGA', url: 'vega', desc: 'سنسور سطح و فشار' },
            { title: 'بازرگانی صنعتی', url: 'industrial-trade-iran', desc: 'VEGA و Prosense' }
          ]);
      setupWhatsappLinks();
    });
