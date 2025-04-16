<template>
  <input v-bind="$attrs" v-model="model" :disabled="isDisabled" class="neo-input" :class="className">
</template>

<script setup lang="ts">
import type { NeoInputProps } from "../types/neo-input-props";
import { computed } from "vue";

defineOptions({
  inheritAttrs: false,
});
const props = withDefaults(defineProps<NeoInputProps>(), {
  type: "text",
  isDisabled: false,
  isError: false,
  isSuccess: false,
  placeholder: "",
  shape: "rounded",
});
const model = defineModel();
const className = computed(() => {
  return [`neo-input--shape-${props.shape}`, {
    "neo-input--disabled": props.isDisabled,
    "neo-input--error": props.isError,
    "neo-input--success": props.isSuccess,
  }];
});
</script>

<style lang="scss">
@use "../styles/neo-input.scss";
</style>
