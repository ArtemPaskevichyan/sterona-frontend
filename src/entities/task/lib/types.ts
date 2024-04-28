import type { TaskModel } from "@/shared/types/task";
import { MockMembers } from "@/entities/team";
import type { Member } from "@/shared/types/team";

export const MockTaskModel: TaskModel = {
  closeDate: new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000),
  creationDate: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
  description:
    "Необходимо доработать страницу авторизации и добавить вход через Google и VK",
  name: "Доделать страницу авторизации",
  priority: 0,
  status: "Todo",
  members: MockMembers,
};

export type BaseTaskEmits = {
  /**
   * Calls when user clicks expand team
   * @param e - event name
   * @param members - all members in this task team list
   */
  (e: "showTeam", members: Member[]): void;
};
