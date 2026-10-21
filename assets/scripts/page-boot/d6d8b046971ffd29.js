bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Sosyal medya yönetimi — markalar için SMM stratejisi', url: 'social-media-management' }
          ];
      injectPageSeo('articleSmm', {
        canonical: 'https://bizdavar.com/pages/articles/social-media-management',
        ogImage: 'assets/images/blog/blog-smm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Sosyal medya yönetimi — markalar için SMM stratejisi',
        description: 'İçerik takvimi, görsel kimlik, Reels ve Instagram/LinkedIn reklamı — Bizdavar SMM.',
        date: '2025-03-05',
        dateModified: '2026-08-24',
        slug: 'pages/articles/social-media-management',
        image: 'assets/images/blog/blog-smm.webp',
        keywords: 'sosyal medya yönetimi, SMM, Instagram B2B, LinkedIn, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'SMM hizmetleri', url: 'services#smm', desc: 'İçerik ve reklam' },
            { title: 'BizTejarat örnek çalışma', url: 'biztejarat', desc: 'Instagram B2B' },
            { title: 'SMM teklifi', url: 'contact?service=smm', desc: 'İş birliği' }
          ]);
      setupWhatsappLinks();
    });
