import type { Meta, StoryObj } from "@storybook/vue3";
import { TeamInlineCircles } from "@/entities/team";
import { MockMembers } from "@/entities/team/lib/types";

const meta: Meta<typeof TeamInlineCircles> = {
  component: TeamInlineCircles,
  title: "Entities/Team/TeamInlineCircles",
  tags: ["autodocs"],
  argTypes: {
    shownMembersCount: Number,
  },
  args: {
    members: MockMembers,
    shownMembersCount: 3,
  },
  render: (args) => ({
    components: { TeamInlineCircles },
    setup() {
      return { args };
    },
    template: `<TeamInlineCircles v-bind="args"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
