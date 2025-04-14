<template>
  <div class="neo-dialog" role="dialog" :class="dialogClassName" @click.self="onClose">
    <div class="neo-dialog__container" :class="containerClassName">
      <div class="neo-dialog__close" @click="onClose">
        <slot name="close">
          <NeoButton
            is-icon
            variant="reverse"
            size="large"
            aria-label="Close dialog"
          >
            <IconClose />
          </NeoButton>
        </slot>
      </div>

      <div class="neo-dialog__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NeoDialogProps } from "../types/neo-dialog-props";
import { computed, onMounted, onUnmounted, ref } from "vue";
import NeoButton from "../../button/vue/NeoButton.vue";
import IconClose from "../../icons/vue/IconClose.vue";

const props = withDefaults(defineProps<NeoDialogProps>(), {
  shape: "rounded",
});
const emit = defineEmits(["close"]);

const containerClassName = computed(() => {
  return [
    `neo-dialog__container--shape-${props.shape}`,
  ];
});

const isCloseAnimating = ref(false);
const onClose = () => {
  if (isCloseAnimating.value) {
    return;
  }
  isCloseAnimating.value = true;
  setTimeout(() => {
    emit("close");
  }, 300);
};

const documentOverflow = ref("auto");
const onEscPressed = (event: KeyboardEvent) => {
  if (event.key === "Escape" || event.keyCode === 27) {
    emit("close");
  }
};

const dialogClassName = computed(() => {
  return {
    "neo-dialog--close-animating": isCloseAnimating.value,
  };
});

onMounted(() => {
  documentOverflow.value = document.body.style.overflow || "auto";
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", onEscPressed);
});
onUnmounted(() => {
  document.body.style.overflow = documentOverflow.value;
  document.removeEventListener("keydown", onEscPressed);
});
</script>

<style lang="scss">
@use "../styles/neo-dialog.scss";
</style>
