<script setup lang="ts">
import type { UIModalProps, UIModalSlot } from "../lib/types";

const isOpened = defineModel("isOpened", { type: Boolean, required: true });
defineSlots<UIModalSlot>();
withDefaults(defineProps<UIModalProps>(), {
  closeOnClickOutside: false,
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpened"
      class="modal"
      @click="
        () => {
          if (closeOnClickOutside) isOpened = !isOpened;
        }
      "
    >
      <div
        class="modal__content"
        @click.stop
      >
        <div
          v-if="title"
          class="modal__header"
        >
          <h3>{{ title }}</h3>
          <button @click="isOpened = !isOpened">
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
        </div>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    height: 80%;
    width: min(450px, 90%);
    border-radius: 30px;
    background-color: var(--default-background-color);
    padding: 20px 30px;
    box-sizing: border-box;
  }

  &__header {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 12px;

    h3 {
      margin: 0;
      color: var(--text-black);
      font-size: var(--large-font-style);
      flex-grow: 1;
    }

    button {
      all: unset;
      width: 20px;
      height: 20px;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--text-gray);
      cursor: pointer;
      margin-top: 5px;
      flex-shrink: 0;

      &:hover {
        background-color: var(--element-light-gray);
      }

      svg {
        position: relative;
        translate: 1% 1%;
      }
    }
  }
}

.fade-enter-active {
  transition: 0.3s opacity;

  .modal__content {
    transition: 0.3s scale;
  }
}

.fade-leave-active {
  transition: 0.2s opacity;

  .modal__content {
    transition: 0.2s scale;
  }
}

.fade-enter-from {
  opacity: 0;

  .modal__content {
    scale: 0.9;
  }
}

.fade-leave-to {
  opacity: 0;

  .modal__content {
    scale: 1.1;
  }
}
</style>
