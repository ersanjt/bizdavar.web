bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'استعلام قیمت سنسور VEGA در ایران — چه اطلاعاتی بفرستید', url: 'vega-quote-iran' }
          ];
      injectPageSeo('articleVegaQuoteIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-quote-iran',
        ogImage: 'assets/images/vega/product-vegabar-39.png',
        type: 'article'
      });
      injectArticleSchema({
        title: 'استعلام قیمت سنسور VEGA در ایران — چه اطلاعاتی بفرستید',
        description: 'چک‌لیست استعلام VEGA برای خریدار ایران: مخزن، رسانه، دما، Ex/SIL، اتصال فرآیند و عکس پلاک — پیش‌فاکتور سریع‌تر و دقیق‌تر.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/vega-quote-iran',
        image: 'assets/images/vega/product-vegabar-39.png',
        keywords: 'استعلام قیمت VEGA, پیش‌فاکتور سنسور سطح, خرید VEGABAR ایران, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'خرید VEGAPULS', url: 'buy-vegapuls-iran', desc: 'سنسور سطح راداری' },
            { title: 'کاتالوگ VEGA', url: 'vega', desc: 'مدل‌ها و استعلام' },
            { title: 'تماس', url: 'contact?product=VEGA', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
