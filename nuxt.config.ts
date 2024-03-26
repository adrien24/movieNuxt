// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // add base url sur nuxt 3 for production
  // https://v3.nuxtjs.org/docs/3.x/configuration-glossary/configuration-router

  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    cdnURL: "",
  },

  runtimeConfig: {
    tmdbApiKey: process.env.TMDB_API_KEY,
  },
});
