bizdavarPageInit(function () {
      const crumbs = [
            { page: 'home', url: 'index' },
            { page: 'blog', url: 'blog' },
            { name: 'Dijital pazarlama nedir? Kanallar, huni ve 2026 rehberi', url: 'what-is-digital-marketing' }
          ];
      injectPageSeo('articleWhatIsDm', {
        canonical: 'https://bizdavar.com/pages/articles/what-is-digital-marketing',
        ogImage: 'assets/images/blog/blog-what-is-dm.jpg',
        type: 'article'
      });
      injectArticleSchema({
        title: 'Dijital pazarlama nedir? Kanallar, huni ve 2026 rehberi',
        description: 'Dijital pazarlama nedir? SEO, Google Ads, SMM ve lead ölçümü — İran ve Türkiye işletmeleri için adım adım rehber. Ücretsiz danışmanlık.',
        date: '2025-02-10',
        dateModified: '2026-09-01',
        slug: 'pages/articles/what-is-digital-marketing',
        image: 'assets/images/blog/blog-what-is-dm.webp',
        keywords: 'dijital pazarlama, dijital pazarlama nedir, dijital marketing, SEO, Google Ads, SMM, CRO, Bizdavar'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      renderRelatedLinks([
            { title: 'Dijital pazarlama satışları nasıl artırır', url: 'digital-marketing', desc: 'CRO ve satış hunisi' },
            { title: 'Dijital pazarlama hizmetleri', url: 'services#digital-marketing', desc: 'Bizdavar ile uygulama' },
            { title: 'Kampanya talebi', url: 'contact?service=digital-marketing', desc: 'Ücretsiz danışmanlık' }
          ]);
      setupWhatsappLinks();
    });
