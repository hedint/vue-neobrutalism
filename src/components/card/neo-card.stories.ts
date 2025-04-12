import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import NeoCard from "./vue/NeoCard.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoCard> = {
  title: "Components/NeoCard",
  component: NeoCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],

  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
  render: args => ({
    components: { NeoCard },
    setup: () => ({ args }),
    template: `<div style="width: 300px; height: 300px;"><NeoCard v-bind="args" @click="args.onClick"><div style="padding: 0 1rem"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoCard></div>`,
  }),
};

export default meta;

type Story = StoryObj<typeof NeoCard>;

export const Rounded: Story = {
};
export const Pill: Story = {
  args: {
    shape: "pill",
  },
  render: args => ({
    components: { NeoCard },
    setup: () => ({ args }),
    template: `<div style="width: 600px;"><NeoCard v-bind="args" @click="args.onClick"><div style="padding: 0 1rem 3rem;  text-align: center;"><h1>Title</h1><p style="width: 80%; margin: 0 auto;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoCard></div>`,
  }),
};

export const Square: Story = {
  args: {
    shape: "square",
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
export const LinkComponent: Story = {
  args: {
    component: "a",
    // @ts-expect-error attributes
    href: "https://example.com",
    target: "_blank",
  },
};

export const PredefinedColor: Story = {
  args: {
    bgColor: "neo-red",
  },
};

export const CustomHexColor: Story = {
  args: {
    bgColor: "#FFAAAA",
  },
};
