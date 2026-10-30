/**
 * German Fast page only — /de/pages/fast
 * Clones English chrome, then replaces the sales copy Germans search for.
 * Other /de/ URLs are not generated; links fall back to English.
 */
(function () {
  if (!window.BIZDAVAR_LOCALES || !window.BIZDAVAR_LOCALES.en) return;

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function deepMerge(target, src) {
    if (!src || typeof src !== 'object') return target;
    Object.keys(src).forEach(function (key) {
      var val = src[key];
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) target[key] = {};
        deepMerge(target[key], val);
      } else {
        target[key] = val;
      }
    });
    return target;
  }

  var N = 'https://netinode.net/';
  var SHOP = 'https://shop.netinode.net/';
  var ni = function (label, toShop) {
    return '<a href="' + (toShop ? SHOP : N) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  };
  var niPair = function (shopLabel, siteLabel) {
    return ni(shopLabel, true) + ' · ' + ni(siteLabel || 'netinode.net', false);
  };

  var de = clone(window.BIZDAVAR_LOCALES.en);
  de.lang = 'de';
  de.dir = 'ltr';

  de.fastCatalog = {
    brand: {
      eyebrow: 'Festpreis-Website von Bizdavar',
      headline: 'Website erstellen lassen in 5 Tagen — Festpreis ab 99 $',
      subtitle: 'Firmenwebsite auf Deutsch für Deutschland, Österreich und die Schweiz. Rechnung in Euro.',
      description: 'Sie lassen Onepager, Homepage oder WooCommerce-Shop bei uns erstellen: in fünf Werktagen, zum Festpreis ab 99 $ (etwa 90 €). Texte auf Deutsch, Beratung per WhatsApp oder Videocall, Hosting mit Blick auf die DSGVO. Größere Portale baut dasselbe Team danach weiter.',
      heroAlt: 'Firmenwebsite auf Deutsch — in 5 Tagen online, Desktop und Mobil'
    },
    trustSignals: [
      { label: '5 Werktage', desc: 'Täglicher Stand per WhatsApp oder Videocall' },
      { label: 'Ab 99 $ / ca. 90 €', desc: 'Festpreis, Rechnung in Euro oder US-Dollar' },
      { label: 'Website auf Deutsch', desc: 'Für Betriebe in Deutschland, Österreich und der Schweiz' },
      { label: 'DSGVO im Blick', desc: 'Internationales Hosting über Netinode' }
    ],
    plans: [
      {
        name: 'Basis',
        subtitle: 'Onepager und Homepage für den Start',
        features: [
          'Einseitige Firmenwebsite auf Deutsch',
          'Darstellung auf Handy, Tablet und Desktop',
          'Kontaktformular',
          'WhatsApp-Button',
          'Links zu Instagram und LinkedIn',
          'SSL und Einstiegshosting — ' + niPair('Domain und Hosting kaufen (Netinode Shop)', 'netinode.net'),
          'Kurzes Video, damit Sie Texte selbst ändern'
        ]
      },
      {
        name: 'Shop',
        subtitle: 'WooCommerce-Shop mit den ersten Produkten',
        features: [
          'Alles aus Basis',
          'WooCommerce-Shop',
          'Die ersten 5 Produkte eingepflegt',
          'Kategorien und Schlagwörter',
          'Warenkorb und Stripe oder PayPal',
          'Einweisung in den Shop',
          'Grund-SEO für Produktseiten'
        ]
      },
      {
        name: 'Profi',
        subtitle: 'Mehrere Seiten, Blog und eigenes Design',
        ribbon: 'Am häufigsten gewählt',
        features: [
          'Alles aus Shop',
          'Eigenes Oberflächendesign',
          'Bis zu 15 Seiten plus Blog',
          'Zahlung per Stripe oder PayPal',
          'Live-Chat oder WhatsApp-Widget',
          'Grund-SEO und Google Analytics',
          '1 Monat Support inklusive'
        ]
      }
    ],
    compareRows: [
      { feature: 'Seiten', basic: '1 Seite', store: 'Bis zu 5', pro: 'Bis zu 15 + Blog' },
      { feature: 'WooCommerce-Shop', basic: '—', store: '5 Produkte', pro: 'Voll + Zahlung' },
      { feature: 'Formular + WhatsApp', basic: true, store: true, pro: true },
      { feature: 'Design', basic: 'Vorlage', store: 'Angepasst', pro: 'Eigenes Design' },
      { feature: 'SEO', basic: '—', store: 'Produkte', pro: 'Voll' },
      { feature: 'Support nach Livegang', basic: '1 Woche', store: '2 Wochen', pro: '1 Monat' },
      { feature: 'Lieferzeit', basic: '5 Tage', store: '5 Tage', pro: '5–7 Tage' }
    ],
    timeline: [
      { num: '1', title: 'Tag 1 — Briefing', desc: 'WhatsApp oder Videocall: Logo, Farben, deutsche Texte und Beispiele, die Ihnen gefallen.' },
      { num: '2', title: 'Tag 2 — Entwurf', desc: 'Startseite und Struktur. Wir bauen erst, wenn Sie den Entwurf freigeben.' },
      { num: '3', title: 'Tag 3 — Umsetzung', desc: 'Seiten, Kontaktformular, WhatsApp und Social-Links.' },
      { num: '4', title: 'Tag 4 — Shop', desc: 'Im Shop- und Profi-Plan: Produkte, Zahlung und ein Testkauf.' },
      { num: '5', title: 'Tag 5 — Livegang', desc: 'Kurze Einweisung, Domain und die Website geht online.' }
    ],
    audiences: [
      { title: 'Handwerk und lokale Betriebe', desc: 'Eine Homepage auf Deutsch, mit Anruf, WhatsApp und Formular — diese Woche online.' },
      { title: 'KMU in Deutschland, Österreich, Schweiz', desc: 'Firmenwebsite auf Deutsch, Rechnung in Euro, Hosting über Netinode.' },
      { title: 'Shops, die online verkaufen', desc: 'WooCommerce, erste Produkte und Zahlung per Stripe oder PayPal.' },
      { title: 'Startups mit knappem Termin', desc: 'Landingpage auf Deutsch, klarer Knopf, Festpreis, kein Monatsabo fürs Design.' },
      { title: 'Agenturen ohne freie Kapazität', desc: 'Wir liefern in 5 Tagen unter Ihrem Namen oder mit Bizdavar, wenn Ihr Studio voll ist.' }
    ],
    whyChoose: [
      { title: 'Termin, der hält', desc: 'Kein „wir melden uns“. Jeden Tag ein kurzer Stand per WhatsApp oder Videocall.' },
      { title: 'Deutsch zuerst', desc: 'Die Seite spricht Ihre Kunden an. Englisch kann als zweite Sprache dazu.' },
      { title: 'Bizdavar seit 2013', desc: 'Über 12 Jahre und mehr als 100 digitale Projekte in 11 Ländern.' },
      { title: 'Rechnung in Euro', desc: 'Überweisung, Karte oder PayPal. Die Währung steht vor dem Start fest.' }
    ],
    faq: [
      { q: 'Was kostet es, eine Website erstellen zu lassen?', a: 'Der Basisplan startet bei 99 US-Dollar, das sind etwa 90 Euro. Der Shop-Plan kostet 199 $, der Profi-Plan 299 $. Der Preis ist fest. Die Rechnung stellen wir in Euro oder US-Dollar — das legen wir vor dem Start fest. Domain und Hosting kommen extra.' },
      { q: 'Wie schnell ist die Firmenwebsite online?', a: 'Basis und Shop in 5 Werktagen, sobald Logo und Texte da sind. Der Profi-Plan mit mehr Seiten braucht 5 bis 7 Tage. Den Termin bestätigen wir vor dem Start auf WhatsApp.' },
      { q: 'Ist die Website auf Deutsch?', a: 'Ja. Für Betriebe in Deutschland, Österreich und der Schweiz bauen wir die Seite auf Deutsch. Englisch kann als zweite Sprache dazu.' },
      { q: 'Bekomme ich eine Rechnung in Euro?', a: 'Ja. Üblich sind 50 % vor dem Start und 50 % vor dem Livegang — per Überweisung, Karte oder PayPal. Die Details stehen vor Auftragserteilung fest.' },
      { q: 'Ist Hosting im Preis enthalten?', a: 'Design und Einrichtung sind im Festpreis. Domain und Hosting kaufen Sie im ' + ni('Netinode Shop', true) + ' oder Sie sehen die Dienste auf ' + ni('netinode.net') + '. Wir helfen bei der Auswahl. Das Hosting ist international und mit Blick auf die DSGVO aufgesetzt.' },
      { q: 'Kann ich die Website später erweitern?', a: 'Ja. Sie starten mit dem Onepager und wechseln auf Shop oder Profi. Apps, Portale und eigene Abläufe macht dasselbe Team über <a href="custom-web-app">individuelle Web- und App-Entwicklung</a>.' },
      { q: 'Was müssen wir anliefern?', a: 'Logo, Texte und Fotos. Struktur, Design und Technik übernehmen wir. Fehlen die Texte, starten die fünf Tage erst, wenn das Material da ist.' },
      { q: 'Was ist der Unterschied zu einer individuellen Programmierung?', a: 'Fast ist der Festpreis für einen schnellen Livegang. Größere Systeme laufen über <a href="custom-web-app">individuelle Entwicklung</a> oder die <a href="services#web-design">Webdesign-Leistungen</a>.' }
    ],
    speedHighlights: [
      { title: 'Plan pro Tag', desc: 'Jeder Tag hat ein Ziel — nicht „wir sagen später Bescheid“.' },
      { title: 'Klares Design', desc: 'Zuerst das Handy, ein deutlicher Knopf, lesbare deutsche Texte.' },
      { title: 'Technik inklusive', desc: 'Formular, WhatsApp, Grund-SEO, Analytics und eine kurze Einweisung.' },
      { title: 'Danach dasselbe Team', desc: 'Vom Onepager zum Shop, zur zweiten Sprache oder zur eigenen App.' }
    ],
    scope: [
      { title: 'Firmenwebsite und Landingpage', desc: 'Vorstellung, Leistungen und Anfrage — Basis ab 99 $.', cta: 'Pläne ansehen' },
      { title: 'WooCommerce-Shop', desc: 'Produkte, Warenkorb und Zahlung — Shop- und Profi-Plan.', cta: 'Shop-Plan' },
      { title: 'Web-App und Anwendung', desc: 'Portale und eigene Systeme jenseits des Festpreises.', cta: 'Individuelle Entwicklung' },
      { title: 'Ablauf in 5 Tagen', desc: 'Was Sie anliefern und was an welchem Tag passiert.', cta: 'Zum Ablauf' }
    ],
    deliverables: [
      { title: 'Wirklich responsive', desc: 'Handy, Tablet und Desktop, vor der Übergabe von Hand geprüft.' },
      { title: 'WhatsApp und Formular', desc: 'Direkter Kontakt und ein Formular für Anfragen.' },
      { title: 'Grund-SEO', desc: 'Titel, Beschreibung, Geschwindigkeit und eine Struktur, die Google lesen kann.' },
      { title: 'SSL und Hosting', desc: 'Domain und Hosting im Netinode Shop — Infrastruktur von Bizdavar.' },
      { title: 'Sie können Texte ändern', desc: 'Kurzes Video, damit Sie Inhalte selbst pflegen.' },
      { title: 'Support nach dem Livegang', desc: 'Die Dauer steht im gewählten Plan.' }
    ],
    guides: [
      { title: 'Was Sie in 5 Tagen bekommen', desc: 'Pläne von 99 $ bis 299 $ und der Unterschied zur Einzelentwicklung.' },
      { title: 'Checkliste vor dem Start', desc: 'Welche Texte und Bilder den Termin halten.' },
      { title: 'Wenn der Festpreis nicht reicht', desc: 'Wann eine individuelle Web-App sinnvoll ist.' },
      { title: 'Mehrsprachige Website', desc: 'Deutsch als Hauptsprache, weitere Sprache später.' }
    ],
    showcases: [
      { category: 'Schmuckshop' },
      { category: 'Internationaler B2B-Handel' },
      { category: 'Schweizer B2B-Handel' },
      { category: 'SMM-Panel' },
      { category: 'Fintech' },
      { category: 'Leder und Mode' },
      { category: 'Holding' },
      { category: 'Ästhetik-Klinik' },
      { category: 'Handelsmarke' },
      { category: 'Industrie-B2B' },
      { category: 'Futtermittel · Dubai' }
    ]
  };

  deepMerge(de.fastPage, {
    hero: {
      title: 'Website erstellen lassen in 5 Tagen — Festpreis ab 99 $'
    },
    ui: {
      statDays: '5 Tage',
      statDaysLabel: 'bis zum Livegang',
      statPrice: '99 $',
      statPriceLabel: 'Festpreis ab',
      statProjects: '100+',
      statProjectsLabel: 'Projekte',
      viewPlans: 'Pläne und Preise',
      consultWa: 'WhatsApp-Beratung',
      btnDevConsult: 'Individuelle Entwicklung anfragen',
      navPlans: 'Preise',
      navCompare: 'Vergleich',
      navTimeline: '5 Tage',
      navShowcase: 'Beispiele',
      navFaq: 'Fragen',
      navSpeed: 'Ablauf',
      navScope: 'Leistungen',
      navWhy: 'Warum Fast',
      navGuides: 'Überblick',
      btnCustomApp: 'Individuelle Entwicklung',
      readGuide: 'Weiterlesen',
      oneTime: 'Einmalzahlung',
      orderWa: 'Per WhatsApp bestellen',
      orContact: 'oder Kontaktformular',
      compareFeature: 'Leistung',
      compareBasic: 'Basis',
      compareStore: 'Shop',
      comparePro: 'Profi',
      viewCase: 'Ansehen',
      navAria: 'Abschnitte von Fast Web Studio',
      saveOff: '{n} % günstiger zum Start',
      planSample: 'Beispiel',
      planDelivery: 'Lieferzeit'
    },
    sections: {
      for: {
        eyebrow: 'Für wen',
        title: 'Für welche Betriebe ist das gedacht?',
        desc: 'Handwerk, KMU und Startups in Deutschland, Österreich und der Schweiz, die eine Website auf Deutsch brauchen — Onepager, Firmenwebsite oder WooCommerce-Shop.'
      },
      speed: {
        eyebrow: 'So arbeiten wir',
        title: 'Website erstellen lassen, ohne offenes Ende',
        desc: 'Jeder Tag hat ein Ziel. Das Design ist fertig fürs Handy. Wenn der Festpreis nicht reicht, bleibt dasselbe Team an der Web-App.'
      },
      scope: {
        eyebrow: 'Leistungen',
        title: 'Homepage, Landingpage, Shop oder mehr',
        desc: 'Start mit Festpreis. Für Portale und eigene Logik siehe <a href="custom-web-app">individuelle Web- und App-Entwicklung</a>.'
      },
      deliverables: {
        eyebrow: 'Übergabe',
        title: 'Was Sie wirklich bekommen',
        desc: 'Eine Website, die Anfragen oder Verkäufe annimmt — keine leere Vorlage.'
      },
      guides: {
        eyebrow: 'Vor dem Auftrag',
        title: 'Ablauf, Preis und Grenzen des Festpreises',
        desc: 'Der Ablauf steht auf dieser Seite. Weitere Beispiele: <a href="portfolio">Referenzen</a>.'
      },
      plans: {
        eyebrow: 'Festpreis',
        title: 'Was eine Website kostet',
        desc: '99 $, 199 $ oder 299 $ — etwa 90 €, 180 € oder 275 €. Keine versteckten Designkosten. Bestellung per WhatsApp oder <a href="contact">Kontaktformular</a>. Die Rechnung stellen wir in Euro aus.'
      },
      compare: {
        eyebrow: 'Vergleich',
        title: 'Was in welchem Plan steckt',
        desc: 'Die Tabelle reicht für die Auswahl. Offene Punkte klären wir auf WhatsApp.'
      },
      timeline: {
        eyebrow: '5 Tage',
        title: 'In fünf Werktagen online',
        desc: 'Jeder Tag hat ein Ergebnis. Den Stand bekommen Sie per WhatsApp oder im Videocall.'
      },
      why: {
        eyebrow: 'Warum Bizdavar',
        title: 'Warum die Website hier erstellen lassen?',
        desc: 'Ein Produkt der <a href="about">Bizdavar Group</a> — Festpreis und ein benannter Termin, keine vage Agenturofferte.'
      },
      showcase: {
        eyebrow: 'Beispiele',
        title: 'Websites, die Bizdavar gebaut hat',
        desc: 'Ein Ausschnitt — <a href="portfolio">alle Referenzen</a>'
      },
      faq: {
        eyebrow: 'Fragen',
        title: 'Häufige Fragen, bevor Sie beauftragen',
        desc: 'Anbieter ist Bizdavar Group. Firma und Kontakt stehen auf der <a href="contact">Kontaktseite</a>.'
      }
    },
    cta: {
      title: 'Website diese Woche online stellen?',
      desc: 'Kurze Beratung auf WhatsApp — wir sagen in zwei Minuten, welcher Plan passt.',
      btnWa: 'Auf WhatsApp starten',
      btnForm: 'Kontaktformular',
      btnCustom: 'Größeres Projekt',
      btnDevConsult: 'Individuelle Entwicklung anfragen'
    },
    devCta: {
      title: 'Der Festpreis reicht nicht?',
      desc: 'Portal, App oder eigener Ablauf — dafür gibt es ein separates Angebot.',
      btn: 'Individuelle Entwicklung anfragen'
    },
    sticky: { label: 'Website ab 99 $ anfragen' },
    geoText: 'Firmenwebsite auf Deutsch für Deutschland, Österreich und die Schweiz — in 5 Werktagen, Festpreis ab 99 $ (ca. 90 €), Rechnung in Euro.',
    hostingNote: {
      title: 'Domain, Hosting und SSL — Netinode',
      text: '<strong>Netinode</strong> ist die Domain- und Hosting-Infrastruktur von Bizdavar. Die Domain kaufen Sie im Shop. Den Überblick gibt die Hauptseite.',
      ctaShop: 'Domain und Hosting kaufen',
      ctaSite: 'netinode.net'
    },
    relatedLinks: [
      { title: 'Kontakt und Anbieter', url: 'contact', desc: 'Firma, WhatsApp, Formular' },
      { title: 'Individuelle Entwicklung', url: 'custom-web-app', desc: 'Wenn der Festpreis nicht reicht' },
      { title: 'Referenzen', url: 'portfolio', desc: 'Websites von Bizdavar' },
      { title: 'Leistungen', url: 'services#web-design', desc: 'Webdesign im Überblick' }
    ],
    schema: {
      description: 'Website erstellen lassen auf Deutsch: Firmenwebsite, Landingpage oder WooCommerce-Shop in 5 Werktagen. Festpreis ab 99 US-Dollar (etwa 90 Euro), Rechnung in Euro, für Deutschland, Österreich und die Schweiz.',
      areaServed: ['DE', 'AT', 'CH'],
      currency: 'USD',
      offers: [
        { name: 'Basis — Onepager', price: '99' },
        { name: 'Shop — WooCommerce', price: '199' },
        { name: 'Profi — bis 15 Seiten', price: '299' }
      ]
    }
  });

  deepMerge(de.pages && de.pages.fast ? de.pages : (de.pages = de.pages || {}), {
    fast: {
      seoTitle: 'Website erstellen lassen in 5 Tagen | ab 99 $ — Bizdavar',
      seoDescription: 'Firmenwebsite auf Deutsch erstellen lassen: Onepager, Landingpage oder WooCommerce-Shop in 5 Tagen. Festpreis ab 99 $ (ca. 90 €), Rechnung in Euro.',
      seoKeywords: 'Website erstellen lassen, Webseite erstellen lassen, Firmenwebsite, Homepage erstellen lassen, Landingpage erstellen lassen, WooCommerce Shop erstellen lassen, Webdesign Festpreis, Onepager, Bizdavar'
    }
  });

  deepMerge(de.nav, {
    home: 'Startseite',
    about: 'Über uns',
    services: 'Leistungen',
    products: 'Produkte',
    portfolio: 'Referenzen',
    blog: 'Blog',
    tools: 'Kostenlose Tools',
    contact: 'Kontakt',
    webDesign: 'Webdesign',
    fastDesc: 'Website auf Deutsch ab 99 $',
    customWebApp: 'Individuelle Entwicklung'
  });

  deepMerge(de.footer, {
    tagline: 'Firmenwebsite auf Deutsch in 5 Tagen — Festpreis ab 99 $, Rechnung in Euro.',
    services: 'Leistungen',
    contactUs: 'Kontakt',
    webFast: 'Website erstellen lassen',
    webDesign: 'Webdesign',
    privacy: 'Datenschutz'
  });

  deepMerge(de.common, {
    langDe: 'Deutsch',
    langLabel: 'Sprache',
    freeConsult: 'Kostenlose Beratung',
    freeConsultWa: 'Kostenlose Beratung per WhatsApp',
    contact: 'Kontakt',
    homeAria: 'Startseite'
  });

  deepMerge(de.conversions, {
    fabLabel: 'Kostenlose Beratung',
    fabAria: 'Kostenlose Beratung per WhatsApp',
    waDefault: 'Guten Tag, ich schreibe von bizdavar.com. Ich möchte eine Website auf Deutsch.',
    waFast: 'Guten Tag, ich möchte eine Website auf Deutsch erstellen lassen. Bitte mit Rechnung in Euro.'
  });

  if (de.seo) {
    de.seo.defaultTitle = 'Website erstellen lassen in 5 Tagen | ab 99 $ — Bizdavar';
    de.seo.defaultDescription = 'Firmenwebsite auf Deutsch erstellen lassen: Onepager, Landingpage oder WooCommerce-Shop in 5 Tagen. Festpreis ab 99 $ (ca. 90 €), Rechnung in Euro.';
  }

  window.BIZDAVAR_LOCALES.de = de;
})();
