<template>
  <span class="neo-tag" :class="className" :style="styles">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { NeoTagProps } from "../types/neo-tag-props";
import { computed } from "vue";

const props = withDefaults(defineProps<NeoTagProps>(), {
  bgColor: "neo-white",
  textColor: "neo-black",
});
const predefinedBgColors = ["neo-white", "neo-black", "neo-red", "neo-yellow", "neo-blue", "neo-green", "neo-purple", "neo-orange", "neo-pink", "neo-lime", "neo-sky", "neo-beige"];
const predefinedTextColors = ["neo-black", "neo-white"];
const className = computed(() =>
  [
    predefinedBgColors.includes(props.bgColor) && `neo-tag--bg-${props.bgColor}`,
    predefinedTextColors.includes(props.textColor) && `neo-tag--text-${props.textColor}`,
  ].filter(Boolean),
);
const styles = computed(() => ({
  ...(!predefinedBgColors.includes(props.bgColor) && { backgroundColor: props.bgColor }),
  ...(!predefinedTextColors.includes(props.textColor) && { color: props.textColor }),
}));
</script>

<style lang="scss">
@use "../styles/neo-tag.scss";
</style>
