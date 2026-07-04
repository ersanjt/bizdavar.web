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

  let state = {
    user: null,
    view: 'dashboard',
    leads: [],
    posts: [],
    faqs: [],
    stats: null,
    leadFilter: '',
    leadSearch: '',
    selectedLead: null
  };

  const app = document.getElementById('app');

  async function api(path, opts = {}) {
    const res = await fetch(API + path, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
      ...opts,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || res.statusText);
    return data;
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

  // ─── Login ───
  function renderLogin(err) {
    app.innerHTML = `
      <div class="hub-login">
        <div class="hub-login__card">
          <div class="hub-login__brand">
            <h1>BizHub</h1>
            <p>CRM & CMS — Bizdavar Group</p>
          </div>
          ${err ? `<div class="hub-error">${esc(err)}</div>` : ''}
          <form id="loginForm">
            <div class="hub-field">
              <label for="email">ایمیل</label>
              <input type="email" id="email" name="email" required autocomplete="username" dir="ltr">
            </div>
            <div class="hub-field">
              <label for="password">رمز عبور</label>
              <input type="password" id="password" name="password" required autocomplete="current-password">
            </div>
            <button type="submit" class="hub-btn hub-btn--primary">ورود</button>
          </form>
        </div>
      </div>`;
    document.getElementById('loginForm').addEventListener('submit', async e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try {
        const r = await api('/auth/login', {
          method: 'POST',
          body: { email: fd.get('email'), password: fd.get('password') }
        });
        state.user = r.user;
        await loadDashboard();
        renderShell();
      } catch (err) {
        renderLogin(err.message);
      }
    });
  }

  // ─── Shell ───
  function navItem(id, label, icon) {
    return `<button type="button" class="hub-nav__item${state.view === id ? ' is-active' : ''}" data-view="${id}">${icon} ${label}</button>`;
  }

  function renderShell() {
    app.innerHTML = `
      <div class="hub-shell">
        <aside class="hub-sidebar">
          <div class="hub-sidebar__brand">
            <strong>BizHub</strong>
            <span>CRM & Content</span>
          </div>
          <nav class="hub-nav">
            ${navItem('dashboard', 'داشبورد', '📊')}
            ${navItem('leads', 'سرنخ‌ها (CRM)', '👥')}
            ${navItem('posts', 'مقالات (CMS)', '📝')}
            ${navItem('faqs', 'سوالات متداول', '❓')}
          </nav>
          <div class="hub-sidebar__foot">
            ${esc(state.user?.name || '')}<br>
            <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="logoutBtn" style="margin-top:8px;width:100%">خروج</button>
          </div>
        </aside>
        <main class="hub-main" id="hubMain"></main>
      </div>`;

    app.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.view = btn.dataset.view;
        renderShell();
        loadView();
      });
    });
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      await api('/auth/logout', { method: 'POST' });
      state.user = null;
      renderLogin();
    });
    loadView();
  }

  async function loadView() {
    const main = document.getElementById('hubMain');
    main.innerHTML = '<div class="hub-loading">بارگذاری…</div>';
    try {
      if (state.view === 'dashboard') await loadDashboard();
      if (state.view === 'leads') await loadLeads();
      if (state.view === 'posts') await loadPosts();
      if (state.view === 'faqs') await loadFaqs();
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
    if (state.view === 'leads') main.innerHTML = renderLeads();
    if (state.view === 'posts') main.innerHTML = renderPosts();
    if (state.view === 'faqs') main.innerHTML = renderFaqs();
    bindViewEvents();
  }

  function renderDashboard() {
    const s = state.stats?.stats || {};
    const pipe = s.pipeline || {};
    const recent = state.stats?.recentLeads || [];
    return `
      <div class="hub-topbar"><h2>داشبورد</h2><span class="hub-topbar__user">${esc(state.user?.email)}</span></div>
      <div class="hub-stats">
        <div class="hub-stat"><div class="hub-stat__val">${s.leads_new ?? 0}</div><div class="hub-stat__label">سرنخ جدید</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.leads_total ?? 0}</div><div class="hub-stat__label">کل سرنخ‌ها</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.posts_published ?? 0}</div><div class="hub-stat__label">مقاله منتشرشده</div></div>
        <div class="hub-stat"><div class="hub-stat__val">${s.posts_draft ?? 0}</div><div class="hub-stat__label">پیش‌نویس</div></div>
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
          <th>نام</th><th>ایمیل</th><th>تلفن</th><th>خدمات</th><th>وضعیت</th><th>تاریخ</th>
        </tr></thead><tbody>
          ${state.leads.map(l => `<tr data-lead-id="${l.id}">
            <td>${esc(l.first_name)} ${esc(l.last_name)}</td>
            <td dir="ltr">${esc(l.email)}</td>
            <td dir="ltr">${esc(l.phone || '—')}</td>
            <td>${esc(l.service)}</td>
            <td>${badge(l.status)}</td>
            <td>${fmtDate(l.created_at)}</td>
          </tr>`).join('') || '<tr><td colspan="6">سرنخی یافت نشد</td></tr>'}
        </tbody></table></div>
      </div>`;
  }

  function renderPosts() {
    return `
      <div class="hub-topbar">
        <h2>مدیریت مقالات</h2>
        <button type="button" class="hub-btn hub-btn--yellow" id="newPostBtn">+ مقاله جدید</button>
      </div>
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
      <div class="hub-card">
        <div class="hub-table-wrap"><table class="hub-table"><thead><tr>
          <th>سوال</th><th>ترتیب</th><th>وضعیت</th><th></th>
        </tr></thead><tbody>
          ${state.faqs.map(f => `<tr>
            <td>${esc(f.question_fa)}</td>
            <td>${f.sort_order}</td>
            <td>${f.is_published == 1 ? '✓ منتشر' : '— مخفی'}</td>
            <td><button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" data-edit-faq="${f.id}">ویرایش</button></td>
          </tr>`).join('') || '<tr><td colspan="4">سوالی نیست</td></tr>'}
        </tbody></table></div>
      </div>`;
  }

  function bindViewEvents() {
    document.querySelectorAll('[data-lead-id]').forEach(row => {
      row.addEventListener('click', () => openLeadModal(+row.dataset.leadId));
    });
    const search = document.getElementById('leadSearch');
    if (search) {
      search.addEventListener('change', e => { state.leadSearch = e.target.value; loadView(); });
      search.addEventListener('keydown', e => { if (e.key === 'Enter') { state.leadSearch = e.target.value; loadView(); } });
    }
    const filter = document.getElementById('leadFilter');
    if (filter) filter.addEventListener('change', e => { state.leadFilter = e.target.value; loadView(); });

    document.getElementById('newPostBtn')?.addEventListener('click', () => openPostModal());
    document.querySelectorAll('[data-edit-post]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      openPostModal(+b.dataset.editPost);
    }));

    document.getElementById('newFaqBtn')?.addEventListener('click', () => openFaqModal());
    document.querySelectorAll('[data-edit-faq]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      openFaqModal(+b.dataset.editFaq);
    });
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
          <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeModal">✕</button>
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
        <button type="button" class="hub-btn hub-btn--ghost hub-btn--sm" id="closeModal">✕</button></div>
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

  // ─── Boot ───
  async function boot() {
    try {
      const r = await api('/auth/me');
      state.user = r.user;
      await loadDashboard();
      renderShell();
    } catch {
      renderLogin();
    }
  }

  boot();
})();
