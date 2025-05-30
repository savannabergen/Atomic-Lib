import type { StorybookConfig } from "@storybook/react";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};

export default config;
