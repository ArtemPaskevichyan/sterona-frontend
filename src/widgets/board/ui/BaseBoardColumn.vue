<script setup lang="ts">
import type { BaseBoardColumnProps } from "../lib/types";
import { BaseTask } from "@/entities/task";
import { StatusToColor } from "@/entities/task";
import { computed } from "vue";

const props = defineProps<BaseBoardColumnProps>();
const columnAccentColor = computed(() => {
  // @ts-ignore
  return StatusToColor[props.status].background ?? "--task-grey";
});
</script>

<template>
  <div
    class="baseBoardColumn"
    :style="{
      '--column-accent-color': `var(${columnAccentColor})`,
      '--button-accent-color': `var(${columnAccentColor}-button)`,
      '--text-accent-color': `var(${columnAccentColor}-text)`,
    }"
  >
    <div class="baseBoardColumn__header">
      <span class="baseBoardColumn__title">{{ props.title }}</span>
      <button class="baseBoardColumn__addButton">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 0.833333C4.16667 0.373096 4.53976 0 5 0C5.46024 0 5.83333 0.373096 5.83333 0.833333V9.16667C5.83333 9.6269 5.46024 10 5 10C4.53976 10 4.16667 9.6269 4.16667 9.16667V0.833333Z"
            fill="currentColor"
          />
          <path
            d="M0.833333 5.83333C0.373096 5.83333 0 5.46024 0 5C0 4.53976 0.373096 4.16667 0.833333 4.16667H9.16667C9.6269 4.16667 10 4.53976 10 5C10 5.46024 9.6269 5.83333 9.16667 5.83333H0.833333Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div class="baseBoardColumn__tasks">
      <BaseTask
        v-for="(task, index) in props.tasks"
        :key="index"
        :model="task"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.baseBoardColumn {
  display: flex;
  flex-direction: column;
  width: 270px;
  --column-accent-color: var(--task-grey);
  --button-accent-color: var(--task-grey);
  --text-accent-color: var(--task-grey);
  border: 1px solid var(--element-gray);

  &:not(:last-child) {
    border-right: none;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 14px;
    border-bottom: 1px solid var(--element-gray);
    background-color: var(--column-accent-color);
  }
  &__addButton {
    all: unset;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: var(--button-accent-color);
    color: var(--text-accent-color);
    box-sizing: border-box;
    display: flex;
    cursor: pointer;

    &:active {
      filter: brightness(0.97);
    }
  }
  &__title {
    color: var(--text-black);
    font-size: var(--default-font-size);
  }
  &__tasks {
    padding: 12px 6px;

    .baseTask:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
