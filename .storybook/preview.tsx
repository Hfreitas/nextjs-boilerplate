import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import React from "react";
import RootLayout from "../src/app/layout";
import "../src/ui/styles/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
    (Story) => (
      <>
        <RootLayout>
          <Story />
        </RootLayout>
      </>
    ),
  ],
};

export default preview;
