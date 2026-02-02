// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-security'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'de',
      name: 'Deutsch',
      file: 'de.json'
    }, {
      code: 'de-CH',
      name: 'Schweizerdeutsch',
      file: 'de-CH.json'
    }, {
      code: 'en',
      name: 'English',
      file: 'en.json'
    }]
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'azure',
    azure: {
      config: {
        platform: {
          apiRuntime: 'node:22'
        }
      }
    }
  }
})
