import type { Meta, StoryObj } from "@storybook/vue3";
import NeoWheelPicker from "./vue/NeoWheelPicker.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoWheelPicker> = {
  title: "Components/NeoWheelPicker",
  component: NeoWheelPicker,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NeoWheelPicker>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: {
    items: ["Apple", "Banana", "Orange", "Mango", "Peach", "Grape"],
  },
  render: (args) => {
    return {
      components: { NeoWheelPicker },
      setup: () => ({ args }),
      template: "<NeoWheelPicker v-bind='args' />",
    };
  },
};
