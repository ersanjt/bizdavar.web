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
    { id: 'en', labelKey: 'common.langEn', fallback: 'English', badge: 'EN' },
    { id: 'ru', labelKey: 'common.langRu', fallback: 'Русский', badge: 'RU' },
    { id: 'ar', labelKey: 'common.langAr', fallback: 'العربية', badge: 'AR' }
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
        href: `${pagePath(R.products)}#supply`,
        label: t('footer.industrialShort', 'تجهیزات صنعتی')
      });
    }
    return {
      services: [
        { href: pagePath(R.services), label: t('nav.services') },
        { href: `${pagePath(R.services)}#digital-marketing`, label: t('footer.digitalMarketing') },
        { href: `${pagePath(R.services)}#web-design`, label: t('footer.webDesign', 'طراحی وب') },
        { href: pagePath(R.fast), label: t('footer.webFast') },
        { href: `${pagePath(R.services)}#software-apps`, label: t('footer.softwareApps', 'اپ و سامانه') },
        { href: `${pagePath(R.services)}#server-ops`, label: t('footer.serverOps', 'مدیریت سرور') },
        { href: `${pagePath(R.services)}#smm`, label: t('footer.smm') },
        { href: pagePath(R.fieldTech || 'pages/field-tech.html'), label: t('footer.fieldTech', 'خدمات فنی') }
      ],
      brands: brandLinks.length ? brandLinks : [
        { href: pagePath(R.vega), label: 'VEGA' },
        { href: pagePath(R.prosense), label: 'Prosense' },
        { href: pagePath(R.teltonika), label: 'Teltonika' },
        { href: pagePath(R.gamak), label: 'Gamak' },
        { href: pagePath(R.digiSystem), label: 'Digi System' },
        { href: pagePath(R.teraoka), label: 'Teraoka' },
        { href: pagePath(R.liquiMoly), label: 'Liqui Moly' }
      ],
      quick: [
        { href: pagePath(R.about), label: t('nav.about') },
        { href: pagePath(R.gallery || 'pages/gallery.html'), label: t('nav.gallery', 'گالری تصاویر') },
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
      { page: 'services', route: R.services, label: t('nav.services', 'خدمات'), icon: 'list', dropdown: 'services' },
      { page: 'products', route: R.products, label: t('nav.products', 'محصولات ما'), icon: 'box', dropdown: 'products' },
      { page: 'portfolio', route: R.portfolio, label: t('nav.portfolio', 'نمونه‌کارها'), icon: 'briefcase' },
      { page: 'fast', route: R.fast, label: t('nav.webDesign', 'طراحی سایت'), icon: 'globe' },
      { page: 'blog', route: R.blog, label: t('nav.blog', 'وبلاگ'), icon: 'article' },
      { page: 'contact', route: R.contact, label: t('nav.contact', 'تماس'), icon: 'phone' }
    ];
  }

  const SUPPLY_PAGES = new Set(['vega', 'prosense', 'teltonika', 'gamak', 'digi-system', 'teraoka', 'liqui-moly']);

  function getProductNavConfig() {
    return C.productNav || { overviewRoute: 'products', tabs: [], footer: [] };
  }

  function walkProductNavItems(visitor) {
    const cfg = getProductNavConfig();
    if (cfg.featured) visitor(cfg.featured);
    (cfg.tabs || []).forEach(tab => {
      (tab.groups || []).forEach(group => {
        (group.items || []).forEach(visitor);
      });
    });
    (cfg.footer || []).forEach(visitor);
  }

  function getProductPageIds() {
    const ids = new Set(['products']);
    walkProductNavItems(item => {
      if (item.page) ids.add(item.page);
    });
    SUPPLY_PAGES.forEach(p => ids.add(p));
    return ids;
  }

  function isProductsActive() {
    return getProductPageIds().has(currentPage);
  }

  function resolveProductTabId(cfg) {
    const tabs = cfg.tabs || [];
    if (!tabs.length) return cfg.defaultTab || 'owned';
    for (const tab of tabs) {
      for (const group of tab.groups || []) {
        for (const item of group.items || []) {
          if (item.page && item.page === currentPage && !item.cat) return tab.id;
        }
      }
    }
    if (SUPPLY_PAGES.has(currentPage)) {
      const brands = tabs.find(t => t.id === 'brands');
      if (brands) return 'brands';
    }
    return cfg.defaultTab || tabs[0].id;
  }

  function productNavHref(item) {
    if (!item) return '#';
    if (item.url) return item.url;
    let href = pagePath(R[item.route] || item.route);
    if (item.cat) href += (href.includes('?') ? '&' : '?') + 'cat=' + encodeURIComponent(item.cat);
    if (item.hash) href += '#' + item.hash;
    return href;
  }

  function productNavLinkAttrs(item, href) {
    const external = !!(item && (item.external || /^https?:\/\//i.test(href || '')));
    return external ? ' target="_blank" rel="noopener noreferrer"' : '';
  }

  function productNavLinkHtml(item) {
    const href = productNavHref(item);
    const active = item.hash
      ? (currentPage === item.page && location.hash === '#' + item.hash)
      : (currentPage === item.page && !item.cat);
    const label = item.labelKey ? t(item.labelKey, item.label || '') : (item.label || '');
    const desc = item.descKey ? t(item.descKey, '') : '';
    const badge = item.badgeKey ? `<span class="nav__product-badge">${t(item.badgeKey, '')}</span>` : '';
    return `<a href="${href}" class="nav__product-link${active ? ' is-active' : ''}"${productNavLinkAttrs(item, href)}>
      <span class="nav__product-name">${label}${badge}</span>
      ${desc ? `<span class="nav__product-desc">${desc}</span>` : ''}
    </a>`;
  }

  function productNavFeaturedHtml(featured) {
    if (!featured) return '';
    const href = productNavHref(featured);
    const label = featured.labelKey ? t(featured.labelKey, featured.label || '') : (featured.label || '');
    const desc = featured.descKey ? t(featured.descKey, '') : '';
    const kicker = featured.kickerKey ? t(featured.kickerKey, '') : t('nav.productsMegaHint', '');
    const img = featured.image
      ? (window.resolveAssetPath ? window.resolveAssetPath(featured.image) : ('/' + featured.image.replace(/^\//, '')))
      : '';
    const active = featured.hash
      ? (currentPage === featured.page && location.hash === '#' + featured.hash)
      : (currentPage === featured.page);
    return `<a href="${href}" class="nav__product-featured${active ? ' is-active' : ''}">
      ${img ? `<span class="nav__product-featured__media"><img src="${img}" alt="${label}" loading="lazy" width="160" height="100"></span>` : ''}
      <span class="nav__product-featured__body">
        <span class="nav__product-featured__kicker">${kicker}</span>
        <span class="nav__product-featured__name">${label}</span>
        ${desc ? `<span class="nav__product-featured__desc">${desc}</span>` : ''}
      </span>
    </a>`;
  }

  function productNavGroupsHtml(groups, dense) {
    const gridClass = dense ? 'nav__product-mega__groups nav__product-mega__groups--dense' : 'nav__product-mega__groups';
    return `<div class="${gridClass}">${(groups || []).map(group => `
      <div class="nav__product-group">
        <p class="nav__product-group-title">${t(group.labelKey, group.id)}</p>
        ${(group.items || []).map(productNavLinkHtml).join('')}
      </div>
    `).join('')}</div>`;
  }

  function productNavTabPanelHtml(tab, isActive) {
    const cta = tab.cta
      ? `<a href="${productNavHref(tab.cta)}" class="nav__product-tab-cta">
          <span class="nav__product-tab-cta__label">${t(tab.cta.labelKey, '')}</span>
          ${tab.cta.descKey ? `<span class="nav__product-tab-cta__desc">${t(tab.cta.descKey, '')}</span>` : ''}
        </a>`
      : '';
    return `<div class="nav__product-panel${isActive ? ' is-active' : ''}" data-product-panel="${tab.id}" role="tabpanel"${isActive ? '' : ' hidden'}>
      ${productNavGroupsHtml(tab.groups, tab.id === 'brands')}
      ${cta}
    </div>`;
  }

  function productNavFooterHtml(footer) {
    if (!footer || !footer.length) return '';
    return `<div class="nav__product-footer">
      ${footer.map((item, i) => {
        const href = productNavHref(item);
        const label = item.labelKey ? t(item.labelKey, item.label || '') : (item.label || '');
        const active = item.page && currentPage === item.page && !item.hash ? ' is-active' : '';
        const primary = i === footer.length - 1 ? ' nav__product-footer__link--primary' : '';
        return `<a href="${href}" class="nav__product-footer__link${primary}${active}">${label}</a>`;
      }).join('')}
    </div>`;
  }

  function getServiceNavConfig() {
    return C.serviceNav || { overviewRoute: 'services', tabs: [], footer: [] };
  }

  function isServicesActive() {
    return currentPage === 'services' || currentPage === 'field-tech';
  }

  function resolveServiceTabId(cfg) {
    const tabs = cfg.tabs || [];
    if (!tabs.length) return cfg.defaultTab || 'digital';
    const hash = (location.hash || '').replace(/^#/, '');
    if (hash) {
      for (const tab of tabs) {
        for (const group of tab.groups || []) {
          for (const item of group.items || []) {
            if (item.hash === hash) return tab.id;
          }
        }
      }
      if (hash === 'field-tech') return 'field';
    }
    return cfg.defaultTab || tabs[0].id;
  }

  function renderServiceNavDropdown(label) {
    const cfg = getServiceNavConfig();
    const overviewHref = pagePath(R[cfg.overviewRoute] || cfg.overviewRoute);
    const active = isServicesActive() ? ' active' : '';
    const activeTab = resolveServiceTabId(cfg);
    const tabs = cfg.tabs || [];
    const tabList = tabs.length
      ? `<div class="nav__product-tabs" role="tablist" aria-label="${t('nav.services', label)}">
          ${tabs.map(tab => {
            const on = tab.id === activeTab;
            return `<button type="button" class="nav__product-tab${on ? ' is-active' : ''}" role="tab" data-product-tab="${tab.id}" aria-selected="${on ? 'true' : 'false'}">${t(tab.labelKey, tab.id)}</button>`;
          }).join('')}
        </div>`
      : '';
    const panels = tabs.map(tab => productNavTabPanelHtml(tab, tab.id === activeTab)).join('');
    return `<details class="nav__dropdown nav__dropdown--services" data-nav-dropdown>
      <summary class="nav__link nav__link--dropdown${active}">
        <span class="nav__link-label">${label}</span>
        <span class="nav__chev" aria-hidden="true"></span>
      </summary>
      <div class="nav__panel nav__panel--services" data-product-mega>
        <div class="nav__product-mega">
          <div class="nav__product-mega__aside">
            ${productNavFeaturedHtml(cfg.featured)}
            <a href="${overviewHref}" class="nav__product-overview${currentPage === 'services' && !location.hash ? ' is-active' : ''}">${t('nav.servicesAll', 'همه خدمات')}</a>
          </div>
          <div class="nav__product-mega__main">
            ${tabList}
            <div class="nav__product-panels">${panels}</div>
          </div>
        </div>
        ${productNavFooterHtml(cfg.footer)}
      </div>
    </details>`;
  }

  function renderMobileServiceNav(label) {
    const cfg = getServiceNavConfig();
    const overviewHref = pagePath(R[cfg.overviewRoute] || cfg.overviewRoute);
    const active = isServicesActive() ? ' active' : '';
    const activeTab = resolveServiceTabId(cfg);
    const tabs = (cfg.tabs || []).map(tab => {
      const groups = (tab.groups || []).map(group => `
        <div class="mobile-drawer__product-group">
          <p class="mobile-drawer__product-heading">${t(group.labelKey, group.id)}</p>
          ${(group.items || []).map(item => {
            const href = productNavHref(item);
            const itemActive = item.hash
              ? (currentPage === item.page && location.hash === '#' + item.hash)
              : (currentPage === item.page);
            const itemLabel = item.labelKey ? t(item.labelKey, item.label || '') : (item.label || '');
            const desc = item.descKey ? t(item.descKey, '') : '';
            return `<a href="${href}" class="mobile-drawer__product-link${itemActive ? ' active' : ''}">
              <span>${itemLabel}</span>
              ${desc ? `<small>${desc}</small>` : ''}
            </a>`;
          }).join('')}
        </div>
      `).join('');
      const cta = tab.cta
        ? `<a href="${productNavHref(tab.cta)}" class="mobile-drawer__product-link">
            <span>${t(tab.cta.labelKey, '')}</span>
            ${tab.cta.descKey ? `<small>${t(tab.cta.descKey, '')}</small>` : ''}
          </a>`
        : '';
      return `<details class="mobile-drawer__product-tab"${tab.id === activeTab ? ' open' : ''}>
        <summary>${t(tab.labelKey, tab.id)}</summary>
        <div class="mobile-drawer__product-tab-body">
          ${groups}
          ${cta}
        </div>
      </details>`;
    }).join('');
    const footer = (cfg.footer || []).map(item => {
      const href = productNavHref(item);
      const itemLabel = item.labelKey ? t(item.labelKey, item.label || '') : (item.label || '');
      return `<a href="${href}" class="mobile-drawer__product-link">${itemLabel}</a>`;
    }).join('');
    return `<details class="mobile-drawer__acc"${isServicesActive() ? ' open' : ''}>
      <summary class="mobile-drawer__link${active}">
        <span class="mobile-drawer__icon">${ic('list', { size: 22 })}</span>
        <span>${label}</span>
      </summary>
      <div class="mobile-drawer__sub">
        <a href="${overviewHref}" class="mobile-drawer__product-link${currentPage === 'services' && !location.hash ? ' active' : ''}">${t('nav.servicesAll', 'همه خدمات')}</a>
        ${tabs}
        ${footer ? `<div class="mobile-drawer__product-footer">${footer}</div>` : ''}
      </div>
    </details>`;
  }

  function renderProductNavDropdown(label) {
    const cfg = getProductNavConfig();
    const overviewHref = pagePath(R[cfg.overviewRoute] || cfg.overviewRoute);
    const active = isProductsActive() ? ' active' : '';
    const activeTab = resolveProductTabId(cfg);
    const tabs = cfg.tabs || [];
    const tabList = tabs.length
      ? `<div class="nav__product-tabs" role="tablist" aria-label="${t('nav.products', label)}">
          ${tabs.map(tab => {
            const on = tab.id === activeTab;
            return `<button type="button" class="nav__product-tab${on ? ' is-active' : ''}" role="tab" data-product-tab="${tab.id}" aria-selected="${on ? 'true' : 'false'}">${t(tab.labelKey, tab.id)}</button>`;
          }).join('')}
        </div>`
      : '';
    const panels = tabs.map(tab => productNavTabPanelHtml(tab, tab.id === activeTab)).join('');
    return `<details class="nav__dropdown nav__dropdown--products" data-nav-dropdown>
      <summary class="nav__link nav__link--dropdown${active}">
        <span class="nav__link-label">${label}</span>
        <span class="nav__chev" aria-hidden="true"></span>
      </summary>
      <div class="nav__panel nav__panel--products" data-product-mega>
        <div class="nav__product-mega">
          <div class="nav__product-mega__aside">
            ${productNavFeaturedHtml(cfg.featured)}
            <a href="${overviewHref}" class="nav__product-overview${currentPage === 'products' ? ' is-active' : ''}">${t('nav.productsCatalog', 'همه محصولات')}</a>
          </div>
          <div class="nav__product-mega__main">
            ${tabList}
            <div class="nav__product-panels">${panels}</div>
          </div>
        </div>
        ${productNavFooterHtml(cfg.footer)}
      </div>
    </details>`;
  }

  function renderMobileProductNav(label) {
    const cfg = getProductNavConfig();
    const overviewHref = pagePath(R[cfg.overviewRoute] || cfg.overviewRoute);
    const active = isProductsActive() ? ' active' : '';
    const activeTab = resolveProductTabId(cfg);
    const tabs = (cfg.tabs || []).map(tab => {
      const groups = (tab.groups || []).map(group => `
        <div class="mobile-drawer__product-group">
          <p class="mobile-drawer__product-heading">${t(group.labelKey, group.id)}</p>
          ${(group.items || []).map(item => {
            const href = productNavHref(item);
            const itemActive = currentPage === item.page && !item.cat ? ' active' : '';
            const itemLabel = item.labelKey ? t(item.labelKey, item.label || '') : (item.label || '');
            const desc = item.descKey ? t(item.descKey, '') : '';
            return `<a href="${href}" class="mobile-drawer__product-link${itemActive}"${productNavLinkAttrs(item, href)}>
              <span>${itemLabel}</span>
              ${desc ? `<small>${desc}</small>` : ''}
            </a>`;
          }).join('')}
        </div>
      `).join('');
      const cta = tab.cta
        ? `<a href="${productNavHref(tab.cta)}" class="mobile-drawer__product-link">
            <span>${t(tab.cta.labelKey, '')}</span>
            ${tab.cta.descKey ? `<small>${t(tab.cta.descKey, '')}</small>` : ''}
          </a>`
        : '';
      return `<details class="mobile-drawer__product-tab"${tab.id === activeTab ? ' open' : ''}>
        <summary>${t(tab.labelKey, tab.id)}</summary>
        <div class="mobile-drawer__product-tab-body">
          ${groups}
          ${cta}
        </div>
      </details>`;
    }).join('');
    const footer = (cfg.footer || []).map(item => {
      const href = productNavHref(item);
      const itemLabel = item.labelKey ? t(item.labelKey, item.label || '') : (item.label || '');
      return `<a href="${href}" class="mobile-drawer__product-link">${itemLabel}</a>`;
    }).join('');
    return `<details class="mobile-drawer__acc"${isProductsActive() ? ' open' : ''}>
      <summary class="mobile-drawer__link${active}">
        <span class="mobile-drawer__icon">${ic('box', { size: 22 })}</span>
        <span>${label}</span>
      </summary>
      <div class="mobile-drawer__sub">
        <a href="${overviewHref}" class="mobile-drawer__product-link${currentPage === 'products' ? ' active' : ''}">${t('nav.productsCatalog', 'همه محصولات')}</a>
        ${tabs}
        ${footer ? `<div class="mobile-drawer__product-footer">${footer}</div>` : ''}
      </div>
    </details>`;
  }

  function bindProductMegaTabs(root) {
    if (!root) return;
    root.querySelectorAll('[data-product-mega]').forEach(mega => {
      const tabs = mega.querySelectorAll('[data-product-tab]');
      const panels = mega.querySelectorAll('[data-product-panel]');
      tabs.forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          const id = btn.getAttribute('data-product-tab');
          tabs.forEach(tab => {
            const on = tab === btn;
            tab.classList.toggle('is-active', on);
            tab.setAttribute('aria-selected', on ? 'true' : 'false');
          });
          panels.forEach(panel => {
            const on = panel.getAttribute('data-product-panel') === id;
            panel.hidden = !on;
            panel.classList.toggle('is-active', on);
          });
        });
      });
    });
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
    bindProductMegaTabs(root);
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
                ? `<img src="${path(l.thumb)}" alt="${title}" class="related-links__thumb" width="240" height="144" loading="lazy" decoding="async">`
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
    if (typeof window.ensureBizdavarPageShell === 'function') {
      window.ensureBizdavarPageShell();
    }
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
            ${(window.BD_CTX?.getWhatsappChannels?.() || C.contact.channels || []).length
              ? `<span class="top-bar__wa-group">${(window.BD_CTX?.getWhatsappChannels?.() || C.contact.channels || []).map(ch => `
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
            <a href="${C.contact.instagram}" class="top-bar__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="${t('footer.instagram', 'Instagram')}">${ic('instagram', { size: 15 })}</a>
            <a href="${C.contact.linkedin}" class="top-bar__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="${t('footer.linkedin', 'LinkedIn')}">${ic('linkedin', { size: 15 })}</a>
          </div>
        </div>`;
    }

    if (header) {
      const navLinks = navItems.map(n => {
        if (n.dropdown === 'products') return renderProductNavDropdown(n.label);
        if (n.dropdown === 'services') return renderServiceNavDropdown(n.label);
        return `<a href="${pagePath(n.route)}" class="nav__link${isActive(n.page)}">${n.label}</a>`;
      }).join('');

      const drawerLinks = navItems.map(n => {
        if (n.dropdown === 'products') return renderMobileProductNav(n.label);
        if (n.dropdown === 'services') return renderMobileServiceNav(n.label);
        return `<a href="${pagePath(n.route)}" class="mobile-drawer__link${isActive(n.page)}">
          <span class="mobile-drawer__icon">${ic(n.icon, { size: 22 })}</span>
          <span>${n.label}</span>
        </a>`;
      }).join('');

      header.innerHTML = `
        <div class="header__desktop">
          <div class="container header__desktop-inner">
            <a href="${pagePath(R.home)}" class="header__logo" aria-label="${C.siteName} — ${t('common.homeAria', 'صفحه اصلی')}">
              <img src="${path(headerLogo)}" alt="${logoAlt}" width="120" height="50">
            </a>
            <nav class="nav nav--desktop nav--primary" id="nav" aria-label="${t('common.mainNav', 'منوی اصلی')}">
              ${navLinks}
            </nav>
            <div class="header__actions">
              ${langSwitcherHtml()}
              <a href="${wa}" class="btn btn--primary nav__cta"
                 ${C.contact.whatsapp ? 'target="_blank" rel="noopener noreferrer"' : ''}>${t('common.freeConsult', 'مشاوره رایگان')}</a>
            </div>
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
            ${(window.BD_CTX?.getWhatsappChannels?.() || C.contact.channels || []).length
              ? (window.BD_CTX?.getWhatsappChannels?.() || C.contact.channels || []).map(ch => `
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
      const channels = window.BD_CTX?.getWhatsappChannels?.() || C.contact.channels || [];
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
                  <a href="${C.contact.instagram}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">${ic('instagram', { size: 18 })}</a>
                  <a href="${C.contact.linkedin}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">${ic('linkedin', { size: 18 })}</a>
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
              <a href="${C.contact.instagram}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">${ic('instagram', { size: 18 })}</a>
              <a href="${C.contact.linkedin}" class="footer__social-btn" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">${ic('linkedin', { size: 18 })}</a>
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
    renderOfferMap();
  };

  function renderOfferMap() {
    let host = document.getElementById('offerMap');
    if (!host) {
      if (currentPage === 'home' || currentPage === 'about' || currentPage === 'services') return;
      host = document.createElement('div');
      host.id = 'offerMap';
      const crumbs = document.getElementById('breadcrumbs');
      const main = document.getElementById('main-content');
      if (crumbs && crumbs.parentNode) crumbs.parentNode.insertBefore(host, crumbs.nextSibling);
      else if (main && main.parentNode) main.parentNode.insertBefore(host, main);
      else return;
    }
    const servicesHref = pagePath(R.services);
    const productsHref = pagePath(R.products);
    const supplyHref = (productsHref.indexOf('#') === -1 ? productsHref : productsHref.split('#')[0]) + '#supply';
    const inHero = !!host.closest('.hero');
    host.className = 'offer-map offer-map--paths' + (inHero || currentPage === 'home' ? ' offer-map--hero' : '') + (host.classList.contains('offer-map--about') || !!host.closest('.about-intro') ? ' offer-map--about' : '');
    host.setAttribute('role', 'navigation');
    host.setAttribute('aria-label', t('common.offerMap.aria', 'سه مسیر بیزدوار'));
    const cards = `
        <p class="offer-map__lead">${t('common.offerMap.lead', 'یک مسیر را انتخاب کنید')}</p>
        <div class="offer-map__grid">
          <a href="${servicesHref}" class="offer-map__card${currentPage === 'services' ? ' is-active' : ''}">
            <span class="offer-map__num">${t('common.offerMap.servicesNum', '۰۱')}</span>
            <p class="offer-map__title">${t('common.offerMap.servicesTitle', 'خدمات')}</p>
            <p class="offer-map__desc">${t('common.offerMap.servicesDesc', 'سایت ۵روزه، بازاریابی، SMM، اپ، سرور و خدمات فنی')}</p>
            <span class="offer-map__go">${t('common.offerMap.servicesGo', 'ورود به خدمات')}</span>
          </a>
          <a href="${productsHref}" class="offer-map__card${currentPage === 'products' ? ' is-active' : ''}">
            <span class="offer-map__num">${t('common.offerMap.productsNum', '۰۲')}</span>
            <p class="offer-map__title">${t('common.offerMap.productsTitle', 'محصولات')}</p>
            <p class="offer-map__desc">${t('common.offerMap.productsDesc', 'BizPet، BizTab و FXGuard — ساخت تیم بیزدوار')}</p>
            <span class="offer-map__go">${t('common.offerMap.productsGo', 'ورود به محصولات')}</span>
          </a>
          <a href="${supplyHref}" class="offer-map__card">
            <span class="offer-map__num">${t('common.offerMap.supplyNum', '۰۳')}</span>
            <p class="offer-map__title">${t('common.offerMap.supplyTitle', 'تامین صنعتی')}</p>
            <p class="offer-map__desc">${t('common.offerMap.supplyDesc', 'VEGA، Prosense، Gamak و Liqui Moly — استعلام قیمت')}</p>
            <span class="offer-map__go">${t('common.offerMap.supplyGo', 'ورود به تامین')}</span>
          </a>
        </div>`;
    const alreadyInContainer = inHero || !!host.closest('.container');
    host.innerHTML = alreadyInContainer ? cards : `<div class="container">${cards}</div>`;
  }
})();
