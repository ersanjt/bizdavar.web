/**
 * About page — hero stats, sticky section nav
 */
(function () {
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));
  const rawList = (key, fb) => {
    const v = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
    return Array.isArray(v) ? v : fb;
  };

  const DEFAULT_STATS = [
    { value: '+۱۳', label: 'سال تجربه' },
    { value: '+۱۰۰', label: 'پروژه' },
    { value: '۱۱', label: 'کشور' },
    { value: '۳', label: 'مسیر کار' }
  ];

  const DEFAULT_NAV = [
    { href: '#profile', label: 'شناسنامه' },
    { href: '#activities', label: 'تخصص‌ها' },
    { href: '#ecosystem', label: 'اکوسیستم' },
    { href: '#presence', label: 'حضور جهانی' },
    { href: '#highlights', label: 'دستاوردها' },
    { href: '#sources', label: 'منابع' },
    { href: '#trust', label: 'اعتبار' },
    { href: '#faq', label: 'سوالات' }
  ];

  function renderStats() {
    const el = document.getElementById('aboutHeroStats');
    if (!el) return;
    const stats = rawList('aboutPage.stats', DEFAULT_STATS);
    const existing = el.querySelectorAll('.about-stat');
    if (existing.length) {
      existing.forEach((node, i) => {
        if (!stats[i]) return;
        const strong = node.querySelector('strong');
        const span = node.querySelector('span');
        if (strong && stats[i].value) strong.textContent = stats[i].value;
        if (span && stats[i].label) span.textContent = stats[i].label;
      });
      return;
    }
    el.innerHTML = stats.map(s => `
      <div class="about-stat">
        <strong dir="ltr">${s.value}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  function renderNav() {
    const el = document.getElementById('aboutNav');
    if (!el) return;
    const items = rawList('aboutPage.nav', DEFAULT_NAV);
    const nav = el.querySelector('.about-nav');
    if (nav) {
      nav.querySelectorAll('.about-nav__item').forEach((a, i) => {
        if (items[i]?.label) a.textContent = items[i].label;
        if (items[i]?.href) a.setAttribute('href', items[i].href);
      });
      return;
    }
    el.innerHTML = `
      <nav class="about-nav" aria-label="${t('aboutPage.navAria', 'فهرست بخش‌های صفحه')}">
        ${items.map(item => `
          <a href="${item.href}" class="about-nav__item">${item.label}</a>
        `).join('')}
      </nav>`;
  }

  let navSpyReady = false;

  function initNavSpy() {
    if (navSpyReady) return;
    navSpyReady = true;
    const nav = document.querySelector('.about-nav');
    if (!nav) return;
    const links = [...nav.querySelectorAll('.about-nav__item')];
    const sections = links
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    if (!sections.length) return;

    let activeId = '';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function centerNavItem(link) {
      const navBox = nav.getBoundingClientRect();
      const itemBox = link.getBoundingClientRect();
      const pad = 8;
      if (itemBox.left >= navBox.left + pad && itemBox.right <= navBox.right - pad) return;
      const delta = (itemBox.left + itemBox.right) / 2 - (navBox.left + navBox.right) / 2;
      nav.scrollBy({
        left: delta,
        behavior: reduceMotion.matches ? 'auto' : 'smooth'
      });
    }

    const setActive = (id) => {
      if (!id || id === activeId) return;
      activeId = id;
      links.forEach(a => {
        const on = a.getAttribute('href') === `#${id}`;
        a.classList.toggle('is-active', on);
        if (on) centerNavItem(a);
      });
    };

    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (!visible.length) return;
      const mid = window.innerHeight * 0.42;
      visible.sort((a, b) => {
        const aMid = a.boundingClientRect.top + a.boundingClientRect.height / 2;
        const bMid = b.boundingClientRect.top + b.boundingClientRect.height / 2;
        return Math.abs(aMid - mid) - Math.abs(bMid - mid);
      });
      setActive(visible[0].target.id);
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));

    links.forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion.matches ? 'auto' : 'smooth',
          block: 'start'
        });
        history.replaceState(null, '', a.getAttribute('href'));
        setActive(target.id);
      });
    });
  }

  window.initAboutPage = function () {
    renderStats();
    renderNav();
    initNavSpy();
  };
})();
