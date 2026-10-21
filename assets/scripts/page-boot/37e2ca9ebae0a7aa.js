const TEXT = {
  fa: {
    kicker: 'Bizdavar Group · از ۲۰۱۳',
    hook1: 'رشد کسب‌وکار شما',
    hook2: 'با <span class="red">دیجیتال</span>',
    hook3: 'و <span class="red">تامین صنعتی</span>',
    hookLead: 'طراحی سایت · بازاریابی دیجیتال · تجهیزات صنعتی',
    webTitle: 'سایت حرفه‌ای<br>در <span class="red">۵ روز</span>',
    priceLabel: 'شروع قیمت', daysVal: '۵ روز', daysLabel: 'تحویل کامل',
    dmTag: 'بازاریابی دیجیتال',
    dmTitle: 'تبلیغات هدفمند،<br><span class="red">مشتری واقعی</span>',
    dmLead: 'سئو، شبکه‌های اجتماعی، اپلیکیشن و CRM واتساپ FXGuard',
    indTag: 'تامین صنعتی برای ایران',
    indTitle: 'تجهیزات اصل<br>با <span class="red">مشاوره فنی فارسی</span>',
    whyTitle: 'چرا <span class="red">بیزدوار</span>؟',
    statProjects: 'پروژه وب و پلتفرم', statCountries: 'کشور فعال', statFounded: 'شروع فعالیت',
    cities: ['تبریز', 'استانبول', 'ایروان', 'دبی'],
    ctaTitle: 'همین امروز <br>شروع کنید',
    ctaBtn: 'مشاوره رایگان',
    phone: '+98 930 588 0135'
  },
  en: {
    kicker: 'Bizdavar Group · Since 2013',
    hook1: 'Grow your business',
    hook2: 'with <span class="red">digital</span>',
    hook3: '& <span class="red">industrial supply</span>',
    hookLead: 'Web design · Digital marketing · Industrial equipment',
    webTitle: 'A pro website<br>in <span class="red">5 days</span>',
    priceLabel: 'Starting price', daysVal: '5 days', daysLabel: 'Full delivery',
    dmTag: 'Digital marketing',
    dmTitle: 'Targeted ads,<br><span class="red">real customers</span>',
    dmLead: 'SEO, social media, apps and FXGuard WhatsApp CRM',
    indTag: 'Industrial supply',
    indTitle: 'Genuine equipment,<br><span class="red">expert support</span>',
    whyTitle: 'Why <span class="red">Bizdavar</span>?',
    statProjects: 'Web & platform projects', statCountries: 'Countries served', statFounded: 'Founded',
    cities: ['Tabriz', 'Istanbul', 'Yerevan', 'Dubai'],
    ctaTitle: 'Start <br>today',
    ctaBtn: 'Free consultation',
    phone: '+90 501 067 6486'
  },
  tr: {
    kicker: 'Bizdavar Group · 2013\'ten beri',
    hook1: '<span class="red">Dijital</span> çözümler',
    hook2: 've <span class="red">endüstriyel tedarikle</span>',
    hook3: 'işinizi büyütün',
    hookLead: 'Web tasarım · Dijital pazarlama · Endüstriyel ekipman',
    webTitle: '<span class="red">5 günde</span><br>profesyonel site',
    priceLabel: 'Başlangıç fiyatı', daysVal: '5 gün', daysLabel: 'Teslim süresi',
    dmTag: 'Dijital pazarlama',
    dmTitle: 'Hedefli reklam,<br><span class="red">gerçek müşteri</span>',
    dmLead: 'SEO, sosyal medya, uygulama ve FXGuard WhatsApp CRM',
    indTag: 'Endüstriyel tedarik',
    indTitle: 'Orijinal ekipman,<br><span class="red">uzman destek</span>',
    whyTitle: 'Neden <span class="red">Bizdavar</span>?',
    statProjects: 'Web ve platform projesi', statCountries: 'Aktif ülke', statFounded: 'Kuruluş',
    cities: ['Tebriz', 'İstanbul', 'Erivan', 'Dubai'],
    ctaTitle: 'Bugün <br>başlayın',
    ctaBtn: 'Ücretsiz danışmanlık',
    phone: '+90 501 067 6486'
  }
};

const TIMELINES = {
  full: { duration: 30, scenes: { intro: [0, 3.6], hook: [3.6, 7.8], web: [7.8, 12.4], dm: [12.4, 16.8], ind: [16.8, 21.4], why: [21.4, 25.6], cta: [25.6, 30] } },
  short: { duration: 15, scenes: { intro: [0, 2.2], web: [2.2, 5.6], ind: [5.6, 9.0], why: [9.0, 11.6], cta: [11.6, 15] } }
};

