import type { Meta, StoryObj } from "@storybook/vue3";
import UIPasswordInput from "@/features/passwordInput/ui/UIPasswordInput.vue";

const meta: Meta<typeof UIPasswordInput> = {
  title: "UI/Input/UIPasswordInput",
  tags: ["autodocs"],
  component: UIPasswordInput,
  argTypes: {
    placeholder: String,
    value: String,
  },
  args: {
    placeholder: "password",
    value: "12345678",
  },
  render: (args) => ({
    components: { UIPasswordInput },
    setup() {
      return { args };
    },
    template: '<UIPasswordInput v-bind="args" v-model:value="args.value"/>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: { ...meta.args, error: true },
};
