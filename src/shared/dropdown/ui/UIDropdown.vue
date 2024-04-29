<script setup lang="ts">
import type { UIDropdownSlots, UIDropdownProps } from "../lib/types";
import { watch, nextTick } from "vue";
const isOpened = defineModel("isOpened", { type: Boolean, required: true });
withDefaults(defineProps<UIDropdownProps>(), { short: false });
defineSlots<UIDropdownSlots>();
watch(isOpened, () => {
  if (isOpened.value === true) {
    setTimeout(() => {
      document.addEventListener(
        "click",
        () => {
          isOpened.value = false;
        },
        { once: true },
      );
    });
  }
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpened"
      class="dropdown"
      :class="{ short: short }"
      @click.stop
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 218px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  overflow: auto;
  padding: 0 16px;
  box-sizing: border-box;
  background: var(--default-background-color);
  z-index: 1;

  &.short {
    right: unset;
    width: max-content;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s all;
}

.fade-enter-to,
.fade-leave-from {
  transform-origin: top left;
}

.fade-enter-from,
.fade-leave-to {
  transform-origin: top left;
  scale: 0.9;
  opacity: 0;
}
</style>
