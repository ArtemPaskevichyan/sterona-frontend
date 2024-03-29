import type { Meta, StoryObj } from "@storybook/vue3";
import UILink from "@/shared/link/ui/UILink.vue";

const meta: Meta<typeof UILink> = {
  title: "UI/UILink",
  tags: ["autodocs"],
  component: UILink,
  render: () => ({
    components: { UILink },
    template: "<UILink>Link</UILink>",
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
