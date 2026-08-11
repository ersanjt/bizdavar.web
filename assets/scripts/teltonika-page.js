createSupplyBrandPage({
  prefix: 'teltonika',
  catalogKey: 'TELTONIKA_CATALOG',
  brandName: 'Teltonika',
  schemaId: 'jsonld-teltonika',
  schemaListName: {
    fa: 'تامین ردیاب Teltonika — بیزدوار گروپ',
    tr: 'Teltonika tracker tedariki — Bizdavar Group',
    en: 'Teltonika tracker supply — Bizdavar Group'
  },
  initFn: 'initTeltonikaPage',
  schemaFn: 'injectTeltonikaSchema'
});
