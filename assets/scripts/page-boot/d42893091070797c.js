bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'تسويق رقمي لأسواق أمريكا وأوروبا — ميزانية بالدولار واليورو', url: 'digital-marketing-us-eu' }
          ];
      injectPageSeo('articleDigitalMarketingUsEu', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing-us-eu',
        ogImage: 'assets/images/blog/blog-ads-us-eu.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'تسويق رقمي لأسواق أمريكا وأوروبا — ميزانية بالدولار واليورو',
        description: 'إعلانات Google وMeta وLinkedIn لجمهور US/EU — فاتورة USD أو EUR وصفحات إنجليزية وGA4.',
        date: '2026-08-29',
        dateModified: '2026-08-29',
        slug: 'pages/articles/digital-marketing-us-eu',
        image: 'assets/images/blog/blog-ads-us-eu.jpg',
        keywords: 'إعلانات جوجل أوروبا, تسويق أمريكا, LinkedIn, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'التسويق الرقمي', url: 'services#digital-marketing', desc: 'إعلانات وSEO وCRO' },
            { title: 'تصميم مواقع US/EU', url: 'website-design-us-eu', desc: 'صفحات إنجليزية' },
            { title: 'عرض الحملة', url: 'contact?service=digital-marketing', desc: 'ميزانية USD/EUR' }
          ]);
      setupWhatsappLinks();
    });
