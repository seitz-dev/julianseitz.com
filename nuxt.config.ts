import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 5,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@tsparticles/engine',
        '@tsparticles/slim',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'gsap',
        'gsap/MorphSVGPlugin',
      ]
    }
  },
  fonts: {
    defaults: {
      weights: ['100 900']
    }
  },
  nitro: {
    preset: "bun"
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      }
    ]
  }
})