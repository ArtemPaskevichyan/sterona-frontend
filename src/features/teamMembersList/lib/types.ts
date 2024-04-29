import type { Member } from "@/shared/types/team";

export type TeamMembersListItemProps = {
  /**
   * Team Member model
   */
  model: Member;
};

export type TeamMembersListItemSlots = {
  /**
   * Right side interactive element (checkbox, radio button e.t.c.)
   */
  control(): any;
};

export type TeamMembersListProps = {
  /**
   * List of team members to display
   */
  members: Member[];
};

export type SelectableMember = Member & { selected: boolean };

export type TeamMembersCheckboxListProps = {
  /**
   * List of team members to display
   */
  members: SelectableMember[];
};

export type TeamMembersCheckboxListEmits = {
  /**
   * Emits when member select is updated. Gives a member as param.
   *
   */
  (e: "updated", member: SelectableMember): void;
};

export type TeamMembersListModalProps = {
  /**
   * List of team members to display in modal
   */
  members: Member[];
  /**
   * v-model. Is modal opened
   */
  isOpened: boolean;
  /**
   * Title of modal
   */
  title: string;
};
