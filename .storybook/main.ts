import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  webpackFinal: async (config) => {
    config?.resolve?.modules?.push(`${process.cwd()}/src`);
    return config;
  },
};
export default config;
