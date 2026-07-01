/**
 * Bizdavar — Site chrome (header, footer, nav, breadcrumbs)
 * @requires BD_CTX (context.js)
 */
(function () {
  const ctx = window.BD_CTX;
  if (!ctx) return;
  const {
    C, R, A, path, siteLink, t, ic, linkArrow, wa, currentPage,
    absUrl, breadcrumbHref, localizeCrumbs, buildContactPoints, orgAddress
  } = ctx;

  function langSwitcherHtml(extraClass) {
    if (document.body?.dataset?.page === 'article') return '';
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

  window.renderServiceNav = function () {

    const el = document.getElementById('serviceNav');

    if (!el || !C.services) return;

    el.innerHTML = `

      <nav class="service-nav" aria-label="${t('common.servicesNav', 'فهرست خدمات')}">

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

            ${links.map(l => {

              const title = l.titleKey ? t(l.titleKey, l.title) : l.title;

              const desc = l.descKey ? t(l.descKey, l.desc) : l.desc;

              return `

              <a href="${siteLink(l.url)}" class="related-links__card">

                <span class="related-links__label">${l.label || t('common.view', 'مشاهده')}</span>

                <strong>${title}</strong>

                ${desc ? `<p>${desc}</p>` : ''}

              </a>

            `;

            }).join('')}

          </div>

        </div>

      </section>`;

  };

  window.renderSiteChrome = function () {
    const navItems = getNavItems();
    const logoAlt = A.logoAlt || C.siteName;
    const headerLogo = A.logo;
    const footerLogo = A.logoOnDark || A.logo;
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
              <img src="${path(headerLogo)}" alt="${logoAlt}" width="140" height="40">
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
            <img src="${path(headerLogo)}" alt="${logoAlt}" width="110" height="32">
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
            <img src="${path(headerLogo)}" alt="${logoAlt}" height="32">
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
                  <img src="${path(footerLogo)}" alt="${logoAlt}" class="footer__logo-img" width="140" height="40">
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
            <a href="${path(R.home)}"><img src="${path(footerLogo)}" alt="${logoAlt}" class="footer__logo-img footer__logo-img--sm"></a>
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
      { page: 'portfolio', route: R.portfolio, label: t('nav.portfolio'), icon: 'briefcase' },
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
})();
