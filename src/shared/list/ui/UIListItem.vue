<script setup lang="ts"></script>

<template>
  <div class="listItem">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.listItem {
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
}

.listItem:not(:last-child) {
  border-bottom: 1px solid var(--element-gray);
}
</style>
