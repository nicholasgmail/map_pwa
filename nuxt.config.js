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
    'nuxt-leaflet',
    '@nuxtjs/pwa'
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
  pwa: {
    manifest: {
      name: 'Map',
      short_name: 'Map',
      lang: 'en',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#000',
      screenshots: [
        {
          src: '/screenshots/screenshot-1.png',
          sizes: '320x640',
          type: 'image/png',
          platform: 'web'
        }
      ]
    },
    icon: {
      fileName: "v.png",
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      title: "Map Poltava"
    },
    workbox: {
      // Configure Workbox as needed
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
