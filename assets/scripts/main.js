document.addEventListener('DOMContentLoaded', () => {

  if (window.initDataIcons) initDataIcons();

  initMobileMenu();

  initBackToTop();

  initScrollSpy();

  initContactForm();

});



function openMobileDrawer() {

  const drawer = document.getElementById('mobileDrawer');

  const overlay = document.getElementById('overlay');

  const menuBtn = document.getElementById('mobileMenuBtn');

  const bottomMenu = document.getElementById('mobileBottomMenu');

  const desktopToggle = document.getElementById('menuToggle');



  if (drawer) {

    drawer.classList.add('open');

    drawer.setAttribute('aria-hidden', 'false');

  }

  if (overlay) overlay.classList.add('active');

  if (menuBtn) {

    menuBtn.classList.add('active');

    menuBtn.setAttribute('aria-expanded', 'true');

  }

  if (bottomMenu) bottomMenu.classList.add('active');

  if (desktopToggle) {

    desktopToggle.classList.add('active');

    desktopToggle.setAttribute('aria-expanded', 'true');

  }

  document.body.classList.add('drawer-open');

  document.body.style.overflow = 'hidden';

}



function closeMobileDrawer() {

  const drawer = document.getElementById('mobileDrawer');

  const overlay = document.getElementById('overlay');

  const menuBtn = document.getElementById('mobileMenuBtn');

  const bottomMenu = document.getElementById('mobileBottomMenu');

  const desktopToggle = document.getElementById('menuToggle');

  const nav = document.getElementById('nav');



  if (drawer) {

    drawer.classList.remove('open');

    drawer.setAttribute('aria-hidden', 'true');

  }

  if (overlay) overlay.classList.remove('active');

  if (menuBtn) {

    menuBtn.classList.remove('active');

    menuBtn.setAttribute('aria-expanded', 'false');

  }

  if (bottomMenu) bottomMenu.classList.remove('active');

  if (desktopToggle) {

    desktopToggle.classList.remove('active');

    desktopToggle.setAttribute('aria-expanded', 'false');

  }

  if (nav) nav.classList.remove('open');

  document.body.classList.remove('drawer-open');

  document.body.style.overflow = '';

}



function initMobileMenu() {

  document.addEventListener('click', e => {

    if (e.target.closest('#menuToggle')) {

      const nav = document.getElementById('nav');

      const open = nav && nav.classList.toggle('open');

      if (open) openMobileDrawer();

      else closeMobileDrawer();

      return;

    }



    if (e.target.closest('#mobileMenuBtn, #mobileBottomMenu')) {

      const drawer = document.getElementById('mobileDrawer');

      if (drawer && drawer.classList.contains('open')) closeMobileDrawer();

      else openMobileDrawer();

      return;

    }



    if (e.target.closest('#mobileDrawerClose, #overlay')) {

      closeMobileDrawer();

      return;

    }



    if (e.target.closest('.mobile-drawer__link, .nav__link')) {

      closeMobileDrawer();

    }

  });



  document.addEventListener('keydown', e => {

    if (e.key === 'Escape') closeMobileDrawer();

  });

}



function initBackToTop() {

  const btn = document.getElementById('backToTop');

  if (!btn) return;

  window.addEventListener('scroll', () => {

    btn.classList.toggle('visible', window.scrollY > 400);

  });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

}



function initScrollSpy() {

  const sections = document.querySelectorAll('section[id]');

  const navLinks = document.querySelectorAll('.nav__link[href*="#"]');

  if (!sections.length || !navLinks.length) return;



  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      navLinks.forEach(link => {

        const href = link.getAttribute('href') || '';

        link.classList.toggle('active', href.includes(`#${entry.target.id}`));

      });

    });

  }, { rootMargin: '-40% 0px -55% 0px' });



  sections.forEach(s => observer.observe(s));

}



window.fillContactDetails = function () {

  const C = window.BIZDAVAR_CONFIG;
  const t = (k, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(k, fb) : (fb ?? k));

  const el = document.getElementById('contactDetails');

  if (!el || !C) return;



  const channels = C.contact.channels || [];
  const waUrl = (num) => `https://wa.me/${num}?text=${encodeURIComponent(C.contact.whatsappMessage)}`;

  const phoneHtml = channels.length
    ? channels.map(ch => `
        <div class="contact-info__phone-row">
          <span class="contact-info__phone-label">${ch.label}:</span>
          <a href="tel:${ch.tel}" dir="ltr">${ch.display}</a>
          ·
          <a href="${waUrl(ch.whatsapp)}" target="_blank" rel="noopener noreferrer">${t('common.whatsapp', 'واتساپ')}</a>
        </div>`).join('')
    : (C.contact.phone
      ? `<a href="tel:${C.contact.phone}" dir="ltr">${C.contact.phoneDisplay || C.contact.phone}</a>`
      : C.contact.phoneDisplay);

  el.innerHTML = `

    <h2>${t('contactPage.connectTitle', 'راه‌های ارتباطی')}</h2>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('mail', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">${t('contactPage.emailMain', 'ایمیل اصلی')}</div>

        <div class="contact-info__value"><a href="mailto:${C.contact.email}">${C.contact.email}</a></div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('mail', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">${t('contactPage.emailAlt', 'ایمیل جایگزین')}</div>

        <div class="contact-info__value"><a href="mailto:${C.contact.emailAlt}">${C.contact.emailAlt}</a></div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('whatsapp', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">${t('contactPage.phoneLabel', 'تماس / واتساپ')}</div>

        <div class="contact-info__value contact-info__value--phones">${phoneHtml}</div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('pin', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">${t('contactPage.location', 'موقعیت')}</div>

        <div class="contact-info__value">${C.contact.address}</div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('clock', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">${t('contactPage.hours', 'ساعات کاری')}</div>

        <div class="contact-info__value">${C.contact.workingHours}</div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('globe', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">${t('contactPage.websites', 'وبسایت‌ها')}</div>

        <div class="contact-info__value" dir="ltr">${C.domains.main} · ${C.domains.fast}</div>

      </div>

    </div>

    ${channels.length ? channels.map(ch => `
      <a href="${waUrl(ch.whatsapp)}" class="btn btn--green btn--block mt-16" target="_blank" rel="noopener noreferrer">
        ${t('common.whatsapp', 'واتساپ')} ${ch.label} — ${ch.display}
      </a>`).join('') : ''}

  `;

  setupWhatsappLinks();

};



