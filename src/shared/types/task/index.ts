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
  status: TaskStatus;
  priority: 0 | 1 | 2 | 3;
  creationDate: number;
  closeDate: number;
  members: Member[];
};

export type Task = TaskModel & { id: number };

export type TaskStatus = {
  background: string;
  button: string;
  text: string;
  identifier: string;
  title: String;
};

export const TaskStatuses: {
  Todo: TaskStatus;
  InProgress: TaskStatus;
  Blocked: TaskStatus;
  Done: TaskStatus;
} = {
  Todo: {
    background: "--task-pink",
    button: "--task-pink-button",
    text: "--task-pink-text",
    identifier: "Todo",
    title: "To-Do",
  },
  InProgress: {
    background: "--task-blue",
    button: "--task-blue-button",
    text: "--task-blue-text",
    identifier: "InProgress",
    title: "In Progress",
  },
  Blocked: {
    background: "--task-grey",
    button: "--task-grey-button",
    text: "--task-grey-text",
    identifier: "Blocked",
    title: "Blocked",
  },
  Done: {
    background: "--task-green",
    button: "--task-green-button",
    text: "--task-green-text",
    identifier: "Done",
    title: "Done",
  },
};
