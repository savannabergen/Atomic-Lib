import type { StorybookConfig } from "@storybook/react";

const config: StorybookConfig = {
  stories: ["../src/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true
  }
};

export default config;
