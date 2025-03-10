// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  // Bug: Missing runtimeConfig for API URL
  devtools: { enabled: false },

  compatibilityDate: '2025-03-05'
})