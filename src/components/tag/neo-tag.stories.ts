import type { Meta, StoryObj } from "@storybook/vue3";
// NeoTag.stories.ts
import NeoTag from "./vue/NeoTag.vue";

const meta: Meta<typeof NeoTag> = {
  title: "Components/NeoTag",
  component: NeoTag,
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "text" },
    textColor: { control: "text" },
    default: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof NeoTag>;

// Predefined combinations

export const WhiteBlack: Story = {
  args: {
    bgColor: "neo-white",
    textColor: "neo-black",
    default: "White / Black",
  },
};

export const BlackWhite: Story = {
  args: {
    bgColor: "neo-black",
    textColor: "neo-white",
    default: "Black / White",
  },
};

export const RedWhite: Story = {
  args: {
    bgColor: "neo-red",
    textColor: "neo-black",
    default: "Red / White",
  },
};

export const YellowBlack: Story = {
  args: {
    bgColor: "neo-yellow",
    textColor: "neo-black",
    default: "Yellow / Black",
  },
};

export const BlueWhite: Story = {
  args: {
    bgColor: "neo-blue",
    textColor: "neo-black",
    default: "Blue / Black",
  },
};

export const GreenWhite: Story = {
  args: {
    bgColor: "neo-green",
    textColor: "neo-black",
    default: "Green / Black",
  },
};

// Custom combination

export const CustomHex: Story = {
  args: {
    bgColor: "#ffeb3b",
    textColor: "#1a237e",
    default: "Custom Colors",
  },
};
