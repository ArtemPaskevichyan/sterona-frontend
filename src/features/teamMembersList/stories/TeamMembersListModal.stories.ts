import type { Meta, StoryObj } from "@storybook/vue3";
import { TeamMembersListModal } from "@/features/teamMembersList";
import { MockMembers } from "@/features/teamMembersList/lib/mocks";
import { UIButton } from "@/shared/button";
import { ref } from "vue";

const meta: Meta<typeof TeamMembersListModal> = {
  title: "Features/TeamList/TeamMembersListModal",
  tags: ["autodocs"],
  component: TeamMembersListModal,
  args: {
    isOpened: false,
    title: "Команда",
    members: MockMembers,
  },
  render: (args) => ({
    components: { UIButton, TeamMembersListModal },
    setup() {
      const isOpened = ref(args.isOpened);
      return { args, isOpened };
    },
    template: `
        <div id="modal">
          <UIButton @click="isOpened = !isOpened">Открыть модальное окно</UIButton>
          <TeamMembersListModal v-bind="args" v-model:is-opened="isOpened"/>
        </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
