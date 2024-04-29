import type { TaskModel, TaskStatus } from "@/shared/types/task";

export type BaseBoardColumnProps = {
  /**
   * Status for tasks in this column. For example 'Done'. Sets colors and title of the column
   */
  status: TaskStatus;
  /**
   * Tasks in this column
   */
  tasks: TaskModel[];
};
