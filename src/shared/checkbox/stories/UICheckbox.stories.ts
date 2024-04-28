import type { Meta, StoryObj } from "@storybook/vue3";
import { UICheckbox } from "@/shared/checkbox";

const meta: Meta<typeof UICheckbox> = {
  component: UICheckbox,
  title: "UI/UICheckbox",
  tags: ["autodocs"],
  args: {
    value: false,
    title: "Checkbox",
  },
  render: (args) => ({
    components: { UICheckbox },
    setup() {
      return { args };
    },
    template: `<UICheckbox v-bind="args" v-model:value="args.value"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...meta.args,
  },
};
