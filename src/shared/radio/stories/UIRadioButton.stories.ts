import type { Meta, StoryObj } from "@storybook/vue3";
import UIRadioButton from "../ui/UIRadioButton.vue";

const meta: Meta<typeof UIRadioButton> = {
  title: "UI/RadioButton",
  component: UIRadioButton,
  tags: ["autodocs"],
  args: {
    value: true,
    title: "Radio Button",
  },
  render: (args) => ({
    components: { UIRadioButton },
    setup() {
      return { args };
    },
    template: `<UIRadioButton v-bind="args" v-model:value="args.value"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...meta.args },
};
