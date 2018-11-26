const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
  base: '/',
  title: 'RedMatic',
  themeConfig: {
    sidebar: sidebar(),
    nav,
    lastUpdated: 'Letztes Update',
    logo: '/logo-plain.png',
    repo: 'HM-RedMatic/RedMatic',
    docsRepo: 'HM-RedMatic/HM-RedMatic.github.io',
    docsBranch: 'dev',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  locales: {
    "/": {
      lang: "de-DE"
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/plugin-medium-zoom'
  ]
};