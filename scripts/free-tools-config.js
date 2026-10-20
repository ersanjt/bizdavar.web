/**
 * Free tools registry shared by gen-tool-pages.js (page markup) and bake-static-seo.js (JSON-LD).
 * HUB_GROUPS order must match toolsPage.groups[].cards[] in assets/scripts/i18n/tools-hub-i18n.js.
 */
const TOOLS = [
  {
    slug: 'speed-test', ns: 'speedTestPage', seoKey: 'speedTest', icon: 'gauge',
    category: 'UtilitiesApplication', jsonLdId: 'jsonld-speedtest-static', handwritten: true
  },
  {
    slug: 'website-speed-test', ns: 'siteSpeedPage', seoKey: 'siteSpeed', tool: 'sitespeed', i18n: 'site-speed', icon: 'bolt',
    category: 'DeveloperApplication', cta: ['/pages/fast', '/pages/contact?service=fast-studio']
  },
  {
    slug: 'what-is-my-ip', ns: 'myIpPage', seoKey: 'myIp', tool: 'myip', i18n: 'my-ip', icon: 'globe',
    category: 'UtilitiesApplication', cta: ['/pages/services#server-ops', '/pages/contact']
  },
  {
    slug: 'whatsapp-link-generator', ns: 'whatsappLinkPage', seoKey: 'whatsappLink', tool: 'whatsapp', i18n: 'whatsapp-link', icon: 'whatsapp',
    category: 'BusinessApplication', cta: ['/pages/fxguard', '/pages/contact'], vendor: ['lib/qrcode-generator.min.js']
  },
  {
    slug: 'utm-builder', ns: 'utmBuilderPage', seoKey: 'utmBuilder', tool: 'utm', i18n: 'utm-builder', icon: 'link',
    category: 'BusinessApplication', cta: ['/pages/services#digital-marketing', '/pages/contact']
  },
  {
    slug: 'tank-volume-calculator', ns: 'tankVolumePage', seoKey: 'tankVolume', tool: 'tank', i18n: 'tank-volume', icon: 'barrel',
    category: 'UtilitiesApplication', cta: ['/pages/vega', '/pages/contact']
  },
  {
    slug: 'unit-converter', ns: 'unitConverterPage', seoKey: 'unitConverter', tool: 'units', i18n: 'unit-converter', icon: 'swap',
    category: 'UtilitiesApplication', cta: ['/pages/vega', '/pages/contact']
  }
];

const HUB = {
  slug: 'tools', ns: 'toolsPage', seoKey: 'tools', i18n: 'tools-hub', cta: ['/pages/services', '/pages/contact']
};

const HUB_GROUPS = [
  ['speed-test', 'website-speed-test', 'what-is-my-ip'],
  ['whatsapp-link-generator', 'utm-builder'],
  ['tank-volume-calculator', 'unit-converter']
];

const I18N_FILES = [HUB, ...TOOLS].filter((t) => t.i18n).map((t) => `assets/scripts/i18n/${t.i18n}-i18n.js`);

module.exports = { TOOLS, HUB, HUB_GROUPS, I18N_FILES };
