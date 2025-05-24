import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: "/js/prefetch-config.js", async: true }],
      htmlAttrs: {
        class: "group/html",
      },
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/app.css"],
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxt/icon"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
