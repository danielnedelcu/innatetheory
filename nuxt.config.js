import { createSEOMeta } from './utils/seo'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'https://unpkg.com/swiper/js/swiper.min.js', body: true },
      { src: 'script/SplitText.min.js', body: true },
      { src: 'script/inview.js', body: true }
    ],
    title: 'Innate Theory',
    author: 'Innate Theory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { author: 'Innate Theory' },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '~assets/img/share.jpg'
      },
      {
        hid: 'ogimage',
        name: 'og:image',
        content: '~assets/img/share.jpg'
      },
      { name: 'keywords', content: 'digital marketing agency, Innate Theory, Innnate Theory agency, Sitecore agency, web content management system' },
      ...createSEOMeta({
        description: "A boutique digital consultancy that provides personalized attention and strategic solutions, rooted in technology, to some of the most innovative clients. We aim to help brands and businesses navigate the waves of today's digital landscape to deliver tangible business results"
      })
    ],
    link: [ 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#de174e',
    height: '2px'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/THEORY.main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { ssr: false, src: '~plugins/main' },
    { ssr: false, src: '~plugins/vueinview' },
    { ssr: false, src: '~plugins/inviewgrid' },
    { ssr: false, src: '~plugins/inviewlist' },
    { ssr: false, src: '~plugins/inviewimage' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['storyblok-nuxt', { accessToke: 'L47YFTFClMjlR9yQTxVPVwtt', cacheProvider: 'memory' }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   publicPath: '/public/',
   
    extend (config, ctx) {
    }
  }
}
