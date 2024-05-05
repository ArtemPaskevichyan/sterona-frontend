import type { TaskModel, TaskStatus } from "@/shared/types/task";
import type { Member } from "@/shared/types/team";

export type CreateTaskProps = {
  /**
   * v-model. Defines if create task popup shown
   */
  isOpened: boolean;
  /**
   * All available statuses for this task
   */
  statuses: TaskStatus[];
  /**
   * Status of this task
   */
  status: TaskStatus;
  /**
   * An array of possible members of this task
   */
  possibleMembers: Member[];
};

export type CreateTaskEmits = {
  /**
   * Emits when user adds a task
   * @param e – name of emit
   * @param task – new instance of task
   */
  (e: "created", task: TaskModel): void;
};
