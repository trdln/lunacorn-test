// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss', ['@nuxtjs/google-fonts', { families: { Roboto: true } }]],
  nitro: { compressPublicAssets: true },
  experimental: { viewTransition: true },
  components: [{ path: './components', pathPrefix: false }],
});
