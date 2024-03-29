import type { Meta, StoryObj } from "@storybook/vue3";
import UILoader from "@/shared/loader/ui/UILoader.vue";

const meta: Meta<typeof UILoader> = {
  title: "UI/UILoader",
  tags: ["autodocs"],
  component: UILoader,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    size: "large",
  },
  render: (args) => ({
    components: { UILoader },
    setup() {
      return { args };
    },
    template: '<UILoader :size="args.size" />',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {};

export const Medium: Story = {
  args: { size: "medium" },
};

export const Small: Story = {
  args: { size: "small" },
};
