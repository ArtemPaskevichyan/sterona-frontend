import type { Meta, StoryObj } from "@storybook/vue3";
import { UITooltip } from "@/shared/tooltip";
import { TooltipDirection } from "../lib/types";

const meta: Meta<typeof UITooltip> = {
  title: "UI/UITooltip",
  component: UITooltip,
  tags: ["autodocs"],
  argTypes: {
    label: String,
    direction: {
      control: {
        type: "select",
        labels: ["Top", "Right", "Bottom", "Left"],
      },
      options: [
        TooltipDirection.Top,
        TooltipDirection.Right,
        TooltipDirection.Bottom,
        TooltipDirection.Left,
      ],
    },
  },
  args: {
    label: "Осталось 15 дней",
    direction: TooltipDirection.Left,
  },
  render: (args) => ({
    components: { UITooltip },
    setup: () => {
      return { args };
    },
    template: `<UITooltip v-bind="args"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    ...meta.args,
    direction: TooltipDirection.Top,
  },
};

export const Right: Story = {
  args: {
    ...meta.args,
    direction: TooltipDirection.Right,
  },
};

export const Bottom: Story = {
  args: {
    ...meta.args,
    direction: TooltipDirection.Bottom,
  },
};

export const Left: Story = {
  args: {
    ...meta.args,
    direction: TooltipDirection.Left,
  },
};
