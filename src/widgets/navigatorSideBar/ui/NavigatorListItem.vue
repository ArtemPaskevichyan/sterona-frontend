<script setup lang="ts">
import type {
  NavigatorListItemProps,
  NavigatorListItemSlots,
} from "@/widgets/navigatorSideBar/lib/types";

withDefaults(defineProps<NavigatorListItemProps>(), { isActive: false });
defineSlots<NavigatorListItemSlots>();
</script>

<template>
  <RouterLink
    class="navigatorLink"
    :class="{ active: isActive }"
    :to="target"
  >
    <slot
      class="navigatorLink__icon"
      name="icon"
    ></slot>
    {{ title }}
  </RouterLink>
</template>

<style scoped lang="scss">
.navigatorLink {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 28px;
  border-radius: 6px;
  padding: 4px 10px;
  box-sizing: border-box;
  margin-bottom: 4px;
  background: var(--default-background-color);
  color: var(--text-black);
  cursor: pointer;
  transition: 0.1s background;
  font-size: var(--default-font-size);
  font-weight: var(--regular-font-weight);
  text-decoration: none;
  gap: 0.6em;
  letter-spacing: -0.03em;

  &:hover {
    background: var(--element-light-gray);
  }

  &.active {
    color: var(--theme-color);
    background: var(--element-light-gray);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
