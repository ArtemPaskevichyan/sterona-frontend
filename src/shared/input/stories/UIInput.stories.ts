import type { Meta, StoryObj } from "@storybook/vue3";
import UIInput from "@/shared/input/ui/UIInput.vue";

const meta: Meta<typeof UIInput> = {
  title: "UI/Input/UIInput",
  component: UIInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: String,
    type: String,
    value: String,
    error: Boolean,
  },
  args: {
    placeholder: "Введите текст",
    type: "text",
    value: "",
    error: false,
  },
  render: (args) => ({
    components: { UIInput },
    setup() {
      return { args };
    },
    template: '<UIInput v-bind="args" v-model:value="args.value"/>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...meta.args },
};

export const Error: Story = {
  args: { ...meta.args, error: true },
};
