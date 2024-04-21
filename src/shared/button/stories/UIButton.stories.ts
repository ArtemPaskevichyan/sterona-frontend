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
    square: Boolean,
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

export const Square: Story = {
  args: {
    ...meta.args,
    square: true,
  },
  render: (args) => ({
    components: { UIButton },
    setup() {
      return { args };
    },
    template: `
      <UIButton v-bind="args">
        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z" fill="currentColor"/>
          <path d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.89543 10 2Z" fill="currentColor"/>
          <path d="M16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 0 14 0C15.1046 0 16 0.89543 16 2Z" fill="currentColor"/>
        </svg>
      </UIButton>
    `,
  }),
};
