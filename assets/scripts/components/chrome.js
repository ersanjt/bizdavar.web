/**
 * Bizdavar — Site chrome (header, footer, nav, breadcrumbs)
 * @requires BD_CTX (context.js)
 */
(function () {
  const ctx = window.BD_CTX;
  if (!ctx) return;
  const {
    C, R, A, path, pagePath, siteLink, t, ic, linkArrow, wa, buildWaUrl, currentPage,
    absUrl, breadcrumbHref, localizeCrumbs, buildContactPoints, orgAddress
  } = ctx;

  const LANG_OPTIONS = [
    { id: 'fa', labelKey: 'common.langFa', fallback: 'فارسی', badge: 'FA' },
    { id: 'tr', labelKey: 'common.langTr', fallback: 'Türkçe', badge: 'TR' },
    { id: 'en', labelKey: 'common.langEn', fallback: 'English', badge: 'EN' }
  ];

  function getLangOptions() {
    return LANG_OPTIONS.map(l => ({
      id: l.id,
      label: t(l.labelKey, l.fallback),
      badge: l.badge
    }));
  }

  function langSwitcherHtml(extraClass) {
    if (document.body?.dataset?.page === 'article') return '';
    const I = window.BIZDAVAR_I18N;
    if (!I) return '';
    const cur = I.locale;
    const langs = getLangOptions();
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

  function langDrawerMenuHtml() {
    if (document.body?.dataset?.page === 'article') return '';
    const I = window.BIZDAVAR_I18N;
    if (!I) return '';
    const cur = I.locale;
    const langs = getLangOptions();
    return `
      <div class="mobile-drawer__lang">
        <p class="mobile-drawer__lang-heading">${t('common.langLabel', 'زبان')}</p>
        <div class="mobile-drawer__lang-list" role="listbox" aria-label="${t('common.langLabel', 'زبان')}">
          ${langs.map(l => `
            <button type="button" class="mobile-drawer__lang-btn${l.id === cur ? ' is-active' : ''}"
              data-lang="${l.id}" role="option"${l.id === cur ? ' aria-selected="true"' : ''}>
              <span class="bd-lang-badge" aria-hidden="true">${l.badge}</span>
              <span>${l.label}</span>
            </button>
          `).join('')}
        </div>
      </div>`;
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

  function getFooterLinkGroups() {
    const brandLinks = (C.industrialProducts || []).map(p => ({
      href: siteLink(p.url),
      label: p.name
    }));
    if (brandLinks.length) {
      brandLinks.push({
        href: `${pagePath(R.services)}#industrial`,
        label: t('footer.industrialShort', 'تجهیزات صنعتی')
      });
    }
    return {
      services: [
        { href: pagePath(R.services), label: t('nav.services') },
        { href: `${pagePath(R.services)}#digital-marketing`, label: t('footer.digitalMarketing') },
        { href: pagePath(R.fast), label: t('footer.webFast') },
        { href: `${pagePath(R.services)}#smm`, label: t('footer.smm') },
        { href: `${pagePath(R.services)}#industrial`, label: t('footer.industrial') }
      ],
      brands: brandLinks.length ? brandLinks : [
        { href: pagePath(R.vega), label: 'VEGA' },
        { href: pagePath(R.prosense), label: 'Prosense' },
        { href: pagePath(R.teltonika), label: 'Teltonika' },
        { href: pagePath(R.gamak), label: 'Gamak' },
        { href: pagePath(R.digiSystem), label: 'Digi System' },
        { href: pagePath(R.teraoka), label: 'Teraoka' }
      ],
      quick: [
        { href: pagePath(R.about), label: t('nav.about') },
        { href: pagePath(R.services), label: t('nav.services') },
        { href: pagePath(R.products), label: t('nav.products') },
        { href: pagePath(R.portfolio), label: t('nav.portfolio') },
        { href: pagePath(R.fast), label: t('nav.webDesign') },
        { href: pagePath(R.blog), label: t('nav.blog') },
        { href: pagePath(R.contact), label: t('footer.contactUs') },
        { href: pagePath(R.privacy), label: t('footer.privacy') },
        { href: `${pagePath(R.home)}#faq`, label: t('footer.faq') }
      ]
    };
  }

  function footerLinksHtml(items) {
    return items.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('');
  }

  function mobileFooterAccHtml(title, items) {
    return `
            <details class="mobile-footer-acc">
              <summary>${title}</summary>
              <ul>${footerLinksHtml(items)}</ul>
            </details>`;
  }

  function getNavItems() {
    return [
      { page: 'home', route: R.home, label: t('nav.home', 'خانه'), icon: 'home' },
      { page: 'about', route: R.about, label: t('nav.about', 'درباره ما'), icon: 'info' },
      { page: 'services', route: R.services, label: t('nav.services', 'خدمات'), icon: 'list' },
      { page: 'products', route: R.products, label: t('nav.products', 'محصولات ما'), icon: 'box', dropdown: 'products' },
      { page: 'portfolio', route: R.portfolio, label: t('nav.portfolio', 'نمونه‌کارها'), icon: 'briefcase' },
      { page: 'fast', route: R.fast, label: t('nav.webDesign', 'طراحی سایت'), icon: 'globe' },
      { page: 'blog', route: R.blog, label: t('nav.blog', 'وبلاگ'), icon: 'article' },
      { page: 'contact', route: R.contact, label: t('nav.contact', 'تماس'), icon: 'phone' }
    ];
  }

  const SUPPLY_PAGES = new Set(['vega', 'prosense', 'teltonika', 'gamak', 'digi-system', 'teraoka']);

  function getProductNavConfig() {
    return C.productNav || { overviewRoute: 'products', groups: [] };
  }

  function getProductPageIds() {
    const cfg = getProductNavConfig();
    const ids = new Set(['products']);
    (cfg.groups || []).forEach(group => {
      (group.items || []).forEach(item => ids.add(item.page));
    });
    return ids;
  }

  function isProductsActive() {
    return getProductPageIds().has(currentPage);
  }

  function productNavLinkHtml(item) {
    const href = pagePath(R[item.route] || item.route);
    const active = currentPage === item.page ? ' is-active' : '';
    const desc = item.descKey ? t(item.descKey, '') : '';
    const badge = item.badgeKey ? `<span class="nav__product-badge">${t(item.badgeKey, '')}</span>` : '';
    return `<a href="${href}" class="nav__product-link${active}">
      <span class="nav__product-name">${item.label}${badge}</span>
      ${desc ? `<span class="nav__product-desc">${desc}</span>` : ''}
    </a>`;
  }

  function renderProductNavDropdown(label) {
    const cfg = getProductNavConfig();
    const overviewHref = pagePath(R[cfg.overviewRoute] || cfg.overviewRoute);
    const active = isProductsActive() ? ' active' : '';
    const groups = (cfg.groups || []).map(group => `
      <div class="nav__product-group">
        <p class="nav__product-group-title">${t(group.labelKey, group.id)}</p>
        ${(group.items || []).map(productNavLinkHtml).join('')}
      </div>
    `).join('');
    return `<details class="nav__dropdown nav__dropdown--products" data-nav-dropdown>
      <summary class="nav__link nav__link--dropdown${active}">${label}</summary>
      <div class="nav__panel nav__panel--products">
        <a href="${overviewHref}" class="nav__product-overview${currentPage === 'products' ? ' is-active' : ''}">${t('nav.productsCatalog', 'همه محصولات')}</a>
        ${groups}
      </div>
    </details>`;
  }

  function renderMobileProductNav(label) {
    const cfg = getProductNavConfig();
    const overviewHref = pagePath(R[cfg.overviewRoute] || cfg.overviewRoute);
    const active = isProductsActive() ? ' active' : '';
    const groups = (cfg.groups || []).map(group => `
      <div class="mobile-drawer__product-group">
        <p class="mobile-drawer__product-heading">${t(group.labelKey, group.id)}</p>
        ${(group.items || []).map(item => {
          const href = pagePath(R[item.route] || item.route);
          const itemActive = currentPage === item.page ? ' active' : '';
          const desc = item.descKey ? t(item.descKey, '') : '';
          return `<a href="${href}" class="mobile-drawer__product-link${itemActive}">
            <span>${item.label}</span>
            ${desc ? `<small>${desc}</small>` : ''}
          </a>`;
        }).join('')}
      </div>
    `).join('');
    return `<details class="mobile-drawer__acc"${isProductsActive() ? ' open' : ''}>
      <summary class="mobile-drawer__link${active}">
        <span class="mobile-drawer__icon">${ic('box', { size: 22 })}</span>
        <span>${label}</span>
      </summary>
      <div class="mobile-drawer__sub">
        <a href="${overviewHref}" class="mobile-drawer__product-link${currentPage === 'products' ? ' active' : ''}">${t('nav.productsCatalog', 'همه محصولات')}</a>
        ${groups}
      </div>
    </details>`;
  }

  function bindNavDropdowns(root) {
    if (!root) return;
    root.querySelectorAll('[data-nav-dropdown]').forEach(dropdown => {
      dropdown.addEventListener('toggle', () => {
        if (!dropdown.open) return;
        root.querySelectorAll('[data-nav-dropdown][open]').forEach(other => {
          if (other !== dropdown) other.open = false;
        });
        root.querySelectorAll('[data-lang-dropdown][open]').forEach(other => {
          other.open = false;
        });
      });
    });
  }



  function isActive(page) {
    if (page === 'blog' && (currentPage === 'blog' || currentPage === 'article')) return ' active';
    if (page === 'services' && SUPPLY_PAGES.has(currentPage)) return ' active';
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

        ${C.services.map(s => `<a href="${pagePath(s.slug)}">${s.title}</a>`).join('')}

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

              const thumb = l.thumb
                ? `<img src="${path(l.thumb)}" alt="" class="related-links__thumb" width="120" height="72" loading="lazy">`
                : '';

              return `

              <a href="${siteLink(l.url)}" class="related-links__card">

                ${thumb}

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
    if (typeof window.closeMobileDrawer === 'function') {
      window.closeMobileDrawer();
    }
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
            ${(C.contact.channels || []).length
              ? `<span class="top-bar__wa-group">${(C.contact.channels || []).map(ch => `
                  <a href="${buildWaUrl(ch.whatsapp)}" class="top-bar__wa" target="_blank" rel="noopener noreferrer"
                     aria-label="${t('common.whatsapp', 'WhatsApp')} — ${ch.label} (${ch.display})">
                    ${ic('whatsapp', { size: 16 })} <span dir="ltr">${ch.display}</span>
                  </a>`).join('')}</span>`
              : (C.contact.phone
                ? `<a href="tel:${C.contact.phone}">${ic('phone', { size: 16 })} ${C.contact.phoneDisplay || C.contact.phone}</a>`
                : `<span>${ic('phone', { size: 16 })} ${C.contact.phoneDisplay || ''}</span>`)}
            <span>${ic('clock', { size: 16 })} ${C.contact.workingHours}</span>
          </div>
          <div class="top-bar__social">
            <a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me" aria-label="${t('footer.instagram', 'Instagram')}">${t('footer.instagram', 'Instagram')}</a>
            <a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me" aria-label="${t('footer.linkedin', 'LinkedIn')}">${t('footer.linkedin', 'LinkedIn')}</a>
          </div>
        </div>`;
    }

    if (header) {
      const navLinks = navItems.map(n =>
        n.dropdown === 'products'
          ? renderProductNavDropdown(n.label)
          : `<a href="${pagePath(n.route)}" class="nav__link${isActive(n.page)}">${n.label}</a>`
      ).join('');

      const drawerLinks = navItems.map(n =>
        n.dropdown === 'products'
          ? renderMobileProductNav(n.label)
          : `<a href="${pagePath(n.route)}" class="mobile-drawer__link${isActive(n.page)}">
          <span class="mobile-drawer__icon">${ic(n.icon, { size: 22 })}</span>
          <span>${n.label}</span>
        </a>`
      ).join('');

      header.innerHTML = `
        <div class="header__desktop">
          <div class="container">
            <a href="${pagePath(R.home)}" class="header__logo" aria-label="${C.siteName} — ${t('common.homeAria', 'صفحه اصلی')}">
              <img src="${path(headerLogo)}" alt="${logoAlt}" width="120" height="50">
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
          <div class="mobile-header__bar">
            <a href="${pagePath(R.home)}" class="mobile-header__logo" aria-label="${C.siteName} — ${t('common.homeAria', 'صفحه اصلی')}">
              <img src="${path(headerLogo)}" alt="${logoAlt}" width="132" height="55" decoding="async" fetchpriority="high">
            </a>
            <div class="mobile-header__actions">
              ${langSwitcherHtml('lang-dropdown--header-mobile')}
              <a href="${wa}" class="mobile-header__icon-btn mobile-header__icon-btn--wa"
                 aria-label="${t('common.whatsapp', 'واتساپ')}"
                 ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                <span class="mobile-header__wa-icon" aria-hidden="true">${ic('whatsapp', { size: 20, variant: 'white' })}</span>
              </a>
              <button type="button" class="mobile-header__menu" id="mobileMenuBtn" aria-label="${t('common.menu', 'منو')}" aria-expanded="false">
                <span class="mobile-header__menu-lines" aria-hidden="true"><span></span><span></span><span></span></span>
              </button>
            </div>
          </div>
        </div>

        <aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer__head">
            <img src="${path(headerLogo)}" alt="${logoAlt}" height="32">
            <button type="button" class="mobile-drawer__close" id="mobileDrawerClose" aria-label="${t('common.closeMenu', 'بستن منو')}">${ic('close', { size: 20 })}</button>
          </div>
          ${langDrawerMenuHtml()}
          <nav class="mobile-drawer__nav" aria-label="${t('common.mobileNav', 'منوی موبایل')}">
            ${drawerLinks}
          </nav>
          <div class="mobile-drawer__contact">
            <a href="mailto:${C.contact.email}" class="mobile-drawer__contact-item">${ic('mail', { size: 16 })} ${C.contact.email}</a>
            ${(C.contact.channels || []).length
              ? (C.contact.channels || []).map(ch => `
            <a href="${buildWaUrl(ch.whatsapp)}" class="mobile-drawer__contact-item mobile-drawer__contact-item--wa" target="_blank" rel="noopener noreferrer">
              ${ic('whatsapp', { size: 16 })} <span>${ch.label}</span> <span dir="ltr">${ch.display}</span>
            </a>`).join('')
              : (C.contact.phone
                ? `<a href="tel:${C.contact.phone}" class="mobile-drawer__contact-item">${ic('phone', { size: 16 })} ${C.contact.phoneDisplay || C.contact.phone}</a>`
                : `<span class="mobile-drawer__contact-item">${ic('phone', { size: 16 })} ${C.contact.phoneDisplay}</span>`)}
            <span class="mobile-drawer__contact-item mobile-drawer__contact-item--muted">${ic('clock', { size: 16 })} ${C.contact.workingHours}</span>
            <div class="mobile-drawer__social">
              <a href="${C.contact.instagram}" target="_blank" rel="noopener noreferrer me" aria-label="${t('footer.instagram', 'Instagram')}">${t('footer.instagram', 'Instagram')}</a>
              <a href="${C.contact.linkedin}" target="_blank" rel="noopener noreferrer me" aria-label="${t('footer.linkedin', 'LinkedIn')}">${t('footer.linkedin', 'LinkedIn')}</a>
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
      const mailChip = `<a href="mailto:${C.contact.email}" class="footer__chip">
        <span class="footer__chip-icon">${ic('mail', { size: 16 })}</span>
        <span class="footer__chip-ltr">${C.contact.email}</span>
      </a>`;
      const channelChips = channels.length
        ? channels.map(ch => `
          <a href="${buildWaUrl(ch.whatsapp)}" class="footer__chip footer__chip--wa" target="_blank" rel="noopener noreferrer">
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

      const footerLinks = getFooterLinkGroups();

      footer.innerHTML = `
        <div class="footer__glow" aria-hidden="true"></div>
        <div class="footer__desktop">
          <div class="container">
            <div class="footer__main">
              <div class="footer__brand-col">
                <a href="${pagePath(R.home)}" class="footer__logo-link">
                  <img src="${path(footerLogo)}" alt="${logoAlt}" class="footer__logo-img" width="120" height="50">
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
                <ul class="footer__links">${footerLinksHtml(footerLinks.services)}</ul>
              </nav>
              <nav class="footer__nav-col" aria-label="${t('footer.brands', 'برندها و تامین‌کنندگان')}">
                <h4 class="footer__title">${t('footer.brands', 'برندها')}</h4>
                <ul class="footer__links">${footerLinksHtml(footerLinks.brands)}</ul>
              </nav>
              <nav class="footer__nav-col" aria-label="${t('footer.quickLinks')}">
                <h4 class="footer__title">${t('footer.quickLinks', 'دسترسی سریع')}</h4>
                <ul class="footer__links">${footerLinksHtml(footerLinks.quick)}</ul>
              </nav>
              <div class="footer__nav-col">
                <h4 class="footer__title">${t('footer.connect', 'ارتباط با ما')}</h4>
                <div class="footer__contact-chips">
                  ${mailChip}
                  ${channelChips}
                </div>
              </div>
            </div>
            <div class="footer__bar">
              <p class="footer__copy">© ${year} ${C.siteNameEn} — ${t('common.rights', 'تمامی حقوق محفوظ است')}</p>
              <nav class="footer__legal" aria-label="${t('footer.legal', 'Legal')}">
                <a href="${pagePath(R.privacy)}">${t('footer.privacy')}</a>
                <a href="${pagePath(R.home)}#faq">${t('footer.faq')}</a>
                <a href="${pagePath(R.contact)}">${t('footer.contactUs')}</a>
              </nav>
            </div>
          </div>
        </div>

        <div class="footer__mobile">
          <div class="mobile-footer-hero">
            <a href="${pagePath(R.home)}" class="footer__logo-link"><img src="${path(footerLogo)}" alt="${logoAlt}" class="footer__logo-img footer__logo-img--sm"></a>
            <p class="mobile-footer-hero__tagline">${t('footer.tagline')}</p>
            <div class="footer__trust">${trustPills}<span class="footer__pill">${t('footer.hq', 'HQ: Istanbul')}</span></div>
            <div class="footer__social footer__social--mobile">
              <a href="${C.contact.instagram}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">IG</a>
              <a href="${C.contact.linkedin}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">in</a>
              <a href="${wa}" class="footer__social-btn footer__social-btn--wa" ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${t('common.whatsapp')}">${ic('whatsapp', { size: 18 })}</a>
            </div>
            ${langSwitcherHtml('lang-dropdown--footer')}
          </div>
          <div class="mobile-footer-cta${channels.length >= 2 ? ' mobile-footer-cta--multi-wa' : ''}">
            <a href="${pagePath(R.contact)}" class="mobile-footer-cta__btn mobile-footer-cta__btn--primary">${ic('send', { size: 18 })} ${t('common.contactForm')}</a>
            ${channels.length >= 2
              ? channels.map(ch => `
            <a href="${buildWaUrl(ch.whatsapp)}" class="mobile-footer-cta__btn mobile-footer-cta__btn--wa"
               target="_blank" rel="noopener noreferrer">${ic('whatsapp', { size: 18 })} ${ch.label}</a>`).join('')
              : `<a href="${wa}" class="mobile-footer-cta__btn mobile-footer-cta__btn--wa"
               ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${ic('whatsapp', { size: 18 })} ${t('common.whatsapp')}</a>`}
          </div>
          <div class="mobile-footer-accordions">
            ${mobileFooterAccHtml(t('footer.services'), footerLinks.services)}
            ${mobileFooterAccHtml(t('footer.brands', 'برندها'), footerLinks.brands)}
            ${mobileFooterAccHtml(t('footer.quickLinks'), footerLinks.quick)}
            <details class="mobile-footer-acc">
              <summary>${t('footer.connectShort', t('footer.connect'))}</summary>
              <ul>
                <li><a href="mailto:${C.contact.email}">${C.contact.email}</a></li>
                ${C.contact.emailAlt ? `<li><a href="mailto:${C.contact.emailAlt}">${C.contact.emailAlt}</a></li>` : ''}
                ${channels.length
                  ? channels.map(ch => `
                <li><a href="${buildWaUrl(ch.whatsapp)}" target="_blank" rel="noopener noreferrer">
                  <span class="footer__chip-label">${ch.label}</span>
                  <span dir="ltr">${ch.display}</span>
                </a></li>`).join('')
                  : `<li><a href="tel:${C.contact.phone}" dir="ltr">${C.contact.phoneDisplay || C.contact.phone}</a></li>`}
              </ul>
            </details>
          </div>
          <div class="mobile-footer-bar">
            <p class="mobile-footer-bar__copy">© ${year} ${C.siteNameEn} — ${t('common.rights', 'All rights reserved')}</p>
            <nav class="footer__legal" aria-label="${t('footer.legal', 'Legal')}">
              <a href="${pagePath(R.privacy)}">${t('footer.privacy')}</a>
              <a href="${pagePath(R.home)}#faq">${t('footer.faq')}</a>
              <a href="${pagePath(R.contact)}">${t('footer.contactUs')}</a>
            </nav>
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
      { page: 'portfolio', route: R.portfolio, label: t('nav.portfolioShort', t('nav.portfolio')), icon: 'briefcase' },
      { page: 'contact', route: R.contact, label: t('nav.contact'), icon: 'phone' }
    ];

    bottomNav.innerHTML = bottomItems.map(item => `
      <a href="${pagePath(item.route)}" class="mobile-bottom-nav__item${isActive(item.page) ? ' active' : ''}">
        <span class="mobile-bottom-nav__icon">${ic(item.icon, { size: 22 })}</span>
        <span class="mobile-bottom-nav__label">${item.label}</span>
      </a>
    `).join('') + `
      <button type="button" class="mobile-bottom-nav__item mobile-bottom-nav__item--menu" id="mobileBottomMenu" aria-label="${t('common.openDrawer', 'باز کردن منو')}" aria-expanded="false">
        <span class="mobile-bottom-nav__icon">${ic('menu', { size: 22 })}</span>
        <span class="mobile-bottom-nav__label">${t('common.menu')}</span>
      </button>`;

    bindLangSwitcher(header);
    bindLangSwitcher(footer);
    bindNavDropdowns(header);
  };
})();
