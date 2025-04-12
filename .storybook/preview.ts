import type { Preview } from "@storybook/vue3";
import "../src/assets/styles/theme.css";

const preview: Preview = {
  parameters: {
    cssprops: {
      "neo-border-color": {
        value: "#505050",
        description: "Black borders",
      },
      "neo-border-radius": {
        value: "0px",
        description: "Slight rounding, can be 0 for sharper corners",
      },
      "neo-border-width": {
        value: "2px",
        description: "Border width",
      },
      "neo-padding-x": {
        value: "1.5rem",
        description: "Horizontal padding (24px)",
      },
      "neo-padding-y": {
        value: "0.75rem",
        description: "Vertical padding (12px)",
      },
      "neo-shadow-color": {
        value: "#000",
        description: "Black shadows",
      },
      "neo-shadow-offset-x": {
        value: "4px",
        description: "Horizontal shadow offset",
      },
      "neo-shadow-offset-y": {
        value: "4px",
        description: "Vertical shadow offset",
      },
      "controls": {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
      "cssprops": {
        value: "#fff",
        description: "White background",
      },
      "neo-accent-bg": {
        value: "#fde047",
        description: "A bright yellow for accents/hover",
      },
      "neo-primary-text": {
        value: "#000",
        description: "Black text",
      },
    },

  },
  tags: ["autodocs"],

};

export default preview;
