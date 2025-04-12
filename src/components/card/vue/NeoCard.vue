<template>
  <component :is="component" class="neo-card" :class="className" :style="bgStyle" @click="handleClick">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { NeoCardProps } from "../types/neo-card-props";
import { useBgColor } from "@/composables/use-bg-color";
import { computed, toRef } from "vue";

const props = withDefaults(defineProps<NeoCardProps>(), {
  component: "div",
  isDisabled: false,
  shape: "rounded",
  interactive: false,
  bgColor: "neo-white",
});
const emit = defineEmits(["click"]);

const { bgClassName, bgStyle } = useBgColor("neo-card", toRef(props, "bgColor"));

const className = computed(() => {
  return [
    bgClassName.value,
    `neo-card--shape-${props.shape}`,
    {
      "neo-card--disabled": props.isDisabled,
      "neo-card--interactive": props.interactive,
    },
  ];
});

const handleClick = (event: MouseEvent) => {
  if (props.isDisabled) {
    event.preventDefault();
    return;
  }
  emit("click", event);
};
</script>

<style lang="scss">
@use "../styles/neo-card.scss";
</style>
