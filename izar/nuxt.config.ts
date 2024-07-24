import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
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