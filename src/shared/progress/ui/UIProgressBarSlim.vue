<script setup lang="ts">
import type { UIProgressBarSlimProps } from "../lib/types";

defineProps<UIProgressBarSlimProps>();
</script>

<template>
  <div
    class="progressBar"
    :class="{ danger: progress > (dangerBorder ?? 1) }"
  >
    <div
      class="progressBar__fill"
      :style="{ '--value': progress }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.progressBar {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: var(--element-light-gray);
  --fill-color: var(--theme-color);

  &__fill {
    height: 100%;
    border-radius: 2px;
    width: calc(100% * var(--value));
    background-color: var(--fill-color);
  }

  &.danger {
    --fill-color: var(--element-red);
  }
}
</style>
