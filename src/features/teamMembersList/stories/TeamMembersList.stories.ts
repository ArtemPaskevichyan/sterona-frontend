import type { Meta, StoryObj } from "@storybook/vue3";
import TeamMembersList from "@/features/teamMembersList/ui/TeamMembersList.vue";
import { MockMembers } from "../lib/mocks";

const meta: Meta<typeof TeamMembersList> = {
  component: TeamMembersList,
  title: "Features/TeamList/TeamMembersList",
  tags: ["autodocs"],
  args: {
    members: MockMembers,
  },
  render: (args) => ({
    components: { TeamMembersList },
    setup() {
      return { args };
    },
    template: `<TeamMembersList v-bind="args"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
