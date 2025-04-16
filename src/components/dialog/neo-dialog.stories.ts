import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import NeoButton from "../button/vue/NeoButton.vue";
import NeoDialog from "./vue/NeoDialog.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoDialog> = {
  title: "Components/NeoDialog",
  component: NeoDialog,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    shape: { control: "select", options: ["rounded", "square"] },
  },
  render: args => ({
    components: { NeoDialog },
    setup: () => ({ args }),
    template: `<div style="width: 500px; height: 500px"><NeoDialog v-bind="args"><div style="padding: 0 1rem"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoDialog></div>`,
  }),
};

export default meta;

type Story = StoryObj<typeof NeoDialog>;

export const Rounded: Story = {
  args: {
    bodyOverflow: "auto",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    bodyOverflow: "auto",
  },
};

export const ButtonControlled = {
  render: args => ({
    components: { NeoDialog, NeoButton },
    setup: () => {
      const isOpened = ref(false);
      return { args, isOpened };
    },
    template: `
      <div style="width: 300px; height: 300px;">
        <NeoButton @click="isOpened = true">Open</NeoButton>
        <NeoDialog v-if="isOpened" v-bind="args" @close="isOpened = false">
          <div><h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra
              interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div>
        </NeoDialog>
      </div>`,
  }),
};
