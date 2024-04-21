import type { Meta, StoryObj } from "@storybook/vue3";
import { MockTaskModel } from "@/entities/task/lib/types";
import BaseTask from "@/entities/task/ui/BaseTask.vue";

const meta: Meta<typeof BaseTask> = {
  title: "Entities/Task/BaseTask",
  component: BaseTask,
  tags: ["autodocs"],
  args: {
    model: MockTaskModel,
  },
  render: (args) => ({
    components: { BaseTask },
    setup() {
      return { args };
    },
    template: '<BaseTask v-bind="args"/>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { ...meta.args },
};
