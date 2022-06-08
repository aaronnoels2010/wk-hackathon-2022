import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    [
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
        prefix: false,
      },
    ],
  ],
  io: {
    sockets: [{
      name: 'main',
      url: process.env.URL,
    }],
  },
  publicRuntimeConfig: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
  },
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/node_modules/@headlessui/vue/dist/components',
    ],
  },
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
