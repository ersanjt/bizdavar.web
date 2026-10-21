bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خرید ترازو و POS Digi System در ایران — فروشگاه و صندوق', url: 'buy-digi-system-iran' }
          ];
      injectPageSeo('articleBuyDigiIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-digi-system-iran',
        ogImage: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خرید ترازو و POS Digi System در ایران — فروشگاه و صندوق',
        description: 'چطور ترازو و صندوق Digi System اصل برای سوپرمارکت و فروشگاه ایران بخرید: نوع فروشگاه، تعداد صندوق و نیاز ترازوی قانونی — پیش‌فاکتور فارسی.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-digi-system-iran',
        image: 'assets/images/digi-system/hero/digi-retail-hero.webp',
        keywords: 'خرید ترازو Digi ایران, POS دیجی سیستم, ترازوی فروشگاهی, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Digi', url: 'digi-system', desc: 'ترازو و POS' },
            { title: 'خرید Teraoka', url: 'buy-teraoka-iran', desc: 'ترازو ژاپن' },
            { title: 'استعلام', url: 'contact?product=Digi%20System', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
