import type { Meta, StoryObj } from "@storybook/vue3";
import { UIDropdown } from "@/shared/dropdown";
import { UIButton } from "@/shared/button";
import { UIListItem } from "@/shared/list";
import { ref } from "vue";

const meta: Meta<typeof UIDropdown> = {
  component: UIDropdown,
  title: "UI/UIDropdown",
  tags: ["autodocs"],
  render: () => ({
    components: { UIDropdown, UIButton, UIListItem },
    setup() {
      const isOpened = ref(false);
      return { isOpened };
    },
    template: `
      <div class="dropdownHolder" style="position: relative;">
        <UIButton @click="isOpened = !isOpened">Открыть выпадающее меню</UIButton>
        <UIDropdown v-if="isOpened">
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

export const Long: Story = {
  render: () => ({
    components: { UIDropdown, UIButton, UIListItem },
    setup() {
      const isOpened = ref(false);
      return { isOpened };
    },
    template: `
      <div class="dropdownHolder" style="position: relative;">
        <UIButton @click="isOpened = !isOpened">Открыть выпадающее меню</UIButton>
        <UIDropdown v-if="isOpened">
          <UIListItem v-for="i in 8">List Item {{ i }}</UIListItem>
        </UIDropdown>
      </div>
    `,
  }),
};
