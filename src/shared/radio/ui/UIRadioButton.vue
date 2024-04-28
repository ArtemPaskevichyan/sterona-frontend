<script setup lang="ts">
import type { UIRadioButtonEmits, UIRadioButtonProps } from "../lib/types";

const value = defineModel("value", { type: Boolean, required: true });
const props = defineProps<UIRadioButtonProps>();
const emit = defineEmits<UIRadioButtonEmits>();

function update() {
  value.value = !value.value;
  emit("updated", !value.value);
}
</script>

<template>
  <span
    class="radioButton"
    @click="update"
  >
    <input
      :checked="value"
      class="radioButton__input"
      type="radio"
    />
    <label class="radioButton__title">
      {{ props.title ?? "" }}
    </label>
  </span>
</template>

<style scoped lang="scss">
.radioButton {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &__input {
    all: unset;
    display: inline-block;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid var(--element-gray);
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &:checked {
      background: var(--theme-color);
      border: 1px solid var(--theme-color-dark);

      &::after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        background: white;
      }
    }

    &:active {
      filter: brightness(0.95);
    }
  }

  &__title {
    color: var(--text-black);
    cursor: pointer;
  }
}
</style>
