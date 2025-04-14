<template>
  <div class="neo-dialog" role="dialog" @click.self="emit('close')">
    <div class="neo-dialog__container">
      <div class="neo-dialog__close" @click="emit('close')">
        <slot name="close">
          <NeoButton
            is-icon
            variant="reverse"
            size="large"
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
import { onMounted, onUnmounted, ref } from "vue";
import NeoButton from "../../button/vue/NeoButton.vue";
import IconClose from "../../icons/vue/IconClose.vue";

const emit = defineEmits(["close"]);

const documentOverflow = ref("auto");

const onEscPressed = (event: KeyboardEvent) => {
  if (event.key === "Escape" || event.keyCode === 27) {
    emit("close");
  }
};

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
