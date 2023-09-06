import { Meta, StoryObj } from "@storybook/react";
import { Main } from ".";

const storyMeta = {
  title: "components/Main",
  component: Main,
  args: {
    title: "Nextjs boilerplate",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Main>;

export const Default: StoryObj = {};
export const Basic: StoryObj = {
  args: {
    title: "main page title",
  },
};

export default storyMeta;
