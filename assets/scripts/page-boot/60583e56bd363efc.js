bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'خرید ترازو Teraoka در ایران — deli، POS و برچسب‌زن', url: 'buy-teraoka-iran' }
          ];
      injectPageSeo('articleBuyTeraokaIran', {
        canonical: 'https://bizdavar.com/pages/articles/buy-teraoka-iran',
        ogImage: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'خرید ترازو Teraoka در ایران — deli، POS و برچسب‌زن',
        description: 'چطور ترازو و برچسب‌زن اصل Teraoka Seiko برای فروشگاه و آشپزخانه ایران بخرید: نوع ترازو، ظرفیت و تعداد صندوق — پیش‌فاکتور فارسی.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/buy-teraoka-iran',
        image: 'assets/images/teraoka/hero/teraoka-luxeed-hero.webp',
        keywords: 'خرید ترازو Teraoka ایران, تراوکا سیکو, ترازوی دلی, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'کاتالوگ Teraoka', url: 'teraoka', desc: 'ترازو و برچسب' },
            { title: 'خرید Digi', url: 'buy-digi-system-iran', desc: 'ترازو ترکیه' },
            { title: 'استعلام', url: 'contact?product=Teraoka', desc: 'پیش‌فاکتور' }
          ]);
      setupWhatsappLinks();
    });
