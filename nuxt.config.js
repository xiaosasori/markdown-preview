export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Markdown Live Preview',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is the online markdown editor with live preview' },
      { hid: 'keywords', name: 'keywords', content: 'markdown,markdown editor,markdown preview,markdown live preview,online markdown,github markdown' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'prismjs/themes/prism.css', lang: 'css' },
    { src: '~/assets/github-markdown.css', lang: 'css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/prism-nuxt.js', mode: 'client' }
    // { src: 'prismjs/components/prism-docker.min.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/markdownit']
  ],
  markdownit: {
    preset: 'default',
    // html: true,
    breaks: true,
    use: ['markdown-it-prism']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
