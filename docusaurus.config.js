module.exports = {
  title: 'vietduc01100001',
  tagline: 'The drafts in my mind',
  url: 'https://vietduc01100001.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'vietduc01100001',
  projectName: 'vietduc01100001.github.io',
  themeConfig: {
    navbar: {
      title: 'vietduc01100001',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'about',
          label: 'About me',
          position: 'right',
        },
        {
          label: 'Links',
          position: 'right',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/vietduc01100001',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vietduc01100001',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/8943850/duc-nguyen',
            }
          ],
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} vietduc01100001`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} vietduc01100001`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
