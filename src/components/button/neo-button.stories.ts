import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import NeoButton from "./vue/NeoButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoButton> = {
  title: "Components/NeoButton",
  component: NeoButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    default: { control: "text" },
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof NeoButton>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary: Story = {
  args: {
    default: "Click Me", // Using 'default' to represent the slot content
  },
  render: (args) => {
    return {
      components: { NeoButton },
      setup: () => ({ args }),
      template: "<NeoButton >{{args.default}}</NeoButton>",
    };
  },
};

export const PrimarySquare: Story = {
  args: {
    default: "🚀 Launch!",
    shape: "square",
  },
  render: args => ({
    components: { NeoButton },
    setup: () => ({ args }),
    template: "<NeoButton v-bind='args' >{{args.default}}</NeoButton>",
  }),
};

export const PrimaryPill: Story = {
  args: {
    default: "🚀 Launch!",
    shape: "pill",
  },
  render: args => ({
    components: { NeoButton },
    setup: () => ({ args }),
    template: "<NeoButton v-bind='args' >{{args.default}}</NeoButton>",
  }),
};

export const Reverse: Story = {
  args: {
    default: "Click Me", // Using 'default' to represent the slot content
    variant: "reverse",
  },
  render: (args) => {
    return {
      components: { NeoButton },
      setup: () => ({ args }),
      template: "<NeoButton v-bind='args' >{{args.default}}</NeoButton>",
    };
  },
};
export const Disabled: Story = {
  args: {
    default: "Cannot Click",
    disabled: true,
  },
  render: args => ({
    components: { NeoButton },
    setup: () => ({ args }),
    template: "<NeoButton :disabled=\"args.disabled\" > {{ args.default }}</NeoButton>",
  }),
};

export const Neutral: Story = {
  args: {
    default: "Click Me", // Using 'default' to represent the slot content
    variant: "neutral",
  },
  render: (args) => {
    return {
      components: { NeoButton },
      setup: () => ({ args }),
      template: "<NeoButton v-bind='args' >{{args.default}}</NeoButton>",
    };
  },
};
export const ReverseNeutral: Story = {
  args: {
    default: "Click Me", // Using 'default' to represent the slot content
    variant: "reverse-neutral",
  },
  render: (args) => {
    return {
      components: { NeoButton },
      setup: () => ({ args }),
      template: "<NeoButton v-bind='args' >{{args.default}}</NeoButton>",
    };
  },
};

export const Text: Story = {
  args: {
    default: "Click Me", // Using 'default' to represent the slot content
    variant: "text",
  },
  render: (args) => {
    return {
      components: { NeoButton },
      setup: () => ({ args }),
      template: "<NeoButton v-bind='args' >{{args.default}}</NeoButton>",
    };
  },
};
