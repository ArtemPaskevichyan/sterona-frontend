import type { Task, TaskStatus } from "@/shared/types/task";
import type { Member } from "@/shared/types/team";

export type EditTaskProps = {
  /**
   * v-model. Defines if create task popup shown
   */
  isOpened: boolean;
  /**
   * All available statuses for this task
   */
  statuses: TaskStatus[];
  /**
   * Editable task
   */
  task: Task;
  /**
   * An array of possible members of this task
   */
  possibleMembers: Member[];
};

export type EditTaskEmits = {
  /**
   * Emits when user applies changes on task
   * @param e – name of emit
   * @param task – new instance of task
   */
  (e: "updated", task: Task): void;
  /**
   * Emits when user deletes task
   * @param e – name of emit
   * @param taskId – id of deleting task
   */
  (e: "deleted", taskId: number): void;
};
