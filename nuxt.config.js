export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Map Poltava',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/icon.ico'}
    ]
  },
ssr: false,
target: 'static',
  mode: 'spa',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~plugins/leaflet.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    timing: {
      total: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-leaflet'
  ],
  leaflet: {
    icon: true,
    scrollWheelZoom: true
  },
  route: [
    {
      "src": "/sw.js",
      "continue": true,
      "headers": {
        "Cache-Control": "public, max-age=0, must-revalidate",
        "Service-Worker-Allowed": "/"
      }
    }
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
