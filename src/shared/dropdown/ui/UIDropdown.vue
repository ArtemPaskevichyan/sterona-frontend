<script setup lang="ts">
import type { UIDropdownSlots } from "../lib/types";
defineSlots<UIDropdownSlots>();
</script>

<template>
  <div class="dropdown">
    <slot></slot>
  </div>
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
}
</style>
