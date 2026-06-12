/**
 * Portfolio page — filters, stats, enhanced grid
 */
(function () {
  const C = window.BIZDAVAR_CONFIG;
  if (!C) return;

  const path = (p) => window.resolvePath(p);
  const getUrl = (p) => window.getProjectUrl(p);
  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');

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
    if (/فین|پرداخت|مالی|بروکر|هلدینگ|وب۳|انتقال/.test(c)) return 'fintech';
    if (/طراحی|SMM|هاستینگ|رویداد|جواهر|فروشگاه|هنر|مد|چرم|هواپیمایی|درگاه|زیرساخت|برند/.test(c)) return 'digital';
    if (/صنعت|پمپ|پتروشیمی|الکتروموتور|تجهیزات|گردشگری|ویزا|تجارت|پتروشیمی/.test(c)) return 'industrial';
    return 'other';
  }

  function renderStats() {
    const el = document.getElementById('portfolioHeroStats');
    if (!el || !C.portfolio) return;
    const roles = { client: 0, 'case-study': 0, ecosystem: 0 };
    C.portfolio.forEach(p => { if (roles[p.role] !== undefined) roles[p.role]++; });
    const cats = new Set(C.portfolio.map(p => p.category)).size;
    el.innerHTML = [
      { value: String(C.portfolio.length), label: 'پروژه و برند' },
      { value: String(roles['case-study']), label: 'نمونه‌کار' },
      { value: String(roles.client), label: 'مشتری' },
      { value: String(roles.ecosystem), label: 'اکوسیستم' }
    ].map(s => `
      <div class="portfolio-stat">
        <strong>${s.value}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  function renderFilters() {
    const el = document.getElementById('portfolioFilters');
    if (!el) return;
    el.innerHTML = `
      <nav class="portfolio-filters" aria-label="فیلتر نمونه‌کارها">
        ${FILTERS.map((f, i) => `
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

    el.innerHTML = C.portfolio.map(p => {
      const group = getGroup(p.category);
      const role = p.role || 'client';
      const url = getUrl(p);
      const external = !p.internal;
      const roleLabel = ROLE_LABELS[role] || (external ? 'وبسایت' : 'صفحه بیزدوار');
      const logoHtml = p.logo
        ? `<div class="portfolio-card__logo"><img src="${path(p.logo)}" alt="لوگوی ${p.name}" loading="lazy" width="160" height="52"></div>`
        : `<div class="portfolio-card__logo portfolio-card__logo--text"><span>${p.name}</span></div>`;

      return `
        <article class="portfolio-card portfolio-card--pro portfolio-card--${role}" data-group="${group}" data-role="${role}" data-name="${p.name}">
          ${logoHtml}
          <div class="portfolio-card__body">
            <div class="portfolio-card__top">
              <h3>${p.name}</h3>
              <span class="portfolio-card__cat">${p.category}</span>
            </div>
            <p class="portfolio-card__domain" dir="ltr">${p.domain}</p>
            ${p.note ? `<p class="portfolio-card__note">${p.note}</p>` : ''}
            <div class="portfolio-card__footer">
              <span class="portfolio-card__badge portfolio-card__badge--${role}">${roleLabel}</span>
              <a href="${url}" class="portfolio-card__link"
                 ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                ${role === 'case-study' && p.internal ? 'مشاهده صفحه' : external ? 'مشاهده وبسایت' : 'مشاهده صفحه'}${arrow()}
              </a>
            </div>
          </div>
        </article>`;
    }).join('');

    bindFilters();
    updateCount();
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

  function updateCount() {
    const el = document.getElementById('portfolioCount');
    if (!el) return;
    const shown = document.querySelectorAll('.portfolio-card--pro:not(.is-hidden)').length;
    el.textContent = `${shown} مورد نمایش داده می‌شود`;
  }

  window.initPortfolioPage = function () {
    renderStats();
    renderFilters();
    renderGrid();
  };
})();
