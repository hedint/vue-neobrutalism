import type { Preview } from "@storybook/vue3";
import "./storybook.css";
import "../src/assets/styles/theme.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Welcome",
          "ThemeEditor",
          "Components",
        ],
      },
    },

  },
  tags: ["autodocs"],

};

export default preview;
