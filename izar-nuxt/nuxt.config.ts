import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "eng",
        dir: "ltr",
      },
      title: "Izar - Your Stellar Shopping Experience ",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  apollo: {
    clients: {
      default: { httpEndpoint: "https://readonlydemo.vendure.io/shop-api" },
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/apollo", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});