window.setupWhatsappLinks = function () {

  const C = window.BIZDAVAR_CONFIG;
  const t = (k, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(k, fb) : (fb ?? k));

  if (!C) return;

  const channels = C.contact.channels || [];
  const msg = encodeURIComponent(C.contact.whatsappMessage || '');
  const waUrl = (num) => `https://wa.me/${num}?text=${msg}`;

  if (!channels.length && !C.contact.whatsapp) {
    document.querySelectorAll('#homeWhatsapp').forEach(el => {
      if (el) el.textContent = t('contactPage.quickContact', 'تماس سریع');
    });
    return;
  }

  const primary = channels[0] || { whatsapp: C.contact.whatsapp };
  const primaryUrl = waUrl(primary.whatsapp);

  document.querySelectorAll('#homeWhatsapp').forEach(el => {
    if (el) {
      el.href = primaryUrl;
      el.textContent = t('common.whatsapp', 'واتساپ');
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  });

  const tr = channels.find(c => c.id === 'tr') || channels[0];
  const ir = channels.find(c => c.id === 'ir') || channels[1];

  const btnTr = document.getElementById('whatsappBtnTr');
  const btnIr = document.getElementById('whatsappBtnIr');
  if (btnTr && tr) btnTr.href = waUrl(tr.whatsapp);
  if (btnIr && ir) btnIr.href = waUrl(ir.whatsapp);

  const legacyBtn = document.getElementById('whatsappBtn');
  if (legacyBtn && primary) legacyBtn.href = primaryUrl;

};



function prefillContactFromQuery() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const C = window.BIZDAVAR_CONFIG;
  if (!params.has('product') && !params.has('message') && !params.has('service') && !params.has('plan')) return;

  if (params.get('service')) {
    const val = params.get('service');
    const opt = form.service.querySelector(`option[value="${val}"]`);
    if (opt) form.service.value = val;
  }

  if (params.get('plan') && C?.fast?.planMessages) {
    form.service.value = 'fast-studio';
    const plan = params.get('plan');
    if (!params.get('message') && C.fast.planMessages[plan]) {
      form.message.value = C.fast.planMessages[plan];
    }
  }

  if (params.get('message')) {
    form.message.value = params.get('message');
  } else if (params.get('product')) {
    const product = params.get('product');
    const tpl = (window.BIZDAVAR_I18N
      ? window.BIZDAVAR_I18N.t('contactPage.productInquiry', '')
      : '') || 'درخواست استعلام قیمت و تامین {product}.\n\nشرایط کاربرد:\nتعداد مورد نیاز:\n';
    form.message.value = tpl.replace('{product}', product);
  }
}

function initContactForm() {

  const form = document.getElementById('contactForm');

  if (!form) return;

  prefillContactFromQuery();



  form.addEventListener('submit', e => {

    e.preventDefault();

    const C = window.BIZDAVAR_CONFIG;

    if (!form.checkValidity()) {

      form.reportValidity();

      return;

    }



    const data = {

      firstName: form.firstName.value.trim(),

      lastName: form.lastName.value.trim(),

      email: form.email.value.trim(),

      phone: form.phone.value.trim(),

      service: form.service.options[form.service.selectedIndex].text,

      message: form.message.value.trim()

    };



    const I = window.BIZDAVAR_I18N;
    const cp = (k, fb) => (I ? I.t(`contactPage.${k}`, fb) : fb);
    const fullName = `${data.firstName} ${data.lastName}`;
    const subjectTpl = cp('mailSubject', 'درخواست تماس — {name}');
    const subject = encodeURIComponent(subjectTpl.replace('{name}', fullName));

    const body = encodeURIComponent(

      `${cp('mailBodyName', 'نام')}: ${fullName}\n` +

      `${cp('mailBodyEmail', 'ایمیل')}: ${data.email}\n` +

      `${cp('mailBodyPhone', 'تلفن')}: ${data.phone || '—'}\n` +

      `${cp('mailBodyService', 'خدمات')}: ${data.service}\n\n` +

      `${cp('mailBodyMessage', 'پیام')}:\n${data.message}`

    );



    window.location.href = `mailto:${C.contact.email}?subject=${subject}&body=${body}`;



    const success = document.getElementById('formSuccess');

    if (success) success.hidden = false;

    form.reset();

  });

}


