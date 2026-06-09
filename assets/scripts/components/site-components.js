(function () {

  const C = window.BIZDAVAR_CONFIG;

  if (!C) return;

  const R = C.routes;
  const A = C.assets;
  const path = (p) => window.resolvePath(p);
  const currentPage = document.body.dataset.page || 'home';

  const wa = C.contact.whatsapp
    ? `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappMessage)}`
    : path(R.contact);

  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const linkArrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : '');



  function isActive(page) {
    if (page === 'blog' && (currentPage === 'blog' || currentPage === 'article')) return ' active';
    return currentPage === page ? ' active' : '';
  }



  function absUrl(urlPath) {
    if (!urlPath) return `${C.baseUrl}/`;
    if (urlPath.startsWith('http')) return urlPath;
    const normalized = urlPath.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
    if (normalized === 'index.html') return `${C.baseUrl}/`;
    return `${C.baseUrl}/${normalized.replace(/^\//, '')}`;
  }

  function breadcrumbHref(url) {
    if (!url || url.startsWith('http') || url.startsWith('#')) return url;
    return path(url);
  }



  window.renderBreadcrumbs = function (items) {

    const el = document.getElementById('breadcrumbs');

    if (!el || !items || !items.length) return;



    const last = items.length - 1;

    el.innerHTML = `

      <div class="container">

        <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">

          ${items.map((item, i) => `

            <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">

              ${i < last

                ? `<a href="${breadcrumbHref(item.url)}" itemprop="item"><span itemprop="name">${item.name}</span></a>`

                : `<span itemprop="name" aria-current="page">${item.name}</span>`}

              <meta itemprop="position" content="${i + 1}">

            </li>

          `).join('')}

        </ol>

      </div>`;

  };



  window.injectBreadcrumbSchema = function (items) {

    if (!items || !items.length) return;

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



  window.renderServiceNav = function () {

    const el = document.getElementById('serviceNav');

    if (!el || !C.services) return;

    el.innerHTML = `

      <nav class="service-nav" aria-label="فهرست خدمات">

        ${C.services.map(s => `<a href="${path(s.slug)}">${s.title}</a>`).join('')}

      </nav>`;

  };



  window.renderRelatedLinks = function (links) {

    const el = document.getElementById('relatedLinks');

    if (!el || !links || !links.length) return;

    el.innerHTML = `

      <section class="related-links">

        <div class="container">

          <h2 class="related-links__title">صفحات مرتبط</h2>

          <div class="related-links__grid">

            ${links.map(l => `

              <a href="${l.url}" class="related-links__card">

                <span class="related-links__label">${l.label || 'مشاهده'}</span>

                <strong>${l.title}</strong>

                ${l.desc ? `<p>${l.desc}</p>` : ''}

              </a>

            `).join('')}

          </div>

        </div>

      </section>`;

  };



  window.renderBlogGrid = function (containerId, limit) {

    const el = document.getElementById(containerId);

    if (!el || !C.blogPosts) return;

    const posts = limit ? C.blogPosts.slice(0, limit) : C.blogPosts;

    el.innerHTML = posts.map(p => `

      <article class="blog-item">

        <span class="blog-item__cat">${p.category}</span>

        <h3><a href="${path(p.slug)}">${p.title}</a></h3>

        <p>${p.excerpt}</p>

        <a href="${path(p.slug)}" class="service-card__link">ادامه مطلب${linkArrow()}</a>

      </article>

    `).join('');

  };



  window.renderPortfolioGrid = function (containerId) {

    const el = document.getElementById(containerId);

    if (!el || !C.portfolio) return;

    el.innerHTML = C.portfolio.map(p => {

      const url = getProjectUrl(p);

      const external = !p.internal;

      const logoHtml = p.logo
        ? `<div class="portfolio-card__logo"><img src="${path(p.logo)}" alt="لوگوی ${p.name}" loading="lazy" width="160" height="52"></div>`
        : `<div class="portfolio-card__logo portfolio-card__logo--text"><span>${p.name}</span></div>`;

      return `

        <article class="portfolio-card">

          ${logoHtml}

          <div class="portfolio-card__top">

            <h3>${p.name}</h3>

            <span class="portfolio-card__cat">${p.category}</span>

          </div>

          <p class="portfolio-card__domain" dir="ltr">${p.domain}</p>
          ${p.note ? `<p class="portfolio-card__note">${p.note}</p>` : ''}

          <a href="${url}" class="portfolio-card__link"

             ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

            ${external ? 'مشاهده وبسایت' : 'مشاهده صفحه'}${linkArrow()}

          </a>

        </article>`;

    }).join('');

  };



  window.renderClientsGrid = function (containerId, limit) {

    const el = document.getElementById(containerId);

    const partners = C.featuredPartners;

    if (!el || !partners) return;

    const showcase = partners.filter(p => p.role !== 'supplier');
    const items = limit ? showcase.slice(0, limit) : showcase;

    el.innerHTML = items.map(p => {

      const external = p.url.startsWith('http');
      const href = external ? p.url : path(p.url);

      const inner = p.logo
        ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" class="client-item__logo">`
        : `<span class="client-item__name">${p.name}</span>`;

      return `

        <a href="${href}" class="client-item client-item--link client-item--logo"

           ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}

           ${p.logo ? `title="${p.name}"` : ''}>

          ${inner}

        </a>`;

    }).join('');

  };



  const navItems = [
    { page: 'home', route: R.home, label: 'خانه', icon: 'home' },
    { page: 'about', route: R.about, label: 'درباره ما', icon: 'info' },
    { page: 'services', route: R.services, label: 'خدمات', icon: 'list' },
    { page: 'portfolio', route: R.portfolio, label: 'نمونه‌کارها', icon: 'briefcase' },
    { page: 'fast', route: R.fast, label: 'طراحی سایت', icon: 'globe' },
    { page: 'blog', route: R.blog, label: 'وبلاگ', icon: 'article' },
    { page: 'contact', route: R.contact, label: 'تماس', icon: 'phone' }
  ];

  window.renderSiteChrome = function () {
    const topBar = document.getElementById('topBar');
    const header = document.getElementById('siteHeader');
    const footer = document.getElementById('siteFooter');
    document.body.classList.add('has-mobile-chrome');

    if (topBar) {
      topBar.className = 'top-bar top-bar--desktop';
      topBar.innerHTML = `
        <div class="container">
          <div class="top-bar__contact">
            <a href="mailto:${C.contact.email}">${ic('mail', { size: 16 })} ${C.contact.email}</a>
            ${C.contact.phone
              ? `<a href="tel:${C.contact.phone}">${ic('phone', { size: 16 })} ${C.contact.phoneDisplay || C.contact.phone}</a>`
              : `<span>${ic('phone', { size: 16 })} ${C.contact.phoneDisplay}</span>`}
            <span>${ic('clock', { size: 16 })} ${C.contact.workingHours}</span>
          </div>
          <div class="top-bar__social">
            <a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me">Instagram</a>
            <a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me">LinkedIn</a>
          </div>
        </div>`;
    }

    if (header) {
      const navLinks = navItems.map(n =>
        `<a href="${path(n.route)}" class="nav__link${isActive(n.page)}">${n.label}</a>`
      ).join('');

      const drawerLinks = navItems.map(n =>
        `<a href="${path(n.route)}" class="mobile-drawer__link${isActive(n.page)}">
          <span class="mobile-drawer__icon">${ic(n.icon, { size: 22 })}</span>
          <span>${n.label}</span>
        </a>`
      ).join('');

      header.innerHTML = `
        <div class="header__desktop">
          <div class="container">
            <a href="${path(R.home)}" class="header__logo" aria-label="${C.siteName} — صفحه اصلی">
              <img src="${path(A.logo)}" alt="${C.siteName}" width="140" height="40">
            </a>
            <nav class="nav nav--desktop" id="nav" aria-label="منوی اصلی">
              ${navLinks}
              <a href="${wa}" class="btn btn--primary nav__cta"
                 ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>مشاوره رایگان</a>
            </nav>
            <button class="menu-toggle" id="menuToggle" aria-label="باز و بسته کردن منو" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div class="mobile-header">
          <a href="${path(R.home)}" class="mobile-header__logo">
            <img src="${path(A.logo)}" alt="${C.siteName}" width="110" height="32">
          </a>
          <div class="mobile-header__actions">
            <a href="${wa}" class="mobile-header__icon-btn mobile-header__icon-btn--wa"
               aria-label="واتساپ"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${ic('whatsapp', { size: 20, variant: 'white' })}</a>
            <a href="${path(R.contact)}" class="mobile-header__cta">تماس</a>
            <button type="button" class="mobile-header__menu" id="mobileMenuBtn" aria-label="منو" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer__head">
            <img src="${path(A.logo)}" alt="${C.siteName}" height="32">
            <button type="button" class="mobile-drawer__close" id="mobileDrawerClose" aria-label="بستن منو">${ic('close', { size: 20 })}</button>
          </div>
          <nav class="mobile-drawer__nav" aria-label="منوی موبایل">
            ${drawerLinks}
          </nav>
          <div class="mobile-drawer__contact">
            <a href="mailto:${C.contact.email}" class="mobile-drawer__contact-item">${ic('mail', { size: 16 })} ${C.contact.email}</a>
            ${C.contact.phone
              ? `<a href="tel:${C.contact.phone}" class="mobile-drawer__contact-item">${ic('phone', { size: 16 })} ${C.contact.phoneDisplay || C.contact.phone}</a>`
              : `<span class="mobile-drawer__contact-item">${ic('phone', { size: 16 })} ${C.contact.phoneDisplay}</span>`}
            <div class="mobile-drawer__social">
              <a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me">Instagram</a>
              <a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me">LinkedIn</a>
            </div>
          </div>
          <a href="${wa}" class="btn btn--yellow mobile-drawer__cta"
             ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>مشاوره رایگان</a>
        </aside>`;
    }

    if (footer) {
      footer.innerHTML = `
        <div class="footer__desktop">
          <div class="container">
            <div class="footer__grid">
              <div class="footer__brand">
                <a href="${path(R.home)}">
                  <img src="${path(A.logo)}" alt="${C.siteName}" class="footer__logo-img">
                </a>
                <p>${C.siteName} — ارائه‌دهنده خدمات دیجیتال، طراحی وب، بازاریابی آنلاین و تامین تجهیزات صنعتی.</p>
              </div>
              <div>
                <h4 class="footer__title">خدمات</h4>
                <ul class="footer__links">
                  <li><a href="${path(R.services)}#digital-marketing">بازاریابی دیجیتال</a></li>
                  <li><a href="${path(R.fast)}">طراحی وب — Fast Studio</a></li>
                  <li><a href="${path(R.services)}#smm">مدیریت SMM</a></li>
                  <li><a href="${path(R.services)}#industrial">تامین تجهیزات صنعتی</a></li>
                </ul>
              </div>
              <div>
                <h4 class="footer__title">دسترسی سریع</h4>
                <ul class="footer__links">
                  <li><a href="${path(R.about)}">درباره ما</a></li>
                  <li><a href="${path(R.portfolio)}">نمونه‌کارها</a></li>
                  <li><a href="${path(R.blog)}">وبلاگ</a></li>
                  <li><a href="${path(R.contact)}">تماس با ما</a></li>
                  <li><a href="${path(R.home)}#faq">سوالات متداول</a></li>
                  <li><a href="${path(R.privacy)}">حریم خصوصی</a></li>
                </ul>
              </div>
              <div>
                <h4 class="footer__title">ارتباط با ما</h4>
                <ul class="footer__links">
                  <li><a href="mailto:${C.contact.email}">${C.contact.email}</a></li>
                  <li><a href="mailto:${C.contact.emailAlt}">${C.contact.emailAlt}</a></li>
                  <li><a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me">اینستاگرام</a></li>
                  <li><a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me">لینکدین</a></li>
                </ul>
              </div>
            </div>
            <div class="footer__bottom">
              © ${new Date().getFullYear()} ${C.siteNameEn} — تمامی حقوق محفوظ است |
              <a href="https://${C.domains.main}" class="footer__domain-link">${C.domains.main}</a> ·
              <a href="https://${C.domains.alt}" class="footer__domain-link" target="_blank" rel="noopener noreferrer">${C.domains.alt}</a>
            </div>
          </div>
        </div>

        <div class="footer__mobile">
          <div class="mobile-footer-cta">
            <a href="${path(R.contact)}" class="mobile-footer-cta__btn mobile-footer-cta__btn--primary">${ic('send', { size: 18 })} فرم تماس</a>
            <a href="${wa}" class="mobile-footer-cta__btn mobile-footer-cta__btn--wa"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${ic('whatsapp', { size: 18 })} واتساپ</a>
          </div>
          <div class="mobile-footer-accordions">
            <details class="mobile-footer-acc" open>
              <summary>خدمات</summary>
              <ul>
                <li><a href="${path(R.services)}#digital-marketing">بازاریابی دیجیتال</a></li>
                <li><a href="${path(R.fast)}">طراحی وب</a></li>
                <li><a href="${path(R.services)}#smm">مدیریت SMM</a></li>
                <li><a href="${path(R.services)}#industrial">تجهیزات صنعتی</a></li>
              </ul>
            </details>
            <details class="mobile-footer-acc">
              <summary>دسترسی سریع</summary>
              <ul>
                <li><a href="${path(R.about)}">درباره ما</a></li>
                <li><a href="${path(R.portfolio)}">نمونه‌کارها</a></li>
                <li><a href="${path(R.blog)}">وبلاگ</a></li>
                <li><a href="${path(R.privacy)}">حریم خصوصی</a></li>
              </ul>
            </details>
            <details class="mobile-footer-acc">
              <summary>ارتباط</summary>
              <ul>
                <li><a href="mailto:${C.contact.email}">${C.contact.email}</a></li>
                <li><a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me">اینستاگرام</a></li>
                <li><a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me">لینکدین</a></li>
              </ul>
            </details>
          </div>
          <div class="mobile-footer-copy">
            <img src="${path(A.logo)}" alt="" class="footer__logo-img footer__logo-img--sm">
            <p>© ${new Date().getFullYear()} ${C.siteNameEn}</p>
          </div>
        </div>`;
    }

    let bottomNav = document.getElementById('mobileBottomNav');
    if (!bottomNav) {
      bottomNav = document.createElement('nav');
      bottomNav.id = 'mobileBottomNav';
      bottomNav.className = 'mobile-bottom-nav';
      bottomNav.setAttribute('aria-label', 'ناوبری پایین موبایل');
      document.body.appendChild(bottomNav);
    }

    const bottomItems = [
      { page: 'home', route: R.home, label: 'خانه', icon: 'home' },
      { page: 'services', route: R.services, label: 'خدمات', icon: 'list' },
      { page: 'fast', route: R.fast, label: 'سایت', icon: 'globe' },
      { page: 'contact', route: R.contact, label: 'تماس', icon: 'phone' }
    ];

    bottomNav.innerHTML = bottomItems.map(item => `
      <a href="${path(item.route)}" class="mobile-bottom-nav__item${isActive(item.page) ? ' active' : ''}">
        <span class="mobile-bottom-nav__icon">${ic(item.icon, { size: 22 })}</span>
        <span class="mobile-bottom-nav__label">${item.label}</span>
      </a>
    `).join('') + `
      <button type="button" class="mobile-bottom-nav__item" id="mobileBottomMenu" aria-label="باز کردن منو">
        <span class="mobile-bottom-nav__icon">${ic('menu', { size: 22 })}</span>
        <span class="mobile-bottom-nav__label">منو</span>
      </button>`;
  };



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

    const ogImgAbs = ogImg.startsWith('http') ? ogImg : `${C.baseUrl}/${ogImg}`;



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

    setMeta('og:locale', C.locale, true);

    setMeta('twitter:card', C.seo.twitterCard);

    setMeta('twitter:title', meta.title);

    setMeta('twitter:description', meta.description);

    setMeta('twitter:image', ogImgAbs);



    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {

      canonical = document.createElement('link');

      canonical.rel = 'canonical';

      document.head.appendChild(canonical);

    }

    canonical.href = meta.canonical || C.baseUrl;



    if (!document.querySelector('link[rel="alternate"][hreflang]')) {

      const alt = document.createElement('link');

      alt.rel = 'alternate';

      alt.hreflang = C.language;

      alt.href = meta.canonical || C.baseUrl;

      document.head.appendChild(alt);

    }



    const ld = {

      '@context': 'https://schema.org',

      '@type': 'Organization',

      name: C.siteNameEn,

      alternateName: C.siteName,

      url: C.baseUrl,

      logo: `${C.baseUrl}/${A.logo}`,

      email: C.contact.email,

      foundingDate: '2013',

      founder: {

        '@type': 'Person',

        name: 'Ersan Jahed Tabrizi',

        jobTitle: 'Founder',

        url: C.contact.linkedin,

        sameAs: C.contact.linkedin

      },

      areaServed: ['TR', 'AM', 'IR', 'AE', 'DE', 'US', 'GB', 'LB', 'IQ', 'GE', 'IT'],

      knowsAbout: ['Digital Marketing', 'Web Design', 'Industrial Equipment', 'Fintech', 'SEO'],

      address: {

        '@type': 'PostalAddress',

        addressLocality: 'Istanbul',

        addressCountry: 'TR'

      },

      sameAs: [C.contact.linkedin, C.contact.instagram, `https://${C.domains.alt}`],

      contactPoint: {

        '@type': 'ContactPoint',

        contactType: 'customer service',

        email: C.contact.email,

        availableLanguage: ['Persian', 'English', 'Turkish']

      }

    };



    let script = document.getElementById('jsonld-org');

    if (!script) {

      script = document.createElement('script');

      script.id = 'jsonld-org';

      script.type = 'application/ld+json';

      document.head.appendChild(script);

    }

    script.textContent = JSON.stringify(ld);



    const webLd = {

      '@context': 'https://schema.org',

      '@type': 'WebSite',

      name: C.siteName,

      alternateName: C.siteNameEn,

      url: C.baseUrl,

      inLanguage: C.language,

      publisher: { '@type': 'Organization', name: C.siteNameEn }

    };

    let webScript = document.getElementById('jsonld-website');

    if (!webScript) {

      webScript = document.createElement('script');

      webScript.id = 'jsonld-website';

      webScript.type = 'application/ld+json';

      document.head.appendChild(webScript);

    }

    webScript.textContent = JSON.stringify(webLd);

  };



  window.injectContactPageSchema = function () {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ContactPage',

      name: 'تماس با ما — ' + C.siteName,

      url: C.baseUrl + '/pages/contact.html',

      description: 'فرم تماس و راه‌های ارتباطی با بیزدوار گروپ',

      mainEntity: {

        '@type': 'Organization',

        name: C.siteNameEn,

        email: C.contact.email,

        url: C.baseUrl,

        address: {

          '@type': 'PostalAddress',

          addressLocality: 'Istanbul',

          addressCountry: 'TR'

        }

      }

    };

    injectJsonLd('jsonld-contact', ld);

  };



  window.injectFaqSchema = function (items) {

    if (!items || !items.length) return;

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: items.map(item => ({

        '@type': 'Question',

        name: item.q,

        acceptedAnswer: { '@type': 'Answer', text: item.a }

      }))

    };

    injectJsonLd('jsonld-faq', ld);

  };



  window.injectServiceSchema = function () {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ItemList',

      name: 'خدمات بیزدوار گروپ',

      itemListElement: C.services.map((s, i) => ({

        '@type': 'ListItem',

        position: i + 1,

        item: {

          '@type': 'Service',

          name: s.title,

          provider: { '@type': 'Organization', name: C.siteNameEn },

          url: absUrl(s.slug)

        }

      }))

    };

    injectJsonLd('jsonld-services', ld);

  };



  window.injectPortfolioSchema = function () {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ItemList',

      name: 'نمونه‌کارهای بیزدوار گروپ',

      numberOfItems: C.portfolio.length,

      itemListElement: C.portfolio.map((p, i) => ({

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



  window.injectArticleSchema = function (article) {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: article.title,

      description: article.description,

      datePublished: article.date,

      author: { '@type': 'Organization', name: C.siteNameEn },

      publisher: {

        '@type': 'Organization',

        name: C.siteNameEn,

        logo: { '@type': 'ImageObject', url: `${C.baseUrl}/${A.logo}` }

      },

      mainEntityOfPage: absUrl(article.slug),

      image: article.image ? absUrl(article.image) : `${C.baseUrl}/${A.ogImage}`

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



  window.renderTrustBar = function (containerId) {

    const el = document.getElementById(containerId);

    if (!el || !C.trustMetrics || !C.trustMetrics.length) return;

    el.innerHTML = `

      <section class="trust-bar" aria-label="شاخص‌های کلیدی بیزدوار">

        <div class="container">

          <ul class="trust-bar__grid">

            ${C.trustMetrics.map(m => `

              <li class="trust-bar__item">

                <strong class="trust-bar__value">${m.value}</strong>

                <span class="trust-bar__label">${m.label}</span>

              </li>

            `).join('')}

          </ul>

        </div>

      </section>`;

  };



  window.renderCredibilitySection = function (containerId) {
    const I = window.BIZDAVAR_INTEL;
    const el = document.getElementById(containerId);
    if (!el || !I) return;
    const f = I.leadership.founder;
    el.innerHTML = `
      <section class="section intel-section" aria-labelledby="cred-heading">
        <div class="container">
          <div class="section__header section__header--pro">
            <span class="section__eyebrow">اعتبار و تجربه</span>
            <h2 class="section__title" id="cred-heading">چرا بیزدوار گروپ؟</h2>
            <p class="section__desc">داده‌های تأییدشده از پروفایل حرفه‌ای، نمونه‌کارها و سوابق اجرایی</p>
          </div>
          <div class="intel-stats">
            <div class="intel-stat"><strong>${f.projectsCount}</strong><span>پروژه وب و پلتفرم</span></div>
            <div class="intel-stat"><strong>${f.countriesCount}</strong><span>کشور</span></div>
            <div class="intel-stat"><strong>${f.experienceYears}</strong><span>سال تجربه</span></div>
            <div class="intel-stat"><strong>${I.identity.foundedDisplay}</strong><span>شروع فعالیت</span></div>
          </div>
          <div class="intel-proof-grid">
            ${I.socialProof.highlights.map(h => `
              <article class="intel-proof-card">
                <span class="intel-proof-card__cat">${h.category}</span>
                <p>${h.text}</p>
                <footer><cite>${h.source}</cite> · ${h.year}</footer>
              </article>
            `).join('')}
          </div>
          <p class="intel-note text-center mt-24">منابع: <a href="${f.linkedin}" target="_blank" rel="noopener noreferrer me">LinkedIn بنیان‌گذار</a> · <a href="${path(R.portfolio)}">نمونه‌کارها</a> · <a href="${path(R.about)}">درباره کامل</a></p>
        </div>
      </section>`;
  };

  window.renderCompanyIntelAbout = function () {
    const I = window.BIZDAVAR_INTEL;
    if (!I) return;
    const f = I.leadership.founder;

    const identityEl = document.getElementById('intelIdentity');
    if (identityEl) {
      identityEl.innerHTML = `
        <div class="intel-identity-grid">
          <dl class="intel-dl">
            <div><dt>نام رسمی</dt><dd>${I.identity.legalNameFa} (${I.identity.legalName})</dd></div>
            <div><dt>تأسیس</dt><dd>${I.identity.foundedDisplay}</dd></div>
            <div><dt>دامنه‌ها</dt><dd dir="ltr">${I.identity.domains.join(' · ')}</dd></div>
            <div><dt>زبان‌های خدمت</dt><dd>${I.identity.languages.join('، ')}</dd></div>
          </dl>
          <ul class="intel-hq-list">
            ${I.identity.headquarters.map(h => `
              <li><strong>${h.city}، ${h.country}</strong><span>${h.role}</span></li>
            `).join('')}
          </ul>
        </div>`;
    }

    const leaderEl = document.getElementById('intelLeader');
    if (leaderEl) {
      leaderEl.innerHTML = `
        <article class="intel-leader-card">
          <div class="intel-leader-card__head">
            <h3>${f.nameFa}</h3>
            <p>${f.titleFa} · ${f.experienceYears} سال · ${f.projectsCount} پروژه</p>
            <a href="${f.linkedin}" class="service-card__link" target="_blank" rel="noopener noreferrer me">پروفایل LinkedIn${linkArrow()}</a>
          </div>
          <p>${f.bioFa}</p>
          <div class="intel-tags">
            ${f.expertise.map(e => `<span class="intel-tag">${e}</span>`).join('')}
          </div>
          <h4>تحصیلات</h4>
          <ul class="intel-list">${f.education.map(e => `<li>${e}</li>`).join('')}</ul>
        </article>`;
    }

    const areasEl = document.getElementById('intelAreas');
    if (areasEl) {
      areasEl.innerHTML = I.activityAreas.map(a => `
        <div class="intel-area-card">
          <h3>${a.title}</h3>
          <ul>${a.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('');
    }

    const ecoEl = document.getElementById('intelEcosystem');
    if (ecoEl) {
      ecoEl.innerHTML = I.ecosystem.map(b => `
        <div class="intel-eco-card">
          <strong>${b.name}</strong>
          <span class="intel-eco-card__type">${b.type}</span>
          <p>${b.note}</p>
        </div>
      `).join('');
    }

    const presenceEl = document.getElementById('intelPresence');
    if (presenceEl && I.presence) {
      const P = I.presence;
      const regions = P.regions || [];

      presenceEl.innerHTML = `
        <div class="presence-showcase">
          <div class="presence-showcase__hero">
            <div class="presence-showcase__map">
              <img src="${path(P.mapImage || 'assets/images/content/presence-map.svg')}" alt="نقشه حضور جهانی بیزدوار — ۱۱ کشور" width="480" height="300" loading="lazy">
            </div>
            <div class="presence-showcase__intro">
              <p class="presence-showcase__desc">${P.summaryFa}</p>
              <div class="presence-stats">
                ${(P.stats || []).map(s => `
                  <div class="presence-stat">
                    <strong>${s.value}</strong>
                    <span>${s.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="presence-regions">
            ${regions.map(region => `
              <div class="presence-region">
                <h3 class="presence-region__title">${region.title}</h3>
                <div class="presence-country-grid">
                  ${region.countries.map(c => `
                    <article class="presence-country${c.hub ? ' presence-country--hub' : ''}">
                      <div class="presence-country__head">
                        <strong>${c.name}</strong>
                        ${c.hub ? '<span class="presence-country__badge">هاب</span>' : ''}
                      </div>
                      ${c.city ? `<span class="presence-country__city">${c.city}</span>` : ''}
                      <p class="presence-country__focus">${c.focus}</p>
                    </article>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    }

    const credEl = document.getElementById('intelCredentials');
    if (credEl) {
      credEl.innerHTML = I.credentials.map(c => `
        <div class="intel-cred-card">
          <strong>${c.name}</strong>
          <span>${c.issuer} — ${c.year}</span>
        </div>
      `).join('');
    }

    const proofEl = document.getElementById('intelSocialProof');
    if (proofEl) {
      proofEl.innerHTML = `
        <div class="intel-proof-grid">
          ${I.socialProof.highlights.map(h => `
            <article class="intel-proof-card">
              <span class="intel-proof-card__cat">${h.category}</span>
              <p>${h.text}</p>
              <footer><cite>${h.source}</cite></footer>
            </article>
          `).join('')}
        </div>
        <ul class="intel-trust-list">
          ${I.socialProof.trustSignals.map(s => `<li>${s}</li>`).join('')}
        </ul>`;
    }

    const faqEl = document.getElementById('intelFaq');
    if (faqEl) {
      faqEl.innerHTML = I.faqIntel.map(item => `
        <details class="faq-item">
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>
      `).join('');
    }
  };

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

  window.renderIndustrialSection = function (containerId) {

    const el = document.getElementById(containerId);

    const products = C.industrialProducts;

    if (!el || !products || !products.length) return;

    const accentClass = (a) => (a ? ` industrial-card--${a}` : '');

    const cards = products.map(p => {

      const href = p.internal ? path(p.url) : p.url;

      const external = !p.internal && p.url.startsWith('http');

      const tags = (p.tags || []).map(t => `<span class="industrial-card__tag">${t}</span>`).join('');

      return `

        <a href="${href}" class="industrial-card industrial-card--link${accentClass(p.accent)}"

           ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

          <div class="industrial-card__head">

            <div class="industrial-card__logo">

              <img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="140" height="48">

            </div>

            ${p.badge ? `<span class="industrial-card__badge">${p.badge}</span>` : ''}

          </div>

          <h3 class="industrial-card__title">${p.title}</h3>

          <p class="industrial-card__desc">${p.desc}</p>

          ${tags ? `<div class="industrial-card__tags">${tags}</div>` : ''}

          <span class="industrial-card__cta">${p.cta || 'بیشتر بدانید'}${linkArrow()}</span>

        </a>`;

    }).join('');

    el.innerHTML = `

      <section class="section section--gray landing-industrial" id="products" aria-labelledby="industrial-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">تجهیزات صنعتی</span>

            <h2 class="section__title" id="industrial-heading">تامین تجهیزات و برندهای معتبر</h2>

            <p class="section__desc">سنسور، دتکتور، موتور و پمپ — انتخاب فنی، استعلام قیمت و لجستیک بین‌المللی برای پروژه‌های B2B</p>

          </div>

          <div class="industrial-grid">${cards}</div>

          <div class="industrial-cta-bar">

            <div class="industrial-cta-bar__content">

              <span class="industrial-cta-bar__icon" data-bd-icon="wrench" data-bd-size="28" aria-hidden="true"></span>

              <div>

                <strong>نیاز به مشاوره تامین دارید؟</strong>

                <p>انتخاب مدل، خرید بین‌المللی، حمل و گمرک — پاسخ توسط تیم فنی بیزدوار</p>

              </div>

            </div>

            <div class="industrial-cta-bar__actions">

              <a href="${path(R.contact)}" class="btn btn--yellow">درخواست استعلام</a>

              <a href="${path(R.services)}#industrial" class="btn btn--outline">خدمات صنعتی</a>

            </div>

          </div>

        </div>

      </section>`;

  };



  window.renderProcessSection = function (containerId) {

    const el = document.getElementById(containerId);

    if (!el || !C.processSteps || !C.processSteps.length) return;

    el.innerHTML = `

      <section class="section section--gray process-section" aria-labelledby="process-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">روش کار ما</span>

            <h2 class="section__title" id="process-heading">فرآیند حرفه‌ای همکاری</h2>

            <p class="section__desc">از مشاوره اولیه تا تحویل و پشتیبانی — مسیر شفاف و قابل پیگیری</p>

          </div>

          <ol class="process-grid">

            ${C.processSteps.map(step => `

              <li class="process-step">

                <span class="process-step__num" aria-hidden="true">${step.num}</span>

                <h3 class="process-step__title">${step.title}</h3>

                <p class="process-step__desc">${step.desc}</p>

              </li>

            `).join('')}

          </ol>

        </div>

      </section>`;

  };

})();


