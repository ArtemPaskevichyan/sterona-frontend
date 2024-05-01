import type { Meta, StoryObj } from "@storybook/vue3";
import { UICalendar } from "@/shared/calendar";
import { UIButton } from "@/shared/button";
import { ref } from "vue";

const meta: Meta<typeof UICalendar> = {
  title: "UI/UICalendar",
  tags: ["autodocs"],
  component: UICalendar,
  render: (args) => ({
    components: { UIButton, UICalendar },
    setup() {
      const isOpened = ref(false);
      return { args, isOpened };
    },
    template: `
      <div style="position: relative">
        <UIButton @click="isOpened = !isOpened" style="margin-bottom: 10px">открыть календарь</UIButton>
        <UICalendar v-model:isOpened="isOpened"/>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
