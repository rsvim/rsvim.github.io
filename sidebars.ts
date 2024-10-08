import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  userManualSidebarId: [
    {
      type: "category",
      label: "User Manual",
      items: [
        {
          type: "autogenerated",
          dirName: "user_manual",
        },
      ],
    },
  ],
  apiReferencesSidebarId: [
    {
      type: "category",
      label: "API References",
      items: [
        {
          type: "autogenerated",
          dirName: "api_references",
        },
      ],
    },
  ],
};

export default sidebars;
