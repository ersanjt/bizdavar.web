(function () {

  const C = window.BIZDAVAR_CONFIG;

  if (!C) return;



  const currentPage = document.body.dataset.page || 'home';

  const wa = C.contact.whatsapp

    ? `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappMessage)}`

    : 'contact.html';



  function isActive(page) {
    if (page === 'blog' && (currentPage === 'blog' || currentPage === 'article')) return ' active';
    return currentPage === page ? ' active' : '';
  }



  function absUrl(path) {

    if (!path) return C.baseUrl;

    if (path.startsWith('http')) return path;

    return `${C.baseUrl}/${path.replace(/^\//, '')}`;

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

                ? `<a href="${item.url}" itemprop="item"><span itemprop="name">${item.name}</span></a>`

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

        ${C.services.map(s => `<a href="${s.slug}">${s.title}</a>`).join('')}

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

        <h3><a href="${p.slug}">${p.title}</a></h3>

        <p>${p.excerpt}</p>

        <a href="${p.slug}" class="service-card__link">ادامه مطلب ←</a>

      </article>

    `).join('');

  };



  window.renderPortfolioGrid = function (containerId) {

    const el = document.getElementById(containerId);

    if (!el || !C.portfolio) return;

    el.innerHTML = C.portfolio.map(p => {

      const url = getProjectUrl(p);

      const external = !p.internal;

      return `

        <article class="portfolio-card">

          <div class="portfolio-card__top">

            <h3>${p.name}</h3>

            <span class="portfolio-card__cat">${p.category}</span>

          </div>

          <p class="portfolio-card__domain" dir="ltr">${p.domain}</p>

          <a href="${url}" class="portfolio-card__link"

             ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

            ${external ? 'مشاهده وبسایت' : 'مشاهده صفحه'} ←

          </a>

        </article>`;

    }).join('');

  };



  const navItems = [
    { page: 'home', href: 'index.html', label: 'خانه', icon: '🏠' },
    { page: 'about', href: 'about.html', label: 'درباره ما', icon: 'ℹ️' },
    { page: 'services', href: 'services.html', label: 'خدمات', icon: '📋' },
    { page: 'portfolio', href: 'portfolio.html', label: 'نمونه‌کارها', icon: '💼' },
    { page: 'fast', href: 'fast.html', label: 'طراحی سایت', icon: '🌐' },
    { page: 'blog', href: 'blog.html', label: 'وبلاگ', icon: '📝' },
    { page: 'contact', href: 'contact.html', label: 'تماس', icon: '📞' }
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
            <a href="mailto:${C.contact.email}">📧 ${C.contact.email}</a>
            ${C.contact.phone
              ? `<a href="tel:${C.contact.phone}">📞 ${C.contact.phoneDisplay || C.contact.phone}</a>`
              : `<span>📞 ${C.contact.phoneDisplay}</span>`}
            <span>🕐 ${C.contact.workingHours}</span>
          </div>
          <div class="top-bar__social">
            <a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me">Instagram</a>
            <a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me">LinkedIn</a>
          </div>
        </div>`;
    }

    if (header) {
      const navLinks = navItems.map(n =>
        `<a href="${n.href}" class="nav__link${isActive(n.page)}">${n.label}</a>`
      ).join('');

      const drawerLinks = navItems.map(n =>
        `<a href="${n.href}" class="mobile-drawer__link${isActive(n.page)}">
          <span class="mobile-drawer__icon">${n.icon}</span>
          <span>${n.label}</span>
        </a>`
      ).join('');

      header.innerHTML = `
        <div class="header__desktop">
          <div class="container">
            <a href="index.html" class="header__logo" aria-label="${C.siteName} — صفحه اصلی">
              <img src="assets/images/bizdavar-logo.png" alt="${C.siteName}" width="140" height="40">
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
          <a href="index.html" class="mobile-header__logo">
            <img src="assets/images/bizdavar-logo.png" alt="${C.siteName}" width="110" height="32">
          </a>
          <div class="mobile-header__actions">
            <a href="${wa}" class="mobile-header__icon-btn mobile-header__icon-btn--wa"
               aria-label="واتساپ"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>💬</a>
            <a href="contact.html" class="mobile-header__cta">تماس</a>
            <button type="button" class="mobile-header__menu" id="mobileMenuBtn" aria-label="منو" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer__head">
            <img src="assets/images/bizdavar-logo.png" alt="${C.siteName}" height="32">
            <button type="button" class="mobile-drawer__close" id="mobileDrawerClose" aria-label="بستن منو">✕</button>
          </div>
          <nav class="mobile-drawer__nav" aria-label="منوی موبایل">
            ${drawerLinks}
          </nav>
          <div class="mobile-drawer__contact">
            <a href="mailto:${C.contact.email}" class="mobile-drawer__contact-item">📧 ${C.contact.email}</a>
            ${C.contact.phone
              ? `<a href="tel:${C.contact.phone}" class="mobile-drawer__contact-item">📞 ${C.contact.phoneDisplay || C.contact.phone}</a>`
              : `<span class="mobile-drawer__contact-item">📞 ${C.contact.phoneDisplay}</span>`}
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
                <a href="index.html">
                  <img src="assets/images/bizdavar-logo.png" alt="${C.siteName}" class="footer__logo-img">
                </a>
                <p>${C.siteName} — ارائه‌دهنده خدمات دیجیتال، طراحی وب، بازاریابی آنلاین و تامین تجهیزات صنعتی.</p>
              </div>
              <div>
                <h4 class="footer__title">خدمات</h4>
                <ul class="footer__links">
                  <li><a href="services.html#digital-marketing">بازاریابی دیجیتال</a></li>
                  <li><a href="fast.html">طراحی وب — Fast Studio</a></li>
                  <li><a href="services.html#smm">مدیریت SMM</a></li>
                  <li><a href="services.html#industrial">تامین تجهیزات صنعتی</a></li>
                </ul>
              </div>
              <div>
                <h4 class="footer__title">دسترسی سریع</h4>
                <ul class="footer__links">
                  <li><a href="about.html">درباره ما</a></li>
                  <li><a href="portfolio.html">نمونه‌کارها</a></li>
                  <li><a href="blog.html">وبلاگ</a></li>
                  <li><a href="contact.html">تماس با ما</a></li>
                  <li><a href="index.html#faq">سوالات متداول</a></li>
                  <li><a href="privacy.html">حریم خصوصی</a></li>
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
            <a href="contact.html" class="mobile-footer-cta__btn mobile-footer-cta__btn--primary">📩 فرم تماس</a>
            <a href="${wa}" class="mobile-footer-cta__btn mobile-footer-cta__btn--wa"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>💬 واتساپ</a>
          </div>
          <div class="mobile-footer-accordions">
            <details class="mobile-footer-acc" open>
              <summary>خدمات</summary>
              <ul>
                <li><a href="services.html#digital-marketing">بازاریابی دیجیتال</a></li>
                <li><a href="fast.html">طراحی وب</a></li>
                <li><a href="services.html#smm">مدیریت SMM</a></li>
                <li><a href="services.html#industrial">تجهیزات صنعتی</a></li>
              </ul>
            </details>
            <details class="mobile-footer-acc">
              <summary>دسترسی سریع</summary>
              <ul>
                <li><a href="about.html">درباره ما</a></li>
                <li><a href="portfolio.html">نمونه‌کارها</a></li>
                <li><a href="blog.html">وبلاگ</a></li>
                <li><a href="privacy.html">حریم خصوصی</a></li>
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
            <img src="assets/images/bizdavar-logo.png" alt="" class="footer__logo-img footer__logo-img--sm">
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
      { page: 'home', href: 'index.html', label: 'خانه', icon: '🏠' },
      { page: 'services', href: 'services.html', label: 'خدمات', icon: '📋' },
      { page: 'fast', href: 'fast.html', label: 'سایت', icon: '🌐' },
      { page: 'contact', href: 'contact.html', label: 'تماس', icon: '📞' }
    ];

    bottomNav.innerHTML = bottomItems.map(item => `
      <a href="${item.href}" class="mobile-bottom-nav__item${isActive(item.page) ? ' active' : ''}">
        <span class="mobile-bottom-nav__icon">${item.icon}</span>
        <span class="mobile-bottom-nav__label">${item.label}</span>
      </a>
    `).join('') + `
      <button type="button" class="mobile-bottom-nav__item" id="mobileBottomMenu" aria-label="باز کردن منو">
        <span class="mobile-bottom-nav__icon">☰</span>
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



    const ogImg = (meta.ogImage || C.seo.ogImage);

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

      logo: `${C.baseUrl}/assets/images/bizdavar-logo.png`,

      email: C.contact.email,

      address: {

        '@type': 'PostalAddress',

        addressLocality: 'Istanbul',

        addressCountry: 'TR'

      },

      sameAs: [C.contact.linkedin, C.contact.instagram],

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

      url: C.baseUrl + '/contact.html',

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

        logo: { '@type': 'ImageObject', url: `${C.baseUrl}/assets/images/bizdavar-logo.png` }

      },

      mainEntityOfPage: absUrl(article.slug),

      image: article.image ? absUrl(article.image) : `${C.baseUrl}/${C.seo.ogImage}`

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


