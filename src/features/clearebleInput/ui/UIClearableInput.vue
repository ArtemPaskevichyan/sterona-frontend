<script setup lang="ts">
import UIInput from "@/shared/input/ui/UIInput.vue";
import type { UIClearableInputProps } from "../lib/types";

const value = defineModel("value", { type: String, required: true });
const props = defineProps<UIClearableInputProps>();

function clear() {
  value.value = "";
}
</script>

<template>
  <UIInput
    v-model:value="value"
    :type="props.type"
    :error="props.error"
    :placeholder="props.placeholder"
  >
    <template v-slot:button>
      <button
        v-if="value.length > 0"
        @click="clear"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.214286 9.78572C0.357143 9.92857 0.5 10 0.714286 10C0.928571 10 1.07143 9.92857 1.21429 9.78572L5 6L8.78571 9.78572C8.92857 9.92857 9.14286 10 9.28571 10C9.42857 10 9.64286 9.92857 9.78571 9.78572C10.0714 9.5 10.0714 9.07143 9.78571 8.78571L6 5L9.78571 1.21429C10.0714 0.928571 10.0714 0.5 9.78571 0.214286C9.5 -0.0714286 9.07143 -0.0714286 8.78571 0.214286L5 4L1.21429 0.214286C0.928571 -0.0714286 0.5 -0.0714286 0.214286 0.214286C-0.0714286 0.5 -0.0714286 0.928571 0.214286 1.21429L4 5L0.214286 8.78571C-0.0714286 9.07143 -0.0714286 9.5 0.214286 9.78572Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </template>
  </UIInput>
</template>

<style scoped lang="scss">
button {
  padding: 0;
  margin: 0;
  background: none;
  color: var(--text-gray);
  border: none;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.6);
  }
}
</style>
