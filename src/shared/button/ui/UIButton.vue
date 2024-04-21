<script setup lang="ts">
import {
  UIButtonStates,
  type UIButtonProps,
  type UIButtonSlots,
} from "../lib/types";

const props = withDefaults(defineProps<UIButtonProps>(), {
  short: false,
  type: UIButtonStates.Default,
});

defineSlots<UIButtonSlots>();
</script>

<template>
  <button
    :class="{
      default: props.type == UIButtonStates.Default,
      outlined: props.type == UIButtonStates.Outlined,
      disabled: props.type == UIButtonStates.Disabled,
      primary: props.type == UIButtonStates.Primary,
      danger: props.type == UIButtonStates.Danger,
      short: props.short,
      square: props.square,
    }"
    :disabled="props.type == UIButtonStates.Disabled"
  >
    <slot> </slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
  min-width: 130px;
  height: 26px;
  border-radius: 6px;
  margin: 0;
  padding: 0 22px;
  font-size: var(--default-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;

  &:not(.disabled) {
    cursor: pointer;

    &:not(.primary):hover {
      filter: brightness(0.97);
    }

    &:not(.primary):active {
      filter: brightness(0.92);
    }

    &.primary:hover {
      opacity: 0.9;
    }

    &.primary:active {
      opacity: 0.8;
    }
  }

  &.disabled {
    background-color: var(--element-light-gray);
    color: var(--text-gray);
  }

  &.default {
    background-color: var(--element-light-gray);
    color: var(--theme-color);
  }

  &.outlined {
    background-color: var(--default-background-color);
    border: 1px solid var(--theme-color);
    color: var(--theme-color);
  }

  &.primary {
    background-color: var(--theme-color);
    color: white;
  }

  &.danger {
    background-color: var(--element-light-gray);
    color: var(--text-red);
  }

  &.short {
    min-width: auto;
  }

  &.square {
    padding: 5px;
    min-width: unset;
    width: 26px;
  }
}
</style>
