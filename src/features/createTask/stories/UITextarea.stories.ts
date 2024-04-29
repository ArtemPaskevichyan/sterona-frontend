import type { Meta, StoryObj } from "@storybook/vue3";
import { UITextarea } from "@/shared/textarea";

const meta: Meta<typeof UITextarea> = {
  title: "UI/UITextarea",
  component: UITextarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: String,
    value: String,
    error: Boolean,
  },
  args: {
    placeholder: "Введите текст",
    value: "",
    error: false,
  },
  render: (args) => ({
    components: { UITextarea },
    setup() {
      return { args };
    },
    template: '<UITextarea v-bind="args" v-model:value="args.value"/>',
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
