<script setup lang="ts">
import { NavigatorSideBar } from "@/widgets/navigatorSideBar";
</script>

<template>
  <div class="appLayout">
    <NavigatorSideBar class="appLayout__navigator" />
    <main
      id="appContent"
      class="appLayout__content"
    >
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.appLayout {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &__navigator {
    flex-shrink: 0;
  }

  &__content {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border: none;
    overflow: auto;
  }
}
</style>
