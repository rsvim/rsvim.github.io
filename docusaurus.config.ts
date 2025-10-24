import { themes as prismThemes } from "prism-react-renderer";
import type { Config, DefaultParseFrontMatter } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "RSVIM",
  tagline: "The VIM editor reinvented in Rust+TypeScript.",
  favicon:
    "https://raw.githubusercontent.com/rsvim/assets/main/logo/RSVIM-logo-square.png",

  // Set the production url of your site here
  url: "https://rsvim.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rsvim", // Usually your GitHub org/user name.
  projectName: "rsvim", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rsvim/rsvim.github.io/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: ["G-VSKBV47BJ0", "GT-5D9JBQRP"],
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-52JR9XCL",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    ["@docusaurus/theme-search-algolia", { id: "1" }],
    ["@docusaurus/theme-search-algolia", { id: "2" }],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:
      "https://raw.githubusercontent.com/rsvim/assets/main/logo/RSVIM-logo-square.png",
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      appId: "6GZS4A5AM4",
      apiKey: "43f79b6b63823243472aa2acca6cc9ea",
      indexName: "rsvimio",
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    navbar: {
      title: "RSVIM",
      logo: {
        src: "https://raw.githubusercontent.com/rsvim/assets/main/logo/RSVIM-logo-square.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "userManualSidebarId",
          position: "left",
          label: "User Manual",
        },
        {
          type: "docSidebar",
          sidebarId: "apiReferencesSidebarId",
          position: "left",
          label: "API References",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "/sponsor",
          position: "left",
          label: "Sponsor",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/rsvim/rsvim",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Reference",
          items: [
            {
              label: "Vim help",
              to: "https://vimhelp.org/",
            },
            {
              label: "Neovim help",
              to: "https://neovim.io/doc/user/index.html",
            },
            {
              label: "Deno APIs",
              to: "https://docs.deno.com/api/deno/~/Deno",
            },
            {
              label: "WinterTC",
              to: "https://min-common-api.proposal.wintertc.org/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/MSVJEGsC",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "RFC",
              href: "https://github.com/rsvim/rfc",
            },
            {
              label: "GitHub",
              href: "https://github.com/rsvim/rsvim",
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 RSVIM. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "powershell",
        "python",
        "rust",
        "javascript",
        "typescript",
        "json",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    format: "mdx",
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
      onBrokenMarkdownImages: "warn",
    },
    // Add front matters for generated typedoc APIs.
    parseFrontMatter: async (params: {
      filePath: string;
      fileContent: string;
      defaultParseFrontMatter: DefaultParseFrontMatter;
    }) => {
      // console.log(`params.filePath:${params.filePath}`);
      const result = await params.defaultParseFrontMatter(params);

      // Set front matter
      if (params.filePath.endsWith("RsvimCmd/README.md")) {
        result.frontMatter = {
          title: "RsvimCmd",
        };
      } else if (params.filePath.endsWith("RsvimFs/README.md")) {
        result.frontMatter = {
          title: "RsvimFs",
        };
      } else if (params.filePath.endsWith("GlobalThis/README.md")) {
        result.frontMatter = {
          title: "GlobalThis",
        };
      }

      // console.log(result);
      return result;
    },
  },
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    experimental_faster: {
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
    },
  },
};

export default config;
