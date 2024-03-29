import type { Meta, StoryObj } from "@storybook/vue3";
import { UIButtonStates } from "@/shared/button/lib/types";
import UIButton from "@/shared/button/ui/UIButton.vue";

const meta: Meta<typeof UIButton> = {
  title: "UI/UIButton",
  component: UIButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        labels: ["Default", "Outlined", "Disabled", "Primary", "Danger"],
      },
      options: [0, 1, 2, 3, 4],
    },
    short: Boolean,
  },
  args: {
    short: false,
    type: UIButtonStates.Default,
  },
  render: (args) => ({
    components: { UIButton },
    setup() {
      return { args };
    },
    template: '<UIButton v-bind="args">Button</UIButton>',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...meta.args },
};

export const Outlined: Story = {
  args: {
    ...meta.args,
    type: UIButtonStates.Outlined,
  },
};

export const Disabled: Story = {
  args: {
    ...meta.args,
    type: UIButtonStates.Disabled,
  },
};

export const Primary: Story = {
  args: {
    ...meta.args,
    type: UIButtonStates.Primary,
  },
};

export const Danger: Story = {
  args: {
    ...meta.args,
    type: UIButtonStates.Danger,
  },
};

export const Short: Story = {
  args: {
    ...meta.args,
    short: true,
  },
};
