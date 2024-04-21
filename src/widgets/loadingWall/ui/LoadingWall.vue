<script setup lang="ts">
import { UILoader } from "@/shared/loader";
</script>

<template>
  <div class="loadingWall">
    <UILoader />
  </div>
</template>

<style scoped lang="scss">
.loadingWall {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
</style>
