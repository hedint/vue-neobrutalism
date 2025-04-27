<template>
  <div role="tablist" class="neo-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="neo-tabs__item"
      role="tab"
      :aria-controls="`panel-${tab.id}`"
      :class="getTabClassName(tab.id)"
      @click="selectTab(tab)"
    >
      <slot name="tab-view" :tab="tab">
        {{ tab.label }}
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NeoTab, NeoTabsProps } from "../types/neo-tabs.ts";
import { onMounted } from "vue";

const props = defineProps<NeoTabsProps>();

const activeTab = defineModel<NeoTab | null>({ default: null });
const isTabActive = (tabId: string | number) => {
  return activeTab.value?.id === tabId;
};
const getTabClassName = (tabId: string | number) => {
  return {
    "neo-tabs__item--active": isTabActive(tabId),
  };
};
const selectTab = (tab: NeoTab) => {
  activeTab.value = tab;
};
onMounted(() => {
  if (activeTab.value === null && props.tabs.length > 0) {
    activeTab.value = props.tabs[0];
  }
});
</script>

<style lang="scss">
@use "../styles/neo-tabs.scss";
</style>
