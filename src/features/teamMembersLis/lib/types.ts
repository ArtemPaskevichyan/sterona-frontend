import type { Member } from "@/shared/types/team";

export type TeamMemberListItemProps = {
  /**
   * Team Member model
   */
  model: Member;
};

export type TeamMemberListItemSlots = {
  /**
   * Right side interactive element (checkbox, radio button e.t.c.)
   */
  control(): any;
};

export type TeamMemberListProps = {
  /**
   * List of team members to display
   */
  members: Member[];
};

export type SelectableMember = Member & { selected: boolean };

export type TeamMemberCheckboxListProps = {
  /**
   * List of team members to display
   */
  members: SelectableMember[];
};

export type TeamMemberCheckboxListEmits = {
  /**
   * Emits when member select is updated. Gives a member as param.
   *
   */
  (e: "updated", member: SelectableMember): void;
};
