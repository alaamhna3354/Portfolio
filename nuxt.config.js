export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Portfolio Alaa Mhna" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/fav.jpeg" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/5.15.3/css/font-awesome.min.css",
      },
      // Aos Animation
      {
        rel: "stylesheet",
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
      },
     
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js",
      },
      // Aos Animation
      {
        src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
      },
    ],
  },

  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
 axios: {
    // baseURL: "https://admin.isystems.site/", 
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/public/scss/main.scss",
    "swiper/css/swiper.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  //fontawesome start
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    // component: 'fa',
    icons: {
      // solid: ['faSearch','faAnalytics'],
      // brands: ['faTwitter','faFacebook','faPinterestP','faInstagram']
      solid: true,
      regular: true,
      brands: true,
    },
  },
  //fontawesome end
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // With options
  ],
  router: {
    // Run the middleware/user-agent.js on every page
    //middleware: 'check-token'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
 
};
