<template>
  <span class="neo-tag" :class="className" :style="styles">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { NeoTagProps } from "../types/neo-tag-props";
import { computed, toRef } from "vue";
import { useBgColor } from "../../../composables/use-bg-color";

const props = withDefaults(defineProps<NeoTagProps>(), {
  bgColor: "neo-white",
  textColor: "neo-black",
});
const { bgClassName, bgStyle } = useBgColor("neo-tag", toRef(props, "bgColor"));
const predefinedTextColors = ["neo-black", "neo-white"];
const className = computed(() =>
  [
    bgClassName.value,
    predefinedTextColors.includes(props.textColor) && `neo-tag--text-${props.textColor}`,
  ].filter(Boolean),
);
const styles = computed(() => ({
  ...bgStyle.value,
  ...(!predefinedTextColors.includes(props.textColor) && { color: props.textColor }),
}));
</script>

<style lang="scss">
@use "../styles/neo-tag.scss";
</style>
