createSupplyBrandPage({
  prefix: 'enpo',
  catalogKey: 'ENPO_CATALOG',
  brandName: 'Bizdavar',
  schemaId: 'jsonld-enpo',
  schemaListName: {
    fa: 'کاتالوگ پنوماتیک صنعتی — بیزدوار گروپ',
    tr: 'Endüstriyel pnömatik kataloğu — Bizdavar Group',
    en: 'Industrial pneumatic catalog — Bizdavar Group',
    ru: 'Каталог промышленной пневматики — Bizdavar Group',
    ar: 'كتالوج الهواء المضغوط الصناعي — Bizdavar Group'
  },
  initFn: 'initEnpoPage',
  schemaFn: 'injectEnpoSchema'
});
