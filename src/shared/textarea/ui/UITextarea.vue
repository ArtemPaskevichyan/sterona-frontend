<script setup lang="ts">
import type { UITextareaProps } from "../lib/types";

const value = defineModel("value", { type: String, required: true });
const props = withDefaults(defineProps<UITextareaProps>(), {
  type: "text",
  placeholder: "",
  error: false,
});
</script>

<template>
  <textarea
    v-model="value"
    :placeholder="props.placeholder"
    :class="{ error: props.error }"
  ></textarea>
</template>

<style scoped lang="scss">
textarea {
  --accent-color: var(--element-gray);
  background: var(--default-background-color);
  border: 1px solid var(--accent-color);
  min-height: 140px;
  padding: 4px 12px;
  box-sizing: border-box;
  margin: 0;
  font-size: var(--default-font-size);
  font-weight: var(--regular-font-weight);
  color: var(--text-black);
  border-radius: 6px;
  resize: none;
  display: block;
  width: 100%;

  &:focus {
    outline: none;
    --accent-color: var(--theme-color);
  }

  &::placeholder {
    color: var(--accent-color);
    transition: 0.3s color;
  }
}

.error {
  --accent-color: var(--text-red);
}
</style>
