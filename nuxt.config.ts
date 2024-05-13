import type { NuxtConfig } from "nuxt/config";
const path = require('path');

type ExtendedNuxtConfig = NuxtConfig & { pinia: any };

export default defineNuxtConfig({
  ssr: false,
  target: "static",
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },
  title: "Xerox Page Builder for Physicswallah, Unacademy etc. notes",
  app: {
    baseURL: "/xerox-page-builder/",
  },
  head: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/icon.svg" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;800&display=swap",
      },
    ],
  },
  css: ["@/assets/stylesheets/common.scss"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  build: {
    transpile: ['pdfjs-dist'],
  },
  vite: {
    build: {
      target: "es2022",
    }
  }
} as ExtendedNuxtConfig);
