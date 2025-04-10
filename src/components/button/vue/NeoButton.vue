<template>
  <button class="neo-button" :class="className" :disabled="props.disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { NeoButtonProps } from "../types/neo-button-props";
import { computed } from "vue";

const props = withDefaults(defineProps<NeoButtonProps>(), {
  variant: "primary",
  size: "medium",
  disabled: false,
  loading: false,
  target: undefined,
  href: undefined,
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void
}>();

const className = computed(() => {
  return [`neo-button--variant-${props.variant}`, `neo-button--size-${props.size}`, {
    "neo-button--disabled": props.disabled,
    "neo-button--loading": props.loading,
  }];
});

function handleClick(event: MouseEvent) {
  emit("click", event);
}
</script>

<style lang="scss">
@use "../styles/neo-button.scss";
</style>
