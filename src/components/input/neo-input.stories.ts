import type { Meta, StoryObj } from "@storybook/vue3";
import NeoInput from "./vue/NeoInput.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoInput> = {
  title: "Components/NeoInput",
  component: NeoInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
    isError: { control: "boolean" },
    placeholder: { control: "text" },
  },
  render: (args) => {
    return {
      components: { NeoInput },
      setup: () => ({ args }),
      template: "<NeoInput v-bind='args' />",
    };
  },
};

export default meta;

type Story = StoryObj<typeof NeoInput>;

export const Rounded: Story = {
};

export const Pill: Story = {
  args: {
    shape: "pill",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};

export const Success: Story = {
  args: {
    isSuccess: true,
  },
};
