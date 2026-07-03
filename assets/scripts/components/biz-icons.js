/**
 * Bizdavar — Custom Icon System
 * آیکون‌های SVG اختصاصی با هویت بصری برند (Navy + Yellow)
 */
(function () {
  const S = 'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  const A = 'fill="var(--yellow,#FFDE00)" stroke="none"';

  const ICONS = {
    home: `<path ${S} d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 01-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 014 19v-8.5z"/><circle cx="12" cy="10" r="1.5" ${A}/>`,
    info: `<circle cx="12" cy="12" r="9" ${S}/><path ${S} d="M12 11v5"/><circle cx="12" cy="8" r="1" ${A}/>`,
    list: `<path ${S} d="M5 7h14M5 12h14M5 17h14"/><circle cx="3" cy="7" r="1" ${A}/><circle cx="3" cy="12" r="1" ${A}/><circle cx="3" cy="17" r="1" ${A}/>`,
    briefcase: `<rect x="3" y="8" width="18" height="12" rx="2" ${S}/><path ${S} d="M9 8V6a3 3 0 013-3h0a3 3 0 013 3v2"/><path ${S} d="M3 13h18"/><rect x="10" y="12" width="4" height="2" rx="0.5" ${A}/>`,
    globe: `<circle cx="12" cy="12" r="9" ${S}/><path ${S} d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9c-2.5-2.8-4-6-4-9s1.5-6.2 4-9z"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    article: `<path ${S} d="M6 4h12v16H6z"/><path ${S} d="M9 8h6M9 12h6M9 16h4"/><rect x="8" y="7" width="2" height="2" rx="0.5" ${A}/>`,
    phone: `<path ${S} d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5L14 13l4 1.5v3a1.5 1.5 0 01-1.5 1.5A13 13 0 014 6A1.5 1.5 0 015.5 4.5z"/><circle cx="17" cy="7" r="1.5" ${A}/>`,
    whatsapp: `<path ${S} d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z"/><path ${S} d="M9.5 10.5c.4 1.2 1.5 2.8 3.2 3.5 1 .4 1.8.3 2.4-.2l.6-.6c.3-.3.2-.8-.2-1.1l-1-.7c-.4-.3-.9-.2-1.2.1l-.4.4c-.2.2-.5.2-.8 0-.8-.5-1.6-1.3-2-2.1-.1-.3 0-.5.2-.7l.4-.4c.3-.3.3-.8 0-1.2l-.7-1c-.3-.4-.8-.5-1.1-.2l-.6.6c-.5.6-.6 1.4-.2 2.4z"/>`,
    'whatsapp-solid': `<path fill="currentColor" stroke="none" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.55 4.03 1.51 5.73L2 22l4.5-1.18a9.86 9.86 0 005.54 1.69h.005c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm-.01 17.96h-.004a8.1 8.1 0 01-4.13-1.13l-.296-.176-3.05.8.815-2.975-.192-.305A8.07 8.07 0 014.2 11.9c0-4.45 3.62-8.07 8.07-8.07s8.07 3.62 8.07 8.07-3.62 8.06-8.08 8.06zm4.52-6.04c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.18-.72-.64-1.21-1.43-1.35-1.69-.14-.26-.02-.4.1-.52.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.29-.22.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.71 2.66 4.15 3.73.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.15-1.15-.05-.1-.22-.16-.46-.28z"/>`,
    mail: `<rect x="3" y="6" width="18" height="13" rx="2" ${S}/><path ${S} d="M3 8l9 6 9-6"/><circle cx="18" cy="8" r="1.5" ${A}/>`,
    clock: `<circle cx="12" cy="12" r="9" ${S}/><path ${S} d="M12 7v5l3 2"/><circle cx="12" cy="12" r="1" ${A}/>`,
    pin: `<path ${S} d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5" ${S}/><circle cx="12" cy="10" r="1" ${A}/>`,
    send: `<path ${S} d="M4 12l16-7-7 16-2-7-7-2z"/><circle cx="18" cy="6" r="1.5" ${A}/>`,
    menu: `<path ${S} d="M4 7h16M4 12h16M4 17h16"/><circle cx="2" cy="12" r="1" ${A}/>`,
    close: `<path ${S} d="M6 6l12 12M18 6L6 18"/><circle cx="12" cy="12" r="1" ${A}/>`,
    'arrow-up': `<path ${S} d="M12 19V5M6 11l6-6 6 6"/><circle cx="12" cy="5" r="1.5" ${A}/>`,
    'arrow-left': `<path ${S} d="M19 12H5M11 6l-6 6 6 6"/><circle cx="5" cy="12" r="1.5" ${A}/>`,
    'arrow-right': `<path ${S} d="M5 12h14M13 6l6 6-6 6"/><circle cx="19" cy="12" r="1.5" ${A}/>`,
    'external-link': `<path ${S} d="M14 5h5v5M10 14l9-9M15 9h-4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-4"/>`,
    bolt: `<path ${S} d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"/><circle cx="13" cy="6" r="1.5" ${A}/>`,
    wrench: `<path ${S} d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.2 2.2-1.4-1.4 2.2-2.2z"/><circle cx="16" cy="8" r="1.5" ${A}/>`,
    'chart-bar': `<path ${S} d="M4 19V5M4 19h16"/><rect x="7" y="12" width="3" height="7" rx="1" ${S}/><rect x="12" y="8" width="3" height="11" rx="1" ${S}/><rect x="17" y="5" width="3" height="14" rx="1" ${S}/><rect x="12" y="8" width="3" height="2" ${A}/>`,
    'chart-line': `<path ${S} d="M4 19h16M7 15l4-4 3 2 5-6"/><circle cx="19" cy="7" r="1.5" ${A}/>`,
    mobile: `<rect x="7" y="3" width="10" height="18" rx="2" ${S}/><path ${S} d="M10 18h4"/><circle cx="12" cy="8" r="1.5" ${A}/>`,
    gear: `<circle cx="12" cy="12" r="3" ${S}/><path ${S} d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/><circle cx="12" cy="12" r="1" ${A}/>`,
    target: `<circle cx="12" cy="12" r="9" ${S}/><circle cx="12" cy="12" r="5" ${S}/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    handshake: `<path ${S} d="M7 12l2 2 4-4 2 2 4-4"/><path ${S} d="M4 14l3 3M17 7l3 3"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    palette: `<path ${S} d="M12 3a9 9 0 109 9c0-1.5-1.2-2-2.5-2-.8 0-1.5.5-1.5 1.5 0 1-.8 1.5-1.8 1.5A4.5 4.5 0 017 9.5 4.5 4.5 0 0112 3z"/><circle cx="8.5" cy="9" r="1" ${A}/><circle cx="11" cy="7" r="1" fill="#E62833" stroke="none"/><circle cx="14" cy="8" r="1" fill="#3B82F6" stroke="none"/>`,
    coin: `<circle cx="12" cy="12" r="9" ${S}/><path ${S} d="M12 7v10M9 9.5h4a2 2 0 010 4H9"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    toolbox: `<path ${S} d="M3 10h18v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z"/><path ${S} d="M8 10V7a2 2 0 012-2h4a2 2 0 012 2v3"/><rect x="10" y="13" width="4" height="3" rx="0.5" ${A}/>`,
    'level-sensor': `<path ${S} d="M12 3v4M8 7h8"/><path ${S} d="M6 11c0 3.3 2.7 6 6 6s6-2.7 6-6"/><path ${S} d="M4 11h2M18 11h2M6 15h1M17 15h1"/><circle cx="12" cy="11" r="1.5" ${A}/>`,
    'level-point': `<rect x="10" y="4" width="4" height="16" rx="1" ${S}/><path ${S} d="M6 14h4M14 10h4"/><circle cx="12" cy="14" r="2" ${S}/><circle cx="12" cy="14" r="1" ${A}/>`,
    gauge: `<circle cx="12" cy="13" r="8" ${S}/><path ${S} d="M12 13V7"/><path ${S} d="M8 17l4-4 4 4"/><circle cx="12" cy="13" r="1.5" ${A}/>`,
    monitor: `<rect x="3" y="5" width="18" height="12" rx="2" ${S}/><path ${S} d="M8 21h8M12 17v4"/><path ${S} d="M7 9h10M7 12h6"/><circle cx="16" cy="9" r="1" ${A}/>`,
    sensor: `<circle cx="12" cy="12" r="3" ${S}/><path ${S} d="M12 3v2M12 19v2M3 12h2M19 12h2"/><path ${S} d="M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"/><circle cx="12" cy="12" r="1" ${A}/>`,
    bag: `<path ${S} d="M6 8h12l-1 13H7L6 8z"/><path ${S} d="M9 8V6a3 3 0 016 0v2"/><rect x="10" y="12" width="4" height="3" rx="0.5" ${A}/>`,
    flame: `<path ${S} d="M12 3c-2 4-5 5-5 9a5 5 0 1010 0c0-4-3-5-5-9z"/><circle cx="12" cy="14" r="1.5" ${A}/>`,
    desktop: `<rect x="3" y="5" width="18" height="11" rx="2" ${S}/><path ${S} d="M8 21h8M12 16v5"/><circle cx="12" cy="10" r="1.5" ${A}/>`,
    parking: `<rect x="4" y="4" width="16" height="16" rx="2" ${S}/><path ${S} d="M9 8h3.5a2.5 2.5 0 010 5H9V8z"/><circle cx="17" cy="7" r="1" ${A}/>`,
    lab: `<path ${S} d="M9 3h6v6l5 9a2 2 0 01-1.7 3H5.7a2 2 0 01-1.7-3l5-9V3z"/><path ${S} d="M9 9h6"/><circle cx="12" cy="15" r="1.5" ${A}/>`,
    flask: `<path ${S} d="M10 3h4v5l4.5 8.5a2 2 0 01-1.7 3h-9.6a2 2 0 01-1.7-3L10 8V3z"/><circle cx="12" cy="14" r="1.5" ${A}/>`,
    utensils: `<path ${S} d="M6 3v8a2 2 0 004 0V3M8 11v10"/><path ${S} d="M14 3v18M18 3v6a3 3 0 01-6 0V3"/><circle cx="14" cy="6" r="1" ${A}/>`,
    pill: `<rect x="6" y="9" width="12" height="6" rx="3" ${S}/><line x1="12" y1="9" x2="12" y2="15" ${S}/><circle cx="9" cy="12" r="1" ${A}/>`,
    droplet: `<path ${S} d="M12 3c-3 5-6 7-6 11a6 6 0 1012 0c0-4-3-6-6-11z"/><circle cx="12" cy="15" r="1.5" ${A}/>`,
    fish: `<path ${S} d="M4 12c2-3 5-5 8-5s6 2 8 5c-2 3-5 5-8 5s-6-2-8-5z"/><path ${S} d="M4 12l-2 2 2 2"/><circle cx="15" cy="11" r="1" ${A}/>`,
    crane: `<path ${S} d="M4 20h16M8 20V8h8v12"/><path ${S} d="M8 8h10l-2 4H8"/><circle cx="16" cy="8" r="1.5" ${A}/>`,
    leaf: `<path ${S} d="M12 21c-4-3-7-7-7-12 0 0 5 1 7-3 2 4 7 3 7 3-0 5-3 9-7 12z"/><path ${S} d="M12 21V9"/><circle cx="12" cy="12" r="1" ${A}/>`,
    pickaxe: `<path ${S} d="M4 20l6-6M14 6l4-4M10 10l4 4"/><path ${S} d="M16 4l4 4-2 2"/><circle cx="6" cy="18" r="1.5" ${A}/>`,
    barrel: `<ellipse cx="12" cy="6" rx="6" ry="2" ${S}/><path ${S} d="M6 6v12c0 1.1 2.7 2 6 2s6-.9 6-2V6"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    document: `<path ${S} d="M8 4h8l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"/><path ${S} d="M16 4v4h4"/><circle cx="11" cy="14" r="1" ${A}/>`,
    factory: `<path ${S} d="M3 20h18M6 20V10l4 3V8l4 3V6l4 3v11"/><path ${S} d="M10 14h1M14 11h1"/><circle cx="17" cy="10" r="1" ${A}/>`,
    ship: `<path ${S} d="M4 16l2-6h12l2 6-8 4-8-4z"/><path ${S} d="M12 6V4"/><circle cx="12" cy="14" r="1.5" ${A}/>`,
    recycle: `<path ${S} d="M7 8l3-5 3 2-2 3M17 10l-5 1 1-5 5 1M10 20l2-5 4 2-1 5"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    block: `<rect x="5" y="5" width="14" height="14" rx="1" ${S}/><path ${S} d="M5 12h14M12 5v14"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    snowflake: `<path ${S} d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/><circle cx="12" cy="12" r="1.5" ${A}/>`,
    battery: `<rect x="4" y="7" width="16" height="10" rx="2" ${S}/><path ${S} d="M22 11v2"/><rect x="7" y="10" width="8" height="4" rx="1" ${A}/>`,
    'gas-station': `<path ${S} d="M6 20V6a2 2 0 012-2h6a2 2 0 012 2v14"/><path ${S} d="M16 10h2l2 3v7h-4z"/><path ${S} d="M10 10h2v4h-2z"/><circle cx="10" cy="14" r="1" ${A}/>`
  };

  window.BD_ICON = function (name, opts = {}) {
    const svg = ICONS[name];
    if (!svg) return '';
    const size = opts.size || 24;
    const parts = ['bd-icon'];
    if (opts.class) parts.push(opts.class);
    if (opts.variant) parts.push(`bd-icon--${opts.variant}`);
    const aria = opts.label
      ? ` role="img" aria-label="${opts.label}"`
      : ' aria-hidden="true" focusable="false"';
    return `<svg class="${parts.join(' ')}" width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${aria}>${svg}</svg>`;
  };

  window.BD_LINK_ARROW = function () {
    return BD_ICON('arrow-left', { size: 14, class: 'bd-icon--inline' });
  };

  window.initDataIcons = function (root) {
    const scope = root || document;
    scope.querySelectorAll('[data-bd-icon]').forEach((el) => {
      const name = el.getAttribute('data-bd-icon');
      const size = parseInt(el.getAttribute('data-bd-size') || '24', 10);
      const variant = el.getAttribute('data-bd-variant') || '';
      const extra = el.getAttribute('data-bd-class') || '';
      el.innerHTML = BD_ICON(name, { size, variant, class: extra });
    });
    scope.querySelectorAll('.back-to-top').forEach((btn) => {
      if (!btn.querySelector('svg')) {
        btn.innerHTML = BD_ICON('arrow-up', { size: 20, variant: 'white' });
      }
    });
  };
})();
