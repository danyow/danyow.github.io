/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-check

// const path = require('path');
const versions = require('./versions.json');
const math = require('remark-math');
const VersionsArchived = require('./versionsArchived.json');
// const {
//   dogfoodingPluginInstances,
//   dogfoodingThemeInstances,
// } = require('./_dogfooding/dogfooding.config');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');

const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived).splice(
  0,
  5,
);

const expectedPrefix = 'v';

// This probably only makes sense for the beta phase, temporary
function getNextBetaVersionName() {

  const lastReleasedVersion = versions.find(t => t.startsWith(expectedPrefix))
  if (!lastReleasedVersion) {
    return `${expectedPrefix}0`;
  }
  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 0.0. phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;
}

function getHomesPaths() {
  const homes = Array.from(versions)
  const index = homes.findIndex(t => t.startsWith(expectedPrefix))
  if (index !== -1) {
    homes.splice(index, 1)
  }
  return homes
}

const allDocHomesPaths = [
  '/docs/',
  '/docs/next/',
  ...getHomesPaths().map((version) => `/docs/${version}/`),
];

const isDev = process.env.NODE_ENV === 'development';

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

const baseUrl = process.env.BASE_URL || '/';

// Special deployment for staging locales until they get enough translations
// https://app.netlify.com/sites/docusaurus-i18n-staging
// https://docusaurus-i18n-staging.netlify.app/
const isI18nStaging = process.env.I18N_STAGING === 'true';

const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;

