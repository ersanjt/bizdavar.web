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
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));

  function langSwitcherHtml(extraClass) {
    const I = window.BIZDAVAR_I18N;
    if (!I) return '';
    const cur = I.locale;
    const langs = [
      { id: 'fa', label: t('common.langFa', 'فارسی') },
      { id: 'tr', label: t('common.langTr', 'Türkçe') },
      { id: 'en', label: t('common.langEn', 'English') }
    ];
    const current = langs.find(l => l.id === cur) || langs[0];
    return `<details class="lang-dropdown${extraClass ? ' ' + extraClass : ''}" data-lang-dropdown>
      <summary class="lang-dropdown__toggle" aria-label="${t('common.langLabel', 'زبان')}">
        <span class="lang-dropdown__icon">${ic('globe', { size: 15 })}</span>
        <span class="lang-dropdown__label">${current.label}</span>
        <span class="lang-dropdown__chev" aria-hidden="true"></span>
      </summary>
      <div class="lang-dropdown__panel" role="listbox">
        ${langs.map(l => `
          <button type="button" class="lang-dropdown__option${l.id === cur ? ' is-active' : ''}"
            data-lang="${l.id}" role="option"${l.id === cur ? ' aria-selected="true"' : ''}>
            ${l.label}
          </button>
        `).join('')}
      </div>
    </details>`;
  }

  function bindLangSwitcher(root) {
    if (!root) return;
    root.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        const dropdown = btn.closest('[data-lang-dropdown]');
        if (dropdown) dropdown.open = false;
        if (window.BIZDAVAR_I18N && lang !== window.BIZDAVAR_I18N.locale) {
          window.BIZDAVAR_I18N.setLocale(lang);
        }
      });
    });
    root.querySelectorAll('[data-lang-dropdown]').forEach(dropdown => {
      dropdown.addEventListener('toggle', () => {
        if (!dropdown.open) return;
        document.querySelectorAll('[data-lang-dropdown][open]').forEach(other => {
          if (other !== dropdown) other.open = false;
        });
      });
    });
  }

  function getNavItems() {
    return [
      { page: 'home', route: R.home, label: t('nav.home', 'خانه'), icon: 'home' },
      { page: 'about', route: R.about, label: t('nav.about', 'درباره ما'), icon: 'info' },
      { page: 'services', route: R.services, label: t('nav.services', 'خدمات'), icon: 'list' },
      { page: 'portfolio', route: R.portfolio, label: t('nav.portfolio', 'نمونه‌کارها'), icon: 'briefcase' },
      { page: 'fast', route: R.fast, label: t('nav.webDesign', 'طراحی سایت'), icon: 'globe' },
      { page: 'blog', route: R.blog, label: t('nav.blog', 'وبلاگ'), icon: 'article' },
      { page: 'contact', route: R.contact, label: t('nav.contact', 'تماس'), icon: 'phone' }
    ];
  }



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

  function buildContactPoints() {
    const channels = C.contact.channels || [];
    const langs = ['Persian', 'English', 'Turkish'];
    if (channels.length) {
      return channels.map(ch => ({
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: ch.tel,
        areaServed: ch.id === 'ir' ? 'IR' : 'TR',
        availableLanguage: langs,
        contactOption: 'https://schema.org/WhatsApp'
      }));
    }
    if (C.contact.phone) {
      return [{
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: C.contact.phone,
        email: C.contact.email,
        availableLanguage: langs
      }];
    }
    return [{
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: C.contact.email,
      availableLanguage: langs
    }];
  }

  function orgAddress() {
    const hq = C.geo?.headquarters;
    return {
      '@type': 'PostalAddress',
      addressLocality: hq?.city || 'Istanbul',
      addressCountry: hq?.countryCode || 'TR'
    };
  }

  function breadcrumbHref(url) {
    if (!url || url.startsWith('http') || url.startsWith('#')) return url;
    return path(url);
  }



  function localizeCrumbs(items) {
    const I = window.BIZDAVAR_I18N;
    if (!I || !items) return items;
    return items.map(item => {
      if (!item.page) return item;
      const name = item.page === 'home'
        ? I.t('nav.home', item.name)
        : I.pageCrumb(item.page, item.name);
      return { ...item, name };
    });
  }

  window.renderBreadcrumbs = function (items) {

    const el = document.getElementById('breadcrumbs');

    if (!el || !items || !items.length) return;

    items = localizeCrumbs(items);
    el.setAttribute('aria-label', t('common.breadcrumbAria', 'مسیر صفحه'));

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

          <h2 class="related-links__title">${t('common.relatedPages', 'صفحات مرتبط')}</h2>

          <div class="related-links__grid">

            ${links.map(l => `

              <a href="${l.url}" class="related-links__card">

                <span class="related-links__label">${l.label || t('common.view', 'مشاهده')}</span>

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

        <a href="${path(p.slug)}" class="service-card__link">${t('common.readMore', 'ادامه مطلب')}${linkArrow()}</a>

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
        ? `<div class="portfolio-card__logo"><img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="160" height="52"></div>`
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

            ${external ? t('common.viewSite', 'مشاهده وبسایت') : t('common.viewPage', 'مشاهده صفحه')}${linkArrow()}

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



  window.renderSiteChrome = function () {
    const navItems = getNavItems();
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
            <a href="${path(R.home)}" class="header__logo" aria-label="${C.siteName} — ${t('common.homeAria', 'صفحه اصلی')}">
              <img src="${path(A.logo)}" alt="${C.siteName}" width="140" height="40">
            </a>
            <nav class="nav nav--desktop" id="nav" aria-label="${t('common.mainNav', 'منوی اصلی')}">
              ${navLinks}
              ${langSwitcherHtml()}
              <a href="${wa}" class="btn btn--primary nav__cta"
                 ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${t('common.freeConsult', 'مشاوره رایگان')}</a>
            </nav>
            <button class="menu-toggle" id="menuToggle" aria-label="${t('common.openMenu', 'باز و بسته کردن منو')}" aria-expanded="false">
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
               aria-label="${t('common.whatsapp', 'واتساپ')}"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${ic('whatsapp', { size: 20, variant: 'white' })}</a>
            <a href="${path(R.contact)}" class="mobile-header__cta">${t('nav.contact', 'تماس')}</a>
            <button type="button" class="mobile-header__menu" id="mobileMenuBtn" aria-label="${t('common.menu', 'منو')}" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer__head">
            <img src="${path(A.logo)}" alt="${C.siteName}" height="32">
            <button type="button" class="mobile-drawer__close" id="mobileDrawerClose" aria-label="${t('common.closeMenu', 'بستن منو')}">${ic('close', { size: 20 })}</button>
          </div>
          <div class="mobile-drawer__lang">${langSwitcherHtml('lang-dropdown--drawer')}</div>
          <nav class="mobile-drawer__nav" aria-label="${t('common.mobileNav', 'منوی موبایل')}">
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
             ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${t('common.freeConsult', 'مشاوره رایگان')}</a>
        </aside>`;
    }

    if (footer) {
      footer.className = 'footer footer--modern';
      const year = new Date().getFullYear();
      const metrics = (window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.getTrustMetrics)
        ? window.BIZDAVAR_I18N.getTrustMetrics()
        : (C.trustMetrics || []);
      const trustPills = metrics.slice(0, 3).map((m, i) =>
        `<span class="footer__pill${i === 0 ? ' footer__pill--accent' : ''}">${m.value} ${m.label}</span>`
      ).join('');
      const channels = C.contact.channels || [];
      const waMsg = encodeURIComponent(C.contact.whatsappMessage || '');
      const mailChip = `<a href="mailto:${C.contact.email}" class="footer__chip">
        <span class="footer__chip-icon">${ic('mail', { size: 16 })}</span>
        <span class="footer__chip-ltr">${C.contact.email}</span>
      </a>`;
      const channelChips = channels.length
        ? channels.map(ch => `
          <a href="https://wa.me/${ch.whatsapp}?text=${waMsg}" class="footer__chip footer__chip--wa" target="_blank" rel="noopener noreferrer">
            <span class="footer__chip-icon">${ic('whatsapp', { size: 16 })}</span>
            <span class="footer__chip-body">
              <span class="footer__chip-label">${ch.label}</span>
              <span class="footer__chip-ltr">${ch.display}</span>
            </span>
          </a>`).join('')
        : (C.contact.phone
          ? `<a href="tel:${C.contact.phone}" class="footer__chip">
              <span class="footer__chip-icon">${ic('phone', { size: 16 })}</span>
              <span class="footer__chip-ltr">${C.contact.phoneDisplay || C.contact.phone}</span>
            </a>`
          : '');

      footer.innerHTML = `
        <div class="footer__glow" aria-hidden="true"></div>
        <div class="footer__desktop">
          <div class="container">
            <div class="footer__main">
              <div class="footer__brand-col">
                <a href="${path(R.home)}" class="footer__logo-link">
                  <img src="${path(A.logo)}" alt="${C.siteName}" class="footer__logo-img" width="140" height="40">
                </a>
                <p class="footer__tagline">${t('footer.tagline')}</p>
                <div class="footer__trust">${trustPills}<span class="footer__pill">${t('footer.hq', 'Istanbul HQ')}</span></div>
                <p class="footer__social-label">${t('footer.followUs', 'Follow us')}</p>
                <div class="footer__social">
                  <a href="${C.contact.instagram}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">IG</a>
                  <a href="${C.contact.linkedin}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">in</a>
                  <a href="${wa}" class="footer__social-btn footer__social-btn--wa" ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${t('common.whatsapp')}">${ic('whatsapp', { size: 18 })}</a>
                </div>
                ${langSwitcherHtml('lang-dropdown--footer')}
              </div>
              <nav class="footer__nav-col" aria-label="${t('footer.services')}">
                <h4 class="footer__title">${t('footer.services', 'خدمات')}</h4>
                <ul class="footer__links">
                  <li><a href="${path(R.services)}#digital-marketing">${t('footer.digitalMarketing')}</a></li>
                  <li><a href="${path(R.fast)}">${t('footer.webFast')}</a></li>
                  <li><a href="${path(R.services)}#smm">${t('footer.smm')}</a></li>
                  <li><a href="${path(R.services)}#industrial">${t('footer.industrial')}</a></li>
                </ul>
              </nav>
              <nav class="footer__nav-col" aria-label="${t('footer.quickLinks')}">
                <h4 class="footer__title">${t('footer.quickLinks', 'دسترسی سریع')}</h4>
                <ul class="footer__links">
                  <li><a href="${path(R.about)}">${t('nav.about')}</a></li>
                  <li><a href="${path(R.portfolio)}">${t('nav.portfolio')}</a></li>
                  <li><a href="${path(R.blog)}">${t('nav.blog')}</a></li>
                  <li><a href="${path(R.contact)}">${t('footer.contactUs')}</a></li>
                  <li><a href="${path(R.home)}#faq">${t('footer.faq')}</a></li>
                </ul>
              </nav>
              <div class="footer__nav-col">
                <h4 class="footer__title">${t('footer.connect', 'ارتباط با ما')}</h4>
                <div class="footer__contact-chips">
                  ${mailChip}
                  ${channelChips}
                </div>
                <div class="footer__domains">
                  <a href="https://${C.domains.main}" class="footer__domain-badge">${C.domains.main}</a>
                  <a href="https://${C.domains.alt}" class="footer__domain-badge" target="_blank" rel="noopener noreferrer">${C.domains.alt}</a>
                </div>
              </div>
            </div>
            <div class="footer__bar">
              <p class="footer__copy">© ${year} ${C.siteNameEn} — ${t('common.rights', 'تمامی حقوق محفوظ است')}</p>
              <nav class="footer__legal" aria-label="${t('footer.legal', 'Legal')}">
                <a href="${path(R.privacy)}">${t('footer.privacy')}</a>
                <a href="${path(R.home)}#faq">${t('footer.faq')}</a>
                <a href="${path(R.contact)}">${t('footer.contactUs')}</a>
              </nav>
            </div>
          </div>
        </div>

        <div class="footer__mobile">
          <div class="mobile-footer-hero">
            <a href="${path(R.home)}"><img src="${path(A.logo)}" alt="${C.siteName}" class="footer__logo-img footer__logo-img--sm"></a>
            <p>${t('footer.tagline')}</p>
            <div class="footer__trust">${trustPills}</div>
            <div class="footer__social">
              <a href="${C.contact.instagram}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">IG</a>
              <a href="${C.contact.linkedin}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">in</a>
              <a href="${wa}" class="footer__social-btn footer__social-btn--wa" ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${t('common.whatsapp')}">${ic('whatsapp', { size: 18 })}</a>
            </div>
            ${langSwitcherHtml('lang-dropdown--drawer')}
          </div>
          <div class="mobile-footer-cta">
            <a href="${path(R.contact)}" class="mobile-footer-cta__btn mobile-footer-cta__btn--primary">${ic('send', { size: 18 })} ${t('common.contactForm')}</a>
            <a href="${wa}" class="mobile-footer-cta__btn mobile-footer-cta__btn--wa"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${ic('whatsapp', { size: 18 })} ${t('common.whatsapp')}</a>
          </div>
          <div class="mobile-footer-accordions">
            <details class="mobile-footer-acc">
              <summary>${t('footer.services')}</summary>
              <ul>
                <li><a href="${path(R.services)}#digital-marketing">${t('footer.digitalMarketing')}</a></li>
                <li><a href="${path(R.fast)}">${t('footer.webDesign')}</a></li>
                <li><a href="${path(R.services)}#smm">${t('footer.smm')}</a></li>
                <li><a href="${path(R.services)}#industrial">${t('footer.industrialShort')}</a></li>
              </ul>
            </details>
            <details class="mobile-footer-acc">
              <summary>${t('footer.quickLinks')}</summary>
              <ul>
                <li><a href="${path(R.about)}">${t('nav.about')}</a></li>
                <li><a href="${path(R.portfolio)}">${t('nav.portfolio')}</a></li>
                <li><a href="${path(R.blog)}">${t('nav.blog')}</a></li>
                <li><a href="${path(R.contact)}">${t('footer.contactUs')}</a></li>
              </ul>
            </details>
            <details class="mobile-footer-acc">
              <summary>${t('footer.connectShort')}</summary>
              <ul>
                <li><a href="mailto:${C.contact.email}">${C.contact.email}</a></li>
                <li><a href="mailto:${C.contact.emailAlt}">${C.contact.emailAlt}</a></li>
                ${channels.length
                  ? channels.map(ch => `
                <li><a href="https://wa.me/${ch.whatsapp}?text=${waMsg}" target="_blank" rel="noopener noreferrer">
                  <span class="footer__chip-label">${ch.label}</span>
                  <span dir="ltr">${ch.display}</span>
                </a></li>`).join('')
                  : `<li><a href="tel:${C.contact.phone}" dir="ltr">${C.contact.phoneDisplay || C.contact.phone}</a></li>`}
              </ul>
            </details>
          </div>
          <div class="mobile-footer-bar">
            <p>© ${year} ${C.siteNameEn}</p>
            <nav class="footer__legal">
              <a href="${path(R.privacy)}">${t('footer.privacy')}</a>
              <a href="${path(R.home)}#faq">${t('footer.faq')}</a>
            </nav>
            <div class="footer__domains">
              <a href="https://${C.domains.main}" class="footer__domain-badge">${C.domains.main}</a>
              <a href="https://${C.domains.alt}" class="footer__domain-badge" target="_blank" rel="noopener noreferrer">${C.domains.alt}</a>
            </div>
          </div>
        </div>`;
    }

    let bottomNav = document.getElementById('mobileBottomNav');
    if (!bottomNav) {
      bottomNav = document.createElement('nav');
      bottomNav.id = 'mobileBottomNav';
      bottomNav.className = 'mobile-bottom-nav';
      bottomNav.setAttribute('aria-label', t('common.bottomNav', 'ناوبری پایین موبایل'));
      document.body.appendChild(bottomNav);
    }

    const bottomItems = [
      { page: 'home', route: R.home, label: t('nav.home'), icon: 'home' },
      { page: 'services', route: R.services, label: t('nav.services'), icon: 'list' },
      { page: 'fast', route: R.fast, label: t('nav.site', 'سایت'), icon: 'globe' },
      { page: 'contact', route: R.contact, label: t('nav.contact'), icon: 'phone' }
    ];

    bottomNav.innerHTML = bottomItems.map(item => `
      <a href="${path(item.route)}" class="mobile-bottom-nav__item${isActive(item.page) ? ' active' : ''}">
        <span class="mobile-bottom-nav__icon">${ic(item.icon, { size: 22 })}</span>
        <span class="mobile-bottom-nav__label">${item.label}</span>
      </a>
    `).join('') + `
      <button type="button" class="mobile-bottom-nav__item" id="mobileBottomMenu" aria-label="${t('common.openDrawer', 'باز کردن منو')}">
        <span class="mobile-bottom-nav__icon">${ic('menu', { size: 22 })}</span>
        <span class="mobile-bottom-nav__label">${t('common.menu')}</span>
      </button>`;

    bindLangSwitcher(header);
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

      address: orgAddress(),

      sameAs: [C.contact.linkedin, C.contact.instagram, `https://${C.domains.alt}`],

      contactPoint: buildContactPoints()

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



  window.injectPageSeo = function (pageKey, overrides) {
    const o = overrides || {};
    const titleKey = `pages.${pageKey}.seoTitle`;
    const descKey = `pages.${pageKey}.seoDescription`;
    const kwKey = `pages.${pageKey}.seoKeywords`;
    const title = t(titleKey, null);
    const description = t(descKey, null);
    const keywords = t(kwKey, null);
    return window.injectSeo({
      ...o,
      title: title && title !== titleKey ? title : (o.title || C.seo.defaultTitle),
      description: description && description !== descKey ? description : (o.description || C.seo.defaultDescription),
      keywords: keywords && keywords !== kwKey ? keywords : (o.keywords || C.seo.keywords)
    });
  };



  window.injectContactPageSchema = function () {

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ContactPage',

      name: t('contactPage.schemaName', 'تماس با ما — ') + C.siteName,

      url: C.baseUrl + '/pages/contact.html',

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
    if (!C.blogPosts) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'وبلاگ بیزدوار گروپ',
      url: absUrl(R.blog),
      inLanguage: C.locale,
      publisher: { '@type': 'Organization', name: C.siteNameEn, url: C.baseUrl },
      blogPost: C.blogPosts.map(p => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        url: absUrl(p.slug)
      }))
    };
    injectJsonLd('jsonld-blog', ld);
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



  window.renderGeoStrip = function (containerId, opts) {
    const el = document.getElementById(containerId);
    const g = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getGeo() : C.geo;
    if (!el || !g) return;
    const text = (opts && opts.text) || g.summaryFa || g.summary;
    const hubs = g.hubs || [];
    el.innerHTML = `
      <section class="geo-strip" aria-label="${t('common.geoAria', 'حوزه جغرافیایی خدمات')}">
        <div class="container geo-strip__inner">
          <div class="geo-strip__lead">
            <span class="geo-strip__eyebrow">${ic('globe', { size: 18 })} ${t('common.globalPresence', 'حضور جهانی')}</span>
            <p>${text}</p>
          </div>
          <ul class="geo-strip__hubs">
            ${hubs.map(h => `
              <li class="geo-strip__hub">
                <strong>${h.city}</strong>
                <span class="geo-strip__country">${h.country}</span>
                <span class="geo-strip__role">${h.role}</span>
              </li>`).join('')}
          </ul>
        </div>
      </section>`;
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
      areaServed: data.areaServed || ['IR', 'TR'],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        priceCurrency: 'USD',
        seller: {
          '@type': 'Organization',
          name: C.siteNameEn,
          areaServed: ['IR', 'TR']
        },
        url: data.url ? absUrl(data.url) : absUrl(R.contact)
      }
    };
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
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      provider: { '@type': 'Organization', name: C.siteNameEn, url: C.baseUrl },
      areaServed: data.areaServed || ['IR', 'TR', 'AM', 'AE', 'DE'],
      offers: (data.offers || []).map(o => ({
        '@type': 'Offer',
        name: o.name,
        price: o.price,
        priceCurrency: o.currency || 'USD',
        url: o.url ? absUrl(o.url) : absUrl(R.contact)
      })),
      url: data.url ? absUrl(data.url) : C.baseUrl
    };
    injectJsonLd('jsonld-service-product', ld);
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

    const metrics = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getTrustMetrics() : C.trustMetrics;
    if (!el || !metrics || !metrics.length) return;

    el.innerHTML = `

      <section class="trust-bar" aria-label="${t('common.trustAria', 'شاخص‌های کلیدی بیزدوار')}">

        <div class="container">

          <ul class="trust-bar__grid">

            ${metrics.map(m => `

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
            <span class="section__eyebrow">${t('credibility.eyebrow')}</span>
            <h2 class="section__title" id="cred-heading">${t('credibility.title')}</h2>
            <p class="section__desc">${t('credibility.desc')}</p>
          </div>
          <div class="intel-stats">
            <div class="intel-stat"><strong>${f.projectsCount}</strong><span>${t('credibility.projects')}</span></div>
            <div class="intel-stat"><strong>${f.countriesCount}</strong><span>${t('credibility.countries')}</span></div>
            <div class="intel-stat"><strong>${f.experienceYears}</strong><span>${t('credibility.years')}</span></div>
            <div class="intel-stat"><strong>${I.identity.foundedDisplay}</strong><span>${t('credibility.founded')}</span></div>
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
          <p class="intel-note text-center mt-24">${t('credibility.sources')}: <a href="${f.linkedin}" target="_blank" rel="noopener noreferrer me">${t('credibility.founderLinkedin')}</a> · <a href="${path(R.portfolio)}">${t('credibility.portfolio')}</a> · <a href="${path(R.about)}">${t('credibility.fullAbout')}</a></p>
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

    const products = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getIndustrialProducts() : C.industrialProducts;

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

          <span class="industrial-card__cta">${p.cta || t('common.learnMore', 'بیشتر بدانید')}${linkArrow()}</span>

        </a>`;

    }).join('');

    el.innerHTML = `

      <section class="section section--gray landing-industrial" id="products" aria-labelledby="industrial-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('industrial.eyebrow')}</span>

            <h2 class="section__title" id="industrial-heading">${t('industrial.title')}</h2>

            <p class="section__desc">${t('industrial.desc')}</p>

          </div>

          <div class="industrial-grid">${cards}</div>

          <div class="industrial-cta-bar">

            <div class="industrial-cta-bar__content">

              <span class="industrial-cta-bar__icon" data-bd-icon="wrench" data-bd-size="28" aria-hidden="true"></span>

              <div>

                <strong>${t('industrial.ctaTitle')}</strong>

                <p>${t('industrial.ctaDesc')}</p>

              </div>

            </div>

            <div class="industrial-cta-bar__actions">

              <a href="${path(R.contact)}" class="btn btn--yellow">${t('industrial.ctaBtn')}</a>

              <a href="${path(R.services)}#industrial" class="btn btn--outline">${t('industrial.ctaLink')}</a>

            </div>

          </div>

        </div>

      </section>`;

  };



  window.renderProcessSection = function (containerId) {

    const el = document.getElementById(containerId);

    const steps = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getProcessSteps() : C.processSteps;
    if (!el || !steps || !steps.length) return;

    el.innerHTML = `

      <section class="section section--gray process-section" aria-labelledby="process-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('process.eyebrow')}</span>

            <h2 class="section__title" id="process-heading">${t('process.title')}</h2>

            <p class="section__desc">${t('process.desc')}</p>

          </div>

          <ol class="process-grid">

            ${steps.map(step => `

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


