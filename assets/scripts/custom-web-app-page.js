/**
 * Custom web & app landing — content from customWebAppPage i18n
 */
(function () {
  function raw(key) {
    if (window.BIZDAVAR_I18N) {
      const v = window.BIZDAVAR_I18N.raw(key);
      if (v != null) return v;
    }
    return undefined;
  }

  function ic(name, size) {
    try {
      return window.BD_ICON ? window.BD_ICON(name, { size: size || 28 }) : '';
    } catch (e) {
      return '';
    }
  }

  function waHref() {
    const msg = 'سلام، برای طراحی وب / اپلیکیشن اختصاصی مشاوره می‌خوام';
    if (window.getWhatsappUrl) return window.getWhatsappUrl(msg);
    return (window.resolvePath ? window.resolvePath('pages/contact.html') : '/pages/contact') + '?service=custom-dev';
  }

  window.initCustomWebAppPage = function () {
    const page = raw('customWebAppPage') || {};
    const whenEl = document.getElementById('cwaWhen');
    if (whenEl && Array.isArray(page.when?.items)) {
      whenEl.innerHTML = page.when.items.map(item => `
        <article class="fast-speed-card">
          <span class="fast-speed-card__icon" aria-hidden="true">${ic(item.icon)}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>`).join('');
    }

    const svcEl = document.getElementById('cwaServices');
    if (svcEl && Array.isArray(page.services?.items)) {
      svcEl.innerHTML = page.services.items.map(item => `
        <article class="fast-deliverable">
          <span class="fast-deliverable__icon" aria-hidden="true">${ic(item.icon, 26)}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>`).join('');
    }

    const procEl = document.getElementById('cwaProcess');
    if (procEl && Array.isArray(page.process?.items)) {
      procEl.innerHTML = page.process.items.map(item => `
        <div class="fast-step">
          <span class="fast-step__num">${item.num}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>`).join('');
    }

    [document.getElementById('cwaWa'), document.getElementById('cwaWa2')].forEach(a => {
      if (!a) return;
      a.href = waHref();
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });

    if (window.initDataIcons) initDataIcons(document.getElementById('main-content'));
  };
})();
