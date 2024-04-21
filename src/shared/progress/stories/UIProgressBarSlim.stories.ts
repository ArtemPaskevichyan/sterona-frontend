import type { Meta, StoryObj } from "@storybook/vue3";
import UIProgressBarSlim from "@/shared/progress/ui/UIProgressBarSlim.vue";

const meta: Meta<typeof UIProgressBarSlim> = {
  title: "UI/ProgressBar/ProgressBarSlim",
  component: UIProgressBarSlim,
  tags: ["autodocs"],
  args: {
    progress: 0.7,
    dangerBorder: 0.8,
  },
  render: (args) => ({
    components: { UIProgressBarSlim },
    setup() {
      return { args };
    },
    template: '<UIProgressBarSlim v-bind="args"/>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { ...meta.args },
};

export const Danger: Story = {
  args: { ...meta.args, progress: 0.85 },
};
