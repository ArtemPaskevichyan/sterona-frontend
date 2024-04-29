import type { Meta, StoryObj } from "@storybook/vue3";
import { UIDropdown } from "@/shared/dropdown";
import { UIButton } from "@/shared/button";
import { UIListItem } from "@/shared/list";
import { ref } from "vue";

const meta: Meta<typeof UIDropdown> = {
  component: UIDropdown,
  title: "UI/UIDropdown",
  tags: ["autodocs"],
  args: {
    isOpened: false,
  },
  render: (args) => ({
    components: { UIDropdown, UIButton, UIListItem },
    setup() {
      const isOpened = ref(args.isOpened);
      return { isOpened, args };
    },
    template: `
      <div style="position: relative;">
        <UIButton @click="isOpened = !isOpened">Открыть выпадающее меню</UIButton>
        <UIDropdown v-bind="args" v-model:is-opened="isOpened">
          <UIListItem>To-Do</UIListItem>
          <UIListItem>In Progress</UIListItem>
          <UIListItem>Blocked</UIListItem>
          <UIListItem>Done</UIListItem>
        </UIDropdown>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Short: Story = {
  args: {
    ...meta.args,
    short: true,
  },
};

export const LongHeight: Story = {
  args: {
    ...meta.args,
  },
  render: (args) => ({
    components: { UIDropdown, UIButton, UIListItem },
    setup() {
      const isOpened = ref(args.isOpened);
      return { args, isOpened };
    },
    template: `
      <div style="position: relative;">
        <UIButton @click="isOpened = !isOpened">Открыть выпадающее меню</UIButton>
        <UIDropdown v-bind="args" v-model:is-opened="isOpened">
          <UIListItem v-for="i in 8">List Item {{ i }}</UIListItem>
        </UIDropdown>
      </div>
    `,
  }),
};
