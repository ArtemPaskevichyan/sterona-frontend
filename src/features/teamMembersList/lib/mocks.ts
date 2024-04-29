import type { Member } from "@/shared/types/team";
import type { SelectableMember } from "@/features/teamMembersList/lib/types";

export const MockTeamMember: Member = {
  id: 3,
  image: new File([], "image.png"),
  name: "Maria",
  role: "TeamLead",
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

export const SelectableMockMembers: SelectableMember[] = [
  {
    id: 0,
    image: new File([], "image.png"),
    name: "Arsenix",
    role: "Developer",
    selected: false,
  },
  {
    id: 1,
    image: new File([], "image.png"),
    name: "Gslayer",
    role: "Developer",
    selected: false,
  },
  {
    id: 2,
    image: new File([], "image.png"),
    name: "Temi4",
    role: "Developer",
    selected: false,
  },
  {
    id: 3,
    image: new File([], "image.png"),
    name: "Maria",
    role: "TeamLead",
    selected: false,
  },
];
