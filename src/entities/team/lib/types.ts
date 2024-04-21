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

export type Member = {
  id: number;
  name: string;
  role: string;
  image: File;
};

export const MockMembers: Member[] = [
  {
    id: 0,
    image: new File([], "image.png"),
    name: "Arsenix",
    role: "Developer",
  },
  {
    id: 1,
    image: new File([], "image.png"),
    name: "Gslayer",
    role: "Developer",
  },
  {
    id: 2,
    image: new File([], "image.png"),
    name: "Temi4",
    role: "Developer",
  },
  {
    id: 3,
    image: new File([], "image.png"),
    name: "Maria",
    role: "TeamLead",
  },
];
