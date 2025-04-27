import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { NeoCard } from "../card";
import NeoTabs from "./vue/NeoTabs.vue";
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NeoTabs> = {
  title: "Components/NeoTabs",
  component: NeoTabs,
  tags: ["autodocs"],
  render: (args) => {
    return {
      components: { NeoTabs },
      setup: () => ({ args }),
      template: "<NeoTabs v-bind='args' />",
    };
  },
};

export default meta;

type Story = StoryObj<typeof NeoTabs>;

export const Default: Story = {
  args: {
    tabs: [
      { label: "Tab 1", id: "Tab 1 content" },
      { label: "Tab 2", id: "Tab 2 content" },
      { label: "Tab 3", id: "Tab 3 content" },
    ],
  },
};
export const TabsCard: Story = {
  args: {
    tabs: [
      { label: "Tab 1", id: "Tab 1 content" },
      { label: "Tab 2", id: "Tab 2 content" },
    ],
  },
  render: args => ({
    components: { NeoTabs, NeoCard },
    setup: () => {
      const activeTab = ref(args.tabs[0]);
      return { args, activeTab };
    },
    template: `<NeoCard shape="square">
      <NeoTabs v-bind='args' v-model="activeTab" />
      <div class="content1" v-if="activeTab.id === 'Tab 1 content'"><h2>First panel</h2></div>
      <div class="content2" v-else><h2>Second panel</h2></div>

    </NeoCard>`,
  }),
};
