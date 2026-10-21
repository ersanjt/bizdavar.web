bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'İran ve Türkiye pazarı için çok dilli web sitesi', url: 'multilingual-web-iran-turkey' }
          ];
      injectPageSeo('articleMultilingualWeb', {
        canonical: 'https://bizdavar.com/pages/articles/multilingual-web-iran-turkey',
        ogImage: 'assets/images/blog/blog-multilingual.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'İran ve Türkiye pazarı için çok dilli web sitesi',
        description: 'hreflang, Farsça RTL, yerel güven ve hızlı teslimat — İran/Türkiye çift pazar.',
        date: '2026-07-29',
        dateModified: '2026-08-24',
        slug: 'pages/articles/multilingual-web-iran-turkey',
        image: 'assets/images/blog/blog-multilingual.webp',
        keywords: 'çok dilli site, hreflang, Farsça Türkçe web, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Fast Web Studio', url: 'fast', desc: '5 günde teslim' },
            { title: 'Web tasarım hizmetleri', url: 'services#web-design', desc: 'Özel proje' },
            { title: 'Teklif', url: 'contact?service=web-design', desc: 'Projeyi başlat' }
          ]);
      setupWhatsappLinks();
    });
