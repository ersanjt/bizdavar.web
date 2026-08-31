/**
 * Bizdavar — SEO meta + JSON-LD schema injectors
 * @requires BD_CTX (context.js)
 */
(function () {
  const ctx = window.BD_CTX;
  if (!ctx) return;
  const {
    C, R, A, path, t, ic, linkArrow, wa, currentPage,
    absUrl, breadcrumbHref, localizeCrumbs, buildContactPoints, orgAddress
  } = ctx;

  window.injectBreadcrumbSchema = function (items) {

    if (!items || !items.length) return;

    items = localizeCrumbs(items);

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'BreadcrumbList',

      itemListElement: items.map((item, i) => ({

        '@type': 'ListItem',

        position: i + 1,

        name: item.name,

        item: absUrl(item.url)

      }))

    };

    let script = document.getElementById('jsonld-breadcrumb');

    if (!script) {

      script = document.createElement('script');

      script.id = 'jsonld-breadcrumb';

      script.type = 'application/ld+json';

      document.head.appendChild(script);

    }

    script.textContent = JSON.stringify(ld);

  };

  function injectHreflang(canonicalUrl) {
    document.querySelectorAll('link[data-bd-hreflang]').forEach(el => el.remove());
    const LU = window.BIZDAVAR_LOCALE_URL;
    let alts;
    if (LU) {
      const pagePath = LU.currentPagePath();
      alts = LU.hreflangUrls(pagePath);
    } else {
      let origin = C.baseUrl.replace(/\/$/, '');
      let pagePath = '/';
      try {
        const raw = canonicalUrl || C.baseUrl;
        const url = new URL(raw.startsWith('http') ? raw : `${C.baseUrl.replace(/\/$/, '')}/${String(raw).replace(/^\//, '')}`);
        origin = url.origin;
        pagePath = url.pathname.replace(/^\/(tr|en|ru|ar)(?=\/|$)/, '') || '/';
        if (pagePath.length > 1) pagePath = pagePath.replace(/\/$/, '');
      } catch (_) {
        origin = C.baseUrl.replace(/\/$/, '');
        pagePath = '/';
      }
      const locPath = (code) => origin + (code === 'fa' ? '' : '/' + code) + (pagePath === '/' ? '/' : pagePath);
      alts = {
        fa: locPath('fa'),
        tr: locPath('tr'),
        en: locPath('en'),
        ru: locPath('ru'),
        ar: locPath('ar'),
        'x-default': locPath('fa')
      };
    }
    Object.entries(alts).forEach(([hreflang, href]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      link.setAttribute('data-bd-hreflang', '1');
      document.head.appendChild(link);
    });
  }

  function activeOgLocale() {
    const lang = window.BIZDAVAR_I18N?.locale
      || document.documentElement.getAttribute('lang')
      || 'fa';
    const map = { fa: 'fa_IR', tr: 'tr_TR', en: 'en_US', ru: 'ru_RU', ar: 'ar_AE' };
    return map[lang] || C.locale || 'fa_IR';
  }

  function injectOgLocaleAlternates() {
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());
    const current = activeOgLocale();
    const alternates = ['fa_IR', 'tr_TR', 'en_US', 'ru_RU', 'ar_AE'].filter(tag => tag !== current);
    alternates.forEach(tag => {
      let el = document.querySelector(`meta[property="og:locale:alternate"][content="${tag}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', 'og:locale:alternate');
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag);
    });
  }



  window.injectSeo = function (pageMeta) {

    const meta = { ...C.seo, ...pageMeta };

    document.title = meta.title || C.seo.defaultTitle;



    const setMeta = (name, content, prop) => {

      if (!content) return;

      const attr = prop ? 'property' : 'name';

      let el = document.querySelector(`meta[${attr}="${name}"]`);

      if (!el) {

        el = document.createElement('meta');

        el.setAttribute(attr, name);

        document.head.appendChild(el);

      }

      el.setAttribute('content', content);

    };



    const ogImg = (meta.ogImage || A.ogImage);
    const ogImgAbs = ogImg.startsWith('http') ? ogImg : `${C.baseUrl}/${ogImg.replace(/^\//, '')}`;



    setMeta('description', meta.description);

    setMeta('keywords', meta.keywords || C.seo.keywords);

    setMeta('author', C.seo.author);

    setMeta('robots', meta.robots || 'index, follow, max-image-preview:large');

    setMeta('theme-color', C.seo.themeColor);

    setMeta('og:title', meta.title, true);

    setMeta('og:description', meta.description, true);

    setMeta('og:type', meta.type || 'website', true);

    setMeta('og:url', meta.canonical || C.baseUrl, true);

    setMeta('og:image', ogImgAbs, true);

    setMeta('og:image:alt', meta.ogImageAlt || C.siteName, true);

    setMeta('og:site_name', C.siteName, true);

    setMeta('og:locale', activeOgLocale(), true);

    setMeta('twitter:card', C.seo.twitterCard);

    setMeta('twitter:title', meta.title);

    setMeta('twitter:description', meta.description);

    setMeta('twitter:image', ogImgAbs);



    const canonicalHref = meta.canonical || C.baseUrl;
    const existingCanons = [...document.querySelectorAll('link[rel="canonical"]')];
    let canonical = existingCanons[0];

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    existingCanons.slice(1).forEach(el => el.remove());
    canonical.href = canonicalHref;

    injectHreflang(canonicalHref);
    injectOgLocaleAlternates();
    injectWebPageSchema(meta);
    injectSiteGraph();
  };

  function schemaLangTag() {
    const lang = window.BIZDAVAR_I18N?.locale
      || document.documentElement.getAttribute('lang')
      || 'fa';
    const map = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US' };
    return map[lang] || 'fa-IR';
  }

  function injectWebPageSchema(meta) {
    const url = meta.canonical || C.baseUrl;
    const pageType = meta.type === 'article' ? 'Article' : 'WebPage';
    const ld = {
      '@context': 'https://schema.org',
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      inLanguage: schemaLangTag(),
      isPartOf: { '@id': `${C.baseUrl}/#website` }
    };
    if (pageType === 'Article') {
      ld.headline = meta.title;
      ld.publisher = {
        '@type': 'Organization',
        name: C.siteNameEn,
        logo: { '@type': 'ImageObject', url: logoAbsUrl() }
      };
    }
    injectJsonLd('jsonld-webpage', ld);
  }

  function logoAbsUrl() {
    const logo = A.logo || A.logoOnDark;
    if (!logo) return `${C.baseUrl}/assets/images/brand/bizdavar-logo.png`;
    return logo.startsWith('http') ? logo : `${C.baseUrl}/${logo.replace(/^\//, '')}`;
  }

  function siteNavEntries() {
    return [
      { name: t('nav.services', 'خدمات'), url: absUrl(R.services) },
      { name: t('nav.products', 'محصولات'), url: absUrl(R.products) },
      { name: t('nav.webDesign', 'طراحی سایت'), url: absUrl(R.fast) },
      { name: t('common.freeConsult', 'مشاوره رایگان'), url: absUrl(R.contact) },
      { name: t('nav.productsSupplyLink', 'تامین برندهای صنعتی'), url: absUrl(R.products) + '#supply' },
      { name: 'VEGA', url: absUrl(R.vega) },
      { name: 'UWT', url: absUrl(R.uwt) },
      { name: 'Prosense', url: absUrl(R.prosense) },
      { name: 'Liqui Moly', url: absUrl(R.liquiMoly) },
      { name: 'FXGuard', url: absUrl(R.fxguard) },
      { name: t('nav.blog', 'وبلاگ'), url: absUrl(R.blog) },
      { name: t('nav.about', 'درباره ما'), url: absUrl(R.about) }
    ];
  }

  function offerCatalog() {
    return {
      '@type': 'OfferCatalog',
      name: t('home.svcTitle', 'Bizdavar Group offers'),
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'VEGA industrial sensor supply', url: absUrl(R.vega) }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'UWT level sensor supply', url: absUrl(R.uwt) }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Prosense gas detector supply', url: absUrl(R.prosense) }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t('nav.webDesign', 'Fast Web Studio'), url: absUrl(R.fast) }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t('common.freeConsult', 'Consultation'), url: absUrl(R.contact) }
        }
      ]
    };
  }

  function buildSiteGraph() {
    const orgId = `${C.baseUrl}/#organization`;
    const webId = `${C.baseUrl}/#website`;
    const hq = C.geo?.headquarters || {};
    const ir = C.iranEntity || {};
    const am = C.armeniaEntity || {};
    const sameAs = [C.contact.linkedin, C.contact.instagram, am.spyur, ir.jooyeshgar].filter(Boolean);
    const alternateNames = [C.siteName, 'Bizdavar'];
    if (am.legalName) alternateNames.push(am.legalName);
    if (am.legalNameShort) alternateNames.push(am.legalNameShort);
    if (ir.legalNameFa) alternateNames.push(ir.legalNameFa);
    if (ir.brandFa) alternateNames.push(ir.brandFa);
    if (ir.legalNameEn) alternateNames.push(ir.legalNameEn);
    const graph = [
        {
          '@type': ['Organization', 'ProfessionalService'],
          '@id': orgId,
          name: C.siteNameEn,
          alternateName: alternateNames,
          url: `${C.baseUrl}/`,
          logo: { '@type': 'ImageObject', url: logoAbsUrl() },
          image: logoAbsUrl(),
          email: C.contact.email,
          telephone: C.contact.phone,
          foundingDate: '2013',
          founder: {
            '@type': 'Person',
            name: 'Ersan Jahed Tabrizi',
            jobTitle: 'Founder',
            url: C.contact.linkedin,
            sameAs: C.contact.linkedin
          },
          areaServed: ['TR', 'AM', 'IR', 'AE', 'DE', 'US', 'GB', 'LB', 'IQ', 'GE', 'IT'],
          availableLanguage: ['fa', 'tr', 'en', 'ru', 'ar'],
          knowsLanguage: ['fa', 'tr', 'en', 'ru', 'ar'],
          knowsAbout: [
            'Digital Marketing',
            'Web Design',
            'Fast Web Studio',
            'WhatsApp CRM',
            'FXGuard',
            'Industrial Equipment Supply',
            'VEGA Sensors',
            'Prosense Detectors',
            'Liqui Moly',
            'SEO',
            'SMM'
          ],
          address: orgAddress(),
          sameAs,
          contactPoint: buildContactPoints(),
          hasOfferCatalog: offerCatalog()
        },
        {
          '@type': 'WebSite',
          '@id': webId,
          url: `${C.baseUrl}/`,
          name: C.siteNameEn,
          alternateName: alternateNames,
          description: t('seo.defaultDescription', ''),
          inLanguage: ['fa-IR', 'tr-TR', 'en-US', 'ru-RU', 'ar-AE'],
          publisher: { '@id': orgId },
          about: { '@id': orgId },
          hasPart: siteNavEntries().map((entry) => ({
            '@type': 'WebPage',
            '@id': entry.url,
            name: entry.name,
            url: entry.url
          }))
        },
        {
          '@type': 'ItemList',
          '@id': `${C.baseUrl}/#sitenavigation`,
          name: t('footer.quickLinks', 'دسترسی سریع'),
          itemListElement: siteNavEntries().map((entry, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'WebPage',
              '@id': entry.url,
              name: entry.name,
              url: entry.url
            }
          }))
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${C.baseUrl}/#localbusiness`,
          name: C.siteNameEn,
          alternateName: C.siteName,
          url: `${C.baseUrl}/`,
          telephone: C.contact.phone,
          email: C.contact.email,
          image: logoAbsUrl(),
          address: {
            '@type': 'PostalAddress',
            addressLocality: hq.city || 'Tabriz',
            addressCountry: hq.countryCode || 'IR'
          },
          parentOrganization: { '@id': orgId },
          areaServed: ['TR', 'IR', 'AM', 'AE', 'DE']
        }
    ];
    if (ir.legalNameFa) {
      const irChannel = (C.contact.channels || []).find(ch => ch.id === 'ir');
      graph.push({
        '@type': 'LocalBusiness',
        '@id': `${C.baseUrl}/#localbusiness-iran`,
        name: ir.legalNameFa,
        alternateName: [ir.brandFa, ir.brandEn, 'Bizdavar'].filter(Boolean),
        url: `${C.baseUrl}/`,
        telephone: irChannel ? irChannel.tel : undefined,
        email: C.contact.email,
        address: {
          '@type': 'PostalAddress',
          ...(ir.streetAddress ? { streetAddress: ir.streetAddress } : {}),
          addressLocality: ir.city,
          addressRegion: ir.province,
          addressCountry: ir.countryCode || 'IR'
        },
        parentOrganization: { '@id': orgId },
        sameAs: ir.jooyeshgar ? [ir.jooyeshgar] : undefined
      });
    }
    if (am.legalName) {
      graph.push({
        '@type': 'LocalBusiness',
        '@id': `${C.baseUrl}/#localbusiness-armenia`,
        name: am.legalName,
        alternateName: [am.brandFa, am.brandEn, am.legalNameShort].filter(Boolean),
        url: `${C.baseUrl}/`,
        email: C.contact.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: am.city || 'Yerevan',
          addressCountry: am.countryCode || 'AM'
        },
        parentOrganization: { '@id': orgId },
        sameAs: am.spyur ? [am.spyur] : undefined
      });
    }
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  function injectSiteGraph() {
    injectJsonLd('jsonld-graph-static', buildSiteGraph());
  }



  window.injectPageSeo = function (pageKey, overrides) {
    const o = overrides || {};
    const titleKey = `pages.${pageKey}.seoTitle`;
    const descKey = `pages.${pageKey}.seoDescription`;
    const kwKey = `pages.${pageKey}.seoKeywords`;
    const title = t(titleKey, null);
    const description = t(descKey, null);
    const keywords = t(kwKey, null);
    const LU = window.BIZDAVAR_LOCALE_URL;
    const locale = LU?.currentLocale?.() || window.BIZDAVAR_I18N?.locale || 'fa';
    const canonical = o.canonical && LU
      ? LU.localizeCanonical(o.canonical, locale)
      : (o.canonical || (LU ? LU.toAbsolute(locale, LU.currentPagePath()) : C.baseUrl));
    return window.injectSeo({
      ...o,
      title: title && title !== titleKey ? title : (o.title || C.seo.defaultTitle),
      description: description && description !== descKey ? description : (o.description || C.seo.defaultDescription),
      keywords: keywords && keywords !== kwKey ? keywords : (o.keywords || C.seo.keywords),
      canonical
    });
  };



  window.injectContactPageSchema = function () {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ContactPage',

      name: t('contactPage.schemaName', 'تماس با ما — ') + C.siteName,

      url: absUrl(R.contact),

      description: t('contactPage.schemaDesc', 'فرم تماس و راه‌های ارتباطی با بیزدوار گروپ'),

      mainEntity: {

        '@type': 'Organization',

        name: C.siteNameEn,

        email: C.contact.email,

        url: C.baseUrl,

        address: orgAddress(),

        areaServed: ['TR', 'AM', 'IR', 'AE', 'DE', 'US', 'GB', 'LB', 'IQ', 'GE', 'IT'],

        contactPoint: buildContactPoints()

      }

    };

    injectJsonLd('jsonld-contact', ld);

  };



  window.injectFaqSchema = function (items) {

    if (!items || !items.length) return;

    const strip = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: items.map(item => ({

        '@type': 'Question',

        name: strip(item.q || item.q),

        acceptedAnswer: { '@type': 'Answer', text: strip(item.a || item.a) }

      }))

    };

    injectJsonLd('jsonld-faq', ld);

  };



  window.injectServiceSchema = function () {
    if (!C.services || !C.services.length) return;

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ItemList',

      name: t('seo.schemaServices', 'خدمات بیزدوار گروپ'),

      itemListElement: C.services.map((s, i) => ({

        '@type': 'ListItem',

        position: i + 1,

        item: {

          '@type': 'Service',

          name: s.title,

          provider: {
            '@type': 'Organization',
            name: C.siteNameEn,
            areaServed: ['IR', 'TR', 'AM', 'AE', 'DE']
          },

          areaServed: ['IR', 'TR', 'AM', 'AE', 'DE'],

          url: absUrl(s.slug)

        }

      }))

    };

    injectJsonLd('jsonld-services', ld);

  };

  window.injectBlogListSchema = function () {
    const posts = (typeof window.getBlogPostsList === 'function'
      ? window.getBlogPostsList()
      : C.blogPosts) || [];
    if (!posts.length) return;
    const blogUrl = absUrl(R.blog);
    const desc = t('pages.blog.seoDescription', t('blogPage.hero.desc', ''));
    const lang = window.BIZDAVAR_I18N?.locale || 'fa';
    const inLanguage = ({ fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' })[lang] || lang;
    const toAbs = (rel) => {
      if (!rel) return undefined;
      if (/^https?:\/\//i.test(rel)) return rel;
      return `${C.baseUrl}/${String(rel).replace(/^\//, '')}`;
    };
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': blogUrl + '#webpage',
          url: blogUrl,
          name: t('pages.blog.seoTitle', t('seo.schemaBlog', 'وبلاگ بیزدوار گروپ')),
          description: desc,
          inLanguage,
          isPartOf: { '@type': 'WebSite', name: C.siteNameEn, url: C.baseUrl },
          about: { '@id': blogUrl + '#blog' },
          mainEntity: { '@id': blogUrl + '#itemlist' }
        },
        {
          '@type': 'Blog',
          '@id': blogUrl + '#blog',
          name: t('seo.schemaBlog', 'وبلاگ بیزدوار گروپ'),
          url: blogUrl,
          description: desc,
          inLanguage,
          publisher: {
            '@type': 'Organization',
            name: C.siteNameEn,
            url: C.baseUrl,
            logo: { '@type': 'ImageObject', url: `${C.baseUrl}/assets/images/brand/bizdavar-logo-square.png` }
          },
          blogPost: posts.map(p => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            inLanguage,
            image: toAbs(p.image),
            url: absUrl(p.slug),
            author: { '@type': 'Organization', name: C.siteNameEn }
          }))
        },
        {
          '@type': 'ItemList',
          '@id': blogUrl + '#itemlist',
          name: t('seo.schemaBlog', 'وبلاگ بیزدوار گروپ'),
          numberOfItems: posts.length,
          itemListOrder: 'https://schema.org/ItemListUnordered',
          itemListElement: posts.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absUrl(p.slug),
            name: p.title
          }))
        }
      ]
    };
    injectJsonLd('jsonld-blog', ld);
  };



  window.injectPortfolioSchema = function () {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ItemList',

      name: t('seo.schemaPortfolio', 'نمونه‌کارهای بیزدوار گروپ'),

      numberOfItems: C.portfolio.filter(p => !p.archived).length,

      itemListElement: C.portfolio.filter(p => !p.archived).map((p, i) => ({

        '@type': 'ListItem',

        position: i + 1,

        item: {

          '@type': 'WebSite',

          name: p.name,

          url: p.internal ? absUrl(p.slug) : `https://${p.domain}`

        }

      }))

    };

    injectJsonLd('jsonld-portfolio', ld);

  };

  window.injectSupplyBrandSchema = function (data) {
    if (!data) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.name,
      description: data.description,
      brand: { '@type': 'Brand', name: data.brand || data.name },
      category: data.category,
      image: data.image ? absUrl(data.image) : undefined,
      url: data.url && String(data.url).startsWith('http') ? data.url : absUrl(data.url || R.contact),
      areaServed: data.areaServed || ['IR', 'TR']
    };
    const price = data.price != null ? data.price : data.priceUsd;
    if (price != null && price !== '' && !Number.isNaN(Number(price))) {
      ld.offers = {
        '@type': 'Offer',
        price: String(price),
        priceCurrency: data.priceCurrency || 'USD',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: C.siteNameEn,
          areaServed: ['IR', 'TR']
        },
        url: ld.url
      };
    }
    injectJsonLd('jsonld-supply-' + (data.id || data.name), ld);
  };

  window.injectCaseStudySchema = function (data) {
    if (!data) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: data.name,
      description: data.description,
      about: data.service,
      creator: { '@type': 'Organization', name: C.siteNameEn, url: C.baseUrl },
      inLanguage: C.locale,
      url: absUrl(data.slug),
      areaServed: ['IR', 'TR', 'AM']
    };
    injectJsonLd('jsonld-case-' + (data.id || 'study'), ld);
  };

  window.injectServiceProductSchema = function (data) {
    if (!data) return;
    const offers = (data.offers || [])
      .filter(o => o && o.price != null && o.price !== '' && !Number.isNaN(Number(o.price)))
      .map(o => ({
        '@type': 'Offer',
        name: o.name,
        price: String(o.price),
        priceCurrency: o.currency || 'USD',
        url: o.url ? absUrl(o.url) : absUrl(R.contact)
      }));
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      provider: { '@type': 'Organization', name: C.siteNameEn, url: C.baseUrl },
      areaServed: data.areaServed || ['IR', 'TR', 'AM', 'AE', 'DE'],
      url: data.url ? absUrl(data.url) : C.baseUrl
    };
    if (offers.length) ld.offers = offers;
    injectJsonLd('jsonld-service-product', ld);
  };

  window.injectArticleSchema = function (article) {
    const LU = window.BIZDAVAR_LOCALE_URL;
    const locale = LU?.currentLocale?.() || window.BIZDAVAR_I18N?.locale || 'fa';
    const pageUrl = LU
      ? LU.toAbsolute(locale, article.slug)
      : absUrl(article.slug);

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      url: pageUrl,
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.dateModified || article.date,
      keywords: article.keywords || undefined,
      inLanguage: schemaLangTag(),
      author: { '@type': 'Organization', name: C.siteNameEn },
      publisher: {
        '@type': 'Organization',
        name: C.siteNameEn,
        logo: { '@type': 'ImageObject', url: logoAbsUrl() }
      },
      mainEntityOfPage: pageUrl,
      image: article.image ? absUrl(article.image) : logoAbsUrl(),
      isPartOf: { '@id': `${C.baseUrl}/#website` }
    };

    injectJsonLd('jsonld-article', ld);
  };

  function injectJsonLd(id, data) {

    let script = document.getElementById(id);

    if (!script) {

      script = document.createElement('script');

      script.id = id;

      script.type = 'application/ld+json';

      document.head.appendChild(script);

    }

    script.textContent = JSON.stringify(data);

  }

  window.injectIntelFaqSchema = function () {
    const I = window.BIZDAVAR_INTEL;
    if (!I || !I.faqIntel) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: I.faqIntel.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    let script = document.getElementById('jsonld-intel-faq');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-intel-faq';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  };
})();
