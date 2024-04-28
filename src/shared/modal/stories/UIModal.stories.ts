import type { Meta, StoryObj } from "@storybook/vue3";
import UIModal from "../ui/UIModal.vue";
import { UIButton } from "@/shared/button";
import { ref } from "vue";

const meta: Meta<typeof UIModal> = {
  title: "UI/UIModal",
  component: UIModal,
  tags: ["autodocs"],
  argTypes: {
    isOpened: Boolean,
    closeOnClickOutside: Boolean,
    title: String,
  },
  args: {
    isOpened: false,
    closeOnClickOutside: false,
    title: "Модальное окно",
  },
  render: (args) => ({
    components: { UIButton, UIModal },
    setup() {
      const isOpened = ref(args.isOpened);
      return { args, isOpened };
    },
    template: `
      <UIButton @click="isOpened = !isOpened">Открыть модальное окно</UIButton>
      <UIModal v-bind="args" v-model:is-opened="isOpened">
        <UIButton @click="isOpened = !isOpened">Закрыть окно</UIButton>
      </UIModal>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CloseOnClickOutside: Story = {
  args: {
    ...meta.args,
    closeOnClickOutside: true,
  },
};
