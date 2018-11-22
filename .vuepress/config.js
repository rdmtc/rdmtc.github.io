const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
  base: '/',
  title: 'RedMatic',
  // serviceWorker: true,
  contentLoading: true,
  markdown: {
    anchor: true,
    toc: true,
  },
  head: [
    ['script', { src: '/theme-toggler.js' }]
  ],
  themeConfig: {
    sidebar: sidebar(),
    nav,
    logo: '/logo-plain.png'
  },
  plugins: {
    // '@vuepress/back-to-top': true,
    '@vuepress/plugin-medium-zoom': true,
  }
};