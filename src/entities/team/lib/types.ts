import type { Member } from "@/shared/types/team";

export type TeamInlineCirclesProps = {
  /**
   * Numbers of members shown. Circle with 'expand' will also be shown.
   */
  shownMembersCount: number;
  /**
   * list of members
   */
  members: Member[];
};

export type TeamInlineCirclesEmits = {
  /**
   * Calls when user click on ellipsis
   * @param e - event name
   * @param members - all members in this team list
   */
  (e: "extend", members: Member[]): void;
};

export const MockMembers: Member[] = [
  {
    id: 1,
    // image: new File([], "image.png"),
    name: "Arseniks",
    role: "Developer",
  },
  {
    id: 2,
    // image: new File([], "image.png"),
    name: "Gslayer",
    role: "Developer",
  },
  {
    id: 3,
    // image: new File([], "image.png"),
    name: "Temi4",
    role: "Developer",
  },
  {
    id: 4,
    // image: new File([], "image.png"),
    name: "Marina",
    role: "TeamLead",
  },
];
