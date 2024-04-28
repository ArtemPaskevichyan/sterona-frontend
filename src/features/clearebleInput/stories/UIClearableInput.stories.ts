import type { Meta, StoryObj } from "@storybook/vue3";
import { UIClearableInput } from "@/features/clearebleInput";

const meta: Meta<typeof UIClearableInput> = {
  title: "UI/Input/UIClearableInput",
  tags: ["autodocs"],
  component: UIClearableInput,
  argTypes: {
    placeholder: String,
    type: String,
    value: String,
    error: Boolean,
  },
  args: {
    placeholder: "Введите текст",
    type: "text",
    value: "Clearable text",
    error: false,
  },
  render: (args) => ({
    components: { UIClearableInput },
    setup() {
      return { args };
    },
    template: '<UIClearableInput v-bind="args" v-model:value="args.value"/>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    ...meta.args,
    value: "",
  },
};
