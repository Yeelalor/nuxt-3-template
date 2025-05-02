// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      link: [{ rel: 'icon', type: 'image/x-icon', href: "/HD.png" }],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  components: true,
  css: ["@/assets/fonts/style.css"],
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/scripts',
    '@vite-pwa/nuxt'
  ],
  vuetify: {
    vuetifyOptions: {
      defaults: {
        VTextField: {
          variant: 'outlined',
          density: 'compact',
          hideDetails: 'auto'
        },
        VTextarea: {
          variant: 'outlined',
          density: 'compact',
          hideDetails: 'auto'
        },
        VSelect: {
          variant: 'outlined',
          density: 'compact',
          hideDetails: 'auto'
        }
      },
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              test: `#000`
            }
          }
        }
      }
    },
  },
  runtimeConfig: {
    public: {
      api: ''
    }
  },
  pwa: {
    manifest: {
      name: 'HmongDay',
      short_name: 'MD',
      description: 'HMD',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url:'/',
      icons: [
        {
          src: '/HD.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/HD.png',
          sizes: '192x192',
          type: 'image/png',
        }
      ],
    },
  },
})