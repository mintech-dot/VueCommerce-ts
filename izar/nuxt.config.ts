import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "eng",
        dir: "ltr",
      },
      title: "Izar - Your Stellar Shopping Experience ",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/apollo", "nuxt-graphql-client"],
  apollo: {
    clients: {
      default: { httpEndpoint: "https://readonlydemo.vendure.io/shop-api" },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
