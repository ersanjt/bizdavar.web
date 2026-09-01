/**
 * Services page — overview, nav, stats, field-tech lead + FAQ
 */
(function () {
  const path = (r) => window.resolvePath(r);
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));
  const raw = (key) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined);
  const rawList = (key, fb) => {
    const v = raw(key);
    return Array.isArray(v) ? v : fb;
  };
  const C = () => window.BIZDAVAR_CONFIG || {};

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
      title: 'وب و وب‌اپلیکیشن',
      desc: 'سایت، فروشگاه و وب‌اپ اختصاصی.',
      icon: 'globe',
      accent: 'blue',
      href: '#web-design'
    },
    {
      id: 'software-apps',
      num: '03',
      title: 'اپ و سامانه',
      desc: 'اندروید، iOS و سامانه‌های سازمانی.',
      icon: 'mobile',
      accent: 'navy',
      href: '#software-apps'
    },
    {
      id: 'server-ops',
      num: '04',
      title: 'مدیریت سرور',
      desc: 'راه‌اندازی، امنیت، بکاپ، مانیتورینگ و مهاجرت.',
      icon: 'monitor',
      accent: 'slate',
      href: '#server-ops'
    },
    {
      id: 'smm',
      num: '05',
      title: 'مدیریت SMM',
      desc: 'محتوا، گرافیک، ریلز، تبلیغات و گزارش رشد.',
      icon: 'palette',
      accent: 'red',
      href: '#smm'
    },
    {
      id: 'field-tech',
      num: '06',
      title: 'خدمات فنی',
      desc: 'دوربین مدار بسته، سیم‌کشی و نورمخفی.',
      icon: 'wrench',
      accent: 'green',
      href: path('pages/field-tech')
    }
  ];

  function fieldTechCfg() {
    return C().fieldTech || {};
  }

  function fieldWaUrl() {
    const ft = fieldTechCfg();
    const num = ft.whatsapp || '989364115151';
    const msg = ft.whatsappMessage || t('servicesPage.fieldTech.waDefault', 'سلام، برای خدمات فنی از bizdavar.com پیام می‌دهم.');
    if (window.BD_CTX?.buildWaUrl) return window.BD_CTX.buildWaUrl(num, msg);
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  }

  function redirectLegacyIndustrialHash() {
    if (location.hash !== '#industrial') return;
    location.replace(path('pages/products') + '#supply');
  }

  function renderStats() {
    const el = document.getElementById('servicesHeroStats');
    if (!el) return;
    const stats = rawList('servicesPage.stats', [
      { value: '۶', label: 'محور خدمات' },
      { value: '۱۰۰+', label: 'پروژه' },
      { value: '۲', label: 'شهر فنی' },
      { value: '۱۲+', label: 'سال تجربه' }
    ]);
    el.innerHTML = stats.map(s => `
      <div class="services-stat">
        <strong>${s.value}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  function getServices() {
    const localized = window.BIZDAVAR_I18N?.getServicesPageCards?.();
    if (!Array.isArray(localized)) return SERVICES;
    return SERVICES.map((service, i) => ({ ...service, ...(localized[i] || {}) }));
  }

  function renderNav() {
    const el = document.getElementById('serviceNav');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <nav class="services-nav" aria-label="${t('servicesPage.navAria', 'فهرست خدمات')}">
          <a href="#intl-markets" class="services-nav__item services-nav__item--blue">
            <span class="services-nav__num">$</span>
            ${ic('globe', { size: 18 })}
            ${t('servicesPage.intl.nav', 'اروپا و آمریکا')}
          </a>
          ${getServices().map(s => `
            <a href="${s.href}" class="services-nav__item services-nav__item--${s.accent}">
              <span class="services-nav__num">${s.num}</span>
              ${ic(s.icon, { size: 18 })}
              ${s.title}
            </a>
          `).join('')}
        </nav>
      </div>`;
  }

  function renderPaths() {
    const el = document.getElementById('servicesPaths');
    if (!el) return;
    const digital = {
      eyebrow: t('servicesPage.paths.digital.eyebrow', 'مسیر دیجیتال'),
      title: t('servicesPage.paths.digital.title', 'بازاریابی، وب، اپ، سرور و SMM'),
      desc: t('servicesPage.paths.digital.desc', 'از استراتژی رشد تا تحویل نرم‌افزار و زیرساخت — یک تیم برای مسیر آنلاین کسب‌وکار.'),
      cta: t('servicesPage.paths.digital.cta', 'شروع از بازاریابی دیجیتال'),
      href: '#digital-marketing'
    };
    const field = {
      eyebrow: t('servicesPage.paths.field.eyebrow', 'مسیر فنی'),
      title: t('servicesPage.paths.field.title', 'دوربین، سیم‌کشی و نورمخفی'),
      desc: t('servicesPage.paths.field.desc', 'نصب و اجرای میدانی در تبریز — هماهنگی مستقیم از واتساپ خدمات فنی.'),
      cta: t('servicesPage.paths.field.cta', 'رفتن به خدمات فنی'),
      href: path('pages/field-tech')
    };
    el.innerHTML = `
      <a class="services-path services-path--digital services-reveal" href="${digital.href}">
        <span class="services-path__eyebrow">${digital.eyebrow}</span>
        <h3 class="services-path__title">${digital.title}</h3>
        <p class="services-path__desc">${digital.desc}</p>
        <span class="services-path__cta">${digital.cta}</span>
      </a>
      <a class="services-path services-path--field services-reveal" href="${field.href}">
        <span class="services-path__eyebrow">${field.eyebrow}</span>
        <h3 class="services-path__title">${field.title}</h3>
        <p class="services-path__desc">${field.desc}</p>
        <span class="services-path__cta">${field.cta}</span>
      </a>`;
  }

  function renderOverview() {
    const el = document.getElementById('servicesOverview');
    if (!el) return;
    el.innerHTML = getServices().map(s => `
      <a href="${s.href}" class="services-overview-card services-overview-card--${s.accent} services-reveal">
        <span class="services-overview-card__num">${s.num}</span>
        <span class="services-overview-card__icon">${ic(s.icon, { size: 26 })}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class="services-overview-card__cta">${t('servicesPage.viewDetails', 'مشاهده جزئیات')}</span>
      </a>
    `).join('');
  }

  function pageHref(url) {
    if (!url) return '/pages/contact';
    if (/^(https?:|mailto:|#)/.test(url)) return url;
    return window.resolvePagePath ? window.resolvePagePath(url) : url;
  }

  function renderIntlMarkets() {
    const pointsEl = document.getElementById('servicesIntlPoints');
    const offersEl = document.getElementById('servicesIntlOffers');
    if (!pointsEl && !offersEl) return;
    const points = rawList('servicesPage.intl.points', []);
    const offers = rawList('servicesPage.intl.offers', []);
    if (pointsEl) {
      pointsEl.innerHTML = points.map(p => `
        <article class="services-intl__point services-reveal">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </article>
      `).join('');
    }
    if (offersEl) {
      offersEl.innerHTML = offers.map(o => `
        <article class="services-intl__offer services-reveal">
          <h3>${o.name}</h3>
          <div class="services-intl__price" dir="ltr">${o.price}</div>
          <p>${o.desc}</p>
          <a href="${pageHref(o.href)}" class="btn btn--yellow">${o.cta}</a>
        </article>
      `).join('');
    }
  }

  const PROCESS_ICONS = ['phone', 'target', 'bolt', 'chart-line'];

  function renderProcess() {
    const el = document.getElementById('servicesProcess');
    if (!el) return;
    const steps = rawList('servicesPage.process.steps', [
      { title: 'مشاوره', desc: 'شناخت نیاز دیجیتال یا بازدید فنی میدانی' },
      { title: 'طراحی راهکار', desc: 'پیشنهاد فنی، برآورد و زمان‌بندی' },
      { title: 'اجرا', desc: 'پیاده‌سازی نرم‌افزار یا نصب خدمات فنی' },
      { title: 'پشتیبانی', desc: 'گزارش، بهینه‌سازی و همراهی مستمر' }
    ]);
    el.innerHTML = steps.map((s, i) => `
      <div class="services-process__step services-reveal">
        <span class="services-process__icon">${ic(PROCESS_ICONS[i] || 'target', { size: 28 })}</span>
        <span class="services-process__num">${i + 1}</span>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  let navSpyReady = false;

  function initNavSpy() {
    if (navSpyReady) return;
    navSpyReady = true;
    const nav = document.querySelector('.services-nav');
    if (!nav) return;
    const links = [...nav.querySelectorAll('.services-nav__item')];
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

    document.querySelectorAll('.services-path[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', a.getAttribute('href'));
        setActive(target.id);
      });
    });

    if (location.hash) {
      const id = location.hash.slice(1);
      if (id) setActive(id);
    }
  }

  let servicesRevealObserver = null;
  let servicesRevealFallbackTimer = 0;

  function revealServicesNode(el) {
    if (!el || el.classList.contains('is-in')) return;
    el.classList.add('is-in');
    if (servicesRevealObserver) servicesRevealObserver.unobserve(el);
  }

  function flushHiddenServicesReveals() {
    document.querySelectorAll('.services-reveal:not(.is-in)').forEach(revealServicesNode);
  }

  function initReveals() {
    const nodes = [...document.querySelectorAll('.services-reveal')];
    if (!nodes.length) return;

    if (servicesRevealObserver) {
      servicesRevealObserver.disconnect();
      servicesRevealObserver = null;
    }
    if (servicesRevealFallbackTimer) {
      clearTimeout(servicesRevealFallbackTimer);
      servicesRevealFallbackTimer = 0;
    }

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(revealServicesNode);
      return;
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        revealServicesNode(entry.target);
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.05 });
    servicesRevealObserver = obs;

    const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
    nodes.forEach(n => {
      obs.observe(n);
      const rect = n.getBoundingClientRect();
      if (rect.height > 0 && rect.bottom > 0 && rect.top < viewportH * 0.92) {
        revealServicesNode(n);
      }
    });

    servicesRevealFallbackTimer = window.setTimeout(flushHiddenServicesReveals, 1500);
  }

  function scheduleServicesReveals() {
    initReveals();
    requestAnimationFrame(initReveals);
  }

  function applyBlockLists() {
    const blocks = raw('servicesPage.blocks');
    if (!Array.isArray(blocks)) return;
    document.querySelectorAll('[data-service-block]').forEach(section => {
      const idx = Number(section.getAttribute('data-service-block'));
      const block = blocks[idx];
      if (!block) return;
      const tags = section.querySelector('.service-block__tags');
      if (tags && Array.isArray(block.tags)) {
        tags.innerHTML = block.tags.map(tag => `<span class="service-block__tag">${tag}</span>`).join('');
      }
      const list = section.querySelector('.check-list');
      if (list && Array.isArray(block.checks)) {
        list.innerHTML = block.checks.map(item => `<li>${item}</li>`).join('');
      }
      const cta = section.querySelector('[data-service-cta]');
      if (cta && block.cta) cta.textContent = block.cta;
    });
  }

  function renderDmPanel() {
    const el = document.getElementById('dmPanel');
    if (!el) return;
    const panels = rawList('servicesPage.digitalMarketing.panels', [
      { title: 'Ads', desc: 'Google و شبکه‌های اجتماعی' },
      { title: 'SEO', desc: 'سئو و محتوای هدفمند' },
      { title: 'CRO', desc: 'بهینه‌سازی نرخ تبدیل' },
      { title: 'Email', desc: 'اتوماسیون و ایمیل' },
      { title: 'Analytics', desc: 'گزارش و KPI' },
      { title: 'Funnel', desc: 'مسیر جذب تا خرید' }
    ]);
    el.innerHTML = panels.map(p => `
      <div class="service-panel-card">
        <strong>${p.title}</strong>
        <span>${p.desc}</span>
      </div>
    `).join('');
  }

  function renderDmDeliverables() {
    const el = document.getElementById('dmDeliverables');
    if (!el) return;
    const title = t('servicesPage.digitalMarketing.packagesTitle', 'خروجی‌های همکاری');
    const items = rawList('servicesPage.digitalMarketing.packages', [
      'نقشه کانال و قیف فروش',
      'راه‌اندازی و بهینه‌سازی کمپین',
      'آزمایش CRO روی صفحات کلیدی',
      'گزارش KPI ماهانه'
    ]);
    el.innerHTML = `
      <p class="server-ops-stack__title">${title}</p>
      <div class="server-ops-stack__list">
        ${items.map(item => `<span class="server-ops-stack__item">${item}</span>`).join('')}
      </div>
    `;
  }

  function renderDmFaq() {
    const el = document.getElementById('dmFaq');
    if (!el) return;
    const faq = rawList('servicesPage.digitalMarketing.faq', []);
    if (!faq.length) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <div class="field-tech-faq-wrap">
        <div class="field-tech-faq__head">
          <span class="field-tech-faq__eyebrow field-tech-faq__eyebrow--yellow">${t('servicesPage.digitalMarketing.faqEyebrow', 'دیجیتال مارکتینگ')}</span>
          <h3 class="field-tech-faq__title">${t('servicesPage.digitalMarketing.faqTitle', 'سوالات پرتکرار بازاریابی دیجیتال')}</h3>
        </div>
        <div class="field-tech-faq" role="list">
          ${faq.map((item, i) => `
            <details class="field-tech-faq__item field-tech-faq__item--yellow"${i === 0 ? ' open' : ''} role="listitem">
              <summary>
                <span class="field-tech-faq__q">${item.q}</span>
                <span class="field-tech-faq__icon" aria-hidden="true"></span>
              </summary>
              <div class="field-tech-faq__body"><p>${item.a}</p></div>
            </details>
          `).join('')}
        </div>
      </div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-dm-faq', ld);
    }
  }

  function renderWebDesignPanel() {
    const el = document.getElementById('webDesignPanel');
    if (!el) return;
    const panels = rawList('servicesPage.webDesign.panels', [
      { title: 'Corporate', desc: 'سایت شرکتی' },
      { title: 'Store', desc: 'فروشگاه ووکامرس' },
      { title: 'Web App', desc: 'پنل و سامانه وب' },
      { title: 'Landing', desc: 'لندینگ کمپین' },
      { title: 'RTL / FA', desc: 'فونت و UI فارسی' },
      { title: 'Fast', desc: 'تحویل از $99' }
    ]);
    el.innerHTML = panels.map(p => `
      <div class="service-panel-card">
        <strong>${p.title}</strong>
        <span>${p.desc}</span>
      </div>
    `).join('');
  }

  function renderWebDesignDeliverables() {
    const el = document.getElementById('webDesignDeliverables');
    if (!el) return;
    const title = t('servicesPage.webDesign.packagesTitle', 'خروجی‌های تحویل');
    const items = rawList('servicesPage.webDesign.packages', [
      'طراحی UI/UX و هویت صفحه',
      'پیاده‌سازی ریسپانسیو RTL',
      'سئو پایه و سرعت',
      'آموزش و پشتیبانی لانچ'
    ]);
    el.innerHTML = `
      <p class="server-ops-stack__title">${title}</p>
      <div class="server-ops-stack__list">
        ${items.map(item => `<span class="server-ops-stack__item">${item}</span>`).join('')}
      </div>
    `;
  }

  function renderWebDesignFaq() {
    const el = document.getElementById('webDesignFaq');
    if (!el) return;
    const faq = rawList('servicesPage.webDesign.faq', []);
    if (!faq.length) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <div class="field-tech-faq-wrap">
        <div class="field-tech-faq__head">
          <span class="field-tech-faq__eyebrow field-tech-faq__eyebrow--blue">${t('servicesPage.webDesign.faqEyebrow', 'طراحی وب')}</span>
          <h3 class="field-tech-faq__title">${t('servicesPage.webDesign.faqTitle', 'سوالات پرتکرار طراحی وب')}</h3>
        </div>
        <div class="field-tech-faq" role="list">
          ${faq.map((item, i) => `
            <details class="field-tech-faq__item field-tech-faq__item--blue"${i === 0 ? ' open' : ''} role="listitem">
              <summary>
                <span class="field-tech-faq__q">${item.q}</span>
                <span class="field-tech-faq__icon" aria-hidden="true"></span>
              </summary>
              <div class="field-tech-faq__body"><p>${item.a}</p></div>
            </details>
          `).join('')}
        </div>
      </div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-web-design-faq', ld);
    }
  }

  function renderAppsPanel() {
    const el = document.getElementById('appsPanel');
    if (!el) return;
    const panels = rawList('servicesPage.softwareApps.panels', [
      { title: 'Android', desc: 'اپلیکیشن اندروید' },
      { title: 'iOS', desc: 'اپلیکیشن آیفون' },
      { title: 'سامانه', desc: 'پنل و سیستم سازمانی' },
      { title: 'API', desc: 'یکپارچه‌سازی و درگاه' },
      { title: 'B2B', desc: 'پنل و گردش‌کار سازمانی' },
      { title: 'Support', desc: 'انتشار و به‌روزرسانی' }
    ]);
    el.innerHTML = panels.map(p => `
      <div class="service-panel-card">
        <strong>${p.title}</strong>
        <span>${p.desc}</span>
      </div>
    `).join('');
  }

  function renderAppsDeliverables() {
    const el = document.getElementById('appsDeliverables');
    if (!el) return;
    const title = t('servicesPage.softwareApps.packagesTitle', 'خروجی‌های پروژه');
    const items = rawList('servicesPage.softwareApps.packages', [
      'تحلیل نیاز و نقشه محصول',
      'UI/UX و معماری فنی',
      'توسعه اندروید / iOS یا سامانه',
      'انتشار، آموزش و پشتیبانی'
    ]);
    el.innerHTML = `
      <p class="server-ops-stack__title">${title}</p>
      <div class="server-ops-stack__list">
        ${items.map(item => `<span class="server-ops-stack__item">${item}</span>`).join('')}
      </div>`;
  }

  function renderAppsFaq() {
    const el = document.getElementById('appsFaq');
    if (!el) return;
    const faq = rawList('servicesPage.softwareApps.faq', []);
    if (!faq.length) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <div class="field-tech-faq-wrap">
        <div class="field-tech-faq__head">
          <span class="field-tech-faq__eyebrow field-tech-faq__eyebrow--navy">${t('servicesPage.softwareApps.faqEyebrow', 'اپ و سامانه')}</span>
          <h3 class="field-tech-faq__title">${t('servicesPage.softwareApps.faqTitle', 'سوالات پرتکرار اپلیکیشن و سامانه')}</h3>
        </div>
        <div class="field-tech-faq" role="list">
          ${faq.map((item, i) => `
            <details class="field-tech-faq__item field-tech-faq__item--navy"${i === 0 ? ' open' : ''} role="listitem">
              <summary>
                <span class="field-tech-faq__q">${item.q}</span>
                <span class="field-tech-faq__icon" aria-hidden="true"></span>
              </summary>
              <div class="field-tech-faq__body"><p>${item.a}</p></div>
            </details>
          `).join('')}
        </div>
      </div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-apps-faq', ld);
    }
  }

  function renderSmmPanel() {
    const el = document.getElementById('smmPanel');
    if (!el) return;
    const panels = rawList('servicesPage.smm.platforms', [
      { title: 'Instagram', desc: 'پست، استوری، ریلز و تبلیغات' },
      { title: 'LinkedIn', desc: 'محتوای B2B و برندینگ حرفه‌ای' },
      { title: 'Content', desc: 'تقویم، کپی و هویت بصری' },
      { title: 'Paid Ads', desc: 'کمپین هدفمند و بهینه‌سازی' },
      { title: 'Community', desc: 'تعامل و پاسخ‌گویی' },
      { title: 'Analytics', desc: 'گزارش رشد و عملکرد' }
    ]);
    el.innerHTML = panels.map(p => `
      <div class="service-panel-card">
        <strong>${p.title}</strong>
        <span>${p.desc}</span>
      </div>
    `).join('');
  }

  function renderSmmDeliverables() {
    const el = document.getElementById('smmDeliverables');
    if (!el) return;
    const title = t('servicesPage.smm.packagesTitle', 'خروجی‌های ماهانه');
    const items = rawList('servicesPage.smm.packages', [
      'تقویم محتوا و موضوعات',
      'پست و استوری طراحی‌شده',
      'ریلز / ویدیو کوتاه',
      'گزارش ماهانه رشد'
    ]);
    el.innerHTML = `
      <p class="server-ops-stack__title">${title}</p>
      <div class="server-ops-stack__list">
        ${items.map(item => `<span class="server-ops-stack__item">${item}</span>`).join('')}
      </div>
    `;
    el.classList.add('server-ops-stack', 'smm-deliverables');
  }

  function renderSmmFaq() {
    const el = document.getElementById('smmFaq');
    if (!el) return;
    const faq = rawList('servicesPage.smm.faq', []);
    if (!faq.length) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <div class="field-tech-faq-wrap">
        <div class="field-tech-faq__head">
          <span class="field-tech-faq__eyebrow field-tech-faq__eyebrow--red">${t('servicesPage.smm.faqEyebrow', 'شبکه‌های اجتماعی')}</span>
          <h3 class="field-tech-faq__title">${t('servicesPage.smm.faqTitle', 'سوالات پرتکرار SMM')}</h3>
        </div>
        <div class="field-tech-faq" role="list">
          ${faq.map((item, i) => `
            <details class="field-tech-faq__item field-tech-faq__item--red"${i === 0 ? ' open' : ''} role="listitem">
              <summary>
                <span class="field-tech-faq__q">${item.q}</span>
                <span class="field-tech-faq__icon" aria-hidden="true"></span>
              </summary>
              <div class="field-tech-faq__body"><p>${item.a}</p></div>
            </details>
          `).join('')}
        </div>
      </div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-smm-faq', ld);
    }
  }

  function renderServerOpsPanel() {
    const el = document.getElementById('serverOpsPanel');
    if (!el) return;
    const panels = rawList('servicesPage.serverOps.panels', [
      { title: 'VPS', desc: 'راه‌اندازی و سخت‌سازی' },
      { title: 'Security', desc: 'SSL، فایروال و دسترسی' },
      { title: 'Backup', desc: 'بکاپ و تست بازیابی' },
      { title: 'Monitor', desc: 'uptime و هشدار' },
      { title: 'DNS / CDN', desc: 'دامنه و Cloudflare' },
      { title: 'Migrate', desc: 'انتقال بدون قطعی' }
    ]);
    el.innerHTML = panels.map(p => `
      <div class="service-panel-card">
        <strong>${p.title}</strong>
        <span>${p.desc}</span>
      </div>
    `).join('');
  }

  function renderServerOpsStack() {
    const el = document.getElementById('serverOpsStack');
    if (!el) return;
    const title = t('servicesPage.serverOps.stackTitle', 'استک و ابزارهای رایج');
    const stack = rawList('servicesPage.serverOps.stack', [
      'Ubuntu', 'Debian', 'Nginx', 'MySQL / MariaDB', 'Redis', 'Cloudflare', 'Docker', 'Git'
    ]);
    el.innerHTML = `
      <p class="server-ops-stack__title">${title}</p>
      <div class="server-ops-stack__list">
        ${stack.map(item => `<span class="server-ops-stack__item">${item}</span>`).join('')}
      </div>
    `;
  }

  function renderServerOpsFaq() {
    const el = document.getElementById('serverOpsFaq');
    if (!el) return;
    const faq = rawList('servicesPage.serverOps.faq', []);
    if (!faq.length) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `
      <div class="field-tech-faq-wrap">
        <div class="field-tech-faq__head">
          <span class="field-tech-faq__eyebrow field-tech-faq__eyebrow--slate">${t('servicesPage.serverOps.faqEyebrow', 'زیرساخت و Ops')}</span>
          <h3 class="field-tech-faq__title">${t('servicesPage.serverOps.faqTitle', 'سوالات پرتکرار مدیریت سرور')}</h3>
        </div>
        <div class="field-tech-faq" role="list">
          ${faq.map((item, i) => `
            <details class="field-tech-faq__item field-tech-faq__item--slate"${i === 0 ? ' open' : ''} role="listitem">
              <summary>
                <span class="field-tech-faq__q">${item.q}</span>
                <span class="field-tech-faq__icon" aria-hidden="true"></span>
              </summary>
              <div class="field-tech-faq__body"><p>${item.a}</p></div>
            </details>
          `).join('')}
        </div>
      </div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-server-ops-faq', ld);
    }
  }

  function wireFieldTechCtas() {
    const wa = fieldWaUrl();
    const ft = fieldTechCfg();
    document.querySelectorAll('[data-field-wa]').forEach(el => {
      el.setAttribute('href', wa);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
    document.querySelectorAll('[data-field-tel]').forEach(el => {
      el.setAttribute('href', `tel:${ft.tel || '+989364115151'}`);
    });
  }

  function renderFieldTechLead() {
    const el = document.getElementById('fieldTechLead');
    if (!el) return;
    const ft = fieldTechCfg();
    const wa = fieldWaUrl();
    const tel = ft.tel || '+989364115151';
    const phone = t('servicesPage.fieldTech.waHint', ft.phoneDisplay || '+98 936 411 5151');
    const cities = t('servicesPage.fieldTech.cities', (ft.cities || []).join(' · '));
    el.innerHTML = `
      <article class="field-tech-lead" aria-label="${t('servicesPage.fieldTech.leadLabel', 'هماهنگی خدمات فنی')}">
        <div class="field-tech-lead__top">
          <div class="field-tech-lead__badge">${ic('wrench', { size: 18 })} ${t('servicesPage.fieldTech.leadLabel', 'هماهنگی خدمات فنی')}</div>
          <h3 class="field-tech-lead__name">${t('servicesPage.fieldTech.leadName', 'تیم فنی بیزدوار')}</h3>
          <p class="field-tech-lead__role">${t('servicesPage.fieldTech.leadRole', 'نصب دوربین مدار بسته، سیم‌کشی و نورمخفی')}</p>
          <div class="field-tech-lead__meta">
            <span class="field-tech-lead__chip">${ic('pin', { size: 14 })} ${cities}</span>
          </div>
        </div>
        <a class="field-tech-lead__phone" href="tel:${tel}" dir="ltr" data-field-tel>
          <span class="field-tech-lead__phone-icon" aria-hidden="true">${ic('phone', { size: 20 })}</span>
          <span class="field-tech-lead__phone-text">
            <span class="field-tech-lead__phone-label">${t('servicesPage.fieldTech.phoneLabel', 'شماره مستقیم')}</span>
            <span class="field-tech-lead__phone-num">${phone}</span>
          </span>
        </a>
        <div class="field-tech-lead__actions">
          <a class="btn btn--green field-tech-lead__btn" data-field-wa href="${wa}" target="_blank" rel="noopener noreferrer">
            ${ic('whatsapp', { size: 18, variant: 'white' })}
            <span>${t('servicesPage.fieldTech.waCta', 'واتساپ خدمات فنی')}</span>
          </a>
          <a class="btn btn--outline field-tech-lead__btn" data-field-tel href="tel:${tel}">
            ${ic('phone', { size: 18 })}
            <span>${t('servicesPage.fieldTech.callCta', 'تماس تلفنی')}</span>
          </a>
        </div>
      </article>`;
  }

  function renderFieldTechPanel() {
    const el = document.getElementById('fieldTechPanel');
    if (!el) return;
    const items = rawList('servicesPage.fieldTech.panel', null);
    if (!Array.isArray(items) || !items.length) return;
    const iconMap = {
      cctv: 'monitor',
      wiring: 'bolt',
      lighting: 'flame',
      survey: 'document',
      cities: 'pin',
      support: 'shield'
    };
    el.innerHTML = items.map(item => {
      const key = String(item.id || item.title || '').toLowerCase();
      const icon = item.icon || iconMap[key] || 'check';
      return `
      <div class="service-panel-card service-panel-card--field">
        <span class="service-panel-card__icon" aria-hidden="true">${ic(icon, { size: 22 })}</span>
        <strong>${item.title || ''}</strong>
        <span>${item.desc || ''}</span>
      </div>`;
    }).join('');
  }

  function renderFieldFaq() {
    const el = document.getElementById('fieldTechFaq');
    if (!el) return;
    const faq = rawList('servicesPage.fieldTech.faq', []);
    if (!faq.length) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    const phoneRe = /(\+98[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4})/g;
    el.innerHTML = `
      <div class="field-tech-faq-wrap">
        <div class="field-tech-faq__head">
          <span class="field-tech-faq__eyebrow">${t('servicesPage.fieldTech.eyebrow', 'خدمات فنی میدانی')}</span>
          <h3 class="field-tech-faq__title">${t('servicesPage.fieldTech.faqTitle', 'سوالات پرتکرار خدمات فنی')}</h3>
        </div>
        <div class="field-tech-faq" role="list">
          ${faq.map((item, i) => {
            const answer = String(item.a || '').replace(phoneRe, '<span dir="ltr" class="field-tech-faq__phone">$1</span>');
            return `<details class="field-tech-faq__item"${i === 0 ? ' open' : ''} role="listitem">
              <summary>
                <span class="field-tech-faq__q">${item.q}</span>
                <span class="field-tech-faq__icon" aria-hidden="true"></span>
              </summary>
              <div class="field-tech-faq__body"><p>${answer}</p></div>
            </details>`;
          }).join('')}
        </div>
      </div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-field-tech-faq', ld);
    } else {
      let node = document.getElementById('jsonld-field-tech-faq');
      if (!node) {
        node = document.createElement('script');
        node.type = 'application/ld+json';
        node.id = 'jsonld-field-tech-faq';
        document.head.appendChild(node);
      }
      node.textContent = JSON.stringify(ld);
    }
  }

  function injectFieldTechPersonSchema() {
    const ft = fieldTechCfg();
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ContactPoint',
      contactType: 'technical support',
      telephone: ft.tel || '+989364115151',
      availableLanguage: ['fa', 'tr', 'en', 'ru', 'ar'],
      areaServed: [
        { '@type': 'City', name: 'Tabriz' },
        { '@type': 'City', name: 'Istanbul' }
      ]
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-field-tech-contact', ld);
    }
  }

  window.initServicesPage = function () {
    redirectLegacyIndustrialHash();
    renderStats();
    renderNav();
    renderPaths();
    renderOverview();
    renderIntlMarkets();
    renderProcess();
    applyBlockLists();
    renderDmPanel();
    renderDmDeliverables();
    renderDmFaq();
    renderWebDesignPanel();
    renderWebDesignDeliverables();
    renderWebDesignFaq();
    renderAppsPanel();
    renderAppsDeliverables();
    renderAppsFaq();
    renderServerOpsPanel();
    renderServerOpsStack();
    renderServerOpsFaq();
    renderSmmPanel();
    renderSmmDeliverables();
    renderSmmFaq();
    renderFieldTechPanel();
    renderFieldTechLead();
    renderFieldFaq();
    wireFieldTechCtas();
    injectFieldTechPersonSchema();
    document.querySelectorAll('.service-block, .services-cta').forEach(el => {
      el.classList.add('services-reveal');
    });
    initNavSpy();
    scheduleServicesReveals();
  };

  document.addEventListener('bizdavar:locale', () => {
    if (document.body.dataset.page !== 'services') return;
    scheduleServicesReveals();
  });

  document.addEventListener('bizdavar:page-entered', scheduleServicesReveals);

  if (document.documentElement.classList.contains('is-page-entered')) {
    scheduleServicesReveals();
  }

  window.renderServicesRelatedLinks = function () {
    const links = rawList('servicesPage.relatedLinks', [
      { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
      { title: 'محصولات بیزدوار', url: 'products', desc: 'SaaS و برندهای تامین' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: '۳۵ پروژه و برند' },
      { title: 'تماس', url: 'contact', desc: 'فرم و واتساپ' }
    ]);
    if (typeof window.renderRelatedLinks === 'function') {
      window.renderRelatedLinks(links);
    }
  };
})();