const q = new URLSearchParams(location.search);
const lang = TEXT[q.get('lang')] ? q.get('lang') : 'fa';
const cut = TIMELINES[q.get('cut')] ? q.get('cut') : 'full';
const T = TEXT[lang];
const rtl = lang === 'fa';
document.documentElement.lang = lang;
document.documentElement.dir = rtl ? 'rtl' : 'ltr';
if (q.get('layout') === 'landscape') document.body.classList.add('landscape');

document.querySelectorAll('[data-t]').forEach(el => { el.innerHTML = T[el.dataset.t].replace(/ · /g, '&nbsp;· '); });
document.getElementById('cities').innerHTML = T.cities.map(c => `<div class="city">${c}</div>`).join('');

const DURATION = TIMELINES[cut].duration;
const FA = '۰۱۲۳۴۵۶۷۸۹';
const fmt = n => rtl ? String(n).replace(/\d/g, d => FA[d]) : String(n);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeOut = p => 1 - Math.pow(1 - p, 3);
const easeBack = p => { const c = 1.6; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); };
const sideDir = rtl ? 1 : -1;

const scenes = [];
document.querySelectorAll('[data-id]').forEach(el => {
  const span = TIMELINES[cut].scenes[el.dataset.id];
  if (!span) { el.classList.add('off'); return; }
  scenes.push({
    el,
    start: span[0],
    end: span[1],
    last: !!el.dataset.last,
    items: [...el.querySelectorAll('[data-a]')],
    kb: el.querySelector('[data-kb]'),
    counters: [...el.querySelectorAll('[data-count]')]
  });
});

function fx(el, local) {
  const at = +el.dataset.a;
  const dur = +(el.dataset.dur || 0.8);
  const p = clamp((local - at) / dur);
  const e = easeOut(p);
  switch (el.dataset.fx) {
    case 'zoom': el.style.transform = `scale(${0.6 + 0.4 * easeBack(p)})`; el.style.filter = `blur(${(1 - e) * 18}px)`; break;
    case 'grow': el.style.transform = `scaleX(${e})`; break;
    case 'side': el.style.transform = `translateX(${sideDir * (1 - e) * 140}px)`; break;
    case 'pop': el.style.transform = `scale(${0.5 + 0.5 * easeBack(p)})`; break;
    default: el.style.transform = `translateY(${(1 - e) * 70}px)`;
  }
  el.style.opacity = clamp(p * 1.6);
}

window.render = function (t) {
  for (const s of scenes) {
    const local = t - s.start;
    const span = s.end - s.start;
    let o = 0;
    if (t >= s.start - 0.001 && t < s.end + 0.4) {
      const fadeIn = s.start === 0 ? 1 : clamp(local / 0.4);
      const fadeOut = s.last ? 1 : clamp((s.end + 0.4 - t) / 0.4);
      o = Math.min(fadeIn, fadeOut);
    }
    s.el.style.opacity = o;
    s.el.style.transform = o < 1 && local > span ? `scale(${1 + (local - span) * 0.12})` : '';
    if (o === 0) continue;
    s.items.forEach(el => fx(el, local));
    if (s.kb) {
      const p = clamp(local / (span + 0.4));
      s.kb.style.transform = `scale(${1.08 + 0.14 * p}) translateX(${+s.kb.dataset.kb * (p - 0.5) * 40}px)`;
    }
    s.counters.forEach(c => {
      const from = +(c.dataset.start || 0);
      const p = easeOut(clamp((local - +c.dataset.from) / 1.4));
      c.textContent = fmt(Math.round(from + (+c.dataset.count - from) * p));
    });
  }
  const W = document.body.classList.contains('landscape') ? 1920 : 1080;
  const H = document.body.classList.contains('landscape') ? 1080 : 1920;
  document.getElementById('glow1').style.transform = `translate(${-500 + Math.sin(t * 0.35) * 260}px, ${-500 + Math.cos(t * 0.27) * 300}px)`;
  document.getElementById('glow2').style.transform = `translate(${W - 700 + Math.cos(t * 0.31) * 200}px, ${H - 670 + Math.sin(t * 0.4) * 220}px)`;
  document.getElementById('progress').style.width = `${(t / DURATION) * 100}%`;
};

window.DURATION = DURATION;
window.CUTS = Object.values(TIMELINES[cut].scenes).map(s => s[0]).filter(Boolean);
render(0);
