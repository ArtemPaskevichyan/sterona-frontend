import type { Meta, StoryObj } from "@storybook/vue3";
import UIListItem from "../ui/UIListItem.vue";

const meta: Meta<typeof UIListItem> = {
  title: "UI/UIListItem",
  component: UIListItem,
  tags: ["autodocs"],
  render: () => ({
    components: { UIListItem },
    template: `<UIListItem>List Item</UIListItem>`,
  }),
};
export default meta;
type Story = StoryObj<typeof meta>;

export const SingleExample: Story = {};

export const MultipleExample: Story = {
  render: () => ({
    components: { UIListItem },
    template: `<UIListItem v-for="i in 5">List Item {{ i }}</UIListItem>`,
  }),
};
