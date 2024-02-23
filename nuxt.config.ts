// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "nuxt-icon"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
});
