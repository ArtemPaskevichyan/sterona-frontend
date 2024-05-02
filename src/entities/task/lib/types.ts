import { type Task, TaskStatuses } from "@/shared/types/task";
import { MockMembers } from "@/entities/team";
import type { Member } from "@/shared/types/team";

export const MockTaskModel: Task = {
  closeDate: Date.now() - 2 * 24 * 60 * 60 * 1000,
  creationDate: Date.now() - 10 * 24 * 60 * 60 * 1000,
  description:
    "Необходимо доработать страницу авторизации и добавить вход через Google и VK",
  name: "Доделать страницу авторизации",
  priority: 0,
  status: TaskStatuses.Todo,
  members: MockMembers,
  id: 0,
};

export type BaseTaskEmits = {
  /**
   * Calls when user clicks expand team
   * @param e - event name
   * @param members - all members in this task team list
   */
  (e: "showTeam", members: Member[]): void;
};
