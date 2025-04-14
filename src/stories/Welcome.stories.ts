import type { Meta, StoryObj } from "@storybook/vue3";
import Welcome from "./components/Welcome.vue";

const meta: Meta<typeof Welcome> = {
  title: "Welcome", // Will appear first in sidebar due to the "00-" prefix
  component: Welcome,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: "This introduction page to vue-neobrutalism UI library.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
