<template>
  <component
    :is="component"
    class="neo-button"
    v-bind="mergedAttrs"
    :class="className"
    :style="style"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { NeoButtonProps } from "../types/neo-button-props";
import { computed, toRef, useAttrs } from "vue";
import { useBgColor } from "../../../composables/use-bg-color";

defineOptions({
  name: "NeoButton",
  inheritAttrs: false,
});
const props = withDefaults(defineProps<NeoButtonProps>(), {
  component: "button",
  variant: "primary",
  size: "medium",
  shape: "rounded",
  isDisabled: false,
  loading: false,
});
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void
}>();

const isButton = computed(() => props.component === "button");
const $attrs = useAttrs();
const mergedAttrs = computed(() => {
  const { disabled, type, ...rest } = $attrs;
  return isButton.value ? $attrs : rest;
});

const { bgClassName, bgStyle } = useBgColor("neo-button", toRef(props, "bgColor"));

const canBeColored = computed(() => {
  return props.variant === "primary" || props.variant === "reverse";
});
const className = computed(() => {
  return [
    canBeColored.value && bgClassName.value,
    `neo-button--variant-${props.variant}`,
    `neo-button--size-${props.size}`,
    `neo-button--shape-${props.shape}`,
    {
      "neo-button--disabled": props.isDisabled,
      "neo-button--icon-single": props.isIcon,
    },
  ];
});
const style = computed(() => (canBeColored.value ? bgStyle.value : {}));
function handleClick(event: MouseEvent) {
  if (props.isDisabled) {
    event.preventDefault();
    return;
  }
  emit("click", event);
}
</script>

<script lang="ts">
/** This is my nice component documentation */
export default {
  name: "NeoButton",
};
</script>

<style lang="scss">
@use "../styles/neo-button.scss";
</style>
