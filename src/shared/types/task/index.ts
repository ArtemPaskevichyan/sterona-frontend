import type { Member } from "@/shared/types/team";

export type ResponseTaskModel = {
  id: number;
  name: string;
  description: string;
  status: string;
  priority: number;
  creationDate: Date;
  closeDate: Date;
  members: number[];
};

export type TaskModel = {
  name: string;
  description: string;
  status: string;
  priority: 0 | 1 | 2 | 3;
  creationDate: Date;
  closeDate: Date;
  members: Member[];
};

export const StatusToColor = {
  Todo: {
    background: "--task-pink",
    button: "--task-pink-button",
    text: "--task-pink-text",
  },
  InProgress: {
    background: "--task-blue",
    button: "--task-blue-button",
    text: "--task-blue-text",
  },
  Blocked: {
    background: "--task-grey",
    button: "--task-grey-button",
    text: "--task-grey-text",
  },
  Done: {
    background: "--task-green",
    button: "--task-green-button",
    text: "--task-green-text",
  },
};
