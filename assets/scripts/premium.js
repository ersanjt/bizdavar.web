/**
 * Bizdavar — Premium UI interactions
 * Scroll reveal, header glass, stat counters
 */
(function () {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    const sync = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }

  function parseStatValue(text) {
    const raw = String(text || '').trim();
    const prefix = raw.match(/^[^\d]*/)?.[0] || '';
    const suffix = raw.match(/[^\d]*$/)?.[0] || '';
    const num = parseFloat(raw.replace(/[^\d.]/g, ''));
    if (Number.isNaN(num)) return null;
    const isPersian = /[۰-۹]/.test(raw);
    return { num, prefix, suffix, isPersian, raw };
  }

  function formatStat(val, parsed) {
    if (parsed.isPersian) {
      return parsed.prefix + String(Math.round(val)).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) + parsed.suffix;
    }
    const decimals = parsed.raw.includes('.') ? 1 : 0;
    return parsed.prefix + val.toFixed(decimals) + parsed.suffix;
  }

  function animateCounter(el) {
    if (el.dataset.counted === '1') return;
    const parsed = parseStatValue(el.textContent);
    if (!parsed || parsed.num <= 0) return;

    el.dataset.counted = '1';
    if (REDUCED) return;

    const duration = 1200;
    const start = performance.now();
    const target = parsed.num;

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formatStat(target * eased, parsed);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = parsed.raw;
    }

    requestAnimationFrame(tick);
  }

  function initCounters() {
    document.querySelectorAll('.stat__number, .trust-bar__value').forEach(el => {
      if (parseStatValue(el.textContent)) {
        animateCounter(el);
      }
    });
  }

  function markRevealTargets() {
    const selectors = [
      '.trust-bar',
      '.features-grid .feature-item',
      '.services-grid .service-card',
      '.process-step',
      '.client-item',
      '.blog-card',
      '.faq-item',
      '.fast-promo',
      '.about-grid',
      '.cta-card',
      '.section__header',
      '.credibility-grid > *',
      '.industrial-card'
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (el.classList.contains('reveal')) return;
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', `${Math.min(i * 60, 360)}ms`);
      });
    });
  }

  function initReveal() {
    markRevealTargets();

    if (REDUCED) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);

          entry.target.querySelectorAll('.stat__number, .trust-bar__value').forEach(animateCounter);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    document.querySelectorAll('.landing-hero .stat__number').forEach(el => {
      setTimeout(() => animateCounter(el), 600);
    });
  }

  function boot() {
    document.documentElement.classList.add('premium-ui');
    initHeaderScroll();
    initReveal();
    initCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  document.addEventListener('bizdavar:locale', () => {
    document.querySelectorAll('[data-counted]').forEach(el => {
      delete el.dataset.counted;
    });
    initCounters();
  });

  window.initPremiumUI = boot;
})();
