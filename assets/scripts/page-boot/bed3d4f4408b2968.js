bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Dijital pazarlama satışları nasıl artırır?', url: 'digital-marketing' }
          ];
      injectPageSeo('articleDigitalMarketing', {
        canonical: 'https://bizdavar.com/pages/articles/digital-marketing',
        ogImage: 'assets/images/blog/blog-dm-sales.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Dijital pazarlama satışları nasıl artırır?',
        description: 'Satış hunisi, CRO, hedefli reklam ve lead takibi — Bizdavar ile pratik büyüme.',
        date: '2025-04-01',
        dateModified: '2026-08-24',
        slug: 'pages/articles/digital-marketing',
        image: 'assets/images/blog/blog-dm-sales.webp',
        keywords: 'online satış, CRO, satış hunisi, Google Ads, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Dijital pazarlama hizmetleri', url: 'services#digital-marketing', desc: 'Kampanya ve CRO' },
            { title: 'Fast Web Studio', url: 'fast', desc: 'Satış landing' },
            { title: 'Teklif', url: 'contact?service=digital-marketing', desc: 'Kampanya başlat' }
          ]);
      setupWhatsappLinks();
    });
