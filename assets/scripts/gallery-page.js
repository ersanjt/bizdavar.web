/**
 * Photo gallery — category filters + lightbox.
 * Static HTML in gallery.html is the source of cards; JS only filters and opens lightbox.
 */
(function () {
  function t(key, fb) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key);
  }

  function raw(key) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function asset(src) {
    return window.resolveAssetPath ? window.resolveAssetPath(src) : '/' + src.replace(/^\//, '');
  }

  function pageHref(href) {
    return window.resolvePagePath ? window.resolvePagePath(href) : '/' + String(href || '').replace(/\.html$/i, '');
  }

  function itemCopy(id) {
    const items = raw('galleryPage.items') || {};
    return items[id] || {};
  }

  function currentCat() {
    const hash = (location.hash || '').replace(/^#/, '');
    const cats = (window.BIZDAVAR_PHOTO_GALLERY && window.BIZDAVAR_PHOTO_GALLERY.cats) || ['exhibition', 'rd', 'production', 'products'];
    return cats.indexOf(hash) >= 0 ? hash : 'all';
  }

  function setCat(cat) {
    const next = cat === 'all'
      ? location.pathname + location.search
      : location.pathname + location.search + '#' + cat;
    if (history.replaceState) history.replaceState(null, '', next);
    else if (cat === 'all') location.hash = '';
    else location.hash = cat;
  }

  function renderFilters(active) {
    const host = document.getElementById('galleryFilters');
    if (!host) return;
    host.setAttribute('aria-label', t('galleryPage.filterAria', 'فیلتر گالری'));
    const existing = host.querySelectorAll('[data-gallery-cat]');
    if (existing.length) {
      existing.forEach(function (el) {
        const on = el.getAttribute('data-gallery-cat') === active;
        el.classList.toggle('is-active', on);
        el.setAttribute('aria-pressed', on ? 'true' : 'false');
        const label = t('galleryPage.filters.' + el.getAttribute('data-gallery-cat'), el.textContent);
        if (label) el.textContent = label;
      });
      return;
    }
    const cats = ['all'].concat((window.BIZDAVAR_PHOTO_GALLERY && window.BIZDAVAR_PHOTO_GALLERY.cats) || []);
    host.innerHTML = cats.map(function (cat) {
      const on = cat === active ? ' is-active' : '';
      const href = cat === 'all' ? '/pages/gallery' : '/pages/gallery#' + cat;
      const label = t('galleryPage.filters.' + cat, cat);
      return '<a href="' + esc(href) + '" class="photo-gallery-filter' + on + '" data-gallery-cat="' + esc(cat) + '" aria-pressed="' + (cat === active ? 'true' : 'false') + '">' + esc(label) + '</a>';
    }).join('');
  }

  function renderGrid(active) {
    const host = document.getElementById('galleryGrid');
    const countEl = document.getElementById('galleryCount');
    if (!host) return;
    const cards = host.querySelectorAll('[data-gallery-cat]');
    if (cards.length) {
      let n = 0;
      cards.forEach(function (card) {
        const show = active === 'all' || card.getAttribute('data-gallery-cat') === active;
        card.classList.toggle('is-hidden', !show);
        if (show) n++;
        const id = card.getAttribute('data-gallery-id');
        const copy = itemCopy(id);
        const img = card.querySelector('img');
        const cap = card.querySelector('figcaption');
        if (img && copy.alt) img.alt = copy.alt;
        if (cap && copy.caption) cap.textContent = copy.caption;
      });
      if (countEl) {
        countEl.textContent = t('galleryPage.countText', '{count} تصویر').replace('{count}', String(n));
      }
      return;
    }
    const all = (window.BIZDAVAR_PHOTO_GALLERY && window.BIZDAVAR_PHOTO_GALLERY.items) || [];
    const items = active === 'all' ? all : all.filter(function (it) { return it.cat === active; });
    if (countEl) {
      countEl.textContent = t('galleryPage.countText', '{count} تصویر').replace('{count}', String(items.length));
    }
    if (!items.length) {
      host.innerHTML = '<p class="photo-gallery-empty">' + esc(t('galleryPage.empty', 'در این دسته هنوز تصویری نیست.')) + '</p>';
      return;
    }
    host.innerHTML = items.map(function (it) {
      const copy = itemCopy(it.id);
      const alt = copy.alt || copy.caption || it.id;
      const caption = copy.caption || '';
      const portrait = it.portrait ? ' photo-gallery-card--portrait' : '';
      return '<figure class="photo-gallery-card' + portrait + '" data-gallery-id="' + esc(it.id) + '" data-gallery-cat="' + esc(it.cat) + '">' +
        '<a href="' + esc(asset(it.src)) + '" class="photo-gallery-card__open" aria-label="' + esc(alt) + '">' +
        '<img src="' + esc(asset(it.src)) + '" alt="' + esc(alt) + '" width="800" height="600" loading="lazy">' +
        '</a>' +
        (caption ? '<figcaption>' + esc(caption) + '</figcaption>' : '') +
        '</figure>';
    }).join('');
  }

  function openLightbox(id) {
    const dlg = document.getElementById('galleryLightbox');
    const img = dlg && dlg.querySelector('img');
    const cap = dlg && dlg.querySelector('figcaption');
    const link = dlg && dlg.querySelector('[data-gallery-related]');
    const card = document.querySelector('[data-gallery-id="' + id + '"]');
    const all = (window.BIZDAVAR_PHOTO_GALLERY && window.BIZDAVAR_PHOTO_GALLERY.items) || [];
    const it = all.find(function (row) { return row.id === id; }) || (card ? {
      id: id,
      src: (card.querySelector('img') && card.querySelector('img').getAttribute('src')) || '',
      href: card.getAttribute('data-gallery-href') || ''
    } : null);
    if (!dlg || !it || !img) return;
    const copy = itemCopy(it.id);
    img.src = it.src.indexOf('/') === 0 || /^https?:/i.test(it.src) ? it.src : asset(it.src);
    img.alt = copy.alt || copy.caption || it.id;
    if (cap) cap.textContent = copy.caption || (card && card.querySelector('figcaption') ? card.querySelector('figcaption').textContent : '');
    if (link) {
      if (it.href) {
        link.hidden = false;
        link.href = pageHref(it.href);
        link.textContent = t('galleryPage.related', 'مشاهده صفحه مرتبط');
      } else {
        link.hidden = true;
      }
    }
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
  }

  function closeLightbox() {
    const dlg = document.getElementById('galleryLightbox');
    if (!dlg) return;
    if (typeof dlg.close === 'function') dlg.close();
    else dlg.removeAttribute('open');
  }

  function paint() {
    const cat = currentCat();
    renderFilters(cat);
    renderGrid(cat);
  }

  window.initGalleryPage = function initGalleryPage() {
    paint();
    const filters = document.getElementById('galleryFilters');
    const grid = document.getElementById('galleryGrid');
    const dlg = document.getElementById('galleryLightbox');
    if (filters && !filters.dataset.bound) {
      filters.dataset.bound = '1';
      filters.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-gallery-cat]');
        if (!btn) return;
        e.preventDefault();
        setCat(btn.getAttribute('data-gallery-cat'));
        paint();
      });
    }
    if (grid && !grid.dataset.bound) {
      grid.dataset.bound = '1';
      grid.addEventListener('click', function (e) {
        const open = e.target.closest('.photo-gallery-card__open');
        const card = e.target.closest('[data-gallery-id]');
        if (!card) return;
        if (open) e.preventDefault();
        openLightbox(card.getAttribute('data-gallery-id'));
      });
    }
    if (dlg && !dlg.dataset.bound) {
      dlg.dataset.bound = '1';
      dlg.addEventListener('click', function (e) {
        if (e.target === dlg) closeLightbox();
      });
      const closeBtn = dlg.querySelector('[data-gallery-close]');
      if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    }
    if (!window.__bizdavarGalleryHashBound) {
      window.__bizdavarGalleryHashBound = true;
      window.addEventListener('hashchange', paint);
    }
  };
})();
