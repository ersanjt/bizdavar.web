/**
 * Portfolio page — filters, stats, enhanced grid
 */
(function () {
  const C = window.BIZDAVAR_CONFIG;
  if (!C) return;

  const path = (p) => window.resolvePath(p);
  const getUrl = (p) => window.getProjectUrl(p);
  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));
  const rawOr = (key, fb) => {
    const v = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
    return (v !== undefined && v !== null) ? v : fb;
  };

  const ROLE_FILTERS = ['case-study', 'client', 'ecosystem'];
  const ROLE_LABELS = {
    ecosystem: 'اکوسیستم',
    'case-study': 'نمونه‌کار',
    client: 'مشتری'
  };

  const FILTERS = [
    { id: 'all', label: 'همه' },
    { id: 'case-study', label: 'نمونه‌کارها' },
    { id: 'client', label: 'مشتریان' },
    { id: 'ecosystem', label: 'اکوسیستم' },
    { id: 'fintech', label: 'فین‌تک' },
    { id: 'digital', label: 'دیجیتال' },
    { id: 'industrial', label: 'صنعتی' },
    { id: 'other', label: 'سایر' }
  ];

  function getGroup(category) {
    const c = category || '';
    if (/fintech|payment|broker|finance|holding|فین|پرداخت|مالی|بروکر|هلدینگ|web3|وب۳|انتقال/i.test(c)) return 'fintech';
    if (/digital|web|design|smm|hosting|event|jewel|store|fashion|aviation|brand|app|mobile|طراحی|هاستینگ|رویداد|جواهر|فروشگاه|هنر|مد|چرم|هواپیمایی|برند|اپ|موبایل/i.test(c)) return 'digital';
    if (/industrial|pump|petro|motor|equipment|tourism|visa|trade|IoT|دماسنج|سلامت|محصول|صنعت|پمپ|پتروشیمی|الکتروموتور|تجهیزات|گردشگری|ویزا|تجارت/i.test(c)) return 'industrial';
    if (/فین|پرداخت|مالی|بروکر|هلدینگ|وب۳|انتقال/.test(c)) return 'fintech';
    if (/طراحی|SMM|هاستینگ|رویداد|جواهر|فروشگاه|هنر|مد|چرم|هواپیمایی|درگاه|زیرساخت|برند/.test(c)) return 'digital';
    if (/صنعت|پمپ|پتروشیمی|الکتروموتور|تجهیزات|گردشگری|ویزا|تجارت|پتروشیمی/.test(c)) return 'industrial';
    return 'other';
  }

  function getPortfolioList() {
    const list = window.BIZDAVAR_I18N?.getPortfolioItems
      ? window.BIZDAVAR_I18N.getPortfolioItems()
      : C.portfolio;
    return (list || []).filter(p => window.isPortfolioPublic ? window.isPortfolioPublic(p) : p.hidden !== true);
  }

  function isArchived(p) {
    return p.archived === true;
  }

  function renderStats() {
    const el = document.getElementById('portfolioHeroStats');
    if (!el || !C.portfolio) return;
    const portfolio = getPortfolioList().filter(p => !isArchived(p));
    const roles = { client: 0, 'case-study': 0, ecosystem: 0 };
    portfolio.forEach(p => { if (roles[p.role] !== undefined) roles[p.role]++; });
    const labels = rawOr('portfolioPage.statsLabels', ['پروژه و برند', 'نمونه‌کار', 'مشتری', 'اکوسیستم']);
    const stats = [
      { value: String(portfolio.length), label: labels[0] },
      { value: String(roles['case-study']), label: labels[1] },
      { value: String(roles.client), label: labels[2] },
      { value: String(roles.ecosystem), label: labels[3] }
    ].filter((s, i) => i === 0 || Number(s.value) > 0);
    el.innerHTML = stats.map(s => `
      <div class="portfolio-stat">
        <strong>${s.value}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
    el.style.setProperty('--stat-cols', String(Math.max(stats.length, 2)));
  }

  function renderFilters() {
    const el = document.getElementById('portfolioFilters');
    if (!el) return;
    const filters = rawOr('portfolioPage.filters', FILTERS);
    el.innerHTML = `
      <nav class="portfolio-filters" aria-label="${t('portfolioPage.filterAria', 'فیلتر نمونه‌کارها')}">
        ${filters.map((f, i) => `
          <button type="button" class="portfolio-filters__btn${i === 0 ? ' active' : ''}" data-filter="${f.id}">
            ${f.label}
          </button>
        `).join('')}
      </nav>
      <p class="portfolio-filters__count" id="portfolioCount" aria-live="polite"></p>`;
  }

  function cardMatchesFilter(card, filter) {
    if (filter === 'all') return true;
    if (ROLE_FILTERS.includes(filter)) return card.dataset.role === filter;
    return card.dataset.group === filter;
  }

  function renderGrid() {
    const el = document.getElementById('portfolioGrid');
    if (!el || !C.portfolio) return;

    const portfolio = getPortfolioList().filter(p => !isArchived(p));
    const roleLabels = rawOr('portfolioPage.roleLabels', ROLE_LABELS);

    el.innerHTML = portfolio.map((p, i) => {
      const group = getGroup(p.category);
      const role = p.role || 'client';
      const url = getUrl(p);
      const external = !p.internal;
      const roleLabel = roleLabels[role] || (external ? roleLabels.website || 'وبسایت' : roleLabels.page || 'صفحه بیزدوار');
      const viewLabel = role === 'case-study' && p.internal
        ? t('common.viewPage', 'مشاهده صفحه')
        : external ? t('common.viewSite', 'مشاهده وبسایت') : t('common.viewPage', 'مشاهده صفحه');
      const extAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      const logoClass = p.appStoreUrl ? ' portfolio-card__logo--app' : (p.logo ? '' : ' portfolio-card__logo--text');
      const logoInner = p.logo
        ? `<img src="${path(p.logo)}" alt="${p.name} logo" loading="lazy" width="160" height="52">`
        : `<span>${p.name}</span>`;

      return `
        <article class="portfolio-card portfolio-card--pro portfolio-card--${role}" data-group="${group}" data-role="${role}" data-name="${p.name}" style="--reveal-delay:${Math.min(i, 11) * 35}ms">
          <a class="portfolio-card__hit" href="${url}"${extAttrs} aria-label="${p.name}"></a>
          <div class="portfolio-card__media">
            <div class="portfolio-card__logo${logoClass}">${logoInner}</div>
            <span class="portfolio-card__badge portfolio-card__badge--${role}">${roleLabel}</span>
          </div>
          <div class="portfolio-card__body">
            <p class="portfolio-card__cat">${p.category}</p>
            <h3>${p.name}</h3>
            <p class="portfolio-card__domain" dir="ltr">${p.domain}</p>
            ${p.note ? `<p class="portfolio-card__note">${p.note}</p>` : ''}
            <div class="portfolio-card__footer">
              <span class="portfolio-card__link">${viewLabel}${arrow()}</span>
              ${p.appStoreUrl ? `
              <a href="${p.appStoreUrl}" class="portfolio-card__link portfolio-card__link--app"
                 target="_blank" rel="noopener noreferrer">
                ${t('common.viewAppStore', 'App Store')}${arrow()}
              </a>` : ''}
            </div>
          </div>
        </article>`;
    }).join('');

    bindFilters();
    pruneEmptyFilters();
    updateCount();
  }

  function renderArchived() {
    const el = document.getElementById('portfolioArchived');
    if (!el) return;
    const items = getPortfolioList().filter(isArchived);
    if (!items.length) {
      el.innerHTML = '';
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <div class="container">
        <div class="portfolio-archived">
          <div class="portfolio-archived__head">
            <span class="section__eyebrow">${t('portfolioPage.archived.eyebrow', 'پروژه‌های گذشته')}</span>
            <h2 class="section__title">${t('portfolioPage.archived.title', 'همکاری‌های قبلی و ناتمام')}</h2>
            <p class="section__desc">${t('portfolioPage.archived.desc', 'پروژه‌هایی که دیگر لینک زنده ندارند یا ناتمام مانده‌اند — فقط به‌صورت خلاصه ذکر می‌شوند.')}</p>
          </div>
          <ul class="portfolio-archived__list">
            ${items.map(p => `
              <li class="portfolio-archived__item">
                <strong>${p.name}</strong>
                <span class="portfolio-archived__cat">${p.category}</span>
                ${p.note ? `<span class="portfolio-archived__note">${p.note}</span>` : ''}
              </li>`).join('')}
          </ul>
        </div>
      </div>`;
  }

  function bindFilters() {
    const buttons = document.querySelectorAll('.portfolio-filters__btn');
    const cards = document.querySelectorAll('.portfolio-card--pro');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cards.forEach(card => {
          card.classList.toggle('is-hidden', !cardMatchesFilter(card, filter));
        });
        updateCount();
      });
    });
  }

  function pruneEmptyFilters() {
    const cards = [...document.querySelectorAll('.portfolio-card--pro')];
    document.querySelectorAll('.portfolio-filters__btn').forEach(btn => {
      const filter = btn.dataset.filter;
      if (filter === 'all') return;
      btn.hidden = !cards.some(card => cardMatchesFilter(card, filter));
    });
  }

  function updateCount() {
    const el = document.getElementById('portfolioCount');
    const empty = document.getElementById('portfolioEmpty');
    const shown = document.querySelectorAll('.portfolio-card--pro:not(.is-hidden)').length;
    if (el) {
      el.textContent = t('portfolioPage.countText', '{count} مورد نمایش داده می‌شود').replace('{count}', shown);
    }
    if (empty) {
      empty.hidden = shown > 0;
      if (!shown) empty.textContent = t('portfolioPage.emptyFilter', 'موردی در این فیلتر نیست.');
    }
  }

  window.initPortfolioPage = function () {
    renderStats();
    renderFilters();
    renderGrid();
    renderArchived();
  };

  window.renderPortfolioRelatedLinks = function () {
    const links = rawOr('portfolioPage.relatedLinks', [
      { title: 'خدمات ما', url: 'services', desc: 'دیجیتال و صنعتی' },
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت ۵ روزه' },
      { title: 'تماس', url: 'contact', desc: 'شروع پروژه جدید' }
    ]);
    if (typeof window.renderRelatedLinks === 'function') {
      window.renderRelatedLinks(links);
    }
  };
})();
