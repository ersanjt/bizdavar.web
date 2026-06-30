/**
 * Bizdavar — Content grids and landing sections
 * @requires BD_CTX (context.js)
 */
(function () {
  const ctx = window.BD_CTX;
  if (!ctx) return;
  const {
    C, R, A, path, t, ic, linkArrow, wa, currentPage,
    absUrl, breadcrumbHref, localizeCrumbs, buildContactPoints, orgAddress
  } = ctx;

  window.renderBlogGrid = function (containerId, limit) {

    const el = document.getElementById(containerId);

    if (!el || !C.blogPosts) return;

    const sourcePosts = window.BIZDAVAR_I18N?.getBlogPosts
      ? window.BIZDAVAR_I18N.getBlogPosts()
      : C.blogPosts;
    const posts = limit ? sourcePosts.slice(0, limit) : sourcePosts;

    el.innerHTML = posts.map(p => `

      <article class="blog-item">

        <span class="blog-item__cat">${p.category}</span>

        <h3><a href="${path(p.slug)}">${p.title}</a></h3>

        <p>${p.excerpt}</p>

        <a href="${path(p.slug)}" class="service-card__link">${t('common.readMore', 'ادامه مطلب')}${linkArrow()}</a>

      </article>

    `).join('');

  };



  window.renderPortfolioGrid = function (containerId) {

    const el = document.getElementById(containerId);

    if (!el || !C.portfolio) return;

    const portfolio = (window.BIZDAVAR_I18N?.getPortfolioItems
      ? window.BIZDAVAR_I18N.getPortfolioItems()
      : C.portfolio).filter(p => !p.archived);

    el.innerHTML = portfolio.map(p => {

      const url = window.getProjectUrl(p);

      const external = !p.internal;

      const logoHtml = p.logo
        ? `<div class="portfolio-card__logo"><img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="160" height="52"></div>`
        : `<div class="portfolio-card__logo portfolio-card__logo--text"><span>${p.name}</span></div>`;

      return `

        <article class="portfolio-card">

          ${logoHtml}

          <div class="portfolio-card__top">

            <h3>${p.name}</h3>

            <span class="portfolio-card__cat">${p.category}</span>

          </div>

          <p class="portfolio-card__domain" dir="ltr">${p.domain}</p>
          ${p.note ? `<p class="portfolio-card__note">${p.note}</p>` : ''}

          <a href="${url}" class="portfolio-card__link"

             ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

            ${external ? t('common.viewSite', 'مشاهده وبسایت') : t('common.viewPage', 'مشاهده صفحه')}${linkArrow()}

          </a>

        </article>`;

    }).join('');

  };



  window.renderClientsGrid = function (containerId, limit) {

    const el = document.getElementById(containerId);

    const partners = C.featuredPartners;

    if (!el || !partners) return;

    const showcase = partners.filter(p => p.role !== 'supplier');
    const items = limit ? showcase.slice(0, limit) : showcase;

    el.innerHTML = items.map(p => {

      const external = p.url.startsWith('http');
      const href = external ? p.url : path(p.url);

      const inner = p.logo
        ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" class="client-item__logo">`
        : `<span class="client-item__name">${p.name}</span>`;

      return `

        <a href="${href}" class="client-item client-item--link client-item--logo"

           ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}

           ${p.logo ? `title="${p.name}"` : ''}>

          ${inner}

        </a>`;

    }).join('');

  };

  window.renderGeoStrip = function (containerId, opts) {
    const el = document.getElementById(containerId);
    const g = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getGeo() : C.geo;
    if (!el || !g) return;
    let text = g.summaryFa || g.summary;
    if (opts && opts.textKey) {
      const localized = t(opts.textKey, null);
      if (localized) text = localized;
      else if (opts.text) text = opts.text;
    } else if (opts && opts.text) {
      text = opts.text;
    }
    const hubs = g.hubs || [];
    el.innerHTML = `
      <section class="geo-strip" aria-label="${t('common.geoAria', 'حوزه جغرافیایی خدمات')}">
        <div class="container geo-strip__inner">
          <div class="geo-strip__lead">
            <span class="geo-strip__eyebrow">${ic('globe', { size: 18 })} ${t('common.globalPresence', 'حضور جهانی')}</span>
            <p>${text}</p>
          </div>
          <ul class="geo-strip__hubs">
            ${hubs.map(h => `
              <li class="geo-strip__hub">
                <strong>${h.city}</strong>
                <span class="geo-strip__country">${h.country}</span>
                <span class="geo-strip__role">${h.role}</span>
              </li>`).join('')}
          </ul>
        </div>
      </section>`;
  };

  window.renderTrustBar = function (containerId) {

    const el = document.getElementById(containerId);

    const metrics = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getTrustMetrics() : C.trustMetrics;
    if (!el || !metrics || !metrics.length) return;

    el.innerHTML = `

      <section class="trust-bar" aria-label="${t('common.trustAria', 'شاخص‌های کلیدی بیزدوار')}">

        <div class="container">

          <ul class="trust-bar__grid">

            ${metrics.map(m => `

              <li class="trust-bar__item">

                <strong class="trust-bar__value">${m.value}</strong>

                <span class="trust-bar__label">${m.label}</span>

              </li>

            `).join('')}

          </ul>

        </div>

      </section>`;

  };



  window.renderCredibilitySection = function (containerId) {
    const I = window.BIZDAVAR_INTEL;
    const el = document.getElementById(containerId);
    if (!el || !I) return;
    const f = I.leadership.founder;
    const I18N = window.BIZDAVAR_I18N;
    const localizedHighlights = I18N && Array.isArray(I18N.raw('credibility.highlights'))
      ? I18N.raw('credibility.highlights')
      : I.socialProof.highlights;
    const foundedDisplay = t('credibility.foundedDisplay', I.identity.foundedDisplay);
    el.innerHTML = `
      <section class="section intel-section" aria-labelledby="cred-heading">
        <div class="container">
          <div class="section__header section__header--pro">
            <span class="section__eyebrow">${t('credibility.eyebrow')}</span>
            <h2 class="section__title" id="cred-heading">${t('credibility.title')}</h2>
            <p class="section__desc">${t('credibility.desc')}</p>
          </div>
          <div class="intel-stats">
            <div class="intel-stat"><strong>${f.projectsCount}</strong><span>${t('credibility.projects')}</span></div>
            <div class="intel-stat"><strong>${f.countriesCount}</strong><span>${t('credibility.countries')}</span></div>
            <div class="intel-stat"><strong>${f.experienceYears}</strong><span>${t('credibility.years')}</span></div>
            <div class="intel-stat"><strong>${foundedDisplay}</strong><span>${t('credibility.founded')}</span></div>
          </div>
          <div class="intel-proof-grid">
            ${localizedHighlights.map(h => `
              <article class="intel-proof-card">
                <span class="intel-proof-card__cat">${h.category}</span>
                <p>${h.text}</p>
                <footer><cite>${h.source}</cite> · ${h.year}</footer>
              </article>
            `).join('')}
          </div>
          <p class="intel-note text-center mt-24">${t('credibility.sources')}: <a href="${f.linkedin}" target="_blank" rel="noopener noreferrer me">${t('credibility.founderLinkedin')}</a> · <a href="${path(R.portfolio)}">${t('credibility.portfolio')}</a> · <a href="${path(R.about)}">${t('credibility.fullAbout')}</a></p>
        </div>
      </section>`;
  };

  window.renderCompanyIntelAbout = function () {
    const I = window.BIZDAVAR_INTEL;
    if (!I) return;
    const f = I.leadership.founder;

    const identityEl = document.getElementById('intelIdentity');
    if (identityEl) {
      identityEl.innerHTML = `
        <div class="intel-identity-grid">
          <dl class="intel-dl">
            <div><dt>نام رسمی</dt><dd>${I.identity.legalNameFa} (${I.identity.legalName})</dd></div>
            <div><dt>تأسیس</dt><dd>${I.identity.foundedDisplay}</dd></div>
            <div><dt>دامنه‌ها</dt><dd dir="ltr">${I.identity.domains.join(' · ')}</dd></div>
            <div><dt>زبان‌های خدمت</dt><dd>${I.identity.languages.join('، ')}</dd></div>
          </dl>
          <ul class="intel-hq-list">
            ${I.identity.headquarters.map(h => `
              <li><strong>${h.city}، ${h.country}</strong><span>${h.role}</span></li>
            `).join('')}
          </ul>
        </div>`;
    }

    const leaderEl = document.getElementById('intelLeader');
    if (leaderEl) {
      leaderEl.innerHTML = `
        <article class="intel-leader-card">
          <div class="intel-leader-card__head">
            <h3>${f.nameFa}</h3>
            <p>${f.titleFa} · ${f.experienceYears} سال · ${f.projectsCount} پروژه</p>
            <a href="${f.linkedin}" class="service-card__link" target="_blank" rel="noopener noreferrer me">پروفایل LinkedIn${linkArrow()}</a>
          </div>
          <p>${f.bioFa}</p>
          <div class="intel-tags">
            ${f.expertise.map(e => `<span class="intel-tag">${e}</span>`).join('')}
          </div>
          <h4>تحصیلات</h4>
          <ul class="intel-list">${f.education.map(e => `<li>${e}</li>`).join('')}</ul>
        </article>`;
    }

    const areasEl = document.getElementById('intelAreas');
    if (areasEl) {
      areasEl.innerHTML = I.activityAreas.map(a => `
        <div class="intel-area-card">
          <h3>${a.title}</h3>
          <ul>${a.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('');
    }

    const ecoEl = document.getElementById('intelEcosystem');
    if (ecoEl) {
      ecoEl.innerHTML = I.ecosystem.map(b => `
        <div class="intel-eco-card">
          <strong>${b.name}</strong>
          <span class="intel-eco-card__type">${b.type}</span>
          <p>${b.note}</p>
        </div>
      `).join('');
    }

    const presenceEl = document.getElementById('intelPresence');
    if (presenceEl && I.presence) {
      const P = I.presence;
      const regions = P.regions || [];

      presenceEl.innerHTML = `
        <div class="presence-showcase">
          <div class="presence-showcase__hero">
            <div class="presence-showcase__map">
              <img src="${path(P.mapImage || 'assets/images/content/presence-map.svg')}" alt="نقشه حضور جهانی بیزدوار — ۱۱ کشور" width="480" height="300" loading="lazy">
            </div>
            <div class="presence-showcase__intro">
              <p class="presence-showcase__desc">${P.summaryFa}</p>
              <div class="presence-stats">
                ${(P.stats || []).map(s => `
                  <div class="presence-stat">
                    <strong>${s.value}</strong>
                    <span>${s.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="presence-regions">
            ${regions.map(region => `
              <div class="presence-region">
                <h3 class="presence-region__title">${region.title}</h3>
                <div class="presence-country-grid">
                  ${region.countries.map(c => `
                    <article class="presence-country${c.hub ? ' presence-country--hub' : ''}">
                      <div class="presence-country__head">
                        <strong>${c.name}</strong>
                        ${c.hub ? '<span class="presence-country__badge">هاب</span>' : ''}
                      </div>
                      ${c.city ? `<span class="presence-country__city">${c.city}</span>` : ''}
                      <p class="presence-country__focus">${c.focus}</p>
                    </article>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    }

    const credEl = document.getElementById('intelCredentials');
    if (credEl) {
      credEl.innerHTML = I.credentials.map(c => `
        <div class="intel-cred-card">
          <strong>${c.name}</strong>
          <span>${c.issuer} — ${c.year}</span>
        </div>
      `).join('');
    }

    const proofEl = document.getElementById('intelSocialProof');
    if (proofEl) {
      proofEl.innerHTML = `
        <div class="intel-proof-grid">
          ${I.socialProof.highlights.map(h => `
            <article class="intel-proof-card">
              <span class="intel-proof-card__cat">${h.category}</span>
              <p>${h.text}</p>
              <footer><cite>${h.source}</cite></footer>
            </article>
          `).join('')}
        </div>
        <ul class="intel-trust-list">
          ${I.socialProof.trustSignals.map(s => `<li>${s}</li>`).join('')}
        </ul>`;
    }

    const faqEl = document.getElementById('intelFaq');
    if (faqEl) {
      faqEl.innerHTML = I.faqIntel.map(item => `
        <details class="faq-item">
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>
      `).join('');
    }
  };

  window.renderIndustrialSection = function (containerId) {

    const el = document.getElementById(containerId);

    const products = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getIndustrialProducts() : C.industrialProducts;

    if (!el || !products || !products.length) return;

    const accentClass = (a) => (a ? ` industrial-card--${a}` : '');

    const cards = products.map(p => {

      const href = p.internal ? path(p.url) : p.url;

      const external = !p.internal && p.url.startsWith('http');

      const tags = (p.tags || []).map(t => `<span class="industrial-card__tag">${t}</span>`).join('');

      return `

        <a href="${href}" class="industrial-card industrial-card--link${accentClass(p.accent)}"

           ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

          <div class="industrial-card__head">

            <div class="industrial-card__logo">
              ${p.logo
                ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="140" height="48">`
                : `<span class="industrial-card__logo-text">${p.name}</span>`}
            </div>

            ${p.badge ? `<span class="industrial-card__badge">${p.badge}</span>` : ''}

          </div>

          <h3 class="industrial-card__title">${p.title}</h3>

          <p class="industrial-card__desc">${p.desc}</p>

          ${tags ? `<div class="industrial-card__tags">${tags}</div>` : ''}

          <span class="industrial-card__cta">${p.cta || t('common.learnMore', 'بیشتر بدانید')}${linkArrow()}</span>

        </a>`;

    }).join('');

    el.innerHTML = `

      <section class="section section--gray landing-industrial" id="products" aria-labelledby="industrial-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('industrial.eyebrow')}</span>

            <h2 class="section__title" id="industrial-heading">${t('industrial.title')}</h2>

            <p class="section__desc">${t('industrial.desc')}</p>

          </div>

          <div class="industrial-grid">${cards}</div>

          <div class="industrial-cta-bar">

            <div class="industrial-cta-bar__content">

              <span class="industrial-cta-bar__icon" data-bd-icon="wrench" data-bd-size="28" aria-hidden="true"></span>

              <div>

                <strong>${t('industrial.ctaTitle')}</strong>

                <p>${t('industrial.ctaDesc')}</p>

              </div>

            </div>

            <div class="industrial-cta-bar__actions">

              <a href="${path(R.contact)}" class="btn btn--yellow">${t('industrial.ctaBtn')}</a>

              <a href="${path(R.services)}#industrial" class="btn btn--outline">${t('industrial.ctaLink')}</a>

            </div>

          </div>

        </div>

      </section>`;

  };



  window.renderProcessSection = function (containerId) {

    const el = document.getElementById(containerId);

    const steps = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getProcessSteps() : C.processSteps;
    if (!el || !steps || !steps.length) return;

    el.innerHTML = `

      <section class="section section--gray process-section" aria-labelledby="process-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('process.eyebrow')}</span>

            <h2 class="section__title" id="process-heading">${t('process.title')}</h2>

            <p class="section__desc">${t('process.desc')}</p>

          </div>

          <ol class="process-grid">

            ${steps.map(step => `

              <li class="process-step">

                <span class="process-step__num" aria-hidden="true">${step.num}</span>

                <h3 class="process-step__title">${step.title}</h3>

                <p class="process-step__desc">${step.desc}</p>

              </li>

            `).join('')}

          </ol>

        </div>

      </section>`;

  };
})();
