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
    isDisabled: { control: "boolean" },
    default: { control: "text" },
  },

  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
  render: args => ({
    components: { NeoButton },
    setup: () => ({ args }),
    template: `<NeoButton v-bind="args" @click="args.onClick">{{ args.default }}</NeoButton>`,
  }),
};

export default meta;

type Story = StoryObj<typeof NeoButton>;

export const Primary: Story = {
  args: {
    default: "Click Me",
    variant: "primary",
  },
};

export const PrimarySquare: Story = {
  args: {
    default: "🚀 Launch!",
    shape: "square",
  },
};

export const PrimaryPill: Story = {
  args: {
    default: "🚀 Launch!",
    shape: "pill",
  },
};

export const Reverse: Story = {
  args: {
    default: "Click Me",
    variant: "reverse",
  },
};
export const Disabled: Story = {
  args: {
    default: "Cannot Click",
    isDisabled: true,
  },
};

export const Neutral: Story = {
  args: {
    default: "Click Me",
    variant: "neutral",
  },
};
export const ReverseNeutral: Story = {
  args: {
    default: "Click Me",
    variant: "reverse-neutral",
  },
};

export const Text: Story = {
  args: {
    default: "Click Me",
    variant: "text",
  },
};

export const LinkComponent: Story = {
  args: {
    default: "Click Me",
    variant: "text",
    component: "a",
    // @ts-expect-error attributes
    href: "https://example.com",
    target: "_blank",
  },
};

export const PredefinedColor: Story = {
  args: {
    bgColor: "neo-red",
    default: "Click Me",
  },
};

export const CustomHexColor: Story = {
  args: {
    bgColor: "#FFAAAA",
    default: "Click Me",
  },
};
