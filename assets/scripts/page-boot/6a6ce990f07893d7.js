bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: "توريد كاشف غاز Prosense — من اختيار الطراز إلى التركيب", url: "prosense-gas-detection" }
          ];
      injectPageSeo('articleProsenseGas', {
        canonical: 'https://bizdavar.com/pages/articles/prosense-gas-detection',
        ogImage: 'assets/images/prosense/slides/pq-sil.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: "توريد كاشف غاز Prosense — من اختيار الطراز إلى التركيب",
        description: "دليل كاشفات غاز ولهب Prosense للنفط والبتروكيما — رمز الطلب وعرض B2B.",
        date: '2026-06-15',
        dateModified: '2026-08-24',
        slug: 'pages/articles/prosense-gas-detection',
        image: 'assets/images/prosense/slides/pq-sil.jpg',
        keywords: 'كاشف غاز Prosense, SIL, بيزدوار'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: "كتالوج Prosense", url: "prosense", desc: "كواشف وSIL" },
            { title: "دليل VEGA", url: "vega-supply-iran", desc: "حساسات المستوى" },
            { title: "تواصل B2B", url: "contact?product=Prosense", desc: "فاتورة مبدئية" }
          ]);
      setupWhatsappLinks();
    });
