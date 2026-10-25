/**
 * BizHub Admin SPA
 */
(function () {
  const API = '/api';
  const STATUS_LABELS = {
    new: 'جدید',
    contacted: 'تماس گرفته',
    qualified: 'واجد شرایط',
    proposal: 'پیشنهاد',
    won: 'موفق',
    lost: 'از دست رفته'
  };
  const LOCALE_LABELS = { fa: 'فارسی', tr: 'ترکی', en: 'انگلیسی', ru: 'روسی', ar: 'عربی' };
  const ROLE_LABELS = { admin: 'مدیر', editor: 'ویرایشگر', sales: 'فروش', partner: 'بازاریاب' };
  const AREA_LABELS = {
    company: 'شرکت',
    services: 'خدمات',
    articles: 'مقالات',
    supply: 'تامین و برندها',
    catalog: 'موتور و خودرو',
    tools: 'ابزارها'
  };
  const SECTION_LABELS = {
    motorcycle: 'موتورسیکلت', articles: 'مقالات', home: 'خانه', about: 'درباره ما',
    contact: 'تماس', services: 'خدمات', products: 'محصولات', tools: 'ابزارها',
    blog: 'وبلاگ', shop: 'فروشگاه', fast: 'Fast', fxguard: 'FXGuard'
  };
  const sectionLabel = (s) => SECTION_LABELS[s] || s;

  let state = {
    user: null,
    csrfToken: '',
    view: 'dashboard',
    leads: [],
    posts: [],
    faqs: [],
    stats: null,
    activity: null,
    leadFilter: '',
    leadSearch: '',
    selectedLead: null,
    pageRows: [],
    pageTotal: 0,
    pageOffset: 0,
    pageSearch: '',
    pageSection: '',
    pageArea: '',
    pageLocale: '',
    partnerHome: null,
    partnerFlash: null,
    partners: [],
    prices: [],
    orders: [],
    tickets: [],
    openTicket: null,
    ticketThread: null,
    commerce: null,
    inbox: [],
    docs: [],
    docKind: 'proforma',
    openDoc: null,
    docRecord: null,
    docDraft: null,
    purchases: [],
    openOrder: null,
    orderThread: null,
    compose: null,
    priceEdit: null,
    notices: { total: 0, counts: {}, items: [] },
    noticeTimer: 0
  };
  const DOC_LABELS = {
    draft: 'پیش‌نویس', sent: 'ارسال شده', accepted: 'پذیرفته', rejected: 'رد شده',
    issued: 'صادر شده', paid: 'پرداخت شده', void: 'باطل'
  };
  const BUY_LABELS = { planned: 'برنامه‌ریزی', ordered: 'سفارش خرید', received: 'رسیده', cancelled: 'لغو' };
  const ORDER_LABELS = { new: 'جدید', quoted: 'قیمت داده شد', accepted: 'پذیرفته', rejected: 'رد شد', done: 'انجام شد' };
  const TICKET_LABELS = { open: 'باز', answered: 'پاسخ داده شد', closed: 'بسته' };
  const isPartnerUser = () => state.user?.role === 'partner';

  const app = document.getElementById('app');

  async function api(path, opts = {}) {
    const method = (opts.method || 'GET').toUpperCase();
    const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
    if (state.csrfToken && !['GET', 'HEAD', 'OPTIONS'].includes(method)) {
      headers['X-CSRF-Token'] = state.csrfToken;
    }
    const res = await fetch(API + path, {
      credentials: 'include',
      headers,
      ...opts,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
    const data = await res.json().catch(() => ({}));
    if (data.csrfToken) state.csrfToken = data.csrfToken;
    if (!res.ok) {
      const err = new Error(data.error || res.statusText);
      err.payload = data;
      throw err;
    }
    return data;
  }

  async function apiForm(path, formData) {
    const headers = {};
    if (state.csrfToken) headers['X-CSRF-Token'] = state.csrfToken;
    const res = await fetch(API + path, { method: 'POST', credentials: 'include', headers, body: formData });
    const data = await res.json().catch(() => ({}));
    if (data.csrfToken) state.csrfToken = data.csrfToken;
    if (!res.ok) throw new Error(data.error || res.statusText);
    return data;
  }

  async function uploadOrderFiles(orderId, form) {
    const input = form.querySelector('input[type="file"]');
    const files = [...(input?.files || [])].filter(file => file && file.size > 0);
    if (!files.length) return;
    const body = new FormData();
    files.forEach(file => body.append('files[]', file));
    await apiForm('/orders/' + orderId + '/files', body);
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s ?? '';
    return d.innerHTML;
  }

  function fmtDate(s) {
    if (!s) return '—';
    try {
      return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(s));
    } catch {
      return s;
    }
  }

  function badge(status) {
    return `<span class="hub-badge hub-badge--${esc(status)}">${esc(STATUS_LABELS[status] || status)}</span>`;
  }

  async function enterHub(r) {
    if (r.csrfToken) state.csrfToken = r.csrfToken;
    if (r.mfaRequired) {
      renderLogin(null, 'mfa');
      return;
    }
    if (r.mfaEnroll) {
      await startEnroll();
      return;
    }
    state.user = r.user;
    if (isPartnerUser()) state.view = 'desk';
    else await loadDashboard();
    try { state.notices = await api('/notices'); } catch { state.notices = { total: 0, counts: {}, items: [] }; }
    if (state.noticeTimer) clearInterval(state.noticeTimer);
    state.noticeTimer = setInterval(() => { refreshNotices(); }, 45000);
    renderShell();
  }

  const NOTICE_LABELS = { ticket: 'تیکت', order: 'سفارش', omsg: 'پیام سفارش', purchase: 'خرید', lead: 'سرنخ', doc: 'سند' };

  function isFresh(kind, id) {
    return (state.notices?.items || []).some(item => item.kind === kind && String(item.id) === String(id));
  }

  function freshPill(kind, id) {
    return isFresh(kind, id) ? '<span class="hub-pill">تازه</span>' : '';
  }

  function noticeBadge(view) {
    const n = view === 'total' ? Number(state.notices?.total || 0) : Number(state.notices?.counts?.[view] || 0);
    return `<span class="hub-count" data-badge="${view}"${n ? '' : ' hidden'}>${n || ''}</span>`;
  }

  function noticeListHtml() {
    const items = state.notices?.items || [];
    if (!items.length) {
      return '<p class="hub-hint hub-hint--in">چیز تازه‌ای نیست. تیکت، سفارش، خرید و سرنخ جدید اینجا می‌آید.</p>';
    }
    return items.map(item => `<button type="button" class="hub-notice" data-notice="${esc(item.key)}" data-kind="${esc(item.kind)}" data-id="${item.id}">
      <span class="hub-pill">${esc(NOTICE_LABELS[item.kind] || item.kind)}</span>
      <strong>${esc(item.title)}</strong>
      <span>${esc(item.body || '')}</span>
      <time>${fmtDate(item.at)}</time>
    </button>`).join('');
  }

  async function refreshNotices() {
    try {
      state.notices = await api('/notices');
    } catch {
      return;
    }
    paintNotices();
  }

  function paintNotices() {
    document.querySelectorAll('[data-badge]').forEach(el => {
      const n = el.dataset.badge === 'total'
        ? Number(state.notices?.total || 0)
        : Number(state.notices?.counts?.[el.dataset.badge] || 0);
      el.hidden = n < 1;
      el.textContent = n > 0 ? String(n) : '';
    });
    const list = document.querySelector('.hub-notices__list');
    if (list) {
      list.innerHTML = noticeListHtml();
      bindNoticeClicks();
    }
  }

  function bindNoticeClicks() {
    document.querySelectorAll('[data-notice]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const kind = btn.dataset.kind;
        const id = btn.dataset.id;
        try { state.notices = await api('/notices/read', { method: 'POST', body: { keys: [btn.dataset.notice] } }); } catch { /* keep going */ }
        document.getElementById('noticePanel').hidden = true;
        if (kind === 'ticket') { state.view = 'tickets'; state.openTicket = id; }
        else if (kind === 'order' || kind === 'omsg') { state.view = 'orders'; state.openOrder = id; }
        else if (kind === 'purchase') state.view = 'purchases';
        else if (kind === 'lead') state.view = 'leads';
        else if (kind === 'doc') { state.view = 'docs'; state.openDoc = id; }
        renderShell();
      });
    });
  }

  async function markFresh(kind, id) {
    const keys = (state.notices?.items || []).filter(item => item.kind === kind && String(item.id) === String(id)).map(item => item.key);
    if (!keys.length) return;
    try { state.notices = await api('/notices/read', { method: 'POST', body: { keys } }); } catch { return; }
    paintNotices();
  }

  async function startEnroll() {
    try {
      const r = await api('/auth/mfa/setup');
      if (r.csrfToken) state.csrfToken = r.csrfToken;
      renderEnroll(r);
    } catch (err) {
      renderLogin(err.message);
    }
  }

  function renderEnroll(data) {
    app.innerHTML = `
      <div class="hub-login">
        <div class="hub-login__card">
          <div class="hub-login__brand">
            <h1>فعال‌سازی MFA</h1>
            <p>Google Authenticator یا برنامه مشابه</p>
          </div>
          <p class="hub-muted">کد را با دوربین Authenticator اسکن کنید، سپس کد ۶رقمی را وارد کنید.</p>
          <div class="hub-qr" id="hubQr" role="img" aria-label="کد QR برای Authenticator"></div>
          <p class="hub-secret-label">اگر اسکن نشد، این کلید را دستی وارد کنید</p>
          <p class="hub-secret" dir="ltr">${esc(data.secret || '')}</p>
          <form id="enrollForm">
            <div class="hub-field">
              <label for="mfaCode">کد یک‌بارمصرف</label>
              <input id="mfaCode" name="code" inputmode="numeric" autocomplete="one-time-code" required maxlength="8" dir="ltr">
            </div>
            <button type="submit" class="hub-btn hub-btn--primary">تأیید و ورود</button>
          </form>
        </div>
      </div>`;
    const qrBox = document.getElementById('hubQr');
    try {
      const qr = qrcode(0, 'M');
      qr.addData(data.otpauth || '');
      qr.make();
      qrBox.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 8, scalable: true });
    } catch (err) {
      qrBox.remove();
    }
    document.getElementById('enrollForm').addEventListener('submit', async e => {
      e.preventDefault();
      try {
        const r = await api('/auth/mfa/enable', {
          method: 'POST',
          body: { code: document.getElementById('mfaCode').value }
        });
        await enterHub({ ...r, mfaEnroll: false });
      } catch (err) {
        renderLogin(err.message, 'enroll-retry');
        startEnroll();
      }
    });
  }

  // ─── Login ───
  function renderLogin(err, mode, notice) {
    const mfa = mode === 'mfa';
    app.innerHTML = `
      <div class="hub-login">
        <div class="hub-login__card">
          <div class="hub-login__brand">
            <h1>BizHub</h1>
            <p>${mfa ? 'کد Authenticator' : 'CRM & CMS — Bizdavar Group'}</p>
          </div>
          ${notice ? `<p class="hub-muted">${esc(notice)}</p>` : ''}
          ${err ? `<div class="hub-error">${esc(err)}</div>` : ''}
          <form id="loginForm">
            ${mfa ? `
            <div class="hub-field">
              <label for="mfaCode">کد یک‌بارمصرف</label>
              <input id="mfaCode" name="code" inputmode="numeric" autocomplete="one-time-code" required maxlength="8" dir="ltr">
            </div>` : `
            <div class="hub-field">
              <label for="email">ایمیل</label>
              <input type="email" id="email" name="email" required autocomplete="username" dir="ltr">
            </div>
            <div class="hub-field">
              <label for="password">رمز عبور</label>
              <input type="password" id="password" name="password" required autocomplete="current-password">
            </div>`}
            <button type="submit" class="hub-btn hub-btn--primary">${mfa ? 'تأیید MFA' : 'ورود'}</button>
            ${mfa ? '' : '<button type="button" class="hub-btn hub-btn--ghost" id="forgotBtn">رمز را فراموش کرده‌ام</button>'}
          </form>
        </div>
      </div>`;
    document.getElementById('loginForm').addEventListener('submit', async e => {
      e.preventDefault();
      try {
        if (mfa) {
          const r = await api('/auth/mfa/verify', {
            method: 'POST',
            body: { code: document.getElementById('mfaCode').value }
          });
          await enterHub(r);
          return;
        }
        const fd = new FormData(e.target);
        const r = await api('/auth/login', {
          method: 'POST',
          body: { email: fd.get('email'), password: fd.get('password') }
        });
        await enterHub(r);
      } catch (err) {
        renderLogin(err.message, mfa ? 'mfa' : undefined);
      }
    });
    const forgotBtn = document.getElementById('forgotBtn');
    if (forgotBtn) forgotBtn.addEventListener('click', () => renderForgot());
  }

  function renderForgot(err, notice, email) {
    app.innerHTML = `
      <div class="hub-login">
        <div class="hub-login__card">
          <div class="hub-login__brand">
            <h1>بازیابی رمز</h1>
            <p>یک کد تأیید و یک لینک به ایمیل می‌رود. هر دو لازم است.</p>
          </div>
          ${notice ? `<p class="hub-muted">${esc(notice)}</p>` : ''}
          ${err ? `<div class="hub-error">${esc(err)}</div>` : ''}
          <form id="forgotForm">
            <div class="hub-field">
              <label for="email">ایمیل</label>
              <input type="email" id="email" name="email" required autocomplete="username" dir="ltr" value="${esc(email || '')}">
            </div>
            <button type="submit" class="hub-btn hub-btn--primary">ارسال کد و لینک</button>
            <button type="button" class="hub-btn hub-btn--ghost" id="backLogin">بازگشت به ورود</button>
          </form>
        </div>
      </div>`;
    document.getElementById('backLogin').addEventListener('click', () => renderLogin());
    document.getElementById('forgotForm').addEventListener('submit', async e => {
      e.preventDefault();
      const typed = document.getElementById('email').value;
      try {
        const r = await api('/auth/forgot', { method: 'POST', body: { email: typed } });
        renderForgot('', r.message || 'اگر این ایمیل در BizHub باشد، کد تأیید و لینک بازیابی ارسال شد. پوشه هرزنامه را هم ببینید.', typed);
      } catch (err) {
        renderForgot(err.message, '', typed);
      }
    });
  }

  function renderReset(token, err, code) {
    app.innerHTML = `
      <div class="hub-login">
        <div class="hub-login__card">
          <div class="hub-login__brand">
            <h1>رمز جدید</h1>
            <p>اول کد شش‌رقمی ایمیل، بعد رمز تازه. حداقل ۱۰ کاراکتر.</p>
          </div>
          ${err ? `<div class="hub-error">${esc(err)}</div>` : ''}
          <form id="resetForm">
            <div class="hub-field">
              <label for="code">کد تأیید ایمیل</label>
              <input class="hub-code" type="text" id="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required dir="ltr" value="${esc(code || '')}">
            </div>
            <div class="hub-field">
              <label for="password">رمز جدید</label>
              <input type="password" id="password" required minlength="10" autocomplete="new-password">
            </div>
            <div class="hub-field">
              <label for="password2">تکرار رمز</label>
              <input type="password" id="password2" required minlength="10" autocomplete="new-password">
            </div>
            <button type="submit" class="hub-btn hub-btn--primary">ذخیره رمز</button>
          </form>
        </div>
      </div>`;
    const codeInput = document.getElementById('code');
    codeInput.addEventListener('input', () => {
      codeInput.value = codeInput.value.replace(/\D/g, '').slice(0, 6);
    });
    document.getElementById('resetForm').addEventListener('submit', async e => {
      e.preventDefault();
      const password = document.getElementById('password').value;
      const typedCode = document.getElementById('code').value.replace(/\D/g, '');
      if (!/^\d{6}$/.test(typedCode)) {
        renderReset(token, 'کد تأیید شش رقم است', typedCode);
        return;
      }
      if (password !== document.getElementById('password2').value) {
        renderReset(token, 'تکرار رمز یکسان نیست', typedCode);
        return;
      }
      try {
        await api('/auth/reset', { method: 'POST', body: { token, password, code: typedCode } });
        history.replaceState({}, '', '/admin/');
        renderLogin('', undefined, 'رمز عوض شد. با رمز جدید وارد شوید. اگر Authenticator فعال است، همان کد قبلی لازم است.');
      } catch (err) {
        renderReset(token, err.message, typedCode);
      }
    });
  }

  const ic = (name, size) => (window.BD_ICON ? window.BD_ICON(name, { size }) : '');

  // ─── Shell ───
  function navItem(id, label, icon) {
    return `<button type="button" class="hub-nav__item${state.view === id ? ' is-active' : ''}" data-view="${id}">${ic(icon, 18)}<span>${label}</span>${noticeBadge(id)}</button>`;
  }

  function renderShell() {
    app.innerHTML = `
      <div class="hub-shell">
        <header class="hub-mobilebar">
          <button type="button" class="hub-nav-toggle" id="navToggle" aria-label="باز کردن منو" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <div class="hub-mobilebar__title">
            <strong>BizHub</strong>
            <span id="navTitle"></span>
          </div>
          <button type="button" class="hub-bell" aria-label="اعلان‌ها">اعلان‌ها ${noticeBadge('total')}</button>
        </header>
        <aside class="hub-sidebar">
          <div class="hub-sidebar__brand">
            <strong>BizHub</strong>
            <span>${isPartnerUser() ? 'میز بازاریاب' : 'CRM & Content'}</span>
            <button type="button" class="hub-nav-close" id="navClose" aria-label="بستن منو">×</button>
            <button type="button" class="hub-bell hub-bell--side" aria-label="اعلان‌ها">اعلان‌ها ${noticeBadge('total')}</button>
          </div>
          <nav class="hub-nav">
            ${isPartnerUser() ? `
              ${navItem('desk', 'میز کار', 'chart-bar')}
              ${navItem('prices', 'فهرست قیمت', 'article')}
              ${navItem('orders', 'سفارش‌ها', 'users')}
              ${navItem('docs', 'اسناد من', 'article')}
              ${navItem('tickets', 'تیکت‌ها', 'help')}
            ` : `
              ${navItem('dashboard', 'داشبورد', 'chart-bar')}
              ${state.user?.role === 'admin' ? navItem('activity', 'ورود و کاربران', 'users') : ''}
              ${navItem('pages', 'صفحات سایت', 'link')}
              ${navItem('leads', 'سرنخ‌ها (CRM)', 'users')}
              ${navItem('posts', 'مقالات (CMS)', 'article')}
              ${navItem('faqs', 'سوالات متداول', 'help')}
              ${state.user?.role === 'admin' ? `
                ${navItem('inbox', 'صندوق پیام', 'help')}
                ${navItem('partners', 'بازاریاب‌ها', 'users')}
                ${navItem('prices', 'فهرست قیمت', 'article')}
                ${navItem('orders', 'سفارش‌ها', 'users')}
                ${navItem('docs', 'پیش‌فاکتور و فاکتور', 'article')}
                ${navItem('purchases', 'خریدها', 'link')}
                ${navItem('tickets', 'تیکت‌ها', 'help')}
              ` : ''}
            `}
          </nav>
          <div class="hub-sidebar__foot">
            ${esc(state.user?.name || '')}<br>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="logoutBtn" style="margin-top:8px;width:100%">خروج</button>
          </div>
        </aside>
        <button type="button" class="hub-backdrop" id="navBackdrop" aria-label="بستن منو" hidden></button>
        <main class="hub-main" id="hubMain"></main>
        <div class="hub-notices" id="noticePanel" hidden>
          <div class="hub-notices__head">
            <strong>اعلان‌ها ${noticeBadge('total')}</strong>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="noticeReadAll">همه را دیدم</button>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="noticeClose">بستن</button>
          </div>
          <div class="hub-notices__list">${noticeListHtml()}</div>
        </div>
      </div>`;

    const sidebar = app.querySelector('.hub-sidebar');
    const backdrop = document.getElementById('navBackdrop');
    const toggle = document.getElementById('navToggle');
    const title = document.getElementById('navTitle');
    const active = app.querySelector('.hub-nav__item.is-active span');
    if (title && active) title.textContent = active.textContent;
    function setNav(open) {
      sidebar.classList.toggle('is-open', open);
      backdrop.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('hub-nav-open', open);
    }
    toggle.addEventListener('click', () => setNav(!sidebar.classList.contains('is-open')));
    document.getElementById('navClose').addEventListener('click', () => setNav(false));
    backdrop.addEventListener('click', () => setNav(false));
    app.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        setNav(false);
        state.view = btn.dataset.view;
        renderShell();
        loadView();
      });
    });
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      if (state.noticeTimer) clearInterval(state.noticeTimer);
      await api('/auth/logout', { method: 'POST' });
      state.user = null;
      state.csrfToken = '';
      renderLogin();
    });
    const panel = document.getElementById('noticePanel');
    app.querySelectorAll('.hub-bell').forEach(btn => {
      btn.addEventListener('click', () => { panel.hidden = !panel.hidden; });
    });
    document.getElementById('noticeClose').addEventListener('click', () => { panel.hidden = true; });
    document.getElementById('noticeReadAll').addEventListener('click', async () => {
      const keys = (state.notices?.items || []).map(item => item.key);
      if (keys.length) {
        try { state.notices = await api('/notices/read', { method: 'POST', body: { keys } }); } catch (err) { alert(err.message); return; }
      }
      paintNotices();
      renderView();
    });
    bindNoticeClicks();
    loadView();
  }

  async function loadView() {
    const main = document.getElementById('hubMain');
    main.innerHTML = '<div class="hub-loading">بارگذاری…</div>';
    try {
      if (state.view === 'dashboard') {
        await loadDashboard();
        if (state.user?.role === 'admin' || state.user?.role === 'sales') state.commerce = await api('/commerce/summary');
      }
      if (state.view === 'activity') state.activity = await api('/activity');
      if (state.view === 'pages') await loadPages();
      if (state.view === 'leads') await loadLeads();
      if (state.view === 'posts') await loadPosts();
      if (state.view === 'faqs') await loadFaqs();
      if (state.view === 'desk') await loadDesk();
      if (state.view === 'partners') await loadPartners();
      if (state.view === 'prices') await loadPrices();
      if (state.view === 'orders') {
        if (isPartnerUser()) await loadPrices();
        await loadOrders();
      }
      if (state.view === 'tickets') await loadTickets();
      if (state.view === 'inbox') state.inbox = (await api('/inbox')).items || [];
      if (state.view === 'docs') await loadDocs();
      if (state.view === 'purchases') state.purchases = (await api('/purchases')).purchases || [];
      renderView();
    } catch (e) {
      main.innerHTML = `<div class="hub-error">${esc(e.message)}</div>`;
    }
  }

  async function loadDashboard() {
    const r = await api('/dashboard/stats');
    state.stats = r;
  }

  async function loadLeads() {
    const q = state.leadSearch ? `?q=${encodeURIComponent(state.leadSearch)}` : '';
    const f = state.leadFilter ? (q ? '&' : '?') + `status=${state.leadFilter}` : '';
    const r = await api('/leads' + q + f);
    state.leads = r.leads || [];
  }

  async function loadPosts() {
    const r = await api('/posts');
    state.posts = r.posts || [];
  }

  async function loadFaqs() {
    const r = await api('/faqs');
    state.faqs = r.faqs || [];
  }

  function renderView() {
    const main = document.getElementById('hubMain');
    if (state.view === 'dashboard') main.innerHTML = renderDashboard();
    if (state.view === 'activity') main.innerHTML = renderActivity();
    if (state.view === 'pages') main.innerHTML = renderPages();
    if (state.view === 'leads') main.innerHTML = renderLeads();
    if (state.view === 'posts') main.innerHTML = renderPosts();
    if (state.view === 'faqs') main.innerHTML = renderFaqs();
    if (state.view === 'desk') main.innerHTML = renderDesk();
    if (state.view === 'partners') main.innerHTML = renderPartners();
    if (state.view === 'prices') main.innerHTML = renderPrices();
    if (state.view === 'orders') main.innerHTML = renderOrders();
    if (state.view === 'tickets') main.innerHTML = renderTickets();
    if (state.view === 'inbox') main.innerHTML = renderInbox();
    if (state.view === 'docs') main.innerHTML = renderDocs();
    if (state.view === 'purchases') main.innerHTML = renderPurchases();
    fitTables(main);
    bindViewEvents();
  }

  function fitTables(root) {
    root.querySelectorAll('.hub-table').forEach(table => {
      const heads = [...table.querySelectorAll('thead th')].map(th => th.textContent.trim());
      table.querySelectorAll('tbody tr').forEach(tr => {
        [...tr.children].forEach((td, i) => {
          if (td.tagName !== 'TD' || td.dataset.fit === '1') return;
          td.dataset.fit = '1';
          const wrap = document.createElement('span');
          wrap.className = 'hub-cell';
          while (td.firstChild) wrap.appendChild(td.firstChild);
          td.appendChild(wrap);
          if (td.colSpan > 1 || !heads[i]) {
            td.dataset.stack = 'full';
            return;
          }
          td.dataset.label = heads[i];
        });
      });
    });
  }

  async function loadPages() {
    const q = new URLSearchParams();
    if (state.pageSearch) q.set('q', state.pageSearch);
    if (state.pageSection) q.set('section', state.pageSection);
    if (state.pageArea) q.set('area', state.pageArea);
    if (state.pageLocale) q.set('locale', state.pageLocale);
    if (state.pageOffset) q.set('offset', String(state.pageOffset));
    const r = await api('/site-pages' + (q.toString() ? '?' + q.toString() : ''));
    state.pageRows = r.pages || [];
    state.pageTotal = r.total || 0;
  }

  function renderCompose() {
    const c = state.compose;
    if (!c) return '';
    const ticket = c.kind === 'ticket';
    return `
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>${ticket ? 'تیکت برای' : 'ایمیل به'} ${esc(c.name)}</h3>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="cancelCompose">انصراف</button></div>
        <form id="composeForm" class="hub-form-grid" style="padding:16px">
          <p class="hub-hint hub-hint--in" style="grid-column:1/-1">${esc(c.email)} — ${ticket ? 'تیکت در پنل او می‌ماند و همین متن برایش ایمیل می‌شود.' : 'این متن فقط ایمیل می‌شود و در تیکت‌ها ذخیره نمی‌شود.'}</p>
          <div class="hub-field hub-field--full"><label>موضوع</label><input name="subject" required value="${esc(c.subject || '')}"></div>
          <div class="hub-field hub-field--full"><label>متن</label><textarea name="body" required></textarea></div>
          <div class="hub-field hub-field--full"><button class="hub-btn hub-btn--yellow" type="submit">${ticket ? 'ثبت تیکت و ارسال ایمیل' : 'ارسال ایمیل'}</button></div>
        </form>
      </div>`;
  }

  function userActions(p) {
    if (state.user?.role !== 'admin') return '';
    const ticket = p.role === 'partner'
      ? `<button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-compose="ticket" data-user="${p.id}" data-name="${esc(p.name)}" data-email="${esc(p.email)}">تیکت</button>`
      : '';
    return `<div class="hub-actions">
      <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-reset-mail="${p.id}">بازیابی رمز</button>
      <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-compose="mail" data-user="${p.id}" data-name="${esc(p.name)}" data-email="${esc(p.email)}">ایمیل</button>
      ${ticket}
    </div>`;
  }

  function renderPeopleBlock(people, logins) {
    const admin = state.user?.role === 'admin';
    return `
      ${renderCompose()}
      <div class="hub-split">
        <div class="hub-card">
          <div class="hub-card__head"><h3>کاربران و بازاریاب‌ها</h3></div>
          <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
            <th>نام</th><th>نقش</th><th>آخرین ورود</th><th>سفارش</th><th>تیکت</th><th>وضعیت</th>${admin ? '<th></th>' : ''}
          </tr></thead><tbody>
            ${(people || []).map(p => `<tr>
              <td>${esc(p.name)}<div class="hub-path hub-nowrap" dir="ltr">${esc(p.email)}</div></td>
              <td>${esc(ROLE_LABELS[p.role] || p.role || '—')}${p.partner_code ? `<div class="hub-path hub-nowrap" dir="ltr">${esc(p.partner_code)}</div>` : ''}</td>
              <td class="hub-nowrap">${fmtDate(p.last_login_at)}</td>
              <td>${p.role === 'partner' ? (p.orders ?? 0) : '—'}</td>
              <td>${p.role === 'partner' ? (p.tickets ?? 0) : '—'}</td>
              <td>${Number(p.is_active) ? 'فعال' : 'خاموش'}</td>
              ${admin ? `<td>${userActions(p)}</td>` : ''}
            </tr>`).join('') || `<tr><td colspan="${admin ? 7 : 6}">کاربری نیست</td></tr>`}
          </tbody></table></div>
        </div>
        <div class="hub-card">
          <div class="hub-card__head"><h3>ورودها</h3></div>
          <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
            <th>زمان</th><th>کاربر</th><th>نقش</th><th>نتیجه</th><th>آی‌پی</th>
          </tr></thead><tbody>
            ${(logins || []).map(l => `<tr>
              <td class="hub-nowrap">${fmtDate(l.created_at)}</td>
              <td class="hub-nowrap" dir="ltr">${esc(l.email)}</td>
              <td>${esc(ROLE_LABELS[l.role] || l.role || '—')}</td>
              <td>${Number(l.ok) ? 'موفق' : 'ناموفق'}</td>
              <td class="hub-nowrap" dir="ltr">${esc(l.ip_address || '—')}</td>
            </tr>`).join('') || '<tr><td colspan="5">هنوز ورودی ثبت نشده</td></tr>'}
          </tbody></table></div>
        </div>
      </div>`;
  }

  function renderActivity() {
    const a = state.activity?.activity || {};
    return `
      <div class="hub-topbar"><h2>ورود و کاربران</h2></div>
      <div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${a.users ?? 0}</div><div class="hub-stat__label">کاربر</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${a.partners ?? 0}</div><div class="hub-stat__label">بازاریاب</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${a.logins_today ?? 0}</div><div class="hub-stat__label">ورود موفق امروز</div></div>
      </div>
      <p class="hub-hint">آخرین ورود هر کاربر همین‌جا است. از ردیف هر کاربر می‌توانید ایمیل بفرستید، برای بازاریاب تیکت باز کنید، یا لینک و کد بازیابی رمز را ایمیل کنید.</p>
      ${renderPeopleBlock(a.people || [], a.logins || [])}`;
  }

  function renderDashboard() {
    const s = state.stats?.stats || {};
    const site = state.stats?.site || {};
    const locales = site.locales || {};
    const areas = site.areas || [];
    const content = site.content || [];
    const top = site.top_pages || [];
    const series = site.series || [];
    const maxViews = Math.max(1, ...series.map(d => Number(d.views) || 0));
    const pipe = s.pipeline || {};
    const recent = state.stats?.recentLeads || [];
    const act = state.stats?.activity;
    const vloc = site.visit_locales || {};
    const locLine = Object.entries(LOCALE_LABELS).map(([k, label]) => `${label} ${vloc[k] ?? 0}`).join(' · ');
    const todayLine = (site.top_today || []).map(r => `${r.title || r.path} (${r.views})`).join('، ');
    return `
      <div class="hub-topbar"><h2>داشبورد</h2><span class="hub-topbar__user">${state.user?.role === 'admin' ? '<button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="mailTest">آزمایش ایمیل</button> ' : ''}${esc(state.user?.email)}</span></div>
      <div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${site.pages ?? 0}</div><div class="hub-stat__label">صفحه در سایت</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${locales.fa ?? 0}</div><div class="hub-stat__label">فارسی</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${locales.tr ?? 0}</div><div class="hub-stat__label">ترکی</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${locales.en ?? 0}</div><div class="hub-stat__label">انگلیسی</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${locales.ru ?? 0}</div><div class="hub-stat__label">روسی</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${locales.ar ?? 0}</div><div class="hub-stat__label">عربی</div></div>
      </div>
      <div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${site.visits_today ?? 0}</div><div class="hub-stat__label">بازدید امروز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${site.visits_week ?? 0}</div><div class="hub-stat__label">بازدید ۷ روز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.leads_new ?? 0}</div><div class="hub-stat__label">سرنخ جدید</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.leads_total ?? 0}</div><div class="hub-stat__label">کل سرنخ‌ها</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.posts_published ?? 0}</div><div class="hub-stat__label">مقاله منتشرشده</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.posts_draft ?? 0}</div><div class="hub-stat__label">پیش‌نویس</div></div>
      </div>
      ${state.commerce ? `<div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${state.commerce.orders_open ?? 0}</div><div class="hub-stat__label">سفارش باز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${state.commerce.proformas_open ?? 0}</div><div class="hub-stat__label">پیش‌فاکتور باز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${state.commerce.invoices_unpaid ?? 0}</div><div class="hub-stat__label">فاکتور پرداخت‌نشده</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${state.commerce.invoices_paid ?? 0}</div><div class="hub-stat__label">فاکتور پرداخت‌شده</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${state.commerce.purchases_open ?? 0}</div><div class="hub-stat__label">خرید باز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${state.commerce.tickets_open ?? 0}</div><div class="hub-stat__label">تیکت باز</div></div>
      </div>` : ''}
      ${act ? `<div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${act.users ?? 0}</div><div class="hub-stat__label">کاربر</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${act.partners ?? 0}</div><div class="hub-stat__label">بازاریاب</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${act.logins_today ?? 0}</div><div class="hub-stat__label">ورود امروز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${site.visits_all ?? 0}</div><div class="hub-stat__label">کل بازدید</div></div>
      </div>
      ${renderPeopleBlock(act.people || [], act.logins || [])}` : ''}
      <p class="hub-hint">شمارش بازدید از همین به‌روزرسانی شروع می‌شود و تاریخچهٔ قبلی را شامل نمی‌شود. آرشیو قبلی در Google Analytics است: G-4GFEY12SLH. بازدید ۷ روز به زبان: ${esc(locLine)}.${todayLine ? ' امروز: ' + esc(todayLine) + '.' : ''}</p>
      <div class="hub-card hub-card--chart">
        <div class="hub-card__head"><h3>بازدید ۱۴ روز اخیر</h3></div>
        <div class="hub-bars">
          ${series.map(d => {
            const views = Number(d.views) || 0;
            const h = views === 0 ? 0 : Math.max(18, Math.round((views / maxViews) * 78));
            const dayNum = String(d.day || '').slice(8);
            return `<div class="hub-bar" title="${esc(d.day)}: ${views}">
              <div class="hub-bar__plot"><div class="hub-bar__col" style="height:${h}%">${views ? `<span class="hub-bar__n">${views}</span>` : ''}</div></div>
              <span class="hub-bar__lbl">${esc(dayNum)}</span>
            </div>`;
          }).join('') || '<p class="hub-hint">هنوز بازدیدی ثبت نشده</p>'}
        </div>
      </div>
      <div class="hub-split">
        <div class="hub-card">
          <div class="hub-card__head"><h3>محتوای سایت</h3></div>
          <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
            <th>دسته</th><th>صفحه در همه زبان‌ها</th><th>بازدید ۷ روز</th>
          </tr></thead><tbody>
            ${areas.map(row => `<tr data-open-area="${esc(row.area)}">
              <td>${esc(AREA_LABELS[row.area] || row.area)}</td>
              <td>${row.count}</td>
              <td>${row.views ?? 0}</td>
            </tr>`).join('') || '<tr><td colspan="3">فهرست صفحات هنوز وارد نشده</td></tr>'}
          </tbody></table></div>
        </div>
        <div class="hub-card">
          <div class="hub-card__head"><h3>پربازدیدترین صفحه‌ها، ۷ روز</h3></div>
          <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
            <th>صفحه</th><th>بازدید</th>
          </tr></thead><tbody>
            ${top.map(row => `<tr>
              <td><a href="${esc(row.path)}" target="_blank" rel="noopener">${esc(row.title || row.path)}</a>
                <div class="hub-path" dir="ltr">${esc(row.path)}</div></td>
              <td>${row.views}</td>
            </tr>`).join('') || '<tr><td colspan="2">هنوز بازدیدی ثبت نشده</td></tr>'}
          </tbody></table></div>
        </div>
      </div>
      <div class="hub-card hub-card--content">
        <div class="hub-card__head"><h3>صفحه‌ها و متن سایت</h3></div>
        <p class="hub-hint">عنوان و توضیح همین صفحه‌های زندهٔ فارسی است. صفحهٔ محصول موتورسیکلت در دستهٔ موتور و خودرو است و اینجا تکرار نمی‌شود.</p>
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>عنوان</th><th>متن صفحه</th><th>دسته</th>
        </tr></thead><tbody>
          ${content.map(p => `<tr>
            <td><a href="${esc(p.path)}" target="_blank" rel="noopener">${esc(p.title)}</a>
              <div class="hub-path" dir="ltr">${esc(p.path)}</div></td>
            <td><div class="hub-summary" title="${esc(p.summary || '')}">${esc(p.summary || '—')}</div></td>
            <td>${esc(AREA_LABELS[p.area] || sectionLabel(p.section))}</td>
          </tr>`).join('') || '<tr><td colspan="3">محتوا هنوز وارد نشده</td></tr>'}
        </tbody></table></div>
      </div>
      <div class="hub-pipeline">
        ${Object.keys(STATUS_LABELS).map(st => `
          <div class="hub-pipe-col">
            <div class="hub-pipe-col__head">${STATUS_LABELS[st]}<span class="hub-pipe-col__count">${pipe[st] ?? 0}</span></div>
          </div>`).join('')}
      </div>
      <div class="hub-card">
        <div class="hub-card__head"><h3>آخرین سرنخ‌ها</h3></div>
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>نام</th><th>ایمیل</th><th>خدمات</th><th>وضعیت</th><th>تاریخ</th>
        </tr></thead><tbody>
          ${recent.map(l => `<tr data-lead-id="${l.id}">
            <td>${esc(l.first_name)} ${esc(l.last_name)}</td>
            <td dir="ltr">${esc(l.email)}</td>
            <td>${esc(l.service)}</td>
            <td>${badge(l.status)}</td>
            <td>${fmtDate(l.created_at)}</td>
          </tr>`).join('') || '<tr><td colspan="5">سرنخی نیست</td></tr>'}
        </tbody></table></div>
      </div>`;
  }

  function renderPages() {
    const from = state.pageTotal ? state.pageOffset + 1 : 0;
    const to = Math.min(state.pageOffset + state.pageRows.length, state.pageTotal);
    const sections = state.stats?.site?.sections || [];
    return `
      <div class="hub-topbar"><h2>صفحات سایت</h2><span class="hub-topbar__user">${state.pageTotal} صفحه</span></div>
      <div class="hub-card">
        <div class="hub-card__head">
          <h3>فهرست محتوا</h3>
          <div class="hub-toolbar">
            <input type="search" class="hub-search" id="pageSearch" placeholder="جستجو در عنوان، خلاصه یا مسیر…" value="${esc(state.pageSearch)}">
            <select id="pageLocale" class="hub-search">
              <option value="">همه زبان‌ها</option>
              ${Object.entries(LOCALE_LABELS).map(([k, v]) =>
                `<option value="${k}"${state.pageLocale === k ? ' selected' : ''}>${v}</option>`).join('')}
            </select>
            <select id="pageArea" class="hub-search">
              <option value="">همه دسته‌ها</option>
              ${Object.entries(AREA_LABELS).map(([k, v]) =>
                `<option value="${k}"${state.pageArea === k ? ' selected' : ''}>${v}</option>`).join('')}
            </select>
            <select id="pageSection" class="hub-search">
              <option value="">همه بخش‌ها</option>
              ${sections.map(row =>
                `<option value="${esc(row.section)}"${state.pageSection === row.section ? ' selected' : ''}>${esc(sectionLabel(row.section))}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>عنوان</th><th>خلاصه</th><th>زبان</th><th>بخش</th>
        </tr></thead><tbody>
          ${state.pageRows.map(p => `<tr>
            <td><a href="${esc(p.path)}" target="_blank" rel="noopener">${esc(p.title)}</a>
              <div class="hub-path" dir="ltr">${esc(p.path)}</div></td>
            <td><div class="hub-summary" title="${esc(p.summary || '')}">${esc(p.summary || '—')}</div></td>
            <td>${esc(LOCALE_LABELS[p.locale] || p.locale)}</td>
            <td>${esc(sectionLabel(p.section))}</td>
          </tr>`).join('') || '<tr><td colspan="4">صفحه‌ای نیست</td></tr>'}
        </tbody></table></div>
        <div class="hub-pager">
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="pagePrev" ${state.pageOffset <= 0 ? 'disabled' : ''}>قبلی</button>
          <span>${from}–${to} از ${state.pageTotal}</span>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="pageNext" ${state.pageOffset + 40 >= state.pageTotal ? 'disabled' : ''}>بعدی</button>
        </div>
      </div>`;
  }

  function renderLeads() {
    return `
      <div class="hub-topbar"><h2>مدیریت سرنخ‌ها</h2></div>
      <div class="hub-card">
        <div class="hub-card__head">
          <h3>فهرست CRM</h3>
          <div class="hub-toolbar">
            <input type="search" class="hub-search" id="leadSearch" placeholder="جستجو…" value="${esc(state.leadSearch)}">
            <select id="leadFilter" class="hub-search">
              <option value="">همه وضعیت‌ها</option>
              ${Object.entries(STATUS_LABELS).map(([k, v]) =>
                `<option value="${k}"${state.leadFilter === k ? ' selected' : ''}>${v}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>نام</th><th>ایمیل</th><th>تلفن</th><th>خدمات</th><th>بازاریاب</th><th>وضعیت</th><th>تاریخ</th>
        </tr></thead><tbody>
          ${state.leads.map(l => `<tr data-lead-id="${l.id}">
            <td>${esc(l.first_name)} ${esc(l.last_name)}</td>
            <td dir="ltr">${esc(l.email)}</td>
            <td dir="ltr">${esc(l.phone || '—')}</td>
            <td>${esc(l.service)}</td>
            <td dir="ltr">${esc(l.partner_code || '—')}</td>
            <td>${badge(l.status)}</td>
            <td>${fmtDate(l.created_at)}</td>
          </tr>`).join('') || '<tr><td colspan="7">سرنخی یافت نشد</td></tr>'}
        </tbody></table></div>
        ${state.leads.length ? '' : '<p class="hub-hint hub-hint--in">سرنخ‌ها از فرم تماس سایت می‌آیند. تا وقتی کسی فرم را نفرستد، این فهرست خالی می‌ماند.</p>'}
      </div>`;
  }

  function renderPosts() {
    return `
      <div class="hub-topbar">
        <h2>مدیریت مقالات</h2>
        <button type="button" class="hub-btn hub-btn--yellow" id="newPostBtn">+ مقاله جدید</button>
      </div>
      <p class="hub-hint">مقالات منتشرشدهٔ سایت اینجاست. ویرایش در این پنل هنوز صفحهٔ زنده را عوض نمی‌کند.</p>
      <div class="hub-card">
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>عنوان</th><th>slug</th><th>دسته</th><th>وضعیت</th><th>به‌روزرسانی</th><th></th>
        </tr></thead><tbody>
          ${state.posts.map(p => `<tr>
            <td>${esc(p.title_fa)}</td>
            <td dir="ltr">${esc(p.slug)}</td>
            <td>${esc(p.category)}</td>
            <td><span class="hub-badge hub-badge--${p.status}">${p.status === 'published' ? 'منتشر' : 'پیش‌نویس'}</span></td>
            <td>${fmtDate(p.updated_at)}</td>
            <td><button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-edit-post="${p.id}">ویرایش</button></td>
          </tr>`).join('') || '<tr><td colspan="6">مقاله‌ای نیست</td></tr>'}
        </tbody></table></div>
      </div>`;
  }

  function renderFaqs() {
    return `
      <div class="hub-topbar">
        <h2>سوالات متداول</h2>
        <button type="button" class="hub-btn hub-btn--yellow" id="newFaqBtn">+ سوال جدید</button>
      </div>
      <p class="hub-hint">پرسش‌هایی که روی صفحات سایت منتشر شده‌اند. ویرایش اینجا هنوز صفحهٔ زنده را عوض نمی‌کند.</p>
      <div class="hub-card">
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>سوال</th><th>ترتیب</th><th>وضعیت</th><th></th>
        </tr></thead><tbody>
          ${state.faqs.map(f => `<tr>
            <td>${esc(f.question_fa)}</td>
            <td>${f.sort_order}</td>
            <td>${f.is_published == 1 ? ic('check', 14) + ' منتشر' : '— مخفی'}</td>
            <td><button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-edit-faq="${f.id}">ویرایش</button></td>
          </tr>`).join('') || '<tr><td colspan="4">سوالی نیست</td></tr>'}
        </tbody></table></div>
      </div>`;
  }

  function bindViewEvents() {
    const mailTest = document.getElementById('mailTest');
    if (mailTest) {
      mailTest.addEventListener('click', async () => {
        mailTest.disabled = true;
        const label = mailTest.textContent;
        try {
          const r = await api('/mail/test', { method: 'POST', body: {} });
          mailTest.textContent = r.message || 'ارسال شد';
        } catch (e) {
          mailTest.textContent = e.message || 'ارسال نشد';
        } finally {
          mailTest.disabled = false;
          setTimeout(() => { mailTest.textContent = label; }, 6000);
        }
      });
    }
    document.querySelectorAll('[data-lead-id]').forEach(row => {
      row.addEventListener('click', () => openLeadModal(+row.dataset.leadId));
    });
    const search = document.getElementById('leadSearch');
    if (search) {
      search.addEventListener('change', e => { state.leadSearch = e.target.value; loadView(); });
      search.addEventListener('keydown', e => { if (e.key === 'Enter') { state.leadSearch = e.target.value; loadView(); } });
    }
    const pageArea = document.getElementById('pageArea');
    if (pageArea) pageArea.addEventListener('change', e => { state.pageArea = e.target.value; state.pageOffset = 0; loadView(); });
    const filter = document.getElementById('leadFilter');
    if (filter) filter.addEventListener('change', e => { state.leadFilter = e.target.value; loadView(); });

    document.querySelectorAll('[data-open-section]').forEach(row => {
      row.addEventListener('click', () => {
        state.view = 'pages';
        state.pageSection = row.dataset.openSection || '';
        state.pageArea = '';
        state.pageOffset = 0;
        renderShell();
      });
    });
    document.querySelectorAll('[data-open-view]').forEach(row => {
      row.addEventListener('click', () => {
        const view = row.dataset.openView;
        if (!view) return;
        state.view = view;
        renderShell();
      });
    });
    document.querySelectorAll('[data-open-area]').forEach(row => {
      row.addEventListener('click', () => {
        state.view = 'pages';
        state.pageArea = row.dataset.openArea || '';
        state.pageSection = '';
        state.pageOffset = 0;
        renderShell();
      });
    });
    const pageSearch = document.getElementById('pageSearch');
    if (pageSearch) {
      pageSearch.addEventListener('change', e => { state.pageSearch = e.target.value; state.pageOffset = 0; loadView(); });
      pageSearch.addEventListener('keydown', e => { if (e.key === 'Enter') { state.pageSearch = e.target.value; state.pageOffset = 0; loadView(); } });
    }
    const pageLocale = document.getElementById('pageLocale');
    if (pageLocale) pageLocale.addEventListener('change', e => { state.pageLocale = e.target.value; state.pageOffset = 0; loadView(); });
    const pageSection = document.getElementById('pageSection');
    if (pageSection) pageSection.addEventListener('change', e => { state.pageSection = e.target.value; state.pageOffset = 0; loadView(); });
    document.getElementById('pagePrev')?.addEventListener('click', () => { state.pageOffset = Math.max(0, state.pageOffset - 40); loadView(); });
    document.getElementById('pageNext')?.addEventListener('click', () => { state.pageOffset += 40; loadView(); });

    document.getElementById('newPostBtn')?.addEventListener('click', () => openPostModal());
    document.querySelectorAll('[data-edit-post]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      openPostModal(+b.dataset.editPost);
    }));

    bindGrowthEvents();
    document.getElementById('newFaqBtn')?.addEventListener('click', () => openFaqModal());
    document.querySelectorAll('[data-edit-faq]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      openFaqModal(+b.dataset.editFaq);
    }));
  }

  async function openLeadModal(id) {
    const r = await api('/leads/' + id);
    const l = r.lead;
    const notes = r.notes || [];
    const backdrop = document.createElement('div');
    backdrop.className = 'hub-modal-backdrop';
    backdrop.innerHTML = `
      <div class="hub-modal" role="dialog">
        <div class="hub-modal__head">
          <strong>${esc(l.first_name)} ${esc(l.last_name)}</strong>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeModal" aria-label="بستن">${ic('close', 16)}</button>
        </div>
        <div class="hub-modal__body">
          <p><strong>ایمیل:</strong> <span dir="ltr">${esc(l.email)}</span></p>
          <p><strong>تلفن:</strong> <span dir="ltr">${esc(l.phone || '—')}</span></p>
          <p><strong>خدمات:</strong> ${esc(l.service)}</p>
          <p><strong>پیام:</strong><br>${esc(l.message)}</p>
          <div class="hub-field" style="margin-top:16px">
            <label>وضعیت CRM</label>
            <select id="leadStatus">${Object.entries(STATUS_LABELS).map(([k, v]) =>
              `<option value="${k}"${l.status === k ? ' selected' : ''}>${v}</option>`).join('')}</select>
          </div>
          <div class="hub-notes">
            <h4 style="margin-bottom:12px">یادداشت‌ها</h4>
            ${notes.map(n => `<div class="hub-note"><div class="hub-note__meta">${esc(n.author_name || 'سیستم')} — ${fmtDate(n.created_at)}</div>${esc(n.body)}</div>`).join('') || '<p style="color:var(--hub-muted);font-size:0.875rem">یادداشتی نیست</p>'}
            <div class="hub-field"><textarea id="newNote" placeholder="یادداشت جدید…"></textarea></div>
            <button type="button" class="hub-btn hub-btn--yellow hub-btn--sm" id="addNoteBtn">افزودن یادداشت</button>
          </div>
        </div>
        <div class="hub-modal__foot">
          <button type="button" class="hub-btn hub-btn--primary hub-btn--sm" id="saveLeadBtn">ذخیره وضعیت</button>
        </div>
      </div>`;
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });
    backdrop.querySelector('#closeModal').addEventListener('click', () => backdrop.remove());
    backdrop.querySelector('#saveLeadBtn').addEventListener('click', async () => {
      await api('/leads/' + id, { method: 'PATCH', body: { status: backdrop.querySelector('#leadStatus').value } });
      backdrop.remove();
      loadView();
    });
    backdrop.querySelector('#addNoteBtn').addEventListener('click', async () => {
      const body = backdrop.querySelector('#newNote').value.trim();
      if (!body) return;
      await api('/leads/' + id + '/notes', { method: 'POST', body: { body } });
      backdrop.remove();
      openLeadModal(id);
    });
  }

  async function openPostModal(id) {
    let post = { title_fa: '', slug: '', category: 'general', status: 'draft', content_fa: '', excerpt_fa: '' };
    if (id) {
      const r = await api('/posts/' + id);
      post = r.post;
    }
    showFormModal(id ? 'ویرایش مقاله' : 'مقاله جدید', `
      <div class="hub-form-grid">
        <div class="hub-field hub-field--full"><label>عنوان (فا)</label><input id="pTitle" value="${esc(post.title_fa)}"></div>
        <div class="hub-field"><label>Slug</label><input id="pSlug" dir="ltr" value="${esc(post.slug)}"></div>
        <div class="hub-field"><label>دسته</label><input id="pCat" value="${esc(post.category)}"></div>
        <div class="hub-field"><label>وضعیت</label>
          <select id="pStatus"><option value="draft"${post.status === 'draft' ? ' selected' : ''}>پیش‌نویس</option>
          <option value="published"${post.status === 'published' ? ' selected' : ''}>منتشر</option></select>
        </div>
        <div class="hub-field hub-field--full"><label>خلاصه (فا)</label><textarea id="pExcerpt">${esc(post.excerpt_fa || '')}</textarea></div>
        <div class="hub-field hub-field--full"><label>محتوا (فا)</label><textarea id="pContent" style="min-height:200px">${esc(post.content_fa || '')}</textarea></div>
      </div>`, async () => {
      const body = {
        title_fa: document.getElementById('pTitle').value,
        slug: document.getElementById('pSlug').value,
        category: document.getElementById('pCat').value,
        status: document.getElementById('pStatus').value,
        excerpt_fa: document.getElementById('pExcerpt').value,
        content_fa: document.getElementById('pContent').value
      };
      if (id) await api('/posts/' + id, { method: 'PUT', body });
      else await api('/posts', { method: 'POST', body });
      loadView();
    });
  }

  async function openFaqModal(id) {
    let faq = { question_fa: '', answer_fa: '', sort_order: 0, is_published: 1 };
    if (id) faq = state.faqs.find(f => +f.id === id) || faq;
    showFormModal(id ? 'ویرایش FAQ' : 'سوال جدید', `
      <div class="hub-field"><label>سوال (فا)</label><input id="fQ" value="${esc(faq.question_fa)}"></div>
      <div class="hub-field"><label>پاسخ (فا)</label><textarea id="fA">${esc(faq.answer_fa)}</textarea></div>
      <div class="hub-field"><label>ترتیب</label><input type="number" id="fSort" value="${faq.sort_order || 0}"></div>
      <div class="hub-field"><label><input type="checkbox" id="fPub" ${faq.is_published != 0 ? 'checked' : ''}> منتشر در سایت</label></div>
    `, async () => {
      const body = {
        question_fa: document.getElementById('fQ').value,
        answer_fa: document.getElementById('fA').value,
        sort_order: +document.getElementById('fSort').value,
        is_published: document.getElementById('fPub').checked ? 1 : 0
      };
      if (id) await api('/faqs/' + id, { method: 'PUT', body });
      else await api('/faqs', { method: 'POST', body });
      loadView();
    });
  }

  function showFormModal(title, bodyHtml, onSave) {
    const backdrop = document.createElement('div');
    backdrop.className = 'hub-modal-backdrop';
    backdrop.innerHTML = `
      <div class="hub-modal"><div class="hub-modal__head"><strong>${title}</strong>
        <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeModal" aria-label="بستن">${ic('close', 16)}</button></div>
        <div class="hub-modal__body">${bodyHtml}</div>
        <div class="hub-modal__foot">
          <button type="button" class="hub-btn hub-btn--primary hub-btn--sm" id="saveModal">ذخیره</button>
        </div></div>`;
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.remove(); });
    backdrop.querySelector('#closeModal').addEventListener('click', () => backdrop.remove());
    backdrop.querySelector('#saveModal').addEventListener('click', async () => {
      try {
        await onSave();
        backdrop.remove();
      } catch (e) {
        alert(e.message);
      }
    });
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = 'کپی شد';
      setTimeout(() => { btn.textContent = old; }, 1200);
    } catch {
      window.prompt('این را کپی کنید', text);
    }
  }

  async function loadDesk() {
    state.partnerHome = await api('/partner/home');
  }
  async function loadPartners() {
    const r = await api('/partners');
    state.partners = r.partners || [];
    state.partnerOrigin = r.origin || 'https://bizdavar.com';
  }
  async function loadPrices() {
    const r = await api('/prices');
    state.prices = r.prices || [];
  }
  async function loadOrders() {
    const r = await api('/orders');
    state.orders = r.orders || [];
    state.orderThread = state.openOrder ? await api('/orders/' + state.openOrder) : null;
  }
  async function loadDocs() {
    const r = await api('/documents?kind=' + encodeURIComponent(state.docKind || ''));
    state.docs = r.documents || [];
    state.docRecord = state.openDoc ? (await api('/documents/' + state.openDoc)).document : null;
  }
  function money(n, currency) {
    const v = Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return v + ' ' + (currency || 'USD');
  }
  async function loadTickets() {
    const r = await api('/tickets');
    state.tickets = r.tickets || [];
    state.ticketThread = state.openTicket ? await api('/tickets/' + state.openTicket) : null;
  }

  function renderDesk() {
    const h = state.partnerHome || {};
    const orders = h.orders || {};
    const total = Object.values(orders).reduce((n, v) => n + Number(v || 0), 0);
    return `
      <div class="hub-topbar"><h2>میز کار</h2><span class="hub-topbar__user">${esc(h.name || state.user?.name)}</span></div>
      <p class="hub-hint">لینک معرفی را برای مشتری بفرستید. اگر از همان لینک فرم تماس سایت را پر کند، سرنخ به نام شما ثبت می‌شود. برای قیمت و پیگیری، سفارش و تیکت همین‌جا است.</p>
      <div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${total}</div><div class="hub-stat__label">سفارش‌های من</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${orders.new || 0}</div><div class="hub-stat__label">در انتظار قیمت</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${orders.quoted || 0}</div><div class="hub-stat__label">قیمت داده شده</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${h.ticketsOpen || 0}</div><div class="hub-stat__label">تیکت باز</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${h.documents?.proforma || 0}</div><div class="hub-stat__label">پیش‌فاکتور</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${h.documents?.invoice || 0}</div><div class="hub-stat__label">فاکتور</div></div>
      </div>
      <div class="hub-actions" style="margin-bottom:16px">
        <button type="button" class="hub-btn hub-btn--yellow" data-go="prices">فهرست قیمت</button>
        <button type="button" class="hub-btn hub-btn--ghost" data-go="orders">سفارش جدید</button>
        <button type="button" class="hub-btn hub-btn--ghost" data-go="tickets">تیکت جدید</button>
      </div>
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>لینک‌های شما</h3></div>
        <div class="hub-links">
          <div><span>لینک معرفی مشتری</span><code dir="ltr">${esc(h.referralUrl || '')}</code>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-copy="${esc(h.referralUrl || '')}">کپی</button></div>
          <div><span>ورود بازاریاب‌ها</span><code dir="ltr">${esc(h.loginUrl || '')}</code>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-copy="${esc(h.loginUrl || '')}">کپی</button></div>
          <div><span>کد معرفی</span><code dir="ltr">${esc(h.code || '')}</code></div>
        </div>
      </div>
      <div class="hub-split">
        <div class="hub-card">
          <div class="hub-card__head"><h3>آخرین سفارش‌ها</h3></div>
          <div class="hub-table-wrap"><table class="hub-table"><thead><tr><th>مشتری</th><th>خدمت</th><th>وضعیت</th></tr></thead><tbody>
            ${(h.recentOrders || []).map(o => `<tr data-go="orders" data-go-order="${o.id}">
              <td>${esc(o.client_name)}</td><td>${esc(o.service_title)}</td><td>${esc(ORDER_LABELS[o.status] || o.status)}</td>
            </tr>`).join('') || '<tr><td colspan="3">هنوز سفارشی نیست. از فهرست قیمت شروع کنید.</td></tr>'}
          </tbody></table></div>
        </div>
        <div class="hub-card">
          <div class="hub-card__head"><h3>آخرین تیکت‌ها</h3></div>
          <div class="hub-table-wrap"><table class="hub-table"><thead><tr><th>موضوع</th><th>وضعیت</th></tr></thead><tbody>
            ${(h.recentTickets || []).map(t => `<tr data-go="tickets" data-go-ticket="${t.id}">
              <td>${esc(t.subject)}</td><td>${esc(TICKET_LABELS[t.status] || t.status)}</td>
            </tr>`).join('') || '<tr><td colspan="2">تیکتی نیست</td></tr>'}
          </tbody></table></div>
        </div>
      </div>`;
  }

  function renderPartners() {
    const origin = state.partnerOrigin || 'https://bizdavar.com';
    const flash = state.partnerFlash;
    return `
      <div class="hub-topbar"><h2>بازاریاب‌ها</h2></div>
      <p class="hub-hint">از اینجا کاربر بازاریاب بسازید. با همان ایمیل وارد ${esc(origin + '/admin/')} می‌شود. از دکمه‌های هر ردیف، لینک بازیابی رمز، ایمیل، یا تیکت برایش می‌رود. لینک معرفی را به او بدهید تا مشتری‌ها را بیاورد.</p>
      ${flash ? `<div class="hub-card" style="margin-bottom:16px;padding:16px">بازاریاب ساخته شد.<br>ورود: <code dir="ltr">${esc(flash.loginUrl)}</code><br>ایمیل: <code dir="ltr">${esc(flash.email || '')}</code><br>رمز: <code dir="ltr">${esc(flash.password || '')}</code><br>لینک معرفی: <code dir="ltr">${esc(flash.referralUrl)}</code><br>این رمز را فقط همین‌جا می‌بینید. برای بازاریاب بفرستید. بعداً خودش هم می‌تواند از فراموشی رمز استفاده کند.</div>` : ''}
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>کاربر جدید</h3></div>
        <form id="partnerForm" class="hub-form-grid" style="padding:16px">
          <div class="hub-field"><label>نام</label><input name="name" required></div>
          <div class="hub-field"><label>ایمیل ورود</label><input name="email" type="email" dir="ltr" required></div>
          <div class="hub-field"><label>رمز (حداقل ۱۰ کاراکتر)</label><input name="password" type="text" dir="ltr" minlength="10" required></div>
          <div class="hub-field"><label>تلفن</label><input name="phone" dir="ltr"></div>
          <div class="hub-field"><label>شرکت</label><input name="company"></div>
          <div class="hub-field"><label>کد معرفی، اختیاری</label><input name="code" dir="ltr" placeholder="مثلاً reza"></div>
          <div class="hub-field hub-field--full"><button type="submit" class="hub-btn hub-btn--yellow">ساخت بازاریاب</button></div>
        </form>
      </div>
      ${renderCompose()}
      <div class="hub-card">
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>نام</th><th>ایمیل</th><th>کد</th><th>سفارش</th><th>تیکت باز</th><th>وضعیت</th><th></th>
        </tr></thead><tbody>
          ${state.partners.map(p => {
            const ref = origin + '/?ref=' + encodeURIComponent(p.code || '');
            return `<tr>
              <td>${esc(p.name)}${p.company ? `<div class="hub-path">${esc(p.company)}</div>` : ''}</td>
              <td dir="ltr" class="hub-nowrap">${esc(p.email)}</td>
              <td dir="ltr" class="hub-nowrap">${esc(p.code)}</td>
              <td>${p.orders_count}</td>
              <td>${p.tickets_open}</td>
              <td>${Number(p.is_active) ? 'فعال' : 'غیرفعال'}</td>
              <td>
                <div class="hub-actions">
                  <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-copy="${esc(ref)}">کپی لینک</button>
                  <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-reset-mail="${p.id}">ایمیل بازیابی</button>
                  <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-compose="mail" data-user="${p.id}" data-name="${esc(p.name)}" data-email="${esc(p.email)}">ایمیل</button>
                  <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-compose="ticket" data-user="${p.id}" data-name="${esc(p.name)}" data-email="${esc(p.email)}">تیکت</button>
                  <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-reset-partner="${p.id}">رمز در پنل</button>
                  <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-toggle-partner="${p.id}" data-active="${Number(p.is_active) ? '0' : '1'}">${Number(p.is_active) ? 'غیرفعال' : 'فعال'}</button>
                </div>
              </td>
            </tr>`;
          }).join('') || '<tr><td colspan="7">هنوز بازاریابی نیست</td></tr>'}
        </tbody></table></div>
      </div>`;
  }

  function priceGroups(items) {
    const groups = [];
    const map = new Map();
    (items || []).forEach(item => {
      const name = item.category || 'عمومی';
      if (!map.has(name)) {
        const group = { name, items: [] };
        map.set(name, group);
        groups.push(group);
      }
      map.get(name).items.push(item);
    });
    return groups;
  }

  function priceCard(p) {
    return `<article class="hub-price">
      <h3>${esc(p.title)}</h3>
      <div class="hub-price__amount">${esc(p.price_label)}</div>
      <p>${esc(p.summary || '')}</p>
      <button type="button" class="hub-btn hub-btn--yellow hub-btn--sm" data-order-item="${p.id}">درخواست برای مشتری</button>
    </article>`;
  }

  function renderPrices() {
    if (isPartnerUser()) {
      const groups = priceGroups(state.prices);
      return `
        <div class="hub-topbar"><h2>فهرست قیمت</h2></div>
        <p class="hub-hint">قیمت‌های «از» شروع همکاری است. خدمت‌های استعلامی را به‌صورت سفارش بفرستید و لوگو، تصویر یا PDF را کنار همان سفارش بگذارید.</p>
        ${groups.map(g => `<h3 class="hub-group">${esc(g.name)}</h3><div class="hub-prices">${g.items.map(priceCard).join('')}</div>`).join('') || '<p>فهرست قیمت خالی است</p>'}`;
    }
    const edit = state.priceEdit;
    return `
      <div class="hub-topbar"><h2>فهرست قیمت</h2></div>
      <p class="hub-hint">این فهرست را بازاریاب‌ها، دسته‌بندی‌شده، می‌بینند. قیمت را همان‌طور بنویسید که باید به مشتری گفته شود.</p>
      <div class="hub-card" style="margin-bottom:16px">
        <form id="priceForm" class="hub-form-grid" style="padding:16px">
          <div class="hub-field"><label>عنوان خدمت</label><input name="title" required value="${esc(edit?.title || '')}"></div>
          <div class="hub-field"><label>دسته</label><input name="category" placeholder="طراحی سایت" value="${esc(edit?.category || '')}"></div>
          <div class="hub-field"><label>قیمت نمایشی</label><input name="price_label" placeholder="از ۹۹ دلار یا استعلام" required value="${esc(edit?.price_label || '')}"></div>
          <div class="hub-field"><label>عدد، اگر دارد</label><input name="amount" dir="ltr" inputmode="decimal" value="${edit?.amount ?? ''}"></div>
          <div class="hub-field hub-field--full"><label>توضیح</label><textarea name="summary">${esc(edit?.summary || '')}</textarea></div>
          <div class="hub-field hub-field--full hub-actions">
            <button class="hub-btn hub-btn--yellow" type="submit">${edit ? 'ذخیره تغییر' : 'افزودن به فهرست'}</button>
            ${edit ? '<button class="hub-btn hub-btn--ghost" type="button" id="cancelPriceEdit">انصراف</button>' : ''}
          </div>
        </form>
      </div>
      ${priceGroups(state.prices).map(g => `<h3 class="hub-group">${esc(g.name)}</h3><div class="hub-card" style="margin-bottom:16px"><div class="hub-table-wrap"><table class="hub-table"><thead><tr>
        <th>خدمت</th><th>توضیح</th><th>قیمت</th><th>وضعیت</th><th></th>
      </tr></thead><tbody>
        ${g.items.map(p => `<tr>
          <td>${esc(p.title)}</td><td>${esc(p.summary || '—')}</td><td>${esc(p.price_label)}</td>
          <td>${Number(p.is_active) ? 'فعال' : 'مخفی'}</td>
          <td><div class="hub-actions">
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-edit-price="${p.id}">ویرایش</button>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-toggle-price="${p.id}" data-active="${Number(p.is_active) ? '0' : '1'}">${Number(p.is_active) ? 'مخفی کن' : 'نشان بده'}</button>
          </div></td>
        </tr>`).join('')}
      </tbody></table></div></div>`).join('') || '<p>موردی نیست</p>'}`;
  }

  function renderOrders() {
    const form = isPartnerUser() ? `
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>سفارش یا درخواست قیمت</h3></div>
        <form id="orderForm" class="hub-form-grid" style="padding:16px">
          <div class="hub-field"><label>نام مشتری</label><input name="client_name" required></div>
          <div class="hub-field"><label>خدمت</label><select name="price_item_id" required>
            ${state.prices.map(p => `<option value="${p.id}">${esc(p.title)} — ${esc(p.price_label)}</option>`).join('')}
          </select></div>
          <div class="hub-field"><label>تلفن مشتری</label><input name="client_phone" dir="ltr"></div>
          <div class="hub-field"><label>ایمیل مشتری</label><input name="client_email" type="email" dir="ltr"></div>
          <div class="hub-field hub-field--full"><label>توضیح نیاز</label><textarea name="details" required placeholder="شهر، زبان سایت، مهلت، یا مشخصات کالا"></textarea></div>
          <div class="hub-field hub-field--full"><label>فایل مشتری</label><input name="files" type="file" multiple accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"><p class="hub-hint hub-hint--in">لوگو، تصویر یا PDF. حداکثر ۵ فایل و هر کدام تا ۸ مگابایت.</p></div>
          <div class="hub-field hub-field--full"><button class="hub-btn hub-btn--yellow" type="submit">ثبت سفارش</button></div>
        </form>
      </div>` : '';
    return `
      <div class="hub-topbar"><h2>${isPartnerUser() ? 'سفارش‌های من' : 'سفارش بازاریاب‌ها'}</h2></div>
      ${form}
      ${state.orderThread ? `<div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>گفتگوی سفارش ${esc(state.orderThread.order?.client_name || '')}</h3>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeOrderThread">بستن</button></div>
        <div class="hub-thread">
          ${(state.orderThread.messages || []).map(m => `<div class="hub-bubble${Number(m.user_id) === Number(state.user?.id) ? ' hub-bubble--mine' : ''}">
            <div class="hub-note__meta">${esc(m.author_name)} — ${fmtDate(m.created_at)}</div>${esc(m.body)}
          </div>`).join('') || '<p class="hub-hint hub-hint--in">هنوز پیامی نیست</p>'}
          ${(state.orderThread.documents || []).map(d => `<p class="hub-hint hub-hint--in">${d.kind === 'invoice' ? 'فاکتور' : 'پیش‌فاکتور'} ${esc(d.number)} — ${esc(DOC_LABELS[d.status] || d.status)}</p>`).join('')}
          ${(state.orderThread.files || []).map(f => `<p class="hub-hint hub-hint--in"><a href="/api/orders/${state.openOrder}/files/${f.id}" target="_blank" rel="noopener">${esc(f.original_name)}</a></p>`).join('')}
        </div>
        <form id="orderReply" style="padding:16px">
          <div class="hub-field"><textarea name="body" required placeholder="پیام درباره قیمت، خرید یا تحویل…"></textarea></div>
          <div class="hub-field"><label>افزودن تصویر یا PDF</label><input name="files" type="file" multiple accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"></div>
          <button class="hub-btn hub-btn--yellow hub-btn--sm" type="submit">ارسال پیام</button>
        </form>
      </div>` : ''}
      <div class="hub-card"><div class="hub-table-wrap"><table class="hub-table"><thead><tr>
        <th>مشتری</th><th>خدمت</th>${isPartnerUser() ? '' : '<th>بازاریاب</th>'}<th>وضعیت</th><th>پاسخ قیمت</th><th>تاریخ</th><th></th>
      </tr></thead><tbody>
        ${state.orders.map(o => `<tr>
          <td>${freshPill('order', o.id)}${esc(o.client_name)}<div class="hub-path" dir="ltr">${esc(o.client_phone || o.client_email || '')}</div></td>
          <td>${esc(o.service_title)}<div class="hub-path">${esc(o.details)}</div></td>
          ${isPartnerUser() ? '' : `<td>${esc(o.partner_name || '')}<div class="hub-path" dir="ltr">${esc(o.partner_code || '')}</div></td>`}
          <td>${isPartnerUser() ? esc(ORDER_LABELS[o.status] || o.status) : `<select data-order-status="${o.id}">${Object.entries(ORDER_LABELS).map(([k, v]) => `<option value="${k}"${o.status === k ? ' selected' : ''}>${v}</option>`).join('')}</select>`}</td>
          <td>${isPartnerUser() ? esc(o.quote_note || '—') : `<textarea data-order-note="${o.id}">${esc(o.quote_note || '')}</textarea><button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-save-order="${o.id}">ذخیره</button>`}</td>
          <td>${fmtDate(o.created_at)}</td>
          <td><button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-open-order="${o.id}">گفتگو</button>
            ${isPartnerUser() ? '' : `<button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-proforma-order="${o.id}">پیش‌فاکتور</button>`}</td>
        </tr>`).join('') || `<tr><td colspan="${isPartnerUser() ? 6 : 7}">سفارشی نیست</td></tr>`}
      </tbody></table></div></div>`;
  }

  function renderTickets() {
    const thread = state.ticketThread;
    const ticket = thread?.ticket;
    const messages = thread?.messages || [];
    const list = `
      <div class="hub-card">
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>موضوع</th>${isPartnerUser() ? '' : '<th>بازاریاب</th>'}<th>وضعیت</th><th>به‌روزرسانی</th>
        </tr></thead><tbody>
          ${state.tickets.map(t => `<tr data-open-ticket="${t.id}">
            <td>${freshPill('ticket', t.id)}${esc(t.subject)}</td>
            ${isPartnerUser() ? '' : `<td>${esc(t.partner_name || '')}</td>`}
            <td>${esc(TICKET_LABELS[t.status] || t.status)}</td>
            <td>${fmtDate(t.updated_at)}</td>
          </tr>`).join('') || `<tr><td colspan="${isPartnerUser() ? 3 : 4}">تیکتی نیست</td></tr>`}
        </tbody></table></div>
      </div>`;
    const pane = ticket ? `
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>${esc(ticket.subject)}</h3>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeTicketView">بازگشت به فهرست</button>
        </div>
        <div class="hub-thread">
          ${messages.map(m => `<div class="hub-bubble${Number(m.user_id) === Number(state.user?.id) ? ' hub-bubble--mine' : ''}">
            <div class="hub-note__meta">${esc(m.author_name)} — ${m.author_role === 'partner' ? 'بازاریاب' : 'بیزدوار'} — ${fmtDate(m.created_at)}</div>
            ${esc(m.body)}
          </div>`).join('')}
        </div>
        ${ticket.status === 'closed' ? '<p class="hub-hint hub-hint--in">این تیکت بسته شده است.</p>' : `
          <form id="ticketReply" style="padding:16px">
            <div class="hub-field"><textarea name="body" required placeholder="پاسخ…"></textarea></div>
            <button class="hub-btn hub-btn--yellow hub-btn--sm" type="submit">ارسال پاسخ</button>
            ${isPartnerUser() ? '' : '<button class="hub-btn hub-btn--ghost hub-btn--sm" type="button" id="closeTicketBtn">بستن تیکت</button>'}
          </form>`}
      </div>` : '';
    const create = isPartnerUser() && !ticket ? `
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>تیکت جدید</h3></div>
        <form id="ticketForm" class="hub-form-grid" style="padding:16px">
          <div class="hub-field hub-field--full"><label>موضوع</label><input name="subject" required></div>
          <div class="hub-field hub-field--full"><label>متن</label><textarea name="body" required></textarea></div>
          <div class="hub-field hub-field--full"><button class="hub-btn hub-btn--yellow" type="submit">ارسال تیکت</button></div>
        </form>
      </div>` : '';
    return `
      <div class="hub-topbar"><h2>تیکت‌ها</h2></div>
      <p class="hub-hint">${isPartnerUser() ? 'سؤال قیمت، ابهام مشتری، یا پیگیری را اینجا بنویسید. پاسخ در همین صفحه می‌ماند.' : 'پاسخ تیکت‌ها همین‌جا می‌ماند. برای تیکت تازه، از «بازاریاب‌ها» یا «ورود و کاربران» روی دکمه تیکت بزنید تا برای او ایمیل هم برود.'}</p>
      ${pane}${create}${ticket ? '' : list}`;
  }

  function bindGrowthEvents() {
    document.querySelectorAll('[data-compose]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.compose = {
          kind: btn.dataset.compose,
          userId: btn.dataset.user,
          name: btn.dataset.name || '',
          email: btn.dataset.email || ''
        };
        renderView();
      });
    });
    document.getElementById('cancelCompose')?.addEventListener('click', () => {
      state.compose = null;
      renderView();
    });
    document.getElementById('composeForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const c = state.compose;
      if (!c) return;
      const fd = new FormData(e.target);
      try {
        if (c.kind === 'ticket') {
          await api('/tickets', { method: 'POST', body: { partner_id: Number(c.userId), subject: fd.get('subject'), body: fd.get('body') } });
          alert('تیکت ثبت شد و برای بازاریاب ایمیل رفت');
        } else {
          await api('/users/' + c.userId + '/mail', { method: 'POST', body: { subject: fd.get('subject'), body: fd.get('body') } });
          alert('ایمیل فرستاده شد');
        }
        state.compose = null;
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-reset-mail]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!window.confirm('لینک و کد بازیابی برای این کاربر ایمیل شود؟')) return;
        try {
          const r = await api('/users/' + btn.dataset.resetMail + '/reset-mail', { method: 'POST', body: {} });
          alert(r.message || 'ایمیل بازیابی فرستاده شد');
        } catch (err) { alert(err.message); }
      });
    });
    document.querySelectorAll('[data-go]').forEach(row => {
      row.addEventListener('click', () => {
        if (row.dataset.goOrder) state.openOrder = row.dataset.goOrder;
        if (row.dataset.goTicket) state.openTicket = row.dataset.goTicket;
        state.view = row.dataset.go;
        renderShell();
      });
    });
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => copyText(btn.dataset.copy || '', btn));
    });
    document.getElementById('partnerForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        const password = String(fd.get('password') || '');
        state.partnerFlash = await api('/partners', {
          method: 'POST',
          body: {
            name: fd.get('name'), email: fd.get('email'), password,
            phone: fd.get('phone'), company: fd.get('company'), code: fd.get('code')
          }
        });
        state.partnerFlash.password = password;
        state.partnerFlash.email = String(fd.get('email') || '');
        await loadPartners();
        renderView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-reset-partner]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const password = window.prompt('رمز جدید، حداقل ۱۰ کاراکتر');
        if (!password) return;
        try {
          await api('/partners/' + btn.dataset.resetPartner, { method: 'PATCH', body: { password } });
          alert('رمز عوض شد');
        } catch (err) { alert(err.message); }
      });
    });
    document.querySelectorAll('[data-toggle-partner]').forEach(btn => {
      btn.addEventListener('click', async () => {
        await api('/partners/' + btn.dataset.togglePartner, { method: 'PATCH', body: { active: btn.dataset.active === '1' } });
        loadView();
      });
    });
    document.getElementById('priceForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const payload = {
        title: fd.get('title'), category: fd.get('category'), price_label: fd.get('price_label'),
        amount: fd.get('amount'), summary: fd.get('summary'),
        is_active: state.priceEdit ? !!Number(state.priceEdit.is_active) : true,
        sort_order: state.priceEdit?.sort_order || 0
      };
      try {
        if (state.priceEdit) {
          await api('/prices/' + state.priceEdit.id, { method: 'PATCH', body: payload });
          state.priceEdit = null;
        } else {
          await api('/prices', { method: 'POST', body: payload });
        }
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-edit-price]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.priceEdit = state.prices.find(p => String(p.id) === btn.dataset.editPrice) || null;
        renderView();
        document.getElementById('priceForm')?.scrollIntoView({ block: 'nearest' });
      });
    });
    document.getElementById('cancelPriceEdit')?.addEventListener('click', () => {
      state.priceEdit = null;
      renderView();
    });
    document.querySelectorAll('[data-toggle-price]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const item = state.prices.find(p => String(p.id) === btn.dataset.togglePrice);
        if (!item) return;
        await api('/prices/' + item.id, { method: 'PATCH', body: { ...item, is_active: btn.dataset.active === '1' } });
        loadView();
      });
    });
    document.querySelectorAll('[data-order-item]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.view = 'orders';
        state.orderItem = btn.dataset.orderItem;
        renderShell();
      });
    });
    const orderForm = document.getElementById('orderForm');
    if (orderForm && state.orderItem) {
      const select = orderForm.querySelector('[name="price_item_id"]');
      if (select) select.value = state.orderItem;
      state.orderItem = '';
    }
    orderForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        const created = await api('/orders', { method: 'POST', body: {
          client_name: fd.get('client_name'), price_item_id: Number(fd.get('price_item_id')),
          client_phone: fd.get('client_phone'), client_email: fd.get('client_email'), details: fd.get('details')
        } });
        try {
          await uploadOrderFiles(created.id, e.target);
        } catch (fileErr) {
          alert('سفارش ثبت شد، ولی فایل نرفت: ' + fileErr.message);
        }
        e.target.reset();
        await loadOrders();
        renderView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-save-order]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.saveOrder;
        const status = document.querySelector(`[data-order-status="${id}"]`)?.value;
        const quote_note = document.querySelector(`[data-order-note="${id}"]`)?.value || '';
        try {
          await api('/orders/' + id, { method: 'PATCH', body: { status, quote_note } });
          btn.textContent = 'ذخیره شد';
        } catch (err) { alert(err.message); }
      });
    });
    document.querySelectorAll('[data-open-ticket]').forEach(row => {
      row.addEventListener('click', async () => {
        state.openTicket = row.dataset.openTicket;
        await markFresh('ticket', state.openTicket);
        loadView();
      });
    });
    document.getElementById('closeTicketView')?.addEventListener('click', () => {
      state.openTicket = null;
      loadView();
    });
    document.getElementById('ticketForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        const r = await api('/tickets', { method: 'POST', body: { subject: fd.get('subject'), body: fd.get('body') } });
        state.openTicket = r.id;
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.getElementById('ticketReply')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        await api('/tickets/' + state.openTicket + '/messages', { method: 'POST', body: { body: fd.get('body') } });
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.getElementById('closeTicketBtn')?.addEventListener('click', async () => {
      await api('/tickets/' + state.openTicket, { method: 'PATCH', body: { status: 'closed' } });
      loadView();
    });
    document.querySelectorAll('[data-open-order]').forEach(btn => {
      btn.addEventListener('click', async () => {
        state.openOrder = btn.dataset.openOrder;
        await markFresh('order', state.openOrder);
        await markFresh('omsg', state.openOrder);
        loadView();
      });
    });
    document.getElementById('closeOrderThread')?.addEventListener('click', () => { state.openOrder = null; loadView(); });
    document.getElementById('orderReply')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        await api('/orders/' + state.openOrder + '/messages', { method: 'POST', body: { body: fd.get('body') } });
        await uploadOrderFiles(state.openOrder, e.target);
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-proforma-order]').forEach(btn => {
      btn.addEventListener('click', () => {
        const order = state.orders.find(o => String(o.id) === btn.dataset.proformaOrder);
        if (!order) return;
        state.view = 'docs';
        state.docKind = 'proforma';
        state.openDoc = null;
        state.docDraft = {
          order_id: order.id,
          partner_id: order.partner_id,
          client_name: order.client_name,
          client_phone: order.client_phone || '',
          client_email: order.client_email || '',
          lines: [{ title: order.service_title, qty: 1, unit_price: '' }]
        };
        renderShell();
      });
    });
    document.querySelectorAll('[data-doc-kind]').forEach(btn => {
      btn.addEventListener('click', () => { state.docKind = btn.dataset.docKind; state.openDoc = null; loadView(); });
    });
    document.querySelectorAll('[data-open-doc]').forEach(row => {
      row.addEventListener('click', () => { state.openDoc = row.dataset.openDoc; loadView(); });
    });
    document.getElementById('closeDoc')?.addEventListener('click', () => { state.openDoc = null; loadView(); });
    document.getElementById('addDocLine')?.addEventListener('click', () => {
      const box = document.getElementById('docLines');
      const row = box?.querySelector('.hub-doc-line');
      if (!box || !row) return;
      const copy = row.cloneNode(true);
      copy.querySelectorAll('input').forEach(input => { input.value = input.name === 'line_qty' ? '1' : ''; });
      box.appendChild(copy);
    });
    document.getElementById('docForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const titles = fd.getAll('line_title');
      const qtys = fd.getAll('line_qty');
      const prices = fd.getAll('line_price');
      const lines = titles.map((title, i) => ({ title, qty: qtys[i], unit_price: prices[i] })).filter(l => String(l.title).trim());
      try {
        const r = await api('/documents', { method: 'POST', body: {
          kind: state.docKind || 'proforma',
          order_id: fd.get('order_id') || null,
          partner_id: fd.get('partner_id') || null,
          client_name: fd.get('client_name'),
          client_phone: fd.get('client_phone'),
          client_email: fd.get('client_email'),
          currency: fd.get('currency') || 'USD',
          notes: fd.get('notes'),
          valid_until: fd.get('valid_until'),
          lines
        } });
        state.docDraft = null;
        state.openDoc = r.id;
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-doc-status]').forEach(btn => {
      btn.addEventListener('click', async () => {
        await api('/documents/' + state.openDoc, { method: 'PATCH', body: { status: btn.dataset.docStatus } });
        loadView();
      });
    });
    document.getElementById('makeInvoice')?.addEventListener('click', async () => {
      try {
        const r = await api('/documents/' + state.openDoc + '/invoice', { method: 'POST', body: {} });
        state.docKind = 'invoice';
        state.openDoc = r.id;
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.getElementById('printDoc')?.addEventListener('click', () => printDocument(state.docRecord));
    document.querySelectorAll('[data-inbox]').forEach(row => {
      row.addEventListener('click', () => {
        const kind = row.dataset.inbox;
        const id = row.dataset.id;
        if (kind === 'lead') { state.view = 'leads'; renderShell(); setTimeout(() => openLeadModal(+id), 400); }
        if (kind === 'ticket') { state.view = 'tickets'; state.openTicket = id; renderShell(); }
        if (kind === 'order') { state.view = 'orders'; state.openOrder = id; renderShell(); }
      });
    });
    document.getElementById('purchaseForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        await api('/purchases', { method: 'POST', body: {
          supplier: fd.get('supplier'), title: fd.get('title'), amount: fd.get('amount'),
          currency: fd.get('currency'), order_id: fd.get('order_id'), notes: fd.get('notes'), status: 'planned'
        } });
        loadView();
      } catch (err) { alert(err.message); }
    });
    document.querySelectorAll('[data-buy-status]').forEach(sel => {
      sel.addEventListener('change', async () => {
        await api('/purchases/' + sel.dataset.buyStatus, { method: 'PATCH', body: { status: sel.value } });
      });
    });
  }

  const INBOX_LABELS = { lead: 'سرنخ سایت', ticket: 'تیکت بازاریاب', order: 'پیام سفارش' };

  function renderInbox() {
    return `
      <div class="hub-topbar"><h2>صندوق پیام</h2></div>
      <p class="hub-hint">پیام فرم سایت، تیکت بازاریاب و گفتگوی سفارش‌ها اینجاست. چیزی برای پیگیری بیرون از پنل نمی‌ماند.</p>
      <div class="hub-card"><div class="hub-table-wrap"><table class="hub-table"><thead><tr>
        <th>نوع</th><th>موضوع</th><th>متن</th><th>زمان</th>
      </tr></thead><tbody>
        ${state.inbox.map(item => `<tr data-inbox="${esc(item.kind)}" data-id="${item.id}">
          <td>${esc(INBOX_LABELS[item.kind] || item.kind)}</td>
          <td>${esc(item.title)}</td>
          <td>${esc(item.body)}</td>
          <td>${fmtDate(item.at)}</td>
        </tr>`).join('') || '<tr><td colspan="4">پیامی نیست</td></tr>'}
      </tbody></table></div></div>`;
  }

  function renderDocs() {
    const draft = state.docDraft || {};
    const lines = draft.lines || [{ title: '', qty: 1, unit_price: '' }];
    const doc = state.docRecord;
    const paper = doc ? `
      <div class="hub-card hub-paper" id="paper">
        <div class="hub-card__head"><h3>${doc.kind === 'invoice' ? 'فاکتور' : 'پیش‌فاکتور'} ${esc(doc.number)}</h3>
          <div>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="printDoc">چاپ</button>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeDoc">بازگشت</button>
          </div>
        </div>
        <div class="hub-paper__body">
          <p><strong>${esc(doc.client_name)}</strong><br><span dir="ltr">${esc(doc.client_phone || '')} ${esc(doc.client_email || '')}</span></p>
          <p>وضعیت: ${esc(DOC_LABELS[doc.status] || doc.status)}${doc.partner_name ? ' — بازاریاب: ' + esc(doc.partner_name) : ''}${doc.valid_until ? ' — اعتبار تا ' + esc(doc.valid_until) : ''}</p>
          <table class="hub-table"><thead><tr><th>شرح</th><th>تعداد</th><th>فی</th><th>مبلغ</th></tr></thead><tbody>
            ${(doc.lines || []).map(l => `<tr><td>${esc(l.title)}</td><td>${esc(l.qty)}</td><td>${money(l.unit_price, doc.currency)}</td><td>${money(l.amount, doc.currency)}</td></tr>`).join('')}
          </tbody></table>
          <p class="hub-price__amount">جمع: ${money(doc.total, doc.currency)}</p>
          ${doc.notes ? `<p>${esc(doc.notes)}</p>` : ''}
        </div>
        ${isPartnerUser() ? '' : `<div style="padding:0 16px 16px;display:flex;gap:8px;flex-wrap:wrap">
          ${(doc.kind === 'invoice' ? ['issued', 'paid', 'void'] : ['draft', 'sent', 'accepted', 'rejected']).map(st =>
            `<button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-doc-status="${st}">${DOC_LABELS[st]}</button>`).join('')}
          ${doc.kind === 'proforma' && doc.status !== 'rejected' ? '<button type="button" class="hub-btn hub-btn--yellow hub-btn--sm" id="makeInvoice">تبدیل به فاکتور</button>' : ''}
        </div>`}
      </div>` : '';
    const form = !isPartnerUser() && !doc ? `
      <div class="hub-card" style="margin-bottom:16px">
        <div class="hub-card__head"><h3>${state.docKind === 'invoice' ? 'فاکتور جدید' : 'پیش‌فاکتور جدید'}</h3></div>
        <form id="docForm" class="hub-form-grid" style="padding:16px">
          <input type="hidden" name="order_id" value="${esc(draft.order_id || '')}">
          <input type="hidden" name="partner_id" value="${esc(draft.partner_id || '')}">
          <div class="hub-field"><label>مشتری</label><input name="client_name" required value="${esc(draft.client_name || '')}"></div>
          <div class="hub-field"><label>تلفن</label><input name="client_phone" dir="ltr" value="${esc(draft.client_phone || '')}"></div>
          <div class="hub-field"><label>ایمیل</label><input name="client_email" dir="ltr" value="${esc(draft.client_email || '')}"></div>
          <div class="hub-field"><label>ارز</label><input name="currency" dir="ltr" value="USD"></div>
          <div class="hub-field"><label>اعتبار تا</label><input name="valid_until" type="date"></div>
          <div class="hub-field hub-field--full" id="docLines">
            ${lines.map(l => `<div class="hub-doc-line">
              <input name="line_title" placeholder="شرح" value="${esc(l.title || '')}" required>
              <input name="line_qty" dir="ltr" value="${esc(l.qty || 1)}" inputmode="decimal">
              <input name="line_price" dir="ltr" placeholder="فی" value="${esc(l.unit_price ?? '')}" inputmode="decimal">
            </div>`).join('')}
          </div>
          <div class="hub-field hub-field--full"><button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="addDocLine">ردیف جدید</button></div>
          <div class="hub-field hub-field--full"><label>یادداشت</label><textarea name="notes"></textarea></div>
          <div class="hub-field hub-field--full"><button class="hub-btn hub-btn--yellow" type="submit">صدور</button></div>
        </form>
      </div>` : '';
    return `
      <div class="hub-topbar"><h2>${isPartnerUser() ? 'اسناد من' : 'پیش‌فاکتور و فاکتور'}</h2>
        <div>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-doc-kind="proforma">پیش‌فاکتور</button>
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-doc-kind="invoice">فاکتور</button>
        </div>
      </div>
      <p class="hub-hint">${state.docKind === 'invoice' ? 'فاکتور بعد از قبول پیش‌فاکتور صادر می‌شود. وضعیت پرداخت را همین‌جا عوض کنید.' : 'پیش‌فاکتور را از سفارش بسازید یا دستی بنویسید، بعد برای مشتری چاپ کنید.'}</p>
      ${paper}${doc ? '' : form}
      ${doc ? '' : `<div class="hub-card"><div class="hub-table-wrap"><table class="hub-table"><thead><tr>
        <th>شماره</th><th>مشتری</th>${isPartnerUser() ? '' : '<th>بازاریاب</th>'}<th>وضعیت</th><th>جمع</th><th>تاریخ</th>
      </tr></thead><tbody>
        ${state.docs.map(d => `<tr data-open-doc="${d.id}">
          <td dir="ltr">${esc(d.number)}</td>
          <td>${esc(d.client_name)}</td>
          ${isPartnerUser() ? '' : `<td>${esc(d.partner_name || '—')}</td>`}
          <td>${esc(DOC_LABELS[d.status] || d.status)}</td>
          <td>${money(d.total, d.currency)}</td>
          <td>${fmtDate(d.issued_at)}</td>
        </tr>`).join('') || `<tr><td colspan="${isPartnerUser() ? 5 : 6}">سندی نیست</td></tr>`}
      </tbody></table></div></div>`}`;
  }

  function renderPurchases() {
    return `
      <div class="hub-topbar"><h2>خریدها</h2></div>
      <p class="hub-hint">خرید از تأمین‌کننده را اینجا ثبت کنید تا کنار سفارش مشتری بماند. اگر به سفارشی وصل است، شماره همان سفارش را بنویسید.</p>
      <div class="hub-card" style="margin-bottom:16px">
        <form id="purchaseForm" class="hub-form-grid" style="padding:16px">
          <div class="hub-field"><label>تأمین‌کننده</label><input name="supplier" required></div>
          <div class="hub-field"><label>عنوان خرید</label><input name="title" required></div>
          <div class="hub-field"><label>مبلغ</label><input name="amount" dir="ltr" inputmode="decimal" required></div>
          <div class="hub-field"><label>ارز</label><input name="currency" dir="ltr" value="USD"></div>
          <div class="hub-field"><label>شماره سفارش، اگر هست</label><input name="order_id" dir="ltr"></div>
          <div class="hub-field hub-field--full"><label>یادداشت</label><textarea name="notes"></textarea></div>
          <div class="hub-field hub-field--full"><button class="hub-btn hub-btn--yellow" type="submit">ثبت خرید</button></div>
        </form>
      </div>
      <div class="hub-card"><div class="hub-table-wrap"><table class="hub-table"><thead><tr>
        <th>تأمین‌کننده</th><th>عنوان</th><th>مبلغ</th><th>سفارش</th><th>وضعیت</th><th>تاریخ</th>
      </tr></thead><tbody>
        ${state.purchases.map(p => `<tr>
          <td>${freshPill('purchase', p.id)}${esc(p.supplier)}</td>
          <td>${esc(p.title)}</td>
          <td>${money(p.amount, p.currency)}</td>
          <td>${p.order_id || '—'}</td>
          <td><select data-buy-status="${p.id}">${Object.entries(BUY_LABELS).map(([k, v]) => `<option value="${k}"${p.status === k ? ' selected' : ''}>${v}</option>`).join('')}</select></td>
          <td>${fmtDate(p.created_at)}</td>
        </tr>`).join('') || '<tr><td colspan="6">خریدی ثبت نشده</td></tr>'}
      </tbody></table></div></div>`;
  }

  function printDocument(doc) {
    if (!doc) return;
    const rows = (doc.lines || []).map(l => `<tr><td>${esc(l.title)}</td><td>${esc(l.qty)}</td><td>${money(l.unit_price, doc.currency)}</td><td>${money(l.amount, doc.currency)}</td></tr>`).join('');
    const html = `<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><title>${esc(doc.number)}</title>
      <style>body{font-family:Tahoma,sans-serif;margin:32px;color:#111}table{width:100%;border-collapse:collapse;margin:16px 0}td,th{border:1px solid #ccc;padding:8px;text-align:right}h1{margin:0 0 8px}</style></head><body>
      <h1>${doc.kind === 'invoice' ? 'فاکتور' : 'پیش‌فاکتور'} ${esc(doc.number)}</h1>
      <p>Bizdavar Group<br>${esc(doc.client_name)}<br>${esc(doc.client_phone || '')} ${esc(doc.client_email || '')}</p>
      <table><thead><tr><th>شرح</th><th>تعداد</th><th>فی</th><th>مبلغ</th></tr></thead><tbody>${rows}</tbody></table>
      <p><strong>جمع: ${money(doc.total, doc.currency)}</strong></p>
      ${doc.notes ? `<p>${esc(doc.notes)}</p>` : ''}
      </body></html>`;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  }

  // ─── Boot ───
  async function boot() {
    const resetToken = new URLSearchParams(location.search).get('reset');
    if (resetToken) {
      renderReset(resetToken);
      return;
    }
    try {
      const r = await api('/auth/me');
      if (r.csrfToken) state.csrfToken = r.csrfToken;
      if (r.mfaEnroll && !r.mfaOk) {
        await startEnroll();
        return;
      }
      await enterHub({ ...r, mfaEnroll: false, mfaRequired: false });
    } catch {
      renderLogin();
    }
  }

  boot();
})();
