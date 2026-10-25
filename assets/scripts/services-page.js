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

  const faqGroups = {};
  const stripHtml = (v) => String(v || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  function publishFaq(id, entities) {
    faqGroups[id] = entities || [];
    if (typeof window.injectJsonLd !== 'function') return;
    const mainEntity = Object.values(faqGroups).flat().map(q => ({
      '@type': 'Question',
      name: stripHtml(q.name),
      acceptedAnswer: { '@type': 'Answer', text: stripHtml(q.acceptedAnswer && q.acceptedAnswer.text) }
    }));
    if (!mainEntity.length) return;
    window.injectJsonLd('jsonld-services-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: document.documentElement.lang || 'fa',
      mainEntity
    });
  }

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
      icon: 'server',
      accent: 'slate',
      href: '#server-ops'
    },
    {
      id: 'smm',
      num: '05',
      title: 'مدیریت SMM',
      desc: 'محتوا، گرافیک، ریلز، تبلیغات و گزارش رشد.',
      icon: 'megaphone',
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

  // Turkish visitors are mostly local businesses — US/EU offer goes after the core services.
  const intlLast = () => String(document.documentElement.lang || '').slice(0, 2) === 'tr';

  function placeIntlSection() {
    if (!intlLast()) return;
    const intl = document.getElementById('intl-markets');
    const anchor = document.getElementById('field-tech');
    if (intl && anchor && anchor.nextElementSibling !== intl) anchor.after(intl);
  }

  function renderNav() {
    const el = document.getElementById('serviceNav');
    if (!el) return;
    const intlItem = `
          <a href="#intl-markets" class="services-nav__item services-nav__item--blue">
            <span class="services-nav__num">$</span>
            ${ic('globe', { size: 18 })}
            ${t('servicesPage.intl.nav', 'اروپا و آمریکا')}
          </a>`;
    const serviceItems = getServices().map(s => `
            <a href="${s.href}" class="services-nav__item services-nav__item--${s.accent}">
              <span class="services-nav__num">${s.num}</span>
              ${ic(s.icon, { size: 18 })}
              ${s.title}
            </a>
          `).join('');
    el.innerHTML = `
      <div class="container">
        <nav class="services-nav" aria-label="${t('servicesPage.navAria', 'فهرست خدمات')}">
          ${intlLast() ? serviceItems + intlItem : intlItem + serviceItems}
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
    const links = [...nav.querySelectorAll('.services-nav__item')]
      .filter(a => /^#[\w-]+$/.test(a.getAttribute('href') || ''));
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
    publishFaq('dm', ld.mainEntity);
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
    publishFaq('web-design', ld.mainEntity);
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
    publishFaq('apps', ld.mainEntity);
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
    publishFaq('smm', ld.mainEntity);
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
    publishFaq('server-ops', ld.mainEntity);
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
    publishFaq('field-tech', ld.mainEntity);
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

  const STAGE_COPY = {
    fa: {
      prev: 'نمونه قبلی',
      next: 'نمونه بعدی',
      web: {
        title: 'نمونه‌های طراحی وب',
        lead: 'سایت شرکتی، فروشگاه و وب‌اپ‌هایی که برای برندها طراحی و تحویل داده‌ایم.',
        all: 'همه نمونه‌کارها',
        tags: ['طراحی وب', 'فروشگاه', 'وب‌اپ'],
        offers: [
          { art: 'store', title: 'طراحی فروشگاه اینترنتی', en: 'E-COMMERCE WEBSITE', sub: 'از ویترین محصول تا پرداخت، یک مسیر فروش روشن.', href: 'pages/contact.html?service=web-design' },
          { art: 'corp', title: 'طراحی سایت شرکتی', en: 'CORPORATE WEBSITE', sub: 'جایگاه برند را دقیق، سریع و قابل اعتماد نشان دهید.', href: 'pages/contact.html?service=web-design' }
        ],
        closer: { kicker: 'قدم بعدی', title: 'پروژه بعدی، نام برند شماست', consult: 'درخواست مشاوره' }
      },
      apps: {
        title: 'نمونه‌های اپ و سامانه',
        lead: 'از اپ iOS تا پنل سازمانی — محصول را در قاب موبایل ببینید.',
        all: 'همه نمونه‌کارها',
        tags: ['iOS', 'اندروید', 'سامانه'],
        offers: [
          { art: 'app', title: 'اپلیکیشن موبایل', en: 'MOBILE APP', sub: 'طراحی، توسعه و انتشار در App Store و Google Play.', href: 'pages/contact.html?service=software-apps' },
          { art: 'system', title: 'سامانه سازمانی', en: 'BUSINESS SYSTEM', sub: 'پنل، گردش‌کار و اتصال API برای تیم شما.', href: 'pages/contact.html?service=software-apps' }
        ]
      },
      smm: {
        title: 'نمونه‌های حضور اجتماعی',
        lead: 'محتوا، هویت بصری و کمپین — ساختار اجرا را در قاب ببینید.',
        all: 'همه نمونه‌کارها',
        tags: ['محتوا', 'هویت', 'تبلیغ'],
        offers: [
          { art: 'content', title: 'استودیو محتوا', en: 'CONTENT STUDIO', sub: 'تقویم، طراحی و ریتم انتشار برای برند.', href: 'pages/contact.html?service=smm' },
          { art: 'ads', title: 'تبلیغات اجتماعی', en: 'PAID SOCIAL', sub: 'کمپین هدفمند با گزارش رشد ماهانه.', href: 'pages/contact.html?service=smm' }
        ]
      }
    },
    en: {
      prev: 'Previous sample',
      next: 'Next sample',
      web: {
        title: 'Web design samples',
        lead: 'Corporate sites, stores, and web apps we have designed and shipped.',
        all: 'All work',
        tags: ['Web design', 'Store', 'Web app'],
        offers: [
          { art: 'store', title: 'Online store design', en: 'E-COMMERCE WEBSITE', sub: 'A clear path from catalog to checkout.', href: 'pages/contact.html?service=web-design' },
          { art: 'corp', title: 'Corporate website', en: 'CORPORATE WEBSITE', sub: 'Show the brand clearly, quickly, and with trust.', href: 'pages/contact.html?service=web-design' }
        ],
        closer: { kicker: 'Next step', title: 'The next project can carry your name', consult: 'Request a consult' }
      },
      apps: {
        title: 'App and system samples',
        lead: 'From an iOS app to an operations panel — see the product in a phone frame.',
        all: 'All work',
        tags: ['iOS', 'Android', 'Systems'],
        offers: [
          { art: 'app', title: 'Mobile app', en: 'MOBILE APP', sub: 'Design, build, and release on the App Store and Google Play.', href: 'pages/contact.html?service=software-apps' },
          { art: 'system', title: 'Business system', en: 'BUSINESS SYSTEM', sub: 'Panels, workflows, and API connections for your team.', href: 'pages/contact.html?service=software-apps' }
        ]
      },
      smm: {
        title: 'Social presence samples',
        lead: 'Content, visual identity, and campaigns — see how the work is structured.',
        all: 'All work',
        tags: ['Content', 'Identity', 'Ads'],
        offers: [
          { art: 'content', title: 'Content studio', en: 'CONTENT STUDIO', sub: 'Calendar, design, and a publishing rhythm for the brand.', href: 'pages/contact.html?service=smm' },
          { art: 'ads', title: 'Paid social', en: 'PAID SOCIAL', sub: 'Targeted campaigns with a monthly growth report.', href: 'pages/contact.html?service=smm' }
        ]
      }
    },
    tr: {
      prev: 'Önceki örnek',
      next: 'Sonraki örnek',
      web: {
        title: 'Web tasarım örnekleri',
        lead: 'Tasarlayıp teslim ettiğimiz kurumsal siteler, mağazalar ve web uygulamaları.',
        all: 'Tüm işler',
        tags: ['Web tasarım', 'Mağaza', 'Web uygulaması'],
        offers: [
          { art: 'store', title: 'E-ticaret sitesi', en: 'E-COMMERCE WEBSITE', sub: 'Vitrinden ödemeye net bir satış yolu.', href: 'pages/contact.html?service=web-design' },
          { art: 'corp', title: 'Kurumsal site', en: 'CORPORATE WEBSITE', sub: 'Markanın yerini net, hızlı ve güvenilir gösterin.', href: 'pages/contact.html?service=web-design' }
        ],
        closer: { kicker: 'Sonraki adım', title: 'Sıradaki proje markanızın adı olsun', consult: 'Danışmanlık iste' }
      },
      apps: {
        title: 'Uygulama ve sistem örnekleri',
        lead: 'iOS uygulamasından kurumsal panele — ürünü telefon çerçevesinde görün.',
        all: 'Tüm işler',
        tags: ['iOS', 'Android', 'Sistem'],
        offers: [
          { art: 'app', title: 'Mobil uygulama', en: 'MOBILE APP', sub: 'Tasarım, geliştirme ve App Store / Google Play yayını.', href: 'pages/contact.html?service=software-apps' },
          { art: 'system', title: 'Kurumsal sistem', en: 'BUSINESS SYSTEM', sub: 'Panel, iş akışı ve API bağlantısı.', href: 'pages/contact.html?service=software-apps' }
        ]
      },
      smm: {
        title: 'Sosyal varlık örnekleri',
        lead: 'İçerik, görsel kimlik ve kampanya — yürütmenin yapısını görün.',
        all: 'Tüm işler',
        tags: ['İçerik', 'Kimlik', 'Reklam'],
        offers: [
          { art: 'content', title: 'İçerik stüdyosu', en: 'CONTENT STUDIO', sub: 'Takvim, tasarım ve yayın ritmi.', href: 'pages/contact.html?service=smm' },
          { art: 'ads', title: 'Sosyal reklam', en: 'PAID SOCIAL', sub: 'Hedefli kampanya ve aylık büyüme raporu.', href: 'pages/contact.html?service=smm' }
        ]
      }
    },
    ru: {
      prev: 'Предыдущий пример',
      next: 'Следующий пример',
      web: {
        title: 'Примеры веб-дизайна',
        lead: 'Корпоративные сайты, магазины и веб-приложения, которые мы спроектировали и сдали.',
        all: 'Все работы',
        tags: ['Веб-дизайн', 'Магазин', 'Веб-приложение'],
        offers: [
          { art: 'store', title: 'Интернет-магазин', en: 'E-COMMERCE WEBSITE', sub: 'Понятный путь от витрины до оплаты.', href: 'pages/contact.html?service=web-design' },
          { art: 'corp', title: 'Корпоративный сайт', en: 'CORPORATE WEBSITE', sub: 'Покажите позицию бренда точно и быстро.', href: 'pages/contact.html?service=web-design' }
        ],
        closer: { kicker: 'Следующий шаг', title: 'Следующий проект — имя вашего бренда', consult: 'Запросить консультацию' }
      },
      apps: {
        title: 'Примеры приложений и систем',
        lead: 'От iOS-приложения до рабочей панели — продукт в рамке телефона.',
        all: 'Все работы',
        tags: ['iOS', 'Android', 'Система'],
        offers: [
          { art: 'app', title: 'Мобильное приложение', en: 'MOBILE APP', sub: 'Дизайн, разработка и публикация в App Store и Google Play.', href: 'pages/contact.html?service=software-apps' },
          { art: 'system', title: 'Бизнес-система', en: 'BUSINESS SYSTEM', sub: 'Панели, процессы и подключение API.', href: 'pages/contact.html?service=software-apps' }
        ]
      },
      smm: {
        title: 'Примеры соцсетей',
        lead: 'Контент, айдентика и кампании — структура работы в кадре.',
        all: 'Все работы',
        tags: ['Контент', 'Айдентика', 'Реклама'],
        offers: [
          { art: 'content', title: 'Контент-студия', en: 'CONTENT STUDIO', sub: 'Календарь, дизайн и ритм публикаций.', href: 'pages/contact.html?service=smm' },
          { art: 'ads', title: 'Реклама в соцсетях', en: 'PAID SOCIAL', sub: 'Точные кампании и ежемесячный отчёт роста.', href: 'pages/contact.html?service=smm' }
        ]
      }
    },
    ar: {
      prev: 'النموذج السابق',
      next: 'النموذج التالي',
      web: {
        title: 'نماذج تصميم الويب',
        lead: 'مواقع شركات ومتاجر وتطبيقات ويب صمّمناها وسلّمناها.',
        all: 'كل الأعمال',
        tags: ['تصميم الويب', 'متجر', 'تطبيق ويب'],
        offers: [
          { art: 'store', title: 'تصميم متجر إلكتروني', en: 'E-COMMERCE WEBSITE', sub: 'مسار بيع واضح من الواجهة حتى الدفع.', href: 'pages/contact.html?service=web-design' },
          { art: 'corp', title: 'تصميم موقع شركة', en: 'CORPORATE WEBSITE', sub: 'أظهروا مكانة العلامة بدقة وسرعة.', href: 'pages/contact.html?service=web-design' }
        ],
        closer: { kicker: 'الخطوة التالية', title: 'المشروع التالي يحمل اسم علامتكم', consult: 'طلب استشارة' }
      },
      apps: {
        title: 'نماذج التطبيقات والأنظمة',
        lead: 'من تطبيق iOS إلى لوحة تشغيل — شاهدوا المنتج داخل إطار الهاتف.',
        all: 'كل الأعمال',
        tags: ['iOS', 'أندرويد', 'نظام'],
        offers: [
          { art: 'app', title: 'تطبيق جوّال', en: 'MOBILE APP', sub: 'تصميم وتطوير ونشر على App Store وGoogle Play.', href: 'pages/contact.html?service=software-apps' },
          { art: 'system', title: 'نظام أعمال', en: 'BUSINESS SYSTEM', sub: 'لوحات وسير عمل وربط API.', href: 'pages/contact.html?service=software-apps' }
        ]
      },
      smm: {
        title: 'نماذج الحضور الاجتماعي',
        lead: 'محتوى وهوية بصرية وحملات — شاهدوا هيكل التنفيذ.',
        all: 'كل الأعمال',
        tags: ['محتوى', 'هوية', 'إعلان'],
        offers: [
          { art: 'content', title: 'استوديو المحتوى', en: 'CONTENT STUDIO', sub: 'رزنامة وتصميم وإيقاع نشر.', href: 'pages/contact.html?service=smm' },
          { art: 'ads', title: 'إعلانات اجتماعية', en: 'PAID SOCIAL', sub: 'حملات موجّهة وتقرير نمو شهري.', href: 'pages/contact.html?service=smm' }
        ]
      }
    }
  };

  const WEB_SAMPLES = [
    { name: 'Marvispace', href: 'pages/marvispace.html', logo: 'assets/images/partners/marvispace.svg', tone: 'violet', layout: 'store' },
    { name: 'Supplify', href: 'pages/supplify-trade.html', logo: 'assets/images/partners/supplify-trade.svg', tone: 'green', layout: 'corp' },
    { name: 'Kaya One', href: 'pages/kaya-one.html', logo: 'assets/images/partners/kaya-one.svg', tone: 'sand', layout: 'corp' },
    { name: 'SMM Turk', href: 'pages/smm-turk.html', logo: 'assets/images/partners/smm-turk.svg', tone: 'rose', layout: 'panel' },
    { name: 'FXGuard', href: 'pages/fxguard-exchange.html', logo: 'assets/images/partners/fxguard-exchange.svg', tone: 'blue', layout: 'panel' },
    { name: 'Fast Studio', href: 'pages/fast.html', logo: 'assets/images/partners/fast-studio.png', tone: 'navy', layout: 'corp' },
    { name: 'Arian Pumps', href: 'https://arianpumps.com', logo: 'assets/images/partners/arian-pumps.png', tone: 'green', layout: 'corp' }
  ];

  const APP_SAMPLES = [
    { name: 'Marvi Society', href: 'pages/marvi-society.html', logo: 'assets/images/partners/marvi-society.png', tone: 'violet', layout: 'app' },
    { name: 'FXGuard', href: 'pages/fxguard.html', logo: 'assets/images/products/fxguard/fxguard-logo.svg', tone: 'green', layout: 'app' },
    { name: 'FXGuard Accounting', href: 'pages/fxguard-accounting.html', logo: 'assets/images/partners/fxguard-accounting.svg', tone: 'sand', layout: 'panel' },
    { name: 'BizSwap', href: 'pages/bizswap.html', logo: 'assets/images/products/bizswap/bizswap-logo.svg', tone: 'rose', layout: 'app' },
    { name: 'GooPay AI', href: 'pages/portfolio.html', logo: 'assets/images/partners/goopay-ai.svg', tone: 'blue', layout: 'panel' }
  ];

  const SMM_SAMPLES = [
    { name: 'Biztejarat', href: 'pages/biztejarat.html', logo: 'assets/images/partners/biztejarat.svg', tone: 'violet', layout: 'app' },
    { name: 'SMM Turk', href: 'pages/smm-turk.html', logo: 'assets/images/partners/smm-turk.svg', tone: 'rose', layout: 'panel' },
    { name: 'Karen Leather', href: 'https://karenleather.com', logo: 'assets/images/partners/karen-leather.png', tone: 'sand', layout: 'store' },
    { name: 'NIK Aesthetic', href: 'https://nikaesthetic.com', logo: 'assets/images/partners/nikaesthetic.png', tone: 'green', layout: 'corp' },
    { name: 'Paparosi', href: 'https://paparosi.co', logo: 'assets/images/partners/paparosi.png', tone: 'blue', layout: 'store' }
  ];

  const WAVE_TOP = '<svg viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true"><path fill="#5b4dff" d="M0 72C220 18 460 64 740 30C1020 0 1220 52 1440 16V72H0Z"/><path fill="#0c1024" d="M0 72C260 28 500 72 760 40C1020 8 1240 58 1440 26V72H0Z"/></svg>';
  const WAVE_BOTTOM = '<svg viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true"><path fill="#5b4dff" d="M0 0C220 54 460 8 740 42C1020 72 1220 20 1440 56V0H0Z"/><path fill="#0c1024" d="M0 0C260 44 500 0 760 32C1020 64 1240 14 1440 46V0H0Z"/></svg>';

  function escStage(value) {
    return String(value || '').replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function stageHref(href) {
    if (/^(https?:|tel:|mailto:)/.test(href)) return href;
    return path(href);
  }

  function starSvg() {
    return '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="#fb7185" d="M8 1.2 9.7 5.3l4.4.4-3.3 2.9.9 4.3L8 10.7 4.3 12.9l.9-4.3L1.9 5.7l4.4-.4z"/></svg>';
  }

  function chevronSvg() {
    return '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6"/></svg>';
  }

  function artSvg(kind) {
    const arts = {
      store: '<svg viewBox="0 0 220 140" aria-hidden="true"><rect x="16" y="34" width="42" height="42" rx="10" fill="#3b82f6"/><rect x="30" y="50" width="42" height="42" rx="10" fill="#93c5fd"/><rect x="8" y="84" width="36" height="36" rx="8" fill="#1d4ed8"/><rect x="86" y="12" width="72" height="116" rx="16" fill="#0b1228" stroke="#bfdbfe" stroke-width="3"/><rect x="96" y="26" width="52" height="70" rx="6" fill="#e0f2fe"/><rect x="102" y="32" width="40" height="20" rx="4" fill="#38bdf8"/><rect x="102" y="56" width="18" height="14" rx="3" fill="#fff"/><rect x="124" y="56" width="18" height="14" rx="3" fill="#fff"/><rect x="102" y="74" width="40" height="8" rx="3" fill="#0284c7"/><path fill="#fbbf24" d="M156 92h26l-3 16h-20l-6-12h3z"/><circle cx="166" cy="116" r="4" fill="#f8fafc"/><circle cx="180" cy="116" r="4" fill="#f8fafc"/></svg>',
      corp: '<svg viewBox="0 0 220 140" aria-hidden="true"><rect x="18" y="28" width="128" height="82" rx="10" fill="#e2e8f0"/><rect x="26" y="36" width="112" height="62" rx="4" fill="#fff"/><rect x="34" y="44" width="46" height="8" rx="3" fill="#1d4ed8"/><rect x="34" y="58" width="70" height="5" rx="2" fill="#cbd5e1"/><rect x="34" y="68" width="54" height="5" rx="2" fill="#e2e8f0"/><rect x="34" y="80" width="28" height="8" rx="3" fill="#f97316"/><path d="M62 110h40l8 12H54z" fill="#94a3b8"/><path fill="#60a5fa" d="M168 28l6 14h14l-11 9 4 14-13-8-13 8 4-14-11-9h14z"/><path fill="#fff" stroke="#0f172a" stroke-width="2" d="M150 78l18 18-8 2-4 8-6-28z"/></svg>',
      app: '<svg viewBox="0 0 220 140" aria-hidden="true"><rect x="78" y="10" width="64" height="120" rx="16" fill="#0b1228" stroke="#c4b5fd" stroke-width="3"/><rect x="88" y="24" width="44" height="78" rx="8" fill="#ede9fe"/><circle cx="100" cy="40" r="8" fill="#8b5cf6"/><circle cx="118" cy="40" r="8" fill="#f472b6"/><rect x="94" y="56" width="32" height="8" rx="3" fill="#fff"/><rect x="94" y="70" width="32" height="8" rx="3" fill="#fff"/><rect x="94" y="84" width="22" height="8" rx="3" fill="#7c3aed"/><rect x="28" y="46" width="36" height="36" rx="10" fill="#22c55e"/><rect x="156" y="58" width="36" height="36" rx="10" fill="#38bdf8"/></svg>',
      system: '<svg viewBox="0 0 220 140" aria-hidden="true"><rect x="16" y="22" width="120" height="78" rx="10" fill="#0f172a"/><rect x="26" y="34" width="36" height="54" rx="4" fill="#1e293b"/><rect x="68" y="34" width="58" height="24" rx="4" fill="#3b82f6"/><rect x="68" y="64" width="26" height="24" rx="4" fill="#22c55e"/><rect x="100" y="64" width="26" height="24" rx="4" fill="#f59e0b"/><rect x="146" y="40" width="58" height="72" rx="8" fill="#e2e8f0"/><rect x="154" y="50" width="42" height="8" rx="3" fill="#1d4ed8"/><rect x="154" y="64" width="42" height="5" rx="2" fill="#94a3b8"/><rect x="154" y="74" width="30" height="5" rx="2" fill="#cbd5e1"/><rect x="154" y="88" width="24" height="10" rx="3" fill="#0f172a"/></svg>',
      content: '<svg viewBox="0 0 220 140" aria-hidden="true"><rect x="24" y="20" width="78" height="100" rx="12" fill="#fb7185"/><rect x="34" y="32" width="58" height="40" rx="6" fill="#fff"/><rect x="34" y="80" width="40" height="6" rx="3" fill="#ffe4e6"/><rect x="34" y="92" width="28" height="6" rx="3" fill="#fecdd3"/><rect x="112" y="36" width="78" height="78" rx="14" fill="#0f172a"/><circle cx="136" cy="62" r="12" fill="#fbbf24"/><rect x="156" y="54" width="24" height="6" rx="3" fill="#fff"/><rect x="124" y="84" width="52" height="8" rx="3" fill="#38bdf8"/></svg>',
      ads: '<svg viewBox="0 0 220 140" aria-hidden="true"><rect x="20" y="30" width="110" height="80" rx="12" fill="#1d4ed8"/><rect x="32" y="42" width="70" height="10" rx="4" fill="#fff"/><rect x="32" y="60" width="86" height="6" rx="3" fill="#bfdbfe"/><rect x="32" y="74" width="54" height="6" rx="3" fill="#93c5fd"/><circle cx="158" cy="48" r="22" fill="#f97316"/><path fill="#fff" d="M150 48h16M158 40v16" stroke="#fff" stroke-width="3"/><rect x="140" y="80" width="62" height="28" rx="8" fill="#0f172a"/><rect x="150" y="90" width="42" height="8" rx="3" fill="#22c55e"/></svg>'
    };
    return arts[kind] || arts.corp;
  }

  function screenMarkup(item) {
    const brand = item.logo
      ? `<img src="${path(item.logo)}" alt="" data-mark="${escStage(item.name)}" width="120" height="32" loading="lazy" decoding="async">`
      : `<span>${escStage(item.name)}</span>`;
    const foot = `<div class="svc-ui__brand">${brand}</div>`;
    if (item.layout === 'store') {
      return `<div class="svc-ui svc-ui--store"><div class="svc-ui__bar"></div><div class="svc-ui__hero"></div><div class="svc-ui__tiles"><i></i><i></i><i></i><i></i></div>${foot}</div>`;
    }
    if (item.layout === 'panel') {
      return `<div class="svc-ui svc-ui--panel"><div class="svc-ui__bar"></div><div class="svc-ui__split"><b></b><div><i></i><i></i><i></i></div></div>${foot}</div>`;
    }
    if (item.layout === 'app') {
      return `<div class="svc-ui svc-ui--app"><div class="svc-ui__status"></div><div class="svc-ui__apps"><i></i><i></i><i></i></div><div class="svc-ui__list"><i></i><i></i><i></i></div>${foot}</div>`;
    }
    return `<div class="svc-ui svc-ui--corp"><div class="svc-ui__bar"></div><div class="svc-ui__lines"><i></i><i></i></div><div class="svc-ui__stats"><i></i><i></i><i></i></div>${foot}</div>`;
  }

  function phoneMarkup(item) {
    const href = stageHref(item.href);
    const ext = /^(https?:)/.test(item.href) ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a class="svc-phone svc-phone--${item.tone}" href="${href}"${ext} aria-label="${escStage(item.name)}">
      <span class="svc-phone__star">${starSvg()}</span>
      <span class="svc-phone__badge">SPECIAL</span>
      <div class="svc-phone__shell">
        <div class="svc-phone__screen">${screenMarkup(item)}</div>
        <div class="svc-phone__glyphs" aria-hidden="true"><i></i><i></i><i></i></div>
      </div>
    </a>`;
  }

  function stageHtml(block, samples, labels) {
    const dots = samples.map((item, i) => `<button type="button" class="svc-rail__dot" aria-label="${escStage(item.name)}" aria-selected="${i === 0 ? 'true' : 'false'}"></button>`).join('');
    const tags = (labels.tags || []).map(tag => `<span>${escStage(tag)}</span>`).join('');
    return `<div class="svc-stage" data-svc-mount="${block}">
      <div class="svc-stage__edge svc-stage__edge--top">${WAVE_TOP}</div>
      <div class="svc-stage__body">
        <div class="container svc-stage__head">
          <h3>${escStage(labels.title)}</h3>
          <p>${escStage(labels.lead)}</p>
          <a class="svc-stage__all" href="${path('pages/portfolio.html')}">${escStage(labels.all)}</a>
        </div>
        <div class="svc-rail" data-svc-rail>
          <button type="button" class="svc-rail__nav svc-rail__nav--prev" aria-label="${escStage(labels.prev)}">${chevronSvg()}</button>
          <div class="svc-rail__scroller">${samples.map(phoneMarkup).join('')}</div>
          <button type="button" class="svc-rail__nav svc-rail__nav--next" aria-label="${escStage(labels.next)}">${chevronSvg()}</button>
          <div class="svc-rail__dots" role="tablist">${dots}</div>
        </div>
        <div class="svc-stage__tags">${tags}</div>
      </div>
      <div class="svc-stage__edge svc-stage__edge--bottom">${WAVE_BOTTOM}</div>
    </div>`;
  }

  function offersHtml(offers) {
    if (!offers || !offers.length) return '';
    const cards = offers.map(offer => `<a class="svc-kind" href="${stageHref(offer.href)}">
      <span class="svc-kind__art">${artSvg(offer.art)}</span>
      <span class="svc-kind__copy">
        <strong class="svc-kind__title">${escStage(offer.title)}</strong>
        <span class="svc-kind__en" dir="ltr">${escStage(offer.en)}</span>
        <span class="svc-kind__sub">${escStage(offer.sub)}</span>
      </span>
      <span class="svc-kind__go" aria-hidden="true">${chevronSvg()}</span>
    </a>`).join('');
    return `<div class="svc-kinds" data-svc-mount><div class="container svc-kinds__grid">${cards}</div></div>`;
  }

  function closerHtml(closer) {
    if (!closer) return '';
    const contact = (C().contact && C().contact.channels && C().contact.channels[0]) || {};
    const tel = contact.tel || (C().contact && C().contact.phone) || '+989305880135';
    const display = contact.display || '+98 930 588 0135';
    return `<div class="svc-closer" data-svc-mount>
      <div class="container">
        <p class="svc-closer__kicker">${escStage(closer.kicker)}</p>
        <h3 class="svc-closer__title">${escStage(closer.title)}</h3>
        <div class="svc-closer__actions">
          <a class="svc-closer__phone" href="tel:${escStage(tel)}" dir="ltr">${escStage(display)}</a>
          <a class="svc-closer__consult" href="${path('pages/contact.html')}">${escStage(closer.consult)}</a>
        </div>
      </div>
    </div>`;
  }

  let stageResizeBound = false;

  function syncRail(rail) {
    const scroller = rail.querySelector('.svc-rail__scroller');
    if (!scroller) return;
    const overflow = scroller.scrollWidth - scroller.clientWidth > 12;
    rail.classList.toggle('is-static', !overflow);
  }

  function bindRail(rail) {
    const scroller = rail.querySelector('.svc-rail__scroller');
    const cards = [...scroller.querySelectorAll('.svc-phone')];
    const dots = [...rail.querySelectorAll('.svc-rail__dot')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = reduce ? 'auto' : 'smooth';

    function closestIndex() {
      const box = scroller.getBoundingClientRect();
      const mid = box.left + box.width / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      return best;
    }

    function paint() {
      const active = closestIndex();
      dots.forEach((dot, i) => dot.setAttribute('aria-selected', i === active ? 'true' : 'false'));
    }

    function center(index) {
      const card = cards[index];
      if (!card) return;
      const box = scroller.getBoundingClientRect();
      const rect = card.getBoundingClientRect();
      const delta = (rect.left + rect.width / 2) - (box.left + box.width / 2);
      scroller.scrollBy({ left: delta, behavior });
    }

    rail.querySelector('.svc-rail__nav--prev').addEventListener('click', () => {
      center(Math.max(0, closestIndex() - 1));
    });
    rail.querySelector('.svc-rail__nav--next').addEventListener('click', () => {
      center(Math.min(cards.length - 1, closestIndex() + 1));
    });
    dots.forEach((dot, i) => dot.addEventListener('click', () => center(i)));
    scroller.addEventListener('scroll', () => window.requestAnimationFrame(paint), { passive: true });
    rail.__sync = () => syncRail(rail);
    syncRail(rail);
    paint();
  }

  function mountStage(sectionId, key, samples, labels) {
    const section = document.getElementById(sectionId);
    if (!section || !labels) return;
    section.querySelectorAll('[data-svc-mount]').forEach(node => node.remove());
    const faq = section.querySelector(':scope > .field-tech-faq-section');
    const holder = document.createElement('div');
    holder.innerHTML = stageHtml(key, samples, labels) + offersHtml(labels.offers) + closerHtml(labels.closer);
    [...holder.childNodes].filter(node => node.nodeType === 1).forEach(node => {
      if (faq) section.insertBefore(node, faq);
      else section.appendChild(node);
    });
    section.querySelectorAll('[data-svc-rail]').forEach(bindRail);
    section.querySelectorAll('.svc-ui__brand img').forEach(img => {
      img.addEventListener('error', () => {
        const span = document.createElement('span');
        span.textContent = img.getAttribute('data-mark') || '';
        img.replaceWith(span);
      });
    });
  }

  function renderServiceStages() {
    const lang = String(document.documentElement.lang || 'fa').slice(0, 2);
    const copy = STAGE_COPY[lang] || STAGE_COPY.en;
    const nav = { prev: copy.prev, next: copy.next };
    mountStage('web-design', 'web', WEB_SAMPLES, Object.assign({}, copy.web, nav));
    mountStage('software-apps', 'apps', APP_SAMPLES, Object.assign({}, copy.apps, nav));
    mountStage('smm', 'smm', SMM_SAMPLES, Object.assign({}, copy.smm, nav));
    if (!stageResizeBound) {
      stageResizeBound = true;
      window.addEventListener('resize', () => {
        document.querySelectorAll('[data-svc-rail]').forEach(rail => {
          if (typeof rail.__sync === 'function') rail.__sync();
        });
      });
    }
  }

  window.initServicesPage = function () {
    redirectLegacyIndustrialHash();
    placeIntlSection();
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
    renderServiceStages();
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
