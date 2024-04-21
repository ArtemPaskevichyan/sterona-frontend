import type { Member } from "@/entities/team";
import { MockMembers } from "@/entities/team";

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

export const MockTaskModel: TaskModel = {
  closeDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
  creationDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  description:
    "Необходимо доработать страницу авторизации и добавить вход через Google и VK",
  name: "Доделать страницу авторизации",
  priority: 0,
  status: "Todo",
  members: MockMembers,
};
