import type { Meta, StoryObj } from "@storybook/vue3";
import TeamMembersCheckboxList from "@/features/teamMembersList/ui/TeamMembersCheckboxList.vue";
import { SelectableMockMembers } from "@/features/teamMembersList/lib/mocks";

const meta: Meta<typeof TeamMembersCheckboxList> = {
  component: TeamMembersCheckboxList,
  title: "Features/TeamList/TeamMembersCheckboxList",
  tags: ["autodocs"],
  args: {
    members: SelectableMockMembers,
  },
  render: (args) => ({
    components: { TeamMembersCheckboxList },
    setup() {
      return { args };
    },
    template: `<TeamMembersCheckboxList v-bind="args"/>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
