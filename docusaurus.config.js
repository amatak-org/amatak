// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Amatak Projects',
  tagline: 'Amatak Opensource',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://amatak.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  staticDirectories: ['public', 'static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'amatak.io', // Usually your GitHub org/user name.
  projectName: 'https://github.com/amatak-org/amatak', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/amatak-org/amatak/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/amatak-org/amatak/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       metadata: [{name: 'amatak', content: 'amatak, documents'}],
      // Replace with your project's social card
      image: 'img/amatak_progressive_app_m-9-ms.svg',
      navbar: {
        title: 'Amatak Projects',
        logo: {
          alt: 'Amatak Logo',
          src: 'img/Amatak_logo_grey.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/orgs/amatak-org/repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Stated',
                to: 'docs/Projects/BusinessSite',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/22269946/amatak',
              },
            ],
          },

             {
            title: 'Sponsors',
            items: [
              {
            html: `
            <p class="tag is-red">Dimaond Sponsor</p>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer noopener" aria-label="Sponsor by VuesJs">
                  <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" alt="Sponsor by VueJs" width="40" height="40" />
                </a>
                <a href="https://ronyman.com" target="_blank" rel="noreferrer noopener" aria-label="Sponsor by ronyman.com">
                  <img src="https://avatars.githubusercontent.com/u/47080351?v=4" alt="Sponsor by ronyman.com" width="40" height="40" />
                </a>
                <a href="https://cloudflare.com/" target="_blank" rel="noreferrer noopener" aria-label="Deploy to cloudflare">
                  <img src="https://avatars.githubusercontent.com/u/314135?s=200&v=4" alt="Sponsor by CloudFlare" width="40" height="40" />
                </a>

                <p class="tag is-red">Premium Sponsor</p>
                <a href="https://uteach.app" target="_blank" rel="noreferrer noopener" aria-label="Sponsor by Uteach">
                  <img src="https://avatars.githubusercontent.com/u/52324705?s=400&u=f3b558e8c266d2840145237f3ef0b8dd5d0189d5&v=4" alt="Sponsor by UteachApp" width="40" height="40" />
                </a>

                <p class="tag is-red">Standard Sponsor</p>
                <a href="https://ronyman.com" target="_blank" rel="noreferrer noopener" aria-label="Sponsor by ronyman.com">
                  <img src="https://raw.githubusercontent.com/amatak-org/cdn/main/ronyman.jpg" alt="Sponsor by ronyman.com" width="40" height="40" />
                </a>

                <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" aria-label="Deploy to Vercel">
                  <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="Sponsor by Vercel" width="40" height="40" />
                </a>
              `,
          },
            ],
          },

          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/amatak-org/repositories',
              },
              {
                label: 'Go to Amatak.io',
                href: 'https://amatak.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Amatak Opensource Project.`,

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
  },
};
module.exports = config;
