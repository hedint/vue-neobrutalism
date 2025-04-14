import type { Meta, StoryObj } from "@storybook/vue3";
import NeoDialog from "./vue/NeoDialog.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoDialog> = {
  title: "Components/NeoDialog",
  component: NeoDialog,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  render: args => ({
    components: { NeoDialog },
    setup: () => ({ args }),
    template: `<div style="width: 300px; height: 300px;"><NeoDialog v-bind="args"><div style="padding: 0 1rem"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoDialog></div>`,
  }),
};

export default meta;

type Story = StoryObj<typeof NeoDialog>;

export const Default: Story = {
};
