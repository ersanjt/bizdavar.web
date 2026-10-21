bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'What is Bizdavar Group? History, team and activities', url: 'about-bizdavar-group' }
          ];
      injectPageSeo('articleAboutBizdavar', {
        canonical: 'https://bizdavar.com/pages/articles/about-bizdavar-group',
        ogImage: 'assets/images/content/about-hero.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'What is Bizdavar Group? History, team and activities',
        description: 'Bizdavar profile: founder Ersan Jahed Tabrizi, digital services, owned products and industrial supply across 11 countries.',
        date: '2025-06-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/about-bizdavar-group',
        image: 'assets/images/content/about-hero.jpg',
        keywords: 'Bizdavar Group, Ersan Jahed Tabrizi, industrial supply'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'About', url: 'about', desc: 'Team and history' },
            { title: 'Services', url: 'services', desc: 'Four core areas' },
            { title: 'Contact', url: 'contact', desc: 'Free consultation' }
          ]);
      setupWhatsappLinks();
    });
