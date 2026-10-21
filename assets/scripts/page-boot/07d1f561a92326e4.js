bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Social media management — SMM strategy for brands', url: 'social-media-management' }
          ];
      injectPageSeo('articleSmm', {
        canonical: 'https://bizdavar.com/pages/articles/social-media-management',
        ogImage: 'assets/images/blog/blog-smm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Social media management — SMM strategy for brands',
        description: 'Content calendar, visual identity, Reels and Instagram/LinkedIn ads — Bizdavar SMM.',
        date: '2025-03-05',
        dateModified: '2026-08-24',
        slug: 'pages/articles/social-media-management',
        image: 'assets/images/blog/blog-smm.webp',
        keywords: 'social media management, SMM, B2B Instagram, LinkedIn, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'SMM services', url: 'services#smm', desc: 'Content and ads' },
            { title: 'BizTejarat case study', url: 'biztejarat', desc: 'Instagram B2B' },
            { title: 'SMM quote', url: 'contact?service=smm', desc: 'Start a collaboration' }
          ]);
      setupWhatsappLinks();
    });
