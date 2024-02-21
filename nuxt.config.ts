// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/global-styles.css'],
  build: {
    transpile: ['gsap'],
  },
  devtools: { enabled: true }
})
