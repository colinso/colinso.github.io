export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: false,
    typeCheck: false,
  },
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  app: {
    baseURL: "/",
  },
  compatibilityDate: "2025-09-11",
});
