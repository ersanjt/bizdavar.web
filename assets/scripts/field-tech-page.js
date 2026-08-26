/**
 * Field-tech dedicated landing page
 */
(function () {
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));
  const raw = (key) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined);
  const C = () => window.BIZDAVAR_CONFIG || {};

  function page() {
    return raw('fieldTechPage') || {};
  }

  function fieldCfg() {
    return C().fieldTech || {};
  }

  function waUrl() {
    const ft = fieldCfg();
    const num = ft.whatsapp || '989364115151';
    const msg = ft.whatsappMessage || t('servicesPage.fieldTech.waDefault', 'سلام، برای خدمات فنی از bizdavar.com پیام می‌دهم.');
    if (window.BD_CTX?.buildWaUrl) return window.BD_CTX.buildWaUrl(num, msg);
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  }

  function wireCtas() {
    const wa = waUrl();
    const tel = fieldCfg().tel || '+989364115151';
    document.querySelectorAll('[data-field-wa]').forEach(el => {
      el.setAttribute('href', wa);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
    document.querySelectorAll('[data-field-tel]').forEach(el => {
      el.setAttribute('href', `tel:${tel}`);
    });
  }

  function renderServices() {
    const el = document.getElementById('ftServices');
    if (!el) return;
    const items = page().services?.items || raw('servicesPage.fieldTech.panel') || [];
    el.innerHTML = items.map(item => `
      <article class="ft-service">
        <span class="ft-service__icon" aria-hidden="true">${ic(item.icon || 'check', { size: 22 })}</span>
        <h3>${item.title || ''}</h3>
        <p>${item.desc || ''}</p>
      </article>
    `).join('');
  }

  function renderCities() {
    const el = document.getElementById('ftCities');
    if (!el) return;
    const items = page().cities?.items || [];
    el.innerHTML = items.map(item => `
      <article class="ft-city">
        <h3>${item.title || ''}</h3>
        <p>${item.body || ''}</p>
      </article>
    `).join('');
  }

  function renderSteps() {
    const el = document.getElementById('ftSteps');
    if (!el) return;
    const steps = page().process?.steps || [];
    el.innerHTML = steps.map(step => `
      <article class="ft-step">
        <h3>${step.title || ''}</h3>
        <p>${step.desc || ''}</p>
      </article>
    `).join('');
  }

  function renderFaq() {
    const el = document.getElementById('ftFaq');
    if (!el) return;
    const items = page().faq?.items || raw('servicesPage.fieldTech.faq') || [];
    if (!items.length) {
      el.hidden = true;
      return;
    }
    const phoneRe = /(\+98[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4})/g;
    el.innerHTML = `<div class="ft-faq">${items.map((item, i) => {
      const answer = String(item.a || '').replace(phoneRe, '<span dir="ltr" class="ft-phone">$1</span>');
      return `<details${i === 0 ? ' open' : ''}>
        <summary>${item.q || ''}</summary>
        <div class="ft-faq__body">${answer}</div>
      </details>`;
    }).join('')}</div>`;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-field-tech-faq', ld);
    }
  }

  function injectServiceSchema() {
    const ft = fieldCfg();
    const hero = page().hero || {};
    const base = C().baseUrl || 'https://bizdavar.com';
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: hero.title || 'Technical field services',
      description: hero.lead || '',
      provider: {
        '@type': 'Organization',
        name: C().siteNameEn || 'Bizdavar Group',
        url: base
      },
      areaServed: [
        { '@type': 'City', name: 'Tabriz', containedInPlace: { '@type': 'Country', name: 'Iran' } }
      ],
      serviceType: ['CCTV installation', 'Building wiring', 'Cove lighting'],
      url: `${base}/pages/field-tech`,
      telephone: ft.tel || '+989364115151',
      image: `${base}/assets/images/content/field-tech-hero.svg`
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-field-tech-service', ld);
    }

    const contactLd = {
      '@context': 'https://schema.org',
      '@type': 'ContactPoint',
      contactType: 'technical support',
      telephone: ft.tel || '+989364115151',
      availableLanguage: ['fa', 'tr', 'en', 'ru', 'ar'],
      areaServed: [
        { '@type': 'City', name: 'Tabriz' }
      ]
    };
    if (typeof window.injectJsonLd === 'function') {
      window.injectJsonLd('jsonld-field-tech-contact', contactLd);
    }
  }

  function applyStaticCopy() {
    const p = page();
    const setText = (sel, value) => {
      const el = document.querySelector(sel);
      if (el && value) el.textContent = value;
    };
    setText('[data-ft="hero-eyebrow"]', p.hero?.eyebrow);
    setText('[data-ft="hero-title"]', p.hero?.title);
    setText('[data-ft="hero-lead"]', p.hero?.lead);
    setText('[data-ft="services-eyebrow"]', p.services?.eyebrow);
    setText('[data-ft="services-title"]', p.services?.title);
    setText('[data-ft="services-desc"]', p.services?.desc);
    setText('[data-ft="cities-eyebrow"]', p.cities?.eyebrow);
    setText('[data-ft="cities-title"]', p.cities?.title);
    setText('[data-ft="cities-desc"]', p.cities?.desc);
    setText('[data-ft="process-eyebrow"]', p.process?.eyebrow);
    setText('[data-ft="process-title"]', p.process?.title);
    setText('[data-ft="process-desc"]', p.process?.desc);
    setText('[data-ft="contact-title"]', p.contact?.title);
    setText('[data-ft="contact-desc"]', p.contact?.desc);
    setText('[data-ft="faq-eyebrow"]', p.faq?.eyebrow);
    setText('[data-ft="faq-title"]', p.faq?.title);

    const chips = document.getElementById('ftChips');
    if (chips && Array.isArray(p.hero?.chips)) {
      chips.innerHTML = p.hero.chips.map(c => `<li>${c}</li>`).join('');
    }

    document.querySelectorAll('[data-ft="wa-cta"]').forEach(el => {
      if (p.contact?.waCta || p.hero?.waCta) el.textContent = p.contact?.waCta || p.hero.waCta;
    });
    document.querySelectorAll('[data-ft="call-cta"]').forEach(el => {
      if (p.contact?.callCta || p.hero?.callCta) el.textContent = p.contact?.callCta || p.hero.callCta;
    });

    const img = document.getElementById('ftHeroImg');
    if (img && p.hero?.imgAlt) {
      img.setAttribute('aria-label', p.hero.imgAlt);
    }

    const phone = document.getElementById('ftPhoneLabel');
    const display = t('servicesPage.fieldTech.waHint', fieldCfg().phoneDisplay || '+98 936 411 5151');
    if (phone) phone.textContent = display;
  }

  window.initFieldTechPage = function () {
    applyStaticCopy();
    renderServices();
    renderCities();
    renderSteps();
    renderFaq();
    wireCtas();
    injectServiceSchema();
  };
})();
