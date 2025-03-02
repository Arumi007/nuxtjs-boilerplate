// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  compatibilityDate: '2025-02-27',

  head: {
    title: 'หลักคำสอนทางพระพุทธศาสนา', // เพิ่ม title ของเว็บไซต์
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Prompt&display=swap', // เพิ่ม Google Fonts
      },
    ],
  },

  modules: ['@nuxt/image'],

  devServer: { // เพิ่มส่วนนี้
    port: 3000, // กำหนด port 
  },
});