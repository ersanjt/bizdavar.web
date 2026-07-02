/**
 * Services page — overview, nav, stats
 */
(function () {
  const path = (r) => window.resolvePath(r);
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));
  const rawList = (key, fb) => {
    const v = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
    return Array.isArray(v) ? v : fb;
  };

  const SERVICES = [
    {
      id: 'digital-marketing',
      num: '01',
      title: 'بازاریابی دیجیتال',
      desc: 'استراتژی، کمپین، سئو و CRO برای رشد فروش آنلاین.',
      icon: 'chart-line',
      accent: 'yellow',
      href: '#digital-marketing'
    },
    {
      id: 'web-design',
      num: '02',
      title: 'طراحی و توسعه وب',
      desc: 'سایت شرکتی، فروشگاهی و لندینگ — Fast Web Studio.',
      icon: 'globe',
      accent: 'blue',
      href: '#web-design'
    },
    {
      id: 'smm',
      num: '03',
      title: 'مدیریت SMM',
      desc: 'تولید محتوا، تبلیغات و مدیریت شبکه‌های اجتماعی.',
      icon: 'mobile',
      accent: 'red',
      href: '#smm'
    },
    {
      id: 'industrial',
      num: '04',
      title: 'تامین تجهیزات صنعتی',
      desc: 'VEGA، Prosense، Gamak — مشاوره و لجستیک.',
      icon: 'gear',
      accent: 'green',
      href: '#industrial'
    }
  ];

  function renderStats() {
    const el = document.getElementById('servicesHeroStats');
    if (!el) return;
    const stats = rawList('servicesPage.stats', [
      { value: '۴', label: 'محور خدمات' },
      { value: '۱۰۰+', label: 'پروژه' },
      { value: '۱۱', label: 'کشور فعال' },
      { value: '۱۳+', label: 'سال تجربه' }
    ]);
    el.innerHTML = stats.map(s => `
      <div class="services-stat">
        <strong>${s.value}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  function renderNav() {
    const el = document.getElementById('serviceNav');
    if (!el) return;
    el.innerHTML = `
      <nav class="services-nav" aria-label="${t('servicesPage.navAria', 'فهرست خدمات')}">
        ${getServices().map(s => `
          <a href="${s.href}" class="services-nav__item services-nav__item--${s.accent}">
            <span class="services-nav__num">${s.num}</span>
            ${ic(s.icon, { size: 18 })}
            ${s.title}
          </a>
        `).join('')}
      </nav>`;
  }

  function renderOverview() {
    const el = document.getElementById('servicesOverview');
    if (!el) return;
    el.innerHTML = getServices().map(s => `
      <a href="${s.href}" class="services-overview-card services-overview-card--${s.accent}">
        <span class="services-overview-card__num">${s.num}</span>
        <span class="services-overview-card__icon">${ic(s.icon, { size: 26 })}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class="services-overview-card__cta">${t('servicesPage.viewDetails', 'مشاهده جزئیات')}</span>
      </a>
    `).join('');
  }

  const PROCESS_ICONS = ['phone', 'target', 'bolt', 'chart-line'];

  function renderProcess() {
    const el = document.getElementById('servicesProcess');
    if (!el) return;
    const steps = rawList('servicesPage.process.steps', [
      { title: 'مشاوره', desc: 'شناخت نیاز و اهداف کسب‌وکار' },
      { title: 'طراحی راهکار', desc: 'پیشنهاد فنی و برآورد زمان‌بندی' },
      { title: 'اجرا', desc: 'پیاده‌سازی، تامین یا راه‌اندازی کمپین' },
      { title: 'پشتیبانی', desc: 'گزارش‌دهی، بهینه‌سازی و همراهی مستمر' }
    ]);
    el.innerHTML = steps.map((s, i) => `
      <div class="services-process__step">
        <span class="services-process__icon">${ic(PROCESS_ICONS[i] || 'target', { size: 28 })}</span>
        <span class="services-process__num">${i + 1}</span>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  window.initServicesPage = function () {
    renderStats();
    renderNav();
    renderOverview();
    renderProcess();
  };

  window.renderServicesRelatedLinks = function () {
    const links = rawList('servicesPage.relatedLinks', [
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99', thumb: 'assets/images/content/related-thumb-fast.svg' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: '۳۵ پروژه و برند', thumb: 'assets/images/content/related-thumb-portfolio.svg' },
      { title: 'وبلاگ تخصصی', url: 'blog', desc: 'راهنما و مقالات', thumb: 'assets/images/content/related-thumb-blog.svg' }
    ]);
    if (typeof window.renderRelatedLinks === 'function') {
      window.renderRelatedLinks(links);
    }
  };

  function getServices() {
    const localized = window.BIZDAVAR_I18N?.getServicesPageCards?.();
    if (!Array.isArray(localized)) return SERVICES;
    return SERVICES.map((service, i) => ({ ...service, ...(localized[i] || {}) }));
  }
})();
