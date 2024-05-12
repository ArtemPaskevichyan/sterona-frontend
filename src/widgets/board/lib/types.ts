import type { Task, TaskModel, TaskStatus } from "@/shared/types/task";
import type { Member } from "@/shared/types/team";

export type BaseBoardColumnProps = {
  /**
   * Status for tasks in this column. For example 'Done'. Sets colors and title of the column
   */
  status: TaskStatus;
  /**
   * Tasks in this column
   */
  tasks: Task[];
  /**
   * The array of board members
   */
  boardMembers: Member[];
};

export type BaseBoardColumnEmits = {
  /**
   * Emits when user dropped task on the column
   * @param e – name of emit
   * @param task – dragged task
   */
  (e: "taskDropped", task: Task): void;
  /**
   * Emits when user updated task
   * @param e – name of emit
   * @param task – updated task
   */
  (e: "taskUpdated", task: Task): void;
  /**
   * Emits when user adds a task
   * @param e – name of emit
   * @param task – new instance of task
   */
  (e: "taskCreated", task: TaskModel): void;
  /**
   * Emits when user deletes a task
   * @param e – name of emit
   * @param taskId – id of deleting task
   */
  (e: "taskDeleted", taskId: number): void;
};
