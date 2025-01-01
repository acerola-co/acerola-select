// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  alias: {
    css: fileURLToPath(new URL("./assets/css", import.meta.url)),
    images: fileURLToPath(new URL("./assets/images", import.meta.url)),
    pages: fileURLToPath(new URL("./pages", import.meta.url)),
    stores: fileURLToPath(new URL("./stores", import.meta.url)),
    plugins: fileURLToPath(new URL("./plugins", import.meta.url)),
  },
  components: [
		{ path: "@/components", pathPrefix: false },
	],
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/color-mode", "@nuxt/content"],
  tailwindcss: {
    cssPath: ['@/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {
      content: [
        'content/**/**.md'
      ]
    },
    viewer: true,
  }
})