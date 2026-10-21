bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Bizdavar Group nedir? Tarihçe, ekip ve faaliyetler', url: 'about-bizdavar-group' }
          ];
      injectPageSeo('articleAboutBizdavar', {
        canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group',
        ogImage: 'assets/images/content/about-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Bizdavar Group nedir? Tarihçe, ekip ve faaliyetler',
        description: 'Bizdavar kimliği: kurucu Ersan Jahed Tabrizi, dijital hizmetler, özgün ürünler ve endüstriyel tedarik — 11 ülke.',
        date: '2025-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/about-bizdavar-group',
        image: 'assets/images/content/about-hero.jpg',
        keywords: 'Bizdavar Group, Ersan Jahed Tabrizi, endüstriyel tedarik'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Hakkımızda', url: 'about', desc: 'Ekip ve tarihçe' },
            { title: 'Hizmetler', url: 'services', desc: 'Dört ana eksen' },
            { title: 'İletişim', url: 'contact', desc: 'Ücretsiz danışmanlık' }
          ]);
      setupWhatsappLinks();
    });
