// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "nuxt-security"],

  security: {
    csrf: true,
  },

  css: ["~/assets/css/main.css"],

  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "de",
        name: "Deutsch",
        file: "de.json",
      },
      {
        code: "de-CH",
        name: "Schweizerdeutsch",
        file: "de-CH.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },

  nitro: {
    preset: "bun"
  },

  compatibilityDate: "2025-01-15",
});
