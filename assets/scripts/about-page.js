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
    { value: '۱۳+', label: 'سال تجربه' },
    { value: '۱۰۰+', label: 'پروژه' },
    { value: '۱۱', label: 'کشور' },
    { value: '۴', label: 'محور خدمات' }
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
    el.innerHTML = stats.map(s => `
      <div class="about-stat">
        <strong>${s.value}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  function renderNav() {
    const el = document.getElementById('aboutNav');
    if (!el) return;
    const items = rawList('aboutPage.nav', DEFAULT_NAV);
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

    const setActive = (id) => {
      links.forEach(a => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));

    links.forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
