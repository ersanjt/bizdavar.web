/**
 * BizSwap product page — render capability cards from i18n
 */
(function () {
  function raw(key) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
  }

  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderList(id, items) {
    const el = document.getElementById(id);
    if (!el || !Array.isArray(items)) return;
    el.innerHTML = items.map(i => `<li>${typeof i === 'string' ? i : esc(i)}</li>`).join('');
  }

  function iconHtml(name, size = 28) {
    return window.BD_ICON ? window.BD_ICON(name, { size }) : '';
  }

  window.initBizswapPage = function () {
    const cs = raw('caseStudy.bizswap');
    if (!cs) return;

    renderList('bizswapSpecs', cs.about?.specs);
    renderList('bizswapAdmin', cs.admin?.items);
    renderList('bizswapUseCases', cs.useCases);

    const caps = document.getElementById('bizswapCapabilities');
    if (caps && Array.isArray(cs.capabilities?.items)) {
      caps.innerHTML = cs.capabilities.items.map(item => `
        <article class="bizswap-cap">
          <div class="bizswap-cap__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`).join('');
    }

    const flow = document.getElementById('bizswapFlow');
    if (flow && Array.isArray(cs.flow?.steps)) {
      flow.innerHTML = cs.flow.steps.map((step, i) => `
        <div class="bizswap-flow__step">
          <span class="bizswap-flow__num">${i + 1}</span>
          <h3>${esc(step.title)}</h3>
          <p>${esc(step.desc)}</p>
        </div>`).join('');
    }
  };
})();
