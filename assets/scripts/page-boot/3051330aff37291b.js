bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Bizdavar field tech services — Tabriz', url: 'field-tech-services' }
          ];
      injectPageSeo('articleFieldTech', {
        canonical: 'https://bizdavar.com/pages/articles/field-tech-services',
        ogImage: 'assets/images/content/home-svc-field.webp',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Bizdavar field tech services — Tabriz',
        description: 'CCTV, wiring, cove lighting and on-site installs in Tabriz — WhatsApp coordination by Bizdavar.',
        date: '2026-05-10',
        dateModified: '2026-08-24',
        slug: 'pages/articles/field-tech-services',
        image: 'assets/images/content/home-svc-field.webp',
        keywords: 'field tech, CCTV, cove lighting, Bizdavar Tabriz'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'صفحه فیلد تک', url: 'field-tech', desc: 'CCTV و نورمخفی' },
            { title: 'خدمات دیجیتال', url: 'services', desc: 'وب و SMM' },
            { title: 'تماس', url: 'contact', desc: 'هماهنگی واتساپ' }
          ]);
      setupWhatsappLinks();
    });
