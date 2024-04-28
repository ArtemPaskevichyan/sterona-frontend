import type { TaskModel } from "@/shared/types/task";

export type BaseBoardColumnProps = {
  /**
   * Title in column header
   */
  title: string;
  /**
   * Status code for tasks in this column. For example 'Done'
   */
  status: string;
  /**
   * Tasks in this column
   */
  tasks: TaskModel[];
};
