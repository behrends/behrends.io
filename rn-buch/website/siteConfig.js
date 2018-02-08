/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const siteConfig = {
  title: 'React Native' /* title for your website */,
  tagline: 'Native Apps parallel für Android und iOS entwickeln',
  url: 'https://www.behrends.io' /* your website url */,
  baseUrl: '/react-native-buch/' /* base url for your project */,
  projectName: 'react-native-buch',
  headerLinks: [
    { doc: 'addenda', label: 'Infos zum Buch' },
    { href: '/react-native-buch#buy', label: 'Buch kaufen' },
    { page: 'help', label: 'Hilfe' }
  ],
  /* path to images for header/footer */
  headerIcon: 'img/rn-book.jpg',
  footerIcon: 'img/rn-book.jpg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#6FB53F',
    secondaryColor: '#205C3B'
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' Erik Behrends',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
    defaultLang: 'javascript'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/behrends/react-native-buch',
  useEnglishUrl: false
};

module.exports = siteConfig;
