<script setup lang="ts">
import type { UICheckboxEmits, UICheckboxProps } from "../lib/types";

const value = defineModel("value", { type: Boolean, required: true });
const props = defineProps<UICheckboxProps>();
const emit = defineEmits<UICheckboxEmits>();

function update() {
  value.value = !value.value;
  emit("updated", !value.value);
}
</script>

<template>
  <span
    class="checkbox"
    @click="update"
  >
    <span class="checkbox__inputGroup">
      <input
        class="checkbox__input"
        type="checkbox"
        :checked="value"
      />
      <span
        class="checkbox__checkmark"
        :style="{ display: value ? 'inline-block' : 'none' }"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3748 0.825697C9.93557 0.485463 9.32112 0.589565 9.0012 1.05675L4.43343 7.73956L1.91721 5.01515C1.54651 4.59367 0.924441 4.57335 0.528347 4.96945C0.132254 5.363 0.111941 6.0257 0.485183 6.44464C0.485183 6.44464 3.54221 9.83683 3.98147 10.1771C4.42073 10.5173 5.03518 10.4132 5.3551 9.94601L10.5932 2.28566C10.9131 1.81593 10.8141 1.16339 10.3748 0.825697Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </span>
    <label class="checkbox__title">
      {{ props.title ?? "" }}
    </label>
  </span>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &__inputGroup {
    width: 20px;
    height: 20px;
    position: relative;
  }

  &__input {
    all: unset;
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid var(--element-gray);
    border-radius: 4px;
    box-sizing: border-box;

    &:checked {
      border: 1px solid var(--theme-color-dark);
      background: var(--theme-color);
    }

    &:active {
      filter: brightness(0.95);
    }
  }

  &__checkmark {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    pointer-events: none;
  }

  &__title {
    color: var(--text-black);
    cursor: pointer;
  }
}
</style>
