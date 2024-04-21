<script setup lang="ts">
import { ref, watch } from "vue";
import {
  type UIInputEmits,
  type UIInputProps,
  type UIInputSlots,
} from "../lib/types";

const props = withDefaults(defineProps<UIInputProps>(), {
  type: "text",
  placeholder: "",
  error: false,
});

const emit = defineEmits<UIInputEmits>();

defineSlots<UIInputSlots>();

const innerText = ref(props.value);
watch(innerText, () => {
  emit("update:value", innerText.value);
});
</script>

<template>
  <div
    class="input"
    :class="{ error: props.error }"
  >
    <div class="input__field">
      <input
        v-model="innerText"
        :type="props.type"
        required
        placeholder=" "
      />
      <slot name="button"></slot>
      <span
        v-if="props.placeholder"
        class="placeholder"
      >
        {{ props.placeholder }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  background: var(--default-background-color);
  padding-top: 10px;
  position: relative;
  border-radius: 6px;
  z-index: 1;
  --accent-color: var(--element-gray);

  &.error {
    --accent-color: var(--text-red);
  }

  &__field {
    border: 1px solid var(--accent-color);
    height: 26px;
    padding: 0 12px;
    border-radius: 6px;
    width: auto;
    display: flex;
    box-sizing: border-box;
  }
}

input {
  border: none;
  background: none;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: var(--default-font-size);
  font-weight: var(--regular-font-weight);
  color: var(--text-black);
  display: flex;
  align-items: center;
  z-index: 10;
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--theme-color);
  }
}

input:not(:placeholder-shown) ~ .placeholder {
  transform: scale(0.65);
  bottom: 18px;
  background: var(--default-background-color);
  z-index: 2;
}

input:placeholder-shown ~ .placeholder {
  bottom: 5px;
}

.placeholder {
  position: absolute;
  display: inline-block;
  color: var(--accent-color);
  font-size: var(--default-font-size);
  font-weight: var(--regular-font-weight);
  left: 10px;
  padding: 0 2px;
  box-sizing: border-box;
  transition: 0.2s ease-out;
  transform-origin: left center;
  z-index: -1;
  pointer-events: none;
  border-radius: 4px;
}
</style>
