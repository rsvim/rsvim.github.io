import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "RSVIM",
  tagline: "The VIM editor reinvented in Rust+Typescript.",
  favicon:
    "https://raw.githubusercontent.com/rsvim/assets/main/logo/RSVIM-logo-square-whitebg.png",

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
  onBrokenMarkdownLinks: "warn",

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
          editUrl: "https://github.com/rsvim/rsvim.github.io/tree/main/docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:
      "https://raw.githubusercontent.com/rsvim/assets/main/logo/RSVIM-logo-square-whitebg.png",
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "RSVIM",
      logo: {
        src: "https://raw.githubusercontent.com/rsvim/assets/main/logo/RSVIM-logo-square-whitebg.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "manualSidebarId",
          position: "left",
          label: "User Manual",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebarId",
          position: "left",
          label: "API References",
        },
        { to: "/blog", label: "Blog", position: "left" },
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
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
