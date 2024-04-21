<script setup lang="ts">
import { computed } from "vue";
import { TooltipDirection, type TooltipProps } from "../lib/types";

const props = defineProps<TooltipProps>();

const directionClass = computed(() => {
  if (props.direction == TooltipDirection.Top) return "uiTooltip-top";
  if (props.direction == TooltipDirection.Right) return "uiTooltip-right";
  if (props.direction == TooltipDirection.Bottom) return "uiTooltip-bottom";
  if (props.direction == TooltipDirection.Left) return "uiTooltip-left";
  return "";
});
</script>

<template>
  <span
    class="uiTooltip"
    :class="directionClass"
  >
    {{ props.label }}
  </span>
</template>

<style scoped lang="scss">
.uiTooltip {
  display: inline-block;
  min-height: 19px;
  width: max-content;
  max-width: 215px;
  border-radius: 4px;
  color: var(--text-black);
  font-size: var(--small-font-size);
  font-weight: var(--regular-font-weight);
  background-color: var(--default-background-color);
  padding: 2px 6px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  white-space: normal;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
  }

  &-bottom {
    top: 100%;
    left: 50%;
    translate: -50% 0;

    &::after {
      border-bottom-color: var(--default-background-color);
      left: 50%;
      top: 0;
      translate: -50% -100%;
    }
  }

  &-left {
    right: 100%;
    top: 50%;
    translate: 0 -50%;

    &::after {
      border-left-color: var(--default-background-color);
      top: 50%;
      right: 0;
      translate: 100% -50%;
    }
  }

  &-top {
    top: 100%;
    left: 50%;
    translate: 0 -50%;

    &::after {
      border-top-color: var(--default-background-color);
      left: 50%;
      bottom: 0;
      translate: -50% 100%;
    }
  }

  &-right {
    left: 100%;
    top: 50%;
    translate: 0 -50%;

    &::after {
      border-right-color: var(--default-background-color);
      top: 50%;
      left: 0;
      translate: -100% -50%;
    }
  }
}
</style>
