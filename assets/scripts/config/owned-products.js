/**
 * Bizdavar — Owned hardware products (engineered & manufactured in-house)
 * Text: owned-products-i18n.js + BIZDAVAR_I18N.getOwnedProducts()
 */
window.BIZDAVAR_OWNED_PRODUCTS = {
  categories: [
    { id: 'iot-health', icon: 'shield' },
    { id: 'packaging', icon: 'box' },
    { id: 'medical', icon: 'heart' }
  ],
  items: [
    {
      id: 'biztab',
      category: 'iot-health',
      image: 'assets/images/products/biztab/biztab-hero.jpg',
      logo: 'assets/images/products/biztab/biztab-logo.svg',
      page: 'pages/biztab.html',
      featured: true,
      status: 'live'
    },
    {
      id: 'bizclean',
      category: 'iot-health',
      image: 'assets/images/products/bizsanitizer/bizsanitizer-hero.svg',
      logo: 'assets/images/products/bizsanitizer/bizsanitizer-logo.svg',
      page: 'pages/bizsanitizer-v5.html',
      featured: true,
      status: 'live'
    },
    {
      id: 'biztouch',
      category: 'iot-health',
      image: 'assets/images/products/product-default.svg',
      featured: true,
      status: 'catalog'
    },
    {
      id: 'bizroll',
      category: 'packaging',
      image: 'assets/images/products/product-default.svg',
      featured: true,
      status: 'catalog'
    },
    {
      id: 'sealer-home',
      category: 'packaging',
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'sealer-pneumatic',
      category: 'packaging',
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'sealer-robotic',
      category: 'packaging',
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'mask-production',
      category: 'medical',
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    },
    {
      id: 'heat-pad-production',
      category: 'medical',
      image: 'assets/images/products/product-default.svg',
      status: 'catalog'
    }
  ]
};
