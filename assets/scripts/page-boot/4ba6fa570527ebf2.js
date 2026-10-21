bizdavarPageInit(function () {
      const crumbs = [
        { page: 'home', url: 'index' },
        { page: 'blog', url: 'blog' },
        { name: 'راه‌اندازی سایت انگلیسی در ۵ روز — راهنمای Fast Studio برای US/EU', url: 'fast-studio' }
      ];
      injectPageSeo('articleFastStudio', {
        canonical: 'https://bizdavar.com/pages/articles/fast-studio',
        ogImage: 'assets/images/content/fast-hero.svg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'راه‌اندازی سایت انگلیسی در ۵ روز — راهنمای Fast Studio برای US/EU',
        description: 'پلن‌های Fast Web Studio از ۹۹ دلار / حدود ۹۰ یورو: سایت انگلیسی LTR برای آمریکا و اروپا در ۵ روز کاری — Stripe، Zoom/Meet و فاکتور USD یا EUR.',
        date: '2025-05-15',
        dateModified: '2026-08-29',
        slug: 'pages/articles/fast-studio',
        image: 'assets/images/content/related-thumb-fast.svg',
        keywords: 'طراحی سایت ۵ روز, Fast Web Studio, سایت انگلیسی اروپا, فاکتور یورو, بیزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: 'پلن از $99 / ~€90' },
            { title: 'طراحی سایت US/EU', url: 'website-design-us-eu', desc: 'فاکتور دلار یا یورو' },
            { title: 'پیشنهاد وب', url: 'contact?service=web-design', desc: 'Zoom / Meet یا فرم' }
          ]);
      setupWhatsappLinks();
    });
