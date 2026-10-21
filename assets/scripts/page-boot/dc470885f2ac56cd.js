bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "توريد حساسات VEGA إلى إيران — من الاستعلام إلى الموقع", url: "vega-supply-iran" }
          ];
      injectPageSeo('articleVegaSupplyIran', {
        canonical: 'https://bizdavar.com/pages/articles/vega-supply-iran',
        ogImage: 'assets/images/vega/slides/value-process-safety.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "توريد حساسات VEGA إلى إيران — من الاستعلام إلى الموقع",
        description: "VEGA أصلي لمشاريع إيران: رمز الطلب وفاتورة مبدئية ولوجستيات حتى الموقع.",
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/vega-supply-iran',
        image: 'assets/images/vega/slides/value-process-safety.jpg',
        keywords: 'توريد VEGA إيران, شراء حساس VEGA, فاتورة مبدئية, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "دليل اختيار الحساس", url: "industrial-sensors", desc: "ملاحظات فنية" },
            { title: "كتالوج VEGA", url: "vega", desc: "مستوى وضغط" },
            { title: "اتصل بنا", url: "contact", desc: "استعلام السعر" }
          ]);
      setupWhatsappLinks();
    });