// const TwitterSvg =
//   '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Danyow',
  tagline: ':D',
  organizationName: 'danyow',
  projectName: 'danyow.github.io',
  baseUrl,
  baseUrlIssueBanner: true,
  url: 'https://danyow.github.io',
  // Dogfood both settings:
  // - force trailing slashes for deploy previews
  // - avoid trailing slashes in prod
  trailingSlash: isDeployPreview,
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    // eslint-disable-next-line no-nested-ternary
    locales: isDeployPreview
      ? // Deploy preview: keep it fast!
      ['zh-Hans']
      : isI18nStaging
        ? // Staging locales: https://docusaurus-i18n-staging.netlify.app/
        ['zh-Hans', 'en']
        : // Production locales
        ['zh-Hans', 'en'],
    localeConfigs: {
      "zh-Hans": {
        label: "中文",
      },
      en: {
        label: "English",
      },
    },
  },
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  customFields: {
    isDeployPreview,
    description:
      'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  staticDirectories: [
    'static',
    // path.join(__dirname, '_dogfooding/_asset-tests'),
    // Adding a non-existent static directory. If user deleted `static` without
    // specifying `staticDirectories: []`, build should still work
    // path.join(__dirname, '_dogfooding/non-existent'),
  ],
  themes: ['live-codeblock'], // , ...dogfoodingThemeInstances],
  plugins: [
    [
      require.resolve('./src/plugins/changelog/index.js'),
      {
        blogTitle: '日志',
        blogDescription:
          'Keep yourself up-to-date about new features in every release',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Changelog',
        routeBasePath: '/changelog',
        showReadingTime: false,
        postsPerPage: 20,
        archiveBasePath: null,
        authorsMapPath: 'authors.json',
        feedOptions: {
          type: 'all',
          title: '日志',
          description:
            'Keep yourself up-to-date about new features in every release',
          copyright: `Copyright © ${new Date().getFullYear()} Danyow, Inc.`,
          language: 'zh-cn',
        },
      },
    ],
    // [
    //   'content-docs',
    //   /** @type {import('@docusaurus/plugin-content-docs').Options} */
    //   ({
    //     id: 'community',
    //     path: 'community',
    //     routeBasePath: 'community',
    //     editUrl: ({locale, versionDocsDirPath, docPath}) => {
    //       if (locale !== 'en') {
    //         return `https://crowdin.com/project/docusaurus-v2/${locale}`;
    //       }
    //       return `https://github.com/danyow/danyow.github.io/edit/main/website/${versionDocsDirPath}/${docPath}`;
    //     },
    //     editCurrentVersion: true,
    //     sidebarPath: require.resolve('./sidebarsCommunity.js'),
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   }),
    // ],
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        fromExtensions: ['html'],
        createRedirects(routePath) {
          // Redirect to /docs from /docs/introduction, as introduction has been
          // made the home doc
          if (allDocHomesPaths.includes(routePath)) {
            return [`${routePath}/placeholder`];
          }
          return [];
        },
        redirects: [
          // {
          //   from: ['/'],
          //   to: '/docs',
          // },
          // {
          //   from: ['/docs/Lua@5.3'],
          //   to: '/docs/Lua@5.3/lua/hello'
          // },
          // {
          //   from: ['/docs/Lua%205.3'],
          //   to: '/docs/Lua%205.3/lua/hello'
          // },
          // {
          //   from: ['/docs/unity2022.1'],
          //   to: '/docs/unity2022.1/unity/glossary'
          // },
        ],
      }),
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    [
      'pwa',
      {
        debug: isDeployPreview,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        // swRegister: false,
        swCustom: require.resolve('./src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
    // ...dogfoodingPluginInstances,
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true, // force debug plugin usage
        docs: {
          // routeBasePath: '/',
          path: 'docs',
          sidebarPath: 'sidebars.js',
          // sidebarCollapsible: false,
          // sidebarCollapsed: true,
          editUrl: ({locale, docPath}) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/docusaurus-v2/${locale}`;
            }
            // We want users to submit doc updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = 'docs';
            return `https://github.com/danyow/danyow.github.io/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math, [npm2yarn, {sync: true}]],
          rehypePlugins: [],
          disableVersioning: isVersioningDisabled,
          lastVersion: isDev || isDeployPreview ? 'current' : undefined,
          onlyIncludeVersions: (() => {
            if (isBuildFast) {
              return ['current'];
            } else if (!isVersioningDisabled && (isDev || isDeployPreview)) {
              return ['current', ...versions.slice(0, 3)];
            }
            return undefined;
          })(),
          versions: {
            current: {
              label: `${getNextBetaVersionName()} 🚧`,
            },
          },
        },
        blog: {
          // routeBasePath: '/',
          path: 'blog',
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/docusaurus-v2/${locale}`;
            }
            return `https://github.com/danyow/danyow.github.io/edit/main/${blogDirPath}/${blogPath}`;
          },
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Danyow, Inc.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            // require.resolve('./_dogfooding/dogfooding.css'),
          ],
        },
        gtag: !isDeployPreview
          ? {
              trackingID: 'UA-141789564-1',
            }
          : undefined,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ <a target="_blank" rel="noopener noreferrer" href="https://github.com/danyow/danyow.github.io">如喜, 赏星</a>  ⭐️`,
      },
      prism: {
        // We need to load markdown again so that YAML is loaded before MD
        // and the YAML front matter is highlighted correctly.
        // TODO after we have forked prism-react-renderer, we should tweak the
        // import order and fix it there
        additionalLanguages: ['java', 'markdown', 'csharp', 'c', 'latex', 'lua'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      // image: 'img/docusaurus-soc.png',
      // metadata: [{name: 'twitter:card', content: 'summary'}],
      algolia: {
        appId: 'S3KRFC060Q',
        apiKey: '06d01f9fee4e5ca81a5c2a3d789de5f8',
        indexName: 'danyow',
      },
      navbar: {
        hideOnScroll: true,
        title: 'Danyow',
        logo: {
          alt: 'Danyow Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'placeholder',
            label: '储备',
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'lua',
          //   label: 'Lua',
          // },
          {to: 'blog', label: '博客', position: 'left'},
          {to: '/changelog', label: '日志', position: 'left'},
          // {to: 'showcase', label: 'Showcase', position: 'left'},
          // {
          //   to: '/community/support',
          //   label: 'Community',
          //   position: 'left',
          //   activeBaseRegex: `/community/`,
          // },
          // right
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              },
              {
                type: 'html',
                className: 'dropdown-archived-versions',
                value: '<b>Archived versions</b>',
              },
              ...ArchivedVersionsDropdownItems.map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                }),
              ),
              // {
              //   href: 'https://v1.docusaurus.io',
              //   label: '1.x.x',
              // },
              {
                to: '/versions',
                label: '所有版本',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/danyow/danyow.github.io/issues/3526',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            href: 'https://github.com/danyow/danyow.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Learn',
      //       items: [
      //         {
      //           label: 'Introduction',
      //           to: 'docs',
      //         },
      //         {
      //           label: 'Installation',
      //           to: 'docs/installation',
      //         },
      //         {
      //           label: 'Migration from v1 to v2',
      //           to: 'docs/migration',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Unity',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Feature Requests',
      //           to: '/feature-requests',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Help',
      //           to: '/community/support',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'Changelog',
      //           to: '/changelog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //         {
      //           html: `
      //           <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
      //             <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
      //           </a>
      //         `,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Legal',
      //       // Please don't remove the privacy and terms, it's a legal
      //       // requirement.
      //       items: [
      //         {
      //           label: 'Privacy',
      //           href: 'https://opensource.facebook.com/legal/privacy/',
      //         },
      //         {
      //           label: 'Terms',
      //           href: 'https://opensource.facebook.com/legal/terms/',
      //         },
      //         {
      //           label: 'Data Policy',
      //           href: 'https://opensource.facebook.com/legal/data-policy/',
      //         },
      //         {
      //           label: 'Cookie Policy',
      //           href: 'https://opensource.facebook.com/legal/cookie-policy/',
      //         },
      //       ],
      //     },
      //   ],
      //   logo: {
      //     alt: 'Facebook Open Source Logo',
      //     src: 'img/oss_logo.png',
      //     width: 160,
      //     height: 51,
      //     href: 'https://opensource.facebook.com',
      //   },
      // eslint-disable-next-line max-len
      //   copyright: `Copyright © ${new Date().getFullYear()} Danyow, Inc. Power by Docusaurus.`,
      // },
    }),
};

async function createConfig() {
  const FeatureRequestsPlugin = (
    await import('./src/plugins/featureRequests/FeatureRequestsPlugin.mjs')
  ).default;
  const configTabs = (await import('./src/remark/configTabs.mjs')).default;
  const lightTheme = (await import('./src/utils/prismLight.mjs')).default;
  const darkTheme = (await import('./src/utils/prismDark.mjs')).default;
  const katex = (await import('rehype-katex')).default;
  config.plugins?.push(FeatureRequestsPlugin);
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.theme = lightTheme;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.darkTheme = darkTheme;
  // @ts-expect-error: we know it exists, right
  config.presets[0][1].docs.remarkPlugins.push(configTabs);
  // @ts-expect-error: we know it exists, right
  config.presets[0][1].docs.rehypePlugins.push(katex);
  // @ts-expect-error: we know it exists, right
  config.presets[0][1].blog.remarkPlugins.push(configTabs);
  // @ts-expect-error: we know it exists, right
  config.presets[0][1].blog.rehypePlugins.push(katex);
  return config;
}

module.exports = createConfig;
