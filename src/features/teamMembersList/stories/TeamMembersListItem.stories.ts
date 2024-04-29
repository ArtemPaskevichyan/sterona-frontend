import type { Meta, StoryObj } from "@storybook/vue3";
import TeamMembersListItem from "@/features/teamMembersList/ui/TeamMembersListItem.vue";
import { MockTeamMember } from "@/features/teamMembersList/lib/mocks";

const meta: Meta<typeof TeamMembersListItem> = {
  title: "Features/TeamList/TeamMembersListItem",
  component: TeamMembersListItem,
  tags: ["autodocs"],
  args: {
    model: MockTeamMember,
  },
  render: (args) => ({
    components: { TeamMembersListItem },
    setup() {
      return { args };
    },
    template: `<TeamMembersListItem v-bind="args"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
