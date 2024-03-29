<script setup lang="ts">
import { type UILoaderProps } from "../lib/type";

const { size } = withDefaults(defineProps<UILoaderProps>(), {
  size: "large",
});
</script>

<template>
  <div
    class="loader"
    :class="{
      large: size == 'large',
      medium: size == 'medium',
      small: size == 'small',
    }"
  ></div>
</template>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  box-sizing: border-box;
  border-radius: 50%;
  border: 3px solid var(--theme-color);
  border-top: 3px solid transparent;
  animation: 1s spin ease-in-out infinite;

  &.large {
    height: 32px;
    width: 32px;
    border-width: 3px;
  }

  &.medium {
    height: 20px;
    width: 20px;
    border-width: 3px;
  }

  &.small {
    height: 12px;
    width: 12px;
    border-width: 2px;
  }
}
</style>
