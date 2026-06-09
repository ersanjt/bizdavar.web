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

  const el = document.getElementById('contactDetails');

  if (!el || !C) return;



  const wa = C.contact.whatsapp

    ? `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappMessage)}`

    : null;



  el.innerHTML = `

    <h2>راه‌های ارتباطی</h2>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('mail', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">ایمیل اصلی</div>

        <div class="contact-info__value"><a href="mailto:${C.contact.email}">${C.contact.email}</a></div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('mail', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">ایمیل جایگزین</div>

        <div class="contact-info__value"><a href="mailto:${C.contact.emailAlt}">${C.contact.emailAlt}</a></div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('phone', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">تلفن / واتساپ</div>

        <div class="contact-info__value">${C.contact.phone ? `<a href="tel:${C.contact.phone}">${C.contact.phoneDisplay || C.contact.phone}</a>` : C.contact.phoneDisplay}</div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('pin', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">موقعیت</div>

        <div class="contact-info__value">${C.contact.address}</div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('clock', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">ساعات کاری</div>

        <div class="contact-info__value">${C.contact.workingHours}</div>

      </div>

    </div>

    <div class="contact-info__item">

      <div class="contact-info__icon">${BD_ICON('globe', { size: 22 })}</div>

      <div>

        <div class="contact-info__label">وبسایت‌ها</div>

        <div class="contact-info__value" dir="ltr">${C.domains.main} · ${C.domains.fast}</div>

      </div>

    </div>

    ${wa ? `<a href="${wa}" class="btn btn--green btn--block mt-16" target="_blank" rel="noopener">پیام در واتساپ</a>` : ''}

  `;



  const waBtn = document.getElementById('whatsappBtn');

  if (waBtn && wa) {

    waBtn.href = wa;

  } else if (waBtn) {

    waBtn.style.display = 'none';

  }

};



window.setupWhatsappLinks = function () {

  const C = window.BIZDAVAR_CONFIG;

  if (!C || !C.contact.whatsapp) return;

  const url = `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappMessage)}`;

  document.querySelectorAll('#homeWhatsapp, #whatsappBtn').forEach(el => {

    if (el) {

      el.href = url;

      el.target = '_blank';

      el.rel = 'noopener';

    }

  });

};



function initContactForm() {

  const form = document.getElementById('contactForm');

  if (!form) return;



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



    const subject = encodeURIComponent(`درخواست تماس — ${data.firstName} ${data.lastName}`);

    const body = encodeURIComponent(

      `نام: ${data.firstName} ${data.lastName}\n` +

      `ایمیل: ${data.email}\n` +

      `تلفن: ${data.phone || '—'}\n` +

      `خدمات: ${data.service}\n\n` +

      `پیام:\n${data.message}`

    );



    window.location.href = `mailto:${C.contact.email}?subject=${subject}&body=${body}`;



    const success = document.getElementById('formSuccess');

    if (success) success.hidden = false;

    form.reset();

  });

}


