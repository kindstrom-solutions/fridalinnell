
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  router: {
    base: '/'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Frida Linnell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#75A08C' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#75A08C' },
      { hid: 'description', name: 'description', content: 'skådespelerska / sångerska / musikalartist' },
      { hid: 'og:title', name: 'og:title', content: 'Frida Linnell' },
      { hid: 'og:description', name: 'og:description', content: 'skådespelerska / sångerska / musikalartist' },
      { hid: 'og:image', name: 'og:image', content: 'https://fridalinnell.se/og_image.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', type: 'image/x-icon', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', type: 'image/x-icon', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', type: 'image/x-icon', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', type: 'image/x-icon', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', type: 'image/x-icon', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', type: 'image/x-icon', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', type: 'image/x-icon', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', type: 'image/x-icon', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-icon-180x180.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/android-icon-192x192.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/android-icon-32x32.png' },
      { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/android-icon-96x96.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/android-icon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-gtag', {
      id: 'UA-176124375-1'
    }]
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
