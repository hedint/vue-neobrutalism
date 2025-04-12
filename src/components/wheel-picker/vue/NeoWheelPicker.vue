<template>
  <div ref="container" class="wheel-picker" :style="containerStyle" @scroll="onScroll">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="wheel-item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";

const props = withDefaults(defineProps<{
  items: string[]
  shownCount?: number
}>(), {
  shownCount: 5,
});

const container = ref<HTMLDivElement | null>(null);
const itemHeight = 40; // px

const containerStyle = computed(() => {
  return {
    height: `${itemHeight * props.shownCount}px`,
  };
});
const onScroll = (): void => {
  // Force component to re-evaluate styles on scroll
  // Vue will re-render because getItemStyle depends on scroll position
};
</script>

<style>
@keyframes fadeIn {
  from { transform: scale(1); }
  to { transform: scale(2); }
}
.wheel-picker {
  width: 100%;
  height: 240px;
  view-timeline-name: --itemTimeline;
  view-timeline-axis: block; /* или inline для горизонтального */
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.wheel-item {
  box-sizing: border-box;
  border: 1px solid #000;
  height: 40px;
  line-height: 40px;
  text-align: center;
  scroll-snap-align: center;
  font-size: 16px;
  user-select: none;
  animation: fadeIn linear;
  animation-timeline: view(block); /* Default */
  animation-range: contain 40%  contain 60%;
}
</style>
