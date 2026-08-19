/**
 * Lead tracking — dataLayer + gtag so GA4 records events even before GTM tags exist.
 * Key events to mark in GA4 Admin: generate_lead, whatsapp_click, contact_submit.
 * WhatsApp/phone clicks are micro-conversions; form success is generate_lead.
 */
(function () {
  var GA4_ID = 'G-4GFEY12SLH';

  function pageId() {
    return document.body?.dataset?.page || '';
  }

  function locale() {
    return window.BIZDAVAR_I18N?.locale || document.documentElement.lang || '';
  }

  function ctx() {
    return {
      page_id: pageId(),
      locale: locale()
    };
  }

  function send(eventName, params) {
    var payload = Object.assign({ event: eventName }, params || {});
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, Object.assign({ send_to: GA4_ID }, params || {}));
    }
  }

  window.BD_trackLead = function (method, extra) {
    var base = Object.assign({
      event_category: 'lead',
      method: method
    }, ctx(), extra || {});
    send('generate_lead', base);
    if (method === 'contact_form' || method === 'whatsapp_form') {
      send('contact_submit', base);
    }
  };

  function bindClicks() {
    if (window.__bdLeadClicks) return;
    window.__bdLeadClicks = true;
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (/wa\.me\/|whatsapp\.com|api\.whatsapp/i.test(href)) {
        send('whatsapp_click', Object.assign({
          event_category: 'lead',
          method: 'whatsapp',
          link_url: href.split('?')[0]
        }, ctx()));
      } else if (/^tel:/i.test(href)) {
        send('phone_click', Object.assign({
          event_category: 'lead',
          method: 'phone',
          link_url: href.split('?')[0]
        }, ctx()));
      }
    }, true);
  }

  bindClicks();
  document.addEventListener('DOMContentLoaded', bindClicks);
})();
