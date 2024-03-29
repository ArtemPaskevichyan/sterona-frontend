<script setup lang="ts">
import { type UILinkSlots } from "../lib/types";

defineSlots<UILinkSlots>();
</script>

<template>
  <span class="link">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
.link {
  color: var(--theme-color);
  font-size: var(--default-font-size);
  text-decoration: underline;
  cursor: pointer;
  font-weight: var(--regular-font-weight);
  transition: 0.2s all;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
}
</style>
