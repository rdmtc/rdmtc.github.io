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
  theme: 'yuu',
  themeConfig: {
    sidebar: sidebar(),
    nav,
    yuu: {
      disableDarkTheme: false,
      colorThemes: ['red', 'blue', 'green'],
      defaultTheme: 'red',
      defaultDark: true,
      disableThemeIgnore: true,
    },
  },
  plugins: {
    // '@vuepress/back-to-top': true,
    '@vuepress/plugin-medium-zoom': true,
  }
};