import type { Meta, StoryObj } from "@storybook/vue3";
import { TooltipWrapper } from "@/shared/tooltip";
import { UIButton } from "@/shared/button";
import { ref } from "vue";

const meta: Meta<typeof TooltipWrapper> = {
  title: "UI/TooltipWrapper",
  component: TooltipWrapper,
  tags: ["autodocs"],
  argTypes: {
    label: String,
    showTooltip: {
      defaultValue: false,
      type: "boolean",
    },
  },
  args: {
    label: "Осталось 15 дней",
  },
  render: (args) => ({
    components: { UIButton, TooltipWrapper },
    setup: () => {
      const isTooltipShown = ref(false);

      function showTooltip() {
        isTooltipShown.value = true;
      }
      function hideTooltip() {
        isTooltipShown.value = false;
      }
      return { args, isTooltipShown, showTooltip, hideTooltip };
    },
    template: `
      <TooltipWrapper
        v-model:show-tooltip="isTooltipShown"
        :label="args.label"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
      >
        <UIButton>Наведи</UIButton>
      </TooltipWrapper>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
