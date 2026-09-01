/**
 * Lead conversion — floating WhatsApp FAB, GTM events, click tracking.
 */
(function () {
  var C = window.BIZDAVAR_CONFIG || {};
  var lc = C.leadCapture || { fabEnabled: true, trackGtm: true };

  function t(key, fb) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : fb;
  }

  function locale() {
    return window.BIZDAVAR_I18N?.locale || document.documentElement.lang || 'fa';
  }

  function pushEvent(name, params) {
    if (!lc.trackGtm) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }

  window.bizdavarTrackLead = function (action, detail) {
    pushEvent('bizdavar_lead', Object.assign({ lead_action: action, page_path: location.pathname, locale: locale() }, detail || {}));
  };

  function waUrl(message) {
    var channels = window.BD_CTX?.getWhatsappChannels?.() || C.contact?.channels || [];
    var lang = locale();
    var preferTr = lang === 'tr';
    var preferEn = lang === 'en' || lang === 'ru' || lang === 'ar';
    var ch = channels.find(function (c) {
      if (preferTr && c.id === 'tr') return true;
      if (preferEn && c.id === 'tr') return true;
      return c.primary || c.id === 'ir';
    }) || channels[0];
    var num = ch?.whatsapp || C.contact?.whatsapp;
    var msg = message || ch?.whatsappMessage || C.contact?.whatsappMessage || '';
    if (window.BD_CTX?.buildWaUrl) return window.BD_CTX.buildWaUrl(num, msg);
    return 'https://wa.me/' + num + (msg ? '?text=' + encodeURIComponent(msg) : '');
  }

  function pageLeadMessage() {
    var page = document.body.dataset.page || '';
    var map = {
      vega: t('conversions.waVega', 'سلام، درخواست استعلام سنسور VEGA از bizdavar.com'),
      uwt: t('conversions.waUwt', 'سلام، درخواست استعلام سنسور UWT از bizdavar.com'),
      prosense: t('conversions.waProsense', 'سلام، درخواست استعلام Prosense از bizdavar.com'),
      fast: t('conversions.waFast', 'سلام، می‌خواهم درباره Fast Web Studio (طراحی سایت) مشاوره بگیرم — bizdavar.com'),
      liquiMoly: t('conversions.waLiqui', 'سلام، درخواست قیمت Liqui Moly از bizdavar.com'),
      gamak: t('conversions.waGamak', 'سلام، درخواست استعلام موتور Gamak از bizdavar.com'),
      fxguard: t('conversions.waFxguard', 'سلام، می‌خواهم دمو FXGuard CRM را ببینم — bizdavar.com'),
      contact: t('conversions.waContact', C.contact?.whatsappMessage || 'سلام، از bizdavar.com پیام می‌دهم.')
    };
    return map[page] || t('conversions.waDefault', C.contact?.whatsappMessage || 'سلام، از bizdavar.com پیام می‌دهم.');
  }

  function mountFab() {
    if (!lc.fabEnabled || document.body.dataset.page === 'contact') return;
    if (document.getElementById('bizdavarWaFab')) return;

    var fab = document.createElement('a');
    fab.id = 'bizdavarWaFab';
    fab.className = 'wa-fab';
    fab.href = waUrl(pageLeadMessage());
    fab.target = '_blank';
    fab.rel = 'noopener noreferrer';
    fab.setAttribute('aria-label', t('conversions.fabAria', 'مشاوره رایگان در واتساپ'));
    fab.innerHTML = '<span class="wa-fab__icon" aria-hidden="true"></span><span class="wa-fab__label">' +
      t('conversions.fabLabel', 'مشاوره رایگان') + '</span>';

    fab.addEventListener('click', function () {
      window.bizdavarTrackLead('whatsapp_fab', { fab: true });
    });

    document.body.appendChild(fab);
  }

  function bindClickTracking() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (/wa\.me|api\.whatsapp|whatsapp\.com/i.test(href)) {
        window.bizdavarTrackLead('whatsapp_click', { link_text: (a.textContent || '').trim().slice(0, 80) });
        return;
      }
      if (href.indexOf('tel:') === 0) {
        window.bizdavarTrackLead('phone_click', { phone: href.replace('tel:', '') });
        return;
      }
      if (href.indexOf('mailto:') === 0) {
        window.bizdavarTrackLead('email_click', { email: href.replace('mailto:', '') });
      }
    }, true);
  }

  function refreshFabLocale() {
    var fab = document.getElementById('bizdavarWaFab');
    if (!fab) return;
    fab.href = waUrl(pageLeadMessage());
    fab.setAttribute('aria-label', t('conversions.fabAria', 'مشاوره رایگان در واتساپ'));
    var lbl = fab.querySelector('.wa-fab__label');
    if (lbl) lbl.textContent = t('conversions.fabLabel', 'مشاوره رایگان');
  }

  function init() {
    mountFab();
    bindClickTracking();
    document.addEventListener('bizdavar:locale', refreshFabLocale);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('bizdavar:locale', function () {
    if (!document.getElementById('bizdavarWaFab')) mountFab();
  });
})();
